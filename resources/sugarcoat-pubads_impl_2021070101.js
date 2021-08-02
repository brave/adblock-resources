{
    const $___mock_6311a65d4da22df7 = {};
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
    })($___mock_6311a65d4da22df7);
    const $___mock_5de28d8956bfc0f9 = {};
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
    })($___mock_5de28d8956bfc0f9);
    (function () {
        (function (_) {
            var aa, ca, ba, ea, fa, ha, la, na, pa, sa, ma, ra, ta, va, wa, ya, za, Ba, Ea, Ga, Ia, Fa, La, Ma, Oa, Qa, Ra, Ta, Va, Xa, Ya, $a, ab, bb, eb, fb, ib, kb, qb, rb, tb, ub, wb, Gb, Hb, Ib, Lb, Mb, Nb, Ob, Qb, Pb, Tb, Vb, Ub, ic, w, nc, kc, rc, sc, tc, vc, xc, zc, Ac, Pc, Sc, bd, jd, md, od, td, vd, yd, Cd, Fd, Hd, Id, Jd, Nd, Pd, Rd, be, he, je, qe, ve, we, xe, ze, Be, Ce, Ee, Fe, He, Ie, Je, Le, Me, Ne, Pe, Qe, Se, Ue, We, Ye, Ve, df, hf, nf, sf, gf, Hf, If, Mf, Nf, Pf, Sf, Tf, Uf, Vf, Wf, Xf, Zf, dg, fg, hg, ig, jg, kg, mg, lg, rg, sg, vg, xg, yg, Dg, Gg, Ig, Kg, Pg, Qg, Rg, Tg, Ug, Vg, Wg, bh, gh, jh, mh, ph, rh, vh, zh, Bh, Eh, Ih, Jh, Th, L, Uh, Vh, Wh, Xh, Yh, D, Zh, $h, ai, bi, ag, ci, di, ei, ii, ji, ki, zi, Ai, qa, ka, Bi, Ci, Di, Ei, Lf;
            ca = function (a, b) {
                b = ba(a, b);
                return 0 > b ? null : 'string' === typeof a ? a.charAt(b) : a[b];
            };
            ba = function (a, b) {
                for (var c = a.length, d = 'string' === typeof a ? a.split('') : a, e = 0; e < c; e++)
                    if (e in d && b.call(void 0, d[e], e, a))
                        return e;
                return -1;
            };
            ea = function (a, b) {
                b = _.da(a, b);
                var c;
                (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
                return c;
            };
            fa = function (a) {
                var b = a.length;
                if (0 < b) {
                    for (var c = Array(b), d = 0; d < b; d++)
                        c[d] = a[d];
                    return c;
                }
                return [];
            };
            ha = function (a, b, c) {
                return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
            };
            la = function (a) {
                for (var b = 0, c = 0, d = {}; c < a.length;) {
                    var e = a[c++], f = _.ia(e) ? 'o' + ka(e) : (typeof e).charAt(0) + e;
                    Object.prototype.hasOwnProperty.call(d, f) || (d[f] = !0, a[b++] = e);
                }
                a.length = b;
            };
            na = function (a, b) {
                a.sort(b || ma);
            };
            pa = function (a) {
                for (var b = oa, c = Array(a.length), d = 0; d < a.length; d++)
                    c[d] = {
                        index: d,
                        value: a[d]
                    };
                var e = b || ma;
                na(c, function (f, g) {
                    return e(f.value, g.value) || f.index - g.index;
                });
                for (b = 0; b < a.length; b++)
                    a[b] = c[b].value;
            };
            sa = function (a, b) {
                if (!qa(a) || !qa(b) || a.length != b.length)
                    return !1;
                for (var c = a.length, d = ra, e = 0; e < c; e++)
                    if (!d(a[e], b[e]))
                        return !1;
                return !0;
            };
            ma = function (a, b) {
                return a > b ? 1 : a < b ? -1 : 0;
            };
            ra = function (a, b) {
                return a === b;
            };
            ta = function (a, b) {
                for (var c = {}, d = 0; d < a.length; d++) {
                    var e = a[d], f = b.call(void 0, e, d, a);
                    void 0 !== f && (c[f] || (c[f] = [])).push(e);
                }
                return c;
            };
            va = function (a) {
                for (var b = [], c = 0; c < arguments.length; c++) {
                    var d = arguments[c];
                    if (Array.isArray(d))
                        for (var e = 0; e < d.length; e += 8192)
                            for (var f = va.apply(null, ha(d, e, e + 8192)), g = 0; g < f.length; g++)
                                b.push(f[g]);
                    else
                        b.push(d);
                }
                return b;
            };
            wa = function (a, b) {
                for (var c in a)
                    b.call(void 0, a[c], c, a);
            };
            ya = function (a, b) {
                return null !== a && b in a;
            };
            za = function (a, b) {
                for (var c in a)
                    if (b.call(void 0, a[c], c, a))
                        return c;
            };
            Ba = function (a, b) {
                for (var c, d, e = 1; e < arguments.length; e++) {
                    d = arguments[e];
                    for (c in d)
                        a[c] = d[c];
                    for (var f = 0; f < Aa.length; f++)
                        c = Aa[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
                }
            };
            Ea = function (a) {
                var b = 0 > a;
                a = Math.abs(a);
                var c = a >>> 0;
                a = Math.floor((a - c) / 4294967296);
                a >>>= 0;
                b && (a = ~a >>> 0, c = (~c >>> 0) + 1, 4294967295 < c && (c = 0, a++, 4294967295 < a && (a = 0)));
                Ca = c;
                Da = a;
            };
            Ga = function (a) {
                return Fa(a, function (b) {
                    return b;
                }, function (b) {
                    return new Uint8Array(b);
                });
            };
            Ia = function (a, b, c) {
                return 'object' === typeof a ? Ha && !Array.isArray(a) && a instanceof Uint8Array ? c(a) : Fa(a, b, c) : b(a);
            };
            Fa = function (a, b, c) {
                if (Array.isArray(a)) {
                    for (var d = Array(a.length), e = 0; e < a.length; e++) {
                        var f = a[e];
                        null != f && (d[e] = Ia(f, b, c));
                    }
                    Array.isArray(a) && a.Bd && Ja(d);
                    return d;
                }
                d = {};
                for (e in a)
                    Object.prototype.hasOwnProperty.call(a, e) && (f = a[e], null != f && (d[e] = Ia(f, b, c)));
                return d;
            };
            La = function (a) {
                return Fa(a, function (b) {
                    return 'number' === typeof b ? isNaN(b) || Infinity === b || -Infinity === b ? String(b) : b : b;
                }, function (b) {
                    return Ka(b);
                });
            };
            Ma = function (a) {
                return null == a || 'string' === typeof a ? a : Ha && a instanceof Uint8Array ? Ka(a) : null;
            };
            Oa = function (a, b) {
                Na = b;
                a = new a(b);
                Na = null;
                return a;
            };
            Qa = function (a) {
                if (a !== _.Pa)
                    throw Error('Bad secret');
            };
            Ra = function () {
                var a = 'undefined' !== typeof window ? window.trustedTypes : void 0;
                return null !== a && void 0 !== a ? a : null;
            };
            Ta = function () {
                var a, b;
                void 0 === Sa && (Sa = null !== (b = null === (a = Ra()) || void 0 === a ? void 0 : a.createPolicy('google#safe', {
                    createHTML: function (c) {
                        return c;
                    },
                    createScript: function (c) {
                        return c;
                    },
                    createScriptURL: function (c) {
                        return c;
                    }
                })) && void 0 !== b ? b : null);
                return Sa;
            };
            Va = function (a) {
                var b, c = null === (b = Ta()) || void 0 === b ? void 0 : b.createHTML(a);
                return new Ua(null !== c && void 0 !== c ? c : a, _.Pa);
            };
            Xa = function (a) {
                var b, c = null === (b = Ta()) || void 0 === b ? void 0 : b.createScript(a);
                return new Wa(null !== c && void 0 !== c ? c : a, _.Pa);
            };
            Ya = function (a) {
                var b;
                if (null === (b = Ra()) || void 0 === b ? 0 : b.isScript(a))
                    return a;
                if (a instanceof Wa)
                    return a.j;
                throw Error('wrong type');
            };
            $a = function (a) {
                var b, c = null === (b = Ta()) || void 0 === b ? void 0 : b.createScriptURL(a);
                return new Za(null !== c && void 0 !== c ? c : a, _.Pa);
            };
            ab = function (a) {
                var b;
                if (null === (b = Ra()) || void 0 === b ? 0 : b.isScriptURL(a))
                    return a;
                if (a instanceof Za)
                    return a.j;
                throw Error('wrong type');
            };
            bb = function (a) {
                var b;
                a = ab(a);
                return (null === (b = Ra()) || void 0 === b ? 0 : b.isScriptURL(a)) ? TrustedScriptURL.prototype.toString.apply(a) : a;
            };
            eb = function (a) {
                return a instanceof cb ? ab(a) : db(a);
            };
            fb = function (a) {
                var b, c = (a.ownerDocument && a.ownerDocument.defaultView || window).document;
                (b = (c = null === (b = c.querySelector) || void 0 === b ? void 0 : b.call(c, 'script[nonce]')) ? c.nonce || c.getAttribute('nonce') || '' : '') && a.setAttribute('nonce', b);
            };
            ib = function (a) {
                return a ? a.passive && hb() ? a : a.capture || !1 : !1;
            };
            kb = function (a) {
                return new _.jb(function (b) {
                    return b.substr(0, a.length + 1).toLowerCase() === a + ':';
                });
            };
            qb = function () {
                var a = _.lb(mb);
                return function () {
                    return pb(window) <= a;
                };
            };
            rb = function (a) {
                return a;
            };
            tb = function (a, b) {
                if (!(b || sb)(a))
                    throw Error(String(a));
            };
            ub = function (a, b) {
                tb(a, b);
                return a;
            };
            wb = function (a, b, c) {
                if (!a) {
                    if (c && 0 < c.length)
                        throw Error('[' + c.map(String).join(',') + ']');
                    throw Error(String(a));
                }
            };
            Gb = function (a, b, c) {
                try {
                    c(function () {
                        var d = new xb();
                        var e = void 0 === e ? window : e;
                        var f = new yb();
                        var g = zb(e);
                        f = Ab(f, 1, g, 0);
                        g = Bb();
                        f = Cb(f, 2, g);
                        e = Ab(f, 3, e.document.URL, '');
                        d = Db(d, 2, e);
                        e = new Eb();
                        e = Fb(e, 1, a);
                        e = Ab(e, 2, b.name, '');
                        e = Ab(e, 3, b.message, '');
                        b.stack && Cb(e, 4, b.stack.split(/\n\s*/));
                        return Db(d, 1, e);
                    });
                } catch (d) {
                }
            };
            Hb = function (a, b, c, d) {
                d = void 0 === d ? !1 : d;
                return function (e) {
                    for (var f = [], g = 0; g < arguments.length; ++g)
                        f[g] = arguments[g];
                    try {
                        return c.apply(this, f);
                    } catch (h) {
                        if (Gb(a, h, b), !d)
                            throw h;
                    }
                };
            };
            Ib = function (a) {
                var b = a.split('/');
                return '/' === a.charAt(0) && 2 <= b.length ? b[1] : '/' !== a.charAt(0) && 1 <= b.length ? b[0] : '';
            };
            Lb = function (a) {
                if (15360 >= a.length)
                    return a;
                var b = a;
                15360 < b.length && (b = b.substring(0, 15352), b = b.replace(/%\w?$/, ''), b = b.replace(/&[^=]*=?$/, ''), b += '&trunc=1');
                Jb(Kb.N(), 9 .toString(), 9, a.length - b.length + 8);
                return b;
            };
            Mb = function (a) {
                var b = a.indexOf('google_preview=', a.lastIndexOf('?')), c = a.indexOf('&', b);
                -1 === c && (c = a.length - 1, --b);
                return a.substring(0, b) + a.substring(c + 1, a.length);
            };
            Nb = function (a, b) {
                b = void 0 === b ? window : b;
                return b.location ? b.URLSearchParams ? (a = b.URLSearchParams ? new URLSearchParams(b.location.search).get(a) : null) && a.length ? a : null : (a = new RegExp('[?&]' + a + '=([^&]*)').exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null;
            };
            Ob = function (a, b) {
                b = void 0 === b ? window : b;
                return !!Nb(a, b);
            };
            Qb = function () {
                return Pb();
            };
            Pb = function () {
                var a = Number('2021070101');
                return 1 > a || Math.floor(a) !== a ? (Rb({ v: '2021070101' }, 'gpt_inv_ver'), '1') : '2021070101';
            };
            Tb = function (a, b) {
                a = { methodId: a };
                b.name && (a.name = b.name);
                b.message && (a.message = b.message.substring(0, 512));
                b.fileName && (a.fileName = b.fileName);
                b.lineNumber && (a.lineNumber = b.lineNumber);
                b.stack && (a.stack = Sb(b.stack, ''));
                return a;
            };
            Vb = function (a, b, c) {
                c = void 0 === c ? !1 : c;
                Ub(a, b);
                if (!c)
                    throw b;
            };
            Ub = function (a, b, c) {
                c = void 0 === c ? Wb : c;
                if (!b.isReported)
                    try {
                        b.isReported = !0;
                        if ('__throw_for_testing' === b.name && _.Xb(148))
                            throw Error('throwing error for testing');
                        var d = Tb(a, b), e = new Yb('gpt_exception');
                        try {
                            Zb(e);
                        } catch (f) {
                        }
                        _.$b(d, function (f, g) {
                            q(e, g, f);
                        });
                        ac(e, c);
                    } catch (f) {
                    }
            };
            ic = function (a, b) {
                bc(b, function () {
                    var c = a();
                    var d = new cc();
                    var e = Pb();
                    d = Ab(d, 1, e, '');
                    e = dc();
                    d = Ab(d, 2, e, 0);
                    e = [].concat(_.ec(_.r(fc, 'keys').call(fc)));
                    d = Cb(d, 3, e);
                    e = gc[0];
                    c.j || (c.j = {});
                    var f = d ? d.za() : d;
                    c.j[4] = d;
                    c = hc(c, 4, e, f);
                    d = _.lb(mb);
                    return Ab(c, 3, d, 0);
                });
            };
            w = function (a, b, c) {
                var d = void 0 === d ? new jc(qb()) : d;
                return kc(a, b, void 0 === c ? !1 : c, _.v(lc), d);
            };
            nc = function (a, b) {
                if (0.1 > Math.random())
                    try {
                        var c = Error();
                        mc('gpt_api_usage', function (d) {
                            q(d, 'methodId', a);
                            q(d, 'args', b);
                            c.stack && q(d, 'stack', Sb(c.stack, c.message));
                            Zb(d);
                        }, { ta: 1 });
                    } catch (d) {
                    }
            };
            kc = function (a, b, c, d, e) {
                c = void 0 === c ? !1 : c;
                d = void 0 === d ? !1 : d;
                e = void 0 === e ? new jc(qb()) : e;
                return _.v(oc) ? function (f) {
                    for (var g = [], h = 0; h < arguments.length; ++h)
                        g[h] = arguments[h];
                    d && nc.call(this, a, g.length);
                    return Hb(a, function (k) {
                        ic(k, e);
                    }, b, c).apply(this, g);
                } : function (f) {
                    for (var g = [], h = 0; h < arguments.length; ++h)
                        g[h] = arguments[h];
                    h = void 0;
                    var k = !1, l = null, m = Kb.N();
                    try {
                        var n = _.v(pc);
                        n && m && (l = m.start(a.toString(), 3));
                        h = b.apply(this, g);
                        k = !0;
                        n && m && m.end(l);
                    } catch (p) {
                        try {
                            k ? Ub(110, p) : Vb.call(this, a, p, c);
                        } catch (t) {
                            if (qc(l), !k && !c)
                                throw p;
                        }
                    }
                    d && nc.call(this, a, g.length);
                    return h;
                };
            };
            rc = function (a, b, c) {
                var d;
                var e = void 0 === e ? new jc(qb()) : e;
                kc(a, b, void 0 === c ? !1 : c, void 0 === d ? !1 : d, e)();
            };
            sc = function (a) {
                a && 'function' == typeof a.wa && a.wa();
            };
            tc = function (a, b) {
                const $___old_9d19744077fe31dc = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                try {
                    if ($___old_9d19744077fe31dc)
                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_6311a65d4da22df7.localStorage));
                    return function () {
                        b = void 0 === b ? window : b;
                        if (x(a, 5))
                            try {
                                return b.localStorage;
                            } catch (c) {
                            }
                        return null;
                    }.apply(this, arguments);
                } finally {
                    if ($___old_9d19744077fe31dc)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_9d19744077fe31dc));
                }
            };
            vc = function (a) {
                return _.v(uc) && !a.navigator.cookieEnabled ? !1 : 'null' !== a.origin;
            };
            xc = function (a, b, c) {
                b = x(b, 5) && vc(c) ? c.document.cookie : null;
                return null === b ? null : new wc({ cookie: b }).get(a) || '';
            };
            zc = function (a, b) {
                return A(this, function d() {
                    var e, f, g;
                    return B(d, function (h) {
                        if (1 == h.j)
                            return e = 0 < b ? a.filter(function (k) {
                                return !k.Ac;
                            }) : a, C(h, D.Promise.all(e.map(function (k) {
                                return k.Ec.promise;
                            })), 2);
                        if (3 != h.j) {
                            if (a.length === e.length)
                                return h.return(0);
                            f = a.filter(function (k) {
                                return k.Ac;
                            });
                            g = _.yc();
                            return C(h, D.Promise.race([
                                D.Promise.all(f.map(function (k) {
                                    return k.Ec.promise;
                                })),
                                new D.Promise(function (k) {
                                    return void setTimeout(k, b);
                                })
                            ]), 3);
                        }
                        return h.return(_.yc() - g);
                    });
                });
            };
            Ac = function (a) {
                var b, c, d, e;
                return {
                    ud: {
                        wrapper: 1,
                        bidder: a.bidder,
                        amount: a.cpm,
                        size: [
                            a.width,
                            a.height
                        ],
                        targetingKeys: _.r(Object, 'keys').call(Object, null !== (b = a.adserverTargeting) && void 0 !== b ? b : {}),
                        ad: null !== (c = a.ad) && void 0 !== c ? c : void 0,
                        adUrl: null !== (d = a.adUrl) && void 0 !== d ? d : void 0,
                        ttlMs: 1000 * (null !== (e = a.ttl) && void 0 !== e ? e : Infinity),
                        responseTimestampMs: a.responseTimestamp,
                        currency: a.currency,
                        mediaType: a.mediaType,
                        auctionId: a.auctionId
                    },
                    adId: a.adId
                };
            };
            Pc = function (a) {
                var b = new Bc(), c = Cc(), d = a.bidder, e = a.wrapper, f = a.amount, g = void 0 === a.currency ? 'USD' : a.currency, h = a.size, k = a.targetingKeys, l = a.ad, m = a.adUrl, n = void 0 === a.ttlMs ? 0 : a.ttlMs, p = a.responseTimestampMs, t = void 0 === a.mediaType ? 'banner' : a.mediaType, u = a.auctionId;
                'number' === typeof p ? E(b, 9, p) : (E(b, 9, Date.now()), void 0 !== p && c.M(Dc('Slot.setClientBid', Ec(a), 'responseTimestampMs', Ec(p))));
                if (1 === e)
                    Fc(b, e);
                else
                    return c.M(Gc('Slot.setClientBid', Ec(e), '1')), null;
                if ('string' === typeof d)
                    Hc(b, d);
                else
                    return c.M(Dc('Slot.setClientBid', Ec(a), 'bidder', Ec(d))), null;
                if ('string' === typeof l)
                    hc(b, 7, Ic[1], l);
                else {
                    if (void 0 !== l)
                        return c.M(Dc('Slot.setClientBid', Ec(a), 'ad', String(l))), null;
                    if ('string' === typeof m)
                        hc(b, 12, Ic[1], m);
                    else if (void 0 !== m)
                        return c.M(Dc('Slot.setClientBid', Ec(a), 'adUrl', String(m))), null;
                }
                if (Jc(h) && Array.isArray(h))
                    Kc(b, Lc(Mc(new Nc(), h[0]), h[1]));
                else
                    return c.M(Dc('Slot.setClientBid', Ec(a), 'size', Ec(h))), null;
                'number' === typeof f ? hc(b, 2, Ic[0], f) : 'string' === typeof f ? hc(b, 3, Ic[0], f) : void 0 !== f && c.M(Dc('Slot.setClientBid', Ec(a), 'amount', Ec(f)));
                'string' === typeof g ? E(b, 4, g) : c.M(Dc('Slot.setClientBid', Ec(a), 'currency', Ec(g)));
                Array.isArray(k) && k.every(function (y) {
                    return 'string' === typeof y;
                }) ? Cb(b, 6, k) : c.M(Dc('Slot.setClientBid', Ec(a), 'targetingKeys', Ec(k)));
                'number' === typeof n ? E(b, 8, n) : c.M(Dc('Slot.setClientBid', Ec(a), 'ttlMs', Ec(n)));
                d = 0;
                if ('string' === typeof t)
                    switch (t) {
                    case 'banner':
                        d = 1;
                        break;
                    case 'native':
                        d = 2;
                        break;
                    case 'video':
                        d = 3;
                        break;
                    default:
                        c.M(Gc('Slot.setClientBid', Ec(t), 'banner,native,video'));
                    }
                else
                    c.M(Dc('Slot.setClientBid', Ec(a), 'mediaType', Ec(t)));
                E(b, 11, d);
                'string' === typeof u && Oc(b, u);
                return b;
            };
            Sc = function (a) {
                return Qc(a, function () {
                    return new Rc(a);
                });
            };
            bd = function (a, b, c, d) {
                var e = Tc(b, a);
                if (!e)
                    return null;
                var f = Uc(e);
                if (!f)
                    return f;
                var g = e === Vc(b, a), h = Wc(function () {
                        var n = g ? Vc(b, a) : e;
                        return n && Xc(n, window) || {};
                    }), k = Yc(c)[0];
                c = !1;
                Array.isArray(k) && (c = d ? g : 0 == f.x && 'center' == h()['text-align']);
                c && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - k[0]) / 2));
                d = function (n) {
                    var p = h();
                    null == (null == p ? void 0 : p.getPropertyValue) ? n = null : (n = p.getPropertyValue(n), n = (n = Zc.exec(n)) ? +n[1] : null);
                    return n;
                };
                if (g) {
                    var l;
                    f.y += Math.round(Math.min(null != (l = d('padding-top')) ? l : 0, e.clientHeight));
                    if (!c) {
                        l = e.clientWidth;
                        var m;
                        f.x += Math.round(Math.min(null != (m = d('padding-left')) ? m : 0, l));
                    }
                }
                return f && $c(e) ? f : new _.ad(-12245933, -12245933);
            };
            jd = function (a, b, c) {
                c = (c = void 0 === c ? null : c) ? tc(c) : null;
                var d = 0;
                try {
                    d |= a != a.top ? 512 : 0, d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
                } catch (g) {
                    d |= 32;
                }
                b = void 0 === b ? !1 : b;
                var e = 0;
                try {
                    e |= cd(a, 2500);
                    if (_.v(dd)) {
                        var f = _.ed(a).clientHeight;
                        e |= f ? 320 > f ? -2147483648 : 0 : 1073741824;
                    }
                    e |= fd(a);
                    b && !_.gd(_.hd(c)) && (e |= 134217728);
                } catch (g) {
                    e |= 32;
                }
                return d | e;
            };
            md = function (a, b, c, d) {
                if (5 !== kd(b))
                    return !1;
                var e = jd(c, '6499' !== Ib(a.getAdUnitPath()), d);
                e && mc('gpt_int_ns', function (f) {
                    q(f, 'nsr', e);
                    Zb(f);
                }, { ta: _.lb(ld) });
                return !!e;
            };
            od = function (a) {
                if (4 === a && _.v(nd))
                    return 11;
                switch (a) {
                case 2:
                    return 2;
                case 3:
                    return 1;
                case 5:
                    return 8;
                default:
                    return null;
                }
            };
            td = function (a) {
                a = od(a);
                if (!a)
                    return null;
                var b = 0;
                if (11 !== a) {
                    b |= _.F != _.F.top ? 512 : 0;
                    var c = _.pd(_.F);
                    c = 26 !== a && 27 !== a && 40 !== a && 10 !== a && c.adCount ? 1 == a || 2 == a ? !(!c.adCount[1] && !c.adCount[2]) : (c = c.adCount[a]) ? 1 <= c : !1 : !1;
                    c && (b |= 64);
                    if (b)
                        return b;
                }
                if (2 === a || 1 === a) {
                    0 === qd() && (b |= 536870912);
                    c = 0;
                    try {
                        c |= _.F != _.F.top ? 512 : 0;
                        var d = Math.min(_.F.screen.width || 0, _.F.screen.height || 0);
                        c |= d ? 320 > d ? 8192 : 0 : 2048;
                        var e;
                        if (e = _.F.navigator) {
                            var f = _.F.navigator.userAgent;
                            e = /Firefox/.test(f) || /Android 2/.test(f) || /iPhone OS [34]_/.test(f) || /Windows Phone (?:OS )?[67]/.test(f);
                        }
                        c |= e ? 1048576 : 0;
                    } catch (g) {
                        c |= 32;
                    }
                    b |= c;
                    d = 0;
                    try {
                        d |= _.rd(_.F) ? 0 : 8, d |= cd(_.F, sd), d |= fd(_.F);
                    } catch (g) {
                        d |= 32;
                    }
                    b |= d;
                } else
                    8 === a ? b |= jd(_.F) : 11 !== a && (b |= 32);
                b || (d = _.pd(_.F), d.adCount = d.adCount || {}, d.adCount[a] = d.adCount[a] + 1 || 1);
                return b;
            };
            vd = function (a) {
                return ud().some(function (b) {
                    return Ib(b.getAdUnitPath()) === a;
                });
            };
            yd = function (a) {
                var b = window, c = !0;
                c = void 0 === c ? !1 : c;
                new D.Promise(function (d, e) {
                    function f() {
                        var h;
                        g.onload = null;
                        g.onerror = null;
                        null === (h = g.parentElement) || void 0 === h ? void 0 : h.removeChild(g);
                    }
                    var g = b.document.createElement('script');
                    g.onload = function () {
                        f();
                        d();
                    };
                    g.onerror = function () {
                        f();
                        e(void 0);
                    };
                    g.type = 'text/javascript';
                    wd(g, a);
                    c && 'complete' !== b.document.readyState ? _.xd(b, 'load', function () {
                        b.document.body.appendChild(g);
                    }) : b.document.body.appendChild(g);
                });
            };
            Cd = function (a) {
                return A(this, function c() {
                    var d, e, f, g, h, k;
                    return B(c, function (l) {
                        switch (l.j) {
                        case 1:
                            return d = 'https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=' + a.j + ('&tv=' + a.l + '&st=') + a.fb, e = void 0, l.H = 2, C(l, zd(d), 4);
                        case 4:
                            e = l.l;
                            Ad(l, 3);
                            break;
                        case 2:
                            Bd(l);
                        case 3:
                            if (!e)
                                return l.return(void 0);
                            f = a.qb || e.sodar_query_id;
                            g = void 0 === e.rc_enable ? 'n' : e.rc_enable;
                            h = void 0 === e.bg_snapshot_delay_ms ? '0' : e.bg_snapshot_delay_ms;
                            k = void 0 === e.is_gen_204 ? '1' : e.is_gen_204;
                            return f && e.bg_hash_basename && e.bg_binary ? l.return({
                                context: a.A,
                                fd: e.bg_hash_basename,
                                ed: e.bg_binary,
                                Fd: a.j + '_' + a.l,
                                qb: f,
                                fb: a.fb,
                                Kb: g,
                                Tb: h,
                                Jb: k
                            }) : l.return(void 0);
                        }
                    });
                });
            };
            Fd = function (a) {
                return A(this, function c() {
                    var d;
                    return B(c, function (e) {
                        if (1 == e.j)
                            return C(e, Cd(a), 2);
                        if (d = e.l) {
                            var f = 'sodar2';
                            f = void 0 === f ? 'sodar2' : f;
                            var g = window, h = g.GoogleGcLKhOms;
                            h && 'function' === typeof h.push || (h = g.GoogleGcLKhOms = []);
                            var k = {};
                            h.push((k._ctx_ = d.context, k._bgv_ = d.fd, k._bgp_ = d.ed, k._li_ = d.Fd, k._jk_ = d.qb, k._st_ = d.fb, k._rc_ = d.Kb, k._dl_ = d.Tb, k._g2_ = d.Jb, k));
                            if (h = g.GoogleDX5YKUSk)
                                g.GoogleDX5YKUSk = void 0, h[1]();
                            f = Dd(Ed, { basename: f });
                            yd(f);
                        }
                        return e.return(d);
                    });
                });
            };
            Hd = function (a) {
                switch (a) {
                case 1:
                    return 'gda';
                case 2:
                    return 'gpt';
                case 3:
                    return 'ima';
                case 4:
                    return 'pal';
                case 5:
                    return 'xfad';
                case 6:
                    return 'dv3n';
                case 7:
                    return 'spa';
                default:
                    return 'unk';
                }
            };
            Id = function (a, b) {
                return 0 === a.size ? !1 : void 0 === b || 0 === b.length ? !0 : b.some(function (c) {
                    return a.has(c);
                });
            };
            Jd = function (a, b) {
                if (a.length !== b.length)
                    throw Error('Length of two vectors should be the same!');
                for (var c = 0, d = 0; d < a.length; d++)
                    c += a[d] * b[d];
                return c;
            };
            Nd = function (a, b, c) {
                var d = Kd, e, f, g = [];
                b = _.G(b);
                for (var h = b.next(); !h.done; h = b.next()) {
                    h = h.value;
                    var k = c(h, {}, null !== (e = a.perBuyerSignals.get('gdaSignals')) && void 0 !== e ? e : new Ld(), null !== (f = a.j.get('gdaSignals')) && void 0 !== f ? f : new Md(), {});
                    0 >= k.bid || null === k.ad || (k = d(k.ad, k.bid, a, {}), 0 < k && g.push({
                        ad: h,
                        Td: k
                    }));
                }
                return g;
            };
            Pd = function () {
                var a;
                var b = Ya(Od);
                b = (null === (a = Ra()) || void 0 === a ? 0 : a.isScript(b)) ? TrustedScript.prototype.toString.apply(b) : b;
                return $a(URL.createObjectURL(new Blob([b], { type: 'text/javascript' })));
            };
            Rd = function (a, b, c, d) {
                c = void 0 === c ? null : c;
                d = void 0 === d ? {} : d;
                if (Math.random() < _.lb(Qd)) {
                    var e = {};
                    Rb(_.r(Object, 'assign').call(Object, (e.c = String(a), e.pc = String(zb(window)), e.em = c, e.lid = b, e.eids = Bb().join(), e), d), 'esp');
                }
            };
            be = function (a) {
                if (!a)
                    return null;
                var b = new Sd(), c = _.lb(Td), d = [], e = /^_GESPSK-(.+)$/;
                try {
                    for (var f = 0; f < a.length; f++) {
                        var g = (e.exec(a.key(f)) || [])[1];
                        g && d.push(g);
                    }
                } catch (h) {
                }
                d = _.G(d);
                for (e = d.next(); !e.done; e = d.next())
                    if (e = e.value, f = Ud().get(e, a), f.getError())
                        Rd(f.getError(), e, f.errorMessage);
                    else if (f = f.Ub)
                        if (g = Vd(f), 0 === g || 1 === g)
                            g = H(f, 2), 0 <= c && g && g.length > c ? Rd(12, e) : (Wd(b, 2, f, Xd), Rd(19, e));
                if (!I(b, Xd, 2).length)
                    return null;
                if (_.v(Yd))
                    return a = new Zd(), $d(b, a), b = ae(a), Ka(b, 2);
                a = new Zd();
                $d(b, a);
                return Ka(ae(a), void 0);
            };
            he = function (a, b, c, d) {
                Rd(18, a);
                try {
                    var e = _.yc();
                    _.lb(ce) && (de(b, Number(((0, J.T)(ee(b, 8)) - 1).toFixed(3))), E(b, 7, Math.round(e / 1000 / 60)));
                    return c().then(function (f) {
                        Rd(29, a, null, { delta: String(_.yc() - e) });
                        E(b, 3, Date.now());
                        fe(a, b, f, d);
                        return b;
                    }).catch(function (f) {
                        fe(a, b, H(b, 2), d);
                        Rd(28, a, ge(f));
                        return b;
                    });
                } catch (f) {
                    return fe(a, b, H(b, 2), d), Rd(1, a, ge(f)), D.Promise.resolve(b);
                }
            };
            je = function () {
                var a = window;
                var b = void 0 === b ? function () {
                } : b;
                return new D.Promise(function (c) {
                    var d = function () {
                        c(b());
                        _.ie(a, 'load', d);
                    };
                    _.xd(a, 'load', d);
                });
            };
            qe = function (a, b, c, d) {
                return A(this, function f() {
                    var g, h, k, l, m;
                    return B(f, function (n) {
                        if (1 == n.j)
                            return g = new ke(a, b, c, d), h = new le(g.o, g.B, c, d), k = new me(h.o, h.B, c, d), l = new ne(), oe(l, [
                                g,
                                h,
                                k
                            ]), pe(l), C(n, h.m.promise, 2);
                        m = n.l;
                        return n.return(m ? m : {
                            id: a,
                            kd: null
                        });
                    });
                });
            };
            ve = function (a, b, c) {
                var d;
                b ? re() === se(window) || _.v(te) ? a.encryptedSignalProviders instanceof ue ? a.encryptedSignalProviders.j.push(c) : (b = new ue(null !== (d = a.encryptedSignalProviders) && void 0 !== d ? d : [], b), a.encryptedSignalProviders = b, b.j.push(c)) : Rd(16, '') : Rd(15, '');
            };
            we = function (a, b, c, d) {
                var e, f = null !== (e = a.encryptedSignalSource) && void 0 !== e ? e : a.encryptedSignalSource = {};
                c ? re() === se(window) || _.v(te) ? b.map(function (g) {
                    var h = g.xa;
                    if ((g = Object.getOwnPropertyDescriptor(f, h)) && !g.configurable)
                        return D.Promise.resolve(null);
                    var k = !1;
                    return new D.Promise(function (l) {
                        var m = f[h];
                        Object.defineProperty(f, h, {
                            set: function (n) {
                                if (!k) {
                                    k = !0;
                                    if ('function' === typeof n) {
                                        var p = {};
                                        Rd(17, h, null, (p.api = '0', p));
                                        n = qe(h, n, c, d);
                                    } else
                                        Rd(14, h), n = D.Promise.resolve(null);
                                    n.then(l);
                                }
                            }
                        });
                        m && (f[h] = m);
                    });
                }) : Rd(16, '') : Rd(15, '');
            };
            xe = function (a, b, c) {
                var d, e = b.toString();
                if (c && !document.querySelector('[src="' + e + '"]'))
                    if (c = Ud().get(a, c), c.getError())
                        Rd(c.getError(), a, c.errorMessage);
                    else if (c = c.Ub, !c || !(0 === Vd(c) || 1 > (null !== (d = ee(c, 8)) && void 0 !== d ? d : 0))) {
                        Rd(30, a, null, { url: e });
                        var f = document.createElement('script');
                        f.setAttribute('esp-signal', 'true');
                        wd(f, b);
                        var g = function () {
                            Rd(31, a, null, { url: e });
                            _.ie(f, 'error', g);
                        };
                        document.head.appendChild(f);
                        _.xd(f, 'error', g);
                    }
            };
            ze = function (a) {
                a = _.ye(a.split(/\s+/), function (b) {
                    return (b = /^(-?\d+)(px|%)$/.exec(b)) ? {
                        value: parseFloat(b[1]),
                        type: b[2]
                    } : {
                        value: 0,
                        type: 'px'
                    };
                });
                a[1] = a[1] || a[0];
                a[2] = a[2] || a[0];
                a[3] = a[3] || a[1];
                return a;
            };
            Be = function (a) {
                if (!a)
                    return [0];
                a = 'number' === typeof a ? [a] : a;
                a = _.Ae(a, function (b) {
                    return 'number' === typeof b && 0 <= b && 1 >= b ? !0 : !1;
                });
                la(a);
                na(a, function (b, c) {
                    return b - c;
                });
                return a;
            };
            Ce = function (a) {
                try {
                    var b = a.getBoundingClientRect();
                } catch (c) {
                }
                return b ? {
                    top: b.top,
                    right: b.right,
                    bottom: b.bottom,
                    left: b.left,
                    width: b.width || b.right - b.left,
                    height: b.height || b.bottom - b.top
                } : {
                    top: 0,
                    right: 0,
                    bottom: 0,
                    left: 0,
                    width: 0,
                    height: 0
                };
            };
            Ee = function (a, b, c, d) {
                var e, f, g, h, k, l, m, n = new De(), p = '', t = function (u) {
                        try {
                            var y = 'object' === typeof u.data ? u.data : JSON.parse(u.data);
                            p === y.paw_id && (_.ie(a, 'message', t), n.resolve(d(y)));
                        } catch (z) {
                        }
                    };
                return 'function' === typeof (null === (e = a.gmaSdk) || void 0 === e ? void 0 : e.getQueryInfo) ? (_.xd(a, 'message', t), p = c(a.gmaSdk), n.promise) : 'function' === typeof (null === (h = null === (g = null === (f = a.webkit) || void 0 === f ? void 0 : f.messageHandlers) || void 0 === g ? void 0 : g.getGmaQueryInfo) || void 0 === h ? void 0 : h.postMessage) || 'function' === typeof (null === (m = null === (l = null === (k = a.webkit) || void 0 === k ? void 0 : k.messageHandlers) || void 0 === l ? void 0 : l.getGmaSig) || void 0 === m ? void 0 : m.postMessage) ? (p = String(Math.floor(2147483647 * pb(a))), _.xd(a, 'message', t), b(a.webkit.messageHandlers, p), n.promise) : null;
            };
            Fe = function (a) {
                return Ee(a, function (b, c) {
                    var d;
                    return void (null !== (d = b.getGmaQueryInfo) && void 0 !== d ? d : b.getGmaSig).postMessage(c);
                }, function (b) {
                    return b.getQueryInfo();
                }, function (b) {
                    return b.signal;
                });
            };
            He = function (a, b, c, d) {
                try {
                    if (a.setAttribute('data-google-query-id', c), !d) {
                        var e, f;
                        if (_.v(Ge)) {
                            null !== (e = b.googletag) && void 0 !== e ? e : b.googletag = {};
                            var g = null !== (f = b.googletag.queryIds) && void 0 !== f ? f : [];
                            g.push(c);
                            500 < g.length && g.shift();
                            b.googletag.queryIds = g;
                        }
                    }
                } catch (h) {
                }
            };
            Ie = function (a) {
                return 'number' === typeof a || 'string' === typeof a;
            };
            Je = function (a) {
                switch (a) {
                case void 0:
                case null:
                case 2:
                    return !1;
                case 0:
                case 1:
                    return !0;
                default:
                    throw Error('Unexpected encryption mode: ' + a);
                }
            };
            Le = function (a, b) {
                var c = void 0 === c ? Ke : c;
                a.goog_sdr_l || (Object.defineProperty(a, 'goog_sdr_l', { value: !0 }), 'complete' === a.document.readyState ? c(a, b) : _.xd(a, 'load', function () {
                    return void c(a, b);
                }));
            };
            Me = function (a) {
                var b, c;
                try {
                    return (null !== (c = null === (b = a.top) || void 0 === b ? void 0 : b.frames) && void 0 !== c ? c : {}).google_ads_top_frame;
                } catch (d) {
                }
                return null;
            };
            Ne = function (a) {
                var b = /^https?:\/\/[^/#?]+\/?$/;
                return !!a && !b.test(a);
            };
            Pe = function (a) {
                if (a === a.top || Oe(a.top))
                    return D.Promise.resolve({ status: 4 });
                var b = Me(a);
                if (!b)
                    return D.Promise.resolve({ status: 2 });
                if (a.parent === a.top && Ne(a.document.referrer))
                    return D.Promise.resolve({ status: 3 });
                var c = new De();
                a = new MessageChannel();
                a.port1.onmessage = function (d) {
                    '__goog_top_url_resp' === d.data.msgType && c.resolve({
                        mb: d.data.topUrl,
                        status: d.data.topUrl ? 0 : 1
                    });
                };
                b.postMessage({ msgType: '__goog_top_url_req' }, '*', [a.port2]);
                return c.promise;
            };
            Qe = function (a) {
                return !!a && !!H(a, 1);
            };
            Se = function (a) {
                a = (Oe(a.top) ? a.top : a).AMP;
                return 'object' === typeof a && !!Re(a, function (b, c) {
                    return !/^inabox/i.test(c);
                });
            };
            Ue = function (a) {
                return new D.Map([
                    [
                        'arp',
                        { value: Se(a) ? 1 : null }
                    ],
                    [
                        'abxe',
                        { value: Oe(a.top) || Te(a.IntersectionObserver) ? 1 : null }
                    ]
                ]);
            };
            We = function () {
                var a = window, b, c, d;
                null !== (b = a.pbjs) && void 0 !== b ? b : a.pbjs = {};
                null !== (c = (d = a.pbjs).que) && void 0 !== c ? c : d.que = [];
                a.pbjs.que.push(kc(860, function () {
                    var e, f = (0, J.T)(a.pbjs);
                    null === (e = f.onEvent) || void 0 === e ? void 0 : e.call(f, 'setTargeting', kc(861, function (g) {
                        Ve(f, g);
                    }));
                }));
            };
            Ye = function (a) {
                var b;
                return null === (b = (L = _.r(Object, 'entries').call(Object, Xe()), _.r(L, 'find')).call(L, function (c) {
                    var d = _.G(c);
                    c = d.next().value;
                    d = d.next().value;
                    return (L = H(d, 4), _.r(L, 'includes')).call(L, 'publisher_ads') && (c === a || d.getAdUnitPath() === a);
                })) || void 0 === b ? void 0 : b[1];
            };
            Ve = function (a, b) {
                var c, d, e, f, g, h, k = null;
                b = _.G(_.r(Object, 'keys').call(Object, b));
                for (var l = b.next(); !l.done; l = b.next()) {
                    var m = l.value;
                    if (l = Ye(m)) {
                        var n = null !== (g = null !== (d = null === (c = a.getBidResponsesForAdUnitCode) || void 0 === c ? void 0 : c.call(a, m)) && void 0 !== d ? d : null === (f = null === (e = a.getBidResponses) || void 0 === e ? void 0 : e.call(a)) || void 0 === f ? void 0 : f[m]) && void 0 !== g ? g : { bids: [] };
                        m = {};
                        n = _.G(null !== (h = n.bids) && void 0 !== h ? h : []);
                        for (var p = n.next(); !p.done; m = { yb: m.yb }, p = n.next()) {
                            p = Ac(p.value);
                            var t = p.ud;
                            m.yb = p.adId;
                            p = Pc(t);
                            null != p && (null !== k && void 0 !== k ? k : k = H(p, 15), (t = (L = I(l, Ze, 21), _.r(L, 'find')).call(L, function (u) {
                                return function (y) {
                                    return H(y, 1) === u.yb;
                                };
                            }(m))) ? $e(t, p) : (p = $e(af(new Ze(), m.yb), p), bf(l, p)));
                        }
                    }
                }
                k && _.lb(cf) && Math.random() < _.lb(cf) && df(a, k);
            };
            df = function (a, b) {
                var c, d, e, f, g = function (n, p) {
                        n = Ye(n);
                        n = (null === n || void 0 === n ? void 0 : (L = I(n, Ze, 21), _.r(L, 'find')).call(L, function (t) {
                            var u, y;
                            return 1 === (null === (u = M(t, Bc, 2)) || void 0 === u ? void 0 : H(u, 10)) && (null === (y = M(t, Bc, 2)) || void 0 === y ? void 0 : H(y, 1)) === p;
                        })) || (null === n || void 0 === n ? void 0 : bf(n, $e(new Ze(), Oc(Hc(Fc(new Bc(), 1), p), b))));
                        return null === n || void 0 === n ? void 0 : M(n, Bc, 2);
                    }, h = (null === (c = null === a || void 0 === a ? void 0 : a.getEvents) || void 0 === c ? void 0 : c.call(a)) || [];
                h = _.G(h);
                for (var k = h.next(); !k.done; k = h.next())
                    switch (k = k.value, k.eventType) {
                    case 'bidRequested':
                        if (!Array.isArray(k.args) && Array.isArray(k.args.bids))
                            for (var l = _.G(k.args.bids), m = l.next(); !m.done; m = l.next())
                                m = m.value, m.bidder && m.adUnitCode && m.auctionId === b && (null === (d = g(m.adUnitCode, m.bidder)) || void 0 === d ? void 0 : ef(d, k.elapsedTime));
                        break;
                    case 'bidResponse':
                        !Array.isArray(k.args) && k.args.bidder && k.args.adUnitCode && k.args.auctionId === b && (l = g(k.args.adUnitCode, k.args.bidder), null === l || void 0 === l ? void 0 : ef(l, k.elapsedTime - ((null === l || void 0 === l ? void 0 : H(l, 13)) || 0)), null === l || void 0 === l ? void 0 : E(l, 14, 1));
                        break;
                    case 'bidTimeout':
                        if (Array.isArray(k.args))
                            for (k = _.G(k.args), m = k.next(); !m.done; m = k.next())
                                l = m.value, l.bidder && l.adUnitCode && l.auctionId === b && (l = g(l.adUnitCode, l.bidder), null === l || void 0 === l ? void 0 : E(l, 14, 3), null === l || void 0 === l ? void 0 : ef(l, (null === (f = null === (e = null === a || void 0 === a ? void 0 : a.getConfig) || void 0 === e ? void 0 : e.call(a)) || void 0 === f ? void 0 : f.bidderTimeout) || 0));
                        break;
                    case 'noBid':
                        !Array.isArray(k.args) && k.args.bidder && k.args.adUnitCode && k.args.auctionId === b && (l = g(k.args.adUnitCode, k.args.bidder), 3 !== (null === l || void 0 === l ? void 0 : H(l, 14)) && (null === l || void 0 === l ? void 0 : E(l, 14, 2), null === l || void 0 === l ? void 0 : ef(l, k.elapsedTime - (H(l, 13) || 0))));
                    }
            };
            hf = function (a, b) {
                return ff(a, function (c) {
                    return gf(b[c.j]);
                }, '', function (c) {
                    return null != c;
                }, '~');
            };
            nf = function (a, b) {
                var c;
                return null !== (c = (L = I(a, jf, 1), _.r(L, 'find')).call(L, function (d) {
                    return kf(d, 1, 0) === b;
                })) && void 0 !== c ? c : lf(a, mf(new jf(), b));
            };
            sf = function (a, b) {
                var c;
                return null !== (c = (L = I(a, of, 2), _.r(L, 'find')).call(L, function (d) {
                    return pf(d, 1) === b;
                })) && void 0 !== c ? c : qf(a, rf(new of(), b));
            };
            gf = function (a) {
                for (var b = new tf(), c = _.G(I(a, Ze, 21)), d = c.next(); !d.done; d = c.next()) {
                    var e = d.value;
                    d = (0, J.T)(M(e, Bc, 2));
                    var f = nf(b, (0, J.T)(H(d, 10)));
                    f = sf(f, (0, J.T)(H(d, 1)));
                    uf(f, H(d, 13) || 0);
                    vf(f, H(d, 14) || 1);
                    var g = new wf();
                    xf(d, 2) && yf(g, 1000000 * (0, J.T)(H(d, 2)));
                    xf(d, 4) && zf(g, (0, J.T)(H(d, 4)));
                    xf(e, 1) && Af(g, (0, J.T)(H(e, 1)));
                    e = {};
                    for (var h = _.G(H(d, 6)), k = h.next(); !k.done; e = { Bb: e.Bb }, k = h.next())
                        e.Bb = k.value, (L = I(a, Bf, 9), _.r(L, 'find')).call(L, function (l) {
                            return function (m) {
                                return Cf(m) === l.Bb;
                            };
                        }(e)) && Df(g, 4, e.Bb);
                    xf(d, 11) && Ef(g, H(d, 11));
                    Wd(f, 3, g, wf);
                }
                if (!I(b, jf, 1).length)
                    return null;
                a = new Zd();
                Ff(b, a);
                return Ka(ae(a), 3);
            };
            Hf = function (a) {
                var b = a, c = 0;
                Gf(b, function (d) {
                    var e;
                    return 1 === (null == (e = d.parentElement) ? void 0 : e.childElementCount) ? (b = d.parentElement, c++, !0) : !1;
                });
                return {
                    Vd: b,
                    depth: c
                };
            };
            If = function (a, b) {
                var c = _.Xb(23);
                mc('gpt_not_reserved', function (d) {
                    Zb(d);
                    q(d, 'inViewport', a);
                    q(d, 'depth', b);
                }, { ta: c });
            };
            Mf = function (a, b, c) {
                var d = a.map(function (e) {
                    return b[e.j];
                });
                return new D.Map([
                    [
                        'ists',
                        {
                            value: Jf(d, function (e) {
                                return 0 != kd(e);
                            }) || null
                        }
                    ],
                    [
                        'fas',
                        {
                            value: ff(d, function (e) {
                                return od(kd(e));
                            }, 0)
                        }
                    ],
                    [
                        'pfxs',
                        {
                            value: _.v(Kf) ? Jf(a, function (e) {
                                var f = b[e.j], g;
                                if (g = !od(kd(f))) {
                                    g = null;
                                    Array.isArray(Yc(f)[0]) && (g = _.G(Yc(f)[0]), f = g.next().value, g = g.next().value, g = {
                                        width: f,
                                        height: g
                                    });
                                    a: {
                                        var h = Tc(e, c);
                                        e = {
                                            Uc: g,
                                            Cc: !1
                                        };
                                        var k = void 0 === e ? {} : e;
                                        e = void 0 === k.Uc ? null : k.Uc;
                                        f = void 0 === k.Hd ? 100 : k.Hd;
                                        g = void 0 === k.wb ? 50 : k.wb;
                                        k = void 0 === k.Cc ? !0 : k.Cc;
                                        for (var l = Lf(), m = !1; h;) {
                                            if (!f-- || Lf() - l >= g) {
                                                g = !1;
                                                break a;
                                            }
                                            switch (h.nodeType) {
                                            case 9:
                                                try {
                                                    var n = h.parentWindow || h.defaultView;
                                                    if (n) {
                                                        var p = n.frameElement;
                                                        if (p && Oe(n.parent)) {
                                                            h = p;
                                                            break;
                                                        }
                                                    }
                                                } catch (K) {
                                                }
                                                h = null;
                                                break;
                                            case 1:
                                                var t = h, u;
                                                if (u = k) {
                                                    b: {
                                                        try {
                                                            if (0 < t.offsetWidth && 0 < t.offsetHeight && t.style && 'none' !== t.style.display && 'hidden' !== t.style.visibility && (!t.style.opacity || 0 !== Number(t.style.opacity))) {
                                                                var y = t.getBoundingClientRect();
                                                                var z = 0 < y.right && 0 < y.bottom;
                                                                break b;
                                                            }
                                                        } catch (K) {
                                                        }
                                                        z = !1;
                                                    }
                                                    u = !z;
                                                }
                                                if (u) {
                                                    g = !1;
                                                    break a;
                                                }
                                                m || (/^html|body$/i.test(t.tagName) ? m = null : (m = t.style.position || (Xc(t, window) || {}).position, m = /^fixed/i.test(m) ? t : null), m = !!m && (!e || m.offsetWidth * m.offsetHeight <= 4 * e.width * e.height));
                                                h = h.parentNode;
                                            }
                                        }
                                        g = m;
                                    }
                                }
                                return g;
                            }) || null : null
                        }
                    ]
                ]);
            };
            Nf = function (a) {
                return new D.Map([[
                        'rbvs',
                        {
                            value: Jf(a, function (b) {
                                return 4 == kd(b);
                            }) || null
                        }
                    ]]);
            };
            Pf = function (a) {
                if (_.v(Of))
                    return new D.Map();
                var b = a.Cb, c = a.Ob, d = 0 === a.ld;
                return new D.Map([
                    [
                        'adsid',
                        { value: d ? b : null }
                    ],
                    [
                        'pucrd',
                        { value: d ? c : null }
                    ],
                    [
                        'jar',
                        { value: a.Lb }
                    ]
                ]);
            };
            Sf = function (a, b, c) {
                var d = window;
                return new D.Map([
                    [
                        'ris',
                        {
                            value: ff(b, function (e) {
                                var f, g;
                                e = null !== (g = null === (f = a.j.get(e)) || void 0 === f ? void 0 : f.Ic) && void 0 !== g ? g : 0;
                                f = _.Qf(d);
                                return Math.round(Math.min((e && f ? f - e : 0) / 1000, 1800));
                            }, 0, void 0, '~')
                        }
                    ],
                    [
                        'rcs',
                        {
                            value: ff(b, function (e) {
                                if (!c) {
                                    var f = void 0 === f ? _.F : f;
                                    var g = a.j.get(e);
                                    g && (g.Ic = _.Qf(f) || 0, g.tb++);
                                }
                                return Rf(a, e);
                            }, 0)
                        }
                    ]
                ]);
            };
            Tf = function (a, b) {
                var c, d = x(a, 21);
                return new D.Map([
                    [
                        'hxva',
                        {
                            value: d ? 1 : null,
                            options: { ha: !1 }
                        }
                    ],
                    [
                        'cmsid',
                        { value: d ? H(a, 23) : null }
                    ],
                    [
                        'vid',
                        { value: d ? H(a, 22) : null }
                    ],
                    [
                        'pod',
                        {
                            value: isNaN(b.Xa) ? null : b.Xa,
                            options: { ha: !1 }
                        }
                    ],
                    [
                        'ppos',
                        {
                            value: isNaN(b.Ya) ? null : b.Ya,
                            options: { ha: !1 }
                        }
                    ],
                    [
                        'scor',
                        {
                            value: null !== (c = H(a, 29)) && void 0 !== c ? c : null,
                            options: { ha: !1 }
                        }
                    ]
                ]);
            };
            Uf = function (a, b) {
                return a && (a = M(a, Nc, 1)) ? H(a, 1) || b.innerWidth : 0;
            };
            Vf = function (a, b) {
                return a && (a = M(a, Nc, 1)) ? H(a, 2) || b.innerHeight : 0;
            };
            Wf = function (a) {
                return a && (a = M(a, Nc, 2)) ? H(a, 1) || 0 : 0;
            };
            Xf = function (a) {
                return a && (a = M(a, Nc, 2)) ? H(a, 2) || 0 : 0;
            };
            Zf = function (a, b, c) {
                a = a.map(function (e) {
                    return b[e.j];
                });
                var d = a.some(function (e) {
                    return xf(e, 16);
                });
                return new D.Map([
                    [
                        'rtgs',
                        {
                            value: d ? a.map(function (e) {
                                return xf(e, 16) ? 0 != Yc(e).length ? '1' : '2' : '0';
                            }) : null,
                            options: { Aa: '!' }
                        }
                    ],
                    [
                        'max_w',
                        {
                            value: d ? a.map(function (e) {
                                return Uf(M(e, Yf, 16), c);
                            }) : null,
                            options: { Aa: '!' }
                        }
                    ],
                    [
                        'max_h',
                        {
                            value: d ? a.map(function (e) {
                                return Vf(M(e, Yf, 16), c);
                            }) : null,
                            options: { Aa: '!' }
                        }
                    ],
                    [
                        'min_w',
                        {
                            value: d ? a.map(function (e) {
                                return Wf(M(e, Yf, 16));
                            }) : null,
                            options: { Aa: '!' }
                        }
                    ],
                    [
                        'min_h',
                        {
                            value: d ? a.map(function (e) {
                                return Xf(M(e, Yf, 16));
                            }) : null,
                            options: { Aa: '!' }
                        }
                    ]
                ]);
            };
            dg = function (a, b) {
                b = void 0 === b ? $f : b;
                var c = ka(a), d = function (f) {
                        f = _.G(f);
                        f.next();
                        f = ag(f);
                        return b(c, f);
                    }, e = function (f) {
                        var g = _.G(f);
                        f = g.next().value;
                        g = ag(g);
                        return a.apply(f, g);
                    };
                return function (f) {
                    for (var g = [], h = 0; h < arguments.length; ++h)
                        g[h] = arguments[h];
                    h = this || _.F;
                    var k = bg.get(h);
                    k || (k = {}, bg.set(h, k));
                    return cg(k, [this].concat(_.ec(g)), e, d);
                };
            };
            fg = function (a) {
                a = eg(a);
                var b = [];
                _.$b(a, function (c, d) {
                    c = c.filter(function () {
                        return !0;
                    });
                    c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + '=' + c.join()));
                });
                return b;
            };
            hg = function (a, b, c, d) {
                var e;
                if (a = Vc(a, b)) {
                    if (c = _.v(gg) || (null !== (e = x(c, 24)) && void 0 !== e ? e : x(d, 30)))
                        b = a.getBoundingClientRect(), c = b.top, d = b.bottom, 0 === b.height ? c = !1 : (b = _.F.innerHeight, c = 0 < d && d < b || 0 < c && c < b);
                    c || (a.style.display = 'none');
                }
            };
            ig = function () {
                var a, b, c;
                return null !== (c = null === (b = null === (a = window.performance) || void 0 === a ? void 0 : a.now) || void 0 === b ? void 0 : b.call(a)) && void 0 !== c ? c : Date.now();
            };
            jg = function (a) {
                var b = ig();
                for (a = b + a; ig() < a;);
                return ig() - b;
            };
            kg = function (a, b) {
                var c = a.shift();
                void 0 !== c && (b(c), a.length && window.requestAnimationFrame(function () {
                    return void kg(a, b);
                }));
            };
            mg = function () {
                var a = void 0 === a ? jg : a;
                if ('function' === typeof window.requestAnimationFrame) {
                    var b = lg();
                    b.length && window.requestAnimationFrame(function () {
                        return void kg(b, a);
                    });
                }
            };
            lg = function () {
                return ng(og).map(function (a) {
                    return _.pg(a, 0);
                }).filter(function (a) {
                    return null !== a;
                });
            };
            rg = function (a) {
                var b = _.lb(qg);
                return -1 !== b ? b : xf(a, 1) ? xf(a, 3) && 0 !== qd() ? H(a, 1) * ee(a, 3) : H(a, 1) : null;
            };
            sg = function (a) {
                var b = {};
                a = _.G(a);
                for (var c = a.next(); !c.done; c = a.next())
                    c = c.value, b[H(c, 1)] = H(c, 2);
                return b;
            };
            vg = function (a, b) {
                var c;
                return tg(a, ug, function (d) {
                    d = d.detail.data;
                    try {
                        return c = JSON.parse(d), 'rewarded' === c.type && c.message === b;
                    } catch (e) {
                        return !1;
                    }
                }).then(function () {
                    return c;
                });
            };
            xg = function (a) {
                wg = a;
            };
            yg = function (a) {
                mc('gpt_fc_has_namespace_but_no_iframes', function (b) {
                    Zb(b);
                    q(b, 'networkId', a);
                }, { ta: 1 });
            };
            Dg = function () {
                return zg() ? 0 <= Ag(Bg(), 11) : Cg() && 0 <= Ag(Bg(), 65);
            };
            Gg = function (a) {
                var b = Eg(a);
                return (L = [
                    'google_debug',
                    'dfpdeb',
                    'google_console',
                    'google_force_console',
                    'googfc'
                ], _.r(L, 'find')).call(L, function (c) {
                    return null !== Fg(b, c);
                }) || null;
            };
            Ig = function (a, b) {
                function c(h) {
                    var k = h;
                    return function (l) {
                        for (var m = [], n = 0; n < arguments.length; ++n)
                            m[n] = arguments[n];
                        k && (n = k, k = null, n.apply(null, _.ec(m)));
                    };
                }
                var d = this, e = null, f = 0, g = 0;
                return function () {
                    return A(d, function k() {
                        var l, m, n, p;
                        return B(k, function (t) {
                            if (1 == t.j)
                                return f && clearTimeout(f), f = 0, l = new De(), m = c(l.resolve), n = ++g, C(t, 0, 2);
                            if (g !== n)
                                return m(!1), t.return(l.promise);
                            e ? e(!1) : m(!0);
                            p = c(function () {
                                e = null;
                                f = 0;
                                m(!0);
                            });
                            f = setTimeout(p, a);
                            _.Hg(b, function () {
                                return void m(!1);
                            });
                            e = m;
                            return t.return(l.promise);
                        });
                    });
                };
            };
            Kg = function (a) {
                var b = Jg(), c = a.replace('googletag.', '');
                return new D.Promise(function (d) {
                    var e = !1;
                    Object.defineProperty(b, c, {
                        value: function (f, g) {
                            e || d({
                                Wb: f,
                                lc: g
                            });
                            e = !0;
                        },
                        writable: !1,
                        enumerable: !1
                    });
                });
            };
            Pg = function (a) {
                switch (a.id) {
                case 5:
                    return new Lg(a);
                case 6:
                    return new Mg(a);
                case 0:
                    return new Ng(a);
                default:
                    return new Og(a);
                }
            };
            Qg = function (a) {
                if (!Oe(a))
                    return -1;
                a = a.pageYOffset;
                return 0 > a ? -1 : a;
            };
            Rg = function (a, b) {
                return null === a || void 0 === a ? void 0 : a.replace(/\$\{AUCTION_PRICE\}/g, String(b));
            };
            Tg = function (a) {
                var b = {
                    threshold: [
                        0,
                        0.3,
                        0.5,
                        0.75,
                        1
                    ]
                };
                return window.IntersectionObserver ? new IntersectionObserver(a, b) : new Sg(a, b);
            };
            Ug = function (a) {
                return new D.Promise(function (b) {
                    return void setTimeout(b, a);
                });
            };
            Vg = function (a, b) {
                return 'undefined' === typeof IntersectionObserver ? new Sg(b, { rootMargin: a }) : new IntersectionObserver(b, { rootMargin: a });
            };
            Wg = function (a) {
                var b = window;
                return 0 <= a.bottom && a.top < b.innerHeight && 0 <= a.right && a.left < b.innerWidth;
            };
            bh = function (a) {
                var b, c, d, e, f;
                if (null == a)
                    return [];
                var g = null !== (b = Xg(a, 1)) && void 0 !== b ? b : 0, h = null !== (c = Xg(a, 2)) && void 0 !== c ? c : 0, k = null !== (d = Xg(a, 3)) && void 0 !== d ? d : 0, l = null !== (e = Xg(a, 4)) && void 0 !== e ? e : 0;
                a = null !== (f = Xg(a, 5)) && void 0 !== f ? f : 0;
                for (var m = [], n = Math.round(1000 * Math.random()), p = 0; p < g; p++) {
                    for (var t = new Yg(), u = 0; u < l; u++)
                        Df(t, 6, (n + u).toString());
                    Df(t, 2, n);
                    Df(t, 3, n % 97);
                    Fb(t, 4, 1);
                    u = new Zg();
                    for (var y = 0; y < a; y++)
                        Df(u, 1, y);
                    Db(t, 7, u);
                    u = new $g();
                    for (y = 0; y < h; y++)
                        Df(u, 1, n + y);
                    for (y = 0; y < k; y++)
                        Df(u, 2, n + y);
                    Db(t, 1, u);
                    u = m;
                    y = u.push;
                    var z = new ah();
                    t = Db(z, 2, t);
                    y.call(u, t);
                }
                return m;
            };
            gh = function () {
                ch('pubadsReady', !0);
                if (_.v(dh)) {
                    var a = 0;
                    Object.defineProperty(Jg(), 'pubadsReady', {
                        get: function () {
                            Cc().M(eh());
                            if (5 > a) {
                                var b = _.lb(fh);
                                mc('gpt_pubads_ready', function (c) {
                                    ++a;
                                    Zb(c);
                                    var d = Error('pubadsReady');
                                    q(c, 'stack', Sb(d.stack, d.message));
                                }, { ta: b });
                            }
                            return !0;
                        },
                        configurable: !0,
                        enumerable: !0
                    });
                }
            };
            jh = function (a) {
                return _.v(hh) && 'rewardedSlotCanceled' === a ? null : (L = _.r(Object, 'values').call(Object, ih), _.r(L, 'find')).call(L, function (b) {
                    return b === a;
                });
            };
            mh = function () {
                var a = kh.N();
                return Qc(a, function () {
                    return new lh(a);
                });
            };
            ph = function () {
                var a = nh.N();
                return Qc(a, function () {
                    return new oh(a);
                });
            };
            rh = function (a) {
                return Qc(a, function () {
                    return new qh(a, a.l);
                });
            };
            vh = function (a, b, c) {
                var d = sh(b, c, void 0, !0), e = d.slotId;
                d = d.Wa;
                if (!e || !d)
                    return Cc().M(th('PubAdsService.definePassback', [
                        b,
                        c
                    ])), null;
                E(d, 17, !0);
                a.Fa(e, d);
                return {
                    Nc: rh(new uh(e, a)),
                    Wa: d
                };
            };
            zh = function () {
                var a = _.wh(xh);
                return Qc(a, function () {
                    return new yh(a);
                });
            };
            Bh = function (a) {
                return !!Re(Ah, function (b) {
                    return b === a;
                });
            };
            Eh = function (a, b, c) {
                c = _.wh(Ch).add(a, [
                    1,
                    1
                ], {
                    lb: c,
                    format: b
                });
                a = c.slotId;
                c = c.Wa;
                if (a && c) {
                    if (5 === b && _.v(Dh))
                        return null;
                    E(c, 15, b);
                    _.Hg(a, function () {
                        var d = window, e = od(b);
                        if (null != e) {
                            d = _.pd(d);
                            var f = d.adCount && d.adCount[e];
                            f && (d.adCount[e] = f - 1);
                        }
                    });
                }
                return null !== a && void 0 !== a ? a : null;
            };
            Ih = function () {
                var a = window, b = Fh.N().j, c;
                if (a === a.top)
                    for (var d = {}, e = _.G(_.r(Gh, 'entries').call(Gh)), f = e.next(); !f.done; d = {
                            gb: d.gb,
                            Vb: d.Vb
                        }, f = e.next())
                        f = _.G(f.value), d.gb = f.next().value, d.Vb = f.next().value, (L = null !== (c = a.location.hash) && void 0 !== c ? c : '', _.r(L, 'includes')).call(L, 'gam' + d.gb + 'Demo') && rc(789, function (g) {
                            return function () {
                                window.console && window.console.warn && window.console.warn('GPT - Demo ' + g.gb + ' ENABLED');
                                var h = Jg().defineOutOfPageSlot('/6499/example/' + g.gb.toLowerCase(), g.Vb);
                                h && (h.addService(Jg().pubads()), Hh(a.document, kc(790, function () {
                                    Jg().enableServices();
                                    Jg().display(h);
                                    x(b, 4) && Jg().pubads().refresh([h]);
                                })));
                            };
                        }(d));
            };
            Jh = function (a) {
                var b = function () {
                    return a.Reflect.construct(a.HTMLElement, [], this.constructor);
                };
                b.prototype = a.HTMLElement.prototype;
                b.prototype.constructor = b;
                _.r(Object, 'setPrototypeOf').call(Object, b, a.HTMLElement);
                return b;
            };
            Th = function () {
                var a = window;
                var b = void 0 === b ? Fd : b;
                var c;
                if (a.customElements && null !== (c = a.Reflect) && void 0 !== c && c.construct && !a.customElements.get('google-product-ad')) {
                    var d = Jh(a), e = function () {
                            return d.apply(this, arguments) || this;
                        };
                    _.N(e, d);
                    e.prototype.connectedCallback = function () {
                        var f = this.dataset.rendering;
                        if (f) {
                            try {
                                var g = Kh(Lh, Mh(f));
                            } catch (k) {
                            }
                            if (null === g || void 0 === g ? 0 : xf(g, 1)) {
                                f = Nh(Oh(Fb(new Ph(), 4, 1), 7), Pb());
                                g = M(g, Qh, 1);
                                var h = g = Db(f, 5, g);
                            } else
                                Cc().error(Rh('invalid data-rendering attribute'));
                        } else
                            Cc().error(Rh('missing data-rendering attribute'));
                        (g = h) && b(Sh(window, g));
                    };
                    a.customElements.define('google-product-ad', e);
                }
            };
            Uh = function (a) {
                var b = 0;
                return function () {
                    return b < a.length ? {
                        done: !1,
                        value: a[b++]
                    } : { done: !0 };
                };
            };
            Vh = 'function' == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
                if (a == Array.prototype || a == Object.prototype)
                    return a;
                a[b] = c.value;
                return a;
            };
            Wh = function (a) {
                a = [
                    'object' == typeof globalThis && globalThis,
                    a,
                    'object' == typeof window && window,
                    'object' == typeof self && self,
                    'object' == typeof global && global
                ];
                for (var b = 0; b < a.length; ++b) {
                    var c = a[b];
                    if (c && c.Math == Math)
                        return c;
                }
                throw Error('Cannot find global object');
            };
            Xh = Wh(this);
            Yh = 'function' === typeof Symbol && 'symbol' === typeof Symbol('x');
            D = {};
            Zh = {};
            _.r = function (a, b) {
                var c = Zh[b];
                if (null == c)
                    return a[b];
                c = a[c];
                return void 0 !== c ? c : a[b];
            };
            $h = function (a, b, c) {
                if (b)
                    a: {
                        var d = a.split('.');
                        a = 1 === d.length;
                        var e = d[0], f;
                        !a && e in D ? f = D : f = Xh;
                        for (e = 0; e < d.length - 1; e++) {
                            var g = d[e];
                            if (!(g in f))
                                break a;
                            f = f[g];
                        }
                        d = d[d.length - 1];
                        c = Yh && 'es6' === c ? f[d] : null;
                        b = b(c);
                        null != b && (a ? Vh(D, d, {
                            configurable: !0,
                            writable: !0,
                            value: b
                        }) : b !== c && (void 0 === Zh[d] && (a = 1000000000 * Math.random() >>> 0, Zh[d] = Yh ? Xh.Symbol(d) : '$jscp$' + a + '$' + d), Vh(f, Zh[d], {
                            configurable: !0,
                            writable: !0,
                            value: b
                        })));
                    }
            };
            $h('Symbol', function (a) {
                if (a)
                    return a;
                var b = function (f, g) {
                    this.j = f;
                    Vh(this, 'description', {
                        configurable: !0,
                        writable: !0,
                        value: g
                    });
                };
                b.prototype.toString = function () {
                    return this.j;
                };
                var c = 'jscomp_symbol_' + (1000000000 * Math.random() >>> 0) + '_', d = 0, e = function (f) {
                        if (this instanceof e)
                            throw new TypeError('Symbol is not a constructor');
                        return new b(c + (f || '') + '_' + d++, f);
                    };
                return e;
            }, 'es6');
            $h('Symbol.iterator', function (a) {
                if (a)
                    return a;
                a = (0, D.Symbol)('Symbol.iterator');
                for (var b = 'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(' '), c = 0; c < b.length; c++) {
                    var d = Xh[b[c]];
                    'function' === typeof d && 'function' != typeof d.prototype[a] && Vh(d.prototype, a, {
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return ai(Uh(this));
                        }
                    });
                }
                return a;
            }, 'es6');
            ai = function (a) {
                a = { next: a };
                a[_.r(D.Symbol, 'iterator')] = function () {
                    return this;
                };
                return a;
            };
            bi = function (a) {
                return a.raw = a;
            };
            _.G = function (a) {
                var b = 'undefined' != typeof D.Symbol && _.r(D.Symbol, 'iterator') && a[_.r(D.Symbol, 'iterator')];
                return b ? b.call(a) : { next: Uh(a) };
            };
            ag = function (a) {
                for (var b, c = []; !(b = a.next()).done;)
                    c.push(b.value);
                return c;
            };
            _.ec = function (a) {
                return a instanceof Array ? a : ag(_.G(a));
            };
            ci = 'function' == typeof Object.create ? Object.create : function (a) {
                var b = function () {
                };
                b.prototype = a;
                return new b();
            };
            di = function () {
                function a() {
                    function c() {
                    }
                    new c();
                    _.r(D.Reflect, 'construct').call(D.Reflect, c, [], function () {
                    });
                    return new c() instanceof c;
                }
                if (Yh && 'undefined' != typeof D.Reflect && _.r(D.Reflect, 'construct')) {
                    if (a())
                        return _.r(D.Reflect, 'construct');
                    var b = _.r(D.Reflect, 'construct');
                    return function (c, d, e) {
                        c = b(c, d);
                        e && _.r(D.Reflect, 'setPrototypeOf').call(D.Reflect, c, e.prototype);
                        return c;
                    };
                }
                return function (c, d, e) {
                    void 0 === e && (e = c);
                    e = ci(e.prototype || Object.prototype);
                    return Function.prototype.apply.call(c, e, d) || e;
                };
            }();
            if (Yh && 'function' == typeof _.r(Object, 'setPrototypeOf'))
                ei = _.r(Object, 'setPrototypeOf');
            else {
                var fi;
                a: {
                    var gi = { a: !0 }, hi = {};
                    try {
                        hi.__proto__ = gi;
                        fi = hi.a;
                        break a;
                    } catch (a) {
                    }
                    fi = !1;
                }
                ei = fi ? function (a, b) {
                    a.__proto__ = b;
                    if (a.__proto__ !== b)
                        throw new TypeError(a + ' is not extensible');
                    return a;
                } : null;
            }
            ii = ei;
            _.N = function (a, b) {
                a.prototype = ci(b.prototype);
                a.prototype.constructor = a;
                if (ii)
                    ii(a, b);
                else
                    for (var c in b)
                        if ('prototype' != c)
                            if (Object.defineProperties) {
                                var d = Object.getOwnPropertyDescriptor(b, c);
                                d && Object.defineProperty(a, c, d);
                            } else
                                a[c] = b[c];
                a.df = b.prototype;
            };
            ji = function () {
                this.D = !1;
                this.A = null;
                this.l = void 0;
                this.j = 1;
                this.o = this.H = 0;
                this.m = null;
            };
            ki = function (a) {
                if (a.D)
                    throw new TypeError('Generator is already running');
                a.D = !0;
            };
            ji.prototype.G = function (a) {
                this.l = a;
            };
            var li = function (a, b) {
                a.m = {
                    Fc: b,
                    yd: !0
                };
                a.j = a.H || a.o;
            };
            ji.prototype.return = function (a) {
                this.m = { return: a };
                this.j = this.o;
            };
            var C = function (a, b, c) {
                    a.j = c;
                    return { value: b };
                }, mi = function (a) {
                    a.j = 0;
                }, Ad = function (a, b) {
                    a.j = b;
                    a.H = 0;
                }, Bd = function (a) {
                    a.H = 0;
                    var b = a.m.Fc;
                    a.m = null;
                    return b;
                }, ni = function (a) {
                    this.j = new ji();
                    this.l = a;
                }, qi = function (a, b) {
                    ki(a.j);
                    var c = a.j.A;
                    if (c)
                        return oi(a, 'return' in c ? c['return'] : function (d) {
                            return {
                                value: d,
                                done: !0
                            };
                        }, b, a.j.return);
                    a.j.return(b);
                    return pi(a);
                }, oi = function (a, b, c, d) {
                    try {
                        var e = b.call(a.j.A, c);
                        if (!(e instanceof Object))
                            throw new TypeError('Iterator result ' + e + ' is not an object');
                        if (!e.done)
                            return a.j.D = !1, e;
                        var f = e.value;
                    } catch (g) {
                        return a.j.A = null, li(a.j, g), pi(a);
                    }
                    a.j.A = null;
                    d.call(a.j, f);
                    return pi(a);
                }, pi = function (a) {
                    for (; a.j.j;)
                        try {
                            var b = a.l(a.j);
                            if (b)
                                return a.j.D = !1, {
                                    value: b.value,
                                    done: !1
                                };
                        } catch (c) {
                            a.j.l = void 0, li(a.j, c);
                        }
                    a.j.D = !1;
                    if (a.j.m) {
                        b = a.j.m;
                        a.j.m = null;
                        if (b.yd)
                            throw b.Fc;
                        return {
                            value: b.return,
                            done: !0
                        };
                    }
                    return {
                        value: void 0,
                        done: !0
                    };
                }, ri = function (a) {
                    this.next = function (b) {
                        ki(a.j);
                        a.j.A ? b = oi(a, a.j.A.next, b, a.j.G) : (a.j.G(b), b = pi(a));
                        return b;
                    };
                    this.throw = function (b) {
                        ki(a.j);
                        a.j.A ? b = oi(a, a.j.A['throw'], b, a.j.G) : (li(a.j, b), b = pi(a));
                        return b;
                    };
                    this.return = function (b) {
                        return qi(a, b);
                    };
                    this[_.r(D.Symbol, 'iterator')] = function () {
                        return this;
                    };
                }, B = function (a, b) {
                    b = new ri(new ni(b));
                    ii && a.prototype && ii(b, a.prototype);
                    return b;
                }, si = function (a) {
                    function b(d) {
                        return a.next(d);
                    }
                    function c(d) {
                        return a.throw(d);
                    }
                    return new D.Promise(function (d, e) {
                        function f(g) {
                            g.done ? d(g.value) : D.Promise.resolve(g.value).then(b, c).then(f, e);
                        }
                        f(a.next());
                    });
                }, ti = function (a) {
                    return si(new ri(new ni(a)));
                };
            $h('Reflect', function (a) {
                return a ? a : {};
            }, 'es6');
            $h('Reflect.construct', function () {
                return di;
            }, 'es6');
            $h('Reflect.setPrototypeOf', function (a) {
                return a ? a : ii ? function (b, c) {
                    try {
                        return ii(b, c), !0;
                    } catch (d) {
                        return !1;
                    }
                } : null;
            }, 'es6');
            $h('Promise', function (a) {
                function b() {
                    this.j = null;
                }
                function c(g) {
                    return g instanceof e ? g : new e(function (h) {
                        h(g);
                    });
                }
                if (a)
                    return a;
                b.prototype.l = function (g) {
                    if (null == this.j) {
                        this.j = [];
                        var h = this;
                        this.A(function () {
                            h.H();
                        });
                    }
                    this.j.push(g);
                };
                var d = Xh.setTimeout;
                b.prototype.A = function (g) {
                    d(g, 0);
                };
                b.prototype.H = function () {
                    for (; this.j && this.j.length;) {
                        var g = this.j;
                        this.j = [];
                        for (var h = 0; h < g.length; ++h) {
                            var k = g[h];
                            g[h] = null;
                            try {
                                k();
                            } catch (l) {
                                this.m(l);
                            }
                        }
                    }
                    this.j = null;
                };
                b.prototype.m = function (g) {
                    this.A(function () {
                        throw g;
                    });
                };
                var e = function (g) {
                    this.l = 0;
                    this.A = void 0;
                    this.j = [];
                    this.G = !1;
                    var h = this.m();
                    try {
                        g(h.resolve, h.reject);
                    } catch (k) {
                        h.reject(k);
                    }
                };
                e.prototype.m = function () {
                    function g(l) {
                        return function (m) {
                            k || (k = !0, l.call(h, m));
                        };
                    }
                    var h = this, k = !1;
                    return {
                        resolve: g(this.I),
                        reject: g(this.H)
                    };
                };
                e.prototype.I = function (g) {
                    if (g === this)
                        this.H(new TypeError('A Promise cannot resolve to itself'));
                    else if (g instanceof e)
                        this.K(g);
                    else {
                        a:
                            switch (typeof g) {
                            case 'object':
                                var h = null != g;
                                break a;
                            case 'function':
                                h = !0;
                                break a;
                            default:
                                h = !1;
                            }
                        h ? this.fa(g) : this.D(g);
                    }
                };
                e.prototype.fa = function (g) {
                    var h = void 0;
                    try {
                        h = g.then;
                    } catch (k) {
                        this.H(k);
                        return;
                    }
                    'function' == typeof h ? this.O(h, g) : this.D(g);
                };
                e.prototype.H = function (g) {
                    this.o(2, g);
                };
                e.prototype.D = function (g) {
                    this.o(1, g);
                };
                e.prototype.o = function (g, h) {
                    if (0 != this.l)
                        throw Error('Cannot settle(' + g + ', ' + h + '): Promise already settled in state' + this.l);
                    this.l = g;
                    this.A = h;
                    2 === this.l && this.V();
                    this.B();
                };
                e.prototype.V = function () {
                    var g = this;
                    d(function () {
                        if (g.F()) {
                            var h = Xh.console;
                            'undefined' !== typeof h && h.error(g.A);
                        }
                    }, 1);
                };
                e.prototype.F = function () {
                    if (this.G)
                        return !1;
                    var g = Xh.CustomEvent, h = Xh.Event, k = Xh.dispatchEvent;
                    if ('undefined' === typeof k)
                        return !0;
                    'function' === typeof g ? g = new g('unhandledrejection', { cancelable: !0 }) : 'function' === typeof h ? g = new h('unhandledrejection', { cancelable: !0 }) : (g = Xh.document.createEvent('CustomEvent'), g.initCustomEvent('unhandledrejection', !1, !0, g));
                    g.promise = this;
                    g.reason = this.A;
                    return k(g);
                };
                e.prototype.B = function () {
                    if (null != this.j) {
                        for (var g = 0; g < this.j.length; ++g)
                            f.l(this.j[g]);
                        this.j = null;
                    }
                };
                var f = new b();
                e.prototype.K = function (g) {
                    var h = this.m();
                    g.Db(h.resolve, h.reject);
                };
                e.prototype.O = function (g, h) {
                    var k = this.m();
                    try {
                        g.call(h, k.resolve, k.reject);
                    } catch (l) {
                        k.reject(l);
                    }
                };
                e.prototype.then = function (g, h) {
                    function k(p, t) {
                        return 'function' == typeof p ? function (u) {
                            try {
                                l(p(u));
                            } catch (y) {
                                m(y);
                            }
                        } : t;
                    }
                    var l, m, n = new e(function (p, t) {
                            l = p;
                            m = t;
                        });
                    this.Db(k(g, l), k(h, m));
                    return n;
                };
                e.prototype.catch = function (g) {
                    return this.then(void 0, g);
                };
                e.prototype.Db = function (g, h) {
                    function k() {
                        switch (l.l) {
                        case 1:
                            g(l.A);
                            break;
                        case 2:
                            h(l.A);
                            break;
                        default:
                            throw Error('Unexpected state: ' + l.l);
                        }
                    }
                    var l = this;
                    null == this.j ? f.l(k) : this.j.push(k);
                    this.G = !0;
                };
                e.resolve = c;
                e.reject = function (g) {
                    return new e(function (h, k) {
                        k(g);
                    });
                };
                e.race = function (g) {
                    return new e(function (h, k) {
                        for (var l = _.G(g), m = l.next(); !m.done; m = l.next())
                            c(m.value).Db(h, k);
                    });
                };
                e.all = function (g) {
                    var h = _.G(g), k = h.next();
                    return k.done ? c([]) : new e(function (l, m) {
                        function n(u) {
                            return function (y) {
                                p[u] = y;
                                t--;
                                0 == t && l(p);
                            };
                        }
                        var p = [], t = 0;
                        do
                            p.push(void 0), t++, c(k.value).Db(n(p.length - 1), m), k = h.next();
                        while (!k.done);
                    });
                };
                return e;
            }, 'es6');
            $h('Object.setPrototypeOf', function (a) {
                return a || ii;
            }, 'es6');
            var ui = function (a, b) {
                    return Object.prototype.hasOwnProperty.call(a, b);
                }, vi = Yh && 'function' == typeof _.r(Object, 'assign') ? _.r(Object, 'assign') : function (a, b) {
                    for (var c = 1; c < arguments.length; c++) {
                        var d = arguments[c];
                        if (d)
                            for (var e in d)
                                ui(d, e) && (a[e] = d[e]);
                    }
                    return a;
                };
            $h('Object.assign', function (a) {
                return a || vi;
            }, 'es6');
            $h('WeakMap', function (a) {
                function b() {
                }
                function c(g) {
                    var h = typeof g;
                    return 'object' === h && null !== g || 'function' === h;
                }
                if (function () {
                        if (!a || !Object.seal)
                            return !1;
                        try {
                            var g = Object.seal({}), h = Object.seal({}), k = new a([
                                    [
                                        g,
                                        2
                                    ],
                                    [
                                        h,
                                        3
                                    ]
                                ]);
                            if (2 != k.get(g) || 3 != k.get(h))
                                return !1;
                            k.delete(g);
                            k.set(h, 4);
                            return !k.has(g) && 4 == k.get(h);
                        } catch (l) {
                            return !1;
                        }
                    }())
                    return a;
                var d = '$jscomp_hidden_' + Math.random(), e = 0, f = function (g) {
                        this.j = (e += Math.random() + 1).toString();
                        if (g) {
                            g = _.G(g);
                            for (var h; !(h = g.next()).done;)
                                h = h.value, this.set(h[0], h[1]);
                        }
                    };
                f.prototype.set = function (g, h) {
                    if (!c(g))
                        throw Error('Invalid WeakMap key');
                    if (!ui(g, d)) {
                        var k = new b();
                        Vh(g, d, { value: k });
                    }
                    if (!ui(g, d))
                        throw Error('WeakMap key fail: ' + g);
                    g[d][this.j] = h;
                    return this;
                };
                f.prototype.get = function (g) {
                    return c(g) && ui(g, d) ? g[d][this.j] : void 0;
                };
                f.prototype.has = function (g) {
                    return c(g) && ui(g, d) && ui(g[d], this.j);
                };
                f.prototype.delete = function (g) {
                    return c(g) && ui(g, d) && ui(g[d], this.j) ? delete g[d][this.j] : !1;
                };
                return f;
            }, 'es6');
            $h('Map', function (a) {
                if (function () {
                        if (!a || 'function' != typeof a || !_.r(a.prototype, 'entries') || 'function' != typeof Object.seal)
                            return !1;
                        try {
                            var h = Object.seal({ x: 4 }), k = new a(_.G([[
                                        h,
                                        's'
                                    ]]));
                            if ('s' != k.get(h) || 1 != k.size || k.get({ x: 4 }) || k.set({ x: 4 }, 't') != k || 2 != k.size)
                                return !1;
                            var l = _.r(k, 'entries').call(k), m = l.next();
                            if (m.done || m.value[0] != h || 's' != m.value[1])
                                return !1;
                            m = l.next();
                            return m.done || 4 != m.value[0].x || 't' != m.value[1] || !l.next().done ? !1 : !0;
                        } catch (n) {
                            return !1;
                        }
                    }())
                    return a;
                var b = new D.WeakMap(), c = function (h) {
                        this.l = {};
                        this.j = f();
                        this.size = 0;
                        if (h) {
                            h = _.G(h);
                            for (var k; !(k = h.next()).done;)
                                k = k.value, this.set(k[0], k[1]);
                        }
                    };
                c.prototype.set = function (h, k) {
                    h = 0 === h ? 0 : h;
                    var l = d(this, h);
                    l.list || (l.list = this.l[l.id] = []);
                    l.pa ? l.pa.value = k : (l.pa = {
                        next: this.j,
                        Qa: this.j.Qa,
                        head: this.j,
                        key: h,
                        value: k
                    }, l.list.push(l.pa), this.j.Qa.next = l.pa, this.j.Qa = l.pa, this.size++);
                    return this;
                };
                c.prototype.delete = function (h) {
                    h = d(this, h);
                    return h.pa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.l[h.id], h.pa.Qa.next = h.pa.next, h.pa.next.Qa = h.pa.Qa, h.pa.head = null, this.size--, !0) : !1;
                };
                c.prototype.clear = function () {
                    this.l = {};
                    this.j = this.j.Qa = f();
                    this.size = 0;
                };
                c.prototype.has = function (h) {
                    return !!d(this, h).pa;
                };
                c.prototype.get = function (h) {
                    return (h = d(this, h).pa) && h.value;
                };
                c.prototype.entries = function () {
                    return e(this, function (h) {
                        return [
                            h.key,
                            h.value
                        ];
                    });
                };
                c.prototype.keys = function () {
                    return e(this, function (h) {
                        return h.key;
                    });
                };
                c.prototype.values = function () {
                    return e(this, function (h) {
                        return h.value;
                    });
                };
                c.prototype.forEach = function (h, k) {
                    for (var l = _.r(this, 'entries').call(this), m; !(m = l.next()).done;)
                        m = m.value, h.call(k, m[1], m[0], this);
                };
                c.prototype[_.r(D.Symbol, 'iterator')] = _.r(c.prototype, 'entries');
                var d = function (h, k) {
                        var l = k && typeof k;
                        'object' == l || 'function' == l ? b.has(k) ? l = b.get(k) : (l = '' + ++g, b.set(k, l)) : l = 'p_' + k;
                        var m = h.l[l];
                        if (m && ui(h.l, l))
                            for (h = 0; h < m.length; h++) {
                                var n = m[h];
                                if (k !== k && n.key !== n.key || k === n.key)
                                    return {
                                        id: l,
                                        list: m,
                                        index: h,
                                        pa: n
                                    };
                            }
                        return {
                            id: l,
                            list: m,
                            index: -1,
                            pa: void 0
                        };
                    }, e = function (h, k) {
                        var l = h.j;
                        return ai(function () {
                            if (l) {
                                for (; l.head != h.j;)
                                    l = l.Qa;
                                for (; l.next != l.head;)
                                    return l = l.next, {
                                        done: !1,
                                        value: k(l)
                                    };
                                l = null;
                            }
                            return {
                                done: !0,
                                value: void 0
                            };
                        });
                    }, f = function () {
                        var h = {};
                        return h.Qa = h.next = h.head = h;
                    }, g = 0;
                return c;
            }, 'es6');
            var wi = function (a, b, c) {
                if (null == a)
                    throw new TypeError('The \'this\' value for String.prototype.' + c + ' must not be null or undefined');
                if (b instanceof RegExp)
                    throw new TypeError('First argument to String.prototype.' + c + ' must not be a regular expression');
                return a + '';
            };
            $h('String.prototype.endsWith', function (a) {
                return a ? a : function (b, c) {
                    var d = wi(this, b, 'endsWith');
                    void 0 === c && (c = d.length);
                    c = Math.max(0, Math.min(c | 0, d.length));
                    for (var e = b.length; 0 < e && 0 < c;)
                        if (d[--c] != b[--e])
                            return !1;
                    return 0 >= e;
                };
            }, 'es6');
            var xi = function (a, b, c) {
                a instanceof String && (a = String(a));
                for (var d = a.length, e = 0; e < d; e++) {
                    var f = a[e];
                    if (b.call(c, f, e, a))
                        return {
                            i: e,
                            Zc: f
                        };
                }
                return {
                    i: -1,
                    Zc: void 0
                };
            };
            $h('Array.prototype.find', function (a) {
                return a ? a : function (b, c) {
                    return xi(this, b, c).Zc;
                };
            }, 'es6');
            $h('String.prototype.startsWith', function (a) {
                return a ? a : function (b, c) {
                    var d = wi(this, b, 'startsWith'), e = d.length, f = b.length;
                    c = Math.max(0, Math.min(c | 0, d.length));
                    for (var g = 0; g < f && c < e;)
                        if (d[c++] != b[g++])
                            return !1;
                    return g >= f;
                };
            }, 'es6');
            var yi = function (a, b) {
                a instanceof String && (a += '');
                var c = 0, d = !1, e = {
                        next: function () {
                            if (!d && c < a.length) {
                                var f = c++;
                                return {
                                    value: b(f, a[f]),
                                    done: !1
                                };
                            }
                            d = !0;
                            return {
                                done: !0,
                                value: void 0
                            };
                        }
                    };
                e[_.r(D.Symbol, 'iterator')] = function () {
                    return e;
                };
                return e;
            };
            $h('Array.prototype.entries', function (a) {
                return a ? a : function () {
                    return yi(this, function (b, c) {
                        return [
                            b,
                            c
                        ];
                    });
                };
            }, 'es6');
            $h('Array.prototype.findIndex', function (a) {
                return a ? a : function (b, c) {
                    return xi(this, b, c).i;
                };
            }, 'es6');
            $h('Object.entries', function (a) {
                return a ? a : function (b) {
                    var c = [], d;
                    for (d in b)
                        ui(b, d) && c.push([
                            d,
                            b[d]
                        ]);
                    return c;
                };
            }, 'es8');
            $h('Set', function (a) {
                if (function () {
                        if (!a || 'function' != typeof a || !_.r(a.prototype, 'entries') || 'function' != typeof Object.seal)
                            return !1;
                        try {
                            var c = Object.seal({ x: 4 }), d = new a(_.G([c]));
                            if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({ x: 4 }) != d || 2 != d.size)
                                return !1;
                            var e = _.r(d, 'entries').call(d), f = e.next();
                            if (f.done || f.value[0] != c || f.value[1] != c)
                                return !1;
                            f = e.next();
                            return f.done || f.value[0] == c || 4 != f.value[0].x || f.value[1] != f.value[0] ? !1 : e.next().done;
                        } catch (g) {
                            return !1;
                        }
                    }())
                    return a;
                var b = function (c) {
                    this.j = new D.Map();
                    if (c) {
                        c = _.G(c);
                        for (var d; !(d = c.next()).done;)
                            this.add(d.value);
                    }
                    this.size = this.j.size;
                };
                b.prototype.add = function (c) {
                    c = 0 === c ? 0 : c;
                    this.j.set(c, c);
                    this.size = this.j.size;
                    return this;
                };
                b.prototype.delete = function (c) {
                    c = this.j.delete(c);
                    this.size = this.j.size;
                    return c;
                };
                b.prototype.clear = function () {
                    this.j.clear();
                    this.size = 0;
                };
                b.prototype.has = function (c) {
                    return this.j.has(c);
                };
                b.prototype.entries = function () {
                    return _.r(this.j, 'entries').call(this.j);
                };
                b.prototype.values = function () {
                    return _.r(this.j, 'values').call(this.j);
                };
                b.prototype.keys = _.r(b.prototype, 'values');
                b.prototype[_.r(D.Symbol, 'iterator')] = _.r(b.prototype, 'values');
                b.prototype.forEach = function (c, d) {
                    var e = this;
                    this.j.forEach(function (f) {
                        return c.call(d, f, f, e);
                    });
                };
                return b;
            }, 'es6');
            $h('Array.from', function (a) {
                return a ? a : function (b, c, d) {
                    c = null != c ? c : function (h) {
                        return h;
                    };
                    var e = [], f = 'undefined' != typeof D.Symbol && _.r(D.Symbol, 'iterator') && b[_.r(D.Symbol, 'iterator')];
                    if ('function' == typeof f) {
                        b = f.call(b);
                        for (var g = 0; !(f = b.next()).done;)
                            e.push(c.call(d, f.value, g++));
                    } else
                        for (f = b.length, g = 0; g < f; g++)
                            e.push(c.call(d, b[g], g));
                    return e;
                };
            }, 'es6');
            $h('Number.isFinite', function (a) {
                return a ? a : function (b) {
                    return 'number' !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
                };
            }, 'es6');
            $h('Array.prototype.keys', function (a) {
                return a ? a : function () {
                    return yi(this, function (b) {
                        return b;
                    });
                };
            }, 'es6');
            $h('Array.prototype.values', function (a) {
                return a ? a : function () {
                    return yi(this, function (b, c) {
                        return c;
                    });
                };
            }, 'es8');
            $h('Object.is', function (a) {
                return a ? a : function (b, c) {
                    return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
                };
            }, 'es6');
            $h('Array.prototype.includes', function (a) {
                return a ? a : function (b, c) {
                    var d = this;
                    d instanceof String && (d = String(d));
                    var e = d.length;
                    c = c || 0;
                    for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                        var f = d[c];
                        if (f === b || _.r(Object, 'is').call(Object, f, b))
                            return !0;
                    }
                    return !1;
                };
            }, 'es7');
            $h('String.prototype.includes', function (a) {
                return a ? a : function (b, c) {
                    return -1 !== wi(this, b, 'includes').indexOf(b, c || 0);
                };
            }, 'es6');
            $h('Number.isInteger', function (a) {
                return a ? a : function (b) {
                    return _.r(Number, 'isFinite').call(Number, b) ? b === Math.floor(b) : !1;
                };
            }, 'es6');
            $h('Object.values', function (a) {
                return a ? a : function (b) {
                    var c = [], d;
                    for (d in b)
                        ui(b, d) && c.push(b[d]);
                    return c;
                };
            }, 'es8');
            $h('Number.isNaN', function (a) {
                return a ? a : function (b) {
                    return 'number' === typeof b && isNaN(b);
                };
            }, 'es6');
            _.F = this || self;
            zi = function () {
            };
            Ai = function (a) {
                a.Da = void 0;
                a.N = function () {
                    return a.Da ? a.Da : a.Da = new a();
                };
            };
            qa = function (a) {
                var b = typeof a;
                b = 'object' != b ? b : a ? Array.isArray(a) ? 'array' : b : 'null';
                return 'array' == b || 'object' == b && 'number' == typeof a.length;
            };
            _.ia = function (a) {
                var b = typeof a;
                return 'object' == b && null != a || 'function' == b;
            };
            ka = function (a) {
                return Object.prototype.hasOwnProperty.call(a, Bi) && a[Bi] || (a[Bi] = ++Ci);
            };
            Bi = 'closure_uid_' + (1000000000 * Math.random() >>> 0);
            Ci = 0;
            Di = function (a, b, c) {
                return a.call.apply(a.bind, arguments);
            };
            Ei = function (a, b, c) {
                if (!a)
                    throw Error();
                if (2 < arguments.length) {
                    var d = Array.prototype.slice.call(arguments, 2);
                    return function () {
                        var e = Array.prototype.slice.call(arguments);
                        Array.prototype.unshift.apply(e, d);
                        return a.apply(b, e);
                    };
                }
                return function () {
                    return a.apply(b, arguments);
                };
            };
            _.Fi = function (a, b, c) {
                Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code') ? _.Fi = Di : _.Fi = Ei;
                return _.Fi.apply(null, arguments);
            };
            _.Gi = function (a, b) {
                var c = Array.prototype.slice.call(arguments, 1);
                return function () {
                    var d = c.slice();
                    d.push.apply(d, arguments);
                    return a.apply(this, d);
                };
            };
            Lf = function () {
                return Date.now();
            };
            var A = function (a, b) {
                var c = void 0;
                return new (c || (c = D.Promise))(function (d, e) {
                    function f(k) {
                        try {
                            h(b.next(k));
                        } catch (l) {
                            e(l);
                        }
                    }
                    function g(k) {
                        try {
                            h(b['throw'](k));
                        } catch (l) {
                            e(l);
                        }
                    }
                    function h(k) {
                        k.done ? d(k.value) : new c(function (l) {
                            l(k.value);
                        }).then(f, g);
                    }
                    h((b = b.apply(a, void 0)).next());
                });
            };
            var Hi;
            var Ii, Ji, Ki, Wc, Mi;
            Ii = function () {
                return !0;
            };
            Ji = function () {
                return null;
            };
            Ki = function (a) {
                return function () {
                    return !a.apply(this, arguments);
                };
            };
            Wc = function (a) {
                var b = !1, c;
                return function () {
                    b || (c = a(), b = !0);
                    return c;
                };
            };
            _.Li = function (a) {
                var b = a;
                return function () {
                    if (b) {
                        var c = b;
                        b = null;
                        c();
                    }
                };
            };
            Mi = function (a, b, c) {
                var d = 0, e = !1, f = [], g = function () {
                        d = 0;
                        e && (e = !1, h());
                    }, h = function () {
                        d = _.F.setTimeout(g, b);
                        var k = f;
                        f = [];
                        a.apply(c, k);
                    };
                return function (k) {
                    f = arguments;
                    d ? e = !0 : h();
                };
            };
            var Oi;
            _.da = function (a, b) {
                return Array.prototype.indexOf.call(a, b, void 0);
            };
            _.Ni = function (a, b) {
                Array.prototype.forEach.call(a, b, void 0);
            };
            _.Ae = function (a, b) {
                return Array.prototype.filter.call(a, b, void 0);
            };
            _.ye = function (a, b) {
                return Array.prototype.map.call(a, b, void 0);
            };
            Oi = function (a, b) {
                return Array.prototype.reduce.call(a, b, 0);
            };
            _.Pi = function (a, b) {
                return Array.prototype.some.call(a, b, void 0);
            };
            var Aa = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(' ');
            var Si = function (a, b) {
                this.j = a === Qi && b || '';
                this.l = Ri;
            };
            Si.prototype.bb = !0;
            Si.prototype.$a = function () {
                return this.j;
            };
            var Ti = function (a) {
                    return a instanceof Si && a.constructor === Si && a.l === Ri ? a.j : 'type_error:Const';
                }, Ui = function (a) {
                    return new Si(Qi, a);
                }, Ri = {}, Qi = {};
            var Vi = {}, Wi = function (a, b) {
                    this.j = b === Vi ? a : '';
                    this.bb = !0;
                };
            Wi.prototype.$a = function () {
                return this.j.toString();
            };
            Wi.prototype.toString = function () {
                return this.j.toString();
            };
            var Yi = function (a, b) {
                this.j = b === Xi ? a : '';
            };
            Yi.prototype.bb = !0;
            Yi.prototype.$a = function () {
                return this.j.toString();
            };
            var cj = function (a, b) {
                a = Zi.exec($i(a));
                var c = a[3] || '';
                return aj(a[1] + bj('?', a[2] || '', b) + bj('#', c, void 0));
            };
            Yi.prototype.toString = function () {
                return this.j + '';
            };
            var $i = function (a) {
                    return db(a).toString();
                }, db = function (a) {
                    return a instanceof Yi && a.constructor === Yi ? a.j : 'type_error:TrustedResourceUrl';
                }, Dd = function (a, b) {
                    var c = Ti(a);
                    if (!dj.test(c))
                        throw Error('Invalid TrustedResourceUrl format: ' + c);
                    a = c.replace(ej, function (d, e) {
                        if (!Object.prototype.hasOwnProperty.call(b, e))
                            throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                        d = b[e];
                        return d instanceof Si ? Ti(d) : encodeURIComponent(String(d));
                    });
                    return aj(a);
                }, ej = /%{(\w+)}/g, dj = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i, Zi = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/, Xi = {}, aj = function (a) {
                    return new Yi(a, Xi);
                }, bj = function (a, b, c) {
                    if (null == c)
                        return b;
                    if ('string' === typeof c)
                        return c ? a + encodeURIComponent(c) : '';
                    for (var d in c)
                        if (Object.prototype.hasOwnProperty.call(c, d)) {
                            var e = c[d];
                            e = Array.isArray(e) ? e : [e];
                            for (var f = 0; f < e.length; f++) {
                                var g = e[f];
                                null != g && (b || (b = a), b += (b.length > a.length ? '&' : '') + encodeURIComponent(d) + '=' + encodeURIComponent(String(g)));
                            }
                        }
                    return b;
                };
            var fj = function (a, b) {
                    var c = a.length - b.length;
                    return 0 <= c && a.indexOf(b, c) == c;
                }, gj = function (a) {
                    return /^[\s\xa0]*$/.test(a);
                }, hj = function (a) {
                    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
                }, ij = /&/g, jj = /</g, kj = />/g, lj = /"/g, mj = /'/g, nj = /\x00/g, oj = /[\x00&<>"']/, Ag = function (a, b) {
                    var c = 0;
                    a = hj(String(a)).split('.');
                    b = hj(String(b)).split('.');
                    for (var d = Math.max(a.length, b.length), e = 0; 0 == c && e < d; e++) {
                        var f = a[e] || '', g = b[e] || '';
                        do {
                            f = /(\d*)(\D*)(.*)/.exec(f) || [
                                '',
                                '',
                                '',
                                ''
                            ];
                            g = /(\d*)(\D*)(.*)/.exec(g) || [
                                '',
                                '',
                                '',
                                ''
                            ];
                            if (0 == f[0].length && 0 == g[0].length)
                                break;
                            c = pj(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || pj(0 == f[2].length, 0 == g[2].length) || pj(f[2], g[2]);
                            f = f[3];
                            g = g[3];
                        } while (0 == c);
                    }
                    return c;
                }, pj = function (a, b) {
                    return a < b ? -1 : a > b ? 1 : 0;
                };
            var rj = function (a, b) {
                    this.j = b === qj ? a : '';
                }, tj, qj;
            rj.prototype.bb = !0;
            rj.prototype.$a = function () {
                return this.j.toString();
            };
            rj.prototype.toString = function () {
                return this.j.toString();
            };
            _.sj = function (a) {
                return a instanceof rj && a.constructor === rj ? a.j : 'type_error:SafeUrl';
            };
            tj = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
            qj = {};
            var uj;
            a: {
                var vj = _.F.navigator;
                if (vj) {
                    var wj = vj.userAgent;
                    if (wj) {
                        uj = wj;
                        break a;
                    }
                }
                uj = '';
            }
            var xj = function (a) {
                    return -1 != uj.indexOf(a);
                }, yj = function (a) {
                    for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);)
                        c.push([
                            d[1],
                            d[2],
                            d[3] || void 0
                        ]);
                    return c;
                };
            var zj = function () {
                    return xj('Trident') || xj('MSIE');
                }, Cg = function () {
                    return xj('Firefox') || xj('FxiOS');
                }, zg = function () {
                    return xj('Safari') && !(Aj() || xj('Coast') || xj('Opera') || xj('Edge') || xj('Edg/') || xj('OPR') || Cg() || xj('Silk') || xj('Android'));
                }, Aj = function () {
                    return (xj('Chrome') || xj('CriOS')) && !xj('Edge');
                }, Bg = function () {
                    function a(e) {
                        e = ca(e, d);
                        return c[e] || '';
                    }
                    var b = uj;
                    if (zj())
                        return Bj(b);
                    b = yj(b);
                    var c = {};
                    b.forEach(function (e) {
                        c[e[0]] = e[1];
                    });
                    var d = _.Gi(ya, c);
                    return xj('Opera') ? a([
                        'Version',
                        'Opera'
                    ]) : xj('Edge') ? a(['Edge']) : xj('Edg/') ? a(['Edg']) : Aj() ? a([
                        'Chrome',
                        'CriOS',
                        'HeadlessChrome'
                    ]) : (b = b[2]) && b[1] || '';
                }, Bj = function (a) {
                    var b = /rv: *([\d\.]*)/.exec(a);
                    if (b && b[1])
                        return b[1];
                    b = '';
                    var c = /MSIE +([\d\.]+)/.exec(a);
                    if (c && c[1])
                        if (a = /Trident\/(\d.\d)/.exec(a), '7.0' == c[1])
                            if (a && a[1])
                                switch (a[1]) {
                                case '4.0':
                                    b = '8.0';
                                    break;
                                case '5.0':
                                    b = '9.0';
                                    break;
                                case '6.0':
                                    b = '10.0';
                                    break;
                                case '7.0':
                                    b = '11.0';
                                }
                            else
                                b = '7.0';
                        else
                            b = c[1];
                    return b;
                };
            var Fj;
            _.Dj = function (a, b, c) {
                this.j = c === _.Cj ? a : '';
            };
            _.Dj.prototype.bb = !0;
            _.Dj.prototype.$a = function () {
                return this.j.toString();
            };
            _.Dj.prototype.toString = function () {
                return this.j.toString();
            };
            _.Ej = function (a) {
                return a instanceof _.Dj && a.constructor === _.Dj ? a.j : 'type_error:SafeHtml';
            };
            _.Cj = {};
            Fj = new _.Dj(_.F.trustedTypes && _.F.trustedTypes.emptyHTML || '', 0, _.Cj);
            var Hj, Jj, Kj, Ij;
            _.Gj = Wc(function () {
                var a = document.createElement('div'), b = document.createElement('div');
                b.appendChild(document.createElement('div'));
                a.appendChild(b);
                b = a.firstChild.firstChild;
                a.innerHTML = _.Ej(Fj);
                return !b.parentElement;
            });
            Hj = function (a, b) {
                a.write(_.Ej(b));
            };
            Jj = function (a, b, c) {
                a.rel = c;
                -1 != c.toLowerCase().indexOf('stylesheet') ? (a.href = $i(b), (b = Ij('style[nonce],link[rel="stylesheet"][nonce]', a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute('nonce', b)) : (b instanceof Yi ? b = $i(b) : b instanceof rj ? b = _.sj(b) : (b instanceof rj || (b = 'object' == typeof b && b.bb ? b.$a() : String(b), tj.test(b) || (b = 'about:invalid#zClosurez'), b = new rj(b, qj)), b = _.sj(b)), a.href = b);
            };
            Kj = /^[\w+/_-]+[=]{0,2}$/;
            Ij = function (a, b) {
                b = (b || _.F).document;
                return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute('nonce')) && Kj.test(a) ? a : '' : '';
            };
            var Lj, Mj, Nj, Oj, Pj, Rj;
            Lj = function (a) {
                oj.test(a) && (-1 != a.indexOf('&') && (a = a.replace(ij, '&amp;')), -1 != a.indexOf('<') && (a = a.replace(jj, '&lt;')), -1 != a.indexOf('>') && (a = a.replace(kj, '&gt;')), -1 != a.indexOf('"') && (a = a.replace(lj, '&quot;')), -1 != a.indexOf('\'') && (a = a.replace(mj, '&#39;')), -1 != a.indexOf('\0') && (a = a.replace(nj, '&#0;')));
                return a;
            };
            Mj = String.prototype.repeat ? function (a, b) {
                return a.repeat(b);
            } : function (a, b) {
                return Array(b + 1).join(a);
            };
            Nj = function (a) {
                a = String(a);
                var b = a.indexOf('.');
                -1 == b && (b = a.length);
                return Mj('0', Math.max(0, 2 - b)) + a;
            };
            Oj = function () {
                return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Lf()).toString(36);
            };
            Pj = 2147483648 * Math.random() | 0;
            _.Qj = function (a) {
                return String(a).replace(/\-([a-z])/g, function (b, c) {
                    return c.toUpperCase();
                });
            };
            Rj = function (a) {
                return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
                    return c + d.toUpperCase();
                });
            };
            var Sj = 'function' === typeof Uint8Array.prototype.slice, Ca = 0, Da = 0;
            var Tj = function () {
                this.j = new Uint8Array(64);
                this.l = 0;
            };
            Tj.prototype.push = function (a) {
                if (!(this.l + 1 < this.j.length)) {
                    var b = this.j;
                    this.j = new Uint8Array(Math.ceil(1 + 2 * this.j.length));
                    this.j.set(b);
                }
                this.j[this.l++] = a;
            };
            Tj.prototype.length = function () {
                return this.l;
            };
            Tj.prototype.end = function () {
                var a = this.j, b = this.l;
                this.l = 0;
                return Sj ? a.slice(0, b) : new Uint8Array(a.subarray(0, b));
            };
            var Uj = function (a) {
                    for (var b = Ca, c = Da; 0 < c || 127 < b;)
                        a.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
                    a.push(b);
                }, Vj = function (a, b) {
                    for (; 127 < b;)
                        a.push(b & 127 | 128), b >>>= 7;
                    a.push(b);
                }, Wj = function (a, b) {
                    if (0 <= b)
                        Vj(a, b);
                    else {
                        for (var c = 0; 9 > c; c++)
                            a.push(b & 127 | 128), b >>= 7;
                        a.push(1);
                    }
                };
            var Xj = function () {
                return xj('iPhone') && !xj('iPod') && !xj('iPad');
            };
            var Yj = function (a) {
                Yj[' '](a);
                return a;
            };
            Yj[' '] = zi;
            var Zj = function (a, b) {
                    try {
                        return Yj(a[b]), !0;
                    } catch (c) {
                    }
                    return !1;
                }, cg = function (a, b, c, d) {
                    d = d ? d(b) : b;
                    return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b);
                };
            var ak, ck, dk, ek, fk, gk, hk, ik, jk, kk, lk, mk;
            ak = xj('Opera');
            _.bk = zj();
            ck = xj('Edge');
            dk = ck || _.bk;
            ek = xj('Gecko') && !(-1 != uj.toLowerCase().indexOf('webkit') && !xj('Edge')) && !(xj('Trident') || xj('MSIE')) && !xj('Edge');
            fk = -1 != uj.toLowerCase().indexOf('webkit') && !xj('Edge');
            gk = fk && xj('Mobile');
            hk = xj('Android');
            ik = Xj();
            jk = xj('iPad');
            kk = xj('iPod');
            lk = function () {
                var a = _.F.document;
                return a ? a.documentMode : void 0;
            };
            a: {
                var nk = '', ok = function () {
                        var a = uj;
                        if (ek)
                            return /rv:([^\);]+)(\)|;)/.exec(a);
                        if (ck)
                            return /Edge\/([\d\.]+)/.exec(a);
                        if (_.bk)
                            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                        if (fk)
                            return /WebKit\/(\S+)/.exec(a);
                        if (ak)
                            return /(?:Version)[ \/]?(\S+)/.exec(a);
                    }();
                ok && (nk = ok ? ok[1] : '');
                if (_.bk) {
                    var pk = lk();
                    if (null != pk && pk > parseFloat(nk)) {
                        mk = String(pk);
                        break a;
                    }
                }
                mk = nk;
            }
            var qk = mk, rk = {}, sk = function (a) {
                    return cg(rk, a, function () {
                        return 0 <= Ag(qk, a);
                    });
                }, tk;
            if (_.F.document && _.bk) {
                var uk = lk();
                tk = uk ? uk : parseInt(qk, 10) || void 0;
            } else
                tk = void 0;
            var vk = tk;
            var wk = Aj(), xk = zg() && !(Xj() || xj('iPad') || xj('iPod'));
            var yk = {}, zk = null, Ak = ek || fk && !xk || ak || 'function' == typeof _.F.btoa, Ka = function (a, b) {
                    void 0 === b && (b = 0);
                    Bk();
                    b = yk[b];
                    for (var c = Array(Math.floor(a.length / 3)), d = b[64] || '', e = 0, f = 0; e < a.length - 2; e += 3) {
                        var g = a[e], h = a[e + 1], k = a[e + 2], l = b[g >> 2];
                        g = b[(g & 3) << 4 | h >> 4];
                        h = b[(h & 15) << 2 | k >> 6];
                        k = b[k & 63];
                        c[f++] = l + g + h + k;
                    }
                    l = 0;
                    k = d;
                    switch (a.length - e) {
                    case 2:
                        l = a[e + 1], k = b[(l & 15) << 2] || d;
                    case 1:
                        a = a[e], c[f] = b[a >> 2] + b[(a & 3) << 4 | l >> 4] + k + d;
                    }
                    return c.join('');
                }, Ck = function (a, b) {
                    if (Ak && !b)
                        a = _.F.btoa(a);
                    else {
                        for (var c = [], d = 0, e = 0; e < a.length; e++) {
                            var f = a.charCodeAt(e);
                            255 < f && (c[d++] = f & 255, f >>= 8);
                            c[d++] = f;
                        }
                        a = Ka(c, b);
                    }
                    return a;
                }, Mh = function (a) {
                    var b = '';
                    Dk(a, function (c) {
                        b += String.fromCharCode(c);
                    });
                    return b;
                }, Dk = function (a, b) {
                    function c(k) {
                        for (; d < a.length;) {
                            var l = a.charAt(d++), m = zk[l];
                            if (null != m)
                                return m;
                            if (!gj(l))
                                throw Error('Unknown base64 encoding at char: ' + l);
                        }
                        return k;
                    }
                    Bk();
                    for (var d = 0;;) {
                        var e = c(-1), f = c(0), g = c(64), h = c(64);
                        if (64 === h && -1 === e)
                            break;
                        b(e << 2 | f >> 4);
                        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h));
                    }
                }, Bk = function () {
                    if (!zk) {
                        zk = {};
                        for (var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''), b = [
                                    '+/=',
                                    '+/',
                                    '-_=',
                                    '-_.',
                                    '-_'
                                ], c = 0; 5 > c; c++) {
                            var d = a.concat(b[c].split(''));
                            yk[c] = d;
                            for (var e = 0; e < d.length; e++) {
                                var f = d[e];
                                void 0 === zk[f] && (zk[f] = e);
                            }
                        }
                    }
                };
            var Zd = function () {
                    this.A = [];
                    this.l = 0;
                    this.j = new Tj();
                }, Ek = function (a, b) {
                    Vj(a.j, 8 * b + 2);
                    b = a.j.end();
                    a.A.push(b);
                    a.l += b.length;
                    return {
                        Ed: a.l,
                        dd: a.A.length - 1
                    };
                }, Fk = function (a, b) {
                    var c = a.j.end();
                    a.A.push(c);
                    a.l += c.length;
                    Vj(a.j, a.l + a.j.length() - b.Ed);
                    c = a.j.end();
                    a.l += c.length;
                    a.A.splice(1 + b.dd, 0, c);
                }, ae = function (a) {
                    var b = a.l + a.j.length();
                    if (0 === b)
                        return new Uint8Array(0);
                    b = new Uint8Array(b);
                    for (var c = a.A, d = c.length, e = 0, f = 0; f < d; f++) {
                        var g = c[f];
                        0 !== g.length && (b.set(g, e), e += g.length);
                    }
                    c = a.j;
                    d = c.l;
                    0 !== d && (b.set(c.j.subarray(0, d), e), c.l = 0);
                    a.A = [b];
                    return b;
                }, Gk = function (a, b, c) {
                    null != c && (Vj(a.j, 8 * b), Wj(a.j, c));
                }, Hk = function (a, b, c) {
                    null != c && (Vj(a.j, 8 * b), a = a.j, Ea(c), Uj(a));
                }, Ik = function (a, b, c) {
                    null != c && null != c && (Vj(a.j, 8 * b), a = a.j, Ea(c), Uj(a));
                }, Jk = function (a, b, c) {
                    null != c && (c = parseInt(c, 10), Vj(a.j, 8 * b), Wj(a.j, c));
                }, Kk = function (a, b, c) {
                    if (null != c) {
                        b = Ek(a, b);
                        var d = a.j;
                        d.length();
                        for (var e = 0; e < c.length; e++) {
                            var f = c.charCodeAt(e);
                            if (128 > f)
                                d.push(f);
                            else if (2048 > f)
                                d.push(f >> 6 | 192), d.push(f & 63 | 128);
                            else if (65536 > f)
                                if (55296 <= f && 56319 >= f && e + 1 < c.length) {
                                    var g = c.charCodeAt(e + 1);
                                    56320 <= g && 57343 >= g && (f = 1024 * (f - 55296) + g - 56320 + 65536, d.push(f >> 18 | 240), d.push(f >> 12 & 63 | 128), d.push(f >> 6 & 63 | 128), d.push(f & 63 | 128), e++);
                                } else
                                    d.push(f >> 12 | 224), d.push(f >> 6 & 63 | 128), d.push(f & 63 | 128);
                        }
                        d.length();
                        Fk(a, b);
                    }
                }, Mk = function (a, b, c) {
                    var d = Lk;
                    null != c && (b = Ek(a, b), d(c, a), Fk(a, b));
                }, Nk = function (a, b, c, d) {
                    if (null != c)
                        for (var e = 0; e < c.length; e++) {
                            var f = Ek(a, b);
                            d(c[e], a);
                            Fk(a, f);
                        }
                };
            var Ha = 'function' === typeof Uint8Array, Ok = {
                    Bd: {
                        value: !0,
                        configurable: !0
                    }
                }, Ja = function (a) {
                    Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, Ok);
                    return a;
                };
            var Qk = function (a, b) {
                this.j = a;
                this.A = b;
                this.map = {};
                this.l = !0;
                if (0 < this.j.length) {
                    for (a = 0; a < this.j.length; a++) {
                        b = this.j[a];
                        var c = b[0];
                        this.map[c.toString()] = new Pk(c, b[1]);
                    }
                    this.l = !0;
                }
            };
            Qk.prototype.isFrozen = function () {
                return !1;
            };
            Qk.prototype.za = function () {
                return Rk(this);
            };
            Qk.prototype.Wc = function () {
                return Rk(this);
            };
            var Rk = function (a) {
                if (a.l) {
                    if (a.A) {
                        var b = a.map, c;
                        for (c in b)
                            if (Object.prototype.hasOwnProperty.call(b, c)) {
                                var d = b[c].j;
                                d && d.za();
                            }
                    }
                } else {
                    a.j.length = 0;
                    b = Sk(a);
                    b.sort();
                    for (c = 0; c < b.length; c++) {
                        var e = a.map[b[c]];
                        (d = e.j) && d.za();
                        a.j.push([
                            e.key,
                            e.value
                        ]);
                    }
                    a.l = !0;
                }
                return a.j;
            };
            aa = Qk.prototype;
            aa.entries = function () {
                var a = [], b = Sk(this);
                b.sort();
                for (var c = 0; c < b.length; c++) {
                    var d = this.map[b[c]];
                    a.push([
                        d.key,
                        Tk(this, d)
                    ]);
                }
                return new Uk(a);
            };
            aa.keys = function () {
                var a = [], b = Sk(this);
                b.sort();
                for (var c = 0; c < b.length; c++)
                    a.push(this.map[b[c]].key);
                return new Uk(a);
            };
            aa.values = function () {
                var a = [], b = Sk(this);
                b.sort();
                for (var c = 0; c < b.length; c++)
                    a.push(Tk(this, this.map[b[c]]));
                return new Uk(a);
            };
            aa.forEach = function (a, b) {
                var c = Sk(this);
                c.sort();
                for (var d = 0; d < c.length; d++) {
                    var e = this.map[c[d]];
                    a.call(b, Tk(this, e), e.key, this);
                }
            };
            aa.set = function (a, b) {
                var c = new Pk(a);
                this.A ? (c.j = b, c.value = b.Wc()) : c.value = b;
                this.map[a.toString()] = c;
                this.l = !1;
                return this;
            };
            var Tk = function (a, b) {
                return a.A ? (b.j || (b.j = new a.A(b.value), a.isFrozen() && null(b.j)), b.j) : b.value;
            };
            Qk.prototype.get = function (a) {
                if (a = this.map[a.toString()])
                    return Tk(this, a);
            };
            Qk.prototype.has = function (a) {
                return a.toString() in this.map;
            };
            var Sk = function (a) {
                a = a.map;
                var b = [], c;
                for (c in a)
                    Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
                return b;
            };
            Qk.prototype[_.r(D.Symbol, 'iterator')] = function () {
                return _.r(this, 'entries').call(this);
            };
            var Pk = function (a, b) {
                    this.key = a;
                    this.value = b;
                    this.j = void 0;
                }, Uk = function (a) {
                    this.l = 0;
                    this.j = a;
                };
            Uk.prototype.next = function () {
                return this.l < this.j.length ? {
                    done: !1,
                    value: this.j[this.l++]
                } : {
                    done: !0,
                    value: void 0
                };
            };
            Uk.prototype[_.r(D.Symbol, 'iterator')] = function () {
                return this;
            };
            var O = function () {
                }, Na, P = function (a, b, c, d) {
                    a.j = null;
                    Na && (b || (b = Na), Na = null);
                    var e = a.constructor.messageId;
                    b || (b = e ? [e] : []);
                    a.m = e ? 0 : -1;
                    a.l = b;
                    a: {
                        if (b = a.l.length)
                            if (--b, e = a.l[b], !(null === e || 'object' != typeof e || Array.isArray(e) || Ha && e instanceof Uint8Array)) {
                                a.H = b - a.m;
                                a.A = e;
                                break a;
                            }
                        a.H = Number.MAX_VALUE;
                    }
                    a.D = {};
                    if (c)
                        for (b = 0; b < c.length; b++)
                            if (e = c[b], e < a.H) {
                                e += a.m;
                                var f = a.l[e];
                                f ? Ja(f) : a.l[e] = Vk;
                            } else
                                Wk(a), (f = a.A[e]) ? Ja(f) : a.A[e] = Vk;
                    if (d && d.length)
                        for (c = 0; c < d.length; c++)
                            Xk(a, d[c]);
                }, Vk = Object.freeze(Ja([])), Wk = function (a) {
                    var b = a.H + a.m;
                    a.l[b] || (a.A = a.l[b] = {});
                }, H = function (a, b) {
                    if (b < a.H) {
                        b += a.m;
                        var c = a.l[b];
                        return c !== Vk ? c : a.l[b] = Ja([]);
                    }
                    if (a.A)
                        return c = a.A[b], c !== Vk ? c : a.A[b] = Ja([]);
                }, xf = function (a, b) {
                    return null != H(a, b);
                }, ee = function (a, b) {
                    a = H(a, b);
                    return null == a ? a : +a;
                }, x = function (a, b) {
                    a = H(a, b);
                    return null == a ? a : !!a;
                }, Yk = function (a, b) {
                    var c = H(a, b);
                    a.D || (a.D = {});
                    if (!a.D[b]) {
                        for (var d = 0; d < c.length; d++)
                            c[d] = +c[d];
                        a.D[b] = !0;
                    }
                    return c;
                }, kf = function (a, b, c) {
                    a = H(a, b);
                    return null == a ? c : a;
                }, Xg = function (a, b) {
                    return kf(a, b, 0);
                }, pf = function (a, b) {
                    return kf(a, b, '');
                }, Zk = function (a, b, c) {
                    c = void 0 === c ? !1 : c;
                    a = x(a, b);
                    return null == a ? c : a;
                }, $k = function (a, b, c) {
                    c = void 0 === c ? 0 : c;
                    a = ee(a, b);
                    return null == a ? c : a;
                }, al = function (a, b, c) {
                    a.j || (a.j = {});
                    if (b in a.j)
                        return a.j[b];
                    var d = H(a, b);
                    d || (d = Ja([]), E(a, b, d));
                    c = new Qk(d, c);
                    return a.j[b] = c;
                }, E = function (a, b, c) {
                    b < a.H ? a.l[b + a.m] = c : (Wk(a), a.A[b] = c);
                    return a;
                }, Cb = function (a, b, c) {
                    return E(a, b, Ja(c || []));
                }, bl = function (a, b, c) {
                    return Ab(a, b, c, !1);
                }, Fb = function (a, b, c) {
                    return Ab(a, b, c, 0);
                }, Ab = function (a, b, c, d) {
                    c !== d ? E(a, b, c) : b < a.H ? a.l[b + a.m] = null : (Wk(a), delete a.A[b]);
                    return a;
                }, Df = function (a, b, c) {
                    H(a, b).push(c);
                }, hc = function (a, b, c, d) {
                    (c = Xk(a, c)) && c !== b && void 0 !== d && (a.j && c in a.j && (a.j[c] = void 0), E(a, c, void 0));
                    return E(a, b, d);
                }, Xk = function (a, b) {
                    for (var c, d, e = 0; e < b.length; e++) {
                        var f = b[e], g = H(a, f);
                        null != g && (c = f, d = g, E(a, f, void 0));
                    }
                    return c ? (E(a, c, d), c) : 0;
                }, M = function (a, b, c) {
                    a.j || (a.j = {});
                    if (!a.j[c]) {
                        var d = H(a, c);
                        d && (a.j[c] = new b(d));
                    }
                    return a.j[c];
                }, I = function (a, b, c) {
                    a.j || (a.j = {});
                    if (!a.j[c]) {
                        for (var d = H(a, c), e = [], f = 0; f < d.length; f++)
                            e[f] = new b(d[f]);
                        a.j[c] = e;
                    }
                    b = a.j[c];
                    b == Vk && (b = a.j[c] = []);
                    return b;
                }, Db = function (a, b, c) {
                    a.j || (a.j = {});
                    var d = c ? c.za() : c;
                    a.j[b] = c;
                    return E(a, b, d);
                }, cl = function (a, b, c) {
                    a.j || (a.j = {});
                    c = c || [];
                    for (var d = Ja([]), e = 0; e < c.length; e++)
                        d[e] = c[e].za();
                    a.j[b] = c;
                    return E(a, b, d);
                }, Wd = function (a, b, c, d) {
                    var e = I(a, d, b);
                    c = c ? c : new d();
                    a = H(a, b);
                    e.push(c);
                    a.push(c.za());
                    return c;
                }, dl = function (a) {
                    if (a.j)
                        for (var b in a.j)
                            if (Object.prototype.hasOwnProperty.call(a.j, b)) {
                                var c = a.j[b];
                                if (Array.isArray(c))
                                    for (var d = 0; d < c.length; d++)
                                        c[d] && c[d].za();
                                else
                                    c && c.za();
                            }
                };
            O.prototype.za = function () {
                dl(this);
                return this.l;
            };
            var el = function (a) {
                dl(a);
                return La(a.l);
            };
            O.prototype.Wc = function () {
                dl(this);
                return this.l;
            };
            var gl = function (a) {
                    return JSON.stringify(a.l && a.za(), fl);
                }, fl = function (a, b) {
                    switch (typeof b) {
                    case 'number':
                        return isNaN(b) || Infinity === b || -Infinity === b ? String(b) : b;
                    case 'object':
                        if (Ha && null != b && b instanceof Uint8Array)
                            return Ka(b);
                    }
                    return b;
                }, Kh = function (a, b) {
                    return Oa(a, b ? JSON.parse(b) : null);
                };
            var hl = document, il = window;
            _.Pa = {};
            var Sa;
            var jl = function () {
                }, Ua = function (a, b) {
                    Qa(b);
                    this.l = a;
                };
            _.N(Ua, jl);
            Ua.prototype.toString = function () {
                return this.l.toString();
            };
            var kl = function () {
                }, Wa = function (a, b) {
                    Qa(b);
                    this.j = a;
                };
            _.N(Wa, kl);
            Wa.prototype.toString = function () {
                return this.j.toString();
            };
            _.ll = function () {
            };
            _.ml = function (a, b) {
                Qa(b);
                this.j = a;
            };
            _.N(_.ml, _.ll);
            _.ml.prototype.toString = function () {
                return this.j;
            };
            _.nl = new _.ml('about:invalid#zTSz', _.Pa);
            var cb = function () {
                }, Za = function (a, b) {
                    Qa(b);
                    this.j = a;
                };
            _.N(Za, cb);
            Za.prototype.toString = function () {
                return this.j.toString();
            };
            var ol = function (a, b) {
                if (null !== a) {
                    if ('script' === a.tagName.toLowerCase())
                        throw Error('Use setTextContent with a SafeScript.');
                    if ('style' === a.tagName.toLowerCase())
                        throw Error('Use setTextContent with a SafeStyleSheet.');
                }
                if (b instanceof jl) {
                    var c;
                    if (null === (c = Ra()) || void 0 === c || !c.isHTML(b))
                        if (b instanceof Ua)
                            b = b.l;
                        else
                            throw Error('wrong type');
                } else
                    b = _.Ej(b);
                a.innerHTML = b;
            };
            var wd = function (a, b) {
                a.src = eb(b);
                fb(a);
            };
            var pl = function (a, b) {
                var c = void 0 === c ? {} : c;
                this.error = a;
                this.context = b.context;
                this.msg = b.message || '';
                this.id = b.id || 'jserror';
                this.meta = c;
            };
            var hb;
            hb = Wc(function () {
                var a = !1;
                try {
                    var b = Object.defineProperty({}, 'passive', {
                        get: function () {
                            a = !0;
                        }
                    });
                    _.F.addEventListener('test', null, b);
                } catch (c) {
                }
                return a;
            });
            _.xd = function (a, b, c, d) {
                return a.addEventListener ? (a.addEventListener(b, c, ib(d)), !0) : !1;
            };
            _.ie = function (a, b, c, d) {
                return a.removeEventListener ? (a.removeEventListener(b, c, ib(d)), !0) : !1;
            };
            var ql = _.bk || ak || fk;
            _.ad = function (a, b) {
                this.x = void 0 !== a ? a : 0;
                this.y = void 0 !== b ? b : 0;
            };
            _.ad.prototype.ceil = function () {
                this.x = Math.ceil(this.x);
                this.y = Math.ceil(this.y);
                return this;
            };
            _.ad.prototype.floor = function () {
                this.x = Math.floor(this.x);
                this.y = Math.floor(this.y);
                return this;
            };
            _.ad.prototype.round = function () {
                this.x = Math.round(this.x);
                this.y = Math.round(this.y);
                return this;
            };
            _.rl = function (a, b) {
                this.width = a;
                this.height = b;
            };
            aa = _.rl.prototype;
            aa.aspectRatio = function () {
                return this.width / this.height;
            };
            aa.isEmpty = function () {
                return !(this.width * this.height);
            };
            aa.ceil = function () {
                this.width = Math.ceil(this.width);
                this.height = Math.ceil(this.height);
                return this;
            };
            aa.floor = function () {
                this.width = Math.floor(this.width);
                this.height = Math.floor(this.height);
                return this;
            };
            aa.round = function () {
                this.width = Math.round(this.width);
                this.height = Math.round(this.height);
                return this;
            };
            var ul, wl, vl, zl, Bl, Fl, sl;
            ul = function (a) {
                return a ? new sl(_.tl(a)) : Hi || (Hi = new sl());
            };
            wl = function (a, b) {
                wa(b, function (c, d) {
                    c && 'object' == typeof c && c.bb && (c = c.$a());
                    'style' == d ? a.style.cssText = c : 'class' == d ? a.className = c : 'for' == d ? a.htmlFor = c : vl.hasOwnProperty(d) ? a.setAttribute(vl[d], c) : 0 == d.lastIndexOf('aria-', 0) || 0 == d.lastIndexOf('data-', 0) ? a.setAttribute(d, c) : a[d] = c;
                });
            };
            vl = {
                cellpadding: 'cellPadding',
                cellspacing: 'cellSpacing',
                colspan: 'colSpan',
                frameborder: 'frameBorder',
                height: 'height',
                maxlength: 'maxLength',
                nonce: 'nonce',
                role: 'role',
                rowspan: 'rowSpan',
                type: 'type',
                usemap: 'useMap',
                valign: 'vAlign',
                width: 'width'
            };
            _.yl = function (a) {
                a = a.document;
                a = _.xl(a) ? a.documentElement : a.body;
                return new _.rl(a.clientWidth, a.clientHeight);
            };
            zl = function (a) {
                return a.scrollingElement ? a.scrollingElement : !fk && _.xl(a) ? a.documentElement : a.body || a.documentElement;
            };
            _.Al = function (a) {
                return a ? a.parentWindow || a.defaultView : window;
            };
            Bl = function (a, b, c) {
                function d(h) {
                    h && b.appendChild('string' === typeof h ? a.createTextNode(h) : h);
                }
                for (var e = 1; e < c.length; e++) {
                    var f = c[e];
                    if (!qa(f) || _.ia(f) && 0 < f.nodeType)
                        d(f);
                    else {
                        a: {
                            if (f && 'number' == typeof f.length) {
                                if (_.ia(f)) {
                                    var g = 'function' == typeof f.item || 'string' == typeof f.item;
                                    break a;
                                }
                                if ('function' === typeof f) {
                                    g = 'function' == typeof f.item;
                                    break a;
                                }
                            }
                            g = !1;
                        }
                        _.Ni(g ? fa(f) : f, d);
                    }
                }
            };
            _.Cl = function (a, b) {
                b = String(b);
                'application/xhtml+xml' === a.contentType && (b = b.toLowerCase());
                return a.createElement(b);
            };
            _.xl = function (a) {
                return 'CSS1Compat' == a.compatMode;
            };
            _.Dl = function (a) {
                return a && a.parentNode ? a.parentNode.removeChild(a) : null;
            };
            _.El = function (a) {
                var b;
                if (ql && !(_.bk && sk('9') && !sk('10') && _.F.SVGElement && a instanceof _.F.SVGElement) && (b = a.parentElement))
                    return b;
                b = a.parentNode;
                return _.ia(b) && 1 == b.nodeType ? b : null;
            };
            _.tl = function (a) {
                return 9 == a.nodeType ? a : a.ownerDocument || a.document;
            };
            Fl = function (a) {
                try {
                    return a.contentWindow || (a.contentDocument ? _.Al(a.contentDocument) : null);
                } catch (b) {
                }
                return null;
            };
            sl = function (a) {
                this.j = a || _.F.document || document;
            };
            sl.prototype.append = function (a, b) {
                Bl(_.tl(a), a, arguments);
            };
            sl.prototype.l = _.Dl;
            var Gl = function () {
                return xj('iPad') || xj('Android') && !xj('Mobile') || xj('Silk');
            };
            var Il, Jl, Kl, Fg;
            _.Hl = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
            Il = function (a) {
                return a ? decodeURI(a) : a;
            };
            Jl = function (a, b, c) {
                if (Array.isArray(b))
                    for (var d = 0; d < b.length; d++)
                        Jl(a, String(b[d]), c);
                else
                    null != b && c.push(a + ('' === b ? '' : '=' + encodeURIComponent(String(b))));
            };
            Kl = /#|$/;
            Fg = function (a, b) {
                var c = a.search(Kl);
                a: {
                    var d = 0;
                    for (var e = b.length; 0 <= (d = a.indexOf(b, d)) && d < c;) {
                        var f = a.charCodeAt(d - 1);
                        if (38 == f || 63 == f)
                            if (f = a.charCodeAt(d + e), !f || 61 == f || 38 == f || 35 == f)
                                break a;
                        d += e + 1;
                    }
                    d = -1;
                }
                if (0 > d)
                    return null;
                e = a.indexOf('&', d);
                if (0 > e || e > c)
                    e = c;
                d += b.length + 1;
                return decodeURIComponent(a.substr(d, e - d).replace(/\+/g, ' '));
            };
            var Oe, Ml, re, Ll, se, Nl, Xc, Pl, pb, Ql, Rl, Re, Tl, Ol, Vl, Wl, Ul, Zc, Xl, Yl, Zl, $l, am, bm, cm, dm, Te, em, fm, gm, qd, hm, jm, lm, Gf, om, pm, nm, qm, rm, tm, um, vm, wm, xm, Am, zm, Bm, zb, Hh, Cm, Dm, Em, Ec, Fm;
            Oe = function (a) {
                try {
                    return !!a && null != a.location.href && Zj(a, 'foo');
                } catch (b) {
                    return !1;
                }
            };
            Ml = function (a, b, c, d) {
                d = d || _.F;
                c && (d = Ll(d));
                for (c = 0; d && 40 > c++ && (!b && !Oe(d) || !a(d));)
                    d = Ll(d);
            };
            re = function () {
                var a, b = a = void 0 === a ? _.F : a;
                Ml(function (c) {
                    b = c;
                    return !1;
                });
                return b;
            };
            Ll = function (a) {
                try {
                    var b = a.parent;
                    if (b && b != a)
                        return b;
                } catch (c) {
                }
                return null;
            };
            se = function (a) {
                return Oe(a.top) ? a.top : null;
            };
            Nl = function (a, b) {
                var c = a.createElement('script');
                wd(c, b);
                return (a = a.getElementsByTagName('script')[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null;
            };
            Xc = function (a, b) {
                return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
            };
            Pl = function (a, b) {
                if (!Ol()) {
                    var c = Math.random();
                    if (c < b)
                        return c = pb(_.F), a[Math.floor(c * a.length)];
                }
                return null;
            };
            pb = function (a) {
                if (!a.crypto)
                    return Math.random();
                try {
                    var b = new Uint32Array(1);
                    a.crypto.getRandomValues(b);
                    return b[0] / 65536 / 65536;
                } catch (c) {
                    return Math.random();
                }
            };
            _.$b = function (a, b, c) {
                if (a)
                    for (var d in a)
                        Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a);
            };
            Ql = function (a) {
                for (var b in a)
                    if (Object.prototype.hasOwnProperty.call(a, b))
                        return !1;
                return !0;
            };
            Rl = function (a) {
                var b = [];
                _.$b(a, function (c, d) {
                    b.push(d);
                });
                return b;
            };
            _.Sl = function (a) {
                var b = [];
                _.$b(a, function (c) {
                    b.push(c);
                });
                return b;
            };
            Re = function (a, b) {
                return za(a, function (c, d) {
                    return Object.prototype.hasOwnProperty.call(a, d) && b(c, d);
                });
            };
            Tl = function (a) {
                var b = a.length;
                if (0 == b)
                    return 0;
                for (var c = 305419896, d = 0; d < b; d++)
                    c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
                return 0 < c ? c : 4294967296 + c;
            };
            Ol = Wc(function () {
                return _.Pi([
                    'Google Web Preview',
                    'Mediapartners-Google',
                    'Google-Read-Aloud',
                    'Google-Adwords'
                ], Ul) || 0.0001 > Math.random();
            });
            Vl = function (a) {
                return Ol() ? null : Math.floor(1000 * pb(a));
            };
            Wl = function (a, b) {
                try {
                    if (a)
                        return a.setItem('google_experiment_mod', b), b;
                } catch (c) {
                }
                return null;
            };
            Ul = function (a) {
                return -1 != uj.indexOf(a);
            };
            Zc = /^([0-9.]+)px$/;
            Xl = /^(-?[0-9.]{1,30})$/;
            _.pg = function (a, b) {
                return Xl.test(a) && (a = Number(a), !isNaN(a)) ? a : void 0 == b ? null : b;
            };
            Yl = function () {
                return /^true$/.test('false');
            };
            Zl = function (a, b) {
                b = void 0 === b ? !0 : b;
                try {
                    for (var c = null; c != a; c = a, a = a.parent)
                        switch (a.location.protocol) {
                        case 'https:':
                            return !0;
                        case 'file:':
                            return b;
                        case 'http:':
                            return !1;
                        }
                } catch (d) {
                }
                return !0;
            };
            $l = function (a) {
                if (!a)
                    return '';
                var b = /.*[&#?]google_debug(=[^&]*)?(&.*)?$/;
                try {
                    var c = b.exec(decodeURIComponent(a));
                    if (c)
                        return c[1] && 1 < c[1].length ? c[1].substring(1) : 'true';
                } catch (d) {
                }
                return '';
            };
            am = {
                he: 'allow-forms',
                ie: 'allow-modals',
                je: 'allow-orientation-lock',
                ke: 'allow-pointer-lock',
                le: 'allow-popups',
                me: 'allow-popups-to-escape-sandbox',
                ne: 'allow-presentation',
                oe: 'allow-same-origin',
                pe: 'allow-scripts',
                qe: 'allow-top-navigation',
                re: 'allow-top-navigation-by-user-activation'
            };
            bm = Wc(function () {
                return _.Sl(am);
            });
            cm = function (a) {
                var b = bm();
                return a.length ? _.Ae(b, function (c) {
                    return !(0 <= _.da(a, c));
                }) : b;
            };
            dm = function () {
                var a = _.Cl(document, 'IFRAME'), b = {};
                _.Ni(bm(), function (c) {
                    a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0);
                });
                return b;
            };
            Te = function (a) {
                a = a && a.toString && a.toString();
                return 'string' === typeof a && -1 != a.indexOf('[native code]');
            };
            em = function (a, b) {
                try {
                    return !(!a.frames || !a.frames[b]);
                } catch (c) {
                    return !1;
                }
            };
            fm = function (a, b) {
                for (var c = 0; 50 > c; ++c) {
                    if (em(a, b))
                        return a;
                    if (!(a = Ll(a)))
                        break;
                }
                return null;
            };
            gm = function (a, b) {
                if (!b || !b.frames)
                    return null;
                if (b.frames[a])
                    return b.frames[a].frameElement;
                try {
                    var c = b.document, d = c.body || c.head && c.head.parentElement;
                    if (d) {
                        var e = c.createElement('IFRAME');
                        e.name = a;
                        e.id = a;
                        e.setAttribute('style', 'display:none;position:fixed;left:-999px;top:-999px;width:0px;height:0px;');
                        d.appendChild(e);
                        return e;
                    }
                } catch (f) {
                }
                return null;
            };
            qd = Wc(function () {
                return !Gl() && (xj('iPod') || xj('iPhone') || xj('Android') || xj('IEMobile')) ? 2 : Gl() ? 1 : 0;
            });
            hm = function (a, b) {
                var c;
                for (c = void 0 === c ? 100 : c; a && c--;) {
                    if (a == b)
                        return !0;
                    a = a.parentElement;
                }
                return !1;
            };
            _.mm = function (a, b) {
                a.style.setProperty ? _.$b(b, function (c, d) {
                    a.style.setProperty(d, c, 'important');
                }) : a.style.cssText = _.im(jm(_.km(a.style.cssText), lm(b, function (c) {
                    return c + ' !important';
                })));
            };
            jm = _.r(Object, 'assign') || function (a, b) {
                for (var c = 1; c < arguments.length; c++) {
                    var d = arguments[c];
                    if (d)
                        for (var e in d)
                            Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
                }
                return a;
            };
            lm = function (a, b) {
                var c = {}, d;
                for (d in a)
                    Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
                return c;
            };
            Gf = function (a, b, c) {
                for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);)
                    a = a.parentElement;
            };
            om = function (a) {
                return nm(a, function (b) {
                    return 'fixed' == b.position || 'sticky' == b.position;
                });
            };
            pm = function (a) {
                return nm(a, function (b) {
                    return 'left' == b['float'] || 'right' == b['float'] || 'left' == b.cssFloat || 'right' == b.cssFloat;
                });
            };
            nm = function (a, b) {
                var c;
                for (c = void 0 === c ? 100 : c; a && c--;) {
                    var d = Xc(a, window);
                    if (d) {
                        if (b(d))
                            return !0;
                        a = a.parentElement;
                    }
                }
                return !1;
            };
            qm = function (a) {
                if (!a)
                    return null;
                a = a.transform;
                if (!a)
                    return null;
                a = a.replace(/^.*\(([0-9., -]+)\)$/, '$1').split(/, /);
                return 6 != a.length ? null : _.ye(a, parseFloat);
            };
            _.im = function (a) {
                var b = [];
                _.$b(a, function (c, d) {
                    null != c && '' !== c && b.push(d + ':' + c);
                });
                return b.length ? b.join(';') + ';' : '';
            };
            _.km = function (a) {
                var b = {};
                if (a) {
                    var c = /\s*:\s*/;
                    _.Ni((a || '').split(/\s*;\s*/), function (d) {
                        if (d) {
                            var e = d.split(c);
                            d = e[0];
                            e = e[1];
                            d && e && (b[d.toLowerCase()] = e);
                        }
                    });
                }
                return b;
            };
            rm = {};
            _.sm = (rm['http://googleads.g.doubleclick.net'] = !0, rm['http://pagead2.googlesyndication.com'] = !0, rm['https://googleads.g.doubleclick.net'] = !0, rm['https://pagead2.googlesyndication.com'] = !0, rm);
            tm = function (a) {
                _.F.console && _.F.console.warn && _.F.console.warn(a);
            };
            um = function (a, b) {
                b = ba(a, b);
                if (0 <= b) {
                    var c = a[b];
                    Array.prototype.splice.call(a, b, 1);
                    return c;
                }
                return null;
            };
            vm = [];
            wm = function () {
                var a = vm;
                vm = [];
                a = _.G(a);
                for (var b = a.next(); !b.done; b = a.next()) {
                    b = b.value;
                    try {
                        b();
                    } catch (c) {
                    }
                }
            };
            xm = function (a) {
                return a.replace(/\\(n|r|\\)/g, function (b, c) {
                    return 'n' == c ? '\n' : 'r' == c ? '\r' : '\\';
                });
            };
            Am = function (a) {
                var b = ym;
                a = void 0 === a ? window.document : a;
                0 != b.length && a.head && b.forEach(function (c) {
                    c && zm(c, a);
                });
            };
            zm = function (a, b) {
                b = void 0 === b ? window.document : b;
                if (a && b.head) {
                    var c = document.createElement('meta');
                    b.head.appendChild(c);
                    c.httpEquiv = 'origin-trial';
                    c.content = a;
                }
            };
            Bm = function () {
                return Math.floor(Math.random() * Math.pow(2, 52));
            };
            zb = function (a) {
                if ('number' !== typeof a.goog_pvsid)
                    try {
                        Object.defineProperty(a, 'goog_pvsid', {
                            value: Bm(),
                            configurable: !1
                        });
                    } catch (b) {
                    }
                return Number(a.goog_pvsid) || -1;
            };
            Hh = function (a, b) {
                'complete' === a.readyState || 'interactive' === a.readyState ? (vm.push(b), 1 == vm.length && (D.Promise ? D.Promise.resolve().then(wm) : window.setImmediate ? setImmediate(wm) : setTimeout(wm, 0))) : a.addEventListener('DOMContentLoaded', b);
            };
            Cm = function (a) {
                return 0 === a || 'number' === typeof a && isFinite(a) && 0 == a % 1 && 0 < a;
            };
            Dm = function (a, b) {
                var c = document.createElement('div');
                c.id = a;
                c.textContent = b;
                _.mm(c, {
                    height: '24px',
                    'line-height': '24px',
                    'text-align': 'center',
                    'vertical-align': 'middle',
                    color: 'white',
                    'background-color': 'black',
                    margin: '0',
                    'font-family': 'Roboto',
                    'font-style': 'normal',
                    'font-weight': '500',
                    'font-size': '11px',
                    'letter-spacing': '0.08em'
                });
                return c;
            };
            Em = function (a) {
                return new D.Promise(function (b) {
                    setTimeout(function () {
                        return void b('timeout');
                    }, a);
                });
            };
            Ec = function (a) {
                try {
                    var b = JSON.stringify(a);
                } catch (c) {
                }
                return b || String(a);
            };
            Fm = function (a) {
                var b = '';
                Ml(function (c) {
                    if (c === c.top)
                        return !0;
                    c.document && c.document.referrer && (b = c.document.referrer);
                    return !1;
                }, !1, !1, a);
                return b;
            };
            var Hm;
            _.Gm = function (a, b, c, d) {
                this.top = a;
                this.right = b;
                this.bottom = c;
                this.left = d;
            };
            Hm = function (a) {
                return new _.Gm(a.top, a.right, a.bottom, a.left);
            };
            _.Gm.prototype.ceil = function () {
                this.top = Math.ceil(this.top);
                this.right = Math.ceil(this.right);
                this.bottom = Math.ceil(this.bottom);
                this.left = Math.ceil(this.left);
                return this;
            };
            _.Gm.prototype.floor = function () {
                this.top = Math.floor(this.top);
                this.right = Math.floor(this.right);
                this.bottom = Math.floor(this.bottom);
                this.left = Math.floor(this.left);
                return this;
            };
            _.Gm.prototype.round = function () {
                this.top = Math.round(this.top);
                this.right = Math.round(this.right);
                this.bottom = Math.round(this.bottom);
                this.left = Math.round(this.left);
                return this;
            };
            var Im = function (a, b, c, d) {
                    this.left = a;
                    this.top = b;
                    this.width = c;
                    this.height = d;
                }, Jm = function (a) {
                    return new _.Gm(a.top, a.left + a.width, a.top + a.height, a.left);
                }, Km = function (a, b) {
                    var c = Math.max(a.left, b.left), d = Math.min(a.left + a.width, b.left + b.width);
                    if (c <= d) {
                        var e = Math.max(a.top, b.top);
                        a = Math.min(a.top + a.height, b.top + b.height);
                        if (e <= a)
                            return new Im(c, e, d - c, a - e);
                    }
                    return null;
                };
            Im.prototype.ceil = function () {
                this.left = Math.ceil(this.left);
                this.top = Math.ceil(this.top);
                this.width = Math.ceil(this.width);
                this.height = Math.ceil(this.height);
                return this;
            };
            Im.prototype.floor = function () {
                this.left = Math.floor(this.left);
                this.top = Math.floor(this.top);
                this.width = Math.floor(this.width);
                this.height = Math.floor(this.height);
                return this;
            };
            Im.prototype.round = function () {
                this.left = Math.round(this.left);
                this.top = Math.round(this.top);
                this.width = Math.round(this.width);
                this.height = Math.round(this.height);
                return this;
            };
            var Lm = function (a) {
                    a = void 0 === a ? _.F : a;
                    var b = a.context || a.AMP_CONTEXT_DATA;
                    if (!b)
                        try {
                            b = a.parent.context || a.parent.AMP_CONTEXT_DATA;
                        } catch (c) {
                        }
                    try {
                        if (b && b.pageViewId && b.canonicalUrl)
                            return b;
                    } catch (c) {
                    }
                    return null;
                }, Mm = function (a) {
                    return (a = a || Lm()) ? Oe(a.master) ? a.master : null : null;
                }, Om = function (a, b) {
                    if (a.ampInaboxInitialized)
                        return !0;
                    var c, d = 'amp-ini-load' === b.data;
                    a.ampInaboxPendingMessages && !d && (c = /^amp-(\d{15,20})?/.exec(b.data)) && (a.ampInaboxPendingMessages.push(b), Nm(a, c[1]));
                    return !1;
                }, Pm = function (a, b, c) {
                    var d = !0;
                    d = void 0 === d ? !1 : d;
                    var e = a.ampInaboxIframes = a.ampInaboxIframes || [], f = function () {
                        }, g = function () {
                        };
                    b && (e.push(b), g = function () {
                        a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
                        ea(e, b);
                        f();
                    });
                    if (a.ampInaboxInitialized)
                        return g;
                    a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
                    c && /^\d{15,20}$/.test(c) && Nm(a, c);
                    var h = function (k) {
                        Om(a, k) && f();
                    };
                    d || e.google_amp_listener_added || (e.google_amp_listener_added = !0, _.xd(a, 'message', h), f = function () {
                        _.ie(a, 'message', h);
                    });
                    return g;
                }, Nm = function (a, b) {
                    a.ampInaboxInitialized || b && !/^\d{15,20}$/.test(b) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Nl(a.document, b ? Dd(Ui('https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js'), { ampVersion: b }) : aj(Ti(Ui('https://cdn.ampproject.org/amp4ads-host-v0.js'))));
                };
            var Rb, Rm;
            _.Qm = function (a, b) {
                a.google_image_requests || (a.google_image_requests = []);
                var c = a.document.createElement('img');
                c.src = b;
                a.google_image_requests.push(c);
            };
            Rb = function (a, b) {
                var c = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=' + b;
                _.$b(a, function (d, e) {
                    d && (c += '&' + e + '=' + encodeURIComponent(d));
                });
                Rm(c);
            };
            Rm = function (a) {
                var b = window;
                b.fetch ? b.fetch(a, {
                    keepalive: !0,
                    credentials: 'include',
                    redirect: 'follow',
                    method: 'get',
                    mode: 'no-cors'
                }) : _.Qm(b, a);
            };
            _.jb = function (a) {
                this.Dd = a;
            };
            _.Sm = [
                kb('data'),
                kb('http'),
                kb('https'),
                kb('mailto'),
                kb('ftp'),
                new _.jb(function (a) {
                    return /^[^:]*([/?#]|$)/.test(a);
                })
            ];
            var Vm, Xm, Ym, Zm, $m, bn, fn;
            _.Um = function (a, b, c) {
                if ('string' === typeof b)
                    (b = _.Tm(a, b)) && (a.style[b] = c);
                else
                    for (var d in b) {
                        c = a;
                        var e = b[d], f = _.Tm(c, d);
                        f && (c.style[f] = e);
                    }
            };
            Vm = {};
            _.Tm = function (a, b) {
                var c = Vm[b];
                if (!c) {
                    var d = _.Qj(b);
                    c = d;
                    void 0 === a.style[d] && (d = (fk ? 'Webkit' : ek ? 'Moz' : _.bk ? 'ms' : ak ? 'O' : null) + Rj(d), void 0 !== a.style[d] && (c = d));
                    Vm[b] = c;
                }
                return c;
            };
            _.Wm = function (a, b) {
                var c = _.tl(a);
                return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || '' : '';
            };
            Xm = function (a, b) {
                return _.Wm(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b];
            };
            Ym = function (a) {
                try {
                    return a.getBoundingClientRect();
                } catch (b) {
                    return {
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    };
                }
            };
            Zm = function (a) {
                if (_.bk && !(8 <= Number(vk)))
                    return a.offsetParent;
                var b = _.tl(a), c = Xm(a, 'position'), d = 'fixed' == c || 'absolute' == c;
                for (a = a.parentNode; a && a != b; a = a.parentNode)
                    if (11 == a.nodeType && a.host && (a = a.host), c = Xm(a, 'position'), d = d && 'static' == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || 'fixed' == c || 'absolute' == c || 'relative' == c))
                        return a;
                return null;
            };
            $m = function (a) {
                var b = _.tl(a), c = new _.ad(0, 0);
                var d = b ? _.tl(b) : document;
                d = !_.bk || 9 <= Number(vk) || _.xl(ul(d).j) ? d.documentElement : d.body;
                if (a == d)
                    return c;
                a = Ym(a);
                d = ul(b).j;
                b = zl(d);
                d = d.parentWindow || d.defaultView;
                b = _.bk && sk('10') && d.pageYOffset != b.scrollTop ? new _.ad(b.scrollLeft, b.scrollTop) : new _.ad(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
                c.x = a.left + b.x;
                c.y = a.top + b.y;
                return c;
            };
            bn = function (a, b) {
                var c = new _.ad(0, 0), d = _.Al(_.tl(a));
                if (!Zj(d, 'parent'))
                    return c;
                do {
                    var e = d == b ? $m(a) : _.an(a);
                    c.x += e.x;
                    c.y += e.y;
                } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
                return c;
            };
            _.an = function (a) {
                a = Ym(a);
                return new _.ad(a.left, a.top);
            };
            _.cn = function (a, b) {
                'number' == typeof a && (a = (b ? Math.round(a) : a) + 'px');
                return a;
            };
            _.dn = function (a, b) {
                if ('none' != Xm(b, 'display'))
                    return a(b);
                var c = b.style, d = c.display, e = c.visibility, f = c.position;
                c.visibility = 'hidden';
                c.position = 'absolute';
                c.display = 'inline';
                a = a(b);
                c.display = d;
                c.position = f;
                c.visibility = e;
                return a;
            };
            _.en = function (a) {
                var b = a.offsetWidth, c = a.offsetHeight, d = fk && !b && !c;
                return (void 0 === b || d) && a.getBoundingClientRect ? (a = Ym(a), new _.rl(a.right - a.left, a.bottom - a.top)) : new _.rl(b, c);
            };
            fn = function (a) {
                if (!a.getBoundingClientRect)
                    return null;
                a = _.dn(Ym, a);
                return new _.rl(a.right - a.left, a.bottom - a.top);
            };
            var hn = function () {
                    var a = gn();
                    'google_onload_fired' in a || (a.google_onload_fired = !1, _.xd(a, 'load', function () {
                        a.google_onload_fired = !0;
                    }));
                }, jn = function () {
                    var a = void 0 === a ? il : a;
                    try {
                        return a.history.length;
                    } catch (b) {
                        return 0;
                    }
                }, ln = function (a) {
                    a = Mm(Lm(a)) || a;
                    a = a.google_unique_id;
                    return 'number' === typeof a ? a : 0;
                }, mn = !!window.google_async_iframe_id, nn = mn && window.parent || window, gn = function () {
                    if (mn && !Oe(nn)) {
                        var a = '.' + hl.domain;
                        try {
                            for (; 2 < a.split('.').length && !Oe(nn);)
                                hl.domain = a = a.substr(a.indexOf('.') + 1), nn = window.parent;
                        } catch (b) {
                        }
                        Oe(nn) || (nn = window);
                    }
                    return nn;
                }, on = function () {
                    var a, b = window.ActiveXObject;
                    if (navigator.plugins && navigator.mimeTypes.length) {
                        if ((a = navigator.plugins['Shockwave Flash']) && a.description)
                            return a.description.replace(/([a-zA-Z]|\s)+/, '').replace(/(\s)+r/, '.');
                    } else {
                        if (navigator.userAgent && 0 <= navigator.userAgent.indexOf('Windows CE')) {
                            var c = 3;
                            for (a = 1; a;)
                                try {
                                    a = new b('ShockwaveFlash.ShockwaveFlash.' + (c + 1)), c++;
                                } catch (d) {
                                    a = null;
                                }
                            return c.toString();
                        }
                        if (zj()) {
                            a = null;
                            try {
                                a = new b('ShockwaveFlash.ShockwaveFlash.7');
                            } catch (d) {
                                c = 0;
                                try {
                                    a = new b('ShockwaveFlash.ShockwaveFlash.6'), c = 6, a.AllowScriptAccess = 'always';
                                } catch (e) {
                                    if (6 === c)
                                        return c.toString();
                                }
                                try {
                                    a = new b('ShockwaveFlash.ShockwaveFlash');
                                } catch (e) {
                                }
                            }
                            if (a)
                                return c = a.GetVariable('$version').split(' ')[1], c.replace(/,/g, '.');
                        }
                    }
                    return '0';
                };
            var pn = function (a, b) {
                    if (window.fetch)
                        fetch(a, {
                            method: 'POST',
                            body: b,
                            keepalive: 64536 > b.length,
                            credentials: 'omit',
                            mode: 'no-cors',
                            redirect: 'follow'
                        });
                    else {
                        var c = new XMLHttpRequest();
                        c.open('POST', a, !0);
                        c.send(b);
                    }
                }, qn = function (a, b, c) {
                    c = void 0 === c ? pn : c;
                    this.j = a;
                    this.A = void 0 === b ? 'https://pagead2.googlesyndication.com/pagead/ping' : b;
                    this.l = c;
                };
            var jc = function () {
                qn.apply(this, arguments);
            };
            _.N(jc, qn);
            var bc = function (a, b) {
                a.j() && a.l(a.A + '?e=1', '[[[{"2":' + gl(b()) + '}]]]');
            };
            var R = function (a, b) {
                    this.j = a;
                    this.defaultValue = void 0 === b ? !1 : b;
                }, rn = function (a, b) {
                    this.j = a;
                    this.defaultValue = void 0 === b ? 0 : b;
                }, sn = function (a, b) {
                    this.j = a;
                    this.defaultValue = void 0 === b ? '' : b;
                }, tn = function (a, b) {
                    b = void 0 === b ? [] : b;
                    this.j = a;
                    this.defaultValue = b;
                };
            var Kf, dh, vn, fh, lc, wn, xn, yn, zn, An, Bn, Cn, Dn, En, Fn, Gn, cf, Hn, In, Jn, Kn, Ln, Mn, Nn, On, Pn, Qn, Rn, mb, oc, Sn, Tn, Un, Vn, Wn, Xn, Yn, Zn, $n, ao, bo, co, eo, fo, go, ho, io, jo, ko, lo, mo, Of, no, Dh, ld, oo, po, og, qo, ro, so, to, pc, uo, vo, wo, xo, yo, zo, gg, Ao, Bo, Co, Do, Eo, Fo, Go, Ho, Io, qg, Jo, Ko, Lo, Mo, No, Oo, Po, Qo, Ro, So, To, Uo, Vo, Wo, Xo, Yo, Zo, $o, hh, nd, ap, bp, cp, dp, ep, fp, gp, hp, ip, jp, kp, lp, mp, np, op, pp, te, qp, rp, sp, tp, ce, up, vp, Td, Qd, wp, Yd, xp, yp, Ap, Bp, dd, uc, Ep, Fp, Gp, Ip, Ge, Jp, Kp, Lp, Mp, Np, Op, Pp, Qp, Rp;
            _.un = new rn(36);
            Kf = new R(98);
            dh = new R(206);
            vn = new R(528);
            fh = new rn(465);
            lc = new R(144);
            wn = new R(368279556);
            xn = new R(366809413);
            yn = new sn(3);
            zn = new tn(481);
            An = new rn(7, 0.1);
            Bn = new R(376190677, !0);
            Cn = new R(378899425);
            Dn = new R(514, !0);
            En = new R(212);
            Fn = new R(377966085);
            Gn = new R(361174373, !0);
            cf = new rn(374482958);
            Hn = new R(359351145);
            In = new R(362946046);
            Jn = new R(23);
            Kn = new R(369430);
            Ln = new rn(357045128);
            Mn = new R(346);
            Nn = new R(520);
            On = new R(104);
            Pn = new R(319);
            Qn = new R(493);
            Rn = new R(364);
            mb = new rn(378290974, 0.01);
            oc = new R(378290973);
            Sn = new rn(377289019);
            Tn = new R(370993688);
            Un = new R(504);
            Vn = new R(503);
            Wn = new rn(488);
            Xn = new rn(529);
            Yn = new sn(10);
            Zn = new R(500);
            $n = new R(360245597);
            ao = new rn(494, 5000);
            bo = new rn(517);
            co = new R(123);
            eo = new R(445);
            fo = new R(381277148);
            go = new R(371390390);
            ho = new R(375971837);
            io = new R(372611448);
            jo = new R(521);
            ko = new R(375090993, !0);
            lo = new R(20);
            mo = new R(220);
            Of = new R(200);
            no = new R(111);
            Dh = new R(323);
            ld = new rn(492, 0.01);
            oo = new rn(363650251);
            po = new R(374665379, !0);
            og = new tn(480);
            qo = new rn(17);
            ro = new rn(16);
            so = new rn(18);
            to = new R(83);
            pc = new R(85);
            uo = new R(305);
            vo = new R(417);
            wo = new R(471);
            xo = new R(442);
            yo = new R(390);
            zo = new R(177);
            gg = new R(434);
            Ao = new R(464);
            Bo = new R(35976);
            Co = new R(35977);
            Do = new R(3580985);
            Eo = new R(339043665, !0);
            Fo = new R(365635966);
            Go = new R(3580885);
            Ho = new rn(470, 10);
            Io = new R(432);
            qg = new rn(8, -1);
            Jo = new R(440);
            Ko = new R(380853767);
            Lo = new R(381311271);
            Mo = new R(378410763);
            No = new R(377598633);
            Oo = new rn(374201269, 60000);
            Po = new R(374201268, !0);
            Qo = new rn(371364213, 60000);
            Ro = new rn(373440923, 0.0001);
            So = new rn(376149757, 0.0025);
            To = new R(371364212, !0);
            Uo = new R(437, !0);
            Vo = new R(320);
            Wo = new rn(47, 1);
            Xo = new rn(25);
            Yo = new tn(1);
            Zo = new sn(2, '1-0-38');
            $o = new R(116);
            hh = new R(416);
            nd = new R(474);
            ap = new R(373056376);
            bp = new R(373056377, !0);
            cp = new R(370723759, !0);
            dp = new tn(489);
            ep = new R(371157910);
            fp = new R(360245598);
            gp = new rn(360245595, 200);
            hp = new R(360245596);
            ip = new rn(359346956);
            jp = new rn(61, 0.001);
            kp = new R(1936, !0);
            lp = new R(522);
            mp = new R(373821891);
            np = new R(363658173);
            op = new R(501);
            pp = new sn(363931022);
            te = new R(1930);
            qp = new tn(1918, 'criteo index indextest openx openxtest pubcid.org pubmatic thetradedesktest'.split(' '));
            rp = new R(446, !0);
            sp = new R(453);
            tp = new R(454);
            ce = new rn(360261971);
            up = new rn(1921, 72);
            vp = new rn(1920, 24);
            Td = new rn(1917, -1);
            Qd = new rn(1916, 0.001);
            wp = new R(497);
            Yd = new R(382136472);
            xp = new R(1931, !0);
            yp = new R(377431981);
            _.zp = new R(1944);
            Ap = new R(77);
            Bp = new R(78);
            dd = new R(309);
            _.Cp = new R(377914450);
            uc = new R(373442741);
            _.Dp = new R(1903);
            Ep = new R(80);
            Fp = new R(76);
            Gp = new R(81);
            _.Hp = new R(1940);
            Ip = new R(84);
            Ge = new R(3655606);
            Jp = new R(188);
            Kp = new R(1928);
            Lp = new R(1941);
            Mp = new R(370946349);
            Np = new R(374326588);
            Op = new R(379841917);
            Pp = new R(377105258);
            Qp = new rn(1935);
            Rp = new R(1942);
            var J = {
                ye: function () {
                },
                Ue: function () {
                    return '';
                },
                ue: function () {
                }
            };
            J.Te = rb;
            var Sp = rb(function (a) {
                    return null !== a && void 0 !== a;
                }, 'exists'), sb = rb(function (a) {
                    return !!a;
                }, 'truthy');
            J.assert = function () {
            };
            J.Qe = function (a) {
                return a;
            };
            J.Ve = tb;
            J.Ye = ub;
            J.Pe = function () {
            };
            J.Re = function (a) {
                return a;
            };
            J.Xe = wb;
            J.$e = function (a) {
                wb(a);
                return a;
            };
            J.Oe = function () {
            };
            J.T = function (a) {
                return a;
            };
            J.We = function (a) {
                tb(a, Sp);
            };
            J.Ze = function (a) {
                return ub(a, Sp);
            };
            J.Se = function (a, b) {
                return a(b);
            };
            J.functionName = function (a) {
                var b = a.name;
                b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : '(Anonymous)');
                return b;
            };
            var cc = function (a) {
                P(this, a, Tp, null);
            };
            _.N(cc, O);
            var Tp = [3];
            var Eb = function (a) {
                P(this, a, Up, null);
            };
            _.N(Eb, O);
            var Up = [4];
            var yb = function (a) {
                P(this, a, Vp, null);
            };
            _.N(yb, O);
            var Vp = [2];
            var xb = function (a) {
                P(this, a, null, gc);
            };
            _.N(xb, O);
            var gc = [[4]];
            var Wp = null, Xp = function () {
                    if (null === Wp) {
                        Wp = '';
                        try {
                            var a = '';
                            try {
                                a = _.F.top.location.hash;
                            } catch (c) {
                                a = _.F.location.hash;
                            }
                            if (a) {
                                var b = a.match(/\bdeid=([\d,]+)/);
                                Wp = b ? b[1] : '';
                            }
                        } catch (c) {
                        }
                    }
                    return Wp;
                };
            var Yp;
            _.yc = function () {
                var a = _.F.performance;
                return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Lf();
            };
            _.Qf = function (a) {
                a = void 0 === a ? _.F : a;
                return (a = a.performance) && a.now ? a.now() : null;
            };
            Yp = function (a) {
                var b = _.F.performance;
                return b && b.timing && b.timing[a] || 0;
            };
            var Zp = function (a, b, c, d, e) {
                this.label = a;
                this.type = b;
                this.value = c;
                this.duration = void 0 === d ? 0 : d;
                this.uniqueId = Math.random();
                this.slotId = e;
            };
            var $p = _.F.performance, aq = !!($p && $p.mark && $p.measure && $p.clearMarks), bq = Wc(function () {
                    var a;
                    if (a = aq)
                        a = Xp(), a = !!a.indexOf && 0 <= a.indexOf('1337');
                    return a;
                }), cq = function (a, b) {
                    this.events = [];
                    this.A = b || _.F;
                    var c = null;
                    b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
                    this.j = bq() || (null != c ? c : Math.random() < a);
                }, qc = function (a) {
                    a && $p && bq() && ($p.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_start'), $p.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_end'));
                }, Jb = function (a, b, c, d, e, f) {
                    a.j && (b = new Zp(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.events.length || a.events.push(b));
                };
            cq.prototype.start = function (a, b) {
                if (!this.j)
                    return null;
                a = new Zp(a, b, _.Qf() || _.yc());
                b = 'goog_' + a.label + '_' + a.uniqueId + '_start';
                $p && bq() && $p.mark(b);
                return a;
            };
            cq.prototype.end = function (a) {
                if (this.j && 'number' === typeof a.value) {
                    a.duration = (_.Qf() || _.yc()) - a.value;
                    var b = 'goog_' + a.label + '_' + a.uniqueId + '_end';
                    $p && bq() && $p.mark(b);
                    !this.j || 2048 < this.events.length || this.events.push(a);
                }
            };
            var dq = function (a, b, c) {
                var d = _.Qf();
                d && Jb(a, b, 9, d, 0, c);
            };
            var Sb = function (a, b) {
                try {
                    -1 == a.indexOf(b) && (a = b + '\n' + a);
                    for (var c; a != c;)
                        c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, '$1');
                    return a.replace(/\n */g, '\n');
                } catch (d) {
                    return b;
                }
            };
            var eq;
            eq = {
                Ce: 0,
                $c: 3,
                bd: 4,
                cd: 5
            };
            var fq = eq.$c, gq = eq.bd, hq = eq.cd;
            _.wh = function (a) {
                if (a.Da && a.hasOwnProperty('Da'))
                    return a.Da;
                var b = new a();
                return a.Da = b;
            };
            var iq = Yl();
            var jq = function (a) {
                    this.methodName = a;
                }, kq = new jq(1), lq = new jq(15), mq = new jq(2), nq = new jq(3), oq = new jq(5), pq = new jq(6), qq = new jq(7), rq = new jq(8), sq = new jq(14), tq = function (a, b, c) {
                    return b[a.methodName] || c || function () {
                    };
                };
            var uq = function () {
                    this.j = function () {
                    };
                    this.l = function () {
                        return [];
                    };
                    this.A = function () {
                        return [];
                    };
                }, vq = function (a, b, c) {
                    a.j = tq(kq, b, function () {
                    });
                    a.l = function (d) {
                        return tq(mq, b, function () {
                            return [];
                        })(d, c);
                    };
                    a.A = function () {
                        return tq(nq, b, function () {
                            return [];
                        })(c);
                    };
                }, wq = function (a) {
                    return _.wh(uq).l(a);
                }, Bb = function () {
                    return _.wh(uq).A();
                };
            var xq, yq, ng;
            xq = function () {
                var a = {};
                this.l = function (b, c) {
                    return null != a[b] ? a[b] : c;
                };
                this.A = function (b, c) {
                    return null != a[b] ? a[b] : c;
                };
                this.m = function (b, c) {
                    return null != a[b] ? a[b] : c;
                };
                this.H = function (b, c) {
                    return null != a[b] ? a[b] : c;
                };
                this.j = function () {
                };
            };
            _.v = function (a) {
                return _.wh(xq).l(a.j, a.defaultValue);
            };
            _.lb = function (a) {
                return _.wh(xq).A(a.j, a.defaultValue);
            };
            yq = function (a) {
                return _.wh(xq).m(a.j, a.defaultValue);
            };
            ng = function (a) {
                return _.wh(xq).H(a.j, a.defaultValue);
            };
            var Jg = function () {
                    return _.F.googletag || (_.F.googletag = {});
                }, ch = function (a, b) {
                    var c = Jg();
                    c.hasOwnProperty(a) || (c[a] = b);
                }, zq = function (a, b) {
                    a.addEventListener ? a.addEventListener('load', b, !1) : a.attachEvent && a.attachEvent('onload', b);
                };
            var Aq = {
                    247: 'https://securepubads.g.doubleclick.net',
                    7: 0.02,
                    13: 1500,
                    23: 0.001,
                    38: 0.001,
                    58: 1,
                    150: '',
                    211: !1,
                    253: !1,
                    172: null,
                    245: {},
                    180: null,
                    246: [],
                    227: {},
                    226: [],
                    248: 0,
                    228: '//www.googletagservices.com/pubconsole/',
                    261: '//console.googletagservices.com/pubconsole/',
                    250: null,
                    252: null,
                    258: null,
                    251: null,
                    259: null
                }, Bq, Cq, Dq, Eq, Fq;
            Aq[6] = Zl(window);
            Aq[49] = new Date().getTime();
            Aq[36] = Yl();
            Aq[148] = iq;
            Aq[221] = Yl();
            Aq[254] = Yl();
            Aq[204] = _.pg('-1', -1);
            Aq[257] = Yl();
            Aq[260] = void 0;
            Bq = function () {
                for (var a in Aq)
                    this[a] = Aq[a];
            };
            _.Xb = function (a) {
                return _.wh(Bq)[a];
            };
            Cq = Jg();
            Dq = _.wh(Bq);
            Eq = Cq._vars_;
            for (Fq in Eq)
                Dq[Fq] = Eq[Fq];
            Cq._vars_ = Dq;
            var Gq = {}, Hq = (Gq.companion_ads = 'companionAds', Gq.content = 'content', Gq.publisher_ads = 'pubads', Gq), Iq = function (a) {
                    return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en';
                }, ih = {
                    He: 'rewardedSlotReady',
                    Ge: 'rewardedSlotGranted',
                    De: 'rewardedSlotCanceled',
                    Ee: 'rewardedSlotClosed',
                    Fe: 'rewardedSlotCompleted',
                    Ie: 'slotAdded',
                    Le: 'slotRequested',
                    Me: 'slotResponseReceived',
                    Ke: 'slotRenderEnded',
                    Je: 'slotOnload',
                    Ne: 'slotVisibilityChanged',
                    ze: 'impressionViewable'
                };
            var Jq = function () {
                cq.apply(this, arguments);
            };
            _.N(Jq, cq);
            Jq.N = function () {
                throw Error('Must be overridden');
            };
            var Kb = function () {
                Jq.call(this, _.v(pc) || _.v(Ip) ? 1 : 0, _.F);
                this.l = 0;
                var a = _.v(pc) || _.v(Ip);
                _.F.google_measure_js_timing = a || _.F.google_measure_js_timing;
            };
            _.N(Kb, Jq);
            Ai(Kb);
            var Kq = Wc(function () {
                return !!$l(_.F.location.href);
            });
            var Yb = function (a, b) {
                    b = void 0 === b ? 'https://pagead2.googlesyndication.com' : b;
                    var c = void 0 === c ? zb(_.F) : c;
                    this.id = a;
                    this.Xb = b;
                    this.l = Math.random();
                    if (null == d || 0 > d || 1 < d)
                        var d = _.Xb(23);
                    this.A = this.l < d;
                    this.j = { pvsid: String(c) };
                }, Lq = function (a) {
                    var b;
                    a = Ib(a);
                    fc.set(a, (null !== (b = fc.get(a)) && void 0 !== b ? b : 0) + 1);
                }, dc = function () {
                    return [].concat(_.ec(_.r(fc, 'values').call(fc))).reduce(function (a, b) {
                        return a + b;
                    }, 0);
                }, q = function (a, b, c) {
                    'string' !== typeof c && (c = String(c));
                    /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b]);
                }, ac = function (a, b, c) {
                    b = void 0 === b ? null : b;
                    c = void 0 === c ? !1 : c;
                    b = void 0 === b ? null : b;
                    c = void 0 === c ? !1 : c;
                    if (Kq())
                        b = !0;
                    else {
                        var d = a.A;
                        b && 0 <= b && (d = (c ? a.l : Math.random()) < b);
                        b = d && !!a.id;
                    }
                    b && (_.v(uo) ? Rb(a.j, a.id) : (a = Mq(a) || '', _.Qm(window, a)));
                }, Mq = function (a) {
                    var b = a.Xb + '/pagead/gen_204?id=' + encodeURIComponent(a.id);
                    _.$b(a.j, function (c, d) {
                        c && (b += '&' + d + '=' + encodeURIComponent(c));
                    });
                    return b;
                }, Nq = function (a, b) {
                    3 >= b.length ? q(a, 'nw_id', b.join()) : (b = b.slice(0, 3), b.push('__extra__'), q(a, 'nw_id', b.join()));
                }, Zb = function (a, b) {
                    q(a, 'vrg', Pb());
                    b ? (Nq(a, b), q(a, 'nslots', b.length.toString())) : (Nq(a, [].concat(_.ec(_.r(fc, 'keys').call(fc)))), q(a, 'nslots', dc().toString()));
                    b = Bb();
                    b.length && q(a, 'eid', b.join());
                    q(a, 'pub_url', document.URL);
                }, mc = function (a, b, c) {
                    c = void 0 === c ? {
                        Xb: 'https://pagead2.googlesyndication.com',
                        ta: _.Xb(23)
                    } : c;
                    var d = c.Xb || 'https://pagead2.googlesyndication.com';
                    c = c.ta;
                    if (void 0 === c || 0 > c || 1 < c)
                        c = _.Xb(23);
                    Math.random() < c && (a = new Yb(a, d), b(a), ac(a, 1, !0));
                }, fc = new D.Map();
            var Wb = _.Xb(38);
            _.Oq = function () {
                this.A = this.A;
                this.fa = this.fa;
            };
            _.Oq.prototype.A = !1;
            _.Oq.prototype.wa = function () {
                this.A || (this.A = !0, this.H());
            };
            _.Pq = function (a, b) {
                _.Hg(a, _.Gi(sc, b));
            };
            _.Hg = function (a, b) {
                a.A ? b() : (a.fa || (a.fa = []), a.fa.push(b));
            };
            _.Oq.prototype.H = function () {
                if (this.fa)
                    for (; this.fa.length;)
                        this.fa.shift()();
            };
            var Qq = function () {
                    this.id = 'goog_' + Pj++;
                }, Rq = function () {
                    _.Oq.apply(this, arguments);
                    this.m = new D.Map();
                };
            _.N(Rq, _.Oq);
            Rq.prototype.H = function () {
                _.Oq.prototype.H.call(this);
                this.m.clear();
            };
            var Tq = function (a, b, c) {
                    var d, e;
                    if (a.A)
                        return function () {
                        };
                    var f = 'string' === typeof b ? b : b.id, g = null !== (e = null === (d = a.m.get(f)) || void 0 === d ? void 0 : d.add(c)) && void 0 !== e ? e : new D.Set([c]);
                    a.m.set(f, g);
                    return function () {
                        return void Sq(a, b, c);
                    };
                }, tg = function (a, b, c) {
                    c = void 0 === c ? function () {
                        return !0;
                    } : c;
                    return new D.Promise(function (d) {
                        var e = Tq(a, b, function (f) {
                            c(f) && (e(), d(f));
                        });
                    });
                }, Sq = function (a, b, c) {
                    var d;
                    return !(null === (d = a.m.get('string' === typeof b ? b : b.id)) || void 0 === d || !d.delete(c));
                };
            Rq.prototype.dispatchEvent = function (a, b, c) {
                var d;
                return A(this, function f() {
                    var g = this, h, k, l, m, n, p, t;
                    return B(f, function (u) {
                        1 == u.j && (h = g, k = 'string' === typeof a ? a : a.id, l = document.createEvent('CustomEvent'), l.initCustomEvent(k, !0, !0, c), m = null !== (d = g.m.get(k)) && void 0 !== d ? d : new D.Set(), n = {}, p = _.G(m), t = p.next());
                        if (5 != u.j) {
                            if (t.done) {
                                u.j = 0;
                                return;
                            }
                            n.zb = t.value;
                            return C(u, 0, 5);
                        }
                        rc(b, function (y) {
                            return function () {
                                h.m.has(k) && m.has(y.zb) && y.zb(l);
                            };
                        }(n), !0);
                        n = { zb: n.zb };
                        t = p.next();
                        u.j = 2;
                    });
                });
            };
            var Uq = new Qq(), Vq = new Qq(), Wq = new Qq(), Xq = new Qq(), Yq = new Qq(), Zq = new Qq(), $q = new Qq(), ar = new Qq(), ug = new Qq(), br = new Qq();
            var cr = function (a, b) {
                b = void 0 === b ? [] : b;
                this.l = a;
                this.j = b;
            };
            cr.prototype.getMessageId = function () {
                return this.l;
            };
            cr.prototype.getMessageArgs = function () {
                return this.j;
            };
            var dr = function (a, b, c) {
                this.A = new Date();
                this.m = c;
                this.j = a;
                this.l = b;
            };
            aa = dr.prototype;
            aa.getSlot = function () {
                return this.m;
            };
            aa.getLevel = function () {
                return this.j;
            };
            aa.getTimestamp = function () {
                return this.A;
            };
            aa.getMessage = function () {
                return this.l;
            };
            aa.toString = function () {
                return this.A.toTimeString() + ': ' + er[this.j] + ': ' + this.l;
            };
            var er = [
                'Debug',
                'Info',
                'Warning',
                'Error',
                'Fatal'
            ];
            var fr = function (a, b, c) {
                Rq.call(this);
                this.D = a;
                this.Da = b;
                this.G = this.D + '_' + this.Da;
                this.j = c;
                this.l = null;
            };
            _.N(fr, Rq);
            fr.prototype.getAdUnitPath = function () {
                return this.D;
            };
            fr.prototype.getName = function () {
                return this.D;
            };
            fr.prototype.N = function () {
                return this.Da;
            };
            fr.prototype.toString = function () {
                return this.G;
            };
            var gr = function (a, b) {
                a.l = b;
            };
            var hr = {
                    20: function (a) {
                        return 'Ignoring a call to setCollapseEmptyDiv(false, true). Slots that start out collapsed should also collapse when empty. Slot: ' + a[0] + '.';
                    },
                    23: function (a) {
                        return 'Error in googletag.display: could not find div with id "' + a[1] + '" in DOM for slot: ' + a[0] + '.';
                    },
                    34: function (a) {
                        return 'Size mapping is null because invalid mappings were added: ' + a[0] + '.';
                    },
                    60: function (a) {
                        return 'Ignoring the ' + a[0] + '(' + (a[1] || '') + ') call since the service is already enabled.';
                    },
                    66: function (a) {
                        return 'Slot ' + a[0] + ' cannot be refreshed until PubAdsService is enabled.';
                    },
                    68: function () {
                        return 'Slots cannot be cleared until service is enabled.';
                    },
                    80: function (a) {
                        return 'Slot object at position ' + a[0] + ' is of incorrect type.';
                    },
                    84: function (a) {
                        return 'Cannot find targeting attribute "' + a[0] + '" for "' + a[1] + '".';
                    },
                    93: function (a) {
                        return 'Failed to register listener. Unknown event type: ' + a[0] + '.';
                    },
                    96: function (a) {
                        return 'Invalid arguments: ' + a[0] + '(' + a[1] + ').';
                    },
                    122: function (a) {
                        return 'Invalid argument: ' + a[0] + '(' + a[1] + '). Valid values: ' + a[2] + '.';
                    },
                    121: function (a) {
                        return 'Invalid object passed to ' + a[0] + '(' + a[1] + '), for ' + a[2] + ': ' + a[3] + '.';
                    },
                    105: function (a) {
                        return 'SRA requests may include a maximum of 30 ad slots. ' + a[1] + ' were requested, so the last ' + a[2] + ' were ignored.';
                    },
                    106: function (a) {
                        return 'Publisher betas ' + a[0] + ' were declared after enableServices() was called.';
                    },
                    107: function (a) {
                        return 'Publisher betas may only be declared once. ' + a[0] + ' were added after betas had already been declared.';
                    },
                    108: function (a) {
                        return 'Beta keys cannot be cleared. clearTargeting() was called on ' + a[0] + '.';
                    },
                    123: function (a) {
                        return 'Refresh was throttled for slot: ' + a[0] + '.';
                    },
                    113: function (a) {
                        return a[0] + ' ad slot ineligible as page is not mobile optimized: ' + a[1] + '.';
                    },
                    116: function (a) {
                        return 'The unique SafeFrame domain setting in Google Ad Manager conflicts with the "useUniqueDomain" setting passed to the setSafeFrameConfig API method. GPT will use useUniqueDomain=' + a[0] + ' based on the API call.';
                    },
                    114: function () {
                        return 'setCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.';
                    },
                    115: function () {
                        return 'updateCorrelator has been deprecated. See the Google Ad Manager help page on "Creative selection for multiple ad slots" for more information: https://support.google.com/admanager/answer/183281.';
                    },
                    120: function () {
                        return 'Checking googletag.pubadsReady is discouraged. Please use googletag.cmd.push instead.';
                    },
                    124: function (a) {
                        return 'To reserve space and reduce layout shifts, consider setting min-width=' + a[2] + 'px, min-height=' + a[3] + 'px styles on the div element with id=' + a[1] + '. Learn more: https://developers.google.com/publisher-tag/guides/minimize-layout-shift';
                    }
                }, ir = {
                    26: function (a) {
                        return 'Div ID passed to googletag.display() does not match any defined slots: ' + a[0] + '.';
                    },
                    28: function (a) {
                        return 'Error in googletag.defineSlot: Cannot create slot ' + a[1] + '. Div element "' + a[0] + '" is already associated with another slot: ' + a[2] + '.';
                    },
                    92: function (a) {
                        return 'Exception in ' + a[1] + ' event listener: "' + a[0] + '".';
                    },
                    30: function (a) {
                        return 'Exception in googletag.cmd function: ' + a[0] + '.';
                    },
                    125: function (a) {
                        return 'google-product-ad element is invalid: ' + a[0] + '.';
                    }
                };
            var jr = function () {
                this.l = 0;
                this.j = [];
            };
            jr.prototype.add = function (a) {
                var b = this.j[this.l];
                this.j[this.l] = a;
                this.l = (this.l + 1) % 1000;
                return b;
            };
            jr.prototype.get = function (a) {
                a = kr(this, a);
                return this.j[a];
            };
            jr.prototype.set = function (a, b) {
                a = kr(this, a);
                this.j[a] = b;
            };
            jr.prototype.isEmpty = function () {
                return 0 == this.j.length;
            };
            var lr = function (a) {
                    for (var b = a.j.length, c = [], d = a.j.length - a.j.length; d < b; d++)
                        c.push(a.get(d));
                    return c;
                }, kr = function (a, b) {
                    if (b >= a.j.length)
                        throw Error('Out of bounds exception');
                    return 1000 > a.j.length ? b : (a.l + Number(b)) % 1000;
                };
            var mr = function () {
                    this.j = new jr();
                    this.l = this.A = 0;
                }, nr = function (a, b) {
                    return lr(a.j).filter(function (c) {
                        return c.getSlot() === b;
                    });
                }, or = function (a, b) {
                    return lr(a.j).filter(function (c) {
                        return c.getLevel() >= b;
                    });
                };
            mr.prototype.log = function (a, b, c, d) {
                var e = this;
                d = void 0 === d ? !1 : d;
                var f, g;
                c = new dr(a, b, null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.l) ? g : null);
                this.j.add(c);
                f = _.v(Un) && this.l < _.lb(Xn);
                g = _.v(Vn) && _.r(_.F.navigator.userAgent, 'includes').call(_.F.navigator.userAgent, 'Lighthouse');
                var h = _.lb(Wn) && 100 > this.A, k = 2 === a || 3 === a, l = b.getMessageArgs(), m = b.getMessageId(), n = hr[m] || ir[m];
                h && k && (b = _.lb(Wn), mc('gpt_eventlog_messages', function (z) {
                    ++e.A;
                    Zb(z);
                    q(z, 'level', a);
                    q(z, 'messageId', m);
                    q(z, 'args', l.join('|'));
                    n || q(z, 'noMsg', !0);
                    var K = Error();
                    q(z, 'stack', Sb(K.stack, K.message));
                }, { ta: b }));
                if (n) {
                    b = '[GPT] ' + n(l);
                    if (d)
                        throw Error(b);
                    if ((g || f) && k && _.F.console) {
                        var p, t, u, y;
                        2 === a ? null == (t = (p = _.F.console).warn) || t.call(p, b) : null == (y = (u = _.F.console).error) || y.call(u, b);
                        this.l++;
                    }
                }
                return c;
            };
            mr.prototype.info = function (a, b) {
                return this.log(1, a, void 0 === b ? null : b);
            };
            mr.prototype.M = function (a, b) {
                return this.log(2, a, b);
            };
            mr.prototype.error = function (a, b, c) {
                return this.log(3, a, b, void 0 === c ? !1 : c);
            };
            var Cc = function () {
                return _.wh(mr);
            };
            var T = function (a) {
                    return function (b) {
                        for (var c = [], d = 0; d < arguments.length; ++d)
                            c[d] = arguments[d];
                        return new cr(a, [].concat(_.ec(c)));
                    };
                }, pr = function (a) {
                    return '[' + a.map(function (b) {
                        return 'string' === typeof b ? '\'' + b + '\'' : Array.isArray(b) ? pr(b) : String(b);
                    }).join(', ') + ']';
                }, th = function (a, b) {
                    b = pr(b);
                    b = b.substring(1, b.length - 1);
                    return new cr(96, [
                        a,
                        b
                    ]);
                }, qr = T(2), rr = T(3), sr = T(4), tr = T(5), ur = T(6), vr = T(12), wr = T(14), xr = T(16), yr = T(19), zr = T(20), Ar = T(23), Br = T(26), Cr = T(28), Dr = T(30), Er = T(31), Fr = T(34), Gr = T(35), Hr = T(36), Ir = T(38), Jr = T(40), Kr = T(46), Lr = T(48), Mr = T(50), Nr = T(60), Or = T(63), Pr = T(64), Qr = T(66), Rr = T(68), Sr = T(69), Tr = T(70), Ur = T(71), Vr = T(78), Wr = T(80), Xr = T(82), Yr = T(84), Zr = T(85), $r = T(87), as = T(88), bs = T(92), cs = T(93), ds = T(99), es = T(103), fs = T(104), gs = T(105), hs = T(106), is = T(107), js = T(108), ks = T(113), ls = T(114), ms = T(115), ns = T(116), os = T(117), ps = T(118), qs = T(119), eh = T(120), Dc = T(121), Gc = T(122), rs = T(123), ss = T(124), Rh = T(125);
            var ts = function () {
                Rq.call(this);
                this.l = this.j = 0;
            };
            _.N(ts, Rq);
            ts.prototype.push = function (a) {
                const $___old_10446dcfe23dccb9 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage'), $___old_9621402d98e44b89 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                try {
                    if ($___old_10446dcfe23dccb9)
                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_6311a65d4da22df7.localStorage));
                    if ($___old_9621402d98e44b89)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_5de28d8956bfc0f9.XMLHttpRequest));
                    return function () {
                        for (var b = Cc(), c = 0; c < arguments.length; ++c)
                            try {
                                'function' === typeof arguments[c] && (arguments[c](), this.j++);
                            } catch (d) {
                                this.l++, window.console && window.console.error && window.console.error('Exception in queued GPT command', d), b.error(Dr(String(d)));
                            }
                        b.info(Er(String(this.j), String(this.l)));
                        return this.j;
                    }.apply(this, arguments);
                } finally {
                    if ($___old_10446dcfe23dccb9)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_10446dcfe23dccb9));
                    if ($___old_9621402d98e44b89)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_9621402d98e44b89));
                }
            };
            var vs = function (a) {
                P(this, a, us, null);
            };
            _.N(vs, O);
            var ws = function (a) {
                P(this, a, null, null);
            };
            _.N(ws, O);
            var us = [4];
            var ys = function (a) {
                P(this, a, xs, null);
            };
            _.N(ys, O);
            var zs = function (a) {
                P(this, a, null, null);
            };
            _.N(zs, O);
            var xs = [1];
            var As = function (a) {
                P(this, a, null, null);
            };
            _.N(As, O);
            var Bs = function (a) {
                P(this, a, null, null);
            };
            _.N(Bs, O);
            var Cs = function (a) {
                P(this, a, null, null);
            };
            _.N(Cs, O);
            var Ds = function (a) {
                    return 'CSS1Compat' == a.compatMode ? a.documentElement : a.body;
                }, Es = function (a, b) {
                    b = void 0 === b ? _.F : b;
                    a = a.scrollingElement || Ds(a);
                    return new _.ad(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop);
                }, $c = function (a) {
                    try {
                        return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length));
                    } catch (b) {
                        return !1;
                    }
                };
            var Fs = function (a, b, c) {
                a && null !== b && b != b.top && (b = b.top);
                try {
                    return (void 0 === c ? 0 : c) ? new _.rl(b.innerWidth, b.innerHeight).round() : _.yl(b || window).round();
                } catch (d) {
                    return new _.rl(-12245933, -12245933);
                }
            };
            var Gs = function (a) {
                for (var b = 0, c = a, d = 0; a && a != a.parent;)
                    a = a.parent, d++, Oe(a) && (c = a, b = d);
                return {
                    J: c,
                    level: b
                };
            };
            var Hs = function (a) {
                    return !!a && a.top == a;
                }, Is = function (a, b, c, d) {
                    c = c || a.google_ad_width;
                    d = d || a.google_ad_height;
                    if (Hs(a))
                        return !1;
                    var e = b.documentElement;
                    if (c && d) {
                        var f = 1, g = 1;
                        a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
                        if (g > 2 * d || f > 2 * c)
                            return !1;
                    }
                    return !0;
                }, Js = function (a) {
                    var b = a.location.href;
                    if (a == a.top)
                        return {
                            url: b,
                            jc: !0
                        };
                    var c = !1, d = a.document;
                    d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
                    (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
                    return {
                        url: b,
                        jc: c
                    };
                }, Ks = function () {
                    var a = gn();
                    if (a == a.top)
                        return 0;
                    for (; a && a != a.top && Oe(a); a = a.parent) {
                        if (a.sf_)
                            return 2;
                        if (a.$sf)
                            return 3;
                        if (a.inGptIF)
                            return 4;
                        if (a.inDapIF)
                            return 5;
                    }
                    return 1;
                };
            var Ls = function (a, b, c, d, e, f) {
                    try {
                        var g = a.j, h = _.Cl(a.j, 'SCRIPT');
                        h.async = !0;
                        wd(h, b);
                        g.head.appendChild(h);
                        h.addEventListener('load', function () {
                            e();
                            d && g.head.removeChild(h);
                        });
                        h.addEventListener('error', function () {
                            0 < c ? Ls(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f());
                        });
                    } catch (k) {
                        f();
                    }
                }, Ms = function (a, b, c, d) {
                    c = void 0 === c ? function () {
                    } : c;
                    d = void 0 === d ? function () {
                    } : d;
                    Ls(ul(a), b, 0, !1, c, d);
                };
            var Ns = function (a) {
                var b = a.document, c = ul(a), d = function () {
                        if (!a.frames.googlefcPresent)
                            if (b.body) {
                                var e = _.Cl(c.j, 'IFRAME');
                                e.style.display = 'none';
                                e.style.width = '0px';
                                e.style.height = '0px';
                                e.style.border = 'none';
                                e.style.zIndex = '-1000';
                                e.style.left = '-1000px';
                                e.style.top = '-1000px';
                                e.name = 'googlefcPresent';
                                b.body.appendChild(e);
                            } else
                                a.setTimeout(d, 5);
                    };
                d();
            };
            var Os = function (a) {
                    void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent && (a.addtlConsent = void 0);
                    void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies && (a.gdprApplies = void 0);
                    return void 0 !== a.tcString && 'string' !== typeof a.tcString || void 0 !== a.listenerId && 'number' !== typeof a.listenerId ? 2 : a.cmpStatus && 'error' !== a.cmpStatus ? 0 : 3;
                }, Ps = function (a, b) {
                    b = void 0 === b ? 500 : b;
                    _.Oq.call(this);
                    this.j = a;
                    this.l = null;
                    this.D = {};
                    this.o = 0;
                    this.G = b;
                    this.m = null;
                };
            _.N(Ps, _.Oq);
            Ps.prototype.H = function () {
                this.D = {};
                this.m && (_.ie(this.j, 'message', this.m), delete this.m);
                delete this.D;
                delete this.j;
                delete this.l;
                _.Oq.prototype.H.call(this);
            };
            var Rs = function (a) {
                return 'function' === typeof a.j.__tcfapi || null != Qs(a);
            };
            Ps.prototype.addEventListener = function (a) {
                var b = {}, c = _.Li(function () {
                        return a(b);
                    }), d = 0;
                -1 !== this.G && (d = setTimeout(function () {
                    b.tcString = 'tcunavailable';
                    b.internalErrorState = 1;
                    c();
                }, this.G));
                var e = function (f, g) {
                    clearTimeout(d);
                    f ? (b = f, b.internalErrorState = Os(b), g && 0 === b.internalErrorState || (b.tcString = 'tcunavailable', g || (b.internalErrorState = 3))) : (b.tcString = 'tcunavailable', b.internalErrorState = 3);
                    a(b);
                };
                try {
                    Ss(this, 'addEventListener', e);
                } catch (f) {
                    b.tcString = 'tcunavailable', b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c();
                }
            };
            Ps.prototype.removeEventListener = function (a) {
                a && a.listenerId && Ss(this, 'removeEventListener', null, a.listenerId);
            };
            var Us = function (a, b) {
                    var c = { internalErrorState: 0 }, d = _.Li(function () {
                            return b(c);
                        }), e = 0;
                    -1 !== a.G && (e = setTimeout(function () {
                        c.tcString = 'tcunavailable';
                        c.internalErrorState = 1;
                        d();
                    }, a.G));
                    Ss(a, 'addEventListener', function (f, g) {
                        e && (clearTimeout(e), e = 0);
                        g && (c = f);
                        c.internalErrorState = Os(c);
                        0 != c.internalErrorState && (c.tcString = 'tcunavailable');
                        if (0 != c.internalErrorState || Ts(c))
                            Ss(a, 'removeEventListener', null, c.listenerId), d();
                    });
                }, Ss = function (a, b, c, d) {
                    c || (c = function () {
                    });
                    if ('function' === typeof a.j.__tcfapi)
                        a = a.j.__tcfapi, a(b, 2, c, d);
                    else if (Qs(a)) {
                        Vs(a);
                        var e = ++a.o;
                        a.D[e] = c;
                        a.l && (c = {}, a.l.postMessage((c.__tcfapiCall = {
                            command: b,
                            version: 2,
                            callId: e,
                            parameter: d
                        }, c), '*'));
                    } else
                        c({}, !1);
                }, Qs = function (a) {
                    if (a.l)
                        return a.l;
                    a.l = fm(a.j, '__tcfapiLocator');
                    return a.l;
                }, Vs = function (a) {
                    a.m || (a.m = function (b) {
                        try {
                            var c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                            a.D[c.callId](c.returnValue, c.success);
                        } catch (d) {
                        }
                    }, _.xd(a.j, 'message', a.m));
                }, Ts = function (a) {
                    if (!1 === a.gdprApplies)
                        return !0;
                    void 0 === a.internalErrorState && (a.internalErrorState = Os(a));
                    return 'error' === a.cmpStatus || 0 !== a.internalErrorState || 'loaded' === a.cmpStatus && ('tcloaded' === a.eventStatus || 'useractioncomplete' === a.eventStatus) ? !0 : !1;
                };
            var Ws = function (a, b, c) {
                    this.j = a;
                    this.A = b;
                    this.l = void 0 === c ? function () {
                    } : c;
                }, Xs = function (a, b, c) {
                    return new Ws(a, b, c);
                };
            Ws.prototype.start = function () {
                try {
                    Ns(this.j), Ys(this);
                } catch (a) {
                }
            };
            var Ys = function (a) {
                var b = Dd(Ui('https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}'), {
                    id: a.A,
                    ers: 3
                });
                Ms(a.j, b, function () {
                    a.l(!0);
                }, function () {
                    a.l(!1);
                });
            };
            var $s = function (a) {
                P(this, a, Zs, null);
            };
            _.N($s, O);
            var bt = function (a, b) {
                    Wd(a, 1, b, at);
                }, at = function (a) {
                    P(this, a, null, null);
                };
            _.N(at, O);
            var ct = function (a) {
                    var b = new at();
                    return Fb(b, 1, a);
                }, dt = function (a, b) {
                    return Ab(a, 2, b, 0);
                }, Zs = [1];
            var ft = function (a, b) {
                    var c = window;
                    a: {
                        try {
                            if (a) {
                                var d = a.getItem('google_experiment_mod');
                                break a;
                            }
                        } catch (h) {
                        }
                        d = null;
                    }
                    var e = d || '';
                    d = null;
                    try {
                        if (d = Kh($s, e), e) {
                            var f = Kh($s, e);
                            bt(f, dt(ct(1), -1));
                            gl(f);
                        }
                    } catch (h) {
                        et(e), d = new $s();
                    }
                    f = I(d, at, 1);
                    if (f = ca(f, function (h) {
                            return kf(h, 1, 0) === b;
                        })) {
                        var g = Xg(f, 2);
                        if (null === g || isNaN(g))
                            et(e);
                        else
                            return g;
                    }
                    c = Vl(c);
                    if (null === c)
                        return null;
                    f ? dt(f, c) : bt(d, dt(ct(b), c));
                    return Wl(a, gl(d)) ? c : null;
                }, et = function (a) {
                    0.01 > Math.random() && Rb({ data: a }, 'ls_tamp');
                };
            var wc = function (a) {
                    this.j = a || { cookie: '' };
                }, it = function () {
                    var a = gt;
                    if (!_.F.navigator.cookieEnabled)
                        return !1;
                    if (!a.isEmpty())
                        return !0;
                    a.set('TESTCOOKIESENABLED', '1', { kc: 60 });
                    if ('1' !== a.get('TESTCOOKIESENABLED'))
                        return !1;
                    ht(a, 'TESTCOOKIESENABLED');
                    return !0;
                };
            wc.prototype.set = function (a, b, c) {
                var d = !1;
                if ('object' === typeof c) {
                    var e = c.af;
                    d = c.Ud || !1;
                    var f = c.domain || void 0;
                    var g = c.path || void 0;
                    var h = c.kc;
                }
                if (/[;=\s]/.test(a))
                    throw Error('Invalid cookie name "' + a + '"');
                if (/[;\r\n]/.test(b))
                    throw Error('Invalid cookie value "' + b + '"');
                void 0 === h && (h = -1);
                this.j.cookie = a + '=' + b + (f ? ';domain=' + f : '') + (g ? ';path=' + g : '') + (0 > h ? '' : 0 == h ? ';expires=' + new Date(1970, 1, 1).toUTCString() : ';expires=' + new Date(Date.now() + 1000 * h).toUTCString()) + (d ? ';secure' : '') + (null != e ? ';samesite=' + e : '');
            };
            wc.prototype.get = function (a, b) {
                for (var c = a + '=', d = (this.j.cookie || '').split(';'), e = 0, f; e < d.length; e++) {
                    f = hj(d[e]);
                    if (0 == f.lastIndexOf(c, 0))
                        return f.substr(c.length);
                    if (f == a)
                        return '';
                }
                return b;
            };
            var ht = function (a, b) {
                a.get(b);
                a.set(b, '', {
                    kc: 0,
                    path: void 0,
                    domain: void 0
                });
            };
            wc.prototype.isEmpty = function () {
                return !this.j.cookie;
            };
            var jt = new wc('undefined' == typeof document ? null : document);
            var kt = function (a) {
                P(this, a, null, null);
            };
            _.N(kt, O);
            var lt = function () {
                    this.j = window;
                    this.l = 0;
                }, mt = function (a, b) {
                    return xc('__gads', b, a.j);
                }, nt = function (a, b, c) {
                    var d = {
                            kc: H(b, 2) - a.j.Date.now() / 1000,
                            path: H(b, 3),
                            domain: H(b, 4),
                            Ud: !1
                        }, e = H(b, 1), f = a.j;
                    x(c, 5) && vc(f) && new wc(f.document).set('__gads', e, d);
                    x(c, 5) && 0.01 > a.j.Math.random() && (c = mt(a, c), Rb({
                        domain: H(b, 4),
                        host: a.j.location.host,
                        success: c === H(b, 1) ? '1' : '0'
                    }, 'gfp_cw_status'));
                };
            var ot = {}, pt = (ot[3] = aj(Ti(Ui('https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js'))), ot), qt = {}, rt = (qt[3] = aj(Ti(Ui('https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js'))), qt);
            var st = function (a) {
                    this.j = a;
                    this.l = Oj();
                }, tt = function (a) {
                    var b = {};
                    _.Ni(a, function (c) {
                        b[c.j] = c.l;
                    });
                    return b;
                };
            var vt, wt, xt;
            vt = function () {
                return 0 != _.ut(document);
            };
            _.ut = function (a) {
                return {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ''] || 0;
            };
            wt = function (a) {
                var b;
                a.visibilityState ? b = 'visibilitychange' : a.mozVisibilityState ? b = 'mozvisibilitychange' : a.webkitVisibilityState && (b = 'webkitvisibilitychange');
                return b;
            };
            xt = function (a) {
                return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null;
            };
            var yt = function () {
                    this.j = [];
                    this.l = [];
                    this.A = [];
                }, zt = function (a, b, c) {
                    a.l.push({
                        Ac: void 0 === c ? !1 : c,
                        Ec: b
                    });
                };
            var De = function () {
                var a = this;
                this.promise = new D.Promise(function (b, c) {
                    a.resolve = b;
                    a.reject = c;
                });
            };
            var At = function (a) {
                a = Error.call(this, a);
                this.message = a.message;
                'stack' in a && (this.stack = a.stack);
                _.r(Object, 'setPrototypeOf').call(Object, this, At.prototype);
                this.name = 'InputError';
            };
            _.N(At, Error);
            var Bt = function () {
                    var a = this;
                    this.F = this.m = null;
                    this.D = -1;
                    this.H = new De();
                    this.A = !1;
                    this.H.promise.then(function () {
                        -1 !== a.D && (a.F = _.yc() - a.D);
                    }, function () {
                    });
                }, Ct = function () {
                    Bt.apply(this, arguments);
                };
            _.N(Ct, Bt);
            Ct.prototype.j = function (a) {
                this.A || (this.A = !0, this.m = a, this.H.resolve(a));
            };
            Ct.prototype.l = function (a) {
                null == a ? Dt(this) : this.j(a);
            };
            var Dt = function (a) {
                    a.A || (a.A = !0, a.m = null, a.H.resolve(null));
                }, Et = function (a, b) {
                    a.A || (a.A = !0, a.m = null, a.B = b, a.H.reject(b));
                };
            Xh.Object.defineProperties(Ct.prototype, {
                promise: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.H.promise;
                    }
                },
                G: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.A;
                    }
                },
                o: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.F;
                    }
                }
            });
            var Ft = function (a) {
                Bt.call(this);
                this.j = a;
            };
            _.N(Ft, Bt);
            var Gt = function (a) {
                return null !== a.j.m;
            };
            Xh.Object.defineProperties(Ft.prototype, {
                value: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.j.m;
                    }
                },
                error: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.j.B;
                    }
                }
            });
            var Ht = function () {
                Ft.apply(this, arguments);
            };
            _.N(Ht, Ft);
            Xh.Object.defineProperties(Ht.prototype, {
                value: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.j.m;
                    }
                }
            });
            var It = function () {
                Ct.apply(this, arguments);
            };
            _.N(It, Ct);
            It.prototype.notify = function () {
                Dt(this);
            };
            var Jt = function (a, b) {
                b = void 0 === b ? 0 : b;
                _.Oq.call(this);
                var c = this;
                this.id = a;
                this.wb = b;
                this.D = new yt();
                this.qa = !1;
                this.ba = -1;
                _.Hg(this, function () {
                    var d = c.D;
                    d.j.length = 0;
                    d.A.length = 0;
                    d.l.length = 0;
                });
            };
            _.N(Jt, _.Oq);
            Jt.prototype.start = function () {
                return A(this, function b() {
                    var c = this, d, e, f, g;
                    return B(b, function (h) {
                        switch (h.j) {
                        case 1:
                            if (c.qa)
                                return h.return();
                            c.qa = !0;
                            h.H = 2;
                            return C(h, zc(c.D.l, c.wb), 4);
                        case 4:
                            c.ba = h.l;
                            if (c.A) {
                                h.j = 5;
                                break;
                            }
                            for (var k = 0, l = _.G(c.D.A), m = l.next(); !m.done; m = l.next()) {
                                if (!Gt(m.value))
                                    throw Error('missing input: ' + c.id + '/' + k);
                                ++k;
                            }
                            d = _.G(c.D.j);
                            for (e = d.next(); !e.done; e = d.next())
                                f = e.value, f.D = _.yc();
                            return C(h, c.j(), 5);
                        case 5:
                            Ad(h, 0);
                            break;
                        case 2:
                            g = Bd(h);
                            if (c.A)
                                return h.return();
                            g instanceof At ? c.ea(g) : g instanceof Error && (c.V(g), c.G(g));
                            mi(h);
                        }
                    });
                });
            };
            Jt.prototype.l = function () {
                var a = new Ct();
                this.D.j.push(a);
                return a;
            };
            var Kt = function (a) {
                    var b = new It();
                    a.D.j.push(b);
                    return b;
                }, U = function (a, b) {
                    zt(a.D, b);
                    b = new Ht(b);
                    a.D.A.push(b);
                    return b;
                }, V = function (a, b) {
                    zt(a.D, b);
                    return new Ft(b);
                }, Lt = function (a, b) {
                    zt(a.D, b, !0);
                    return new Ft(b);
                }, Mt = function (a, b) {
                    zt(a.D, b);
                };
            Jt.prototype.ea = function () {
            };
            Jt.prototype.G = function (a) {
                if (this.D.j.length) {
                    a = new At(a.message);
                    for (var b = _.G(this.D.j), c = b.next(); !c.done; c = b.next())
                        if (c = c.value, !c.G) {
                            var d = a;
                            c.A = !0;
                            c.B = d;
                            c.H.reject(d);
                        }
                }
            };
            var ne = function () {
                _.Oq.apply(this, arguments);
                this.j = [];
            };
            _.N(ne, _.Oq);
            var oe = function (a, b) {
                    b = _.G(b);
                    for (var c = b.next(); !c.done; c = b.next())
                        c = c.value, _.Pq(a, c), a.j.push(c);
                }, W = function (a, b) {
                    oe(a, [b]);
                }, pe = function (a) {
                    if (a.j.length) {
                        a = _.G(a.j);
                        for (var b = a.next(); !b.done; b = a.next())
                            b.value.start();
                    }
                };
            ne.prototype.H = function () {
                _.Oq.prototype.H.call(this);
                this.j.length = 0;
            };
            var Ot, Nt;
            Ot = function () {
                this.wasPlaTagProcessed = !1;
                this.wasReactiveAdConfigReceived = {};
                this.adCount = {};
                this.wasReactiveAdVisible = {};
                this.stateForType = {};
                this.reactiveTypeEnabledInAsfe = {};
                this.wasReactiveTagRequestSent = !1;
                this.reactiveTypeDisabledByPublisher = {};
                this.tagSpecificState = {};
                this.messageValidationEnabled = !1;
                this.floatingAdsStacking = new Nt();
            };
            _.pd = function (a) {
                a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Nt()) : a.google_reactive_ads_global_state = new Ot();
                return a.google_reactive_ads_global_state;
            };
            Nt = function () {
                this.maxZIndexRestrictions = {};
                this.nextRestrictionId = 0;
                this.maxZIndexListeners = [];
            };
            var sd, cd, fd;
            sd = 728 * 1.38;
            _.rd = function (a) {
                return a.innerHeight >= a.innerWidth;
            };
            _.Pt = function (a) {
                var b = _.ed(a).clientWidth;
                a = a.innerWidth;
                return b && a ? b / a : 0;
            };
            cd = function (a, b) {
                return (a = _.ed(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384;
            };
            fd = function (a) {
                return (a = _.Pt(a)) ? 1.05 < a ? 262144 : 0.95 > a ? 524288 : 0 : 131072;
            };
            _.ed = function (a) {
                a = a.document;
                var b = {};
                a && (b = 'CSS1Compat' == a.compatMode ? a.documentElement : a.body);
                return b || {};
            };
            _.Qt = function (a) {
                return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset;
            };
            var St, Rt;
            _.hd = function (a) {
                var b;
                if (!(b = null == a)) {
                    try {
                        a.setItem('__storage_test__', '__storage_test__');
                        var c = a.getItem('__storage_test__');
                        a.removeItem('__storage_test__');
                        var d = '__storage_test__' == c;
                    } catch (e) {
                        d = !1;
                    }
                    b = !d;
                }
                return b ? null : (a = Rt(a)) ? St(a) : null;
            };
            St = function (a) {
                a = void 0 === a ? [] : a;
                var b = Date.now();
                return _.Ae(a, function (c) {
                    return 3600000 > b - c;
                });
            };
            _.gd = function (a) {
                return !!a && 1 > a.length;
            };
            Rt = function (a) {
                try {
                    var b = a.getItem('__lsv__');
                    if (!b)
                        return [];
                    try {
                        var c = JSON.parse(b);
                    } catch (d) {
                    }
                    return !Array.isArray(c) || _.Pi(c, function (d) {
                        return !_.r(Number, 'isInteger').call(Number, d);
                    }) ? (a.removeItem('__lsv__'), []) : c;
                } catch (d) {
                    return null;
                }
            };
            var Tt = function (a) {
                P(this, a, null, null);
            };
            _.N(Tt, O);
            var Vt = function (a) {
                P(this, a, Ut, null);
            };
            _.N(Vt, O);
            var Ut = [
                1,
                2
            ];
            var Wt = function (a) {
                P(this, a, null, null);
            };
            _.N(Wt, O);
            var Xt = function (a) {
                P(this, a, null, null);
            };
            _.N(Xt, O);
            var Yt = function (a) {
                _.Oq.call(this);
                this.j = a;
                this.m = this.l = null;
                this.D = {};
                this.o = 0;
                this.G = !1;
            };
            _.N(Yt, _.Oq);
            var Zt = function (a) {
                    a.G || (a.l || (a.j.googlefc ? a.l = a.j : a.l = fm(a.j, 'googlefcPresent')), a.G = !0);
                    return !!a.l;
                }, au = function (a, b, c) {
                    if (Zt(a))
                        if (a.l === a.j)
                            a = a.j.googlefc || (a.j.googlefc = {}), a.__fci = a.__fci || [], a.__fci.push(b, function (f) {
                                c(Kh(Xt, f));
                            });
                        else {
                            $t(a);
                            var d = a.o++;
                            a.D[d] = c;
                            var e = {};
                            a.l.postMessage((e.__fciCall = {
                                command: b,
                                callId: d
                            }, e), '*');
                        }
                }, bu = function (a, b) {
                    return new D.Promise(function (c) {
                        au(a, b, c);
                    });
                }, $t = function (a) {
                    a.m || (a.m = function (b) {
                        try {
                            var c = Kh(Xt, b.data.__fciReturn);
                            (0, a.D[H(c, 1)])(c);
                        } catch (d) {
                        }
                    }, _.xd(a.j, 'message', a.m));
                }, cu = function (a, b, c, d) {
                    if (!b)
                        return D.Promise.resolve(null);
                    var e = M(b, Tt, 3);
                    b = M(b, Wt, 2);
                    return e && b && 1 === H(b, 1) && 2 === H(e, 1) ? bu(a, 'getM25Consent').then(function (f) {
                        var g = M(f, Vt, 4);
                        if (g) {
                            if (f = d, c) {
                                var h = H(g, 1);
                                h && _.r(h, 'includes').call(h, c) && (f = !1);
                                (g = H(g, 2)) && _.r(g, 'includes').call(g, c) && (f = !0);
                            }
                        } else
                            f = null;
                        return f;
                    }) : D.Promise.resolve(null);
                };
            var du = function () {
                this.j = [];
                this.l = -1;
            };
            du.prototype.set = function (a, b) {
                b = void 0 === b ? !0 : b;
                0 <= a && 52 > a && 0 === a % 1 && this.j[a] != b && (this.j[a] = b, this.l = -1);
            };
            du.prototype.get = function (a) {
                return !!this.j[a];
            };
            var eu = function (a) {
                -1 == a.l && (a.l = Oi(a.j, function (b, c, d) {
                    return c ? b + Math.pow(2, d) : b;
                }));
                return a.l;
            };
            var fu = function () {
                }, ku, ou, pu, Rf, ju, iu, hu, qu;
            fu.N = function () {
                throw Error('Must be overridden');
            };
            var gu = function () {
                this.l = this.mb = null;
                this.j = new D.Map();
            };
            _.N(gu, fu);
            ku = function (a, b) {
                a.j.get(b) || (a.j.set(b, {
                    Va: !0,
                    Nb: '',
                    Ra: '',
                    tb: 0,
                    Ic: 0,
                    nc: [],
                    oc: [],
                    isBackfill: !1,
                    ab: !1
                }), _.Hg(b, function () {
                    a.j.delete(b);
                    hu(a, b);
                }), Tq(b, Wq, function (c) {
                    c = c.detail;
                    var d = a.j.get(b);
                    d.Nb = H(c, 33) || '';
                    d.ab = !0;
                    d.isBackfill = !!x(c, 9);
                    iu(a, b, function () {
                        d.Nb = '';
                    });
                    ju(a, b, function () {
                        d.isBackfill = !1;
                        d.ab = !1;
                    });
                }));
            };
            _.lu = function (a, b) {
                var c, d;
                return null !== (d = null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.Va) && void 0 !== d ? d : !1;
            };
            _.mu = function (a, b) {
                a.j.get(b) && (a.j.get(b).Va = !1);
            };
            _.nu = function (a, b) {
                a.j.get(b) && (a.j.get(b).Va = !0);
            };
            ou = function (a, b) {
                if (!b.length)
                    return [];
                var c = Ib(b[0].getAdUnitPath());
                return [].concat(_.ec(_.r(a.j, 'entries').call(a.j))).filter(function (d) {
                    d = _.G(d);
                    var e = d.next().value;
                    return !!d.next().value.Nb && Ib(e.getAdUnitPath()) === c && !_.r(b, 'includes').call(b, e);
                }).map(function (d) {
                    d = _.G(d);
                    d.next();
                    return d.next().value.Nb;
                });
            };
            pu = function (a, b) {
                var c, d;
                return null !== (d = null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.Ra) && void 0 !== d ? d : '';
            };
            Rf = function (a, b) {
                return (a = a.j.get(b)) && a.tb - 1 || 0;
            };
            ju = function (a, b, c) {
                (a = a.j.get(b)) && a.nc.push(c);
            };
            iu = function (a, b, c) {
                (a = a.j.get(b)) && a.oc.push(c);
            };
            hu = function (a, b) {
                if (a = a.j.get(b))
                    for (b = a.oc.slice(), a.oc.length = 0, a = _.G(b), b = a.next(); !b.done; b = a.next())
                        b = b.value, b();
            };
            qu = function (a, b) {
                if (a = a.j.get(b))
                    for (b = a.nc.slice(), a.nc.length = 0, a = _.G(b), b = a.next(); !b.done; b = a.next())
                        b = b.value, b();
            };
            gu.prototype.isBackfill = function (a) {
                var b, c;
                return null !== (c = null === (b = this.j.get(a)) || void 0 === b ? void 0 : b.isBackfill) && void 0 !== c ? c : !1;
            };
            gu.prototype.ab = function (a) {
                var b, c;
                return null !== (c = null === (b = this.j.get(a)) || void 0 === b ? void 0 : b.ab) && void 0 !== c ? c : !1;
            };
            var ru = function (a, b, c) {
                    var d;
                    if (a = a.j.get(b))
                        null === (d = a.rc) || void 0 === d ? void 0 : d.wa(), a.rc = c;
                }, su = function (a, b) {
                    var c;
                    if (a = a.j.get(b))
                        null === (c = a.rc) || void 0 === c ? void 0 : c.wa(), delete a.rc;
                };
            Ai(gu);
            var tu = function () {
                var a = {};
                return a.adsense_channel_ids = 'channel', a.adsense_ad_types = 'ad_type', a.adsense_ad_format = 'format', a.adsense_background_color = 'color_bg', a.adsense_border_color = 'color_border', a.adsense_link_color = 'color_link', a.adsense_text_color = 'color_text', a.adsense_url_color = 'color_url', a.page_url = 'url', a.adsense_allow_expandable_ads = 'ea', a.adsense_encoding = 'oe', a.adsense_family_safe = 'adsafe', a.adsense_flash_version = 'flash', a.adsense_font_face = 'f', a.adsense_hints = 'hints', a.adsense_keyword_type = 'kw_type', a.adsense_keywords = 'kw', a.adsense_test_mode = 'adtest', a.alternate_ad_iframe_color = 'alt_color', a.alternate_ad_url = 'alternate_ad_url', a.demographic_age = 'cust_age', a.demographic_gender = 'cust_gender', a.document_language = 'hl', a;
            };
            var uu = new D.Map(), vu = new D.Map(), wu = function () {
                }, Qc = function (a, b) {
                    var c = vu.get(a);
                    c || (b = c = b(), uu.set(b, a), vu.set(a, b));
                    return c;
                }, xu = function (a) {
                    return (a = Hq[a]) ? Jg()[a]() : null;
                };
            var Bf = function (a) {
                P(this, a, yu, null);
            };
            _.N(Bf, O);
            var Cf = function (a) {
                    return H(a, 1);
                }, zu = function (a, b) {
                    return E(a, 1, b);
                }, Au = function (a, b) {
                    return Cb(a, 2, b);
                }, yu = [2];
            var Nc = function (a) {
                P(this, a, null, null);
            };
            _.N(Nc, O);
            var Mc = function (a, b) {
                    return E(a, 1, b);
                }, Lc = function (a, b) {
                    return E(a, 2, b);
                }, Bu = function () {
                    var a = new Nc();
                    return E(a, 3, !0);
                };
            var Bc = function (a) {
                P(this, a, Cu, Ic);
            };
            _.N(Bc, O);
            var Hc = function (a, b) {
                    return E(a, 1, b);
                }, Kc = function (a, b) {
                    Db(a, 5, b);
                }, Fc = function (a, b) {
                    return E(a, 10, b);
                }, ef = function (a, b) {
                    E(a, 13, b);
                }, Oc = function (a, b) {
                    return E(a, 15, b);
                }, Cu = [6], Ic = [
                    [
                        2,
                        3
                    ],
                    [
                        7,
                        12
                    ]
                ];
            var Ze = function (a) {
                P(this, a, null, null);
            };
            _.N(Ze, O);
            var af = function (a, b) {
                    return E(a, 1, b);
                }, $e = function (a, b) {
                    return Db(a, 2, b);
                };
            var Yf = function (a) {
                P(this, a, null, null);
            };
            _.N(Yf, O);
            var Eu = function (a) {
                P(this, a, Du, null);
            };
            _.N(Eu, O);
            var Du = [2];
            var Fu = function (a) {
                P(this, a, null, null);
            };
            _.N(Fu, O);
            var Hu = function (a) {
                P(this, a, Gu, null);
            };
            _.N(Hu, O);
            Hu.prototype.getAdUnitPath = function () {
                return H(this, 1);
            };
            var Iu = function (a, b) {
                    E(a, 2, b);
                }, Ju = function (a, b) {
                    E(a, 24, b);
                };
            Hu.prototype.ya = function () {
                return M(this, Fu, 13);
            };
            var kd = function (a) {
                    return kf(a, 15, 0);
                }, bf = function (a, b) {
                    return Wd(a, 21, b, Ze);
                }, Gu = [
                    3,
                    4,
                    5,
                    6,
                    8,
                    9,
                    21
                ];
            var Ku = function (a, b, c, d, e) {
                    if ('string' !== typeof c || gj(c))
                        e.M(th('Slot.setTargeting', [
                            c,
                            d
                        ]), a);
                    else {
                        var f = [];
                        Array.isArray(d) ? f = d : qa(d) ? f = _.v(Uo) ? Array.prototype.slice.call(d) : _.r(Array, 'from').call(Array, d) : d && (f = [d]);
                        f = f.map(String);
                        (d = (L = I(b, Bf, 9), _.r(L, 'find')).call(L, function (g) {
                            return Cf(g) === c;
                        })) ? Au(d, f) : (d = Au(zu(new Bf(), c), f), Wd(b, 9, d, Bf));
                        e.info(as(c, f.join(), b.getAdUnitPath()), a);
                    }
                }, Lu = function (a, b, c, d) {
                    if (null == c || 'object' !== typeof c)
                        d.error(th('Slot.updateTargetingFromMap', [c]), a);
                    else
                        for (var e = _.G(_.r(Object, 'keys').call(Object, c)), f = e.next(); !f.done; f = e.next())
                            f = f.value, Ku(a, b, f, c[f], d);
                };
            var Mu = function (a) {
                this.getId = w(593, function () {
                    return a.G;
                });
                this.getAdUnitPath = w(594, function () {
                    return a.getAdUnitPath();
                });
                this.getName = w(595, function () {
                    return a.getName();
                });
                this.toString = w(596, function () {
                    return a.toString();
                });
                this.getDomId = w(597, function () {
                    return a.j;
                });
            };
            var Nu = function (a) {
                    return Array.isArray(a) && 2 == a.length ? Cm(a[0]) && Cm(a[1]) : 'string' === typeof a && 'fluid' == a;
                }, Ou = function (a) {
                    return Array.isArray(a) && 2 == a.length && Cm(a[0]) && Cm(a[1]);
                }, Pu = function (a) {
                    return Array.isArray(a) ? Lc(Mc(new Nc(), a[0]), a[1]) : Bu();
                }, Qu = function (a) {
                    var b = [];
                    if (Jc(a))
                        b.push(Pu(a));
                    else if (Array.isArray(a))
                        for (var c = 0; c < a.length; ++c) {
                            var d = a[c];
                            Jc(d) && b.push(Pu(d));
                            sa(d, ['fluid']) && b.push(Bu());
                        }
                    return b;
                }, Ru = function (a) {
                    if (!a || !Array.isArray(a) || 2 !== a.length)
                        return null;
                    var b = a[0];
                    a = a[1];
                    if ('number' === typeof b && 0 <= b)
                        b = Math.floor(b);
                    else if (null !== b)
                        return null;
                    if ('number' === typeof a && 0 <= a)
                        a = Math.floor(a);
                    else if (null !== a)
                        return null;
                    return Lc(Mc(new Nc(), b), a);
                }, Su = function (a) {
                    var b = null, c = null;
                    var d = a && (Array.isArray(a.fixed) || 'fluid' === a.fixed);
                    var e = a && Array.isArray(a.max);
                    if (a && !Array.isArray(a) && (d || e)) {
                        if (d = Qu(a.fixed), c = Ru(a.max))
                            a.min ? ((b = Ru(a.min)) && null === H(b, 1) && Mc(b, 0), b && null === H(b, 2) && Lc(b, 0)) : b = Lc(Mc(new Nc(), 0), 0);
                    } else
                        d = Qu(a);
                    if (a && !Array.isArray(a)) {
                        if (a.max && !c)
                            throw Error('Invalid GPT maximum size: ' + JSON.stringify(a));
                        if (a.min && !b)
                            throw Error('Invalid GPT maximum size: ' + JSON.stringify(a));
                    }
                    if (c) {
                        if (0 === H(c, 1) || 0 === H(c, 2))
                            throw Error('Invalid GPT size, maximums cannot be zero: ' + JSON.stringify(a));
                        if (b) {
                            e = H(b, 1);
                            var f = H(c, 1);
                            if (null != e && null != f && e > f)
                                throw Error('Invalid GPT size: minimum width larger than maximum width: ' + JSON.stringify(a));
                            e = H(b, 2);
                            f = H(c, 2);
                            if (null != e && null != f && e > f)
                                throw Error('Invalid GPT size: minimum height larger than maximum height: ' + JSON.stringify(a));
                        }
                    }
                    d.length || c || tm('Invalid GPT fixed size specification: ' + JSON.stringify(a));
                    c && b ? (a = new Yf(), c = Db(a, 1, c), b = Db(c, 2, b)) : b = null;
                    return {
                        rd: d,
                        Ta: b
                    };
                }, Jc = function (a) {
                    return Array.isArray(a) && 1 < a.length ? 'number' === typeof a[0] && 'number' === typeof a[1] : 'string' === typeof a && 'fluid' == a;
                };
            var Tu = function (a) {
                P(this, a, null, null);
            };
            _.N(Tu, O);
            var Uu = function (a) {
                P(this, a, null, null);
            };
            _.N(Uu, O);
            var Wu = function (a) {
                P(this, a, Vu, null);
            };
            _.N(Wu, O);
            var Xu = function (a, b) {
                E(a, 30, b);
            };
            Wu.prototype.ya = function () {
                return M(this, Fu, 18);
            };
            var Yu = function (a) {
                    return M(a, Uu, 25);
                }, Vu = [
                    2,
                    3,
                    14
                ];
            var Zu = function () {
            };
            Zu.N = function () {
                throw Error('Must be overridden');
            };
            var $u = function () {
                this.j = new D.Map();
            };
            _.N($u, Zu);
            Ai($u);
            var av = function () {
            };
            av.N = function () {
                throw Error('Must be overridden');
            };
            var Fh = function () {
                this.ka = {};
                this.j = new Wu();
                this.l = new D.Map();
                E(this.j, 26, Bm());
                (_.v(vo) && 2 === qd() || _.Xb(36)) && E(this.j, 15, !0);
            };
            _.N(Fh, av);
            var bv = function (a) {
                    var b = Fh.N(), c = H(a, 2);
                    if (c && !b.ka.hasOwnProperty(c)) {
                        var d = $u.N(), e = ++Kb.N().l;
                        d.j.set(c, e);
                        E(a, 20, e);
                        b.ka[c] = a;
                    }
                }, Xe = function () {
                    return Fh.N().ka;
                }, cv = function (a, b) {
                    var c;
                    return null !== (c = a.ka[b]) && void 0 !== c ? c : null;
                }, dv = function (a) {
                    var b = Fh.N(), c;
                    a = _.G(a);
                    for (var d = a.next(); !d.done; d = a.next())
                        null === (c = b.ka[d.value.j]) || void 0 === c ? void 0 : cl(c, 21, []);
                };
            Ai(Fh);
            var ev = function () {
                this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
                this.isBackfill = !1;
                this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null;
            };
            var fv = '', gv = null, hv = function () {
                    for (var a = yq(Zo) || '0-0-0', b = a.split('-').map(function (e) {
                                return Number(e);
                            }), c = [
                                '1',
                                '0',
                                '38'
                            ].map(function (e) {
                                return Number(e);
                            }), d = 0; d < b.length; d++) {
                        if (b[d] > c[d])
                            return a;
                        if (b[d] < c[d])
                            break;
                    }
                    return '1-0-38';
                }, iv = function () {
                    fv || (fv = hv());
                    return fv;
                }, jv = function () {
                    if (null == gv) {
                        for (var a = ng(Yo), b = [], c = 0; c < a.length; c += 2)
                            Jl(a[c], a[c + 1], b);
                        gv = b.join('&');
                    }
                    return gv;
                }, kv = function (a) {
                    var b = Cc(), c = new Fu();
                    if (!a || !_.ia(a))
                        return null;
                    var d = !1;
                    _.$b(a, function (e, f) {
                        var g = !1;
                        switch (f) {
                        case 'allowOverlayExpansion':
                            'boolean' === typeof e ? E(c, 1, a.allowOverlayExpansion) : d = g = !0;
                            break;
                        case 'allowPushExpansion':
                            'boolean' === typeof e ? E(c, 2, a.allowPushExpansion) : d = g = !0;
                            break;
                        case 'sandbox':
                            !0 === e ? E(c, 3, a.sandbox) : d = g = !0;
                            break;
                        case 'useUniqueDomain':
                            'boolean' === typeof e ? E(c, 4, a.useUniqueDomain) : null !== e && (d = g = !0);
                            break;
                        default:
                            g = !0;
                        }
                        g && b.error(Dc('setSafeFrameConfig', Ec(a), f, Ec(e)));
                    });
                    return d ? null : c;
                }, lv = function (a) {
                    var b = new Fu();
                    a = _.G(a);
                    for (var c = a.next(); !c.done; c = a.next())
                        if (c = c.value) {
                            if (xf(c, 1)) {
                                var d = x(c, 1);
                                E(b, 1, d);
                            }
                            xf(c, 2) && (d = x(c, 2), E(b, 2, d));
                            xf(c, 3) && (d = x(c, 3), E(b, 3, d));
                            xf(c, 4) && (c = x(c, 4), E(b, 4, c));
                        }
                    return b;
                };
            var mv = function (a, b) {
                this.l = a;
                this.j = b;
            };
            mv.prototype.getWidth = function () {
                return this.l;
            };
            mv.prototype.getHeight = function () {
                return this.j;
            };
            var nv = function (a, b) {
                    a = _.r(a, 'find').call(a, function (c) {
                        c = M(c, Nc, 1);
                        return H(c, 1) <= H(b, 1) && H(c, 2) <= H(b, 2);
                    });
                    return null == a ? null : I(a, Nc, 2);
                }, ov = function (a) {
                    if (!Array.isArray(a) || 2 !== a.length)
                        throw Error('Each mapping entry must be an array of size 2');
                    var b = a[0];
                    if (!Ou(b))
                        throw Error('Size must be an array of two non-negative integers');
                    b = Lc(Mc(new Nc(), b[0]), b[1]);
                    if (Array.isArray(a[1]) && 0 === a[1].length)
                        a = [];
                    else if (a = Qu(a[1]), 0 === a.length)
                        throw Error('At least one slot size must be present');
                    var c = new Eu();
                    b = Db(c, 1, b);
                    return cl(b, 2, a);
                };
            var pv = function (a, b, c) {
                    return 'number' === typeof b && 'number' === typeof c && 0 < I(a, Eu, 6).length ? nv(I(a, Eu, 6), Lc(Mc(new Nc(), b), c)) : I(a, Nc, 5);
                }, Yc = function (a) {
                    var b = window, c = null;
                    b.top == b && (b = Fs(!1, b), c = pv(a, b.width, b.height));
                    null == c && (c = pv(a));
                    return c.map(function (d) {
                        return x(d, 3) ? 'fluid' : [
                            H(d, 1),
                            H(d, 2)
                        ];
                    });
                }, qv = function (a) {
                    if (0 == Yc(a).length && xf(a, 16))
                        return '1x1';
                    var b = [], c = !1;
                    a = _.G(Yc(a));
                    for (var d = a.next(); !d.done; d = a.next())
                        d = d.value, Array.isArray(d) ? b.push(d.join('x')) : 'fluid' == d ? c = !0 : b.push(d);
                    c && b.unshift('320x50');
                    return b.join('|');
                }, rv = function (a) {
                    var b = 0, c = 0;
                    a = _.G(Yc(a));
                    for (var d = a.next(); !d.done; d = a.next())
                        if (d = d.value, Array.isArray(d)) {
                            var e = _.G(d);
                            d = e.next().value;
                            e = e.next().value;
                            (b || Infinity) > d && 1 < d && (b = d);
                            (c || Infinity) > e && 1 < e && (c = e);
                        }
                    return [
                        b,
                        c
                    ];
                }, sv = function (a, b) {
                    b = void 0 === b ? null : b;
                    var c = 0, d = [];
                    a && (d.push(a.getAdUnitPath()), d.push(qv(a)), d.push(H(a, 2)));
                    if (b) {
                        a = [];
                        for (var e = 0; b && 25 > e; b = b.parentNode, ++e)
                            9 === b.nodeType ? a.push('') : a.push(b.id);
                        (b = a.join()) && d.push(b);
                    }
                    0 < d.length && (c = Tl(d.join(':')));
                    return c.toString();
                }, tv = function (a) {
                    return 0 !== a && 1 !== a;
                }, uv = function (a, b) {
                    var c;
                    return !(null != (c = x(b, 22)) ? !c : !x(a, 15));
                };
            var Rc = function (a) {
                var b = this, c = Cc(), d = cv(Fh.N(), a.j), e = '', f = !1;
                Tq(a, Xq, function (m) {
                    var n = m.detail;
                    m = n.ac;
                    n = n.isBackfill;
                    m && (e = m, f = n);
                });
                this.set = w(40, function (m, n) {
                    if ('string' !== typeof m || 'string' !== typeof n || void 0 === tu()[m])
                        return c.M(th('Slot.set', [
                            m,
                            n
                        ]), a), b;
                    var p = (L = I(d, Bf, 3), _.r(L, 'find')).call(L, function (t) {
                        return Cf(t) === m;
                    });
                    p ? Au(p, [n]) : (p = zu(new Bf(), m), Df(p, 2, n), Wd(d, 3, p, Bf));
                    return b;
                });
                this.get = w(41, function (m) {
                    if ('string' !== typeof m)
                        return c.M(th('Slot.get', [m]), a), null;
                    var n = (L = I(d, Bf, 3), _.r(L, 'find')).call(L, function (p) {
                        return Cf(p) === m;
                    });
                    return (n = n && H(n, 2)) ? n[0] : null;
                });
                this.getAttributeKeys = w(42, function () {
                    return I(d, Bf, 3).map(function (m) {
                        return Cf(m);
                    });
                });
                this.addService = w(43, function (m) {
                    m = uu.get(m);
                    if (!m)
                        return c.M(th('Slot.addService', [m]), a), b;
                    if ((L = H(d, 4), _.r(L, 'includes')).call(L, m.getName()))
                        return c.info(vr(m.getName(), a.toString()), a), b;
                    m.Fa(a, d);
                    return b;
                });
                this.defineSizeMapping = w(44, function (m) {
                    try {
                        if (!Array.isArray(m))
                            throw Error('Size mapping must be an array');
                        var n = m.map(ov);
                        cl(d, 6, n);
                    } catch (p) {
                        Ub(44, p), tm('Incorrect usage of googletag.Slot defineSizeMapping: ' + p.message);
                    }
                    return b;
                });
                this.setClickUrl = w(45, function (m) {
                    if ('string' !== typeof m)
                        return c.M(th('Slot.setClickUrl', [m]), a), b;
                    E(d, 7, m);
                    return b;
                });
                this.setCategoryExclusion = w(46, function (m) {
                    'string' !== typeof m || gj(m) ? c.M(th('Slot.setCategoryExclusion', [m]), a) : ((L = H(d, 8), _.r(L, 'includes')).call(L, m) || Df(d, 8, m), c.info(wr(m), a));
                    return b;
                });
                this.clearCategoryExclusions = w(47, function () {
                    E(d, 8, Ja([]));
                    c.info(xr(), a);
                    return b;
                });
                this.getCategoryExclusions = w(48, function () {
                    return H(d, 8).slice();
                });
                this.setTargeting = w(49, function (m, n) {
                    Ku(a, d, m, n, c);
                    return b;
                });
                this.updateTargetingFromMap = w(649, function (m) {
                    Lu(a, d, m, c);
                    return b;
                });
                this.clearTargeting = w(50, function (m) {
                    if (void 0 === m)
                        return cl(d, 9, []), c.info(yr(a.getAdUnitPath()), a), b;
                    var n = I(d, Bf, 9), p = _.r(n, 'findIndex').call(n, function (t) {
                            return Cf(t) === m;
                        });
                    if (0 > p)
                        return c.M(Yr(m, a.getAdUnitPath()), a), b;
                    n.splice(p, 1);
                    cl(d, 9, n);
                    c.info(es(m, a.getAdUnitPath()), a);
                    return b;
                });
                this.getTargeting = w(51, function (m) {
                    if ('string' !== typeof m)
                        return c.M(th('Slot.getTargeting', [m]), a), [];
                    var n = (L = I(d, Bf, 9), _.r(L, 'find')).call(L, function (p) {
                        return Cf(p) === m;
                    });
                    return n ? H(n, 2).slice() : [];
                });
                this.getTargetingKeys = w(52, function () {
                    return I(d, Bf, 9).map(function (m) {
                        return Cf(m);
                    });
                });
                this.setCollapseEmptyDiv = w(53, function (m, n) {
                    n = void 0 === n ? !1 : n;
                    if ('object' === typeof m && m && _.v(Co)) {
                        if ('boolean' === typeof m.collapseEmpty) {
                            E(d, 10, m.collapseEmpty);
                            var p;
                            Ju(d, null != (p = x(d, 24)) ? p : !0);
                        }
                        if ('boolean' === typeof m.startCollapsed) {
                            E(d, 11, m.startCollapsed);
                            var t;
                            Ju(d, null != (t = x(d, 24)) ? t : !0);
                        }
                        'boolean' === typeof m.allowCollapseOnScreen && Ju(d, !m.allowCollapseOnScreen);
                        return b;
                    }
                    if ('boolean' !== typeof m || 'boolean' !== typeof n)
                        return c.M(th('Slot.setCollapseEmptyDiv', [
                            m,
                            n
                        ]), a), b;
                    E(d, 10, m);
                    E(d, 11, m && n);
                    mc('gpt_ced', function (u) {
                        var y = x(d, 11) ? 't' : 'f';
                        q(u, 'sc', y);
                        q(u, 'level', 'slot');
                        Zb(u);
                    });
                    n && !m && c.M(zr(a.toString()), a);
                    return b;
                });
                this.getAdUnitPath = w(54, function () {
                    return a.getAdUnitPath();
                });
                this.getSlotElementId = w(598, function () {
                    return a.j;
                });
                this.setForceSafeFrame = w(55, function (m) {
                    if ('boolean' !== typeof m)
                        return c.M(th('Slot.setForceSafeFrame', [String(m)]), a), b;
                    E(d, 12, m);
                    return b;
                });
                this.setSafeFrameConfig = w(56, function (m) {
                    var n = kv(m);
                    if (!n)
                        return c.error(th('Slot.setSafeFrameConfig', [m]), a), b;
                    Db(d, 13, n);
                    return b;
                });
                var g = null;
                Tq(a, Wq, function (m) {
                    m = m.detail;
                    if (x(m, 8))
                        g = null;
                    else {
                        g = new ev();
                        var n = !!x(m, 9);
                        g.isBackfill = n;
                        var p = H(m, 15), t = H(m, 16);
                        p.length && t.length && (g.sourceAgnosticCreativeId = p[0], g.sourceAgnosticLineItemId = t[0], n || (g.creativeId = p[0], g.lineItemId = t[0], (n = H(m, 22)) && n.length && (g.creativeTemplateId = n[0])));
                        H(m, 17).length && (n = H(m, 17)[0], g.advertiserId = n);
                        H(m, 18).length && (n = H(m, 18)[0], g.campaignId = n);
                        H(m, 19).length && (n = H(m, 19), g.yieldGroupIds = n);
                        H(m, 20).length && (n = H(m, 20), g.companyIds = n);
                        m = H(m, 45);
                        m = m.length && 'string' !== typeof m[0] ? _.ye(m, Ma) : m;
                        m.length && (g.encryptedTroubleshootingInfo = m[0]);
                    }
                });
                this.getResponseInformation = w(355, function () {
                    return g;
                });
                this.getName = w(170, function () {
                    window.console && console.error && console.error('getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead.');
                    var m = new Yb('slot_get_name');
                    Zb(m);
                    ac(m);
                    return a.getAdUnitPath();
                });
                var h = new Mu(a);
                this.getSlotId = w(579, function () {
                    return h;
                });
                this.getServices = w(580, function () {
                    return H(d, 4).map(function (m) {
                        return xu(m);
                    });
                });
                this.getSizes = w(581, function (m, n) {
                    return (m = pv(d, m, n)) ? m.map(function (p) {
                        return x(p, 3) ? 'fluid' : new mv(H(p, 1), H(p, 2));
                    }) : null;
                });
                this.getClickUrl = w(582, function () {
                    return xf(d, 7) ? H(d, 7) : '';
                });
                this.getTargetingMap = w(583, function () {
                    for (var m = {}, n = _.G(I(d, Bf, 9)), p = n.next(); !p.done; p = n.next())
                        p = p.value, m[Cf(p)] = H(p, 2);
                    return m;
                });
                this.getOutOfPage = w(584, function (m) {
                    return 'number' === typeof m ? kd(d) === m : 0 != kd(d);
                });
                this.getCollapseEmptyDiv = w(585, function () {
                    return xf(d, 10) ? x(d, 10) : null;
                });
                this.getDivStartsCollapsed = w(586, function () {
                    return xf(d, 11) ? x(d, 11) : null;
                });
                var k = function () {
                    return '';
                };
                Tq(a, Yq, function (m) {
                    k = m.detail.Dc;
                });
                this.getContentUrl = w(587, function () {
                    return k();
                });
                this.getFirstLook = w(588, function () {
                    tm('The getFirstLook method of googletag.Slot is deprecated. Please update your code to no longer call this method.');
                    return 0;
                });
                var l = '';
                Tq(a, Wq, function (m) {
                    var n;
                    l = null != (n = H(m.detail, 34)) ? n : '';
                });
                this.getEscapedQemQueryId = w(591, function () {
                    return l;
                });
                this.getHtml = w(592, function () {
                    return f ? (window.console && console.warn && console.warn('This ad\'s html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead.'), '') : e;
                });
                _.v(Bo) && (this.setCentering = w(871, function (m) {
                    if ('object' !== typeof m || null == m)
                        return c.M(th('Slot.setCentering', [Ec(m)])), b;
                    var n = m.horizontal;
                    m = m.vertical;
                    'boolean' === typeof n && E(d, 22, n);
                    'boolean' === typeof m && E(d, 23, m);
                    return b;
                }));
            };
            _.N(Rc, wu);
            var Y = function () {
                Jt.apply(this, arguments);
            };
            _.N(Y, Jt);
            Y.prototype.V = function (a) {
                var b, c;
                Ub(this.id, a);
                null === (c = null === (b = window.console) || void 0 === b ? void 0 : b.error) || void 0 === c ? void 0 : c.call(b, a);
            };
            var vv = function (a, b, c, d, e) {
                var f = null, g = kc(b, e);
                _.xd(c, d, g) && (f = function () {
                    return _.ie(c, d, g);
                }, _.Hg(a, f));
                return f;
            };
            var wv = function (a) {
                Y.call(this, 892, _.lb(Qo));
                this.o = this.l();
                this.m = this.l();
                this.B = Lt(this, a);
            };
            _.N(wv, Y);
            wv.prototype.j = function () {
                var a = this.B.value;
                if (!a)
                    throw Error('config timeout');
                this.m.l(M(a, vs, 1));
                this.o.l(M(a, ys, 2));
            };
            wv.prototype.ea = function (a) {
                this.G(a);
            };
            wv.prototype.G = function (a) {
                Et(this.o, a);
                Et(this.m, a);
            };
            var xv = function (a, b, c) {
                Y.call(this, 906, _.lb(Oo));
                this.J = a;
                this.m = Kt(this);
                this.B = Lt(this, b);
                this.o = tg(c, $q).then(function (d) {
                    return Ib((0, J.T)(d.detail.P.getAdUnitPath()));
                });
                this.J !== this.J.top && this.m.notify();
            };
            _.N(xv, Y);
            xv.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d;
                    return B(b, function (e) {
                        if (c.J !== c.J.top)
                            return e.return();
                        d = c.B.value;
                        if (_.v(Po) && d)
                            return C(e, yv(c, d), 0);
                        c.m.notify();
                        e.j = 0;
                    });
                });
            };
            var yv = function (a, b) {
                    return A(a, function d() {
                        var e, f = this, g;
                        return B(d, function (h) {
                            e = I(b, zs, 1);
                            if (!e.length)
                                return f.m.notify(), h.return();
                            g = e[0];
                            return (L = [
                                2,
                                3
                            ], _.r(L, 'includes')).call(L, kf(g, 3, 0)) ? (zv(f, pf(g, 1)), h.return()) : C(h, Av(f, b), 0);
                        });
                    });
                }, Av = function (a, b) {
                    return A(a, function d() {
                        var e = this, f, g;
                        return B(d, function (h) {
                            if (1 == h.j)
                                return C(h, e.o, 2);
                            f = h.l;
                            (g = I(b, zs, 1).some(function (k) {
                                return pf(k, 1) === f;
                            })) ? zv(e, f) : (mc('pp_iris_failure', function (k) {
                                q(k, 'fnc', f);
                                Zb(k);
                            }, { ta: _.lb(So) }), e.m.notify());
                            mi(h);
                        });
                    });
                }, zv = function (a, b) {
                    var c = Xs(a.J, b, function (d) {
                        if (!d) {
                            d = ul(c.j);
                            for (var e = _.G(document.getElementsByName('googlefcPresent')), f = e.next(); !f.done; f = e.next())
                                d.l(f.value);
                        }
                        a.m.notify();
                    });
                    c.start();
                };
            xv.prototype.ea = function (a) {
                this.G(a);
            };
            xv.prototype.G = function () {
                this.m.notify();
            };
            var Bv = function (a, b) {
                Y.call(this, 901);
                this.m = V(this, a);
                this.o = tg(b, $q).then(function (c) {
                    return (0, J.T)(c.detail.P.getAdUnitPath());
                });
            };
            _.N(Bv, Y);
            Bv.prototype.j = function () {
                var a;
                return A(this, function c() {
                    var d = this, e, f, g, h;
                    return B(c, function (k) {
                        if (1 == k.j)
                            return (e = d.m.value) ? C(k, d.o, 2) : k.return();
                        f = k.l;
                        g = Ib(f);
                        h = null === (a = I(e, ws, 4)) || void 0 === a ? void 0 : a.some(function (l) {
                            return pf(l, 2) === g;
                        });
                        mc('pp_fsm', function (l) {
                            q(l, 'fsnc', g);
                            q(l, 'aup', f);
                            q(l, 'tld', pf(e, 1));
                            q(l, 'pdu', pf(e, 2));
                            q(l, 'idu', pf(e, 3));
                            q(l, 'pnc', pf(e, 5));
                            q(l, 'dm', h);
                            Zb(l);
                        }, { ta: _.lb(Ro) });
                        mi(k);
                    });
                });
            };
            var Cv = function () {
                Y.call(this, 891);
                this.m = this.l();
            };
            _.N(Cv, Y);
            Cv.prototype.j = function () {
                return A(this, function b() {
                    var c, d, e = this, f, g, h, k, l;
                    return B(b, function (m) {
                        if (1 == m.j)
                            return C(m, new D.Promise(function (n, p) {
                                _.Xb(260)(function (t, u) {
                                    u ? p(u) : n(t);
                                });
                            }), 2);
                        c = m.l;
                        if (_.v(To)) {
                            try {
                                'string' === typeof c && (d = JSON.parse(c || '[]'));
                            } catch (n) {
                            }
                            if (d && Array.isArray(d))
                                e.m.j(new As(d));
                            else
                                throw Error('malformed response');
                        } else
                            f = new As(), g = _.Xb(172), (null === g || void 0 === g ? 0 : g.hasAttribute('data-load-fc')) && (h = Fg(g.src, 'network-code')) && (k = new ys(), l = Wd(k, 1, void 0, zs), E(l, 1, h), E(l, 3, 3), Db(f, 2, k)), e.m.j(f);
                        mi(m);
                    });
                });
            };
            var Dv = function () {
                    this.j = null;
                }, Ev = function () {
                    var a = _.wh(Dv), b = _.wh(xh), c = new ne(), d = new Cv();
                    W(c, d);
                    d = new wv(d.m);
                    W(c, d);
                    var e = new xv(window, d.o, b);
                    a.j = e.m.promise;
                    W(c, e);
                    W(c, new Bv(d.m, b));
                    pe(c);
                };
            var Fv = function () {
                    this.l = [];
                    this.A = [];
                    this.j = {};
                }, Gv = function (a, b) {
                    if (!_.r(a.l, 'includes').call(a.l, b))
                        switch (b) {
                        case 1:
                        case 2:
                        case 3:
                            var c;
                            if (c = _.v($o) ? rt[b] : pt[b]) {
                                var d = b + '_hostpage_library';
                                if (c = Nl(document, c))
                                    c.id = d;
                            }
                            a.l.push(b);
                            b = new st(b);
                            a.A.push(b);
                            a = Jg();
                            a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
                            a.hostpageLibraryTokens[b.j] = b.l;
                        }
                }, Hv = function (a, b) {
                    var c, d;
                    a = null != (d = null == (c = a.j[b]) ? void 0 : _.r(c, 'values').call(c)) ? d : [];
                    return [].concat(_.ec(a));
                };
            var Iv = function (a) {
                    var b;
                    return (null == (b = (L = I(a, Bf, 14), _.r(L, 'find')).call(L, function (c) {
                        return 'page_url' === Cf(c);
                    })) ? void 0 : H(b, 2)[0]) || null;
                }, Jv = function (a) {
                    var b;
                    return (null == (b = (L = I(a, Bf, 3), _.r(L, 'find')).call(L, function (c) {
                        return 'page_url' === Cf(c);
                    })) ? void 0 : H(b, 2)[0]) || null;
                }, Kv = function (a, b) {
                    return Iv(b.U) ? !0 : a.some(function (c) {
                        return null != Jv(b.P[c.j]);
                    });
                }, Eg = function (a) {
                    var b = a.document;
                    return Hs(a) ? b.URL : b.referrer;
                }, Uc = function (a) {
                    try {
                        var b = bn(a, window.top);
                    } catch (c) {
                        b = new _.ad(-12245933, -12245933);
                    }
                    return b;
                }, Lv = Wc(function () {
                    return 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest();
                }), Mv = function (a) {
                    return a ? (a = fn(a)) && a.floor() : null;
                }, Nv = function (a) {
                    return !!x(a, 6) || _.v(Rn);
                }, Ov = function (a, b) {
                    for (var c = {}, d = _.G(_.r(Object, 'keys').call(Object, b)), e = d.next(); !e.done; e = d.next()) {
                        e = e.value;
                        var f = b[e];
                        f = Oa(f.constructor, Ga(f.za()));
                        var g = $u.N(), h = g.j.get(e);
                        null == h ? h = ++Kb.N().l : g.j.delete(e);
                        E(f, 20, h);
                        c[e] = f;
                    }
                    a = Oa(a.constructor, Ga(a.za()));
                    b = new Date(Date.now());
                    b = b.getUTCFullYear() + Nj(b.getUTCMonth() + 1) + Nj(b.getUTCDate());
                    return {
                        U: a,
                        P: c,
                        Sb: b
                    };
                }, Qv = Wc(function () {
                    for (var a = '', b = _.G(Pv()), c = b.next(); !c.done; c = b.next())
                        c = c.value, 15 >= c && (a += '0'), a += c.toString(16);
                    return a;
                }), Pv = function () {
                    var a;
                    if ('function' === typeof (null == (a = window.crypto) ? void 0 : a.getRandomValues)) {
                        a = new Uint8Array(16);
                        var b;
                        null == (b = window.crypto) || b.getRandomValues(a);
                        return a;
                    }
                    var c;
                    if ('function' === typeof (null == (c = window.msCrypto) ? void 0 : c.getRandomValues))
                        return b = window.msCrypto, a = new Uint8Array(16), b.getRandomValues(a), a;
                    b = Array(16);
                    for (a = 0; a < b.length; a++)
                        b[a] = Math.floor(255 * Math.random());
                    return b;
                }, Rv = function (a, b) {
                    return _.v(Zn) && (a = mt(a, b)) ? (a = a.split(':'), 3 !== a.length ? Qv() : (a = a[0].split('=')[1]) ? a.slice(0, 8) : Qv()) : Qv();
                }, Tc = function (a, b) {
                    return _.v(Io) ? Vc(a, b) : Sv(a, b) || Vc(a, b);
                }, Tv = function (a, b, c, d) {
                    var e = Vc(a, c), f = 'none' === (null == e ? void 0 : e.style.display);
                    f && (e.style.display = 'block');
                    a = bd(c, a, b, d);
                    f && (e.style.display = 'none');
                    return a;
                }, Uv = function (a) {
                    return !!a && (xf(a, 1) || !!x(a, 6));
                }, Vv = function (a, b, c) {
                    return Uv(b) || 4 == kd(a) || 5 === kd(a) || c;
                }, Wv = function (a) {
                    return 'google_ads_iframe_' + a.toString();
                }, Xv = function (a) {
                    return Wv(a) + '__container__';
                }, Sv = function (a, b) {
                    return (b = Vc(a, b)) && b.querySelector('[id="' + Xv(a) + '"]') || null;
                }, Yv, Zv, $v = function (a, b) {
                    return null != (Zv = null == (Yv = Sv(a, b)) ? void 0 : Yv.querySelector('iframe[id="' + Wv(a) + '"]')) ? Zv : null;
                }, Jf = function (a, b) {
                    var c = new du();
                    a.forEach(function (d, e) {
                        c.set(a.length - e - 1, b(d));
                    });
                    return eu(c);
                }, ff = function (a, b, c, d, e) {
                    c = void 0 === c ? '' : c;
                    d = void 0 === d ? function (l) {
                        return !!l;
                    } : d;
                    e = void 0 === e ? ',' : e;
                    var f = [], g = !1;
                    a = _.G(a);
                    for (var h = a.next(); !h.done; h = a.next()) {
                        h = b(h.value);
                        var k = d(h);
                        g = g || k;
                        f.push(String(k ? h : c));
                    }
                    return g ? f.join(e) : null;
                }, aw = function (a) {
                    var b = window, c, d, e;
                    rc(831, function () {
                        return void (null == (c = b.performance) ? void 0 : null == (e = (d = c).mark) ? void 0 : e.call(d, a));
                    });
                }, Vc = function (a, b) {
                    b = void 0 === b ? document : b;
                    return Fh.N().l.get(a) || b.getElementById(a.j);
                }, bw = function (a) {
                    return _.Xb(260) ? _.wh(Dv).j.then(kc(895, function () {
                        return Zt(a);
                    })) : D.Promise.resolve(Zt(a));
                };
            var cw = function () {
                    var a = this;
                    this.m = function () {
                        return !1;
                    };
                    this.H = '';
                    this.j = this.l = null;
                    this.A = !1;
                    var b, c = Fh.N(), d = {};
                    this[fq] = (d[19] = function () {
                        return !!x(c.j, 10);
                    }, d[14] = Lv, d[13] = function (e) {
                        for (var f = [], g = 0; g < arguments.length; ++g)
                            f[g] = arguments[g];
                        return f.some(function (h) {
                            return 0 == a.H.lastIndexOf(h, 0);
                        });
                    }, d[12] = function () {
                        return !!x(c.j, 6);
                    }, d[11] = vt, d[15] = function (e) {
                        return a.m(e);
                    }, d[7] = function () {
                        return !(!_.F.crypto || !_.F.crypto.subtle);
                    }, d[48] = function () {
                        return !!a.l;
                    }, d[51] = function () {
                        return a.A;
                    }, d[53] = function () {
                        try {
                            return !!document.createElement('link').relList.supports('webbundle');
                        } catch (e) {
                            return !1;
                        }
                    }, d);
                    d = {};
                    this[gq] = (d[8] = function (e) {
                        return null != (b = ft(a.l, e)) ? b : void 0;
                    }, d[10] = function (e) {
                        return a.j ? Tl(e + a.j) % 1000 : void 0;
                    }, d);
                    this[hq] = {};
                }, dw = function (a, b) {
                    b && !a.j && (a.j = _.r(b.split(':'), 'find').call(b.split(':'), function (c) {
                        return 0 === c.indexOf('ID=');
                    }) || null);
                };
            var ew = _.Li(function () {
                    tm('The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.');
                }), Ch = function () {
                    this.l = new D.Map();
                    this.j = new D.Set();
                    _.wh(cw).m = vd;
                };
            Ch.prototype.add = function (a, b, c) {
                var d = this, e = void 0 === c ? {} : c;
                c = void 0 === e.lb ? void 0 : e.lb;
                var f = void 0 === e.format ? 0 : e.format;
                e = void 0 === e.Mc ? !1 : e.Mc;
                var g = td(f);
                if (g)
                    return mc('gpt_pla_ns', function (k) {
                        q(k, 'iu', a);
                        q(k, 'f', null != f ? f : '');
                        q(k, 'nsr', g);
                        Zb(k);
                    }), {};
                e && ew();
                e = this.l.get(a) || Number(e);
                b = fw(a, e, b, c || 'gpt_unit_' + a + '_' + e);
                if (!b)
                    return {};
                c = b.ka;
                var h = b.slotId;
                this.l.set(a, e + 1);
                this.j.add(h);
                _.Hg(h, function () {
                    return void d.j.delete(h);
                });
                Lq(a);
                return {
                    slotId: h,
                    Wa: c
                };
            };
            var ud = function () {
                    var a = _.wh(Ch);
                    return [].concat(_.ec(a.j));
                }, gw = function (a) {
                    var b;
                    return Hv(_.wh(Fv), a).map(function (c) {
                        return null == (b = $v(c, document)) ? void 0 : b.contentWindow;
                    }).filter(function (c) {
                        return !!c;
                    });
                }, hw = function (a, b) {
                    a = _.G(b);
                    for (b = a.next(); !b.done; b = a.next())
                        sc(b.value);
                }, iw = function (a, b) {
                    a = _.G(a.j);
                    for (var c = a.next(); !c.done; c = a.next())
                        if (c = c.value, c.j === b)
                            return c;
                    return null;
                }, sh = function (a, b, c, d) {
                    d = void 0 === d ? !1 : d;
                    return 'string' === typeof a && 0 < a.length && b && (void 0 === c || 'string' === typeof c) ? _.wh(Ch).add(a, b, {
                        lb: c,
                        Mc: d
                    }) : {};
                }, jw = function (a, b, c) {
                    var d = sh(a, b, c).slotId;
                    if (!d)
                        return Cc().error(th('googletag.defineSlot', [
                            a,
                            b,
                            c
                        ]), void 0, _.v(xn)), null;
                    var e;
                    return null != (e = null == d ? void 0 : d.l) ? e : null;
                }, fw = function (a, b, c, d) {
                    var e = iw(_.wh(Ch), d);
                    if (e)
                        return Cc().error(Cr(d, a, e.getAdUnitPath())), null;
                    var f = new Hu();
                    Iu(E(f, 1, a), d);
                    c = Su(c);
                    e = c.Ta;
                    cl(f, 5, c.rd);
                    null !== e && Db(f, 16, e);
                    bv(f);
                    var g = new fr(a, b, d);
                    gr(g, Sc(g));
                    _.Hg(g, function () {
                        var h = Fh.N();
                        delete h.ka[g.j];
                        h.l.delete(g);
                        h = g.getAdUnitPath();
                        var k;
                        h = Ib(h);
                        var l = (null !== (k = fc.get(h)) && void 0 !== k ? k : 0) - 1;
                        0 >= l ? fc.delete(h) : fc.set(h, l);
                        Cc().info(ds(g.toString()), g);
                    });
                    Cc().info(qr(g.toString()), g);
                    Tq(g, Yq, function (h) {
                        h = h.detail.Rc;
                        Cc().info(rr(g.getAdUnitPath()), g);
                        Jb(Kb.N(), '7', 9, Rf(gu.N(), g), 0, h);
                    });
                    Tq(g, Wq, function (h) {
                        var k = h.detail;
                        Cc().info(sr(g.getAdUnitPath()), g);
                        var l;
                        h = Kb.N();
                        var m = H(f, 20);
                        k = null != (l = H(k, 34)) ? l : '';
                        h.j && (_.F.google_timing_params = _.F.google_timing_params || {}, _.F.google_timing_params['qqid.' + m] = k);
                    });
                    Tq(g, Xq, function () {
                        return void Cc().info(tr(g.getAdUnitPath()), g);
                    });
                    Tq(g, Zq, function () {
                        return void Cc().info(ur(g.getAdUnitPath()), g);
                    });
                    return {
                        ka: f,
                        slotId: g
                    };
                };
            jw = kc(74, jw);
            var kw = function (a, b) {
                    this.slot = a.l;
                    this.serviceName = b;
                }, lw = function (a, b) {
                    kw.call(this, a, b);
                    this.isEmpty = !1;
                    this.slotContentChanged = !0;
                    this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
                    this.isBackfill = !1;
                    this.companyIds = this.yieldGroupIds = null;
                };
            _.N(lw, kw);
            var mw = function () {
                kw.apply(this, arguments);
            };
            _.N(mw, kw);
            var nw = function (a, b, c) {
                kw.call(this, a, b);
                this.inViewPercentage = c;
            };
            _.N(nw, kw);
            var ow = function () {
                kw.apply(this, arguments);
            };
            _.N(ow, kw);
            var pw = function () {
                kw.apply(this, arguments);
            };
            _.N(pw, kw);
            var qw = function (a, b, c, d) {
                kw.call(this, a, b);
                this.makeRewardedVisible = c;
                this.payload = d;
            };
            _.N(qw, kw);
            var rw = function (a, b, c) {
                kw.call(this, a, b);
                this.payload = c;
            };
            _.N(rw, kw);
            var sw = function () {
                kw.apply(this, arguments);
            };
            _.N(sw, kw);
            var tw = function () {
                kw.apply(this, arguments);
            };
            _.N(tw, kw);
            var uw = function () {
                kw.apply(this, arguments);
            };
            _.N(uw, kw);
            var vw = function () {
                kw.apply(this, arguments);
            };
            _.N(vw, kw);
            var ww = function () {
                kw.apply(this, arguments);
            };
            _.N(ww, kw);
            var xw = new D.Set(), yw = function () {
                    Rq.call(this);
                    xw.add(this);
                    this.j = [];
                    this.l = !1;
                    this.B = 0;
                    this.D = new D.Map();
                    this.log = Cc();
                    this.log.info(Gr(this.getName()));
                    this.F = [];
                };
            _.N(yw, Rq);
            var zw = function (a) {
                    if (!a.l) {
                        a.l = !0;
                        wq(6);
                        a.ic();
                        for (var b = _.G(a.F), c = b.next(); !c.done; c = b.next()) {
                            c = c.value;
                            try {
                                c();
                            } catch (d) {
                            }
                        }
                        a.F.length = 0;
                    }
                }, Aw = function (a, b) {
                    if (a.l)
                        try {
                            b();
                        } catch (c) {
                        }
                    else
                        a.F.push(b);
                };
            yw.prototype.Fa = function (a, b) {
                this.j.push(a);
                var c = new pw(a, this.getName());
                this.dispatchEvent('slotAdded', 818, c);
                this.log.info(Jr(this.getName(), a.getAdUnitPath()), a);
                a = this.getName();
                Df(b, 4, a);
            };
            yw.prototype.destroySlots = function (a) {
                var b = this;
                return a.filter(function (c) {
                    return ea(b.j, c);
                });
            };
            yw.prototype.addEventListener = function (a, b) {
                var c = this;
                if (this.B >= _.lb(Sn) && 0 < _.lb(Sn))
                    throw Error('Reached Limit for addEventListener');
                var d = function (f) {
                    f = f.detail;
                    try {
                        b(f);
                    } catch (g) {
                        c.log.error(bs(String(g), a)), window.console && console.error && console.error(g);
                    } finally {
                        Bw(c, a, f);
                    }
                };
                if (_.v(Tn)) {
                    var e;
                    if (null == (e = this.D.get(a)) ? 0 : e.has(b))
                        return;
                    this.D.has(a) || this.D.set(a, new D.Map());
                    this.D.get(a).set(b, d);
                }
                Tq(this, a, d);
                this.B++;
            };
            yw.prototype.removeEventListener = function (a, b) {
                var c;
                Sq(this, a, null == (c = this.D.get(a)) ? void 0 : c.get(b)) && (this.B--, this.D.get(a).delete(b));
            };
            var Bw = function (a, b, c) {
                    _.v(vn) && mc('gpt_svc_evt', function (d) {
                        Zb(d);
                        q(d, 'div', c.slot.getSlotElementId());
                        q(d, 'iu', c.slot.getAdUnitPath());
                        q(d, 'et', b);
                        var e;
                        q(d, 'sn', null != (e = _.Qf()) ? e : '');
                        if (e = _.r(a.j, 'find').call(a.j, function (p) {
                                return p.l === c.slot;
                            })) {
                            var f = Vc(e, document), g;
                            q(d, 'qqid', null != (g = null == f ? void 0 : f.getAttribute('data-google-query-id')) ? g : '');
                            q(d, 'rc', Rf(gu.N(), e));
                            try {
                                var h = cv(Fh.N(), e.j), k = Tv(e, h, document, !1);
                                if (k) {
                                    var l = Es(window.top.document, window.top), m = Fs(!0, window).height;
                                    q(d, 'yo', Math.floor((k.y - l.y) / m));
                                }
                                if (f) {
                                    var n;
                                    q(d, 'amp', !(null == (n = f.querySelector('iframe').contentWindow) || !n.document.querySelector('html[amp4ads]')));
                                }
                            } catch (p) {
                            }
                        }
                        c instanceof nw && q(d, 'ivp', c.inViewPercentage);
                    }, { ta: Number('impressionViewable' === b && c instanceof mw || 'slotVisibilityChanged' === b && c instanceof nw) });
                }, Cw = function (a, b) {
                    for (var c = _.G(xw), d = c.next(); !d.done; d = c.next())
                        d.value.destroySlots(a, b);
                };
            var Dw = function (a) {
                    var b = null, c = null, d = '';
                    if ('string' === typeof a)
                        d = a, b = iw(_.wh(Ch), d);
                    else if (_.ia(a) && 1 == a.nodeType)
                        c = a, d = c.id, b = iw(_.wh(Ch), d);
                    else {
                        var e;
                        b = null != (e = (L = ud(), _.r(L, 'find')).call(L, function (f) {
                            return f.l === a;
                        })) ? e : null;
                    }
                    return {
                        slotId: b,
                        nd: c,
                        od: d
                    };
                }, Ew = kc(95, function (a) {
                    var b = Cc(), c = Dw(a), d = c.slotId, e = c.nd;
                    c = c.od;
                    if (d) {
                        if (a = Fh.N().j, c = cv(Fh.N(), d.j))
                            if (a = Ov(a, Xe()), !x(c, 19))
                                if (e && Fh.N().l.set(d, e), Vc(d) || tv(kd(c)))
                                    for (E(c, 19, !0), b = _.G(H(c, 4)), e = b.next(); !e.done; e = b.next()) {
                                        c = xu(e.value);
                                        a:
                                            if (e = yw, c instanceof e)
                                                e = c;
                                            else {
                                                if (c instanceof wu && (c = uu.get(c), c instanceof e)) {
                                                    e = c;
                                                    break a;
                                                }
                                                e = null;
                                            }
                                        e.l && e.uc(a, d);
                                    }
                                else
                                    b.M(Ar(String(c.getAdUnitPath()), String(H(c, 2))), d);
                    } else
                        c ? b.error(Br(c)) : b.error(th('googletag.display', [String(a)]));
                });
            var Ed = Ui('https://tpc.googlesyndication.com/sodar/%{basename}.js');
            var zd = function (a) {
                return new D.Promise(function (b, c) {
                    var d = new XMLHttpRequest();
                    d.onreadystatechange = function () {
                        d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c());
                    };
                    d.open('GET', a, !0);
                    d.send();
                });
            };
            var Ph = function (a) {
                P(this, a, null, null);
            };
            _.N(Ph, O);
            var Oh = function (a, b) {
                    return Fb(a, 2, b);
                }, Nh = function (a, b) {
                    return Ab(a, 3, b, '');
                }, Qh = function (a) {
                    P(this, a, null, null);
                };
            _.N(Qh, O);
            var Fw = function (a) {
                    this.j = a.j;
                    this.l = a.l;
                    this.A = a.A;
                    this.qb = a.qb;
                    this.J = a.J;
                    this.fb = a.fb;
                    this.Kb = a.Kb;
                    this.Tb = a.Tb;
                    this.Jb = a.Jb;
                }, Gw = function (a, b, c) {
                    this.j = a;
                    this.l = b;
                    this.A = c;
                    this.J = window;
                    this.fb = 'env';
                    this.Kb = 'n';
                    this.Tb = '0';
                    this.Jb = '1';
                }, Sh = function (a, b) {
                    var c, d, e = Hd(kf(b, 2, 0)), f = pf(b, 3);
                    a:
                        switch (kf(b, 4, 0)) {
                        case 1:
                            var g = 'pt';
                            break a;
                        case 2:
                            g = 'cr';
                            break a;
                        default:
                            g = '';
                        }
                    e = new Gw(e, f, g);
                    b = null !== (d = null === (c = M(b, Qh, 5)) || void 0 === c ? void 0 : pf(c, 1)) && void 0 !== d ? d : '';
                    e.qb = b;
                    e.J = a;
                    return new Fw(e);
                };
            var of = function (a) {
                P(this, a, Hw, null);
            };
            _.N(of, O);
            var rf = function (a, b) {
                    return E(a, 1, b);
                }, uf = function (a, b) {
                    E(a, 2, b);
                }, vf = function (a, b) {
                    E(a, 4, b);
                }, Jw = function (a, b) {
                    var c = H(a, 1);
                    null != c && Kk(b, 1, c);
                    c = H(a, 2);
                    null != c && Ik(b, 2, c);
                    c = I(a, wf, 3);
                    0 < c.length && Nk(b, 3, c, Iw);
                    c = H(a, 4);
                    null != c && Jk(b, 4, c);
                }, wf = function (a) {
                    P(this, a, Kw, null);
                };
            _.N(wf, O);
            var Af = function (a, b) {
                    E(a, 1, b);
                }, yf = function (a, b) {
                    E(a, 2, b);
                }, zf = function (a, b) {
                    E(a, 3, b);
                }, Ef = function (a, b) {
                    E(a, 5, b);
                }, Iw = function (a, b) {
                    var c = H(a, 1);
                    null != c && Kk(b, 1, c);
                    c = H(a, 2);
                    null != c && Ik(b, 2, c);
                    c = H(a, 3);
                    null != c && Kk(b, 3, c);
                    c = H(a, 4);
                    if (0 < c.length && null != c)
                        for (var d = 0; d < c.length; d++)
                            Kk(b, 4, c[d]);
                    c = H(a, 5);
                    null != c && Jk(b, 5, c);
                }, Hw = [3], Kw = [4];
            var jf = function (a) {
                P(this, a, Lw, null);
            };
            _.N(jf, O);
            var mf = function (a, b) {
                    return E(a, 1, b);
                }, qf = function (a, b) {
                    return Wd(a, 2, b, of);
                }, Mw = function (a, b) {
                    var c = H(a, 1);
                    null != c && Jk(b, 1, c);
                    c = I(a, of, 2);
                    0 < c.length && Nk(b, 2, c, Jw);
                }, Lw = [2];
            var tf = function (a) {
                P(this, a, Nw, null);
            };
            _.N(tf, O);
            var lf = function (a, b) {
                    return Wd(a, 1, b, jf);
                }, Ff = function (a, b) {
                    a = I(a, jf, 1);
                    0 < a.length && Nk(b, 1, a, Mw);
                }, Nw = [1];
            var Ow = function (a) {
                P(this, a, null, null);
            };
            _.N(Ow, O);
            var Qw = function (a) {
                P(this, a, Pw, null);
            };
            _.N(Qw, O);
            var Pw = [13];
            var Sw = function (a) {
                P(this, a, Rw, null);
            };
            _.N(Sw, O);
            var Rw = [13];
            var Sd = function (a) {
                P(this, a, Tw, null);
            };
            _.N(Sd, O);
            var $d = function (a, b) {
                    var c = I(a, Uw, 1);
                    0 < c.length && Nk(b, 1, c, Vw);
                    c = I(a, Xd, 2);
                    0 < c.length && Nk(b, 2, c, Ww);
                }, Uw = function (a) {
                    P(this, a, null, null);
                };
            _.N(Uw, O);
            var Vw = function (a, b) {
                    var c = H(a, 1);
                    null != c && null != c && Hk(b, 1, c);
                    c = M(a, Xw, 2);
                    null != c && Mk(b, 2, c);
                    c = M(a, Xw, 3);
                    null != c && Mk(b, 3, c);
                    c = H(a, 4);
                    null != c && Kk(b, 4, c);
                    c = H(a, 5);
                    null != c && Kk(b, 5, c);
                }, Xw = function (a) {
                    P(this, a, null, null);
                };
            _.N(Xw, O);
            var Lk = function (a, b) {
                    var c = H(a, 1);
                    null != c && null != c && Hk(b, 1, c);
                    c = H(a, 2);
                    null != c && null != c && Hk(b, 2, c);
                    c = H(a, 3);
                    null != c && null != c && Hk(b, 3, c);
                }, Xd = function (a) {
                    P(this, a, null, null);
                };
            _.N(Xd, O);
            var de = function (a, b) {
                    return E(a, 8, b);
                }, Ww = function (a, b) {
                    var c = H(a, 1);
                    null != c && Kk(b, 1, c);
                    c = H(a, 2);
                    null != c && Kk(b, 2, c);
                    c = H(a, 3);
                    null != c && Ik(b, 3, c);
                    c = H(a, 7);
                    null != c && Ik(b, 7, c);
                    c = H(a, 8);
                    if (null != c) {
                        var d = c;
                        if (null != d) {
                            Vj(b.j, 69);
                            c = b.j;
                            var e = d;
                            e = (d = 0 > e ? 1 : 0) ? -e : e;
                            if (0 === e)
                                0 < 1 / e ? Ca = Da = 0 : (Da = 0, Ca = 2147483648);
                            else if (isNaN(e))
                                Da = 0, Ca = 2147483647;
                            else if (3.4028234663852886e+38 < e)
                                Da = 0, Ca = (d << 31 | 2139095040) >>> 0;
                            else if (1.1754943508222875e-38 > e)
                                e = Math.round(e / Math.pow(2, -149)), Da = 0, Ca = (d << 31 | e) >>> 0;
                            else {
                                var f = Math.floor(Math.log(e) / Math.LN2);
                                e *= Math.pow(2, -f);
                                e = Math.round(8388608 * e) & 8388607;
                                Da = 0;
                                Ca = (d << 31 | f + 127 << 23 | e) >>> 0;
                            }
                            d = Ca;
                            c.push(d >>> 0 & 255);
                            c.push(d >>> 8 & 255);
                            c.push(d >>> 16 & 255);
                            c.push(d >>> 24 & 255);
                        }
                    }
                    c = H(a, 4);
                    null != c && null != c && Gk(b, 4, c);
                    c = H(a, 5);
                    null != c && null != c && Gk(b, 5, c);
                    c = H(a, 6);
                    null != c && null != c && Gk(b, 6, c);
                }, Tw = [
                    1,
                    2
                ];
            var Yw = function (a) {
                P(this, a, null, null);
            };
            _.N(Yw, O);
            var $w = function (a) {
                P(this, a, Zw, null);
            };
            _.N($w, O);
            var Zw = [1];
            var ax = function (a) {
                P(this, a, null, null);
            };
            _.N(ax, O);
            var bx = function (a) {
                P(this, a, null, null);
            };
            _.N(bx, O);
            var cx = function (a) {
                P(this, a, null, null);
            };
            _.N(cx, O);
            var ex = function (a) {
                P(this, a, dx, null);
            };
            _.N(ex, O);
            var gx = function (a) {
                P(this, a, fx, null);
            };
            _.N(gx, O);
            var dx = [
                    1,
                    2
                ], fx = [4];
            var ix = function (a) {
                P(this, a, hx, null);
            };
            _.N(ix, O);
            var hx = [
                1,
                2
            ];
            var jx = function (a) {
                P(this, a, null, null);
            };
            _.N(jx, O);
            var Ld = function (a) {
                P(this, a, null, null);
            };
            _.N(Ld, O);
            var kx = function (a) {
                P(this, a, null, null);
            };
            _.N(kx, O);
            var mx = function (a) {
                P(this, a, lx, null);
            };
            _.N(mx, O);
            var lx = [
                1,
                2
            ];
            var Md = function (a) {
                P(this, a, null, null);
            };
            _.N(Md, O);
            var ox = function (a) {
                P(this, a, nx, null);
            };
            _.N(ox, O);
            var nx = [
                1,
                2,
                3
            ];
            var qx = function (a) {
                P(this, a, px, null);
            };
            _.N(qx, O);
            var px = [1];
            var sx = function (a) {
                P(this, a, rx, null);
            };
            _.N(sx, O);
            var rx = [1];
            var tx = function (a) {
                P(this, a, null, null);
            };
            _.N(tx, O);
            var vx = function (a) {
                P(this, a, ux, null);
            };
            _.N(vx, O);
            var xx = function (a) {
                P(this, a, wx, null);
            };
            _.N(xx, O);
            var yx = function (a) {
                P(this, a, null, null);
            };
            _.N(yx, O);
            var ux = [1], wx = [
                    1,
                    2,
                    3,
                    4
                ];
            var zx = function (a) {
                P(this, a, null, null);
            };
            _.N(zx, O);
            var Ax = function (a) {
                P(this, a, null, null);
            };
            _.N(Ax, O);
            var Bx = function (a) {
                P(this, a, null, null);
            };
            _.N(Bx, O);
            var Dx = function (a) {
                P(this, a, Cx, null);
            };
            _.N(Dx, O);
            var Cx = [2];
            var Ex = function (a) {
                P(this, a, null, null);
            };
            _.N(Ex, O);
            var Fx = function (a) {
                P(this, a, null, null);
            };
            _.N(Fx, O);
            var Hx = function (a) {
                P(this, a, Gx, null);
            };
            _.N(Hx, O);
            var Gx = [
                3,
                7
            ];
            var Kx = function (a) {
                P(this, a, Ix, Jx);
            };
            _.N(Kx, O);
            var Lx = function (a) {
                P(this, a, null, null);
            };
            _.N(Lx, O);
            Lx.prototype.getHtml = function () {
                return H(this, 1);
            };
            var Ix = [
                    14,
                    15,
                    16,
                    17,
                    18,
                    19,
                    20,
                    21,
                    22,
                    45,
                    23,
                    27,
                    28,
                    38,
                    53,
                    60
                ], Jx = [
                    [
                        4,
                        41
                    ],
                    [
                        39,
                        48
                    ]
                ];
            var Mx = navigator, Nx = function (a) {
                    var b = 1, c;
                    if (void 0 != a && '' != a)
                        for (b = 0, c = a.length - 1; 0 <= c; c--) {
                            var d = a.charCodeAt(c);
                            b = (b << 6 & 268435455) + d + (d << 14);
                            d = b & 266338304;
                            b = 0 != d ? b ^ d >> 21 : b;
                        }
                    return b;
                }, Ox = function (a, b) {
                    if (!a || 'none' == a)
                        return 1;
                    a = String(a);
                    'auto' == a && (a = b, 'www.' == a.substring(0, 4) && (a = a.substring(4, a.length)));
                    return Nx(a.toLowerCase());
                }, Px = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/, Qx = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/, Rx = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
            var Tx = function (a) {
                P(this, a, Sx, null);
            };
            _.N(Tx, O);
            var Ux = function () {
                    var a = new Tx(), b = _.v(Fp);
                    return bl(a, 7, b);
                }, Sx = [15];
            var Vx = function (a) {
                P(this, a, null, null);
            };
            _.N(Vx, O);
            var Wx = function (a) {
                P(this, a, null, null);
            };
            _.N(Wx, O);
            aj(Ti(Ui('https://pagead2.googlesyndication.com/pagead/osd.js')));
            var Xx = function (a, b) {
                if (!(window && Math.random && navigator))
                    return -1;
                if (window.__google_ad_urls) {
                    var c = window.__google_ad_urls;
                    try {
                        if (c && c.getOseId())
                            return c.getOseId();
                    } catch (e) {
                    }
                }
                if (!window.__google_ad_urls_id) {
                    c = window.google_enable_ose;
                    if (!0 === c)
                        var d = 2;
                    else
                        !1 !== c && (d = Pl([0], a), null == d && ((d = Pl([2], b)) || (d = 3)));
                    if (!d)
                        return 0;
                    window.__google_ad_urls_id = d;
                }
                return window.__google_ad_urls_id;
            };
            var Yx = function () {
            };
            aa = Yx.prototype;
            aa.getNewBlocks = function () {
            };
            aa.setupOse = function () {
            };
            aa.getOseId = function () {
                return -1;
            };
            aa.getCorrelator = function () {
                return '';
            };
            aa.numBlocks = function () {
                return 0;
            };
            aa.registerAdBlock = function () {
            };
            aa.unloadAdBlock = function () {
            };
            var Zx = new cq(1, gn()), $x = function () {
                    var a = gn();
                    a && 'undefined' != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (Zx.j = !1, Zx.events != Zx.A.google_js_reporting_queue && (bq() && _.Ni(Zx.events, qc), Zx.events.length = 0));
                };
            (function () {
                var a = gn();
                a && a.document && ('complete' == a.document.readyState ? $x() : Zx.j && _.xd(a, 'load', function () {
                    $x();
                }));
            }());
            var by = function () {
                    var a = ay, b = gn() || _.F;
                    return b.google_osd_loaded ? !1 : (Nl(b.document, a), b.google_osd_loaded = !0);
                }, cy = function (a, b, c) {
                    a && (c ? _.xd(a, 'load', b) : _.ie(a, 'load', b));
                }, dy = function () {
                    var a = (gn() || _.F).google_osd_amcb;
                    return 'function' === typeof a ? a : null;
                }, ey = aj(Ti(Ui('https://www.googletagservices.com/activeview/js/current/osd.js')));
            var fy = function (a, b) {
                this.l = b && b.l ? b.l : 0;
                this.A = b ? b.A : '';
                this.j = b && b.j ? b.j : [];
                if (b)
                    for (a = 0; a < this.j.length; ++a)
                        this.j[a].m = !0;
            };
            aa = fy.prototype;
            aa.getNewBlocks = function (a, b) {
                for (var c = this.j.length, d = 0; d < c; d++) {
                    var e = this.j[d];
                    !e.A && e.j && (e.A = !0, a(e.j, e.D, e.F, e.l, void 0, e.m, e.G, e.B, e.o));
                }
                b && ((gn() || _.F).google_osd_amcb = a);
            };
            aa.setupOse = function (a) {
                if (this.getOseId())
                    return this.getOseId();
                var b = Xx(gy, hy);
                if (!b)
                    return 0;
                this.l = b;
                this.A = String(a || 0);
                return this.getOseId();
            };
            aa.getOseId = function () {
                return window && Math.random && navigator ? this.l : -1;
            };
            aa.getCorrelator = function () {
                return this.A;
            };
            aa.numBlocks = function () {
                return this.j.length;
            };
            aa.registerAdBlock = function (a, b, c, d, e, f, g) {
                g = void 0 === g ? function () {
                } : g;
                c = dy();
                e = _.yc() || -1;
                f = _.F.pageYOffset;
                0 <= f || (f = -1);
                c && d ? c(d, a, b, !1, void 0, !1, g, e, f) : (g = new iy(a, b, d, g, e, f), this.j.push(g), cy(d, g.H, !0), ay || (_.Qm(_.F, '//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=' + b + ('&req=' + a)), ay = ey), by() && hn());
            };
            aa.unloadAdBlock = function (a, b, c) {
                c = void 0 === c ? !1 : c;
                b = gn();
                void 0 !== b.Goog_Osd_UnloadAdBlock && b.Goog_Osd_UnloadAdBlock(a);
                c && (c = um(this.j, function (d) {
                    return d.j == a;
                })) && cy(a, c.H, !1);
            };
            var jy = function () {
                    var a = gn(), b = a.__google_ad_urls;
                    if (!b)
                        return a.__google_ad_urls = new fy(a);
                    try {
                        if (0 <= b.getOseId())
                            return b;
                    } catch (c) {
                    }
                    try {
                        return a.__google_ad_urls = new fy(a, b);
                    } catch (c) {
                        return a.__google_ad_urls = new fy(a);
                    }
                }, ay = null, hy = 0, gy = 0, iy = function (a, b, c, d, e, f) {
                    var g = this;
                    d = void 0 === d ? zi : d;
                    this.D = a;
                    this.F = b;
                    this.j = c;
                    this.m = this.A = this.l = !1;
                    this.G = d;
                    this.B = void 0 === e ? -1 : e;
                    this.o = void 0 === f ? -1 : f;
                    this.H = function () {
                        return g.l = !0;
                    };
                };
            window.Goog_AdSense_getAdAdapterInstance = jy;
            var ky = ['Goog_AdSense_OsdAdapter'], ly = _.F;
            ky[0] in ly || 'undefined' == typeof ly.execScript || ly.execScript('var ' + ky[0]);
            for (var my; ky.length && (my = ky.shift());)
                ky.length || void 0 === fy ? ly[my] && ly[my] !== Object.prototype[my] ? ly = ly[my] : ly = ly[my] = {} : ly[my] = fy;
            var ny = [
                    'auto',
                    'inherit',
                    '100%'
                ], oy = ny.concat(['none']), py = function (a, b, c, d, e, f) {
                    e = void 0 === e ? 10 : e;
                    f = void 0 === f ? 10 : f;
                    b = b.styleSheets;
                    if (!b)
                        return !1;
                    var g = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.msMatchesSelector || a.oMatchesSelector;
                    e = -1 == e ? Infinity : e;
                    f = -1 == f ? Infinity : f;
                    for (var h = 0; h < Math.min(b.length, e); ++h) {
                        var k = void 0;
                        try {
                            var l = b[h], m = null;
                            try {
                                m = l.cssRules || l.rules;
                            } catch (Q) {
                                if (15 == Q.code)
                                    throw Q.styleSheet = l, Q;
                            }
                            k = m;
                        } catch (Q) {
                            continue;
                        }
                        if (k && 0 < k.length)
                            for (m = 0; m < Math.min(k.length, f); ++m) {
                                var n = k[m], p;
                                if (p = 1 == n.type) {
                                    p = n;
                                    var t = c;
                                    p = g.call(a, p.selectorText) && t(p);
                                }
                                if (!p && (p = d && 4 == n.type))
                                    a: {
                                        p = a;
                                        t = c;
                                        for (var u = f, y = 0; y < Math.min(n.cssRules.length, u); y++) {
                                            var z = n.cssRules[y], K;
                                            if (K = 1 === z.type || !_.v(Dn))
                                                K = t, K = g.call(p, z.selectorText) && K(z);
                                            if (K) {
                                                p = !0;
                                                break a;
                                            }
                                        }
                                        p = !1;
                                    }
                                if (p)
                                    return !0;
                            }
                    }
                    return !1;
                }, ry = function (a, b, c) {
                    var d = void 0 === d ? 10 : d;
                    var e = void 0 === e ? 10 : e;
                    if (!a)
                        return !0;
                    var f = !0;
                    Gf(a, function (g) {
                        return f = qy(g, b, !1, d, e);
                    }, void 0 === c ? 100 : c);
                    return f;
                }, qy = function (a, b, c, d, e) {
                    var f = a.style;
                    return f && f.height && !(0 <= _.da(ny, f.height)) || f && f.maxHeight && !(0 <= _.da(oy, f.maxHeight)) || py(a, b.document, function (g) {
                        var h = g.style.height;
                        g = g.style['max-height'];
                        return h && !(0 <= _.da(ny, h)) || g && !(0 <= _.da(oy, g));
                    }, c, d, e) ? !1 : !0;
                };
            var sy = function (a) {
                var b, c, d;
                this.j = new D.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : M(a, tx, 2)) || void 0 === b ? void 0 : M(b, qx, 3)) || void 0 === c ? void 0 : H(c, 1)) && void 0 !== d ? d : []);
            };
            sy.prototype.getName = function () {
                return 'Consent';
            };
            sy.prototype.Eb = function (a) {
                var b = this;
                return !xf(a, 7) || H(M(a, Zg, 7), 1).every(function (c) {
                    return b.j.has(c);
                });
            };
            var ty = function (a) {
                var b;
                this.ub = 1;
                null == a || null == M(a, vx, 3) ? this.j = [] : (this.j = I((0, J.T)(M(a, vx, 3)), yx, 1), this.ub = null !== (b = $k((0, J.T)(M(a, vx, 3)), 3)) && void 0 !== b ? b : 1);
            };
            ty.prototype.getName = function () {
                return 'Pricing Rules';
            };
            ty.prototype.Eb = function (a) {
                if (0 === this.j.length)
                    return !0;
                for (var b = _.G(this.j), c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    var d = M(c, xx, 1), e = a;
                    if (null === d || (0 === H(d, 3).length || (L = H(d, 3), _.r(L, 'includes')).call(L, kf(e, 4, 0))) && (0 === H(d, 4).length || (L = H(d, 4), _.r(L, 'includes')).call(L, pf(e, 5)))) {
                        if (null == M(a, uy, 8) || null == Xg(M(a, uy, 8), 1))
                            return !1;
                        d = Xg(M(a, uy, 8), 1) * this.ub;
                        if (null != Xg(c, 2) && (null == d || d < Xg(c, 2)))
                            return !1;
                    }
                }
                return !0;
            };
            var vy = function (a) {
                var b, c, d;
                this.j = new D.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : M(a, tx, 2)) || void 0 === b ? void 0 : M(b, sx, 2)) || void 0 === c ? void 0 : H(c, 1)) && void 0 !== d ? d : []);
            };
            vy.prototype.getName = function () {
                return 'Url';
            };
            vy.prototype.Eb = function (a) {
                var b = this;
                return 0 === this.j.size || !H(a, 6).some(function (c) {
                    return b.j.has(c);
                });
            };
            var wy = function (a) {
                var b, c, d, e, f;
                this.j = new D.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : M(a, tx, 2)) || void 0 === b ? void 0 : M(b, ox, 1)) || void 0 === c ? void 0 : H(c, 1)) && void 0 !== d ? d : []);
                this.l = !(null === (f = null === (e = null === a || void 0 === a ? void 0 : M(a, tx, 2)) || void 0 === e ? void 0 : M(e, ox, 1)) || void 0 === f || !Zk(f, 4));
            };
            wy.prototype.getName = function () {
                return 'Category';
            };
            wy.prototype.Eb = function (a) {
                var b;
                return Id(this.j, null === (b = M(a, $g, 1)) || void 0 === b ? void 0 : H(b, 1)) || this.l && (a = M(a, $g, 1), !a || Zk(a, 3)) ? !1 : !0;
            };
            var xy = function (a) {
                var b = [];
                b.push(new wy(a));
                b.push(new sy(a));
                b.push(new vy(a));
                b.push(new ty(a));
                this.j = b;
            };
            var yy = function (a) {
                var b, c, d, e, f, g;
                this.seller = 'google';
                this.decisionLogicUrl = 'dummy_url.com';
                this.interestGroupBuyers = [];
                this.additionalBids = [];
                this.auctionSignals = {};
                this.sellerSignals = {
                    Oc: xy.prototype,
                    ub: 1
                };
                this.perBuyerSignals = new D.Map();
                this.j = new D.Map();
                this.sellerSignals.Oc = new xy(null !== (c = null === (b = M(a, Bx, 6)) || void 0 === b ? void 0 : M(b, zx, 1)) && void 0 !== c ? c : new zx());
                this.sellerSignals.ub = null !== (g = null === (f = null === (e = null === (d = M(a, Bx, 6)) || void 0 === d ? void 0 : M(d, zx, 1)) || void 0 === e ? void 0 : M(e, vx, 3)) || void 0 === f ? void 0 : $k(f, 3)) && void 0 !== g ? g : 1;
                var h = al(a, 4, Ld);
                h = null !== h && void 0 !== h ? h : new Qk([]);
                h = _.G(_.r(h, 'entries').call(h));
                for (var k = h.next(); !k.done; k = h.next()) {
                    var l = _.G(k.value);
                    k = l.next().value;
                    l = l.next().value;
                    this.perBuyerSignals.set(k, l);
                }
                a = al(a, 5, Md);
                a = null !== a && void 0 !== a ? a : new Qk([]);
                a = _.G(_.r(a, 'entries').call(a));
                for (h = a.next(); !h.done; h = a.next())
                    k = _.G(h.value), h = k.next().value, k = k.next().value, this.j.set(h, k);
            };
            var uy = function (a) {
                P(this, a, null, null);
            };
            _.N(uy, O);
            var $g = function (a) {
                P(this, a, zy, null);
            };
            _.N($g, O);
            var zy = [
                1,
                2
            ];
            var Zg = function (a) {
                P(this, a, Ay, null);
            };
            _.N(Zg, O);
            var Ay = [1];
            var Yg = function (a) {
                P(this, a, By, null);
            };
            _.N(Yg, O);
            var By = [
                2,
                3,
                6
            ];
            var Cy = function (a) {
                var b;
                return {
                    ad: null !== (b = M(a, Yg, 2)) && void 0 !== b ? b : new Yg(),
                    bid: 0.1
                };
            };
            var Dy = function (a, b, c, d) {
                var e, f, g, h, k, l, m, n, p, t, u, y;
                b = null === d || void 0 === d ? void 0 : M(d, mx, 1);
                c = null === (e = null === c || void 0 === c ? void 0 : M(c, jx, 1)) || void 0 === e ? void 0 : M(e, ix, 1);
                if (!b || !c)
                    return {
                        ad: null !== (f = M(a, Yg, 2)) && void 0 !== f ? f : new Yg(),
                        bid: 0
                    };
                d = 1 / (1 + Math.exp(-Jd(null !== (g = Yk(b, 1)) && void 0 !== g ? g : 1, null !== (h = Yk(c, 1)) && void 0 !== h ? h : 1)));
                var z = Math.exp(Jd(null !== (k = Yk(b, 2)) && void 0 !== k ? k : 1, null !== (l = Yk(c, 2)) && void 0 !== l ? l : 1));
                b = (null !== (m = $k(b, 3)) && void 0 !== m ? m : 1) * d * Math.pow(z, null !== (n = $k(b, 4)) && void 0 !== n ? n : 1);
                b = (null !== (p = $k(c, 3)) && void 0 !== p ? p : 1) * b * (1 - 1 / (1 + Math.exp(-(null !== (t = $k(c, 4)) && void 0 !== t ? t : 1) * Math.log(b) - (null !== (u = $k(c, 5)) && void 0 !== u ? u : 0))));
                return {
                    ad: null !== (y = M(a, Yg, 2)) && void 0 !== y ? y : new Yg(),
                    bid: b
                };
            };
            var ah = function (a) {
                P(this, a, null, null);
            };
            _.N(ah, O);
            var Kd = function (a, b, c) {
                if (null == a)
                    return 0;
                var d = new uy();
                d = Ab(d, 1, b, 0);
                Db(a, 8, d);
                a: {
                    d = _.G(c.sellerSignals.Oc.j);
                    for (var e = d.next(); !e.done; e = d.next())
                        if (!e.value.Eb(a)) {
                            a = !1;
                            break a;
                        }
                    a = !0;
                }
                return a ? b * c.sellerSignals.ub : 0;
            };
            var Ey = function (a) {
                    a = void 0 === a ? window : a;
                    return a._gmptnl ? 'afma-gpt-sdk-a' : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? 'afma-gpt-sdk-i' : null;
                }, Fy = function (a, b) {
                    b = void 0 === b ? window : b;
                    var c = Ey(b);
                    if (!c)
                        return null;
                    var d = null;
                    try {
                        'afma-gpt-sdk-a' == c ? d = b._gmptnl.pm('GAM=', a) || '5' : (d = b.__gmptnl_n || '5', b.webkit.messageHandlers._gmptnl.postMessage('GAM='));
                    } catch (e) {
                        return '3';
                    }
                    return 'string' === typeof d ? d : '3';
                };
            var Gy = function (a, b) {
                Jt.call(this, a);
                this.id = a;
                this.I = b;
            };
            _.N(Gy, Jt);
            Gy.prototype.V = function (a) {
                this.I(this.id, a);
            };
            var Hy = function () {
                    this.errorMessage = this.info = this.error = this.Ub = null;
                }, Iy = function (a, b) {
                    a.Ub = b;
                    return a;
                };
            Hy.prototype.getError = function () {
                return this.error;
            };
            var Jy = function (a, b) {
                    a.errorMessage = b;
                    return a;
                }, Ky = function () {
                    this.cache = {};
                }, Ud = function () {
                    Ly || (My = _.lb(vp), Ny = _.lb(up), Ly = new Ky());
                    return Ly;
                }, Vd = function (a) {
                    var b = H(a, 3);
                    if (!b)
                        return 3;
                    if (void 0 === H(a, 2))
                        return 4;
                    a = Date.now();
                    return a > b + 3600000 * Ny ? 2 : a > b + 3600000 * My ? 1 : 0;
                };
            Ky.prototype.get = function (a, b) {
                var c = new Hy();
                if (this.cache[a])
                    return Iy(c, this.cache[a]);
                var d = '';
                try {
                    d = b.getItem('_GESPSK-' + a);
                } catch (e) {
                    return c.error = 6, Jy(c, e.message);
                }
                if (!d)
                    return new Hy();
                b = null;
                try {
                    b = Kh(Xd, d);
                } catch (e) {
                    return a = new Hy(), a.error = 5, Jy(a, e.message);
                }
                b && (this.cache[a] = b);
                return Iy(new Hy(), b);
            };
            Ky.prototype.set = function (a, b) {
                var c = (0, J.T)(H(a, 1)), d = '_GESPSK-' + c, e = Iy(new Hy(), a);
                try {
                    b.setItem(d, gl(a));
                } catch (f) {
                    e.info = 7, Jy(e, f.message);
                }
                this.cache[c] = a;
                return e;
            };
            var Ly = null, My = 24, Ny = 72;
            var ke = function (a, b, c, d) {
                Gy.call(this, 655, d);
                this.xa = a;
                this.F = b;
                this.storage = c;
                this.o = this.l();
                this.B = this.l();
                this.m = _.lb(ce);
            };
            _.N(ke, Gy);
            ke.prototype.j = function () {
                var a, b = Ud().get(this.xa, this.storage);
                if (b.getError())
                    Rd(b.getError(), this.xa, b.errorMessage), Dt(this.o), Dt(this.B);
                else {
                    var c = Date.now();
                    if (b = b.Ub)
                        if (this.m && (xf(b, 8) || (Rd(33, this.xa), de(b, this.m)), xf(b, 7) || (Rd(34, this.xa), E(b, 7, Math.round(Date.now() / 1000 / 60)))), xf(b, 3) || Rd(35, this.xa), this.m) {
                            var d = (0, J.T)(ee(b, 8)), e = null !== (a = H(b, 7)) && void 0 !== a ? a : c;
                            d < this.m && de(b, Math.min(d + Number((this.m * (c / 1000 / 60 - e) / 60).toFixed(3)), this.m));
                            1 > (0, J.T)(ee(b, 8)) ? (c = {}, Rd(22, this.xa, null, (c.t = String(e), c.cr = String(d), c.cs = String(Vd(b)), c)), Dt(this.o), Dt(this.B)) : (this.o.j(this.F), this.B.j(b));
                        } else
                            this.o.j(this.F), this.B.j(b);
                    else
                        this.o.j(this.F), b = this.B, d = b.j, e = new Xd(), e = E(e, 1, this.xa), e = de(e, this.m), c = E(e, 3, c), d.call(b, c);
                }
            };
            var fe = function (a, b, c, d) {
                    'string' !== typeof c ? Rd(21, a) : c || Rd(20, a);
                    E(b, 2, c);
                    b = Ud().set(b, d);
                    b.errorMessage ? Rd((0, J.T)(b.info), a, b.errorMessage) : Rd(27, a);
                }, ge = function (a) {
                    return 'string' === typeof a ? a : a instanceof Error ? a.message : null;
                };
            var le = function (a, b, c, d) {
                Gy.call(this, 658, d);
                this.storage = c;
                this.m = this.l();
                this.o = this.l();
                this.B = this.l();
                this.F = V(this, a);
                this.K = V(this, b);
            };
            _.N(le, Gy);
            le.prototype.j = function () {
                var a = this;
                if (this.F.value) {
                    var b = function (g) {
                            a.m.j({
                                id: (0, J.T)(H(g, 1)),
                                kd: H(g, 2)
                            });
                        }, c = this.F.value, d = (0, J.T)(this.K.value), e = (0, J.T)(H(d, 1)), f = Vd(d);
                    switch (f) {
                    case 0:
                        Rd(24, e);
                        break;
                    case 1:
                        Rd(25, e);
                        break;
                    case 2:
                        Rd(26, e);
                        break;
                    case 3:
                        Rd(9, e);
                        break;
                    case 4:
                        Rd(23, e);
                    }
                    switch (f) {
                    case 0:
                        b(d);
                        Oy(this);
                        break;
                    case 1:
                        b(d);
                        this.o.j(c);
                        this.B.j(d);
                        break;
                    case 3:
                    case 2:
                    case 4:
                        E(d, 2, null), he(e, d, c, this.storage).then(b), Oy(this);
                    }
                } else
                    Dt(this.m), Oy(this);
            };
            var Oy = function (a) {
                Dt(a.o);
                Dt(a.B);
            };
            var me = function (a, b, c, d) {
                Gy.call(this, 662, d);
                this.storage = c;
                this.m = V(this, a);
                this.o = V(this, b);
            };
            _.N(me, Gy);
            me.prototype.j = function () {
                var a = this;
                this.o.value && this.m.value && je().then(function () {
                    var b = (0, J.T)(a.o.value), c = (0, J.T)(H(b, 1));
                    he(c, b, (0, J.T)(a.m.value), a.storage);
                });
            };
            var ue = function (a, b) {
                this.storage = b;
                this.m = [];
                this.A = [];
                this.j = [];
                a = _.G(a);
                for (b = a.next(); !b.done; b = a.next())
                    this.push(b.value);
            };
            ue.prototype.push = function (a) {
                var b = a.id;
                a = a.collectorFunction;
                if ('string' !== typeof b)
                    Rd(37, 'invalid-id');
                else if ('function' !== typeof a)
                    Rd(14, b);
                else {
                    var c = {};
                    Rd(17, b, null, (c.api = '1', c));
                    b = qe(b, a, this.storage, this.l);
                    this.m.push(b);
                    a = _.G(this.A);
                    for (c = a.next(); !c.done; c = a.next())
                        b.then(c.value);
                }
            };
            ue.prototype.l = function (a, b) {
                for (var c = _.G(this.j), d = c.next(); !d.done; d = c.next())
                    d = d.value, d(a, b);
            };
            var Py = 0, Qy = aj(Ti(Ui('https://pagead2.googlesyndication.com/pagead/expansion_embed.js')));
            var Ry = Wc(function () {
                    return !(jk || kk || ik) && (wk || ek || dk);
                }), Sy = function (a, b, c, d, e) {
                    d = void 0 === d ? '' : d;
                    var f = a.createElement('link');
                    try {
                        Jj(f, b, c);
                    } catch (g) {
                        return null;
                    }
                    d && 'preload' == c && (f.as = d);
                    e && f.setAttribute('nonce', e);
                    a = a.getElementsByTagName('head')[0];
                    if (!a)
                        return null;
                    try {
                        a.appendChild(f);
                    } catch (g) {
                    }
                    return f;
                };
            var Ty = /^\.google\.(com?\.)?[a-z]{2,3}$/, Uy = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/, Vy = function (a) {
                    return Ty.test(a) && !Uy.test(a);
                }, Wy = _.F, Yy = function (a) {
                    a = 'https://adservice' + (a + '/adsid/integrator.js');
                    var b = ['domain=' + encodeURIComponent(_.F.location.hostname)];
                    Xy[3] >= Lf() && b.push('adsid=' + encodeURIComponent(Xy[1]));
                    return a + '?' + b.join('&');
                }, Xy, Zy, $y = function () {
                    Wy = _.F;
                    Xy = Wy.googleToken = Wy.googleToken || {};
                    var a = Lf();
                    Xy[1] && Xy[3] > a && 0 < Xy[2] || (Xy[1] = '', Xy[2] = -1, Xy[3] = -1, Xy[4] = '', Xy[6] = '');
                    Zy = Wy.googleIMState = Wy.googleIMState || {};
                    Vy(Zy[1]) || (Zy[1] = '.google.com');
                    Array.isArray(Zy[5]) || (Zy[5] = []);
                    'boolean' !== typeof Zy[6] && (Zy[6] = !1);
                    Array.isArray(Zy[7]) || (Zy[7] = []);
                    'number' !== typeof Zy[8] && (Zy[8] = 0);
                }, az = function () {
                    $y();
                    return Xy[1];
                }, bz = function () {
                    $y();
                    return Xy[4];
                }, cz = function () {
                    $y();
                    return Xy[6];
                }, dz = function (a) {
                    $y();
                    Vy(a) && (Zy[1] = a);
                }, ez = {
                    ec: function () {
                        return 0 < Zy[8];
                    },
                    Nd: function () {
                        Zy[8]++;
                    },
                    Od: function () {
                        0 < Zy[8] && Zy[8]--;
                    },
                    Pd: function () {
                        Zy[8] = 0;
                    },
                    cf: function () {
                        return !1;
                    },
                    Gc: function () {
                        return Zy[5];
                    },
                    Bc: function (a) {
                        try {
                            a();
                        } catch (b) {
                            _.F.setTimeout(function () {
                                throw b;
                            }, 0);
                        }
                    },
                    Pc: function () {
                        if (!ez.ec()) {
                            var a = _.F.document, b = function (e) {
                                    e = Yy(e);
                                    a: {
                                        try {
                                            var f = Ij('script[nonce]', void 0);
                                            break a;
                                        } catch (g) {
                                        }
                                        f = void 0;
                                    }
                                    Sy(a, e, 'preload', 'script', f);
                                    f = a.createElement('script');
                                    f.type = 'text/javascript';
                                    f.onerror = function () {
                                        return _.F.processGoogleToken({}, 2);
                                    };
                                    e = aj(e);
                                    wd(f, e);
                                    try {
                                        (a.head || a.body || a.documentElement).appendChild(f), ez.Nd();
                                    } catch (g) {
                                    }
                                }, c = Zy[1];
                            b(c);
                            '.google.com' != c && b('.google.com');
                            b = {};
                            var d = (b.newToken = 'FBT', b);
                            _.F.setTimeout(function () {
                                return _.F.processGoogleToken(d, 1);
                            }, 1000);
                        }
                    }
                }, fz = function (a) {
                    $y();
                    var b = Wy.googleToken[5] || 0;
                    a && (0 != b || Xy[3] >= Lf() ? ez.Bc(a) : (ez.Gc().push(a), ez.Pc()));
                    Xy[3] >= Lf() && Xy[2] >= Lf() || ez.Pc();
                }, gz = function (a) {
                    _.F.processGoogleToken = _.F.processGoogleToken || function (b, c) {
                        var d = b;
                        d = void 0 === d ? {} : d;
                        c = void 0 === c ? 0 : c;
                        b = d.newToken || '';
                        var e = 'NT' == b, f = parseInt(d.freshLifetimeSecs || '', 10), g = parseInt(d.validLifetimeSecs || '', 10), h = d['1p_jar'] || '';
                        d = d.pucrd || '';
                        $y();
                        1 == c ? ez.Pd() : ez.Od();
                        var k = Wy.googleToken = Wy.googleToken || {}, l = 0 == c && b && 'string' === typeof b && !e && 'number' === typeof f && 0 < f && 'number' === typeof g && 0 < g && 'string' === typeof h;
                        e = e && !ez.ec() && (!(Xy[3] >= Lf()) || 'NT' == Xy[1]);
                        var m = !(Xy[3] >= Lf()) && 0 != c;
                        if (l || e || m)
                            e = Lf(), f = e + 1000 * f, g = e + 1000 * g, 0.00001 > Math.random() && _.Qm(_.F, 'https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=' + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, $y();
                        if (l || !ez.ec()) {
                            c = ez.Gc();
                            for (b = 0; b < c.length; b++)
                                ez.Bc(c[b]);
                            c.length = 0;
                        }
                    };
                    fz(a);
                };
            var Sg = function (a, b) {
                    b = void 0 === b ? {} : b;
                    this.root = b.root ? b.root : null;
                    this.G = b.rootMargin ? ze(b.rootMargin) : [
                        {
                            value: 0,
                            type: 'px'
                        },
                        {
                            value: 0,
                            type: 'px'
                        },
                        {
                            value: 0,
                            type: 'px'
                        },
                        {
                            value: 0,
                            type: 'px'
                        }
                    ];
                    this.rootMargin = _.ye(this.G, function (c) {
                        return '' + c.value + c.type;
                    }).join(' ');
                    this.B = Be(b.threshold);
                    this.o = a;
                    this.j = [];
                    this.m = [];
                    this.H = !1;
                    this.l = null;
                    this.A = Mi(this.D, 100, this);
                }, hz = function (a) {
                    if (a.root)
                        var b = Ce(a.root);
                    else {
                        var c = _.yl(window);
                        b = {
                            top: 0,
                            right: c.width,
                            bottom: c.height,
                            left: 0,
                            width: c.width,
                            height: c.height
                        };
                    }
                    a = _.ye(a.G, function (d, e) {
                        return 'px' == d.type ? d.value : d.value * (e % 2 ? b.width : b.height) / 100;
                    });
                    return {
                        top: b.top - a[0],
                        right: b.right + a[1],
                        bottom: b.bottom + a[2],
                        left: b.left - a[3],
                        width: b.width + a[1] + a[3],
                        height: b.height + a[0] + a[2]
                    };
                }, iz = function (a, b, c) {
                    if (!b || b.isIntersecting != c.isIntersecting)
                        return !0;
                    var d = b.intersectionRatio, e = c.intersectionRatio;
                    return d == e ? !1 : _.Pi(a.B, function (f) {
                        return f < d != f < e;
                    });
                };
            Sg.prototype.D = function () {
                var a = this, b = hz(this);
                _.Ni(this.j, function (c) {
                    var d = c.target, e = Ce(d), f = e.width * e.height;
                    var g = Math.max(b.top, e.top);
                    var h = Math.min(b.right, e.right), k = Math.min(b.bottom, e.bottom), l = Math.max(b.left, e.left), m = h - l, n = k - g;
                    g = 0 <= m && 0 <= n ? {
                        top: g,
                        right: h,
                        bottom: k,
                        left: l,
                        width: m,
                        height: n
                    } : null;
                    h = !!g;
                    k = g ? g.width * g.height : 0;
                    l = window.performance;
                    d = {
                        boundingClientRect: e,
                        intersectionRatio: f ? k / f : h ? 1 : 0,
                        intersectionRect: g || {
                            top: 0,
                            bottom: 0,
                            left: 0,
                            right: 0,
                            width: 0,
                            height: 0
                        },
                        isIntersecting: h,
                        rootBounds: b,
                        target: d,
                        time: l && l.now ? l.now() : 0
                    };
                    iz(a, c.pa, d) && a.m.push(d);
                    c.pa = d;
                });
                this.m.length && this.o(jz(this), this);
            };
            Sg.prototype.observe = function (a) {
                _.Pi(this.j, function (b) {
                    return b.target == a;
                }) || (this.j.push({
                    target: a,
                    pa: null
                }), this.D(), this.H || (this.H = !0, _.xd(_.F, 'scroll', this.A), _.xd(_.F, 'resize', this.A), _.F.MutationObserver && !this.l && (this.l = new MutationObserver(this.A), this.l.observe(_.F.document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }))));
            };
            Sg.prototype.unobserve = function (a) {
                this.j = _.Ae(this.j, function (b) {
                    return b.target != a;
                });
                0 == this.j.length && this.disconnect();
            };
            Sg.prototype.disconnect = function () {
                this.H = !1;
                this.j.length = 0;
                _.ie(_.F, 'scroll', this.A);
                _.ie(_.F, 'resize', this.A);
                this.l && (this.l.disconnect(), this.l = null);
            };
            var jz = function (a) {
                var b = [].concat(_.ec(a.m));
                a.m.length = 0;
                return b;
            };
            _.kz = function () {
                var a = _.Xb(38);
                this.j = void 0 === a ? 0.01 : a;
                this.l = this.A;
            };
            _.kz.prototype.A = function (a, b, c, d, e) {
                c = void 0 === c ? this.j : c;
                if (Math.random() > c)
                    return !1;
                b.error && b.meta && b.id || (b = new pl(b, {
                    context: a,
                    id: void 0 === e ? 'gpt_exception' : e
                }));
                d && (b.meta = {}, d && d(b.meta));
                _.F.google_js_errors = _.F.google_js_errors || [];
                _.F.google_js_errors.push(b);
                _.F.error_rep_loaded || (Nl(_.F.document, aj(_.F.location.protocol + '//pagead2.googlesyndication.com/pagead/js/err_rep.js')), _.F.error_rep_loaded = !0);
                return !1;
            };
            var lz = function (a, b, c, d, e, f) {
                _.Oq.call(this);
                this.D = a;
                this.status = 1;
                this.m = b;
                this.l = c;
                this.K = d;
                this.pb = !!e;
                this.G = Math.random();
                this.o = {};
                this.j = null;
                this.F = (0, _.Fi)(this.V, this);
                this.B = f;
            };
            _.N(lz, _.Oq);
            lz.prototype.V = function (a) {
                if (!('*' !== this.l && a.origin !== this.l || !this.pb && a.source != this.m)) {
                    var b = null;
                    try {
                        b = JSON.parse(a.data);
                    } catch (c) {
                    }
                    if (_.ia(b) && (a = b.i, b.c === this.D && a != this.G)) {
                        if (2 !== this.status)
                            try {
                                this.status = 2, mz(this), this.j && (this.j(), this.j = null);
                            } catch (c) {
                            }
                        a = b.s;
                        b = b.p;
                        if ('string' === typeof a && ('string' === typeof b || _.ia(b)) && this.o.hasOwnProperty(a))
                            this.o[a](b);
                    }
                }
            };
            var mz = function (a) {
                var b = {};
                b.c = a.D;
                b.i = a.G;
                a.B && (b.e = a.B);
                a.m.postMessage(JSON.stringify(b), a.l);
            };
            lz.prototype.I = function () {
                if (1 === this.status) {
                    try {
                        this.m.postMessage && mz(this);
                    } catch (a) {
                    }
                    window.setTimeout((0, _.Fi)(this.I, this), 50);
                }
            };
            lz.prototype.connect = function (a) {
                a && (this.j = a);
                _.xd(window, 'message', this.F);
                this.K && this.I();
            };
            var nz = function (a, b, c) {
                    a.o[b] = c;
                }, oz = function (a, b, c) {
                    var d = {};
                    d.c = a.D;
                    d.i = a.G;
                    d.s = b;
                    d.p = c;
                    try {
                        a.m.postMessage(JSON.stringify(d), a.l);
                    } catch (e) {
                    }
                };
            lz.prototype.H = function () {
                this.status = 3;
                _.ie(window, 'message', this.F);
                _.Oq.prototype.H.call(this);
            };
            var pz = function (a) {
                P(this, a, null, null);
            };
            _.N(pz, O);
            var qz = function (a) {
                P(this, a, null, null);
            };
            _.N(qz, O);
            var rz = function (a) {
                P(this, a, null, null);
            };
            _.N(rz, O);
            var uz, tz, wz;
            _.sz = function (a) {
                this.j = _.pd(a).floatingAdsStacking;
            };
            uz = function (a) {
                var b = a.j.nextRestrictionId++;
                a.j.maxZIndexRestrictions[b] = 2147483646;
                tz(a);
                return b;
            };
            _.vz = function (a) {
                a = _.Sl(a.j.maxZIndexRestrictions);
                return a.length ? Math.min.apply(null, a) : null;
            };
            tz = function (a) {
                var b = _.vz(a);
                _.Ni(a.j.maxZIndexListeners, function (c) {
                    return c(b);
                });
            };
            wz = function (a) {
                this.l = a;
                this.j = null;
            };
            var xz;
            _.yz = function (a, b) {
                if (!a.body)
                    return null;
                var c = new xz();
                c.apply(a, b);
                return function () {
                    _.Um(a.body, {
                        filter: c.j,
                        webkitFilter: c.j,
                        overflow: c.A,
                        position: c.m,
                        top: c.H
                    });
                    b.scrollTo(0, c.l);
                };
            };
            xz = function () {
                this.j = this.H = this.m = this.A = null;
                this.l = 0;
            };
            xz.prototype.apply = function (a, b) {
                this.A = a.body.style.overflow;
                this.m = a.body.style.position;
                this.H = a.body.style.top;
                this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
                this.l = _.Qt(b);
                _.Um(a.body, 'top', -this.l + 'px');
            };
            var zz = function (a, b) {
                b = void 0 === b ? 500 : b;
                _.Oq.call(this);
                this.l = a;
                this.wb = b;
                this.j = null;
                this.D = {};
                this.G = 0;
                this.m = null;
            };
            _.N(zz, _.Oq);
            zz.prototype.H = function () {
                this.D = {};
                this.m && (_.ie(this.l, 'message', this.m), delete this.m);
                delete this.D;
                delete this.l;
                delete this.j;
                _.Oq.prototype.H.call(this);
            };
            var Bz = function (a) {
                    var b;
                    return 'function' === typeof (null === (b = a.l) || void 0 === b ? void 0 : b.__uspapi) || null != Az(a);
                }, Dz = function (a, b) {
                    var c = {};
                    if (Bz(a)) {
                        var d = _.Li(function () {
                            return b(c);
                        });
                        Cz(a, function (e, f) {
                            f && (c = e);
                            d();
                        });
                        setTimeout(d, a.wb);
                    } else
                        b(c);
                }, Cz = function (a, b) {
                    var c, d;
                    if ('function' === typeof (null === (c = a.l) || void 0 === c ? void 0 : c.__uspapi))
                        (null === (d = a.l) || void 0 === d ? void 0 : d.__uspapi)('getUSPData', 1, b);
                    else if (Az(a)) {
                        Ez(a);
                        var e = ++a.G;
                        a.D[e] = b;
                        a.j && (b = {}, a.j.postMessage((b.__uspapiCall = {
                            command: 'getUSPData',
                            version: 1,
                            callId: e
                        }, b), '*'));
                    }
                }, Az = function (a) {
                    if (a.j)
                        return a.j;
                    a.j = fm(a.l, '__uspapiLocator');
                    return a.j;
                }, Ez = function (a) {
                    a.m || (a.m = function (b) {
                        var c;
                        try {
                            var d = {};
                            'string' === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                            var e = d.__uspapiReturn;
                            null === (c = a.D) || void 0 === c ? void 0 : c[e.callId](e.returnValue, e.success);
                        } catch (f) {
                        }
                    }, _.xd(a.l, 'message', a.m));
                };
            var Fz = function (a, b) {
                if (!a)
                    return a;
                var c = a.toLowerCase();
                return -1 < c.indexOf('<!doctype') || -1 < c.indexOf('<html') ? a : '<!doctype html><html><head>' + (void 0 === b ? '' : b) + '</head><body>' + a + '</body></html>';
            };
            var Gz = function (a, b, c, d, e, f) {
                    this.A = Hm(a);
                    this.l = Hm(b);
                    this.m = c;
                    this.j = Hm(d);
                    this.H = e;
                    this.D = f;
                }, Hz = function (a) {
                    return JSON.stringify({
                        windowCoords_t: a.A.top,
                        windowCoords_r: a.A.right,
                        windowCoords_b: a.A.bottom,
                        windowCoords_l: a.A.left,
                        frameCoords_t: a.l.top,
                        frameCoords_r: a.l.right,
                        frameCoords_b: a.l.bottom,
                        frameCoords_l: a.l.left,
                        styleZIndex: a.m,
                        allowedExpansion_t: a.j.top,
                        allowedExpansion_r: a.j.right,
                        allowedExpansion_b: a.j.bottom,
                        allowedExpansion_l: a.j.left,
                        xInView: a.H,
                        yInView: a.D
                    });
                }, Iz = function (a, b) {
                    var c = window, d = c.screenX || c.screenLeft || 0, e = c.screenY || c.screenTop || 0;
                    c = new _.Gm(e, d + (c.outerWidth || document.documentElement.clientWidth || 0), e + (c.outerHeight || document.documentElement.clientHeight || 0), d);
                    var f = $m(a);
                    d = _.dn(_.en, a);
                    var g = new Im(f.x, f.y, d.width, d.height);
                    d = Jm(g);
                    e = String(Xm(a, 'zIndex'));
                    var h = new _.Gm(0, Infinity, Infinity, 0);
                    for (var k = ul(a), l = k.j.body, m = k.j.documentElement, n = zl(k.j); a = Zm(a);)
                        if (!(_.bk && 0 == a.clientWidth || fk && 0 == a.clientHeight && a == l) && a != l && a != m && 'visible' != Xm(a, 'overflow')) {
                            var p = $m(a), t = new _.ad(a.clientLeft, a.clientTop);
                            p.x += t.x;
                            p.y += t.y;
                            h.top = Math.max(h.top, p.y);
                            h.right = Math.min(h.right, p.x + a.clientWidth);
                            h.bottom = Math.min(h.bottom, p.y + a.clientHeight);
                            h.left = Math.max(h.left, p.x);
                        }
                    a = n.scrollLeft;
                    n = n.scrollTop;
                    h.left = Math.max(h.left, a);
                    h.top = Math.max(h.top, n);
                    k = k.j;
                    k = _.yl(k.parentWindow || k.defaultView || window);
                    h.right = Math.min(h.right, a + k.width);
                    h.bottom = Math.min(h.bottom, n + k.height);
                    h = (h = 0 <= h.top && 0 <= h.left && h.bottom > h.top && h.right > h.left ? h : null) ? new Im(h.left, h.top, h.right - h.left, h.bottom - h.top) : null;
                    b ? (k = b.boundingClientRect, b = new Im(f.x - k.left, f.y - k.top, b.rootBounds.width, b.rootBounds.height)) : b = h;
                    k = h ? Km(g, h) : null;
                    h = f = 0;
                    k && !new _.rl(k.width, k.height).isEmpty() && (f = k.width / g.width, h = k.height / g.height);
                    k = new _.Gm(0, 0, 0, 0);
                    if (a = b)
                        (g = Km(g, b)) ? (n = Jm(b), l = Jm(g), a = l.right != n.left && n.right != l.left, n = l.bottom != n.top && n.bottom != l.top, a = (0 != g.width || a) && (0 != g.height || n)) : a = !1;
                    a && (k = new _.Gm(Math.max(d.top - b.top, 0), Math.max(b.left + b.width - d.right, 0), Math.max(b.top + b.height - d.bottom, 0), Math.max(d.left - b.left, 0)));
                    return new Gz(c, d, e, k, f, h);
                };
            var Jz = function (a) {
                this.H = a;
                this.D = null;
                this.fa = this.status = 0;
                this.l = null;
                this.ja = 'sfchannel' + a;
            };
            var gt = jt;
            var Kz = function (a) {
                this.j = a;
            };
            var Lz = function (a, b) {
                this.Gb = a;
                this.Hb = b;
                this.l = this.j = !1;
            };
            var Mz = function (a, b, c, d, e, f, g, h, k, l) {
                k = void 0 === k ? [] : k;
                this.l = a;
                this.A = b;
                this.m = c;
                this.permissions = d;
                this.metadata = e;
                this.H = f;
                this.pb = g;
                this.hostpageLibraryTokens = k;
                this.j = '';
                this.Sa = h;
                this.eb = void 0 === l ? '' : l;
            };
            var Nz = function (a, b) {
                this.l = a;
                this.m = b;
            };
            Nz.prototype.j = function (a) {
                this.m && a && (a.sentinel = this.m);
                return JSON.stringify(a);
            };
            var Oz = function (a, b, c) {
                Nz.call(this, a, void 0 === c ? '' : c);
                this.version = b;
            };
            _.N(Oz, Nz);
            Oz.prototype.j = function () {
                return Nz.prototype.j.call(this, {
                    uid: this.l,
                    version: this.version
                });
            };
            var Pz = function (a, b, c, d) {
                Nz.call(this, a, void 0 === d ? '' : d);
                this.H = b;
                this.A = c;
            };
            _.N(Pz, Nz);
            Pz.prototype.j = function () {
                return Nz.prototype.j.call(this, {
                    uid: this.l,
                    initialWidth: this.H,
                    initialHeight: this.A
                });
            };
            var Qz = function (a, b, c) {
                Nz.call(this, a, void 0 === c ? '' : c);
                this.description = b;
            };
            _.N(Qz, Nz);
            Qz.prototype.j = function () {
                return Nz.prototype.j.call(this, {
                    uid: this.l,
                    description: this.description
                });
            };
            var Rz = function (a, b, c, d) {
                Nz.call(this, a, void 0 === d ? '' : d);
                this.A = b;
                this.push = c;
            };
            _.N(Rz, Nz);
            Rz.prototype.j = function () {
                return Nz.prototype.j.call(this, {
                    uid: this.l,
                    expand_t: this.A.top,
                    expand_r: this.A.right,
                    expand_b: this.A.bottom,
                    expand_l: this.A.left,
                    push: this.push
                });
            };
            var Sz = function (a, b) {
                Nz.call(this, a, void 0 === b ? '' : b);
            };
            _.N(Sz, Nz);
            Sz.prototype.j = function () {
                return Nz.prototype.j.call(this, { uid: this.l });
            };
            var Tz = function (a, b, c) {
                Nz.call(this, a, void 0 === c ? '' : c);
                this.H = b;
            };
            _.N(Tz, Nz);
            Tz.prototype.j = function () {
                var a = {
                    uid: this.l,
                    newGeometry: Hz(this.H)
                };
                return Nz.prototype.j.call(this, a);
            };
            var Uz = function (a, b, c, d, e, f) {
                Tz.call(this, a, c, void 0 === f ? '' : f);
                this.success = b;
                this.A = d;
                this.push = e;
            };
            _.N(Uz, Tz);
            Uz.prototype.j = function () {
                var a = {
                    uid: this.l,
                    success: this.success,
                    newGeometry: Hz(this.H),
                    expand_t: this.A.top,
                    expand_r: this.A.right,
                    expand_b: this.A.bottom,
                    expand_l: this.A.left,
                    push: this.push
                };
                this.m && (a.sentinel = this.m);
                return JSON.stringify(a);
            };
            var Vz = function (a, b, c, d) {
                Nz.call(this, a, void 0 === d ? '' : d);
                this.width = b;
                this.height = c;
            };
            _.N(Vz, Nz);
            Vz.prototype.j = function () {
                return Nz.prototype.j.call(this, {
                    uid: this.l,
                    width: this.width,
                    height: this.height
                });
            };
            var Wz = function (a, b, c, d, e) {
                var f = c;
                f && (f = '?' + f);
                b = (void 0 === e ? '//tpc.googlesyndication.com' : e) + ('/safeframe/' + b + '/html/container.html' + f);
                e = a;
                for (f = 0; e != e.parent;)
                    f++, e = e.parent;
                (e = f) && (b += (c ? '&' : '?') + 'n=' + e);
                (c = d) || (c = Zl(a, !1));
                return (c ? 'https:' : 'http:') + b;
            };
            var Xz = function () {
                    this.j = [];
                }, Zz = function (a, b, c, d, e) {
                    a.j.push(new Yz(b, c, d, e));
                }, $z = function (a, b, c, d) {
                    Zz(a, b, c, d + 'px', void 0);
                }, aA = function (a) {
                    for (var b = a.j.length - 1; 0 <= b; b--) {
                        var c = a.j[b];
                        c.l ? (c.A.style.removeProperty(c.j), c.A.style.setProperty(c.j, String(c.m), c.H)) : c.A.style[c.j] = c.m;
                    }
                    a.j.length = 0;
                }, Yz = function (a, b, c, d) {
                    this.A = a;
                    this.j = (this.l = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, '-$1').toLowerCase() : b;
                    this.m = this.l ? a.style.getPropertyValue(this.j) : a.style[this.j];
                    this.H = this.l ? a.style.getPropertyPriority(this.j) : void 0;
                    this.l ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c);
                };
            var bA = function () {
                    var a = window, b = _.Qf(a);
                    b && (b = {
                        label: '2',
                        type: 9,
                        value: b
                    }, a = a.google_js_reporting_queue = a.google_js_reporting_queue || [], 2048 > a.length && a.push(b));
                }, cA = function (a, b, c) {
                    var d = window;
                    return function () {
                        var e = _.Qf(), f = 3;
                        try {
                            var g = b.apply(this, arguments);
                        } catch (h) {
                            f = 13;
                            if (c)
                                return c(a, h), g;
                            throw h;
                        } finally {
                            d.google_measure_js_timing && e && (e = {
                                label: a.toString(),
                                value: e,
                                duration: (_.Qf() || 0) - e,
                                type: f
                            }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e));
                        }
                        return g;
                    };
                };
            var hA = function (a) {
                Jz.call(this, a.uniqueId);
                var b = this;
                this.G = a.Gd;
                this.F = 1 == a.size;
                this.W = new Lz(a.permissions.Gb && !this.F, a.permissions.Hb && !this.F);
                this.m = a.qc;
                this.qa = a.hostpageLibraryTokens || [];
                var c = window.location;
                this.la = 'file:' == c.protocol ? '*' : c.protocol + '//' + c.host;
                this.oa = !!a.pb;
                c = !1 === a.Yc ? 'https:' : window.location.protocol;
                this.O = a.Rb ? '//' + a.Rb + '.safeframe.googlesyndication.com' : '//tpc.googlesyndication.com';
                this.na = a.ob ? '*' : Je(a.Sa) ? 'https://secureframe.doubleclick.net' : c + this.O;
                this.Y = !!a.pd;
                this.ga = dA(a);
                this.A = new Xz();
                eA(this, a.qc, a.size);
                this.D = this.ca = Iz(a.qc);
                this.K = a.Sd || '1-0-38';
                this.ma = a.jd || '';
                this.$ = void 0 === a.Sa ? null : a.Sa;
                this.va = a.eb;
                fA(this, a);
                this.ea = null;
                this.I = cA(412, function () {
                    return gA(b);
                }, a.Ba);
                this.V = -1;
                this.B = 0;
                this.o = null;
                !a.ff || 'function' !== typeof IntersectionObserver || hk || gk || (this.o = new IntersectionObserver(cA(414, function (e) {
                    b.ea = e[e.length - 1];
                    gA(b);
                }, a.Ba)));
                this.l = new lz(this.ja, this.j.contentWindow, this.na, !1);
                nz(this.l, 'init_done', (0, _.Fi)(this.hc, this));
                nz(this.l, 'register_done', (0, _.Fi)(this.tc, this));
                nz(this.l, 'report_error', (0, _.Fi)(this.vc, this));
                nz(this.l, 'expand_request', (0, _.Fi)(this.bc, this));
                nz(this.l, 'collapse_request', (0, _.Fi)(this.Zb, this));
                nz(this.l, 'creative_geometry_update', (0, _.Fi)(this.ba, this));
                this.l.connect((0, _.Fi)(this.mc, this));
                var d = cA(415, function () {
                    b.j && (b.j.name = '', a.Lc && a.Lc(), _.ie(b.j, 'load', d));
                }, a.Ba);
                _.xd(this.j, 'load', d);
                this.hc = cA(413, this.hc, a.Ba);
                this.tc = cA(417, this.tc, a.Ba);
                this.vc = cA(419, this.vc, a.Ba);
                this.bc = cA(411, this.bc, a.Ba);
                this.Zb = cA(409, this.Zb, a.Ba);
                this.ba = cA(410, this.ba, a.Ba);
                this.mc = cA(416, this.mc, a.Ba);
            };
            _.N(hA, Jz);
            var eA = function (a, b, c) {
                    a.F ? (b.style.width = _.cn('100%', !0), b.style.height = _.cn('auto', !0)) : (b.style.width = _.cn(c.width, !0), b.style.height = _.cn(c.height, !0));
                }, fA = function (a, b) {
                    var c, d = b.ob ? '' : null != (c = b.content) ? c : '';
                    c = {
                        shared: {
                            sf_ver: a.K,
                            ck_on: it() ? 1 : 0,
                            flash_ver: '0'
                        }
                    };
                    d = a.K + ';' + d.length + ';' + d;
                    c = new Mz(a.H, a.la, a.ca, a.W, new Kz(c), a.F, a.oa, a.$, a.qa, a.va);
                    var e = {};
                    e.uid = c.l;
                    e.hostPeerName = c.A;
                    e.initialGeometry = Hz(c.m);
                    var f = c.permissions;
                    f = JSON.stringify({
                        expandByOverlay: f.Gb,
                        expandByPush: f.Hb,
                        readCookie: f.j,
                        writeCookie: f.l
                    });
                    e = (e.permissions = f, e.metadata = JSON.stringify(c.metadata.j), e.reportCreativeGeometry = c.H, e.isDifferentSourceWindow = c.pb, e.goog_safeframe_hlt = tt(c.hostpageLibraryTokens), e.encryptionMode = c.Sa, e);
                    c.j && (e.sentinel = c.j);
                    c.eb && (e.pbjsAdConfig = c.eb);
                    c = JSON.stringify(e);
                    e = d + c;
                    c = !1 === b.Yc;
                    if (a.Y && b.size instanceof _.rl) {
                        d = Je(b.Sa) ? 'https://secureframe.doubleclick.net' : _.Al(_.tl(a.m)).location.protocol + a.O;
                        f = _.Al(_.tl(a.m));
                        var g = b.Hc, h = b.size;
                        Py || Nl(f.document, Qy);
                        Py++;
                        f.google_eas_queue = f.google_eas_queue || [];
                        f.google_eas_queue.push({
                            a: g,
                            b: d,
                            c: h.width,
                            d: h.height,
                            e: 'sf-gdn-exp-' + Py,
                            f: void 0,
                            g: void 0,
                            h: void 0,
                            i: void 0
                        });
                    }
                    var k = b.size;
                    f = b.Sb;
                    h = b.vd || '';
                    d = b.nb;
                    g = void 0 === b.ob;
                    var l = k.width;
                    k = k.height;
                    a.F && (k = l = 0);
                    var m = {};
                    e = (m.id = b.Hc, m.title = h, m.name = e, m.scrolling = 'no', m.marginWidth = '0', m.marginHeight = '0', m.width = String(l), m.height = String(k), m['data-is-safeframe'] = 'true', m);
                    g && (g = _.Al(_.tl(a.m)), c = Je(a.$) ? 'https://secureframe.doubleclick.net/container.html?ecs=' + f : Wz(g, a.K, a.ma, c, a.O), f = [], a.Y && (h = $l(g.location.href), g = f.push, h = [
                        0 < h.length ? 'google_debug' + (h ? '=' + h : '') + '&' : '',
                        'xpc=',
                        'sf-gdn-exp-' + a.H,
                        '&p=',
                        encodeURIComponent(_.F.document.location.protocol),
                        '//',
                        encodeURIComponent(_.F.document.location.host)
                    ].join(''), g.call(f, h)), f.length && (c += '#' + f.join('&')), e.src = c);
                    null !== a.ga && (e.sandbox = a.ga);
                    d && (e.allow = d);
                    b.ob ? (a.j = b.ob, wl(a.j, e)) : (b = _.tl(a.m), d = {}, d = (d.frameborder = 0, d.allowTransparency = 'true', d.style = 'border:0;vertical-align:bottom;', d.src = 'about:blank', d), e && Ba(d, e), b = b.createElement('IFRAME'), wl(b, d), a.j = b);
                    a.F && (a.j.style.minWidth = '100%');
                    a.m.appendChild(a.j);
                };
            aa = hA.prototype;
            aa.mc = function () {
                this.o && this.j ? this.o.observe(this.j) : (_.xd(window, 'resize', this.I), _.xd(window, 'scroll', this.I));
            };
            aa.hc = function (a) {
                try {
                    if (0 != this.status)
                        throw Error('Container already initialized');
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ia(b) || !Ie(b.uid) || 'string' !== typeof b.version)
                        throw Error('Cannot parse JSON message');
                    var c = new Oz(b.uid, b.version, b.sentinel);
                    if (this.H != c.l || this.K != c.version)
                        throw Error('Wrong source container');
                    this.status = 1;
                } catch (d) {
                    this.G.error('Invalid INITIALIZE_DONE message. Reason: ' + d.message);
                }
            };
            aa.tc = function (a) {
                try {
                    if (1 != this.status)
                        throw Error('Container not initialized');
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ia(b) || !Ie(b.uid) || 'number' !== typeof b.initialWidth || 'number' !== typeof b.initialHeight)
                        throw Error('Cannot parse JSON message');
                    if (this.H != new Pz(b.uid, b.initialWidth, b.initialHeight, b.sentinel).l)
                        throw Error('Wrong source container');
                    this.status = 2;
                } catch (c) {
                    this.G.error('Invalid REGISTER_DONE message. Reason: ' + c.message);
                }
            };
            aa.vc = function (a) {
                try {
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ia(b) || !Ie(b.uid) || 'string' !== typeof b.description)
                        throw Error('Cannot parse JSON message');
                    var c = new Qz(b.uid, b.description, b.sentinel);
                    if (this.H != c.l)
                        throw Error('Wrong source container');
                    this.G.info('Ext reported an error. Description: ' + c.description);
                } catch (d) {
                    this.G.error('Invalid REPORT_ERROR message. Reason: ' + d.message);
                }
            };
            aa.bc = function (a) {
                try {
                    if (2 != this.status)
                        throw Error('Container is not registered');
                    if (0 != this.fa)
                        throw Error('Container is not collapsed');
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ia(b) || !Ie(b.uid) || 'number' !== typeof b.expand_t || 'number' !== typeof b.expand_r || 'number' !== typeof b.expand_b || 'number' !== typeof b.expand_l || 'boolean' !== typeof b.push)
                        throw Error('Cannot parse JSON message');
                    var c = new Rz(b.uid, new _.Gm(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
                    if (this.H != c.l)
                        throw Error('Wrong source container');
                    if (!(0 <= c.A.top && 0 <= c.A.left && 0 <= c.A.bottom && 0 <= c.A.right))
                        throw Error('Invalid expansion amounts');
                    var d;
                    if (d = c.push && this.W.Hb || !c.push && this.W.Gb) {
                        var e = c.A, f = c.push, g = this.D = Iz(this.j);
                        if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                            if (!f)
                                for (var h = this.j.parentNode; h && h.style; h = h.parentNode)
                                    Zz(this.A, h, 'overflowX', 'visible', 'important'), Zz(this.A, h, 'overflowY', 'visible', 'important');
                            var k = this.D.l, l = this.D.l, m = Jm(new Im(0, 0, k.right - k.left, l.bottom - l.top));
                            _.ia(e) ? (m.top -= e.top, m.right += e.right, m.bottom += e.bottom, m.left -= e.left) : (m.top -= e, m.right += Number(void 0), m.bottom += Number(void 0), m.left -= Number(void 0));
                            Zz(this.A, this.m, 'position', 'relative');
                            Zz(this.A, this.j, 'position', 'absolute');
                            f ? ($z(this.A, this.m, 'width', m.right - m.left), $z(this.A, this.m, 'height', m.bottom - m.top)) : Zz(this.A, this.j, 'zIndex', '10000');
                            $z(this.A, this.j, 'width', m.right - m.left);
                            $z(this.A, this.j, 'height', m.bottom - m.top);
                            $z(this.A, this.j, 'left', m.left);
                            $z(this.A, this.j, 'top', m.top);
                            this.fa = 2;
                            this.D = Iz(this.j);
                            d = !0;
                        } else
                            d = !1;
                    }
                    a = d;
                    oz(this.l, 'expand_response', new Uz(this.H, a, this.D, c.A, c.push).j());
                    if (!a)
                        throw Error('Viewport or document body not large enough to expand into.');
                } catch (n) {
                    this.G.error('Invalid EXPAND_REQUEST message. Reason: ' + n.message);
                }
            };
            aa.Zb = function (a) {
                try {
                    if (2 != this.status)
                        throw Error('Container is not registered');
                    if (2 != this.fa)
                        throw Error('Container is not expanded');
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ia(b) || !Ie(b.uid))
                        throw Error('Cannot parse JSON message');
                    if (this.H != new Sz(b.uid, b.sentinel).l)
                        throw Error('Wrong source container');
                    aA(this.A);
                    this.fa = 0;
                    this.j && (this.D = Iz(this.j));
                    oz(this.l, 'collapse_response', new Tz(this.H, this.D).j());
                } catch (c) {
                    this.G.error('Invalid COLLAPSE_REQUEST message. Reason: ' + c.message);
                }
            };
            var gA = function (a) {
                if (1 == a.status || 2 == a.status)
                    switch (a.B) {
                    case 0:
                        iA(a);
                        a.V = window.setTimeout((0, _.Fi)(a.aa, a), 1000);
                        a.B = 1;
                        break;
                    case 1:
                        a.B = 2;
                        break;
                    case 2:
                        a.B = 2;
                    }
            };
            hA.prototype.ba = function (a) {
                try {
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ia(b) || !Ie(b.uid) || 'number' !== typeof b.width || 'number' !== typeof b.height || b.sentinel && 'string' !== typeof b.sentinel)
                        throw Error('Cannot parse JSON message');
                    var c = new Vz(b.uid, b.width, b.height, b.sentinel);
                    if (this.H != c.l)
                        throw Error('Wrong source container');
                    var d = String(c.height);
                    this.F ? d != this.j.height && (this.j.height = d, gA(this)) : this.G.error('Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.');
                } catch (e) {
                    this.G.error('Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: ' + e.message);
                }
            };
            hA.prototype.aa = function () {
                if (1 == this.status || 2 == this.status)
                    switch (this.B) {
                    case 1:
                        this.B = 0;
                        break;
                    case 2:
                        iA(this), this.V = window.setTimeout((0, _.Fi)(this.aa, this), 1000), this.B = 1;
                    }
            };
            var iA = function (a) {
                    a.D = Iz(a.j, a.ea);
                    a.ea = null;
                    oz(a.l, 'geometry_update', new Tz(a.H, a.D).j());
                }, dA = function (a) {
                    var b = null;
                    a.Tc && (b = a.Tc);
                    return null == b ? null : b.join(' ');
                }, jA = [
                    'allow-modals',
                    'allow-orientation-lock',
                    'allow-presentation',
                    'allow-pointer-lock'
                ], kA = ['allow-top-navigation'], lA = ['allow-same-origin'], mA = cm([].concat(_.ec(jA), _.ec(kA)));
            cm([].concat(_.ec(jA), _.ec(lA)));
            cm([].concat(_.ec(jA), _.ec(kA), _.ec(lA)));
            var Ke = function (a, b) {
                try {
                    Fd(Sh(a, b));
                } catch (c) {
                }
            };
            var nA = function (a) {
                P(this, a, null, null);
            };
            _.N(nA, O);
            var oA = function () {
            };
            var pA = [
                    0.05,
                    0.1,
                    0.2,
                    0.5
                ], qA = [
                    0,
                    0.5,
                    1
                ], rA = function (a) {
                    a = se(a);
                    if (!a)
                        return -1;
                    try {
                        var b = Ds(a.document);
                        var c = new _.rl(b.clientWidth, b.clientHeight);
                    } catch (d) {
                        c = new _.rl(-12245933, -12245933);
                    }
                    return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height;
                }, sA = function (a, b) {
                    return 0 > a ? [] : _.ye(pA, function (c) {
                        return Math.min(a / b * c, 1);
                    });
                }, vA = function (a) {
                    this.j = a.J;
                    this.A = a.lb;
                    this.o = a.xb;
                    this.m = null;
                    this.H = a.Ba;
                    this.l = tA(this);
                    this.B = a.Wd || !1;
                    this.G = a.bf || !1;
                    this.D = null;
                    this.G && uA(this);
                }, xA = function (a, b) {
                    if (a.l) {
                        if (null != a.m) {
                            try {
                                wA(a, Math.round(performance.now()), 0, 0, 0, !1);
                            } catch (c) {
                                a.H && a.H(c);
                            }
                            a.l && a.l.unobserve(a.A);
                            a.D = null;
                        }
                        a.m = b;
                        a.l.observe(a.A);
                        a.G && (a.A.getBoundingClientRect(), xt(a.j.document) || se(a.j), a.D = new oA());
                    }
                }, tA = function (a) {
                    var b = a.A.offsetWidth * a.A.offsetHeight, c = rA(a.j);
                    b = [].concat(_.ec(qA), _.ec(sA(c, b)));
                    la(b);
                    return _.F.IntersectionObserver ? new _.F.IntersectionObserver(function (d) {
                        return yA(a, d);
                    }, { threshold: b }) : new Sg(function (d) {
                        return yA(a, d);
                    }, { threshold: b });
                }, yA = function (a, b) {
                    try {
                        var c = rA(a.j);
                        _.Ni(b, function (d) {
                            var e = Math.round(d.time), f = d.boundingClientRect.width * d.boundingClientRect.height, g = d.intersectionRect.width * d.intersectionRect.height;
                            d = d.isIntersecting;
                            a.B && wA(a, e, f, g, c, d);
                        });
                    } catch (d) {
                        a.H && a.H(d);
                    }
                }, wA = function (a, b, c, d, e, f) {
                    if (null == a.m)
                        throw Error('Not Attached.');
                    var g = new nA();
                    c = E(g, 1, c);
                    d = E(c, 2, d);
                    e = E(d, 3, e);
                    b = E(e, 4, b);
                    b = E(b, 5, f);
                    f = new Zd();
                    e = H(b, 4);
                    null != e && Ik(f, 4, e);
                    e = H(b, 2);
                    null != e && Ik(f, 2, e);
                    e = H(b, 1);
                    null != e && Ik(f, 1, e);
                    e = H(b, 3);
                    null != e && Ik(f, 3, e);
                    e = H(b, 5);
                    null != e && (b = e, null != b && (Vj(f.j, 40), f.j.push(b ? 1 : 0)));
                    f = ae(f);
                    f = Ka(f, 4);
                    Jb(a.o, '1', 10, f, void 0, a.m);
                }, uA = function (a) {
                    var b = wt(a.j.document);
                    b && _.xd(a.j.document, b, function () {
                    });
                };
            var zA = function (a, b) {
                    this.j = a;
                    this.l = b;
                }, AA = function (a) {
                    var b = gm('google_ads_top_frame', a.j);
                    b = b && b.contentWindow;
                    if (!b)
                        return !1;
                    b.addEventListener('message', function (c) {
                        var d = c.ports;
                        '__goog_top_url_req' === c.data.msgType && d.length && d[0].postMessage({
                            msgType: '__goog_top_url_resp',
                            topUrl: a.l
                        });
                    }, !1);
                    return !0;
                };
            var BA = function (a) {
                    a = void 0 === a ? window : a;
                    return !a.PeriodicSyncManager;
                }, CA = {
                    issuerOrigin: 'https://adservice.google.com',
                    issuancePath: '/tt/i',
                    redemptionPath: '/tt/r',
                    shouldRedeemToken: function () {
                        var a = void 0 === a ? window : a;
                        return !BA(a) || _.v(Rp) ? !0 : !1;
                    },
                    shouldRequestToken: function () {
                        return !1;
                    }
                }, DA = function () {
                    var a = void 0 === a ? window : a;
                    if (!BA(a) && _.v(Kp) || BA(a) && _.v(Lp)) {
                        a = a.navigator.userAgent;
                        var b = /Chrome/.test(a);
                        return /Android/.test(a) && b;
                    }
                    return !1;
                }, EA = {
                    issuerOrigin: 'https://attestation.android.com',
                    issuancePath: '/att/i',
                    redemptionPath: '/att/r',
                    shouldRedeemToken: function () {
                        return DA();
                    },
                    shouldRequestToken: function () {
                        return DA();
                    }
                };
            var ym = [
                    'A+b/H0b8RPXNaJgaNFpO0YOFuGK6myDQXlwnJB3SwzvNMfcndat4DZYMrP4ClJIzYWo3/yP2S+8FTZ/lpqbPAAEAAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=',
                    'A9ZgbRtm4pU3oZiuNzOsKcC8ppFSZdcjP2qYcdQrFKVzkmiWH1kdYY1Mi9x7G8+PS8HV9Ha9Cz0gaMdKsiVZIgMAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
                    'AxL6oBxcpn5rQDPKSAs+d0oxNyJYq2/4esBUh3Yx5z8QfcLu+AU8iFCXYRcr/CEEfDnkxxLTsvXPJFQBxHfvkgMAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
                    'A9KPtG5kl3oLTk21xqynDPGQ5t18bSOpwt0w6kGa6dEWbuwjpffmdUpR3W+faZDubGT+KIk2do0BX2ca16x8qAcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
                    'AookgM0K6zABiuRTZwpn+R95G2CKmUH/2+zf2kS/QpMlVZ6HTI6QekeLkrJyxeIi62p2ejcQTF464pkdlx0Nwg0AAABmeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJUcnVzdFRva2VucyIsImV4cGlyeSI6MTYzNDA4MzE5OSwiaXNTdWJkb21haW4iOnRydWV9'
                ], HA = function (a, b, c) {
                    a = void 0 === a ? function () {
                    } : a;
                    b = void 0 === b ? null : b;
                    c = void 0 === c ? !1 : c;
                    _.Oq.call(this);
                    FA();
                    this.D = b || _.v(Np) ? [EA] : [
                        CA,
                        EA
                    ];
                    this.l = c;
                    this.m = a;
                    if (document.hasTrustToken && !_.v(Mp))
                        if (_.v(Pp)) {
                            if (!Array.isArray(window.goog_tt_state)) {
                                var d = GA(this);
                                Object.defineProperty(window, 'goog_tt_state', {
                                    configurable: !1,
                                    get: function () {
                                        return d.slice();
                                    }
                                });
                            }
                        } else
                            this.j = GA(this);
                };
            _.N(HA, _.Oq);
            var IA = function () {
                    var a = void 0 === a ? window : a;
                    return a.goog_tt_state;
                }, JA = function (a) {
                    return a.some(function (b) {
                        return 6 === b.state;
                    });
                }, FA = function () {
                    var a = void 0 === a ? window.document : a;
                    Am(a);
                }, KA = function (a, b) {
                    a = a.filter(function (c) {
                        return 6 === c.state;
                    }).map(function (c) {
                        return c.issuerOrigin;
                    });
                    if (0 == a.length)
                        return null;
                    a = {
                        type: 'send-redemption-record',
                        issuers: a,
                        refreshPolicy: 'none',
                        signRequestData: 'include',
                        includeTimestampHeader: !0,
                        additionalSignedHeaders: [
                            'sec-time',
                            'Sec-Redemption-Record'
                        ]
                    };
                    b && 0 < _.r(Object, 'keys').call(Object, b).length && (a.additionalSigningData = Ck(JSON.stringify(b), 3));
                    return a;
                }, LA = function (a) {
                    var b = _.v(Pp) ? IA() : _.Xb(250), c = _.Xb(252);
                    if (a.setTrustToken && b && JA(b))
                        try {
                            var d = KA(b, c);
                            d && a.setTrustToken(d);
                        } catch (e) {
                        }
                }, GA = function (a) {
                    var b = a.D.map(function (c) {
                        return {
                            issuerOrigin: c.issuerOrigin,
                            state: _.v(Op) && !a.l ? 12 : 1
                        };
                    });
                    _.v(Pp) || a.m(b);
                    return b;
                }, MA = function (a, b, c) {
                    if (_.v(Pp)) {
                        if (a = _.r(window.goog_tt_state, 'find').call(window.goog_tt_state, function (e) {
                                return e.issuerOrigin === b;
                            }))
                            a.state = c;
                    } else {
                        var d = _.r(a.j, 'find').call(a.j, function (e) {
                            return e.issuerOrigin === b;
                        });
                        d && (d.state = c, a.m(a.j));
                    }
                }, NA = function () {
                    var a = window.goog_tt_state;
                    return Array.isArray(a) && a.some(function (b) {
                        return 1 != b.state;
                    });
                }, OA = function (a, b) {
                    var c = b.issuerOrigin + b.redemptionPath, d = {
                            keepalive: !0,
                            redirect: 'follow',
                            method: 'get',
                            trustToken: {
                                type: 'token-redemption',
                                issuer: b.issuerOrigin,
                                refreshPolicy: 'none'
                            }
                        };
                    MA(a, b.issuerOrigin, 2);
                    return window.fetch(c, d).then(function (e) {
                        if (!e.ok)
                            throw Error(e.status + ': Network response was not ok!');
                        MA(a, b.issuerOrigin, 6);
                    }).catch(function (e) {
                        e && 'NoModificationAllowedError' === e.name ? MA(a, b.issuerOrigin, 6) : MA(a, b.issuerOrigin, 5);
                    });
                }, PA = function (a, b, c) {
                    var d = b.issuerOrigin + b.issuancePath;
                    MA(a, b.issuerOrigin, 8);
                    return window.fetch(d, { trustToken: { type: 'token-request' } }).then(function (e) {
                        if (!e.ok)
                            throw Error(e.status + ': Network response was not ok!');
                        MA(a, b.issuerOrigin, 10);
                        if (c)
                            return OA(a, b);
                    }).catch(function (e) {
                        if (e && 'NoModificationAllowedError' === e.name) {
                            if (MA(a, b.issuerOrigin, 10), c)
                                return OA(a, b);
                        } else
                            MA(a, b.issuerOrigin, 9);
                    });
                }, QA = function (a) {
                    if (!(!document.hasTrustToken || _.v(Mp) || _.v(Op) && !a.l || _.v(Pp) && NA())) {
                        var b = [];
                        a.D.forEach(function (c) {
                            var d = c.shouldRedeemToken(), e = c.shouldRequestToken();
                            if (d || e) {
                                var f = document.hasTrustToken(c.issuerOrigin).then(function (g) {
                                    if (g) {
                                        if (d)
                                            return OA(a, c);
                                    } else {
                                        if (e)
                                            return PA(a, c, d);
                                        MA(a, c.issuerOrigin, 3);
                                    }
                                });
                                b.push(f);
                            } else
                                MA(a, c.issuerOrigin, 7);
                        });
                        if (D.Promise && D.Promise.all)
                            return D.Promise.all(b);
                    }
                };
            var RA = function (a, b, c) {
                    return a.IntersectionObserver ? new a.IntersectionObserver(c, b) : new Sg(c, b);
                }, SA = function (a, b, c) {
                    _.xd(a, b, c);
                    return function () {
                        return _.ie(a, b, c);
                    };
                }, TA = null, UA = function () {
                    TA = _.yc();
                }, VA = function (a, b) {
                    return b ? null === TA ? (_.xd(a, 'mousemove', UA, { passive: !0 }), _.xd(a, 'scroll', UA, { passive: !0 }), UA(), !1) : _.yc() - TA >= 1000 * b : !1;
                }, WA = function (a) {
                    var b = a.J, c = a.element, d = a.Yd, e = a.Xd, f = void 0 === a.Vc ? 0 : a.Vc, g = a.Yb, h = a.qd, k = void 0 === a.Kc ? !0 : a.Kc, l = null, m = !1, n = !1, p = [], t = (void 0 === a.Ib ? RA : a.Ib)(b, void 0 === a.options ? {} : a.options, function (u, y) {
                            try {
                                var z = function () {
                                    p.length || (e && (p.push(SA(c, 'mouseenter', function () {
                                        m = !0;
                                        z();
                                    })), p.push(SA(c, 'mouseleave', function () {
                                        m = !1;
                                        z();
                                    }))), p.push(SA(b.document, 'visibilitychange', function () {
                                        return z();
                                    })));
                                    var K = VA(b, f), Q = xt(b.document);
                                    if (n && !m && !K && !Q)
                                        l = l || b.setTimeout(function () {
                                            VA(b, f) ? z() : (g(), y.disconnect());
                                        }, 1000 * d);
                                    else if (k || m || K || Q)
                                        b.clearTimeout(l), l = null;
                                };
                                n = u[u.length - 1].isIntersecting;
                                z();
                            } catch (K) {
                                h && h(K);
                            }
                        });
                    t.observe(c);
                    return function () {
                        t.disconnect();
                        for (var u = _.G(p), y = u.next(); !y.done; y = u.next())
                            y = y.value, y();
                        null != l && b.clearTimeout(l);
                    };
                };
            var XA = function () {
                    var a = H(Fh.N().j, 26);
                    this.l = null;
                    this.j = 0;
                    this.A = a;
                }, YA = function (a) {
                    if (_.v(No))
                        return new Yx();
                    if (!a.l) {
                        var b = _.Xb(7);
                        ay = ey;
                        hy = b;
                        gy = 0;
                        if (!zj() || 0 <= Ag(Bg(), 11))
                            b = jy();
                        else {
                            b = gn();
                            var c = b.__google_ad_urls;
                            b = c ? c : b.__google_ad_urls = new Yx();
                        }
                        a.l = b;
                        a.j = a.l.setupOse(a.A);
                    }
                    return a.l;
                };
            XA.prototype.getOseId = function () {
                if (_.v(No))
                    return 2;
                this.j || (this.j = Xx(0, _.Xb(7)));
                return this.j;
            };
            var ZA = 0, $A = function () {
                    this.X = [];
                    this.m = [];
                    this.Xa = this.Ya = NaN;
                    this.A = 0;
                    this.Ob = this.Lb = this.Cb = '';
                    this.D = [];
                    this.I = 0;
                    this.fa = this.H = this.l = this.G = null;
                    this.B = zb(_.F);
                    this.j = 'json_html';
                    this.o = 'fif';
                    this.Ca = 1;
                    this.F = new D.Map();
                }, aB = function (a, b, c, d, e, f, g, h, k) {
                    a.m = b;
                    a.A = c;
                    a.D = d;
                    a.Cb = e;
                    a.Lb = f;
                    a.Ob = g;
                    a.G = void 0 === h ? null : h;
                    a.fa = void 0 === k ? null : k;
                }, bB = function (a, b) {
                    var c = a.F.get(b);
                    c || (c = window === window.top ? (++ZA).toString(36) : Oj(), a.F.set(b, c), _.Hg(b, function () {
                        a.F.delete(b);
                    }));
                    return c;
                };
            var cB = function (a, b, c, d, e, f, g, h, k) {
                Y.call(this, 718);
                this.F = V(this, b);
                this.I = V(this, c);
                this.B = V(this, d);
                this.m = V(this, e);
                Mt(this, f);
                this.K = U(this, g);
                this.o = U(this, h);
                this.W = U(this, k);
                this.O = tg(a, br);
            };
            _.N(cB, Y);
            cB.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f;
                    return B(b, function (g) {
                        if (1 == g.j) {
                            if (!dB(c))
                                return g.return();
                            d = c.K.value;
                            e = c.o.value;
                            _.Um(e, 'visibility', 'hidden');
                            _.Um(e, 'min-width', '100%');
                            _.Um(d, 'min-width', '100%');
                            return C(g, c.O, 2);
                        }
                        if (c.A)
                            return g.return();
                        f = d.contentDocument;
                        if (!f)
                            return mc('gpt_amp_fluid_no_iframedoc', function (h) {
                                Zb(h);
                            }), g.return();
                        eB(c, d, e, f.body.offsetWidth, f.body.offsetHeight);
                        mi(g);
                    });
                });
            };
            var dB = function (a) {
                    var b = !a.W.value;
                    return null == a.m.value || a.B.value || 'height' !== a.I.value || b ? !1 : !0;
                }, eB = function (a, b, c, d, e) {
                    b.setAttribute('height', String(e));
                    b.setAttribute('width', String(d));
                    _.Um(c, 'visibility', 'visible');
                    fB(a, e, d);
                }, fB = function (a, b, c) {
                    var d = a.F.value;
                    mc('gpt_fluid_sz', function (e) {
                        q(e, 'sz', c + 'x' + b);
                        q(e, 'qqid', d || '');
                        Zb(e);
                        q(e, 'ff', 1);
                    });
                };
            var gB = function (a, b, c, d, e) {
                Y.call(this, 685);
                var f = this;
                this.slotId = a;
                this.J = b;
                this.m = V(this, c);
                this.o = U(this, d);
                this.B = U(this, e);
                tg(this.slotId, ug, function (g) {
                    return Om(f.J, g.detail);
                });
            };
            _.N(gB, Y);
            gB.prototype.j = function () {
                var a, b;
                if (!_.v(no) && !this.B.value) {
                    var c = null !== (b = null === (a = this.m.value) || void 0 === a ? void 0 : H(a, 1)) && void 0 !== b ? b : '', d = Pm(this.J, this.o.value, c);
                    _.Hg(this, function () {
                        try {
                            d();
                        } catch (e) {
                            Ub(493, e);
                        }
                    });
                }
            };
            var hB = /(<head(\s+[^>]*)?>)/i, iB = function (a, b, c, d, e) {
                    Y.call(this, 665);
                    this.m = this.l();
                    this.o = U(this, a);
                    this.B = V(this, b);
                    this.F = V(this, c);
                    this.I = V(this, d);
                    this.K = V(this, e);
                };
            _.N(iB, Y);
            iB.prototype.j = function () {
                if (0 !== this.o.value.kind || !Qe(this.B.value) || Gt(this.F))
                    this.m.j(this.o.value);
                else {
                    var a = this.o.value.ra || '', b = !!this.I.value, c = !!this.K.value;
                    c || Cg() || (a = a.replace(hB, '$1<meta http-equiv=Content-Security-Policy content="script-src https://cdn.ampproject.org/;object-src \'none\';child-src blob:;frame-src \'none\'">'));
                    b && !c && (a = a.replace(hB, '$1<meta name="referrer" content="origin">'));
                    this.m.j({
                        kind: 0,
                        ra: a
                    });
                }
            };
            var jB = function (a, b, c, d) {
                _.Oq.call(this);
                var e = this;
                this.l = a;
                this.j = null;
                _.v(Jo) || _.Hg(this, Tq(b, ug, function (f) {
                    var g = f.detail;
                    return void D.Promise.all([
                        c.promise,
                        d.promise
                    ]).then(function (h) {
                        h = _.G(h);
                        var k = h.next().value;
                        null == h.next().value || k || (h = g.data, e.A) || ('impression-viewable' === h ? e.l(!0) : 'string' === typeof h && 0 === h.indexOf('visibility-changed-') && (h = /^visibility-changed-(\d+(\.\d+)?)$/.exec(h)) && (h = Math.round(100 * Number(h[1])), 0 <= h && 100 >= h && (0 !== h && 100 !== h || h !== e.j) && (null !== e.j || 0 < h) && (e.j = h, e.l(!1, h))));
                    });
                }));
            };
            _.N(jB, _.Oq);
            var kB = function (a, b) {
                    return Math.max('string' === typeof a ? _.r(a, 'endsWith').call(a, 'px') ? parseInt(a, 10) : 0 : a, b) + 'px';
                }, lB = function (a, b, c) {
                    a.style.minWidth = kB(a.style.minWidth, b);
                    a.style.minHeight = kB(a.style.minHeight, c);
                }, mB = function (a, b, c, d, e) {
                    a = a.createElement('DIV');
                    a.id = c;
                    a.name = c;
                    c = a.style;
                    c.border = '0pt none';
                    d && (c.margin = 'auto', c.textAlign = 'center');
                    e && (d = Array.isArray(e), c.width = d ? e[0] + 'px' : '100%', c.height = d ? e[1] + 'px' : '0%');
                    b.appendChild(a);
                    return a;
                }, nB = function (a, b, c, d, e, f, g, h, k, l, m, n, p, t, u, y) {
                    var z = wg, K = _.wh(Fv).A, Q;
                    Array.isArray(d) ? Q = new _.rl(d[0], d[1]) : Q = 1;
                    d = null;
                    null !== c && (d = null === m ? Fz(c) : '<startguard>' + c + '<endguard>');
                    return new hA({
                        qc: a,
                        Hc: b,
                        vd: z,
                        content: d,
                        size: Q,
                        Gd: {
                            info: function () {
                            },
                            M: function () {
                            },
                            error: function () {
                            }
                        },
                        pd: l,
                        Lc: e,
                        Tc: h || void 0,
                        permissions: {
                            Gb: xf(f, 1) ? !!x(f, 1) : !k,
                            Hb: xf(f, 2) ? !!x(f, 2) : !1
                        },
                        pb: !!Jg().fifWin,
                        Sd: iv(),
                        jd: jv(),
                        Yc: !1,
                        hostpageLibraryTokens: K,
                        Ba: Ub,
                        Sa: null === m ? void 0 : m,
                        uniqueId: p,
                        Sb: n,
                        Rb: g || void 0,
                        nb: t || void 0,
                        ob: u || void 0,
                        eb: y || void 0
                    });
                }, oB = function (a, b, c) {
                    var d = void 0 === d ? !0 : d;
                    var e = void 0 === e ? !0 : e;
                    b = Fz(b, '<script>var inDapIF=true,inGptIF=true;</script>');
                    try {
                        var f = a.contentWindow ? a.contentWindow.document : a.contentDocument;
                        d && Cg() && f.open('text/html', 'replace');
                        c();
                        Hj(f, new _.Dj(b, null, _.Cj));
                        a.contentWindow && a.contentWindow.history && a.contentWindow.history.replaceState && fj(a.contentWindow.location.href, '#') && a.contentWindow.history.replaceState(null, '', '#' + Math.random());
                        e && f.close();
                    } catch (g) {
                        Vb(653, g, !0);
                    }
                }, qB = function (a, b, c) {
                    var d = Yc(c), e = Vc(b, a);
                    if ((_.v(Eo) || _.v(Fo)) && e) {
                        var f = Hf(e), g = f.depth;
                        f = f.Vd.getBoundingClientRect();
                        if (0 === (null == f ? void 0 : f.height)) {
                            var h = _.G(rv(c));
                            c = h.next().value;
                            h = h.next().value;
                            f = 0 <= f.top && f.bottom <= (_.F.innerHeight || a.documentElement.clientHeight);
                            _.v(Eo) && If(f, g);
                            _.v(Fo) && f && 0 < c && 0 < h && Cc().M(ss(b.getAdUnitPath(), b.j, c.toString(), h.toString()), b);
                        }
                    }
                    f = null == e ? void 0 : e.getBoundingClientRect();
                    if (c = _.lb(Ho)) {
                        g = b = 0;
                        d = _.G(d);
                        for (h = d.next(); !h.done; h = d.next())
                            if (h = h.value, Array.isArray(h)) {
                                var k = _.G(h), l = k.next().value;
                                k = k.next().value;
                                if (!(1 >= l || 1 >= k))
                                    switch (c) {
                                    case 3:
                                        return h.slice();
                                    case 7:
                                        return [
                                            l,
                                            0
                                        ];
                                    case 4:
                                        250 >= k && (g = Math.max(g, k));
                                    case 5:
                                        b = Math.min(b || Infinity, l);
                                        break;
                                    case 2:
                                    case 6:
                                        b = Math.min(b || Infinity, l);
                                        g = Math.min(g || Infinity, k);
                                        break;
                                    case 8:
                                    case 10:
                                    case 9:
                                        b = b || l, g = Math.min(g || Infinity, k);
                                    }
                            }
                        if (10 === c) {
                            if (a = _.Al(a), e && !pB(Xc(e, a)) && e.parentElement && !pB(Xc(e.parentElement, a)))
                                return [
                                    b,
                                    0
                                ];
                        } else if (6 === c || 9 === c)
                            if (a = (null == f ? void 0 : f.top) > _.F.innerHeight, e && !a)
                                return [
                                    b,
                                    0
                                ];
                        return b || g ? [
                            b,
                            g
                        ] : null;
                    }
                    if (!d.length)
                        return null;
                    e = d[0].slice();
                    if (1 < d.length) {
                        a:
                            if ((a = Vc(b, a)) && a.style.height && a.style.width)
                                for (a = [
                                        a.style.width,
                                        a.style.height
                                    ], d = 0; d < a.length; ++d)
                                    if (2 < a[d].length && 'px' == a[d].substring(a[d].length - 2))
                                        a[d] = parseInt(a[d], 10);
                                    else {
                                        a = null;
                                        break a;
                                    }
                            else
                                a = null;
                        e = a || e;
                    }
                    return e;
                }, rB = function (a, b, c) {
                    if (!Sv(b, a)) {
                        var d = Vc(b, a);
                        if (d) {
                            var e = c.U;
                            c = c.P[b.j];
                            var f = qB(a, b, c);
                            if (_.v(Io) || _.v(Ao)) {
                                if (_.v(Io) && Array.isArray(f)) {
                                    var g = _.G(f);
                                    f = g.next().value;
                                    g = g.next().value;
                                    d.style.minWidth || (d.style.minWidth = f + 'px');
                                    d.style.minHeight || (d.style.minHeight = g + 'px');
                                }
                                _.v(Ao) && mB(a, d, Xv(b), uv(e, c), [
                                    0,
                                    0
                                ]);
                            } else
                                mB(a, d, Xv(b), uv(e, c), f), _.v(Do) && Array.isArray(f) && (b = _.G(f), a = b.next().value, b = b.next().value, lB(d, a, b));
                        }
                    }
                }, pB = function (a) {
                    return !!a && ('sticky' === a.position || 'fixed' === a.position);
                };
            var sB = 0;
            var bg = new D.WeakMap(), $f = function (a, b) {
                    a = [a];
                    for (var c = b.length - 1; 0 <= c; --c)
                        a.push(typeof b[c], b[c]);
                    return a.join('\x0B');
                };
            var tB = dg(function (a) {
                return (null === a || void 0 === a ? 0 : a.src) ? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|pagead2\.googlesyndication\.com)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src) ? 0 : 1 : 2;
            }, function (a, b) {
                var c;
                return a + '\x0B' + (null === (c = b[0]) || void 0 === c ? void 0 : c.src);
            });
            var uB = function (a, b, c, d) {
                    try {
                        var e;
                        if (!(e = !b)) {
                            var f;
                            if (!(f = !ry(b, c, void 0 === d ? 100 : d))) {
                                a: {
                                    do {
                                        var g = Xc(b, c);
                                        if (g && 'fixed' == g.position) {
                                            var h = !1;
                                            break a;
                                        }
                                    } while (b = b.parentElement);
                                    h = !0;
                                }
                                f = !h;
                            }
                            e = f;
                        }
                        e && (a.height = -1);
                    } catch (k) {
                        a.width = -1, a.height = -1;
                    }
                }, eg = function (a) {
                    for (var b, c = {}, d = _.G(I(a, Bf, 9)), e = d.next(); !e.done; e = d.next())
                        e = e.value, c[Cf(e)] = H(e, 2);
                    a = H(a, 8);
                    a.length && (null !== (b = c.excl_cat) && void 0 !== b ? b : c.excl_cat = a);
                    return c;
                }, vB = function (a) {
                    var b = !1, c = I(a, Bf, 2).map(function (d) {
                            var e = Cf(d);
                            b = 'excl_cat' === e;
                            d = H(d, 2);
                            return encodeURIComponent(e) + '=' + encodeURIComponent(d.join());
                        });
                    a = H(a, 3);
                    !b && a.length && c.push(encodeURIComponent('excl_cat') + '=' + encodeURIComponent(a.join()));
                    return c;
                }, wB = function (a) {
                    var b;
                    if (null === (b = a.location) || void 0 === b ? 0 : b.ancestorOrigins)
                        return a.location.ancestorOrigins.length;
                    var c = 0;
                    Ml(function () {
                        c++;
                        return !1;
                    }, !0, !0, a);
                    return c;
                }, xB = function (a, b, c, d, e, f, g, h) {
                    this.X = a;
                    this.A = b;
                    this.R = c;
                    this.m = d;
                    this.model = e;
                    this.da = f;
                    this.L = g;
                    this.D = void 0 === h ? !1 : h;
                    this.H = [];
                    this.j = '';
                    this.l = [];
                    this.G = [];
                    this.o = new D.Set(ng(dp));
                }, AB = function (a) {
                    var b = void 0 === b ? window : b;
                    if (0 === a.X.length)
                        return '';
                    yB(a, a.X, b);
                    var c, d;
                    b = null !== (d = null === (c = Yu(a.L.U)) || void 0 === c ? void 0 : x(c, 9)) && void 0 !== d && d || !x(a.da, 5) ? 'https://pagead2.googlesyndication.com/gampad/ads?' : '' + _.Xb(247) + '/gampad/ads?';
                    a.j = b;
                    c = a.H;
                    if (_.v(go))
                        for (d = Math.random, b = c.length - 1; 0 < b; b--) {
                            var e = Math.floor(d() * (b + 1)), f = c[b];
                            c[b] = c[e];
                            c[e] = f;
                        }
                    c = _.G(c);
                    for (b = c.next(); !b.done; b = c.next())
                        if (d = a, b = b.value, e = zB(b))
                            '?' !== d.j[d.j.length - 1] && (d.j += '&'), d.j += b.Kd + '=' + e;
                    return a.j;
                }, BB = function (a, b) {
                    try {
                        var c = b.top;
                        var d = Es(c.document, c);
                    } catch (e) {
                        d = new _.ad(-12245933, -12245933);
                    }
                    Z(a, 'scr_x', Math.round(d.x), { ua: !0 });
                    Z(a, 'scr_y', Math.round(d.y), { ua: !0 });
                }, CB = function (a) {
                    var b = window, c = (x(a.da, 5) && vc(b) ? b.document.cookie : null) || '';
                    var d = b.document.domain;
                    var e = b.history.length, f = b.screen, g = b.document.referrer;
                    if (Lm())
                        d = gn().gaGlobal || {};
                    else {
                        var h = Math.round(new Date().getTime() / 1000), k = b.google_analytics_domain_name;
                        d = 'undefined' == typeof k ? Ox('auto', d) : Ox(k, d);
                        var l = -1 < c.indexOf('__utma=' + d + '.'), m = -1 < c.indexOf('__utmb=' + d), n;
                        (n = (Mm() || gn()).gaGlobal) || (n = {}, (Mm() || gn()).gaGlobal = n);
                        var p = !1;
                        if (l)
                            g = c.split('__utma=' + d + '.')[1].split(';')[0].split('.'), m ? n.sid = g[3] : n.sid || (n.sid = h + ''), n.vid = g[0] + '.' + g[1], n.from_cookie = !0;
                        else {
                            n.sid || (n.sid = h + '');
                            if (!n.vid) {
                                p = !0;
                                m = Math.round(2147483647 * Math.random());
                                l = Mx.appName;
                                var t = Mx.version, u = Mx.language ? Mx.language : Mx.browserLanguage, y = Mx.platform, z = Mx.userAgent;
                                try {
                                    var K = Mx.javaEnabled();
                                } catch (S) {
                                    K = !1;
                                }
                                K = [
                                    l,
                                    t,
                                    u,
                                    y,
                                    z,
                                    K ? 1 : 0
                                ].join('');
                                f ? K += f.width + 'x' + f.height + f.colorDepth : _.F.java && _.F.java.awt && (f = _.F.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), K += f.screen.width + 'x' + f.screen.height);
                                K = K + c + (g || '');
                                for (g = K.length; 0 < e;)
                                    K += e-- ^ g++;
                                n.vid = (m ^ Nx(K) & 2147483647) + '.' + h;
                            }
                            n.from_cookie = !1;
                        }
                        if (!n.cid) {
                            b:
                                for (h = 999, k && (k = 0 == k.indexOf('.') ? k.substr(1) : k, h = k.split('.').length), k = 999, c = c.split(';'), g = 0; g < c.length; g++)
                                    if (f = Px.exec(c[g]) || Qx.exec(c[g]) || Rx.exec(c[g])) {
                                        K = f[1] || 0;
                                        if (K == h) {
                                            var Q = f[2];
                                            break b;
                                        }
                                        K < k && (k = K, Q = f[2]);
                                    }
                            p && Q && -1 != Q.search(/^\d+\.\d+$/) ? (n.vid = Q, n.from_cookie = !0) : Q != n.vid && (n.cid = Q);
                        }
                        n.dh = d;
                        n.hid || (n.hid = Math.round(2147483647 * Math.random()));
                        d = n;
                    }
                    Z(a, 'ga_vid', d.vid, { ha: !1 });
                    Z(a, 'ga_sid', d.sid, { ha: !1 });
                    Z(a, 'ga_hid', d.hid, { ha: !1 });
                    Z(a, 'ga_fc', d.from_cookie, { ha: !1 });
                    Z(a, 'ga_cid', d.cid, { ha: !1 });
                    Z(a, 'ga_wpids', b.google_analytics_uacct);
                }, DB = function (a, b) {
                    var c, d;
                    try {
                        var e = null === (d = null === (c = b.external) || void 0 === c ? void 0 : c.getHostEnvironmentValue) || void 0 === d ? void 0 : d.bind(b.external);
                        if (e) {
                            var f = parseInt(JSON.parse(e('os-mode'))['os-mode'], 10);
                            0 <= f && Z(a, 'wsm', f + 1);
                        }
                    } catch (g) {
                    }
                }, yB = function (a, b, c) {
                    c = void 0 === c ? window : c;
                    var d, e = c.document, f = a.L, g = f.U;
                    f = f.P;
                    Z(a, 'gdfp_req', 1, { ha: !1 });
                    Z(a, 'pvsid', a.model.B);
                    Z(a, 'correlator', H(g, 26));
                    Z(a, 'output', a.model.j, { ha: !1 });
                    'wbn' === a.model.j && (Z(a, 'wbsu', $i(a.model.l).replace(/^urn:uuid:/, '')), Z(a, 'callback', a.model.H));
                    Z(a, 'impl', a.model.o, { ha: !1 });
                    EB(a, Pf({
                        ld: kf(g, 24, 0),
                        Cb: a.model.Cb,
                        Ob: a.model.Ob,
                        Lb: a.model.Lb
                    }));
                    EB(a, Tf(g, a.model));
                    _.v(ho) ? EB(a, new D.Map([
                        [
                            'eid',
                            { value: a.model.m }
                        ],
                        [
                            'debug_experiment_id',
                            { value: Xp().split(',') }
                        ]
                    ])) : FB(a);
                    GB(a);
                    Z(a, 'ptt', 17);
                    HB(a);
                    IB(a);
                    Z(a, 'sc', _.Xb(6) ? 1 : 0, { ua: !0 });
                    window.postMessage && Z(a, 'sfv', iv());
                    Z(a, 'ecs', a.L.Sb);
                    JB(a, b, e);
                    KB(a);
                    LB(a, b);
                    MB(a, b);
                    NB(a, c);
                    Ob('google_preview') && Z(a, 'gct', Nb('google_preview'));
                    EB(a, Ue(c));
                    _.v(ho) ? EB(a, new D.Map([[
                            'expflags',
                            { value: _.Xb(253) ? yq(Yn) || null : null }
                        ]])) : _.Xb(253) && (g = yq(Yn)) && Z(a, 'expflags', g);
                    OB(a, b, c);
                    g = {};
                    g.u_tz = -new Date().getTimezoneOffset();
                    g.u_his = jn();
                    g.u_java = !!il.navigator && 'unknown' !== typeof il.navigator.javaEnabled && !!il.navigator.javaEnabled && il.navigator.javaEnabled();
                    il.screen && (g.u_h = il.screen.height, g.u_w = il.screen.width, g.u_ah = il.screen.availHeight, g.u_aw = il.screen.availWidth, g.u_cd = il.screen.colorDepth);
                    il.navigator && il.navigator.plugins && (g.u_nplug = il.navigator.plugins.length);
                    il.navigator && il.navigator.mimeTypes && (g.u_nmime = il.navigator.mimeTypes.length);
                    _.$b(g, function (k, l) {
                        Z(a, l, k, { ha: !1 });
                    });
                    PB(a);
                    try {
                        var h = on();
                    } catch (k) {
                        h = '0';
                    }
                    Z(a, 'flash', h, {
                        ha: !1,
                        ua: !0
                    });
                    QB(a, b, c);
                    (_.v(Ip) || Kb.N().j) && Z(a, 'rumc', a.model.B, { ha: !1 });
                    _.v(to) && Z(a, 'rume', 1, { ha: !1 });
                    Z(a, 'vis', _.ut(e), { ha: !1 });
                    0 === tB(_.Xb(172)) || Z(a, 'stss', tB(_.Xb(172)));
                    (null === (d = _.F.navigator) || void 0 === d ? 0 : d.deviceMemory) && Z(a, 'dmc', _.F.navigator.deviceMemory);
                    BB(a, c);
                    RB(a, b, c);
                    EB(a, Zf(b, f, c));
                    0 < a.model.D.length && Z(a, 'psts', a.model.D);
                    CB(a);
                    DB(a, c);
                    _.v(Jn) && (Z(a, 'js', Ey(c)), Z(a, 'ms', Fy(a.model.B.toString(), c)));
                    SB(a, c, b);
                    TB(a, b, c);
                    UB(a);
                    VB(a);
                    WB(a);
                    XB(a);
                    YB(a);
                    Z(a, 'cbidsp', hf(b, a.L.P));
                }, UB = function (a) {
                    var b = a.model.fa;
                    b && (Z(a, 'floc_id', b.id), Z(a, 'floc_ver', b.version));
                }, VB = function (a) {
                    _.v(mp) && 'runAdAuction' in navigator && 'joinAdInterestGroup' in navigator && Z(a, 'td', 1);
                }, WB = function (a) {
                    var b = _.Xb(251);
                    b && Z(a, 'uach', Ck(b, 3));
                }, XB = function (a) {
                    var b = _.v(Pp) ? IA() : _.Xb(250);
                    (null === b || void 0 === b ? 0 : b.length) && Z(a, 'tt_state', Ck(JSON.stringify(b), 3));
                }, RB = function (a, b, c) {
                    var d, e = a.L.P, f = [], g = [];
                    b = _.G(b);
                    for (var h = b.next(); !h.done; h = b.next()) {
                        var k = h.value;
                        h = Vc(k);
                        h = qm((null === h || void 0 === h ? void 0 : h.parentElement) && Xc(h.parentElement, c) || null);
                        if (!h || 1 === h[0] && 1 === h[3]) {
                            var l = Vc(k), m = null !== (d = null === l || void 0 === l ? void 0 : l.parentElement) && void 0 !== d ? d : null;
                            h = Mv(m) || new _.rl(0, 0);
                            uB(h, m, c);
                            m = Mv(Vc(k)) || new _.rl(0, 0);
                            uB(m, l, c, 1);
                            -1 === h.height && (m.height = -1);
                            _.v(Go) && (l = _.G(rv(e[k.j])), k = l.next().value, l = l.next().value, 0 <= h.height && (h.width = Math.max(h.width, k), h.height = Math.max(h.height, l)), 0 <= m.height && (m.width = Math.max(m.width, k), m.height = Math.max(m.height, l)));
                            f.push(h.width + 'x' + h.height);
                            g.push(m.width + 'x' + m.height);
                        } else
                            f.push('-1x-1'), g.push('-1x-1');
                    }
                    Z(a, 'psz', f, { Aa: '|' });
                    Z(a, 'msz', g, { Aa: '|' });
                }, SB = function (a, b, c) {
                    var d = 0 !== qd(), e = Fs(!0, b, d).width, f = [], g = [], h = [];
                    if (null !== b && b != b.top) {
                        var k = Fs(!1, b).width;
                        (-12245933 === e || -12245933 === k || k < e) && h.push(8);
                    }
                    -12245933 !== e && (1.5 * e < b.document.documentElement.scrollWidth ? h.push(10) : d && 1.5 * b.outerWidth < e && h.push(10));
                    c = _.G(c);
                    for (k = c.next(); !k.done; k = c.next()) {
                        d = new du();
                        var l = Vc(k.value);
                        k = 0;
                        var m = _.v(Cn), n = !1, p = !1, t = _.v(Fn);
                        if (l)
                            for (var u = 0; l && 100 > u; u++, l = l.parentElement) {
                                var y = Xc(l, b);
                                if (y) {
                                    if ('visible' !== y.overflowY) {
                                        d.set(2);
                                        var z = Mv(l);
                                        z && (k = k ? Math.min(k, z.width) : z.width);
                                        if (d.get(9))
                                            break;
                                    }
                                    pB(y) && d.set(9);
                                    'none' === y.display && d.set(7);
                                    'IFRAME' === l.nodeName && (z = parseInt(y.width, 10), z < e && (d.set(8), k = k ? Math.min(z, k) : z));
                                    m && (t = t || 'nowrap' === y.whiteSpace, p = p || 'scroll' === y.overflowX || 'auto' === y.overflowX, n = n || 'flex' === y.display);
                                } else
                                    d.set(3);
                            }
                        else
                            d.set(1);
                        m && t && p && n && d.set(11);
                        m = _.G(h);
                        for (n = m.next(); !n.done; n = m.next())
                            d.set(n.value);
                        f.push(eu(d));
                        g.push(k);
                    }
                    Z(a, 'fws', f);
                    Z(a, 'ohw', g);
                }, TB = function (a, b, c) {
                    try {
                        var d = Es(c.top.document, c.top).y;
                        Z(a, 'btvi', b.map(function (e) {
                            var f, g = a.L, h = g.P[e.j];
                            g = uv(g.U, h);
                            e = null === (f = Tv(e, h, c.document, g)) || void 0 === f ? void 0 : f.y;
                            h = Fs(!0, c).height;
                            return void 0 === e || -12245933 === e || -12245933 === h ? -1 : e < d + h ? 0 : ++ZB;
                        }), {
                            ua: !0,
                            Aa: '|'
                        });
                    } catch (e) {
                    }
                }, $B = function (a, b) {
                    var c = a.L, d = c.U, e = c.P;
                    return _.v(Qn) ? b.map(function (f) {
                        return sv(e[f.j], null);
                    }).join(',') : a.A ? b.map(function (f) {
                        var g = e[f.j];
                        g = _.v(Rn) ? pu(a.R, f) || sv(g, x(d, 6) || x(g, 17) ? null : Vc(f)) : sv(g);
                        if (f = a.R.j.get(f))
                            f.Ra = g;
                        return g;
                    }).join(',') : b.map(function (f) {
                        var g = a.L.P[f.j];
                        g = pu(a.R, f) || sv(g, x(a.L.U, 6) || x(g, 17) ? null : Vc(f));
                        if (f = a.R.j.get(f))
                            f.Ra = g;
                        return g;
                    }).join(',');
                }, QB = function (a, b, c) {
                    c = void 0 === c ? window : c;
                    var d = c.document;
                    b = (_.v(Rn) ? x(a.L.U, 6) : a.A) ? Iv(a.L.U) : Jv(a.L.P[b[0].j]) || Iv(a.L.U);
                    var e = Ob('google_preview'), f = e ? Mb(d.URL) : d.URL;
                    e = e ? Mb(d.referrer) : d.referrer;
                    d = !1;
                    if (null != b) {
                        var g = f;
                        Hs(c) || (e = '', d = !_.v(ep) || !a.R.mb);
                    } else
                        b = f;
                    f = wB(c);
                    Z(a, 'nhd', f || null);
                    Z(a, 'url', b);
                    var h = b, k = _.Xb(252) || {};
                    k.url = h;
                    _.wh(Bq)[252] = k;
                    null != g && g !== b && Z(a, 'loc', g);
                    Z(a, 'ref', e);
                    f && (g = a.R.mb, g = void 0 === g ? '' : g, b = Oe(c.top) && c.top.location && c.top.location.href || '', e = c.location && c.location.ancestorOrigins || null, (c = b || g || Fm(c) || e && e[e.length - 1] || '') && Z(a, 'top', d ? Il(c.match(_.Hl)[3] || null) : c));
                    Z(a, 'scar', a.model.G);
                }, GB = function (a) {
                    var b = Pb();
                    Z(a, 'vrg', b);
                }, LB = function (a, b) {
                    var c = a.L.P, d = b = b.map(function (e) {
                            return fg(c[e.j]).join('&');
                        });
                    d.join('|').length === b.length - 1 && (d = null);
                    Z(a, 'prev_scp', d, { Aa: '|' });
                }, HB = function (a) {
                    var b = a.L.U;
                    0 !== kf(b, 24, 0) && Z(a, 'co', kf(b, 24, 0), { ua: !0 });
                }, IB = function (a) {
                    var b = Yu(a.L.U) || new Uu();
                    !0 === x(b, 1) && Z(a, 'rdp', '1');
                    !0 === x(b, 9) && Z(a, 'ltd', '1');
                    var c = H(a.da, 2);
                    c && Z(a, 'gdpr_consent', c);
                    xf(a.da, 3) && (c = x(a.da, 3), Z(a, 'gdpr', c ? '1' : '0', { ua: !0 }));
                    (c = H(a.da, 4)) && Z(a, 'addtl_consent', c);
                    (c = H(a.da, 7)) && Z(a, 'tcfe', c);
                    (c = H(a.da, 1)) && Z(a, 'us_privacy', c);
                    (x(a.da, 6) || x(b, 8)) && Z(a, 'npa', 1);
                    c = kf(b, 6, 2);
                    2 !== c && Z(a, 'tfua', c, { ua: !0 });
                    xf(b, 5) && (b = H(b, 5), Z(a, 'tfcd', b, { ua: !0 }));
                }, KB = function (a) {
                    var b = a.L.U;
                    1 !== kf(b, 24, 0) && xf(b, 16) && Z(a, 'ppid', H(b, 16), { ua: !0 });
                }, MB = function (a, b) {
                    var c = a.L, d = c.U, e = 1 !== a.model.Ca;
                    c = !!x(c.P[b[0].j], 17);
                    b = Kv(b, a.L);
                    d = x(d, 27) || !1;
                    var f = 3 === a.model.Ca, g = new du();
                    g.set(0, e);
                    g.set(1, c);
                    g.set(2, b);
                    g.set(3, d);
                    g.set(4, f);
                    e = eu(g);
                    0 < e && Z(a, 'eri', e);
                }, NB = function (a, b) {
                    var c = a.L.U, d = vB(c);
                    Z(a, 'cust_params', d, { Aa: '&' });
                    if (0 == kf(c, 24, 0)) {
                        if (a.m) {
                            d = mt(a.m, a.da);
                            Z(a, 'cookie', d, { ua: !0 });
                            if (d = !d) {
                                d = a.m;
                                if (0 === d.l) {
                                    var e = a.da;
                                    if (mt(d, e))
                                        e = !0;
                                    else {
                                        var f = d.j;
                                        x(e, 5) && vc(f) && new wc(f.document).set('GoogleAdServingTest', 'Good', void 0);
                                        if (f = 'Good' === xc('GoogleAdServingTest', e, d.j)) {
                                            var g = d.j;
                                            x(e, 5) && vc(g) && ht(new wc(g.document), 'GoogleAdServingTest');
                                        }
                                        e = f;
                                    }
                                    d.l = e ? 2 : 1;
                                }
                                d = 2 === d.l;
                            }
                            d && Z(a, 'cookie_enabled', '1', { ua: !0 });
                        }
                        d = b.document;
                        (b = (Iv(a.L.U) || Eg(b)) === d.URL ? '' : d.domain) && Z(a, 'cdm', b);
                    }
                    (c = H(c, 8)) ? (50 < c.length && (c = c.substring(0, 50)), c = 'a ' + Ck('role:1 producer:12 loc:"' + (c + '"'))) : c = '';
                    c && Z(a, 'uule', c);
                    c = new du();
                    _.F.SVGElement && _.F.document.createElementNS && c.set(0);
                    b = dm();
                    b['allow-top-navigation-by-user-activation'] && c.set(1);
                    b['allow-popups-to-escape-sandbox'] && c.set(2);
                    _.F.crypto && _.F.crypto.subtle && c.set(3);
                    _.F.TextDecoder && _.F.TextEncoder && c.set(4);
                    c = eu(c);
                    Z(a, 'bc', c);
                }, aC = function (a, b) {
                    var c = a.L, d = c.P, e = new D.Map();
                    c = _.G(I(c.U, Bf, 14));
                    for (var f = c.next(); !f.done; f = c.next()) {
                        var g = f.value;
                        e.set(Cf(g), [H(g, 2)[0]]);
                    }
                    for (c = 0; c < b.length; c++) {
                        g = d[b[c].j];
                        if (!g)
                            return;
                        g = _.G(I(g, Bf, 3));
                        for (f = g.next(); !f.done; f = g.next()) {
                            var h = f.value;
                            f = Cf(h);
                            var k = e.get(f) || [];
                            h = H(h, 2)[0];
                            1 === b.length ? k[0] = h : h !== k[0] && (k[c + 1] = h);
                            e.set(f, k);
                        }
                    }
                    b = [];
                    d = _.G(_.r(e, 'keys').call(e));
                    for (c = d.next(); !c.done; c = d.next())
                        if (g = c.value, c = tu()[g])
                            g = e.get(g), 1 < g.length ? (g = g.map(function (l) {
                                return encodeURIComponent(l || '');
                            }).join(), b.push(c + ',' + g)) : 1 === g.length && 'url' !== c && Z(a, c, g[0]);
                    b.length && Z(a, 'sps', b.join('|'));
                }, OB = function (a, b, c) {
                    var d, e = c.document;
                    if (!Iv(a.L.U)) {
                        try {
                            var f = Math.round(Date.parse(c.document.lastModified) / 1000) || null;
                        } catch (t) {
                            f = null;
                        }
                        Z(a, 'lmt', f ? f.toString() : null);
                    }
                    Z(a, 'dt', new Date().getTime(), { ha: !1 });
                    try {
                        f = sB;
                        var g = Math.min(Yp('domLoading') || Infinity, Yp('domInteractive') || Infinity);
                        var h = Infinity == g ? Math.max(Yp('responseEnd'), Yp('navigationStart')) : g;
                        0 < h && f >= h && (Z(a, 'dlt', h, { ha: !1 }), Z(a, 'idt', f - h, { ha: !1 }));
                    } catch (t) {
                        Z(a, 'idt', -9, { ha: !1 }), t instanceof Error && Ub(479, t);
                    }
                    if (null !== (d = bC) && void 0 !== d)
                        d;
                    else {
                        a: {
                            h = c.navigator;
                            g = c.document;
                            f = h.userAgent;
                            var k = h.platform, l = /WebKit\/(\d+)/, m = /rv:(\d+\.\d+)/, n = /rv:1\.8([^.]|\.0)/;
                            if (/Win|Mac|Linux|iPad|iPod|iPhone/.test(k) && !/^Opera/.test(f) && (l = (l.exec(f) || [
                                    0,
                                    0
                                ])[1], m = (m.exec(f) || [
                                    0,
                                    0
                                ])[1], /Win/.test(k) && /Trident/.test(f) && 11 <= g.documentMode || !l && 'Gecko' === h.product && 27 <= m && !n.test(f) || 536 <= l)) {
                                h = !0;
                                break a;
                            }
                            h = !1;
                        }
                        g = Is(c, c.document, 500, 300);
                        bC = h && !g;
                    }
                    bC || Z(a, 'ea', '0', { ua: !0 });
                    h = c.document;
                    g = Gs(gn()).J;
                    g = Js(g);
                    h = Is(gn(), h, c.google_ad_width, c.google_ad_height);
                    g = g.jc;
                    f = gn();
                    f = f.top == f ? 0 : Oe(f.top) ? 1 : 2;
                    k = 4;
                    h || 1 != f ? h || 2 != f ? h && 1 == f ? k = 7 : h && 2 == f && (k = 8) : k = 6 : k = 5;
                    g && (k |= 16);
                    h = '' + k;
                    Ks();
                    Z(a, 'frm', h || null);
                    if (h = Fs(!0, c))
                        a.L.Za = h, Z(a, 'biw', h.width), Z(a, 'bih', h.height);
                    !Hs(c) && (h = Fs(!1, c)) && (Z(a, 'isw', h.width), Z(a, 'ish', h.height));
                    a.model.A && Z(a, 'oid', a.model.A);
                    h = [];
                    g = [];
                    k = a.L;
                    f = k.U;
                    k = k.P;
                    n = _.G(b);
                    for (m = n.next(); !m.done; m = n.next()) {
                        m = m.value;
                        l = k[m.j];
                        var p = uv(f, l);
                        m = Tv(m, l, e, p);
                        a.A && (m = m || cC);
                        m && (h.push(Math.round(m.x)), g.push(Math.round(m.y)));
                        if (!a.A)
                            break;
                    }
                    Z(a, 'adxs', h);
                    Z(a, 'adys', g);
                    Z(a, 'adks', $B(a, b));
                    e = 0;
                    void 0 === _.F.postMessage && (e |= 1);
                    0 < e && Z(a, 'osd', e);
                    dC(a, b);
                    aC(a, b);
                    e = ln(c);
                    a.D ? Z(a, 'ifi', e) : (Z(a, 'ifi', e + 1), e = c, b = b.length, b = void 0 === b ? 1 : b, e = Mm(Lm(e)) || e, e.google_unique_id = (e.google_unique_id || 0) + b);
                    null !== c && c != c.top ? (b = [c.document.URL], c.name && b.push(c.name), c = Fs(!1, c, !1), b.push(c.width.toString()), b.push(c.height.toString()), c = Tl(b.join(''))) : c = 0;
                    0 !== c && Z(a, 'ifk', c.toString());
                }, PB = function (a) {
                    var b = _.F.devicePixelRatio;
                    (b = 'number' === typeof b ? +b.toFixed(3) : null) && Z(a, 'u_sd', b, { ha: !1 });
                }, FB = function (a) {
                    Z(a, 'eid', a.model.m);
                    var b = Xp().split(',');
                    b && Z(a, 'debug_experiment_id', b);
                }, JB = function (a, b, c) {
                    for (var d = _.G(b), e = d.next(); !e.done; e = d.next())
                        eC(a, e.value.getAdUnitPath());
                    d = a.L;
                    var f = d.U, g = d.P;
                    d = b.map(function (k) {
                        return g[k.j];
                    });
                    Z(a, 'iu_parts', a.l);
                    Z(a, 'enc_prev_ius', a.G);
                    Z(a, 'prev_iu_szs', d.map(function (k) {
                        return qv(k);
                    }).join());
                    d.some(function (k) {
                        return (L = Yc(k), _.r(L, 'includes')).call(L, 'fluid');
                    }) && (e = d.map(function (k) {
                        return (L = Yc(k), _.r(L, 'includes')).call(L, 'fluid') ? 'height' : '0';
                    }), Z(a, 'fluid', e));
                    Z(a, 'fsfs', ff(b, function (k) {
                        var l;
                        k = g[k.j];
                        return Number(null !== (l = null === k || void 0 === k ? void 0 : x(k, 12)) && void 0 !== l ? l : x(f, 13));
                    }, 0));
                    Z(a, 'fsbs', ff(b, function (k) {
                        var l = a.L.P[k.j];
                        k = a.L.U.ya();
                        l = null === l || void 0 === l ? void 0 : l.ya();
                        return (null === l || void 0 === l ? 0 : x(l, 3)) || (null === k || void 0 === k ? 0 : x(k, 3)) ? 1 : 0;
                    }, 0));
                    EB(a, Sf(a.R, b, a.D));
                    fC(a, g[b[0].j]);
                    EB(a, Mf(b, g, c));
                    EB(a, Nf(d));
                    b = {};
                    c = _.G(d);
                    for (d = c.next(); !d.done; d = c.next())
                        (d = H(d.value, 7)) && (b[d] = (b[d] || 0) + 1);
                    if (!Ql(b)) {
                        c = new Yb('gpt_sra_setclickurl');
                        var h = [];
                        _.$b(b, function (k, l) {
                            h.push(String(l.length) + ':' + String(k));
                        });
                        q(c, 'lenfreqs', h.join());
                        Zb(c);
                        ac(c, _.Xb(58));
                    }
                }, fC = function (a, b) {
                    (_.v(Rn) ? x(a.L.U, 6) : a.A) || !H(b, 7) || Z(a, 'click', H(b, 7));
                }, gC = function (a, b) {
                    for (var c = 0; c < b.length; c++)
                        if ('' !== b[c]) {
                            for (var d = !1, e = 0; e < a.l.length; e++)
                                if (b[c] === a.l[e]) {
                                    d = !0;
                                    break;
                                }
                            d || a.l.push(b[c]);
                        }
                }, hC = function (a, b) {
                    for (var c = '', d = 0; d < b.length; d++) {
                        if (0 < d)
                            c += '/';
                        else if ('' === b[0])
                            continue;
                        for (var e = 0; e < a.l.length; e++)
                            if (b[d] === a.l[e]) {
                                c += e;
                                break;
                            }
                    }
                    return c;
                }, eC = function (a, b) {
                    var c = '';
                    '' !== b && (b = b.split('/').map(function (d) {
                        return d.replace(/,/g, ':');
                    }), gC(a, b), c = hC(a, b));
                    a.G.push(c);
                }, dC = function (a, b) {
                    var c;
                    b = null !== (c = b.map(function (d) {
                        return bB(a.model, d);
                    })) && void 0 !== c ? c : [];
                    Z(a, 'ucis', b, { Aa: '|' });
                }, YB = function (a) {
                    _.v(tp) || Z(a, 'a3p', be(tc(a.da, window)));
                }, Z = function (a, b, c, d) {
                    d = void 0 === d ? {} : d;
                    a.o.has(b) || null == c || a.H.push({
                        Kd: b,
                        value: c,
                        options: d
                    });
                }, EB = function (a, b) {
                    b = _.G(_.r(b, 'entries').call(b));
                    for (var c = b.next(); !c.done; c = b.next()) {
                        var d = _.G(c.value);
                        c = d.next().value;
                        d = d.next().value;
                        Z(a, c, d.value, d.options);
                    }
                }, zB = function (a) {
                    var b = a.value, c = a.options, d = void 0 === c.ha ? !0 : c.ha;
                    a = void 0 === c.Aa ? ',' : c.Aa;
                    c = void 0 === c.ua ? !1 : c.ua;
                    return 'object' !== typeof b ? null == b || !c && 0 === b ? null : iC(b, d) : Array.isArray(b) && b.length ? b.map(function (e) {
                        return iC(e, d);
                    }).join(iC(a, d)) : null;
                }, cC = new _.ad(-9, -9), ZB = 0, bC = null, iC = function (a, b) {
                    a = a.toString();
                    return b ? encodeURIComponent(a) : a;
                };
            var lC = function (a) {
                    var b = this;
                    this.j = new D.Map();
                    this.l = new D.Map();
                    this.xb = Kb.N();
                    if (window.performance && Te(window.performance.now)) {
                        var c = kc(334, function () {
                            for (var d = _.G(b.j), e = d.next(); !e.done; e = d.next()) {
                                var f = _.G(e.value);
                                e = f.next().value;
                                f = f.next().value;
                                jC(b, e, f) && b.j.delete(e);
                            }
                        });
                        _.xd(window, 'DOMContentLoaded', c);
                        Tq(a, $q, function (d) {
                            var e = d.detail;
                            d = e.xc;
                            e = e.P;
                            return void kC(b, (0, J.T)(iw(_.wh(Ch), d)), (0, J.T)(H(e, 20)));
                        });
                        Tq(a, ar, function (d) {
                            var e = d.detail;
                            d = e.xc;
                            e = e.P;
                            d = (0, J.T)(iw(_.wh(Ch), d));
                            e = (0, J.T)(H(e, 20));
                            var f = b.l.get(d);
                            null != f ? xA(f, e) : kC(b, d, e);
                        });
                    }
                }, kC = function (a, b, c) {
                    jC(a, b, c) ? a.j.delete(b) : (a.j.set(b, c), _.Hg(b, function () {
                        a.j.delete(b);
                    }));
                }, jC = function (a, b, c) {
                    var d = Vc(b);
                    if (d && 'DIV' === d.nodeName) {
                        var e = _.v(Ip);
                        d = new vA({
                            J: window,
                            xb: a.xb,
                            lb: d,
                            Ba: function (f) {
                                Ub(336, f, 1);
                            },
                            Wd: e
                        });
                        if (d.l)
                            return xA(d, c), a.l.set(b, d), ju(gu.N(), b, function () {
                                return void a.l.delete(b);
                            }), !0;
                    }
                    return !1;
                };
            var mC = function (a, b, c) {
                    for (var d = 100; a && a != b && --d;)
                        _.mm(a, c), a = a.parentElement;
                }, nC = function (a, b, c, d, e) {
                    _.mm(a, {
                        'margin-left': '0px',
                        'margin-right': '0px'
                    });
                    var f = {};
                    _.v(Bn) || (f['z-index'] = '0', 'absolute' !== d.position && 'fixed' !== d.position && 'relative' !== d.position && (f.position = 'relative'));
                    var g = 'rtl' == d.direction, h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
                    d = function () {
                        var k = a.getBoundingClientRect().left;
                        return g ? h - k : k - h;
                    };
                    b = d();
                    0 !== b && (c = function (k) {
                        g ? f['margin-right'] = k + 'px' : f['margin-left'] = k + 'px';
                    }, c(-b), _.mm(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.mm(a, f)));
                    return !0;
                }, pC = function (a, b, c, d, e, f, g, h) {
                    var k = qv(c);
                    c = kc(459, function () {
                        return oC(a, b, d, e, f, k, g, h);
                    });
                    _.F.setTimeout(c, 500);
                }, oC = function (a, b, c, d, e, f, g, h) {
                    if (_.F.IntersectionObserver) {
                        var k = null, l = $v(b, a) || Vc(b, a), m = kc(459, function (n) {
                                if (n = n && n[0]) {
                                    var p = n.boundingClientRect, t = window.innerWidth, u = Math.round(p.left), y = Math.round(p.right), z = 0 > u + 2, K = 0 < y - (t + 2);
                                    if (n.intersectionRatio >= 1 - ((0 <= Math.round(p.left) ? 0 : 2) + (Math.round(p.right) <= window.innerWidth ? 0 : 2)) / d || z || K)
                                        mc(g, function (Q) {
                                            if (z || K) {
                                                var S = new du();
                                                S.set(8);
                                                qC(l) && S.set(10);
                                                S = eu(S);
                                            } else
                                                S = rC(a, b);
                                            var X = sC(b, l, e), ua = X.zd;
                                            X = X.Cd;
                                            Zb(Q);
                                            q(Q, 'qid', h);
                                            q(Q, 'iu', b.getAdUnitPath());
                                            q(Q, 'e', String(S));
                                            z && q(Q, 'ofl', String(u));
                                            K && q(Q, 'ofr', String(y - t));
                                            q(Q, 'ret', d + 'x' + e);
                                            q(Q, 'req', f);
                                            q(Q, 'bm', String(c));
                                            q(Q, 'efh', Number(ua));
                                            q(Q, 'stk', Number(X));
                                            q(Q, 'ifi', ln(window));
                                        }, { ta: _.lb(An) }), k && k.unobserve(l);
                                }
                            });
                        l && (k = new _.F.IntersectionObserver(m, { threshold: [1] }), k.observe(l));
                    }
                }, rC = function (a, b) {
                    var c = $v(b, a) || Vc(b, a), d = new du();
                    try {
                        var e = function (S, X) {
                                return a.elementsFromPoint(S, X);
                            }, f = c.getBoundingClientRect(), g = f.left, h = f.top, k = f.width, l = f.height, m = Vc(b, a), n = Xc(m, window);
                        if ('hidden' == n.visibility || 'none' == n.display)
                            return eu(d);
                        var p = parseInt(n['border-top-width'] || 0, 10) + 1;
                        b = g + k;
                        l = h + l;
                        var t = e(g + p + 2, h + p);
                        var u = e(b - p - 2, h + p);
                        var y = e(b - p - 2, l - p);
                        var z = e(g + p + 2, l - p);
                        var K = e(b / 2, l - p);
                    } catch (S) {
                        return d.set(1), eu(d);
                    }
                    if (!(t && t.length && u && u.length && y && y.length && z && z.length && K && K.length))
                        return d.set(7), eu(d);
                    e = function (S, X) {
                        for (var ua = !1, ja = 0; ja < S.length; ja++) {
                            var xa = S[ja];
                            if (ua) {
                                var nb = Xc(xa, window);
                                if ('hidden' != nb.visibility && !om(xa) && !Q(c, xa)) {
                                    d.set(X);
                                    'absolute' == nb.position && d.set(11);
                                    break;
                                }
                            } else
                                c == xa && (ua = !0);
                        }
                    };
                    pm(c) && d.set(9);
                    var Q = function (S, X) {
                        return hm(S, X) || hm(X, S);
                    };
                    g = t[0];
                    c == g || Q(c, g) || om(g) || d.set(2);
                    g = u[0];
                    c == g || Q(c, g) || om(g) || d.set(3);
                    g = y[0];
                    c == g || Q(c, g) || om(g) || d.set(4);
                    g = z[0];
                    c == g || Q(c, g) || om(g) || d.set(5);
                    if (om(c))
                        return eu(d);
                    e(t, 12);
                    e(u, 13);
                    e(y, 14);
                    e(z, 15);
                    e(K, 6);
                    return eu(d);
                }, qC = function (a) {
                    var b = !1, c = !1, d = _.v(Fn);
                    return nm(a, function (e) {
                        d = d || 'nowrap' == e.whiteSpace;
                        c = c || 'scroll' == e.overflowX || 'auto' == e.overflowX;
                        return (b = b || 'flex' == e.display) && c && d;
                    });
                }, sC = function (a, b, c) {
                    var d = (a = Vc(a)) && Xc(a, window), e = d ? 'absolute' != d.position : !0, f = !1, g = a && a.parentElement, h = !1;
                    Gf(b, function (k) {
                        var l = k.style;
                        if (e)
                            if (h || (h = k == g))
                                e = qy(k, _.F, !0, -1, -1);
                            else {
                                l = l && l.height;
                                var m = (l && _.r(l, 'endsWith').call(l, 'px') ? parseInt(l, 10) : 0) >= c;
                                !l || m || 'string' === typeof l && _.r(ny, 'includes').call(ny, l) || (e = !1);
                            }
                        f || (k = Xc(k, _.F), 'sticky' != k.position && 'fixed' != k.position) || (f = !0);
                        return !(f && !e);
                    }, 100);
                    return {
                        zd: e,
                        Cd: f
                    };
                }, tC = function (a, b, c) {
                    (L = Yc(b), _.r(L, 'includes')).call(L, 'fluid') && setTimeout(function () {
                        mc('gpt_fluid_sz', function (d) {
                            var e = $v(a, document);
                            e = e ? fn(e) : null;
                            q(d, 'sz', e ? e.width + 'x' + e.height : 'null');
                            q(d, 'qqid', c);
                        });
                    }, 250);
                };
            var uC = new D.Map([[
                        2,
                        { Id: 'page_level_ads' }
                    ]]), vC = function () {
                }, yC;
            vC.N = function () {
                throw Error('Must be overridden');
            };
            _.wC = function (a) {
                this.j = a = void 0 === a ? uC : a;
                this.l = new D.Map();
                this.loaded = new D.Set();
                this.A = null;
            };
            _.N(_.wC, vC);
            _.xC = function (a, b) {
                b = b.module;
                a.l.has(b) || a.l.set(b, new De());
                return a.l.get(b);
            };
            yC = function (a, b) {
                var c = b.module;
                b = '_gpt_js_load_' + c + '_';
                var d = kc(340, function (e) {
                    if (a.j.has(c) && 'function' === typeof e) {
                        var f = a.j.get(c);
                        f = (void 0 === f.md ? [] : f.md).map(function (g) {
                            return _.xC(a, g).promise;
                        });
                        D.Promise.all(f).then(function () {
                            e.call(window, _);
                        });
                    }
                });
                Object.defineProperty(Jg(), b, {
                    value: function (e) {
                        if (d) {
                            var f = d;
                            d = null;
                            f(e);
                        }
                    },
                    writable: !1,
                    enumerable: !1
                });
            };
            _.wC.prototype.load = function (a) {
                var b, c = _.xC(this, a), d = (null !== (b = this.j.get(a.module)) && void 0 !== b ? b : {}).Id;
                if (!d)
                    throw Error('cannot load invalid module: ' + d);
                if (!this.loaded.has(a.module)) {
                    var e = _.Xb(172);
                    e = e && 'pagead2.googlesyndication.com' === Il((e.src || '').match(_.Hl)[3] || null);
                    var f = this.A;
                    d = aj(eb(e ? f.gd(d) : f.hd(d)).toString());
                    d = (e = _.lb(Xo)) ? cj(d, { cb: e }) : d;
                    yC(this, a);
                    Nl(document, d);
                    this.loaded.add(a.module);
                }
                return c.promise;
            };
            Ai(_.wC);
            var zC = function (a, b, c, d, e, f, g, h) {
                Y.call(this, 682);
                this.R = a;
                this.format = b;
                this.slotId = c;
                this.J = d;
                this.C = Kt(this);
                this.m = V(this, e);
                this.o = U(this, f);
                this.F = U(this, g);
                this.B = V(this, h);
            };
            _.N(zC, Y);
            zC.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f, g, h, k, l, m, n, p;
                    return B(b, function (t) {
                        d = c;
                        if (2 !== c.format && 3 !== c.format || !Gt(c.m) || !Zk(c.m.value, 12, !1))
                            return t.return();
                        e = (0, J.T)(c.B.value);
                        f = e.sd;
                        g = _.lu(c.R, c.slotId);
                        h = c.F.value;
                        k = c.o.value;
                        _.mm(k, {
                            'max-height': '30vh',
                            overflow: 'hidden'
                        });
                        if (AC)
                            AC.yc(k);
                        else {
                            AC = new f(c.format, k, c.J, h, c.R, c.slotId);
                            l = {};
                            m = _.G(I(c.m.value, Ow, 13));
                            for (n = m.next(); !n.done; n = m.next())
                                p = n.value, l[H(p, 1)] = H(p, 2);
                            AC.zc(l);
                            AC.oa();
                            iu(c.R, c.slotId, function () {
                                AC && (AC.wa(), AC = null);
                                g && _.nu(d.R, d.slotId);
                            });
                        }
                        _.Hg(c, function () {
                            return _.Dl(k);
                        });
                        c.C.notify();
                        mi(t);
                    });
                });
            };
            var AC = null;
            var BC = function (a, b, c, d, e, f, g, h) {
                Y.call(this, 683);
                this.slotId = a;
                this.format = b;
                this.O = c;
                this.o = V(this, d);
                this.m = U(this, e);
                this.I = U(this, f);
                this.B = V(this, g);
                this.F = V(this, h);
                this.K = tg(a, ug, function (k) {
                    k = k.detail;
                    try {
                        var l = JSON.parse(k.data);
                        return 'sth' === l.googMsgType && 'i-adframe-load' === l.msg_type;
                    } catch (m) {
                        return !1;
                    }
                });
            };
            _.N(BC, Y);
            BC.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f, g, h, k, l, m, n, p, t;
                    return B(b, function (u) {
                        if (1 == u.j) {
                            d = c;
                            e = c.o.value;
                            if (!e || 5 !== c.format)
                                return u.return();
                            f = c.I.value;
                            g = c.m.value;
                            h = (0, J.T)(c.F.value);
                            k = h.wd;
                            l = new _.kz();
                            m = new k(window, g, f, l, c.O, '6499' === Ib(c.slotId.getAdUnitPath()), function () {
                                return void d.wa();
                            }, c.B.value);
                            _.Pq(c, m);
                            n = I(e, Ow, 13);
                            p = sg(n);
                            m.rb(p);
                            t = _.lb(oo);
                            switch (t) {
                            case 0:
                                m.Ia();
                                break;
                            case 1:
                                u.j = 2;
                                return;
                            }
                        } else {
                            if (4 != u.j)
                                return C(u, c.K, 4);
                            if (c.A)
                                return u.return();
                            m.Ia();
                        }
                        u.j = 0;
                    });
                });
            };
            var CC = function () {
                this.module = 2;
            };
            CC.prototype.toString = function () {
                return String(this.module);
            };
            _.DC = new CC();
            var EC = function (a, b, c) {
                Y.call(this, 846);
                this.format = a;
                this.C = this.l();
                this.m = V(this, b);
                this.o = V(this, c);
            };
            _.N(EC, Y);
            EC.prototype.j = function () {
                var a;
                return A(this, function c() {
                    var d = this, e, f, g, h;
                    return B(c, function (k) {
                        if (1 == k.j) {
                            e = (2 === d.format || 3 === d.format) && !(null === (a = d.m.value) || void 0 === a || !Zk(a, 12, !1));
                            f = 5 === d.format && d.o.value;
                            if (!e && !f) {
                                Dt(d.C);
                                k.j = 0;
                                return;
                            }
                            g = d.C;
                            h = g.j;
                            return C(k, _.wC.N().load(_.DC), 3);
                        }
                        h.call(g, k.l);
                        mi(k);
                    });
                });
            };
            var FC = function (a, b, c) {
                Y.call(this, 696);
                this.slotId = a;
                this.ia = b;
                Mt(this, c);
                this.m = new D.Promise(function (d) {
                    var e = [
                        'canceled',
                        'ha_before_make_visible'
                    ];
                    _.v(hh) || e.push('closed');
                    e = _.G(e);
                    for (var f = e.next(); !f.done; f = e.next())
                        vg(a, f.value).then(d);
                });
            };
            _.N(FC, Y);
            FC.prototype.j = function () {
                return A(this, function b() {
                    var c = this;
                    return B(b, function (d) {
                        switch (d.j) {
                        case 1:
                            return C(d, c.m, 2);
                        case 2:
                            if (c.A)
                                return d.return();
                            if (_.v(hh)) {
                                d.j = 3;
                                break;
                            }
                            return C(d, c.ia.dispatchEvent('rewardedSlotCanceled', 703, new sw(c.slotId, 'publisher_ads')), 3);
                        case 3:
                            return C(d, c.ia.dispatchEvent('rewardedSlotClosed', 703, new tw(c.slotId, 'publisher_ads')), 5);
                        case 5:
                            c.wa(), mi(d);
                        }
                    });
                });
            };
            var GC = function (a, b, c) {
                Y.call(this, 697);
                this.slotId = a;
                this.ia = b;
                this.m = vg(a, 'completed');
                Mt(this, c);
            };
            _.N(GC, Y);
            GC.prototype.j = function () {
                return A(this, function b() {
                    var c = this;
                    return B(b, function (d) {
                        if (1 == d.j)
                            return C(d, c.m, 2);
                        if (3 != d.j)
                            return c.A ? d.return() : C(d, c.ia.dispatchEvent('rewardedSlotCompleted', 704, new uw(c.slotId, 'publisher_ads')), 3);
                        c.wa();
                        mi(d);
                    });
                });
            };
            var HC = function (a, b, c) {
                Y.call(this, 694);
                this.slotId = a;
                this.ia = b;
                Mt(this, c);
                this.m = vg(a, 'granted');
            };
            _.N(HC, Y);
            HC.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e;
                    return B(b, function (f) {
                        if (1 == f.j)
                            return C(f, c.m, 2);
                        if (3 != f.j)
                            return d = f.l, e = d.payload, c.A ? f.return() : C(f, c.ia.dispatchEvent('rewardedSlotGranted', 702, new rw(c.slotId, 'publisher_ads', null !== e && void 0 !== e ? e : null)), 3);
                        c.wa();
                        mi(f);
                    });
                });
            };
            var IC = {
                    width: '100%',
                    height: '100%',
                    left: '0',
                    top: '0'
                }, JC = function (a, b, c, d, e) {
                    Y.call(this, 693);
                    this.J = a;
                    this.F = e;
                    this.C = Kt(this);
                    this.m = U(this, b);
                    this.o = U(this, c);
                    Mt(this, d);
                    this.B = new _.sz(this.J);
                };
            _.N(JC, Y);
            JC.prototype.j = function () {
                var a = this;
                if (!this.F.G) {
                    var b = 0 === qd() ? 'rgba(1,1,1,0.5)' : 'white';
                    _.mm(this.o.value, _.r(Object, 'assign').call(Object, {
                        'background-color': b,
                        opacity: '1',
                        position: 'fixed',
                        margin: '0',
                        padding: '0',
                        'z-index': '2147483647',
                        display: 'block'
                    }, IC));
                    _.Hg(this, _.yz(this.J.document, this.J));
                    Fl(this.m.value).postMessage(JSON.stringify({
                        type: 'rewarded',
                        message: 'visible'
                    }), '*');
                    if (this.J === this.J.top) {
                        this.J.location.hash = 'goog_rewarded';
                        var c = new wz(this.B);
                        null == c.j && (c.j = uz(c.l));
                        _.Hg(this, function () {
                            if (null != c.j) {
                                var d = c.l;
                                delete d.j.maxZIndexRestrictions[c.j];
                                tz(d);
                                c.j = null;
                            }
                            'goog_rewarded' === a.J.location.hash && (a.J.location.hash = '');
                        });
                    }
                    this.C.notify();
                }
            };
            var KC = function (a, b, c) {
                Y.call(this, 695);
                this.J = a;
                this.m = U(this, b);
                Mt(this, c);
            };
            _.N(KC, Y);
            KC.prototype.j = function () {
                if (this.J === this.J.top)
                    var a = Fl(this.m.value), b = vv(this, 503, this.J, 'hashchange', function (c) {
                            fj(c.oldURL, '#goog_rewarded') && (a.postMessage(JSON.stringify({
                                type: 'rewarded',
                                message: 'back_button'
                            }), '*'), b());
                        });
            };
            var LC = function (a, b, c) {
                Y.call(this, 692);
                this.slotId = a;
                this.ia = b;
                this.C = Kt(this);
                this.m = U(this, c);
            };
            _.N(LC, Y);
            LC.prototype.j = function () {
                var a;
                return A(this, function c() {
                    var d = this, e, f, g, h;
                    return B(c, function (k) {
                        if (1 == k.j)
                            return e = d.m.value, f = new De(), g = f.promise, h = f.resolve, d.ia.dispatchEvent('rewardedSlotReady', 701, new qw(d.slotId, 'publisher_ads', h, null !== (a = e.payload) && void 0 !== a ? a : null)), C(k, g, 2);
                        if (d.A)
                            return k.return();
                        d.C.notify();
                        d.wa();
                        mi(k);
                    });
                });
            };
            var MC = {
                    width: '100%',
                    height: '100%',
                    left: '0',
                    top: '0'
                }, NC = {
                    width: '60%',
                    height: '60%',
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    top: '50%'
                }, OC = function (a, b) {
                    Y.call(this, 691);
                    var c = this;
                    this.o = this.l();
                    this.m = Kt(this);
                    this.B = U(this, b);
                    this.F = vg(a, 'prefetched');
                    vg(a, 'ha_before_make_visible').then(function () {
                        return void c.m.notify();
                    });
                };
            _.N(OC, Y);
            OC.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d;
                    return B(b, function (e) {
                        if (1 == e.j) {
                            if (c.m.G)
                                return e.return();
                            _.mm(c.B.value, _.r(Object, 'assign').call(Object, { position: 'absolute' }, 0 === qd() ? NC : MC));
                            return C(e, c.F, 2);
                        }
                        d = e.l;
                        if (c.A)
                            return e.return();
                        c.o.j(d);
                        mi(e);
                    });
                });
            };
            var PC = function (a, b, c, d, e, f) {
                Y.call(this, 688);
                if (4 === b) {
                    this.m = new ne();
                    _.Pq(this, this.m);
                    var g = new OC(a, e);
                    W(this.m, g);
                    b = new LC(a, c, g.o);
                    W(this.m, b);
                    f = new JC(d, e, f, b.C, g.m);
                    W(this.m, f);
                    W(this.m, new KC(d, e, f.C));
                    W(this.m, new HC(a, c, b.C));
                    W(this.m, new FC(a, c, b.C));
                    W(this.m, new GC(a, c, b.C));
                }
            };
            _.N(PC, Y);
            PC.prototype.j = function () {
                var a;
                null === (a = this.m) || void 0 === a ? void 0 : pe(a);
            };
            var wg = '3rd party ad content';
            var QC = function () {
                    this.j = {};
                }, SC = function (a, b, c) {
                    if (!_.v(ap)) {
                        var d;
                        c && (d = '//' + c + '.safeframe.googlesyndication.com');
                        c = Wz(b, iv(), jv(), !0, d);
                        a.j[c] || (a.j[c] = 1, Ry() && !_.v(bp) ? RC(a, c) : Jg().fifWin || (b = b.document, a = b.createElement('IFRAME'), a.src = c, a.style.visibility = 'hidden', a.style.display = 'none', b = b.getElementsByTagName('script'), 0 < b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling))));
                    }
                }, RC = function (a, b) {
                    var c = Sy(document, b, 'prefetch', '');
                    c && _.xd(c, 'load', function () {
                        a.j[b] = 3;
                        c && _.Dl(c);
                    });
                };
            var TC = function (a, b, c) {
                Y.call(this, 706);
                this.J = a;
                this.C = this.l();
                this.m = V(this, b);
                Mt(this, c);
            };
            _.N(TC, Y);
            TC.prototype.j = function () {
                var a = this.m.value;
                this.C.l(a ? tc(a, this.J) : null);
            };
            var UC = function (a, b, c, d, e) {
                Y.call(this, 876);
                this.I = a;
                this.o = b;
                this.m = this.l();
                this.B = V(this, c);
                this.F = V(this, d);
                this.K = V(this, e);
            };
            _.N(UC, Y);
            UC.prototype.j = function () {
                var a, b;
                return A(this, function d() {
                    var e, f = this, g, h;
                    return B(d, function (k) {
                        e = new kt();
                        g = null === (a = f.I) || void 0 === a ? void 0 : x(a, 9);
                        h = f.K.value;
                        if (null != h) {
                            var l;
                            if (l = !g) {
                                var m = void 0 === m ? !1 : m;
                                if (Ts(h))
                                    if (!1 === h.gdprApplies || 'tcunavailable' === h.tcString || void 0 === h.gdprApplies && !m || 'string' !== typeof h.tcString || !h.tcString.length)
                                        var n = !0;
                                    else {
                                        n = void 0 === n ? '755' : n;
                                        b: {
                                            if (h.publisher && h.publisher.restrictions && (l = h.publisher.restrictions['1'], void 0 !== l)) {
                                                l = l[void 0 === n ? '755' : n];
                                                break b;
                                            }
                                            l = void 0;
                                        }
                                        0 === l ? n = !1 : h.purpose && h.vendor ? (l = h.vendor.consents, (n = !(!l || !l[void 0 === n ? '755' : n])) && h.purposeOneTreatment && ('DE' === h.publisherCC || _.v(kp) && 'CH' === h.publisherCC) ? n = !0 : n && (n = h.purpose.consents, n = !(!n || !n['1']))) : n = !0;
                                    }
                                else
                                    n = !1;
                                l = n;
                            }
                            n = E(e, 5, l);
                            n = E(n, 2, h.tcString);
                            l = null !== (b = h.addtlConsent) && void 0 !== b ? b : '';
                            n = E(n, 4, l);
                            E(n, 7, h.internalErrorState);
                            null != h.gdprApplies && E(e, 3, h.gdprApplies);
                            'tcunavailable' === h.tcString ? f.o.info(qs('failed')) : f.o.info(qs('succeeded'));
                        } else
                            E(e, 5, !g);
                        f.F.value && E(e, 1, f.F.value);
                        null != f.B.value && E(e, 6, f.B.value);
                        f.m.j(e);
                        mi(k);
                    });
                });
            };
            var VC = function (a, b, c, d, e, f) {
                f = void 0 === f ? yg : f;
                Y.call(this, 879);
                this.Ea = a;
                this.o = b;
                this.J = d;
                this.F = e;
                this.I = f;
                this.m = this.l();
                this.B = null;
                _.Xb(260) && (this.B = U(this, c));
            };
            _.N(VC, Y);
            VC.prototype.j = function () {
                var a, b;
                return A(this, function d() {
                    var e = this, f;
                    return B(d, function (g) {
                        if (1 == g.j) {
                            var h = e.F;
                            h = void 0 === h ? _.F.top : h;
                            h = em(h, 'googlefcPresent');
                            var k = e.J;
                            k = void 0 === k ? _.F : k;
                            k.googlefc && !h && e.I(e.Ea);
                            if (null !== (b = null === (a = e.B) || void 0 === a ? void 0 : a.value) && void 0 !== b ? !b : !Zt(e.o)) {
                                Dt(e.m);
                                g.j = 0;
                                return;
                            }
                            return C(g, bu(e.o, 'loaded'), 3);
                        }
                        f = g.l;
                        e.m.j(f);
                        mi(g);
                    });
                });
            };
            var WC = function (a, b, c, d) {
                Y.call(this, 877);
                this.Ea = a;
                this.o = b;
                this.F = c;
                this.m = this.l();
                this.B = V(this, d);
            };
            _.N(WC, Y);
            WC.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e;
                    return B(b, function (f) {
                        if (1 == f.j)
                            return d = c.B.value, C(f, cu(c.o, d, c.Ea, c.F), 2);
                        e = f.l;
                        c.m.l(e);
                        mi(f);
                    });
                });
            };
            var XC = function (a, b) {
                Y.call(this, 874);
                this.J = a;
                this.m = this.l();
                Mt(this, b);
            };
            _.N(XC, Y);
            XC.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f;
                    return B(b, function (g) {
                        d = c;
                        e = new Ps(c.J, -1);
                        _.Pq(c, e);
                        if (!Rs(e))
                            return Dt(c.m), g.return();
                        Cc().info(ps());
                        f = kc(661, function (h) {
                            d.m.l(h);
                        });
                        Us(e, f);
                        mi(g);
                    });
                });
            };
            var YC = function (a, b, c) {
                Y.call(this, 875);
                this.o = a;
                this.J = b;
                this.m = this.l();
                Mt(this, c);
            };
            _.N(YC, Y);
            YC.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f;
                    return B(b, function (g) {
                        d = c;
                        e = new zz(c.J);
                        _.Pq(c, e);
                        if (!Bz(e))
                            return Dt(c.m), g.return();
                        f = kc(660, function (h) {
                            h && 'string' === typeof h.uspString ? d.m.j(h.uspString) : Dt(d.m);
                        });
                        c.o.info(os());
                        Dz(e, f);
                        mi(g);
                    });
                });
            };
            var ZC = function (a, b, c) {
                c = void 0 === c ? Dg : c;
                Y.call(this, 883);
                this.B = a;
                this.F = c;
                this.m = Kt(this);
                this.o = U(this, b);
            };
            _.N(ZC, Y);
            ZC.prototype.j = function () {
                return A(this, function b() {
                    var c = this;
                    return B(b, function (d) {
                        if (1 == d.j) {
                            if (!x(c.o.value, 5) || _.v(Of))
                                return c.m.notify(), d.return();
                            _.v(mo) || dz(c.B);
                            if (!c.F()) {
                                gz(null);
                                d.j = 2;
                                return;
                            }
                            return C(d, new D.Promise(function (e) {
                                return void gz(e);
                            }), 2);
                        }
                        c.m.notify();
                        mi(d);
                    });
                });
            };
            var $C = function (a, b, c) {
                Y.call(this, 884);
                this.B = a;
                this.m = Kt(this);
                this.F = V(this, b);
                this.o = U(this, c);
            };
            _.N($C, Y);
            $C.prototype.j = function () {
                _.wh(cw).l = this.F.value;
                dw(_.wh(cw), mt(this.B, this.o.value));
                wq(2);
                this.m.notify();
            };
            var aD = function (a, b, c) {
                Y.call(this, 890);
                this.m = a;
                this.console = b;
                this.o = V(this, c);
            };
            _.N(aD, Y);
            aD.prototype.j = function () {
                var a = this;
                ve(this.m, this.o.value, function (b, c) {
                    var d, e;
                    Ub(b, c);
                    null === (e = null === (d = a.console) || void 0 === d ? void 0 : d.error) || void 0 === e ? void 0 : e.call(d, c);
                });
            };
            var bD = function (a, b, c) {
                Y.call(this, 910);
                this.m = a;
                this.console = b;
                this.o = V(this, c);
            };
            _.N(bD, Y);
            bD.prototype.j = function () {
                var a = this;
                we(this.m, ng(qp).map(function (b) {
                    return { xa: b };
                }), this.o.value, function (b, c) {
                    var d, e;
                    Ub(b, c);
                    null === (e = null === (d = a.console) || void 0 === d ? void 0 : d.error) || void 0 === e ? void 0 : e.call(d, c);
                });
            };
            var cD = function (a) {
                Y.call(this, 896);
                this.o = a;
                this.m = this.l();
            };
            _.N(cD, Y);
            cD.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d;
                    return B(b, function (e) {
                        if (1 == e.j)
                            return C(e, bw(c.o), 2);
                        d = e.l;
                        c.m.j(d);
                        mi(e);
                    });
                });
            };
            var dD = null, eD = !1, fD = !1, gD = !1, hD = function (a) {
                    a = void 0 === a ? _.F : a;
                    if (!fD) {
                        var b = new Yb('gpt_pubconsole_loaded');
                        Zb(b);
                        q(b, 'param', String(Gg(a)));
                        q(b, 'api', String(gD));
                        ac(b, 1);
                        Nl(a.document, aj((/^https?:/i.test('//console.googletagservices.com/pubconsole/') ? '' : 'https:') + '//console.googletagservices.com/pubconsole/loader.js'));
                        fD = !0;
                    }
                }, iD = kc(94, function (a) {
                    a = void 0 === a ? _.F : a;
                    Jg()._pubconsole_disable_ || null !== Gg(a) && hD(a);
                });
            'complete' === _.F.document.readyState ? iD() : zq(_.F, function () {
                iD();
            });
            ch('disablePublisherConsole', w(93, function () {
                Jg()._pubconsole_disable_ = !0;
            }));
            ch('onPubConsoleJsLoad', w(731, function () {
                eD && (Jg().console.openConsole(dD), dD = null, eD = !1);
            }));
            ch('openConsole', w(732, function (a) {
                a = void 0 === a ? '' : a;
                gD = !0;
                Jg && Jg().console ? Jg().console.openConsole(a) : (a && (dD = a), eD = !0, hD());
            }));
            var jD = function (a, b) {
                Y.call(this, 873);
                this.J = a;
                this.m = U(this, b);
            };
            _.N(jD, Y);
            jD.prototype.j = function () {
                var a = this.m.value, b = this.J;
                !Jg()._pubconsole_disable_ && (a = xc('google_pubconsole', a, b)) && (a = a.split('|'), 0 < a.length && ('1' == a[0] || '0' == a[0]) && hD());
            };
            var kD = function (a, b, c, d) {
                Y.call(this, 885);
                this.L = a;
                this.J = b;
                this.o = c;
                this.B = d;
                this.m = this.l();
            };
            _.N(kD, Y);
            kD.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f, g;
                    return B(b, function (h) {
                        if (1 == h.j) {
                            if (!c.o)
                                return Dt(c.m), h.return();
                            d = c.o;
                            e = d.Ea;
                            f = d.X;
                            return C(h, lD(c, e, f), 2);
                        }
                        g = h.l;
                        c.m.j(g);
                        mi(h);
                    });
                });
            };
            var lD = function (a, b, c) {
                return A(a, function e() {
                    var f, g, h = this, k, l, m, n, p, t, u, y, z, K, Q, S, X, ua, ja, xa, nb, gb, vb;
                    return B(e, function (ob) {
                        switch (ob.j) {
                        case 1:
                            f = {
                                X: c,
                                da: null,
                                storage: null
                            };
                            g = new ne();
                            _.Pq(h, g);
                            k = new Yt(h.J);
                            _.Pq(h, k);
                            l = new cD(k);
                            W(g, l);
                            m = new VC(b, k, l.m, h.J, h.J.top);
                            W(g, m);
                            n = new WC(b, k, _.Xb(221), m.m);
                            W(g, n);
                            p = new YC(Cc(), h.J, m.m);
                            W(g, p);
                            t = new XC(h.J, m.m);
                            W(g, t);
                            u = new UC(Yu(h.L.U), Cc(), n.m, p.m, t.m);
                            W(g, u);
                            y = new jD(h.J, u.m);
                            W(g, y);
                            z = new ZC(_.Xb(150), u.m);
                            W(g, z);
                            if (_.v(io))
                                return K = new TC(h.J, u.m, z.m), W(g, K), Q = new $C(h.B, K.C, u.m), W(g, Q), _.v(sp) || (S = new aD(Jg(), h.J.console, K.C), W(g, S), X = new bD(Jg(), h.J.console, K.C), W(g, X)), pe(g), C(ob, Q.m.promise, 5);
                            pe(g);
                            return C(ob, z.m.promise, 3);
                        case 5:
                            return ua = f, ja = J, xa = ja.T, C(ob, K.C.promise, 6);
                        case 6:
                            ua.storage = xa.call(ja, ob.l);
                        case 3:
                            return nb = f, gb = J, vb = gb.T, C(ob, u.m.promise, 7);
                        case 7:
                            return nb.da = vb.call(gb, ob.l), ob.return(f);
                        }
                    });
                });
            };
            var mD = new D.Map(), nD = function (a, b) {
                    b = void 0 === b ? mD : b;
                    Y.call(this, 834);
                    this.X = a;
                    this.m = b;
                    this.o = this.l();
                    this.B = D.Promise.all(this.X.map(this.F, this));
                };
            _.N(nD, Y);
            nD.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d;
                    return B(b, function (e) {
                        if (1 == e.j)
                            return C(e, c.B, 2);
                        d = e.l;
                        c.o.j(d.filter(function (f) {
                            return null != f && !f.A;
                        }));
                        mi(e);
                    });
                });
            };
            nD.prototype.F = function (a) {
                return A(this, function c() {
                    var d = this, e, f, g, h;
                    return B(c, function (k) {
                        if (1 == k.j) {
                            e = d;
                            f = 1000 * _.lb(Wo);
                            if (a.A)
                                return k.return(null);
                            if (0 >= f)
                                return k.return(a);
                            d.m.has(a) || (d.m.set(a, Ig(f, a)), _.Hg(a, function () {
                                return void e.m.delete(a);
                            }));
                            g = (0, J.T)(d.m.get(a));
                            return C(k, g(), 2);
                        }
                        h = k.l;
                        if (d.A)
                            return k.return(null);
                        if (h)
                            return k.return(a);
                        Cc().M(rs(a.getAdUnitPath()));
                        return k.return(null);
                    });
                });
            };
            var oD = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            var pD = function (a, b) {
                (/^https:/.test(b) || _.Xb(257)) && Jj(a, new rj(b, qj), 'webbundle');
            };
            var qD = function (a, b, c, d, e, f, g, h, k, l) {
                Y.call(this, 866);
                this.O = a;
                this.L = b;
                this.I = c;
                this.o = d;
                this.B = h;
                this.F = k;
                this.withCredentials = l;
                this.m = Kt(this);
                this.Y = U(this, e);
                this.K = V(this, f);
                this.W = U(this, g);
            };
            _.N(qD, Y);
            qD.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f, g, h, k, l, m, n, p, t, u;
                    return B(b, function (y) {
                        if (1 == y.j) {
                            if ('wbn' !== c.O)
                                return y.return();
                            d = c.W.value;
                            if (!d.length)
                                return c.m.notify(), y.return();
                            e = _.Cl(document, 'LINK');
                            pD(e, c.Y.value);
                            (0, J.T)(e.resources).add($i(c.o));
                            e.crossOrigin = c.withCredentials ? 'use-credentials' : 'anonymous';
                            f = document.createElement('script');
                            wd(f, c.o);
                            g = (0, J.T)(document.head);
                            g.appendChild(e);
                            g.appendChild(f);
                            h = Kg(c.I);
                            c.m.notify();
                            (0, J.T)(c.K.value)();
                            return C(y, h, 2);
                        }
                        k = y.l;
                        l = k.Wb;
                        m = k.lc;
                        dq(Kb.N(), '4', (0, J.T)(H(c.L.P[d[0].j], 20)));
                        if (l.length !== m.length)
                            throw Error('Received ' + l.length + ' ad URLs, but ' + m.length + ' metadatas');
                        for (n = 0; n < l.length; n++)
                            p = l[n], t = m[n], p && (0, J.T)(e.resources).add(p), c.B(d[n], t, {
                                kind: 1,
                                url: p
                            }, n === d.length - 1);
                        for (u = l.length; u < d.length; ++u)
                            c.F(d[u], u === d.length - 1);
                        mi(y);
                    });
                });
            };
            var rD = function (a, b, c, d, e, f, g) {
                Y.call(this, 810);
                this.o = a;
                this.B = b;
                this.I = c;
                this.L = d;
                this.F = e;
                this.da = f;
                this.J = g;
                this.m = this.l();
            };
            _.N(rD, Y);
            rD.prototype.j = function () {
                var a = this, b = this.B;
                !this.I && 1 < this.B.length && (b = [b[0]]);
                b = b.filter(function (c) {
                    var d = a.L.P[c.j];
                    if (fd(a.J) && 4 == kd(d)) {
                        Cc().M(ks('googletag.enums.OutOfPageFormat.REWARDED', String(c.getAdUnitPath())));
                        var e = !0;
                    } else
                        e = !1;
                    return !e && !md(c, d, a.J, a.da);
                });
                30 < b.length && (this.F.M(gs('30', String(b.length), String(b.length - 30))), b = b.slice(0, 30));
                sa(this.o.X, b) || (this.o.X = b.slice());
                this.m.j(b);
            };
            var sD = function (a) {
                Y.call(this, 826);
                this.R = a;
                this.C = this.l();
            };
            _.N(sD, Y);
            sD.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e;
                    return B(b, function (f) {
                        if (1 == f.j)
                            return d = c.C, e = d.l, C(f, c.R.l, 2);
                        e.call(d, f.l);
                        mi(f);
                    });
                });
            };
            sD.prototype.G = function () {
                Dt(this.C);
            };
            var tD = function (a, b, c, d, e, f, g, h, k, l, m, n, p) {
                Y.call(this, 785, _.lb(gp));
                this.B = a;
                this.Y = b;
                this.R = c;
                this.W = d;
                this.da = e;
                this.L = f;
                this.$ = g;
                this.aa = h;
                this.O = k;
                this.F = l;
                this.m = this.l();
                this.o = Lt(this, l);
                this.I = V(this, m);
                this.K = Lt(this, k);
                this.ca = Lt(this, n);
                zt(this.D, p, !0);
            };
            _.N(tD, Y);
            tD.prototype.j = function () {
                var a;
                return A(this, function c() {
                    var d = this, e, f, g;
                    return B(c, function (h) {
                        if (1 == h.j) {
                            e = d;
                            if (null === (a = d.I.value) || void 0 === a || !a.length)
                                return d.m.j(''), h.return();
                            f = !_.v(Of);
                            aB(d.B, Bb(), d.$, d.aa, f ? az() : '', f ? bz() : '', f ? cz() : '', null === d.K.value ? '0' : d.K.value, d.ca.value);
                            d.o.value && (d.R.mb = d.o.value);
                            g = new xB(d.I.value.slice(), d.Y, d.R, d.W, d.B, d.da, d.L, !1);
                            d.m.j(Lb(AB(g)));
                            return C(h, d.O.promise, 2);
                        }
                        if (4 != h.j) {
                            if (d.A)
                                return h.return();
                            mc('gpt_paw', function (k) {
                                var l;
                                Zb(k);
                                q(k, 'sig', null !== (l = e.O.o) && void 0 !== l ? l : -1);
                                q(k, 'req', e.ba);
                            }, { ta: _.lb(bo) });
                            d.o.value ? h = C(h, d.F.promise, 4) : (h.j = 0, h = void 0);
                            return h;
                        }
                        mc('gpt_etu', function (k) {
                            var l;
                            Zb(k);
                            q(k, 'sig', null !== (l = e.F.o) && void 0 !== l ? l : -1);
                            q(k, 'req', e.ba);
                        });
                        mi(h);
                    });
                });
            };
            var uD = function (a, b, c, d, e, f) {
                Y.call(this, 798);
                this.R = a;
                this.L = b;
                this.o = c;
                this.B = d;
                this.m = this.l();
                this.I = U(this, e);
                this.F = U(this, f);
            };
            _.N(uD, Y);
            uD.prototype.j = function () {
                for (var a = this, b = new D.Map(), c = _.G(this.F.value), d = c.next(); !d.done; d = c.next()) {
                    d = d.value;
                    var e = Nv(this.L.U) ? vD(this, d) : function () {
                        return a.I.value;
                    };
                    b.set(d, e);
                }
                this.m.j(b);
            };
            var vD = function (a, b) {
                var c = Bb();
                return Wc(function () {
                    var d = new $A();
                    d.j = 'ldjh';
                    d.o = 'fifs';
                    d.Ca = 1;
                    d.X = [b];
                    d.m = c;
                    d.A = a.B;
                    var e = new kt();
                    d = new xB([b], _.v(Rn), a.R, a.o, d, e, a.L, !0);
                    return Lb(AB(d));
                });
            };
            var wD = function (a) {
                Y.call(this, 802);
                this.J = a;
                this.m = this.l();
            };
            _.N(wD, Y);
            wD.prototype.j = function () {
                var a = this;
                if (_.v($n)) {
                    var b = function (d) {
                        Ub(a.id, d);
                        a.m.j('0');
                    };
                    try {
                        var c = Fe(this.J);
                        c ? c.then(function (d) {
                            d.length > _.lb(ao) ? b(Error('ML:' + d.length)) : a.m.j(d);
                        }).catch(b) : this.m.j('');
                    } catch (d) {
                        b(d);
                    }
                } else
                    this.m.j('');
            };
            var xD = function (a, b, c, d) {
                Y.call(this, 847);
                this.R = a;
                this.B = b;
                this.o = c;
                this.m = this.l();
                this.F = U(this, d);
            };
            _.N(xD, Y);
            xD.prototype.j = function () {
                var a = this.F.value;
                if (a.length) {
                    for (var b = _.G(a), c = b.next(); !c.done; c = b.next())
                        qu(this.R, c.value);
                    this.o ? Dt(this.m) : this.B ? (b = Ib(a[0].getAdUnitPath()), a = yD(a, b), this.m.j(a)) : (a = a.map(function (d) {
                        return {
                            Ea: Ib(d.getAdUnitPath()),
                            X: [d]
                        };
                    }), this.m.j(a));
                } else
                    Dt(this.m);
            };
            var yD = function (a, b) {
                var c = [];
                a = ta(a, function (f) {
                    return Ib(f.getAdUnitPath());
                });
                a = _.G(_.r(Object, 'entries').call(Object, a));
                for (var d = a.next(); !d.done; d = a.next()) {
                    var e = _.G(d.value);
                    d = e.next().value;
                    e = e.next().value;
                    d === b ? c.unshift({
                        Ea: d,
                        X: e
                    }) : c.push({
                        Ea: d,
                        X: e
                    });
                }
                return c;
            };
            var zD = function (a, b) {
                Y.call(this, 845);
                this.P = a;
                this.m = this.l();
                this.o = this.l();
                this.B = U(this, b);
            };
            _.N(zD, Y);
            zD.prototype.j = function () {
                var a = this, b = function (d) {
                        d = a.P[d.j];
                        return 0 != Yc(d).length || xf(d, 16);
                    }, c = this.B.value;
                this.m.j(c.filter(b));
                this.o.j(c.filter(Ki(b)));
            };
            var AD = function (a, b, c, d) {
                Y.call(this, 864);
                this.R = a;
                this.L = b;
                this.Z = c;
                this.m = Kt(this);
                this.o = U(this, d);
            };
            _.N(AD, Y);
            AD.prototype.j = function () {
                for (var a = _.G(this.o.value), b = a.next(); !b.done; b = a.next())
                    if (b = b.value, _.lu(this.R, b)) {
                        var c = this.L, d = c.U;
                        c = c.P[b.j];
                        var e = void 0, f = void 0;
                        (_.v(zo) ? 0 : null !== (e = null !== (f = x(c, 11)) && void 0 !== f ? f : x(d, 10)) && void 0 !== e && e) && hg(b, this.Z, c, d);
                        qu(this.R, b);
                        f = e = void 0;
                        (_.v(yo) ? 0 : null !== (e = null !== (f = x(c, 10)) && void 0 !== f ? f : x(d, 11)) && void 0 !== e && e) && hg(b, this.Z, c, d);
                    }
                this.m.notify();
            };
            var BD = function (a, b, c, d, e) {
                Y.call(this, 867);
                this.L = a;
                this.o = b;
                Mt(this, c);
                this.B = U(this, d);
                this.m = U(this, e);
            };
            _.N(BD, Y);
            BD.prototype.j = function () {
                var a;
                return A(this, function c() {
                    var d = this, e, f, g, h, k;
                    return B(c, function (l) {
                        switch (l.j) {
                        case 1:
                            e = _.G(d.m.value), f = e.next();
                        case 2:
                            if (f.done) {
                                l.j = 0;
                                break;
                            }
                            g = f.value;
                            h = (0, J.T)(H(d.L.P[g.j], 20));
                            k = null !== (a = d.B.value.get(g)) && void 0 !== a ? a : function () {
                                return '';
                            };
                            return C(l, g.dispatchEvent(Yq, d.id, {
                                Dc: k,
                                Rc: h
                            }), 5);
                        case 5:
                            return C(l, d.o.dispatchEvent('slotRequested', 705, new vw(g, 'publisher_ads')), 3);
                        case 3:
                            f = e.next(), l.j = 2;
                        }
                    });
                });
            };
            var CD = function (a, b, c) {
                Y.call(this, 905);
                this.L = a;
                Mt(this, b);
                this.m = U(this, c);
            };
            _.N(CD, Y);
            CD.prototype.j = function () {
                var a;
                return A(this, function c() {
                    var d = this, e, f, g, h;
                    return B(c, function (k) {
                        switch (k.j) {
                        case 1:
                            if (!_.v(po))
                                return k.return();
                            e = _.G(d.m.value);
                            f = e.next();
                        case 2:
                            if (f.done) {
                                k.j = 0;
                                break;
                            }
                            g = f.value;
                            h = null === (a = d.L.P[g.j]) || void 0 === a ? void 0 : kd(a);
                            switch (h) {
                            case 2:
                            case 3:
                            case 5:
                                k.j = 5;
                                return;
                            }
                            k.j = 3;
                            break;
                        case 5:
                            return C(k, _.wC.N().load(_.DC), 7);
                        case 7:
                            return k.return();
                        case 3:
                            f = e.next(), k.j = 2;
                        }
                    });
                });
            };
            var DD = function (a, b, c, d, e, f, g) {
                Y.call(this, 833);
                this.B = c;
                this.o = d;
                this.da = e;
                this.m = f;
                this.window = g;
                Mt(this, a);
            };
            _.N(DD, Y);
            DD.prototype.j = function () {
                var a, b = !_.v(cp) && !(null === (a = this.B) || void 0 === a ? 0 : x(a, 4));
                SC(this.m, this.window, Rv(this.o, this.da));
                b && SC(this.m, this.window);
            };
            var ED = function (a, b, c, d) {
                _.Oq.call(this);
                this.X = a;
                this.L = b;
                this.G = c;
                this.D = d;
                this.m = '';
                this.j = -1;
                this.state = 1;
                this.l = '';
            };
            _.N(ED, _.Oq);
            var FD = function (a, b) {
                    a.state = 4;
                    Vb(289, b, !0);
                }, GD = function (a) {
                    return '(' + [
                        a.state,
                        a.l.length,
                        a.X.length
                    ].join('|') + ')';
                };
            var HD = function (a, b, c, d, e, f, g, h, k) {
                h = void 0 === h ? !0 : h;
                Y.call(this, 788, _.lb(Qp));
                this.W = a;
                this.L = b;
                this.I = f;
                this.K = g;
                this.withCredentials = h;
                this.o = Kt(this);
                this.F = 0;
                this.B = !1;
                this.m = null !== k && void 0 !== k ? k : new XMLHttpRequest();
                this.$ = U(this, c);
                this.O = V(this, d);
                this.Y = U(this, e);
            };
            _.N(HD, Y);
            HD.prototype.j = function () {
                var a = this, b = this.Y.value, c = new ED(b, this.L, this.I, this.K);
                _.Pq(this, c);
                'ldjh' === this.W && (b.length ? (this.m.open('GET', this.$.value), this.m.withCredentials = this.withCredentials, LA(this.m), this.m.onreadystatechange = function () {
                    ID(a, c, !1);
                }, this.m.onload = function () {
                    ID(a, c, !0);
                }, this.m.onerror = function () {
                    a.A || FD(c, Error('XHR error'));
                }, this.m.send(), this.o.notify(), (0, J.T)(this.O.value)()) : this.o.notify());
            };
            var ID = function (a, b, c) {
                if (!a.A)
                    try {
                        if (3 === a.m.readyState || 4 === a.m.readyState)
                            if (300 <= a.m.status || 200 > a.m.status && _.v(eo))
                                a.B || a.A || FD(b, Error('xhr_err-' + a.m.status)), a.B = !0;
                            else {
                                var d = a.m.responseText.substr(a.F);
                                if (d && !b.A && 0 !== d.length)
                                    if (1 !== b.state && 2 !== b.state)
                                        FD(b, Error('state err: ' + GD(b)));
                                    else {
                                        b.l && (d = b.l + d);
                                        var e = 0, f = !1;
                                        do {
                                            var g = d.indexOf('\n', e);
                                            f = -1 !== g;
                                            if (!f)
                                                break;
                                            var h = b, k = d.substr(e, g - e);
                                            if (1 === h.state)
                                                h.m = k, h.j + 1 >= h.X.length ? FD(h, Error('too many responses for ' + h.X.length + ' slots: ' + GD(h))) : (++h.j, h.state = 2);
                                            else {
                                                var l = h;
                                                0 === l.j && dq(Kb.N(), '4', (0, J.T)(H(l.L.P[l.X[l.j].j], 20)));
                                                try {
                                                    var m = {
                                                        kind: 0,
                                                        ra: xm(k)
                                                    };
                                                    h.G(h.X[h.j], h.m, m, h.j >= h.X.length - 1);
                                                    h.m = '';
                                                } catch (p) {
                                                }
                                                h.state = 1;
                                            }
                                            e = g + 1;
                                        } while (4 !== b.state && f && e < d.length);
                                        b.l = d.substr(e);
                                    }
                                a.F = a.m.responseText.length;
                                if (c && 4 === a.m.readyState && !b.A)
                                    if (1 !== b.state || b.l)
                                        FD(b, Error('state err at EOS: ' + GD(b)));
                                    else {
                                        b.state = 3;
                                        for (var n = b.j + 1; n < b.X.length; ++n)
                                            b.D(b.X[n], n === b.X.length - 1);
                                    }
                            }
                    } catch (p) {
                        p instanceof Error && !a.A && FD(b, p);
                    }
            };
            var KD = function (a, b, c, d, e) {
                    Y.call(this, 865);
                    this.L = a;
                    this.B = b;
                    this.F = c;
                    Kt(this);
                    this.m = this.l();
                    Mt(this, d);
                    this.o = U(this, e);
                    JD || (JD = _.Li(function () {
                        aw('gpt-first-ad-request');
                    }));
                }, JD;
            _.N(KD, Y);
            KD.prototype.j = function () {
                var a = this.o.value;
                if (a.length) {
                    dv(a);
                    var b = window, c = new Ph();
                    var d = new Qh();
                    d = Ab(d, 1, this.F, '');
                    Le(b, Nh(Oh(Fb(Db(c, 5, d), 4, 1), 2), this.B));
                    dq(Kb.N(), '3', (0, J.T)(H(this.L.P[a[0].j], 20)));
                    this.m.j(JD);
                } else
                    Dt(this.m);
            };
            var LD = function (a) {
                Y.call(this, 820);
                this.J = a;
                this.C = this.l();
            };
            _.N(LD, Y);
            LD.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f;
                    return B(b, function (g) {
                        if (1 == g.j)
                            return _.v(hp) ? C(g, Pe(c.J), 2) : (c.C.j(''), g.return());
                        d = g.l;
                        e = d.mb;
                        f = d.status;
                        e || mc('gpt_etu', function (h) {
                            Zb(h);
                            q(h, 'rsn', f);
                        });
                        c.C.j(null !== e && void 0 !== e ? e : '');
                        mi(g);
                    });
                });
            };
            var MD = function (a) {
                Y.call(this, 858);
                this.m = a;
                this.C = Kt(this);
            };
            _.N(MD, Y);
            MD.prototype.j = function () {
                return A(this, function b() {
                    var c, d = this, e, f;
                    return B(b, function (g) {
                        switch (g.j) {
                        case 1:
                            g.H = 2;
                            if (_.v(Op))
                                return e = new HA(function () {
                                }, null, d.m), C(g, QA(e), 7);
                            c = _.Xb(258);
                            return C(g, c, 6);
                        case 6:
                            d.C.notify();
                            g.j = 5;
                            break;
                        case 7:
                            d.C.notify();
                        case 5:
                            Ad(g, 0);
                            break;
                        case 2:
                            f = Bd(g), f instanceof Error && d.V(f), d.C.notify(), mi(g);
                        }
                    });
                });
            };
            var ND = function (a) {
                _.Oq.call(this);
                this.j = a;
                var b = a.size;
                this.l = 'height' === a.td ? 'fluid' : [
                    b.width,
                    b.height
                ];
            };
            _.N(ND, _.Oq);
            ND.prototype.render = function () {
                var a = this.j, b = a.slotId, c = a.L, d = a.Z, e = a.size, f = a.sa, g = a.vb, h = a.Fb, k = a.isBackfill;
                a = a.Xc;
                g && He(g, _.Al(d), null !== h && void 0 !== h ? h : '', !1);
                dq(Kb.N(), '5', (0, J.T)(H(c.P[b.j], 20)));
                b.dispatchEvent(Xq, 801, {
                    ac: 0 === f.kind ? f.ra : '',
                    isBackfill: !!k
                });
                c = this.D();
                a && c && c.setAttribute('data-google-container-id', a);
                b.dispatchEvent(Zq, 825, { size: e });
                return c;
            };
            ND.prototype.loaded = function (a) {
                var b = this.j, c = b.slotId, d = b.ia;
                b = b.L;
                c.dispatchEvent(br, 844, void 0);
                a && a.setAttribute('data-load-complete', !0);
                d.dispatchEvent('slotOnload', 710, new ow(c, 'publisher_ads'));
                dq(Kb.N(), '6', (0, J.T)(H(b.P[c.j], 20)));
            };
            ND.prototype.H = function () {
                var a, b = this.j, c = b.slotId;
                b = b.Z;
                _.Oq.prototype.H.call(this);
                null === (a = Vc(c, b)) || void 0 === a ? void 0 : a.removeAttribute('data-google-query-id');
            };
            ND.prototype.G = function (a, b) {
                var c = this, d = this.j, e = d.sa, f = d.Fb, g = d.nb, h = d.eb, k = d.Sa;
                e = 0 === e.kind ? e.ra : '';
                var l = nB(d.$b, Wv(d.slotId), b ? null : e, this.l, function () {
                    c.loaded((0, J.T)(l.j), null !== f && void 0 !== f ? f : '');
                }, a, d.Rb || null, d.Sc || null, !!d.isBackfill, !!d.xd, null !== k && void 0 !== k ? k : null, (0, J.T)(d.L.Sb), (0, J.T)(d.Xc), null !== g && void 0 !== g ? g : '', b, null !== h && void 0 !== h ? h : void 0);
                _.Hg(this, function () {
                    100 != l.status && (2 == l.fa && (aA(l.A), l.fa = 0), window.clearTimeout(l.V), l.V = -1, l.B = 3, l.l && (l.l.wa(), l.l = null), l.o && l.j ? l.o.unobserve(l.j) : (_.ie(window, 'resize', l.I), _.ie(window, 'scroll', l.I)), l.m && l.j && l.m == _.El(l.j) && l.m.removeChild(l.j), l.j = null, l.m = null, l.o && (l.o.disconnect(), l.o = null), l.status = 100);
                });
                return l;
            };
            var Og = function () {
                ND.apply(this, arguments);
            };
            _.N(Og, ND);
            Og.prototype.D = function () {
                var a = this.j, b = a.L, c = b.U;
                a = b.P[a.slotId.j];
                b = new Fu();
                c = lv([
                    b,
                    c.ya(),
                    a && a.ya()
                ]);
                c = ND.prototype.G.call(this, c);
                return (0, J.T)(c.j);
            };
            Og.prototype.loaded = function (a, b) {
                var c = this.j, d = c.slotId;
                c = c.L;
                ND.prototype.loaded.call(this, a, b);
                tC(d, c.P[d.j], b);
            };
            Og.prototype.m = function () {
                return !1;
            };
            var OD = function () {
                ND.apply(this, arguments);
            };
            _.N(OD, ND);
            var PD = function (a, b) {
                    var c = Wv(a.j.slotId), d = a.j.Z;
                    a = wg;
                    d = void 0 === d ? document : d;
                    d = d.createElement('IFRAME');
                    d.id = c;
                    d.title = a;
                    d.name = c;
                    Array.isArray(b) ? null != b[0] && null != b[1] && (d.width = String(b[0]), d.height = String(b[1])) : (d.width = '100%', d.height = '0');
                    d.allowTransparency = 'true';
                    d.scrolling = 'no';
                    d.marginWidth = '0';
                    d.marginHeight = '0';
                    d.frameBorder = '0';
                    d.style.border = '0';
                    d.style.verticalAlign = 'bottom';
                    return d;
                }, QD = function (a, b, c, d, e) {
                    'string' !== typeof c && (b.width = String(c[0]), b.height = String(c[1]));
                    var f = kc(774, function () {
                        a.loaded(b, e);
                        _.ie(b, 'load', f);
                    });
                    _.xd(b, 'load', f);
                    _.Hg(a, function () {
                        return _.ie(b, 'load', f);
                    });
                    d.appendChild(b);
                };
            var Ng = function () {
                OD.apply(this, arguments);
            };
            _.N(Ng, OD);
            Ng.prototype.D = function () {
                var a = this.j, b = a.sa, c = a.$b, d = a.Sc, e = a.Fb;
                a = a.nb;
                var f = PD(this, this.l);
                if (null === d || void 0 === d ? 0 : d.length)
                    if (_.bk) {
                        d = _.G(d);
                        for (var g = d.next(); !g.done; g = d.next())
                            f.sandbox.add(g.value);
                    } else
                        f.sandbox.add.apply(f.sandbox, _.ec(d));
                a && (f.allow = a);
                -1 == uj.indexOf('iPhone') && (f.srcdoc = _.Ej(Fj));
                QD(this, f, this.l, c, null !== e && void 0 !== e ? e : '');
                oB(f, b.ra, function () {
                });
                return f;
            };
            Ng.prototype.m = function () {
                return !0;
            };
            var Mg = function () {
                OD.apply(this, arguments);
            };
            _.N(Mg, OD);
            Mg.prototype.D = function () {
                var a = this.j, b = a.sa, c = a.$b, d = a.Fb, e = a.nb;
                a = PD(this, this.l);
                e && (a.allow = e);
                b = b.Zd;
                /^https:/.test(b) && (b = aj(b), a.src = b instanceof cb ? bb(b) : $i(b), a.sandbox = mA.join(' '));
                QD(this, a, this.l, c, null !== d && void 0 !== d ? d : '');
                return a;
            };
            Mg.prototype.m = function () {
                return !1;
            };
            var Lg = function () {
                OD.apply(this, arguments);
            };
            _.N(Lg, OD);
            Lg.prototype.D = function () {
                var a = this.j, b = a.L, c = a.sa;
                a = b.P[a.slotId.j];
                b = lv([
                    b.U.ya(),
                    a && a.ya()
                ]);
                a = PD(this, this.l);
                c = c.url;
                /^urn:uuid:[0-9a-f-]*$/.test(c) && (c = aj(c), a.src = c instanceof cb ? bb(c) : $i(c));
                OD.prototype.G.call(this, b, a);
                return a;
            };
            Lg.prototype.m = function () {
                return !1;
            };
            var RD = function (a, b, c, d, e, f, g, h, k, l, m, n, p, t, u, y, z, K, Q, S, X, ua, ja, xa, nb, gb) {
                Y.call(this, 680);
                this.slotId = a;
                this.R = b;
                this.L = c;
                this.ia = d;
                this.J = e;
                this.m = this.l();
                this.o = this.l();
                this.F = U(this, f);
                Mt(this, h);
                this.aa = U(this, k);
                this.B = U(this, l);
                this.$ = U(this, m);
                this.Y = U(this, n);
                Mt(this, X);
                this.I = V(this, p);
                this.K = V(this, t);
                this.O = V(this, u);
                this.na = V(this, y);
                this.W = V(this, z);
                this.ja = V(this, K);
                this.oa = V(this, Q);
                this.ca = V(this, S);
                this.ma = V(this, g);
                Mt(this, ua);
                Mt(this, ja);
                this.ga = U(this, xa);
                Mt(this, nb);
                this.la = V(this, gb);
            };
            _.N(RD, Y);
            RD.prototype.j = function () {
                var a = this, b = this.I.value, c = this.F.value;
                if (0 === c.kind) {
                    var d = null === b || void 0 === b ? void 0 : Ma(b.getHtml());
                    d && (c.ra = d);
                    if (null == c.ra)
                        throw Error('invalid html');
                }
                b = Pg({
                    id: this.Y.value,
                    Z: document,
                    slotId: this.slotId,
                    R: this.R,
                    L: this.L,
                    ia: this.ia,
                    size: this.$.value,
                    sa: c,
                    vb: this.aa.value,
                    $b: this.B.value,
                    Fb: this.K.value,
                    td: this.O.value,
                    Sc: this.na.value,
                    Sa: null === b || void 0 === b ? void 0 : H(b, 2),
                    isBackfill: this.W.value,
                    xd: this.ja.value,
                    Xc: this.oa.value,
                    gf: this.ca.value,
                    Rb: this.ma.value,
                    nb: this.ga.value,
                    eb: this.la.value
                });
                _.Pq(this, b);
                var e = b.render();
                vv(this, this.id, this.J, 'message', function (f) {
                    e.contentWindow === f.source && a.slotId.dispatchEvent(ug, 824, f);
                });
                this.m.j(e);
                this.o.j(b.m());
            };
            var TD = function (a, b, c, d) {
                Y.call(this, 863);
                this.m = b;
                this.Ra = Number(a);
                this.o = U(this, c);
                this.B = U(this, d);
                this.F = SD(this);
            };
            _.N(TD, Y);
            var SD = function (a) {
                return A(a, function c() {
                    var d = this, e;
                    return B(c, function (f) {
                        e = d;
                        return f.return(new D.Promise(function (g) {
                            try {
                                vv(e, e.id, e.m, 'message', function (h) {
                                    var k;
                                    'asmreq' === (null === (k = h.data) || void 0 === k ? void 0 : k.type) && Xg(Kh(pz, h.data.payload), 1) === e.Ra && g(h);
                                });
                            } catch (h) {
                            }
                        }));
                    });
                });
            };
            TD.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f, g, h, k;
                    return B(b, function (l) {
                        if (1 == l.j)
                            return d = Qg(c.m), e = c.o.value, f = c.B.value, C(l, c.F, 2);
                        g = l.l;
                        var m = c.m, n = Qg(m);
                        var p = e.getBoundingClientRect();
                        var t = Oe(m) ? bn(e, m) : {
                            x: 0,
                            y: 0
                        };
                        m = t.x;
                        t = t.y;
                        p = new _.Gm(t, m + p.right, t + p.bottom, m);
                        m = new rz();
                        m = E(m, 1, p.top);
                        m = E(m, 3, p.bottom);
                        m = E(m, 2, p.left);
                        p = E(m, 4, p.right);
                        m = new qz();
                        m = E(m, 1, c.Ra);
                        m = E(m, 2, !f);
                        p = Db(m, 3, p);
                        p = E(p, 4, d);
                        h = E(p, 5, n);
                        k = {
                            type: 'asmres',
                            payload: gl(h)
                        };
                        g.ports[0].postMessage(k);
                        mi(l);
                    });
                });
            };
            var UD = function (a, b, c, d, e, f, g, h, k, l, m) {
                Y.call(this, 699);
                this.Z = a;
                this.slotId = b;
                this.ka = c;
                this.Za = d;
                this.C = Kt(this);
                this.F = V(this, e);
                this.K = U(this, f);
                this.o = U(this, g);
                this.I = U(this, h);
                this.m = V(this, k);
                this.O = U(this, l);
                this.B = U(this, m);
            };
            _.N(UD, Y);
            UD.prototype.j = function () {
                var a, b = this.K.value, c = this.o.value;
                c.style.width = '';
                c.style.height = '';
                if ('height' !== this.F.value) {
                    var d = null !== (a = this.m.value) && void 0 !== a ? a : 0, e = this.I.value, f = this.O.value, g = this.B.value, h = !1;
                    switch (d) {
                    case 1:
                    case 2:
                        h = this.Z;
                        var k = this.slotId, l = this.ka, m = this.Za;
                        var n = e.width, p = e.height, t = 0;
                        var u = 0;
                        var y = Yc(l);
                        y = _.G(y);
                        for (var z = y.next(); !z.done; z = y.next())
                            if (z = z.value, Array.isArray(z)) {
                                var K = _.G(z);
                                z = K.next().value;
                                K = K.next().value;
                                t < z && (t = z);
                                u < K && (u = K);
                            }
                        u = [
                            t,
                            u
                        ];
                        t = u[0] < n;
                        p = u[1] < p;
                        t || p ? (u = n + 'px', y = {
                            'max-height': 'none',
                            'max-width': u,
                            padding: '0px',
                            width: u
                        }, p && (y.height = 'auto'), mC(c, b, y), c = {}, t && n > parseInt(f.width, 10) && (c.width = u, c['max-width'] = u), p && (c.height = 'auto', c['max-height'] = 'none'), Ql(c) ? c = !1 : (c['padding-' + ('ltr' == f.direction ? 'left' : 'right')] = '0px', _.mm(b, c), c = !0)) : c = !1;
                        b:
                            switch (p = e.width, n = h.defaultView || h.parentWindow || _.F, d) {
                            case 2:
                                b = nC(b, n, p, f, m);
                                break b;
                            case 1:
                                if (f = b.parentElement)
                                    if (m = Mv(f)) {
                                        K = m.width;
                                        m = Vc(k, n.document);
                                        t = Xc(m, n);
                                        u = t.position;
                                        var Q = parseInt(t.width, 10) || 0;
                                        y = Xc(f, n);
                                        z = 'rtl' == y.direction ? 'Right' : 'Left';
                                        m = z.toLowerCase();
                                        n = 'absolute' == u ? 0 : parseInt(y['padding' + z], 10);
                                        y = parseInt(y['border' + z + 'Width'], 10);
                                        var S = qm(t);
                                        z = (S && S[4] || 0) * ('Right' == z ? -1 : 1);
                                        p = Math.max(Math.round((K - Math.max(Q, p)) / 2), 0);
                                        K = {};
                                        Q = S && S[3] || 1;
                                        if (1 != (S && S[0] || 1) || 1 != Q)
                                            S[0] = 1, S[3] = 1, K.transform = 'matrix(' + S.join(',') + ')';
                                        S = 0;
                                        switch (u) {
                                        case 'fixed':
                                            if (_.v(Gn)) {
                                                var X, ua = null != (X = parseFloat(t[m])) ? X : 0, ja;
                                                X = null != (ja = f.getBoundingClientRect().left) ? ja : 0;
                                                S = ua - X;
                                                break;
                                            }
                                        case 'relative':
                                            S = null != (ua = parseFloat(t[m])) ? ua : 0;
                                            break;
                                        case 'absolute':
                                            K[m] = '0';
                                        }
                                        K['margin-' + m] = p - n - y - S - z + 'px';
                                        _.mm(b, K);
                                        b = !0;
                                    } else
                                        b = !1;
                                else
                                    b = !1;
                                break b;
                            default:
                                b = !1;
                            }
                        c || b ? (pC(h, k, l, d, e.width, e.height, 'gpt_slotexp', g), h = !0) : h = !1;
                        break;
                    case 3:
                        d = this.Z, h = this.slotId, k = this.ka, X = this.Za, l = e.width, ja = e.height, ja >= (parseInt(f.height, 10) || 0) || 'none' == f.display || 'hidden' == f.visibility || !X || -12245933 === X.width || b.getBoundingClientRect().bottom <= X.height ? h = !1 : (X = { height: ja + 'px' }, mC(c, b, X), _.mm(b, X), pC(d, h, k, 3, l, ja, 'gpt_slotred', g), h = !0);
                    }
                    !h && _.v(En) && pC(this.Z, this.slotId, this.ka, 0, e.width, e.height, 'gpt_pgbrk', g);
                }
                this.C.notify();
            };
            var VD = function (a, b, c, d, e, f) {
                Y.call(this, 686);
                this.J = a;
                this.slotId = b;
                this.o = c;
                this.Ib = f;
                this.B = V(this, d);
                this.m = U(this, e);
            };
            _.N(VD, Y);
            VD.prototype.j = function () {
                var a, b;
                return A(this, function d() {
                    var e = this, f, g, h, k, l, m, n, p, t, u, y;
                    return B(d, function (z) {
                        if (1 == z.j) {
                            f = e.B.value;
                            g = null === f || void 0 === f ? void 0 : H(f, 1);
                            h = null === f || void 0 === f ? void 0 : $k(f, 2, 1);
                            k = null !== (a = null === f || void 0 === f ? void 0 : H(f, 3)) && void 0 !== a ? a : 0;
                            l = null !== (b = null === f || void 0 === f ? void 0 : x(f, 5)) && void 0 !== b ? b : !1;
                            if (!g || !h)
                                return z.return();
                            m = new De();
                            n = m.resolve;
                            p = m.promise;
                            t = e.m.value;
                            u = WA({
                                J: e.J,
                                element: t,
                                Xd: 0 === e.o,
                                Vc: k,
                                Yd: g,
                                Yb: function () {
                                    return void n(!0);
                                },
                                options: { threshold: h },
                                Kc: l,
                                qd: function (K) {
                                    Vb(615, K, !0);
                                },
                                Ib: e.Ib
                            });
                            _.Hg(e, function () {
                                u();
                                n(!1);
                            });
                            return C(z, p, 2);
                        }
                        (y = z.l) ? z = C(z, e.slotId.dispatchEvent(Uq, 614, void 0), 0) : (z.j = 0, z = void 0);
                        return z;
                    });
                });
            };
            var WD = function (a, b, c, d, e) {
                Y.call(this, 856);
                this.ka = a;
                this.F = this.l();
                this.m = this.l();
                this.o = this.l();
                this.W = this.l();
                this.B = this.l();
                this.K = V(this, b);
                this.O = V(this, c);
                this.I = V(this, d);
                this.Y = V(this, e);
            };
            _.N(WD, Y);
            var XD = function (a) {
                a.F.l(a.K.value);
                a.m.l(a.O.value);
                a.o.l(a.I.value);
                Dt(a.W);
                Dt(a.B);
            };
            WD.prototype.j = function () {
                var a, b, c, d, e, f, g, h = this.Y.value, k = this.I.value;
                if (_.v(Hn) && h) {
                    var l = null !== (b = null === (a = (L = I(this.ka, Ze, 21), _.r(L, 'find')).call(L, function (u) {
                        return H(u, 1) === h;
                    })) || void 0 === a ? void 0 : M(a, Bc, 2)) && void 0 !== b ? b : null;
                    if (!l)
                        throw Error('Could not find bid with id: ' + h);
                    this.W.j(l);
                    if (1 !== H(l, 11))
                        XD(this);
                    else {
                        var m = H(l, 7), n = H(l, 12), p = null !== (d = null === (c = M(l, Nc, 5)) || void 0 === c ? void 0 : H(c, 2)) && void 0 !== d ? d : this.K.value, t = null !== (f = null === (e = M(l, Nc, 5)) || void 0 === e ? void 0 : H(e, 1)) && void 0 !== f ? f : this.O.value;
                        if (!m && !n)
                            throw Error('Could not find ad to render for bid id: ' + h);
                        l = null !== (g = H(l, 2)) && void 0 !== g ? g : 0;
                        m = {
                            ad: Rg(m, l),
                            adUrl: Rg(n, l),
                            adId: h,
                            width: t,
                            height: p
                        };
                        m = btoa(JSON.stringify(m));
                        0 === (null === k || void 0 === k ? void 0 : k.kind) ? (this.o.j({
                            kind: 0,
                            ra: k.ra.replace(new RegExp('{{GOOGLE_PBJS_AD_CONFIG}}'.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08'), 'g'), m.replace(/\$/g, '$$$$'))
                        }), Dt(this.B)) : (this.o.l(k), this.B.l(m));
                        this.F.l(null !== p && void 0 !== p ? p : null);
                        this.m.l(null !== t && void 0 !== t ? t : null);
                        window.postMessage(JSON.stringify({
                            message: 'Prebid Request',
                            adId: h
                        }), '*');
                    }
                } else
                    XD(this);
            };
            var YD = function (a, b, c, d) {
                Y.call(this, 720);
                this.format = a;
                this.B = b;
                this.C = this.l();
                this.m = V(this, c);
                this.o = V(this, d);
            };
            _.N(YD, Y);
            YD.prototype.j = function () {
                var a = this.o.value;
                if (null == a)
                    Dt(this.C);
                else {
                    var b = Math.round(0.3 * this.B);
                    2 !== this.format && 3 !== this.format || !Gt(this.m) || !Zk(this.m.value, 12, !1) || 0 >= b || a <= b ? this.C.j(a) : this.C.j(b);
                }
            };
            var ZD = function (a, b, c, d, e, f, g, h, k, l) {
                Y.call(this, 674);
                this.slotId = a;
                this.U = b;
                this.ka = c;
                this.Z = e;
                this.R = f;
                this.C = this.l();
                this.B = 2 === d || 3 === d;
                this.m = U(this, g);
                this.I = U(this, h);
                this.F = V(this, k);
                this.o = V(this, l);
            };
            _.N(ZD, Y);
            ZD.prototype.j = function () {
                var a = uv(this.U, this.ka), b = Sv(this.slotId, this.Z) || mB(this.Z, this.m.value, Xv(this.slotId), a);
                this.I.value && !a && (b.style.display = 'inline-block');
                this.B ? iu(this.R, this.slotId, function () {
                    return void _.Dl(b);
                }) : _.Hg(this, function () {
                    return void _.Dl(b);
                });
                a = $D(this);
                0 < a && (b.style.paddingTop = a + 'px');
                this.C.j(b);
            };
            var $D = function (a) {
                var b, c, d, e = a.m.value, f = null === (b = (0, J.T)(a.F).value) || void 0 === b ? void 0 : b.height;
                if (!e || (0, J.T)(a.o).value || !f)
                    return 0;
                var g = a.U, h;
                return (null != (h = x(a.ka, 23)) ? h : x(g, 31)) ? Math.floor((e.offsetHeight - f) / 2) : _.v(wo) && (a = Xc(e, window), a = null === (d = null === (c = null === a || void 0 === a ? void 0 : a.minHeight) || void 0 === c ? void 0 : c.match(/^([0-9]+)px$/)) || void 0 === d ? void 0 : d[1]) ? Math.floor((Number(a) - f) / 2) : 0;
            };
            var aE = function (a) {
                Y.call(this, 859);
                this.J = a;
                this.C = this.l();
            };
            _.N(aE, Y);
            aE.prototype.j = function () {
                this.C.j(!Oe(this.J.top));
            };
            var bE = function (a, b) {
                Y.call(this, 698);
                this.J = a;
                this.C = this.l();
                this.m = U(this, b);
            };
            _.N(bE, Y);
            bE.prototype.j = function () {
                this.C.l(Xc(this.m.value, this.J));
            };
            var cE = function (a, b, c) {
                Y.call(this, 813);
                this.Ea = a;
                this.m = this.l();
                this.B = V(this, b);
                this.o = V(this, c);
            };
            _.N(cE, Y);
            cE.prototype.j = function () {
                var a;
                if (!_.v(wp) || _.v(sp))
                    this.m.j(!1);
                else if (_.v(rp) && !_.Xb(254))
                    this.m.j(!1);
                else {
                    var b = this.B.value;
                    if (b)
                        if (dE.has(this.Ea))
                            this.m.j(!1);
                        else {
                            dE.add(this.Ea);
                            b = _.G(b);
                            for (var c = b.next(); !c.done; c = b.next()) {
                                var d = c.value;
                                c = d.xa;
                                (d = d.Jc) && xe(c, d, null !== (a = this.o.value) && void 0 !== a ? a : null);
                            }
                            this.m.j(!0);
                        }
                }
            };
            var dE = new D.Set();
            var eE = function (a) {
                Y.call(this, 840);
                this.Z = a;
                this.C = this.l();
            };
            _.N(eE, Y);
            eE.prototype.j = function () {
                var a;
                if (_.v(yp)) {
                    var b = void 0 === b ? window.navigator.userAgent : b;
                    b = (b = b.match(/Chrome\/([0-9]+)/)) && 92 > Number(b[1]) ? 'conversion-measurement' : 'attribution-reporting';
                } else
                    b = 'conversion-measurement';
                _.v(xp) && (null === (a = this.Z.featurePolicy) || void 0 === a ? 0 : (L = a.features(), _.r(L, 'includes')).call(L, b)) ? this.C.j(b) : this.C.j('');
            };
            var fE = function (a, b, c, d, e, f, g) {
                Y.call(this, 758);
                this.slotId = a;
                this.L = b;
                this.R = c;
                this.xb = d;
                this.J = e;
                this.Z = f;
                this.m = V(this, g);
            };
            _.N(fE, Y);
            fE.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e;
                    return B(b, function (f) {
                        if (1 == f.j) {
                            var g, h = Vc(c.slotId, c.Z);
                            h && He(h, c.J, null !== (g = c.m.value) && void 0 !== g ? g : '', !0);
                            dq(c.xb, '5', (0, J.T)(H(c.L.P[c.slotId.j], 20)));
                            d = c.slotId;
                            return C(f, d.dispatchEvent(Xq, 801, {
                                ac: null,
                                isBackfill: !1
                            }), 2);
                        }
                        e = _.v(co);
                        var k, l, m;
                        if (_.lu(c.R, c.slotId)) {
                            var n = c.L;
                            g = n.U;
                            n = n.P[c.slotId.j];
                            var p = null !== (k = null !== (h = x(n, 11)) && void 0 !== h ? h : x(g, 10)) && void 0 !== k ? k : !1;
                            e && (su(c.R, c.slotId), p && hg(c.slotId, c.Z, n, g), qu(c.R, c.slotId));
                            !e && $v(c.slotId, c.Z) || null === (m = null !== (l = x(n, 10)) && void 0 !== l ? l : x(g, 11)) || void 0 === m || !m || _.v(yo) || hg(c.slotId, c.Z, n, g);
                        }
                        return C(f, d.dispatchEvent(Zq, 825, {
                            isEmpty: !0,
                            slotContentChanged: e
                        }), 0);
                    });
                });
            };
            var gE = function (a, b, c, d, e) {
                Y.call(this, 721);
                this.J = a;
                this.F = V(this, b);
                this.o = U(this, c);
                this.m = U(this, d);
                this.B = U(this, e);
            };
            _.N(gE, Y);
            gE.prototype.j = function () {
                var a = this, b, c, d, e = this.F.value, f = null === (b = null === e || void 0 === e ? void 0 : H(e, 1)) || void 0 === b ? void 0 : b.toUpperCase();
                e = null === (c = null === e || void 0 === e ? void 0 : H(e, 2)) || void 0 === c ? void 0 : c.toUpperCase();
                if (f && e) {
                    var g = this.o.value, h = this.m.value, k = this.B.value, l = k.style.height, m = k.style.width, n = k.style.display, p = k.style.position, t = Dm(g.id + '_top', f), u = Dm(g.id + '_bottom', e);
                    _.mm(u, {
                        position: 'relative',
                        top: 'calc(100vh - 48px)'
                    });
                    k.appendChild(t);
                    k.appendChild(u);
                    _.mm(h, {
                        position: 'absolute',
                        top: '24px',
                        clip: 'rect(0, auto, auto, 0)',
                        width: '100vw',
                        height: 'calc(100vh - 48px)'
                    });
                    _.mm(g, {
                        position: 'fixed',
                        top: '0',
                        height: '100vh'
                    });
                    _.mm(k, {
                        position: 'relative',
                        display: (null === (d = this.J.screen.orientation) || void 0 === d ? 0 : d.angle) ? 'none' : 'block',
                        width: '100vw',
                        height: '100vh'
                    });
                    vv(this, 722, this.J, 'orientationchange', function () {
                        var y;
                        (null === (y = a.J.screen.orientation) || void 0 === y ? 0 : y.angle) ? _.mm(k, { display: 'none' }) : _.mm(k, { display: 'block' });
                    });
                    _.Hg(this, function () {
                        _.Dl(t);
                        _.Dl(u);
                        k.style.position = p;
                        k.style.height = l;
                        k.style.width = m;
                        k.style.display = n;
                    });
                }
            };
            var hE = function (a, b, c, d, e) {
                e = void 0 === e ? Tg : e;
                Y.call(this, 783);
                var f = this;
                this.slotId = a;
                this.Z = c;
                this.ia = d;
                this.O = e;
                this.F = !1;
                this.m = null;
                this.B = 0;
                this.o = null;
                this.W = _.Li(function () {
                    f.ia.dispatchEvent('impressionViewable', 715, new mw(f.slotId, 'publisher_ads'));
                });
                this.Y = Mi(function () {
                    return void f.ia.dispatchEvent('slotVisibilityChanged', 716, new nw(f.slotId, 'publisher_ads', f.o));
                }, 200);
                this.I = U(this, b);
                this.K = tg(this.slotId, br);
            };
            _.N(hE, Y);
            hE.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f, g, h;
                    return B(b, function (k) {
                        if (1 == k.j)
                            return d = c, _.v(Jo) || _.v(Ko) ? _.v(Lo) ? (k.j = 2, k = void 0) : k = C(k, c.K, 2) : k = k.return(), k;
                        if (c.A)
                            return k.return();
                        e = c.I.value;
                        f = _.v(Ko) ? Ji : function (l) {
                            l = _.G(l);
                            for (var m = l.next(); !m.done; m = l.next())
                                d.B = 100 * m.value.intersectionRatio, iE(d);
                        };
                        g = kc(c.id, f);
                        h = c.O(g);
                        h.observe(e);
                        vv(c, c.id, c.Z, 'visibilitychange', function () {
                            iE(d);
                        });
                        _.Hg(c, function () {
                            h.disconnect();
                        });
                        _.v(Mo) && setTimeout(function () {
                            return void h.disconnect();
                        }, 3600000);
                        mi(k);
                    });
                });
            };
            var iE = function (a) {
                    var b = !xt(a.Z);
                    jE(a, 50 <= a.B && b);
                    b = b ? a.B : 0;
                    _.r(Number, 'isFinite').call(Number, b) && (b = Math.floor(b), 0 > b || 100 < b || b === a.o || null === a.o && 0 === b || (a.o = b, a.Y()));
                }, jE = function (a, b) {
                    a.F || (b ? null === a.m && (a.m = setTimeout(function () {
                        xt(a.Z) || (a.W(), a.F = !0);
                        a.m = null;
                    }, 1000)) : null !== a.m && (clearTimeout(a.m), a.m = null));
                };
            var kE = function () {
                Y.call(this, 663);
                this.C = Kt(this);
            };
            _.N(kE, Y);
            kE.prototype.j = function () {
                return A(this, function b() {
                    var c = this;
                    return B(b, function (d) {
                        if (1 == d.j) {
                            var e = lE ? 0 : _.lb(ro), f = _.lb(qo);
                            e = Math.max(e, f);
                            0 < e && (lE = !0, jg(e));
                            return C(d, mE(c), 2);
                        }
                        c.C.notify();
                        mi(d);
                    });
                });
            };
            var mE = function (a) {
                    return A(a, function c() {
                        var d;
                        return B(c, function (e) {
                            d = _.lb(so);
                            0 < d ? e = C(e, Ug(d), 0) : (e.j = 0, e = void 0);
                            return e;
                        });
                    });
                }, lE = !1;
            var nE = function (a, b) {
                Y.call(this, 666);
                this.o = a;
                this.m = this.l();
                this.B = V(this, b);
            };
            _.N(nE, Y);
            nE.prototype.j = function () {
                var a = new Tu();
                Gt(this.B) && (E(a, 2, this.B.value), E(a, 3, 1));
                if (this.o) {
                    var b = [
                            this.o,
                            a
                        ], c = new Tu();
                    b = _.G(b);
                    for (a = b.next(); !a.done; a = b.next()) {
                        a = a.value;
                        if (xf(a, 1)) {
                            var d = H(a, 1);
                            E(c, 1, d);
                        }
                        xf(a, 2) && (d = H(a, 2), E(c, 2, d));
                        xf(a, 3) && (a = ee(a, 3), E(c, 3, a));
                    }
                    a = c;
                }
                c = this.m;
                b = c.l;
                a = xf(a, 2) ? xf(a, 3) && 0 !== qd() ? H(a, 2) * ee(a, 3) : H(a, 2) : null;
                b.call(c, a);
            };
            var oE = function (a, b, c, d) {
                Y.call(this, 666);
                this.C = this.l();
                Mt(this, a);
                this.m = U(this, b);
                this.o = V(this, d);
                this.B = V(this, c);
            };
            _.N(oE, Y);
            oE.prototype.j = function () {
                var a, b = this.o.value, c = null !== (a = this.B.value) && void 0 !== a ? a : void 0;
                if (null == b || 0 > b || 0 === c)
                    this.C.j(!1);
                else {
                    var d = this.m.value;
                    $c(d) ? pE(this, b, c, d) : this.C.j(!1);
                }
            };
            var pE = function (a, b, c, d) {
                var e = Vg(b + '%', kc(291, function (f, g) {
                    f = _.G(f);
                    for (var h = f.next(); !h.done; h = f.next())
                        if (h = h.value, !(0 >= h.intersectionRatio)) {
                            g.unobserve(h.target);
                            a.C.j(!0);
                            break;
                        }
                }));
                null != c && setTimeout(function () {
                    a.C.j(!0);
                    e.disconnect();
                }, c);
                e.observe(d);
                _.Hg(a, function () {
                    e.disconnect();
                });
            };
            var qE = function (a, b, c, d, e) {
                Y.call(this, 713);
                this.Ra = a;
                this.m = b;
                this.B = e;
                this.o = V(this, c);
                this.F = U(this, d);
            };
            _.N(qE, Y);
            qE.prototype.j = function () {
                var a = this;
                if (!Qe(this.o.value) && this.m.getOseId()) {
                    var b = this.F.value, c = YA(this.m), d = _.v(Jo) ? Ji : kc(this.id, function (e, f) {
                            0 <= f && a.B(e, f);
                            return null;
                        });
                    c.registerAdBlock('?eid=' + Bb().join(',') + '&adk=' + this.Ra, 3, 'ldjh', b, 0, 0, d);
                    _.Hg(this, function () {
                        try {
                            c.unloadAdBlock(b, !1, !1);
                        } catch (e) {
                        }
                    });
                }
            };
            var rE = function (a, b, c, d, e, f) {
                Y.call(this, 664);
                this.slotId = a;
                this.Za = b;
                this.R = c;
                this.C = Kt(this);
                Mt(this, d);
                this.o = V(this, e);
                this.m = V(this, f);
            };
            _.N(rE, Y);
            rE.prototype.j = function () {
                var a = this, b, c = null !== (b = this.m.value) && void 0 !== b ? b : 0;
                if (_.v(lo) || 0 < c) {
                    var d = document;
                    c = wt(d);
                    if (xt(d) && c && (0 < Rf(this.R, this.slotId) || !sE(this)) && c) {
                        var e = vv(this, 324, d, c, function () {
                            xt(d) || (e && e(), a.C.notify());
                        });
                        if (e)
                            return;
                    }
                }
                this.C.notify();
            };
            var sE = function (a) {
                var b = a.o.value, c;
                if (c = null != b)
                    try {
                        var d = Es(top.document, top).y, e = d + a.Za.height;
                        c = b.y >= d && b.y <= e;
                    } catch (f) {
                        c = !0;
                    }
                return c;
            };
            var tE = function (a, b) {
                Y.call(this, 762);
                this.C = this.l();
                this.o = U(this, a);
                this.m = U(this, b);
            };
            _.N(tE, Y);
            tE.prototype.j = function () {
                var a = this.m.value.kind, b = 0;
                1 === a ? b = 5 : 2 === a ? b = 6 : this.o.value && (b = 1);
                this.C.j(b);
            };
            var uE = function (a, b, c, d, e, f) {
                Y.call(this, 669);
                this.U = a;
                this.P = b;
                this.J = c;
                this.C = this.l();
                this.m = V(this, d);
                this.o = V(this, e);
                this.B = V(this, f);
            };
            _.N(uE, Y);
            uE.prototype.j = function () {
                var a;
                if (!(a = Gt(this.o))) {
                    a = this.P;
                    var b = this.J;
                    b = void 0 === b ? window : b;
                    a = !!(yq(yn) || a && xf(a, 16) && Ob('google_range_debug', b));
                }
                a ? this.C.j(!0) : (a = (Qe(this.m.value) ? x(this.P, 12) || x(this.U, 13) : !1) || !!this.B.value, this.C.j(!!a));
            };
            var vE = function (a, b, c, d, e, f, g) {
                Y.call(this, 828);
                this.slotId = a;
                this.L = b;
                this.R = c;
                this.da = d;
                this.o = e;
                this.C = this.l();
                this.m = V(this, f);
                this.B = V(this, g);
            };
            _.N(vE, Y);
            vE.prototype.j = function () {
                var a;
                return A(this, function c() {
                    var d = this, e, f, g, h, k, l, m, n, p, t;
                    return B(c, function (u) {
                        e = d.L;
                        f = e.U;
                        g = e.P;
                        h = g[d.slotId.j];
                        k = d.B.value;
                        l = null;
                        m = null !== (a = null === h || void 0 === h ? void 0 : h.ya()) && void 0 !== a ? a : null;
                        n = f.ya();
                        (null === m || void 0 === m ? 0 : xf(m, 4)) ? l = x(m, 4) : (null === n || void 0 === n ? 0 : xf(n, 4)) ? l = x(n, 4) : null != k && (l = k);
                        p = String(l);
                        null == k || k === l || d.m.value || Cc().M(ns(p, String(k)));
                        d.m.value || mc('gpt_sf_r', function (y) {
                            Zb(y);
                            q(y, 'GAM', String(k));
                            q(y, 'Final', p);
                        });
                        t = d.m.value || l || null == l;
                        if (!t)
                            return Dt(d.C), u.return();
                        d.C.j(Rv(d.o, d.da));
                        mi(u);
                    });
                });
            };
            var wE = function (a, b, c, d, e, f) {
                Y.call(this, 719);
                this.U = a;
                this.ka = b;
                this.C = this.l();
                this.o = U(this, c);
                this.m = V(this, d);
                this.B = V(this, f);
            };
            _.N(wE, Y);
            wE.prototype.j = function () {
                var a = this.m.value, b = this.o.value;
                if (1 === b || 5 === b) {
                    if (a = this.B.value, b = new Fu(), a = E(b, 3, a), x(lv([
                            a,
                            this.U.ya(),
                            this.ka.ya()
                        ]), 3)) {
                        this.C.j(mA);
                        return;
                    }
                } else {
                    if (a = 0 === b && a)
                        a = dm(), a = !(!a['allow-top-navigation-by-user-activation'] || !a['allow-popups-to-escape-sandbox']);
                    if (a) {
                        this.C.j(mA);
                        return;
                    }
                }
                Dt(this.C);
            };
            var xE = function (a, b, c, d, e, f, g, h, k) {
                Y.call(this, 681);
                this.adUnitPath = a;
                this.ka = b;
                this.O = c;
                this.window = d;
                this.F = this.l();
                this.m = this.l();
                this.B = this.l();
                this.o = yq(yn).split(',');
                this.I = ng(zn);
                this.Ta = xf(b, 16) ? M(b, Yf, 16) : null;
                this.K = Nb('google_range_debug', this.window);
                this.W = V(this, e);
                this.ca = V(this, f);
                this.$ = V(this, g);
                this.Y = U(this, h);
                this.aa = U(this, k);
            };
            _.N(xE, Y);
            xE.prototype.j = function () {
                var a;
                if (a = !!(this.o.length || this.Ta && this.K)) {
                    var b;
                    b:
                        if (this.o.length) {
                            if (this.I.length && (a = this.adUnitPath.split('/'), !_.r(this.I, 'includes').call(this.I, a[a.length - 1]))) {
                                a = !1;
                                break b;
                            }
                            a = !0;
                        } else
                            a = !1;
                    var c = a;
                    a = c ? yE(this) : null;
                    if (c && a) {
                        c = this.aa.value;
                        var d = Mv(c.parentElement);
                        d = null !== (b = null === d || void 0 === d ? void 0 : d.width) && void 0 !== b ? b : 0;
                        b = 'p' === this.o[0];
                        var e = Number(this.o[0]);
                        if (b = 'f' === this.o[0] ? this.O : e && 0 < e ? e : b ? Math.min(d, this.O) : null) {
                            e = a.width;
                            var f = a.height, g = this.o[1], h = Number(g);
                            e = 'ratio' === g && e ? Math.floor(f / e * b) : h && 0 < h ? f * h : f;
                            zE(this, b, e, {
                                kind: 0,
                                ra: AE(b, e, '<p>Requested size:' + a.width + 'x' + a.height + '</p>')
                            }, b <= d ? 1 : 2, c);
                            a = !0;
                        } else
                            a = !1;
                    } else
                        a = !1;
                    if (!a)
                        a:
                            if (this.Ta && this.K) {
                                a = Uf(this.Ta, this.window);
                                c = Vf(this.Ta, this.window);
                                d = Wf(this.Ta);
                                b = Xf(this.Ta);
                                switch (this.K) {
                                case 'max':
                                    e = a;
                                    f = c;
                                    break;
                                case 'min':
                                    e = d;
                                    f = b;
                                    break;
                                case 'banner':
                                    e = a;
                                    f = 90 > c ? c : 90 < b ? b : 90;
                                    break;
                                case 'skyscraper':
                                    e = 90 > a ? a : 90 < d ? d : 90;
                                    f = c;
                                    break;
                                default:
                                    a = !1;
                                    break a;
                                }
                                zE(this, e, f, {
                                    kind: 0,
                                    ra: AE(e, f, '<p>Minimum size:' + d + 'x' + b + '</p><p>Maximum size:' + (a + 'x' + c + '</p><div id=toowide style="display:none; background:#faa">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? \'block\' : \'none\';},{threshold:1}).observe(document.body);</script></div>'))
                                });
                                a = !0;
                            } else
                                a = !1;
                }
                if (!a) {
                    a = this.ca.value;
                    if (null == a)
                        throw Error('Missing \'width\'.');
                    c = this.$.value;
                    if (null == c)
                        throw Error('Missing \'height\'.');
                    zE(this, a, c, this.Y.value);
                }
            };
            var yE = function (a) {
                    a = Yc(a.ka)[0];
                    return Array.isArray(a) && a.every(function (b) {
                        return 'number' === typeof b;
                    }) ? new _.rl(a[0], a[1]) : null;
                }, AE = function (a, b, c) {
                    return '<html><body style="height:' + (b - 2 + 'px;width:' + (a - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;">')) + c + ('<p>Rendered size:' + a + 'x' + b + '</p></body></html>');
                }, zE = function (a, b, c, d, e, f) {
                    e = void 0 === e ? a.W.value : e;
                    a.m.j(new _.rl(b, c));
                    a.F.j(d);
                    a.B.l(e);
                    f && _.Um(f, 'opacity', 0.5);
                };
            var BE = function (a, b, c, d, e, f, g, h, k) {
                Y.call(this, 673);
                this.slotId = a;
                this.vb = b;
                this.I = c;
                this.F = d;
                this.Z = e;
                this.m = f;
                this.R = g;
                this.C = this.l();
                this.B = V(this, h);
                this.o = V(this, k);
            };
            _.N(BE, Y);
            BE.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e;
                    return B(b, function (f) {
                        if (1 == f.j) {
                            if (null != c.vb) {
                                CE(c, c.vb);
                                c.C.j(c.vb);
                                f.j = 0;
                                return;
                            }
                            if (tv(c.m)) {
                                c.C.j(DE(c));
                                f.j = 0;
                                return;
                            }
                            return C(f, tg(c.slotId, Vq), 4);
                        }
                        d = f.l;
                        e = d.detail;
                        if (c.A)
                            return f.return();
                        CE(c, e);
                        c.C.j(e);
                        mi(f);
                    });
                });
            };
            var DE = function (a) {
                    var b = _.Cl(document, 'INS');
                    b.id = a.I;
                    _.mm(b, { display: 'none' });
                    a.Z.documentElement.appendChild(b);
                    var c = function () {
                        return void _.Dl(b);
                    };
                    2 === a.m || 3 === a.m ? iu(a.R, a.slotId, function () {
                        return void _.Dl(b);
                    }) : _.Hg(a, c);
                    return b;
                }, CE = function (a, b) {
                    if (2 !== a.m && 3 !== a.m) {
                        var c = _.v(Uo) ? [].concat(_.ec(b.childNodes)) : _.r(Array, 'from').call(Array, b.childNodes);
                        c = _.G(c);
                        for (var d = c.next(); !d.done; d = c.next())
                            d = d.value, 1 === d.nodeType && d.id !== a.F && _.Dl(d);
                        b.style.display = '';
                        _.v(xo) && Gt(a.B) && Gt(a.o) && lB(b, a.B.value, a.o.value);
                    }
                };
            var EE = function (a) {
                Y.call(this, 676);
                this.C = this.l();
                this.m = U(this, a);
            };
            _.N(EE, Y);
            EE.prototype.j = function () {
                var a = Uc(this.m.value);
                this.C.j(a);
            };
            var FE = function (a, b, c) {
                Y.call(this, 807);
                this.J = a;
                this.C = Kt(this);
                this.m = V(this, b);
                this.o = U(this, c);
            };
            _.N(FE, Y);
            FE.prototype.j = function () {
                var a = _.lb(ip);
                if (0 !== a && this.m.value && !this.o.value) {
                    var b = Gs(this.J).J, c = Js(b), d = c.url;
                    c.jc && (b = new zA(b, d), 1 === a ? b = AA(b) : (b = gm('google_ads_top_frame_ctrl', b.j), b = !(!b || !b.contentWindow)), b || this.V(Error('Cannot create top window frame: ' + a)));
                }
                this.C.notify();
            };
            var GE = function (a, b) {
                Y.call(this, 870);
                this.o = V(this, a);
                this.m = V(this, b);
            };
            _.N(GE, Y);
            GE.prototype.j = function () {
                if (this.o.value && this.m.value && 1 === this.m.value.length) {
                    var a = this.o.value, b = this.m.value[0], c = new D.Set(H(a, 2)), d = 0, e = -1;
                    a = _.G(I(a, gx, 1));
                    for (var f = a.next(); !f.done; f = a.next())
                        f = f.value, xf(f, 1) && xf(f, 3) && !($k(f, 3) <= d) && H(f, 4).some(function (g) {
                            return c.has(g);
                        }) && (d = $k(f, 3), e = Xg(f, 1));
                    -1 !== e && e !== b && mc('gpt_ta_creative_id_mismatch', function (g) {
                        q(g, 'ta_winner', e);
                        q(g, 'expected_winner', b);
                        Zb(g);
                    }, { ta: 1 });
                }
            };
            GE.prototype.G = function () {
            };
            var HE = function (a) {
                Y.call(this, 881);
                this.C = this.l();
                this.m = V(this, a);
            };
            _.N(HE, Y);
            HE.prototype.j = function () {
                var a;
                if (this.m.value) {
                    for (var b = this.m.value, c = {}, d = _.G(I(b, Ex, 7)), e = d.next(); !e.done; e = d.next())
                        e = e.value, c[pf(e, 1)] = JSON.parse(pf(e, 2));
                    (d = M(b, Dx, 6)) && (c['https://googleads.g.doubleclick.net'] = el(d));
                    this.C.j({
                        seller: 'https://pubads.g.doubleclick.net',
                        decisionLogicUrl: pf(b, 1),
                        trustedScoringSignalsUrl: pf(b, 2),
                        interestGroupBuyers: H(b, 3),
                        additionalBids: [],
                        auctionSignals: JSON.parse(pf(b, 4) || '{}'),
                        sellerSignals: (null === (a = M(b, Fx, 5)) || void 0 === a ? void 0 : a.za()) || [],
                        perBuyerSignals: c
                    });
                } else
                    Dt(this.C);
            };
            HE.prototype.G = function () {
                Dt(this.C);
            };
            var IE = navigator, JE = function (a, b, c) {
                    Y.call(this, 882);
                    this.C = this.l();
                    this.B = V(this, a);
                    this.o = V(this, b);
                    this.m = V(this, c);
                };
            _.N(JE, Y);
            JE.prototype.j = function () {
                var a;
                return A(this, function c() {
                    var d = this, e;
                    return B(c, function (f) {
                        if (1 == f.j)
                            return d.o.value ? C(f, null === (a = IE.runAdAuction) || void 0 === a ? void 0 : a.call(IE, d.o.value), 2) : (d.C.l(d.m.value), f.return());
                        if (e = f.l)
                            d.C.j({
                                kind: 2,
                                Zd: e
                            });
                        else {
                            var g, h, k = null === (h = null === (g = d.B.value) || void 0 === g ? void 0 : M(g, Fx, 5)) || void 0 === h ? void 0 : pf(h, 2);
                            k && Rm('https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner&qqid=' + encodeURIComponent(k));
                            d.C.l(d.m.value);
                        }
                        mi(f);
                    });
                });
            };
            JE.prototype.G = function () {
                this.C.l(this.m.value);
            };
            var KE = bi(['onmessage=function(e){var b=e.data.a;if(b>0){var t=performance.now();while(t+b>performance.now());}postMessage(b);};postMessage(-1)']), LE = KE;
            if (!Array.isArray(LE) || !Array.isArray(LE.raw) || 1 !== LE.length)
                throw new TypeError('safeScript is a template literal tag function that only accepts template literals without expressions. For example, safeScript`foo`;');
            var Od = Xa(LE[0]);
            var ME = function (a, b) {
                Y.call(this, 839);
                this.C = this.l();
                this.o = V(this, a);
                this.m = U(this, b);
            };
            _.N(ME, Y);
            ME.prototype.j = function () {
                var a, b, c;
                return A(this, function e() {
                    var f = this, g, h, k, l, m, n, p, t, u, y, z, K, Q, S, X, ua, ja, xa, nb;
                    return B(e, function (gb) {
                        if (1 == gb.j) {
                            g = f;
                            if (_.v(lp) || !Gt(f.o))
                                return Dt(f.C), gb.return();
                            h = f.o.value;
                            k = new yy(h);
                            l = M(h, kx, 3);
                            m = bh(l);
                            n = [];
                            p = null !== (a = null === l || void 0 === l ? void 0 : Xg(l, 8)) && void 0 !== a ? a : 0;
                            t = null !== (b = null === l || void 0 === l ? void 0 : Xg(l, 6)) && void 0 !== b ? b : 0;
                            u = null !== (c = null === l || void 0 === l ? void 0 : Xg(l, 9)) && void 0 !== c ? c : 0;
                            y = null === l || void 0 === l ? void 0 : Xg(l, 7);
                            z = null === l || void 0 === l ? void 0 : Zk(l, 10);
                            K = !z || !$c(f.m.value) || !Wg(f.m.value.getBoundingClientRect());
                            z && mc('gpt_td_worker_hidden_experiment', function (vb) {
                                q(vb, 'is_hidden', K);
                            }, {});
                            if (!(0 <= t && y) || zj()) {
                                n = 1 === p ? Nd(k, m, Dy) : Nd(k, m, Cy);
                                gb.j = 2;
                                return;
                            }
                            if (!K) {
                                gb.j = 2;
                                return;
                            }
                            Q = [];
                            S = Pd();
                            X = [];
                            ua = 1 + u;
                            ja = {};
                            for (xa = 0; xa < ua; ja = { kb: ja.kb }, xa++)
                                ja.kb = new Worker(eb(S), void 0), Q.push(ja.kb), X.push(new D.Promise(function (vb) {
                                    return function (ob) {
                                        var Gd = (0, J.T)(vv(g, g.id, vb.kb, 'message', function (id) {
                                            if (0 <= id.data) {
                                                id = _.G(m);
                                                for (var kn = id.next(); !kn.done; kn = id.next())
                                                    n.push({
                                                        ad: kn.value,
                                                        Td: 1
                                                    });
                                                Gd();
                                                ob();
                                            } else
                                                vb.kb.postMessage({ a: t });
                                        }));
                                    };
                                }(ja)));
                            mc('gpt_td_worker_event', function (vb) {
                                q(vb, 'wait_ms', t);
                                q(vb, 'timeout_ms', y);
                            }, {});
                            nb = performance.now();
                            return C(gb, D.Promise.race([
                                D.Promise.all(X),
                                Em(y)
                            ]).then(function (vb) {
                                for (var ob = _.G(Q), Gd = ob.next(); !Gd.done; Gd = ob.next())
                                    Gd.value.terminate();
                                mc('timeout' === vb ? 'gpt_td_worker_timeout' : 'gpt_td_worker_time', function (id) {
                                    q(id, 'wait_ms', t);
                                    q(id, 'timeout_ms', y);
                                    q(id, 'duration_ms', Math.round(performance.now() - nb));
                                }, {});
                            }), 2);
                        }
                        f.C.j(n);
                        mi(gb);
                    });
                });
            };
            ME.prototype.G = function () {
                Dt(this.C);
            };
            var NE = function (a, b) {
                    var c = this;
                    this.slotId = a;
                    this.ia = b;
                    this.j = null;
                    this.l = _.Li(function () {
                        c.ia.dispatchEvent('impressionViewable', 715, new mw(c.slotId, 'publisher_ads'));
                    });
                    this.A = Mi(function () {
                        return void c.ia.dispatchEvent('slotVisibilityChanged', 716, new nw(c.slotId, 'publisher_ads', c.j));
                    }, 200);
                }, OE = function (a, b, c) {
                    b && a.l();
                    void 0 === c || isNaN(c) || (c = Math.floor(c), a.j !== c && (a.j = c, a.A()));
                };
            var QE = function (a, b, c, d, e, f, g, h, k, l, m, n, p) {
                for (var t = [], u = 12; u < arguments.length; ++u)
                    t[u - 12] = arguments[u];
                Y.call(this, 814);
                this.slotId = a;
                this.L = b;
                this.R = c;
                this.F = d;
                this.da = e;
                this.o = f;
                this.m = g;
                this.ia = h;
                this.Z = k;
                this.J = l;
                this.metadata = m;
                this.B = U(this, n);
                t = _.G(t);
                for (u = t.next(); !u.done; u = t.next())
                    Mt(this, u.value);
                Tq(this.slotId, Zq, PE);
            };
            _.N(QE, Y);
            QE.prototype.j = function () {
                var a = this.L, b = a.U, c = this.slotId.j, d = a.P[c];
                a = new ne();
                _.Pq(this, a);
                if (this.F || this.B.value) {
                    var e = new fE(this.slotId, this.L, this.R, Kb.N(), this.J, this.Z, this.metadata.B);
                    W(a, e);
                } else {
                    var f = kd(d), g = Fs(!0, this.J);
                    e = new aE(this.J);
                    W(a, e);
                    var h = new WD(d, this.metadata.Ga, this.metadata.Pa, this.metadata.K, this.metadata.Ua);
                    W(a, h);
                    var k = new Ct();
                    k.j(this.da);
                    var l = new It();
                    l.notify();
                    l = new TC(this.J.top, k, l);
                    W(a, l);
                    k = new cE(Ib(this.slotId.getAdUnitPath()), this.metadata.va, l.C);
                    W(a, k);
                    var m = new kE();
                    W(a, m);
                    k = new YD(f, g.height, this.metadata.O, h.F);
                    W(a, k);
                    c = new BE(this.slotId, Vc(this.slotId, this.Z), c, Xv(this.slotId), this.Z, f, this.R, h.m, k.C);
                    W(a, c);
                    var n = new iB(h.o, this.metadata.m, this.metadata.o, this.metadata.I, this.metadata.ga);
                    W(a, n);
                    var p = new uE(b, d, this.J, this.metadata.m, this.metadata.o, this.metadata.ga);
                    W(a, p);
                    var t = new nE(M(b, Tu, 5), this.metadata.Na);
                    W(a, t);
                    n = new xE(this.slotId.getAdUnitPath(), d, g.width, window, this.metadata.na, h.m, k.C, n.m, c.C);
                    W(a, n);
                    k = new ZD(this.slotId, b, d, f, this.Z, this.R, c.C, p.C, n.m, this.metadata.F);
                    W(a, k);
                    var u = new EE(k.C);
                    W(a, u);
                    u = new rE(this.slotId, g, this.R, m.C, u.C, t.m);
                    W(a, u);
                    m = new bE(window, c.C);
                    W(a, m);
                    t = new oE(u.C, k.C, this.metadata.Oa, t.m);
                    W(a, t);
                    g = new UD(this.Z, this.slotId, d, g, this.metadata.F, c.C, k.C, n.m, n.B, m.C, this.metadata.B);
                    W(a, g);
                    m = new HE(this.metadata.aa);
                    W(a, m);
                    m = new JE(this.metadata.aa, m.C, n.F);
                    W(a, m);
                    p = new tE(p.C, m.C);
                    W(a, p);
                    d = new wE(b, d, p.C, this.metadata.m, this.metadata.I, this.metadata.Ma);
                    W(a, d);
                    u = new FE(this.J, this.metadata.oa, e.C);
                    W(a, u);
                    var y = new vE(this.slotId, this.L, this.R, this.da, this.o, this.metadata.I, this.metadata.ja);
                    W(a, y);
                    b = new GE(this.metadata.Ka, this.metadata.la);
                    W(a, b);
                    var z = new ME(this.metadata.La, k.C);
                    W(a, z);
                    var K = new eE(this.Z);
                    W(a, K);
                    b = new EC(f, this.metadata.O, this.metadata.W);
                    W(a, b);
                    h = new RD(this.slotId, this.R, this.L, this.ia, this.J, m.C, y.C, t.C, c.C, k.C, n.m, p.C, this.metadata.o, this.metadata.B, this.metadata.F, d.C, this.metadata.I, this.metadata.Ia, this.metadata.ca, this.metadata.ja, g.C, u.C, z.C, K.C, b.C, h.B);
                    W(a, h);
                    n = new zC(this.R, f, this.slotId, this.J, this.metadata.O, h.m, c.C, b.C);
                    W(a, n);
                    l = new BC(this.slotId, f, this.L.Za, this.metadata.W, h.m, c.C, l.C, b.C);
                    W(a, l);
                    l = new gB(this.slotId, this.J, this.metadata.m, h.m, h.o);
                    W(a, l);
                    l = new VD(this.J, this.slotId, qd(), this.metadata.ma, h.m);
                    W(a, l);
                    f = new PC(this.slotId, f, this.ia, this.J, h.m, c.C);
                    W(a, f);
                    var Q = new NE(this.slotId, this.ia);
                    f = function (S, X) {
                        return void OE(Q, S, X);
                    };
                    l = new hE(this.slotId, h.m, this.Z, this.ia);
                    W(a, l);
                    l = new qE(pu(this.R, this.slotId), this.m, this.metadata.m, h.m, f);
                    W(a, l);
                    e = new TD(pu(this.R, this.slotId), this.J.top, h.m, e.C);
                    W(a, e);
                    e = new cB(this.slotId, this.metadata.B, this.metadata.F, this.metadata.o, this.metadata.m, this.metadata.ca, h.m, k.C, h.o);
                    W(a, e);
                    _.Pq(a, new jB(f, this.slotId, this.metadata.o, this.metadata.m));
                    e = new gE(this.J, this.metadata.Ha, h.m, k.C, c.C);
                    W(a, e);
                }
                pe(a);
            };
            var PE = _.Li(function () {
                return void aw('gpt-first-ad-render');
            });
            var SE = function (a, b) {
                Y.call(this, 804);
                this.sa = b;
                this.$ = [];
                RE(this, function (c) {
                    return H(c, 4);
                });
                this.Ga = RE(this, function (c) {
                    return H(c, 6);
                });
                this.Pa = RE(this, function (c) {
                    return H(c, 7);
                });
                this.Ja = RE(this, function (c) {
                    return x(c, 8);
                });
                this.F = RE(this, function (c) {
                    return H(c, 10);
                });
                this.la = RE(this, function (c) {
                    return H(c, 15);
                });
                this.B = RE(this, function (c) {
                    return H(c, 34);
                });
                this.m = RE(this, function (c) {
                    return M(c, ax, 43);
                });
                this.o = RE(this, function (c) {
                    return M(c, Lx, 41);
                });
                this.I = RE(this, function (c) {
                    return x(c, 9);
                });
                this.ga = RE(this, function (c) {
                    return x(c, 12);
                });
                this.ma = RE(this, function (c) {
                    return M(c, Bs, 50);
                });
                this.W = RE(this, function (c) {
                    return M(c, Sw, 48);
                });
                this.O = RE(this, function (c) {
                    return M(c, Qw, 39);
                });
                this.na = RE(this, function (c) {
                    return H(c, 36);
                });
                this.Ma = RE(this, function (c) {
                    return x(c, 13);
                });
                this.Ia = RE(this, function (c) {
                    return x(c, 3);
                });
                this.ca = RE(this, function (c) {
                    return H(c, 49);
                });
                this.Na = RE(this, function (c) {
                    return H(c, 29);
                });
                this.Oa = RE(this, function (c) {
                    return H(c, 30);
                });
                this.Ha = RE(this, function (c) {
                    return M(c, cx, 51);
                });
                this.ja = RE(this, function (c) {
                    return x(c, 52);
                });
                this.oa = RE(this, function () {
                    return 'encrypted_url';
                });
                this.va = RE(this, function (c) {
                    return (c = M(c, $w, 54)) ? I(c, Yw, 1).filter(function (d) {
                        H(d, 1) || Rd(32, '');
                        return !!H(d, 1);
                    }).map(function (d) {
                        var e = H(d, 2);
                        return {
                            xa: (0, J.T)(H(d, 1)),
                            Jc: e && (_.r(e, 'startsWith').call(e, window.location.protocol) || _.r(e, 'startsWith').call(e, 'data:') && 40 >= e.length) ? $a(e) : void 0
                        };
                    }) : [];
                });
                RE(this, function (c) {
                    return H(c, 23);
                });
                RE(this, function (c) {
                    return I(c, Cs, 14);
                });
                RE(this, function (c) {
                    return x(c, 11);
                });
                RE(this, function (c) {
                    return H(c, 33);
                });
                RE(this, function (c) {
                    return H(c, 27);
                });
                this.K = this.l();
                this.Ka = RE(this, function (c) {
                    return M(c, ex, 57);
                });
                this.La = RE(this, function (c) {
                    return M(c, Ax, 55);
                });
                this.aa = RE(this, function (c) {
                    return M(c, Hx, 58);
                });
                this.Ua = RE(this, function (c) {
                    var d, e;
                    return null !== (e = null === (d = M(c, bx, 56)) || void 0 === d ? void 0 : H(d, 1)) && void 0 !== e ? e : null;
                });
                this.Y = U(this, a);
            };
            _.N(SE, Y);
            var RE = function (a, b) {
                var c = a.l();
                a.$.push({
                    C: c,
                    cc: b
                });
                return c;
            };
            SE.prototype.j = function () {
                for (var a = _.G(this.$), b = a.next(); !b.done; b = a.next()) {
                    b = b.value;
                    var c = b.cc;
                    b.C.l(c(this.Y.value));
                }
                0 === this.sa.kind || 1 === this.sa.kind && this.sa.url ? this.K.j(this.sa) : this.K.j({
                    kind: 0,
                    ra: H(this.Y.value, 4) || ''
                });
            };
            var TE = function (a, b) {
                Y.call(this, 822);
                this.slotId = a;
                this.m = Kt(this);
                this.o = U(this, b);
            };
            _.N(TE, Y);
            TE.prototype.j = function () {
                var a, b = null !== (a = H(this.o.value, 23)) && void 0 !== a ? a : [], c = _.wh(Fv);
                b = _.G(b);
                for (var d = b.next(); !d.done; d = b.next()) {
                    d = d.value;
                    Gv(c, d);
                    var e = this.slotId;
                    c.j[d] = c.j[d] || new D.Set();
                    c.j[d].add(e);
                }
                this.m.notify();
            };
            var UE = function (a, b) {
                Y.call(this, 803);
                this.m = a;
                this.slotId = b;
                this.C = this.l();
            };
            _.N(UE, Y);
            UE.prototype.j = function () {
                var a, b = JSON.parse(this.m), c = b ? Re(b, Ii) : void 0;
                if (!c)
                    throw Error('missing ad unit path');
                if (null === b || void 0 === b || !b[c])
                    throw Error('invalid ad unit path: ' + c);
                b = b[c];
                if (!Array.isArray(b))
                    throw Error('dictionary not an array: ' + this.m);
                b = new Kx(b.slice());
                c = _.G(null !== (a = H(b, 27)) && void 0 !== a ? a : []);
                for (var d = c.next(); !d.done; d = c.next())
                    d = d.value, _.wh(uq).j(d);
                wq(4);
                this.slotId.dispatchEvent(Wq, 800, b);
                this.C.j(b);
            };
            var VE = function (a, b, c, d) {
                Y.call(this, 823);
                this.slotId = a;
                this.L = b;
                this.R = c;
                this.m = Kt(this);
                this.o = U(this, d);
            };
            _.N(VE, Y);
            VE.prototype.j = function () {
                var a = this, b, c = this.L.P[this.slotId.j];
                try {
                    if (c) {
                        var d = null !== (b = M(this.o.value, Bs, 50)) && void 0 !== b ? b : null;
                        Vv(c, d, !!x(this.o.value, 11)) && (_.mu(this.R, this.slotId), Uv(d) && iu(this.R, this.slotId, function () {
                            _.nu(a.R, a.slotId);
                        }));
                    }
                } finally {
                    this.m.notify();
                }
            };
            var WE = function (a, b, c) {
                Y.call(this, 821);
                this.da = a;
                this.o = b;
                this.m = Kt(this);
                this.B = U(this, c);
            };
            _.N(WE, Y);
            WE.prototype.j = function () {
                var a, b = null === (a = I(this.B.value, Cs, 14)) || void 0 === a ? void 0 : a[0];
                b && nt(this.o, b, this.da);
                this.m.notify();
            };
            var XE = function () {
                    this.tb = 0;
                }, ZE = function (a, b, c, d, e, f, g, h, k, l, m, n, p, t) {
                    var u, y, z = new ne(), K = h.U, Q = new wD(window);
                    W(z, Q);
                    b = new rD(d, b, m, h, Cc(), g, window);
                    W(z, b);
                    var S = new LD(window);
                    W(z, S);
                    var X = new sD(c);
                    W(z, X);
                    var ua = new MD(!!x(g, 5));
                    W(z, ua);
                    m = new tD(d, m, c, k, g, h, n, p, Q.m, S.C, b.m, X.C, ua.C);
                    W(z, m);
                    d = new uD(c, h, k, l.getOseId(), m.m, b.m);
                    W(z, d);
                    n = !(null !== (y = null === (u = Yu(K)) || void 0 === u ? void 0 : x(u, 9)) && void 0 !== y && y) && !!x(g, 5);
                    p = function (ja, xa, nb, gb) {
                        YE(a, c, l, g, k, h, ja, !1, xa, nb, t, z, gb);
                    };
                    Q = function (ja, xa) {
                        YE(a, c, l, g, k, h, ja, !0, '', {
                            kind: 0,
                            ra: ''
                        }, t, z, xa);
                    };
                    S = new KD(h, Pb(), String(zb(window)), m.m, b.m);
                    W(z, S);
                    ++a.tb;
                    'wbn' === e ? (e = new qD(e, h, 'googletag.wbn' + a.tb, (0, J.T)(f), m.m, S.m, b.m, p, Q, n), f = e.m, W(z, e)) : (m = new HD(e, h, m.m, S.m, b.m, p, Q, n), f = m.o, W(z, m), e = new DD(m.o, e, K.ya(), k, g, _.wh(QC), window), W(z, e), W(z, new CD(h, m.o, b.m)));
                    b = new BD(h, t, f, d.m, b.m);
                    W(z, b);
                    pe(z);
                    return f.promise;
                }, YE = function (a, b, c, d, e, f, g, h, k, l, m, n, p) {
                    A(a, function u() {
                        var y, z, K, Q, S, X, ua, ja;
                        return B(u, function (xa) {
                            if (1 == xa.j) {
                                y = new ne();
                                z = new UE(k, g);
                                W(y, z);
                                K = new WE(d, e, z.C);
                                W(y, K);
                                Q = new TE(g, z.C);
                                W(y, Q);
                                S = new VE(g, f, b, z.C);
                                W(y, S);
                                X = new SE(z.C, l);
                                W(y, X);
                                ua = h || Ob('google_norender');
                                ja = new QE(g, f, b, ua, d, e, c, m, document, window, X, X.Ja, K.m, Q.m, S.m);
                                W(y, ja);
                                ru(b, g, y);
                                _.Hg(g, function () {
                                    su(b, g);
                                });
                                pe(y);
                                if (n && p) {
                                    n.wa();
                                    xa.j = 2;
                                    return;
                                }
                                return C(xa, D.Promise.all([
                                    K.m.promise,
                                    Q.m.promise,
                                    S.m.promise
                                ]), 2);
                            }
                            return xa.return();
                        });
                    });
                }, $E = function (a, b, c) {
                    return A(a, function e() {
                        var f, g, h;
                        return B(e, function (k) {
                            if (1 == k.j)
                                return f = new ne(), g = new UE(c, b), W(f, g), pe(f), C(k, g.C.promise, 2);
                            h = k.l;
                            f.wa();
                            return k.return(h);
                        });
                    });
                }, aF = function (a, b, c, d, e) {
                    return A(a, function g() {
                        var h, k, l, m, n;
                        return B(g, function (p) {
                            return 1 == p.j ? (h = new ne(), k = new nD(b), W(h, k), l = new zD(d.P, k.o), W(h, l), m = new xD(c, Nv(d.U), e, l.m), W(h, m), n = new AD(c, d, document, l.o), W(h, n), pe(h), C(p, n.m, 2)) : p.return(m.m.promise);
                        });
                    });
                }, bF = function (a, b, c, d) {
                    return A(a, function f() {
                        var g, h;
                        return B(f, function (k) {
                            g = new ne();
                            h = new kD(c, window, b, d);
                            W(g, h);
                            pe(g);
                            return k.return(h.m.promise);
                        });
                    });
                };
            var dF = function (a, b) {
                Y.call(this, 700);
                this.Pa = a;
                this.sa = b;
                this.Y = [];
                this.va = cF(this, function (c) {
                    return H(c, 6);
                });
                this.Na = cF(this, function (c) {
                    return H(c, 7);
                });
                cF(this, function (c) {
                    return x(c, 8);
                });
                this.B = cF(this, function (c) {
                    return H(c, 10);
                });
                this.na = cF(this, function (c) {
                    return H(c, 15);
                });
                this.K = cF(this, function (c) {
                    return H(c, 34);
                });
                this.m = cF(this, function (c) {
                    return M(c, ax, 43);
                });
                this.o = cF(this, function (c) {
                    return M(c, Lx, 41);
                });
                this.F = cF(this, function (c) {
                    return x(c, 9);
                });
                this.ca = cF(this, function (c) {
                    return x(c, 12);
                });
                this.ja = cF(this, function (c) {
                    return M(c, Bs, 50);
                });
                this.W = cF(this, function (c) {
                    return M(c, Sw, 48);
                });
                this.O = cF(this, function (c) {
                    return M(c, Qw, 39);
                });
                this.ma = cF(this, function (c) {
                    return H(c, 36);
                });
                this.Ka = cF(this, function (c) {
                    return x(c, 13);
                });
                this.Ha = cF(this, function (c) {
                    return x(c, 3);
                });
                this.aa = cF(this, function (c) {
                    return H(c, 49);
                });
                this.La = cF(this, function (c) {
                    return H(c, 29);
                });
                this.Ma = cF(this, function (c) {
                    return H(c, 30);
                });
                this.Ga = cF(this, function (c) {
                    return M(c, cx, 51);
                });
                this.ga = cF(this, function (c) {
                    return x(c, 52);
                });
                this.la = cF(this, function () {
                    return 'encrypted_url';
                });
                this.oa = cF(this, function (c) {
                    return (c = M(c, $w, 54)) ? I(c, Yw, 1).filter(function (d) {
                        H(d, 1) || Rd(32, '');
                        return !!H(d, 1);
                    }).map(function (d) {
                        var e = H(d, 2);
                        return {
                            xa: (0, J.T)(H(d, 1)),
                            Jc: e && (_.r(e, 'startsWith').call(e, window.location.protocol) || _.r(e, 'startsWith').call(e, 'data:') && 40 >= e.length) ? $a(e) : void 0
                        };
                    }) : [];
                });
                this.Ia = cF(this, function (c) {
                    return M(c, ex, 57);
                });
                this.Ja = cF(this, function (c) {
                    return M(c, Ax, 55);
                });
                this.$ = cF(this, function (c) {
                    return M(c, Hx, 58);
                });
                this.Oa = cF(this, function (c) {
                    var d, e;
                    return null !== (e = null === (d = M(c, bx, 56)) || void 0 === d ? void 0 : H(d, 1)) && void 0 !== e ? e : null;
                });
                this.I = this.l();
            };
            _.N(dF, Y);
            var cF = function (a, b) {
                var c = Y.prototype.l.call(a);
                a.Y.push({
                    C: c,
                    cc: b
                });
                return c;
            };
            dF.prototype.j = function () {
                for (var a = this.Pa, b = _.G(this.Y), c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    var d = c.cc;
                    c.C.l(d(a));
                }
                0 === this.sa.kind || 1 === this.sa.kind && this.sa.url ? this.I.j(this.sa) : this.I.j({
                    kind: 0,
                    ra: H(a, 4) || ''
                });
            };
            var eF = function () {
                    this.j = new D.Map();
                }, fF = function (a, b) {
                    var c;
                    b && (null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.wa(), a.j.delete(b));
                }, hF = function (a, b, c, d, e, f, g, h, k, l, m) {
                    fF(a, b);
                    Tq(b, Zq, gF);
                    var n = new ne(), p = Fs(!0, window), t = e.U, u = e.P[b.j], y = new aE(window);
                    W(n, y);
                    f = new dF(f, g);
                    W(n, f);
                    var z = new WD(u, f.va, f.Na, f.I, f.Oa);
                    W(n, z);
                    g = new Ct();
                    g.j(k);
                    var K = new It();
                    K.notify();
                    var Q = new TC(window.top, g, K);
                    W(n, Q);
                    g = new cE(Ib(b.getAdUnitPath()), f.oa, Q.C);
                    W(n, g);
                    var S = new kE();
                    W(n, S);
                    K = new YD(kd(u), p.height, f.O, z.F);
                    W(n, K);
                    g = new BE(b, Vc(b, h), b.j, Xv(b), h, kd(u), c, z.m, K.C);
                    W(n, g);
                    var X = new iB(z.o, f.m, f.o, f.F, f.ca);
                    W(n, X);
                    var ua = new uE(t, u, window, f.m, f.o, f.ca);
                    W(n, ua);
                    var ja = new nE(M(t, Tu, 5), f.La);
                    W(n, ja);
                    X = new xE(b.getAdUnitPath(), u, p.width, window, f.ma, z.m, K.C, X.m, g.C);
                    W(n, X);
                    K = new ZD(b, t, u, kd(u), h, c, g.C, ua.C, X.m, f.B);
                    W(n, K);
                    var xa = new EE(K.C);
                    W(n, xa);
                    xa = new rE(b, p, c, S.C, xa.C, ja.m);
                    W(n, xa);
                    S = new bE(window, g.C);
                    W(n, S);
                    ja = new oE(xa.C, K.C, f.Ma, ja.m);
                    W(n, ja);
                    p = new UD(h, b, u, p, f.B, g.C, K.C, X.m, X.B, S.C, f.K);
                    W(n, p);
                    S = new HE(f.$);
                    W(n, S);
                    S = new JE(f.$, S.C, X.F);
                    W(n, S);
                    ua = new tE(ua.C, S.C);
                    W(n, ua);
                    t = new wE(t, u, ua.C, f.m, f.F, f.Ka);
                    W(n, t);
                    xa = new FE(window, f.la, y.C);
                    W(n, xa);
                    l = new vE(b, e, c, k, l, f.F, f.ga);
                    W(n, l);
                    k = new GE(f.Ia, f.na);
                    W(n, k);
                    var nb = new ME(f.Ja, K.C);
                    W(n, nb);
                    var gb = new eE(h);
                    W(n, gb);
                    k = new EC(kd(u), f.O, f.W);
                    W(n, k);
                    z = new RD(b, c, e, m, window, S.C, l.C, ja.C, g.C, K.C, X.m, ua.C, f.o, f.K, f.B, t.C, f.F, f.Ha, f.aa, f.ga, p.C, xa.C, nb.C, gb.C, k.C, z.B);
                    W(n, z);
                    l = new zC(c, kd(u), b, window, f.O, z.m, g.C, k.C);
                    W(n, l);
                    e = new BC(b, kd(u), e.Za, f.W, z.m, g.C, Q.C, k.C);
                    W(n, e);
                    e = new gB(b, window, f.m, z.m, z.o);
                    W(n, e);
                    e = new VD(window, b, qd(), f.ja, z.m);
                    W(n, e);
                    u = new PC(b, kd(u), m, window, z.m, g.C);
                    W(n, u);
                    var vb = new NE(b, m);
                    u = function (ob, Gd) {
                        return void OE(vb, ob, Gd);
                    };
                    h = new hE(b, z.m, h, m);
                    W(n, h);
                    d = new qE(pu(c, b), d, f.m, z.m, u);
                    W(n, d);
                    c = new TD(pu(c, b), window.top, z.m, y.C);
                    W(n, c);
                    c = new cB(b, f.K, f.B, f.o, f.m, f.aa, z.m, K.C, z.o);
                    W(n, c);
                    _.Pq(n, new jB(u, b, f.o, f.m));
                    c = new gE(window, f.Ga, z.m, K.C, g.C);
                    W(n, c);
                    a.j.set(b, n);
                    _.Hg(b, function () {
                        return void fF(a, b);
                    });
                    pe(n);
                }, gF = _.Li(function () {
                    return void aw('gpt-first-ad-render');
                });
            var iF = function (a, b, c) {
                    const $___old_19fd18d53454d5b3 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                    try {
                        if ($___old_19fd18d53454d5b3)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_5de28d8956bfc0f9.XMLHttpRequest));
                        return function () {
                            this.url = a;
                            this.l = b;
                            this.withCredentials = c;
                            this.m = 0;
                            this.A = !1;
                            this.j = new XMLHttpRequest();
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_19fd18d53454d5b3)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_19fd18d53454d5b3));
                    }
                }, lF = function (a) {
                    a.j.open('GET', a.url);
                    a.j.withCredentials = a.withCredentials;
                    LA(a.j);
                    a.j.onreadystatechange = function () {
                        jF(a, !1);
                    };
                    a.j.onload = function () {
                        jF(a, !0);
                    };
                    a.j.onerror = function () {
                        kF(a.l, Error('XHR error'));
                    };
                    a.j.send();
                }, jF = function (a, b) {
                    try {
                        if (3 === a.j.readyState || 4 === a.j.readyState)
                            if (300 <= a.j.status || 200 > a.j.status && _.v(eo))
                                a.A || kF(a.l, Error('xhr_err-' + a.j.status)), a.A = !0;
                            else {
                                var c = a.j.responseText.substr(a.m);
                                if (c) {
                                    var d = a.l;
                                    if (c)
                                        if (1 !== d.state && 2 !== d.state)
                                            kF(d, Error('state err: (' + ([
                                                d.state,
                                                d.j.length
                                            ].join() + ')')));
                                        else {
                                            d.j && (c = d.j + c);
                                            var e = 0, f = !1;
                                            do {
                                                var g = c.indexOf('\n', e);
                                                f = -1 !== g;
                                                if (!f)
                                                    break;
                                                var h = d, k = c.substr(e, g - e);
                                                if (1 === h.state)
                                                    h.l = k, ++h.A, h.state = 2;
                                                else {
                                                    try {
                                                        h.H(h.A, h.l, {
                                                            kind: 0,
                                                            ra: xm(k)
                                                        }), h.l = '';
                                                    } catch (m) {
                                                    }
                                                    h.state = 1;
                                                }
                                                e = g + 1;
                                            } while (f && e < c.length);
                                            d.j = c.substr(e);
                                        }
                                }
                                a.m = a.j.responseText.length;
                                if (b && 4 === a.j.readyState) {
                                    var l = a.l;
                                    1 !== l.state || l.j ? kF(l, Error('state err (' + ([
                                        l.state,
                                        l.j.length
                                    ].join() + ')'))) : (l.state = 3, l.m());
                                }
                            }
                    } catch (m) {
                        kF(a.l, m);
                    }
                }, mF = function (a, b, c) {
                    lF(new iF(a, b, void 0 === c ? !0 : c));
                };
            var nF = function (a, b, c) {
                    this.H = a;
                    this.D = b;
                    this.m = c;
                    this.l = '';
                    this.A = -1;
                    this.state = 1;
                    this.j = '';
                }, kF = function (a, b) {
                    a.state = 4;
                    try {
                        a.D(b);
                    } catch (c) {
                    }
                };
            var oF = function (a, b) {
                    a.length && (a = a[0], dq(Kb.N(), '3', H(b.P[a.j], 20)));
                }, pF = function (a) {
                    a = a instanceof Error ? a : Error();
                    a.message = a.message || 'strm_err';
                    Vb(289, a, !0);
                }, qF = function (a, b) {
                    if (_.v(zo))
                        return !1;
                    a = x(a, 11);
                    null == a && (a = x(b, 10));
                    return !!a;
                }, rF = function (a) {
                    var b = Jg(), c = a.replace('googletag.', '');
                    return new D.Promise(function (d) {
                        Object.defineProperty(b, c, {
                            value: function (e, f) {
                                var g = d;
                                d = null;
                                g && g({
                                    Wb: e,
                                    lc: f
                                });
                            },
                            writable: !1,
                            enumerable: !1
                        });
                    });
                }, sF = null, tF = function (a) {
                    var b = gu.N();
                    var c = sF = sF || new lt();
                    this.j = b;
                    this.l = c;
                    this.F = a;
                    this.fa = _.wh(Fv);
                    this.A = new D.Map();
                    this.B = dg(this.B);
                    this.D = kc(291, this.D);
                    this.K = Ob('google_nofetch');
                    this.O = Ob('google_norender');
                    this.H = new XA();
                    this.ba = 0;
                    this.G = {};
                    this.o = {};
                    this.I = new eF();
                    this.m = new XE();
                    this.V = _.Li(function () {
                        return void aw('gpt-first-ad-request');
                    });
                }, uF = function (a, b, c, d, e) {
                    if (e = e.P[b.j])
                        null != H(d, 23) && H(d, 23).forEach(function (f) {
                            Gv(a.fa, f);
                            var g = a.fa;
                            g.j[f] = g.j[f] || new D.Set();
                            g.j[f].add(b);
                        }), I(d, Cs, 14).length && nt(a.l, I(d, Cs, 14)[0], c), Vv(e, M(d, Bs, 50), !!x(d, 11)) && (_.mu(a.j, b), Uv(M(d, Bs, 50)) && iu(a.j, b, function () {
                            _.nu(a.j, b);
                        }));
                };
            tF.prototype.B = function (a, b) {
                var c = this;
                b = void 0 === b ? !1 : b;
                return _.F.IntersectionObserver ? new _.F.IntersectionObserver(function (d, e) {
                    return c.D(d, e, b);
                }, { rootMargin: a }) : new Sg(function (d, e) {
                    return c.D(d, e, b);
                }, { rootMargin: a });
            };
            tF.prototype.D = function (a, b, c) {
                var d = this;
                c = void 0 === c ? !1 : c;
                a.forEach(function (e) {
                    if (c || !(0 >= e.intersectionRatio)) {
                        b.unobserve(e.target);
                        e = e.target.id;
                        var f = d.A.get(e);
                        f && (f.Yb(), d.A.delete(e));
                    }
                });
            };
            var vF = function (a, b, c, d, e, f) {
                    var g, h, k, l, m, n, p, t;
                    ti(function (u) {
                        if (1 == u.j)
                            return g = _.Cl(document, 'LINK'), pD(g, a), g.resources.add($i(c.l)), g.crossOrigin = b ? 'use-credentials' : 'anonymous', h = document.createElement('script'), wd(h, c.l), document.head.appendChild(g), document.head.appendChild(h), C(u, rF(c.H), 2);
                        k = u.l;
                        l = k.Wb;
                        m = k.lc;
                        if (l.length !== m.length)
                            return e(Error('Received ' + l.length + ' but ' + m.length + ' metadatas')), u.return();
                        for (n = 0; n < l.length; n++)
                            p = l[n], t = m[n], p && g.resources.add(p), d(n, t, {
                                kind: 1,
                                url: p
                            });
                        f();
                        mi(u);
                    });
                }, wF = function (a, b, c, d) {
                    var e = new $A();
                    a = ++a.ba;
                    e.I = a;
                    if ((d = Nv(d.U)) && _.v(op) || !d && _.v(np)) {
                        e.j = 'wbn';
                        for (var f = Array(36), g = 0, h, k = 0; 36 > k; k++)
                            8 == k || 13 == k || 18 == k || 23 == k ? f[k] = '-' : 14 == k ? f[k] = '4' : (2 >= g && (g = 33554432 + 16777216 * Math.random() | 0), h = g & 15, g >>= 4, f[k] = oD[19 == k ? h & 3 | 8 : h]);
                        e.l = aj('urn:uuid:' + f.join('').toLowerCase());
                        e.H = 'googletag.wbn' + a;
                    } else
                        e.j = 'ldjh';
                    e.o = d ? 'fifs' : 'fif';
                    e.Ca = c.Ca;
                    e.Ya = c.Ya || NaN;
                    e.Xa = c.Xa || NaN;
                    e.X = b;
                    return e;
                }, xF = function (a, b, c, d) {
                    var e = b.X, f = a.j, g = a.l, h = Nv(d.U), k = a.H.getOseId(), l = ou(a.j, b.X);
                    a = new ne();
                    var m = new wD(window);
                    W(a, m);
                    var n = new LD(window);
                    W(a, n);
                    e = new rD(b, e, h, d, Cc(), c, window);
                    W(a, e);
                    var p = new sD(f);
                    W(a, p);
                    var t = new MD(!!x(c, 5));
                    W(a, t);
                    b = new tD(b, h, f, g, c, d, k, l, m.m, n.C, e.m, p.C, t.C);
                    W(a, b);
                    pe(a);
                    return b.m.promise;
                }, yF = function (a, b) {
                    var c = !_.v(Of);
                    aB(b, Bb(), a.H.getOseId(), ou(a.j, b.X), c ? az() : '', c ? bz() : '', c ? cz() : '');
                }, BF = function (a, b, c, d) {
                    return zF(a, b, d).then(kc(750, function () {
                        return AF(a, b, c, d);
                    }));
                }, zF = function (a, b, c) {
                    b = b.X;
                    c = M(c.U, Tu, 5) || new Tu();
                    c = rg(c);
                    if (null == c || !b.every(function (g) {
                            return $c(Vc(g));
                        }))
                        return D.Promise.resolve();
                    c = a.B(c + '%');
                    var d = new De(), e = {};
                    b = _.G(b);
                    for (var f = b.next(); !f.done; e = {
                            hb: e.hb,
                            Ab: e.Ab
                        }, f = b.next())
                        f = f.value, e.Ab = f.j, e.hb = Vc(f), e.hb && (a.A.set(e.Ab, {
                            Yb: function () {
                                return void d.resolve();
                            },
                            Jd: c
                        }), c.observe(e.hb), ju(a.j, f, function (g) {
                            return function () {
                                CF(a, g.hb, g.Ab);
                            };
                        }(e)));
                    return d.promise;
                }, AF = function (a, b, c, d) {
                    var e = b.X;
                    if (e.length)
                        return a.A.get(e[0].j) && e.forEach(function (f) {
                            var g = f.j;
                            f = Vc(f);
                            CF(a, f, g);
                        }), _.v(jo) ? ZE(a.m, b.X, a.j, b, b.j, b.l, c, d, a.l, a.H, Nv(d.U), a.H.getOseId(), ou(a.j, b.X), a.F) : xF(a, b, c, d).then(function (f) {
                            if (f && (DF(a, f, b, c, d), dv(b.X), 'wbn' !== b.j && (f = d.U.ya(), f = !_.v(cp) && (!f || f && (!xf(f, 4) || !x(f, 4))), SC(_.wh(QC), window, Rv(a.l, c)), f && SC(_.wh(QC), window)), _.v(po))) {
                                f = _.G(b.X);
                                for (var g = f.next(); !g.done; g = f.next()) {
                                    var h = void 0;
                                    switch (null == (h = d.P[g.value.j]) ? void 0 : kd(h)) {
                                    case 2:
                                    case 3:
                                    case 5:
                                        _.wC.N().load(_.DC);
                                    }
                                }
                            }
                        });
                };
            tF.prototype.refresh = function (a, b, c) {
                var d = this;
                aF(this.m, a, this.j, c, this.K).then(kc(872, function (e) {
                    if (null != e && e.length) {
                        e = _.G(e);
                        for (var f = e.next(); !f.done; f = e.next())
                            bF(d.m, f.value, c, d.l).then(kc(907, function (g) {
                                if (g) {
                                    var h = g.da;
                                    g = wF(d, g.X, b, c);
                                    _.v(io) ? EF(d, g, h, c, document) : FF(d, g, h, c);
                                }
                            }));
                    }
                }));
            };
            var GF = function (a, b, c, d) {
                    var e = void 0 === e ? window : e;
                    for (var f = _.v(jo), g = _.G(b), h = g.next(); !h.done; h = g.next())
                        h = h.value, f ? su(a.j, h) : fF(a.I, h);
                    b = _.G(b);
                    for (h = b.next(); !h.done; h = b.next())
                        f = h.value, g = d[f.j], qF(g, c) && hg(f, e.document, g, c), qu(a.j, f);
                    return !0;
                }, CF = function (a, b, c) {
                    if (b) {
                        var d = a.A.get(c);
                        d && (d.Jd.unobserve(b), a.A.delete(c));
                    }
                }, EF = function (a, b, c, d, e) {
                    if (b.X.length) {
                        for (var f = _.G(b.X), g = f.next(); !g.done; g = f.next())
                            rB(e, g.value, d);
                        BF(a, b, c, d).then(kc(751, function () {
                            for (var h = _.G(b.X), k = h.next(); !k.done; k = h.next())
                                k = k.value, HF(a, k, d.U, d.P[k.j]);
                        }));
                    } else
                        D.Promise.resolve();
                }, FF = function (a, b, c, d) {
                    var e = document;
                    e = void 0 === e ? document : e;
                    var f = tc(c);
                    _.wh(cw).l = f;
                    dw(_.wh(cw), mt(a.l, c));
                    wq(20);
                    wq(2);
                    _.v(sp) || (ve(Jg(), f, function (g, h) {
                        Ub(g, h);
                        var k, l;
                        null == (k = window.console) || null == (l = k.error) || l.call(k, h);
                    }), we(Jg(), ng(qp).map(function (g) {
                        return { xa: g };
                    }), f, function (g, h) {
                        Ub(g, h);
                        var k, l;
                        null == (k = window.console) || null == (l = k.error) || l.call(k, h);
                    }));
                    EF(a, b, c, d, e);
                }, HF = function (a, b, c, d) {
                    var e = void 0 === e ? window : e;
                    qF(d, c) && !a.j.ab(b) && hg(b, e.document, d, c);
                }, DF = function (a, b, c, d, e) {
                    var f = void 0 === f ? _.F.document : f;
                    var g = void 0 === g ? pF : g;
                    var h = c.X, k = c.I;
                    a.o[k] = h.slice();
                    b = Lb(b);
                    oF(h, e);
                    var l, m, n = !(null != (m = null == (l = Yu(e.U)) ? void 0 : x(l, 9)) && m) && !!x(d, 5);
                    l = kc(646, function (p, t, u) {
                        var y, z = function () {
                                return IF(a, k, d, e, p, t, u, null != (y = c.G) ? y : '', f);
                            };
                        0 < p && _.v(Kn) ? setTimeout(z, 0) : z();
                    });
                    m = kc(647, function () {
                        var p = function () {
                            for (var t = a.o[k] || [], u = 0; u < t.length; ++u)
                                if (t[u]) {
                                    var y = new Kx();
                                    y = E(y, 8, !0);
                                    y = '{"empty":' + gl(y) + '}';
                                    IF(a, k, d, e, u, y, {
                                        kind: 0,
                                        ra: ''
                                    });
                                }
                            delete a.o[k];
                            t = window;
                            u = new Ph();
                            y = new Qh();
                            var z = String(zb(window));
                            y = Ab(y, 1, z, '');
                            Le(t, Nh(Oh(Fb(Db(u, 5, y), 4, 1), 2), Pb()));
                        };
                        _.v(Kn) ? setTimeout(p, 0) : p();
                    });
                    g = kc(289, g);
                    'wbn' === c.j ? vF(b, n, c, l, g, m) : mF(b, new nF(l, g, m), n);
                    a.V();
                    h = _.G(h);
                    for (g = h.next(); !g.done; g = h.next())
                        g = g.value, n = H(e.P[g.j], 20), l = kc(643, JF(a, g, b, e)), g.dispatchEvent(Yq, 808, {
                            Dc: l,
                            Rc: n
                        }), a.F.dispatchEvent('slotRequested', 705, new vw(g, 'publisher_ads'));
                }, JF = function (a, b, c, d) {
                    if (Nv(d.U)) {
                        var e = wF(a, [b], { Ca: 1 }, d);
                        yF(a, e);
                        var f = new xB([b], _.v(Rn), a.j, a.l, e, new kt(), d, !0);
                        return Wc(function () {
                            return Lb(AB(f));
                        });
                    }
                    return function () {
                        return c;
                    };
                }, IF = function (a, b, c, d, e, f, g, h, k) {
                    k = void 0 === k ? document : k;
                    var l, m, n, p, t, u, y;
                    return ti(function (z) {
                        switch (z.j) {
                        case 1:
                            l = a.o[b] || [];
                            m = l[e];
                            n = null;
                            if (_.v(fo)) {
                                if (!m)
                                    return Ub(646, Error('missing slot')), z.return();
                                l[e] = null;
                                t = H(d.P[m.j], 20);
                                a.G[b] || (a.G[b] = !0, dq(Kb.N(), '4', t));
                                return C(z, $E(a.m, m, f), 5);
                            }
                            l[e] = null;
                            return m ? C(z, $E(a.m, m, f), 4) : (Ub(646, Error('missing slot')), z.return());
                        case 4:
                            n = z.l;
                            p = H(d.P[m.j], 20);
                            a.G[b] || (a.G[b] = !0, dq(Kb.N(), '4', p));
                            z.j = 3;
                            break;
                        case 5:
                            n = z.l;
                        case 3:
                            if (!n)
                                return Ub(646, Error('invalid response: ' + f)), z.return();
                            uF(a, m, c, n, d);
                            if (m.A)
                                return z.return();
                            if (u = x(n, 8) || a.O) {
                                var K = k, Q = null != (y = H(n, 34)) ? y : '', S = Vc(m, K);
                                S && He(S, _.F, Q, !0);
                                dq(Kb.N(), '5', H(d.P[m.j], 20));
                                m.dispatchEvent(Xq, 801, {
                                    ac: null,
                                    isBackfill: !1
                                });
                                Q = _.v(co);
                                S = d.P[m.j];
                                var X = d.U;
                                if (_.lu(a.j, m)) {
                                    if (Q) {
                                        var ua = {};
                                        ua[m.j] = S;
                                        GF(a, [m], X, ua);
                                    }
                                    if (Q || !$v(m, K)) {
                                        var ja;
                                        (null != (ja = x(S, 10)) ? ja : x(X, 11)) && !_.v(yo) && hg(m, K, S, X);
                                    }
                                }
                                m.dispatchEvent(Zq, 825, {
                                    isEmpty: !0,
                                    slotContentChanged: Q
                                });
                            } else
                                hF(a.I, m, a.j, a.H, d, n, g, k, c, a.l, a.F);
                            mi(z);
                        }
                    });
                };
            var KF = function (a) {
                    this.pubads = a;
                    this.j = new D.Set();
                    this.l = {};
                }, LF = function (a, b, c) {
                    if (x(b.U, 4))
                        return [];
                    var d;
                    return !x(b.U, 6) || (null == (d = b.P[c.j]) ? 0 : x(d, 17)) ? (a.j.add(c), _.Hg(c, function () {
                        return void a.j.delete(c);
                    }), [c]) : a.pubads.j.filter(function (e) {
                        if (a.j.has(e))
                            return !1;
                        a.j.add(e);
                        _.Hg(e, function () {
                            return void a.j.delete(e);
                        });
                        return !0;
                    });
                };
            KF.prototype.display = function (a, b) {
                var c = LF(this, a, b);
                MF(this.pubads, c, a, { Ca: 1 });
                a = b.getAdUnitPath();
                if ((b = this.l[a]) && !_.v(Pn)) {
                    b = _.G(b);
                    for (c = b.next(); !c.done; c = b.next())
                        c = c.value, MF(this.pubads, c.X, c.L, c.Md);
                    delete this.l[a];
                }
            };
            KF.prototype.refresh = function (a, b, c) {
                var d = this, e = b[0], f, g = null != (f = null == e ? void 0 : e.j) ? f : '';
                if (_.v(Pn))
                    NF(this.pubads, Sr(g), e), Aw(this.pubads, kc(690, function () {
                        for (var h = {}, k = _.G(b), l = k.next(); !l.done; h = { ib: h.ib }, l = k.next())
                            h.ib = l.value, d.j.add(h.ib), _.Hg(h.ib, function (m) {
                                return function () {
                                    return void d.j.delete(m.ib);
                                };
                            }(h));
                        MF(d.pubads, b, a, c);
                    }));
                else if (this.pubads.l) {
                    e = {};
                    f = _.G(b);
                    for (g = f.next(); !g.done; e = { jb: e.jb }, g = f.next())
                        e.jb = g.value, this.j.add(e.jb), _.Hg(e.jb, function (h) {
                            return function () {
                                return void d.j.delete(h.jb);
                            };
                        }(e));
                    MF(this.pubads, b, a, c);
                } else
                    b.length && x(a.U, 6) ? (NF(this.pubads, Sr(g), e), e = e.getAdUnitPath(), f = this.l[e] || [], f.push({
                        X: b,
                        L: a,
                        Md: c
                    }), this.l[e] = f) : NF(this.pubads, Qr(g), e);
            };
            var xh = function () {
                yw.call(this);
                _.v(Ip) && new lC(this);
                this.o = new KF(this);
                this.G = new tF(this);
            };
            _.N(xh, yw);
            aa = xh.prototype;
            aa.display = function (a, b, c, d) {
                c = void 0 === c ? '' : c;
                d = void 0 === d ? '' : d;
                var e = '';
                if (c)
                    if (_.ia(c) && 1 == c.nodeType) {
                        var f = c;
                        e = f.id;
                    } else
                        e = c;
                zw(this);
                var g = sh(a, b, e), h = g.slotId;
                g = g.Wa;
                h && g ? (f && !e && (f.id = h.j), this.Fa(h, g), E(g, 7, d), Ew(f || h.j)) : this.log.M(th('PubAdsService.display', [
                    a,
                    b,
                    c
                ]));
            };
            aa.ic = function () {
                var a = this, b = Fh.N().j;
                if (x(b, 6) || _.v(Vo))
                    for (var c = _.G(this.j), d = c.next(); !d.done; d = c.next())
                        OF(this, d.value);
                PF(this, b);
                Tq(this, 'rewardedSlotClosed', function (e) {
                    var f = e.detail.slot;
                    e = _.r(a.j, 'find').call(a.j, function (g) {
                        return f === g.l;
                    });
                    GF(a.G, [e], Fh.N().j, Xe());
                });
                gh();
            };
            aa.getName = function () {
                return 'publisher_ads';
            };
            aa.Fa = function (a, b) {
                var c = this;
                x(b, 17) || OF(this, a);
                this.dispatchEvent($q, 724, {
                    xc: a.j,
                    P: b
                });
                Tq(a, Zq, function (d) {
                    var e = d.detail;
                    d = e.size;
                    var f = e.slotContentChanged, g = e.isEmpty;
                    e = new lw(a, 'publisher_ads');
                    g && (e.isEmpty = g);
                    f && (e.slotContentChanged = f);
                    f = a.l.getResponseInformation();
                    d && f && (e.size = [
                        d.width,
                        d.height
                    ], e.sourceAgnosticCreativeId = f.sourceAgnosticCreativeId, e.sourceAgnosticLineItemId = f.sourceAgnosticLineItemId, e.isBackfill = f.isBackfill, e.creativeId = f.creativeId, e.lineItemId = f.lineItemId, e.creativeTemplateId = f.creativeTemplateId, e.advertiserId = f.advertiserId, e.campaignId = f.campaignId, e.yieldGroupIds = f.yieldGroupIds, e.companyIds = f.companyIds);
                    c.dispatchEvent('slotRenderEnded', 708, e);
                });
                Tq(a, Wq, function () {
                    return void c.dispatchEvent('slotResponseReceived', 709, new ww(a, c.getName()));
                });
                Tq(a, Uq, function () {
                    var d = Fh.N().j;
                    d = Ov(d, Xe());
                    c.G.refresh([a], { Ca: 2 }, d);
                });
                yw.prototype.Fa.call(this, a, b);
            };
            aa.uc = function (a, b) {
                zw(this);
                OF(this, b);
                this.log.info(Mr());
                var c = x(a.U, 6);
                if (c || !gu.N().ab(b))
                    c && (c = Vc(b, document)) && b.dispatchEvent(Vq, 778, c), x(a.U, 4) && HF(this.G, b, a.U, a.P[b.j]), this.o.display(a, b);
            };
            var OF = function (a, b) {
                    a.l && ku(gu.N(), b);
                }, QF = function (a, b, c) {
                    var d = void 0 === d ? document : d;
                    var e;
                    null != (e = c.P[b.j]) && E(e, 19, !0);
                    Hj(d, new _.Dj('<div id="' + Lj(b.j) + '"></div>', null, _.Cj));
                    Vc(b, d) ? (zw(a), ku(gu.N(), b), a.o.display(c, b)) : mc('gpt_pb_write', function (f) {
                        Zb(f);
                    });
                };
            xh.prototype.refresh = function (a, b, c) {
                var d = b ? RF(this, b) : this.j;
                if (!d.length)
                    return !1;
                if (_.v(On)) {
                    zw(this);
                    b = _.G(b);
                    for (var e = b.next(); !e.done; e = b.next())
                        e = e.value, this.Fa(e, a.P[e.j]);
                }
                this.o.refresh(a, d, c || { Ca: 2 });
                return !0;
            };
            var MF = function (a, b, c, d) {
                    a.log.info(Tr());
                    if (SF(a, b, d, c) && 1 !== d.Ca)
                        for (b = _.G(b), d = b.next(); !d.done; d = b.next())
                            d = d.value.j, a.dispatchEvent(ar, 725, {
                                xc: d,
                                P: c.P[d]
                            });
                }, SF = function (a, b, c, d) {
                    b = b.filter(function (e) {
                        return _.lu(gu.N(), e);
                    });
                    if (!b.length)
                        return null;
                    a.G.refresh(b, c, d);
                    return b;
                }, TF = function (a, b) {
                    return a.l ? {
                        vid: H(b, 22) || '',
                        cmsid: H(b, 23) || ''
                    } : null;
                }, PF = function (a, b) {
                    x(b, 21) && a.l && E(b, 29, Bm());
                }, UF = function (a, b, c, d) {
                    for (var e = _.G(b), f = e.next(); !f.done; f = e.next())
                        f = f.value, hu(gu.N(), f);
                    return GF(a.G, b, c, d);
                }, VF = function (a, b, c, d) {
                    if (!a.l)
                        return a.log.M(Rr(), d[0]), !1;
                    var e = RF(a, d);
                    if (!e.length)
                        return a.log.M(th('PubAdsService.clear', [d].filter(function (f) {
                            return void 0 !== f;
                        }))), !1;
                    a.log.info(Ur());
                    return UF(a, e, b, c);
                }, RF = function (a, b) {
                    return b.filter(function (c, d) {
                        return c.A ? (a.log.M(Wr(String(d))), !1) : !0;
                    });
                };
            xh.prototype.destroySlots = function (a, b) {
                a = yw.prototype.destroySlots.call(this, a, b);
                if (a.length && this.l) {
                    var c, d = null != (c = null == b ? void 0 : b.U) ? c : Fh.N().j, e;
                    b = null != (e = null == b ? void 0 : b.P) ? e : Xe();
                    UF(this, a, d, b);
                }
                return a;
            };
            var NF = function (a, b, c) {
                a.log.M(b, c);
            };
            var WF = function () {
                yw.apply(this, arguments);
            };
            _.N(WF, yw);
            WF.N = function () {
                throw Error('Must be overridden');
            };
            var kh = function () {
                WF.call(this);
                this.ads = new D.Map();
                this.G = {};
                this.Va = !1;
                this.I = this.o = void 0;
                this.V = this.K = !1;
                _.wh(cw).A = !0;
            };
            _.N(kh, WF);
            aa = kh.prototype;
            aa.set = function (a, b) {
                'string' === typeof a && a.length ? (this.G[a] = b, this.log.info(Hr(a, String(b), this.getName()))) : this.log.M(th('CompanionAdsService.set', [
                    a,
                    b
                ]));
                return this;
            };
            aa.get = function (a) {
                var b;
                return null !== (b = this.G[a]) && void 0 !== b ? b : null;
            };
            aa.display = function (a, b, c, d) {
                c = void 0 === c ? '' : c;
                d = void 0 === d ? '' : d;
                zw(this);
                b = sh(a, b, c);
                a = b.slotId;
                b = b.Wa;
                this.Fa((0, J.T)(a), (0, J.T)(b));
                E(b, 7, d);
                Ew(a.j);
            };
            aa.Fa = function (a, b) {
                var c = this;
                Tq(a, Wq, function (d) {
                    x(d.detail, 11) && (XF(c, a).Ld = !0);
                });
                WF.prototype.Fa.call(this, a, b);
            };
            aa.ic = function () {
                YF(this);
            };
            var ZF = function (a) {
                    if (_.v(Nn) || !_.wh(xh).l)
                        return !1;
                    var b = _.wh(xh).j;
                    a = a.j;
                    return b.length !== a.length ? !1 : !a.some(function (c) {
                        return !_.r(b, 'includes').call(b, c);
                    });
                }, $F = function (a, b) {
                    (b = void 0 === b ? '' : b) && !a.V && mc('ima_sdk_v', function (d) {
                        a.V = !0;
                        q(d, 'v', b);
                    });
                    var c = Fh.N().j;
                    return String(H(c, 26));
                }, aG = function (a, b) {
                    var c = Fh.N().j, d = Xe();
                    if (_.wh(xh).l) {
                        var e = { Ca: 3 };
                        a.o && (e.Xa = a.o);
                        a.I && (e.Ya = a.I);
                        a = null !== b && void 0 !== b ? b : a.j;
                        c = Ov(c, d);
                        e.Xa && 'number' !== typeof e.Xa || e.Ya && 'number' !== typeof e.Ya || _.wh(xh).refresh(c, a, e);
                    } else
                        b && b[0] && a.log.error(Qr(b[0].j));
                }, bG = function (a, b) {
                    var c;
                    return _.wh(xh).l && !(null === (c = a.ads.get(b)) || void 0 === c || !c.Ld);
                }, cG = function (a, b) {
                    return a.j.filter(function (c) {
                        return _.r(b, 'includes').call(b, c.toString());
                    });
                };
            kh.prototype.getName = function () {
                return 'companion_ads';
            };
            var YF = function (a) {
                    _.v(Nn) || rc(70, function () {
                        if (!a.K) {
                            var b = document;
                            a.log.info(Kr('GPT CompanionAds'));
                            Nl(b, aj(eb($a('https://pagead2.googlesyndication.com/pagead/show_companion_ad.js')).toString()));
                            a.K = !0;
                        }
                    }, !0);
                }, eG = function (a, b) {
                    if (!a.l || bG(a, b))
                        return !1;
                    var c = Vc(b);
                    if (!c)
                        return !1;
                    var d = (a.ads.get(b) || {}).content;
                    if (void 0 === d)
                        return !1;
                    a.ads.delete(b);
                    ol(c, Va(d));
                    d = c = null;
                    var e = cv(Fh.N(), b.j);
                    e && 1 === I(e, Nc, 5).length && xf(I(e, Nc, 5)[0], 1) && xf(I(e, Nc, 5)[0], 2) && (c = H(I(e, Nc, 5)[0], 1), d = H(I(e, Nc, 5)[0], 2));
                    dG(a, b, c, d);
                    return !0;
                };
            kh.prototype.uc = function (a, b) {
                _.v(Nn) || eG(this, b);
            };
            var fG = function (a, b, c) {
                    if (!_.v(Nn))
                        return b && c && 'string' === typeof c ? (XF(a, b).content = c, eG(a, b)) : !1;
                }, dG = function (a, b, c, d) {
                    b = new lw(b, a.getName());
                    null != c && null != d && (b.size = [
                        c,
                        d
                    ]);
                    a.dispatchEvent('slotRenderEnded', 67, b);
                }, XF = function (a, b) {
                    var c = a.ads.get(b);
                    c || (c = {}, a.ads.set(b, c), _.Hg(b, function () {
                        return a.ads.delete(b);
                    }));
                    return c;
                };
            Ai(kh);
            var gG = function () {
                yw.apply(this, arguments);
            };
            _.N(gG, yw);
            gG.N = function () {
                throw Error('Must be overridden');
            };
            var nh = function () {
                gG.apply(this, arguments);
                this.G = new D.Map();
            };
            _.N(nh, gG);
            nh.prototype.getName = function () {
                return 'content';
            };
            nh.prototype.display = function (a, b, c, d) {
                c = void 0 === c ? '' : c;
                d = void 0 === d ? '' : d;
                zw(this);
                b = sh(a, b, c);
                a = b.slotId;
                b = b.Wa;
                this.Fa((0, J.T)(a), (0, J.T)(b));
                E(b, 7, d);
                Ew(a.j);
            };
            nh.prototype.destroySlots = function (a) {
                a = gG.prototype.destroySlots.call(this, a);
                for (var b = _.G(a), c = b.next(); !c.done; c = b.next())
                    this.G.delete(c.value);
                return a;
            };
            var hG = function (a, b) {
                var c = a.G.get(b), d = Vc(b);
                !(c && void 0 !== c.content && d && a.l) || c && c.Qc || (c.Qc = !0, ol(d, Va(c.content)), mc('gpt_cont_svc', function (e) {
                    var f;
                    q(e, 'cl', String(null === (f = null === c || void 0 === c ? void 0 : c.content) || void 0 === f ? void 0 : f.length));
                    Zb(e, [b.getAdUnitPath()]);
                }), a.dispatchEvent('slotRenderEnded', 819, new lw(b, a.getName())));
            };
            nh.prototype.ic = function () {
            };
            nh.prototype.uc = function (a, b) {
                hG(this, b);
            };
            var iG = function (a, b, c) {
                if (_.r(a.j, 'includes').call(a.j, b) && 'string' === typeof c && c.length) {
                    var d = a.G.get(b);
                    d ? d.content = c : a.G.set(b, {
                        content: c,
                        Qc: void 0
                    });
                    _.Hg(b, function () {
                        return void a.G.delete(b);
                    });
                    hG(a, b);
                }
            };
            Ai(nh);
            var Lh = function (a) {
                P(this, a, null, null);
            };
            _.N(Lh, O);
            var jG = function () {
                    this.j = function () {
                    };
                }, kG = function () {
                    var a = _.wh(cw);
                    _.wh(jG).j(a);
                };
            var mG = function () {
                    var a = void 0, b = 2;
                    if (void 0 === a) {
                        var c = void 0 === c ? _.F : c;
                        a = c.ggeac || (c.ggeac = {});
                    }
                    b = void 0 === b ? 0 : b;
                    c = a;
                    var d = b;
                    d = void 0 === d ? 0 : d;
                    vq(_.wh(uq), c, d);
                    lG(a, b);
                    b = a;
                    _.wh(jG).j = tq(sq, b);
                    _.wh(xq).j();
                }, lG = function (a, b) {
                    b = void 0 === b ? 0 : b;
                    var c = _.wh(xq);
                    c.l = function (d, e) {
                        return tq(oq, a, function () {
                            return !1;
                        })(d, e, b);
                    };
                    c.A = function (d, e) {
                        return tq(pq, a, function () {
                            return 0;
                        })(d, e, b);
                    };
                    c.m = function (d, e) {
                        return tq(qq, a, function () {
                            return '';
                        })(d, e, b);
                    };
                    c.H = function (d, e) {
                        return tq(rq, a, function () {
                            return [];
                        })(d, e, b);
                    };
                    c.j = function () {
                        tq(lq, a)(b);
                    };
                };
            var nG = Ui('https://securepubads.g.doubleclick.net/');
            var oG = function (a) {
                this.push = w(76, function (b) {
                    return a.push.apply(a, arguments);
                });
            };
            _.N(oG, wu);
            var pG = function (a) {
                var b = this;
                this.addEventListener = w(86, function (c, d) {
                    if ('function' !== typeof d)
                        return Cc().M(th('Service.addEventListener', [
                            c,
                            d
                        ])), b;
                    var e = jh(c);
                    if (!e)
                        return Cc().M(cs(c)), b;
                    a.addEventListener(e, d);
                    return b;
                });
                this.removeEventListener = w(904, function (c, d) {
                    var e = jh(c);
                    'function' === typeof d && e ? a.removeEventListener(e, d) : Cc().M(th('Service.removeEventListener', [
                        c,
                        d
                    ]));
                });
                this.getSlots = w(573, function () {
                    return a.j.map(function (c) {
                        return c.l;
                    });
                });
                this.getSlotIdMap = w(574, function () {
                    for (var c = {}, d = _.G(a.j), e = d.next(); !e.done; e = d.next())
                        e = e.value, c[e.toString()] = e.l;
                    return c;
                });
                this.enable = w(87, function () {
                    return zw(a);
                }, !0);
                this.getName = w(575, function () {
                    return a.getName();
                });
            };
            _.N(pG, wu);
            var lh = function (a) {
                pG.call(this, a);
                var b = this;
                this.set = w(576, function (c, d) {
                    a.set(c, d);
                    return b;
                });
                this.get = w(577, function (c) {
                    return a.get(c);
                });
                this.getAttributeKeys = w(578, function () {
                    return Rl(a.G);
                });
                this.display = w(558, function (c, d, e, f) {
                    return a.display(c, d, void 0 === e ? '' : e, void 0 === f ? '' : f);
                });
                this.notifyUnfilledSlots = w(69, function (c) {
                    a.Va && aG(a, cG(a, c));
                });
                this.isRoadblockingSupported = w(111, function () {
                    return ZF(a);
                });
                this.refreshAllSlots = w(60, function () {
                    a.Va && aG(a);
                });
                this.setVideoSession = w(61, function (c, d, e) {
                    a.o = d;
                    a.I = e;
                    'number' === typeof c && E(Fh.N().j, 29, c);
                });
                this.getDisplayAdsCorrelator = w(62, function (c) {
                    return $F(a, void 0 === c ? '' : c);
                });
                this.getVideoStreamCorrelator = w(63, function () {
                    var c;
                    return null !== (c = H(Fh.N().j, 29)) && void 0 !== c ? c : 0;
                });
                this.isSlotAPersistentRoadblock = w(64, function (c) {
                    var d = _.r(a.j, 'find').call(a.j, function (e) {
                        return e.l === c;
                    });
                    return !!d && bG(a, d);
                });
                this.onImplementationLoaded = w(65, function () {
                    a.log.info(Lr('GPT CompanionAds'));
                });
                this.fillSlot = w(66, function (c, d) {
                    var e = _.r(a.j, 'find').call(a.j, function (f) {
                        return f.l === c;
                    });
                    return !!e && fG(a, e, d);
                });
                this.slotRenderEnded = w(67, function (c, d, e) {
                    var f = _.r(a.j, 'find').call(a.j, function (g) {
                        return g.l === c;
                    });
                    return f && dG(a, f, d, e);
                });
                this.setRefreshUnfilledSlots = w(59, function (c) {
                    'boolean' === typeof c && (a.Va = c);
                });
            };
            _.N(lh, pG);
            var oh = function (a) {
                pG.call(this, a);
                this.setContent = w(72, function (b, c) {
                    var d = _.r(a.j, 'find').call(a.j, function (e) {
                        return e.l === b;
                    });
                    return !!d && iG(a, d, c);
                });
                this.display = w(562, function (b, c, d, e) {
                    return a.display(b, c, void 0 === d ? '' : d, void 0 === e ? '' : e);
                });
            };
            _.N(oh, pG);
            var qG = function () {
                var a = Cc();
                this.getAllEvents = w(563, function () {
                    return fD ? lr(a.j).slice() : [];
                });
                this.getEventsBySlot = w(565, function (b) {
                    return fD ? nr(a, b).slice() : [];
                });
                this.getEventsByLevel = w(566, function (b) {
                    return fD ? or(a, b).slice() : [];
                });
            };
            _.N(qG, wu);
            var uh = function (a, b) {
                Rq.call(this);
                this.j = a;
                this.l = b;
            };
            _.N(uh, Rq);
            var qh = function (a, b) {
                var c = this, d = Cc(), e = a.j, f = Fh.N().j, g = cv(Fh.N(), e.j);
                this.set = w(83, function (h, k) {
                    'page_url' === h && k && (h = [Au(zu(new Bf(), h), [String(k)])], cl(g, 3, h));
                    return c;
                });
                this.get = w(84, function (h) {
                    if ('page_url' !== h)
                        return null;
                    var k;
                    return null == (k = (L = I(g, Bf, 3), _.r(L, 'find')).call(L, function (l) {
                        return Cf(l) === h;
                    })) ? void 0 : H(k, 2)[0];
                });
                this.setClickUrl = w(79, function (h) {
                    if ('string' !== typeof h)
                        return d.M(th('Slot.setClickUrl', [h]), e), c;
                    E(g, 7, h);
                    return c;
                });
                this.setTargeting = w(81, function (h, k) {
                    Ku(e, g, h, k, d);
                    return c;
                });
                this.updateTargetingFromMap = w(85, function (h) {
                    Lu(e, g, h, d);
                    return c;
                });
                this.display = w(78, function () {
                    QF(b, e, Ov(f, Xe()));
                });
                this.setTagForChildDirectedTreatment = w(80, function (h) {
                    if (0 === h || 1 === h) {
                        var k = Yu(f) || new Uu();
                        E(k, 5, h);
                        Db(f, 25, k);
                    }
                    return c;
                });
                this.setForceSafeFrame = w(567, function (h) {
                    if ('boolean' !== typeof h)
                        return d.M(th('PassbackSlot.setForceSafeFrame', [String(h)]), e), c;
                    E(g, 12, h);
                    return c;
                });
                this.setTagForUnderAgeOfConsent = w(448, function (h) {
                    if (0 === h || 1 === h) {
                        var k = Yu(f) || new Uu();
                        E(k, 6, h);
                        Db(f, 25, k);
                    }
                    return c;
                });
            };
            _.N(qh, wu);
            var rG = function (a, b) {
                    var c = b.j;
                    return a.map(function (d) {
                        return _.r(c, 'find').call(c, function (e) {
                            return e.l === d;
                        });
                    }).filter(function (d) {
                        return !!d;
                    });
                }, sG = function (a) {
                    var b = _.wh(cw), c = [];
                    a = _.G(a);
                    for (var d = a.next(); !d.done; d = a.next()) {
                        d = d.value;
                        b.H = d;
                        var e = wq(9);
                        1 === e.length && (c.push(d), c.push(d + '-' + e[0]));
                    }
                    return c;
                }, tG = _.Li(function () {
                    return tm('google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.');
                }), uG = function () {
                    Object.defineProperty(window, 'google_DisableInitialLoad', {
                        get: function () {
                            tG();
                            return !0;
                        },
                        set: function () {
                            tG();
                        },
                        configurable: !0
                    });
                }, yh = function (a) {
                    pG.call(this, a);
                    var b = this, c = Cc(), d = Fh.N().j, e = Xe(), f = !1;
                    this.setTargeting = w(1, function (g, h) {
                        var k = null;
                        'string' === typeof h ? k = [h] : Array.isArray(h) ? k = h : qa(h) && (k = _.r(Array, 'from').call(Array, h));
                        var l = 'string' === typeof g && !gj(g);
                        k = k && va(k);
                        var m, n = null != (m = null == k ? void 0 : k.every(function (p) {
                                return 'string' === typeof p;
                            })) ? m : !1;
                        if (!l || !n)
                            return c.M(th('PubAdsService.setTargeting', [
                                g,
                                h
                            ])), b;
                        h = (L = I(d, Bf, 2), _.r(L, 'find')).call(L, function (p) {
                            return Cf(p) === g;
                        });
                        if ('gpt-beta' === g) {
                            if (a.l)
                                return c.M(hs(k.join())), b;
                            if (h)
                                return c.M(is(k.join())), b;
                            k = sG(k);
                        }
                        h ? Au(h, k) : (h = Au(zu(new Bf(), g), k), Wd(d, 2, h, Bf));
                        c.info(as(g, k.join(), a.getName()));
                        return b;
                    });
                    this.clearTargeting = w(2, function (g) {
                        if (void 0 === g)
                            return cl(d, 2, []), c.info(fs(a.getName())), b;
                        if ('gpt-beta' === g)
                            return c.M(js(g)), b;
                        var h = I(d, Bf, 2), k = _.r(h, 'findIndex').call(h, function (l) {
                                return Cf(l) === g;
                            });
                        if (0 > k)
                            return c.M(Yr(g, a.getName())), b;
                        h.splice(k, 1);
                        cl(d, 2, h);
                        c.info(Xr(g, a.getName()));
                        return b;
                    });
                    this.getTargeting = w(38, function (g) {
                        if ('string' !== typeof g)
                            return c.M(th('PubAdsService.getTargeting', [g])), [];
                        var h = (L = I(d, Bf, 2), _.r(L, 'find')).call(L, function (k) {
                            return Cf(k) === g;
                        });
                        return h ? H(h, 2).slice() : [];
                    });
                    this.getTargetingKeys = w(39, function () {
                        return I(d, Bf, 2).map(function (g) {
                            return Cf(g);
                        });
                    });
                    this.setCategoryExclusion = w(3, function (g) {
                        if ('string' !== typeof g || gj(g))
                            return c.M(th('PubAdsService.setCategoryExclusion', [g])), b;
                        (L = H(d, 3), _.r(L, 'includes')).call(L, g) || Df(d, 3, g);
                        c.info(Zr(g));
                        return b;
                    });
                    this.clearCategoryExclusions = w(4, function () {
                        E(d, 3, Ja([]));
                        c.info($r());
                        return b;
                    });
                    this.disableInitialLoad = w(5, function () {
                        E(d, 4, !0);
                        f || (f = !0, uG());
                    });
                    this.enableSingleRequest = w(6, function () {
                        if (a.l && !x(d, 6))
                            return c.M(Nr('PubAdsService.enableSingleRequest')), !1;
                        c.info(Or('single request'));
                        E(d, 6, !0);
                        return !0;
                    });
                    this.enableAsyncRendering = w(7, function () {
                        return !0;
                    });
                    this.enableSyncRendering = w(8, function () {
                        tm('GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.');
                        return !1;
                    });
                    this.enableLazyLoad = w(485, function (g) {
                        var h = new Tu();
                        E(h, 1, 800);
                        E(h, 2, 400);
                        E(h, 3, 3);
                        if (_.ia(g)) {
                            var k = g.fetchMarginPercent;
                            'number' === typeof k && (0 <= k ? E(h, 1, k) : -1 == k && E(h, 1, void 0));
                            k = g.renderMarginPercent;
                            'number' === typeof k && (0 <= k ? E(h, 2, k) : -1 == k && E(h, 2, void 0));
                            g = g.mobileScaling;
                            'number' === typeof g && (0 < g ? E(h, 3, g) : -1 == g && E(h, 3, 1));
                        }
                        Db(d, 5, h);
                    });
                    this.setCentering = w(9, function (g) {
                        if (_.v(Bo) && 'object' === typeof g && g) {
                            var h = g.horizontal;
                            g = g.vertical;
                            'boolean' === typeof h && E(d, 15, h);
                            'boolean' === typeof g && E(d, 31, g);
                        } else
                            h = !!g, c.info(Pr('centering', String(h))), E(d, 15, h);
                    });
                    this.definePassback = w(10, function (g, h) {
                        return (g = vh(a, g, h)) && g.Nc;
                    });
                    this.refresh = w(11, function (g, h) {
                        h = void 0 === h ? {} : h;
                        if (g && !Array.isArray(g) || !_.ia(h) || h.changeCorrelator && 'boolean' !== typeof h.changeCorrelator)
                            c.M(th('PubAdsService.refresh', _.r(Array, 'from').call(Array, arguments)));
                        else {
                            h && 0 == h.changeCorrelator || E(d, 26, Bm());
                            var k = g ? rG(g, a) : a.j;
                            a.refresh(Ov(d, e), k) || c.M(th('PubAdsService.refresh', _.r(Array, 'from').call(Array, arguments)));
                        }
                    });
                    this.enableVideoAds = w(12, function () {
                        E(d, 21, !0);
                        PF(a, d);
                    });
                    this.setVideoContent = w(13, function (g, h) {
                        E(d, 21, !0);
                        E(d, 22, String(g || ''));
                        E(d, 23, String(h || ''));
                        PF(a, d);
                    });
                    this.collapseEmptyDivs = w(14, function (g) {
                        g = void 0 === g ? !1 : g;
                        if ('object' === typeof g && g && _.v(Co)) {
                            if ('boolean' === typeof g.collapseEmpty) {
                                E(d, 11, g.collapseEmpty);
                                var h;
                                Xu(d, null != (h = x(d, 30)) ? h : !0);
                            }
                            if ('boolean' === typeof g.startCollapsed) {
                                E(d, 10, g.startCollapsed);
                                var k;
                                Xu(d, null != (k = x(d, 30)) ? k : !0);
                            }
                            'boolean' === typeof g.allowCollapseOnScreen && Xu(d, !g.allowCollapseOnScreen);
                            return !!x(d, 11);
                        }
                        E(d, 11, !0);
                        var l = !!g;
                        E(d, 10, l);
                        mc('gpt_ced', function (m) {
                            q(m, 'sc', l ? 't' : 'f');
                            q(m, 'level', 'page');
                            Zb(m);
                        });
                        c.info(Vr(String(l)));
                        return !!x(d, 11);
                    });
                    this.clear = w(15, function (g) {
                        if (Array.isArray(g))
                            return VF(a, d, e, rG(g, a));
                        if (void 0 === g)
                            return VF(a, d, e, a.j);
                        c.M(th('PubAdsService.clear', [g]));
                        return !1;
                    });
                    this.setLocation = w(16, function (g) {
                        if ('string' !== typeof g)
                            return c.M(th('PubAdsService.setLocation', [g])), b;
                        E(d, 8, g);
                        return b;
                    });
                    this.setCookieOptions = w(17, function (g) {
                        if (0 !== g && 1 !== g)
                            return c.M(Gc('PubadsService.setTagForUnderAgeOfConsent', Ec(g), '0,1')), b;
                        E(d, 24, g);
                        return b;
                    });
                    this.setTagForChildDirectedTreatment = w(18, function (g) {
                        if (1 !== g && 0 !== g)
                            return c.M(Gc('PubadsService.setTagForChildDirectedTreatment', Ec(g), '0,1')), b;
                        var h = Yu(d) || new Uu();
                        E(h, 5, g);
                        Db(d, 25, h);
                        return b;
                    });
                    this.clearTagForChildDirectedTreatment = w(19, function () {
                        var g = Yu(d);
                        if (!g)
                            return b;
                        E(g, 5, void 0);
                        Db(d, 25, g);
                        return b;
                    });
                    this.setPublisherProvidedId = w(20, function (g) {
                        g = String(g);
                        c.info(Pr('PPID', g));
                        E(d, 16, g);
                        return b;
                    });
                    this.set = w(21, function (g, h) {
                        if ('string' !== typeof g || !g.length || void 0 === tu()[g] || 'string' !== typeof h)
                            return c.M(th('PubAdsService.set', [
                                g,
                                h
                            ])), b;
                        var k = (L = I(d, Bf, 14), _.r(L, 'find')).call(L, function (l) {
                            return Cf(l) === g;
                        });
                        k ? Au(k, [h]) : (k = zu(new Bf(), g), Df(k, 2, h), Wd(d, 14, k, Bf));
                        c.info(Hr(g, String(h), a.getName()));
                        return b;
                    });
                    this.get = w(22, function (g) {
                        if ('string' !== typeof g)
                            return c.M(th('PubAdsService.get', [g])), null;
                        var h = (L = I(d, Bf, 14), _.r(L, 'find')).call(L, function (k) {
                            return Cf(k) === g;
                        });
                        return (h = h && H(h, 2)) ? h[0] : null;
                    });
                    this.getAttributeKeys = w(23, function () {
                        return I(d, Bf, 14).map(function (g) {
                            return Cf(g);
                        });
                    });
                    this.display = w(24, function (g, h, k, l) {
                        return void a.display(g, h, void 0 === k ? '' : k, void 0 === l ? '' : l);
                    });
                    this.updateCorrelator = w(25, function () {
                        tm(Iq('update'));
                        c.M(ms());
                        E(d, 26, Bm());
                        return b;
                    });
                    this.defineOutOfPagePassback = w(35, function (g) {
                        g = vh(a, g, [
                            1,
                            1
                        ]);
                        if (!g)
                            return null;
                        E(g.Wa, 15, 1);
                        return g.Nc;
                    });
                    this.setForceSafeFrame = w(36, function (g) {
                        if ('boolean' !== typeof g)
                            return c.M(th('PubAdsService.setForceSafeFrame', [Ec(g)])), b;
                        E(d, 13, g);
                        return b;
                    });
                    this.setSafeFrameConfig = w(37, function (g) {
                        var h = kv(g);
                        if (!h)
                            return c.M(th('PubAdsService.setSafeFrameConfig', [g])), b;
                        Db(d, 18, h);
                        return b;
                    });
                    this.setRequestNonPersonalizedAds = w(445, function (g) {
                        if (0 !== g && 1 !== g)
                            return c.M(Gc('PubAdsService.setRequestNonPersonalizedAds', Ec(g), '0,1')), b;
                        var h = Yu(d) || new Uu();
                        E(h, 8, !!g);
                        Db(d, 25, h);
                        return b;
                    });
                    this.setTagForUnderAgeOfConsent = w(447, function (g) {
                        g = void 0 === g ? 2 : g;
                        if (2 !== g && 0 !== g && 1 !== g)
                            return c.M(Gc('PubadsService.setTagForUnderAgeOfConsent', Ec(g), '2,0,1')), b;
                        var h = Yu(d) || new Uu();
                        E(h, 6, g);
                        Db(d, 25, h);
                        return b;
                    });
                    this.getCorrelator = w(27, function () {
                        return String(H(d, 26));
                    });
                    this.getTagSessionCorrelator = w(631, function () {
                        return zb(_.F);
                    });
                    this.getVideoContent = w(30, function () {
                        return TF(a, d);
                    });
                    this.getVersion = w(568, Qb);
                    this.forceExperiment = w(569, function (g) {
                        g = parseInt(g, 10);
                        0 < g && _.wh(uq).j(g);
                    });
                    this.setCorrelator = w(28, function (g) {
                        tm(Iq('set'));
                        c.M(ls());
                        if (Hs(window))
                            return b;
                        if (!('number' === typeof g && isFinite(g) && 0 == g % 1 && 0 < g))
                            return c.M(th('PubadsService.setCorrelator', [Ec(g)])), b;
                        E(d, 26, g);
                        E(d, 27, !0);
                        return b;
                    });
                    this.markAsAmp = w(570, function () {
                        window.console && window.console.warn && window.console.warn('googletag.pubads().markAsAmp() is deprecated and ignored.');
                    });
                    this.isSRA = w(571, function () {
                        return !!x(d, 6);
                    });
                    this.setImaContent = w(328, function (g, h) {
                        xf(d, 22) ? (E(d, 21, !0), E(d, 22, String(g || '')), E(d, 23, String(h || '')), PF(a, d)) : (E(d, 21, !0), PF(a, d), 'string' === typeof g && E(d, 19, g), 'string' === typeof h && E(d, 20, h));
                    });
                    this.getImaContent = w(329, function () {
                        return xf(d, 22) ? TF(a, d) : a.l ? {
                            vid: H(d, 19) || '',
                            cmsid: H(d, 20) || ''
                        } : null;
                    });
                    this.isInitialLoadDisabled = w(572, function () {
                        return !!x(d, 4);
                    });
                    this.setPrivacySettings = w(648, function (g) {
                        if (!_.ia(g))
                            return c.M(th('PubAdsService.setPrivacySettings', [g])), b;
                        var h = Yu(d) || new Uu(), k = g.restrictDataProcessing, l = g.childDirectedTreatment, m = g.underAgeOfConsent, n = g.limitedAds, p = g.nonPersonalizedAds;
                        'boolean' === typeof p ? E(h, 8, p) : void 0 !== p && c.M(Dc('PubAdsService.setPrivacySettings', Ec(g), 'nonPersonalizedAds', Ec(p)));
                        'boolean' === typeof k ? E(h, 1, k) : void 0 !== k && c.M(Dc('PubAdsService.setPrivacySettings', Ec(g), 'restrictDataProcessing', Ec(k)));
                        'boolean' === typeof n ? E(h, 9, n) : void 0 !== n && c.M(Dc('PubAdsService.setPrivacySettings', Ec(g), 'limitedAds', Ec(n)));
                        void 0 !== m && (null === m ? E(h, 6, 2) : !1 === m ? E(h, 6, 0) : !0 === m ? E(h, 6, 1) : c.M(Dc('PubAdsService.setPrivacySettings', Ec(g), 'underAgeOfConsent', Ec(m))));
                        void 0 !== l && (null === l ? E(h, 5, void 0) : !1 === l ? E(h, 5, 0) : !0 === l ? E(h, 5, 1) : c.M(Dc('PubAdsService.setPrivacySettings', Ec(g), 'childDirectedTreatment', Ec(l))));
                        Db(d, 25, h);
                        return b;
                    });
                };
            _.N(yh, pG);
            var oa = function (a, b) {
                    a: {
                        b = b[0];
                        a = a[0];
                        for (var c = ma, d = Math.min(b.length, a.length), e = 0; e < d; e++) {
                            var f = c(b[e], a[e]);
                            if (0 != f) {
                                b = f;
                                break a;
                            }
                        }
                        b = ma(b.length, a.length);
                    }
                    return b;
                }, vG = function () {
                    var a = this, b = [], c = [], d = Cc();
                    this.addSize = kc(88, function (e, f) {
                        if (!Ou(e) || !(Nu(f) || Array.isArray(f) && f.every(Nu)))
                            return c.push([
                                e,
                                f
                            ]), d.M(th('SizeMappingBuilder.addSize', [
                                e,
                                f
                            ])), a;
                        b.push([
                            e,
                            f
                        ]);
                        return a;
                    });
                    this.build = kc(89, function () {
                        if (c.length)
                            return d.M(Fr(Ec(c))), null;
                        pa(b);
                        return b;
                    });
                };
            var Ah = {
                    REWARDED: 4,
                    TOP_ANCHOR: 2,
                    BOTTOM_ANCHOR: 3,
                    INTERSTITIAL: 5
                }, wG = function () {
                    var a = Jg();
                    a.enums || (a.enums = { OutOfPageFormat: Ah });
                };
            var Gh = new D.Map([
                [
                    'Interstitial',
                    5
                ],
                [
                    'TopAnchor',
                    2
                ],
                [
                    'BottomAnchor',
                    3
                ]
            ]);
            var xG = function () {
                var a = new Vx(), b = new Wx(), c = zb(_.F);
                Ab(a, 1, c, 0);
                c = Bb().join();
                Ab(a, 5, c, '');
                Fb(a, 2, 1);
                Db(b, 1, a);
                a = Ux();
                c = _.v(Ap);
                a = bl(a, 8, c);
                c = _.v(Bp);
                a = bl(a, 9, c);
                a = bl(a, 10, !0);
                c = _.v(Ep);
                a = bl(a, 13, c);
                c = _.v(Gp);
                a = bl(a, 14, c);
                a = bl(a, 16, !0);
                Db(b, 2, a);
                window.google_rum_config = el(b);
            };
            var yG = function (a) {
                    var b = [];
                    b = ud();
                    if (a) {
                        if (!Array.isArray(a))
                            return Cc().M(th('googletag.destroySlots', [a])), !1;
                        la(a);
                        b = b.filter(function (d) {
                            return _.r(a, 'includes').call(a, d.l);
                        });
                    }
                    if (!b.length)
                        return !1;
                    var c = Fh.N().j;
                    c = Ov(c, Xe());
                    Cw(b, c);
                    hw(_.wh(Ch), b);
                    return !0;
                }, zG = kc(297, function () {
                    try {
                        for (var a = _.v(Uo) ? [].concat(_.ec(document.getElementsByTagName('script'))) : _.r(Array, 'from').call(Array, document.getElementsByTagName('script')), b = _.G(a), c = b.next(); !c.done; c = b.next()) {
                            var d = c.value;
                            a = d;
                            var e = d.src;
                            if (e && (-1 != e.indexOf('/tag/js/gpt.js') || -1 != e.indexOf('/tag/js/gpt_mobile.js')) && !a.googletag_executed && d.textContent) {
                                a.googletag_executed = !0;
                                var f = document.createElement('script'), g = Xa(d.textContent);
                                var h = g instanceof kl ? Ya(g) : g instanceof Wi && g.constructor === Wi ? g.j : 'type_error:SafeScript';
                                f.textContent = h;
                                fb(f);
                                document.head.appendChild(f);
                                document.head.removeChild(f);
                            }
                        }
                    } catch (k) {
                        b = k, Ub(297, b), window.console && window.console.error && window.console.error(b);
                    }
                }), AG = function () {
                    var a = window, b = new Yt(a);
                    bw(b).then(kc(894, function (c) {
                        var d = new Ps(a), e = new zz(a);
                        mc('cmpMet', function (f) {
                            Zb(f);
                            q(f, 'fc', c ? 1 : 0);
                            q(f, 'tcfv1', a.__cmp ? 1 : 0);
                            q(f, 'tcfv2', Rs(d) ? 1 : 0);
                            q(f, 'usp', Bz(e) ? 1 : 0);
                            q(f, 'ptt', 17);
                        }, { ta: _.lb(jp) });
                    }));
                };
            (function (a, b) {
                var c, d, e, f, g, h, k, l;
                return ti(function (m) {
                    try {
                        if (window.googletag.evalScripts)
                            return window.googletag.evalScripts(), m.return();
                        bA();
                        ch('evalScripts', zG);
                        try {
                            mG();
                        } catch (n) {
                            Vb(408, n, !0);
                        }
                        _.Xb(260) && Ev();
                        sB = _.yc();
                        try {
                            kG(), wq(13), wq(3);
                        } catch (n) {
                            Vb(408, n, !0);
                        }
                        aw('gpt-tag-load');
                        c = b(a);
                        _.wC.N().A = c;
                        _.lb(jp) && AG();
                        rc(827, function () {
                            'function' === typeof document.interestCohort && _.v(fp) && (gu.N().l = document.interestCohort());
                        }, !0);
                        (d = yq(pp)) && rc(862, function () {
                            zm(d, document);
                        }, !0);
                        mg();
                        ch('defineOutOfPageSlot', kc(73, function (n, p) {
                            'string' === typeof n && 0 < n.length && (null == p || 'string' === typeof p || 'number' === typeof p && Bh(p)) ? n = Eh(n, 'number' === typeof p ? p : 1, 'string' === typeof p ? p : void 0) : (Cc().error(th('googletag.defineOutOfPageSlot', [
                                n,
                                p
                            ]), void 0, _.v(wn)), n = null);
                            if (!n)
                                return null;
                            var t;
                            return null != (t = n.l) ? t : null;
                        }));
                        ch('defineSlot', jw);
                        ch('defineUnit', jw);
                        ch('getWindowsThatCanCommunicateWithHostpageLibrary', gw);
                        ch('display', Ew);
                        wG();
                        ch('getVersion', Qb);
                        ch('companionAds', w(816, function () {
                            return mh();
                        }));
                        ch('content', w(817, function () {
                            return ph();
                        }));
                        ch('pubads', function () {
                            return zh();
                        });
                        ch('setAdIframeTitle', w(729, xg));
                        ch('getEventLog', function () {
                            return new qG();
                        });
                        ch('sizeMapping', kc(90, function () {
                            return new vG();
                        }));
                        ch('enableServices', kc(91, function () {
                            for (var n = _.G(xw), p = n.next(); !p.done; p = n.next())
                                p = p.value, p.l && Cc().info(Ir()), zw(p);
                        }));
                        ch('destroySlots', kc(75, yG));
                        ch('apiReady', !0);
                        _.v(In) && We();
                        e = function () {
                            Ih();
                            rc(77, function () {
                                var n = Jg().cmd;
                                if (!n || Array.isArray(n)) {
                                    var p = new ts();
                                    Jg().cmd = Qc(p, function () {
                                        return new oG(p);
                                    });
                                    n && 0 < n.length && p.push.apply(p, n);
                                }
                            });
                        };
                        Jg().fifWin && 'complete' != document.readyState ? zq(window, function () {
                            window.setTimeout(e, 0);
                        }) : e();
                        zG();
                        if (_.v(Ip) || Kb.N().j)
                            xG(), Nl(document, aj(eb(_.v(Jp) ? c.Qd : c.Rd).toString()));
                        _.v(ko) && Th();
                        _.v(Mn) && Ij('script[nonce]', void 0) && (f = new Yb('gpt_nonce_csp'), Zb(f), ac(f));
                        g = _.lb(Ln);
                        0 !== g && (h = document.createElement('script'), k = aj(Ti(Ui(1 == g ? 'https://pagead2.googlesyndication.com/pagead/managed/js/m202102160101/pubads_impl.js' : 'https://securepubads.g.doubleclick.net/gpt/pubads_impl_2021021602.js'))), wd(h, cj(k, String(Math.random()))), l = _.yc(), (document.head || document.body || document.documentElement).appendChild(h), h.onload = function () {
                            mc('gpt_bvslt', function (n) {
                                Zb(n);
                                q(n, 't', _.yc() - l);
                                q(n, 'f', g);
                            }, { ta: 1 });
                        });
                    } catch (n) {
                        Vb(106, n);
                    }
                    mi(m);
                });
            }(Pb(), function (a) {
                return {
                    hd: function (b) {
                        return $a(Ti(nG) + 'gpt/pubads_impl_' + b + '_' + a + '.js');
                    },
                    gd: function (b) {
                        return $a('https://pagead2.googlesyndication.com/gpt/pubads_impl_' + b + '_' + a + '.js');
                    },
                    Rd: $a('https://securepubads.g.doubleclick.net/pagead/js/rum.js'),
                    Qd: $a('https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js')
                };
            }));
        }.call(this, {}));
    }())
}