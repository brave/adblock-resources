/// brave-video-bg-play-update.js
// This is an update of brave-video-bg-play.js
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
  } catch (e) {}

  // Block event delivery (capture=true to intercept early)
  const stop = (e) => e.stopImmediatePropagation();
  const IS_IOS = /iPad|iPhone|iPod/.test(navigator.userAgent) ||
                 (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
  try {
    // Skip visibilitychange blocking on iOS to avoid conflict with media backgrounding
    if (!IS_IOS) {
      document.addEventListener('visibilitychange', stop, true);
    }
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

    function getVideo() {
      return document.querySelector('ytd-player video, #movie_player video, video');
    }

    let lastUserInput = 0;
    document.addEventListener('keydown', () => { lastUserInput = Date.now(); }, true);
    document.addEventListener('click',   () => { lastUserInput = Date.now(); }, true);

    function onVideoNavigation() {
      refreshLact();
      setTimeout(() => {
        const video = getVideo();
        if (!video) return;
        if (video._bgPlayPauseHandler) {
          video.removeEventListener('pause', video._bgPlayPauseHandler);
        }
        const handler = () => {
          // If user clicked or pressed a key within 1s before the pause, it's intentional
          if (Date.now() - lastUserInput < 1000) return;
          setTimeout(() => {
            const v = getVideo();
            if (v && v.paused && !v.ended && v.readyState >= 2) v.play().catch(() => {});
          }, 800);
        };
        video._bgPlayPauseHandler = handler;
        video.addEventListener('pause', handler);
      }, 1500);
    }

    window.addEventListener('yt-navigate-finish', onVideoNavigation);
    window.addEventListener('yt-page-data-updated', onVideoNavigation);

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
      const video = getVideo();
      if (video && !video.paused) {
        video.dispatchEvent(new Event('timeupdate'));
      }
      recoverPlayback();
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
