{
    const $___mock_aa48a9cf2c327459 = {};
    (exports => {
        'use strict';
        let isSealed = false;
        class Storage {
            constructor() {
                if (isSealed) {
                    throw new TypeError('Illegal constructor');
                }
            }
            get length() {
                return Object.keys(this).length;
            }
            key(index) {
                const keys = Object.keys(this);
                if (index < 0 || index >= keys.length) {
                    return null;
                }
                return keys[index];
            }
            getItem(key) {
                return Object.prototype.hasOwnProperty.call(this, key) ? this[key] : null;
            }
            setItem(key, value) {
                this[key] = String(value);
            }
            removeItem(key) {
                delete this[key];
            }
            clear() {
                const keys = Object.keys(this);
                for (const key of keys) {
                    delete this[key];
                }
            }
        }
        exports.Storage = {
            configurable: true,
            enumerable: true,
            value: Storage,
            writable: true
        };
        const localStorage = new Storage();
        exports.localStorage = {
            configurable: true,
            enumerable: true,
            get() {
                return localStorage;
            }
        };
        const sessionStorage = new Storage();
        exports.sessionStorage = {
            configurable: true,
            enumerable: true,
            get() {
                return sessionStorage;
            }
        };
        isSealed = true;
    })($___mock_aa48a9cf2c327459);
    (function () {
        (function () {
            var f = window, o = '//ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&SPug=true', a = function (u) {
                    return typeof u === 'function';
                }, p = console.log.bind(console, 'PubMatic:'), j = function (y, x) {
                    var v = 0, u = y.length, w = false;
                    for (; v < u; v++) {
                        if (y[v] === x) {
                            w = true;
                            break;
                        }
                    }
                    return w;
                }, l = function () {
                    return 'https:';
                }, d = function (v) {
                    var w = '';
                    for (var u in v) {
                        if (v.hasOwnProperty(u)) {
                            w += u + '=' + encodeURIComponent(v[u]) + '&';
                        }
                    }
                    return w;
                }, n = function (w) {
                    var v = f.document.createElement('iframe');
                    v.src = w;
                    v.style.height = '0px';
                    v.style.width = '0px';
                    v.style.display = 'none';
                    v.height = 0;
                    v.width = 0;
                    v.border = '0px';
                    v.hspace = '0';
                    v.vspace = '0';
                    v.marginWidth = '0';
                    v.marginHeight = '0';
                    v.style.border = '0';
                    v.scrolling = 'no';
                    v.frameBorder = '0';
                    var u = f.document.getElementsByTagName('script')[0];
                    u && u.parentNode && a(u.parentNode.appendChild) && u.parentNode.appendChild(v);
                }, b = 'PubMatic', i = 'PubMatic_USP', h = function () {
                    const $___old_fc077a12a393d1e4 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_fc077a12a393d1e4)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_aa48a9cf2c327459.localStorage));
                        return function () {
                            try {
                                return f.localStorage && a(f.localStorage.getItem) && a(f.localStorage.setItem);
                            } catch (u) {
                                return false;
                            }
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_fc077a12a393d1e4)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_fc077a12a393d1e4));
                    }
                }(), s = function (u, v) {
                    function y() {
                        var G = {};
                        function H() {
                            if (G.getConsentData && G.getVendorConsents) {
                                u(G);
                            }
                        }
                        return {
                            consentDataCallback: function (I) {
                                G.getConsentData = I;
                                H();
                            },
                            vendorConsentsCallback: function (I) {
                                G.getVendorConsents = I;
                                H();
                            }
                        };
                    }
                    function F() {
                        window.__cmp('getConsentData', null, w.consentDataCallback);
                        window.__cmp('getVendorConsents', null, w.vendorConsentsCallback);
                    }
                    var w = y();
                    var D = {};
                    if (window.__cmp) {
                        if (typeof window.__cmp === 'function') {
                            F();
                        } else {
                            setTimeout(function () {
                                if (typeof window.__cmp === 'function') {
                                    F();
                                }
                            }, 500);
                        }
                    } else {
                        if (window !== top) {
                            if (z() && typeof window.$sf.ext.cmp === 'function') {
                                E('getConsentData', w.consentDataCallback);
                                E('getVendorConsents', w.vendorConsentsCallback);
                            } else {
                                var B = window;
                                var A;
                                while (!A) {
                                    try {
                                        if (B.frames.__cmpLocator) {
                                            A = B;
                                        }
                                    } catch (C) {
                                    }
                                    if (B === window.top) {
                                        break;
                                    }
                                    B = B.parent;
                                }
                                x('getConsentData', A, w.consentDataCallback);
                                x('getVendorConsents', A, w.vendorConsentsCallback);
                            }
                        } else {
                            setTimeout(function () {
                                if (typeof window.__cmp === 'function') {
                                    F();
                                }
                            }, 500);
                        }
                    }
                    function z() {
                        return !!(window.$sf && window.$sf.ext);
                    }
                    function E(H, I) {
                        function G(L, K) {
                            if (L === 'cmpReturn') {
                                var J = H === 'getConsentData' ? K.vendorConsentData : K.vendorConsents;
                                I(J);
                            }
                        }
                        window.$sf.ext.register(1, 1, G);
                        window.$sf.ext.cmp(H);
                    }
                    function x(I, L, K) {
                        window.__cmp = function (O, M, R) {
                            if (!L) {
                                J();
                                var Q = 'TCF1: CMP not found';
                                return v(Q);
                            }
                            var N = Math.random() + '';
                            var P = {
                                __cmpCall: {
                                    command: O,
                                    parameter: M,
                                    callId: N
                                }
                            };
                            D[N] = R;
                            L.postMessage(P, '*');
                        };
                        window.addEventListener('message', H, false);
                        window.__cmp(I, null, G);
                        function H(O) {
                            var N = typeof O.data === 'string' && j(O.data, 'cmpReturn') ? JSON.parse(O.data) : O.data;
                            if (N.__cmpReturn && N.__cmpReturn.callId) {
                                var M = N.__cmpReturn;
                                if (typeof D[M.callId] !== 'undefined') {
                                    D[M.callId](M.returnValue, M.success);
                                    delete D[M.callId];
                                }
                            }
                        }
                        function J() {
                            window.removeEventListener('message', H, false);
                        }
                        function G(M) {
                            J();
                            K(M);
                        }
                    }
                }, q = function (u, v) {
                    function w(E, F) {
                        if (F) {
                            u(E, F);
                        } else {
                            v(E, F);
                        }
                    }
                    function D() {
                        window.__tcfapi('getTCData', 2, w);
                    }
                    var C = {};
                    if (window.__tcfapi) {
                        if (typeof window.__tcfapi === 'function') {
                            D();
                        } else {
                            setTimeout(function () {
                                if (typeof window.__tcfapi === 'function') {
                                    D();
                                }
                            }, 500);
                        }
                    } else {
                        if (window !== top) {
                            var A = window;
                            var z;
                            while (!z) {
                                try {
                                    if (A.frames.__tcfapiLocator) {
                                        z = A;
                                    }
                                } catch (B) {
                                }
                                if (A === window.top) {
                                    break;
                                }
                                A = A.parent;
                            }
                            x('getTCData', z, w);
                        } else {
                            setTimeout(function () {
                                if (typeof window.__tcfapi === 'function') {
                                    D();
                                }
                            }, 500);
                        }
                    }
                    function y() {
                        return !!(window.$sf && window.$sf.ext);
                    }
                    function x(G, J, I) {
                        window.__tcfapi = function (N, L, P, K) {
                            if (!J) {
                                H();
                                return v({ msg: 'TCF2: CMP not found' }, false);
                            }
                            var M = Math.random() + '';
                            var O = {
                                __tcfapiCall: {
                                    command: N,
                                    parameter: K,
                                    version: L,
                                    callId: M
                                }
                            };
                            C[M] = P;
                            J.postMessage(O, '*');
                        };
                        window.addEventListener('message', F, false);
                        window.__tcfapi(G, 2, E);
                        function F(L) {
                            var K = {};
                            try {
                                K = typeof L.data === 'string' ? JSON.parse(L.data) : L.data;
                            } catch (N) {
                            }
                            var M = K.__tcfapiReturn;
                            if (M) {
                                if (typeof C[M.callId] === 'function') {
                                    C[M.callId](M.returnValue, M.success);
                                    C[M.callId] = null;
                                }
                            }
                        }
                        function H() {
                            window.removeEventListener('message', F, false);
                        }
                        function E(K, L) {
                            H();
                            I(K, L);
                        }
                    }
                }, t = function (y) {
                    function v(z) {
                        if (z) {
                            if (z.getConsentData && z.getConsentData.consentData) {
                                r(y, 'c', z.getConsentData.consentData);
                            } else {
                                if (z.getVendorConsents && z.getVendorConsents.metadata) {
                                    r(y, 'c', z.getVendorConsents.metadata);
                                }
                            }
                        }
                    }
                    function x() {
                    }
                    s(v, x);
                    function u(z) {
                        if (z) {
                            if (z.tcString) {
                                r(y, 'c', z.tcString);
                            }
                        }
                    }
                    function w() {
                    }
                    q(u, w);
                }, r = function (x, u, w) {
                    var v;
                    if (!h) {
                        return;
                    }
                    try {
                        v = f.localStorage.getItem(b);
                    } catch (y) {
                    }
                    if (v && typeof v === 'string') {
                        try {
                            v = JSON.parse(v);
                        } catch (y) {
                            v = {};
                        }
                    } else {
                        v = {};
                    }
                    if (v) {
                        if (!v.hasOwnProperty(x)) {
                            v[x] = {};
                        }
                        v[x].t = new Date().getTime();
                        v[x][u] = encodeURIComponent(w);
                        if (u == 'c') {
                            v[x]['g'] = 1;
                        }
                    }
                    try {
                        f.localStorage.setItem(b, JSON.stringify(v));
                    } catch (y) {
                    }
                }, k = function (x) {
                    var w = { c: '' };
                    if (!h) {
                        return w;
                    }
                    var v;
                    try {
                        v = f.localStorage.getItem(b);
                    } catch (y) {
                    }
                    if (v && typeof v === 'string') {
                        try {
                            v = JSON.parse(v);
                        } catch (y) {
                            v = {};
                        }
                        if (v.hasOwnProperty(x)) {
                            var u = v[x];
                            if (u && u.c && u.t) {
                                if (u.t && parseInt(u.t) > new Date().getTime() - 24 * 60 * 60 * 1000) {
                                    w.c = u.c;
                                } else {
                                }
                            }
                        }
                    }
                    return w;
                }, c = function (w, x) {
                    var u = 1;
                    function D() {
                        var E = {};
                        function F() {
                            if (E.usPrivacy) {
                                w(E);
                            } else {
                            }
                        }
                        return {
                            consentDataCallback: function (G, H) {
                                if (H && G.uspString) {
                                    E.usPrivacy = G.uspString;
                                }
                                F();
                            }
                        };
                    }
                    var v = D();
                    var C = {};
                    try {
                        window.__uspapi('getUSPData', u, v.consentDataCallback);
                    } catch (B) {
                        var A = window;
                        var z;
                        while (!z) {
                            try {
                                if (A.frames.__uspapiLocator) {
                                    z = A;
                                }
                            } catch (B) {
                            }
                            if (A === window.top) {
                                break;
                            }
                            A = A.parent;
                        }
                        if (!z) {
                            return x('USP CMP not found.');
                        }
                        y('getUSPData', z, v.consentDataCallback);
                    }
                    function y(G, F, I) {
                        window.__uspapi = function (L, J, N) {
                            var K = Math.random() + '';
                            var M = {
                                __uspapiCall: {
                                    command: L,
                                    version: J,
                                    callId: K
                                }
                            };
                            C[K] = N;
                            F.postMessage(M, '*');
                        };
                        window.addEventListener('message', E, false);
                        window.__uspapi(G, u, H);
                        function E(K) {
                            var J = K && K.data && K.data.__uspapiReturn;
                            if (J && J.callId) {
                                if (typeof C[J.callId] !== 'undefined') {
                                    C[J.callId](J.returnValue, J.success);
                                    delete C[J.callId];
                                }
                            }
                        }
                        function H(J, K) {
                            window.removeEventListener('message', E, false);
                            I(J, K);
                        }
                    }
                }, e = function (v) {
                    function w(y) {
                        var x = !!(y && y.usPrivacy);
                        if (!x) {
                            return;
                        }
                        g(v, 'c', y.usPrivacy);
                    }
                    function u() {
                    }
                    c(w, u);
                }, g = function (x, u, w) {
                    var v;
                    if (!h) {
                        return;
                    }
                    try {
                        v = f.localStorage.getItem(i);
                    } catch (y) {
                    }
                    if (v && typeof v === 'string') {
                        try {
                            v = JSON.parse(v);
                        } catch (y) {
                            v = {};
                        }
                    } else {
                        v = {};
                    }
                    if (v) {
                        if (!v.hasOwnProperty(x)) {
                            v[x] = {};
                        }
                        v[x].t = new Date().getTime();
                        v[x][u] = w;
                    }
                    try {
                        f.localStorage.setItem(i, JSON.stringify(v));
                    } catch (y) {
                    }
                }, m = function (x) {
                    var w = { c: '' };
                    if (!h) {
                        return w;
                    }
                    var v;
                    try {
                        v = f.localStorage.getItem(i);
                    } catch (y) {
                    }
                    if (v && typeof v === 'string') {
                        try {
                            v = JSON.parse(v);
                        } catch (y) {
                            v = {};
                        }
                        if (v.hasOwnProperty(x)) {
                            var u = v[x];
                            if (u && u.c && u.t) {
                                if (u.t && parseInt(u.t) > new Date().getTime() - 24 * 60 * 60 * 1000) {
                                    w.c = u.c;
                                } else {
                                }
                            }
                        }
                    }
                    return w;
                };
            f.PubMaticSync = f.PubMaticSync || {};
            f.PubMaticSync.sync = function (u) {
                var v = {};
                u.delay = u.delay || 0;
                v.p = u.pubId || '';
                v.s = u.siteId || '';
                v.predirect = u.url || '';
                v.userIdMacro = u.macro || '';
                setTimeout(function () {
                    var x = f.__cmp ? 1 : 0;
                    t(u.pubId);
                    var y = k(u.pubId);
                    x = x ? x : u.gdpr ? u.gdpr : 0;
                    v.gdpr_consent = y && y.c ? y.c : u.gdprConsent || '';
                    v.gdpr = v.gdpr_consent ? 1 : x || '0';
                    e(u.pubId);
                    var w = m(u.pubId);
                    v.us_privacy = w && w.c ? w.c : u.us_privacy || '';
                    n(l() + o + '&' + d(v));
                }, u.delay);
            };
        }());
    }())
}