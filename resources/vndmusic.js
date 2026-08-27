/// vndmusic.js 
(function () {
    const fix = url => {
        if (!url || !url.includes('vnd.youtube.music://')) return url;
        return url
            .replace('vnd.youtube.music://', 'https://')
            .replace(/[?&]mweb_deeplink=1/, '');
    };

    // Fix <a href>
    function fixLinks() {
        document.querySelectorAll('a[href^="vnd.youtube.music://"]').forEach(a => {
            a.href = fix(a.href);
        });
    }

    // Fix <meta refresh>
    function fixMeta() {
        document.querySelectorAll('meta[http-equiv="refresh"]').forEach(meta => {
            meta.content = fix(meta.content);
        });
    }

    function fixAll() {
        fixLinks();
        fixMeta();
    }

    fixAll();

    // Debounced MutationObserver
    let debounceTimer;
    new MutationObserver(() => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(fixAll, 100);
    }).observe(document.body, { childList: true, subtree: true });

    // Intercept JS navigation
    const originalAssign = location.assign.bind(location);
    const originalReplace = location.replace.bind(location);

    location.assign = url => originalAssign(fix(url));
    location.replace = url => originalReplace(fix(url));

    Object.defineProperty(location, 'href', {
        set(url) { originalAssign(fix(url)); }
    });

    // Intercept window.open
    const originalOpen = window.open.bind(window);
    window.open = (url, ...args) => originalOpen(fix(url), ...args);
})();
