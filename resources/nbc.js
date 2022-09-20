// for nbc.com (filter from Adguard) , player player.theplatform.com
// to be added in "my filters": player.theplatform.com##+js(nbc)    
/// nbc.js
(() => {
    window.XMLHttpRequest.prototype.open = new Proxy(window.XMLHttpRequest.prototype.open, {
        apply: async (a, b, c) => {
            const d = c[1];
            return "string" != typeof d || 0 === d.length ? Reflect.apply(a, b, c) : (d.match(/manifest\..*\.theplatform\.com\/.*\/.*\.m3u8\?.*|manifest\..*\.theplatform\.com\/.*\/*\.meta.*/) && b.addEventListener("readystatechange", function() {
                if (4 === b.readyState) {
                    const a = b.response;
                    Object.defineProperty(b, "response", {
                        writable: !0
                    }), Object.defineProperty(b, "responseText", {
                        writable: !0
                    });
                    const c = a.replaceAll(/#EXTINF:.*\n.*tvessaiprod\.nbcuni\.com\/video\/[\s\S]*?#EXT-X-DISCONTINUITY|#EXT-X-VMAP-AD-BREAK[\s\S]*?#EXT-X-ENDLIST/g, "");
                    b.response = c, b.responseText = c
                }
            }), Reflect.apply(a, b, c))
        }
    })
})();
