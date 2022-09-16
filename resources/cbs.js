/// cbs.js
(() => {
    window.XMLHttpRequest.prototype.open = new Proxy(window.XMLHttpRequest.prototype.open, {
        apply: async (a, b, c) => {
            const d = c[1];
            return "string" != typeof d || 0 === d.length ? Reflect.apply(a, b, c) : (d.match(/pubads\.g\.doubleclick.net\/ondemand\/hls\/.*\.m3u8/) && b.addEventListener("readystatechange", function() {
                if (4 === b.readyState) {
                    const a = b.response;
                    Object.defineProperty(b, "response", {
                        writable: !0
                    }), Object.defineProperty(b, "responseText", {
                        writable: !0
                    });
                    const c = a.replaceAll(/#EXTINF:(\d|\d\.\d+)\,\nhttps:\/\/redirector\.googlevideo\.com\/videoplayback\?[\s\S]*?&source=dclk_video_ads&[\s\S]*?\n/g, "");
                    b.response = c, b.responseText = c
                }
            }), Reflect.apply(a, b, c))
        }
    })
})();
