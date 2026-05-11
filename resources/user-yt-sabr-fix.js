// YouTube's SABR (Server Adaptive Bitrate) protocol sends a backoffTimeMs
// value telling the player to wait before requesting video data. This
// covers the ad slot duration. Without an adblocker the ad fills the wait,
// so the user never notices. With an adblocker, the ad is blocked but the
// backoff remains, causing a 4-16 second spinner.
// From: https://iter.ca/post/yt-adblock/
//
// In the player JS, the backoffTimeMs value from the response is used to
// set a timer: deadline = Date.now() + backoffTimeMs. New requests are
// blocked while Date.now() < deadline. We zero backoffTimeMs in the
// response bytes before the player parses them, so the deadline equals
// Date.now() + 0 and requests begin immediately.

// NOTE: There is still an issue with SPA related in-page navigation. When 
// the user clicks on a recommeneded video, this script does not work yet.
// Modifications are needed to detect this navigation and re-apply the fix.

(function() {
    const DEBUG = true;
    const LOG_PREFIX = '[yt-sabr-fix]';
    const startTime = Date.now();
    const elapsed = () => ((Date.now() - startTime) / 1000).toFixed(2) + 's';
    const log = (...args) => { if (DEBUG) console.log(LOG_PREFIX, elapsed(), ...args); };

    const realFetch = window.fetch;

    // Step 1: Intercept SABR fetch responses from googlevideo.com
    window.fetch = function(resource, init) {
        const url = typeof resource === 'string' ? resource : (resource?.url || '');
        if (!url.includes('googlevideo.com') || !url.includes('sabr=1'))
            return realFetch.apply(this, arguments);

        let rn = '';
        try { rn = new URL(url).searchParams.get('rn') || ''; } catch(e) {}
        log('SABR fetch rn=' + rn);

        return realFetch.apply(this, arguments).then(function(response) {
            return readStream(response.body.getReader()).then(function(bytes) {
                // Step 2: Small responses (<1KB) are backoff envelopes, not media.
                //         Scan them for backoffTimeMs and zero it out.
                if (bytes.length < 1000) {
                    log('small response rn=' + rn, 'size=' + bytes.length);
                    zeroBackoffField(bytes, rn);
                }

                // Step 3: Return the patched response. The player parses
                //         backoffTimeMs as 0 and retries immediately.
                log('SABR done rn=' + rn, 'size=' + bytes.length);
                return new Response(bytes, {
                    status: response.status,
                    statusText: response.statusText,
                    headers: response.headers,
                });
            });
        });
    };

    // Read a ReadableStream to completion, return a single Uint8Array.
    function readStream(reader) {
        const chunks = [];
        return reader.read().then(function pump(result) {
            if (result.done) {
                let total = 0;
                for (let i = 0; i < chunks.length; i++) total += chunks[i].length;
                const merged = new Uint8Array(total);
                for (let i = 0, off = 0; i < chunks.length; off += chunks[i].length, i++)
                    merged.set(chunks[i], off);
                return merged;
            }
            chunks.push(result.value);
            return reader.read().then(pump);
        });
    }

    // Scan for protobuf field 4 (backoffTimeMs) and zero values > 500ms.
    //
    // Protobuf wire format: field 4, wire type 0 (varint) = tag byte 0x20
    // (field_number << 3 | wire_type = 4 << 3 | 0). The varint encoding
    // uses 7 bits per byte with bit 0x80 as a continuation flag.
    function zeroBackoffField(bytes, rn) {
        for (let i = 0; i < bytes.length - 2; i++) {
            if (bytes[i] !== 0x20) continue; // not a field 4 tag

            // Decode the varint that follows the tag byte
            let val = 0, shift = 0, end = i + 1;
            while (end < bytes.length && shift < 35) {
                val |= (bytes[end] & 0x7f) << shift; // low 7 bits contribute to value
                if (!(bytes[end] & 0x80)) { end++; break; } // no continuation bit = last byte
                shift += 7;
                end++;
            }

            if (val > 500 && val < 100000) {
                log('PATCH backoff=' + val + 'ms at offset=' + i, 'rn=' + rn);
                // Overwrite with a zero varint of the same byte length.
                // All bytes except the last get 0x80 (continuation), last gets 0x00 (value=0, no continuation).
                for (let j = i + 1; j < end; j++)
                    bytes[j] = (j < end - 1) ? 0x80 : 0x00;
            }
        }
    }

    // Log video readyState changes
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