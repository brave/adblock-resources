/// brave-youtube-playback-speed-fix.js
// This script is injected into YouTube pages to work around a YouTube bug where
// the playback speed will only save for future videos when using the slider controls.
// If the user changes the playback speed using the buttons, the new speed will not be saved.
// This created issues where, if the user adjusted the slider, and then clicked the 1x button to
// reset the speed, the speed would be reset to 1x, but then all future videos would play at the
// previously set speed. The script works around this by saving the playback speed to sessionStorage
// whenever it changes, instead of relying on YouTube's default behavior.
(function () {
  const KEY = 'yt-player-playback-rate';
  function attach(player) {
    if (!player || !player.addEventListener || player.__rateHooked) return false;
    player.__rateHooked = true;
    player.addEventListener('onPlaybackRateChange', function (rate) {
      const v = (typeof rate === 'number') ? rate : (rate && rate.data) ?? rate;
      try {
        sessionStorage.setItem(KEY, JSON.stringify({
          data: String(v),
          creation: Date.now()
        }));
      } catch (e) {}
    });
    return true;
  }
  if (!attach(document.getElementById('movie_player'))) {
    const onNavFinish = function () {
      if (attach(document.getElementById('movie_player'))) {
        document.removeEventListener('yt-navigate-finish', onNavFinish);
      }
    };
    document.addEventListener('yt-navigate-finish', onNavFinish);
  }
})();
