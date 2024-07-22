/// brave-youtube-fullscreen.js
(function(){
const IS_MOBILE_YOUTUBE = window.location.hostname == 'm.youtube.com';
const IS_ANDROID = window.navigator.userAgent.indexOf('Android') > -1;
console.log("tapan IS_MOBILE_YOUTUBE:"+IS_MOBILE_YOUTUBE+", IS_ANDROID:"+IS_ANDROID);
if (IS_ANDROID && IS_MOBILE_YOUTUBE) {
  console.log("tapan if");
  screen.orientation.addEventListener('change', onOrientationChange);
}

function onOrientationChange() {
  console.log("tapan onOrientationChange:"+screen.orientation.type);
  if (screen.orientation.type.startsWith('landscape')) {
      console.log("if");
      if(!document.fullscreenElement) {
        console.log("if1");
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
      } else {
        console.log("else");
      }
  } else if(document.fullscreenElement) {
      console.log("else if");
      document.exitFullscreen();
  }
}
})()
