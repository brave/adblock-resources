/// brave-youtube-quality.js
(function() {
    const IS_MOBILE_YOUTUBE = window.location.hostname == 'm.youtube.com';
    const IS_ANDROID = window.navigator.userAgent.indexOf('Android') > -1;
 
    if (IS_ANDROID && IS_MOBILE_YOUTUBE && typeof isYoutubeHdQualityPlaybackEnabled !== 'undefined') {
        navigation.addEventListener('navigate', (event) => {
            const url = new URL(event.destination.url);
            if (url.pathname && url.pathname === '/watch' && url.search && url.searchParams.get('v')) {
                const mutationObserver = new MutationObserver(() => {
                    let player = document.getElementById('movie_player');
                    if (player && typeof player.getAvailableQualityLevels !== 'undefined') {
                        const quality = isYoutubeHdQualityPlaybackEnabled ? 'hd720' : 'default';
                        console.log("tapan isYoutubeHdQualityPlaybackEnabled:"+ isYoutubeHdQualityPlaybackEnabled + ", quality:"+quality);
                        setPlaybackVideoQuality(player, quality);
                        mutationObserver.disconnect();
                    }
                });
                mutationObserver.observe(document.body, { childList: true, subtree: true });
            }
        });

        function setPlaybackVideoQuality(player, quality) {

            if (player.setPlaybackQualityRange) {
                player.setPlaybackQualityRange(quality);
            } else if (player.setPlaybackQuality) {
                player.setPlaybackQuality(quality);
            }
        }
    }
})()
