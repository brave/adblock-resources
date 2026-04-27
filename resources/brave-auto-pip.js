/* ============================================================================
 * brave-auto-pip — automatic Picture-in-Picture toggle for HTML5 <video>
 * ============================================================================
 *
 * What it does
 * ------------
 *   1. Force-enables PiP on videos that explicitly disable it (Netflix,
 *      certain DRM players) by clearing `disablePictureInPicture` and
 *      watching for sites that try to re-set it.
 *   2. Wires `mediaSession.setActionHandler("enterpictureinpicture")` so
 *      browsers / OSes that fire it (auto-PiP on tab switch) just work.
 *   3. Adds a clickable PiP control:
 *        - Native injection on YouTube / Twitch / Netflix (matches each
 *          site's existing controls bar).
 *        - Otherwise a Firefox-style "Pop out this video" hover pill
 *          that floats over the video, fades in on hover, fades out
 *          after a small grace period, and shrinks to icon-only after
 *          the first click.
 *   4. Handles many videos on the same page (feeds, comment embeds,
 *      modal players) and tracks add/remove via MutationObserver.
 *
 * Configuration (per-origin localStorage)
 * ---------------------------------------
 *   localStorage.usegeneric_pip
 *     unset / "1" / "true" / "yes" / "on"   -> generic overlay pill (default)
 *     "0"   / "false" / "no"   / "off"      -> use site-specific native
 *                                              injection (YouTube/Twitch/Netflix)
 *
 *   Set via DevTools console on the desired origin, then reload the tab.
 *
 * Browser support
 * ---------------
 *   - Chromium (Brave, Chrome, Edge): full support, all features.
 *   - Firefox: PiP works, but Firefox already ships a built-in "Pop out
 *     this video" toggle so the script's pill is redundant there.
 *   - Safari (iOS 14+): falls back to `webkitSetPresentationMode`. The
 *     hover pill switches to a tap-to-reveal pill (3 s auto-hide).
 *   - Other / older: script bails out at startup if no PiP API is
 *     present at all.
 *
 * Architecture
 * ------------
 *   * One shared mousemove / touchstart / scroll / resize / fullscreen
 *     listener set, regardless of how many videos are on the page
 *     (`overlays` registry + `armGlobals()` / `maybeDisarmGlobals()`).
 *   * Off-screen videos are gated out of the hot path by a single
 *     `IntersectionObserver` (`visibleOverlays` subset).
 *   * Every per-video registration records a teardown function in
 *     `videoCleanups` so the listeners, observers, and pill button are
 *     all removed if the page drops the video element.
 *
 * Source of original auto-PiP behaviour:
 *   https://old.reddit.com/r/brave_browser/comments/1r8edg4/
 * ============================================================================ */
(function() {
  const VERSION = "v0.37-refactor";

  // ---------------------------------------------------------------------------
  // Tunables
  //
  // Collected here so a user / maintainer can adjust spacing, timing and
  // viewport behaviour without hunting through the file.
  // ---------------------------------------------------------------------------
  const CONFIG = {
    // Vertical offset added to the pill's centred-mid-right position
    // (positive = down). Empirically tuned so the pill sits below the
    // typical site control bar instead of overlapping it.
    PILL_OFFSET_Y: 160,
    // Horizontal gap from the right edge of the visible video to the pill.
    PILL_RIGHT_MARGIN: 12,
    // Minimum gap between the pill and any viewport edge.
    VIEWPORT_PAD: 8,
    // Delay between the cursor leaving the video/pill region and the
    // pill fading out — protects against flicker when the cursor
    // crosses the gap from video to pill.
    HOVER_GRACE_MS: 150,
    // How long the pill stays revealed after a tap on a touch device.
    TOUCH_REVEAL_MS: 3000,
    // Maximum time we wait for `loadedmetadata` before issuing PiP.
    METADATA_WAIT_MS: 3000,
    // IntersectionObserver buffer so the pill is in place before the
    // video fully scrolls into view.
    IO_ROOT_MARGIN: "100px",
  };

  // ---------------------------------------------------------------------------
  // Module-level state
  // ---------------------------------------------------------------------------

  // video element -> cleanup function. Populated when a video is wired
  // up; called from the discovery MutationObserver when a tracked video
  // is removed from the DOM, so we can release every listener and the
  // pill DOM node it owns.
  const videoCleanups = new WeakMap();

  // ---------------------------------------------------------------------------
  // Overlay registry + viewport gating
  //
  // Goal: O(1) document/window listeners regardless of video count, and
  // O(visible) (not O(total)) work per scroll/mousemove tick. A single
  // shared listener set walks the registry; an IntersectionObserver
  // narrows iteration to the videos actually on screen.
  // ---------------------------------------------------------------------------

  // Every overlay that has been registered (lifetime registry).
  const overlays = new Set();
  // Subset of `overlays` whose video is currently intersecting the
  // viewport. Hot-path iteration uses this set so off-screen videos in
  // long feeds don't pay layout costs on every scroll frame.
  const visibleOverlays = new Set();
  // Reverse lookup for the IntersectionObserver callback (entry.target
  // is the video element).
  const videoToOverlay = new WeakMap();
  let intersectionObserver = null;
  function getIO() {
    if (intersectionObserver) return intersectionObserver;
    if (typeof IntersectionObserver === "undefined") return null;
    intersectionObserver = new IntersectionObserver((entries) => {
      for (let i = 0; i < entries.length; i++) {
        const e = entries[i];
        const inst = videoToOverlay.get(e.target);
        if (!inst) continue;
        if (e.isIntersecting) {
          visibleOverlays.add(inst);
        } else if (visibleOverlays.delete(inst)) {
          // Force a final update so any visible pill hides cleanly.
          inst.update();
        }
      }
    }, { rootMargin: CONFIG.IO_ROOT_MARGIN });
    return intersectionObserver;
  }
  // Last known pointer position (numbers, never the MouseEvent — keeping
  // the event alive across rAF ticks pins extra DOM references in V8's
  // closure environment).
  let mmX = 0, mmY = 0;
  // Coalescing flags — collapse bursts of mousemove / scroll / etc. into
  // a single per-frame tick instead of one tick per event.
  let mmTickScheduled = false;
  let updTickScheduled = false;
  // True when global listeners are currently attached. Reference-counted
  // by `overlays.size` so we only listen while at least one overlay is live.
  let globalsArmed = false;

  function _mmTick() {
    mmTickScheduled = false;
    const x = mmX, y = mmY;
    // Iterate only the visible subset; off-screen videos can't be hovered.
    visibleOverlays.forEach((inst) => inst.handlePointer(x, y));
  }
  function _onDocMouseMove(e) {
    mmX = e.clientX;
    mmY = e.clientY;
    if (mmTickScheduled) return;
    mmTickScheduled = true;
    requestAnimationFrame(_mmTick);
  }
  function _onDocTouchStart(e) {
    const t = (e.touches && e.touches[0]) || (e.changedTouches && e.changedTouches[0]);
    if (!t) return;
    const x = t.clientX, y = t.clientY;
    visibleOverlays.forEach((inst) => inst.handleTouch(x, y));
  }
  function _scheduleUpdateAll() {
    if (updTickScheduled) return;
    updTickScheduled = true;
    requestAnimationFrame(_updateAllTick);
  }
  function _updateAllTick() {
    updTickScheduled = false;
    visibleOverlays.forEach((inst) => inst.update());
  }

  function armGlobals() {
    if (globalsArmed) return;
    globalsArmed = true;
    document.addEventListener("mousemove", _onDocMouseMove, true);
    if (IS_TOUCH) document.addEventListener("touchstart", _onDocTouchStart, { capture: true, passive: true });
    document.addEventListener("fullscreenchange", _scheduleUpdateAll);
    document.addEventListener("webkitfullscreenchange", _scheduleUpdateAll);
    addEventListener("scroll", _scheduleUpdateAll, true);
    addEventListener("resize", _scheduleUpdateAll);
  }
  function maybeDisarmGlobals() {
    if (!globalsArmed || overlays.size > 0) return;
    globalsArmed = false;
    document.removeEventListener("mousemove", _onDocMouseMove, true);
    if (IS_TOUCH) document.removeEventListener("touchstart", _onDocTouchStart, { capture: true });
    document.removeEventListener("fullscreenchange", _scheduleUpdateAll);
    document.removeEventListener("webkitfullscreenchange", _scheduleUpdateAll);
    removeEventListener("scroll", _scheduleUpdateAll, true);
    removeEventListener("resize", _scheduleUpdateAll);
  }

  // ---------------------------------------------------------------------------
  // Capability + environment detection
  // ---------------------------------------------------------------------------

  // PiP availability across browsers:
  //   HAS_STANDARD_PIP — `requestPictureInPicture` (Chromium / Firefox / iOS 14+).
  //   HAS_WEBKIT_PIP   — older iOS Safari's `video.webkitSetPresentationMode`.
  // The script bails out at startup if neither is present.
  const HAS_STANDARD_PIP = !!document.pictureInPictureEnabled;
  const HAS_WEBKIT_PIP = "webkitSetPresentationMode" in HTMLVideoElement.prototype;
  const PIP_SUPPORTED = HAS_STANDARD_PIP || HAS_WEBKIT_PIP;

  // Touch capability — switches the overlay from hover-driven to
  // tap-to-reveal on iOS / Android.
  const IS_TOUCH = "ontouchstart" in window || navigator.maxTouchPoints > 0;

  // Combined fullscreen check across the three vendor variants:
  //   - document.fullscreenElement       (standard)
  //   - document.webkitFullscreenElement (older Chromium / Safari desktop)
  //   - video.webkitDisplayingFullscreen (iOS native video fullscreen,
  //                                       which never sets document.*)
  function isFullscreen(video) {
    if (document.fullscreenElement) return true;
    if (document.webkitFullscreenElement) return true;
    if (video && video.webkitDisplayingFullscreen) return true;
    return false;
  }

  // Console output. `log` for one-line success messages on injection,
  // `warn` for failures (kept quiet by default).
  const TAG = "[brave-auto-pip " + VERSION + "]";
  const log = (...a) => console.log(TAG, ...a);
  const warn = (...a) => console.warn(TAG, ...a);

  // ---------------------------------------------------------------------------
  // PiP icon factory
  //
  // Built with createElementNS instead of innerHTML to avoid TrustedTypes
  // / CSP `requireTrustedTypesFor 'script'` violations on YouTube etc.
  // ---------------------------------------------------------------------------
  // Defense-in-depth helper used when cloning third-party wrapper
  // elements (Netflix's .medium icon wrapper, Twitch's right-controls
  // wrapper). cloneNode(false) carries forward inline event handlers
  // such as `onclick="..."` — we strip them so our clone can't
  // unintentionally execute the site's inline handlers.
  function stripInlineHandlers(el) {
    const attrs = el.attributes;
    for (let i = attrs.length - 1; i >= 0; i--) {
      const name = attrs[i].name;
      if (name.startsWith("on")) el.removeAttribute(name);
    }
  }

  const PIP_SVG_NS = "http://www.w3.org/2000/svg";
  function makePipSvg(size) {
    const svg = document.createElementNS(PIP_SVG_NS, "svg");
    svg.setAttribute("viewBox", "0 0 24 24");
    svg.setAttribute("width", size);
    svg.setAttribute("height", size);
    svg.setAttribute("fill", "none");
    svg.setAttribute("stroke", "currentColor");
    svg.setAttribute("stroke-width", "2");
    const r1 = document.createElementNS(PIP_SVG_NS, "rect");
    r1.setAttribute("x", "3"); r1.setAttribute("y", "5");
    r1.setAttribute("width", "18"); r1.setAttribute("height", "14"); r1.setAttribute("rx", "2");
    const r2 = document.createElementNS(PIP_SVG_NS, "rect");
    r2.setAttribute("x", "12"); r2.setAttribute("y", "11");
    r2.setAttribute("width", "7"); r2.setAttribute("height", "6"); r2.setAttribute("rx", "1");
    r2.setAttribute("fill", "currentColor");
    svg.appendChild(r1); svg.appendChild(r2);
    return svg;
  }

  // ---------------------------------------------------------------------------
  // PiP toggle entry point
  //
  // Single async function shared by every click handler. Walks the
  // available APIs in priority order and is robust to a click that lands
  // before the video has loaded enough metadata (waits up to 3 s).
  // ---------------------------------------------------------------------------
  async function togglePip(video) {
    try {
      // iOS Safari path — webkitSetPresentationMode toggles between
      // "inline", "picture-in-picture" and "fullscreen".
      if (!HAS_STANDARD_PIP && HAS_WEBKIT_PIP &&
          typeof video.webkitSetPresentationMode === "function") {
        const target = video.webkitPresentationMode === "picture-in-picture"
          ? "inline" : "picture-in-picture";
        video.webkitSetPresentationMode(target);
        return;
      }
      // Standard API path.
      if (document.pictureInPictureElement === video) {
        await document.exitPictureInPicture();
        return;
      }
      if (video.readyState < 1) {
        await new Promise((resolve) => {
          const done = () => { video.removeEventListener("loadedmetadata", done); resolve(); };
          video.addEventListener("loadedmetadata", done, { once: true });
          setTimeout(done, CONFIG.METADATA_WAIT_MS);
        });
      }
      if (typeof video.requestPictureInPicture === "function") {
        await video.requestPictureInPicture();
        return;
      }
      // Last-resort iOS fallback even if HAS_STANDARD_PIP was claimed.
      if (typeof video.webkitSetPresentationMode === "function") {
        video.webkitSetPresentationMode("picture-in-picture");
        return;
      }
      warn("PiP not supported in this browser");
    } catch (err) { warn("PiP request failed:", err.message || err); }
  }

  // ---------------------------------------------------------------------------
  // Site-specific native injectors
  //
  // Each injector is idempotent (safe to re-run when the site's React
  // root re-mounts the controls bar) and returns true on success / false
  // when the target container isn't in the DOM yet. They're driven by
  // a persistent MutationObserver in `tryNative()` so re-renders don't
  // permanently lose the button.
  //
  // Strategy across sites:
  //   - YouTube: insert a <button class="ytp-button"> alongside the
  //     existing settings/miniplayer/size icons. Inherits YouTube's
  //     auto-fade / hover behaviour for free.
  //   - Twitch: clone the wrapper around an existing right-side control
  //     button (settings/fullscreen/theatre) and place our button inside,
  //     so we inherit Twitch's flex spacing classes.
  //   - Netflix: clone the .medium icon wrapper *and* the 3rem spacer
  //     that sits between siblings, so the rhythm of the icon row is
  //     preserved and fullscreen stays in its row.
  // ---------------------------------------------------------------------------
  function addYouTubeButton(video) {
    const right = document.querySelector(".ytp-right-controls");
    if (!right) return false;
    if (right.querySelector(".brave-pip-btn")) return true;

    try {
      const btn = document.createElement("button");
      btn.className = "ytp-button brave-pip-btn";
      btn.type = "button";
      btn.title = "Picture-in-Picture";
      btn.setAttribute("aria-label", "Picture-in-Picture");
      btn.style.cssText = "display:inline-flex;align-items:center;justify-content:center;vertical-align:top;color:#fff;";
      const svg = makePipSvg(36);
      svg.style.cssText = "display:block;";
      btn.appendChild(svg);
      btn.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); togglePip(video); });

      const anchor = right.querySelector(".ytp-miniplayer-button, .ytp-settings-button, .ytp-size-button");
      if (anchor && anchor.parentNode) {
        anchor.parentNode.insertBefore(btn, anchor);
      } else {
        right.appendChild(btn);
      }
      log("injected on YouTube");
      return true;
    } catch (err) {
      warn("YouTube inject failed:", err.message || err);
      return false;
    }
  }

  // Twitch: clone the wrapper around an existing right-side control button
  // (settings or fullscreen) and drop our button inside it, then insert at
  // the same DOM level so spacing/sizing match.
  let twitchInjectCount = 0;
  function addTwitchButton(video) {
    // Anchor on the fullscreen / theatre row so we land alongside cast,
    // theatre and fullscreen — settings often lives in a separate row in
    // the popout player layout.
    const anchorBtn =
      document.querySelector('[data-a-target="player-fullscreen-button"]') ||
      document.querySelector('[data-a-target="player-theatre-mode-button"]') ||
      document.querySelector('[data-a-target="player-settings-button"]');
    if (!anchorBtn) return false;

    // Walk up from the anchor to a wrapper element (Twitch wraps buttons
    // in a div for spacing). Stop when the parent contains other right-
    // side control buttons — that's the row container.
    let anchorWrapper = anchorBtn;
    while (anchorWrapper.parentNode) {
      const sibs = anchorWrapper.parentNode.children;
      if (sibs.length > 1) break;
      anchorWrapper = anchorWrapper.parentNode;
      if (anchorWrapper.tagName === "BODY") return false;
    }
    const row = anchorWrapper.parentNode;
    if (!row) return false;
    if (row.querySelector(".brave-pip-btn")) return true;

    try {
      // Clone the anchor's outer wrapper (shallow) so we inherit Twitch's
      // spacing/flex classes, then drop our own button inside.
      const wrapper = anchorWrapper.cloneNode(false);
      wrapper.classList.add("brave-pip-wrapper");
      wrapper.removeAttribute("data-a-target");
      wrapper.removeAttribute("aria-label");
      stripInlineHandlers(wrapper);

      // Size from the rendered SVG glyph (visually accurate). Floor at 24
      // because Twitch's underlying SVG element is sometimes smaller than
      // the visual icon (CSS scales it up).
      const refSvg = anchorBtn.querySelector("svg");
      const refSvgRect = refSvg ? refSvg.getBoundingClientRect() : null;
      const refBtnRect = anchorBtn.getBoundingClientRect();
      const measured = refSvgRect && refSvgRect.width > 0
        ? Math.min(refSvgRect.width, refSvgRect.height)
        : Math.min(refBtnRect.width, refBtnRect.height) * 0.7;
      const iconSize = Math.max(24, Math.round(measured));
      const boxSize = Math.max(30, Math.round(refBtnRect.width || 30));

      const btn = document.createElement("button");
      btn.className = "brave-pip-btn";
      btn.type = "button";
      btn.title = "Picture-in-Picture";
      btn.setAttribute("aria-label", "Picture-in-Picture");
      btn.style.cssText =
        "background:transparent;border:0;padding:0;margin:0;" +
        "color:inherit;cursor:pointer;" +
        "display:inline-flex;align-items:center;justify-content:center;" +
        "width:" + boxSize + "px;height:" + boxSize + "px;";
      const svg = makePipSvg(iconSize);
      svg.style.cssText = "display:block;color:#fff;";
      btn.appendChild(svg);
      btn.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); togglePip(video); });
      wrapper.appendChild(btn);

      row.insertBefore(wrapper, anchorWrapper);

      twitchInjectCount++;
      if (twitchInjectCount === 1) log("injected on Twitch");
      return true;
    } catch (err) {
      warn("Twitch inject failed:", err.message || err);
      return false;
    }
  }

  // Netflix: insert into the standard controls bar, before the fullscreen button.
  // Netflix randomizes class names but icons follow a consistent pattern:
  //   <flex-row>
  //     <spacer .1npqywr> ... <wrapper .medium> <icon-button> </wrapper>
  //     <spacer .1npqywr>     <wrapper .medium> <icon-button> </wrapper>
  //     <spacer .1npqywr>     <wrapper .medium> <icon-button data-uia="control-fullscreen-..."> </wrapper>
  // We clone the fullscreen wrapper (and the spacer in front of it) so our
  // button gets the same styling and rhythm as native icons.
  let nflxInjectCount = 0;
  function addNetflixButton(video) {
    const bar = document.querySelector('[data-uia="controls-standard"]');
    if (!bar) return false;
    if (bar.querySelector(".brave-pip-btn")) return true;

    try {
      const fs = bar.querySelector('[data-uia="control-fullscreen-enter"], [data-uia="control-fullscreen-exit"]');
      if (!fs) return false;

      // Find Netflix's icon wrapper around fullscreen — the .medium class
      // is the stable signal; fall back to the closest div.
      const fsWrapper = fs.closest(".medium") || fs.closest("div") || fs;
      const row = fsWrapper.parentNode;
      if (!row) return false;

      // Size from the inner svg of fullscreen's button so we visually match.
      const refSvg = fs.querySelector("svg") || (fs.closest("button") || fs).querySelector("svg");
      const refSvgRect = refSvg ? refSvg.getBoundingClientRect() : null;
      const iconSize = refSvgRect && refSvgRect.width > 0
        ? Math.round(Math.min(refSvgRect.width, refSvgRect.height))
        : 28;

      // Clone the wrapper (shallow — preserves classes/inline styles) and
      // empty it, then drop our button inside.
      const wrapper = fsWrapper.cloneNode(false);
      wrapper.classList.add("brave-pip-wrapper");
      wrapper.removeAttribute("data-uia");
      stripInlineHandlers(wrapper);

      const btn = document.createElement("button");
      btn.className = "brave-pip-btn";
      btn.type = "button";
      btn.title = "Picture-in-Picture";
      btn.setAttribute("aria-label", "Picture-in-Picture");
      btn.style.cssText =
        "background:transparent;border:0;padding:0;margin:0;" +
        "width:100%;height:100%;color:#fff;cursor:pointer;" +
        "display:inline-flex;align-items:center;justify-content:center;";
      const svg = makePipSvg(iconSize);
      svg.style.cssText = "display:block;";
      btn.appendChild(svg);
      btn.addEventListener("click", (e) => { e.preventDefault(); e.stopPropagation(); togglePip(video); });
      wrapper.appendChild(btn);

      // Clone the spacer that precedes the fullscreen wrapper, so spacing
      // between our button and fullscreen matches the rhythm between
      // existing icons.
      const prevSpacer = fsWrapper.previousElementSibling;
      const spacerClone = (prevSpacer && prevSpacer.children.length === 0)
        ? prevSpacer.cloneNode(false)
        : null;

      row.insertBefore(wrapper, fsWrapper);
      if (spacerClone) row.insertBefore(spacerClone, fsWrapper);

      nflxInjectCount++;
      if (nflxInjectCount === 1) log("injected on Netflix");
      return true;
    } catch (err) {
      warn("Netflix inject failed:", err.message || err);
      return false;
    }
  }

  // ---------------------------------------------------------------------------
  // Generic Firefox-style overlay
  //
  // Used on every site by default (unless localStorage.usegeneric_pip is
  // explicitly set to "0"). Mimics Firefox's "Pop out this video" toggle:
  // a dark pill anchored mid-right of the video that fades in on hover
  // and fades out after the cursor leaves. After the user clicks once it
  // shrinks to icon-only for the rest of the session — less visual noise
  // on subsequent hovers.
  //
  // Hover detection runs through the shared `_onDocMouseMove` handler
  // (see top of file) instead of `video.addEventListener("mouseenter")`,
  // because many players (Netflix, custom) layer their UI on top of the
  // <video> and absorb mouse events before they reach it. A global
  // capture-phase listener bypasses that.
  //
  // On touch devices the pill is tap-to-reveal (3 s auto-fade) instead.
  //
  // `teardowns` is an array the caller (`attachToVideo`) hands in; we
  // push cleanup closures onto it so a later cleanup of this video
  // releases every listener / observer / DOM node we created here.
  // ---------------------------------------------------------------------------
  function addOverlayButton(video, teardowns) {
    // Reaching here means `attachToVideo`'s `videoCleanups.has(video)`
    // guard already short-circuited duplicate registrations, so no
    // separate dataset marker is needed.
    const PADDING_FULL = "8px 14px 8px 10px";
    const PADDING_ICON = "8px";

    const btn = document.createElement("button");
    btn.type = "button";
    btn.title = "Picture-in-Picture";
    btn.setAttribute("aria-label", "Picture-in-Picture");
    btn.style.cssText =
      "position:fixed;display:none;align-items:center;gap:8px;" +
      "padding:" + PADDING_FULL + ";" +
      "border:0;border-radius:8px;" +
      "background:rgba(28,28,30,0.92);color:#fff;" +
      "font:600 13px/1 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;" +
      "cursor:pointer;z-index:2147483647;" +
      "box-shadow:0 2px 8px rgba(0,0,0,0.4);" +
      "opacity:0;transition:opacity 0.15s ease;" +
      "pointer-events:auto;user-select:none;";
    const svg = makePipSvg(18);
    svg.style.cssText = "display:block;";
    btn.appendChild(svg);
    const label = document.createElement("span");
    label.textContent = "Pop out this video";
    btn.appendChild(label);

    let clicked = false;
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (!clicked) {
        clicked = true;
        // Suppress fade so the icon-only pill is in its final position
        // before the user notices the change.
        const prevTransition = btn.style.transition;
        btn.style.transition = "none";
        label.style.display = "none";
        btn.style.padding = PADDING_ICON;
        btn.style.gap = "0";
        update(); // synchronous reposition for the new (smaller) box
        // Force a reflow so the next style change is committed without
        // a transition, then restore the fade transition.
        // eslint-disable-next-line no-unused-expressions
        btn.offsetWidth;
        btn.style.transition = prevTransition;
      }
      togglePip(video);
    });
    (document.body || document.documentElement).appendChild(btn);

    let hover = false;
    let hoverTimer = null;
    let lastRect = null;
    let touchHideTimer = null;
    function setHover(v) {
      if (hoverTimer) { clearTimeout(hoverTimer); hoverTimer = null; }
      if (v) { hover = true; update(); }
      else   { hoverTimer = setTimeout(() => { hover = false; update(); }, CONFIG.HOVER_GRACE_MS); }
    }

    function handlePointer(x, y) {
      const r = lastRect;
      if (!r) return;
      const overVideo =
        x >= r.left && x <= r.right &&
        y >= r.top  && y <= r.bottom;
      let overBtn = false;
      if (btn.style.display !== "none") {
        const bRect = btn.getBoundingClientRect();
        overBtn =
          x >= bRect.left && x <= bRect.right &&
          y >= bRect.top  && y <= bRect.bottom;
      }
      if (overVideo || overBtn) { if (!hover) setHover(true); }
      else if (hover) setHover(false);
    }
    function handleTouch(x, y) {
      const r = lastRect || video.getBoundingClientRect();
      lastRect = r;
      const overVideo =
        x >= r.left && x <= r.right &&
        y >= r.top  && y <= r.bottom;
      if (!overVideo) return;
      setHover(true);
      if (touchHideTimer) clearTimeout(touchHideTimer);
      touchHideTimer = setTimeout(() => {
        touchHideTimer = null;
        setHover(false);
      }, CONFIG.TOUCH_REVEAL_MS);
    }

    function update() {
      // Match Firefox: show on hover regardless of paused state. Only
      // require that the video has metadata loaded (so PiP is usable),
      // is visible, and we're not in fullscreen (incl. iOS webkit FS).
      const ready = video.readyState >= 1;
      const fs = isFullscreen(video);
      const r = video.getBoundingClientRect();
      lastRect = r;
      const onScreen = r.width > 0 && r.height > 0 && r.bottom > 0 && r.top < innerHeight;
      const eligible = ready && !fs && onScreen;
      if (!eligible) {
        btn.style.opacity = "0";
        btn.style.display = "none";
        btn.style.pointerEvents = "none";
        return;
      }
      btn.style.display = "inline-flex";
      const w = btn.offsetWidth || 170;
      const h = btn.offsetHeight || 36;

      // Compute mid-right of the *visible* portion of the video (the
      // intersection of its rect with the viewport). Netflix's <video>
      // can be much taller than the viewport.
      const visTop = Math.max(r.top, 0);
      const visBottom = Math.min(r.bottom, innerHeight);
      const visRight = Math.min(r.right, innerWidth);
      let top = Math.round(visTop + (visBottom - visTop - h) / 2) + CONFIG.PILL_OFFSET_Y;
      let left = Math.round(visRight - w - CONFIG.PILL_RIGHT_MARGIN);
      // Final viewport clamp.
      top = Math.max(CONFIG.VIEWPORT_PAD, Math.min(top, innerHeight - h - CONFIG.VIEWPORT_PAD));
      left = Math.max(CONFIG.VIEWPORT_PAD, Math.min(left, innerWidth - w - CONFIG.VIEWPORT_PAD));

      btn.style.top = top + "px";
      btn.style.left = left + "px";
      btn.style.opacity = hover ? "1" : "0";
      btn.style.pointerEvents = hover ? "auto" : "none";
    }

    const onBtnEnter = () => setHover(true);
    const onBtnLeave = () => setHover(false);

    // Per-video listeners stay on the video element. Document/window
    // listeners are shared via the module-level `overlays` registry
    // (one set of globals regardless of how many videos are on the page).
    btn.addEventListener("mouseenter", onBtnEnter);
    btn.addEventListener("mouseleave", onBtnLeave);
    const VIDEO_EVENTS = ["play","playing","pause","ended","emptied","loadeddata"];
    for (let i = 0; i < VIDEO_EVENTS.length; i++) {
      video.addEventListener(VIDEO_EVENTS[i], _scheduleUpdateAll);
    }
    video.addEventListener("webkitbeginfullscreen", _scheduleUpdateAll);
    video.addEventListener("webkitendfullscreen", _scheduleUpdateAll);
    const ro = new ResizeObserver(_scheduleUpdateAll);
    ro.observe(video);

    const instance = { update, handlePointer, handleTouch };
    overlays.add(instance);
    videoToOverlay.set(video, instance);
    const io = getIO();
    if (io) {
      io.observe(video);
      // IntersectionObserver fires a callback synchronously after
      // observe() in a microtask. Until then assume the video is
      // visible so the very first update() runs.
      visibleOverlays.add(instance);
    } else {
      // No IO support — fall back to "always visible".
      visibleOverlays.add(instance);
    }
    armGlobals();
    update();

    if (teardowns) {
      teardowns.push(() => {
        overlays.delete(instance);
        visibleOverlays.delete(instance);
        if (intersectionObserver) intersectionObserver.unobserve(video);
        videoToOverlay.delete(video);
        btn.removeEventListener("mouseenter", onBtnEnter);
        btn.removeEventListener("mouseleave", onBtnLeave);
        for (let i = 0; i < VIDEO_EVENTS.length; i++) {
          video.removeEventListener(VIDEO_EVENTS[i], _scheduleUpdateAll);
        }
        video.removeEventListener("webkitbeginfullscreen", _scheduleUpdateAll);
        video.removeEventListener("webkitendfullscreen", _scheduleUpdateAll);
        ro.disconnect();
        if (hoverTimer) { clearTimeout(hoverTimer); hoverTimer = null; }
        if (touchHideTimer) { clearTimeout(touchHideTimer); touchHideTimer = null; }
        btn.remove();
        maybeDisarmGlobals();
      });
    }
  }

  // ---------------------------------------------------------------------------
  // Configuration & dispatch
  // ---------------------------------------------------------------------------

  // Reads the per-origin `localStorage.usegeneric_pip` flag.
  // Default is ON: every site uses the generic overlay pill unless the
  // user has explicitly opted into native injection.
  // Wrapped in try/catch because localStorage access throws in private /
  // sandboxed contexts on some browsers.
  function genericPipForced() {
    try {
      const v = localStorage.getItem("usegeneric_pip");
      if (v == null) return true;
      const s = String(v).toLowerCase().trim();
      if (s === "0" || s === "false" || s === "no" || s === "off") return false;
      return true;
    } catch { return true; }
  }

  // Native-site adapter table. Each entry describes one site whose
  // player chrome we know how to inject into. Detection is hostname-
  // first (handles regular pages) with a DOM-signal fallback (handles
  // about:blank same-origin iframes where location.hostname is "").
  //
  // To support a new site, add a record here and write a matching
  // `add<Name>Button(video)` injector — no other change required.
  const NATIVE_SITES = [
    {
      name: "YouTube",
      match: (host) => host.endsWith("youtube.com")
        || !!document.querySelector(".html5-video-player, .ytp-right-controls"),
      inject: addYouTubeButton,
      scope: ".html5-video-player",
    },
    {
      name: "Twitch",
      match: (host) => host.endsWith("twitch.tv")
        || !!document.querySelector('.video-player, [data-a-target="player-controls"]'),
      inject: addTwitchButton,
      scope: '[data-a-target="player-controls"], .video-player',
    },
    {
      name: "Netflix",
      match: (host) => host.endsWith("netflix.com")
        || !!document.querySelector('[data-uia="controls-standard"], [data-uia="video-canvas"]'),
      inject: addNetflixButton,
      scope: '[data-uia="controls-standard"]',
    },
  ];

  // Run an injector once now and again on every relevant DOM mutation,
  // so the button reappears after React (Netflix / Twitch) tears down
  // and re-mounts the controls bar. The observer starts on <html> if
  // the scoped container isn't in the DOM yet, then "promotes" itself
  // to the smaller subtree as soon as it appears — minimising churn.
  function tryNative(video, injector, scopeSelector, teardowns) {
    injector(video);
    let scheduled = false;
    let target = scopeSelector ? document.querySelector(scopeSelector) : null;
    const obs = new MutationObserver(() => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        scheduled = false;
        if (!target && scopeSelector) {
          const found = document.querySelector(scopeSelector);
          if (found) {
            obs.disconnect();
            target = found;
            obs.observe(target, { childList: true, subtree: true });
          }
        }
        injector(video);
      });
    });
    obs.observe(target || document.documentElement, { childList: true, subtree: true });
    if (teardowns) teardowns.push(() => obs.disconnect());
  }

  // Decides which UI to add for a given video and wires it up. Called
  // exactly once per video by `attachToVideo`. The `teardowns` array is
  // populated with cleanup closures that the discovery observer's
  // removed-nodes path will run.
  function addPipButton(video, teardowns) {
    // Generic overlay is the default. Set localStorage.usegeneric_pip="0"
    // (or false/no/off) per-origin to opt back into native injection.
    if (genericPipForced()) {
      addOverlayButton(video, teardowns);
      log("injected overlay");
      return;
    }

    const host = location.hostname;
    for (let i = 0; i < NATIVE_SITES.length; i++) {
      const site = NATIVE_SITES[i];
      if (site.match(host)) {
        tryNative(video, site.inject, site.scope, teardowns);
        return;
      }
    }

    // Unrecognised site (and user opted out of generic via localStorage):
    // still install the overlay since there's nothing native to anchor to.
    addOverlayButton(video, teardowns);
    log("injected overlay");
  }

  // ---------------------------------------------------------------------------
  // Per-video setup + teardown
  //
  // Runs once per <video> element. The `teardowns` array is the single
  // place every listener / observer / DOM node we add for this video is
  // recorded; the discovery observer below calls them when the video is
  // removed from the DOM, so the script doesn't leak on long-lived SPA
  // pages with infinite scroll.
  // ---------------------------------------------------------------------------
  function attachToVideo(video) {
    if (videoCleanups.has(video)) return;

    // Some sites (Netflix, certain DRM players) explicitly disable PiP.
    // Clear it now and watch (below) for the page re-setting it.
    if (video.disablePictureInPicture) {
      video.disablePictureInPicture = false;
      video.removeAttribute('disablepictureinpicture');
    }
    // Wire automatic-PiP intent (browsers with auto-PiP feature, e.g.
    // Chrome flag, fire this on tab switch). No-op on browsers that
    // don't support it; the try/catch guards iOS / older browsers.
    try {
      navigator.mediaSession.setActionHandler("enterpictureinpicture", async () => {
        await video.requestPictureInPicture();
      });
    } catch (error) { /* not supported in this browser */ }

    const teardowns = [];

    addPipButton(video, teardowns);

    const onEnterPip = () => { setTimeout(() => video.play(), 1000); };
    video.addEventListener("enterpictureinpicture", onEnterPip);
    teardowns.push(() => video.removeEventListener("enterpictureinpicture", onEnterPip));

    // Watch for sites (e.g. Netflix) re-adding disablepictureinpicture.
    const dpipObs = new MutationObserver(() => {
      if (video.disablePictureInPicture) {
        video.disablePictureInPicture = false;
        video.removeAttribute('disablepictureinpicture');
      }
    });
    dpipObs.observe(video, { attributes: true, attributeFilter: ['disablepictureinpicture'] });
    teardowns.push(() => dpipObs.disconnect());

    videoCleanups.set(video, () => {
      for (let i = 0; i < teardowns.length; i++) {
        try { teardowns[i](); } catch { /* ignore individual teardown errors */ }
      }
    });
  }

  // ---------------------------------------------------------------------------
  // Top-level setup + discovery observer
  //
  // One persistent MutationObserver tracks <video> elements being added
  // to and removed from the page over its entire lifetime. Add → wire up.
  // Remove → run the registered teardown closure for that video.
  // ---------------------------------------------------------------------------
  function setupAutoPictureInPicture() {
    // Attach to every <video> currently on the page.
    document.querySelectorAll("video").forEach(attachToVideo);

    // Keep watching for videos added later (lazy-loaded feeds, SPA route
    // changes, embedded players that mount after first paint, etc.).
    // Indexed loops + nodeType check are friendlier to V8's inline
    // caches than for-of + instanceof on hot DOM-mutation paths.
    const obs = new MutationObserver(_onDomMutations);
    obs.observe(document.documentElement, { childList: true, subtree: true });
  }

  function _runCleanup(video) {
    const fn = videoCleanups.get(video);
    if (!fn) return;
    videoCleanups.delete(video);
    try { fn(); } catch { /* ignore */ }
  }

  function _onDomMutations(mutations) {
    for (let i = 0, mlen = mutations.length; i < mlen; i++) {
      const mu = mutations[i];

      const added = mu.addedNodes;
      for (let j = 0, alen = added.length; j < alen; j++) {
        const node = added[j];
        if (node.nodeType !== 1) continue;
        if (node.nodeName === "VIDEO") {
          attachToVideo(node);
        } else if (node.getElementsByTagName) {
          const vids = node.getElementsByTagName("video");
          for (let k = 0, vlen = vids.length; k < vlen; k++) attachToVideo(vids[k]);
        }
      }

      const removed = mu.removedNodes;
      for (let j = 0, rlen = removed.length; j < rlen; j++) {
        const node = removed[j];
        if (node.nodeType !== 1) continue;
        if (node.nodeName === "VIDEO") {
          _runCleanup(node);
        } else if (node.getElementsByTagName) {
          const vids = node.getElementsByTagName("video");
          for (let k = 0, vlen = vids.length; k < vlen; k++) _runCleanup(vids[k]);
        }
      }
    }
  }

  // ---------------------------------------------------------------------------
  // Boot
  // ---------------------------------------------------------------------------

  // Bail out early on browsers with no PiP API at all (extremely old or
  // exotic). Avoids registering listeners we'd never use.
  if (!PIP_SUPPORTED) return;

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded",
      setupAutoPictureInPicture, { once: true });
  } else {
    setupAutoPictureInPicture();
  }
})();