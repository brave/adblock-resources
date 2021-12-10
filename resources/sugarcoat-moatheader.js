{
    const $___mock_7235ea711e4437da = {};
    (exports => {
        'use strict';
        const xhrUnsent = 0;
        const xhrOpened = 1;
        const xhrHeadersReceived = 2;
        const xhrLoading = 3;
        const xhrDone = 4;
        const xhrDeferredHandleSymbol = Symbol('deferredHandle');
        const xhrOnLoadStartSymbol = Symbol('onloadstart');
        const xhrOnProgressSymbol = Symbol('onprogress');
        const xhrOnAbortSymbol = Symbol('onabort');
        const xhrOnErrorSymbol = Symbol('onerror');
        const xhrOnLoadSymbol = Symbol('onload');
        const xhrOnTimeoutSymbol = Symbol('ontimeout');
        const xhrOnLoadEndSymbol = Symbol('onloadend');
        const xhrOnReadyStateChangeSymbol = Symbol('onreadystatechange');
        const xhrReadyStateSymbol = Symbol('readyState');
        const xhrTimeoutSymbol = Symbol('timeout');
        const xhrWithCredentialsSymbol = Symbol('withCredentials');
        const xhrUploadSymbol = Symbol('upload');
        const xhrResponseTypeSymbol = Symbol('responseType');
        const defineEvent = (obj, symbol) => {
            const type = symbol.description.substring(2);
            Object.defineProperty(obj, symbol, {
                configurable: false,
                enumerable: false,
                value: null,
                writable: true
            });
            obj.addEventListener(type, function (event) {
                const handler = this[symbol];
                if (handler) {
                    handler.call(this, event);
                }
            });
        };
        const changeReadyState = (xhr, readyState) => {
            xhr[xhrReadyStateSymbol] = readyState;
            xhr.dispatchEvent(new Event('readystatechange'));
        };
        let isSealed = true;
        class XMLHttpRequestEventTarget extends EventTarget {
            constructor() {
                super();
                if (!(this instanceof XMLHttpRequest) && !(this instanceof XMLHttpRequestUpload)) {
                    throw new TypeError('Illegal constructor');
                }
                defineEvent(this, xhrOnLoadStartSymbol);
                defineEvent(this, xhrOnProgressSymbol);
                defineEvent(this, xhrOnAbortSymbol);
                defineEvent(this, xhrOnErrorSymbol);
                defineEvent(this, xhrOnLoadSymbol);
                defineEvent(this, xhrOnTimeoutSymbol);
                defineEvent(this, xhrOnLoadEndSymbol);
            }
            get onloadstart() {
                return this[xhrOnLoadStartSymbol];
            }
            set onloadstart(value) {
                this[xhrOnLoadStartSymbol] = value;
            }
            get onprogress() {
                return this[xhrOnProgressSymbol];
            }
            set onprogress(value) {
                this[xhrOnProgressSymbol] = value;
            }
            get onabort() {
                return this[xhrOnAbortSymbol];
            }
            set onabort(value) {
                this[xhrOnAbortSymbol] = value;
            }
            get onerror() {
                return this[xhrOnErrorSymbol];
            }
            set onerror(value) {
                this[xhrOnErrorSymbol] = value;
            }
            get ontimeout() {
                return this[xhrOnTimeoutSymbol];
            }
            set ontimeout(value) {
                this[xhrOnTimeoutSymbol] = value;
            }
            get onloadend() {
                return this[xhrOnLoadEndSymbol];
            }
            set onloadend(value) {
                this[xhrOnLoadEndSymbol] = value;
            }
        }
        exports.XMLHttpRequestEventTarget = {
            configurable: true,
            enumerable: true,
            value: XMLHttpRequestEventTarget,
            writable: true
        };
        class XMLHttpRequestUpload extends XMLHttpRequestEventTarget {
            constructor() {
                if (isSealed) {
                    throw new TypeError('Illegal constructor');
                }
                super();
            }
        }
        exports.XMLHttpRequestUpload = {
            configurable: true,
            enumerable: true,
            value: XMLHttpRequestUpload,
            writable: true
        };
        class XMLHttpRequest extends XMLHttpRequestEventTarget {
            constructor() {
                super();
                isSealed = false;
                const xhrUpload = new XMLHttpRequestUpload();
                isSealed = true;
                Object.defineProperty(this, xhrDeferredHandleSymbol, {
                    configurable: false,
                    enumerable: false,
                    value: null,
                    writable: true
                });
                defineEvent(this, xhrOnReadyStateChangeSymbol);
                Object.defineProperty(this, xhrReadyStateSymbol, {
                    configurable: false,
                    enumerable: false,
                    value: xhrUnsent,
                    writable: true
                });
                Object.defineProperty(this, xhrTimeoutSymbol, {
                    configurable: false,
                    enumerable: false,
                    value: 0,
                    writable: true
                });
                Object.defineProperty(this, xhrWithCredentialsSymbol, {
                    configurable: false,
                    enumerable: false,
                    value: false,
                    writable: true
                });
                Object.defineProperty(this, xhrUploadSymbol, {
                    configurable: false,
                    enumerable: false,
                    value: xhrUpload,
                    writable: false
                });
                Object.defineProperty(this, xhrResponseTypeSymbol, {
                    configurable: false,
                    enumerable: false,
                    value: '',
                    writable: true
                });
            }
            get onreadystatechange() {
                return this[xhrOnReadyStateChangeSymbol];
            }
            set onreadystatechange(value) {
                this[xhrOnReadyStateChangeSymbol] = value;
            }
            get readyState() {
                return this[xhrReadyStateSymbol];
            }
            open(method, url) {
                switch (this[xhrReadyStateSymbol]) {
                case xhrUnsent:
                case xhrDone: {
                        changeReadyState(this, xhrOpened);
                        break;
                    }
                }
            }
            setRequestHeader(name, value) {
            }
            setTrustToken(trustToken) {
            }
            get timeout() {
                return this[xhrTimeoutSymbol];
            }
            set timeout(value) {
                this[xhrTimeoutSymbol] = value;
            }
            get withCredentials() {
                return this[xhrWithCredentialsSymbol];
            }
            set withCredentials(value) {
                switch (this[xhrReadyStateSymbol]) {
                case xhrUnsent:
                case xhrOpened: {
                        break;
                    }
                default: {
                        throw new DOMException('Failed to set the \'withCredentials\' property on \'XMLHttpRequest\': The value may only be set if the object\'s state is UNSENT or OPENED.');
                    }
                }
                this[xhrWithCredentialsSymbol] = !!value;
            }
            get upload() {
                return this[xhrUploadSymbol];
            }
            send() {
                if (this[xhrReadyStateSymbol] === xhrOpened && this[xhrDeferredHandleSymbol] === null) {
                    this[xhrDeferredHandleSymbol] = setTimeout(() => {
                        this[xhrDeferredHandleSymbol] = null;
                        changeReadyState(this, xhrDone);
                        this.dispatchEvent(new ProgressEvent('error'));
                        this.dispatchEvent(new ProgressEvent('loadend'));
                    }, 0);
                } else {
                    throw new DOMException('Failed to execute \'send\' on \'XMLHttpRequest\': The object\'s state must be OPENED.');
                }
            }
            abort() {
                if (this[xhrReadyStateSymbol] === xhrOpened && this[xhrDeferredHandleSymbol] !== null) {
                    clearTimeout(this[xhrDeferredHandleSymbol]);
                    this[xhrDeferredHandleSymbol] = null;
                    changeReadyState(this, xhrUnsent);
                    this.dispatchEvent(new ProgressEvent('abort'));
                    this.dispatchEvent(new ProgressEvent('loadend'));
                }
            }
            get responseURL() {
                return '';
            }
            get status() {
                return 0;
            }
            get statusText() {
                return '';
            }
            getResponseHeader(name) {
                return null;
            }
            overrideMimeType(mime) {
            }
            get responseType() {
                return this[xhrResponseTypeSymbol];
            }
            set responseType(value) {
                switch (this[xhrReadyStateSymbol]) {
                case xhrDone: {
                        throw new DOMException('Failed to set the \'responseType\' property on \'XMLHttpRequest\': The response type cannot be set if the object\'s state is LOADING or DONE.');
                    }
                }
                switch (value) {
                case '':
                case 'arraybuffer':
                case 'blob':
                case 'document':
                case 'json':
                case 'text': {
                        this[xhrResponseTypeSymbol] = value;
                        break;
                    }
                }
            }
            get response() {
                const responseType = this[xhrResponseTypeSymbol];
                return responseType === '' || responseType === 'text' ? '' : null;
            }
            get responseText() {
                const responseType = this[xhrResponseTypeSymbol];
                if (responseType === '' || responseType === 'text') {
                    return '';
                } else {
                    throw new DOMException('Failed to read the \'responseText\' property from \'XMLHttpRequest\': The value is only accessible if the object\'s \'responseType\' is \'\' or \'text\' (was \'arraybuffer\').');
                }
            }
            get responseXML() {
                return null;
            }
        }
        Object.defineProperty(XMLHttpRequest, 'UNSENT', {
            configurable: false,
            enumerable: true,
            value: xhrUnsent
        });
        Object.defineProperty(XMLHttpRequest, 'OPENED', {
            configurable: false,
            enumerable: true,
            value: xhrOpened
        });
        Object.defineProperty(XMLHttpRequest, 'HEADERS_RECEIVED', {
            configurable: false,
            enumerable: true,
            value: xhrHeadersReceived
        });
        Object.defineProperty(XMLHttpRequest, 'LOADING', {
            configurable: false,
            enumerable: true,
            value: xhrLoading
        });
        Object.defineProperty(XMLHttpRequest, 'DONE', {
            configurable: false,
            enumerable: true,
            value: xhrDone
        });
        exports.XMLHttpRequest = {
            configurable: true,
            enumerable: true,
            value: XMLHttpRequest,
            writable: true
        };
    })($___mock_7235ea711e4437da);
    (function () {
        try {
            (function (A, w) {
                function va() {
                    u.k.a.sxaz('trackingReady', { callback: va });
                    qa = r.h;
                    r.h++;
                    r.i[qa] = !1;
                    var a = {};
                    u.ap.a(a);
                    u.f.ag(a);
                    u.ac.l();
                    u.l.e(u.j.f, 100);
                    u.am.b();
                    u.bb.a();
                    u.k.a.azsx('adInitialized', u.ay.a);
                    u.c.ax.c || (u.c.ax.c = !0, r.dcsx && (r.dcsx.ynds(window, 'unload', 'unload-' + u.c.ax.a, 'unloadFn' + u.c.ax.a), r.dcsx.ynds(window, 'beforeunload', 'unload-' + u.c.ax.a, 'beforeunloadFn' + u.c.ax.a)));
                    r.swde.azsx('unload-' + u.c.ax.a, Fa, { once: !0 });
                    u.az.c();
                    u.az.d();
                }
                var u = {};
                w.floor(w.random() * w.pow(10, 12));
                var W, ra, na, qa = 0, oa = {}, O = {}, F = {}, X = [], B = {}, ja = !1, sa = {
                        15: '',
                        12: '',
                        6: '',
                        7: ''
                    }, ta = function () {
                        u.d.a(null, 0) || u.d.b();
                        for (var a in O)
                            O.hasOwnProperty && O.hasOwnProperty(a) && O[a] && u.a.a(O[a]);
                        for (a = 0; a < X.length; a++)
                            u.a.b(X[a]);
                        for (var k in F)
                            F.hasOwnProperty && F.hasOwnProperty(k) && F[k] && (u.a.a(F[k].tid), F[k] = !1);
                        O = {};
                        X = [];
                        L = null;
                        u.b = null;
                        u.c.a = null;
                    };
                u.e = ta;
                (function (a) {
                    function k(b) {
                        return (b = a.a.c.toString.call(b)) && ('[object Array]' === b || '[object Array Iterator]' === b);
                    }
                    a.a = {};
                    a.a.c = {};
                    for (var d = [
                                [
                                    1,
                                    25
                                ],
                                [
                                    7,
                                    1
                                ],
                                [
                                    1,
                                    25
                                ],
                                [
                                    -74,
                                    1
                                ],
                                [
                                    1,
                                    9
                                ],
                                [
                                    -24,
                                    1
                                ],
                                [
                                    2,
                                    1
                                ],
                                [
                                    1,
                                    3
                                ],
                                [
                                    2,
                                    1
                                ],
                                [
                                    1,
                                    4
                                ],
                                [
                                    2,
                                    1
                                ],
                                [
                                    1,
                                    1
                                ],
                                [
                                    11,
                                    1
                                ],
                                [
                                    1,
                                    6
                                ],
                                [
                                    27,
                                    1
                                ],
                                [
                                    2,
                                    1
                                ],
                                [
                                    1,
                                    3
                                ],
                                [
                                    27,
                                    1
                                ],
                                [
                                    1,
                                    3
                                ],
                                [
                                    -92,
                                    1
                                ]
                            ], f = 65, g = '', c = 0, c = 0; c < d.length; c++)
                        for (var b = 0; b < d[c][1]; b++)
                            g += String.fromCharCode(f), f += d[c][0];
                    g += String.fromCharCode(f);
                    a.a.d = g;
                    a.a.e = function (a) {
                        for (var h = '', l = 0; l < a.length; l++)
                            a.hasOwnProperty(l) && (h += g[a[l]]);
                        return h;
                    };
                    a.a.f = k;
                    a.a.g = function (b) {
                        return !!(b && b.document && b.location && b[a.f.a([
                            26,
                            37,
                            30,
                            43,
                            45
                        ])] && b[a.f.a([
                            44,
                            30,
                            45,
                            8,
                            39,
                            45,
                            30,
                            43,
                            47,
                            26,
                            37
                        ])]);
                    };
                    a.a.h = function (b) {
                        if (null == b || a.a.g(b))
                            return !1;
                        var h = b.length;
                        return 1 === b.nodeType && h ? !0 : 'string' === typeof b || k(b) || 0 === h || 'number' === typeof h && 0 < h && h - 1 in b;
                    };
                    a.a.forEach = function (b, h, l, p) {
                        var c, d = typeof b;
                        if (b)
                            if ('function' === d)
                                for (c in b) {
                                    if ('prototype' != c && 'length' != c && 'name' != c && (p || !b.hasOwnProperty || b.hasOwnProperty(c)) && (d = h.call(l, b[c], c), 'boolean' === typeof d && !d))
                                        break;
                                }
                            else if ('number' === d)
                                for (c = 0; c < b && (d = h.call(l, b, c), 'boolean' !== typeof d || d); c++);
                            else if ('function' === typeof b.every)
                                b.every(function (a, b, p) {
                                    a = h.call(l, a, b);
                                    return !('boolean' === typeof a && !a);
                                });
                            else if (a.a.h(b))
                                for (c = 0; c < b.length && (d = h.call(l, b[c], c), 'boolean' !== typeof d || d); c++);
                            else
                                for (c in b)
                                    if (p || b.hasOwnProperty(c))
                                        if (d = h.call(l, b[c], c), 'boolean' === typeof d && !d)
                                            break;
                        return b;
                    };
                    a.a.i = function (b) {
                        if (!b)
                            return !1;
                        var h;
                        if (b !== Object(b))
                            h = b;
                        else if (a.a.h(b)) {
                            h = [];
                            for (var l = 0, p = b.length; l < p; l++)
                                h[l] = b[l];
                        } else
                            for (l in (h = {}, b))
                                h[l] = b[l];
                        return h;
                    };
                    a.a.j = function (b, h) {
                        if (!b || 'function' !== typeof b)
                            return !1;
                        var l = !1;
                        0 <= String(b).indexOf('[native code]') ? l = !0 : a.c.b || b === Function.prototype.toString || (l = !0);
                        l && h && (l = b.toString && b.toString === Function.prototype.toString);
                        return l;
                    };
                    a.a.k = function () {
                        try {
                            return navigator.userAgent;
                        } catch (a) {
                            return '';
                        }
                    };
                    a.a.l = function (b) {
                        b = b || a.a.k();
                        return !(!/iPad|iPhone|iPod|Silk|Kindle|Android|BlackBerry|PlayBook|BB10|Windows Phone|SpreadTrum|MAUI/.exec(b) && !a.a.m(b));
                    };
                    a.a.n = function (b) {
                        b = b || a.a.k();
                        return !!/Android/.exec(b);
                    };
                    a.a.m = function (a, h) {
                        var l = h || document;
                        return !!(/Macintosh/.exec(a) && 'ontouchend' in l);
                    };
                    a.a.o = function (b) {
                        b = b || a.a.k();
                        var h = /Safari|CriOS/i;
                        return !(!/iPhone|iPod|iPad/.exec(b) && !a.a.m(b) || h.exec(b));
                    };
                    a.a.p = function () {
                        return !1;
                    };
                    a.a.q = function (b) {
                        b = b || a.a.k();
                        return a.a.n(b) ? !!/Version/.exec(b) : !1;
                    };
                    a.a.r = function (b) {
                        if (!navigator)
                            return null;
                        b = b || a.a.k();
                        return b ? (b = b.match(/Edge\/(\d{1,}(.\d{1,})?)/)) ? parseFloat(b[1]) : null : null;
                    };
                    a.a.s = function () {
                        if (!navigator)
                            return null;
                        var b;
                        b = a.a.k();
                        return 'Microsoft Internet Explorer' == navigator.appName ? parseInt(b.replace(/^.*MSIE (\d+).*$/, '$1'), 10) : 'Netscape' == navigator.appName && (b = b.match(/(?:Trident\/.*rv:|MSIE )(\d+)/)) ? parseInt(b[1], 10) : null;
                    };
                    a.a.t = function () {
                        return null != a.a.s();
                    };
                    a.a.u = function (b, h) {
                        function l(h, b) {
                            if (b >= p || h !== Object(h))
                                return !1;
                            'function' === typeof h.toString && h.toString();
                            var e = Object.getPrototypeOf(h);
                            e && 'function' === typeof e.toString && e.toString();
                            b < p && a.a.forEach(h, function (a) {
                                l(a, b + 1);
                            });
                            return !1;
                        }
                        var p = w.min(10, h || 2);
                        try {
                            return l(b, 0);
                        } catch (c) {
                            return !0;
                        }
                    };
                }(u));
                (function (a) {
                    function k(a) {
                        var l = new RegExp('(^| )' + a + '($| )');
                        return function (a) {
                            return a && a.className && a.className.match(l);
                        };
                    }
                    function d(a) {
                        var l = {}, b;
                        for (b in a)
                            'number' === typeof a[b] && (l[b] = w.round(a[b]));
                        return l;
                    }
                    function f() {
                        return !1;
                    }
                    a.a.v = 2500;
                    a.a.w = 1000;
                    a.a.x = !1;
                    a.a.y = !1;
                    a.a.z = function () {
                        var h = /Firefox\/(\d+)/.exec(a.a.k());
                        return h ? (h = parseInt(h[1], 10), 21 > h && 14 < h) : !1;
                    }();
                    a.a.aa = function () {
                        var h, l = /^(?:[a-z]+:\/\/|:?\/?\/)?(?:www\.)?([^\/:]*)/i;
                        a.c.c || (h = a.a.ab(), !h && a.c.d && (h = a.c.d));
                        h || (h = a.c.e.location.hostname);
                        return (h = h && h.match && h.match(l)) && h[1] || a.c.e.location.hostname;
                    };
                    a.a.ac = function () {
                        var h = a.a.ad();
                        if (h && h.url)
                            return h;
                        var h = a.g.a(), l = a.a.ab(), b = a.a.ae(h, l);
                        return b && b.url || (b = a.a.af(h)) && b.url ? b : (l = a.a.ag(l)) && l.url ? l : (h = a.a.ah(h)) ? h : a.a.ai();
                    };
                    a.a.ai = function () {
                        a.c.f(10);
                        return {
                            url: '',
                            isCorrect: !1
                        };
                    };
                    a.a.ad = function () {
                        if (!a.c.c)
                            return !1;
                        var h = window.top && window.top.location && window.top.location.href;
                        if (h)
                            return a.c.f(4), {
                                url: h,
                                isCorrect: !0
                            };
                    };
                    a.a.ag = function (h) {
                        h = h || a.a.ab();
                        if (!h)
                            return !1;
                        a.c.f(2);
                        return {
                            url: h,
                            isCorrect: !1
                        };
                    };
                    a.a.ah = function (h) {
                        h = h && h.document && h.document.referrer;
                        if (!h)
                            return !1;
                        a.c.f(3);
                        return {
                            url: h,
                            isCorrect: !1
                        };
                    };
                    a.a.af = function (h) {
                        h = a.a.aj(h);
                        if (!h)
                            return !1;
                        h.parentIsTop ? a.c.f(3) : a.c.f(9);
                        var l = !0;
                        try {
                            var b;
                            URL && URL.constructor && URL.constructor.name && 'Function' === URL.constructor.name ? b = new URL(h.url) : (b = document.createElement('a'), b.href = h.url);
                            l = '' === b.pathname || '/' === b.pathname;
                        } catch (e) {
                        }
                        return {
                            url: h.url,
                            isCorrect: !l
                        };
                    };
                    a.a.aj = function (h, l, b, e) {
                        l = a.c.c;
                        if (!h || l)
                            return !1;
                        l = h.document && h.document.referrer;
                        if (!l || !a.a.ak(l))
                            return !1;
                        if (h.parent === h.top)
                            return {
                                url: l,
                                parentIsTop: !0
                            };
                        h = location && location.ancestorOrigins;
                        b = location && location.origin;
                        if (!h || 0 === h.length || !b)
                            return !1;
                        e = !1;
                        for (var c, d = 0; d < h.length; d++)
                            if (c = h[d], b !== c) {
                                if (e)
                                    return !1;
                                e = !0;
                                b = c;
                            }
                        return e && 0 === l.search(h[h.length - 1]) ? {
                            url: l,
                            parentIsTop: !1
                        } : !1;
                    };
                    a.a.ae = function (h, l) {
                        l = l || a.a.ab();
                        if (!l)
                            return !1;
                        var b = a.a.al(h, l);
                        if (a.a.ak(b))
                            return a.c.f(6), {
                                url: b,
                                isCorrect: !1
                            };
                    };
                    a.a.al = function (a, l) {
                        var b;
                        b = a && a.location && a.location.hostname;
                        b = 'string' !== typeof b ? !1 : b.match(/^([^\.]+\.)*(googlesyndication\.com|doubleclick\.net|adnxs\.com)$/) && a.location.href;
                        if (!b || !l)
                            return !1;
                        var e = encodeURIComponent(l).replace(/[.*+^${}()|[\]\\]/g, '\\$&');
                        return (b = b.match(new RegExp('[?&](?:url|referrer)=(' + e + '(?:%2F[^&]*|$))'))) ? decodeURIComponent(b[1]) : !1;
                    };
                    a.a.am = function () {
                        if ('string' === typeof a.c.g)
                            return a.c.g;
                        var h = !1, l, b = /^https?:\/\/(.*?)\/([^?#]*)/;
                        a.c.c ? (h = window.location.hostname.replace('www.', ''), h += window.location.pathname) : (l = a.g.a(), l.parent === window.top && (h = l.document.referrer) && (l = b.exec(h)) && (h = l[1].replace('www.', '') + '/' + l[2]));
                        'string' === typeof h && '/' === h.charAt(h.length - 1) && (h = h.substr(0, h.length - 1));
                        return h;
                    };
                    a.a.an = function () {
                        var h;
                        a.c.c ? h = 2 : (h = a.g.a(), h = h.parent === window.top ? 2 : location && location.ancestorOrigins ? 1 : 0);
                        return h;
                    };
                    a.a.ab = function () {
                        var a = location && location.ancestorOrigins;
                        return a ? 0 === a.length ? !1 : a[a.length - 1] : !1;
                    };
                    a.a.ao = function () {
                        var h, l = a.a.aa(), b = l && l.split('.'), e = b && b.length;
                        3 <= e ? h = 'co' === b[e - 2] || 'com' === b[e - 2] ? b[e - 3] + '.' + b[e - 2] + '.' + b[e - 1] : b[e - 2] + '.' + b[e - 1] : 2 == e && (h = b[e - 2] + '.' + b[e - 1]);
                        return h && decodeURIComponent(h) || decodeURIComponent(l);
                    };
                    a.a.ap = function (a) {
                        if ('string' !== typeof a)
                            return '';
                        var b = a.match(/^([^:]{2,}:\/\/[^\/]*)/);
                        b && b[1] && (a = b[1]);
                        return a;
                    };
                    a.a.aq = function (a, b) {
                        if ('string' !== typeof a || 'string' !== typeof b || '' === a || '' === b)
                            return null;
                        try {
                            var p = new RegExp(b + '=([^?&;#]*)(?:$|[?&;#])').exec(a);
                        } catch (e) {
                            return null;
                        }
                        return p && p[1];
                    };
                    a.a.ar = function (a, b) {
                        for (var p = [a], e = 1; e <= b; e++)
                            p.push(a + e), p.push(a - e);
                        p = p[w.floor(w.random() * p.length)];
                        e = w.floor(w.random() * p);
                        return {
                            multiplier: p,
                            sample: 0 == e
                        };
                    };
                    a.a.as = function (h, b) {
                        var p = a.a.ar(h, b);
                        a.a.at(p.multiplier, p.sample);
                        return p;
                    };
                    a.a.au = function () {
                        return a.a.as(a.h, a.i).sample;
                    };
                    a.a.at = function (h, b) {
                        a.a.as = function () {
                            return {
                                multiplier: h,
                                sample: b
                            };
                        };
                    };
                    a.a.av = function () {
                        var h = a.a.s();
                        return 5 === h || 6 === h || 7 === h;
                    };
                    a.a.aw = function (a) {
                        switch (a.s) {
                        case !1:
                            return 'unsafe';
                        case !0:
                            return 'safe';
                        default:
                            return 'safe';
                        }
                    };
                    a.a.ax = function (h, b) {
                        return -1 !== a.a.indexOf(h, b);
                    };
                    a.a.ay = function () {
                        function a(h) {
                            if (!h)
                                return '';
                            h = h.match(/[\d]+/g);
                            h.length = 3;
                            return h.join('.');
                        }
                        var b = !1, p = '';
                        if (navigator.plugins && navigator.plugins.length) {
                            var e = navigator.plugins['Shockwave Flash'];
                            e && (b = !0, e.description && (p = a(e.description)));
                            navigator.plugins['Shockwave Flash 2.0'] && (b = !0, p = '2.0.0.11');
                        } else if (navigator.mimeTypes && navigator.mimeTypes.length)
                            (b = (e = navigator.mimeTypes['application/x-shockwave-flash']) && e.enabledPlugin && e.enabledPlugin.description) && (p = a(e.enabledPlugin.description));
                        else
                            try {
                                e = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.7'), b = !0, p = a(e.GetVariable('$version'));
                            } catch (c) {
                                try {
                                    e = new ActiveXObject('ShockwaveFlash.ShockwaveFlash.6'), b = !0, p = '6.0.21';
                                } catch (d) {
                                    try {
                                        e = new ActiveXObject('ShockwaveFlash.ShockwaveFlash'), b = !0, p = a(e.GetVariable('$version'));
                                    } catch (f) {
                                    }
                                }
                            }
                        return b ? p : '0';
                    };
                    a.a.getElementsByClassName = function (a, b, p) {
                        b = b || '*';
                        p = p || document;
                        if (p.getElementsByClassName) {
                            var e = [], c = p.getElementsByClassName(a);
                            if ('*' !== b) {
                                a = 0;
                                for (p = c.length; a < p; a++) {
                                    var d = c[a];
                                    d.tagName === b && e.push(d);
                                }
                                return e;
                            }
                            return c;
                        }
                        c = [];
                        b = p.getElementsByTagName(b);
                        p = k(a);
                        d = b.length;
                        for (a = 0; a < d; a++)
                            e = b[a], p(e) && c.push(e);
                        return c;
                    };
                    a.a.az = k;
                    a.a.ba = function (a, b) {
                        if (!a || !b)
                            return !1;
                        var p = new RegExp('(^| )' + b + '($| )');
                        return a.className && a.className.match(p);
                    };
                    a.a.bb = function (a) {
                        return new A() - a.de;
                    };
                    a.a.bc = function (a) {
                        return a.replace(/^http:/, '').replace(/^\/\//, '').replace(/^www[^.]*\./, '').split('/')[0];
                    };
                    a.a.bd = function (h, b, p) {
                        if (('undefined' === typeof p || !p) && h && (p = a.a.be(h), !p))
                            return;
                        if (h && h.nodeType)
                            if ('undefined' === typeof Node) {
                                if (1 != h.nodeType)
                                    return;
                            } else if (h.nodeType != Node.ELEMENT_NODE)
                                return;
                        if (p.getComputedStyle)
                            return p.getComputedStyle(h, '') && p.getComputedStyle(h, '')[b];
                        for (p = b.indexOf('-'); -1 < p;)
                            b = p == b.length - 1 ? b.substr(0, p) : b.substr(0, p) + b.charAt(p + 1).toUpperCase() + b.substr(p + 2), p = b.indexOf('-');
                        if (h.currentStyle)
                            return h.currentStyle[b];
                        if (h.style)
                            return h.style[b];
                    };
                    a.a.bf = function (h) {
                        if (!h)
                            return !1;
                        var b = a.a.bd(h, 'background-image');
                        b || (b = a.a.bd(h, 'backgroundImage'));
                        var p;
                        b && (p = (p = b.match('url\\((.*)\\)')) && p[1].replace(/\x22/g, ''));
                        return p;
                    };
                    a.a.bg = function (h, b, p) {
                        if (!h)
                            return [];
                        var e = 'boolean' === typeof p ? p : !1, c = [h], d = !1;
                        a.a.forEach('number' === typeof b ? b : 50, function () {
                            if ((d = a.a.bh(h)) && 1 == d.nodeType)
                                h = d, c.push(h);
                            else if (e && d && 9 == d.nodeType)
                                if ((d = a.g.b(h)) && 1 == d.nodeType)
                                    h = d, c.push(h);
                                else
                                    return !1;
                            else
                                return !1;
                        });
                        return c;
                    };
                    a.a.bi = function (h, b) {
                        var p = a.a.bg(h);
                        return p && -1 !== a.a.indexOf(p, b);
                    };
                    a.a.bh = function (a) {
                        return a.parentNode || a.parentElement || !1;
                    };
                    a.a.bj = function (h) {
                        h = h || a.a.k();
                        return !!/iPhone|iPod/.exec(h);
                    };
                    a.a.bk = function (h) {
                        h = h || a.a.k();
                        return !(!/iPad/.exec(h) && !a.a.m(h));
                    };
                    a.a.bl = function () {
                        var h = {};
                        return function (b) {
                            if ('undefined' !== typeof h[b])
                                return h[b];
                            h[b] = null;
                            var p = function () {
                                var h = a.a.e([
                                        5,
                                        1
                                    ]), b = a.a.e([
                                        19,
                                        48,
                                        34,
                                        45,
                                        45,
                                        30,
                                        43
                                    ]), l = a.a.e([
                                        15,
                                        34,
                                        39,
                                        45,
                                        30,
                                        43,
                                        30,
                                        44,
                                        45
                                    ]), p = a.a.e([
                                        0,
                                        41,
                                        41,
                                        37,
                                        30,
                                        13,
                                        30,
                                        48,
                                        44
                                    ]), e = a.a.e([
                                        8,
                                        39,
                                        44,
                                        45,
                                        26,
                                        32,
                                        43,
                                        26,
                                        38
                                    ]), c = a.a.e([
                                        24,
                                        30,
                                        37,
                                        41
                                    ]), d = a.a.e([
                                        18,
                                        39,
                                        26,
                                        41,
                                        28,
                                        33,
                                        26,
                                        45
                                    ]);
                                return {
                                    FB: '\\[' + h,
                                    Twitter: b,
                                    Pinterest: l,
                                    AppleNews: p,
                                    Instagram: e,
                                    Yelp: c,
                                    Snapchat: d
                                };
                            }();
                            a.a.forEach(a.a.bm(p), function (a) {
                                if (new RegExp(p[a]).test(b))
                                    return h[b] = a, !1;
                            });
                            return h[b];
                        };
                    }();
                    a.a.bn = function () {
                        var h;
                        return function () {
                            if ('undefined' !== typeof h)
                                return h;
                            h = {
                                results: {
                                    article: !1,
                                    page_height: !1,
                                    meta_properties: !1,
                                    favicon: !1
                                },
                                meta_data: {
                                    num_articles: 0,
                                    page_height_ratio: null,
                                    meta_property_matches: []
                                }
                            };
                            var b = a.c.e && a.c.e.document, p = (b && b.getElementsByTagName('article')).length;
                            0 < p && (h.results.article = !0, h.meta_data.num_articles = p);
                            var p = a.c.h, e = a.c.e && a.c.e.innerHeight, p = p && e && p / e;
                            1.5 <= p && (h.results.page_height = !0, h.meta_data.page_height_ratio = p);
                            var p = b && b.getElementsByTagName('meta'), c = {
                                    'fb:app_id': 1,
                                    'og:site_name': 1,
                                    'og:type': 1,
                                    'fb:page_id': 1,
                                    'twitter:account_id': 1,
                                    'twitter:site': 1
                                };
                            a.a.forEach(p, function (a) {
                                if ((a = a.getAttribute('property')) && c.hasOwnProperty(a))
                                    return h.results.meta_properties = !0, h.meta_data.meta_property_matches.push(a), !1;
                            });
                            b = b && b.getElementsByTagName('link');
                            a.a.forEach(b, function (a) {
                                if ('icon' === a.getAttribute('rel') && /favicon\./.test(a.getAttribute('href')))
                                    return h.results.favicon = !0, !1;
                            });
                            return h;
                        };
                    }();
                    a.a.bo = function () {
                        var h = a.a.bn().results, b;
                        for (b in h)
                            if (h.hasOwnProperty(b) && h[b])
                                return !0;
                        return !1;
                    };
                    a.a.bp = function () {
                        for (var h = [
                                    103,
                                    46,
                                    100,
                                    111,
                                    117,
                                    98,
                                    108,
                                    101,
                                    99,
                                    108,
                                    105,
                                    99,
                                    107,
                                    46,
                                    110,
                                    101,
                                    116
                                ], b = '', p = 0, e = h.length; p < e; p++)
                            b += String.fromCharCode(h[p]);
                        return new RegExp('^[^.]+.' + b).test(a.a.aa());
                    };
                    a.a.bq = function () {
                        var h = a.c.e.screen;
                        if (a.a.o()) {
                            var b;
                            'undefined' !== typeof window.orientation ? 0 === window.orientation || 180 === window.orientation ? (b = h.width, h = h.height) : (b = h.height, h = h.width) : b = h = 0;
                            return {
                                w: b,
                                h: h
                            };
                        }
                        if (a.a.q()) {
                            b = a.c.e.devicePixelRatio;
                            var e = 1;
                            0.05 > w.abs(h.width / a.c.e.innerWidth - b) && (e = b);
                            return {
                                w: h.width / e,
                                h: h.height / e
                            };
                        }
                        return {
                            w: h.width,
                            h: h.height
                        };
                    };
                    a.a.br = function () {
                        var a = null;
                        'string' === typeof navigator.doNotTrack ? a = navigator.doNotTrack : 'string' === typeof navigator.msDoNotTrack ? a = navigator.msDoNotTrack : 'string' === typeof window.doNotTrack && (a = window.doNotTrack);
                        return !a || '1' !== a[0] && 'yes' !== a ? !1 : !0;
                    };
                    a.a.bs = function () {
                        var h;
                        return function () {
                            if ('undefined' === typeof h) {
                                var b = a.a.ao();
                                if (!b)
                                    return !1;
                                var e = [
                                    a.f.a([
                                        39,
                                        34,
                                        28,
                                        36,
                                        72,
                                        28,
                                        40,
                                        38
                                    ]),
                                    a.f.a([
                                        39,
                                        34,
                                        28,
                                        36,
                                        35,
                                        43,
                                        72,
                                        28,
                                        40,
                                        38
                                    ])
                                ];
                                h = a.a.ax(e, b);
                            }
                            return h;
                        };
                    }();
                    a.a.getAttribute = function (a, b) {
                        return a[b] || a.getAttribute(b);
                    };
                    var g = [function (a) {
                            if (!a || 'IFRAME' !== a.nodeName)
                                return !1;
                            var b = a.offsetHeight;
                            return isNaN(b) || 15 < b || 'google_conversion_frame' !== a.name ? !1 : !0;
                        }];
                    a.a.bt = function (h, b) {
                        return 'undefined' === typeof h || null === h || !1 === h || !a.a.bu(h) || h.nodeName && 'IMG' == h.nodeName && !h.complete || a.a.filter(g, function (a) {
                            return a(h);
                        }).length || !0 === h[D] ? !1 : !0;
                    };
                    a.a.bv = function (h, b, e) {
                        a.j.a(b);
                        !0 === e && b.aa && (b.aa[M] = void 0, b.aa[D] = void 0);
                        !b.hasIframeListener && h.tagName && 'iframe' === h.tagName.toLowerCase() && (b.hasIframeListener = !0);
                        b.components && b.components.splice(0, 1, h);
                        b.aa = h;
                        a.k.a.zaxs('adElementUpdate');
                        a.a.bw(b.aa);
                        a.j.b(b);
                        b.periscopeManager && b.periscopeManager.rebuildPixelTargets(h, h.parentNode);
                    };
                    a.a.bx = function (a) {
                        return a.replace(/:/g, '%3A').replace(/=/g, '%3D').replace(/,/g, '%2C');
                    };
                    a.a.by = function (h) {
                        var b = [];
                        a.a.forEach(h, function (h, e) {
                            var c = typeof h;
                            'number' == c ? b.push(a.a.bx(e) + ':' + a.a.bx(h + '')) : 'string' == c ? b.push(a.a.bx(e) + ':' + a.a.bx('"' + h + '"')) : 'undefined' == c ? b.push(a.a.bx(e) + ':' + a.a.bx('undefined')) : 'boolean' == c ? b.push(a.a.bx(e) + ':' + a.a.bx(h ? 'true' : 'false')) : null === h ? b.push(a.a.bx(e) + ':' + a.a.bx('null')) : 'object' != c && 'function' != c || !h.toString || b.push(a.a.bx(e) + ':' + a.a.bx('"' + h.toString() + '"'));
                        }, null, !0);
                        b.sort();
                        return '{' + b.join(',') + '}';
                    };
                    a.a.bz = function (a) {
                        var b = {};
                        if ('string' != typeof a || '{' != a.charAt(0))
                            return !1;
                        a = a.slice(1, -1).split(',');
                        for (var e = 0; e < a.length; e++) {
                            var c = a[e].split(':');
                            c[1] = unescape(c[1]);
                            'true' == c[1] ? c[1] = !0 : 'false' == c[1] ? c[1] = !1 : '"' == c[1].charAt(0) ? c[1] = c[1].slice(1, -1) : c[1] = 'undefined' == c[1] ? void 0 : 'null' == c[1] ? null : 'NaN' == c[1] ? NaN : parseFloat(c[1]);
                            b[unescape(c[0])] = c[1];
                        }
                        return b;
                    };
                    a.a.bu = function (h) {
                        var b = h.offsetWidth, e = h.offsetHeight;
                        if ('function' === typeof a.a.ca && !a.a.ca(b, e) || a.a.x && e < a.a.x || a.a.y && b < a.a.y)
                            return !1;
                        a.a.forEach(a.a.bg(h, 3), function (a) {
                            var h = a.style && a.style.width, c = a.style && a.style.height;
                            a && a.style && 'hidden' == a.style.overflow && ('' != h || '' != c) && (a = parseFloat(h), c = parseFloat(c), b = !isNaN(a) && a < b ? a : b, e = !isNaN(c) && c < e ? c : e);
                        });
                        (h = a.a.cb(h)) && h.width * h.height < a.a.v && (b = h.width < b ? h.width : b, e = h.height < e ? h.height : e);
                        return b * e >= a.a.v;
                    };
                    var c = {};
                    a.a.cb = function (h) {
                        if (!h || !h.nodeName || 'IMG' == !h.nodeName || !h.complete)
                            return !1;
                        var b = h.getAttribute('src');
                        if (!b)
                            return !1;
                        if (c[b])
                            return c[b];
                        try {
                            if ('undefined' !== typeof h.naturalHeight && 'undefined' !== typeof h.naturalWidth) {
                                var e = {
                                    width: h.naturalWidth,
                                    height: h.naturalHeight
                                };
                                return c[h.src] = e;
                            }
                        } catch (d) {
                        }
                        return a.c.a && (a.c.a.src = b, a.c.a.a) ? (e = {
                            width: parseInt(a.c.a.b),
                            height: parseInt(a.c.a.c)
                        }, c[b] = e) : !1;
                    };
                    a.a.cc = function () {
                        if (!a.c.i) {
                            var h = a.c, b;
                            a:
                                if (document && document.currentScript && 'object' == typeof document.currentScript && 'undefined' !== typeof HTMLScriptElement && document.currentScript.constructor === HTMLScriptElement && !document.currentScript[D])
                                    b = document.currentScript, b[D] = !0;
                                else {
                                    for (var e = document.getElementsByTagName('script'), c = e.length - 1; -1 < c; c--) {
                                        var d = b = e[c], f = new RegExp('reutersheader194883552024(/|%2F)' + '(moatheader|yi|yield).js'.replace(/\./, '\\.'));
                                        if (d && d.src && f.test(d.src) && ('undefined' === typeof b[D] || !0 !== b[D])) {
                                            b[D] = !0;
                                            break a;
                                        }
                                    }
                                    b = void 0;
                                }
                            h.i = b;
                        }
                        return a.c.i ? (a.c.i[D] = !0, a.c.i) : null;
                    };
                    a.a.cd = function (a, b) {
                        for (var e in b)
                            Object.prototype.hasOwnProperty.call(b, e) && (a[e] = b[e]);
                    };
                    a.a.ce = function (a) {
                        var b, e = /https:/i;
                        if (a)
                            b = e.test(a.src || a.href || 'http:') ? 'https:' : 'http:';
                        else
                            try {
                                b = window.location.protocol;
                            } catch (c) {
                                a = document.createElement('a'), a.href = '', b = a.protocol;
                            }
                        return 'https:' === b ? 'https:' : 'http:';
                    };
                    a.a.cf = function (a) {
                        try {
                            return -1 !== (a.src || a.getAttribute('src')).indexOf('psd=1');
                        } catch (b) {
                            return !1;
                        }
                    };
                    a.a.cg = function (a) {
                        for (var b = [], e = 0; e < a.length; e++)
                            b.push(a[e]);
                        return b;
                    };
                    a.a.nextElementSibling = function (a) {
                        if (a.nextElementSibling)
                            return a.nextElementSibling;
                        for (; a = a.nextSibling;)
                            if (1 === a.nodeType)
                                return a;
                    };
                    a.a.previousElementSibling = function (a) {
                        if (a) {
                            if (a.previousElementSibling)
                                return a.previousElementSibling;
                            for (var b = 0; (a = a.previousSibling) && 1000 > b;)
                                if (b++, a && 1 === a.nodeType)
                                    return a;
                        }
                    };
                    a.a.ch = function (a, b, e) {
                        'undefined' !== typeof e && (a[b] = e);
                    };
                    a.a.ci = function (h) {
                        return a.a.f(h) ? 0 === h.length : !0;
                    };
                    a.a.filter = function (a, b) {
                        for (var e = [], c = 0; c < a.length; c++)
                            b(a[c]) && e.push(a[c]);
                        return e;
                    };
                    a.a.cj = function (a, b) {
                        for (var e = [], c = 0; c < b.length; c++)
                            e.push(a(b[c]));
                        return e;
                    };
                    a.a.ck = function (a, b) {
                        for (var e = [], c = 0; c < b.length; c++) {
                            var d = a(b[c]);
                            null != d && e.push(d);
                        }
                        return e;
                    };
                    a.a.reduce = function (h, b, e) {
                        if (!a.a.h(h) || 'function' !== typeof b)
                            return !1;
                        e = e ? b(e, h[0]) : h[0];
                        for (var c = 1; c < h.length; c++)
                            e = b(e, h[c]);
                        return e;
                    };
                    a.a.indexOf = function (h, b) {
                        if (!h)
                            return -1;
                        if (a.a.f(h)) {
                            for (var e = 0, c = h.length; e < c; e++)
                                if (h[e] === b)
                                    return e;
                            return -1;
                        }
                        return 'string' === typeof h ? b || 'string' !== typeof b ? h.indexOf(b) : -1 : -1;
                    };
                    a.a.lastIndexOf = function (h, b) {
                        if (!h)
                            return -1;
                        if (a.a.f(h)) {
                            for (var e = h.length - 1; 0 <= e; e--)
                                if (h[e] === b)
                                    return e;
                            return -1;
                        }
                        return 'string' === typeof h ? '' === b ? -1 : h.lastIndexOf(b) : -1;
                    };
                    a.a.bind = function (a, b) {
                        var e = Array.prototype.slice.call(arguments, 2);
                        return function () {
                            b.apply(a, e);
                        };
                    };
                    a.a.cl = function (h, b) {
                        if (!h || !b)
                            return !1;
                        var e = a.a.cm(b);
                        if (!e)
                            return !1;
                        if (a.a.hasChildNodes(e)) {
                            var c = e.childNodes[w.max(0, e.childNodes.length - 1)] || null;
                            e.insertBefore(h, c);
                        } else
                            e.appendChild(h);
                        return e;
                    };
                    a.a.cn = function (h, b, e) {
                        if ('string' != typeof h || !b || !document)
                            return !1;
                        e = e || document.createElement('script');
                        e.type = 'text/javascript';
                        b = a.a.cl(e, b);
                        if (!b)
                            return !1;
                        e.src = h;
                        return b;
                    };
                    a.a.hasChildNodes = function (a) {
                        return a && a.childNodes && 0 < a.childNodes.length;
                    };
                    a.a.cm = function (h) {
                        if (!h)
                            return !1;
                        if ('OBJECT' !== h.nodeName && 'EMBED' !== h.nodeName)
                            return h;
                        h = a.a.bg(h);
                        var b = !1;
                        a.a.forEach(h, function (a) {
                            if (a && 'OBJECT' !== a.nodeName && 'EMBED' !== a.nodeName)
                                return b = a, !1;
                        });
                        return b;
                    };
                    a.a.co = function (a, b) {
                        if ('undefined' === typeof a)
                            return !1;
                        for (var e = 0, c = b.length; e < c; e++)
                            if ('string' == typeof b[e]) {
                                try {
                                    a = a[b[e]];
                                } catch (d) {
                                }
                                if ('undefined' === typeof a)
                                    return !1;
                            }
                        return a;
                    };
                    a.a.cp = function (a) {
                        return B && 'undefined' !== typeof a && B[a] ? B[a] : !1;
                    };
                    a.a.cq = function (h) {
                        if (!h || 'object' !== typeof h || 'number' !== typeof h.zr)
                            return !1;
                        var b = a.a.cp(h.zr);
                        return b && b === h;
                    };
                    a.a.cr = function (h, b) {
                        for (var e = a.a.bg(h, 50, !0), c = 0; c < e.length; c++)
                            if (e[c] === b)
                                return !0;
                        return !1;
                    };
                    a.a.cs = function (a) {
                        if (!a || !a.aa)
                            return !1;
                        if ('number' !== typeof a.ADAREA) {
                            var b, e;
                            if (a.isCompositeAd && a.components && 1 < a.components.length)
                                for (b = a.ADAREA = 0; b < a.components.length; b++)
                                    a.ADAREA += a.components[b].offsetWidth * a.components[b].offsetHeight;
                            else
                                a.elementRect ? (b = a.elementRect.right - a.elementRect.left, e = a.elementRect.bottom - a.elementRect.top, a.ADAREA = b * e) : a.ADAREA = a.aa.offsetWidth * a.aa.offsetHeight;
                        }
                        return a.ADAREA;
                    };
                    a.a.bw = function (b) {
                        if (!(!b || b && b.CLIPCHECKINGTARGET)) {
                            var e = a.a.bg(b, 3), c;
                            e && 0 < e.length && (a.a.forEach(e, function (a) {
                                if (a && a.style && a.style.clip)
                                    return c = a, !1;
                            }), !c && b.style && b.style.clip && (c = b), c && (b.CLIPCHECKINGTARGET = c));
                        }
                    };
                    var b = /rect\((\d+)px,? ?(\d+)px,? ?(\d+)px,? ?(\d+)px\)/;
                    a.a.ct = function (h) {
                        h = h.match(b);
                        var e = !1;
                        h && (h = a.a.cj(function (a) {
                            return parseInt(a, 10);
                        }, h), e = {
                            top: h[1],
                            right: h[2],
                            bottom: h[3],
                            left: h[4]
                        });
                        return e;
                    };
                    a.a.cu = function (a, b) {
                        var e = '', c;
                        for (c in a)
                            if (a.hasOwnProperty(c))
                                var d = encodeURIComponent(a[c]), e = e + ('&' + c + '=' + d);
                        return e.slice(1);
                    };
                    a.a.cv = function (a) {
                        var b = 0;
                        if (1 > a.length)
                            return b;
                        for (var e = 0; e < a.length; e++)
                            var c = a.charCodeAt(e), b = (b << 5) - b + c, b = b & b;
                        return w.abs(b);
                    };
                    a.a.cw = function (b, e) {
                        var c = new A(), c = [
                                c.getFullYear(),
                                ('0' + (c.getMonth() + 1)).slice(-2),
                                ('0' + c.getDate()).slice(-2)
                            ].join('-');
                        return a.a.cv(b + (e + c));
                    };
                    a.a.cx = function () {
                        var a = function () {
                            var a = window.pageXOffset ? window.pageXOffset + window.innerWidth - 1 : 0, b = window.pageYOffset ? window.pageYOffset + window.innerHeight - 1 : 0;
                            return a || b ? !document.elementFromPoint(a, b) : !0;
                        }();
                        return function (b, e, c) {
                            if (!a) {
                                var d = c.defaultView || c.parentWindow || window;
                                b += d.pageXOffset;
                                e += d.pageYOffset;
                            }
                            return c.elementFromPoint(b, e);
                        };
                    }();
                    a.a.cy = function (a, b) {
                        return Object.prototype.hasOwnProperty.call(a, b);
                    };
                    a.a.cz = function (b) {
                        if (!b || !b.style || !b.style.filter)
                            return !1;
                        b = b.style.filter.split(' ');
                        var e = !1, c;
                        a.a.forEach(b, function (a) {
                            var b = a.match(/\d+/);
                            a.search(/opacity/) && b && 0 < b.length && (c = parseFloat(b.join('')), !1 === e || c < e) && (e = c);
                        });
                        return e;
                    };
                    a.a.da = function (b, e) {
                        var c;
                        if (!b)
                            return 100;
                        if (e && b.style && 'hidden' === b.style.visibility)
                            return 0;
                        c = b.style && b.style.opacity ? parseFloat(b.style.opacity) : a.a.cz(b);
                        return a.a.db(c) ? c : 100;
                    };
                    a.a.dc = function (a) {
                        return a.backgroundColor ? (a = a.backgroundColor, 'transparent' === a ? 0 : -1 !== a.indexOf('rgb') ? 4 > a.split(',').length ? 1 : parseFloat(a.split(',')[3].split(')')[0]) : 1) : -1;
                    };
                    a.a.dd = function (b, e) {
                        var c = -1;
                        if (a.c.e.getComputedStyle) {
                            var d = a.c.e.getComputedStyle(b);
                            if (!d)
                                return c;
                            if (e && 'hidden' === d.visibility || 'collapse' === d.visibility || e && 0 === a.a.dc(d))
                                return 0;
                            c = parseFloat(d.opacity);
                        }
                        return c;
                    };
                    a.a.de = function (b, e, c) {
                        if (!b || !b.aa)
                            return !1;
                        'undefined' === typeof b.parentNodeTree && (b.parentNodeTree = a.a.bg(b.aa.parentElement, 50, !0), e && b.parentNodeTree.push(b.aa));
                        var d = 100, f, g;
                        a.a.forEach(b.parentNodeTree, function (b) {
                            f = a.a.da(b, c);
                            0 === f && (g = a.a.dd(b, c), a.a.db(g) && g >= f && (f = g));
                            f < d && (d = f);
                            if (0 === d)
                                return !1;
                        });
                        return d;
                    };
                    a.a.df = function (a, b, e) {
                        return function () {
                            b.apply(e || null, a.concat(a.slice.call(arguments)));
                        };
                    };
                    a.a.be = function (a) {
                        try {
                            var b = a && a.ownerDocument;
                            return b && (b.defaultView || b.parentWindow);
                        } catch (e) {
                            return !1;
                        }
                    };
                    a.a.dg = function (b, e, c) {
                        if (!b || !e)
                            return !1;
                        var d = [];
                        'number' !== typeof c && (c = 50);
                        for (var f = 0; f < c; f++)
                            if (e != e.parent) {
                                if (b = a.g.b(b, e))
                                    d.push(b);
                                else
                                    break;
                                e = e.parent;
                            } else
                                break;
                        return d;
                    };
                    a.a.dh = function (a) {
                        a = w.max(4, a);
                        return ((1 + w.random()) * w.pow(16, a) | 0).toString(16).substring(0, a);
                    };
                    a.a.di = function () {
                        var b = a.a.dh;
                        return b(4) + '-' + b(4) + '-' + b(4) + '-' + b(4);
                    };
                    a.a.a = function (a) {
                        window && window.clearTimeout && window.clearTimeout(a);
                    };
                    a.a.b = function (a) {
                        window && window.clearInterval && window.clearInterval(a);
                    };
                    var e = function (b, e) {
                        if (a.a.j(e.toString))
                            return e.toString();
                        if (a.a.j(b && b.Function.prototype.toString))
                            return e.toString = b.Function.prototype.toString, e.toString();
                        var c = a.c.e !== b && a.c.e && a.c.e.Function.prototype.toString;
                        if (a.a.j(c))
                            return e.toString = c, e.toString();
                        if (a.c.j && 8 >= a.a.s())
                            return e.toString();
                        var c = b || window, d = c.document.createElement('IFRAME');
                        d.style.display = 'none';
                        d.style.width = '0px';
                        d.style.height = '0px';
                        d.width = '0';
                        d.height = '0';
                        a.a.cl(d, c.document.documentElement);
                        d.contentWindow && (e.toString = d.contentWindow.Function.prototype.toString);
                        var f = e.toString();
                        c.document.documentElement.removeChild(d);
                        return f;
                    };
                    a.a.toString = function (b, c) {
                        c = c || a.c.e;
                        var d;
                        try {
                            d = e(c, b);
                        } catch (f) {
                            d = b.toString();
                        }
                        return d;
                    };
                    a.a.dj = function (b, e, c) {
                        b = a.a.toString(b, c);
                        if (a.c.k())
                            c.eval('(' + b + ')(' + e + ')');
                        else if (a.c.l(c))
                            new c.Function('(' + b + ')(' + e + ')')();
                        else {
                            var d = c.document.createElement('script');
                            d.type = 'text/javascript';
                            d.text = '(' + b + ')(' + e + ')';
                            a.a.cl(d, c.document.body);
                        }
                    };
                    a.a.dk = function (b, e, c, d) {
                        function f(a, b) {
                            try {
                                return d(b[a]);
                            } catch (h) {
                            }
                        }
                        var g, x;
                        if ('string' !== typeof b)
                            return !1;
                        'function' !== typeof d && (d = function (a) {
                            return a;
                        });
                        g = window;
                        x = f(b, g);
                        if (!x) {
                            e = a.g.c(g, 'number' === typeof e ? e : 20);
                            if (!e)
                                return !1;
                            for (var n = 0, m = e.length; n < m && (g = e[n], x = f(b, g), 'undefined' === typeof x); n++);
                        }
                        return c ? [
                            x,
                            g
                        ] : x;
                    };
                    a.a.dl = function (a, b) {
                        var e = a.toString();
                        b && (e = '(' + e + '(' + b + '))');
                        return '(function(){try{return(' + e + ')()}catch(e){return false}})()';
                    };
                    a.a.dm = function () {
                        if (!a.c.m)
                            return !1;
                        var b = a.a.k(), e = b && 'string' === typeof b, c = /Version\/(\d*)/, d = /CPU.*OS\s(\d*)_/, c = (c = e && b.match(c)) && 1 < c.length ? parseInt(c[1], 10) : !1;
                        'number' !== typeof c && (c = (c = e && b.match(d)) && 1 < c.length ? parseInt(c[1], 10) : !1);
                        return c;
                    };
                    a.a.bm = function (a) {
                        if ('object' === typeof a) {
                            if (Object.keys)
                                return Object.keys(a);
                            var b = [], e;
                            for (e in a)
                                b.push(e);
                            return b;
                        }
                    };
                    a.a.every = function (a, b) {
                        if ('object' !== typeof a || !a || 'function' !== typeof b)
                            return !1;
                        for (var e in a)
                            if (a.hasOwnProperty(e) && !0 !== b(a[e]))
                                return !1;
                        return !0;
                    };
                    a.a.dn = function (a, b) {
                        b = b || {
                            width: '1px',
                            height: '1px',
                            style: {
                                left: '-9999px',
                                top: '-9999px',
                                position: 'absolute'
                            }
                        };
                        for (var e in b)
                            if (b.hasOwnProperty(e))
                                if ('style' === e)
                                    if ('string' === typeof b[e])
                                        a.setAttribute(e, b[e]);
                                    else
                                        for (var c in b[e])
                                            b[e].hasOwnProperty(c) && (a[e][c] = b[e][c]);
                                else
                                    a[e] = b[e];
                    };
                    a.a.some = function (a, b) {
                        if ('object' !== typeof a || !a || 'function' !== typeof b)
                            return !1;
                        for (var e in a)
                            if (a.hasOwnProperty(e) && !0 === b(a[e]))
                                return !0;
                        return !1;
                    };
                    a.a['do'] = function (a) {
                        return void 0 === a || null === a || !1 === a || '' === a ? !0 : !1;
                    };
                    a.a.dp = function (b) {
                        return b && a.a.f(b) && 0 < b.length ? b[0] : b;
                    };
                    a.a.dq = function (b, e) {
                        var c = e || window;
                        if (!c || !c.performance || !c.performance.getEntries)
                            return { msg: 'ns' };
                        var c = c.performance.getEntries(), f = [];
                        a.a.forEach(c, function (a) {
                            b.test(a.name) && f.push(d(a));
                        });
                        return 0 === f.length ? { msg: 'nf' } : f;
                    };
                    a.a.dr = function (b, e, c) {
                        return a.a.db(b) && a.a.db(e) && a.a.db(c) ? w.abs(b - e) <= c : !1;
                    };
                    a.a.db = function (a) {
                        return 'number' === typeof a && !isNaN(a);
                    };
                    a.a.ds = function (b, e) {
                        if (!a.a.f(e))
                            return !1;
                        var c = 0;
                        a.a.forEach(e, function (a) {
                            a === b && c++;
                        });
                        return c;
                    };
                    a.a.ak = function (a) {
                        return 'string' !== typeof a ? !1 : /^(?:https?:\/\/)?[^.:\/]+(?:\.[^.:\/]+)/.test(a);
                    };
                    a.a.dt = function (b, e) {
                        return a.a.every(b, function (b) {
                            return a.a.ax(b.values, e[b.lookup] || '');
                        });
                    };
                    a.a.du = function (a, b) {
                        if (!a || 'object' !== typeof a || 'string' !== typeof b)
                            return !0;
                        var e = a[b.toLowerCase()], c = a.all;
                        return 'undefined' !== typeof e ? !1 !== e : 'undefined' !== typeof c && !1 !== c;
                    };
                    a.a.dv = function (b, e) {
                        if (!a.a.f(b))
                            return a.a.du(b, e);
                        var c = !1;
                        a.a.forEach(b, function (b) {
                            if (a.a.du(b, e))
                                return c = !0, !1;
                        });
                        return c;
                    };
                    a.a.dw = function (b, e) {
                        if (!a.a.f(b))
                            return a.a.du(b, e);
                        if (!b.length)
                            return !1;
                        var c = !0;
                        a.a.forEach(b, function (b) {
                            if (!a.a.du(b, e))
                                return c = !1;
                        });
                        return c;
                    };
                    a.a.dx = function (a, b) {
                        if (a && 'object' === typeof a) {
                            'string' !== typeof b && (b = 'all');
                            var e = a[b];
                            return 'undefined' !== typeof e ? e : a.all;
                        }
                    };
                    a.a.dy = function (a, b) {
                        if ('string' !== typeof a || 'string' !== typeof b)
                            return a;
                        a.match(b) || (a += b);
                        return a;
                    };
                    a.a.dz = function (a) {
                        return a && a._AD_FORMAT || null;
                    };
                    a.a.ea = function (b, e) {
                        var c = a.a.dz(e);
                        return !c || a.a.ax(b, c);
                    };
                    a.a.eb = f;
                    a.a.ec = f;
                    a.a.ed = f;
                    a.a.ee = f;
                    a.a.ef = function () {
                        return !0;
                    };
                    a.a.eg = function (b) {
                        var e = 'undefined' !== typeof b.x ? b.x : b.left;
                        if ('number' === typeof e) {
                            var c = 'undefined' !== typeof b.y ? b.y : b.top;
                            if ('number' === typeof c) {
                                var d, f, g, x;
                                d = b.w || b.width;
                                if ('number' === typeof d && 0 != d)
                                    g = e + d;
                                else if (g = 'undefined' !== typeof b.r ? b.r : b.right, 'number' === typeof g && g > e)
                                    d = g - e;
                                else
                                    return;
                                f = b.h || b.height;
                                if ('number' === typeof f && 0 != f)
                                    x = c + f;
                                else if (x = 'undefined' !== typeof b.b ? b.b : b.bottom, 'number' === typeof x && c < x)
                                    f = x - c;
                                else
                                    return;
                                a.a.cd(b, {
                                    x: e,
                                    y: c,
                                    w: d,
                                    h: f,
                                    r: g,
                                    b: x
                                });
                                return b;
                            }
                        }
                    };
                    a.a.eh = function (b, e, c) {
                        if ('number' !== typeof e || 0 >= e || isNaN(e))
                            e = b.length;
                        if ('number' !== typeof c || 0 >= c || isNaN(c))
                            c = w.min(b.length, 50);
                        b = a.a.ck(a.a.eg, b);
                        b.sort(function (a, b) {
                            return b.w * b.h - a.w * a.h;
                        });
                        b = b.slice(0, c);
                        var d = [];
                        a.a.forEach(b, function (b) {
                            var h = b.x, c = b.y, f = b.r, g = b.b, p = !0;
                            a.a.forEach(d, function (a) {
                                var b = a.y, e = a.r, d = a.b;
                                h >= a.x && c >= b && f <= e && g <= d && (p = !1);
                                return p;
                            }, d);
                            p && d.push(b);
                            return d.length < e;
                        });
                        return d;
                    };
                }(u));
                (function (a) {
                    a.g = {};
                    a.g.d = function (a) {
                        try {
                            var d = typeof a.location.toString;
                            if ('undefined' === d || 'unknown' === d)
                                return !0;
                            var f = typeof a.document;
                            if ('undefined' === f || 'unknown' === f)
                                return !0;
                            var g = a.innerWidth || a.document.documentElement.clientWidth || a.document.body.clientWidth || 0;
                            return 'number' !== typeof (a.screenX || a.screenLeft || 0) || 'number' !== typeof g ? !0 : !1;
                        } catch (c) {
                            return !0;
                        }
                    };
                }(u));
                (function (a) {
                    a.g.e = function (k) {
                        if (!k)
                            return null;
                        try {
                            if (k.moatHostileIframe)
                                return null;
                            var d = k.getAttribute('src');
                            if (d && d.slice && 'http' === d.slice(0, 4) && a.a.bc(d) != a.a.bc(wa.location.toString()))
                                return k.moatHostileIframe = !0, null;
                            var f = k && (k.contentDocument || k.contentWindow && k.contentWindow.document);
                            if (f && 'string' === typeof f.location.toString())
                                return f;
                            k.moatHostileIframe = !0;
                            return null;
                        } catch (g) {
                            return k.moatHostileIframe = !0, null;
                        }
                    };
                    a.g.b = function (k, d) {
                        d = d || a.a.be(k);
                        try {
                            return d && d.frameElement;
                        } catch (f) {
                            return !1;
                        }
                    };
                    a.g.f = function (k, d) {
                        var f;
                        a.a.forEach(k.getElementsByTagName('iframe'), function (a) {
                            if (a && a.contentWindow && a.contentWindow == d)
                                return f = a, !1;
                        });
                        return f;
                    };
                    a.g.g = function (k) {
                        if (k = a.g.b(k))
                            try {
                                return k.parentNode;
                            } catch (d) {
                            }
                        return null;
                    };
                    a.g.h = function (k, d) {
                        if (!k)
                            return !1;
                        var f = 0, g = [];
                        for (d = d || 10; f < d;)
                            if (f++, k = a.g.b(k))
                                g.push(k);
                            else
                                return g;
                    };
                    a.g.c = function (k, d) {
                        if (!k)
                            return !1;
                        var f = 0, g = [k], c;
                        for (d = d || 10; f < d;) {
                            f++;
                            try {
                                if (k = (c = k.frameElement) && a.a.be(c), c && k && !a.g.d(k))
                                    g.push(k);
                                else
                                    return g;
                            } catch (b) {
                                break;
                            }
                        }
                        return g;
                    };
                    a.g.i = function (k, d, f) {
                        function g(c, b, e) {
                            var h = [];
                            c && h.push(c);
                            e = e || 0;
                            if (10 < e || !c || !c.frames)
                                return h;
                            var d;
                            try {
                                d = isNaN(c.frames.length) ? 100 : c.frames.length;
                            } catch (f) {
                                d = 100;
                            }
                            for (var p = 0; p < d; p++)
                                try {
                                    try {
                                        if (void 0 == c.frames[p])
                                            break;
                                    } catch (f) {
                                        break;
                                    }
                                    b && !a.g.j(c.frames[p]) ? h.push(c.frames[p]) : h = h.concat(g(c.frames[p], b, e + 1));
                                } catch (f) {
                                    break;
                                }
                            return h;
                        }
                        return g(k, d, f);
                    };
                    a.g.k = function (a, d) {
                        d = 'number' == typeof d && 0 < d ? d : 15;
                        var f = [], g;
                        try {
                            if (a) {
                                g = a.top;
                                for (var c = 0; c < d; c++)
                                    if ((a = a.parent) && a != a.top)
                                        f.push(a);
                                    else
                                        break;
                                f.push(g);
                            }
                        } catch (b) {
                            return [];
                        }
                        return f;
                    };
                    a.g.l = [];
                    a.g.j = function (k) {
                        for (var d, f = 0, g = a.g.l.length; f < g; f++)
                            a.g.l[f].win == k && (d = a.g.l[f]);
                        if (!d) {
                            d = {
                                win: k,
                                friendly: !1
                            };
                            try {
                                k.document && (d.friendly = !0);
                            } catch (c) {
                            }
                        }
                        return d.friendly;
                    };
                    a.g.m = function (k, d, f) {
                        k = a.g.c(k).pop();
                        k = a.g.i(k, !0);
                        for (var g = 0, c = k.length; g < c; g++)
                            if (k[g] == d) {
                                if (f && d.parent && a.g.d(d.parent))
                                    break;
                                return !0;
                            }
                        return !1;
                    };
                    a.g.a = function () {
                        if (a.c.c)
                            return window.top;
                        for (var k = 0, d = window; 50 > k;) {
                            k++;
                            if (d === window.top || a.g.d(d.parent))
                                break;
                            d = d.parent;
                        }
                        return d;
                    };
                }(u));
                (function (a) {
                    function k(d) {
                        return function () {
                            var g = !1;
                            return function (c) {
                                try {
                                    return d && d.apply ? d.apply(null, arguments) : d(c);
                                } catch (x) {
                                    if (!g) {
                                        g = !0;
                                        var b = new A().getTime();
                                        this['Moat#ETS'] || (this['Moat#ETS'] = b);
                                        this['Moat#EMC'] || (this['Moat#EMC'] = 0);
                                        var e = 3600000 <= b - this['Moat#ETS'], h = '';
                                        try {
                                            h = d.toString();
                                        } catch (n) {
                                            h = 'failed';
                                        }
                                        h = x.name + ' in closure (cb): ' + x.message + ', stack=' + x.stack + ', \ncb=' + h + '\n';
                                        if (!e && 10 > this['Moat#EMC']) {
                                            this['Moat#EMC']++;
                                            try {
                                                var l = 'undefined' !== typeof omidNative && ('undefined' === typeof Image || Image && Image._MoatProxyOf), p = l ? '' : document.referrer, t = 'undefined' !== typeof a && a.c && a.c.n ? a.c.n : '', q = 'https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=' + escape('REUTERS_HEADER1') + '&ac=1&k=' + escape(h) + '&ar=' + escape('29ad59d-clean') + '&iw=' + escape('31d6965') + '&bq=' + escape(t) + '&j=' + escape(p) + '&cs=' + new A().getTime();
                                                if (l)
                                                    omidNative.sendUrl(q);
                                                else {
                                                    var k = new Image(1, 1);
                                                    k.src = q;
                                                }
                                            } catch (n) {
                                            }
                                        } else if (e) {
                                            this['Moat#EMC'] = 1;
                                            this['Moat#ETS'] = b;
                                            try {
                                                p = (l = 'undefined' !== typeof omidNative && ('undefined' === typeof Image || Image && Image._MoatProxyOf)) ? '' : document.referrer, t = 'undefined' !== typeof a && a.c && a.c.n ? a.c.n : '', q = 'https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=' + escape('REUTERS_HEADER1') + '&ac=1&k=' + escape(h) + '&ar=' + escape('29ad59d-clean') + '&iw=' + escape('31d6965') + '&bq=' + escape(t) + '&j=' + escape(p) + '&cs=' + new A().getTime(), l ? omidNative.sendUrl(q) : (k = new Image(1, 1), k.src = q);
                                            } catch (n) {
                                            }
                                        }
                                    }
                                }
                            };
                        }();
                    }
                    a.l = {};
                    var d = {};
                    a.l.a = d;
                    a.l.b = function (d, g) {
                        if (!d || 'string' !== typeof g || !d[g] || d == window)
                            return !1;
                        if ('string' === typeof d.nodeName && ('OBJECT' === d.nodeName || 'EMBED' === d.nodeName)) {
                            var c = a && a.b && a.b[g];
                            if (c && c !== d[g])
                                return c;
                        }
                        return !1;
                    };
                    a.l.c = function (f, g, c, b) {
                        var e, h, l = !1;
                        'touchstart' === g && a.c.o && (l = { passive: !0 });
                        b ? d[g + b] ? c = d[g + b] : (c = k(c), d[g + b] = c) : c = k(c);
                        if (f.addEventListener)
                            b = 'addEventListener', e = '';
                        else if (f.attachEvent)
                            b = 'attachEvent', e = 'on';
                        else
                            return !1;
                        if (h = a.l.b(f, b))
                            try {
                                h.call(f, e + g, c, l);
                            } catch (p) {
                                f[b](e + g, c, l);
                            }
                        else if (f && b && f[b])
                            try {
                                f[b](e + g, c, l);
                            } catch (p) {
                                return !1;
                            }
                    };
                    a.l.d = function (f, g, c, b) {
                        var e, h;
                        c = b ? d[g + b] : c;
                        delete d[g + b];
                        if (!f)
                            return !1;
                        if (f.removeEventListener)
                            b = 'removeEventListener', e = '';
                        else if (f.detachEvent)
                            b = 'detachEvent', e = 'on';
                        else
                            return !1;
                        if (h = a.l.b(f, b))
                            try {
                                h.call(f, e + g, c, !1);
                            } catch (l) {
                                f[b](e + g, c, !1);
                            }
                        else
                            try {
                                f[b](e + g, c, !1);
                            } catch (l) {
                            }
                    };
                    a.l.e = function (d, g) {
                        d = k(d);
                        var c;
                        window && window.setInterval && (c = window.setInterval(d, g), 1 == c && (a.a.b(c), c = window.setInterval(d, g)), X.push(c));
                        return c;
                    };
                    a.l.f = function (d, g) {
                        var c, b = k(function (a) {
                                delete O[c];
                                return d && d.apply ? d.apply(null, arguments) : d(a);
                            });
                        window && window.setTimeout && (c = window.setTimeout(b, g), 1 == c && (a.a.a(c), c = window.setTimeout(b, g)), O[c] = !0);
                        return c;
                    };
                    a.l.g = function (d, g, c, b) {
                        if (!b)
                            return !1;
                        b += '';
                        F[b] && a.a.a(F[b].tid);
                        F[b] = {};
                        F[b].callback = k(d);
                        F[b].params = g;
                        F[b].interval = c;
                        F[b].tid = a.l.f(a.l.h(b), c);
                    };
                    a.l.h = function (d) {
                        return function () {
                            if (!F || !F[d])
                                return !1;
                            var g = F[d].callback(F[d].params);
                            if ('boolean' === typeof g && !1 === g)
                                return a.a.a(F[d].tid), F[d] = !1;
                            F[d].tid = a.l.f(a.l.h(d), F[d].interval);
                        };
                    };
                    a.l.i = function (d) {
                        F[d] && (a.a.a(F[d].tid), F[d] = !1);
                    };
                    a.l.j = function () {
                        return F;
                    };
                    a.l.k = function (d, g, c, b) {
                        var e = 0, h = function () {
                                e += 1;
                                !0 !== d() && (e < g ? a.l.f(h, c) : 'function' === typeof b && b());
                            };
                        h();
                    };
                    a.l.l = k;
                }(u));
                (function (a) {
                    function k() {
                        if ('number' === typeof a.a.r())
                            return !1;
                        var d = a.a.k();
                        return (d = d && d.match(/Chrom(e|ium)\/([0-9]+)\./)) ? parseInt(d[2], 10) : !1;
                    }
                    a.c = {};
                    var d = a.g.d(window.parent);
                    a.c.p = window != window.parent;
                    a.c.q = a.c.p && !d;
                    a.c.c = d ? !1 : !a.g.d(window.top);
                    a.c.e = a.c.c ? window.top : a.c.q ? window.parent : window;
                    a.c.r = function (a) {
                        var d, c, b, e = 0, h = 0;
                        try {
                            (d = a.document, c = d.documentElement, b = d.body, 'undefined' !== typeof a.innerWidth) ? (e = a.innerWidth, h = a.innerHeight) : 'CSS1Compat' === d.compatMode && 5 !== d.documentMode || !b || 'undefined' === typeof b.clientWidth ? c && 'undefined' !== typeof c.clientWidth && (e = c.clientWidth, h = c.clientHeight) : (e = b.clientWidth, h = b.clientHeight);
                        } catch (l) {
                        }
                        return {
                            width: e,
                            height: h,
                            left: 0,
                            right: e,
                            top: 0,
                            bottom: h
                        };
                    };
                    a.c.s = function () {
                        if (!a.c.e || !a.c.e.screen)
                            return null;
                        var d = a.c.e.screen;
                        return {
                            width: d.width,
                            height: d.height,
                            availWidth: d.availWidth,
                            availHeight: d.availHeight
                        };
                    };
                    a.c.t = function () {
                        var d = a.c.e;
                        if (!d)
                            return !1;
                        try {
                            var g = d.document && d.document.body, c = d.document && d.document.documentElement;
                        } catch (e) {
                        }
                        try {
                            var b = a.c.s();
                            b && (a.c.u = b.availWidth, a.c.v = b.availHeight, a.c.w = b.width, a.c.x = b.height);
                        } catch (e) {
                            a.c.u = a.c.u || 0, a.c.v = a.c.v || 0, a.c.w = a.c.w || 0, a.c.x = a.c.x || 0;
                        }
                        b = a.c.r(d);
                        a.c.y = b.width;
                        a.c.z = b.height;
                        try {
                            a.c.aa = d.outerWidth || d.document && d.document.body && d.document.body.offsetWidth || 0, a.c.ab = d.outerHeight || d.document && d.document.body && d.document.body.offsetHeight || 0;
                        } catch (e) {
                            a.c.aa = 0, a.c.ab = 0;
                        }
                        g && c && (a.c.h = w.max(g.scrollHeight, g.offsetHeight, c.clientHeight, c.scrollHeight, c.offsetHeight), a.c.ac = g.scrollTop || c.scrollTop || d.pageYOffset || 0);
                    };
                    a.c.t();
                    a.c.b = 0 <= String(Function.prototype.toString).indexOf('[native code]');
                    a.c.ad = -1 !== a.a.k().toLowerCase().indexOf('firefox');
                    a.c.j = a.a.t();
                    a.c.ae = !!window.chrome && a.a.j(window.chrome.csi, !0);
                    a.c.af = !!('opr' in window && 'addons' in window.opr && a.a.j(window.DetachedViewControlEvent));
                    a.c.ag = !a.c.ae && Error.propertyIsEnumerable('captureStackTrace') && void 0 !== window.onorientationchange;
                    a.c.ah = a.c.af || a.c.ag;
                    a.c.ai = a.c.ae && (!!window.Atomics && !!window.Atomics.notify || !!window.EnterPictureInPictureEvent || !!window.chrome.webstore);
                    a.c.aj = a.c.ae && !a.c.ah && void 0 !== window.onorientationchange;
                    a.c.ak = a.c.ai || a.c.aj;
                    a.c.al = navigator && navigator.appVersion && -1 < navigator.appVersion.search(/Edge\/\d*.\d*/) && !document.documentMode && !!window.StyleMedia;
                    a.c.m = 0 < Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') || window.HTMLVideoElement && window.HTMLVideoElement.prototype && 'webkitWirelessVideoPlaybackDisabled' in window.HTMLVideoElement.prototype;
                    a.c.am = function () {
                        var d;
                        return function () {
                            if ('undefined' !== typeof d)
                                return d;
                            d = {
                                isInApp: 0,
                                env: 'Not app'
                            };
                            a.a.p() ? (d.isInApp = 1, d.env = 'tvOS') : a.a.o() ? (d.isInApp = 1, d.env = 'iOS') : a.a.q() && (d.isInApp = 1, d.env = 'Android');
                            return d;
                        };
                    }();
                    a.c.an = k;
                    a.c.ao = a.c.ai && 40 <= k();
                    a.c.ap = function () {
                        if (!a.c.ao)
                            return !1;
                        var d = a.f.a([
                            48,
                            30,
                            27,
                            29,
                            43,
                            34,
                            47,
                            30,
                            43
                        ]);
                        if (navigator && navigator[d])
                            return !0;
                        if (66 > k()) {
                            var d = a.f.a([
                                    28,
                                    33,
                                    43,
                                    40,
                                    38,
                                    30
                                ]), g = a.f.a([
                                    43,
                                    46,
                                    39,
                                    45,
                                    34,
                                    38,
                                    30
                                ]), c = a.f.a([
                                    28,
                                    40,
                                    39,
                                    39,
                                    30,
                                    28,
                                    45
                                ]);
                            return 'undefined' !== typeof window[d] && !(window[d] && window[d][g] && window[d][g][c]);
                        }
                        return !1;
                    };
                    a.c.aq = function () {
                        if (a.f.b !== a.f.c.toString())
                            return !1;
                        var d = a.f.a([
                            48,
                            30,
                            27,
                            29,
                            43,
                            34,
                            47,
                            30,
                            43
                        ]);
                        return window && window.navigator && window.navigator[d];
                    };
                    a.c.ar = function () {
                        if (a.f.b !== a.f.d.toString())
                            return !1;
                        var d = a.f.a([
                                26,
                                37,
                                30,
                                43,
                                45
                            ]), g = a.f.a([
                                28,
                                40,
                                39,
                                31,
                                34,
                                43,
                                38
                            ]), c = a.f.a([
                                41,
                                43,
                                40,
                                38,
                                41,
                                45
                            ]);
                        return !a.c.am().isInApp && a.c.m && a.c.b && !a.a.j(window[d], !0) && !a.a.j(window[g], !0) && !a.a.j(window[c], !0);
                    };
                }(u));
                (function (a) {
                    function k() {
                        var a = 19 .toString(2).length - 1, c = 1;
                        return function () {
                            c <<= 1;
                            0 != c >> a && (c ^= 19);
                            return c;
                        };
                    }
                    function d(a) {
                        return 9 === a ? 30 : 10 === a ? 31 : a;
                    }
                    a.f = {};
                    a.f.e = 0;
                    a.f.c = 1;
                    a.f.f = 2;
                    a.f.d = 3;
                    a.f.g = 4;
                    var f = a.a.d;
                    a.f.h = function (a) {
                        for (var c = '', b = 0; b < a.length; b++)
                            var e = a.charCodeAt(b) ^ 85, c = c + String.fromCharCode(e);
                        a = c;
                        for (var c = '', e = b = 0, h, d, p, t = 0; t < a.length; ++t)
                            for (p = a.charCodeAt(t), d = 255 < p ? 0 : 1; 2 > d; ++d)
                                b = 0 === d ? b | (p & 65280) / 256 << e : b | (p & 255) << e, e += 8, 13 < e && (h = b & 8191, 88 < h ? (b >>= 13, e -= 13) : (h = b & 16383, b >>= 14, e -= 14), c += f.charAt(h % 91), c += f.charAt(h / 91 | 0));
                        0 < e && (c += f.charAt(b % 91), 7 < e || 90 < b) && (c += f.charAt(b / 91 | 0));
                        return c;
                    };
                    a.f.i = function (a) {
                        var c = [];
                        if ('undefined' !== typeof a)
                            for (var b = 0; b < a.length; b++) {
                                var e = a.charCodeAt(b);
                                128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : b < a.length - 1 && (b++, e = 65536 + ((e & 1023) << 10 | a.charCodeAt(b) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63));
                            }
                        b = w.floor(1000 * w.random()) % 251;
                        a = [40 * b % 251];
                        for (e = 0; e < c.length; e++)
                            b = (b * b + (e + 1)) % 251, a.push(c[e] ^ b);
                        if ('function' !== typeof window.btoa)
                            c = '';
                        else {
                            c = [];
                            for (b = 0; b < a.length; b++)
                                c.push(String.fromCharCode(a[b]));
                            c = btoa(c.join(''));
                        }
                        return c;
                    };
                    a.f.j = function (a) {
                        for (var c = '', b = k(), e = 0; e < a.length; e++) {
                            var h;
                            h = d(a.charCodeAt(e));
                            var l = 0 === e % 2 ? b() : -1 * b();
                            h = 0 === l ? h : 126 < h + l ? 30 + (l - (126 - h) - 1) : 30 > h + l ? 126 + (l + (h - 30) + 1) : h + l;
                            c += String.fromCharCode(30 === h ? 9 : 31 === h ? 10 : h);
                        }
                        return c;
                    };
                    a.f.k = function (a) {
                        for (var c = '', b = k(), e = 0; e < a.length; e++) {
                            var h = b(), l;
                            l = d(a[e].charCodeAt(0));
                            h = 0 === e % 2 ? h : -1 * h;
                            l = 0 === h ? l : 30 > l - h ? 126 - (h - (l - 30) - 1) : 126 < l - h ? 30 - (h + (126 - l) + 1) : l - h;
                            c += String.fromCharCode(30 === l ? 9 : 31 === l ? 10 : l);
                        }
                        return c;
                    };
                    a.f.l = function (d, c) {
                        var b = [];
                        a.a.forEach(d, function (a, h) {
                            if (void 0 !== a && ('string' === typeof (c ? a[c] : a) || 'number' === typeof (c ? a[c] : a) || 'boolean' === typeof (c ? a[c] : a))) {
                                var d = String(c ? a[c] : a).split('&').join('%26').split('=').join('%3D');
                                b.push(('number' === typeof h ? '' : h + '=') + d);
                            }
                        }, null, !0);
                        b.sort();
                        return b.join('&');
                    };
                    a.f.a = a.a.e;
                    a.f.m = function () {
                        var d = document && document.documentElement && document.documentElement.style || {};
                        a.f.n = [
                            !0 === (!!window.chrome && (!!window.Atomics && !!window.Atomics.notify || !!window.EnterPictureInPictureEvent || !!window.chrome.webstore)) ? 1 : 0,
                            !0 === ('undefined' !== typeof InstallTrigger || 'MozAppearance' in d) ? 1 : 0,
                            !0 === !!window.opera ? 1 : 0,
                            !0 === a.c.m ? 1 : 0,
                            !0 === (!+'\x0B1' || !!document.documentMode || !!window.ActiveXObject || '-ms-scroll-limit' in d && '-ms-ime-align' in d) ? 1 : 0
                        ];
                        for (var d = !1, c = 0; c < a.f.n.length; c++)
                            if (1 === a.f.n[c]) {
                                d = c;
                                break;
                            }
                        !1 !== d && (a.f.b = d);
                        return a.f.b;
                    };
                    a.f.b = a.f.m();
                }(u));
                (function (a) {
                    function k() {
                        return !1;
                    }
                    a.c.as = '26';
                    a.c.at = 'MoatSuperV';
                    a.c.au = '-';
                    a.c.f = function (b) {
                        'string' !== typeof a.c.g && (a.c.au = b);
                    };
                    a.c.av = {};
                    a.c.aw = a.c.at + a.c.as;
                    a.c.n = 11;
                    a.c.ax = window && window['Moat#G' + a.c.as] || {};
                    a.c.ay = 'Moat#G' + a.c.as;
                    window[a.c.ay] = a.c.ax;
                    a.c.ax.a || (a.c.ax.a = w.floor(w.random() * w.pow(10, 12)));
                    a.c.az = w.floor(w.random() * w.pow(10, 12));
                    var d = a.a.ac();
                    a.c.ba = d.url;
                    a.c.bb = d.isCorrect;
                    d = a.l.l(function () {
                        return navigator.userAgent;
                    });
                    a.c.bc = d();
                    'string' !== typeof a.c.bc && (a.c.bc = '');
                    a.c.bd = function () {
                        return function () {
                        };
                    }();
                    a.c.be = function () {
                        return !!window.omid3p && 'undefined' !== typeof window.omid3p.customNative;
                    };
                    a.c.bf = function () {
                        return !1;
                    };
                    a.c.bg = function () {
                        var b = a.c.bf() || a.c.be();
                        return function () {
                            return b;
                        };
                    }();
                    a.c.bh = function () {
                        return function () {
                        };
                    }();
                    a.c.bi = function () {
                        return function () {
                            return !1;
                        };
                    }();
                    a.c.bj = new A().getTime();
                    a.c.bk = !0;
                    a.c.bl = !0;
                    a.c.bm = !1;
                    a.c.bm = !0;
                    a.c.bn = function (a, b) {
                        a = a.split('.');
                        b = b.split('.');
                        for (var e = 0; 3 > e; e++) {
                            var c = parseInt(a[e]), d = parseInt(b[e]);
                            if (c && isNaN(d))
                                return 1;
                            if (d && isNaN(c))
                                return 0;
                            if (c > d)
                                return 1;
                            if (d > c)
                                return 0;
                        }
                        return 2;
                    };
                    a.c.bo = k;
                    a.c.bp = k;
                    a.c.bq = k;
                    a.c.br = k;
                    a.c.bs = k;
                    a.c.bt = k;
                    a.c.bu = k;
                    a.c.bv = k;
                    var f = function () {
                        var b = function (b) {
                                if (a.c.am().isInApp)
                                    return !1;
                                var e = a.m && a.m.a();
                                if (a.c.bw || e || a.c.bx())
                                    return a.c.bw || e || a.c.bx(), !1;
                                b = a.a.co(b, ['$sf']);
                                if (!b)
                                    return !1;
                                var h = b.ext;
                                b = h && h.geom;
                                var e = [
                                        [
                                            'exp',
                                            'b',
                                            't',
                                            'l',
                                            'r'
                                        ],
                                        'self b t l r h w xiv yiv'.split(' ')
                                    ], c, d = !1;
                                if (h && b && 'function' === typeof b)
                                    try {
                                        if ((b = b()) && b.win) {
                                            if (a.a.forEach(b.win, function (a) {
                                                    if (a && ('number' === typeof a || 'string' === typeof a) && 0 !== parseFloat(a, 10))
                                                        return d = !0, !1;
                                                }), !d)
                                                return !1;
                                        } else
                                            return !1;
                                        if (b.par)
                                            return !0;
                                        for (var h = 0, l = e.length; h < l; h++) {
                                            c = e[h][0];
                                            for (var g = 1, f = e[h].length; g < f; g++)
                                                if ('undefined' === typeof b[c][e[h][g]])
                                                    return !1;
                                        }
                                        return !0;
                                    } catch (p) {
                                    }
                                return !1;
                            }, e, c, d, g;
                        a.c.by = function () {
                            if (g)
                                return !0;
                            e = window;
                            c = document;
                            g = b(e);
                            d = !(!g && !e.$sf);
                            if (!g && a.c.q)
                                for (var f = 0; 20 > f && !g; f++) {
                                    var x = a.g.b(c.body);
                                    if (!1 !== x && !x)
                                        break;
                                    c = (e = a.a.be(x)) && e.document;
                                    g = g || b(e);
                                    d = d || g || e.$sf;
                                }
                            return g;
                        };
                        a.c.bz = function () {
                            return a.c.by() && e;
                        };
                        a.c.ca = function () {
                            'undefined' === typeof g && a.c.by();
                            return d;
                        };
                    };
                    a.c.cb = !1;
                    a.c.cc = !1;
                    a.c.cd = null;
                    a.c.bz = function () {
                        f();
                        return a.c.bz();
                    };
                    a.c.ca = function () {
                        f();
                        return a.c.ca();
                    };
                    a.c.by = function () {
                        f();
                        return a.c.by();
                    };
                    var g = function () {
                        var b = function (b) {
                                return a.c.ce() ? !1 : a.a.co(b, [
                                    'context',
                                    'observeIntersection'
                                ]) ? !0 : !1;
                            }, e = window, c = document, d = b(e), g = !(!d && !e.context);
                        if (!d && a.c.q)
                            for (var f = 0; 20 > f && !d; f++) {
                                c = a.g.b(c.body);
                                if (!1 !== c && !c)
                                    break;
                                c = (e = a.a.be(c)) && e.document;
                                d = d || b(e);
                                g = g || d || e.context;
                            }
                        a.c.cf = function () {
                            return d && e;
                        };
                        a.c.cg = function (a) {
                            'boolean' === typeof a && (d = a);
                            return d;
                        };
                        a.c.ch = function () {
                            return g;
                        };
                    };
                    a.c.cf = function () {
                        g();
                        return a.c.cf();
                    };
                    a.c.ch = function () {
                        g();
                        return a.c.ch();
                    };
                    a.c.cg = function () {
                        g();
                        return a.c.cg();
                    };
                    a.c.ci = function () {
                        var b = a.a.dk('context');
                        if (b && a.a.co(b, ['observeIntersection']))
                            return b;
                        b = a.a.dk('AMP_CONTEXT_DATA');
                        if (a.a.co(b, ['initialIntersection']))
                            return b;
                    };
                    var c = function () {
                        var b, e = function (e) {
                                return (b = a.a.co(e, ['amazonmobileadsviewablebridge'])) && 'function' === typeof b.addEventListener && 'function' === typeof b.getVersion ? !0 : b = !1;
                            }, c = document, d = window, g = e(d), f = b && 1.1 <= b.getVersion();
                        if (!g && a.c.q)
                            for (var x = 0; 20 > x && !g; x++) {
                                c = a.g.b(c.body);
                                if (!1 !== c && !c)
                                    break;
                                c = (d = a.a.be(c)) && d.document;
                                g = g || e(d);
                                f = f || b && 1.1 <= b.getVersion();
                            }
                        a.c.cj = function () {
                            return g && d;
                        };
                        a.c.ck = function () {
                            return g;
                        };
                        a.c.cl = function () {
                            return f;
                        };
                        a.c.cm = function () {
                            return b;
                        };
                    };
                    a.c.cj = function () {
                        c();
                        return a.c.cj();
                    };
                    a.c.ck = function () {
                        c();
                        return a.c.ck();
                    };
                    a.c.cl = function () {
                        c();
                        return a.c.cl();
                    };
                    a.c.cm = function () {
                        c();
                        return a.c.cm();
                    };
                    a.c.cn = function () {
                        return a.c.ck() && a.c.cl();
                    };
                    a.c.o = function () {
                        var a = !1;
                        try {
                            var b = Object.defineProperty({}, 'passive', {
                                get: function () {
                                    a = !0;
                                }
                            });
                            window.addEventListener('test', null, b);
                            window.removeEventListener('test', null, b);
                        } catch (e) {
                        }
                        return a;
                    }();
                    a.c.co = function () {
                        var b;
                        return function () {
                            if ('undefined' !== typeof b)
                                return b;
                            var e = a.c.e, c = a.a.bq();
                            if (a.c.e.navigator.standalone)
                                b = !0;
                            else {
                                var d = e.innerWidth / c.w, e = e.innerHeight / c.h, d = !isNaN(d) && isFinite(d) && 0.9 <= d && 1.1 >= d, e = !isNaN(e) && isFinite(e) && 0.75 <= e && 1.1 >= e;
                                b = d && e;
                            }
                            a.c.e.MoatMAK ? a.c.e.MoatMAK.namespace && (b = !1) : (d = a.c.e) && d.imraid && 'function' === typeof d.imraid.getVendorName && 'inmobi' === d.imraid.getVendorName() && (b = !1);
                            return b;
                        };
                    }();
                    a.c.cp = function () {
                        var b = a.c.am().isInApp ? 0 : void 0;
                        a.c.ce() ? b = 3 : a.c.cq() && (b = 1);
                        return b;
                    };
                    a.c.cq = function () {
                        var b = a.c.co(), e = a.a.ao(), c = a.c.bo(), d = window.location && ('applewebdata:' === window.location.protocol || 'data:' === window.location.protocol);
                        if ('-' === e || '' === e.replace(/^\s+|\s+$/gm, '') || c || d)
                            return !1;
                        if (b || a.a.bl(a.c.bc))
                            return !0;
                        b = a.a.ap(a.c.d);
                        return a.c.cr(b) ? !0 : !1;
                    };
                    a.c.cr = function (b) {
                        var e = !1;
                        if (b) {
                            var c = [
                                a.f.a([
                                    48,
                                    48,
                                    48,
                                    72,
                                    48,
                                    26,
                                    37,
                                    38,
                                    26,
                                    43,
                                    45,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    48,
                                    48,
                                    48,
                                    72,
                                    50,
                                    26,
                                    33,
                                    40,
                                    40,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    48,
                                    48,
                                    48,
                                    72,
                                    31,
                                    40,
                                    49,
                                    39,
                                    30,
                                    48,
                                    44,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    38,
                                    26,
                                    34,
                                    37,
                                    72,
                                    50,
                                    26,
                                    33,
                                    40,
                                    40,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    48,
                                    48,
                                    48,
                                    72,
                                    28,
                                    33,
                                    30,
                                    44,
                                    44,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    48,
                                    48,
                                    48,
                                    72,
                                    41,
                                    28,
                                    33,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    48,
                                    48,
                                    48,
                                    72,
                                    28,
                                    40,
                                    40,
                                    37,
                                    38,
                                    26,
                                    45,
                                    33,
                                    32,
                                    26,
                                    38,
                                    30,
                                    44,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    48,
                                    48,
                                    48,
                                    72,
                                    32,
                                    37,
                                    40,
                                    27,
                                    40,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    48,
                                    48,
                                    48,
                                    72,
                                    28,
                                    26,
                                    43,
                                    32,
                                    46,
                                    43,
                                    46,
                                    44,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    38,
                                    26,
                                    34,
                                    37,
                                    72,
                                    26,
                                    40,
                                    37,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    48,
                                    48,
                                    48,
                                    72,
                                    28,
                                    39,
                                    39,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    54,
                                    56,
                                    59,
                                    44,
                                    41,
                                    40,
                                    43,
                                    45,
                                    44,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    41,
                                    30,
                                    40,
                                    41,
                                    37,
                                    30,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    48,
                                    48,
                                    48,
                                    72,
                                    45,
                                    33,
                                    30,
                                    29,
                                    30,
                                    37,
                                    34,
                                    45,
                                    30,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    48,
                                    48,
                                    48,
                                    72,
                                    33,
                                    46,
                                    37,
                                    46,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    48,
                                    48,
                                    48,
                                    72,
                                    33,
                                    37,
                                    39,
                                    72,
                                    27,
                                    30
                                ]),
                                a.f.a([
                                    48,
                                    48,
                                    48,
                                    72,
                                    44,
                                    41,
                                    26,
                                    43,
                                    36,
                                    39,
                                    40,
                                    45,
                                    30,
                                    44,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    37,
                                    40,
                                    45,
                                    45,
                                    40,
                                    72,
                                    41,
                                    28,
                                    33,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    48,
                                    48,
                                    48,
                                    72,
                                    28,
                                    39,
                                    30,
                                    45,
                                    72,
                                    28,
                                    40,
                                    38
                                ]),
                                a.f.a([
                                    48,
                                    48,
                                    48,
                                    72,
                                    26,
                                    37,
                                    37,
                                    43,
                                    30,
                                    28,
                                    34,
                                    41,
                                    30,
                                    44,
                                    72,
                                    28,
                                    40,
                                    38
                                ])
                            ];
                            a.a.forEach(c, function (a) {
                                if (0 == b.indexOf(a) || 0 == b.indexOf('https://' + a))
                                    return e = !0, !1;
                            });
                        }
                        return e;
                    };
                    a.c.ce = function () {
                        var b;
                        return function () {
                            if ('undefined' !== typeof b)
                                return b;
                            var e = a.a.q() || a.a.o();
                            return b = a.c.cs() || e && a.c.bg() || a.c.bi() ? !0 : a.c.cq() ? !1 : e;
                        };
                    }();
                    a.c.ct = function () {
                        return a.c.e.webkit && a.c.e.webkit.messageHandlers && a.c.e.webkit.messageHandlers.__z_moat_bridge__;
                    };
                    a.c.cs = function () {
                        return !1;
                    };
                    a.c.cu = function () {
                        return !1;
                    };
                    a.c.cv = function (b) {
                        return a.n && a.n.a(b);
                    };
                    a.c.cw = function () {
                        return !1;
                    };
                    a.c.cx = function () {
                        return !1;
                    };
                    a.c.cy = function () {
                        return !1;
                    };
                    a.c.cz = function () {
                        return !1;
                    };
                    a.c.da = function () {
                        if (a.c.cy() || a.c.cz())
                            return !0;
                        var b = !1;
                        return a.c.c || a.c.cc ? b = b || a.c.cc || a.c.cq() || a.c.br() || a.c.cn() : b;
                    };
                    a.c.protocol = a.a.ce();
                    a.c.db = a.a.l();
                    a.c.dc = !a.c.c;
                    a.c.dd = function (b) {
                        var e = 0;
                        b = b || window;
                        try {
                            if (!a.c.c) {
                                var c;
                                for (c = 0; 20 > c && b != window.top; c++)
                                    b = b.parent;
                                e = c;
                            }
                        } catch (d) {
                        }
                        return e;
                    };
                    a.c.c || a.a.ab() || 1 == a.c.dd(a.g.a()) ? a.c.de = 1 : a.c.de = 0;
                    a.c.e[a.c.ay] || (a.c.e[a.c.ay] = new a.c.e.Object());
                    a.c.am().isInApp && a.c.c && (a.c.c = a.c.da() || a.c.ce());
                    a.c.df = function () {
                        return !1;
                    };
                    a.c.dg = function () {
                        return !1;
                    };
                    a.c.d = a.c.e.document.referrer || '';
                    try {
                        a.c.dh = a.c.e.history && a.c.e.history.length;
                    } catch (h) {
                    }
                    a.c.di = function () {
                        if (B)
                            for (var a in B)
                                if (B.hasOwnProperty(a))
                                    return !0;
                        return !1;
                    };
                    a.c.dj = function (b) {
                        var e = !0;
                        a.a.forEach(b && b.parentNode && b.parentNode.childNodes, function (b) {
                            if (a.a.ax([
                                    'DIV',
                                    'IFRAME',
                                    'A',
                                    'EMBED',
                                    'OBJECT'
                                ], b.nodeName))
                                return e = !1;
                        });
                        return e;
                    };
                    a.c.dk = function () {
                        for (var a in B)
                            if (B.hasOwnProperty(a)) {
                                var b = B[a];
                                if (b && b.aa && b.aa[D])
                                    return !0;
                            }
                        return !1;
                    };
                    a.c.dl = function () {
                        return a.c.am().isInApp ? a.c.cq() ? a.c.c : a.c.da() : a.c.c;
                    };
                    a.c.bx = function () {
                        return a.c.dm && a.c.dm();
                    };
                    a.c.dn = function () {
                        return a.c.cb;
                    };
                    a.c['do'] = function () {
                        return a.c.by && a.c.by();
                    };
                    a.c.dp = function () {
                        return a.c.cg && a.c.cg();
                    };
                    a.c.dq = function () {
                        return a.m && a.m.a();
                    };
                    a.c.dr = function (b) {
                        var e = !1;
                        a.o && a.o.a && (b && b.periscopeManager ? b.periscopeManager.measurable && (e = !0) : e = !0);
                        return e;
                    };
                    a.c.ds = function (b) {
                        return a.c.dq() || a.c.dr(b);
                    };
                    a.c.dt = function (b, e) {
                        return !b || b && b.isMeasurabilityDisabled() || a.d.c() && !e ? !1 : a.c.dl() || a.c.du() || void 0;
                    };
                    a.c.dv = function (b) {
                        if (!b || b && b.isMeasurabilityDisabled() || a.d.c())
                            return !1;
                        var e = !1;
                        a.m && a.m.a() ? e = !0 : a.o && a.o.a && b.periscopeManager && b.periscopeManager.fullyMeasurable && b.ao && 1 != b.ao.skin && (e = !0);
                        return a.c.dl() || a.c.du() || e;
                    };
                    a.c.dw = function () {
                        a.c.bk = !1;
                        a.c.bl = !0;
                        a.c.bm = !0;
                    };
                    a.c.dx = !0;
                    a.c.dy = !0;
                    'mlb.com' === a.a.ao() && (a.a.bj() || a.a.bk()) && (a.c.dy = !1);
                    a.c.dz = function () {
                        return !1;
                    };
                    a.c.ea = function () {
                        a.c.ce();
                        return !1;
                    };
                    a.c.eb = function () {
                        return !1;
                    };
                    a.c.ec = function () {
                        return !1;
                    };
                    a.c.ed = function () {
                        var b = a.c.bc;
                        return (b = b && b.match(/Firefox\/([0-9]+)\./)) ? parseInt(b[1], 10) : !1;
                    };
                    a.c.bw = !1;
                    a.c.ee = !1;
                    a.c.a = new a.c.e.Image();
                    a.c.k = function () {
                        if ('undefined' !== typeof a.c.e['Moat#EVA'])
                            return !0;
                        try {
                            if ('undefined' !== typeof a.c.e.eval && (a.c.e.eval('(function(win){ win[\'Moat#EVA\'] = true; })(window)'), 'undefined' !== typeof a.c.e['Moat#EVA']))
                                return !0;
                        } catch (b) {
                        }
                        return !1;
                    };
                    a.c.l = function (a) {
                        try {
                            return new a.Function(''), !0;
                        } catch (b) {
                            return !1;
                        }
                    };
                    a.c.ef = function () {
                        var a = navigator && navigator.appVersion && navigator.appVersion.match(/Windows NT (\d\d{0,1}\.\d)/);
                        return a ? parseFloat(a[1]) : -1;
                    };
                    a.c.eg = function () {
                        return 6.1 === a.c.ef();
                    };
                    a.c.eh = function () {
                        var b = a.c.e;
                        return b.navigator && 'function' === typeof b.navigator.getBattery;
                    };
                    a.c.du = function () {
                        return !1;
                    };
                    a.c.ei = function () {
                        return !1;
                    };
                    a.c.ej = a.a.br();
                    a.c.ek = function (b) {
                        return b = (b = a.c.ej) || a.a.bs();
                    };
                    var b = {
                            a: 'a',
                            b: 'b',
                            c: 'c',
                            d: 'd',
                            e: 'e',
                            f: 'f'
                        }, e = {
                            a: 'waiting',
                            b: 'noHistData',
                            c: 'dataAvailable',
                            d: 'slotWaiting',
                            e: 'slotNoHistData',
                            f: 'slotNoSlotData'
                        };
                    a.c.el = function () {
                        var c = {};
                        a.a.forEach(b, function (a, b) {
                            c[a] = e[b];
                        });
                        a.a.forEach(e, function (a, b) {
                            c[a] = a;
                        });
                        return c;
                    }();
                    a.c.em = e;
                }(u));
                (function (a) {
                    function k(a, f, g) {
                        function c(a, b) {
                            for (var c in a)
                                a.hasOwnProperty(c) && b.call(null, a[c], c);
                        }
                        function b(a) {
                            var b = [];
                            c(a, function (a, e) {
                                b.push(e);
                            });
                            return b;
                        }
                        a = f[a];
                        a && a.xa.sode || (a.xa.sode = function () {
                            this.desw = {};
                            this.xfgf = [];
                            this.publishing_ = !1;
                            this.xkcd = {};
                            this.edws = [];
                        }, a.xa.sode.prototype.uxin = function () {
                            var a = function (a) {
                                a = g.max(4, a);
                                return ((1 + g.random()) * g.pow(16, a) | 0).toString(16).substring(0, a);
                            };
                            return function (b) {
                                return a(4) + '-' + a(4) + '-' + a(4) + '-' + a(4);
                            };
                        }(), a.xa.sode.prototype.xsza = function (a) {
                            this.desw[a] || (this.desw[a] = {});
                            return this.desw[a];
                        }, a.xa.sode.prototype.esgf = function (a, b) {
                            this.publishing_ ? this.xfgf.push(arguments) : this.zaxs.apply(this, arguments);
                        }, a.xa.sode.prototype.kswa = function (a, b) {
                            for (var c = this.xkcd[a] || [], d = c && c.length, g = 0; g < d; g++)
                                if (c[g] === b)
                                    return !1;
                            c.push(b);
                            c.sort(function (a, b) {
                                return a - b;
                            });
                            this.xkcd[a] = c;
                        }, a.xa.sode.prototype.aksw = function (a, b) {
                            if (!this.xkcd[a])
                                return !1;
                            for (var c = this.xkcd[a], d = -1, g = c && c.length, f = 0; f < g; f++)
                                if (c[f] === b) {
                                    d = f;
                                    break;
                                }
                            -1 != d && c.splice(d, 1);
                            this.xkcd[a] = c;
                        }, a.xa.sode.prototype._getEventPriorities_ = function (a) {
                            return this.xkcd[a] || [];
                        }, a.xa.sode.prototype.azsx = function (a, b, c) {
                            c = c || {};
                            var d = c.id || this.uxin(), g;
                            g = c.priority;
                            g = !isNaN(g) && isFinite(g) ? parseInt(g, 10) : 10;
                            for (var f = this.xsza(a), k = 0; f[d] && !c.id && 10 > k;)
                                k++, d = this.uxin();
                            f[g] || (f[g] = {});
                            this.kswa(a, g);
                            c.priority = g;
                            f[g][d] = {
                                cb: b,
                                options: c
                            };
                            return d;
                        }, a.xa.sode.prototype.zaxs = function (a, b) {
                            if (!this.desw[a])
                                return !1;
                            this.publishing_ = !0;
                            for (var c = this.edws.slice.call(arguments, 1), d = this._getEventPriorities_(a).slice(0), g = 0, f = d.length; g < f; g++) {
                                var k = this.desw[a][d[g]], x;
                                for (x in k)
                                    if (k.hasOwnProperty(x)) {
                                        var n = k[x];
                                        if (n) {
                                            var m;
                                            m = n.options && n.options.includeId ? [x].concat(c) : c;
                                            if (!n.options || !n.options.condition || n.options.condition && n.options.condition.apply(null, m))
                                                n.options && n.options.once && 'undefined' !== typeof n.options.priority && this.sxaz(a, {
                                                    id: x,
                                                    priority: n.options.priority
                                                }), n.cb.apply(null, m);
                                        }
                                    }
                            }
                            this.publishing_ = !1;
                            for (c = 0; 0 < this.xfgf.length && 500 > c; c++)
                                this.zaxs.apply(this, this.xfgf.pop());
                        }, a.xa.sode.prototype.swaq = function (a, c, d) {
                            var g = !1;
                            if (this.desw[a] && this.desw[a][d])
                                try {
                                    delete this.desw[a][d][c], g = !0;
                                } catch (f) {
                                }
                            0 === b(this.desw[a][d]).length && this.aksw(a, d);
                            return g;
                        }, a.xa.sode.prototype.sxaz = function (a, b) {
                            if (!b || 'object' != typeof b || !this.desw[a])
                                return !1;
                            if (b.id && void 0 !== b.priority)
                                return this.swaq(a, b.id, b.priority);
                            if (b.id || b.callback)
                                for (var c = this._getEventPriorities_(a), d = 0, g = c.length; d < g; d++) {
                                    var f = c[d];
                                    if (b.id && b.callback) {
                                        if (this.desw[a][f][b.id] && this.desw[a][f][b.id].cb == b.callback)
                                            return this.swaq(a, b.id, f);
                                    } else if (b.id) {
                                        if (this.desw[a][f][b.id])
                                            return this.swaq(a, b.id, f);
                                    } else
                                        for (var k in this.desw[a][f])
                                            if (this.desw[a][f][k] && this.desw[a][f][k].cb == b.callback)
                                                return this.swaq(a, k, f);
                                }
                            return !1;
                        }, a.xa.sode.prototype.ugin = function (a) {
                            if ('string' === typeof a)
                                if (this.desw[a])
                                    delete this.desw[a];
                                else
                                    return !1;
                            else
                                this.desw = {};
                            return !0;
                        });
                    }
                    a.k = {};
                    a.k.b = function (d) {
                        d.xa.sode || (d.xb == window ? k(a.c.aw, window, w) : a.a.dj(k, '\'' + a.c.aw + '\',window, Math', d.xb));
                        a.k.a = new d.xa.sode();
                    };
                }(u));
                (function (a) {
                    function k(a, f) {
                        function g(a) {
                            var b = e.xb.Math.pow, c = e.xb.Math.random;
                            a = (0, e.xb.Math.max)(4, a);
                            return ((1 + c()) * b(16, a) | 0).toString(16).substring(0, a);
                        }
                        function c(a) {
                            return function (b) {
                                return a(b);
                            };
                        }
                        function b(a, b) {
                            if (!a || 'string' !== typeof b || !a[b] || a == window)
                                return !1;
                            if ('string' === typeof a.nodeName && ('OBJECT' === a.nodeName || 'EMBED' === a.nodeName)) {
                                var e = document && document.body && document.body[b];
                                if (e && e !== a[b])
                                    return e;
                            }
                            return !1;
                        }
                        f[a] = f[a] || {
                            zs: !1,
                            zr: 0,
                            yf: {},
                            h: 0,
                            m: 0,
                            i: {},
                            xa: {},
                            xb: f,
                            xc: {},
                            xyds: {}
                        };
                        var e = f[a], h = {}, l = function () {
                                var a = !1;
                                try {
                                    var b = Object.defineProperty({}, 'passive', {
                                        get: function () {
                                            a = !0;
                                        }
                                    });
                                    window.addEventListener('test', null, b);
                                    window.removeEventListener('test', null, b);
                                } catch (e) {
                                }
                                return a;
                            }();
                        e.xc.dowg = function (a, b) {
                            e && (e.xyds || (e.xyds = {}), e && e.xyds && (e.xyds[b] ? e.xyds[b].push(a) : e.xyds[b] = [a]));
                        };
                        e.xc.hsxk = function () {
                            e.dcsx && e.dcsx.dcwn();
                            'undefined' !== typeof a && a && e.xc.esde(a);
                            var a;
                            e.xc.exde(e.xc.hsxk, 1000);
                        };
                        e.xc.esde = function (a) {
                            window && window.clearTimeout && window.clearTimeout(a);
                        };
                        e.xc.ynds = function (a, e, d, g) {
                            var f, n, m = !1;
                            'touchstart' === e && l && (m = { passive: !0 });
                            g ? h[e + g] ? d = h[e + g] : (d = c(d), h[e + g] = d) : d = c(d);
                            if (a.addEventListener)
                                g = 'addEventListener', f = '';
                            else if (a.attachEvent)
                                g = 'attachEvent', f = 'on';
                            else
                                return !1;
                            if (n = b(a, g))
                                try {
                                    n.call(a, f + e, d, m);
                                } catch (I) {
                                    a[g](f + e, d, m);
                                }
                            else if (a && g && a[g])
                                try {
                                    a[g](f + e, d, m);
                                } catch (I) {
                                    return !1;
                                }
                        };
                        e.xc.engn = function (a, e, c, d) {
                            var g, f = e + d, l;
                            if (!a)
                                return delete h[f], !1;
                            c = !1 !== d ? h[f] : c;
                            if (a.removeEventListener)
                                d = 'removeEventListener', g = '';
                            else if (a.detachEvent)
                                d = 'detachEvent', g = 'on';
                            else
                                return delete h[f], !1;
                            if (l = b(a, d))
                                try {
                                    l.call(a, g + e, c, !1);
                                } catch (I) {
                                    a[d](g + e, c, !1);
                                }
                            else
                                try {
                                    a[d](g + e, c, !1);
                                } catch (I) {
                                }
                            delete h[f];
                        };
                        e.xc.exde = function (a, b) {
                            a = c(a);
                            var e;
                            window && window.setTimeout && (e = window.setTimeout(a, b));
                            return e;
                        };
                        e.xc.exae = function (a, b, e) {
                            return function () {
                                b.apply(e || null, a.concat(a.slice.call(arguments)));
                            };
                        };
                        e.xc.uxin = function () {
                            return g(4) + '-' + g(4) + '-' + g(4) + '-' + g(4);
                        };
                        e.xc.twer = function (a, b) {
                            e && (e.yf || (e.yf = {}), e && e.yf && (e.yf[b] ? e.yf[b].push(a) : e.yf[b] = [a]));
                        };
                    }
                    a.p = {};
                    a.p.a = function (d) {
                        var f = a.p.b(d), g = !1;
                        f || (f = a.p.c(d), g = !0, f.xc.exde(f.xc.hsxk, 1000));
                        window[a.c.aw] = f;
                        a.k.b(f);
                        g && (f.swde = new f.xa.sode());
                        a.k.a.azsx('adKilled', a.p.d);
                        return f;
                    };
                    a.p.e = function () {
                        a.c.i = null;
                        a.p.f(a.c.ax.a, a.c.az);
                        a.k.a.sxaz('adKilled', { callback: a.p.d });
                        a.p.g(r);
                    };
                    a.p.d = function (d) {
                        if (r) {
                            try {
                                var f = r.yf[a.c.ax.a];
                                if (f) {
                                    var g = a.a.indexOf(f, d.yg);
                                    -1 < g && f.splice(g, 1);
                                }
                            } catch (c) {
                            }
                            a.p.g(r);
                        }
                    };
                    a.p.h = function (d, f) {
                        var g = a.p.b(a.c.e);
                        g && g.xc.twer(d, f);
                    };
                    a.p.i = function (d, f) {
                        var g = a.p.b(a.c.e);
                        g && g.xc.dowg(f, d);
                    };
                    a.p.f = function (d, f) {
                        var g = r.xyds[d];
                        if (g) {
                            var c = a.a.indexOf(g, f);
                            -1 < c && g.splice(c, 1);
                        }
                    };
                    a.p.g = function (a) {
                    };
                    a.p.c = function (d) {
                        d == window ? k(a.c.aw, window) : a.a.dj(k, '\'' + a.c.aw + '\',window', d);
                        return a.p.b(d);
                    };
                    a.p.b = function (d) {
                        try {
                            return d = d || a.c.e, d[a.c.aw];
                        } catch (f) {
                            return null;
                        }
                    };
                    a.p.j = function (d) {
                        try {
                            var f = [];
                            d = d || a.c.e;
                            if (!d)
                                return !1;
                            var g = a.c.at;
                            if (!g)
                                return !1;
                            var c = new RegExp('^' + g);
                            if (!c)
                                return !1;
                            a.a.forEach(d, function (a, e) {
                                -1 < e.search(c) && a && 'number' === typeof a.zr && f.push(a);
                            });
                            return f;
                        } catch (b) {
                            return !1;
                        }
                    };
                    a.p.k = function (d) {
                        try {
                            var f = [];
                            d = d || a.c.e;
                            return d ? (f = a.p.j(d)) ? 0 < f.length ? !0 : !1 : !1 : !1;
                        } catch (g) {
                            return !1;
                        }
                    };
                    a.p.l = function (d) {
                        var f = a.p.b();
                        f && (f.i[d] = !0);
                    };
                }(u));
                var r = u.p.a(u.c.e), ka = u.c.c, U = u.a.l(), R = u.c.bj, wa = u.c.e;
                (function (a) {
                    function k(a, f, g) {
                        var c = f[a];
                        c && c.xa.txae || (c.xa.txae = function (a, e) {
                            this.sxdc = c.xc.uxin();
                            this.cdxs = a;
                            this.xscd = {};
                            this.swde = e;
                        }, c.xa.txae.prototype.wsed = function (a, e, d, g, f) {
                            this.xscd[g] || (this.xscd[g] = {});
                            this.xscd[g].evt = e;
                            this.xscd[g].target = a;
                            this.xscd[g].periodic = !0;
                            var t;
                            t = c.xc.exae([this], function (k, y) {
                                c.xc.engn(a, e, null, g);
                                if (k.xscd[g]) {
                                    k.xscd[g].tid && c.xc.esde(k.xscd[g].tid);
                                    k.xscd[g].tid = c.xc.exde(function () {
                                        k.xscd[g].tid = null;
                                        c.xc.ynds(a, e, t, g);
                                    }, f);
                                    try {
                                        k.swde.zaxs(d, y);
                                    } catch (x) {
                                    }
                                }
                            });
                            c.xc.ynds(a, e, t, g);
                        }, c.xa.txae.prototype.wsqa = function (a) {
                            this.xscd[a] && (c.xc.esde(this.xscd[a].tid), c.xc.engn(this.xscd[a].target, this.xscd[a].evt, null, a), delete this.xscd[a]);
                        }, c.xa.txae.prototype.qaws = function () {
                            this.wsed(this.cdxs, 'scroll', 'scroll', 'globalScrollevent' + this.sxdc, 1000);
                            var a = this.cdxs.document.documentElement;
                            this.wsed(a, 'mousedown', 'mouseEvent', 'globalMouseDown' + this.sxdc, 1000);
                            this.wsed(a, 'mouseover', 'mouseEvent', 'globalMouseOver' + this.sxdc, 1000);
                            this.wsed(a, 'mousemove', 'mouseEvent', 'globalMouseMove' + this.sxdc, 5000);
                            this.wsed(this.cdxs, 'mousewheel', 'mouseEvent', 'globalMouseWheel' + this.sxdc, 5000);
                            this.wsed(this.cdxs, 'DOMMouseScroll', 'mouseEvent', 'globalMouseScroll' + this.sxdc, 5000);
                            this.wsed(a, 'touchstart', 'mouseEvent', 'globalTouchStartEvent' + this.sxdc, 1000);
                            this.wsed(a, 'keydown', 'keyboardEvent', 'globalKeyboardEvent' + this.sxdc, 1000);
                        }, c.xa.txae.prototype.aqsw = function () {
                            for (var a in this.xscd)
                                this.engn({ listenerName: a });
                        }, c.xa.txae.prototype.ynds = function (a, e, d, g) {
                            if (!this.xscd[g]) {
                                this.xscd[g] = {};
                                this.xscd[g].evt = e;
                                this.xscd[g].target = a;
                                this.xscd[g].publishEvt = d;
                                var f;
                                f = c.xc.exae([this], function (a, b) {
                                    a.xscd[g] && a.swde.zaxs(d, b);
                                });
                                c.xc.ynds(a, e, f, g);
                            }
                        }, c.xa.txae.prototype.engn = function (a) {
                            function e(a, b) {
                                a.xscd[b].periodic ? a.wsqa(b) : (c.xc.engn(a.xscd[b].target, a.xscd[b].evt, null, b), delete a.xscd[b]);
                            }
                            var d = a.target && a.evt, g = a.target && !a.evt, f = a.all;
                            if (a.listenerName)
                                this.xscd[a.listenerName] && e(this, a.listenerName);
                            else if (d)
                                for (var t in this.xscd)
                                    (d = this.xscd[t]) && d.evt == a.evt && d.target == a.target && e(this, t);
                            else if (g)
                                for (t in this.xscd)
                                    (d = this.xscd[t]) && d.target == a.target && e(this, t);
                            else if (f)
                                for (t in this.xscd)
                                    (d = this.xscd[t]) && e(this, t);
                        }, c.xa.txae.prototype.kdmw = function (a) {
                            c.swde.esgf(a.publishEvt);
                        }, c.xa.txae.prototype.dcwn = function () {
                            var a = this.xscd, e;
                            for (e in a) {
                                var c = a[e];
                                'unload' === c.evt && c.target && c.target.closed && this.kdmw(c);
                            }
                        });
                    }
                    a.q = {};
                    a.q.a = function (d) {
                        d && (d.xa.txae || (d.xb == window ? k(a.c.aw, window, w) : a.a.dj(k, '\'' + a.c.aw + '\',window, Math', d.xb)), d.zs || (d.dcsx = new d.xa.txae(a.c.e, d.swde), d.zs = !0));
                    };
                    a.k.a.azsx('modulesReady', a.q.a, { once: !0 });
                    a.k.a.azsx('startAdTracking', function (d) {
                        r && r.zs && !r.xz && (r.dcsx ? (r.xz = !0, r.dcsx.qaws()) : a.q.a(r), a.focus.setFocusListeners());
                    });
                }(u));
                (function (a) {
                    function k(a, b, e) {
                        a.IR5.MIN[e] = w.min(b, a.IR5.MIN[e]) || b || 1;
                        a.IR5.MAX[e] = w.max(b, a.IR5.MAX[e]) || b;
                    }
                    function d(b) {
                        if (q)
                            return !0;
                        var e = r.swde.azsx('focusStateChange', function (e) {
                            var c = { type: 'blur' };
                            e || (a.r.g(c, b), a.r.h(c, b));
                        });
                        a.k.a.azsx('adKilled', function () {
                            r.swde.sxaz('focusStateChange', { id: e });
                        }, {
                            once: !0,
                            condition: function (a) {
                                return b.zr == a.zr;
                            }
                        });
                        q = !0;
                    }
                    function f(a, b) {
                        b.be = w.max('undefined' !== typeof b.be ? b.be : 0, a - b.bf);
                        'undefined' === typeof b.by && 500 <= b.be && (b.by = b.bk);
                    }
                    function g(b) {
                        b.az === a.r.a.d.a ? b.az = a.r.a.d.b : b.az === a.r.a.d.b && (b.az = a.r.a.d.a);
                    }
                    function c(b) {
                        b.ba === a.r.a.d.a ? b.ba = a.r.a.d.b : b.ba === a.r.a.d.b && (b.ba = a.r.a.d.a);
                    }
                    function b(b) {
                        b.ax === a.r.a.b.a ? b.ax = a.r.a.b.b : b.ax === a.r.a.b.b && (b.ax = a.r.a.b.a);
                    }
                    function e(b) {
                        b.ay === a.r.a.c.a ? b.ay = a.r.a.c.b : b.ay === a.r.a.c.b && (b.ay = a.r.a.c.a);
                    }
                    function h(a, b) {
                        'undefined' === typeof b.bk && (b.bk = 0);
                        b.bk += a - b.bo;
                        b.bo = a;
                    }
                    function l(a, b) {
                        'undefined' === typeof b.bl && (b.bl = 0);
                        b.bl += a - b.bp;
                        b.bp = a;
                    }
                    function p(a, b) {
                        'undefined' === typeof b.bg && (b.bg = 0);
                        'undefined' === typeof b.bc && (b.bc = 0);
                        b.bu = a - b.bs;
                        b.bu > b.bc && (b.bc = b.bu);
                        b.bg += a - b.bq;
                        500 <= b.bc && 'undefined' === typeof b.bw && (b.bk += a - b.bo, b.bw = b.bk);
                        b.bq = a;
                    }
                    function t(a, b) {
                        'undefined' === typeof b.bh && (b.bh = 0);
                        'undefined' === typeof b.bd && (b.bd = 0);
                        b.bv = a - b.bt;
                        b.bv > b.bd && (b.bd = b.bv);
                        b.bh += a - b.br;
                        500 <= b.bd && 'undefined' === typeof b.bx && (b.bl += a - b.bp, b.bx = b.bl);
                        b.br = a;
                    }
                    a.r = {};
                    var q = !1;
                    a.r.a = {};
                    a.r.a.a = {};
                    a.r.a.a.a = 0;
                    a.r.a.a.b = 1;
                    a.r.a.b = {};
                    a.r.a.b.a = 0;
                    a.r.a.b.b = 1;
                    a.r.a.c = {};
                    a.r.a.c.a = 0;
                    a.r.a.c.b = 1;
                    a.r.a.d = {};
                    a.r.a.d.a = 0;
                    a.r.a.d.b = 1;
                    a.r.a.e = {};
                    a.r.a.e.a = 0;
                    a.r.a.e.b = 1;
                    a.r.a.f = {};
                    a.r.a.f.a = 0;
                    a.r.a.f.b = 1;
                    a.r.a.f.c = 2;
                    a.r.b = function (a) {
                        k(a, a.aj, 'x');
                        k(a, a.ak, 'y');
                        a.IR5.AREA = (a.IR5.MAX.x - a.IR5.MIN.x) * (a.IR5.MAX.y - a.IR5.MIN.y);
                    };
                    a.r.c = function (b) {
                        function e() {
                            500 <= new A().getTime() - ra && (a.r.d({ type: 'park' }, b), clearInterval(d), b.au = a.r.a.a.a);
                        }
                        var c = b.au;
                        if (c === a.r.a.a.a) {
                            ra = new A().getTime();
                            var d = a.l.e(e, 50);
                            b.au = a.r.a.a.b;
                        } else
                            c === a.r.a.a.b && (ra = new A().getTime());
                    };
                    a.r.e = function (b) {
                        function e() {
                            3000 <= new A().getTime() - na && (a.r.f({ type: 'park' }, b), clearInterval(d), b.av = a.r.a.a.a);
                        }
                        var c = b.av;
                        if (c === a.r.a.a.a) {
                            na = new A().getTime();
                            var d = a.l.e(e, 50);
                            b.av = a.r.a.a.b;
                        } else
                            c === a.r.a.a.b && (na = new A().getTime());
                    };
                    a.r.g = function (b, e) {
                        var c = b.type;
                        d(e);
                        if (e.az === a.r.a.d.a) {
                            if ('mouseover' === c || 'mousemove' === c)
                                e.bo = new A().getTime(), g(e);
                        } else if (e.az === a.r.a.d.b) {
                            'mousemove' === c && h(new A().getTime(), e);
                            if ('mouseout' === c || 'blur' === c)
                                h(new A().getTime(), e), g(e);
                            'scooper' === c && h(new A().getTime(), e);
                        }
                    };
                    a.r.h = function (b, e) {
                        var h = b.type;
                        d(e);
                        if (e.ba === a.r.a.d.a) {
                            if ('mouseover' === h || 'mousemove' === h)
                                e.bp = new A().getTime(), c(e);
                        } else if (e.ba === a.r.a.d.b) {
                            'mousemove' === h && l(new A().getTime(), e);
                            if ('mouseout' === h || 'blur' === h)
                                l(new A().getTime(), e), c(e);
                            'scooper' === h && l(new A().getTime(), e);
                        }
                    };
                    a.r.d = function (e, c) {
                        if (2 != c.an) {
                            var d = e.type;
                            if (c.ax === a.r.a.b.a) {
                                if ('mouseover' === d || 'mousemove' === d)
                                    c.bq = new A().getTime(), c.bs = new A().getTime(), b(c);
                            } else
                                c.ax === a.r.a.b.b && ('mousemove' !== d && 'mouseout' !== d || p(new A().getTime(), c), 'park' === d && p(new A().getTime() - 500, c), 'mouseout' !== d && 'park' !== d || b(c));
                        }
                    };
                    a.r.f = function (b, c) {
                        if (2 != c.an) {
                            var d = b.type;
                            if (c.ay === a.r.a.c.a) {
                                if ('mouseover' === d || 'mousemove' === d)
                                    c.br = new A().getTime(), c.bt = new A().getTime(), e(c);
                            } else
                                c.ay === a.r.a.c.b && ('mousemove' !== d && 'mouseout' !== d || t(new A().getTime(), c), 'park' === d && t(new A().getTime() - 3000, c), 'mouseout' !== d && 'park' !== d || e(c));
                        }
                    };
                    a.r.i = function (b, e) {
                        var c = b.type;
                        if (e.bb == a.r.a.e.a) {
                            if ('mouseover' == c || 'mousemove' == c)
                                e.bf = new A().getTime(), e.bb = a.r.a.e.b;
                        } else
                            e.bb == a.r.a.e.b && ('mouseout' == c ? (f(new A().getTime(), e), e.bb = a.r.a.e.a) : 'mousemove' != c && 'scooper' != c || f(new A().getTime(), e));
                    };
                }(u));
                (function (a) {
                    function k(b) {
                        a.focus.pageIsPrerendered() || (a.k.a.zaxs('noLongerPreRendered'), a.l.d(document, p, k, 'pr'));
                    }
                    function d(a) {
                        'undefined' == typeof e && (e = a);
                    }
                    a.focus = {};
                    var f = !1, g = a.c.bc, g = -1 < g.indexOf('Safari') && -1 == g.indexOf('Chrome') && -1 == g.indexOf('Chromium') && !a.a.l(), c = a.a.t() && !a.a.l(), b = 'undefined' !== typeof document.hasFocus, e, h = {
                            visible: 0,
                            hidden: 1,
                            prerender: 2
                        }, l, p, t, q;
                    'undefined' !== typeof document.hidden ? (l = 'hidden', p = 'visibilitychange') : 'undefined' !== typeof document.mozHidden ? (l = 'mozHidden', p = 'mozvisibilitychange') : 'undefined' !== typeof document.msHidden ? (l = 'msHidden', p = 'msvisibilitychange') : 'undefined' !== typeof document.webkitHidden && (l = 'webkitHidden', p = 'webkitvisibilitychange');
                    for (var y = [
                                'v',
                                'mozV',
                                'msV',
                                'webkitV'
                            ], x = 0; x < y.length; x++) {
                        var n = y[x] + 'isibilityState';
                        if ('undefined' !== typeof document[n] && null !== document[n]) {
                            t = n;
                            break;
                        }
                    }
                    q = 'undefined' !== typeof l;
                    var m, I;
                    'undefined' !== typeof window.requestAnimationFrame ? m = 'requestAnimationFrame' : 'undefined' !== typeof window.webkitRequestAnimationFrame && (m = 'webkitRequestAnimationFrame');
                    I = g && 'string' == typeof m && !q;
                    var G = new A().getTime();
                    I && function E() {
                        G = new A().getTime();
                        if (!f)
                            window[m](E);
                    }();
                    a.focus.focusStartTime = !1;
                    var J = r.swde.azsx('focusStateChange', function (b) {
                        b && (a.focus.focusStartTime = new A().getTime(), r.swde.sxaz('focusStateChange', {
                            id: J,
                            priority: 1
                        }));
                    }, { priority: 1 });
                    a.focus.getFocusMethod = function () {
                        return e;
                    };
                    a.focus.visibilitychange = p;
                    a.focus.setFocusListeners = function () {
                    };
                    a.focus.getQueryString = function (a) {
                        a = {};
                        a.em = e;
                        z && (a.eo = 1);
                        'undefined' != typeof t && (a.en = h[document[t]]);
                        return a;
                    };
                    a.focus.supportsPageVisAPI = function () {
                        return q;
                    };
                    a.focus.checkFocus = function () {
                        if (a.focus.supportsPageVisAPI())
                            return d(0), !document[l];
                        if (I)
                            return d(1), 100 > new A().getTime() - G;
                        if (c && b)
                            return d(2), document.hasFocus();
                        d(3);
                        return !0;
                    };
                    var C = !1;
                    a.focus.pageIsVisible = function () {
                        var b = a.focus.checkFocus();
                        if (C != b && r && r.swde)
                            try {
                                r.swde.zaxs('focusStateChange', b);
                            } catch (e) {
                            }
                        return C = b;
                    };
                    a.focus.pageIsPrerendered = function () {
                        return 'undefined' !== typeof t ? 'prerender' == document[t] : !1;
                    };
                    a.focus.pageIsVisible();
                    a.k.a.azsx('allLocalAdsKilled', function () {
                        f = !0;
                    }, { once: !0 });
                    a.focus.pageIsPrerendered() && a.l.c(document, p, k, 'pr');
                    var z = a.focus.pageIsPrerendered();
                }(u));
                (function (a) {
                    a.s = {};
                    a.s.a = function () {
                        var k = a.t.a;
                        a.t.b([
                            'iframe[id^=\'ebBannerIFrame\']',
                            '$[id|ebBannerIFrame_([0-9]+_[0-9]+)]/.../body/#eyeDiv/iframe[id^=\'ebAd\'][id*=\'panel\'][id*=\'iframe\'][id*=\'$0\']',
                            [
                                'expandUnloads',
                                'useIsFoundAdKnown',
                                'runWithoutExpand'
                            ]
                        ], 'Sizmek backref');
                        a.t.b([
                            'iframe[id^=\'ebBannerIFrame\']',
                            '.../body/#eyeDiv/iframe[id^=\'ebAd\'][id*=\'panel\'][id*=\'iframe\']',
                            [
                                'expandUnloads',
                                'useIsFoundAdKnown',
                                'runWithoutExpand',
                                'setCollapseProxyInLoop'
                            ],
                            !1,
                            '.../body/#eyeDiv'
                        ], 'Sizmek custom');
                        a.t.b([
                            '[id^=\'envIpolli\'][name^=\'envIpolli\']',
                            '[id^=\'envIpolli\'][name^=\'envIpolli\']/$[id|envIpolli(\\d+)]/.../body/iframe[id=\'expIpolli$0_iframe\']',
                            [
                                'runWithoutExpand',
                                'expandUnloads',
                                'noCollapseValidation'
                            ]
                        ], 'Ipolli');
                        a.t.b([
                            '[id^=\'OriginPlatformAdUnit\'][id$=\'inpage\']',
                            '$[id|OriginPlatformAdUnit-(\\d+)-inpage]/...../[id=\'OriginPlatformAdUnit-$0-overthepage\']',
                            [
                                'expandUnloads',
                                'useIsFoundAdKnown',
                                'runWithoutExpand'
                            ]
                        ], 'Origin platform');
                        a.t.b([
                            '#cac_adhere',
                            '..../$[id|cmAdFrame__crisp-(.*)]/...../iframe#cacPanelIframe__crisp-$0',
                            [
                                'useIsFoundAdKnown',
                                'findExpandInLoop',
                                'setExpandProxyInLoop'
                            ],
                            !1,
                            !1,
                            'iframe/=>/div[id=\'panelContainerDiv\']'
                        ], 'cac_adhere');
                        a.c.bt && a.c.bt() && 'AdMarvel' == a.c.bt() && (a.t.b([
                            'div#normal',
                            'div#expanded',
                            ['noInitialValidation']
                        ], 'Opera MRAID 1'), a.t.b([
                            'div#normal',
                            'div#resized',
                            ['noInitialValidation']
                        ], 'Opera MRAID 2'));
                        k.push({
                            name: 'pictela',
                            onFindAd: function (d, f, g) {
                                if ((d = a.c.db ? a.u.a(['div[id^=\'ptela_unitWrapper\']'], d)[0] : a.u.a(['div[id^=\'ptelaswfholder\']'], d)[0]) && a.a.bt(d))
                                    return d;
                            }
                        }, {
                            name: 'Flashtalking',
                            collapsedRe: /ftdiv\d+/,
                            expandedRe: /ftin\d+/,
                            clipRe: /rect\((\d+)px,? (\d+)px,? (\d+)px,? (\d+)px\)/,
                            onFindAd: function (d, f, g) {
                                var c = a.t.c(d, this.collapsedRe);
                                d = a.t.c(d, this.expandedRe);
                                if (c && d)
                                    return a.t.d[f] = a.t.e(c, f, g), a.t.d[f].expandedEl = d, c;
                            },
                            onLoop: function (d) {
                                var f = !1, g = d.expandedEl.style.clip, g = g && g.match(this.clipRe);
                                '0' === (g && g[4]) && (f = !0);
                                f && !d.expandedIsOpen ? a.t.f(d.expandedEl, 'div', null, d.adNum) : !f && d.expandedIsOpen && a.t.g(d, !0);
                            }
                        }, {
                            name: 'doubleclick sidekick',
                            re: /(DIV)_(\d{6})_1_(\d{13})/,
                            onFindAd: function (d, f, g) {
                                if (d = a.t.c(d, this.re))
                                    return a.t.d[f] = a.t.e(d, f, g), d;
                            },
                            findExpanded: function (a) {
                                if (a = a.id.match(this.re))
                                    for (var f = [
                                                a[3],
                                                Number(a[3]) + 1
                                            ], g = 0; g < f.length; g++) {
                                        var c = [
                                            'DIV',
                                            a[2],
                                            '2',
                                            f[g]
                                        ].join('_');
                                        if (c = document.getElementById(c))
                                            return c;
                                    }
                            }
                        }, {
                            name: 'Pointroll 1',
                            re: /pr(flsh)([A-Z0-9]+)/,
                            onFindAd: function (d, f, g) {
                                if (a.c.db) {
                                    var c = window.prBnr;
                                    if (c && 1 === c.nodeType && a.a.bt(c)) {
                                        var b = d && d.innerHTML && d.innerHTML.match(/pradi([A-Z0-9]+)/);
                                        if ((b = b && b[1]) && c.id && c.id.match(b) && (d = d.ownerDocument.getElementById('prf' + b)))
                                            return a.t.d[f] = a.t.e(c, f, g), a.t.d[f].uncle = d, c;
                                    }
                                }
                            },
                            onLoop: function (d) {
                                var f = !1, g = d.uncle;
                                g && g.children && 1 === g.children.length && (g = g.children[0]) && 1 === g.children.length && (d.expandedEl = g, f = !0);
                                f && !d.expandedIsOpen ? a.t.f(d.expandedEl, 'div', null, d.adNum) : !f && d.expandedIsOpen && a.t.g(d, !0);
                            }
                        }, {
                            name: 'Pointroll 2',
                            re: /pradi([A-Z0-9]+)/,
                            onFindAd: function (d, f, g) {
                                var c = d && d.innerHTML && d.innerHTML.match(this.re);
                                if (c) {
                                    var b = d.ownerDocument || document;
                                    d = b.getElementById('prf' + c[1]);
                                    var e;
                                    if (d) {
                                        var h = d.getElementsByTagName('embed'), l = d.getElementsByTagName('object'), p = d.getElementsByTagName('div');
                                        h && h[0] && a.a.bu(h[0]) ? e = h[0] : l && l[0] && a.a.bu(l[0]) ? e = l[0] : p && 0 < p.length && a.a.forEach(p, function (b) {
                                            b && 'mal-ad-container' === b.id && a.a.bt(b) && (e = b);
                                        });
                                        !e && d.children && 1 === d.children.length && (h = d.children[0]) && 1 === h.children.length && a.a.bt(h.children[0]) && (e = h.children[0]);
                                    }
                                    e || (c = b.getElementById('prw' + c[1])) && a.a.bt(c) && (e = c);
                                    if (e)
                                        return a.t.d[f] = a.t.e(e, f, g), a.t.d[f].uncle = d, e;
                                }
                            },
                            onNewAd: function (d, f) {
                                d && d.uncle && a.j.c(f, d.uncle);
                            }
                        }, {
                            name: 'Unicast 1',
                            re: /VwP(\d+)Div/,
                            onFindAd: function (d, f, g) {
                                if (d = a.t.c(d, this.re)) {
                                    var c = d.id.match(this.re);
                                    if (c && (c = document.getElementById('VwP' + c[1] + 'Div2')) && (c = c.getElementsByTagName('div'), 3 !== c.length && 1 === c.length)) {
                                        c = c[0];
                                        if (a.a.bt(c))
                                            return c;
                                        a.t.d[f] = a.t.e(d, f, g);
                                        return d;
                                    }
                                }
                            },
                            findExpanded: function (d) {
                                if ((d = d.id.match(this.re)) && (d = (d = document.getElementById('VwP' + d[1] + 'Div2').getElementsByTagName('div')) && d[0]) && a.a.bt(d))
                                    return d;
                            }
                        });
                        k.push({
                            name: 'Bleed',
                            onFindAd: function (d, f, g) {
                                if (a.u.a(['script[src*=\'jetpackdigital\']'], d)[0] && (d = a.c.e.document.getElementById('jpsuperheader')) && a.a.bt(d)) {
                                    var c = d.getElementsByTagName('object');
                                    if (c && 1 === c.length && c[0].id && c[0].id.match('jp_embed'))
                                        return c = c[0], a.t.d[f] = a.t.e(d, f, g), a.t.d[f].expandedEl = c, a.t.d[f].bgCheck = c && c.parentNode && c.parentNode.parentNode, d;
                                }
                            },
                            onLoop: function (d) {
                                var f = !1;
                                d.bgCheck.className && d.bgCheck.className.match('background1') && (f = !0);
                                f && !d.expandedIsOpen ? (a.t.f(d.expandedEl, null, null, d.adNum), a.j.b(B[d.adNum], stage.bgCheck)) : !f && d.expandedIsOpen && a.t.g(d, !0);
                            }
                        });
                        k.push({
                            name: 'JPD',
                            isFoundAdKnown: function (d, f, g) {
                                if (d.className && d.className.match('jpplatform'))
                                    var c = a.c.e.document.getElementById('jp_overlay'), b = !0;
                                else
                                    d.parentNode && d.parentNode.id && 'jpd_expfooter' === d.parentNode.id && (c = a.c.e.document.getElementById('jpd_expfooter_overlay'), b = !1);
                                if (c) {
                                    var e = a.a.getElementsByClassName('jppanel', 'DIV', c);
                                    if (e && 0 < e.length)
                                        return d = a.t.e(d, f, g), a.t.d[f] = d, a.t.d[f].overlay = c, a.t.d[f].panels = e, a.t.d[f].ignoreVideo = b, !0;
                                }
                            },
                            onLoop: function (d) {
                                var f, g = !1;
                                if (d.overlay && d.overlay.style && '-9999px' !== d.overlay.style.top) {
                                    if (!d.expandedEl || d.expandedEl && d.expandedEl.style && '-9999px' === d.expandedEl.style.top)
                                        d.ignoreVideo ? a.a.forEach(d.panels, function (a) {
                                            if (a && a.style && '-9999px' !== a.style.top && 0 === a.getElementsByTagName('video').length)
                                                return f = a, !1;
                                        }) : a.a.forEach(d.panels, function (a) {
                                            if (a && a.style && '-9999px' !== a.style.top)
                                                return f = a, !1;
                                        }), f && a.a.bt(f) && (d.expandedEl = f);
                                    d.expandedEl && (g = !0);
                                }
                                g && !d.expandedIsOpen ? a.t.f(d.expandedEl, 'div', null, d.adNum) : !g && d.expandedIsOpen && a.t.g(d, !0);
                            }
                        });
                        k.push({
                            name: 'Adform TwoElement',
                            isFoundAdKnown: function (d, f, g) {
                                var c = B[f];
                                if (c.adformCollapsedEl && c.adformExpandedEl)
                                    return d = a.t.e(d, f, g), a.t.d[f] = d, a.t.d[f].expandedEl = c.adformExpandedEl, a.t.d[f].hiddenClassRx = /(^| )adform-adbox-hidden($| )/, !0;
                            },
                            onLoop: function (d) {
                                var f = !1;
                                d.hiddenClassRx.test(d.collapsedEl.className) && (f = !0);
                                f && !d.expandedIsOpen ? a.t.f(d.expandedEl, null, null, d.adNum) : !f && d.expandedIsOpen && a.t.g(d, !0);
                            }
                        });
                        k.push({
                            name: 'Sizmek Leavebehind',
                            findCollapsedAd: function (d) {
                                if (!d)
                                    return !1;
                                if (d = d.getElementById('eyeDiv')) {
                                    var f, g = /ebAd\d+_contractedpanel_asset_.*/i;
                                    if ((d = d.getElementsByTagName('object')) && 0 < d.length && (a.a.forEach(d, function (a) {
                                            if (a && a.id.match(g))
                                                return f = a, !1;
                                        }), f))
                                        return f;
                                }
                                return !1;
                            },
                            findExpandedAd: function (d) {
                                if (!d)
                                    return !1;
                                if (d = d.getElementById('eyeDiv')) {
                                    var f, g = /ebAd\d+_expandedpanel\d*_asset_.*/i;
                                    if ((d = d.getElementsByTagName('object')) && 0 < d.length && (a.a.forEach(d, function (a) {
                                            if (a && a.id.match(g))
                                                return f = a, !1;
                                        }), f))
                                        return f;
                                }
                                return !1;
                            },
                            isAdExpanded: function (a) {
                                return this.findExpandedAd(a) ? !0 : !1;
                            },
                            onFindAd: function (d, f, g) {
                                if (!d || !a.u.a(['div#mmBillboardShim'], d)[0])
                                    return !1;
                                var c = a.c.e && a.c.e.document;
                                d = this.findCollapsedAd(c);
                                c = this.findExpandedAd(c);
                                if (d || c) {
                                    if (d && !d[D])
                                        return g = a.t.e(d, f, g), a.t.d[f] = g, d;
                                    if (c && a.a.bt(c))
                                        return g = a.t.e(c, f, g), a.t.d[f] = g, c;
                                }
                            },
                            afterAdStateCreated: function (d) {
                                d.pageDocument = a.c.e.document;
                                d.collapseUnloads = !0;
                            },
                            onLoop: function (d) {
                                var f = this.isAdExpanded(d.pageDocument);
                                !1 === d.expandedIsOpen && f ? (d.expandedEl = this.findExpandedAd(d.pageDocument), a.t.f(d.expandedEl, null, null, d.adNum)) : d.expandedIsOpen && 0 == f && (d.collapsedEl = this.findCollapsedAd(d.pageDocument), a.t.h(d.collapsedEl, null, null, d.adNum));
                            }
                        });
                        k.push({
                            name: 'Sizmek Pushdown',
                            findExpandedAd: function (d) {
                                if (!d)
                                    return !1;
                                if (d = d.getElementById('eyeDiv')) {
                                    var f, g = /ebad\d+_panel\d*_asset_.*/i;
                                    if ((d = d.getElementsByTagName('object')) && 0 < d.length && (a.a.forEach(d, function (a) {
                                            if (a && a.id.match(g))
                                                return f = a, !1;
                                        }), f))
                                        return f;
                                }
                                return !1;
                            },
                            isAdExpanded: function (a) {
                                return this.findExpandedAd(a) ? !0 : !1;
                            },
                            isFoundAdKnown: function (d) {
                                if (!d)
                                    return !1;
                                if (d.id && d.id.match('ebRichBannerFlash')) {
                                    d = L && L.parentNode && L.parentNode.getElementsByTagName('script');
                                    var f = !1;
                                    a.a.forEach(d, function (a) {
                                        if (a && a.src && a.src.match('ebExpBanner'))
                                            return f = !0, !1;
                                    });
                                    if (f)
                                        return !0;
                                }
                            },
                            afterAdStateCreated: function (d) {
                                d.pageDocument = a.c.e.document;
                            },
                            onLoop: function (d) {
                                var f = this.isAdExpanded(d.pageDocument);
                                !1 === d.expandedIsOpen && f ? (d.expandedEl = this.findExpandedAd(d.pageDocument), a.t.f(d.expandedEl, null, null, d.adNum)) : d.expandedIsOpen && 0 == f && a.t.g(d, !0);
                            }
                        });
                        k.push({
                            name: 'Celtra Banner/Video',
                            findExpandedAd: function (d) {
                                if (d.expandedEl)
                                    return d.expandedEl;
                                var f, g, c;
                                if ('banner' === d.expandType) {
                                    g = a.v.a(d.pageDoc.body, a.v.b);
                                    for (var b = g.length - 1; 0 <= b; b--)
                                        if ((c = g[b].contentWindow) && c.runtimeParams && c.runtimeParams.placementId && c.runtimeParams.clientTimestamp && c.runtimeParams.placementId === d.celtraId && c.runtimeParams.clientTimestamp === d.celtraTimestamp && (f = c.document && c.document.getElementById('celtra-modal')) && a.a.bt(f))
                                            return d.parentFrame || (d.parentFrame = a.g.g(f)), d.expandedEl = f;
                                } else if ('video' === d.expandType) {
                                    g = d.pageDoc.getElementsByTagName('video');
                                    if (d.adWin && d.adWin.videoContext && d.adWin.videoContext.url) {
                                        var e = d.adWin.videoContext.url;
                                        a.a.forEach(g, function (a) {
                                            if (a && a.src === e)
                                                return f = a, !1;
                                        });
                                    } else
                                        a.a.forEach(g, function (a) {
                                            if (a && a.src && a.src.match && a.src.match('celtra'))
                                                return f = a, !1;
                                        });
                                    if (f && a.a.bt(f))
                                        return d.expandedEl = f;
                                }
                                return !1;
                            },
                            isAdExpanded: function (d) {
                                var f = this.findExpandedAd(d);
                                return f ? (d = d.parentFrame || a.g.g(f)) && d.style && 'none' === d.style.display ? !1 : !0 : !1;
                            },
                            isFoundAdKnown: function (d, f, g) {
                                if (!d)
                                    return !1;
                                if (d.id && d.id.match('celtra') || d.className && d.className.match('celtra')) {
                                    var c = d.ownerDocument && (d.ownerDocument.defaultView || d.ownerDocument.parentWindow);
                                    if (c && c.ExpandableBanner && c.runtimeParams && c.runtimeParams.placementId && c.runtimeParams.clientTimestamp)
                                        return d = a.t.e(d, f, g), a.t.d[f] = d, a.t.d[f].expandType = 'banner', a.t.d[f].pageDoc = a.c.e.document, a.t.d[f].celtraId = c.runtimeParams.placementId, a.t.d[f].celtraTimestamp = c.runtimeParams.clientTimestamp, !0;
                                    if (c && c.VideoContext)
                                        return d = a.t.e(d, f, g), a.t.d[f] = d, a.t.d[f].expandType = 'video', a.t.d[f].pageDoc = a.c.e.document, a.t.d[f].adWin = c, !0;
                                }
                            },
                            onLoop: function (d) {
                                var f = this.isAdExpanded(d);
                                f && !d.expandedIsOpen ? a.t.f(d.expandedEl, 'div', null, d.adNum) : !f && d.expandedIsOpen && a.t.g(d, !0);
                            }
                        });
                    };
                }(u));
                (function (a) {
                    function k(a, b, c) {
                        this.collapsedEl = a;
                        this.expandedEl = null;
                        this.expandedIsOpen = !1;
                        this.adNum = b;
                        this.configIndex = c;
                    }
                    function d(b, c) {
                        var d = a.t.d[c];
                        if (!0 !== d.findingExpanded) {
                            d.findingExpanded = !0;
                            var g = function () {
                                    d.findingExpanded = !1;
                                }, k = B[c].aa;
                            a.l.k(function () {
                                var d = b.findExpanded(k);
                                if (d)
                                    return a.v.c(d, c, f, !1, g), !0;
                            }, 5, 500, g);
                        }
                    }
                    function f(b, c, d, g) {
                        b[M] = g;
                        b[D] = !0;
                        c = B[g];
                        g = a.t.d[g];
                        g.expandedIsOpen = !0;
                        a.a.bv(b, c);
                        g.findingExpanded = !1;
                        return !0;
                    }
                    function g(b, c) {
                        a.a.bv(b.collapsedEl, B[b.adNum], !0);
                        b.expandedIsOpen = !1;
                        c || (b.expandedEl && (b.expandedEl[M] = void 0, b.expandedEl[D] = void 0), b.expandedEl = null);
                    }
                    function c(b, c, d, g) {
                        if (!b)
                            return !1;
                        b[M] = g;
                        b[D] = !0;
                        a.t.d[g].expandedIsOpen = !1;
                        a.a.bv(b, B[g]);
                        return !0;
                    }
                    a.t = {};
                    a.t.i = 'bac';
                    var b = [];
                    a.t.a = b;
                    a.t.d = {};
                    a.t.e = function (a, b, c) {
                        return new k(a, b, c);
                    };
                    a.t.j = function (b) {
                        var c = a.t.d[b.zr];
                        c && (c.collapsedEl = null, c.expandedEl = null, delete a.t.d[b.zr]);
                    };
                    a.t.k = function (b) {
                        return (b = a.t.d[b]) && !0 === b.expandedIsOpen;
                    };
                    a.t.l = function (b) {
                        return (b = a.t.d[b]) && !0 === b.collapseUnloads;
                    };
                    a.t.m = function (e, h) {
                        e = e.replace(/^on/, '');
                        var f = a.t.d[h], p = B[h];
                        if (f) {
                            var k = b[f.configIndex];
                            if ('mousedown' === e && k.findExpanded && !f.expandedIsOpen)
                                d(k, h);
                            else if ('mouseover' === e && k.onMouseOver && !f.expandedIsOpen)
                                k.onMouseOver(f);
                            else if ('loop' === e && k.onLoop)
                                k.onLoop(f);
                            else if ('departed' === e && f.expandedIsOpen)
                                g(f);
                            else if ('collapseUnloads' === e && f.expandedIsOpen)
                                c(f.collapsedEl, null, null, h);
                            else if ('newad' === e && k.onNewAd)
                                k.onNewAd(f, p);
                        }
                    };
                    a.t.n = function (e, c) {
                        for (var d = c.adNum, g = 0; g < b.length; g++) {
                            var f = b[g], k = f.onFindAd && f.onFindAd(e, d, g);
                            if (k)
                                return a.k.a.azsx('adKilled', a.w.a, {
                                    once: !0,
                                    condition: function (a) {
                                        return a.zr == d;
                                    }
                                }), a.t.d[d] && f.afterAdStateCreated && f.afterAdStateCreated(a.t.d[d]), c.activeConfig = f.name, k;
                        }
                    };
                    a.t.o = function (e) {
                        if (e !== a.t.i && e.aa && e.ao && !a.t.d[d])
                            for (var c = e.aa, d = e.ao.adNum, g = 0; g < b.length; g++) {
                                var f = b[g];
                                if (f && f.isFoundAdKnown && f.isFoundAdKnown(c, d, g)) {
                                    a.k.a.azsx('adKilled', a.w.a, {
                                        once: !0,
                                        condition: function (a) {
                                            return a.zr == e.zr;
                                        }
                                    });
                                    a.t.d[d] || (c = new k(c, d, g), a.t.d[d] = c);
                                    f.afterAdStateCreated && f.afterAdStateCreated(a.t.d[d]);
                                    e.ao.activeConfig = f.name;
                                    break;
                                }
                            }
                    };
                    a.t.p = function (a) {
                        return 'IMG' === a.tagName && a.id && a.id.match(/^pradi[0-9A-Z]+$/) && a.onload && 'function' === typeof a.onload.toString && a.onload.toString().match(/shockwave/);
                    };
                    a.t.q = function (b, c) {
                        a.t.k(c.zr) && (a.t.l(c.zr) ? a.t.m('collapseUnloads', c.zr) : a.t.m('departed', c.zr), b.shouldKillAd = !1);
                    };
                    a.k.a.azsx('beforeAdKilled', a.t.q, { priority: 5 });
                    a.t.b = function (e, d) {
                        var l = [e[0]], p = [e[1]], t = e[2], q = e[3] && [e[3]], y = e[4] && [e[4]], x = e[5] && [e[5]], n = e[6], m = e[7], I = !1, G = !1, J = !1, C = !1, z = !1, K = !1, E = !1, P, v = P = !1, H = !1, r = !1, u = !1, w = !1, Q = !1;
                        t && (a.a.ax(t, 'checkHiddenStyles') && (I = !0), a.a.ax(t, 'noInitialValidation') && (G = !0), a.a.ax(t, 'noLoopValidation') && (J = !0), a.a.ax(t, 'noCollapseValidation') && (C = !0), a.a.ax(t, 'runWithoutExpand') && (z = !0), a.a.ax(t, 'collapseUnloads') && (K = !0), a.a.ax(t, 'expandUnloads') && (E = !0), a.a.ax(t, 'useIsFoundAdKnown') && (P = !0), a.a.ax(t, 'setCollapseProxyInLoop') && (v = !0), a.a.ax(t, 'setExpandProxyInLoop') && (H = !0), a.a.ax(t, 'findExpandInLoop') && (z = r = !0), a.a.ax(t, 'addExpandTag') && (u = !0), a.a.ax(t, 'setIframeAssetType') && (w = !0), a.a.ax(t, 'preferCollapse') && (Q = !0));
                        b.push({
                            name: d,
                            isFoundAdKnown: function (b, c, e) {
                                if (!P || !b)
                                    return !1;
                                if (n && m) {
                                    if ((b = (b = B[c].ao) && b[n]) && !a.a.ax(m, b))
                                        return !1;
                                } else if (a.u.a(l, b)[0]) {
                                    if (z)
                                        return a.t.d[c] = new k(b, c, e), a.t.d[c].collapsedQuery = l, a.t.d[c].expandedQuery = p, a.t.d[c].searchableEl = b, a.t.d[c].checkHiddenStyles = I, a.t.d[c].collapseUnloads = K, a.t.d[c].noLoopValidation = J, a.t.d[c].expandUnloads = E, a.t.d[c].expandedSelector = q, a.t.d[c].collapseProxyEl = y, a.t.d[c].expandProxyEl = x, a.t.d[c].collapseUnloads = K, a.t.d[c].setCollapseProxyInLoop = v, a.t.d[c].setExpandProxyInLoop = H, a.t.d[c].findExpandInLoop = r, a.t.d[c].addExpandTag = u, a.t.d[c].setIframeAssetType = w, a.t.d[c].preferCollapse = Q, y && a.u.b(y, B[c], b), !0;
                                    var d = a.u.a(p, b)[0];
                                    if (d && (G || a.a.bu(d)))
                                        return a.t.d[c] = new k(b, c, e), a.t.d[c].collapsedQuery = l, a.t.d[c].expandedQuery = p, a.t.d[c].searchableEl = b, a.t.d[c].checkHiddenStyles = I, a.t.d[c].collapseUnloads = K, a.t.d[c].noLoopValidation = J, a.t.d[c].expandUnloads = E, a.t.d[c].expandedSelector = q, a.t.d[c].expandedEl = d, a.t.d[c].collapseProxyEl = y, a.t.d[c].expandProxyEl = x, a.t.d[c].collapseUnloads = K, a.t.d[c].setCollapseProxyInLoop = v, a.t.d[c].setExpandProxyInLoop = H, a.t.d[c].findExpandInLoop = r, a.t.d[c].addExpandTag = u, a.t.d[c].setIframeAssetType = w, a.t.d[c].preferCollapse = Q, y && a.u.b(y, B[c], b), x && a.u.b(x, B[c], d), !0;
                                }
                            },
                            onFindAd: function (b, c, e) {
                                if (P)
                                    return !1;
                                var d = a.u.a(l, b)[0];
                                if (d && C && !d[D] || a.a.bt(d)) {
                                    if (z)
                                        return a.t.d[c] = new k(d, c, e), a.t.d[c].collapsedQuery = l, a.t.d[c].expandedQuery = p, a.t.d[c].searchableEl = b, a.t.d[c].checkHiddenStyles = I, a.t.d[c].collapseUnloads = K, a.t.d[c].noLoopValidation = J, a.t.d[c].expandUnloads = E, a.t.d[c].expandedSelector = q, a.t.d[c].collapseProxyEl = y, a.t.d[c].expandProxyEl = x, a.t.d[c].collapseUnloads = K, a.t.d[c].setCollapseProxyInLoop = v, a.t.d[c].setExpandProxyInLoop = H, a.t.d[c].findExpandInLoop = r, a.t.d[c].addExpandTag = u, a.t.d[c].setIframeAssetType = w, a.t.d[c].preferCollapse = Q, d;
                                    var h = a.u.a(p, b)[0];
                                    if (h && (G || a.a.bu(h)))
                                        return a.t.d[c] = new k(d, c, e), a.t.d[c].collapsedQuery = l, a.t.d[c].expandedQuery = p, a.t.d[c].searchableEl = b, a.t.d[c].checkHiddenStyles = I, a.t.d[c].collapseUnloads = K, a.t.d[c].noLoopValidation = J, a.t.d[c].expandUnloads = E, a.t.d[c].expandedSelector = q, a.t.d[c].expandedEl = h, a.t.d[c].collapseProxyEl = y, a.t.d[c].expandProxyEl = x, a.t.d[c].collapseUnloads = K, a.t.d[c].setCollapseProxyInLoop = v, a.t.d[c].setExpandProxyInLoop = H, a.t.d[c].findExpandInLoop = r, a.t.d[c].addExpandTag = u, a.t.d[c].setIframeAssetType = w, a.t.d[c].preferCollapse = Q, d;
                                }
                            },
                            onNewAd: function (b, c) {
                                b.collapseProxyEl && !b.useIsFoundAdKnown && a.u.b(b.collapseProxyEl, c, c.aa);
                            },
                            onLoop: function (b) {
                                if (b.stopLoop)
                                    return !1;
                                var e = !1;
                                b.setIframeAssetType && (B[b.adNum].hasIframeListener = !0, b.setIframeAssetType = !1);
                                if (b.expandUnloads) {
                                    var d = a.u.a(b.expandedQuery, b.searchableEl)[0];
                                    b.expandedEl = d;
                                }
                                b.findExpandInLoop && !b.expandedEl && (d = a.u.a(b.expandedQuery, b.searchableEl)[0], b.expandedEl = d);
                                if (b.expandedEl && (b.noLoopValidation || a.a.bu(b.expandedEl)))
                                    if (b.checkHiddenStyles && (b.expandedEl.style && 'hidden' === b.expandedEl.style.visibility || 'none' === b.expandedEl.style.display) || '0' === a.a.bd(b.expandedEl, 'opacity'))
                                        e = !1;
                                    else if (b.expandedSelector && !a.u.a(b.expandedSelector, b.expandedEl)[0])
                                        e = !1;
                                    else if (e = !0, b.setCollapseProxyInLoop && b.collapseProxyEl && !b.collapseProxySet && (b.collapseProxySet = a.u.b(b.collapseProxyEl, B[b.adNum], b.collapsedEl)), b.setExpandProxyInLoop && b.expandProxyEl && !b.expandProxySet && (b.expandProxySet = a.u.b(b.expandProxyEl, B[b.adNum], b.expandedEl)), b.addExpandTag && b.expandedEl.parentNode && (d = L && L.src && L.src.replace(/moatClientLevel4=[^&]*&/, 'moatClientLevel4=Expanded&')))
                                        return a.a.cn(d, b.expandedEl.parentNode), b.addExpandTag = !1, b.stopLoop = !0, !1;
                                b.preferCollapse && a.a.bu(b.collapsedEl) && (e = !1);
                                e && !b.expandedIsOpen ? f(b.expandedEl, 'div', null, b.adNum) : !e && b.expandedIsOpen && (b.collapseUnloads ? (e = a.u.a(b.collapsedQuery, b.searchableEl)[0], c(e, null, null, b.adNum)) : g(b, !0));
                            }
                        });
                    };
                    a.t.f = f;
                    a.t.g = g;
                    a.t.h = c;
                    a.t.c = function (b, c, d) {
                        d = d || {};
                        var g = b.getElementsByTagName('div');
                        d.inclSearchableEl && (g = a.a.cg(g), g.push(b));
                        for (b = 0; b < g.length; b++) {
                            var f = g[b];
                            if (f.id.match(c) && (d.anySize || a.a.bt(f)))
                                return f;
                        }
                    };
                    a.s.a();
                }(u));
                (function (a) {
                    function k(b, c, e, d, h) {
                        ('remove' === h ? a.l.d : a.l.c)(b, c, function (c) {
                            c = c || this.event;
                            var d = c.currentTarget || b;
                            try {
                                var h = d[M];
                            } catch (g) {
                                h = d[M];
                            }
                            if (h = B[h]) {
                                var f;
                                f = c;
                                var n = d.getBoundingClientRect();
                                f = -1 != f.type.indexOf('touch') && f.changedTouches && 0 < f.changedTouches.length ? {
                                    x: parseInt(f.changedTouches[0].clientX - n.left, 10),
                                    y: parseInt(f.changedTouches[0].clientY - n.top, 10)
                                } : {
                                    x: parseInt(f.clientX - n.left, 10),
                                    y: parseInt(f.clientY - n.top, 10)
                                };
                                h.aj = f.x;
                                h.ak = f.y;
                                h.dm || (h.cb = 2 == a.focus.getFocusMethod() ? h.counters.laxDwell.tCur : h.counters.strictDwell.tCur, h.dm = 1);
                                e.call(b, c, d, h);
                            }
                        }, 'genmouse');
                    }
                    function d(b, e, d) {
                        k(b, 'click', t, e, d);
                        k(b, 'mousedown', g, e, d);
                        U ? a.c.dy && k(b, 'touchstart', c, e, d) : (k(b, 'mousemove', f, e, d), k(b, 'mouseover', l, e, d), k(b, 'mouseout', p, e, d));
                    }
                    function f(b, c, e) {
                        a.k.a.zaxs('mouseEventOnAd', e);
                        b = b || window.event;
                        c = b.target || b.srcElement;
                        if (1 != e.ao.skin || !a.x.a(c, e.adContent, b)) {
                            if (!U && (e.aj !== e.al || e.ak !== e.am)) {
                                a.r.d(b, e);
                                a.r.f(b, e);
                                a.r.g(b, e);
                                a.r.i(b, e);
                                a.r.h(b, e);
                                a.r.b(e);
                                a.r.c(e);
                                a.r.e(e);
                                0 === e.ar.length && (e.ai = y(e));
                                if (100 > e.ar.length || 100 > e.as.length || 100 > e.at.length)
                                    e.ar.push(e.aj), e.as.push(e.ak), e.at.push(a.a.bb(e));
                                e.al = e.aj;
                                e.am = e.ak;
                            }
                            e.ai !== y(e) && 1 < e.ar.length && q(e, 'onMouseMove');
                        }
                    }
                    function g(b, c, e) {
                        a.k.a.zaxs('mouseEventOnAd', e);
                        b = b || window.event;
                        c = b.target || b.srcElement;
                        1 == e.ao.skin && a.x.a(c, e.adContent, b) || (c = { e: 2 }, c.q = e.aq[2]++, c.x = e.aj, c.y = e.ak, a.y.a(e, c), a.a.ea([
                            'feather',
                            'display',
                            'video'
                        ], e.ao) && a.t.m(b.type, e.zr));
                    }
                    function c(b, c, e) {
                        a.k.a.zaxs('mouseEvent', e);
                        a.k.a.zaxs('mouseEventOnAd', e);
                        b = b || window.event;
                        c = b.target || b.srcElement;
                        if (1 != e.ao.skin || !a.x.a(c, e.adContent, b)) {
                            b = { e: 23 };
                            b.q = e.aq[23]++;
                            b.x = e.aj;
                            b.y = e.ak;
                            c = new A().getTime();
                            if ('undefined' === typeof e.ct)
                                e.ct = c;
                            else {
                                var d = c - e.ct;
                                e.ct = c;
                                e.cu = w.min(e.cu, d) || d;
                            }
                            b.bz = void 0;
                            a.y.a(e, b);
                        }
                    }
                    function b(b, c, d) {
                        var g;
                        if (2 == b.an || b.hasIframeListener)
                            g = !0;
                        if (g) {
                            g = c.e;
                            var f = b.ck;
                            f == a.r.a.f.a && 6 === g ? (e(b, 0), b.cl = a.a.bb(b), b.ck = a.r.a.f.b) : f == a.r.a.f.b ? 22 === g ? (h(b, c), e(b, d), b.cl = a.a.bb(b)) : 7 === g && (1000 < a.a.bb(b) - b.cl ? (clearTimeout(b.cm), c.e = 22, h(b, c), b.cn = 0, b.ck = a.r.a.f.a) : b.ck = a.r.a.f.c) : f == a.r.a.f.c && (6 == g ? (1000 < a.a.bb(b) - b.cl && (clearTimeout(b.cm), b.cn = 0, b.cl = a.a.bb(b), e(b, 0)), b.ck = a.r.a.f.b) : 22 == g && (h(b, c), b.ck = a.r.a.f.a, b.cn = 0));
                        }
                    }
                    function e(c, e) {
                        if (a.focus.checkFocus()) {
                            var d = 5 > c.cn ? 1000 : 2 * e, h = { e: 22 };
                            c.cm = a.l.f(function () {
                                b(c, h, d);
                            }, d);
                        } else
                            b(c, { e: 7 }, 0);
                    }
                    function h(b, c) {
                        c.q = b.aq[c.e]++;
                        c.m = a.a.bb(b);
                        b.cl = c.m;
                        a.y.a(b, c);
                        b.cn++;
                    }
                    function l(c, e, d) {
                        a.k.a.zaxs('mouseEvent', d);
                        a.k.a.zaxs('mouseEventOnAd', d);
                        c = c || window.event;
                        e = c.target || c.srcElement;
                        1 == d.ao.skin && a.x.a(e, d.adContent, c) || (a.r.d(c, d), a.r.f(c, d), a.r.g(c, d), a.r.i(c, d), a.r.h(c, d), b(d, { e: 6 }, 0), a.a.ea([
                            'feather',
                            'display',
                            'video'
                        ], d.ao) && a.t.m(c.type, d.zr));
                    }
                    function p(c, e, d) {
                        a.k.a.zaxs('mouseEventOnAd', d);
                        c = c || window.event;
                        e = c.target || c.srcElement;
                        1 == d.ao.skin && a.x.a(e, d.adContent, c) || (a.r.d(c, d), a.r.f(c, d), a.r.g(c, d), a.r.i(c, d), a.r.h(c, d), b(d, { e: 7 }, 0));
                    }
                    function t(b, c, e) {
                        a.k.a.zaxs('mouseEvent', e);
                        a.k.a.zaxs('mouseEventOnAd', e);
                        b = b || window.event;
                        c = b.target || b.srcElement;
                        1 == e.ao.skin && a.x.a(c, e.adContent, b) || (b = { e: 3 }, b.q = e.aq[3]++, b.x = e.aj, b.y = e.ak, a.y.a(e, b));
                    }
                    function q(b, c) {
                        b.ai = y(b);
                        var e = { e: 1 };
                        e.q = b.aq[1]++;
                        e.x = b.ar.join('a');
                        e.y = b.as.join('a');
                        for (var d = a.a.bb(b), h = b.at, g = [], f = 0; f < h.length; f++)
                            isNaN(h[f]) || g.push(w.abs(h[f] - d));
                        e.c = g.join('a');
                        e.m = d;
                        a.y.a(b, e);
                        b.ar = [];
                        b.as = [];
                        b.at = [];
                    }
                    function y(b) {
                        return w.floor(a.a.bb(b) / 1000);
                    }
                    a.j = {};
                    a.j.d = function (b) {
                        if (a.c.dx) {
                            a.k.a.azsx('adKilled', a.j.e, {
                                once: !0,
                                condition: function (a) {
                                    return b.zr == a.zr;
                                }
                            });
                            b.mouseEventElements || (b.mouseEventElements = []);
                            var c = b.aa;
                            a.j.b(b, c);
                            b.mouseEventElements.push(c);
                        }
                    };
                    a.j.b = function (a, b) {
                        if (a) {
                            var c = b || a.aa;
                            c && d(c, a.zr);
                        }
                    };
                    a.j.a = function (a, b) {
                        if (a) {
                            var c = b || a.aa;
                            c && d(c, a.zr, 'remove');
                        }
                    };
                    a.j.f = function (b) {
                        for (var c in B)
                            B.hasOwnProperty(c) && (b = B[c]) && (a.r.g({ type: 'scooper' }, b), a.r.i({ type: 'scooper' }, b), a.r.h({ type: 'scooper' }, b), 1 < b.ar.length && b.ai !== y(b) && q(b, 'scooper'));
                    };
                    a.j.c = function (b, c) {
                        if (!c || !b || 'number' === typeof c[M])
                            return !1;
                        !b.hasIframeListener && c.tagName && 'iframe' === c.tagName.toLowerCase() && (b.hasIframeListener = !0);
                        !b.hasNonIframeListener && c.tagName && 'iframe' !== c.tagName.toLowerCase() && (b.hasNonIframeListener = !0, b.an = a.d.d(c));
                        c[M] = b.zr;
                        a.j.b(b, c);
                        b.mouseEventElements || (b.mouseEventElements = []);
                        b.mouseEventElements.push(c);
                        return b.proxyTrackingEnabled = !0;
                    };
                    a.j.e = function (b) {
                        a.a.forEach(b.mouseEventElements, function (c) {
                            try {
                                a.j.a(b, c), c[M] = null;
                            } catch (e) {
                            }
                        });
                    };
                }(u));
                (function (a) {
                    function k(b, c, e) {
                        return e ? new a.z.j(b.parentNode, c) : new a.z.j(b, c);
                    }
                    function d(a, b) {
                        if (!a)
                            return !1;
                        var c = 'number' == typeof a.zr, e, d;
                        c ? (e = a.aa, d = a._calcVideoBasedOnContainer) : e = a;
                        e = k(e, b, d);
                        d = e.height;
                        var h = e.width;
                        c && (a.AD_RECT = e);
                        c = e.calcArea();
                        if (0 === c)
                            return {
                                area: c,
                                visibleArea: 0,
                                percv: 0
                            };
                        var f = g(e), l = f.visibleRect.calcArea(), p = l / c, t;
                        a: {
                            var q = f.cumulRect, v = f.cumulRect.getViewportRect();
                            if (0 > q.top && 0 < q.bottom)
                                t = -q.top;
                            else if (0 <= q.top && q.top <= v.height)
                                t = 0;
                            else {
                                t = {
                                    yMin: -1,
                                    yMax: -1
                                };
                                break a;
                            }
                            if (0 <= q.bottom && q.bottom <= v.height)
                                q = q.height;
                            else if (q.bottom > v.height && q.top < v.height)
                                q = q.height - (q.bottom - v.height);
                            else {
                                t = {
                                    yMin: -1,
                                    yMax: -1
                                };
                                break a;
                            }
                            t = {
                                yMin: t,
                                yMax: q
                            };
                        }
                        return {
                            area: c,
                            visibleArea: l,
                            visibleRect: f.visibleRect,
                            cumulRect: f.cumulRect,
                            percv: p,
                            yMinMax: t,
                            elGeo: {
                                elHeight: d,
                                elWidth: h,
                                foldTop: f.cumulRect.top,
                                totalArea: f.parentArea
                            },
                            rect: e.rect
                        };
                    }
                    function f(a, b) {
                        for (var c = [], e = 0; e < b.length; e++)
                            c.push(a(b[e]));
                        return c;
                    }
                    function g(b) {
                        var c, e = [], d = a.a.dg(b.el, b.win, b && b.el && b.el._moatParentCount);
                        d && (e = f(function (b) {
                            return new a.z.j(b);
                        }, d));
                        e.unshift(b);
                        d = e.length;
                        b = new a.z.j(b.el, a.c.e);
                        for (var h = 0; h < d; h++) {
                            var g = e[h];
                            0 === h ? c = g : (c.changeReferenceFrame(g), b.changeReferenceFrame(g));
                            g = g.getViewportRect(h < d - 1 ? e[h + 1] : !1);
                            c = a.z.m(c, g);
                        }
                        return {
                            visibleRect: c,
                            cumulRect: b,
                            parentArea: e[e.length - 1].calcArea()
                        };
                    }
                    function c(a, b, c, e) {
                        a = w.max(a, c);
                        b = w.min(b, e);
                        return b > a ? [
                            a,
                            b
                        ] : [
                            0,
                            0
                        ];
                    }
                    function b(b) {
                        function c(a, b) {
                            return {
                                top: w.max(a.top, b.top),
                                right: w.max(a.right, b.right),
                                bottom: w.min(a.bottom, b.bottom),
                                left: w.min(a.left, b.left)
                            };
                        }
                        var e, d, h;
                        e = [];
                        d = [];
                        if (!a.a.f(b) || 0 === b.length)
                            return !1;
                        a.a.forEach(b, function (a) {
                            a.cumulRect && a.visibleRect && (d.push(a.cumulRect), e.push(a.visibleRect));
                        });
                        b = a.a.reduce(d, c);
                        h = a.a.reduce(e, c);
                        return {
                            elRect: b,
                            visibleRect: h
                        };
                    }
                    function e(b) {
                        return b && b.nodeName && 'map' === b.nodeName.toLowerCase() ? !0 : (b = a.a.cb(b)) && (1 >= b.width || 1 >= b.height) ? !0 : !1;
                    }
                    function h(b) {
                        return b ? 0 === a.a.de({ aa: b }, !0, !0) ? !0 : 0 === a.a.dd(b, !0) : !1;
                    }
                    function l(b, c, g, f, l) {
                        function p(a) {
                            return (a = a.cumulRect) ? 100 <= a.width && 50 <= a.height : !1;
                        }
                        var k = {
                                IFRAME: !0,
                                VIDEO: !0,
                                OBJECT: !0,
                                EMBED: !0,
                                IMG: !0
                            }, t = d(b);
                        if (h(b) || !p(t))
                            return !1;
                        var q = [], E = B[l];
                        g.elementsFromPoint && !E.elementsFromPointCache ? (c = g.elementsFromPoint(c.m[0], c.m[1]) || [], E.elementsFromPointCache = c, q = q.concat(Array.prototype.slice.call(c))) : (c = a.a.cx(c.m[0], c.m[1], g), E.elementsFromPointCache && (q = q.concat(Array.prototype.slice.call(E.elementsFromPointCache))), c && (q = [c].concat(q)));
                        E = q.indexOf(b);
                        if (-1 == E)
                            return !1;
                        q = q.slice(0, E);
                        for (E = 0; E < q.length; E++)
                            if ((g = (c = q[E]) && c !== f && c[M] !== l && k[c.nodeName] && !a.a.cr(c, b) && !a.a.cr(b, c) && !e(c) && !h(c)) && (c = d(c)) && p(c) && t && c && 0.5 <= a.z.q(t.cumulRect, c.cumulRect))
                                return !0;
                        return !1;
                    }
                    function p(a) {
                        var b = 0.01 * a.width, c = 0.01 * a.height;
                        return {
                            tl: [
                                a.left + b,
                                a.top + c
                            ],
                            m: [
                                a.left + (a.right - a.left) / 2,
                                a.top + (a.bottom - a.top) / 2
                            ],
                            br: [
                                a.right - b,
                                a.bottom - c
                            ]
                        };
                    }
                    function t(b, c) {
                        var e = [], d = a.g.h(b);
                        d && (e = f(function (c) {
                            var e = g(new a.z.j(b)).visibleRect;
                            new a.z.j(c);
                            return {
                                rect: e,
                                frame: c,
                                doc: c.ownerDocument
                            };
                        }, d));
                        e.unshift({
                            rect: g(new a.z.j(b)).visibleRect,
                            frame: b,
                            doc: b.ownerDocument
                        });
                        for (d = 0; d < e.length; d++) {
                            var h = p(e[d].rect), k = !1;
                            if (0 != h.tl[0] || 0 != h.tl[1] || 0 != h.br[0] || 0 != h.br[1])
                                k = !0;
                            if (k && l(b, h, e[d].doc, e[d].frame, c))
                                return !0;
                        }
                        return !1;
                    }
                    a.z = {};
                    var q = a.c.c, y = {};
                    a.z.a = 0.5;
                    a.z.b = 0.3;
                    a.z.c = 0.98;
                    a.z.d = void 0;
                    a.z.e = function (b, c) {
                        c = c || !1;
                        return function (e, h) {
                            var g = e.ao.skin ? a.z.f(e, h) : d(e, h);
                            g.isVisible = c ? g.percv > b : g.percv >= b;
                            g.elGeo && (g.elGeo.threshold = b);
                            return g;
                        };
                    };
                    a.z.f = function (c, e) {
                        function h() {
                            if (c.isMultipartAd && c.multipartComponents && 0 < c.multipartComponents.length) {
                                for (var a, b = 0, g = 0; g < c.multipartComponents.length; g++) {
                                    var f = d(c.multipartComponents[g], e);
                                    f.visibleArea >= b && (b = f.visibleArea, a = c.multipartComponents[g]);
                                }
                                return d(a, e);
                            }
                        }
                        function g() {
                            if (c.isCompositeAd && c.components && 1 < c.components.length) {
                                for (var h = {
                                            area: 0,
                                            visibleArea: 0,
                                            percv: 0,
                                            visibleRect: !1,
                                            cumulRect: !1,
                                            yMinMax: !1,
                                            elGeo: !1,
                                            rect: !1,
                                            componentResults: []
                                        }, f, l = 0; l < c.components.length; l++)
                                    f = d(c.components[l], e), h.area += f.area, h.visibleArea += f.visibleArea, h.componentResults.push(f);
                                h.percv = h.visibleArea / h.area;
                                c.compositeAdAreaPx = h.area;
                                (f = b(h.componentResults)) && 'strict' === a.w.b(c.zr) && a.k.a.zaxs('rectsAvailable', c.zr, f.elRect, f.visibleRect);
                            } else
                                h = d(c, e);
                            return h;
                        }
                        c.viewabilityMethod.strict || (c.viewabilityMethod.strict = 1);
                        if (1 == c.ao.skin) {
                            var f = {}, l = a.c.e.scrollY || a.c.e.document.documentElement.scrollTop;
                            if ('width' == a.x.b && a.x.c <= c.adContent && 45 < l || !a.focus.pageIsVisible())
                                return f.isVisible = !1, f.isFullyVisible = !1, f.percv = 0, f;
                            f.isVisible = !0;
                            f.isFullyVisible = !0;
                            f.isDentsuVisible = !0;
                            f.percv = 1;
                            a.k.a.zaxs('adEdgesViewStatus', c.zr, {
                                topLeft: !0,
                                topRight: !0,
                                bottomLeft: !0,
                                bottomRight: !0
                            });
                            return f;
                        }
                        f = c.isMultipartAd ? h(c, e) : c.isCompositeAd ? g(c, e) : d(c, e);
                        'strict' === a.w.b(c.zr) && a.c.c && !a.c.ce() && a.k.a.zaxs('rectsAvailable', c.zr, f.cumulRect, f.visibleRect);
                        var l = a.z.g(f, c), p = a.z.c;
                        f.isVisible = f.percv >= l;
                        f.isFullyVisible = f.percv >= p;
                        f.elGeo && (f.elGeo.threshold = l);
                        c.videoIsFullscreen && 0 < f.percv && (f.isVisible = !0);
                        0.8 <= f.percv && (f.isDentsuVisible = !0);
                        a.z.d ? f.percv > a.z.d && (a.z.d = f.percv) : a.z.d = f.percv;
                        c.AD_RECT = f && f.rect;
                        return f;
                    };
                    a.z.g = function (b, c) {
                        return a.aa.a(b.area) ? (c.viewstats || (c.viewstats = {}), c.viewstats.isBigAd = !0, a.z.b) : a.z.a;
                    };
                    a.z.h = function () {
                        return q;
                    };
                    a.z.i = d;
                    a.z.k = k;
                    a.z.l = a.c.r;
                    a.z.j = function (b, c, e, d) {
                        try {
                            this.rect = e || b.getBoundingClientRect && b.getBoundingClientRect() || {};
                        } catch (h) {
                            this.rect = e || b && {
                                top: b.offsetTop,
                                left: b.offsetLeft,
                                width: b.offsetWidth,
                                height: b.offsetHeight,
                                bottom: b.offsetTop + b.offsetHeight,
                                right: b.offsetLeft + b.offsetWidth
                            } || {};
                        }
                        e = 'left right top bottom width height'.split(' ');
                        for (d = 0; d < e.length; d++) {
                            var g = e[d];
                            this[g] = this.rect[g];
                        }
                        b && b.CLIPCHECKINGTARGET && b.CLIPCHECKINGTARGET.style && 'absolute' === b.CLIPCHECKINGTARGET.style.position && (e = a.a.ct(b.CLIPCHECKINGTARGET.style.clip)) && (this.right = this.left + e.right, this.left += e.left, this.bottom = this.top + e.bottom, this.top += e.top);
                        this.width = this.right - this.left;
                        this.height = this.bottom - this.top;
                        this.el = b;
                        this.win = c || b && a.a.be(b);
                        this.changeReferenceFrame = function (a) {
                            this.left += a.left;
                            this.right += a.left;
                            this.top += a.top;
                            this.bottom += a.top;
                        };
                        this.calcArea = function () {
                            return (this.right - this.left) * (this.bottom - this.top);
                        };
                        this.getViewportRect = function (b) {
                            var c = a.c.r(this.win);
                            b && (b.width < c.width && (c.width = b.width, c.right = c.left + c.width), b.height < c.height && (c.height = b.height, c.bottom = c.top + c.height));
                            return c;
                        };
                    };
                    a.z.n = function (a, b, c) {
                        return 'undefined' === typeof a ? !1 : {
                            left: Number(b) + Number(a.left),
                            right: Number(b) + Number(a.right),
                            top: Number(c) + Number(a.top),
                            bottom: Number(c) + Number(a.bottom)
                        };
                    };
                    a.z.m = function (b, e) {
                        if ('undefined' === typeof b || 'undefined' === typeof e)
                            return !1;
                        var d = c(b.left, b.right, e.left, e.right), h = c(b.top, b.bottom, e.top, e.bottom);
                        return new a.z.j(void 0, void 0, {
                            left: d[0],
                            right: d[1],
                            top: h[0],
                            bottom: h[1]
                        });
                    };
                    a.z.o = function (b, c, e, d) {
                        if (!b || !c || !e)
                            return !1;
                        b = a.z.i(b);
                        if (!b)
                            return !1;
                        e = d || a.z.m(c, e);
                        if (!e)
                            return !1;
                        d = a.z.n(b.visibleRect, c.left, c.top);
                        return d ? (e = a.z.m(d, e)) ? {
                            elementRect: a.z.n(b.cumulRect, c.left, c.top),
                            visibleRect: e,
                            area: b.area,
                            calcVisiblePercv: function () {
                                return (this.visibleRect.right - this.visibleRect.left) * (this.visibleRect.bottom - this.visibleRect.top) / this.area;
                            }
                        } : !1 : !1;
                    };
                    a.z.p = function (a, b) {
                        b || (b = window);
                        try {
                            var c = b.document.documentElement, e = b.document.body;
                            return 'left' === a ? b.pageXOffset || c && c.scrollLeft || e && e.scrollLeft : b.pageYOffset || c && c.scrollTop || e && e.scrollTop;
                        } catch (d) {
                            return !1;
                        }
                    };
                    a.z.i = d;
                    a.z.r = function (b) {
                        var c = b.aa;
                        b = b.zr;
                        if (c) {
                            if (a.c.q)
                                c = t(c, b);
                            else
                                var e = g(new a.z.j(c)).visibleRect, e = p(e), c = l(c, e, a.c.e.document, null, b);
                            return c;
                        }
                    };
                    a.z.s = function (a) {
                        return a ? (a.right - a.left) * (a.bottom - a.top) : !1;
                    };
                    a.z.t = function (b) {
                        function c(b) {
                            return a.a.db(b) || 'string' === typeof b;
                        }
                        return 'object' === typeof b && c(b.left) && c(b.right) && c(b.top) && c(b.bottom) ? !0 : !1;
                    };
                    a.z.q = function (b, c) {
                        if (!a.z.t(b) || !a.z.t(c))
                            return !1;
                        var e = a.z.m(b, c);
                        if (!e)
                            return !1;
                        var d = a.z.s(b);
                        return e.calcArea() / d;
                    };
                    a.k.a.azsx('adKilled', function (a) {
                        a && !a.ep && delete y[a.zr];
                    });
                }(u));
                (function (a) {
                    function k(a) {
                        var c = 0, d;
                        return function () {
                            var g = new A().getTime();
                            150 < g - c && (d = a.apply(this, arguments), c = g);
                            return d;
                        };
                    }
                    function d(b) {
                        function c(a) {
                            'undefined' !== typeof b.overrideViewMethod && (a.viewabilityMethod[y] = b.overrideViewMethod);
                            return m(a);
                        }
                        var d = b.isVisibleFn, g = b.isMeasurableFn, p = b.pauseCheckingFn, k = b.careFoc, q = b.qsKeys, y = b.counterLabel, x = y;
                        a.c.am();
                        var n = [], m = d, I = 0, G = 0, J = 0, C = 0, z = 0, K = 0, E = 0, P = 0;
                        new A().getTime();
                        var v = !1, H = !1, r = !1, u = !1, Ga, Q, B, T, la = 0, D = 0, F = !1, M = !1, L = 0, O = 0, ya = 0, R = !1, Ha = !1, ea = !1, U = a.c.c, ma, ua;
                        if (0 === q)
                            var Y = 'as', Z = 'ag', N = 'an', aa = 'ck', fa = 'kw', V = 'ah', ga = 'aj', W = 'pg', X = 'pf', ha = 'gi', ba = 'gf', ca = 'ix', ia = 'gg', da = 'ez', F = !0;
                        else
                            1 === q ? (Y = 'cc', Z = 'bw', N = 'bx', aa = 'ci', fa = 'jz', V = 'bu', ga = 'dj') : 2 === q ? (Y = 'cg', Z = 'ce', N = 'cf', aa = 'cj', fa = 'ts', V = 'ah', ga = 'dk', ha = 'gj', ba = 'gb', ca = 'ig', ia = 'ge', da = 'ez') : 3 === q ? (Y = 'cg', Z = 'ce', N = 'cf', aa = 'cj', fa = 'ts', V = 'ah', ga = 'dk', ha = 'gi', ba = 'gf', ca = 'ix', ia = 'gg', da = 'ez') : 5 === q ? (Y = 'aa', Z = 'ad', N = 'cn', aa = 'co', fa = 'cp', V = 'ah', ga = 'cq', ha = 'gn', ba = 'gk', ca = 'ik', ia = 'gl', da = 'ez') : 6 === ('number' === typeof q ? q : q.type) && (Y = q.otsKey, Z = q.ivtKey, N = q.lastivtKey, aa = q.ivtAtOtsKey, fa = q.timeToViewSendKey, V = q.timeToViewAskKey, ga = q.visOnLoadKey, ha = q.fullyIvtOtsKey, ba = q.fullyIvtKey, ca = q.maxfullyIvtKey, ia = q.lastFullyIvtKey, da = q.wasPartiallyInviewKey);
                        this.getLabel = function () {
                            return x;
                        };
                        this.addListener = function (b) {
                            var c = !1;
                            a.a.forEach(n, function (a) {
                                if (a === b)
                                    return c = !0, !1;
                            });
                            c || n.push(b);
                        };
                        this.removeListener = function (a) {
                            for (var b, c = n.length; b < c; b++) {
                                var e = !1, d = !1, h;
                                for (h in n[b])
                                    if (d || (d = !0), n[b][h] !== a[h]) {
                                        e = !0;
                                        break;
                                    }
                                d && !e && n.splice(b, 1);
                            }
                        };
                        this.hadOTS = function () {
                            return r;
                        };
                        this.hadFullOTS = function () {
                            return u;
                        };
                        this.hadFIT = function () {
                            return 0 < G;
                        };
                        this.hadVideo2SecOTS = function () {
                            return 'undefined' != typeof _hadVideo2SecOts && _hadVideo2SecOts;
                        };
                        this.hadDentsuVideoOTS = function () {
                            return !1;
                        };
                        this.hadDentsuDisplayOTS = function () {
                            return R;
                        };
                        this.getInViewTime = function () {
                            return I;
                        };
                        this.getFullyInViewThreshold = function () {
                            return 0.98;
                        };
                        this.getLastInviewPercent = function () {
                            return L;
                        };
                        this.getLastInviewPercentWithThresholdCap = function () {
                            return 0.98 <= L ? 1 : L;
                        };
                        this.getCareAboutFocus = function () {
                            return k;
                        };
                        this.getPauseCheckingFn = function () {
                            return p;
                        };
                        this.visible = function () {
                            return v;
                        };
                        this.fullyVisible = function () {
                            return H;
                        };
                        this.wasPartiallyInview = function () {
                            return M;
                        };
                        this.getFullInviewTimeTotal = function () {
                            return G;
                        };
                        this.getMaximumContinuousInViewTime = function () {
                            return w.max(z, K);
                        };
                        this.getMaximumContinuousFullyInViewTime = function () {
                            return w.max(P, E);
                        };
                        this.getDentsuInViewTime = function () {
                            return O;
                        };
                        this.getDentsuAudibleAndVisibleTime = function () {
                            return 0;
                        };
                        this.isAdMeasurable = function (a) {
                            var b = 'function' === typeof g && g(a);
                            a && a.isMeasurabilityDisabled() && (b = !1);
                            return b;
                        };
                        this.adStartedOnScreen = function () {
                            return T;
                        };
                        this.update = function (b, d, h) {
                            if (ua === h)
                                return !1;
                            ua = h;
                            h = 'function' === typeof g && g(b);
                            b && b.isMeasurabilityDisabled() && (h = !1);
                            if (!h)
                                return !1;
                            var m = I || 0, J = G || 0;
                            h = !1;
                            var C = c(b);
                            C.rect && (b.elementRect = C.rect, b.currentWidth = b.elementRect.right - b.elementRect.left, b.currentHeight = b.elementRect.bottom - b.elementRect.top);
                            b.viewabilityPercent[x] = a.a.db(C.percv) ? w.round(100 * C.percv) : '-';
                            'number' === typeof C.area && (b.ADAREA = C.area);
                            var y = C.isVisible, A = C.isFullyVisible, D = C.isDentsuVisible, N = C.percv && 0 < C.percv;
                            L = C.percv;
                            !m && C.percv && a.k.a.zaxs('adEntersView', b);
                            var S = p(b), S = (!k || a.ac.e(b)) && !S;
                            a.k.a.zaxs('adCheckingState', b, x, S);
                            y = y && S;
                            A = A && S;
                            N = N && S;
                            A && a.k.a.zaxs('adFullyVisible', b, x);
                            ea = D && S;
                            !M && N && (M = !0);
                            if (y && v)
                                I += d, z += d;
                            else if (y || v)
                                D = w.round(d / 2), I += D, z += D;
                            if (A && H)
                                G += d, E += d;
                            else if (A || H)
                                D = w.round(d / 2), G += D, E += D;
                            if (ea && Ha)
                                O += d, ya += d;
                            else if (ea || Ha)
                                D = w.round(d / 2), O += D, ya += D;
                            !r && 1000 <= z && (h = r = !0, this.timeToView = Ga = b.counters.query()[V], Q = I);
                            !u && 1000 <= E && (u = !0, a.k.a.zaxs('fullOtsReached', b, x));
                            'undefined' === typeof B && (D = b.counters.query().bu, 1000 >= D ? y && (B = !0) : B = !1);
                            'undefined' === typeof T && (D = b.counters.query().bu, 1000 >= D ? N && (T = !0) : T = !1);
                            (b.el = U) && 'undefined' === typeof ma && 2 !== q && 3 !== q && C.elGeo && (D = f().y + C.elGeo.foldTop, S = C.elGeo.threshold * C.elGeo.elHeight, D = D > a.w.c() - S, 0 < C.elGeo.totalArea && (ma = D, b.dn = ma));
                            F && N && (la = w.min(w.max(L, la), 1));
                            K < z && (K = z);
                            P < E && (P = E);
                            y || (z = 0);
                            A || (E = 0);
                            v = y;
                            H = A;
                            1000 <= ya && (R = !0);
                            ea || (ya = 0);
                            Ha = ea;
                            a.a.forEach(n, function (a) {
                                var b = C && C.percv, b = 'number' === typeof b && 100 * b;
                                if (a.onInViewTimeCount)
                                    a.onInViewTimeCount(d, I - m, b, x);
                                if (a.onFullyInViewTimeCount) {
                                    var c = w.max(G - J, 0);
                                    a.onFullyInViewTimeCount(d, c, b, x);
                                }
                            });
                            return h;
                        };
                        this.getQS = function (a, b, c) {
                            J > I && (J = I);
                            C > G && (C = G);
                            a[Y] = Number(r);
                            a[Z] = I;
                            a[N] = J;
                            if (0 === q || 2 === q || 3 === q || 5 === q || ('number' === typeof q ? q : q.type))
                                u && ha && (a[ha] = 1), b = 0 === q && c && 'sframe' === c, ba && !b && (a[ba] = G, a[ia] = C, b = this.getMaximumContinuousFullyInViewTime(), a[ca] = b, x === c && (a.ic = b)), M && da && (a[da] = 1);
                            'undefined' !== typeof Q && (a[aa] = Q);
                            'undefined' !== typeof Ga && (a[fa] = Ga);
                            'undefined' !== typeof B && (a[ga] = Number(B));
                            !0 === F && (c = w.round(100 * la), b = w.round(100 * D), a[W] = c, a[X] = b, D = la);
                            'undefined' !== typeof ma && (a.ib = Number(ma));
                            J = I;
                            C = G;
                        };
                    }
                    function f() {
                        var b = a.c.e, c = b.document;
                        return { y: void 0 !== b.pageYOffset ? b.pageYOffset : (c.documentElement || c.body.parentNode || c.body).scrollTop };
                    }
                    a.w = {};
                    var g = {}, c = {};
                    a.w.c = function () {
                        return U ? a.c.r(a.c.e).height : 750;
                    };
                    a.w.d = function (b) {
                        var e = b.zr;
                        a.k.a.azsx('adKilled', a.w.a, {
                            once: !0,
                            condition: function (a) {
                                return a.zr == b.zr;
                            }
                        });
                        g[e] = g[e] || {};
                        b.viewstats = { isBigAd: !1 };
                        if (b && b.isMeasurabilityDisabled())
                            return !1;
                        if (a.c.dl() || a.c.am().isInApp && a.c.c) {
                            var h = k(a.z.f), f;
                            a.c.ce() || a.ab && a.ab.a() ? a.c.cy() || a.c.cx() && a.c.am() : f = new d({
                                isVisibleFn: h,
                                isMeasurableFn: a.c.dl,
                                pauseCheckingFn: a.ac.a,
                                careFoc: !0,
                                qsKeys: 0,
                                counterLabel: 'strict'
                            });
                            f && (g[e].strict = f);
                            h = new d({
                                isVisibleFn: h,
                                isMeasurableFn: a.c.dl,
                                pauseCheckingFn: a.ac.a,
                                careFoc: !1,
                                qsKeys: 1,
                                counterLabel: 'lax'
                            });
                            g[e].lax = h;
                        } else
                            !0 !== b.isSkin && a.m && a.m.a() && (h = new d({
                                isVisibleFn: a.m.b,
                                isMeasurableFn: a.c.dq,
                                pauseCheckingFn: a.ac.a,
                                careFoc: !0,
                                qsKeys: 3,
                                counterLabel: 'pscope'
                            }), g[e].pscope = h);
                        a.o && a.o.b() && !g[e].pscope && (h = new d({
                            isVisibleFn: a.o.c,
                            isMeasurableFn: a.c.dr,
                            pauseCheckingFn: a.ac.a,
                            careFoc: !0,
                            qsKeys: 2,
                            counterLabel: 'pscope'
                        }), g[e].pscope = h);
                        e = a.k.a.azsx('view:tick', a.a.df([b], a.w.e), { priority: 5 });
                        c[b.zr] = e;
                        a.k.a.zaxs('viewCounterStarted', b);
                    };
                    a.w.f = function (b, c, d) {
                        return b && c && d ? (b = a.w.g(b.zr, c)) && 'function' == typeof b[d] && b[d]() : !1;
                    };
                    a.w.h = function (b, c) {
                        if (b && c) {
                            var h = a.c.ei(), f;
                            !c.sframe && h && (f = h.measurableFn, h = h.name, g[b.zr].sframe = new d({
                                isVisibleFn: a.ad.a,
                                isMeasurableFn: f,
                                pauseCheckingFn: a.ac.a,
                                viewabilityApiName: h,
                                careFoc: !0,
                                qsKeys: 5,
                                counterLabel: 'sframe'
                            }), a.k.a.zaxs('viewCounterStarted', b));
                        }
                    };
                    a.w.e = function (b, c, d) {
                        if (a.a.cq(b)) {
                            var f = g[b.zr], p;
                            a.w.h(b, f);
                            for (var k in f)
                                f.hasOwnProperty(k) && f[k].update(b, c, d) && (p = !0);
                            b.fireFullViewEvent = !1;
                            a.a.forEach(b.secondaryCounters, function (a) {
                                a.update(b, c, d);
                            });
                            b.fireFullViewEvent && (a.ac.b(b), b.fireFullViewEvent = !1);
                            p && a.ac.c(b);
                            a.aa.b(b);
                            b.ao && 1 == b.ao.skin && 'width' == a.x.b && a.x.d();
                            a.d.e(b) && a.ac.d(b);
                        }
                    };
                    a.w.i = function (b, c) {
                        return a.w.j(b) >= c;
                    };
                    a.w.j = function (b) {
                        var c = 0;
                        (b = b && 'undefined' !== typeof b.zr && a.w && a.w.k(b.zr)) && (c = b.getInViewTime());
                        return c;
                    };
                    a.w.l = function () {
                        return 'hadOTS';
                    };
                    a.w.m = function (b, c) {
                        var d = a.w.l();
                        return b && b && 'undefined' != typeof b.zr ? c ? a.w.f(b, c, d) : a.w.f(b, a.w.b(b.zr), d) : null;
                    };
                    a.w.n = function (b, c) {
                        var d = a.w.o(b.zr);
                        return a.o && a.o.a && d && d.pscope && d.pscope[c ? 'hadVideo2SecOTS' : 'hadOTS']();
                    };
                    a.w.p = function (b, c) {
                        var d = a.w.o(b.zr);
                        return a.o && a.o.a && d && d.pscope && d.pscope[c ? 'hadDentsuVideoOTS' : 'hadDentsuDisplayOTS']();
                    };
                    a.w.q = function (b, c) {
                        var d = a.w && a.w.o(b.zr);
                        return a.o && a.o.a && d && d.pscope && d.pscope.getFullInviewTimeTotal() >= c;
                    };
                    a.w.r = function (b) {
                        var c = 0;
                        (b = b && 'undefined' !== typeof b.zr && a.w && a.w.k(b.zr)) && (c = b.getFullInviewTimeTotal());
                        return c;
                    };
                    a.w.s = function (b, c) {
                        return a.w.r(b) >= c;
                    };
                    a.w.a = function (b) {
                        delete g[b.zr];
                        c.hasOwnProperty(b.zr) && a.k.a.sxaz('view:tick', { id: c[b.zr] });
                    };
                    a.w.o = function (a) {
                        var c;
                        g[a] ? c = g[a] : g[a] = c = {};
                        return c;
                    };
                    a.w.g = function (b, c) {
                        var d = a.w.o(b);
                        return d && d[c];
                    };
                    a.w.t = function (b) {
                        var c, d, g;
                        if (!b || !b.strict)
                            return !1;
                        b = a.c.am().isInApp;
                        c = a.c.cq();
                        d = a.c.cw();
                        g = a.c.cu();
                        c = c && a.c.c || d;
                        return b && c || !(b || g);
                    };
                    a.w.b = function () {
                        var b;
                        return function (c, d) {
                            var f = null, p = g[c];
                            a.w.t(p) ? f = 'strict' : p && p.sframe ? f = 'sframe' : p && p.pscope && (f = 'pscope');
                            (p = 'undefined' !== typeof B && B[c]) && p.isMeasurabilityDisabled() && (f = null);
                            a.d.c() && !d && (f = null);
                            b != f && (b = f, a.k.a.esgf('preferredViewCounterUpdate', B[c]));
                            return f;
                        };
                    }();
                    a.w.k = function (b, c) {
                        var d = 'undefined' !== typeof B && B[b];
                        if (!d || !d.isMeasurabilityDisabled()) {
                            var d = a.w.b(b, c), f = g[b];
                            if (!a.d.c() || c)
                                return f && d && f[d];
                        }
                    };
                    a.w.u = function (b, c) {
                        var d = {}, f = g[b], p = a.w.b(b), k;
                        for (k in f)
                            f.hasOwnProperty(k) && f[k].getQS(d, c, p);
                        a.aa.c(b, d);
                        a.ae.a(b, d);
                        a.w.k(b) && a.w.k(b).hadDentsuDisplayOTS() && (d.nb = 1);
                        (f = B[b]) && f.viewstats && f.viewstats.isBigAd && (d.el = 1);
                        return d;
                    };
                }(u));
                (function (a) {
                    a.af = {};
                    a.af.a = function (a, d) {
                        var f;
                        d.outerHTML ? f = d.outerHTML : (f = document.createElement('div'), f.appendChild(d.cloneNode(!0)), f = f.innerHTML);
                        f = [
                            /flashvars\s*=\s*(".*?"|'.*?')/i.exec(f),
                            /name\s*=\s*["']flashvars["']\s*value\s*=\s*(".*?"|'.*?')/i.exec(f),
                            /value\s*=\s*(".*?"|'.*?')\s*name\s*=\s*["']flashvars["']/i.exec(f),
                            a
                        ];
                        for (var g, c, b = {}, e = 0; e < f.length; e++) {
                            if ((g = f[e]) && 'object' === typeof g && g[1])
                                g = g[1].replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/^"/g, '').replace(/"$/g, '').replace(/^'/g, '').replace(/'$/g, '');
                            else if ('string' === typeof g)
                                g = g.split('?')[1];
                            else
                                continue;
                            if (g) {
                                g = g.split('&');
                                for (var h = 0; h < g.length; h++)
                                    c = g[h].split('='), 2 > c.length || 'function' == c[0].slice(0, 8) || (b[c[0]] = [c[1]]);
                            }
                        }
                        return b;
                    };
                }(u));
                (function (a) {
                    a.x = {};
                    a.x.e = {};
                    a.x.b = 'divs';
                    a.x.e.a || (a.x.b = 'width', a.x.e.a = function (a) {
                        return 1000;
                    });
                    a.x.d = function () {
                        var k = a.c.e, d = a.c.q && k.document || document, f = d.documentElement, d = d.getElementsByTagName('body')[0];
                        try {
                            a.x.c = k && k.innerWidth || f && f.clientWidth || d && d.clientWidth;
                        } catch (g) {
                        }
                    };
                    a.x.a = function (k, d, f) {
                        if ('divs' == a.x.b) {
                            if (k._Mt_wIC)
                                return !0;
                            if (k._Mt_wOC)
                                return !1;
                            var g = f.currentTarget, c = k;
                            for (f = 0; 1000 > f && !a.a.ax(d, c); f++) {
                                if (c == g || null == c)
                                    return k._Mt_wOC = !0, !1;
                                c = c.parentElement;
                            }
                            return k._Mt_wIC = !0;
                        }
                        if ('width' == a.x.b) {
                            k = d / 2;
                            g = a.x.c / 2;
                            c = f.clientX;
                            f = f.clientY;
                            var b = a.c.e.scrollY || a.c.e.document.documentElement.scrollTop;
                            return a.x.c > d && (c > g + k || c < g - k) || 90 > f + b ? !1 : !0;
                        }
                        if ('ad-els' === a.x.b) {
                            if (k._Mt_wIC)
                                return !0;
                            if (k._Mt_wOC)
                                return !1;
                            g = f.currentTarget;
                            c = k;
                            for (f = 0; 1000 > f; f++) {
                                if (a.a.ax(d, c))
                                    return k._Mt_wOC = !0, !1;
                                if (c == g || null == c)
                                    break;
                                c = c.parentElement;
                            }
                            return k._Mt_wIC = !0;
                        }
                    };
                }(u));
                (function (a) {
                    a.ag = {};
                    var k = [];
                    a.ag.a = function (a, f) {
                        k.push({
                            query: a,
                            callback: f
                        });
                        return !1;
                    };
                }(u));
                (function (a) {
                    function k() {
                        function b(c) {
                            for (var e = ''; 0 < c;)
                                e += a.f.a([c % 62]), c = w.floor(c / 62);
                            return e;
                        }
                        function c(a) {
                            return {
                                propertyMethods: [
                                    function (b, c) {
                                        try {
                                            var e = c.split('.'), d = a, h = e[0];
                                            1 < e.length && (d = e[0], h = e[1]);
                                            return a[d].hasOwnProperty(h).toString();
                                        } catch (g) {
                                            return (!1).toString();
                                        }
                                    },
                                    function (b, c) {
                                        try {
                                            var e = c.split('.'), d = a, h = e[0];
                                            1 < e.length && (d = e[0], h = e[1]);
                                            return a.Object.getOwnPropertyDescriptors(a[d])[h].get.toString();
                                        } catch (g) {
                                            return '';
                                        }
                                    },
                                    function (b, c) {
                                        try {
                                            var e = c.split('.'), d = a, h = e[0];
                                            1 < e.length && (d = e[0], h = e[1]);
                                            return a.Object.getOwnPropertyDescriptors(a[d])[h].get.toString.toString();
                                        } catch (g) {
                                            return '';
                                        }
                                    }
                                ],
                                functionMethods: [
                                    function (a, b) {
                                        return a.name;
                                    },
                                    function (a, b) {
                                        try {
                                            return new a.toString();
                                        } catch (c) {
                                            return c.toString();
                                        }
                                    },
                                    function (b, c) {
                                        return a.Function.prototype.toString.call(b);
                                    },
                                    function (b, c) {
                                        return a.Function.prototype.toString.call(b.toString);
                                    },
                                    function (a, b) {
                                        try {
                                            return ('prototype' in a).toString();
                                        } catch (c) {
                                            return (!1).toString();
                                        }
                                    }
                                ]
                            };
                        }
                        var e = [
                                a.f.a([
                                    29,
                                    40,
                                    28,
                                    46,
                                    38,
                                    30,
                                    39,
                                    45,
                                    72,
                                    47,
                                    34,
                                    44,
                                    34,
                                    27,
                                    34,
                                    37,
                                    34,
                                    45,
                                    50,
                                    18,
                                    45,
                                    26,
                                    45,
                                    30
                                ]),
                                a.f.a([
                                    29,
                                    40,
                                    28,
                                    46,
                                    38,
                                    30,
                                    39,
                                    45,
                                    72,
                                    33,
                                    34,
                                    29,
                                    29,
                                    30,
                                    39
                                ]),
                                a.f.a([
                                    29,
                                    40,
                                    28,
                                    46,
                                    38,
                                    30,
                                    39,
                                    45,
                                    72,
                                    38,
                                    40,
                                    51,
                                    7,
                                    34,
                                    29,
                                    29,
                                    30,
                                    39
                                ]),
                                a.f.a([
                                    29,
                                    40,
                                    28,
                                    46,
                                    38,
                                    30,
                                    39,
                                    45,
                                    72,
                                    38,
                                    44,
                                    7,
                                    34,
                                    29,
                                    29,
                                    30,
                                    39
                                ]),
                                a.f.a([
                                    29,
                                    40,
                                    28,
                                    46,
                                    38,
                                    30,
                                    39,
                                    45,
                                    72,
                                    48,
                                    30,
                                    27,
                                    36,
                                    34,
                                    45,
                                    7,
                                    34,
                                    29,
                                    29,
                                    30,
                                    39
                                ]),
                                a.f.a([
                                    39,
                                    26,
                                    47,
                                    34,
                                    32,
                                    26,
                                    45,
                                    40,
                                    43,
                                    72,
                                    48,
                                    30,
                                    27,
                                    29,
                                    43,
                                    34,
                                    47,
                                    30,
                                    43
                                ]),
                                a.f.a([
                                    39,
                                    26,
                                    47,
                                    34,
                                    32,
                                    26,
                                    45,
                                    40,
                                    43,
                                    72,
                                    46,
                                    44,
                                    30,
                                    43,
                                    0,
                                    32,
                                    30,
                                    39,
                                    45
                                ]),
                                a.f.a([
                                    39,
                                    26,
                                    47,
                                    34,
                                    32,
                                    26,
                                    45,
                                    40,
                                    43,
                                    72,
                                    26,
                                    41,
                                    41,
                                    13,
                                    26,
                                    38,
                                    30
                                ]),
                                a.f.a([
                                    44,
                                    28,
                                    43,
                                    30,
                                    30,
                                    39,
                                    23
                                ]),
                                a.f.a([
                                    44,
                                    28,
                                    43,
                                    30,
                                    30,
                                    39,
                                    24
                                ]),
                                a.f.a([
                                    44,
                                    28,
                                    43,
                                    30,
                                    30,
                                    39,
                                    19,
                                    40,
                                    41
                                ]),
                                a.f.a([
                                    44,
                                    28,
                                    43,
                                    30,
                                    30,
                                    39,
                                    11,
                                    30,
                                    31,
                                    45
                                ]),
                                a.f.a([
                                    44,
                                    28,
                                    43,
                                    30,
                                    30,
                                    39,
                                    72,
                                    26,
                                    47,
                                    26,
                                    34,
                                    37,
                                    22,
                                    34,
                                    29,
                                    45,
                                    33
                                ]),
                                a.f.a([
                                    44,
                                    28,
                                    43,
                                    30,
                                    30,
                                    39,
                                    72,
                                    26,
                                    47,
                                    26,
                                    34,
                                    37,
                                    7,
                                    30,
                                    34,
                                    32,
                                    33,
                                    45
                                ])
                            ], h = [
                                a.f.a([
                                    3,
                                    26,
                                    45,
                                    30
                                ]),
                                a.f.a([
                                    29,
                                    40,
                                    28,
                                    46,
                                    38,
                                    30,
                                    39,
                                    45,
                                    72,
                                    33,
                                    26,
                                    44,
                                    5,
                                    40,
                                    28,
                                    46,
                                    44
                                ]),
                                a.f.a([
                                    29,
                                    40,
                                    28,
                                    46,
                                    38,
                                    30,
                                    39,
                                    45,
                                    72,
                                    30,
                                    37,
                                    30,
                                    38,
                                    30,
                                    39,
                                    45,
                                    5,
                                    43,
                                    40,
                                    38,
                                    15,
                                    40,
                                    34,
                                    39,
                                    45
                                ]),
                                a.f.a([
                                    5,
                                    46,
                                    39,
                                    28,
                                    45,
                                    34,
                                    40,
                                    39,
                                    72,
                                    41,
                                    43,
                                    40,
                                    45,
                                    40,
                                    45,
                                    50,
                                    41,
                                    30,
                                    72,
                                    45,
                                    40,
                                    18,
                                    45,
                                    43,
                                    34,
                                    39,
                                    32
                                ]),
                                a.f.a([
                                    43,
                                    30,
                                    42,
                                    46,
                                    30,
                                    44,
                                    45,
                                    0,
                                    39,
                                    34,
                                    38,
                                    26,
                                    45,
                                    34,
                                    40,
                                    39,
                                    5,
                                    43,
                                    26,
                                    38,
                                    30
                                ]),
                                a.f.a([
                                    44,
                                    30,
                                    45,
                                    8,
                                    39,
                                    45,
                                    30,
                                    43,
                                    47,
                                    26,
                                    37
                                ]),
                                a.f.a([
                                    44,
                                    30,
                                    45,
                                    19,
                                    34,
                                    38,
                                    30,
                                    40,
                                    46,
                                    45
                                ]),
                                a.f.a([
                                    13,
                                    40,
                                    45,
                                    34,
                                    31,
                                    34,
                                    28,
                                    26,
                                    45,
                                    34,
                                    40,
                                    39
                                ]),
                                a.f.a([
                                    22,
                                    30,
                                    27,
                                    6,
                                    11,
                                    17,
                                    30,
                                    39,
                                    29,
                                    30,
                                    43,
                                    34,
                                    39,
                                    32,
                                    2,
                                    40,
                                    39,
                                    45,
                                    30,
                                    49,
                                    45,
                                    72,
                                    41,
                                    43,
                                    40,
                                    45,
                                    40,
                                    45,
                                    50,
                                    41,
                                    30,
                                    72,
                                    32,
                                    30,
                                    45,
                                    18,
                                    46,
                                    41,
                                    41,
                                    40,
                                    43,
                                    45,
                                    30,
                                    29,
                                    4,
                                    49,
                                    45,
                                    30,
                                    39,
                                    44,
                                    34,
                                    40,
                                    39,
                                    44
                                ])
                            ], g = [
                                a.f.a([
                                    29,
                                    40,
                                    28,
                                    46,
                                    38,
                                    30,
                                    39,
                                    45,
                                    72,
                                    33,
                                    26,
                                    44,
                                    5,
                                    40,
                                    28,
                                    46,
                                    44
                                ]),
                                a.f.a([
                                    39,
                                    26,
                                    47,
                                    34,
                                    32,
                                    26,
                                    45,
                                    40,
                                    43,
                                    72,
                                    48,
                                    30,
                                    27,
                                    29,
                                    43,
                                    34,
                                    47,
                                    30,
                                    43
                                ])
                            ];
                        return '1_' + function (a) {
                            for (var b = '', c = e.concat(h), d = 0; d < c.length; d++) {
                                var g = c[d];
                                if (a.hasOwnProperty(g))
                                    for (var g = a[g], f = 0; f < g.length; f++)
                                        b += g[f] + '-';
                            }
                            return b;
                        }(function () {
                            for (var a = {}, h = c(window), f = {}, l = 0; l < e.length; l++)
                                f[e[l]] = !0;
                            for (l = 0; l < g.length; l++) {
                                var k = g[l];
                                a[k] = [];
                                var C = h.functionMethods;
                                f.hasOwnProperty(k) && (C = h.propertyMethods);
                                try {
                                    for (var z, y = window, E = k.split('.'), P = 0; P < E.length; P++)
                                        y = y[E[P]];
                                    z = y;
                                    for (y = 0; y < C.length; y++) {
                                        var v = C[y];
                                        try {
                                            a[k].push(b(d(v(z, k).replace(/\-/g, '%2D').replace(/\s*/g, ''))));
                                        } catch (r) {
                                            a[k].push('');
                                        }
                                    }
                                } catch (r) {
                                    a[k].push('E');
                                }
                            }
                            return a;
                        }());
                    }
                    function d(a) {
                        var b = 0, c = a.length, e, d;
                        if (0 == c)
                            return b;
                        for (e = 0; e < c; e++)
                            d = a.charCodeAt(e), b = (b << 5) - b + d, b &= b;
                        return b >>> 0;
                    }
                    function f() {
                        var b = [];
                        if (!a.g.d(window.top)) {
                            var c = [], e = a.f.a([
                                    28,
                                    33,
                                    43,
                                    40,
                                    38,
                                    30
                                ]), d = a.f.a([
                                    30,
                                    49,
                                    45,
                                    30,
                                    39,
                                    44,
                                    34,
                                    40,
                                    39
                                ]), h = '\'' + e + '-' + d + '://\']';
                            window.top.document && 'function' === typeof window.top.document.querySelectorAll && (c = window.top.document.querySelectorAll('[src^=' + h + ',[data^=' + h + ',[href^=' + h));
                            0 !== c.length && window.String && 'function' === typeof window.String.prototype.match && a.a.forEach(c, function (a) {
                                (a = a.outerHTML.match('[a-z]+="' + e + '-' + d + '://([a-z]+)')) && 1 < a.length && -1 === b.indexOf(a[1]) && b.push(a[1]);
                            });
                        }
                        c = b.join(',');
                        window.String && window.String.prototype.slice && (c = c.slice(0, 150));
                        return a.f.i(c);
                    }
                    function g(a, c) {
                        const $___old_c726960d73dea21c = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                        try {
                            if ($___old_c726960d73dea21c)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_7235ea711e4437da.XMLHttpRequest));
                            return function () {
                                try {
                                    var g = a.split(h), f = c || window, l, n;
                                    for (n = 0; n < g.length; n++) {
                                        l = g[n];
                                        if (null === f || typeof f === b)
                                            return 1;
                                        f = f[l];
                                    }
                                    return typeof f === b ? 2 : null === f ? 3 : 4 + d(a + e + f.toString()) % 58;
                                } catch (k) {
                                    return 0;
                                }
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_c726960d73dea21c)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_c726960d73dea21c));
                        }
                    }
                    function c() {
                        var a, b = [
                                function () {
                                    return 'c$$b' !== 'cab'.replace('a', function () {
                                        return '$$';
                                    });
                                },
                                function () {
                                    return eval('class A { constructor(pp) { this.pp = pp; }\n call() { return this.pp; }\n }\n class B extends A { tS(a) { return super.call(); }\n tT(a){ return this.call(); } }\n  const obj = new B("cab");  (obj.tS() !== obj.tT()); ');
                                },
                                function () {
                                    return eval('\'\\\n\r\'');
                                },
                                function () {
                                    return eval('((new Date("1300-02-28T21:11:11.000Z")).toISOString() !== "1300-02-28T21:11:11.000Z")');
                                },
                                function () {
                                    return eval('(new Date("2835")).toISOString() !== "2835-01-01T00:00:00.000Z"');
                                },
                                function () {
                                    return -1 !== '22'.localeCompare('122', 'de', { numeric: !0 });
                                },
                                function () {
                                    return 'p' === window.atob('cab==');
                                },
                                function () {
                                    return 'cab' !== 'cab'.split(/\b/).pop();
                                },
                                function () {
                                    return void 0 === Array.prototype.find;
                                },
                                function () {
                                    return Number.isNaN('MAX_SAFE_INTEGER');
                                },
                                function () {
                                    return /(G)+|(X)+X/.test('X ');
                                },
                                function () {
                                    return 'bec' != 'cabecab'.match('.?e.?');
                                },
                                function () {
                                    var a = {};
                                    [
                                        'cab',
                                        'cab'
                                    ].sort(a, a);
                                    return !0;
                                },
                                function () {
                                    var a = new Proxy([
                                        3,
                                        444
                                    ], {});
                                    return [
                                        12,
                                        444
                                    ].concat(a)[3];
                                },
                                function () {
                                    return eval('let x = (e) => { let e = true;};');
                                },
                                function () {
                                    return 0 === new ArrayBuffer(5).slice(3, 4394878398).byteLength;
                                }
                            ];
                        a = '1-';
                        for (var c = 0; c < b.length; c++) {
                            var e;
                            try {
                                e = (0, b[c])() ? '1' : '0';
                            } catch (d) {
                                e = '2';
                            }
                            a += e;
                        }
                        return a;
                    }
                    a.ah = {};
                    var b = a.f.a([
                            46,
                            39,
                            29,
                            30,
                            31,
                            34,
                            39,
                            30,
                            29
                        ]), e = a.f.a([77]), h = a.f.a([72]), l;
                    a.ah.a = function (b) {
                        if (void 0 !== l)
                            return a.a.i(l);
                        l = {};
                        var e = a.c.e;
                        try {
                            var h = e.document, y = h.body, x = e.innerWidth || h.documentElement.clientWidth || y.clientWidth, n = e.innerHeight || h.documentElement.clientHeight || y.clientHeight, m = e.outerWidth || y.offsetWidth, I = e.outerHeight || y.offsetHeight;
                        } catch (r) {
                        }
                        try {
                            var G = e.screenX || e.screenLeft || e.screenX, J = e.screenY || e.screenTop || e.screenY;
                        } catch (r) {
                        }
                        var C = new A().getTimezoneOffset(), z;
                        if (document && document.body) {
                            var K = document.createElement(a.f.a([
                                34,
                                31,
                                43,
                                26,
                                38,
                                30
                            ]));
                            K.width = a.f.a([
                                53,
                                41,
                                49
                            ]);
                            K.height = a.f.a([
                                53,
                                41,
                                49
                            ]);
                            K.style.left = '-' + a.f.a([
                                61,
                                61,
                                61,
                                61,
                                41,
                                49
                            ]);
                            K.style.top = '-' + a.f.a([
                                61,
                                61,
                                61,
                                61,
                                41,
                                49
                            ]);
                            K.style.position = a.f.a([
                                26,
                                27,
                                44,
                                40,
                                37,
                                46,
                                45,
                                30
                            ]);
                            document.body.appendChild(K);
                            z = K;
                        } else
                            z = void 0;
                        var E = a.f.a([
                                84,
                                41,
                                33,
                                26,
                                39,
                                45,
                                40,
                                38
                            ]), P = a.f.a([
                                28,
                                26,
                                37,
                                37,
                                15,
                                33,
                                26,
                                39,
                                45,
                                40,
                                38
                            ]), v = !0 === ('undefined' != typeof e[E] || 'undefined' != typeof e[P]) ? 1 : 0, H, u = z, w = /(?:Mac OS X )(\d{2}_\d{2})(?:.*Version\/)(\d{2})/, B = a.f.a([
                                64,
                                28,
                                29,
                                28,
                                84,
                                26,
                                44,
                                29,
                                35,
                                31,
                                37,
                                26,
                                44,
                                46,
                                45,
                                40,
                                41,
                                31,
                                33,
                                47,
                                28,
                                25,
                                11,
                                38,
                                28,
                                31,
                                37,
                                84
                            ]), Q = a.f.a([
                                28,
                                33,
                                43,
                                40,
                                38,
                                30
                            ]), D = a.f.a([
                                43,
                                46,
                                39,
                                45,
                                34,
                                38,
                                30
                            ]), T = a.f.a([
                                41,
                                37,
                                46,
                                32,
                                34,
                                39,
                                44
                            ]), la = a.f.a([
                                15,
                                37,
                                46,
                                32,
                                34,
                                39,
                                0,
                                43,
                                43,
                                26,
                                50
                            ]), F = a.f.a([
                                38,
                                34,
                                38,
                                30,
                                19,
                                50,
                                41,
                                30,
                                44
                            ]), M = a.f.a([
                                38,
                                26,
                                49,
                                19,
                                40,
                                46,
                                28,
                                33,
                                15,
                                40,
                                34,
                                39,
                                45,
                                44
                            ]), L, O, R, U, W, X = 2, ea = 2, ja = 2, ma = e.document && e.document[B] ? 1 : 0, ua, Y, Z, N, aa = a.f.a([
                                34,
                                45,
                                30,
                                38
                            ]), fa = a.f.a([
                                45,
                                30,
                                44,
                                45
                            ]);
                        if (window.String && window.String.prototype.match) {
                            var V = navigator.userAgent.match(w);
                            L = null != V && '10_12' == V[1] && '10' == V[2];
                        } else
                            L = !1;
                        if (!L) {
                            var ga = a.f.a([
                                    47,
                                    34,
                                    29,
                                    30,
                                    40,
                                    73,
                                    38,
                                    41,
                                    56,
                                    75
                                ]) + ' ' + a.f.a([
                                    28,
                                    40,
                                    29,
                                    30,
                                    28,
                                    44,
                                    77,
                                    90,
                                    26,
                                    47,
                                    28,
                                    53,
                                    72,
                                    58,
                                    56,
                                    52,
                                    52,
                                    53,
                                    4,
                                    71
                                ]) + ' ' + a.f.a([
                                    38,
                                    41,
                                    56,
                                    26,
                                    72,
                                    56,
                                    52,
                                    72,
                                    54,
                                    90
                                ]), qa = a.f.a([
                                    26,
                                    46,
                                    29,
                                    34,
                                    40,
                                    73,
                                    38,
                                    41,
                                    56,
                                    75
                                ]) + ' ' + a.f.a([
                                    28,
                                    40,
                                    29,
                                    30,
                                    28,
                                    44,
                                    77,
                                    90,
                                    38,
                                    41,
                                    56,
                                    26,
                                    72,
                                    56,
                                    52,
                                    72,
                                    54,
                                    90
                                ]), ra = document.createElement('video'), ha = document.createElement('audio');
                            try {
                                O = ra.canPlayType(ga);
                            } catch (r) {
                                O = 'E';
                            }
                            try {
                                R = ha.canPlayType(qa);
                            } catch (r) {
                                R = 'E';
                            }
                        }
                        var ba = [], ca, ia;
                        if (window.navigator) {
                            Y = (ua = window.navigator[M]) && Object.getOwnPropertyDescriptors && void 0 !== Object.getOwnPropertyDescriptors(navigator)[M];
                            if (window.navigator[T]) {
                                ia = window[la] && window[la].prototype === navigator[T].__proto__;
                                var da = window.navigator[T];
                                ca = da.length;
                                Object.getOwnPropertyDescriptors && Object.getOwnPropertyDescriptors(window.navigator)[T] && (U = !0);
                                for (var xa = 0; xa < ca && 10 > xa; xa++)
                                    ba.push(da[xa].name);
                                Z = d(ba.join('*'));
                                if (window.navigator[T][aa])
                                    try {
                                        N = window.navigator[T][aa](fa) ? 0 : 1;
                                    } catch (r) {
                                        N = 3;
                                    }
                                else
                                    N = 2;
                            }
                            W = window.navigator[F] && window.navigator[F].length;
                        }
                        a.g.d(window.top) || (ja = window[Q] && 'object' === typeof window[Q][D] ? 1 : 0);
                        if (u)
                            var na = u.contentWindow, X = (ea = 'object' === typeof na[Q] ? 1 : 0) && 'object' === typeof na[Q][D] ? 1 : 0;
                        H = [
                            ja,
                            ea,
                            X,
                            ca,
                            Z,
                            ia ? 1 : 0,
                            W,
                            U ? 1 : 0,
                            R,
                            O,
                            ma,
                            ua,
                            Y ? 1 : 0,
                            N
                        ];
                        for (var oa = [], ka = 0; 10 > ka; ka++)
                            oa.push(H[ka]);
                        var va = l, sa, ta = window.location && window.location.ancestorOrigins && Array.from && Array.from(window.location.ancestorOrigins);
                        sa = d(ta ? ta.join(',') : '');
                        va.ol = sa;
                        var wa = l, Ia;
                        try {
                            for (var Ja = [
                                        a.f.a([
                                            33,
                                            26,
                                            43,
                                            29,
                                            48,
                                            26,
                                            43,
                                            30,
                                            2,
                                            40,
                                            39,
                                            28,
                                            46,
                                            43,
                                            43,
                                            30,
                                            39,
                                            28,
                                            50
                                        ]),
                                        a.f.a([
                                            47,
                                            30,
                                            39,
                                            29,
                                            40,
                                            43
                                        ]),
                                        a.f.a([
                                            41,
                                            37,
                                            26,
                                            45,
                                            31,
                                            40,
                                            43,
                                            38
                                        ]),
                                        a.f.a([
                                            46,
                                            44,
                                            30,
                                            43,
                                            0,
                                            32,
                                            30,
                                            39,
                                            45
                                        ]),
                                        a.f.a([
                                            48,
                                            30,
                                            27,
                                            29,
                                            43,
                                            34,
                                            47,
                                            30,
                                            43
                                        ])
                                    ], S = {}, za = 0; za < Ja.length; za++)
                                S[Ja[za]] = window.navigator[Ja[za]];
                            Ia = a.f.h(a.f.l(S));
                        } catch (r) {
                            Ia = '';
                        }
                        wa.qn = Ia;
                        l.tf = k();
                        var Ea = l, Oa, Pa = 'toolbar scrollbars locationbar menubar personalbar statusbar'.split(' '), pa = [], Aa, Ba;
                        for (Ba = 0; Ba < Pa.length; Ba++)
                            try {
                                Aa = Pa[Ba], !0 === window[Aa].visible ? pa.push(1) : !1 === window[Aa].visible ? pa.push(0) : void 0 === window[Aa].visible ? pa.push(2) : pa.push(3);
                            } catch (r) {
                                pa.push(4);
                            }
                        Oa = pa.join('');
                        Ea.vi = Oa;
                        l.rc = oa.join(',');
                        l.rb = '1-' + a.f.i(H.join(','));
                        var Fa = l, Qa;
                        Qa = 'isSecureContext' in window ? window.isSecureContext ? 1 : 0 : 2;
                        Fa.sc = Qa;
                        l.os = '1-' + f();
                        l.qp = a.f.n.join('');
                        var ab = l, Ka;
                        var Ra = z;
                        if (Ra) {
                            var Sa = a.f.k('&]xoul#)k]mdrcfaxgum:hm_mfR_jru*UchYqnL^:vwjdmqh1M$bges5{T|r0hmkmhs\'.c T|dq,YKHY\\GTN`QUB[^GO>\\ICYAYK[2[:F]G@H=WH1{qerbvo0evfzG#hlhz2\npoaMlhlmith5`p`n+&f{`ua{)yp|d;cflklk&Mcnchfxbw-p]ub25{kvbqR `plGYfbq#N:S7;4yonek^z]ziMZqYr%VLG9FBQ917{a|\\lr0a\n`nUybo\'|Rz\\-?xgpcoh3i{a X7mcim)Ghzhs\\ \n#Xlc2dhhsim"Hf"e7SGT\\\\TCO@6:!e\t%mcr_wb86zZpa=_nmipp)Giody\'|Rz\\-?ylr]{bublft8{qqnMskb\t)LNP3Y@OEcHK;_:18lX~enKq]lB|Yyo8go^r#Ccjgu_acqehVTinmv*KEGBR@6;zfrkpmx`U_ydy[N3cGMdu_zfvhzm8go^r#Cjy]wi{imHl_~gnFCP\\Pkf `|\'zV{^uf0;G;`6X[jfxbw-navdz\\7>]L<\\Uq/jifjnt!HIZ  XphupmoVfzkok!j;cflklk&OHX9vg}gnqUp ikF\ngo\'Y6f=S?Q=VY^JQ;35bFLnwj|bxG\ttv^`fy\\/QYHSI^IXUYG[85BUONlthQ\\m^`fy\\/LEEHM\\6H;fDd?N+EO[Dxc\nksguC!cf,JGQNk;F9LQaHUD.?[POa{j|m`fy\\/IIQILMBJIfDd?N+EO[Hkmqmkfsd_lmc2>RH`TK7J7nE^KG(KPY?pt h\nUcXmsi&o_z\\y^35bFV`vdU^~"y\\w^:4`JOsq]uco6whhk=_nmipp)IG^Kk`sC!cf,WL\\FQTWKS7;6\\RRnqjohtqoOo]!\\/AWKb?YH19ZEbg!kgOpbkh9gogueu#Dfejd]\nZw:hfp!MNEQUBTHjKYLWEVFO]TJH=Q9NDN\tR_rdppZbih9ikfs~Pcjnfgdlp#sWtW;6uhr^w^xXPqog!\nNK`REJJ?`!HbpbqbjqfA~bth9>KIbF_@OEcHK;_:19s[\tUx`t`Mskb\t)N;Z4Y@DI0;oc|WtWyVXgnl0hmkmhs\'Mh"_ Hvcyaqa_iwW{Wvl7mcim)Ifp_og!Znc/jifjnt!HhlVta}hch6kgap\'Mn e|dFtifw(W:^FY7bF5CQIZbihWd}m<]rehrl$GIYHjj{Sq_nSqgmkR]~o8go^r#E_xYWlmcx\\ldXgnl0jijk O\\~ZbcnetdijLnqbQ_zf=ajlg(Lbhir)}^!?|eVqijFipZJnjW\tgrnpo4AuW\nhog!\nQFDSQ=QNkI^FLQ]BMD.@w`{api~?\nRtdflx&SL[8JIZ;]:hHPO\\O[7_DYGm?\\;F*HgfoyZsjMdpZvdpp6QKL_ZXHR69;payehh\nI~fl RBVLGJ\\\\TCO@6>zVz\\or2;G;`6dIL5c<XMaJWAK Pgofs_ @orijq[xh3dh_t\nNmvazMoW\tp|^W_]`dryjh?!Zsj55PC]TTEVDeDS<]>:6{kfpTafn gj?uBxV}ttaMskb\t)XH\\69<spsjHpqcy$HFnGJQIA\\)KjlgOk\n`\t%mcr_wb8:{[ufbb~qea6@RC^@N%TZy\\Fpvgu(]JTJHQTKLDG@MAe9]M6?w]rJzqx]p@uaj;uf l7mcim)Lc}hNZ!RRmflx&F;\\IZHP@VRYGCOM)Lc}hNZ!RRmflx&q[yZ1=h_tcjcGrmkz"N<ZMcCVEH]T@DMQ!LWtW\tTmGcl|fi5no\tZ!`\t%mcr_wb8<jesarT}hqjXly]\tdygSc\tfs,rYp_8=YCS3{_Lnnhm`z]zi8go^r#IRQDP[~fz[l7{Xvdpp6ikbror%VEZCQgglxlq:q[tW}g7kgjoqn SOWEa]|kFjiehh\n#q[uY"[5GVITQxUnfOes^reu,PGD>Q91?K4Rh{rqn6kgap\'S=P<rpS_r_h(xd|[y4~hwc0hmkmhs\'S=PGritgsfFbmcl[Lhta}-OK]PKAZQO%WIPV3.9W3-D)5-8%E):/90A/:"N\\xK"_;ebki$L^xZI[hV{\\wd0hmkmhs\'SfoXr%o_q]/Cziq$Ug|UnqHkzjgh9n\ti~`\tkfbPgf[xZxEm {Xwfvd4Fthw)\\^zR `wcXap_Rdwchf=_nmipp)Ob\tg8oF3\t\\biMlhlmith5e#cyntpmaRcn\\v^ @s%mcr_wb8@joLhta}-FKU\\\\?jNOIOCNKPP0ChsQkjd{ SBV^XGgTOBjJOFm2aKO*O]|\\{VwZLhta}-FKU\\\\?j>SKQFZ=MC\\$N_$WtWyVTinmv*LLSSaFi>:<rpcmejg?!Zsj56^@hUM[N.7 V`"[}R\t[Ftifw(PDRU]=n9:4.Gmvhclmn>#V{k/BSEbPWTSKTBP7B+Ma _uU}_Oos_ %EMQWYEkI1CP6X4lbgo{+tUx`6FW5VFvrtmwGme3dh_t\nVHFEXlxh9gogueu#NQQYqc|jqW{[~aNugj|+SGjHKGWAbCBRMGQY_IFJLQ_ENRGHM@Z XNW^rZnBfwIjui~#RIf?T7R@aGMVKF]ZNH[2VE-Kelk(ubzb5`p`n+Oalfg8pqs\\s:{]p,rYp_8BjZpSZX!Lgo{^mYPqog!\nP8QRYJLHSTU>HET\nVdfeiHkm~)v^|X _-Ki\\l[YZyWkS"T7kgjoqn X`nbo>rkbbeld(zVr[3?tWr`Ua|qobrn\\Z|Xr%o_q]/GqYnWZa#eld0jijk X`nboD if_q=y_zi3bl`vgq+Pklb47O<^:mDR:UGSFbH[9J"UasX7CQ?]JKB_ZZHa:a@PLc>RFXD\\?U9;Axcg*XOU7PN]B\\8l@OQXJX=`>TDf@^7N+Pk|fl]n\\~b}_;ebki$R\\vZhj5YtgYqqpwq\tdpJp\'|Rz\\-Mj^v]~ZjdJS}ijr0hmkmhs\'Y_tdpifcr;dh!Vx$uS|X5Nxaz`ub~o|Zw_r[Fpvgu(xZs]{Z;CjxoavqOb~o|n{V{kt,rYp_8EfotW}g[dsqmpzI{_kms6"\\or2:X<NANDNQ_;JRG(X^\tapi~Ksb!\\trYhg[\nZJll`"!WNPA4Mkfqj|fo_p\\Fjiehh\nIncp`v!w`oa4Mkfqj|fo_p\\ScwgxloZY_t[}Z7kgjoqn [jsg!V\t<wcrl1QQ7P?[QUB[BG[IQe:ZMM>m>\\LTCc<RQZ!Uez["\\xm0jijk [mols_ Xugsf1fqcljo\t_enrgj|^z]ziMh|_rZugsfDpm^qWi^t8\tdpp6KUBP\'Zksdreu_xarhOdsdlU"\\xmEhwpk9 `xm<?\\EF*TjhmqcyW{[~aLnpjm`z]ziVb e;ebki$Sl{ejh{k]bmdNe{q4blho%^focjaO]|=~Zi[ufxTu-ko]pkfa`|btjvehNpYw`{gr7|fwXwsk_iqufLqkbzRocf,p]qa\n]1F|ewF~au_zfvhtjx\'|Rz\\-NykkM WxYy[\tgrnpKxqocyn8es_tki*VLF>`BKJv`t6q`pcmB|Yyo8<]?aIPJcEDMW!WJJ6pgjBj]vkk`Pqog!\n[FOC0JW=Piqi[dpa|oqn|+tUx`6Kb4VZfRvYqm|dwj5`p`n+TPKMkY}>yg|Vpkjmr&o_z\\y^3Dc6[sr?wkzft]\tmw_tJpsv[h(zVr[3Dc6[srOmkjY})v^|X _-PiYg[najI{dtTv-p]ub2Fp\\nZp]rJupiYp>q[fksfaXjcgn6kgap\'\\^t]rZu,h]o_\nZUhvbte}x0jijk ]`pesT %flyehlmij$sW}Z}g.NmcrYno8b 6$kflwaefq#sWtW;Enenakq4gpo8es_tki*V]pi\nZUbhkqTlj0hmkmhs\'\\^~`\tkjlkGemqg{[y }Tvd.Nmpvcyno\'zV{^uf0KYAMcnchftW]qcj{cufxGsl!\ny\\oex`/Mb<K;I^tamDnaubth9N`@m7R9MCR<bG[9JUK;U9NQGJKB2GaBP>Tf{ZHCp]p_zi3bl`vgq+UROCub\tAk\\sF\t`Fjiehh\n#q[uY"[5RXCU^y_Pgofs_ %TTKWXHUIdJ`BTR^RGN[MG7PJXNa69JWETYwb_Zl$W3c;\\DI[UL\\9_JiKS=9JWETYwb_Zl7yUPU|-R=\\EY9RZWHd6aF`PID/Mb<UW{ZbXp@t_Zbr"[<^Aa6TVVLOFRQZ!XLNBpgqRgcKiugpKkmv\n]8UFW=JYMGHUH4b\n\\UILiqnGpbMn\ngrkpOyYglminYHT!!w`oa4P\\;[\\~aaVtCjlilrLqa3FHFWFNFaHQKKHZZ\\>Z~`MHNelkMq\\Q_uW"b_dtpq`g`L]}\'|Rz\\-QZ?S[\n]X[n>xansqRmoz]n\\vKs];GBRLKHAk8QEZ7_4]G.O^DVU\tc]^u=vju,p]qa\n]1Ild$\\ldYkzhkf9gogueu#Tfejh^MgwW\n4#Yodt*qp\\]pr8es_tki*W`dlqYFhyS\'5~ehaz+rYyb~a:DuXsch9ulmnGkmXte7mcim)Y\\lmo]e`\tbfp2dhhsim"Zf~ejfgIikg[pm8es_tki*Wlucz\\3chfr[7mcim)Yh}dx`<d}cjr2fdgq!Xjy[}Z7steu+rYyb~a:D pmcW`h_\nAni{ {Xwfvd4Qkl\tO|Zq\\PlfJmkw(xZs]{Z;GrlgNikmY~)xZ{V9Kpsg`1fqcljo\tcejbmA~bth9>KIbF_@OEcHK;_:1Jyg!gncVuxby"tn]\\\nZ}kVPP&q[yZ1Jyg!gncWNT+rYyb~a:F?=/MX@HLk:WHVD;HRDxavq4APOKX[2`B-SVAHl~dw$sW}Z}g.QZFKf}j|\' enZlRvYf_X^r_{\tdFKHukkexcyj\tlW_aiblw^hl^Zxksf=ajlg(]pkfL^~b#R `pl2fdgq![J[DtZrnp*tbt[\tc6OwUrfUpe[nFuhy$sW}Z}g.SM?M@j^yf~crjtchWw_#izhlQ!&}b0?WJVFPN]>RP_>C?cK6NOTIN[%n8aS.Sm_Gg~`w[zj;:pktao_Qgwey !gjbmPz^iYWdwb!~d\\c?wkhgna~$Yg}grlgAzouf9gogueu#Xcf9vmqbgb\n $Tuhf]|b4blho%eVo>M0Ggpj ijHl`sX{hpcKlthps~\'OE\\DJAc;ROZIJHf4d9ODT[QKJ9c\'a^p8Y)DmqhxnqGjdkW \\wfEkvqkl\t)MH^JlIF?HWEOR;JHf4XAMHPC4TkVRG<<}^}lucV]q^qgndn5~a}dzp6BR9X@XMm2_IBWc:X@R:WUI;]7RMI(_bh;W-Mh{a!kfPifg_~^s]Ja}gnwv*NOGAP=_?T6_#Xcf?O,Odrf|ftEnmfazft[Njxmsi %N?\\WVBM9JHfEcB[@IAg?RCNFiLWKR#Xcf?O,Odrf|ftEnmfazft[Njxmsi %N?\\WWLMCX<VD\\RODG@J>I?jDXMSCY<BTI<b=[BUEU7]G\\+YajDR&]`x]scvehAsfw_#i3;S7\\8WSa=ZOGMj=_?T6_#Xcf?O,^ZsZldxapBqj|b~h9A\\:[6OLGDIJb;`IF9O?TA]^INMBTS^Dd>:HrYHJ6JhhpZw_uYRbwsgt|+S5cZ]>`GRI`UEAWY`>R;VGc\n`ddCT/XYy_okw_t:plx]{n:INCLAdGhDZLQOK87Ro[U=?Iflh]ucz\\Heuftk}-WJQCUFXZLE]4XVBAXAY?kJS?MAa@hHP@Q@KG7Ro[U=?Iflh]ucz\\Heuftk}-WJQCUFXZLNT7RI`@MFGCZ<1MlTV?;Qgjlbx]ybMh|erou,YFVCSCJ:f;]G5Vg^OI8Fpin^\nZ{^Dmrlhr\n#q[uY"[5Vg^OIXYy_okw_t:plx]{n:7TESQe8L1.Sm_M@]`x]scvehAsfw_#i3BP@T4[+YajDRFpin^\nZ{^Dmrlhr\n#TDLQ\\<WTU[KLTG_<XMm4\\CPP0Oh\\SAW[uVtermi?wkzY"o8I]=f>PLcGI@_:YU\\@XG\\+YajDRFpin^\nZ{^Dmrlhr\n#W=I3C\n`ddCTOkbo`|b|XPforipw(_6RFS7n6XUGNIDK b`lDweNejkelliz:{[uf=>NXWL4TkVVd~:|ZzXugsfHpqcy$uS|X5Vg^Sfz7^NU^&W\tXncwJxfq#sWtW;JnaMe|@YGX\\~kwi;]smq>oimi8(Hd T!-navdz\\7Ro[YZ Ks_rklnuds;}W}g7@V[\\>X;PO6PsSX`uRvYqmuineu7$Xws0IWRY9OMK@:HrYLgxLu[zhnjpa}8\tdpp6ikbror%eVoJpao]w(OATIP@V\n`ddOw`qY\t)xZ{V9NsgxYefqHyhlS|7necqtq]ftook<_ndf*\\EOB\niuHlc#X|s0HW>J=YB6Qa=aGsmg]vm{g3dh_t\njorhq`ghtjx<oTu\\/GHDH&meubpUpgrnp?i`nY9PZ=OERIF?HQ/[|eq_jS"\\xmE]kek"xj#:rU;ebki$dj|anYhfxbwBc_pb4g!\\z<oTu\\/jifjnt!ffw^xVjskkv@gWs`8n~Unkf,rYp_8Wwe~eteRmvazcgWp)Nb RocfBvYjO|atWk {Xwfvd4`gWs`}\'rVy\\uc2dhhsim"jSr[nr0dip4blho%qRp_fq2edno]3bl`vgq+e]kekg9jz^|\ny\\oex`/]tgtcl rfr-navdz\\7^rk}^r%dqm&q[yZ1Yod~`n-il}?kbncwZ\n\\veh,gjdmt<ukWd~Vnru*tbt[\tc6\\vc|df,pgd^`^r[z {Xwfvd4`nfzho\'|e})429&j_\nDw_n[}TuFwelbVUr`8es_tki*g`uiyZ3mlT!gxqg*qkyhlgv\'zV{^uf0[kl{bj$~Wqf}nta6lt8zrxe}RqGsmkjhm\t#fZkD#_nr0hmkmhs\'ma\n`z\\/uiZvn{gj$v`Sb\nmnkiaVfzb|^ d;[jqtYw]t#q[uY"[5bjnwjk"!`ll!`\t\\/mr<rqzatWkB bpqgo{+j]~kkmqY;ebki$fb~dr[5itU|sqnm+ubOj gz`n[Qps_u_\th3]lfahudu*tbt[\tc6\\vc|df,{]em\ndw[5a}7xvphw^jD}jqksd\n%i_wDlm\nZs[y {Xwfvd4`nfzho\'$Vojumv]1iz9tmu^~TmOtkookg~)|^{`"\\Mgwlhhqg3bl`vgq+ehqmhclmn=oen%epshH`rZhj3U~a|nna6akV\nb8es_tki*ggqm{aj$ld b{-navdz\\7^yg `y\\/evgxj:cfcl\trbwrqhm+mfzpz<}]yXqqi\\1fqcljo\trbwrqhm+rcr)v^|X _-asfvixZ3chdzGrlghqkk"w`x`!Y9Zplwgo_:hhhlW}fqnv*tbt[\tc6\\}_\nfmc2llgq#q[uY"[5bqj{lrY9osfsD Xnn2dhhsim"jd\'c}n0o}_z`p)n^qc%gu,rYp_8Xwowf~!|tdptb4Yy^|r~e;cflklk&og~f{a=f~avhm+mYy`|Z!VX\\z,rYp_8Ym-nSF_qhjh6tx]\t`vg<_ndf*havjmih^Lhta}-p]ub2Y"ook|Ry%BbhKh[~XmFya$\\mdt*tbt[\tc6^%erio_p&Lm_ZfhjZ_exuk`moOb~okezVq%upgLkl{iybl "elAkjl+sY\tcy]wkr#gcx[k(zVr[3X#_uRenmbt s0v^s_Bk4h9&zluij$uS|X5gko|lxm9ayk$R\t[/jifjnt!m_zf~e!-taxigWpN~Z!V;cflklk&uci[\tWs7K+kjlb~Yo?L\'rR Xc_w]v(xZs]{Z;\\|Rg_}ok7zi~^%e9bq/6n9sme9_5i \\}dnj6ikbror%z[n.kdhnf]:lw_{W{a7kgjoqn x\\!<}_{\\drmgqm\\ZwIld$X{+oavrhU})\nb Zocf*qg}L`8X[zexbwCgokood\tdyg<_ndf*rYycsVyey pcyMcim)tU dqZ!`\t%dmscl_QcfXsWs\nw`xeo^zc})mksUreugedv(~ZvkpdtH|dtImaoU\tdyg<]rehrl$q[!^lW{a !rrRnwquWzgRZ|Uy\\sPi_lm\nZw[k }Tvd.jiso[loyk<^\nDbvXgx]tEt_uf!\nw`xeo^zc})z^\n^vjtgsfv(}jjh\n }Tvd.jiso[loyk<a|`orijHhmWq[k\t}T\thi]|lx"}`{nsd DfbmYN_$H~i{W|4lbgo{+tUx`6gogv^brsj1mqg{_jWfb{jgn6`ub\tmyezV\t%plijui~!sW}[vT}nt*{bxjt^oP}cx\\s,ggqn~dqbld=bwrv]|bi\\liq^:_nmjeelrl:hjh}[rX`ntgmo4g\t\\|m[V\njbeik1fqcljo\t~cnm0hmkmhs\'yis_QXu_fYv_:cfcl\t~ekhvqu?xc!nok<gritgsf/i~^jd{S"\\xm.lmolc}hkgqV;ZmcejP_mhzhle=ajlg(xbxZzmwZ|Tr%o_zaj[\n^td5f~=\\NP*tbt[\tc6iscsfskeff_:cflpYpgrnp*|vvY7k|b|e;ebki$sl{buj5`p`n+u]up{br<|\'qR{Jim{&q[yZ1ijd~_uA{*tbt[\tc6lqc|cmRs&o_z\\y^3etg]hoawrz"w`x`!Y9jfrXap_{jy$uS|X5rram`nG#i~asdvj/aeff_x#q[uY"[5rram`nG#i~asdvj/eilYiuXji5^tapsj({mkYnc]r|eu\\tgw&s_zYndn\t$\\|tch^fkk{j|m<Yr`hfx$yc\tjfb][tjyntp6mg[pGo_!~"`tsedYcqlueyf=jrcvd4tkVLkz\'sb!Xmq2fdgq!|[i]xgL`p_miGbthkmw`{=s_q]1hmbj"~Wq^rsTayrkg\tAsesD%jucq&o_z\\y^3itUthvNmpu` `VhqRy=jjiK|m\nZrKY>=_nmipp)}Ymfsmaar\\dfKjdgyVw$sW}Z}g.sm_q]\tNz^sTuIfas_qc\n^tdLd b{-p]ub2kp]ub!D}\\falJh]{\\s_{[~aNugj|+I5[O_KW?TVQFEKH&$VsZlj=c~anekCkU\tp|^<Ur]bsplEl{lx[yB bvovE{>r`zro]<_ndf*}Yq^qm3f|T{\\lEg]|rxY9bomW^n^fQmrh(xZs]{Z;ljmfa\n+vimgs\\TVnkvpi&lmPZkW|^"5{nyomo4`piqmv~%Xobip1j Wq_j8tT}tta6fyG\t\\~b evZtCrYefqY3dh_t').split(a.f.a([71])), bb = Sa.length, Ca, Ta = [];
                            for (Ca = 0; Ca < bb; Ca++)
                                Ta.push(g(Sa[Ca], Ra.contentWindow));
                            Ka = a.f.a(Ta);
                        } else
                            Ka = '';
                        ab.is = Ka;
                        l.iv = 8;
                        l.qt = v;
                        l.gz = a.c.ap() ? 1 : 0;
                        l.hh = a.c.aq() ? 1 : 0;
                        l.hn = a.c.ar() ? 1 : 0;
                        var cb = l, La;
                        try {
                            La = !a.g.d(window.top) && window.top.name ? a.f.h(window.top.name.substring(0, 50 > window.top.name.length ? window.top.name.length : 50)) : '';
                        } catch (r) {
                            La = '';
                        }
                        cb.tw = La;
                        void 0 !== G && (l.qc = G);
                        void 0 !== J && (l.qd = J);
                        l.qf = x;
                        l.qe = n;
                        l.qh = m;
                        l.qg = I;
                        l.qm = C;
                        l.qa = a.c.w;
                        l.qb = a.c.x;
                        l.qi = a.c.u;
                        l.qj = a.c.v;
                        var db = l, Ua, Da = [];
                        try {
                            var eb = a.f.a([
                                    47,
                                    40,
                                    34,
                                    28,
                                    30,
                                    44,
                                    84,
                                    34,
                                    39,
                                    34,
                                    45,
                                    30,
                                    29,
                                    84
                                ]), fb = a.f.a([
                                    17,
                                    46,
                                    39,
                                    19,
                                    26,
                                    44,
                                    36
                                ]), gb = a.f.a([
                                    2,
                                    26,
                                    39,
                                    28,
                                    30,
                                    37,
                                    19,
                                    26,
                                    44,
                                    36
                                ]), hb = 'undefined' !== typeof window[fb], ib = 'undefined' !== typeof window[gb];
                            Da.push('undefined' !== typeof window[eb] ? 1 : 0);
                            Da.push(hb ? 1 : 0);
                            Da.push(ib ? 1 : 0);
                        } catch (r) {
                        }
                        Ua = Da.join('');
                        db.to = Ua;
                        l.po = c();
                        var jb = l, Va, kb = a.f.a([
                                28,
                                26,
                                39,
                                47,
                                26,
                                44
                            ]), Wa = a.f.a([
                                48,
                                30,
                                27,
                                32,
                                37
                            ]), lb = a.f.a([
                                30,
                                49,
                                41,
                                30,
                                43,
                                34,
                                38,
                                30,
                                39,
                                45,
                                26,
                                37
                            ]), mb = a.f.a([
                                22,
                                4,
                                1,
                                6,
                                11,
                                84,
                                29,
                                30,
                                27,
                                46,
                                32,
                                84,
                                43,
                                30,
                                39,
                                29,
                                30,
                                43,
                                30,
                                43,
                                84,
                                34,
                                39,
                                31,
                                40
                            ]), nb = a.f.a([
                                20,
                                13,
                                12,
                                0,
                                18,
                                10,
                                4,
                                3,
                                84,
                                21,
                                4,
                                13,
                                3,
                                14,
                                17,
                                84,
                                22,
                                4,
                                1,
                                6,
                                11
                            ]), ob = a.f.a([
                                20,
                                13,
                                12,
                                0,
                                18,
                                10,
                                4,
                                3,
                                84,
                                17,
                                4,
                                13,
                                3,
                                4,
                                17,
                                4,
                                17,
                                84,
                                22,
                                4,
                                1,
                                6,
                                11
                            ]), pb = a.f.a([
                                47,
                                30,
                                39,
                                29,
                                40,
                                43
                            ]), qb = a.f.a([
                                43,
                                30,
                                39,
                                29,
                                30,
                                43,
                                30,
                                43
                            ]), rb = a.f.a([
                                28,
                                43,
                                30,
                                26,
                                45,
                                30,
                                4,
                                37,
                                30,
                                38,
                                30,
                                39,
                                45
                            ]), Xa = a.f.a([
                                32,
                                30,
                                45,
                                2,
                                40,
                                39,
                                45,
                                30,
                                49,
                                45
                            ]), sb = a.f.a([
                                32,
                                30,
                                45,
                                4,
                                49,
                                45,
                                30,
                                39,
                                44,
                                34,
                                40,
                                39
                            ]), Ya = a.f.a([
                                32,
                                30,
                                45,
                                15,
                                26,
                                43,
                                26,
                                38,
                                30,
                                45,
                                30,
                                43
                            ]), Ma = {};
                        try {
                            var Za = document[rb](kb), Na = Za[Xa](Wa) || Za[Xa](lb + '-' + Wa), $a = Na[sb](mb);
                            Ma[pb] = Na[Ya]($a[nb]);
                            Ma[qb] = Na[Ya]($a[ob]);
                        } catch (r) {
                        }
                        Va = a.f.h(a.f.l(Ma));
                        jb.vy = Va;
                        b && (l.mst = b);
                        if (z)
                            try {
                                document.body.removeChild(z);
                            } catch (r) {
                            }
                        return a.a.i(l);
                    };
                }(u));
                (function (a) {
                    function k(b) {
                        var c = a.f.r(!0);
                        b = 'https://geo.moatads.com/n.js?' + a.y.b(35, b, c, !1, !0).res.querystring;
                        a.ak.a('data', 'MoatDataJsonpRequest', b);
                    }
                    a.f.o = !1;
                    a.f.p = [];
                    a.f.q = {};
                    a.f.q.a = 'appendSpecifics';
                    a.f.q.b = 'appendManual';
                    a.f.q.c = 'onlyHooman';
                    a.f.q.d = 'onlyBot';
                    a.f.q.e = 'onlyNonHiddenAd';
                    var d = {};
                    (function () {
                        a.c.eh() && a.l.e(function () {
                            try {
                                a.c.e.navigator.getBattery().then(function (a) {
                                    d.charging = a.charging;
                                    d.level = a.level;
                                })['catch'](function (a) {
                                });
                            } catch (b) {
                            }
                        }, 1000);
                    }());
                    a.f.r = function (b) {
                        var c;
                        try {
                            r._c && !a.a.u(r._c, 1) ? c = r._c : (c = a.ah.a(), r._c = c);
                        } catch (e) {
                            c = a.ah.a();
                        }
                        if (void 0 === b || !1 === b)
                            c.ql = a.f.s, c.qo = a.f.t;
                        c.qr = a.f.u();
                        d && 'undefined' !== typeof d.charging && a.a.db(d.level) && (c.vf = d.charging ? 1 : 0, c.vg = 100 * d.level);
                        return c;
                    };
                    var f = a.f.a([
                            48,
                            30,
                            27,
                            29,
                            43,
                            34,
                            47,
                            30,
                            43
                        ]), g = a.f.a([
                            30,
                            47,
                            26,
                            37,
                            46,
                            26,
                            45,
                            30
                        ]), c = a.f.a([
                            43,
                            30,
                            44,
                            41,
                            40,
                            39,
                            44,
                            30
                        ]), b = [
                            f,
                            g
                        ].join('-'), e = [
                            b,
                            c
                        ].join('-');
                    try {
                        a.f.s = a.f.h(a.f.l(a.c.e.navigator.plugins, 'name'));
                    } catch (p) {
                    }
                    a.f.u = function () {
                        return 0;
                    };
                    a.f.t = 0;
                    a.f.v = function () {
                    };
                    var h = 'nu ib dc ob oh lt ab n nm sp pt'.split(' ');
                    a.f.w = function (b, c, e) {
                        if ((a.f.q.a in c || a.f.q.b in c) && void 0 === a.f.x)
                            return !1;
                        var d = a.a.i(a.f.x);
                        void 0 === d.n && a.ai.a(e) && (d.n = 1);
                        a.f.q.a in c ? a.a.forEach(h, function (a, c) {
                            b = a in d ? b + ('&' + a + '=1') : b + ('&' + a + '=0');
                        }) : a.f.q.b in c && a.a.forEach(h, function (c, e) {
                            a.a.ax(a.f.q.b, c) && (b = c in d ? b + ('&' + c + '=1') : b + ('&' + c + '=0'));
                        });
                        return a.f.q.c in c && a.f.q.e in c ? a.f.y(e) ? a.f.z(b) : !1 : a.f.q.c in c ? 0 === a.f.aa ? a.f.z(b) : !1 : a.f.q.d in c ? 1 === a.f.aa ? a.f.z(b) : !1 : a.f.z(b);
                    };
                    a.f.z = function (b) {
                        new a.c.e.Image().src = b;
                        return !0;
                    };
                    a.f.ab = function (b, c) {
                        b(a.f.aa);
                    };
                    a.f.ac = function (a, b, c) {
                        l.add(a, b, c);
                    };
                    a.f.ad = function (b, c) {
                        if (void 0 === a.f.aa)
                            return a.f.p.push({
                                callback: b,
                                opts: c
                            });
                        a.f.ab(b, c);
                    };
                    a.f.ae = function () {
                        for (var b = 0; b < a.f.p.length; b++)
                            if (a.f.p.hasOwnProperty(b)) {
                                var c = a.f.p[b];
                                a.f.ab(c.callback, c.opts);
                            }
                    };
                    a.f.af = function (b, c) {
                        var e = a.f.r();
                        a.aj && a.aj.a && a.aj.a.imaSDK ? b.moatClientLevel3 && a.y.b(34, b, e, !1, !0) : a.y.b(34, b, e, !1, !0);
                    };
                    a.f.ag = function (c) {
                        var d = a.a.dz(c);
                        if (!0 !== a.f.ah) {
                            a.f.ah = !0;
                            a.f.af(c);
                            a.a.du({ all: !0 }, d) && k(c);
                            var h = function () {
                                    var b = {};
                                    b.qr = a.f.u();
                                    b.qo = a.f.t;
                                    a.y.b(36, c, b);
                                }, g = a.c.e.document;
                            a.l.c(g, b, function (c) {
                                a.l.d(g, b, null, 'mswe');
                                a.f.u = function () {
                                    return 1;
                                };
                                h();
                            }, 'mswe');
                            a.l.c(g, e, function (b) {
                                a.l.d(g, e, null, 'mswer');
                                a.f.u = function () {
                                    return 1;
                                };
                                h();
                            }, 'mswer');
                        }
                    };
                    a.f.ai = function () {
                        var c = a.c.e.document;
                        a.l.d(c, b, null, 'mswe');
                        a.l.d(c, e, null, 'mswer');
                    };
                    a.f.y = function (b) {
                        return 0 == a.f.aa && !1 === a.ai.a(b);
                    };
                    a.f.aj = function (a) {
                        return a && 'object' === typeof a && 'n' in a;
                    };
                    a.f.ak = function () {
                        var a;
                        a = w && w.sinh ? 10000000000 * (w.sinh(w.sinh(w.sinh(w.sinh(1)))) - 3.81278003) : -2;
                        a = a.toString();
                        return 0 === a.indexOf('7.600') ? a.substring(5) : -1;
                    };
                    var l = function () {
                        function b(a, c, e) {
                            this.pixel = a;
                            this.opts = c;
                            this.adNum = e;
                        }
                        function c() {
                            a.a.forEach(e, function (b, c) {
                                a.f.w(b.pixel, b.opts, b.adNum) && delete e[c];
                            });
                        }
                        var e = {};
                        a.k.a.azsx('hiddenAds:updated', c);
                        return {
                            add: function (d, h, g) {
                                d = new b(d, h, g);
                                h = a.a.di();
                                e[h] = d;
                                c();
                            },
                            checkPixels: c
                        };
                    }();
                }(u));
                (function (a) {
                    function k(b) {
                        var c = {
                            window: 0,
                            transparent: 1,
                            opaque: 2,
                            direct: 3,
                            gpu: 4
                        };
                        if ('EMBED' === b.tagName)
                            var d = a.a.getAttribute(b, 'wmode');
                        else if ('OBJECT' === b.tagName) {
                            b = b.getElementsByTagName('param');
                            for (var g = 0; g < b.length; g++) {
                                var f = b[g], k = a.a.getAttribute(f, 'name'), f = a.a.getAttribute(f, 'value');
                                if ('wmode' === k) {
                                    d = f;
                                    break;
                                }
                            }
                        }
                        return d && c[d.toLowerCase()] || 5;
                    }
                    function d(b) {
                        try {
                            if (!b)
                                return !1;
                            var c = b, d;
                            if ('DIV' === c.tagName || 'A' === c.tagName)
                                (c = b.getElementsByTagName('EMBED')[0]) || (c = b.getElementsByTagName('OBJECT')[0]), c || (c = b.getElementsByTagName('IMG')[0]), c || (c = b);
                            1 === c.nodeType && 'IMG' !== c.nodeName && 'EMBED' !== c.nodeName && 'OBJECT' !== c.nodeName && (c = b.getElementsByTagName('EMBED')[0] || b.getElementsByTagName('OBJECT')[0] || b.getElementsByTagName('IMG')[0] || b);
                            if ('OBJECT' === c.tagName) {
                                for (b = 0; b < c.children.length; b++)
                                    if ('movie' === c.children[b].name || 'Movie' === c.children[b].name)
                                        d = c.children[b].value;
                                c.object && c.object.Movie ? d = c.object.Movie : c.data && -1 !== c.data.indexOf('swf') && (d = c.data);
                            }
                            'EMBED' !== c.tagName && 'IMG' !== c.tagName || !c.src || (d = c.src);
                            d || (d = a.a.bf(c));
                            var g = a.af.a(d, c);
                            return {
                                adURL: d,
                                flashVars: g
                            };
                        } catch (f) {
                            return !1;
                        }
                    }
                    function f(b) {
                        var c = b.el, h = b.url, g = b.flashVars, f = b.adIds, t = a.a.dz(f);
                        this.getFormat = function () {
                            return t;
                        };
                        1 === b.adIds.skin && (this.adContent = b.adContent);
                        new A().getTime();
                        this.ao = f;
                        this.FIND_AD_TRIES = f.numTries || 0;
                        var q = d(c);
                        if (q && q.adURL && g)
                            for (var y in q.flashVars)
                                q.flashVars.hasOwnProperty(y) && (g[y] = q.flashVars[y]);
                        q && q.flashVars && (g = q.flashVars);
                        if ('string' !== typeof h || 'div' === h.toLowerCase() || 'a' === h.toLowerCase())
                            h = q && q.adURL || '-';
                        h && 0 !== h.toLowerCase().indexOf('http:') && 0 !== h.toLowerCase().indexOf('https:') && ('//' === h.substring(0, 2) ? h = window.location.protocol + h : '/' === h[0] ? h = window.location.protocol + '//' + window.location.host + h : (q = window.location.pathname.split('/').slice(0, -1).join('/'), h = window.location.protocol + '//' + window.location.host + '/' + q + (q ? '/' : '') + h));
                        'IFRAME' !== c.tagName && 'IMG' !== c.tagName && -1 === h.indexOf('googlesyndication') && (h = h.split('?')[0]);
                        this.zr = f.adNum;
                        this.MMAK_ID = f.mmakAdKey ? f.mmakAdKey : 'm' + this.zr;
                        this.yg = a.a.di();
                        this.TAGID = a.c.az;
                        a.p.h(this.yg, a.c.ax.a);
                        B[this.zr] = this;
                        a.d.h(this.zr, [c]);
                        this.ae = h;
                        this.aa = c;
                        a.k.a.zaxs('adElementUpdate');
                        this.isInIframe = (this.WINDOW = h = a.a.be(this.aa)) && h != h.parent;
                        this.proxyTrackingEnabled = this.isSREMeasurable = !1;
                        this.debugData = {
                            version: '3',
                            trueVisiblePercent: null,
                            update: function (a) {
                                this.trueVisiblePercent = a;
                            },
                            getValue: function () {
                                var a;
                                a = 'number' === typeof this.trueVisiblePercent ? w.round(100 * this.trueVisiblePercent) : '-';
                                return this.version + ':' + a;
                            }
                        };
                        this.setDimensions = function () {
                            var b;
                            b = new a.z.j(c);
                            this.INITIAL_WIDTH = parseInt(b.width);
                            this.INITIAL_HEIGHT = parseInt(b.height);
                        };
                        this.setDimensions();
                        'undefined' === typeof g && (g = {});
                        a.p.l(qa);
                        this.eg = [];
                        this.ee = {};
                        a.aa.d.a(this);
                        a.aa.e.a(this);
                        a.ae.b(this);
                        this.DfpSlot = (f.trackedFromDfpHeaderTag || f.trackedFromSlotTag) && f.slotMappingId ? a.an.a()[f.slotMappingId] : a.an.b();
                        a.a.du({ all: 30 }, t) && a.ao.a(this);
                        this.get_width = function () {
                            return f.initWidth ? f.initWidth : this.INITIAL_WIDTH ? this.INITIAL_WIDTH : !1;
                        };
                        this.get_height = function () {
                            return f.initHeight ? f.initHeight : this.INITIAL_HEIGHT ? this.INITIAL_HEIGHT : !1;
                        };
                        this.getScreenRealEstate = function () {
                            var b, c, e = a.c.w, d = a.c.x;
                            b = this.INITIAL_WIDTH;
                            c = this.INITIAL_HEIGHT;
                            return e && d && b && c ? w.max(0, w.min(1, b * c / (e * d))) : 0;
                        };
                        a.ac.f(this);
                        this.ag = g;
                        this.ai = 0;
                        this.an = this.am = this.al = this.ak = this.aj = void 0;
                        this.ar = [];
                        this.as = [];
                        this.at = [];
                        this.av = this.au = a.r.a.a.a;
                        this.ax = a.r.a.b.a;
                        this.ay = a.r.a.c.a;
                        this.ba = this.az = a.r.a.d.a;
                        this.bb = a.r.a.e.a;
                        this.by = this.bx = this.bw = this.bv = this.bu = this.bt = this.bs = this.br = this.bq = this.bp = this.bo = this.bm = this.bl = this.bk = this.bi = this.bh = this.bg = this.bf = this.be = this.bd = this.bc = void 0;
                        this.ca = this.bz = !1;
                        this.cb = this.cu = this.ct = void 0;
                        this.cc = +new A() + 120000;
                        this.ci = +new A();
                        this.cl = this.cm = void 0;
                        this.cn = 0;
                        this.ck = a.r.a.f.a;
                        this.cd = !1;
                        this.cy = void 0;
                        this.dt = !1;
                        this.db = void 0;
                        this.cf = this.ce = !1;
                        this.af = Number(this.ef);
                        this.eq = !1;
                        this.ds = this.ch = this.dr = this.cg = 0;
                        this.dq = this.bn = void 0;
                        this.IR5 = {
                            MIN: {
                                x: void 0,
                                y: void 0
                            },
                            MAX: {
                                x: void 0,
                                y: void 0
                            },
                            AREA: 0
                        };
                        this.dm = 0;
                        this.ep = this.dd = !1;
                        this.aq = {};
                        this.aq.g = 0;
                        this.aq[1] = 0;
                        this.aq[2] = 0;
                        this.aq[3] = 0;
                        this.aq[13] = 0;
                        this.aq[0] = 0;
                        this.aq[4] = 0;
                        this.aq[5] = 0;
                        this.aq[6] = 0;
                        this.aq[7] = 0;
                        this.aq[9] = 0;
                        this.aq[8] = 0;
                        this.aq[15] = 0;
                        this.aq[16] = 0;
                        this.aq[21] = 0;
                        this.aq[22] = 0;
                        this.aq[23] = 0;
                        this.aq[37] = 0;
                        this.aq.tc = 0;
                        this.aq[46] = 0;
                        this.es = [
                            5,
                            10,
                            15,
                            30,
                            60
                        ];
                        this.doa = [
                            5,
                            10,
                            15,
                            30,
                            60
                        ];
                        this.wasEverInView = this.isCurrentlyTransparent = this.isCurrentlyStacked = void 0;
                        this.an = b.adType || b.opt_props && b.opt_props.adType || a.d.d(c);
                        0 === this.an && (this.WMODE = k(c));
                        a.a.bw(this.aa);
                        b.opt_props && b.opt_props.components && (this.components = b.opt_props.components, this.isCompositeAd = !0);
                        var x = !0;
                        this.disableMeasurability = function () {
                            x = !1;
                        };
                        this.enableMeasurability = function () {
                            x = !0;
                        };
                        this.isMeasurabilityDisabled = function () {
                            return !1 === x;
                        };
                        this.viewabilityMethod = {};
                        this.viewabilityPercent = {
                            strict: '-',
                            sframe: '-',
                            pscope: '-'
                        };
                        this.isValidAdSize = function () {
                            return a.a.bu(this.aa);
                        };
                        a.k.a.zaxs('adInitialized', this);
                        a.d.g(this);
                    }
                    function g(b, c) {
                        for (var d = 0, g = c.length; d < g; d++)
                            a.j.c(b, c[d]);
                    }
                    var c = !0;
                    a.d = {};
                    a.d.f = function (b, c, d, g, p, t, q) {
                        t || a.f.ag(p);
                        var y;
                        y = 1 == arguments.length ? arguments[0] : {
                            el: b,
                            url: c,
                            flashVars: g,
                            adIds: p,
                            opt_props: q
                        };
                        if (a.x.e.a && 1 == p.skin) {
                            var x;
                            x = a.x.e.a(b, p);
                            y.adContent = x;
                        }
                        if (t) {
                            if ('function' === typeof t)
                                return t(b, c, g, p);
                            new A();
                            t.em = !0;
                            B[t.zr] = t;
                            b[M] = t.zr;
                            b[D] = !0;
                            t.aa = b;
                            a.k.a.zaxs('adElementUpdate');
                            t.INITIAL_WIDTH = b.offsetWidth;
                            t.INITIAL_HEIGHT = b.offsetHeight;
                            t.ae = c;
                            t.an = a.d.d(b);
                            0 === t.an && (t.WMODE = k(b));
                            t.ag = g || {};
                            a.j.d(t);
                            y = { e: 0 };
                            y.q = t.aq[0]++;
                            a.y.a(t, y);
                            a.k.a.zaxs('adLoaded', t);
                            return t;
                        }
                        return B[p.adNum] ? B[p.adNum] : new f(y);
                    };
                    a.d.g = function (b) {
                        b.de = isNaN(b.ao.startTime) ? +new A() : b.ao.startTime;
                        b.RAND = b.ao.rand;
                        new A().getTime();
                        a.w.d(b);
                        a.c.c || a.al.a.a();
                        a.j.d(b);
                        a.a.ea([
                            'feather',
                            'display',
                            'video'
                        ], b.ao) && a.t.m('newad', b.zr);
                        b.aa.parentNode && 'swiffycontainer' === b.aa.parentNode.id && a.u.b(['..../../iframe ~ #clicktag'], b, b.aa.parentNode);
                        a.k.a.zaxs('startAdTracking', b);
                        b.dd = !0;
                        var c = { e: 0 };
                        c.q = b.aq[0]++;
                        a.y.a(b, c);
                        a.am.a(b);
                        a.k.a.zaxs('adLoaded', b);
                    };
                    a.d.b = function () {
                        var b, c;
                        for (c in B)
                            B.hasOwnProperty(c) && (b = B[c]) && !b.ep && a.ac.g(b);
                    };
                    a.d.e = function (b) {
                        var c = +new A(), d = c - b.ci;
                        if (0 < b.doa.length) {
                            var g = 1000 * b.doa[0];
                            if (b.counters.laxDwell.tCur >= g) {
                                b.doa.shift();
                                var f = b.es.length ? b.es[0] : 60;
                                if (g < f)
                                    return !1;
                                if (5000 < d)
                                    return !0;
                            }
                        }
                        return 0 < b.es.length && (f = 1000 * b.es[0], a.w.i(b, f)) ? (b.es.shift(), !0) : 0 === b.doa.length && c > b.cc ? (b.cc *= 2, !0) : !1;
                    };
                    a.d.h = function (a, c) {
                        for (var d = 0; d < c.length; d++) {
                            var g = c[d];
                            g[M] = a;
                            g[D] = !0;
                        }
                    };
                    a.d.d = function (a) {
                        return 'IFRAME' === a.tagName ? 2 : 'IMG' === a.tagName ? 1 : 'EMBED' === a.tagName || 'OBJECT' === a.tagName ? 0 : 3;
                    };
                    a.d.i = function (b, c) {
                        a.a.a(c.cc);
                        a.d.j(c);
                    };
                    a.d.k = function (a, c) {
                    };
                    a.d.a = function (b, c) {
                        var d = 0, g;
                        for (g in B)
                            B.hasOwnProperty && B.hasOwnProperty(g) && d++;
                        return d <= (c || 0) ? (a.k.a.esgf('allLocalAdsKilled'), !0) : !1;
                    };
                    a.d.l = function (a) {
                        a.ep = !0;
                        delete B[a.zr];
                        try {
                            a.aa && (a.aa[D] = null, a.aa[M] = null, a.aa = null, a.DfpSlot = null);
                        } catch (c) {
                        }
                        a.groupmV2 = null;
                        a.groupmV3 = null;
                        a.periscopeManager = null;
                        a.secondaryCounters = null;
                        a.mouseEventElements = null;
                        a.publicis = null;
                    };
                    a.d.j = function (b) {
                        if (b && b.video && !b.video.started)
                            return !1;
                        var c = { e: 21 };
                        c.q = b.aq[21]++;
                        a.y.a(b, c);
                        b.unloadPixelSent = !0;
                    };
                    a.d.m = function (a) {
                        return a && a.video;
                    };
                    a.k.a.azsx('adKilled', a.d.i, { includeId: !0 });
                    a.k.a.azsx('adNotFound', a.d.k, { includeId: !0 });
                    a.d.n = g;
                    a.d.o = function (b, c, d, f, p, k, q, y) {
                        var x = { area: 0 };
                        a.a.forEach(b, function (b) {
                            var c = new a.z.j(b);
                            c.area = c.height * c.width;
                            c && c.area >= x.area && (x = b, x.area = c.area);
                        });
                        p.adFindingMethod = 'MULTIPART_ADS';
                        if (c = a.d.f(x, c, d, f, p, k, q))
                            return c.isMultipartAd = !0, c.multipartComponents = b, a.a.h(y) && y.length === b.length ? g(c, y) : g(c, b), c;
                    };
                    a.d.p = function (b, c, d, f, p, k, q, y) {
                        q = q || {};
                        q.components = b;
                        p.adFindingMethod = 'COMPOSITE_ADS';
                        if (c = a.d.f(b[0], c, d, f, p, k, q))
                            return c.isCompositeAd = !0, c.components = b, a.a.h(y) && y.length === b.length ? g(c, y) : g(c, b), c;
                    };
                    a.d.q = function () {
                        c = !1;
                    };
                    a.d.r = function () {
                        c = !0;
                    };
                    a.d.c = function () {
                        return !1 === c;
                    };
                }(u));
                (function (a) {
                    function k(a) {
                        var d = [];
                        if ('string' !== typeof a)
                            return !1;
                        for (var g, f = !1, k = /(.*?[^\\])(?:\\\\)*\//; a;) {
                            if (c(a, '.../'))
                                g = '.../';
                            else if (c(a, '...../'))
                                g = '...../';
                            else if (c(a, '../') || c(a, '..../')) {
                                g = c(a, '../') ? '../' : '..../';
                                for (var q = g.length; c(a.substring(q), g);)
                                    q += g.length;
                                g = a.substring(0, q);
                            } else
                                c(a, '=>/') ? g = '=>/' : c(a, '-/') ? g = '-/' : c(a, '+/') ? g = '+/' : c(a, '$[') ? (g = a.length, q = b(a, ']/') + 2, g = a.substring(0, w.min(g, q))) : c(a, '^/') ? g = '^/' : c(a, 'IN_IFRAME/') ? g = 'IN_IFRAME/' : c(a, 'IN_X_FRAME/') ? g = 'IN_X_FRAME/' : (c(a, '${') ? (g = a.length, q = b(a, '}/') + 2, g = a.substring(0, w.min(g, q))) : g = (f = k.exec(a)) && f[0] ? f[0] : a, f = !0);
                            (a = a.substring(g.length)) && f && (g = g.substring(0, g.length - 1), f = !1);
                            d.push(g);
                        }
                        return d;
                    }
                    function d(b) {
                        if (!b)
                            return !1;
                        if (!a.c.j || 10 < a.a.s() || b.querySelectorAll && b.querySelector && (!b.MoatQSShimSet || b[g]))
                            return !0;
                        b.querySelector = function (a) {
                            a = this.querySelectorAll(a);
                            return a.length ? a[0] : null;
                        };
                        b.querySelectorAll = function (a) {
                            var b = [], c = this.ownerDocument || document, d = c.createElement('style');
                            (c = c.getElementsByTagName('head')[0]) && c.insertBefore(d, c.childNodes[w.max(c.childNodes.length - 1, 0)] || null);
                            d && d.styleSheet && (d.styleSheet.cssText = a + '{shimtest:bar}');
                            a = this.getElementsByTagName('*');
                            for (var c = a.length, e = 0; e < c; e++)
                                a[e].currentStyle && 'bar' === a[e].currentStyle.shimtest && (b[b.length] = a[e]);
                            d.parentNode.removeChild(d);
                            return b;
                        };
                        b.MoatQSShimSet = !0;
                        return b[g] = !0;
                    }
                    function f(b, h, g) {
                        function f(a) {
                            if (x && 0 < x.length)
                                for (var b = x.length, c = 0; c < b; c++)
                                    a = a.replace('$' + c, x[c]);
                            return a;
                        }
                        var t = function (b, c) {
                            if (!b || !c)
                                return !1;
                            if (b.matches)
                                return b.matches(c);
                            if (!d(b.parentNode))
                                return !1;
                            var e = b.parentNode.querySelectorAll(c);
                            if (!e || !e.length)
                                return !1;
                            var h = !1;
                            a.a.forEach(e, function (a) {
                                a === b && (h = !0);
                                return !h;
                            });
                            return h;
                        };
                        b = k(b);
                        if (!b)
                            return !1;
                        for (var q = h, y = 0, x = [], n = function (b) {
                                    return b && a.g.b(b);
                                }, m = function (a) {
                                    return a && a.parentElement;
                                }, I = function (b) {
                                    return b ? (b = a.g.e(b)) && b.body : !1;
                                }, G = function (a, b, c) {
                                    return a ? (a = a.getAttribute(b)) && (c = new RegExp(c).exec(a)) && c.length && 0 < c.length ? c[c.length - 1] : !1 : !1;
                                }, J = 0; J < b.length && 100 > y; J++) {
                            var C = b[J];
                            c(C, '${') && (C = C.substring(2, C.length - 1));
                            if (c(C, '../') || c(C, '..../')) {
                                var z, K;
                                c(C, '../') ? (z = '../', K = m) : (z = '..../', K = n);
                                if (0 !== C.length % z.length)
                                    return !1;
                                for (var E = 0; E < C.length / z.length; E++) {
                                    if (!q || 'HTML' === q.nodeName)
                                        return !1;
                                    q = K(q);
                                    y++;
                                }
                            } else if ('.../' === C)
                                for (C = b[J + 1] && f(b[J + 1]); 100 > y;) {
                                    if (q && t(q, C)) {
                                        J++;
                                        break;
                                    }
                                    if (!q || 'HTML' === q.nodeName)
                                        return !1;
                                    q = q.parentElement;
                                    y++;
                                }
                            else if ('...../' === C) {
                                q = a.c.e && a.c.e.document && a.c.e.document.body;
                                if (!q)
                                    return !1;
                                y++;
                            } else if ('=>/' === C) {
                                q = I(q);
                                if (!q)
                                    return !1;
                                y++;
                            } else if ('-/' === C) {
                                q = a.a.previousElementSibling(q);
                                if (!q)
                                    return !1;
                                y++;
                            } else if ('+/' === C) {
                                if (q = a.a.nextElementSibling(q), !q)
                                    return !1;
                            } else if (c(C, '$['))
                                if (C = (z = (C = C.substring(2, C.length - 2)) && C.split('|')) && z[0], z = z && z[1], C && z)
                                    if (C = G(q, C, z))
                                        x.push(C), y++;
                                    else
                                        return !1;
                                else
                                    return !1;
                            else if ('^/' === C) {
                                q = h;
                                if (!q)
                                    return !1;
                                y++;
                            } else if ('IN_IFRAME/' === C) {
                                if (!a.c.p)
                                    return !1;
                                y++;
                            } else if ('IN_X_FRAME/' === C) {
                                if (!a.c.en)
                                    return !1;
                                y++;
                            } else if (C = f(C), !t(q, C)) {
                                if (!d(q))
                                    return !1;
                                q = q.querySelectorAll(C);
                                if (g && J === b.length - 1)
                                    return q ? q : !1;
                                if (!q || 1 !== q.length)
                                    return !1;
                                q = q[0];
                            }
                        }
                        return q;
                    }
                    a.u = {};
                    var g = 'MoatQSShimOrd_REUTERS_HEADER1_' + a.c.bj, c = function (a, b) {
                            return 0 === a.indexOf(b) && b;
                        }, b = function (a, b) {
                            var c = a.indexOf(b);
                            return 0 > c ? a.length + 1 : c;
                        };
                    a.u.a = function (b, c) {
                        var d = [];
                        a.a.forEach(b, function (a) {
                            (a = f(a, c)) && d.push(a);
                        });
                        return d;
                    };
                    a.u.c = function (b, c) {
                        var d = [];
                        a.a.forEach(b, function (a) {
                            if (a = f(a, c, !0))
                                for (var b = 0; b < a.length; b++)
                                    d.push(a[b]);
                        });
                        return d;
                    };
                    a.u.b = function (b, c, d) {
                        b = a.u.a(b, d);
                        a.a.forEach(b, function (b) {
                            a.j.c(c, b);
                        });
                        return !!b;
                    };
                }(u));
                (function (a) {
                    function k(b, c, d, e, g, h) {
                        h || (h = window);
                        a.v.d = b;
                        var f = a.v.f, l = a.v.g, k = a.v.h, p = 0, m = function () {
                                var g;
                                c.numTries = p++;
                                if (a.c.eo && a.v.e(m, null, c) || a.c.ep && a.v.e(m, null, c) || a.g.j(h) && h.ebCfg && 43 == h.ebCfg.formatId && 1 == h.ebCfg.dlm && (a.c.eq = !0, a.v.e(m, null, c)))
                                    return !0;
                                if (!g)
                                    try {
                                        l && (g = l(b, c, d, e, null, h));
                                    } catch (k) {
                                    }
                                if (!g && (g = f(b, c, d, e, null, h), !0 === g))
                                    return !0;
                                if (a.a.ea(n, c)) {
                                    var z = !!c.activeConfig;
                                    g && a.t.o(g);
                                    c.activeConfig && !z && (c.adFindingMethod = 'string' === typeof c.adFindingMethod ? 'Exps: ' + c.activeConfig + ' | ' + c.adFindingMethod : 'Exps: ' + c.activeConfig);
                                    g = g && g !== a.t.i;
                                } else
                                    g = g && !0;
                                return g;
                            };
                        if (a.c.c && a.a.ea(n, c)) {
                            var t, q;
                            c && (t = 'skin' in c && 1 == c.skin, q = 'format' in c && 'Wallpaper' == c.format);
                            if (t || q)
                                'width' == a.x.b && a.x.d(), c.skin = 1, t ? (c.isSkin = 1, c.adFindingMethod = 'skin1') : q && (c.isAolSkin = 1, c.adFindingMethod = 'AOL Skin'), m = function () {
                                    var b = a.c.e.document.body;
                                    c.numTries = p++;
                                    if (a.x.e.a(b, c)) {
                                        if (b && a.a.bt(b))
                                            var e = a.a.bf(b), e = a.d.f(b, e || b.nodeName, !1, void 0, c, d);
                                        return e && !0;
                                    }
                                };
                        }
                        g = a.a.bind(null, function (b) {
                            a.y.b(11, b);
                        }, c);
                        a.l.k(m, k, 500, g);
                    }
                    function d(b, c, d, e, g) {
                        var h, f, l, k, n = a.c.e.document.getElementById('eyeDiv');
                        if (L && L.id && 0 <= L.id.indexOf('ebebDnlScript')) {
                            var p = L.id.split('_');
                            p && 3 === p.length && (l = p[1], k = p[2]);
                        }
                        l = l || g.ebAdID;
                        k = k || g.ebRand;
                        l && k && (f = l + '_' + k);
                        if (f && 'object' === typeof g.ebAds && g.ebAds[f] && (k = g.ebAds[f].visibilityMgr && g.ebAds[f].visibilityMgr._res) && a.a.bt(k) && (c.adFindingMethod = 'SIZMEKADS', h = a.d.f(k, k.nodeName, !1, void 0, c, d)))
                            return h;
                        if (h = function () {
                                var b = [], e = a.u.a(['iframe[id*=\'header_iframe_' + f + '\']'], n)[0], g = a.u.a(['iframe[id*=\'leftgutter_iframe_' + f + '\']'], n)[0], l = a.u.a(['iframe[id*=\'rightgutter_iframe_' + f + '\']'], n)[0];
                                if (e)
                                    if (a.a.bt(e))
                                        b.push(e);
                                    else
                                        return !1;
                                if (g)
                                    if (a.a.bt(g))
                                        b.push(g);
                                    else
                                        return !1;
                                if (l)
                                    if (a.a.bt(l))
                                        b.push(l);
                                    else
                                        return !1;
                                if (b && 0 < b.length && (h = a.d.p(b, b[0].nodeName, !1, void 0, c, d)))
                                    return c.adFindingMethod = 'SIZMEKADS-1', h;
                            }())
                            return c.adFindingMethod = a.c.eq ? 'SIZMEKADS-Composite-PL' : 'SIZMEKADS-Composite', h;
                        if (a.c.eq)
                            return !1;
                        if (l && g.gEbBanners && a.a.f(g.gEbBanners)) {
                            var m = !1;
                            a.a.forEach(g.gEbBanners, function (a) {
                                if (a && a.adData && a.adData.nAdID == l)
                                    return m = a, !1;
                            });
                            if (m && (g = m.displayUnit && m.displayUnit.defaultPanel && m.displayUnit.defaultPanel.panelDiv) && g.nodeName && 'div' == g.nodeName.toLowerCase() && (h = y(g, c, d, e)))
                                return c.adFindingMethod = 'SIZMEKADS banner', h;
                        }
                        g = b.getElementsByTagName('div');
                        g = a.a.cg(g);
                        'DIV' === b.nodeName && g.push(b);
                        if (g && 0 < g.length) {
                            var t = [];
                            a.a.forEach(g, function (a) {
                                a && a.id && a.id.match(/ebDiv\d+/) && t.push(a);
                            });
                            if (t && 0 < t.length && a.c.e && a.c.e.document) {
                                var q;
                                a.a.forEach(t, function (b) {
                                    var c = a.c.e.document.getElementById(b.id);
                                    if (c && c !== b)
                                        return q = c, !1;
                                });
                                if (q) {
                                    if (h = y(q, c, d, e))
                                        return h;
                                    if (q && a.a.bt(q) && e(q)) {
                                        if (c.adFindingMethod = 'SIZMEKADS adDvi', h = a.d.f(q, q.nodeName, !1, void 0, c, d))
                                            return h;
                                    } else {
                                        b = q.getElementsByTagName('iframe');
                                        g = q.id.split('ebDiv')[1];
                                        var x = new RegExp('ebBannerIFrame_\\d+_' + g), r;
                                        if (b && 0 < b.length && (a.a.forEach(b, function (b) {
                                                if (b && b.id && b.id.match(x) && a.a.bt(b))
                                                    return r = b, !1;
                                            }), r && e(r) && (c.adFindingMethod = 'SIZMEKADS banner iframe', h = a.d.f(r, r.nodeName, !1, void 0, c, d))))
                                            return h;
                                    }
                                }
                            }
                        }
                        if (f && n && ((e = a.u.a(['div[id*=\'' + f + '\']'], n)[0]) || (e = a.u.a(['div[id^=\'eb\'][id*=\'' + f + '\']'], n)[0]), e && ((h = y(e, c, d)) || a.a.bt(e) && (c.adFindingMethod = 'SIZMEKADS-Breakout', h = a.d.f(e, e.nodeName, !1, void 0, c, d)))))
                            return h;
                    }
                    function f(b, c, d, e, g) {
                        function h(b) {
                            return b ? a.u.a(['div.jpstage'], b)[0] || !1 : !1;
                        }
                        var f = h(b), l = a.c.e.document;
                        e && !f && (f = a.u.a([
                            '..../../div.jpplatform_' + e,
                            '...../div[id=\'jpplatform_' + e + '\']',
                            '...../div.jpplatform_' + e
                        ], b)[0]);
                        f || (f = h(l.getElementById('jpsuperheader')));
                        f || (f = h(a.a.getElementsByClassName('jpeditorialunit', 'DIV', l.body)[0]));
                        f || (f = h(l.getElementById('jpd_adhesion')));
                        f || (b = (b = l.getElementById('jp_overlay') || e && l.getElementById('jp_overlay_' + e)) && a.a.getElementsByClassName('jppanel', 'DIV', b)) && 1 <= b.length && a.a.forEach(b, function (b) {
                            if (b && a.a.bt(b))
                                return f = b, !1;
                        });
                        f || (l = l.getElementById('jpd_expfooter'), f = h(l));
                        if (f && a.a.bt(f) && g(f) && (c.adFindingMethod = 'JETPACKDIGITALADS', ad = a.d.f(f, f.nodeName, !1, void 0, c, d)))
                            return ad;
                    }
                    function g(b, c, d, e) {
                        if ((b = a.a.getElementsByClassName('originplatform-ad', 'SCRIPT', a.c.q ? b.ownerDocument && b.ownerDocument.documentElement || b : b)[0]) && b.id && (b = b.id.match(/embed_origin_(\d+)/)) && b[1] && (b = 'OriginPlatformAdUnit-' + b[1] + '-inpage', b = document.getElementById(b) || a.c.q && a.c.e.document.getElementById(b)) && (c.adFindingMethod = 'ORIGINADS', c = a.d.f(b, b.nodeName, !1, void 0, c, d)))
                            return c;
                    }
                    function c(b, c, d, e) {
                        var g, h, f, l = b.childNodes, k = !1;
                        for (g = l.length - 1; 0 <= g; g--) {
                            var n = l[g];
                            '#comment' === n.nodeName && /undertone/i.test(n.nodeValue) ? k = !0 : 'STYLE' === n.nodeName && (n = n.innerHTML.match(/(utpga\d+).+/i)) && 2 === n.length && (f = n[1]);
                        }
                        if (k) {
                            g = a.c.q ? (g = a.g.g(b)) && g.ownerDocument ? g.ownerDocument : document : document;
                            f && (h = g.getElementById(f), !h && a.c.q && (h = document.getElementsById(f)));
                            h || (f = g.getElementsByTagName('div'), a.a.forEach(f, function (a) {
                                if (a && a.id && a.id.match('utpga'))
                                    return h = a, !1;
                            }), !h && a.c.q && (f = document.getElementsByTagName('div'), a.a.forEach(f, function (a) {
                                if (a && a.id && a.id.match('utpga'))
                                    return h = a, !1;
                            })));
                            if (h && ((f = y(h, c, d, e)) || a.a.bt(h) && e(h) && (c.adFindingMethod = 'UNDERTONE pageGrabberDiv', f = a.d.f(h, h.nodeName, !1, void 0, c, d))))
                                return f;
                            if ((f = document.getElementById('utbanner') || a.c.q && a.c.e.document.getElementById('utbanner')) && (f = a.g.e(f)) && f.body && (f = y(f.body, c, d, e)))
                                return c.adFindingMethod = 'UNDERTONE fullPageAdIframe', f;
                            if ((f = a.a.getElementsByClassName('ut_container', 'DIV')[0] || a.c.q && a.a.getElementsByClassName('ut_container', 'DIV', a.c.e.document)[0]) && a.a.bt(f) && e(f))
                                return c.adFindingMethod = 'UNDERTONE screenshift', f = a.d.f(f, f.nodeName, !1, void 0, c, d, { adType: 2 });
                            if (d = document.getElementById('eyeDiv') || a.c.q && a.c.e.document.getElementById('eyeDiv'))
                                for (d = d.getElementsByTagName('object'), g = 0; g < d.length; g++)
                                    if (f = d[g], 'fixed' == f.style.position && a.a.bt(f) && e(f))
                                        return c.adFindingMethod = 'UNDERTONE slider', f = a.d.f({
                                            el: f,
                                            adIds: c
                                        });
                        }
                    }
                    function b(b, c, d, e, g) {
                        if ((b = c.tlview_id || c.tlviewID) && (b = document.getElementById(b) || a.c.e.document.getElementById(b)) && a.a.bt(b) && (c = a.d.f(b, b.nodeName, !1, void 0, c, d)))
                            return c;
                    }
                    function e(b, c, d, e, g) {
                        if (b = a.v.k(['[tleid]'], b, c, d))
                            return b;
                    }
                    function h(b, c, d, e, g) {
                        if (g._tlCreatives && 1 === g._tlCreatives.length && g._tlCreatives[0].hook && (c = (b = g._tlCreatives[0].hook) && a.v.k(['-/[tleid]'], b, c, d)))
                            return c;
                    }
                    function l(b, c, d, e, g, h) {
                        var f, l, k, n, m = [];
                        if (f = e ? e : h.Adform && h.Adform.ADFBannerData && 'string' === typeof h.Adform.ADFBannerData.BN && h.Adform.ADFBannerData.BN) {
                            if (e = (b = h.Adform && h.Adform.adRegister) && b[f])
                                k = e.collapsedContent && e.collapsedContent._element, n = e.expandedContent && e.expandedContent._element, l = e.adBox && e.adBox._attributes && e.adBox._attributes.element;
                            l || a.a.forEach(h.Adform && h.Adform.adData, function (a) {
                                if (l = a && a.bn && a.bn == f && a.container)
                                    return !1;
                            });
                            if (k && n && (a.a.bt(k) || a.a.bt(n)) && (c.adFindingMethod = 'ADFORMADS two-element expandable', h = a.d.f(k, k.nodeName, !1, void 0, c, d, { adType: 2 })))
                                return h.adformCollapsedEl = k, h.adformExpandedEl = n, h;
                            if (n && a.a.bt(n) && (c.adFindingMethod = 'ADFORMADS Single-element expandable', h = a.d.f(n, n.nodeName, !1, void 0, c, d, { adType: 2 })))
                                return h;
                            if (l && a.a.bt(l)) {
                                b && a.a.forEach(b, function (b, c) {
                                    if (c && c.indexOf && -1 < c.indexOf(f + '#')) {
                                        var d = b && b.adBox && b.adBox._attributes && b.adBox._attributes.element;
                                        d && d !== l && a.a.bt(d) && m.push(d);
                                    }
                                });
                                if (0 < m.length && (m.unshift(l), h = a.d.p(m, m[0].nodeName, !1, void 0, c, d, { adType: 2 })))
                                    return c.adFindingMethod = 'ADFORMADS composite', h;
                                c.adFindingMethod = 'ADFORMADS-1';
                                if (h = a.d.f(l, l.nodeName, !1, void 0, c, d, { adType: 2 }))
                                    return h;
                            }
                        }
                    }
                    function p(b, c, d, e, g, h) {
                        if (g && h && (e = a.v.k(['div[id=\'ym_' + g + '\'] > iframe/=>/div[id=\'' + h + '\']'], b, c, d)))
                            return c.adFindingMethod = 'YIELDMOADS', e;
                        if (e = a.v.k([
                                '..../iframe[id$=\'_tpi\']/$[id|([0-9]*)_tpi]/../[id=\'$0\']',
                                '..../iframe[id$=\'_tpi\']/../div.ym/$[data-lf-id|([0-9]+)]/iframe/=>/[id=\'$0\']'
                            ], b, c, d))
                            return c.adFindingMethod = 'YIELDMOADS-1', e;
                        if (e = a.v.k(['div.ym/iframe/=>/body/video.video-elem'], b, c, d))
                            return c.adFindingMethod = 'YIELDMOADS-2', e;
                        if (e = a.v.k(['div.ym'], b, c, d))
                            return c.adFindingMethod = 'YIELDMOADS-3', e;
                    }
                    function t(b, c, d, e) {
                        var g = function (a, b) {
                                return a && a.moatObject && a.moatObject[b];
                            }, h = function (b) {
                                return a.u.a(['div.moat_trackable'], b)[0];
                            }, f = function (b) {
                                return (b = (b = a.g.e(b)) && b.documentElement) && h(b);
                            }, l = function (b) {
                                var c;
                                b = a.v.a(b, a.v.b);
                                a.a.forEach(b, function (a) {
                                    if (c = f(a))
                                        return !1;
                                });
                                return c;
                            }, k = function () {
                                var b = g(n, 'adElement');
                                if (b !== m)
                                    if (a.a.bt(b)) {
                                        var d = p;
                                        m = b;
                                        m[M] = c.adNum;
                                        m[D] = !0;
                                        a.a.bv(m, d, !0);
                                        (b = g(n, 'adProxyElement')) && a.j.c(p, b);
                                    } else
                                        a.a.bu(m) || (b = m, a.ac.g(p), n.removeEventListener('adLoaded', k), b[M] = void 0, b[D] = void 0, ta());
                            };
                        e = function (b) {
                            if (b) {
                                var e = g(n, 'creativeType'), h = g(n, 'adProxyElement');
                                switch (e) {
                                case 'banner':
                                    if (a.a.bt(b)) {
                                        c.adFindingMethod = 'Creative API - Banner';
                                        var f = a.d.f(b, b.nodeName, !1, void 0, c, d);
                                    }
                                    h && a.d.n(f, [h]);
                                    return f;
                                case 'multipart':
                                    if (f = a.d.o(b, 'DIV', !1, void 0, c, d, null, h))
                                        return c.adFindingMethod = 'Creative API - Multipart', f;
                                case 'composite':
                                    if (f = a.d.p(b, 'DIV', !1, void 0, c, d, null, h))
                                        return c.adFindingMethod = 'Creative API - Composite', f;
                                case 'expandable':
                                    return a.a.bt(b) && (c.adFindingMethod = 'Creative API - Expandable', f = a.d.f(b, b.nodeName, !1, void 0, c, d), h && a.d.n(f, [h]), n.addEventListener('adLoaded', k)), f;
                                }
                            }
                        };
                        var n = function (b) {
                            if (a.c.ep)
                                return a.c.ep;
                            var c = h(b);
                            c || (c = l(b));
                            c || (a.c.p ? (c = a.g.b(b), c = f(c)) : c = void 0);
                            if (!c)
                                a: {
                                    if (a.c.q && (b = a.g.g(b))) {
                                        var c = a.a.be(b) === a.c.e, d = a.c.c && 'BODY' === b.nodeName;
                                        if (!c || !d) {
                                            c = h(b);
                                            break a;
                                        }
                                    }
                                    c = void 0;
                                }
                            c && (a.c.ep = c);
                            return c;
                        }(b);
                        if (n) {
                            if (!g(n, 'adLoaded'))
                                return !1;
                            var m = g(n, 'adElement');
                            if (!m)
                                return !1;
                            var p = e(m);
                            return p ? p : !1;
                        }
                    }
                    function q(b, c, d, e) {
                        var g = function (b) {
                            return a.u.a([
                                'div.celtra-ad-v3',
                                'div.celtra-ad-v4'
                            ], b)[0];
                        };
                        e = function (b, c) {
                            var d, e = a.v.a(b, a.v.b);
                            a.a.forEach(e, function (b) {
                                if (b.offsetWidth * b.offsetHeight === c)
                                    return d = a.g.e(b).body, !1;
                            });
                            return d ? d : !1;
                        };
                        var h = function () {
                                var c, d = a.v.a(b, a.v.b);
                                a.a.forEach(d, function (b) {
                                    if ((b = (b = a.g.e(b)) && b.documentElement) && g(b))
                                        return c = g(b), !1;
                                });
                                return c;
                            }, f = function () {
                                if (a.c.q) {
                                    var c = a.g.g(b);
                                    if (c) {
                                        var d = a.a.be(c) === a.c.e, e = a.c.c && 'BODY' === c.nodeName;
                                        d && e || (celtraDiviInParentFrame = g(c));
                                    }
                                }
                            }, l;
                        a.c.eo ? l = a.c.eo : ((l = g(b)) || (l = h()), l || (l = f()));
                        var k;
                        l && (k = l && l.celtra && l.celtra.viewabilityObservee);
                        if (k && a.a.bt(k))
                            return c.adFindingMethod = 'Celtra API', c = a.d.f(k, k.nodeName, !1, void 0, c, d), d = a.a.cs(c), (k = e(k, d)) && a.j.c(c, k), c;
                        l && !k && (a.c.eo = l);
                        return !1;
                    }
                    function y(b, c, d, e) {
                        e = e || function () {
                            return !0;
                        };
                        if (!b)
                            return !1;
                        var g = a.u.a(['div.voxAdData'], b)[0];
                        if ((g = g && g.elementToTrack) && a.a.bt(g))
                            return c.adFindingMethod = 'Vox API', a.d.f(g, g.nodeName, !1, void 0, c, d);
                        var g = a.a.s(), h = null !== g && 11 > g;
                        if (!h)
                            for (var f = b.getElementsByTagName('embed'), g = 0; g < f.length; g++) {
                                var l = f[g];
                                if (!0 !== l[D] && -1 === l.id.indexOf('moatPx') && a.a.bt(l) && l.getAttribute('src') && e(l)) {
                                    var k = l.getAttribute('src');
                                    e = a.af.a(k, l);
                                    c.adFindingMethod = 'AOL-1';
                                    return k = a.d.f(l, k, !1, e, c, d);
                                }
                            }
                        for (var n = b.getElementsByTagName('object'), g = 0; g < n.length; g++)
                            if (f = n[g], a.a.bt(f) && e(f) && ('undefined' === typeof f[D] || !0 !== f[D]) && -1 == f.id.indexOf('moatPx')) {
                                for (var m = 0; m < f.children.length; m++)
                                    if ('movie' === f.children[m].name || 'Movie' === f.children[m].name)
                                        if (k = f.children[m].value, !k || !k.match('scorecardresearch'))
                                            for (var p = 0; p < f.children.length; p++) {
                                                if (!h && 'EMBED' === f.children[p].tagName) {
                                                    l = f.children[p];
                                                    if ('undefined' !== typeof l[D] && !0 === l[D] || -1 != l.id.indexOf('moatPx'))
                                                        continue;
                                                    if (a.a.bt(l) && e(l))
                                                        return e = a.af.a(k, l), c.adFindingMethod = 'AOL Embed', k = a.d.f(l, k, !1, e, c, d);
                                                }
                                                if ('OBJECT' === f.children[p].tagName && (l = f.children[p], a.a.bt(l) && !0 !== l[D] && -1 === l.id.indexOf('moatPx') && e(l)))
                                                    return c.adFindingMethod = 'AOL Object', k = a.d.f(l, void 0, !1, void 0, c, d);
                                            }
                                f.object && f.object.Movie ? k = f.object.Movie : f.data && (k = f.data);
                                if (!k || !k.match('scorecardresearch'))
                                    return e = a.af.a(k, f), c.adFindingMethod = 'SWF ads', k = a.d.f(f, k, !1, e, c, d);
                            }
                        if (k = a.v.m(b, c, d, e))
                            return k;
                        k = b.getElementsByTagName('img');
                        for (g = 0; g < k.length; g++)
                            if (h = k[g], ('undefined' === typeof h[D] || !0 !== h[D]) && a.a.bt(h) && (l = h.getAttribute('src')) && '' !== l && -1 === document.location.href.indexOf(l) && e(h))
                                return c.adFindingMethod = 'Standard Image Ad finding ', a.d.f(h, l, !1, void 0, c, d);
                        if (b = (k = b.getElementsByTagName('canvas')) && k[0]) {
                            if (1 === k.length && a.a.bt(b))
                                return c.adFindingMethod = 'AKQAGAPGEN Canvas', c = a.d.f(b, b.nodeName, !1, void 0, c, d);
                            if (1 < k.length) {
                                if (e(b.parentNode) && a.a.bt(b.parentNode))
                                    return c.adFindingMethod = 'AKQAGAPGEN-1', c = a.d.f(b.parentNode, b.parentNode.nodeName, !1, void 0, c, d);
                                if (a.a.bt(b) && (c.adFindingMethod = 'AKQAGAPGEN-2', c = a.d.f(b, b.nodeName, !1, void 0, c, d)))
                                    return a.c.p ? a.u.b(['.../body'], c, b) : a.u.b(['../div'], c, b), c;
                            }
                        }
                        return !1;
                    }
                    function x(b, c) {
                        var d = [];
                        if (!b)
                            return d;
                        for (var e = a.a.f(b) ? b : b.getElementsByTagName('iframe'), g, h = 0; h < e.length; h++)
                            if (g = e[h], !g[D]) {
                                var f = a.g.e(g) ? !1 : !0;
                                (1 === c && f && a.a.bt(g) || 2 === c && !f) && d.push(g);
                            }
                        return d;
                    }
                    a.v = {};
                    a.v.d = void 0;
                    var n = [
                        'feather',
                        'display'
                    ];
                    a.v.e = function (b, c, d) {
                        return a.c.av.adFindingTimeout ? (a.a.a(a.c.av.adFindingTimeout), a.c.av.adFindingTimeout = null, c || (c = function () {
                            a.y.b(11, d);
                        }), a.l.k(b, 9999, 500, c), !0) : !1;
                    };
                    a.v.c = function () {
                        var b = arguments;
                        a.focus.pageIsPrerendered() ? a.k.a.azsx('noLongerPreRendered', function (a) {
                            k.apply(this, b);
                        }, { once: !0 }) : k.apply(this, b);
                    };
                    a.v.m = function (b, c, d, e) {
                        e = e || function () {
                            return !0;
                        };
                        b = x(b, 1);
                        if (b[0] && a.a.bt(b[0]) && e(b[0]))
                            return c.adFindingMethod = 'findIframeAds', a.d.f(b[0], b[0].src, !1, void 0, c, d);
                    };
                    a.v.l = function (b, c, d, e, g) {
                        var h, f;
                        b = a.v.a(e || b, a.v.b);
                        for (e = 0; e < b.length; e++)
                            if (f = b[e], (g = a.g.e(f)) && g.documentElement) {
                                a: {
                                    h = c;
                                    var l = d;
                                    if (f.id && f.id.match('ebBannerIFrame') && a.a.bt(f) && (h.adFindingMethod = 'sizmek banner iframe', h = a.d.f(f, f.nodeName, !1, void 0, h, l)))
                                        break a;
                                    h = void 0;
                                }
                                if (h)
                                    return h;
                                if (h = a.v.k(['[id=\'ad\']'], g.documentElement, c, d))
                                    return c.adFindingMethod = 'ad', h;
                                if (h = y(g.documentElement, c, d))
                                    return c.adFindingMethod = 'Domsearch friendly iframe', h;
                                if (h)
                                    return h;
                                if (h = a.v.n(g.documentElement, c, d))
                                    return c.adFindingMethod = 'Domsearch again in friendly iframe', h;
                            }
                    };
                    a.v.n = function (b, c, d) {
                        var e;
                        b = a.v.a(b, a.v.b);
                        for (var g = 0; g < b.length; g++)
                            if (e = b[g], (e = a.g.e(e)) && e.documentElement && (e = y(e.documentElement, c, d)))
                                return e;
                    };
                    a.v.j = function (b, c, d) {
                        if (!a.a.ea(n, c))
                            return !1;
                        if ('function' !== typeof d && (b = a.t.n(b, c))) {
                            if (b === a.t.i)
                                return a.t.i;
                            c.adFindingMethod = c.activeConfig ? 'EXP: ' + c.activeConfig : 'EXP Unmapped';
                            return a.d.f(b, 'div', !1, void 0, c, d);
                        }
                    };
                    a.v.o = function (b, c) {
                        if (!ja && !1 !== b.shouldKillAd) {
                            var d = new A().getTime() - c.ao.startTime;
                            !0 !== c.em && !0 !== c.preventTryFindingAdAgain && 5000 > d && (a.v.p(c), b.shouldKillAd = !1);
                        }
                    };
                    a.k.a.azsx('beforeAdKilled', a.v.o);
                    a.v.q = function (a) {
                    };
                    a.v.p = function (b) {
                        if (!0 !== b.em) {
                            delete B[b.zr];
                            a.a.a(b.cc);
                            b.periscopeManager && b.periscopeManager.killAllPixels();
                            var c;
                            (c = L && L.parentNode) && a.v.c(c, b.ao, b, void 0, function () {
                                a.ac.g(b);
                            }, void 0);
                        }
                    };
                    a.v.k = function (b, c, d, e) {
                        b = a.u.a(b, c);
                        var g;
                        a.a.forEach(b, function (b) {
                            if (a.a.bt(b))
                                return g = b, !1;
                        });
                        if (g)
                            return b = a.a.bf(g) || g.src || 'DIV', d.adFindingMethod = 'DOMSEARCH', a.d.f(g, b, !1, void 0, d, e);
                    };
                    var m = function (b, c, d, e, g, h) {
                        d = a.u.a(c, d);
                        d = a.a.filter(d, a.a.bt);
                        if (d.length >= (h ? c.length : 1))
                            return c = a.a.bf(d[0]) || d[0].getAttribute('src') || 'DIV', b(d, c, !1, void 0, e, g);
                    };
                    a.v.r = function (b, c, d, e, g) {
                        return m(a.d.p, b, c, d, e, g);
                    };
                    a.v.s = function (b, c, d, e, g) {
                        return m(a.d.o, b, c, d, e, g);
                    };
                    a.v.i = y;
                    a.v.f = function (k, n, m, x, y, r) {
                        a.g.d(r) && (r = window);
                        r || (r = window);
                        y = y || function () {
                            return !0;
                        };
                        var u = a.v.i, w = a.v.j;
                        if ('undefined' === typeof k)
                            return !1;
                        if (a.c.p && 'HEAD' === k.tagName) {
                            var v = k.parentNode;
                            'HTML' === v.tagName && (v = v.getElementsByTagName('body'), 0 < v.length && (k = v[0]));
                        }
                        if (v = q(k, n, m, y))
                            return v;
                        if (a.c.eo)
                            return !1;
                        if (v = t(k, n, m, y))
                            return v;
                        if (a.c.ep)
                            return !1;
                        if (v = a.v.k(['[id=\'ad\']'], k, n, m))
                            return n.adFindingMethod = 'DOM Id = ad', v;
                        if (v = a.v.k(['../body/ins[class=\'dcmads\'][data-dcm-rendering-mode=\'script\']'], k, n, m))
                            return n.adFindingMethod = 'DCM ins', v;
                        if (v = a.v.k([
                                'div.teads-player/iframe',
                                'div[id^=\'playArea\']'
                            ], k, n, m))
                            return n.adFindingMethod = 'teads', v;
                        if (v = a.v.k(['div.avalanche'], k, n, m))
                            return n.adFindingMethod = 'avalanche', v;
                        if (v = d(k, n, m, y, r))
                            return v;
                        if (a.c.eq)
                            return !1;
                        if (v = n && n.ntvDomSearch)
                            return k = a.a.getElementsByClassName(v), k = a.a.filter(k, a.a.bt), 1 < k.length && (v = a.d.p(k, 'DIV', !1, void 0, n, m)) ? (n.adFindingMethod = 'NativoAds composite ads', v) : 1 === k.length && (n.adFindingMethod = 'NativoAds single ad', v = a.d.f(k[0], k[0].nodeName, !1, void 0, n, m)) ? v : !1;
                        if (v = a.v.k([
                                'div.str-adunit',
                                '[data-str-native-key]',
                                '[data-str-sibling]',
                                '..../../[data-str-native-key]'
                            ], k, n, m))
                            return n.adFindingMethod = 'Sharethrough', v;
                        if (v = a.v.k([
                                '.../[data-gg-moat]/[data-gg-moat-ifr]',
                                '.../[data-gg-moat]',
                                '[data-gg-moat]'
                            ], k, n, m))
                            return n.adFindingMethod = 'GumGum', v;
                        var v = (v = a.c.p ? k.ownerDocument.documentElement : k) && v.getElementsByTagName('script'), A = {}, B, D;
                        v && 0 < v.length && (A.jpd = /ads\.jetpackdigital\.com\/lineitems\/(\d+)\/jpd/, A.adform = /adform\.(?:com|net)\/adfscript\/?\?bn=([0-9]+)/, A.quartz = /ads\.qs\.com/, A.yieldmo = /ads\.yieldmo\.com\/.*\&p=([0-9]+).*\&lf=([0-9]+)/, A.yieldmo2 = /static\.yieldmo\.com\/ym\.[a-z0-9]{2}\.js/, a.a.forEach(v, function (a) {
                            for (var b in A)
                                if (A.hasOwnProperty(b)) {
                                    var c = a && a.getAttribute('src');
                                    if (c && (B = c.match(A[b])))
                                        return D = b, !1;
                                }
                        }));
                        a.u.a([
                            '.../[class*=\'jpeditorialunit\']',
                            '.../[class*=\'jpbanner\']',
                            '.../[id*=\'jpplatform\']',
                            '.../[id*=\'jpd_adhesion\']'
                        ], k)[0] && (D = 'jpd');
                        if (D && 'jpd' === D && (v = f(k, n, m, B && B[1], y)) || (v = g(k, n, m, y)) || D && 'adform' === D && (v = l(k, n, m, B && B[1], y, r)))
                            return v;
                        if (v = b(k, n, m, y, r))
                            return n.adFindingMethod = 'TRIPLELIFTADS: Moat script query string logic - ' + (n.tlview_id ? 'tlview_id' : 'tlviewID'), v;
                        if (v = e(k, n, m, y, r))
                            return n.adFindingMethod = 'TRIPLELIFTADS: Domsearch tleid attribute', v;
                        if (v = h(k, n, m, y, r))
                            return n.adFindingMethod = 'TRIPLELIFTADS: Domsearch based on window', v;
                        if (v = a.v.k([
                                '[id=\'qzad\']',
                                'div#qzc-container'
                            ], k, n, m))
                            return n.adFindingMethod = 'Quartz', v;
                        x = v = '';
                        D && a.a.ax([
                            'yieldmo',
                            'yieldmo2'
                        ], D) && (v = B && B[1], x = B && B[2]);
                        if (v = p(k, n, m, y, v, x))
                            return v;
                        if (r = r.weborama_display_tag && r.weborama_display_tag.mediapath) {
                            v = /https?:\/\/([0-9a-zA-Z\.\/]+)/;
                            r = r.match && r.match(v)[1];
                            x = a.u.c(['...../div[id^=\'scr_\'][id*=\'remotediv\']'], k);
                            for (var F = 0; F < x.length; F++)
                                if (v = a.v.k([
                                        '${[src*=\'' + r + '\']}',
                                        '+/${[src*=\'' + r + '\']}'
                                    ], x[F], n, m))
                                    return n.adFindingMethod = 'Weborama', v;
                        }
                        if ((v = w(k, n, m)) || (v = u(k, n, m, y)))
                            return v;
                        if (v = a.v.l(k, n, m))
                            return n.adFindingMethod = 'friendly iframe', v;
                        if (x = a.g.g(k))
                            if (v = a.v.l(x, n, m))
                                return n.adFindingMethod = 'find iframe parent', v;
                        if (a.c.q || x)
                            if (x = x || a.g.g(k))
                                if (r = a.a.be(x) === a.c.e, v = a.c.c && 'BODY' === x.nodeName, !r || !v) {
                                    if (v = w(x, n, m))
                                        return n.adFindingMethod = 'iframe parent expandable', v;
                                    if (v = u(x, n, m, y))
                                        return n.adFindingMethod = 'iframe parent findAd', v;
                                }
                        return (v = c(k, n, m, y)) ? (n.adFindingMethod = 'Undertone', v) : (v = a.v.k([
                            '../iframe#verve-banner',
                            '.../body/iframe#verve-expandable/=>/div.content',
                            '.../body/iframe#verve-expandable',
                            'iframe#verve-banner/=>/div.content',
                            'iframe#verve-banner'
                        ], k, n, m)) ? (n.adFindingMethod = 'Verve', v) : !1;
                    };
                    a.v.a = x;
                    a.v.t = function (b, c, d) {
                        if (!a.a.ea(n, c))
                            return !1;
                        if (a.c.c && b && a.a.bt(b) && a.x.e.a(b, c)) {
                            'width' == a.x.b && a.x.d();
                            c.skin = 1;
                            var e = a.a.bf(b);
                            if (b = a.d.f(b, e || b.nodeName, !1, void 0, c, d))
                                return c.adFindingMethod = 'WALLPAPERS ADS', b;
                        }
                    };
                    a.v.u = 1;
                    a.v.b = 2;
                    a.v.v = 500;
                    a.v.h = 20;
                    a.v.w = {
                        object: 1,
                        embed: 1,
                        img: 1,
                        iframe: 1
                    };
                }(u));
                (function (a) {
                    function k(d, g, c, b) {
                        var e = {};
                        d = d.replace(/&amp;/g, '&').replace(/(^\s+|\s+$)/g, '');
                        for (var h = d.split('&'), l = 0; l < h.length; l++) {
                            var k = h[l].split('=');
                            if ('string' === typeof k[1]) {
                                k[0] && k[0].match('moatClient') && (e['rawM' + k[0].slice(1)] = k[1]);
                                var t = k, q, y = q = k[1];
                                try {
                                    for (var x = 0; 100 > x && (q = decodeURIComponent(q), y != q) && !q.match(/^http(s)?\:/); x++)
                                        y = q;
                                } catch (n) {
                                }
                                q = q.replace(/(^\s+|\s+$)/g, '');
                                t[1] = q;
                            } else
                                k[1] = '';
                            e[k[0]] = k[1];
                        }
                        a.ap.f(e);
                        'undefined' !== typeof c && (e.clientZone = 'undefined' !== c ? c : '');
                        a.k.a.zaxs('getAdIdentifiersFromQueryString', e, d, g, c, b);
                        return e = a.ap.g(e);
                    }
                    function d(d, g) {
                        function c(a) {
                            if ((a = a.match('https?://(?:[a-zA-Z0-9\\-\\_]*).doubleclick.net/(?:[a-zA-Z0-9]*)/adj/(.*)')) && a[1])
                                return a[1];
                        }
                        var b;
                        if ('string' === typeof adsrc)
                            b = adsrc;
                        else {
                            for (var e in a.c.e) {
                                var h = e.match('^adsrc_');
                                if (h && h[0] && 'string' === typeof a.c.e[e]) {
                                    b = a.c.e[e];
                                    break;
                                }
                            }
                            if (!b)
                                for (e = g.parentNode.getElementsByTagName('script'), h = 0; h < e.length; h++)
                                    if (e[h].src) {
                                        var l = c(e[h].src);
                                        if (l) {
                                            b = l;
                                            break;
                                        }
                                    }
                            b || !a.c.p || a.c.q || (e = c(a.c.e.location.href)) && (b = e);
                        }
                        d.zMoatRawSlicer1 = d.moatClientSlicer1 || 'unclassified';
                        d.zMoatRawSlicer2 = d.moatClientSlicer2 || 'unclassified';
                        b ? (b = b.split(';')[0].split('/'), d.zMoatReutersSlicer1 = b[0] || d.moatClientSlicer1 || 'unclassified', d.zMoatReutersSlicer2 = b[1] || d.moatClientSlicer2 || 'unclassified') : (d.zMoatReutersSlicer1 = d.moatClientSlicer1 || 'unclassified', d.zMoatReutersSlicer2 = d.moatClientSlicer2 || 'unclassified');
                        return d;
                    }
                    a.ap = {};
                    a.ap.a = function (d, g) {
                        if (!d)
                            return !1;
                        if ('undefined' === typeof d.startTime || g)
                            d.startTime = a.c.bj;
                        if ('undefined' === typeof d.rand || g)
                            d.rand = w.floor(w.random() * w.pow(10, 12));
                        'undefined' === typeof d.adNum && (d.adNum = r.zr, r.zr++);
                    };
                    a.ap.b = function (d, g) {
                        if (!d)
                            return !1;
                        var c = a.a.aa();
                        a.a.ao();
                        decodeURIComponent(c);
                        return d;
                    };
                    a.ap.c = function (d, g) {
                        var c = a.ap.d(d, g);
                        c && (c._AD_FORMAT = g);
                        a.k.a.azsx('adInitialized', function (b) {
                            var c = b.DfpSlot;
                            b = b.ao;
                            if (c) {
                                a.a.dz(b);
                                b.fullAdUnitPath = a.an.c(c);
                                b.dfpSlotId = a.an.d(c);
                                for (var c = a.an.e(c), d = 0; d < c.length; d++)
                                    b['dfpAdUnitLabel' + d] = c[d];
                            }
                        });
                        a.k.a.zaxs('getIds', c, d, g);
                        return c;
                    };
                    a.ap.d = function (a, g) {
                        try {
                            var c = a.className, b = a.getAttribute('src');
                            c.split('\n').join(' ');
                            if (-1 !== c.indexOf('moatfooter'))
                                return !1;
                            var e = b.split('?'), h = b.split('#'), c = !1;
                            1 < e.length && 1 < h.length && e[1].length < h[1].length && (c = !0);
                            if (1 == e.length || c)
                                e = h;
                            if (1 < e.length) {
                                var l = k(e[1], g, 'undefined');
                                return l = d(l, a);
                            }
                            return !1;
                        } catch (p) {
                            return !1;
                        }
                    };
                    a.ap.e = function (a, d) {
                        if (!a)
                            return !1;
                        var c = {};
                        try {
                            var b = a && a.className.replace('amp;', '').split('?')[1];
                            if (c = b && k(b, d))
                                c._AD_FORMAT = d;
                            return c;
                        } catch (e) {
                            return !1;
                        }
                    };
                    a.ap.f = function (d) {
                        var g = a.a.am();
                        g && (d.zMoatCURL = g);
                        a.k.a.zaxs('appendNonQsAdIds', d);
                    };
                    a.ap.g = function (a) {
                        if (a) {
                            for (var d in a)
                                a.hasOwnProperty(d) && d && d.match('moatClientLevel') && 'string' === typeof a[d] && (a[d] = a[d].replace(/\:/g, '_').replace(/%3A/gi, '_'));
                            return a;
                        }
                    };
                    a.ap.h = function (a, d) {
                        return d || {};
                    };
                    a.ap.i = function (a) {
                        a = decodeURIComponent(decodeURIComponent(a));
                        -1 < a.indexOf('anonymous.google') && (a = 'anonymous.google');
                        var d = a.match(/^(?:[^:]{1,}:\/\/)?(?::*\/?\/?)?(?:www\.)?([^\/:]*)/);
                        d && d[1] && (a = d[1]);
                        return a.split('/')[0];
                    };
                    a.ap.j = function (d) {
                        a.ap.a(d);
                        a.ap.k(d);
                        d = a.ap.g(d);
                        a.ap.l && a.ap.l(d);
                        return d;
                    };
                }(u));
                (function (a) {
                    function k(a) {
                        'object' === typeof a && (a.fq = 0, a.gm = 0, a.ch = 0, a.ga = 0, a.gh = 0, a.hasOwnProperty('lx') && delete a.lx, a.um = 1);
                    }
                    function d(b, c, d) {
                        d = a.a.dz(c);
                        a.a.du({ all: !0 }, d) && (b.zGSRS = '1');
                        b.zGSRC = '1';
                        c.zMoatCHNLS && (b.gv = c.zMoatCHNLS);
                        c.zMoatGSCACHE && (b.hw = c.zMoatGSCACHE);
                    }
                    function f(a, b) {
                        b.i = a && a.sli && 'false' !== a.useSlotIkey && !1 !== a.useSlotIkey ? a.sli : 'REUTERS_HEADER1';
                    }
                    function g(b, c) {
                        var d = [
                            'type',
                            'div_id'
                        ];
                        d && 0 < d.length && c.dfpHeaderSlots && a.a.cd(b, c.dfpHeaderSlots);
                    }
                    function c(b) {
                        var c = a.c.e.googletag, c = c && 'function' === typeof c.pubads && c.pubads(), d = -1;
                        if (c && 'function' === typeof c.getSlots)
                            try {
                                var e = c.getSlots(), d = a.a.f(e) ? e.length : -1;
                            } catch (g) {
                            }
                        b.vb = d;
                    }
                    function b(b, c) {
                        a.a.ak(a.c.ba) && 5000 > encodeURIComponent(a.c.ba).length && (b.gu = a.c.ba);
                        b.id = a.c.bb ? '1' : '0';
                        b.ii = a.c.au;
                    }
                    function e(a, b) {
                        a.bo = b.moatClientSlicer1;
                        a.bd = b.moatClientSlicer2;
                    }
                    function h(b, c) {
                        if (a.c.es) {
                            var d = b.cm;
                            'number' === typeof d && (b.pc = d);
                            b.cm = 1;
                        }
                    }
                    function l(b, c) {
                        var d, e = [], g, h = a.a.av() ? 2048 : 7750, f = c || {};
                        g = {};
                        b.fs = '193224';
                        for (d in b)
                            b.hasOwnProperty(d) && (1 != b.e || 'x' !== d && 'y' !== d && 'c' !== d ? e.push(encodeURIComponent(d) + '=' + encodeURIComponent(b[d])) : g[d] = b[d].split('a'));
                        d = e.join('&');
                        var e = h - d.length, l = 0;
                        if ('undefined' !== typeof g.x) {
                            for (var k = 0, p = 0; p < g.x.length; p++)
                                if (k += g.x[p].length + (g.y[p] ? g.y[p].length : 0) + (g.c[p] ? g.c[p].length : 0), k < e)
                                    l++;
                                else
                                    break;
                            0 < l && (d += '&x=' + g.x.slice(0, l - 1).join('a'), d += '&y=' + g.y.slice(0, l - 1).join('a'), d += '&c=' + g.c.slice(0, l - 1).join('a'));
                        }
                        for (var t in f)
                            f.hasOwnProperty(t) && (g = '&' + encodeURIComponent(t) + '=' + encodeURIComponent(f[t]), g.length + d.length < h && (d += g));
                        d = d.replace(/\x27/g, '%27');
                        try {
                            d += '&na=' + a.a.cw(d, b.i);
                        } catch (q) {
                        }
                        return d;
                    }
                    function p(b, c) {
                        b.j = 25 == c ? 'string' == typeof a.c.d && a.c.d.slice(0, 500) || '' : a.a.ap(a.c.d);
                    }
                    function t(b, c) {
                        if (!a.c.c) {
                            var d = a.a.ab();
                            d && (b.lp = d);
                        }
                    }
                    function q(b, c, d) {
                        var e = a.a.dz(d), g = a.a.du({ all: !0 }, e);
                        a.a.forEach(c, function (a) {
                            if (b[a])
                                return !0;
                            g ? d[a] && '-' !== d[a] && (b[a] = d[a]) : b[a] = d[a] || '-';
                        });
                        return b;
                    }
                    a.y = {};
                    var y = 'zMoatPS zMoatTP zMoatST zMoatARBL zMoatAdUnit1 zMoatStory zMoatAU zMoatPixelDistance zMoatRawSlicer1 zMoatRawSlicer2 zMoatReutersSlicer1 zMoatReutersSlicer2 zMoatBlacklist zMoatJS'.split(' '), x = {
                            display: 1,
                            video: 2,
                            adx: 3,
                            html5: 4,
                            content: 5,
                            feather: 6,
                            ivt_only: 7
                        };
                    a.y.c = function (b, c) {
                        var d = a.a.dz(c);
                        b.hp = 1;
                        c.zMoatAdUnit1 && (b.zMoatAdUnit1 = c.zMoatAdUnit1);
                        c.zMoatAdUnit2 && (b.zMoatAdUnit2 = c.zMoatAdUnit2);
                        c.zMoatAdUnit3 && (b.zMoatAdUnit3 = c.zMoatAdUnit3);
                        c.zMoatAdUnit4 && (b.zMoatAdUnit4 = c.zMoatAdUnit4);
                        a.c.c && window.top.document && window.top.document.hasFocus && 'function' === typeof window.top.document.hasFocus && (b.wf = window.top.document.hasFocus() ? 1 : 0);
                        d = x[d];
                        'undefined' !== typeof d && (b.ra = d);
                        c.altKey && (b[c.altKey] = 1);
                        b.pxm = '7';
                        b.sgs = 3;
                        a.k.a.zaxs('appendCommonKeys', b, c);
                    };
                    a.y.b = function (n, m, x, G, u) {
                        var C = a.a.dz(m);
                        a.ap.a(m, G);
                        var z = {};
                        z.e = n;
                        a.a.cd(z, x);
                        f(m, z);
                        a.y.c(z, m);
                        c(z);
                        a.h && (z.cm = a.a.as(a.h, a.i).multiplier);
                        try {
                            z.kq = a.c.e && a.c.e.devicePixelRatio;
                        } catch (w) {
                            z.kq = 1;
                        }
                        z.hq = a.c.m ? 1 : 0;
                        z.hs = a.c.j ? 1 : 0;
                        z.hu = a.c.ah ? 1 : 0;
                        z.hr = a.c.ad ? 1 : 0;
                        z.ht = a.c.ak ? 1 : 0;
                        z.dnt = a.c.ej ? 1 : 0;
                        if (11 === n) {
                            a.k.a.zaxs('adNotFound');
                            var A = [], E;
                            for (E in oa)
                                oa.hasOwnProperty(E) && A.push(E + '=' + oa[E]);
                            z.k = A.join('&').slice(0, 300);
                        }
                        if (!(z.e in sa)) {
                            z.bq = a.c.n;
                            1 === m.skin && (z.wp = 1 === m.isSkin ? 1 : 1 === m.isAolSkin ? 2 : 3);
                            z.f = Number(!ka);
                            a.c.dc && (z.nh = 1);
                            m.IS_PAGE_LEVEL || p(z, z.e);
                            t(z, z.e);
                            z.t = m.startTime;
                            z.de = m.rand;
                            z.rx = a.c.ax.a;
                            z.m = 0;
                            z.ar = '29ad59d-clean';
                            z.iw = '31d6965';
                            a.a.ch(z, 'ai', r.z);
                            a.a.ch(z, 'wr', r.ACTIVETIMEUNTILSCROLL);
                            z.q = r.m++;
                            z.cb = U ? 1 : 0;
                            z.cu = R;
                            z.ll = a.c.dh || 0;
                            a.a.ch(z, 'lm', a.c.dd());
                            z.ln = a.c.p ? 1 : 0;
                            a.a.cd(z, a.focus.getQueryString());
                            a.ap.h(m, z);
                            'undefined' !== typeof m && (z.d = m.moatClientLevel1 + ':' + m.moatClientLevel2 + ':' + m.moatClientLevel3 + ':' + m.moatClientLevel4, A = a.a.dx({ all: 'zMoatPS zMoatTP zMoatST zMoatARBL zMoatAdUnit1 zMoatStory zMoatAU zMoatPixelDistance zMoatRawSlicer1 zMoatRawSlicer2 zMoatReutersSlicer1 zMoatReutersSlicer2 zMoatBlacklist zMoatJS'.split(' ') }, C) || y, q(z, A, m), m.adFindingMethod && (z.hv = m.adFindingMethod), d(z, m, C), b(z, m), m && (z.zMoatRawSlicer1 = m.zMoatRawSlicer1 || 'unclassified', z.zMoatRawSlicer2 = m.zMoatRawSlicer2 || 'unclassified'), A = [
                                '20159232',
                                '33774912',
                                '27635832',
                                '32276832',
                                '19971672'
                            ], m && m.moatClientLevel1 && !a.a.ax(A, m.moatClientLevel1) && (z.zMoatBlacklist = !0), a.a.du({ all: !0 }, C) && e(z, m), z.gw = 'reutersheader194883552024', z.fd = '1');
                            z.ac = 1;
                            z.it = a.v.v;
                            a.c.am().isInApp && (z.lv = a.c.cp(), z.zl = a.c.ea() ? 1 : 0, a.c.cq() ? (a.a.bp() && (z.wo = 1), (C = a.a.bl(a.c.bc)) && (z.zMoatMMAKns = C)) : a.c.da() && (z.lx = 1));
                            a.d.c() && k(z);
                            g(z, m);
                            (C = a.aq.a()) && (z.pe = C);
                            a.k.a.zaxs('dropNonAdPixel', z, n, m, x, G, u);
                            h(z, u);
                            x = l(z);
                            n = W;
                            m = a.y.d(m, x + '&cs=0', z);
                            if (!0 === u)
                                return {
                                    qs: z,
                                    res: m
                                };
                            m.shouldSendPixel && m.querystring && r.yh.yi(m.querystring, n);
                        }
                    };
                    a.y.a = function (n, m, x) {
                        if (window && window.closed || !n || !0 === n.ep)
                            return !1;
                        var G = n.getFormat();
                        a.y.c(m, n.ao);
                        c(m);
                        try {
                            m.kq = a.c.e && a.c.e.devicePixelRatio;
                        } catch (u) {
                            m.kq = 1;
                        }
                        a.v.q(n);
                        if ('undefined' !== typeof n.ao && (2 !== n.an || 1 !== m.e && 3 !== m.e) && !(m.e in sa)) {
                            m.lo = n.FIND_AD_TRIES;
                            n.proxyTrackingEnabled && (m.tr = 1);
                            m.uk = a.a.bl(a.c.bc);
                            var A = a.a.bn(), C = a.a.bm(A.results), z = {
                                    article: 'pk',
                                    page_height: 'wk',
                                    meta_properties: 'rk',
                                    favicon: 'tk'
                                };
                            a.a.forEach(C, function (a) {
                                m[z[a]] = A.results[a] ? 1 : 0;
                            });
                            n.hasNonIframeListener && (m.ni = 1);
                            var B = n.ag, C = {}, E = a.w.b(n.zr);
                            if (9 === m.e && 2 === m.q || 25 === m.e) {
                                for (var D in B)
                                    B.hasOwnProperty(D) && '' !== D && 'undefined' !== typeof B[D] && -1 === D.indexOf('dvContains') && -1 === D.indexOf('indexOf') && -1 === D.toLowerCase().indexOf('clicktag') && (C['z' + D] = B[D]);
                                m.e = 25;
                            }
                            0 === n.an && (m.dc = n.WMODE);
                            'string' !== typeof n.ae || 0 != m.e && 25 != m.e ? m.ak = '-' : (D = a.c.j ? 700 : 1200, m.ak = n.ae.length <= D ? n.ae : n.ae.slice(0, D));
                            n.bi > n.bg && (n.bg = n.bi);
                            n.bm > n.bk && (n.bk = n.bm);
                            f(n.ao, m);
                            a.a.cd(m, a.f.r(!0));
                            m.bq = a.c.n;
                            g(m, n.ao);
                            1 === n.ao.skin && (m.wp = 1 === n.ao.isSkin ? 1 : 1 === n.ao.isAolSkin ? 2 : 3);
                            m.g = n.aq.g++;
                            var v, H;
                            n.isSREMeasurable || n.setDimensions();
                            n.IS_PAGE_LEVEL || (1 === n.ao.skin ? (H = a.c.r(a.c.e), v = H.width, H = H.height) : n.compositeAdAreaPx ? (v = n.compositeAdAreaPx, H = 1) : (v = n.INITIAL_WIDTH, H = n.INITIAL_HEIGHT));
                            v = v || 0;
                            H = H || 0;
                            0 < v && 0 < H && (n.isSREMeasurable = !0);
                            m.hq = a.c.m ? 1 : 0;
                            m.hs = a.c.j ? 1 : 0;
                            m.hu = a.c.ah ? 1 : 0;
                            m.hr = a.c.ad ? 1 : 0;
                            m.ht = a.c.ak ? 1 : 0;
                            m.dnt = a.c.ej ? 1 : 0;
                            m.h = H;
                            m.w = v;
                            m.rm = n.isSREMeasurable ? 1 : 0;
                            try {
                                a.c.dl() && n && n.elementRect && (m.fy = n.elementRect.left, m.gp = n.elementRect.top);
                            } catch (u) {
                            }
                            d(m, n.ao, G);
                            b(m, n.ao);
                            a.h && (m.cm = a.a.as(a.h, a.i).multiplier);
                            m.f = Number(!ka);
                            n.IS_PAGE_LEVEL || p(m, m.e);
                            t(m, m.e);
                            m.t = n.ao.startTime;
                            m.de = n.ao.rand;
                            m.rx = a.c.ax.a;
                            m.cu = R;
                            m.m = m.m || a.a.bb(n);
                            m.ar = '29ad59d-clean';
                            m.iw = '31d6965';
                            m.cb = U ? 1 : 0;
                            a.a.ch(m, 'rd', n.refreshDecision);
                            a.a.ch(m, 'zMoatAR', n.moatAutoRefreshed);
                            a.a.ch(m, 'zMoatWDAC', n.wasDupeAutoCreative);
                            m.ll = a.c.dh || 0;
                            a.a.ch(m, 'lm', a.c.dd());
                            m.ln = a.c.p ? 1 : 0;
                            a.c.c && (m.gh = 1);
                            a.c.dc && (m.nh = 1);
                            m.xx = a.c.er + ':' + a.f.ak();
                            m.td = a.c.de;
                            a.c.t();
                            m.qa = a.c.w;
                            m.qb = a.c.x;
                            m.qi = a.c.u;
                            m.qj = a.c.v;
                            m.qf = a.c.y;
                            m.qe = a.c.z;
                            m.qh = a.c.aa;
                            m.qg = a.c.ab;
                            try {
                                m.lk = n && n.elementRect && n.elementRect.top + a.c.ac || 'undefined';
                            } catch (u) {
                            }
                            isNaN(a.c.h) || (m.lb = a.c.h);
                            m.le = Ea ? 1 : 0;
                            a.f && void 0 !== a.f.al && (m.lf = a.f.al);
                            a.f && void 0 !== a.f.aa && (m.lg = a.f.aa);
                            a.f && void 0 !== a.f.am && (m.lh = a.f.am);
                            a.c.cb && (m.fa = 1);
                            'number' !== typeof a.c.cd || isNaN(a.c.cd) || (m.zz = a.c.cd);
                            if (a.m && a.m.a())
                                m.ch = 1, m.gh = 1;
                            else if (a.o && a.o.a) {
                                a.c.bw && (m.ss = 1);
                                if (n && n.periscopeManager) {
                                    v = !a.focus.pageIsVisible() && n && n.counters && n.counters.strictDwell && 0 == n.counters.strictDwell.tCur && 21 == m.e;
                                    H = a.a.ay && '0' != a.a.ay();
                                    if (n.periscopeManager.measurable || !a.c.c && v && H)
                                        m.ch = 1;
                                    n.periscopeManager.fullyMeasurable && n.ao && 1 != n.ao.skin && (m.ga = 1);
                                } else
                                    m.ch = 1;
                                'undefined' !== typeof a.o.d && n && n.ao && n.ao.startTime && !isNaN(n.ao.startTime) && (v = a.o.d - n.ao.startTime, m.fg = 0 <= v ? v : 0);
                            } else
                                m.ch = 0;
                            m.vv = E ? n.viewabilityMethod[E] : 0;
                            v = n.viewabilityMethod;
                            m.vw = (v.strict || 0) + ':' + (v.sframe || 0) + ':' + (v.pscope || 0);
                            v = n.viewabilityPercent;
                            m.vp = v[E];
                            m.vx = v.strict + ':' + v.sframe + ':' + v.pscope;
                            (v = a.aq.a()) && (m.pe = v);
                            a.a.cd(m, a.w.u(n.zr, m));
                            a.a.cd(m, a.focus.getQueryString());
                            a.a.cd(m, a.ai.b(n.zr));
                            a.a.cd(m, a.ar.a(n.zr));
                            a.a.cd(m, n.counters.getQs());
                            n.px2 && n.px2.inSample && !n.px2.success && (m.zMoatIDF = 1);
                            n.px2 && (m.xd = (n.px2.inSample ? '1' : '0') + (n.px2.firedPixel ? '1' : '0'));
                            a.as.a(n, m);
                            a.at.a(n, m);
                            a.a.ch(m, 'ai', r.z);
                            a.a.ch(m, 'wr', r.ACTIVETIMEUNTILSCROLL);
                            a.a.ch(m, 'ap', n.cb);
                            a.a.ch(m, 'ax', n.bg);
                            a.a.ch(m, 'ay', n.bi);
                            a.a.ch(m, 'az', n.bk);
                            a.a.ch(m, 'ba', n.bm);
                            a.a.ch(m, 'aw', n.bc);
                            a.a.ch(m, 'bg', n.bd);
                            a.a.ch(m, 'be', n.be);
                            a.a.ch(m, 'bc', n.bw);
                            a.a.ch(m, 'bf', n.by);
                            a.a.ch(m, 'bh', n.bx);
                            a.a.ch(m, 'bz', n.cu);
                            m.cl = w.round(100 * n.IR5.AREA / (m.w * m.h));
                            0 < n.aq[2] && (m.au = n.aq[2] - 1);
                            0 < n.aq[3] && (m.av = n.aq[3] - 1);
                            0 < n.aq[23] && (m.by = n.aq[23] - 1);
                            m.at = n.dm;
                            a.ap.h(n.ao, m);
                            m.d = n.ao.moatClientLevel1 + ':' + n.ao.moatClientLevel2 + ':' + n.ao.moatClientLevel3 + ':' + n.ao.moatClientLevel4;
                            n.ao && (m.zMoatRawSlicer1 = n.ao.zMoatRawSlicer1 || 'unclassified', m.zMoatRawSlicer2 = n.ao.zMoatRawSlicer2 || 'unclassified');
                            v = [
                                '20159232',
                                '33774912',
                                '27635832',
                                '32276832',
                                '19971672'
                            ];
                            n.ao && n.ao.moatClientLevel1 && !a.a.ax(v, n.ao.moatClientLevel1) && (m.zMoatBlacklist = !0);
                            a.a.du({ all: !0 }, G) && e(m, n.ao);
                            m.gw = 'reutersheader194883552024';
                            G = a.a.dx({ all: 'zMoatPS zMoatTP zMoatST zMoatARBL zMoatAdUnit1 zMoatStory zMoatAU zMoatPixelDistance zMoatRawSlicer1 zMoatRawSlicer2 zMoatReutersSlicer1 zMoatReutersSlicer2 zMoatBlacklist zMoatJS'.split(' ') }, G) || y;
                            v = a.a.i(n.ao);
                            q(m, G, v);
                            n.ao.adFindingMethod && (m.hv = n.ao.adFindingMethod);
                            m.ab = n.an;
                            m.ac = 1;
                            m.fd = '1';
                            m.kt = E;
                            m.it = a.v.v;
                            n.bi = n.bg;
                            n.bm = n.bk;
                            a.aa.f(n) && (m.fz = 1);
                            E = a.aa.g(n.zr);
                            m.oq = E ? 1 : 0;
                            'undefined' !== typeof n.zr && (m.ot = a.aa.h[n.zr].stateMask.toString(16));
                            a.c.am().isInApp && (m.lv = a.c.cp(), m.zl = a.c.ea() ? 1 : 0, a.c.cq() ? (a.a.bp() && (m.wo = 1), (E = a.a.bl(a.c.bc)) && (m.zMoatMMAKns = E)) : a.c.da() && (m.lx = 1));
                            n.debugData && (m.zMoatJS = n.debugData.getValue());
                            n && n.isMeasurabilityDisabled() && k(m);
                            a.d.c() && k(m);
                            a.a.ax([2], m.e) && n.aq.tc++;
                            m.tc = n.aq.tc;
                            a.k.a.zaxs('dropPixel', n, m, x);
                            h(m, x);
                            G = l(m, C);
                            E = W;
                            if (x)
                                return m;
                            n = a.y.d(n.ao, G + '&cs=0', m, C);
                            n.shouldSendPixel && n.querystring && r.yh.yi(n.querystring, E);
                        }
                    };
                    a.y.e = function (b, c) {
                        var d = a.a.dz(c);
                        b.zMoatSrcd = b.d;
                        b.zMoatSrcbo = b.bo;
                        b.zMoatSrcbp = b.bp;
                        b.zMoatSrcbd = b.bd;
                        b.d = (c.moatClientLevel1 || '') + ':';
                        b.d += (c.moatClientLevel2 || '') + ':';
                        b.d += (c.moatClientLevel3 || '') + ':';
                        b.d += c.moatClientLevel4 || '';
                        a.a.du({ all: !0 }, d) && e(b, c);
                        return b;
                    };
                    a.y.f = function (b, c, d, e, g, h, f) {
                        b = 'extraPx_' + b;
                        c[b] || (c[b] = {});
                        e = a.a.i(e);
                        e.zMoatSrci = e.i;
                        e.i = d;
                        f && (e = a.y.e(e, f));
                        if (a.f.an && !c[b].timestampsReset)
                            for (var k = 0; k < a.f.an.length; k++) {
                                var p = a.f.an[k];
                                p.zMoatSrci = p.i;
                                p.i = d;
                                f && (p = a.y.e(p, f));
                                p = l(p) + '&cs=0';
                                r.yh.yi(p, g);
                            }
                        c[b].timestampsReset || (c[b].timestampsReset = !0, e.lc && (e.lc = 0), e.cd && (e.cd = 0), e.sm && (e.sm = 0), e.fv && (e.fv = 0), e.pn && (e.pn = 0), e.lt && (e.lt = 0), e.ba && (e.ba = 0), e.sq && (e.sq = 0), e.gg && (e.gg = 0), e.mu && (e.mu = 0), e.si && (e.si = 0), e.mc && (e.mc = 0), e.dt && (e.dt = 0), e.gt && (e.gt = 0), e.ao && (e.ao = 0), e.mk && (e.mk = 0), e.dr && (e.dr = 0), e.ev && (e.ev = 0), e.ge && (e.ge = 0), e.mx && (e.mx = 0), e.an && (e.an = 0), e.cf && (e.cf = 0), e.gl && (e.gl = 0), e.mw && (e.mw = 0), e.xb && (e.xb = 0), e.db && (e.db = 0), e.am && (e.am = 0), e.fj && (e.fj = 0), e.my && (e.my = 0), e.mz && (e.mz = 0), e.cn && (e.cn = 0), e.es && (e.es = 0), e.sa && (e.sa = 0), e.pf && (e.pf = 0), e.ay && (e.ay = 0), e.bx && (e.bx = 0));
                        b = l(e, h);
                        r.yh.yi(b + '&cs=0', g);
                    };
                    a.y.d = function (b, c, d, e) {
                        b = !0;
                        if (a.h && (b = a.a.au(), !b)) {
                            for (var g = [
                                        1,
                                        2,
                                        3,
                                        23,
                                        25
                                    ], h = 0, f = g.length; h < f; h++)
                                if (d.e == g[h]) {
                                    b = !0;
                                    break;
                                }
                            b && (d.cm = 0, c = l(d, e), c += '&cs=0');
                        }
                        return {
                            shouldSendPixel: b,
                            querystring: c
                        };
                    };
                    a.y.g = function (a, b) {
                        if (2 !== a.an || 1 !== b.e && 3 !== b.e)
                            new Image(1, 1).src = '';
                    };
                    a.y.h = function (b) {
                        var c = a.y.i(b.data);
                        c.i = a.a.dy(c.i, b.iKeySuffix);
                        var d = l(c, b.flashVarsForQS) + '&cs=0';
                        if (b.sendNow) {
                            if (a.f.an)
                                for (var e = 0; e < a.f.an.length; e++) {
                                    var g = a.f.an[e];
                                    g.i = a.a.dy(g.i, b.iKeySuffix);
                                    g = l(g) + '&cs=0';
                                    r.yh.yi(g, b.pixelURL);
                                }
                            r.yh.yi(d, b.pixelURL);
                        }
                        return c;
                    };
                    a.y.i = function (b) {
                        b = a.a.i(b);
                        for (var c = 'am an ao ay ba bx cd cf db dr dt es ev sa sq si sm mc lc pf xb ge gg cn gl pn fj lt mu mk mw mx my mz fv'.split(' '), d = 0; d < c.length; d++)
                            b[c[d]] && (b[c[d]] = 0);
                        return b;
                    };
                    a.y.j = function (a, b) {
                        return l(a, b);
                    };
                    a.y.k = function (b) {
                        var c = { e: 16 };
                        c.q = b.aq[16]++;
                        a.y.a(b, c);
                    };
                    a.y.l = function (b) {
                        var c = !1, d = !!b && b.getFormat(), e = a.y.b(8, b.ao, !1, !1, !0);
                        if (e && e.qs && e.qs.d) {
                            c = e.qs.d.split(':');
                            c = {
                                viewHash: 'REUTERS_HEADER1',
                                moatClientLevel1: c[0],
                                moatClientLevel2: c[1],
                                moatClientLevel3: c[2],
                                moatClientLevel4: c[3],
                                tagStartTime: a.c.bj
                            };
                            if (b && b.ao)
                                for (var g in b.ao)
                                    b.ao.hasOwnProperty(g) && -1 != g.indexOf('zMoat') && (c[g] = b.ao[g]);
                            for (g in e)
                                e.hasOwnProperty(g) && -1 != g.indexOf('zMoat') && (c[g] = e[g]);
                            a.a.du({ all: !0 }, d) && (b = c, e = e.qs, b.moatClientSlicer1 = e.bo, b.moatClientSlicer2 = e.bd);
                        }
                        return c;
                    };
                    a.y.m = function (b) {
                        var c = { e: 8 };
                        c.q = b.aq[8]++;
                        return a.y.a(b, c, !0);
                    };
                }(u));
                (function (a) {
                    function k(d, c, b, e, h) {
                        var f = 10000;
                        a.c.am().isInApp && (f = 500);
                        new A().getTime();
                        this.tMaxContinuous = this.tContinuous = this.tLast = this.tCur = 0;
                        this.getMaxContinuous = function () {
                            return w.max(this.tContinuous, this.tMaxContinuous);
                        };
                        this.reset = function () {
                            this.tLast = this.tCur = 0;
                        };
                        this.update = function (a, b, c) {
                            d(a) ? (b = w.min(b, f), a = typeof e, b && 0 > b && (b = 0), this.tCur += b, this.tContinuous += b, 'number' === a && 0 < e ? this.tCur > e && (this.tCur = e) : 'function' === a && (b = e(), 'number' === typeof b && this.tCur > b && 0 < b && (this.tCur = b))) : (this.tMaxContinuous < this.tContinuous && (this.tMaxContinuous = this.tContinuous), this.tContinuous = 0);
                            h && h(this.tCur);
                        };
                        this.getQs = function (a) {
                            a = this.query(a);
                            this.tLast = this.tCur;
                            return a;
                        };
                        this.query = function (a) {
                            a = a || {};
                            this.tLast > this.tCur && (this.tLast = this.tCur);
                            c && b && (a[c] = this.tCur, a[b] = this.tLast);
                            return a;
                        };
                    }
                    a.ac = {};
                    a.ac.h = {};
                    a.ac.h.a = [];
                    a.ac.h.b = [];
                    var d = !1, f = {};
                    a.ac.i = function () {
                        if (!d) {
                            d = !0;
                            try {
                                r.swde.azsx('scroll', a.ac.j);
                            } catch (g) {
                            }
                        }
                    };
                    a.ac.k = function (d, c) {
                        try {
                            var b = d.aa, e = a.a.bg(b, 5), h = e && (6 == e.length || 1 <= e.length && 'HTML' === e[e.length - 1].nodeName);
                            c = c || d.WINDOW || a.a.be(b);
                            return !(b && c && h) || a.a.ea([
                                'feather',
                                'display',
                                'video'
                            ], d.ao) && 'Unicast Generic' === d.ao.activeConfig && a.t.k(d.zr) && (3 > b.offsetWidth || 3 > b.offsetHeight) || b.ownerDocument && b.ownerDocument.body && !b.ownerDocument.body.contains(b) ? !1 : !0;
                        } catch (f) {
                            return !1;
                        }
                    };
                    a.ac.l = function () {
                        function d() {
                            if (!f)
                                try {
                                    f = !0, c(h), f = !1;
                                } catch (a) {
                                    throw f = !1, a;
                                }
                        }
                        function c(a) {
                            var c = a.Moat;
                            a = a.domNodesIdToAd;
                            for (var d in a)
                                a.hasOwnProperty(d) && c.a.ea([
                                    'feather',
                                    'display',
                                    'video'
                                ], a[d].ao) && c.t.m('loop', d);
                            c.ac.m();
                            d = new A().getTime();
                            a = w.max(w.min(d - b, e), 0);
                            c.k.a.zaxs('view:tick', a, d);
                            b = d;
                            c.ao.b();
                        }
                        var b = new A().getTime(), e = 10000;
                        a.c.am().isInApp && (e = 500);
                        var h = {
                                Moat: a,
                                domNodesIdToAd: B
                            }, f = !1;
                        a.k.a.azsx('periscope:onStateChange', d);
                        a.k.a.azsx('viewCounterStarted', d);
                        var k = 'MOAT_VIEW_LOOP_ID_' + new A().getTime();
                        a.l.g(c, h, 200, k);
                        return a.a.df([h], c);
                    }();
                    a.ac.m = function () {
                        var d, c;
                        for (c in B)
                            B.hasOwnProperty(c) && (d = B[c], a.ac.k(d, d.WINDOW) || a.ac.g(d));
                    };
                    a.ac.g = function (d) {
                        if (!0 !== d.ep) {
                            if (!ja) {
                                var c = { shouldKillAd: !0 };
                                a.k.a.zaxs('beforeAdKilled', c, d);
                                if (!c.shouldKillAd)
                                    return;
                            }
                            a.k.a.zaxs('adKilled', d);
                            a.d.l(d);
                        }
                    };
                    a.ac.c = function (d) {
                        d.eq || (d.eq = !0);
                        var c = { e: 5 };
                        c.q = d.aq[5]++;
                        a.y.a(d, c);
                    };
                    a.ac.b = function (d) {
                        if (!d || !d.aq || !d.aq[0])
                            return !1;
                        var c = { e: 37 };
                        c.q = d.aq[37]++;
                        a.y.a(d, c);
                    };
                    a.ac.n = [];
                    a.ac.o = function (d, c) {
                        var b = !1;
                        if (!d || !d.aq || !d.aq[29] || 3 > d.aq[29])
                            return !1;
                        for (var e = 0; e < c.length; e++) {
                            var h = c[e];
                            -1 === a.a.indexOf(a.ac.n, h) && (b = !0, a.ac.n.push(h));
                        }
                        b && (b = { e: 37 }, b.q = d.aq[37]++, a.y.a(d, b));
                    };
                    a.ac.a = function (d) {
                        var c;
                        c = d.aa;
                        if (1 == d.ao.skin)
                            return !1;
                        if (a.ai.c(d))
                            return !0;
                        d.elementRect || (d.currentWidth = c.offsetWidth, d.currentHeight = c.offsetHeight);
                        c = d.currentWidth;
                        d = d.currentHeight;
                        return 3 > c || 3 > d || !a.c.ce() && a.focus.pageIsPrerendered() ? !0 : !1;
                    };
                    a.ac.e = function (d) {
                        return d ? a.focus.pageIsVisible() : !1;
                    };
                    a.ac.p = function (d) {
                        var c = 1;
                        screen.deviceXDPI ? c = screen.deviceXDPI / screen.systemXDPI : d.devicePixelRatio && 'undefined' !== typeof d.mozInnerScreenX && (c = d.devicePixelRatio);
                        return (d = a.c.s()) ? {
                            w: c * d.width,
                            h: c * d.height
                        } : {
                            w: 0,
                            h: 0
                        };
                    };
                    a.ac.f = function (d) {
                        d.counters = {};
                        d.counters.laxDwell = new k(function () {
                            return !a.focus.pageIsPrerendered();
                        }, 'bu', 'cd');
                        d.counters.strictDwell = new k(a.focus.pageIsVisible, 'ah', 'am');
                        d.counters.query = function () {
                            var a = {}, c;
                            for (c in this)
                                if (this.hasOwnProperty(c)) {
                                    var d = this[c];
                                    'function' === typeof d.query && d.query(a);
                                }
                            return a;
                        };
                        d.counters.getQs = function () {
                            var a = {}, c;
                            for (c in this)
                                if (this.hasOwnProperty(c)) {
                                    var d = this[c];
                                    'function' === typeof d.getQs && d.getQs(a);
                                }
                            return a;
                        };
                        d.counters.update = function (a, c, d) {
                            for (var g in this)
                                if (this.hasOwnProperty(g)) {
                                    var f = this[g];
                                    'function' === typeof f.update && !0 !== a.ep && f.update(a, c, d);
                                }
                        };
                        a.k.a.azsx('startAdTracking', a.ac.i);
                        var c = a.k.a.azsx('view:tick', a.a.df([d], d.counters.update, d.counters));
                        f[d.zr] = c;
                    };
                    a.ac.q = function () {
                        r.z = void 0;
                        r.ACTIVETIMEUNTILSCROLL = void 0;
                        r.zs = !1;
                        r.xz = !1;
                        r.dcsx.wsqa('globalScrollevent' + r.dcsx.uid);
                        a.a.forEach(a.ac.h.a, function (a) {
                            if (a && 'function' === typeof a)
                                try {
                                    a();
                                } catch (c) {
                                }
                        });
                    };
                    a.ac.j = function (d) {
                        if (a.focus.pageIsVisible()) {
                            d = new A().getTime();
                            'undefined' === typeof r.z && (r.z = d - R);
                            if ('undefined' === typeof r.ACTIVETIMEUNTILSCROLL) {
                                var c = a.focus.focusStartTime || R;
                                c < R && (c = R);
                                r.ACTIVETIMEUNTILSCROLL = d - c;
                            }
                            a: {
                                for (var b in B)
                                    if (B.hasOwnProperty(b) && (d = B[b]) && 'undefined' !== typeof d.ao) {
                                        if (d.ce)
                                            break a;
                                        c = { e: 4 };
                                        c.q = d.aq[4]++;
                                        c.ai = r.z;
                                        c.wr = r.ACTIVETIMEUNTILSCROLL;
                                        a.y.a(d, c);
                                        d.ce = !0;
                                    }
                                try {
                                    r.dcsx.wsqa('globalScrollevent' + r.dcsx.uid), r.swde.sxaz('scroll', { callback: a.ac.j });
                                } catch (e) {
                                }
                            }
                        }
                    };
                    a.ac.d = function (d, c) {
                        var b = { e: 9 };
                        b.q = d.aq[9]++;
                        d.ci = +new A();
                        c && 'object' === typeof c && a.a.forEach(c, function (a, c) {
                            b[c] = a;
                        });
                        a.y.a(d, b);
                    };
                    a.k.a.azsx('adKilled', function (d) {
                        d && !d.ep && f.hasOwnProperty(d.zr) && a.k.a.sxaz('view:tick', { id: f[d.zr] });
                    });
                }(u));
                (function (a) {
                    function k(a, f) {
                        function g(a) {
                            return function () {
                                try {
                                    a.sending && (a.sending = !1, k = 0, c());
                                } catch (b) {
                                }
                            };
                        }
                        function c(a, b) {
                            if (a) {
                                var c = {
                                    qs: a,
                                    jsd: b
                                };
                                if (0 === a.indexOf('e=21&')) {
                                    e(c, !0);
                                    return;
                                }
                                l.push(c);
                            }
                            0 === k && 0 < l.length && (k++, c = l.shift(), c.sending = !0, c.uid = f.Math.floor(10000000000 * f.Math.random()), c.timeoutId = setTimeout(g(c), 2000), x[c.uid] = c, e(c));
                        }
                        function b() {
                            try {
                                return new t(1, 1);
                            } catch (a) {
                                var b = window.document.createElement('img');
                                b.height = 1;
                                b.width = 1;
                                return b;
                            }
                        }
                        function e(a, c) {
                            var d = b();
                            d.toSend = a;
                            c || (d.onerror = function () {
                                var a = this.toSend;
                                a.failedAttempts = 'number' == typeof a.failedAttempts ? a.failedAttempts + 1 : 0;
                                var b = (a.jsd + '/pixel.gif?' + a.qs).length;
                                1 > a.failedAttempts ? e(a) : m && b > r && h(a);
                            }, d.onload = function () {
                                h(this.toSend);
                            });
                            d.src = a.jsd + '/pixel.gif?' + a.qs;
                        }
                        function h(a) {
                            var b = a && a.uid && x && x[a.uid];
                            if (a && a.qs && 'tracer=' == a.qs)
                                return !1;
                            if (b) {
                                x[a.uid] = null;
                                try {
                                    delete x[a.uid];
                                } catch (d) {
                                }
                                try {
                                    clearTimeout(b.timeoutId);
                                } catch (d) {
                                }
                                if ('boolean' != typeof b.sending || b.sending)
                                    b.sending = !1;
                                else
                                    return !1;
                            }
                            0 < k && k--;
                            c();
                        }
                        var l = [], k = 0, t, q = f[a], y = f.Math.floor(10000000000 * f.Math.random()), x = {};
                        q.yh = {};
                        q = q.yh;
                        t = f.Image;
                        q.yi = function (a, b) {
                            c(a, b);
                        };
                        q.xq = function () {
                            return y;
                        };
                        var n, m, r = 2083;
                        try {
                            n = document.createElement('div'), n.innerHTML = '<!--[if IE 8]>x<![endif]-->', m = 'x' === n.innerHTML;
                        } catch (u) {
                            m = !1;
                        }
                    }
                    a.au = {};
                    a.au.a = function (d) {
                        try {
                            if (r.yh)
                                return;
                        } catch (f) {
                        }
                        a.a.dj(k, '\'' + a.c.aw + '\',window', d);
                    };
                }(u));
                (function (a) {
                    a.av = {};
                    a.av.a = function (k, d) {
                        var f = !0;
                        d && a.c.dt(k, !0) || (f = !1);
                        if (f) {
                            f = !0;
                            d && d.getCareAboutFocus && (f = d.getCareAboutFocus());
                            var g = a.ac.a(k), f = (!f || a.ac.e(k)) && !g;
                        }
                        return f;
                    };
                    a.av.b = function (k) {
                        this.label = k;
                        this.metrics = {};
                        this.hasTickUpdateMetrics = !1;
                        this.set = function (a, f, g) {
                            this.metrics[a] = this.metrics[a] || {};
                            this.metrics[a].value = f || 0;
                            g && (this.hasTickUpdateMetrics || (this.hasTickUpdateMetrics = !0), this.metrics[a].incrementValue = g.incrementValue || 'delta', this.metrics[a].ignoreStateCheck = g.ignoreStateCheck || !1, this.metrics[a].shouldIncrementFn = g.shouldIncrementFn, this.metrics[a].postIncrementationFn = g.postIncrementationFn || !1, this.metrics[a].ignoreOmidCheck = g.ignoreOmidCheck || !1, g.useDeltaCompensation && (this.metrics[a].useDeltaCompensation = !0, this.metrics[a].incrementedLastTick = !1));
                            return this.metrics[a].value;
                        };
                        this.increment = function (a, f, g, c, b) {
                            var e = !this.metrics[a] || 'number' !== typeof this.metrics[a].value;
                            try {
                                if (c.debugData && e && 'publicis_counter' == this.label) {
                                    var h;
                                    this.metrics[a] ? this.metrics[a].value && (h = this.metrics[a].value) : h = 'NONE';
                                    var l = [
                                        f,
                                        h,
                                        b
                                    ].join('-');
                                    c.debugData.cache.push(l);
                                }
                            } catch (k) {
                            }
                            f = e ? this.set(a, f) : this.metrics[a].value += f;
                            'number' === typeof g && (f = this.cap(a, f));
                            return f;
                        };
                        this.cap = function (a, f) {
                            return this.set(a, w.min(this.get(a), f));
                        };
                        this.max = function (a, f) {
                            return this.set(a, w.max(this.get(a), f));
                        };
                        this.get = function (d, f) {
                            if (!a.d.c() || 'visOnLastCheck' === d || this.metrics[d] && this.metrics[d].ignoreOmidCheck)
                                return 'undefined' === typeof this.metrics[d] ? this.set(d, 'undefined' !== typeof f ? f : 0) : this.metrics[d].value;
                        };
                        this.update = function (d, f, g) {
                            if (d && this.hasTickUpdateMetrics) {
                                g = a.w.k(d.zr, !0);
                                var c = a.av.a(d, g), b;
                                for (b in this.metrics)
                                    if (a.a.cy(this.metrics, b)) {
                                        var e = this.metrics[b];
                                        if (e.shouldIncrementFn) {
                                            var h = (c || !0 === e.ignoreStateCheck) && e.shouldIncrementFn(d, g);
                                            e.useDeltaCompensation ? (h && e.incrementedLastTick ? this.increment(b, f, void 0, d, 1) : (h || e.incrementedLastTick) && this.increment(b, w.round(f / 2), void 0, d, 2), e.incrementedLastTick = h) : h && ('delta' === e.incrementValue ? this.increment(b, f, void 0, d, 3) : 'addReturnValue' === e.incrementValue ? this.increment(b, h, void 0, d, 4) : 'setReturnValue' === e.incrementValue && this.set(b, h));
                                            'function' === typeof e.postIncrementationFn && e.postIncrementationFn(h);
                                        }
                                    }
                            }
                        };
                    };
                    a.av.c = function (k, d) {
                        if (!k)
                            return !1;
                        var f;
                        k[d] ? f = k[d] : (f = new a.av.b(d), k[d] = f);
                        return f;
                    };
                    a.av.d = function (k, d, f) {
                        if (!d)
                            return !1;
                        d = a.av.c(d, f);
                        k.secondaryCounters = k.secondaryCounters || [];
                        k.secondaryCounters.push(d);
                        return d;
                    };
                }(u));
                (function (a) {
                    function k(d, c, b) {
                        this.name = d;
                        this.reachedInViewTimeThreshold = !1;
                        this.alwaysInview = !0;
                        this.queryStringKey = b.queryStringKey;
                        this.timeThreshold = b.timeThreshold || 1000;
                        this.rawPercThreshold = b.percThreshold / 100 || 50;
                        this.percThreshold = w.min(b.percThreshold / 100, 0.98);
                        this.continuous = b.continuous || !1;
                        this.timePercent = b.timePercent;
                        this.capTimeThreshold = b.capTimeThreshold;
                        this.audible = b.audible || !1;
                        this.video = b.video || !1;
                        this.fullscreen = b.fullscreen || !1;
                        'undefined' !== this.timeThreshold && (this.timeThreshold = w.max(this.timeThreshold, 1));
                        this.counterState = {};
                        d = a.av.c(this.counterState, 'customInViewCounter');
                        d.set('inViewTime', 0);
                        d.set('continuousInViewTime', 0);
                        d.set('maxContinuousInViewTime', 0);
                        d.set('visOnLastCheck', !1);
                        d.set('_tLastChecked', new A().getTime());
                    }
                    a.at = {};
                    var d = {}, f = {};
                    a.at.b = function (a, c, b) {
                        var e = c.zr;
                        d[e] || (d[e] = {});
                        if (d[e].hasOwnProperty(a) || void 0 == b.percThreshold && void 0 == b.fullscreen || void 0 == b.timeThreshold && void 0 == b.timePercent)
                            return !1;
                        b = new k(a, c, b);
                        return d[c.zr][a] = b;
                    };
                    a.at.c = function (g, c) {
                        return !a.d.c() && d[c] && d[c].hasOwnProperty(g) ? d[c][g] : !1;
                    };
                    a.at.d = function (g) {
                        if (!d[g])
                            return !0;
                        var c = !0;
                        a.a.forEach(d[g], function (a) {
                            if (!a.reachedInViewTimeThreshold)
                                return c = !1;
                        });
                        return c;
                    };
                    k.prototype.update = function (d, c, b) {
                        if (d && this.isMeasurable(d) && !this.reachedInViewTimeThreshold) {
                            var e, h = a.av.c(this.counterState, 'customInViewCounter'), f = a.w.k(d.zr, !0);
                            if (f) {
                                var k = f.getLastInviewPercent();
                                e = (e = f.getFullyInViewThreshold()) && 'number' === typeof e ? w.min(this.percThreshold, e) : this.percThreshold;
                                h.get('_tLastChecked');
                                h.set('_tLastChecked', b);
                                b = !0;
                                f.getCareAboutFocus && (b = f.getCareAboutFocus());
                                d = f.getPauseCheckingFn ? f.getPauseCheckingFn()(d) : a.ac.a(d);
                                k = k >= e;
                                f = !b || a.focus.pageIsVisible();
                                a.at.e && 'function' === typeof a.at.e && (k = a.at.e(k));
                                a.at.f && 'function' === typeof a.at.f && (f = a.at.f(f));
                                k = k && f && !d;
                                d = h.get('visOnLastCheck');
                                if (k && d)
                                    h.increment('inViewTime', c), h.increment('continuousInViewTime', c);
                                else if (k || d)
                                    c = w.round(c / 2), h.increment('inViewTime', c), h.increment('continuousInViewTime', c);
                                k || (this.alwaysInview = !1);
                                h.set('visOnLastCheck', k);
                                h.get('continuousInViewTime') > h.get('maxContinuousInViewTime') && h.set('maxContinuousInViewTime', h.get('continuousInViewTime'));
                                k || h.set('continuousInViewTime', 0);
                                this.inViewTimeReached() && (this.reachedInViewTimeThreshold = !0);
                            }
                        }
                    };
                    k.prototype.getInViewTime = function () {
                        var d = a.av.c(this.counterState, 'customInViewCounter');
                        return this.continuous ? d.get('maxContinuousInViewTime') : d.get('inViewTime');
                    };
                    k.prototype.inViewTimeReached = function () {
                        return 'undefined' !== this.timeThreshold && this.getInViewTime() >= this.timeThreshold;
                    };
                    k.prototype.isMeasurable = function (d) {
                        if (!d)
                            return !1;
                        var c = !1;
                        'undefined' !== this.timeThreshold && ('pscope' == a.w.b(d.zr, !0) && d.custominview.periscopeThresholds ? a.a.ax(d.custominview.periscopeThresholds, this.rawPercThreshold) && a.c.dt(d) && (c = !0) : a.c.dt(d, !0) && (c = !0));
                        return c;
                    };
                    a.at.g = function (d) {
                        if (d && d.isMeasurabilityDisabled())
                            return !1;
                        a.at.b('full_vis_2_sec_continuous', d, {
                            percThreshold: 100,
                            timeThreshold: 2000,
                            video: !1,
                            continuous: !0,
                            queryStringKey: 'wb'
                        });
                    };
                    a.at.h = function (d) {
                        a.at.g(d);
                        d.custominview = {};
                        d.custominview.eventIds = {};
                        d.custominview.eventIds.viewCounterStarted = a.k.a.azsx('viewCounterStarted', a.at.i);
                        d.custominview.eventIds['periscope:onStateChange'] = a.k.a.azsx('periscope:onStateChange', a.at.i, { priority: 5 });
                        d.custominview.eventIds.adKilled = a.k.a.azsx('adKilled', a.at.j);
                        a.at.i(d);
                    };
                    a.at.i = function (d) {
                        void 0 !== d && (isNaN(d) || (d = B[d]), d && d.custominview && d.custominview.eventIds && a.c.dt(d, !0) && !d.custominview.eventIds['view:tick'] && (d.custominview.eventIds['view:tick'] = a.k.a.azsx('view:tick', a.a.df([d], a.at.k), { priority: 6 })));
                    };
                    a.at.k = function (f, c, b) {
                        var e = f.zr;
                        if (!d[e] || f && f.isMeasurabilityDisabled())
                            return !1;
                        a.a.forEach(d[e], function (a) {
                            a.update(f, c, b);
                        });
                    };
                    a.at.j = function (d) {
                        d && d.custominview && d.custominview.eventIds && (a.k.a.sxaz('view:tick', {
                            id: d.custominview.eventIds['view:tick'],
                            priority: 6
                        }), a.k.a.sxaz('viewCounterStarted', { id: d.custominview.eventIds.viewCounterStarted }), a.k.a.sxaz('periscope:onStateChange', { id: d.custominview.eventIds['periscope:onStateChange'] }), a.k.a.sxaz('adKilled', { id: d.custominview.eventIds.adKilled }), a.k.a.sxaz('video:AdVideoComplete', { id: d.custominview.eventIds['video:AdVideoComplete'] }));
                    };
                    a.at.l = function () {
                        a.k.a.sxaz('startAdTracking', { id: f.startAdTracking });
                        a.k.a.sxaz('allLocalAdsKilled', { id: f.allLocalAdsKilled });
                    };
                    a.at.a = function (f, c) {
                        if (f)
                            return a.a.forEach(d[f.zr], function (b) {
                                'custom_inview_module_counter' === b.name ? (c.wm = 0, c.wi = 0, !a.d.c() && b.isMeasurable(f) && (c.wm = 1, b.inViewTimeReached() && (c.wi = 1))) : void 0 != b.queryStringKey && (c[b.queryStringKey] = 0, !a.d.c() && b.isMeasurable(f) && (c[b.queryStringKey] = 1, b.inViewTimeReached() && (c[b.queryStringKey] = 2)));
                            }), c;
                    };
                    a.at.m = function (f) {
                        if (!f)
                            return !1;
                        var c = !1;
                        f = f.zr;
                        if (!d[f])
                            return !1;
                        a.a.forEach(d[f], function (a) {
                            'custom_inview_module_counter' === a.name && (c = a.reachedInViewTimeThreshold);
                        });
                        return c;
                    };
                    f.startAdTracking = a.k.a.azsx('startAdTracking', a.at.h);
                }(u));
                (function (a) {
                    a.ak = {};
                    a.ak.b = w.floor(100000000 * w.random());
                    a.ak.a = function (k, d, f, g) {
                        if (r && (d && (d += '_' + a.ak.b), !r.jsonp || !r.jsonp[k])) {
                            r.jsonp = r.jsonp || {};
                            r.jsonp[k] = r.jsonp[k] || { cachedResponse: !1 };
                            var c = r.xb || window, b = c.document;
                            c[d] = function (a) {
                                var b;
                                try {
                                    b = JSON.parse(a);
                                } catch (e) {
                                    b = a;
                                }
                                r.jsonp[k].cachedResponse = b;
                                r.swde.zaxs(k + 'JsonpReady', b);
                                c[d] = null;
                            };
                            var e = function (b) {
                                b = k + ' JSONP request handling failed' + (b ? b : '');
                                try {
                                    var c = 'undefined' !== typeof omidNative && ('undefined' === typeof Image || Image && Image._MoatProxyOf), d = c ? '' : document.referrer, e = 'undefined' !== typeof a && a.c && a.c.n ? a.c.n : '', h = 'https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=' + escape('REUTERS_HEADER1') + '&ac=1&k=' + escape(b) + '&ar=' + escape('29ad59d-clean') + '&iw=' + escape('31d6965') + '&bq=' + escape(e) + '&j=' + escape(d) + '&cs=' + new A().getTime();
                                    c ? omidNative.sendUrl(h) : new Image(1, 1).src = h;
                                } catch (f) {
                                }
                            };
                            try {
                                var h = a.c.bd(), l = function () {
                                        'undefined' === typeof g && (g = 'callback');
                                        var c = [
                                                f,
                                                '&',
                                                g,
                                                '=',
                                                d
                                            ].join(''), e = b.createElement('script'), h = b.body || b.getElementsByTagName('head')[0] || b.getElementsByTagName('script')[0];
                                        a.a.cn(c, h, e);
                                    };
                                'undefined' !== typeof h ? 'function' === typeof h.downloadJavaScriptResource && h.downloadJavaScriptResource(f, c[d], e) : l();
                            } catch (p) {
                                e(p);
                            }
                        }
                    };
                    a.ak.c = function (k, d) {
                        r.jsonp && r.jsonp[k] && r.jsonp[k].cachedResponse ? a.a.df([r.jsonp[k].cachedResponse], d)() : r.swde.azsx(k + 'JsonpReady', d, { once: !0 });
                    };
                    a.ak.d = function () {
                        var k = {}, d;
                        return function (f, g, c) {
                            k[f] ? a.ak.c(f, g || function () {
                            }) : ('string' === typeof c ? d = c : 'object' === typeof c && (d = a.ak.e(c, f)), a.ak.a(f, f + 'callback', d), g && a.ak.c(f, g), k[f] = !0);
                        };
                    }();
                    a.ak.e = function (k, d) {
                        var f;
                        a:
                            switch (d) {
                            case 'BrandSafetyNados':
                                f = '/s/v2';
                                break a;
                            case 'OneTagNados':
                                f = '/ot/v1';
                                break a;
                            default:
                                f = '';
                            }
                        var g = ['url=' + encodeURIComponent(a.c.ba)];
                        a.a.forEach(k, function (b, c) {
                            var d = c + '=' + b;
                            a.a.ax(g, d) || g.push(d);
                        });
                        var c = g.join('&'), c = c + ('&ord=' + a.c.bj + '&jv=' + a.a.cv(a.c.bj + c));
                        return 'https://mb.moatads.com' + f + '?' + c;
                    };
                }(u));
                (function (a) {
                    function k(b, d, h) {
                        var f = a.aa.h[b].stateMask;
                        if (d = c[d] * (h ? 16 : 1))
                            a.aa.h[b].stateMask = f | d << 0;
                    }
                    function d(b, c, d, f) {
                        d = a.a.dr(b.x, c.x, d);
                        b = a.a.dr(b.y, c.y, f);
                        return d && b;
                    }
                    function f(b, c) {
                        a.aa && a.aa.h[b] && (a.aa.h[b].allEdgesSeen = !0, a.a.forEach(a.aa.h[b].mediatorIds, function (b, c) {
                            a.k.a.sxaz(c, { id: b });
                        }), c && (a.aa.h[b].failsafe = !0), a.k.a.zaxs('passthrough'));
                    }
                    var g = {};
                    a.aa = {};
                    a.aa.i = 242500;
                    a.aa.j = 1;
                    a.aa.h = {};
                    var c = {
                        topLeft: 8,
                        topRight: 4,
                        bottomLeft: 2,
                        bottomRight: 1
                    };
                    a.aa.k = function (b) {
                        return !b || b && b.isMeasurabilityDisabled() || a.d.c() ? !1 : a.c.dl() || a.c.du() || void 0 || void 0;
                    };
                    a.aa.a = function (b) {
                        return 'number' !== typeof b || a.a.l() ? !1 : 236425 <= b;
                    };
                    a.aa.l = function (a) {
                        return a && a.ao ? 'slave' == a.ao.moatClientAT ? !0 : !1 : !1;
                    };
                    a.aa.m = function (a) {
                        return a && a.ao ? 'cpc' == a.ao.moatClientBT ? !0 : !1 : !1;
                    };
                    a.aa.n = function (a) {
                        return a && a.ao ? 'cpcv' == a.ao.moatClientBT ? !0 : !1 : !1;
                    };
                    a.aa.o = function (a) {
                        return a && a.ao ? 'flatrate' == a.ao.moatClientBT ? !0 : !1 : !1;
                    };
                    a.aa.p = function (a) {
                        return a && a.ao ? 'skin' == a.ao.moatClientAT || 'hpto' == a.ao.moatClientAT || 1 == a.ao.skin ? !0 : !1 : !1;
                    };
                    a.aa.f = function (b) {
                        if (!b || !b.aa)
                            return !1;
                        if ('undefined' != typeof b.er)
                            return b.er;
                        b.video ? !a.aa.k(b) || a.aa.n(b) && !b.video.reachedComplete || (b.er = !0) : a.aa.l(b) || a.aa.m(b) || a.aa.o(b) ? b.er = !1 : a.aa.p(b) || b.isCompositeAd || a.aa.a(a.a.cs(b)) ? b.er = !0 : a.aa.k(b) && a.w.s(b, a.aa.j, !0) && (b.er = !0);
                        return b.er || !1;
                    };
                    a.aa.b = function (b) {
                        if (!b || b.SENT_FIT && b.et || !a.aa.k(b))
                            return !1;
                        var c, d, f = a.w.b(b.zr);
                        b.SENT_FIT || (c = a.w.f(b, f, 'hadFIT'));
                        b.et || (d = a.w.f(b, f, 'hadFullOTS'));
                        if (c || d)
                            a.ac.b(b), b.SENT_FIT = b.SENT_FIT || !!c, b.et = b.et || !!d;
                        return c || d;
                    };
                    a.aa.q = function (b, c, h) {
                        var f;
                        a.a.forEach([
                            null,
                            void 0,
                            !1
                        ], function (a) {
                            if (f = c === a || h === a)
                                return !1;
                        });
                        if (!0 === f || !0 !== (a.a.db(c.top) && a.a.db(c.bottom) && a.a.db(h.bottom) && a.a.db(h.top)) || c.top === c.bottom || c.left === c.right || h.top === h.bottom || h.left === h.right)
                            return !1;
                        var g = c.right - c.left, k = c.bottom - c.top, q = g * (1 - 0.98), y = k * (1 - 0.98), x = {
                                x: c.left,
                                y: c.top
                            }, n = {
                                x: c.right,
                                y: c.top
                            }, m = {
                                x: c.left,
                                y: c.bottom
                            }, r = {
                                x: c.right,
                                y: c.bottom
                            }, u = c.left + q, A = c.top + y, C = c.right - q, z = c.top + y, B = c.left + q, E = c.bottom - y, q = c.right - q, y = c.bottom - y, D = {
                                x: h.left,
                                y: h.top
                            }, v = {
                                x: h.right,
                                y: h.top
                            }, H = {
                                x: h.left,
                                y: h.bottom
                            }, F = {
                                x: h.right,
                                y: h.bottom
                            }, g = w.ceil(0.01 * g), k = w.ceil(0.01 * k), x = d(x, D, g, k), n = d(n, v, g, k), m = d(m, H, g, k), r = d(r, F, g, k);
                        a.aa.r(b, {
                            topLeft: x,
                            topRight: n,
                            bottomLeft: m,
                            bottomRight: r
                        }, {
                            topLeft: u >= h.left && A >= h.top,
                            topRight: C <= h.right && z >= h.top,
                            bottomLeft: B >= h.left && E <= h.bottom,
                            bottomRight: q <= h.right && y <= h.bottom
                        });
                    };
                    a.aa.s = function (b) {
                        if ('undefined' !== typeof b && 0 <= b && !a.aa.h[b]) {
                            a.aa.h[b] = {};
                            a.aa.h[b].allEdgesSeen = !1;
                            a.aa.h[b].mediatorIds = {};
                            a.aa.h[b].outer = {
                                topLeft: !1,
                                topRight: !1,
                                bottomLeft: !1,
                                bottomRight: !1
                            };
                            a.aa.h[b].inner = {
                                topLeft: !1,
                                topRight: !1,
                                bottomLeft: !1,
                                bottomRight: !1
                            };
                            a.aa.h[b].stateMask = 0;
                            var c = 'rectsAvailable', d = a.k.a.azsx(c, a.aa.q);
                            a.aa.h[b].mediatorIds[c] = d;
                            c = 'adEdgesViewStatus';
                            d = a.k.a.azsx(c, a.aa.r);
                            a.aa.h[b].mediatorIds[c] = d;
                            c = 'adFullyVisible';
                            d = a.k.a.azsx(c, f, {
                                condition: function (b, c) {
                                    return b && c && !a.aa.g(b.zr) && a.w && a.w.b && c === a.w.b(b.zr);
                                },
                                once: !0
                            });
                            a.aa.h[b].mediatorIds[c] = d;
                        }
                    };
                    a.aa.t = function (b) {
                        return a.aa.h[b].failsafe;
                    };
                    a.aa.r = function (b, c, d) {
                        function g(l, y, x) {
                            x && (a.a.forEach([
                                'topLeft',
                                'topRight',
                                'bottomLeft',
                                'bottomRight'
                            ], function (a) {
                                !p[a] && c[a] && (p[a] = !0, k(b, a, !0));
                                !t[a] && d[a] && (t[a] = !0, k(b, a, !1));
                            }), (p.topLeft && p.topRight && t.bottomLeft && t.bottomRight || t.topLeft && t.topRight && p.bottomLeft && p.bottomRight || p.topLeft && p.bottomLeft && t.topRight && t.bottomRight || t.topLeft && t.bottomLeft && p.topRight && p.bottomRight) && f(b));
                        }
                        if (!0 !== a.aa.h[b].allEdgesSeen) {
                            d && 'object' === typeof d || (d = c);
                            var p = a.aa.h[b].outer, t = a.aa.h[b].inner;
                            a.k.a.azsx('adCheckingState', g, {
                                once: !0,
                                condition: function (b, c) {
                                    return a.w.b(b.zr) === c;
                                }
                            });
                        }
                    };
                    a.aa.g = function (b) {
                        return 'undefined' !== typeof b && b in a.aa.h ? a.aa.h[b].allEdgesSeen : !1;
                    };
                    (function (a) {
                        function c(a, b) {
                            return function (c) {
                                var d = a.maxContinuouslyInViewTime, e = b.get('currentContinuouslyInViewTime');
                                e > d && (a.maxContinuouslyInViewTime = e, a.checkMilestoneReached());
                                c || b.set('currentContinuouslyInViewTime', 0);
                            };
                        }
                        function d() {
                            return !1;
                        }
                        function f(c) {
                            var d = c.fixedInViewTimeRequirement;
                            this.percvRequired = c.percvRequired;
                            this.shouldConsiderLargeAds = a.a.db(c.largeAdSize);
                            this.largeAdSize = c.largeAdSize;
                            this.largePercvRequired = c.largePercvRequired;
                            this.requiresPassthrough = c.requiresPassthrough;
                            this.qsKey = c.qsKey;
                            c.percvRequiredPassthrough && (this.percvRequiredPassthrough = c.percvRequiredPassthrough);
                            this.getInViewTimeRequirement = function (a) {
                                return d;
                            };
                        }
                        function k(c, d) {
                            return a.a.l() ? d === a.aa.d.n ? a.aa.d.n.b : a.aa.e.m.b : d === a.aa.d.n ? a.aa.d.n.a : a.aa.e.m.a;
                        }
                        function t(d, f, h) {
                            this.label = h;
                            this.config = f;
                            this.groupmMilestoneReached = !1;
                            this.maxContinuouslyInViewTime = 0;
                            this.ad = d;
                            this.fullViewEventPixelFired = !1;
                            var k = this;
                            h = a.av.d(d, a.aa.u, 'groupm_counter_' + d.yg + w.random());
                            var l = c(k, h);
                            if (f === a.aa.e.m.a || f === a.aa.e.m.b)
                                f = a.k.a.azsx('fullOtsReached', function () {
                                    k.groupmMilestoneReached = !0;
                                    k.milestoneFailsafeTriggered = !0;
                                }, {
                                    once: !0,
                                    condition: function (c, e) {
                                        var f = a.w.b(d.zr);
                                        return c.zr === d.zr && e === f;
                                    }
                                }), g[d.zr] = f;
                            this.checkMilestoneReached = function () {
                                var c;
                                c = k.maxContinuouslyInViewTime;
                                var d;
                                if (!0 === k.groupmMilestoneReached)
                                    return !0;
                                d = k.config.getInViewTimeRequirement();
                                c = k.config.requiresPassthrough(k.ad) ? a.aa.g(k.ad.zr) && c >= d : c >= d;
                                k.groupmMilestoneReached = c;
                                !k.fullViewEventPixelFired && c && (k.fullViewEventPixelFired = !0, k.ad.fireFullViewEvent = !0);
                                return k.groupmMilestoneReached;
                            };
                            h.set('currentContinuouslyInViewTime', 0, {
                                useDeltaCompensation: !0,
                                shouldIncrementFn: function (c, d) {
                                    var e, f;
                                    e = d.getLastInviewPercent();
                                    var h = k.config.percvRequired, g = k.config.largePercvRequired;
                                    f = a.a.cs(c);
                                    e = k.config.requiresPassthrough(k.ad) ? e >= k.config.percvRequiredPassthrough : (f = k.config.shouldConsiderLargeAds && f >= k.config.largeAdSize) ? e >= g : e >= h;
                                    return e;
                                },
                                postIncrementationFn: l
                            });
                        }
                        a.aa.u = {};
                        a.aa.d = {};
                        a.aa.d.b = 0.98;
                        a.aa.d.c = 237650;
                        a.aa.d.d = 0.5;
                        a.aa.d.e = a.aa.d.b;
                        a.aa.d.f = 1000;
                        a.aa.d.g = a.aa.d.f;
                        a.aa.d.h = 0.98;
                        a.aa.d.i = 294000;
                        a.aa.d.j = 0.8;
                        a.aa.d.k = 15000;
                        a.aa.d.l = 'im';
                        a.aa.d.m = 'hj';
                        a.aa.d.n = {};
                        a.aa.d.n.a = {};
                        a.aa.d.n.b = {};
                        var q = {
                            percvRequired: a.aa.d.b,
                            largeAdSize: a.aa.d.c,
                            largePercvRequired: a.aa.d.d,
                            requiresPassthrough: d,
                            fixedInViewTimeRequirement: a.aa.d.f,
                            viewTimeCap: !1,
                            qsKey: a.aa.d.l
                        };
                        a.aa.d.n.a = new f(q);
                        a.aa.d.n.b = a.aa.d.n.a;
                        a.aa.e = {};
                        a.aa.e.b = 0.98;
                        a.aa.e.c = 237650;
                        a.aa.e.d = 0.5;
                        a.aa.e.e = 0.98;
                        a.aa.e.f = 0.0001;
                        a.aa.e.g = 1000;
                        a.aa.e.h = 1000;
                        a.aa.e.i = 0.98;
                        a.aa.e.j = 294000;
                        a.aa.e.k = 0.8;
                        a.aa.e.l = 15000;
                        a.aa.e.m = {};
                        a.aa.e.m.a = {};
                        a.aa.e.m.b = {};
                        a.aa.e.n = 'in';
                        a.aa.e.o = 'hj';
                        q = {
                            percvRequired: a.aa.e.b,
                            largeAdSize: a.aa.e.c,
                            largePercvRequired: a.aa.e.d,
                            requiresPassthrough: d,
                            fixedInViewTimeRequirement: a.aa.e.g,
                            viewTimeCap: !1,
                            qsKey: a.aa.e.n
                        };
                        a.aa.e.m.a = new f(q);
                        q = {
                            percvRequired: a.aa.e.e,
                            percvRequiredPassthrough: a.aa.e.f,
                            largeAdSize: !1,
                            largePercvRequired: !1,
                            requiresPassthrough: function (c) {
                                var d;
                                d = a.c.r(a.c.e);
                                var e = c.currentWidth || 0, f = c.currentHeight || 0;
                                a.c.dc ? (c = a.c.w, d = a.c.x) : (c = d.width || 0, d = d.height || 0);
                                return c && d ? f > d || e > c : !1;
                            },
                            fixedInViewTimeRequirement: a.aa.e.h,
                            viewTimeCap: !1,
                            qsKey: a.aa.e.n
                        };
                        a.aa.e.m.b = new f(q);
                        a.aa.d.a = function (c) {
                            var d = k(c, a.aa.d.n);
                            if (!1 !== d)
                                return a.aa.s(c.zr), c.groupmV2 = c.groupmV2 || new t(c, d, 'GroupM V2'), c.groupmV2;
                        };
                        a.aa.e.a = function (c) {
                            var d = k(c, a.aa.e.m);
                            if (!1 !== d)
                                return a.aa.s(c.zr), c.groupmV3 = c.groupmV3 || new t(c, d, 'GroupM V3'), c.groupmV3;
                        };
                        a.aa.c = function (a, b) {
                            b = b || {};
                            var c = B[a];
                            if ('object' !== typeof c)
                                return b;
                            if ('object' === typeof c.groupmV2) {
                                var d = c.groupmV2.config.qsKey;
                                b[d] = c.groupmV2.checkMilestoneReached() ? 1 : 0;
                            }
                            'object' === typeof c.groupmV3 && (d = c.groupmV3.config.qsKey, b[d] = c.groupmV3.checkMilestoneReached() ? 1 : 0);
                            return b;
                        };
                    }(a));
                    a.k.a.azsx('adKilled', function (b) {
                        if (b && !b.ep && (g.hasOwnProperty(b.zr) && a.k.a.sxaz('fullOtsReached', { id: g[b.zr] }), a.aa && a.aa.u && 'object' === typeof a.aa.u))
                            for (var c in a.aa.u)
                                a.aa.u.hasOwnProperty(c) && -1 < a.a.indexOf(c, 'groupm_counter_' + b.yg) && delete a.aa.u[c];
                    });
                }(u));
                (function (a) {
                    function k(c, b) {
                        return function (b, d) {
                            var f, g = {
                                    large: c.config.LARGE_SIZE_REQ,
                                    normal: c.config.NORMAL_SIZE_REQ
                                }, k = d.getLastInviewPercent();
                            f = (f = a.a.cs(b) >= c.config.LARGE_AD_THRESHOLD) && k >= g.large || !f && k >= g.normal;
                            return c.fullyVisOnLastCheck = f;
                        };
                    }
                    function d(c, b) {
                        return function (d) {
                            var f = c.maxContinuouslyInViewTime, g = b.get('currentContinuouslyInViewTime');
                            g > f && (c.maxContinuouslyInViewTime = g, f = g >= c.config.TIME_THRESHOLD, a.c.dt(c.ad, !0) && !c.fullViewEventPixelFired && f && (c.fullViewEventPixelFired = !0, b.set('currentContinuouslyInViewTime', 0, {}), c.ad.fireFullViewEvent = !0));
                            d || b.set('currentContinuouslyInViewTime', 0);
                        };
                    }
                    function f(c, b) {
                        this.ad = c;
                        this.label = b;
                        this.counters = {};
                        this.config = g.config;
                        this.fullViewEventPixelFired = !1;
                        this.maxContinuouslyInViewTime = 0;
                        this.fullyVisOnLastCheck = !1;
                        var e = a.av.d(this.ad, this.counters, 'publicis_counter_' + c.yg + w.random()), f = k(this, e), l = d(this, e);
                        e.set('currentContinuouslyInViewTime', 0, {
                            ignoreOmidCheck: !0,
                            useDeltaCompensation: !0,
                            shouldIncrementFn: f,
                            postIncrementationFn: l
                        });
                    }
                    a.ae = {};
                    var g = {
                        v1: {},
                        config: {}
                    };
                    g.v1.display = {};
                    g.v1.display.LARGE_AD_THRESHOLD = 237650;
                    g.v1.display.NORMAL_SIZE_REQ = 0.98;
                    g.v1.display.LARGE_SIZE_REQ = 0.3;
                    g.v1.display.TIME_THRESHOLD = 1000;
                    g.v1.video = {};
                    g.v1.video.LARGE_AD_THRESHOLD = 237650;
                    g.v1.video.NORMAL_SIZE_REQ = 0.98;
                    g.v1.video.LARGE_SIZE_REQ = 0.5;
                    g.v1.video.TIME_THRESHOLD = 2000;
                    g.v1.display.VIEWABLE_KEY = 'pd';
                    g.v1.video.VIEWABLE_KEY = 'pv';
                    g.config = g.v1.display;
                    a.ae.b = function (a) {
                        a.publicis = a.publicis || new f(a, 'Publicis V1');
                        return a.publicis;
                    };
                    a.ae.a = function (a, b) {
                        b = b || {};
                        var d = B[a];
                        if ('object' !== typeof d)
                            return b;
                        d = d.publicis;
                        'object' === typeof d && (b[d.config.VIEWABLE_KEY] = d.fullViewEventPixelFired ? 1 : 0);
                        return b;
                    };
                    a.k.a.azsx('adKilled', function (c) {
                        if (c && !c.ep && c.publicis && c.publicis.counters && 'object' === typeof c.publicis.counters)
                            for (var b in c.publicis.counters)
                                c.publicis.counters.hasOwnProperty(b) && -1 < a.a.indexOf(b, 'publicis_counter_' + c.yg) && delete c.publicis.counters[b];
                    });
                }(u));
                (function (a) {
                    function k(c, b) {
                        var d = c.getFormat(), f;
                        f = a.a.dx({ all: 30 }, d);
                        a.a.db(f) || (a.a.db(30), f = 30);
                        if (a.f.aj(b))
                            return c.refreshDecision = 1, !1;
                        c.auto = {};
                        var k = c.ao;
                        g([{
                                rate: 30000,
                                max: 25,
                                whitelist: [
                                    {
                                        lookup: 'type',
                                        values: 'leaderboard leaderboardcenter leaderboardlow mpu mpulow flex mpu2 mpu3 mpu4 MPUPlus mobile_hp_mpu bi_content'.split(' ')
                                    },
                                    {
                                        lookup: 'zMoatAdUnit1',
                                        values: [
                                            'jp.reuters',
                                            'cn.reuters'
                                        ]
                                    }
                                ]
                            }], k);
                        a.a.dz(k);
                        k = a.ao.d;
                        a.ao.i && (k = a.ao.i);
                        var p;
                        a.a.db(k) && 0 < k ? p = !0 : (a.ao && a.ao.c && window.console && window.console.log && window.console.log('Moat Inventory Intelligence:', 'Custom max refresh key is less than or equal to zero, or NaN; not enabling refresh'), c && (c.refreshDecision = 6), p = !1);
                        if (!p)
                            return !1;
                        c && c.DfpSlot ? p = !0 : (c && (c.refreshDecision = 7), p = !1);
                        if (!p)
                            return !1;
                        p = a.an.f(c.DfpSlot);
                        var t;
                        p && 'object' === typeof p ? t = !0 : (c && (c.refreshDecision = 8), t = !1);
                        if (!t)
                            return !1;
                        t = p.id;
                        p.getAttribute('width');
                        p.getAttribute('height');
                        a.an.d(c.DfpSlot);
                        a.an.h(c.DfpSlot);
                        r.auto_refresh = r.auto_refresh || {};
                        r.auto_refresh[t] = r.auto_refresh[t] || {
                            isBlacklisted: !1,
                            lastRefreshedByMoat: !1,
                            refreshCount: 0
                        };
                        !0 === r.auto_refresh[t].lastRefreshedByMoat && (c.moatAutoRefreshed = 1, r.auto_refresh[t].lastRefreshedByMoat = !1);
                        t && r.auto_refresh[t].refreshCount < k ? k = !0 : (a.ao && a.ao.c && window.console && window.console.log && window.console.log('Moat Inventory Intelligence:', 'Reached max refresh limit for ' + t + ', disabling refresh'), c && (c.refreshDecision = 9), k = !1);
                        if (!k)
                            return !1;
                        if (!a.ao.j(c))
                            return r.auto_refresh[t].isBlacklisted = !0, !1;
                        k = 'Moat Inventory Intelligence:';
                        a.ao && a.ao.c && window.console && window.console.log && window.console.log(k, 'Adding listener to ad slot ' + t);
                        k = 'Moat Inventory Intelligence:';
                        a.ao && a.ao.c && window.console && window.console.log && window.console.log(k, p);
                        f = a.ao.h ? a.ao.h : 1000 * f;
                        try {
                            a.ao.k(c.zr, 'inview', f), a.a.du({}, d) || (c.auto.mouseEvtId = a.k.a.azsx('mouseEventOnAd', a.a.df([c], a.ao.l))), c.refreshDecision = 0;
                        } catch (q) {
                            c && (c.refreshDecision = 20);
                        }
                    }
                    a.ao = {};
                    a.ao.c = !1;
                    a.ao.c = '1' === a.a.aq(a.c.ba, 'moat_log');
                    a.ao.d = 5;
                    a.ao.e = 5000;
                    var d = {}, f = {
                            inview: function (c, b) {
                                return a.w.i(c, b, !0);
                            },
                            fullInview: function (c, b) {
                                return a.w.s(c, b, !0);
                            },
                            activeInview: function (c, b) {
                                if (!a.c.c || !c.activetime)
                                    return !1;
                                var d = a.w.b(c.zr);
                                return (d = a.av.c(c.activetime.counters, d)) && d.get('activeInviewTime') >= b;
                            }
                        }, g = function (c, b) {
                            a.ao.f = !1;
                            a.ao.g = !1;
                            c && a.a.f(c) && a.a.forEach(c, function (c) {
                                if (c.hasOwnProperty('blacklist')) {
                                    if (c = c.blacklist, a.a.ci(c) || a.a.dt(c, b))
                                        a.ao.g = !0;
                                } else if (c.hasOwnProperty('whitelist')) {
                                    var d = c.whitelist;
                                    if (a.a.ci(d) || a.a.dt(d, b))
                                        a.ao.f = !0, a.ao.h = c.rate, a.ao.i = c.max;
                                }
                            });
                        };
                    a.ao.j = function (c) {
                        var b = c.ao;
                        a.an.c(c.DfpSlot);
                        a.an.e(c.DfpSlot);
                        a.an.d(c.DfpSlot);
                        var d = a.an.f(c.DfpSlot).id;
                        c.getFormat();
                        if (1 === b.skin)
                            return c.refreshDecision = 10, !1;
                        var f = r && r.auto_refresh && r.auto_refresh[d] && r.auto_refresh[d].creativeId;
                        if (f && b.moatClientLevel4 && f === b.moatClientLevel4)
                            return a.ao && a.ao.c && window.console && window.console.log && window.console.log('Moat Inventory Intelligence:', 'Served same creative as last impression, disabling further refreshing for ' + d), c.wasDupeAutoCreative = !0, c.refreshDecision = 13, !1;
                        if (a.ao.g)
                            return c.refreshDecision = 14, !1;
                        if (!a.ao.f)
                            return c.refreshDecision = 15, !1;
                        b = {};
                        a.k.a.zaxs('adShouldRefresh', b, c, d);
                        if (!1 === b.canRefresh)
                            return !1;
                        c.refreshDecision = 0;
                        return !0;
                    };
                    a.ao.a = function (c) {
                        a.ak.c('data', function (b) {
                            b = a.a.df([
                                c,
                                b
                            ], k);
                            a.an.g(b);
                        });
                    };
                    a.ao.k = function (a, b, e) {
                        d.hasOwnProperty(a) || (d[a] = {});
                        d[a][b] = e;
                    };
                    a.ao.l = function (c) {
                        var b = new A().getTime();
                        return 1000 <= (c.auto.lastMouseTimestamp && b - c.auto.lastMouseTimestamp || 0) || !c.auto.hadRecentMouseEvent ? (c.auto.mouseCheckId && a.a.a(c.auto.mouseCheckId), c.auto.hadRecentMouseEvent = !0, c.auto.lastMouseTimestamp = b, b = a.ao.e, a.ao && a.ao.c && window.console && window.console.log && window.console.log('Moat Inventory Intelligence:', 'Mouse event! Disabling refresh for ' + b + ' milliseconds'), c.auto.mouseCheckId = a.l.f(a.a.df([c], a.ao.m), b), c.auto.mouseCheckId) : !1;
                    };
                    a.ao.m = function (c) {
                        c.auto.hadRecentMouseEvent = !1;
                        a.ao && a.ao.c && window.console && window.console.log && window.console.log('Moat Inventory Intelligence:', 'Mouse sleep time over, re-enabling refresh');
                    };
                    a.ao.n = function (c) {
                        if (c) {
                            var b = c.ao;
                            c.getFormat();
                            var d = a.an.f(c.DfpSlot);
                            if (d)
                                if (d.getAttribute('width'), d.getAttribute('height'), d = d.id, a.an.d(c.DfpSlot), a.an.h(c.DfpSlot), a.an.i(), d && c.DfpSlot) {
                                    if (!0 === r.auto_refresh[d].isBlacklisted)
                                        return c.refreshDecision = r.auto_refresh[d].refreshDecision || 14, !1;
                                    r.auto_refresh[d].refreshCount = 1 + r.auto_refresh[d].refreshCount;
                                    r.auto_refresh[d].lastRefreshedByMoat = !0;
                                    r.auto_refresh[d].creativeId = b.moatClientLevel4;
                                    r.auto_refresh[d].refreshDecision = c.refreshDecision;
                                    a.an.j(c.DfpSlot, 'mivr', r.auto_refresh[d].refreshCount);
                                    b = c.DfpSlot;
                                    a.ao && a.ao.c && window.console && window.console.log && window.console.log('Moat Inventory Intelligence:', 'Refreshing slot for ' + b);
                                    a.an.k([b]);
                                    a.ac.g(c);
                                } else
                                    c.refreshDecision = 7;
                            else
                                c.refreshDecision = 8;
                        }
                    };
                    a.ao.b = function () {
                        for (var c in B)
                            if (B.hasOwnProperty(c)) {
                                var b = B[c];
                                if (!b.auto || !b.auto.hadRecentMouseEvent) {
                                    var e = d[c], h;
                                    for (h in e)
                                        if (e.hasOwnProperty(h) && f[h](b, e[h])) {
                                            try {
                                                a.ao.n(b);
                                            } catch (g) {
                                            }
                                            delete e[h];
                                            a.k.a.sxaz('mouseEventOnAd', { id: b.auto.mouseEvtId });
                                        }
                                }
                            }
                    };
                    a.ao.o = function () {
                        var c = {}, b = a.an.a();
                        if (!b)
                            return !1;
                        a.a.forEach(b, function (a) {
                            (a = (a = a.getResponseInformation()) && a.lineItemId) && (c[a] = 1 + (c[a] || 0));
                        });
                        return c;
                    };
                    a.k.a.azsx('adKilled', function (c) {
                        c && !c.ep && c.auto && c.auto.mouseEvtId && a.k.a.sxaz('mouseEventOnAd', { id: c.auto.mouseEvtId });
                    });
                }(u));
                (function (a) {
                    function k(d) {
                        if (d.version == a.aw.a)
                            return !0;
                        var c = a.aw.a + '-beta' === d.version, b = a.aw.a === d.version + '-beta';
                        if (('moatframe' === d.type || 'addThis' === d.type) && (c || b))
                            return !0;
                    }
                    a.aw = {};
                    a.aw.a = '1.2';
                    a.aw.prefix = 'MSFAPI';
                    a.aw.b = {};
                    a.aw.c = {};
                    var d = a.c.ax.a, f = a.c.az;
                    a.aw.d = /([a-z]+)#([a-z0-9.-]+)#([0-9]+)#([a-z0-9]+)#([0-9]+)#(.+)/i;
                    a.aw.e = /@([a-z0-9]+)@@(.*)/i;
                    a.aw.f = function (f) {
                        if (f) {
                            var c = a.aw.g(f);
                            c.listening || (r.dcsx && r.dcsx.ynds(f, 'message', 'message-' + d, 'ME-' + d), c.listening = !0, r.swde.azsx('allAdsKilled', function () {
                                a.aw.h(f);
                            }, { once: !0 }));
                            r.swde.azsx('message-' + d, a.aw.i);
                            a.k.a.azsx('view:tick', function () {
                                r.dcsx && !c.listening && (r.dcsx.ynds(f, 'message', 'message-' + d, 'ME-' + d), c.listening = !0);
                            });
                        }
                    };
                    a.aw.g = function (f) {
                        var c = 'Moat#PML#' + a.c.as + '#' + a.aw.a;
                        f[c] || (f[c] = {
                            id: d,
                            listening: !1
                        });
                        return f[c];
                    };
                    a.aw.h = function (f) {
                        var c = f && a.aw.g(f);
                        a.l.d(f, 'message', a.aw.i);
                        r.dcsx && r.dcsx.engn({ listenerName: 'ME-' + d });
                        r.swde.sxaz('message-' + d, { callback: a.aw.i });
                        c && (c.listening = !1);
                    };
                    a.aw.j = function (d) {
                        return a.aw.prefix + '#' + d + '#';
                    };
                    a.aw.k = function (d) {
                        var c = d.match(a.aw.d);
                        d = !1;
                        c && 7 == c.length && (d = {
                            prefix: c[1],
                            version: c[2],
                            uid: c[3],
                            type: c[4],
                            request: c[5],
                            data: c[6]
                        }, (c = d.data.match(a.aw.e)) && 3 == c.length && (d.cmd = c[1], d.arg = c[2]), d.version && -1 !== a.a.indexOf(d.version, '-beta') && (d.isBeta = !0));
                        return d;
                    };
                    a.aw.i = function (d) {
                        if (!(d && d.origin && d.data && 'string' === typeof d.data))
                            return !1;
                        var c = a.aw.k(d.data), b = c && c.uid == f.toString();
                        if (c && !b && k(c) && (d.msgData = c, c.request in a.aw.c && (d.triggerCallback = function () {
                                a.aw.c[c.request] && (a.aw.c[c.request](d), 'addThis' !== c.type && (a.aw.c[c.request] = null, delete a.aw.c[c.request]));
                            }), a.aw.b[c.type]))
                            for (var b = 0, e = a.aw.b[c.type].length; b < e; b++)
                                a.aw.b[c.type][b](d);
                    };
                    a.aw.l = function (d, c) {
                        a.aw.b[d] = [c];
                    };
                    a.aw.m = function (d, c, b, e) {
                        'object' == typeof c && (c = a.a.by(c));
                        e = e || w.floor(10000000000 * w.random());
                        'function' == typeof b && (a.aw.c[e] = b);
                        d = a.aw.j(a.aw.a) + f + '#' + d + '#' + e + '#' + c;
                        return {
                            request: e,
                            msg: d
                        };
                    };
                    a.aw.n = function (d, c, b, e, f) {
                        'object' == typeof b && (b = a.a.by(b));
                        return a.aw.m(d, '@' + c + '@@' + b, e, f);
                    };
                    a.aw.o = function (d, c, b) {
                        try {
                            if (!d || !d || !d.source)
                                return !1;
                            d.source.postMessage(a.aw.m(d.msgData.type, c, b, d.msgData.request).msg, '*');
                        } catch (e) {
                            return !1;
                        }
                        return !0;
                    };
                    a.aw.p = function (d, c, b) {
                        try {
                            var e = a.g.i(c || window.top);
                            if (!e)
                                return a.l.f(function () {
                                    a.aw.p(d, c, b);
                                }, 200);
                            for (var f = 0; f < e.length; f++)
                                b && e[f] == window || e[f].postMessage(d, '*');
                        } catch (k) {
                        }
                    };
                    a.k.a.azsx('modulesReady', a.a.df([window], a.aw.f), { once: !0 });
                    a.k.a.azsx('stopPostMessageListeners', a.a.df([window], a.aw.h), { once: !0 });
                }(u));
                (function (a) {
                    a.al = {};
                    a.al.b = {};
                    a.al.b.a = 'CF';
                    a.al.b.b = 'CNF';
                    a.al.b.c = 'CNS';
                    a.al.a = {};
                    a.al.a.b = !1;
                    a.al.a.c = [];
                    a.al.c = {};
                    a.al.d = {};
                    var k = !1;
                    a.al.a.a = function () {
                        var d = a.al.e();
                        a.al.a.b || a.c.c || (d = a.aw.n('moatframe', 'check', d, function (d) {
                            d = a.a.bz(d.msgData.data);
                            var g = 'string' === typeof a.c.g;
                            d && 'string' === typeof d.fullUrl && 'number' === typeof d.urlSrc && !g && a.a.ak(d.fullUrl) && !a.c.bb && (a.c.f(d.urlSrc), a.c.g = d.cleanUrl, a.c.eu = d.fullUrl, a.c.ba = d.fullUrl, a.c.bb = !0);
                            d && d.available && !a.al.a.b && (a.c.cb = !0, a.al.a.b = !0, d = 'MoatFrame#geom#' + new A().getTime(), a.l.g(a.al.a.d, null, 200, d), a.al.a.c.push(d), a.k.a.zaxs('Moatframe:Ready', d));
                        }), a.aw.p(d.msg, !1, !0));
                    };
                    a.al.f = function () {
                        a.aw.l('moatframe', a.al.g);
                        a.aw.l('addThis', a.al.g);
                        a.aw.p(a.aw.m('moatframe', 'ping').msg, !1, !0);
                    };
                    a.al.h = function (d) {
                        var f = a.al.a.e;
                        if (!f)
                            return !1;
                        var g = a.z.i(d.aa), c = a.z.n(g.rect, f.el, f.et), b = a.z.n(g.visibleRect, f.el, f.et), b = a.z.m(b, {
                                left: f.vl,
                                right: f.vr,
                                top: f.vt,
                                bottom: f.vb
                            }), g = (b.right - b.left) * (b.bottom - b.top) / g.area, e = !1;
                        f && 'number' === typeof f.pv && !isNaN(f.pv) && (a.a.dr(g, f.pv, 0.01) && 'sframe' === a.w.b(d.zr) && (e = !0), g = w.min(g, f.pv));
                        f.m || (e = !0);
                        e && a.k.a.zaxs('rectsAvailable', d.zr, c, b);
                        f && 'boolean' === typeof f.ia && (a.c.cc = f.ia);
                        f && 'number' === typeof f.m && !isNaN(f.m) && (a.c.cd = f.m);
                        return g;
                    };
                    a.al.i = function (d) {
                        return 'undefined' !== typeof d && a.al.d && a.al.d[d] ? (a.al.d[d] = null, !0) : !1;
                    };
                    a.al.j = function () {
                        var d = a.aw.m('moatframe', 'kill', null);
                        a.aw.p(d.msg, !1, !0);
                    };
                    a.al.e = function () {
                        var d = a.c.y, f = a.c.z;
                        return d && f ? {
                            width: d,
                            height: f
                        } : !1;
                    };
                    a.al.k = function () {
                        return a.c.c;
                    };
                    a.al.l = function (d) {
                        var f = !1;
                        a.a.forEach(a.al.b, function (a) {
                            if (a == d)
                                return f = !0, !1;
                        });
                        return f;
                    };
                    a.al.g = function (d) {
                        var f = d.msgData.cmd || d.msgData.data;
                        if (f)
                            if (d.triggerCallback)
                                d.triggerCallback(d);
                            else if (a.al.c[f])
                                a.al.c[f](d);
                            else
                                a.al.l(f) || a.aw.o(d, a.al.b.b);
                    };
                    a.al.m = function (d) {
                        var f = {}, g = d.msgData.arg && a.a.bz(d.msgData.arg);
                        if (a.al.n(window, d.source, d.msgData.uid, g) && a.al.k()) {
                            if (f.available = !0, a.c.bb && (g = a.c.ba) && a.c.bb && a.a.ak(g)) {
                                var c = a.c.et || a.a.am();
                                a.c.et = c;
                                f.cleanUrl = c;
                                f.fullUrl = g;
                                f.urlSrc = 1;
                            }
                        } else
                            f.available = !1;
                        a.aw.o(d, f);
                    };
                    a.al.o = function (d, f) {
                        if (!d || !f)
                            return !1;
                        for (var g = a.g.c(window).pop(), c = a.g.k(d, 10), b = !1, e = !1, h = null, k = null, p, t = c.length - 1; 0 <= t; t--)
                            if (c[t] == g && (b = !0), b && !a.g.j(c[t])) {
                                k = c[t];
                                break;
                            }
                        b && k && ((h = k && k.parent && k.parent.document) && (p = a.g.f(h, k)), p && (g = p.offsetWidth, c = p.offsetHeight, g == f.width && c == f.height ? e = !0 : (g *= c, c = f.width * f.height, e = 0.98 <= w.min(g, c) / w.max(g, c))));
                        return {
                            isNested: e,
                            iframe: p,
                            iframeParentDoc: h
                        };
                    };
                    a.al.p = function (d) {
                        return d && d.parent && a.g.f(d.parent.document, d);
                    };
                    a.al.q = function (d) {
                        (d = 'undefined' !== typeof d && a.al.d && a.al.d[d]) && 'boolean' == typeof d.isWithinReach && (d.isNested && !d.iframeParentDoc && (d.isWithinReach = !1), d.isNested || d.win && !a.g.d(d.win) || (d.isWithinReach = !1));
                        return d;
                    };
                    a.al.n = function (d, f, g, c) {
                        var b, e, h = {
                                isNested: !1,
                                iframe: null,
                                iframeParentDoc: null
                            };
                        if ((b = a.al.q(g)) && b.isWithinReach)
                            return !0;
                        e = a.g.m(d, f, !0);
                        b && 'undefined' == typeof b.isWithinReach ? b.isWithinReach = e : (e ? f = a.al.p(f) : (h = a.al.o(f, c), (f = h.iframe) && (e = !0)), b = {
                            dimensions: c,
                            iframe: f,
                            iframeParentDoc: h.iframeParentDoc,
                            isNested: h.isNested,
                            isWithinReach: e,
                            win: d
                        }, a.al.d[g] = b);
                        return b.isWithinReach;
                    };
                    a.al.r = function (a, f, g, c, b) {
                        if (!a || !f)
                            return !1;
                        a = {
                            w: a.width,
                            h: a.height,
                            el: a.left,
                            et: a.top,
                            er: a.right,
                            eb: a.bottom,
                            vl: f.left,
                            vt: f.top,
                            vr: f.right,
                            vb: f.bottom
                        };
                        'boolean' === typeof c && (a.ia = c);
                        'number' !== typeof g || isNaN(g) || (a.m = g);
                        'number' !== typeof b || isNaN(b) || (a.pv = 1 < b ? b / 100 : b);
                        return a;
                    };
                    a.al.s = function (d) {
                        return d ? (d = a.z.i(d)) ? a.al.r(d.cumulRect, d.visibleRect, 0, !1) : !1 : !1;
                    };
                    a.al.a.d = function () {
                        if (!k) {
                            k = !0;
                            var d = a.aw.m('moatframe', 'geom', function (d) {
                                k = !1;
                                a.al.l(d.msgData.data) || (a.al.a.e = a.a.bz(d.msgData.data));
                            });
                            a.aw.p(d.msg, !1, !0);
                        }
                    };
                    a.al.c.ping = function (d) {
                        d && d.source === window || a.a.ef() && d.msgData.isBeta || !a.c.c && a.c.di() && a.al.a.a();
                    };
                    a.al.c.check = function (d) {
                        if (!a.a.ee() || d.msgData.isBeta) {
                            var f = !0;
                            a.c.ce() && (f = !1);
                            f && a.al.m(d);
                        }
                    };
                    a.al.c.geom = function (d) {
                        if (!a.a.ee() || d.msgData.isBeta)
                            if (a.al.n(window, d.source, d.msgData.uid) && a.al.k()) {
                                var f = a.al.d && a.al.d[d.msgData.uid] && a.al.d[d.msgData.uid].iframe;
                                if (f && (f = a.al.s(f))) {
                                    a.aw.o(d, f);
                                    return;
                                }
                                a.aw.o(d, a.al.b.a);
                            } else
                                a.aw.o(d, a.al.b.c);
                    };
                    a.al.c.kill = function (d) {
                        a.al.i(d.msgData.uid);
                    };
                }(u));
                (function (a) {
                    a.as = {};
                    a.as.b = 5000;
                    a.as.c = function (k) {
                        if (!a.c.c)
                            return !1;
                        k.activetime = {};
                        k.activetime.counters = {};
                        a.as.d(k);
                        a.k.a.azsx('adKilled', a.as.e, {
                            condition: function (a) {
                                return k.zr == a.zr;
                            },
                            once: !0
                        });
                        a.as.f(k);
                    };
                    a.as.f = function (k) {
                        if (k.activetime) {
                            var d = a.w.o(k.zr);
                            if (k.activetime.onInViewTimeCount)
                                for (var f in d)
                                    d[f].removeListener && d[f].removeListener(k.activetime);
                            else
                                k.activetime.onInViewTimeCount = a.a.df([k], a.as.g);
                            (d = a.w.k(k.zr, !0)) && d.addListener(k.activetime);
                        }
                    };
                    a.as.d = function (k) {
                        k.activetime.mouseSubId = r.swde.azsx('mouseEvent', a.a.df([k], a.as.h));
                        k.activetime.mouseLocalSubId = a.k.a.azsx('mouseEvent', a.a.df([k], a.as.h));
                        k.activetime.keyboardSubId = r.swde.azsx('keyboardEvent', a.a.df([k], a.as.i));
                        k.activetime.focusSubId = r.swde.azsx('focusStateChange', a.a.df([k], a.as.j));
                    };
                    a.as.e = function (k) {
                        if (k.activetime && (r.swde.sxaz('mouseEvent', { id: k.activetime.mouseSubId }), a.k.a.sxaz('mouseEvent', { id: k.activetime.mouseLocalSubId }), r.swde.sxaz('keyboardEvent', { id: k.activetime.keyboardSubId }), r.swde.sxaz('focusStateChange', { id: k.activetime.focusSubId }), k.activetime && k.activetime.counters && 'object' === typeof k.activetime.counters))
                            for (var d in k.activetime.counters)
                                delete k.activetime.counters[d];
                    };
                    a.as.k = function (k, d) {
                        a.as.l(k, !0);
                    };
                    a.as.h = function (k, d) {
                        a.as.l(k, !0);
                    };
                    a.as.i = function (k, d) {
                        a.as.l(k, !0);
                    };
                    a.as.j = function (k, d) {
                        d && a.as.l(k, !0);
                    };
                    a.as.l = function (k, d) {
                        var f = new A().getTime(), f = k.activetime.activeTS && f - k.activetime.activeTS || 0;
                        d && (1000 < f || !k.activetime.active) && (k.activetime.checkID && a.a.a(k.activetime.checkID), k.activetime.activeTS = new A().getTime(), k.activetime.checkID = a.l.f(a.a.df([k], a.as.m), a.as.b));
                        k.activetime.active = d;
                    };
                    a.as.m = function (k) {
                        if (k.activetime.active) {
                            var d = new A().getTime() - k.activetime.activeTS < a.as.b;
                            a.as.l(k, d);
                        }
                    };
                    a.as.g = function (k, d, f, g, c) {
                        f = a.av.c(k.activetime.counters, c);
                        c = a.w.g(k.zr, c);
                        c = (k = k.activetime.active) && c && c.visible && c.visible();
                        g = f.get('lastActiveVis', !1);
                        !f.get('wasEverActiveAndFocused') && k && f.set('wasEverActiveAndFocused', 1);
                        g && c ? f.increment('activeInviewTime', w.max(d, 0)) : (g || c) && f.increment('activeInviewTime', w.max(w.round(0.5 * d), 0));
                        f.set('lastActiveVis', c);
                    };
                    a.as.a = function (k, d) {
                        if (!a.d.c()) {
                            d.rf = a.c.ev ? 1 : 0;
                            var f;
                            f = a.c.ev;
                            if (!a.c.c)
                                return f = f || a.focus.pageIsVisible() || k && k.counters && k.counters.strictDwell && k.counters.strictDwell.tCur && 0 < k.counters.strictDwell.tCur, d.re = f ? 1 : 0, d;
                            if (!k.activetime)
                                return d;
                            var g = a.w.b(k.zr), g = a.av.c(k.activetime.counters, g);
                            f = f || g.get('wasEverActiveAndFocused');
                            d.re = f ? 1 : 0;
                            g && 0 < g.get('activeInviewTime') && (d.ft = g.get('activeInviewTime'), d.fv = g.get('lastActiveInviewTime'), d.fw = g.get('activeInviewTimeFirstDelta', g.get('activeInviewTime')), g.set('lastActiveInviewTime', g.get('activeInviewTime')));
                            return d;
                        }
                    };
                    a.k.a.azsx('viewCounterStarted', a.as.f);
                    a.k.a.azsx('startAdTracking', a.as.c);
                }(u));
                (function (a) {
                    function k(c) {
                        c.functionInProgress = !1;
                        return 0 < c.pendingFunctions.length ? (c = c.pendingFunctions.shift(), a.a.df(c, a.ax.call, a.ax)(), !0) : !1;
                    }
                    function d() {
                        try {
                            a = window.__b, (0, window.__w)('INNER_FUNCTION'), window.__w = void 0, window.__b = void 0;
                        } catch (d) {
                            var c = d.name + ' in closure (moat.customIframe): ' + d.message + ', stack=' + d.stack;
                            try {
                                var b = 'undefined' !== typeof omidNative && ('undefined' === typeof Image || Image && Image._MoatProxyOf), e = b ? '' : document.referrer, f = 'undefined' !== typeof a && a.c && a.c.n ? a.c.n : '', g = 'https://px.moatads.com/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=' + escape('REUTERS_HEADER1') + '&ac=1&k=' + escape(c) + '&ar=' + escape('29ad59d-clean') + '&iw=' + escape('31d6965') + '&bq=' + escape(f) + '&j=' + escape(e) + '&cs=' + new A().getTime();
                                b ? omidNative.sendUrl(g) : new Image(1, 1).src = g;
                            } catch (k) {
                            }
                        }
                    }
                    function f(c) {
                        if (!c)
                            return !1;
                        var b = c.iframe, e = b.contentWindow.document, f = c.innerFunction, g = c.innerFunctionCbName, p = c.preserveDom;
                        !1 !== a.c.ed() ? (p = e.createElement('script'), p.innerHTML = d.toString().replace('"INNER_FUNCTION"', f), e.body.appendChild(p)) : (f = '<html><head></head><body><script>' + d.toString().replace('"INNER_FUNCTION"', f) + '</script>', p || (f += '<script>setTimeout(function() { document.close(); }, 1);</script>'), e.write(f + '</body></html>'));
                        b.contentWindow.__b = c.Moat;
                        b.contentWindow.__w = c.wrapper;
                        b.contentWindow[d.toString().match(/function (\w+)\(\)/)[1]]();
                        g && a.c.ax[g] && (a.c.ax[g] = null);
                        if (!k(c.frameData))
                            a:
                                if (e = c.setIframeDomain, c = c.preserveDom, b) {
                                    var t;
                                    if (!e)
                                        try {
                                            t = b.contentWindow.document;
                                        } catch (q) {
                                            break a;
                                        }
                                    g = !1 === a.c.ed();
                                    c ? e ? b.src = 'javascript:document.close();' : t.close() : e ? b.src = g ? 'javascript:document.open(); document.close();' : 'javascript:document.head && (document.head.innerHTML=""); document.body && (document.body.innerHTML="");' : g ? (t.open(), t.close()) : (t.head && (t.head.innerHTML = ''), t.body && (t.body.innerHTML = ''));
                                }
                    }
                    function g(a) {
                        if ('string' !== typeof a)
                            return '';
                        var b = a.charAt(0);
                        '\'' !== b && '"' !== b && (a = '\'' + a + '\'');
                        return a;
                    }
                    a.ax = {};
                    a.ax.a = function (c, b, d, f) {
                        if (!c)
                            return !1;
                        try {
                            var g = document.createElement('iframe'), p = b || a.a.di();
                            if (!g)
                                return !1;
                            a.a.dn(g, f);
                            var t;
                            d ? (d = a.a.cm(d), t = function () {
                                a.a.cl(g, d);
                            }) : (d = a.c.e.document.body, t = function () {
                                d.insertBefore(g, d.insertBefore[0] || null);
                            });
                            var q = {
                                id: p,
                                iframe: g,
                                functionInProgress: !1,
                                pendingFunctions: [],
                                parent: d,
                                loaded: !1
                            };
                            g.onload = function () {
                                g.contentWindow && g.contentDocument && !q.loaded && (q.loaded = !0, k(q));
                            };
                            t();
                            q.loaded = q.loaded || g.contentDocument && 'complete' === g.contentDocument.readyState;
                            c.customIframes || (c.customIframes = {});
                            c.customIframes[p] = q;
                            q.loaded && k(q);
                            a.k.a.azsx('adKilled', function (b) {
                                var c = b.customIframes, d;
                                for (d in c)
                                    c.hasOwnProperty(d) && a.ax.b(b, c[d].id);
                            }, {
                                condition: function (a) {
                                    return c.zr == a.zr;
                                },
                                once: !0
                            });
                            return p;
                        } catch (r) {
                        }
                        return !1;
                    };
                    a.ax.b = function (a, b, d) {
                        var f = a.customIframes[b];
                        d = f && f.iframe;
                        if (!f || !d)
                            return !1;
                        f = f.parent;
                        if (!f)
                            return !1;
                        try {
                            f.removeChild(d);
                        } catch (g) {
                        }
                        a.customIframes[b] = null;
                        delete a.customIframes[b];
                        return !0;
                    };
                    a.ax.call = function (c, b, d, h, k, p) {
                        if (!c || 'undefined' === typeof b)
                            return !1;
                        var t = c && c.customIframes && c.customIframes[b];
                        if (!t || !d)
                            return !1;
                        h = h && 'string' !== typeof h ? h.toString() : g(h);
                        d && 'string' !== typeof d && (d = a.a.dl(d, h));
                        k && 'function' === typeof k || (k = function () {
                        });
                        if (t.functionInProgress || !t.loaded)
                            return t.pendingFunctions.push([
                                c,
                                b,
                                d,
                                h,
                                k,
                                p
                            ]), !1;
                        c = t.iframe;
                        t.functionInProgress = !0;
                        b = !1;
                        try {
                            if (!t.iframe.contentDocument)
                                throw Error();
                        } catch (r) {
                            b = !0;
                        }
                        d = a.l.l(a.a.df([{
                                iframe: c,
                                frameData: t,
                                Moat: a,
                                wrapper: function (a) {
                                    k(a);
                                },
                                innerFunction: d,
                                innerFunctionCbName: q,
                                setIframeDomain: b,
                                preserveDom: p
                            }], f));
                        if (b) {
                            var q;
                            do
                                q = 'Moat#iqcb' + w.floor(10000 * w.random());
                            while (a.c.ax[q]);
                            a.c.e[a.c.ay][q] = d;
                            c.src = 'javascript:document.open(); document.domain="' + document.domain + '"; window.parent["' + a.c.ay + '"]["' + q + '"]();';
                        } else
                            d();
                    };
                }(u));
                (function () {
                    function a(a) {
                        window._qs = a;
                        (a = window.__b) && a.a.cn('https://z.moatads.com/px2/client.js', document.body);
                    }
                    u.ay = {};
                    u.ay.a = function (k) {
                        if (k) {
                            var d = 0 === w.floor(1000 * w.random());
                            k.px2 = {
                                inSample: !1,
                                success: !1,
                                firedPixel: !1
                            };
                            if (d && (k.px2.inSample = !0, d = u.ax.a(k, 'ivt'))) {
                                try {
                                    var f = k.customIframes && k.customIframes[d] && k.customIframes[d].iframe;
                                    f && (f.contentWindow.__PX2__ = k.px2);
                                } catch (g) {
                                }
                                f = u.f.r();
                                f = u.y.b(36, k.ao, f, !1, !0);
                                f.qs.i = u.a.dy('REUTERS_HEADER1', 'PX2');
                                f = u.y.j(f.qs);
                                u.ax.call(k, d, a, f, null, !0);
                                k.px2.success = !0;
                            }
                        }
                    };
                }(u));
                (function (a) {
                    function k(c) {
                        var d = { oz: !0 };
                        if (!a.c.am().isInApp || a.c.cq())
                            d.su = !0, d.of = !0;
                        if (!b[c])
                            return !1;
                        for (var e in b[c])
                            if (d[e] && b[c].hasOwnProperty(e) && !b[c][e])
                                return !1;
                        return !0;
                    }
                    function d(b) {
                        a.ai.e(b);
                        a.ai.f(b);
                        a.ai.g(b);
                        a.ai.h(b);
                        var c = k(b.zr);
                        !b.hasAdLoadedfired && c ? e = !0 : !e && c && (c = { e: 9 }, c.q = b.aq[9]++, a.y.a(b, c), e = !0);
                    }
                    function f(a) {
                        return {
                            st: !1,
                            su: !1,
                            of: !1,
                            oz: !1
                        };
                    }
                    var g = 0, c, b = {};
                    a.ai = {};
                    a.ai.c = function (a) {
                        return !1;
                    };
                    a.ai.d = function () {
                        var b = new A().getTime(), c = b - g;
                        if (g && !(1000 > c)) {
                            g = b;
                            for (var e in B)
                                B.hasOwnProperty(e) && d(B[e]);
                            a.k.a.zaxs('hiddenAds:updated');
                        }
                    };
                    var e = !1;
                    a.ai.e = function (c) {
                        b[c.zr] || (b[c.zr] = f(c));
                        if (!0 !== b[c.zr].st) {
                            var d = a.w.k(c.zr);
                            d ? (c.isCurrentlyStacked = a.z.r(c), !1 === b[c.zr].st && (b[c.zr].st = !1 === d.adStartedOnScreen() || !1 === c.isCurrentlyStacked)) : b[c.zr].st = !0;
                        }
                    };
                    a.ai.f = function (c) {
                        var d = b, e = c.zr;
                        d[e] = b[e] || f(c);
                        var g = d[e].su;
                        if (!g) {
                            var k = c.WINDOW || window, g = c.AD_RECT || a.z.k(c.aa, k, c._calcVideoBasedOnContainer), k = a.c.r(k), g = c.isInIframe ? g && k && !(g.left >= k.width || 0 >= g.right || g.top >= k.height || 0 >= g.bottom) : !0;
                            d[e].su = g;
                        }
                    };
                    a.ai.g = function (c) {
                        var d = b, e = c.zr;
                        d[e] = b[e] || f(c);
                        var g = d[e].of;
                        g || (g = a.c.r(c.WINDOW), g = c.isInIframe ? g && !(5 >= g.width || 5 >= g.height) : !0, d[e].of = g);
                    };
                    a.ai.h = function (c) {
                        var d = b[c.zr];
                        b[c.zr] = b[c.zr] || f(c);
                        if (c.aa) {
                            var e = 0 < a.a.de(c);
                            c.isCurrentlyTransparent = !e;
                            d.oz = d.oz || e;
                            return e;
                        }
                        return d.oz;
                    };
                    a.ai.b = function (a) {
                        var c = {}, d, e;
                        for (e in b[a])
                            b[a].hasOwnProperty(e) && (d = b[a][e], c[e] = d ? 1 : 0);
                        return c;
                    };
                    a.ai.a = function (b) {
                        return a.c.ea() ? !1 : !k(b);
                    };
                    a.k.a.azsx('adLoaded', function (a) {
                        a.hasAdLoadedfired = !0;
                    });
                    a.k.a.azsx('startAdTracking', function (b) {
                        d(b);
                        g = new A().getTime();
                        c || (c = new A().getTime() + 'ha', a.k.a.azsx('view:tick', function () {
                            a.ai.d();
                        }, { id: c }));
                    });
                    a.k.a.azsx('adEntersView', function (b) {
                        a.ai.e(b);
                    }, { once: !0 });
                    a.k.a.azsx('adKilled', function (a) {
                        a && !a.ep && (delete a.elementsFromPointCache, delete b[a.zr]);
                    });
                }(u));
                (function (a) {
                    a.an = {};
                    var k, d;
                    a.an.g = function (f) {
                        if (d)
                            f();
                        else if (k.googletag && k.googletag.apiReady && k.googletag.pubads())
                            d = k.googletag.pubads(), f();
                        else {
                            k.googletag = k.googletag || {};
                            k.googletag.cmd = k.googletag.cmd || [];
                            var g = a.l.l(f), c = function () {
                                    var a = k.googletag;
                                    (d = a && a.apiReady && a.pubads()) && g();
                                };
                            a.k.a.azsx('adKilled', function () {
                                var b = k.googletag;
                                if (b && a.a['do'](b.apiReady) && b.cmd && a.a.f(b.cmd)) {
                                    var d = b.cmd.indexOf(c);
                                    -1 !== d && b.cmd.splice(d, 1);
                                }
                            });
                            k.googletag.cmd.push(c);
                        }
                    };
                    a.an.l = function () {
                        if (d && 'function' !== typeof d.getSlots)
                            return !1;
                        try {
                            return d.getSlots();
                        } catch (a) {
                            return [];
                        }
                    };
                    a.an.a = function () {
                        if (d && 'function' === typeof d.getSlotIdMap)
                            return d.getSlotIdMap();
                    };
                    a.an.m = function (a) {
                        return d.getTargeting(a);
                    };
                    a.an.n = function () {
                        if ('function' !== typeof d.getTargetingKeys || 'function' !== typeof d.getTargeting)
                            return !1;
                        var f = d.getTargetingKeys(), g = {};
                        a.a.forEach(f, function (a) {
                            g[a] = d.getTargeting(a);
                        });
                        return g;
                    };
                    a.an.o = function (a, g) {
                        if ('function' !== typeof d.setTargeting)
                            return !1;
                        d.setTargeting(a, g);
                        return !0;
                    };
                    a.an.p = function (a) {
                        if ('function' !== typeof d.clearTargeting)
                            return !1;
                        d.clearTargeting(a);
                    };
                    a.an.q = function (a) {
                        if (a && 'function' === typeof a.getTargetingKeys)
                            return a.getTargetingKeys();
                    };
                    a.an.r = function (a, d) {
                        return a && 'function' === typeof a.getTargeting && d ? a.getTargeting(d) : !1;
                    };
                    a.an.s = function (d) {
                        var g = {}, c = a.an.q(d);
                        a.a.f(c) && a.a.forEach(c, function (b) {
                            g[b] = a.an.r(d, b);
                        });
                        return g;
                    };
                    a.an.t = function (d) {
                        if (d) {
                            d = a.an.s(d);
                            var g = a.an.n();
                            a.a.forEach(d, function (a, b) {
                                g[b] = a;
                            });
                            return g;
                        }
                    };
                    a.an.j = function (a, d, c) {
                        if (!(a && d && c && 'function' === typeof a.setTargeting))
                            return !1;
                        a.setTargeting(d, c);
                    };
                    a.an.u = function (a, d) {
                        if (!a || 'function' !== typeof a.clearTargeting)
                            return !1;
                        a.clearTargeting(d);
                    };
                    a.an.v = function (f, g) {
                        if (f && g && d && 'function' === typeof d.addEventListener) {
                            var c = a.l.l(g);
                            d.addEventListener(f, c);
                        }
                    };
                    a.an.d = function (a) {
                        if (a && 'function' === typeof a.getSlotElementId)
                            return a.getSlotElementId();
                    };
                    a.an.f = function (a) {
                        if (a && 'function' === typeof a.getSlotId && (a = a.getSlotId()) && 'function' === typeof a.getId)
                            return a = a.getId(), k.document.getElementById('google_ads_iframe_' + a);
                    };
                    a.an.c = function (a) {
                        if (a && 'function' === typeof a.getAdUnitPath)
                            return a.getAdUnitPath();
                    };
                    a.an.e = function (d) {
                        if (d = a.an.c(d)) {
                            d = d && d.split('/');
                            var g = [];
                            a.a.forEach(d, function (a) {
                                0 < a.length && g.push(a);
                            });
                            return g;
                        }
                    };
                    a.an.h = function (d) {
                        var g = [];
                        d && 'function' === typeof d.getSizes && a.a.forEach(d.getSizes(), function (a) {
                            'function' === typeof a.getWidth && 'function' === typeof a.getHeight && g.push([
                                a.getWidth(),
                                a.getHeight()
                            ]);
                        });
                        return g;
                    };
                    a.an.w = function () {
                        var a = k && k.googletag && k.googletag.sizeMapping;
                        if (a)
                            return a();
                    };
                    a.an.b = function () {
                        if (d) {
                            var f, g = document.body;
                            a.a.forEach(3, function () {
                                f = g;
                                g = a.g.b(g);
                                if (!g)
                                    return !1;
                            });
                            var c = a.an.x(f);
                            if ('string' === typeof c) {
                                var b = d.getSlotIdMap(), e;
                                for (e in b)
                                    if (e && 'string' === typeof e && e === c)
                                        return b[e];
                            }
                        }
                    };
                    a.an.x = function (a) {
                        return a && a.id && -1 < a.id.indexOf('google_ads_iframe') ? a.id.replace(/google_ads_iframe_?/, '') : null;
                    };
                    a.an.i = function () {
                        return k;
                    };
                    a.an.k = function (a, g) {
                        if (d && 'function' !== typeof d.refresh)
                            return !1;
                        d.refresh(a, g);
                    };
                    (function () {
                        k = window;
                        a.an.g(function () {
                            return !0;
                        });
                    }());
                }(u));
                (function (a) {
                    function k() {
                        if (!q && t !== h.LOADING) {
                            q = !0;
                            a.az.a.allData = new A().getTime();
                            var b = window.moatYieldReady;
                            'function' === typeof b && a.l.l(b)();
                        }
                    }
                    function d(b) {
                        var c;
                        c = f(b) ? p.c : p.b;
                        a.an.g(function () {
                            a.an.o(l.d, c);
                            a.an.o(l.e, c);
                        });
                    }
                    function f(a) {
                        return 'object' === typeof a && !1 !== a._pbd;
                    }
                    function g() {
                        function b(a) {
                            g && console.log('>>>MOAT YIELD INTELLIGENCE/' + a);
                        }
                        function c(b, d) {
                            return a.a.cj(function (c) {
                                return (c = a.an.r(b, c)) && c.length && 1 <= c.length ? c[0] : '';
                            }, d).join('|');
                        }
                        function d(g) {
                            var h, k, m;
                            if (!t)
                                return b('setMoatTargetingForSlot: No Moat API response for slot level data, not setting targeting.'), a.an.j(g, l.d, p.d), a.an.j(g, l.e, p.d), !1;
                            if (!f(t))
                                return b('setMoatTargetingForSlot: No historical slot data available, not setting targeting.'), a.an.j(g, l.d, p.e), a.an.j(g, l.e, p.e), !1;
                            if (!g || 'function' !== typeof g.getSlotElementId)
                                return b('setMoatTargetingForSlot: Slot is missing, not setting targeting.'), !1;
                            h = g.getSlotElementId();
                            if (a.a.f('div_id'))
                                m = c(g, 'div_id');
                            else {
                                k = a.an.r(g, 'div_id');
                                if (!k)
                                    return b('setMoatTargetingForSlot: slotId ' + h + '; Failed to get div_id targeting array, not setting targeting.'), !1;
                                m = k[0];
                                if ('undefined' === typeof m)
                                    return b('setMoatTargetingForSlot: slotId ' + h + '; No targeting data set for div_id, not setting targeting.'), !1;
                            }
                            k = t[m] && t[m][e];
                            if (!k)
                                return b('setMoatTargetingForSlot: slotId ' + h + '; No historical data found for div_id of ' + m + ', not setting targeting.'), a.an.j(g, l.d, p.f), a.an.j(g, l.e, p.f), !1;
                            for (var q in k)
                                if (a.a.cy(k, q)) {
                                    var r = k[q];
                                    if (a.a.db(r)) {
                                        b('setMoatTargetingForSlot: slotId ' + h + '; Setting ' + q + ' value of ' + r + '.');
                                        m = parseInt(r);
                                        r = r.toString();
                                        if ('number' === typeof m && 0 === m % 10 && 10 < m && 100 >= m)
                                            for (r = [r], m = m / 10 - 1; 0 < m; m--)
                                                r.push((10 * m).toString());
                                        a.an.j(g, q, r);
                                    }
                                }
                        }
                        var e, g = !1, h, k, q, t;
                        e = a.c.db ? 'Mobile' : 'Desktop';
                        this.slotDataAvailable = function () {
                            return f(t) ? !!t : !1;
                        };
                        this.pageDataAvailable = function () {
                            return !1;
                        };
                        this.safetyDataAvailable = function () {
                            return !1;
                        };
                        this.enableLogging = function () {
                            return g = !0;
                        };
                        this.disableLogging = function () {
                            g = !1;
                            return !0;
                        };
                        this.setMoatTargetingForSlot = function (b) {
                            b = a.a.df([b], d);
                            a.an.g(b);
                        };
                        this.setMoatTargetingForAllSlots = function () {
                            a.an.g(function () {
                                var c = a.an.l();
                                if (!c)
                                    return b('setMoatTargetingForAllSlots: Failed to get slots from GPT, not setting targeting.'), !1;
                                a.a.forEach(c, function (a) {
                                    d(a);
                                }, this);
                            });
                        };
                        this.getMoatTargetingForSlot = function (d) {
                            var f, g;
                            switch (typeof d) {
                            case 'string':
                                var m = a.an.l();
                                if (!a.a.f(m)) {
                                    b('getMoatTargetingForSlot: No valid slot identifier provided, exiting.');
                                    return;
                                }
                                a.a.forEach(m, function (a) {
                                    if ('function' === typeof a.getSlotElementId && a.getSlotElementId() === d)
                                        return g = a, !1;
                                });
                                break;
                            case 'object':
                                if ('function' !== typeof d.getSlotElementId) {
                                    b('getMoatTargetingForSlot: No valid slot identifier provided, exiting.');
                                    return;
                                }
                                g = d;
                                g.getSlotElementId();
                                break;
                            default:
                                b('getMoatTargetingForSlot: No valid slot identifier provided, exiting.');
                                return;
                            }
                            'object' === typeof g && 'function' === typeof g.getTargeting ? a.a.f('div_id') ? f = c(g, 'div_id') : (m = a.an.r(g, 'div_id')) && m.length && 1 <= m.length && (f = m[0]) : b('getMoatTargetingForSlot: Failed to get slot targeting, GPT slot object is invalid.');
                            'string' !== typeof f && (f = '');
                            f = t && t[f] && t[f][e] || {};
                            f[l.b] = h;
                            f[l.c] = k;
                            f[l.a] = q;
                            return f;
                        };
                        this.getMoatTargetingForPage = function () {
                            var a = {};
                            a[l.b] = h;
                            a[l.c] = k;
                            a[l.a] = q;
                            return a;
                        };
                        this.__A = function (a, b) {
                            h = a;
                            k = b;
                        };
                        this.__B = function (a) {
                            q = a;
                        };
                        this.__C = function (a) {
                            t = a;
                        };
                    }
                    a.az = {};
                    var c = w.floor(w.random() * w.pow(10, 12)), b = a.a.ao(), e = a.a.am();
                    a.az.a = {
                        wrapper: window.moatHeaderInitTime || a.c.bj,
                        apiReady: null,
                        nadoData: null,
                        allData: null
                    };
                    a.az.b = {
                        rendered: 0,
                        slotTargetingLoaded: 0,
                        slotTargetingSet: 0,
                        pageDataTargetingSet: 0,
                        safetyTargetingSet: 0,
                        emptySlot: 0
                    };
                    var h = {
                            LOADING: '0',
                            LOADED: '1'
                        }, l = {
                            a: 'm_data',
                            b: 'm_safety',
                            c: 'm_categories',
                            d: 'm_mv',
                            e: 'm_gv'
                        }, p = a.c.em, t = h.LOADING, q = !1;
                    a.az.c = function () {
                        function b(a, c) {
                            var d = 'safe' === c ? 'moat_safe' : 'moat_unsafe';
                            a && -1 !== a.indexOf('moat_unsure') ? (a.splice(a.indexOf('moat_unsure'), 1), a.push(d)) : 0 === a.length && a.push(d);
                            return a;
                        }
                        function c(b) {
                            if (!b || !a.a.f(b))
                                return b;
                            var d = 'gv_adult gv_arms gv_crime gv_death_injury gv_download gv_drugs gv_hatespeech gv_military gv_obscenity gv_terrorism gv_tobacco moat_safe moat_unsafe moat_sensitive'.split(' ');
                            return a.a.filter(b, function (a) {
                                return a && -1 !== d.indexOf(a);
                            });
                        }
                        var e = new g();
                        window.moatPrebidApi = e;
                        k();
                        a.az.a.apiReady = new A().getTime();
                        a.ak.c('nado-all', function (f) {
                            var g, p, q;
                            if ('object' !== typeof f)
                                return !1;
                            q = '0';
                            f && 'n' in f && (q = '1');
                            a.an.g(function () {
                                a.an.o(l.a, q);
                            });
                            e.pageDataAvailable = function () {
                                return !0;
                            };
                            e.__B(q);
                            var r = a.a.dq(new RegExp('.*callback=' + f.callback + '.*'));
                            (r = a.a.dp(r)) && r.responseEnd && f.h && (a.az.a.nadoResponseEnd = r.responseEnd, a.az.a.nadoResponseExecution = w.round(f.h));
                            g = a.a.aw(f);
                            f.c && a.a.f(f.c) && (p = f.c);
                            g && a.an.g(function () {
                                a.an.o(l.b, g);
                            });
                            p && (p = c(p), p = b(p, g), a.an.g(function () {
                                a.an.o(l.c, p);
                            }));
                            e.safetyDataAvailable = function () {
                                return !0;
                            };
                            e.__A(g, p);
                            f = f.yi;
                            d(f);
                            e.__C(f);
                            a.az.a.nadoData = new A().getTime();
                            t = h.LOADED;
                            k();
                        });
                    };
                    a.az.d = function () {
                        var b = a.a.df([
                            'slotRenderEnded',
                            function (b) {
                                if ('undefined' !== typeof b && 'undefined' !== typeof b.slot) {
                                    var c = window.moatPrebidApi, d = b.slot;
                                    if (!c)
                                        return !1;
                                    var e = {
                                        slotTargetingLoaded: !1,
                                        slotTargetingSet: !1,
                                        pageDataTargetingSet: !1,
                                        safetyTargetingSet: !1,
                                        emptySlot: !1
                                    };
                                    e.slotTargetingLoaded = c.slotDataAvailable();
                                    'undefined' !== typeof a.an.r(d, l.d)[0] && (e.slotTargetingSet = !0);
                                    b.isEmpty && (e.emptySlot = !0);
                                    'undefined' !== typeof a.an.m(l.a)[0] && (e.pageDataTargetingSet = !0);
                                    'undefined' !== typeof a.an.m(l.b)[0] && (e.safetyTargetingSet = !0);
                                    a.az.b.rendered++;
                                    a.a.forEach(e, function (b, c) {
                                        !0 === b && a.az.b[c]++;
                                    });
                                }
                            }
                        ], a.an.v);
                        a.an.g(b);
                    };
                    a.az.e = function (d, f, g) {
                        g = {};
                        g.e = d;
                        g.t = a.c.bj;
                        g.de = c;
                        g.d = 'REUTERS_HEADER1:' + (a.c.db ? 'Mobile' : 'Desktop') + ':-:-';
                        g.i = 'YIELD_INTELLIGENCE_INTERNAL1';
                        g.sgs = 5;
                        g.ar = '29ad59d-clean';
                        g.iw = '31d6965';
                        43 === d && 'undefined' !== typeof f && (d = f.getSlotElementId(), g.zMoatDfpSlotId = d || '-');
                        g.zMoatRendered = a.az.b.rendered;
                        g.zMoatSlotTargetingLoaded = a.az.b.slotTargetingLoaded;
                        g.zMoatSlotTargetingSet = a.az.b.slotTargetingSet;
                        g.zMoatPageDataTargetingSet = a.az.b.pageDataTargetingSet;
                        g.zMoatSafetyTargetingSet = a.az.b.safetyTargetingSet;
                        g.zMoatEmptySlot = a.az.b.emptySlot;
                        f = a.az.a.wrapper;
                        var h = a.az.a.nadoData;
                        d = a.az.a.allData;
                        g.zMoatNadoDataLoadTime = h && h - f || 'Not Loaded';
                        g.zMoatAllDataLoadTime = d && d - f || 'Not Loaded';
                        a.az.a.nadoResponseEnd && a.az.a.nadoResponseExecution && (g.zMoatNL = a.az.a.nadoResponseExecution - a.az.a.nadoResponseEnd);
                        g.bo = b;
                        g.bd = e;
                        g.ac = 1;
                        g.bq = a.c.n;
                        g.f = Number(!ka);
                        (f = window.moatPrebidApi) && 'function' === typeof f.slotDataAvailable && (g.zn = f.slotDataAvailable() ? 1 : 0);
                        d = d && d - a.c.bj;
                        a.a.db(d) && (g['if'] = d);
                        d = a.a.cu(g, !0);
                        d += '&na=' + a.a.cw(d, g.i);
                        r.yh.yi(d + '&cs=0', W, null, !0);
                    };
                    (function () {
                        a.an.g(function () {
                            a.a.forEach(l, function (b, c) {
                                a.an.o(b, p.a);
                            });
                        });
                    }());
                    var u = a.f.r(!0);
                    u.url = a.c.ba;
                    u.pcode = 'reutersheader194883552024';
                    u = a.a.cu(u, !0);
                    a.ak.a('nado-all', 'MoatNadoAllJsonpRequest', 'https://mb.moatads.com/yi/v2?' + u);
                }(u));
                (function (a) {
                    function k(c, b) {
                        var d = c.slot, f = 'function' === typeof d.getAdUnitPath && d.getAdUnitPath(), g = a.ap.c(a.a.cc(), b);
                        g || (g = {}, g._AD_FORMAT = b, a.ap.f(g));
                        g.trackedFromDfpHeaderTag = !0;
                        g.dfpAdId = d.getSlotElementId();
                        g.slotMappingId = 'function' === typeof d.getSlotId && d.getSlotId().getId();
                        g.moatClientLevel1 = c.advertiserId || '';
                        g.moatClientLevel2 = c.campaignId || '';
                        g.moatClientLevel3 = c.lineItemId || c.sourceAgnosticLineItemId || '';
                        g.moatClientLevel4 = c.creativeId || c.sourceAgnosticCreativeId || '';
                        a.a.forEach([
                            'moatClientLevel1',
                            'moatClientLevel2',
                            'moatClientLevel3',
                            'moatClientLevel4'
                        ], function (b) {
                            a.a.db(g[b]) && (g[b] = g[b].toString());
                        });
                        g.dfpHeaderSlots || (g.dfpHeaderSlots = {});
                        var k = [
                            'type',
                            'div_id'
                        ];
                        k && 0 < k.length && a.a.forEach(k, function (b) {
                            var c = a.an.r(d, b);
                            c && a.a.f(c) && 0 < c.length ? g.dfpHeaderSlots['zMoat' + b] = c : g.dfpHeaderSlots['zMoat' + b] = '-';
                        });
                        'string' === typeof f && (k = '/' == f[0] ? 2 : 1, f = f.split('/').slice(k), k = f[f.length - 1], g.moatClientSlicer1 = f[0] || '', g.moatClientSlicer2 = k || '', a.a.forEach(f, function (a, b) {
                            g['zMoatAdUnit' + (b + 1)] = a;
                        }));
                        return g;
                    }
                    function d(a, b) {
                        var d = a && a[b];
                        return d && d.toString ? d.toString() : '';
                    }
                    function f(c, b, e) {
                        c = c || {};
                        c = [
                            {
                                whitelistValues: [
                                    '8200574565762874',
                                    '20065632'
                                ],
                                id: d(c, 'advertiserId'),
                                zmoat: 'zMoatDFPAdIds'
                            },
                            {
                                id: d(c, 'sourceAgnosticLineItemId'),
                                zmoat: 'zMoatDFPLineItemIds'
                            },
                            {
                                id: d(c, 'campaignId'),
                                zmoat: 'zMoatDFPOrderIds'
                            }
                        ];
                        if (a.a.some(c, function (c) {
                                if (!c.id)
                                    return !1;
                                var d = b[c.zmoat] && b[c.zmoat].split(':') || [];
                                c.whitelistValues && c.whitelistValues.length && (d = d.concat(c.whitelistValues));
                                return a.a.ax(d, c.id);
                            }) || 'html5' === b._AD_FORMAT)
                            return !0;
                    }
                    function g(c) {
                        var b = c.slot;
                        if (b && !c.isEmpty) {
                            var d = 'function' === typeof b.getHtml && b.getHtml();
                            d = d && 'string' === typeof d ? 0 <= d.search(/banner_html_inpage_rendering_lib.*\.js/) : !1;
                            d = k(c, d ? 'html5' : 'adx');
                            if (f(c, d, b) && (a.y.b(17, d), c = (c = a.an.d(b)) && document.getElementById(c))) {
                                var b = (b = c.querySelector('iframe')) && b.contentWindow, g;
                                try {
                                    g = !a.g.d(b) && b.document && b.document.body && b.document.body.children && 0 < b.document.body.children.length && b.document.body;
                                } catch (l) {
                                }
                                g || (g = c);
                                a.v.c(g, d, void 0, void 0, void 0, b);
                            }
                        }
                    }
                    a.am = {};
                    a.am.b = function () {
                        a.an.g(function () {
                            a.an.v('slotRenderEnded', g);
                        });
                    };
                    a.am.a = function (c) {
                        var b = a.a.df([c], function (b) {
                            a.ac.g(b);
                        });
                        a.l.c(c.WINDOW, 'unload', b, 'dfphead-unload');
                    };
                    a.k.a.azsx('adKilled', function (c) {
                        c && !c.ep && a.l.d(c.WINDOW, 'unload', null, 'dfphead-unload');
                    });
                }(u));
                (function (a) {
                    function k(c) {
                        c && (a.c.ax.b || (a.c.ax.b = !0, r.dcsx && r.dcsx.ynds(window, 'deviceorientation', 'deviceorientation-' + a.c.ax.a, 'deviceorientationFn' + a.c.ax.a)), h || (h = !0, r.swde.azsx('deviceorientation-' + a.c.ax.a, f)), b.hasOwnProperty(c.zr) || (b[c.zr] = new g()));
                    }
                    function d(a) {
                        a && delete b[a.zr];
                    }
                    function f(a) {
                        var c = A.now(), d = !1;
                        200 < c - e && (e = c, d = !0);
                        for (var f in B)
                            B.hasOwnProperty(f) && b.hasOwnProperty(f) && (c = b[f], 1500 > c.eventsCount && (c.eventsCount += 1, d && c.handleOrientationEvent(a)));
                    }
                    function g() {
                        this.validEventsHandledCount = this.eventsHandledCount = this.eventsCount = 0;
                        this.alpha = new c(0, 360);
                        this.beta = new c(-180, 180);
                        this.gamma = new c(-90, 90);
                    }
                    function c(a, b) {
                        this.minExpectedVal = a;
                        this.maxExpectedVal = b;
                        this.normalizedMax = w.abs(this.minExpectedVal) + this.maxExpectedVal;
                        this.rangeRight = this.rangeLeft = this.origin = null;
                    }
                    a.ar = {};
                    var b = {}, e = 0, h = !1;
                    g.prototype.isValidEvent = function (a) {
                        return !a.alpha && 0 !== a.alpha || !a.beta && 0 !== a.beta || !a.beta && 0 !== a.beta || 0 === a.alpha && 0 === a.beta && 0 == a.gamma ? !1 : !0;
                    };
                    g.prototype.handleOrientationEvent = function (a) {
                        this.eventsHandledCount += 1;
                        this.isValidEvent(a) && (this.validEventsHandledCount += 1, this.alpha.addValue(a.alpha), this.beta.addValue(a.beta), this.gamma.addValue(a.gamma));
                    };
                    c.prototype.isOutsideRange = function (a) {
                        return this.rangeLeft > this.rangeRight ? this.rangeLeft > a && a > this.rangeRight : a < this.rangeLeft || a > this.rangeRight;
                    };
                    c.prototype.extendRange = function (a) {
                        this.isOutsideRange(a) && ((a < this.rangeLeft ? this.rangeLeft - a : this.rangeLeft + this.normalizedMax - a) <= (a > this.rangeRight ? a - this.rangeRight : this.normalizedMax - this.rangeRight + a) ? this.rangeLeft = a : this.rangeRight = a);
                    };
                    c.prototype.addValue = function (a) {
                        var b = a + w.abs(this.minExpectedVal);
                        null === this.origin ? (this.origin = a.toFixed(3), this.rangeRight = this.rangeLeft = b) : this.extendRange(b);
                    };
                    c.prototype.getRangeLength = function () {
                        return null === this.origin ? -1 : this.rangeRight >= this.rangeLeft ? (this.rangeRight - this.rangeLeft).toFixed(3) : (this.normalizedMax - this.rangeLeft + this.rangeRight).toFixed(3);
                    };
                    a.ar.a = function (a) {
                        var c = {};
                        b[a] && (a = b[a], c = {
                            oe: [
                                a.eventsCount,
                                a.eventsHandledCount,
                                a.validEventsHandledCount,
                                a.alpha.origin ? a.alpha.origin : 'null',
                                a.alpha.getRangeLength(),
                                a.beta.origin ? a.beta.origin : 'null',
                                a.beta.getRangeLength(),
                                a.gamma.origin ? a.gamma.origin : 'null',
                                a.gamma.getRangeLength()
                            ].join(':')
                        });
                        return c;
                    };
                    a.c.e.DeviceOrientationEvent && (a.k.a.azsx('adInitialized', k), a.k.a.azsx('adKilled', d), a.k.a.azsx('allLocalAdsKilled', function () {
                        r && r.dcsx && r.dcsx.engn && r.dcsx.engn({ listenerName: 'deviceorientationFn' + a.c.ax.a });
                        r.swde.sxaz('deviceorientation-' + a.c.ax.a, { callback: f });
                        b = {};
                        h = a.c.ax.b = !1;
                    }));
                }(u));
                (function (a) {
                    a.ba = {};
                    a.ba.a = !1;
                    a.ba.b = function (k) {
                        k && k.zMoatENV && 'x' === k.zMoatENV && (a.ba.a = !0);
                    };
                }(u));
                (function (a) {
                    function k() {
                        a.l.l(function () {
                            var b = document.createElement('iframe');
                            b.src = 'https://z.moatads.com/hd09824092/iframe.html#header=1';
                            b.style.display = 'none';
                            b.style.width = '0px';
                            b.style.height = '0px';
                            b.width = '0';
                            b.height = '0';
                            b.setAttribute('name', 'reutersheader194883552024_MOAT_IFRAME');
                            a.a.cl(b, window.document.documentElement);
                        })();
                    }
                    function d(b) {
                        if (b && 'string' === typeof b) {
                            var c = a.f.a([
                                19,
                                4,
                                18,
                                19,
                                53
                            ]);
                            -1 !== 'REUTERS_HEADER1'.indexOf(c) && (b = a.a.dy(b, c));
                            return b;
                        }
                    }
                    function f(f) {
                        if (f && f.msgData && 'string' === typeof f.msgData.data) {
                            var g = f.msgData.data.split('@@@');
                            if (2 === g.length) {
                                var g = {
                                        className: decodeURIComponent(g[0]),
                                        src: decodeURIComponent(g[1]),
                                        parentNode: { innerHTML: '' },
                                        getAttribute: function (a) {
                                            return 'class' === a ? this.className : this[a] || '';
                                        },
                                        trackedFromSlotTag: !0
                                    }, k = a.ap.c(g, 'feather') || {};
                                k.sli = d(k.sli);
                                k._AD_FORMAT = 'feather';
                                a.ba.b(k);
                                if (a.ba.a)
                                    a.ba.a = !1;
                                else {
                                    a.y.b(17, k);
                                    var t = b(f.source);
                                    a.l.k(function () {
                                        var b;
                                        b:
                                            if (t)
                                                for (var d = t.length - 1; 0 <= d; d--) {
                                                    var f = t[d];
                                                    if (f !== f.top) {
                                                        var g = a.g.b(null, f);
                                                        if (g) {
                                                            if (a.a.bt(g)) {
                                                                b = g;
                                                                continue;
                                                            }
                                                            break;
                                                        }
                                                        g = c(f);
                                                        if (a.a.bt(g)) {
                                                            b = g;
                                                            break b;
                                                        }
                                                        break;
                                                    }
                                                }
                                            else
                                                b = void 0;
                                        b ? (k.adFindingMethod = 'moat slot tag', k.trackedFromSlotTag = !0, e(t, k), a.d.f(b, b.nodeName, !1, void 0, k, null), b = !0) : b = !1;
                                        return b;
                                    }, a.v.h, a.v.v, function () {
                                        a.y.b(11, k);
                                    });
                                }
                            }
                        }
                    }
                    function g(c, f) {
                        f = f || {};
                        if (c && c.src && 'string' === typeof c.nodeName) {
                            c.trackedFromSlotTag = !0;
                            var g = a.ap.c(c, 'feather') || {};
                            g.trackedFromSlotTag = !0;
                            g._AD_FORMAT = 'feather';
                            f.altKey && (g.altKey = f.altKey);
                            g.sli = d(f.sli);
                            g.useSlotIkey = f.useSlotIkey;
                            var k = a.a.be(c), k = b(k);
                            e(k, g);
                            a.ba.b(g);
                            if (a.ba.a)
                                a.ba.a = !1;
                            else {
                                a.y.b(17, g);
                                var k = a.a.bh(c), q = a.a.be(c);
                                a.v.c(k, g, null, null, null, q);
                            }
                        }
                    }
                    function c(b) {
                        var c;
                        try {
                            c = b.parent.document;
                        } catch (d) {
                            return null;
                        }
                        return a.g.f(c, b);
                    }
                    function b(b) {
                        if (!b)
                            return !1;
                        var c = a.g.k(b, 25);
                        c.unshift(b);
                        return c;
                    }
                    function e(b, d) {
                        if (!b || !a.a.f(b))
                            return !1;
                        for (var e = b.length - 1; 0 <= e; e--) {
                            var f = b[e];
                            if (f.top !== f && (f = a.g.b(null, f) || c(f), f = a.an.x(f), 'string' === typeof f))
                                return d && (d.slotMappingId = f), f;
                        }
                        return !1;
                    }
                    a.bb = {};
                    a.bb.a = function () {
                        k();
                        a.aw.l('scriptfoundreutersheader194883552024', a.l.l(f));
                        window.__moatSlotTagLoadedreutersheader194883552024 = a.l.l(g);
                    };
                }(u));
                (function (a) {
                    a.aq = {};
                    a.aq.a = function () {
                        var k = a.g.a(), d = [
                                '-',
                                '-',
                                '-',
                                '-',
                                '-'
                            ];
                        if (!k || !k.performance)
                            return !1;
                        var f = k.performance;
                        if (!f || 'function' !== typeof f.getEntriesByType)
                            return !1;
                        d[0] = k === window.top ? 1 : 0;
                        for (var g = f.getEntriesByType('paint'), c = 0; c < g.length; c++)
                            k = g[c], 'first-paint' === k.name && (d[1] = w.round(k.startTime)), 'first-contentful-paint' === k.name && (d[2] = w.round(k.startTime));
                        f = f.getEntriesByType('navigation');
                        0 < f.length && (k = f[0], 'duration' in k && (d[3] = w.round(k.duration)), 'domInteractive' in k && (d[4] = w.round(k.domInteractive)));
                        return d.join(':');
                    };
                }(u));
                u.k.a.zaxs('modulesReady', r);
                var Ea = u.focus.pageIsVisible();
                u.c.ev = 1 == window.history.length && !Ea && (u.c.c && '' != document.referrer || !u.c.c);
                u.c.j || u.c.al || u.c.dw();
                (u.c.j && u.c.eg() || 'dummy.url' === u.a.ao()) && u.c.dw();
                var D = 'moatFoundREUTERS_HEADER1', M = '__moat__REUTERS_HEADER1';
                u.c.am().isInApp || u.al.f();
                var L = u.a.cc();
                W = 'https://px.moatads.com';
                u.au.a(wa);
                var Fa = function () {
                    r.zs && r.dcsx && (r.dcsx.engn({ listenerName: 'unloadFn' + u.c.ax.a }), r.dcsx.engn({ listenerName: 'beforeunloadFn' + u.c.ax.a }));
                    ja || (ja = !0, u.d.b());
                };
                u.a.ao();
                u.az.e(17);
                u.p.i(u.c.ax.a, u.c.az);
                u.k.a.azsx('trackingReady', va, { once: !0 });
                u.k.a.zaxs('trackingReady');
            }(Date, Math));
        } catch (A) {
            var ct = new Date().getTime();
            window['Moat#ETS'] || (window['Moat#ETS'] = ct);
            window['Moat#EMC'] || (window['Moat#EMC'] = 0);
            var et = ct - window['Moat#ETS'], hourElapsed = 3600000 <= et, msg = A.name + ' in closure (global): ' + A.message + ', stack=' + A.stack;
            if (!hourElapsed && 10 > window['Moat#EMC']) {
                window['Moat#EMC']++;
                try {
                    var pixelDomain = 'px.moatads.com', isDomless = 'undefined' !== typeof omidNative && ('undefined' === typeof Image || Image && Image._MoatProxyOf), documentReferrer = isDomless ? '' : document.referrer, isBeta = !1, viewHash = 'undefined' === typeof AD_VIEW_HASH ? isBeta ? 'REUTERS_HEADER1_BETA' : 'REUTERS_HEADER1' : AD_VIEW_HASH, tagType = 'undefined' !== typeof Moat && Moat.c && Moat.c.n ? Moat.c.n : '', pxSrc = 'https://' + pixelDomain + '/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=' + escape(viewHash) + '&ac=1&k=' + escape(msg) + '&ar=' + escape('29ad59d-clean') + '&iw=' + escape('31d6965') + '&bq=' + escape(tagType) + '&j=' + escape(documentReferrer) + '&cs=' + new Date().getTime();
                    if (isDomless)
                        omidNative.sendUrl(pxSrc);
                    else {
                        var moat_px = new Image(1, 1);
                        moat_px.src = pxSrc;
                    }
                } catch (w) {
                }
            } else if (hourElapsed) {
                window['Moat#EMC'] = 1;
                window['Moat#ETS'] = ct;
                try {
                    pixelDomain = 'px.moatads.com', documentReferrer = (isDomless = 'undefined' !== typeof omidNative && ('undefined' === typeof Image || Image && Image._MoatProxyOf)) ? '' : document.referrer, isBeta = !1, viewHash = 'undefined' === typeof AD_VIEW_HASH ? isBeta ? 'REUTERS_HEADER1_BETA' : 'REUTERS_HEADER1' : AD_VIEW_HASH, tagType = 'undefined' !== typeof Moat && Moat.c && Moat.c.n ? Moat.c.n : '', pxSrc = 'https://' + pixelDomain + '/pixel.gif?e=24&d=data%3Adata%3Adata%3Adata&i=' + escape(viewHash) + '&ac=1&k=' + escape(msg) + '&ar=' + escape('29ad59d-clean') + '&iw=' + escape('31d6965') + '&bq=' + escape(tagType) + '&j=' + escape(documentReferrer) + '&cs=' + new Date().getTime(), isDomless ? omidNative.sendUrl(pxSrc) : (moat_px = new Image(1, 1), moat_px.src = pxSrc);
                } catch (w) {
                }
            }
        }
        ;
    }())
}