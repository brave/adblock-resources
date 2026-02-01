/// brave-video-bg-play.js
// Based on: https://github.com/mozilla/video-bg-play
// License:  https://github.com/mozilla/video-bg-play/blob/master/LICENSE (MIT)
// From: https://gist.github.com/gwarser/3b47b61863bffcfebe4498c77b2301cd
(function(){
const IS_YOUTUBE = window.location.hostname.search(/(?:^|.+\.)youtube.com/) > -1 ||
                   window.location.hostname.search(/(?:^|.+\.)youtube-nocookie.com/) > -1;
const IS_MOBILE_YOUTUBE = window.location.hostname == 'm.youtube.com';
const IS_DESKTOP_YOUTUBE = IS_YOUTUBE && !IS_MOBILE_YOUTUBE;
const IS_VIMEO = window.location.hostname.search(/(?:^|.+\.)vimeo.com/) > -1;
const IS_ANDROID = window.navigator.userAgent.indexOf('Android') > -1;
// Page Visibility API
if (IS_ANDROID || !IS_DESKTOP_YOUTUBE) {
  Object.defineProperties(document,
    { 'hidden': {value: false}, 'visibilityState': {value: 'visible'} });
}
window.addEventListener(
  'visibilitychange', evt => evt.stopImmediatePropagation(), true);
// Fullscreen API
if (IS_VIMEO) {
  window.addEventListener(
    'fullscreenchange', evt => evt.stopImmediatePropagation(), true);
}
// User activity tracking
if (IS_YOUTUBE) {
  const refreshInterval = 5 * 60 * 1000; // every 5 minutes
  waitForYoutubeLactInit(() => refreshLact(), refreshInterval);
}
function waitForYoutubeLactInit(aCallback, aCallbackInterval, aDelay = 1000) {
  let pageWin = window;
  if (pageWin.hasOwnProperty('_lact')) {
    window.setInterval(aCallback, aCallbackInterval);
  } else {
    window.setTimeout(() => waitForYoutubeLactInit(aCallback,
                                                   aCallbackInterval,
                                                   aDelay * 2),
                      aDelay);
  }
}
function refreshLact() {
  window._lact = Date.now();
}
})()
