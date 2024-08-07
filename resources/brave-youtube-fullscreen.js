/// brave-youtube-fullscreen.js
(function(){
const IS_MOBILE_YOUTUBE = window.location.hostname == 'm.youtube.com';
const IS_ANDROID = window.navigator.userAgent.indexOf('Android') > -1;
console.log("tapan IS_MOBILE_YOUTUBE:"+IS_MOBILE_YOUTUBE+", IS_ANDROID:"+IS_ANDROID);
if (IS_ANDROID && IS_MOBILE_YOUTUBE) {
  console.log("tapan if android IS_MOBILE_YOUTUBE");
  /*screen.orientation.addEventListener('change', onOrientationChange);*/
  window.screen.orientation.onchange = function() {
    console.log("tapan onOrientationChange:"+window.screen.orientation);
    if (this.type.startsWith("landscape")) {
        console.log("if landscape");
        if(!document.fullscreenElement) {
          console.log("not fullscreen");
          let fullscreenBtn = 
             document.getElementsByClassName('fullscreen-icon');
          if(fullscreenBtn && fullscreenBtn.length > 0) {
              console.log("found fullscreenBtn 1");
              fullscreenBtn[0].click();
          } else {
            console.log("not found fullscreenBtn 1");
            const moviePlayer = document.getElementById('movie_player');
            if (moviePlayer) {
              console.log("found moviePlayer");
              moviePlayer.click();
            } else {
              console.log("not found moviePlayer");
            }
            window.setTimeout(() => {
                console.log("inside timeout");
                 fullscreenBtn = 
                   document.getElementsByClassName('fullscreen-icon');
                 if(fullscreenBtn && fullscreenBtn.length > 0) {
                    console.log("found fullscreenBtn 2");
                    fullscreenBtn[0].click();
                 } else {
                    console.log("not found fullscreenBtn 2");
                 }
             }, 50);
          }
        } else {
          console.log("already fullscreen");
        }
    } else if(document.fullscreenElement) {
      console.log("else if fullscreen");
      document.exitFullscreen();
    } else {
      console.log("else");
    }
  };
}
})()
