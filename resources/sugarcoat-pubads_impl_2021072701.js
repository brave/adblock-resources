{
    const $___mock_b6b0cb69e1b79e1a = {};
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
    })($___mock_b6b0cb69e1b79e1a);
    const $___mock_deec696cf488516f = {};
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
    })($___mock_deec696cf488516f);
    (function () {
        (function (_) {
            var ca, ba, fa, ha, ia, la, na, pa, sa, ma, ra, ta, ua, wa, xa, ya, Aa, Da, Ga, Ia, Ea, La, Na, Pa, Qa, Sa, Ua, Wa, Ya, $a, bb, db, gb, hb, kb, lb, nb, pb, rb, sb, wb, xb, yb, Jb, Kb, Lb, Ob, Pb, Qb, Rb, Tb, Sb, Yb, $b, Zb, jc, rc, x, vc, sc, Bc, Cc, Dc, Ec, Gc, Ic, Jc, Yc, $c, cd, md, td, wd, yd, Dd, Fd, Id, Md, Pd, Qd, Rd, Sd, Wd, Yd, $d, fe, he, oe, te, ue, xe, Ce, Ee, Fe, He, Ie, Ke, Le, Me, Te, Ue, Ve, Xe, Ye, $e, bf, df, ff, cf, mf, qf, vf, Af, pf, Sf, Tf, Xf, Yf, $f, cg, fg, gg, hg, ig, jg, kg, mg, rg, tg, vg, wg, xg, yg, Ag, zg, Fg, Gg, Jg, Lg, Ng, Og, Tg, Wg, Yg, ch, dh, eh, fh, gh, hh, ih, oh, uh, xh, Ah, Dh, Fh, Jh, Mh, Ph, Sh, Zh, $h, hi, L, ii, ji, ki, li, mi, D, ni, oi, pi, qi, og, ri, si, ti, xi, yi, zi, Oi, Pi, qa, ka, Qi, Ri, Si, Ti, Wf;
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
            fa = function (a, b) {
                b = _.ea(a, b);
                var c;
                (c = 0 <= b) && Array.prototype.splice.call(a, b, 1);
                return c;
            };
            ha = function (a) {
                var b = a.length;
                if (0 < b) {
                    for (var c = Array(b), d = 0; d < b; d++)
                        c[d] = a[d];
                    return c;
                }
                return [];
            };
            ia = function (a, b, c) {
                return 2 >= arguments.length ? Array.prototype.slice.call(a, b) : Array.prototype.slice.call(a, b, c);
            };
            la = function (a) {
                for (var b = 0, c = 0, d = {}; c < a.length;) {
                    var e = a[c++], f = _.ja(e) ? 'o' + ka(e) : (typeof e).charAt(0) + e;
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
            ua = function (a) {
                for (var b = [], c = 0; c < arguments.length; c++) {
                    var d = arguments[c];
                    if (Array.isArray(d))
                        for (var e = 0; e < d.length; e += 8192)
                            for (var f = ua.apply(null, ia(d, e, e + 8192)), g = 0; g < f.length; g++)
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
            xa = function (a, b) {
                return null !== a && b in a;
            };
            ya = function (a, b) {
                for (var c in a)
                    if (b.call(void 0, a[c], c, a))
                        return c;
            };
            Aa = function (a, b) {
                for (var c, d, e = 1; e < arguments.length; e++) {
                    d = arguments[e];
                    for (c in d)
                        a[c] = d[c];
                    for (var f = 0; f < za.length; f++)
                        c = za[f], Object.prototype.hasOwnProperty.call(d, c) && (a[c] = d[c]);
                }
            };
            Da = function (a) {
                var b = 0 > a;
                a = Math.abs(a);
                var c = a >>> 0;
                a = Math.floor((a - c) / 4294967296);
                a >>>= 0;
                b && (a = ~a >>> 0, c = (~c >>> 0) + 1, 4294967295 < c && (c = 0, a++, 4294967295 < a && (a = 0)));
                Ba = c;
                Ca = a;
            };
            Ga = function (a) {
                return Ea(a, function (b) {
                    return b;
                }, function (b) {
                    return new Uint8Array(b);
                });
            };
            Ia = function (a, b, c) {
                return 'object' === typeof a ? Ha && !Array.isArray(a) && a instanceof Uint8Array ? c(a) : Ea(a, b, c) : b(a);
            };
            Ea = function (a, b, c) {
                if (Array.isArray(a)) {
                    for (var d = Array(a.length), e = 0; e < a.length; e++) {
                        var f = a[e];
                        null != f && (d[e] = Ia(f, b, c));
                    }
                    Array.isArray(a) && a.Sd && Ja(d);
                    return d;
                }
                d = {};
                for (e in a)
                    Object.prototype.hasOwnProperty.call(a, e) && (f = a[e], null != f && (d[e] = Ia(f, b, c)));
                return d;
            };
            La = function (a) {
                return Ea(a, function (b) {
                    return 'number' === typeof b ? isFinite(b) ? b : String(b) : b;
                }, function (b) {
                    return Ka(b);
                });
            };
            Na = function (a) {
                return null == a || 'string' === typeof a ? a : Ha && a instanceof Uint8Array ? Ka(a) : null;
            };
            Pa = function (a, b) {
                Oa = b;
                a = new a(b);
                Oa = null;
                return a;
            };
            Qa = function (a) {
                var b = a.constructor;
                a = Ga(a.wa());
                return Pa(b, a);
            };
            Sa = function (a) {
                if (a !== _.Ra)
                    throw Error('Bad secret');
            };
            Ua = function () {
                var a = 'undefined' !== typeof window ? window.trustedTypes : void 0;
                return null !== a && void 0 !== a ? a : null;
            };
            Wa = function () {
                var a, b;
                void 0 === Va && (Va = null !== (b = null === (a = Ua()) || void 0 === a ? void 0 : a.createPolicy('google#safe', {
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
                return Va;
            };
            Ya = function (a) {
                var b, c = null === (b = Wa()) || void 0 === b ? void 0 : b.createHTML(a);
                return new Xa(null !== c && void 0 !== c ? c : a, _.Ra);
            };
            $a = function (a) {
                var b, c = null === (b = Wa()) || void 0 === b ? void 0 : b.createScript(a);
                return new Za(null !== c && void 0 !== c ? c : a, _.Ra);
            };
            bb = function (a) {
                var b;
                if (null === (b = Ua()) || void 0 === b ? 0 : b.isScript(a))
                    return a;
                if (a instanceof Za)
                    return a.j;
                throw Error('wrong type');
            };
            db = function (a) {
                var b, c = null === (b = Wa()) || void 0 === b ? void 0 : b.createScriptURL(a);
                return new cb(null !== c && void 0 !== c ? c : a, _.Ra);
            };
            gb = function (a) {
                var b;
                if (null === (b = Ua()) || void 0 === b ? 0 : b.isScriptURL(a))
                    return a;
                if (a instanceof cb)
                    return a.j;
                throw Error('wrong type');
            };
            hb = function (a) {
                var b;
                a = gb(a);
                return (null === (b = Ua()) || void 0 === b ? 0 : b.isScriptURL(a)) ? TrustedScriptURL.prototype.toString.apply(a) : a;
            };
            kb = function (a) {
                return a instanceof ib ? gb(a) : jb(a);
            };
            lb = function (a) {
                var b, c = (a.ownerDocument && a.ownerDocument.defaultView || window).document;
                (b = (c = null === (b = c.querySelector) || void 0 === b ? void 0 : b.call(c, 'script[nonce]')) ? c.nonce || c.getAttribute('nonce') || '' : '') && a.setAttribute('nonce', b);
            };
            nb = function (a) {
                return a ? a.passive && mb() ? a : a.capture || !1 : !1;
            };
            pb = function (a) {
                return new _.ob(function (b) {
                    return b.substr(0, a.length + 1).toLowerCase() === a + ':';
                });
            };
            rb = function (a) {
                return function () {
                    return qb(window) <= a;
                };
            };
            sb = function (a) {
                return a;
            };
            wb = function (a, b) {
                if (!(b || tb)(a))
                    throw Error(String(a));
            };
            xb = function (a, b) {
                wb(a, b);
                return a;
            };
            yb = function (a, b, c) {
                if (!a) {
                    if (c && 0 < c.length)
                        throw Error('[' + c.map(String).join(',') + ']');
                    throw Error(String(a));
                }
            };
            Jb = function (a, b, c) {
                try {
                    c(function () {
                        var d = new zb();
                        var e = void 0 === e ? window : e;
                        var f = new Ab();
                        var g = Bb(e);
                        f = Cb(f, 1, g, 0);
                        g = Db();
                        f = Eb(f, 2, g);
                        e = Cb(f, 3, e.document.URL, '');
                        d = Gb(d, 2, e);
                        e = new Hb();
                        e = Ib(e, 1, a);
                        e = Cb(e, 2, b.name, '');
                        e = Cb(e, 3, b.message, '');
                        b.stack && Eb(e, 4, b.stack.split(/\n\s*/));
                        return Gb(d, 1, e);
                    });
                } catch (d) {
                }
            };
            Kb = function (a, b, c, d) {
                d = void 0 === d ? !1 : d;
                return function (e) {
                    for (var f = [], g = 0; g < arguments.length; ++g)
                        f[g] = arguments[g];
                    try {
                        return c.apply(this, f);
                    } catch (h) {
                        if (Jb(a, h, b), !d)
                            throw h;
                    }
                };
            };
            Lb = function (a) {
                var b = a.split('/');
                return '/' === a.charAt(0) && 2 <= b.length ? b[1] : '/' !== a.charAt(0) && 1 <= b.length ? b[0] : '';
            };
            Ob = function (a) {
                if (15360 >= a.length)
                    return a;
                var b = a;
                15360 < b.length && (b = b.substring(0, 15352), b = b.replace(/%\w?$/, ''), b = b.replace(/&[^=]*=?$/, ''), b += '&trunc=1');
                Mb(Nb.L(), 9 .toString(), 9, a.length - b.length + 8);
                return b;
            };
            Pb = function (a) {
                var b = a.indexOf('google_preview=', a.lastIndexOf('?')), c = a.indexOf('&', b);
                -1 === c && (c = a.length - 1, --b);
                return a.substring(0, b) + a.substring(c + 1, a.length);
            };
            Qb = function (a, b) {
                b = void 0 === b ? window : b;
                return b.location ? b.URLSearchParams ? (a = b.URLSearchParams ? new URLSearchParams(b.location.search).get(a) : null) && a.length ? a : null : (a = new RegExp('[?&]' + a + '=([^&]*)').exec(b.location.search)) ? decodeURIComponent(a[1]) : null : null;
            };
            Rb = function (a, b) {
                b = void 0 === b ? window : b;
                return !!Qb(a, b);
            };
            Tb = function () {
                return Sb();
            };
            Sb = function () {
                var a = Number('2021072701');
                return 1 > a || Math.floor(a) !== a ? (Wb({ v: '2021072701' }, 'gpt_inv_ver'), '1') : '2021072701';
            };
            Yb = function (a, b) {
                a = { methodId: a };
                b.name && (a.name = b.name);
                b.message && (a.message = b.message.substring(0, 512));
                b.fileName && (a.fileName = b.fileName);
                b.lineNumber && (a.lineNumber = b.lineNumber);
                b.stack && (a.stack = Xb(b.stack, ''));
                return a;
            };
            $b = function (a, b, c) {
                c = void 0 === c ? !1 : c;
                Zb(a, b);
                if (!c)
                    throw b;
            };
            Zb = function (a, b, c) {
                c = void 0 === c ? ac : c;
                if (!b.isReported)
                    try {
                        b.isReported = !0;
                        if ('__throw_for_testing' === b.name && _.bc(148))
                            throw Error('throwing error for testing');
                        var d = Yb(a, b), e = new cc('gpt_exception');
                        try {
                            dc(e);
                        } catch (f) {
                        }
                        _.ec(d, function (f, g) {
                            r(e, g, f);
                        });
                        fc(e, c);
                    } catch (f) {
                    }
            };
            jc = function () {
                var a = _.gc(hc);
                return new ic(rb(0 < a ? 1 / a : 0));
            };
            rc = function (a, b) {
                var c = _.gc(hc);
                kc(b, function () {
                    var d = a();
                    var e = new lc();
                    var f = Sb();
                    e = Cb(e, 1, f, '');
                    f = mc();
                    e = Cb(e, 2, f, 0);
                    f = [].concat(_.nc(_.u(oc, 'keys').call(oc)));
                    e = Eb(e, 3, f);
                    f = pc[0];
                    d.j || (d.j = {});
                    var g = e ? e.wa() : e;
                    d.j[4] = e;
                    d = qc(d, 4, f, g);
                    d = Cb(d, 5, c, 0);
                    return Cb(d, 3, 1 / c, 0);
                });
            };
            x = function (a, b, c) {
                c = void 0 === c ? !1 : c;
                var d = void 0 === d ? jc() : d;
                return sc(a, b, c, _.v(tc), d);
            };
            vc = function (a, b) {
                if (0.1 > Math.random())
                    try {
                        var c = Error();
                        uc('gpt_api_usage', function (d) {
                            r(d, 'methodId', a);
                            r(d, 'args', b);
                            c.stack && r(d, 'stack', Xb(c.stack, c.message));
                            dc(d);
                        }, { qa: 1 });
                    } catch (d) {
                    }
            };
            sc = function (a, b, c, d, e) {
                c = void 0 === c ? !1 : c;
                d = void 0 === d ? !1 : d;
                e = void 0 === e ? jc() : e;
                return _.v(wc) ? function (f) {
                    for (var g = [], h = 0; h < arguments.length; ++h)
                        g[h] = arguments[h];
                    d && vc.call(this, a, g.length);
                    return Kb(a, function (k) {
                        rc(k, e);
                    }, b, c).apply(this, g);
                } : function (f) {
                    for (var g = [], h = 0; h < arguments.length; ++h)
                        g[h] = arguments[h];
                    h = void 0;
                    var k = !1, l = null, m = Nb.L();
                    try {
                        var n = _.v(xc);
                        n && m && (l = m.start(a.toString(), 3));
                        h = b.apply(this, g);
                        k = !0;
                        n && m && m.end(l);
                    } catch (p) {
                        try {
                            k ? Zb(110, p) : $b.call(this, a, p, c);
                        } catch (t) {
                            if (Ac(l), !k && !c)
                                throw p;
                        }
                    }
                    d && vc.call(this, a, g.length);
                    return h;
                };
            };
            Bc = function (a, b, c) {
                c = void 0 === c ? !1 : c;
                var d = void 0 === d ? !1 : d;
                var e = void 0 === e ? jc() : e;
                sc(a, b, c, d, e)();
            };
            Cc = function (a) {
                a && 'function' == typeof a.za && a.za();
            };
            Dc = function (a, b) {
                const $___old_ce421a9e630db4e6 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                try {
                    if ($___old_ce421a9e630db4e6)
                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_b6b0cb69e1b79e1a.localStorage));
                    return function () {
                        b = void 0 === b ? window : b;
                        if (y(a, 5))
                            try {
                                return b.localStorage;
                            } catch (c) {
                            }
                        return null;
                    }.apply(this, arguments);
                } finally {
                    if ($___old_ce421a9e630db4e6)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_ce421a9e630db4e6));
                }
            };
            Ec = function (a) {
                return 'null' !== a.origin;
            };
            Gc = function (a, b, c) {
                b = y(b, 5) && Ec(c) ? c.document.cookie : null;
                return null === b ? null : new Fc({ cookie: b }).get(a) || '';
            };
            Ic = function (a, b) {
                return z(this, function d() {
                    var e, f, g;
                    return A(d, function (h) {
                        if (1 == h.j)
                            return e = 0 < b ? a.filter(function (k) {
                                return !k.Bc;
                            }) : a, C(h, D.Promise.all(e.map(function (k) {
                                return k.Fc.promise;
                            })), 2);
                        if (3 != h.j) {
                            if (a.length === e.length)
                                return h.return(0);
                            f = a.filter(function (k) {
                                return k.Bc;
                            });
                            g = _.Hc();
                            return C(h, D.Promise.race([
                                D.Promise.all(f.map(function (k) {
                                    return k.Fc.promise;
                                })),
                                new D.Promise(function (k) {
                                    return void setTimeout(k, b);
                                })
                            ]), 3);
                        }
                        return h.return(_.Hc() - g);
                    });
                });
            };
            Jc = function (a) {
                var b, c, d, e;
                return {
                    Jd: {
                        wrapper: 1,
                        bidder: a.bidder,
                        amount: a.cpm,
                        size: [
                            a.width,
                            a.height
                        ],
                        targetingKeys: _.u(Object, 'keys').call(Object, null !== (b = a.adserverTargeting) && void 0 !== b ? b : {}),
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
            Yc = function (a) {
                var b = new Kc(), c = Lc(), d = a.bidder, e = a.wrapper, f = a.amount, g = void 0 === a.currency ? 'USD' : a.currency, h = a.size, k = a.targetingKeys, l = a.ad, m = a.adUrl, n = void 0 === a.ttlMs ? 0 : a.ttlMs, p = a.responseTimestampMs, t = void 0 === a.mediaType ? 'banner' : a.mediaType, w = a.auctionId;
                'number' === typeof p ? E(b, 9, p) : (E(b, 9, Date.now()), void 0 !== p && c.I(Mc('Slot.setClientBid', Nc(a), 'responseTimestampMs', Nc(p))));
                if (1 === e)
                    Oc(b, e);
                else
                    return c.I(Pc('Slot.setClientBid', Nc(e), '1')), null;
                if ('string' === typeof d)
                    Qc(b, d);
                else
                    return c.I(Mc('Slot.setClientBid', Nc(a), 'bidder', Nc(d))), null;
                if ('string' === typeof l)
                    qc(b, 7, Rc[1], l);
                else {
                    if (void 0 !== l)
                        return c.I(Mc('Slot.setClientBid', Nc(a), 'ad', String(l))), null;
                    if ('string' === typeof m)
                        qc(b, 12, Rc[1], m);
                    else if (void 0 !== m)
                        return c.I(Mc('Slot.setClientBid', Nc(a), 'adUrl', String(m))), null;
                }
                if (Sc(h) && Array.isArray(h))
                    Tc(b, Uc(Vc(new Wc(), h[0]), h[1]));
                else
                    return c.I(Mc('Slot.setClientBid', Nc(a), 'size', Nc(h))), null;
                'number' === typeof f ? qc(b, 2, Rc[0], f) : 'string' === typeof f ? qc(b, 3, Rc[0], f) : void 0 !== f && c.I(Mc('Slot.setClientBid', Nc(a), 'amount', Nc(f)));
                'string' === typeof g ? E(b, 4, g) : c.I(Mc('Slot.setClientBid', Nc(a), 'currency', Nc(g)));
                Array.isArray(k) && k.every(function (B) {
                    return 'string' === typeof B;
                }) ? Eb(b, 6, k) : c.I(Mc('Slot.setClientBid', Nc(a), 'targetingKeys', Nc(k)));
                'number' === typeof n ? E(b, 8, n) : c.I(Mc('Slot.setClientBid', Nc(a), 'ttlMs', Nc(n)));
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
                        c.I(Pc('Slot.setClientBid', Nc(t), 'banner,native,video'));
                    }
                else
                    c.I(Mc('Slot.setClientBid', Nc(a), 'mediaType', Nc(t)));
                E(b, 11, d);
                'string' === typeof w && Xc(b, w);
                return b;
            };
            $c = function (a, b) {
                Zc.has(a);
                Zc.set(a, b);
            };
            cd = function (a) {
                return ad(a, function () {
                    return new bd(a);
                });
            };
            md = function (a, b, c, d) {
                var e = dd(b, a);
                if (!e)
                    return null;
                var f = ed(e);
                if (!f)
                    return f;
                var g = e === fd(b, a), h = gd(function () {
                        var n = g ? fd(b, a) : e;
                        return n && hd(n, window) || {};
                    }), k = id(c)[0];
                c = !1;
                Array.isArray(k) && (c = d ? g : 0 == f.x && 'center' == h()['text-align']);
                c && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - k[0]) / 2));
                d = function (n) {
                    var p = h();
                    null == (null == p ? void 0 : p.getPropertyValue) ? n = null : (n = p.getPropertyValue(n), n = (n = jd.exec(n)) ? +n[1] : null);
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
                return f && kd(e) ? f : new _.ld(-12245933, -12245933);
            };
            td = function (a, b, c) {
                c = (c = void 0 === c ? null : c) ? Dc(c) : null;
                var d = 0;
                try {
                    d |= a != a.top ? 512 : 0, d |= a.navigator && /Android 2/.test(a.navigator.userAgent) ? 1048576 : 0;
                } catch (g) {
                    d |= 32;
                }
                b = void 0 === b ? !1 : b;
                var e = 0;
                try {
                    e |= nd(a, 2500);
                    if (_.v(od)) {
                        var f = _.pd(a).clientHeight;
                        e |= f ? 320 > f ? -2147483648 : 0 : 1073741824;
                    }
                    e |= qd(a);
                    b && !_.rd(_.sd(c)) && (e |= 134217728);
                } catch (g) {
                    e |= 32;
                }
                return d | e;
            };
            wd = function (a, b, c, d) {
                if (5 !== ud(b))
                    return !1;
                var e = td(c, '6499' !== Lb(a.getAdUnitPath()), d);
                e && uc('gpt_int_ns', function (f) {
                    r(f, 'nsr', e);
                    dc(f);
                }, { qa: _.gc(vd) });
                return !!e;
            };
            yd = function (a) {
                if (4 === a && _.v(xd))
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
            Dd = function (a) {
                a = yd(a);
                if (!a)
                    return null;
                var b = 0;
                if (11 !== a) {
                    b |= _.F != _.F.top ? 512 : 0;
                    var c = _.zd(_.F);
                    c = 26 !== a && 27 !== a && 40 !== a && 10 !== a && c.adCount ? 1 == a || 2 == a ? !(!c.adCount[1] && !c.adCount[2]) : (c = c.adCount[a]) ? 1 <= c : !1 : !1;
                    c && (b |= 64);
                    if (b)
                        return b;
                }
                if (2 === a || 1 === a) {
                    0 === Ad() && (b |= 536870912);
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
                        d |= _.Bd(_.F) ? 0 : 8, d |= nd(_.F, Cd), d |= qd(_.F);
                    } catch (g) {
                        d |= 32;
                    }
                    b |= d;
                } else
                    8 === a ? b |= td(_.F) : 11 !== a && (b |= 32);
                b || (d = _.zd(_.F), d.adCount = d.adCount || {}, d.adCount[a] = d.adCount[a] + 1 || 1);
                return b;
            };
            Fd = function (a) {
                return Ed().some(function (b) {
                    return Lb(b.getAdUnitPath()) === a;
                });
            };
            Id = function (a) {
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
                    Gd(g, a);
                    c && 'complete' !== b.document.readyState ? _.Hd(b, 'load', function () {
                        b.document.body.appendChild(g);
                    }) : b.document.body.appendChild(g);
                });
            };
            Md = function (a) {
                return z(this, function c() {
                    var d, e, f, g, h, k;
                    return A(c, function (l) {
                        switch (l.j) {
                        case 1:
                            return d = 'https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=' + a.j + ('&tv=' + a.m + '&st=') + a.Ta, e = void 0, l.G = 2, C(l, Jd(d), 4);
                        case 4:
                            e = l.m;
                            Kd(l, 3);
                            break;
                        case 2:
                            Ld(l);
                        case 3:
                            if (!e)
                                return l.return(void 0);
                            f = a.rb || e.sodar_query_id;
                            g = void 0 === e.rc_enable ? 'n' : e.rc_enable;
                            h = void 0 === e.bg_snapshot_delay_ms ? '0' : e.bg_snapshot_delay_ms;
                            k = void 0 === e.is_gen_204 ? '1' : e.is_gen_204;
                            return f && e.bg_hash_basename && e.bg_binary ? l.return({
                                context: a.o,
                                md: e.bg_hash_basename,
                                ld: e.bg_binary,
                                Xd: a.j + '_' + a.m,
                                rb: f,
                                Ta: a.Ta,
                                Nb: g,
                                Wb: h,
                                Mb: k
                            }) : l.return(void 0);
                        }
                    });
                });
            };
            Pd = function (a) {
                return z(this, function c() {
                    var d;
                    return A(c, function (e) {
                        if (1 == e.j)
                            return C(e, Md(a), 2);
                        if (d = e.m) {
                            var f = 'sodar2';
                            f = void 0 === f ? 'sodar2' : f;
                            var g = window, h = g.GoogleGcLKhOms;
                            h && 'function' === typeof h.push || (h = g.GoogleGcLKhOms = []);
                            var k = {};
                            h.push((k._ctx_ = d.context, k._bgv_ = d.md, k._bgp_ = d.ld, k._li_ = d.Xd, k._jk_ = d.rb, k._st_ = d.Ta, k._rc_ = d.Nb, k._dl_ = d.Wb, k._g2_ = d.Mb, k));
                            if (h = g.GoogleDX5YKUSk)
                                g.GoogleDX5YKUSk = void 0, h[1]();
                            f = Nd(Od, { basename: f });
                            Id(f);
                        }
                        return e.return(d);
                    });
                });
            };
            Qd = function (a) {
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
            Rd = function (a, b) {
                return 0 === a.size ? !1 : void 0 === b || 0 === b.length ? !0 : b.some(function (c) {
                    return a.has(c);
                });
            };
            Sd = function (a, b) {
                if (a.length !== b.length)
                    throw Error('Length of two vectors should be the same!');
                for (var c = 0, d = 0; d < a.length; d++)
                    c += a[d] * b[d];
                return c;
            };
            Wd = function (a, b, c) {
                var d = Td, e, f, g = [];
                b = _.H(b);
                for (var h = b.next(); !h.done; h = b.next()) {
                    h = h.value;
                    var k = c(h, {}, null !== (e = a.perBuyerSignals.get('gdaSignals')) && void 0 !== e ? e : new Ud(), null !== (f = a.j.get('gdaSignals')) && void 0 !== f ? f : new Vd(), {});
                    0 >= k.bid || null === k.ad || (k = d(k.ad, k.bid, a, {}), 0 < k && g.push({
                        ad: h,
                        ne: k
                    }));
                }
                return g;
            };
            Yd = function () {
                var a;
                var b = bb(Xd);
                b = (null === (a = Ua()) || void 0 === a ? 0 : a.isScript(b)) ? TrustedScript.prototype.toString.apply(b) : b;
                return db(URL.createObjectURL(new Blob([b], { type: 'text/javascript' })));
            };
            $d = function (a, b, c, d) {
                c = void 0 === c ? null : c;
                d = void 0 === d ? {} : d;
                if (Math.random() < _.gc(Zd)) {
                    var e = {};
                    Wb(_.u(Object, 'assign').call(Object, (e.c = String(a), e.pc = String(Bb(window)), e.em = c, e.lid = b, e.eids = Db().join(), e), d), 'esp');
                }
            };
            fe = function (a, b, c, d) {
                $d(18, a);
                try {
                    var e = _.Hc();
                    _.gc(ae) && (be(b, Number(((0, I.M)(ce(b, 8)) - 1).toFixed(3))), E(b, 7, Math.round(e / 1000 / 60)));
                    return c().then(function (f) {
                        $d(29, a, null, { delta: String(_.Hc() - e) });
                        E(b, 3, Date.now());
                        de(a, b, f, d);
                        return b;
                    }).catch(function (f) {
                        de(a, b, J(b, 2), d);
                        $d(28, a, ee(f));
                        return b;
                    });
                } catch (f) {
                    return de(a, b, J(b, 2), d), $d(1, a, ee(f)), D.Promise.resolve(b);
                }
            };
            he = function () {
                var a = window;
                var b = void 0 === b ? function () {
                } : b;
                return new D.Promise(function (c) {
                    var d = function () {
                        c(b());
                        _.ge(a, 'load', d);
                    };
                    _.Hd(a, 'load', d);
                });
            };
            oe = function (a, b, c, d) {
                return z(this, function f() {
                    var g, h, k, l, m;
                    return A(f, function (n) {
                        if (1 == n.j)
                            return g = new ie(a, b, c, d), h = new je(g.A, g.B, c, d), k = new ke(h.A, h.B, c, d), l = new le(), me(l, [
                                g,
                                h,
                                k
                            ]), ne(l), C(n, h.l.promise, 2);
                        m = n.m;
                        return n.return(m ? m : {
                            id: a,
                            qd: null
                        });
                    });
                });
            };
            te = function (a, b, c) {
                var d;
                b ? pe() === qe(window) || _.v(re) ? a.encryptedSignalProviders instanceof se ? a.encryptedSignalProviders.j.push(c) : (b = new se(null !== (d = a.encryptedSignalProviders) && void 0 !== d ? d : [], b), a.encryptedSignalProviders = b, b.j.push(c)) : $d(16, '') : $d(15, '');
            };
            ue = function (a, b, c, d) {
                var e, f = null !== (e = a.encryptedSignalSource) && void 0 !== e ? e : a.encryptedSignalSource = {};
                c ? pe() === qe(window) || _.v(re) ? b.map(function (g) {
                    var h = g.ya;
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
                                        $d(17, h, null, (p.api = '0', p));
                                        n = oe(h, n, c, d);
                                    } else
                                        $d(14, h), n = D.Promise.resolve(null);
                                    n.then(l);
                                }
                            }
                        });
                        m && (f[h] = m);
                    });
                }) : $d(16, '') : $d(15, '');
            };
            xe = function (a, b, c) {
                var d, e = b.toString();
                if (c && !document.querySelector('[src="' + e + '"]'))
                    if (c = ve().get(a, c), c.getError())
                        $d(c.getError(), a, c.errorMessage);
                    else if (c = c.Xb, !c || !(0 === we(c) || 1 > (null !== (d = ce(c, 8)) && void 0 !== d ? d : 0))) {
                        $d(30, a, null, { url: e });
                        var f = document.createElement('script');
                        f.setAttribute('esp-signal', 'true');
                        Gd(f, b);
                        var g = function () {
                            $d(31, a, null, { url: e });
                            _.ge(f, 'error', g);
                        };
                        document.head.appendChild(f);
                        _.Hd(f, 'error', g);
                    }
            };
            Ce = function (a) {
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
            Ee = function (a) {
                if (!a)
                    return [0];
                a = 'number' === typeof a ? [a] : a;
                a = _.De(a, function (b) {
                    return 'number' === typeof b && 0 <= b && 1 >= b ? !0 : !1;
                });
                la(a);
                na(a, function (b, c) {
                    return b - c;
                });
                return a;
            };
            Fe = function (a) {
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
            He = function (a, b, c, d) {
                var e, f, g, h, k, l, m, n = new Ge(), p = '', t = function (w) {
                        try {
                            var B = 'object' === typeof w.data ? w.data : JSON.parse(w.data);
                            p === B.paw_id && (_.ge(a, 'message', t), n.resolve(d(B)));
                        } catch (K) {
                        }
                    };
                return 'function' === typeof (null === (e = a.gmaSdk) || void 0 === e ? void 0 : e.getQueryInfo) ? (_.Hd(a, 'message', t), p = c(a.gmaSdk), n.promise) : 'function' === typeof (null === (h = null === (g = null === (f = a.webkit) || void 0 === f ? void 0 : f.messageHandlers) || void 0 === g ? void 0 : g.getGmaQueryInfo) || void 0 === h ? void 0 : h.postMessage) || 'function' === typeof (null === (m = null === (l = null === (k = a.webkit) || void 0 === k ? void 0 : k.messageHandlers) || void 0 === l ? void 0 : l.getGmaSig) || void 0 === m ? void 0 : m.postMessage) ? (p = String(Math.floor(2147483647 * qb(a))), _.Hd(a, 'message', t), b(a.webkit.messageHandlers, p), n.promise) : null;
            };
            Ie = function (a) {
                return He(a, function (b, c) {
                    var d;
                    return void (null !== (d = b.getGmaQueryInfo) && void 0 !== d ? d : b.getGmaSig).postMessage(c);
                }, function (b) {
                    return b.getQueryInfo();
                }, function (b) {
                    return b.signal;
                });
            };
            Ke = function (a, b, c, d) {
                try {
                    if (a.setAttribute('data-google-query-id', c), !d) {
                        var e, f;
                        if (_.v(Je)) {
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
            Le = function (a) {
                return 'number' === typeof a || 'string' === typeof a;
            };
            Me = function (a) {
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
            Te = function () {
                var a = window, b = Ne(Oe(Ib(Pe(new Qe(), Re()), 4, 1), 2));
                var c = void 0 === c ? Se : c;
                a.goog_sdr_l || (Object.defineProperty(a, 'goog_sdr_l', { value: !0 }), 'complete' === a.document.readyState ? c(a, b) : _.Hd(a, 'load', function () {
                    return void c(a, b);
                }));
            };
            Ue = function (a) {
                var b, c;
                try {
                    return (null !== (c = null === (b = a.top) || void 0 === b ? void 0 : b.frames) && void 0 !== c ? c : {}).google_ads_top_frame;
                } catch (d) {
                }
                return null;
            };
            Ve = function (a) {
                var b = /^https?:\/\/[^/#?]+\/?$/;
                return !!a && !b.test(a);
            };
            Xe = function (a) {
                if (a === a.top || We(a.top))
                    return D.Promise.resolve({ status: 4 });
                var b = Ue(a);
                if (!b)
                    return D.Promise.resolve({ status: 2 });
                if (a.parent === a.top && Ve(a.document.referrer))
                    return D.Promise.resolve({ status: 3 });
                var c = new Ge();
                a = new MessageChannel();
                a.port1.onmessage = function (d) {
                    '__goog_top_url_resp' === d.data.msgType && c.resolve({
                        hb: d.data.topUrl,
                        status: d.data.topUrl ? 0 : 1
                    });
                };
                b.postMessage({ msgType: '__goog_top_url_req' }, '*', [a.port2]);
                return c.promise;
            };
            Ye = function (a) {
                return !!a && !!J(a, 1);
            };
            $e = function (a) {
                a = (We(a.top) ? a.top : a).AMP;
                return 'object' === typeof a && !!Ze(a, function (b, c) {
                    return !/^inabox/i.test(c);
                });
            };
            bf = function (a) {
                return new D.Map([
                    [
                        'arp',
                        { value: $e(a) ? 1 : null }
                    ],
                    [
                        'abxe',
                        { value: We(a.top) || af(a.IntersectionObserver) ? 1 : null }
                    ]
                ]);
            };
            df = function () {
                var a = window, b, c, d;
                null !== (b = a.pbjs) && void 0 !== b ? b : a.pbjs = {};
                null !== (c = (d = a.pbjs).que) && void 0 !== c ? c : d.que = [];
                a.pbjs.que.push(sc(860, function () {
                    var e, f = (0, I.M)(a.pbjs);
                    null === (e = f.onEvent) || void 0 === e ? void 0 : e.call(f, 'setTargeting', sc(861, function (g) {
                        cf(f, g);
                    }));
                }));
            };
            ff = function (a) {
                var b;
                return null === (b = (L = _.u(Object, 'entries').call(Object, ef()), _.u(L, 'find')).call(L, function (c) {
                    var d = _.H(c);
                    c = d.next().value;
                    d = d.next().value;
                    return (L = J(d, 4), _.u(L, 'includes')).call(L, 'publisher_ads') && (c === a || d.getAdUnitPath() === a);
                })) || void 0 === b ? void 0 : b[1];
            };
            cf = function (a, b) {
                var c, d, e, f, g, h, k = null;
                b = _.H(_.u(Object, 'keys').call(Object, b));
                for (var l = b.next(); !l.done; l = b.next()) {
                    var m = l.value;
                    if (l = ff(m)) {
                        var n = null !== (g = null !== (d = null === (c = a.getBidResponsesForAdUnitCode) || void 0 === c ? void 0 : c.call(a, m)) && void 0 !== d ? d : null === (f = null === (e = a.getBidResponses) || void 0 === e ? void 0 : e.call(a)) || void 0 === f ? void 0 : f[m]) && void 0 !== g ? g : { bids: [] };
                        m = {};
                        n = _.H(null !== (h = n.bids) && void 0 !== h ? h : []);
                        for (var p = n.next(); !p.done; m = { yb: m.yb }, p = n.next()) {
                            p = Jc(p.value);
                            var t = p.Jd;
                            m.yb = p.adId;
                            p = Yc(t);
                            null != p && (null !== k && void 0 !== k ? k : k = J(p, 15), (t = (L = M(l, gf, 21), _.u(L, 'find')).call(L, function (w) {
                                return function (B) {
                                    return J(B, 1) === w.yb;
                                };
                            }(m))) ? hf(t, p) : (p = hf(jf(new gf(), m.yb), p), kf(l, p)));
                        }
                    }
                }
                k && _.gc(lf) && Math.random() < _.gc(lf) && mf(a, k);
            };
            mf = function (a, b) {
                var c, d, e, f, g = function (n, p) {
                        n = ff(n);
                        n = (null === n || void 0 === n ? void 0 : (L = M(n, gf, 21), _.u(L, 'find')).call(L, function (t) {
                            var w, B;
                            return 1 === (null === (w = N(t, Kc, 2)) || void 0 === w ? void 0 : J(w, 10)) && (null === (B = N(t, Kc, 2)) || void 0 === B ? void 0 : J(B, 1)) === p;
                        })) || (null === n || void 0 === n ? void 0 : kf(n, hf(new gf(), Xc(Qc(Oc(new Kc(), 1), p), b))));
                        return null === n || void 0 === n ? void 0 : N(n, Kc, 2);
                    }, h = (null === (c = null === a || void 0 === a ? void 0 : a.getEvents) || void 0 === c ? void 0 : c.call(a)) || [];
                h = _.H(h);
                for (var k = h.next(); !k.done; k = h.next())
                    switch (k = k.value, k.eventType) {
                    case 'bidRequested':
                        if (!Array.isArray(k.args) && Array.isArray(k.args.bids))
                            for (var l = _.H(k.args.bids), m = l.next(); !m.done; m = l.next())
                                m = m.value, m.bidder && m.adUnitCode && m.auctionId === b && (null === (d = g(m.adUnitCode, m.bidder)) || void 0 === d ? void 0 : nf(d, k.elapsedTime));
                        break;
                    case 'bidResponse':
                        !Array.isArray(k.args) && k.args.bidder && k.args.adUnitCode && k.args.auctionId === b && (l = g(k.args.adUnitCode, k.args.bidder), null === l || void 0 === l ? void 0 : nf(l, k.elapsedTime - ((null === l || void 0 === l ? void 0 : J(l, 13)) || 0)), null === l || void 0 === l ? void 0 : E(l, 14, 1));
                        break;
                    case 'bidTimeout':
                        if (Array.isArray(k.args))
                            for (k = _.H(k.args), m = k.next(); !m.done; m = k.next())
                                l = m.value, l.bidder && l.adUnitCode && l.auctionId === b && (l = g(l.adUnitCode, l.bidder), null === l || void 0 === l ? void 0 : E(l, 14, 3), null === l || void 0 === l ? void 0 : nf(l, (null === (f = null === (e = null === a || void 0 === a ? void 0 : a.getConfig) || void 0 === e ? void 0 : e.call(a)) || void 0 === f ? void 0 : f.bidderTimeout) || 0));
                        break;
                    case 'noBid':
                        !Array.isArray(k.args) && k.args.bidder && k.args.adUnitCode && k.args.auctionId === b && (l = g(k.args.adUnitCode, k.args.bidder), 3 !== (null === l || void 0 === l ? void 0 : J(l, 14)) && (null === l || void 0 === l ? void 0 : E(l, 14, 2), null === l || void 0 === l ? void 0 : nf(l, k.elapsedTime - (J(l, 13) || 0))));
                    }
            };
            qf = function (a, b) {
                return of(a, function (c) {
                    return pf(b[c.j]);
                }, '', function (c) {
                    return null != c;
                }, '~');
            };
            vf = function (a, b) {
                var c;
                return null !== (c = (L = M(a, rf, 1), _.u(L, 'find')).call(L, function (d) {
                    return sf(d, 1, 0) === b;
                })) && void 0 !== c ? c : tf(a, uf(new rf(), b));
            };
            Af = function (a, b) {
                var c;
                return null !== (c = (L = M(a, wf, 2), _.u(L, 'find')).call(L, function (d) {
                    return xf(d, 1) === b;
                })) && void 0 !== c ? c : yf(a, zf(new wf(), b));
            };
            pf = function (a) {
                for (var b = new Bf(), c = _.H(M(a, gf, 21)), d = c.next(); !d.done; d = c.next()) {
                    var e = d.value;
                    d = (0, I.M)(N(e, Kc, 2));
                    var f = vf(b, (0, I.M)(J(d, 10)));
                    f = Af(f, (0, I.M)(J(d, 1)));
                    Cf(f, J(d, 13) || 0);
                    Df(f, J(d, 14) || 1);
                    var g = new Ef();
                    Ff(d, 2) && Gf(g, 1000000 * (0, I.M)(J(d, 2)));
                    Ff(d, 4) && Hf(g, (0, I.M)(J(d, 4)));
                    Ff(e, 1) && If(g, (0, I.M)(J(e, 1)));
                    e = {};
                    for (var h = _.H(J(d, 6)), k = h.next(); !k.done; e = { Bb: e.Bb }, k = h.next())
                        e.Bb = k.value, (L = M(a, Jf, 9), _.u(L, 'find')).call(L, function (l) {
                            return function (m) {
                                return Kf(m) === l.Bb;
                            };
                        }(e)) && Lf(g, 4, e.Bb);
                    Ff(d, 11) && Mf(g, J(d, 11));
                    Nf(f, 3, g, Ef);
                }
                if (!M(b, rf, 1).length)
                    return null;
                a = new Of();
                Pf(b, a);
                return Ka(Qf(a), 3);
            };
            Sf = function (a) {
                var b = a, c = 0;
                Rf(b, function (d) {
                    var e;
                    return 1 === (null == (e = d.parentElement) ? void 0 : e.childElementCount) ? (b = d.parentElement, c++, !0) : !1;
                });
                return {
                    pe: b,
                    depth: c
                };
            };
            Tf = function (a, b) {
                var c = _.bc(23);
                uc('gpt_not_reserved', function (d) {
                    dc(d);
                    r(d, 'inViewport', a);
                    r(d, 'depth', b);
                }, { qa: c });
            };
            Xf = function (a, b, c) {
                var d = a.map(function (e) {
                    return b[e.j];
                });
                return new D.Map([
                    [
                        'ists',
                        {
                            value: Uf(d, function (e) {
                                return 0 != ud(e);
                            }) || null
                        }
                    ],
                    [
                        'fas',
                        {
                            value: of(d, function (e) {
                                return yd(ud(e));
                            }, 0)
                        }
                    ],
                    [
                        'pfxs',
                        {
                            value: _.v(Vf) ? Uf(a, function (e) {
                                var f = b[e.j], g;
                                if (g = !yd(ud(f))) {
                                    g = null;
                                    Array.isArray(id(f)[0]) && (g = _.H(id(f)[0]), f = g.next().value, g = g.next().value, g = {
                                        width: f,
                                        height: g
                                    });
                                    a: {
                                        var h = dd(e, c);
                                        e = {
                                            Wc: g,
                                            Dc: !1
                                        };
                                        var k = void 0 === e ? {} : e;
                                        e = void 0 === k.Wc ? null : k.Wc;
                                        f = void 0 === k.Zd ? 100 : k.Zd;
                                        g = void 0 === k.xb ? 50 : k.xb;
                                        k = void 0 === k.Dc ? !0 : k.Dc;
                                        for (var l = Wf(), m = !1; h;) {
                                            if (!f-- || Wf() - l >= g) {
                                                g = !1;
                                                break a;
                                            }
                                            switch (h.nodeType) {
                                            case 9:
                                                try {
                                                    var n = h.parentWindow || h.defaultView;
                                                    if (n) {
                                                        var p = n.frameElement;
                                                        if (p && We(n.parent)) {
                                                            h = p;
                                                            break;
                                                        }
                                                    }
                                                } catch (G) {
                                                }
                                                h = null;
                                                break;
                                            case 1:
                                                var t = h, w;
                                                if (w = k) {
                                                    b: {
                                                        try {
                                                            if (0 < t.offsetWidth && 0 < t.offsetHeight && t.style && 'none' !== t.style.display && 'hidden' !== t.style.visibility && (!t.style.opacity || 0 !== Number(t.style.opacity))) {
                                                                var B = t.getBoundingClientRect();
                                                                var K = 0 < B.right && 0 < B.bottom;
                                                                break b;
                                                            }
                                                        } catch (G) {
                                                        }
                                                        K = !1;
                                                    }
                                                    w = !K;
                                                }
                                                if (w) {
                                                    g = !1;
                                                    break a;
                                                }
                                                m || (/^html|body$/i.test(t.tagName) ? m = null : (m = t.style.position || (hd(t, window) || {}).position, m = /^fixed/i.test(m) ? t : null), m = !!m && (!e || m.offsetWidth * m.offsetHeight <= 4 * e.width * e.height));
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
            Yf = function (a) {
                return new D.Map([[
                        'rbvs',
                        {
                            value: Uf(a, function (b) {
                                return 4 == ud(b);
                            }) || null
                        }
                    ]]);
            };
            $f = function (a) {
                if (_.v(Zf))
                    return new D.Map();
                var b = a.Cb, c = a.Tb, d = 0 === a.sd;
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
                        { value: a.Ob }
                    ]
                ]);
            };
            cg = function (a, b) {
                var c, d, e, f;
                a = ag(a) || new bg();
                var g = sf(a, 6, 2);
                return new D.Map([
                    [
                        'rdp',
                        { value: y(a, 1) ? '1' : null }
                    ],
                    [
                        'ltd',
                        { value: y(a, 9) ? '1' : null }
                    ],
                    [
                        'gdpr_consent',
                        { value: null !== (c = J(b, 2)) && void 0 !== c ? c : null }
                    ],
                    [
                        'gdpr',
                        {
                            value: Ff(b, 3) ? y(b, 3) ? '1' : '0' : null,
                            options: { ia: !0 }
                        }
                    ],
                    [
                        'addtl_consent',
                        { value: null !== (d = J(b, 4)) && void 0 !== d ? d : null }
                    ],
                    [
                        'tcfe',
                        { value: null !== (e = J(b, 7)) && void 0 !== e ? e : null }
                    ],
                    [
                        'us_privacy',
                        { value: null !== (f = J(b, 1)) && void 0 !== f ? f : null }
                    ],
                    [
                        'npa',
                        { value: y(b, 6) || y(a, 8) ? 1 : null }
                    ],
                    [
                        'tfua',
                        {
                            value: 2 !== g ? g : null,
                            options: { ia: !0 }
                        }
                    ],
                    [
                        'tfcd',
                        {
                            value: Ff(a, 5) ? J(a, 5) : null,
                            options: { ia: !0 }
                        }
                    ]
                ]);
            };
            fg = function (a, b, c) {
                var d = window;
                return new D.Map([
                    [
                        'ris',
                        {
                            value: of(b, function (e) {
                                var f, g;
                                e = null !== (g = null === (f = a.j.get(e)) || void 0 === f ? void 0 : f.Jc) && void 0 !== g ? g : 0;
                                f = _.dg(d);
                                return Math.round(Math.min((e && f ? f - e : 0) / 1000, 1800));
                            }, 0, void 0, '~')
                        }
                    ],
                    [
                        'rcs',
                        {
                            value: of(b, function (e) {
                                if (!c) {
                                    var f = void 0 === f ? _.F : f;
                                    var g = a.j.get(e);
                                    g && (g.Jc = _.dg(f) || 0, g.Tc++);
                                }
                                return eg(a, e);
                            }, 0)
                        }
                    ]
                ]);
            };
            gg = function (a, b) {
                var c, d = y(a, 21);
                return new D.Map([
                    [
                        'hxva',
                        {
                            value: d ? 1 : null,
                            options: { da: !1 }
                        }
                    ],
                    [
                        'cmsid',
                        { value: d ? J(a, 23) : null }
                    ],
                    [
                        'vid',
                        { value: d ? J(a, 22) : null }
                    ],
                    [
                        'pod',
                        {
                            value: isNaN(b.Na) ? null : b.Na,
                            options: { da: !1 }
                        }
                    ],
                    [
                        'ppos',
                        {
                            value: isNaN(b.Oa) ? null : b.Oa,
                            options: { da: !1 }
                        }
                    ],
                    [
                        'scor',
                        {
                            value: null !== (c = J(a, 29)) && void 0 !== c ? c : null,
                            options: { da: !1 }
                        }
                    ]
                ]);
            };
            hg = function (a, b) {
                return a && (a = N(a, Wc, 1)) ? J(a, 1) || b.innerWidth : 0;
            };
            ig = function (a, b) {
                return a && (a = N(a, Wc, 1)) ? J(a, 2) || b.innerHeight : 0;
            };
            jg = function (a) {
                return a && (a = N(a, Wc, 2)) ? J(a, 1) || 0 : 0;
            };
            kg = function (a) {
                return a && (a = N(a, Wc, 2)) ? J(a, 2) || 0 : 0;
            };
            mg = function (a, b, c) {
                a = a.map(function (e) {
                    return b[e.j];
                });
                var d = a.some(function (e) {
                    return Ff(e, 16);
                });
                return new D.Map([
                    [
                        'rtgs',
                        {
                            value: d ? a.map(function (e) {
                                return Ff(e, 16) ? 0 != id(e).length ? '1' : '2' : '0';
                            }) : null,
                            options: { ua: '!' }
                        }
                    ],
                    [
                        'max_w',
                        {
                            value: d ? a.map(function (e) {
                                return hg(N(e, lg, 16), c);
                            }) : null,
                            options: { ua: '!' }
                        }
                    ],
                    [
                        'max_h',
                        {
                            value: d ? a.map(function (e) {
                                return ig(N(e, lg, 16), c);
                            }) : null,
                            options: { ua: '!' }
                        }
                    ],
                    [
                        'min_w',
                        {
                            value: d ? a.map(function (e) {
                                return jg(N(e, lg, 16));
                            }) : null,
                            options: { ua: '!' }
                        }
                    ],
                    [
                        'min_h',
                        {
                            value: d ? a.map(function (e) {
                                return kg(N(e, lg, 16));
                            }) : null,
                            options: { ua: '!' }
                        }
                    ]
                ]);
            };
            rg = function (a, b) {
                b = void 0 === b ? ng : b;
                var c = ka(a), d = function (f) {
                        f = _.H(f);
                        f.next();
                        f = og(f);
                        return b(c, f);
                    }, e = function (f) {
                        var g = _.H(f);
                        f = g.next().value;
                        g = og(g);
                        return a.apply(f, g);
                    };
                return function (f) {
                    for (var g = [], h = 0; h < arguments.length; ++h)
                        g[h] = arguments[h];
                    h = this || _.F;
                    var k = pg.get(h);
                    k || (k = {}, pg.set(h, k));
                    return qg(k, [this].concat(_.nc(g)), e, d);
                };
            };
            tg = function (a) {
                a = sg(a);
                var b = [];
                _.ec(a, function (c, d) {
                    c = c.filter(function () {
                        return !0;
                    });
                    c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + '=' + c.join()));
                });
                return b;
            };
            vg = function (a, b, c, d) {
                var e;
                if (a = fd(a, b)) {
                    if (c = _.v(ug) || (null !== (e = y(c, 24)) && void 0 !== e ? e : y(d, 30)))
                        b = a.getBoundingClientRect(), c = b.top, d = b.bottom, 0 === b.height ? c = !1 : (b = _.F.innerHeight, c = 0 < d && d < b || 0 < c && c < b);
                    c || (a.style.display = 'none');
                }
            };
            wg = function () {
                var a, b, c;
                return null !== (c = null === (b = null === (a = window.performance) || void 0 === a ? void 0 : a.now) || void 0 === b ? void 0 : b.call(a)) && void 0 !== c ? c : Date.now();
            };
            xg = function (a) {
                var b = wg();
                for (a = b + a; wg() < a;);
                return wg() - b;
            };
            yg = function (a, b) {
                var c = a.shift();
                void 0 !== c && (b(c), a.length && window.requestAnimationFrame(function () {
                    return void yg(a, b);
                }));
            };
            Ag = function () {
                var a = void 0 === a ? xg : a;
                if ('function' === typeof window.requestAnimationFrame) {
                    var b = zg();
                    b.length && window.requestAnimationFrame(function () {
                        return void yg(b, a);
                    });
                }
            };
            zg = function () {
                return Bg(Cg).map(function (a) {
                    return _.Dg(a, 0);
                }).filter(function (a) {
                    return null !== a;
                });
            };
            Fg = function (a) {
                var b = _.gc(Eg);
                return -1 !== b ? b : Ff(a, 1) ? Ff(a, 3) && 0 !== Ad() ? J(a, 1) * ce(a, 3) : J(a, 1) : null;
            };
            Gg = function (a) {
                var b = {};
                a = _.H(a);
                for (var c = a.next(); !c.done; c = a.next())
                    c = c.value, b[J(c, 1)] = J(c, 2);
                return b;
            };
            Jg = function (a, b) {
                var c;
                return Hg(a, Ig, function (d) {
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
            Lg = function (a) {
                Kg = a;
            };
            Ng = function (a, b) {
                return window.IntersectionObserver ? new IntersectionObserver(a, { rootMargin: b }) : new Mg(a, { rootMargin: b });
            };
            Og = function (a) {
                uc('gpt_fc_has_namespace_but_no_iframes', function (b) {
                    dc(b);
                    r(b, 'networkId', a);
                }, { qa: 1 });
            };
            Tg = function () {
                return Pg() ? 0 <= Qg(Rg(), 11) : Sg() && 0 <= Qg(Rg(), 65);
            };
            Wg = function (a) {
                var b = Ug(a);
                return (L = [
                    'google_debug',
                    'dfpdeb',
                    'google_console',
                    'google_force_console',
                    'googfc'
                ], _.u(L, 'find')).call(L, function (c) {
                    return null !== Vg(b, c);
                }) || null;
            };
            Yg = function (a, b) {
                function c(h) {
                    var k = h;
                    return function (l) {
                        for (var m = [], n = 0; n < arguments.length; ++n)
                            m[n] = arguments[n];
                        k && (n = k, k = null, n.apply(null, _.nc(m)));
                    };
                }
                var d = this, e = null, f = 0, g = 0;
                return function () {
                    return z(d, function k() {
                        var l, m, n, p;
                        return A(k, function (t) {
                            if (1 == t.j)
                                return f && clearTimeout(f), f = 0, l = new Ge(), m = c(l.resolve), n = ++g, C(t, 0, 2);
                            if (g !== n)
                                return m(!1), t.return(l.promise);
                            e ? e(!1) : m(!0);
                            p = c(function () {
                                e = null;
                                f = 0;
                                m(!0);
                            });
                            f = setTimeout(p, a);
                            _.Xg(b, function () {
                                return void m(!1);
                            });
                            e = m;
                            return t.return(l.promise);
                        });
                    });
                };
            };
            ch = function (a) {
                switch (a.id) {
                case 5:
                    return new Zg(a);
                case 6:
                    return new $g(a);
                case 0:
                    return new ah(a);
                default:
                    return new bh(a);
                }
            };
            dh = function (a) {
                if (!We(a))
                    return -1;
                a = a.pageYOffset;
                return 0 > a ? -1 : a;
            };
            eh = function (a, b) {
                return null === a || void 0 === a ? void 0 : a.replace(/\$\{AUCTION_PRICE\}/g, String(b));
            };
            fh = function (a) {
                var b = {
                    threshold: [
                        0,
                        0.3,
                        0.5,
                        0.75,
                        1
                    ]
                };
                return window.IntersectionObserver ? new IntersectionObserver(a, b) : new Mg(a, b);
            };
            gh = function (a) {
                return new D.Promise(function (b) {
                    return void setTimeout(b, a);
                });
            };
            hh = function (a, b) {
                return 'undefined' === typeof IntersectionObserver ? new Mg(b, { rootMargin: a }) : new IntersectionObserver(b, { rootMargin: a });
            };
            ih = function (a) {
                var b = window;
                return 0 <= a.bottom && a.top < b.innerHeight && 0 <= a.right && a.left < b.innerWidth;
            };
            oh = function (a) {
                var b, c, d, e, f;
                if (null == a)
                    return [];
                var g = null !== (b = jh(a, 1)) && void 0 !== b ? b : 0, h = null !== (c = jh(a, 2)) && void 0 !== c ? c : 0, k = null !== (d = jh(a, 3)) && void 0 !== d ? d : 0, l = null !== (e = jh(a, 4)) && void 0 !== e ? e : 0;
                a = null !== (f = jh(a, 5)) && void 0 !== f ? f : 0;
                for (var m = [], n = Math.round(1000 * Math.random()), p = 0; p < g; p++) {
                    for (var t = new kh(), w = 0; w < l; w++)
                        Lf(t, 6, (n + w).toString());
                    Lf(t, 2, n);
                    Lf(t, 3, n % 97);
                    Ib(t, 4, 1);
                    w = new lh();
                    for (var B = 0; B < a; B++)
                        Lf(w, 1, B);
                    Gb(t, 7, w);
                    w = new mh();
                    for (B = 0; B < h; B++)
                        Lf(w, 1, n + B);
                    for (B = 0; B < k; B++)
                        Lf(w, 2, n + B);
                    Gb(t, 1, w);
                    w = m;
                    B = w.push;
                    var K = new nh();
                    t = Gb(K, 2, t);
                    B.call(w, t);
                }
                return m;
            };
            uh = function () {
                ph('pubadsReady', !0);
                if (_.v(qh)) {
                    var a = 0;
                    Object.defineProperty(rh(), 'pubadsReady', {
                        get: function () {
                            Lc().I(sh());
                            if (5 > a) {
                                var b = _.gc(th);
                                uc('gpt_pubads_ready', function (c) {
                                    ++a;
                                    dc(c);
                                    var d = Error('pubadsReady');
                                    r(c, 'stack', Xb(d.stack, d.message));
                                }, { qa: b });
                            }
                            return !0;
                        },
                        configurable: !0,
                        enumerable: !0
                    });
                }
            };
            xh = function (a) {
                return _.v(vh) && 'rewardedSlotCanceled' === a ? null : (L = _.u(Object, 'values').call(Object, wh), _.u(L, 'find')).call(L, function (b) {
                    return b === a;
                });
            };
            Ah = function () {
                var a = yh.L();
                return ad(a, function () {
                    return new zh(a);
                });
            };
            Dh = function () {
                var a = Bh.L();
                return ad(a, function () {
                    return new Ch(a);
                });
            };
            Fh = function (a) {
                return ad(a, function () {
                    return new Eh(a, a.o);
                });
            };
            Jh = function (a, b, c) {
                var d = Gh(b, c, void 0, !0), e = d.slotId;
                d = d.Ma;
                if (!e || !d)
                    return Lc().I(Hh('PubAdsService.definePassback', [
                        b,
                        c
                    ])), null;
                E(d, 17, !0);
                a.Fa(e, d);
                return {
                    Pc: Fh(new Ih(e, a)),
                    Ma: d
                };
            };
            Mh = function () {
                var a = _.O(Kh);
                return ad(a, function () {
                    return new Lh(a);
                });
            };
            Ph = function (a) {
                return !!Ze(Oh, function (b) {
                    return b === a;
                });
            };
            Sh = function (a, b, c) {
                c = _.O(Qh).add(a, [
                    1,
                    1
                ], {
                    fb: c,
                    format: b
                });
                a = c.slotId;
                c = c.Ma;
                if (a && c) {
                    if (5 === b && _.v(Rh))
                        return null;
                    E(c, 15, b);
                    _.Xg(a, function () {
                        var d = window, e = yd(b);
                        if (null != e) {
                            d = _.zd(d);
                            var f = d.adCount && d.adCount[e];
                            f && (d.adCount[e] = f - 1);
                        }
                    });
                }
                return null !== a && void 0 !== a ? a : null;
            };
            Zh = function () {
                var a = window, b = Th.L().j, c;
                if (a === a.top)
                    for (var d = {}, e = _.H(_.u(Xh, 'entries').call(Xh)), f = e.next(); !f.done; d = {
                            Wa: d.Wa,
                            Yb: d.Yb
                        }, f = e.next()) {
                        var g = _.H(f.value);
                        f = g.next().value;
                        g = g.next().value;
                        d.Wa = f;
                        d.Yb = g;
                        (L = null !== (c = a.location.hash) && void 0 !== c ? c : '', _.u(L, 'includes')).call(L, 'gam' + d.Wa + 'Demo') && Bc(789, function (h) {
                            return function () {
                                window.console && window.console.warn && window.console.warn('GPT - Demo ' + h.Wa + ' ENABLED');
                                var k = rh().defineOutOfPageSlot('/6499/example/' + h.Wa.toLowerCase(), h.Yb);
                                k && (k.addService(rh().pubads()), Yh(a.document, sc(790, function () {
                                    rh().enableServices();
                                    rh().display(k);
                                    y(b, 4) && rh().pubads().refresh([k]);
                                })));
                            };
                        }(d));
                    }
            };
            $h = function (a) {
                var b = function () {
                    return a.Reflect.construct(a.HTMLElement, [], this.constructor);
                };
                b.prototype = a.HTMLElement.prototype;
                b.prototype.constructor = b;
                _.u(Object, 'setPrototypeOf').call(Object, b, a.HTMLElement);
                return b;
            };
            hi = function () {
                var a = window;
                var b = void 0 === b ? Pd : b;
                var c;
                if (a.customElements && null !== (c = a.Reflect) && void 0 !== c && c.construct && !a.customElements.get('google-product-ad')) {
                    var d = $h(a), e = function () {
                            return d.apply(this, arguments) || this;
                        };
                    _.P(e, d);
                    e.prototype.connectedCallback = function () {
                        var f = this.dataset.rendering, g;
                        if (f) {
                            try {
                                var h = ai(bi, ci(f));
                            } catch (l) {
                            }
                            (null === h || void 0 === h ? 0 : Ff(h, 1)) ? g = Pe(Ne(Oe(Ib(new Qe(), 4, 1), 7)), N(h, di, 1)) : Lc().error(ei('invalid data-rendering attribute'));
                            var k = null === h || void 0 === h ? void 0 : xf(h, 2);
                        } else
                            Lc().error(ei('missing data-rendering attribute'));
                        (f = g) && b(fi(window, f));
                        k && gi(k);
                    };
                    a.customElements.define('google-product-ad', e);
                }
            };
            ii = function (a) {
                var b = 0;
                return function () {
                    return b < a.length ? {
                        done: !1,
                        value: a[b++]
                    } : { done: !0 };
                };
            };
            ji = 'function' == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
                if (a == Array.prototype || a == Object.prototype)
                    return a;
                a[b] = c.value;
                return a;
            };
            ki = function (a) {
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
            li = ki(this);
            mi = 'function' === typeof Symbol && 'symbol' === typeof Symbol('x');
            D = {};
            ni = {};
            _.u = function (a, b) {
                var c = ni[b];
                if (null == c)
                    return a[b];
                c = a[c];
                return void 0 !== c ? c : a[b];
            };
            oi = function (a, b, c) {
                if (b)
                    a: {
                        var d = a.split('.');
                        a = 1 === d.length;
                        var e = d[0], f;
                        !a && e in D ? f = D : f = li;
                        for (e = 0; e < d.length - 1; e++) {
                            var g = d[e];
                            if (!(g in f))
                                break a;
                            f = f[g];
                        }
                        d = d[d.length - 1];
                        c = mi && 'es6' === c ? f[d] : null;
                        b = b(c);
                        null != b && (a ? ji(D, d, {
                            configurable: !0,
                            writable: !0,
                            value: b
                        }) : b !== c && (void 0 === ni[d] && (a = 1000000000 * Math.random() >>> 0, ni[d] = mi ? li.Symbol(d) : '$jscp$' + a + '$' + d), ji(f, ni[d], {
                            configurable: !0,
                            writable: !0,
                            value: b
                        })));
                    }
            };
            oi('Symbol', function (a) {
                if (a)
                    return a;
                var b = function (f, g) {
                    this.j = f;
                    ji(this, 'description', {
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
            oi('Symbol.iterator', function (a) {
                if (a)
                    return a;
                a = (0, D.Symbol)('Symbol.iterator');
                for (var b = 'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(' '), c = 0; c < b.length; c++) {
                    var d = li[b[c]];
                    'function' === typeof d && 'function' != typeof d.prototype[a] && ji(d.prototype, a, {
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return pi(ii(this));
                        }
                    });
                }
                return a;
            }, 'es6');
            pi = function (a) {
                a = { next: a };
                a[_.u(D.Symbol, 'iterator')] = function () {
                    return this;
                };
                return a;
            };
            qi = function (a) {
                return a.raw = a;
            };
            _.H = function (a) {
                var b = 'undefined' != typeof D.Symbol && _.u(D.Symbol, 'iterator') && a[_.u(D.Symbol, 'iterator')];
                return b ? b.call(a) : { next: ii(a) };
            };
            og = function (a) {
                for (var b, c = []; !(b = a.next()).done;)
                    c.push(b.value);
                return c;
            };
            _.nc = function (a) {
                return a instanceof Array ? a : og(_.H(a));
            };
            ri = 'function' == typeof Object.create ? Object.create : function (a) {
                var b = function () {
                };
                b.prototype = a;
                return new b();
            };
            si = function () {
                function a() {
                    function c() {
                    }
                    new c();
                    _.u(D.Reflect, 'construct').call(D.Reflect, c, [], function () {
                    });
                    return new c() instanceof c;
                }
                if (mi && 'undefined' != typeof D.Reflect && _.u(D.Reflect, 'construct')) {
                    if (a())
                        return _.u(D.Reflect, 'construct');
                    var b = _.u(D.Reflect, 'construct');
                    return function (c, d, e) {
                        c = b(c, d);
                        e && _.u(D.Reflect, 'setPrototypeOf').call(D.Reflect, c, e.prototype);
                        return c;
                    };
                }
                return function (c, d, e) {
                    void 0 === e && (e = c);
                    e = ri(e.prototype || Object.prototype);
                    return Function.prototype.apply.call(c, e, d) || e;
                };
            }();
            if (mi && 'function' == typeof _.u(Object, 'setPrototypeOf'))
                ti = _.u(Object, 'setPrototypeOf');
            else {
                var ui;
                a: {
                    var vi = { a: !0 }, wi = {};
                    try {
                        wi.__proto__ = vi;
                        ui = wi.a;
                        break a;
                    } catch (a) {
                    }
                    ui = !1;
                }
                ti = ui ? function (a, b) {
                    a.__proto__ = b;
                    if (a.__proto__ !== b)
                        throw new TypeError(a + ' is not extensible');
                    return a;
                } : null;
            }
            xi = ti;
            _.P = function (a, b) {
                a.prototype = ri(b.prototype);
                a.prototype.constructor = a;
                if (xi)
                    xi(a, b);
                else
                    for (var c in b)
                        if ('prototype' != c)
                            if (Object.defineProperties) {
                                var d = Object.getOwnPropertyDescriptor(b, c);
                                d && Object.defineProperty(a, c, d);
                            } else
                                a[c] = b[c];
                a.Qf = b.prototype;
            };
            yi = function () {
                this.C = !1;
                this.o = null;
                this.m = void 0;
                this.j = 1;
                this.B = this.G = 0;
                this.l = null;
            };
            zi = function (a) {
                if (a.C)
                    throw new TypeError('Generator is already running');
                a.C = !0;
            };
            yi.prototype.A = function (a) {
                this.m = a;
            };
            var Ai = function (a, b) {
                a.l = {
                    Gc: b,
                    Qd: !0
                };
                a.j = a.G || a.B;
            };
            yi.prototype.return = function (a) {
                this.l = { return: a };
                this.j = this.B;
            };
            var C = function (a, b, c) {
                    a.j = c;
                    return { value: b };
                }, Bi = function (a) {
                    a.j = 0;
                }, Kd = function (a, b) {
                    a.j = b;
                    a.G = 0;
                }, Ld = function (a) {
                    a.G = 0;
                    var b = a.l.Gc;
                    a.l = null;
                    return b;
                }, Ci = function (a) {
                    this.j = new yi();
                    this.m = a;
                }, Fi = function (a, b) {
                    zi(a.j);
                    var c = a.j.o;
                    if (c)
                        return Di(a, 'return' in c ? c['return'] : function (d) {
                            return {
                                value: d,
                                done: !0
                            };
                        }, b, a.j.return);
                    a.j.return(b);
                    return Ei(a);
                }, Di = function (a, b, c, d) {
                    try {
                        var e = b.call(a.j.o, c);
                        if (!(e instanceof Object))
                            throw new TypeError('Iterator result ' + e + ' is not an object');
                        if (!e.done)
                            return a.j.C = !1, e;
                        var f = e.value;
                    } catch (g) {
                        return a.j.o = null, Ai(a.j, g), Ei(a);
                    }
                    a.j.o = null;
                    d.call(a.j, f);
                    return Ei(a);
                }, Ei = function (a) {
                    for (; a.j.j;)
                        try {
                            var b = a.m(a.j);
                            if (b)
                                return a.j.C = !1, {
                                    value: b.value,
                                    done: !1
                                };
                        } catch (c) {
                            a.j.m = void 0, Ai(a.j, c);
                        }
                    a.j.C = !1;
                    if (a.j.l) {
                        b = a.j.l;
                        a.j.l = null;
                        if (b.Qd)
                            throw b.Gc;
                        return {
                            value: b.return,
                            done: !0
                        };
                    }
                    return {
                        value: void 0,
                        done: !0
                    };
                }, Gi = function (a) {
                    this.next = function (b) {
                        zi(a.j);
                        a.j.o ? b = Di(a, a.j.o.next, b, a.j.A) : (a.j.A(b), b = Ei(a));
                        return b;
                    };
                    this.throw = function (b) {
                        zi(a.j);
                        a.j.o ? b = Di(a, a.j.o['throw'], b, a.j.A) : (Ai(a.j, b), b = Ei(a));
                        return b;
                    };
                    this.return = function (b) {
                        return Fi(a, b);
                    };
                    this[_.u(D.Symbol, 'iterator')] = function () {
                        return this;
                    };
                }, A = function (a, b) {
                    b = new Gi(new Ci(b));
                    xi && a.prototype && xi(b, a.prototype);
                    return b;
                }, Hi = function (a) {
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
                }, Ii = function (a) {
                    return Hi(new Gi(new Ci(a)));
                };
            oi('Reflect', function (a) {
                return a ? a : {};
            }, 'es6');
            oi('Reflect.construct', function () {
                return si;
            }, 'es6');
            oi('Reflect.setPrototypeOf', function (a) {
                return a ? a : xi ? function (b, c) {
                    try {
                        return xi(b, c), !0;
                    } catch (d) {
                        return !1;
                    }
                } : null;
            }, 'es6');
            oi('Promise', function (a) {
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
                b.prototype.m = function (g) {
                    if (null == this.j) {
                        this.j = [];
                        var h = this;
                        this.o(function () {
                            h.G();
                        });
                    }
                    this.j.push(g);
                };
                var d = li.setTimeout;
                b.prototype.o = function (g) {
                    d(g, 0);
                };
                b.prototype.G = function () {
                    for (; this.j && this.j.length;) {
                        var g = this.j;
                        this.j = [];
                        for (var h = 0; h < g.length; ++h) {
                            var k = g[h];
                            g[h] = null;
                            try {
                                k();
                            } catch (l) {
                                this.l(l);
                            }
                        }
                    }
                    this.j = null;
                };
                b.prototype.l = function (g) {
                    this.o(function () {
                        throw g;
                    });
                };
                var e = function (g) {
                    this.j = 0;
                    this.o = void 0;
                    this.m = [];
                    this.A = !1;
                    var h = this.l();
                    try {
                        g(h.resolve, h.reject);
                    } catch (k) {
                        h.reject(k);
                    }
                };
                e.prototype.l = function () {
                    function g(l) {
                        return function (m) {
                            k || (k = !0, l.call(h, m));
                        };
                    }
                    var h = this, k = !1;
                    return {
                        resolve: g(this.U),
                        reject: g(this.G)
                    };
                };
                e.prototype.U = function (g) {
                    if (g === this)
                        this.G(new TypeError('A Promise cannot resolve to itself'));
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
                        h ? this.F(g) : this.C(g);
                    }
                };
                e.prototype.F = function (g) {
                    var h = void 0;
                    try {
                        h = g.then;
                    } catch (k) {
                        this.G(k);
                        return;
                    }
                    'function' == typeof h ? this.R(h, g) : this.C(g);
                };
                e.prototype.G = function (g) {
                    this.B(2, g);
                };
                e.prototype.C = function (g) {
                    this.B(1, g);
                };
                e.prototype.B = function (g, h) {
                    if (0 != this.j)
                        throw Error('Cannot settle(' + g + ', ' + h + '): Promise already settled in state' + this.j);
                    this.j = g;
                    this.o = h;
                    2 === this.j && this.V();
                    this.J();
                };
                e.prototype.V = function () {
                    var g = this;
                    d(function () {
                        if (g.X()) {
                            var h = li.console;
                            'undefined' !== typeof h && h.error(g.o);
                        }
                    }, 1);
                };
                e.prototype.X = function () {
                    if (this.A)
                        return !1;
                    var g = li.CustomEvent, h = li.Event, k = li.dispatchEvent;
                    if ('undefined' === typeof k)
                        return !0;
                    'function' === typeof g ? g = new g('unhandledrejection', { cancelable: !0 }) : 'function' === typeof h ? g = new h('unhandledrejection', { cancelable: !0 }) : (g = li.document.createEvent('CustomEvent'), g.initCustomEvent('unhandledrejection', !1, !0, g));
                    g.promise = this;
                    g.reason = this.o;
                    return k(g);
                };
                e.prototype.J = function () {
                    if (null != this.m) {
                        for (var g = 0; g < this.m.length; ++g)
                            f.m(this.m[g]);
                        this.m = null;
                    }
                };
                var f = new b();
                e.prototype.K = function (g) {
                    var h = this.l();
                    g.Eb(h.resolve, h.reject);
                };
                e.prototype.R = function (g, h) {
                    var k = this.l();
                    try {
                        g.call(h, k.resolve, k.reject);
                    } catch (l) {
                        k.reject(l);
                    }
                };
                e.prototype.then = function (g, h) {
                    function k(p, t) {
                        return 'function' == typeof p ? function (w) {
                            try {
                                l(p(w));
                            } catch (B) {
                                m(B);
                            }
                        } : t;
                    }
                    var l, m, n = new e(function (p, t) {
                            l = p;
                            m = t;
                        });
                    this.Eb(k(g, l), k(h, m));
                    return n;
                };
                e.prototype.catch = function (g) {
                    return this.then(void 0, g);
                };
                e.prototype.Eb = function (g, h) {
                    function k() {
                        switch (l.j) {
                        case 1:
                            g(l.o);
                            break;
                        case 2:
                            h(l.o);
                            break;
                        default:
                            throw Error('Unexpected state: ' + l.j);
                        }
                    }
                    var l = this;
                    null == this.m ? f.m(k) : this.m.push(k);
                    this.A = !0;
                };
                e.resolve = c;
                e.reject = function (g) {
                    return new e(function (h, k) {
                        k(g);
                    });
                };
                e.race = function (g) {
                    return new e(function (h, k) {
                        for (var l = _.H(g), m = l.next(); !m.done; m = l.next())
                            c(m.value).Eb(h, k);
                    });
                };
                e.all = function (g) {
                    var h = _.H(g), k = h.next();
                    return k.done ? c([]) : new e(function (l, m) {
                        function n(w) {
                            return function (B) {
                                p[w] = B;
                                t--;
                                0 == t && l(p);
                            };
                        }
                        var p = [], t = 0;
                        do
                            p.push(void 0), t++, c(k.value).Eb(n(p.length - 1), m), k = h.next();
                        while (!k.done);
                    });
                };
                return e;
            }, 'es6');
            oi('Object.setPrototypeOf', function (a) {
                return a || xi;
            }, 'es6');
            var Ji = function (a, b) {
                    return Object.prototype.hasOwnProperty.call(a, b);
                }, Ki = mi && 'function' == typeof _.u(Object, 'assign') ? _.u(Object, 'assign') : function (a, b) {
                    for (var c = 1; c < arguments.length; c++) {
                        var d = arguments[c];
                        if (d)
                            for (var e in d)
                                Ji(d, e) && (a[e] = d[e]);
                    }
                    return a;
                };
            oi('Object.assign', function (a) {
                return a || Ki;
            }, 'es6');
            oi('WeakMap', function (a) {
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
                            g = _.H(g);
                            for (var h; !(h = g.next()).done;)
                                h = h.value, this.set(h[0], h[1]);
                        }
                    };
                f.prototype.set = function (g, h) {
                    if (!c(g))
                        throw Error('Invalid WeakMap key');
                    if (!Ji(g, d)) {
                        var k = new b();
                        ji(g, d, { value: k });
                    }
                    if (!Ji(g, d))
                        throw Error('WeakMap key fail: ' + g);
                    g[d][this.j] = h;
                    return this;
                };
                f.prototype.get = function (g) {
                    return c(g) && Ji(g, d) ? g[d][this.j] : void 0;
                };
                f.prototype.has = function (g) {
                    return c(g) && Ji(g, d) && Ji(g[d], this.j);
                };
                f.prototype.delete = function (g) {
                    return c(g) && Ji(g, d) && Ji(g[d], this.j) ? delete g[d][this.j] : !1;
                };
                return f;
            }, 'es6');
            oi('Map', function (a) {
                if (function () {
                        if (!a || 'function' != typeof a || !_.u(a.prototype, 'entries') || 'function' != typeof Object.seal)
                            return !1;
                        try {
                            var h = Object.seal({ x: 4 }), k = new a(_.H([[
                                        h,
                                        's'
                                    ]]));
                            if ('s' != k.get(h) || 1 != k.size || k.get({ x: 4 }) || k.set({ x: 4 }, 't') != k || 2 != k.size)
                                return !1;
                            var l = _.u(k, 'entries').call(k), m = l.next();
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
                        this.m = {};
                        this.j = f();
                        this.size = 0;
                        if (h) {
                            h = _.H(h);
                            for (var k; !(k = h.next()).done;)
                                k = k.value, this.set(k[0], k[1]);
                        }
                    };
                c.prototype.set = function (h, k) {
                    h = 0 === h ? 0 : h;
                    var l = d(this, h);
                    l.list || (l.list = this.m[l.id] = []);
                    l.ka ? l.ka.value = k : (l.ka = {
                        next: this.j,
                        Ha: this.j.Ha,
                        head: this.j,
                        key: h,
                        value: k
                    }, l.list.push(l.ka), this.j.Ha.next = l.ka, this.j.Ha = l.ka, this.size++);
                    return this;
                };
                c.prototype.delete = function (h) {
                    h = d(this, h);
                    return h.ka && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.m[h.id], h.ka.Ha.next = h.ka.next, h.ka.next.Ha = h.ka.Ha, h.ka.head = null, this.size--, !0) : !1;
                };
                c.prototype.clear = function () {
                    this.m = {};
                    this.j = this.j.Ha = f();
                    this.size = 0;
                };
                c.prototype.has = function (h) {
                    return !!d(this, h).ka;
                };
                c.prototype.get = function (h) {
                    return (h = d(this, h).ka) && h.value;
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
                    for (var l = _.u(this, 'entries').call(this), m; !(m = l.next()).done;)
                        m = m.value, h.call(k, m[1], m[0], this);
                };
                c.prototype[_.u(D.Symbol, 'iterator')] = _.u(c.prototype, 'entries');
                var d = function (h, k) {
                        var l = k && typeof k;
                        'object' == l || 'function' == l ? b.has(k) ? l = b.get(k) : (l = '' + ++g, b.set(k, l)) : l = 'p_' + k;
                        var m = h.m[l];
                        if (m && Ji(h.m, l))
                            for (h = 0; h < m.length; h++) {
                                var n = m[h];
                                if (k !== k && n.key !== n.key || k === n.key)
                                    return {
                                        id: l,
                                        list: m,
                                        index: h,
                                        ka: n
                                    };
                            }
                        return {
                            id: l,
                            list: m,
                            index: -1,
                            ka: void 0
                        };
                    }, e = function (h, k) {
                        var l = h.j;
                        return pi(function () {
                            if (l) {
                                for (; l.head != h.j;)
                                    l = l.Ha;
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
                        return h.Ha = h.next = h.head = h;
                    }, g = 0;
                return c;
            }, 'es6');
            var Li = function (a, b, c) {
                if (null == a)
                    throw new TypeError('The \'this\' value for String.prototype.' + c + ' must not be null or undefined');
                if (b instanceof RegExp)
                    throw new TypeError('First argument to String.prototype.' + c + ' must not be a regular expression');
                return a + '';
            };
            oi('String.prototype.endsWith', function (a) {
                return a ? a : function (b, c) {
                    var d = Li(this, b, 'endsWith');
                    void 0 === c && (c = d.length);
                    c = Math.max(0, Math.min(c | 0, d.length));
                    for (var e = b.length; 0 < e && 0 < c;)
                        if (d[--c] != b[--e])
                            return !1;
                    return 0 >= e;
                };
            }, 'es6');
            var Mi = function (a, b, c) {
                a instanceof String && (a = String(a));
                for (var d = a.length, e = 0; e < d; e++) {
                    var f = a[e];
                    if (b.call(c, f, e, a))
                        return {
                            i: e,
                            bd: f
                        };
                }
                return {
                    i: -1,
                    bd: void 0
                };
            };
            oi('Array.prototype.find', function (a) {
                return a ? a : function (b, c) {
                    return Mi(this, b, c).bd;
                };
            }, 'es6');
            oi('String.prototype.startsWith', function (a) {
                return a ? a : function (b, c) {
                    var d = Li(this, b, 'startsWith'), e = d.length, f = b.length;
                    c = Math.max(0, Math.min(c | 0, d.length));
                    for (var g = 0; g < f && c < e;)
                        if (d[c++] != b[g++])
                            return !1;
                    return g >= f;
                };
            }, 'es6');
            var Ni = function (a, b) {
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
                e[_.u(D.Symbol, 'iterator')] = function () {
                    return e;
                };
                return e;
            };
            oi('Array.prototype.entries', function (a) {
                return a ? a : function () {
                    return Ni(this, function (b, c) {
                        return [
                            b,
                            c
                        ];
                    });
                };
            }, 'es6');
            oi('Array.prototype.findIndex', function (a) {
                return a ? a : function (b, c) {
                    return Mi(this, b, c).i;
                };
            }, 'es6');
            oi('Object.entries', function (a) {
                return a ? a : function (b) {
                    var c = [], d;
                    for (d in b)
                        Ji(b, d) && c.push([
                            d,
                            b[d]
                        ]);
                    return c;
                };
            }, 'es8');
            oi('Set', function (a) {
                if (function () {
                        if (!a || 'function' != typeof a || !_.u(a.prototype, 'entries') || 'function' != typeof Object.seal)
                            return !1;
                        try {
                            var c = Object.seal({ x: 4 }), d = new a(_.H([c]));
                            if (!d.has(c) || 1 != d.size || d.add(c) != d || 1 != d.size || d.add({ x: 4 }) != d || 2 != d.size)
                                return !1;
                            var e = _.u(d, 'entries').call(d), f = e.next();
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
                        c = _.H(c);
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
                    return _.u(this.j, 'entries').call(this.j);
                };
                b.prototype.values = function () {
                    return _.u(this.j, 'values').call(this.j);
                };
                b.prototype.keys = _.u(b.prototype, 'values');
                b.prototype[_.u(D.Symbol, 'iterator')] = _.u(b.prototype, 'values');
                b.prototype.forEach = function (c, d) {
                    var e = this;
                    this.j.forEach(function (f) {
                        return c.call(d, f, f, e);
                    });
                };
                return b;
            }, 'es6');
            oi('Array.from', function (a) {
                return a ? a : function (b, c, d) {
                    c = null != c ? c : function (h) {
                        return h;
                    };
                    var e = [], f = 'undefined' != typeof D.Symbol && _.u(D.Symbol, 'iterator') && b[_.u(D.Symbol, 'iterator')];
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
            oi('Number.isFinite', function (a) {
                return a ? a : function (b) {
                    return 'number' !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
                };
            }, 'es6');
            oi('Array.prototype.keys', function (a) {
                return a ? a : function () {
                    return Ni(this, function (b) {
                        return b;
                    });
                };
            }, 'es6');
            oi('Array.prototype.values', function (a) {
                return a ? a : function () {
                    return Ni(this, function (b, c) {
                        return c;
                    });
                };
            }, 'es8');
            oi('Object.is', function (a) {
                return a ? a : function (b, c) {
                    return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
                };
            }, 'es6');
            oi('Array.prototype.includes', function (a) {
                return a ? a : function (b, c) {
                    var d = this;
                    d instanceof String && (d = String(d));
                    var e = d.length;
                    c = c || 0;
                    for (0 > c && (c = Math.max(c + e, 0)); c < e; c++) {
                        var f = d[c];
                        if (f === b || _.u(Object, 'is').call(Object, f, b))
                            return !0;
                    }
                    return !1;
                };
            }, 'es7');
            oi('String.prototype.includes', function (a) {
                return a ? a : function (b, c) {
                    return -1 !== Li(this, b, 'includes').indexOf(b, c || 0);
                };
            }, 'es6');
            oi('Number.isInteger', function (a) {
                return a ? a : function (b) {
                    return _.u(Number, 'isFinite').call(Number, b) ? b === Math.floor(b) : !1;
                };
            }, 'es6');
            oi('Object.values', function (a) {
                return a ? a : function (b) {
                    var c = [], d;
                    for (d in b)
                        Ji(b, d) && c.push(b[d]);
                    return c;
                };
            }, 'es8');
            oi('Number.isNaN', function (a) {
                return a ? a : function (b) {
                    return 'number' === typeof b && isNaN(b);
                };
            }, 'es6');
            _.F = this || self;
            Oi = function () {
            };
            Pi = function (a) {
                a.Ca = void 0;
                a.L = function () {
                    return a.Ca ? a.Ca : a.Ca = new a();
                };
            };
            qa = function (a) {
                var b = typeof a;
                b = 'object' != b ? b : a ? Array.isArray(a) ? 'array' : b : 'null';
                return 'array' == b || 'object' == b && 'number' == typeof a.length;
            };
            _.ja = function (a) {
                var b = typeof a;
                return 'object' == b && null != a || 'function' == b;
            };
            ka = function (a) {
                return Object.prototype.hasOwnProperty.call(a, Qi) && a[Qi] || (a[Qi] = ++Ri);
            };
            Qi = 'closure_uid_' + (1000000000 * Math.random() >>> 0);
            Ri = 0;
            Si = function (a, b, c) {
                return a.call.apply(a.bind, arguments);
            };
            Ti = function (a, b, c) {
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
            _.Ui = function (a, b, c) {
                Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code') ? _.Ui = Si : _.Ui = Ti;
                return _.Ui.apply(null, arguments);
            };
            _.Vi = function (a, b) {
                var c = Array.prototype.slice.call(arguments, 1);
                return function () {
                    var d = c.slice();
                    d.push.apply(d, arguments);
                    return a.apply(this, d);
                };
            };
            Wf = function () {
                return Date.now();
            };
            var z = function (a, b) {
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
            var Wi;
            var Xi, Yi = 'undefined' !== typeof TextEncoder;
            var Zi, $i, aj, gd, cj;
            Zi = function () {
                return !0;
            };
            $i = function () {
                return null;
            };
            aj = function (a) {
                return function () {
                    return !a.apply(this, arguments);
                };
            };
            gd = function (a) {
                var b = !1, c;
                return function () {
                    b || (c = a(), b = !0);
                    return c;
                };
            };
            _.bj = function (a) {
                var b = a;
                return function () {
                    if (b) {
                        var c = b;
                        b = null;
                        c();
                    }
                };
            };
            cj = function (a, b, c) {
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
            var ej;
            _.ea = function (a, b) {
                return Array.prototype.indexOf.call(a, b, void 0);
            };
            _.dj = function (a, b) {
                Array.prototype.forEach.call(a, b, void 0);
            };
            _.De = function (a, b) {
                return Array.prototype.filter.call(a, b, void 0);
            };
            _.ye = function (a, b) {
                return Array.prototype.map.call(a, b, void 0);
            };
            ej = function (a, b) {
                return Array.prototype.reduce.call(a, b, 0);
            };
            _.fj = function (a, b) {
                return Array.prototype.some.call(a, b, void 0);
            };
            var za = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(' ');
            var ij = function (a, b) {
                this.j = a === gj && b || '';
                this.m = hj;
            };
            ij.prototype.Ra = !0;
            ij.prototype.Pa = function () {
                return this.j;
            };
            var jj = function (a) {
                    return a instanceof ij && a.constructor === ij && a.m === hj ? a.j : 'type_error:Const';
                }, kj = function (a) {
                    return new ij(gj, a);
                }, hj = {}, gj = {};
            var lj = {}, mj = function (a, b) {
                    this.j = b === lj ? a : '';
                    this.Ra = !0;
                };
            mj.prototype.Pa = function () {
                return this.j.toString();
            };
            mj.prototype.toString = function () {
                return this.j.toString();
            };
            var oj = function (a, b) {
                this.j = b === nj ? a : '';
            };
            oj.prototype.Ra = !0;
            oj.prototype.Pa = function () {
                return this.j.toString();
            };
            var tj = function (a, b) {
                a = pj.exec(qj(a));
                var c = a[3] || '';
                return rj(a[1] + sj('?', a[2] || '', b) + sj('#', c, void 0));
            };
            oj.prototype.toString = function () {
                return this.j + '';
            };
            var qj = function (a) {
                    return jb(a).toString();
                }, jb = function (a) {
                    return a instanceof oj && a.constructor === oj ? a.j : 'type_error:TrustedResourceUrl';
                }, Nd = function (a, b) {
                    var c = jj(a);
                    if (!uj.test(c))
                        throw Error('Invalid TrustedResourceUrl format: ' + c);
                    a = c.replace(vj, function (d, e) {
                        if (!Object.prototype.hasOwnProperty.call(b, e))
                            throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                        d = b[e];
                        return d instanceof ij ? jj(d) : encodeURIComponent(String(d));
                    });
                    return rj(a);
                }, vj = /%{(\w+)}/g, uj = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i, pj = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/, nj = {}, rj = function (a) {
                    return new oj(a, nj);
                }, sj = function (a, b, c) {
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
            var wj = function (a, b) {
                    var c = a.length - b.length;
                    return 0 <= c && a.indexOf(b, c) == c;
                }, xj = function (a) {
                    return /^[\s\xa0]*$/.test(a);
                }, yj = function (a) {
                    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
                }, zj = /&/g, Aj = /</g, Bj = />/g, Cj = /"/g, Dj = /'/g, Ej = /\x00/g, Fj = /[\x00&<>"']/, Qg = function (a, b) {
                    var c = 0;
                    a = yj(String(a)).split('.');
                    b = yj(String(b)).split('.');
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
                            c = Gj(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || Gj(0 == f[2].length, 0 == g[2].length) || Gj(f[2], g[2]);
                            f = f[3];
                            g = g[3];
                        } while (0 == c);
                    }
                    return c;
                }, Gj = function (a, b) {
                    return a < b ? -1 : a > b ? 1 : 0;
                };
            var Ij = function (a, b) {
                    this.j = b === Hj ? a : '';
                }, Kj, Hj;
            Ij.prototype.Ra = !0;
            Ij.prototype.Pa = function () {
                return this.j.toString();
            };
            Ij.prototype.toString = function () {
                return this.j.toString();
            };
            _.Jj = function (a) {
                return a instanceof Ij && a.constructor === Ij ? a.j : 'type_error:SafeUrl';
            };
            Kj = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
            Hj = {};
            var Lj;
            a: {
                var Mj = _.F.navigator;
                if (Mj) {
                    var Nj = Mj.userAgent;
                    if (Nj) {
                        Lj = Nj;
                        break a;
                    }
                }
                Lj = '';
            }
            var Oj = function (a) {
                    return -1 != Lj.indexOf(a);
                }, Pj = function (a) {
                    for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);)
                        c.push([
                            d[1],
                            d[2],
                            d[3] || void 0
                        ]);
                    return c;
                };
            var Qj = function () {
                    return Oj('Trident') || Oj('MSIE');
                }, Sg = function () {
                    return Oj('Firefox') || Oj('FxiOS');
                }, Pg = function () {
                    return Oj('Safari') && !(Rj() || Oj('Coast') || Oj('Opera') || Oj('Edge') || Oj('Edg/') || Oj('OPR') || Sg() || Oj('Silk') || Oj('Android'));
                }, Rj = function () {
                    return (Oj('Chrome') || Oj('CriOS')) && !Oj('Edge');
                }, Rg = function () {
                    function a(e) {
                        e = ca(e, d);
                        return c[e] || '';
                    }
                    var b = Lj;
                    if (Qj())
                        return Sj(b);
                    b = Pj(b);
                    var c = {};
                    b.forEach(function (e) {
                        c[e[0]] = e[1];
                    });
                    var d = _.Vi(xa, c);
                    return Oj('Opera') ? a([
                        'Version',
                        'Opera'
                    ]) : Oj('Edge') ? a(['Edge']) : Oj('Edg/') ? a(['Edg']) : Rj() ? a([
                        'Chrome',
                        'CriOS',
                        'HeadlessChrome'
                    ]) : (b = b[2]) && b[1] || '';
                }, Sj = function (a) {
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
            var Tj = {}, Uj = function (a, b, c) {
                    this.j = c === Tj ? a : '';
                    this.Ra = !0;
                }, Wj;
            Uj.prototype.Pa = function () {
                return this.j.toString();
            };
            Uj.prototype.toString = function () {
                return this.j.toString();
            };
            _.Vj = function (a) {
                return a instanceof Uj && a.constructor === Uj ? a.j : 'type_error:SafeHtml';
            };
            Wj = new Uj(_.F.trustedTypes && _.F.trustedTypes.emptyHTML || '', 0, Tj);
            var Yj, ak, bk, Zj;
            _.Xj = gd(function () {
                var a = document.createElement('div'), b = document.createElement('div');
                b.appendChild(document.createElement('div'));
                a.appendChild(b);
                b = a.firstChild.firstChild;
                a.innerHTML = _.Vj(Wj);
                return !b.parentElement;
            });
            Yj = function (a, b) {
                a.write(_.Vj(b));
            };
            ak = function (a, b, c) {
                a.rel = c;
                -1 != c.toLowerCase().indexOf('stylesheet') ? (a.href = qj(b), (b = Zj('style[nonce],link[rel="stylesheet"][nonce]', a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute('nonce', b)) : (b instanceof oj ? b = qj(b) : b instanceof Ij ? b = _.Jj(b) : (b instanceof Ij || (b = 'object' == typeof b && b.Ra ? b.Pa() : String(b), Kj.test(b) || (b = 'about:invalid#zClosurez'), b = new Ij(b, Hj)), b = _.Jj(b)), a.href = b);
            };
            bk = /^[\w+/_-]+[=]{0,2}$/;
            Zj = function (a, b) {
                b = (b || _.F).document;
                return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute('nonce')) && bk.test(a) ? a : '' : '';
            };
            var ck, dk, ek, fk, gk, ik;
            ck = function (a) {
                Fj.test(a) && (-1 != a.indexOf('&') && (a = a.replace(zj, '&amp;')), -1 != a.indexOf('<') && (a = a.replace(Aj, '&lt;')), -1 != a.indexOf('>') && (a = a.replace(Bj, '&gt;')), -1 != a.indexOf('"') && (a = a.replace(Cj, '&quot;')), -1 != a.indexOf('\'') && (a = a.replace(Dj, '&#39;')), -1 != a.indexOf('\0') && (a = a.replace(Ej, '&#0;')));
                return a;
            };
            dk = String.prototype.repeat ? function (a, b) {
                return a.repeat(b);
            } : function (a, b) {
                return Array(b + 1).join(a);
            };
            ek = function (a) {
                a = String(a);
                var b = a.indexOf('.');
                -1 == b && (b = a.length);
                return dk('0', Math.max(0, 2 - b)) + a;
            };
            fk = function () {
                return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Wf()).toString(36);
            };
            gk = 2147483648 * Math.random() | 0;
            _.hk = function (a) {
                return String(a).replace(/\-([a-z])/g, function (b, c) {
                    return c.toUpperCase();
                });
            };
            ik = function (a) {
                return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
                    return c + d.toUpperCase();
                });
            };
            var jk = 'function' === typeof Uint8Array.prototype.slice, Ba = 0, Ca = 0;
            var kk = function () {
                this.j = new Uint8Array(64);
                this.m = 0;
            };
            kk.prototype.push = function (a) {
                if (!(this.m + 1 < this.j.length)) {
                    var b = this.j;
                    this.j = new Uint8Array(Math.ceil(1 + 2 * this.j.length));
                    this.j.set(b);
                }
                this.j[this.m++] = a;
            };
            kk.prototype.length = function () {
                return this.m;
            };
            kk.prototype.end = function () {
                var a = this.j, b = this.m;
                this.m = 0;
                return jk ? a.slice(0, b) : new Uint8Array(a.subarray(0, b));
            };
            var lk = function (a) {
                    for (var b = Ba, c = Ca; 0 < c || 127 < b;)
                        a.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
                    a.push(b);
                }, mk = function (a, b) {
                    for (; 127 < b;)
                        a.push(b & 127 | 128), b >>>= 7;
                    a.push(b);
                }, nk = function (a, b) {
                    if (0 <= b)
                        mk(a, b);
                    else {
                        for (var c = 0; 9 > c; c++)
                            a.push(b & 127 | 128), b >>= 7;
                        a.push(1);
                    }
                };
            var ok = function (a) {
                ok[' '](a);
                return a;
            };
            ok[' '] = Oi;
            var pk = function (a, b) {
                    try {
                        return ok(a[b]), !0;
                    } catch (c) {
                    }
                    return !1;
                }, qg = function (a, b, c, d) {
                    d = d ? d(b) : b;
                    return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b);
                };
            var qk, sk, tk, uk, vk, wk, xk, yk;
            qk = Oj('Opera');
            _.rk = Qj();
            sk = Oj('Edge');
            tk = Oj('Gecko') && !(-1 != Lj.toLowerCase().indexOf('webkit') && !Oj('Edge')) && !(Oj('Trident') || Oj('MSIE')) && !Oj('Edge');
            uk = -1 != Lj.toLowerCase().indexOf('webkit') && !Oj('Edge');
            vk = uk && Oj('Mobile');
            wk = Oj('Android');
            xk = function () {
                var a = _.F.document;
                return a ? a.documentMode : void 0;
            };
            a: {
                var zk = '', Ak = function () {
                        var a = Lj;
                        if (tk)
                            return /rv:([^\);]+)(\)|;)/.exec(a);
                        if (sk)
                            return /Edge\/([\d\.]+)/.exec(a);
                        if (_.rk)
                            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                        if (uk)
                            return /WebKit\/(\S+)/.exec(a);
                        if (qk)
                            return /(?:Version)[ \/]?(\S+)/.exec(a);
                    }();
                Ak && (zk = Ak ? Ak[1] : '');
                if (_.rk) {
                    var Bk = xk();
                    if (null != Bk && Bk > parseFloat(zk)) {
                        yk = String(Bk);
                        break a;
                    }
                }
                yk = zk;
            }
            var Ck = yk, Dk = {}, Ek = function (a) {
                    return qg(Dk, a, function () {
                        return 0 <= Qg(Ck, a);
                    });
                }, Fk;
            if (_.F.document && _.rk) {
                var Gk = xk();
                Fk = Gk ? Gk : parseInt(Ck, 10) || void 0;
            } else
                Fk = void 0;
            var Hk = Fk;
            var Ik = Pg() && !(Oj('iPhone') && !Oj('iPod') && !Oj('iPad') || Oj('iPad') || Oj('iPod'));
            var Jk = {}, Kk = null, Lk = tk || uk && !Ik || qk || 'function' == typeof _.F.btoa, Ka = function (a, b) {
                    void 0 === b && (b = 0);
                    Mk();
                    b = Jk[b];
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
                }, Nk = function (a, b) {
                    if (Lk && !b)
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
                }, ci = function (a) {
                    var b = '';
                    Ok(a, function (c) {
                        b += String.fromCharCode(c);
                    });
                    return b;
                }, Ok = function (a, b) {
                    function c(k) {
                        for (; d < a.length;) {
                            var l = a.charAt(d++), m = Kk[l];
                            if (null != m)
                                return m;
                            if (!xj(l))
                                throw Error('Unknown base64 encoding at char: ' + l);
                        }
                        return k;
                    }
                    Mk();
                    for (var d = 0;;) {
                        var e = c(-1), f = c(0), g = c(64), h = c(64);
                        if (64 === h && -1 === e)
                            break;
                        b(e << 2 | f >> 4);
                        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h));
                    }
                }, Mk = function () {
                    if (!Kk) {
                        Kk = {};
                        for (var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''), b = [
                                    '+/=',
                                    '+/',
                                    '-_=',
                                    '-_.',
                                    '-_'
                                ], c = 0; 5 > c; c++) {
                            var d = a.concat(b[c].split(''));
                            Jk[c] = d;
                            for (var e = 0; e < d.length; e++) {
                                var f = d[e];
                                void 0 === Kk[f] && (Kk[f] = e);
                            }
                        }
                    }
                };
            var Of = function () {
                    this.o = [];
                    this.m = 0;
                    this.j = new kk();
                }, Pk = function (a, b) {
                    mk(a.j, 8 * b + 2);
                    b = a.j.end();
                    a.o.push(b);
                    a.m += b.length;
                    return {
                        Vd: a.m,
                        kd: a.o.length - 1
                    };
                }, Qk = function (a, b) {
                    var c = a.j.end();
                    a.o.push(c);
                    a.m += c.length;
                    mk(a.j, a.m + a.j.length() - b.Vd);
                    c = a.j.end();
                    a.m += c.length;
                    a.o.splice(1 + b.kd, 0, c);
                }, Qf = function (a) {
                    var b = a.m + a.j.length();
                    if (0 === b)
                        return new Uint8Array(0);
                    b = new Uint8Array(b);
                    for (var c = a.o, d = c.length, e = 0, f = 0; f < d; f++) {
                        var g = c[f];
                        0 !== g.length && (b.set(g, e), e += g.length);
                    }
                    c = a.j;
                    d = c.m;
                    0 !== d && (b.set(c.j.subarray(0, d), e), c.m = 0);
                    a.o = [b];
                    return b;
                }, Rk = function (a, b, c) {
                    null != c && (mk(a.j, 8 * b), nk(a.j, c));
                }, Sk = function (a, b, c) {
                    null != c && (mk(a.j, 8 * b), a = a.j, Da(c), lk(a));
                }, Tk = function (a, b, c) {
                    null != c && null != c && (mk(a.j, 8 * b), a = a.j, Da(c), lk(a));
                }, Uk = function (a, b, c) {
                    null != c && (c = parseInt(c, 10), mk(a.j, 8 * b), nk(a.j, c));
                }, Vk = function (a, b, c) {
                    if (null != c) {
                        if (Yi)
                            c = (Xi || (Xi = new TextEncoder())).encode(c);
                        else {
                            var d = void 0;
                            d = void 0 === d ? !1 : d;
                            for (var e = 0, f = new Uint8Array(3 * c.length), g = 0; g < c.length; g++) {
                                var h = c.charCodeAt(g);
                                if (128 > h)
                                    f[e++] = h;
                                else {
                                    if (2048 > h)
                                        f[e++] = h >> 6 | 192;
                                    else {
                                        if (55296 <= h && 57343 >= h) {
                                            if (56319 >= h && g < c.length) {
                                                var k = c.charCodeAt(++g);
                                                if (56320 <= k && 57343 >= k) {
                                                    h = 1024 * (h - 55296) + k - 56320 + 65536;
                                                    f[e++] = h >> 18 | 240;
                                                    f[e++] = h >> 12 & 63 | 128;
                                                    f[e++] = h >> 6 & 63 | 128;
                                                    f[e++] = h & 63 | 128;
                                                    continue;
                                                } else
                                                    g--;
                                            }
                                            if (d)
                                                throw Error('Found an unpaired surrogate');
                                            h = 65533;
                                        }
                                        f[e++] = h >> 12 | 224;
                                        f[e++] = h >> 6 & 63 | 128;
                                    }
                                    f[e++] = h & 63 | 128;
                                }
                            }
                            c = f.subarray(0, e);
                        }
                        mk(a.j, 8 * b + 2);
                        mk(a.j, c.length);
                        b = a.j.end();
                        a.o.push(b);
                        a.o.push(c);
                        a.m += b.length + c.length;
                    }
                }, Xk = function (a, b, c) {
                    var d = Wk;
                    null != c && (b = Pk(a, b), d(c, a), Qk(a, b));
                }, Yk = function (a, b, c, d) {
                    if (null != c)
                        for (var e = 0; e < c.length; e++) {
                            var f = Pk(a, b);
                            d(c[e], a);
                            Qk(a, f);
                        }
                };
            var Ha = 'function' === typeof Uint8Array, Zk = {
                    Sd: {
                        value: !0,
                        configurable: !0
                    }
                }, Ja = function (a) {
                    Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, Zk);
                    return a;
                }, $k;
            var bl = function (a, b) {
                this.j = a;
                this.o = b;
                this.map = {};
                this.m = !0;
                if (0 < this.j.length) {
                    for (a = 0; a < this.j.length; a++) {
                        b = this.j[a];
                        var c = b[0];
                        this.map[c.toString()] = new al(c, b[1]);
                    }
                    this.m = !0;
                }
            };
            bl.prototype.isFrozen = function () {
                return !1;
            };
            bl.prototype.toJSON = function () {
                var a = cl(this);
                return $k ? a : La(a);
            };
            bl.prototype.wa = function () {
                return this.toJSON();
            };
            bl.prototype.Yc = function () {
                return cl(this);
            };
            var cl = function (a) {
                if (a.m) {
                    if (a.o) {
                        var b = a.map, c;
                        for (c in b)
                            if (Object.prototype.hasOwnProperty.call(b, c)) {
                                var d = b[c].j;
                                d && d.wa();
                            }
                    }
                } else {
                    a.j.length = 0;
                    b = dl(a);
                    b.sort();
                    for (c = 0; c < b.length; c++) {
                        d = a.map[b[c]];
                        var e = d.j;
                        e && e.wa();
                        a.j.push([
                            d.key,
                            d.value
                        ]);
                    }
                    a.m = !0;
                }
                return a.j;
            };
            _.q = bl.prototype;
            _.q.entries = function () {
                var a = [], b = dl(this);
                b.sort();
                for (var c = 0; c < b.length; c++) {
                    var d = this.map[b[c]];
                    a.push([
                        d.key,
                        el(this, d)
                    ]);
                }
                return new fl(a);
            };
            _.q.keys = function () {
                var a = [], b = dl(this);
                b.sort();
                for (var c = 0; c < b.length; c++)
                    a.push(this.map[b[c]].key);
                return new fl(a);
            };
            _.q.values = function () {
                var a = [], b = dl(this);
                b.sort();
                for (var c = 0; c < b.length; c++)
                    a.push(el(this, this.map[b[c]]));
                return new fl(a);
            };
            _.q.forEach = function (a, b) {
                var c = dl(this);
                c.sort();
                for (var d = 0; d < c.length; d++) {
                    var e = this.map[c[d]];
                    a.call(b, el(this, e), e.key, this);
                }
            };
            _.q.set = function (a, b) {
                var c = new al(a);
                this.o ? (c.j = b, c.value = b.Yc()) : c.value = b;
                this.map[a.toString()] = c;
                this.m = !1;
                return this;
            };
            var el = function (a, b) {
                return a.o ? (b.j || (b.j = new a.o(b.value), a.isFrozen() && null(b.j)), b.j) : b.value;
            };
            bl.prototype.get = function (a) {
                if (a = this.map[a.toString()])
                    return el(this, a);
            };
            bl.prototype.has = function (a) {
                return a.toString() in this.map;
            };
            var dl = function (a) {
                a = a.map;
                var b = [], c;
                for (c in a)
                    Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
                return b;
            };
            bl.prototype[_.u(D.Symbol, 'iterator')] = function () {
                return _.u(this, 'entries').call(this);
            };
            var al = function (a, b) {
                    this.key = a;
                    this.value = b;
                    this.j = void 0;
                }, fl = function (a) {
                    this.m = 0;
                    this.j = a;
                };
            fl.prototype.next = function () {
                return this.m < this.j.length ? {
                    done: !1,
                    value: this.j[this.m++]
                } : {
                    done: !0,
                    value: void 0
                };
            };
            fl.prototype[_.u(D.Symbol, 'iterator')] = function () {
                return this;
            };
            var Oa;
            var R = function (a, b, c, d) {
                    var e = Oa;
                    Oa = null;
                    a || (a = e);
                    e = this.constructor.messageId;
                    a || (a = e ? [e] : []);
                    this.l = e ? 0 : -1;
                    this.j = null;
                    this.m = a;
                    a: {
                        e = this.m.length;
                        a = e - 1;
                        if (e && (e = this.m[a], !(null === e || 'object' != typeof e || Array.isArray(e) || Ha && e instanceof Uint8Array))) {
                            this.G = a - this.l;
                            this.o = e;
                            break a;
                        }
                        void 0 !== b && -1 < b ? (this.G = Math.max(b, a + 1 - this.l), this.o = null) : this.G = Number.MAX_VALUE;
                    }
                    this.C = {};
                    if (c)
                        for (b = 0; b < c.length; b++)
                            a = c[b], a < this.G ? (a += this.l, (e = this.m[a]) ? Ja(e) : this.m[a] = gl) : (hl(this), (e = this.o[a]) ? Ja(e) : this.o[a] = gl);
                    if (d && d.length)
                        for (c = 0; c < d.length; c++)
                            il(this, d[c]);
                }, gl = Object.freeze(Ja([])), hl = function (a) {
                    var b = a.G + a.l;
                    a.m[b] || (a.o = a.m[b] = {});
                }, J = function (a, b) {
                    if (b < a.G) {
                        b += a.l;
                        var c = a.m[b];
                        return c !== gl ? c : a.m[b] = Ja([]);
                    }
                    if (a.o)
                        return c = a.o[b], c !== gl ? c : a.o[b] = Ja([]);
                }, Ff = function (a, b) {
                    return null != J(a, b);
                }, ce = function (a, b) {
                    a = J(a, b);
                    return null == a ? a : +a;
                }, y = function (a, b) {
                    a = J(a, b);
                    return null == a ? a : !!a;
                }, jl = function (a, b) {
                    var c = J(a, b);
                    a.C || (a.C = {});
                    if (!a.C[b]) {
                        for (var d = 0; d < c.length; d++)
                            c[d] = +c[d];
                        a.C[b] = !0;
                    }
                    return c;
                }, sf = function (a, b, c) {
                    a = J(a, b);
                    return null == a ? c : a;
                }, kl = function (a, b, c) {
                    c = void 0 === c ? !1 : c;
                    a = y(a, b);
                    return null == a ? c : a;
                }, ll = function (a, b, c) {
                    c = void 0 === c ? 0 : c;
                    a = ce(a, b);
                    return null == a ? c : a;
                }, ml = function (a, b, c) {
                    a.j || (a.j = {});
                    if (b in a.j)
                        return a.j[b];
                    var d = J(a, b);
                    d || (d = Ja([]), E(a, b, d));
                    c = new bl(d, c);
                    return a.j[b] = c;
                }, E = function (a, b, c) {
                    b < a.G ? a.m[b + a.l] = c : (hl(a), a.o[b] = c);
                    return a;
                }, Eb = function (a, b, c) {
                    return E(a, b, Ja(c || []));
                }, Cb = function (a, b, c, d) {
                    c !== d ? E(a, b, c) : b < a.G ? a.m[b + a.l] = null : (hl(a), delete a.o[b]);
                    return a;
                }, Lf = function (a, b, c) {
                    J(a, b).push(c);
                }, qc = function (a, b, c, d) {
                    (c = il(a, c)) && c !== b && void 0 !== d && (a.j && c in a.j && (a.j[c] = void 0), E(a, c, void 0));
                    return E(a, b, d);
                }, il = function (a, b) {
                    for (var c, d, e = 0; e < b.length; e++) {
                        var f = b[e], g = J(a, f);
                        null != g && (c = f, d = g, E(a, f, void 0));
                    }
                    return c ? (E(a, c, d), c) : 0;
                }, N = function (a, b, c) {
                    a.j || (a.j = {});
                    if (!a.j[c]) {
                        var d = J(a, c);
                        d && (a.j[c] = new b(d));
                    }
                    return a.j[c];
                }, M = function (a, b, c) {
                    a.j || (a.j = {});
                    if (!a.j[c]) {
                        for (var d = J(a, c), e = [], f = 0; f < d.length; f++)
                            e[f] = new b(d[f]);
                        a.j[c] = e;
                    }
                    return a.j[c];
                }, Gb = function (a, b, c) {
                    a.j || (a.j = {});
                    var d = c ? c.wa() : c;
                    a.j[b] = c;
                    return E(a, b, d);
                }, nl = function (a, b, c) {
                    a.j || (a.j = {});
                    c = c || [];
                    for (var d = Ja([]), e = 0; e < c.length; e++)
                        d[e] = c[e].wa();
                    a.j[b] = c;
                    return E(a, b, d);
                }, Nf = function (a, b, c, d) {
                    var e = M(a, d, b);
                    c = c ? c : new d();
                    a = J(a, b);
                    e.push(c);
                    a.push(c.wa());
                    return c;
                }, ol = function (a) {
                    if (a.j)
                        for (var b in a.j)
                            if (Object.prototype.hasOwnProperty.call(a.j, b)) {
                                var c = a.j[b];
                                if (Array.isArray(c))
                                    for (var d = 0; d < c.length; d++)
                                        c[d] && c[d].wa();
                                else
                                    c && c.wa();
                            }
                };
            R.prototype.wa = function () {
                ol(this);
                return this.m;
            };
            R.prototype.toJSON = function () {
                var a = this.wa();
                return $k ? a : La(a);
            };
            R.prototype.Yc = function () {
                ol(this);
                return this.m;
            };
            var ql = function (a) {
                    $k = !0;
                    try {
                        return JSON.stringify(a.toJSON(), pl);
                    } finally {
                        $k = !1;
                    }
                }, pl = function (a, b) {
                    switch (typeof b) {
                    case 'number':
                        return isFinite(b) ? b : String(b);
                    case 'object':
                        if (Ha && null != b && b instanceof Uint8Array)
                            return Ka(b);
                    }
                    return b;
                }, ai = function (a, b) {
                    return Pa(a, b ? JSON.parse(b) : null);
                }, jh = function (a, b) {
                    return sf(a, b, 0);
                }, xf = function (a, b) {
                    return sf(a, b, '');
                }, rl = function (a, b, c) {
                    return Cb(a, b, c, !1);
                }, Ib = function (a, b, c) {
                    return Cb(a, b, c, 0);
                };
            var sl = document, tl = window;
            _.Ra = {};
            var Va;
            var ul = function () {
                }, Xa = function (a, b) {
                    Sa(b);
                    this.m = a;
                };
            _.P(Xa, ul);
            Xa.prototype.toString = function () {
                return this.m.toString();
            };
            var vl = function () {
                }, Za = function (a, b) {
                    Sa(b);
                    this.j = a;
                };
            _.P(Za, vl);
            Za.prototype.toString = function () {
                return this.j.toString();
            };
            _.wl = function () {
            };
            _.xl = function (a, b) {
                Sa(b);
                this.j = a;
            };
            _.P(_.xl, _.wl);
            _.xl.prototype.toString = function () {
                return this.j;
            };
            _.yl = new _.xl('about:invalid#zTSz', _.Ra);
            var ib = function () {
                }, cb = function (a, b) {
                    Sa(b);
                    this.j = a;
                };
            _.P(cb, ib);
            cb.prototype.toString = function () {
                return this.j.toString();
            };
            var zl = function (a, b) {
                if (null !== a && void 0 !== a.tagName) {
                    if ('script' === a.tagName.toLowerCase())
                        throw Error('Use setTextContent with a SafeScript.');
                    if ('style' === a.tagName.toLowerCase())
                        throw Error('Use setTextContent with a SafeStyleSheet.');
                }
                if (b instanceof ul) {
                    var c;
                    if (null === (c = Ua()) || void 0 === c || !c.isHTML(b))
                        if (b instanceof Xa)
                            b = b.m;
                        else
                            throw Error('wrong type');
                } else
                    b = _.Vj(b);
                a.innerHTML = b;
            };
            var Gd = function (a, b) {
                a.src = kb(b);
                lb(a);
            };
            var Al = function (a, b) {
                var c = void 0 === c ? {} : c;
                this.error = a;
                this.context = b.context;
                this.msg = b.message || '';
                this.id = b.id || 'jserror';
                this.meta = c;
            };
            var mb;
            mb = gd(function () {
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
            _.Hd = function (a, b, c, d) {
                return a.addEventListener ? (a.addEventListener(b, c, nb(d)), !0) : !1;
            };
            _.ge = function (a, b, c, d) {
                return a.removeEventListener ? (a.removeEventListener(b, c, nb(d)), !0) : !1;
            };
            var Bl = _.rk || qk || uk;
            _.ld = function (a, b) {
                this.x = void 0 !== a ? a : 0;
                this.y = void 0 !== b ? b : 0;
            };
            _.ld.prototype.ceil = function () {
                this.x = Math.ceil(this.x);
                this.y = Math.ceil(this.y);
                return this;
            };
            _.ld.prototype.floor = function () {
                this.x = Math.floor(this.x);
                this.y = Math.floor(this.y);
                return this;
            };
            _.ld.prototype.round = function () {
                this.x = Math.round(this.x);
                this.y = Math.round(this.y);
                return this;
            };
            _.Cl = function (a, b) {
                this.width = a;
                this.height = b;
            };
            _.q = _.Cl.prototype;
            _.q.aspectRatio = function () {
                return this.width / this.height;
            };
            _.q.isEmpty = function () {
                return !(this.width * this.height);
            };
            _.q.ceil = function () {
                this.width = Math.ceil(this.width);
                this.height = Math.ceil(this.height);
                return this;
            };
            _.q.floor = function () {
                this.width = Math.floor(this.width);
                this.height = Math.floor(this.height);
                return this;
            };
            _.q.round = function () {
                this.width = Math.round(this.width);
                this.height = Math.round(this.height);
                return this;
            };
            var Fl, Hl, Gl, Kl, Ml, Ql, Dl;
            Fl = function (a) {
                return a ? new Dl(_.El(a)) : Wi || (Wi = new Dl());
            };
            Hl = function (a, b) {
                wa(b, function (c, d) {
                    c && 'object' == typeof c && c.Ra && (c = c.Pa());
                    'style' == d ? a.style.cssText = c : 'class' == d ? a.className = c : 'for' == d ? a.htmlFor = c : Gl.hasOwnProperty(d) ? a.setAttribute(Gl[d], c) : 0 == d.lastIndexOf('aria-', 0) || 0 == d.lastIndexOf('data-', 0) ? a.setAttribute(d, c) : a[d] = c;
                });
            };
            Gl = {
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
            _.Jl = function (a) {
                a = a.document;
                a = _.Il(a) ? a.documentElement : a.body;
                return new _.Cl(a.clientWidth, a.clientHeight);
            };
            Kl = function (a) {
                return a.scrollingElement ? a.scrollingElement : !uk && _.Il(a) ? a.documentElement : a.body || a.documentElement;
            };
            _.Ll = function (a) {
                return a ? a.parentWindow || a.defaultView : window;
            };
            Ml = function (a, b, c) {
                function d(h) {
                    h && b.appendChild('string' === typeof h ? a.createTextNode(h) : h);
                }
                for (var e = 1; e < c.length; e++) {
                    var f = c[e];
                    if (!qa(f) || _.ja(f) && 0 < f.nodeType)
                        d(f);
                    else {
                        a: {
                            if (f && 'number' == typeof f.length) {
                                if (_.ja(f)) {
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
                        _.dj(g ? ha(f) : f, d);
                    }
                }
            };
            _.Nl = function (a, b) {
                b = String(b);
                'application/xhtml+xml' === a.contentType && (b = b.toLowerCase());
                return a.createElement(b);
            };
            _.Il = function (a) {
                return 'CSS1Compat' == a.compatMode;
            };
            _.Ol = function (a) {
                return a && a.parentNode ? a.parentNode.removeChild(a) : null;
            };
            _.Pl = function (a) {
                var b;
                if (Bl && !(_.rk && Ek('9') && !Ek('10') && _.F.SVGElement && a instanceof _.F.SVGElement) && (b = a.parentElement))
                    return b;
                b = a.parentNode;
                return _.ja(b) && 1 == b.nodeType ? b : null;
            };
            _.El = function (a) {
                return 9 == a.nodeType ? a : a.ownerDocument || a.document;
            };
            Ql = function (a) {
                try {
                    return a.contentWindow || (a.contentDocument ? _.Ll(a.contentDocument) : null);
                } catch (b) {
                }
                return null;
            };
            Dl = function (a) {
                this.j = a || _.F.document || document;
            };
            Dl.prototype.append = function (a, b) {
                Ml(_.El(a), a, arguments);
            };
            Dl.prototype.m = _.Ol;
            var Rl = function () {
                return Oj('iPad') || Oj('Android') && !Oj('Mobile') || Oj('Silk');
            };
            var Tl, Ul, Vl, Vg;
            _.Sl = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
            Tl = function (a) {
                return a ? decodeURI(a) : a;
            };
            Ul = function (a, b, c) {
                if (Array.isArray(b))
                    for (var d = 0; d < b.length; d++)
                        Ul(a, String(b[d]), c);
                else
                    null != b && c.push(a + ('' === b ? '' : '=' + encodeURIComponent(String(b))));
            };
            Vl = /#|$/;
            Vg = function (a, b) {
                var c = a.search(Vl);
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
            var We, Xl, pe, Wl, qe, Yl, hd, $l, qb, am, bm, Ze, dm, Zl, fm, gm, em, jd, hm, im, jm, km, lm, mm, nm, om, af, pm, qm, rm, Ad, sm, um, wm, Rf, zm, Am, ym, Bm, Cm, Em, Fm, Gm, Hm, Im, Lm, Km, Mm, Bb, Yh, Nm, Om, Pm, Nc, Qm;
            We = function (a) {
                try {
                    return !!a && null != a.location.href && pk(a, 'foo');
                } catch (b) {
                    return !1;
                }
            };
            Xl = function (a, b, c, d) {
                d = d || _.F;
                c && (d = Wl(d));
                for (c = 0; d && 40 > c++ && (!b && !We(d) || !a(d));)
                    d = Wl(d);
            };
            pe = function () {
                var a, b = a = void 0 === a ? _.F : a;
                Xl(function (c) {
                    b = c;
                    return !1;
                });
                return b;
            };
            Wl = function (a) {
                try {
                    var b = a.parent;
                    if (b && b != a)
                        return b;
                } catch (c) {
                }
                return null;
            };
            qe = function (a) {
                return We(a.top) ? a.top : null;
            };
            Yl = function (a, b) {
                var c = a.createElement('script');
                Gd(c, b);
                return (a = a.getElementsByTagName('script')[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null;
            };
            hd = function (a, b) {
                return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
            };
            $l = function (a, b) {
                if (!Zl()) {
                    var c = Math.random();
                    if (c < b)
                        return c = qb(_.F), a[Math.floor(c * a.length)];
                }
                return null;
            };
            qb = function (a) {
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
            _.ec = function (a, b, c) {
                if (a)
                    for (var d in a)
                        Object.prototype.hasOwnProperty.call(a, d) && b.call(c, a[d], d, a);
            };
            am = function (a) {
                for (var b in a)
                    if (Object.prototype.hasOwnProperty.call(a, b))
                        return !1;
                return !0;
            };
            bm = function (a) {
                var b = [];
                _.ec(a, function (c, d) {
                    b.push(d);
                });
                return b;
            };
            _.cm = function (a) {
                var b = [];
                _.ec(a, function (c) {
                    b.push(c);
                });
                return b;
            };
            Ze = function (a, b) {
                return ya(a, function (c, d) {
                    return Object.prototype.hasOwnProperty.call(a, d) && b(c, d);
                });
            };
            dm = function (a) {
                var b = a.length;
                if (0 == b)
                    return 0;
                for (var c = 305419896, d = 0; d < b; d++)
                    c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
                return 0 < c ? c : 4294967296 + c;
            };
            Zl = gd(function () {
                return _.fj([
                    'Google Web Preview',
                    'Mediapartners-Google',
                    'Google-Read-Aloud',
                    'Google-Adwords'
                ], em) || 0.0001 > Math.random();
            });
            fm = function (a) {
                return Zl() ? null : Math.floor(1000 * qb(a));
            };
            gm = function (a, b) {
                try {
                    if (a)
                        return a.setItem('google_experiment_mod', b), b;
                } catch (c) {
                }
                return null;
            };
            em = function (a) {
                return -1 != Lj.indexOf(a);
            };
            jd = /^([0-9.]+)px$/;
            hm = /^(-?[0-9.]{1,30})$/;
            _.Dg = function (a, b) {
                return hm.test(a) && (a = Number(a), !isNaN(a)) ? a : void 0 == b ? null : b;
            };
            im = function () {
                return /^true$/.test('false');
            };
            jm = function (a, b) {
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
            km = function (a) {
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
            lm = {
                Ke: 'allow-forms',
                Le: 'allow-modals',
                Me: 'allow-orientation-lock',
                Ne: 'allow-pointer-lock',
                Oe: 'allow-popups',
                Pe: 'allow-popups-to-escape-sandbox',
                Qe: 'allow-presentation',
                Re: 'allow-same-origin',
                Se: 'allow-scripts',
                Te: 'allow-top-navigation',
                Ue: 'allow-top-navigation-by-user-activation'
            };
            mm = gd(function () {
                return _.cm(lm);
            });
            nm = function (a) {
                var b = mm();
                return a.length ? _.De(b, function (c) {
                    return !(0 <= _.ea(a, c));
                }) : b;
            };
            om = function () {
                var a = _.Nl(document, 'IFRAME'), b = {};
                _.dj(mm(), function (c) {
                    a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0);
                });
                return b;
            };
            af = function (a) {
                a = a && a.toString && a.toString();
                return 'string' === typeof a && -1 != a.indexOf('[native code]');
            };
            pm = function (a, b) {
                try {
                    return !(!a.frames || !a.frames[b]);
                } catch (c) {
                    return !1;
                }
            };
            qm = function (a, b) {
                for (var c = 0; 50 > c; ++c) {
                    if (pm(a, b))
                        return a;
                    if (!(a = Wl(a)))
                        break;
                }
                return null;
            };
            rm = function (a, b) {
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
            Ad = gd(function () {
                return !Rl() && (Oj('iPod') || Oj('iPhone') || Oj('Android') || Oj('IEMobile')) ? 2 : Rl() ? 1 : 0;
            });
            sm = function (a, b) {
                var c;
                for (c = void 0 === c ? 100 : c; a && c--;) {
                    if (a == b)
                        return !0;
                    a = a.parentElement;
                }
                return !1;
            };
            _.xm = function (a, b) {
                a.style.setProperty ? _.ec(b, function (c, d) {
                    a.style.setProperty(d, c, 'important');
                }) : a.style.cssText = _.tm(um(_.vm(a.style.cssText), wm(b, function (c) {
                    return c + ' !important';
                })));
            };
            um = _.u(Object, 'assign') || function (a, b) {
                for (var c = 1; c < arguments.length; c++) {
                    var d = arguments[c];
                    if (d)
                        for (var e in d)
                            Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
                }
                return a;
            };
            wm = function (a, b) {
                var c = {}, d;
                for (d in a)
                    Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
                return c;
            };
            Rf = function (a, b, c) {
                for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);)
                    a = a.parentElement;
            };
            zm = function (a) {
                return ym(a, function (b) {
                    return 'fixed' == b.position || 'sticky' == b.position;
                });
            };
            Am = function (a) {
                return ym(a, function (b) {
                    return 'left' == b['float'] || 'right' == b['float'] || 'left' == b.cssFloat || 'right' == b.cssFloat;
                });
            };
            ym = function (a, b) {
                var c;
                for (c = void 0 === c ? 100 : c; a && c--;) {
                    var d = hd(a, window);
                    if (d) {
                        if (b(d))
                            return !0;
                        a = a.parentElement;
                    }
                }
                return !1;
            };
            Bm = function (a) {
                if (!a)
                    return null;
                a = a.transform;
                if (!a)
                    return null;
                a = a.replace(/^.*\(([0-9., -]+)\)$/, '$1').split(/, /);
                return 6 != a.length ? null : _.ye(a, parseFloat);
            };
            _.tm = function (a) {
                var b = [];
                _.ec(a, function (c, d) {
                    null != c && '' !== c && b.push(d + ':' + c);
                });
                return b.length ? b.join(';') + ';' : '';
            };
            _.vm = function (a) {
                var b = {};
                if (a) {
                    var c = /\s*:\s*/;
                    _.dj((a || '').split(/\s*;\s*/), function (d) {
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
            Cm = {};
            _.Dm = (Cm['http://googleads.g.doubleclick.net'] = !0, Cm['http://pagead2.googlesyndication.com'] = !0, Cm['https://googleads.g.doubleclick.net'] = !0, Cm['https://pagead2.googlesyndication.com'] = !0, Cm);
            Em = function (a) {
                _.F.console && _.F.console.warn && _.F.console.warn(a);
            };
            Fm = function (a, b) {
                b = ba(a, b);
                if (0 <= b) {
                    var c = a[b];
                    Array.prototype.splice.call(a, b, 1);
                    return c;
                }
                return null;
            };
            Gm = [];
            Hm = function () {
                var a = Gm;
                Gm = [];
                a = _.H(a);
                for (var b = a.next(); !b.done; b = a.next()) {
                    b = b.value;
                    try {
                        b();
                    } catch (c) {
                    }
                }
            };
            Im = function (a) {
                return a.replace(/\\(n|r|\\)/g, function (b, c) {
                    return 'n' == c ? '\n' : 'r' == c ? '\r' : '\\';
                });
            };
            Lm = function (a) {
                var b = Jm;
                a = void 0 === a ? window.document : a;
                0 != b.length && a.head && b.forEach(function (c) {
                    c && Km(c, a);
                });
            };
            Km = function (a, b) {
                b = void 0 === b ? window.document : b;
                if (a && b.head) {
                    var c = document.createElement('meta');
                    b.head.appendChild(c);
                    c.httpEquiv = 'origin-trial';
                    c.content = a;
                }
            };
            Mm = function () {
                return Math.floor(Math.random() * Math.pow(2, 52));
            };
            Bb = function (a) {
                if ('number' !== typeof a.goog_pvsid)
                    try {
                        Object.defineProperty(a, 'goog_pvsid', {
                            value: Mm(),
                            configurable: !1
                        });
                    } catch (b) {
                    }
                return Number(a.goog_pvsid) || -1;
            };
            Yh = function (a, b) {
                'complete' === a.readyState || 'interactive' === a.readyState ? (Gm.push(b), 1 == Gm.length && (D.Promise ? D.Promise.resolve().then(Hm) : window.setImmediate ? setImmediate(Hm) : setTimeout(Hm, 0))) : a.addEventListener('DOMContentLoaded', b);
            };
            Nm = function (a) {
                return 0 === a || 'number' === typeof a && isFinite(a) && 0 == a % 1 && 0 < a;
            };
            Om = function (a, b) {
                var c = document.createElement('div');
                c.id = a;
                c.textContent = b;
                _.xm(c, {
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
            Pm = function (a) {
                return new D.Promise(function (b) {
                    setTimeout(function () {
                        return void b('timeout');
                    }, a);
                });
            };
            Nc = function (a) {
                try {
                    var b = JSON.stringify(a);
                } catch (c) {
                }
                return b || String(a);
            };
            Qm = function (a) {
                var b = '';
                Xl(function (c) {
                    if (c === c.top)
                        return !0;
                    c.document && c.document.referrer && (b = c.document.referrer);
                    return !1;
                }, !1, !1, a);
                return b;
            };
            var Sm;
            _.Rm = function (a, b, c, d) {
                this.top = a;
                this.right = b;
                this.bottom = c;
                this.left = d;
            };
            Sm = function (a) {
                return new _.Rm(a.top, a.right, a.bottom, a.left);
            };
            _.Rm.prototype.ceil = function () {
                this.top = Math.ceil(this.top);
                this.right = Math.ceil(this.right);
                this.bottom = Math.ceil(this.bottom);
                this.left = Math.ceil(this.left);
                return this;
            };
            _.Rm.prototype.floor = function () {
                this.top = Math.floor(this.top);
                this.right = Math.floor(this.right);
                this.bottom = Math.floor(this.bottom);
                this.left = Math.floor(this.left);
                return this;
            };
            _.Rm.prototype.round = function () {
                this.top = Math.round(this.top);
                this.right = Math.round(this.right);
                this.bottom = Math.round(this.bottom);
                this.left = Math.round(this.left);
                return this;
            };
            var Um = function (a, b, c, d) {
                    this.left = a;
                    this.top = b;
                    this.width = c;
                    this.height = d;
                }, Vm = function (a) {
                    return new _.Rm(a.top, a.left + a.width, a.top + a.height, a.left);
                }, Wm = function (a, b) {
                    var c = Math.max(a.left, b.left), d = Math.min(a.left + a.width, b.left + b.width);
                    if (c <= d) {
                        var e = Math.max(a.top, b.top);
                        a = Math.min(a.top + a.height, b.top + b.height);
                        if (e <= a)
                            return new Um(c, e, d - c, a - e);
                    }
                    return null;
                };
            Um.prototype.ceil = function () {
                this.left = Math.ceil(this.left);
                this.top = Math.ceil(this.top);
                this.width = Math.ceil(this.width);
                this.height = Math.ceil(this.height);
                return this;
            };
            Um.prototype.floor = function () {
                this.left = Math.floor(this.left);
                this.top = Math.floor(this.top);
                this.width = Math.floor(this.width);
                this.height = Math.floor(this.height);
                return this;
            };
            Um.prototype.round = function () {
                this.left = Math.round(this.left);
                this.top = Math.round(this.top);
                this.width = Math.round(this.width);
                this.height = Math.round(this.height);
                return this;
            };
            var Xm = function (a) {
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
                }, Ym = function (a) {
                    return (a = a || Xm()) ? We(a.master) ? a.master : null : null;
                }, $m = function (a, b) {
                    if (a.ampInaboxInitialized)
                        return !0;
                    var c, d = 'amp-ini-load' === b.data;
                    a.ampInaboxPendingMessages && !d && (c = /^amp-(\d{15,20})?/.exec(b.data)) && (a.ampInaboxPendingMessages.push(b), Zm(a, c[1]));
                    return !1;
                }, an = function (a, b, c) {
                    var d = !0;
                    d = void 0 === d ? !1 : d;
                    var e = a.ampInaboxIframes = a.ampInaboxIframes || [], f = function () {
                        }, g = function () {
                        };
                    b && (e.push(b), g = function () {
                        a.AMP && a.AMP.inaboxUnregisterIframe && a.AMP.inaboxUnregisterIframe(b);
                        fa(e, b);
                        f();
                    });
                    if (a.ampInaboxInitialized)
                        return g;
                    a.ampInaboxPendingMessages = a.ampInaboxPendingMessages || [];
                    c && /^\d{15,20}$/.test(c) && Zm(a, c);
                    var h = function (k) {
                        $m(a, k) && f();
                    };
                    d || e.google_amp_listener_added || (e.google_amp_listener_added = !0, _.Hd(a, 'message', h), f = function () {
                        _.ge(a, 'message', h);
                    });
                    return g;
                }, Zm = function (a, b) {
                    a.ampInaboxInitialized || b && !/^\d{15,20}$/.test(b) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Yl(a.document, b ? Nd(kj('https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js'), { ampVersion: b }) : rj(jj(kj('https://cdn.ampproject.org/amp4ads-host-v0.js'))));
                };
            var Wb, gi;
            _.bn = function (a, b) {
                a.google_image_requests || (a.google_image_requests = []);
                var c = a.document.createElement('img');
                c.src = b;
                a.google_image_requests.push(c);
            };
            Wb = function (a, b) {
                var c = 'https://pagead2.googlesyndication.com/pagead/gen_204?id=' + b;
                _.ec(a, function (d, e) {
                    d && (c += '&' + e + '=' + encodeURIComponent(d));
                });
                gi(c);
            };
            gi = function (a) {
                var b = window;
                b.fetch ? b.fetch(a, {
                    keepalive: !0,
                    credentials: 'include',
                    redirect: 'follow',
                    method: 'get',
                    mode: 'no-cors'
                }) : _.bn(b, a);
            };
            _.ob = function (a) {
                this.Ud = a;
            };
            _.cn = [
                pb('data'),
                pb('http'),
                pb('https'),
                pb('mailto'),
                pb('ftp'),
                new _.ob(function (a) {
                    return /^[^:]*([/?#]|$)/.test(a);
                })
            ];
            var fn, dn;
            _.en = function (a) {
                dn();
                return new Uj(a, null, Tj);
            };
            fn = function (a) {
                dn();
                return rj(a);
            };
            dn = Oi;
            var jn, ln, mn, nn, on, qn, un;
            _.hn = function (a, b, c) {
                if ('string' === typeof b)
                    (b = _.gn(a, b)) && (a.style[b] = c);
                else
                    for (var d in b) {
                        c = a;
                        var e = b[d], f = _.gn(c, d);
                        f && (c.style[f] = e);
                    }
            };
            jn = {};
            _.gn = function (a, b) {
                var c = jn[b];
                if (!c) {
                    var d = _.hk(b);
                    c = d;
                    void 0 === a.style[d] && (d = (uk ? 'Webkit' : tk ? 'Moz' : _.rk ? 'ms' : qk ? 'O' : null) + ik(d), void 0 !== a.style[d] && (c = d));
                    jn[b] = c;
                }
                return c;
            };
            _.kn = function (a, b) {
                var c = _.El(a);
                return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || '' : '';
            };
            ln = function (a, b) {
                return _.kn(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b];
            };
            mn = function (a) {
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
            nn = function (a) {
                if (_.rk && !(8 <= Number(Hk)))
                    return a.offsetParent;
                var b = _.El(a), c = ln(a, 'position'), d = 'fixed' == c || 'absolute' == c;
                for (a = a.parentNode; a && a != b; a = a.parentNode)
                    if (11 == a.nodeType && a.host && (a = a.host), c = ln(a, 'position'), d = d && 'static' == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || 'fixed' == c || 'absolute' == c || 'relative' == c))
                        return a;
                return null;
            };
            on = function (a) {
                var b = _.El(a), c = new _.ld(0, 0);
                var d = b ? _.El(b) : document;
                d = !_.rk || 9 <= Number(Hk) || _.Il(Fl(d).j) ? d.documentElement : d.body;
                if (a == d)
                    return c;
                a = mn(a);
                d = Fl(b).j;
                b = Kl(d);
                d = d.parentWindow || d.defaultView;
                b = _.rk && Ek('10') && d.pageYOffset != b.scrollTop ? new _.ld(b.scrollLeft, b.scrollTop) : new _.ld(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
                c.x = a.left + b.x;
                c.y = a.top + b.y;
                return c;
            };
            qn = function (a, b) {
                var c = new _.ld(0, 0), d = _.Ll(_.El(a));
                if (!pk(d, 'parent'))
                    return c;
                do {
                    var e = d == b ? on(a) : _.pn(a);
                    c.x += e.x;
                    c.y += e.y;
                } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
                return c;
            };
            _.pn = function (a) {
                a = mn(a);
                return new _.ld(a.left, a.top);
            };
            _.rn = function (a, b) {
                'number' == typeof a && (a = (b ? Math.round(a) : a) + 'px');
                return a;
            };
            _.sn = function (a, b) {
                if ('none' != ln(b, 'display'))
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
            _.tn = function (a) {
                var b = a.offsetWidth, c = a.offsetHeight, d = uk && !b && !c;
                return (void 0 === b || d) && a.getBoundingClientRect ? (a = mn(a), new _.Cl(a.right - a.left, a.bottom - a.top)) : new _.Cl(b, c);
            };
            un = function (a) {
                if (!a.getBoundingClientRect)
                    return null;
                a = _.sn(mn, a);
                return new _.Cl(a.right - a.left, a.bottom - a.top);
            };
            var wn = function () {
                    var a = vn();
                    'google_onload_fired' in a || (a.google_onload_fired = !1, _.Hd(a, 'load', function () {
                        a.google_onload_fired = !0;
                    }));
                }, xn = function () {
                    var a = void 0 === a ? tl : a;
                    try {
                        return a.history.length;
                    } catch (b) {
                        return 0;
                    }
                }, yn = function (a) {
                    a = Ym(Xm(a)) || a;
                    a = a.google_unique_id;
                    return 'number' === typeof a ? a : 0;
                }, zn = !!window.google_async_iframe_id, An = zn && window.parent || window, vn = function () {
                    if (zn && !We(An)) {
                        var a = '.' + sl.domain;
                        try {
                            for (; 2 < a.split('.').length && !We(An);)
                                sl.domain = a = a.substr(a.indexOf('.') + 1), An = window.parent;
                        } catch (b) {
                        }
                        We(An) || (An = window);
                    }
                    return An;
                }, Bn = function () {
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
                        if (Qj()) {
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
            var Cn = function (a, b) {
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
                }, Dn = function (a, b, c) {
                    c = void 0 === c ? Cn : c;
                    this.j = a;
                    this.o = void 0 === b ? 'https://pagead2.googlesyndication.com/pagead/ping' : b;
                    this.m = c;
                };
            var ic = function () {
                Dn.apply(this, arguments);
            };
            _.P(ic, Dn);
            var kc = function (a, b) {
                try {
                    a.j() && a.m(a.o + '?e=1', '[[[{"2":' + ql(b()) + '}]]]');
                } catch (c) {
                }
            };
            var S = function (a, b) {
                    this.j = a;
                    this.defaultValue = void 0 === b ? !1 : b;
                }, En = function (a, b) {
                    this.j = a;
                    this.defaultValue = void 0 === b ? 0 : b;
                }, Fn = function (a, b) {
                    this.j = a;
                    this.defaultValue = void 0 === b ? '' : b;
                }, Gn = function (a, b) {
                    b = void 0 === b ? [] : b;
                    this.j = a;
                    this.defaultValue = b;
                };
            var Vf, qh, In, th, tc, Jn, Kn, Ln, Mn, Nn, On, Pn, Qn, Rn, Sn, lf, Tn, Un, Vn, Wn, Xn, Yn, Zn, $n, ao, bo, co, hc, wc, eo, fo, go, ho, io, jo, ko, lo, mo, no, oo, po, qo, ro, so, to, uo, vo, wo, xo, yo, zo, Ao, Zf, Bo, Rh, vd, Co, Cg, Do, Eo, Fo, Go, xc, Ho, Io, Jo, Ko, Lo, Mo, ug, No, Oo, Po, Qo, Ro, So, To, Uo, Eg, Vo, Wo, Xo, Yo, Zo, $o, ap, bp, cp, dp, ep, fp, gp, hp, ip, jp, kp, lp, mp, vh, xd, np, op, pp, qp, rp, sp, tp, up, vp, wp, xp, yp, re, zp, Ap, Bp, ae, Cp, Dp, Ep, Zd, Fp, Gp, Ip, Jp, od, Lp, Mp, Np, Pp, Je, Qp, Rp, Sp, Tp, Up, Vp;
            _.Hn = new En(36);
            Vf = new S(98);
            qh = new S(206);
            In = new S(528);
            th = new En(465);
            tc = new S(144);
            Jn = new S(368279556);
            Kn = new S(366809413);
            Ln = new Fn(3);
            Mn = new Gn(481);
            Nn = new En(7, 0.1);
            On = new S(376190677, !0);
            Pn = new S(514, !0);
            Qn = new S(212);
            Rn = new S(361174373, !0);
            Sn = new En(383474324);
            lf = new En(374482958);
            Tn = new S(359351145);
            Un = new S(362946046);
            Vn = new S(23);
            Wn = new S(369430);
            Xn = new En(357045128);
            Yn = new S(346);
            Zn = new S(520);
            $n = new S(104);
            ao = new S(319);
            bo = new S(493);
            co = new S(364);
            hc = new En(385440135, 100);
            wc = new S(378290973);
            eo = new En(377289019);
            fo = new S(370993688);
            go = new S(504, !0);
            ho = new S(384734642);
            io = new En(488);
            jo = new En(529, 20);
            ko = new Fn(10);
            lo = new S(500);
            mo = new S(360245597);
            no = new En(494, 5000);
            oo = new En(517);
            po = new S(123);
            qo = new S(383178307);
            ro = new S(371390390);
            so = new S(386657881);
            to = new S(383432437);
            uo = new S(375971837, !0);
            vo = new S(384974428);
            wo = new S(382086337, !0);
            xo = new S(382109806);
            yo = new S(375090993, !0);
            zo = new S(20);
            Ao = new S(220);
            Zf = new S(200);
            Bo = new S(111);
            Rh = new S(323);
            vd = new En(492, 0.01);
            Co = new En(363650251);
            Cg = new Gn(480);
            Do = new En(17);
            Eo = new En(16);
            Fo = new En(18);
            Go = new S(83);
            xc = new S(85);
            Ho = new S(305);
            Io = new S(417);
            Jo = new S(471);
            Ko = new S(442);
            Lo = new S(390);
            Mo = new S(177);
            ug = new S(434);
            No = new S(464);
            Oo = new S(35976);
            Po = new S(35977);
            Qo = new S(3580985);
            Ro = new S(365635966);
            So = new S(3580885);
            To = new En(470, 10);
            Uo = new S(432);
            Eg = new En(8, -1);
            Vo = new S(440);
            Wo = new S(380853767);
            Xo = new S(381311271);
            Yo = new S(378410763);
            Zo = new S(377598633);
            $o = new En(374201269, 60000);
            ap = new S(374201268, !0);
            bp = new En(371364213, 60000);
            cp = new En(373440923, 0.0001);
            dp = new En(376149757, 0.0025);
            ep = new S(371364212, !0);
            fp = new S(437, !0);
            gp = new S(377936516);
            hp = new S(320);
            ip = new En(47, 1);
            jp = new En(25);
            kp = new Gn(1);
            lp = new Fn(2, '1-0-38');
            mp = new S(116);
            vh = new S(416);
            xd = new S(474);
            np = new S(373056376);
            op = new Gn(489);
            pp = new S(371157910);
            qp = new S(360245598);
            rp = new En(360245595, 200);
            sp = new S(360245596);
            tp = new En(359346956);
            up = new En(61, 0.001);
            vp = new S(1936, !0);
            wp = new S(522);
            xp = new S(501);
            yp = new Fn(363931022);
            re = new S(1930);
            zp = new Gn(1918, 'criteo index indextest openx openxtest pubcid.org pubmatic thetradedesktest'.split(' '));
            Ap = new S(453);
            Bp = new S(454);
            ae = new En(360261971);
            Cp = new En(1921, 72);
            Dp = new En(1920, 24);
            Ep = new En(1917, 300);
            Zd = new En(1916, 0.001);
            Fp = new S(1931, !0);
            Gp = new S(377431981, !0);
            _.Hp = new S(1944);
            Ip = new S(77);
            Jp = new S(78);
            od = new S(309);
            _.Kp = new S(1903);
            Lp = new S(80);
            Mp = new S(76);
            Np = new S(81);
            _.Op = new S(1940);
            Pp = new S(84);
            Je = new S(3655606);
            Qp = new S(188);
            Rp = new S(1928);
            Sp = new S(1941);
            Tp = new S(370946349);
            Up = new S(379841917);
            Vp = new S(385922407);
            var I = {
                af: function () {
                },
                Cf: function () {
                    return '';
                },
                Xe: function () {
                }
            };
            I.Bf = sb;
            var Wp = sb(function (a) {
                    return null !== a && void 0 !== a;
                }, 'exists'), tb = sb(function (a) {
                    return !!a;
                }, 'truthy');
            I.assert = function () {
            };
            I.vf = function (a) {
                return a;
            };
            I.Hf = wb;
            I.Kf = xb;
            I.uf = function () {
            };
            I.wf = function (a) {
                return a;
            };
            I.Jf = yb;
            I.Mf = function (a) {
                yb(a);
                return a;
            };
            I.tf = function () {
            };
            I.M = function (a) {
                return a;
            };
            I.If = function (a) {
                wb(a, Wp);
            };
            I.Lf = function (a) {
                return xb(a, Wp);
            };
            I.Af = function (a, b) {
                return a(b);
            };
            I.functionName = function (a) {
                var b = a.name;
                b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : '(Anonymous)');
                return b;
            };
            var lc = function (a) {
                R.call(this, a, -1, Xp);
            };
            _.P(lc, R);
            var Xp = [3];
            var Hb = function (a) {
                R.call(this, a, -1, Yp);
            };
            _.P(Hb, R);
            var Yp = [4];
            var Ab = function (a) {
                R.call(this, a, -1, Zp);
            };
            _.P(Ab, R);
            var Zp = [2];
            var zb = function (a) {
                R.call(this, a, -1, void 0, pc);
            };
            _.P(zb, R);
            var pc = [[4]];
            var $p = null, aq = function () {
                    if (null === $p) {
                        $p = '';
                        try {
                            var a = '';
                            try {
                                a = _.F.top.location.hash;
                            } catch (c) {
                                a = _.F.location.hash;
                            }
                            if (a) {
                                var b = a.match(/\bdeid=([\d,]+)/);
                                $p = b ? b[1] : '';
                            }
                        } catch (c) {
                        }
                    }
                    return $p;
                };
            var bq;
            _.Hc = function () {
                var a = _.F.performance;
                return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Wf();
            };
            _.dg = function (a) {
                a = void 0 === a ? _.F : a;
                return (a = a.performance) && a.now ? a.now() : null;
            };
            bq = function (a) {
                var b = _.F.performance;
                return b && b.timing && b.timing[a] || 0;
            };
            var cq = function (a, b, c, d, e) {
                this.label = a;
                this.type = b;
                this.value = c;
                this.duration = void 0 === d ? 0 : d;
                this.uniqueId = Math.random();
                this.slotId = e;
            };
            var dq = _.F.performance, eq = !!(dq && dq.mark && dq.measure && dq.clearMarks), fq = gd(function () {
                    var a;
                    if (a = eq)
                        a = aq(), a = !!a.indexOf && 0 <= a.indexOf('1337');
                    return a;
                }), gq = function (a, b) {
                    this.events = [];
                    this.o = b || _.F;
                    var c = null;
                    b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
                    this.j = fq() || (null != c ? c : Math.random() < a);
                }, Ac = function (a) {
                    a && dq && fq() && (dq.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_start'), dq.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_end'));
                }, Mb = function (a, b, c, d, e, f) {
                    a.j && (b = new cq(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.events.length || a.events.push(b));
                };
            gq.prototype.start = function (a, b) {
                if (!this.j)
                    return null;
                a = new cq(a, b, _.dg() || _.Hc());
                b = 'goog_' + a.label + '_' + a.uniqueId + '_start';
                dq && fq() && dq.mark(b);
                return a;
            };
            gq.prototype.end = function (a) {
                if (this.j && 'number' === typeof a.value) {
                    a.duration = (_.dg() || _.Hc()) - a.value;
                    var b = 'goog_' + a.label + '_' + a.uniqueId + '_end';
                    dq && fq() && dq.mark(b);
                    !this.j || 2048 < this.events.length || this.events.push(a);
                }
            };
            var hq = function (a, b, c) {
                var d = _.dg();
                d && Mb(a, b, 9, d, 0, c);
            };
            var Xb = function (a, b) {
                try {
                    -1 == a.indexOf(b) && (a = b + '\n' + a);
                    for (var c; a != c;)
                        c = a, a = a.replace(/((https?:\/..*\/)[^\/:]*:\d+(?:.|\n)*)\2/, '$1');
                    return a.replace(/\n */g, '\n');
                } catch (d) {
                    return b;
                }
            };
            var iq;
            iq = {
                ef: 0,
                cd: 3,
                ed: 4,
                fd: 5
            };
            var jq = iq.cd, kq = iq.ed, lq = iq.fd;
            _.O = function (a) {
                if (a.Ca && a.hasOwnProperty('Ca'))
                    return a.Ca;
                var b = new a();
                return a.Ca = b;
            };
            var mq = im();
            var nq = function (a) {
                    this.methodName = a;
                }, oq = new nq(1), pq = new nq(15), qq = new nq(2), rq = new nq(3), sq = new nq(5), tq = new nq(6), uq = new nq(7), vq = new nq(8), wq = new nq(14), xq = function (a, b, c) {
                    return b[a.methodName] || c || function () {
                    };
                };
            var yq = function () {
                    this.m = function () {
                    };
                    this.j = function () {
                        return [];
                    };
                    this.o = function () {
                        return [];
                    };
                }, zq = function (a, b, c) {
                    a.m = xq(oq, b, function () {
                    });
                    a.j = function (d) {
                        return xq(qq, b, function () {
                            return [];
                        })(d, c);
                    };
                    a.o = function () {
                        return xq(rq, b, function () {
                            return [];
                        })(c);
                    };
                }, Db = function () {
                    return _.O(yq).o();
                };
            var Aq, Bq, Bg;
            Aq = function () {
                var a = {};
                this.m = function (b, c) {
                    return null != a[b] ? a[b] : c;
                };
                this.o = function (b, c) {
                    return null != a[b] ? a[b] : c;
                };
                this.l = function (b, c) {
                    return null != a[b] ? a[b] : c;
                };
                this.G = function (b, c) {
                    return null != a[b] ? a[b] : c;
                };
                this.j = function () {
                };
            };
            _.v = function (a) {
                return _.O(Aq).m(a.j, a.defaultValue);
            };
            _.gc = function (a) {
                return _.O(Aq).o(a.j, a.defaultValue);
            };
            Bq = function (a) {
                return _.O(Aq).l(a.j, a.defaultValue);
            };
            Bg = function (a) {
                return _.O(Aq).G(a.j, a.defaultValue);
            };
            var rh = function () {
                    return _.F.googletag || (_.F.googletag = {});
                }, ph = function (a, b) {
                    var c = rh();
                    c.hasOwnProperty(a) || (c[a] = b);
                }, Cq = function (a, b) {
                    a.addEventListener ? a.addEventListener('load', b, !1) : a.attachEvent && a.attachEvent('onload', b);
                };
            var Dq = {
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
                    252: null,
                    258: null,
                    251: null,
                    259: null
                }, Eq, Fq, Gq, Hq, Iq;
            Dq[6] = jm(window);
            Dq[49] = new Date().getTime();
            Dq[36] = im();
            Dq[148] = mq;
            Dq[221] = im();
            Dq[254] = im();
            Dq[204] = _.Dg('-1', -1);
            Dq[257] = im();
            Dq[260] = void 0;
            Eq = function () {
                for (var a in Dq)
                    this[a] = Dq[a];
            };
            _.bc = function (a) {
                return _.O(Eq)[a];
            };
            Fq = rh();
            Gq = _.O(Eq);
            Hq = Fq._vars_;
            for (Iq in Hq)
                Gq[Iq] = Hq[Iq];
            Fq._vars_ = Gq;
            var Jq = {}, Kq = (Jq.companion_ads = 'companionAds', Jq.content = 'content', Jq.publisher_ads = 'pubads', Jq), Lq = function (a) {
                    return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en';
                }, wh = {
                    kf: 'rewardedSlotReady',
                    jf: 'rewardedSlotGranted',
                    ff: 'rewardedSlotCanceled',
                    gf: 'rewardedSlotClosed',
                    hf: 'rewardedSlotCompleted',
                    lf: 'slotAdded',
                    pf: 'slotRequested',
                    qf: 'slotResponseReceived',
                    nf: 'slotRenderEnded',
                    mf: 'slotOnload',
                    rf: 'slotVisibilityChanged',
                    bf: 'impressionViewable'
                };
            var Mq = function () {
                gq.apply(this, arguments);
            };
            _.P(Mq, gq);
            Mq.L = function () {
                throw Error('Must be overridden');
            };
            var Nb = function () {
                Mq.call(this, _.v(xc) || _.v(Pp) ? 1 : 0, _.F);
                this.m = 0;
                var a = _.v(xc) || _.v(Pp);
                _.F.google_measure_js_timing = a || _.F.google_measure_js_timing;
            };
            _.P(Nb, Mq);
            Pi(Nb);
            var Nq = gd(function () {
                return !!km(_.F.location.href);
            });
            var cc = function (a, b) {
                    b = void 0 === b ? 'https://pagead2.googlesyndication.com' : b;
                    var c = void 0 === c ? Bb(_.F) : c;
                    this.id = a;
                    this.Zb = b;
                    this.m = Math.random();
                    if (null == d || 0 > d || 1 < d)
                        var d = _.bc(23);
                    this.o = this.m < d;
                    this.j = { pvsid: String(c) };
                }, Oq = function (a) {
                    var b;
                    a = Lb(a);
                    oc.set(a, (null !== (b = oc.get(a)) && void 0 !== b ? b : 0) + 1);
                }, mc = function () {
                    return [].concat(_.nc(_.u(oc, 'values').call(oc))).reduce(function (a, b) {
                        return a + b;
                    }, 0);
                }, r = function (a, b, c) {
                    'string' !== typeof c && (c = String(c));
                    /^\w+$/.test(b) && (c ? a.j[b] = c : delete a.j[b]);
                }, fc = function (a, b, c) {
                    b = void 0 === b ? null : b;
                    c = void 0 === c ? !1 : c;
                    b = void 0 === b ? null : b;
                    c = void 0 === c ? !1 : c;
                    if (Nq())
                        b = !0;
                    else {
                        var d = a.o;
                        b && 0 <= b && (d = (c ? a.m : Math.random()) < b);
                        b = d && !!a.id;
                    }
                    b && (_.v(Ho) ? Wb(a.j, a.id) : (a = Pq(a) || '', _.bn(window, a)));
                }, Pq = function (a) {
                    var b = a.Zb + '/pagead/gen_204?id=' + encodeURIComponent(a.id);
                    _.ec(a.j, function (c, d) {
                        c && (b += '&' + d + '=' + encodeURIComponent(c));
                    });
                    return b;
                }, Qq = function (a, b) {
                    3 >= b.length ? r(a, 'nw_id', b.join()) : (b = b.slice(0, 3), b.push('__extra__'), r(a, 'nw_id', b.join()));
                }, dc = function (a, b) {
                    r(a, 'vrg', Sb());
                    b ? (Qq(a, b), r(a, 'nslots', b.length.toString())) : (Qq(a, [].concat(_.nc(_.u(oc, 'keys').call(oc)))), r(a, 'nslots', mc().toString()));
                    b = Db();
                    b.length && r(a, 'eid', b.join());
                    r(a, 'pub_url', document.URL);
                }, uc = function (a, b, c) {
                    c = void 0 === c ? {
                        Zb: 'https://pagead2.googlesyndication.com',
                        qa: _.bc(23)
                    } : c;
                    var d = c.Zb || 'https://pagead2.googlesyndication.com';
                    c = c.qa;
                    if (void 0 === c || 0 > c || 1 < c)
                        c = _.bc(23);
                    Math.random() < c && (a = new cc(a, d), b(a), fc(a, 1, !0));
                }, oc = new D.Map();
            var ac = _.bc(38);
            _.Rq = function () {
                this.m = this.m;
                this.X = this.X;
            };
            _.Rq.prototype.m = !1;
            _.Rq.prototype.za = function () {
                this.m || (this.m = !0, this.G());
            };
            _.Sq = function (a, b) {
                _.Xg(a, _.Vi(Cc, b));
            };
            _.Xg = function (a, b) {
                a.m ? b() : (a.X || (a.X = []), a.X.push(b));
            };
            _.Rq.prototype.G = function () {
                if (this.X)
                    for (; this.X.length;)
                        this.X.shift()();
            };
            var Tq = function () {
                    this.id = 'goog_' + gk++;
                }, Uq = function () {
                    _.Rq.apply(this, arguments);
                    this.l = new D.Map();
                };
            _.P(Uq, _.Rq);
            Uq.prototype.G = function () {
                _.Rq.prototype.G.call(this);
                this.l.clear();
            };
            var Wq = function (a, b, c) {
                    var d, e;
                    if (a.m)
                        return function () {
                        };
                    var f = 'string' === typeof b ? b : b.id, g = null !== (e = null === (d = a.l.get(f)) || void 0 === d ? void 0 : d.add(c)) && void 0 !== e ? e : new D.Set([c]);
                    a.l.set(f, g);
                    return function () {
                        return void Vq(a, b, c);
                    };
                }, Hg = function (a, b, c) {
                    c = void 0 === c ? function () {
                        return !0;
                    } : c;
                    return new D.Promise(function (d) {
                        var e = Wq(a, b, function (f) {
                            c(f) && (e(), d(f));
                        });
                    });
                }, Vq = function (a, b, c) {
                    var d;
                    return !(null === (d = a.l.get('string' === typeof b ? b : b.id)) || void 0 === d || !d.delete(c));
                };
            Uq.prototype.dispatchEvent = function (a, b, c) {
                var d;
                return z(this, function f() {
                    var g = this, h, k, l, m, n, p, t;
                    return A(f, function (w) {
                        1 == w.j && (h = g, k = 'string' === typeof a ? a : a.id, l = document.createEvent('CustomEvent'), l.initCustomEvent(k, !0, !0, c), m = null !== (d = g.l.get(k)) && void 0 !== d ? d : new D.Set(), n = {}, p = _.H(m), t = p.next());
                        if (5 != w.j) {
                            if (t.done) {
                                w.j = 0;
                                return;
                            }
                            n.zb = t.value;
                            return C(w, 0, 5);
                        }
                        Bc(b, function (B) {
                            return function () {
                                h.l.has(k) && m.has(B.zb) && B.zb(l);
                            };
                        }(n), !0);
                        n = { zb: n.zb };
                        t = p.next();
                        w.j = 2;
                    });
                });
            };
            var Xq = new Tq(), Yq = new Tq(), Zq = new Tq(), $q = new Tq(), ar = new Tq(), br = new Tq(), cr = new Tq(), dr = new Tq(), Ig = new Tq(), er = new Tq();
            var fr = function (a, b) {
                b = void 0 === b ? [] : b;
                this.m = a;
                this.j = b;
            };
            fr.prototype.getMessageId = function () {
                return this.m;
            };
            fr.prototype.getMessageArgs = function () {
                return this.j;
            };
            var gr = function (a, b, c) {
                this.o = new Date();
                this.l = c;
                this.j = a;
                this.m = b;
            };
            _.q = gr.prototype;
            _.q.getSlot = function () {
                return this.l;
            };
            _.q.getLevel = function () {
                return this.j;
            };
            _.q.getTimestamp = function () {
                return this.o;
            };
            _.q.getMessage = function () {
                return this.m;
            };
            _.q.toString = function () {
                return this.o.toTimeString() + ': ' + hr[this.j] + ': ' + this.m;
            };
            var hr = [
                'Debug',
                'Info',
                'Warning',
                'Error',
                'Fatal'
            ];
            var ir = function (a, b, c) {
                Uq.call(this);
                this.C = a;
                this.Ca = b;
                this.A = this.C + '_' + this.Ca;
                this.j = c;
                this.o = null;
            };
            _.P(ir, Uq);
            ir.prototype.getAdUnitPath = function () {
                return this.C;
            };
            ir.prototype.getName = function () {
                return this.C;
            };
            ir.prototype.L = function () {
                return this.Ca;
            };
            ir.prototype.toString = function () {
                return this.A;
            };
            var jr = function (a, b) {
                a.o = b;
            };
            var kr = {
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
                }, lr = {
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
            var mr = function () {
                this.m = 0;
                this.j = [];
            };
            _.q = mr.prototype;
            _.q.add = function (a) {
                var b = this.j[this.m];
                this.j[this.m] = a;
                this.m = (this.m + 1) % 1000;
                return b;
            };
            _.q.get = function (a) {
                a = nr(this, a);
                return this.j[a];
            };
            _.q.set = function (a, b) {
                a = nr(this, a);
                this.j[a] = b;
            };
            _.q.isEmpty = function () {
                return 0 == this.j.length;
            };
            _.q.Kb = function () {
                for (var a = this.j.length, b = [], c = this.j.length - this.j.length; c < a; c++)
                    b.push(this.get(c));
                return b;
            };
            var nr = function (a, b) {
                if (b >= a.j.length)
                    throw Error('Out of bounds exception');
                return 1000 > a.j.length ? b : (a.m + Number(b)) % 1000;
            };
            var or = function () {
                    this.j = new mr();
                    this.m = this.o = 0;
                }, pr = function (a, b) {
                    return a.j.Kb().filter(function (c) {
                        return c.getSlot() === b;
                    });
                }, qr = function (a, b) {
                    return a.j.Kb().filter(function (c) {
                        return c.getLevel() >= b;
                    });
                };
            or.prototype.log = function (a, b, c, d) {
                var e = this;
                d = void 0 === d ? !1 : d;
                var f, g;
                c = new gr(a, b, null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.o) ? g : null);
                this.j.add(c);
                f = _.v(go) && !_.v(ho);
                g = _.v(ho) && _.F.top == _.F.self;
                var h = _.gc(io) && 100 > this.o, k = 2 === a || 3 === a, l = this.m < _.gc(jo) && k && _.F.console, m = b.getMessageArgs(), n = b.getMessageId(), p = kr[n] || lr[n];
                h && k && (b = _.gc(io), uc('gpt_eventlog_messages', function (G) {
                    ++e.o;
                    dc(G);
                    r(G, 'level', a);
                    r(G, 'messageId', n);
                    r(G, 'args', m.join('|'));
                    p || r(G, 'noMsg', !0);
                    var Q = Error();
                    r(G, 'stack', Xb(Q.stack, Q.message));
                }, { qa: b }));
                if (p) {
                    b = '[GPT] ' + p(m);
                    if (d)
                        throw Error(b);
                    if (l && (f || g)) {
                        var t, w, B, K;
                        2 === a ? null == (w = (t = _.F.console).warn) || w.call(t, b) : null == (K = (B = _.F.console).error) || K.call(B, b);
                        this.m++;
                    }
                }
                return c;
            };
            or.prototype.info = function (a, b) {
                return this.log(1, a, void 0 === b ? null : b);
            };
            or.prototype.I = function (a, b) {
                return this.log(2, a, b);
            };
            or.prototype.error = function (a, b, c) {
                return this.log(3, a, b, void 0 === c ? !1 : c);
            };
            var Lc = function () {
                return _.O(or);
            };
            var T = function (a) {
                    return function (b) {
                        for (var c = [], d = 0; d < arguments.length; ++d)
                            c[d] = arguments[d];
                        return new fr(a, [].concat(_.nc(c)));
                    };
                }, rr = function (a) {
                    return '[' + a.map(function (b) {
                        return 'string' === typeof b ? '\'' + b + '\'' : Array.isArray(b) ? rr(b) : String(b);
                    }).join(', ') + ']';
                }, Hh = function (a, b) {
                    b = rr(b);
                    b = b.substring(1, b.length - 1);
                    return new fr(96, [
                        a,
                        b
                    ]);
                }, sr = T(2), tr = T(3), ur = T(4), vr = T(5), wr = T(6), xr = T(12), yr = T(14), zr = T(16), Ar = T(19), Br = T(20), Cr = T(23), Dr = T(26), Er = T(28), Fr = T(30), Gr = T(31), Hr = T(34), Ir = T(35), Jr = T(36), Kr = T(38), Lr = T(40), Mr = T(46), Nr = T(48), Or = T(50), Pr = T(60), Qr = T(63), Rr = T(64), Sr = T(66), Tr = T(68), Ur = T(69), Vr = T(70), Wr = T(71), Xr = T(78), Yr = T(80), Zr = T(82), $r = T(84), as = T(85), bs = T(87), cs = T(88), ds = T(92), es = T(93), fs = T(99), gs = T(103), hs = T(104), is = T(105), js = T(106), ks = T(107), ls = T(108), ms = T(113), ns = T(114), os = T(115), ps = T(116), qs = T(117), rs = T(118), ss = T(119), sh = T(120), Mc = T(121), Pc = T(122), ts = T(123), us = T(124), ei = T(125);
            var vs = function () {
                Uq.call(this);
                this.o = this.j = 0;
            };
            _.P(vs, Uq);
            vs.prototype.push = function (a) {
                for (var b = Lc(), c = 0; c < arguments.length; ++c)
                    try {
                        'function' === typeof arguments[c] && (arguments[c](), this.j++);
                    } catch (d) {
                        this.o++, window.console && window.console.error && window.console.error('Exception in queued GPT command', d), b.error(Fr(String(d)));
                    }
                b.info(Gr(String(this.j), String(this.o)));
                return this.j;
            };
            var xs = function (a) {
                R.call(this, a, -1, ws);
            };
            _.P(xs, R);
            var ys = function (a) {
                R.call(this, a);
            };
            _.P(ys, R);
            var ws = [4];
            var As = function (a) {
                R.call(this, a, -1, zs);
            };
            _.P(As, R);
            var Bs = function (a) {
                R.call(this, a);
            };
            _.P(Bs, R);
            var zs = [1];
            var Cs = function (a) {
                R.call(this, a);
            };
            _.P(Cs, R);
            var Ds = function (a) {
                R.call(this, a);
            };
            _.P(Ds, R);
            var Es = function (a) {
                R.call(this, a);
            };
            _.P(Es, R);
            var Fs = function (a) {
                    return 'CSS1Compat' == a.compatMode ? a.documentElement : a.body;
                }, Gs = function (a, b) {
                    b = void 0 === b ? _.F : b;
                    a = a.scrollingElement || Fs(a);
                    return new _.ld(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop);
                }, kd = function (a) {
                    try {
                        return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length));
                    } catch (b) {
                        return !1;
                    }
                };
            var Hs = function (a, b, c) {
                a && null !== b && b != b.top && (b = b.top);
                try {
                    return (void 0 === c ? 0 : c) ? new _.Cl(b.innerWidth, b.innerHeight).round() : _.Jl(b || window).round();
                } catch (d) {
                    return new _.Cl(-12245933, -12245933);
                }
            };
            var Is = function (a) {
                for (var b = 0, c = a, d = 0; a && a != a.parent;)
                    a = a.parent, d++, We(a) && (c = a, b = d);
                return {
                    H: c,
                    level: b
                };
            };
            var Js = function (a) {
                    return !!a && a.top == a;
                }, Ks = function (a, b, c, d) {
                    c = c || a.google_ad_width;
                    d = d || a.google_ad_height;
                    if (Js(a))
                        return !1;
                    var e = b.documentElement;
                    if (c && d) {
                        var f = 1, g = 1;
                        a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
                        if (g > 2 * d || f > 2 * c)
                            return !1;
                    }
                    return !0;
                }, Ls = function (a) {
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
                };
            var Ms = function (a, b, c, d, e, f) {
                    try {
                        var g = a.j, h = _.Nl(a.j, 'SCRIPT');
                        h.async = !0;
                        Gd(h, b);
                        g.head.appendChild(h);
                        h.addEventListener('load', function () {
                            e();
                            d && g.head.removeChild(h);
                        });
                        h.addEventListener('error', function () {
                            0 < c ? Ms(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f());
                        });
                    } catch (k) {
                        f();
                    }
                }, Ns = function (a, b, c, d) {
                    c = void 0 === c ? function () {
                    } : c;
                    d = void 0 === d ? function () {
                    } : d;
                    Ms(Fl(a), b, 0, !1, c, d);
                };
            var Os = function (a) {
                var b = a.document, c = Fl(a), d = function () {
                        if (!a.frames.googlefcPresent)
                            if (b.body) {
                                var e = _.Nl(c.j, 'IFRAME');
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
            var Ps = function (a) {
                    void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent && (a.addtlConsent = void 0);
                    void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies && (a.gdprApplies = void 0);
                    return void 0 !== a.tcString && 'string' !== typeof a.tcString || void 0 !== a.listenerId && 'number' !== typeof a.listenerId ? 2 : a.cmpStatus && 'error' !== a.cmpStatus ? 0 : 3;
                }, Qs = function (a, b) {
                    b = void 0 === b ? 500 : b;
                    _.Rq.call(this);
                    this.j = a;
                    this.o = null;
                    this.C = {};
                    this.B = 0;
                    this.A = b;
                    this.l = null;
                };
            _.P(Qs, _.Rq);
            Qs.prototype.G = function () {
                this.C = {};
                this.l && (_.ge(this.j, 'message', this.l), delete this.l);
                delete this.C;
                delete this.j;
                delete this.o;
                _.Rq.prototype.G.call(this);
            };
            var Ss = function (a) {
                return 'function' === typeof a.j.__tcfapi || null != Rs(a);
            };
            Qs.prototype.addEventListener = function (a) {
                var b = {}, c = _.bj(function () {
                        return a(b);
                    }), d = 0;
                -1 !== this.A && (d = setTimeout(function () {
                    b.tcString = 'tcunavailable';
                    b.internalErrorState = 1;
                    c();
                }, this.A));
                var e = function (f, g) {
                    clearTimeout(d);
                    f ? (b = f, b.internalErrorState = Ps(b), g && 0 === b.internalErrorState || (b.tcString = 'tcunavailable', g || (b.internalErrorState = 3))) : (b.tcString = 'tcunavailable', b.internalErrorState = 3);
                    a(b);
                };
                try {
                    Ts(this, 'addEventListener', e);
                } catch (f) {
                    b.tcString = 'tcunavailable', b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c();
                }
            };
            Qs.prototype.removeEventListener = function (a) {
                a && a.listenerId && Ts(this, 'removeEventListener', null, a.listenerId);
            };
            var Vs = function (a, b) {
                    var c = { internalErrorState: 0 }, d = _.bj(function () {
                            return b(c);
                        }), e = 0;
                    -1 !== a.A && (e = setTimeout(function () {
                        c.tcString = 'tcunavailable';
                        c.internalErrorState = 1;
                        d();
                    }, a.A));
                    Ts(a, 'addEventListener', function (f, g) {
                        e && (clearTimeout(e), e = 0);
                        g && (c = f);
                        c.internalErrorState = Ps(c);
                        0 != c.internalErrorState && (c.tcString = 'tcunavailable');
                        if (0 != c.internalErrorState || Us(c))
                            Ts(a, 'removeEventListener', null, c.listenerId), d();
                    });
                }, Ts = function (a, b, c, d) {
                    c || (c = function () {
                    });
                    if ('function' === typeof a.j.__tcfapi)
                        a = a.j.__tcfapi, a(b, 2, c, d);
                    else if (Rs(a)) {
                        Ws(a);
                        var e = ++a.B;
                        a.C[e] = c;
                        a.o && (c = {}, a.o.postMessage((c.__tcfapiCall = {
                            command: b,
                            version: 2,
                            callId: e,
                            parameter: d
                        }, c), '*'));
                    } else
                        c({}, !1);
                }, Rs = function (a) {
                    if (a.o)
                        return a.o;
                    a.o = qm(a.j, '__tcfapiLocator');
                    return a.o;
                }, Ws = function (a) {
                    a.l || (a.l = function (b) {
                        try {
                            var c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                            a.C[c.callId](c.returnValue, c.success);
                        } catch (d) {
                        }
                    }, _.Hd(a.j, 'message', a.l));
                }, Us = function (a) {
                    if (!1 === a.gdprApplies)
                        return !0;
                    void 0 === a.internalErrorState && (a.internalErrorState = Ps(a));
                    return 'error' === a.cmpStatus || 0 !== a.internalErrorState || 'loaded' === a.cmpStatus && ('tcloaded' === a.eventStatus || 'useractioncomplete' === a.eventStatus) ? !0 : !1;
                };
            var Xs = function (a, b, c) {
                    this.j = a;
                    this.o = b;
                    this.m = void 0 === c ? function () {
                    } : c;
                }, Ys = function (a, b, c) {
                    return new Xs(a, b, c);
                };
            Xs.prototype.start = function () {
                try {
                    Os(this.j), Zs(this);
                } catch (a) {
                }
            };
            var Zs = function (a) {
                var b = Nd(kj('https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}'), {
                    id: a.o,
                    ers: 3
                });
                Ns(a.j, b, function () {
                    a.m(!0);
                }, function () {
                    a.m(!1);
                });
            };
            var at = function (a) {
                R.call(this, a, -1, $s);
            };
            _.P(at, R);
            var ct = function (a, b) {
                    Nf(a, 1, b, bt);
                }, bt = function (a) {
                    R.call(this, a);
                };
            _.P(bt, R);
            var dt = function (a) {
                    var b = new bt();
                    return Ib(b, 1, a);
                }, et = function (a, b) {
                    return Cb(a, 2, b, 0);
                }, $s = [1];
            var gt = function (a, b) {
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
                        if (d = ai(at, e), e) {
                            var f = ai(at, e);
                            ct(f, et(dt(1), -1));
                            ql(f);
                        }
                    } catch (h) {
                        ft(e), d = new at();
                    }
                    f = M(d, bt, 1);
                    if (f = ca(f, function (h) {
                            return sf(h, 1, 0) === b;
                        })) {
                        var g = jh(f, 2);
                        if (null === g || isNaN(g))
                            ft(e);
                        else
                            return g;
                    }
                    c = fm(c);
                    if (null === c)
                        return null;
                    f ? et(f, c) : ct(d, et(dt(b), c));
                    return gm(a, ql(d)) ? c : null;
                }, ft = function (a) {
                    0.01 > Math.random() && Wb({ data: a }, 'ls_tamp');
                };
            var Fc = function (a) {
                    this.j = a || { cookie: '' };
                }, it = function () {
                    var a = ht;
                    if (!_.F.navigator.cookieEnabled)
                        return !1;
                    if (!a.isEmpty())
                        return !0;
                    a.set('TESTCOOKIESENABLED', '1', { Qb: 60 });
                    if ('1' !== a.get('TESTCOOKIESENABLED'))
                        return !1;
                    a.get('TESTCOOKIESENABLED');
                    a.set('TESTCOOKIESENABLED', '', {
                        Qb: 0,
                        path: void 0,
                        domain: void 0
                    });
                    return !0;
                };
            Fc.prototype.set = function (a, b, c) {
                var d = !1;
                if ('object' === typeof c) {
                    var e = c.Nf;
                    d = c.oe || !1;
                    var f = c.domain || void 0;
                    var g = c.path || void 0;
                    var h = c.Qb;
                }
                if (/[;=\s]/.test(a))
                    throw Error('Invalid cookie name "' + a + '"');
                if (/[;\r\n]/.test(b))
                    throw Error('Invalid cookie value "' + b + '"');
                void 0 === h && (h = -1);
                this.j.cookie = a + '=' + b + (f ? ';domain=' + f : '') + (g ? ';path=' + g : '') + (0 > h ? '' : 0 == h ? ';expires=' + new Date(1970, 1, 1).toUTCString() : ';expires=' + new Date(Date.now() + 1000 * h).toUTCString()) + (d ? ';secure' : '') + (null != e ? ';samesite=' + e : '');
            };
            Fc.prototype.get = function (a, b) {
                for (var c = a + '=', d = (this.j.cookie || '').split(';'), e = 0, f; e < d.length; e++) {
                    f = yj(d[e]);
                    if (0 == f.lastIndexOf(c, 0))
                        return f.substr(c.length);
                    if (f == a)
                        return '';
                }
                return b;
            };
            Fc.prototype.Kb = function () {
                for (var a = (this.j.cookie || '').split(';'), b = [], c = [], d, e, f = 0; f < a.length; f++)
                    e = yj(a[f]), d = e.indexOf('='), -1 == d ? (b.push(''), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
                return c;
            };
            Fc.prototype.isEmpty = function () {
                return !this.j.cookie;
            };
            var jt = new Fc('undefined' == typeof document ? null : document);
            var kt = function (a) {
                R.call(this, a);
            };
            _.P(kt, R);
            var lt = function () {
                    this.j = window;
                    this.m = 0;
                }, nt = function (a, b) {
                    if (0 === a.m) {
                        if (mt(a, b))
                            b = !0;
                        else {
                            var c = a.j;
                            y(b, 5) && Ec(c) && new Fc(c.document).set('GoogleAdServingTest', 'Good', void 0);
                            if (c = 'Good' === Gc('GoogleAdServingTest', b, a.j)) {
                                var d = a.j;
                                y(b, 5) && Ec(d) && (b = new Fc(d.document), b.get('GoogleAdServingTest'), b.set('GoogleAdServingTest', '', {
                                    Qb: 0,
                                    path: void 0,
                                    domain: void 0
                                }));
                            }
                            b = c;
                        }
                        a.m = b ? 2 : 1;
                    }
                    return 2 === a.m;
                }, mt = function (a, b) {
                    var c;
                    b ? c = b ? Gc('__gads', b, a.j) : null : c = null;
                    return c;
                };
            var ot = {}, pt = (ot[3] = rj(jj(kj('https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js'))), ot), qt = {}, rt = (qt[3] = rj(jj(kj('https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js'))), qt);
            var st = function (a) {
                    this.j = a;
                    this.m = fk();
                }, tt = function (a) {
                    var b = {};
                    _.dj(a, function (c) {
                        b[c.j] = c.m;
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
                    this.m = [];
                    this.o = [];
                }, zt = function (a, b, c) {
                    a.m.push({
                        Bc: void 0 === c ? !1 : c,
                        Fc: b
                    });
                };
            var Ge = function () {
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
                _.u(Object, 'setPrototypeOf').call(Object, this, At.prototype);
                this.name = 'InputError';
            };
            _.P(At, Error);
            var Bt = function () {
                    var a = this;
                    this.X = this.l = null;
                    this.C = -1;
                    this.G = new Ge();
                    this.o = !1;
                    this.G.promise.then(function () {
                        -1 !== a.C && (a.X = _.Hc() - a.C);
                    }, function () {
                    });
                }, Ct = function () {
                    Bt.apply(this, arguments);
                };
            _.P(Ct, Bt);
            Ct.prototype.j = function (a) {
                this.o || (this.o = !0, this.l = a, this.G.resolve(a));
            };
            Ct.prototype.m = function (a) {
                null == a ? Dt(this) : this.j(a);
            };
            var Dt = function (a) {
                    a.o || (a.o = !0, a.l = null, a.G.resolve(null));
                }, Et = function (a, b) {
                    a.o || (a.o = !0, a.l = null, a.J = b, a.G.reject(b));
                };
            li.Object.defineProperties(Ct.prototype, {
                promise: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.G.promise;
                    }
                },
                A: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.o;
                    }
                },
                B: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.X;
                    }
                }
            });
            var Ft = function (a) {
                Bt.call(this);
                this.j = a;
            };
            _.P(Ft, Bt);
            var Gt = function (a) {
                return null !== a.j.l;
            };
            li.Object.defineProperties(Ft.prototype, {
                value: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.j.l;
                    }
                },
                error: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.j.J;
                    }
                }
            });
            var Ht = function () {
                Ft.apply(this, arguments);
            };
            _.P(Ht, Ft);
            li.Object.defineProperties(Ht.prototype, {
                value: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.j.l;
                    }
                }
            });
            var It = function () {
                Ct.apply(this, arguments);
            };
            _.P(It, Ct);
            It.prototype.notify = function () {
                Dt(this);
            };
            var Jt = function (a, b) {
                b = void 0 === b ? 0 : b;
                _.Rq.call(this);
                var c = this;
                this.id = a;
                this.xb = b;
                this.o = new yt();
                this.aa = !1;
                this.U = -1;
                _.Xg(this, function () {
                    var d = c.o;
                    d.j.length = 0;
                    d.o.length = 0;
                    d.m.length = 0;
                });
            };
            _.P(Jt, _.Rq);
            Jt.prototype.start = function () {
                return z(this, function b() {
                    var c = this, d, e, f, g;
                    return A(b, function (h) {
                        switch (h.j) {
                        case 1:
                            if (c.aa)
                                return h.return();
                            c.aa = !0;
                            h.G = 2;
                            return C(h, Ic(c.o.m, c.xb), 4);
                        case 4:
                            c.U = h.m;
                            if (c.m) {
                                h.j = 5;
                                break;
                            }
                            for (var k = 0, l = _.H(c.o.o), m = l.next(); !m.done; m = l.next()) {
                                if (!Gt(m.value))
                                    throw Error('missing input: ' + c.id + '/' + k);
                                ++k;
                            }
                            d = _.H(c.o.j);
                            for (e = d.next(); !e.done; e = d.next())
                                f = e.value, f.C = _.Hc();
                            return C(h, c.j(), 5);
                        case 5:
                            Kd(h, 0);
                            break;
                        case 2:
                            g = Ld(h);
                            if (c.m)
                                return h.return();
                            g instanceof At ? c.V(g) : g instanceof Error && (c.J(g), c.C(g));
                            Bi(h);
                        }
                    });
                });
            };
            var U = function (a) {
                    var b = new Ct();
                    a.o.j.push(b);
                    return b;
                }, Kt = function (a) {
                    var b = new It();
                    a.o.j.push(b);
                    return b;
                }, V = function (a, b) {
                    zt(a.o, b);
                    b = new Ht(b);
                    a.o.o.push(b);
                    return b;
                }, W = function (a, b) {
                    zt(a.o, b);
                    return new Ft(b);
                }, Lt = function (a, b) {
                    zt(a.o, b, !0);
                    return new Ft(b);
                }, Mt = function (a, b) {
                    zt(a.o, b);
                };
            Jt.prototype.V = function () {
            };
            Jt.prototype.C = function (a) {
                if (this.o.j.length) {
                    a = new At(a.message);
                    for (var b = _.H(this.o.j), c = b.next(); !c.done; c = b.next())
                        if (c = c.value, !c.A) {
                            var d = a;
                            c.o = !0;
                            c.J = d;
                            c.G.reject(d);
                        }
                }
            };
            var le = function () {
                _.Rq.apply(this, arguments);
                this.j = [];
            };
            _.P(le, _.Rq);
            var me = function (a, b) {
                    b = _.H(b);
                    for (var c = b.next(); !c.done; c = b.next())
                        c = c.value, _.Sq(a, c), a.j.push(c);
                }, X = function (a, b) {
                    me(a, [b]);
                }, ne = function (a) {
                    if (a.j.length) {
                        a = _.H(a.j);
                        for (var b = a.next(); !b.done; b = a.next())
                            b.value.start();
                    }
                };
            le.prototype.G = function () {
                _.Rq.prototype.G.call(this);
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
            _.zd = function (a) {
                a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Nt()) : a.google_reactive_ads_global_state = new Ot();
                return a.google_reactive_ads_global_state;
            };
            Nt = function () {
                this.maxZIndexRestrictions = {};
                this.nextRestrictionId = 0;
                this.maxZIndexListeners = [];
            };
            var Cd, nd, qd;
            Cd = 728 * 1.38;
            _.Bd = function (a) {
                return a.innerHeight >= a.innerWidth;
            };
            _.Pt = function (a) {
                var b = _.pd(a).clientWidth;
                a = a.innerWidth;
                return b && a ? b / a : 0;
            };
            nd = function (a, b) {
                return (a = _.pd(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384;
            };
            qd = function (a) {
                return (a = _.Pt(a)) ? 1.05 < a ? 262144 : 0.95 > a ? 524288 : 0 : 131072;
            };
            _.pd = function (a) {
                a = a.document;
                var b = {};
                a && (b = 'CSS1Compat' == a.compatMode ? a.documentElement : a.body);
                return b || {};
            };
            _.Qt = function (a) {
                return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset;
            };
            var St, Rt;
            _.sd = function (a) {
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
                return _.De(a, function (c) {
                    return 3600000 > b - c;
                });
            };
            _.rd = function (a) {
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
                    return !Array.isArray(c) || _.fj(c, function (d) {
                        return !_.u(Number, 'isInteger').call(Number, d);
                    }) ? (a.removeItem('__lsv__'), []) : c;
                } catch (d) {
                    return null;
                }
            };
            var Tt = function (a) {
                R.call(this, a);
            };
            _.P(Tt, R);
            var Vt = function (a) {
                R.call(this, a, -1, Ut);
            };
            _.P(Vt, R);
            var Ut = [
                1,
                2
            ];
            var Wt = function (a) {
                R.call(this, a);
            };
            _.P(Wt, R);
            var Xt = function (a) {
                R.call(this, a);
            };
            _.P(Xt, R);
            var Yt = function (a) {
                _.Rq.call(this);
                this.j = a;
                this.l = this.o = null;
                this.C = {};
                this.B = 0;
                this.A = !1;
            };
            _.P(Yt, _.Rq);
            var Zt = function (a) {
                    a.A || (a.o || (a.j.googlefc ? a.o = a.j : a.o = qm(a.j, 'googlefcPresent')), a.A = !0);
                    return !!a.o;
                }, au = function (a, b, c) {
                    if (Zt(a))
                        if (a.o === a.j)
                            a = a.j.googlefc || (a.j.googlefc = {}), a.__fci = a.__fci || [], a.__fci.push(b, function (f) {
                                c(ai(Xt, f));
                            });
                        else {
                            $t(a);
                            var d = a.B++;
                            a.C[d] = c;
                            var e = {};
                            a.o.postMessage((e.__fciCall = {
                                command: b,
                                callId: d
                            }, e), '*');
                        }
                }, bu = function (a, b) {
                    return new D.Promise(function (c) {
                        au(a, b, c);
                    });
                }, $t = function (a) {
                    a.l || (a.l = function (b) {
                        try {
                            var c = ai(Xt, b.data.__fciReturn);
                            (0, a.C[J(c, 1)])(c);
                        } catch (d) {
                        }
                    }, _.Hd(a.j, 'message', a.l));
                }, cu = function (a, b, c, d) {
                    if (!b)
                        return D.Promise.resolve(null);
                    var e = N(b, Tt, 3);
                    b = N(b, Wt, 2);
                    return e && b && 1 === J(b, 1) && 2 === J(e, 1) ? bu(a, 'getM25Consent').then(function (f) {
                        var g = N(f, Vt, 4);
                        if (g) {
                            if (f = d, c) {
                                var h = J(g, 1);
                                h && _.u(h, 'includes').call(h, c) && (f = !1);
                                (g = J(g, 2)) && _.u(g, 'includes').call(g, c) && (f = !0);
                            }
                        } else
                            f = null;
                        return f;
                    }) : D.Promise.resolve(null);
                };
            var du = function () {
                this.j = [];
                this.m = -1;
            };
            du.prototype.set = function (a, b) {
                b = void 0 === b ? !0 : b;
                0 <= a && 52 > a && 0 === a % 1 && this.j[a] != b && (this.j[a] = b, this.m = -1);
            };
            du.prototype.get = function (a) {
                return !!this.j[a];
            };
            var eu = function (a) {
                -1 == a.m && (a.m = ej(a.j, function (b, c, d) {
                    return c ? b + Math.pow(2, d) : b;
                }));
                return a.m;
            };
            var fu = function () {
                }, ku, ou, pu, eg, ju, iu, hu, qu;
            fu.L = function () {
                throw Error('Must be overridden');
            };
            var gu = function () {
                this.X = _.v(qo) ? Bb(_.F) : 0;
                this.m = this.hb = null;
                this.j = new D.Map();
            };
            _.P(gu, fu);
            ku = function (a, b) {
                a.j.get(b) || (a.j.set(b, {
                    La: !0,
                    ub: '',
                    Ia: '',
                    Tc: 0,
                    Jc: 0,
                    lc: [],
                    mc: [],
                    isBackfill: !1,
                    Qa: !1
                }), _.Xg(b, function () {
                    a.j.delete(b);
                    hu(a, b);
                }), Wq(b, Zq, function (c) {
                    c = c.detail;
                    var d = (0, I.M)(a.j.get(b));
                    d.ub = J(c, 33) || '';
                    d.Qa = !0;
                    d.isBackfill = !!y(c, 9);
                    iu(a, b, function () {
                        d.ub = '';
                    });
                    ju(a, b, function () {
                        d.isBackfill = !1;
                        d.Qa = !1;
                    });
                }));
            };
            _.lu = function (a, b) {
                var c, d;
                return null !== (d = null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.La) && void 0 !== d ? d : !1;
            };
            _.mu = function (a, b) {
                a.j.get(b) && (a.j.get(b).La = !1);
            };
            _.nu = function (a, b) {
                a.j.get(b) && (a.j.get(b).La = !0);
            };
            ou = function (a, b) {
                if (!b.length)
                    return [];
                var c = Lb(b[0].getAdUnitPath());
                b.every(function (g) {
                    return Lb(g.getAdUnitPath()) === c;
                });
                if (_.v(so)) {
                    var d = [];
                    a = _.H(a.j);
                    for (var e = a.next(); !e.done; e = a.next()) {
                        var f = _.H(e.value);
                        e = f.next().value;
                        (f = f.next().value.ub) && Lb(e.getAdUnitPath()) === c && !_.u(b, 'includes').call(b, e) && d.push(f);
                    }
                    return d;
                }
                return [].concat(_.nc(_.u(a.j, 'entries').call(a.j))).filter(function (g) {
                    g = _.H(g);
                    var h = g.next().value;
                    return !!g.next().value.ub && Lb(h.getAdUnitPath()) === c && !_.u(b, 'includes').call(b, h);
                }).map(function (g) {
                    g = _.H(g);
                    g.next();
                    return g.next().value.ub;
                });
            };
            pu = function (a, b) {
                var c, d;
                return null !== (d = null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.Ia) && void 0 !== d ? d : '';
            };
            eg = function (a, b) {
                return (a = a.j.get(b)) && a.Tc - 1 || 0;
            };
            ju = function (a, b, c) {
                (a = a.j.get(b)) && a.lc.push(c);
            };
            iu = function (a, b, c) {
                (a = a.j.get(b)) && a.mc.push(c);
            };
            hu = function (a, b) {
                if (a = a.j.get(b))
                    for (b = a.mc.slice(), a.mc.length = 0, a = _.H(b), b = a.next(); !b.done; b = a.next())
                        b = b.value, b();
            };
            qu = function (a, b) {
                if (a = a.j.get(b))
                    for (b = a.lc.slice(), a.lc.length = 0, a = _.H(b), b = a.next(); !b.done; b = a.next())
                        b = b.value, b();
            };
            gu.prototype.isBackfill = function (a) {
                var b, c;
                return null !== (c = null === (b = this.j.get(a)) || void 0 === b ? void 0 : b.isBackfill) && void 0 !== c ? c : !1;
            };
            gu.prototype.Qa = function (a) {
                var b, c;
                return null !== (c = null === (b = this.j.get(a)) || void 0 === b ? void 0 : b.Qa) && void 0 !== c ? c : !1;
            };
            Pi(gu);
            var ru = function () {
                var a = {};
                return a.adsense_channel_ids = 'channel', a.adsense_ad_types = 'ad_type', a.adsense_ad_format = 'format', a.adsense_background_color = 'color_bg', a.adsense_border_color = 'color_border', a.adsense_link_color = 'color_link', a.adsense_text_color = 'color_text', a.adsense_url_color = 'color_url', a.page_url = 'url', a.adsense_allow_expandable_ads = 'ea', a.adsense_encoding = 'oe', a.adsense_family_safe = 'adsafe', a.adsense_flash_version = 'flash', a.adsense_font_face = 'f', a.adsense_hints = 'hints', a.adsense_keyword_type = 'kw_type', a.adsense_keywords = 'kw', a.adsense_test_mode = 'adtest', a.alternate_ad_iframe_color = 'alt_color', a.alternate_ad_url = 'alternate_ad_url', a.demographic_age = 'cust_age', a.demographic_gender = 'cust_gender', a.document_language = 'hl', a;
            };
            var su = new D.Map(), tu = new D.Map(), uu = function () {
                }, ad = function (a, b) {
                    var c = tu.get(a);
                    c || (b = c = b(), su.set(b, a), tu.set(a, b));
                    return c;
                }, vu = function (a) {
                    return (a = Kq[a]) ? rh()[a]() : null;
                };
            var Jf = function (a) {
                R.call(this, a, -1, wu);
            };
            _.P(Jf, R);
            var Kf = function (a) {
                    return J(a, 1);
                }, xu = function (a, b) {
                    return E(a, 1, b);
                }, yu = function (a, b) {
                    return Eb(a, 2, b);
                }, wu = [2];
            var Wc = function (a) {
                R.call(this, a);
            };
            _.P(Wc, R);
            var Vc = function (a, b) {
                    return E(a, 1, b);
                }, Uc = function (a, b) {
                    return E(a, 2, b);
                }, zu = function () {
                    var a = new Wc();
                    return E(a, 3, !0);
                };
            var Kc = function (a) {
                R.call(this, a, -1, Au, Rc);
            };
            _.P(Kc, R);
            var Qc = function (a, b) {
                    return E(a, 1, b);
                }, Tc = function (a, b) {
                    Gb(a, 5, b);
                }, Oc = function (a, b) {
                    return E(a, 10, b);
                }, nf = function (a, b) {
                    E(a, 13, b);
                }, Xc = function (a, b) {
                    return E(a, 15, b);
                }, Au = [6], Rc = [
                    [
                        2,
                        3
                    ],
                    [
                        7,
                        12
                    ]
                ];
            var gf = function (a) {
                R.call(this, a);
            };
            _.P(gf, R);
            var jf = function (a, b) {
                    return E(a, 1, b);
                }, hf = function (a, b) {
                    return Gb(a, 2, b);
                };
            var lg = function (a) {
                R.call(this, a);
            };
            _.P(lg, R);
            var Du = function (a) {
                R.call(this, a, -1, Cu);
            };
            _.P(Du, R);
            var Cu = [2];
            var Eu = function (a) {
                R.call(this, a);
            };
            _.P(Eu, R);
            var Gu = function (a) {
                R.call(this, a, -1, Fu);
            };
            _.P(Gu, R);
            Gu.prototype.getAdUnitPath = function () {
                return J(this, 1);
            };
            var Hu = function (a, b) {
                    E(a, 2, b);
                }, Iu = function (a, b) {
                    E(a, 24, b);
                };
            Gu.prototype.Aa = function () {
                return N(this, Eu, 13);
            };
            var ud = function (a) {
                    return sf(a, 15, 0);
                }, kf = function (a, b) {
                    return Nf(a, 21, b, gf);
                }, Fu = [
                    3,
                    4,
                    5,
                    6,
                    8,
                    9,
                    21
                ];
            var Ju = function (a, b, c, d, e) {
                    if ('string' !== typeof c || xj(c))
                        e.I(Hh('Slot.setTargeting', [
                            c,
                            d
                        ]), a);
                    else {
                        var f = [];
                        Array.isArray(d) ? f = d : qa(d) ? f = _.v(fp) ? Array.prototype.slice.call(d) : _.u(Array, 'from').call(Array, d) : d && (f = [d]);
                        f = f.map(String);
                        (d = (L = M(b, Jf, 9), _.u(L, 'find')).call(L, function (g) {
                            return Kf(g) === c;
                        })) ? yu(d, f) : (d = yu(xu(new Jf(), c), f), Nf(b, 9, d, Jf));
                        e.info(cs(c, f.join(), b.getAdUnitPath()), a);
                    }
                }, Ku = function (a, b, c, d) {
                    if (null == c || 'object' !== typeof c)
                        d.error(Hh('Slot.updateTargetingFromMap', [c]), a);
                    else
                        for (var e = _.H(_.u(Object, 'keys').call(Object, c)), f = e.next(); !f.done; f = e.next())
                            f = f.value, Ju(a, b, f, c[f], d);
                };
            var Lu = function (a) {
                this.getId = x(593, function () {
                    return a.A;
                });
                this.getAdUnitPath = x(594, function () {
                    return a.getAdUnitPath();
                });
                this.getName = x(595, function () {
                    return a.getName();
                });
                this.toString = x(596, function () {
                    return a.toString();
                });
                this.getDomId = x(597, function () {
                    return a.j;
                });
            };
            var Mu = function (a) {
                    return Array.isArray(a) && 2 == a.length ? Nm(a[0]) && Nm(a[1]) : 'string' === typeof a && 'fluid' == a;
                }, Nu = function (a) {
                    return Array.isArray(a) && 2 == a.length && Nm(a[0]) && Nm(a[1]);
                }, Ou = function (a) {
                    return Array.isArray(a) ? Uc(Vc(new Wc(), a[0]), a[1]) : zu();
                }, Pu = function (a) {
                    var b = [];
                    if (Sc(a))
                        b.push(Ou(a));
                    else if (Array.isArray(a))
                        for (var c = 0; c < a.length; ++c) {
                            var d = a[c];
                            Sc(d) && b.push(Ou(d));
                            sa(d, ['fluid']) && b.push(zu());
                        }
                    return b;
                }, Qu = function (a) {
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
                    return Uc(Vc(new Wc(), b), a);
                }, Ru = function (a) {
                    var b = null, c = null;
                    var d = a && (Array.isArray(a.fixed) || 'fluid' === a.fixed);
                    var e = a && Array.isArray(a.max);
                    if (a && !Array.isArray(a) && (d || e)) {
                        if (d = Pu(a.fixed), c = Qu(a.max))
                            a.min ? ((b = Qu(a.min)) && null === J(b, 1) && Vc(b, 0), b && null === J(b, 2) && Uc(b, 0)) : b = Uc(Vc(new Wc(), 0), 0);
                    } else
                        d = Pu(a);
                    if (a && !Array.isArray(a)) {
                        if (a.max && !c)
                            throw Error('Invalid GPT maximum size: ' + JSON.stringify(a));
                        if (a.min && !b)
                            throw Error('Invalid GPT maximum size: ' + JSON.stringify(a));
                    }
                    if (c) {
                        if (0 === J(c, 1) || 0 === J(c, 2))
                            throw Error('Invalid GPT size, maximums cannot be zero: ' + JSON.stringify(a));
                        if (b) {
                            e = J(b, 1);
                            var f = J(c, 1);
                            if (null != e && null != f && e > f)
                                throw Error('Invalid GPT size: minimum width larger than maximum width: ' + JSON.stringify(a));
                            e = J(b, 2);
                            f = J(c, 2);
                            if (null != e && null != f && e > f)
                                throw Error('Invalid GPT size: minimum height larger than maximum height: ' + JSON.stringify(a));
                        }
                    }
                    d.length || c || Em('Invalid GPT fixed size specification: ' + JSON.stringify(a));
                    c && b ? (a = new lg(), c = Gb(a, 1, c), b = Gb(c, 2, b)) : b = null;
                    return {
                        Dd: d,
                        Ka: b
                    };
                }, Sc = function (a) {
                    return Array.isArray(a) && 1 < a.length ? 'number' === typeof a[0] && 'number' === typeof a[1] : 'string' === typeof a && 'fluid' == a;
                };
            var Zc = new D.Map();
            var Su = function (a) {
                R.call(this, a);
            };
            _.P(Su, R);
            var bg = function (a) {
                R.call(this, a);
            };
            _.P(bg, R);
            var Uu = function (a) {
                R.call(this, a, -1, Tu);
            };
            _.P(Uu, R);
            var Vu = function (a, b) {
                E(a, 30, b);
            };
            Uu.prototype.Aa = function () {
                return N(this, Eu, 18);
            };
            var ag = function (a) {
                    return N(a, bg, 25);
                }, Tu = [
                    2,
                    3,
                    14
                ];
            var Wu = function () {
            };
            Wu.L = function () {
                throw Error('Must be overridden');
            };
            var Xu = function () {
                this.j = new D.Map();
            };
            _.P(Xu, Wu);
            Pi(Xu);
            var Yu = function () {
            };
            Yu.L = function () {
                throw Error('Must be overridden');
            };
            var Th = function () {
                this.ga = {};
                this.j = new Uu();
                this.m = new D.Map();
                E(this.j, 26, Mm());
                (_.v(Io) && 2 === Ad() || _.bc(36)) && E(this.j, 15, !0);
            };
            _.P(Th, Yu);
            var Zu = function (a) {
                    var b = Th.L(), c = J(a, 2);
                    if (c && !b.ga.hasOwnProperty(c)) {
                        var d = Xu.L(), e = ++Nb.L().m;
                        d.j.set(c, e);
                        E(a, 20, e);
                        b.ga[c] = a;
                    }
                }, ef = function () {
                    return Th.L().ga;
                }, $u = function (a, b) {
                    var c;
                    return null !== (c = a.ga[b]) && void 0 !== c ? c : null;
                }, av = function (a, b) {
                    var c;
                    b = _.H(b);
                    for (var d = b.next(); !d.done; d = b.next())
                        null === (c = a.ga[d.value.j]) || void 0 === c ? void 0 : nl(c, 21, []);
                };
            Pi(Th);
            var bv = function () {
                this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
                this.isBackfill = !1;
                this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null;
            };
            var cv = '', dv = null, ev = function () {
                    for (var a = Bq(lp) || '0-0-0', b = a.split('-').map(function (e) {
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
                }, fv = function () {
                    cv || (cv = ev());
                    return cv;
                }, gv = function () {
                    if (null == dv) {
                        for (var a = Bg(kp), b = [], c = 0; c < a.length; c += 2)
                            Ul(a[c], a[c + 1], b);
                        dv = b.join('&');
                    }
                    return dv;
                }, hv = function (a) {
                    var b = Lc(), c = new Eu();
                    if (!a || !_.ja(a))
                        return null;
                    var d = !1;
                    _.ec(a, function (e, f) {
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
                        g && b.error(Mc('setSafeFrameConfig', Nc(a), f, Nc(e)));
                    });
                    return d ? null : c;
                }, iv = function (a) {
                    var b = new Eu();
                    a = _.H(a);
                    for (var c = a.next(); !c.done; c = a.next())
                        if (c = c.value) {
                            if (Ff(c, 1)) {
                                var d = y(c, 1);
                                E(b, 1, d);
                            }
                            Ff(c, 2) && (d = y(c, 2), E(b, 2, d));
                            Ff(c, 3) && (d = y(c, 3), E(b, 3, d));
                            Ff(c, 4) && (c = y(c, 4), E(b, 4, c));
                        }
                    return b;
                };
            var jv = function (a, b) {
                this.m = a;
                this.j = b;
            };
            jv.prototype.getWidth = function () {
                return this.m;
            };
            jv.prototype.getHeight = function () {
                return this.j;
            };
            var kv = function (a, b) {
                    a = _.u(a, 'find').call(a, function (c) {
                        c = (0, I.M)(N(c, Wc, 1));
                        return J(c, 1) <= J(b, 1) && J(c, 2) <= J(b, 2);
                    });
                    return null == a ? null : M(a, Wc, 2);
                }, lv = function (a) {
                    if (!Array.isArray(a) || 2 !== a.length)
                        throw Error('Each mapping entry must be an array of size 2');
                    var b = a[0];
                    if (!Nu(b))
                        throw Error('Size must be an array of two non-negative integers');
                    b = Uc(Vc(new Wc(), b[0]), b[1]);
                    if (Array.isArray(a[1]) && 0 === a[1].length)
                        a = [];
                    else if (a = Pu(a[1]), 0 === a.length)
                        throw Error('At least one slot size must be present');
                    var c = new Du();
                    b = Gb(c, 1, b);
                    return nl(b, 2, a);
                };
            var mv = function (a, b, c) {
                    return 'number' === typeof b && 'number' === typeof c && 0 < M(a, Du, 6).length ? kv(M(a, Du, 6), Uc(Vc(new Wc(), b), c)) : M(a, Wc, 5);
                }, id = function (a) {
                    var b = window, c = null;
                    b.top == b && (b = Hs(!1, b), c = mv(a, b.width, b.height));
                    null == c && (c = mv(a));
                    return c.map(function (d) {
                        return y(d, 3) ? 'fluid' : [
                            J(d, 1),
                            J(d, 2)
                        ];
                    });
                }, nv = function (a) {
                    if (0 == id(a).length && Ff(a, 16))
                        return '1x1';
                    var b = [], c = !1;
                    a = _.H(id(a));
                    for (var d = a.next(); !d.done; d = a.next())
                        d = d.value, Array.isArray(d) ? b.push(d.join('x')) : 'fluid' == d ? c = !0 : b.push(d);
                    c && b.unshift('320x50');
                    return b.join('|');
                }, ov = function (a) {
                    var b = 0, c = 0;
                    a = _.H(id(a));
                    for (var d = a.next(); !d.done; d = a.next())
                        if (d = d.value, Array.isArray(d)) {
                            var e = _.H(d);
                            d = e.next().value;
                            e = e.next().value;
                            (b || Infinity) > d && 1 < d && (b = d);
                            (c || Infinity) > e && 1 < e && (c = e);
                        }
                    return [
                        b,
                        c
                    ];
                }, pv = function (a, b) {
                    b = void 0 === b ? null : b;
                    var c = 0, d = [];
                    a && (d.push(a.getAdUnitPath()), d.push(nv(a)), d.push(J(a, 2)));
                    if (b) {
                        a = [];
                        for (var e = 0; b && 25 > e; b = b.parentNode, ++e)
                            9 === b.nodeType ? a.push('') : a.push(b.id);
                        (b = a.join()) && d.push(b);
                    }
                    0 < d.length && (c = dm(d.join(':')));
                    return c.toString();
                }, qv = function (a) {
                    return 0 !== a && 1 !== a;
                }, rv = function (a, b) {
                    var c;
                    return !(null != (c = y(b, 22)) ? !c : !y(a, 15));
                };
            var bd = function (a) {
                var b = this, c = Lc(), d = $u(Th.L(), a.j), e = '', f = !1;
                Wq(a, $q, function (m) {
                    var n = m.detail;
                    m = n.Ec;
                    n = n.isBackfill;
                    m && (e = m, f = n);
                });
                this.set = x(40, function (m, n) {
                    if ('string' !== typeof m || 'string' !== typeof n || void 0 === ru()[m])
                        return c.I(Hh('Slot.set', [
                            m,
                            n
                        ]), a), b;
                    var p = (L = M(d, Jf, 3), _.u(L, 'find')).call(L, function (t) {
                        return Kf(t) === m;
                    });
                    p ? yu(p, [n]) : (p = xu(new Jf(), m), Lf(p, 2, n), Nf(d, 3, p, Jf));
                    return b;
                });
                this.get = x(41, function (m) {
                    if ('string' !== typeof m)
                        return c.I(Hh('Slot.get', [m]), a), null;
                    var n = (L = M(d, Jf, 3), _.u(L, 'find')).call(L, function (p) {
                        return Kf(p) === m;
                    });
                    return (n = n && J(n, 2)) ? n[0] : null;
                });
                this.getAttributeKeys = x(42, function () {
                    return M(d, Jf, 3).map(function (m) {
                        return Kf(m);
                    });
                });
                this.addService = x(43, function (m) {
                    m = su.get(m);
                    if (!m)
                        return c.I(Hh('Slot.addService', [m]), a), b;
                    if ((L = J(d, 4), _.u(L, 'includes')).call(L, m.getName()))
                        return c.info(xr(m.getName(), a.toString()), a), b;
                    m.Fa(a, d);
                    return b;
                });
                this.defineSizeMapping = x(44, function (m) {
                    try {
                        if (!Array.isArray(m))
                            throw Error('Size mapping must be an array');
                        var n = m.map(lv);
                        nl(d, 6, n);
                    } catch (p) {
                        Zb(44, p), Em('Incorrect usage of googletag.Slot defineSizeMapping: ' + p.message);
                    }
                    return b;
                });
                this.setClickUrl = x(45, function (m) {
                    if ('string' !== typeof m)
                        return c.I(Hh('Slot.setClickUrl', [m]), a), b;
                    E(d, 7, m);
                    return b;
                });
                this.setCategoryExclusion = x(46, function (m) {
                    'string' !== typeof m || xj(m) ? c.I(Hh('Slot.setCategoryExclusion', [m]), a) : ((L = J(d, 8), _.u(L, 'includes')).call(L, m) || Lf(d, 8, m), c.info(yr(m), a));
                    return b;
                });
                this.clearCategoryExclusions = x(47, function () {
                    E(d, 8, Ja([]));
                    c.info(zr(), a);
                    return b;
                });
                this.getCategoryExclusions = x(48, function () {
                    return J(d, 8).slice();
                });
                this.setTargeting = x(49, function (m, n) {
                    Ju(a, d, m, n, c);
                    return b;
                });
                this.updateTargetingFromMap = x(649, function (m) {
                    Ku(a, d, m, c);
                    return b;
                });
                this.clearTargeting = x(50, function (m) {
                    if (void 0 === m)
                        return nl(d, 9, []), c.info(Ar(a.getAdUnitPath()), a), b;
                    var n = M(d, Jf, 9), p = _.u(n, 'findIndex').call(n, function (t) {
                            return Kf(t) === m;
                        });
                    if (0 > p)
                        return c.I($r(m, a.getAdUnitPath()), a), b;
                    n.splice(p, 1);
                    nl(d, 9, n);
                    c.info(gs(m, a.getAdUnitPath()), a);
                    return b;
                });
                this.getTargeting = x(51, function (m) {
                    if ('string' !== typeof m)
                        return c.I(Hh('Slot.getTargeting', [m]), a), [];
                    var n = (L = M(d, Jf, 9), _.u(L, 'find')).call(L, function (p) {
                        return Kf(p) === m;
                    });
                    return n ? J(n, 2).slice() : [];
                });
                this.getTargetingKeys = x(52, function () {
                    return M(d, Jf, 9).map(function (m) {
                        return Kf(m);
                    });
                });
                this.setCollapseEmptyDiv = x(53, function (m, n) {
                    n = void 0 === n ? !1 : n;
                    if ('object' === typeof m && m && _.v(Po)) {
                        if ('boolean' === typeof m.collapseEmpty) {
                            E(d, 10, m.collapseEmpty);
                            var p;
                            Iu(d, null != (p = y(d, 24)) ? p : !0);
                        }
                        if ('boolean' === typeof m.startCollapsed) {
                            E(d, 11, m.startCollapsed);
                            var t;
                            Iu(d, null != (t = y(d, 24)) ? t : !0);
                        }
                        'boolean' === typeof m.allowCollapseOnScreen && Iu(d, !m.allowCollapseOnScreen);
                        return b;
                    }
                    if ('boolean' !== typeof m || 'boolean' !== typeof n)
                        return c.I(Hh('Slot.setCollapseEmptyDiv', [
                            m,
                            n
                        ]), a), b;
                    E(d, 10, m);
                    E(d, 11, m && n);
                    uc('gpt_ced', function (w) {
                        var B = y(d, 11) ? 't' : 'f';
                        r(w, 'sc', B);
                        r(w, 'level', 'slot');
                        dc(w);
                    });
                    n && !m && c.I(Br(a.toString()), a);
                    return b;
                });
                this.getAdUnitPath = x(54, function () {
                    return a.getAdUnitPath();
                });
                this.getSlotElementId = x(598, function () {
                    return a.j;
                });
                this.setForceSafeFrame = x(55, function (m) {
                    if ('boolean' !== typeof m)
                        return c.I(Hh('Slot.setForceSafeFrame', [String(m)]), a), b;
                    E(d, 12, m);
                    return b;
                });
                this.setSafeFrameConfig = x(56, function (m) {
                    var n = hv(m);
                    if (!n)
                        return c.error(Hh('Slot.setSafeFrameConfig', [m]), a), b;
                    Gb(d, 13, n);
                    return b;
                });
                var g = null;
                Wq(a, Zq, function (m) {
                    m = m.detail;
                    if (y(m, 8))
                        g = null;
                    else {
                        g = new bv();
                        var n = !!y(m, 9);
                        g.isBackfill = n;
                        var p = J(m, 15), t = J(m, 16);
                        p.length && t.length && (g.sourceAgnosticCreativeId = p[0], g.sourceAgnosticLineItemId = t[0], n || (g.creativeId = p[0], g.lineItemId = t[0], (n = J(m, 22)) && n.length && (g.creativeTemplateId = n[0])));
                        J(m, 17).length && (n = J(m, 17)[0], g.advertiserId = n);
                        J(m, 18).length && (n = J(m, 18)[0], g.campaignId = n);
                        J(m, 19).length && (n = J(m, 19), g.yieldGroupIds = n);
                        J(m, 20).length && (n = J(m, 20), g.companyIds = n);
                        m = J(m, 45);
                        m = m.length && 'string' !== typeof m[0] ? _.ye(m, Na) : m;
                        m.length && (g.encryptedTroubleshootingInfo = m[0]);
                    }
                });
                this.getResponseInformation = x(355, function () {
                    return g;
                });
                this.getName = x(170, function () {
                    window.console && console.error && console.error('getName on googletag.Slot is deprecated and will be removed. Use getAdUnitPath instead.');
                    var m = new cc('slot_get_name');
                    dc(m);
                    fc(m);
                    return a.getAdUnitPath();
                });
                var h = new Lu(a);
                this.getSlotId = x(579, function () {
                    return h;
                });
                this.getServices = x(580, function () {
                    return J(d, 4).map(function (m) {
                        return vu(m);
                    });
                });
                this.getSizes = x(581, function (m, n) {
                    return (m = mv(d, m, n)) ? m.map(function (p) {
                        return y(p, 3) ? 'fluid' : new jv(J(p, 1), J(p, 2));
                    }) : null;
                });
                this.getClickUrl = x(582, function () {
                    return Ff(d, 7) ? J(d, 7) : '';
                });
                this.getTargetingMap = x(583, function () {
                    for (var m = {}, n = _.H(M(d, Jf, 9)), p = n.next(); !p.done; p = n.next())
                        p = p.value, m[Kf(p)] = J(p, 2);
                    return m;
                });
                this.getOutOfPage = x(584, function (m) {
                    return 'number' === typeof m ? ud(d) === m : 0 != ud(d);
                });
                this.getCollapseEmptyDiv = x(585, function () {
                    return Ff(d, 10) ? y(d, 10) : null;
                });
                this.getDivStartsCollapsed = x(586, function () {
                    return Ff(d, 11) ? y(d, 11) : null;
                });
                var k = function () {
                    return '';
                };
                Wq(a, ar, function (m) {
                    k = m.detail.rd;
                });
                this.getContentUrl = x(587, function () {
                    return k();
                });
                this.getFirstLook = x(588, function () {
                    Em('The getFirstLook method of googletag.Slot is deprecated. Please update your code to no longer call this method.');
                    return 0;
                });
                var l = '';
                Wq(a, Zq, function (m) {
                    var n;
                    l = null != (n = J(m.detail, 34)) ? n : '';
                });
                this.getEscapedQemQueryId = x(591, function () {
                    return l;
                });
                this.getHtml = x(592, function () {
                    return f ? (window.console && console.warn && console.warn('This ad\'s html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead.'), '') : e;
                });
                _.v(Oo) && (this.setCentering = x(871, function (m) {
                    if ('object' !== typeof m || null == m)
                        return c.I(Hh('Slot.setCentering', [Nc(m)])), b;
                    var n = m.horizontal;
                    m = m.vertical;
                    'boolean' === typeof n && E(d, 22, n);
                    'boolean' === typeof m && E(d, 23, m);
                    return b;
                }));
            };
            _.P(bd, uu);
            $c(bd, 8);
            var Y = function () {
                Jt.apply(this, arguments);
            };
            _.P(Y, Jt);
            Y.prototype.J = function (a) {
                var b, c;
                Zb(this.id, a);
                null === (c = null === (b = window.console) || void 0 === b ? void 0 : b.error) || void 0 === c ? void 0 : c.call(b, a);
            };
            var sv = function (a, b, c, d, e) {
                var f = null, g = sc(b, e);
                _.Hd(c, d, g) && (f = function () {
                    return _.ge(c, d, g);
                }, _.Xg(a, f));
                return f;
            };
            var tv = function (a) {
                Y.call(this, 892, _.gc(bp));
                this.A = U(this);
                this.l = U(this);
                this.B = Lt(this, a);
            };
            _.P(tv, Y);
            tv.prototype.j = function () {
                var a = this.B.value;
                if (!a)
                    throw Error('config timeout');
                this.l.m(N(a, xs, 1));
                this.A.m(N(a, As, 2));
            };
            tv.prototype.V = function (a) {
                this.C(a);
            };
            tv.prototype.C = function (a) {
                Et(this.A, a);
                Et(this.l, a);
            };
            var uv = function (a, b, c) {
                Y.call(this, 906, _.gc($o));
                this.H = a;
                this.l = Kt(this);
                this.B = Lt(this, b);
                this.A = Hg(c, cr).then(function (d) {
                    return Lb((0, I.M)(d.detail.P.getAdUnitPath()));
                });
                this.H !== this.H.top && this.l.notify();
            };
            _.P(uv, Y);
            uv.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d;
                    return A(b, function (e) {
                        if (c.H !== c.H.top)
                            return e.return();
                        d = c.B.value;
                        if (_.v(ap) && d)
                            return C(e, vv(c, d), 0);
                        c.l.notify();
                        e.j = 0;
                    });
                });
            };
            var vv = function (a, b) {
                    return z(a, function d() {
                        var e, f = this, g;
                        return A(d, function (h) {
                            e = M(b, Bs, 1);
                            if (!e.length)
                                return f.l.notify(), h.return();
                            g = e[0];
                            return (L = [
                                2,
                                3
                            ], _.u(L, 'includes')).call(L, sf(g, 3, 0)) ? (wv(f, xf(g, 1)), h.return()) : C(h, xv(f, b), 0);
                        });
                    });
                }, xv = function (a, b) {
                    return z(a, function d() {
                        var e = this, f, g;
                        return A(d, function (h) {
                            if (1 == h.j)
                                return C(h, e.A, 2);
                            f = h.m;
                            (g = M(b, Bs, 1).some(function (k) {
                                return xf(k, 1) === f;
                            })) ? wv(e, f) : (uc('pp_iris_failure', function (k) {
                                r(k, 'fnc', f);
                                dc(k);
                            }, { qa: _.gc(dp) }), e.l.notify());
                            Bi(h);
                        });
                    });
                }, wv = function (a, b) {
                    var c = Ys(a.H, b, function (d) {
                        if (!d) {
                            d = Fl(c.j);
                            for (var e = _.H(document.getElementsByName('googlefcPresent')), f = e.next(); !f.done; f = e.next())
                                d.m(f.value);
                        }
                        a.l.notify();
                    });
                    c.start();
                };
            uv.prototype.V = function (a) {
                this.C(a);
            };
            uv.prototype.C = function () {
                this.l.notify();
            };
            var yv = function (a, b) {
                Y.call(this, 901);
                this.l = W(this, a);
                this.A = Hg(b, cr).then(function (c) {
                    return (0, I.M)(c.detail.P.getAdUnitPath());
                });
            };
            _.P(yv, Y);
            yv.prototype.j = function () {
                var a;
                return z(this, function c() {
                    var d = this, e, f, g, h;
                    return A(c, function (k) {
                        if (1 == k.j)
                            return (e = d.l.value) ? C(k, d.A, 2) : k.return();
                        f = k.m;
                        g = Lb(f);
                        h = null === (a = M(e, ys, 4)) || void 0 === a ? void 0 : a.some(function (l) {
                            return xf(l, 2) === g;
                        });
                        uc('pp_fsm', function (l) {
                            r(l, 'fsnc', g);
                            r(l, 'aup', f);
                            r(l, 'tld', xf(e, 1));
                            r(l, 'pdu', xf(e, 2));
                            r(l, 'idu', xf(e, 3));
                            r(l, 'pnc', xf(e, 5));
                            r(l, 'dm', h);
                            dc(l);
                        }, { qa: _.gc(cp) });
                        Bi(k);
                    });
                });
            };
            var zv = function () {
                Y.call(this, 891);
                this.l = U(this);
            };
            _.P(zv, Y);
            zv.prototype.j = function () {
                return z(this, function b() {
                    var c, d, e = this, f, g, h, k, l;
                    return A(b, function (m) {
                        if (1 == m.j)
                            return C(m, new D.Promise(function (n, p) {
                                _.bc(260)(function (t, w) {
                                    w ? p(w) : n(t);
                                });
                            }), 2);
                        c = m.m;
                        if (_.v(ep)) {
                            try {
                                'string' === typeof c && (d = JSON.parse(c || '[]'));
                            } catch (n) {
                            }
                            if (d && Array.isArray(d))
                                e.l.j(new Cs(d));
                            else
                                throw Error('malformed response');
                        } else
                            f = new Cs(), g = _.bc(172), (null === g || void 0 === g ? 0 : g.hasAttribute('data-load-fc')) && (h = Vg(g.src, 'network-code')) && (k = new As(), l = Nf(k, 1, void 0, Bs), E(l, 1, h), E(l, 3, 3), Gb(f, 2, k)), e.l.j(f);
                        Bi(m);
                    });
                });
            };
            var Av = function () {
                    this.j = null;
                }, Bv = function () {
                    var a = _.O(Av), b = _.O(Kh), c = new le(), d = new zv();
                    X(c, d);
                    d = new tv(d.l);
                    X(c, d);
                    var e = new uv(window, d.A, b);
                    a.j = e.l.promise;
                    X(c, e);
                    X(c, new yv(d.l, b));
                    ne(c);
                };
            var Cv = function () {
                    this.m = [];
                    this.o = [];
                    this.j = {};
                }, Dv = function (a, b) {
                    var c, d;
                    a = null != (d = null == (c = a.j[b]) ? void 0 : _.u(c, 'values').call(c)) ? d : [];
                    return [].concat(_.nc(a));
                };
            var Ev = function (a) {
                    var b;
                    return (null == (b = (L = M(a, Jf, 14), _.u(L, 'find')).call(L, function (c) {
                        return 'page_url' === Kf(c);
                    })) ? void 0 : J(b, 2)[0]) || null;
                }, Fv = function (a) {
                    var b;
                    return (null == (b = (L = M(a, Jf, 3), _.u(L, 'find')).call(L, function (c) {
                        return 'page_url' === Kf(c);
                    })) ? void 0 : J(b, 2)[0]) || null;
                }, Gv = function (a, b) {
                    return Ev(b.O) ? !0 : a.some(function (c) {
                        return null != Fv(b.P[c.j]);
                    });
                }, Ug = function (a) {
                    var b = a.document;
                    return Js(a) ? b.URL : b.referrer;
                }, ed = function (a) {
                    try {
                        var b = qn(a, window.top);
                    } catch (c) {
                        b = new _.ld(-12245933, -12245933);
                    }
                    return b;
                }, Hv = gd(function () {
                    return 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest();
                }), Iv = function (a) {
                    return a ? (a = un(a)) && a.floor() : null;
                }, Jv = function (a, b) {
                    for (var c = {}, d = _.H(_.u(Object, 'keys').call(Object, b)), e = d.next(); !e.done; e = d.next()) {
                        e = e.value;
                        var f = Qa(b[e]), g = Xu.L(), h = g.j.get(e);
                        null == h ? h = ++Nb.L().m : g.j.delete(e);
                        E(f, 20, h);
                        c[e] = f;
                    }
                    a = Qa(a);
                    b = new Date(Date.now());
                    b = b.getUTCFullYear() + ek(b.getUTCMonth() + 1) + ek(b.getUTCDate());
                    return {
                        O: a,
                        P: c,
                        Vb: b
                    };
                }, Lv = gd(function () {
                    for (var a = '', b = _.H(Kv()), c = b.next(); !c.done; c = b.next())
                        c = c.value, 15 >= c && (a += '0'), a += c.toString(16);
                    return a;
                }), Kv = function () {
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
                }, Mv = function (a, b) {
                    return _.v(lo) && (a = mt(a, b)) ? (a = a.split(':'), 3 !== a.length ? Lv() : (a = a[0].split('=')[1]) ? a.slice(0, 8) : Lv()) : Lv();
                }, dd = function (a, b) {
                    return _.v(Uo) ? fd(a, b) : Nv(a, b) || fd(a, b);
                }, Ov = function (a, b, c, d) {
                    var e = fd(a, c), f = 'none' === (null == e ? void 0 : e.style.display);
                    f && (e.style.display = 'block');
                    a = md(c, a, b, d);
                    f && (e.style.display = 'none');
                    return a;
                }, Pv = function (a, b, c) {
                    return !!b && (Ff(b, 1) || !!y(b, 6)) || 4 == ud(a) || 5 === ud(a) || c;
                }, Qv = function (a) {
                    return 'google_ads_iframe_' + a.toString();
                }, Rv = function (a) {
                    return Qv(a) + '__container__';
                }, Nv = function (a, b) {
                    return (b = fd(a, b)) && b.querySelector('[id="' + Rv(a) + '"]') || null;
                }, Sv, Tv, Uv = function (a, b) {
                    return null != (Tv = null == (Sv = Nv(a, b)) ? void 0 : Sv.querySelector('iframe[id="' + Qv(a) + '"]')) ? Tv : null;
                }, Uf = function (a, b) {
                    var c = new du();
                    a.forEach(function (d, e) {
                        c.set(a.length - e - 1, b(d));
                    });
                    return eu(c);
                }, of = function (a, b, c, d, e) {
                    c = void 0 === c ? '' : c;
                    d = void 0 === d ? function (l) {
                        return !!l;
                    } : d;
                    e = void 0 === e ? ',' : e;
                    var f = [], g = !1;
                    a = _.H(a);
                    for (var h = a.next(); !h.done; h = a.next()) {
                        h = b(h.value);
                        var k = d(h);
                        g = g || k;
                        f.push(String(k ? h : c));
                    }
                    return g ? f.join(e) : null;
                }, Vv = function (a) {
                    var b = window, c, d, e;
                    Bc(831, function () {
                        return void (null == (c = b.performance) ? void 0 : null == (e = (d = c).mark) ? void 0 : e.call(d, a));
                    });
                }, fd = function (a, b) {
                    b = void 0 === b ? document : b;
                    return Th.L().m.get(a) || b.getElementById(a.j);
                }, Wv = function (a) {
                    return _.bc(260) ? _.O(Av).j.then(sc(895, function () {
                        return Zt(a);
                    })) : D.Promise.resolve(Zt(a));
                };
            var Xv = function () {
                    var a = this;
                    this.l = function () {
                        return !1;
                    };
                    this.G = '';
                    this.j = this.m = null;
                    this.o = !1;
                    var b, c = Th.L(), d = {};
                    this[jq] = (d[19] = function () {
                        return !!y(c.j, 10);
                    }, d[14] = Hv, d[13] = function (e) {
                        for (var f = [], g = 0; g < arguments.length; ++g)
                            f[g] = arguments[g];
                        return f.some(function (h) {
                            return 0 == a.G.lastIndexOf(h, 0);
                        });
                    }, d[12] = function () {
                        return !!y(c.j, 6);
                    }, d[11] = vt, d[15] = function (e) {
                        return a.l(e);
                    }, d[7] = function () {
                        return !(!_.F.crypto || !_.F.crypto.subtle);
                    }, d[48] = function () {
                        return !!a.m;
                    }, d[51] = function () {
                        return a.o;
                    }, d[53] = function () {
                        try {
                            return !!document.createElement('link').relList.supports('webbundle');
                        } catch (e) {
                            return !1;
                        }
                    }, d);
                    d = {};
                    this[kq] = (d[8] = function (e) {
                        return null != (b = gt(a.m, e)) ? b : void 0;
                    }, d[10] = function (e) {
                        return a.j ? dm(e + a.j) % 1000 : void 0;
                    }, d);
                    this[lq] = {};
                }, Yv = function (a, b) {
                    b && !a.j && (a.j = _.u(b.split(':'), 'find').call(b.split(':'), function (c) {
                        return 0 === c.indexOf('ID=');
                    }) || null);
                };
            var Zv = _.bj(function () {
                    Em('The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.');
                }), Qh = function () {
                    this.m = new D.Map();
                    this.j = new D.Set();
                    _.O(Xv).l = Fd;
                };
            Qh.prototype.add = function (a, b, c) {
                var d = this, e = void 0 === c ? {} : c;
                c = void 0 === e.fb ? void 0 : e.fb;
                var f = void 0 === e.format ? 0 : e.format;
                e = void 0 === e.Oc ? !1 : e.Oc;
                var g = Dd(f);
                if (g)
                    return uc('gpt_pla_ns', function (k) {
                        r(k, 'iu', a);
                        r(k, 'f', null != f ? f : '');
                        r(k, 'nsr', g);
                        dc(k);
                    }), {};
                e && Zv();
                e = this.m.get(a) || Number(e);
                b = $v(a, e, b, c || 'gpt_unit_' + a + '_' + e);
                if (!b)
                    return {};
                c = b.ga;
                var h = b.slotId;
                this.m.set(a, e + 1);
                this.j.add(h);
                _.Xg(h, function () {
                    return void d.j.delete(h);
                });
                Oq(a);
                return {
                    slotId: h,
                    Ma: c
                };
            };
            var Ed = function () {
                    var a = _.O(Qh);
                    return [].concat(_.nc(a.j));
                }, aw = function (a) {
                    var b;
                    return Dv(_.O(Cv), a).map(function (c) {
                        return null == (b = Uv(c, document)) ? void 0 : b.contentWindow;
                    }).filter(function (c) {
                        return !!c;
                    });
                }, bw = function (a, b) {
                    a = _.H(b);
                    for (b = a.next(); !b.done; b = a.next())
                        Cc(b.value);
                }, cw = function (a, b) {
                    a = _.H(a.j);
                    for (var c = a.next(); !c.done; c = a.next())
                        if (c = c.value, c.j === b)
                            return c;
                    return null;
                }, Gh = function (a, b, c, d) {
                    d = void 0 === d ? !1 : d;
                    return 'string' === typeof a && 0 < a.length && b && (void 0 === c || 'string' === typeof c) ? _.O(Qh).add(a, b, {
                        fb: c,
                        Oc: d
                    }) : {};
                }, dw = function (a, b, c) {
                    var d = Gh(a, b, c).slotId;
                    if (!d)
                        return Lc().error(Hh('googletag.defineSlot', [
                            a,
                            b,
                            c
                        ]), void 0, _.v(Kn)), null;
                    var e;
                    return null != (e = null == d ? void 0 : d.o) ? e : null;
                }, $v = function (a, b, c, d) {
                    var e = cw(_.O(Qh), d);
                    if (e)
                        return Lc().error(Er(d, a, e.getAdUnitPath())), null;
                    var f = new Gu();
                    Hu(E(f, 1, a), d);
                    c = Ru(c);
                    e = c.Ka;
                    nl(f, 5, c.Dd);
                    null !== e && Gb(f, 16, e);
                    Zu(f);
                    var g = new ir(a, b, d);
                    jr(g, cd(g));
                    _.Xg(g, function () {
                        var h = Th.L();
                        delete h.ga[g.j];
                        h.m.delete(g);
                        h = g.getAdUnitPath();
                        var k;
                        h = Lb(h);
                        var l = (null !== (k = oc.get(h)) && void 0 !== k ? k : 0) - 1;
                        0 >= l ? oc.delete(h) : oc.set(h, l);
                        Lc().info(fs(g.toString()), g);
                    });
                    Lc().info(sr(g.toString()), g);
                    Wq(g, ar, function (h) {
                        h = h.detail.ke;
                        Lc().info(tr(g.getAdUnitPath()), g);
                        Mb(Nb.L(), '7', 9, eg(gu.L(), g), 0, h);
                    });
                    Wq(g, Zq, function (h) {
                        var k = h.detail;
                        Lc().info(ur(g.getAdUnitPath()), g);
                        var l;
                        h = Nb.L();
                        var m = J(f, 20);
                        k = null != (l = J(k, 34)) ? l : '';
                        h.j && (_.F.google_timing_params = _.F.google_timing_params || {}, _.F.google_timing_params['qqid.' + m] = k);
                    });
                    Wq(g, $q, function () {
                        return void Lc().info(vr(g.getAdUnitPath()), g);
                    });
                    Wq(g, br, function () {
                        return void Lc().info(wr(g.getAdUnitPath()), g);
                    });
                    return {
                        ga: f,
                        slotId: g
                    };
                };
            dw = sc(74, dw);
            var ew = function (a, b) {
                    this.slot = a.o;
                    this.serviceName = b;
                }, fw = function (a, b) {
                    ew.call(this, a, b);
                    this.isEmpty = !1;
                    this.slotContentChanged = !0;
                    this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
                    this.isBackfill = !1;
                    this.companyIds = this.yieldGroupIds = null;
                };
            _.P(fw, ew);
            var gw = function () {
                ew.apply(this, arguments);
            };
            _.P(gw, ew);
            var hw = function (a, b, c) {
                ew.call(this, a, b);
                this.inViewPercentage = c;
            };
            _.P(hw, ew);
            var iw = function () {
                ew.apply(this, arguments);
            };
            _.P(iw, ew);
            var jw = function () {
                ew.apply(this, arguments);
            };
            _.P(jw, ew);
            var kw = function (a, b, c, d) {
                ew.call(this, a, b);
                this.makeRewardedVisible = c;
                this.payload = d;
            };
            _.P(kw, ew);
            var lw = function (a, b, c) {
                ew.call(this, a, b);
                this.payload = c;
            };
            _.P(lw, ew);
            var mw = function () {
                ew.apply(this, arguments);
            };
            _.P(mw, ew);
            var nw = function () {
                ew.apply(this, arguments);
            };
            _.P(nw, ew);
            var ow = function () {
                ew.apply(this, arguments);
            };
            _.P(ow, ew);
            var pw = function () {
                ew.apply(this, arguments);
            };
            _.P(pw, ew);
            var qw = function () {
                ew.apply(this, arguments);
            };
            _.P(qw, ew);
            var rw = new D.Set(), sw = function () {
                    Uq.call(this);
                    rw.add(this);
                    this.j = [];
                    this.o = !1;
                    this.J = 0;
                    this.C = new D.Map();
                    this.log = Lc();
                    this.log.info(Ir(this.getName()));
                    this.F = [];
                };
            _.P(sw, Uq);
            var tw = function (a) {
                    if (!a.o) {
                        a.o = !0;
                        _.O(yq).j(6);
                        a.ic();
                        for (var b = _.H(a.F), c = b.next(); !c.done; c = b.next()) {
                            c = c.value;
                            try {
                                c();
                            } catch (d) {
                            }
                        }
                        a.F.length = 0;
                    }
                }, uw = function (a, b) {
                    if (a.o)
                        try {
                            b();
                        } catch (c) {
                        }
                    else
                        a.F.push(b);
                };
            sw.prototype.Fa = function (a, b) {
                this.j.push(a);
                var c = new jw(a, this.getName());
                this.dispatchEvent('slotAdded', 818, c);
                this.log.info(Lr(this.getName(), a.getAdUnitPath()), a);
                a = this.getName();
                Lf(b, 4, a);
            };
            sw.prototype.destroySlots = function (a) {
                var b = this;
                return a.filter(function (c) {
                    return fa(b.j, c);
                });
            };
            sw.prototype.addEventListener = function (a, b) {
                var c = this;
                if (this.J >= _.gc(eo) && 0 < _.gc(eo))
                    throw Error('Reached Limit for addEventListener');
                var d = function (f) {
                    f = f.detail;
                    try {
                        b(f);
                    } catch (g) {
                        c.log.error(ds(String(g), a)), window.console && console.error && console.error(g);
                    } finally {
                        vw(c, a, f);
                    }
                };
                if (_.v(fo)) {
                    var e;
                    if (null == (e = this.C.get(a)) ? 0 : e.has(b))
                        return;
                    this.C.has(a) || this.C.set(a, new D.Map());
                    this.C.get(a).set(b, d);
                }
                Wq(this, a, d);
                this.J++;
            };
            sw.prototype.removeEventListener = function (a, b) {
                var c;
                Vq(this, a, null == (c = this.C.get(a)) ? void 0 : c.get(b)) && (this.J--, this.C.get(a).delete(b));
            };
            var vw = function (a, b, c) {
                    _.v(In) && uc('gpt_svc_evt', function (d) {
                        dc(d);
                        r(d, 'div', c.slot.getSlotElementId());
                        r(d, 'iu', c.slot.getAdUnitPath());
                        r(d, 'et', b);
                        var e;
                        r(d, 'sn', null != (e = _.dg()) ? e : '');
                        if (e = _.u(a.j, 'find').call(a.j, function (p) {
                                return p.o === c.slot;
                            })) {
                            var f = fd(e, document), g;
                            r(d, 'qqid', null != (g = null == f ? void 0 : f.getAttribute('data-google-query-id')) ? g : '');
                            r(d, 'rc', eg(gu.L(), e));
                            try {
                                var h = $u(Th.L(), e.j), k = Ov(e, h, document, !1);
                                if (k) {
                                    var l = Gs(window.top.document, window.top), m = Hs(!0, window).height;
                                    r(d, 'yo', Math.floor((k.y - l.y) / m));
                                }
                                if (f) {
                                    var n;
                                    r(d, 'amp', !(null == (n = f.querySelector('iframe').contentWindow) || !n.document.querySelector('html[amp4ads]')));
                                }
                            } catch (p) {
                            }
                        }
                        c instanceof hw && r(d, 'ivp', c.inViewPercentage);
                    }, { qa: Number('impressionViewable' === b && c instanceof gw || 'slotVisibilityChanged' === b && c instanceof hw) });
                }, ww = function (a, b) {
                    for (var c = _.H(rw), d = c.next(); !d.done; d = c.next())
                        d.value.destroySlots(a, b);
                };
            var xw = function (a) {
                    var b = null, c = null, d = '';
                    if ('string' === typeof a)
                        d = a, b = cw(_.O(Qh), d);
                    else if (_.ja(a) && 1 == a.nodeType)
                        c = a, d = c.id, b = cw(_.O(Qh), d);
                    else {
                        var e;
                        b = null != (e = (L = Ed(), _.u(L, 'find')).call(L, function (f) {
                            return f.o === a;
                        })) ? e : null;
                    }
                    return {
                        slotId: b,
                        ud: c,
                        vd: d
                    };
                }, yw = sc(95, function (a) {
                    var b = Lc(), c = xw(a), d = c.slotId, e = c.ud;
                    c = c.vd;
                    if (d) {
                        if (a = Th.L().j, c = $u(Th.L(), d.j))
                            if (a = Jv(a, ef()), !y(c, 19))
                                if (e && Th.L().m.set(d, e), fd(d) || qv(ud(c)))
                                    for (E(c, 19, !0), b = _.H(J(c, 4)), e = b.next(); !e.done; e = b.next()) {
                                        c = vu(e.value);
                                        a:
                                            if (e = sw, c instanceof e)
                                                e = c;
                                            else {
                                                if (c instanceof uu && (c = su.get(c), c instanceof e)) {
                                                    e = c;
                                                    break a;
                                                }
                                                e = null;
                                            }
                                        e.o && e.uc(a, d);
                                    }
                                else
                                    b.I(Cr(String(c.getAdUnitPath()), String(J(c, 2))), d);
                    } else
                        c ? b.error(Dr(c)) : b.error(Hh('googletag.display', [String(a)]));
                });
            var Od = kj('https://tpc.googlesyndication.com/sodar/%{basename}.js');
            var Jd = function (a) {
                return new D.Promise(function (b, c) {
                    var d = new XMLHttpRequest();
                    d.onreadystatechange = function () {
                        d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c());
                    };
                    d.open('GET', a, !0);
                    d.send();
                });
            };
            var Qe = function (a) {
                R.call(this, a);
            };
            _.P(Qe, R);
            var Pe = function (a, b) {
                    return Gb(a, 5, b);
                }, Oe = function (a, b) {
                    return Ib(a, 2, b);
                }, Ne = function (a) {
                    var b = Sb();
                    return Cb(a, 3, b, '');
                }, di = function (a) {
                    R.call(this, a);
                };
            _.P(di, R);
            var Re = function () {
                var a = new di(), b = String(Bb(window));
                return Cb(a, 1, b, '');
            };
            var zw = function (a) {
                    this.j = a.j;
                    this.m = a.m;
                    this.o = a.o;
                    this.rb = a.rb;
                    this.H = a.H;
                    this.Ta = a.Ta;
                    this.Nb = a.Nb;
                    this.Wb = a.Wb;
                    this.Mb = a.Mb;
                }, Aw = function (a, b, c) {
                    this.j = a;
                    this.m = b;
                    this.o = c;
                    this.H = window;
                    this.Ta = 'env';
                    this.Nb = 'n';
                    this.Wb = '0';
                    this.Mb = '1';
                }, fi = function (a, b) {
                    var c, d, e = Qd(sf(b, 2, 0)), f = xf(b, 3);
                    a:
                        switch (sf(b, 4, 0)) {
                        case 1:
                            var g = 'pt';
                            break a;
                        case 2:
                            g = 'cr';
                            break a;
                        default:
                            g = '';
                        }
                    e = new Aw(e, f, g);
                    b = null !== (d = null === (c = N(b, di, 5)) || void 0 === c ? void 0 : xf(c, 1)) && void 0 !== d ? d : '';
                    e.rb = b;
                    e.H = a;
                    return new zw(e);
                };
            var wf = function (a) {
                R.call(this, a, -1, Bw);
            };
            _.P(wf, R);
            var zf = function (a, b) {
                    return E(a, 1, b);
                }, Cf = function (a, b) {
                    E(a, 2, b);
                }, Df = function (a, b) {
                    E(a, 4, b);
                }, Dw = function (a, b) {
                    var c = J(a, 1);
                    null != c && Vk(b, 1, c);
                    c = J(a, 2);
                    null != c && Tk(b, 2, c);
                    c = M(a, Ef, 3);
                    0 < c.length && Yk(b, 3, c, Cw);
                    c = J(a, 4);
                    null != c && Uk(b, 4, c);
                }, Ef = function (a) {
                    R.call(this, a, -1, Ew);
                };
            _.P(Ef, R);
            var If = function (a, b) {
                    E(a, 1, b);
                }, Gf = function (a, b) {
                    E(a, 2, b);
                }, Hf = function (a, b) {
                    E(a, 3, b);
                }, Mf = function (a, b) {
                    E(a, 5, b);
                }, Cw = function (a, b) {
                    var c = J(a, 1);
                    null != c && Vk(b, 1, c);
                    c = J(a, 2);
                    null != c && Tk(b, 2, c);
                    c = J(a, 3);
                    null != c && Vk(b, 3, c);
                    c = J(a, 4);
                    if (0 < c.length && null != c)
                        for (var d = 0; d < c.length; d++)
                            Vk(b, 4, c[d]);
                    c = J(a, 5);
                    null != c && Uk(b, 5, c);
                }, Bw = [3], Ew = [4];
            var rf = function (a) {
                R.call(this, a, -1, Fw);
            };
            _.P(rf, R);
            var uf = function (a, b) {
                    return E(a, 1, b);
                }, yf = function (a, b) {
                    return Nf(a, 2, b, wf);
                }, Gw = function (a, b) {
                    var c = J(a, 1);
                    null != c && Uk(b, 1, c);
                    c = M(a, wf, 2);
                    0 < c.length && Yk(b, 2, c, Dw);
                }, Fw = [2];
            var Bf = function (a) {
                R.call(this, a, -1, Hw);
            };
            _.P(Bf, R);
            var tf = function (a, b) {
                    return Nf(a, 1, b, rf);
                }, Pf = function (a, b) {
                    a = M(a, rf, 1);
                    0 < a.length && Yk(b, 1, a, Gw);
                }, Hw = [1];
            var Iw = function (a) {
                R.call(this, a);
            };
            _.P(Iw, R);
            var Kw = function (a) {
                R.call(this, a, -1, Jw);
            };
            _.P(Kw, R);
            var Jw = [13];
            var Mw = function (a) {
                R.call(this, a, -1, Lw);
            };
            _.P(Mw, R);
            var Lw = [13];
            var Ow = function (a) {
                R.call(this, a, -1, Nw);
            };
            _.P(Ow, R);
            var Pw = function (a) {
                R.call(this, a);
            };
            _.P(Pw, R);
            var Rw = function (a, b) {
                    var c = J(a, 1);
                    null != c && null != c && Sk(b, 1, c);
                    c = N(a, Qw, 2);
                    null != c && Xk(b, 2, c);
                    c = N(a, Qw, 3);
                    null != c && Xk(b, 3, c);
                    c = J(a, 4);
                    null != c && Vk(b, 4, c);
                    c = J(a, 5);
                    null != c && Vk(b, 5, c);
                }, Qw = function (a) {
                    R.call(this, a);
                };
            _.P(Qw, R);
            var Wk = function (a, b) {
                    var c = J(a, 1);
                    null != c && null != c && Sk(b, 1, c);
                    c = J(a, 2);
                    null != c && null != c && Sk(b, 2, c);
                    c = J(a, 3);
                    null != c && null != c && Sk(b, 3, c);
                }, Sw = function (a) {
                    R.call(this, a);
                };
            _.P(Sw, R);
            var be = function (a, b) {
                    return E(a, 8, b);
                }, Tw = function (a, b) {
                    var c = J(a, 1);
                    null != c && Vk(b, 1, c);
                    c = J(a, 2);
                    null != c && Vk(b, 2, c);
                    c = J(a, 3);
                    null != c && Tk(b, 3, c);
                    c = J(a, 7);
                    null != c && Tk(b, 7, c);
                    c = J(a, 8);
                    if (null != c) {
                        var d = c;
                        if (null != d) {
                            mk(b.j, 69);
                            c = b.j;
                            var e = d;
                            e = (d = 0 > e ? 1 : 0) ? -e : e;
                            if (0 === e)
                                0 < 1 / e ? Ba = Ca = 0 : (Ca = 0, Ba = 2147483648);
                            else if (isNaN(e))
                                Ca = 0, Ba = 2147483647;
                            else if (3.4028234663852886e+38 < e)
                                Ca = 0, Ba = (d << 31 | 2139095040) >>> 0;
                            else if (1.1754943508222875e-38 > e)
                                e = Math.round(e / Math.pow(2, -149)), Ca = 0, Ba = (d << 31 | e) >>> 0;
                            else {
                                var f = Math.floor(Math.log(e) / Math.LN2);
                                e *= Math.pow(2, -f);
                                e = Math.round(8388608 * e) & 8388607;
                                Ca = 0;
                                Ba = (d << 31 | f + 127 << 23 | e) >>> 0;
                            }
                            d = Ba;
                            c.push(d >>> 0 & 255);
                            c.push(d >>> 8 & 255);
                            c.push(d >>> 16 & 255);
                            c.push(d >>> 24 & 255);
                        }
                    }
                    c = J(a, 4);
                    null != c && null != c && Rk(b, 4, c);
                    c = J(a, 5);
                    null != c && null != c && Rk(b, 5, c);
                    c = J(a, 6);
                    null != c && null != c && Rk(b, 6, c);
                }, Nw = [
                    1,
                    2
                ];
            var Uw = function (a) {
                R.call(this, a);
            };
            _.P(Uw, R);
            var Ww = function (a) {
                R.call(this, a, -1, Vw);
            };
            _.P(Ww, R);
            var Vw = [1];
            var Xw = function (a) {
                R.call(this, a);
            };
            _.P(Xw, R);
            var Yw = function (a) {
                R.call(this, a);
            };
            _.P(Yw, R);
            var Zw = function (a) {
                R.call(this, a);
            };
            _.P(Zw, R);
            var $w = function (a) {
                R.call(this, a);
            };
            _.P($w, R);
            var bx = function (a) {
                R.call(this, a, -1, ax);
            };
            _.P(bx, R);
            var ax = [
                1,
                2
            ];
            var cx = function (a) {
                R.call(this, a);
            };
            _.P(cx, R);
            var Ud = function (a) {
                R.call(this, a);
            };
            _.P(Ud, R);
            var dx = function (a) {
                R.call(this, a);
            };
            _.P(dx, R);
            var fx = function (a) {
                R.call(this, a, -1, ex);
            };
            _.P(fx, R);
            var ex = [
                1,
                2
            ];
            var Vd = function (a) {
                R.call(this, a);
            };
            _.P(Vd, R);
            var hx = function (a) {
                R.call(this, a, -1, gx);
            };
            _.P(hx, R);
            var gx = [
                1,
                2,
                3
            ];
            var jx = function (a) {
                R.call(this, a, -1, ix);
            };
            _.P(jx, R);
            var ix = [1];
            var lx = function (a) {
                R.call(this, a, -1, kx);
            };
            _.P(lx, R);
            var kx = [1];
            var mx = function (a) {
                R.call(this, a);
            };
            _.P(mx, R);
            var ox = function (a) {
                R.call(this, a, -1, nx);
            };
            _.P(ox, R);
            var qx = function (a) {
                R.call(this, a, -1, px);
            };
            _.P(qx, R);
            var rx = function (a) {
                R.call(this, a);
            };
            _.P(rx, R);
            var nx = [1], px = [
                    1,
                    2,
                    3,
                    4
                ];
            var sx = function (a) {
                R.call(this, a);
            };
            _.P(sx, R);
            var tx = function (a) {
                R.call(this, a);
            };
            _.P(tx, R);
            var ux = function (a) {
                R.call(this, a);
            };
            _.P(ux, R);
            var wx = function (a) {
                R.call(this, a, -1, vx);
            };
            _.P(wx, R);
            var vx = [2];
            var xx = function (a) {
                R.call(this, a);
            };
            _.P(xx, R);
            var yx = function (a) {
                R.call(this, a);
            };
            _.P(yx, R);
            var Ax = function (a) {
                R.call(this, a, -1, zx);
            };
            _.P(Ax, R);
            var zx = [
                3,
                7
            ];
            var Dx = function (a) {
                R.call(this, a, -1, Bx, Cx);
            };
            _.P(Dx, R);
            var Ex = function (a) {
                R.call(this, a);
            };
            _.P(Ex, R);
            Ex.prototype.getHtml = function () {
                return J(this, 1);
            };
            var Bx = [
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
                ], Cx = [
                    [
                        4,
                        41
                    ],
                    [
                        39,
                        48
                    ]
                ];
            var Fx = navigator, Gx = function (a) {
                    var b = 1, c;
                    if (void 0 != a && '' != a)
                        for (b = 0, c = a.length - 1; 0 <= c; c--) {
                            var d = a.charCodeAt(c);
                            b = (b << 6 & 268435455) + d + (d << 14);
                            d = b & 266338304;
                            b = 0 != d ? b ^ d >> 21 : b;
                        }
                    return b;
                }, Hx = function (a, b) {
                    if (!a || 'none' == a)
                        return 1;
                    a = String(a);
                    'auto' == a && (a = b, 'www.' == a.substring(0, 4) && (a = a.substring(4, a.length)));
                    return Gx(a.toLowerCase());
                }, Ix = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/, Jx = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/, Kx = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
            var Mx = function (a) {
                R.call(this, a, -1, Lx);
            };
            _.P(Mx, R);
            var Nx = function () {
                    var a = new Mx(), b = _.v(Mp);
                    return rl(a, 7, b);
                }, Ox = function () {
                    var a = Nx(), b = _.v(Ip);
                    return rl(a, 8, b);
                }, Lx = [15];
            var Px = function (a) {
                R.call(this, a);
            };
            _.P(Px, R);
            var Qx = function (a) {
                R.call(this, a);
            };
            _.P(Qx, R);
            rj(jj(kj('https://pagead2.googlesyndication.com/pagead/osd.js')));
            var Rx = function (a, b) {
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
                        !1 !== c && (d = $l([0], a), null == d && ((d = $l([2], b)) || (d = 3)));
                    if (!d)
                        return 0;
                    window.__google_ad_urls_id = d;
                }
                return window.__google_ad_urls_id;
            };
            var Sx = function () {
            };
            _.q = Sx.prototype;
            _.q.getNewBlocks = function () {
            };
            _.q.setupOse = function () {
            };
            _.q.getOseId = function () {
                return -1;
            };
            _.q.getCorrelator = function () {
                return '';
            };
            _.q.numBlocks = function () {
                return 0;
            };
            _.q.registerAdBlock = function () {
            };
            _.q.unloadAdBlock = function () {
            };
            var Tx = function () {
            };
            var Ux = new gq(1, vn()), Vx = function () {
                    var a = vn();
                    a && 'undefined' != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (Ux.j = !1, Ux.events != Ux.o.google_js_reporting_queue && (fq() && _.dj(Ux.events, Ac), Ux.events.length = 0));
                };
            (function () {
                var a = vn();
                a && a.document && ('complete' == a.document.readyState ? Vx() : Ux.j && _.Hd(a, 'load', function () {
                    Vx();
                }));
            }());
            var Xx = function () {
                    var a = Wx, b = vn() || _.F;
                    return b.google_osd_loaded ? !1 : (Yl(b.document, a), b.google_osd_loaded = !0);
                }, Yx = function (a, b, c) {
                    a && (c ? _.Hd(a, 'load', b) : _.ge(a, 'load', b));
                }, Zx = function () {
                    var a = (vn() || _.F).google_osd_amcb;
                    return 'function' === typeof a ? a : null;
                }, $x = rj(jj(kj('https://www.googletagservices.com/activeview/js/current/osd.js')));
            var ay = function (a, b) {
                this.m = b && b.m ? b.m : 0;
                this.o = b ? b.o : '';
                this.j = b && b.j ? b.j : [];
                if (b)
                    for (a = 0; a < this.j.length; ++a)
                        this.j[a].l = !0;
            };
            _.q = ay.prototype;
            _.q.getNewBlocks = function (a, b) {
                for (var c = this.j.length, d = 0; d < c; d++) {
                    var e = this.j[d];
                    !e.o && e.j && (e.o = !0, a(e.j, e.C, e.X, e.m, void 0, e.l, e.A, e.J, e.B));
                }
                b && ((vn() || _.F).google_osd_amcb = a);
            };
            _.q.setupOse = function (a) {
                if (this.getOseId())
                    return this.getOseId();
                var b = Rx(by, cy);
                if (!b)
                    return 0;
                this.m = b;
                this.o = String(a || 0);
                return this.getOseId();
            };
            _.q.getOseId = function () {
                return window && Math.random && navigator ? this.m : -1;
            };
            _.q.getCorrelator = function () {
                return this.o;
            };
            _.q.numBlocks = function () {
                return this.j.length;
            };
            _.q.registerAdBlock = function (a, b, c, d, e, f, g) {
                g = void 0 === g ? function () {
                } : g;
                c = Zx();
                e = _.Hc() || -1;
                f = _.F.pageYOffset;
                0 <= f || (f = -1);
                c && d ? c(d, a, b, !1, void 0, !1, g, e, f) : (g = new dy(a, b, d, g, e, f), this.j.push(g), Yx(d, g.G, !0), Wx || (_.bn(_.F, '//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=' + b + ('&req=' + a)), Wx = $x), Xx() && wn());
            };
            _.q.unloadAdBlock = function (a, b, c) {
                c = void 0 === c ? !1 : c;
                b = vn();
                void 0 !== b.Goog_Osd_UnloadAdBlock && b.Goog_Osd_UnloadAdBlock(a);
                c && (c = Fm(this.j, function (d) {
                    return d.j == a;
                })) && Yx(a, c.G, !1);
            };
            var ey = function () {
                    var a = vn(), b = a.__google_ad_urls;
                    if (!b)
                        return a.__google_ad_urls = new ay(a);
                    try {
                        if (0 <= b.getOseId())
                            return b;
                    } catch (c) {
                    }
                    try {
                        return a.__google_ad_urls = new ay(a, b);
                    } catch (c) {
                        return a.__google_ad_urls = new ay(a);
                    }
                }, Wx = null, cy = 0, by = 0, dy = function (a, b, c, d, e, f) {
                    var g = this;
                    d = void 0 === d ? Oi : d;
                    this.C = a;
                    this.X = b;
                    this.j = c;
                    this.l = this.o = this.m = !1;
                    this.A = d;
                    this.J = void 0 === e ? -1 : e;
                    this.B = void 0 === f ? -1 : f;
                    this.G = function () {
                        return g.m = !0;
                    };
                };
            window.Goog_AdSense_getAdAdapterInstance = ey;
            var fy = ['Goog_AdSense_OsdAdapter'], gy = _.F;
            fy[0] in gy || 'undefined' == typeof gy.execScript || gy.execScript('var ' + fy[0]);
            for (var hy; fy.length && (hy = fy.shift());)
                fy.length || void 0 === ay ? gy[hy] && gy[hy] !== Object.prototype[hy] ? gy = gy[hy] : gy = gy[hy] = {} : gy[hy] = ay;
            var iy = [
                    'auto',
                    'inherit',
                    '100%'
                ], jy = iy.concat(['none']), ky = function (a, b, c, d, e, f) {
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
                                        for (var w = f, B = 0; B < Math.min(n.cssRules.length, w); B++) {
                                            var K = n.cssRules[B], G;
                                            if (G = 1 === K.type || !_.v(Pn))
                                                G = t, G = g.call(p, K.selectorText) && G(K);
                                            if (G) {
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
                }, my = function (a, b, c) {
                    var d = void 0 === d ? 10 : d;
                    var e = void 0 === e ? 10 : e;
                    if (!a)
                        return !0;
                    var f = !0;
                    Rf(a, function (g) {
                        return f = ly(g, b, !1, d, e);
                    }, void 0 === c ? 100 : c);
                    return f;
                }, ly = function (a, b, c, d, e) {
                    var f = a.style;
                    return f && f.height && !(0 <= _.ea(iy, f.height)) || f && f.maxHeight && !(0 <= _.ea(jy, f.maxHeight)) || ky(a, b.document, function (g) {
                        var h = g.style.height;
                        g = g.style['max-height'];
                        return h && !(0 <= _.ea(iy, h)) || g && !(0 <= _.ea(jy, g));
                    }, c, d, e) ? !1 : !0;
                };
            var ny = function (a) {
                var b, c, d;
                this.j = new D.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : N(a, mx, 2)) || void 0 === b ? void 0 : N(b, jx, 3)) || void 0 === c ? void 0 : J(c, 1)) && void 0 !== d ? d : []);
            };
            ny.prototype.getName = function () {
                return 'Consent';
            };
            ny.prototype.Fb = function (a) {
                var b = this;
                return !Ff(a, 7) || J(N(a, lh, 7), 1).every(function (c) {
                    return b.j.has(c);
                });
            };
            var oy = function (a) {
                var b;
                this.vb = 1;
                null == a || null == N(a, ox, 3) ? this.j = [] : (this.j = M((0, I.M)(N(a, ox, 3)), rx, 1), this.vb = null !== (b = ll((0, I.M)(N(a, ox, 3)), 3)) && void 0 !== b ? b : 1);
            };
            oy.prototype.getName = function () {
                return 'Pricing Rules';
            };
            oy.prototype.Fb = function (a) {
                if (0 === this.j.length)
                    return !0;
                for (var b = _.H(this.j), c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    var d = N(c, qx, 1), e = a;
                    if (null === d || (0 === J(d, 3).length || (L = J(d, 3), _.u(L, 'includes')).call(L, sf(e, 4, 0))) && (0 === J(d, 4).length || (L = J(d, 4), _.u(L, 'includes')).call(L, xf(e, 5)))) {
                        if (null == N(a, py, 8) || null == jh(N(a, py, 8), 1))
                            return !1;
                        d = jh(N(a, py, 8), 1) * this.vb;
                        if (null != jh(c, 2) && (null == d || d < jh(c, 2)))
                            return !1;
                    }
                }
                return !0;
            };
            var qy = function (a) {
                var b, c, d;
                this.j = new D.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : N(a, mx, 2)) || void 0 === b ? void 0 : N(b, lx, 2)) || void 0 === c ? void 0 : J(c, 1)) && void 0 !== d ? d : []);
            };
            qy.prototype.getName = function () {
                return 'Url';
            };
            qy.prototype.Fb = function (a) {
                var b = this;
                return 0 === this.j.size || !J(a, 6).some(function (c) {
                    return b.j.has(c);
                });
            };
            var ry = function (a) {
                var b, c, d, e, f;
                this.j = new D.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : N(a, mx, 2)) || void 0 === b ? void 0 : N(b, hx, 1)) || void 0 === c ? void 0 : J(c, 1)) && void 0 !== d ? d : []);
                this.m = !(null === (f = null === (e = null === a || void 0 === a ? void 0 : N(a, mx, 2)) || void 0 === e ? void 0 : N(e, hx, 1)) || void 0 === f || !kl(f, 4));
            };
            ry.prototype.getName = function () {
                return 'Category';
            };
            ry.prototype.Fb = function (a) {
                var b;
                return Rd(this.j, null === (b = N(a, mh, 1)) || void 0 === b ? void 0 : J(b, 1)) || this.m && (a = N(a, mh, 1), !a || kl(a, 3)) ? !1 : !0;
            };
            var sy = function (a) {
                var b = [];
                b.push(new ry(a));
                b.push(new ny(a));
                b.push(new qy(a));
                b.push(new oy(a));
                this.j = b;
            };
            var ty = function (a) {
                var b, c, d, e, f, g;
                this.seller = 'google';
                this.decisionLogicUrl = 'dummy_url.com';
                this.interestGroupBuyers = [];
                this.additionalBids = [];
                this.auctionSignals = {};
                this.sellerSignals = {
                    Qc: sy.prototype,
                    vb: 1
                };
                this.perBuyerSignals = new D.Map();
                this.j = new D.Map();
                this.sellerSignals.Qc = new sy(null !== (c = null === (b = N(a, ux, 6)) || void 0 === b ? void 0 : N(b, sx, 1)) && void 0 !== c ? c : new sx());
                this.sellerSignals.vb = null !== (g = null === (f = null === (e = null === (d = N(a, ux, 6)) || void 0 === d ? void 0 : N(d, sx, 1)) || void 0 === e ? void 0 : N(e, ox, 3)) || void 0 === f ? void 0 : ll(f, 3)) && void 0 !== g ? g : 1;
                var h = ml(a, 4, Ud);
                h = null !== h && void 0 !== h ? h : new bl([]);
                h = _.H(_.u(h, 'entries').call(h));
                for (var k = h.next(); !k.done; k = h.next()) {
                    var l = _.H(k.value);
                    k = l.next().value;
                    l = l.next().value;
                    this.perBuyerSignals.set(k, l);
                }
                a = ml(a, 5, Vd);
                a = null !== a && void 0 !== a ? a : new bl([]);
                a = _.H(_.u(a, 'entries').call(a));
                for (h = a.next(); !h.done; h = a.next())
                    k = _.H(h.value), h = k.next().value, k = k.next().value, this.j.set(h, k);
            };
            var py = function (a) {
                R.call(this, a);
            };
            _.P(py, R);
            var mh = function (a) {
                R.call(this, a, -1, uy);
            };
            _.P(mh, R);
            var uy = [
                1,
                2
            ];
            var lh = function (a) {
                R.call(this, a, -1, vy);
            };
            _.P(lh, R);
            var vy = [1];
            var kh = function (a) {
                R.call(this, a, -1, wy);
            };
            _.P(kh, R);
            var wy = [
                2,
                3,
                6
            ];
            var xy = function (a) {
                var b;
                return {
                    ad: null !== (b = N(a, kh, 2)) && void 0 !== b ? b : new kh(),
                    bid: 0.1
                };
            };
            var yy = function (a, b, c, d) {
                var e, f, g, h, k, l, m, n, p, t, w, B;
                b = null === d || void 0 === d ? void 0 : N(d, fx, 1);
                c = null === (e = null === c || void 0 === c ? void 0 : N(c, cx, 1)) || void 0 === e ? void 0 : N(e, bx, 1);
                if (!b || !c)
                    return {
                        ad: null !== (f = N(a, kh, 2)) && void 0 !== f ? f : new kh(),
                        bid: 0
                    };
                d = 1 / (1 + Math.exp(-Sd(null !== (g = jl(b, 1)) && void 0 !== g ? g : 1, null !== (h = jl(c, 1)) && void 0 !== h ? h : 1)));
                var K = Math.exp(Sd(null !== (k = jl(b, 2)) && void 0 !== k ? k : 1, null !== (l = jl(c, 2)) && void 0 !== l ? l : 1));
                b = (null !== (m = ll(b, 3)) && void 0 !== m ? m : 1) * d * Math.pow(K, null !== (n = ll(b, 4)) && void 0 !== n ? n : 1);
                b = (null !== (p = ll(c, 3)) && void 0 !== p ? p : 1) * b * (1 - 1 / (1 + Math.exp(-(null !== (t = ll(c, 4)) && void 0 !== t ? t : 1) * Math.log(b) - (null !== (w = ll(c, 5)) && void 0 !== w ? w : 0))));
                return {
                    ad: null !== (B = N(a, kh, 2)) && void 0 !== B ? B : new kh(),
                    bid: b
                };
            };
            var nh = function (a) {
                R.call(this, a);
            };
            _.P(nh, R);
            var Td = function (a, b, c) {
                if (null == a)
                    return 0;
                var d = new py();
                d = Cb(d, 1, b, 0);
                Gb(a, 8, d);
                a: {
                    d = _.H(c.sellerSignals.Qc.j);
                    for (var e = d.next(); !e.done; e = d.next())
                        if (!e.value.Fb(a)) {
                            a = !1;
                            break a;
                        }
                    a = !0;
                }
                return a ? b * c.sellerSignals.vb : 0;
            };
            var zy = function () {
                }, Ay;
            _.P(zy, Tx);
            Ay || (Ay = new zy());
            var By = function (a) {
                    a = void 0 === a ? window : a;
                    return a._gmptnl ? 'afma-gpt-sdk-a' : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? 'afma-gpt-sdk-i' : null;
                }, Cy = function (a, b) {
                    b = void 0 === b ? window : b;
                    var c = By(b);
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
            var Dy = function (a, b) {
                Jt.call(this, a);
                this.id = a;
                this.K = b;
            };
            _.P(Dy, Jt);
            Dy.prototype.J = function (a) {
                this.K(this.id, a);
            };
            var Ey = function () {
                    this.errorMessage = this.info = this.error = this.Xb = null;
                }, Fy = function (a, b) {
                    a.Xb = b;
                    return a;
                };
            Ey.prototype.getError = function () {
                return this.error;
            };
            var Gy = function (a, b) {
                    a.errorMessage = b;
                    return a;
                }, Hy = function () {
                    this.cache = {};
                }, ve = function () {
                    Iy || (Jy = _.gc(Dp), Ky = _.gc(Cp), Iy = new Hy());
                    return Iy;
                }, we = function (a) {
                    var b = J(a, 3);
                    if (!b)
                        return 3;
                    if (void 0 === J(a, 2))
                        return 4;
                    a = Date.now();
                    return a > b + 3600000 * Ky ? 2 : a > b + 3600000 * Jy ? 1 : 0;
                };
            Hy.prototype.get = function (a, b) {
                var c = new Ey();
                if (this.cache[a])
                    return Fy(c, this.cache[a]);
                var d = '';
                try {
                    d = b.getItem('_GESPSK-' + a);
                } catch (e) {
                    return c.error = 6, Gy(c, e.message);
                }
                if (!d)
                    return new Ey();
                b = null;
                try {
                    b = ai(Sw, d);
                } catch (e) {
                    return a = new Ey(), a.error = 5, Gy(a, e.message);
                }
                b && (this.cache[a] = b);
                return Fy(new Ey(), b);
            };
            Hy.prototype.set = function (a, b) {
                var c = (0, I.M)(J(a, 1)), d = '_GESPSK-' + c, e = Fy(new Ey(), a);
                try {
                    b.setItem(d, ql(a));
                } catch (f) {
                    e.info = 7, Gy(e, f.message);
                }
                this.cache[c] = a;
                return e;
            };
            var Iy = null, Jy = 24, Ky = 72;
            var ie = function (a, b, c, d) {
                Dy.call(this, 655, d);
                this.ya = a;
                this.F = b;
                this.storage = c;
                this.A = U(this);
                this.B = U(this);
                this.l = _.gc(ae);
            };
            _.P(ie, Dy);
            ie.prototype.j = function () {
                var a, b = ve().get(this.ya, this.storage);
                if (b.getError())
                    $d(b.getError(), this.ya, b.errorMessage), Dt(this.A), Dt(this.B);
                else {
                    var c = Date.now();
                    if (b = b.Xb)
                        if (this.l && (Ff(b, 8) || ($d(33, this.ya), be(b, this.l)), Ff(b, 7) || ($d(34, this.ya), E(b, 7, Math.round(Date.now() / 1000 / 60)))), Ff(b, 3) || $d(35, this.ya), this.l) {
                            var d = (0, I.M)(ce(b, 8)), e = null !== (a = J(b, 7)) && void 0 !== a ? a : c;
                            d < this.l && be(b, Math.min(d + Number((this.l * (c / 1000 / 60 - e) / 60).toFixed(3)), this.l));
                            1 > (0, I.M)(ce(b, 8)) ? (c = {}, $d(22, this.ya, null, (c.t = String(e), c.cr = String(d), c.cs = String(we(b)), c)), Dt(this.A), Dt(this.B)) : (this.A.j(this.F), this.B.j(b));
                        } else
                            this.A.j(this.F), this.B.j(b);
                    else
                        this.A.j(this.F), b = this.B, d = b.j, e = new Sw(), e = E(e, 1, this.ya), e = be(e, this.l), c = E(e, 3, c), d.call(b, c);
                }
            };
            var de = function (a, b, c, d) {
                    'string' !== typeof c ? $d(21, a) : c || $d(20, a);
                    E(b, 2, c);
                    b = ve().set(b, d);
                    b.errorMessage ? $d((0, I.M)(b.info), a, b.errorMessage) : $d(27, a);
                }, ee = function (a) {
                    return 'string' === typeof a ? a : a instanceof Error ? a.message : null;
                };
            var je = function (a, b, c, d) {
                Dy.call(this, 658, d);
                this.storage = c;
                this.l = U(this);
                this.A = U(this);
                this.B = U(this);
                this.F = W(this, a);
                this.R = W(this, b);
            };
            _.P(je, Dy);
            je.prototype.j = function () {
                var a = this;
                if (this.F.value) {
                    var b = function (g) {
                            a.l.j({
                                id: (0, I.M)(J(g, 1)),
                                qd: J(g, 2)
                            });
                        }, c = this.F.value, d = (0, I.M)(this.R.value), e = (0, I.M)(J(d, 1)), f = we(d);
                    switch (f) {
                    case 0:
                        $d(24, e);
                        break;
                    case 1:
                        $d(25, e);
                        break;
                    case 2:
                        $d(26, e);
                        break;
                    case 3:
                        $d(9, e);
                        break;
                    case 4:
                        $d(23, e);
                    }
                    switch (f) {
                    case 0:
                        b(d);
                        Ly(this);
                        break;
                    case 1:
                        b(d);
                        this.A.j(c);
                        this.B.j(d);
                        break;
                    case 3:
                    case 2:
                    case 4:
                        E(d, 2, null), fe(e, d, c, this.storage).then(b), Ly(this);
                    }
                } else
                    Dt(this.l), Ly(this);
            };
            var Ly = function (a) {
                Dt(a.A);
                Dt(a.B);
            };
            var ke = function (a, b, c, d) {
                Dy.call(this, 662, d);
                this.storage = c;
                this.l = W(this, a);
                this.A = W(this, b);
            };
            _.P(ke, Dy);
            ke.prototype.j = function () {
                var a = this;
                this.A.value && this.l.value && he().then(function () {
                    var b = (0, I.M)(a.A.value), c = (0, I.M)(J(b, 1));
                    fe(c, b, (0, I.M)(a.l.value), a.storage);
                });
            };
            var se = function (a, b) {
                this.storage = b;
                this.l = [];
                this.o = [];
                this.j = [];
                a = _.H(a);
                for (b = a.next(); !b.done; b = a.next())
                    this.push(b.value);
            };
            se.prototype.push = function (a) {
                var b = a.id;
                a = a.collectorFunction;
                if ('string' !== typeof b)
                    $d(37, 'invalid-id');
                else if ('function' !== typeof a)
                    $d(14, b);
                else {
                    var c = {};
                    $d(17, b, null, (c.api = '1', c));
                    b = oe(b, a, this.storage, this.m);
                    this.l.push(b);
                    a = _.H(this.o);
                    for (c = a.next(); !c.done; c = a.next())
                        b.then(c.value);
                }
            };
            se.prototype.m = function (a, b) {
                for (var c = _.H(this.j), d = c.next(); !d.done; d = c.next())
                    d = d.value, d(a, b);
            };
            var My = 0, Ny = rj(jj(kj('https://pagead2.googlesyndication.com/pagead/expansion_embed.js')));
            var Oy = function (a, b, c) {
                var d = 'script';
                d = void 0 === d ? '' : d;
                var e = a.createElement('link');
                try {
                    ak(e, b, 'preload');
                } catch (f) {
                    return;
                }
                d && (e.as = d);
                c && e.setAttribute('nonce', c);
                if (a = a.getElementsByTagName('head')[0])
                    try {
                        a.appendChild(e);
                    } catch (f) {
                    }
            };
            var Py = /^\.google\.(com?\.)?[a-z]{2,3}$/, Qy = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/, Ry = function (a) {
                    return Py.test(a) && !Qy.test(a);
                }, Sy = _.F, Uy = function (a) {
                    a = 'https://adservice' + (a + '/adsid/integrator.js');
                    var b = ['domain=' + encodeURIComponent(_.F.location.hostname)];
                    Ty[3] >= Wf() && b.push('adsid=' + encodeURIComponent(Ty[1]));
                    return a + '?' + b.join('&');
                }, Ty, Vy, Wy = function () {
                    Sy = _.F;
                    Ty = Sy.googleToken = Sy.googleToken || {};
                    var a = Wf();
                    Ty[1] && Ty[3] > a && 0 < Ty[2] || (Ty[1] = '', Ty[2] = -1, Ty[3] = -1, Ty[4] = '', Ty[6] = '');
                    Vy = Sy.googleIMState = Sy.googleIMState || {};
                    Ry(Vy[1]) || (Vy[1] = '.google.com');
                    Array.isArray(Vy[5]) || (Vy[5] = []);
                    'boolean' !== typeof Vy[6] && (Vy[6] = !1);
                    Array.isArray(Vy[7]) || (Vy[7] = []);
                    'number' !== typeof Vy[8] && (Vy[8] = 0);
                }, Xy = function () {
                    Wy();
                    return Ty[1];
                }, Yy = function () {
                    Wy();
                    return Ty[4];
                }, Zy = function () {
                    Wy();
                    return Ty[6];
                }, $y = function (a) {
                    Wy();
                    Ry(a) && (Vy[1] = a);
                }, az = {
                    ec: function () {
                        return 0 < Vy[8];
                    },
                    ge: function () {
                        Vy[8]++;
                    },
                    he: function () {
                        0 < Vy[8] && Vy[8]--;
                    },
                    ie: function () {
                        Vy[8] = 0;
                    },
                    Pf: function () {
                        return !1;
                    },
                    Hc: function () {
                        return Vy[5];
                    },
                    Cc: function (a) {
                        try {
                            a();
                        } catch (b) {
                            _.F.setTimeout(function () {
                                throw b;
                            }, 0);
                        }
                    },
                    Rc: function () {
                        if (!az.ec()) {
                            var a = _.F.document, b = function (e) {
                                    e = Uy(e);
                                    a: {
                                        try {
                                            var f = Zj('script[nonce]', void 0);
                                            break a;
                                        } catch (g) {
                                        }
                                        f = void 0;
                                    }
                                    Oy(a, e, f);
                                    f = a.createElement('script');
                                    f.type = 'text/javascript';
                                    f.onerror = function () {
                                        return _.F.processGoogleToken({}, 2);
                                    };
                                    e = fn(e);
                                    Gd(f, e);
                                    try {
                                        (a.head || a.body || a.documentElement).appendChild(f), az.ge();
                                    } catch (g) {
                                    }
                                }, c = Vy[1];
                            b(c);
                            '.google.com' != c && b('.google.com');
                            b = {};
                            var d = (b.newToken = 'FBT', b);
                            _.F.setTimeout(function () {
                                return _.F.processGoogleToken(d, 1);
                            }, 1000);
                        }
                    }
                }, bz = function (a) {
                    Wy();
                    var b = Sy.googleToken[5] || 0;
                    a && (0 != b || Ty[3] >= Wf() ? az.Cc(a) : (az.Hc().push(a), az.Rc()));
                    Ty[3] >= Wf() && Ty[2] >= Wf() || az.Rc();
                }, cz = function (a) {
                    _.F.processGoogleToken = _.F.processGoogleToken || function (b, c) {
                        var d = b;
                        d = void 0 === d ? {} : d;
                        c = void 0 === c ? 0 : c;
                        b = d.newToken || '';
                        var e = 'NT' == b, f = parseInt(d.freshLifetimeSecs || '', 10), g = parseInt(d.validLifetimeSecs || '', 10), h = d['1p_jar'] || '';
                        d = d.pucrd || '';
                        Wy();
                        1 == c ? az.ie() : az.he();
                        var k = Sy.googleToken = Sy.googleToken || {}, l = 0 == c && b && 'string' === typeof b && !e && 'number' === typeof f && 0 < f && 'number' === typeof g && 0 < g && 'string' === typeof h;
                        e = e && !az.ec() && (!(Ty[3] >= Wf()) || 'NT' == Ty[1]);
                        var m = !(Ty[3] >= Wf()) && 0 != c;
                        if (l || e || m)
                            e = Wf(), f = e + 1000 * f, g = e + 1000 * g, 0.00001 > Math.random() && _.bn(_.F, 'https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=' + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, Wy();
                        if (l || !az.ec()) {
                            c = az.Hc();
                            for (b = 0; b < c.length; b++)
                                az.Cc(c[b]);
                            c.length = 0;
                        }
                    };
                    bz(a);
                };
            var Mg = function (a, b) {
                    b = void 0 === b ? {} : b;
                    this.root = b.root ? b.root : null;
                    this.A = b.rootMargin ? Ce(b.rootMargin) : [
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
                    this.rootMargin = _.ye(this.A, function (c) {
                        return '' + c.value + c.type;
                    }).join(' ');
                    this.J = Ee(b.threshold);
                    this.B = a;
                    this.j = [];
                    this.l = [];
                    this.G = !1;
                    this.m = null;
                    this.o = cj(this.C, 100, this);
                }, dz = function (a) {
                    if (a.root)
                        var b = Fe(a.root);
                    else {
                        var c = _.Jl(window);
                        b = {
                            top: 0,
                            right: c.width,
                            bottom: c.height,
                            left: 0,
                            width: c.width,
                            height: c.height
                        };
                    }
                    a = _.ye(a.A, function (d, e) {
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
                }, ez = function (a, b, c) {
                    if (!b || b.isIntersecting != c.isIntersecting)
                        return !0;
                    var d = b.intersectionRatio, e = c.intersectionRatio;
                    return d == e ? !1 : _.fj(a.J, function (f) {
                        return f < d != f < e;
                    });
                };
            Mg.prototype.C = function () {
                var a = this, b = dz(this);
                _.dj(this.j, function (c) {
                    var d = c.target, e = Fe(d), f = e.width * e.height;
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
                    ez(a, c.ka, d) && a.l.push(d);
                    c.ka = d;
                });
                this.l.length && this.B(fz(this), this);
            };
            Mg.prototype.observe = function (a) {
                _.fj(this.j, function (b) {
                    return b.target == a;
                }) || (this.j.push({
                    target: a,
                    ka: null
                }), this.C(), this.G || (this.G = !0, _.Hd(_.F, 'scroll', this.o), _.Hd(_.F, 'resize', this.o), _.F.MutationObserver && !this.m && (this.m = new MutationObserver(this.o), this.m.observe(_.F.document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }))));
            };
            Mg.prototype.unobserve = function (a) {
                this.j = _.De(this.j, function (b) {
                    return b.target != a;
                });
                0 == this.j.length && this.disconnect();
            };
            Mg.prototype.disconnect = function () {
                this.G = !1;
                this.j.length = 0;
                _.ge(_.F, 'scroll', this.o);
                _.ge(_.F, 'resize', this.o);
                this.m && (this.m.disconnect(), this.m = null);
            };
            var fz = function (a) {
                var b = [].concat(_.nc(a.l));
                a.l.length = 0;
                return b;
            };
            _.gz = function () {
                var a = _.bc(38);
                this.j = void 0 === a ? 0.01 : a;
                this.m = this.o;
            };
            _.gz.prototype.o = function (a, b, c, d, e) {
                c = void 0 === c ? this.j : c;
                if (Math.random() > c)
                    return !1;
                b.error && b.meta && b.id || (b = new Al(b, {
                    context: a,
                    id: void 0 === e ? 'gpt_exception' : e
                }));
                d && (b.meta = {}, d && d(b.meta));
                _.F.google_js_errors = _.F.google_js_errors || [];
                _.F.google_js_errors.push(b);
                _.F.error_rep_loaded || (Yl(_.F.document, fn(_.F.location.protocol + '//pagead2.googlesyndication.com/pagead/js/err_rep.js')), _.F.error_rep_loaded = !0);
                return !1;
            };
            var hz = function (a, b, c, d, e, f) {
                _.Rq.call(this);
                this.C = a;
                this.status = 1;
                this.l = b;
                this.o = c;
                this.K = d;
                this.pb = !!e;
                this.A = Math.random();
                this.B = {};
                this.j = null;
                this.F = (0, _.Ui)(this.V, this);
                this.J = f;
            };
            _.P(hz, _.Rq);
            hz.prototype.V = function (a) {
                if (!('*' !== this.o && a.origin !== this.o || !this.pb && a.source != this.l)) {
                    var b = null;
                    try {
                        b = JSON.parse(a.data);
                    } catch (c) {
                    }
                    if (_.ja(b) && (a = b.i, b.c === this.C && a != this.A)) {
                        if (2 !== this.status)
                            try {
                                this.status = 2, iz(this), this.j && (this.j(), this.j = null);
                            } catch (c) {
                            }
                        a = b.s;
                        b = b.p;
                        if ('string' === typeof a && ('string' === typeof b || _.ja(b)) && this.B.hasOwnProperty(a))
                            this.B[a](b);
                    }
                }
            };
            var iz = function (a) {
                var b = {};
                b.c = a.C;
                b.i = a.A;
                a.J && (b.e = a.J);
                a.l.postMessage(JSON.stringify(b), a.o);
            };
            hz.prototype.U = function () {
                if (1 === this.status) {
                    try {
                        this.l.postMessage && iz(this);
                    } catch (a) {
                    }
                    window.setTimeout((0, _.Ui)(this.U, this), 50);
                }
            };
            hz.prototype.connect = function (a) {
                a && (this.j = a);
                _.Hd(window, 'message', this.F);
                this.K && this.U();
            };
            var jz = function (a, b, c) {
                    a.B[b] = c;
                }, kz = function (a, b, c) {
                    var d = {};
                    d.c = a.C;
                    d.i = a.A;
                    d.s = b;
                    d.p = c;
                    try {
                        a.l.postMessage(JSON.stringify(d), a.o);
                    } catch (e) {
                    }
                };
            hz.prototype.G = function () {
                this.status = 3;
                _.ge(window, 'message', this.F);
                _.Rq.prototype.G.call(this);
            };
            var lz = function (a) {
                R.call(this, a);
            };
            _.P(lz, R);
            var mz = function (a) {
                R.call(this, a);
            };
            _.P(mz, R);
            var nz = function (a) {
                R.call(this, a);
            };
            _.P(nz, R);
            var qz, rz;
            _.oz = function (a) {
                this.j = _.zd(a).floatingAdsStacking;
            };
            qz = function (a) {
                var b = a.j.nextRestrictionId++;
                a.j.maxZIndexRestrictions[b] = 2147483646;
                pz(a);
                return b;
            };
            rz = function (a) {
                a = _.cm(a.j.maxZIndexRestrictions);
                return a.length ? Math.min.apply(null, a) : null;
            };
            _.oz.prototype.addListener = function (a) {
                this.j.maxZIndexListeners.push(a);
                a(rz(this));
            };
            var pz = function (a) {
                    var b = rz(a);
                    _.dj(a.j.maxZIndexListeners, function (c) {
                        return c(b);
                    });
                }, sz = function (a) {
                    this.m = a;
                    this.j = null;
                };
            var tz;
            _.uz = function (a, b) {
                if (!a.body)
                    return null;
                var c = new tz();
                c.apply(a, b);
                return function () {
                    _.hn(a.body, {
                        filter: c.j,
                        webkitFilter: c.j,
                        overflow: c.o,
                        position: c.l,
                        top: c.G
                    });
                    b.scrollTo(0, c.m);
                };
            };
            tz = function () {
                this.j = this.G = this.l = this.o = null;
                this.m = 0;
            };
            tz.prototype.apply = function (a, b) {
                this.o = a.body.style.overflow;
                this.l = a.body.style.position;
                this.G = a.body.style.top;
                this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
                this.m = _.Qt(b);
                _.hn(a.body, 'top', -this.m + 'px');
            };
            var vz = function (a, b) {
                b = void 0 === b ? 500 : b;
                _.Rq.call(this);
                this.o = a;
                this.xb = b;
                this.j = null;
                this.C = {};
                this.A = 0;
                this.l = null;
            };
            _.P(vz, _.Rq);
            vz.prototype.G = function () {
                this.C = {};
                this.l && (_.ge(this.o, 'message', this.l), delete this.l);
                delete this.C;
                delete this.o;
                delete this.j;
                _.Rq.prototype.G.call(this);
            };
            var xz = function (a) {
                    var b;
                    return 'function' === typeof (null === (b = a.o) || void 0 === b ? void 0 : b.__uspapi) || null != wz(a);
                }, zz = function (a, b) {
                    var c = {};
                    if (xz(a)) {
                        var d = _.bj(function () {
                            return b(c);
                        });
                        yz(a, function (e, f) {
                            f && (c = e);
                            d();
                        });
                        setTimeout(d, a.xb);
                    } else
                        b(c);
                }, yz = function (a, b) {
                    var c, d;
                    if ('function' === typeof (null === (c = a.o) || void 0 === c ? void 0 : c.__uspapi))
                        (null === (d = a.o) || void 0 === d ? void 0 : d.__uspapi)('getUSPData', 1, b);
                    else if (wz(a)) {
                        Az(a);
                        var e = ++a.A;
                        a.C[e] = b;
                        a.j && (b = {}, a.j.postMessage((b.__uspapiCall = {
                            command: 'getUSPData',
                            version: 1,
                            callId: e
                        }, b), '*'));
                    }
                }, wz = function (a) {
                    if (a.j)
                        return a.j;
                    a.j = qm(a.o, '__uspapiLocator');
                    return a.j;
                }, Az = function (a) {
                    a.l || (a.l = function (b) {
                        var c;
                        try {
                            var d = {};
                            'string' === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                            var e = d.__uspapiReturn;
                            null === (c = a.C) || void 0 === c ? void 0 : c[e.callId](e.returnValue, e.success);
                        } catch (f) {
                        }
                    }, _.Hd(a.o, 'message', a.l));
                };
            var Bz = function (a, b) {
                if (!a)
                    return a;
                var c = a.toLowerCase();
                return -1 < c.indexOf('<!doctype') || -1 < c.indexOf('<html') ? a : '<!doctype html><html><head>' + (void 0 === b ? '' : b) + '</head><body>' + a + '</body></html>';
            };
            var Cz = function (a, b, c, d, e, f) {
                    this.o = Sm(a);
                    this.m = Sm(b);
                    this.l = c;
                    this.j = Sm(d);
                    this.G = e;
                    this.C = f;
                }, Dz = function (a) {
                    return JSON.stringify({
                        windowCoords_t: a.o.top,
                        windowCoords_r: a.o.right,
                        windowCoords_b: a.o.bottom,
                        windowCoords_l: a.o.left,
                        frameCoords_t: a.m.top,
                        frameCoords_r: a.m.right,
                        frameCoords_b: a.m.bottom,
                        frameCoords_l: a.m.left,
                        styleZIndex: a.l,
                        allowedExpansion_t: a.j.top,
                        allowedExpansion_r: a.j.right,
                        allowedExpansion_b: a.j.bottom,
                        allowedExpansion_l: a.j.left,
                        xInView: a.G,
                        yInView: a.C
                    });
                }, Ez = function (a, b) {
                    var c = window, d = c.screenX || c.screenLeft || 0, e = c.screenY || c.screenTop || 0;
                    c = new _.Rm(e, d + (c.outerWidth || document.documentElement.clientWidth || 0), e + (c.outerHeight || document.documentElement.clientHeight || 0), d);
                    var f = on(a);
                    d = _.sn(_.tn, a);
                    var g = new Um(f.x, f.y, d.width, d.height);
                    d = Vm(g);
                    e = String(ln(a, 'zIndex'));
                    var h = new _.Rm(0, Infinity, Infinity, 0);
                    for (var k = Fl(a), l = k.j.body, m = k.j.documentElement, n = Kl(k.j); a = nn(a);)
                        if (!(_.rk && 0 == a.clientWidth || uk && 0 == a.clientHeight && a == l) && a != l && a != m && 'visible' != ln(a, 'overflow')) {
                            var p = on(a), t = new _.ld(a.clientLeft, a.clientTop);
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
                    k = _.Jl(k.parentWindow || k.defaultView || window);
                    h.right = Math.min(h.right, a + k.width);
                    h.bottom = Math.min(h.bottom, n + k.height);
                    h = (h = 0 <= h.top && 0 <= h.left && h.bottom > h.top && h.right > h.left ? h : null) ? new Um(h.left, h.top, h.right - h.left, h.bottom - h.top) : null;
                    b ? (k = b.boundingClientRect, b = new Um(f.x - k.left, f.y - k.top, b.rootBounds.width, b.rootBounds.height)) : b = h;
                    k = h ? Wm(g, h) : null;
                    h = f = 0;
                    k && !new _.Cl(k.width, k.height).isEmpty() && (f = k.width / g.width, h = k.height / g.height);
                    k = new _.Rm(0, 0, 0, 0);
                    if (a = b)
                        (g = Wm(g, b)) ? (n = Vm(b), l = Vm(g), a = l.right != n.left && n.right != l.left, n = l.bottom != n.top && n.bottom != l.top, a = (0 != g.width || a) && (0 != g.height || n)) : a = !1;
                    a && (k = new _.Rm(Math.max(d.top - b.top, 0), Math.max(b.left + b.width - d.right, 0), Math.max(b.top + b.height - d.bottom, 0), Math.max(d.left - b.left, 0)));
                    return new Cz(c, d, e, k, f, h);
                };
            var Fz = function (a) {
                this.G = a;
                this.C = null;
                this.F = this.status = 0;
                this.m = null;
                this.ma = 'sfchannel' + a;
            };
            var ht = jt;
            var Gz = function (a) {
                this.j = a;
            };
            var Hz = function (a, b) {
                this.Ib = a;
                this.Jb = b;
                this.m = this.j = !1;
            };
            var Iz = function (a, b, c, d, e, f, g, h, k, l) {
                k = void 0 === k ? [] : k;
                this.m = a;
                this.o = b;
                this.l = c;
                this.permissions = d;
                this.metadata = e;
                this.G = f;
                this.pb = g;
                this.hostpageLibraryTokens = k;
                this.j = '';
                this.Ja = h;
                this.Sa = void 0 === l ? '' : l;
            };
            var Jz = function (a, b) {
                this.m = a;
                this.l = b;
            };
            Jz.prototype.j = function (a) {
                this.l && a && (a.sentinel = this.l);
                return JSON.stringify(a);
            };
            var Kz = function (a, b, c) {
                Jz.call(this, a, void 0 === c ? '' : c);
                this.version = b;
            };
            _.P(Kz, Jz);
            Kz.prototype.j = function () {
                return Jz.prototype.j.call(this, {
                    uid: this.m,
                    version: this.version
                });
            };
            var Lz = function (a, b, c, d) {
                Jz.call(this, a, void 0 === d ? '' : d);
                this.G = b;
                this.o = c;
            };
            _.P(Lz, Jz);
            Lz.prototype.j = function () {
                return Jz.prototype.j.call(this, {
                    uid: this.m,
                    initialWidth: this.G,
                    initialHeight: this.o
                });
            };
            var Mz = function (a, b, c) {
                Jz.call(this, a, void 0 === c ? '' : c);
                this.description = b;
            };
            _.P(Mz, Jz);
            Mz.prototype.j = function () {
                return Jz.prototype.j.call(this, {
                    uid: this.m,
                    description: this.description
                });
            };
            var Nz = function (a, b, c, d) {
                Jz.call(this, a, void 0 === d ? '' : d);
                this.o = b;
                this.push = c;
            };
            _.P(Nz, Jz);
            Nz.prototype.j = function () {
                return Jz.prototype.j.call(this, {
                    uid: this.m,
                    expand_t: this.o.top,
                    expand_r: this.o.right,
                    expand_b: this.o.bottom,
                    expand_l: this.o.left,
                    push: this.push
                });
            };
            var Oz = function (a, b) {
                Jz.call(this, a, void 0 === b ? '' : b);
            };
            _.P(Oz, Jz);
            Oz.prototype.j = function () {
                return Jz.prototype.j.call(this, { uid: this.m });
            };
            var Pz = function (a, b, c) {
                Jz.call(this, a, void 0 === c ? '' : c);
                this.G = b;
            };
            _.P(Pz, Jz);
            Pz.prototype.j = function () {
                var a = {
                    uid: this.m,
                    newGeometry: Dz(this.G)
                };
                return Jz.prototype.j.call(this, a);
            };
            var Qz = function (a, b, c, d, e, f) {
                Pz.call(this, a, c, void 0 === f ? '' : f);
                this.success = b;
                this.o = d;
                this.push = e;
            };
            _.P(Qz, Pz);
            Qz.prototype.j = function () {
                var a = {
                    uid: this.m,
                    success: this.success,
                    newGeometry: Dz(this.G),
                    expand_t: this.o.top,
                    expand_r: this.o.right,
                    expand_b: this.o.bottom,
                    expand_l: this.o.left,
                    push: this.push
                };
                this.l && (a.sentinel = this.l);
                return JSON.stringify(a);
            };
            var Rz = function (a, b, c, d) {
                Jz.call(this, a, void 0 === d ? '' : d);
                this.width = b;
                this.height = c;
            };
            _.P(Rz, Jz);
            Rz.prototype.j = function () {
                return Jz.prototype.j.call(this, {
                    uid: this.m,
                    width: this.width,
                    height: this.height
                });
            };
            var Sz = function (a, b, c, d, e) {
                var f = c;
                f && (f = '?' + f);
                b = (void 0 === e ? '//tpc.googlesyndication.com' : e) + ('/safeframe/' + b + '/html/container.html' + f);
                e = a;
                for (f = 0; e != e.parent;)
                    f++, e = e.parent;
                (e = f) && (b += (c ? '&' : '?') + 'n=' + e);
                (c = d) || (c = jm(a, !1));
                return (c ? 'https:' : 'http:') + b;
            };
            var Tz = function () {
                    this.j = [];
                }, Vz = function (a, b, c, d, e) {
                    a.j.push(new Uz(b, c, d, e));
                }, Wz = function (a, b, c, d) {
                    Vz(a, b, c, d + 'px', void 0);
                }, Xz = function (a) {
                    for (var b = a.j.length - 1; 0 <= b; b--) {
                        var c = a.j[b];
                        c.m ? (c.o.style.removeProperty(c.j), c.o.style.setProperty(c.j, String(c.l), c.G)) : c.o.style[c.j] = c.l;
                    }
                    a.j.length = 0;
                }, Uz = function (a, b, c, d) {
                    this.o = a;
                    this.j = (this.m = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, '-$1').toLowerCase() : b;
                    this.l = this.m ? a.style.getPropertyValue(this.j) : a.style[this.j];
                    this.G = this.m ? a.style.getPropertyPriority(this.j) : void 0;
                    this.m ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c);
                };
            var Yz = function () {
                    var a = window, b = _.dg(a);
                    b && (b = {
                        label: '2',
                        type: 9,
                        value: b
                    }, a = a.google_js_reporting_queue = a.google_js_reporting_queue || [], 2048 > a.length && a.push(b));
                }, Zz = function (a, b, c) {
                    var d = window;
                    return function () {
                        var e = _.dg(), f = 3;
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
                                duration: (_.dg() || 0) - e,
                                type: f
                            }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e));
                        }
                        return g;
                    };
                };
            var dA = function (a) {
                Fz.call(this, a.uniqueId);
                var b = this;
                this.A = a.Yd;
                this.X = 1 == a.size;
                this.Z = new Hz(a.permissions.Ib && !this.X, a.permissions.Jb && !this.X);
                this.l = a.oc;
                this.na = a.hostpageLibraryTokens || [];
                var c = window.location;
                this.ra = 'file:' == c.protocol ? '*' : c.protocol + '//' + c.host;
                this.xa = !!a.pb;
                c = !1 === a.$c ? 'https:' : window.location.protocol;
                this.R = a.Ub ? '//' + a.Ub + '.safeframe.googlesyndication.com' : '//tpc.googlesyndication.com';
                this.sa = a.ob ? '*' : Me(a.Ja) ? 'https://secureframe.doubleclick.net' : c + this.R;
                this.ba = !!a.wd;
                this.ja = $z(a);
                this.o = new Tz();
                aA(this, a.oc, a.size);
                this.C = this.ha = Ez(a.oc);
                this.K = a.me || '1-0-38';
                this.oa = a.pd || '';
                this.ca = void 0 === a.Ja ? null : a.Ja;
                this.Ga = a.Sa;
                bA(this, a);
                this.W = null;
                this.U = Zz(412, function () {
                    return cA(b);
                }, a.va);
                this.V = -1;
                this.J = 0;
                this.B = null;
                !a.Sf || 'function' !== typeof IntersectionObserver || wk || vk || (this.B = new IntersectionObserver(Zz(414, function (e) {
                    b.W = e[e.length - 1];
                    cA(b);
                }, a.va)));
                this.m = new hz(this.ma, this.j.contentWindow, this.sa, !1);
                jz(this.m, 'init_done', (0, _.Ui)(this.hc, this));
                jz(this.m, 'register_done', (0, _.Ui)(this.tc, this));
                jz(this.m, 'report_error', (0, _.Ui)(this.vc, this));
                jz(this.m, 'expand_request', (0, _.Ui)(this.cc, this));
                jz(this.m, 'collapse_request', (0, _.Ui)(this.ac, this));
                jz(this.m, 'creative_geometry_update', (0, _.Ui)(this.aa, this));
                this.m.connect((0, _.Ui)(this.kc, this));
                var d = Zz(415, function () {
                    b.j && (b.j.name = '', a.Nc && a.Nc(), _.ge(b.j, 'load', d));
                }, a.va);
                _.Hd(this.j, 'load', d);
                this.hc = Zz(413, this.hc, a.va);
                this.tc = Zz(417, this.tc, a.va);
                this.vc = Zz(419, this.vc, a.va);
                this.cc = Zz(411, this.cc, a.va);
                this.ac = Zz(409, this.ac, a.va);
                this.aa = Zz(410, this.aa, a.va);
                this.kc = Zz(416, this.kc, a.va);
            };
            _.P(dA, Fz);
            var aA = function (a, b, c) {
                    a.X ? (b.style.width = _.rn('100%', !0), b.style.height = _.rn('auto', !0)) : (b.style.width = _.rn(c.width, !0), b.style.height = _.rn(c.height, !0));
                }, bA = function (a, b) {
                    var c, d = b.ob ? '' : null != (c = b.content) ? c : '';
                    c = {
                        shared: {
                            sf_ver: a.K,
                            ck_on: it() ? 1 : 0,
                            flash_ver: '0'
                        }
                    };
                    d = a.K + ';' + d.length + ';' + d;
                    c = new Iz(a.G, a.ra, a.ha, a.Z, new Gz(c), a.X, a.xa, a.ca, a.na, a.Ga);
                    var e = {};
                    e.uid = c.m;
                    e.hostPeerName = c.o;
                    e.initialGeometry = Dz(c.l);
                    var f = c.permissions;
                    f = JSON.stringify({
                        expandByOverlay: f.Ib,
                        expandByPush: f.Jb,
                        readCookie: f.j,
                        writeCookie: f.m
                    });
                    e = (e.permissions = f, e.metadata = JSON.stringify(c.metadata.j), e.reportCreativeGeometry = c.G, e.isDifferentSourceWindow = c.pb, e.goog_safeframe_hlt = tt(c.hostpageLibraryTokens), e.encryptionMode = c.Ja, e);
                    c.j && (e.sentinel = c.j);
                    c.Sa && (e.pbjsAdConfig = c.Sa);
                    c = JSON.stringify(e);
                    e = d + c;
                    c = !1 === b.$c;
                    if (a.ba && b.size instanceof _.Cl) {
                        d = Me(b.Ja) ? 'https://secureframe.doubleclick.net' : _.Ll(_.El(a.l)).location.protocol + a.R;
                        f = _.Ll(_.El(a.l));
                        var g = b.Ic, h = b.size;
                        My || Yl(f.document, Ny);
                        My++;
                        f.google_eas_queue = f.google_eas_queue || [];
                        f.google_eas_queue.push({
                            a: g,
                            b: d,
                            c: h.width,
                            d: h.height,
                            e: 'sf-gdn-exp-' + My,
                            f: void 0,
                            g: void 0,
                            h: void 0,
                            i: void 0
                        });
                    }
                    var k = b.size;
                    f = b.Vb;
                    h = b.Kd || '';
                    d = b.jb;
                    g = void 0 === b.ob;
                    var l = k.width;
                    k = k.height;
                    a.X && (k = l = 0);
                    var m = {};
                    e = (m.id = b.Ic, m.title = h, m.name = e, m.scrolling = 'no', m.marginWidth = '0', m.marginHeight = '0', m.width = String(l), m.height = String(k), m['data-is-safeframe'] = 'true', m);
                    g && (g = _.Ll(_.El(a.l)), c = Me(a.ca) ? 'https://secureframe.doubleclick.net/container.html?ecs=' + f : Sz(g, a.K, a.oa, c, a.R), f = [], a.ba && (h = km(g.location.href), g = f.push, h = [
                        0 < h.length ? 'google_debug' + (h ? '=' + h : '') + '&' : '',
                        'xpc=',
                        'sf-gdn-exp-' + a.G,
                        '&p=',
                        encodeURIComponent(_.F.document.location.protocol),
                        '//',
                        encodeURIComponent(_.F.document.location.host)
                    ].join(''), g.call(f, h)), f.length && (c += '#' + f.join('&')), e.src = c);
                    null !== a.ja && (e.sandbox = a.ja);
                    d && (e.allow = d);
                    b.ob ? (a.j = b.ob, Hl(a.j, e)) : (b = _.El(a.l), d = {}, d = (d.frameborder = 0, d.allowTransparency = 'true', d.style = 'border:0;vertical-align:bottom;', d.src = 'about:blank', d), e && Aa(d, e), b = b.createElement('IFRAME'), Hl(b, d), a.j = b);
                    a.X && (a.j.style.minWidth = '100%');
                    a.l.appendChild(a.j);
                };
            _.q = dA.prototype;
            _.q.kc = function () {
                this.B && this.j ? this.B.observe(this.j) : (_.Hd(window, 'resize', this.U), _.Hd(window, 'scroll', this.U));
            };
            _.q.hc = function (a) {
                try {
                    if (0 != this.status)
                        throw Error('Container already initialized');
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ja(b) || !Le(b.uid) || 'string' !== typeof b.version)
                        throw Error('Cannot parse JSON message');
                    var c = new Kz(b.uid, b.version, b.sentinel);
                    if (this.G != c.m || this.K != c.version)
                        throw Error('Wrong source container');
                    this.status = 1;
                } catch (d) {
                    this.A.error('Invalid INITIALIZE_DONE message. Reason: ' + d.message);
                }
            };
            _.q.tc = function (a) {
                try {
                    if (1 != this.status)
                        throw Error('Container not initialized');
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ja(b) || !Le(b.uid) || 'number' !== typeof b.initialWidth || 'number' !== typeof b.initialHeight)
                        throw Error('Cannot parse JSON message');
                    if (this.G != new Lz(b.uid, b.initialWidth, b.initialHeight, b.sentinel).m)
                        throw Error('Wrong source container');
                    this.status = 2;
                } catch (c) {
                    this.A.error('Invalid REGISTER_DONE message. Reason: ' + c.message);
                }
            };
            _.q.vc = function (a) {
                try {
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ja(b) || !Le(b.uid) || 'string' !== typeof b.description)
                        throw Error('Cannot parse JSON message');
                    var c = new Mz(b.uid, b.description, b.sentinel);
                    if (this.G != c.m)
                        throw Error('Wrong source container');
                    this.A.info('Ext reported an error. Description: ' + c.description);
                } catch (d) {
                    this.A.error('Invalid REPORT_ERROR message. Reason: ' + d.message);
                }
            };
            _.q.cc = function (a) {
                try {
                    if (2 != this.status)
                        throw Error('Container is not registered');
                    if (0 != this.F)
                        throw Error('Container is not collapsed');
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ja(b) || !Le(b.uid) || 'number' !== typeof b.expand_t || 'number' !== typeof b.expand_r || 'number' !== typeof b.expand_b || 'number' !== typeof b.expand_l || 'boolean' !== typeof b.push)
                        throw Error('Cannot parse JSON message');
                    var c = new Nz(b.uid, new _.Rm(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
                    if (this.G != c.m)
                        throw Error('Wrong source container');
                    if (!(0 <= c.o.top && 0 <= c.o.left && 0 <= c.o.bottom && 0 <= c.o.right))
                        throw Error('Invalid expansion amounts');
                    var d;
                    if (d = c.push && this.Z.Jb || !c.push && this.Z.Ib) {
                        var e = c.o, f = c.push, g = this.C = Ez(this.j);
                        if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                            if (!f)
                                for (var h = this.j.parentNode; h && h.style; h = h.parentNode)
                                    Vz(this.o, h, 'overflowX', 'visible', 'important'), Vz(this.o, h, 'overflowY', 'visible', 'important');
                            var k = this.C.m, l = this.C.m, m = Vm(new Um(0, 0, k.right - k.left, l.bottom - l.top));
                            _.ja(e) ? (m.top -= e.top, m.right += e.right, m.bottom += e.bottom, m.left -= e.left) : (m.top -= e, m.right += Number(void 0), m.bottom += Number(void 0), m.left -= Number(void 0));
                            Vz(this.o, this.l, 'position', 'relative');
                            Vz(this.o, this.j, 'position', 'absolute');
                            f ? (Wz(this.o, this.l, 'width', m.right - m.left), Wz(this.o, this.l, 'height', m.bottom - m.top)) : Vz(this.o, this.j, 'zIndex', '10000');
                            Wz(this.o, this.j, 'width', m.right - m.left);
                            Wz(this.o, this.j, 'height', m.bottom - m.top);
                            Wz(this.o, this.j, 'left', m.left);
                            Wz(this.o, this.j, 'top', m.top);
                            this.F = 2;
                            this.C = Ez(this.j);
                            d = !0;
                        } else
                            d = !1;
                    }
                    a = d;
                    kz(this.m, 'expand_response', new Qz(this.G, a, this.C, c.o, c.push).j());
                    if (!a)
                        throw Error('Viewport or document body not large enough to expand into.');
                } catch (n) {
                    this.A.error('Invalid EXPAND_REQUEST message. Reason: ' + n.message);
                }
            };
            _.q.ac = function (a) {
                try {
                    if (2 != this.status)
                        throw Error('Container is not registered');
                    if (2 != this.F)
                        throw Error('Container is not expanded');
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ja(b) || !Le(b.uid))
                        throw Error('Cannot parse JSON message');
                    if (this.G != new Oz(b.uid, b.sentinel).m)
                        throw Error('Wrong source container');
                    Xz(this.o);
                    this.F = 0;
                    this.j && (this.C = Ez(this.j));
                    kz(this.m, 'collapse_response', new Pz(this.G, this.C).j());
                } catch (c) {
                    this.A.error('Invalid COLLAPSE_REQUEST message. Reason: ' + c.message);
                }
            };
            var cA = function (a) {
                if (1 == a.status || 2 == a.status)
                    switch (a.J) {
                    case 0:
                        eA(a);
                        a.V = window.setTimeout((0, _.Ui)(a.fa, a), 1000);
                        a.J = 1;
                        break;
                    case 1:
                        a.J = 2;
                        break;
                    case 2:
                        a.J = 2;
                    }
            };
            dA.prototype.aa = function (a) {
                try {
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ja(b) || !Le(b.uid) || 'number' !== typeof b.width || 'number' !== typeof b.height || b.sentinel && 'string' !== typeof b.sentinel)
                        throw Error('Cannot parse JSON message');
                    var c = new Rz(b.uid, b.width, b.height, b.sentinel);
                    if (this.G != c.m)
                        throw Error('Wrong source container');
                    var d = String(c.height);
                    this.X ? d != this.j.height && (this.j.height = d, cA(this)) : this.A.error('Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.');
                } catch (e) {
                    this.A.error('Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: ' + e.message);
                }
            };
            dA.prototype.fa = function () {
                if (1 == this.status || 2 == this.status)
                    switch (this.J) {
                    case 1:
                        this.J = 0;
                        break;
                    case 2:
                        eA(this), this.V = window.setTimeout((0, _.Ui)(this.fa, this), 1000), this.J = 1;
                    }
            };
            var eA = function (a) {
                    a.C = Ez(a.j, a.W);
                    a.W = null;
                    kz(a.m, 'geometry_update', new Pz(a.G, a.C).j());
                }, $z = function (a) {
                    var b = null;
                    a.Vc && (b = a.Vc);
                    return null == b ? null : b.join(' ');
                }, fA = [
                    'allow-modals',
                    'allow-orientation-lock',
                    'allow-presentation',
                    'allow-pointer-lock'
                ], gA = ['allow-top-navigation'], hA = ['allow-same-origin'], iA = nm([].concat(_.nc(fA), _.nc(gA)));
            nm([].concat(_.nc(fA), _.nc(hA)));
            nm([].concat(_.nc(fA), _.nc(gA), _.nc(hA)));
            var Se = function (a, b) {
                try {
                    Pd(fi(a, b));
                } catch (c) {
                }
            };
            var jA = function (a) {
                R.call(this, a);
            };
            _.P(jA, R);
            var kA = function () {
            };
            var lA = [
                    0.05,
                    0.1,
                    0.2,
                    0.5
                ], mA = [
                    0,
                    0.5,
                    1
                ], nA = function (a) {
                    a = qe(a);
                    if (!a)
                        return -1;
                    try {
                        var b = Fs(a.document);
                        var c = new _.Cl(b.clientWidth, b.clientHeight);
                    } catch (d) {
                        c = new _.Cl(-12245933, -12245933);
                    }
                    return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height;
                }, oA = function (a, b) {
                    return 0 > a ? [] : _.ye(lA, function (c) {
                        return Math.min(a / b * c, 1);
                    });
                }, rA = function (a) {
                    this.j = a.H;
                    this.o = a.fb;
                    this.B = a.zc;
                    this.l = null;
                    this.G = a.va;
                    this.m = pA(this);
                    this.J = a.qe || !1;
                    this.A = a.Of || !1;
                    this.C = null;
                    this.A && qA(this);
                }, tA = function (a, b) {
                    if (a.m) {
                        if (null != a.l) {
                            try {
                                sA(a, Math.round(performance.now()), 0, 0, 0, !1);
                            } catch (c) {
                                a.G && a.G(c);
                            }
                            a.m && a.m.unobserve(a.o);
                            a.C = null;
                        }
                        a.l = b;
                        a.m.observe(a.o);
                        a.A && (a.o.getBoundingClientRect(), xt(a.j.document) || qe(a.j), a.C = new kA());
                    }
                }, pA = function (a) {
                    var b = a.o.offsetWidth * a.o.offsetHeight, c = nA(a.j);
                    b = [].concat(_.nc(mA), _.nc(oA(c, b)));
                    la(b);
                    return _.F.IntersectionObserver ? new _.F.IntersectionObserver(function (d) {
                        return uA(a, d);
                    }, { threshold: b }) : new Mg(function (d) {
                        return uA(a, d);
                    }, { threshold: b });
                }, uA = function (a, b) {
                    try {
                        var c = nA(a.j);
                        _.dj(b, function (d) {
                            var e = Math.round(d.time), f = d.boundingClientRect.width * d.boundingClientRect.height, g = d.intersectionRect.width * d.intersectionRect.height;
                            d = d.isIntersecting;
                            a.J && sA(a, e, f, g, c, d);
                        });
                    } catch (d) {
                        a.G && a.G(d);
                    }
                }, sA = function (a, b, c, d, e, f) {
                    if (null == a.l)
                        throw Error('Not Attached.');
                    var g = new jA();
                    c = E(g, 1, c);
                    d = E(c, 2, d);
                    e = E(d, 3, e);
                    b = E(e, 4, b);
                    b = E(b, 5, f);
                    f = new Of();
                    e = J(b, 4);
                    null != e && Tk(f, 4, e);
                    e = J(b, 2);
                    null != e && Tk(f, 2, e);
                    e = J(b, 1);
                    null != e && Tk(f, 1, e);
                    e = J(b, 3);
                    null != e && Tk(f, 3, e);
                    e = J(b, 5);
                    null != e && (b = e, null != b && (mk(f.j, 40), f.j.push(b ? 1 : 0)));
                    f = Qf(f);
                    f = Ka(f, 4);
                    Mb(a.B, '1', 10, f, void 0, a.l);
                }, qA = function (a) {
                    var b = wt(a.j.document);
                    b && _.Hd(a.j.document, b, function () {
                    });
                };
            var vA = function (a, b) {
                    this.j = a;
                    this.m = b;
                }, wA = function (a) {
                    var b = rm('google_ads_top_frame', a.j);
                    b = b && b.contentWindow;
                    if (!b)
                        return !1;
                    b.addEventListener('message', function (c) {
                        var d = c.ports;
                        '__goog_top_url_req' === c.data.msgType && d.length && d[0].postMessage({
                            msgType: '__goog_top_url_resp',
                            topUrl: a.m
                        });
                    }, !1);
                    return !0;
                };
            var xA = function (a) {
                    a = void 0 === a ? window : a;
                    return !a.PeriodicSyncManager;
                }, yA = function () {
                    var a = void 0 === a ? window : a;
                    if (!xA(a) && _.v(Rp) || xA(a) && _.v(Sp)) {
                        a = a.navigator.userAgent;
                        var b = /Chrome/.test(a);
                        return /Android/.test(a) && b;
                    }
                    return !1;
                }, zA = {
                    issuerOrigin: 'https://attestation.android.com',
                    issuancePath: '/att/i',
                    redemptionPath: '/att/r',
                    shouldRedeemToken: function () {
                        return yA();
                    },
                    shouldRequestToken: function () {
                        return yA();
                    }
                };
            var Jm = [
                    'A88otRz1Fd3Nt567e2IYshC18LL3KGVXpVJW9oTCId4RYaygt23pbb4JqrbdIO/bwZPWEmRjBIRBu/bZbDR7Pg4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=',
                    'A0gCLbXCcL0R1Oc8tFPDs0G4Elz17w3zHp+Zst66+D17veE2o7fUcPsA114QtSTRqfVJLMeTSdeWOom0CcyCsgYAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
                    'A9RQ+LxFazAousxUwSCzaihJjHLO1UyjQp0teZKHl7WdbVjPDfHSKMd6D/ZI5MTjqClFycbl70EFd7cBJWXqKQEAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
                    'A6WKeWsdn1Ct+ZPqS9NCxxaiBoQ7wdTkK2/gE69Yu0gfBKJfo1gOvgkGmf5/xaIajT/RUb9AbnF1FsSZ47cCcQcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
                    'A04ZCu7yjrHgwQJK5ISHhH1DSg0qqowEay3n70KO6wV3D2Mj+OX3Kw20aSMitzgdG1xfrN7sOJV/dZIk+RvCzA4AAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=='
                ], CA = function (a, b, c) {
                    b = void 0 === b ? null : b;
                    c = void 0 === c ? !1 : c;
                    _.Rq.call(this);
                    _.v(Up) || AA();
                    this.o = b || [zA];
                    this.j = c;
                    if (document.hasTrustToken && !_.v(Tp) && !Array.isArray(window.goog_tt_state)) {
                        var d = BA(this);
                        Object.defineProperty(window, 'goog_tt_state', {
                            configurable: !1,
                            get: function () {
                                return d.slice();
                            }
                        });
                    }
                };
            _.P(CA, _.Rq);
            var DA = function () {
                    var a = void 0 === a ? window : a;
                    return a.goog_tt_state;
                }, EA = function (a) {
                    return a.some(function (b) {
                        return 6 === b.state;
                    });
                }, AA = function () {
                    var a = void 0 === a ? window.document : a;
                    Lm(a);
                }, FA = function (a, b) {
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
                    b && 0 < _.u(Object, 'keys').call(Object, b).length && (a.additionalSigningData = Nk(JSON.stringify(b), 3));
                    return a;
                }, GA = function (a) {
                    var b = DA(), c = _.bc(252);
                    if (a.setTrustToken && b && EA(b))
                        try {
                            var d = FA(b, c);
                            d && a.setTrustToken(d);
                        } catch (e) {
                        }
                }, BA = function (a) {
                    return a.o.map(function (b) {
                        return {
                            issuerOrigin: b.issuerOrigin,
                            state: _.v(Up) && !a.j ? 12 : 1
                        };
                    });
                }, HA = function (a, b) {
                    var c = _.u(window.goog_tt_state, 'find').call(window.goog_tt_state, function (d) {
                        return d.issuerOrigin === a;
                    });
                    c && (c.state = b);
                }, IA = function () {
                    var a = window.goog_tt_state;
                    return Array.isArray(a) && a.some(function (b) {
                        return 1 != b.state;
                    });
                }, JA = function (a) {
                    var b = a.issuerOrigin + a.redemptionPath, c = {
                            keepalive: !0,
                            redirect: 'follow',
                            method: 'get',
                            trustToken: {
                                type: 'token-redemption',
                                issuer: a.issuerOrigin,
                                refreshPolicy: 'none'
                            }
                        };
                    HA(a.issuerOrigin, 2);
                    return window.fetch(b, c).then(function (d) {
                        if (!d.ok)
                            throw Error(d.status + ': Network response was not ok!');
                        HA(a.issuerOrigin, 6);
                    }).catch(function (d) {
                        d && 'NoModificationAllowedError' === d.name ? HA(a.issuerOrigin, 6) : HA(a.issuerOrigin, 5);
                    });
                }, KA = function (a, b) {
                    var c = a.issuerOrigin + a.issuancePath;
                    HA(a.issuerOrigin, 8);
                    return window.fetch(c, { trustToken: { type: 'token-request' } }).then(function (d) {
                        if (!d.ok)
                            throw Error(d.status + ': Network response was not ok!');
                        HA(a.issuerOrigin, 10);
                        if (b)
                            return JA(a);
                    }).catch(function (d) {
                        if (d && 'NoModificationAllowedError' === d.name) {
                            if (HA(a.issuerOrigin, 10), b)
                                return JA(a);
                        } else
                            HA(a.issuerOrigin, 9);
                    });
                }, LA = function (a) {
                    if (document.hasTrustToken && !_.v(Tp) && (!_.v(Up) || a.j)) {
                        if (IA())
                            return window.goog_tt_promise;
                        var b = [];
                        a.o.forEach(function (c) {
                            _.v(Vp) && HA(c.issuerOrigin, 13);
                            var d = c.shouldRedeemToken(), e = c.shouldRequestToken();
                            if (d || e) {
                                var f = document.hasTrustToken(c.issuerOrigin).then(function (g) {
                                    if (g) {
                                        if (d)
                                            return JA(c);
                                    } else {
                                        if (e)
                                            return KA(c, d);
                                        HA(c.issuerOrigin, 3);
                                    }
                                });
                                b.push(f);
                            } else
                                HA(c.issuerOrigin, 7);
                        });
                        if (D.Promise && D.Promise.all)
                            return a = D.Promise.all(b), 'object' != typeof window.goog_tt_promise && Object.defineProperty(window, 'goog_tt_promise', {
                                configurable: !1,
                                value: a,
                                writable: !1
                            }), a;
                    }
                };
            var MA = function (a, b, c) {
                    return a.IntersectionObserver ? new a.IntersectionObserver(c, b) : new Mg(c, b);
                }, NA = function (a, b, c) {
                    _.Hd(a, b, c);
                    return function () {
                        return _.ge(a, b, c);
                    };
                }, OA = null, PA = function () {
                    OA = _.Hc();
                }, QA = function (a, b) {
                    return b ? null === OA ? (_.Hd(a, 'mousemove', PA, { passive: !0 }), _.Hd(a, 'scroll', PA, { passive: !0 }), PA(), !1) : _.Hc() - OA >= 1000 * b : !1;
                }, RA = function (a) {
                    var b = a.H, c = a.element, d = a.se, e = a.re, f = void 0 === a.Xc ? 0 : a.Xc, g = a.$b, h = a.yd, k = void 0 === a.Kc ? !0 : a.Kc, l = null, m = !1, n = !1, p = [], t = (void 0 === a.Lb ? MA : a.Lb)(b, void 0 === a.options ? {} : a.options, function (w, B) {
                            try {
                                var K = function () {
                                    p.length || (e && (p.push(NA(c, 'mouseenter', function () {
                                        m = !0;
                                        K();
                                    })), p.push(NA(c, 'mouseleave', function () {
                                        m = !1;
                                        K();
                                    }))), p.push(NA(b.document, 'visibilitychange', function () {
                                        return K();
                                    })));
                                    var G = QA(b, f), Q = xt(b.document);
                                    if (n && !m && !G && !Q)
                                        l = l || b.setTimeout(function () {
                                            QA(b, f) ? K() : (g(), B.disconnect());
                                        }, 1000 * d);
                                    else if (k || m || G || Q)
                                        b.clearTimeout(l), l = null;
                                };
                                n = w[w.length - 1].isIntersecting;
                                K();
                            } catch (G) {
                                h && h(G);
                            }
                        });
                    t.observe(c);
                    return function () {
                        t.disconnect();
                        for (var w = _.H(p), B = w.next(); !B.done; B = w.next())
                            B = B.value, B();
                        null != l && b.clearTimeout(l);
                    };
                };
            var SA = function () {
                    var a = J(Th.L().j, 26);
                    this.m = null;
                    this.j = 0;
                    this.o = a;
                }, TA = function (a) {
                    if (_.v(Zo))
                        return new Sx();
                    if (!a.m) {
                        var b = _.bc(7);
                        Wx = $x;
                        cy = b;
                        by = 0;
                        if (!Qj() || 0 <= Qg(Rg(), 11))
                            b = ey();
                        else {
                            b = vn();
                            var c = b.__google_ad_urls;
                            b = c ? c : b.__google_ad_urls = new Sx();
                        }
                        a.m = b;
                        a.j = a.m.setupOse(a.o);
                    }
                    return a.m;
                };
            SA.prototype.getOseId = function () {
                if (_.v(Zo))
                    return 2;
                this.j || (this.j = Rx(0, _.bc(7)));
                return this.j;
            };
            var UA = 0, VA = function () {
                    this.Y = [];
                    this.G = [];
                    this.Na = this.Oa = NaN;
                    this.o = 0;
                    this.Tb = this.Ob = this.Cb = '';
                    this.l = [];
                    this.J = 0;
                    this.B = this.m = this.j = this.C = null;
                    this.X = _.v(qo) ? 0 : Bb(_.F);
                    this.Ea = 1;
                    this.A = new D.Map();
                }, WA = function (a, b, c, d, e, f, g, h, k) {
                    a.G = b;
                    a.o = c;
                    a.l = d;
                    a.Cb = e;
                    a.Ob = f;
                    a.Tb = g;
                    a.C = void 0 === h ? null : h;
                    a.B = void 0 === k ? null : k;
                }, XA = function (a, b) {
                    var c = a.A.get(b);
                    c || (c = window === window.top ? (++UA).toString(36) : fk(), a.A.set(b, c), _.Xg(b, function () {
                        a.A.delete(b);
                    }));
                    return c;
                };
            var YA = function (a, b, c, d, e, f, g, h, k) {
                Y.call(this, 718);
                this.F = W(this, b);
                this.K = W(this, c);
                this.B = W(this, d);
                this.l = W(this, e);
                Mt(this, f);
                this.R = V(this, g);
                this.A = V(this, h);
                this.Z = V(this, k);
                this.W = Hg(a, er);
            };
            _.P(YA, Y);
            YA.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f;
                    return A(b, function (g) {
                        if (1 == g.j) {
                            if (!ZA(c))
                                return g.return();
                            d = c.R.value;
                            e = c.A.value;
                            _.hn(e, 'visibility', 'hidden');
                            _.hn(e, 'min-width', '100%');
                            _.hn(d, 'min-width', '100%');
                            return C(g, c.W, 2);
                        }
                        if (c.m)
                            return g.return();
                        f = d.contentDocument;
                        if (!f)
                            return uc('gpt_amp_fluid_no_iframedoc', function (h) {
                                dc(h);
                            }), g.return();
                        $A(c, d, e, (0, I.M)(f.body).offsetWidth, f.body.offsetHeight);
                        Bi(g);
                    });
                });
            };
            var ZA = function (a) {
                    var b = !a.Z.value;
                    return null == a.l.value || a.B.value || 'height' !== a.K.value || b ? !1 : !0;
                }, $A = function (a, b, c, d, e) {
                    b.setAttribute('height', String(e));
                    b.setAttribute('width', String(d));
                    _.hn(c, 'visibility', 'visible');
                    aB(a, e, d);
                }, aB = function (a, b, c) {
                    var d = a.F.value;
                    uc('gpt_fluid_sz', function (e) {
                        r(e, 'sz', c + 'x' + b);
                        r(e, 'qqid', d || '');
                        dc(e);
                        r(e, 'ff', 1);
                    });
                };
            var bB = function (a, b, c, d, e) {
                Y.call(this, 685);
                var f = this;
                this.slotId = a;
                this.H = b;
                this.l = W(this, c);
                this.A = V(this, d);
                this.B = V(this, e);
                Hg(this.slotId, Ig, function (g) {
                    return $m(f.H, g.detail);
                });
            };
            _.P(bB, Y);
            bB.prototype.j = function () {
                var a, b;
                if (!_.v(Bo) && !this.B.value) {
                    var c = null !== (b = null === (a = this.l.value) || void 0 === a ? void 0 : J(a, 1)) && void 0 !== b ? b : '', d = an(this.H, this.A.value, c);
                    _.Xg(this, function () {
                        try {
                            d();
                        } catch (e) {
                            Zb(493, e);
                        }
                    });
                }
            };
            var cB = /(<head(\s+[^>]*)?>)/i, dB = function (a, b, c, d, e) {
                    Y.call(this, 665);
                    this.pa = U(this);
                    this.l = V(this, a);
                    this.A = W(this, b);
                    this.B = W(this, c);
                    this.F = W(this, d);
                    this.K = W(this, e);
                };
            _.P(dB, Y);
            dB.prototype.j = function () {
                if (0 !== this.l.value.kind || !Ye(this.A.value) || Gt(this.B))
                    this.pa.j(this.l.value);
                else {
                    var a = this.l.value.ta || '', b = !!this.F.value, c = !!this.K.value;
                    c || Sg() || (a = a.replace(cB, '$1<meta http-equiv=Content-Security-Policy content="script-src https://cdn.ampproject.org/;object-src \'none\';child-src blob:;frame-src \'none\'">'));
                    b && !c && (a = a.replace(cB, '$1<meta name="referrer" content="origin">'));
                    this.pa.j({
                        kind: 0,
                        ta: a
                    });
                }
            };
            var eB = function (a, b, c, d) {
                _.Rq.call(this);
                var e = this;
                this.o = a;
                this.j = null;
                _.v(Vo) || _.Xg(this, Wq(b, Ig, function (f) {
                    var g = f.detail;
                    return void D.Promise.all([
                        c.promise,
                        d.promise
                    ]).then(function (h) {
                        h = _.H(h);
                        var k = h.next().value;
                        null == h.next().value || k || (h = g.data, e.m) || ('impression-viewable' === h ? e.o(!0) : 'string' === typeof h && 0 === h.indexOf('visibility-changed-') && (h = /^visibility-changed-(\d+(\.\d+)?)$/.exec(h)) && (h = Math.round(100 * Number(h[1])), 0 <= h && 100 >= h && (0 !== h && 100 !== h || h !== e.j) && (null !== e.j || 0 < h) && (e.j = h, e.o(!1, h))));
                    });
                }));
            };
            _.P(eB, _.Rq);
            var fB = function (a, b) {
                    return Math.max('string' === typeof a ? _.u(a, 'endsWith').call(a, 'px') ? parseInt(a, 10) : 0 : a, b) + 'px';
                }, gB = function (a, b, c) {
                    a.style.minWidth = fB(a.style.minWidth, b);
                    a.style.minHeight = fB(a.style.minHeight, c);
                }, hB = function (a, b, c, d, e) {
                    a = a.createElement('DIV');
                    a.id = c;
                    a.name = c;
                    c = a.style;
                    c.border = '0pt none';
                    d && (c.margin = 'auto', c.textAlign = 'center');
                    e && (d = Array.isArray(e), c.width = d ? e[0] + 'px' : '100%', c.height = d ? e[1] + 'px' : '0%');
                    b.appendChild(a);
                    return a;
                }, iB = function (a, b, c, d, e, f, g, h, k, l, m, n, p, t, w, B) {
                    var K = Kg, G = _.O(Cv).o, Q;
                    Array.isArray(d) ? Q = new _.Cl(d[0], d[1]) : Q = 1;
                    d = null;
                    null !== c && (d = null === m ? Bz(c) : '<startguard>' + c + '<endguard>');
                    return new dA({
                        oc: a,
                        Ic: b,
                        Kd: K,
                        content: d,
                        size: Q,
                        Yd: {
                            info: function () {
                            },
                            I: function () {
                            },
                            error: function () {
                            }
                        },
                        wd: l,
                        Nc: e,
                        Vc: h || void 0,
                        permissions: {
                            Ib: Ff(f, 1) ? !!y(f, 1) : !k,
                            Jb: Ff(f, 2) ? !!y(f, 2) : !1
                        },
                        pb: !!rh().fifWin,
                        me: fv(),
                        pd: gv(),
                        $c: !1,
                        hostpageLibraryTokens: G,
                        va: Zb,
                        Ja: null === m ? void 0 : m,
                        uniqueId: p,
                        Vb: n,
                        Ub: g || void 0,
                        jb: t || void 0,
                        ob: w || void 0,
                        Sa: B || void 0
                    });
                }, jB = function (a, b, c) {
                    var d = void 0 === d ? !0 : d;
                    var e = void 0 === e ? !0 : e;
                    b = Bz(b, '<script>var inDapIF=true,inGptIF=true;</script>');
                    try {
                        var f = a.contentWindow ? a.contentWindow.document : a.contentDocument;
                        d && Sg() && f.open('text/html', 'replace');
                        c();
                        Yj(f, _.en(b));
                        a.contentWindow && a.contentWindow.history && a.contentWindow.history.replaceState && wj(a.contentWindow.location.href, '#') && a.contentWindow.history.replaceState(null, '', '#' + Math.random());
                        e && f.close();
                    } catch (g) {
                        $b(653, g, !0);
                    }
                }, lB = function (a, b, c) {
                    var d = id(c), e = fd(b, a);
                    if (e) {
                        var f = Sf(e), g = f.depth;
                        f = f.pe.getBoundingClientRect();
                        if (0 === (null == f ? void 0 : f.height)) {
                            var h = _.H(ov(c));
                            c = h.next().value;
                            h = h.next().value;
                            f = 0 <= f.top && f.bottom <= (_.F.innerHeight || a.documentElement.clientHeight);
                            Tf(f, g);
                            _.v(Ro) && f && 0 < c && 0 < h && Lc().I(us(b.getAdUnitPath(), b.j, c.toString(), h.toString()), b);
                        }
                    }
                    f = null == e ? void 0 : e.getBoundingClientRect();
                    if (c = _.gc(To)) {
                        g = b = 0;
                        d = _.H(d);
                        for (h = d.next(); !h.done; h = d.next())
                            if (h = h.value, Array.isArray(h)) {
                                var k = _.H(h), l = k.next().value;
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
                            if (a = _.Ll(a), e && !kB(hd(e, a)) && e.parentElement && !kB(hd(e.parentElement, a)))
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
                            if ((a = fd(b, a)) && a.style.height && a.style.width)
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
                }, mB = function (a, b, c) {
                    if (!Nv(b, a)) {
                        var d = fd(b, a);
                        if (d) {
                            var e = c.O;
                            c = c.P[b.j];
                            var f = lB(a, b, c);
                            if (_.v(Uo) || _.v(No)) {
                                if (_.v(Uo) && Array.isArray(f)) {
                                    var g = _.H(f);
                                    f = g.next().value;
                                    g = g.next().value;
                                    d.style.minWidth || (d.style.minWidth = f + 'px');
                                    d.style.minHeight || (d.style.minHeight = g + 'px');
                                }
                                _.v(No) && hB(a, d, Rv(b), rv(e, c), [
                                    0,
                                    0
                                ]);
                            } else
                                hB(a, d, Rv(b), rv(e, c), f), _.v(Qo) && Array.isArray(f) && (b = _.H(f), a = b.next().value, b = b.next().value, gB(d, a, b));
                        }
                    }
                }, kB = function (a) {
                    return !!a && ('sticky' === a.position || 'fixed' === a.position);
                };
            var nB = 0;
            var pg = new D.WeakMap(), ng = function (a, b) {
                    a = [a];
                    for (var c = b.length - 1; 0 <= c; --c)
                        a.push(typeof b[c], b[c]);
                    return a.join('\x0B');
                };
            var oB = rg(function (a) {
                return (null === a || void 0 === a ? 0 : a.src) ? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|pagead2\.googlesyndication\.com)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src) ? 0 : 1 : 2;
            }, function (a, b) {
                var c;
                return a + '\x0B' + (null === (c = b[0]) || void 0 === c ? void 0 : c.src);
            });
            var pB = function (a, b, c, d) {
                    try {
                        var e;
                        if (!(e = !b)) {
                            var f;
                            if (!(f = !my(b, c, void 0 === d ? 100 : d))) {
                                a: {
                                    do {
                                        var g = hd(b, c);
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
                }, sg = function (a) {
                    for (var b, c = {}, d = _.H(M(a, Jf, 9)), e = d.next(); !e.done; e = d.next())
                        e = e.value, c[(0, I.M)(Kf(e))] = J(e, 2);
                    a = J(a, 8);
                    a.length && (null !== (b = c.excl_cat) && void 0 !== b ? b : c.excl_cat = a);
                    return c;
                }, qB = function (a) {
                    var b = !1, c = M(a, Jf, 2).map(function (d) {
                            var e = (0, I.M)(Kf(d));
                            b = 'excl_cat' === e;
                            d = J(d, 2);
                            return encodeURIComponent(e) + '=' + encodeURIComponent(d.join());
                        });
                    a = J(a, 3);
                    !b && a.length && c.push(encodeURIComponent('excl_cat') + '=' + encodeURIComponent(a.join()));
                    return c;
                }, rB = function (a) {
                    var b;
                    if (null === (b = a.location) || void 0 === b ? 0 : b.ancestorOrigins)
                        return a.location.ancestorOrigins.length;
                    var c = 0;
                    Xl(function () {
                        c++;
                        return !1;
                    }, !0, !0, a);
                    return c;
                }, sB = function (a, b, c, d, e, f, g, h, k) {
                    this.Y = a;
                    this.o = b;
                    this.T = c;
                    this.l = d;
                    this.model = e;
                    this.ea = f;
                    this.N = g;
                    this.G = h;
                    this.A = void 0 === k ? !1 : k;
                    this.C = [];
                    this.j = '';
                    this.m = [];
                    this.B = [];
                    this.J = new D.Set(Bg(op));
                }, vB = function (a) {
                    var b = void 0 === b ? window : b;
                    if (0 === a.Y.length)
                        return '';
                    tB(a, a.Y, b);
                    var c, d;
                    b = null !== (d = null === (c = ag(a.N.O)) || void 0 === c ? void 0 : y(c, 9)) && void 0 !== d && d || !y(a.ea, 5) ? 'https://pagead2.googlesyndication.com/gampad/ads?' : '' + _.bc(247) + '/gampad/ads?';
                    a.j = b;
                    c = a.C;
                    if (_.v(ro))
                        for (d = Math.random, b = c.length - 1; 0 < b; b--) {
                            var e = Math.floor(d() * (b + 1)), f = c[b];
                            c[b] = c[e];
                            c[e] = f;
                        }
                    c = _.H(c);
                    for (b = c.next(); !b.done; b = c.next())
                        if (d = a, b = b.value, e = uB(b))
                            '?' !== d.j[d.j.length - 1] && (d.j += '&'), d.j += b.ce + '=' + e;
                    return a.j;
                }, wB = function (a, b) {
                    try {
                        var c = b.top;
                        var d = Gs(c.document, c);
                    } catch (e) {
                        d = new _.ld(-12245933, -12245933);
                    }
                    Z(a, 'scr_x', Math.round(d.x), { ia: !0 });
                    Z(a, 'scr_y', Math.round(d.y), { ia: !0 });
                }, xB = function (a) {
                    var b = window, c = (y(a.ea, 5) && Ec(b) ? b.document.cookie : null) || '';
                    var d = b.document.domain;
                    var e = b.history.length, f = b.screen, g = b.document.referrer;
                    if (Xm())
                        d = vn().gaGlobal || {};
                    else {
                        var h = Math.round(new Date().getTime() / 1000), k = b.google_analytics_domain_name;
                        d = 'undefined' == typeof k ? Hx('auto', d) : Hx(k, d);
                        var l = -1 < c.indexOf('__utma=' + d + '.'), m = -1 < c.indexOf('__utmb=' + d), n;
                        (n = (Ym() || vn()).gaGlobal) || (n = {}, (Ym() || vn()).gaGlobal = n);
                        var p = !1;
                        if (l)
                            g = c.split('__utma=' + d + '.')[1].split(';')[0].split('.'), m ? n.sid = g[3] : n.sid || (n.sid = h + ''), n.vid = g[0] + '.' + g[1], n.from_cookie = !0;
                        else {
                            n.sid || (n.sid = h + '');
                            if (!n.vid) {
                                p = !0;
                                m = Math.round(2147483647 * Math.random());
                                l = Fx.appName;
                                var t = Fx.version, w = Fx.language ? Fx.language : Fx.browserLanguage, B = Fx.platform, K = Fx.userAgent;
                                try {
                                    var G = Fx.javaEnabled();
                                } catch (aa) {
                                    G = !1;
                                }
                                G = [
                                    l,
                                    t,
                                    w,
                                    B,
                                    K,
                                    G ? 1 : 0
                                ].join('');
                                f ? G += f.width + 'x' + f.height + f.colorDepth : _.F.java && _.F.java.awt && (f = _.F.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), G += f.screen.width + 'x' + f.screen.height);
                                G = G + c + (g || '');
                                for (g = G.length; 0 < e;)
                                    G += e-- ^ g++;
                                n.vid = (m ^ Gx(G) & 2147483647) + '.' + h;
                            }
                            n.from_cookie = !1;
                        }
                        if (!n.cid) {
                            b:
                                for (h = 999, k && (k = 0 == k.indexOf('.') ? k.substr(1) : k, h = k.split('.').length), k = 999, c = c.split(';'), g = 0; g < c.length; g++)
                                    if (f = Ix.exec(c[g]) || Jx.exec(c[g]) || Kx.exec(c[g])) {
                                        G = f[1] || 0;
                                        if (G == h) {
                                            var Q = f[2];
                                            break b;
                                        }
                                        G < k && (k = G, Q = f[2]);
                                    }
                            p && Q && -1 != Q.search(/^\d+\.\d+$/) ? (n.vid = Q, n.from_cookie = !0) : Q != n.vid && (n.cid = Q);
                        }
                        n.dh = d;
                        n.hid || (n.hid = Math.round(2147483647 * Math.random()));
                        d = n;
                    }
                    Z(a, 'ga_vid', d.vid, { da: !1 });
                    Z(a, 'ga_sid', d.sid, { da: !1 });
                    Z(a, 'ga_hid', d.hid, { da: !1 });
                    Z(a, 'ga_fc', d.from_cookie, { da: !1 });
                    Z(a, 'ga_cid', d.cid, { da: !1 });
                    Z(a, 'ga_wpids', b.google_analytics_uacct);
                }, yB = function (a, b) {
                    var c, d;
                    try {
                        var e = null === (d = null === (c = b.external) || void 0 === c ? void 0 : c.getHostEnvironmentValue) || void 0 === d ? void 0 : d.bind(b.external);
                        if (e) {
                            var f = parseInt(JSON.parse(e('os-mode'))['os-mode'], 10);
                            0 <= f && Z(a, 'wsm', f + 1);
                        }
                    } catch (g) {
                    }
                }, tB = function (a, b, c) {
                    c = void 0 === c ? window : c;
                    var d, e = c.document, f = a.N, g = f.O;
                    f = f.P;
                    var h = (_.v(qo) ? a.T : a.model).X;
                    Z(a, 'gdfp_req', 1, { da: !1 });
                    Z(a, 'pvsid', h);
                    Z(a, 'correlator', J(g, 26));
                    Z(a, 'output', a.G, { da: !1 });
                    _.v(wo) ? zB(a, 'wbn' === a.G ? new D.Map([
                        [
                            'wbsu',
                            { value: qj((0, I.M)(a.model.j)).replace(/^urn:uuid:/, '') }
                        ],
                        [
                            'callback',
                            { value: a.model.m }
                        ]
                    ]) : new D.Map()) : 'wbn' === a.G && (Z(a, 'wbsu', qj((0, I.M)(a.model.j)).replace(/^urn:uuid:/, '')), Z(a, 'callback', a.model.m));
                    Z(a, 'impl', y(g, 6) || _.v(co) ? 'fifs' : 'fif', { da: !1 });
                    zB(a, $f({
                        sd: sf(g, 24, 0),
                        Cb: a.model.Cb,
                        Tb: a.model.Tb,
                        Ob: a.model.Ob
                    }));
                    zB(a, gg(g, a.model));
                    _.v(uo) ? zB(a, new D.Map([
                        [
                            'eid',
                            { value: a.model.G }
                        ],
                        [
                            'debug_experiment_id',
                            { value: aq().split(',') }
                        ]
                    ])) : AB(a);
                    BB(a);
                    Z(a, 'ptt', 17);
                    _.v(to) ? zB(a, new D.Map([[
                            'co',
                            {
                                value: 0 !== sf(g, 24, 0) ? sf(g, 24, 0) : null,
                                options: { ia: !0 }
                            }
                        ]])) : CB(a);
                    _.v(vo) ? zB(a, cg(g, a.ea)) : DB(a);
                    Z(a, 'sc', _.bc(6) ? 1 : 0, { ia: !0 });
                    window.postMessage && Z(a, 'sfv', fv());
                    Z(a, 'ecs', a.N.Vb);
                    EB(a, b, e);
                    FB(a);
                    GB(a, b);
                    HB(a, b);
                    IB(a, c);
                    Rb('google_preview') && Z(a, 'gct', Qb('google_preview'));
                    zB(a, bf(c));
                    _.v(uo) ? zB(a, new D.Map([[
                            'expflags',
                            { value: _.bc(253) ? Bq(ko) || null : null }
                        ]])) : _.bc(253) && (g = Bq(ko)) && Z(a, 'expflags', g);
                    JB(a, b, c);
                    g = {};
                    g.u_tz = -new Date().getTimezoneOffset();
                    g.u_his = xn();
                    g.u_java = !!tl.navigator && 'unknown' !== typeof tl.navigator.javaEnabled && !!tl.navigator.javaEnabled && tl.navigator.javaEnabled();
                    tl.screen && (g.u_h = tl.screen.height, g.u_w = tl.screen.width, g.u_ah = tl.screen.availHeight, g.u_aw = tl.screen.availWidth, g.u_cd = tl.screen.colorDepth);
                    tl.navigator && tl.navigator.plugins && (g.u_nplug = tl.navigator.plugins.length);
                    tl.navigator && tl.navigator.mimeTypes && (g.u_nmime = tl.navigator.mimeTypes.length);
                    _.ec(g, function (l, m) {
                        Z(a, m, l, { da: !1 });
                    });
                    KB(a);
                    try {
                        var k = Bn();
                    } catch (l) {
                        k = '0';
                    }
                    Z(a, 'flash', k, {
                        da: !1,
                        ia: !0
                    });
                    LB(a, b, c);
                    (_.v(Pp) || Nb.L().j) && Z(a, 'rumc', h, { da: !1 });
                    _.v(Go) && Z(a, 'rume', 1, { da: !1 });
                    Z(a, 'vis', _.ut(e), { da: !1 });
                    0 === oB(_.bc(172)) || Z(a, 'stss', oB(_.bc(172)));
                    (null === (d = _.F.navigator) || void 0 === d ? 0 : d.deviceMemory) && Z(a, 'dmc', _.F.navigator.deviceMemory);
                    wB(a, c);
                    MB(a, b, c);
                    zB(a, mg(b, f, c));
                    0 < a.model.l.length && Z(a, 'psts', a.model.l);
                    xB(a);
                    yB(a, c);
                    _.v(Vn) && (Z(a, 'js', By(c)), Z(a, 'ms', Cy(h.toString(), c)));
                    NB(a, c, b);
                    OB(a, b, c);
                    PB(a);
                    'runAdAuction' in navigator && 'joinAdInterestGroup' in navigator && Z(a, 'td', 1);
                    QB(a);
                    RB(a);
                    SB(a);
                    Z(a, 'cbidsp', qf(b, a.N.P));
                }, PB = function (a) {
                    var b = a.model.B;
                    b && (Z(a, 'floc_id', b.id), Z(a, 'floc_ver', b.version));
                }, QB = function (a) {
                    var b = _.bc(251);
                    b && Z(a, 'uach', Nk(b, 3));
                }, RB = function (a) {
                    var b = DA();
                    (null === b || void 0 === b ? 0 : b.length) && Z(a, 'tt_state', Nk(JSON.stringify(b), 3));
                }, MB = function (a, b, c) {
                    var d, e = a.N.P, f = [], g = [];
                    b = _.H(b);
                    for (var h = b.next(); !h.done; h = b.next()) {
                        var k = h.value;
                        h = fd(k);
                        h = Bm((null === h || void 0 === h ? void 0 : h.parentElement) && hd(h.parentElement, c) || null);
                        if (!h || 1 === h[0] && 1 === h[3]) {
                            var l = fd(k), m = null !== (d = null === l || void 0 === l ? void 0 : l.parentElement) && void 0 !== d ? d : null;
                            h = Iv(m) || new _.Cl(0, 0);
                            pB(h, m, c);
                            m = Iv(fd(k)) || new _.Cl(0, 0);
                            pB(m, l, c, 1);
                            -1 === h.height && (m.height = -1);
                            _.v(So) && (l = _.H(ov(e[k.j])), k = l.next().value, l = l.next().value, 0 <= h.height && (h.width = Math.max(h.width, k), h.height = Math.max(h.height, l)), 0 <= m.height && (m.width = Math.max(m.width, k), m.height = Math.max(m.height, l)));
                            f.push(h.width + 'x' + h.height);
                            g.push(m.width + 'x' + m.height);
                        } else
                            f.push('-1x-1'), g.push('-1x-1');
                    }
                    Z(a, 'psz', f, { ua: '|' });
                    Z(a, 'msz', g, { ua: '|' });
                }, NB = function (a, b, c) {
                    var d = 0 !== Ad(), e = Hs(!0, b, d).width, f = [], g = [], h = [];
                    if (null !== b && b != b.top) {
                        var k = Hs(!1, b).width;
                        (-12245933 === e || -12245933 === k || k < e) && h.push(8);
                    }
                    -12245933 !== e && (1.5 * e < b.document.documentElement.scrollWidth ? h.push(10) : d && 1.5 * b.outerWidth < e && h.push(10));
                    c = _.H(c);
                    for (k = c.next(); !k.done; k = c.next()) {
                        d = new du();
                        var l = fd(k.value);
                        k = 0;
                        var m = !1, n = !1;
                        if (l)
                            for (var p = 0; l && 100 > p; p++, l = l.parentElement) {
                                var t = hd(l, b);
                                if (t) {
                                    if ('visible' !== t.overflowY) {
                                        d.set(2);
                                        var w = Iv(l);
                                        w && (k = k ? Math.min(k, w.width) : w.width);
                                        if (d.get(9))
                                            break;
                                    }
                                    kB(t) && d.set(9);
                                    'none' === t.display && d.set(7);
                                    'IFRAME' === l.nodeName && (w = parseInt(t.width, 10), w < e && (d.set(8), k = k ? Math.min(w, k) : w));
                                    n = n || 'scroll' === t.overflowX || 'auto' === t.overflowX;
                                    m = m || 'flex' === t.display;
                                } else
                                    d.set(3);
                            }
                        else
                            d.set(1);
                        n && m && d.set(11);
                        m = _.H(h);
                        for (n = m.next(); !n.done; n = m.next())
                            d.set(n.value);
                        f.push(eu(d));
                        g.push(k);
                    }
                    Z(a, 'fws', f);
                    Z(a, 'ohw', g);
                }, OB = function (a, b, c) {
                    try {
                        var d = Gs(c.top.document, c.top).y;
                        Z(a, 'btvi', b.map(function (e) {
                            var f, g = a.N, h = g.P[e.j];
                            g = rv(g.O, h);
                            e = null === (f = Ov(e, h, c.document, g)) || void 0 === f ? void 0 : f.y;
                            h = Hs(!0, c).height;
                            return void 0 === e || -12245933 === e || -12245933 === h ? -1 : e < d + h ? 0 : ++TB;
                        }), {
                            ia: !0,
                            ua: '|'
                        });
                    } catch (e) {
                    }
                }, UB = function (a, b) {
                    var c = a.N, d = c.O, e = c.P;
                    return _.v(bo) ? b.map(function (f) {
                        return pv(e[f.j], null);
                    }).join(',') : a.o ? b.map(function (f) {
                        var g = e[f.j];
                        g = _.v(co) ? pu(a.T, f) || pv(g, y(d, 6) || y(g, 17) ? null : fd(f)) : pv(g);
                        if (f = a.T.j.get(f))
                            f.Ia = g;
                        return g;
                    }).join(',') : b.map(function (f) {
                        var g = a.N.P[f.j];
                        g = pu(a.T, f) || pv(g, y(a.N.O, 6) || y(g, 17) ? null : fd(f));
                        if (f = a.T.j.get(f))
                            f.Ia = g;
                        return g;
                    }).join(',');
                }, LB = function (a, b, c) {
                    c = void 0 === c ? window : c;
                    var d = c.document;
                    b = (_.v(co) ? y(a.N.O, 6) : a.o) ? Ev(a.N.O) : Fv(a.N.P[b[0].j]) || Ev(a.N.O);
                    var e = Rb('google_preview'), f = e ? Pb(d.URL) : d.URL;
                    e = e ? Pb(d.referrer) : d.referrer;
                    d = !1;
                    if (null != b) {
                        var g = f;
                        Js(c) || (e = '', d = !_.v(pp) || !a.T.hb);
                    } else
                        b = f;
                    f = rB(c);
                    Z(a, 'nhd', f || null);
                    Z(a, 'url', b);
                    var h = b, k = _.bc(252) || {};
                    k.url = h;
                    _.O(Eq)[252] = k;
                    null != g && g !== b && Z(a, 'loc', g);
                    Z(a, 'ref', e);
                    f && (g = a.T.hb, g = void 0 === g ? '' : g, b = We(c.top) && c.top.location && c.top.location.href || '', e = c.location && c.location.ancestorOrigins || null, (c = b || g || Qm(c) || e && e[e.length - 1] || '') && Z(a, 'top', d ? Tl(c.match(_.Sl)[3] || null) : c));
                    Z(a, 'scar', a.model.C);
                }, BB = function (a) {
                    var b = Sb();
                    Z(a, 'vrg', b);
                }, GB = function (a, b) {
                    var c = a.N.P, d = b = b.map(function (e) {
                            return tg(c[e.j]).join('&');
                        });
                    d.join('|').length === b.length - 1 && (d = null);
                    Z(a, 'prev_scp', d, { ua: '|' });
                }, CB = function (a) {
                    var b = a.N.O;
                    0 !== sf(b, 24, 0) && Z(a, 'co', sf(b, 24, 0), { ia: !0 });
                }, DB = function (a) {
                    var b = ag(a.N.O) || new bg();
                    !0 === y(b, 1) && Z(a, 'rdp', '1');
                    !0 === y(b, 9) && Z(a, 'ltd', '1');
                    var c = J(a.ea, 2);
                    c && Z(a, 'gdpr_consent', c);
                    Ff(a.ea, 3) && (c = y(a.ea, 3), Z(a, 'gdpr', c ? '1' : '0', { ia: !0 }));
                    (c = J(a.ea, 4)) && Z(a, 'addtl_consent', c);
                    (c = J(a.ea, 7)) && Z(a, 'tcfe', c);
                    (c = J(a.ea, 1)) && Z(a, 'us_privacy', c);
                    (y(a.ea, 6) || y(b, 8)) && Z(a, 'npa', 1);
                    c = sf(b, 6, 2);
                    2 !== c && Z(a, 'tfua', c, { ia: !0 });
                    Ff(b, 5) && (b = J(b, 5), Z(a, 'tfcd', b, { ia: !0 }));
                }, FB = function (a) {
                    var b = a.N.O;
                    1 !== sf(b, 24, 0) && Ff(b, 16) && Z(a, 'ppid', J(b, 16), { ia: !0 });
                }, HB = function (a, b) {
                    var c = a.N, d = c.O, e = 1 !== a.model.Ea;
                    c = !!y(c.P[b[0].j], 17);
                    b = Gv(b, a.N);
                    d = y(d, 27) || !1;
                    var f = 3 === a.model.Ea, g = new du();
                    g.set(0, e);
                    g.set(1, c);
                    g.set(2, b);
                    g.set(3, d);
                    g.set(4, f);
                    e = eu(g);
                    0 < e && Z(a, 'eri', e);
                }, IB = function (a, b) {
                    var c = a.N.O, d = qB(c);
                    Z(a, 'cust_params', d, { ua: '&' });
                    if (_.v(to)) {
                        var e = a.l, f = a.ea;
                        var g = void 0 === g ? window : g;
                        0 === sf(c, 24, 0) && e ? (b = null === e || void 0 === e ? void 0 : mt(e, f), d = D.Map, e = [
                            'cookie_enabled',
                            {
                                value: !b && (null === e || void 0 === e ? 0 : nt(e, f)) ? '1' : null,
                                options: { ia: !0 }
                            }
                        ], f = g.document, g = (Ev(c) || Ug(g)) === f.URL ? '' : f.domain, g = new d([
                            [
                                'cookie',
                                {
                                    value: b,
                                    options: { ia: !0 }
                                }
                            ],
                            e,
                            [
                                'cdm',
                                { value: g }
                            ]
                        ])) : g = new D.Map();
                        zB(a, g);
                    } else
                        0 === sf(c, 24, 0) && (a.l && (g = mt(a.l, a.ea), Z(a, 'cookie', g, { ia: !0 }), !g && nt(a.l, a.ea) && Z(a, 'cookie_enabled', '1', { ia: !0 })), g = b.document, (g = (Ev(a.N.O) || Ug(b)) === g.URL ? '' : g.domain) && Z(a, 'cdm', g));
                    (c = J(c, 8)) ? (50 < c.length && (c = c.substring(0, 50)), c = 'a ' + Nk('role:1 producer:12 loc:"' + (c + '"'))) : c = '';
                    c && Z(a, 'uule', c);
                    c = new du();
                    _.F.SVGElement && _.F.document.createElementNS && c.set(0);
                    g = om();
                    g['allow-top-navigation-by-user-activation'] && c.set(1);
                    g['allow-popups-to-escape-sandbox'] && c.set(2);
                    _.F.crypto && _.F.crypto.subtle && c.set(3);
                    _.F.TextDecoder && _.F.TextEncoder && c.set(4);
                    c = eu(c);
                    Z(a, 'bc', c);
                }, VB = function (a, b) {
                    var c = a.N, d = c.P, e = new D.Map();
                    c = _.H(M(c.O, Jf, 14));
                    for (var f = c.next(); !f.done; f = c.next()) {
                        var g = f.value;
                        e.set((0, I.M)(Kf(g)), [J(g, 2)[0]]);
                    }
                    for (c = 0; c < b.length; c++) {
                        g = d[b[c].j];
                        if (!g)
                            return;
                        g = _.H(M(g, Jf, 3));
                        for (f = g.next(); !f.done; f = g.next()) {
                            var h = f.value;
                            f = (0, I.M)(Kf(h));
                            var k = e.get(f) || [];
                            h = J(h, 2)[0];
                            1 === b.length ? k[0] = h : h !== k[0] && (k[c + 1] = h);
                            e.set(f, k);
                        }
                    }
                    b = [];
                    d = _.H(_.u(e, 'keys').call(e));
                    for (c = d.next(); !c.done; c = d.next())
                        if (g = c.value, c = ru()[g])
                            g = e.get(g), 1 < g.length ? (g = g.map(function (l) {
                                return encodeURIComponent(l || '');
                            }).join(), b.push(c + ',' + g)) : 1 === g.length && 'url' !== c && Z(a, c, g[0]);
                    b.length && Z(a, 'sps', b.join('|'));
                }, JB = function (a, b, c) {
                    var d, e = c.document;
                    if (!Ev(a.N.O)) {
                        try {
                            var f = Math.round(Date.parse(c.document.lastModified) / 1000) || null;
                        } catch (t) {
                            f = null;
                        }
                        Z(a, 'lmt', f ? f.toString() : null);
                    }
                    Z(a, 'dt', new Date().getTime(), { da: !1 });
                    try {
                        f = nB;
                        var g = Math.min(bq('domLoading') || Infinity, bq('domInteractive') || Infinity);
                        var h = Infinity == g ? Math.max(bq('responseEnd'), bq('navigationStart')) : g;
                        0 < h && f >= h && (Z(a, 'dlt', h, { da: !1 }), Z(a, 'idt', f - h, { da: !1 }));
                    } catch (t) {
                        Z(a, 'idt', -9, { da: !1 }), t instanceof Error && Zb(479, t);
                    }
                    if (null !== (d = WB) && void 0 !== d)
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
                        g = Ks(c, c.document, 500, 300);
                        WB = h && !g;
                    }
                    WB || Z(a, 'ea', '0', { ia: !0 });
                    h = c.document;
                    g = Is(vn()).H;
                    g = Ls(g);
                    h = Ks(vn(), h, c.google_ad_width, c.google_ad_height);
                    g = g.jc;
                    f = vn();
                    f = f.top == f ? 0 : We(f.top) ? 1 : 2;
                    k = 4;
                    h || 1 != f ? h || 2 != f ? h && 1 == f ? k = 7 : h && 2 == f && (k = 8) : k = 6 : k = 5;
                    g && (k |= 16);
                    h = '' + k;
                    g = vn();
                    if (g != g.top)
                        for (; g && g != g.top && We(g) && !g.sf_ && !g.$sf && !g.inGptIF && !g.inDapIF; g = g.parent);
                    Z(a, 'frm', h || null);
                    if (h = Hs(!0, c))
                        a.N.Ua = h, Z(a, 'biw', h.width), Z(a, 'bih', h.height);
                    !Js(c) && (h = Hs(!1, c)) && (Z(a, 'isw', h.width), Z(a, 'ish', h.height));
                    a.model.o && Z(a, 'oid', a.model.o);
                    h = [];
                    g = [];
                    k = a.N;
                    f = k.O;
                    k = k.P;
                    n = _.H(b);
                    for (m = n.next(); !m.done; m = n.next()) {
                        m = m.value;
                        l = k[m.j];
                        var p = rv(f, l);
                        m = Ov(m, l, e, p);
                        a.o && (m = m || XB);
                        m && (h.push(Math.round(m.x)), g.push(Math.round(m.y)));
                        if (!a.o)
                            break;
                    }
                    Z(a, 'adxs', h);
                    Z(a, 'adys', g);
                    Z(a, 'adks', UB(a, b));
                    e = 0;
                    void 0 === _.F.postMessage && (e |= 1);
                    0 < e && Z(a, 'osd', e);
                    YB(a, b);
                    VB(a, b);
                    e = yn(c);
                    a.A ? Z(a, 'ifi', e) : (Z(a, 'ifi', e + 1), e = c, b = b.length, b = void 0 === b ? 1 : b, e = Ym(Xm(e)) || e, e.google_unique_id = (e.google_unique_id || 0) + b);
                    null !== c && c != c.top ? (b = [c.document.URL], c.name && b.push(c.name), c = Hs(!1, c, !1), b.push(c.width.toString()), b.push(c.height.toString()), c = dm(b.join(''))) : c = 0;
                    0 !== c && Z(a, 'ifk', c.toString());
                }, KB = function (a) {
                    var b = _.F.devicePixelRatio;
                    (b = 'number' === typeof b ? +b.toFixed(3) : null) && Z(a, 'u_sd', b, { da: !1 });
                }, AB = function (a) {
                    Z(a, 'eid', a.model.G);
                    var b = aq().split(',');
                    b && Z(a, 'debug_experiment_id', b);
                }, EB = function (a, b, c) {
                    for (var d = _.H(b), e = d.next(); !e.done; e = d.next())
                        ZB(a, e.value.getAdUnitPath());
                    d = a.N;
                    var f = d.O, g = d.P;
                    d = b.map(function (k) {
                        return g[k.j];
                    });
                    Z(a, 'iu_parts', a.m);
                    Z(a, 'enc_prev_ius', a.B);
                    Z(a, 'prev_iu_szs', d.map(function (k) {
                        return nv(k);
                    }).join());
                    d.some(function (k) {
                        return (L = id(k), _.u(L, 'includes')).call(L, 'fluid');
                    }) && (e = d.map(function (k) {
                        return (L = id(k), _.u(L, 'includes')).call(L, 'fluid') ? 'height' : '0';
                    }), Z(a, 'fluid', e));
                    Z(a, 'fsfs', of(b, function (k) {
                        var l;
                        k = g[k.j];
                        return Number(null !== (l = null === k || void 0 === k ? void 0 : y(k, 12)) && void 0 !== l ? l : y(f, 13));
                    }, 0));
                    Z(a, 'fsbs', of(b, function (k) {
                        var l = a.N.P[k.j];
                        k = a.N.O.Aa();
                        l = null === l || void 0 === l ? void 0 : l.Aa();
                        return (null === l || void 0 === l ? 0 : y(l, 3)) || (null === k || void 0 === k ? 0 : y(k, 3)) ? 1 : 0;
                    }, 0));
                    zB(a, fg(a.T, b, a.A));
                    $B(a, g[b[0].j]);
                    zB(a, Xf(b, g, c));
                    zB(a, Yf(d));
                    b = {};
                    c = _.H(d);
                    for (d = c.next(); !d.done; d = c.next())
                        (d = J(d.value, 7)) && (b[d] = (b[d] || 0) + 1);
                    if (!am(b)) {
                        c = new cc('gpt_sra_setclickurl');
                        var h = [];
                        _.ec(b, function (k, l) {
                            h.push(String(l.length) + ':' + String(k));
                        });
                        r(c, 'lenfreqs', h.join());
                        dc(c);
                        fc(c, _.bc(58));
                    }
                }, $B = function (a, b) {
                    (_.v(co) ? y(a.N.O, 6) : a.o) || !J(b, 7) || Z(a, 'click', J(b, 7));
                }, aC = function (a, b) {
                    for (var c = 0; c < b.length; c++)
                        if ('' !== b[c]) {
                            for (var d = !1, e = 0; e < a.m.length; e++)
                                if (b[c] === a.m[e]) {
                                    d = !0;
                                    break;
                                }
                            d || a.m.push(b[c]);
                        }
                }, bC = function (a, b) {
                    for (var c = '', d = 0; d < b.length; d++) {
                        if (0 < d)
                            c += '/';
                        else if ('' === b[0])
                            continue;
                        for (var e = 0; e < a.m.length; e++)
                            if (b[d] === a.m[e]) {
                                c += e;
                                break;
                            }
                    }
                    return c;
                }, ZB = function (a, b) {
                    var c = '';
                    '' !== b && (b = b.split('/').map(function (d) {
                        return d.replace(/,/g, ':');
                    }), aC(a, b), c = bC(a, b));
                    a.B.push(c);
                }, YB = function (a, b) {
                    var c;
                    b = null !== (c = b.map(function (d) {
                        return XA(a.model, d);
                    })) && void 0 !== c ? c : [];
                    Z(a, 'ucis', b, { ua: '|' });
                }, SB = function (a) {
                    if (!_.v(Bp)) {
                        var b = Dc(a.ea, window);
                        if (b) {
                            var c = new Ow();
                            var d = _.gc(Ep), e = [], f = /^_GESPSK-(.+)$/;
                            try {
                                for (var g = 0; g < b.length; g++) {
                                    var h = (f.exec(b.key(g)) || [])[1];
                                    h && e.push(h);
                                }
                            } catch (k) {
                            }
                            e = _.H(e);
                            for (f = e.next(); !f.done; f = e.next())
                                if (f = f.value, g = ve().get(f, b), g.getError())
                                    $d(g.getError(), f, g.errorMessage);
                                else if (g = g.Xb)
                                    if (h = we(g), 0 === h || 1 === h)
                                        h = J(g, 2), 0 <= d && h && h.length > d ? $d(12, f) : (Nf(c, 2, g, Sw), $d(19, f));
                            M(c, Sw, 2).length ? (b = new Of(), d = M(c, Pw, 1), 0 < d.length && Yk(b, 1, d, Rw), d = M(c, Sw, 2), 0 < d.length && Yk(b, 2, d, Tw), c = Qf(b), c = Ka(c, 2)) : c = null;
                        } else
                            c = null;
                        Z(a, 'a3p', c);
                    }
                }, Z = function (a, b, c, d) {
                    d = void 0 === d ? {} : d;
                    a.J.has(b) || null == c || a.C.push({
                        ce: b,
                        value: c,
                        options: d
                    });
                }, zB = function (a, b) {
                    b = _.H(_.u(b, 'entries').call(b));
                    for (var c = b.next(); !c.done; c = b.next()) {
                        var d = _.H(c.value);
                        c = d.next().value;
                        d = d.next().value;
                        Z(a, c, d.value, d.options);
                    }
                }, uB = function (a) {
                    var b = a.value, c = a.options, d = void 0 === c.da ? !0 : c.da;
                    a = void 0 === c.ua ? ',' : c.ua;
                    c = void 0 === c.ia ? !1 : c.ia;
                    return 'object' !== typeof b ? null == b || !c && 0 === b ? null : cC(b, d) : Array.isArray(b) && b.length ? b.map(function (e) {
                        return cC(e, d);
                    }).join(cC(a, d)) : null;
                }, XB = new _.ld(-9, -9), TB = 0, WB = null, cC = function (a, b) {
                    a = a.toString();
                    return b ? encodeURIComponent(a) : a;
                };
            var fC = function (a) {
                    var b = this;
                    this.j = new D.Map();
                    this.m = new D.Map();
                    this.zc = Nb.L();
                    if (window.performance && af(window.performance.now)) {
                        var c = sc(334, function () {
                            for (var d = _.H(b.j), e = d.next(); !e.done; e = d.next()) {
                                var f = _.H(e.value);
                                e = f.next().value;
                                f = f.next().value;
                                dC(b, e, f) && b.j.delete(e);
                            }
                        });
                        _.Hd(window, 'DOMContentLoaded', c);
                        Wq(a, cr, function (d) {
                            var e = d.detail;
                            d = e.xc;
                            e = e.P;
                            return void eC(b, (0, I.M)(cw(_.O(Qh), d)), (0, I.M)(J(e, 20)));
                        });
                        Wq(a, dr, function (d) {
                            var e = d.detail;
                            d = e.xc;
                            e = e.P;
                            d = (0, I.M)(cw(_.O(Qh), d));
                            e = (0, I.M)(J(e, 20));
                            var f = b.m.get(d);
                            null != f ? tA(f, e) : eC(b, d, e);
                        });
                    }
                }, eC = function (a, b, c) {
                    dC(a, b, c) ? a.j.delete(b) : (a.j.set(b, c), _.Xg(b, function () {
                        a.j.delete(b);
                    }));
                }, dC = function (a, b, c) {
                    var d = fd(b);
                    if (d && 'DIV' === d.nodeName) {
                        var e = _.v(Pp);
                        d = new rA({
                            H: window,
                            zc: a.zc,
                            fb: d,
                            va: function (f) {
                                Zb(336, f, 1);
                            },
                            qe: e
                        });
                        if (d.m)
                            return tA(d, c), a.m.set(b, d), ju(gu.L(), b, function () {
                                return void a.m.delete(b);
                            }), !0;
                    }
                    return !1;
                };
            var gC = function (a, b, c) {
                    for (var d = 100; a && a != b && --d;)
                        _.xm(a, c), a = a.parentElement;
                }, hC = function (a, b, c, d, e) {
                    _.xm(a, {
                        'margin-left': '0px',
                        'margin-right': '0px'
                    });
                    var f = {};
                    _.v(On) || (f['z-index'] = '0', 'absolute' !== d.position && 'fixed' !== d.position && 'relative' !== d.position && (f.position = 'relative'));
                    var g = 'rtl' == d.direction, h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
                    d = function () {
                        var k = a.getBoundingClientRect().left;
                        return g ? h - k : k - h;
                    };
                    b = d();
                    0 !== b && (c = function (k) {
                        g ? f['margin-right'] = k + 'px' : f['margin-left'] = k + 'px';
                    }, c(-b), _.xm(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.xm(a, f)));
                    return !0;
                }, jC = function (a, b, c, d, e, f, g, h) {
                    var k = nv(c);
                    c = sc(459, function () {
                        return iC(a, b, d, e, f, k, g, h);
                    });
                    _.F.setTimeout(c, 500);
                }, iC = function (a, b, c, d, e, f, g, h) {
                    if (_.F.IntersectionObserver) {
                        var k = null, l = Uv(b, a) || fd(b, a), m = sc(459, function (n) {
                                if (n = n && n[0]) {
                                    var p = n.boundingClientRect, t = window.innerWidth, w = Math.round(p.left), B = Math.round(p.right), K = 0 > w + 2, G = 0 < B - (t + 2);
                                    if (n.intersectionRatio >= 1 - ((0 <= Math.round(p.left) ? 0 : 2) + (Math.round(p.right) <= window.innerWidth ? 0 : 2)) / d || K || G)
                                        uc(g, function (Q) {
                                            if (K || G) {
                                                var aa = new du();
                                                aa.set(8);
                                                kC(l) && aa.set(10);
                                                aa = eu(aa);
                                            } else
                                                aa = lC(a, b);
                                            var da = mC(b, l, e), va = da.Rd;
                                            da = da.Td;
                                            dc(Q);
                                            r(Q, 'qid', h);
                                            r(Q, 'iu', b.getAdUnitPath());
                                            r(Q, 'e', String(aa));
                                            K && r(Q, 'ofl', String(w));
                                            G && r(Q, 'ofr', String(B - t));
                                            r(Q, 'ret', d + 'x' + e);
                                            r(Q, 'req', f);
                                            r(Q, 'bm', String(c));
                                            r(Q, 'efh', Number(va));
                                            r(Q, 'stk', Number(da));
                                            r(Q, 'ifi', yn(window));
                                        }, { qa: _.gc(Nn) }), k && k.unobserve(l);
                                }
                            });
                        l && (k = new _.F.IntersectionObserver(m, { threshold: [1] }), k.observe(l));
                    }
                }, lC = function (a, b) {
                    var c = Uv(b, a) || fd(b, a), d = new du();
                    try {
                        var e = function (aa, da) {
                                return a.elementsFromPoint(aa, da);
                            }, f = c.getBoundingClientRect(), g = f.left, h = f.top, k = f.width, l = f.height, m = fd(b, a), n = hd(m, window);
                        if ('hidden' == n.visibility || 'none' == n.display)
                            return eu(d);
                        var p = parseInt(n['border-top-width'] || 0, 10) + 1;
                        b = g + k;
                        l = h + l;
                        var t = e(g + p + 2, h + p);
                        var w = e(b - p - 2, h + p);
                        var B = e(b - p - 2, l - p);
                        var K = e(g + p + 2, l - p);
                        var G = e(b / 2, l - p);
                    } catch (aa) {
                        return d.set(1), eu(d);
                    }
                    if (!(t && t.length && w && w.length && B && B.length && K && K.length && G && G.length))
                        return d.set(7), eu(d);
                    e = function (aa, da) {
                        for (var va = !1, Fa = 0; Fa < aa.length; Fa++) {
                            var eb = aa[Fa];
                            if (va) {
                                var fb = hd(eb, window);
                                if ('hidden' != fb.visibility && !zm(eb) && !Q(c, eb)) {
                                    d.set(da);
                                    'absolute' == fb.position && d.set(11);
                                    break;
                                }
                            } else
                                c == eb && (va = !0);
                        }
                    };
                    Am(c) && d.set(9);
                    var Q = function (aa, da) {
                        return sm(aa, da) || sm(da, aa);
                    };
                    g = t[0];
                    c == g || Q(c, g) || zm(g) || d.set(2);
                    g = w[0];
                    c == g || Q(c, g) || zm(g) || d.set(3);
                    g = B[0];
                    c == g || Q(c, g) || zm(g) || d.set(4);
                    g = K[0];
                    c == g || Q(c, g) || zm(g) || d.set(5);
                    if (zm(c))
                        return eu(d);
                    e(t, 12);
                    e(w, 13);
                    e(B, 14);
                    e(K, 15);
                    e(G, 6);
                    return eu(d);
                }, kC = function (a) {
                    var b = !1, c = !1;
                    return ym(a, function (d) {
                        c = c || 'scroll' == d.overflowX || 'auto' == d.overflowX;
                        return (b = b || 'flex' == d.display) && c;
                    });
                }, mC = function (a, b, c) {
                    var d = (a = fd(a)) && hd(a, window), e = d ? 'absolute' != d.position : !0, f = !1, g = a && a.parentElement, h = !1;
                    Rf(b, function (k) {
                        var l = k.style;
                        if (e)
                            if (h || (h = k == g))
                                e = ly(k, _.F, !0, -1, -1);
                            else {
                                l = l && l.height;
                                var m = (l && _.u(l, 'endsWith').call(l, 'px') ? parseInt(l, 10) : 0) >= c;
                                !l || m || 'string' === typeof l && _.u(iy, 'includes').call(iy, l) || (e = !1);
                            }
                        f || (k = hd(k, _.F), 'sticky' != k.position && 'fixed' != k.position) || (f = !0);
                        return !(f && !e);
                    }, 100);
                    return {
                        Rd: e,
                        Td: f
                    };
                }, nC = function (a, b, c) {
                    (L = id(b), _.u(L, 'includes')).call(L, 'fluid') && setTimeout(function () {
                        uc('gpt_fluid_sz', function (d) {
                            var e = Uv(a, document);
                            e = e ? un(e) : null;
                            r(d, 'sz', e ? e.width + 'x' + e.height : 'null');
                            r(d, 'qqid', c);
                        });
                    }, 250);
                };
            var oC = new D.Map([[
                        2,
                        { ae: 'page_level_ads' }
                    ]]), pC = function () {
                }, sC;
            pC.L = function () {
                throw Error('Must be overridden');
            };
            _.qC = function (a) {
                this.j = a = void 0 === a ? oC : a;
                this.m = new D.Map();
                this.loaded = new D.Set();
                this.o = null;
            };
            _.P(_.qC, pC);
            _.rC = function (a, b) {
                b = b.module;
                a.m.has(b) || a.m.set(b, new Ge());
                return (0, I.M)(a.m.get(b));
            };
            sC = function (a, b) {
                var c = b.module;
                b = '_gpt_js_load_' + c + '_';
                var d = sc(340, function (e) {
                    if (a.j.has(c) && 'function' === typeof e) {
                        var f = (0, I.M)(a.j.get(c));
                        f = (void 0 === f.td ? [] : f.td).map(function (g) {
                            return _.rC(a, g).promise;
                        });
                        D.Promise.all(f).then(function () {
                            e.call(window, _);
                        });
                    }
                });
                Object.defineProperty(rh(), b, {
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
            _.qC.prototype.load = function (a) {
                var b, c = _.rC(this, a), d = (null !== (b = this.j.get(a.module)) && void 0 !== b ? b : {}).ae;
                if (!d)
                    throw Error('cannot load invalid module: ' + d);
                if (!this.loaded.has(a.module)) {
                    var e = _.bc(172);
                    e = e && 'pagead2.googlesyndication.com' === Tl((e.src || '').match(_.Sl)[3] || null);
                    var f = (0, I.M)(this.o);
                    d = rj(kb(e ? f.nd(d) : f.od(d)).toString());
                    d = (e = _.gc(jp)) ? tj(d, { cb: e }) : d;
                    sC(this, a);
                    Yl(document, d);
                    this.loaded.add(a.module);
                }
                return c.promise;
            };
            Pi(_.qC);
            var tC = function (a, b, c, d, e, f, g, h) {
                Y.call(this, 682);
                this.T = a;
                this.format = b;
                this.slotId = c;
                this.H = d;
                this.D = Kt(this);
                this.l = W(this, e);
                this.A = V(this, f);
                this.F = V(this, g);
                this.B = W(this, h);
            };
            _.P(tC, Y);
            tC.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f, g, h, k, l, m, n, p;
                    return A(b, function (t) {
                        d = c;
                        if (2 !== c.format && 3 !== c.format || !Gt(c.l) || !kl(c.l.value, 12, !1))
                            return t.return();
                        e = (0, I.M)(c.B.value);
                        f = e.Fd;
                        g = _.lu(c.T, c.slotId);
                        h = c.F.value;
                        k = c.A.value;
                        _.xm(k, {
                            'max-height': '30vh',
                            overflow: 'hidden'
                        });
                        if (uC)
                            uC.yc(k);
                        else {
                            uC = new f(c.format, k, c.H, h, c.T, c.slotId);
                            l = {};
                            m = _.H(M(c.l.value, Iw, 13));
                            for (n = m.next(); !n.done; n = m.next())
                                p = n.value, l[J(p, 1)] = J(p, 2);
                            uC.Ac(l);
                            uC.xa();
                            iu(c.T, c.slotId, function () {
                                uC && (uC.za(), uC = null);
                                g && _.nu(d.T, d.slotId);
                            });
                        }
                        _.Xg(c, function () {
                            return _.Ol(k);
                        });
                        c.D.notify();
                        Bi(t);
                    });
                });
            };
            var uC = null;
            var vC = function (a, b, c, d, e, f, g, h) {
                Y.call(this, 683);
                this.slotId = a;
                this.format = b;
                this.W = c;
                this.A = W(this, d);
                this.l = V(this, e);
                this.K = V(this, f);
                this.B = W(this, g);
                this.F = W(this, h);
                this.R = Hg(a, Ig, function (k) {
                    k = k.detail;
                    try {
                        var l = JSON.parse(k.data);
                        return 'sth' === l.googMsgType && 'i-adframe-load' === l.msg_type;
                    } catch (m) {
                        return !1;
                    }
                });
            };
            _.P(vC, Y);
            vC.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f, g, h, k, l, m, n;
                    return A(b, function (p) {
                        if (1 == p.j) {
                            d = c;
                            e = c.A.value;
                            if (!e || 5 !== c.format)
                                return p.return();
                            f = c.K.value;
                            g = c.l.value;
                            h = (0, I.M)(c.F.value);
                            k = h.Md;
                            l = new _.gz();
                            m = new k(window, g, f, l, c.W, Gg(M(e, Iw, 13)), '6499' === Lb(c.slotId.getAdUnitPath()), function () {
                                return void d.za();
                            }, c.B.value);
                            _.Sq(c, m);
                            n = _.gc(Co);
                            switch (n) {
                            case 0:
                                m.xa();
                                break;
                            case 1:
                                p.j = 2;
                                return;
                            }
                        } else {
                            if (4 != p.j)
                                return C(p, c.R, 4);
                            if (c.m)
                                return p.return();
                            m.xa();
                        }
                        p.j = 0;
                    });
                });
            };
            var wC = function () {
                this.module = 2;
            };
            wC.prototype.toString = function () {
                return String(this.module);
            };
            _.xC = new wC();
            var yC = function (a, b, c) {
                Y.call(this, 846);
                this.format = a;
                this.D = U(this);
                this.l = W(this, b);
                this.A = W(this, c);
            };
            _.P(yC, Y);
            yC.prototype.j = function () {
                var a;
                return z(this, function c() {
                    var d = this, e, f, g, h;
                    return A(c, function (k) {
                        if (1 == k.j) {
                            e = (2 === d.format || 3 === d.format) && !(null === (a = d.l.value) || void 0 === a || !kl(a, 12, !1));
                            f = 5 === d.format && d.A.value;
                            if (!e && !f) {
                                Dt(d.D);
                                k.j = 0;
                                return;
                            }
                            g = d.D;
                            h = g.j;
                            return C(k, _.qC.L().load(_.xC), 3);
                        }
                        h.call(g, k.m);
                        Bi(k);
                    });
                });
            };
            var zC = function (a, b, c) {
                Y.call(this, 696);
                this.slotId = a;
                this.la = b;
                Mt(this, c);
                this.l = new D.Promise(function (d) {
                    var e = [
                        'canceled',
                        'ha_before_make_visible'
                    ];
                    _.v(vh) || e.push('closed');
                    e = _.H(e);
                    for (var f = e.next(); !f.done; f = e.next())
                        Jg(a, f.value).then(d);
                });
            };
            _.P(zC, Y);
            zC.prototype.j = function () {
                return z(this, function b() {
                    var c = this;
                    return A(b, function (d) {
                        switch (d.j) {
                        case 1:
                            return C(d, c.l, 2);
                        case 2:
                            if (c.m)
                                return d.return();
                            if (_.v(vh)) {
                                d.j = 3;
                                break;
                            }
                            return C(d, c.la.dispatchEvent('rewardedSlotCanceled', 703, new mw(c.slotId, 'publisher_ads')), 3);
                        case 3:
                            return C(d, c.la.dispatchEvent('rewardedSlotClosed', 703, new nw(c.slotId, 'publisher_ads')), 5);
                        case 5:
                            c.za(), Bi(d);
                        }
                    });
                });
            };
            var AC = function (a, b, c) {
                Y.call(this, 697);
                this.slotId = a;
                this.la = b;
                this.l = Jg(a, 'completed');
                Mt(this, c);
            };
            _.P(AC, Y);
            AC.prototype.j = function () {
                return z(this, function b() {
                    var c = this;
                    return A(b, function (d) {
                        if (1 == d.j)
                            return C(d, c.l, 2);
                        if (3 != d.j)
                            return c.m ? d.return() : C(d, c.la.dispatchEvent('rewardedSlotCompleted', 704, new ow(c.slotId, 'publisher_ads')), 3);
                        c.za();
                        Bi(d);
                    });
                });
            };
            var BC = function (a, b, c) {
                Y.call(this, 694);
                this.slotId = a;
                this.la = b;
                Mt(this, c);
                this.l = Jg(a, 'granted');
            };
            _.P(BC, Y);
            BC.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e;
                    return A(b, function (f) {
                        if (1 == f.j)
                            return C(f, c.l, 2);
                        if (3 != f.j)
                            return d = f.m, e = d.payload, c.m ? f.return() : C(f, c.la.dispatchEvent('rewardedSlotGranted', 702, new lw(c.slotId, 'publisher_ads', null !== e && void 0 !== e ? e : null)), 3);
                        c.za();
                        Bi(f);
                    });
                });
            };
            var CC = {
                    width: '100%',
                    height: '100%',
                    left: '0',
                    top: '0'
                }, DC = function (a, b, c, d, e) {
                    Y.call(this, 693);
                    this.H = a;
                    this.F = e;
                    this.D = Kt(this);
                    this.l = V(this, b);
                    this.A = V(this, c);
                    Mt(this, d);
                    this.B = new _.oz(this.H);
                };
            _.P(DC, Y);
            DC.prototype.j = function () {
                var a = this;
                if (!this.F.A) {
                    var b = 0 === Ad() ? 'rgba(1,1,1,0.5)' : 'white';
                    _.xm(this.A.value, _.u(Object, 'assign').call(Object, {
                        'background-color': b,
                        opacity: '1',
                        position: 'fixed',
                        margin: '0',
                        padding: '0',
                        'z-index': '2147483647',
                        display: 'block'
                    }, CC));
                    _.Xg(this, _.uz(this.H.document, this.H));
                    Ql(this.l.value).postMessage(JSON.stringify({
                        type: 'rewarded',
                        message: 'visible'
                    }), '*');
                    if (this.H === this.H.top) {
                        this.H.location.hash = 'goog_rewarded';
                        var c = new sz(this.B);
                        null == c.j && (c.j = qz(c.m));
                        _.Xg(this, function () {
                            if (null != c.j) {
                                var d = c.m;
                                delete d.j.maxZIndexRestrictions[c.j];
                                pz(d);
                                c.j = null;
                            }
                            'goog_rewarded' === a.H.location.hash && (a.H.location.hash = '');
                        });
                    }
                    this.D.notify();
                }
            };
            var EC = function (a, b, c) {
                Y.call(this, 695);
                this.H = a;
                this.l = V(this, b);
                Mt(this, c);
            };
            _.P(EC, Y);
            EC.prototype.j = function () {
                if (this.H === this.H.top)
                    var a = (0, I.M)(Ql(this.l.value)), b = sv(this, 503, this.H, 'hashchange', function (c) {
                            wj(c.oldURL, '#goog_rewarded') && (a.postMessage(JSON.stringify({
                                type: 'rewarded',
                                message: 'back_button'
                            }), '*'), b());
                        });
            };
            var FC = function (a, b, c) {
                Y.call(this, 692);
                this.slotId = a;
                this.la = b;
                this.D = Kt(this);
                this.l = V(this, c);
            };
            _.P(FC, Y);
            FC.prototype.j = function () {
                var a;
                return z(this, function c() {
                    var d = this, e, f, g, h;
                    return A(c, function (k) {
                        if (1 == k.j)
                            return e = d.l.value, f = new Ge(), g = f.promise, h = f.resolve, d.la.dispatchEvent('rewardedSlotReady', 701, new kw(d.slotId, 'publisher_ads', h, null !== (a = e.payload) && void 0 !== a ? a : null)), C(k, g, 2);
                        if (d.m)
                            return k.return();
                        d.D.notify();
                        d.za();
                        Bi(k);
                    });
                });
            };
            var GC = {
                    width: '100%',
                    height: '100%',
                    left: '0',
                    top: '0'
                }, HC = {
                    width: '60%',
                    height: '60%',
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    top: '50%'
                }, IC = function (a, b) {
                    Y.call(this, 691);
                    var c = this;
                    this.A = U(this);
                    this.l = Kt(this);
                    this.B = V(this, b);
                    this.F = Jg(a, 'prefetched');
                    Jg(a, 'ha_before_make_visible').then(function () {
                        return void c.l.notify();
                    });
                };
            _.P(IC, Y);
            IC.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d;
                    return A(b, function (e) {
                        if (1 == e.j) {
                            if (c.l.A)
                                return e.return();
                            _.xm(c.B.value, _.u(Object, 'assign').call(Object, { position: 'absolute' }, 0 === Ad() ? HC : GC));
                            return C(e, c.F, 2);
                        }
                        d = e.m;
                        if (c.m)
                            return e.return();
                        c.A.j(d);
                        Bi(e);
                    });
                });
            };
            var JC = function (a, b, c, d, e, f) {
                Y.call(this, 688);
                if (4 === b) {
                    this.l = new le();
                    _.Sq(this, this.l);
                    var g = new IC(a, e);
                    X(this.l, g);
                    b = new FC(a, c, g.A);
                    X(this.l, b);
                    f = new DC(d, e, f, b.D, g.l);
                    X(this.l, f);
                    X(this.l, new EC(d, e, f.D));
                    X(this.l, new BC(a, c, b.D));
                    X(this.l, new zC(a, c, b.D));
                    X(this.l, new AC(a, c, b.D));
                }
            };
            _.P(JC, Y);
            JC.prototype.j = function () {
                var a;
                null === (a = this.l) || void 0 === a ? void 0 : ne(a);
            };
            var Kg = '3rd party ad content';
            var KC = function () {
                    this.j = {};
                }, LC = function (a, b, c) {
                    if (!_.v(np)) {
                        var d;
                        c && (d = '//' + c + '.safeframe.googlesyndication.com');
                        c = Sz(b, fv(), gv(), !0, d);
                        a.j[c] || (a.j[c] = 1, rh().fifWin || (b = b.document, a = b.createElement('IFRAME'), a.src = c, a.style.visibility = 'hidden', a.style.display = 'none', b = b.getElementsByTagName('script'), 0 < b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling))));
                    }
                };
            var MC = function (a, b, c) {
                Y.call(this, 706);
                this.H = a;
                this.D = U(this);
                this.l = W(this, b);
                Mt(this, c);
            };
            _.P(MC, Y);
            MC.prototype.j = function () {
                var a = this.l.value;
                this.D.m(a ? Dc(a, this.H) : null);
            };
            var NC = function (a, b, c, d, e) {
                Y.call(this, 876);
                this.K = a;
                this.A = b;
                this.l = U(this);
                this.B = W(this, c);
                this.F = W(this, d);
                this.R = W(this, e);
            };
            _.P(NC, Y);
            NC.prototype.j = function () {
                var a, b;
                return z(this, function d() {
                    var e, f = this, g, h;
                    return A(d, function (k) {
                        e = new kt();
                        g = null === (a = f.K) || void 0 === a ? void 0 : y(a, 9);
                        h = f.R.value;
                        if (null != h) {
                            var l;
                            if (l = !g) {
                                var m = void 0 === m ? !1 : m;
                                if (Us(h))
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
                                        0 === l ? n = !1 : h.purpose && h.vendor ? (l = h.vendor.consents, (n = !(!l || !l[void 0 === n ? '755' : n])) && h.purposeOneTreatment && ('DE' === h.publisherCC || _.v(vp) && 'CH' === h.publisherCC) ? n = !0 : n && (n = h.purpose.consents, n = !(!n || !n['1']))) : n = !0;
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
                            'tcunavailable' === h.tcString ? f.A.info(ss('failed')) : f.A.info(ss('succeeded'));
                        } else
                            E(e, 5, !g);
                        f.F.value && E(e, 1, f.F.value);
                        null != f.B.value && E(e, 6, f.B.value);
                        f.l.j(e);
                        Bi(k);
                    });
                });
            };
            var OC = function (a, b, c, d) {
                d = void 0 === d ? Ng : d;
                Y.call(this, 886);
                this.Y = a;
                this.T = b;
                this.N = c;
                this.l = d;
                this.D = Kt(this);
            };
            _.P(OC, Y);
            OC.prototype.j = function () {
                var a;
                return z(this, function c() {
                    var d = this, e, f, g, h, k;
                    return A(c, function (l) {
                        if (1 == l.j) {
                            e = d.N;
                            f = e.O;
                            g = null !== (a = N(f, Su, 5)) && void 0 !== a ? a : new Su();
                            h = Fg(g);
                            if (null == h)
                                return d.D.notify(), l.return();
                            k = d.Y.every(function (m) {
                                return kd(fd(m));
                            });
                            return k ? C(l, PC(d, h), 2) : (d.D.notify(), l.return());
                        }
                        d.D.notify();
                        Bi(l);
                    });
                });
            };
            var PC = function (a, b) {
                return z(a, function d() {
                    var e = this, f;
                    return A(d, function (g) {
                        f = e;
                        return g.return(new D.Promise(function (h) {
                            var k = f.l(function (p, t) {
                                p.some(function (w) {
                                    return 0 < w.intersectionRatio;
                                }) && (t.disconnect(), h());
                            }, b + '%');
                            _.Xg(f, function () {
                                k.disconnect();
                            });
                            for (var l = {}, m = _.H(f.Y), n = m.next(); !n.done; l = { Xa: l.Xa }, n = m.next())
                                n = n.value, l.Xa = fd(n), l.Xa && (k.observe(l.Xa), ju(f.T, n, function (p) {
                                    return function () {
                                        k.unobserve(p.Xa);
                                    };
                                }(l)));
                        }));
                    });
                });
            };
            var QC = function (a, b, c, d, e, f) {
                f = void 0 === f ? Og : f;
                Y.call(this, 879);
                this.Da = a;
                this.A = b;
                this.H = d;
                this.F = e;
                this.K = f;
                this.l = U(this);
                this.B = null;
                _.bc(260) && (this.B = V(this, c));
            };
            _.P(QC, Y);
            QC.prototype.j = function () {
                var a, b;
                return z(this, function d() {
                    var e = this, f;
                    return A(d, function (g) {
                        if (1 == g.j) {
                            var h = e.F;
                            h = void 0 === h ? _.F.top : h;
                            h = pm(h, 'googlefcPresent');
                            var k = e.H;
                            k = void 0 === k ? _.F : k;
                            k.googlefc && !h && e.K(e.Da);
                            if (null !== (b = null === (a = e.B) || void 0 === a ? void 0 : a.value) && void 0 !== b ? !b : !Zt(e.A)) {
                                Dt(e.l);
                                g.j = 0;
                                return;
                            }
                            return C(g, bu(e.A, 'loaded'), 3);
                        }
                        f = g.m;
                        e.l.j(f);
                        Bi(g);
                    });
                });
            };
            var RC = function (a, b, c, d) {
                Y.call(this, 877);
                this.Da = a;
                this.A = b;
                this.F = c;
                this.l = U(this);
                this.B = W(this, d);
            };
            _.P(RC, Y);
            RC.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e;
                    return A(b, function (f) {
                        if (1 == f.j)
                            return d = c.B.value, C(f, cu(c.A, d, c.Da, c.F), 2);
                        e = f.m;
                        c.l.m(e);
                        Bi(f);
                    });
                });
            };
            var SC = function (a, b) {
                Y.call(this, 874);
                this.H = a;
                this.l = U(this);
                Mt(this, b);
            };
            _.P(SC, Y);
            SC.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f;
                    return A(b, function (g) {
                        d = c;
                        e = new Qs(c.H, -1);
                        _.Sq(c, e);
                        if (!Ss(e))
                            return Dt(c.l), g.return();
                        Lc().info(rs());
                        f = sc(661, function (h) {
                            d.l.m(h);
                        });
                        Vs(e, f);
                        Bi(g);
                    });
                });
            };
            var TC = function (a, b, c) {
                Y.call(this, 875);
                this.A = a;
                this.H = b;
                this.l = U(this);
                Mt(this, c);
            };
            _.P(TC, Y);
            TC.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f;
                    return A(b, function (g) {
                        d = c;
                        e = new vz(c.H);
                        _.Sq(c, e);
                        if (!xz(e))
                            return Dt(c.l), g.return();
                        f = sc(660, function (h) {
                            h && 'string' === typeof h.uspString ? d.l.j(h.uspString) : Dt(d.l);
                        });
                        c.A.info(qs());
                        zz(e, f);
                        Bi(g);
                    });
                });
            };
            var UC = function (a, b, c) {
                c = void 0 === c ? Tg : c;
                Y.call(this, 883);
                this.B = a;
                this.F = c;
                this.l = Kt(this);
                this.A = V(this, b);
            };
            _.P(UC, Y);
            UC.prototype.j = function () {
                return z(this, function b() {
                    var c = this;
                    return A(b, function (d) {
                        if (1 == d.j) {
                            if (!y(c.A.value, 5) || _.v(Zf))
                                return c.l.notify(), d.return();
                            _.v(Ao) || $y(c.B);
                            if (!c.F()) {
                                cz(null);
                                d.j = 2;
                                return;
                            }
                            return C(d, new D.Promise(function (e) {
                                return void cz(e);
                            }), 2);
                        }
                        c.l.notify();
                        Bi(d);
                    });
                });
            };
            var VC = function (a, b, c) {
                Y.call(this, 884);
                this.B = a;
                this.l = Kt(this);
                this.F = W(this, b);
                this.A = V(this, c);
            };
            _.P(VC, Y);
            VC.prototype.j = function () {
                _.O(Xv).m = this.F.value;
                Yv(_.O(Xv), mt(this.B, this.A.value));
                _.O(yq).j(2);
                this.l.notify();
            };
            var WC = function (a, b, c) {
                Y.call(this, 890);
                this.l = a;
                this.console = b;
                this.A = W(this, c);
            };
            _.P(WC, Y);
            WC.prototype.j = function () {
                var a = this;
                te(this.l, this.A.value, function (b, c) {
                    var d, e;
                    Zb(b, c);
                    null === (e = null === (d = a.console) || void 0 === d ? void 0 : d.error) || void 0 === e ? void 0 : e.call(d, c);
                });
            };
            var XC = function (a, b, c) {
                Y.call(this, 910);
                this.l = a;
                this.console = b;
                this.A = W(this, c);
            };
            _.P(XC, Y);
            XC.prototype.j = function () {
                var a = this;
                ue(this.l, Bg(zp).map(function (b) {
                    return { ya: b };
                }), this.A.value, function (b, c) {
                    var d, e;
                    Zb(b, c);
                    null === (e = null === (d = a.console) || void 0 === d ? void 0 : d.error) || void 0 === e ? void 0 : e.call(d, c);
                });
            };
            var YC = function (a) {
                Y.call(this, 896);
                this.A = a;
                this.l = U(this);
            };
            _.P(YC, Y);
            YC.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d;
                    return A(b, function (e) {
                        if (1 == e.j)
                            return C(e, Wv(c.A), 2);
                        d = e.m;
                        c.l.j(d);
                        Bi(e);
                    });
                });
            };
            var ZC = null, $C = !1, aD = !1, bD = !1, cD = function (a) {
                    a = void 0 === a ? _.F : a;
                    if (!aD) {
                        var b = new cc('gpt_pubconsole_loaded');
                        dc(b);
                        r(b, 'param', String(Wg(a)));
                        r(b, 'api', String(bD));
                        fc(b, 1);
                        Yl(a.document, fn('https:' + '//console.googletagservices.com/pubconsole/'.replace(/^https?:/i, '') + 'loader.js'));
                        aD = !0;
                    }
                }, dD = sc(94, function (a) {
                    a = void 0 === a ? _.F : a;
                    rh()._pubconsole_disable_ || null !== Wg(a) && cD(a);
                });
            'complete' === _.F.document.readyState ? dD() : Cq(_.F, function () {
                dD();
            });
            ph('disablePublisherConsole', x(93, function () {
                rh()._pubconsole_disable_ = !0;
            }));
            ph('onPubConsoleJsLoad', x(731, function () {
                $C && (rh().console.openConsole(ZC), ZC = null, $C = !1);
            }));
            ph('openConsole', x(732, function (a) {
                a = void 0 === a ? '' : a;
                bD = !0;
                rh && rh().console ? rh().console.openConsole(a) : (a && (ZC = a), $C = !0, cD());
            }));
            var eD = function (a, b) {
                Y.call(this, 873);
                this.H = a;
                this.l = V(this, b);
            };
            _.P(eD, Y);
            eD.prototype.j = function () {
                var a = this.l.value, b = this.H;
                !rh()._pubconsole_disable_ && (a = Gc('google_pubconsole', a, b)) && (a = a.split('|'), 0 < a.length && ('1' == a[0] || '0' == a[0]) && cD());
            };
            var fD = function (a, b, c) {
                Y.call(this, 878);
                this.l = a;
                this.$ = b;
                this.N = c;
                this.D = Kt(this);
            };
            _.P(fD, Y);
            fD.prototype.j = function () {
                for (var a = _.H(this.l), b = a.next(); !b.done; b = a.next())
                    mB(this.$, b.value, this.N);
                this.D.notify();
            };
            var gD = function (a, b, c, d, e, f) {
                Y.call(this, 885);
                this.N = a;
                this.H = b;
                this.A = c;
                this.B = d;
                this.$ = e;
                this.T = f;
                this.l = U(this);
            };
            _.P(gD, Y);
            gD.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f, g;
                    return A(b, function (h) {
                        if (1 == h.j) {
                            if (!c.A)
                                return Dt(c.l), h.return();
                            d = c.A;
                            e = d.Da;
                            f = d.Y;
                            return C(h, hD(c, e, f, c.N, c.$, c.T), 2);
                        }
                        g = h.m;
                        c.l.j(g);
                        Bi(h);
                    });
                });
            };
            var hD = function (a, b, c, d, e, f) {
                return z(a, function h() {
                    var k, l = this, m, n, p, t, w, B, K, G, Q, aa, da, va, Fa, eb, fb, Ma, ab, yc, Ub, Ta, Fb, Nh;
                    return A(h, function (Vb) {
                        switch (Vb.j) {
                        case 1:
                            k = new le();
                            _.Sq(l, k);
                            m = new Yt(l.H);
                            _.Sq(l, m);
                            n = new YC(m);
                            X(k, n);
                            p = new QC(b, m, n.l, l.H, l.H.top);
                            X(k, p);
                            t = new RC(b, m, _.bc(221), p.l);
                            X(k, t);
                            w = new TC(Lc(), l.H, p.l);
                            X(k, w);
                            B = new SC(l.H, p.l);
                            X(k, B);
                            K = new NC(ag(l.N.O), Lc(), t.l, w.l, B.l);
                            X(k, K);
                            G = new eD(l.H, K.l);
                            X(k, G);
                            Q = new UC(_.bc(150), K.l);
                            X(k, Q);
                            aa = new MC(l.H, K.l, Q.l);
                            X(k, aa);
                            da = new VC(l.B, aa.D, K.l);
                            X(k, da);
                            _.v(Ap) || (va = new WC(rh(), l.H.console, aa.D), X(k, va), Fa = new XC(rh(), l.H.console, aa.D), X(k, Fa));
                            if (_.v(xo))
                                return eb = new fD(c, e, d), X(k, eb), fb = new OC(c, f, d), X(k, fb), ne(k), C(Vb, D.Promise.all([
                                    da.l.promise,
                                    eb.D.promise,
                                    fb.D.promise
                                ]), 3);
                            ne(k);
                            return C(Vb, da.l.promise, 3);
                        case 3:
                            return Ma = c, ab = I, yc = ab.M, Ub = ab, C(Vb, K.l.promise, 6);
                        case 6:
                            return Ta = yc.call(Ub, Vb.m), Fb = I, Nh = Fb.M, C(Vb, aa.D.promise, 7);
                        case 7:
                            return Vb.return({
                                Y: Ma,
                                ea: Ta,
                                storage: Nh.call(Fb, Vb.m)
                            });
                        }
                    });
                });
            };
            var iD = new D.Map(), jD = function (a, b) {
                    b = void 0 === b ? iD : b;
                    Y.call(this, 834);
                    this.Y = a;
                    this.l = b;
                    this.A = U(this);
                    this.B = D.Promise.all(this.Y.map(this.F, this));
                };
            _.P(jD, Y);
            jD.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d;
                    return A(b, function (e) {
                        if (1 == e.j)
                            return C(e, c.B, 2);
                        d = e.m;
                        c.A.j(d.filter(function (f) {
                            return null != f && !f.m;
                        }));
                        Bi(e);
                    });
                });
            };
            jD.prototype.F = function (a) {
                return z(this, function c() {
                    var d = this, e, f, g, h;
                    return A(c, function (k) {
                        if (1 == k.j) {
                            e = d;
                            f = 1000 * _.gc(ip);
                            if (a.m)
                                return k.return(null);
                            if (0 >= f)
                                return k.return(a);
                            d.l.has(a) || (d.l.set(a, Yg(f, a)), _.Xg(a, function () {
                                return void e.l.delete(a);
                            }));
                            g = (0, I.M)(d.l.get(a));
                            return C(k, g(), 2);
                        }
                        h = k.m;
                        if (d.m)
                            return k.return(null);
                        if (h)
                            return k.return(a);
                        Lc().I(ts(a.getAdUnitPath()));
                        return k.return(null);
                    });
                });
            };
            var kD = function (a, b, c, d, e, f, g) {
                Y.call(this, 810);
                this.l = a;
                this.B = b;
                this.K = c;
                this.N = d;
                this.F = e;
                this.ea = f;
                this.H = g;
                this.A = U(this);
            };
            _.P(kD, Y);
            kD.prototype.j = function () {
                var a = this, b = this.B;
                !this.K && 1 < this.B.length && (b = [b[0]]);
                b = b.filter(function (c) {
                    var d = a.N.P[c.j];
                    if (qd(a.H) && 4 == ud(d)) {
                        Lc().I(ms('googletag.enums.OutOfPageFormat.REWARDED', String(c.getAdUnitPath())));
                        var e = !0;
                    } else
                        e = !1;
                    return !e && !wd(c, d, a.H, a.ea);
                });
                30 < b.length && (this.F.I(is('30', String(b.length), String(b.length - 30))), b = b.slice(0, 30));
                sa(this.l.Y, b) || (this.l.Y = b.slice());
                this.A.j(b);
            };
            var lD = function (a) {
                Y.call(this, 826);
                this.T = a;
                this.D = U(this);
            };
            _.P(lD, Y);
            lD.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e;
                    return A(b, function (f) {
                        if (1 == f.j)
                            return d = c.D, e = d.m, C(f, c.T.m, 2);
                        e.call(d, f.m);
                        Bi(f);
                    });
                });
            };
            lD.prototype.C = function () {
                Dt(this.D);
            };
            var mD = function (a, b, c, d, e, f, g, h, k, l, m, n, p, t) {
                Y.call(this, 785, _.gc(rp));
                this.B = a;
                this.ba = b;
                this.T = c;
                this.Z = d;
                this.N = e;
                this.ca = f;
                this.ha = g;
                this.fa = h;
                this.R = l;
                this.Gb = m;
                this.A = U(this);
                this.W = V(this, k);
                this.K = Lt(this, l);
                this.l = Lt(this, m);
                this.F = W(this, n);
                this.ja = Lt(this, p);
                zt(this.o, t, !0);
            };
            _.P(mD, Y);
            mD.prototype.j = function () {
                var a;
                return z(this, function c() {
                    var d = this, e, f, g;
                    return A(c, function (h) {
                        if (1 == h.j) {
                            e = d;
                            if (null === (a = d.F.value) || void 0 === a || !a.length)
                                return d.A.j(''), h.return();
                            f = !_.v(Zf);
                            WA(d.B, Db(), d.ca, d.ha, f ? Xy() : '', f ? Yy() : '', f ? Zy() : '', null === d.K.value ? '0' : d.K.value, d.ja.value);
                            d.l.value && (d.T.hb = d.l.value);
                            g = new sB(d.F.value.slice(), d.ba, d.T, d.Z, d.B, d.W.value, d.N, d.fa, !1);
                            d.A.j(Ob(vB(g)));
                            return C(h, d.R.promise, 2);
                        }
                        if (4 != h.j) {
                            if (d.m)
                                return h.return();
                            uc('gpt_paw', function (k) {
                                var l;
                                dc(k);
                                r(k, 'sig', null !== (l = e.R.B) && void 0 !== l ? l : -1);
                                r(k, 'req', e.U);
                            }, { qa: _.gc(oo) });
                            d.l.value ? h = C(h, d.Gb.promise, 4) : (h.j = 0, h = void 0);
                            return h;
                        }
                        uc('gpt_etu', function (k) {
                            var l;
                            dc(k);
                            r(k, 'sig', null !== (l = e.Gb.B) && void 0 !== l ? l : -1);
                            r(k, 'req', e.U);
                        });
                        Bi(h);
                    });
                });
            };
            var nD = function (a) {
                Y.call(this, 802);
                this.H = a;
                this.l = U(this);
            };
            _.P(nD, Y);
            nD.prototype.j = function () {
                var a = this;
                if (_.v(mo)) {
                    var b = function (d) {
                        Zb(a.id, d);
                        a.l.j('0');
                    };
                    try {
                        var c = Ie(this.H);
                        c ? c.then(function (d) {
                            d.length > _.gc(no) ? b(Error('ML:' + d.length)) : a.l.j(d);
                        }).catch(b) : this.l.j('');
                    } catch (d) {
                        b(d);
                    }
                } else
                    this.l.j('');
            };
            var oD = function (a, b, c, d) {
                Y.call(this, 847);
                this.T = a;
                this.B = b;
                this.A = c;
                this.l = U(this);
                this.F = V(this, d);
            };
            _.P(oD, Y);
            oD.prototype.j = function () {
                var a = this.F.value;
                if (a.length) {
                    for (var b = _.H(a), c = b.next(); !c.done; c = b.next())
                        qu(this.T, c.value);
                    this.A ? Dt(this.l) : this.B ? (b = Lb(a[0].getAdUnitPath()), a = pD(a, b), this.l.j(a)) : (a = a.map(function (d) {
                        return {
                            Da: Lb(d.getAdUnitPath()),
                            Y: [d]
                        };
                    }), this.l.j(a));
                } else
                    Dt(this.l);
            };
            var pD = function (a, b) {
                var c = [];
                a = ta(a, function (f) {
                    return Lb(f.getAdUnitPath());
                });
                a = _.H(_.u(Object, 'entries').call(Object, a));
                for (var d = a.next(); !d.done; d = a.next()) {
                    var e = _.H(d.value);
                    d = e.next().value;
                    e = e.next().value;
                    d === b ? c.unshift({
                        Da: d,
                        Y: e
                    }) : c.push({
                        Da: d,
                        Y: e
                    });
                }
                return c;
            };
            var qD = function (a, b) {
                Y.call(this, 845);
                this.P = a;
                this.l = U(this);
                this.A = U(this);
                this.B = V(this, b);
            };
            _.P(qD, Y);
            qD.prototype.j = function () {
                var a = this, b = function (d) {
                        d = a.P[d.j];
                        return 0 != id(d).length || Ff(d, 16);
                    }, c = this.B.value;
                this.l.j(c.filter(b));
                this.A.j(c.filter(aj(b)));
            };
            var rD = function (a, b, c, d) {
                Y.call(this, 864);
                this.T = a;
                this.N = b;
                this.$ = c;
                this.l = Kt(this);
                this.A = V(this, d);
            };
            _.P(rD, Y);
            rD.prototype.j = function () {
                for (var a = _.H(this.A.value), b = a.next(); !b.done; b = a.next())
                    if (b = b.value, _.lu(this.T, b)) {
                        var c = this.N, d = c.O;
                        c = c.P[b.j];
                        var e = void 0, f = void 0;
                        (_.v(Mo) ? 0 : null !== (e = null !== (f = y(c, 11)) && void 0 !== f ? f : y(d, 10)) && void 0 !== e && e) && vg(b, this.$, c, d);
                        qu(this.T, b);
                        f = e = void 0;
                        (_.v(Lo) ? 0 : null !== (e = null !== (f = y(c, 10)) && void 0 !== f ? f : y(d, 11)) && void 0 !== e && e) && vg(b, this.$, c, d);
                    }
                this.l.notify();
            };
            var sD = function (a) {
                Y.call(this, 820);
                this.H = a;
                this.D = U(this);
            };
            _.P(sD, Y);
            sD.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f;
                    return A(b, function (g) {
                        if (1 == g.j)
                            return _.v(sp) ? C(g, Xe(c.H), 2) : (c.D.j(''), g.return());
                        d = g.m;
                        e = d.hb;
                        f = d.status;
                        e || uc('gpt_etu', function (h) {
                            dc(h);
                            r(h, 'rsn', f);
                        });
                        c.D.j(null !== e && void 0 !== e ? e : '');
                        Bi(g);
                    });
                });
            };
            var tD = function (a) {
                Y.call(this, 858);
                this.l = a;
                this.D = Kt(this);
            };
            _.P(tD, Y);
            tD.prototype.j = function () {
                return z(this, function b() {
                    var c, d = this, e, f;
                    return A(b, function (g) {
                        switch (g.j) {
                        case 1:
                            g.G = 2;
                            if (_.v(Up))
                                return e = new CA(function () {
                                }, null, d.l), C(g, LA(e), 7);
                            c = _.bc(258);
                            return C(g, c, 6);
                        case 6:
                            d.D.notify();
                            g.j = 5;
                            break;
                        case 7:
                            d.D.notify();
                        case 5:
                            Kd(g, 0);
                            break;
                        case 2:
                            f = Ld(g), f instanceof Error && d.J(f), d.D.notify(), Bi(g);
                        }
                    });
                });
            };
            var uD = function (a, b) {
                Y.call(this, 822);
                this.slotId = a;
                this.l = Kt(this);
                this.A = V(this, b);
            };
            _.P(uD, Y);
            uD.prototype.j = function () {
                var a, b = null !== (a = J(this.A.value, 23)) && void 0 !== a ? a : [], c = _.O(Cv);
                b = _.H(b);
                for (var d = b.next(); !d.done; d = b.next()) {
                    d = d.value;
                    if (!_.u(c.m, 'includes').call(c.m, d))
                        switch (d) {
                        case 1:
                        case 2:
                        case 3:
                            var e = _.v(mp) ? rt[d] : pt[d];
                            if (e) {
                                var f = d + '_hostpage_library';
                                if (e = Yl(document, e))
                                    e.id = f;
                            }
                            c.m.push(d);
                            f = new st(d);
                            c.o.push(f);
                            e = rh();
                            e.hostpageLibraryTokens || (e.hostpageLibraryTokens = {});
                            e.hostpageLibraryTokens[f.j] = f.m;
                        }
                    f = this.slotId;
                    c.j[d] = c.j[d] || new D.Set();
                    c.j[d].add(f);
                }
                this.l.notify();
            };
            var vD = function (a, b) {
                Y.call(this, 803);
                this.l = a;
                this.slotId = b;
                this.D = U(this);
            };
            _.P(vD, Y);
            vD.prototype.j = function () {
                var a, b = JSON.parse(this.l), c = b ? Ze(b, Zi) : void 0;
                if (!c)
                    throw Error('missing ad unit path');
                if (null === b || void 0 === b || !b[c])
                    throw Error('invalid ad unit path: ' + c);
                b = b[c];
                if (!Array.isArray(b))
                    throw Error('dictionary not an array: ' + this.l);
                b = new Dx(b.slice());
                c = _.H(null !== (a = J(b, 27)) && void 0 !== a ? a : []);
                for (var d = c.next(); !d.done; d = c.next())
                    d = d.value, _.O(yq).m(d);
                _.O(yq).j(4);
                this.slotId.dispatchEvent(Zq, 800, b);
                this.D.j(b);
            };
            var wD = function (a, b, c, d) {
                Y.call(this, 823);
                this.slotId = a;
                this.N = b;
                this.T = c;
                this.l = Kt(this);
                this.A = V(this, d);
            };
            _.P(wD, Y);
            wD.prototype.j = function () {
                var a = this, b, c = this.N.P[this.slotId.j];
                try {
                    if (c) {
                        var d = null !== (b = N(this.A.value, Ds, 50)) && void 0 !== b ? b : null;
                        Pv(c, d, !!y(this.A.value, 11)) && (_.mu(this.T, this.slotId), d && (Ff(d, 1) || y(d, 6)) && iu(this.T, this.slotId, function () {
                            _.nu(a.T, a.slotId);
                        }));
                    }
                } finally {
                    this.l.notify();
                }
            };
            var xD = function (a, b, c) {
                Y.call(this, 821);
                this.ea = a;
                this.A = b;
                this.l = Kt(this);
                this.B = V(this, c);
            };
            _.P(xD, Y);
            xD.prototype.j = function () {
                var a, b = null === (a = M(this.B.value, Es, 14)) || void 0 === a ? void 0 : a[0];
                if (b) {
                    var c = this.A, d = this.ea;
                    if (d) {
                        if (d) {
                            var e = {
                                    Qb: J(b, 2) - Date.now() / 1000,
                                    path: J(b, 3),
                                    domain: J(b, 4),
                                    oe: !1
                                }, f = J(b, 1), g = c.j;
                            y(d, 5) && Ec(g) && new Fc(g.document).set('__gads', f, e);
                        }
                        y(d, 5) && 0.01 > c.j.Math.random() && (d = mt(c, d), Wb({
                            domain: J(b, 4),
                            host: c.j.location.host,
                            success: d === J(b, 1) ? '1' : '0'
                        }, 'gfp_cw_status'));
                    }
                }
                this.l.notify();
            };
            var yD = function () {
                }, zD = function (a, b, c, d, e) {
                    return z(a, function g() {
                        var h, k, l, m, n;
                        return A(g, function (p) {
                            return 1 == p.j ? (h = new le(), k = new jD(b), X(h, k), l = new qD(d.P, k.A), X(h, l), m = new oD(c, !!y(d.O, 6) || _.v(co), e, l.l), X(h, m), n = new rD(c, d, document, l.A), X(h, n), ne(h), C(p, n.l, 2)) : p.return(m.l.promise);
                        });
                    });
                }, AD = function (a, b, c, d, e) {
                    var f = document;
                    return z(a, function h() {
                        var k, l;
                        return A(h, function (m) {
                            k = new le();
                            l = new gD(c, window, b, d, f, e);
                            X(k, l);
                            ne(k);
                            return m.return(l.l.promise);
                        });
                    });
                }, BD = function (a, b, c, d, e, f, g, h, k, l) {
                    var m = new le(), n = new Ct();
                    n.j(e);
                    var p = new nD(window);
                    X(m, p);
                    a = new kD(c, a, h, f, Lc(), e, window);
                    X(m, a);
                    var t = new sD(window);
                    X(m, t);
                    var w = new lD(b);
                    X(m, w);
                    e = new tD(!!y(e, 5));
                    X(m, e);
                    b = new mD(c, h, b, g, f, k, l, d, n, p.l, t.D, a.A, w.D, e.D);
                    X(m, b);
                    ne(m);
                    return b.A.promise;
                }, CD = function (a, b, c, d, e, f, g) {
                    return z(a, function k() {
                        var l, m, n, p, t, w;
                        return A(k, function (B) {
                            if (1 == B.j)
                                return l = new le(), m = new vD(c, b), X(l, m), n = new xD(f, g, m.D), X(l, n), p = new uD(b, m.D), X(l, p), t = new wD(b, e, d, m.D), X(l, t), ne(l), C(B, m.D.promise, 2);
                            if (3 != B.j)
                                return w = B.m, C(B, D.Promise.all([
                                    n.l.promise,
                                    p.l.promise,
                                    t.l.promise
                                ]), 3);
                            l.za();
                            return B.return(w);
                        });
                    });
                };
            var DD = function (a) {
                _.Rq.call(this);
                this.j = a;
                var b = a.size;
                this.o = 'height' === a.Gd ? 'fluid' : [
                    b.width,
                    b.height
                ];
            };
            _.P(DD, _.Rq);
            DD.prototype.render = function () {
                var a = this.j, b = a.slotId, c = a.N, d = a.$, e = a.size, f = a.Ba, g = a.wb, h = a.Hb, k = a.isBackfill;
                a = a.Zc;
                g && Ke(g, _.Ll(d), null !== h && void 0 !== h ? h : '', !1);
                hq(Nb.L(), '5', (0, I.M)(J(c.P[b.j], 20)));
                b.dispatchEvent($q, 801, {
                    Ec: 0 === f.kind ? f.ta : '',
                    isBackfill: !!k
                });
                c = this.C();
                a && c && c.setAttribute('data-google-container-id', a);
                b.dispatchEvent(br, 825, { size: e });
                return c;
            };
            DD.prototype.loaded = function (a) {
                var b = this.j, c = b.slotId, d = b.la;
                b = b.N;
                c.dispatchEvent(er, 844, void 0);
                a && a.setAttribute('data-load-complete', !0);
                d.dispatchEvent('slotOnload', 710, new iw(c, 'publisher_ads'));
                hq(Nb.L(), '6', (0, I.M)(J(b.P[c.j], 20)));
            };
            DD.prototype.G = function () {
                var a, b = this.j, c = b.slotId;
                b = b.$;
                _.Rq.prototype.G.call(this);
                null === (a = fd(c, b)) || void 0 === a ? void 0 : a.removeAttribute('data-google-query-id');
            };
            DD.prototype.A = function (a, b) {
                var c = this, d = this.j, e = d.Ba, f = d.Hb, g = d.jb, h = d.Sa, k = d.Ja;
                e = 0 === e.kind ? e.ta : '';
                var l = iB(d.bc, Qv(d.slotId), b ? null : e, this.o, function () {
                    c.loaded((0, I.M)(l.j), null !== f && void 0 !== f ? f : '');
                }, a, d.Ub || null, d.Uc || null, !!d.isBackfill, !!d.Nd, null !== k && void 0 !== k ? k : null, (0, I.M)(d.N.Vb), (0, I.M)(d.Zc), null !== g && void 0 !== g ? g : '', b, null !== h && void 0 !== h ? h : void 0);
                _.Xg(this, function () {
                    100 != l.status && (2 == l.F && (Xz(l.o), l.F = 0), window.clearTimeout(l.V), l.V = -1, l.J = 3, l.m && (l.m.za(), l.m = null), l.B && l.j ? l.B.unobserve(l.j) : (_.ge(window, 'resize', l.U), _.ge(window, 'scroll', l.U)), l.l && l.j && l.l == _.Pl(l.j) && l.l.removeChild(l.j), l.j = null, l.l = null, l.B && (l.B.disconnect(), l.B = null), l.status = 100);
                });
                return l;
            };
            var bh = function () {
                DD.apply(this, arguments);
            };
            _.P(bh, DD);
            bh.prototype.C = function () {
                var a = this.j, b = a.N, c = b.O;
                a = b.P[a.slotId.j];
                b = new Eu();
                c = iv([
                    b,
                    c.Aa(),
                    a && a.Aa()
                ]);
                c = DD.prototype.A.call(this, c);
                return (0, I.M)(c.j);
            };
            bh.prototype.loaded = function (a, b) {
                var c = this.j, d = c.slotId;
                c = c.N;
                DD.prototype.loaded.call(this, a, b);
                nC(d, c.P[d.j], b);
            };
            bh.prototype.l = function () {
                return !1;
            };
            var ED = function () {
                DD.apply(this, arguments);
            };
            _.P(ED, DD);
            var FD = function (a, b) {
                    var c = Qv(a.j.slotId), d = a.j.$;
                    a = Kg;
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
                }, GD = function (a, b, c, d, e) {
                    'string' !== typeof c && (b.width = String(c[0]), b.height = String(c[1]));
                    var f = sc(774, function () {
                        a.loaded(b, e);
                        _.ge(b, 'load', f);
                    });
                    _.Hd(b, 'load', f);
                    _.Xg(a, function () {
                        return _.ge(b, 'load', f);
                    });
                    d.appendChild(b);
                };
            var ah = function () {
                ED.apply(this, arguments);
            };
            _.P(ah, ED);
            ah.prototype.C = function () {
                var a = this.j, b = a.Ba, c = a.bc, d = a.Uc, e = a.Hb;
                a = a.jb;
                var f = FD(this, this.o);
                if (null === d || void 0 === d ? 0 : d.length)
                    if (_.rk) {
                        d = _.H(d);
                        for (var g = d.next(); !g.done; g = d.next())
                            f.sandbox.add(g.value);
                    } else
                        f.sandbox.add.apply(f.sandbox, _.nc(d));
                a && (f.allow = a);
                -1 == Lj.indexOf('iPhone') && (f.srcdoc = _.Vj(Wj));
                GD(this, f, this.o, c, null !== e && void 0 !== e ? e : '');
                jB(f, b.ta, function () {
                });
                return f;
            };
            ah.prototype.l = function () {
                return !0;
            };
            var HD = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            var $g = function () {
                ED.apply(this, arguments);
            };
            _.P($g, ED);
            $g.prototype.C = function () {
                var a = this.j, b = a.Ba, c = a.bc, d = a.Hb, e = a.jb;
                a = FD(this, this.o);
                e && (a.allow = e);
                b = b.te;
                /^https:/.test(b) && (b = rj(b), a.src = b instanceof ib ? hb(b) : qj(b), a.sandbox = iA.join(' '));
                GD(this, a, this.o, c, null !== d && void 0 !== d ? d : '');
                return a;
            };
            $g.prototype.l = function () {
                return !1;
            };
            var Zg = function () {
                ED.apply(this, arguments);
            };
            _.P(Zg, ED);
            Zg.prototype.C = function () {
                var a = this.j, b = a.N, c = a.Ba;
                a = b.P[a.slotId.j];
                b = iv([
                    b.O.Aa(),
                    a && a.Aa()
                ]);
                a = FD(this, this.o);
                c = c.url;
                /^urn:uuid:[0-9a-f-]*$/.test(c) && (c = rj(c), a.src = c instanceof ib ? hb(c) : qj(c));
                ED.prototype.A.call(this, b, a);
                return a;
            };
            Zg.prototype.l = function () {
                return !1;
            };
            var ID = function (a, b, c, d, e, f, g, h, k, l, m, n, p, t, w, B, K, G, Q, aa, da, va, Fa, eb, fb, Ma) {
                Y.call(this, 680);
                this.slotId = a;
                this.T = b;
                this.N = c;
                this.la = d;
                this.H = e;
                this.l = U(this);
                this.A = U(this);
                this.F = V(this, f);
                Mt(this, h);
                this.fa = V(this, k);
                this.B = V(this, l);
                this.ca = V(this, m);
                this.ba = V(this, n);
                Mt(this, da);
                this.K = W(this, p);
                this.R = W(this, t);
                this.W = W(this, w);
                this.oa = W(this, B);
                this.Z = W(this, K);
                this.ma = W(this, G);
                this.ra = W(this, Q);
                this.ha = W(this, aa);
                this.na = W(this, g);
                Mt(this, va);
                Mt(this, Fa);
                this.ja = V(this, eb);
                Mt(this, fb);
                this.sa = W(this, Ma);
            };
            _.P(ID, Y);
            ID.prototype.j = function () {
                var a = this, b = this.K.value, c = this.F.value;
                if (0 === c.kind) {
                    var d = null === b || void 0 === b ? void 0 : Na(b.getHtml());
                    d && (c.ta = d);
                    if (null == c.ta)
                        throw Error('invalid html');
                }
                b = ch({
                    id: this.ba.value,
                    $: document,
                    slotId: this.slotId,
                    T: this.T,
                    N: this.N,
                    la: this.la,
                    size: this.ca.value,
                    Ba: c,
                    wb: this.fa.value,
                    bc: this.B.value,
                    Hb: this.R.value,
                    Gd: this.W.value,
                    Uc: this.oa.value,
                    Ja: null === b || void 0 === b ? void 0 : J(b, 2),
                    isBackfill: this.Z.value,
                    Nd: this.ma.value,
                    Zc: this.ra.value,
                    Tf: this.ha.value,
                    Ub: this.na.value,
                    jb: this.ja.value,
                    Sa: this.sa.value
                });
                _.Sq(this, b);
                var e = b.render();
                sv(this, this.id, this.H, 'message', function (f) {
                    e.contentWindow === f.source && a.slotId.dispatchEvent(Ig, 824, f);
                });
                this.l.j(e);
                this.A.j(b.l());
            };
            var KD = function (a, b, c, d) {
                Y.call(this, 863);
                this.l = b;
                this.Ia = Number(a);
                this.A = V(this, c);
                this.B = V(this, d);
                this.F = JD(this);
            };
            _.P(KD, Y);
            var JD = function (a) {
                return z(a, function c() {
                    var d = this, e;
                    return A(c, function (f) {
                        e = d;
                        return f.return(new D.Promise(function (g) {
                            try {
                                sv(e, e.id, e.l, 'message', function (h) {
                                    var k;
                                    'asmreq' === (null === (k = h.data) || void 0 === k ? void 0 : k.type) && jh(ai(lz, h.data.payload), 1) === e.Ia && g(h);
                                });
                            } catch (h) {
                            }
                        }));
                    });
                });
            };
            KD.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f, g, h, k;
                    return A(b, function (l) {
                        if (1 == l.j)
                            return d = dh(c.l), e = c.A.value, f = c.B.value, C(l, c.F, 2);
                        g = l.m;
                        var m = c.l, n = dh(m);
                        var p = e.getBoundingClientRect();
                        var t = We(m) ? qn(e, m) : {
                            x: 0,
                            y: 0
                        };
                        m = t.x;
                        t = t.y;
                        p = new _.Rm(t, m + p.right, t + p.bottom, m);
                        m = new nz();
                        m = E(m, 1, p.top);
                        m = E(m, 3, p.bottom);
                        m = E(m, 2, p.left);
                        p = E(m, 4, p.right);
                        m = new mz();
                        m = E(m, 1, c.Ia);
                        m = E(m, 2, !f);
                        p = Gb(m, 3, p);
                        p = E(p, 4, d);
                        h = E(p, 5, n);
                        k = {
                            type: 'asmres',
                            payload: ql(h)
                        };
                        g.ports[0].postMessage(k);
                        Bi(l);
                    });
                });
            };
            var LD = function (a, b, c, d, e, f, g, h, k, l, m) {
                Y.call(this, 699);
                this.$ = a;
                this.slotId = b;
                this.ga = c;
                this.Ua = d;
                this.D = Kt(this);
                this.F = W(this, e);
                this.R = V(this, f);
                this.A = V(this, g);
                this.K = V(this, h);
                this.l = W(this, k);
                this.W = V(this, l);
                this.B = V(this, m);
            };
            _.P(LD, Y);
            LD.prototype.j = function () {
                var a, b = this.R.value, c = this.A.value;
                c.style.width = '';
                c.style.height = '';
                if ('height' !== this.F.value) {
                    var d = null !== (a = this.l.value) && void 0 !== a ? a : 0, e = this.K.value, f = this.W.value, g = this.B.value, h = !1;
                    switch (d) {
                    case 1:
                    case 2:
                        h = this.$;
                        var k = this.slotId, l = this.ga, m = this.Ua;
                        var n = e.width, p = e.height, t = 0;
                        var w = 0;
                        var B = id(l);
                        B = _.H(B);
                        for (var K = B.next(); !K.done; K = B.next())
                            if (K = K.value, Array.isArray(K)) {
                                var G = _.H(K);
                                K = G.next().value;
                                G = G.next().value;
                                t < K && (t = K);
                                w < G && (w = G);
                            }
                        w = [
                            t,
                            w
                        ];
                        t = w[0] < n;
                        p = w[1] < p;
                        t || p ? (w = n + 'px', B = {
                            'max-height': 'none',
                            'max-width': w,
                            padding: '0px',
                            width: w
                        }, p && (B.height = 'auto'), gC(c, b, B), c = {}, t && n > parseInt(f.width, 10) && (c.width = w, c['max-width'] = w), p && (c.height = 'auto', c['max-height'] = 'none'), am(c) ? c = !1 : (c['padding-' + ('ltr' == f.direction ? 'left' : 'right')] = '0px', _.xm(b, c), c = !0)) : c = !1;
                        b:
                            switch (p = e.width, n = h.defaultView || h.parentWindow || _.F, d) {
                            case 2:
                                b = hC(b, n, p, f, m);
                                break b;
                            case 1:
                                if (f = b.parentElement)
                                    if (m = Iv(f)) {
                                        G = m.width;
                                        m = fd(k, n.document);
                                        t = hd(m, n);
                                        w = t.position;
                                        var Q = parseInt(t.width, 10) || 0;
                                        B = hd(f, n);
                                        K = 'rtl' == B.direction ? 'Right' : 'Left';
                                        m = K.toLowerCase();
                                        n = 'absolute' == w ? 0 : parseInt(B['padding' + K], 10);
                                        B = parseInt(B['border' + K + 'Width'], 10);
                                        var aa = Bm(t);
                                        K = (aa && aa[4] || 0) * ('Right' == K ? -1 : 1);
                                        p = Math.max(Math.round((G - Math.max(Q, p)) / 2), 0);
                                        G = {};
                                        Q = aa && aa[3] || 1;
                                        if (1 != (aa && aa[0] || 1) || 1 != Q)
                                            aa[0] = 1, aa[3] = 1, G.transform = 'matrix(' + aa.join(',') + ')';
                                        aa = 0;
                                        switch (w) {
                                        case 'fixed':
                                            if (_.v(Rn)) {
                                                var da, va = null != (da = parseFloat(t[m])) ? da : 0, Fa;
                                                da = null != (Fa = f.getBoundingClientRect().left) ? Fa : 0;
                                                aa = va - da;
                                                break;
                                            }
                                        case 'relative':
                                            aa = null != (va = parseFloat(t[m])) ? va : 0;
                                            break;
                                        case 'absolute':
                                            G[m] = '0';
                                        }
                                        G['margin-' + m] = p - n - B - aa - K + 'px';
                                        _.xm(b, G);
                                        b = !0;
                                    } else
                                        b = !1;
                                else
                                    b = !1;
                                break b;
                            default:
                                b = !1;
                            }
                        c || b ? (jC(h, k, l, d, e.width, e.height, 'gpt_slotexp', g), h = !0) : h = !1;
                        break;
                    case 3:
                        d = this.$, h = this.slotId, k = this.ga, da = this.Ua, l = e.width, Fa = e.height, Fa >= (parseInt(f.height, 10) || 0) || 'none' == f.display || 'hidden' == f.visibility || !da || -12245933 === da.width || b.getBoundingClientRect().bottom <= da.height ? h = !1 : (da = { height: Fa + 'px' }, gC(c, b, da), _.xm(b, da), jC(d, h, k, 3, l, Fa, 'gpt_slotred', g), h = !0);
                    }
                    !h && _.v(Qn) && jC(this.$, this.slotId, this.ga, 0, e.width, e.height, 'gpt_pgbrk', g);
                }
                this.D.notify();
            };
            var MD = function (a, b, c, d, e, f) {
                Y.call(this, 686);
                this.H = a;
                this.slotId = b;
                this.A = c;
                this.Lb = f;
                this.B = W(this, d);
                this.l = V(this, e);
            };
            _.P(MD, Y);
            MD.prototype.j = function () {
                var a, b;
                return z(this, function d() {
                    var e = this, f, g, h, k, l, m, n, p, t, w, B;
                    return A(d, function (K) {
                        if (1 == K.j) {
                            f = e.B.value;
                            g = null === f || void 0 === f ? void 0 : J(f, 1);
                            h = null === f || void 0 === f ? void 0 : ll(f, 2, 1);
                            k = null !== (a = null === f || void 0 === f ? void 0 : J(f, 3)) && void 0 !== a ? a : 0;
                            l = null !== (b = null === f || void 0 === f ? void 0 : y(f, 5)) && void 0 !== b ? b : !1;
                            if (!g || !h)
                                return K.return();
                            m = new Ge();
                            n = m.resolve;
                            p = m.promise;
                            t = e.l.value;
                            w = RA({
                                H: e.H,
                                element: t,
                                re: 0 === e.A,
                                Xc: k,
                                se: g,
                                $b: function () {
                                    return void n(!0);
                                },
                                options: { threshold: h },
                                Kc: l,
                                yd: function (G) {
                                    $b(615, G, !0);
                                },
                                Lb: e.Lb
                            });
                            _.Xg(e, function () {
                                w();
                                n(!1);
                            });
                            return C(K, p, 2);
                        }
                        (B = K.m) ? K = C(K, e.slotId.dispatchEvent(Xq, 614, void 0), 0) : (K.j = 0, K = void 0);
                        return K;
                    });
                });
            };
            var ND = function (a, b, c, d, e) {
                Y.call(this, 856);
                this.ga = a;
                this.mb = U(this);
                this.Va = U(this);
                this.pa = U(this);
                this.K = U(this);
                this.l = U(this);
                this.B = W(this, b);
                this.F = W(this, c);
                this.A = W(this, d);
                this.R = W(this, e);
            };
            _.P(ND, Y);
            var OD = function (a) {
                a.mb.m(a.B.value);
                a.Va.m(a.F.value);
                a.pa.m(a.A.value);
                Dt(a.K);
                Dt(a.l);
            };
            ND.prototype.j = function () {
                var a, b, c, d, e, f, g, h = this.R.value, k = this.A.value;
                if (_.v(Tn) && h) {
                    var l = null !== (b = null === (a = (L = M(this.ga, gf, 21), _.u(L, 'find')).call(L, function (w) {
                        return J(w, 1) === h;
                    })) || void 0 === a ? void 0 : N(a, Kc, 2)) && void 0 !== b ? b : null;
                    if (!l)
                        throw Error('Could not find bid with id: ' + h);
                    this.K.j(l);
                    if (1 !== J(l, 11))
                        OD(this);
                    else {
                        var m = J(l, 7), n = J(l, 12), p = null !== (d = null === (c = N(l, Wc, 5)) || void 0 === c ? void 0 : J(c, 2)) && void 0 !== d ? d : this.B.value, t = null !== (f = null === (e = N(l, Wc, 5)) || void 0 === e ? void 0 : J(e, 1)) && void 0 !== f ? f : this.F.value;
                        if (!m && !n)
                            throw Error('Could not find ad to render for bid id: ' + h);
                        l = null !== (g = J(l, 2)) && void 0 !== g ? g : 0;
                        m = {
                            ad: eh(m, l),
                            adUrl: eh(n, l),
                            adId: h,
                            width: t,
                            height: p
                        };
                        m = btoa(JSON.stringify(m));
                        0 === (null === k || void 0 === k ? void 0 : k.kind) ? (this.pa.j({
                            kind: 0,
                            ta: k.ta.replace(new RegExp('{{GOOGLE_PBJS_AD_CONFIG}}'.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08'), 'g'), m.replace(/\$/g, '$$$$'))
                        }), Dt(this.l)) : (this.pa.m(k), this.l.m(m));
                        this.mb.m(null !== p && void 0 !== p ? p : null);
                        this.Va.m(null !== t && void 0 !== t ? t : null);
                        window.postMessage(JSON.stringify({
                            message: 'Prebid Request',
                            adId: h
                        }), '*');
                    }
                } else
                    OD(this);
            };
            var PD = function (a, b, c, d) {
                Y.call(this, 720);
                this.format = a;
                this.B = b;
                this.D = U(this);
                this.l = W(this, c);
                this.A = W(this, d);
            };
            _.P(PD, Y);
            PD.prototype.j = function () {
                var a = this.A.value;
                if (null == a)
                    Dt(this.D);
                else {
                    var b = Math.round(0.3 * this.B);
                    2 !== this.format && 3 !== this.format || !Gt(this.l) || !kl(this.l.value, 12, !1) || 0 >= b || a <= b ? this.D.j(a) : this.D.j(b);
                }
            };
            var QD = function (a, b, c, d, e, f, g, h, k, l) {
                Y.call(this, 674);
                this.slotId = a;
                this.O = b;
                this.ga = c;
                this.$ = e;
                this.T = f;
                this.D = U(this);
                this.B = 2 === d || 3 === d;
                this.l = V(this, g);
                this.K = V(this, h);
                this.F = W(this, k);
                this.A = W(this, l);
            };
            _.P(QD, Y);
            QD.prototype.j = function () {
                var a = rv(this.O, this.ga), b = Nv(this.slotId, this.$) || hB(this.$, this.l.value, Rv(this.slotId), a);
                this.K.value && !a && (b.style.display = 'inline-block');
                this.B ? iu(this.T, this.slotId, function () {
                    return void _.Ol(b);
                }) : _.Xg(this, function () {
                    return void _.Ol(b);
                });
                a = RD(this);
                0 < a && (b.style.paddingTop = a + 'px');
                this.D.j(b);
            };
            var RD = function (a) {
                var b, c, d, e = a.l.value, f = null === (b = (0, I.M)(a.F).value) || void 0 === b ? void 0 : b.height;
                if (!e || (0, I.M)(a.A).value || !f)
                    return 0;
                var g = a.O, h;
                return (null != (h = y(a.ga, 23)) ? h : y(g, 31)) ? Math.floor((e.offsetHeight - f) / 2) : _.v(Jo) && (a = hd(e, window), a = null === (d = null === (c = null === a || void 0 === a ? void 0 : a.minHeight) || void 0 === c ? void 0 : c.match(/^([0-9]+)px$/)) || void 0 === d ? void 0 : d[1]) ? Math.floor((Number(a) - f) / 2) : 0;
            };
            var SD = function (a) {
                Y.call(this, 859);
                this.H = a;
                this.D = U(this);
            };
            _.P(SD, Y);
            SD.prototype.j = function () {
                this.D.j(!We(this.H.top));
            };
            var TD = function (a, b) {
                Y.call(this, 698);
                this.H = a;
                this.D = U(this);
                this.l = V(this, b);
            };
            _.P(TD, Y);
            TD.prototype.j = function () {
                this.D.m(hd(this.l.value, this.H));
            };
            var UD = function (a, b, c) {
                Y.call(this, 813);
                this.Da = a;
                this.l = U(this);
                this.B = W(this, b);
                this.A = W(this, c);
            };
            _.P(UD, Y);
            UD.prototype.j = function () {
                var a, b = this.B.value;
                if (!b || _.v(Ap))
                    this.l.j(!1);
                else if (VD.has(this.Da))
                    this.l.j(!1);
                else {
                    VD.add(this.Da);
                    b = _.H(b);
                    for (var c = b.next(); !c.done; c = b.next()) {
                        var d = c.value;
                        c = d.ya;
                        (d = d.Wd) && xe(c, d, null !== (a = this.A.value) && void 0 !== a ? a : null);
                    }
                    this.l.j(!0);
                }
            };
            var VD = new D.Set();
            var WD = function (a) {
                Y.call(this, 840);
                this.$ = a;
                this.D = U(this);
            };
            _.P(WD, Y);
            WD.prototype.j = function () {
                var a;
                if (_.v(Gp)) {
                    var b = void 0 === b ? window.navigator.userAgent : b;
                    b = (b = b.match(/Chrome\/([0-9]+)/)) && 92 > Number(b[1]) ? 'conversion-measurement' : 'attribution-reporting';
                } else
                    b = 'conversion-measurement';
                _.v(Fp) && (null === (a = this.$.featurePolicy) || void 0 === a ? 0 : (L = a.features(), _.u(L, 'includes')).call(L, b)) ? this.D.j(b) : this.D.j('');
            };
            var XD = function (a, b, c, d, e) {
                Y.call(this, 721);
                this.H = a;
                this.F = W(this, b);
                this.A = V(this, c);
                this.l = V(this, d);
                this.B = V(this, e);
            };
            _.P(XD, Y);
            XD.prototype.j = function () {
                var a = this, b, c, d, e = this.F.value, f = null === (b = null === e || void 0 === e ? void 0 : J(e, 1)) || void 0 === b ? void 0 : b.toUpperCase();
                e = null === (c = null === e || void 0 === e ? void 0 : J(e, 2)) || void 0 === c ? void 0 : c.toUpperCase();
                if (f && e) {
                    var g = this.A.value, h = this.l.value, k = this.B.value, l = k.style.height, m = k.style.width, n = k.style.display, p = k.style.position, t = Om(g.id + '_top', f), w = Om(g.id + '_bottom', e);
                    _.xm(w, {
                        position: 'relative',
                        top: 'calc(100vh - 48px)'
                    });
                    k.appendChild(t);
                    k.appendChild(w);
                    _.xm(h, {
                        position: 'absolute',
                        top: '24px',
                        clip: 'rect(0, auto, auto, 0)',
                        width: '100vw',
                        height: 'calc(100vh - 48px)'
                    });
                    _.xm(g, {
                        position: 'fixed',
                        top: '0',
                        height: '100vh'
                    });
                    _.xm(k, {
                        position: 'relative',
                        display: (null === (d = this.H.screen.orientation) || void 0 === d ? 0 : d.angle) ? 'none' : 'block',
                        width: '100vw',
                        height: '100vh'
                    });
                    sv(this, 722, this.H, 'orientationchange', function () {
                        var B;
                        (null === (B = a.H.screen.orientation) || void 0 === B ? 0 : B.angle) ? _.xm(k, { display: 'none' }) : _.xm(k, { display: 'block' });
                    });
                    _.Xg(this, function () {
                        _.Ol(t);
                        _.Ol(w);
                        k.style.position = p;
                        k.style.height = l;
                        k.style.width = m;
                        k.style.display = n;
                    });
                }
            };
            var YD = function (a, b, c, d, e) {
                e = void 0 === e ? fh : e;
                Y.call(this, 783);
                var f = this;
                this.slotId = a;
                this.$ = c;
                this.la = d;
                this.K = e;
                this.F = !1;
                this.l = null;
                this.B = 0;
                this.A = null;
                this.Z = _.bj(function () {
                    f.la.dispatchEvent('impressionViewable', 715, new gw(f.slotId, 'publisher_ads'));
                });
                this.ba = cj(function () {
                    return void f.la.dispatchEvent('slotVisibilityChanged', 716, new hw(f.slotId, 'publisher_ads', (0, I.M)(f.A)));
                }, 200);
                this.R = V(this, b);
                this.W = Hg(this.slotId, er);
            };
            _.P(YD, Y);
            YD.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f, g, h;
                    return A(b, function (k) {
                        if (1 == k.j)
                            return d = c, _.v(Vo) || _.v(Wo) ? _.v(Xo) ? (k.j = 2, k = void 0) : k = C(k, c.W, 2) : k = k.return(), k;
                        if (c.m)
                            return k.return();
                        e = c.R.value;
                        f = _.v(Wo) ? $i : function (l) {
                            l = _.H(l);
                            for (var m = l.next(); !m.done; m = l.next())
                                d.B = 100 * m.value.intersectionRatio, ZD(d);
                        };
                        g = sc(c.id, f);
                        h = c.K(g);
                        h.observe(e);
                        sv(c, c.id, c.$, 'visibilitychange', function () {
                            ZD(d);
                        });
                        _.Xg(c, function () {
                            h.disconnect();
                        });
                        _.v(Yo) && setTimeout(function () {
                            return void h.disconnect();
                        }, 3600000);
                        Bi(k);
                    });
                });
            };
            var ZD = function (a) {
                    var b = !xt(a.$);
                    $D(a, 50 <= a.B && b);
                    b = b ? a.B : 0;
                    _.u(Number, 'isFinite').call(Number, b) && (b = Math.floor((0, I.M)(b)), 0 > b || 100 < b || b === a.A || null === a.A && 0 === b || (a.A = b, a.ba()));
                }, $D = function (a, b) {
                    a.F || (b ? null === a.l && (a.l = setTimeout(function () {
                        xt(a.$) || (a.Z(), a.F = !0);
                        a.l = null;
                    }, 1000)) : null !== a.l && (clearTimeout(a.l), a.l = null));
                };
            var aE = function () {
                Y.call(this, 663);
                this.D = Kt(this);
            };
            _.P(aE, Y);
            aE.prototype.j = function () {
                return z(this, function b() {
                    var c = this;
                    return A(b, function (d) {
                        if (1 == d.j) {
                            var e = bE ? 0 : _.gc(Eo), f = _.gc(Do);
                            e = Math.max(e, f);
                            0 < e && (bE = !0, xg(e));
                            return C(d, cE(c), 2);
                        }
                        c.D.notify();
                        Bi(d);
                    });
                });
            };
            var cE = function (a) {
                    return z(a, function c() {
                        var d;
                        return A(c, function (e) {
                            d = _.gc(Fo);
                            0 < d ? e = C(e, gh(d), 0) : (e.j = 0, e = void 0);
                            return e;
                        });
                    });
                }, bE = !1;
            var dE = function (a, b) {
                Y.call(this, 666);
                this.A = a;
                this.l = U(this);
                this.B = W(this, b);
            };
            _.P(dE, Y);
            dE.prototype.j = function () {
                var a = new Su();
                Gt(this.B) && (E(a, 2, this.B.value), E(a, 3, 1));
                if (this.A) {
                    var b = [
                            this.A,
                            a
                        ], c = new Su();
                    b = _.H(b);
                    for (a = b.next(); !a.done; a = b.next()) {
                        a = a.value;
                        if (Ff(a, 1)) {
                            var d = J(a, 1);
                            E(c, 1, d);
                        }
                        Ff(a, 2) && (d = J(a, 2), E(c, 2, d));
                        Ff(a, 3) && (a = ce(a, 3), E(c, 3, a));
                    }
                    a = c;
                }
                c = this.l;
                b = c.m;
                a = Ff(a, 2) ? Ff(a, 3) && 0 !== Ad() ? J(a, 2) * ce(a, 3) : J(a, 2) : null;
                b.call(c, a);
            };
            var eE = function (a, b, c, d) {
                Y.call(this, 666);
                this.D = U(this);
                Mt(this, a);
                this.l = V(this, b);
                this.A = W(this, d);
                this.B = W(this, c);
            };
            _.P(eE, Y);
            eE.prototype.j = function () {
                var a, b = this.A.value, c = null !== (a = this.B.value) && void 0 !== a ? a : void 0;
                if (null == b || 0 > b || 0 === c)
                    this.D.j(!1);
                else {
                    var d = this.l.value;
                    kd(d) ? fE(this, b, c, d) : this.D.j(!1);
                }
            };
            var fE = function (a, b, c, d) {
                var e = hh(b + '%', sc(291, function (f, g) {
                    f = _.H(f);
                    for (var h = f.next(); !h.done; h = f.next())
                        if (h = h.value, !(0 >= h.intersectionRatio)) {
                            g.unobserve(h.target);
                            a.D.j(!0);
                            break;
                        }
                }));
                null != c && setTimeout(function () {
                    a.D.j(!0);
                    e.disconnect();
                }, c);
                e.observe(d);
                _.Xg(a, function () {
                    e.disconnect();
                });
            };
            var gE = function (a, b, c, d, e) {
                Y.call(this, 713);
                this.Ia = a;
                this.l = b;
                this.B = e;
                this.A = W(this, c);
                this.F = V(this, d);
            };
            _.P(gE, Y);
            gE.prototype.j = function () {
                var a = this;
                if (!Ye(this.A.value) && this.l.getOseId()) {
                    var b = this.F.value, c = TA(this.l), d = _.v(Vo) ? $i : sc(this.id, function (e, f) {
                            0 <= f && a.B(e, f);
                            return null;
                        });
                    c.registerAdBlock('?eid=' + Db().join(',') + '&adk=' + this.Ia, 3, 'ldjh', b, 0, 0, d);
                    _.Xg(this, function () {
                        try {
                            c.unloadAdBlock(b, !1, !1);
                        } catch (e) {
                        }
                    });
                }
            };
            var hE = function (a, b, c, d, e, f) {
                Y.call(this, 664);
                this.slotId = a;
                this.Ua = b;
                this.T = c;
                this.D = Kt(this);
                Mt(this, d);
                this.A = W(this, e);
                this.l = W(this, f);
            };
            _.P(hE, Y);
            hE.prototype.j = function () {
                var a = this, b, c = null !== (b = this.l.value) && void 0 !== b ? b : 0;
                if (_.v(zo) || 0 < c) {
                    var d = document;
                    c = wt(d);
                    if (xt(d) && c && (0 < eg(this.T, this.slotId) || !iE(this)) && c) {
                        var e = sv(this, 324, d, c, function () {
                            xt(d) || (e && e(), a.D.notify());
                        });
                        if (e)
                            return;
                    }
                }
                this.D.notify();
            };
            var iE = function (a) {
                var b = a.A.value, c;
                if (c = null != b)
                    try {
                        var d = Gs(top.document, top).y, e = d + a.Ua.height;
                        c = b.y >= d && b.y <= e;
                    } catch (f) {
                        c = !0;
                    }
                return c;
            };
            var jE = function (a, b, c, d) {
                d = void 0 === d ? document : d;
                Y.call(this, 912);
                this.googletag = b;
                this.O = c;
                this.$ = d;
                this.l = V(this, a);
            };
            _.P(jE, Y);
            jE.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f, g;
                    return A(b, function (h) {
                        if (1 == h.j) {
                            d = c;
                            if (!_.v(gp))
                                return h.return();
                            e = _.u(c.l.value, 'find').call(c.l.value, function (k) {
                                return 1 === J(k, 3);
                            });
                            if (!e)
                                return h.return();
                            f = J(e, 2);
                            if (!f)
                                return h.return();
                            g = c.googletag.defineOutOfPageSlot(f, 5);
                            if (!g)
                                return h.return();
                            g.addService(c.googletag.pubads());
                            return C(h, new D.Promise(function (k) {
                                return void Yh(d.$, k);
                            }), 2);
                        }
                        c.googletag.display(g);
                        y(c.O, 4) && c.googletag.pubads().refresh([g]);
                        Bi(h);
                    });
                });
            };
            var kE = function (a, b) {
                Y.call(this, 762);
                this.D = U(this);
                this.A = V(this, a);
                this.l = V(this, b);
            };
            _.P(kE, Y);
            kE.prototype.j = function () {
                var a = this.l.value.kind, b = 0;
                1 === a ? b = 5 : 2 === a ? b = 6 : this.A.value && (b = 1);
                this.D.j(b);
            };
            var lE = function (a, b, c, d, e, f) {
                Y.call(this, 669);
                this.O = a;
                this.P = b;
                this.H = c;
                this.D = U(this);
                this.l = W(this, d);
                this.A = W(this, e);
                this.B = W(this, f);
            };
            _.P(lE, Y);
            lE.prototype.j = function () {
                var a;
                if (!(a = Gt(this.A))) {
                    a = this.P;
                    var b = this.H;
                    b = void 0 === b ? window : b;
                    a = !!(Bq(Ln) || a && Ff(a, 16) && Rb('google_range_debug', b));
                }
                a ? this.D.j(!0) : (a = (Ye(this.l.value) ? y(this.P, 12) || y(this.O, 13) : !1) || !!this.B.value, this.D.j(!!a));
            };
            var mE = function (a, b, c, d, e, f, g) {
                Y.call(this, 828);
                this.slotId = a;
                this.N = b;
                this.T = c;
                this.ea = d;
                this.A = e;
                this.D = U(this);
                this.l = W(this, f);
                this.B = W(this, g);
            };
            _.P(mE, Y);
            mE.prototype.j = function () {
                var a;
                return z(this, function c() {
                    var d = this, e, f, g, h, k, l, m, n, p, t;
                    return A(c, function (w) {
                        e = d.N;
                        f = e.O;
                        g = e.P;
                        h = g[d.slotId.j];
                        k = d.B.value;
                        l = null;
                        m = null !== (a = null === h || void 0 === h ? void 0 : h.Aa()) && void 0 !== a ? a : null;
                        n = f.Aa();
                        (null === m || void 0 === m ? 0 : Ff(m, 4)) ? l = y(m, 4) : (null === n || void 0 === n ? 0 : Ff(n, 4)) ? l = y(n, 4) : null != k && (l = k);
                        p = String(l);
                        null == k || k === l || d.l.value || Lc().I(ps(p, String(k)));
                        d.l.value || uc('gpt_sf_r', function (B) {
                            dc(B);
                            r(B, 'GAM', String(k));
                            r(B, 'Final', p);
                        });
                        t = d.l.value || l || null == l;
                        if (!t)
                            return Dt(d.D), w.return();
                        d.D.j(Mv(d.A, d.ea));
                        Bi(w);
                    });
                });
            };
            var nE = function (a, b, c, d, e, f) {
                Y.call(this, 719);
                this.O = a;
                this.ga = b;
                this.D = U(this);
                this.A = V(this, c);
                this.l = W(this, d);
                this.B = W(this, f);
            };
            _.P(nE, Y);
            nE.prototype.j = function () {
                var a = this.l.value, b = this.A.value;
                if (1 === b || 5 === b) {
                    if (a = this.B.value, b = new Eu(), a = E(b, 3, a), y(iv([
                            a,
                            this.O.Aa(),
                            this.ga.Aa()
                        ]), 3)) {
                        this.D.j(iA);
                        return;
                    }
                } else {
                    if (a = 0 === b && a)
                        a = om(), a = !(!a['allow-top-navigation-by-user-activation'] || !a['allow-popups-to-escape-sandbox']);
                    if (a) {
                        this.D.j(iA);
                        return;
                    }
                }
                Dt(this.D);
            };
            var oE = function (a, b, c, d, e, f, g, h, k) {
                Y.call(this, 681);
                this.adUnitPath = a;
                this.ga = b;
                this.K = c;
                this.window = d;
                this.pa = U(this);
                this.A = U(this);
                this.Db = U(this);
                this.l = Bq(Ln).split(',');
                this.B = Bg(Mn);
                this.Ka = Ff(b, 16) ? N(b, lg, 16) : null;
                this.F = Qb('google_range_debug', this.window);
                this.R = W(this, e);
                this.ca = W(this, f);
                this.Z = W(this, g);
                this.W = V(this, h);
                this.ba = V(this, k);
            };
            _.P(oE, Y);
            oE.prototype.j = function () {
                var a;
                if (a = !!(this.l.length || this.Ka && this.F)) {
                    var b;
                    b:
                        if (this.l.length) {
                            if (this.B.length && (a = this.adUnitPath.split('/'), !_.u(this.B, 'includes').call(this.B, a[a.length - 1]))) {
                                a = !1;
                                break b;
                            }
                            a = !0;
                        } else
                            a = !1;
                    var c = a;
                    a = c ? pE(this) : null;
                    if (c && a) {
                        c = this.ba.value;
                        var d = Iv(c.parentElement);
                        d = null !== (b = null === d || void 0 === d ? void 0 : d.width) && void 0 !== b ? b : 0;
                        b = 'p' === this.l[0];
                        var e = Number(this.l[0]);
                        if (b = 'f' === this.l[0] ? this.K : e && 0 < e ? e : b ? Math.min(d, this.K) : null) {
                            e = a.width;
                            var f = a.height, g = this.l[1], h = Number(g);
                            e = 'ratio' === g && e ? Math.floor(f / e * b) : h && 0 < h ? f * h : f;
                            qE(this, b, e, {
                                kind: 0,
                                ta: rE(b, e, '<p>Requested size:' + a.width + 'x' + a.height + '</p>')
                            }, b <= d ? 1 : 2, c);
                            a = !0;
                        } else
                            a = !1;
                    } else
                        a = !1;
                    if (!a)
                        a:
                            if (this.Ka && this.F) {
                                a = hg(this.Ka, this.window);
                                c = ig(this.Ka, this.window);
                                d = jg(this.Ka);
                                b = kg(this.Ka);
                                switch (this.F) {
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
                                qE(this, e, f, {
                                    kind: 0,
                                    ta: rE(e, f, '<p>Minimum size:' + d + 'x' + b + '</p><p>Maximum size:' + (a + 'x' + c + '</p><div id=toowide style="display:none; background:#faa">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? \'block\' : \'none\';},{threshold:1}).observe(document.body);</script></div>'))
                                });
                                a = !0;
                            } else
                                a = !1;
                }
                if (!a) {
                    a = this.ca.value;
                    if (null == a)
                        throw Error('Missing \'width\'.');
                    c = this.Z.value;
                    if (null == c)
                        throw Error('Missing \'height\'.');
                    qE(this, a, c, this.W.value);
                }
            };
            var pE = function (a) {
                    a = id(a.ga)[0];
                    return Array.isArray(a) && a.every(function (b) {
                        return 'number' === typeof b;
                    }) ? new _.Cl(a[0], a[1]) : null;
                }, rE = function (a, b, c) {
                    return '<html><body style="height:' + (b - 2 + 'px;width:' + (a - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;">')) + c + ('<p>Rendered size:' + a + 'x' + b + '</p></body></html>');
                }, qE = function (a, b, c, d, e, f) {
                    e = void 0 === e ? a.R.value : e;
                    a.A.j(new _.Cl(b, c));
                    a.pa.j(d);
                    a.Db.m(e);
                    f && _.hn(f, 'opacity', 0.5);
                };
            var sE = function (a, b, c, d, e, f, g, h, k) {
                Y.call(this, 673);
                this.slotId = a;
                this.wb = b;
                this.K = c;
                this.F = d;
                this.$ = e;
                this.l = f;
                this.T = g;
                this.D = U(this);
                this.B = W(this, h);
                this.A = W(this, k);
            };
            _.P(sE, Y);
            sE.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e;
                    return A(b, function (f) {
                        if (1 == f.j) {
                            if (null != c.wb) {
                                tE(c, c.wb);
                                c.D.j(c.wb);
                                f.j = 0;
                                return;
                            }
                            if (qv(c.l)) {
                                c.D.j(uE(c));
                                f.j = 0;
                                return;
                            }
                            return C(f, Hg(c.slotId, Yq), 4);
                        }
                        d = f.m;
                        e = d.detail;
                        if (c.m)
                            return f.return();
                        tE(c, e);
                        c.D.j(e);
                        Bi(f);
                    });
                });
            };
            var uE = function (a) {
                    var b = _.Nl(document, 'INS');
                    b.id = a.K;
                    _.xm(b, { display: 'none' });
                    a.$.documentElement.appendChild(b);
                    var c = function () {
                        return void _.Ol(b);
                    };
                    2 === a.l || 3 === a.l ? iu(a.T, a.slotId, function () {
                        return void _.Ol(b);
                    }) : _.Xg(a, c);
                    return b;
                }, tE = function (a, b) {
                    if (2 !== a.l && 3 !== a.l) {
                        var c = _.v(fp) ? [].concat(_.nc(b.childNodes)) : _.u(Array, 'from').call(Array, b.childNodes);
                        c = _.H(c);
                        for (var d = c.next(); !d.done; d = c.next())
                            d = d.value, 1 === d.nodeType && d.id !== a.F && _.Ol(d);
                        b.style.display = '';
                        _.v(Ko) && Gt(a.B) && Gt(a.A) && gB(b, (0, I.M)(a.B.value), (0, I.M)(a.A.value));
                    }
                };
            var vE = function (a) {
                Y.call(this, 676);
                this.D = U(this);
                this.l = V(this, a);
            };
            _.P(vE, Y);
            vE.prototype.j = function () {
                var a = ed(this.l.value);
                this.D.j(a);
            };
            var wE = function (a, b, c) {
                Y.call(this, 807);
                this.H = a;
                this.D = Kt(this);
                this.l = W(this, b);
                this.A = V(this, c);
            };
            _.P(wE, Y);
            wE.prototype.j = function () {
                var a = _.gc(tp);
                if (0 !== a && this.l.value && !this.A.value) {
                    var b = Is(this.H).H, c = Ls(b), d = c.url;
                    c.jc && (b = new vA(b, d), 1 === a ? b = wA(b) : (b = rm('google_ads_top_frame_ctrl', b.j), b = !(!b || !b.contentWindow)), b || this.J(Error('Cannot create top window frame: ' + a)));
                }
                this.D.notify();
            };
            var xE = function (a) {
                Y.call(this, 881);
                this.D = U(this);
                this.l = W(this, a);
            };
            _.P(xE, Y);
            xE.prototype.j = function () {
                var a;
                if (this.l.value) {
                    for (var b = this.l.value, c = {}, d = _.H(M(b, xx, 7)), e = d.next(); !e.done; e = d.next())
                        e = e.value, c[xf(e, 1)] = JSON.parse(xf(e, 2));
                    (d = N(b, wx, 6)) && (c['https://googleads.g.doubleclick.net'] = d.toJSON());
                    this.D.j({
                        seller: 'https://pubads.g.doubleclick.net',
                        decisionLogicUrl: xf(b, 1),
                        trustedScoringSignalsUrl: xf(b, 2),
                        interestGroupBuyers: J(b, 3),
                        additionalBids: [],
                        auctionSignals: JSON.parse(xf(b, 4) || '{}'),
                        sellerSignals: (null === (a = N(b, yx, 5)) || void 0 === a ? void 0 : a.wa()) || [],
                        perBuyerSignals: c
                    });
                } else
                    Dt(this.D);
            };
            xE.prototype.C = function () {
                Dt(this.D);
            };
            var yE = navigator, zE = function (a, b, c) {
                    Y.call(this, 882);
                    this.D = U(this);
                    this.B = W(this, a);
                    this.A = W(this, b);
                    this.l = W(this, c);
                };
            _.P(zE, Y);
            zE.prototype.j = function () {
                var a;
                return z(this, function c() {
                    var d = this, e;
                    return A(c, function (f) {
                        if (1 == f.j)
                            return d.A.value ? C(f, null === (a = yE.runAdAuction) || void 0 === a ? void 0 : a.call(yE, d.A.value), 2) : (d.D.m(d.l.value), f.return());
                        if (e = f.m)
                            d.D.j({
                                kind: 2,
                                te: e
                            });
                        else {
                            var g, h, k = null === (h = null === (g = d.B.value) || void 0 === g ? void 0 : N(g, yx, 5)) || void 0 === h ? void 0 : xf(h, 2);
                            k && gi('https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner&qqid=' + encodeURIComponent(k));
                            d.D.m(d.l.value);
                        }
                        Bi(f);
                    });
                });
            };
            zE.prototype.C = function () {
                this.D.m(this.l.value);
            };
            var AE = qi(['onmessage=function(e){var b=e.data.a;if(b>0){var t=performance.now();while(t+b>performance.now());}postMessage(b);};postMessage(-1)']), BE = AE;
            if (!Array.isArray(BE) || !Array.isArray(BE.raw) || 1 !== BE.length)
                throw new TypeError('safeScript is a template literal tag function that only accepts template literals without expressions. For example, safeScript`foo`;');
            var Xd = $a(BE[0]);
            var CE = function (a, b) {
                Y.call(this, 839);
                this.D = U(this);
                this.A = W(this, a);
                this.l = V(this, b);
            };
            _.P(CE, Y);
            CE.prototype.j = function () {
                var a, b, c;
                return z(this, function e() {
                    var f = this, g, h, k, l, m, n, p, t, w, B, K, G, Q, aa, da, va, Fa, eb, fb;
                    return A(e, function (Ma) {
                        if (1 == Ma.j) {
                            g = f;
                            if (_.v(wp) || !Gt(f.A))
                                return Dt(f.D), Ma.return();
                            h = f.A.value;
                            k = new ty(h);
                            l = N(h, dx, 3);
                            m = oh(l);
                            n = [];
                            p = null !== (a = null === l || void 0 === l ? void 0 : jh(l, 8)) && void 0 !== a ? a : 0;
                            t = null !== (b = null === l || void 0 === l ? void 0 : jh(l, 6)) && void 0 !== b ? b : 0;
                            w = null !== (c = null === l || void 0 === l ? void 0 : jh(l, 9)) && void 0 !== c ? c : 0;
                            B = null === l || void 0 === l ? void 0 : jh(l, 7);
                            K = null === l || void 0 === l ? void 0 : kl(l, 10);
                            G = !K || !kd(f.l.value) || !ih(f.l.value.getBoundingClientRect());
                            K && uc('gpt_td_worker_hidden_experiment', function (ab) {
                                r(ab, 'is_hidden', G);
                            }, {});
                            if (!(0 <= t && B) || Qj()) {
                                n = 1 === p ? Wd(k, m, yy) : Wd(k, m, xy);
                                Ma.j = 2;
                                return;
                            }
                            if (!G) {
                                Ma.j = 2;
                                return;
                            }
                            Q = [];
                            aa = Yd();
                            da = [];
                            va = 1 + w;
                            Fa = {};
                            for (eb = 0; eb < va; Fa = { ab: Fa.ab }, eb++)
                                Fa.ab = new Worker(kb(aa), void 0), Q.push(Fa.ab), da.push(new D.Promise(function (ab) {
                                    return function (yc) {
                                        var Ub = (0, I.M)(sv(g, g.id, ab.ab, 'message', function (Ta) {
                                            if (0 <= Ta.data) {
                                                Ta = _.H(m);
                                                for (var Fb = Ta.next(); !Fb.done; Fb = Ta.next())
                                                    n.push({
                                                        ad: Fb.value,
                                                        ne: 1
                                                    });
                                                Ub();
                                                yc();
                                            } else
                                                ab.ab.postMessage({ a: t });
                                        }));
                                    };
                                }(Fa)));
                            uc('gpt_td_worker_event', function (ab) {
                                r(ab, 'wait_ms', t);
                                r(ab, 'timeout_ms', B);
                            }, {});
                            fb = performance.now();
                            return C(Ma, D.Promise.race([
                                D.Promise.all(da),
                                Pm(B)
                            ]).then(function (ab) {
                                for (var yc = _.H(Q), Ub = yc.next(); !Ub.done; Ub = yc.next())
                                    Ub.value.terminate();
                                uc('timeout' === ab ? 'gpt_td_worker_timeout' : 'gpt_td_worker_time', function (Ta) {
                                    r(Ta, 'wait_ms', t);
                                    r(Ta, 'timeout_ms', B);
                                    r(Ta, 'duration_ms', Math.round(performance.now() - fb));
                                }, {});
                            }), 2);
                        }
                        f.D.j(n);
                        Bi(Ma);
                    });
                });
            };
            CE.prototype.C = function () {
                Dt(this.D);
            };
            var DE = function (a, b) {
                var c = this;
                this.slotId = a;
                this.la = b;
                this.j = null;
                this.m = _.bj(function () {
                    c.la.dispatchEvent('impressionViewable', 715, new gw(c.slotId, 'publisher_ads'));
                });
                this.o = cj(function () {
                    return void c.la.dispatchEvent('slotVisibilityChanged', 716, new hw(c.slotId, 'publisher_ads', (0, I.M)(c.j)));
                }, 200);
            };
            var FE = function (a, b) {
                Y.call(this, 804);
                this.Ba = b;
                this.A = [];
                this.metadata = {
                    yf: EE(this, function (c) {
                        return J(c, 4);
                    }),
                    mb: EE(this, function (c) {
                        return J(c, 6);
                    }),
                    Va: EE(this, function (c) {
                        return J(c, 7);
                    }),
                    Ef: EE(this, function (c) {
                        return y(c, 8);
                    }),
                    Hd: EE(this, function (c) {
                        return J(c, 10);
                    }),
                    zf: EE(this, function (c) {
                        return J(c, 15);
                    }),
                    zd: EE(this, function (c) {
                        return J(c, 34);
                    }),
                    hd: EE(this, function (c) {
                        return N(c, Xw, 43);
                    }),
                    xd: EE(this, function (c) {
                        return N(c, Ex, 41);
                    }),
                    Pd: EE(this, function (c) {
                        return y(c, 9);
                    }),
                    xe: EE(this, function (c) {
                        return y(c, 12);
                    }),
                    jd: EE(this, function (c) {
                        return N(c, Ds, 50);
                    }),
                    Id: EE(this, function (c) {
                        return N(c, Mw, 48);
                    }),
                    Ed: EE(this, function (c) {
                        return N(c, Kw, 39);
                    }),
                    Db: EE(this, function (c) {
                        return J(c, 36);
                    }),
                    ye: EE(this, function (c) {
                        return y(c, 13);
                    }),
                    Od: EE(this, function (c) {
                        return y(c, 3);
                    }),
                    we: EE(this, function (c) {
                        return J(c, 49);
                    }),
                    Be: EE(this, function (c) {
                        return J(c, 29);
                    }),
                    Ce: EE(this, function (c) {
                        return J(c, 30);
                    }),
                    Ld: EE(this, function (c) {
                        return N(c, Zw, 51);
                    }),
                    ze: EE(this, function (c) {
                        return y(c, 52);
                    }),
                    Gb: EE(this, function () {
                        return 'encrypted_url';
                    }),
                    Bd: EE(this, function (c) {
                        return (c = N(c, Ww, 54)) ? M(c, Uw, 1).filter(function (d) {
                            J(d, 1) || $d(32, '');
                            return !!J(d, 1);
                        }).map(function (d) {
                            var e = J(d, 2);
                            return {
                                ya: (0, I.M)(J(d, 1)),
                                Wd: e && (_.u(e, 'startsWith').call(e, window.location.protocol) || _.u(e, 'startsWith').call(e, 'data:') && 40 >= e.length) ? db(e) : void 0
                            };
                        }) : [];
                    }),
                    Df: EE(this, function (c) {
                        return J(c, 23);
                    }),
                    xf: EE(this, function (c) {
                        return M(c, Es, 14);
                    }),
                    Gf: EE(this, function (c) {
                        return y(c, 11);
                    }),
                    Ff: EE(this, function (c) {
                        return J(c, 33);
                    }),
                    sf: EE(this, function (c) {
                        return J(c, 27);
                    }),
                    pa: U(this),
                    ve: EE(this, function (c) {
                        return N(c, tx, 55);
                    }),
                    ue: EE(this, function (c) {
                        return N(c, Ax, 58);
                    }),
                    Ee: EE(this, function (c) {
                        var d, e;
                        return null !== (e = null === (d = N(c, Yw, 56)) || void 0 === d ? void 0 : J(d, 1)) && void 0 !== e ? e : null;
                    }),
                    ee: EE(this, function (c) {
                        var d;
                        return null !== (d = M(c, $w, 60)) && void 0 !== d ? d : [];
                    })
                };
                this.l = V(this, a);
            };
            _.P(FE, Y);
            var EE = function (a, b) {
                var c = U(a);
                a.A.push({
                    D: c,
                    Cd: b
                });
                return c;
            };
            FE.prototype.j = function () {
                for (var a = _.H(this.A), b = a.next(); !b.done; b = a.next()) {
                    b = b.value;
                    var c = b.Cd;
                    b.D.m(c(this.l.value));
                }
                0 === this.Ba.kind || 1 === this.Ba.kind && this.Ba.url ? this.metadata.pa.j(this.Ba) : this.metadata.pa.j({
                    kind: 0,
                    ta: J(this.l.value, 4) || ''
                });
            };
            var GE = function () {
                    this.j = new D.Map();
                }, HE = function (a, b) {
                    var c;
                    b && (null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.za(), a.j.delete(b));
                }, JE = function (a, b, c, d, e, f, g, h, k, l, m) {
                    HE(a, b);
                    Wq(b, br, IE);
                    var n = new le(), p = Hs(!0, window), t = e.O, w = e.P[b.j], B = new SD(window);
                    X(n, B);
                    var K = new Ct();
                    K.j(f);
                    f = new FE(K, g);
                    X(n, f);
                    var G = f.metadata, Q = G.Hd, aa = G.zd;
                    g = G.hd;
                    K = G.xd;
                    var da = G.Pd, va = G.xe, Fa = G.jd, eb = G.Id, fb = G.Ed, Ma = G.Db, ab = G.ye, yc = G.Od, Ub = G.we, Ta = G.Be, Fb = G.Ce, Nh = G.Ld, Vb = G.ze, Uh = G.Gb, ub = G.Bd, Vh = G.ve, ze = G.ue;
                    f = G.ee;
                    G = new ND(w, G.mb, G.Va, G.pa, G.Ee);
                    X(n, G);
                    var Ae = new Ct();
                    Ae.j(k);
                    var vb = new It();
                    vb.notify();
                    Ae = new MC(window.top, Ae, vb);
                    X(n, Ae);
                    ub = new UD(Lb(b.getAdUnitPath()), ub, Ae.D);
                    X(n, ub);
                    vb = new aE();
                    X(n, vb);
                    var zc = new PD(ud(w), p.height, fb, G.mb);
                    X(n, zc);
                    ub = new sE(b, fd(b, h), b.j, Rv(b), h, ud(w), c, G.Va, zc.D);
                    X(n, ub);
                    var Bu = new dB(G.pa, g, K, da, va);
                    X(n, Bu);
                    va = new lE(t, w, window, g, K, va);
                    X(n, va);
                    var Tm = new dE(N(t, Su, 5), Ta);
                    X(n, Tm);
                    Ta = new oE(b.getAdUnitPath(), w, p.width, window, Ma, G.Va, zc.D, Bu.pa, ub.D);
                    X(n, Ta);
                    Ma = new QD(b, t, w, ud(w), h, c, ub.D, va.D, Ta.A, Q);
                    X(n, Ma);
                    zc = new vE(Ma.D);
                    X(n, zc);
                    zc = new hE(b, p, c, vb.D, zc.D, Tm.l);
                    X(n, zc);
                    vb = new TD(window, ub.D);
                    X(n, vb);
                    Fb = new eE(zc.D, Ma.D, Fb, Tm.l);
                    X(n, Fb);
                    p = new LD(h, b, w, p, Q, ub.D, Ma.D, Ta.A, Ta.Db, vb.D, aa);
                    X(n, p);
                    vb = new xE(ze);
                    X(n, vb);
                    ze = new zE(ze, vb.D, Ta.pa);
                    X(n, ze);
                    va = new kE(va.D, ze.D);
                    X(n, va);
                    ab = new nE(t, w, va.D, g, da, ab);
                    X(n, ab);
                    Uh = new wE(window, Uh, B.D);
                    X(n, Uh);
                    l = new mE(b, e, c, k, l, da, Vb);
                    X(n, l);
                    Vh = new CE(Vh, Ma.D);
                    X(n, Vh);
                    vb = new WD(h);
                    X(n, vb);
                    k = new yC(ud(w), fb, eb);
                    X(n, k);
                    l = new ID(b, c, e, m, window, ze.D, l.D, Fb.D, ub.D, Ma.D, Ta.A, va.D, K, aa, Q, ab.D, da, yc, Ub, Vb, p.D, Uh.D, Vh.D, vb.D, k.D, G.l);
                    X(n, l);
                    fb = new tC(c, ud(w), b, window, fb, l.l, ub.D, k.D);
                    X(n, fb);
                    e = new vC(b, ud(w), (0, I.M)(e.Ua), eb, l.l, ub.D, Ae.D, k.D);
                    X(n, e);
                    e = new bB(b, window, g, l.l, l.A);
                    X(n, e);
                    e = new MD(window, b, Ad(), Fa, l.l);
                    X(n, e);
                    w = new JC(b, ud(w), m, window, l.l, ub.D);
                    X(n, w);
                    var Wh = new DE(b, m);
                    w = function (XG, Be) {
                        XG && Wh.m();
                        void 0 === Be || isNaN(Be) || (Be = Math.floor(Be), Wh.j !== Be && (Wh.j = Be, Wh.o()));
                    };
                    h = new YD(b, l.l, h, m);
                    X(n, h);
                    d = new gE(pu(c, b), d, g, l.l, w);
                    X(n, d);
                    c = new KD(pu(c, b), window.top, l.l, B.D);
                    X(n, c);
                    c = new YA(b, aa, Q, K, g, Ub, l.l, Ma.D, l.A);
                    X(n, c);
                    _.Sq(n, new eB(w, b, K, g));
                    c = new XD(window, Nh, l.l, Ma.D, ub.D);
                    X(n, c);
                    X(n, new jE(f, rh(), t));
                    a.j.set(b, n);
                    _.Xg(b, function () {
                        return void HE(a, b);
                    });
                    ne(n);
                }, IE = _.bj(function () {
                    return void Vv('gpt-first-ad-render');
                });
            var KE = function (a, b, c) {
                    const $___old_9acedbeee8caad1d = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                    try {
                        if ($___old_9acedbeee8caad1d)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_deec696cf488516f.XMLHttpRequest));
                        return function () {
                            this.url = a;
                            this.m = b;
                            this.withCredentials = c;
                            this.l = 0;
                            this.o = !1;
                            this.j = new XMLHttpRequest();
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_9acedbeee8caad1d)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_9acedbeee8caad1d));
                    }
                }, NE = function (a) {
                    a.j.open('GET', a.url);
                    a.j.withCredentials = a.withCredentials;
                    GA(a.j);
                    a.j.onreadystatechange = function () {
                        LE(a, !1);
                    };
                    a.j.onload = function () {
                        LE(a, !0);
                    };
                    a.j.onerror = function () {
                        ME(a.m, Error('XHR error'));
                    };
                    a.j.send();
                }, LE = function (a, b) {
                    try {
                        if (3 === a.j.readyState || 4 === a.j.readyState)
                            if (300 <= a.j.status)
                                a.o || ME(a.m, Error('xhr_err-' + a.j.status)), a.o = !0;
                            else {
                                var c = a.j.responseText.substr(a.l);
                                if (c) {
                                    var d = a.m;
                                    if (c)
                                        if (1 !== d.state && 2 !== d.state)
                                            ME(d, Error('state err: (' + ([
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
                                                    h.m = k, ++h.o, h.state = 2;
                                                else {
                                                    try {
                                                        h.G(h.o, h.m, {
                                                            kind: 0,
                                                            ta: Im(k)
                                                        }), h.m = '';
                                                    } catch (m) {
                                                    }
                                                    h.state = 1;
                                                }
                                                e = g + 1;
                                            } while (f && e < c.length);
                                            d.j = c.substr(e);
                                        }
                                }
                                a.l = a.j.responseText.length;
                                if (b && 4 === a.j.readyState) {
                                    var l = a.m;
                                    1 !== l.state || l.j ? ME(l, Error('state err (' + ([
                                        l.state,
                                        l.j.length
                                    ].join() + ')'))) : (l.state = 3, l.l());
                                }
                            }
                    } catch (m) {
                        ME(a.m, m);
                    }
                }, OE = function (a, b, c) {
                    NE(new KE(a, b, void 0 === c ? !0 : c));
                };
            var PE = function (a, b, c) {
                    this.G = a;
                    this.C = b;
                    this.l = c;
                    this.m = '';
                    this.o = -1;
                    this.state = 1;
                    this.j = '';
                }, ME = function (a, b) {
                    a.state = 4;
                    try {
                        a.C(b);
                    } catch (c) {
                    }
                };
            var QE = function (a, b) {
                    a.length && (a = a[0], hq(Nb.L(), '3', J(b.P[a.j], 20)));
                }, RE = function (a) {
                    a = a instanceof Error ? a : Error();
                    a.message = a.message || 'strm_err';
                    $b(289, a, !0);
                }, SE = function (a, b) {
                    if (_.v(Mo))
                        return !1;
                    a = y(a, 11);
                    null == a && (a = y(b, 10));
                    return !!a;
                }, TE = function (a) {
                    var b = rh(), c = a.replace('googletag.', '');
                    return new D.Promise(function (d) {
                        Object.defineProperty(b, c, {
                            value: function (e, f) {
                                var g = d;
                                d = null;
                                g && g({
                                    gd: e,
                                    $d: f
                                });
                            },
                            writable: !1,
                            enumerable: !1
                        });
                    });
                }, UE = function (a) {
                    this.j = gu.L();
                    this.m = new lt();
                    this.J = a;
                    _.O(Cv);
                    this.o = new D.Map();
                    this.B = rg(this.B);
                    this.l = sc(291, this.l);
                    this.V = Rb('google_nofetch');
                    this.K = Rb('google_norender');
                    this.A = new SA();
                    this.R = 0;
                    this.F = {};
                    this.G = {};
                    this.X = new GE();
                    this.C = new yD();
                    this.U = _.bj(function () {
                        return void Vv('gpt-first-ad-request');
                    });
                };
            UE.prototype.B = function (a, b) {
                var c = this;
                b = void 0 === b ? !1 : b;
                return _.F.IntersectionObserver ? new _.F.IntersectionObserver(function (d, e) {
                    return c.l(d, e, b);
                }, { rootMargin: a }) : new Mg(function (d, e) {
                    return c.l(d, e, b);
                }, { rootMargin: a });
            };
            UE.prototype.l = function (a, b, c) {
                var d = this;
                c = void 0 === c ? !1 : c;
                a.forEach(function (e) {
                    if (c || !(0 >= e.intersectionRatio)) {
                        b.unobserve(e.target);
                        e = e.target.id;
                        var f = d.o.get(e);
                        f && (f.$b(), d.o.delete(e));
                    }
                });
            };
            var VE = function (a, b, c, d, e, f) {
                    var g, h, k, l, m, n, p, t;
                    Ii(function (w) {
                        if (1 == w.j)
                            return g = _.Nl(document, 'LINK'), (/^https:/.test(a) || _.bc(257)) && ak(g, new Ij(a, Hj), 'webbundle'), g.resources.add(qj(c.j)), g.crossOrigin = b ? 'use-credentials' : 'anonymous', h = document.createElement('script'), Gd(h, c.j), document.head.appendChild(g), document.head.appendChild(h), C(w, TE(c.m), 2);
                        k = w.m;
                        l = k.gd;
                        m = k.$d;
                        if (l.length !== m.length)
                            return e(Error('Received ' + l.length + ' but ' + m.length + ' metadatas')), w.return();
                        for (n = 0; n < l.length; n++)
                            p = l[n], t = m[n], p && g.resources.add(p), d(n, t, {
                                kind: 1,
                                url: p
                            });
                        f();
                        Bi(w);
                    });
                }, WE = function (a, b, c, d) {
                    var e = new VA();
                    a = ++a.R;
                    e.J = a;
                    if ('wbn' === d) {
                        d = Array(36);
                        for (var f = 0, g, h = 0; 36 > h; h++)
                            8 == h || 13 == h || 18 == h || 23 == h ? d[h] = '-' : 14 == h ? d[h] = '4' : (2 >= f && (f = 33554432 + 16777216 * Math.random() | 0), g = f & 15, f >>= 4, d[h] = HD[19 == h ? g & 3 | 8 : g]);
                        e.j = rj('urn:uuid:' + d.join('').toLowerCase());
                        e.m = 'googletag.wbn' + a;
                    }
                    e.Ea = c.Ea;
                    e.Oa = c.Oa || NaN;
                    e.Na = c.Na || NaN;
                    e.Y = b;
                    return e;
                }, XE = function (a, b) {
                    var c = !_.v(Zf);
                    WA(b, Db(), a.A.getOseId(), ou(a.j, b.Y), c ? Xy() : '', c ? Yy() : '', c ? Zy() : '');
                }, $E = function (a, b, c, d, e) {
                    return YE(a, b, d).then(sc(750, function () {
                        return ZE(a, b, c, d, e);
                    }));
                }, YE = function (a, b, c) {
                    b = b.Y;
                    c = N(c.O, Su, 5) || new Su();
                    c = Fg(c);
                    if (null == c || !b.every(function (g) {
                            return kd(fd(g));
                        }))
                        return D.Promise.resolve();
                    c = a.B(c + '%');
                    var d = new Ge(), e = {};
                    b = _.H(b);
                    for (var f = b.next(); !f.done; e = {
                            Ya: e.Ya,
                            Ab: e.Ab
                        }, f = b.next())
                        f = f.value, e.Ab = f.j, e.Ya = fd(f), e.Ya && (a.o.set(e.Ab, {
                            $b: function () {
                                return void d.resolve();
                            },
                            be: c
                        }), c.observe(e.Ya), ju(a.j, f, function (g) {
                            return function () {
                                aF(a, g.Ya, g.Ab);
                            };
                        }(e)));
                    return d.promise;
                }, ZE = function (a, b, c, d, e) {
                    var f = b.Y;
                    if (f.length)
                        return a.o.get(f[0].j) && f.forEach(function (g) {
                            var h = g.j;
                            g = fd(g);
                            aF(a, g, h);
                        }), bF(a, b, c, d, e);
                }, bF = function (a, b, c, d, e) {
                    return BD(b.Y, a.j, b, e, c, d, a.m, !!y(d.O, 6) || _.v(co), a.A.getOseId(), ou(a.j, b.Y)).then(function (f) {
                        f && cF(a, f, b, c, d, e);
                    });
                }, cF = function (a, b, c, d, e, f) {
                    dF(a, b, c, d, e, f);
                    av(Th.L(), c.Y);
                    'wbn' !== f && LC(_.O(KC), window, Mv(a.m, d));
                    var g;
                    c.Y.some(function (h) {
                        return (L = [
                            2,
                            3,
                            5
                        ], _.u(L, 'includes')).call(L, null == (g = e.P[h.j]) ? void 0 : ud(g));
                    }) && _.qC.L().load(_.xC);
                };
            UE.prototype.refresh = function (a, b, c) {
                var d = this;
                zD(this.C, a, this.j, c, this.V).then(sc(872, function (e) {
                    if (null != e && e.length) {
                        e = _.H(e);
                        for (var f = e.next(); !f.done; f = e.next())
                            AD(d.C, f.value, c, d.m, d.j).then(sc(907, function (g) {
                                return eF(d, g, b, c);
                            }));
                    }
                }));
            };
            var eF = function (a, b, c, d) {
                    if (b) {
                        var e = b.Y;
                        b = b.ea;
                        var f = window.isSecureContext && _.v(xp) ? 'wbn' : 'ldjh';
                        c = WE(a, e, c, f);
                        var g = d.O, h = d.P;
                        _.v(xo) ? bF(a, c, b, d, f).then(sc(751, function () {
                            for (var k = _.H(e), l = k.next(); !l.done; l = k.next())
                                l = l.value, fF(a, l, g, h[l.j]);
                        })) : gF(a, c, b, d, f);
                    }
                }, hF = function (a, b, c, d) {
                    var e = void 0 === e ? window : e;
                    for (var f = _.H(b), g = f.next(); !g.done; g = f.next())
                        HE(a.X, g.value);
                    b = _.H(b);
                    for (g = b.next(); !g.done; g = b.next())
                        g = g.value, f = d[g.j], SE(f, c) && vg(g, e.document, f, c), qu(a.j, g);
                }, aF = function (a, b, c) {
                    if (b) {
                        var d = a.o.get(c);
                        d && (d.be.unobserve(b), a.o.delete(c));
                    }
                }, gF = function (a, b, c, d, e) {
                    var f = document;
                    if (b.Y.length) {
                        for (var g = _.H(b.Y), h = g.next(); !h.done; h = g.next())
                            mB(f, h.value, d);
                        $E(a, b, c, d, e).then(sc(751, function () {
                            for (var k = _.H(b.Y), l = k.next(); !l.done; l = k.next())
                                l = l.value, fF(a, l, d.O, d.P[l.j]);
                        }));
                    } else
                        D.Promise.resolve();
                }, fF = function (a, b, c, d) {
                    var e = void 0 === e ? window : e;
                    SE(d, c) && !a.j.Qa(b) && vg(b, e.document, d, c);
                }, dF = function (a, b, c, d, e, f) {
                    var g = void 0 === g ? _.F.document : g;
                    var h = void 0 === h ? RE : h;
                    var k = c.Y, l = c.J;
                    a.G[l] = k.slice();
                    b = Ob(b);
                    QE(k, e);
                    var m, n, p = !(null != (n = null == (m = ag(e.O)) ? void 0 : y(m, 9)) && n) && !!y(d, 5);
                    m = sc(646, function (t, w, B) {
                        var K, G = function () {
                                return iF(a, l, d, e, t, w, B, null != (K = c.C) ? K : '', g);
                            };
                        0 < t && _.v(Wn) ? setTimeout(G, 0) : G();
                    });
                    n = sc(647, function () {
                        var t = function () {
                            for (var w = a.G[l] || [], B = 0; B < w.length; ++B)
                                if (w[B]) {
                                    var K = new Dx();
                                    K = E(K, 8, !0);
                                    K = '{"empty":' + ql(K) + '}';
                                    iF(a, l, d, e, B, K, {
                                        kind: 0,
                                        ta: ''
                                    });
                                }
                            delete a.G[l];
                            Te();
                        };
                        _.v(Wn) ? setTimeout(t, 0) : t();
                    });
                    h = sc(289, h);
                    'wbn' === f ? VE(b, p, c, m, h, n) : OE(b, new PE(m, h, n), p);
                    a.U();
                    f = _.H(k);
                    for (k = f.next(); !k.done; k = f.next())
                        k = k.value, h = J(e.P[k.j], 20), p = sc(643, jF(a, k, b, e)), k.dispatchEvent(ar, 808, {
                            rd: p,
                            ke: h
                        }), a.J.dispatchEvent('slotRequested', 705, new pw(k, 'publisher_ads'));
                }, jF = function (a, b, c, d) {
                    if (y(d.O, 6) || _.v(co)) {
                        var e = WE(a, [b], { Ea: 1 }, 'ldjh');
                        XE(a, e);
                        var f = new sB([b], _.v(co), a.j, a.m, e, new kt(), d, 'ldjh', !0);
                        return gd(function () {
                            return Ob(vB(f));
                        });
                    }
                    return function () {
                        return c;
                    };
                }, iF = function (a, b, c, d, e, f, g, h, k) {
                    k = void 0 === k ? document : k;
                    var l, m, n, p, t, w;
                    return Ii(function (B) {
                        if (1 == B.j) {
                            l = a.G[b] || [];
                            m = l[e];
                            if (!m)
                                return Zb(646, Error('missing slot')), B.return();
                            l[e] = null;
                            n = J(d.P[m.j], 20);
                            a.F[b] || (a.F[b] = !0, hq(Nb.L(), '4', n));
                            return C(B, CD(a.C, m, f, a.j, d, c, a.m), 2);
                        }
                        p = B.m;
                        if (!p)
                            return Zb(646, Error('invalid response: ' + f)), B.return();
                        if (m.m)
                            return B.return();
                        if (t = y(p, 8) || a.K) {
                            var K = k, G = null != (w = J(p, 34)) ? w : '', Q = fd(m, K);
                            Q && Ke(Q, _.F, G, !0);
                            hq(Nb.L(), '5', J(d.P[m.j], 20));
                            m.dispatchEvent($q, 801, {
                                Ec: null,
                                isBackfill: !1
                            });
                            G = _.v(po);
                            Q = d.P[m.j];
                            var aa = d.O;
                            if (_.lu(a.j, m)) {
                                if (G) {
                                    var da = {};
                                    da[m.j] = Q;
                                    hF(a, [m], aa, da);
                                }
                                if (G || !Uv(m, K)) {
                                    var va;
                                    (null != (va = y(Q, 10)) ? va : y(aa, 11)) && !_.v(Lo) && vg(m, K, Q, aa);
                                }
                            }
                            m.dispatchEvent(br, 825, {
                                isEmpty: !0,
                                slotContentChanged: G
                            });
                        } else
                            JE(a.X, m, a.j, a.A, d, p, g, k, c, a.m, a.J);
                        Bi(B);
                    });
                };
            var kF = function (a) {
                    this.pubads = a;
                    this.j = new D.Set();
                    this.m = {};
                }, lF = function (a, b, c) {
                    if (y(b.O, 4))
                        return [];
                    var d;
                    return !y(b.O, 6) || (null == (d = b.P[c.j]) ? 0 : y(d, 17)) ? (a.j.add(c), _.Xg(c, function () {
                        return void a.j.delete(c);
                    }), [c]) : a.pubads.j.filter(function (e) {
                        if (a.j.has(e))
                            return !1;
                        a.j.add(e);
                        _.Xg(e, function () {
                            return void a.j.delete(e);
                        });
                        return !0;
                    });
                };
            kF.prototype.display = function (a, b) {
                var c = lF(this, a, b);
                mF(this.pubads, c, a, { Ea: 1 });
                a = b.getAdUnitPath();
                if ((b = this.m[a]) && !_.v(ao)) {
                    b = _.H(b);
                    for (c = b.next(); !c.done; c = b.next())
                        c = c.value, mF(this.pubads, c.Y, c.N, c.fe);
                    delete this.m[a];
                }
            };
            kF.prototype.refresh = function (a, b, c) {
                var d = this, e = b[0], f, g = null != (f = null == e ? void 0 : e.j) ? f : '';
                if (_.v(ao))
                    nF(this.pubads, Ur(g), e), uw(this.pubads, sc(690, function () {
                        for (var h = {}, k = _.H(b), l = k.next(); !l.done; h = { Za: h.Za }, l = k.next())
                            h.Za = l.value, d.j.add(h.Za), _.Xg(h.Za, function (m) {
                                return function () {
                                    return void d.j.delete(m.Za);
                                };
                            }(h));
                        mF(d.pubads, b, a, c);
                    }));
                else if (this.pubads.o) {
                    e = {};
                    f = _.H(b);
                    for (g = f.next(); !g.done; e = { $a: e.$a }, g = f.next())
                        e.$a = g.value, this.j.add(e.$a), _.Xg(e.$a, function (h) {
                            return function () {
                                return void d.j.delete(h.$a);
                            };
                        }(e));
                    mF(this.pubads, b, a, c);
                } else
                    b.length && y(a.O, 6) ? (nF(this.pubads, Ur(g), e), e = e.getAdUnitPath(), f = this.m[e] || [], f.push({
                        Y: b,
                        N: a,
                        fe: c
                    }), this.m[e] = f) : nF(this.pubads, Sr(g), e);
            };
            var Kh = function () {
                sw.call(this);
                _.v(Pp) && new fC(this);
                this.B = new kF(this);
                this.A = new UE(this);
            };
            _.P(Kh, sw);
            _.q = Kh.prototype;
            _.q.display = function (a, b, c, d) {
                c = void 0 === c ? '' : c;
                d = void 0 === d ? '' : d;
                var e = '';
                if (c)
                    if (_.ja(c) && 1 == c.nodeType) {
                        var f = c;
                        e = f.id;
                    } else
                        e = c;
                tw(this);
                var g = Gh(a, b, e), h = g.slotId;
                g = g.Ma;
                h && g ? (f && !e && (f.id = h.j), this.Fa(h, g), E(g, 7, d), yw(f || h.j)) : this.log.I(Hh('PubAdsService.display', [
                    a,
                    b,
                    c
                ]));
            };
            _.q.ic = function () {
                var a = this, b = Th.L().j;
                if (y(b, 6) || _.v(hp))
                    for (var c = _.H(this.j), d = c.next(); !d.done; d = c.next())
                        oF(this, d.value);
                pF(this, b);
                Wq(this, 'rewardedSlotClosed', function (e) {
                    var f = e.detail.slot;
                    e = _.u(a.j, 'find').call(a.j, function (g) {
                        return f === g.o;
                    });
                    hF(a.A, [e], Th.L().j, ef());
                });
                uh();
            };
            _.q.getName = function () {
                return 'publisher_ads';
            };
            _.q.Fa = function (a, b) {
                var c = this;
                y(b, 17) || oF(this, a);
                this.dispatchEvent(cr, 724, {
                    xc: a.j,
                    P: b
                });
                Wq(a, br, function (d) {
                    var e = d.detail;
                    d = e.size;
                    var f = e.slotContentChanged, g = e.isEmpty;
                    e = new fw(a, 'publisher_ads');
                    g && (e.isEmpty = g);
                    f && (e.slotContentChanged = f);
                    f = a.o.getResponseInformation();
                    d && f && (e.size = [
                        d.width,
                        d.height
                    ], e.sourceAgnosticCreativeId = f.sourceAgnosticCreativeId, e.sourceAgnosticLineItemId = f.sourceAgnosticLineItemId, e.isBackfill = f.isBackfill, e.creativeId = f.creativeId, e.lineItemId = f.lineItemId, e.creativeTemplateId = f.creativeTemplateId, e.advertiserId = f.advertiserId, e.campaignId = f.campaignId, e.yieldGroupIds = f.yieldGroupIds, e.companyIds = f.companyIds);
                    c.dispatchEvent('slotRenderEnded', 708, e);
                });
                Wq(a, Zq, function () {
                    return void c.dispatchEvent('slotResponseReceived', 709, new qw(a, c.getName()));
                });
                Wq(a, Xq, function () {
                    var d = Th.L().j;
                    d = Jv(d, ef());
                    c.A.refresh([a], { Ea: 2 }, d);
                });
                sw.prototype.Fa.call(this, a, b);
            };
            _.q.uc = function (a, b) {
                tw(this);
                oF(this, b);
                this.log.info(Or());
                var c = y(a.O, 6);
                if (c || !gu.L().Qa(b))
                    c && (c = fd(b, document)) && b.dispatchEvent(Yq, 778, c), y(a.O, 4) && fF(this.A, b, a.O, a.P[b.j]), this.B.display(a, b);
            };
            var oF = function (a, b) {
                    a.o && ku(gu.L(), b);
                }, qF = function (a, b, c) {
                    var d = void 0 === d ? document : d;
                    var e;
                    null != (e = c.P[b.j]) && E(e, 19, !0);
                    Yj(d, _.en('<div id="' + ck(b.j) + '"></div>'));
                    fd(b, d) ? (tw(a), ku(gu.L(), b), a.B.display(c, b)) : uc('gpt_pb_write', function (f) {
                        dc(f);
                    });
                };
            Kh.prototype.refresh = function (a, b, c) {
                var d = b ? rF(this, b) : this.j;
                if (!d.length)
                    return !1;
                if (_.v($n)) {
                    tw(this);
                    b = _.H(b);
                    for (var e = b.next(); !e.done; e = b.next())
                        e = e.value, this.Fa(e, a.P[e.j]);
                }
                this.B.refresh(a, d, c || { Ea: 2 });
                return !0;
            };
            var mF = function (a, b, c, d) {
                    a.log.info(Vr());
                    if (sF(a, b, d, c) && 1 !== d.Ea)
                        for (b = _.H(b), d = b.next(); !d.done; d = b.next())
                            d = d.value.j, a.dispatchEvent(dr, 725, {
                                xc: d,
                                P: c.P[d]
                            });
                }, sF = function (a, b, c, d) {
                    b = b.filter(function (e) {
                        return _.lu(gu.L(), e);
                    });
                    if (!b.length)
                        return null;
                    a.A.refresh(b, c, d);
                    return b;
                }, tF = function (a, b) {
                    return a.o ? {
                        vid: J(b, 22) || '',
                        cmsid: J(b, 23) || ''
                    } : null;
                }, pF = function (a, b) {
                    y(b, 21) && a.o && E(b, 29, Mm());
                }, uF = function (a, b, c, d) {
                    for (var e = _.H(b), f = e.next(); !f.done; f = e.next())
                        f = f.value, hu(gu.L(), f);
                    hF(a.A, b, c, d);
                }, vF = function (a, b, c, d) {
                    if (!a.o)
                        return a.log.I(Tr(), d[0]), !1;
                    var e = rF(a, d);
                    if (!e.length)
                        return a.log.I(Hh('PubAdsService.clear', [d].filter(function (f) {
                            return void 0 !== f;
                        }))), !1;
                    a.log.info(Wr());
                    uF(a, e, b, c);
                    return !0;
                }, rF = function (a, b) {
                    return b.filter(function (c, d) {
                        return c.m ? (a.log.I(Yr(String(d))), !1) : !0;
                    });
                };
            Kh.prototype.destroySlots = function (a, b) {
                a = sw.prototype.destroySlots.call(this, a, b);
                if (a.length && this.o) {
                    var c, d = null != (c = null == b ? void 0 : b.O) ? c : Th.L().j, e;
                    b = null != (e = null == b ? void 0 : b.P) ? e : ef();
                    uF(this, a, d, b);
                }
                return a;
            };
            var nF = function (a, b, c) {
                a.log.I(b, c);
            };
            var wF = function () {
                sw.apply(this, arguments);
            };
            _.P(wF, sw);
            wF.L = function () {
                throw Error('Must be overridden');
            };
            var yh = function () {
                wF.call(this);
                this.ads = new D.Map();
                this.A = {};
                this.La = !1;
                this.U = this.B = void 0;
                this.V = this.K = !1;
                _.O(Xv).o = !0;
            };
            _.P(yh, wF);
            _.q = yh.prototype;
            _.q.set = function (a, b) {
                'string' === typeof a && a.length ? (this.A[a] = b, this.log.info(Jr(a, String(b), this.getName()))) : this.log.I(Hh('CompanionAdsService.set', [
                    a,
                    b
                ]));
                return this;
            };
            _.q.get = function (a) {
                var b;
                return null !== (b = this.A[a]) && void 0 !== b ? b : null;
            };
            _.q.display = function (a, b, c, d) {
                c = void 0 === c ? '' : c;
                d = void 0 === d ? '' : d;
                tw(this);
                b = Gh(a, b, c);
                a = b.slotId;
                b = b.Ma;
                this.Fa((0, I.M)(a), (0, I.M)(b));
                E(b, 7, d);
                yw(a.j);
            };
            _.q.Fa = function (a, b) {
                var c = this;
                Wq(a, Zq, function (d) {
                    y(d.detail, 11) && (xF(c, a).de = !0);
                });
                wF.prototype.Fa.call(this, a, b);
            };
            _.q.ic = function () {
                yF(this);
            };
            var zF = function (a) {
                    if (_.v(Zn) || !_.O(Kh).o)
                        return !1;
                    var b = _.O(Kh).j;
                    a = a.j;
                    return b.length !== a.length ? !1 : !a.some(function (c) {
                        return !_.u(b, 'includes').call(b, c);
                    });
                }, AF = function (a, b) {
                    (b = void 0 === b ? '' : b) && !a.V && uc('ima_sdk_v', function (d) {
                        a.V = !0;
                        r(d, 'v', b);
                    });
                    var c = Th.L().j;
                    return String(J(c, 26));
                }, BF = function (a, b) {
                    var c = Th.L().j, d = ef();
                    if (_.O(Kh).o) {
                        var e = { Ea: 3 };
                        a.B && (e.Na = a.B);
                        a.U && (e.Oa = a.U);
                        a = null !== b && void 0 !== b ? b : a.j;
                        c = Jv(c, d);
                        e.Na && 'number' !== typeof e.Na || e.Oa && 'number' !== typeof e.Oa || _.O(Kh).refresh(c, a, e);
                    } else
                        b && b[0] && a.log.error(Sr(b[0].j));
                }, CF = function (a, b) {
                    var c;
                    return _.O(Kh).o && !(null === (c = a.ads.get(b)) || void 0 === c || !c.de);
                }, DF = function (a, b) {
                    return a.j.filter(function (c) {
                        return _.u(b, 'includes').call(b, c.toString());
                    });
                };
            yh.prototype.getName = function () {
                return 'companion_ads';
            };
            var yF = function (a) {
                    _.v(Zn) || Bc(70, function () {
                        if (!a.K) {
                            var b = document;
                            a.log.info(Mr('GPT CompanionAds'));
                            Yl(b, rj(kb(db('https://pagead2.googlesyndication.com/pagead/show_companion_ad.js')).toString()));
                            a.K = !0;
                        }
                    }, !0);
                }, FF = function (a, b) {
                    if (!a.o || CF(a, b))
                        return !1;
                    var c = fd(b);
                    if (!c)
                        return !1;
                    var d = (a.ads.get(b) || {}).content;
                    if (void 0 === d)
                        return !1;
                    a.ads.delete(b);
                    zl(c, Ya(d));
                    d = c = null;
                    var e = $u(Th.L(), b.j);
                    e && 1 === M(e, Wc, 5).length && Ff(M(e, Wc, 5)[0], 1) && Ff(M(e, Wc, 5)[0], 2) && (c = J(M(e, Wc, 5)[0], 1), d = J(M(e, Wc, 5)[0], 2));
                    EF(a, b, c, d);
                    return !0;
                };
            yh.prototype.uc = function (a, b) {
                _.v(Zn) || FF(this, b);
            };
            var GF = function (a, b, c) {
                    if (!_.v(Zn))
                        return b && c && 'string' === typeof c ? (xF(a, b).content = c, FF(a, b)) : !1;
                }, EF = function (a, b, c, d) {
                    b = new fw(b, a.getName());
                    null != c && null != d && (b.size = [
                        c,
                        d
                    ]);
                    a.dispatchEvent('slotRenderEnded', 67, b);
                }, xF = function (a, b) {
                    var c = a.ads.get(b);
                    c || (c = {}, a.ads.set(b, c), _.Xg(b, function () {
                        return a.ads.delete(b);
                    }));
                    return c;
                };
            Pi(yh);
            var HF = function () {
                sw.apply(this, arguments);
            };
            _.P(HF, sw);
            HF.L = function () {
                throw Error('Must be overridden');
            };
            var Bh = function () {
                HF.apply(this, arguments);
                this.A = new D.Map();
            };
            _.P(Bh, HF);
            Bh.prototype.getName = function () {
                return 'content';
            };
            Bh.prototype.display = function (a, b, c, d) {
                c = void 0 === c ? '' : c;
                d = void 0 === d ? '' : d;
                tw(this);
                b = Gh(a, b, c);
                a = b.slotId;
                b = b.Ma;
                this.Fa((0, I.M)(a), (0, I.M)(b));
                E(b, 7, d);
                yw(a.j);
            };
            Bh.prototype.destroySlots = function (a) {
                a = HF.prototype.destroySlots.call(this, a);
                for (var b = _.H(a), c = b.next(); !c.done; c = b.next())
                    this.A.delete(c.value);
                return a;
            };
            var IF = function (a, b) {
                var c = a.A.get(b), d = fd(b);
                !(c && void 0 !== c.content && d && a.o) || c && c.Sc || (c.Sc = !0, zl(d, Ya(c.content)), uc('gpt_cont_svc', function (e) {
                    var f;
                    r(e, 'cl', String(null === (f = null === c || void 0 === c ? void 0 : c.content) || void 0 === f ? void 0 : f.length));
                    dc(e, [b.getAdUnitPath()]);
                }), a.dispatchEvent('slotRenderEnded', 819, new fw(b, a.getName())));
            };
            Bh.prototype.ic = function () {
            };
            Bh.prototype.uc = function (a, b) {
                IF(this, b);
            };
            var JF = function (a, b, c) {
                if (_.u(a.j, 'includes').call(a.j, b) && 'string' === typeof c && c.length) {
                    var d = a.A.get(b);
                    d ? d.content = c : a.A.set(b, {
                        content: c,
                        Sc: void 0
                    });
                    _.Xg(b, function () {
                        return void a.A.delete(b);
                    });
                    IF(a, b);
                }
            };
            Pi(Bh);
            var bi = function (a) {
                R.call(this, a);
            };
            _.P(bi, R);
            var KF = function () {
                    this.j = function () {
                    };
                }, LF = function () {
                    var a = _.O(Xv);
                    _.O(KF).j(a);
                };
            var NF = function () {
                    var a = void 0, b = 2;
                    if (void 0 === a) {
                        var c = void 0 === c ? _.F : c;
                        a = c.ggeac || (c.ggeac = {});
                    }
                    b = void 0 === b ? 0 : b;
                    c = a;
                    var d = b;
                    d = void 0 === d ? 0 : d;
                    zq(_.O(yq), c, d);
                    MF(a, b);
                    b = a;
                    _.O(KF).j = xq(wq, b);
                    _.O(Aq).j();
                }, MF = function (a, b) {
                    var c = _.O(Aq);
                    c.m = function (d, e) {
                        return xq(sq, a, function () {
                            return !1;
                        })(d, e, b);
                    };
                    c.o = function (d, e) {
                        return xq(tq, a, function () {
                            return 0;
                        })(d, e, b);
                    };
                    c.l = function (d, e) {
                        return xq(uq, a, function () {
                            return '';
                        })(d, e, b);
                    };
                    c.G = function (d, e) {
                        return xq(vq, a, function () {
                            return [];
                        })(d, e, b);
                    };
                    c.j = function () {
                        xq(pq, a)(b);
                    };
                };
            var OF = kj('https://securepubads.g.doubleclick.net/');
            var PF = function (a) {
                this.push = x(76, function (b) {
                    return a.push.apply(a, arguments);
                });
            };
            _.P(PF, uu);
            $c(PF, 2);
            var QF = function (a) {
                var b = this;
                this.addEventListener = x(86, function (c, d) {
                    if ('function' !== typeof d)
                        return Lc().I(Hh('Service.addEventListener', [
                            c,
                            d
                        ])), b;
                    var e = xh(c);
                    if (!e)
                        return Lc().I(es(c)), b;
                    a.addEventListener(e, d);
                    return b;
                });
                this.removeEventListener = x(904, function (c, d) {
                    var e = xh(c);
                    'function' === typeof d && e ? a.removeEventListener(e, d) : Lc().I(Hh('Service.removeEventListener', [
                        c,
                        d
                    ]));
                });
                this.getSlots = x(573, function () {
                    return a.j.map(function (c) {
                        return c.o;
                    });
                });
                this.getSlotIdMap = x(574, function () {
                    for (var c = {}, d = _.H(a.j), e = d.next(); !e.done; e = d.next())
                        e = e.value, c[e.toString()] = e.o;
                    return c;
                });
                this.enable = x(87, function () {
                    return tw(a);
                }, !0);
                this.getName = x(575, function () {
                    return a.getName();
                });
            };
            _.P(QF, uu);
            var zh = function (a) {
                QF.call(this, a);
                var b = this;
                this.set = x(576, function (c, d) {
                    a.set(c, d);
                    return b;
                });
                this.get = x(577, function (c) {
                    return a.get(c);
                });
                this.getAttributeKeys = x(578, function () {
                    return bm(a.A);
                });
                this.display = x(558, function (c, d, e, f) {
                    return a.display(c, d, void 0 === e ? '' : e, void 0 === f ? '' : f);
                });
                this.notifyUnfilledSlots = x(69, function (c) {
                    a.La && BF(a, DF(a, c));
                });
                this.isRoadblockingSupported = x(111, function () {
                    return zF(a);
                });
                this.refreshAllSlots = x(60, function () {
                    a.La && BF(a);
                });
                this.setVideoSession = x(61, function (c, d, e) {
                    a.B = d;
                    a.U = e;
                    'number' === typeof c && E(Th.L().j, 29, c);
                });
                this.getDisplayAdsCorrelator = x(62, function (c) {
                    return AF(a, void 0 === c ? '' : c);
                });
                this.getVideoStreamCorrelator = x(63, function () {
                    var c;
                    return null !== (c = J(Th.L().j, 29)) && void 0 !== c ? c : 0;
                });
                this.isSlotAPersistentRoadblock = x(64, function (c) {
                    var d = _.u(a.j, 'find').call(a.j, function (e) {
                        return e.o === c;
                    });
                    return !!d && CF(a, d);
                });
                this.onImplementationLoaded = x(65, function () {
                    a.log.info(Nr('GPT CompanionAds'));
                });
                this.fillSlot = x(66, function (c, d) {
                    var e = _.u(a.j, 'find').call(a.j, function (f) {
                        return f.o === c;
                    });
                    return !!e && GF(a, e, d);
                });
                this.slotRenderEnded = x(67, function (c, d, e) {
                    var f = _.u(a.j, 'find').call(a.j, function (g) {
                        return g.o === c;
                    });
                    return f && EF(a, f, d, e);
                });
                this.setRefreshUnfilledSlots = x(59, function (c) {
                    'boolean' === typeof c && (a.La = c);
                });
            };
            _.P(zh, QF);
            $c(zh, 3);
            var Ch = function (a) {
                QF.call(this, a);
                this.setContent = x(72, function (b, c) {
                    var d = _.u(a.j, 'find').call(a.j, function (e) {
                        return e.o === b;
                    });
                    return !!d && JF(a, d, c);
                });
                this.display = x(562, function (b, c, d, e) {
                    return a.display(b, c, void 0 === d ? '' : d, void 0 === e ? '' : e);
                });
            };
            _.P(Ch, QF);
            $c(Ch, 4);
            var RF = function () {
                var a = Lc();
                this.getAllEvents = x(563, function () {
                    return aD ? a.j.Kb().slice() : [];
                });
                this.getEventsBySlot = x(565, function (b) {
                    return aD ? pr(a, b).slice() : [];
                });
                this.getEventsByLevel = x(566, function (b) {
                    return aD ? qr(a, b).slice() : [];
                });
            };
            _.P(RF, uu);
            $c(RF, 5);
            var Ih = function (a, b) {
                Uq.call(this);
                this.j = a;
                this.o = b;
            };
            _.P(Ih, Uq);
            var Eh = function (a, b) {
                var c = this, d = Lc(), e = a.j, f = Th.L().j, g = $u(Th.L(), e.j);
                this.set = x(83, function (h, k) {
                    'page_url' === h && k && (h = [yu(xu(new Jf(), h), [String(k)])], nl(g, 3, h));
                    return c;
                });
                this.get = x(84, function (h) {
                    if ('page_url' !== h)
                        return null;
                    var k;
                    return null == (k = (L = M(g, Jf, 3), _.u(L, 'find')).call(L, function (l) {
                        return Kf(l) === h;
                    })) ? void 0 : J(k, 2)[0];
                });
                this.setClickUrl = x(79, function (h) {
                    if ('string' !== typeof h)
                        return d.I(Hh('Slot.setClickUrl', [h]), e), c;
                    E(g, 7, h);
                    return c;
                });
                this.setTargeting = x(81, function (h, k) {
                    Ju(e, g, h, k, d);
                    return c;
                });
                this.updateTargetingFromMap = x(85, function (h) {
                    Ku(e, g, h, d);
                    return c;
                });
                this.display = x(78, function () {
                    qF(b, e, Jv(f, ef()));
                });
                this.setTagForChildDirectedTreatment = x(80, function (h) {
                    if (0 === h || 1 === h) {
                        var k = ag(f) || new bg();
                        E(k, 5, h);
                        Gb(f, 25, k);
                    }
                    return c;
                });
                this.setForceSafeFrame = x(567, function (h) {
                    if ('boolean' !== typeof h)
                        return d.I(Hh('PassbackSlot.setForceSafeFrame', [String(h)]), e), c;
                    E(g, 12, h);
                    return c;
                });
                this.setTagForUnderAgeOfConsent = x(448, function (h) {
                    if (0 === h || 1 === h) {
                        var k = ag(f) || new bg();
                        E(k, 6, h);
                        Gb(f, 25, k);
                    }
                    return c;
                });
            };
            _.P(Eh, uu);
            $c(Eh, 6);
            var SF = function (a, b) {
                    var c = b.j;
                    return a.map(function (d) {
                        return _.u(c, 'find').call(c, function (e) {
                            return e.o === d;
                        });
                    }).filter(function (d) {
                        return !!d;
                    });
                }, TF = function (a) {
                    var b = _.O(Xv), c = [];
                    a = _.H(a);
                    for (var d = a.next(); !d.done; d = a.next()) {
                        d = d.value;
                        b.G = d;
                        var e = _.O(yq).j(9);
                        1 === e.length && (c.push(d), c.push(d + '-' + e[0]));
                    }
                    return c;
                }, UF = _.bj(function () {
                    return Em('google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.');
                }), VF = function () {
                    Object.defineProperty(window, 'google_DisableInitialLoad', {
                        get: function () {
                            UF();
                            return !0;
                        },
                        set: function () {
                            UF();
                        },
                        configurable: !0
                    });
                }, Lh = function (a) {
                    QF.call(this, a);
                    var b = this, c = Lc(), d = Th.L().j, e = ef(), f = !1;
                    this.setTargeting = x(1, function (g, h) {
                        var k = null;
                        'string' === typeof h ? k = [h] : Array.isArray(h) ? k = h : qa(h) && (k = _.u(Array, 'from').call(Array, h));
                        var l = 'string' === typeof g && !xj(g);
                        k = k && ua(k);
                        var m, n = null != (m = null == k ? void 0 : k.every(function (p) {
                                return 'string' === typeof p;
                            })) ? m : !1;
                        if (!l || !n)
                            return c.I(Hh('PubAdsService.setTargeting', [
                                g,
                                h
                            ])), b;
                        h = (L = M(d, Jf, 2), _.u(L, 'find')).call(L, function (p) {
                            return Kf(p) === g;
                        });
                        if ('gpt-beta' === g) {
                            if (a.o)
                                return c.I(js(k.join())), b;
                            if (h)
                                return c.I(ks(k.join())), b;
                            k = TF(k);
                        }
                        h ? yu(h, k) : (h = yu(xu(new Jf(), g), k), Nf(d, 2, h, Jf));
                        c.info(cs(g, k.join(), a.getName()));
                        return b;
                    });
                    this.clearTargeting = x(2, function (g) {
                        if (void 0 === g)
                            return nl(d, 2, []), c.info(hs(a.getName())), b;
                        if ('gpt-beta' === g)
                            return c.I(ls(g)), b;
                        var h = M(d, Jf, 2), k = _.u(h, 'findIndex').call(h, function (l) {
                                return Kf(l) === g;
                            });
                        if (0 > k)
                            return c.I($r(g, a.getName())), b;
                        h.splice(k, 1);
                        nl(d, 2, h);
                        c.info(Zr(g, a.getName()));
                        return b;
                    });
                    this.getTargeting = x(38, function (g) {
                        if ('string' !== typeof g)
                            return c.I(Hh('PubAdsService.getTargeting', [g])), [];
                        var h = (L = M(d, Jf, 2), _.u(L, 'find')).call(L, function (k) {
                            return Kf(k) === g;
                        });
                        return h ? J(h, 2).slice() : [];
                    });
                    this.getTargetingKeys = x(39, function () {
                        return M(d, Jf, 2).map(function (g) {
                            return Kf(g);
                        });
                    });
                    this.setCategoryExclusion = x(3, function (g) {
                        if ('string' !== typeof g || xj(g))
                            return c.I(Hh('PubAdsService.setCategoryExclusion', [g])), b;
                        (L = J(d, 3), _.u(L, 'includes')).call(L, g) || Lf(d, 3, g);
                        c.info(as(g));
                        return b;
                    });
                    this.clearCategoryExclusions = x(4, function () {
                        E(d, 3, Ja([]));
                        c.info(bs());
                        return b;
                    });
                    this.disableInitialLoad = x(5, function () {
                        E(d, 4, !0);
                        f || (f = !0, VF());
                    });
                    this.enableSingleRequest = x(6, function () {
                        if (a.o && !y(d, 6))
                            return c.I(Pr('PubAdsService.enableSingleRequest')), !1;
                        c.info(Qr('single request'));
                        E(d, 6, !0);
                        return !0;
                    });
                    this.enableAsyncRendering = x(7, function () {
                        return !0;
                    });
                    this.enableSyncRendering = x(8, function () {
                        Em('GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.');
                        return !1;
                    });
                    this.enableLazyLoad = x(485, function (g) {
                        var h = new Su();
                        E(h, 1, 800);
                        E(h, 2, 400);
                        E(h, 3, 3);
                        if (_.ja(g)) {
                            var k = g.fetchMarginPercent;
                            'number' === typeof k && (0 <= k ? E(h, 1, k) : -1 == k && E(h, 1, void 0));
                            k = g.renderMarginPercent;
                            'number' === typeof k && (0 <= k ? E(h, 2, k) : -1 == k && E(h, 2, void 0));
                            g = g.mobileScaling;
                            'number' === typeof g && (0 < g ? E(h, 3, g) : -1 == g && E(h, 3, 1));
                        }
                        Gb(d, 5, h);
                    });
                    this.setCentering = x(9, function (g) {
                        if (_.v(Oo) && 'object' === typeof g && g) {
                            var h = g.horizontal;
                            g = g.vertical;
                            'boolean' === typeof h && E(d, 15, h);
                            'boolean' === typeof g && E(d, 31, g);
                        } else
                            h = !!g, c.info(Rr('centering', String(h))), E(d, 15, h);
                    });
                    this.definePassback = x(10, function (g, h) {
                        return (g = Jh(a, g, h)) && g.Pc;
                    });
                    this.refresh = x(11, function (g, h) {
                        h = void 0 === h ? {} : h;
                        if (g && !Array.isArray(g) || !_.ja(h) || h.changeCorrelator && 'boolean' !== typeof h.changeCorrelator)
                            c.I(Hh('PubAdsService.refresh', _.u(Array, 'from').call(Array, arguments)));
                        else {
                            h && 0 == h.changeCorrelator || E(d, 26, Mm());
                            var k = g ? SF(g, a) : a.j;
                            a.refresh(Jv(d, e), k) || c.I(Hh('PubAdsService.refresh', _.u(Array, 'from').call(Array, arguments)));
                        }
                    });
                    this.enableVideoAds = x(12, function () {
                        E(d, 21, !0);
                        pF(a, d);
                    });
                    this.setVideoContent = x(13, function (g, h) {
                        E(d, 21, !0);
                        E(d, 22, String(g || ''));
                        E(d, 23, String(h || ''));
                        pF(a, d);
                    });
                    this.collapseEmptyDivs = x(14, function (g) {
                        g = void 0 === g ? !1 : g;
                        if ('object' === typeof g && g && _.v(Po)) {
                            if ('boolean' === typeof g.collapseEmpty) {
                                E(d, 11, g.collapseEmpty);
                                var h;
                                Vu(d, null != (h = y(d, 30)) ? h : !0);
                            }
                            if ('boolean' === typeof g.startCollapsed) {
                                E(d, 10, g.startCollapsed);
                                var k;
                                Vu(d, null != (k = y(d, 30)) ? k : !0);
                            }
                            'boolean' === typeof g.allowCollapseOnScreen && Vu(d, !g.allowCollapseOnScreen);
                            return !!y(d, 11);
                        }
                        E(d, 11, !0);
                        var l = !!g;
                        E(d, 10, l);
                        uc('gpt_ced', function (m) {
                            r(m, 'sc', l ? 't' : 'f');
                            r(m, 'level', 'page');
                            dc(m);
                        });
                        c.info(Xr(String(l)));
                        return !!y(d, 11);
                    });
                    this.clear = x(15, function (g) {
                        if (Array.isArray(g))
                            return vF(a, d, e, SF(g, a));
                        if (void 0 === g)
                            return vF(a, d, e, a.j);
                        c.I(Hh('PubAdsService.clear', [g]));
                        return !1;
                    });
                    this.setLocation = x(16, function (g) {
                        if ('string' !== typeof g)
                            return c.I(Hh('PubAdsService.setLocation', [g])), b;
                        E(d, 8, g);
                        return b;
                    });
                    this.setCookieOptions = x(17, function (g) {
                        if (0 !== g && 1 !== g)
                            return c.I(Pc('PubadsService.setTagForUnderAgeOfConsent', Nc(g), '0,1')), b;
                        E(d, 24, g);
                        return b;
                    });
                    this.setTagForChildDirectedTreatment = x(18, function (g) {
                        if (1 !== g && 0 !== g)
                            return c.I(Pc('PubadsService.setTagForChildDirectedTreatment', Nc(g), '0,1')), b;
                        var h = ag(d) || new bg();
                        E(h, 5, g);
                        Gb(d, 25, h);
                        return b;
                    });
                    this.clearTagForChildDirectedTreatment = x(19, function () {
                        var g = ag(d);
                        if (!g)
                            return b;
                        E(g, 5, void 0);
                        Gb(d, 25, g);
                        return b;
                    });
                    this.setPublisherProvidedId = x(20, function (g) {
                        g = String(g);
                        c.info(Rr('PPID', g));
                        E(d, 16, g);
                        return b;
                    });
                    this.set = x(21, function (g, h) {
                        if ('string' !== typeof g || !g.length || void 0 === ru()[g] || 'string' !== typeof h)
                            return c.I(Hh('PubAdsService.set', [
                                g,
                                h
                            ])), b;
                        var k = (L = M(d, Jf, 14), _.u(L, 'find')).call(L, function (l) {
                            return Kf(l) === g;
                        });
                        k ? yu(k, [h]) : (k = xu(new Jf(), g), Lf(k, 2, h), Nf(d, 14, k, Jf));
                        c.info(Jr(g, String(h), a.getName()));
                        return b;
                    });
                    this.get = x(22, function (g) {
                        if ('string' !== typeof g)
                            return c.I(Hh('PubAdsService.get', [g])), null;
                        var h = (L = M(d, Jf, 14), _.u(L, 'find')).call(L, function (k) {
                            return Kf(k) === g;
                        });
                        return (h = h && J(h, 2)) ? h[0] : null;
                    });
                    this.getAttributeKeys = x(23, function () {
                        return M(d, Jf, 14).map(function (g) {
                            return Kf(g);
                        });
                    });
                    this.display = x(24, function (g, h, k, l) {
                        return void a.display(g, h, void 0 === k ? '' : k, void 0 === l ? '' : l);
                    });
                    this.updateCorrelator = x(25, function () {
                        Em(Lq('update'));
                        c.I(os());
                        E(d, 26, Mm());
                        return b;
                    });
                    this.defineOutOfPagePassback = x(35, function (g) {
                        g = Jh(a, g, [
                            1,
                            1
                        ]);
                        if (!g)
                            return null;
                        E(g.Ma, 15, 1);
                        return g.Pc;
                    });
                    this.setForceSafeFrame = x(36, function (g) {
                        if ('boolean' !== typeof g)
                            return c.I(Hh('PubAdsService.setForceSafeFrame', [Nc(g)])), b;
                        E(d, 13, g);
                        return b;
                    });
                    this.setSafeFrameConfig = x(37, function (g) {
                        var h = hv(g);
                        if (!h)
                            return c.I(Hh('PubAdsService.setSafeFrameConfig', [g])), b;
                        Gb(d, 18, h);
                        return b;
                    });
                    this.setRequestNonPersonalizedAds = x(445, function (g) {
                        if (0 !== g && 1 !== g)
                            return c.I(Pc('PubAdsService.setRequestNonPersonalizedAds', Nc(g), '0,1')), b;
                        var h = ag(d) || new bg();
                        E(h, 8, !!g);
                        Gb(d, 25, h);
                        return b;
                    });
                    this.setTagForUnderAgeOfConsent = x(447, function (g) {
                        g = void 0 === g ? 2 : g;
                        if (2 !== g && 0 !== g && 1 !== g)
                            return c.I(Pc('PubadsService.setTagForUnderAgeOfConsent', Nc(g), '2,0,1')), b;
                        var h = ag(d) || new bg();
                        E(h, 6, g);
                        Gb(d, 25, h);
                        return b;
                    });
                    this.getCorrelator = x(27, function () {
                        return String(J(d, 26));
                    });
                    this.getTagSessionCorrelator = x(631, function () {
                        return Bb(_.F);
                    });
                    this.getVideoContent = x(30, function () {
                        return tF(a, d);
                    });
                    this.getVersion = x(568, Tb);
                    this.forceExperiment = x(569, function (g) {
                        g = parseInt(g, 10);
                        0 < g && _.O(yq).m(g);
                    });
                    this.setCorrelator = x(28, function (g) {
                        Em(Lq('set'));
                        c.I(ns());
                        if (Js(window))
                            return b;
                        if (!('number' === typeof g && isFinite(g) && 0 == g % 1 && 0 < g))
                            return c.I(Hh('PubadsService.setCorrelator', [Nc(g)])), b;
                        E(d, 26, g);
                        E(d, 27, !0);
                        return b;
                    });
                    this.markAsAmp = x(570, function () {
                        window.console && window.console.warn && window.console.warn('googletag.pubads().markAsAmp() is deprecated and ignored.');
                    });
                    this.isSRA = x(571, function () {
                        return !!y(d, 6);
                    });
                    this.setImaContent = x(328, function (g, h) {
                        Ff(d, 22) ? (E(d, 21, !0), E(d, 22, String(g || '')), E(d, 23, String(h || '')), pF(a, d)) : (E(d, 21, !0), pF(a, d), 'string' === typeof g && E(d, 19, g), 'string' === typeof h && E(d, 20, h));
                    });
                    this.getImaContent = x(329, function () {
                        return Ff(d, 22) ? tF(a, d) : a.o ? {
                            vid: J(d, 19) || '',
                            cmsid: J(d, 20) || ''
                        } : null;
                    });
                    this.isInitialLoadDisabled = x(572, function () {
                        return !!y(d, 4);
                    });
                    this.setPrivacySettings = x(648, function (g) {
                        if (!_.ja(g))
                            return c.I(Hh('PubAdsService.setPrivacySettings', [g])), b;
                        var h = ag(d) || new bg(), k = g.restrictDataProcessing, l = g.childDirectedTreatment, m = g.underAgeOfConsent, n = g.limitedAds, p = g.nonPersonalizedAds;
                        'boolean' === typeof p ? E(h, 8, p) : void 0 !== p && c.I(Mc('PubAdsService.setPrivacySettings', Nc(g), 'nonPersonalizedAds', Nc(p)));
                        'boolean' === typeof k ? E(h, 1, k) : void 0 !== k && c.I(Mc('PubAdsService.setPrivacySettings', Nc(g), 'restrictDataProcessing', Nc(k)));
                        'boolean' === typeof n ? E(h, 9, n) : void 0 !== n && c.I(Mc('PubAdsService.setPrivacySettings', Nc(g), 'limitedAds', Nc(n)));
                        void 0 !== m && (null === m ? E(h, 6, 2) : !1 === m ? E(h, 6, 0) : !0 === m ? E(h, 6, 1) : c.I(Mc('PubAdsService.setPrivacySettings', Nc(g), 'underAgeOfConsent', Nc(m))));
                        void 0 !== l && (null === l ? E(h, 5, void 0) : !1 === l ? E(h, 5, 0) : !0 === l ? E(h, 5, 1) : c.I(Mc('PubAdsService.setPrivacySettings', Nc(g), 'childDirectedTreatment', Nc(l))));
                        Gb(d, 25, h);
                        return b;
                    });
                };
            _.P(Lh, QF);
            $c(Lh, 7);
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
                }, WF = function () {
                    var a = this, b = [], c = [], d = Lc();
                    this.addSize = sc(88, function (e, f) {
                        if (!Nu(e) || !(Mu(f) || Array.isArray(f) && f.every(Mu)))
                            return c.push([
                                e,
                                f
                            ]), d.I(Hh('SizeMappingBuilder.addSize', [
                                e,
                                f
                            ])), a;
                        b.push([
                            e,
                            f
                        ]);
                        return a;
                    });
                    this.build = sc(89, function () {
                        if (c.length)
                            return d.I(Hr(Nc(c))), null;
                        pa(b);
                        return b;
                    });
                };
            var Oh = {
                    REWARDED: 4,
                    TOP_ANCHOR: 2,
                    BOTTOM_ANCHOR: 3,
                    INTERSTITIAL: 5
                }, XF = function () {
                    var a = rh();
                    a.enums || (a.enums = { OutOfPageFormat: Oh });
                };
            var Xh = new D.Map([
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
            var YF = function () {
                var a = new Px(), b = new Qx(), c = Bb(_.F);
                Cb(a, 1, c, 0);
                c = Db().join();
                Cb(a, 5, c, '');
                Ib(a, 2, 1);
                Gb(b, 1, a);
                a = Ox();
                c = _.v(Jp);
                a = rl(a, 9, c);
                a = rl(a, 10, !0);
                c = _.v(Lp);
                a = rl(a, 13, c);
                c = _.v(Np);
                a = rl(a, 14, c);
                a = rl(a, 16, !0);
                Gb(b, 2, a);
                window.google_rum_config = b.toJSON();
            };
            var ZF = function (a) {
                    var b = [];
                    b = Ed();
                    if (a) {
                        if (!Array.isArray(a))
                            return Lc().I(Hh('googletag.destroySlots', [a])), !1;
                        la(a);
                        b = b.filter(function (d) {
                            return _.u(a, 'includes').call(a, d.o);
                        });
                    }
                    if (!b.length)
                        return !1;
                    var c = Th.L().j;
                    c = Jv(c, ef());
                    ww(b, c);
                    bw(_.O(Qh), b);
                    return !0;
                }, $F = sc(297, function () {
                    try {
                        for (var a = _.v(fp) ? [].concat(_.nc(document.getElementsByTagName('script'))) : _.u(Array, 'from').call(Array, document.getElementsByTagName('script')), b = _.H(a), c = b.next(); !c.done; c = b.next()) {
                            var d = c.value;
                            a = d;
                            var e = d.src;
                            if (e && (-1 != e.indexOf('/tag/js/gpt.js') || -1 != e.indexOf('/tag/js/gpt_mobile.js')) && !a.googletag_executed && d.textContent) {
                                a.googletag_executed = !0;
                                var f = document.createElement('script'), g = $a(d.textContent);
                                var h = g instanceof vl ? bb(g) : g instanceof mj && g.constructor === mj ? g.j : 'type_error:SafeScript';
                                f.textContent = h;
                                lb(f);
                                document.head.appendChild(f);
                                document.head.removeChild(f);
                            }
                        }
                    } catch (k) {
                        b = k, Zb(297, b), window.console && window.console.error && window.console.error(b);
                    }
                }), aG = function () {
                    var a = window, b = new Yt(a);
                    Wv(b).then(sc(894, function (c) {
                        var d = new Qs(a), e = new vz(a);
                        uc('cmpMet', function (f) {
                            dc(f);
                            r(f, 'fc', c ? 1 : 0);
                            r(f, 'tcfv1', a.__cmp ? 1 : 0);
                            r(f, 'tcfv2', Ss(d) ? 1 : 0);
                            r(f, 'usp', xz(e) ? 1 : 0);
                            r(f, 'ptt', 17);
                        }, { qa: _.gc(up) });
                    }));
                };
            (function (a, b) {
                var c, d, e, f, g, h, k, l;
                return Ii(function (m) {
                    try {
                        if (window.googletag.evalScripts)
                            return window.googletag.evalScripts(), m.return();
                        Yz();
                        ph('evalScripts', $F);
                        try {
                            NF();
                        } catch (n) {
                            $b(408, n, !0);
                        }
                        _.bc(260) && Bv();
                        nB = _.Hc();
                        try {
                            LF(), _.O(yq).j(13), _.O(yq).j(3);
                        } catch (n) {
                            $b(408, n, !0);
                        }
                        Vv('gpt-tag-load');
                        c = b(a);
                        _.qC.L().o = c;
                        _.gc(up) && aG();
                        Bc(827, function () {
                            'function' === typeof document.interestCohort && _.v(qp) && (gu.L().m = document.interestCohort());
                        }, !0);
                        (d = Bq(yp)) && Bc(862, function () {
                            Km(d, document);
                        }, !0);
                        Ag();
                        ph('defineOutOfPageSlot', sc(73, function (n, p) {
                            'string' === typeof n && 0 < n.length && (null == p || 'string' === typeof p || 'number' === typeof p && Ph(p)) ? n = Sh(n, 'number' === typeof p ? p : 1, 'string' === typeof p ? p : void 0) : (Lc().error(Hh('googletag.defineOutOfPageSlot', [
                                n,
                                p
                            ]), void 0, _.v(Jn)), n = null);
                            if (!n)
                                return null;
                            var t;
                            return null != (t = n.o) ? t : null;
                        }));
                        ph('defineSlot', dw);
                        ph('defineUnit', dw);
                        ph('getWindowsThatCanCommunicateWithHostpageLibrary', aw);
                        ph('display', yw);
                        XF();
                        ph('getVersion', Tb);
                        ph('companionAds', x(816, function () {
                            return Ah();
                        }));
                        ph('content', x(817, function () {
                            return Dh();
                        }));
                        ph('pubads', function () {
                            return Mh();
                        });
                        ph('setAdIframeTitle', x(729, Lg));
                        ph('getEventLog', function () {
                            return new RF();
                        });
                        ph('sizeMapping', sc(90, function () {
                            return new WF();
                        }));
                        ph('enableServices', sc(91, function () {
                            for (var n = _.H(rw), p = n.next(); !p.done; p = n.next())
                                p = p.value, p.o && Lc().info(Kr()), tw(p);
                        }));
                        ph('destroySlots', sc(75, ZF));
                        ph('apiReady', !0);
                        _.v(Un) && df();
                        e = function () {
                            Zh();
                            Bc(77, function () {
                                var n = rh().cmd;
                                if (!n || Array.isArray(n)) {
                                    var p = new vs();
                                    rh().cmd = ad(p, function () {
                                        return new PF(p);
                                    });
                                    n && 0 < n.length && p.push.apply(p, n);
                                }
                            });
                        };
                        rh().fifWin && 'complete' != document.readyState ? Cq(window, function () {
                            window.setTimeout(e, 0);
                        }) : e();
                        $F();
                        if (_.v(Pp) || Nb.L().j)
                            YF(), Yl(document, rj(kb(_.v(Qp) ? c.je : c.le).toString()));
                        _.v(yo) && hi();
                        _.v(Yn) && Zj('script[nonce]', void 0) && (f = new cc('gpt_nonce_csp'), dc(f), fc(f));
                        g = _.gc(Xn);
                        0 !== g && (h = document.createElement('script'), k = rj(jj(kj(1 == g ? 'https://pagead2.googlesyndication.com/pagead/managed/js/m202102160101/pubads_impl.js' : 'https://securepubads.g.doubleclick.net/gpt/pubads_impl_2021021602.js'))), Gd(h, tj(k, String(Math.random()))), l = _.Hc(), (document.head || document.body || document.documentElement).appendChild(h), h.onload = function () {
                            uc('gpt_bvslt', function (n) {
                                dc(n);
                                r(n, 't', _.Hc() - l);
                                r(n, 'f', g);
                            }, { qa: 1 });
                        });
                        uc('gpt_ila', function (n) {
                            dc(n);
                            r(n, 'ila', _.bc(259));
                        }, { qa: _.gc(Sn) });
                    } catch (n) {
                        $b(106, n);
                    }
                    Bi(m);
                });
            }(Sb(), function (a) {
                return {
                    od: function (b) {
                        return db(jj(OF) + 'gpt/pubads_impl_' + b + '_' + a + '.js');
                    },
                    nd: function (b) {
                        return db('https://pagead2.googlesyndication.com/gpt/pubads_impl_' + b + '_' + a + '.js');
                    },
                    le: db('https://securepubads.g.doubleclick.net/pagead/js/rum.js'),
                    je: db('https://securepubads.g.doubleclick.net/pagead/js/rum_debug.js')
                };
            }));
        }.call(this, {}));
    }())
}