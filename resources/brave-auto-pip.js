(function() {
  function setupAutoPictureInPicture() {
    const video = document.querySelector("video");
    
    if (video) {
      // Check if PiP is disabled on this video
      if (video.disablePictureInPicture) {
        console.log('PiP is disabled for this video, enabling it...');
        video.disablePictureInPicture = false;
        // or video.removeAttribute('disablePictureInPicture');
      }
      
      try {
        // Request video to automatically enter picture-in-picture when eligible.
        navigator.mediaSession.setActionHandler("enterpictureinpicture", async () => {
          await video.requestPictureInPicture();
        });
      } catch (error) {
        console.log("The enterpictureinpicture action is not yet supported.");
      }
    } else {
      // If no video is available, retry in 10 seconds
      setTimeout(setupAutoPictureInPicture, 10000);
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