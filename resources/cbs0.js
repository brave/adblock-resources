/// cbs0.js
(() => {
    const a = window.fetch;
    window.fetch = new Proxy(window.fetch, {
        apply: async (b, c, d) => {
            const e = d[0];
            if ("string" != typeof e || 0 === e.length) return Reflect.apply(b, c, d);
            if (e.match(/pubads\.g\.doubleclick\.net\/ondemand\/.*\/content\/.*\/vid\/.*\/streams\/.*\/manifest\.mpd|pubads\.g\.doubleclick.net\/ondemand\/hls\/.*\.m3u8/)) {
                const b = await a(...d);
                let c = await b.text();
                return c = c.replaceAll(/<Period id="(pre|mid|post)-roll-.-ad-[\s\S]*?>[\s\S]*?<\/Period>|#EXTINF:(\d|\d\.\d+)\,\nhttps:\/\/redirector\.googlevideo\.com\/videoplayback\?[\s\S]*?&source=dclk_video_ads&[\s\S]*?\n/g, ""), new Response(c)
            }
            return Reflect.apply(b, c, d)
        }
    })
})();
