/// brave-video-bg-play.js
// Based on: https://github.com/mozilla/video-bg-play
// License:  https://github.com/mozilla/video-bg-play/blob/master/LICENSE (MIT)
// From: https://gist.github.com/gwarser/3b47b61863bffcfebe4498c77b2301cd
(function() {
  const host = location.hostname;
  const IS_YOUTUBE = /(?:^|.+\.)youtube(?:-nocookie)?\.com$/.test(host);
  const IS_VIMEO = /(?:^|.+\.)vimeo\.com$/.test(host);

  // Page Visibility API
  try {
    Object.defineProperty(Document.prototype, 'hidden', {
      get() { return false; },
      enumerable: false,
      configurable: true
    });

    Object.defineProperty(Document.prototype, 'visibilityState', {
      get() { return 'visible'; },
      enumerable: false,
      configurable: true
    });

    Object.defineProperty(Document.prototype, 'onvisibilitychange', {
      get() { return null; },
      set() {},
      enumerable: false,
      configurable: true
    });

    Object.defineProperty(Document.prototype, 'hasFocus', {
      value() { return true; },
      writable: true,
      enumerable: false,
      configurable: true
    });
  } catch (e) {}

  // Block event delivery (capture=true to intercept early)
  const stop = (e) => e.stopImmediatePropagation();
  const IS_IOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  try {
    // Skip visibilitychange blocking on iOS to avoid conflict with media backgrounding
    if (!IS_IOS) {
      document.addEventListener('visibilitychange', stop, true);
    }
    window.addEventListener('blur', stop, true);
    window.addEventListener('focus', stop, true);
  } catch (e) {}

  // Block handler property assignment
  try {
    Object.defineProperty(window, 'onfocus', {
      get() { return null; },
      set() {},
      enumerable: false,
      configurable: true
    });

    Object.defineProperty(window, 'onblur', {
      get() { return null; },
      set() {},
      enumerable: false,
      configurable: true
    });
  } catch (e) {}

  // Fullscreen API (Vimeo)
  if (IS_VIMEO) {
    try {
      window.addEventListener('fullscreenchange', stop, true);
    } catch (e) {}
  }

  // YouTube-specific enhancements
  if (IS_YOUTUBE) {
    // User activity tracking
    const LACT_REFRESH = 5 * 60 * 1000; // 5 min
    waitForLact(() => refreshLact(), LACT_REFRESH);

    // Simulate user interaction to prevent "Are you still watching?"
    const INTERACTION_INTERVAL = 10 * 60 * 1000; // 10 min
    setInterval(() => {
      const player = document.querySelector('#movie_player');
      if (player) {
        player.dispatchEvent(new MouseEvent('mousemove', { bubbles: true }));
      }
      refreshLact();
    }, INTERACTION_INTERVAL);

    // Keep player state updated
    const PLAYER_STATE_INTERVAL = 60 * 1000; // 1 min
    setInterval(() => {
      const video = document.querySelector('video');
      if (video && !video.paused) {
        video.dispatchEvent(new Event('timeupdate'));
      }
    }, PLAYER_STATE_INTERVAL);
  }

  function waitForLact(callback, interval, delay = 1000) {
    const maxDelay = 60 * 1000; // cap at 60s
    if (Object.prototype.hasOwnProperty.call(window, '_lact')) {
      setInterval(callback, interval);
    } else {
      setTimeout(
        () => waitForLact(callback, interval, Math.min(delay * 2, maxDelay)),
        delay
      );
    }
  }

  function refreshLact() {
    try {
      if (window._lact !== undefined) {
        window._lact = Date.now();
      }
    } catch (e) {}
  }
})();
