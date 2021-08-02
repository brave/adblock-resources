{
    const $___mock_74ac6b570a03df20 = {};
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
    })($___mock_74ac6b570a03df20);
    const $___mock_8520a5cab3fcb785 = {};
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
    })($___mock_8520a5cab3fcb785);
    (function () {
        (function (_) {
            var ca, ba, fa, ha, ia, la, na, pa, sa, ma, ra, ta, ua, wa, xa, ya, Aa, Da, Ga, Ia, Ea, La, Na, Pa, Qa, Sa, Ua, Wa, Ya, $a, bb, db, gb, hb, kb, lb, nb, pb, rb, sb, wb, xb, yb, Jb, Kb, Lb, Ob, Pb, Qb, Rb, Tb, Sb, Yb, $b, Zb, jc, rc, x, vc, sc, Bc, Cc, Dc, Ec, Gc, Ic, Jc, Yc, $c, cd, md, td, wd, yd, Dd, Fd, Id, Md, Pd, Qd, Rd, Sd, Wd, Yd, $d, fe, he, oe, te, ue, xe, ze, Ee, Fe, He, Ie, Ke, Le, Me, Te, Ue, Ve, Xe, Ye, $e, bf, df, ff, cf, mf, qf, vf, Af, pf, Sf, Tf, Xf, Yf, $f, cg, fg, gg, hg, ig, jg, kg, mg, rg, tg, vg, wg, xg, yg, Ag, zg, Fg, Gg, Jg, Lg, Ng, Og, Tg, Wg, Yg, ch, dh, eh, fh, gh, hh, ih, oh, uh, xh, Ah, Dh, Fh, Jh, Mh, Oh, Rh, Wh, Xh, hi, L, ii, ji, ki, li, mi, C, ni, oi, pi, qi, og, ri, si, ti, xi, yi, zi, Oi, Pi, qa, ka, Qi, Ri, Si, Ti, Wf;
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
                var a = Number('2021072403');
                return 1 > a || Math.floor(a) !== a ? (Wb({ v: '2021072403' }, 'gpt_inv_ver'), '1') : '2021072403';
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
                const $___old_b10a123a866a00c9 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                try {
                    if ($___old_b10a123a866a00c9)
                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_74ac6b570a03df20.localStorage));
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
                    if ($___old_b10a123a866a00c9)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_b10a123a866a00c9));
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
                            }) : a, B(h, C.Promise.all(e.map(function (k) {
                                return k.Fc.promise;
                            })), 2);
                        if (3 != h.j) {
                            if (a.length === e.length)
                                return h.return(0);
                            f = a.filter(function (k) {
                                return k.Bc;
                            });
                            g = _.Hc();
                            return B(h, C.Promise.race([
                                C.Promise.all(f.map(function (k) {
                                    return k.Fc.promise;
                                })),
                                new C.Promise(function (k) {
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
                'number' === typeof p ? D(b, 9, p) : (D(b, 9, Date.now()), void 0 !== p && c.I(Mc('Slot.setClientBid', Nc(a), 'responseTimestampMs', Nc(p))));
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
                'string' === typeof g ? D(b, 4, g) : c.I(Mc('Slot.setClientBid', Nc(a), 'currency', Nc(g)));
                Array.isArray(k) && k.every(function (E) {
                    return 'string' === typeof E;
                }) ? Eb(b, 6, k) : c.I(Mc('Slot.setClientBid', Nc(a), 'targetingKeys', Nc(k)));
                'number' === typeof n ? D(b, 8, n) : c.I(Mc('Slot.setClientBid', Nc(a), 'ttlMs', Nc(n)));
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
                D(b, 11, d);
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
                new C.Promise(function (d, e) {
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
                            return d = 'https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=' + a.j + ('&tv=' + a.m + '&st=') + a.Ta, e = void 0, l.G = 2, B(l, Jd(d), 4);
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
                                Mb: g,
                                Wb: h,
                                Lb: k
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
                            return B(e, Md(a), 2);
                        if (d = e.m) {
                            var f = 'sodar2';
                            f = void 0 === f ? 'sodar2' : f;
                            var g = window, h = g.GoogleGcLKhOms;
                            h && 'function' === typeof h.push || (h = g.GoogleGcLKhOms = []);
                            var k = {};
                            h.push((k._ctx_ = d.context, k._bgv_ = d.md, k._bgp_ = d.ld, k._li_ = d.Xd, k._jk_ = d.rb, k._st_ = d.Ta, k._rc_ = d.Mb, k._dl_ = d.Wb, k._g2_ = d.Lb, k));
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
                b = _.I(b);
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
                    _.gc(ae) && (be(b, Number(((0, J.M)(ce(b, 8)) - 1).toFixed(3))), D(b, 7, Math.round(e / 1000 / 60)));
                    return c().then(function (f) {
                        $d(29, a, null, { delta: String(_.Hc() - e) });
                        D(b, 3, Date.now());
                        de(a, b, f, d);
                        return b;
                    }).catch(function (f) {
                        de(a, b, K(b, 2), d);
                        $d(28, a, ee(f));
                        return b;
                    });
                } catch (f) {
                    return de(a, b, K(b, 2), d), $d(1, a, ee(f)), C.Promise.resolve(b);
                }
            };
            he = function () {
                var a = window;
                var b = void 0 === b ? function () {
                } : b;
                return new C.Promise(function (c) {
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
                            ]), ne(l), B(n, h.l.promise, 2);
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
                        return C.Promise.resolve(null);
                    var k = !1;
                    return new C.Promise(function (l) {
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
                                        $d(14, h), n = C.Promise.resolve(null);
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
                            var E = 'object' === typeof w.data ? w.data : JSON.parse(w.data);
                            p === E.paw_id && (_.ge(a, 'message', t), n.resolve(d(E)));
                        } catch (H) {
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
                    return C.Promise.resolve({ status: 4 });
                var b = Ue(a);
                if (!b)
                    return C.Promise.resolve({ status: 2 });
                if (a.parent === a.top && Ve(a.document.referrer))
                    return C.Promise.resolve({ status: 3 });
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
                return !!a && !!K(a, 1);
            };
            $e = function (a) {
                a = (We(a.top) ? a.top : a).AMP;
                return 'object' === typeof a && !!Ze(a, function (b, c) {
                    return !/^inabox/i.test(c);
                });
            };
            bf = function (a) {
                return new C.Map([
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
                    var e, f = (0, J.M)(a.pbjs);
                    null === (e = f.onEvent) || void 0 === e ? void 0 : e.call(f, 'setTargeting', sc(861, function (g) {
                        cf(f, g);
                    }));
                }));
            };
            ff = function (a) {
                var b;
                return null === (b = (L = _.u(Object, 'entries').call(Object, ef()), _.u(L, 'find')).call(L, function (c) {
                    var d = _.I(c);
                    c = d.next().value;
                    d = d.next().value;
                    return (L = K(d, 4), _.u(L, 'includes')).call(L, 'publisher_ads') && (c === a || d.getAdUnitPath() === a);
                })) || void 0 === b ? void 0 : b[1];
            };
            cf = function (a, b) {
                var c, d, e, f, g, h, k = null;
                b = _.I(_.u(Object, 'keys').call(Object, b));
                for (var l = b.next(); !l.done; l = b.next()) {
                    var m = l.value;
                    if (l = ff(m)) {
                        var n = null !== (g = null !== (d = null === (c = a.getBidResponsesForAdUnitCode) || void 0 === c ? void 0 : c.call(a, m)) && void 0 !== d ? d : null === (f = null === (e = a.getBidResponses) || void 0 === e ? void 0 : e.call(a)) || void 0 === f ? void 0 : f[m]) && void 0 !== g ? g : { bids: [] };
                        m = {};
                        n = _.I(null !== (h = n.bids) && void 0 !== h ? h : []);
                        for (var p = n.next(); !p.done; m = { xb: m.xb }, p = n.next()) {
                            p = Jc(p.value);
                            var t = p.Jd;
                            m.xb = p.adId;
                            p = Yc(t);
                            null != p && (null !== k && void 0 !== k ? k : k = K(p, 15), (t = (L = M(l, gf, 21), _.u(L, 'find')).call(L, function (w) {
                                return function (E) {
                                    return K(E, 1) === w.xb;
                                };
                            }(m))) ? hf(t, p) : (p = hf(jf(new gf(), m.xb), p), kf(l, p)));
                        }
                    }
                }
                k && _.gc(lf) && Math.random() < _.gc(lf) && mf(a, k);
            };
            mf = function (a, b) {
                var c, d, e, f, g = function (n, p) {
                        n = ff(n);
                        n = (null === n || void 0 === n ? void 0 : (L = M(n, gf, 21), _.u(L, 'find')).call(L, function (t) {
                            var w, E;
                            return 1 === (null === (w = N(t, Kc, 2)) || void 0 === w ? void 0 : K(w, 10)) && (null === (E = N(t, Kc, 2)) || void 0 === E ? void 0 : K(E, 1)) === p;
                        })) || (null === n || void 0 === n ? void 0 : kf(n, hf(new gf(), Xc(Qc(Oc(new Kc(), 1), p), b))));
                        return null === n || void 0 === n ? void 0 : N(n, Kc, 2);
                    }, h = (null === (c = null === a || void 0 === a ? void 0 : a.getEvents) || void 0 === c ? void 0 : c.call(a)) || [];
                h = _.I(h);
                for (var k = h.next(); !k.done; k = h.next())
                    switch (k = k.value, k.eventType) {
                    case 'bidRequested':
                        if (!Array.isArray(k.args) && Array.isArray(k.args.bids))
                            for (var l = _.I(k.args.bids), m = l.next(); !m.done; m = l.next())
                                m = m.value, m.bidder && m.adUnitCode && m.auctionId === b && (null === (d = g(m.adUnitCode, m.bidder)) || void 0 === d ? void 0 : nf(d, k.elapsedTime));
                        break;
                    case 'bidResponse':
                        !Array.isArray(k.args) && k.args.bidder && k.args.adUnitCode && k.args.auctionId === b && (l = g(k.args.adUnitCode, k.args.bidder), null === l || void 0 === l ? void 0 : nf(l, k.elapsedTime - ((null === l || void 0 === l ? void 0 : K(l, 13)) || 0)), null === l || void 0 === l ? void 0 : D(l, 14, 1));
                        break;
                    case 'bidTimeout':
                        if (Array.isArray(k.args))
                            for (k = _.I(k.args), m = k.next(); !m.done; m = k.next())
                                l = m.value, l.bidder && l.adUnitCode && l.auctionId === b && (l = g(l.adUnitCode, l.bidder), null === l || void 0 === l ? void 0 : D(l, 14, 3), null === l || void 0 === l ? void 0 : nf(l, (null === (f = null === (e = null === a || void 0 === a ? void 0 : a.getConfig) || void 0 === e ? void 0 : e.call(a)) || void 0 === f ? void 0 : f.bidderTimeout) || 0));
                        break;
                    case 'noBid':
                        !Array.isArray(k.args) && k.args.bidder && k.args.adUnitCode && k.args.auctionId === b && (l = g(k.args.adUnitCode, k.args.bidder), 3 !== (null === l || void 0 === l ? void 0 : K(l, 14)) && (null === l || void 0 === l ? void 0 : D(l, 14, 2), null === l || void 0 === l ? void 0 : nf(l, k.elapsedTime - (K(l, 13) || 0))));
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
                for (var b = new Bf(), c = _.I(M(a, gf, 21)), d = c.next(); !d.done; d = c.next()) {
                    var e = d.value;
                    d = (0, J.M)(N(e, Kc, 2));
                    var f = vf(b, (0, J.M)(K(d, 10)));
                    f = Af(f, (0, J.M)(K(d, 1)));
                    Cf(f, K(d, 13) || 0);
                    Df(f, K(d, 14) || 1);
                    var g = new Ef();
                    Ff(d, 2) && Gf(g, 1000000 * (0, J.M)(K(d, 2)));
                    Ff(d, 4) && Hf(g, (0, J.M)(K(d, 4)));
                    Ff(e, 1) && If(g, (0, J.M)(K(e, 1)));
                    e = {};
                    for (var h = _.I(K(d, 6)), k = h.next(); !k.done; e = { Ab: e.Ab }, k = h.next())
                        e.Ab = k.value, (L = M(a, Jf, 9), _.u(L, 'find')).call(L, function (l) {
                            return function (m) {
                                return Kf(m) === l.Ab;
                            };
                        }(e)) && Lf(g, 4, e.Ab);
                    Ff(d, 11) && Mf(g, K(d, 11));
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
                return new C.Map([
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
                                    Array.isArray(id(f)[0]) && (g = _.I(id(f)[0]), f = g.next().value, g = g.next().value, g = {
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
                                        g = void 0 === k.wb ? 50 : k.wb;
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
                                                                var E = t.getBoundingClientRect();
                                                                var H = 0 < E.right && 0 < E.bottom;
                                                                break b;
                                                            }
                                                        } catch (G) {
                                                        }
                                                        H = !1;
                                                    }
                                                    w = !H;
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
                return new C.Map([[
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
                    return new C.Map();
                var b = a.Bb, c = a.Tb, d = 0 === a.sd;
                return new C.Map([
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
                        { value: a.Nb }
                    ]
                ]);
            };
            cg = function (a, b) {
                var c, d, e, f;
                a = ag(a) || new bg();
                var g = sf(a, 6, 2);
                return new C.Map([
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
                        { value: null !== (c = K(b, 2)) && void 0 !== c ? c : null }
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
                        { value: null !== (d = K(b, 4)) && void 0 !== d ? d : null }
                    ],
                    [
                        'tcfe',
                        { value: null !== (e = K(b, 7)) && void 0 !== e ? e : null }
                    ],
                    [
                        'us_privacy',
                        { value: null !== (f = K(b, 1)) && void 0 !== f ? f : null }
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
                            value: Ff(a, 5) ? K(a, 5) : null,
                            options: { ia: !0 }
                        }
                    ]
                ]);
            };
            fg = function (a, b, c) {
                var d = window;
                return new C.Map([
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
                return new C.Map([
                    [
                        'hxva',
                        {
                            value: d ? 1 : null,
                            options: { da: !1 }
                        }
                    ],
                    [
                        'cmsid',
                        { value: d ? K(a, 23) : null }
                    ],
                    [
                        'vid',
                        { value: d ? K(a, 22) : null }
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
                            value: null !== (c = K(a, 29)) && void 0 !== c ? c : null,
                            options: { da: !1 }
                        }
                    ]
                ]);
            };
            hg = function (a, b) {
                return a && (a = N(a, Wc, 1)) ? K(a, 1) || b.innerWidth : 0;
            };
            ig = function (a, b) {
                return a && (a = N(a, Wc, 1)) ? K(a, 2) || b.innerHeight : 0;
            };
            jg = function (a) {
                return a && (a = N(a, Wc, 2)) ? K(a, 1) || 0 : 0;
            };
            kg = function (a) {
                return a && (a = N(a, Wc, 2)) ? K(a, 2) || 0 : 0;
            };
            mg = function (a, b, c) {
                a = a.map(function (e) {
                    return b[e.j];
                });
                var d = a.some(function (e) {
                    return Ff(e, 16);
                });
                return new C.Map([
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
                        f = _.I(f);
                        f.next();
                        f = og(f);
                        return b(c, f);
                    }, e = function (f) {
                        var g = _.I(f);
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
                return -1 !== b ? b : Ff(a, 1) ? Ff(a, 3) && 0 !== Ad() ? K(a, 1) * ce(a, 3) : K(a, 1) : null;
            };
            Gg = function (a) {
                var b = {};
                a = _.I(a);
                for (var c = a.next(); !c.done; c = a.next())
                    c = c.value, b[K(c, 1)] = K(c, 2);
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
                                return f && clearTimeout(f), f = 0, l = new Ge(), m = c(l.resolve), n = ++g, B(t, 0, 2);
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
                return new C.Promise(function (b) {
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
                    for (var E = 0; E < a; E++)
                        Lf(w, 1, E);
                    Gb(t, 7, w);
                    w = new mh();
                    for (E = 0; E < h; E++)
                        Lf(w, 1, n + E);
                    for (E = 0; E < k; E++)
                        Lf(w, 2, n + E);
                    Gb(t, 1, w);
                    w = m;
                    E = w.push;
                    var H = new nh();
                    t = Gb(H, 2, t);
                    E.call(w, t);
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
                D(d, 17, !0);
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
            Oh = function (a) {
                return !!Ze(Nh, function (b) {
                    return b === a;
                });
            };
            Rh = function (a, b, c) {
                c = _.O(Ph).add(a, [
                    1,
                    1
                ], {
                    fb: c,
                    format: b
                });
                a = c.slotId;
                c = c.Ma;
                if (a && c) {
                    if (5 === b && _.v(Qh))
                        return null;
                    D(c, 15, b);
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
            Wh = function () {
                var a = window, b = Th.L().j, c;
                if (a === a.top)
                    for (var d = {}, e = _.I(_.u(Uh, 'entries').call(Uh)), f = e.next(); !f.done; d = {
                            Wa: d.Wa,
                            Yb: d.Yb
                        }, f = e.next()) {
                        var g = _.I(f.value);
                        f = g.next().value;
                        g = g.next().value;
                        d.Wa = f;
                        d.Yb = g;
                        (L = null !== (c = a.location.hash) && void 0 !== c ? c : '', _.u(L, 'includes')).call(L, 'gam' + d.Wa + 'Demo') && Bc(789, function (h) {
                            return function () {
                                window.console && window.console.warn && window.console.warn('GPT - Demo ' + h.Wa + ' ENABLED');
                                var k = rh().defineOutOfPageSlot('/6499/example/' + h.Wa.toLowerCase(), h.Yb);
                                k && (k.addService(rh().pubads()), Vh(a.document, sc(790, function () {
                                    rh().enableServices();
                                    rh().display(k);
                                    y(b, 4) && rh().pubads().refresh([k]);
                                })));
                            };
                        }(d));
                    }
            };
            Xh = function (a) {
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
                    var d = Xh(a), e = function () {
                            return d.apply(this, arguments) || this;
                        };
                    _.P(e, d);
                    e.prototype.connectedCallback = function () {
                        var f = this.dataset.rendering, g;
                        if (f) {
                            try {
                                var h = Yh(bi, ci(f));
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
            C = {};
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
                        !a && e in C ? f = C : f = li;
                        for (e = 0; e < d.length - 1; e++) {
                            var g = d[e];
                            if (!(g in f))
                                break a;
                            f = f[g];
                        }
                        d = d[d.length - 1];
                        c = mi && 'es6' === c ? f[d] : null;
                        b = b(c);
                        null != b && (a ? ji(C, d, {
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
                a = (0, C.Symbol)('Symbol.iterator');
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
                a[_.u(C.Symbol, 'iterator')] = function () {
                    return this;
                };
                return a;
            };
            qi = function (a) {
                return a.raw = a;
            };
            _.I = function (a) {
                var b = 'undefined' != typeof C.Symbol && _.u(C.Symbol, 'iterator') && a[_.u(C.Symbol, 'iterator')];
                return b ? b.call(a) : { next: ii(a) };
            };
            og = function (a) {
                for (var b, c = []; !(b = a.next()).done;)
                    c.push(b.value);
                return c;
            };
            _.nc = function (a) {
                return a instanceof Array ? a : og(_.I(a));
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
                    _.u(C.Reflect, 'construct').call(C.Reflect, c, [], function () {
                    });
                    return new c() instanceof c;
                }
                if (mi && 'undefined' != typeof C.Reflect && _.u(C.Reflect, 'construct')) {
                    if (a())
                        return _.u(C.Reflect, 'construct');
                    var b = _.u(C.Reflect, 'construct');
                    return function (c, d, e) {
                        c = b(c, d);
                        e && _.u(C.Reflect, 'setPrototypeOf').call(C.Reflect, c, e.prototype);
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
            var B = function (a, b, c) {
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
                    this[_.u(C.Symbol, 'iterator')] = function () {
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
                    return new C.Promise(function (d, e) {
                        function f(g) {
                            g.done ? d(g.value) : C.Promise.resolve(g.value).then(b, c).then(f, e);
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
                    g.Db(h.resolve, h.reject);
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
                            } catch (E) {
                                m(E);
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
                        for (var l = _.I(g), m = l.next(); !m.done; m = l.next())
                            c(m.value).Db(h, k);
                    });
                };
                e.all = function (g) {
                    var h = _.I(g), k = h.next();
                    return k.done ? c([]) : new e(function (l, m) {
                        function n(w) {
                            return function (E) {
                                p[w] = E;
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
                            g = _.I(g);
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
                            var h = Object.seal({ x: 4 }), k = new a(_.I([[
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
                var b = new C.WeakMap(), c = function (h) {
                        this.m = {};
                        this.j = f();
                        this.size = 0;
                        if (h) {
                            h = _.I(h);
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
                c.prototype[_.u(C.Symbol, 'iterator')] = _.u(c.prototype, 'entries');
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
                e[_.u(C.Symbol, 'iterator')] = function () {
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
                            var c = Object.seal({ x: 4 }), d = new a(_.I([c]));
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
                    this.j = new C.Map();
                    if (c) {
                        c = _.I(c);
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
                b.prototype[_.u(C.Symbol, 'iterator')] = _.u(b.prototype, 'values');
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
                    var e = [], f = 'undefined' != typeof C.Symbol && _.u(C.Symbol, 'iterator') && b[_.u(C.Symbol, 'iterator')];
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
                return new (c || (c = C.Promise))(function (d, e) {
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
                return cl(this);
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
            bl.prototype[_.u(C.Symbol, 'iterator')] = function () {
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
            fl.prototype[_.u(C.Symbol, 'iterator')] = function () {
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
                }, K = function (a, b) {
                    if (b < a.G) {
                        b += a.l;
                        var c = a.m[b];
                        return c !== gl ? c : a.m[b] = Ja([]);
                    }
                    if (a.o)
                        return c = a.o[b], c !== gl ? c : a.o[b] = Ja([]);
                }, Ff = function (a, b) {
                    return null != K(a, b);
                }, ce = function (a, b) {
                    a = K(a, b);
                    return null == a ? a : +a;
                }, y = function (a, b) {
                    a = K(a, b);
                    return null == a ? a : !!a;
                }, jl = function (a, b) {
                    var c = K(a, b);
                    a.C || (a.C = {});
                    if (!a.C[b]) {
                        for (var d = 0; d < c.length; d++)
                            c[d] = +c[d];
                        a.C[b] = !0;
                    }
                    return c;
                }, sf = function (a, b, c) {
                    a = K(a, b);
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
                    var d = K(a, b);
                    d || (d = Ja([]), D(a, b, d));
                    c = new bl(d, c);
                    return a.j[b] = c;
                }, D = function (a, b, c) {
                    b < a.G ? a.m[b + a.l] = c : (hl(a), a.o[b] = c);
                    return a;
                }, Eb = function (a, b, c) {
                    return D(a, b, Ja(c || []));
                }, Cb = function (a, b, c, d) {
                    c !== d ? D(a, b, c) : b < a.G ? a.m[b + a.l] = null : (hl(a), delete a.o[b]);
                    return a;
                }, Lf = function (a, b, c) {
                    K(a, b).push(c);
                }, qc = function (a, b, c, d) {
                    (c = il(a, c)) && c !== b && void 0 !== d && (a.j && c in a.j && (a.j[c] = void 0), D(a, c, void 0));
                    return D(a, b, d);
                }, il = function (a, b) {
                    for (var c, d, e = 0; e < b.length; e++) {
                        var f = b[e], g = K(a, f);
                        null != g && (c = f, d = g, D(a, f, void 0));
                    }
                    return c ? (D(a, c, d), c) : 0;
                }, N = function (a, b, c) {
                    a.j || (a.j = {});
                    if (!a.j[c]) {
                        var d = K(a, c);
                        d && (a.j[c] = new b(d));
                    }
                    return a.j[c];
                }, M = function (a, b, c) {
                    a.j || (a.j = {});
                    if (!a.j[c]) {
                        for (var d = K(a, c), e = [], f = 0; f < d.length; f++)
                            e[f] = new b(d[f]);
                        a.j[c] = e;
                    }
                    return a.j[c];
                }, Gb = function (a, b, c) {
                    a.j || (a.j = {});
                    var d = c ? c.wa() : c;
                    a.j[b] = c;
                    return D(a, b, d);
                }, nl = function (a, b, c) {
                    a.j || (a.j = {});
                    c = c || [];
                    for (var d = Ja([]), e = 0; e < c.length; e++)
                        d[e] = c[e].wa();
                    a.j[b] = c;
                    return D(a, b, d);
                }, Nf = function (a, b, c, d) {
                    var e = M(a, d, b);
                    c = c ? c : new d();
                    a = K(a, b);
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
                }, Yh = function (a, b) {
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
            var We, Xl, pe, Wl, qe, Yl, hd, $l, qb, am, bm, Ze, dm, Zl, fm, gm, em, jd, hm, im, jm, km, lm, mm, nm, om, af, pm, qm, rm, Ad, sm, um, wm, Rf, zm, Am, ym, Bm, Cm, Em, Fm, Gm, Hm, Im, Lm, Km, Mm, Bb, Vh, Nm, Om, Pm, Nc, Qm;
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
                a = _.I(a);
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
            Vh = function (a, b) {
                'complete' === a.readyState || 'interactive' === a.readyState ? (Gm.push(b), 1 == Gm.length && (C.Promise ? C.Promise.resolve().then(Hm) : window.setImmediate ? setImmediate(Hm) : setTimeout(Hm, 0))) : a.addEventListener('DOMContentLoaded', b);
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
                return new C.Promise(function (b) {
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
            var Tm = function (a, b, c, d) {
                    this.left = a;
                    this.top = b;
                    this.width = c;
                    this.height = d;
                }, Um = function (a) {
                    return new _.Rm(a.top, a.left + a.width, a.top + a.height, a.left);
                }, Vm = function (a, b) {
                    var c = Math.max(a.left, b.left), d = Math.min(a.left + a.width, b.left + b.width);
                    if (c <= d) {
                        var e = Math.max(a.top, b.top);
                        a = Math.min(a.top + a.height, b.top + b.height);
                        if (e <= a)
                            return new Tm(c, e, d - c, a - e);
                    }
                    return null;
                };
            Tm.prototype.ceil = function () {
                this.left = Math.ceil(this.left);
                this.top = Math.ceil(this.top);
                this.width = Math.ceil(this.width);
                this.height = Math.ceil(this.height);
                return this;
            };
            Tm.prototype.floor = function () {
                this.left = Math.floor(this.left);
                this.top = Math.floor(this.top);
                this.width = Math.floor(this.width);
                this.height = Math.floor(this.height);
                return this;
            };
            Tm.prototype.round = function () {
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
            var Vf, qh, In, th, tc, Jn, Kn, Ln, Mn, Nn, On, Pn, Qn, Rn, Sn, lf, Tn, Un, Vn, Wn, Xn, Yn, Zn, $n, ao, bo, co, hc, wc, eo, fo, go, ho, io, jo, ko, lo, mo, no, oo, po, qo, ro, so, to, uo, vo, wo, xo, yo, zo, Ao, Bo, Zf, Co, Qh, vd, Do, Cg, Eo, Fo, Go, Ho, xc, Io, Jo, Ko, Lo, Mo, No, ug, Oo, Po, Qo, Ro, So, To, Uo, Vo, Eg, Wo, Xo, Yo, Zo, $o, ap, bp, cp, dp, ep, fp, gp, hp, ip, jp, kp, lp, mp, np, vh, xd, op, pp, qp, rp, sp, tp, up, vp, wp, xp, yp, zp, Ap, re, Bp, Cp, Dp, ae, Ep, Fp, Gp, Zd, Hp, Ip, Kp, Lp, od, Np, Op, Pp, Rp, Je, Sp, Tp, Up, Vp, Wp, Xp;
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
            so = new S(383133998, !0);
            to = new S(383432437);
            uo = new S(375971837, !0);
            vo = new S(384974428);
            wo = new S(382086337, !0);
            xo = new S(382109806);
            yo = new S(378147356, !0);
            zo = new S(375090993, !0);
            Ao = new S(20);
            Bo = new S(220);
            Zf = new S(200);
            Co = new S(111);
            Qh = new S(323);
            vd = new En(492, 0.01);
            Do = new En(363650251);
            Cg = new Gn(480);
            Eo = new En(17);
            Fo = new En(16);
            Go = new En(18);
            Ho = new S(83);
            xc = new S(85);
            Io = new S(305);
            Jo = new S(417);
            Ko = new S(471);
            Lo = new S(442);
            Mo = new S(390);
            No = new S(177);
            ug = new S(434);
            Oo = new S(464);
            Po = new S(35976);
            Qo = new S(35977);
            Ro = new S(3580985);
            So = new S(365635966);
            To = new S(3580885);
            Uo = new En(470, 10);
            Vo = new S(432);
            Eg = new En(8, -1);
            Wo = new S(440);
            Xo = new S(380853767);
            Yo = new S(381311271);
            Zo = new S(378410763);
            $o = new S(377598633);
            ap = new En(374201269, 60000);
            bp = new S(374201268, !0);
            cp = new En(371364213, 60000);
            dp = new En(373440923, 0.0001);
            ep = new En(376149757, 0.0025);
            fp = new S(371364212, !0);
            gp = new S(437, !0);
            hp = new S(377936516);
            ip = new S(320);
            jp = new En(47, 1);
            kp = new En(25);
            lp = new Gn(1);
            mp = new Fn(2, '1-0-38');
            np = new S(116);
            vh = new S(416);
            xd = new S(474);
            op = new S(373056376);
            pp = new Gn(489);
            qp = new S(371157910);
            rp = new S(360245598);
            sp = new En(360245595, 200);
            tp = new S(360245596);
            up = new En(359346956);
            vp = new En(61, 0.001);
            wp = new S(1936, !0);
            xp = new S(522);
            yp = new S(373821891, !0);
            zp = new S(501);
            Ap = new Fn(363931022);
            re = new S(1930);
            Bp = new Gn(1918, 'criteo index indextest openx openxtest pubcid.org pubmatic thetradedesktest'.split(' '));
            Cp = new S(453);
            Dp = new S(454);
            ae = new En(360261971);
            Ep = new En(1921, 72);
            Fp = new En(1920, 24);
            Gp = new En(1917, 300);
            Zd = new En(1916, 0.001);
            Hp = new S(1931, !0);
            Ip = new S(377431981, !0);
            _.Jp = new S(1944);
            Kp = new S(77);
            Lp = new S(78);
            od = new S(309);
            _.Mp = new S(1903);
            Np = new S(80);
            Op = new S(76);
            Pp = new S(81);
            _.Qp = new S(1940);
            Rp = new S(84);
            Je = new S(3655606);
            Sp = new S(188);
            Tp = new S(1928);
            Up = new S(1941);
            Vp = new S(370946349);
            Wp = new S(379841917);
            Xp = new S(385922407);
            var J = {
                af: function () {
                },
                Cf: function () {
                    return '';
                },
                Xe: function () {
                }
            };
            J.Bf = sb;
            var Yp = sb(function (a) {
                    return null !== a && void 0 !== a;
                }, 'exists'), tb = sb(function (a) {
                    return !!a;
                }, 'truthy');
            J.assert = function () {
            };
            J.vf = function (a) {
                return a;
            };
            J.Hf = wb;
            J.Kf = xb;
            J.uf = function () {
            };
            J.wf = function (a) {
                return a;
            };
            J.Jf = yb;
            J.Mf = function (a) {
                yb(a);
                return a;
            };
            J.tf = function () {
            };
            J.M = function (a) {
                return a;
            };
            J.If = function (a) {
                wb(a, Yp);
            };
            J.Lf = function (a) {
                return xb(a, Yp);
            };
            J.Af = function (a, b) {
                return a(b);
            };
            J.functionName = function (a) {
                var b = a.name;
                b || (b = (a = /function\s+([^\(]+)/m.exec(String(a))) ? a[1] : '(Anonymous)');
                return b;
            };
            var lc = function (a) {
                R.call(this, a, -1, Zp);
            };
            _.P(lc, R);
            var Zp = [3];
            var Hb = function (a) {
                R.call(this, a, -1, $p);
            };
            _.P(Hb, R);
            var $p = [4];
            var Ab = function (a) {
                R.call(this, a, -1, aq);
            };
            _.P(Ab, R);
            var aq = [2];
            var zb = function (a) {
                R.call(this, a, -1, void 0, pc);
            };
            _.P(zb, R);
            var pc = [[4]];
            var bq = null, cq = function () {
                    if (null === bq) {
                        bq = '';
                        try {
                            var a = '';
                            try {
                                a = _.F.top.location.hash;
                            } catch (c) {
                                a = _.F.location.hash;
                            }
                            if (a) {
                                var b = a.match(/\bdeid=([\d,]+)/);
                                bq = b ? b[1] : '';
                            }
                        } catch (c) {
                        }
                    }
                    return bq;
                };
            var dq;
            _.Hc = function () {
                var a = _.F.performance;
                return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Wf();
            };
            _.dg = function (a) {
                a = void 0 === a ? _.F : a;
                return (a = a.performance) && a.now ? a.now() : null;
            };
            dq = function (a) {
                var b = _.F.performance;
                return b && b.timing && b.timing[a] || 0;
            };
            var eq = function (a, b, c, d, e) {
                this.label = a;
                this.type = b;
                this.value = c;
                this.duration = void 0 === d ? 0 : d;
                this.uniqueId = Math.random();
                this.slotId = e;
            };
            var fq = _.F.performance, gq = !!(fq && fq.mark && fq.measure && fq.clearMarks), hq = gd(function () {
                    var a;
                    if (a = gq)
                        a = cq(), a = !!a.indexOf && 0 <= a.indexOf('1337');
                    return a;
                }), iq = function (a, b) {
                    this.events = [];
                    this.o = b || _.F;
                    var c = null;
                    b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
                    this.j = hq() || (null != c ? c : Math.random() < a);
                }, Ac = function (a) {
                    a && fq && hq() && (fq.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_start'), fq.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_end'));
                }, Mb = function (a, b, c, d, e, f) {
                    a.j && (b = new eq(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.events.length || a.events.push(b));
                };
            iq.prototype.start = function (a, b) {
                if (!this.j)
                    return null;
                a = new eq(a, b, _.dg() || _.Hc());
                b = 'goog_' + a.label + '_' + a.uniqueId + '_start';
                fq && hq() && fq.mark(b);
                return a;
            };
            iq.prototype.end = function (a) {
                if (this.j && 'number' === typeof a.value) {
                    a.duration = (_.dg() || _.Hc()) - a.value;
                    var b = 'goog_' + a.label + '_' + a.uniqueId + '_end';
                    fq && hq() && fq.mark(b);
                    !this.j || 2048 < this.events.length || this.events.push(a);
                }
            };
            var jq = function (a, b, c) {
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
            var kq;
            kq = {
                ef: 0,
                cd: 3,
                ed: 4,
                fd: 5
            };
            var lq = kq.cd, mq = kq.ed, nq = kq.fd;
            _.O = function (a) {
                if (a.Ca && a.hasOwnProperty('Ca'))
                    return a.Ca;
                var b = new a();
                return a.Ca = b;
            };
            var oq = im();
            var pq = function (a) {
                    this.methodName = a;
                }, qq = new pq(1), rq = new pq(15), sq = new pq(2), tq = new pq(3), uq = new pq(5), vq = new pq(6), wq = new pq(7), xq = new pq(8), yq = new pq(14), zq = function (a, b, c) {
                    return b[a.methodName] || c || function () {
                    };
                };
            var Aq = function () {
                    this.m = function () {
                    };
                    this.j = function () {
                        return [];
                    };
                    this.o = function () {
                        return [];
                    };
                }, Bq = function (a, b, c) {
                    a.m = zq(qq, b, function () {
                    });
                    a.j = function (d) {
                        return zq(sq, b, function () {
                            return [];
                        })(d, c);
                    };
                    a.o = function () {
                        return zq(tq, b, function () {
                            return [];
                        })(c);
                    };
                }, Db = function () {
                    return _.O(Aq).o();
                };
            var Cq, Dq, Bg;
            Cq = function () {
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
                return _.O(Cq).m(a.j, a.defaultValue);
            };
            _.gc = function (a) {
                return _.O(Cq).o(a.j, a.defaultValue);
            };
            Dq = function (a) {
                return _.O(Cq).l(a.j, a.defaultValue);
            };
            Bg = function (a) {
                return _.O(Cq).G(a.j, a.defaultValue);
            };
            var rh = function () {
                    return _.F.googletag || (_.F.googletag = {});
                }, ph = function (a, b) {
                    var c = rh();
                    c.hasOwnProperty(a) || (c[a] = b);
                }, Eq = function (a, b) {
                    a.addEventListener ? a.addEventListener('load', b, !1) : a.attachEvent && a.attachEvent('onload', b);
                };
            var Fq = {
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
                }, Gq, Hq, Iq, Jq, Kq;
            Fq[6] = jm(window);
            Fq[49] = new Date().getTime();
            Fq[36] = im();
            Fq[148] = oq;
            Fq[221] = im();
            Fq[254] = im();
            Fq[204] = _.Dg('-1', -1);
            Fq[257] = im();
            Fq[260] = void 0;
            Gq = function () {
                for (var a in Fq)
                    this[a] = Fq[a];
            };
            _.bc = function (a) {
                return _.O(Gq)[a];
            };
            Hq = rh();
            Iq = _.O(Gq);
            Jq = Hq._vars_;
            for (Kq in Jq)
                Iq[Kq] = Jq[Kq];
            Hq._vars_ = Iq;
            var Lq = {}, Mq = (Lq.companion_ads = 'companionAds', Lq.content = 'content', Lq.publisher_ads = 'pubads', Lq), Nq = function (a) {
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
            var Oq = function () {
                iq.apply(this, arguments);
            };
            _.P(Oq, iq);
            Oq.L = function () {
                throw Error('Must be overridden');
            };
            var Nb = function () {
                Oq.call(this, _.v(xc) || _.v(Rp) ? 1 : 0, _.F);
                this.m = 0;
                var a = _.v(xc) || _.v(Rp);
                _.F.google_measure_js_timing = a || _.F.google_measure_js_timing;
            };
            _.P(Nb, Oq);
            Pi(Nb);
            var Pq = gd(function () {
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
                }, Qq = function (a) {
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
                    if (Pq())
                        b = !0;
                    else {
                        var d = a.o;
                        b && 0 <= b && (d = (c ? a.m : Math.random()) < b);
                        b = d && !!a.id;
                    }
                    b && (_.v(Io) ? Wb(a.j, a.id) : (a = Rq(a) || '', _.bn(window, a)));
                }, Rq = function (a) {
                    var b = a.Zb + '/pagead/gen_204?id=' + encodeURIComponent(a.id);
                    _.ec(a.j, function (c, d) {
                        c && (b += '&' + d + '=' + encodeURIComponent(c));
                    });
                    return b;
                }, Sq = function (a, b) {
                    3 >= b.length ? r(a, 'nw_id', b.join()) : (b = b.slice(0, 3), b.push('__extra__'), r(a, 'nw_id', b.join()));
                }, dc = function (a, b) {
                    r(a, 'vrg', Sb());
                    b ? (Sq(a, b), r(a, 'nslots', b.length.toString())) : (Sq(a, [].concat(_.nc(_.u(oc, 'keys').call(oc)))), r(a, 'nslots', mc().toString()));
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
                }, oc = new C.Map();
            var ac = _.bc(38);
            _.Tq = function () {
                this.m = this.m;
                this.X = this.X;
            };
            _.Tq.prototype.m = !1;
            _.Tq.prototype.za = function () {
                this.m || (this.m = !0, this.G());
            };
            _.Uq = function (a, b) {
                _.Xg(a, _.Vi(Cc, b));
            };
            _.Xg = function (a, b) {
                a.m ? b() : (a.X || (a.X = []), a.X.push(b));
            };
            _.Tq.prototype.G = function () {
                if (this.X)
                    for (; this.X.length;)
                        this.X.shift()();
            };
            var Vq = function () {
                    this.id = 'goog_' + gk++;
                }, Wq = function () {
                    _.Tq.apply(this, arguments);
                    this.l = new C.Map();
                };
            _.P(Wq, _.Tq);
            Wq.prototype.G = function () {
                _.Tq.prototype.G.call(this);
                this.l.clear();
            };
            var Yq = function (a, b, c) {
                    var d, e;
                    if (a.m)
                        return function () {
                        };
                    var f = 'string' === typeof b ? b : b.id, g = null !== (e = null === (d = a.l.get(f)) || void 0 === d ? void 0 : d.add(c)) && void 0 !== e ? e : new C.Set([c]);
                    a.l.set(f, g);
                    return function () {
                        return void Xq(a, b, c);
                    };
                }, Hg = function (a, b, c) {
                    c = void 0 === c ? function () {
                        return !0;
                    } : c;
                    return new C.Promise(function (d) {
                        var e = Yq(a, b, function (f) {
                            c(f) && (e(), d(f));
                        });
                    });
                }, Xq = function (a, b, c) {
                    var d;
                    return !(null === (d = a.l.get('string' === typeof b ? b : b.id)) || void 0 === d || !d.delete(c));
                };
            Wq.prototype.dispatchEvent = function (a, b, c) {
                var d;
                return z(this, function f() {
                    var g = this, h, k, l, m, n, p, t;
                    return A(f, function (w) {
                        1 == w.j && (h = g, k = 'string' === typeof a ? a : a.id, l = document.createEvent('CustomEvent'), l.initCustomEvent(k, !0, !0, c), m = null !== (d = g.l.get(k)) && void 0 !== d ? d : new C.Set(), n = {}, p = _.I(m), t = p.next());
                        if (5 != w.j) {
                            if (t.done) {
                                w.j = 0;
                                return;
                            }
                            n.yb = t.value;
                            return B(w, 0, 5);
                        }
                        Bc(b, function (E) {
                            return function () {
                                h.l.has(k) && m.has(E.yb) && E.yb(l);
                            };
                        }(n), !0);
                        n = { yb: n.yb };
                        t = p.next();
                        w.j = 2;
                    });
                });
            };
            var Zq = new Vq(), $q = new Vq(), ar = new Vq(), br = new Vq(), cr = new Vq(), dr = new Vq(), er = new Vq(), fr = new Vq(), Ig = new Vq(), gr = new Vq();
            var hr = function (a, b) {
                b = void 0 === b ? [] : b;
                this.m = a;
                this.j = b;
            };
            hr.prototype.getMessageId = function () {
                return this.m;
            };
            hr.prototype.getMessageArgs = function () {
                return this.j;
            };
            var ir = function (a, b, c) {
                this.o = new Date();
                this.l = c;
                this.j = a;
                this.m = b;
            };
            _.q = ir.prototype;
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
                return this.o.toTimeString() + ': ' + jr[this.j] + ': ' + this.m;
            };
            var jr = [
                'Debug',
                'Info',
                'Warning',
                'Error',
                'Fatal'
            ];
            var kr = function (a, b, c) {
                Wq.call(this);
                this.C = a;
                this.Ca = b;
                this.A = this.C + '_' + this.Ca;
                this.j = c;
                this.o = null;
            };
            _.P(kr, Wq);
            kr.prototype.getAdUnitPath = function () {
                return this.C;
            };
            kr.prototype.getName = function () {
                return this.C;
            };
            kr.prototype.L = function () {
                return this.Ca;
            };
            kr.prototype.toString = function () {
                return this.A;
            };
            var lr = function (a, b) {
                a.o = b;
            };
            var mr = {
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
                }, nr = {
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
            var or = function () {
                this.m = 0;
                this.j = [];
            };
            _.q = or.prototype;
            _.q.add = function (a) {
                var b = this.j[this.m];
                this.j[this.m] = a;
                this.m = (this.m + 1) % 1000;
                return b;
            };
            _.q.get = function (a) {
                a = pr(this, a);
                return this.j[a];
            };
            _.q.set = function (a, b) {
                a = pr(this, a);
                this.j[a] = b;
            };
            _.q.isEmpty = function () {
                return 0 == this.j.length;
            };
            _.q.Jb = function () {
                for (var a = this.j.length, b = [], c = this.j.length - this.j.length; c < a; c++)
                    b.push(this.get(c));
                return b;
            };
            var pr = function (a, b) {
                if (b >= a.j.length)
                    throw Error('Out of bounds exception');
                return 1000 > a.j.length ? b : (a.m + Number(b)) % 1000;
            };
            var qr = function () {
                    this.j = new or();
                    this.m = this.o = 0;
                }, rr = function (a, b) {
                    return a.j.Jb().filter(function (c) {
                        return c.getSlot() === b;
                    });
                }, sr = function (a, b) {
                    return a.j.Jb().filter(function (c) {
                        return c.getLevel() >= b;
                    });
                };
            qr.prototype.log = function (a, b, c, d) {
                var e = this;
                d = void 0 === d ? !1 : d;
                var f, g;
                c = new ir(a, b, null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.o) ? g : null);
                this.j.add(c);
                f = _.v(go) && !_.v(ho);
                g = _.v(ho) && _.F.top == _.F.self;
                var h = _.gc(io) && 100 > this.o, k = 2 === a || 3 === a, l = this.m < _.gc(jo) && k && _.F.console, m = b.getMessageArgs(), n = b.getMessageId(), p = mr[n] || nr[n];
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
                        var t, w, E, H;
                        2 === a ? null == (w = (t = _.F.console).warn) || w.call(t, b) : null == (H = (E = _.F.console).error) || H.call(E, b);
                        this.m++;
                    }
                }
                return c;
            };
            qr.prototype.info = function (a, b) {
                return this.log(1, a, void 0 === b ? null : b);
            };
            qr.prototype.I = function (a, b) {
                return this.log(2, a, b);
            };
            qr.prototype.error = function (a, b, c) {
                return this.log(3, a, b, void 0 === c ? !1 : c);
            };
            var Lc = function () {
                return _.O(qr);
            };
            var T = function (a) {
                    return function (b) {
                        for (var c = [], d = 0; d < arguments.length; ++d)
                            c[d] = arguments[d];
                        return new hr(a, [].concat(_.nc(c)));
                    };
                }, tr = function (a) {
                    return '[' + a.map(function (b) {
                        return 'string' === typeof b ? '\'' + b + '\'' : Array.isArray(b) ? tr(b) : String(b);
                    }).join(', ') + ']';
                }, Hh = function (a, b) {
                    b = tr(b);
                    b = b.substring(1, b.length - 1);
                    return new hr(96, [
                        a,
                        b
                    ]);
                }, ur = T(2), vr = T(3), wr = T(4), xr = T(5), yr = T(6), zr = T(12), Ar = T(14), Br = T(16), Cr = T(19), Dr = T(20), Er = T(23), Fr = T(26), Gr = T(28), Hr = T(30), Ir = T(31), Jr = T(34), Kr = T(35), Lr = T(36), Mr = T(38), Nr = T(40), Or = T(46), Pr = T(48), Qr = T(50), Rr = T(60), Sr = T(63), Tr = T(64), Ur = T(66), Vr = T(68), Wr = T(69), Xr = T(70), Yr = T(71), Zr = T(78), $r = T(80), as = T(82), bs = T(84), cs = T(85), ds = T(87), es = T(88), fs = T(92), gs = T(93), hs = T(99), is = T(103), js = T(104), ks = T(105), ls = T(106), ms = T(107), ns = T(108), os = T(113), ps = T(114), qs = T(115), rs = T(116), ss = T(117), ts = T(118), us = T(119), sh = T(120), Mc = T(121), Pc = T(122), vs = T(123), ws = T(124), ei = T(125);
            var xs = function () {
                Wq.call(this);
                this.o = this.j = 0;
            };
            _.P(xs, Wq);
            xs.prototype.push = function (a) {
                for (var b = Lc(), c = 0; c < arguments.length; ++c)
                    try {
                        'function' === typeof arguments[c] && (arguments[c](), this.j++);
                    } catch (d) {
                        this.o++, window.console && window.console.error && window.console.error('Exception in queued GPT command', d), b.error(Hr(String(d)));
                    }
                b.info(Ir(String(this.j), String(this.o)));
                return this.j;
            };
            var zs = function (a) {
                R.call(this, a, -1, ys);
            };
            _.P(zs, R);
            var As = function (a) {
                R.call(this, a);
            };
            _.P(As, R);
            var ys = [4];
            var Cs = function (a) {
                R.call(this, a, -1, Bs);
            };
            _.P(Cs, R);
            var Ds = function (a) {
                R.call(this, a);
            };
            _.P(Ds, R);
            var Bs = [1];
            var Es = function (a) {
                R.call(this, a);
            };
            _.P(Es, R);
            var Fs = function (a) {
                R.call(this, a);
            };
            _.P(Fs, R);
            var Gs = function (a) {
                R.call(this, a);
            };
            _.P(Gs, R);
            var Hs = function (a) {
                    return 'CSS1Compat' == a.compatMode ? a.documentElement : a.body;
                }, Is = function (a, b) {
                    b = void 0 === b ? _.F : b;
                    a = a.scrollingElement || Hs(a);
                    return new _.ld(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop);
                }, kd = function (a) {
                    try {
                        return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length));
                    } catch (b) {
                        return !1;
                    }
                };
            var Js = function (a, b, c) {
                a && null !== b && b != b.top && (b = b.top);
                try {
                    return (void 0 === c ? 0 : c) ? new _.Cl(b.innerWidth, b.innerHeight).round() : _.Jl(b || window).round();
                } catch (d) {
                    return new _.Cl(-12245933, -12245933);
                }
            };
            var Ks = function (a) {
                for (var b = 0, c = a, d = 0; a && a != a.parent;)
                    a = a.parent, d++, We(a) && (c = a, b = d);
                return {
                    H: c,
                    level: b
                };
            };
            var Ls = function (a) {
                    return !!a && a.top == a;
                }, Ms = function (a, b, c, d) {
                    c = c || a.google_ad_width;
                    d = d || a.google_ad_height;
                    if (Ls(a))
                        return !1;
                    var e = b.documentElement;
                    if (c && d) {
                        var f = 1, g = 1;
                        a.innerHeight ? (f = a.innerWidth, g = a.innerHeight) : e && e.clientHeight ? (f = e.clientWidth, g = e.clientHeight) : b.body && (f = b.body.clientWidth, g = b.body.clientHeight);
                        if (g > 2 * d || f > 2 * c)
                            return !1;
                    }
                    return !0;
                }, Ns = function (a) {
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
            var Os = function (a, b, c, d, e, f) {
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
                            0 < c ? Os(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f());
                        });
                    } catch (k) {
                        f();
                    }
                }, Ps = function (a, b, c, d) {
                    c = void 0 === c ? function () {
                    } : c;
                    d = void 0 === d ? function () {
                    } : d;
                    Os(Fl(a), b, 0, !1, c, d);
                };
            var Qs = function (a) {
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
            var Rs = function (a) {
                    void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent && (a.addtlConsent = void 0);
                    void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies && (a.gdprApplies = void 0);
                    return void 0 !== a.tcString && 'string' !== typeof a.tcString || void 0 !== a.listenerId && 'number' !== typeof a.listenerId ? 2 : a.cmpStatus && 'error' !== a.cmpStatus ? 0 : 3;
                }, Ss = function (a, b) {
                    b = void 0 === b ? 500 : b;
                    _.Tq.call(this);
                    this.j = a;
                    this.o = null;
                    this.C = {};
                    this.B = 0;
                    this.A = b;
                    this.l = null;
                };
            _.P(Ss, _.Tq);
            Ss.prototype.G = function () {
                this.C = {};
                this.l && (_.ge(this.j, 'message', this.l), delete this.l);
                delete this.C;
                delete this.j;
                delete this.o;
                _.Tq.prototype.G.call(this);
            };
            var Us = function (a) {
                return 'function' === typeof a.j.__tcfapi || null != Ts(a);
            };
            Ss.prototype.addEventListener = function (a) {
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
                    f ? (b = f, b.internalErrorState = Rs(b), g && 0 === b.internalErrorState || (b.tcString = 'tcunavailable', g || (b.internalErrorState = 3))) : (b.tcString = 'tcunavailable', b.internalErrorState = 3);
                    a(b);
                };
                try {
                    Vs(this, 'addEventListener', e);
                } catch (f) {
                    b.tcString = 'tcunavailable', b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c();
                }
            };
            Ss.prototype.removeEventListener = function (a) {
                a && a.listenerId && Vs(this, 'removeEventListener', null, a.listenerId);
            };
            var Xs = function (a, b) {
                    var c = { internalErrorState: 0 }, d = _.bj(function () {
                            return b(c);
                        }), e = 0;
                    -1 !== a.A && (e = setTimeout(function () {
                        c.tcString = 'tcunavailable';
                        c.internalErrorState = 1;
                        d();
                    }, a.A));
                    Vs(a, 'addEventListener', function (f, g) {
                        e && (clearTimeout(e), e = 0);
                        g && (c = f);
                        c.internalErrorState = Rs(c);
                        0 != c.internalErrorState && (c.tcString = 'tcunavailable');
                        if (0 != c.internalErrorState || Ws(c))
                            Vs(a, 'removeEventListener', null, c.listenerId), d();
                    });
                }, Vs = function (a, b, c, d) {
                    c || (c = function () {
                    });
                    if ('function' === typeof a.j.__tcfapi)
                        a = a.j.__tcfapi, a(b, 2, c, d);
                    else if (Ts(a)) {
                        Ys(a);
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
                }, Ts = function (a) {
                    if (a.o)
                        return a.o;
                    a.o = qm(a.j, '__tcfapiLocator');
                    return a.o;
                }, Ys = function (a) {
                    a.l || (a.l = function (b) {
                        try {
                            var c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                            a.C[c.callId](c.returnValue, c.success);
                        } catch (d) {
                        }
                    }, _.Hd(a.j, 'message', a.l));
                }, Ws = function (a) {
                    if (!1 === a.gdprApplies)
                        return !0;
                    void 0 === a.internalErrorState && (a.internalErrorState = Rs(a));
                    return 'error' === a.cmpStatus || 0 !== a.internalErrorState || 'loaded' === a.cmpStatus && ('tcloaded' === a.eventStatus || 'useractioncomplete' === a.eventStatus) ? !0 : !1;
                };
            var Zs = function (a, b, c) {
                    this.j = a;
                    this.o = b;
                    this.m = void 0 === c ? function () {
                    } : c;
                }, $s = function (a, b, c) {
                    return new Zs(a, b, c);
                };
            Zs.prototype.start = function () {
                try {
                    Qs(this.j), at(this);
                } catch (a) {
                }
            };
            var at = function (a) {
                var b = Nd(kj('https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}'), {
                    id: a.o,
                    ers: 3
                });
                Ps(a.j, b, function () {
                    a.m(!0);
                }, function () {
                    a.m(!1);
                });
            };
            var ct = function (a) {
                R.call(this, a, -1, bt);
            };
            _.P(ct, R);
            var et = function (a, b) {
                    Nf(a, 1, b, dt);
                }, dt = function (a) {
                    R.call(this, a);
                };
            _.P(dt, R);
            var ft = function (a) {
                    var b = new dt();
                    return Ib(b, 1, a);
                }, gt = function (a, b) {
                    return Cb(a, 2, b, 0);
                }, bt = [1];
            var it = function (a, b) {
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
                        if (d = Yh(ct, e), e) {
                            var f = Yh(ct, e);
                            et(f, gt(ft(1), -1));
                            ql(f);
                        }
                    } catch (h) {
                        ht(e), d = new ct();
                    }
                    f = M(d, dt, 1);
                    if (f = ca(f, function (h) {
                            return sf(h, 1, 0) === b;
                        })) {
                        var g = jh(f, 2);
                        if (null === g || isNaN(g))
                            ht(e);
                        else
                            return g;
                    }
                    c = fm(c);
                    if (null === c)
                        return null;
                    f ? gt(f, c) : et(d, gt(ft(b), c));
                    return gm(a, ql(d)) ? c : null;
                }, ht = function (a) {
                    0.01 > Math.random() && Wb({ data: a }, 'ls_tamp');
                };
            var Fc = function (a) {
                    this.j = a || { cookie: '' };
                }, kt = function () {
                    var a = jt;
                    if (!_.F.navigator.cookieEnabled)
                        return !1;
                    if (!a.isEmpty())
                        return !0;
                    a.set('TESTCOOKIESENABLED', '1', { Pb: 60 });
                    if ('1' !== a.get('TESTCOOKIESENABLED'))
                        return !1;
                    a.get('TESTCOOKIESENABLED');
                    a.set('TESTCOOKIESENABLED', '', {
                        Pb: 0,
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
                    var h = c.Pb;
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
            Fc.prototype.Jb = function () {
                for (var a = (this.j.cookie || '').split(';'), b = [], c = [], d, e, f = 0; f < a.length; f++)
                    e = yj(a[f]), d = e.indexOf('='), -1 == d ? (b.push(''), c.push(e)) : (b.push(e.substring(0, d)), c.push(e.substring(d + 1)));
                return c;
            };
            Fc.prototype.isEmpty = function () {
                return !this.j.cookie;
            };
            var lt = new Fc('undefined' == typeof document ? null : document);
            var mt = function (a) {
                R.call(this, a);
            };
            _.P(mt, R);
            var nt = function () {
                    this.j = window;
                    this.m = 0;
                }, pt = function (a, b) {
                    if (0 === a.m) {
                        if (ot(a, b))
                            b = !0;
                        else {
                            var c = a.j;
                            y(b, 5) && Ec(c) && new Fc(c.document).set('GoogleAdServingTest', 'Good', void 0);
                            if (c = 'Good' === Gc('GoogleAdServingTest', b, a.j)) {
                                var d = a.j;
                                y(b, 5) && Ec(d) && (b = new Fc(d.document), b.get('GoogleAdServingTest'), b.set('GoogleAdServingTest', '', {
                                    Pb: 0,
                                    path: void 0,
                                    domain: void 0
                                }));
                            }
                            b = c;
                        }
                        a.m = b ? 2 : 1;
                    }
                    return 2 === a.m;
                }, ot = function (a, b) {
                    var c;
                    b ? c = b ? Gc('__gads', b, a.j) : null : c = null;
                    return c;
                }, qt = function (a, b, c) {
                    if (c) {
                        if (c) {
                            var d = {
                                    Pb: K(b, 2) - Date.now() / 1000,
                                    path: K(b, 3),
                                    domain: K(b, 4),
                                    oe: !1
                                }, e = K(b, 1), f = a.j;
                            y(c, 5) && Ec(f) && new Fc(f.document).set('__gads', e, d);
                        }
                        y(c, 5) && 0.01 > a.j.Math.random() && (c = ot(a, c), Wb({
                            domain: K(b, 4),
                            host: a.j.location.host,
                            success: c === K(b, 1) ? '1' : '0'
                        }, 'gfp_cw_status'));
                    }
                };
            var rt = {}, st = (rt[3] = rj(jj(kj('https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js'))), rt), tt = {}, ut = (tt[3] = rj(jj(kj('https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js'))), tt);
            var vt = function (a) {
                    this.j = a;
                    this.m = fk();
                }, wt = function (a) {
                    var b = {};
                    _.dj(a, function (c) {
                        b[c.j] = c.m;
                    });
                    return b;
                };
            var yt, zt, At;
            yt = function () {
                return 0 != _.xt(document);
            };
            _.xt = function (a) {
                return {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ''] || 0;
            };
            zt = function (a) {
                var b;
                a.visibilityState ? b = 'visibilitychange' : a.mozVisibilityState ? b = 'mozvisibilitychange' : a.webkitVisibilityState && (b = 'webkitvisibilitychange');
                return b;
            };
            At = function (a) {
                return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null;
            };
            var Bt = function () {
                    this.j = [];
                    this.m = [];
                    this.o = [];
                }, Ct = function (a, b, c) {
                    a.m.push({
                        Bc: void 0 === c ? !1 : c,
                        Fc: b
                    });
                };
            var Ge = function () {
                var a = this;
                this.promise = new C.Promise(function (b, c) {
                    a.resolve = b;
                    a.reject = c;
                });
            };
            var Dt = function (a) {
                a = Error.call(this, a);
                this.message = a.message;
                'stack' in a && (this.stack = a.stack);
                _.u(Object, 'setPrototypeOf').call(Object, this, Dt.prototype);
                this.name = 'InputError';
            };
            _.P(Dt, Error);
            var Et = function () {
                    var a = this;
                    this.X = this.l = null;
                    this.C = -1;
                    this.G = new Ge();
                    this.o = !1;
                    this.G.promise.then(function () {
                        -1 !== a.C && (a.X = _.Hc() - a.C);
                    }, function () {
                    });
                }, Ft = function () {
                    Et.apply(this, arguments);
                };
            _.P(Ft, Et);
            Ft.prototype.j = function (a) {
                this.o || (this.o = !0, this.l = a, this.G.resolve(a));
            };
            Ft.prototype.m = function (a) {
                null == a ? Gt(this) : this.j(a);
            };
            var Gt = function (a) {
                    a.o || (a.o = !0, a.l = null, a.G.resolve(null));
                }, Ht = function (a, b) {
                    a.o || (a.o = !0, a.l = null, a.J = b, a.G.reject(b));
                };
            li.Object.defineProperties(Ft.prototype, {
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
            var It = function (a) {
                Et.call(this);
                this.j = a;
            };
            _.P(It, Et);
            var Jt = function (a) {
                return null !== a.j.l;
            };
            li.Object.defineProperties(It.prototype, {
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
            var Kt = function () {
                It.apply(this, arguments);
            };
            _.P(Kt, It);
            li.Object.defineProperties(Kt.prototype, {
                value: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.j.l;
                    }
                }
            });
            var Lt = function () {
                Ft.apply(this, arguments);
            };
            _.P(Lt, Ft);
            Lt.prototype.notify = function () {
                Gt(this);
            };
            var Mt = function (a, b) {
                b = void 0 === b ? 0 : b;
                _.Tq.call(this);
                var c = this;
                this.id = a;
                this.wb = b;
                this.o = new Bt();
                this.$ = !1;
                this.U = -1;
                _.Xg(this, function () {
                    var d = c.o;
                    d.j.length = 0;
                    d.o.length = 0;
                    d.m.length = 0;
                });
            };
            _.P(Mt, _.Tq);
            Mt.prototype.start = function () {
                return z(this, function b() {
                    var c = this, d, e, f, g;
                    return A(b, function (h) {
                        switch (h.j) {
                        case 1:
                            if (c.$)
                                return h.return();
                            c.$ = !0;
                            h.G = 2;
                            return B(h, Ic(c.o.m, c.wb), 4);
                        case 4:
                            c.U = h.m;
                            if (c.m) {
                                h.j = 5;
                                break;
                            }
                            for (var k = 0, l = _.I(c.o.o), m = l.next(); !m.done; m = l.next()) {
                                if (!Jt(m.value))
                                    throw Error('missing input: ' + c.id + '/' + k);
                                ++k;
                            }
                            d = _.I(c.o.j);
                            for (e = d.next(); !e.done; e = d.next())
                                f = e.value, f.C = _.Hc();
                            return B(h, c.j(), 5);
                        case 5:
                            Kd(h, 0);
                            break;
                        case 2:
                            g = Ld(h);
                            if (c.m)
                                return h.return();
                            g instanceof Dt ? c.V(g) : g instanceof Error && (c.J(g), c.C(g));
                            Bi(h);
                        }
                    });
                });
            };
            var U = function (a) {
                    var b = new Ft();
                    a.o.j.push(b);
                    return b;
                }, Nt = function (a) {
                    var b = new Lt();
                    a.o.j.push(b);
                    return b;
                }, V = function (a, b) {
                    Ct(a.o, b);
                    b = new Kt(b);
                    a.o.o.push(b);
                    return b;
                }, W = function (a, b) {
                    Ct(a.o, b);
                    return new It(b);
                }, Ot = function (a, b) {
                    Ct(a.o, b, !0);
                    return new It(b);
                }, Pt = function (a, b) {
                    Ct(a.o, b);
                };
            Mt.prototype.V = function () {
            };
            Mt.prototype.C = function (a) {
                if (this.o.j.length) {
                    a = new Dt(a.message);
                    for (var b = _.I(this.o.j), c = b.next(); !c.done; c = b.next())
                        if (c = c.value, !c.A) {
                            var d = a;
                            c.o = !0;
                            c.J = d;
                            c.G.reject(d);
                        }
                }
            };
            var le = function () {
                _.Tq.apply(this, arguments);
                this.j = [];
            };
            _.P(le, _.Tq);
            var me = function (a, b) {
                    b = _.I(b);
                    for (var c = b.next(); !c.done; c = b.next())
                        c = c.value, _.Uq(a, c), a.j.push(c);
                }, X = function (a, b) {
                    me(a, [b]);
                }, ne = function (a) {
                    if (a.j.length) {
                        a = _.I(a.j);
                        for (var b = a.next(); !b.done; b = a.next())
                            b.value.start();
                    }
                };
            le.prototype.G = function () {
                _.Tq.prototype.G.call(this);
                this.j.length = 0;
            };
            var Rt, Qt;
            Rt = function () {
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
                this.floatingAdsStacking = new Qt();
            };
            _.zd = function (a) {
                a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Qt()) : a.google_reactive_ads_global_state = new Rt();
                return a.google_reactive_ads_global_state;
            };
            Qt = function () {
                this.maxZIndexRestrictions = {};
                this.nextRestrictionId = 0;
                this.maxZIndexListeners = [];
            };
            var Cd, nd, qd;
            Cd = 728 * 1.38;
            _.Bd = function (a) {
                return a.innerHeight >= a.innerWidth;
            };
            _.St = function (a) {
                var b = _.pd(a).clientWidth;
                a = a.innerWidth;
                return b && a ? b / a : 0;
            };
            nd = function (a, b) {
                return (a = _.pd(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384;
            };
            qd = function (a) {
                return (a = _.St(a)) ? 1.05 < a ? 262144 : 0.95 > a ? 524288 : 0 : 131072;
            };
            _.pd = function (a) {
                a = a.document;
                var b = {};
                a && (b = 'CSS1Compat' == a.compatMode ? a.documentElement : a.body);
                return b || {};
            };
            _.Tt = function (a) {
                return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset;
            };
            var Vt, Ut;
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
                return b ? null : (a = Ut(a)) ? Vt(a) : null;
            };
            Vt = function (a) {
                a = void 0 === a ? [] : a;
                var b = Date.now();
                return _.De(a, function (c) {
                    return 3600000 > b - c;
                });
            };
            _.rd = function (a) {
                return !!a && 1 > a.length;
            };
            Ut = function (a) {
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
            var Wt = function (a) {
                R.call(this, a);
            };
            _.P(Wt, R);
            var Yt = function (a) {
                R.call(this, a, -1, Xt);
            };
            _.P(Yt, R);
            var Xt = [
                1,
                2
            ];
            var Zt = function (a) {
                R.call(this, a);
            };
            _.P(Zt, R);
            var $t = function (a) {
                R.call(this, a);
            };
            _.P($t, R);
            var au = function (a) {
                _.Tq.call(this);
                this.j = a;
                this.l = this.o = null;
                this.C = {};
                this.B = 0;
                this.A = !1;
            };
            _.P(au, _.Tq);
            var bu = function (a) {
                    a.A || (a.o || (a.j.googlefc ? a.o = a.j : a.o = qm(a.j, 'googlefcPresent')), a.A = !0);
                    return !!a.o;
                }, du = function (a, b, c) {
                    if (bu(a))
                        if (a.o === a.j)
                            a = a.j.googlefc || (a.j.googlefc = {}), a.__fci = a.__fci || [], a.__fci.push(b, function (f) {
                                c(Yh($t, f));
                            });
                        else {
                            cu(a);
                            var d = a.B++;
                            a.C[d] = c;
                            var e = {};
                            a.o.postMessage((e.__fciCall = {
                                command: b,
                                callId: d
                            }, e), '*');
                        }
                }, eu = function (a, b) {
                    return new C.Promise(function (c) {
                        du(a, b, c);
                    });
                }, cu = function (a) {
                    a.l || (a.l = function (b) {
                        try {
                            var c = Yh($t, b.data.__fciReturn);
                            (0, a.C[K(c, 1)])(c);
                        } catch (d) {
                        }
                    }, _.Hd(a.j, 'message', a.l));
                }, fu = function (a, b, c, d) {
                    if (!b)
                        return C.Promise.resolve(null);
                    var e = N(b, Wt, 3);
                    b = N(b, Zt, 2);
                    return e && b && 1 === K(b, 1) && 2 === K(e, 1) ? eu(a, 'getM25Consent').then(function (f) {
                        var g = N(f, Yt, 4);
                        if (g) {
                            if (f = d, c) {
                                var h = K(g, 1);
                                h && _.u(h, 'includes').call(h, c) && (f = !1);
                                (g = K(g, 2)) && _.u(g, 'includes').call(g, c) && (f = !0);
                            }
                        } else
                            f = null;
                        return f;
                    }) : C.Promise.resolve(null);
                };
            var gu = function () {
                this.j = [];
                this.m = -1;
            };
            gu.prototype.set = function (a, b) {
                b = void 0 === b ? !0 : b;
                0 <= a && 52 > a && 0 === a % 1 && this.j[a] != b && (this.j[a] = b, this.m = -1);
            };
            gu.prototype.get = function (a) {
                return !!this.j[a];
            };
            var hu = function (a) {
                -1 == a.m && (a.m = ej(a.j, function (b, c, d) {
                    return c ? b + Math.pow(2, d) : b;
                }));
                return a.m;
            };
            var iu = function () {
                }, nu, ru, su, eg, mu, lu, ku, tu;
            iu.L = function () {
                throw Error('Must be overridden');
            };
            var ju = function () {
                this.F = _.v(qo) ? Bb(_.F) : 0;
                this.m = this.hb = null;
                this.j = new C.Map();
            };
            _.P(ju, iu);
            nu = function (a, b) {
                a.j.get(b) || (a.j.set(b, {
                    La: !0,
                    Sb: '',
                    Ia: '',
                    Tc: 0,
                    Jc: 0,
                    lc: [],
                    mc: [],
                    isBackfill: !1,
                    Qa: !1
                }), _.Xg(b, function () {
                    a.j.delete(b);
                    ku(a, b);
                }), Yq(b, ar, function (c) {
                    c = c.detail;
                    var d = (0, J.M)(a.j.get(b));
                    d.Sb = K(c, 33) || '';
                    d.Qa = !0;
                    d.isBackfill = !!y(c, 9);
                    lu(a, b, function () {
                        d.Sb = '';
                    });
                    mu(a, b, function () {
                        d.isBackfill = !1;
                        d.Qa = !1;
                    });
                }));
            };
            _.ou = function (a, b) {
                var c, d;
                return null !== (d = null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.La) && void 0 !== d ? d : !1;
            };
            _.pu = function (a, b) {
                a.j.get(b) && (a.j.get(b).La = !1);
            };
            _.qu = function (a, b) {
                a.j.get(b) && (a.j.get(b).La = !0);
            };
            ru = function (a, b) {
                if (!b.length)
                    return [];
                var c = Lb(b[0].getAdUnitPath());
                b.every(function (d) {
                    return Lb(d.getAdUnitPath()) === c;
                });
                return [].concat(_.nc(_.u(a.j, 'entries').call(a.j))).filter(function (d) {
                    d = _.I(d);
                    var e = d.next().value;
                    return !!d.next().value.Sb && Lb(e.getAdUnitPath()) === c && !_.u(b, 'includes').call(b, e);
                }).map(function (d) {
                    d = _.I(d);
                    d.next();
                    return d.next().value.Sb;
                });
            };
            su = function (a, b) {
                var c, d;
                return null !== (d = null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.Ia) && void 0 !== d ? d : '';
            };
            eg = function (a, b) {
                return (a = a.j.get(b)) && a.Tc - 1 || 0;
            };
            mu = function (a, b, c) {
                (a = a.j.get(b)) && a.lc.push(c);
            };
            lu = function (a, b, c) {
                (a = a.j.get(b)) && a.mc.push(c);
            };
            ku = function (a, b) {
                if (a = a.j.get(b))
                    for (b = a.mc.slice(), a.mc.length = 0, a = _.I(b), b = a.next(); !b.done; b = a.next())
                        b = b.value, b();
            };
            tu = function (a, b) {
                if (a = a.j.get(b))
                    for (b = a.lc.slice(), a.lc.length = 0, a = _.I(b), b = a.next(); !b.done; b = a.next())
                        b = b.value, b();
            };
            ju.prototype.isBackfill = function (a) {
                var b, c;
                return null !== (c = null === (b = this.j.get(a)) || void 0 === b ? void 0 : b.isBackfill) && void 0 !== c ? c : !1;
            };
            ju.prototype.Qa = function (a) {
                var b, c;
                return null !== (c = null === (b = this.j.get(a)) || void 0 === b ? void 0 : b.Qa) && void 0 !== c ? c : !1;
            };
            Pi(ju);
            var uu = function () {
                var a = {};
                return a.adsense_channel_ids = 'channel', a.adsense_ad_types = 'ad_type', a.adsense_ad_format = 'format', a.adsense_background_color = 'color_bg', a.adsense_border_color = 'color_border', a.adsense_link_color = 'color_link', a.adsense_text_color = 'color_text', a.adsense_url_color = 'color_url', a.page_url = 'url', a.adsense_allow_expandable_ads = 'ea', a.adsense_encoding = 'oe', a.adsense_family_safe = 'adsafe', a.adsense_flash_version = 'flash', a.adsense_font_face = 'f', a.adsense_hints = 'hints', a.adsense_keyword_type = 'kw_type', a.adsense_keywords = 'kw', a.adsense_test_mode = 'adtest', a.alternate_ad_iframe_color = 'alt_color', a.alternate_ad_url = 'alternate_ad_url', a.demographic_age = 'cust_age', a.demographic_gender = 'cust_gender', a.document_language = 'hl', a;
            };
            var vu = new C.Map(), wu = new C.Map(), xu = function () {
                }, ad = function (a, b) {
                    var c = wu.get(a);
                    c || (b = c = b(), vu.set(b, a), wu.set(a, b));
                    return c;
                }, yu = function (a) {
                    return (a = Mq[a]) ? rh()[a]() : null;
                };
            var Jf = function (a) {
                R.call(this, a, -1, zu);
            };
            _.P(Jf, R);
            var Kf = function (a) {
                    return K(a, 1);
                }, Au = function (a, b) {
                    return D(a, 1, b);
                }, Bu = function (a, b) {
                    return Eb(a, 2, b);
                }, zu = [2];
            var Wc = function (a) {
                R.call(this, a);
            };
            _.P(Wc, R);
            var Vc = function (a, b) {
                    return D(a, 1, b);
                }, Uc = function (a, b) {
                    return D(a, 2, b);
                }, Cu = function () {
                    var a = new Wc();
                    return D(a, 3, !0);
                };
            var Kc = function (a) {
                R.call(this, a, -1, Du, Rc);
            };
            _.P(Kc, R);
            var Qc = function (a, b) {
                    return D(a, 1, b);
                }, Tc = function (a, b) {
                    Gb(a, 5, b);
                }, Oc = function (a, b) {
                    return D(a, 10, b);
                }, nf = function (a, b) {
                    D(a, 13, b);
                }, Xc = function (a, b) {
                    return D(a, 15, b);
                }, Du = [6], Rc = [
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
                    return D(a, 1, b);
                }, hf = function (a, b) {
                    return Gb(a, 2, b);
                };
            var lg = function (a) {
                R.call(this, a);
            };
            _.P(lg, R);
            var Fu = function (a) {
                R.call(this, a, -1, Eu);
            };
            _.P(Fu, R);
            var Eu = [2];
            var Gu = function (a) {
                R.call(this, a);
            };
            _.P(Gu, R);
            var Ju = function (a) {
                R.call(this, a, -1, Iu);
            };
            _.P(Ju, R);
            Ju.prototype.getAdUnitPath = function () {
                return K(this, 1);
            };
            var Ku = function (a, b) {
                    D(a, 2, b);
                }, Lu = function (a, b) {
                    D(a, 24, b);
                };
            Ju.prototype.Aa = function () {
                return N(this, Gu, 13);
            };
            var ud = function (a) {
                    return sf(a, 15, 0);
                }, kf = function (a, b) {
                    return Nf(a, 21, b, gf);
                }, Iu = [
                    3,
                    4,
                    5,
                    6,
                    8,
                    9,
                    21
                ];
            var Mu = function (a, b, c, d, e) {
                    if ('string' !== typeof c || xj(c))
                        e.I(Hh('Slot.setTargeting', [
                            c,
                            d
                        ]), a);
                    else {
                        var f = [];
                        Array.isArray(d) ? f = d : qa(d) ? f = _.v(gp) ? Array.prototype.slice.call(d) : _.u(Array, 'from').call(Array, d) : d && (f = [d]);
                        f = f.map(String);
                        (d = (L = M(b, Jf, 9), _.u(L, 'find')).call(L, function (g) {
                            return Kf(g) === c;
                        })) ? Bu(d, f) : (d = Bu(Au(new Jf(), c), f), Nf(b, 9, d, Jf));
                        e.info(es(c, f.join(), b.getAdUnitPath()), a);
                    }
                }, Nu = function (a, b, c, d) {
                    if (null == c || 'object' !== typeof c)
                        d.error(Hh('Slot.updateTargetingFromMap', [c]), a);
                    else
                        for (var e = _.I(_.u(Object, 'keys').call(Object, c)), f = e.next(); !f.done; f = e.next())
                            f = f.value, Mu(a, b, f, c[f], d);
                };
            var Ou = function (a) {
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
            var Pu = function (a) {
                    return Array.isArray(a) && 2 == a.length ? Nm(a[0]) && Nm(a[1]) : 'string' === typeof a && 'fluid' == a;
                }, Qu = function (a) {
                    return Array.isArray(a) && 2 == a.length && Nm(a[0]) && Nm(a[1]);
                }, Ru = function (a) {
                    return Array.isArray(a) ? Uc(Vc(new Wc(), a[0]), a[1]) : Cu();
                }, Su = function (a) {
                    var b = [];
                    if (Sc(a))
                        b.push(Ru(a));
                    else if (Array.isArray(a))
                        for (var c = 0; c < a.length; ++c) {
                            var d = a[c];
                            Sc(d) && b.push(Ru(d));
                            sa(d, ['fluid']) && b.push(Cu());
                        }
                    return b;
                }, Tu = function (a) {
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
                }, Uu = function (a) {
                    var b = null, c = null;
                    var d = a && (Array.isArray(a.fixed) || 'fluid' === a.fixed);
                    var e = a && Array.isArray(a.max);
                    if (a && !Array.isArray(a) && (d || e)) {
                        if (d = Su(a.fixed), c = Tu(a.max))
                            a.min ? ((b = Tu(a.min)) && null === K(b, 1) && Vc(b, 0), b && null === K(b, 2) && Uc(b, 0)) : b = Uc(Vc(new Wc(), 0), 0);
                    } else
                        d = Su(a);
                    if (a && !Array.isArray(a)) {
                        if (a.max && !c)
                            throw Error('Invalid GPT maximum size: ' + JSON.stringify(a));
                        if (a.min && !b)
                            throw Error('Invalid GPT maximum size: ' + JSON.stringify(a));
                    }
                    if (c) {
                        if (0 === K(c, 1) || 0 === K(c, 2))
                            throw Error('Invalid GPT size, maximums cannot be zero: ' + JSON.stringify(a));
                        if (b) {
                            e = K(b, 1);
                            var f = K(c, 1);
                            if (null != e && null != f && e > f)
                                throw Error('Invalid GPT size: minimum width larger than maximum width: ' + JSON.stringify(a));
                            e = K(b, 2);
                            f = K(c, 2);
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
            var Zc = new C.Map();
            var Vu = function (a) {
                R.call(this, a);
            };
            _.P(Vu, R);
            var bg = function (a) {
                R.call(this, a);
            };
            _.P(bg, R);
            var Xu = function (a) {
                R.call(this, a, -1, Wu);
            };
            _.P(Xu, R);
            var Yu = function (a, b) {
                D(a, 30, b);
            };
            Xu.prototype.Aa = function () {
                return N(this, Gu, 18);
            };
            var ag = function (a) {
                    return N(a, bg, 25);
                }, Wu = [
                    2,
                    3,
                    14
                ];
            var Zu = function () {
            };
            Zu.L = function () {
                throw Error('Must be overridden');
            };
            var $u = function () {
                this.j = new C.Map();
            };
            _.P($u, Zu);
            Pi($u);
            var av = function () {
            };
            av.L = function () {
                throw Error('Must be overridden');
            };
            var Th = function () {
                this.ga = {};
                this.j = new Xu();
                this.m = new C.Map();
                D(this.j, 26, Mm());
                (_.v(Jo) && 2 === Ad() || _.bc(36)) && D(this.j, 15, !0);
            };
            _.P(Th, av);
            var bv = function (a) {
                    var b = Th.L(), c = K(a, 2);
                    if (c && !b.ga.hasOwnProperty(c)) {
                        var d = $u.L(), e = ++Nb.L().m;
                        d.j.set(c, e);
                        D(a, 20, e);
                        b.ga[c] = a;
                    }
                }, ef = function () {
                    return Th.L().ga;
                }, cv = function (a, b) {
                    var c;
                    return null !== (c = a.ga[b]) && void 0 !== c ? c : null;
                }, dv = function (a, b) {
                    var c;
                    b = _.I(b);
                    for (var d = b.next(); !d.done; d = b.next())
                        null === (c = a.ga[d.value.j]) || void 0 === c ? void 0 : nl(c, 21, []);
                };
            Pi(Th);
            var ev = function () {
                this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
                this.isBackfill = !1;
                this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null;
            };
            var fv = '', gv = null, hv = function () {
                    for (var a = Dq(mp) || '0-0-0', b = a.split('-').map(function (e) {
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
                        for (var a = Bg(lp), b = [], c = 0; c < a.length; c += 2)
                            Ul(a[c], a[c + 1], b);
                        gv = b.join('&');
                    }
                    return gv;
                }, kv = function (a) {
                    var b = Lc(), c = new Gu();
                    if (!a || !_.ja(a))
                        return null;
                    var d = !1;
                    _.ec(a, function (e, f) {
                        var g = !1;
                        switch (f) {
                        case 'allowOverlayExpansion':
                            'boolean' === typeof e ? D(c, 1, a.allowOverlayExpansion) : d = g = !0;
                            break;
                        case 'allowPushExpansion':
                            'boolean' === typeof e ? D(c, 2, a.allowPushExpansion) : d = g = !0;
                            break;
                        case 'sandbox':
                            !0 === e ? D(c, 3, a.sandbox) : d = g = !0;
                            break;
                        case 'useUniqueDomain':
                            'boolean' === typeof e ? D(c, 4, a.useUniqueDomain) : null !== e && (d = g = !0);
                            break;
                        default:
                            g = !0;
                        }
                        g && b.error(Mc('setSafeFrameConfig', Nc(a), f, Nc(e)));
                    });
                    return d ? null : c;
                }, lv = function (a) {
                    var b = new Gu();
                    a = _.I(a);
                    for (var c = a.next(); !c.done; c = a.next())
                        if (c = c.value) {
                            if (Ff(c, 1)) {
                                var d = y(c, 1);
                                D(b, 1, d);
                            }
                            Ff(c, 2) && (d = y(c, 2), D(b, 2, d));
                            Ff(c, 3) && (d = y(c, 3), D(b, 3, d));
                            Ff(c, 4) && (c = y(c, 4), D(b, 4, c));
                        }
                    return b;
                };
            var mv = function (a, b) {
                this.m = a;
                this.j = b;
            };
            mv.prototype.getWidth = function () {
                return this.m;
            };
            mv.prototype.getHeight = function () {
                return this.j;
            };
            var nv = function (a, b) {
                    a = _.u(a, 'find').call(a, function (c) {
                        c = (0, J.M)(N(c, Wc, 1));
                        return K(c, 1) <= K(b, 1) && K(c, 2) <= K(b, 2);
                    });
                    return null == a ? null : M(a, Wc, 2);
                }, ov = function (a) {
                    if (!Array.isArray(a) || 2 !== a.length)
                        throw Error('Each mapping entry must be an array of size 2');
                    var b = a[0];
                    if (!Qu(b))
                        throw Error('Size must be an array of two non-negative integers');
                    b = Uc(Vc(new Wc(), b[0]), b[1]);
                    if (Array.isArray(a[1]) && 0 === a[1].length)
                        a = [];
                    else if (a = Su(a[1]), 0 === a.length)
                        throw Error('At least one slot size must be present');
                    var c = new Fu();
                    b = Gb(c, 1, b);
                    return nl(b, 2, a);
                };
            var pv = function (a, b, c) {
                    return 'number' === typeof b && 'number' === typeof c && 0 < M(a, Fu, 6).length ? nv(M(a, Fu, 6), Uc(Vc(new Wc(), b), c)) : M(a, Wc, 5);
                }, id = function (a) {
                    var b = window, c = null;
                    b.top == b && (b = Js(!1, b), c = pv(a, b.width, b.height));
                    null == c && (c = pv(a));
                    return c.map(function (d) {
                        return y(d, 3) ? 'fluid' : [
                            K(d, 1),
                            K(d, 2)
                        ];
                    });
                }, qv = function (a) {
                    if (0 == id(a).length && Ff(a, 16))
                        return '1x1';
                    var b = [], c = !1;
                    a = _.I(id(a));
                    for (var d = a.next(); !d.done; d = a.next())
                        d = d.value, Array.isArray(d) ? b.push(d.join('x')) : 'fluid' == d ? c = !0 : b.push(d);
                    c && b.unshift('320x50');
                    return b.join('|');
                }, rv = function (a) {
                    var b = 0, c = 0;
                    a = _.I(id(a));
                    for (var d = a.next(); !d.done; d = a.next())
                        if (d = d.value, Array.isArray(d)) {
                            var e = _.I(d);
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
                    a && (d.push(a.getAdUnitPath()), d.push(qv(a)), d.push(K(a, 2)));
                    if (b) {
                        a = [];
                        for (var e = 0; b && 25 > e; b = b.parentNode, ++e)
                            9 === b.nodeType ? a.push('') : a.push(b.id);
                        (b = a.join()) && d.push(b);
                    }
                    0 < d.length && (c = dm(d.join(':')));
                    return c.toString();
                }, tv = function (a) {
                    return 0 !== a && 1 !== a;
                }, uv = function (a, b) {
                    var c;
                    return !(null != (c = y(b, 22)) ? !c : !y(a, 15));
                };
            var bd = function (a) {
                var b = this, c = Lc(), d = cv(Th.L(), a.j), e = '', f = !1;
                Yq(a, br, function (m) {
                    var n = m.detail;
                    m = n.Ec;
                    n = n.isBackfill;
                    m && (e = m, f = n);
                });
                this.set = x(40, function (m, n) {
                    if ('string' !== typeof m || 'string' !== typeof n || void 0 === uu()[m])
                        return c.I(Hh('Slot.set', [
                            m,
                            n
                        ]), a), b;
                    var p = (L = M(d, Jf, 3), _.u(L, 'find')).call(L, function (t) {
                        return Kf(t) === m;
                    });
                    p ? Bu(p, [n]) : (p = Au(new Jf(), m), Lf(p, 2, n), Nf(d, 3, p, Jf));
                    return b;
                });
                this.get = x(41, function (m) {
                    if ('string' !== typeof m)
                        return c.I(Hh('Slot.get', [m]), a), null;
                    var n = (L = M(d, Jf, 3), _.u(L, 'find')).call(L, function (p) {
                        return Kf(p) === m;
                    });
                    return (n = n && K(n, 2)) ? n[0] : null;
                });
                this.getAttributeKeys = x(42, function () {
                    return M(d, Jf, 3).map(function (m) {
                        return Kf(m);
                    });
                });
                this.addService = x(43, function (m) {
                    m = vu.get(m);
                    if (!m)
                        return c.I(Hh('Slot.addService', [m]), a), b;
                    if ((L = K(d, 4), _.u(L, 'includes')).call(L, m.getName()))
                        return c.info(zr(m.getName(), a.toString()), a), b;
                    m.Fa(a, d);
                    return b;
                });
                this.defineSizeMapping = x(44, function (m) {
                    try {
                        if (!Array.isArray(m))
                            throw Error('Size mapping must be an array');
                        var n = m.map(ov);
                        nl(d, 6, n);
                    } catch (p) {
                        Zb(44, p), Em('Incorrect usage of googletag.Slot defineSizeMapping: ' + p.message);
                    }
                    return b;
                });
                this.setClickUrl = x(45, function (m) {
                    if ('string' !== typeof m)
                        return c.I(Hh('Slot.setClickUrl', [m]), a), b;
                    D(d, 7, m);
                    return b;
                });
                this.setCategoryExclusion = x(46, function (m) {
                    'string' !== typeof m || xj(m) ? c.I(Hh('Slot.setCategoryExclusion', [m]), a) : ((L = K(d, 8), _.u(L, 'includes')).call(L, m) || Lf(d, 8, m), c.info(Ar(m), a));
                    return b;
                });
                this.clearCategoryExclusions = x(47, function () {
                    D(d, 8, Ja([]));
                    c.info(Br(), a);
                    return b;
                });
                this.getCategoryExclusions = x(48, function () {
                    return K(d, 8).slice();
                });
                this.setTargeting = x(49, function (m, n) {
                    Mu(a, d, m, n, c);
                    return b;
                });
                this.updateTargetingFromMap = x(649, function (m) {
                    Nu(a, d, m, c);
                    return b;
                });
                this.clearTargeting = x(50, function (m) {
                    if (void 0 === m)
                        return nl(d, 9, []), c.info(Cr(a.getAdUnitPath()), a), b;
                    var n = M(d, Jf, 9), p = _.u(n, 'findIndex').call(n, function (t) {
                            return Kf(t) === m;
                        });
                    if (0 > p)
                        return c.I(bs(m, a.getAdUnitPath()), a), b;
                    n.splice(p, 1);
                    nl(d, 9, n);
                    c.info(is(m, a.getAdUnitPath()), a);
                    return b;
                });
                this.getTargeting = x(51, function (m) {
                    if ('string' !== typeof m)
                        return c.I(Hh('Slot.getTargeting', [m]), a), [];
                    var n = (L = M(d, Jf, 9), _.u(L, 'find')).call(L, function (p) {
                        return Kf(p) === m;
                    });
                    return n ? K(n, 2).slice() : [];
                });
                this.getTargetingKeys = x(52, function () {
                    return M(d, Jf, 9).map(function (m) {
                        return Kf(m);
                    });
                });
                this.setCollapseEmptyDiv = x(53, function (m, n) {
                    n = void 0 === n ? !1 : n;
                    if ('object' === typeof m && m && _.v(Qo)) {
                        if ('boolean' === typeof m.collapseEmpty) {
                            D(d, 10, m.collapseEmpty);
                            var p;
                            Lu(d, null != (p = y(d, 24)) ? p : !0);
                        }
                        if ('boolean' === typeof m.startCollapsed) {
                            D(d, 11, m.startCollapsed);
                            var t;
                            Lu(d, null != (t = y(d, 24)) ? t : !0);
                        }
                        'boolean' === typeof m.allowCollapseOnScreen && Lu(d, !m.allowCollapseOnScreen);
                        return b;
                    }
                    if ('boolean' !== typeof m || 'boolean' !== typeof n)
                        return c.I(Hh('Slot.setCollapseEmptyDiv', [
                            m,
                            n
                        ]), a), b;
                    D(d, 10, m);
                    D(d, 11, m && n);
                    uc('gpt_ced', function (w) {
                        var E = y(d, 11) ? 't' : 'f';
                        r(w, 'sc', E);
                        r(w, 'level', 'slot');
                        dc(w);
                    });
                    n && !m && c.I(Dr(a.toString()), a);
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
                    D(d, 12, m);
                    return b;
                });
                this.setSafeFrameConfig = x(56, function (m) {
                    var n = kv(m);
                    if (!n)
                        return c.error(Hh('Slot.setSafeFrameConfig', [m]), a), b;
                    Gb(d, 13, n);
                    return b;
                });
                var g = null;
                Yq(a, ar, function (m) {
                    m = m.detail;
                    if (y(m, 8))
                        g = null;
                    else {
                        g = new ev();
                        var n = !!y(m, 9);
                        g.isBackfill = n;
                        var p = K(m, 15), t = K(m, 16);
                        p.length && t.length && (g.sourceAgnosticCreativeId = p[0], g.sourceAgnosticLineItemId = t[0], n || (g.creativeId = p[0], g.lineItemId = t[0], (n = K(m, 22)) && n.length && (g.creativeTemplateId = n[0])));
                        K(m, 17).length && (n = K(m, 17)[0], g.advertiserId = n);
                        K(m, 18).length && (n = K(m, 18)[0], g.campaignId = n);
                        K(m, 19).length && (n = K(m, 19), g.yieldGroupIds = n);
                        K(m, 20).length && (n = K(m, 20), g.companyIds = n);
                        m = K(m, 45);
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
                var h = new Ou(a);
                this.getSlotId = x(579, function () {
                    return h;
                });
                this.getServices = x(580, function () {
                    return K(d, 4).map(function (m) {
                        return yu(m);
                    });
                });
                this.getSizes = x(581, function (m, n) {
                    return (m = pv(d, m, n)) ? m.map(function (p) {
                        return y(p, 3) ? 'fluid' : new mv(K(p, 1), K(p, 2));
                    }) : null;
                });
                this.getClickUrl = x(582, function () {
                    return Ff(d, 7) ? K(d, 7) : '';
                });
                this.getTargetingMap = x(583, function () {
                    for (var m = {}, n = _.I(M(d, Jf, 9)), p = n.next(); !p.done; p = n.next())
                        p = p.value, m[Kf(p)] = K(p, 2);
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
                Yq(a, cr, function (m) {
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
                Yq(a, ar, function (m) {
                    var n;
                    l = null != (n = K(m.detail, 34)) ? n : '';
                });
                this.getEscapedQemQueryId = x(591, function () {
                    return l;
                });
                this.getHtml = x(592, function () {
                    return f ? (window.console && console.warn && console.warn('This ad\'s html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead.'), '') : e;
                });
                _.v(Po) && (this.setCentering = x(871, function (m) {
                    if ('object' !== typeof m || null == m)
                        return c.I(Hh('Slot.setCentering', [Nc(m)])), b;
                    var n = m.horizontal;
                    m = m.vertical;
                    'boolean' === typeof n && D(d, 22, n);
                    'boolean' === typeof m && D(d, 23, m);
                    return b;
                }));
            };
            _.P(bd, xu);
            $c(bd, 8);
            var Y = function () {
                Mt.apply(this, arguments);
            };
            _.P(Y, Mt);
            Y.prototype.J = function (a) {
                var b, c;
                Zb(this.id, a);
                null === (c = null === (b = window.console) || void 0 === b ? void 0 : b.error) || void 0 === c ? void 0 : c.call(b, a);
            };
            var vv = function (a, b, c, d, e) {
                var f = null, g = sc(b, e);
                _.Hd(c, d, g) && (f = function () {
                    return _.ge(c, d, g);
                }, _.Xg(a, f));
                return f;
            };
            var wv = function (a) {
                Y.call(this, 892, _.gc(cp));
                this.A = U(this);
                this.l = U(this);
                this.B = Ot(this, a);
            };
            _.P(wv, Y);
            wv.prototype.j = function () {
                var a = this.B.value;
                if (!a)
                    throw Error('config timeout');
                this.l.m(N(a, zs, 1));
                this.A.m(N(a, Cs, 2));
            };
            wv.prototype.V = function (a) {
                this.C(a);
            };
            wv.prototype.C = function (a) {
                Ht(this.A, a);
                Ht(this.l, a);
            };
            var xv = function (a, b, c) {
                Y.call(this, 906, _.gc(ap));
                this.H = a;
                this.l = Nt(this);
                this.B = Ot(this, b);
                this.A = Hg(c, er).then(function (d) {
                    return Lb((0, J.M)(d.detail.P.getAdUnitPath()));
                });
                this.H !== this.H.top && this.l.notify();
            };
            _.P(xv, Y);
            xv.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d;
                    return A(b, function (e) {
                        if (c.H !== c.H.top)
                            return e.return();
                        d = c.B.value;
                        if (_.v(bp) && d)
                            return B(e, yv(c, d), 0);
                        c.l.notify();
                        e.j = 0;
                    });
                });
            };
            var yv = function (a, b) {
                    return z(a, function d() {
                        var e, f = this, g;
                        return A(d, function (h) {
                            e = M(b, Ds, 1);
                            if (!e.length)
                                return f.l.notify(), h.return();
                            g = e[0];
                            return (L = [
                                2,
                                3
                            ], _.u(L, 'includes')).call(L, sf(g, 3, 0)) ? (zv(f, xf(g, 1)), h.return()) : B(h, Av(f, b), 0);
                        });
                    });
                }, Av = function (a, b) {
                    return z(a, function d() {
                        var e = this, f, g;
                        return A(d, function (h) {
                            if (1 == h.j)
                                return B(h, e.A, 2);
                            f = h.m;
                            (g = M(b, Ds, 1).some(function (k) {
                                return xf(k, 1) === f;
                            })) ? zv(e, f) : (uc('pp_iris_failure', function (k) {
                                r(k, 'fnc', f);
                                dc(k);
                            }, { qa: _.gc(ep) }), e.l.notify());
                            Bi(h);
                        });
                    });
                }, zv = function (a, b) {
                    var c = $s(a.H, b, function (d) {
                        if (!d) {
                            d = Fl(c.j);
                            for (var e = _.I(document.getElementsByName('googlefcPresent')), f = e.next(); !f.done; f = e.next())
                                d.m(f.value);
                        }
                        a.l.notify();
                    });
                    c.start();
                };
            xv.prototype.V = function (a) {
                this.C(a);
            };
            xv.prototype.C = function () {
                this.l.notify();
            };
            var Bv = function (a, b) {
                Y.call(this, 901);
                this.l = W(this, a);
                this.A = Hg(b, er).then(function (c) {
                    return (0, J.M)(c.detail.P.getAdUnitPath());
                });
            };
            _.P(Bv, Y);
            Bv.prototype.j = function () {
                var a;
                return z(this, function c() {
                    var d = this, e, f, g, h;
                    return A(c, function (k) {
                        if (1 == k.j)
                            return (e = d.l.value) ? B(k, d.A, 2) : k.return();
                        f = k.m;
                        g = Lb(f);
                        h = null === (a = M(e, As, 4)) || void 0 === a ? void 0 : a.some(function (l) {
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
                        }, { qa: _.gc(dp) });
                        Bi(k);
                    });
                });
            };
            var Cv = function () {
                Y.call(this, 891);
                this.l = U(this);
            };
            _.P(Cv, Y);
            Cv.prototype.j = function () {
                return z(this, function b() {
                    var c, d, e = this, f, g, h, k, l;
                    return A(b, function (m) {
                        if (1 == m.j)
                            return B(m, new C.Promise(function (n, p) {
                                _.bc(260)(function (t, w) {
                                    w ? p(w) : n(t);
                                });
                            }), 2);
                        c = m.m;
                        if (_.v(fp)) {
                            try {
                                'string' === typeof c && (d = JSON.parse(c || '[]'));
                            } catch (n) {
                            }
                            if (d && Array.isArray(d))
                                e.l.j(new Es(d));
                            else
                                throw Error('malformed response');
                        } else
                            f = new Es(), g = _.bc(172), (null === g || void 0 === g ? 0 : g.hasAttribute('data-load-fc')) && (h = Vg(g.src, 'network-code')) && (k = new Cs(), l = Nf(k, 1, void 0, Ds), D(l, 1, h), D(l, 3, 3), Gb(f, 2, k)), e.l.j(f);
                        Bi(m);
                    });
                });
            };
            var Dv = function () {
                    this.j = null;
                }, Ev = function () {
                    var a = _.O(Dv), b = _.O(Kh), c = new le(), d = new Cv();
                    X(c, d);
                    d = new wv(d.l);
                    X(c, d);
                    var e = new xv(window, d.A, b);
                    a.j = e.l.promise;
                    X(c, e);
                    X(c, new Bv(d.l, b));
                    ne(c);
                };
            var Fv = function () {
                    this.m = [];
                    this.o = [];
                    this.j = {};
                }, Gv = function (a, b) {
                    if (!_.u(a.m, 'includes').call(a.m, b))
                        switch (b) {
                        case 1:
                        case 2:
                        case 3:
                            var c;
                            if (c = _.v(np) ? ut[b] : st[b]) {
                                var d = b + '_hostpage_library';
                                if (c = Yl(document, c))
                                    c.id = d;
                            }
                            a.m.push(b);
                            b = new vt(b);
                            a.o.push(b);
                            a = rh();
                            a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
                            a.hostpageLibraryTokens[b.j] = b.m;
                        }
                }, Hv = function (a, b) {
                    var c, d;
                    a = null != (d = null == (c = a.j[b]) ? void 0 : _.u(c, 'values').call(c)) ? d : [];
                    return [].concat(_.nc(a));
                };
            var Iv = function (a) {
                    var b;
                    return (null == (b = (L = M(a, Jf, 14), _.u(L, 'find')).call(L, function (c) {
                        return 'page_url' === Kf(c);
                    })) ? void 0 : K(b, 2)[0]) || null;
                }, Jv = function (a) {
                    var b;
                    return (null == (b = (L = M(a, Jf, 3), _.u(L, 'find')).call(L, function (c) {
                        return 'page_url' === Kf(c);
                    })) ? void 0 : K(b, 2)[0]) || null;
                }, Kv = function (a, b) {
                    return Iv(b.O) ? !0 : a.some(function (c) {
                        return null != Jv(b.P[c.j]);
                    });
                }, Ug = function (a) {
                    var b = a.document;
                    return Ls(a) ? b.URL : b.referrer;
                }, ed = function (a) {
                    try {
                        var b = qn(a, window.top);
                    } catch (c) {
                        b = new _.ld(-12245933, -12245933);
                    }
                    return b;
                }, Lv = gd(function () {
                    return 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest();
                }), Mv = function (a) {
                    return a ? (a = un(a)) && a.floor() : null;
                }, Nv = function (a, b) {
                    for (var c = {}, d = _.I(_.u(Object, 'keys').call(Object, b)), e = d.next(); !e.done; e = d.next()) {
                        e = e.value;
                        var f = Qa(b[e]), g = $u.L(), h = g.j.get(e);
                        null == h ? h = ++Nb.L().m : g.j.delete(e);
                        D(f, 20, h);
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
                }, Pv = gd(function () {
                    for (var a = '', b = _.I(Ov()), c = b.next(); !c.done; c = b.next())
                        c = c.value, 15 >= c && (a += '0'), a += c.toString(16);
                    return a;
                }), Ov = function () {
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
                }, Qv = function (a, b) {
                    return _.v(lo) && (a = ot(a, b)) ? (a = a.split(':'), 3 !== a.length ? Pv() : (a = a[0].split('=')[1]) ? a.slice(0, 8) : Pv()) : Pv();
                }, dd = function (a, b) {
                    return _.v(Vo) ? fd(a, b) : Rv(a, b) || fd(a, b);
                }, Sv = function (a, b, c, d) {
                    var e = fd(a, c), f = 'none' === (null == e ? void 0 : e.style.display);
                    f && (e.style.display = 'block');
                    a = md(c, a, b, d);
                    f && (e.style.display = 'none');
                    return a;
                }, Tv = function (a) {
                    return !!a && (Ff(a, 1) || !!y(a, 6));
                }, Uv = function (a, b, c) {
                    return Tv(b) || 4 == ud(a) || 5 === ud(a) || c;
                }, Vv = function (a) {
                    return 'google_ads_iframe_' + a.toString();
                }, Wv = function (a) {
                    return Vv(a) + '__container__';
                }, Rv = function (a, b) {
                    return (b = fd(a, b)) && b.querySelector('[id="' + Wv(a) + '"]') || null;
                }, Xv, Yv, Zv = function (a, b) {
                    return null != (Yv = null == (Xv = Rv(a, b)) ? void 0 : Xv.querySelector('iframe[id="' + Vv(a) + '"]')) ? Yv : null;
                }, Uf = function (a, b) {
                    var c = new gu();
                    a.forEach(function (d, e) {
                        c.set(a.length - e - 1, b(d));
                    });
                    return hu(c);
                }, of = function (a, b, c, d, e) {
                    c = void 0 === c ? '' : c;
                    d = void 0 === d ? function (l) {
                        return !!l;
                    } : d;
                    e = void 0 === e ? ',' : e;
                    var f = [], g = !1;
                    a = _.I(a);
                    for (var h = a.next(); !h.done; h = a.next()) {
                        h = b(h.value);
                        var k = d(h);
                        g = g || k;
                        f.push(String(k ? h : c));
                    }
                    return g ? f.join(e) : null;
                }, $v = function (a) {
                    var b = window, c, d, e;
                    Bc(831, function () {
                        return void (null == (c = b.performance) ? void 0 : null == (e = (d = c).mark) ? void 0 : e.call(d, a));
                    });
                }, fd = function (a, b) {
                    b = void 0 === b ? document : b;
                    return Th.L().m.get(a) || b.getElementById(a.j);
                }, aw = function (a) {
                    return _.bc(260) ? _.O(Dv).j.then(sc(895, function () {
                        return bu(a);
                    })) : C.Promise.resolve(bu(a));
                };
            var bw = function () {
                    var a = this;
                    this.l = function () {
                        return !1;
                    };
                    this.G = '';
                    this.j = this.m = null;
                    this.o = !1;
                    var b, c = Th.L(), d = {};
                    this[lq] = (d[19] = function () {
                        return !!y(c.j, 10);
                    }, d[14] = Lv, d[13] = function (e) {
                        for (var f = [], g = 0; g < arguments.length; ++g)
                            f[g] = arguments[g];
                        return f.some(function (h) {
                            return 0 == a.G.lastIndexOf(h, 0);
                        });
                    }, d[12] = function () {
                        return !!y(c.j, 6);
                    }, d[11] = yt, d[15] = function (e) {
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
                    this[mq] = (d[8] = function (e) {
                        return null != (b = it(a.m, e)) ? b : void 0;
                    }, d[10] = function (e) {
                        return a.j ? dm(e + a.j) % 1000 : void 0;
                    }, d);
                    this[nq] = {};
                }, cw = function (a, b) {
                    b && !a.j && (a.j = _.u(b.split(':'), 'find').call(b.split(':'), function (c) {
                        return 0 === c.indexOf('ID=');
                    }) || null);
                };
            var dw = _.bj(function () {
                    Em('The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.');
                }), Ph = function () {
                    this.m = new C.Map();
                    this.j = new C.Set();
                    _.O(bw).l = Fd;
                };
            Ph.prototype.add = function (a, b, c) {
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
                e && dw();
                e = this.m.get(a) || Number(e);
                b = ew(a, e, b, c || 'gpt_unit_' + a + '_' + e);
                if (!b)
                    return {};
                c = b.ga;
                var h = b.slotId;
                this.m.set(a, e + 1);
                this.j.add(h);
                _.Xg(h, function () {
                    return void d.j.delete(h);
                });
                Qq(a);
                return {
                    slotId: h,
                    Ma: c
                };
            };
            var Ed = function () {
                    var a = _.O(Ph);
                    return [].concat(_.nc(a.j));
                }, fw = function (a) {
                    var b;
                    return Hv(_.O(Fv), a).map(function (c) {
                        return null == (b = Zv(c, document)) ? void 0 : b.contentWindow;
                    }).filter(function (c) {
                        return !!c;
                    });
                }, gw = function (a, b) {
                    a = _.I(b);
                    for (b = a.next(); !b.done; b = a.next())
                        Cc(b.value);
                }, hw = function (a, b) {
                    a = _.I(a.j);
                    for (var c = a.next(); !c.done; c = a.next())
                        if (c = c.value, c.j === b)
                            return c;
                    return null;
                }, Gh = function (a, b, c, d) {
                    d = void 0 === d ? !1 : d;
                    return 'string' === typeof a && 0 < a.length && b && (void 0 === c || 'string' === typeof c) ? _.O(Ph).add(a, b, {
                        fb: c,
                        Oc: d
                    }) : {};
                }, iw = function (a, b, c) {
                    var d = Gh(a, b, c).slotId;
                    if (!d)
                        return Lc().error(Hh('googletag.defineSlot', [
                            a,
                            b,
                            c
                        ]), void 0, _.v(Kn)), null;
                    var e;
                    return null != (e = null == d ? void 0 : d.o) ? e : null;
                }, ew = function (a, b, c, d) {
                    var e = hw(_.O(Ph), d);
                    if (e)
                        return Lc().error(Gr(d, a, e.getAdUnitPath())), null;
                    var f = new Ju();
                    Ku(D(f, 1, a), d);
                    c = Uu(c);
                    e = c.Ka;
                    nl(f, 5, c.Dd);
                    null !== e && Gb(f, 16, e);
                    bv(f);
                    var g = new kr(a, b, d);
                    lr(g, cd(g));
                    _.Xg(g, function () {
                        var h = Th.L();
                        delete h.ga[g.j];
                        h.m.delete(g);
                        h = g.getAdUnitPath();
                        var k;
                        h = Lb(h);
                        var l = (null !== (k = oc.get(h)) && void 0 !== k ? k : 0) - 1;
                        0 >= l ? oc.delete(h) : oc.set(h, l);
                        Lc().info(hs(g.toString()), g);
                    });
                    Lc().info(ur(g.toString()), g);
                    Yq(g, cr, function (h) {
                        h = h.detail.ke;
                        Lc().info(vr(g.getAdUnitPath()), g);
                        Mb(Nb.L(), '7', 9, eg(ju.L(), g), 0, h);
                    });
                    Yq(g, ar, function (h) {
                        var k = h.detail;
                        Lc().info(wr(g.getAdUnitPath()), g);
                        var l;
                        h = Nb.L();
                        var m = K(f, 20);
                        k = null != (l = K(k, 34)) ? l : '';
                        h.j && (_.F.google_timing_params = _.F.google_timing_params || {}, _.F.google_timing_params['qqid.' + m] = k);
                    });
                    Yq(g, br, function () {
                        return void Lc().info(xr(g.getAdUnitPath()), g);
                    });
                    Yq(g, dr, function () {
                        return void Lc().info(yr(g.getAdUnitPath()), g);
                    });
                    return {
                        ga: f,
                        slotId: g
                    };
                };
            iw = sc(74, iw);
            var jw = function (a, b) {
                    this.slot = a.o;
                    this.serviceName = b;
                }, kw = function (a, b) {
                    jw.call(this, a, b);
                    this.isEmpty = !1;
                    this.slotContentChanged = !0;
                    this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
                    this.isBackfill = !1;
                    this.companyIds = this.yieldGroupIds = null;
                };
            _.P(kw, jw);
            var lw = function () {
                jw.apply(this, arguments);
            };
            _.P(lw, jw);
            var mw = function (a, b, c) {
                jw.call(this, a, b);
                this.inViewPercentage = c;
            };
            _.P(mw, jw);
            var nw = function () {
                jw.apply(this, arguments);
            };
            _.P(nw, jw);
            var ow = function () {
                jw.apply(this, arguments);
            };
            _.P(ow, jw);
            var pw = function (a, b, c, d) {
                jw.call(this, a, b);
                this.makeRewardedVisible = c;
                this.payload = d;
            };
            _.P(pw, jw);
            var qw = function (a, b, c) {
                jw.call(this, a, b);
                this.payload = c;
            };
            _.P(qw, jw);
            var rw = function () {
                jw.apply(this, arguments);
            };
            _.P(rw, jw);
            var sw = function () {
                jw.apply(this, arguments);
            };
            _.P(sw, jw);
            var tw = function () {
                jw.apply(this, arguments);
            };
            _.P(tw, jw);
            var uw = function () {
                jw.apply(this, arguments);
            };
            _.P(uw, jw);
            var vw = function () {
                jw.apply(this, arguments);
            };
            _.P(vw, jw);
            var ww = new C.Set(), xw = function () {
                    Wq.call(this);
                    ww.add(this);
                    this.j = [];
                    this.o = !1;
                    this.J = 0;
                    this.C = new C.Map();
                    this.log = Lc();
                    this.log.info(Kr(this.getName()));
                    this.F = [];
                };
            _.P(xw, Wq);
            var yw = function (a) {
                    if (!a.o) {
                        a.o = !0;
                        _.O(Aq).j(6);
                        a.ic();
                        for (var b = _.I(a.F), c = b.next(); !c.done; c = b.next()) {
                            c = c.value;
                            try {
                                c();
                            } catch (d) {
                            }
                        }
                        a.F.length = 0;
                    }
                }, zw = function (a, b) {
                    if (a.o)
                        try {
                            b();
                        } catch (c) {
                        }
                    else
                        a.F.push(b);
                };
            xw.prototype.Fa = function (a, b) {
                this.j.push(a);
                var c = new ow(a, this.getName());
                this.dispatchEvent('slotAdded', 818, c);
                this.log.info(Nr(this.getName(), a.getAdUnitPath()), a);
                a = this.getName();
                Lf(b, 4, a);
            };
            xw.prototype.destroySlots = function (a) {
                var b = this;
                return a.filter(function (c) {
                    return fa(b.j, c);
                });
            };
            xw.prototype.addEventListener = function (a, b) {
                var c = this;
                if (this.J >= _.gc(eo) && 0 < _.gc(eo))
                    throw Error('Reached Limit for addEventListener');
                var d = function (f) {
                    f = f.detail;
                    try {
                        b(f);
                    } catch (g) {
                        c.log.error(fs(String(g), a)), window.console && console.error && console.error(g);
                    } finally {
                        Aw(c, a, f);
                    }
                };
                if (_.v(fo)) {
                    var e;
                    if (null == (e = this.C.get(a)) ? 0 : e.has(b))
                        return;
                    this.C.has(a) || this.C.set(a, new C.Map());
                    this.C.get(a).set(b, d);
                }
                Yq(this, a, d);
                this.J++;
            };
            xw.prototype.removeEventListener = function (a, b) {
                var c;
                Xq(this, a, null == (c = this.C.get(a)) ? void 0 : c.get(b)) && (this.J--, this.C.get(a).delete(b));
            };
            var Aw = function (a, b, c) {
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
                            r(d, 'rc', eg(ju.L(), e));
                            try {
                                var h = cv(Th.L(), e.j), k = Sv(e, h, document, !1);
                                if (k) {
                                    var l = Is(window.top.document, window.top), m = Js(!0, window).height;
                                    r(d, 'yo', Math.floor((k.y - l.y) / m));
                                }
                                if (f) {
                                    var n;
                                    r(d, 'amp', !(null == (n = f.querySelector('iframe').contentWindow) || !n.document.querySelector('html[amp4ads]')));
                                }
                            } catch (p) {
                            }
                        }
                        c instanceof mw && r(d, 'ivp', c.inViewPercentage);
                    }, { qa: Number('impressionViewable' === b && c instanceof lw || 'slotVisibilityChanged' === b && c instanceof mw) });
                }, Bw = function (a, b) {
                    for (var c = _.I(ww), d = c.next(); !d.done; d = c.next())
                        d.value.destroySlots(a, b);
                };
            var Cw = function (a) {
                    var b = null, c = null, d = '';
                    if ('string' === typeof a)
                        d = a, b = hw(_.O(Ph), d);
                    else if (_.ja(a) && 1 == a.nodeType)
                        c = a, d = c.id, b = hw(_.O(Ph), d);
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
                }, Dw = sc(95, function (a) {
                    var b = Lc(), c = Cw(a), d = c.slotId, e = c.ud;
                    c = c.vd;
                    if (d) {
                        if (a = Th.L().j, c = cv(Th.L(), d.j))
                            if (a = Nv(a, ef()), !y(c, 19))
                                if (e && Th.L().m.set(d, e), fd(d) || tv(ud(c)))
                                    for (D(c, 19, !0), b = _.I(K(c, 4)), e = b.next(); !e.done; e = b.next()) {
                                        c = yu(e.value);
                                        a:
                                            if (e = xw, c instanceof e)
                                                e = c;
                                            else {
                                                if (c instanceof xu && (c = vu.get(c), c instanceof e)) {
                                                    e = c;
                                                    break a;
                                                }
                                                e = null;
                                            }
                                        e.o && e.uc(a, d);
                                    }
                                else
                                    b.I(Er(String(c.getAdUnitPath()), String(K(c, 2))), d);
                    } else
                        c ? b.error(Fr(c)) : b.error(Hh('googletag.display', [String(a)]));
                });
            var Od = kj('https://tpc.googlesyndication.com/sodar/%{basename}.js');
            var Jd = function (a) {
                return new C.Promise(function (b, c) {
                    const $___old_4358c05661192c04 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_eb29632e3ae1fbce = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                    try {
                        if ($___old_4358c05661192c04)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_8520a5cab3fcb785.XMLHttpRequest));
                        if ($___old_eb29632e3ae1fbce)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_8520a5cab3fcb785.XMLHttpRequest));
                        return function () {
                            var d = new XMLHttpRequest();
                            d.onreadystatechange = function () {
                                d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c());
                            };
                            d.open('GET', a, !0);
                            d.send();
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_4358c05661192c04)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_4358c05661192c04));
                        if ($___old_eb29632e3ae1fbce)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_eb29632e3ae1fbce));
                    }
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
            var Ew = function (a) {
                    this.j = a.j;
                    this.m = a.m;
                    this.o = a.o;
                    this.rb = a.rb;
                    this.H = a.H;
                    this.Ta = a.Ta;
                    this.Mb = a.Mb;
                    this.Wb = a.Wb;
                    this.Lb = a.Lb;
                }, Fw = function (a, b, c) {
                    this.j = a;
                    this.m = b;
                    this.o = c;
                    this.H = window;
                    this.Ta = 'env';
                    this.Mb = 'n';
                    this.Wb = '0';
                    this.Lb = '1';
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
                    e = new Fw(e, f, g);
                    b = null !== (d = null === (c = N(b, di, 5)) || void 0 === c ? void 0 : xf(c, 1)) && void 0 !== d ? d : '';
                    e.rb = b;
                    e.H = a;
                    return new Ew(e);
                };
            var wf = function (a) {
                R.call(this, a, -1, Gw);
            };
            _.P(wf, R);
            var zf = function (a, b) {
                    return D(a, 1, b);
                }, Cf = function (a, b) {
                    D(a, 2, b);
                }, Df = function (a, b) {
                    D(a, 4, b);
                }, Iw = function (a, b) {
                    var c = K(a, 1);
                    null != c && Vk(b, 1, c);
                    c = K(a, 2);
                    null != c && Tk(b, 2, c);
                    c = M(a, Ef, 3);
                    0 < c.length && Yk(b, 3, c, Hw);
                    c = K(a, 4);
                    null != c && Uk(b, 4, c);
                }, Ef = function (a) {
                    R.call(this, a, -1, Jw);
                };
            _.P(Ef, R);
            var If = function (a, b) {
                    D(a, 1, b);
                }, Gf = function (a, b) {
                    D(a, 2, b);
                }, Hf = function (a, b) {
                    D(a, 3, b);
                }, Mf = function (a, b) {
                    D(a, 5, b);
                }, Hw = function (a, b) {
                    var c = K(a, 1);
                    null != c && Vk(b, 1, c);
                    c = K(a, 2);
                    null != c && Tk(b, 2, c);
                    c = K(a, 3);
                    null != c && Vk(b, 3, c);
                    c = K(a, 4);
                    if (0 < c.length && null != c)
                        for (var d = 0; d < c.length; d++)
                            Vk(b, 4, c[d]);
                    c = K(a, 5);
                    null != c && Uk(b, 5, c);
                }, Gw = [3], Jw = [4];
            var rf = function (a) {
                R.call(this, a, -1, Kw);
            };
            _.P(rf, R);
            var uf = function (a, b) {
                    return D(a, 1, b);
                }, yf = function (a, b) {
                    return Nf(a, 2, b, wf);
                }, Lw = function (a, b) {
                    var c = K(a, 1);
                    null != c && Uk(b, 1, c);
                    c = M(a, wf, 2);
                    0 < c.length && Yk(b, 2, c, Iw);
                }, Kw = [2];
            var Bf = function (a) {
                R.call(this, a, -1, Mw);
            };
            _.P(Bf, R);
            var tf = function (a, b) {
                    return Nf(a, 1, b, rf);
                }, Pf = function (a, b) {
                    a = M(a, rf, 1);
                    0 < a.length && Yk(b, 1, a, Lw);
                }, Mw = [1];
            var Nw = function (a) {
                R.call(this, a);
            };
            _.P(Nw, R);
            var Pw = function (a) {
                R.call(this, a, -1, Ow);
            };
            _.P(Pw, R);
            var Ow = [13];
            var Rw = function (a) {
                R.call(this, a, -1, Qw);
            };
            _.P(Rw, R);
            var Qw = [13];
            var Tw = function (a) {
                R.call(this, a, -1, Sw);
            };
            _.P(Tw, R);
            var Uw = function (a) {
                R.call(this, a);
            };
            _.P(Uw, R);
            var Ww = function (a, b) {
                    var c = K(a, 1);
                    null != c && null != c && Sk(b, 1, c);
                    c = N(a, Vw, 2);
                    null != c && Xk(b, 2, c);
                    c = N(a, Vw, 3);
                    null != c && Xk(b, 3, c);
                    c = K(a, 4);
                    null != c && Vk(b, 4, c);
                    c = K(a, 5);
                    null != c && Vk(b, 5, c);
                }, Vw = function (a) {
                    R.call(this, a);
                };
            _.P(Vw, R);
            var Wk = function (a, b) {
                    var c = K(a, 1);
                    null != c && null != c && Sk(b, 1, c);
                    c = K(a, 2);
                    null != c && null != c && Sk(b, 2, c);
                    c = K(a, 3);
                    null != c && null != c && Sk(b, 3, c);
                }, Xw = function (a) {
                    R.call(this, a);
                };
            _.P(Xw, R);
            var be = function (a, b) {
                    return D(a, 8, b);
                }, Yw = function (a, b) {
                    var c = K(a, 1);
                    null != c && Vk(b, 1, c);
                    c = K(a, 2);
                    null != c && Vk(b, 2, c);
                    c = K(a, 3);
                    null != c && Tk(b, 3, c);
                    c = K(a, 7);
                    null != c && Tk(b, 7, c);
                    c = K(a, 8);
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
                    c = K(a, 4);
                    null != c && null != c && Rk(b, 4, c);
                    c = K(a, 5);
                    null != c && null != c && Rk(b, 5, c);
                    c = K(a, 6);
                    null != c && null != c && Rk(b, 6, c);
                }, Sw = [
                    1,
                    2
                ];
            var Zw = function (a) {
                R.call(this, a);
            };
            _.P(Zw, R);
            var ax = function (a) {
                R.call(this, a, -1, $w);
            };
            _.P(ax, R);
            var $w = [1];
            var bx = function (a) {
                R.call(this, a);
            };
            _.P(bx, R);
            var cx = function (a) {
                R.call(this, a);
            };
            _.P(cx, R);
            var dx = function (a) {
                R.call(this, a);
            };
            _.P(dx, R);
            var ex = function (a) {
                R.call(this, a);
            };
            _.P(ex, R);
            var gx = function (a) {
                R.call(this, a, -1, fx);
            };
            _.P(gx, R);
            var fx = [
                1,
                2
            ];
            var hx = function (a) {
                R.call(this, a);
            };
            _.P(hx, R);
            var Ud = function (a) {
                R.call(this, a);
            };
            _.P(Ud, R);
            var ix = function (a) {
                R.call(this, a);
            };
            _.P(ix, R);
            var kx = function (a) {
                R.call(this, a, -1, jx);
            };
            _.P(kx, R);
            var jx = [
                1,
                2
            ];
            var Vd = function (a) {
                R.call(this, a);
            };
            _.P(Vd, R);
            var mx = function (a) {
                R.call(this, a, -1, lx);
            };
            _.P(mx, R);
            var lx = [
                1,
                2,
                3
            ];
            var ox = function (a) {
                R.call(this, a, -1, nx);
            };
            _.P(ox, R);
            var nx = [1];
            var qx = function (a) {
                R.call(this, a, -1, px);
            };
            _.P(qx, R);
            var px = [1];
            var rx = function (a) {
                R.call(this, a);
            };
            _.P(rx, R);
            var tx = function (a) {
                R.call(this, a, -1, sx);
            };
            _.P(tx, R);
            var vx = function (a) {
                R.call(this, a, -1, ux);
            };
            _.P(vx, R);
            var wx = function (a) {
                R.call(this, a);
            };
            _.P(wx, R);
            var sx = [1], ux = [
                    1,
                    2,
                    3,
                    4
                ];
            var xx = function (a) {
                R.call(this, a);
            };
            _.P(xx, R);
            var yx = function (a) {
                R.call(this, a);
            };
            _.P(yx, R);
            var zx = function (a) {
                R.call(this, a);
            };
            _.P(zx, R);
            var Bx = function (a) {
                R.call(this, a, -1, Ax);
            };
            _.P(Bx, R);
            var Ax = [2];
            var Cx = function (a) {
                R.call(this, a);
            };
            _.P(Cx, R);
            var Dx = function (a) {
                R.call(this, a);
            };
            _.P(Dx, R);
            var Fx = function (a) {
                R.call(this, a, -1, Ex);
            };
            _.P(Fx, R);
            var Ex = [
                3,
                7
            ];
            var Ix = function (a) {
                R.call(this, a, -1, Gx, Hx);
            };
            _.P(Ix, R);
            var Jx = function (a) {
                R.call(this, a);
            };
            _.P(Jx, R);
            Jx.prototype.getHtml = function () {
                return K(this, 1);
            };
            var Gx = [
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
                ], Hx = [
                    [
                        4,
                        41
                    ],
                    [
                        39,
                        48
                    ]
                ];
            var Kx = navigator, Lx = function (a) {
                    var b = 1, c;
                    if (void 0 != a && '' != a)
                        for (b = 0, c = a.length - 1; 0 <= c; c--) {
                            var d = a.charCodeAt(c);
                            b = (b << 6 & 268435455) + d + (d << 14);
                            d = b & 266338304;
                            b = 0 != d ? b ^ d >> 21 : b;
                        }
                    return b;
                }, Mx = function (a, b) {
                    if (!a || 'none' == a)
                        return 1;
                    a = String(a);
                    'auto' == a && (a = b, 'www.' == a.substring(0, 4) && (a = a.substring(4, a.length)));
                    return Lx(a.toLowerCase());
                }, Nx = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/, Ox = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/, Px = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
            var Rx = function (a) {
                R.call(this, a, -1, Qx);
            };
            _.P(Rx, R);
            var Sx = function () {
                    var a = new Rx(), b = _.v(Op);
                    return rl(a, 7, b);
                }, Tx = function () {
                    var a = Sx(), b = _.v(Kp);
                    return rl(a, 8, b);
                }, Qx = [15];
            var Ux = function (a) {
                R.call(this, a);
            };
            _.P(Ux, R);
            var Vx = function (a) {
                R.call(this, a);
            };
            _.P(Vx, R);
            rj(jj(kj('https://pagead2.googlesyndication.com/pagead/osd.js')));
            var Wx = function (a, b) {
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
            var Xx = function () {
            };
            _.q = Xx.prototype;
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
            var Yx = function () {
            };
            var Zx = new iq(1, vn()), $x = function () {
                    var a = vn();
                    a && 'undefined' != typeof a.google_measure_js_timing && !a.google_measure_js_timing && (Zx.j = !1, Zx.events != Zx.o.google_js_reporting_queue && (hq() && _.dj(Zx.events, Ac), Zx.events.length = 0));
                };
            (function () {
                var a = vn();
                a && a.document && ('complete' == a.document.readyState ? $x() : Zx.j && _.Hd(a, 'load', function () {
                    $x();
                }));
            }());
            var by = function () {
                    var a = ay, b = vn() || _.F;
                    return b.google_osd_loaded ? !1 : (Yl(b.document, a), b.google_osd_loaded = !0);
                }, cy = function (a, b, c) {
                    a && (c ? _.Hd(a, 'load', b) : _.ge(a, 'load', b));
                }, dy = function () {
                    var a = (vn() || _.F).google_osd_amcb;
                    return 'function' === typeof a ? a : null;
                }, ey = rj(jj(kj('https://www.googletagservices.com/activeview/js/current/osd.js')));
            var fy = function (a, b) {
                this.m = b && b.m ? b.m : 0;
                this.o = b ? b.o : '';
                this.j = b && b.j ? b.j : [];
                if (b)
                    for (a = 0; a < this.j.length; ++a)
                        this.j[a].l = !0;
            };
            _.q = fy.prototype;
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
                var b = Wx(gy, hy);
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
                c = dy();
                e = _.Hc() || -1;
                f = _.F.pageYOffset;
                0 <= f || (f = -1);
                c && d ? c(d, a, b, !1, void 0, !1, g, e, f) : (g = new iy(a, b, d, g, e, f), this.j.push(g), cy(d, g.G, !0), ay || (_.bn(_.F, '//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=' + b + ('&req=' + a)), ay = ey), by() && wn());
            };
            _.q.unloadAdBlock = function (a, b, c) {
                c = void 0 === c ? !1 : c;
                b = vn();
                void 0 !== b.Goog_Osd_UnloadAdBlock && b.Goog_Osd_UnloadAdBlock(a);
                c && (c = Fm(this.j, function (d) {
                    return d.j == a;
                })) && cy(a, c.G, !1);
            };
            var jy = function () {
                    var a = vn(), b = a.__google_ad_urls;
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
                                        for (var w = f, E = 0; E < Math.min(n.cssRules.length, w); E++) {
                                            var H = n.cssRules[E], G;
                                            if (G = 1 === H.type || !_.v(Pn))
                                                G = t, G = g.call(p, H.selectorText) && G(H);
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
                }, ry = function (a, b, c) {
                    var d = void 0 === d ? 10 : d;
                    var e = void 0 === e ? 10 : e;
                    if (!a)
                        return !0;
                    var f = !0;
                    Rf(a, function (g) {
                        return f = qy(g, b, !1, d, e);
                    }, void 0 === c ? 100 : c);
                    return f;
                }, qy = function (a, b, c, d, e) {
                    var f = a.style;
                    return f && f.height && !(0 <= _.ea(ny, f.height)) || f && f.maxHeight && !(0 <= _.ea(oy, f.maxHeight)) || py(a, b.document, function (g) {
                        var h = g.style.height;
                        g = g.style['max-height'];
                        return h && !(0 <= _.ea(ny, h)) || g && !(0 <= _.ea(oy, g));
                    }, c, d, e) ? !1 : !0;
                };
            var sy = function (a) {
                var b, c, d;
                this.j = new C.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : N(a, rx, 2)) || void 0 === b ? void 0 : N(b, ox, 3)) || void 0 === c ? void 0 : K(c, 1)) && void 0 !== d ? d : []);
            };
            sy.prototype.getName = function () {
                return 'Consent';
            };
            sy.prototype.Eb = function (a) {
                var b = this;
                return !Ff(a, 7) || K(N(a, lh, 7), 1).every(function (c) {
                    return b.j.has(c);
                });
            };
            var ty = function (a) {
                var b;
                this.ub = 1;
                null == a || null == N(a, tx, 3) ? this.j = [] : (this.j = M((0, J.M)(N(a, tx, 3)), wx, 1), this.ub = null !== (b = ll((0, J.M)(N(a, tx, 3)), 3)) && void 0 !== b ? b : 1);
            };
            ty.prototype.getName = function () {
                return 'Pricing Rules';
            };
            ty.prototype.Eb = function (a) {
                if (0 === this.j.length)
                    return !0;
                for (var b = _.I(this.j), c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    var d = N(c, vx, 1), e = a;
                    if (null === d || (0 === K(d, 3).length || (L = K(d, 3), _.u(L, 'includes')).call(L, sf(e, 4, 0))) && (0 === K(d, 4).length || (L = K(d, 4), _.u(L, 'includes')).call(L, xf(e, 5)))) {
                        if (null == N(a, uy, 8) || null == jh(N(a, uy, 8), 1))
                            return !1;
                        d = jh(N(a, uy, 8), 1) * this.ub;
                        if (null != jh(c, 2) && (null == d || d < jh(c, 2)))
                            return !1;
                    }
                }
                return !0;
            };
            var vy = function (a) {
                var b, c, d;
                this.j = new C.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : N(a, rx, 2)) || void 0 === b ? void 0 : N(b, qx, 2)) || void 0 === c ? void 0 : K(c, 1)) && void 0 !== d ? d : []);
            };
            vy.prototype.getName = function () {
                return 'Url';
            };
            vy.prototype.Eb = function (a) {
                var b = this;
                return 0 === this.j.size || !K(a, 6).some(function (c) {
                    return b.j.has(c);
                });
            };
            var wy = function (a) {
                var b, c, d, e, f;
                this.j = new C.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : N(a, rx, 2)) || void 0 === b ? void 0 : N(b, mx, 1)) || void 0 === c ? void 0 : K(c, 1)) && void 0 !== d ? d : []);
                this.m = !(null === (f = null === (e = null === a || void 0 === a ? void 0 : N(a, rx, 2)) || void 0 === e ? void 0 : N(e, mx, 1)) || void 0 === f || !kl(f, 4));
            };
            wy.prototype.getName = function () {
                return 'Category';
            };
            wy.prototype.Eb = function (a) {
                var b;
                return Rd(this.j, null === (b = N(a, mh, 1)) || void 0 === b ? void 0 : K(b, 1)) || this.m && (a = N(a, mh, 1), !a || kl(a, 3)) ? !1 : !0;
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
                    Qc: xy.prototype,
                    ub: 1
                };
                this.perBuyerSignals = new C.Map();
                this.j = new C.Map();
                this.sellerSignals.Qc = new xy(null !== (c = null === (b = N(a, zx, 6)) || void 0 === b ? void 0 : N(b, xx, 1)) && void 0 !== c ? c : new xx());
                this.sellerSignals.ub = null !== (g = null === (f = null === (e = null === (d = N(a, zx, 6)) || void 0 === d ? void 0 : N(d, xx, 1)) || void 0 === e ? void 0 : N(e, tx, 3)) || void 0 === f ? void 0 : ll(f, 3)) && void 0 !== g ? g : 1;
                var h = ml(a, 4, Ud);
                h = null !== h && void 0 !== h ? h : new bl([]);
                h = _.I(_.u(h, 'entries').call(h));
                for (var k = h.next(); !k.done; k = h.next()) {
                    var l = _.I(k.value);
                    k = l.next().value;
                    l = l.next().value;
                    this.perBuyerSignals.set(k, l);
                }
                a = ml(a, 5, Vd);
                a = null !== a && void 0 !== a ? a : new bl([]);
                a = _.I(_.u(a, 'entries').call(a));
                for (h = a.next(); !h.done; h = a.next())
                    k = _.I(h.value), h = k.next().value, k = k.next().value, this.j.set(h, k);
            };
            var uy = function (a) {
                R.call(this, a);
            };
            _.P(uy, R);
            var mh = function (a) {
                R.call(this, a, -1, zy);
            };
            _.P(mh, R);
            var zy = [
                1,
                2
            ];
            var lh = function (a) {
                R.call(this, a, -1, Ay);
            };
            _.P(lh, R);
            var Ay = [1];
            var kh = function (a) {
                R.call(this, a, -1, By);
            };
            _.P(kh, R);
            var By = [
                2,
                3,
                6
            ];
            var Cy = function (a) {
                var b;
                return {
                    ad: null !== (b = N(a, kh, 2)) && void 0 !== b ? b : new kh(),
                    bid: 0.1
                };
            };
            var Dy = function (a, b, c, d) {
                var e, f, g, h, k, l, m, n, p, t, w, E;
                b = null === d || void 0 === d ? void 0 : N(d, kx, 1);
                c = null === (e = null === c || void 0 === c ? void 0 : N(c, hx, 1)) || void 0 === e ? void 0 : N(e, gx, 1);
                if (!b || !c)
                    return {
                        ad: null !== (f = N(a, kh, 2)) && void 0 !== f ? f : new kh(),
                        bid: 0
                    };
                d = 1 / (1 + Math.exp(-Sd(null !== (g = jl(b, 1)) && void 0 !== g ? g : 1, null !== (h = jl(c, 1)) && void 0 !== h ? h : 1)));
                var H = Math.exp(Sd(null !== (k = jl(b, 2)) && void 0 !== k ? k : 1, null !== (l = jl(c, 2)) && void 0 !== l ? l : 1));
                b = (null !== (m = ll(b, 3)) && void 0 !== m ? m : 1) * d * Math.pow(H, null !== (n = ll(b, 4)) && void 0 !== n ? n : 1);
                b = (null !== (p = ll(c, 3)) && void 0 !== p ? p : 1) * b * (1 - 1 / (1 + Math.exp(-(null !== (t = ll(c, 4)) && void 0 !== t ? t : 1) * Math.log(b) - (null !== (w = ll(c, 5)) && void 0 !== w ? w : 0))));
                return {
                    ad: null !== (E = N(a, kh, 2)) && void 0 !== E ? E : new kh(),
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
                var d = new uy();
                d = Cb(d, 1, b, 0);
                Gb(a, 8, d);
                a: {
                    d = _.I(c.sellerSignals.Qc.j);
                    for (var e = d.next(); !e.done; e = d.next())
                        if (!e.value.Eb(a)) {
                            a = !1;
                            break a;
                        }
                    a = !0;
                }
                return a ? b * c.sellerSignals.ub : 0;
            };
            var Ey = function () {
                }, Fy;
            _.P(Ey, Yx);
            Fy || (Fy = new Ey());
            var Gy = function (a) {
                    a = void 0 === a ? window : a;
                    return a._gmptnl ? 'afma-gpt-sdk-a' : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? 'afma-gpt-sdk-i' : null;
                }, Hy = function (a, b) {
                    b = void 0 === b ? window : b;
                    var c = Gy(b);
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
            var Iy = function (a, b) {
                Mt.call(this, a);
                this.id = a;
                this.K = b;
            };
            _.P(Iy, Mt);
            Iy.prototype.J = function (a) {
                this.K(this.id, a);
            };
            var Jy = function () {
                    this.errorMessage = this.info = this.error = this.Xb = null;
                }, Ky = function (a, b) {
                    a.Xb = b;
                    return a;
                };
            Jy.prototype.getError = function () {
                return this.error;
            };
            var Ly = function (a, b) {
                    a.errorMessage = b;
                    return a;
                }, My = function () {
                    this.cache = {};
                }, ve = function () {
                    Ny || (Oy = _.gc(Fp), Py = _.gc(Ep), Ny = new My());
                    return Ny;
                }, we = function (a) {
                    var b = K(a, 3);
                    if (!b)
                        return 3;
                    if (void 0 === K(a, 2))
                        return 4;
                    a = Date.now();
                    return a > b + 3600000 * Py ? 2 : a > b + 3600000 * Oy ? 1 : 0;
                };
            My.prototype.get = function (a, b) {
                var c = new Jy();
                if (this.cache[a])
                    return Ky(c, this.cache[a]);
                var d = '';
                try {
                    d = b.getItem('_GESPSK-' + a);
                } catch (e) {
                    return c.error = 6, Ly(c, e.message);
                }
                if (!d)
                    return new Jy();
                b = null;
                try {
                    b = Yh(Xw, d);
                } catch (e) {
                    return a = new Jy(), a.error = 5, Ly(a, e.message);
                }
                b && (this.cache[a] = b);
                return Ky(new Jy(), b);
            };
            My.prototype.set = function (a, b) {
                var c = (0, J.M)(K(a, 1)), d = '_GESPSK-' + c, e = Ky(new Jy(), a);
                try {
                    b.setItem(d, ql(a));
                } catch (f) {
                    e.info = 7, Ly(e, f.message);
                }
                this.cache[c] = a;
                return e;
            };
            var Ny = null, Oy = 24, Py = 72;
            var ie = function (a, b, c, d) {
                Iy.call(this, 655, d);
                this.ya = a;
                this.F = b;
                this.storage = c;
                this.A = U(this);
                this.B = U(this);
                this.l = _.gc(ae);
            };
            _.P(ie, Iy);
            ie.prototype.j = function () {
                var a, b = ve().get(this.ya, this.storage);
                if (b.getError())
                    $d(b.getError(), this.ya, b.errorMessage), Gt(this.A), Gt(this.B);
                else {
                    var c = Date.now();
                    if (b = b.Xb)
                        if (this.l && (Ff(b, 8) || ($d(33, this.ya), be(b, this.l)), Ff(b, 7) || ($d(34, this.ya), D(b, 7, Math.round(Date.now() / 1000 / 60)))), Ff(b, 3) || $d(35, this.ya), this.l) {
                            var d = (0, J.M)(ce(b, 8)), e = null !== (a = K(b, 7)) && void 0 !== a ? a : c;
                            d < this.l && be(b, Math.min(d + Number((this.l * (c / 1000 / 60 - e) / 60).toFixed(3)), this.l));
                            1 > (0, J.M)(ce(b, 8)) ? (c = {}, $d(22, this.ya, null, (c.t = String(e), c.cr = String(d), c.cs = String(we(b)), c)), Gt(this.A), Gt(this.B)) : (this.A.j(this.F), this.B.j(b));
                        } else
                            this.A.j(this.F), this.B.j(b);
                    else
                        this.A.j(this.F), b = this.B, d = b.j, e = new Xw(), e = D(e, 1, this.ya), e = be(e, this.l), c = D(e, 3, c), d.call(b, c);
                }
            };
            var de = function (a, b, c, d) {
                    'string' !== typeof c ? $d(21, a) : c || $d(20, a);
                    D(b, 2, c);
                    b = ve().set(b, d);
                    b.errorMessage ? $d((0, J.M)(b.info), a, b.errorMessage) : $d(27, a);
                }, ee = function (a) {
                    return 'string' === typeof a ? a : a instanceof Error ? a.message : null;
                };
            var je = function (a, b, c, d) {
                Iy.call(this, 658, d);
                this.storage = c;
                this.l = U(this);
                this.A = U(this);
                this.B = U(this);
                this.F = W(this, a);
                this.R = W(this, b);
            };
            _.P(je, Iy);
            je.prototype.j = function () {
                var a = this;
                if (this.F.value) {
                    var b = function (g) {
                            a.l.j({
                                id: (0, J.M)(K(g, 1)),
                                qd: K(g, 2)
                            });
                        }, c = this.F.value, d = (0, J.M)(this.R.value), e = (0, J.M)(K(d, 1)), f = we(d);
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
                        Qy(this);
                        break;
                    case 1:
                        b(d);
                        this.A.j(c);
                        this.B.j(d);
                        break;
                    case 3:
                    case 2:
                    case 4:
                        D(d, 2, null), fe(e, d, c, this.storage).then(b), Qy(this);
                    }
                } else
                    Gt(this.l), Qy(this);
            };
            var Qy = function (a) {
                Gt(a.A);
                Gt(a.B);
            };
            var ke = function (a, b, c, d) {
                Iy.call(this, 662, d);
                this.storage = c;
                this.l = W(this, a);
                this.A = W(this, b);
            };
            _.P(ke, Iy);
            ke.prototype.j = function () {
                var a = this;
                this.A.value && this.l.value && he().then(function () {
                    var b = (0, J.M)(a.A.value), c = (0, J.M)(K(b, 1));
                    fe(c, b, (0, J.M)(a.l.value), a.storage);
                });
            };
            var se = function (a, b) {
                this.storage = b;
                this.l = [];
                this.o = [];
                this.j = [];
                a = _.I(a);
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
                    a = _.I(this.o);
                    for (c = a.next(); !c.done; c = a.next())
                        b.then(c.value);
                }
            };
            se.prototype.m = function (a, b) {
                for (var c = _.I(this.j), d = c.next(); !d.done; d = c.next())
                    d = d.value, d(a, b);
            };
            var Ry = 0, Sy = rj(jj(kj('https://pagead2.googlesyndication.com/pagead/expansion_embed.js')));
            var Ty = function (a, b, c) {
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
            var Uy = /^\.google\.(com?\.)?[a-z]{2,3}$/, Vy = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/, Wy = function (a) {
                    return Uy.test(a) && !Vy.test(a);
                }, Xy = _.F, Zy = function (a) {
                    a = 'https://adservice' + (a + '/adsid/integrator.js');
                    var b = ['domain=' + encodeURIComponent(_.F.location.hostname)];
                    Yy[3] >= Wf() && b.push('adsid=' + encodeURIComponent(Yy[1]));
                    return a + '?' + b.join('&');
                }, Yy, $y, az = function () {
                    Xy = _.F;
                    Yy = Xy.googleToken = Xy.googleToken || {};
                    var a = Wf();
                    Yy[1] && Yy[3] > a && 0 < Yy[2] || (Yy[1] = '', Yy[2] = -1, Yy[3] = -1, Yy[4] = '', Yy[6] = '');
                    $y = Xy.googleIMState = Xy.googleIMState || {};
                    Wy($y[1]) || ($y[1] = '.google.com');
                    Array.isArray($y[5]) || ($y[5] = []);
                    'boolean' !== typeof $y[6] && ($y[6] = !1);
                    Array.isArray($y[7]) || ($y[7] = []);
                    'number' !== typeof $y[8] && ($y[8] = 0);
                }, bz = function () {
                    az();
                    return Yy[1];
                }, cz = function () {
                    az();
                    return Yy[4];
                }, dz = function () {
                    az();
                    return Yy[6];
                }, ez = function (a) {
                    az();
                    Wy(a) && ($y[1] = a);
                }, fz = {
                    ec: function () {
                        return 0 < $y[8];
                    },
                    ge: function () {
                        $y[8]++;
                    },
                    he: function () {
                        0 < $y[8] && $y[8]--;
                    },
                    ie: function () {
                        $y[8] = 0;
                    },
                    Pf: function () {
                        return !1;
                    },
                    Hc: function () {
                        return $y[5];
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
                        if (!fz.ec()) {
                            var a = _.F.document, b = function (e) {
                                    e = Zy(e);
                                    a: {
                                        try {
                                            var f = Zj('script[nonce]', void 0);
                                            break a;
                                        } catch (g) {
                                        }
                                        f = void 0;
                                    }
                                    Ty(a, e, f);
                                    f = a.createElement('script');
                                    f.type = 'text/javascript';
                                    f.onerror = function () {
                                        return _.F.processGoogleToken({}, 2);
                                    };
                                    e = fn(e);
                                    Gd(f, e);
                                    try {
                                        (a.head || a.body || a.documentElement).appendChild(f), fz.ge();
                                    } catch (g) {
                                    }
                                }, c = $y[1];
                            b(c);
                            '.google.com' != c && b('.google.com');
                            b = {};
                            var d = (b.newToken = 'FBT', b);
                            _.F.setTimeout(function () {
                                return _.F.processGoogleToken(d, 1);
                            }, 1000);
                        }
                    }
                }, gz = function (a) {
                    az();
                    var b = Xy.googleToken[5] || 0;
                    a && (0 != b || Yy[3] >= Wf() ? fz.Cc(a) : (fz.Hc().push(a), fz.Rc()));
                    Yy[3] >= Wf() && Yy[2] >= Wf() || fz.Rc();
                }, hz = function (a) {
                    _.F.processGoogleToken = _.F.processGoogleToken || function (b, c) {
                        var d = b;
                        d = void 0 === d ? {} : d;
                        c = void 0 === c ? 0 : c;
                        b = d.newToken || '';
                        var e = 'NT' == b, f = parseInt(d.freshLifetimeSecs || '', 10), g = parseInt(d.validLifetimeSecs || '', 10), h = d['1p_jar'] || '';
                        d = d.pucrd || '';
                        az();
                        1 == c ? fz.ie() : fz.he();
                        var k = Xy.googleToken = Xy.googleToken || {}, l = 0 == c && b && 'string' === typeof b && !e && 'number' === typeof f && 0 < f && 'number' === typeof g && 0 < g && 'string' === typeof h;
                        e = e && !fz.ec() && (!(Yy[3] >= Wf()) || 'NT' == Yy[1]);
                        var m = !(Yy[3] >= Wf()) && 0 != c;
                        if (l || e || m)
                            e = Wf(), f = e + 1000 * f, g = e + 1000 * g, 0.00001 > Math.random() && _.bn(_.F, 'https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=' + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, az();
                        if (l || !fz.ec()) {
                            c = fz.Hc();
                            for (b = 0; b < c.length; b++)
                                fz.Cc(c[b]);
                            c.length = 0;
                        }
                    };
                    gz(a);
                };
            var Mg = function (a, b) {
                    b = void 0 === b ? {} : b;
                    this.root = b.root ? b.root : null;
                    this.A = b.rootMargin ? ze(b.rootMargin) : [
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
                }, iz = function (a) {
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
                }, jz = function (a, b, c) {
                    if (!b || b.isIntersecting != c.isIntersecting)
                        return !0;
                    var d = b.intersectionRatio, e = c.intersectionRatio;
                    return d == e ? !1 : _.fj(a.J, function (f) {
                        return f < d != f < e;
                    });
                };
            Mg.prototype.C = function () {
                var a = this, b = iz(this);
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
                    jz(a, c.ka, d) && a.l.push(d);
                    c.ka = d;
                });
                this.l.length && this.B(kz(this), this);
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
            var kz = function (a) {
                var b = [].concat(_.nc(a.l));
                a.l.length = 0;
                return b;
            };
            _.lz = function () {
                var a = _.bc(38);
                this.j = void 0 === a ? 0.01 : a;
                this.m = this.o;
            };
            _.lz.prototype.o = function (a, b, c, d, e) {
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
            var mz = function (a, b, c, d, e, f) {
                _.Tq.call(this);
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
            _.P(mz, _.Tq);
            mz.prototype.V = function (a) {
                if (!('*' !== this.o && a.origin !== this.o || !this.pb && a.source != this.l)) {
                    var b = null;
                    try {
                        b = JSON.parse(a.data);
                    } catch (c) {
                    }
                    if (_.ja(b) && (a = b.i, b.c === this.C && a != this.A)) {
                        if (2 !== this.status)
                            try {
                                this.status = 2, nz(this), this.j && (this.j(), this.j = null);
                            } catch (c) {
                            }
                        a = b.s;
                        b = b.p;
                        if ('string' === typeof a && ('string' === typeof b || _.ja(b)) && this.B.hasOwnProperty(a))
                            this.B[a](b);
                    }
                }
            };
            var nz = function (a) {
                var b = {};
                b.c = a.C;
                b.i = a.A;
                a.J && (b.e = a.J);
                a.l.postMessage(JSON.stringify(b), a.o);
            };
            mz.prototype.U = function () {
                if (1 === this.status) {
                    try {
                        this.l.postMessage && nz(this);
                    } catch (a) {
                    }
                    window.setTimeout((0, _.Ui)(this.U, this), 50);
                }
            };
            mz.prototype.connect = function (a) {
                a && (this.j = a);
                _.Hd(window, 'message', this.F);
                this.K && this.U();
            };
            var oz = function (a, b, c) {
                    a.B[b] = c;
                }, pz = function (a, b, c) {
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
            mz.prototype.G = function () {
                this.status = 3;
                _.ge(window, 'message', this.F);
                _.Tq.prototype.G.call(this);
            };
            var qz = function (a) {
                R.call(this, a);
            };
            _.P(qz, R);
            var rz = function (a) {
                R.call(this, a);
            };
            _.P(rz, R);
            var sz = function (a) {
                R.call(this, a);
            };
            _.P(sz, R);
            var vz, wz;
            _.tz = function (a) {
                this.j = _.zd(a).floatingAdsStacking;
            };
            vz = function (a) {
                var b = a.j.nextRestrictionId++;
                a.j.maxZIndexRestrictions[b] = 2147483646;
                uz(a);
                return b;
            };
            wz = function (a) {
                a = _.cm(a.j.maxZIndexRestrictions);
                return a.length ? Math.min.apply(null, a) : null;
            };
            _.tz.prototype.addListener = function (a) {
                this.j.maxZIndexListeners.push(a);
                a(wz(this));
            };
            var uz = function (a) {
                    var b = wz(a);
                    _.dj(a.j.maxZIndexListeners, function (c) {
                        return c(b);
                    });
                }, xz = function (a) {
                    this.m = a;
                    this.j = null;
                };
            var yz;
            _.zz = function (a, b) {
                if (!a.body)
                    return null;
                var c = new yz();
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
            yz = function () {
                this.j = this.G = this.l = this.o = null;
                this.m = 0;
            };
            yz.prototype.apply = function (a, b) {
                this.o = a.body.style.overflow;
                this.l = a.body.style.position;
                this.G = a.body.style.top;
                this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
                this.m = _.Tt(b);
                _.hn(a.body, 'top', -this.m + 'px');
            };
            var Az = function (a, b) {
                b = void 0 === b ? 500 : b;
                _.Tq.call(this);
                this.o = a;
                this.wb = b;
                this.j = null;
                this.C = {};
                this.A = 0;
                this.l = null;
            };
            _.P(Az, _.Tq);
            Az.prototype.G = function () {
                this.C = {};
                this.l && (_.ge(this.o, 'message', this.l), delete this.l);
                delete this.C;
                delete this.o;
                delete this.j;
                _.Tq.prototype.G.call(this);
            };
            var Cz = function (a) {
                    var b;
                    return 'function' === typeof (null === (b = a.o) || void 0 === b ? void 0 : b.__uspapi) || null != Bz(a);
                }, Ez = function (a, b) {
                    var c = {};
                    if (Cz(a)) {
                        var d = _.bj(function () {
                            return b(c);
                        });
                        Dz(a, function (e, f) {
                            f && (c = e);
                            d();
                        });
                        setTimeout(d, a.wb);
                    } else
                        b(c);
                }, Dz = function (a, b) {
                    var c, d;
                    if ('function' === typeof (null === (c = a.o) || void 0 === c ? void 0 : c.__uspapi))
                        (null === (d = a.o) || void 0 === d ? void 0 : d.__uspapi)('getUSPData', 1, b);
                    else if (Bz(a)) {
                        Fz(a);
                        var e = ++a.A;
                        a.C[e] = b;
                        a.j && (b = {}, a.j.postMessage((b.__uspapiCall = {
                            command: 'getUSPData',
                            version: 1,
                            callId: e
                        }, b), '*'));
                    }
                }, Bz = function (a) {
                    if (a.j)
                        return a.j;
                    a.j = qm(a.o, '__uspapiLocator');
                    return a.j;
                }, Fz = function (a) {
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
            var Gz = function (a, b) {
                if (!a)
                    return a;
                var c = a.toLowerCase();
                return -1 < c.indexOf('<!doctype') || -1 < c.indexOf('<html') ? a : '<!doctype html><html><head>' + (void 0 === b ? '' : b) + '</head><body>' + a + '</body></html>';
            };
            var Hz = function (a, b, c, d, e, f) {
                    this.o = Sm(a);
                    this.m = Sm(b);
                    this.l = c;
                    this.j = Sm(d);
                    this.G = e;
                    this.C = f;
                }, Iz = function (a) {
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
                }, Jz = function (a, b) {
                    var c = window, d = c.screenX || c.screenLeft || 0, e = c.screenY || c.screenTop || 0;
                    c = new _.Rm(e, d + (c.outerWidth || document.documentElement.clientWidth || 0), e + (c.outerHeight || document.documentElement.clientHeight || 0), d);
                    var f = on(a);
                    d = _.sn(_.tn, a);
                    var g = new Tm(f.x, f.y, d.width, d.height);
                    d = Um(g);
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
                    h = (h = 0 <= h.top && 0 <= h.left && h.bottom > h.top && h.right > h.left ? h : null) ? new Tm(h.left, h.top, h.right - h.left, h.bottom - h.top) : null;
                    b ? (k = b.boundingClientRect, b = new Tm(f.x - k.left, f.y - k.top, b.rootBounds.width, b.rootBounds.height)) : b = h;
                    k = h ? Vm(g, h) : null;
                    h = f = 0;
                    k && !new _.Cl(k.width, k.height).isEmpty() && (f = k.width / g.width, h = k.height / g.height);
                    k = new _.Rm(0, 0, 0, 0);
                    if (a = b)
                        (g = Vm(g, b)) ? (n = Um(b), l = Um(g), a = l.right != n.left && n.right != l.left, n = l.bottom != n.top && n.bottom != l.top, a = (0 != g.width || a) && (0 != g.height || n)) : a = !1;
                    a && (k = new _.Rm(Math.max(d.top - b.top, 0), Math.max(b.left + b.width - d.right, 0), Math.max(b.top + b.height - d.bottom, 0), Math.max(d.left - b.left, 0)));
                    return new Hz(c, d, e, k, f, h);
                };
            var Kz = function (a) {
                this.G = a;
                this.C = null;
                this.F = this.status = 0;
                this.m = null;
                this.ma = 'sfchannel' + a;
            };
            var jt = lt;
            var Lz = function (a) {
                this.j = a;
            };
            var Mz = function (a, b) {
                this.Hb = a;
                this.Ib = b;
                this.m = this.j = !1;
            };
            var Nz = function (a, b, c, d, e, f, g, h, k, l) {
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
            var Oz = function (a, b) {
                this.m = a;
                this.l = b;
            };
            Oz.prototype.j = function (a) {
                this.l && a && (a.sentinel = this.l);
                return JSON.stringify(a);
            };
            var Pz = function (a, b, c) {
                Oz.call(this, a, void 0 === c ? '' : c);
                this.version = b;
            };
            _.P(Pz, Oz);
            Pz.prototype.j = function () {
                return Oz.prototype.j.call(this, {
                    uid: this.m,
                    version: this.version
                });
            };
            var Qz = function (a, b, c, d) {
                Oz.call(this, a, void 0 === d ? '' : d);
                this.G = b;
                this.o = c;
            };
            _.P(Qz, Oz);
            Qz.prototype.j = function () {
                return Oz.prototype.j.call(this, {
                    uid: this.m,
                    initialWidth: this.G,
                    initialHeight: this.o
                });
            };
            var Rz = function (a, b, c) {
                Oz.call(this, a, void 0 === c ? '' : c);
                this.description = b;
            };
            _.P(Rz, Oz);
            Rz.prototype.j = function () {
                return Oz.prototype.j.call(this, {
                    uid: this.m,
                    description: this.description
                });
            };
            var Sz = function (a, b, c, d) {
                Oz.call(this, a, void 0 === d ? '' : d);
                this.o = b;
                this.push = c;
            };
            _.P(Sz, Oz);
            Sz.prototype.j = function () {
                return Oz.prototype.j.call(this, {
                    uid: this.m,
                    expand_t: this.o.top,
                    expand_r: this.o.right,
                    expand_b: this.o.bottom,
                    expand_l: this.o.left,
                    push: this.push
                });
            };
            var Tz = function (a, b) {
                Oz.call(this, a, void 0 === b ? '' : b);
            };
            _.P(Tz, Oz);
            Tz.prototype.j = function () {
                return Oz.prototype.j.call(this, { uid: this.m });
            };
            var Uz = function (a, b, c) {
                Oz.call(this, a, void 0 === c ? '' : c);
                this.G = b;
            };
            _.P(Uz, Oz);
            Uz.prototype.j = function () {
                var a = {
                    uid: this.m,
                    newGeometry: Iz(this.G)
                };
                return Oz.prototype.j.call(this, a);
            };
            var Vz = function (a, b, c, d, e, f) {
                Uz.call(this, a, c, void 0 === f ? '' : f);
                this.success = b;
                this.o = d;
                this.push = e;
            };
            _.P(Vz, Uz);
            Vz.prototype.j = function () {
                var a = {
                    uid: this.m,
                    success: this.success,
                    newGeometry: Iz(this.G),
                    expand_t: this.o.top,
                    expand_r: this.o.right,
                    expand_b: this.o.bottom,
                    expand_l: this.o.left,
                    push: this.push
                };
                this.l && (a.sentinel = this.l);
                return JSON.stringify(a);
            };
            var Wz = function (a, b, c, d) {
                Oz.call(this, a, void 0 === d ? '' : d);
                this.width = b;
                this.height = c;
            };
            _.P(Wz, Oz);
            Wz.prototype.j = function () {
                return Oz.prototype.j.call(this, {
                    uid: this.m,
                    width: this.width,
                    height: this.height
                });
            };
            var Xz = function (a, b, c, d, e) {
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
            var Yz = function () {
                    this.j = [];
                }, $z = function (a, b, c, d, e) {
                    a.j.push(new Zz(b, c, d, e));
                }, aA = function (a, b, c, d) {
                    $z(a, b, c, d + 'px', void 0);
                }, bA = function (a) {
                    for (var b = a.j.length - 1; 0 <= b; b--) {
                        var c = a.j[b];
                        c.m ? (c.o.style.removeProperty(c.j), c.o.style.setProperty(c.j, String(c.l), c.G)) : c.o.style[c.j] = c.l;
                    }
                    a.j.length = 0;
                }, Zz = function (a, b, c, d) {
                    this.o = a;
                    this.j = (this.m = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, '-$1').toLowerCase() : b;
                    this.l = this.m ? a.style.getPropertyValue(this.j) : a.style[this.j];
                    this.G = this.m ? a.style.getPropertyPriority(this.j) : void 0;
                    this.m ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c);
                };
            var cA = function () {
                    var a = window, b = _.dg(a);
                    b && (b = {
                        label: '2',
                        type: 9,
                        value: b
                    }, a = a.google_js_reporting_queue = a.google_js_reporting_queue || [], 2048 > a.length && a.push(b));
                }, dA = function (a, b, c) {
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
            var iA = function (a) {
                Kz.call(this, a.uniqueId);
                var b = this;
                this.A = a.Yd;
                this.X = 1 == a.size;
                this.Z = new Mz(a.permissions.Hb && !this.X, a.permissions.Ib && !this.X);
                this.l = a.oc;
                this.na = a.hostpageLibraryTokens || [];
                var c = window.location;
                this.ra = 'file:' == c.protocol ? '*' : c.protocol + '//' + c.host;
                this.xa = !!a.pb;
                c = !1 === a.$c ? 'https:' : window.location.protocol;
                this.R = a.Ub ? '//' + a.Ub + '.safeframe.googlesyndication.com' : '//tpc.googlesyndication.com';
                this.sa = a.ob ? '*' : Me(a.Ja) ? 'https://secureframe.doubleclick.net' : c + this.R;
                this.ba = !!a.wd;
                this.ja = eA(a);
                this.o = new Yz();
                fA(this, a.oc, a.size);
                this.C = this.ha = Jz(a.oc);
                this.K = a.me || '1-0-38';
                this.oa = a.pd || '';
                this.ca = void 0 === a.Ja ? null : a.Ja;
                this.Ga = a.Sa;
                gA(this, a);
                this.W = null;
                this.U = dA(412, function () {
                    return hA(b);
                }, a.va);
                this.V = -1;
                this.J = 0;
                this.B = null;
                !a.Sf || 'function' !== typeof IntersectionObserver || wk || vk || (this.B = new IntersectionObserver(dA(414, function (e) {
                    b.W = e[e.length - 1];
                    hA(b);
                }, a.va)));
                this.m = new mz(this.ma, this.j.contentWindow, this.sa, !1);
                oz(this.m, 'init_done', (0, _.Ui)(this.hc, this));
                oz(this.m, 'register_done', (0, _.Ui)(this.tc, this));
                oz(this.m, 'report_error', (0, _.Ui)(this.vc, this));
                oz(this.m, 'expand_request', (0, _.Ui)(this.cc, this));
                oz(this.m, 'collapse_request', (0, _.Ui)(this.ac, this));
                oz(this.m, 'creative_geometry_update', (0, _.Ui)(this.$, this));
                this.m.connect((0, _.Ui)(this.kc, this));
                var d = dA(415, function () {
                    b.j && (b.j.name = '', a.Nc && a.Nc(), _.ge(b.j, 'load', d));
                }, a.va);
                _.Hd(this.j, 'load', d);
                this.hc = dA(413, this.hc, a.va);
                this.tc = dA(417, this.tc, a.va);
                this.vc = dA(419, this.vc, a.va);
                this.cc = dA(411, this.cc, a.va);
                this.ac = dA(409, this.ac, a.va);
                this.$ = dA(410, this.$, a.va);
                this.kc = dA(416, this.kc, a.va);
            };
            _.P(iA, Kz);
            var fA = function (a, b, c) {
                    a.X ? (b.style.width = _.rn('100%', !0), b.style.height = _.rn('auto', !0)) : (b.style.width = _.rn(c.width, !0), b.style.height = _.rn(c.height, !0));
                }, gA = function (a, b) {
                    var c, d = b.ob ? '' : null != (c = b.content) ? c : '';
                    c = {
                        shared: {
                            sf_ver: a.K,
                            ck_on: kt() ? 1 : 0,
                            flash_ver: '0'
                        }
                    };
                    d = a.K + ';' + d.length + ';' + d;
                    c = new Nz(a.G, a.ra, a.ha, a.Z, new Lz(c), a.X, a.xa, a.ca, a.na, a.Ga);
                    var e = {};
                    e.uid = c.m;
                    e.hostPeerName = c.o;
                    e.initialGeometry = Iz(c.l);
                    var f = c.permissions;
                    f = JSON.stringify({
                        expandByOverlay: f.Hb,
                        expandByPush: f.Ib,
                        readCookie: f.j,
                        writeCookie: f.m
                    });
                    e = (e.permissions = f, e.metadata = JSON.stringify(c.metadata.j), e.reportCreativeGeometry = c.G, e.isDifferentSourceWindow = c.pb, e.goog_safeframe_hlt = wt(c.hostpageLibraryTokens), e.encryptionMode = c.Ja, e);
                    c.j && (e.sentinel = c.j);
                    c.Sa && (e.pbjsAdConfig = c.Sa);
                    c = JSON.stringify(e);
                    e = d + c;
                    c = !1 === b.$c;
                    if (a.ba && b.size instanceof _.Cl) {
                        d = Me(b.Ja) ? 'https://secureframe.doubleclick.net' : _.Ll(_.El(a.l)).location.protocol + a.R;
                        f = _.Ll(_.El(a.l));
                        var g = b.Ic, h = b.size;
                        Ry || Yl(f.document, Sy);
                        Ry++;
                        f.google_eas_queue = f.google_eas_queue || [];
                        f.google_eas_queue.push({
                            a: g,
                            b: d,
                            c: h.width,
                            d: h.height,
                            e: 'sf-gdn-exp-' + Ry,
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
                    g && (g = _.Ll(_.El(a.l)), c = Me(a.ca) ? 'https://secureframe.doubleclick.net/container.html?ecs=' + f : Xz(g, a.K, a.oa, c, a.R), f = [], a.ba && (h = km(g.location.href), g = f.push, h = [
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
            _.q = iA.prototype;
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
                    var c = new Pz(b.uid, b.version, b.sentinel);
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
                    if (this.G != new Qz(b.uid, b.initialWidth, b.initialHeight, b.sentinel).m)
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
                    var c = new Rz(b.uid, b.description, b.sentinel);
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
                    var c = new Sz(b.uid, new _.Rm(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
                    if (this.G != c.m)
                        throw Error('Wrong source container');
                    if (!(0 <= c.o.top && 0 <= c.o.left && 0 <= c.o.bottom && 0 <= c.o.right))
                        throw Error('Invalid expansion amounts');
                    var d;
                    if (d = c.push && this.Z.Ib || !c.push && this.Z.Hb) {
                        var e = c.o, f = c.push, g = this.C = Jz(this.j);
                        if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                            if (!f)
                                for (var h = this.j.parentNode; h && h.style; h = h.parentNode)
                                    $z(this.o, h, 'overflowX', 'visible', 'important'), $z(this.o, h, 'overflowY', 'visible', 'important');
                            var k = this.C.m, l = this.C.m, m = Um(new Tm(0, 0, k.right - k.left, l.bottom - l.top));
                            _.ja(e) ? (m.top -= e.top, m.right += e.right, m.bottom += e.bottom, m.left -= e.left) : (m.top -= e, m.right += Number(void 0), m.bottom += Number(void 0), m.left -= Number(void 0));
                            $z(this.o, this.l, 'position', 'relative');
                            $z(this.o, this.j, 'position', 'absolute');
                            f ? (aA(this.o, this.l, 'width', m.right - m.left), aA(this.o, this.l, 'height', m.bottom - m.top)) : $z(this.o, this.j, 'zIndex', '10000');
                            aA(this.o, this.j, 'width', m.right - m.left);
                            aA(this.o, this.j, 'height', m.bottom - m.top);
                            aA(this.o, this.j, 'left', m.left);
                            aA(this.o, this.j, 'top', m.top);
                            this.F = 2;
                            this.C = Jz(this.j);
                            d = !0;
                        } else
                            d = !1;
                    }
                    a = d;
                    pz(this.m, 'expand_response', new Vz(this.G, a, this.C, c.o, c.push).j());
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
                    if (this.G != new Tz(b.uid, b.sentinel).m)
                        throw Error('Wrong source container');
                    bA(this.o);
                    this.F = 0;
                    this.j && (this.C = Jz(this.j));
                    pz(this.m, 'collapse_response', new Uz(this.G, this.C).j());
                } catch (c) {
                    this.A.error('Invalid COLLAPSE_REQUEST message. Reason: ' + c.message);
                }
            };
            var hA = function (a) {
                if (1 == a.status || 2 == a.status)
                    switch (a.J) {
                    case 0:
                        jA(a);
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
            iA.prototype.$ = function (a) {
                try {
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ja(b) || !Le(b.uid) || 'number' !== typeof b.width || 'number' !== typeof b.height || b.sentinel && 'string' !== typeof b.sentinel)
                        throw Error('Cannot parse JSON message');
                    var c = new Wz(b.uid, b.width, b.height, b.sentinel);
                    if (this.G != c.m)
                        throw Error('Wrong source container');
                    var d = String(c.height);
                    this.X ? d != this.j.height && (this.j.height = d, hA(this)) : this.A.error('Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.');
                } catch (e) {
                    this.A.error('Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: ' + e.message);
                }
            };
            iA.prototype.fa = function () {
                if (1 == this.status || 2 == this.status)
                    switch (this.J) {
                    case 1:
                        this.J = 0;
                        break;
                    case 2:
                        jA(this), this.V = window.setTimeout((0, _.Ui)(this.fa, this), 1000), this.J = 1;
                    }
            };
            var jA = function (a) {
                    a.C = Jz(a.j, a.W);
                    a.W = null;
                    pz(a.m, 'geometry_update', new Uz(a.G, a.C).j());
                }, eA = function (a) {
                    var b = null;
                    a.Vc && (b = a.Vc);
                    return null == b ? null : b.join(' ');
                }, kA = [
                    'allow-modals',
                    'allow-orientation-lock',
                    'allow-presentation',
                    'allow-pointer-lock'
                ], lA = ['allow-top-navigation'], mA = ['allow-same-origin'], nA = nm([].concat(_.nc(kA), _.nc(lA)));
            nm([].concat(_.nc(kA), _.nc(mA)));
            nm([].concat(_.nc(kA), _.nc(lA), _.nc(mA)));
            var Se = function (a, b) {
                try {
                    Pd(fi(a, b));
                } catch (c) {
                }
            };
            var oA = function (a) {
                R.call(this, a);
            };
            _.P(oA, R);
            var pA = function () {
            };
            var qA = [
                    0.05,
                    0.1,
                    0.2,
                    0.5
                ], rA = [
                    0,
                    0.5,
                    1
                ], sA = function (a) {
                    a = qe(a);
                    if (!a)
                        return -1;
                    try {
                        var b = Hs(a.document);
                        var c = new _.Cl(b.clientWidth, b.clientHeight);
                    } catch (d) {
                        c = new _.Cl(-12245933, -12245933);
                    }
                    return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height;
                }, tA = function (a, b) {
                    return 0 > a ? [] : _.ye(qA, function (c) {
                        return Math.min(a / b * c, 1);
                    });
                }, wA = function (a) {
                    this.j = a.H;
                    this.o = a.fb;
                    this.B = a.zc;
                    this.l = null;
                    this.G = a.va;
                    this.m = uA(this);
                    this.J = a.qe || !1;
                    this.A = a.Of || !1;
                    this.C = null;
                    this.A && vA(this);
                }, yA = function (a, b) {
                    if (a.m) {
                        if (null != a.l) {
                            try {
                                xA(a, Math.round(performance.now()), 0, 0, 0, !1);
                            } catch (c) {
                                a.G && a.G(c);
                            }
                            a.m && a.m.unobserve(a.o);
                            a.C = null;
                        }
                        a.l = b;
                        a.m.observe(a.o);
                        a.A && (a.o.getBoundingClientRect(), At(a.j.document) || qe(a.j), a.C = new pA());
                    }
                }, uA = function (a) {
                    var b = a.o.offsetWidth * a.o.offsetHeight, c = sA(a.j);
                    b = [].concat(_.nc(rA), _.nc(tA(c, b)));
                    la(b);
                    return _.F.IntersectionObserver ? new _.F.IntersectionObserver(function (d) {
                        return zA(a, d);
                    }, { threshold: b }) : new Mg(function (d) {
                        return zA(a, d);
                    }, { threshold: b });
                }, zA = function (a, b) {
                    try {
                        var c = sA(a.j);
                        _.dj(b, function (d) {
                            var e = Math.round(d.time), f = d.boundingClientRect.width * d.boundingClientRect.height, g = d.intersectionRect.width * d.intersectionRect.height;
                            d = d.isIntersecting;
                            a.J && xA(a, e, f, g, c, d);
                        });
                    } catch (d) {
                        a.G && a.G(d);
                    }
                }, xA = function (a, b, c, d, e, f) {
                    if (null == a.l)
                        throw Error('Not Attached.');
                    var g = new oA();
                    c = D(g, 1, c);
                    d = D(c, 2, d);
                    e = D(d, 3, e);
                    b = D(e, 4, b);
                    b = D(b, 5, f);
                    f = new Of();
                    e = K(b, 4);
                    null != e && Tk(f, 4, e);
                    e = K(b, 2);
                    null != e && Tk(f, 2, e);
                    e = K(b, 1);
                    null != e && Tk(f, 1, e);
                    e = K(b, 3);
                    null != e && Tk(f, 3, e);
                    e = K(b, 5);
                    null != e && (b = e, null != b && (mk(f.j, 40), f.j.push(b ? 1 : 0)));
                    f = Qf(f);
                    f = Ka(f, 4);
                    Mb(a.B, '1', 10, f, void 0, a.l);
                }, vA = function (a) {
                    var b = zt(a.j.document);
                    b && _.Hd(a.j.document, b, function () {
                    });
                };
            var AA = function (a, b) {
                    this.j = a;
                    this.m = b;
                }, BA = function (a) {
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
            var CA = function (a) {
                    a = void 0 === a ? window : a;
                    return !a.PeriodicSyncManager;
                }, DA = function () {
                    var a = void 0 === a ? window : a;
                    if (!CA(a) && _.v(Tp) || CA(a) && _.v(Up)) {
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
            var Jm = [
                    'A88otRz1Fd3Nt567e2IYshC18LL3KGVXpVJW9oTCId4RYaygt23pbb4JqrbdIO/bwZPWEmRjBIRBu/bZbDR7Pg4AAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=',
                    'A0gCLbXCcL0R1Oc8tFPDs0G4Elz17w3zHp+Zst66+D17veE2o7fUcPsA114QtSTRqfVJLMeTSdeWOom0CcyCsgYAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
                    'A9RQ+LxFazAousxUwSCzaihJjHLO1UyjQp0teZKHl7WdbVjPDfHSKMd6D/ZI5MTjqClFycbl70EFd7cBJWXqKQEAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
                    'A6WKeWsdn1Ct+ZPqS9NCxxaiBoQ7wdTkK2/gE69Yu0gfBKJfo1gOvgkGmf5/xaIajT/RUb9AbnF1FsSZ47cCcQcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MzQwODMxOTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
                    'A04ZCu7yjrHgwQJK5ISHhH1DSg0qqowEay3n70KO6wV3D2Mj+OX3Kw20aSMitzgdG1xfrN7sOJV/dZIk+RvCzA4AAAB2eyJvcmlnaW4iOiJodHRwczovL2dvb2dsZS5jb206NDQzIiwiZmVhdHVyZSI6IlRydXN0VG9rZW5zIiwiZXhwaXJ5IjoxNjM0MDgzMTk5LCJpc1N1YmRvbWFpbiI6dHJ1ZSwiaXNUaGlyZFBhcnR5Ijp0cnVlfQ=='
                ], HA = function (a, b, c) {
                    b = void 0 === b ? null : b;
                    c = void 0 === c ? !1 : c;
                    _.Tq.call(this);
                    _.v(Wp) || FA();
                    this.o = b || [EA];
                    this.j = c;
                    if (document.hasTrustToken && !_.v(Vp) && !Array.isArray(window.goog_tt_state)) {
                        var d = GA(this);
                        Object.defineProperty(window, 'goog_tt_state', {
                            configurable: !1,
                            get: function () {
                                return d.slice();
                            }
                        });
                    }
                };
            _.P(HA, _.Tq);
            var IA = function () {
                    var a = void 0 === a ? window : a;
                    return a.goog_tt_state;
                }, JA = function (a) {
                    return a.some(function (b) {
                        return 6 === b.state;
                    });
                }, FA = function () {
                    var a = void 0 === a ? window.document : a;
                    Lm(a);
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
                    b && 0 < _.u(Object, 'keys').call(Object, b).length && (a.additionalSigningData = Nk(JSON.stringify(b), 3));
                    return a;
                }, LA = function (a) {
                    var b = IA(), c = _.bc(252);
                    if (a.setTrustToken && b && JA(b))
                        try {
                            var d = KA(b, c);
                            d && a.setTrustToken(d);
                        } catch (e) {
                        }
                }, GA = function (a) {
                    return a.o.map(function (b) {
                        return {
                            issuerOrigin: b.issuerOrigin,
                            state: _.v(Wp) && !a.j ? 12 : 1
                        };
                    });
                }, MA = function (a, b) {
                    var c = _.u(window.goog_tt_state, 'find').call(window.goog_tt_state, function (d) {
                        return d.issuerOrigin === a;
                    });
                    c && (c.state = b);
                }, NA = function () {
                    var a = window.goog_tt_state;
                    return Array.isArray(a) && a.some(function (b) {
                        return 1 != b.state;
                    });
                }, OA = function (a) {
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
                    MA(a.issuerOrigin, 2);
                    return window.fetch(b, c).then(function (d) {
                        if (!d.ok)
                            throw Error(d.status + ': Network response was not ok!');
                        MA(a.issuerOrigin, 6);
                    }).catch(function (d) {
                        d && 'NoModificationAllowedError' === d.name ? MA(a.issuerOrigin, 6) : MA(a.issuerOrigin, 5);
                    });
                }, PA = function (a, b) {
                    var c = a.issuerOrigin + a.issuancePath;
                    MA(a.issuerOrigin, 8);
                    return window.fetch(c, { trustToken: { type: 'token-request' } }).then(function (d) {
                        if (!d.ok)
                            throw Error(d.status + ': Network response was not ok!');
                        MA(a.issuerOrigin, 10);
                        if (b)
                            return OA(a);
                    }).catch(function (d) {
                        if (d && 'NoModificationAllowedError' === d.name) {
                            if (MA(a.issuerOrigin, 10), b)
                                return OA(a);
                        } else
                            MA(a.issuerOrigin, 9);
                    });
                }, QA = function (a) {
                    if (document.hasTrustToken && !_.v(Vp) && (!_.v(Wp) || a.j)) {
                        if (NA())
                            return window.goog_tt_promise;
                        var b = [];
                        a.o.forEach(function (c) {
                            _.v(Xp) && MA(c.issuerOrigin, 13);
                            var d = c.shouldRedeemToken(), e = c.shouldRequestToken();
                            if (d || e) {
                                var f = document.hasTrustToken(c.issuerOrigin).then(function (g) {
                                    if (g) {
                                        if (d)
                                            return OA(c);
                                    } else {
                                        if (e)
                                            return PA(c, d);
                                        MA(c.issuerOrigin, 3);
                                    }
                                });
                                b.push(f);
                            } else
                                MA(c.issuerOrigin, 7);
                        });
                        if (C.Promise && C.Promise.all)
                            return a = C.Promise.all(b), 'object' != typeof window.goog_tt_promise && Object.defineProperty(window, 'goog_tt_promise', {
                                configurable: !1,
                                value: a,
                                writable: !1
                            }), a;
                    }
                };
            var RA = function (a, b, c) {
                    return a.IntersectionObserver ? new a.IntersectionObserver(c, b) : new Mg(c, b);
                }, SA = function (a, b, c) {
                    _.Hd(a, b, c);
                    return function () {
                        return _.ge(a, b, c);
                    };
                }, TA = null, UA = function () {
                    TA = _.Hc();
                }, VA = function (a, b) {
                    return b ? null === TA ? (_.Hd(a, 'mousemove', UA, { passive: !0 }), _.Hd(a, 'scroll', UA, { passive: !0 }), UA(), !1) : _.Hc() - TA >= 1000 * b : !1;
                }, WA = function (a) {
                    var b = a.H, c = a.element, d = a.se, e = a.re, f = void 0 === a.Xc ? 0 : a.Xc, g = a.$b, h = a.yd, k = void 0 === a.Kc ? !0 : a.Kc, l = null, m = !1, n = !1, p = [], t = (void 0 === a.Kb ? RA : a.Kb)(b, void 0 === a.options ? {} : a.options, function (w, E) {
                            try {
                                var H = function () {
                                    p.length || (e && (p.push(SA(c, 'mouseenter', function () {
                                        m = !0;
                                        H();
                                    })), p.push(SA(c, 'mouseleave', function () {
                                        m = !1;
                                        H();
                                    }))), p.push(SA(b.document, 'visibilitychange', function () {
                                        return H();
                                    })));
                                    var G = VA(b, f), Q = At(b.document);
                                    if (n && !m && !G && !Q)
                                        l = l || b.setTimeout(function () {
                                            VA(b, f) ? H() : (g(), E.disconnect());
                                        }, 1000 * d);
                                    else if (k || m || G || Q)
                                        b.clearTimeout(l), l = null;
                                };
                                n = w[w.length - 1].isIntersecting;
                                H();
                            } catch (G) {
                                h && h(G);
                            }
                        });
                    t.observe(c);
                    return function () {
                        t.disconnect();
                        for (var w = _.I(p), E = w.next(); !E.done; E = w.next())
                            E = E.value, E();
                        null != l && b.clearTimeout(l);
                    };
                };
            var XA = function () {
                    var a = K(Th.L().j, 26);
                    this.m = null;
                    this.j = 0;
                    this.o = a;
                }, YA = function (a) {
                    if (_.v($o))
                        return new Xx();
                    if (!a.m) {
                        var b = _.bc(7);
                        ay = ey;
                        hy = b;
                        gy = 0;
                        if (!Qj() || 0 <= Qg(Rg(), 11))
                            b = jy();
                        else {
                            b = vn();
                            var c = b.__google_ad_urls;
                            b = c ? c : b.__google_ad_urls = new Xx();
                        }
                        a.m = b;
                        a.j = a.m.setupOse(a.o);
                    }
                    return a.m;
                };
            XA.prototype.getOseId = function () {
                if (_.v($o))
                    return 2;
                this.j || (this.j = Wx(0, _.bc(7)));
                return this.j;
            };
            var ZA = 0, $A = function () {
                    this.Y = [];
                    this.C = [];
                    this.Na = this.Oa = NaN;
                    this.l = 0;
                    this.Tb = this.Nb = this.Bb = '';
                    this.G = [];
                    this.X = 0;
                    this.J = this.o = this.j = this.A = null;
                    this.F = _.v(qo) ? 0 : Bb(_.F);
                    this.m = 'json_html';
                    this.Ea = 1;
                    this.B = new C.Map();
                }, aB = function (a, b, c, d, e, f, g, h, k) {
                    a.C = b;
                    a.l = c;
                    a.G = d;
                    a.Bb = e;
                    a.Nb = f;
                    a.Tb = g;
                    a.A = void 0 === h ? null : h;
                    a.J = void 0 === k ? null : k;
                }, bB = function (a, b) {
                    var c = a.B.get(b);
                    c || (c = window === window.top ? (++ZA).toString(36) : fk(), a.B.set(b, c), _.Xg(b, function () {
                        a.B.delete(b);
                    }));
                    return c;
                };
            var cB = function (a, b, c, d, e, f, g, h, k) {
                Y.call(this, 718);
                this.F = W(this, b);
                this.K = W(this, c);
                this.B = W(this, d);
                this.l = W(this, e);
                Pt(this, f);
                this.R = V(this, g);
                this.A = V(this, h);
                this.Z = V(this, k);
                this.W = Hg(a, gr);
            };
            _.P(cB, Y);
            cB.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f;
                    return A(b, function (g) {
                        if (1 == g.j) {
                            if (!dB(c))
                                return g.return();
                            d = c.R.value;
                            e = c.A.value;
                            _.hn(e, 'visibility', 'hidden');
                            _.hn(e, 'min-width', '100%');
                            _.hn(d, 'min-width', '100%');
                            return B(g, c.W, 2);
                        }
                        if (c.m)
                            return g.return();
                        f = d.contentDocument;
                        if (!f)
                            return uc('gpt_amp_fluid_no_iframedoc', function (h) {
                                dc(h);
                            }), g.return();
                        eB(c, d, e, (0, J.M)(f.body).offsetWidth, f.body.offsetHeight);
                        Bi(g);
                    });
                });
            };
            var dB = function (a) {
                    var b = !a.Z.value;
                    return null == a.l.value || a.B.value || 'height' !== a.K.value || b ? !1 : !0;
                }, eB = function (a, b, c, d, e) {
                    b.setAttribute('height', String(e));
                    b.setAttribute('width', String(d));
                    _.hn(c, 'visibility', 'visible');
                    fB(a, e, d);
                }, fB = function (a, b, c) {
                    var d = a.F.value;
                    uc('gpt_fluid_sz', function (e) {
                        r(e, 'sz', c + 'x' + b);
                        r(e, 'qqid', d || '');
                        dc(e);
                        r(e, 'ff', 1);
                    });
                };
            var gB = function (a, b, c, d, e) {
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
            _.P(gB, Y);
            gB.prototype.j = function () {
                var a, b;
                if (!_.v(Co) && !this.B.value) {
                    var c = null !== (b = null === (a = this.l.value) || void 0 === a ? void 0 : K(a, 1)) && void 0 !== b ? b : '', d = an(this.H, this.A.value, c);
                    _.Xg(this, function () {
                        try {
                            d();
                        } catch (e) {
                            Zb(493, e);
                        }
                    });
                }
            };
            var hB = /(<head(\s+[^>]*)?>)/i, iB = function (a, b, c, d, e) {
                    Y.call(this, 665);
                    this.pa = U(this);
                    this.l = V(this, a);
                    this.A = W(this, b);
                    this.B = W(this, c);
                    this.F = W(this, d);
                    this.K = W(this, e);
                };
            _.P(iB, Y);
            iB.prototype.j = function () {
                if (0 !== this.l.value.kind || !Ye(this.A.value) || Jt(this.B))
                    this.pa.j(this.l.value);
                else {
                    var a = this.l.value.ta || '', b = !!this.F.value, c = !!this.K.value;
                    c || Sg() || (a = a.replace(hB, '$1<meta http-equiv=Content-Security-Policy content="script-src https://cdn.ampproject.org/;object-src \'none\';child-src blob:;frame-src \'none\'">'));
                    b && !c && (a = a.replace(hB, '$1<meta name="referrer" content="origin">'));
                    this.pa.j({
                        kind: 0,
                        ta: a
                    });
                }
            };
            var jB = function (a, b, c, d) {
                _.Tq.call(this);
                var e = this;
                this.o = a;
                this.j = null;
                _.v(Wo) || _.Xg(this, Yq(b, Ig, function (f) {
                    var g = f.detail;
                    return void C.Promise.all([
                        c.promise,
                        d.promise
                    ]).then(function (h) {
                        h = _.I(h);
                        var k = h.next().value;
                        null == h.next().value || k || (h = g.data, e.m) || ('impression-viewable' === h ? e.o(!0) : 'string' === typeof h && 0 === h.indexOf('visibility-changed-') && (h = /^visibility-changed-(\d+(\.\d+)?)$/.exec(h)) && (h = Math.round(100 * Number(h[1])), 0 <= h && 100 >= h && (0 !== h && 100 !== h || h !== e.j) && (null !== e.j || 0 < h) && (e.j = h, e.o(!1, h))));
                    });
                }));
            };
            _.P(jB, _.Tq);
            var kB = function (a, b) {
                    return Math.max('string' === typeof a ? _.u(a, 'endsWith').call(a, 'px') ? parseInt(a, 10) : 0 : a, b) + 'px';
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
                }, nB = function (a, b, c, d, e, f, g, h, k, l, m, n, p, t, w, E) {
                    var H = Kg, G = _.O(Fv).o, Q;
                    Array.isArray(d) ? Q = new _.Cl(d[0], d[1]) : Q = 1;
                    d = null;
                    null !== c && (d = null === m ? Gz(c) : '<startguard>' + c + '<endguard>');
                    return new iA({
                        oc: a,
                        Ic: b,
                        Kd: H,
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
                            Hb: Ff(f, 1) ? !!y(f, 1) : !k,
                            Ib: Ff(f, 2) ? !!y(f, 2) : !1
                        },
                        pb: !!rh().fifWin,
                        me: iv(),
                        pd: jv(),
                        $c: !1,
                        hostpageLibraryTokens: G,
                        va: Zb,
                        Ja: null === m ? void 0 : m,
                        uniqueId: p,
                        Vb: n,
                        Ub: g || void 0,
                        jb: t || void 0,
                        ob: w || void 0,
                        Sa: E || void 0
                    });
                }, oB = function (a, b, c) {
                    var d = void 0 === d ? !0 : d;
                    var e = void 0 === e ? !0 : e;
                    b = Gz(b, '<script>var inDapIF=true,inGptIF=true;</script>');
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
                }, qB = function (a, b, c) {
                    var d = id(c), e = fd(b, a);
                    if (e) {
                        var f = Sf(e), g = f.depth;
                        f = f.pe.getBoundingClientRect();
                        if (0 === (null == f ? void 0 : f.height)) {
                            var h = _.I(rv(c));
                            c = h.next().value;
                            h = h.next().value;
                            f = 0 <= f.top && f.bottom <= (_.F.innerHeight || a.documentElement.clientHeight);
                            Tf(f, g);
                            _.v(So) && f && 0 < c && 0 < h && Lc().I(ws(b.getAdUnitPath(), b.j, c.toString(), h.toString()), b);
                        }
                    }
                    f = null == e ? void 0 : e.getBoundingClientRect();
                    if (c = _.gc(Uo)) {
                        g = b = 0;
                        d = _.I(d);
                        for (h = d.next(); !h.done; h = d.next())
                            if (h = h.value, Array.isArray(h)) {
                                var k = _.I(h), l = k.next().value;
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
                            if (a = _.Ll(a), e && !pB(hd(e, a)) && e.parentElement && !pB(hd(e.parentElement, a)))
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
                }, rB = function (a, b, c) {
                    if (!Rv(b, a)) {
                        var d = fd(b, a);
                        if (d) {
                            var e = c.O;
                            c = c.P[b.j];
                            var f = qB(a, b, c);
                            if (_.v(Vo) || _.v(Oo)) {
                                if (_.v(Vo) && Array.isArray(f)) {
                                    var g = _.I(f);
                                    f = g.next().value;
                                    g = g.next().value;
                                    d.style.minWidth || (d.style.minWidth = f + 'px');
                                    d.style.minHeight || (d.style.minHeight = g + 'px');
                                }
                                _.v(Oo) && mB(a, d, Wv(b), uv(e, c), [
                                    0,
                                    0
                                ]);
                            } else
                                mB(a, d, Wv(b), uv(e, c), f), _.v(Ro) && Array.isArray(f) && (b = _.I(f), a = b.next().value, b = b.next().value, lB(d, a, b));
                        }
                    }
                }, pB = function (a) {
                    return !!a && ('sticky' === a.position || 'fixed' === a.position);
                };
            var sB = 0;
            var pg = new C.WeakMap(), ng = function (a, b) {
                    a = [a];
                    for (var c = b.length - 1; 0 <= c; --c)
                        a.push(typeof b[c], b[c]);
                    return a.join('\x0B');
                };
            var tB = rg(function (a) {
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
                    for (var b, c = {}, d = _.I(M(a, Jf, 9)), e = d.next(); !e.done; e = d.next())
                        e = e.value, c[(0, J.M)(Kf(e))] = K(e, 2);
                    a = K(a, 8);
                    a.length && (null !== (b = c.excl_cat) && void 0 !== b ? b : c.excl_cat = a);
                    return c;
                }, vB = function (a) {
                    var b = !1, c = M(a, Jf, 2).map(function (d) {
                            var e = (0, J.M)(Kf(d));
                            b = 'excl_cat' === e;
                            d = K(d, 2);
                            return encodeURIComponent(e) + '=' + encodeURIComponent(d.join());
                        });
                    a = K(a, 3);
                    !b && a.length && c.push(encodeURIComponent('excl_cat') + '=' + encodeURIComponent(a.join()));
                    return c;
                }, wB = function (a) {
                    var b;
                    if (null === (b = a.location) || void 0 === b ? 0 : b.ancestorOrigins)
                        return a.location.ancestorOrigins.length;
                    var c = 0;
                    Xl(function () {
                        c++;
                        return !1;
                    }, !0, !0, a);
                    return c;
                }, xB = function (a, b, c, d, e, f, g, h, k) {
                    this.Y = a;
                    this.o = b;
                    this.T = c;
                    this.l = d;
                    this.model = e;
                    this.ea = f;
                    this.N = g;
                    this.B = h;
                    this.C = void 0 === k ? !1 : k;
                    this.G = [];
                    this.j = '';
                    this.m = [];
                    this.A = [];
                    this.J = new C.Set(Bg(pp));
                }, AB = function (a) {
                    var b = void 0 === b ? window : b;
                    if (0 === a.Y.length)
                        return '';
                    yB(a, a.Y, b);
                    var c, d;
                    b = null !== (d = null === (c = ag(a.N.O)) || void 0 === c ? void 0 : y(c, 9)) && void 0 !== d && d || !y(a.ea, 5) ? 'https://pagead2.googlesyndication.com/gampad/ads?' : '' + _.bc(247) + '/gampad/ads?';
                    a.j = b;
                    c = a.G;
                    if (_.v(ro))
                        for (d = Math.random, b = c.length - 1; 0 < b; b--) {
                            var e = Math.floor(d() * (b + 1)), f = c[b];
                            c[b] = c[e];
                            c[e] = f;
                        }
                    c = _.I(c);
                    for (b = c.next(); !b.done; b = c.next())
                        if (d = a, b = b.value, e = zB(b))
                            '?' !== d.j[d.j.length - 1] && (d.j += '&'), d.j += b.ce + '=' + e;
                    return a.j;
                }, BB = function (a, b) {
                    try {
                        var c = b.top;
                        var d = Is(c.document, c);
                    } catch (e) {
                        d = new _.ld(-12245933, -12245933);
                    }
                    Z(a, 'scr_x', Math.round(d.x), { ia: !0 });
                    Z(a, 'scr_y', Math.round(d.y), { ia: !0 });
                }, CB = function (a) {
                    var b = window, c = (y(a.ea, 5) && Ec(b) ? b.document.cookie : null) || '';
                    var d = b.document.domain;
                    var e = b.history.length, f = b.screen, g = b.document.referrer;
                    if (Xm())
                        d = vn().gaGlobal || {};
                    else {
                        var h = Math.round(new Date().getTime() / 1000), k = b.google_analytics_domain_name;
                        d = 'undefined' == typeof k ? Mx('auto', d) : Mx(k, d);
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
                                l = Kx.appName;
                                var t = Kx.version, w = Kx.language ? Kx.language : Kx.browserLanguage, E = Kx.platform, H = Kx.userAgent;
                                try {
                                    var G = Kx.javaEnabled();
                                } catch (aa) {
                                    G = !1;
                                }
                                G = [
                                    l,
                                    t,
                                    w,
                                    E,
                                    H,
                                    G ? 1 : 0
                                ].join('');
                                f ? G += f.width + 'x' + f.height + f.colorDepth : _.F.java && _.F.java.awt && (f = _.F.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), G += f.screen.width + 'x' + f.screen.height);
                                G = G + c + (g || '');
                                for (g = G.length; 0 < e;)
                                    G += e-- ^ g++;
                                n.vid = (m ^ Lx(G) & 2147483647) + '.' + h;
                            }
                            n.from_cookie = !1;
                        }
                        if (!n.cid) {
                            b:
                                for (h = 999, k && (k = 0 == k.indexOf('.') ? k.substr(1) : k, h = k.split('.').length), k = 999, c = c.split(';'), g = 0; g < c.length; g++)
                                    if (f = Nx.exec(c[g]) || Ox.exec(c[g]) || Px.exec(c[g])) {
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
                    var d, e = c.document, f = a.N, g = f.O;
                    f = f.P;
                    var h = (_.v(qo) ? a.T : a.model).F;
                    Z(a, 'gdfp_req', 1, { da: !1 });
                    Z(a, 'pvsid', h);
                    Z(a, 'correlator', K(g, 26));
                    var k = _.v(so) ? a.B : a.model.m;
                    Z(a, 'output', k, { da: !1 });
                    _.v(wo) ? EB(a, 'wbn' === k ? new C.Map([
                        [
                            'wbsu',
                            { value: qj((0, J.M)(a.model.j)).replace(/^urn:uuid:/, '') }
                        ],
                        [
                            'callback',
                            { value: a.model.o }
                        ]
                    ]) : new C.Map()) : 'wbn' === k && (Z(a, 'wbsu', qj((0, J.M)(a.model.j)).replace(/^urn:uuid:/, '')), Z(a, 'callback', a.model.o));
                    Z(a, 'impl', y(g, 6) || _.v(co) ? 'fifs' : 'fif', { da: !1 });
                    EB(a, $f({
                        sd: sf(g, 24, 0),
                        Bb: a.model.Bb,
                        Tb: a.model.Tb,
                        Nb: a.model.Nb
                    }));
                    EB(a, gg(g, a.model));
                    _.v(uo) ? EB(a, new C.Map([
                        [
                            'eid',
                            { value: a.model.C }
                        ],
                        [
                            'debug_experiment_id',
                            { value: cq().split(',') }
                        ]
                    ])) : FB(a);
                    GB(a);
                    Z(a, 'ptt', 17);
                    _.v(to) ? EB(a, new C.Map([[
                            'co',
                            {
                                value: 0 !== sf(g, 24, 0) ? sf(g, 24, 0) : null,
                                options: { ia: !0 }
                            }
                        ]])) : HB(a);
                    _.v(vo) ? EB(a, cg(g, a.ea)) : IB(a);
                    Z(a, 'sc', _.bc(6) ? 1 : 0, { ia: !0 });
                    window.postMessage && Z(a, 'sfv', iv());
                    Z(a, 'ecs', a.N.Vb);
                    JB(a, b, e);
                    KB(a);
                    LB(a, b);
                    MB(a, b);
                    NB(a, c);
                    Rb('google_preview') && Z(a, 'gct', Qb('google_preview'));
                    EB(a, bf(c));
                    _.v(uo) ? EB(a, new C.Map([[
                            'expflags',
                            { value: _.bc(253) ? Dq(ko) || null : null }
                        ]])) : _.bc(253) && (g = Dq(ko)) && Z(a, 'expflags', g);
                    OB(a, b, c);
                    g = {};
                    g.u_tz = -new Date().getTimezoneOffset();
                    g.u_his = xn();
                    g.u_java = !!tl.navigator && 'unknown' !== typeof tl.navigator.javaEnabled && !!tl.navigator.javaEnabled && tl.navigator.javaEnabled();
                    tl.screen && (g.u_h = tl.screen.height, g.u_w = tl.screen.width, g.u_ah = tl.screen.availHeight, g.u_aw = tl.screen.availWidth, g.u_cd = tl.screen.colorDepth);
                    tl.navigator && tl.navigator.plugins && (g.u_nplug = tl.navigator.plugins.length);
                    tl.navigator && tl.navigator.mimeTypes && (g.u_nmime = tl.navigator.mimeTypes.length);
                    _.ec(g, function (m, n) {
                        Z(a, n, m, { da: !1 });
                    });
                    PB(a);
                    try {
                        var l = Bn();
                    } catch (m) {
                        l = '0';
                    }
                    Z(a, 'flash', l, {
                        da: !1,
                        ia: !0
                    });
                    QB(a, b, c);
                    (_.v(Rp) || Nb.L().j) && Z(a, 'rumc', h, { da: !1 });
                    _.v(Ho) && Z(a, 'rume', 1, { da: !1 });
                    Z(a, 'vis', _.xt(e), { da: !1 });
                    0 === tB(_.bc(172)) || Z(a, 'stss', tB(_.bc(172)));
                    (null === (d = _.F.navigator) || void 0 === d ? 0 : d.deviceMemory) && Z(a, 'dmc', _.F.navigator.deviceMemory);
                    BB(a, c);
                    RB(a, b, c);
                    EB(a, mg(b, f, c));
                    0 < a.model.G.length && Z(a, 'psts', a.model.G);
                    CB(a);
                    DB(a, c);
                    _.v(Vn) && (Z(a, 'js', Gy(c)), Z(a, 'ms', Hy(h.toString(), c)));
                    SB(a, c, b);
                    TB(a, b, c);
                    UB(a);
                    VB(a);
                    WB(a);
                    XB(a);
                    YB(a);
                    Z(a, 'cbidsp', qf(b, a.N.P));
                }, UB = function (a) {
                    var b = a.model.J;
                    b && (Z(a, 'floc_id', b.id), Z(a, 'floc_ver', b.version));
                }, VB = function (a) {
                    _.v(yp) && 'runAdAuction' in navigator && 'joinAdInterestGroup' in navigator && Z(a, 'td', 1);
                }, WB = function (a) {
                    var b = _.bc(251);
                    b && Z(a, 'uach', Nk(b, 3));
                }, XB = function (a) {
                    var b = IA();
                    (null === b || void 0 === b ? 0 : b.length) && Z(a, 'tt_state', Nk(JSON.stringify(b), 3));
                }, RB = function (a, b, c) {
                    var d, e = a.N.P, f = [], g = [];
                    b = _.I(b);
                    for (var h = b.next(); !h.done; h = b.next()) {
                        var k = h.value;
                        h = fd(k);
                        h = Bm((null === h || void 0 === h ? void 0 : h.parentElement) && hd(h.parentElement, c) || null);
                        if (!h || 1 === h[0] && 1 === h[3]) {
                            var l = fd(k), m = null !== (d = null === l || void 0 === l ? void 0 : l.parentElement) && void 0 !== d ? d : null;
                            h = Mv(m) || new _.Cl(0, 0);
                            uB(h, m, c);
                            m = Mv(fd(k)) || new _.Cl(0, 0);
                            uB(m, l, c, 1);
                            -1 === h.height && (m.height = -1);
                            _.v(To) && (l = _.I(rv(e[k.j])), k = l.next().value, l = l.next().value, 0 <= h.height && (h.width = Math.max(h.width, k), h.height = Math.max(h.height, l)), 0 <= m.height && (m.width = Math.max(m.width, k), m.height = Math.max(m.height, l)));
                            f.push(h.width + 'x' + h.height);
                            g.push(m.width + 'x' + m.height);
                        } else
                            f.push('-1x-1'), g.push('-1x-1');
                    }
                    Z(a, 'psz', f, { ua: '|' });
                    Z(a, 'msz', g, { ua: '|' });
                }, SB = function (a, b, c) {
                    var d = 0 !== Ad(), e = Js(!0, b, d).width, f = [], g = [], h = [];
                    if (null !== b && b != b.top) {
                        var k = Js(!1, b).width;
                        (-12245933 === e || -12245933 === k || k < e) && h.push(8);
                    }
                    -12245933 !== e && (1.5 * e < b.document.documentElement.scrollWidth ? h.push(10) : d && 1.5 * b.outerWidth < e && h.push(10));
                    c = _.I(c);
                    for (k = c.next(); !k.done; k = c.next()) {
                        d = new gu();
                        var l = fd(k.value);
                        k = 0;
                        var m = !1, n = !1;
                        if (l)
                            for (var p = 0; l && 100 > p; p++, l = l.parentElement) {
                                var t = hd(l, b);
                                if (t) {
                                    if ('visible' !== t.overflowY) {
                                        d.set(2);
                                        var w = Mv(l);
                                        w && (k = k ? Math.min(k, w.width) : w.width);
                                        if (d.get(9))
                                            break;
                                    }
                                    pB(t) && d.set(9);
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
                        m = _.I(h);
                        for (n = m.next(); !n.done; n = m.next())
                            d.set(n.value);
                        f.push(hu(d));
                        g.push(k);
                    }
                    Z(a, 'fws', f);
                    Z(a, 'ohw', g);
                }, TB = function (a, b, c) {
                    try {
                        var d = Is(c.top.document, c.top).y;
                        Z(a, 'btvi', b.map(function (e) {
                            var f, g = a.N, h = g.P[e.j];
                            g = uv(g.O, h);
                            e = null === (f = Sv(e, h, c.document, g)) || void 0 === f ? void 0 : f.y;
                            h = Js(!0, c).height;
                            return void 0 === e || -12245933 === e || -12245933 === h ? -1 : e < d + h ? 0 : ++ZB;
                        }), {
                            ia: !0,
                            ua: '|'
                        });
                    } catch (e) {
                    }
                }, $B = function (a, b) {
                    var c = a.N, d = c.O, e = c.P;
                    return _.v(bo) ? b.map(function (f) {
                        return sv(e[f.j], null);
                    }).join(',') : a.o ? b.map(function (f) {
                        var g = e[f.j];
                        g = _.v(co) ? su(a.T, f) || sv(g, y(d, 6) || y(g, 17) ? null : fd(f)) : sv(g);
                        if (f = a.T.j.get(f))
                            f.Ia = g;
                        return g;
                    }).join(',') : b.map(function (f) {
                        var g = a.N.P[f.j];
                        g = su(a.T, f) || sv(g, y(a.N.O, 6) || y(g, 17) ? null : fd(f));
                        if (f = a.T.j.get(f))
                            f.Ia = g;
                        return g;
                    }).join(',');
                }, QB = function (a, b, c) {
                    c = void 0 === c ? window : c;
                    var d = c.document;
                    b = (_.v(co) ? y(a.N.O, 6) : a.o) ? Iv(a.N.O) : Jv(a.N.P[b[0].j]) || Iv(a.N.O);
                    var e = Rb('google_preview'), f = e ? Pb(d.URL) : d.URL;
                    e = e ? Pb(d.referrer) : d.referrer;
                    d = !1;
                    if (null != b) {
                        var g = f;
                        Ls(c) || (e = '', d = !_.v(qp) || !a.T.hb);
                    } else
                        b = f;
                    f = wB(c);
                    Z(a, 'nhd', f || null);
                    Z(a, 'url', b);
                    var h = b, k = _.bc(252) || {};
                    k.url = h;
                    _.O(Gq)[252] = k;
                    null != g && g !== b && Z(a, 'loc', g);
                    Z(a, 'ref', e);
                    f && (g = a.T.hb, g = void 0 === g ? '' : g, b = We(c.top) && c.top.location && c.top.location.href || '', e = c.location && c.location.ancestorOrigins || null, (c = b || g || Qm(c) || e && e[e.length - 1] || '') && Z(a, 'top', d ? Tl(c.match(_.Sl)[3] || null) : c));
                    Z(a, 'scar', a.model.A);
                }, GB = function (a) {
                    var b = Sb();
                    Z(a, 'vrg', b);
                }, LB = function (a, b) {
                    var c = a.N.P, d = b = b.map(function (e) {
                            return tg(c[e.j]).join('&');
                        });
                    d.join('|').length === b.length - 1 && (d = null);
                    Z(a, 'prev_scp', d, { ua: '|' });
                }, HB = function (a) {
                    var b = a.N.O;
                    0 !== sf(b, 24, 0) && Z(a, 'co', sf(b, 24, 0), { ia: !0 });
                }, IB = function (a) {
                    var b = ag(a.N.O) || new bg();
                    !0 === y(b, 1) && Z(a, 'rdp', '1');
                    !0 === y(b, 9) && Z(a, 'ltd', '1');
                    var c = K(a.ea, 2);
                    c && Z(a, 'gdpr_consent', c);
                    Ff(a.ea, 3) && (c = y(a.ea, 3), Z(a, 'gdpr', c ? '1' : '0', { ia: !0 }));
                    (c = K(a.ea, 4)) && Z(a, 'addtl_consent', c);
                    (c = K(a.ea, 7)) && Z(a, 'tcfe', c);
                    (c = K(a.ea, 1)) && Z(a, 'us_privacy', c);
                    (y(a.ea, 6) || y(b, 8)) && Z(a, 'npa', 1);
                    c = sf(b, 6, 2);
                    2 !== c && Z(a, 'tfua', c, { ia: !0 });
                    Ff(b, 5) && (b = K(b, 5), Z(a, 'tfcd', b, { ia: !0 }));
                }, KB = function (a) {
                    var b = a.N.O;
                    1 !== sf(b, 24, 0) && Ff(b, 16) && Z(a, 'ppid', K(b, 16), { ia: !0 });
                }, MB = function (a, b) {
                    var c = a.N, d = c.O, e = 1 !== a.model.Ea;
                    c = !!y(c.P[b[0].j], 17);
                    b = Kv(b, a.N);
                    d = y(d, 27) || !1;
                    var f = 3 === a.model.Ea, g = new gu();
                    g.set(0, e);
                    g.set(1, c);
                    g.set(2, b);
                    g.set(3, d);
                    g.set(4, f);
                    e = hu(g);
                    0 < e && Z(a, 'eri', e);
                }, NB = function (a, b) {
                    var c = a.N.O, d = vB(c);
                    Z(a, 'cust_params', d, { ua: '&' });
                    if (_.v(to)) {
                        var e = a.l, f = a.ea;
                        var g = void 0 === g ? window : g;
                        0 === sf(c, 24, 0) && e ? (b = null === e || void 0 === e ? void 0 : ot(e, f), d = C.Map, e = [
                            'cookie_enabled',
                            {
                                value: !b && (null === e || void 0 === e ? 0 : pt(e, f)) ? '1' : null,
                                options: { ia: !0 }
                            }
                        ], f = g.document, g = (Iv(c) || Ug(g)) === f.URL ? '' : f.domain, g = new d([
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
                        ])) : g = new C.Map();
                        EB(a, g);
                    } else
                        0 === sf(c, 24, 0) && (a.l && (g = ot(a.l, a.ea), Z(a, 'cookie', g, { ia: !0 }), !g && pt(a.l, a.ea) && Z(a, 'cookie_enabled', '1', { ia: !0 })), g = b.document, (g = (Iv(a.N.O) || Ug(b)) === g.URL ? '' : g.domain) && Z(a, 'cdm', g));
                    (c = K(c, 8)) ? (50 < c.length && (c = c.substring(0, 50)), c = 'a ' + Nk('role:1 producer:12 loc:"' + (c + '"'))) : c = '';
                    c && Z(a, 'uule', c);
                    c = new gu();
                    _.F.SVGElement && _.F.document.createElementNS && c.set(0);
                    g = om();
                    g['allow-top-navigation-by-user-activation'] && c.set(1);
                    g['allow-popups-to-escape-sandbox'] && c.set(2);
                    _.F.crypto && _.F.crypto.subtle && c.set(3);
                    _.F.TextDecoder && _.F.TextEncoder && c.set(4);
                    c = hu(c);
                    Z(a, 'bc', c);
                }, aC = function (a, b) {
                    var c = a.N, d = c.P, e = new C.Map();
                    c = _.I(M(c.O, Jf, 14));
                    for (var f = c.next(); !f.done; f = c.next()) {
                        var g = f.value;
                        e.set((0, J.M)(Kf(g)), [K(g, 2)[0]]);
                    }
                    for (c = 0; c < b.length; c++) {
                        g = d[b[c].j];
                        if (!g)
                            return;
                        g = _.I(M(g, Jf, 3));
                        for (f = g.next(); !f.done; f = g.next()) {
                            var h = f.value;
                            f = (0, J.M)(Kf(h));
                            var k = e.get(f) || [];
                            h = K(h, 2)[0];
                            1 === b.length ? k[0] = h : h !== k[0] && (k[c + 1] = h);
                            e.set(f, k);
                        }
                    }
                    b = [];
                    d = _.I(_.u(e, 'keys').call(e));
                    for (c = d.next(); !c.done; c = d.next())
                        if (g = c.value, c = uu()[g])
                            g = e.get(g), 1 < g.length ? (g = g.map(function (l) {
                                return encodeURIComponent(l || '');
                            }).join(), b.push(c + ',' + g)) : 1 === g.length && 'url' !== c && Z(a, c, g[0]);
                    b.length && Z(a, 'sps', b.join('|'));
                }, OB = function (a, b, c) {
                    var d, e = c.document;
                    if (!Iv(a.N.O)) {
                        try {
                            var f = Math.round(Date.parse(c.document.lastModified) / 1000) || null;
                        } catch (t) {
                            f = null;
                        }
                        Z(a, 'lmt', f ? f.toString() : null);
                    }
                    Z(a, 'dt', new Date().getTime(), { da: !1 });
                    try {
                        f = sB;
                        var g = Math.min(dq('domLoading') || Infinity, dq('domInteractive') || Infinity);
                        var h = Infinity == g ? Math.max(dq('responseEnd'), dq('navigationStart')) : g;
                        0 < h && f >= h && (Z(a, 'dlt', h, { da: !1 }), Z(a, 'idt', f - h, { da: !1 }));
                    } catch (t) {
                        Z(a, 'idt', -9, { da: !1 }), t instanceof Error && Zb(479, t);
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
                        g = Ms(c, c.document, 500, 300);
                        bC = h && !g;
                    }
                    bC || Z(a, 'ea', '0', { ia: !0 });
                    h = c.document;
                    g = Ks(vn()).H;
                    g = Ns(g);
                    h = Ms(vn(), h, c.google_ad_width, c.google_ad_height);
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
                    if (h = Js(!0, c))
                        a.N.Ua = h, Z(a, 'biw', h.width), Z(a, 'bih', h.height);
                    !Ls(c) && (h = Js(!1, c)) && (Z(a, 'isw', h.width), Z(a, 'ish', h.height));
                    a.model.l && Z(a, 'oid', a.model.l);
                    h = [];
                    g = [];
                    k = a.N;
                    f = k.O;
                    k = k.P;
                    n = _.I(b);
                    for (m = n.next(); !m.done; m = n.next()) {
                        m = m.value;
                        l = k[m.j];
                        var p = uv(f, l);
                        m = Sv(m, l, e, p);
                        a.o && (m = m || cC);
                        m && (h.push(Math.round(m.x)), g.push(Math.round(m.y)));
                        if (!a.o)
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
                    e = yn(c);
                    a.C ? Z(a, 'ifi', e) : (Z(a, 'ifi', e + 1), e = c, b = b.length, b = void 0 === b ? 1 : b, e = Ym(Xm(e)) || e, e.google_unique_id = (e.google_unique_id || 0) + b);
                    null !== c && c != c.top ? (b = [c.document.URL], c.name && b.push(c.name), c = Js(!1, c, !1), b.push(c.width.toString()), b.push(c.height.toString()), c = dm(b.join(''))) : c = 0;
                    0 !== c && Z(a, 'ifk', c.toString());
                }, PB = function (a) {
                    var b = _.F.devicePixelRatio;
                    (b = 'number' === typeof b ? +b.toFixed(3) : null) && Z(a, 'u_sd', b, { da: !1 });
                }, FB = function (a) {
                    Z(a, 'eid', a.model.C);
                    var b = cq().split(',');
                    b && Z(a, 'debug_experiment_id', b);
                }, JB = function (a, b, c) {
                    for (var d = _.I(b), e = d.next(); !e.done; e = d.next())
                        eC(a, e.value.getAdUnitPath());
                    d = a.N;
                    var f = d.O, g = d.P;
                    d = b.map(function (k) {
                        return g[k.j];
                    });
                    Z(a, 'iu_parts', a.m);
                    Z(a, 'enc_prev_ius', a.A);
                    Z(a, 'prev_iu_szs', d.map(function (k) {
                        return qv(k);
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
                    EB(a, fg(a.T, b, a.C));
                    fC(a, g[b[0].j]);
                    EB(a, Xf(b, g, c));
                    EB(a, Yf(d));
                    b = {};
                    c = _.I(d);
                    for (d = c.next(); !d.done; d = c.next())
                        (d = K(d.value, 7)) && (b[d] = (b[d] || 0) + 1);
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
                }, fC = function (a, b) {
                    (_.v(co) ? y(a.N.O, 6) : a.o) || !K(b, 7) || Z(a, 'click', K(b, 7));
                }, gC = function (a, b) {
                    for (var c = 0; c < b.length; c++)
                        if ('' !== b[c]) {
                            for (var d = !1, e = 0; e < a.m.length; e++)
                                if (b[c] === a.m[e]) {
                                    d = !0;
                                    break;
                                }
                            d || a.m.push(b[c]);
                        }
                }, hC = function (a, b) {
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
                }, eC = function (a, b) {
                    var c = '';
                    '' !== b && (b = b.split('/').map(function (d) {
                        return d.replace(/,/g, ':');
                    }), gC(a, b), c = hC(a, b));
                    a.A.push(c);
                }, dC = function (a, b) {
                    var c;
                    b = null !== (c = b.map(function (d) {
                        return bB(a.model, d);
                    })) && void 0 !== c ? c : [];
                    Z(a, 'ucis', b, { ua: '|' });
                }, YB = function (a) {
                    if (!_.v(Dp)) {
                        var b = Dc(a.ea, window);
                        if (b) {
                            var c = new Tw();
                            var d = _.gc(Gp), e = [], f = /^_GESPSK-(.+)$/;
                            try {
                                for (var g = 0; g < b.length; g++) {
                                    var h = (f.exec(b.key(g)) || [])[1];
                                    h && e.push(h);
                                }
                            } catch (k) {
                            }
                            e = _.I(e);
                            for (f = e.next(); !f.done; f = e.next())
                                if (f = f.value, g = ve().get(f, b), g.getError())
                                    $d(g.getError(), f, g.errorMessage);
                                else if (g = g.Xb)
                                    if (h = we(g), 0 === h || 1 === h)
                                        h = K(g, 2), 0 <= d && h && h.length > d ? $d(12, f) : (Nf(c, 2, g, Xw), $d(19, f));
                            M(c, Xw, 2).length ? (b = new Of(), d = M(c, Uw, 1), 0 < d.length && Yk(b, 1, d, Ww), d = M(c, Xw, 2), 0 < d.length && Yk(b, 2, d, Yw), c = Qf(b), c = Ka(c, 2)) : c = null;
                        } else
                            c = null;
                        Z(a, 'a3p', c);
                    }
                }, Z = function (a, b, c, d) {
                    d = void 0 === d ? {} : d;
                    a.J.has(b) || null == c || a.G.push({
                        ce: b,
                        value: c,
                        options: d
                    });
                }, EB = function (a, b) {
                    b = _.I(_.u(b, 'entries').call(b));
                    for (var c = b.next(); !c.done; c = b.next()) {
                        var d = _.I(c.value);
                        c = d.next().value;
                        d = d.next().value;
                        Z(a, c, d.value, d.options);
                    }
                }, zB = function (a) {
                    var b = a.value, c = a.options, d = void 0 === c.da ? !0 : c.da;
                    a = void 0 === c.ua ? ',' : c.ua;
                    c = void 0 === c.ia ? !1 : c.ia;
                    return 'object' !== typeof b ? null == b || !c && 0 === b ? null : iC(b, d) : Array.isArray(b) && b.length ? b.map(function (e) {
                        return iC(e, d);
                    }).join(iC(a, d)) : null;
                }, cC = new _.ld(-9, -9), ZB = 0, bC = null, iC = function (a, b) {
                    a = a.toString();
                    return b ? encodeURIComponent(a) : a;
                };
            var lC = function (a) {
                    var b = this;
                    this.j = new C.Map();
                    this.m = new C.Map();
                    this.zc = Nb.L();
                    if (window.performance && af(window.performance.now)) {
                        var c = sc(334, function () {
                            for (var d = _.I(b.j), e = d.next(); !e.done; e = d.next()) {
                                var f = _.I(e.value);
                                e = f.next().value;
                                f = f.next().value;
                                jC(b, e, f) && b.j.delete(e);
                            }
                        });
                        _.Hd(window, 'DOMContentLoaded', c);
                        Yq(a, er, function (d) {
                            var e = d.detail;
                            d = e.xc;
                            e = e.P;
                            return void kC(b, (0, J.M)(hw(_.O(Ph), d)), (0, J.M)(K(e, 20)));
                        });
                        Yq(a, fr, function (d) {
                            var e = d.detail;
                            d = e.xc;
                            e = e.P;
                            d = (0, J.M)(hw(_.O(Ph), d));
                            e = (0, J.M)(K(e, 20));
                            var f = b.m.get(d);
                            null != f ? yA(f, e) : kC(b, d, e);
                        });
                    }
                }, kC = function (a, b, c) {
                    jC(a, b, c) ? a.j.delete(b) : (a.j.set(b, c), _.Xg(b, function () {
                        a.j.delete(b);
                    }));
                }, jC = function (a, b, c) {
                    var d = fd(b);
                    if (d && 'DIV' === d.nodeName) {
                        var e = _.v(Rp);
                        d = new wA({
                            H: window,
                            zc: a.zc,
                            fb: d,
                            va: function (f) {
                                Zb(336, f, 1);
                            },
                            qe: e
                        });
                        if (d.m)
                            return yA(d, c), a.m.set(b, d), mu(ju.L(), b, function () {
                                return void a.m.delete(b);
                            }), !0;
                    }
                    return !1;
                };
            var mC = function (a, b, c) {
                    for (var d = 100; a && a != b && --d;)
                        _.xm(a, c), a = a.parentElement;
                }, nC = function (a, b, c, d, e) {
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
                }, pC = function (a, b, c, d, e, f, g, h) {
                    var k = qv(c);
                    c = sc(459, function () {
                        return oC(a, b, d, e, f, k, g, h);
                    });
                    _.F.setTimeout(c, 500);
                }, oC = function (a, b, c, d, e, f, g, h) {
                    if (_.F.IntersectionObserver) {
                        var k = null, l = Zv(b, a) || fd(b, a), m = sc(459, function (n) {
                                if (n = n && n[0]) {
                                    var p = n.boundingClientRect, t = window.innerWidth, w = Math.round(p.left), E = Math.round(p.right), H = 0 > w + 2, G = 0 < E - (t + 2);
                                    if (n.intersectionRatio >= 1 - ((0 <= Math.round(p.left) ? 0 : 2) + (Math.round(p.right) <= window.innerWidth ? 0 : 2)) / d || H || G)
                                        uc(g, function (Q) {
                                            if (H || G) {
                                                var aa = new gu();
                                                aa.set(8);
                                                qC(l) && aa.set(10);
                                                aa = hu(aa);
                                            } else
                                                aa = rC(a, b);
                                            var da = sC(b, l, e), va = da.Rd;
                                            da = da.Td;
                                            dc(Q);
                                            r(Q, 'qid', h);
                                            r(Q, 'iu', b.getAdUnitPath());
                                            r(Q, 'e', String(aa));
                                            H && r(Q, 'ofl', String(w));
                                            G && r(Q, 'ofr', String(E - t));
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
                }, rC = function (a, b) {
                    var c = Zv(b, a) || fd(b, a), d = new gu();
                    try {
                        var e = function (aa, da) {
                                return a.elementsFromPoint(aa, da);
                            }, f = c.getBoundingClientRect(), g = f.left, h = f.top, k = f.width, l = f.height, m = fd(b, a), n = hd(m, window);
                        if ('hidden' == n.visibility || 'none' == n.display)
                            return hu(d);
                        var p = parseInt(n['border-top-width'] || 0, 10) + 1;
                        b = g + k;
                        l = h + l;
                        var t = e(g + p + 2, h + p);
                        var w = e(b - p - 2, h + p);
                        var E = e(b - p - 2, l - p);
                        var H = e(g + p + 2, l - p);
                        var G = e(b / 2, l - p);
                    } catch (aa) {
                        return d.set(1), hu(d);
                    }
                    if (!(t && t.length && w && w.length && E && E.length && H && H.length && G && G.length))
                        return d.set(7), hu(d);
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
                    g = E[0];
                    c == g || Q(c, g) || zm(g) || d.set(4);
                    g = H[0];
                    c == g || Q(c, g) || zm(g) || d.set(5);
                    if (zm(c))
                        return hu(d);
                    e(t, 12);
                    e(w, 13);
                    e(E, 14);
                    e(H, 15);
                    e(G, 6);
                    return hu(d);
                }, qC = function (a) {
                    var b = !1, c = !1;
                    return ym(a, function (d) {
                        c = c || 'scroll' == d.overflowX || 'auto' == d.overflowX;
                        return (b = b || 'flex' == d.display) && c;
                    });
                }, sC = function (a, b, c) {
                    var d = (a = fd(a)) && hd(a, window), e = d ? 'absolute' != d.position : !0, f = !1, g = a && a.parentElement, h = !1;
                    Rf(b, function (k) {
                        var l = k.style;
                        if (e)
                            if (h || (h = k == g))
                                e = qy(k, _.F, !0, -1, -1);
                            else {
                                l = l && l.height;
                                var m = (l && _.u(l, 'endsWith').call(l, 'px') ? parseInt(l, 10) : 0) >= c;
                                !l || m || 'string' === typeof l && _.u(ny, 'includes').call(ny, l) || (e = !1);
                            }
                        f || (k = hd(k, _.F), 'sticky' != k.position && 'fixed' != k.position) || (f = !0);
                        return !(f && !e);
                    }, 100);
                    return {
                        Rd: e,
                        Td: f
                    };
                }, tC = function (a, b, c) {
                    (L = id(b), _.u(L, 'includes')).call(L, 'fluid') && setTimeout(function () {
                        uc('gpt_fluid_sz', function (d) {
                            var e = Zv(a, document);
                            e = e ? un(e) : null;
                            r(d, 'sz', e ? e.width + 'x' + e.height : 'null');
                            r(d, 'qqid', c);
                        });
                    }, 250);
                };
            var uC = new C.Map([[
                        2,
                        { ae: 'page_level_ads' }
                    ]]), vC = function () {
                }, yC;
            vC.L = function () {
                throw Error('Must be overridden');
            };
            _.wC = function (a) {
                this.j = a = void 0 === a ? uC : a;
                this.m = new C.Map();
                this.loaded = new C.Set();
                this.o = null;
            };
            _.P(_.wC, vC);
            _.xC = function (a, b) {
                b = b.module;
                a.m.has(b) || a.m.set(b, new Ge());
                return (0, J.M)(a.m.get(b));
            };
            yC = function (a, b) {
                var c = b.module;
                b = '_gpt_js_load_' + c + '_';
                var d = sc(340, function (e) {
                    if (a.j.has(c) && 'function' === typeof e) {
                        var f = (0, J.M)(a.j.get(c));
                        f = (void 0 === f.td ? [] : f.td).map(function (g) {
                            return _.xC(a, g).promise;
                        });
                        C.Promise.all(f).then(function () {
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
            _.wC.prototype.load = function (a) {
                var b, c = _.xC(this, a), d = (null !== (b = this.j.get(a.module)) && void 0 !== b ? b : {}).ae;
                if (!d)
                    throw Error('cannot load invalid module: ' + d);
                if (!this.loaded.has(a.module)) {
                    var e = _.bc(172);
                    e = e && 'pagead2.googlesyndication.com' === Tl((e.src || '').match(_.Sl)[3] || null);
                    var f = (0, J.M)(this.o);
                    d = rj(kb(e ? f.nd(d) : f.od(d)).toString());
                    d = (e = _.gc(kp)) ? tj(d, { cb: e }) : d;
                    yC(this, a);
                    Yl(document, d);
                    this.loaded.add(a.module);
                }
                return c.promise;
            };
            Pi(_.wC);
            var zC = function (a, b, c, d, e, f, g, h) {
                Y.call(this, 682);
                this.T = a;
                this.format = b;
                this.slotId = c;
                this.H = d;
                this.D = Nt(this);
                this.l = W(this, e);
                this.A = V(this, f);
                this.F = V(this, g);
                this.B = W(this, h);
            };
            _.P(zC, Y);
            zC.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f, g, h, k, l, m, n, p;
                    return A(b, function (t) {
                        d = c;
                        if (2 !== c.format && 3 !== c.format || !Jt(c.l) || !kl(c.l.value, 12, !1))
                            return t.return();
                        e = (0, J.M)(c.B.value);
                        f = e.Fd;
                        g = _.ou(c.T, c.slotId);
                        h = c.F.value;
                        k = c.A.value;
                        _.xm(k, {
                            'max-height': '30vh',
                            overflow: 'hidden'
                        });
                        if (AC)
                            AC.yc(k);
                        else {
                            AC = new f(c.format, k, c.H, h, c.T, c.slotId);
                            l = {};
                            m = _.I(M(c.l.value, Nw, 13));
                            for (n = m.next(); !n.done; n = m.next())
                                p = n.value, l[K(p, 1)] = K(p, 2);
                            AC.Ac(l);
                            AC.xa();
                            lu(c.T, c.slotId, function () {
                                AC && (AC.za(), AC = null);
                                g && _.qu(d.T, d.slotId);
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
            var AC = null;
            var BC = function (a, b, c, d, e, f, g, h) {
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
            _.P(BC, Y);
            BC.prototype.j = function () {
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
                            h = (0, J.M)(c.F.value);
                            k = h.Md;
                            l = new _.lz();
                            m = new k(window, g, f, l, c.W, Gg(M(e, Nw, 13)), '6499' === Lb(c.slotId.getAdUnitPath()), function () {
                                return void d.za();
                            }, c.B.value);
                            _.Uq(c, m);
                            n = _.gc(Do);
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
                                return B(p, c.R, 4);
                            if (c.m)
                                return p.return();
                            m.xa();
                        }
                        p.j = 0;
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
                this.D = U(this);
                this.l = W(this, b);
                this.A = W(this, c);
            };
            _.P(EC, Y);
            EC.prototype.j = function () {
                var a;
                return z(this, function c() {
                    var d = this, e, f, g, h;
                    return A(c, function (k) {
                        if (1 == k.j) {
                            e = (2 === d.format || 3 === d.format) && !(null === (a = d.l.value) || void 0 === a || !kl(a, 12, !1));
                            f = 5 === d.format && d.A.value;
                            if (!e && !f) {
                                Gt(d.D);
                                k.j = 0;
                                return;
                            }
                            g = d.D;
                            h = g.j;
                            return B(k, _.wC.L().load(_.DC), 3);
                        }
                        h.call(g, k.m);
                        Bi(k);
                    });
                });
            };
            var FC = function (a, b, c) {
                Y.call(this, 696);
                this.slotId = a;
                this.la = b;
                Pt(this, c);
                this.l = new C.Promise(function (d) {
                    var e = [
                        'canceled',
                        'ha_before_make_visible'
                    ];
                    _.v(vh) || e.push('closed');
                    e = _.I(e);
                    for (var f = e.next(); !f.done; f = e.next())
                        Jg(a, f.value).then(d);
                });
            };
            _.P(FC, Y);
            FC.prototype.j = function () {
                return z(this, function b() {
                    var c = this;
                    return A(b, function (d) {
                        switch (d.j) {
                        case 1:
                            return B(d, c.l, 2);
                        case 2:
                            if (c.m)
                                return d.return();
                            if (_.v(vh)) {
                                d.j = 3;
                                break;
                            }
                            return B(d, c.la.dispatchEvent('rewardedSlotCanceled', 703, new rw(c.slotId, 'publisher_ads')), 3);
                        case 3:
                            return B(d, c.la.dispatchEvent('rewardedSlotClosed', 703, new sw(c.slotId, 'publisher_ads')), 5);
                        case 5:
                            c.za(), Bi(d);
                        }
                    });
                });
            };
            var GC = function (a, b, c) {
                Y.call(this, 697);
                this.slotId = a;
                this.la = b;
                this.l = Jg(a, 'completed');
                Pt(this, c);
            };
            _.P(GC, Y);
            GC.prototype.j = function () {
                return z(this, function b() {
                    var c = this;
                    return A(b, function (d) {
                        if (1 == d.j)
                            return B(d, c.l, 2);
                        if (3 != d.j)
                            return c.m ? d.return() : B(d, c.la.dispatchEvent('rewardedSlotCompleted', 704, new tw(c.slotId, 'publisher_ads')), 3);
                        c.za();
                        Bi(d);
                    });
                });
            };
            var HC = function (a, b, c) {
                Y.call(this, 694);
                this.slotId = a;
                this.la = b;
                Pt(this, c);
                this.l = Jg(a, 'granted');
            };
            _.P(HC, Y);
            HC.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e;
                    return A(b, function (f) {
                        if (1 == f.j)
                            return B(f, c.l, 2);
                        if (3 != f.j)
                            return d = f.m, e = d.payload, c.m ? f.return() : B(f, c.la.dispatchEvent('rewardedSlotGranted', 702, new qw(c.slotId, 'publisher_ads', null !== e && void 0 !== e ? e : null)), 3);
                        c.za();
                        Bi(f);
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
                    this.H = a;
                    this.F = e;
                    this.D = Nt(this);
                    this.l = V(this, b);
                    this.A = V(this, c);
                    Pt(this, d);
                    this.B = new _.tz(this.H);
                };
            _.P(JC, Y);
            JC.prototype.j = function () {
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
                    }, IC));
                    _.Xg(this, _.zz(this.H.document, this.H));
                    Ql(this.l.value).postMessage(JSON.stringify({
                        type: 'rewarded',
                        message: 'visible'
                    }), '*');
                    if (this.H === this.H.top) {
                        this.H.location.hash = 'goog_rewarded';
                        var c = new xz(this.B);
                        null == c.j && (c.j = vz(c.m));
                        _.Xg(this, function () {
                            if (null != c.j) {
                                var d = c.m;
                                delete d.j.maxZIndexRestrictions[c.j];
                                uz(d);
                                c.j = null;
                            }
                            'goog_rewarded' === a.H.location.hash && (a.H.location.hash = '');
                        });
                    }
                    this.D.notify();
                }
            };
            var KC = function (a, b, c) {
                Y.call(this, 695);
                this.H = a;
                this.l = V(this, b);
                Pt(this, c);
            };
            _.P(KC, Y);
            KC.prototype.j = function () {
                if (this.H === this.H.top)
                    var a = (0, J.M)(Ql(this.l.value)), b = vv(this, 503, this.H, 'hashchange', function (c) {
                            wj(c.oldURL, '#goog_rewarded') && (a.postMessage(JSON.stringify({
                                type: 'rewarded',
                                message: 'back_button'
                            }), '*'), b());
                        });
            };
            var LC = function (a, b, c) {
                Y.call(this, 692);
                this.slotId = a;
                this.la = b;
                this.D = Nt(this);
                this.l = V(this, c);
            };
            _.P(LC, Y);
            LC.prototype.j = function () {
                var a;
                return z(this, function c() {
                    var d = this, e, f, g, h;
                    return A(c, function (k) {
                        if (1 == k.j)
                            return e = d.l.value, f = new Ge(), g = f.promise, h = f.resolve, d.la.dispatchEvent('rewardedSlotReady', 701, new pw(d.slotId, 'publisher_ads', h, null !== (a = e.payload) && void 0 !== a ? a : null)), B(k, g, 2);
                        if (d.m)
                            return k.return();
                        d.D.notify();
                        d.za();
                        Bi(k);
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
                    this.A = U(this);
                    this.l = Nt(this);
                    this.B = V(this, b);
                    this.F = Jg(a, 'prefetched');
                    Jg(a, 'ha_before_make_visible').then(function () {
                        return void c.l.notify();
                    });
                };
            _.P(OC, Y);
            OC.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d;
                    return A(b, function (e) {
                        if (1 == e.j) {
                            if (c.l.A)
                                return e.return();
                            _.xm(c.B.value, _.u(Object, 'assign').call(Object, { position: 'absolute' }, 0 === Ad() ? NC : MC));
                            return B(e, c.F, 2);
                        }
                        d = e.m;
                        if (c.m)
                            return e.return();
                        c.A.j(d);
                        Bi(e);
                    });
                });
            };
            var PC = function (a, b, c, d, e, f) {
                Y.call(this, 688);
                if (4 === b) {
                    this.l = new le();
                    _.Uq(this, this.l);
                    var g = new OC(a, e);
                    X(this.l, g);
                    b = new LC(a, c, g.A);
                    X(this.l, b);
                    f = new JC(d, e, f, b.D, g.l);
                    X(this.l, f);
                    X(this.l, new KC(d, e, f.D));
                    X(this.l, new HC(a, c, b.D));
                    X(this.l, new FC(a, c, b.D));
                    X(this.l, new GC(a, c, b.D));
                }
            };
            _.P(PC, Y);
            PC.prototype.j = function () {
                var a;
                null === (a = this.l) || void 0 === a ? void 0 : ne(a);
            };
            var Kg = '3rd party ad content';
            var QC = function () {
                    this.j = {};
                }, RC = function (a, b, c) {
                    if (!_.v(op)) {
                        var d;
                        c && (d = '//' + c + '.safeframe.googlesyndication.com');
                        c = Xz(b, iv(), jv(), !0, d);
                        a.j[c] || (a.j[c] = 1, rh().fifWin || (b = b.document, a = b.createElement('IFRAME'), a.src = c, a.style.visibility = 'hidden', a.style.display = 'none', b = b.getElementsByTagName('script'), 0 < b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling))));
                    }
                };
            var SC = function (a, b, c) {
                Y.call(this, 706);
                this.H = a;
                this.D = U(this);
                this.l = W(this, b);
                Pt(this, c);
            };
            _.P(SC, Y);
            SC.prototype.j = function () {
                var a = this.l.value;
                this.D.m(a ? Dc(a, this.H) : null);
            };
            var TC = function (a, b, c, d, e) {
                Y.call(this, 876);
                this.K = a;
                this.A = b;
                this.l = U(this);
                this.B = W(this, c);
                this.F = W(this, d);
                this.R = W(this, e);
            };
            _.P(TC, Y);
            TC.prototype.j = function () {
                var a, b;
                return z(this, function d() {
                    var e, f = this, g, h;
                    return A(d, function (k) {
                        e = new mt();
                        g = null === (a = f.K) || void 0 === a ? void 0 : y(a, 9);
                        h = f.R.value;
                        if (null != h) {
                            var l;
                            if (l = !g) {
                                var m = void 0 === m ? !1 : m;
                                if (Ws(h))
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
                                        0 === l ? n = !1 : h.purpose && h.vendor ? (l = h.vendor.consents, (n = !(!l || !l[void 0 === n ? '755' : n])) && h.purposeOneTreatment && ('DE' === h.publisherCC || _.v(wp) && 'CH' === h.publisherCC) ? n = !0 : n && (n = h.purpose.consents, n = !(!n || !n['1']))) : n = !0;
                                    }
                                else
                                    n = !1;
                                l = n;
                            }
                            n = D(e, 5, l);
                            n = D(n, 2, h.tcString);
                            l = null !== (b = h.addtlConsent) && void 0 !== b ? b : '';
                            n = D(n, 4, l);
                            D(n, 7, h.internalErrorState);
                            null != h.gdprApplies && D(e, 3, h.gdprApplies);
                            'tcunavailable' === h.tcString ? f.A.info(us('failed')) : f.A.info(us('succeeded'));
                        } else
                            D(e, 5, !g);
                        f.F.value && D(e, 1, f.F.value);
                        null != f.B.value && D(e, 6, f.B.value);
                        f.l.j(e);
                        Bi(k);
                    });
                });
            };
            var UC = function (a, b, c, d) {
                d = void 0 === d ? Ng : d;
                Y.call(this, 886);
                this.Y = a;
                this.T = b;
                this.N = c;
                this.l = d;
                this.D = Nt(this);
            };
            _.P(UC, Y);
            UC.prototype.j = function () {
                var a;
                return z(this, function c() {
                    var d = this, e, f, g, h, k;
                    return A(c, function (l) {
                        if (1 == l.j) {
                            e = d.N;
                            f = e.O;
                            g = null !== (a = N(f, Vu, 5)) && void 0 !== a ? a : new Vu();
                            h = Fg(g);
                            if (null == h)
                                return d.D.notify(), l.return();
                            k = d.Y.every(function (m) {
                                return kd(fd(m));
                            });
                            return k ? B(l, VC(d, h), 2) : (d.D.notify(), l.return());
                        }
                        d.D.notify();
                        Bi(l);
                    });
                });
            };
            var VC = function (a, b) {
                return z(a, function d() {
                    var e = this, f;
                    return A(d, function (g) {
                        f = e;
                        return g.return(new C.Promise(function (h) {
                            var k = f.l(function (p, t) {
                                p.some(function (w) {
                                    return 0 < w.intersectionRatio;
                                }) && (t.disconnect(), h());
                            }, b + '%');
                            _.Xg(f, function () {
                                k.disconnect();
                            });
                            for (var l = {}, m = _.I(f.Y), n = m.next(); !n.done; l = { Xa: l.Xa }, n = m.next())
                                n = n.value, l.Xa = fd(n), l.Xa && (k.observe(l.Xa), mu(f.T, n, function (p) {
                                    return function () {
                                        k.unobserve(p.Xa);
                                    };
                                }(l)));
                        }));
                    });
                });
            };
            var WC = function (a, b, c, d, e, f) {
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
            _.P(WC, Y);
            WC.prototype.j = function () {
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
                            if (null !== (b = null === (a = e.B) || void 0 === a ? void 0 : a.value) && void 0 !== b ? !b : !bu(e.A)) {
                                Gt(e.l);
                                g.j = 0;
                                return;
                            }
                            return B(g, eu(e.A, 'loaded'), 3);
                        }
                        f = g.m;
                        e.l.j(f);
                        Bi(g);
                    });
                });
            };
            var XC = function (a, b, c, d) {
                Y.call(this, 877);
                this.Da = a;
                this.A = b;
                this.F = c;
                this.l = U(this);
                this.B = W(this, d);
            };
            _.P(XC, Y);
            XC.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e;
                    return A(b, function (f) {
                        if (1 == f.j)
                            return d = c.B.value, B(f, fu(c.A, d, c.Da, c.F), 2);
                        e = f.m;
                        c.l.m(e);
                        Bi(f);
                    });
                });
            };
            var YC = function (a, b) {
                Y.call(this, 874);
                this.H = a;
                this.l = U(this);
                Pt(this, b);
            };
            _.P(YC, Y);
            YC.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f;
                    return A(b, function (g) {
                        d = c;
                        e = new Ss(c.H, -1);
                        _.Uq(c, e);
                        if (!Us(e))
                            return Gt(c.l), g.return();
                        Lc().info(ts());
                        f = sc(661, function (h) {
                            d.l.m(h);
                        });
                        Xs(e, f);
                        Bi(g);
                    });
                });
            };
            var ZC = function (a, b, c) {
                Y.call(this, 875);
                this.A = a;
                this.H = b;
                this.l = U(this);
                Pt(this, c);
            };
            _.P(ZC, Y);
            ZC.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f;
                    return A(b, function (g) {
                        d = c;
                        e = new Az(c.H);
                        _.Uq(c, e);
                        if (!Cz(e))
                            return Gt(c.l), g.return();
                        f = sc(660, function (h) {
                            h && 'string' === typeof h.uspString ? d.l.j(h.uspString) : Gt(d.l);
                        });
                        c.A.info(ss());
                        Ez(e, f);
                        Bi(g);
                    });
                });
            };
            var $C = function (a, b, c) {
                c = void 0 === c ? Tg : c;
                Y.call(this, 883);
                this.B = a;
                this.F = c;
                this.l = Nt(this);
                this.A = V(this, b);
            };
            _.P($C, Y);
            $C.prototype.j = function () {
                return z(this, function b() {
                    var c = this;
                    return A(b, function (d) {
                        if (1 == d.j) {
                            if (!y(c.A.value, 5) || _.v(Zf))
                                return c.l.notify(), d.return();
                            _.v(Bo) || ez(c.B);
                            if (!c.F()) {
                                hz(null);
                                d.j = 2;
                                return;
                            }
                            return B(d, new C.Promise(function (e) {
                                return void hz(e);
                            }), 2);
                        }
                        c.l.notify();
                        Bi(d);
                    });
                });
            };
            var aD = function (a, b, c) {
                Y.call(this, 884);
                this.B = a;
                this.l = Nt(this);
                this.F = W(this, b);
                this.A = V(this, c);
            };
            _.P(aD, Y);
            aD.prototype.j = function () {
                _.O(bw).m = this.F.value;
                cw(_.O(bw), ot(this.B, this.A.value));
                _.O(Aq).j(2);
                this.l.notify();
            };
            var bD = function (a, b, c) {
                Y.call(this, 890);
                this.l = a;
                this.console = b;
                this.A = W(this, c);
            };
            _.P(bD, Y);
            bD.prototype.j = function () {
                var a = this;
                te(this.l, this.A.value, function (b, c) {
                    var d, e;
                    Zb(b, c);
                    null === (e = null === (d = a.console) || void 0 === d ? void 0 : d.error) || void 0 === e ? void 0 : e.call(d, c);
                });
            };
            var cD = function (a, b, c) {
                Y.call(this, 910);
                this.l = a;
                this.console = b;
                this.A = W(this, c);
            };
            _.P(cD, Y);
            cD.prototype.j = function () {
                var a = this;
                ue(this.l, Bg(Bp).map(function (b) {
                    return { ya: b };
                }), this.A.value, function (b, c) {
                    var d, e;
                    Zb(b, c);
                    null === (e = null === (d = a.console) || void 0 === d ? void 0 : d.error) || void 0 === e ? void 0 : e.call(d, c);
                });
            };
            var dD = function (a) {
                Y.call(this, 896);
                this.A = a;
                this.l = U(this);
            };
            _.P(dD, Y);
            dD.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d;
                    return A(b, function (e) {
                        if (1 == e.j)
                            return B(e, aw(c.A), 2);
                        d = e.m;
                        c.l.j(d);
                        Bi(e);
                    });
                });
            };
            var eD = null, fD = !1, gD = !1, hD = !1, iD = function (a) {
                    a = void 0 === a ? _.F : a;
                    if (!gD) {
                        var b = new cc('gpt_pubconsole_loaded');
                        dc(b);
                        r(b, 'param', String(Wg(a)));
                        r(b, 'api', String(hD));
                        fc(b, 1);
                        Yl(a.document, fn('https:' + '//console.googletagservices.com/pubconsole/'.replace(/^https?:/i, '') + 'loader.js'));
                        gD = !0;
                    }
                }, jD = sc(94, function (a) {
                    a = void 0 === a ? _.F : a;
                    rh()._pubconsole_disable_ || null !== Wg(a) && iD(a);
                });
            'complete' === _.F.document.readyState ? jD() : Eq(_.F, function () {
                jD();
            });
            ph('disablePublisherConsole', x(93, function () {
                rh()._pubconsole_disable_ = !0;
            }));
            ph('onPubConsoleJsLoad', x(731, function () {
                fD && (rh().console.openConsole(eD), eD = null, fD = !1);
            }));
            ph('openConsole', x(732, function (a) {
                a = void 0 === a ? '' : a;
                hD = !0;
                rh && rh().console ? rh().console.openConsole(a) : (a && (eD = a), fD = !0, iD());
            }));
            var kD = function (a, b) {
                Y.call(this, 873);
                this.H = a;
                this.l = V(this, b);
            };
            _.P(kD, Y);
            kD.prototype.j = function () {
                var a = this.l.value, b = this.H;
                !rh()._pubconsole_disable_ && (a = Gc('google_pubconsole', a, b)) && (a = a.split('|'), 0 < a.length && ('1' == a[0] || '0' == a[0]) && iD());
            };
            var lD = function (a, b, c) {
                Y.call(this, 878);
                this.l = a;
                this.aa = b;
                this.N = c;
                this.D = Nt(this);
            };
            _.P(lD, Y);
            lD.prototype.j = function () {
                for (var a = _.I(this.l), b = a.next(); !b.done; b = a.next())
                    rB(this.aa, b.value, this.N);
                this.D.notify();
            };
            var mD = function (a, b, c, d, e, f) {
                Y.call(this, 885);
                this.N = a;
                this.H = b;
                this.A = c;
                this.B = d;
                this.aa = e;
                this.T = f;
                this.l = U(this);
            };
            _.P(mD, Y);
            mD.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f, g;
                    return A(b, function (h) {
                        if (1 == h.j) {
                            if (!c.A)
                                return Gt(c.l), h.return();
                            d = c.A;
                            e = d.Da;
                            f = d.Y;
                            return B(h, nD(c, e, f, c.N, c.aa, c.T), 2);
                        }
                        g = h.m;
                        c.l.j(g);
                        Bi(h);
                    });
                });
            };
            var nD = function (a, b, c, d, e, f) {
                return z(a, function h() {
                    var k, l = this, m, n, p, t, w, E, H, G, Q, aa, da, va, Fa, eb, fb, Ma, ab, yc, Ub, Ta, Fb, Sh;
                    return A(h, function (Vb) {
                        switch (Vb.j) {
                        case 1:
                            k = new le();
                            _.Uq(l, k);
                            m = new au(l.H);
                            _.Uq(l, m);
                            n = new dD(m);
                            X(k, n);
                            p = new WC(b, m, n.l, l.H, l.H.top);
                            X(k, p);
                            t = new XC(b, m, _.bc(221), p.l);
                            X(k, t);
                            w = new ZC(Lc(), l.H, p.l);
                            X(k, w);
                            E = new YC(l.H, p.l);
                            X(k, E);
                            H = new TC(ag(l.N.O), Lc(), t.l, w.l, E.l);
                            X(k, H);
                            G = new kD(l.H, H.l);
                            X(k, G);
                            Q = new $C(_.bc(150), H.l);
                            X(k, Q);
                            aa = new SC(l.H, H.l, Q.l);
                            X(k, aa);
                            da = new aD(l.B, aa.D, H.l);
                            X(k, da);
                            _.v(Cp) || (va = new bD(rh(), l.H.console, aa.D), X(k, va), Fa = new cD(rh(), l.H.console, aa.D), X(k, Fa));
                            if (_.v(xo))
                                return eb = new lD(c, e, d), X(k, eb), fb = new UC(c, f, d), X(k, fb), ne(k), B(Vb, C.Promise.all([
                                    da.l.promise,
                                    eb.D.promise,
                                    fb.D.promise
                                ]), 3);
                            ne(k);
                            return B(Vb, da.l.promise, 3);
                        case 3:
                            return Ma = c, ab = J, yc = ab.M, Ub = ab, B(Vb, H.l.promise, 6);
                        case 6:
                            return Ta = yc.call(Ub, Vb.m), Fb = J, Sh = Fb.M, B(Vb, aa.D.promise, 7);
                        case 7:
                            return Vb.return({
                                Y: Ma,
                                ea: Ta,
                                storage: Sh.call(Fb, Vb.m)
                            });
                        }
                    });
                });
            };
            var oD = new C.Map(), pD = function (a, b) {
                    b = void 0 === b ? oD : b;
                    Y.call(this, 834);
                    this.Y = a;
                    this.l = b;
                    this.A = U(this);
                    this.B = C.Promise.all(this.Y.map(this.F, this));
                };
            _.P(pD, Y);
            pD.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d;
                    return A(b, function (e) {
                        if (1 == e.j)
                            return B(e, c.B, 2);
                        d = e.m;
                        c.A.j(d.filter(function (f) {
                            return null != f && !f.m;
                        }));
                        Bi(e);
                    });
                });
            };
            pD.prototype.F = function (a) {
                return z(this, function c() {
                    var d = this, e, f, g, h;
                    return A(c, function (k) {
                        if (1 == k.j) {
                            e = d;
                            f = 1000 * _.gc(jp);
                            if (a.m)
                                return k.return(null);
                            if (0 >= f)
                                return k.return(a);
                            d.l.has(a) || (d.l.set(a, Yg(f, a)), _.Xg(a, function () {
                                return void e.l.delete(a);
                            }));
                            g = (0, J.M)(d.l.get(a));
                            return B(k, g(), 2);
                        }
                        h = k.m;
                        if (d.m)
                            return k.return(null);
                        if (h)
                            return k.return(a);
                        Lc().I(vs(a.getAdUnitPath()));
                        return k.return(null);
                    });
                });
            };
            var qD = function (a, b, c, d, e, f, g) {
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
            _.P(qD, Y);
            qD.prototype.j = function () {
                var a = this, b = this.B;
                !this.K && 1 < this.B.length && (b = [b[0]]);
                b = b.filter(function (c) {
                    var d = a.N.P[c.j];
                    if (qd(a.H) && 4 == ud(d)) {
                        Lc().I(os('googletag.enums.OutOfPageFormat.REWARDED', String(c.getAdUnitPath())));
                        var e = !0;
                    } else
                        e = !1;
                    return !e && !wd(c, d, a.H, a.ea);
                });
                30 < b.length && (this.F.I(ks('30', String(b.length), String(b.length - 30))), b = b.slice(0, 30));
                sa(this.l.Y, b) || (this.l.Y = b.slice());
                this.A.j(b);
            };
            var rD = function (a) {
                Y.call(this, 826);
                this.T = a;
                this.D = U(this);
            };
            _.P(rD, Y);
            rD.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e;
                    return A(b, function (f) {
                        if (1 == f.j)
                            return d = c.D, e = d.m, B(f, c.T.m, 2);
                        e.call(d, f.m);
                        Bi(f);
                    });
                });
            };
            rD.prototype.C = function () {
                Gt(this.D);
            };
            var sD = function (a, b, c, d, e, f, g, h, k, l, m, n, p, t) {
                Y.call(this, 785, _.gc(sp));
                this.B = a;
                this.ba = b;
                this.T = c;
                this.Z = d;
                this.N = e;
                this.ca = f;
                this.ha = g;
                this.fa = h;
                this.R = l;
                this.Fb = m;
                this.A = U(this);
                this.W = V(this, k);
                this.K = Ot(this, l);
                this.l = Ot(this, m);
                this.F = W(this, n);
                this.ja = Ot(this, p);
                Ct(this.o, t, !0);
            };
            _.P(sD, Y);
            sD.prototype.j = function () {
                var a;
                return z(this, function c() {
                    var d = this, e, f, g;
                    return A(c, function (h) {
                        if (1 == h.j) {
                            e = d;
                            if (null === (a = d.F.value) || void 0 === a || !a.length)
                                return d.A.j(''), h.return();
                            f = !_.v(Zf);
                            aB(d.B, Db(), d.ca, d.ha, f ? bz() : '', f ? cz() : '', f ? dz() : '', null === d.K.value ? '0' : d.K.value, d.ja.value);
                            d.l.value && (d.T.hb = d.l.value);
                            g = new xB(d.F.value.slice(), d.ba, d.T, d.Z, d.B, d.W.value, d.N, d.fa, !1);
                            d.A.j(Ob(AB(g)));
                            return B(h, d.R.promise, 2);
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
                            d.l.value ? h = B(h, d.Fb.promise, 4) : (h.j = 0, h = void 0);
                            return h;
                        }
                        uc('gpt_etu', function (k) {
                            var l;
                            dc(k);
                            r(k, 'sig', null !== (l = e.Fb.B) && void 0 !== l ? l : -1);
                            r(k, 'req', e.U);
                        });
                        Bi(h);
                    });
                });
            };
            var tD = function (a) {
                Y.call(this, 802);
                this.H = a;
                this.l = U(this);
            };
            _.P(tD, Y);
            tD.prototype.j = function () {
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
            var uD = function (a, b, c, d) {
                Y.call(this, 847);
                this.T = a;
                this.B = b;
                this.A = c;
                this.l = U(this);
                this.F = V(this, d);
            };
            _.P(uD, Y);
            uD.prototype.j = function () {
                var a = this.F.value;
                if (a.length) {
                    for (var b = _.I(a), c = b.next(); !c.done; c = b.next())
                        tu(this.T, c.value);
                    this.A ? Gt(this.l) : this.B ? (b = Lb(a[0].getAdUnitPath()), a = vD(a, b), this.l.j(a)) : (a = a.map(function (d) {
                        return {
                            Da: Lb(d.getAdUnitPath()),
                            Y: [d]
                        };
                    }), this.l.j(a));
                } else
                    Gt(this.l);
            };
            var vD = function (a, b) {
                var c = [];
                a = ta(a, function (f) {
                    return Lb(f.getAdUnitPath());
                });
                a = _.I(_.u(Object, 'entries').call(Object, a));
                for (var d = a.next(); !d.done; d = a.next()) {
                    var e = _.I(d.value);
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
            var wD = function (a, b) {
                Y.call(this, 845);
                this.P = a;
                this.l = U(this);
                this.A = U(this);
                this.B = V(this, b);
            };
            _.P(wD, Y);
            wD.prototype.j = function () {
                var a = this, b = function (d) {
                        d = a.P[d.j];
                        return 0 != id(d).length || Ff(d, 16);
                    }, c = this.B.value;
                this.l.j(c.filter(b));
                this.A.j(c.filter(aj(b)));
            };
            var xD = function (a, b, c, d) {
                Y.call(this, 864);
                this.T = a;
                this.N = b;
                this.aa = c;
                this.l = Nt(this);
                this.A = V(this, d);
            };
            _.P(xD, Y);
            xD.prototype.j = function () {
                for (var a = _.I(this.A.value), b = a.next(); !b.done; b = a.next())
                    if (b = b.value, _.ou(this.T, b)) {
                        var c = this.N, d = c.O;
                        c = c.P[b.j];
                        var e = void 0, f = void 0;
                        (_.v(No) ? 0 : null !== (e = null !== (f = y(c, 11)) && void 0 !== f ? f : y(d, 10)) && void 0 !== e && e) && vg(b, this.aa, c, d);
                        tu(this.T, b);
                        f = e = void 0;
                        (_.v(Mo) ? 0 : null !== (e = null !== (f = y(c, 10)) && void 0 !== f ? f : y(d, 11)) && void 0 !== e && e) && vg(b, this.aa, c, d);
                    }
                this.l.notify();
            };
            var yD = function (a) {
                Y.call(this, 820);
                this.H = a;
                this.D = U(this);
            };
            _.P(yD, Y);
            yD.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f;
                    return A(b, function (g) {
                        if (1 == g.j)
                            return _.v(tp) ? B(g, Xe(c.H), 2) : (c.D.j(''), g.return());
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
            var zD = function (a) {
                Y.call(this, 858);
                this.l = a;
                this.D = Nt(this);
            };
            _.P(zD, Y);
            zD.prototype.j = function () {
                return z(this, function b() {
                    var c, d = this, e, f;
                    return A(b, function (g) {
                        switch (g.j) {
                        case 1:
                            g.G = 2;
                            if (_.v(Wp))
                                return e = new HA(function () {
                                }, null, d.l), B(g, QA(e), 7);
                            c = _.bc(258);
                            return B(g, c, 6);
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
            var AD = function (a) {
                _.Tq.call(this);
                this.j = a;
                var b = a.size;
                this.o = 'height' === a.Gd ? 'fluid' : [
                    b.width,
                    b.height
                ];
            };
            _.P(AD, _.Tq);
            AD.prototype.render = function () {
                var a = this.j, b = a.slotId, c = a.N, d = a.aa, e = a.size, f = a.Ba, g = a.vb, h = a.Gb, k = a.isBackfill;
                a = a.Zc;
                g && Ke(g, _.Ll(d), null !== h && void 0 !== h ? h : '', !1);
                jq(Nb.L(), '5', (0, J.M)(K(c.P[b.j], 20)));
                b.dispatchEvent(br, 801, {
                    Ec: 0 === f.kind ? f.ta : '',
                    isBackfill: !!k
                });
                c = this.C();
                a && c && c.setAttribute('data-google-container-id', a);
                b.dispatchEvent(dr, 825, { size: e });
                return c;
            };
            AD.prototype.loaded = function (a) {
                var b = this.j, c = b.slotId, d = b.la;
                b = b.N;
                c.dispatchEvent(gr, 844, void 0);
                a && a.setAttribute('data-load-complete', !0);
                d.dispatchEvent('slotOnload', 710, new nw(c, 'publisher_ads'));
                jq(Nb.L(), '6', (0, J.M)(K(b.P[c.j], 20)));
            };
            AD.prototype.G = function () {
                var a, b = this.j, c = b.slotId;
                b = b.aa;
                _.Tq.prototype.G.call(this);
                null === (a = fd(c, b)) || void 0 === a ? void 0 : a.removeAttribute('data-google-query-id');
            };
            AD.prototype.A = function (a, b) {
                var c = this, d = this.j, e = d.Ba, f = d.Gb, g = d.jb, h = d.Sa, k = d.Ja;
                e = 0 === e.kind ? e.ta : '';
                var l = nB(d.bc, Vv(d.slotId), b ? null : e, this.o, function () {
                    c.loaded((0, J.M)(l.j), null !== f && void 0 !== f ? f : '');
                }, a, d.Ub || null, d.Uc || null, !!d.isBackfill, !!d.Nd, null !== k && void 0 !== k ? k : null, (0, J.M)(d.N.Vb), (0, J.M)(d.Zc), null !== g && void 0 !== g ? g : '', b, null !== h && void 0 !== h ? h : void 0);
                _.Xg(this, function () {
                    100 != l.status && (2 == l.F && (bA(l.o), l.F = 0), window.clearTimeout(l.V), l.V = -1, l.J = 3, l.m && (l.m.za(), l.m = null), l.B && l.j ? l.B.unobserve(l.j) : (_.ge(window, 'resize', l.U), _.ge(window, 'scroll', l.U)), l.l && l.j && l.l == _.Pl(l.j) && l.l.removeChild(l.j), l.j = null, l.l = null, l.B && (l.B.disconnect(), l.B = null), l.status = 100);
                });
                return l;
            };
            var bh = function () {
                AD.apply(this, arguments);
            };
            _.P(bh, AD);
            bh.prototype.C = function () {
                var a = this.j, b = a.N, c = b.O;
                a = b.P[a.slotId.j];
                b = new Gu();
                c = lv([
                    b,
                    c.Aa(),
                    a && a.Aa()
                ]);
                c = AD.prototype.A.call(this, c);
                return (0, J.M)(c.j);
            };
            bh.prototype.loaded = function (a, b) {
                var c = this.j, d = c.slotId;
                c = c.N;
                AD.prototype.loaded.call(this, a, b);
                tC(d, c.P[d.j], b);
            };
            bh.prototype.l = function () {
                return !1;
            };
            var BD = function () {
                AD.apply(this, arguments);
            };
            _.P(BD, AD);
            var CD = function (a, b) {
                    var c = Vv(a.j.slotId), d = a.j.aa;
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
                }, DD = function (a, b, c, d, e) {
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
                BD.apply(this, arguments);
            };
            _.P(ah, BD);
            ah.prototype.C = function () {
                var a = this.j, b = a.Ba, c = a.bc, d = a.Uc, e = a.Gb;
                a = a.jb;
                var f = CD(this, this.o);
                if (null === d || void 0 === d ? 0 : d.length)
                    if (_.rk) {
                        d = _.I(d);
                        for (var g = d.next(); !g.done; g = d.next())
                            f.sandbox.add(g.value);
                    } else
                        f.sandbox.add.apply(f.sandbox, _.nc(d));
                a && (f.allow = a);
                -1 == Lj.indexOf('iPhone') && (f.srcdoc = _.Vj(Wj));
                DD(this, f, this.o, c, null !== e && void 0 !== e ? e : '');
                oB(f, b.ta, function () {
                });
                return f;
            };
            ah.prototype.l = function () {
                return !0;
            };
            var ED = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            var $g = function () {
                BD.apply(this, arguments);
            };
            _.P($g, BD);
            $g.prototype.C = function () {
                var a = this.j, b = a.Ba, c = a.bc, d = a.Gb, e = a.jb;
                a = CD(this, this.o);
                e && (a.allow = e);
                b = b.te;
                /^https:/.test(b) && (b = rj(b), a.src = b instanceof ib ? hb(b) : qj(b), a.sandbox = nA.join(' '));
                DD(this, a, this.o, c, null !== d && void 0 !== d ? d : '');
                return a;
            };
            $g.prototype.l = function () {
                return !1;
            };
            var Zg = function () {
                BD.apply(this, arguments);
            };
            _.P(Zg, BD);
            Zg.prototype.C = function () {
                var a = this.j, b = a.N, c = a.Ba;
                a = b.P[a.slotId.j];
                b = lv([
                    b.O.Aa(),
                    a && a.Aa()
                ]);
                a = CD(this, this.o);
                c = c.url;
                /^urn:uuid:[0-9a-f-]*$/.test(c) && (c = rj(c), a.src = c instanceof ib ? hb(c) : qj(c));
                BD.prototype.A.call(this, b, a);
                return a;
            };
            Zg.prototype.l = function () {
                return !1;
            };
            var FD = function (a, b, c, d, e, f, g, h, k, l, m, n, p, t, w, E, H, G, Q, aa, da, va, Fa, eb, fb, Ma) {
                Y.call(this, 680);
                this.slotId = a;
                this.T = b;
                this.N = c;
                this.la = d;
                this.H = e;
                this.l = U(this);
                this.A = U(this);
                this.F = V(this, f);
                Pt(this, h);
                this.fa = V(this, k);
                this.B = V(this, l);
                this.ca = V(this, m);
                this.ba = V(this, n);
                Pt(this, da);
                this.K = W(this, p);
                this.R = W(this, t);
                this.W = W(this, w);
                this.oa = W(this, E);
                this.Z = W(this, H);
                this.ma = W(this, G);
                this.ra = W(this, Q);
                this.ha = W(this, aa);
                this.na = W(this, g);
                Pt(this, va);
                Pt(this, Fa);
                this.ja = V(this, eb);
                Pt(this, fb);
                this.sa = W(this, Ma);
            };
            _.P(FD, Y);
            FD.prototype.j = function () {
                var a = this, b = this.K.value, c = this.F.value;
                if (0 === c.kind) {
                    var d = null === b || void 0 === b ? void 0 : Na(b.getHtml());
                    d && (c.ta = d);
                    if (null == c.ta)
                        throw Error('invalid html');
                }
                b = ch({
                    id: this.ba.value,
                    aa: document,
                    slotId: this.slotId,
                    T: this.T,
                    N: this.N,
                    la: this.la,
                    size: this.ca.value,
                    Ba: c,
                    vb: this.fa.value,
                    bc: this.B.value,
                    Gb: this.R.value,
                    Gd: this.W.value,
                    Uc: this.oa.value,
                    Ja: null === b || void 0 === b ? void 0 : K(b, 2),
                    isBackfill: this.Z.value,
                    Nd: this.ma.value,
                    Zc: this.ra.value,
                    Tf: this.ha.value,
                    Ub: this.na.value,
                    jb: this.ja.value,
                    Sa: this.sa.value
                });
                _.Uq(this, b);
                var e = b.render();
                vv(this, this.id, this.H, 'message', function (f) {
                    e.contentWindow === f.source && a.slotId.dispatchEvent(Ig, 824, f);
                });
                this.l.j(e);
                this.A.j(b.l());
            };
            var HD = function (a, b, c, d) {
                Y.call(this, 863);
                this.l = b;
                this.Ia = Number(a);
                this.A = V(this, c);
                this.B = V(this, d);
                this.F = GD(this);
            };
            _.P(HD, Y);
            var GD = function (a) {
                return z(a, function c() {
                    var d = this, e;
                    return A(c, function (f) {
                        e = d;
                        return f.return(new C.Promise(function (g) {
                            try {
                                vv(e, e.id, e.l, 'message', function (h) {
                                    var k;
                                    'asmreq' === (null === (k = h.data) || void 0 === k ? void 0 : k.type) && jh(Yh(qz, h.data.payload), 1) === e.Ia && g(h);
                                });
                            } catch (h) {
                            }
                        }));
                    });
                });
            };
            HD.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f, g, h, k;
                    return A(b, function (l) {
                        if (1 == l.j)
                            return d = dh(c.l), e = c.A.value, f = c.B.value, B(l, c.F, 2);
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
                        m = new sz();
                        m = D(m, 1, p.top);
                        m = D(m, 3, p.bottom);
                        m = D(m, 2, p.left);
                        p = D(m, 4, p.right);
                        m = new rz();
                        m = D(m, 1, c.Ia);
                        m = D(m, 2, !f);
                        p = Gb(m, 3, p);
                        p = D(p, 4, d);
                        h = D(p, 5, n);
                        k = {
                            type: 'asmres',
                            payload: ql(h)
                        };
                        g.ports[0].postMessage(k);
                        Bi(l);
                    });
                });
            };
            var ID = function (a, b, c, d, e, f, g, h, k, l, m) {
                Y.call(this, 699);
                this.aa = a;
                this.slotId = b;
                this.ga = c;
                this.Ua = d;
                this.D = Nt(this);
                this.F = W(this, e);
                this.R = V(this, f);
                this.A = V(this, g);
                this.K = V(this, h);
                this.l = W(this, k);
                this.W = V(this, l);
                this.B = V(this, m);
            };
            _.P(ID, Y);
            ID.prototype.j = function () {
                var a, b = this.R.value, c = this.A.value;
                c.style.width = '';
                c.style.height = '';
                if ('height' !== this.F.value) {
                    var d = null !== (a = this.l.value) && void 0 !== a ? a : 0, e = this.K.value, f = this.W.value, g = this.B.value, h = !1;
                    switch (d) {
                    case 1:
                    case 2:
                        h = this.aa;
                        var k = this.slotId, l = this.ga, m = this.Ua;
                        var n = e.width, p = e.height, t = 0;
                        var w = 0;
                        var E = id(l);
                        E = _.I(E);
                        for (var H = E.next(); !H.done; H = E.next())
                            if (H = H.value, Array.isArray(H)) {
                                var G = _.I(H);
                                H = G.next().value;
                                G = G.next().value;
                                t < H && (t = H);
                                w < G && (w = G);
                            }
                        w = [
                            t,
                            w
                        ];
                        t = w[0] < n;
                        p = w[1] < p;
                        t || p ? (w = n + 'px', E = {
                            'max-height': 'none',
                            'max-width': w,
                            padding: '0px',
                            width: w
                        }, p && (E.height = 'auto'), mC(c, b, E), c = {}, t && n > parseInt(f.width, 10) && (c.width = w, c['max-width'] = w), p && (c.height = 'auto', c['max-height'] = 'none'), am(c) ? c = !1 : (c['padding-' + ('ltr' == f.direction ? 'left' : 'right')] = '0px', _.xm(b, c), c = !0)) : c = !1;
                        b:
                            switch (p = e.width, n = h.defaultView || h.parentWindow || _.F, d) {
                            case 2:
                                b = nC(b, n, p, f, m);
                                break b;
                            case 1:
                                if (f = b.parentElement)
                                    if (m = Mv(f)) {
                                        G = m.width;
                                        m = fd(k, n.document);
                                        t = hd(m, n);
                                        w = t.position;
                                        var Q = parseInt(t.width, 10) || 0;
                                        E = hd(f, n);
                                        H = 'rtl' == E.direction ? 'Right' : 'Left';
                                        m = H.toLowerCase();
                                        n = 'absolute' == w ? 0 : parseInt(E['padding' + H], 10);
                                        E = parseInt(E['border' + H + 'Width'], 10);
                                        var aa = Bm(t);
                                        H = (aa && aa[4] || 0) * ('Right' == H ? -1 : 1);
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
                                        G['margin-' + m] = p - n - E - aa - H + 'px';
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
                        c || b ? (pC(h, k, l, d, e.width, e.height, 'gpt_slotexp', g), h = !0) : h = !1;
                        break;
                    case 3:
                        d = this.aa, h = this.slotId, k = this.ga, da = this.Ua, l = e.width, Fa = e.height, Fa >= (parseInt(f.height, 10) || 0) || 'none' == f.display || 'hidden' == f.visibility || !da || -12245933 === da.width || b.getBoundingClientRect().bottom <= da.height ? h = !1 : (da = { height: Fa + 'px' }, mC(c, b, da), _.xm(b, da), pC(d, h, k, 3, l, Fa, 'gpt_slotred', g), h = !0);
                    }
                    !h && _.v(Qn) && pC(this.aa, this.slotId, this.ga, 0, e.width, e.height, 'gpt_pgbrk', g);
                }
                this.D.notify();
            };
            var JD = function (a, b, c, d, e, f) {
                Y.call(this, 686);
                this.H = a;
                this.slotId = b;
                this.A = c;
                this.Kb = f;
                this.B = W(this, d);
                this.l = V(this, e);
            };
            _.P(JD, Y);
            JD.prototype.j = function () {
                var a, b;
                return z(this, function d() {
                    var e = this, f, g, h, k, l, m, n, p, t, w, E;
                    return A(d, function (H) {
                        if (1 == H.j) {
                            f = e.B.value;
                            g = null === f || void 0 === f ? void 0 : K(f, 1);
                            h = null === f || void 0 === f ? void 0 : ll(f, 2, 1);
                            k = null !== (a = null === f || void 0 === f ? void 0 : K(f, 3)) && void 0 !== a ? a : 0;
                            l = null !== (b = null === f || void 0 === f ? void 0 : y(f, 5)) && void 0 !== b ? b : !1;
                            if (!g || !h)
                                return H.return();
                            m = new Ge();
                            n = m.resolve;
                            p = m.promise;
                            t = e.l.value;
                            w = WA({
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
                                Kb: e.Kb
                            });
                            _.Xg(e, function () {
                                w();
                                n(!1);
                            });
                            return B(H, p, 2);
                        }
                        (E = H.m) ? H = B(H, e.slotId.dispatchEvent(Zq, 614, void 0), 0) : (H.j = 0, H = void 0);
                        return H;
                    });
                });
            };
            var KD = function (a, b, c, d, e) {
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
            _.P(KD, Y);
            var LD = function (a) {
                a.mb.m(a.B.value);
                a.Va.m(a.F.value);
                a.pa.m(a.A.value);
                Gt(a.K);
                Gt(a.l);
            };
            KD.prototype.j = function () {
                var a, b, c, d, e, f, g, h = this.R.value, k = this.A.value;
                if (_.v(Tn) && h) {
                    var l = null !== (b = null === (a = (L = M(this.ga, gf, 21), _.u(L, 'find')).call(L, function (w) {
                        return K(w, 1) === h;
                    })) || void 0 === a ? void 0 : N(a, Kc, 2)) && void 0 !== b ? b : null;
                    if (!l)
                        throw Error('Could not find bid with id: ' + h);
                    this.K.j(l);
                    if (1 !== K(l, 11))
                        LD(this);
                    else {
                        var m = K(l, 7), n = K(l, 12), p = null !== (d = null === (c = N(l, Wc, 5)) || void 0 === c ? void 0 : K(c, 2)) && void 0 !== d ? d : this.B.value, t = null !== (f = null === (e = N(l, Wc, 5)) || void 0 === e ? void 0 : K(e, 1)) && void 0 !== f ? f : this.F.value;
                        if (!m && !n)
                            throw Error('Could not find ad to render for bid id: ' + h);
                        l = null !== (g = K(l, 2)) && void 0 !== g ? g : 0;
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
                        }), Gt(this.l)) : (this.pa.m(k), this.l.m(m));
                        this.mb.m(null !== p && void 0 !== p ? p : null);
                        this.Va.m(null !== t && void 0 !== t ? t : null);
                        window.postMessage(JSON.stringify({
                            message: 'Prebid Request',
                            adId: h
                        }), '*');
                    }
                } else
                    LD(this);
            };
            var MD = function (a, b, c, d) {
                Y.call(this, 720);
                this.format = a;
                this.B = b;
                this.D = U(this);
                this.l = W(this, c);
                this.A = W(this, d);
            };
            _.P(MD, Y);
            MD.prototype.j = function () {
                var a = this.A.value;
                if (null == a)
                    Gt(this.D);
                else {
                    var b = Math.round(0.3 * this.B);
                    2 !== this.format && 3 !== this.format || !Jt(this.l) || !kl(this.l.value, 12, !1) || 0 >= b || a <= b ? this.D.j(a) : this.D.j(b);
                }
            };
            var ND = function (a, b, c, d, e, f, g, h, k, l) {
                Y.call(this, 674);
                this.slotId = a;
                this.O = b;
                this.ga = c;
                this.aa = e;
                this.T = f;
                this.D = U(this);
                this.B = 2 === d || 3 === d;
                this.l = V(this, g);
                this.K = V(this, h);
                this.F = W(this, k);
                this.A = W(this, l);
            };
            _.P(ND, Y);
            ND.prototype.j = function () {
                var a = uv(this.O, this.ga), b = Rv(this.slotId, this.aa) || mB(this.aa, this.l.value, Wv(this.slotId), a);
                this.K.value && !a && (b.style.display = 'inline-block');
                this.B ? lu(this.T, this.slotId, function () {
                    return void _.Ol(b);
                }) : _.Xg(this, function () {
                    return void _.Ol(b);
                });
                a = OD(this);
                0 < a && (b.style.paddingTop = a + 'px');
                this.D.j(b);
            };
            var OD = function (a) {
                var b, c, d, e = a.l.value, f = null === (b = (0, J.M)(a.F).value) || void 0 === b ? void 0 : b.height;
                if (!e || (0, J.M)(a.A).value || !f)
                    return 0;
                var g = a.O, h;
                return (null != (h = y(a.ga, 23)) ? h : y(g, 31)) ? Math.floor((e.offsetHeight - f) / 2) : _.v(Ko) && (a = hd(e, window), a = null === (d = null === (c = null === a || void 0 === a ? void 0 : a.minHeight) || void 0 === c ? void 0 : c.match(/^([0-9]+)px$/)) || void 0 === d ? void 0 : d[1]) ? Math.floor((Number(a) - f) / 2) : 0;
            };
            var PD = function (a) {
                Y.call(this, 859);
                this.H = a;
                this.D = U(this);
            };
            _.P(PD, Y);
            PD.prototype.j = function () {
                this.D.j(!We(this.H.top));
            };
            var QD = function (a, b) {
                Y.call(this, 698);
                this.H = a;
                this.D = U(this);
                this.l = V(this, b);
            };
            _.P(QD, Y);
            QD.prototype.j = function () {
                this.D.m(hd(this.l.value, this.H));
            };
            var RD = function (a, b, c) {
                Y.call(this, 813);
                this.Da = a;
                this.l = U(this);
                this.B = W(this, b);
                this.A = W(this, c);
            };
            _.P(RD, Y);
            RD.prototype.j = function () {
                var a, b = this.B.value;
                if (!b || _.v(Cp))
                    this.l.j(!1);
                else if (SD.has(this.Da))
                    this.l.j(!1);
                else {
                    SD.add(this.Da);
                    b = _.I(b);
                    for (var c = b.next(); !c.done; c = b.next()) {
                        var d = c.value;
                        c = d.ya;
                        (d = d.Wd) && xe(c, d, null !== (a = this.A.value) && void 0 !== a ? a : null);
                    }
                    this.l.j(!0);
                }
            };
            var SD = new C.Set();
            var TD = function (a) {
                Y.call(this, 840);
                this.aa = a;
                this.D = U(this);
            };
            _.P(TD, Y);
            TD.prototype.j = function () {
                var a;
                if (_.v(Ip)) {
                    var b = void 0 === b ? window.navigator.userAgent : b;
                    b = (b = b.match(/Chrome\/([0-9]+)/)) && 92 > Number(b[1]) ? 'conversion-measurement' : 'attribution-reporting';
                } else
                    b = 'conversion-measurement';
                _.v(Hp) && (null === (a = this.aa.featurePolicy) || void 0 === a ? 0 : (L = a.features(), _.u(L, 'includes')).call(L, b)) ? this.D.j(b) : this.D.j('');
            };
            var UD = function (a, b, c, d, e) {
                Y.call(this, 721);
                this.H = a;
                this.F = W(this, b);
                this.A = V(this, c);
                this.l = V(this, d);
                this.B = V(this, e);
            };
            _.P(UD, Y);
            UD.prototype.j = function () {
                var a = this, b, c, d, e = this.F.value, f = null === (b = null === e || void 0 === e ? void 0 : K(e, 1)) || void 0 === b ? void 0 : b.toUpperCase();
                e = null === (c = null === e || void 0 === e ? void 0 : K(e, 2)) || void 0 === c ? void 0 : c.toUpperCase();
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
                    vv(this, 722, this.H, 'orientationchange', function () {
                        var E;
                        (null === (E = a.H.screen.orientation) || void 0 === E ? 0 : E.angle) ? _.xm(k, { display: 'none' }) : _.xm(k, { display: 'block' });
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
            var VD = function (a, b, c, d, e) {
                e = void 0 === e ? fh : e;
                Y.call(this, 783);
                var f = this;
                this.slotId = a;
                this.aa = c;
                this.la = d;
                this.K = e;
                this.F = !1;
                this.l = null;
                this.B = 0;
                this.A = null;
                this.Z = _.bj(function () {
                    f.la.dispatchEvent('impressionViewable', 715, new lw(f.slotId, 'publisher_ads'));
                });
                this.ba = cj(function () {
                    return void f.la.dispatchEvent('slotVisibilityChanged', 716, new mw(f.slotId, 'publisher_ads', (0, J.M)(f.A)));
                }, 200);
                this.R = V(this, b);
                this.W = Hg(this.slotId, gr);
            };
            _.P(VD, Y);
            VD.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f, g, h;
                    return A(b, function (k) {
                        if (1 == k.j)
                            return d = c, _.v(Wo) || _.v(Xo) ? _.v(Yo) ? (k.j = 2, k = void 0) : k = B(k, c.W, 2) : k = k.return(), k;
                        if (c.m)
                            return k.return();
                        e = c.R.value;
                        f = _.v(Xo) ? $i : function (l) {
                            l = _.I(l);
                            for (var m = l.next(); !m.done; m = l.next())
                                d.B = 100 * m.value.intersectionRatio, WD(d);
                        };
                        g = sc(c.id, f);
                        h = c.K(g);
                        h.observe(e);
                        vv(c, c.id, c.aa, 'visibilitychange', function () {
                            WD(d);
                        });
                        _.Xg(c, function () {
                            h.disconnect();
                        });
                        _.v(Zo) && setTimeout(function () {
                            return void h.disconnect();
                        }, 3600000);
                        Bi(k);
                    });
                });
            };
            var WD = function (a) {
                    var b = !At(a.aa);
                    XD(a, 50 <= a.B && b);
                    b = b ? a.B : 0;
                    _.u(Number, 'isFinite').call(Number, b) && (b = Math.floor((0, J.M)(b)), 0 > b || 100 < b || b === a.A || null === a.A && 0 === b || (a.A = b, a.ba()));
                }, XD = function (a, b) {
                    a.F || (b ? null === a.l && (a.l = setTimeout(function () {
                        At(a.aa) || (a.Z(), a.F = !0);
                        a.l = null;
                    }, 1000)) : null !== a.l && (clearTimeout(a.l), a.l = null));
                };
            var YD = function () {
                Y.call(this, 663);
                this.D = Nt(this);
            };
            _.P(YD, Y);
            YD.prototype.j = function () {
                return z(this, function b() {
                    var c = this;
                    return A(b, function (d) {
                        if (1 == d.j) {
                            var e = ZD ? 0 : _.gc(Fo), f = _.gc(Eo);
                            e = Math.max(e, f);
                            0 < e && (ZD = !0, xg(e));
                            return B(d, $D(c), 2);
                        }
                        c.D.notify();
                        Bi(d);
                    });
                });
            };
            var $D = function (a) {
                    return z(a, function c() {
                        var d;
                        return A(c, function (e) {
                            d = _.gc(Go);
                            0 < d ? e = B(e, gh(d), 0) : (e.j = 0, e = void 0);
                            return e;
                        });
                    });
                }, ZD = !1;
            var aE = function (a, b) {
                Y.call(this, 666);
                this.A = a;
                this.l = U(this);
                this.B = W(this, b);
            };
            _.P(aE, Y);
            aE.prototype.j = function () {
                var a = new Vu();
                Jt(this.B) && (D(a, 2, this.B.value), D(a, 3, 1));
                if (this.A) {
                    var b = [
                            this.A,
                            a
                        ], c = new Vu();
                    b = _.I(b);
                    for (a = b.next(); !a.done; a = b.next()) {
                        a = a.value;
                        if (Ff(a, 1)) {
                            var d = K(a, 1);
                            D(c, 1, d);
                        }
                        Ff(a, 2) && (d = K(a, 2), D(c, 2, d));
                        Ff(a, 3) && (a = ce(a, 3), D(c, 3, a));
                    }
                    a = c;
                }
                c = this.l;
                b = c.m;
                a = Ff(a, 2) ? Ff(a, 3) && 0 !== Ad() ? K(a, 2) * ce(a, 3) : K(a, 2) : null;
                b.call(c, a);
            };
            var bE = function (a, b, c, d) {
                Y.call(this, 666);
                this.D = U(this);
                Pt(this, a);
                this.l = V(this, b);
                this.A = W(this, d);
                this.B = W(this, c);
            };
            _.P(bE, Y);
            bE.prototype.j = function () {
                var a, b = this.A.value, c = null !== (a = this.B.value) && void 0 !== a ? a : void 0;
                if (null == b || 0 > b || 0 === c)
                    this.D.j(!1);
                else {
                    var d = this.l.value;
                    kd(d) ? cE(this, b, c, d) : this.D.j(!1);
                }
            };
            var cE = function (a, b, c, d) {
                var e = hh(b + '%', sc(291, function (f, g) {
                    f = _.I(f);
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
            var dE = function (a, b, c, d, e) {
                Y.call(this, 713);
                this.Ia = a;
                this.l = b;
                this.B = e;
                this.A = W(this, c);
                this.F = V(this, d);
            };
            _.P(dE, Y);
            dE.prototype.j = function () {
                var a = this;
                if (!Ye(this.A.value) && this.l.getOseId()) {
                    var b = this.F.value, c = YA(this.l), d = _.v(Wo) ? $i : sc(this.id, function (e, f) {
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
            var eE = function (a, b, c, d, e, f) {
                Y.call(this, 664);
                this.slotId = a;
                this.Ua = b;
                this.T = c;
                this.D = Nt(this);
                Pt(this, d);
                this.A = W(this, e);
                this.l = W(this, f);
            };
            _.P(eE, Y);
            eE.prototype.j = function () {
                var a = this, b, c = null !== (b = this.l.value) && void 0 !== b ? b : 0;
                if (_.v(Ao) || 0 < c) {
                    var d = document;
                    c = zt(d);
                    if (At(d) && c && (0 < eg(this.T, this.slotId) || !fE(this)) && c) {
                        var e = vv(this, 324, d, c, function () {
                            At(d) || (e && e(), a.D.notify());
                        });
                        if (e)
                            return;
                    }
                }
                this.D.notify();
            };
            var fE = function (a) {
                var b = a.A.value, c;
                if (c = null != b)
                    try {
                        var d = Is(top.document, top).y, e = d + a.Ua.height;
                        c = b.y >= d && b.y <= e;
                    } catch (f) {
                        c = !0;
                    }
                return c;
            };
            var gE = function (a, b, c, d) {
                d = void 0 === d ? document : d;
                Y.call(this, 912);
                this.googletag = b;
                this.O = c;
                this.aa = d;
                this.l = V(this, a);
            };
            _.P(gE, Y);
            gE.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e, f, g;
                    return A(b, function (h) {
                        if (1 == h.j) {
                            d = c;
                            if (!_.v(hp))
                                return h.return();
                            e = _.u(c.l.value, 'find').call(c.l.value, function (k) {
                                return 1 === K(k, 3);
                            });
                            if (!e)
                                return h.return();
                            f = K(e, 2);
                            if (!f)
                                return h.return();
                            g = c.googletag.defineOutOfPageSlot(f, 5);
                            if (!g)
                                return h.return();
                            g.addService(c.googletag.pubads());
                            return B(h, new C.Promise(function (k) {
                                return void Vh(d.aa, k);
                            }), 2);
                        }
                        c.googletag.display(g);
                        y(c.O, 4) && c.googletag.pubads().refresh([g]);
                        Bi(h);
                    });
                });
            };
            var hE = function (a, b) {
                Y.call(this, 762);
                this.D = U(this);
                this.A = V(this, a);
                this.l = V(this, b);
            };
            _.P(hE, Y);
            hE.prototype.j = function () {
                var a = this.l.value.kind, b = 0;
                1 === a ? b = 5 : 2 === a ? b = 6 : this.A.value && (b = 1);
                this.D.j(b);
            };
            var iE = function (a, b, c, d, e, f) {
                Y.call(this, 669);
                this.O = a;
                this.P = b;
                this.H = c;
                this.D = U(this);
                this.l = W(this, d);
                this.A = W(this, e);
                this.B = W(this, f);
            };
            _.P(iE, Y);
            iE.prototype.j = function () {
                var a;
                if (!(a = Jt(this.A))) {
                    a = this.P;
                    var b = this.H;
                    b = void 0 === b ? window : b;
                    a = !!(Dq(Ln) || a && Ff(a, 16) && Rb('google_range_debug', b));
                }
                a ? this.D.j(!0) : (a = (Ye(this.l.value) ? y(this.P, 12) || y(this.O, 13) : !1) || !!this.B.value, this.D.j(!!a));
            };
            var jE = function (a, b, c, d, e, f, g) {
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
            _.P(jE, Y);
            jE.prototype.j = function () {
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
                        null == k || k === l || d.l.value || Lc().I(rs(p, String(k)));
                        d.l.value || uc('gpt_sf_r', function (E) {
                            dc(E);
                            r(E, 'GAM', String(k));
                            r(E, 'Final', p);
                        });
                        t = d.l.value || l || null == l;
                        if (!t)
                            return Gt(d.D), w.return();
                        d.D.j(Qv(d.A, d.ea));
                        Bi(w);
                    });
                });
            };
            var kE = function (a, b, c, d, e, f) {
                Y.call(this, 719);
                this.O = a;
                this.ga = b;
                this.D = U(this);
                this.A = V(this, c);
                this.l = W(this, d);
                this.B = W(this, f);
            };
            _.P(kE, Y);
            kE.prototype.j = function () {
                var a = this.l.value, b = this.A.value;
                if (1 === b || 5 === b) {
                    if (a = this.B.value, b = new Gu(), a = D(b, 3, a), y(lv([
                            a,
                            this.O.Aa(),
                            this.ga.Aa()
                        ]), 3)) {
                        this.D.j(nA);
                        return;
                    }
                } else {
                    if (a = 0 === b && a)
                        a = om(), a = !(!a['allow-top-navigation-by-user-activation'] || !a['allow-popups-to-escape-sandbox']);
                    if (a) {
                        this.D.j(nA);
                        return;
                    }
                }
                Gt(this.D);
            };
            var lE = function (a, b, c, d, e, f, g, h, k) {
                Y.call(this, 681);
                this.adUnitPath = a;
                this.ga = b;
                this.K = c;
                this.window = d;
                this.pa = U(this);
                this.A = U(this);
                this.Cb = U(this);
                this.l = Dq(Ln).split(',');
                this.B = Bg(Mn);
                this.Ka = Ff(b, 16) ? N(b, lg, 16) : null;
                this.F = Qb('google_range_debug', this.window);
                this.R = W(this, e);
                this.ca = W(this, f);
                this.Z = W(this, g);
                this.W = V(this, h);
                this.ba = V(this, k);
            };
            _.P(lE, Y);
            lE.prototype.j = function () {
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
                    a = c ? mE(this) : null;
                    if (c && a) {
                        c = this.ba.value;
                        var d = Mv(c.parentElement);
                        d = null !== (b = null === d || void 0 === d ? void 0 : d.width) && void 0 !== b ? b : 0;
                        b = 'p' === this.l[0];
                        var e = Number(this.l[0]);
                        if (b = 'f' === this.l[0] ? this.K : e && 0 < e ? e : b ? Math.min(d, this.K) : null) {
                            e = a.width;
                            var f = a.height, g = this.l[1], h = Number(g);
                            e = 'ratio' === g && e ? Math.floor(f / e * b) : h && 0 < h ? f * h : f;
                            nE(this, b, e, {
                                kind: 0,
                                ta: oE(b, e, '<p>Requested size:' + a.width + 'x' + a.height + '</p>')
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
                                nE(this, e, f, {
                                    kind: 0,
                                    ta: oE(e, f, '<p>Minimum size:' + d + 'x' + b + '</p><p>Maximum size:' + (a + 'x' + c + '</p><div id=toowide style="display:none; background:#faa">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? \'block\' : \'none\';},{threshold:1}).observe(document.body);</script></div>'))
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
                    nE(this, a, c, this.W.value);
                }
            };
            var mE = function (a) {
                    a = id(a.ga)[0];
                    return Array.isArray(a) && a.every(function (b) {
                        return 'number' === typeof b;
                    }) ? new _.Cl(a[0], a[1]) : null;
                }, oE = function (a, b, c) {
                    return '<html><body style="height:' + (b - 2 + 'px;width:' + (a - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;">')) + c + ('<p>Rendered size:' + a + 'x' + b + '</p></body></html>');
                }, nE = function (a, b, c, d, e, f) {
                    e = void 0 === e ? a.R.value : e;
                    a.A.j(new _.Cl(b, c));
                    a.pa.j(d);
                    a.Cb.m(e);
                    f && _.hn(f, 'opacity', 0.5);
                };
            var pE = function (a, b, c, d, e, f, g, h, k) {
                Y.call(this, 673);
                this.slotId = a;
                this.vb = b;
                this.K = c;
                this.F = d;
                this.aa = e;
                this.l = f;
                this.T = g;
                this.D = U(this);
                this.B = W(this, h);
                this.A = W(this, k);
            };
            _.P(pE, Y);
            pE.prototype.j = function () {
                return z(this, function b() {
                    var c = this, d, e;
                    return A(b, function (f) {
                        if (1 == f.j) {
                            if (null != c.vb) {
                                qE(c, c.vb);
                                c.D.j(c.vb);
                                f.j = 0;
                                return;
                            }
                            if (tv(c.l)) {
                                c.D.j(rE(c));
                                f.j = 0;
                                return;
                            }
                            return B(f, Hg(c.slotId, $q), 4);
                        }
                        d = f.m;
                        e = d.detail;
                        if (c.m)
                            return f.return();
                        qE(c, e);
                        c.D.j(e);
                        Bi(f);
                    });
                });
            };
            var rE = function (a) {
                    var b = _.Nl(document, 'INS');
                    b.id = a.K;
                    _.xm(b, { display: 'none' });
                    a.aa.documentElement.appendChild(b);
                    var c = function () {
                        return void _.Ol(b);
                    };
                    2 === a.l || 3 === a.l ? lu(a.T, a.slotId, function () {
                        return void _.Ol(b);
                    }) : _.Xg(a, c);
                    return b;
                }, qE = function (a, b) {
                    if (2 !== a.l && 3 !== a.l) {
                        var c = _.v(gp) ? [].concat(_.nc(b.childNodes)) : _.u(Array, 'from').call(Array, b.childNodes);
                        c = _.I(c);
                        for (var d = c.next(); !d.done; d = c.next())
                            d = d.value, 1 === d.nodeType && d.id !== a.F && _.Ol(d);
                        b.style.display = '';
                        _.v(Lo) && Jt(a.B) && Jt(a.A) && lB(b, (0, J.M)(a.B.value), (0, J.M)(a.A.value));
                    }
                };
            var sE = function (a) {
                Y.call(this, 676);
                this.D = U(this);
                this.l = V(this, a);
            };
            _.P(sE, Y);
            sE.prototype.j = function () {
                var a = ed(this.l.value);
                this.D.j(a);
            };
            var tE = function (a, b, c) {
                Y.call(this, 807);
                this.H = a;
                this.D = Nt(this);
                this.l = W(this, b);
                this.A = V(this, c);
            };
            _.P(tE, Y);
            tE.prototype.j = function () {
                var a = _.gc(up);
                if (0 !== a && this.l.value && !this.A.value) {
                    var b = Ks(this.H).H, c = Ns(b), d = c.url;
                    c.jc && (b = new AA(b, d), 1 === a ? b = BA(b) : (b = rm('google_ads_top_frame_ctrl', b.j), b = !(!b || !b.contentWindow)), b || this.J(Error('Cannot create top window frame: ' + a)));
                }
                this.D.notify();
            };
            var uE = function (a) {
                Y.call(this, 881);
                this.D = U(this);
                this.l = W(this, a);
            };
            _.P(uE, Y);
            uE.prototype.j = function () {
                var a;
                if (this.l.value) {
                    for (var b = this.l.value, c = {}, d = _.I(M(b, Cx, 7)), e = d.next(); !e.done; e = d.next())
                        e = e.value, c[xf(e, 1)] = JSON.parse(xf(e, 2));
                    (d = N(b, Bx, 6)) && (c['https://googleads.g.doubleclick.net'] = d.toJSON());
                    this.D.j({
                        seller: 'https://pubads.g.doubleclick.net',
                        decisionLogicUrl: xf(b, 1),
                        trustedScoringSignalsUrl: xf(b, 2),
                        interestGroupBuyers: K(b, 3),
                        additionalBids: [],
                        auctionSignals: JSON.parse(xf(b, 4) || '{}'),
                        sellerSignals: (null === (a = N(b, Dx, 5)) || void 0 === a ? void 0 : a.wa()) || [],
                        perBuyerSignals: c
                    });
                } else
                    Gt(this.D);
            };
            uE.prototype.C = function () {
                Gt(this.D);
            };
            var vE = navigator, wE = function (a, b, c) {
                    Y.call(this, 882);
                    this.D = U(this);
                    this.B = W(this, a);
                    this.A = W(this, b);
                    this.l = W(this, c);
                };
            _.P(wE, Y);
            wE.prototype.j = function () {
                var a;
                return z(this, function c() {
                    var d = this, e;
                    return A(c, function (f) {
                        if (1 == f.j)
                            return d.A.value ? B(f, null === (a = vE.runAdAuction) || void 0 === a ? void 0 : a.call(vE, d.A.value), 2) : (d.D.m(d.l.value), f.return());
                        if (e = f.m)
                            d.D.j({
                                kind: 2,
                                te: e
                            });
                        else {
                            var g, h, k = null === (h = null === (g = d.B.value) || void 0 === g ? void 0 : N(g, Dx, 5)) || void 0 === h ? void 0 : xf(h, 2);
                            k && gi('https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner&qqid=' + encodeURIComponent(k));
                            d.D.m(d.l.value);
                        }
                        Bi(f);
                    });
                });
            };
            wE.prototype.C = function () {
                this.D.m(this.l.value);
            };
            var xE = qi(['onmessage=function(e){var b=e.data.a;if(b>0){var t=performance.now();while(t+b>performance.now());}postMessage(b);};postMessage(-1)']), yE = xE;
            if (!Array.isArray(yE) || !Array.isArray(yE.raw) || 1 !== yE.length)
                throw new TypeError('safeScript is a template literal tag function that only accepts template literals without expressions. For example, safeScript`foo`;');
            var Xd = $a(yE[0]);
            var zE = function (a, b) {
                Y.call(this, 839);
                this.D = U(this);
                this.A = W(this, a);
                this.l = V(this, b);
            };
            _.P(zE, Y);
            zE.prototype.j = function () {
                var a, b, c;
                return z(this, function e() {
                    var f = this, g, h, k, l, m, n, p, t, w, E, H, G, Q, aa, da, va, Fa, eb, fb;
                    return A(e, function (Ma) {
                        if (1 == Ma.j) {
                            g = f;
                            if (_.v(xp) || !Jt(f.A))
                                return Gt(f.D), Ma.return();
                            h = f.A.value;
                            k = new yy(h);
                            l = N(h, ix, 3);
                            m = oh(l);
                            n = [];
                            p = null !== (a = null === l || void 0 === l ? void 0 : jh(l, 8)) && void 0 !== a ? a : 0;
                            t = null !== (b = null === l || void 0 === l ? void 0 : jh(l, 6)) && void 0 !== b ? b : 0;
                            w = null !== (c = null === l || void 0 === l ? void 0 : jh(l, 9)) && void 0 !== c ? c : 0;
                            E = null === l || void 0 === l ? void 0 : jh(l, 7);
                            H = null === l || void 0 === l ? void 0 : kl(l, 10);
                            G = !H || !kd(f.l.value) || !ih(f.l.value.getBoundingClientRect());
                            H && uc('gpt_td_worker_hidden_experiment', function (ab) {
                                r(ab, 'is_hidden', G);
                            }, {});
                            if (!(0 <= t && E) || Qj()) {
                                n = 1 === p ? Wd(k, m, Dy) : Wd(k, m, Cy);
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
                                Fa.ab = new Worker(kb(aa), void 0), Q.push(Fa.ab), da.push(new C.Promise(function (ab) {
                                    return function (yc) {
                                        var Ub = (0, J.M)(vv(g, g.id, ab.ab, 'message', function (Ta) {
                                            if (0 <= Ta.data) {
                                                Ta = _.I(m);
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
                                r(ab, 'timeout_ms', E);
                            }, {});
                            fb = performance.now();
                            return B(Ma, C.Promise.race([
                                C.Promise.all(da),
                                Pm(E)
                            ]).then(function (ab) {
                                for (var yc = _.I(Q), Ub = yc.next(); !Ub.done; Ub = yc.next())
                                    Ub.value.terminate();
                                uc('timeout' === ab ? 'gpt_td_worker_timeout' : 'gpt_td_worker_time', function (Ta) {
                                    r(Ta, 'wait_ms', t);
                                    r(Ta, 'timeout_ms', E);
                                    r(Ta, 'duration_ms', Math.round(performance.now() - fb));
                                }, {});
                            }), 2);
                        }
                        f.D.j(n);
                        Bi(Ma);
                    });
                });
            };
            zE.prototype.C = function () {
                Gt(this.D);
            };
            var AE = function (a, b) {
                var c = this;
                this.slotId = a;
                this.la = b;
                this.j = null;
                this.m = _.bj(function () {
                    c.la.dispatchEvent('impressionViewable', 715, new lw(c.slotId, 'publisher_ads'));
                });
                this.o = cj(function () {
                    return void c.la.dispatchEvent('slotVisibilityChanged', 716, new mw(c.slotId, 'publisher_ads', (0, J.M)(c.j)));
                }, 200);
            };
            var CE = function (a, b) {
                Y.call(this, 804);
                this.Ba = b;
                this.A = [];
                this.metadata = {
                    yf: BE(this, function (c) {
                        return K(c, 4);
                    }),
                    mb: BE(this, function (c) {
                        return K(c, 6);
                    }),
                    Va: BE(this, function (c) {
                        return K(c, 7);
                    }),
                    Ef: BE(this, function (c) {
                        return y(c, 8);
                    }),
                    Hd: BE(this, function (c) {
                        return K(c, 10);
                    }),
                    zf: BE(this, function (c) {
                        return K(c, 15);
                    }),
                    zd: BE(this, function (c) {
                        return K(c, 34);
                    }),
                    hd: BE(this, function (c) {
                        return N(c, bx, 43);
                    }),
                    xd: BE(this, function (c) {
                        return N(c, Jx, 41);
                    }),
                    Pd: BE(this, function (c) {
                        return y(c, 9);
                    }),
                    xe: BE(this, function (c) {
                        return y(c, 12);
                    }),
                    jd: BE(this, function (c) {
                        return N(c, Fs, 50);
                    }),
                    Id: BE(this, function (c) {
                        return N(c, Rw, 48);
                    }),
                    Ed: BE(this, function (c) {
                        return N(c, Pw, 39);
                    }),
                    Cb: BE(this, function (c) {
                        return K(c, 36);
                    }),
                    ye: BE(this, function (c) {
                        return y(c, 13);
                    }),
                    Od: BE(this, function (c) {
                        return y(c, 3);
                    }),
                    we: BE(this, function (c) {
                        return K(c, 49);
                    }),
                    Be: BE(this, function (c) {
                        return K(c, 29);
                    }),
                    Ce: BE(this, function (c) {
                        return K(c, 30);
                    }),
                    Ld: BE(this, function (c) {
                        return N(c, dx, 51);
                    }),
                    ze: BE(this, function (c) {
                        return y(c, 52);
                    }),
                    Fb: BE(this, function () {
                        return 'encrypted_url';
                    }),
                    Bd: BE(this, function (c) {
                        return (c = N(c, ax, 54)) ? M(c, Zw, 1).filter(function (d) {
                            K(d, 1) || $d(32, '');
                            return !!K(d, 1);
                        }).map(function (d) {
                            var e = K(d, 2);
                            return {
                                ya: (0, J.M)(K(d, 1)),
                                Wd: e && (_.u(e, 'startsWith').call(e, window.location.protocol) || _.u(e, 'startsWith').call(e, 'data:') && 40 >= e.length) ? db(e) : void 0
                            };
                        }) : [];
                    }),
                    Df: BE(this, function (c) {
                        return K(c, 23);
                    }),
                    xf: BE(this, function (c) {
                        return M(c, Gs, 14);
                    }),
                    Gf: BE(this, function (c) {
                        return y(c, 11);
                    }),
                    Ff: BE(this, function (c) {
                        return K(c, 33);
                    }),
                    sf: BE(this, function (c) {
                        return K(c, 27);
                    }),
                    pa: U(this),
                    ve: BE(this, function (c) {
                        return N(c, yx, 55);
                    }),
                    ue: BE(this, function (c) {
                        return N(c, Fx, 58);
                    }),
                    Ee: BE(this, function (c) {
                        var d, e;
                        return null !== (e = null === (d = N(c, cx, 56)) || void 0 === d ? void 0 : K(d, 1)) && void 0 !== e ? e : null;
                    }),
                    ee: BE(this, function (c) {
                        var d;
                        return null !== (d = M(c, ex, 60)) && void 0 !== d ? d : [];
                    })
                };
                this.l = V(this, a);
            };
            _.P(CE, Y);
            var BE = function (a, b) {
                var c = U(a);
                a.A.push({
                    D: c,
                    Cd: b
                });
                return c;
            };
            CE.prototype.j = function () {
                for (var a = _.I(this.A), b = a.next(); !b.done; b = a.next()) {
                    b = b.value;
                    var c = b.Cd;
                    b.D.m(c(this.l.value));
                }
                0 === this.Ba.kind || 1 === this.Ba.kind && this.Ba.url ? this.metadata.pa.j(this.Ba) : this.metadata.pa.j({
                    kind: 0,
                    ta: K(this.l.value, 4) || ''
                });
            };
            var DE = function (a, b) {
                Y.call(this, 822);
                this.slotId = a;
                this.l = Nt(this);
                this.A = V(this, b);
            };
            _.P(DE, Y);
            DE.prototype.j = function () {
                var a, b = null !== (a = K(this.A.value, 23)) && void 0 !== a ? a : [], c = _.O(Fv);
                b = _.I(b);
                for (var d = b.next(); !d.done; d = b.next()) {
                    d = d.value;
                    Gv(c, d);
                    var e = this.slotId;
                    c.j[d] = c.j[d] || new C.Set();
                    c.j[d].add(e);
                }
                this.l.notify();
            };
            var EE = function (a, b) {
                Y.call(this, 803);
                this.l = a;
                this.slotId = b;
                this.D = U(this);
            };
            _.P(EE, Y);
            EE.prototype.j = function () {
                var a, b = JSON.parse(this.l), c = b ? Ze(b, Zi) : void 0;
                if (!c)
                    throw Error('missing ad unit path');
                if (null === b || void 0 === b || !b[c])
                    throw Error('invalid ad unit path: ' + c);
                b = b[c];
                if (!Array.isArray(b))
                    throw Error('dictionary not an array: ' + this.l);
                b = new Ix(b.slice());
                c = _.I(null !== (a = K(b, 27)) && void 0 !== a ? a : []);
                for (var d = c.next(); !d.done; d = c.next())
                    d = d.value, _.O(Aq).m(d);
                _.O(Aq).j(4);
                this.slotId.dispatchEvent(ar, 800, b);
                this.D.j(b);
            };
            var FE = function (a, b, c, d) {
                Y.call(this, 823);
                this.slotId = a;
                this.N = b;
                this.T = c;
                this.l = Nt(this);
                this.A = V(this, d);
            };
            _.P(FE, Y);
            FE.prototype.j = function () {
                var a = this, b, c = this.N.P[this.slotId.j];
                try {
                    if (c) {
                        var d = null !== (b = N(this.A.value, Fs, 50)) && void 0 !== b ? b : null;
                        Uv(c, d, !!y(this.A.value, 11)) && (_.pu(this.T, this.slotId), Tv(d) && lu(this.T, this.slotId, function () {
                            _.qu(a.T, a.slotId);
                        }));
                    }
                } finally {
                    this.l.notify();
                }
            };
            var GE = function (a, b, c) {
                Y.call(this, 821);
                this.ea = a;
                this.A = b;
                this.l = Nt(this);
                this.B = V(this, c);
            };
            _.P(GE, Y);
            GE.prototype.j = function () {
                var a, b = null === (a = M(this.B.value, Gs, 14)) || void 0 === a ? void 0 : a[0];
                b && qt(this.A, b, this.ea);
                this.l.notify();
            };
            var HE = function () {
                }, IE = function (a, b, c, d, e) {
                    return z(a, function g() {
                        var h, k, l, m, n;
                        return A(g, function (p) {
                            return 1 == p.j ? (h = new le(), k = new pD(b), X(h, k), l = new wD(d.P, k.A), X(h, l), m = new uD(c, !!y(d.O, 6) || _.v(co), e, l.l), X(h, m), n = new xD(c, d, document, l.A), X(h, n), ne(h), B(p, n.l, 2)) : p.return(m.l.promise);
                        });
                    });
                }, JE = function (a, b, c, d, e) {
                    var f = document;
                    return z(a, function h() {
                        var k, l;
                        return A(h, function (m) {
                            k = new le();
                            l = new mD(c, window, b, d, f, e);
                            X(k, l);
                            ne(k);
                            return m.return(l.l.promise);
                        });
                    });
                }, KE = function (a, b, c, d, e, f, g, h, k, l) {
                    var m = new le(), n = new Ft();
                    n.j(e);
                    var p = new tD(window);
                    X(m, p);
                    a = new qD(c, a, h, f, Lc(), e, window);
                    X(m, a);
                    var t = new yD(window);
                    X(m, t);
                    var w = new rD(b);
                    X(m, w);
                    e = new zD(!!y(e, 5));
                    X(m, e);
                    b = new sD(c, h, b, g, f, k, l, d, n, p.l, t.D, a.A, w.D, e.D);
                    X(m, b);
                    ne(m);
                    return b.A.promise;
                }, LE = function (a, b, c, d, e, f, g) {
                    return z(a, function k() {
                        var l, m, n, p, t, w, E;
                        return A(k, function (H) {
                            if (1 == H.j)
                                return l = new le(), m = new EE(c, b), X(l, m), n = [], _.v(yo) && (p = new GE(f, g, m.D), X(l, p), t = new DE(b, m.D), X(l, t), w = new FE(b, e, d, m.D), X(l, w), n = [
                                    p.l.promise,
                                    t.l.promise,
                                    w.l.promise
                                ]), ne(l), B(H, m.D.promise, 2);
                            if (3 != H.j)
                                return E = H.m, n.length ? H = B(H, C.Promise.all(n), 3) : (H.j = 3, H = void 0), H;
                            l.za();
                            return H.return(E);
                        });
                    });
                };
            var ME = function () {
                    this.j = new C.Map();
                }, NE = function (a, b) {
                    var c;
                    b && (null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.za(), a.j.delete(b));
                }, PE = function (a, b, c, d, e, f, g, h, k, l, m) {
                    NE(a, b);
                    Yq(b, dr, OE);
                    var n = new le(), p = Js(!0, window), t = e.O, w = e.P[b.j], E = new PD(window);
                    X(n, E);
                    var H = new Ft();
                    H.j(f);
                    f = new CE(H, g);
                    X(n, f);
                    var G = f.metadata, Q = G.Hd, aa = G.zd;
                    g = G.hd;
                    H = G.xd;
                    var da = G.Pd, va = G.xe, Fa = G.jd, eb = G.Id, fb = G.Ed, Ma = G.Cb, ab = G.ye, yc = G.Od, Ub = G.we, Ta = G.Be, Fb = G.Ce, Sh = G.Ld, Vb = G.ze, Zh = G.Fb, ub = G.Bd, $h = G.ve, Ae = G.ue;
                    f = G.ee;
                    G = new KD(w, G.mb, G.Va, G.pa, G.Ee);
                    X(n, G);
                    var Be = new Ft();
                    Be.j(k);
                    var vb = new Lt();
                    vb.notify();
                    Be = new SC(window.top, Be, vb);
                    X(n, Be);
                    ub = new RD(Lb(b.getAdUnitPath()), ub, Be.D);
                    X(n, ub);
                    vb = new YD();
                    X(n, vb);
                    var zc = new MD(ud(w), p.height, fb, G.mb);
                    X(n, zc);
                    ub = new pE(b, fd(b, h), b.j, Wv(b), h, ud(w), c, G.Va, zc.D);
                    X(n, ub);
                    var Hu = new iB(G.pa, g, H, da, va);
                    X(n, Hu);
                    va = new iE(t, w, window, g, H, va);
                    X(n, va);
                    var Wm = new aE(N(t, Vu, 5), Ta);
                    X(n, Wm);
                    Ta = new lE(b.getAdUnitPath(), w, p.width, window, Ma, G.Va, zc.D, Hu.pa, ub.D);
                    X(n, Ta);
                    Ma = new ND(b, t, w, ud(w), h, c, ub.D, va.D, Ta.A, Q);
                    X(n, Ma);
                    zc = new sE(Ma.D);
                    X(n, zc);
                    zc = new eE(b, p, c, vb.D, zc.D, Wm.l);
                    X(n, zc);
                    vb = new QD(window, ub.D);
                    X(n, vb);
                    Fb = new bE(zc.D, Ma.D, Fb, Wm.l);
                    X(n, Fb);
                    p = new ID(h, b, w, p, Q, ub.D, Ma.D, Ta.A, Ta.Cb, vb.D, aa);
                    X(n, p);
                    vb = new uE(Ae);
                    X(n, vb);
                    Ae = new wE(Ae, vb.D, Ta.pa);
                    X(n, Ae);
                    va = new hE(va.D, Ae.D);
                    X(n, va);
                    ab = new kE(t, w, va.D, g, da, ab);
                    X(n, ab);
                    Zh = new tE(window, Zh, E.D);
                    X(n, Zh);
                    l = new jE(b, e, c, k, l, da, Vb);
                    X(n, l);
                    $h = new zE($h, Ma.D);
                    X(n, $h);
                    vb = new TD(h);
                    X(n, vb);
                    k = new EC(ud(w), fb, eb);
                    X(n, k);
                    l = new FD(b, c, e, m, window, Ae.D, l.D, Fb.D, ub.D, Ma.D, Ta.A, va.D, H, aa, Q, ab.D, da, yc, Ub, Vb, p.D, Zh.D, $h.D, vb.D, k.D, G.l);
                    X(n, l);
                    fb = new zC(c, ud(w), b, window, fb, l.l, ub.D, k.D);
                    X(n, fb);
                    e = new BC(b, ud(w), (0, J.M)(e.Ua), eb, l.l, ub.D, Be.D, k.D);
                    X(n, e);
                    e = new gB(b, window, g, l.l, l.A);
                    X(n, e);
                    e = new JD(window, b, Ad(), Fa, l.l);
                    X(n, e);
                    w = new PC(b, ud(w), m, window, l.l, ub.D);
                    X(n, w);
                    var ai = new AE(b, m);
                    w = function (cH, Ce) {
                        cH && ai.m();
                        void 0 === Ce || isNaN(Ce) || (Ce = Math.floor(Ce), ai.j !== Ce && (ai.j = Ce, ai.o()));
                    };
                    h = new VD(b, l.l, h, m);
                    X(n, h);
                    d = new dE(su(c, b), d, g, l.l, w);
                    X(n, d);
                    c = new HD(su(c, b), window.top, l.l, E.D);
                    X(n, c);
                    c = new cB(b, aa, Q, H, g, Ub, l.l, Ma.D, l.A);
                    X(n, c);
                    _.Uq(n, new jB(w, b, H, g));
                    c = new UD(window, Sh, l.l, Ma.D, ub.D);
                    X(n, c);
                    X(n, new gE(f, rh(), t));
                    a.j.set(b, n);
                    _.Xg(b, function () {
                        return void NE(a, b);
                    });
                    ne(n);
                }, OE = _.bj(function () {
                    return void $v('gpt-first-ad-render');
                });
            var QE = function (a, b, c) {
                    const $___old_79e7cb6d7020c4bb = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_6260d186c99ab641 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                    try {
                        if ($___old_79e7cb6d7020c4bb)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_8520a5cab3fcb785.XMLHttpRequest));
                        if ($___old_6260d186c99ab641)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_8520a5cab3fcb785.XMLHttpRequest));
                        return function () {
                            this.url = a;
                            this.m = b;
                            this.withCredentials = c;
                            this.l = 0;
                            this.o = !1;
                            this.j = new XMLHttpRequest();
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_79e7cb6d7020c4bb)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_79e7cb6d7020c4bb));
                        if ($___old_6260d186c99ab641)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_6260d186c99ab641));
                    }
                }, TE = function (a) {
                    a.j.open('GET', a.url);
                    a.j.withCredentials = a.withCredentials;
                    LA(a.j);
                    a.j.onreadystatechange = function () {
                        RE(a, !1);
                    };
                    a.j.onload = function () {
                        RE(a, !0);
                    };
                    a.j.onerror = function () {
                        SE(a.m, Error('XHR error'));
                    };
                    a.j.send();
                }, RE = function (a, b) {
                    try {
                        if (3 === a.j.readyState || 4 === a.j.readyState)
                            if (300 <= a.j.status)
                                a.o || SE(a.m, Error('xhr_err-' + a.j.status)), a.o = !0;
                            else {
                                var c = a.j.responseText.substr(a.l);
                                if (c) {
                                    var d = a.m;
                                    if (c)
                                        if (1 !== d.state && 2 !== d.state)
                                            SE(d, Error('state err: (' + ([
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
                                    1 !== l.state || l.j ? SE(l, Error('state err (' + ([
                                        l.state,
                                        l.j.length
                                    ].join() + ')'))) : (l.state = 3, l.l());
                                }
                            }
                    } catch (m) {
                        SE(a.m, m);
                    }
                }, UE = function (a, b, c) {
                    TE(new QE(a, b, void 0 === c ? !0 : c));
                };
            var VE = function (a, b, c) {
                    this.G = a;
                    this.C = b;
                    this.l = c;
                    this.m = '';
                    this.o = -1;
                    this.state = 1;
                    this.j = '';
                }, SE = function (a, b) {
                    a.state = 4;
                    try {
                        a.C(b);
                    } catch (c) {
                    }
                };
            var WE = function (a, b) {
                    a.length && (a = a[0], jq(Nb.L(), '3', K(b.P[a.j], 20)));
                }, XE = function (a) {
                    a = a instanceof Error ? a : Error();
                    a.message = a.message || 'strm_err';
                    $b(289, a, !0);
                }, YE = function (a, b) {
                    if (_.v(No))
                        return !1;
                    a = y(a, 11);
                    null == a && (a = y(b, 10));
                    return !!a;
                }, ZE = function (a) {
                    var b = rh(), c = a.replace('googletag.', '');
                    return new C.Promise(function (d) {
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
                }, $E = function (a) {
                    this.j = ju.L();
                    this.m = new nt();
                    this.X = a;
                    this.J = _.O(Fv);
                    this.o = new C.Map();
                    this.B = rg(this.B);
                    this.l = sc(291, this.l);
                    this.K = Rb('google_nofetch');
                    this.R = Rb('google_norender');
                    this.A = new XA();
                    this.$ = 0;
                    this.U = {};
                    this.G = {};
                    this.F = new ME();
                    this.C = new HE();
                    this.V = _.bj(function () {
                        return void $v('gpt-first-ad-request');
                    });
                }, aF = function (a, b, c, d, e) {
                    if (e = e.P[b.j])
                        null != K(d, 23) && K(d, 23).forEach(function (f) {
                            Gv(a.J, f);
                            var g = a.J;
                            g.j[f] = g.j[f] || new C.Set();
                            g.j[f].add(b);
                        }), M(d, Gs, 14).length && qt(a.m, M(d, Gs, 14)[0], c), Uv(e, N(d, Fs, 50), !!y(d, 11)) && (_.pu(a.j, b), Tv(N(d, Fs, 50)) && lu(a.j, b, function () {
                            _.qu(a.j, b);
                        }));
                };
            $E.prototype.B = function (a, b) {
                var c = this;
                b = void 0 === b ? !1 : b;
                return _.F.IntersectionObserver ? new _.F.IntersectionObserver(function (d, e) {
                    return c.l(d, e, b);
                }, { rootMargin: a }) : new Mg(function (d, e) {
                    return c.l(d, e, b);
                }, { rootMargin: a });
            };
            $E.prototype.l = function (a, b, c) {
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
            var bF = function (a, b, c, d, e, f) {
                    var g, h, k, l, m, n, p, t;
                    Ii(function (w) {
                        if (1 == w.j)
                            return g = _.Nl(document, 'LINK'), (/^https:/.test(a) || _.bc(257)) && ak(g, new Ij(a, Hj), 'webbundle'), g.resources.add(qj(c.j)), g.crossOrigin = b ? 'use-credentials' : 'anonymous', h = document.createElement('script'), Gd(h, c.j), document.head.appendChild(g), document.head.appendChild(h), B(w, ZE(c.o), 2);
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
                }, cF = function (a, b, c, d) {
                    var e = new $A();
                    a = ++a.$;
                    e.X = a;
                    _.v(so) || (e.m = d);
                    if ('wbn' === d) {
                        d = Array(36);
                        for (var f = 0, g, h = 0; 36 > h; h++)
                            8 == h || 13 == h || 18 == h || 23 == h ? d[h] = '-' : 14 == h ? d[h] = '4' : (2 >= f && (f = 33554432 + 16777216 * Math.random() | 0), g = f & 15, f >>= 4, d[h] = ED[19 == h ? g & 3 | 8 : g]);
                        e.j = rj('urn:uuid:' + d.join('').toLowerCase());
                        e.o = 'googletag.wbn' + a;
                    }
                    e.Ea = c.Ea;
                    e.Oa = c.Oa || NaN;
                    e.Na = c.Na || NaN;
                    e.Y = b;
                    return e;
                }, dF = function (a, b) {
                    var c = !_.v(Zf);
                    aB(b, Db(), a.A.getOseId(), ru(a.j, b.Y), c ? bz() : '', c ? cz() : '', c ? dz() : '');
                }, gF = function (a, b, c, d, e) {
                    return eF(a, b, d).then(sc(750, function () {
                        return fF(a, b, c, d, e);
                    }));
                }, eF = function (a, b, c) {
                    b = b.Y;
                    c = N(c.O, Vu, 5) || new Vu();
                    c = Fg(c);
                    if (null == c || !b.every(function (g) {
                            return kd(fd(g));
                        }))
                        return C.Promise.resolve();
                    c = a.B(c + '%');
                    var d = new Ge(), e = {};
                    b = _.I(b);
                    for (var f = b.next(); !f.done; e = {
                            Ya: e.Ya,
                            zb: e.zb
                        }, f = b.next())
                        f = f.value, e.zb = f.j, e.Ya = fd(f), e.Ya && (a.o.set(e.zb, {
                            $b: function () {
                                return void d.resolve();
                            },
                            be: c
                        }), c.observe(e.Ya), mu(a.j, f, function (g) {
                            return function () {
                                hF(a, g.Ya, g.zb);
                            };
                        }(e)));
                    return d.promise;
                }, fF = function (a, b, c, d, e) {
                    var f = b.Y;
                    if (f.length)
                        return a.o.get(f[0].j) && f.forEach(function (g) {
                            var h = g.j;
                            g = fd(g);
                            hF(a, g, h);
                        }), iF(a, b, c, d, e);
                }, iF = function (a, b, c, d, e) {
                    return KE(b.Y, a.j, b, _.v(so) ? e : b.m, c, d, a.m, !!y(d.O, 6) || _.v(co), a.A.getOseId(), ru(a.j, b.Y)).then(function (f) {
                        f && jF(a, f, b, c, d, e);
                    });
                }, jF = function (a, b, c, d, e, f) {
                    kF(a, b, c, d, e, f);
                    dv(Th.L(), c.Y);
                    'wbn' !== f && RC(_.O(QC), window, Qv(a.m, d));
                    var g;
                    c.Y.some(function (h) {
                        return (L = [
                            2,
                            3,
                            5
                        ], _.u(L, 'includes')).call(L, null == (g = e.P[h.j]) ? void 0 : ud(g));
                    }) && _.wC.L().load(_.DC);
                };
            $E.prototype.refresh = function (a, b, c) {
                var d = this;
                IE(this.C, a, this.j, c, this.K).then(sc(872, function (e) {
                    if (null != e && e.length) {
                        e = _.I(e);
                        for (var f = e.next(); !f.done; f = e.next())
                            JE(d.C, f.value, c, d.m, d.j).then(sc(907, function (g) {
                                return lF(d, g, b, c);
                            }));
                    }
                }));
            };
            var lF = function (a, b, c, d) {
                    if (b) {
                        var e = b.Y;
                        b = b.ea;
                        var f = window.isSecureContext && _.v(zp) ? 'wbn' : 'ldjh';
                        c = cF(a, e, c, f);
                        var g = d.O, h = d.P;
                        _.v(xo) ? iF(a, c, b, d, f).then(sc(751, function () {
                            for (var k = _.I(e), l = k.next(); !l.done; l = k.next())
                                l = l.value, mF(a, l, g, h[l.j]);
                        })) : nF(a, c, b, d, f);
                    }
                }, oF = function (a, b, c, d) {
                    var e = void 0 === e ? window : e;
                    for (var f = _.I(b), g = f.next(); !g.done; g = f.next())
                        NE(a.F, g.value);
                    b = _.I(b);
                    for (g = b.next(); !g.done; g = b.next())
                        g = g.value, f = d[g.j], YE(f, c) && vg(g, e.document, f, c), tu(a.j, g);
                }, hF = function (a, b, c) {
                    if (b) {
                        var d = a.o.get(c);
                        d && (d.be.unobserve(b), a.o.delete(c));
                    }
                }, nF = function (a, b, c, d, e) {
                    var f = document;
                    if (b.Y.length) {
                        for (var g = _.I(b.Y), h = g.next(); !h.done; h = g.next())
                            rB(f, h.value, d);
                        gF(a, b, c, d, e).then(sc(751, function () {
                            for (var k = _.I(b.Y), l = k.next(); !l.done; l = k.next())
                                l = l.value, mF(a, l, d.O, d.P[l.j]);
                        }));
                    } else
                        C.Promise.resolve();
                }, mF = function (a, b, c, d) {
                    var e = void 0 === e ? window : e;
                    YE(d, c) && !a.j.Qa(b) && vg(b, e.document, d, c);
                }, kF = function (a, b, c, d, e, f) {
                    var g = void 0 === g ? _.F.document : g;
                    var h = void 0 === h ? XE : h;
                    var k = c.Y, l = c.X;
                    a.G[l] = k.slice();
                    b = Ob(b);
                    WE(k, e);
                    var m, n, p = !(null != (n = null == (m = ag(e.O)) ? void 0 : y(m, 9)) && n) && !!y(d, 5);
                    m = sc(646, function (t, w, E) {
                        var H, G = function () {
                                return pF(a, l, d, e, t, w, E, null != (H = c.A) ? H : '', g);
                            };
                        0 < t && _.v(Wn) ? setTimeout(G, 0) : G();
                    });
                    n = sc(647, function () {
                        var t = function () {
                            for (var w = a.G[l] || [], E = 0; E < w.length; ++E)
                                if (w[E]) {
                                    var H = new Ix();
                                    H = D(H, 8, !0);
                                    H = '{"empty":' + ql(H) + '}';
                                    pF(a, l, d, e, E, H, {
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
                    _.v(so) || (f = c.m);
                    'wbn' === f ? bF(b, p, c, m, h, n) : UE(b, new VE(m, h, n), p);
                    a.V();
                    f = _.I(k);
                    for (k = f.next(); !k.done; k = f.next())
                        k = k.value, h = K(e.P[k.j], 20), p = sc(643, qF(a, k, b, e)), k.dispatchEvent(cr, 808, {
                            rd: p,
                            ke: h
                        }), a.X.dispatchEvent('slotRequested', 705, new uw(k, 'publisher_ads'));
                }, qF = function (a, b, c, d) {
                    if (y(d.O, 6) || _.v(co)) {
                        var e = cF(a, [b], { Ea: 1 }, 'ldjh');
                        dF(a, e);
                        var f = new xB([b], _.v(co), a.j, a.m, e, new mt(), d, 'ldjh', !0);
                        return gd(function () {
                            return Ob(AB(f));
                        });
                    }
                    return function () {
                        return c;
                    };
                }, pF = function (a, b, c, d, e, f, g, h, k) {
                    k = void 0 === k ? document : k;
                    var l, m, n, p, t, w;
                    return Ii(function (E) {
                        if (1 == E.j) {
                            l = a.G[b] || [];
                            m = l[e];
                            if (!m)
                                return Zb(646, Error('missing slot')), E.return();
                            l[e] = null;
                            n = K(d.P[m.j], 20);
                            a.U[b] || (a.U[b] = !0, jq(Nb.L(), '4', n));
                            return B(E, LE(a.C, m, f, a.j, d, c, a.m), 2);
                        }
                        p = E.m;
                        if (!p)
                            return Zb(646, Error('invalid response: ' + f)), E.return();
                        _.v(yo) || aF(a, m, c, p, d);
                        if (m.m)
                            return E.return();
                        if (t = y(p, 8) || a.R) {
                            var H = k, G = null != (w = K(p, 34)) ? w : '', Q = fd(m, H);
                            Q && Ke(Q, _.F, G, !0);
                            jq(Nb.L(), '5', K(d.P[m.j], 20));
                            m.dispatchEvent(br, 801, {
                                Ec: null,
                                isBackfill: !1
                            });
                            G = _.v(po);
                            Q = d.P[m.j];
                            var aa = d.O;
                            if (_.ou(a.j, m)) {
                                if (G) {
                                    var da = {};
                                    da[m.j] = Q;
                                    oF(a, [m], aa, da);
                                }
                                if (G || !Zv(m, H)) {
                                    var va;
                                    (null != (va = y(Q, 10)) ? va : y(aa, 11)) && !_.v(Mo) && vg(m, H, Q, aa);
                                }
                            }
                            m.dispatchEvent(dr, 825, {
                                isEmpty: !0,
                                slotContentChanged: G
                            });
                        } else
                            PE(a.F, m, a.j, a.A, d, p, g, k, c, a.m, a.X);
                        Bi(E);
                    });
                };
            var rF = function (a) {
                    this.pubads = a;
                    this.j = new C.Set();
                    this.m = {};
                }, sF = function (a, b, c) {
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
            rF.prototype.display = function (a, b) {
                var c = sF(this, a, b);
                tF(this.pubads, c, a, { Ea: 1 });
                a = b.getAdUnitPath();
                if ((b = this.m[a]) && !_.v(ao)) {
                    b = _.I(b);
                    for (c = b.next(); !c.done; c = b.next())
                        c = c.value, tF(this.pubads, c.Y, c.N, c.fe);
                    delete this.m[a];
                }
            };
            rF.prototype.refresh = function (a, b, c) {
                var d = this, e = b[0], f, g = null != (f = null == e ? void 0 : e.j) ? f : '';
                if (_.v(ao))
                    uF(this.pubads, Wr(g), e), zw(this.pubads, sc(690, function () {
                        for (var h = {}, k = _.I(b), l = k.next(); !l.done; h = { Za: h.Za }, l = k.next())
                            h.Za = l.value, d.j.add(h.Za), _.Xg(h.Za, function (m) {
                                return function () {
                                    return void d.j.delete(m.Za);
                                };
                            }(h));
                        tF(d.pubads, b, a, c);
                    }));
                else if (this.pubads.o) {
                    e = {};
                    f = _.I(b);
                    for (g = f.next(); !g.done; e = { $a: e.$a }, g = f.next())
                        e.$a = g.value, this.j.add(e.$a), _.Xg(e.$a, function (h) {
                            return function () {
                                return void d.j.delete(h.$a);
                            };
                        }(e));
                    tF(this.pubads, b, a, c);
                } else
                    b.length && y(a.O, 6) ? (uF(this.pubads, Wr(g), e), e = e.getAdUnitPath(), f = this.m[e] || [], f.push({
                        Y: b,
                        N: a,
                        fe: c
                    }), this.m[e] = f) : uF(this.pubads, Ur(g), e);
            };
            var Kh = function () {
                xw.call(this);
                _.v(Rp) && new lC(this);
                this.B = new rF(this);
                this.A = new $E(this);
            };
            _.P(Kh, xw);
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
                yw(this);
                var g = Gh(a, b, e), h = g.slotId;
                g = g.Ma;
                h && g ? (f && !e && (f.id = h.j), this.Fa(h, g), D(g, 7, d), Dw(f || h.j)) : this.log.I(Hh('PubAdsService.display', [
                    a,
                    b,
                    c
                ]));
            };
            _.q.ic = function () {
                var a = this, b = Th.L().j;
                if (y(b, 6) || _.v(ip))
                    for (var c = _.I(this.j), d = c.next(); !d.done; d = c.next())
                        vF(this, d.value);
                wF(this, b);
                Yq(this, 'rewardedSlotClosed', function (e) {
                    var f = e.detail.slot;
                    e = _.u(a.j, 'find').call(a.j, function (g) {
                        return f === g.o;
                    });
                    oF(a.A, [e], Th.L().j, ef());
                });
                uh();
            };
            _.q.getName = function () {
                return 'publisher_ads';
            };
            _.q.Fa = function (a, b) {
                var c = this;
                y(b, 17) || vF(this, a);
                this.dispatchEvent(er, 724, {
                    xc: a.j,
                    P: b
                });
                Yq(a, dr, function (d) {
                    var e = d.detail;
                    d = e.size;
                    var f = e.slotContentChanged, g = e.isEmpty;
                    e = new kw(a, 'publisher_ads');
                    g && (e.isEmpty = g);
                    f && (e.slotContentChanged = f);
                    f = a.o.getResponseInformation();
                    d && f && (e.size = [
                        d.width,
                        d.height
                    ], e.sourceAgnosticCreativeId = f.sourceAgnosticCreativeId, e.sourceAgnosticLineItemId = f.sourceAgnosticLineItemId, e.isBackfill = f.isBackfill, e.creativeId = f.creativeId, e.lineItemId = f.lineItemId, e.creativeTemplateId = f.creativeTemplateId, e.advertiserId = f.advertiserId, e.campaignId = f.campaignId, e.yieldGroupIds = f.yieldGroupIds, e.companyIds = f.companyIds);
                    c.dispatchEvent('slotRenderEnded', 708, e);
                });
                Yq(a, ar, function () {
                    return void c.dispatchEvent('slotResponseReceived', 709, new vw(a, c.getName()));
                });
                Yq(a, Zq, function () {
                    var d = Th.L().j;
                    d = Nv(d, ef());
                    c.A.refresh([a], { Ea: 2 }, d);
                });
                xw.prototype.Fa.call(this, a, b);
            };
            _.q.uc = function (a, b) {
                yw(this);
                vF(this, b);
                this.log.info(Qr());
                var c = y(a.O, 6);
                if (c || !ju.L().Qa(b))
                    c && (c = fd(b, document)) && b.dispatchEvent($q, 778, c), y(a.O, 4) && mF(this.A, b, a.O, a.P[b.j]), this.B.display(a, b);
            };
            var vF = function (a, b) {
                    a.o && nu(ju.L(), b);
                }, xF = function (a, b, c) {
                    var d = void 0 === d ? document : d;
                    var e;
                    null != (e = c.P[b.j]) && D(e, 19, !0);
                    Yj(d, _.en('<div id="' + ck(b.j) + '"></div>'));
                    fd(b, d) ? (yw(a), nu(ju.L(), b), a.B.display(c, b)) : uc('gpt_pb_write', function (f) {
                        dc(f);
                    });
                };
            Kh.prototype.refresh = function (a, b, c) {
                var d = b ? yF(this, b) : this.j;
                if (!d.length)
                    return !1;
                if (_.v($n)) {
                    yw(this);
                    b = _.I(b);
                    for (var e = b.next(); !e.done; e = b.next())
                        e = e.value, this.Fa(e, a.P[e.j]);
                }
                this.B.refresh(a, d, c || { Ea: 2 });
                return !0;
            };
            var tF = function (a, b, c, d) {
                    a.log.info(Xr());
                    if (zF(a, b, d, c) && 1 !== d.Ea)
                        for (b = _.I(b), d = b.next(); !d.done; d = b.next())
                            d = d.value.j, a.dispatchEvent(fr, 725, {
                                xc: d,
                                P: c.P[d]
                            });
                }, zF = function (a, b, c, d) {
                    b = b.filter(function (e) {
                        return _.ou(ju.L(), e);
                    });
                    if (!b.length)
                        return null;
                    a.A.refresh(b, c, d);
                    return b;
                }, AF = function (a, b) {
                    return a.o ? {
                        vid: K(b, 22) || '',
                        cmsid: K(b, 23) || ''
                    } : null;
                }, wF = function (a, b) {
                    y(b, 21) && a.o && D(b, 29, Mm());
                }, BF = function (a, b, c, d) {
                    for (var e = _.I(b), f = e.next(); !f.done; f = e.next())
                        f = f.value, ku(ju.L(), f);
                    oF(a.A, b, c, d);
                }, CF = function (a, b, c, d) {
                    if (!a.o)
                        return a.log.I(Vr(), d[0]), !1;
                    var e = yF(a, d);
                    if (!e.length)
                        return a.log.I(Hh('PubAdsService.clear', [d].filter(function (f) {
                            return void 0 !== f;
                        }))), !1;
                    a.log.info(Yr());
                    BF(a, e, b, c);
                    return !0;
                }, yF = function (a, b) {
                    return b.filter(function (c, d) {
                        return c.m ? (a.log.I($r(String(d))), !1) : !0;
                    });
                };
            Kh.prototype.destroySlots = function (a, b) {
                a = xw.prototype.destroySlots.call(this, a, b);
                if (a.length && this.o) {
                    var c, d = null != (c = null == b ? void 0 : b.O) ? c : Th.L().j, e;
                    b = null != (e = null == b ? void 0 : b.P) ? e : ef();
                    BF(this, a, d, b);
                }
                return a;
            };
            var uF = function (a, b, c) {
                a.log.I(b, c);
            };
            var DF = function () {
                xw.apply(this, arguments);
            };
            _.P(DF, xw);
            DF.L = function () {
                throw Error('Must be overridden');
            };
            var yh = function () {
                DF.call(this);
                this.ads = new C.Map();
                this.A = {};
                this.La = !1;
                this.U = this.B = void 0;
                this.V = this.K = !1;
                _.O(bw).o = !0;
            };
            _.P(yh, DF);
            _.q = yh.prototype;
            _.q.set = function (a, b) {
                'string' === typeof a && a.length ? (this.A[a] = b, this.log.info(Lr(a, String(b), this.getName()))) : this.log.I(Hh('CompanionAdsService.set', [
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
                yw(this);
                b = Gh(a, b, c);
                a = b.slotId;
                b = b.Ma;
                this.Fa((0, J.M)(a), (0, J.M)(b));
                D(b, 7, d);
                Dw(a.j);
            };
            _.q.Fa = function (a, b) {
                var c = this;
                Yq(a, ar, function (d) {
                    y(d.detail, 11) && (EF(c, a).de = !0);
                });
                DF.prototype.Fa.call(this, a, b);
            };
            _.q.ic = function () {
                FF(this);
            };
            var GF = function (a) {
                    if (_.v(Zn) || !_.O(Kh).o)
                        return !1;
                    var b = _.O(Kh).j;
                    a = a.j;
                    return b.length !== a.length ? !1 : !a.some(function (c) {
                        return !_.u(b, 'includes').call(b, c);
                    });
                }, HF = function (a, b) {
                    (b = void 0 === b ? '' : b) && !a.V && uc('ima_sdk_v', function (d) {
                        a.V = !0;
                        r(d, 'v', b);
                    });
                    var c = Th.L().j;
                    return String(K(c, 26));
                }, IF = function (a, b) {
                    var c = Th.L().j, d = ef();
                    if (_.O(Kh).o) {
                        var e = { Ea: 3 };
                        a.B && (e.Na = a.B);
                        a.U && (e.Oa = a.U);
                        a = null !== b && void 0 !== b ? b : a.j;
                        c = Nv(c, d);
                        e.Na && 'number' !== typeof e.Na || e.Oa && 'number' !== typeof e.Oa || _.O(Kh).refresh(c, a, e);
                    } else
                        b && b[0] && a.log.error(Ur(b[0].j));
                }, JF = function (a, b) {
                    var c;
                    return _.O(Kh).o && !(null === (c = a.ads.get(b)) || void 0 === c || !c.de);
                }, KF = function (a, b) {
                    return a.j.filter(function (c) {
                        return _.u(b, 'includes').call(b, c.toString());
                    });
                };
            yh.prototype.getName = function () {
                return 'companion_ads';
            };
            var FF = function (a) {
                    _.v(Zn) || Bc(70, function () {
                        if (!a.K) {
                            var b = document;
                            a.log.info(Or('GPT CompanionAds'));
                            Yl(b, rj(kb(db('https://pagead2.googlesyndication.com/pagead/show_companion_ad.js')).toString()));
                            a.K = !0;
                        }
                    }, !0);
                }, MF = function (a, b) {
                    if (!a.o || JF(a, b))
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
                    var e = cv(Th.L(), b.j);
                    e && 1 === M(e, Wc, 5).length && Ff(M(e, Wc, 5)[0], 1) && Ff(M(e, Wc, 5)[0], 2) && (c = K(M(e, Wc, 5)[0], 1), d = K(M(e, Wc, 5)[0], 2));
                    LF(a, b, c, d);
                    return !0;
                };
            yh.prototype.uc = function (a, b) {
                _.v(Zn) || MF(this, b);
            };
            var NF = function (a, b, c) {
                    if (!_.v(Zn))
                        return b && c && 'string' === typeof c ? (EF(a, b).content = c, MF(a, b)) : !1;
                }, LF = function (a, b, c, d) {
                    b = new kw(b, a.getName());
                    null != c && null != d && (b.size = [
                        c,
                        d
                    ]);
                    a.dispatchEvent('slotRenderEnded', 67, b);
                }, EF = function (a, b) {
                    var c = a.ads.get(b);
                    c || (c = {}, a.ads.set(b, c), _.Xg(b, function () {
                        return a.ads.delete(b);
                    }));
                    return c;
                };
            Pi(yh);
            var OF = function () {
                xw.apply(this, arguments);
            };
            _.P(OF, xw);
            OF.L = function () {
                throw Error('Must be overridden');
            };
            var Bh = function () {
                OF.apply(this, arguments);
                this.A = new C.Map();
            };
            _.P(Bh, OF);
            Bh.prototype.getName = function () {
                return 'content';
            };
            Bh.prototype.display = function (a, b, c, d) {
                c = void 0 === c ? '' : c;
                d = void 0 === d ? '' : d;
                yw(this);
                b = Gh(a, b, c);
                a = b.slotId;
                b = b.Ma;
                this.Fa((0, J.M)(a), (0, J.M)(b));
                D(b, 7, d);
                Dw(a.j);
            };
            Bh.prototype.destroySlots = function (a) {
                a = OF.prototype.destroySlots.call(this, a);
                for (var b = _.I(a), c = b.next(); !c.done; c = b.next())
                    this.A.delete(c.value);
                return a;
            };
            var PF = function (a, b) {
                var c = a.A.get(b), d = fd(b);
                !(c && void 0 !== c.content && d && a.o) || c && c.Sc || (c.Sc = !0, zl(d, Ya(c.content)), uc('gpt_cont_svc', function (e) {
                    var f;
                    r(e, 'cl', String(null === (f = null === c || void 0 === c ? void 0 : c.content) || void 0 === f ? void 0 : f.length));
                    dc(e, [b.getAdUnitPath()]);
                }), a.dispatchEvent('slotRenderEnded', 819, new kw(b, a.getName())));
            };
            Bh.prototype.ic = function () {
            };
            Bh.prototype.uc = function (a, b) {
                PF(this, b);
            };
            var QF = function (a, b, c) {
                if (_.u(a.j, 'includes').call(a.j, b) && 'string' === typeof c && c.length) {
                    var d = a.A.get(b);
                    d ? d.content = c : a.A.set(b, {
                        content: c,
                        Sc: void 0
                    });
                    _.Xg(b, function () {
                        return void a.A.delete(b);
                    });
                    PF(a, b);
                }
            };
            Pi(Bh);
            var bi = function (a) {
                R.call(this, a);
            };
            _.P(bi, R);
            var RF = function () {
                    this.j = function () {
                    };
                }, SF = function () {
                    var a = _.O(bw);
                    _.O(RF).j(a);
                };
            var UF = function () {
                    var a = void 0, b = 2;
                    if (void 0 === a) {
                        var c = void 0 === c ? _.F : c;
                        a = c.ggeac || (c.ggeac = {});
                    }
                    b = void 0 === b ? 0 : b;
                    c = a;
                    var d = b;
                    d = void 0 === d ? 0 : d;
                    Bq(_.O(Aq), c, d);
                    TF(a, b);
                    b = a;
                    _.O(RF).j = zq(yq, b);
                    _.O(Cq).j();
                }, TF = function (a, b) {
                    var c = _.O(Cq);
                    c.m = function (d, e) {
                        return zq(uq, a, function () {
                            return !1;
                        })(d, e, b);
                    };
                    c.o = function (d, e) {
                        return zq(vq, a, function () {
                            return 0;
                        })(d, e, b);
                    };
                    c.l = function (d, e) {
                        return zq(wq, a, function () {
                            return '';
                        })(d, e, b);
                    };
                    c.G = function (d, e) {
                        return zq(xq, a, function () {
                            return [];
                        })(d, e, b);
                    };
                    c.j = function () {
                        zq(rq, a)(b);
                    };
                };
            var VF = kj('https://securepubads.g.doubleclick.net/');
            var WF = function (a) {
                this.push = x(76, function (b) {
                    return a.push.apply(a, arguments);
                });
            };
            _.P(WF, xu);
            $c(WF, 2);
            var XF = function (a) {
                var b = this;
                this.addEventListener = x(86, function (c, d) {
                    if ('function' !== typeof d)
                        return Lc().I(Hh('Service.addEventListener', [
                            c,
                            d
                        ])), b;
                    var e = xh(c);
                    if (!e)
                        return Lc().I(gs(c)), b;
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
                    for (var c = {}, d = _.I(a.j), e = d.next(); !e.done; e = d.next())
                        e = e.value, c[e.toString()] = e.o;
                    return c;
                });
                this.enable = x(87, function () {
                    return yw(a);
                }, !0);
                this.getName = x(575, function () {
                    return a.getName();
                });
            };
            _.P(XF, xu);
            var zh = function (a) {
                XF.call(this, a);
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
                    a.La && IF(a, KF(a, c));
                });
                this.isRoadblockingSupported = x(111, function () {
                    return GF(a);
                });
                this.refreshAllSlots = x(60, function () {
                    a.La && IF(a);
                });
                this.setVideoSession = x(61, function (c, d, e) {
                    a.B = d;
                    a.U = e;
                    'number' === typeof c && D(Th.L().j, 29, c);
                });
                this.getDisplayAdsCorrelator = x(62, function (c) {
                    return HF(a, void 0 === c ? '' : c);
                });
                this.getVideoStreamCorrelator = x(63, function () {
                    var c;
                    return null !== (c = K(Th.L().j, 29)) && void 0 !== c ? c : 0;
                });
                this.isSlotAPersistentRoadblock = x(64, function (c) {
                    var d = _.u(a.j, 'find').call(a.j, function (e) {
                        return e.o === c;
                    });
                    return !!d && JF(a, d);
                });
                this.onImplementationLoaded = x(65, function () {
                    a.log.info(Pr('GPT CompanionAds'));
                });
                this.fillSlot = x(66, function (c, d) {
                    var e = _.u(a.j, 'find').call(a.j, function (f) {
                        return f.o === c;
                    });
                    return !!e && NF(a, e, d);
                });
                this.slotRenderEnded = x(67, function (c, d, e) {
                    var f = _.u(a.j, 'find').call(a.j, function (g) {
                        return g.o === c;
                    });
                    return f && LF(a, f, d, e);
                });
                this.setRefreshUnfilledSlots = x(59, function (c) {
                    'boolean' === typeof c && (a.La = c);
                });
            };
            _.P(zh, XF);
            $c(zh, 3);
            var Ch = function (a) {
                XF.call(this, a);
                this.setContent = x(72, function (b, c) {
                    var d = _.u(a.j, 'find').call(a.j, function (e) {
                        return e.o === b;
                    });
                    return !!d && QF(a, d, c);
                });
                this.display = x(562, function (b, c, d, e) {
                    return a.display(b, c, void 0 === d ? '' : d, void 0 === e ? '' : e);
                });
            };
            _.P(Ch, XF);
            $c(Ch, 4);
            var YF = function () {
                var a = Lc();
                this.getAllEvents = x(563, function () {
                    return gD ? a.j.Jb().slice() : [];
                });
                this.getEventsBySlot = x(565, function (b) {
                    return gD ? rr(a, b).slice() : [];
                });
                this.getEventsByLevel = x(566, function (b) {
                    return gD ? sr(a, b).slice() : [];
                });
            };
            _.P(YF, xu);
            $c(YF, 5);
            var Ih = function (a, b) {
                Wq.call(this);
                this.j = a;
                this.o = b;
            };
            _.P(Ih, Wq);
            var Eh = function (a, b) {
                var c = this, d = Lc(), e = a.j, f = Th.L().j, g = cv(Th.L(), e.j);
                this.set = x(83, function (h, k) {
                    'page_url' === h && k && (h = [Bu(Au(new Jf(), h), [String(k)])], nl(g, 3, h));
                    return c;
                });
                this.get = x(84, function (h) {
                    if ('page_url' !== h)
                        return null;
                    var k;
                    return null == (k = (L = M(g, Jf, 3), _.u(L, 'find')).call(L, function (l) {
                        return Kf(l) === h;
                    })) ? void 0 : K(k, 2)[0];
                });
                this.setClickUrl = x(79, function (h) {
                    if ('string' !== typeof h)
                        return d.I(Hh('Slot.setClickUrl', [h]), e), c;
                    D(g, 7, h);
                    return c;
                });
                this.setTargeting = x(81, function (h, k) {
                    Mu(e, g, h, k, d);
                    return c;
                });
                this.updateTargetingFromMap = x(85, function (h) {
                    Nu(e, g, h, d);
                    return c;
                });
                this.display = x(78, function () {
                    xF(b, e, Nv(f, ef()));
                });
                this.setTagForChildDirectedTreatment = x(80, function (h) {
                    if (0 === h || 1 === h) {
                        var k = ag(f) || new bg();
                        D(k, 5, h);
                        Gb(f, 25, k);
                    }
                    return c;
                });
                this.setForceSafeFrame = x(567, function (h) {
                    if ('boolean' !== typeof h)
                        return d.I(Hh('PassbackSlot.setForceSafeFrame', [String(h)]), e), c;
                    D(g, 12, h);
                    return c;
                });
                this.setTagForUnderAgeOfConsent = x(448, function (h) {
                    if (0 === h || 1 === h) {
                        var k = ag(f) || new bg();
                        D(k, 6, h);
                        Gb(f, 25, k);
                    }
                    return c;
                });
            };
            _.P(Eh, xu);
            $c(Eh, 6);
            var ZF = function (a, b) {
                    var c = b.j;
                    return a.map(function (d) {
                        return _.u(c, 'find').call(c, function (e) {
                            return e.o === d;
                        });
                    }).filter(function (d) {
                        return !!d;
                    });
                }, $F = function (a) {
                    var b = _.O(bw), c = [];
                    a = _.I(a);
                    for (var d = a.next(); !d.done; d = a.next()) {
                        d = d.value;
                        b.G = d;
                        var e = _.O(Aq).j(9);
                        1 === e.length && (c.push(d), c.push(d + '-' + e[0]));
                    }
                    return c;
                }, aG = _.bj(function () {
                    return Em('google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.');
                }), bG = function () {
                    Object.defineProperty(window, 'google_DisableInitialLoad', {
                        get: function () {
                            aG();
                            return !0;
                        },
                        set: function () {
                            aG();
                        },
                        configurable: !0
                    });
                }, Lh = function (a) {
                    XF.call(this, a);
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
                                return c.I(ls(k.join())), b;
                            if (h)
                                return c.I(ms(k.join())), b;
                            k = $F(k);
                        }
                        h ? Bu(h, k) : (h = Bu(Au(new Jf(), g), k), Nf(d, 2, h, Jf));
                        c.info(es(g, k.join(), a.getName()));
                        return b;
                    });
                    this.clearTargeting = x(2, function (g) {
                        if (void 0 === g)
                            return nl(d, 2, []), c.info(js(a.getName())), b;
                        if ('gpt-beta' === g)
                            return c.I(ns(g)), b;
                        var h = M(d, Jf, 2), k = _.u(h, 'findIndex').call(h, function (l) {
                                return Kf(l) === g;
                            });
                        if (0 > k)
                            return c.I(bs(g, a.getName())), b;
                        h.splice(k, 1);
                        nl(d, 2, h);
                        c.info(as(g, a.getName()));
                        return b;
                    });
                    this.getTargeting = x(38, function (g) {
                        if ('string' !== typeof g)
                            return c.I(Hh('PubAdsService.getTargeting', [g])), [];
                        var h = (L = M(d, Jf, 2), _.u(L, 'find')).call(L, function (k) {
                            return Kf(k) === g;
                        });
                        return h ? K(h, 2).slice() : [];
                    });
                    this.getTargetingKeys = x(39, function () {
                        return M(d, Jf, 2).map(function (g) {
                            return Kf(g);
                        });
                    });
                    this.setCategoryExclusion = x(3, function (g) {
                        if ('string' !== typeof g || xj(g))
                            return c.I(Hh('PubAdsService.setCategoryExclusion', [g])), b;
                        (L = K(d, 3), _.u(L, 'includes')).call(L, g) || Lf(d, 3, g);
                        c.info(cs(g));
                        return b;
                    });
                    this.clearCategoryExclusions = x(4, function () {
                        D(d, 3, Ja([]));
                        c.info(ds());
                        return b;
                    });
                    this.disableInitialLoad = x(5, function () {
                        D(d, 4, !0);
                        f || (f = !0, bG());
                    });
                    this.enableSingleRequest = x(6, function () {
                        if (a.o && !y(d, 6))
                            return c.I(Rr('PubAdsService.enableSingleRequest')), !1;
                        c.info(Sr('single request'));
                        D(d, 6, !0);
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
                        var h = new Vu();
                        D(h, 1, 800);
                        D(h, 2, 400);
                        D(h, 3, 3);
                        if (_.ja(g)) {
                            var k = g.fetchMarginPercent;
                            'number' === typeof k && (0 <= k ? D(h, 1, k) : -1 == k && D(h, 1, void 0));
                            k = g.renderMarginPercent;
                            'number' === typeof k && (0 <= k ? D(h, 2, k) : -1 == k && D(h, 2, void 0));
                            g = g.mobileScaling;
                            'number' === typeof g && (0 < g ? D(h, 3, g) : -1 == g && D(h, 3, 1));
                        }
                        Gb(d, 5, h);
                    });
                    this.setCentering = x(9, function (g) {
                        if (_.v(Po) && 'object' === typeof g && g) {
                            var h = g.horizontal;
                            g = g.vertical;
                            'boolean' === typeof h && D(d, 15, h);
                            'boolean' === typeof g && D(d, 31, g);
                        } else
                            h = !!g, c.info(Tr('centering', String(h))), D(d, 15, h);
                    });
                    this.definePassback = x(10, function (g, h) {
                        return (g = Jh(a, g, h)) && g.Pc;
                    });
                    this.refresh = x(11, function (g, h) {
                        h = void 0 === h ? {} : h;
                        if (g && !Array.isArray(g) || !_.ja(h) || h.changeCorrelator && 'boolean' !== typeof h.changeCorrelator)
                            c.I(Hh('PubAdsService.refresh', _.u(Array, 'from').call(Array, arguments)));
                        else {
                            h && 0 == h.changeCorrelator || D(d, 26, Mm());
                            var k = g ? ZF(g, a) : a.j;
                            a.refresh(Nv(d, e), k) || c.I(Hh('PubAdsService.refresh', _.u(Array, 'from').call(Array, arguments)));
                        }
                    });
                    this.enableVideoAds = x(12, function () {
                        D(d, 21, !0);
                        wF(a, d);
                    });
                    this.setVideoContent = x(13, function (g, h) {
                        D(d, 21, !0);
                        D(d, 22, String(g || ''));
                        D(d, 23, String(h || ''));
                        wF(a, d);
                    });
                    this.collapseEmptyDivs = x(14, function (g) {
                        g = void 0 === g ? !1 : g;
                        if ('object' === typeof g && g && _.v(Qo)) {
                            if ('boolean' === typeof g.collapseEmpty) {
                                D(d, 11, g.collapseEmpty);
                                var h;
                                Yu(d, null != (h = y(d, 30)) ? h : !0);
                            }
                            if ('boolean' === typeof g.startCollapsed) {
                                D(d, 10, g.startCollapsed);
                                var k;
                                Yu(d, null != (k = y(d, 30)) ? k : !0);
                            }
                            'boolean' === typeof g.allowCollapseOnScreen && Yu(d, !g.allowCollapseOnScreen);
                            return !!y(d, 11);
                        }
                        D(d, 11, !0);
                        var l = !!g;
                        D(d, 10, l);
                        uc('gpt_ced', function (m) {
                            r(m, 'sc', l ? 't' : 'f');
                            r(m, 'level', 'page');
                            dc(m);
                        });
                        c.info(Zr(String(l)));
                        return !!y(d, 11);
                    });
                    this.clear = x(15, function (g) {
                        if (Array.isArray(g))
                            return CF(a, d, e, ZF(g, a));
                        if (void 0 === g)
                            return CF(a, d, e, a.j);
                        c.I(Hh('PubAdsService.clear', [g]));
                        return !1;
                    });
                    this.setLocation = x(16, function (g) {
                        if ('string' !== typeof g)
                            return c.I(Hh('PubAdsService.setLocation', [g])), b;
                        D(d, 8, g);
                        return b;
                    });
                    this.setCookieOptions = x(17, function (g) {
                        if (0 !== g && 1 !== g)
                            return c.I(Pc('PubadsService.setTagForUnderAgeOfConsent', Nc(g), '0,1')), b;
                        D(d, 24, g);
                        return b;
                    });
                    this.setTagForChildDirectedTreatment = x(18, function (g) {
                        if (1 !== g && 0 !== g)
                            return c.I(Pc('PubadsService.setTagForChildDirectedTreatment', Nc(g), '0,1')), b;
                        var h = ag(d) || new bg();
                        D(h, 5, g);
                        Gb(d, 25, h);
                        return b;
                    });
                    this.clearTagForChildDirectedTreatment = x(19, function () {
                        var g = ag(d);
                        if (!g)
                            return b;
                        D(g, 5, void 0);
                        Gb(d, 25, g);
                        return b;
                    });
                    this.setPublisherProvidedId = x(20, function (g) {
                        g = String(g);
                        c.info(Tr('PPID', g));
                        D(d, 16, g);
                        return b;
                    });
                    this.set = x(21, function (g, h) {
                        if ('string' !== typeof g || !g.length || void 0 === uu()[g] || 'string' !== typeof h)
                            return c.I(Hh('PubAdsService.set', [
                                g,
                                h
                            ])), b;
                        var k = (L = M(d, Jf, 14), _.u(L, 'find')).call(L, function (l) {
                            return Kf(l) === g;
                        });
                        k ? Bu(k, [h]) : (k = Au(new Jf(), g), Lf(k, 2, h), Nf(d, 14, k, Jf));
                        c.info(Lr(g, String(h), a.getName()));
                        return b;
                    });
                    this.get = x(22, function (g) {
                        if ('string' !== typeof g)
                            return c.I(Hh('PubAdsService.get', [g])), null;
                        var h = (L = M(d, Jf, 14), _.u(L, 'find')).call(L, function (k) {
                            return Kf(k) === g;
                        });
                        return (h = h && K(h, 2)) ? h[0] : null;
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
                        Em(Nq('update'));
                        c.I(qs());
                        D(d, 26, Mm());
                        return b;
                    });
                    this.defineOutOfPagePassback = x(35, function (g) {
                        g = Jh(a, g, [
                            1,
                            1
                        ]);
                        if (!g)
                            return null;
                        D(g.Ma, 15, 1);
                        return g.Pc;
                    });
                    this.setForceSafeFrame = x(36, function (g) {
                        if ('boolean' !== typeof g)
                            return c.I(Hh('PubAdsService.setForceSafeFrame', [Nc(g)])), b;
                        D(d, 13, g);
                        return b;
                    });
                    this.setSafeFrameConfig = x(37, function (g) {
                        var h = kv(g);
                        if (!h)
                            return c.I(Hh('PubAdsService.setSafeFrameConfig', [g])), b;
                        Gb(d, 18, h);
                        return b;
                    });
                    this.setRequestNonPersonalizedAds = x(445, function (g) {
                        if (0 !== g && 1 !== g)
                            return c.I(Pc('PubAdsService.setRequestNonPersonalizedAds', Nc(g), '0,1')), b;
                        var h = ag(d) || new bg();
                        D(h, 8, !!g);
                        Gb(d, 25, h);
                        return b;
                    });
                    this.setTagForUnderAgeOfConsent = x(447, function (g) {
                        g = void 0 === g ? 2 : g;
                        if (2 !== g && 0 !== g && 1 !== g)
                            return c.I(Pc('PubadsService.setTagForUnderAgeOfConsent', Nc(g), '2,0,1')), b;
                        var h = ag(d) || new bg();
                        D(h, 6, g);
                        Gb(d, 25, h);
                        return b;
                    });
                    this.getCorrelator = x(27, function () {
                        return String(K(d, 26));
                    });
                    this.getTagSessionCorrelator = x(631, function () {
                        return Bb(_.F);
                    });
                    this.getVideoContent = x(30, function () {
                        return AF(a, d);
                    });
                    this.getVersion = x(568, Tb);
                    this.forceExperiment = x(569, function (g) {
                        g = parseInt(g, 10);
                        0 < g && _.O(Aq).m(g);
                    });
                    this.setCorrelator = x(28, function (g) {
                        Em(Nq('set'));
                        c.I(ps());
                        if (Ls(window))
                            return b;
                        if (!('number' === typeof g && isFinite(g) && 0 == g % 1 && 0 < g))
                            return c.I(Hh('PubadsService.setCorrelator', [Nc(g)])), b;
                        D(d, 26, g);
                        D(d, 27, !0);
                        return b;
                    });
                    this.markAsAmp = x(570, function () {
                        window.console && window.console.warn && window.console.warn('googletag.pubads().markAsAmp() is deprecated and ignored.');
                    });
                    this.isSRA = x(571, function () {
                        return !!y(d, 6);
                    });
                    this.setImaContent = x(328, function (g, h) {
                        Ff(d, 22) ? (D(d, 21, !0), D(d, 22, String(g || '')), D(d, 23, String(h || '')), wF(a, d)) : (D(d, 21, !0), wF(a, d), 'string' === typeof g && D(d, 19, g), 'string' === typeof h && D(d, 20, h));
                    });
                    this.getImaContent = x(329, function () {
                        return Ff(d, 22) ? AF(a, d) : a.o ? {
                            vid: K(d, 19) || '',
                            cmsid: K(d, 20) || ''
                        } : null;
                    });
                    this.isInitialLoadDisabled = x(572, function () {
                        return !!y(d, 4);
                    });
                    this.setPrivacySettings = x(648, function (g) {
                        if (!_.ja(g))
                            return c.I(Hh('PubAdsService.setPrivacySettings', [g])), b;
                        var h = ag(d) || new bg(), k = g.restrictDataProcessing, l = g.childDirectedTreatment, m = g.underAgeOfConsent, n = g.limitedAds, p = g.nonPersonalizedAds;
                        'boolean' === typeof p ? D(h, 8, p) : void 0 !== p && c.I(Mc('PubAdsService.setPrivacySettings', Nc(g), 'nonPersonalizedAds', Nc(p)));
                        'boolean' === typeof k ? D(h, 1, k) : void 0 !== k && c.I(Mc('PubAdsService.setPrivacySettings', Nc(g), 'restrictDataProcessing', Nc(k)));
                        'boolean' === typeof n ? D(h, 9, n) : void 0 !== n && c.I(Mc('PubAdsService.setPrivacySettings', Nc(g), 'limitedAds', Nc(n)));
                        void 0 !== m && (null === m ? D(h, 6, 2) : !1 === m ? D(h, 6, 0) : !0 === m ? D(h, 6, 1) : c.I(Mc('PubAdsService.setPrivacySettings', Nc(g), 'underAgeOfConsent', Nc(m))));
                        void 0 !== l && (null === l ? D(h, 5, void 0) : !1 === l ? D(h, 5, 0) : !0 === l ? D(h, 5, 1) : c.I(Mc('PubAdsService.setPrivacySettings', Nc(g), 'childDirectedTreatment', Nc(l))));
                        Gb(d, 25, h);
                        return b;
                    });
                };
            _.P(Lh, XF);
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
                }, cG = function () {
                    var a = this, b = [], c = [], d = Lc();
                    this.addSize = sc(88, function (e, f) {
                        if (!Qu(e) || !(Pu(f) || Array.isArray(f) && f.every(Pu)))
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
                            return d.I(Jr(Nc(c))), null;
                        pa(b);
                        return b;
                    });
                };
            var Nh = {
                    REWARDED: 4,
                    TOP_ANCHOR: 2,
                    BOTTOM_ANCHOR: 3,
                    INTERSTITIAL: 5
                }, dG = function () {
                    var a = rh();
                    a.enums || (a.enums = { OutOfPageFormat: Nh });
                };
            var Uh = new C.Map([
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
            var eG = function () {
                var a = new Ux(), b = new Vx(), c = Bb(_.F);
                Cb(a, 1, c, 0);
                c = Db().join();
                Cb(a, 5, c, '');
                Ib(a, 2, 1);
                Gb(b, 1, a);
                a = Tx();
                c = _.v(Lp);
                a = rl(a, 9, c);
                a = rl(a, 10, !0);
                c = _.v(Np);
                a = rl(a, 13, c);
                c = _.v(Pp);
                a = rl(a, 14, c);
                a = rl(a, 16, !0);
                Gb(b, 2, a);
                window.google_rum_config = b.toJSON();
            };
            var fG = function (a) {
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
                    c = Nv(c, ef());
                    Bw(b, c);
                    gw(_.O(Ph), b);
                    return !0;
                }, gG = sc(297, function () {
                    try {
                        for (var a = _.v(gp) ? [].concat(_.nc(document.getElementsByTagName('script'))) : _.u(Array, 'from').call(Array, document.getElementsByTagName('script')), b = _.I(a), c = b.next(); !c.done; c = b.next()) {
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
                }), hG = function () {
                    var a = window, b = new au(a);
                    aw(b).then(sc(894, function (c) {
                        var d = new Ss(a), e = new Az(a);
                        uc('cmpMet', function (f) {
                            dc(f);
                            r(f, 'fc', c ? 1 : 0);
                            r(f, 'tcfv1', a.__cmp ? 1 : 0);
                            r(f, 'tcfv2', Us(d) ? 1 : 0);
                            r(f, 'usp', Cz(e) ? 1 : 0);
                            r(f, 'ptt', 17);
                        }, { qa: _.gc(vp) });
                    }));
                };
            (function (a, b) {
                var c, d, e, f, g, h, k, l;
                return Ii(function (m) {
                    try {
                        if (window.googletag.evalScripts)
                            return window.googletag.evalScripts(), m.return();
                        cA();
                        ph('evalScripts', gG);
                        try {
                            UF();
                        } catch (n) {
                            $b(408, n, !0);
                        }
                        _.bc(260) && Ev();
                        sB = _.Hc();
                        try {
                            SF(), _.O(Aq).j(13), _.O(Aq).j(3);
                        } catch (n) {
                            $b(408, n, !0);
                        }
                        $v('gpt-tag-load');
                        c = b(a);
                        _.wC.L().o = c;
                        _.gc(vp) && hG();
                        Bc(827, function () {
                            'function' === typeof document.interestCohort && _.v(rp) && (ju.L().m = document.interestCohort());
                        }, !0);
                        (d = Dq(Ap)) && Bc(862, function () {
                            Km(d, document);
                        }, !0);
                        Ag();
                        ph('defineOutOfPageSlot', sc(73, function (n, p) {
                            'string' === typeof n && 0 < n.length && (null == p || 'string' === typeof p || 'number' === typeof p && Oh(p)) ? n = Rh(n, 'number' === typeof p ? p : 1, 'string' === typeof p ? p : void 0) : (Lc().error(Hh('googletag.defineOutOfPageSlot', [
                                n,
                                p
                            ]), void 0, _.v(Jn)), n = null);
                            if (!n)
                                return null;
                            var t;
                            return null != (t = n.o) ? t : null;
                        }));
                        ph('defineSlot', iw);
                        ph('defineUnit', iw);
                        ph('getWindowsThatCanCommunicateWithHostpageLibrary', fw);
                        ph('display', Dw);
                        dG();
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
                            return new YF();
                        });
                        ph('sizeMapping', sc(90, function () {
                            return new cG();
                        }));
                        ph('enableServices', sc(91, function () {
                            for (var n = _.I(ww), p = n.next(); !p.done; p = n.next())
                                p = p.value, p.o && Lc().info(Mr()), yw(p);
                        }));
                        ph('destroySlots', sc(75, fG));
                        ph('apiReady', !0);
                        _.v(Un) && df();
                        e = function () {
                            Wh();
                            Bc(77, function () {
                                var n = rh().cmd;
                                if (!n || Array.isArray(n)) {
                                    var p = new xs();
                                    rh().cmd = ad(p, function () {
                                        return new WF(p);
                                    });
                                    n && 0 < n.length && p.push.apply(p, n);
                                }
                            });
                        };
                        rh().fifWin && 'complete' != document.readyState ? Eq(window, function () {
                            window.setTimeout(e, 0);
                        }) : e();
                        gG();
                        if (_.v(Rp) || Nb.L().j)
                            eG(), Yl(document, rj(kb(_.v(Sp) ? c.je : c.le).toString()));
                        _.v(zo) && hi();
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
                        return db(jj(VF) + 'gpt/pubads_impl_' + b + '_' + a + '.js');
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