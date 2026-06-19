// YouTube's SABR (Server Adaptive Bitrate) protocol sends a backoffTimeMs
// value telling the player to wait before requesting video data. This
// covers the ad slot duration. Without an adblocker the ad fills the wait,
// so the user never notices. With an adblocker, the ad is blocked but the
// backoff remains, causing a 4-16 second spinner.
// From: https://iter.ca/post/yt-adblock/
//
// The fix intercepts SABR streaming responses and looks for a real backoff
// (backoffTimeMs in the protobuf). When one is found it does two things:
//
// 1. Fresh ad-free session: if the backoff is blocking initial playback,
//    set isInlinePlaybackNoAd on the player's video data (telling it there's
//    no ad slot), then call cancelPlayback() + loadVideoById() to force a new
//    SABR session with no ad slot. Guarded per video and only before playback
//    starts, so no-ad videos and mid-playback pacing backoffs are left alone.
//
// 2. Backoff patching: the backoffTimeMs value is rewritten regardless, as a
//    fallback for when the fresh session still carries a backoff and to smooth
//    the normal pacing backoffs that occur mid-playback.
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

    // Force a fresh ad-free SABR session. Called from the SABR interceptor
    // below when it sees a real backoff. Set isInlinePlaybackNoAd so the new
    // session gets no ad slot, then tear down the current session and reload.
    // Guarded per video (one reload each, so a session that still backs off
    // falls back to patching rather than looping) and skipped once playback has
    // started — a no-ad video has no backoff, and a mid-playback backoff is
    // normal pacing.
    let reloadedVid = null;
    function forceFreshSession() {
        const vid = new URL(window.location.href).searchParams.get('v');
        if (!vid || vid === reloadedVid) return;
        const video = document.querySelector('video');
        if (video && video.currentTime > 1) return;
        reloadedVid = vid;
        const player = document.querySelector('#movie_player');
        if (!player?.cancelPlayback || !player?.loadVideoById) return;

        // Set the no-ad flag before reloading so the new session picks it up
        const vd = player.getVideoData?.();
        if (vd) vd.isInlinePlaybackNoAd = true;

        player.cancelPlayback();
        player.loadVideoById(vid);
        log('forced fresh ad-free session for', vid);
    }

    // Intercept SABR responses: detect a real backoff, force a fresh ad-free
    // session if needed (see forceFreshSession above), and patch backoffTimeMs.
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
                    // A real backoff blocks initial playback; force a fresh
                    // ad-free session (guarded per video, skipped mid-playback).
                    if (patchBackoffField(bytes, rn)) forceFreshSession();
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
        let patched = false;
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
                patched = true;
            }
        }
        return patched;
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

