/// brave-youtube-fullscreen.js
(function(){
const IS_MOBILE_YOUTUBE = window.location.hostname == 'm.youtube.com';
const IS_ANDROID = window.navigator.userAgent.indexOf('Android') > -1;

if (IS_ANDROID && IS_MOBILE_YOUTUBE) {

  screen.orientation.addEventListener('change', onOrientationChange);
}

function onOrientationChange() {
  console.log("tapan onOrientationChange:"+screen.orientation.type);
  if (screen.orientation.type.startsWith('portrait')) {
      if(!document.fullscreenElement) {
        var fullscreenBtn = 
             document.getElementsByClassName('fullscreen-icon');
        if(fullscreenBtn && fullscreenBtn.length > 0) {
              fullscreenBtn[0].click();
        } else {
          var moviePlayer = document.getElementById('movie_player');
             if (moviePlayer) {
                 moviePlayer.click();
             }
          window.setTimeout(() => {
                 var fullscreenBtn = 
                   document.getElementsByClassName('fullscreen-icon');
                 if(fullscreenBtn && fullscreenBtn.length > 0) {
                    fullscreenBtn[0].click();
                 }
             }, 50);
        }
      }
  } else if(document.fullscreenElement) {
      document.exitFullscreen();
  }
}
})()
