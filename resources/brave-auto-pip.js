(function() {
  function setupAutoPictureInPicture() {
    const video = document.querySelector("video[src], video source")?.closest("video")
      || document.querySelector("video");
    if (video) {
      // Check if PiP is disabled on this video
      if (video.disablePictureInPicture) {
        console.log('PiP is disabled for this video, enabling it...');
        video.disablePictureInPicture = false;
        video.removeAttribute('disablepictureinpicture');
      }
      try {
        // Request video to automatically enter picture-in-picture when eligible.
        navigator.mediaSession.setActionHandler("enterpictureinpicture", async () => {
          await video.requestPictureInPicture();
        });
      } catch (error) {
        console.log("The enterpictureinpicture action is not yet supported.");
      }

      video.addEventListener("enterpictureinpicture", () => {
        setTimeout(() => { video.play(); }, 1000);
      });

      // Watch for sites (e.g. Netflix) re-adding disablepictureinpicture
      // https://old.reddit.com/r/brave_browser/comments/1r8edg4/workaround_to_fix_netflix_intentional_disabled_pip/
      new MutationObserver(() => {
        if (video.disablePictureInPicture) {
          video.disablePictureInPicture = false;
          video.removeAttribute('disablepictureinpicture');
        }
      }).observe(video, { attributes: true, attributeFilter: ['disablepictureinpicture'] });

    } else {
      // If no video is available, watch for one to appear
      new MutationObserver((_, observer) => {
        if (document.querySelector("video")) {
          observer.disconnect();
          setupAutoPictureInPicture();
        }
      }).observe(document.body, { childList: true, subtree: true });
    }
  }

  if (document.readyState === "loading") {
    // Loading hasn't finished yet.
    document.addEventListener("DOMContentLoaded",
    setupAutoPictureInPicture, { once: true });
  } else {
    // `DOMContentLoaded` has already fired.
    setupAutoPictureInPicture();
  }
})();