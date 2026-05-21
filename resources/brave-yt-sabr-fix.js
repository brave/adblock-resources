// YouTube's SABR (Server Adaptive Bitrate) protocol sends a backoffTimeMs
// value telling the player to wait before requesting video data. This
// covers the ad slot duration. Without an adblocker the ad fills the wait,
// so the user never notices. With an adblocker, the ad is blocked but the
// backoff remains, causing a 4-16 second spinner.
// From: https://iter.ca/post/yt-adblock/
//
// Two-pronged fix:
//
// 1. SPA navigation: When clicking between videos without a page reload,
//    the player reuses the old SABR session (which may already have a
//    backoff). On yt-navigate-finish, we set isInlinePlaybackNoAd on the
//    player's video data (telling it there's no ad slot), then call
//    cancelPlayback() + loadVideoById() to force a new SABR session.
//
// 2. SABR response patching (full page loads): Intercept SABR streaming
//    responses and rewrite backoffTimeMs in the protobuf. This handles
//    page reloads and direct navigations where the SABR session was
//    already established before the scriptlet could intervene.
//
// To use this scriptlet:
// 1. Go to brave://settings/shields/filters
// 2. Enable Developer mode
// 3. Click on create new scriptlet
// 4. Add this content and name it `user-yt-sabr-fix.js`
// 5. Add a custom filter: `www.youtube.com##+js(user-yt-sabr-fix.js)`
// 6. Go to YouTube and test

(function() {
    const DEBUG = false;
    const LOG_PREFIX = '[yt-sabr-fix]';
    const startTime = Date.now();
    const elapsed = () => ((Date.now() - startTime) / 1000).toFixed(2) + 's';
    const log = (...args) => { if (DEBUG) console.log(LOG_PREFIX, elapsed(), ...args); };

    // Premium accounts have no ads and no backoff, nothing to do.
    if (document.querySelector('a#logo[title*="Premium" i]')) return;

    // Prong 1: On SPA navigation, force a new ad-free SABR session.
    // Set isInlinePlaybackNoAd on the video data so the new session
    // doesn't get an ad slot, then tear down the old session and start fresh.
    // Initialize to the current vid so the initial yt-navigate-finish
    // (which fires on page load completion, not just SPA nav) is treated
    // as a duplicate and skipped. Avoids tearing down playback on refresh.
    // We skip teardown when there's no prior session to clear.
    let lastReloadedVid = new URL(window.location.href).searchParams.get('v') || '';
    window.addEventListener('yt-navigate-finish', () => {
        const vid = new URL(window.location.href).searchParams.get('v');
        if (!vid || vid === lastReloadedVid) return;
        const hadPriorSession = lastReloadedVid !== '';
        lastReloadedVid = vid;
        if (!hadPriorSession) return;

        setTimeout(() => {
            const player = document.querySelector('#movie_player');
            if (!player?.cancelPlayback || !player?.loadVideoById) return;

            // Set the no-ad flag before reloading so the new session picks it up
            const vd = player.getVideoData?.();
            if (vd) vd.isInlinePlaybackNoAd = true;

            player.cancelPlayback();
            player.loadVideoById(vid);
            log('forced new SABR session for', vid);
        }, 100);
    });

    // Prong 2: Intercept SABR responses and patch backoffTimeMs.
    // Tee the body so media chunks (>=1000 bytes) pass through untouched
    // — only the small control messages carrying the backoff field get
    // buffered and re-emitted as a synthesized Response.
    const realFetch = window.fetch;

    window.fetch = function(resource, init) {
        const url = typeof resource === 'string' ? resource : (resource?.url || '');

        if (url.includes('googlevideo.com') && url.includes('sabr=1')) {
            let rn = '';
            try { rn = new URL(url).searchParams.get('rn') || ''; } catch(e) {}
            log('SABR fetch rn=' + rn);

            return realFetch.apply(this, arguments).then(function(response) {
                if (!response.ok || !response.body) return response;
                // Tee defensively: if it throws (locked stream, browser quirk),
                // hand the original response back to avoid breaking the video entirely.
                let pass, scan, reinit;
                try {
                    [pass, scan] = response.body.tee();
                    reinit = { status: response.status, statusText: response.statusText, headers: response.headers };
                } catch (e) {
                    return response;
                }
                return readStream(scan.getReader(), 1000).then(function(bytes) {
                    if (bytes === null) {
                        log('SABR done rn=' + rn);
                        return new Response(pass, reinit);
                    }
                    log('small response rn=' + rn, 'size=' + bytes.length);
                    patchBackoffField(bytes, rn);
                    const out = new Response(bytes, reinit);
                    try {
                        Object.defineProperty(out, 'url', { value: response.url, configurable: true });
                        Object.defineProperty(out, 'type', { value: response.type, configurable: true });
                    } catch(e) {}
                    return out;
                });
            });
        }

        return realFetch.apply(this, arguments);
    };

    // Read a stream into a Uint8Array. If earlyExitThreshold is set and the
    // accumulated bytes cross it, cancel the reader and return null — used
    // to bail out of buffering when the response is clearly a media chunk
    // and should stream straight to the player instead.
    function readStream(reader, earlyExitThreshold) {
        const chunks = [];
        let total = 0;
        return reader.read().then(function pump(result) {
            if (result.done) {
                const merged = new Uint8Array(total);
                for (let i = 0, off = 0; i < chunks.length; off += chunks[i].length, i++)
                    merged.set(chunks[i], off);
                return merged;
            }
            chunks.push(result.value);
            total += result.value.length;
            if (earlyExitThreshold && total >= earlyExitThreshold) {
                try { reader.cancel(); } catch(e) {}
                return null;
            }
            return reader.read().then(pump);
        });
    }

    // Scan for protobuf field 4 (backoffTimeMs) and rewrite values > 500ms
    // to a small random value (50-150ms, looks like natural backoff noise
    // rather than a clean zero). Protobuf wire format: field 4, wire type
    // 0 (varint) = tag byte 0x20 (field_number << 3 | wire_type = 4 << 3
    // | 0). The varint uses 7 bits per byte with 0x80 as continuation
    // flag. We rewrite the varint in place, keeping the same byte count
    // so the message structure stays valid.
    function patchBackoffField(bytes, rn) {
        for (let i = 0; i < bytes.length - 2; i++) {
            if (bytes[i] !== 0x20) continue;
            let val = 0, shift = 0, end = i + 1;
            while (end < bytes.length && shift < 35) {
                val |= (bytes[end] & 0x7f) << shift;
                if (!(bytes[end] & 0x80)) { end++; break; }
                shift += 7;
                end++;
            }
            if (val > 500 && val < 100000) {
                const target = 50 + Math.floor(Math.random() * 100);
                log('PATCH backoff=' + val + 'ms → ' + target + 'ms at offset=' + i, 'rn=' + rn);
                let pos = i + 1, remaining = target;
                while (pos < end - 1) {
                    bytes[pos++] = (remaining & 0x7f) | 0x80;
                    remaining >>>= 7;
                }
                bytes[pos] = remaining & 0x7f;
            }
        }
    }

    if (DEBUG) {
        let lastRS = -1;
        setInterval(function() {
            const v = document.querySelector('video');
            if (!v) return;
            if (v.readyState !== lastRS) {
                const buf = v.buffered.length > 0 ? v.buffered.end(0).toFixed(1) : '0';
                log('VIDEO rs=' + v.readyState, 'ct=' + v.currentTime.toFixed(1), 'buf=' + buf, v.paused ? 'paused' : 'playing');
                lastRS = v.readyState;
            }
        }, 200);
    }

    log('loaded');
})();

