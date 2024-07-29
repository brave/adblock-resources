/// brave-youtube-quality.js
(function() {
    const IS_MOBILE_YOUTUBE = window.location.hostname == 'm.youtube.com';
    const IS_ANDROID = window.navigator.userAgent.indexOf('Android') > -1;

    let intervalId = 0;    
    if (IS_ANDROID && IS_MOBILE_YOUTUBE && typeof isYtHdQualityPlaybackEnabled !== 'undefined' && isYtHdQualityPlaybackEnabled) {
        navigation.addEventListener('navigate', (event) => {
            const url = new URL(event.destination.url);
            if (url.pathname && url.pathname === '/watch' && url.search && url.searchParams.get('v')) {
                handlePlaybackVideoQuality();
            }
        });

        function setPlaybackVideoQuality(player, quality) {
            if (!player || typeof player.getAvailableQualityLevels === 'undefined') {
                return false;
            }

            let availableQualities = player.getAvailableQualityLevels();
            if (availableQualities && availableQualities.length > 0) {
                if (player.setPlaybackQualityRange) {
                    player.setPlaybackQualityRange(quality);
                    return true;
                }

                if (player.setPlaybackQuality) {
                    player.setPlaybackQuality(quality);
                    return true;
                }
            }
            
            return false;
        }

        function handlePlaybackVideoQuality() {
            let attemptCount = 0;
            const maxAttempts = 5;
            clearInterval(intervalId);
            intervalId = setInterval(function() {
                try {
                    let player = document.getElementById('movie_player');
                    if (attemptCount++ > maxAttempts) {
                        clearInterval(intervalId);
                        return;
                    }
                    if (setPlaybackVideoQuality(player, 'hd720')) {
                        clearInterval(intervalId);
                    }
                } catch (error) {
                    clearInterval(intervalId);
                }
            }, 500)
        }
    }
})()
