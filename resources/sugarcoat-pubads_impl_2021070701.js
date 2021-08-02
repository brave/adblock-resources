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
            var aa, ca, ba, ea, fa, ha, la, na, pa, sa, ma, ra, ta, va, wa, xa, za, Ba, Ea, Ga, Ia, Fa, La, Ma, Oa, Qa, Ra, Ta, Va, Xa, Ya, $a, ab, bb, eb, fb, ib, kb, qb, rb, tb, vb, wb, Gb, Hb, Ib, Lb, Mb, Nb, Ob, Qb, Pb, Tb, Vb, Ub, ic, w, nc, kc, rc, sc, tc, uc, wc, yc, zc, Oc, Qc, Tc, cd, kd, nd, pd, ud, wd, zd, Dd, Gd, Id, Jd, Kd, Od, Qd, Sd, ce, ie, ke, re, we, xe, ye, Ae, Ce, De, Fe, Ge, Ie, Je, Ke, Me, Ne, Oe, Qe, Re, Te, Ve, Xe, Ze, We, ef, jf, of, tf, hf, If, Jf, Nf, Of, Qf, Tf, Uf, Vf, Wf, Xf, Yf, $f, eg, gg, ig, jg, kg, lg, ng, mg, sg, tg, wg, yg, zg, Eg, Hg, Jg, Lg, Qg, Rg, Sg, Ug, Vg, Wg, Xg, ch, hh, kh, nh, qh, sh, wh, Ah, Ch, Fh, Jh, Kh, Uh, L, Vh, Wh, Xh, Yh, Zh, D, $h, ai, bi, ci, bg, di, ei, fi, ji, ki, li, Ai, Bi, qa, ka, Ci, Di, Ei, Fi, Mf;
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
            xa = function (a, b) {
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
                    return 'number' === typeof b ? isFinite(b) ? b : String(b) : b;
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
            vb = function (a, b) {
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
                var a = Number('2021070701');
                return 1 > a || Math.floor(a) !== a ? (Rb({ v: '2021070701' }, 'gpt_inv_ver'), '1') : '2021070701';
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
                        }, { wa: 1 });
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
                a && 'function' == typeof a.va && a.va();
            };
            tc = function (a, b) {
                const $___old_fe4ecb956d10ec98 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                try {
                    if ($___old_fe4ecb956d10ec98)
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
                    if ($___old_fe4ecb956d10ec98)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_fe4ecb956d10ec98));
                }
            };
            uc = function (a) {
                return 'null' !== a.origin;
            };
            wc = function (a, b, c) {
                b = x(b, 5) && uc(c) ? c.document.cookie : null;
                return null === b ? null : new vc({ cookie: b }).get(a) || '';
            };
            yc = function (a, b) {
                return A(this, function d() {
                    var e, f, g;
                    return B(d, function (h) {
                        if (1 == h.j)
                            return e = 0 < b ? a.filter(function (k) {
                                return !k.zc;
                            }) : a, C(h, D.Promise.all(e.map(function (k) {
                                return k.Dc.promise;
                            })), 2);
                        if (3 != h.j) {
                            if (a.length === e.length)
                                return h.return(0);
                            f = a.filter(function (k) {
                                return k.zc;
                            });
                            g = _.xc();
                            return C(h, D.Promise.race([
                                D.Promise.all(f.map(function (k) {
                                    return k.Dc.promise;
                                })),
                                new D.Promise(function (k) {
                                    return void setTimeout(k, b);
                                })
                            ]), 3);
                        }
                        return h.return(_.xc() - g);
                    });
                });
            };
            zc = function (a) {
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
            Oc = function (a) {
                var b = new Ac(), c = Bc(), d = a.bidder, e = a.wrapper, f = a.amount, g = void 0 === a.currency ? 'USD' : a.currency, h = a.size, k = a.targetingKeys, l = a.ad, m = a.adUrl, n = void 0 === a.ttlMs ? 0 : a.ttlMs, p = a.responseTimestampMs, t = void 0 === a.mediaType ? 'banner' : a.mediaType, u = a.auctionId;
                'number' === typeof p ? E(b, 9, p) : (E(b, 9, Date.now()), void 0 !== p && c.M(Cc('Slot.setClientBid', Dc(a), 'responseTimestampMs', Dc(p))));
                if (1 === e)
                    Ec(b, e);
                else
                    return c.M(Fc('Slot.setClientBid', Dc(e), '1')), null;
                if ('string' === typeof d)
                    Gc(b, d);
                else
                    return c.M(Cc('Slot.setClientBid', Dc(a), 'bidder', Dc(d))), null;
                if ('string' === typeof l)
                    hc(b, 7, Hc[1], l);
                else {
                    if (void 0 !== l)
                        return c.M(Cc('Slot.setClientBid', Dc(a), 'ad', String(l))), null;
                    if ('string' === typeof m)
                        hc(b, 12, Hc[1], m);
                    else if (void 0 !== m)
                        return c.M(Cc('Slot.setClientBid', Dc(a), 'adUrl', String(m))), null;
                }
                if (Ic(h) && Array.isArray(h))
                    Jc(b, Kc(Lc(new Mc(), h[0]), h[1]));
                else
                    return c.M(Cc('Slot.setClientBid', Dc(a), 'size', Dc(h))), null;
                'number' === typeof f ? hc(b, 2, Hc[0], f) : 'string' === typeof f ? hc(b, 3, Hc[0], f) : void 0 !== f && c.M(Cc('Slot.setClientBid', Dc(a), 'amount', Dc(f)));
                'string' === typeof g ? E(b, 4, g) : c.M(Cc('Slot.setClientBid', Dc(a), 'currency', Dc(g)));
                Array.isArray(k) && k.every(function (z) {
                    return 'string' === typeof z;
                }) ? Cb(b, 6, k) : c.M(Cc('Slot.setClientBid', Dc(a), 'targetingKeys', Dc(k)));
                'number' === typeof n ? E(b, 8, n) : c.M(Cc('Slot.setClientBid', Dc(a), 'ttlMs', Dc(n)));
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
                        c.M(Fc('Slot.setClientBid', Dc(t), 'banner,native,video'));
                    }
                else
                    c.M(Cc('Slot.setClientBid', Dc(a), 'mediaType', Dc(t)));
                E(b, 11, d);
                'string' === typeof u && Nc(b, u);
                return b;
            };
            Qc = function (a, b) {
                Pc.has(a);
                Pc.set(a, b);
            };
            Tc = function (a) {
                return Rc(a, function () {
                    return new Sc(a);
                });
            };
            cd = function (a, b, c, d) {
                var e = Uc(b, a);
                if (!e)
                    return null;
                var f = Vc(e);
                if (!f)
                    return f;
                var g = e === Wc(b, a), h = Xc(function () {
                        var n = g ? Wc(b, a) : e;
                        return n && Yc(n, window) || {};
                    }), k = Zc(c)[0];
                c = !1;
                Array.isArray(k) && (c = d ? g : 0 == f.x && 'center' == h()['text-align']);
                c && (f.x += Math.round(Math.max(0, (g ? e.clientWidth : e.parentElement.clientWidth) - k[0]) / 2));
                d = function (n) {
                    var p = h();
                    null == (null == p ? void 0 : p.getPropertyValue) ? n = null : (n = p.getPropertyValue(n), n = (n = $c.exec(n)) ? +n[1] : null);
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
                return f && ad(e) ? f : new _.bd(-12245933, -12245933);
            };
            kd = function (a, b, c) {
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
                    e |= dd(a, 2500);
                    if (_.v(ed)) {
                        var f = _.fd(a).clientHeight;
                        e |= f ? 320 > f ? -2147483648 : 0 : 1073741824;
                    }
                    e |= gd(a);
                    b && !_.hd(_.jd(c)) && (e |= 134217728);
                } catch (g) {
                    e |= 32;
                }
                return d | e;
            };
            nd = function (a, b, c, d) {
                if (5 !== ld(b))
                    return !1;
                var e = kd(c, '6499' !== Ib(a.getAdUnitPath()), d);
                e && mc('gpt_int_ns', function (f) {
                    q(f, 'nsr', e);
                    Zb(f);
                }, { wa: _.lb(md) });
                return !!e;
            };
            pd = function (a) {
                if (4 === a && _.v(od))
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
            ud = function (a) {
                a = pd(a);
                if (!a)
                    return null;
                var b = 0;
                if (11 !== a) {
                    b |= _.F != _.F.top ? 512 : 0;
                    var c = _.qd(_.F);
                    c = 26 !== a && 27 !== a && 40 !== a && 10 !== a && c.adCount ? 1 == a || 2 == a ? !(!c.adCount[1] && !c.adCount[2]) : (c = c.adCount[a]) ? 1 <= c : !1 : !1;
                    c && (b |= 64);
                    if (b)
                        return b;
                }
                if (2 === a || 1 === a) {
                    0 === rd() && (b |= 536870912);
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
                        d |= _.sd(_.F) ? 0 : 8, d |= dd(_.F, td), d |= gd(_.F);
                    } catch (g) {
                        d |= 32;
                    }
                    b |= d;
                } else
                    8 === a ? b |= kd(_.F) : 11 !== a && (b |= 32);
                b || (d = _.qd(_.F), d.adCount = d.adCount || {}, d.adCount[a] = d.adCount[a] + 1 || 1);
                return b;
            };
            wd = function (a) {
                return vd().some(function (b) {
                    return Ib(b.getAdUnitPath()) === a;
                });
            };
            zd = function (a) {
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
                    xd(g, a);
                    c && 'complete' !== b.document.readyState ? _.yd(b, 'load', function () {
                        b.document.body.appendChild(g);
                    }) : b.document.body.appendChild(g);
                });
            };
            Dd = function (a) {
                return A(this, function c() {
                    var d, e, f, g, h, k;
                    return B(c, function (l) {
                        switch (l.j) {
                        case 1:
                            return d = 'https://pagead2.googlesyndication.com/getconfig/sodar?sv=200&tid=' + a.j + ('&tv=' + a.l + '&st=') + a.eb, e = void 0, l.H = 2, C(l, Ad(d), 4);
                        case 4:
                            e = l.l;
                            Bd(l, 3);
                            break;
                        case 2:
                            Cd(l);
                        case 3:
                            if (!e)
                                return l.return(void 0);
                            f = a.pb || e.sodar_query_id;
                            g = void 0 === e.rc_enable ? 'n' : e.rc_enable;
                            h = void 0 === e.bg_snapshot_delay_ms ? '0' : e.bg_snapshot_delay_ms;
                            k = void 0 === e.is_gen_204 ? '1' : e.is_gen_204;
                            return f && e.bg_hash_basename && e.bg_binary ? l.return({
                                context: a.A,
                                fd: e.bg_hash_basename,
                                ed: e.bg_binary,
                                Fd: a.j + '_' + a.l,
                                pb: f,
                                eb: a.eb,
                                Jb: g,
                                Sb: h,
                                Ib: k
                            }) : l.return(void 0);
                        }
                    });
                });
            };
            Gd = function (a) {
                return A(this, function c() {
                    var d;
                    return B(c, function (e) {
                        if (1 == e.j)
                            return C(e, Dd(a), 2);
                        if (d = e.l) {
                            var f = 'sodar2';
                            f = void 0 === f ? 'sodar2' : f;
                            var g = window, h = g.GoogleGcLKhOms;
                            h && 'function' === typeof h.push || (h = g.GoogleGcLKhOms = []);
                            var k = {};
                            h.push((k._ctx_ = d.context, k._bgv_ = d.fd, k._bgp_ = d.ed, k._li_ = d.Fd, k._jk_ = d.pb, k._st_ = d.eb, k._rc_ = d.Jb, k._dl_ = d.Sb, k._g2_ = d.Ib, k));
                            if (h = g.GoogleDX5YKUSk)
                                g.GoogleDX5YKUSk = void 0, h[1]();
                            f = Ed(Fd, { basename: f });
                            zd(f);
                        }
                        return e.return(d);
                    });
                });
            };
            Id = function (a) {
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
            Jd = function (a, b) {
                return 0 === a.size ? !1 : void 0 === b || 0 === b.length ? !0 : b.some(function (c) {
                    return a.has(c);
                });
            };
            Kd = function (a, b) {
                if (a.length !== b.length)
                    throw Error('Length of two vectors should be the same!');
                for (var c = 0, d = 0; d < a.length; d++)
                    c += a[d] * b[d];
                return c;
            };
            Od = function (a, b, c) {
                var d = Ld, e, f, g = [];
                b = _.G(b);
                for (var h = b.next(); !h.done; h = b.next()) {
                    h = h.value;
                    var k = c(h, {}, null !== (e = a.perBuyerSignals.get('gdaSignals')) && void 0 !== e ? e : new Md(), null !== (f = a.j.get('gdaSignals')) && void 0 !== f ? f : new Nd(), {});
                    0 >= k.bid || null === k.ad || (k = d(k.ad, k.bid, a, {}), 0 < k && g.push({
                        ad: h,
                        Td: k
                    }));
                }
                return g;
            };
            Qd = function () {
                var a;
                var b = Ya(Pd);
                b = (null === (a = Ra()) || void 0 === a ? 0 : a.isScript(b)) ? TrustedScript.prototype.toString.apply(b) : b;
                return $a(URL.createObjectURL(new Blob([b], { type: 'text/javascript' })));
            };
            Sd = function (a, b, c, d) {
                c = void 0 === c ? null : c;
                d = void 0 === d ? {} : d;
                if (Math.random() < _.lb(Rd)) {
                    var e = {};
                    Rb(_.r(Object, 'assign').call(Object, (e.c = String(a), e.pc = String(zb(window)), e.em = c, e.lid = b, e.eids = Bb().join(), e), d), 'esp');
                }
            };
            ce = function (a) {
                if (!a)
                    return null;
                var b = new Td(), c = _.lb(Ud), d = [], e = /^_GESPSK-(.+)$/;
                try {
                    for (var f = 0; f < a.length; f++) {
                        var g = (e.exec(a.key(f)) || [])[1];
                        g && d.push(g);
                    }
                } catch (h) {
                }
                d = _.G(d);
                for (e = d.next(); !e.done; e = d.next())
                    if (e = e.value, f = Vd().get(e, a), f.getError())
                        Sd(f.getError(), e, f.errorMessage);
                    else if (f = f.Tb)
                        if (g = Wd(f), 0 === g || 1 === g)
                            g = H(f, 2), 0 <= c && g && g.length > c ? Sd(12, e) : (Xd(b, 2, f, Yd), Sd(19, e));
                if (!I(b, Yd, 2).length)
                    return null;
                if (_.v(Zd))
                    return a = new $d(), ae(b, a), b = be(a), Ka(b, 2);
                a = new $d();
                ae(b, a);
                return Ka(be(a), void 0);
            };
            ie = function (a, b, c, d) {
                Sd(18, a);
                try {
                    var e = _.xc();
                    _.lb(de) && (ee(b, Number(((0, J.T)(fe(b, 8)) - 1).toFixed(3))), E(b, 7, Math.round(e / 1000 / 60)));
                    return c().then(function (f) {
                        Sd(29, a, null, { delta: String(_.xc() - e) });
                        E(b, 3, Date.now());
                        ge(a, b, f, d);
                        return b;
                    }).catch(function (f) {
                        ge(a, b, H(b, 2), d);
                        Sd(28, a, he(f));
                        return b;
                    });
                } catch (f) {
                    return ge(a, b, H(b, 2), d), Sd(1, a, he(f)), D.Promise.resolve(b);
                }
            };
            ke = function () {
                var a = window;
                var b = void 0 === b ? function () {
                } : b;
                return new D.Promise(function (c) {
                    var d = function () {
                        c(b());
                        _.je(a, 'load', d);
                    };
                    _.yd(a, 'load', d);
                });
            };
            re = function (a, b, c, d) {
                return A(this, function f() {
                    var g, h, k, l, m;
                    return B(f, function (n) {
                        if (1 == n.j)
                            return g = new le(a, b, c, d), h = new me(g.o, g.B, c, d), k = new ne(h.o, h.B, c, d), l = new oe(), pe(l, [
                                g,
                                h,
                                k
                            ]), qe(l), C(n, h.m.promise, 2);
                        m = n.l;
                        return n.return(m ? m : {
                            id: a,
                            kd: null
                        });
                    });
                });
            };
            we = function (a, b, c) {
                var d;
                b ? se() === te(window) || _.v(ue) ? a.encryptedSignalProviders instanceof ve ? a.encryptedSignalProviders.j.push(c) : (b = new ve(null !== (d = a.encryptedSignalProviders) && void 0 !== d ? d : [], b), a.encryptedSignalProviders = b, b.j.push(c)) : Sd(16, '') : Sd(15, '');
            };
            xe = function (a, b, c, d) {
                var e, f = null !== (e = a.encryptedSignalSource) && void 0 !== e ? e : a.encryptedSignalSource = {};
                c ? se() === te(window) || _.v(ue) ? b.map(function (g) {
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
                                        Sd(17, h, null, (p.api = '0', p));
                                        n = re(h, n, c, d);
                                    } else
                                        Sd(14, h), n = D.Promise.resolve(null);
                                    n.then(l);
                                }
                            }
                        });
                        m && (f[h] = m);
                    });
                }) : Sd(16, '') : Sd(15, '');
            };
            ye = function (a, b, c) {
                var d, e = b.toString();
                if (c && !document.querySelector('[src="' + e + '"]'))
                    if (c = Vd().get(a, c), c.getError())
                        Sd(c.getError(), a, c.errorMessage);
                    else if (c = c.Tb, !c || !(0 === Wd(c) || 1 > (null !== (d = fe(c, 8)) && void 0 !== d ? d : 0))) {
                        Sd(30, a, null, { url: e });
                        var f = document.createElement('script');
                        f.setAttribute('esp-signal', 'true');
                        xd(f, b);
                        var g = function () {
                            Sd(31, a, null, { url: e });
                            _.je(f, 'error', g);
                        };
                        document.head.appendChild(f);
                        _.yd(f, 'error', g);
                    }
            };
            Ae = function (a) {
                a = _.ze(a.split(/\s+/), function (b) {
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
            Ce = function (a) {
                if (!a)
                    return [0];
                a = 'number' === typeof a ? [a] : a;
                a = _.Be(a, function (b) {
                    return 'number' === typeof b && 0 <= b && 1 >= b ? !0 : !1;
                });
                la(a);
                na(a, function (b, c) {
                    return b - c;
                });
                return a;
            };
            De = function (a) {
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
            Fe = function (a, b, c, d) {
                var e, f, g, h, k, l, m, n = new Ee(), p = '', t = function (u) {
                        try {
                            var z = 'object' === typeof u.data ? u.data : JSON.parse(u.data);
                            p === z.paw_id && (_.je(a, 'message', t), n.resolve(d(z)));
                        } catch (y) {
                        }
                    };
                return 'function' === typeof (null === (e = a.gmaSdk) || void 0 === e ? void 0 : e.getQueryInfo) ? (_.yd(a, 'message', t), p = c(a.gmaSdk), n.promise) : 'function' === typeof (null === (h = null === (g = null === (f = a.webkit) || void 0 === f ? void 0 : f.messageHandlers) || void 0 === g ? void 0 : g.getGmaQueryInfo) || void 0 === h ? void 0 : h.postMessage) || 'function' === typeof (null === (m = null === (l = null === (k = a.webkit) || void 0 === k ? void 0 : k.messageHandlers) || void 0 === l ? void 0 : l.getGmaSig) || void 0 === m ? void 0 : m.postMessage) ? (p = String(Math.floor(2147483647 * pb(a))), _.yd(a, 'message', t), b(a.webkit.messageHandlers, p), n.promise) : null;
            };
            Ge = function (a) {
                return Fe(a, function (b, c) {
                    var d;
                    return void (null !== (d = b.getGmaQueryInfo) && void 0 !== d ? d : b.getGmaSig).postMessage(c);
                }, function (b) {
                    return b.getQueryInfo();
                }, function (b) {
                    return b.signal;
                });
            };
            Ie = function (a, b, c, d) {
                try {
                    if (a.setAttribute('data-google-query-id', c), !d) {
                        var e, f;
                        if (_.v(He)) {
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
            Je = function (a) {
                return 'number' === typeof a || 'string' === typeof a;
            };
            Ke = function (a) {
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
            Me = function (a, b) {
                var c = void 0 === c ? Le : c;
                a.goog_sdr_l || (Object.defineProperty(a, 'goog_sdr_l', { value: !0 }), 'complete' === a.document.readyState ? c(a, b) : _.yd(a, 'load', function () {
                    return void c(a, b);
                }));
            };
            Ne = function (a) {
                var b, c;
                try {
                    return (null !== (c = null === (b = a.top) || void 0 === b ? void 0 : b.frames) && void 0 !== c ? c : {}).google_ads_top_frame;
                } catch (d) {
                }
                return null;
            };
            Oe = function (a) {
                var b = /^https?:\/\/[^/#?]+\/?$/;
                return !!a && !b.test(a);
            };
            Qe = function (a) {
                if (a === a.top || Pe(a.top))
                    return D.Promise.resolve({ status: 4 });
                var b = Ne(a);
                if (!b)
                    return D.Promise.resolve({ status: 2 });
                if (a.parent === a.top && Oe(a.document.referrer))
                    return D.Promise.resolve({ status: 3 });
                var c = new Ee();
                a = new MessageChannel();
                a.port1.onmessage = function (d) {
                    '__goog_top_url_resp' === d.data.msgType && c.resolve({
                        lb: d.data.topUrl,
                        status: d.data.topUrl ? 0 : 1
                    });
                };
                b.postMessage({ msgType: '__goog_top_url_req' }, '*', [a.port2]);
                return c.promise;
            };
            Re = function (a) {
                return !!a && !!H(a, 1);
            };
            Te = function (a) {
                a = (Pe(a.top) ? a.top : a).AMP;
                return 'object' === typeof a && !!Se(a, function (b, c) {
                    return !/^inabox/i.test(c);
                });
            };
            Ve = function (a) {
                return new D.Map([
                    [
                        'arp',
                        { value: Te(a) ? 1 : null }
                    ],
                    [
                        'abxe',
                        { value: Pe(a.top) || Ue(a.IntersectionObserver) ? 1 : null }
                    ]
                ]);
            };
            Xe = function () {
                var a = window, b, c, d;
                null !== (b = a.pbjs) && void 0 !== b ? b : a.pbjs = {};
                null !== (c = (d = a.pbjs).que) && void 0 !== c ? c : d.que = [];
                a.pbjs.que.push(kc(860, function () {
                    var e, f = (0, J.T)(a.pbjs);
                    null === (e = f.onEvent) || void 0 === e ? void 0 : e.call(f, 'setTargeting', kc(861, function (g) {
                        We(f, g);
                    }));
                }));
            };
            Ze = function (a) {
                var b;
                return null === (b = (L = _.r(Object, 'entries').call(Object, Ye()), _.r(L, 'find')).call(L, function (c) {
                    var d = _.G(c);
                    c = d.next().value;
                    d = d.next().value;
                    return (L = H(d, 4), _.r(L, 'includes')).call(L, 'publisher_ads') && (c === a || d.getAdUnitPath() === a);
                })) || void 0 === b ? void 0 : b[1];
            };
            We = function (a, b) {
                var c, d, e, f, g, h, k = null;
                b = _.G(_.r(Object, 'keys').call(Object, b));
                for (var l = b.next(); !l.done; l = b.next()) {
                    var m = l.value;
                    if (l = Ze(m)) {
                        var n = null !== (g = null !== (d = null === (c = a.getBidResponsesForAdUnitCode) || void 0 === c ? void 0 : c.call(a, m)) && void 0 !== d ? d : null === (f = null === (e = a.getBidResponses) || void 0 === e ? void 0 : e.call(a)) || void 0 === f ? void 0 : f[m]) && void 0 !== g ? g : { bids: [] };
                        m = {};
                        n = _.G(null !== (h = n.bids) && void 0 !== h ? h : []);
                        for (var p = n.next(); !p.done; m = { xb: m.xb }, p = n.next()) {
                            p = zc(p.value);
                            var t = p.ud;
                            m.xb = p.adId;
                            p = Oc(t);
                            null != p && (null !== k && void 0 !== k ? k : k = H(p, 15), (t = (L = I(l, $e, 21), _.r(L, 'find')).call(L, function (u) {
                                return function (z) {
                                    return H(z, 1) === u.xb;
                                };
                            }(m))) ? af(t, p) : (p = af(bf(new $e(), m.xb), p), cf(l, p)));
                        }
                    }
                }
                k && _.lb(df) && Math.random() < _.lb(df) && ef(a, k);
            };
            ef = function (a, b) {
                var c, d, e, f, g = function (n, p) {
                        n = Ze(n);
                        n = (null === n || void 0 === n ? void 0 : (L = I(n, $e, 21), _.r(L, 'find')).call(L, function (t) {
                            var u, z;
                            return 1 === (null === (u = M(t, Ac, 2)) || void 0 === u ? void 0 : H(u, 10)) && (null === (z = M(t, Ac, 2)) || void 0 === z ? void 0 : H(z, 1)) === p;
                        })) || (null === n || void 0 === n ? void 0 : cf(n, af(new $e(), Nc(Gc(Ec(new Ac(), 1), p), b))));
                        return null === n || void 0 === n ? void 0 : M(n, Ac, 2);
                    }, h = (null === (c = null === a || void 0 === a ? void 0 : a.getEvents) || void 0 === c ? void 0 : c.call(a)) || [];
                h = _.G(h);
                for (var k = h.next(); !k.done; k = h.next())
                    switch (k = k.value, k.eventType) {
                    case 'bidRequested':
                        if (!Array.isArray(k.args) && Array.isArray(k.args.bids))
                            for (var l = _.G(k.args.bids), m = l.next(); !m.done; m = l.next())
                                m = m.value, m.bidder && m.adUnitCode && m.auctionId === b && (null === (d = g(m.adUnitCode, m.bidder)) || void 0 === d ? void 0 : ff(d, k.elapsedTime));
                        break;
                    case 'bidResponse':
                        !Array.isArray(k.args) && k.args.bidder && k.args.adUnitCode && k.args.auctionId === b && (l = g(k.args.adUnitCode, k.args.bidder), null === l || void 0 === l ? void 0 : ff(l, k.elapsedTime - ((null === l || void 0 === l ? void 0 : H(l, 13)) || 0)), null === l || void 0 === l ? void 0 : E(l, 14, 1));
                        break;
                    case 'bidTimeout':
                        if (Array.isArray(k.args))
                            for (k = _.G(k.args), m = k.next(); !m.done; m = k.next())
                                l = m.value, l.bidder && l.adUnitCode && l.auctionId === b && (l = g(l.adUnitCode, l.bidder), null === l || void 0 === l ? void 0 : E(l, 14, 3), null === l || void 0 === l ? void 0 : ff(l, (null === (f = null === (e = null === a || void 0 === a ? void 0 : a.getConfig) || void 0 === e ? void 0 : e.call(a)) || void 0 === f ? void 0 : f.bidderTimeout) || 0));
                        break;
                    case 'noBid':
                        !Array.isArray(k.args) && k.args.bidder && k.args.adUnitCode && k.args.auctionId === b && (l = g(k.args.adUnitCode, k.args.bidder), 3 !== (null === l || void 0 === l ? void 0 : H(l, 14)) && (null === l || void 0 === l ? void 0 : E(l, 14, 2), null === l || void 0 === l ? void 0 : ff(l, k.elapsedTime - (H(l, 13) || 0))));
                    }
            };
            jf = function (a, b) {
                return gf(a, function (c) {
                    return hf(b[c.j]);
                }, '', function (c) {
                    return null != c;
                }, '~');
            };
            of = function (a, b) {
                var c;
                return null !== (c = (L = I(a, kf, 1), _.r(L, 'find')).call(L, function (d) {
                    return lf(d, 1, 0) === b;
                })) && void 0 !== c ? c : mf(a, nf(new kf(), b));
            };
            tf = function (a, b) {
                var c;
                return null !== (c = (L = I(a, pf, 2), _.r(L, 'find')).call(L, function (d) {
                    return qf(d, 1) === b;
                })) && void 0 !== c ? c : rf(a, sf(new pf(), b));
            };
            hf = function (a) {
                for (var b = new uf(), c = _.G(I(a, $e, 21)), d = c.next(); !d.done; d = c.next()) {
                    var e = d.value;
                    d = (0, J.T)(M(e, Ac, 2));
                    var f = of(b, (0, J.T)(H(d, 10)));
                    f = tf(f, (0, J.T)(H(d, 1)));
                    vf(f, H(d, 13) || 0);
                    wf(f, H(d, 14) || 1);
                    var g = new xf();
                    yf(d, 2) && zf(g, 1000000 * (0, J.T)(H(d, 2)));
                    yf(d, 4) && Af(g, (0, J.T)(H(d, 4)));
                    yf(e, 1) && Bf(g, (0, J.T)(H(e, 1)));
                    e = {};
                    for (var h = _.G(H(d, 6)), k = h.next(); !k.done; e = { Ab: e.Ab }, k = h.next())
                        e.Ab = k.value, (L = I(a, Cf, 9), _.r(L, 'find')).call(L, function (l) {
                            return function (m) {
                                return Df(m) === l.Ab;
                            };
                        }(e)) && Ef(g, 4, e.Ab);
                    yf(d, 11) && Ff(g, H(d, 11));
                    Xd(f, 3, g, xf);
                }
                if (!I(b, kf, 1).length)
                    return null;
                a = new $d();
                Gf(b, a);
                return Ka(be(a), 3);
            };
            If = function (a) {
                var b = a, c = 0;
                Hf(b, function (d) {
                    var e;
                    return 1 === (null == (e = d.parentElement) ? void 0 : e.childElementCount) ? (b = d.parentElement, c++, !0) : !1;
                });
                return {
                    Vd: b,
                    depth: c
                };
            };
            Jf = function (a, b) {
                var c = _.Xb(23);
                mc('gpt_not_reserved', function (d) {
                    Zb(d);
                    q(d, 'inViewport', a);
                    q(d, 'depth', b);
                }, { wa: c });
            };
            Nf = function (a, b, c) {
                var d = a.map(function (e) {
                    return b[e.j];
                });
                return new D.Map([
                    [
                        'ists',
                        {
                            value: Kf(d, function (e) {
                                return 0 != ld(e);
                            }) || null
                        }
                    ],
                    [
                        'fas',
                        {
                            value: gf(d, function (e) {
                                return pd(ld(e));
                            }, 0)
                        }
                    ],
                    [
                        'pfxs',
                        {
                            value: _.v(Lf) ? Kf(a, function (e) {
                                var f = b[e.j], g;
                                if (g = !pd(ld(f))) {
                                    g = null;
                                    Array.isArray(Zc(f)[0]) && (g = _.G(Zc(f)[0]), f = g.next().value, g = g.next().value, g = {
                                        width: f,
                                        height: g
                                    });
                                    a: {
                                        var h = Uc(e, c);
                                        e = {
                                            Uc: g,
                                            Bc: !1
                                        };
                                        var k = void 0 === e ? {} : e;
                                        e = void 0 === k.Uc ? null : k.Uc;
                                        f = void 0 === k.Hd ? 100 : k.Hd;
                                        g = void 0 === k.vb ? 50 : k.vb;
                                        k = void 0 === k.Bc ? !0 : k.Bc;
                                        for (var l = Mf(), m = !1; h;) {
                                            if (!f-- || Mf() - l >= g) {
                                                g = !1;
                                                break a;
                                            }
                                            switch (h.nodeType) {
                                            case 9:
                                                try {
                                                    var n = h.parentWindow || h.defaultView;
                                                    if (n) {
                                                        var p = n.frameElement;
                                                        if (p && Pe(n.parent)) {
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
                                                                var z = t.getBoundingClientRect();
                                                                var y = 0 < z.right && 0 < z.bottom;
                                                                break b;
                                                            }
                                                        } catch (K) {
                                                        }
                                                        y = !1;
                                                    }
                                                    u = !y;
                                                }
                                                if (u) {
                                                    g = !1;
                                                    break a;
                                                }
                                                m || (/^html|body$/i.test(t.tagName) ? m = null : (m = t.style.position || (Yc(t, window) || {}).position, m = /^fixed/i.test(m) ? t : null), m = !!m && (!e || m.offsetWidth * m.offsetHeight <= 4 * e.width * e.height));
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
            Of = function (a) {
                return new D.Map([[
                        'rbvs',
                        {
                            value: Kf(a, function (b) {
                                return 4 == ld(b);
                            }) || null
                        }
                    ]]);
            };
            Qf = function (a) {
                if (_.v(Pf))
                    return new D.Map();
                var b = a.Bb, c = a.Nb, d = 0 === a.ld;
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
                        { value: a.Kb }
                    ]
                ]);
            };
            Tf = function (a, b, c) {
                var d = window;
                return new D.Map([
                    [
                        'ris',
                        {
                            value: gf(b, function (e) {
                                var f, g;
                                e = null !== (g = null === (f = a.j.get(e)) || void 0 === f ? void 0 : f.Hc) && void 0 !== g ? g : 0;
                                f = _.Rf(d);
                                return Math.round(Math.min((e && f ? f - e : 0) / 1000, 1800));
                            }, 0, void 0, '~')
                        }
                    ],
                    [
                        'rcs',
                        {
                            value: gf(b, function (e) {
                                if (!c) {
                                    var f = void 0 === f ? _.F : f;
                                    var g = a.j.get(e);
                                    g && (g.Hc = _.Rf(f) || 0, g.Qc++);
                                }
                                return Sf(a, e);
                            }, 0)
                        }
                    ]
                ]);
            };
            Uf = function (a, b) {
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
                            value: isNaN(b.Wa) ? null : b.Wa,
                            options: { ha: !1 }
                        }
                    ],
                    [
                        'ppos',
                        {
                            value: isNaN(b.Xa) ? null : b.Xa,
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
            Vf = function (a, b) {
                return a && (a = M(a, Mc, 1)) ? H(a, 1) || b.innerWidth : 0;
            };
            Wf = function (a, b) {
                return a && (a = M(a, Mc, 1)) ? H(a, 2) || b.innerHeight : 0;
            };
            Xf = function (a) {
                return a && (a = M(a, Mc, 2)) ? H(a, 1) || 0 : 0;
            };
            Yf = function (a) {
                return a && (a = M(a, Mc, 2)) ? H(a, 2) || 0 : 0;
            };
            $f = function (a, b, c) {
                a = a.map(function (e) {
                    return b[e.j];
                });
                var d = a.some(function (e) {
                    return yf(e, 16);
                });
                return new D.Map([
                    [
                        'rtgs',
                        {
                            value: d ? a.map(function (e) {
                                return yf(e, 16) ? 0 != Zc(e).length ? '1' : '2' : '0';
                            }) : null,
                            options: { Aa: '!' }
                        }
                    ],
                    [
                        'max_w',
                        {
                            value: d ? a.map(function (e) {
                                return Vf(M(e, Zf, 16), c);
                            }) : null,
                            options: { Aa: '!' }
                        }
                    ],
                    [
                        'max_h',
                        {
                            value: d ? a.map(function (e) {
                                return Wf(M(e, Zf, 16), c);
                            }) : null,
                            options: { Aa: '!' }
                        }
                    ],
                    [
                        'min_w',
                        {
                            value: d ? a.map(function (e) {
                                return Xf(M(e, Zf, 16));
                            }) : null,
                            options: { Aa: '!' }
                        }
                    ],
                    [
                        'min_h',
                        {
                            value: d ? a.map(function (e) {
                                return Yf(M(e, Zf, 16));
                            }) : null,
                            options: { Aa: '!' }
                        }
                    ]
                ]);
            };
            eg = function (a, b) {
                b = void 0 === b ? ag : b;
                var c = ka(a), d = function (f) {
                        f = _.G(f);
                        f.next();
                        f = bg(f);
                        return b(c, f);
                    }, e = function (f) {
                        var g = _.G(f);
                        f = g.next().value;
                        g = bg(g);
                        return a.apply(f, g);
                    };
                return function (f) {
                    for (var g = [], h = 0; h < arguments.length; ++h)
                        g[h] = arguments[h];
                    h = this || _.F;
                    var k = cg.get(h);
                    k || (k = {}, cg.set(h, k));
                    return dg(k, [this].concat(_.ec(g)), e, d);
                };
            };
            gg = function (a) {
                a = fg(a);
                var b = [];
                _.$b(a, function (c, d) {
                    c = c.filter(function () {
                        return !0;
                    });
                    c.length && (c = c.map(encodeURIComponent), d = encodeURIComponent(d), b.push(d + '=' + c.join()));
                });
                return b;
            };
            ig = function (a, b, c, d) {
                var e;
                if (a = Wc(a, b)) {
                    if (c = _.v(hg) || (null !== (e = x(c, 24)) && void 0 !== e ? e : x(d, 30)))
                        b = a.getBoundingClientRect(), c = b.top, d = b.bottom, 0 === b.height ? c = !1 : (b = _.F.innerHeight, c = 0 < d && d < b || 0 < c && c < b);
                    c || (a.style.display = 'none');
                }
            };
            jg = function () {
                var a, b, c;
                return null !== (c = null === (b = null === (a = window.performance) || void 0 === a ? void 0 : a.now) || void 0 === b ? void 0 : b.call(a)) && void 0 !== c ? c : Date.now();
            };
            kg = function (a) {
                var b = jg();
                for (a = b + a; jg() < a;);
                return jg() - b;
            };
            lg = function (a, b) {
                var c = a.shift();
                void 0 !== c && (b(c), a.length && window.requestAnimationFrame(function () {
                    return void lg(a, b);
                }));
            };
            ng = function () {
                var a = void 0 === a ? kg : a;
                if ('function' === typeof window.requestAnimationFrame) {
                    var b = mg();
                    b.length && window.requestAnimationFrame(function () {
                        return void lg(b, a);
                    });
                }
            };
            mg = function () {
                return og(pg).map(function (a) {
                    return _.qg(a, 0);
                }).filter(function (a) {
                    return null !== a;
                });
            };
            sg = function (a) {
                var b = _.lb(rg);
                return -1 !== b ? b : yf(a, 1) ? yf(a, 3) && 0 !== rd() ? H(a, 1) * fe(a, 3) : H(a, 1) : null;
            };
            tg = function (a) {
                var b = {};
                a = _.G(a);
                for (var c = a.next(); !c.done; c = a.next())
                    c = c.value, b[H(c, 1)] = H(c, 2);
                return b;
            };
            wg = function (a, b) {
                var c;
                return ug(a, vg, function (d) {
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
            yg = function (a) {
                xg = a;
            };
            zg = function (a) {
                mc('gpt_fc_has_namespace_but_no_iframes', function (b) {
                    Zb(b);
                    q(b, 'networkId', a);
                }, { wa: 1 });
            };
            Eg = function () {
                return Ag() ? 0 <= Bg(Cg(), 11) : Dg() && 0 <= Bg(Cg(), 65);
            };
            Hg = function (a) {
                var b = Fg(a);
                return (L = [
                    'google_debug',
                    'dfpdeb',
                    'google_console',
                    'google_force_console',
                    'googfc'
                ], _.r(L, 'find')).call(L, function (c) {
                    return null !== Gg(b, c);
                }) || null;
            };
            Jg = function (a, b) {
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
                                return f && clearTimeout(f), f = 0, l = new Ee(), m = c(l.resolve), n = ++g, C(t, 0, 2);
                            if (g !== n)
                                return m(!1), t.return(l.promise);
                            e ? e(!1) : m(!0);
                            p = c(function () {
                                e = null;
                                f = 0;
                                m(!0);
                            });
                            f = setTimeout(p, a);
                            _.Ig(b, function () {
                                return void m(!1);
                            });
                            e = m;
                            return t.return(l.promise);
                        });
                    });
                };
            };
            Lg = function (a) {
                var b = Kg(), c = a.replace('googletag.', '');
                return new D.Promise(function (d) {
                    var e = !1;
                    Object.defineProperty(b, c, {
                        value: function (f, g) {
                            e || d({
                                Vb: f,
                                kc: g
                            });
                            e = !0;
                        },
                        writable: !1,
                        enumerable: !1
                    });
                });
            };
            Qg = function (a) {
                switch (a.id) {
                case 5:
                    return new Mg(a);
                case 6:
                    return new Ng(a);
                case 0:
                    return new Og(a);
                default:
                    return new Pg(a);
                }
            };
            Rg = function (a) {
                if (!Pe(a))
                    return -1;
                a = a.pageYOffset;
                return 0 > a ? -1 : a;
            };
            Sg = function (a, b) {
                return null === a || void 0 === a ? void 0 : a.replace(/\$\{AUCTION_PRICE\}/g, String(b));
            };
            Ug = function (a) {
                var b = {
                    threshold: [
                        0,
                        0.3,
                        0.5,
                        0.75,
                        1
                    ]
                };
                return window.IntersectionObserver ? new IntersectionObserver(a, b) : new Tg(a, b);
            };
            Vg = function (a) {
                return new D.Promise(function (b) {
                    return void setTimeout(b, a);
                });
            };
            Wg = function (a, b) {
                return 'undefined' === typeof IntersectionObserver ? new Tg(b, { rootMargin: a }) : new IntersectionObserver(b, { rootMargin: a });
            };
            Xg = function (a) {
                var b = window;
                return 0 <= a.bottom && a.top < b.innerHeight && 0 <= a.right && a.left < b.innerWidth;
            };
            ch = function (a) {
                var b, c, d, e, f;
                if (null == a)
                    return [];
                var g = null !== (b = Yg(a, 1)) && void 0 !== b ? b : 0, h = null !== (c = Yg(a, 2)) && void 0 !== c ? c : 0, k = null !== (d = Yg(a, 3)) && void 0 !== d ? d : 0, l = null !== (e = Yg(a, 4)) && void 0 !== e ? e : 0;
                a = null !== (f = Yg(a, 5)) && void 0 !== f ? f : 0;
                for (var m = [], n = Math.round(1000 * Math.random()), p = 0; p < g; p++) {
                    for (var t = new Zg(), u = 0; u < l; u++)
                        Ef(t, 6, (n + u).toString());
                    Ef(t, 2, n);
                    Ef(t, 3, n % 97);
                    Fb(t, 4, 1);
                    u = new $g();
                    for (var z = 0; z < a; z++)
                        Ef(u, 1, z);
                    Db(t, 7, u);
                    u = new ah();
                    for (z = 0; z < h; z++)
                        Ef(u, 1, n + z);
                    for (z = 0; z < k; z++)
                        Ef(u, 2, n + z);
                    Db(t, 1, u);
                    u = m;
                    z = u.push;
                    var y = new bh();
                    t = Db(y, 2, t);
                    z.call(u, t);
                }
                return m;
            };
            hh = function () {
                dh('pubadsReady', !0);
                if (_.v(eh)) {
                    var a = 0;
                    Object.defineProperty(Kg(), 'pubadsReady', {
                        get: function () {
                            Bc().M(fh());
                            if (5 > a) {
                                var b = _.lb(gh);
                                mc('gpt_pubads_ready', function (c) {
                                    ++a;
                                    Zb(c);
                                    var d = Error('pubadsReady');
                                    q(c, 'stack', Sb(d.stack, d.message));
                                }, { wa: b });
                            }
                            return !0;
                        },
                        configurable: !0,
                        enumerable: !0
                    });
                }
            };
            kh = function (a) {
                return _.v(ih) && 'rewardedSlotCanceled' === a ? null : (L = _.r(Object, 'values').call(Object, jh), _.r(L, 'find')).call(L, function (b) {
                    return b === a;
                });
            };
            nh = function () {
                var a = lh.N();
                return Rc(a, function () {
                    return new mh(a);
                });
            };
            qh = function () {
                var a = oh.N();
                return Rc(a, function () {
                    return new ph(a);
                });
            };
            sh = function (a) {
                return Rc(a, function () {
                    return new rh(a, a.l);
                });
            };
            wh = function (a, b, c) {
                var d = th(b, c, void 0, !0), e = d.slotId;
                d = d.Va;
                if (!e || !d)
                    return Bc().M(uh('PubAdsService.definePassback', [
                        b,
                        c
                    ])), null;
                E(d, 17, !0);
                a.Fa(e, d);
                return {
                    Mc: sh(new vh(e, a)),
                    Va: d
                };
            };
            Ah = function () {
                var a = _.xh(yh);
                return Rc(a, function () {
                    return new zh(a);
                });
            };
            Ch = function (a) {
                return !!Se(Bh, function (b) {
                    return b === a;
                });
            };
            Fh = function (a, b, c) {
                c = _.xh(Dh).add(a, [
                    1,
                    1
                ], {
                    kb: c,
                    format: b
                });
                a = c.slotId;
                c = c.Va;
                if (a && c) {
                    if (5 === b && _.v(Eh))
                        return null;
                    E(c, 15, b);
                    _.Ig(a, function () {
                        var d = window, e = pd(b);
                        if (null != e) {
                            d = _.qd(d);
                            var f = d.adCount && d.adCount[e];
                            f && (d.adCount[e] = f - 1);
                        }
                    });
                }
                return null !== a && void 0 !== a ? a : null;
            };
            Jh = function () {
                var a = window, b = Gh.N().j, c;
                if (a === a.top)
                    for (var d = {}, e = _.G(_.r(Hh, 'entries').call(Hh)), f = e.next(); !f.done; d = {
                            fb: d.fb,
                            Ub: d.Ub
                        }, f = e.next())
                        f = _.G(f.value), d.fb = f.next().value, d.Ub = f.next().value, (L = null !== (c = a.location.hash) && void 0 !== c ? c : '', _.r(L, 'includes')).call(L, 'gam' + d.fb + 'Demo') && rc(789, function (g) {
                            return function () {
                                window.console && window.console.warn && window.console.warn('GPT - Demo ' + g.fb + ' ENABLED');
                                var h = Kg().defineOutOfPageSlot('/6499/example/' + g.fb.toLowerCase(), g.Ub);
                                h && (h.addService(Kg().pubads()), Ih(a.document, kc(790, function () {
                                    Kg().enableServices();
                                    Kg().display(h);
                                    x(b, 4) && Kg().pubads().refresh([h]);
                                })));
                            };
                        }(d));
            };
            Kh = function (a) {
                var b = function () {
                    return a.Reflect.construct(a.HTMLElement, [], this.constructor);
                };
                b.prototype = a.HTMLElement.prototype;
                b.prototype.constructor = b;
                _.r(Object, 'setPrototypeOf').call(Object, b, a.HTMLElement);
                return b;
            };
            Uh = function () {
                var a = window;
                var b = void 0 === b ? Gd : b;
                var c;
                if (a.customElements && null !== (c = a.Reflect) && void 0 !== c && c.construct && !a.customElements.get('google-product-ad')) {
                    var d = Kh(a), e = function () {
                            return d.apply(this, arguments) || this;
                        };
                    _.N(e, d);
                    e.prototype.connectedCallback = function () {
                        var f = this.dataset.rendering;
                        if (f) {
                            try {
                                var g = Lh(Mh, Nh(f));
                            } catch (k) {
                            }
                            if (null === g || void 0 === g ? 0 : yf(g, 1)) {
                                f = Oh(Ph(Fb(new Qh(), 4, 1), 7), Pb());
                                g = M(g, Rh, 1);
                                var h = g = Db(f, 5, g);
                            } else
                                Bc().error(Sh('invalid data-rendering attribute'));
                        } else
                            Bc().error(Sh('missing data-rendering attribute'));
                        (g = h) && b(Th(window, g));
                    };
                    a.customElements.define('google-product-ad', e);
                }
            };
            Vh = function (a) {
                var b = 0;
                return function () {
                    return b < a.length ? {
                        done: !1,
                        value: a[b++]
                    } : { done: !0 };
                };
            };
            Wh = 'function' == typeof Object.defineProperties ? Object.defineProperty : function (a, b, c) {
                if (a == Array.prototype || a == Object.prototype)
                    return a;
                a[b] = c.value;
                return a;
            };
            Xh = function (a) {
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
            Yh = Xh(this);
            Zh = 'function' === typeof Symbol && 'symbol' === typeof Symbol('x');
            D = {};
            $h = {};
            _.r = function (a, b) {
                var c = $h[b];
                if (null == c)
                    return a[b];
                c = a[c];
                return void 0 !== c ? c : a[b];
            };
            ai = function (a, b, c) {
                if (b)
                    a: {
                        var d = a.split('.');
                        a = 1 === d.length;
                        var e = d[0], f;
                        !a && e in D ? f = D : f = Yh;
                        for (e = 0; e < d.length - 1; e++) {
                            var g = d[e];
                            if (!(g in f))
                                break a;
                            f = f[g];
                        }
                        d = d[d.length - 1];
                        c = Zh && 'es6' === c ? f[d] : null;
                        b = b(c);
                        null != b && (a ? Wh(D, d, {
                            configurable: !0,
                            writable: !0,
                            value: b
                        }) : b !== c && (void 0 === $h[d] && (a = 1000000000 * Math.random() >>> 0, $h[d] = Zh ? Yh.Symbol(d) : '$jscp$' + a + '$' + d), Wh(f, $h[d], {
                            configurable: !0,
                            writable: !0,
                            value: b
                        })));
                    }
            };
            ai('Symbol', function (a) {
                if (a)
                    return a;
                var b = function (f, g) {
                    this.j = f;
                    Wh(this, 'description', {
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
            ai('Symbol.iterator', function (a) {
                if (a)
                    return a;
                a = (0, D.Symbol)('Symbol.iterator');
                for (var b = 'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(' '), c = 0; c < b.length; c++) {
                    var d = Yh[b[c]];
                    'function' === typeof d && 'function' != typeof d.prototype[a] && Wh(d.prototype, a, {
                        configurable: !0,
                        writable: !0,
                        value: function () {
                            return bi(Vh(this));
                        }
                    });
                }
                return a;
            }, 'es6');
            bi = function (a) {
                a = { next: a };
                a[_.r(D.Symbol, 'iterator')] = function () {
                    return this;
                };
                return a;
            };
            ci = function (a) {
                return a.raw = a;
            };
            _.G = function (a) {
                var b = 'undefined' != typeof D.Symbol && _.r(D.Symbol, 'iterator') && a[_.r(D.Symbol, 'iterator')];
                return b ? b.call(a) : { next: Vh(a) };
            };
            bg = function (a) {
                for (var b, c = []; !(b = a.next()).done;)
                    c.push(b.value);
                return c;
            };
            _.ec = function (a) {
                return a instanceof Array ? a : bg(_.G(a));
            };
            di = 'function' == typeof Object.create ? Object.create : function (a) {
                var b = function () {
                };
                b.prototype = a;
                return new b();
            };
            ei = function () {
                function a() {
                    function c() {
                    }
                    new c();
                    _.r(D.Reflect, 'construct').call(D.Reflect, c, [], function () {
                    });
                    return new c() instanceof c;
                }
                if (Zh && 'undefined' != typeof D.Reflect && _.r(D.Reflect, 'construct')) {
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
                    e = di(e.prototype || Object.prototype);
                    return Function.prototype.apply.call(c, e, d) || e;
                };
            }();
            if (Zh && 'function' == typeof _.r(Object, 'setPrototypeOf'))
                fi = _.r(Object, 'setPrototypeOf');
            else {
                var gi;
                a: {
                    var hi = { a: !0 }, ii = {};
                    try {
                        ii.__proto__ = hi;
                        gi = ii.a;
                        break a;
                    } catch (a) {
                    }
                    gi = !1;
                }
                fi = gi ? function (a, b) {
                    a.__proto__ = b;
                    if (a.__proto__ !== b)
                        throw new TypeError(a + ' is not extensible');
                    return a;
                } : null;
            }
            ji = fi;
            _.N = function (a, b) {
                a.prototype = di(b.prototype);
                a.prototype.constructor = a;
                if (ji)
                    ji(a, b);
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
            ki = function () {
                this.D = !1;
                this.A = null;
                this.l = void 0;
                this.j = 1;
                this.o = this.H = 0;
                this.m = null;
            };
            li = function (a) {
                if (a.D)
                    throw new TypeError('Generator is already running');
                a.D = !0;
            };
            ki.prototype.G = function (a) {
                this.l = a;
            };
            var mi = function (a, b) {
                a.m = {
                    Ec: b,
                    yd: !0
                };
                a.j = a.H || a.o;
            };
            ki.prototype.return = function (a) {
                this.m = { return: a };
                this.j = this.o;
            };
            var C = function (a, b, c) {
                    a.j = c;
                    return { value: b };
                }, ni = function (a) {
                    a.j = 0;
                }, Bd = function (a, b) {
                    a.j = b;
                    a.H = 0;
                }, Cd = function (a) {
                    a.H = 0;
                    var b = a.m.Ec;
                    a.m = null;
                    return b;
                }, oi = function (a) {
                    this.j = new ki();
                    this.l = a;
                }, ri = function (a, b) {
                    li(a.j);
                    var c = a.j.A;
                    if (c)
                        return pi(a, 'return' in c ? c['return'] : function (d) {
                            return {
                                value: d,
                                done: !0
                            };
                        }, b, a.j.return);
                    a.j.return(b);
                    return qi(a);
                }, pi = function (a, b, c, d) {
                    try {
                        var e = b.call(a.j.A, c);
                        if (!(e instanceof Object))
                            throw new TypeError('Iterator result ' + e + ' is not an object');
                        if (!e.done)
                            return a.j.D = !1, e;
                        var f = e.value;
                    } catch (g) {
                        return a.j.A = null, mi(a.j, g), qi(a);
                    }
                    a.j.A = null;
                    d.call(a.j, f);
                    return qi(a);
                }, qi = function (a) {
                    for (; a.j.j;)
                        try {
                            var b = a.l(a.j);
                            if (b)
                                return a.j.D = !1, {
                                    value: b.value,
                                    done: !1
                                };
                        } catch (c) {
                            a.j.l = void 0, mi(a.j, c);
                        }
                    a.j.D = !1;
                    if (a.j.m) {
                        b = a.j.m;
                        a.j.m = null;
                        if (b.yd)
                            throw b.Ec;
                        return {
                            value: b.return,
                            done: !0
                        };
                    }
                    return {
                        value: void 0,
                        done: !0
                    };
                }, si = function (a) {
                    this.next = function (b) {
                        li(a.j);
                        a.j.A ? b = pi(a, a.j.A.next, b, a.j.G) : (a.j.G(b), b = qi(a));
                        return b;
                    };
                    this.throw = function (b) {
                        li(a.j);
                        a.j.A ? b = pi(a, a.j.A['throw'], b, a.j.G) : (mi(a.j, b), b = qi(a));
                        return b;
                    };
                    this.return = function (b) {
                        return ri(a, b);
                    };
                    this[_.r(D.Symbol, 'iterator')] = function () {
                        return this;
                    };
                }, B = function (a, b) {
                    b = new si(new oi(b));
                    ji && a.prototype && ji(b, a.prototype);
                    return b;
                }, ti = function (a) {
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
                }, ui = function (a) {
                    return ti(new si(new oi(a)));
                };
            ai('Reflect', function (a) {
                return a ? a : {};
            }, 'es6');
            ai('Reflect.construct', function () {
                return ei;
            }, 'es6');
            ai('Reflect.setPrototypeOf', function (a) {
                return a ? a : ji ? function (b, c) {
                    try {
                        return ji(b, c), !0;
                    } catch (d) {
                        return !1;
                    }
                } : null;
            }, 'es6');
            ai('Promise', function (a) {
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
                var d = Yh.setTimeout;
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
                            var h = Yh.console;
                            'undefined' !== typeof h && h.error(g.A);
                        }
                    }, 1);
                };
                e.prototype.F = function () {
                    if (this.G)
                        return !1;
                    var g = Yh.CustomEvent, h = Yh.Event, k = Yh.dispatchEvent;
                    if ('undefined' === typeof k)
                        return !0;
                    'function' === typeof g ? g = new g('unhandledrejection', { cancelable: !0 }) : 'function' === typeof h ? g = new h('unhandledrejection', { cancelable: !0 }) : (g = Yh.document.createEvent('CustomEvent'), g.initCustomEvent('unhandledrejection', !1, !0, g));
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
                    g.Cb(h.resolve, h.reject);
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
                            } catch (z) {
                                m(z);
                            }
                        } : t;
                    }
                    var l, m, n = new e(function (p, t) {
                            l = p;
                            m = t;
                        });
                    this.Cb(k(g, l), k(h, m));
                    return n;
                };
                e.prototype.catch = function (g) {
                    return this.then(void 0, g);
                };
                e.prototype.Cb = function (g, h) {
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
                            c(m.value).Cb(h, k);
                    });
                };
                e.all = function (g) {
                    var h = _.G(g), k = h.next();
                    return k.done ? c([]) : new e(function (l, m) {
                        function n(u) {
                            return function (z) {
                                p[u] = z;
                                t--;
                                0 == t && l(p);
                            };
                        }
                        var p = [], t = 0;
                        do
                            p.push(void 0), t++, c(k.value).Cb(n(p.length - 1), m), k = h.next();
                        while (!k.done);
                    });
                };
                return e;
            }, 'es6');
            ai('Object.setPrototypeOf', function (a) {
                return a || ji;
            }, 'es6');
            var vi = function (a, b) {
                    return Object.prototype.hasOwnProperty.call(a, b);
                }, wi = Zh && 'function' == typeof _.r(Object, 'assign') ? _.r(Object, 'assign') : function (a, b) {
                    for (var c = 1; c < arguments.length; c++) {
                        var d = arguments[c];
                        if (d)
                            for (var e in d)
                                vi(d, e) && (a[e] = d[e]);
                    }
                    return a;
                };
            ai('Object.assign', function (a) {
                return a || wi;
            }, 'es6');
            ai('WeakMap', function (a) {
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
                    if (!vi(g, d)) {
                        var k = new b();
                        Wh(g, d, { value: k });
                    }
                    if (!vi(g, d))
                        throw Error('WeakMap key fail: ' + g);
                    g[d][this.j] = h;
                    return this;
                };
                f.prototype.get = function (g) {
                    return c(g) && vi(g, d) ? g[d][this.j] : void 0;
                };
                f.prototype.has = function (g) {
                    return c(g) && vi(g, d) && vi(g[d], this.j);
                };
                f.prototype.delete = function (g) {
                    return c(g) && vi(g, d) && vi(g[d], this.j) ? delete g[d][this.j] : !1;
                };
                return f;
            }, 'es6');
            ai('Map', function (a) {
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
                        Pa: this.j.Pa,
                        head: this.j,
                        key: h,
                        value: k
                    }, l.list.push(l.pa), this.j.Pa.next = l.pa, this.j.Pa = l.pa, this.size++);
                    return this;
                };
                c.prototype.delete = function (h) {
                    h = d(this, h);
                    return h.pa && h.list ? (h.list.splice(h.index, 1), h.list.length || delete this.l[h.id], h.pa.Pa.next = h.pa.next, h.pa.next.Pa = h.pa.Pa, h.pa.head = null, this.size--, !0) : !1;
                };
                c.prototype.clear = function () {
                    this.l = {};
                    this.j = this.j.Pa = f();
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
                        if (m && vi(h.l, l))
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
                        return bi(function () {
                            if (l) {
                                for (; l.head != h.j;)
                                    l = l.Pa;
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
                        return h.Pa = h.next = h.head = h;
                    }, g = 0;
                return c;
            }, 'es6');
            var xi = function (a, b, c) {
                if (null == a)
                    throw new TypeError('The \'this\' value for String.prototype.' + c + ' must not be null or undefined');
                if (b instanceof RegExp)
                    throw new TypeError('First argument to String.prototype.' + c + ' must not be a regular expression');
                return a + '';
            };
            ai('String.prototype.endsWith', function (a) {
                return a ? a : function (b, c) {
                    var d = xi(this, b, 'endsWith');
                    void 0 === c && (c = d.length);
                    c = Math.max(0, Math.min(c | 0, d.length));
                    for (var e = b.length; 0 < e && 0 < c;)
                        if (d[--c] != b[--e])
                            return !1;
                    return 0 >= e;
                };
            }, 'es6');
            var yi = function (a, b, c) {
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
            ai('Array.prototype.find', function (a) {
                return a ? a : function (b, c) {
                    return yi(this, b, c).Zc;
                };
            }, 'es6');
            ai('String.prototype.startsWith', function (a) {
                return a ? a : function (b, c) {
                    var d = xi(this, b, 'startsWith'), e = d.length, f = b.length;
                    c = Math.max(0, Math.min(c | 0, d.length));
                    for (var g = 0; g < f && c < e;)
                        if (d[c++] != b[g++])
                            return !1;
                    return g >= f;
                };
            }, 'es6');
            var zi = function (a, b) {
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
            ai('Array.prototype.entries', function (a) {
                return a ? a : function () {
                    return zi(this, function (b, c) {
                        return [
                            b,
                            c
                        ];
                    });
                };
            }, 'es6');
            ai('Array.prototype.findIndex', function (a) {
                return a ? a : function (b, c) {
                    return yi(this, b, c).i;
                };
            }, 'es6');
            ai('Object.entries', function (a) {
                return a ? a : function (b) {
                    var c = [], d;
                    for (d in b)
                        vi(b, d) && c.push([
                            d,
                            b[d]
                        ]);
                    return c;
                };
            }, 'es8');
            ai('Set', function (a) {
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
            ai('Array.from', function (a) {
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
            ai('Number.isFinite', function (a) {
                return a ? a : function (b) {
                    return 'number' !== typeof b ? !1 : !isNaN(b) && Infinity !== b && -Infinity !== b;
                };
            }, 'es6');
            ai('Array.prototype.keys', function (a) {
                return a ? a : function () {
                    return zi(this, function (b) {
                        return b;
                    });
                };
            }, 'es6');
            ai('Array.prototype.values', function (a) {
                return a ? a : function () {
                    return zi(this, function (b, c) {
                        return c;
                    });
                };
            }, 'es8');
            ai('Object.is', function (a) {
                return a ? a : function (b, c) {
                    return b === c ? 0 !== b || 1 / b === 1 / c : b !== b && c !== c;
                };
            }, 'es6');
            ai('Array.prototype.includes', function (a) {
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
            ai('String.prototype.includes', function (a) {
                return a ? a : function (b, c) {
                    return -1 !== xi(this, b, 'includes').indexOf(b, c || 0);
                };
            }, 'es6');
            ai('Number.isInteger', function (a) {
                return a ? a : function (b) {
                    return _.r(Number, 'isFinite').call(Number, b) ? b === Math.floor(b) : !1;
                };
            }, 'es6');
            ai('Object.values', function (a) {
                return a ? a : function (b) {
                    var c = [], d;
                    for (d in b)
                        vi(b, d) && c.push(b[d]);
                    return c;
                };
            }, 'es8');
            ai('Number.isNaN', function (a) {
                return a ? a : function (b) {
                    return 'number' === typeof b && isNaN(b);
                };
            }, 'es6');
            _.F = this || self;
            Ai = function () {
            };
            Bi = function (a) {
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
                return Object.prototype.hasOwnProperty.call(a, Ci) && a[Ci] || (a[Ci] = ++Di);
            };
            Ci = 'closure_uid_' + (1000000000 * Math.random() >>> 0);
            Di = 0;
            Ei = function (a, b, c) {
                return a.call.apply(a.bind, arguments);
            };
            Fi = function (a, b, c) {
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
            _.Gi = function (a, b, c) {
                Function.prototype.bind && -1 != Function.prototype.bind.toString().indexOf('native code') ? _.Gi = Ei : _.Gi = Fi;
                return _.Gi.apply(null, arguments);
            };
            _.Hi = function (a, b) {
                var c = Array.prototype.slice.call(arguments, 1);
                return function () {
                    var d = c.slice();
                    d.push.apply(d, arguments);
                    return a.apply(this, d);
                };
            };
            Mf = function () {
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
            var Ii;
            var Ji, Ki, Li, Xc, Ni;
            Ji = function () {
                return !0;
            };
            Ki = function () {
                return null;
            };
            Li = function (a) {
                return function () {
                    return !a.apply(this, arguments);
                };
            };
            Xc = function (a) {
                var b = !1, c;
                return function () {
                    b || (c = a(), b = !0);
                    return c;
                };
            };
            _.Mi = function (a) {
                var b = a;
                return function () {
                    if (b) {
                        var c = b;
                        b = null;
                        c();
                    }
                };
            };
            Ni = function (a, b, c) {
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
            var Pi;
            _.da = function (a, b) {
                return Array.prototype.indexOf.call(a, b, void 0);
            };
            _.Oi = function (a, b) {
                Array.prototype.forEach.call(a, b, void 0);
            };
            _.Be = function (a, b) {
                return Array.prototype.filter.call(a, b, void 0);
            };
            _.ze = function (a, b) {
                return Array.prototype.map.call(a, b, void 0);
            };
            Pi = function (a, b) {
                return Array.prototype.reduce.call(a, b, 0);
            };
            _.Qi = function (a, b) {
                return Array.prototype.some.call(a, b, void 0);
            };
            var Aa = 'constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf'.split(' ');
            var Ti = function (a, b) {
                this.j = a === Ri && b || '';
                this.l = Si;
            };
            Ti.prototype.ab = !0;
            Ti.prototype.Za = function () {
                return this.j;
            };
            var Ui = function (a) {
                    return a instanceof Ti && a.constructor === Ti && a.l === Si ? a.j : 'type_error:Const';
                }, Vi = function (a) {
                    return new Ti(Ri, a);
                }, Si = {}, Ri = {};
            var Wi = {}, Xi = function (a, b) {
                    this.j = b === Wi ? a : '';
                    this.ab = !0;
                };
            Xi.prototype.Za = function () {
                return this.j.toString();
            };
            Xi.prototype.toString = function () {
                return this.j.toString();
            };
            var Zi = function (a, b) {
                this.j = b === Yi ? a : '';
            };
            Zi.prototype.ab = !0;
            Zi.prototype.Za = function () {
                return this.j.toString();
            };
            var dj = function (a, b) {
                a = $i.exec(aj(a));
                var c = a[3] || '';
                return bj(a[1] + cj('?', a[2] || '', b) + cj('#', c, void 0));
            };
            Zi.prototype.toString = function () {
                return this.j + '';
            };
            var aj = function (a) {
                    return db(a).toString();
                }, db = function (a) {
                    return a instanceof Zi && a.constructor === Zi ? a.j : 'type_error:TrustedResourceUrl';
                }, Ed = function (a, b) {
                    var c = Ui(a);
                    if (!ej.test(c))
                        throw Error('Invalid TrustedResourceUrl format: ' + c);
                    a = c.replace(fj, function (d, e) {
                        if (!Object.prototype.hasOwnProperty.call(b, e))
                            throw Error('Found marker, "' + e + '", in format string, "' + c + '", but no valid label mapping found in args: ' + JSON.stringify(b));
                        d = b[e];
                        return d instanceof Ti ? Ui(d) : encodeURIComponent(String(d));
                    });
                    return bj(a);
                }, fj = /%{(\w+)}/g, ej = /^((https:)?\/\/[0-9a-z.:[\]-]+\/|\/[^/\\]|[^:/\\%]+\/|[^:/\\%]*[?#]|about:blank#)/i, $i = /^([^?#]*)(\?[^#]*)?(#[\s\S]*)?/, Yi = {}, bj = function (a) {
                    return new Zi(a, Yi);
                }, cj = function (a, b, c) {
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
            var gj = function (a, b) {
                    var c = a.length - b.length;
                    return 0 <= c && a.indexOf(b, c) == c;
                }, hj = function (a) {
                    return /^[\s\xa0]*$/.test(a);
                }, ij = function (a) {
                    return /^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1];
                }, jj = /&/g, kj = /</g, lj = />/g, mj = /"/g, nj = /'/g, oj = /\x00/g, pj = /[\x00&<>"']/, Bg = function (a, b) {
                    var c = 0;
                    a = ij(String(a)).split('.');
                    b = ij(String(b)).split('.');
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
                            c = qj(0 == f[1].length ? 0 : parseInt(f[1], 10), 0 == g[1].length ? 0 : parseInt(g[1], 10)) || qj(0 == f[2].length, 0 == g[2].length) || qj(f[2], g[2]);
                            f = f[3];
                            g = g[3];
                        } while (0 == c);
                    }
                    return c;
                }, qj = function (a, b) {
                    return a < b ? -1 : a > b ? 1 : 0;
                };
            var sj = function (a, b) {
                    this.j = b === rj ? a : '';
                }, uj, rj;
            sj.prototype.ab = !0;
            sj.prototype.Za = function () {
                return this.j.toString();
            };
            sj.prototype.toString = function () {
                return this.j.toString();
            };
            _.tj = function (a) {
                return a instanceof sj && a.constructor === sj ? a.j : 'type_error:SafeUrl';
            };
            uj = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
            rj = {};
            var vj;
            a: {
                var wj = _.F.navigator;
                if (wj) {
                    var xj = wj.userAgent;
                    if (xj) {
                        vj = xj;
                        break a;
                    }
                }
                vj = '';
            }
            var yj = function (a) {
                    return -1 != vj.indexOf(a);
                }, zj = function (a) {
                    for (var b = /(\w[\w ]+)\/([^\s]+)\s*(?:\((.*?)\))?/g, c = [], d; d = b.exec(a);)
                        c.push([
                            d[1],
                            d[2],
                            d[3] || void 0
                        ]);
                    return c;
                };
            var Aj = function () {
                    return yj('Trident') || yj('MSIE');
                }, Dg = function () {
                    return yj('Firefox') || yj('FxiOS');
                }, Ag = function () {
                    return yj('Safari') && !(Bj() || yj('Coast') || yj('Opera') || yj('Edge') || yj('Edg/') || yj('OPR') || Dg() || yj('Silk') || yj('Android'));
                }, Bj = function () {
                    return (yj('Chrome') || yj('CriOS')) && !yj('Edge');
                }, Cg = function () {
                    function a(e) {
                        e = ca(e, d);
                        return c[e] || '';
                    }
                    var b = vj;
                    if (Aj())
                        return Cj(b);
                    b = zj(b);
                    var c = {};
                    b.forEach(function (e) {
                        c[e[0]] = e[1];
                    });
                    var d = _.Hi(xa, c);
                    return yj('Opera') ? a([
                        'Version',
                        'Opera'
                    ]) : yj('Edge') ? a(['Edge']) : yj('Edg/') ? a(['Edg']) : Bj() ? a([
                        'Chrome',
                        'CriOS',
                        'HeadlessChrome'
                    ]) : (b = b[2]) && b[1] || '';
                }, Cj = function (a) {
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
            var Gj;
            _.Ej = function (a, b, c) {
                this.j = c === _.Dj ? a : '';
            };
            _.Ej.prototype.ab = !0;
            _.Ej.prototype.Za = function () {
                return this.j.toString();
            };
            _.Ej.prototype.toString = function () {
                return this.j.toString();
            };
            _.Fj = function (a) {
                return a instanceof _.Ej && a.constructor === _.Ej ? a.j : 'type_error:SafeHtml';
            };
            _.Dj = {};
            Gj = new _.Ej(_.F.trustedTypes && _.F.trustedTypes.emptyHTML || '', 0, _.Dj);
            var Ij, Kj, Lj, Jj;
            _.Hj = Xc(function () {
                var a = document.createElement('div'), b = document.createElement('div');
                b.appendChild(document.createElement('div'));
                a.appendChild(b);
                b = a.firstChild.firstChild;
                a.innerHTML = _.Fj(Gj);
                return !b.parentElement;
            });
            Ij = function (a, b) {
                a.write(_.Fj(b));
            };
            Kj = function (a, b, c) {
                a.rel = c;
                -1 != c.toLowerCase().indexOf('stylesheet') ? (a.href = aj(b), (b = Jj('style[nonce],link[rel="stylesheet"][nonce]', a.ownerDocument && a.ownerDocument.defaultView)) && a.setAttribute('nonce', b)) : (b instanceof Zi ? b = aj(b) : b instanceof sj ? b = _.tj(b) : (b instanceof sj || (b = 'object' == typeof b && b.ab ? b.Za() : String(b), uj.test(b) || (b = 'about:invalid#zClosurez'), b = new sj(b, rj)), b = _.tj(b)), a.href = b);
            };
            Lj = /^[\w+/_-]+[=]{0,2}$/;
            Jj = function (a, b) {
                b = (b || _.F).document;
                return b.querySelector ? (a = b.querySelector(a)) && (a = a.nonce || a.getAttribute('nonce')) && Lj.test(a) ? a : '' : '';
            };
            var Mj, Nj, Oj, Pj, Qj, Sj;
            Mj = function (a) {
                pj.test(a) && (-1 != a.indexOf('&') && (a = a.replace(jj, '&amp;')), -1 != a.indexOf('<') && (a = a.replace(kj, '&lt;')), -1 != a.indexOf('>') && (a = a.replace(lj, '&gt;')), -1 != a.indexOf('"') && (a = a.replace(mj, '&quot;')), -1 != a.indexOf('\'') && (a = a.replace(nj, '&#39;')), -1 != a.indexOf('\0') && (a = a.replace(oj, '&#0;')));
                return a;
            };
            Nj = String.prototype.repeat ? function (a, b) {
                return a.repeat(b);
            } : function (a, b) {
                return Array(b + 1).join(a);
            };
            Oj = function (a) {
                a = String(a);
                var b = a.indexOf('.');
                -1 == b && (b = a.length);
                return Nj('0', Math.max(0, 2 - b)) + a;
            };
            Pj = function () {
                return Math.floor(2147483648 * Math.random()).toString(36) + Math.abs(Math.floor(2147483648 * Math.random()) ^ Mf()).toString(36);
            };
            Qj = 2147483648 * Math.random() | 0;
            _.Rj = function (a) {
                return String(a).replace(/\-([a-z])/g, function (b, c) {
                    return c.toUpperCase();
                });
            };
            Sj = function (a) {
                return a.replace(/(^|[\s]+)([a-z])/g, function (b, c, d) {
                    return c + d.toUpperCase();
                });
            };
            var Tj = 'function' === typeof Uint8Array.prototype.slice, Ca = 0, Da = 0;
            var Uj = function () {
                this.j = new Uint8Array(64);
                this.l = 0;
            };
            Uj.prototype.push = function (a) {
                if (!(this.l + 1 < this.j.length)) {
                    var b = this.j;
                    this.j = new Uint8Array(Math.ceil(1 + 2 * this.j.length));
                    this.j.set(b);
                }
                this.j[this.l++] = a;
            };
            Uj.prototype.length = function () {
                return this.l;
            };
            Uj.prototype.end = function () {
                var a = this.j, b = this.l;
                this.l = 0;
                return Tj ? a.slice(0, b) : new Uint8Array(a.subarray(0, b));
            };
            var Vj = function (a) {
                    for (var b = Ca, c = Da; 0 < c || 127 < b;)
                        a.push(b & 127 | 128), b = (b >>> 7 | c << 25) >>> 0, c >>>= 7;
                    a.push(b);
                }, Wj = function (a, b) {
                    for (; 127 < b;)
                        a.push(b & 127 | 128), b >>>= 7;
                    a.push(b);
                }, Xj = function (a, b) {
                    if (0 <= b)
                        Wj(a, b);
                    else {
                        for (var c = 0; 9 > c; c++)
                            a.push(b & 127 | 128), b >>= 7;
                        a.push(1);
                    }
                };
            var Yj = function () {
                return yj('iPhone') && !yj('iPod') && !yj('iPad');
            };
            var Zj = function (a) {
                Zj[' '](a);
                return a;
            };
            Zj[' '] = Ai;
            var ak = function (a, b) {
                    try {
                        return Zj(a[b]), !0;
                    } catch (c) {
                    }
                    return !1;
                }, dg = function (a, b, c, d) {
                    d = d ? d(b) : b;
                    return Object.prototype.hasOwnProperty.call(a, d) ? a[d] : a[d] = c(b);
                };
            var bk, dk, ek, fk, gk, hk, ik, jk, kk, lk, mk, nk;
            bk = yj('Opera');
            _.ck = Aj();
            dk = yj('Edge');
            ek = dk || _.ck;
            fk = yj('Gecko') && !(-1 != vj.toLowerCase().indexOf('webkit') && !yj('Edge')) && !(yj('Trident') || yj('MSIE')) && !yj('Edge');
            gk = -1 != vj.toLowerCase().indexOf('webkit') && !yj('Edge');
            hk = gk && yj('Mobile');
            ik = yj('Android');
            jk = Yj();
            kk = yj('iPad');
            lk = yj('iPod');
            mk = function () {
                var a = _.F.document;
                return a ? a.documentMode : void 0;
            };
            a: {
                var ok = '', pk = function () {
                        var a = vj;
                        if (fk)
                            return /rv:([^\);]+)(\)|;)/.exec(a);
                        if (dk)
                            return /Edge\/([\d\.]+)/.exec(a);
                        if (_.ck)
                            return /\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);
                        if (gk)
                            return /WebKit\/(\S+)/.exec(a);
                        if (bk)
                            return /(?:Version)[ \/]?(\S+)/.exec(a);
                    }();
                pk && (ok = pk ? pk[1] : '');
                if (_.ck) {
                    var qk = mk();
                    if (null != qk && qk > parseFloat(ok)) {
                        nk = String(qk);
                        break a;
                    }
                }
                nk = ok;
            }
            var rk = nk, sk = {}, tk = function (a) {
                    return dg(sk, a, function () {
                        return 0 <= Bg(rk, a);
                    });
                }, uk;
            if (_.F.document && _.ck) {
                var vk = mk();
                uk = vk ? vk : parseInt(rk, 10) || void 0;
            } else
                uk = void 0;
            var wk = uk;
            var xk = Bj(), yk = Ag() && !(Yj() || yj('iPad') || yj('iPod'));
            var zk = {}, Ak = null, Bk = fk || gk && !yk || bk || 'function' == typeof _.F.btoa, Ka = function (a, b) {
                    void 0 === b && (b = 0);
                    Ck();
                    b = zk[b];
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
                }, Dk = function (a, b) {
                    if (Bk && !b)
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
                }, Nh = function (a) {
                    var b = '';
                    Ek(a, function (c) {
                        b += String.fromCharCode(c);
                    });
                    return b;
                }, Ek = function (a, b) {
                    function c(k) {
                        for (; d < a.length;) {
                            var l = a.charAt(d++), m = Ak[l];
                            if (null != m)
                                return m;
                            if (!hj(l))
                                throw Error('Unknown base64 encoding at char: ' + l);
                        }
                        return k;
                    }
                    Ck();
                    for (var d = 0;;) {
                        var e = c(-1), f = c(0), g = c(64), h = c(64);
                        if (64 === h && -1 === e)
                            break;
                        b(e << 2 | f >> 4);
                        64 != g && (b(f << 4 & 240 | g >> 2), 64 != h && b(g << 6 & 192 | h));
                    }
                }, Ck = function () {
                    if (!Ak) {
                        Ak = {};
                        for (var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'.split(''), b = [
                                    '+/=',
                                    '+/',
                                    '-_=',
                                    '-_.',
                                    '-_'
                                ], c = 0; 5 > c; c++) {
                            var d = a.concat(b[c].split(''));
                            zk[c] = d;
                            for (var e = 0; e < d.length; e++) {
                                var f = d[e];
                                void 0 === Ak[f] && (Ak[f] = e);
                            }
                        }
                    }
                };
            var $d = function () {
                    this.A = [];
                    this.l = 0;
                    this.j = new Uj();
                }, Fk = function (a, b) {
                    Wj(a.j, 8 * b + 2);
                    b = a.j.end();
                    a.A.push(b);
                    a.l += b.length;
                    return {
                        Ed: a.l,
                        dd: a.A.length - 1
                    };
                }, Gk = function (a, b) {
                    var c = a.j.end();
                    a.A.push(c);
                    a.l += c.length;
                    Wj(a.j, a.l + a.j.length() - b.Ed);
                    c = a.j.end();
                    a.l += c.length;
                    a.A.splice(1 + b.dd, 0, c);
                }, be = function (a) {
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
                }, Hk = function (a, b, c) {
                    null != c && (Wj(a.j, 8 * b), Xj(a.j, c));
                }, Ik = function (a, b, c) {
                    null != c && (Wj(a.j, 8 * b), a = a.j, Ea(c), Vj(a));
                }, Jk = function (a, b, c) {
                    null != c && null != c && (Wj(a.j, 8 * b), a = a.j, Ea(c), Vj(a));
                }, Kk = function (a, b, c) {
                    null != c && (c = parseInt(c, 10), Wj(a.j, 8 * b), Xj(a.j, c));
                }, Lk = function (a, b, c) {
                    if (null != c) {
                        b = Fk(a, b);
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
                        Gk(a, b);
                    }
                }, Nk = function (a, b, c) {
                    var d = Mk;
                    null != c && (b = Fk(a, b), d(c, a), Gk(a, b));
                }, Ok = function (a, b, c, d) {
                    if (null != c)
                        for (var e = 0; e < c.length; e++) {
                            var f = Fk(a, b);
                            d(c[e], a);
                            Gk(a, f);
                        }
                };
            var Ha = 'function' === typeof Uint8Array, Pk = {
                    Bd: {
                        value: !0,
                        configurable: !0
                    }
                }, Ja = function (a) {
                    Array.isArray(a) && !Object.isFrozen(a) && Object.defineProperties(a, Pk);
                    return a;
                };
            var Rk = function (a, b) {
                this.j = a;
                this.A = b;
                this.map = {};
                this.l = !0;
                if (0 < this.j.length) {
                    for (a = 0; a < this.j.length; a++) {
                        b = this.j[a];
                        var c = b[0];
                        this.map[c.toString()] = new Qk(c, b[1]);
                    }
                    this.l = !0;
                }
            };
            Rk.prototype.isFrozen = function () {
                return !1;
            };
            Rk.prototype.za = function () {
                return Sk(this);
            };
            Rk.prototype.Wc = function () {
                return Sk(this);
            };
            var Sk = function (a) {
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
                    b = Tk(a);
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
            aa = Rk.prototype;
            aa.entries = function () {
                var a = [], b = Tk(this);
                b.sort();
                for (var c = 0; c < b.length; c++) {
                    var d = this.map[b[c]];
                    a.push([
                        d.key,
                        Uk(this, d)
                    ]);
                }
                return new Vk(a);
            };
            aa.keys = function () {
                var a = [], b = Tk(this);
                b.sort();
                for (var c = 0; c < b.length; c++)
                    a.push(this.map[b[c]].key);
                return new Vk(a);
            };
            aa.values = function () {
                var a = [], b = Tk(this);
                b.sort();
                for (var c = 0; c < b.length; c++)
                    a.push(Uk(this, this.map[b[c]]));
                return new Vk(a);
            };
            aa.forEach = function (a, b) {
                var c = Tk(this);
                c.sort();
                for (var d = 0; d < c.length; d++) {
                    var e = this.map[c[d]];
                    a.call(b, Uk(this, e), e.key, this);
                }
            };
            aa.set = function (a, b) {
                var c = new Qk(a);
                this.A ? (c.j = b, c.value = b.Wc()) : c.value = b;
                this.map[a.toString()] = c;
                this.l = !1;
                return this;
            };
            var Uk = function (a, b) {
                return a.A ? (b.j || (b.j = new a.A(b.value), a.isFrozen() && null(b.j)), b.j) : b.value;
            };
            Rk.prototype.get = function (a) {
                if (a = this.map[a.toString()])
                    return Uk(this, a);
            };
            Rk.prototype.has = function (a) {
                return a.toString() in this.map;
            };
            var Tk = function (a) {
                a = a.map;
                var b = [], c;
                for (c in a)
                    Object.prototype.hasOwnProperty.call(a, c) && b.push(c);
                return b;
            };
            Rk.prototype[_.r(D.Symbol, 'iterator')] = function () {
                return _.r(this, 'entries').call(this);
            };
            var Qk = function (a, b) {
                    this.key = a;
                    this.value = b;
                    this.j = void 0;
                }, Vk = function (a) {
                    this.l = 0;
                    this.j = a;
                };
            Vk.prototype.next = function () {
                return this.l < this.j.length ? {
                    done: !1,
                    value: this.j[this.l++]
                } : {
                    done: !0,
                    value: void 0
                };
            };
            Vk.prototype[_.r(D.Symbol, 'iterator')] = function () {
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
                                f ? Ja(f) : a.l[e] = Wk;
                            } else
                                Xk(a), (f = a.A[e]) ? Ja(f) : a.A[e] = Wk;
                    if (d && d.length)
                        for (c = 0; c < d.length; c++)
                            Yk(a, d[c]);
                }, Wk = Object.freeze(Ja([])), Xk = function (a) {
                    var b = a.H + a.m;
                    a.l[b] || (a.A = a.l[b] = {});
                }, H = function (a, b) {
                    if (b < a.H) {
                        b += a.m;
                        var c = a.l[b];
                        return c !== Wk ? c : a.l[b] = Ja([]);
                    }
                    if (a.A)
                        return c = a.A[b], c !== Wk ? c : a.A[b] = Ja([]);
                }, yf = function (a, b) {
                    return null != H(a, b);
                }, fe = function (a, b) {
                    a = H(a, b);
                    return null == a ? a : +a;
                }, x = function (a, b) {
                    a = H(a, b);
                    return null == a ? a : !!a;
                }, Zk = function (a, b) {
                    var c = H(a, b);
                    a.D || (a.D = {});
                    if (!a.D[b]) {
                        for (var d = 0; d < c.length; d++)
                            c[d] = +c[d];
                        a.D[b] = !0;
                    }
                    return c;
                }, lf = function (a, b, c) {
                    a = H(a, b);
                    return null == a ? c : a;
                }, $k = function (a, b, c) {
                    c = void 0 === c ? !1 : c;
                    a = x(a, b);
                    return null == a ? c : a;
                }, al = function (a, b, c) {
                    c = void 0 === c ? 0 : c;
                    a = fe(a, b);
                    return null == a ? c : a;
                }, bl = function (a, b, c) {
                    a.j || (a.j = {});
                    if (b in a.j)
                        return a.j[b];
                    var d = H(a, b);
                    d || (d = Ja([]), E(a, b, d));
                    c = new Rk(d, c);
                    return a.j[b] = c;
                }, E = function (a, b, c) {
                    b < a.H ? a.l[b + a.m] = c : (Xk(a), a.A[b] = c);
                    return a;
                }, Cb = function (a, b, c) {
                    return E(a, b, Ja(c || []));
                }, Ab = function (a, b, c, d) {
                    c !== d ? E(a, b, c) : b < a.H ? a.l[b + a.m] = null : (Xk(a), delete a.A[b]);
                    return a;
                }, Ef = function (a, b, c) {
                    H(a, b).push(c);
                }, hc = function (a, b, c, d) {
                    (c = Yk(a, c)) && c !== b && void 0 !== d && (a.j && c in a.j && (a.j[c] = void 0), E(a, c, void 0));
                    return E(a, b, d);
                }, Yk = function (a, b) {
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
                    b == Wk && (b = a.j[c] = []);
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
                }, Xd = function (a, b, c, d) {
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
                        return isFinite(b) ? b : String(b);
                    case 'object':
                        if (Ha && null != b && b instanceof Uint8Array)
                            return Ka(b);
                    }
                    return b;
                }, Lh = function (a, b) {
                    return Oa(a, b ? JSON.parse(b) : null);
                }, Yg = function (a, b) {
                    return lf(a, b, 0);
                }, qf = function (a, b) {
                    return lf(a, b, '');
                }, hl = function (a, b, c) {
                    return Ab(a, b, c, !1);
                }, Fb = function (a, b, c) {
                    return Ab(a, b, c, 0);
                };
            var il = document, jl = window;
            _.Pa = {};
            var Sa;
            var kl = function () {
                }, Ua = function (a, b) {
                    Qa(b);
                    this.l = a;
                };
            _.N(Ua, kl);
            Ua.prototype.toString = function () {
                return this.l.toString();
            };
            var ll = function () {
                }, Wa = function (a, b) {
                    Qa(b);
                    this.j = a;
                };
            _.N(Wa, ll);
            Wa.prototype.toString = function () {
                return this.j.toString();
            };
            _.ml = function () {
            };
            _.nl = function (a, b) {
                Qa(b);
                this.j = a;
            };
            _.N(_.nl, _.ml);
            _.nl.prototype.toString = function () {
                return this.j;
            };
            _.ol = new _.nl('about:invalid#zTSz', _.Pa);
            var cb = function () {
                }, Za = function (a, b) {
                    Qa(b);
                    this.j = a;
                };
            _.N(Za, cb);
            Za.prototype.toString = function () {
                return this.j.toString();
            };
            var pl = function (a, b) {
                if (null !== a) {
                    if ('script' === a.tagName.toLowerCase())
                        throw Error('Use setTextContent with a SafeScript.');
                    if ('style' === a.tagName.toLowerCase())
                        throw Error('Use setTextContent with a SafeStyleSheet.');
                }
                if (b instanceof kl) {
                    var c;
                    if (null === (c = Ra()) || void 0 === c || !c.isHTML(b))
                        if (b instanceof Ua)
                            b = b.l;
                        else
                            throw Error('wrong type');
                } else
                    b = _.Fj(b);
                a.innerHTML = b;
            };
            var xd = function (a, b) {
                a.src = eb(b);
                fb(a);
            };
            var ql = function (a, b) {
                var c = void 0 === c ? {} : c;
                this.error = a;
                this.context = b.context;
                this.msg = b.message || '';
                this.id = b.id || 'jserror';
                this.meta = c;
            };
            var hb;
            hb = Xc(function () {
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
            _.yd = function (a, b, c, d) {
                return a.addEventListener ? (a.addEventListener(b, c, ib(d)), !0) : !1;
            };
            _.je = function (a, b, c, d) {
                return a.removeEventListener ? (a.removeEventListener(b, c, ib(d)), !0) : !1;
            };
            var rl = _.ck || bk || gk;
            _.bd = function (a, b) {
                this.x = void 0 !== a ? a : 0;
                this.y = void 0 !== b ? b : 0;
            };
            _.bd.prototype.ceil = function () {
                this.x = Math.ceil(this.x);
                this.y = Math.ceil(this.y);
                return this;
            };
            _.bd.prototype.floor = function () {
                this.x = Math.floor(this.x);
                this.y = Math.floor(this.y);
                return this;
            };
            _.bd.prototype.round = function () {
                this.x = Math.round(this.x);
                this.y = Math.round(this.y);
                return this;
            };
            _.sl = function (a, b) {
                this.width = a;
                this.height = b;
            };
            aa = _.sl.prototype;
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
            var vl, xl, wl, Al, Cl, Gl, tl;
            vl = function (a) {
                return a ? new tl(_.ul(a)) : Ii || (Ii = new tl());
            };
            xl = function (a, b) {
                wa(b, function (c, d) {
                    c && 'object' == typeof c && c.ab && (c = c.Za());
                    'style' == d ? a.style.cssText = c : 'class' == d ? a.className = c : 'for' == d ? a.htmlFor = c : wl.hasOwnProperty(d) ? a.setAttribute(wl[d], c) : 0 == d.lastIndexOf('aria-', 0) || 0 == d.lastIndexOf('data-', 0) ? a.setAttribute(d, c) : a[d] = c;
                });
            };
            wl = {
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
            _.zl = function (a) {
                a = a.document;
                a = _.yl(a) ? a.documentElement : a.body;
                return new _.sl(a.clientWidth, a.clientHeight);
            };
            Al = function (a) {
                return a.scrollingElement ? a.scrollingElement : !gk && _.yl(a) ? a.documentElement : a.body || a.documentElement;
            };
            _.Bl = function (a) {
                return a ? a.parentWindow || a.defaultView : window;
            };
            Cl = function (a, b, c) {
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
                        _.Oi(g ? fa(f) : f, d);
                    }
                }
            };
            _.Dl = function (a, b) {
                b = String(b);
                'application/xhtml+xml' === a.contentType && (b = b.toLowerCase());
                return a.createElement(b);
            };
            _.yl = function (a) {
                return 'CSS1Compat' == a.compatMode;
            };
            _.El = function (a) {
                return a && a.parentNode ? a.parentNode.removeChild(a) : null;
            };
            _.Fl = function (a) {
                var b;
                if (rl && !(_.ck && tk('9') && !tk('10') && _.F.SVGElement && a instanceof _.F.SVGElement) && (b = a.parentElement))
                    return b;
                b = a.parentNode;
                return _.ia(b) && 1 == b.nodeType ? b : null;
            };
            _.ul = function (a) {
                return 9 == a.nodeType ? a : a.ownerDocument || a.document;
            };
            Gl = function (a) {
                try {
                    return a.contentWindow || (a.contentDocument ? _.Bl(a.contentDocument) : null);
                } catch (b) {
                }
                return null;
            };
            tl = function (a) {
                this.j = a || _.F.document || document;
            };
            tl.prototype.append = function (a, b) {
                Cl(_.ul(a), a, arguments);
            };
            tl.prototype.l = _.El;
            var Hl = function () {
                return yj('iPad') || yj('Android') && !yj('Mobile') || yj('Silk');
            };
            var Jl, Kl, Ll, Gg;
            _.Il = /^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;
            Jl = function (a) {
                return a ? decodeURI(a) : a;
            };
            Kl = function (a, b, c) {
                if (Array.isArray(b))
                    for (var d = 0; d < b.length; d++)
                        Kl(a, String(b[d]), c);
                else
                    null != b && c.push(a + ('' === b ? '' : '=' + encodeURIComponent(String(b))));
            };
            Ll = /#|$/;
            Gg = function (a, b) {
                var c = a.search(Ll);
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
            var Pe, Nl, se, Ml, te, Ol, Yc, Ql, pb, Rl, Sl, Se, Ul, Pl, Wl, Xl, Vl, $c, Yl, Zl, $l, am, bm, cm, dm, em, Ue, fm, gm, hm, rd, im, km, mm, Hf, pm, qm, om, rm, sm, um, vm, wm, xm, ym, Bm, Am, Cm, zb, Ih, Dm, Em, Fm, Dc, Gm;
            Pe = function (a) {
                try {
                    return !!a && null != a.location.href && ak(a, 'foo');
                } catch (b) {
                    return !1;
                }
            };
            Nl = function (a, b, c, d) {
                d = d || _.F;
                c && (d = Ml(d));
                for (c = 0; d && 40 > c++ && (!b && !Pe(d) || !a(d));)
                    d = Ml(d);
            };
            se = function () {
                var a, b = a = void 0 === a ? _.F : a;
                Nl(function (c) {
                    b = c;
                    return !1;
                });
                return b;
            };
            Ml = function (a) {
                try {
                    var b = a.parent;
                    if (b && b != a)
                        return b;
                } catch (c) {
                }
                return null;
            };
            te = function (a) {
                return Pe(a.top) ? a.top : null;
            };
            Ol = function (a, b) {
                var c = a.createElement('script');
                xd(c, b);
                return (a = a.getElementsByTagName('script')[0]) && a.parentNode ? (a.parentNode.insertBefore(c, a), c) : null;
            };
            Yc = function (a, b) {
                return b.getComputedStyle ? b.getComputedStyle(a, null) : a.currentStyle;
            };
            Ql = function (a, b) {
                if (!Pl()) {
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
            Rl = function (a) {
                for (var b in a)
                    if (Object.prototype.hasOwnProperty.call(a, b))
                        return !1;
                return !0;
            };
            Sl = function (a) {
                var b = [];
                _.$b(a, function (c, d) {
                    b.push(d);
                });
                return b;
            };
            _.Tl = function (a) {
                var b = [];
                _.$b(a, function (c) {
                    b.push(c);
                });
                return b;
            };
            Se = function (a, b) {
                return za(a, function (c, d) {
                    return Object.prototype.hasOwnProperty.call(a, d) && b(c, d);
                });
            };
            Ul = function (a) {
                var b = a.length;
                if (0 == b)
                    return 0;
                for (var c = 305419896, d = 0; d < b; d++)
                    c ^= (c << 5) + (c >> 2) + a.charCodeAt(d) & 4294967295;
                return 0 < c ? c : 4294967296 + c;
            };
            Pl = Xc(function () {
                return _.Qi([
                    'Google Web Preview',
                    'Mediapartners-Google',
                    'Google-Read-Aloud',
                    'Google-Adwords'
                ], Vl) || 0.0001 > Math.random();
            });
            Wl = function (a) {
                return Pl() ? null : Math.floor(1000 * pb(a));
            };
            Xl = function (a, b) {
                try {
                    if (a)
                        return a.setItem('google_experiment_mod', b), b;
                } catch (c) {
                }
                return null;
            };
            Vl = function (a) {
                return -1 != vj.indexOf(a);
            };
            $c = /^([0-9.]+)px$/;
            Yl = /^(-?[0-9.]{1,30})$/;
            _.qg = function (a, b) {
                return Yl.test(a) && (a = Number(a), !isNaN(a)) ? a : void 0 == b ? null : b;
            };
            Zl = function () {
                return /^true$/.test('false');
            };
            $l = function (a, b) {
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
            am = function (a) {
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
            bm = {
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
            cm = Xc(function () {
                return _.Tl(bm);
            });
            dm = function (a) {
                var b = cm();
                return a.length ? _.Be(b, function (c) {
                    return !(0 <= _.da(a, c));
                }) : b;
            };
            em = function () {
                var a = _.Dl(document, 'IFRAME'), b = {};
                _.Oi(cm(), function (c) {
                    a.sandbox && a.sandbox.supports && a.sandbox.supports(c) && (b[c] = !0);
                });
                return b;
            };
            Ue = function (a) {
                a = a && a.toString && a.toString();
                return 'string' === typeof a && -1 != a.indexOf('[native code]');
            };
            fm = function (a, b) {
                try {
                    return !(!a.frames || !a.frames[b]);
                } catch (c) {
                    return !1;
                }
            };
            gm = function (a, b) {
                for (var c = 0; 50 > c; ++c) {
                    if (fm(a, b))
                        return a;
                    if (!(a = Ml(a)))
                        break;
                }
                return null;
            };
            hm = function (a, b) {
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
            rd = Xc(function () {
                return !Hl() && (yj('iPod') || yj('iPhone') || yj('Android') || yj('IEMobile')) ? 2 : Hl() ? 1 : 0;
            });
            im = function (a, b) {
                var c;
                for (c = void 0 === c ? 100 : c; a && c--;) {
                    if (a == b)
                        return !0;
                    a = a.parentElement;
                }
                return !1;
            };
            _.nm = function (a, b) {
                a.style.setProperty ? _.$b(b, function (c, d) {
                    a.style.setProperty(d, c, 'important');
                }) : a.style.cssText = _.jm(km(_.lm(a.style.cssText), mm(b, function (c) {
                    return c + ' !important';
                })));
            };
            km = _.r(Object, 'assign') || function (a, b) {
                for (var c = 1; c < arguments.length; c++) {
                    var d = arguments[c];
                    if (d)
                        for (var e in d)
                            Object.prototype.hasOwnProperty.call(d, e) && (a[e] = d[e]);
                }
                return a;
            };
            mm = function (a, b) {
                var c = {}, d;
                for (d in a)
                    Object.prototype.hasOwnProperty.call(a, d) && (c[d] = b.call(void 0, a[d], d, a));
                return c;
            };
            Hf = function (a, b, c) {
                for (c = void 0 === c ? 100 : c; a && c-- && !1 !== b(a);)
                    a = a.parentElement;
            };
            pm = function (a) {
                return om(a, function (b) {
                    return 'fixed' == b.position || 'sticky' == b.position;
                });
            };
            qm = function (a) {
                return om(a, function (b) {
                    return 'left' == b['float'] || 'right' == b['float'] || 'left' == b.cssFloat || 'right' == b.cssFloat;
                });
            };
            om = function (a, b) {
                var c;
                for (c = void 0 === c ? 100 : c; a && c--;) {
                    var d = Yc(a, window);
                    if (d) {
                        if (b(d))
                            return !0;
                        a = a.parentElement;
                    }
                }
                return !1;
            };
            rm = function (a) {
                if (!a)
                    return null;
                a = a.transform;
                if (!a)
                    return null;
                a = a.replace(/^.*\(([0-9., -]+)\)$/, '$1').split(/, /);
                return 6 != a.length ? null : _.ze(a, parseFloat);
            };
            _.jm = function (a) {
                var b = [];
                _.$b(a, function (c, d) {
                    null != c && '' !== c && b.push(d + ':' + c);
                });
                return b.length ? b.join(';') + ';' : '';
            };
            _.lm = function (a) {
                var b = {};
                if (a) {
                    var c = /\s*:\s*/;
                    _.Oi((a || '').split(/\s*;\s*/), function (d) {
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
            sm = {};
            _.tm = (sm['http://googleads.g.doubleclick.net'] = !0, sm['http://pagead2.googlesyndication.com'] = !0, sm['https://googleads.g.doubleclick.net'] = !0, sm['https://pagead2.googlesyndication.com'] = !0, sm);
            um = function (a) {
                _.F.console && _.F.console.warn && _.F.console.warn(a);
            };
            vm = function (a, b) {
                b = ba(a, b);
                if (0 <= b) {
                    var c = a[b];
                    Array.prototype.splice.call(a, b, 1);
                    return c;
                }
                return null;
            };
            wm = [];
            xm = function () {
                var a = wm;
                wm = [];
                a = _.G(a);
                for (var b = a.next(); !b.done; b = a.next()) {
                    b = b.value;
                    try {
                        b();
                    } catch (c) {
                    }
                }
            };
            ym = function (a) {
                return a.replace(/\\(n|r|\\)/g, function (b, c) {
                    return 'n' == c ? '\n' : 'r' == c ? '\r' : '\\';
                });
            };
            Bm = function (a) {
                var b = zm;
                a = void 0 === a ? window.document : a;
                0 != b.length && a.head && b.forEach(function (c) {
                    c && Am(c, a);
                });
            };
            Am = function (a, b) {
                b = void 0 === b ? window.document : b;
                if (a && b.head) {
                    var c = document.createElement('meta');
                    b.head.appendChild(c);
                    c.httpEquiv = 'origin-trial';
                    c.content = a;
                }
            };
            Cm = function () {
                return Math.floor(Math.random() * Math.pow(2, 52));
            };
            zb = function (a) {
                if ('number' !== typeof a.goog_pvsid)
                    try {
                        Object.defineProperty(a, 'goog_pvsid', {
                            value: Cm(),
                            configurable: !1
                        });
                    } catch (b) {
                    }
                return Number(a.goog_pvsid) || -1;
            };
            Ih = function (a, b) {
                'complete' === a.readyState || 'interactive' === a.readyState ? (wm.push(b), 1 == wm.length && (D.Promise ? D.Promise.resolve().then(xm) : window.setImmediate ? setImmediate(xm) : setTimeout(xm, 0))) : a.addEventListener('DOMContentLoaded', b);
            };
            Dm = function (a) {
                return 0 === a || 'number' === typeof a && isFinite(a) && 0 == a % 1 && 0 < a;
            };
            Em = function (a, b) {
                var c = document.createElement('div');
                c.id = a;
                c.textContent = b;
                _.nm(c, {
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
            Fm = function (a) {
                return new D.Promise(function (b) {
                    setTimeout(function () {
                        return void b('timeout');
                    }, a);
                });
            };
            Dc = function (a) {
                try {
                    var b = JSON.stringify(a);
                } catch (c) {
                }
                return b || String(a);
            };
            Gm = function (a) {
                var b = '';
                Nl(function (c) {
                    if (c === c.top)
                        return !0;
                    c.document && c.document.referrer && (b = c.document.referrer);
                    return !1;
                }, !1, !1, a);
                return b;
            };
            var Im;
            _.Hm = function (a, b, c, d) {
                this.top = a;
                this.right = b;
                this.bottom = c;
                this.left = d;
            };
            Im = function (a) {
                return new _.Hm(a.top, a.right, a.bottom, a.left);
            };
            _.Hm.prototype.ceil = function () {
                this.top = Math.ceil(this.top);
                this.right = Math.ceil(this.right);
                this.bottom = Math.ceil(this.bottom);
                this.left = Math.ceil(this.left);
                return this;
            };
            _.Hm.prototype.floor = function () {
                this.top = Math.floor(this.top);
                this.right = Math.floor(this.right);
                this.bottom = Math.floor(this.bottom);
                this.left = Math.floor(this.left);
                return this;
            };
            _.Hm.prototype.round = function () {
                this.top = Math.round(this.top);
                this.right = Math.round(this.right);
                this.bottom = Math.round(this.bottom);
                this.left = Math.round(this.left);
                return this;
            };
            var Jm = function (a, b, c, d) {
                    this.left = a;
                    this.top = b;
                    this.width = c;
                    this.height = d;
                }, Km = function (a) {
                    return new _.Hm(a.top, a.left + a.width, a.top + a.height, a.left);
                }, Lm = function (a, b) {
                    var c = Math.max(a.left, b.left), d = Math.min(a.left + a.width, b.left + b.width);
                    if (c <= d) {
                        var e = Math.max(a.top, b.top);
                        a = Math.min(a.top + a.height, b.top + b.height);
                        if (e <= a)
                            return new Jm(c, e, d - c, a - e);
                    }
                    return null;
                };
            Jm.prototype.ceil = function () {
                this.left = Math.ceil(this.left);
                this.top = Math.ceil(this.top);
                this.width = Math.ceil(this.width);
                this.height = Math.ceil(this.height);
                return this;
            };
            Jm.prototype.floor = function () {
                this.left = Math.floor(this.left);
                this.top = Math.floor(this.top);
                this.width = Math.floor(this.width);
                this.height = Math.floor(this.height);
                return this;
            };
            Jm.prototype.round = function () {
                this.left = Math.round(this.left);
                this.top = Math.round(this.top);
                this.width = Math.round(this.width);
                this.height = Math.round(this.height);
                return this;
            };
            var Mm = function (a) {
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
                }, Nm = function (a) {
                    return (a = a || Mm()) ? Pe(a.master) ? a.master : null : null;
                }, Pm = function (a, b) {
                    if (a.ampInaboxInitialized)
                        return !0;
                    var c, d = 'amp-ini-load' === b.data;
                    a.ampInaboxPendingMessages && !d && (c = /^amp-(\d{15,20})?/.exec(b.data)) && (a.ampInaboxPendingMessages.push(b), Om(a, c[1]));
                    return !1;
                }, Qm = function (a, b, c) {
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
                    c && /^\d{15,20}$/.test(c) && Om(a, c);
                    var h = function (k) {
                        Pm(a, k) && f();
                    };
                    d || e.google_amp_listener_added || (e.google_amp_listener_added = !0, _.yd(a, 'message', h), f = function () {
                        _.je(a, 'message', h);
                    });
                    return g;
                }, Om = function (a, b) {
                    a.ampInaboxInitialized || b && !/^\d{15,20}$/.test(b) || a.document.querySelector('script[src$="amp4ads-host-v0.js"]') || Ol(a.document, b ? Ed(Vi('https://cdn.ampproject.org/rtv/%{ampVersion}/amp4ads-host-v0.js'), { ampVersion: b }) : bj(Ui(Vi('https://cdn.ampproject.org/amp4ads-host-v0.js'))));
                };
            var Rb, Sm;
            _.Rm = function (a, b) {
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
                Sm(c);
            };
            Sm = function (a) {
                var b = window;
                b.fetch ? b.fetch(a, {
                    keepalive: !0,
                    credentials: 'include',
                    redirect: 'follow',
                    method: 'get',
                    mode: 'no-cors'
                }) : _.Rm(b, a);
            };
            _.jb = function (a) {
                this.Dd = a;
            };
            _.Tm = [
                kb('data'),
                kb('http'),
                kb('https'),
                kb('mailto'),
                kb('ftp'),
                new _.jb(function (a) {
                    return /^[^:]*([/?#]|$)/.test(a);
                })
            ];
            var Wm, Ym, Zm, $m, an, cn, gn;
            _.Vm = function (a, b, c) {
                if ('string' === typeof b)
                    (b = _.Um(a, b)) && (a.style[b] = c);
                else
                    for (var d in b) {
                        c = a;
                        var e = b[d], f = _.Um(c, d);
                        f && (c.style[f] = e);
                    }
            };
            Wm = {};
            _.Um = function (a, b) {
                var c = Wm[b];
                if (!c) {
                    var d = _.Rj(b);
                    c = d;
                    void 0 === a.style[d] && (d = (gk ? 'Webkit' : fk ? 'Moz' : _.ck ? 'ms' : bk ? 'O' : null) + Sj(d), void 0 !== a.style[d] && (c = d));
                    Wm[b] = c;
                }
                return c;
            };
            _.Xm = function (a, b) {
                var c = _.ul(a);
                return c.defaultView && c.defaultView.getComputedStyle && (a = c.defaultView.getComputedStyle(a, null)) ? a[b] || a.getPropertyValue(b) || '' : '';
            };
            Ym = function (a, b) {
                return _.Xm(a, b) || (a.currentStyle ? a.currentStyle[b] : null) || a.style && a.style[b];
            };
            Zm = function (a) {
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
            $m = function (a) {
                if (_.ck && !(8 <= Number(wk)))
                    return a.offsetParent;
                var b = _.ul(a), c = Ym(a, 'position'), d = 'fixed' == c || 'absolute' == c;
                for (a = a.parentNode; a && a != b; a = a.parentNode)
                    if (11 == a.nodeType && a.host && (a = a.host), c = Ym(a, 'position'), d = d && 'static' == c && a != b.documentElement && a != b.body, !d && (a.scrollWidth > a.clientWidth || a.scrollHeight > a.clientHeight || 'fixed' == c || 'absolute' == c || 'relative' == c))
                        return a;
                return null;
            };
            an = function (a) {
                var b = _.ul(a), c = new _.bd(0, 0);
                var d = b ? _.ul(b) : document;
                d = !_.ck || 9 <= Number(wk) || _.yl(vl(d).j) ? d.documentElement : d.body;
                if (a == d)
                    return c;
                a = Zm(a);
                d = vl(b).j;
                b = Al(d);
                d = d.parentWindow || d.defaultView;
                b = _.ck && tk('10') && d.pageYOffset != b.scrollTop ? new _.bd(b.scrollLeft, b.scrollTop) : new _.bd(d.pageXOffset || b.scrollLeft, d.pageYOffset || b.scrollTop);
                c.x = a.left + b.x;
                c.y = a.top + b.y;
                return c;
            };
            cn = function (a, b) {
                var c = new _.bd(0, 0), d = _.Bl(_.ul(a));
                if (!ak(d, 'parent'))
                    return c;
                do {
                    var e = d == b ? an(a) : _.bn(a);
                    c.x += e.x;
                    c.y += e.y;
                } while (d && d != b && d != d.parent && (a = d.frameElement) && (d = d.parent));
                return c;
            };
            _.bn = function (a) {
                a = Zm(a);
                return new _.bd(a.left, a.top);
            };
            _.dn = function (a, b) {
                'number' == typeof a && (a = (b ? Math.round(a) : a) + 'px');
                return a;
            };
            _.en = function (a, b) {
                if ('none' != Ym(b, 'display'))
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
            _.fn = function (a) {
                var b = a.offsetWidth, c = a.offsetHeight, d = gk && !b && !c;
                return (void 0 === b || d) && a.getBoundingClientRect ? (a = Zm(a), new _.sl(a.right - a.left, a.bottom - a.top)) : new _.sl(b, c);
            };
            gn = function (a) {
                if (!a.getBoundingClientRect)
                    return null;
                a = _.en(Zm, a);
                return new _.sl(a.right - a.left, a.bottom - a.top);
            };
            var jn = function () {
                    var a = hn();
                    'google_onload_fired' in a || (a.google_onload_fired = !1, _.yd(a, 'load', function () {
                        a.google_onload_fired = !0;
                    }));
                }, kn = function () {
                    var a = void 0 === a ? jl : a;
                    try {
                        return a.history.length;
                    } catch (b) {
                        return 0;
                    }
                }, ln = function (a) {
                    a = Nm(Mm(a)) || a;
                    a = a.google_unique_id;
                    return 'number' === typeof a ? a : 0;
                }, mn = !!window.google_async_iframe_id, nn = mn && window.parent || window, hn = function () {
                    if (mn && !Pe(nn)) {
                        var a = '.' + il.domain;
                        try {
                            for (; 2 < a.split('.').length && !Pe(nn);)
                                il.domain = a = a.substr(a.indexOf('.') + 1), nn = window.parent;
                        } catch (b) {
                        }
                        Pe(nn) || (nn = window);
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
                        if (Aj()) {
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
                try {
                    a.j() && a.l(a.A + '?e=1', '[[[{"2":' + gl(b()) + '}]]]');
                } catch (c) {
                }
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
                }, un = function (a, b) {
                    b = void 0 === b ? [] : b;
                    this.j = a;
                    this.defaultValue = b;
                };
            var Lf, eh, wn, gh, lc, xn, yn, zn, An, Bn, Cn, Dn, En, Fn, Gn, Hn, df, In, Jn, Kn, Ln, Mn, Nn, On, Pn, Qn, Rn, Sn, mb, oc, Tn, Un, Vn, Wn, Xn, Yn, Zn, $n, ao, bo, co, eo, fo, go, ho, io, jo, ko, lo, mo, no, oo, po, Pf, qo, Eh, md, ro, so, pg, to, uo, vo, wo, pc, xo, yo, zo, Ao, Bo, Co, hg, Do, Eo, Fo, Go, Ho, Io, Jo, Ko, Lo, rg, Mo, No, Oo, Po, Qo, Ro, So, To, Uo, Vo, Wo, Xo, Yo, Zo, $o, ap, bp, cp, dp, ih, od, ep, fp, gp, hp, ip, jp, kp, lp, mp, np, op, pp, qp, rp, sp, tp, ue, up, vp, wp, xp, de, yp, zp, Ud, Rd, Ap, Zd, Bp, Cp, Ep, Fp, ed, Ip, Jp, Kp, Mp, He, Np, Op, Pp, Qp, Rp, Sp, Tp, Up, Vp;
            _.vn = new rn(36);
            Lf = new R(98);
            eh = new R(206);
            wn = new R(528);
            gh = new rn(465);
            lc = new R(144);
            xn = new R(368279556);
            yn = new R(366809413);
            zn = new sn(3);
            An = new un(481);
            Bn = new rn(7, 0.1);
            Cn = new R(376190677, !0);
            Dn = new R(378899425);
            En = new R(514, !0);
            Fn = new R(212);
            Gn = new R(377966085);
            Hn = new R(361174373, !0);
            df = new rn(374482958);
            In = new R(359351145);
            Jn = new R(362946046);
            Kn = new R(23);
            Ln = new R(369430);
            Mn = new rn(357045128);
            Nn = new R(346);
            On = new R(520);
            Pn = new R(104);
            Qn = new R(319);
            Rn = new R(493);
            Sn = new R(364);
            mb = new rn(378290974, 0.01);
            oc = new R(378290973);
            Tn = new rn(377289019);
            Un = new R(370993688);
            Vn = new R(504);
            Wn = new R(503);
            Xn = new rn(488);
            Yn = new rn(529);
            Zn = new sn(10);
            $n = new R(500);
            ao = new R(360245597);
            bo = new rn(494, 5000);
            co = new rn(517);
            eo = new R(123);
            fo = new R(445);
            go = new R(381277148);
            ho = new R(371390390);
            io = new R(375971837);
            jo = new R(382086337);
            ko = new R(372611448);
            lo = new R(378147356);
            mo = new R(521);
            no = new R(375090993, !0);
            oo = new R(20);
            po = new R(220);
            Pf = new R(200);
            qo = new R(111);
            Eh = new R(323);
            md = new rn(492, 0.01);
            ro = new rn(363650251);
            so = new R(374665379, !0);
            pg = new un(480);
            to = new rn(17);
            uo = new rn(16);
            vo = new rn(18);
            wo = new R(83);
            pc = new R(85);
            xo = new R(305);
            yo = new R(417);
            zo = new R(471);
            Ao = new R(442);
            Bo = new R(390);
            Co = new R(177);
            hg = new R(434);
            Do = new R(464);
            Eo = new R(35976);
            Fo = new R(35977);
            Go = new R(3580985);
            Ho = new R(339043665, !0);
            Io = new R(365635966);
            Jo = new R(3580885);
            Ko = new rn(470, 10);
            Lo = new R(432);
            rg = new rn(8, -1);
            Mo = new R(440);
            No = new R(380853767);
            Oo = new R(381311271);
            Po = new R(378410763);
            Qo = new R(377598633);
            Ro = new rn(374201269, 60000);
            So = new R(374201268, !0);
            To = new rn(371364213, 60000);
            Uo = new rn(373440923, 0.0001);
            Vo = new rn(376149757, 0.0025);
            Wo = new R(371364212, !0);
            Xo = new R(437, !0);
            Yo = new R(377936516);
            Zo = new R(320);
            $o = new rn(47, 1);
            ap = new rn(25);
            bp = new un(1);
            cp = new sn(2, '1-0-38');
            dp = new R(116);
            ih = new R(416);
            od = new R(474);
            ep = new R(373056376);
            fp = new R(373056377, !0);
            gp = new R(370723759, !0);
            hp = new un(489);
            ip = new R(371157910);
            jp = new R(360245598);
            kp = new rn(360245595, 200);
            lp = new R(360245596);
            mp = new rn(359346956);
            np = new rn(61, 0.001);
            op = new R(1936, !0);
            pp = new R(522);
            qp = new R(373821891);
            rp = new R(363658173);
            sp = new R(501);
            tp = new sn(363931022);
            ue = new R(1930);
            up = new un(1918, 'criteo index indextest openx openxtest pubcid.org pubmatic thetradedesktest'.split(' '));
            vp = new R(446, !0);
            wp = new R(453);
            xp = new R(454);
            de = new rn(360261971);
            yp = new rn(1921, 72);
            zp = new rn(1920, 24);
            Ud = new rn(1917, -1);
            Rd = new rn(1916, 0.001);
            Ap = new R(497);
            Zd = new R(382136472);
            Bp = new R(1931, !0);
            Cp = new R(377431981);
            _.Dp = new R(1944);
            Ep = new R(77);
            Fp = new R(78);
            ed = new R(309);
            _.Gp = new R(377914450);
            _.Hp = new R(1903);
            Ip = new R(80);
            Jp = new R(76);
            Kp = new R(81);
            _.Lp = new R(1940);
            Mp = new R(84);
            He = new R(3655606);
            Np = new R(188);
            Op = new R(1928);
            Pp = new R(1941);
            Qp = new R(370946349);
            Rp = new R(374326588);
            Sp = new R(379841917);
            Tp = new R(377105258);
            Up = new rn(1935);
            Vp = new R(1942);
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
            var Wp = rb(function (a) {
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
            J.Ye = vb;
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
                tb(a, Wp);
            };
            J.Ze = function (a) {
                return vb(a, Wp);
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
                P(this, a, Xp, null);
            };
            _.N(cc, O);
            var Xp = [3];
            var Eb = function (a) {
                P(this, a, Yp, null);
            };
            _.N(Eb, O);
            var Yp = [4];
            var yb = function (a) {
                P(this, a, Zp, null);
            };
            _.N(yb, O);
            var Zp = [2];
            var xb = function (a) {
                P(this, a, null, gc);
            };
            _.N(xb, O);
            var gc = [[4]];
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
            _.xc = function () {
                var a = _.F.performance;
                return a && a.now && a.timing ? Math.floor(a.now() + a.timing.navigationStart) : Mf();
            };
            _.Rf = function (a) {
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
            var dq = _.F.performance, eq = !!(dq && dq.mark && dq.measure && dq.clearMarks), fq = Xc(function () {
                    var a;
                    if (a = eq)
                        a = aq(), a = !!a.indexOf && 0 <= a.indexOf('1337');
                    return a;
                }), gq = function (a, b) {
                    this.events = [];
                    this.A = b || _.F;
                    var c = null;
                    b && (b.google_js_reporting_queue = b.google_js_reporting_queue || [], this.events = b.google_js_reporting_queue, c = b.google_measure_js_timing);
                    this.j = fq() || (null != c ? c : Math.random() < a);
                }, qc = function (a) {
                    a && dq && fq() && (dq.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_start'), dq.clearMarks('goog_' + a.label + '_' + a.uniqueId + '_end'));
                }, Jb = function (a, b, c, d, e, f) {
                    a.j && (b = new cq(b, c, d, void 0 === e ? 0 : e, f), !a.j || 2048 < a.events.length || a.events.push(b));
                };
            gq.prototype.start = function (a, b) {
                if (!this.j)
                    return null;
                a = new cq(a, b, _.Rf() || _.xc());
                b = 'goog_' + a.label + '_' + a.uniqueId + '_start';
                dq && fq() && dq.mark(b);
                return a;
            };
            gq.prototype.end = function (a) {
                if (this.j && 'number' === typeof a.value) {
                    a.duration = (_.Rf() || _.xc()) - a.value;
                    var b = 'goog_' + a.label + '_' + a.uniqueId + '_end';
                    dq && fq() && dq.mark(b);
                    !this.j || 2048 < this.events.length || this.events.push(a);
                }
            };
            var hq = function (a, b, c) {
                var d = _.Rf();
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
            var iq;
            iq = {
                Ce: 0,
                $c: 3,
                bd: 4,
                cd: 5
            };
            var jq = iq.$c, kq = iq.bd, lq = iq.cd;
            _.xh = function (a) {
                if (a.Da && a.hasOwnProperty('Da'))
                    return a.Da;
                var b = new a();
                return a.Da = b;
            };
            var mq = Zl();
            var nq = function (a) {
                    this.methodName = a;
                }, oq = new nq(1), pq = new nq(15), qq = new nq(2), rq = new nq(3), sq = new nq(5), tq = new nq(6), uq = new nq(7), vq = new nq(8), wq = new nq(14), xq = function (a, b, c) {
                    return b[a.methodName] || c || function () {
                    };
                };
            var yq = function () {
                    this.j = function () {
                    };
                    this.l = function () {
                        return [];
                    };
                    this.A = function () {
                        return [];
                    };
                }, zq = function (a, b, c) {
                    a.j = xq(oq, b, function () {
                    });
                    a.l = function (d) {
                        return xq(qq, b, function () {
                            return [];
                        })(d, c);
                    };
                    a.A = function () {
                        return xq(rq, b, function () {
                            return [];
                        })(c);
                    };
                }, Aq = function (a) {
                    return _.xh(yq).l(a);
                }, Bb = function () {
                    return _.xh(yq).A();
                };
            var Bq, Cq, og;
            Bq = function () {
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
                return _.xh(Bq).l(a.j, a.defaultValue);
            };
            _.lb = function (a) {
                return _.xh(Bq).A(a.j, a.defaultValue);
            };
            Cq = function (a) {
                return _.xh(Bq).m(a.j, a.defaultValue);
            };
            og = function (a) {
                return _.xh(Bq).H(a.j, a.defaultValue);
            };
            var Kg = function () {
                    return _.F.googletag || (_.F.googletag = {});
                }, dh = function (a, b) {
                    var c = Kg();
                    c.hasOwnProperty(a) || (c[a] = b);
                }, Dq = function (a, b) {
                    a.addEventListener ? a.addEventListener('load', b, !1) : a.attachEvent && a.attachEvent('onload', b);
                };
            var Eq = {
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
                }, Fq, Gq, Hq, Iq, Jq;
            Eq[6] = $l(window);
            Eq[49] = new Date().getTime();
            Eq[36] = Zl();
            Eq[148] = mq;
            Eq[221] = Zl();
            Eq[254] = Zl();
            Eq[204] = _.qg('-1', -1);
            Eq[257] = Zl();
            Eq[260] = void 0;
            Fq = function () {
                for (var a in Eq)
                    this[a] = Eq[a];
            };
            _.Xb = function (a) {
                return _.xh(Fq)[a];
            };
            Gq = Kg();
            Hq = _.xh(Fq);
            Iq = Gq._vars_;
            for (Jq in Iq)
                Hq[Jq] = Iq[Jq];
            Gq._vars_ = Hq;
            var Kq = {}, Lq = (Kq.companion_ads = 'companionAds', Kq.content = 'content', Kq.publisher_ads = 'pubads', Kq), Mq = function (a) {
                    return a + 'Correlator has been deprecated. Please see the Google Ad Manager help page on "Pageviews in GPT" for more information: https://support.google.com/admanager/answer/183281?hl=en';
                }, jh = {
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
            var Nq = function () {
                gq.apply(this, arguments);
            };
            _.N(Nq, gq);
            Nq.N = function () {
                throw Error('Must be overridden');
            };
            var Kb = function () {
                Nq.call(this, _.v(pc) || _.v(Mp) ? 1 : 0, _.F);
                this.l = 0;
                var a = _.v(pc) || _.v(Mp);
                _.F.google_measure_js_timing = a || _.F.google_measure_js_timing;
            };
            _.N(Kb, Nq);
            Bi(Kb);
            var Oq = Xc(function () {
                return !!am(_.F.location.href);
            });
            var Yb = function (a, b) {
                    b = void 0 === b ? 'https://pagead2.googlesyndication.com' : b;
                    var c = void 0 === c ? zb(_.F) : c;
                    this.id = a;
                    this.Wb = b;
                    this.l = Math.random();
                    if (null == d || 0 > d || 1 < d)
                        var d = _.Xb(23);
                    this.A = this.l < d;
                    this.j = { pvsid: String(c) };
                }, Pq = function (a) {
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
                    if (Oq())
                        b = !0;
                    else {
                        var d = a.A;
                        b && 0 <= b && (d = (c ? a.l : Math.random()) < b);
                        b = d && !!a.id;
                    }
                    b && (_.v(xo) ? Rb(a.j, a.id) : (a = Qq(a) || '', _.Rm(window, a)));
                }, Qq = function (a) {
                    var b = a.Wb + '/pagead/gen_204?id=' + encodeURIComponent(a.id);
                    _.$b(a.j, function (c, d) {
                        c && (b += '&' + d + '=' + encodeURIComponent(c));
                    });
                    return b;
                }, Rq = function (a, b) {
                    3 >= b.length ? q(a, 'nw_id', b.join()) : (b = b.slice(0, 3), b.push('__extra__'), q(a, 'nw_id', b.join()));
                }, Zb = function (a, b) {
                    q(a, 'vrg', Pb());
                    b ? (Rq(a, b), q(a, 'nslots', b.length.toString())) : (Rq(a, [].concat(_.ec(_.r(fc, 'keys').call(fc)))), q(a, 'nslots', dc().toString()));
                    b = Bb();
                    b.length && q(a, 'eid', b.join());
                    q(a, 'pub_url', document.URL);
                }, mc = function (a, b, c) {
                    c = void 0 === c ? {
                        Wb: 'https://pagead2.googlesyndication.com',
                        wa: _.Xb(23)
                    } : c;
                    var d = c.Wb || 'https://pagead2.googlesyndication.com';
                    c = c.wa;
                    if (void 0 === c || 0 > c || 1 < c)
                        c = _.Xb(23);
                    Math.random() < c && (a = new Yb(a, d), b(a), ac(a, 1, !0));
                }, fc = new D.Map();
            var Wb = _.Xb(38);
            _.Sq = function () {
                this.A = this.A;
                this.fa = this.fa;
            };
            _.Sq.prototype.A = !1;
            _.Sq.prototype.va = function () {
                this.A || (this.A = !0, this.H());
            };
            _.Tq = function (a, b) {
                _.Ig(a, _.Hi(sc, b));
            };
            _.Ig = function (a, b) {
                a.A ? b() : (a.fa || (a.fa = []), a.fa.push(b));
            };
            _.Sq.prototype.H = function () {
                if (this.fa)
                    for (; this.fa.length;)
                        this.fa.shift()();
            };
            var Uq = function () {
                    this.id = 'goog_' + Qj++;
                }, Vq = function () {
                    _.Sq.apply(this, arguments);
                    this.m = new D.Map();
                };
            _.N(Vq, _.Sq);
            Vq.prototype.H = function () {
                _.Sq.prototype.H.call(this);
                this.m.clear();
            };
            var Xq = function (a, b, c) {
                    var d, e;
                    if (a.A)
                        return function () {
                        };
                    var f = 'string' === typeof b ? b : b.id, g = null !== (e = null === (d = a.m.get(f)) || void 0 === d ? void 0 : d.add(c)) && void 0 !== e ? e : new D.Set([c]);
                    a.m.set(f, g);
                    return function () {
                        return void Wq(a, b, c);
                    };
                }, ug = function (a, b, c) {
                    c = void 0 === c ? function () {
                        return !0;
                    } : c;
                    return new D.Promise(function (d) {
                        var e = Xq(a, b, function (f) {
                            c(f) && (e(), d(f));
                        });
                    });
                }, Wq = function (a, b, c) {
                    var d;
                    return !(null === (d = a.m.get('string' === typeof b ? b : b.id)) || void 0 === d || !d.delete(c));
                };
            Vq.prototype.dispatchEvent = function (a, b, c) {
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
                            n.yb = t.value;
                            return C(u, 0, 5);
                        }
                        rc(b, function (z) {
                            return function () {
                                h.m.has(k) && m.has(z.yb) && z.yb(l);
                            };
                        }(n), !0);
                        n = { yb: n.yb };
                        t = p.next();
                        u.j = 2;
                    });
                });
            };
            var Yq = new Uq(), Zq = new Uq(), $q = new Uq(), ar = new Uq(), br = new Uq(), cr = new Uq(), dr = new Uq(), er = new Uq(), vg = new Uq(), fr = new Uq();
            var gr = function (a, b) {
                b = void 0 === b ? [] : b;
                this.l = a;
                this.j = b;
            };
            gr.prototype.getMessageId = function () {
                return this.l;
            };
            gr.prototype.getMessageArgs = function () {
                return this.j;
            };
            var hr = function (a, b, c) {
                this.A = new Date();
                this.m = c;
                this.j = a;
                this.l = b;
            };
            aa = hr.prototype;
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
                return this.A.toTimeString() + ': ' + ir[this.j] + ': ' + this.l;
            };
            var ir = [
                'Debug',
                'Info',
                'Warning',
                'Error',
                'Fatal'
            ];
            var jr = function (a, b, c) {
                Vq.call(this);
                this.D = a;
                this.Da = b;
                this.G = this.D + '_' + this.Da;
                this.j = c;
                this.l = null;
            };
            _.N(jr, Vq);
            jr.prototype.getAdUnitPath = function () {
                return this.D;
            };
            jr.prototype.getName = function () {
                return this.D;
            };
            jr.prototype.N = function () {
                return this.Da;
            };
            jr.prototype.toString = function () {
                return this.G;
            };
            var kr = function (a, b) {
                a.l = b;
            };
            var lr = {
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
                }, mr = {
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
            var nr = function () {
                this.l = 0;
                this.j = [];
            };
            nr.prototype.add = function (a) {
                var b = this.j[this.l];
                this.j[this.l] = a;
                this.l = (this.l + 1) % 1000;
                return b;
            };
            nr.prototype.get = function (a) {
                a = or(this, a);
                return this.j[a];
            };
            nr.prototype.set = function (a, b) {
                a = or(this, a);
                this.j[a] = b;
            };
            nr.prototype.isEmpty = function () {
                return 0 == this.j.length;
            };
            var pr = function (a) {
                    for (var b = a.j.length, c = [], d = a.j.length - a.j.length; d < b; d++)
                        c.push(a.get(d));
                    return c;
                }, or = function (a, b) {
                    if (b >= a.j.length)
                        throw Error('Out of bounds exception');
                    return 1000 > a.j.length ? b : (a.l + Number(b)) % 1000;
                };
            var qr = function () {
                    this.j = new nr();
                    this.l = this.A = 0;
                }, rr = function (a, b) {
                    return pr(a.j).filter(function (c) {
                        return c.getSlot() === b;
                    });
                }, sr = function (a, b) {
                    return pr(a.j).filter(function (c) {
                        return c.getLevel() >= b;
                    });
                };
            qr.prototype.log = function (a, b, c, d) {
                var e = this;
                d = void 0 === d ? !1 : d;
                var f, g;
                c = new hr(a, b, null != (g = null == (f = void 0 === c ? null : c) ? void 0 : f.l) ? g : null);
                this.j.add(c);
                f = _.v(Vn) && this.l < _.lb(Yn);
                g = _.v(Wn) && _.r(_.F.navigator.userAgent, 'includes').call(_.F.navigator.userAgent, 'Lighthouse');
                var h = _.lb(Xn) && 100 > this.A, k = 2 === a || 3 === a, l = b.getMessageArgs(), m = b.getMessageId(), n = lr[m] || mr[m];
                h && k && (b = _.lb(Xn), mc('gpt_eventlog_messages', function (y) {
                    ++e.A;
                    Zb(y);
                    q(y, 'level', a);
                    q(y, 'messageId', m);
                    q(y, 'args', l.join('|'));
                    n || q(y, 'noMsg', !0);
                    var K = Error();
                    q(y, 'stack', Sb(K.stack, K.message));
                }, { wa: b }));
                if (n) {
                    b = '[GPT] ' + n(l);
                    if (d)
                        throw Error(b);
                    if ((g || f) && k && _.F.console) {
                        var p, t, u, z;
                        2 === a ? null == (t = (p = _.F.console).warn) || t.call(p, b) : null == (z = (u = _.F.console).error) || z.call(u, b);
                        this.l++;
                    }
                }
                return c;
            };
            qr.prototype.info = function (a, b) {
                return this.log(1, a, void 0 === b ? null : b);
            };
            qr.prototype.M = function (a, b) {
                return this.log(2, a, b);
            };
            qr.prototype.error = function (a, b, c) {
                return this.log(3, a, b, void 0 === c ? !1 : c);
            };
            var Bc = function () {
                return _.xh(qr);
            };
            var T = function (a) {
                    return function (b) {
                        for (var c = [], d = 0; d < arguments.length; ++d)
                            c[d] = arguments[d];
                        return new gr(a, [].concat(_.ec(c)));
                    };
                }, tr = function (a) {
                    return '[' + a.map(function (b) {
                        return 'string' === typeof b ? '\'' + b + '\'' : Array.isArray(b) ? tr(b) : String(b);
                    }).join(', ') + ']';
                }, uh = function (a, b) {
                    b = tr(b);
                    b = b.substring(1, b.length - 1);
                    return new gr(96, [
                        a,
                        b
                    ]);
                }, ur = T(2), vr = T(3), wr = T(4), xr = T(5), yr = T(6), zr = T(12), Ar = T(14), Br = T(16), Cr = T(19), Dr = T(20), Er = T(23), Fr = T(26), Gr = T(28), Hr = T(30), Ir = T(31), Jr = T(34), Kr = T(35), Lr = T(36), Mr = T(38), Nr = T(40), Or = T(46), Pr = T(48), Qr = T(50), Rr = T(60), Sr = T(63), Tr = T(64), Ur = T(66), Vr = T(68), Wr = T(69), Xr = T(70), Yr = T(71), Zr = T(78), $r = T(80), as = T(82), bs = T(84), cs = T(85), ds = T(87), es = T(88), fs = T(92), gs = T(93), hs = T(99), is = T(103), js = T(104), ks = T(105), ls = T(106), ms = T(107), ns = T(108), os = T(113), ps = T(114), qs = T(115), rs = T(116), ss = T(117), ts = T(118), us = T(119), fh = T(120), Cc = T(121), Fc = T(122), vs = T(123), ws = T(124), Sh = T(125);
            var xs = function () {
                Vq.call(this);
                this.l = this.j = 0;
            };
            _.N(xs, Vq);
            xs.prototype.push = function (a) {
                const $___old_b97f1a3d350cfc44 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage'), $___old_7d5db788245e202b = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                try {
                    if ($___old_b97f1a3d350cfc44)
                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_6311a65d4da22df7.localStorage));
                    if ($___old_7d5db788245e202b)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_5de28d8956bfc0f9.XMLHttpRequest));
                    return function () {
                        for (var b = Bc(), c = 0; c < arguments.length; ++c)
                            try {
                                'function' === typeof arguments[c] && (arguments[c](), this.j++);
                            } catch (d) {
                                this.l++, window.console && window.console.error && window.console.error('Exception in queued GPT command', d), b.error(Hr(String(d)));
                            }
                        b.info(Ir(String(this.j), String(this.l)));
                        return this.j;
                    }.apply(this, arguments);
                } finally {
                    if ($___old_b97f1a3d350cfc44)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_b97f1a3d350cfc44));
                    if ($___old_7d5db788245e202b)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_7d5db788245e202b));
                }
            };
            var zs = function (a) {
                P(this, a, ys, null);
            };
            _.N(zs, O);
            var As = function (a) {
                P(this, a, null, null);
            };
            _.N(As, O);
            var ys = [4];
            var Cs = function (a) {
                P(this, a, Bs, null);
            };
            _.N(Cs, O);
            var Ds = function (a) {
                P(this, a, null, null);
            };
            _.N(Ds, O);
            var Bs = [1];
            var Es = function (a) {
                P(this, a, null, null);
            };
            _.N(Es, O);
            var Fs = function (a) {
                P(this, a, null, null);
            };
            _.N(Fs, O);
            var Gs = function (a) {
                P(this, a, null, null);
            };
            _.N(Gs, O);
            var Hs = function (a) {
                    return 'CSS1Compat' == a.compatMode ? a.documentElement : a.body;
                }, Is = function (a, b) {
                    b = void 0 === b ? _.F : b;
                    a = a.scrollingElement || Hs(a);
                    return new _.bd(b.pageXOffset || a.scrollLeft, b.pageYOffset || a.scrollTop);
                }, ad = function (a) {
                    try {
                        return !(!a || !(a.offsetWidth || a.offsetHeight || a.getClientRects().length));
                    } catch (b) {
                        return !1;
                    }
                };
            var Js = function (a, b, c) {
                a && null !== b && b != b.top && (b = b.top);
                try {
                    return (void 0 === c ? 0 : c) ? new _.sl(b.innerWidth, b.innerHeight).round() : _.zl(b || window).round();
                } catch (d) {
                    return new _.sl(-12245933, -12245933);
                }
            };
            var Ks = function (a) {
                for (var b = 0, c = a, d = 0; a && a != a.parent;)
                    a = a.parent, d++, Pe(a) && (c = a, b = d);
                return {
                    J: c,
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
                            ic: !0
                        };
                    var c = !1, d = a.document;
                    d && d.referrer && (b = d.referrer, a.parent == a.top && (c = !0));
                    (a = a.location.ancestorOrigins) && (a = a[a.length - 1]) && -1 == b.indexOf(a) && (c = !1, b = a);
                    return {
                        url: b,
                        ic: c
                    };
                }, Os = function () {
                    var a = hn();
                    if (a == a.top)
                        return 0;
                    for (; a && a != a.top && Pe(a); a = a.parent) {
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
            var Ps = function (a, b, c, d, e, f) {
                    try {
                        var g = a.j, h = _.Dl(a.j, 'SCRIPT');
                        h.async = !0;
                        xd(h, b);
                        g.head.appendChild(h);
                        h.addEventListener('load', function () {
                            e();
                            d && g.head.removeChild(h);
                        });
                        h.addEventListener('error', function () {
                            0 < c ? Ps(a, b, c - 1, d, e, f) : (d && g.head.removeChild(h), f());
                        });
                    } catch (k) {
                        f();
                    }
                }, Qs = function (a, b, c, d) {
                    c = void 0 === c ? function () {
                    } : c;
                    d = void 0 === d ? function () {
                    } : d;
                    Ps(vl(a), b, 0, !1, c, d);
                };
            var Rs = function (a) {
                var b = a.document, c = vl(a), d = function () {
                        if (!a.frames.googlefcPresent)
                            if (b.body) {
                                var e = _.Dl(c.j, 'IFRAME');
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
            var Ss = function (a) {
                    void 0 !== a.addtlConsent && 'string' !== typeof a.addtlConsent && (a.addtlConsent = void 0);
                    void 0 !== a.gdprApplies && 'boolean' !== typeof a.gdprApplies && (a.gdprApplies = void 0);
                    return void 0 !== a.tcString && 'string' !== typeof a.tcString || void 0 !== a.listenerId && 'number' !== typeof a.listenerId ? 2 : a.cmpStatus && 'error' !== a.cmpStatus ? 0 : 3;
                }, Ts = function (a, b) {
                    b = void 0 === b ? 500 : b;
                    _.Sq.call(this);
                    this.j = a;
                    this.l = null;
                    this.D = {};
                    this.o = 0;
                    this.G = b;
                    this.m = null;
                };
            _.N(Ts, _.Sq);
            Ts.prototype.H = function () {
                this.D = {};
                this.m && (_.je(this.j, 'message', this.m), delete this.m);
                delete this.D;
                delete this.j;
                delete this.l;
                _.Sq.prototype.H.call(this);
            };
            var Vs = function (a) {
                return 'function' === typeof a.j.__tcfapi || null != Us(a);
            };
            Ts.prototype.addEventListener = function (a) {
                var b = {}, c = _.Mi(function () {
                        return a(b);
                    }), d = 0;
                -1 !== this.G && (d = setTimeout(function () {
                    b.tcString = 'tcunavailable';
                    b.internalErrorState = 1;
                    c();
                }, this.G));
                var e = function (f, g) {
                    clearTimeout(d);
                    f ? (b = f, b.internalErrorState = Ss(b), g && 0 === b.internalErrorState || (b.tcString = 'tcunavailable', g || (b.internalErrorState = 3))) : (b.tcString = 'tcunavailable', b.internalErrorState = 3);
                    a(b);
                };
                try {
                    Ws(this, 'addEventListener', e);
                } catch (f) {
                    b.tcString = 'tcunavailable', b.internalErrorState = 3, d && (clearTimeout(d), d = 0), c();
                }
            };
            Ts.prototype.removeEventListener = function (a) {
                a && a.listenerId && Ws(this, 'removeEventListener', null, a.listenerId);
            };
            var Ys = function (a, b) {
                    var c = { internalErrorState: 0 }, d = _.Mi(function () {
                            return b(c);
                        }), e = 0;
                    -1 !== a.G && (e = setTimeout(function () {
                        c.tcString = 'tcunavailable';
                        c.internalErrorState = 1;
                        d();
                    }, a.G));
                    Ws(a, 'addEventListener', function (f, g) {
                        e && (clearTimeout(e), e = 0);
                        g && (c = f);
                        c.internalErrorState = Ss(c);
                        0 != c.internalErrorState && (c.tcString = 'tcunavailable');
                        if (0 != c.internalErrorState || Xs(c))
                            Ws(a, 'removeEventListener', null, c.listenerId), d();
                    });
                }, Ws = function (a, b, c, d) {
                    c || (c = function () {
                    });
                    if ('function' === typeof a.j.__tcfapi)
                        a = a.j.__tcfapi, a(b, 2, c, d);
                    else if (Us(a)) {
                        Zs(a);
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
                }, Us = function (a) {
                    if (a.l)
                        return a.l;
                    a.l = gm(a.j, '__tcfapiLocator');
                    return a.l;
                }, Zs = function (a) {
                    a.m || (a.m = function (b) {
                        try {
                            var c = ('string' === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
                            a.D[c.callId](c.returnValue, c.success);
                        } catch (d) {
                        }
                    }, _.yd(a.j, 'message', a.m));
                }, Xs = function (a) {
                    if (!1 === a.gdprApplies)
                        return !0;
                    void 0 === a.internalErrorState && (a.internalErrorState = Ss(a));
                    return 'error' === a.cmpStatus || 0 !== a.internalErrorState || 'loaded' === a.cmpStatus && ('tcloaded' === a.eventStatus || 'useractioncomplete' === a.eventStatus) ? !0 : !1;
                };
            var $s = function (a, b, c) {
                    this.j = a;
                    this.A = b;
                    this.l = void 0 === c ? function () {
                    } : c;
                }, at = function (a, b, c) {
                    return new $s(a, b, c);
                };
            $s.prototype.start = function () {
                try {
                    Rs(this.j), bt(this);
                } catch (a) {
                }
            };
            var bt = function (a) {
                var b = Ed(Vi('https://fundingchoicesmessages.google.com/i/%{id}?ers=%{ers}'), {
                    id: a.A,
                    ers: 3
                });
                Qs(a.j, b, function () {
                    a.l(!0);
                }, function () {
                    a.l(!1);
                });
            };
            var dt = function (a) {
                P(this, a, ct, null);
            };
            _.N(dt, O);
            var ft = function (a, b) {
                    Xd(a, 1, b, et);
                }, et = function (a) {
                    P(this, a, null, null);
                };
            _.N(et, O);
            var gt = function (a) {
                    var b = new et();
                    return Fb(b, 1, a);
                }, ht = function (a, b) {
                    return Ab(a, 2, b, 0);
                }, ct = [1];
            var jt = function (a, b) {
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
                        if (d = Lh(dt, e), e) {
                            var f = Lh(dt, e);
                            ft(f, ht(gt(1), -1));
                            gl(f);
                        }
                    } catch (h) {
                        it(e), d = new dt();
                    }
                    f = I(d, et, 1);
                    if (f = ca(f, function (h) {
                            return lf(h, 1, 0) === b;
                        })) {
                        var g = Yg(f, 2);
                        if (null === g || isNaN(g))
                            it(e);
                        else
                            return g;
                    }
                    c = Wl(c);
                    if (null === c)
                        return null;
                    f ? ht(f, c) : ft(d, ht(gt(b), c));
                    return Xl(a, gl(d)) ? c : null;
                }, it = function (a) {
                    0.01 > Math.random() && Rb({ data: a }, 'ls_tamp');
                };
            var vc = function (a) {
                    this.j = a || { cookie: '' };
                }, mt = function () {
                    var a = kt;
                    if (!_.F.navigator.cookieEnabled)
                        return !1;
                    if (!a.isEmpty())
                        return !0;
                    a.set('TESTCOOKIESENABLED', '1', { jc: 60 });
                    if ('1' !== a.get('TESTCOOKIESENABLED'))
                        return !1;
                    lt(a, 'TESTCOOKIESENABLED');
                    return !0;
                };
            vc.prototype.set = function (a, b, c) {
                var d = !1;
                if ('object' === typeof c) {
                    var e = c.af;
                    d = c.Ud || !1;
                    var f = c.domain || void 0;
                    var g = c.path || void 0;
                    var h = c.jc;
                }
                if (/[;=\s]/.test(a))
                    throw Error('Invalid cookie name "' + a + '"');
                if (/[;\r\n]/.test(b))
                    throw Error('Invalid cookie value "' + b + '"');
                void 0 === h && (h = -1);
                this.j.cookie = a + '=' + b + (f ? ';domain=' + f : '') + (g ? ';path=' + g : '') + (0 > h ? '' : 0 == h ? ';expires=' + new Date(1970, 1, 1).toUTCString() : ';expires=' + new Date(Date.now() + 1000 * h).toUTCString()) + (d ? ';secure' : '') + (null != e ? ';samesite=' + e : '');
            };
            vc.prototype.get = function (a, b) {
                for (var c = a + '=', d = (this.j.cookie || '').split(';'), e = 0, f; e < d.length; e++) {
                    f = ij(d[e]);
                    if (0 == f.lastIndexOf(c, 0))
                        return f.substr(c.length);
                    if (f == a)
                        return '';
                }
                return b;
            };
            var lt = function (a, b) {
                a.get(b);
                a.set(b, '', {
                    jc: 0,
                    path: void 0,
                    domain: void 0
                });
            };
            vc.prototype.isEmpty = function () {
                return !this.j.cookie;
            };
            var nt = new vc('undefined' == typeof document ? null : document);
            var ot = function (a) {
                P(this, a, null, null);
            };
            _.N(ot, O);
            var pt = function () {
                    this.j = window;
                    this.l = 0;
                }, qt = function (a, b) {
                    return wc('__gads', b, a.j);
                }, rt = function (a, b, c) {
                    var d = {
                            jc: H(b, 2) - a.j.Date.now() / 1000,
                            path: H(b, 3),
                            domain: H(b, 4),
                            Ud: !1
                        }, e = H(b, 1), f = a.j;
                    x(c, 5) && uc(f) && new vc(f.document).set('__gads', e, d);
                    x(c, 5) && 0.01 > a.j.Math.random() && (c = qt(a, c), Rb({
                        domain: H(b, 4),
                        host: a.j.location.host,
                        success: c === H(b, 1) ? '1' : '0'
                    }, 'gfp_cw_status'));
                };
            var st = {}, tt = (st[3] = bj(Ui(Vi('https://s0.2mdn.net/ads/richmedia/studio/mu/templates/hifi/hifi.js'))), st), ut = {}, vt = (ut[3] = bj(Ui(Vi('https://s0.2mdn.net/ads/richmedia/studio_canary/mu/templates/hifi/hifi_canary.js'))), ut);
            var wt = function (a) {
                    this.j = a;
                    this.l = Pj();
                }, xt = function (a) {
                    var b = {};
                    _.Oi(a, function (c) {
                        b[c.j] = c.l;
                    });
                    return b;
                };
            var zt, At, Bt;
            zt = function () {
                return 0 != _.yt(document);
            };
            _.yt = function (a) {
                return {
                    visible: 1,
                    hidden: 2,
                    prerender: 3,
                    preview: 4,
                    unloaded: 5
                }[a.visibilityState || a.webkitVisibilityState || a.mozVisibilityState || ''] || 0;
            };
            At = function (a) {
                var b;
                a.visibilityState ? b = 'visibilitychange' : a.mozVisibilityState ? b = 'mozvisibilitychange' : a.webkitVisibilityState && (b = 'webkitvisibilitychange');
                return b;
            };
            Bt = function (a) {
                return null != a.hidden ? a.hidden : null != a.mozHidden ? a.mozHidden : null != a.webkitHidden ? a.webkitHidden : null;
            };
            var Ct = function () {
                    this.j = [];
                    this.l = [];
                    this.A = [];
                }, Dt = function (a, b, c) {
                    a.l.push({
                        zc: void 0 === c ? !1 : c,
                        Dc: b
                    });
                };
            var Ee = function () {
                var a = this;
                this.promise = new D.Promise(function (b, c) {
                    a.resolve = b;
                    a.reject = c;
                });
            };
            var Et = function (a) {
                a = Error.call(this, a);
                this.message = a.message;
                'stack' in a && (this.stack = a.stack);
                _.r(Object, 'setPrototypeOf').call(Object, this, Et.prototype);
                this.name = 'InputError';
            };
            _.N(Et, Error);
            var Ft = function () {
                    var a = this;
                    this.F = this.m = null;
                    this.D = -1;
                    this.H = new Ee();
                    this.A = !1;
                    this.H.promise.then(function () {
                        -1 !== a.D && (a.F = _.xc() - a.D);
                    }, function () {
                    });
                }, Gt = function () {
                    Ft.apply(this, arguments);
                };
            _.N(Gt, Ft);
            Gt.prototype.j = function (a) {
                this.A || (this.A = !0, this.m = a, this.H.resolve(a));
            };
            Gt.prototype.l = function (a) {
                null == a ? Ht(this) : this.j(a);
            };
            var Ht = function (a) {
                    a.A || (a.A = !0, a.m = null, a.H.resolve(null));
                }, It = function (a, b) {
                    a.A || (a.A = !0, a.m = null, a.B = b, a.H.reject(b));
                };
            Yh.Object.defineProperties(Gt.prototype, {
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
            var Jt = function (a) {
                Ft.call(this);
                this.j = a;
            };
            _.N(Jt, Ft);
            var Kt = function (a) {
                return null !== a.j.m;
            };
            Yh.Object.defineProperties(Jt.prototype, {
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
            var Lt = function () {
                Jt.apply(this, arguments);
            };
            _.N(Lt, Jt);
            Yh.Object.defineProperties(Lt.prototype, {
                value: {
                    configurable: !0,
                    enumerable: !0,
                    get: function () {
                        return this.j.m;
                    }
                }
            });
            var Mt = function () {
                Gt.apply(this, arguments);
            };
            _.N(Mt, Gt);
            Mt.prototype.notify = function () {
                Ht(this);
            };
            var Nt = function (a, b) {
                b = void 0 === b ? 0 : b;
                _.Sq.call(this);
                var c = this;
                this.id = a;
                this.vb = b;
                this.D = new Ct();
                this.qa = !1;
                this.ba = -1;
                _.Ig(this, function () {
                    var d = c.D;
                    d.j.length = 0;
                    d.A.length = 0;
                    d.l.length = 0;
                });
            };
            _.N(Nt, _.Sq);
            Nt.prototype.start = function () {
                return A(this, function b() {
                    var c = this, d, e, f, g;
                    return B(b, function (h) {
                        switch (h.j) {
                        case 1:
                            if (c.qa)
                                return h.return();
                            c.qa = !0;
                            h.H = 2;
                            return C(h, yc(c.D.l, c.vb), 4);
                        case 4:
                            c.ba = h.l;
                            if (c.A) {
                                h.j = 5;
                                break;
                            }
                            for (var k = 0, l = _.G(c.D.A), m = l.next(); !m.done; m = l.next()) {
                                if (!Kt(m.value))
                                    throw Error('missing input: ' + c.id + '/' + k);
                                ++k;
                            }
                            d = _.G(c.D.j);
                            for (e = d.next(); !e.done; e = d.next())
                                f = e.value, f.D = _.xc();
                            return C(h, c.j(), 5);
                        case 5:
                            Bd(h, 0);
                            break;
                        case 2:
                            g = Cd(h);
                            if (c.A)
                                return h.return();
                            g instanceof Et ? c.ea(g) : g instanceof Error && (c.V(g), c.G(g));
                            ni(h);
                        }
                    });
                });
            };
            Nt.prototype.l = function () {
                var a = new Gt();
                this.D.j.push(a);
                return a;
            };
            var Ot = function (a) {
                    var b = new Mt();
                    a.D.j.push(b);
                    return b;
                }, U = function (a, b) {
                    Dt(a.D, b);
                    b = new Lt(b);
                    a.D.A.push(b);
                    return b;
                }, V = function (a, b) {
                    Dt(a.D, b);
                    return new Jt(b);
                }, Pt = function (a, b) {
                    Dt(a.D, b, !0);
                    return new Jt(b);
                }, Qt = function (a, b) {
                    Dt(a.D, b);
                };
            Nt.prototype.ea = function () {
            };
            Nt.prototype.G = function (a) {
                if (this.D.j.length) {
                    a = new Et(a.message);
                    for (var b = _.G(this.D.j), c = b.next(); !c.done; c = b.next())
                        if (c = c.value, !c.G) {
                            var d = a;
                            c.A = !0;
                            c.B = d;
                            c.H.reject(d);
                        }
                }
            };
            var oe = function () {
                _.Sq.apply(this, arguments);
                this.j = [];
            };
            _.N(oe, _.Sq);
            var pe = function (a, b) {
                    b = _.G(b);
                    for (var c = b.next(); !c.done; c = b.next())
                        c = c.value, _.Tq(a, c), a.j.push(c);
                }, W = function (a, b) {
                    pe(a, [b]);
                }, qe = function (a) {
                    if (a.j.length) {
                        a = _.G(a.j);
                        for (var b = a.next(); !b.done; b = a.next())
                            b.value.start();
                    }
                };
            oe.prototype.H = function () {
                _.Sq.prototype.H.call(this);
                this.j.length = 0;
            };
            var St, Rt;
            St = function () {
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
                this.floatingAdsStacking = new Rt();
            };
            _.qd = function (a) {
                a.google_reactive_ads_global_state ? null == a.google_reactive_ads_global_state.floatingAdsStacking && (a.google_reactive_ads_global_state.floatingAdsStacking = new Rt()) : a.google_reactive_ads_global_state = new St();
                return a.google_reactive_ads_global_state;
            };
            Rt = function () {
                this.maxZIndexRestrictions = {};
                this.nextRestrictionId = 0;
                this.maxZIndexListeners = [];
            };
            var td, dd, gd;
            td = 728 * 1.38;
            _.sd = function (a) {
                return a.innerHeight >= a.innerWidth;
            };
            _.Tt = function (a) {
                var b = _.fd(a).clientWidth;
                a = a.innerWidth;
                return b && a ? b / a : 0;
            };
            dd = function (a, b) {
                return (a = _.fd(a).clientWidth) ? a > (void 0 === b ? 420 : b) ? 32768 : 320 > a ? 65536 : 0 : 16384;
            };
            gd = function (a) {
                return (a = _.Tt(a)) ? 1.05 < a ? 262144 : 0.95 > a ? 524288 : 0 : 131072;
            };
            _.fd = function (a) {
                a = a.document;
                var b = {};
                a && (b = 'CSS1Compat' == a.compatMode ? a.documentElement : a.body);
                return b || {};
            };
            _.Ut = function (a) {
                return void 0 === a.pageYOffset ? (a.document.documentElement || a.document.body.parentNode || a.document.body).scrollTop : a.pageYOffset;
            };
            var Wt, Vt;
            _.jd = function (a) {
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
                return b ? null : (a = Vt(a)) ? Wt(a) : null;
            };
            Wt = function (a) {
                a = void 0 === a ? [] : a;
                var b = Date.now();
                return _.Be(a, function (c) {
                    return 3600000 > b - c;
                });
            };
            _.hd = function (a) {
                return !!a && 1 > a.length;
            };
            Vt = function (a) {
                try {
                    var b = a.getItem('__lsv__');
                    if (!b)
                        return [];
                    try {
                        var c = JSON.parse(b);
                    } catch (d) {
                    }
                    return !Array.isArray(c) || _.Qi(c, function (d) {
                        return !_.r(Number, 'isInteger').call(Number, d);
                    }) ? (a.removeItem('__lsv__'), []) : c;
                } catch (d) {
                    return null;
                }
            };
            var Xt = function (a) {
                P(this, a, null, null);
            };
            _.N(Xt, O);
            var Zt = function (a) {
                P(this, a, Yt, null);
            };
            _.N(Zt, O);
            var Yt = [
                1,
                2
            ];
            var $t = function (a) {
                P(this, a, null, null);
            };
            _.N($t, O);
            var au = function (a) {
                P(this, a, null, null);
            };
            _.N(au, O);
            var bu = function (a) {
                _.Sq.call(this);
                this.j = a;
                this.m = this.l = null;
                this.D = {};
                this.o = 0;
                this.G = !1;
            };
            _.N(bu, _.Sq);
            var cu = function (a) {
                    a.G || (a.l || (a.j.googlefc ? a.l = a.j : a.l = gm(a.j, 'googlefcPresent')), a.G = !0);
                    return !!a.l;
                }, eu = function (a, b, c) {
                    if (cu(a))
                        if (a.l === a.j)
                            a = a.j.googlefc || (a.j.googlefc = {}), a.__fci = a.__fci || [], a.__fci.push(b, function (f) {
                                c(Lh(au, f));
                            });
                        else {
                            du(a);
                            var d = a.o++;
                            a.D[d] = c;
                            var e = {};
                            a.l.postMessage((e.__fciCall = {
                                command: b,
                                callId: d
                            }, e), '*');
                        }
                }, fu = function (a, b) {
                    return new D.Promise(function (c) {
                        eu(a, b, c);
                    });
                }, du = function (a) {
                    a.m || (a.m = function (b) {
                        try {
                            var c = Lh(au, b.data.__fciReturn);
                            (0, a.D[H(c, 1)])(c);
                        } catch (d) {
                        }
                    }, _.yd(a.j, 'message', a.m));
                }, gu = function (a, b, c, d) {
                    if (!b)
                        return D.Promise.resolve(null);
                    var e = M(b, Xt, 3);
                    b = M(b, $t, 2);
                    return e && b && 1 === H(b, 1) && 2 === H(e, 1) ? fu(a, 'getM25Consent').then(function (f) {
                        var g = M(f, Zt, 4);
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
            var hu = function () {
                this.j = [];
                this.l = -1;
            };
            hu.prototype.set = function (a, b) {
                b = void 0 === b ? !0 : b;
                0 <= a && 52 > a && 0 === a % 1 && this.j[a] != b && (this.j[a] = b, this.l = -1);
            };
            hu.prototype.get = function (a) {
                return !!this.j[a];
            };
            var iu = function (a) {
                -1 == a.l && (a.l = Pi(a.j, function (b, c, d) {
                    return c ? b + Math.pow(2, d) : b;
                }));
                return a.l;
            };
            var ju = function () {
                }, ou, su, tu, Sf, nu, mu, lu, uu;
            ju.N = function () {
                throw Error('Must be overridden');
            };
            var ku = function () {
                this.l = this.lb = null;
                this.A = 0;
                this.j = new D.Map();
            };
            _.N(ku, ju);
            ou = function (a, b) {
                a.j.get(b) || (a.j.set(b, {
                    Ua: !0,
                    Mb: '',
                    Qa: '',
                    Qc: 0,
                    Hc: 0,
                    mc: [],
                    nc: [],
                    isBackfill: !1,
                    $a: !1
                }), _.Ig(b, function () {
                    a.j.delete(b);
                    lu(a, b);
                }), Xq(b, $q, function (c) {
                    c = c.detail;
                    var d = a.j.get(b);
                    d.Mb = H(c, 33) || '';
                    d.$a = !0;
                    d.isBackfill = !!x(c, 9);
                    mu(a, b, function () {
                        d.Mb = '';
                    });
                    nu(a, b, function () {
                        d.isBackfill = !1;
                        d.$a = !1;
                    });
                }));
            };
            _.pu = function (a, b) {
                var c, d;
                return null !== (d = null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.Ua) && void 0 !== d ? d : !1;
            };
            _.qu = function (a, b) {
                a.j.get(b) && (a.j.get(b).Ua = !1);
            };
            _.ru = function (a, b) {
                a.j.get(b) && (a.j.get(b).Ua = !0);
            };
            su = function (a, b) {
                if (!b.length)
                    return [];
                var c = Ib(b[0].getAdUnitPath());
                return [].concat(_.ec(_.r(a.j, 'entries').call(a.j))).filter(function (d) {
                    d = _.G(d);
                    var e = d.next().value;
                    return !!d.next().value.Mb && Ib(e.getAdUnitPath()) === c && !_.r(b, 'includes').call(b, e);
                }).map(function (d) {
                    d = _.G(d);
                    d.next();
                    return d.next().value.Mb;
                });
            };
            tu = function (a, b) {
                var c, d;
                return null !== (d = null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.Qa) && void 0 !== d ? d : '';
            };
            Sf = function (a, b) {
                return (a = a.j.get(b)) && a.Qc - 1 || 0;
            };
            nu = function (a, b, c) {
                (a = a.j.get(b)) && a.mc.push(c);
            };
            mu = function (a, b, c) {
                (a = a.j.get(b)) && a.nc.push(c);
            };
            lu = function (a, b) {
                if (a = a.j.get(b))
                    for (b = a.nc.slice(), a.nc.length = 0, a = _.G(b), b = a.next(); !b.done; b = a.next())
                        b = b.value, b();
            };
            uu = function (a, b) {
                if (a = a.j.get(b))
                    for (b = a.mc.slice(), a.mc.length = 0, a = _.G(b), b = a.next(); !b.done; b = a.next())
                        b = b.value, b();
            };
            ku.prototype.isBackfill = function (a) {
                var b, c;
                return null !== (c = null === (b = this.j.get(a)) || void 0 === b ? void 0 : b.isBackfill) && void 0 !== c ? c : !1;
            };
            ku.prototype.$a = function (a) {
                var b, c;
                return null !== (c = null === (b = this.j.get(a)) || void 0 === b ? void 0 : b.$a) && void 0 !== c ? c : !1;
            };
            var vu = function (a, b, c) {
                    var d;
                    if (a = a.j.get(b))
                        null === (d = a.qc) || void 0 === d ? void 0 : d.va(), a.qc = c;
                }, wu = function (a, b) {
                    var c;
                    if (a = a.j.get(b))
                        null === (c = a.qc) || void 0 === c ? void 0 : c.va(), delete a.qc;
                };
            Bi(ku);
            var xu = function () {
                var a = {};
                return a.adsense_channel_ids = 'channel', a.adsense_ad_types = 'ad_type', a.adsense_ad_format = 'format', a.adsense_background_color = 'color_bg', a.adsense_border_color = 'color_border', a.adsense_link_color = 'color_link', a.adsense_text_color = 'color_text', a.adsense_url_color = 'color_url', a.page_url = 'url', a.adsense_allow_expandable_ads = 'ea', a.adsense_encoding = 'oe', a.adsense_family_safe = 'adsafe', a.adsense_flash_version = 'flash', a.adsense_font_face = 'f', a.adsense_hints = 'hints', a.adsense_keyword_type = 'kw_type', a.adsense_keywords = 'kw', a.adsense_test_mode = 'adtest', a.alternate_ad_iframe_color = 'alt_color', a.alternate_ad_url = 'alternate_ad_url', a.demographic_age = 'cust_age', a.demographic_gender = 'cust_gender', a.document_language = 'hl', a;
            };
            var yu = new D.Map(), zu = new D.Map(), Au = function () {
                }, Rc = function (a, b) {
                    var c = zu.get(a);
                    c || (b = c = b(), yu.set(b, a), zu.set(a, b));
                    return c;
                }, Bu = function (a) {
                    return (a = Lq[a]) ? Kg()[a]() : null;
                };
            var Cf = function (a) {
                P(this, a, Cu, null);
            };
            _.N(Cf, O);
            var Df = function (a) {
                    return H(a, 1);
                }, Du = function (a, b) {
                    return E(a, 1, b);
                }, Eu = function (a, b) {
                    return Cb(a, 2, b);
                }, Cu = [2];
            var Mc = function (a) {
                P(this, a, null, null);
            };
            _.N(Mc, O);
            var Lc = function (a, b) {
                    return E(a, 1, b);
                }, Kc = function (a, b) {
                    return E(a, 2, b);
                }, Fu = function () {
                    var a = new Mc();
                    return E(a, 3, !0);
                };
            var Ac = function (a) {
                P(this, a, Gu, Hc);
            };
            _.N(Ac, O);
            var Gc = function (a, b) {
                    return E(a, 1, b);
                }, Jc = function (a, b) {
                    Db(a, 5, b);
                }, Ec = function (a, b) {
                    return E(a, 10, b);
                }, ff = function (a, b) {
                    E(a, 13, b);
                }, Nc = function (a, b) {
                    return E(a, 15, b);
                }, Gu = [6], Hc = [
                    [
                        2,
                        3
                    ],
                    [
                        7,
                        12
                    ]
                ];
            var $e = function (a) {
                P(this, a, null, null);
            };
            _.N($e, O);
            var bf = function (a, b) {
                    return E(a, 1, b);
                }, af = function (a, b) {
                    return Db(a, 2, b);
                };
            var Zf = function (a) {
                P(this, a, null, null);
            };
            _.N(Zf, O);
            var Iu = function (a) {
                P(this, a, Hu, null);
            };
            _.N(Iu, O);
            var Hu = [2];
            var Ju = function (a) {
                P(this, a, null, null);
            };
            _.N(Ju, O);
            var Lu = function (a) {
                P(this, a, Ku, null);
            };
            _.N(Lu, O);
            Lu.prototype.getAdUnitPath = function () {
                return H(this, 1);
            };
            var Mu = function (a, b) {
                    E(a, 2, b);
                }, Nu = function (a, b) {
                    E(a, 24, b);
                };
            Lu.prototype.ya = function () {
                return M(this, Ju, 13);
            };
            var ld = function (a) {
                    return lf(a, 15, 0);
                }, cf = function (a, b) {
                    return Xd(a, 21, b, $e);
                }, Ku = [
                    3,
                    4,
                    5,
                    6,
                    8,
                    9,
                    21
                ];
            var Ou = function (a, b, c, d, e) {
                    if ('string' !== typeof c || hj(c))
                        e.M(uh('Slot.setTargeting', [
                            c,
                            d
                        ]), a);
                    else {
                        var f = [];
                        Array.isArray(d) ? f = d : qa(d) ? f = _.v(Xo) ? Array.prototype.slice.call(d) : _.r(Array, 'from').call(Array, d) : d && (f = [d]);
                        f = f.map(String);
                        (d = (L = I(b, Cf, 9), _.r(L, 'find')).call(L, function (g) {
                            return Df(g) === c;
                        })) ? Eu(d, f) : (d = Eu(Du(new Cf(), c), f), Xd(b, 9, d, Cf));
                        e.info(es(c, f.join(), b.getAdUnitPath()), a);
                    }
                }, Pu = function (a, b, c, d) {
                    if (null == c || 'object' !== typeof c)
                        d.error(uh('Slot.updateTargetingFromMap', [c]), a);
                    else
                        for (var e = _.G(_.r(Object, 'keys').call(Object, c)), f = e.next(); !f.done; f = e.next())
                            f = f.value, Ou(a, b, f, c[f], d);
                };
            var Qu = function (a) {
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
            var Ru = function (a) {
                    return Array.isArray(a) && 2 == a.length ? Dm(a[0]) && Dm(a[1]) : 'string' === typeof a && 'fluid' == a;
                }, Su = function (a) {
                    return Array.isArray(a) && 2 == a.length && Dm(a[0]) && Dm(a[1]);
                }, Tu = function (a) {
                    return Array.isArray(a) ? Kc(Lc(new Mc(), a[0]), a[1]) : Fu();
                }, Uu = function (a) {
                    var b = [];
                    if (Ic(a))
                        b.push(Tu(a));
                    else if (Array.isArray(a))
                        for (var c = 0; c < a.length; ++c) {
                            var d = a[c];
                            Ic(d) && b.push(Tu(d));
                            sa(d, ['fluid']) && b.push(Fu());
                        }
                    return b;
                }, Vu = function (a) {
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
                    return Kc(Lc(new Mc(), b), a);
                }, Wu = function (a) {
                    var b = null, c = null;
                    var d = a && (Array.isArray(a.fixed) || 'fluid' === a.fixed);
                    var e = a && Array.isArray(a.max);
                    if (a && !Array.isArray(a) && (d || e)) {
                        if (d = Uu(a.fixed), c = Vu(a.max))
                            a.min ? ((b = Vu(a.min)) && null === H(b, 1) && Lc(b, 0), b && null === H(b, 2) && Kc(b, 0)) : b = Kc(Lc(new Mc(), 0), 0);
                    } else
                        d = Uu(a);
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
                    d.length || c || um('Invalid GPT fixed size specification: ' + JSON.stringify(a));
                    c && b ? (a = new Zf(), c = Db(a, 1, c), b = Db(c, 2, b)) : b = null;
                    return {
                        rd: d,
                        Sa: b
                    };
                }, Ic = function (a) {
                    return Array.isArray(a) && 1 < a.length ? 'number' === typeof a[0] && 'number' === typeof a[1] : 'string' === typeof a && 'fluid' == a;
                };
            var Pc = new D.Map();
            var Xu = function (a) {
                P(this, a, null, null);
            };
            _.N(Xu, O);
            var Yu = function (a) {
                P(this, a, null, null);
            };
            _.N(Yu, O);
            var $u = function (a) {
                P(this, a, Zu, null);
            };
            _.N($u, O);
            var av = function (a, b) {
                E(a, 30, b);
            };
            $u.prototype.ya = function () {
                return M(this, Ju, 18);
            };
            var bv = function (a) {
                    return M(a, Yu, 25);
                }, Zu = [
                    2,
                    3,
                    14
                ];
            var cv = function () {
            };
            cv.N = function () {
                throw Error('Must be overridden');
            };
            var dv = function () {
                this.j = new D.Map();
            };
            _.N(dv, cv);
            Bi(dv);
            var ev = function () {
            };
            ev.N = function () {
                throw Error('Must be overridden');
            };
            var Gh = function () {
                this.ka = {};
                this.j = new $u();
                this.l = new D.Map();
                E(this.j, 26, Cm());
                (_.v(yo) && 2 === rd() || _.Xb(36)) && E(this.j, 15, !0);
            };
            _.N(Gh, ev);
            var fv = function (a) {
                    var b = Gh.N(), c = H(a, 2);
                    if (c && !b.ka.hasOwnProperty(c)) {
                        var d = dv.N(), e = ++Kb.N().l;
                        d.j.set(c, e);
                        E(a, 20, e);
                        b.ka[c] = a;
                    }
                }, Ye = function () {
                    return Gh.N().ka;
                }, gv = function (a, b) {
                    var c;
                    return null !== (c = a.ka[b]) && void 0 !== c ? c : null;
                }, hv = function (a) {
                    var b = Gh.N(), c;
                    a = _.G(a);
                    for (var d = a.next(); !d.done; d = a.next())
                        null === (c = b.ka[d.value.j]) || void 0 === c ? void 0 : cl(c, 21, []);
                };
            Bi(Gh);
            var iv = function () {
                this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.creativeId = this.campaignId = this.advertiserId = null;
                this.isBackfill = !1;
                this.encryptedTroubleshootingInfo = this.creativeTemplateId = this.companyIds = this.yieldGroupIds = null;
            };
            var jv = '', kv = null, lv = function () {
                    for (var a = Cq(cp) || '0-0-0', b = a.split('-').map(function (e) {
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
                }, mv = function () {
                    jv || (jv = lv());
                    return jv;
                }, nv = function () {
                    if (null == kv) {
                        for (var a = og(bp), b = [], c = 0; c < a.length; c += 2)
                            Kl(a[c], a[c + 1], b);
                        kv = b.join('&');
                    }
                    return kv;
                }, ov = function (a) {
                    var b = Bc(), c = new Ju();
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
                        g && b.error(Cc('setSafeFrameConfig', Dc(a), f, Dc(e)));
                    });
                    return d ? null : c;
                }, pv = function (a) {
                    var b = new Ju();
                    a = _.G(a);
                    for (var c = a.next(); !c.done; c = a.next())
                        if (c = c.value) {
                            if (yf(c, 1)) {
                                var d = x(c, 1);
                                E(b, 1, d);
                            }
                            yf(c, 2) && (d = x(c, 2), E(b, 2, d));
                            yf(c, 3) && (d = x(c, 3), E(b, 3, d));
                            yf(c, 4) && (c = x(c, 4), E(b, 4, c));
                        }
                    return b;
                };
            var qv = function (a, b) {
                this.l = a;
                this.j = b;
            };
            qv.prototype.getWidth = function () {
                return this.l;
            };
            qv.prototype.getHeight = function () {
                return this.j;
            };
            var rv = function (a, b) {
                    a = _.r(a, 'find').call(a, function (c) {
                        c = M(c, Mc, 1);
                        return H(c, 1) <= H(b, 1) && H(c, 2) <= H(b, 2);
                    });
                    return null == a ? null : I(a, Mc, 2);
                }, sv = function (a) {
                    if (!Array.isArray(a) || 2 !== a.length)
                        throw Error('Each mapping entry must be an array of size 2');
                    var b = a[0];
                    if (!Su(b))
                        throw Error('Size must be an array of two non-negative integers');
                    b = Kc(Lc(new Mc(), b[0]), b[1]);
                    if (Array.isArray(a[1]) && 0 === a[1].length)
                        a = [];
                    else if (a = Uu(a[1]), 0 === a.length)
                        throw Error('At least one slot size must be present');
                    var c = new Iu();
                    b = Db(c, 1, b);
                    return cl(b, 2, a);
                };
            var tv = function (a, b, c) {
                    return 'number' === typeof b && 'number' === typeof c && 0 < I(a, Iu, 6).length ? rv(I(a, Iu, 6), Kc(Lc(new Mc(), b), c)) : I(a, Mc, 5);
                }, Zc = function (a) {
                    var b = window, c = null;
                    b.top == b && (b = Js(!1, b), c = tv(a, b.width, b.height));
                    null == c && (c = tv(a));
                    return c.map(function (d) {
                        return x(d, 3) ? 'fluid' : [
                            H(d, 1),
                            H(d, 2)
                        ];
                    });
                }, uv = function (a) {
                    if (0 == Zc(a).length && yf(a, 16))
                        return '1x1';
                    var b = [], c = !1;
                    a = _.G(Zc(a));
                    for (var d = a.next(); !d.done; d = a.next())
                        d = d.value, Array.isArray(d) ? b.push(d.join('x')) : 'fluid' == d ? c = !0 : b.push(d);
                    c && b.unshift('320x50');
                    return b.join('|');
                }, vv = function (a) {
                    var b = 0, c = 0;
                    a = _.G(Zc(a));
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
                }, wv = function (a, b) {
                    b = void 0 === b ? null : b;
                    var c = 0, d = [];
                    a && (d.push(a.getAdUnitPath()), d.push(uv(a)), d.push(H(a, 2)));
                    if (b) {
                        a = [];
                        for (var e = 0; b && 25 > e; b = b.parentNode, ++e)
                            9 === b.nodeType ? a.push('') : a.push(b.id);
                        (b = a.join()) && d.push(b);
                    }
                    0 < d.length && (c = Ul(d.join(':')));
                    return c.toString();
                }, xv = function (a) {
                    return 0 !== a && 1 !== a;
                }, yv = function (a, b) {
                    var c;
                    return !(null != (c = x(b, 22)) ? !c : !x(a, 15));
                };
            var Sc = function (a) {
                var b = this, c = Bc(), d = gv(Gh.N(), a.j), e = '', f = !1;
                Xq(a, ar, function (m) {
                    var n = m.detail;
                    m = n.$b;
                    n = n.isBackfill;
                    m && (e = m, f = n);
                });
                this.set = w(40, function (m, n) {
                    if ('string' !== typeof m || 'string' !== typeof n || void 0 === xu()[m])
                        return c.M(uh('Slot.set', [
                            m,
                            n
                        ]), a), b;
                    var p = (L = I(d, Cf, 3), _.r(L, 'find')).call(L, function (t) {
                        return Df(t) === m;
                    });
                    p ? Eu(p, [n]) : (p = Du(new Cf(), m), Ef(p, 2, n), Xd(d, 3, p, Cf));
                    return b;
                });
                this.get = w(41, function (m) {
                    if ('string' !== typeof m)
                        return c.M(uh('Slot.get', [m]), a), null;
                    var n = (L = I(d, Cf, 3), _.r(L, 'find')).call(L, function (p) {
                        return Df(p) === m;
                    });
                    return (n = n && H(n, 2)) ? n[0] : null;
                });
                this.getAttributeKeys = w(42, function () {
                    return I(d, Cf, 3).map(function (m) {
                        return Df(m);
                    });
                });
                this.addService = w(43, function (m) {
                    m = yu.get(m);
                    if (!m)
                        return c.M(uh('Slot.addService', [m]), a), b;
                    if ((L = H(d, 4), _.r(L, 'includes')).call(L, m.getName()))
                        return c.info(zr(m.getName(), a.toString()), a), b;
                    m.Fa(a, d);
                    return b;
                });
                this.defineSizeMapping = w(44, function (m) {
                    try {
                        if (!Array.isArray(m))
                            throw Error('Size mapping must be an array');
                        var n = m.map(sv);
                        cl(d, 6, n);
                    } catch (p) {
                        Ub(44, p), um('Incorrect usage of googletag.Slot defineSizeMapping: ' + p.message);
                    }
                    return b;
                });
                this.setClickUrl = w(45, function (m) {
                    if ('string' !== typeof m)
                        return c.M(uh('Slot.setClickUrl', [m]), a), b;
                    E(d, 7, m);
                    return b;
                });
                this.setCategoryExclusion = w(46, function (m) {
                    'string' !== typeof m || hj(m) ? c.M(uh('Slot.setCategoryExclusion', [m]), a) : ((L = H(d, 8), _.r(L, 'includes')).call(L, m) || Ef(d, 8, m), c.info(Ar(m), a));
                    return b;
                });
                this.clearCategoryExclusions = w(47, function () {
                    E(d, 8, Ja([]));
                    c.info(Br(), a);
                    return b;
                });
                this.getCategoryExclusions = w(48, function () {
                    return H(d, 8).slice();
                });
                this.setTargeting = w(49, function (m, n) {
                    Ou(a, d, m, n, c);
                    return b;
                });
                this.updateTargetingFromMap = w(649, function (m) {
                    Pu(a, d, m, c);
                    return b;
                });
                this.clearTargeting = w(50, function (m) {
                    if (void 0 === m)
                        return cl(d, 9, []), c.info(Cr(a.getAdUnitPath()), a), b;
                    var n = I(d, Cf, 9), p = _.r(n, 'findIndex').call(n, function (t) {
                            return Df(t) === m;
                        });
                    if (0 > p)
                        return c.M(bs(m, a.getAdUnitPath()), a), b;
                    n.splice(p, 1);
                    cl(d, 9, n);
                    c.info(is(m, a.getAdUnitPath()), a);
                    return b;
                });
                this.getTargeting = w(51, function (m) {
                    if ('string' !== typeof m)
                        return c.M(uh('Slot.getTargeting', [m]), a), [];
                    var n = (L = I(d, Cf, 9), _.r(L, 'find')).call(L, function (p) {
                        return Df(p) === m;
                    });
                    return n ? H(n, 2).slice() : [];
                });
                this.getTargetingKeys = w(52, function () {
                    return I(d, Cf, 9).map(function (m) {
                        return Df(m);
                    });
                });
                this.setCollapseEmptyDiv = w(53, function (m, n) {
                    n = void 0 === n ? !1 : n;
                    if ('object' === typeof m && m && _.v(Fo)) {
                        if ('boolean' === typeof m.collapseEmpty) {
                            E(d, 10, m.collapseEmpty);
                            var p;
                            Nu(d, null != (p = x(d, 24)) ? p : !0);
                        }
                        if ('boolean' === typeof m.startCollapsed) {
                            E(d, 11, m.startCollapsed);
                            var t;
                            Nu(d, null != (t = x(d, 24)) ? t : !0);
                        }
                        'boolean' === typeof m.allowCollapseOnScreen && Nu(d, !m.allowCollapseOnScreen);
                        return b;
                    }
                    if ('boolean' !== typeof m || 'boolean' !== typeof n)
                        return c.M(uh('Slot.setCollapseEmptyDiv', [
                            m,
                            n
                        ]), a), b;
                    E(d, 10, m);
                    E(d, 11, m && n);
                    mc('gpt_ced', function (u) {
                        var z = x(d, 11) ? 't' : 'f';
                        q(u, 'sc', z);
                        q(u, 'level', 'slot');
                        Zb(u);
                    });
                    n && !m && c.M(Dr(a.toString()), a);
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
                        return c.M(uh('Slot.setForceSafeFrame', [String(m)]), a), b;
                    E(d, 12, m);
                    return b;
                });
                this.setSafeFrameConfig = w(56, function (m) {
                    var n = ov(m);
                    if (!n)
                        return c.error(uh('Slot.setSafeFrameConfig', [m]), a), b;
                    Db(d, 13, n);
                    return b;
                });
                var g = null;
                Xq(a, $q, function (m) {
                    m = m.detail;
                    if (x(m, 8))
                        g = null;
                    else {
                        g = new iv();
                        var n = !!x(m, 9);
                        g.isBackfill = n;
                        var p = H(m, 15), t = H(m, 16);
                        p.length && t.length && (g.sourceAgnosticCreativeId = p[0], g.sourceAgnosticLineItemId = t[0], n || (g.creativeId = p[0], g.lineItemId = t[0], (n = H(m, 22)) && n.length && (g.creativeTemplateId = n[0])));
                        H(m, 17).length && (n = H(m, 17)[0], g.advertiserId = n);
                        H(m, 18).length && (n = H(m, 18)[0], g.campaignId = n);
                        H(m, 19).length && (n = H(m, 19), g.yieldGroupIds = n);
                        H(m, 20).length && (n = H(m, 20), g.companyIds = n);
                        m = H(m, 45);
                        m = m.length && 'string' !== typeof m[0] ? _.ze(m, Ma) : m;
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
                var h = new Qu(a);
                this.getSlotId = w(579, function () {
                    return h;
                });
                this.getServices = w(580, function () {
                    return H(d, 4).map(function (m) {
                        return Bu(m);
                    });
                });
                this.getSizes = w(581, function (m, n) {
                    return (m = tv(d, m, n)) ? m.map(function (p) {
                        return x(p, 3) ? 'fluid' : new qv(H(p, 1), H(p, 2));
                    }) : null;
                });
                this.getClickUrl = w(582, function () {
                    return yf(d, 7) ? H(d, 7) : '';
                });
                this.getTargetingMap = w(583, function () {
                    for (var m = {}, n = _.G(I(d, Cf, 9)), p = n.next(); !p.done; p = n.next())
                        p = p.value, m[Df(p)] = H(p, 2);
                    return m;
                });
                this.getOutOfPage = w(584, function (m) {
                    return 'number' === typeof m ? ld(d) === m : 0 != ld(d);
                });
                this.getCollapseEmptyDiv = w(585, function () {
                    return yf(d, 10) ? x(d, 10) : null;
                });
                this.getDivStartsCollapsed = w(586, function () {
                    return yf(d, 11) ? x(d, 11) : null;
                });
                var k = function () {
                    return '';
                };
                Xq(a, br, function (m) {
                    k = m.detail.Cc;
                });
                this.getContentUrl = w(587, function () {
                    return k();
                });
                this.getFirstLook = w(588, function () {
                    um('The getFirstLook method of googletag.Slot is deprecated. Please update your code to no longer call this method.');
                    return 0;
                });
                var l = '';
                Xq(a, $q, function (m) {
                    var n;
                    l = null != (n = H(m.detail, 34)) ? n : '';
                });
                this.getEscapedQemQueryId = w(591, function () {
                    return l;
                });
                this.getHtml = w(592, function () {
                    return f ? (window.console && console.warn && console.warn('This ad\'s html cannot be accessed using the getHtml method on googletag.Slot. Returning the empty string instead.'), '') : e;
                });
                _.v(Eo) && (this.setCentering = w(871, function (m) {
                    if ('object' !== typeof m || null == m)
                        return c.M(uh('Slot.setCentering', [Dc(m)])), b;
                    var n = m.horizontal;
                    m = m.vertical;
                    'boolean' === typeof n && E(d, 22, n);
                    'boolean' === typeof m && E(d, 23, m);
                    return b;
                }));
            };
            _.N(Sc, Au);
            Qc(Sc, 8);
            var Y = function () {
                Nt.apply(this, arguments);
            };
            _.N(Y, Nt);
            Y.prototype.V = function (a) {
                var b, c;
                Ub(this.id, a);
                null === (c = null === (b = window.console) || void 0 === b ? void 0 : b.error) || void 0 === c ? void 0 : c.call(b, a);
            };
            var zv = function (a, b, c, d, e) {
                var f = null, g = kc(b, e);
                _.yd(c, d, g) && (f = function () {
                    return _.je(c, d, g);
                }, _.Ig(a, f));
                return f;
            };
            var Av = function (a) {
                Y.call(this, 892, _.lb(To));
                this.o = this.l();
                this.m = this.l();
                this.B = Pt(this, a);
            };
            _.N(Av, Y);
            Av.prototype.j = function () {
                var a = this.B.value;
                if (!a)
                    throw Error('config timeout');
                this.m.l(M(a, zs, 1));
                this.o.l(M(a, Cs, 2));
            };
            Av.prototype.ea = function (a) {
                this.G(a);
            };
            Av.prototype.G = function (a) {
                It(this.o, a);
                It(this.m, a);
            };
            var Bv = function (a, b, c) {
                Y.call(this, 906, _.lb(Ro));
                this.J = a;
                this.m = Ot(this);
                this.B = Pt(this, b);
                this.o = ug(c, dr).then(function (d) {
                    return Ib((0, J.T)(d.detail.P.getAdUnitPath()));
                });
                this.J !== this.J.top && this.m.notify();
            };
            _.N(Bv, Y);
            Bv.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d;
                    return B(b, function (e) {
                        if (c.J !== c.J.top)
                            return e.return();
                        d = c.B.value;
                        if (_.v(So) && d)
                            return C(e, Cv(c, d), 0);
                        c.m.notify();
                        e.j = 0;
                    });
                });
            };
            var Cv = function (a, b) {
                    return A(a, function d() {
                        var e, f = this, g;
                        return B(d, function (h) {
                            e = I(b, Ds, 1);
                            if (!e.length)
                                return f.m.notify(), h.return();
                            g = e[0];
                            return (L = [
                                2,
                                3
                            ], _.r(L, 'includes')).call(L, lf(g, 3, 0)) ? (Dv(f, qf(g, 1)), h.return()) : C(h, Ev(f, b), 0);
                        });
                    });
                }, Ev = function (a, b) {
                    return A(a, function d() {
                        var e = this, f, g;
                        return B(d, function (h) {
                            if (1 == h.j)
                                return C(h, e.o, 2);
                            f = h.l;
                            (g = I(b, Ds, 1).some(function (k) {
                                return qf(k, 1) === f;
                            })) ? Dv(e, f) : (mc('pp_iris_failure', function (k) {
                                q(k, 'fnc', f);
                                Zb(k);
                            }, { wa: _.lb(Vo) }), e.m.notify());
                            ni(h);
                        });
                    });
                }, Dv = function (a, b) {
                    var c = at(a.J, b, function (d) {
                        if (!d) {
                            d = vl(c.j);
                            for (var e = _.G(document.getElementsByName('googlefcPresent')), f = e.next(); !f.done; f = e.next())
                                d.l(f.value);
                        }
                        a.m.notify();
                    });
                    c.start();
                };
            Bv.prototype.ea = function (a) {
                this.G(a);
            };
            Bv.prototype.G = function () {
                this.m.notify();
            };
            var Fv = function (a, b) {
                Y.call(this, 901);
                this.m = V(this, a);
                this.o = ug(b, dr).then(function (c) {
                    return (0, J.T)(c.detail.P.getAdUnitPath());
                });
            };
            _.N(Fv, Y);
            Fv.prototype.j = function () {
                var a;
                return A(this, function c() {
                    var d = this, e, f, g, h;
                    return B(c, function (k) {
                        if (1 == k.j)
                            return (e = d.m.value) ? C(k, d.o, 2) : k.return();
                        f = k.l;
                        g = Ib(f);
                        h = null === (a = I(e, As, 4)) || void 0 === a ? void 0 : a.some(function (l) {
                            return qf(l, 2) === g;
                        });
                        mc('pp_fsm', function (l) {
                            q(l, 'fsnc', g);
                            q(l, 'aup', f);
                            q(l, 'tld', qf(e, 1));
                            q(l, 'pdu', qf(e, 2));
                            q(l, 'idu', qf(e, 3));
                            q(l, 'pnc', qf(e, 5));
                            q(l, 'dm', h);
                            Zb(l);
                        }, { wa: _.lb(Uo) });
                        ni(k);
                    });
                });
            };
            var Gv = function () {
                Y.call(this, 891);
                this.m = this.l();
            };
            _.N(Gv, Y);
            Gv.prototype.j = function () {
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
                        if (_.v(Wo)) {
                            try {
                                'string' === typeof c && (d = JSON.parse(c || '[]'));
                            } catch (n) {
                            }
                            if (d && Array.isArray(d))
                                e.m.j(new Es(d));
                            else
                                throw Error('malformed response');
                        } else
                            f = new Es(), g = _.Xb(172), (null === g || void 0 === g ? 0 : g.hasAttribute('data-load-fc')) && (h = Gg(g.src, 'network-code')) && (k = new Cs(), l = Xd(k, 1, void 0, Ds), E(l, 1, h), E(l, 3, 3), Db(f, 2, k)), e.m.j(f);
                        ni(m);
                    });
                });
            };
            var Hv = function () {
                    this.j = null;
                }, Iv = function () {
                    var a = _.xh(Hv), b = _.xh(yh), c = new oe(), d = new Gv();
                    W(c, d);
                    d = new Av(d.m);
                    W(c, d);
                    var e = new Bv(window, d.o, b);
                    a.j = e.m.promise;
                    W(c, e);
                    W(c, new Fv(d.m, b));
                    qe(c);
                };
            var Jv = function () {
                    this.l = [];
                    this.A = [];
                    this.j = {};
                }, Kv = function (a, b) {
                    if (!_.r(a.l, 'includes').call(a.l, b))
                        switch (b) {
                        case 1:
                        case 2:
                        case 3:
                            var c;
                            if (c = _.v(dp) ? vt[b] : tt[b]) {
                                var d = b + '_hostpage_library';
                                if (c = Ol(document, c))
                                    c.id = d;
                            }
                            a.l.push(b);
                            b = new wt(b);
                            a.A.push(b);
                            a = Kg();
                            a.hostpageLibraryTokens || (a.hostpageLibraryTokens = {});
                            a.hostpageLibraryTokens[b.j] = b.l;
                        }
                }, Lv = function (a, b) {
                    var c, d;
                    a = null != (d = null == (c = a.j[b]) ? void 0 : _.r(c, 'values').call(c)) ? d : [];
                    return [].concat(_.ec(a));
                };
            var Mv = function (a) {
                    var b;
                    return (null == (b = (L = I(a, Cf, 14), _.r(L, 'find')).call(L, function (c) {
                        return 'page_url' === Df(c);
                    })) ? void 0 : H(b, 2)[0]) || null;
                }, Nv = function (a) {
                    var b;
                    return (null == (b = (L = I(a, Cf, 3), _.r(L, 'find')).call(L, function (c) {
                        return 'page_url' === Df(c);
                    })) ? void 0 : H(b, 2)[0]) || null;
                }, Ov = function (a, b) {
                    return Mv(b.U) ? !0 : a.some(function (c) {
                        return null != Nv(b.P[c.j]);
                    });
                }, Fg = function (a) {
                    var b = a.document;
                    return Ls(a) ? b.URL : b.referrer;
                }, Vc = function (a) {
                    try {
                        var b = cn(a, window.top);
                    } catch (c) {
                        b = new _.bd(-12245933, -12245933);
                    }
                    return b;
                }, Pv = Xc(function () {
                    return 'XMLHttpRequest' in window && 'withCredentials' in new XMLHttpRequest();
                }), Qv = function (a) {
                    return a ? (a = gn(a)) && a.floor() : null;
                }, Rv = function (a) {
                    return !!x(a, 6) || _.v(Sn);
                }, Sv = function (a, b) {
                    for (var c = {}, d = _.G(_.r(Object, 'keys').call(Object, b)), e = d.next(); !e.done; e = d.next()) {
                        e = e.value;
                        var f = b[e];
                        f = Oa(f.constructor, Ga(f.za()));
                        var g = dv.N(), h = g.j.get(e);
                        null == h ? h = ++Kb.N().l : g.j.delete(e);
                        E(f, 20, h);
                        c[e] = f;
                    }
                    a = Oa(a.constructor, Ga(a.za()));
                    b = new Date(Date.now());
                    b = b.getUTCFullYear() + Oj(b.getUTCMonth() + 1) + Oj(b.getUTCDate());
                    return {
                        U: a,
                        P: c,
                        Rb: b
                    };
                }, Uv = Xc(function () {
                    for (var a = '', b = _.G(Tv()), c = b.next(); !c.done; c = b.next())
                        c = c.value, 15 >= c && (a += '0'), a += c.toString(16);
                    return a;
                }), Tv = function () {
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
                }, Vv = function (a, b) {
                    return _.v($n) && (a = qt(a, b)) ? (a = a.split(':'), 3 !== a.length ? Uv() : (a = a[0].split('=')[1]) ? a.slice(0, 8) : Uv()) : Uv();
                }, Uc = function (a, b) {
                    return _.v(Lo) ? Wc(a, b) : Wv(a, b) || Wc(a, b);
                }, Xv = function (a, b, c, d) {
                    var e = Wc(a, c), f = 'none' === (null == e ? void 0 : e.style.display);
                    f && (e.style.display = 'block');
                    a = cd(c, a, b, d);
                    f && (e.style.display = 'none');
                    return a;
                }, Yv = function (a) {
                    return !!a && (yf(a, 1) || !!x(a, 6));
                }, Zv = function (a, b, c) {
                    return Yv(b) || 4 == ld(a) || 5 === ld(a) || c;
                }, $v = function (a) {
                    return 'google_ads_iframe_' + a.toString();
                }, aw = function (a) {
                    return $v(a) + '__container__';
                }, Wv = function (a, b) {
                    return (b = Wc(a, b)) && b.querySelector('[id="' + aw(a) + '"]') || null;
                }, bw, cw, dw = function (a, b) {
                    return null != (cw = null == (bw = Wv(a, b)) ? void 0 : bw.querySelector('iframe[id="' + $v(a) + '"]')) ? cw : null;
                }, Kf = function (a, b) {
                    var c = new hu();
                    a.forEach(function (d, e) {
                        c.set(a.length - e - 1, b(d));
                    });
                    return iu(c);
                }, gf = function (a, b, c, d, e) {
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
                }, ew = function (a) {
                    var b = window, c, d, e;
                    rc(831, function () {
                        return void (null == (c = b.performance) ? void 0 : null == (e = (d = c).mark) ? void 0 : e.call(d, a));
                    });
                }, Wc = function (a, b) {
                    b = void 0 === b ? document : b;
                    return Gh.N().l.get(a) || b.getElementById(a.j);
                }, fw = function (a) {
                    return _.Xb(260) ? _.xh(Hv).j.then(kc(895, function () {
                        return cu(a);
                    })) : D.Promise.resolve(cu(a));
                };
            var gw = function () {
                    var a = this;
                    this.m = function () {
                        return !1;
                    };
                    this.H = '';
                    this.j = this.l = null;
                    this.A = !1;
                    var b, c = Gh.N(), d = {};
                    this[jq] = (d[19] = function () {
                        return !!x(c.j, 10);
                    }, d[14] = Pv, d[13] = function (e) {
                        for (var f = [], g = 0; g < arguments.length; ++g)
                            f[g] = arguments[g];
                        return f.some(function (h) {
                            return 0 == a.H.lastIndexOf(h, 0);
                        });
                    }, d[12] = function () {
                        return !!x(c.j, 6);
                    }, d[11] = zt, d[15] = function (e) {
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
                    this[kq] = (d[8] = function (e) {
                        return null != (b = jt(a.l, e)) ? b : void 0;
                    }, d[10] = function (e) {
                        return a.j ? Ul(e + a.j) % 1000 : void 0;
                    }, d);
                    this[lq] = {};
                }, hw = function (a, b) {
                    b && !a.j && (a.j = _.r(b.split(':'), 'find').call(b.split(':'), function (c) {
                        return 0 === c.indexOf('ID=');
                    }) || null);
                };
            var iw = _.Mi(function () {
                    um('The googletag.pubads().definePassback function has been deprecated. The function may break in certain contexts, see https://developers.google.com/publisher-tag/guides/passback-tags#construct_passback_tags for how to correctly create a passback.');
                }), Dh = function () {
                    this.l = new D.Map();
                    this.j = new D.Set();
                    _.xh(gw).m = wd;
                };
            Dh.prototype.add = function (a, b, c) {
                var d = this, e = void 0 === c ? {} : c;
                c = void 0 === e.kb ? void 0 : e.kb;
                var f = void 0 === e.format ? 0 : e.format;
                e = void 0 === e.Lc ? !1 : e.Lc;
                var g = ud(f);
                if (g)
                    return mc('gpt_pla_ns', function (k) {
                        q(k, 'iu', a);
                        q(k, 'f', null != f ? f : '');
                        q(k, 'nsr', g);
                        Zb(k);
                    }), {};
                e && iw();
                e = this.l.get(a) || Number(e);
                b = jw(a, e, b, c || 'gpt_unit_' + a + '_' + e);
                if (!b)
                    return {};
                c = b.ka;
                var h = b.slotId;
                this.l.set(a, e + 1);
                this.j.add(h);
                _.Ig(h, function () {
                    return void d.j.delete(h);
                });
                Pq(a);
                return {
                    slotId: h,
                    Va: c
                };
            };
            var vd = function () {
                    var a = _.xh(Dh);
                    return [].concat(_.ec(a.j));
                }, kw = function (a) {
                    var b;
                    return Lv(_.xh(Jv), a).map(function (c) {
                        return null == (b = dw(c, document)) ? void 0 : b.contentWindow;
                    }).filter(function (c) {
                        return !!c;
                    });
                }, lw = function (a, b) {
                    a = _.G(b);
                    for (b = a.next(); !b.done; b = a.next())
                        sc(b.value);
                }, mw = function (a, b) {
                    a = _.G(a.j);
                    for (var c = a.next(); !c.done; c = a.next())
                        if (c = c.value, c.j === b)
                            return c;
                    return null;
                }, th = function (a, b, c, d) {
                    d = void 0 === d ? !1 : d;
                    return 'string' === typeof a && 0 < a.length && b && (void 0 === c || 'string' === typeof c) ? _.xh(Dh).add(a, b, {
                        kb: c,
                        Lc: d
                    }) : {};
                }, nw = function (a, b, c) {
                    var d = th(a, b, c).slotId;
                    if (!d)
                        return Bc().error(uh('googletag.defineSlot', [
                            a,
                            b,
                            c
                        ]), void 0, _.v(yn)), null;
                    var e;
                    return null != (e = null == d ? void 0 : d.l) ? e : null;
                }, jw = function (a, b, c, d) {
                    var e = mw(_.xh(Dh), d);
                    if (e)
                        return Bc().error(Gr(d, a, e.getAdUnitPath())), null;
                    var f = new Lu();
                    Mu(E(f, 1, a), d);
                    c = Wu(c);
                    e = c.Sa;
                    cl(f, 5, c.rd);
                    null !== e && Db(f, 16, e);
                    fv(f);
                    var g = new jr(a, b, d);
                    kr(g, Tc(g));
                    _.Ig(g, function () {
                        var h = Gh.N();
                        delete h.ka[g.j];
                        h.l.delete(g);
                        h = g.getAdUnitPath();
                        var k;
                        h = Ib(h);
                        var l = (null !== (k = fc.get(h)) && void 0 !== k ? k : 0) - 1;
                        0 >= l ? fc.delete(h) : fc.set(h, l);
                        Bc().info(hs(g.toString()), g);
                    });
                    Bc().info(ur(g.toString()), g);
                    Xq(g, br, function (h) {
                        h = h.detail.Rc;
                        Bc().info(vr(g.getAdUnitPath()), g);
                        Jb(Kb.N(), '7', 9, Sf(ku.N(), g), 0, h);
                    });
                    Xq(g, $q, function (h) {
                        var k = h.detail;
                        Bc().info(wr(g.getAdUnitPath()), g);
                        var l;
                        h = Kb.N();
                        var m = H(f, 20);
                        k = null != (l = H(k, 34)) ? l : '';
                        h.j && (_.F.google_timing_params = _.F.google_timing_params || {}, _.F.google_timing_params['qqid.' + m] = k);
                    });
                    Xq(g, ar, function () {
                        return void Bc().info(xr(g.getAdUnitPath()), g);
                    });
                    Xq(g, cr, function () {
                        return void Bc().info(yr(g.getAdUnitPath()), g);
                    });
                    return {
                        ka: f,
                        slotId: g
                    };
                };
            nw = kc(74, nw);
            var ow = function (a, b) {
                    this.slot = a.l;
                    this.serviceName = b;
                }, pw = function (a, b) {
                    ow.call(this, a, b);
                    this.isEmpty = !1;
                    this.slotContentChanged = !0;
                    this.sourceAgnosticLineItemId = this.sourceAgnosticCreativeId = this.lineItemId = this.labelIds = this.creativeTemplateId = this.creativeId = this.campaignId = this.advertiserId = this.size = null;
                    this.isBackfill = !1;
                    this.companyIds = this.yieldGroupIds = null;
                };
            _.N(pw, ow);
            var qw = function () {
                ow.apply(this, arguments);
            };
            _.N(qw, ow);
            var rw = function (a, b, c) {
                ow.call(this, a, b);
                this.inViewPercentage = c;
            };
            _.N(rw, ow);
            var sw = function () {
                ow.apply(this, arguments);
            };
            _.N(sw, ow);
            var tw = function () {
                ow.apply(this, arguments);
            };
            _.N(tw, ow);
            var uw = function (a, b, c, d) {
                ow.call(this, a, b);
                this.makeRewardedVisible = c;
                this.payload = d;
            };
            _.N(uw, ow);
            var vw = function (a, b, c) {
                ow.call(this, a, b);
                this.payload = c;
            };
            _.N(vw, ow);
            var ww = function () {
                ow.apply(this, arguments);
            };
            _.N(ww, ow);
            var xw = function () {
                ow.apply(this, arguments);
            };
            _.N(xw, ow);
            var yw = function () {
                ow.apply(this, arguments);
            };
            _.N(yw, ow);
            var zw = function () {
                ow.apply(this, arguments);
            };
            _.N(zw, ow);
            var Aw = function () {
                ow.apply(this, arguments);
            };
            _.N(Aw, ow);
            var Bw = new D.Set(), Cw = function () {
                    Vq.call(this);
                    Bw.add(this);
                    this.j = [];
                    this.l = !1;
                    this.B = 0;
                    this.D = new D.Map();
                    this.log = Bc();
                    this.log.info(Kr(this.getName()));
                    this.F = [];
                };
            _.N(Cw, Vq);
            var Dw = function (a) {
                    if (!a.l) {
                        a.l = !0;
                        Aq(6);
                        a.hc();
                        for (var b = _.G(a.F), c = b.next(); !c.done; c = b.next()) {
                            c = c.value;
                            try {
                                c();
                            } catch (d) {
                            }
                        }
                        a.F.length = 0;
                    }
                }, Ew = function (a, b) {
                    if (a.l)
                        try {
                            b();
                        } catch (c) {
                        }
                    else
                        a.F.push(b);
                };
            Cw.prototype.Fa = function (a, b) {
                this.j.push(a);
                var c = new tw(a, this.getName());
                this.dispatchEvent('slotAdded', 818, c);
                this.log.info(Nr(this.getName(), a.getAdUnitPath()), a);
                a = this.getName();
                Ef(b, 4, a);
            };
            Cw.prototype.destroySlots = function (a) {
                var b = this;
                return a.filter(function (c) {
                    return ea(b.j, c);
                });
            };
            Cw.prototype.addEventListener = function (a, b) {
                var c = this;
                if (this.B >= _.lb(Tn) && 0 < _.lb(Tn))
                    throw Error('Reached Limit for addEventListener');
                var d = function (f) {
                    f = f.detail;
                    try {
                        b(f);
                    } catch (g) {
                        c.log.error(fs(String(g), a)), window.console && console.error && console.error(g);
                    } finally {
                        Fw(c, a, f);
                    }
                };
                if (_.v(Un)) {
                    var e;
                    if (null == (e = this.D.get(a)) ? 0 : e.has(b))
                        return;
                    this.D.has(a) || this.D.set(a, new D.Map());
                    this.D.get(a).set(b, d);
                }
                Xq(this, a, d);
                this.B++;
            };
            Cw.prototype.removeEventListener = function (a, b) {
                var c;
                Wq(this, a, null == (c = this.D.get(a)) ? void 0 : c.get(b)) && (this.B--, this.D.get(a).delete(b));
            };
            var Fw = function (a, b, c) {
                    _.v(wn) && mc('gpt_svc_evt', function (d) {
                        Zb(d);
                        q(d, 'div', c.slot.getSlotElementId());
                        q(d, 'iu', c.slot.getAdUnitPath());
                        q(d, 'et', b);
                        var e;
                        q(d, 'sn', null != (e = _.Rf()) ? e : '');
                        if (e = _.r(a.j, 'find').call(a.j, function (p) {
                                return p.l === c.slot;
                            })) {
                            var f = Wc(e, document), g;
                            q(d, 'qqid', null != (g = null == f ? void 0 : f.getAttribute('data-google-query-id')) ? g : '');
                            q(d, 'rc', Sf(ku.N(), e));
                            try {
                                var h = gv(Gh.N(), e.j), k = Xv(e, h, document, !1);
                                if (k) {
                                    var l = Is(window.top.document, window.top), m = Js(!0, window).height;
                                    q(d, 'yo', Math.floor((k.y - l.y) / m));
                                }
                                if (f) {
                                    var n;
                                    q(d, 'amp', !(null == (n = f.querySelector('iframe').contentWindow) || !n.document.querySelector('html[amp4ads]')));
                                }
                            } catch (p) {
                            }
                        }
                        c instanceof rw && q(d, 'ivp', c.inViewPercentage);
                    }, { wa: Number('impressionViewable' === b && c instanceof qw || 'slotVisibilityChanged' === b && c instanceof rw) });
                }, Gw = function (a, b) {
                    for (var c = _.G(Bw), d = c.next(); !d.done; d = c.next())
                        d.value.destroySlots(a, b);
                };
            var Hw = function (a) {
                    var b = null, c = null, d = '';
                    if ('string' === typeof a)
                        d = a, b = mw(_.xh(Dh), d);
                    else if (_.ia(a) && 1 == a.nodeType)
                        c = a, d = c.id, b = mw(_.xh(Dh), d);
                    else {
                        var e;
                        b = null != (e = (L = vd(), _.r(L, 'find')).call(L, function (f) {
                            return f.l === a;
                        })) ? e : null;
                    }
                    return {
                        slotId: b,
                        nd: c,
                        od: d
                    };
                }, Iw = kc(95, function (a) {
                    var b = Bc(), c = Hw(a), d = c.slotId, e = c.nd;
                    c = c.od;
                    if (d) {
                        if (a = Gh.N().j, c = gv(Gh.N(), d.j))
                            if (a = Sv(a, Ye()), !x(c, 19))
                                if (e && Gh.N().l.set(d, e), Wc(d) || xv(ld(c)))
                                    for (E(c, 19, !0), b = _.G(H(c, 4)), e = b.next(); !e.done; e = b.next()) {
                                        c = Bu(e.value);
                                        a:
                                            if (e = Cw, c instanceof e)
                                                e = c;
                                            else {
                                                if (c instanceof Au && (c = yu.get(c), c instanceof e)) {
                                                    e = c;
                                                    break a;
                                                }
                                                e = null;
                                            }
                                        e.l && e.tc(a, d);
                                    }
                                else
                                    b.M(Er(String(c.getAdUnitPath()), String(H(c, 2))), d);
                    } else
                        c ? b.error(Fr(c)) : b.error(uh('googletag.display', [String(a)]));
                });
            var Fd = Vi('https://tpc.googlesyndication.com/sodar/%{basename}.js');
            var Ad = function (a) {
                return new D.Promise(function (b, c) {
                    var d = new XMLHttpRequest();
                    d.onreadystatechange = function () {
                        d.readyState === d.DONE && (200 <= d.status && 300 > d.status ? b(JSON.parse(d.responseText)) : c());
                    };
                    d.open('GET', a, !0);
                    d.send();
                });
            };
            var Qh = function (a) {
                P(this, a, null, null);
            };
            _.N(Qh, O);
            var Ph = function (a, b) {
                    return Fb(a, 2, b);
                }, Oh = function (a, b) {
                    return Ab(a, 3, b, '');
                }, Rh = function (a) {
                    P(this, a, null, null);
                };
            _.N(Rh, O);
            var Jw = function (a) {
                    this.j = a.j;
                    this.l = a.l;
                    this.A = a.A;
                    this.pb = a.pb;
                    this.J = a.J;
                    this.eb = a.eb;
                    this.Jb = a.Jb;
                    this.Sb = a.Sb;
                    this.Ib = a.Ib;
                }, Kw = function (a, b, c) {
                    this.j = a;
                    this.l = b;
                    this.A = c;
                    this.J = window;
                    this.eb = 'env';
                    this.Jb = 'n';
                    this.Sb = '0';
                    this.Ib = '1';
                }, Th = function (a, b) {
                    var c, d, e = Id(lf(b, 2, 0)), f = qf(b, 3);
                    a:
                        switch (lf(b, 4, 0)) {
                        case 1:
                            var g = 'pt';
                            break a;
                        case 2:
                            g = 'cr';
                            break a;
                        default:
                            g = '';
                        }
                    e = new Kw(e, f, g);
                    b = null !== (d = null === (c = M(b, Rh, 5)) || void 0 === c ? void 0 : qf(c, 1)) && void 0 !== d ? d : '';
                    e.pb = b;
                    e.J = a;
                    return new Jw(e);
                };
            var pf = function (a) {
                P(this, a, Lw, null);
            };
            _.N(pf, O);
            var sf = function (a, b) {
                    return E(a, 1, b);
                }, vf = function (a, b) {
                    E(a, 2, b);
                }, wf = function (a, b) {
                    E(a, 4, b);
                }, Nw = function (a, b) {
                    var c = H(a, 1);
                    null != c && Lk(b, 1, c);
                    c = H(a, 2);
                    null != c && Jk(b, 2, c);
                    c = I(a, xf, 3);
                    0 < c.length && Ok(b, 3, c, Mw);
                    c = H(a, 4);
                    null != c && Kk(b, 4, c);
                }, xf = function (a) {
                    P(this, a, Ow, null);
                };
            _.N(xf, O);
            var Bf = function (a, b) {
                    E(a, 1, b);
                }, zf = function (a, b) {
                    E(a, 2, b);
                }, Af = function (a, b) {
                    E(a, 3, b);
                }, Ff = function (a, b) {
                    E(a, 5, b);
                }, Mw = function (a, b) {
                    var c = H(a, 1);
                    null != c && Lk(b, 1, c);
                    c = H(a, 2);
                    null != c && Jk(b, 2, c);
                    c = H(a, 3);
                    null != c && Lk(b, 3, c);
                    c = H(a, 4);
                    if (0 < c.length && null != c)
                        for (var d = 0; d < c.length; d++)
                            Lk(b, 4, c[d]);
                    c = H(a, 5);
                    null != c && Kk(b, 5, c);
                }, Lw = [3], Ow = [4];
            var kf = function (a) {
                P(this, a, Pw, null);
            };
            _.N(kf, O);
            var nf = function (a, b) {
                    return E(a, 1, b);
                }, rf = function (a, b) {
                    return Xd(a, 2, b, pf);
                }, Qw = function (a, b) {
                    var c = H(a, 1);
                    null != c && Kk(b, 1, c);
                    c = I(a, pf, 2);
                    0 < c.length && Ok(b, 2, c, Nw);
                }, Pw = [2];
            var uf = function (a) {
                P(this, a, Rw, null);
            };
            _.N(uf, O);
            var mf = function (a, b) {
                    return Xd(a, 1, b, kf);
                }, Gf = function (a, b) {
                    a = I(a, kf, 1);
                    0 < a.length && Ok(b, 1, a, Qw);
                }, Rw = [1];
            var Sw = function (a) {
                P(this, a, null, null);
            };
            _.N(Sw, O);
            var Uw = function (a) {
                P(this, a, Tw, null);
            };
            _.N(Uw, O);
            var Tw = [13];
            var Ww = function (a) {
                P(this, a, Vw, null);
            };
            _.N(Ww, O);
            var Vw = [13];
            var Td = function (a) {
                P(this, a, Xw, null);
            };
            _.N(Td, O);
            var ae = function (a, b) {
                    var c = I(a, Yw, 1);
                    0 < c.length && Ok(b, 1, c, Zw);
                    c = I(a, Yd, 2);
                    0 < c.length && Ok(b, 2, c, $w);
                }, Yw = function (a) {
                    P(this, a, null, null);
                };
            _.N(Yw, O);
            var Zw = function (a, b) {
                    var c = H(a, 1);
                    null != c && null != c && Ik(b, 1, c);
                    c = M(a, ax, 2);
                    null != c && Nk(b, 2, c);
                    c = M(a, ax, 3);
                    null != c && Nk(b, 3, c);
                    c = H(a, 4);
                    null != c && Lk(b, 4, c);
                    c = H(a, 5);
                    null != c && Lk(b, 5, c);
                }, ax = function (a) {
                    P(this, a, null, null);
                };
            _.N(ax, O);
            var Mk = function (a, b) {
                    var c = H(a, 1);
                    null != c && null != c && Ik(b, 1, c);
                    c = H(a, 2);
                    null != c && null != c && Ik(b, 2, c);
                    c = H(a, 3);
                    null != c && null != c && Ik(b, 3, c);
                }, Yd = function (a) {
                    P(this, a, null, null);
                };
            _.N(Yd, O);
            var ee = function (a, b) {
                    return E(a, 8, b);
                }, $w = function (a, b) {
                    var c = H(a, 1);
                    null != c && Lk(b, 1, c);
                    c = H(a, 2);
                    null != c && Lk(b, 2, c);
                    c = H(a, 3);
                    null != c && Jk(b, 3, c);
                    c = H(a, 7);
                    null != c && Jk(b, 7, c);
                    c = H(a, 8);
                    if (null != c) {
                        var d = c;
                        if (null != d) {
                            Wj(b.j, 69);
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
                    null != c && null != c && Hk(b, 4, c);
                    c = H(a, 5);
                    null != c && null != c && Hk(b, 5, c);
                    c = H(a, 6);
                    null != c && null != c && Hk(b, 6, c);
                }, Xw = [
                    1,
                    2
                ];
            var bx = function (a) {
                P(this, a, null, null);
            };
            _.N(bx, O);
            var dx = function (a) {
                P(this, a, cx, null);
            };
            _.N(dx, O);
            var cx = [1];
            var ex = function (a) {
                P(this, a, null, null);
            };
            _.N(ex, O);
            var fx = function (a) {
                P(this, a, null, null);
            };
            _.N(fx, O);
            var gx = function (a) {
                P(this, a, null, null);
            };
            _.N(gx, O);
            var hx = function (a) {
                P(this, a, null, null);
            };
            _.N(hx, O);
            var jx = function (a) {
                P(this, a, ix, null);
            };
            _.N(jx, O);
            var ix = [
                1,
                2
            ];
            var kx = function (a) {
                P(this, a, null, null);
            };
            _.N(kx, O);
            var Md = function (a) {
                P(this, a, null, null);
            };
            _.N(Md, O);
            var lx = function (a) {
                P(this, a, null, null);
            };
            _.N(lx, O);
            var nx = function (a) {
                P(this, a, mx, null);
            };
            _.N(nx, O);
            var mx = [
                1,
                2
            ];
            var Nd = function (a) {
                P(this, a, null, null);
            };
            _.N(Nd, O);
            var px = function (a) {
                P(this, a, ox, null);
            };
            _.N(px, O);
            var ox = [
                1,
                2,
                3
            ];
            var rx = function (a) {
                P(this, a, qx, null);
            };
            _.N(rx, O);
            var qx = [1];
            var tx = function (a) {
                P(this, a, sx, null);
            };
            _.N(tx, O);
            var sx = [1];
            var ux = function (a) {
                P(this, a, null, null);
            };
            _.N(ux, O);
            var wx = function (a) {
                P(this, a, vx, null);
            };
            _.N(wx, O);
            var yx = function (a) {
                P(this, a, xx, null);
            };
            _.N(yx, O);
            var zx = function (a) {
                P(this, a, null, null);
            };
            _.N(zx, O);
            var vx = [1], xx = [
                    1,
                    2,
                    3,
                    4
                ];
            var Ax = function (a) {
                P(this, a, null, null);
            };
            _.N(Ax, O);
            var Bx = function (a) {
                P(this, a, null, null);
            };
            _.N(Bx, O);
            var Cx = function (a) {
                P(this, a, null, null);
            };
            _.N(Cx, O);
            var Ex = function (a) {
                P(this, a, Dx, null);
            };
            _.N(Ex, O);
            var Dx = [2];
            var Fx = function (a) {
                P(this, a, null, null);
            };
            _.N(Fx, O);
            var Gx = function (a) {
                P(this, a, null, null);
            };
            _.N(Gx, O);
            var Ix = function (a) {
                P(this, a, Hx, null);
            };
            _.N(Ix, O);
            var Hx = [
                3,
                7
            ];
            var Lx = function (a) {
                P(this, a, Jx, Kx);
            };
            _.N(Lx, O);
            var Mx = function (a) {
                P(this, a, null, null);
            };
            _.N(Mx, O);
            Mx.prototype.getHtml = function () {
                return H(this, 1);
            };
            var Jx = [
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
                ], Kx = [
                    [
                        4,
                        41
                    ],
                    [
                        39,
                        48
                    ]
                ];
            var Nx = navigator, Ox = function (a) {
                    var b = 1, c;
                    if (void 0 != a && '' != a)
                        for (b = 0, c = a.length - 1; 0 <= c; c--) {
                            var d = a.charCodeAt(c);
                            b = (b << 6 & 268435455) + d + (d << 14);
                            d = b & 266338304;
                            b = 0 != d ? b ^ d >> 21 : b;
                        }
                    return b;
                }, Px = function (a, b) {
                    if (!a || 'none' == a)
                        return 1;
                    a = String(a);
                    'auto' == a && (a = b, 'www.' == a.substring(0, 4) && (a = a.substring(4, a.length)));
                    return Ox(a.toLowerCase());
                }, Qx = /^\s*_ga=\s*1\.(\d+)[^.]*\.(.*?)\s*$/, Rx = /^[^=]+=\s*GA1\.(\d+)[^.]*\.(.*?)\s*$/, Sx = /^\s*_ga=\s*()(amp-[\w.-]{22,64})$/;
            var Ux = function (a) {
                P(this, a, Tx, null);
            };
            _.N(Ux, O);
            var Vx = function () {
                    var a = new Ux(), b = _.v(Jp);
                    return hl(a, 7, b);
                }, Tx = [15];
            var Wx = function (a) {
                P(this, a, null, null);
            };
            _.N(Wx, O);
            var Xx = function (a) {
                P(this, a, null, null);
            };
            _.N(Xx, O);
            bj(Ui(Vi('https://pagead2.googlesyndication.com/pagead/osd.js')));
            var Yx = function (a, b) {
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
                        !1 !== c && (d = Ql([0], a), null == d && ((d = Ql([2], b)) || (d = 3)));
                    if (!d)
                        return 0;
                    window.__google_ad_urls_id = d;
                }
                return window.__google_ad_urls_id;
            };
            var Zx = function () {
            };
            aa = Zx.prototype;
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
            var $x = new gq(1, hn()), ay = function () {
                    var a = hn();
                    a && 'undefined' != typeof a.google_measure_js_timing && !a.google_measure_js_timing && ($x.j = !1, $x.events != $x.A.google_js_reporting_queue && (fq() && _.Oi($x.events, qc), $x.events.length = 0));
                };
            (function () {
                var a = hn();
                a && a.document && ('complete' == a.document.readyState ? ay() : $x.j && _.yd(a, 'load', function () {
                    ay();
                }));
            }());
            var cy = function () {
                    var a = by, b = hn() || _.F;
                    return b.google_osd_loaded ? !1 : (Ol(b.document, a), b.google_osd_loaded = !0);
                }, dy = function (a, b, c) {
                    a && (c ? _.yd(a, 'load', b) : _.je(a, 'load', b));
                }, ey = function () {
                    var a = (hn() || _.F).google_osd_amcb;
                    return 'function' === typeof a ? a : null;
                }, fy = bj(Ui(Vi('https://www.googletagservices.com/activeview/js/current/osd.js')));
            var gy = function (a, b) {
                this.l = b && b.l ? b.l : 0;
                this.A = b ? b.A : '';
                this.j = b && b.j ? b.j : [];
                if (b)
                    for (a = 0; a < this.j.length; ++a)
                        this.j[a].m = !0;
            };
            aa = gy.prototype;
            aa.getNewBlocks = function (a, b) {
                for (var c = this.j.length, d = 0; d < c; d++) {
                    var e = this.j[d];
                    !e.A && e.j && (e.A = !0, a(e.j, e.D, e.F, e.l, void 0, e.m, e.G, e.B, e.o));
                }
                b && ((hn() || _.F).google_osd_amcb = a);
            };
            aa.setupOse = function (a) {
                if (this.getOseId())
                    return this.getOseId();
                var b = Yx(hy, iy);
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
                c = ey();
                e = _.xc() || -1;
                f = _.F.pageYOffset;
                0 <= f || (f = -1);
                c && d ? c(d, a, b, !1, void 0, !1, g, e, f) : (g = new jy(a, b, d, g, e, f), this.j.push(g), dy(d, g.H, !0), by || (_.Rm(_.F, '//pagead2.googlesyndication.com/pagead/gen_204?id=osd&r=om&rs=' + b + ('&req=' + a)), by = fy), cy() && jn());
            };
            aa.unloadAdBlock = function (a, b, c) {
                c = void 0 === c ? !1 : c;
                b = hn();
                void 0 !== b.Goog_Osd_UnloadAdBlock && b.Goog_Osd_UnloadAdBlock(a);
                c && (c = vm(this.j, function (d) {
                    return d.j == a;
                })) && dy(a, c.H, !1);
            };
            var ky = function () {
                    var a = hn(), b = a.__google_ad_urls;
                    if (!b)
                        return a.__google_ad_urls = new gy(a);
                    try {
                        if (0 <= b.getOseId())
                            return b;
                    } catch (c) {
                    }
                    try {
                        return a.__google_ad_urls = new gy(a, b);
                    } catch (c) {
                        return a.__google_ad_urls = new gy(a);
                    }
                }, by = null, iy = 0, hy = 0, jy = function (a, b, c, d, e, f) {
                    var g = this;
                    d = void 0 === d ? Ai : d;
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
            window.Goog_AdSense_getAdAdapterInstance = ky;
            var ly = ['Goog_AdSense_OsdAdapter'], my = _.F;
            ly[0] in my || 'undefined' == typeof my.execScript || my.execScript('var ' + ly[0]);
            for (var ny; ly.length && (ny = ly.shift());)
                ly.length || void 0 === gy ? my[ny] && my[ny] !== Object.prototype[ny] ? my = my[ny] : my = my[ny] = {} : my[ny] = gy;
            var oy = [
                    'auto',
                    'inherit',
                    '100%'
                ], py = oy.concat(['none']), qy = function (a, b, c, d, e, f) {
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
                                        for (var u = f, z = 0; z < Math.min(n.cssRules.length, u); z++) {
                                            var y = n.cssRules[z], K;
                                            if (K = 1 === y.type || !_.v(En))
                                                K = t, K = g.call(p, y.selectorText) && K(y);
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
                }, sy = function (a, b, c) {
                    var d = void 0 === d ? 10 : d;
                    var e = void 0 === e ? 10 : e;
                    if (!a)
                        return !0;
                    var f = !0;
                    Hf(a, function (g) {
                        return f = ry(g, b, !1, d, e);
                    }, void 0 === c ? 100 : c);
                    return f;
                }, ry = function (a, b, c, d, e) {
                    var f = a.style;
                    return f && f.height && !(0 <= _.da(oy, f.height)) || f && f.maxHeight && !(0 <= _.da(py, f.maxHeight)) || qy(a, b.document, function (g) {
                        var h = g.style.height;
                        g = g.style['max-height'];
                        return h && !(0 <= _.da(oy, h)) || g && !(0 <= _.da(py, g));
                    }, c, d, e) ? !1 : !0;
                };
            var ty = function (a) {
                var b, c, d;
                this.j = new D.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : M(a, ux, 2)) || void 0 === b ? void 0 : M(b, rx, 3)) || void 0 === c ? void 0 : H(c, 1)) && void 0 !== d ? d : []);
            };
            ty.prototype.getName = function () {
                return 'Consent';
            };
            ty.prototype.Db = function (a) {
                var b = this;
                return !yf(a, 7) || H(M(a, $g, 7), 1).every(function (c) {
                    return b.j.has(c);
                });
            };
            var uy = function (a) {
                var b;
                this.tb = 1;
                null == a || null == M(a, wx, 3) ? this.j = [] : (this.j = I((0, J.T)(M(a, wx, 3)), zx, 1), this.tb = null !== (b = al((0, J.T)(M(a, wx, 3)), 3)) && void 0 !== b ? b : 1);
            };
            uy.prototype.getName = function () {
                return 'Pricing Rules';
            };
            uy.prototype.Db = function (a) {
                if (0 === this.j.length)
                    return !0;
                for (var b = _.G(this.j), c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    var d = M(c, yx, 1), e = a;
                    if (null === d || (0 === H(d, 3).length || (L = H(d, 3), _.r(L, 'includes')).call(L, lf(e, 4, 0))) && (0 === H(d, 4).length || (L = H(d, 4), _.r(L, 'includes')).call(L, qf(e, 5)))) {
                        if (null == M(a, vy, 8) || null == Yg(M(a, vy, 8), 1))
                            return !1;
                        d = Yg(M(a, vy, 8), 1) * this.tb;
                        if (null != Yg(c, 2) && (null == d || d < Yg(c, 2)))
                            return !1;
                    }
                }
                return !0;
            };
            var wy = function (a) {
                var b, c, d;
                this.j = new D.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : M(a, ux, 2)) || void 0 === b ? void 0 : M(b, tx, 2)) || void 0 === c ? void 0 : H(c, 1)) && void 0 !== d ? d : []);
            };
            wy.prototype.getName = function () {
                return 'Url';
            };
            wy.prototype.Db = function (a) {
                var b = this;
                return 0 === this.j.size || !H(a, 6).some(function (c) {
                    return b.j.has(c);
                });
            };
            var xy = function (a) {
                var b, c, d, e, f;
                this.j = new D.Set(null !== (d = null === (c = null === (b = null === a || void 0 === a ? void 0 : M(a, ux, 2)) || void 0 === b ? void 0 : M(b, px, 1)) || void 0 === c ? void 0 : H(c, 1)) && void 0 !== d ? d : []);
                this.l = !(null === (f = null === (e = null === a || void 0 === a ? void 0 : M(a, ux, 2)) || void 0 === e ? void 0 : M(e, px, 1)) || void 0 === f || !$k(f, 4));
            };
            xy.prototype.getName = function () {
                return 'Category';
            };
            xy.prototype.Db = function (a) {
                var b;
                return Jd(this.j, null === (b = M(a, ah, 1)) || void 0 === b ? void 0 : H(b, 1)) || this.l && (a = M(a, ah, 1), !a || $k(a, 3)) ? !1 : !0;
            };
            var yy = function (a) {
                var b = [];
                b.push(new xy(a));
                b.push(new ty(a));
                b.push(new wy(a));
                b.push(new uy(a));
                this.j = b;
            };
            var zy = function (a) {
                var b, c, d, e, f, g;
                this.seller = 'google';
                this.decisionLogicUrl = 'dummy_url.com';
                this.interestGroupBuyers = [];
                this.additionalBids = [];
                this.auctionSignals = {};
                this.sellerSignals = {
                    Nc: yy.prototype,
                    tb: 1
                };
                this.perBuyerSignals = new D.Map();
                this.j = new D.Map();
                this.sellerSignals.Nc = new yy(null !== (c = null === (b = M(a, Cx, 6)) || void 0 === b ? void 0 : M(b, Ax, 1)) && void 0 !== c ? c : new Ax());
                this.sellerSignals.tb = null !== (g = null === (f = null === (e = null === (d = M(a, Cx, 6)) || void 0 === d ? void 0 : M(d, Ax, 1)) || void 0 === e ? void 0 : M(e, wx, 3)) || void 0 === f ? void 0 : al(f, 3)) && void 0 !== g ? g : 1;
                var h = bl(a, 4, Md);
                h = null !== h && void 0 !== h ? h : new Rk([]);
                h = _.G(_.r(h, 'entries').call(h));
                for (var k = h.next(); !k.done; k = h.next()) {
                    var l = _.G(k.value);
                    k = l.next().value;
                    l = l.next().value;
                    this.perBuyerSignals.set(k, l);
                }
                a = bl(a, 5, Nd);
                a = null !== a && void 0 !== a ? a : new Rk([]);
                a = _.G(_.r(a, 'entries').call(a));
                for (h = a.next(); !h.done; h = a.next())
                    k = _.G(h.value), h = k.next().value, k = k.next().value, this.j.set(h, k);
            };
            var vy = function (a) {
                P(this, a, null, null);
            };
            _.N(vy, O);
            var ah = function (a) {
                P(this, a, Ay, null);
            };
            _.N(ah, O);
            var Ay = [
                1,
                2
            ];
            var $g = function (a) {
                P(this, a, By, null);
            };
            _.N($g, O);
            var By = [1];
            var Zg = function (a) {
                P(this, a, Cy, null);
            };
            _.N(Zg, O);
            var Cy = [
                2,
                3,
                6
            ];
            var Dy = function (a) {
                var b;
                return {
                    ad: null !== (b = M(a, Zg, 2)) && void 0 !== b ? b : new Zg(),
                    bid: 0.1
                };
            };
            var Ey = function (a, b, c, d) {
                var e, f, g, h, k, l, m, n, p, t, u, z;
                b = null === d || void 0 === d ? void 0 : M(d, nx, 1);
                c = null === (e = null === c || void 0 === c ? void 0 : M(c, kx, 1)) || void 0 === e ? void 0 : M(e, jx, 1);
                if (!b || !c)
                    return {
                        ad: null !== (f = M(a, Zg, 2)) && void 0 !== f ? f : new Zg(),
                        bid: 0
                    };
                d = 1 / (1 + Math.exp(-Kd(null !== (g = Zk(b, 1)) && void 0 !== g ? g : 1, null !== (h = Zk(c, 1)) && void 0 !== h ? h : 1)));
                var y = Math.exp(Kd(null !== (k = Zk(b, 2)) && void 0 !== k ? k : 1, null !== (l = Zk(c, 2)) && void 0 !== l ? l : 1));
                b = (null !== (m = al(b, 3)) && void 0 !== m ? m : 1) * d * Math.pow(y, null !== (n = al(b, 4)) && void 0 !== n ? n : 1);
                b = (null !== (p = al(c, 3)) && void 0 !== p ? p : 1) * b * (1 - 1 / (1 + Math.exp(-(null !== (t = al(c, 4)) && void 0 !== t ? t : 1) * Math.log(b) - (null !== (u = al(c, 5)) && void 0 !== u ? u : 0))));
                return {
                    ad: null !== (z = M(a, Zg, 2)) && void 0 !== z ? z : new Zg(),
                    bid: b
                };
            };
            var bh = function (a) {
                P(this, a, null, null);
            };
            _.N(bh, O);
            var Ld = function (a, b, c) {
                if (null == a)
                    return 0;
                var d = new vy();
                d = Ab(d, 1, b, 0);
                Db(a, 8, d);
                a: {
                    d = _.G(c.sellerSignals.Nc.j);
                    for (var e = d.next(); !e.done; e = d.next())
                        if (!e.value.Db(a)) {
                            a = !1;
                            break a;
                        }
                    a = !0;
                }
                return a ? b * c.sellerSignals.tb : 0;
            };
            var Fy = function (a) {
                    a = void 0 === a ? window : a;
                    return a._gmptnl ? 'afma-gpt-sdk-a' : a.webkit && a.webkit.messageHandlers && a.webkit.messageHandlers._gmptnl ? 'afma-gpt-sdk-i' : null;
                }, Gy = function (a, b) {
                    b = void 0 === b ? window : b;
                    var c = Fy(b);
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
            var Hy = function (a, b) {
                Nt.call(this, a);
                this.id = a;
                this.I = b;
            };
            _.N(Hy, Nt);
            Hy.prototype.V = function (a) {
                this.I(this.id, a);
            };
            var Iy = function () {
                    this.errorMessage = this.info = this.error = this.Tb = null;
                }, Jy = function (a, b) {
                    a.Tb = b;
                    return a;
                };
            Iy.prototype.getError = function () {
                return this.error;
            };
            var Ky = function (a, b) {
                    a.errorMessage = b;
                    return a;
                }, Ly = function () {
                    this.cache = {};
                }, Vd = function () {
                    My || (Ny = _.lb(zp), Oy = _.lb(yp), My = new Ly());
                    return My;
                }, Wd = function (a) {
                    var b = H(a, 3);
                    if (!b)
                        return 3;
                    if (void 0 === H(a, 2))
                        return 4;
                    a = Date.now();
                    return a > b + 3600000 * Oy ? 2 : a > b + 3600000 * Ny ? 1 : 0;
                };
            Ly.prototype.get = function (a, b) {
                var c = new Iy();
                if (this.cache[a])
                    return Jy(c, this.cache[a]);
                var d = '';
                try {
                    d = b.getItem('_GESPSK-' + a);
                } catch (e) {
                    return c.error = 6, Ky(c, e.message);
                }
                if (!d)
                    return new Iy();
                b = null;
                try {
                    b = Lh(Yd, d);
                } catch (e) {
                    return a = new Iy(), a.error = 5, Ky(a, e.message);
                }
                b && (this.cache[a] = b);
                return Jy(new Iy(), b);
            };
            Ly.prototype.set = function (a, b) {
                var c = (0, J.T)(H(a, 1)), d = '_GESPSK-' + c, e = Jy(new Iy(), a);
                try {
                    b.setItem(d, gl(a));
                } catch (f) {
                    e.info = 7, Ky(e, f.message);
                }
                this.cache[c] = a;
                return e;
            };
            var My = null, Ny = 24, Oy = 72;
            var le = function (a, b, c, d) {
                Hy.call(this, 655, d);
                this.xa = a;
                this.F = b;
                this.storage = c;
                this.o = this.l();
                this.B = this.l();
                this.m = _.lb(de);
            };
            _.N(le, Hy);
            le.prototype.j = function () {
                var a, b = Vd().get(this.xa, this.storage);
                if (b.getError())
                    Sd(b.getError(), this.xa, b.errorMessage), Ht(this.o), Ht(this.B);
                else {
                    var c = Date.now();
                    if (b = b.Tb)
                        if (this.m && (yf(b, 8) || (Sd(33, this.xa), ee(b, this.m)), yf(b, 7) || (Sd(34, this.xa), E(b, 7, Math.round(Date.now() / 1000 / 60)))), yf(b, 3) || Sd(35, this.xa), this.m) {
                            var d = (0, J.T)(fe(b, 8)), e = null !== (a = H(b, 7)) && void 0 !== a ? a : c;
                            d < this.m && ee(b, Math.min(d + Number((this.m * (c / 1000 / 60 - e) / 60).toFixed(3)), this.m));
                            1 > (0, J.T)(fe(b, 8)) ? (c = {}, Sd(22, this.xa, null, (c.t = String(e), c.cr = String(d), c.cs = String(Wd(b)), c)), Ht(this.o), Ht(this.B)) : (this.o.j(this.F), this.B.j(b));
                        } else
                            this.o.j(this.F), this.B.j(b);
                    else
                        this.o.j(this.F), b = this.B, d = b.j, e = new Yd(), e = E(e, 1, this.xa), e = ee(e, this.m), c = E(e, 3, c), d.call(b, c);
                }
            };
            var ge = function (a, b, c, d) {
                    'string' !== typeof c ? Sd(21, a) : c || Sd(20, a);
                    E(b, 2, c);
                    b = Vd().set(b, d);
                    b.errorMessage ? Sd((0, J.T)(b.info), a, b.errorMessage) : Sd(27, a);
                }, he = function (a) {
                    return 'string' === typeof a ? a : a instanceof Error ? a.message : null;
                };
            var me = function (a, b, c, d) {
                Hy.call(this, 658, d);
                this.storage = c;
                this.m = this.l();
                this.o = this.l();
                this.B = this.l();
                this.F = V(this, a);
                this.K = V(this, b);
            };
            _.N(me, Hy);
            me.prototype.j = function () {
                var a = this;
                if (this.F.value) {
                    var b = function (g) {
                            a.m.j({
                                id: (0, J.T)(H(g, 1)),
                                kd: H(g, 2)
                            });
                        }, c = this.F.value, d = (0, J.T)(this.K.value), e = (0, J.T)(H(d, 1)), f = Wd(d);
                    switch (f) {
                    case 0:
                        Sd(24, e);
                        break;
                    case 1:
                        Sd(25, e);
                        break;
                    case 2:
                        Sd(26, e);
                        break;
                    case 3:
                        Sd(9, e);
                        break;
                    case 4:
                        Sd(23, e);
                    }
                    switch (f) {
                    case 0:
                        b(d);
                        Py(this);
                        break;
                    case 1:
                        b(d);
                        this.o.j(c);
                        this.B.j(d);
                        break;
                    case 3:
                    case 2:
                    case 4:
                        E(d, 2, null), ie(e, d, c, this.storage).then(b), Py(this);
                    }
                } else
                    Ht(this.m), Py(this);
            };
            var Py = function (a) {
                Ht(a.o);
                Ht(a.B);
            };
            var ne = function (a, b, c, d) {
                Hy.call(this, 662, d);
                this.storage = c;
                this.m = V(this, a);
                this.o = V(this, b);
            };
            _.N(ne, Hy);
            ne.prototype.j = function () {
                var a = this;
                this.o.value && this.m.value && ke().then(function () {
                    var b = (0, J.T)(a.o.value), c = (0, J.T)(H(b, 1));
                    ie(c, b, (0, J.T)(a.m.value), a.storage);
                });
            };
            var ve = function (a, b) {
                this.storage = b;
                this.m = [];
                this.A = [];
                this.j = [];
                a = _.G(a);
                for (b = a.next(); !b.done; b = a.next())
                    this.push(b.value);
            };
            ve.prototype.push = function (a) {
                var b = a.id;
                a = a.collectorFunction;
                if ('string' !== typeof b)
                    Sd(37, 'invalid-id');
                else if ('function' !== typeof a)
                    Sd(14, b);
                else {
                    var c = {};
                    Sd(17, b, null, (c.api = '1', c));
                    b = re(b, a, this.storage, this.l);
                    this.m.push(b);
                    a = _.G(this.A);
                    for (c = a.next(); !c.done; c = a.next())
                        b.then(c.value);
                }
            };
            ve.prototype.l = function (a, b) {
                for (var c = _.G(this.j), d = c.next(); !d.done; d = c.next())
                    d = d.value, d(a, b);
            };
            var Qy = 0, Ry = bj(Ui(Vi('https://pagead2.googlesyndication.com/pagead/expansion_embed.js')));
            var Sy = Xc(function () {
                    return !(kk || lk || jk) && (xk || fk || ek);
                }), Ty = function (a, b, c, d, e) {
                    d = void 0 === d ? '' : d;
                    var f = a.createElement('link');
                    try {
                        Kj(f, b, c);
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
            var Uy = /^\.google\.(com?\.)?[a-z]{2,3}$/, Vy = /\.(cn|com\.bi|do|sl|ba|by|ma|am)$/, Wy = function (a) {
                    return Uy.test(a) && !Vy.test(a);
                }, Xy = _.F, Zy = function (a) {
                    a = 'https://adservice' + (a + '/adsid/integrator.js');
                    var b = ['domain=' + encodeURIComponent(_.F.location.hostname)];
                    Yy[3] >= Mf() && b.push('adsid=' + encodeURIComponent(Yy[1]));
                    return a + '?' + b.join('&');
                }, Yy, $y, az = function () {
                    Xy = _.F;
                    Yy = Xy.googleToken = Xy.googleToken || {};
                    var a = Mf();
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
                    cc: function () {
                        return 0 < $y[8];
                    },
                    Nd: function () {
                        $y[8]++;
                    },
                    Od: function () {
                        0 < $y[8] && $y[8]--;
                    },
                    Pd: function () {
                        $y[8] = 0;
                    },
                    cf: function () {
                        return !1;
                    },
                    Fc: function () {
                        return $y[5];
                    },
                    Ac: function (a) {
                        try {
                            a();
                        } catch (b) {
                            _.F.setTimeout(function () {
                                throw b;
                            }, 0);
                        }
                    },
                    Oc: function () {
                        if (!fz.cc()) {
                            var a = _.F.document, b = function (e) {
                                    e = Zy(e);
                                    a: {
                                        try {
                                            var f = Jj('script[nonce]', void 0);
                                            break a;
                                        } catch (g) {
                                        }
                                        f = void 0;
                                    }
                                    Ty(a, e, 'preload', 'script', f);
                                    f = a.createElement('script');
                                    f.type = 'text/javascript';
                                    f.onerror = function () {
                                        return _.F.processGoogleToken({}, 2);
                                    };
                                    e = bj(e);
                                    xd(f, e);
                                    try {
                                        (a.head || a.body || a.documentElement).appendChild(f), fz.Nd();
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
                    a && (0 != b || Yy[3] >= Mf() ? fz.Ac(a) : (fz.Fc().push(a), fz.Oc()));
                    Yy[3] >= Mf() && Yy[2] >= Mf() || fz.Oc();
                }, hz = function (a) {
                    _.F.processGoogleToken = _.F.processGoogleToken || function (b, c) {
                        var d = b;
                        d = void 0 === d ? {} : d;
                        c = void 0 === c ? 0 : c;
                        b = d.newToken || '';
                        var e = 'NT' == b, f = parseInt(d.freshLifetimeSecs || '', 10), g = parseInt(d.validLifetimeSecs || '', 10), h = d['1p_jar'] || '';
                        d = d.pucrd || '';
                        az();
                        1 == c ? fz.Pd() : fz.Od();
                        var k = Xy.googleToken = Xy.googleToken || {}, l = 0 == c && b && 'string' === typeof b && !e && 'number' === typeof f && 0 < f && 'number' === typeof g && 0 < g && 'string' === typeof h;
                        e = e && !fz.cc() && (!(Yy[3] >= Mf()) || 'NT' == Yy[1]);
                        var m = !(Yy[3] >= Mf()) && 0 != c;
                        if (l || e || m)
                            e = Mf(), f = e + 1000 * f, g = e + 1000 * g, 0.00001 > Math.random() && _.Rm(_.F, 'https://pagead2.googlesyndication.com/pagead/gen_204?id=imerr&err=' + c), k[5] = c, k[1] = b, k[2] = f, k[3] = g, k[4] = h, k[6] = d, az();
                        if (l || !fz.cc()) {
                            c = fz.Fc();
                            for (b = 0; b < c.length; b++)
                                fz.Ac(c[b]);
                            c.length = 0;
                        }
                    };
                    gz(a);
                };
            var Tg = function (a, b) {
                    b = void 0 === b ? {} : b;
                    this.root = b.root ? b.root : null;
                    this.G = b.rootMargin ? Ae(b.rootMargin) : [
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
                    this.rootMargin = _.ze(this.G, function (c) {
                        return '' + c.value + c.type;
                    }).join(' ');
                    this.B = Ce(b.threshold);
                    this.o = a;
                    this.j = [];
                    this.m = [];
                    this.H = !1;
                    this.l = null;
                    this.A = Ni(this.D, 100, this);
                }, iz = function (a) {
                    if (a.root)
                        var b = De(a.root);
                    else {
                        var c = _.zl(window);
                        b = {
                            top: 0,
                            right: c.width,
                            bottom: c.height,
                            left: 0,
                            width: c.width,
                            height: c.height
                        };
                    }
                    a = _.ze(a.G, function (d, e) {
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
                    return d == e ? !1 : _.Qi(a.B, function (f) {
                        return f < d != f < e;
                    });
                };
            Tg.prototype.D = function () {
                var a = this, b = iz(this);
                _.Oi(this.j, function (c) {
                    var d = c.target, e = De(d), f = e.width * e.height;
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
                    jz(a, c.pa, d) && a.m.push(d);
                    c.pa = d;
                });
                this.m.length && this.o(kz(this), this);
            };
            Tg.prototype.observe = function (a) {
                _.Qi(this.j, function (b) {
                    return b.target == a;
                }) || (this.j.push({
                    target: a,
                    pa: null
                }), this.D(), this.H || (this.H = !0, _.yd(_.F, 'scroll', this.A), _.yd(_.F, 'resize', this.A), _.F.MutationObserver && !this.l && (this.l = new MutationObserver(this.A), this.l.observe(_.F.document, {
                    attributes: !0,
                    childList: !0,
                    characterData: !0,
                    subtree: !0
                }))));
            };
            Tg.prototype.unobserve = function (a) {
                this.j = _.Be(this.j, function (b) {
                    return b.target != a;
                });
                0 == this.j.length && this.disconnect();
            };
            Tg.prototype.disconnect = function () {
                this.H = !1;
                this.j.length = 0;
                _.je(_.F, 'scroll', this.A);
                _.je(_.F, 'resize', this.A);
                this.l && (this.l.disconnect(), this.l = null);
            };
            var kz = function (a) {
                var b = [].concat(_.ec(a.m));
                a.m.length = 0;
                return b;
            };
            _.lz = function () {
                var a = _.Xb(38);
                this.j = void 0 === a ? 0.01 : a;
                this.l = this.A;
            };
            _.lz.prototype.A = function (a, b, c, d, e) {
                c = void 0 === c ? this.j : c;
                if (Math.random() > c)
                    return !1;
                b.error && b.meta && b.id || (b = new ql(b, {
                    context: a,
                    id: void 0 === e ? 'gpt_exception' : e
                }));
                d && (b.meta = {}, d && d(b.meta));
                _.F.google_js_errors = _.F.google_js_errors || [];
                _.F.google_js_errors.push(b);
                _.F.error_rep_loaded || (Ol(_.F.document, bj(_.F.location.protocol + '//pagead2.googlesyndication.com/pagead/js/err_rep.js')), _.F.error_rep_loaded = !0);
                return !1;
            };
            var mz = function (a, b, c, d, e, f) {
                _.Sq.call(this);
                this.D = a;
                this.status = 1;
                this.m = b;
                this.l = c;
                this.K = d;
                this.ob = !!e;
                this.G = Math.random();
                this.o = {};
                this.j = null;
                this.F = (0, _.Gi)(this.V, this);
                this.B = f;
            };
            _.N(mz, _.Sq);
            mz.prototype.V = function (a) {
                if (!('*' !== this.l && a.origin !== this.l || !this.ob && a.source != this.m)) {
                    var b = null;
                    try {
                        b = JSON.parse(a.data);
                    } catch (c) {
                    }
                    if (_.ia(b) && (a = b.i, b.c === this.D && a != this.G)) {
                        if (2 !== this.status)
                            try {
                                this.status = 2, nz(this), this.j && (this.j(), this.j = null);
                            } catch (c) {
                            }
                        a = b.s;
                        b = b.p;
                        if ('string' === typeof a && ('string' === typeof b || _.ia(b)) && this.o.hasOwnProperty(a))
                            this.o[a](b);
                    }
                }
            };
            var nz = function (a) {
                var b = {};
                b.c = a.D;
                b.i = a.G;
                a.B && (b.e = a.B);
                a.m.postMessage(JSON.stringify(b), a.l);
            };
            mz.prototype.I = function () {
                if (1 === this.status) {
                    try {
                        this.m.postMessage && nz(this);
                    } catch (a) {
                    }
                    window.setTimeout((0, _.Gi)(this.I, this), 50);
                }
            };
            mz.prototype.connect = function (a) {
                a && (this.j = a);
                _.yd(window, 'message', this.F);
                this.K && this.I();
            };
            var oz = function (a, b, c) {
                    a.o[b] = c;
                }, pz = function (a, b, c) {
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
            mz.prototype.H = function () {
                this.status = 3;
                _.je(window, 'message', this.F);
                _.Sq.prototype.H.call(this);
            };
            var qz = function (a) {
                P(this, a, null, null);
            };
            _.N(qz, O);
            var rz = function (a) {
                P(this, a, null, null);
            };
            _.N(rz, O);
            var sz = function (a) {
                P(this, a, null, null);
            };
            _.N(sz, O);
            var vz, uz, xz;
            _.tz = function (a) {
                this.j = _.qd(a).floatingAdsStacking;
            };
            vz = function (a) {
                var b = a.j.nextRestrictionId++;
                a.j.maxZIndexRestrictions[b] = 2147483646;
                uz(a);
                return b;
            };
            _.wz = function (a) {
                a = _.Tl(a.j.maxZIndexRestrictions);
                return a.length ? Math.min.apply(null, a) : null;
            };
            uz = function (a) {
                var b = _.wz(a);
                _.Oi(a.j.maxZIndexListeners, function (c) {
                    return c(b);
                });
            };
            xz = function (a) {
                this.l = a;
                this.j = null;
            };
            var yz;
            _.zz = function (a, b) {
                if (!a.body)
                    return null;
                var c = new yz();
                c.apply(a, b);
                return function () {
                    _.Vm(a.body, {
                        filter: c.j,
                        webkitFilter: c.j,
                        overflow: c.A,
                        position: c.m,
                        top: c.H
                    });
                    b.scrollTo(0, c.l);
                };
            };
            yz = function () {
                this.j = this.H = this.m = this.A = null;
                this.l = 0;
            };
            yz.prototype.apply = function (a, b) {
                this.A = a.body.style.overflow;
                this.m = a.body.style.position;
                this.H = a.body.style.top;
                this.j = a.body.style.filter ? a.body.style.filter : a.body.style.webkitFilter;
                this.l = _.Ut(b);
                _.Vm(a.body, 'top', -this.l + 'px');
            };
            var Az = function (a, b) {
                b = void 0 === b ? 500 : b;
                _.Sq.call(this);
                this.l = a;
                this.vb = b;
                this.j = null;
                this.D = {};
                this.G = 0;
                this.m = null;
            };
            _.N(Az, _.Sq);
            Az.prototype.H = function () {
                this.D = {};
                this.m && (_.je(this.l, 'message', this.m), delete this.m);
                delete this.D;
                delete this.l;
                delete this.j;
                _.Sq.prototype.H.call(this);
            };
            var Cz = function (a) {
                    var b;
                    return 'function' === typeof (null === (b = a.l) || void 0 === b ? void 0 : b.__uspapi) || null != Bz(a);
                }, Ez = function (a, b) {
                    var c = {};
                    if (Cz(a)) {
                        var d = _.Mi(function () {
                            return b(c);
                        });
                        Dz(a, function (e, f) {
                            f && (c = e);
                            d();
                        });
                        setTimeout(d, a.vb);
                    } else
                        b(c);
                }, Dz = function (a, b) {
                    var c, d;
                    if ('function' === typeof (null === (c = a.l) || void 0 === c ? void 0 : c.__uspapi))
                        (null === (d = a.l) || void 0 === d ? void 0 : d.__uspapi)('getUSPData', 1, b);
                    else if (Bz(a)) {
                        Fz(a);
                        var e = ++a.G;
                        a.D[e] = b;
                        a.j && (b = {}, a.j.postMessage((b.__uspapiCall = {
                            command: 'getUSPData',
                            version: 1,
                            callId: e
                        }, b), '*'));
                    }
                }, Bz = function (a) {
                    if (a.j)
                        return a.j;
                    a.j = gm(a.l, '__uspapiLocator');
                    return a.j;
                }, Fz = function (a) {
                    a.m || (a.m = function (b) {
                        var c;
                        try {
                            var d = {};
                            'string' === typeof b.data ? d = JSON.parse(b.data) : d = b.data;
                            var e = d.__uspapiReturn;
                            null === (c = a.D) || void 0 === c ? void 0 : c[e.callId](e.returnValue, e.success);
                        } catch (f) {
                        }
                    }, _.yd(a.l, 'message', a.m));
                };
            var Gz = function (a, b) {
                if (!a)
                    return a;
                var c = a.toLowerCase();
                return -1 < c.indexOf('<!doctype') || -1 < c.indexOf('<html') ? a : '<!doctype html><html><head>' + (void 0 === b ? '' : b) + '</head><body>' + a + '</body></html>';
            };
            var Hz = function (a, b, c, d, e, f) {
                    this.A = Im(a);
                    this.l = Im(b);
                    this.m = c;
                    this.j = Im(d);
                    this.H = e;
                    this.D = f;
                }, Iz = function (a) {
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
                }, Jz = function (a, b) {
                    var c = window, d = c.screenX || c.screenLeft || 0, e = c.screenY || c.screenTop || 0;
                    c = new _.Hm(e, d + (c.outerWidth || document.documentElement.clientWidth || 0), e + (c.outerHeight || document.documentElement.clientHeight || 0), d);
                    var f = an(a);
                    d = _.en(_.fn, a);
                    var g = new Jm(f.x, f.y, d.width, d.height);
                    d = Km(g);
                    e = String(Ym(a, 'zIndex'));
                    var h = new _.Hm(0, Infinity, Infinity, 0);
                    for (var k = vl(a), l = k.j.body, m = k.j.documentElement, n = Al(k.j); a = $m(a);)
                        if (!(_.ck && 0 == a.clientWidth || gk && 0 == a.clientHeight && a == l) && a != l && a != m && 'visible' != Ym(a, 'overflow')) {
                            var p = an(a), t = new _.bd(a.clientLeft, a.clientTop);
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
                    k = _.zl(k.parentWindow || k.defaultView || window);
                    h.right = Math.min(h.right, a + k.width);
                    h.bottom = Math.min(h.bottom, n + k.height);
                    h = (h = 0 <= h.top && 0 <= h.left && h.bottom > h.top && h.right > h.left ? h : null) ? new Jm(h.left, h.top, h.right - h.left, h.bottom - h.top) : null;
                    b ? (k = b.boundingClientRect, b = new Jm(f.x - k.left, f.y - k.top, b.rootBounds.width, b.rootBounds.height)) : b = h;
                    k = h ? Lm(g, h) : null;
                    h = f = 0;
                    k && !new _.sl(k.width, k.height).isEmpty() && (f = k.width / g.width, h = k.height / g.height);
                    k = new _.Hm(0, 0, 0, 0);
                    if (a = b)
                        (g = Lm(g, b)) ? (n = Km(b), l = Km(g), a = l.right != n.left && n.right != l.left, n = l.bottom != n.top && n.bottom != l.top, a = (0 != g.width || a) && (0 != g.height || n)) : a = !1;
                    a && (k = new _.Hm(Math.max(d.top - b.top, 0), Math.max(b.left + b.width - d.right, 0), Math.max(b.top + b.height - d.bottom, 0), Math.max(d.left - b.left, 0)));
                    return new Hz(c, d, e, k, f, h);
                };
            var Kz = function (a) {
                this.H = a;
                this.D = null;
                this.fa = this.status = 0;
                this.l = null;
                this.ja = 'sfchannel' + a;
            };
            var kt = nt;
            var Lz = function (a) {
                this.j = a;
            };
            var Mz = function (a, b) {
                this.Fb = a;
                this.Gb = b;
                this.l = this.j = !1;
            };
            var Nz = function (a, b, c, d, e, f, g, h, k, l) {
                k = void 0 === k ? [] : k;
                this.l = a;
                this.A = b;
                this.m = c;
                this.permissions = d;
                this.metadata = e;
                this.H = f;
                this.ob = g;
                this.hostpageLibraryTokens = k;
                this.j = '';
                this.Ra = h;
                this.bb = void 0 === l ? '' : l;
            };
            var Oz = function (a, b) {
                this.l = a;
                this.m = b;
            };
            Oz.prototype.j = function (a) {
                this.m && a && (a.sentinel = this.m);
                return JSON.stringify(a);
            };
            var Pz = function (a, b, c) {
                Oz.call(this, a, void 0 === c ? '' : c);
                this.version = b;
            };
            _.N(Pz, Oz);
            Pz.prototype.j = function () {
                return Oz.prototype.j.call(this, {
                    uid: this.l,
                    version: this.version
                });
            };
            var Qz = function (a, b, c, d) {
                Oz.call(this, a, void 0 === d ? '' : d);
                this.H = b;
                this.A = c;
            };
            _.N(Qz, Oz);
            Qz.prototype.j = function () {
                return Oz.prototype.j.call(this, {
                    uid: this.l,
                    initialWidth: this.H,
                    initialHeight: this.A
                });
            };
            var Rz = function (a, b, c) {
                Oz.call(this, a, void 0 === c ? '' : c);
                this.description = b;
            };
            _.N(Rz, Oz);
            Rz.prototype.j = function () {
                return Oz.prototype.j.call(this, {
                    uid: this.l,
                    description: this.description
                });
            };
            var Sz = function (a, b, c, d) {
                Oz.call(this, a, void 0 === d ? '' : d);
                this.A = b;
                this.push = c;
            };
            _.N(Sz, Oz);
            Sz.prototype.j = function () {
                return Oz.prototype.j.call(this, {
                    uid: this.l,
                    expand_t: this.A.top,
                    expand_r: this.A.right,
                    expand_b: this.A.bottom,
                    expand_l: this.A.left,
                    push: this.push
                });
            };
            var Tz = function (a, b) {
                Oz.call(this, a, void 0 === b ? '' : b);
            };
            _.N(Tz, Oz);
            Tz.prototype.j = function () {
                return Oz.prototype.j.call(this, { uid: this.l });
            };
            var Uz = function (a, b, c) {
                Oz.call(this, a, void 0 === c ? '' : c);
                this.H = b;
            };
            _.N(Uz, Oz);
            Uz.prototype.j = function () {
                var a = {
                    uid: this.l,
                    newGeometry: Iz(this.H)
                };
                return Oz.prototype.j.call(this, a);
            };
            var Vz = function (a, b, c, d, e, f) {
                Uz.call(this, a, c, void 0 === f ? '' : f);
                this.success = b;
                this.A = d;
                this.push = e;
            };
            _.N(Vz, Uz);
            Vz.prototype.j = function () {
                var a = {
                    uid: this.l,
                    success: this.success,
                    newGeometry: Iz(this.H),
                    expand_t: this.A.top,
                    expand_r: this.A.right,
                    expand_b: this.A.bottom,
                    expand_l: this.A.left,
                    push: this.push
                };
                this.m && (a.sentinel = this.m);
                return JSON.stringify(a);
            };
            var Wz = function (a, b, c, d) {
                Oz.call(this, a, void 0 === d ? '' : d);
                this.width = b;
                this.height = c;
            };
            _.N(Wz, Oz);
            Wz.prototype.j = function () {
                return Oz.prototype.j.call(this, {
                    uid: this.l,
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
                (c = d) || (c = $l(a, !1));
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
                        c.l ? (c.A.style.removeProperty(c.j), c.A.style.setProperty(c.j, String(c.m), c.H)) : c.A.style[c.j] = c.m;
                    }
                    a.j.length = 0;
                }, Zz = function (a, b, c, d) {
                    this.A = a;
                    this.j = (this.l = !(void 0 === d || !a.style || !a.style.getPropertyPriority)) ? String(b).replace(/([A-Z])/g, '-$1').toLowerCase() : b;
                    this.m = this.l ? a.style.getPropertyValue(this.j) : a.style[this.j];
                    this.H = this.l ? a.style.getPropertyPriority(this.j) : void 0;
                    this.l ? (a.style.removeProperty(this.j), a.style.setProperty(this.j, String(c), d)) : a.style[this.j] = String(c);
                };
            var cA = function () {
                    var a = window, b = _.Rf(a);
                    b && (b = {
                        label: '2',
                        type: 9,
                        value: b
                    }, a = a.google_js_reporting_queue = a.google_js_reporting_queue || [], 2048 > a.length && a.push(b));
                }, dA = function (a, b, c) {
                    var d = window;
                    return function () {
                        var e = _.Rf(), f = 3;
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
                                duration: (_.Rf() || 0) - e,
                                type: f
                            }, f = d.google_js_reporting_queue = d.google_js_reporting_queue || [], 2048 > f.length && f.push(e));
                        }
                        return g;
                    };
                };
            var iA = function (a) {
                Kz.call(this, a.uniqueId);
                var b = this;
                this.G = a.Gd;
                this.F = 1 == a.size;
                this.W = new Mz(a.permissions.Fb && !this.F, a.permissions.Gb && !this.F);
                this.m = a.oc;
                this.qa = a.hostpageLibraryTokens || [];
                var c = window.location;
                this.la = 'file:' == c.protocol ? '*' : c.protocol + '//' + c.host;
                this.oa = !!a.ob;
                c = !1 === a.Yc ? 'https:' : window.location.protocol;
                this.O = a.Qb ? '//' + a.Qb + '.safeframe.googlesyndication.com' : '//tpc.googlesyndication.com';
                this.na = a.nb ? '*' : Ke(a.Ra) ? 'https://secureframe.doubleclick.net' : c + this.O;
                this.X = !!a.pd;
                this.ga = eA(a);
                this.A = new Yz();
                fA(this, a.oc, a.size);
                this.D = this.ca = Jz(a.oc);
                this.K = a.Sd || '1-0-38';
                this.ma = a.jd || '';
                this.$ = void 0 === a.Ra ? null : a.Ra;
                this.ua = a.bb;
                gA(this, a);
                this.ea = null;
                this.I = dA(412, function () {
                    return hA(b);
                }, a.Ba);
                this.V = -1;
                this.B = 0;
                this.o = null;
                !a.ff || 'function' !== typeof IntersectionObserver || ik || hk || (this.o = new IntersectionObserver(dA(414, function (e) {
                    b.ea = e[e.length - 1];
                    hA(b);
                }, a.Ba)));
                this.l = new mz(this.ja, this.j.contentWindow, this.na, !1);
                oz(this.l, 'init_done', (0, _.Gi)(this.ec, this));
                oz(this.l, 'register_done', (0, _.Gi)(this.rc, this));
                oz(this.l, 'report_error', (0, _.Gi)(this.uc, this));
                oz(this.l, 'expand_request', (0, _.Gi)(this.ac, this));
                oz(this.l, 'collapse_request', (0, _.Gi)(this.Yb, this));
                oz(this.l, 'creative_geometry_update', (0, _.Gi)(this.ba, this));
                this.l.connect((0, _.Gi)(this.lc, this));
                var d = dA(415, function () {
                    b.j && (b.j.name = '', a.Kc && a.Kc(), _.je(b.j, 'load', d));
                }, a.Ba);
                _.yd(this.j, 'load', d);
                this.ec = dA(413, this.ec, a.Ba);
                this.rc = dA(417, this.rc, a.Ba);
                this.uc = dA(419, this.uc, a.Ba);
                this.ac = dA(411, this.ac, a.Ba);
                this.Yb = dA(409, this.Yb, a.Ba);
                this.ba = dA(410, this.ba, a.Ba);
                this.lc = dA(416, this.lc, a.Ba);
            };
            _.N(iA, Kz);
            var fA = function (a, b, c) {
                    a.F ? (b.style.width = _.dn('100%', !0), b.style.height = _.dn('auto', !0)) : (b.style.width = _.dn(c.width, !0), b.style.height = _.dn(c.height, !0));
                }, gA = function (a, b) {
                    var c, d = b.nb ? '' : null != (c = b.content) ? c : '';
                    c = {
                        shared: {
                            sf_ver: a.K,
                            ck_on: mt() ? 1 : 0,
                            flash_ver: '0'
                        }
                    };
                    d = a.K + ';' + d.length + ';' + d;
                    c = new Nz(a.H, a.la, a.ca, a.W, new Lz(c), a.F, a.oa, a.$, a.qa, a.ua);
                    var e = {};
                    e.uid = c.l;
                    e.hostPeerName = c.A;
                    e.initialGeometry = Iz(c.m);
                    var f = c.permissions;
                    f = JSON.stringify({
                        expandByOverlay: f.Fb,
                        expandByPush: f.Gb,
                        readCookie: f.j,
                        writeCookie: f.l
                    });
                    e = (e.permissions = f, e.metadata = JSON.stringify(c.metadata.j), e.reportCreativeGeometry = c.H, e.isDifferentSourceWindow = c.ob, e.goog_safeframe_hlt = xt(c.hostpageLibraryTokens), e.encryptionMode = c.Ra, e);
                    c.j && (e.sentinel = c.j);
                    c.bb && (e.pbjsAdConfig = c.bb);
                    c = JSON.stringify(e);
                    e = d + c;
                    c = !1 === b.Yc;
                    if (a.X && b.size instanceof _.sl) {
                        d = Ke(b.Ra) ? 'https://secureframe.doubleclick.net' : _.Bl(_.ul(a.m)).location.protocol + a.O;
                        f = _.Bl(_.ul(a.m));
                        var g = b.Gc, h = b.size;
                        Qy || Ol(f.document, Ry);
                        Qy++;
                        f.google_eas_queue = f.google_eas_queue || [];
                        f.google_eas_queue.push({
                            a: g,
                            b: d,
                            c: h.width,
                            d: h.height,
                            e: 'sf-gdn-exp-' + Qy,
                            f: void 0,
                            g: void 0,
                            h: void 0,
                            i: void 0
                        });
                    }
                    var k = b.size;
                    f = b.Rb;
                    h = b.vd || '';
                    d = b.mb;
                    g = void 0 === b.nb;
                    var l = k.width;
                    k = k.height;
                    a.F && (k = l = 0);
                    var m = {};
                    e = (m.id = b.Gc, m.title = h, m.name = e, m.scrolling = 'no', m.marginWidth = '0', m.marginHeight = '0', m.width = String(l), m.height = String(k), m['data-is-safeframe'] = 'true', m);
                    g && (g = _.Bl(_.ul(a.m)), c = Ke(a.$) ? 'https://secureframe.doubleclick.net/container.html?ecs=' + f : Xz(g, a.K, a.ma, c, a.O), f = [], a.X && (h = am(g.location.href), g = f.push, h = [
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
                    b.nb ? (a.j = b.nb, xl(a.j, e)) : (b = _.ul(a.m), d = {}, d = (d.frameborder = 0, d.allowTransparency = 'true', d.style = 'border:0;vertical-align:bottom;', d.src = 'about:blank', d), e && Ba(d, e), b = b.createElement('IFRAME'), xl(b, d), a.j = b);
                    a.F && (a.j.style.minWidth = '100%');
                    a.m.appendChild(a.j);
                };
            aa = iA.prototype;
            aa.lc = function () {
                this.o && this.j ? this.o.observe(this.j) : (_.yd(window, 'resize', this.I), _.yd(window, 'scroll', this.I));
            };
            aa.ec = function (a) {
                try {
                    if (0 != this.status)
                        throw Error('Container already initialized');
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ia(b) || !Je(b.uid) || 'string' !== typeof b.version)
                        throw Error('Cannot parse JSON message');
                    var c = new Pz(b.uid, b.version, b.sentinel);
                    if (this.H != c.l || this.K != c.version)
                        throw Error('Wrong source container');
                    this.status = 1;
                } catch (d) {
                    this.G.error('Invalid INITIALIZE_DONE message. Reason: ' + d.message);
                }
            };
            aa.rc = function (a) {
                try {
                    if (1 != this.status)
                        throw Error('Container not initialized');
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ia(b) || !Je(b.uid) || 'number' !== typeof b.initialWidth || 'number' !== typeof b.initialHeight)
                        throw Error('Cannot parse JSON message');
                    if (this.H != new Qz(b.uid, b.initialWidth, b.initialHeight, b.sentinel).l)
                        throw Error('Wrong source container');
                    this.status = 2;
                } catch (c) {
                    this.G.error('Invalid REGISTER_DONE message. Reason: ' + c.message);
                }
            };
            aa.uc = function (a) {
                try {
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ia(b) || !Je(b.uid) || 'string' !== typeof b.description)
                        throw Error('Cannot parse JSON message');
                    var c = new Rz(b.uid, b.description, b.sentinel);
                    if (this.H != c.l)
                        throw Error('Wrong source container');
                    this.G.info('Ext reported an error. Description: ' + c.description);
                } catch (d) {
                    this.G.error('Invalid REPORT_ERROR message. Reason: ' + d.message);
                }
            };
            aa.ac = function (a) {
                try {
                    if (2 != this.status)
                        throw Error('Container is not registered');
                    if (0 != this.fa)
                        throw Error('Container is not collapsed');
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ia(b) || !Je(b.uid) || 'number' !== typeof b.expand_t || 'number' !== typeof b.expand_r || 'number' !== typeof b.expand_b || 'number' !== typeof b.expand_l || 'boolean' !== typeof b.push)
                        throw Error('Cannot parse JSON message');
                    var c = new Sz(b.uid, new _.Hm(b.expand_t, b.expand_r, b.expand_b, b.expand_l), b.push, b.sentinel);
                    if (this.H != c.l)
                        throw Error('Wrong source container');
                    if (!(0 <= c.A.top && 0 <= c.A.left && 0 <= c.A.bottom && 0 <= c.A.right))
                        throw Error('Invalid expansion amounts');
                    var d;
                    if (d = c.push && this.W.Gb || !c.push && this.W.Fb) {
                        var e = c.A, f = c.push, g = this.D = Jz(this.j);
                        if (e.top <= g.j.top && e.right <= g.j.right && e.bottom <= g.j.bottom && e.left <= g.j.left) {
                            if (!f)
                                for (var h = this.j.parentNode; h && h.style; h = h.parentNode)
                                    $z(this.A, h, 'overflowX', 'visible', 'important'), $z(this.A, h, 'overflowY', 'visible', 'important');
                            var k = this.D.l, l = this.D.l, m = Km(new Jm(0, 0, k.right - k.left, l.bottom - l.top));
                            _.ia(e) ? (m.top -= e.top, m.right += e.right, m.bottom += e.bottom, m.left -= e.left) : (m.top -= e, m.right += Number(void 0), m.bottom += Number(void 0), m.left -= Number(void 0));
                            $z(this.A, this.m, 'position', 'relative');
                            $z(this.A, this.j, 'position', 'absolute');
                            f ? (aA(this.A, this.m, 'width', m.right - m.left), aA(this.A, this.m, 'height', m.bottom - m.top)) : $z(this.A, this.j, 'zIndex', '10000');
                            aA(this.A, this.j, 'width', m.right - m.left);
                            aA(this.A, this.j, 'height', m.bottom - m.top);
                            aA(this.A, this.j, 'left', m.left);
                            aA(this.A, this.j, 'top', m.top);
                            this.fa = 2;
                            this.D = Jz(this.j);
                            d = !0;
                        } else
                            d = !1;
                    }
                    a = d;
                    pz(this.l, 'expand_response', new Vz(this.H, a, this.D, c.A, c.push).j());
                    if (!a)
                        throw Error('Viewport or document body not large enough to expand into.');
                } catch (n) {
                    this.G.error('Invalid EXPAND_REQUEST message. Reason: ' + n.message);
                }
            };
            aa.Yb = function (a) {
                try {
                    if (2 != this.status)
                        throw Error('Container is not registered');
                    if (2 != this.fa)
                        throw Error('Container is not expanded');
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ia(b) || !Je(b.uid))
                        throw Error('Cannot parse JSON message');
                    if (this.H != new Tz(b.uid, b.sentinel).l)
                        throw Error('Wrong source container');
                    bA(this.A);
                    this.fa = 0;
                    this.j && (this.D = Jz(this.j));
                    pz(this.l, 'collapse_response', new Uz(this.H, this.D).j());
                } catch (c) {
                    this.G.error('Invalid COLLAPSE_REQUEST message. Reason: ' + c.message);
                }
            };
            var hA = function (a) {
                if (1 == a.status || 2 == a.status)
                    switch (a.B) {
                    case 0:
                        jA(a);
                        a.V = window.setTimeout((0, _.Gi)(a.aa, a), 1000);
                        a.B = 1;
                        break;
                    case 1:
                        a.B = 2;
                        break;
                    case 2:
                        a.B = 2;
                    }
            };
            iA.prototype.ba = function (a) {
                try {
                    if ('string' !== typeof a)
                        throw Error('Could not parse serialized message');
                    var b = JSON.parse(a);
                    if (!_.ia(b) || !Je(b.uid) || 'number' !== typeof b.width || 'number' !== typeof b.height || b.sentinel && 'string' !== typeof b.sentinel)
                        throw Error('Cannot parse JSON message');
                    var c = new Wz(b.uid, b.width, b.height, b.sentinel);
                    if (this.H != c.l)
                        throw Error('Wrong source container');
                    var d = String(c.height);
                    this.F ? d != this.j.height && (this.j.height = d, hA(this)) : this.G.error('Got CreativeGeometryUpdate message in non-fluidcontainer. The container is not resized.');
                } catch (e) {
                    this.G.error('Invalid CREATIVE_GEOMETRY_UPDATE message. Reason: ' + e.message);
                }
            };
            iA.prototype.aa = function () {
                if (1 == this.status || 2 == this.status)
                    switch (this.B) {
                    case 1:
                        this.B = 0;
                        break;
                    case 2:
                        jA(this), this.V = window.setTimeout((0, _.Gi)(this.aa, this), 1000), this.B = 1;
                    }
            };
            var jA = function (a) {
                    a.D = Jz(a.j, a.ea);
                    a.ea = null;
                    pz(a.l, 'geometry_update', new Uz(a.H, a.D).j());
                }, eA = function (a) {
                    var b = null;
                    a.Tc && (b = a.Tc);
                    return null == b ? null : b.join(' ');
                }, kA = [
                    'allow-modals',
                    'allow-orientation-lock',
                    'allow-presentation',
                    'allow-pointer-lock'
                ], lA = ['allow-top-navigation'], mA = ['allow-same-origin'], nA = dm([].concat(_.ec(kA), _.ec(lA)));
            dm([].concat(_.ec(kA), _.ec(mA)));
            dm([].concat(_.ec(kA), _.ec(lA), _.ec(mA)));
            var Le = function (a, b) {
                try {
                    Gd(Th(a, b));
                } catch (c) {
                }
            };
            var oA = function (a) {
                P(this, a, null, null);
            };
            _.N(oA, O);
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
                    a = te(a);
                    if (!a)
                        return -1;
                    try {
                        var b = Hs(a.document);
                        var c = new _.sl(b.clientWidth, b.clientHeight);
                    } catch (d) {
                        c = new _.sl(-12245933, -12245933);
                    }
                    return -12245933 == c.width || -12245933 == c.height ? -1 : c.width * c.height;
                }, tA = function (a, b) {
                    return 0 > a ? [] : _.ze(qA, function (c) {
                        return Math.min(a / b * c, 1);
                    });
                }, wA = function (a) {
                    this.j = a.J;
                    this.A = a.kb;
                    this.o = a.wb;
                    this.m = null;
                    this.H = a.Ba;
                    this.l = uA(this);
                    this.B = a.Wd || !1;
                    this.G = a.bf || !1;
                    this.D = null;
                    this.G && vA(this);
                }, yA = function (a, b) {
                    if (a.l) {
                        if (null != a.m) {
                            try {
                                xA(a, Math.round(performance.now()), 0, 0, 0, !1);
                            } catch (c) {
                                a.H && a.H(c);
                            }
                            a.l && a.l.unobserve(a.A);
                            a.D = null;
                        }
                        a.m = b;
                        a.l.observe(a.A);
                        a.G && (a.A.getBoundingClientRect(), Bt(a.j.document) || te(a.j), a.D = new pA());
                    }
                }, uA = function (a) {
                    var b = a.A.offsetWidth * a.A.offsetHeight, c = sA(a.j);
                    b = [].concat(_.ec(rA), _.ec(tA(c, b)));
                    la(b);
                    return _.F.IntersectionObserver ? new _.F.IntersectionObserver(function (d) {
                        return zA(a, d);
                    }, { threshold: b }) : new Tg(function (d) {
                        return zA(a, d);
                    }, { threshold: b });
                }, zA = function (a, b) {
                    try {
                        var c = sA(a.j);
                        _.Oi(b, function (d) {
                            var e = Math.round(d.time), f = d.boundingClientRect.width * d.boundingClientRect.height, g = d.intersectionRect.width * d.intersectionRect.height;
                            d = d.isIntersecting;
                            a.B && xA(a, e, f, g, c, d);
                        });
                    } catch (d) {
                        a.H && a.H(d);
                    }
                }, xA = function (a, b, c, d, e, f) {
                    if (null == a.m)
                        throw Error('Not Attached.');
                    var g = new oA();
                    c = E(g, 1, c);
                    d = E(c, 2, d);
                    e = E(d, 3, e);
                    b = E(e, 4, b);
                    b = E(b, 5, f);
                    f = new $d();
                    e = H(b, 4);
                    null != e && Jk(f, 4, e);
                    e = H(b, 2);
                    null != e && Jk(f, 2, e);
                    e = H(b, 1);
                    null != e && Jk(f, 1, e);
                    e = H(b, 3);
                    null != e && Jk(f, 3, e);
                    e = H(b, 5);
                    null != e && (b = e, null != b && (Wj(f.j, 40), f.j.push(b ? 1 : 0)));
                    f = be(f);
                    f = Ka(f, 4);
                    Jb(a.o, '1', 10, f, void 0, a.m);
                }, vA = function (a) {
                    var b = At(a.j.document);
                    b && _.yd(a.j.document, b, function () {
                    });
                };
            var AA = function (a, b) {
                    this.j = a;
                    this.l = b;
                }, BA = function (a) {
                    var b = hm('google_ads_top_frame', a.j);
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
            var CA = function (a) {
                    a = void 0 === a ? window : a;
                    return !a.PeriodicSyncManager;
                }, DA = {
                    issuerOrigin: 'https://adservice.google.com',
                    issuancePath: '/tt/i',
                    redemptionPath: '/tt/r',
                    shouldRedeemToken: function () {
                        var a = void 0 === a ? window : a;
                        return !CA(a) || _.v(Vp) ? !0 : !1;
                    },
                    shouldRequestToken: function () {
                        return !1;
                    }
                }, EA = function () {
                    var a = void 0 === a ? window : a;
                    if (!CA(a) && _.v(Op) || CA(a) && _.v(Pp)) {
                        a = a.navigator.userAgent;
                        var b = /Chrome/.test(a);
                        return /Android/.test(a) && b;
                    }
                    return !1;
                }, FA = {
                    issuerOrigin: 'https://attestation.android.com',
                    issuancePath: '/att/i',
                    redemptionPath: '/att/r',
                    shouldRedeemToken: function () {
                        return EA();
                    },
                    shouldRequestToken: function () {
                        return EA();
                    }
                };
            var zm = [
                    'A+b/H0b8RPXNaJgaNFpO0YOFuGK6myDQXlwnJB3SwzvNMfcndat4DZYMrP4ClJIzYWo3/yP2S+8FTZ/lpqbPAAEAAABueyJvcmlnaW4iOiJodHRwczovL2ltYXNkay5nb29nbGVhcGlzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzVGhpcmRQYXJ0eSI6dHJ1ZX0=',
                    'A9ZgbRtm4pU3oZiuNzOsKcC8ppFSZdcjP2qYcdQrFKVzkmiWH1kdYY1Mi9x7G8+PS8HV9Ha9Cz0gaMdKsiVZIgMAAAB7eyJvcmlnaW4iOiJodHRwczovL2RvdWJsZWNsaWNrLm5ldDo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
                    'AxL6oBxcpn5rQDPKSAs+d0oxNyJYq2/4esBUh3Yx5z8QfcLu+AU8iFCXYRcr/CEEfDnkxxLTsvXPJFQBxHfvkgMAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXRhZ3NlcnZpY2VzLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
                    'A9KPtG5kl3oLTk21xqynDPGQ5t18bSOpwt0w6kGa6dEWbuwjpffmdUpR3W+faZDubGT+KIk2do0BX2ca16x8qAcAAACBeyJvcmlnaW4iOiJodHRwczovL2dvb2dsZXN5bmRpY2F0aW9uLmNvbTo0NDMiLCJmZWF0dXJlIjoiVHJ1c3RUb2tlbnMiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9',
                    'AookgM0K6zABiuRTZwpn+R95G2CKmUH/2+zf2kS/QpMlVZ6HTI6QekeLkrJyxeIi62p2ejcQTF464pkdlx0Nwg0AAABmeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGUuY29tOjQ0MyIsImZlYXR1cmUiOiJUcnVzdFRva2VucyIsImV4cGlyeSI6MTYzNDA4MzE5OSwiaXNTdWJkb21haW4iOnRydWV9'
                ], IA = function (a, b, c) {
                    a = void 0 === a ? function () {
                    } : a;
                    b = void 0 === b ? null : b;
                    c = void 0 === c ? !1 : c;
                    _.Sq.call(this);
                    GA();
                    this.D = b || _.v(Rp) ? [FA] : [
                        DA,
                        FA
                    ];
                    this.l = c;
                    this.m = a;
                    if (document.hasTrustToken && !_.v(Qp))
                        if (_.v(Tp)) {
                            if (!Array.isArray(window.goog_tt_state)) {
                                var d = HA(this);
                                Object.defineProperty(window, 'goog_tt_state', {
                                    configurable: !1,
                                    get: function () {
                                        return d.slice();
                                    }
                                });
                            }
                        } else
                            this.j = HA(this);
                };
            _.N(IA, _.Sq);
            var JA = function () {
                    var a = void 0 === a ? window : a;
                    return a.goog_tt_state;
                }, KA = function (a) {
                    return a.some(function (b) {
                        return 6 === b.state;
                    });
                }, GA = function () {
                    var a = void 0 === a ? window.document : a;
                    Bm(a);
                }, LA = function (a, b) {
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
                    b && 0 < _.r(Object, 'keys').call(Object, b).length && (a.additionalSigningData = Dk(JSON.stringify(b), 3));
                    return a;
                }, MA = function (a) {
                    var b = _.v(Tp) ? JA() : _.Xb(250), c = _.Xb(252);
                    if (a.setTrustToken && b && KA(b))
                        try {
                            var d = LA(b, c);
                            d && a.setTrustToken(d);
                        } catch (e) {
                        }
                }, HA = function (a) {
                    var b = a.D.map(function (c) {
                        return {
                            issuerOrigin: c.issuerOrigin,
                            state: _.v(Sp) && !a.l ? 12 : 1
                        };
                    });
                    _.v(Tp) || a.m(b);
                    return b;
                }, NA = function (a, b, c) {
                    if (_.v(Tp)) {
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
                }, OA = function () {
                    var a = window.goog_tt_state;
                    return Array.isArray(a) && a.some(function (b) {
                        return 1 != b.state;
                    });
                }, PA = function (a, b) {
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
                    NA(a, b.issuerOrigin, 2);
                    return window.fetch(c, d).then(function (e) {
                        if (!e.ok)
                            throw Error(e.status + ': Network response was not ok!');
                        NA(a, b.issuerOrigin, 6);
                    }).catch(function (e) {
                        e && 'NoModificationAllowedError' === e.name ? NA(a, b.issuerOrigin, 6) : NA(a, b.issuerOrigin, 5);
                    });
                }, QA = function (a, b, c) {
                    var d = b.issuerOrigin + b.issuancePath;
                    NA(a, b.issuerOrigin, 8);
                    return window.fetch(d, { trustToken: { type: 'token-request' } }).then(function (e) {
                        if (!e.ok)
                            throw Error(e.status + ': Network response was not ok!');
                        NA(a, b.issuerOrigin, 10);
                        if (c)
                            return PA(a, b);
                    }).catch(function (e) {
                        if (e && 'NoModificationAllowedError' === e.name) {
                            if (NA(a, b.issuerOrigin, 10), c)
                                return PA(a, b);
                        } else
                            NA(a, b.issuerOrigin, 9);
                    });
                }, RA = function (a) {
                    if (!(!document.hasTrustToken || _.v(Qp) || _.v(Sp) && !a.l || _.v(Tp) && OA())) {
                        var b = [];
                        a.D.forEach(function (c) {
                            var d = c.shouldRedeemToken(), e = c.shouldRequestToken();
                            if (d || e) {
                                var f = document.hasTrustToken(c.issuerOrigin).then(function (g) {
                                    if (g) {
                                        if (d)
                                            return PA(a, c);
                                    } else {
                                        if (e)
                                            return QA(a, c, d);
                                        NA(a, c.issuerOrigin, 3);
                                    }
                                });
                                b.push(f);
                            } else
                                NA(a, c.issuerOrigin, 7);
                        });
                        if (D.Promise && D.Promise.all)
                            return D.Promise.all(b);
                    }
                };
            var SA = function (a, b, c) {
                    return a.IntersectionObserver ? new a.IntersectionObserver(c, b) : new Tg(c, b);
                }, TA = function (a, b, c) {
                    _.yd(a, b, c);
                    return function () {
                        return _.je(a, b, c);
                    };
                }, UA = null, VA = function () {
                    UA = _.xc();
                }, WA = function (a, b) {
                    return b ? null === UA ? (_.yd(a, 'mousemove', VA, { passive: !0 }), _.yd(a, 'scroll', VA, { passive: !0 }), VA(), !1) : _.xc() - UA >= 1000 * b : !1;
                }, XA = function (a) {
                    var b = a.J, c = a.element, d = a.Yd, e = a.Xd, f = void 0 === a.Vc ? 0 : a.Vc, g = a.Xb, h = a.qd, k = void 0 === a.Jc ? !0 : a.Jc, l = null, m = !1, n = !1, p = [], t = (void 0 === a.Hb ? SA : a.Hb)(b, void 0 === a.options ? {} : a.options, function (u, z) {
                            try {
                                var y = function () {
                                    p.length || (e && (p.push(TA(c, 'mouseenter', function () {
                                        m = !0;
                                        y();
                                    })), p.push(TA(c, 'mouseleave', function () {
                                        m = !1;
                                        y();
                                    }))), p.push(TA(b.document, 'visibilitychange', function () {
                                        return y();
                                    })));
                                    var K = WA(b, f), Q = Bt(b.document);
                                    if (n && !m && !K && !Q)
                                        l = l || b.setTimeout(function () {
                                            WA(b, f) ? y() : (g(), z.disconnect());
                                        }, 1000 * d);
                                    else if (k || m || K || Q)
                                        b.clearTimeout(l), l = null;
                                };
                                n = u[u.length - 1].isIntersecting;
                                y();
                            } catch (K) {
                                h && h(K);
                            }
                        });
                    t.observe(c);
                    return function () {
                        t.disconnect();
                        for (var u = _.G(p), z = u.next(); !z.done; z = u.next())
                            z = z.value, z();
                        null != l && b.clearTimeout(l);
                    };
                };
            var YA = function () {
                    var a = H(Gh.N().j, 26);
                    this.l = null;
                    this.j = 0;
                    this.A = a;
                }, ZA = function (a) {
                    if (_.v(Qo))
                        return new Zx();
                    if (!a.l) {
                        var b = _.Xb(7);
                        by = fy;
                        iy = b;
                        hy = 0;
                        if (!Aj() || 0 <= Bg(Cg(), 11))
                            b = ky();
                        else {
                            b = hn();
                            var c = b.__google_ad_urls;
                            b = c ? c : b.__google_ad_urls = new Zx();
                        }
                        a.l = b;
                        a.j = a.l.setupOse(a.A);
                    }
                    return a.l;
                };
            YA.prototype.getOseId = function () {
                if (_.v(Qo))
                    return 2;
                this.j || (this.j = Yx(0, _.Xb(7)));
                return this.j;
            };
            var $A = 0, aB = function () {
                    this.Y = [];
                    this.H = [];
                    this.Wa = this.Xa = NaN;
                    this.m = 0;
                    this.Nb = this.Kb = this.Bb = '';
                    this.D = [];
                    this.I = 0;
                    this.fa = this.A = this.l = this.G = null;
                    this.B = zb(_.F);
                    this.j = 'json_html';
                    this.o = 'fif';
                    this.Ca = 1;
                    this.F = new D.Map();
                }, bB = function (a, b, c, d, e, f, g, h, k) {
                    a.H = b;
                    a.m = c;
                    a.D = d;
                    a.Bb = e;
                    a.Kb = f;
                    a.Nb = g;
                    a.G = void 0 === h ? null : h;
                    a.fa = void 0 === k ? null : k;
                }, cB = function (a, b) {
                    var c = a.F.get(b);
                    c || (c = window === window.top ? (++$A).toString(36) : Pj(), a.F.set(b, c), _.Ig(b, function () {
                        a.F.delete(b);
                    }));
                    return c;
                };
            var dB = function (a, b, c, d, e, f, g, h, k) {
                Y.call(this, 718);
                this.F = V(this, b);
                this.I = V(this, c);
                this.B = V(this, d);
                this.m = V(this, e);
                Qt(this, f);
                this.K = U(this, g);
                this.o = U(this, h);
                this.W = U(this, k);
                this.O = ug(a, fr);
            };
            _.N(dB, Y);
            dB.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f;
                    return B(b, function (g) {
                        if (1 == g.j) {
                            if (!eB(c))
                                return g.return();
                            d = c.K.value;
                            e = c.o.value;
                            _.Vm(e, 'visibility', 'hidden');
                            _.Vm(e, 'min-width', '100%');
                            _.Vm(d, 'min-width', '100%');
                            return C(g, c.O, 2);
                        }
                        if (c.A)
                            return g.return();
                        f = d.contentDocument;
                        if (!f)
                            return mc('gpt_amp_fluid_no_iframedoc', function (h) {
                                Zb(h);
                            }), g.return();
                        fB(c, d, e, f.body.offsetWidth, f.body.offsetHeight);
                        ni(g);
                    });
                });
            };
            var eB = function (a) {
                    var b = !a.W.value;
                    return null == a.m.value || a.B.value || 'height' !== a.I.value || b ? !1 : !0;
                }, fB = function (a, b, c, d, e) {
                    b.setAttribute('height', String(e));
                    b.setAttribute('width', String(d));
                    _.Vm(c, 'visibility', 'visible');
                    gB(a, e, d);
                }, gB = function (a, b, c) {
                    var d = a.F.value;
                    mc('gpt_fluid_sz', function (e) {
                        q(e, 'sz', c + 'x' + b);
                        q(e, 'qqid', d || '');
                        Zb(e);
                        q(e, 'ff', 1);
                    });
                };
            var hB = function (a, b, c, d, e) {
                Y.call(this, 685);
                var f = this;
                this.slotId = a;
                this.J = b;
                this.m = V(this, c);
                this.o = U(this, d);
                this.B = U(this, e);
                ug(this.slotId, vg, function (g) {
                    return Pm(f.J, g.detail);
                });
            };
            _.N(hB, Y);
            hB.prototype.j = function () {
                var a, b;
                if (!_.v(qo) && !this.B.value) {
                    var c = null !== (b = null === (a = this.m.value) || void 0 === a ? void 0 : H(a, 1)) && void 0 !== b ? b : '', d = Qm(this.J, this.o.value, c);
                    _.Ig(this, function () {
                        try {
                            d();
                        } catch (e) {
                            Ub(493, e);
                        }
                    });
                }
            };
            var iB = /(<head(\s+[^>]*)?>)/i, jB = function (a, b, c, d, e) {
                    Y.call(this, 665);
                    this.m = this.l();
                    this.o = U(this, a);
                    this.B = V(this, b);
                    this.F = V(this, c);
                    this.I = V(this, d);
                    this.K = V(this, e);
                };
            _.N(jB, Y);
            jB.prototype.j = function () {
                if (0 !== this.o.value.kind || !Re(this.B.value) || Kt(this.F))
                    this.m.j(this.o.value);
                else {
                    var a = this.o.value.ra || '', b = !!this.I.value, c = !!this.K.value;
                    c || Dg() || (a = a.replace(iB, '$1<meta http-equiv=Content-Security-Policy content="script-src https://cdn.ampproject.org/;object-src \'none\';child-src blob:;frame-src \'none\'">'));
                    b && !c && (a = a.replace(iB, '$1<meta name="referrer" content="origin">'));
                    this.m.j({
                        kind: 0,
                        ra: a
                    });
                }
            };
            var kB = function (a, b, c, d) {
                _.Sq.call(this);
                var e = this;
                this.l = a;
                this.j = null;
                _.v(Mo) || _.Ig(this, Xq(b, vg, function (f) {
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
            _.N(kB, _.Sq);
            var lB = function (a, b) {
                    return Math.max('string' === typeof a ? _.r(a, 'endsWith').call(a, 'px') ? parseInt(a, 10) : 0 : a, b) + 'px';
                }, mB = function (a, b, c) {
                    a.style.minWidth = lB(a.style.minWidth, b);
                    a.style.minHeight = lB(a.style.minHeight, c);
                }, nB = function (a, b, c, d, e) {
                    a = a.createElement('DIV');
                    a.id = c;
                    a.name = c;
                    c = a.style;
                    c.border = '0pt none';
                    d && (c.margin = 'auto', c.textAlign = 'center');
                    e && (d = Array.isArray(e), c.width = d ? e[0] + 'px' : '100%', c.height = d ? e[1] + 'px' : '0%');
                    b.appendChild(a);
                    return a;
                }, oB = function (a, b, c, d, e, f, g, h, k, l, m, n, p, t, u, z) {
                    var y = xg, K = _.xh(Jv).A, Q;
                    Array.isArray(d) ? Q = new _.sl(d[0], d[1]) : Q = 1;
                    d = null;
                    null !== c && (d = null === m ? Gz(c) : '<startguard>' + c + '<endguard>');
                    return new iA({
                        oc: a,
                        Gc: b,
                        vd: y,
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
                        Kc: e,
                        Tc: h || void 0,
                        permissions: {
                            Fb: yf(f, 1) ? !!x(f, 1) : !k,
                            Gb: yf(f, 2) ? !!x(f, 2) : !1
                        },
                        ob: !!Kg().fifWin,
                        Sd: mv(),
                        jd: nv(),
                        Yc: !1,
                        hostpageLibraryTokens: K,
                        Ba: Ub,
                        Ra: null === m ? void 0 : m,
                        uniqueId: p,
                        Rb: n,
                        Qb: g || void 0,
                        mb: t || void 0,
                        nb: u || void 0,
                        bb: z || void 0
                    });
                }, pB = function (a, b, c) {
                    var d = void 0 === d ? !0 : d;
                    var e = void 0 === e ? !0 : e;
                    b = Gz(b, '<script>var inDapIF=true,inGptIF=true;</script>');
                    try {
                        var f = a.contentWindow ? a.contentWindow.document : a.contentDocument;
                        d && Dg() && f.open('text/html', 'replace');
                        c();
                        Ij(f, new _.Ej(b, null, _.Dj));
                        a.contentWindow && a.contentWindow.history && a.contentWindow.history.replaceState && gj(a.contentWindow.location.href, '#') && a.contentWindow.history.replaceState(null, '', '#' + Math.random());
                        e && f.close();
                    } catch (g) {
                        Vb(653, g, !0);
                    }
                }, rB = function (a, b, c) {
                    var d = Zc(c), e = Wc(b, a);
                    if ((_.v(Ho) || _.v(Io)) && e) {
                        var f = If(e), g = f.depth;
                        f = f.Vd.getBoundingClientRect();
                        if (0 === (null == f ? void 0 : f.height)) {
                            var h = _.G(vv(c));
                            c = h.next().value;
                            h = h.next().value;
                            f = 0 <= f.top && f.bottom <= (_.F.innerHeight || a.documentElement.clientHeight);
                            _.v(Ho) && Jf(f, g);
                            _.v(Io) && f && 0 < c && 0 < h && Bc().M(ws(b.getAdUnitPath(), b.j, c.toString(), h.toString()), b);
                        }
                    }
                    f = null == e ? void 0 : e.getBoundingClientRect();
                    if (c = _.lb(Ko)) {
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
                            if (a = _.Bl(a), e && !qB(Yc(e, a)) && e.parentElement && !qB(Yc(e.parentElement, a)))
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
                            if ((a = Wc(b, a)) && a.style.height && a.style.width)
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
                }, sB = function (a, b, c) {
                    if (!Wv(b, a)) {
                        var d = Wc(b, a);
                        if (d) {
                            var e = c.U;
                            c = c.P[b.j];
                            var f = rB(a, b, c);
                            if (_.v(Lo) || _.v(Do)) {
                                if (_.v(Lo) && Array.isArray(f)) {
                                    var g = _.G(f);
                                    f = g.next().value;
                                    g = g.next().value;
                                    d.style.minWidth || (d.style.minWidth = f + 'px');
                                    d.style.minHeight || (d.style.minHeight = g + 'px');
                                }
                                _.v(Do) && nB(a, d, aw(b), yv(e, c), [
                                    0,
                                    0
                                ]);
                            } else
                                nB(a, d, aw(b), yv(e, c), f), _.v(Go) && Array.isArray(f) && (b = _.G(f), a = b.next().value, b = b.next().value, mB(d, a, b));
                        }
                    }
                }, qB = function (a) {
                    return !!a && ('sticky' === a.position || 'fixed' === a.position);
                };
            var tB = 0;
            var cg = new D.WeakMap(), ag = function (a, b) {
                    a = [a];
                    for (var c = b.length - 1; 0 <= c; --c)
                        a.push(typeof b[c], b[c]);
                    return a.join('\x0B');
                };
            var uB = eg(function (a) {
                return (null === a || void 0 === a ? 0 : a.src) ? /^(?:https?:)?\/\/(?:www\.googletagservices\.com|securepubads\.g\.doubleclick\.net|pagead2\.googlesyndication\.com)\/tag\/js\/gpt(?:_[a-z]+)*\.js/.test(a.src) ? 0 : 1 : 2;
            }, function (a, b) {
                var c;
                return a + '\x0B' + (null === (c = b[0]) || void 0 === c ? void 0 : c.src);
            });
            var vB = function (a, b, c, d) {
                    try {
                        var e;
                        if (!(e = !b)) {
                            var f;
                            if (!(f = !sy(b, c, void 0 === d ? 100 : d))) {
                                a: {
                                    do {
                                        var g = Yc(b, c);
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
                }, fg = function (a) {
                    for (var b, c = {}, d = _.G(I(a, Cf, 9)), e = d.next(); !e.done; e = d.next())
                        e = e.value, c[Df(e)] = H(e, 2);
                    a = H(a, 8);
                    a.length && (null !== (b = c.excl_cat) && void 0 !== b ? b : c.excl_cat = a);
                    return c;
                }, wB = function (a) {
                    var b = !1, c = I(a, Cf, 2).map(function (d) {
                            var e = Df(d);
                            b = 'excl_cat' === e;
                            d = H(d, 2);
                            return encodeURIComponent(e) + '=' + encodeURIComponent(d.join());
                        });
                    a = H(a, 3);
                    !b && a.length && c.push(encodeURIComponent('excl_cat') + '=' + encodeURIComponent(a.join()));
                    return c;
                }, xB = function (a) {
                    var b;
                    if (null === (b = a.location) || void 0 === b ? 0 : b.ancestorOrigins)
                        return a.location.ancestorOrigins.length;
                    var c = 0;
                    Nl(function () {
                        c++;
                        return !1;
                    }, !0, !0, a);
                    return c;
                }, yB = function (a, b, c, d, e, f, g, h) {
                    this.Y = a;
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
                    this.o = new D.Set(og(hp));
                }, BB = function (a) {
                    var b = void 0 === b ? window : b;
                    if (0 === a.Y.length)
                        return '';
                    zB(a, a.Y, b);
                    var c, d;
                    b = null !== (d = null === (c = bv(a.L.U)) || void 0 === c ? void 0 : x(c, 9)) && void 0 !== d && d || !x(a.da, 5) ? 'https://pagead2.googlesyndication.com/gampad/ads?' : '' + _.Xb(247) + '/gampad/ads?';
                    a.j = b;
                    c = a.H;
                    if (_.v(ho))
                        for (d = Math.random, b = c.length - 1; 0 < b; b--) {
                            var e = Math.floor(d() * (b + 1)), f = c[b];
                            c[b] = c[e];
                            c[e] = f;
                        }
                    c = _.G(c);
                    for (b = c.next(); !b.done; b = c.next())
                        if (d = a, b = b.value, e = AB(b))
                            '?' !== d.j[d.j.length - 1] && (d.j += '&'), d.j += b.Kd + '=' + e;
                    return a.j;
                }, CB = function (a, b) {
                    try {
                        var c = b.top;
                        var d = Is(c.document, c);
                    } catch (e) {
                        d = new _.bd(-12245933, -12245933);
                    }
                    Z(a, 'scr_x', Math.round(d.x), { ta: !0 });
                    Z(a, 'scr_y', Math.round(d.y), { ta: !0 });
                }, DB = function (a) {
                    var b = window, c = (x(a.da, 5) && uc(b) ? b.document.cookie : null) || '';
                    var d = b.document.domain;
                    var e = b.history.length, f = b.screen, g = b.document.referrer;
                    if (Mm())
                        d = hn().gaGlobal || {};
                    else {
                        var h = Math.round(new Date().getTime() / 1000), k = b.google_analytics_domain_name;
                        d = 'undefined' == typeof k ? Px('auto', d) : Px(k, d);
                        var l = -1 < c.indexOf('__utma=' + d + '.'), m = -1 < c.indexOf('__utmb=' + d), n;
                        (n = (Nm() || hn()).gaGlobal) || (n = {}, (Nm() || hn()).gaGlobal = n);
                        var p = !1;
                        if (l)
                            g = c.split('__utma=' + d + '.')[1].split(';')[0].split('.'), m ? n.sid = g[3] : n.sid || (n.sid = h + ''), n.vid = g[0] + '.' + g[1], n.from_cookie = !0;
                        else {
                            n.sid || (n.sid = h + '');
                            if (!n.vid) {
                                p = !0;
                                m = Math.round(2147483647 * Math.random());
                                l = Nx.appName;
                                var t = Nx.version, u = Nx.language ? Nx.language : Nx.browserLanguage, z = Nx.platform, y = Nx.userAgent;
                                try {
                                    var K = Nx.javaEnabled();
                                } catch (S) {
                                    K = !1;
                                }
                                K = [
                                    l,
                                    t,
                                    u,
                                    z,
                                    y,
                                    K ? 1 : 0
                                ].join('');
                                f ? K += f.width + 'x' + f.height + f.colorDepth : _.F.java && _.F.java.awt && (f = _.F.java.awt.Toolkit.getDefaultToolkit().getScreenSize(), K += f.screen.width + 'x' + f.screen.height);
                                K = K + c + (g || '');
                                for (g = K.length; 0 < e;)
                                    K += e-- ^ g++;
                                n.vid = (m ^ Ox(K) & 2147483647) + '.' + h;
                            }
                            n.from_cookie = !1;
                        }
                        if (!n.cid) {
                            b:
                                for (h = 999, k && (k = 0 == k.indexOf('.') ? k.substr(1) : k, h = k.split('.').length), k = 999, c = c.split(';'), g = 0; g < c.length; g++)
                                    if (f = Qx.exec(c[g]) || Rx.exec(c[g]) || Sx.exec(c[g])) {
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
                }, EB = function (a, b) {
                    var c, d;
                    try {
                        var e = null === (d = null === (c = b.external) || void 0 === c ? void 0 : c.getHostEnvironmentValue) || void 0 === d ? void 0 : d.bind(b.external);
                        if (e) {
                            var f = parseInt(JSON.parse(e('os-mode'))['os-mode'], 10);
                            0 <= f && Z(a, 'wsm', f + 1);
                        }
                    } catch (g) {
                    }
                }, zB = function (a, b, c) {
                    c = void 0 === c ? window : c;
                    var d, e = c.document, f = a.L, g = f.U;
                    f = f.P;
                    Z(a, 'gdfp_req', 1, { ha: !1 });
                    Z(a, 'pvsid', a.model.B);
                    Z(a, 'correlator', H(g, 26));
                    Z(a, 'output', a.model.j, { ha: !1 });
                    _.v(jo) ? FB(a, 'wbn' === a.model.j ? new D.Map([
                        [
                            'wbsu',
                            { value: aj(a.model.l).replace(/^urn:uuid:/, '') }
                        ],
                        [
                            'callback',
                            { value: a.model.A }
                        ]
                    ]) : new D.Map()) : 'wbn' === a.model.j && (Z(a, 'wbsu', aj(a.model.l).replace(/^urn:uuid:/, '')), Z(a, 'callback', a.model.A));
                    Z(a, 'impl', a.model.o, { ha: !1 });
                    FB(a, Qf({
                        ld: lf(g, 24, 0),
                        Bb: a.model.Bb,
                        Nb: a.model.Nb,
                        Kb: a.model.Kb
                    }));
                    FB(a, Uf(g, a.model));
                    _.v(io) ? FB(a, new D.Map([
                        [
                            'eid',
                            { value: a.model.H }
                        ],
                        [
                            'debug_experiment_id',
                            { value: aq().split(',') }
                        ]
                    ])) : GB(a);
                    HB(a);
                    Z(a, 'ptt', 17);
                    IB(a);
                    JB(a);
                    Z(a, 'sc', _.Xb(6) ? 1 : 0, { ta: !0 });
                    window.postMessage && Z(a, 'sfv', mv());
                    Z(a, 'ecs', a.L.Rb);
                    KB(a, b, e);
                    LB(a);
                    MB(a, b);
                    NB(a, b);
                    OB(a, c);
                    Ob('google_preview') && Z(a, 'gct', Nb('google_preview'));
                    FB(a, Ve(c));
                    _.v(io) ? FB(a, new D.Map([[
                            'expflags',
                            { value: _.Xb(253) ? Cq(Zn) || null : null }
                        ]])) : _.Xb(253) && (g = Cq(Zn)) && Z(a, 'expflags', g);
                    PB(a, b, c);
                    g = {};
                    g.u_tz = -new Date().getTimezoneOffset();
                    g.u_his = kn();
                    g.u_java = !!jl.navigator && 'unknown' !== typeof jl.navigator.javaEnabled && !!jl.navigator.javaEnabled && jl.navigator.javaEnabled();
                    jl.screen && (g.u_h = jl.screen.height, g.u_w = jl.screen.width, g.u_ah = jl.screen.availHeight, g.u_aw = jl.screen.availWidth, g.u_cd = jl.screen.colorDepth);
                    jl.navigator && jl.navigator.plugins && (g.u_nplug = jl.navigator.plugins.length);
                    jl.navigator && jl.navigator.mimeTypes && (g.u_nmime = jl.navigator.mimeTypes.length);
                    _.$b(g, function (k, l) {
                        Z(a, l, k, { ha: !1 });
                    });
                    QB(a);
                    try {
                        var h = on();
                    } catch (k) {
                        h = '0';
                    }
                    Z(a, 'flash', h, {
                        ha: !1,
                        ta: !0
                    });
                    RB(a, b, c);
                    (_.v(Mp) || Kb.N().j) && Z(a, 'rumc', a.model.B, { ha: !1 });
                    _.v(wo) && Z(a, 'rume', 1, { ha: !1 });
                    Z(a, 'vis', _.yt(e), { ha: !1 });
                    0 === uB(_.Xb(172)) || Z(a, 'stss', uB(_.Xb(172)));
                    (null === (d = _.F.navigator) || void 0 === d ? 0 : d.deviceMemory) && Z(a, 'dmc', _.F.navigator.deviceMemory);
                    CB(a, c);
                    SB(a, b, c);
                    FB(a, $f(b, f, c));
                    0 < a.model.D.length && Z(a, 'psts', a.model.D);
                    DB(a);
                    EB(a, c);
                    _.v(Kn) && (Z(a, 'js', Fy(c)), Z(a, 'ms', Gy(a.model.B.toString(), c)));
                    TB(a, c, b);
                    UB(a, b, c);
                    VB(a);
                    WB(a);
                    XB(a);
                    YB(a);
                    ZB(a);
                    Z(a, 'cbidsp', jf(b, a.L.P));
                }, VB = function (a) {
                    var b = a.model.fa;
                    b && (Z(a, 'floc_id', b.id), Z(a, 'floc_ver', b.version));
                }, WB = function (a) {
                    _.v(qp) && 'runAdAuction' in navigator && 'joinAdInterestGroup' in navigator && Z(a, 'td', 1);
                }, XB = function (a) {
                    var b = _.Xb(251);
                    b && Z(a, 'uach', Dk(b, 3));
                }, YB = function (a) {
                    var b = _.v(Tp) ? JA() : _.Xb(250);
                    (null === b || void 0 === b ? 0 : b.length) && Z(a, 'tt_state', Dk(JSON.stringify(b), 3));
                }, SB = function (a, b, c) {
                    var d, e = a.L.P, f = [], g = [];
                    b = _.G(b);
                    for (var h = b.next(); !h.done; h = b.next()) {
                        var k = h.value;
                        h = Wc(k);
                        h = rm((null === h || void 0 === h ? void 0 : h.parentElement) && Yc(h.parentElement, c) || null);
                        if (!h || 1 === h[0] && 1 === h[3]) {
                            var l = Wc(k), m = null !== (d = null === l || void 0 === l ? void 0 : l.parentElement) && void 0 !== d ? d : null;
                            h = Qv(m) || new _.sl(0, 0);
                            vB(h, m, c);
                            m = Qv(Wc(k)) || new _.sl(0, 0);
                            vB(m, l, c, 1);
                            -1 === h.height && (m.height = -1);
                            _.v(Jo) && (l = _.G(vv(e[k.j])), k = l.next().value, l = l.next().value, 0 <= h.height && (h.width = Math.max(h.width, k), h.height = Math.max(h.height, l)), 0 <= m.height && (m.width = Math.max(m.width, k), m.height = Math.max(m.height, l)));
                            f.push(h.width + 'x' + h.height);
                            g.push(m.width + 'x' + m.height);
                        } else
                            f.push('-1x-1'), g.push('-1x-1');
                    }
                    Z(a, 'psz', f, { Aa: '|' });
                    Z(a, 'msz', g, { Aa: '|' });
                }, TB = function (a, b, c) {
                    var d = 0 !== rd(), e = Js(!0, b, d).width, f = [], g = [], h = [];
                    if (null !== b && b != b.top) {
                        var k = Js(!1, b).width;
                        (-12245933 === e || -12245933 === k || k < e) && h.push(8);
                    }
                    -12245933 !== e && (1.5 * e < b.document.documentElement.scrollWidth ? h.push(10) : d && 1.5 * b.outerWidth < e && h.push(10));
                    c = _.G(c);
                    for (k = c.next(); !k.done; k = c.next()) {
                        d = new hu();
                        var l = Wc(k.value);
                        k = 0;
                        var m = _.v(Dn), n = !1, p = !1, t = _.v(Gn);
                        if (l)
                            for (var u = 0; l && 100 > u; u++, l = l.parentElement) {
                                var z = Yc(l, b);
                                if (z) {
                                    if ('visible' !== z.overflowY) {
                                        d.set(2);
                                        var y = Qv(l);
                                        y && (k = k ? Math.min(k, y.width) : y.width);
                                        if (d.get(9))
                                            break;
                                    }
                                    qB(z) && d.set(9);
                                    'none' === z.display && d.set(7);
                                    'IFRAME' === l.nodeName && (y = parseInt(z.width, 10), y < e && (d.set(8), k = k ? Math.min(y, k) : y));
                                    m && (t = t || 'nowrap' === z.whiteSpace, p = p || 'scroll' === z.overflowX || 'auto' === z.overflowX, n = n || 'flex' === z.display);
                                } else
                                    d.set(3);
                            }
                        else
                            d.set(1);
                        m && t && p && n && d.set(11);
                        m = _.G(h);
                        for (n = m.next(); !n.done; n = m.next())
                            d.set(n.value);
                        f.push(iu(d));
                        g.push(k);
                    }
                    Z(a, 'fws', f);
                    Z(a, 'ohw', g);
                }, UB = function (a, b, c) {
                    try {
                        var d = Is(c.top.document, c.top).y;
                        Z(a, 'btvi', b.map(function (e) {
                            var f, g = a.L, h = g.P[e.j];
                            g = yv(g.U, h);
                            e = null === (f = Xv(e, h, c.document, g)) || void 0 === f ? void 0 : f.y;
                            h = Js(!0, c).height;
                            return void 0 === e || -12245933 === e || -12245933 === h ? -1 : e < d + h ? 0 : ++$B;
                        }), {
                            ta: !0,
                            Aa: '|'
                        });
                    } catch (e) {
                    }
                }, aC = function (a, b) {
                    var c = a.L, d = c.U, e = c.P;
                    return _.v(Rn) ? b.map(function (f) {
                        return wv(e[f.j], null);
                    }).join(',') : a.A ? b.map(function (f) {
                        var g = e[f.j];
                        g = _.v(Sn) ? tu(a.R, f) || wv(g, x(d, 6) || x(g, 17) ? null : Wc(f)) : wv(g);
                        if (f = a.R.j.get(f))
                            f.Qa = g;
                        return g;
                    }).join(',') : b.map(function (f) {
                        var g = a.L.P[f.j];
                        g = tu(a.R, f) || wv(g, x(a.L.U, 6) || x(g, 17) ? null : Wc(f));
                        if (f = a.R.j.get(f))
                            f.Qa = g;
                        return g;
                    }).join(',');
                }, RB = function (a, b, c) {
                    c = void 0 === c ? window : c;
                    var d = c.document;
                    b = (_.v(Sn) ? x(a.L.U, 6) : a.A) ? Mv(a.L.U) : Nv(a.L.P[b[0].j]) || Mv(a.L.U);
                    var e = Ob('google_preview'), f = e ? Mb(d.URL) : d.URL;
                    e = e ? Mb(d.referrer) : d.referrer;
                    d = !1;
                    if (null != b) {
                        var g = f;
                        Ls(c) || (e = '', d = !_.v(ip) || !a.R.lb);
                    } else
                        b = f;
                    f = xB(c);
                    Z(a, 'nhd', f || null);
                    Z(a, 'url', b);
                    var h = b, k = _.Xb(252) || {};
                    k.url = h;
                    _.xh(Fq)[252] = k;
                    null != g && g !== b && Z(a, 'loc', g);
                    Z(a, 'ref', e);
                    f && (g = a.R.lb, g = void 0 === g ? '' : g, b = Pe(c.top) && c.top.location && c.top.location.href || '', e = c.location && c.location.ancestorOrigins || null, (c = b || g || Gm(c) || e && e[e.length - 1] || '') && Z(a, 'top', d ? Jl(c.match(_.Il)[3] || null) : c));
                    Z(a, 'scar', a.model.G);
                }, HB = function (a) {
                    var b = Pb();
                    Z(a, 'vrg', b);
                }, MB = function (a, b) {
                    var c = a.L.P, d = b = b.map(function (e) {
                            return gg(c[e.j]).join('&');
                        });
                    d.join('|').length === b.length - 1 && (d = null);
                    Z(a, 'prev_scp', d, { Aa: '|' });
                }, IB = function (a) {
                    var b = a.L.U;
                    0 !== lf(b, 24, 0) && Z(a, 'co', lf(b, 24, 0), { ta: !0 });
                }, JB = function (a) {
                    var b = bv(a.L.U) || new Yu();
                    !0 === x(b, 1) && Z(a, 'rdp', '1');
                    !0 === x(b, 9) && Z(a, 'ltd', '1');
                    var c = H(a.da, 2);
                    c && Z(a, 'gdpr_consent', c);
                    yf(a.da, 3) && (c = x(a.da, 3), Z(a, 'gdpr', c ? '1' : '0', { ta: !0 }));
                    (c = H(a.da, 4)) && Z(a, 'addtl_consent', c);
                    (c = H(a.da, 7)) && Z(a, 'tcfe', c);
                    (c = H(a.da, 1)) && Z(a, 'us_privacy', c);
                    (x(a.da, 6) || x(b, 8)) && Z(a, 'npa', 1);
                    c = lf(b, 6, 2);
                    2 !== c && Z(a, 'tfua', c, { ta: !0 });
                    yf(b, 5) && (b = H(b, 5), Z(a, 'tfcd', b, { ta: !0 }));
                }, LB = function (a) {
                    var b = a.L.U;
                    1 !== lf(b, 24, 0) && yf(b, 16) && Z(a, 'ppid', H(b, 16), { ta: !0 });
                }, NB = function (a, b) {
                    var c = a.L, d = c.U, e = 1 !== a.model.Ca;
                    c = !!x(c.P[b[0].j], 17);
                    b = Ov(b, a.L);
                    d = x(d, 27) || !1;
                    var f = 3 === a.model.Ca, g = new hu();
                    g.set(0, e);
                    g.set(1, c);
                    g.set(2, b);
                    g.set(3, d);
                    g.set(4, f);
                    e = iu(g);
                    0 < e && Z(a, 'eri', e);
                }, OB = function (a, b) {
                    var c = a.L.U, d = wB(c);
                    Z(a, 'cust_params', d, { Aa: '&' });
                    if (0 == lf(c, 24, 0)) {
                        if (a.m) {
                            d = qt(a.m, a.da);
                            Z(a, 'cookie', d, { ta: !0 });
                            if (d = !d) {
                                d = a.m;
                                if (0 === d.l) {
                                    var e = a.da;
                                    if (qt(d, e))
                                        e = !0;
                                    else {
                                        var f = d.j;
                                        x(e, 5) && uc(f) && new vc(f.document).set('GoogleAdServingTest', 'Good', void 0);
                                        if (f = 'Good' === wc('GoogleAdServingTest', e, d.j)) {
                                            var g = d.j;
                                            x(e, 5) && uc(g) && lt(new vc(g.document), 'GoogleAdServingTest');
                                        }
                                        e = f;
                                    }
                                    d.l = e ? 2 : 1;
                                }
                                d = 2 === d.l;
                            }
                            d && Z(a, 'cookie_enabled', '1', { ta: !0 });
                        }
                        d = b.document;
                        (b = (Mv(a.L.U) || Fg(b)) === d.URL ? '' : d.domain) && Z(a, 'cdm', b);
                    }
                    (c = H(c, 8)) ? (50 < c.length && (c = c.substring(0, 50)), c = 'a ' + Dk('role:1 producer:12 loc:"' + (c + '"'))) : c = '';
                    c && Z(a, 'uule', c);
                    c = new hu();
                    _.F.SVGElement && _.F.document.createElementNS && c.set(0);
                    b = em();
                    b['allow-top-navigation-by-user-activation'] && c.set(1);
                    b['allow-popups-to-escape-sandbox'] && c.set(2);
                    _.F.crypto && _.F.crypto.subtle && c.set(3);
                    _.F.TextDecoder && _.F.TextEncoder && c.set(4);
                    c = iu(c);
                    Z(a, 'bc', c);
                }, bC = function (a, b) {
                    var c = a.L, d = c.P, e = new D.Map();
                    c = _.G(I(c.U, Cf, 14));
                    for (var f = c.next(); !f.done; f = c.next()) {
                        var g = f.value;
                        e.set(Df(g), [H(g, 2)[0]]);
                    }
                    for (c = 0; c < b.length; c++) {
                        g = d[b[c].j];
                        if (!g)
                            return;
                        g = _.G(I(g, Cf, 3));
                        for (f = g.next(); !f.done; f = g.next()) {
                            var h = f.value;
                            f = Df(h);
                            var k = e.get(f) || [];
                            h = H(h, 2)[0];
                            1 === b.length ? k[0] = h : h !== k[0] && (k[c + 1] = h);
                            e.set(f, k);
                        }
                    }
                    b = [];
                    d = _.G(_.r(e, 'keys').call(e));
                    for (c = d.next(); !c.done; c = d.next())
                        if (g = c.value, c = xu()[g])
                            g = e.get(g), 1 < g.length ? (g = g.map(function (l) {
                                return encodeURIComponent(l || '');
                            }).join(), b.push(c + ',' + g)) : 1 === g.length && 'url' !== c && Z(a, c, g[0]);
                    b.length && Z(a, 'sps', b.join('|'));
                }, PB = function (a, b, c) {
                    var d, e = c.document;
                    if (!Mv(a.L.U)) {
                        try {
                            var f = Math.round(Date.parse(c.document.lastModified) / 1000) || null;
                        } catch (t) {
                            f = null;
                        }
                        Z(a, 'lmt', f ? f.toString() : null);
                    }
                    Z(a, 'dt', new Date().getTime(), { ha: !1 });
                    try {
                        f = tB;
                        var g = Math.min(bq('domLoading') || Infinity, bq('domInteractive') || Infinity);
                        var h = Infinity == g ? Math.max(bq('responseEnd'), bq('navigationStart')) : g;
                        0 < h && f >= h && (Z(a, 'dlt', h, { ha: !1 }), Z(a, 'idt', f - h, { ha: !1 }));
                    } catch (t) {
                        Z(a, 'idt', -9, { ha: !1 }), t instanceof Error && Ub(479, t);
                    }
                    if (null !== (d = cC) && void 0 !== d)
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
                        cC = h && !g;
                    }
                    cC || Z(a, 'ea', '0', { ta: !0 });
                    h = c.document;
                    g = Ks(hn()).J;
                    g = Ns(g);
                    h = Ms(hn(), h, c.google_ad_width, c.google_ad_height);
                    g = g.ic;
                    f = hn();
                    f = f.top == f ? 0 : Pe(f.top) ? 1 : 2;
                    k = 4;
                    h || 1 != f ? h || 2 != f ? h && 1 == f ? k = 7 : h && 2 == f && (k = 8) : k = 6 : k = 5;
                    g && (k |= 16);
                    h = '' + k;
                    Os();
                    Z(a, 'frm', h || null);
                    if (h = Js(!0, c))
                        a.L.Ya = h, Z(a, 'biw', h.width), Z(a, 'bih', h.height);
                    !Ls(c) && (h = Js(!1, c)) && (Z(a, 'isw', h.width), Z(a, 'ish', h.height));
                    a.model.m && Z(a, 'oid', a.model.m);
                    h = [];
                    g = [];
                    k = a.L;
                    f = k.U;
                    k = k.P;
                    n = _.G(b);
                    for (m = n.next(); !m.done; m = n.next()) {
                        m = m.value;
                        l = k[m.j];
                        var p = yv(f, l);
                        m = Xv(m, l, e, p);
                        a.A && (m = m || dC);
                        m && (h.push(Math.round(m.x)), g.push(Math.round(m.y)));
                        if (!a.A)
                            break;
                    }
                    Z(a, 'adxs', h);
                    Z(a, 'adys', g);
                    Z(a, 'adks', aC(a, b));
                    e = 0;
                    void 0 === _.F.postMessage && (e |= 1);
                    0 < e && Z(a, 'osd', e);
                    eC(a, b);
                    bC(a, b);
                    e = ln(c);
                    a.D ? Z(a, 'ifi', e) : (Z(a, 'ifi', e + 1), e = c, b = b.length, b = void 0 === b ? 1 : b, e = Nm(Mm(e)) || e, e.google_unique_id = (e.google_unique_id || 0) + b);
                    null !== c && c != c.top ? (b = [c.document.URL], c.name && b.push(c.name), c = Js(!1, c, !1), b.push(c.width.toString()), b.push(c.height.toString()), c = Ul(b.join(''))) : c = 0;
                    0 !== c && Z(a, 'ifk', c.toString());
                }, QB = function (a) {
                    var b = _.F.devicePixelRatio;
                    (b = 'number' === typeof b ? +b.toFixed(3) : null) && Z(a, 'u_sd', b, { ha: !1 });
                }, GB = function (a) {
                    Z(a, 'eid', a.model.H);
                    var b = aq().split(',');
                    b && Z(a, 'debug_experiment_id', b);
                }, KB = function (a, b, c) {
                    for (var d = _.G(b), e = d.next(); !e.done; e = d.next())
                        fC(a, e.value.getAdUnitPath());
                    d = a.L;
                    var f = d.U, g = d.P;
                    d = b.map(function (k) {
                        return g[k.j];
                    });
                    Z(a, 'iu_parts', a.l);
                    Z(a, 'enc_prev_ius', a.G);
                    Z(a, 'prev_iu_szs', d.map(function (k) {
                        return uv(k);
                    }).join());
                    d.some(function (k) {
                        return (L = Zc(k), _.r(L, 'includes')).call(L, 'fluid');
                    }) && (e = d.map(function (k) {
                        return (L = Zc(k), _.r(L, 'includes')).call(L, 'fluid') ? 'height' : '0';
                    }), Z(a, 'fluid', e));
                    Z(a, 'fsfs', gf(b, function (k) {
                        var l;
                        k = g[k.j];
                        return Number(null !== (l = null === k || void 0 === k ? void 0 : x(k, 12)) && void 0 !== l ? l : x(f, 13));
                    }, 0));
                    Z(a, 'fsbs', gf(b, function (k) {
                        var l = a.L.P[k.j];
                        k = a.L.U.ya();
                        l = null === l || void 0 === l ? void 0 : l.ya();
                        return (null === l || void 0 === l ? 0 : x(l, 3)) || (null === k || void 0 === k ? 0 : x(k, 3)) ? 1 : 0;
                    }, 0));
                    FB(a, Tf(a.R, b, a.D));
                    gC(a, g[b[0].j]);
                    FB(a, Nf(b, g, c));
                    FB(a, Of(d));
                    b = {};
                    c = _.G(d);
                    for (d = c.next(); !d.done; d = c.next())
                        (d = H(d.value, 7)) && (b[d] = (b[d] || 0) + 1);
                    if (!Rl(b)) {
                        c = new Yb('gpt_sra_setclickurl');
                        var h = [];
                        _.$b(b, function (k, l) {
                            h.push(String(l.length) + ':' + String(k));
                        });
                        q(c, 'lenfreqs', h.join());
                        Zb(c);
                        ac(c, _.Xb(58));
                    }
                }, gC = function (a, b) {
                    (_.v(Sn) ? x(a.L.U, 6) : a.A) || !H(b, 7) || Z(a, 'click', H(b, 7));
                }, hC = function (a, b) {
                    for (var c = 0; c < b.length; c++)
                        if ('' !== b[c]) {
                            for (var d = !1, e = 0; e < a.l.length; e++)
                                if (b[c] === a.l[e]) {
                                    d = !0;
                                    break;
                                }
                            d || a.l.push(b[c]);
                        }
                }, iC = function (a, b) {
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
                }, fC = function (a, b) {
                    var c = '';
                    '' !== b && (b = b.split('/').map(function (d) {
                        return d.replace(/,/g, ':');
                    }), hC(a, b), c = iC(a, b));
                    a.G.push(c);
                }, eC = function (a, b) {
                    var c;
                    b = null !== (c = b.map(function (d) {
                        return cB(a.model, d);
                    })) && void 0 !== c ? c : [];
                    Z(a, 'ucis', b, { Aa: '|' });
                }, ZB = function (a) {
                    _.v(xp) || Z(a, 'a3p', ce(tc(a.da, window)));
                }, Z = function (a, b, c, d) {
                    d = void 0 === d ? {} : d;
                    a.o.has(b) || null == c || a.H.push({
                        Kd: b,
                        value: c,
                        options: d
                    });
                }, FB = function (a, b) {
                    b = _.G(_.r(b, 'entries').call(b));
                    for (var c = b.next(); !c.done; c = b.next()) {
                        var d = _.G(c.value);
                        c = d.next().value;
                        d = d.next().value;
                        Z(a, c, d.value, d.options);
                    }
                }, AB = function (a) {
                    var b = a.value, c = a.options, d = void 0 === c.ha ? !0 : c.ha;
                    a = void 0 === c.Aa ? ',' : c.Aa;
                    c = void 0 === c.ta ? !1 : c.ta;
                    return 'object' !== typeof b ? null == b || !c && 0 === b ? null : jC(b, d) : Array.isArray(b) && b.length ? b.map(function (e) {
                        return jC(e, d);
                    }).join(jC(a, d)) : null;
                }, dC = new _.bd(-9, -9), $B = 0, cC = null, jC = function (a, b) {
                    a = a.toString();
                    return b ? encodeURIComponent(a) : a;
                };
            var mC = function (a) {
                    var b = this;
                    this.j = new D.Map();
                    this.l = new D.Map();
                    this.wb = Kb.N();
                    if (window.performance && Ue(window.performance.now)) {
                        var c = kc(334, function () {
                            for (var d = _.G(b.j), e = d.next(); !e.done; e = d.next()) {
                                var f = _.G(e.value);
                                e = f.next().value;
                                f = f.next().value;
                                kC(b, e, f) && b.j.delete(e);
                            }
                        });
                        _.yd(window, 'DOMContentLoaded', c);
                        Xq(a, dr, function (d) {
                            var e = d.detail;
                            d = e.wc;
                            e = e.P;
                            return void lC(b, (0, J.T)(mw(_.xh(Dh), d)), (0, J.T)(H(e, 20)));
                        });
                        Xq(a, er, function (d) {
                            var e = d.detail;
                            d = e.wc;
                            e = e.P;
                            d = (0, J.T)(mw(_.xh(Dh), d));
                            e = (0, J.T)(H(e, 20));
                            var f = b.l.get(d);
                            null != f ? yA(f, e) : lC(b, d, e);
                        });
                    }
                }, lC = function (a, b, c) {
                    kC(a, b, c) ? a.j.delete(b) : (a.j.set(b, c), _.Ig(b, function () {
                        a.j.delete(b);
                    }));
                }, kC = function (a, b, c) {
                    var d = Wc(b);
                    if (d && 'DIV' === d.nodeName) {
                        var e = _.v(Mp);
                        d = new wA({
                            J: window,
                            wb: a.wb,
                            kb: d,
                            Ba: function (f) {
                                Ub(336, f, 1);
                            },
                            Wd: e
                        });
                        if (d.l)
                            return yA(d, c), a.l.set(b, d), nu(ku.N(), b, function () {
                                return void a.l.delete(b);
                            }), !0;
                    }
                    return !1;
                };
            var nC = function (a, b, c) {
                    for (var d = 100; a && a != b && --d;)
                        _.nm(a, c), a = a.parentElement;
                }, oC = function (a, b, c, d, e) {
                    _.nm(a, {
                        'margin-left': '0px',
                        'margin-right': '0px'
                    });
                    var f = {};
                    _.v(Cn) || (f['z-index'] = '0', 'absolute' !== d.position && 'fixed' !== d.position && 'relative' !== d.position && (f.position = 'relative'));
                    var g = 'rtl' == d.direction, h = ((e && -12245933 !== e.width ? e.width : b.innerWidth) - c) / 2;
                    d = function () {
                        var k = a.getBoundingClientRect().left;
                        return g ? h - k : k - h;
                    };
                    b = d();
                    0 !== b && (c = function (k) {
                        g ? f['margin-right'] = k + 'px' : f['margin-left'] = k + 'px';
                    }, c(-b), _.nm(a, f), d = d(), 0 !== d && b !== d && (c(b / (d - b) * b), _.nm(a, f)));
                    return !0;
                }, qC = function (a, b, c, d, e, f, g, h) {
                    var k = uv(c);
                    c = kc(459, function () {
                        return pC(a, b, d, e, f, k, g, h);
                    });
                    _.F.setTimeout(c, 500);
                }, pC = function (a, b, c, d, e, f, g, h) {
                    if (_.F.IntersectionObserver) {
                        var k = null, l = dw(b, a) || Wc(b, a), m = kc(459, function (n) {
                                if (n = n && n[0]) {
                                    var p = n.boundingClientRect, t = window.innerWidth, u = Math.round(p.left), z = Math.round(p.right), y = 0 > u + 2, K = 0 < z - (t + 2);
                                    if (n.intersectionRatio >= 1 - ((0 <= Math.round(p.left) ? 0 : 2) + (Math.round(p.right) <= window.innerWidth ? 0 : 2)) / d || y || K)
                                        mc(g, function (Q) {
                                            if (y || K) {
                                                var S = new hu();
                                                S.set(8);
                                                rC(l) && S.set(10);
                                                S = iu(S);
                                            } else
                                                S = sC(a, b);
                                            var X = tC(b, l, e), ua = X.zd;
                                            X = X.Cd;
                                            Zb(Q);
                                            q(Q, 'qid', h);
                                            q(Q, 'iu', b.getAdUnitPath());
                                            q(Q, 'e', String(S));
                                            y && q(Q, 'ofl', String(u));
                                            K && q(Q, 'ofr', String(z - t));
                                            q(Q, 'ret', d + 'x' + e);
                                            q(Q, 'req', f);
                                            q(Q, 'bm', String(c));
                                            q(Q, 'efh', Number(ua));
                                            q(Q, 'stk', Number(X));
                                            q(Q, 'ifi', ln(window));
                                        }, { wa: _.lb(Bn) }), k && k.unobserve(l);
                                }
                            });
                        l && (k = new _.F.IntersectionObserver(m, { threshold: [1] }), k.observe(l));
                    }
                }, sC = function (a, b) {
                    var c = dw(b, a) || Wc(b, a), d = new hu();
                    try {
                        var e = function (S, X) {
                                return a.elementsFromPoint(S, X);
                            }, f = c.getBoundingClientRect(), g = f.left, h = f.top, k = f.width, l = f.height, m = Wc(b, a), n = Yc(m, window);
                        if ('hidden' == n.visibility || 'none' == n.display)
                            return iu(d);
                        var p = parseInt(n['border-top-width'] || 0, 10) + 1;
                        b = g + k;
                        l = h + l;
                        var t = e(g + p + 2, h + p);
                        var u = e(b - p - 2, h + p);
                        var z = e(b - p - 2, l - p);
                        var y = e(g + p + 2, l - p);
                        var K = e(b / 2, l - p);
                    } catch (S) {
                        return d.set(1), iu(d);
                    }
                    if (!(t && t.length && u && u.length && z && z.length && y && y.length && K && K.length))
                        return d.set(7), iu(d);
                    e = function (S, X) {
                        for (var ua = !1, ja = 0; ja < S.length; ja++) {
                            var ya = S[ja];
                            if (ua) {
                                var nb = Yc(ya, window);
                                if ('hidden' != nb.visibility && !pm(ya) && !Q(c, ya)) {
                                    d.set(X);
                                    'absolute' == nb.position && d.set(11);
                                    break;
                                }
                            } else
                                c == ya && (ua = !0);
                        }
                    };
                    qm(c) && d.set(9);
                    var Q = function (S, X) {
                        return im(S, X) || im(X, S);
                    };
                    g = t[0];
                    c == g || Q(c, g) || pm(g) || d.set(2);
                    g = u[0];
                    c == g || Q(c, g) || pm(g) || d.set(3);
                    g = z[0];
                    c == g || Q(c, g) || pm(g) || d.set(4);
                    g = y[0];
                    c == g || Q(c, g) || pm(g) || d.set(5);
                    if (pm(c))
                        return iu(d);
                    e(t, 12);
                    e(u, 13);
                    e(z, 14);
                    e(y, 15);
                    e(K, 6);
                    return iu(d);
                }, rC = function (a) {
                    var b = !1, c = !1, d = _.v(Gn);
                    return om(a, function (e) {
                        d = d || 'nowrap' == e.whiteSpace;
                        c = c || 'scroll' == e.overflowX || 'auto' == e.overflowX;
                        return (b = b || 'flex' == e.display) && c && d;
                    });
                }, tC = function (a, b, c) {
                    var d = (a = Wc(a)) && Yc(a, window), e = d ? 'absolute' != d.position : !0, f = !1, g = a && a.parentElement, h = !1;
                    Hf(b, function (k) {
                        var l = k.style;
                        if (e)
                            if (h || (h = k == g))
                                e = ry(k, _.F, !0, -1, -1);
                            else {
                                l = l && l.height;
                                var m = (l && _.r(l, 'endsWith').call(l, 'px') ? parseInt(l, 10) : 0) >= c;
                                !l || m || 'string' === typeof l && _.r(oy, 'includes').call(oy, l) || (e = !1);
                            }
                        f || (k = Yc(k, _.F), 'sticky' != k.position && 'fixed' != k.position) || (f = !0);
                        return !(f && !e);
                    }, 100);
                    return {
                        zd: e,
                        Cd: f
                    };
                }, uC = function (a, b, c) {
                    (L = Zc(b), _.r(L, 'includes')).call(L, 'fluid') && setTimeout(function () {
                        mc('gpt_fluid_sz', function (d) {
                            var e = dw(a, document);
                            e = e ? gn(e) : null;
                            q(d, 'sz', e ? e.width + 'x' + e.height : 'null');
                            q(d, 'qqid', c);
                        });
                    }, 250);
                };
            var vC = new D.Map([[
                        2,
                        { Id: 'page_level_ads' }
                    ]]), wC = function () {
                }, zC;
            wC.N = function () {
                throw Error('Must be overridden');
            };
            _.xC = function (a) {
                this.j = a = void 0 === a ? vC : a;
                this.l = new D.Map();
                this.loaded = new D.Set();
                this.A = null;
            };
            _.N(_.xC, wC);
            _.yC = function (a, b) {
                b = b.module;
                a.l.has(b) || a.l.set(b, new Ee());
                return a.l.get(b);
            };
            zC = function (a, b) {
                var c = b.module;
                b = '_gpt_js_load_' + c + '_';
                var d = kc(340, function (e) {
                    if (a.j.has(c) && 'function' === typeof e) {
                        var f = a.j.get(c);
                        f = (void 0 === f.md ? [] : f.md).map(function (g) {
                            return _.yC(a, g).promise;
                        });
                        D.Promise.all(f).then(function () {
                            e.call(window, _);
                        });
                    }
                });
                Object.defineProperty(Kg(), b, {
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
            _.xC.prototype.load = function (a) {
                var b, c = _.yC(this, a), d = (null !== (b = this.j.get(a.module)) && void 0 !== b ? b : {}).Id;
                if (!d)
                    throw Error('cannot load invalid module: ' + d);
                if (!this.loaded.has(a.module)) {
                    var e = _.Xb(172);
                    e = e && 'pagead2.googlesyndication.com' === Jl((e.src || '').match(_.Il)[3] || null);
                    var f = this.A;
                    d = bj(eb(e ? f.gd(d) : f.hd(d)).toString());
                    d = (e = _.lb(ap)) ? dj(d, { cb: e }) : d;
                    zC(this, a);
                    Ol(document, d);
                    this.loaded.add(a.module);
                }
                return c.promise;
            };
            Bi(_.xC);
            var AC = function (a, b, c, d, e, f, g, h) {
                Y.call(this, 682);
                this.R = a;
                this.format = b;
                this.slotId = c;
                this.J = d;
                this.C = Ot(this);
                this.m = V(this, e);
                this.o = U(this, f);
                this.F = U(this, g);
                this.B = V(this, h);
            };
            _.N(AC, Y);
            AC.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f, g, h, k, l, m, n, p;
                    return B(b, function (t) {
                        d = c;
                        if (2 !== c.format && 3 !== c.format || !Kt(c.m) || !$k(c.m.value, 12, !1))
                            return t.return();
                        e = (0, J.T)(c.B.value);
                        f = e.sd;
                        g = _.pu(c.R, c.slotId);
                        h = c.F.value;
                        k = c.o.value;
                        _.nm(k, {
                            'max-height': '30vh',
                            overflow: 'hidden'
                        });
                        if (BC)
                            BC.xc(k);
                        else {
                            BC = new f(c.format, k, c.J, h, c.R, c.slotId);
                            l = {};
                            m = _.G(I(c.m.value, Sw, 13));
                            for (n = m.next(); !n.done; n = m.next())
                                p = n.value, l[H(p, 1)] = H(p, 2);
                            BC.yc(l);
                            BC.oa();
                            mu(c.R, c.slotId, function () {
                                BC && (BC.va(), BC = null);
                                g && _.ru(d.R, d.slotId);
                            });
                        }
                        _.Ig(c, function () {
                            return _.El(k);
                        });
                        c.C.notify();
                        ni(t);
                    });
                });
            };
            var BC = null;
            var CC = function (a, b, c, d, e, f, g, h) {
                Y.call(this, 683);
                this.slotId = a;
                this.format = b;
                this.O = c;
                this.o = V(this, d);
                this.m = U(this, e);
                this.I = U(this, f);
                this.B = V(this, g);
                this.F = V(this, h);
                this.K = ug(a, vg, function (k) {
                    k = k.detail;
                    try {
                        var l = JSON.parse(k.data);
                        return 'sth' === l.googMsgType && 'i-adframe-load' === l.msg_type;
                    } catch (m) {
                        return !1;
                    }
                });
            };
            _.N(CC, Y);
            CC.prototype.j = function () {
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
                            l = new _.lz();
                            m = new k(window, g, f, l, c.O, '6499' === Ib(c.slotId.getAdUnitPath()), function () {
                                return void d.va();
                            }, c.B.value);
                            _.Tq(c, m);
                            n = I(e, Sw, 13);
                            p = tg(n);
                            m.rb(p);
                            t = _.lb(ro);
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
            var DC = function () {
                this.module = 2;
            };
            DC.prototype.toString = function () {
                return String(this.module);
            };
            _.EC = new DC();
            var FC = function (a, b, c) {
                Y.call(this, 846);
                this.format = a;
                this.C = this.l();
                this.m = V(this, b);
                this.o = V(this, c);
            };
            _.N(FC, Y);
            FC.prototype.j = function () {
                var a;
                return A(this, function c() {
                    var d = this, e, f, g, h;
                    return B(c, function (k) {
                        if (1 == k.j) {
                            e = (2 === d.format || 3 === d.format) && !(null === (a = d.m.value) || void 0 === a || !$k(a, 12, !1));
                            f = 5 === d.format && d.o.value;
                            if (!e && !f) {
                                Ht(d.C);
                                k.j = 0;
                                return;
                            }
                            g = d.C;
                            h = g.j;
                            return C(k, _.xC.N().load(_.EC), 3);
                        }
                        h.call(g, k.l);
                        ni(k);
                    });
                });
            };
            var GC = function (a, b, c) {
                Y.call(this, 696);
                this.slotId = a;
                this.ia = b;
                Qt(this, c);
                this.m = new D.Promise(function (d) {
                    var e = [
                        'canceled',
                        'ha_before_make_visible'
                    ];
                    _.v(ih) || e.push('closed');
                    e = _.G(e);
                    for (var f = e.next(); !f.done; f = e.next())
                        wg(a, f.value).then(d);
                });
            };
            _.N(GC, Y);
            GC.prototype.j = function () {
                return A(this, function b() {
                    var c = this;
                    return B(b, function (d) {
                        switch (d.j) {
                        case 1:
                            return C(d, c.m, 2);
                        case 2:
                            if (c.A)
                                return d.return();
                            if (_.v(ih)) {
                                d.j = 3;
                                break;
                            }
                            return C(d, c.ia.dispatchEvent('rewardedSlotCanceled', 703, new ww(c.slotId, 'publisher_ads')), 3);
                        case 3:
                            return C(d, c.ia.dispatchEvent('rewardedSlotClosed', 703, new xw(c.slotId, 'publisher_ads')), 5);
                        case 5:
                            c.va(), ni(d);
                        }
                    });
                });
            };
            var HC = function (a, b, c) {
                Y.call(this, 697);
                this.slotId = a;
                this.ia = b;
                this.m = wg(a, 'completed');
                Qt(this, c);
            };
            _.N(HC, Y);
            HC.prototype.j = function () {
                return A(this, function b() {
                    var c = this;
                    return B(b, function (d) {
                        if (1 == d.j)
                            return C(d, c.m, 2);
                        if (3 != d.j)
                            return c.A ? d.return() : C(d, c.ia.dispatchEvent('rewardedSlotCompleted', 704, new yw(c.slotId, 'publisher_ads')), 3);
                        c.va();
                        ni(d);
                    });
                });
            };
            var IC = function (a, b, c) {
                Y.call(this, 694);
                this.slotId = a;
                this.ia = b;
                Qt(this, c);
                this.m = wg(a, 'granted');
            };
            _.N(IC, Y);
            IC.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e;
                    return B(b, function (f) {
                        if (1 == f.j)
                            return C(f, c.m, 2);
                        if (3 != f.j)
                            return d = f.l, e = d.payload, c.A ? f.return() : C(f, c.ia.dispatchEvent('rewardedSlotGranted', 702, new vw(c.slotId, 'publisher_ads', null !== e && void 0 !== e ? e : null)), 3);
                        c.va();
                        ni(f);
                    });
                });
            };
            var JC = {
                    width: '100%',
                    height: '100%',
                    left: '0',
                    top: '0'
                }, KC = function (a, b, c, d, e) {
                    Y.call(this, 693);
                    this.J = a;
                    this.F = e;
                    this.C = Ot(this);
                    this.m = U(this, b);
                    this.o = U(this, c);
                    Qt(this, d);
                    this.B = new _.tz(this.J);
                };
            _.N(KC, Y);
            KC.prototype.j = function () {
                var a = this;
                if (!this.F.G) {
                    var b = 0 === rd() ? 'rgba(1,1,1,0.5)' : 'white';
                    _.nm(this.o.value, _.r(Object, 'assign').call(Object, {
                        'background-color': b,
                        opacity: '1',
                        position: 'fixed',
                        margin: '0',
                        padding: '0',
                        'z-index': '2147483647',
                        display: 'block'
                    }, JC));
                    _.Ig(this, _.zz(this.J.document, this.J));
                    Gl(this.m.value).postMessage(JSON.stringify({
                        type: 'rewarded',
                        message: 'visible'
                    }), '*');
                    if (this.J === this.J.top) {
                        this.J.location.hash = 'goog_rewarded';
                        var c = new xz(this.B);
                        null == c.j && (c.j = vz(c.l));
                        _.Ig(this, function () {
                            if (null != c.j) {
                                var d = c.l;
                                delete d.j.maxZIndexRestrictions[c.j];
                                uz(d);
                                c.j = null;
                            }
                            'goog_rewarded' === a.J.location.hash && (a.J.location.hash = '');
                        });
                    }
                    this.C.notify();
                }
            };
            var LC = function (a, b, c) {
                Y.call(this, 695);
                this.J = a;
                this.m = U(this, b);
                Qt(this, c);
            };
            _.N(LC, Y);
            LC.prototype.j = function () {
                if (this.J === this.J.top)
                    var a = Gl(this.m.value), b = zv(this, 503, this.J, 'hashchange', function (c) {
                            gj(c.oldURL, '#goog_rewarded') && (a.postMessage(JSON.stringify({
                                type: 'rewarded',
                                message: 'back_button'
                            }), '*'), b());
                        });
            };
            var MC = function (a, b, c) {
                Y.call(this, 692);
                this.slotId = a;
                this.ia = b;
                this.C = Ot(this);
                this.m = U(this, c);
            };
            _.N(MC, Y);
            MC.prototype.j = function () {
                var a;
                return A(this, function c() {
                    var d = this, e, f, g, h;
                    return B(c, function (k) {
                        if (1 == k.j)
                            return e = d.m.value, f = new Ee(), g = f.promise, h = f.resolve, d.ia.dispatchEvent('rewardedSlotReady', 701, new uw(d.slotId, 'publisher_ads', h, null !== (a = e.payload) && void 0 !== a ? a : null)), C(k, g, 2);
                        if (d.A)
                            return k.return();
                        d.C.notify();
                        d.va();
                        ni(k);
                    });
                });
            };
            var NC = {
                    width: '100%',
                    height: '100%',
                    left: '0',
                    top: '0'
                }, OC = {
                    width: '60%',
                    height: '60%',
                    transform: 'translate(-50%, -50%)',
                    left: '50%',
                    top: '50%'
                }, PC = function (a, b) {
                    Y.call(this, 691);
                    var c = this;
                    this.o = this.l();
                    this.m = Ot(this);
                    this.B = U(this, b);
                    this.F = wg(a, 'prefetched');
                    wg(a, 'ha_before_make_visible').then(function () {
                        return void c.m.notify();
                    });
                };
            _.N(PC, Y);
            PC.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d;
                    return B(b, function (e) {
                        if (1 == e.j) {
                            if (c.m.G)
                                return e.return();
                            _.nm(c.B.value, _.r(Object, 'assign').call(Object, { position: 'absolute' }, 0 === rd() ? OC : NC));
                            return C(e, c.F, 2);
                        }
                        d = e.l;
                        if (c.A)
                            return e.return();
                        c.o.j(d);
                        ni(e);
                    });
                });
            };
            var QC = function (a, b, c, d, e, f) {
                Y.call(this, 688);
                if (4 === b) {
                    this.m = new oe();
                    _.Tq(this, this.m);
                    var g = new PC(a, e);
                    W(this.m, g);
                    b = new MC(a, c, g.o);
                    W(this.m, b);
                    f = new KC(d, e, f, b.C, g.m);
                    W(this.m, f);
                    W(this.m, new LC(d, e, f.C));
                    W(this.m, new IC(a, c, b.C));
                    W(this.m, new GC(a, c, b.C));
                    W(this.m, new HC(a, c, b.C));
                }
            };
            _.N(QC, Y);
            QC.prototype.j = function () {
                var a;
                null === (a = this.m) || void 0 === a ? void 0 : qe(a);
            };
            var xg = '3rd party ad content';
            var RC = function () {
                    this.j = {};
                }, TC = function (a, b, c) {
                    if (!_.v(ep)) {
                        var d;
                        c && (d = '//' + c + '.safeframe.googlesyndication.com');
                        c = Xz(b, mv(), nv(), !0, d);
                        a.j[c] || (a.j[c] = 1, Sy() && !_.v(fp) ? SC(a, c) : Kg().fifWin || (b = b.document, a = b.createElement('IFRAME'), a.src = c, a.style.visibility = 'hidden', a.style.display = 'none', b = b.getElementsByTagName('script'), 0 < b.length && (b = b[b.length - 1], b.parentNode && b.parentNode.insertBefore(a, b.nextSibling))));
                    }
                }, SC = function (a, b) {
                    var c = Ty(document, b, 'prefetch', '');
                    c && _.yd(c, 'load', function () {
                        a.j[b] = 3;
                        c && _.El(c);
                    });
                };
            var UC = function (a, b, c) {
                Y.call(this, 706);
                this.J = a;
                this.C = this.l();
                this.m = V(this, b);
                Qt(this, c);
            };
            _.N(UC, Y);
            UC.prototype.j = function () {
                var a = this.m.value;
                this.C.l(a ? tc(a, this.J) : null);
            };
            var VC = function (a, b, c, d, e) {
                Y.call(this, 876);
                this.I = a;
                this.o = b;
                this.m = this.l();
                this.B = V(this, c);
                this.F = V(this, d);
                this.K = V(this, e);
            };
            _.N(VC, Y);
            VC.prototype.j = function () {
                var a, b;
                return A(this, function d() {
                    var e, f = this, g, h;
                    return B(d, function (k) {
                        e = new ot();
                        g = null === (a = f.I) || void 0 === a ? void 0 : x(a, 9);
                        h = f.K.value;
                        if (null != h) {
                            var l;
                            if (l = !g) {
                                var m = void 0 === m ? !1 : m;
                                if (Xs(h))
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
                                        0 === l ? n = !1 : h.purpose && h.vendor ? (l = h.vendor.consents, (n = !(!l || !l[void 0 === n ? '755' : n])) && h.purposeOneTreatment && ('DE' === h.publisherCC || _.v(op) && 'CH' === h.publisherCC) ? n = !0 : n && (n = h.purpose.consents, n = !(!n || !n['1']))) : n = !0;
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
                            'tcunavailable' === h.tcString ? f.o.info(us('failed')) : f.o.info(us('succeeded'));
                        } else
                            E(e, 5, !g);
                        f.F.value && E(e, 1, f.F.value);
                        null != f.B.value && E(e, 6, f.B.value);
                        f.m.j(e);
                        ni(k);
                    });
                });
            };
            var WC = function (a, b, c, d, e, f) {
                f = void 0 === f ? zg : f;
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
            _.N(WC, Y);
            WC.prototype.j = function () {
                var a, b;
                return A(this, function d() {
                    var e = this, f;
                    return B(d, function (g) {
                        if (1 == g.j) {
                            var h = e.F;
                            h = void 0 === h ? _.F.top : h;
                            h = fm(h, 'googlefcPresent');
                            var k = e.J;
                            k = void 0 === k ? _.F : k;
                            k.googlefc && !h && e.I(e.Ea);
                            if (null !== (b = null === (a = e.B) || void 0 === a ? void 0 : a.value) && void 0 !== b ? !b : !cu(e.o)) {
                                Ht(e.m);
                                g.j = 0;
                                return;
                            }
                            return C(g, fu(e.o, 'loaded'), 3);
                        }
                        f = g.l;
                        e.m.j(f);
                        ni(g);
                    });
                });
            };
            var XC = function (a, b, c, d) {
                Y.call(this, 877);
                this.Ea = a;
                this.o = b;
                this.F = c;
                this.m = this.l();
                this.B = V(this, d);
            };
            _.N(XC, Y);
            XC.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e;
                    return B(b, function (f) {
                        if (1 == f.j)
                            return d = c.B.value, C(f, gu(c.o, d, c.Ea, c.F), 2);
                        e = f.l;
                        c.m.l(e);
                        ni(f);
                    });
                });
            };
            var YC = function (a, b) {
                Y.call(this, 874);
                this.J = a;
                this.m = this.l();
                Qt(this, b);
            };
            _.N(YC, Y);
            YC.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f;
                    return B(b, function (g) {
                        d = c;
                        e = new Ts(c.J, -1);
                        _.Tq(c, e);
                        if (!Vs(e))
                            return Ht(c.m), g.return();
                        Bc().info(ts());
                        f = kc(661, function (h) {
                            d.m.l(h);
                        });
                        Ys(e, f);
                        ni(g);
                    });
                });
            };
            var ZC = function (a, b, c) {
                Y.call(this, 875);
                this.o = a;
                this.J = b;
                this.m = this.l();
                Qt(this, c);
            };
            _.N(ZC, Y);
            ZC.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f;
                    return B(b, function (g) {
                        d = c;
                        e = new Az(c.J);
                        _.Tq(c, e);
                        if (!Cz(e))
                            return Ht(c.m), g.return();
                        f = kc(660, function (h) {
                            h && 'string' === typeof h.uspString ? d.m.j(h.uspString) : Ht(d.m);
                        });
                        c.o.info(ss());
                        Ez(e, f);
                        ni(g);
                    });
                });
            };
            var $C = function (a, b, c) {
                c = void 0 === c ? Eg : c;
                Y.call(this, 883);
                this.B = a;
                this.F = c;
                this.m = Ot(this);
                this.o = U(this, b);
            };
            _.N($C, Y);
            $C.prototype.j = function () {
                return A(this, function b() {
                    var c = this;
                    return B(b, function (d) {
                        if (1 == d.j) {
                            if (!x(c.o.value, 5) || _.v(Pf))
                                return c.m.notify(), d.return();
                            _.v(po) || ez(c.B);
                            if (!c.F()) {
                                hz(null);
                                d.j = 2;
                                return;
                            }
                            return C(d, new D.Promise(function (e) {
                                return void hz(e);
                            }), 2);
                        }
                        c.m.notify();
                        ni(d);
                    });
                });
            };
            var aD = function (a, b, c) {
                Y.call(this, 884);
                this.B = a;
                this.m = Ot(this);
                this.F = V(this, b);
                this.o = U(this, c);
            };
            _.N(aD, Y);
            aD.prototype.j = function () {
                _.xh(gw).l = this.F.value;
                hw(_.xh(gw), qt(this.B, this.o.value));
                Aq(2);
                this.m.notify();
            };
            var bD = function (a, b, c) {
                Y.call(this, 890);
                this.m = a;
                this.console = b;
                this.o = V(this, c);
            };
            _.N(bD, Y);
            bD.prototype.j = function () {
                var a = this;
                we(this.m, this.o.value, function (b, c) {
                    var d, e;
                    Ub(b, c);
                    null === (e = null === (d = a.console) || void 0 === d ? void 0 : d.error) || void 0 === e ? void 0 : e.call(d, c);
                });
            };
            var cD = function (a, b, c) {
                Y.call(this, 910);
                this.m = a;
                this.console = b;
                this.o = V(this, c);
            };
            _.N(cD, Y);
            cD.prototype.j = function () {
                var a = this;
                xe(this.m, og(up).map(function (b) {
                    return { xa: b };
                }), this.o.value, function (b, c) {
                    var d, e;
                    Ub(b, c);
                    null === (e = null === (d = a.console) || void 0 === d ? void 0 : d.error) || void 0 === e ? void 0 : e.call(d, c);
                });
            };
            var dD = function (a) {
                Y.call(this, 896);
                this.o = a;
                this.m = this.l();
            };
            _.N(dD, Y);
            dD.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d;
                    return B(b, function (e) {
                        if (1 == e.j)
                            return C(e, fw(c.o), 2);
                        d = e.l;
                        c.m.j(d);
                        ni(e);
                    });
                });
            };
            var eD = null, fD = !1, gD = !1, hD = !1, iD = function (a) {
                    a = void 0 === a ? _.F : a;
                    if (!gD) {
                        var b = new Yb('gpt_pubconsole_loaded');
                        Zb(b);
                        q(b, 'param', String(Hg(a)));
                        q(b, 'api', String(hD));
                        ac(b, 1);
                        Ol(a.document, bj((/^https?:/i.test('//console.googletagservices.com/pubconsole/') ? '' : 'https:') + '//console.googletagservices.com/pubconsole/loader.js'));
                        gD = !0;
                    }
                }, jD = kc(94, function (a) {
                    a = void 0 === a ? _.F : a;
                    Kg()._pubconsole_disable_ || null !== Hg(a) && iD(a);
                });
            'complete' === _.F.document.readyState ? jD() : Dq(_.F, function () {
                jD();
            });
            dh('disablePublisherConsole', w(93, function () {
                Kg()._pubconsole_disable_ = !0;
            }));
            dh('onPubConsoleJsLoad', w(731, function () {
                fD && (Kg().console.openConsole(eD), eD = null, fD = !1);
            }));
            dh('openConsole', w(732, function (a) {
                a = void 0 === a ? '' : a;
                hD = !0;
                Kg && Kg().console ? Kg().console.openConsole(a) : (a && (eD = a), fD = !0, iD());
            }));
            var kD = function (a, b) {
                Y.call(this, 873);
                this.J = a;
                this.m = U(this, b);
            };
            _.N(kD, Y);
            kD.prototype.j = function () {
                var a = this.m.value, b = this.J;
                !Kg()._pubconsole_disable_ && (a = wc('google_pubconsole', a, b)) && (a = a.split('|'), 0 < a.length && ('1' == a[0] || '0' == a[0]) && iD());
            };
            var lD = function (a, b, c, d) {
                Y.call(this, 885);
                this.L = a;
                this.J = b;
                this.o = c;
                this.B = d;
                this.m = this.l();
            };
            _.N(lD, Y);
            lD.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f, g;
                    return B(b, function (h) {
                        if (1 == h.j) {
                            if (!c.o)
                                return Ht(c.m), h.return();
                            d = c.o;
                            e = d.Ea;
                            f = d.Y;
                            return C(h, mD(c, e, f), 2);
                        }
                        g = h.l;
                        c.m.j(g);
                        ni(h);
                    });
                });
            };
            var mD = function (a, b, c) {
                return A(a, function e() {
                    var f, g, h = this, k, l, m, n, p, t, u, z, y, K, Q, S, X, ua, ja, ya, nb, gb, ub;
                    return B(e, function (ob) {
                        switch (ob.j) {
                        case 1:
                            f = {
                                Y: c,
                                da: null,
                                storage: null
                            };
                            g = new oe();
                            _.Tq(h, g);
                            k = new bu(h.J);
                            _.Tq(h, k);
                            l = new dD(k);
                            W(g, l);
                            m = new WC(b, k, l.m, h.J, h.J.top);
                            W(g, m);
                            n = new XC(b, k, _.Xb(221), m.m);
                            W(g, n);
                            p = new ZC(Bc(), h.J, m.m);
                            W(g, p);
                            t = new YC(h.J, m.m);
                            W(g, t);
                            u = new VC(bv(h.L.U), Bc(), n.m, p.m, t.m);
                            W(g, u);
                            z = new kD(h.J, u.m);
                            W(g, z);
                            y = new $C(_.Xb(150), u.m);
                            W(g, y);
                            if (_.v(ko))
                                return K = new UC(h.J, u.m, y.m), W(g, K), Q = new aD(h.B, K.C, u.m), W(g, Q), _.v(wp) || (S = new bD(Kg(), h.J.console, K.C), W(g, S), X = new cD(Kg(), h.J.console, K.C), W(g, X)), qe(g), C(ob, Q.m.promise, 5);
                            qe(g);
                            return C(ob, y.m.promise, 3);
                        case 5:
                            return ua = f, ja = J, ya = ja.T, C(ob, K.C.promise, 6);
                        case 6:
                            ua.storage = ya.call(ja, ob.l);
                        case 3:
                            return nb = f, gb = J, ub = gb.T, C(ob, u.m.promise, 7);
                        case 7:
                            return nb.da = ub.call(gb, ob.l), ob.return(f);
                        }
                    });
                });
            };
            var nD = new D.Map(), oD = function (a, b) {
                    b = void 0 === b ? nD : b;
                    Y.call(this, 834);
                    this.Y = a;
                    this.m = b;
                    this.o = this.l();
                    this.B = D.Promise.all(this.Y.map(this.F, this));
                };
            _.N(oD, Y);
            oD.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d;
                    return B(b, function (e) {
                        if (1 == e.j)
                            return C(e, c.B, 2);
                        d = e.l;
                        c.o.j(d.filter(function (f) {
                            return null != f && !f.A;
                        }));
                        ni(e);
                    });
                });
            };
            oD.prototype.F = function (a) {
                return A(this, function c() {
                    var d = this, e, f, g, h;
                    return B(c, function (k) {
                        if (1 == k.j) {
                            e = d;
                            f = 1000 * _.lb($o);
                            if (a.A)
                                return k.return(null);
                            if (0 >= f)
                                return k.return(a);
                            d.m.has(a) || (d.m.set(a, Jg(f, a)), _.Ig(a, function () {
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
                        Bc().M(vs(a.getAdUnitPath()));
                        return k.return(null);
                    });
                });
            };
            var pD = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
            var qD = function (a, b) {
                (/^https:/.test(b) || _.Xb(257)) && Kj(a, new sj(b, rj), 'webbundle');
            };
            var rD = function (a, b, c, d, e, f, g, h, k, l) {
                Y.call(this, 866);
                this.O = a;
                this.L = b;
                this.I = c;
                this.o = d;
                this.B = h;
                this.F = k;
                this.withCredentials = l;
                this.m = Ot(this);
                this.X = U(this, e);
                this.K = V(this, f);
                this.W = U(this, g);
            };
            _.N(rD, Y);
            rD.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f, g, h, k, l, m, n, p, t, u;
                    return B(b, function (z) {
                        if (1 == z.j) {
                            if ('wbn' !== c.O)
                                return z.return();
                            d = c.W.value;
                            if (!d.length)
                                return c.m.notify(), z.return();
                            e = _.Dl(document, 'LINK');
                            qD(e, c.X.value);
                            (0, J.T)(e.resources).add(aj(c.o));
                            e.crossOrigin = c.withCredentials ? 'use-credentials' : 'anonymous';
                            f = document.createElement('script');
                            xd(f, c.o);
                            g = (0, J.T)(document.head);
                            g.appendChild(e);
                            g.appendChild(f);
                            h = Lg(c.I);
                            c.m.notify();
                            (0, J.T)(c.K.value)();
                            return C(z, h, 2);
                        }
                        k = z.l;
                        l = k.Vb;
                        m = k.kc;
                        hq(Kb.N(), '4', (0, J.T)(H(c.L.P[d[0].j], 20)));
                        if (l.length !== m.length)
                            throw Error('Received ' + l.length + ' ad URLs, but ' + m.length + ' metadatas');
                        for (n = 0; n < l.length; n++)
                            p = l[n], t = m[n], p && (0, J.T)(e.resources).add(p), c.B(d[n], t, {
                                kind: 1,
                                url: p
                            }, n === d.length - 1);
                        for (u = l.length; u < d.length; ++u)
                            c.F(d[u], u === d.length - 1);
                        ni(z);
                    });
                });
            };
            var sD = function (a, b, c, d, e, f, g) {
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
            _.N(sD, Y);
            sD.prototype.j = function () {
                var a = this, b = this.B;
                !this.I && 1 < this.B.length && (b = [b[0]]);
                b = b.filter(function (c) {
                    var d = a.L.P[c.j];
                    if (gd(a.J) && 4 == ld(d)) {
                        Bc().M(os('googletag.enums.OutOfPageFormat.REWARDED', String(c.getAdUnitPath())));
                        var e = !0;
                    } else
                        e = !1;
                    return !e && !nd(c, d, a.J, a.da);
                });
                30 < b.length && (this.F.M(ks('30', String(b.length), String(b.length - 30))), b = b.slice(0, 30));
                sa(this.o.Y, b) || (this.o.Y = b.slice());
                this.m.j(b);
            };
            var tD = function (a) {
                Y.call(this, 826);
                this.R = a;
                this.C = this.l();
            };
            _.N(tD, Y);
            tD.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e;
                    return B(b, function (f) {
                        if (1 == f.j)
                            return d = c.C, e = d.l, C(f, c.R.l, 2);
                        e.call(d, f.l);
                        ni(f);
                    });
                });
            };
            tD.prototype.G = function () {
                Ht(this.C);
            };
            var uD = function (a, b, c, d, e, f, g, h, k, l, m, n, p) {
                Y.call(this, 785, _.lb(kp));
                this.B = a;
                this.X = b;
                this.R = c;
                this.W = d;
                this.da = e;
                this.L = f;
                this.$ = g;
                this.aa = h;
                this.O = k;
                this.F = l;
                this.m = this.l();
                this.o = Pt(this, l);
                this.I = V(this, m);
                this.K = Pt(this, k);
                this.ca = Pt(this, n);
                Dt(this.D, p, !0);
            };
            _.N(uD, Y);
            uD.prototype.j = function () {
                var a;
                return A(this, function c() {
                    var d = this, e, f, g;
                    return B(c, function (h) {
                        if (1 == h.j) {
                            e = d;
                            if (null === (a = d.I.value) || void 0 === a || !a.length)
                                return d.m.j(''), h.return();
                            f = !_.v(Pf);
                            bB(d.B, Bb(), d.$, d.aa, f ? bz() : '', f ? cz() : '', f ? dz() : '', null === d.K.value ? '0' : d.K.value, d.ca.value);
                            d.o.value && (d.R.lb = d.o.value);
                            g = new yB(d.I.value.slice(), d.X, d.R, d.W, d.B, d.da, d.L, !1);
                            d.m.j(Lb(BB(g)));
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
                            }, { wa: _.lb(co) });
                            d.o.value ? h = C(h, d.F.promise, 4) : (h.j = 0, h = void 0);
                            return h;
                        }
                        mc('gpt_etu', function (k) {
                            var l;
                            Zb(k);
                            q(k, 'sig', null !== (l = e.F.o) && void 0 !== l ? l : -1);
                            q(k, 'req', e.ba);
                        });
                        ni(h);
                    });
                });
            };
            var vD = function (a, b, c, d, e, f) {
                Y.call(this, 798);
                this.R = a;
                this.L = b;
                this.o = c;
                this.B = d;
                this.m = this.l();
                this.I = U(this, e);
                this.F = U(this, f);
            };
            _.N(vD, Y);
            vD.prototype.j = function () {
                for (var a = this, b = new D.Map(), c = _.G(this.F.value), d = c.next(); !d.done; d = c.next()) {
                    d = d.value;
                    var e = Rv(this.L.U) ? wD(this, d) : function () {
                        return a.I.value;
                    };
                    b.set(d, e);
                }
                this.m.j(b);
            };
            var wD = function (a, b) {
                var c = Bb();
                return Xc(function () {
                    var d = new aB();
                    d.j = 'ldjh';
                    d.o = 'fifs';
                    d.Ca = 1;
                    d.Y = [b];
                    d.H = c;
                    d.m = a.B;
                    var e = new ot();
                    d = new yB([b], _.v(Sn), a.R, a.o, d, e, a.L, !0);
                    return Lb(BB(d));
                });
            };
            var xD = function (a) {
                Y.call(this, 802);
                this.J = a;
                this.m = this.l();
            };
            _.N(xD, Y);
            xD.prototype.j = function () {
                var a = this;
                if (_.v(ao)) {
                    var b = function (d) {
                        Ub(a.id, d);
                        a.m.j('0');
                    };
                    try {
                        var c = Ge(this.J);
                        c ? c.then(function (d) {
                            d.length > _.lb(bo) ? b(Error('ML:' + d.length)) : a.m.j(d);
                        }).catch(b) : this.m.j('');
                    } catch (d) {
                        b(d);
                    }
                } else
                    this.m.j('');
            };
            var yD = function (a, b, c, d) {
                Y.call(this, 847);
                this.R = a;
                this.B = b;
                this.o = c;
                this.m = this.l();
                this.F = U(this, d);
            };
            _.N(yD, Y);
            yD.prototype.j = function () {
                var a = this.F.value;
                if (a.length) {
                    for (var b = _.G(a), c = b.next(); !c.done; c = b.next())
                        uu(this.R, c.value);
                    this.o ? Ht(this.m) : this.B ? (b = Ib(a[0].getAdUnitPath()), a = zD(a, b), this.m.j(a)) : (a = a.map(function (d) {
                        return {
                            Ea: Ib(d.getAdUnitPath()),
                            Y: [d]
                        };
                    }), this.m.j(a));
                } else
                    Ht(this.m);
            };
            var zD = function (a, b) {
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
                        Y: e
                    }) : c.push({
                        Ea: d,
                        Y: e
                    });
                }
                return c;
            };
            var AD = function (a, b) {
                Y.call(this, 845);
                this.P = a;
                this.m = this.l();
                this.o = this.l();
                this.B = U(this, b);
            };
            _.N(AD, Y);
            AD.prototype.j = function () {
                var a = this, b = function (d) {
                        d = a.P[d.j];
                        return 0 != Zc(d).length || yf(d, 16);
                    }, c = this.B.value;
                this.m.j(c.filter(b));
                this.o.j(c.filter(Li(b)));
            };
            var BD = function (a, b, c, d) {
                Y.call(this, 864);
                this.R = a;
                this.L = b;
                this.Z = c;
                this.m = Ot(this);
                this.o = U(this, d);
            };
            _.N(BD, Y);
            BD.prototype.j = function () {
                for (var a = _.G(this.o.value), b = a.next(); !b.done; b = a.next())
                    if (b = b.value, _.pu(this.R, b)) {
                        var c = this.L, d = c.U;
                        c = c.P[b.j];
                        var e = void 0, f = void 0;
                        (_.v(Co) ? 0 : null !== (e = null !== (f = x(c, 11)) && void 0 !== f ? f : x(d, 10)) && void 0 !== e && e) && ig(b, this.Z, c, d);
                        uu(this.R, b);
                        f = e = void 0;
                        (_.v(Bo) ? 0 : null !== (e = null !== (f = x(c, 10)) && void 0 !== f ? f : x(d, 11)) && void 0 !== e && e) && ig(b, this.Z, c, d);
                    }
                this.m.notify();
            };
            var CD = function (a, b, c, d, e) {
                Y.call(this, 867);
                this.L = a;
                this.o = b;
                Qt(this, c);
                this.B = U(this, d);
                this.m = U(this, e);
            };
            _.N(CD, Y);
            CD.prototype.j = function () {
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
                            return C(l, g.dispatchEvent(br, d.id, {
                                Cc: k,
                                Rc: h
                            }), 5);
                        case 5:
                            return C(l, d.o.dispatchEvent('slotRequested', 705, new zw(g, 'publisher_ads')), 3);
                        case 3:
                            f = e.next(), l.j = 2;
                        }
                    });
                });
            };
            var DD = function (a, b, c) {
                Y.call(this, 905);
                this.L = a;
                Qt(this, b);
                this.m = U(this, c);
            };
            _.N(DD, Y);
            DD.prototype.j = function () {
                var a;
                return A(this, function c() {
                    var d = this, e, f, g, h;
                    return B(c, function (k) {
                        switch (k.j) {
                        case 1:
                            if (!_.v(so))
                                return k.return();
                            e = _.G(d.m.value);
                            f = e.next();
                        case 2:
                            if (f.done) {
                                k.j = 0;
                                break;
                            }
                            g = f.value;
                            h = null === (a = d.L.P[g.j]) || void 0 === a ? void 0 : ld(a);
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
                            return C(k, _.xC.N().load(_.EC), 7);
                        case 7:
                            return k.return();
                        case 3:
                            f = e.next(), k.j = 2;
                        }
                    });
                });
            };
            var ED = function (a, b, c, d, e, f, g) {
                Y.call(this, 833);
                this.B = c;
                this.o = d;
                this.da = e;
                this.m = f;
                this.window = g;
                Qt(this, a);
            };
            _.N(ED, Y);
            ED.prototype.j = function () {
                var a, b = !_.v(gp) && !(null === (a = this.B) || void 0 === a ? 0 : x(a, 4));
                TC(this.m, this.window, Vv(this.o, this.da));
                b && TC(this.m, this.window);
            };
            var FD = function (a, b, c, d) {
                _.Sq.call(this);
                this.Y = a;
                this.L = b;
                this.D = c;
                this.G = d;
                this.m = '';
                this.j = -1;
                this.state = 1;
                this.l = '';
            };
            _.N(FD, _.Sq);
            var GD = function (a, b) {
                    a.state = 4;
                    Vb(289, b, !0);
                }, HD = function (a) {
                    return '(' + [
                        a.state,
                        a.l.length,
                        a.Y.length
                    ].join('|') + ')';
                };
            var ID = function (a, b, c, d, e, f, g, h, k) {
                h = void 0 === h ? !0 : h;
                Y.call(this, 788, _.lb(Up));
                this.W = a;
                this.L = b;
                this.I = f;
                this.K = g;
                this.withCredentials = h;
                this.o = Ot(this);
                this.F = 0;
                this.B = !1;
                this.m = null !== k && void 0 !== k ? k : new XMLHttpRequest();
                this.$ = U(this, c);
                this.O = V(this, d);
                this.X = U(this, e);
            };
            _.N(ID, Y);
            ID.prototype.j = function () {
                var a = this, b = this.X.value, c = new FD(b, this.L, this.I, this.K);
                _.Tq(this, c);
                'ldjh' === this.W && (b.length ? (this.m.open('GET', this.$.value), this.m.withCredentials = this.withCredentials, MA(this.m), this.m.onreadystatechange = function () {
                    JD(a, c, !1);
                }, this.m.onload = function () {
                    JD(a, c, !0);
                }, this.m.onerror = function () {
                    a.A || GD(c, Error('XHR error'));
                }, this.m.send(), this.o.notify(), (0, J.T)(this.O.value)()) : this.o.notify());
            };
            var JD = function (a, b, c) {
                if (!a.A)
                    try {
                        if (3 === a.m.readyState || 4 === a.m.readyState)
                            if (300 <= a.m.status || 200 > a.m.status && _.v(fo))
                                a.B || a.A || GD(b, Error('xhr_err-' + a.m.status)), a.B = !0;
                            else {
                                var d = a.m.responseText.substr(a.F);
                                if (d && !b.A && 0 !== d.length)
                                    if (1 !== b.state && 2 !== b.state)
                                        GD(b, Error('state err: ' + HD(b)));
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
                                                h.m = k, h.j + 1 >= h.Y.length ? GD(h, Error('too many responses for ' + h.Y.length + ' slots: ' + HD(h))) : (++h.j, h.state = 2);
                                            else {
                                                var l = h;
                                                0 === l.j && hq(Kb.N(), '4', (0, J.T)(H(l.L.P[l.Y[l.j].j], 20)));
                                                try {
                                                    var m = {
                                                        kind: 0,
                                                        ra: ym(k)
                                                    };
                                                    h.D(h.Y[h.j], h.m, m, h.j >= h.Y.length - 1);
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
                                        GD(b, Error('state err at EOS: ' + HD(b)));
                                    else {
                                        b.state = 3;
                                        for (var n = b.j + 1; n < b.Y.length; ++n)
                                            b.G(b.Y[n], n === b.Y.length - 1);
                                    }
                            }
                    } catch (p) {
                        p instanceof Error && !a.A && GD(b, p);
                    }
            };
            var LD = function (a, b, c, d, e) {
                    Y.call(this, 865);
                    this.L = a;
                    this.B = b;
                    this.F = c;
                    Ot(this);
                    this.m = this.l();
                    Qt(this, d);
                    this.o = U(this, e);
                    KD || (KD = _.Mi(function () {
                        ew('gpt-first-ad-request');
                    }));
                }, KD;
            _.N(LD, Y);
            LD.prototype.j = function () {
                var a = this.o.value;
                if (a.length) {
                    hv(a);
                    var b = window, c = new Qh();
                    var d = new Rh();
                    d = Ab(d, 1, this.F, '');
                    Me(b, Oh(Ph(Fb(Db(c, 5, d), 4, 1), 2), this.B));
                    hq(Kb.N(), '3', (0, J.T)(H(this.L.P[a[0].j], 20)));
                    this.m.j(KD);
                } else
                    Ht(this.m);
            };
            var MD = function (a) {
                Y.call(this, 820);
                this.J = a;
                this.C = this.l();
            };
            _.N(MD, Y);
            MD.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f;
                    return B(b, function (g) {
                        if (1 == g.j)
                            return _.v(lp) ? C(g, Qe(c.J), 2) : (c.C.j(''), g.return());
                        d = g.l;
                        e = d.lb;
                        f = d.status;
                        e || mc('gpt_etu', function (h) {
                            Zb(h);
                            q(h, 'rsn', f);
                        });
                        c.C.j(null !== e && void 0 !== e ? e : '');
                        ni(g);
                    });
                });
            };
            var ND = function (a) {
                Y.call(this, 858);
                this.m = a;
                this.C = Ot(this);
            };
            _.N(ND, Y);
            ND.prototype.j = function () {
                return A(this, function b() {
                    var c, d = this, e, f;
                    return B(b, function (g) {
                        switch (g.j) {
                        case 1:
                            g.H = 2;
                            if (_.v(Sp))
                                return e = new IA(function () {
                                }, null, d.m), C(g, RA(e), 7);
                            c = _.Xb(258);
                            return C(g, c, 6);
                        case 6:
                            d.C.notify();
                            g.j = 5;
                            break;
                        case 7:
                            d.C.notify();
                        case 5:
                            Bd(g, 0);
                            break;
                        case 2:
                            f = Cd(g), f instanceof Error && d.V(f), d.C.notify(), ni(g);
                        }
                    });
                });
            };
            var OD = function (a) {
                _.Sq.call(this);
                this.j = a;
                var b = a.size;
                this.l = 'height' === a.td ? 'fluid' : [
                    b.width,
                    b.height
                ];
            };
            _.N(OD, _.Sq);
            OD.prototype.render = function () {
                var a = this.j, b = a.slotId, c = a.L, d = a.Z, e = a.size, f = a.sa, g = a.ub, h = a.Eb, k = a.isBackfill;
                a = a.Xc;
                g && Ie(g, _.Bl(d), null !== h && void 0 !== h ? h : '', !1);
                hq(Kb.N(), '5', (0, J.T)(H(c.P[b.j], 20)));
                b.dispatchEvent(ar, 801, {
                    $b: 0 === f.kind ? f.ra : '',
                    isBackfill: !!k
                });
                c = this.D();
                a && c && c.setAttribute('data-google-container-id', a);
                b.dispatchEvent(cr, 825, { size: e });
                return c;
            };
            OD.prototype.loaded = function (a) {
                var b = this.j, c = b.slotId, d = b.ia;
                b = b.L;
                c.dispatchEvent(fr, 844, void 0);
                a && a.setAttribute('data-load-complete', !0);
                d.dispatchEvent('slotOnload', 710, new sw(c, 'publisher_ads'));
                hq(Kb.N(), '6', (0, J.T)(H(b.P[c.j], 20)));
            };
            OD.prototype.H = function () {
                var a, b = this.j, c = b.slotId;
                b = b.Z;
                _.Sq.prototype.H.call(this);
                null === (a = Wc(c, b)) || void 0 === a ? void 0 : a.removeAttribute('data-google-query-id');
            };
            OD.prototype.G = function (a, b) {
                var c = this, d = this.j, e = d.sa, f = d.Eb, g = d.mb, h = d.bb, k = d.Ra;
                e = 0 === e.kind ? e.ra : '';
                var l = oB(d.Zb, $v(d.slotId), b ? null : e, this.l, function () {
                    c.loaded((0, J.T)(l.j), null !== f && void 0 !== f ? f : '');
                }, a, d.Qb || null, d.Sc || null, !!d.isBackfill, !!d.xd, null !== k && void 0 !== k ? k : null, (0, J.T)(d.L.Rb), (0, J.T)(d.Xc), null !== g && void 0 !== g ? g : '', b, null !== h && void 0 !== h ? h : void 0);
                _.Ig(this, function () {
                    100 != l.status && (2 == l.fa && (bA(l.A), l.fa = 0), window.clearTimeout(l.V), l.V = -1, l.B = 3, l.l && (l.l.va(), l.l = null), l.o && l.j ? l.o.unobserve(l.j) : (_.je(window, 'resize', l.I), _.je(window, 'scroll', l.I)), l.m && l.j && l.m == _.Fl(l.j) && l.m.removeChild(l.j), l.j = null, l.m = null, l.o && (l.o.disconnect(), l.o = null), l.status = 100);
                });
                return l;
            };
            var Pg = function () {
                OD.apply(this, arguments);
            };
            _.N(Pg, OD);
            Pg.prototype.D = function () {
                var a = this.j, b = a.L, c = b.U;
                a = b.P[a.slotId.j];
                b = new Ju();
                c = pv([
                    b,
                    c.ya(),
                    a && a.ya()
                ]);
                c = OD.prototype.G.call(this, c);
                return (0, J.T)(c.j);
            };
            Pg.prototype.loaded = function (a, b) {
                var c = this.j, d = c.slotId;
                c = c.L;
                OD.prototype.loaded.call(this, a, b);
                uC(d, c.P[d.j], b);
            };
            Pg.prototype.m = function () {
                return !1;
            };
            var PD = function () {
                OD.apply(this, arguments);
            };
            _.N(PD, OD);
            var QD = function (a, b) {
                    var c = $v(a.j.slotId), d = a.j.Z;
                    a = xg;
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
                }, RD = function (a, b, c, d, e) {
                    'string' !== typeof c && (b.width = String(c[0]), b.height = String(c[1]));
                    var f = kc(774, function () {
                        a.loaded(b, e);
                        _.je(b, 'load', f);
                    });
                    _.yd(b, 'load', f);
                    _.Ig(a, function () {
                        return _.je(b, 'load', f);
                    });
                    d.appendChild(b);
                };
            var Og = function () {
                PD.apply(this, arguments);
            };
            _.N(Og, PD);
            Og.prototype.D = function () {
                var a = this.j, b = a.sa, c = a.Zb, d = a.Sc, e = a.Eb;
                a = a.mb;
                var f = QD(this, this.l);
                if (null === d || void 0 === d ? 0 : d.length)
                    if (_.ck) {
                        d = _.G(d);
                        for (var g = d.next(); !g.done; g = d.next())
                            f.sandbox.add(g.value);
                    } else
                        f.sandbox.add.apply(f.sandbox, _.ec(d));
                a && (f.allow = a);
                -1 == vj.indexOf('iPhone') && (f.srcdoc = _.Fj(Gj));
                RD(this, f, this.l, c, null !== e && void 0 !== e ? e : '');
                pB(f, b.ra, function () {
                });
                return f;
            };
            Og.prototype.m = function () {
                return !0;
            };
            var Ng = function () {
                PD.apply(this, arguments);
            };
            _.N(Ng, PD);
            Ng.prototype.D = function () {
                var a = this.j, b = a.sa, c = a.Zb, d = a.Eb, e = a.mb;
                a = QD(this, this.l);
                e && (a.allow = e);
                b = b.Zd;
                /^https:/.test(b) && (b = bj(b), a.src = b instanceof cb ? bb(b) : aj(b), a.sandbox = nA.join(' '));
                RD(this, a, this.l, c, null !== d && void 0 !== d ? d : '');
                return a;
            };
            Ng.prototype.m = function () {
                return !1;
            };
            var Mg = function () {
                PD.apply(this, arguments);
            };
            _.N(Mg, PD);
            Mg.prototype.D = function () {
                var a = this.j, b = a.L, c = a.sa;
                a = b.P[a.slotId.j];
                b = pv([
                    b.U.ya(),
                    a && a.ya()
                ]);
                a = QD(this, this.l);
                c = c.url;
                /^urn:uuid:[0-9a-f-]*$/.test(c) && (c = bj(c), a.src = c instanceof cb ? bb(c) : aj(c));
                PD.prototype.G.call(this, b, a);
                return a;
            };
            Mg.prototype.m = function () {
                return !1;
            };
            var SD = function (a, b, c, d, e, f, g, h, k, l, m, n, p, t, u, z, y, K, Q, S, X, ua, ja, ya, nb, gb) {
                Y.call(this, 680);
                this.slotId = a;
                this.R = b;
                this.L = c;
                this.ia = d;
                this.J = e;
                this.m = this.l();
                this.o = this.l();
                this.F = U(this, f);
                Qt(this, h);
                this.aa = U(this, k);
                this.B = U(this, l);
                this.$ = U(this, m);
                this.X = U(this, n);
                Qt(this, X);
                this.I = V(this, p);
                this.K = V(this, t);
                this.O = V(this, u);
                this.na = V(this, z);
                this.W = V(this, y);
                this.ja = V(this, K);
                this.oa = V(this, Q);
                this.ca = V(this, S);
                this.ma = V(this, g);
                Qt(this, ua);
                Qt(this, ja);
                this.ga = U(this, ya);
                Qt(this, nb);
                this.la = V(this, gb);
            };
            _.N(SD, Y);
            SD.prototype.j = function () {
                var a = this, b = this.I.value, c = this.F.value;
                if (0 === c.kind) {
                    var d = null === b || void 0 === b ? void 0 : Ma(b.getHtml());
                    d && (c.ra = d);
                    if (null == c.ra)
                        throw Error('invalid html');
                }
                b = Qg({
                    id: this.X.value,
                    Z: document,
                    slotId: this.slotId,
                    R: this.R,
                    L: this.L,
                    ia: this.ia,
                    size: this.$.value,
                    sa: c,
                    ub: this.aa.value,
                    Zb: this.B.value,
                    Eb: this.K.value,
                    td: this.O.value,
                    Sc: this.na.value,
                    Ra: null === b || void 0 === b ? void 0 : H(b, 2),
                    isBackfill: this.W.value,
                    xd: this.ja.value,
                    Xc: this.oa.value,
                    gf: this.ca.value,
                    Qb: this.ma.value,
                    mb: this.ga.value,
                    bb: this.la.value
                });
                _.Tq(this, b);
                var e = b.render();
                zv(this, this.id, this.J, 'message', function (f) {
                    e.contentWindow === f.source && a.slotId.dispatchEvent(vg, 824, f);
                });
                this.m.j(e);
                this.o.j(b.m());
            };
            var UD = function (a, b, c, d) {
                Y.call(this, 863);
                this.m = b;
                this.Qa = Number(a);
                this.o = U(this, c);
                this.B = U(this, d);
                this.F = TD(this);
            };
            _.N(UD, Y);
            var TD = function (a) {
                return A(a, function c() {
                    var d = this, e;
                    return B(c, function (f) {
                        e = d;
                        return f.return(new D.Promise(function (g) {
                            try {
                                zv(e, e.id, e.m, 'message', function (h) {
                                    var k;
                                    'asmreq' === (null === (k = h.data) || void 0 === k ? void 0 : k.type) && Yg(Lh(qz, h.data.payload), 1) === e.Qa && g(h);
                                });
                            } catch (h) {
                            }
                        }));
                    });
                });
            };
            UD.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f, g, h, k;
                    return B(b, function (l) {
                        if (1 == l.j)
                            return d = Rg(c.m), e = c.o.value, f = c.B.value, C(l, c.F, 2);
                        g = l.l;
                        var m = c.m, n = Rg(m);
                        var p = e.getBoundingClientRect();
                        var t = Pe(m) ? cn(e, m) : {
                            x: 0,
                            y: 0
                        };
                        m = t.x;
                        t = t.y;
                        p = new _.Hm(t, m + p.right, t + p.bottom, m);
                        m = new sz();
                        m = E(m, 1, p.top);
                        m = E(m, 3, p.bottom);
                        m = E(m, 2, p.left);
                        p = E(m, 4, p.right);
                        m = new rz();
                        m = E(m, 1, c.Qa);
                        m = E(m, 2, !f);
                        p = Db(m, 3, p);
                        p = E(p, 4, d);
                        h = E(p, 5, n);
                        k = {
                            type: 'asmres',
                            payload: gl(h)
                        };
                        g.ports[0].postMessage(k);
                        ni(l);
                    });
                });
            };
            var VD = function (a, b, c, d, e, f, g, h, k, l, m) {
                Y.call(this, 699);
                this.Z = a;
                this.slotId = b;
                this.ka = c;
                this.Ya = d;
                this.C = Ot(this);
                this.F = V(this, e);
                this.K = U(this, f);
                this.o = U(this, g);
                this.I = U(this, h);
                this.m = V(this, k);
                this.O = U(this, l);
                this.B = U(this, m);
            };
            _.N(VD, Y);
            VD.prototype.j = function () {
                var a, b = this.K.value, c = this.o.value;
                c.style.width = '';
                c.style.height = '';
                if ('height' !== this.F.value) {
                    var d = null !== (a = this.m.value) && void 0 !== a ? a : 0, e = this.I.value, f = this.O.value, g = this.B.value, h = !1;
                    switch (d) {
                    case 1:
                    case 2:
                        h = this.Z;
                        var k = this.slotId, l = this.ka, m = this.Ya;
                        var n = e.width, p = e.height, t = 0;
                        var u = 0;
                        var z = Zc(l);
                        z = _.G(z);
                        for (var y = z.next(); !y.done; y = z.next())
                            if (y = y.value, Array.isArray(y)) {
                                var K = _.G(y);
                                y = K.next().value;
                                K = K.next().value;
                                t < y && (t = y);
                                u < K && (u = K);
                            }
                        u = [
                            t,
                            u
                        ];
                        t = u[0] < n;
                        p = u[1] < p;
                        t || p ? (u = n + 'px', z = {
                            'max-height': 'none',
                            'max-width': u,
                            padding: '0px',
                            width: u
                        }, p && (z.height = 'auto'), nC(c, b, z), c = {}, t && n > parseInt(f.width, 10) && (c.width = u, c['max-width'] = u), p && (c.height = 'auto', c['max-height'] = 'none'), Rl(c) ? c = !1 : (c['padding-' + ('ltr' == f.direction ? 'left' : 'right')] = '0px', _.nm(b, c), c = !0)) : c = !1;
                        b:
                            switch (p = e.width, n = h.defaultView || h.parentWindow || _.F, d) {
                            case 2:
                                b = oC(b, n, p, f, m);
                                break b;
                            case 1:
                                if (f = b.parentElement)
                                    if (m = Qv(f)) {
                                        K = m.width;
                                        m = Wc(k, n.document);
                                        t = Yc(m, n);
                                        u = t.position;
                                        var Q = parseInt(t.width, 10) || 0;
                                        z = Yc(f, n);
                                        y = 'rtl' == z.direction ? 'Right' : 'Left';
                                        m = y.toLowerCase();
                                        n = 'absolute' == u ? 0 : parseInt(z['padding' + y], 10);
                                        z = parseInt(z['border' + y + 'Width'], 10);
                                        var S = rm(t);
                                        y = (S && S[4] || 0) * ('Right' == y ? -1 : 1);
                                        p = Math.max(Math.round((K - Math.max(Q, p)) / 2), 0);
                                        K = {};
                                        Q = S && S[3] || 1;
                                        if (1 != (S && S[0] || 1) || 1 != Q)
                                            S[0] = 1, S[3] = 1, K.transform = 'matrix(' + S.join(',') + ')';
                                        S = 0;
                                        switch (u) {
                                        case 'fixed':
                                            if (_.v(Hn)) {
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
                                        K['margin-' + m] = p - n - z - S - y + 'px';
                                        _.nm(b, K);
                                        b = !0;
                                    } else
                                        b = !1;
                                else
                                    b = !1;
                                break b;
                            default:
                                b = !1;
                            }
                        c || b ? (qC(h, k, l, d, e.width, e.height, 'gpt_slotexp', g), h = !0) : h = !1;
                        break;
                    case 3:
                        d = this.Z, h = this.slotId, k = this.ka, X = this.Ya, l = e.width, ja = e.height, ja >= (parseInt(f.height, 10) || 0) || 'none' == f.display || 'hidden' == f.visibility || !X || -12245933 === X.width || b.getBoundingClientRect().bottom <= X.height ? h = !1 : (X = { height: ja + 'px' }, nC(c, b, X), _.nm(b, X), qC(d, h, k, 3, l, ja, 'gpt_slotred', g), h = !0);
                    }
                    !h && _.v(Fn) && qC(this.Z, this.slotId, this.ka, 0, e.width, e.height, 'gpt_pgbrk', g);
                }
                this.C.notify();
            };
            var WD = function (a, b, c, d, e, f) {
                Y.call(this, 686);
                this.J = a;
                this.slotId = b;
                this.o = c;
                this.Hb = f;
                this.B = V(this, d);
                this.m = U(this, e);
            };
            _.N(WD, Y);
            WD.prototype.j = function () {
                var a, b;
                return A(this, function d() {
                    var e = this, f, g, h, k, l, m, n, p, t, u, z;
                    return B(d, function (y) {
                        if (1 == y.j) {
                            f = e.B.value;
                            g = null === f || void 0 === f ? void 0 : H(f, 1);
                            h = null === f || void 0 === f ? void 0 : al(f, 2, 1);
                            k = null !== (a = null === f || void 0 === f ? void 0 : H(f, 3)) && void 0 !== a ? a : 0;
                            l = null !== (b = null === f || void 0 === f ? void 0 : x(f, 5)) && void 0 !== b ? b : !1;
                            if (!g || !h)
                                return y.return();
                            m = new Ee();
                            n = m.resolve;
                            p = m.promise;
                            t = e.m.value;
                            u = XA({
                                J: e.J,
                                element: t,
                                Xd: 0 === e.o,
                                Vc: k,
                                Yd: g,
                                Xb: function () {
                                    return void n(!0);
                                },
                                options: { threshold: h },
                                Jc: l,
                                qd: function (K) {
                                    Vb(615, K, !0);
                                },
                                Hb: e.Hb
                            });
                            _.Ig(e, function () {
                                u();
                                n(!1);
                            });
                            return C(y, p, 2);
                        }
                        (z = y.l) ? y = C(y, e.slotId.dispatchEvent(Yq, 614, void 0), 0) : (y.j = 0, y = void 0);
                        return y;
                    });
                });
            };
            var XD = function (a, b, c, d, e) {
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
                this.X = V(this, e);
            };
            _.N(XD, Y);
            var YD = function (a) {
                a.F.l(a.K.value);
                a.m.l(a.O.value);
                a.o.l(a.I.value);
                Ht(a.W);
                Ht(a.B);
            };
            XD.prototype.j = function () {
                var a, b, c, d, e, f, g, h = this.X.value, k = this.I.value;
                if (_.v(In) && h) {
                    var l = null !== (b = null === (a = (L = I(this.ka, $e, 21), _.r(L, 'find')).call(L, function (u) {
                        return H(u, 1) === h;
                    })) || void 0 === a ? void 0 : M(a, Ac, 2)) && void 0 !== b ? b : null;
                    if (!l)
                        throw Error('Could not find bid with id: ' + h);
                    this.W.j(l);
                    if (1 !== H(l, 11))
                        YD(this);
                    else {
                        var m = H(l, 7), n = H(l, 12), p = null !== (d = null === (c = M(l, Mc, 5)) || void 0 === c ? void 0 : H(c, 2)) && void 0 !== d ? d : this.K.value, t = null !== (f = null === (e = M(l, Mc, 5)) || void 0 === e ? void 0 : H(e, 1)) && void 0 !== f ? f : this.O.value;
                        if (!m && !n)
                            throw Error('Could not find ad to render for bid id: ' + h);
                        l = null !== (g = H(l, 2)) && void 0 !== g ? g : 0;
                        m = {
                            ad: Sg(m, l),
                            adUrl: Sg(n, l),
                            adId: h,
                            width: t,
                            height: p
                        };
                        m = btoa(JSON.stringify(m));
                        0 === (null === k || void 0 === k ? void 0 : k.kind) ? (this.o.j({
                            kind: 0,
                            ra: k.ra.replace(new RegExp('{{GOOGLE_PBJS_AD_CONFIG}}'.replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g, '\\$1').replace(/\x08/g, '\\x08'), 'g'), m.replace(/\$/g, '$$$$'))
                        }), Ht(this.B)) : (this.o.l(k), this.B.l(m));
                        this.F.l(null !== p && void 0 !== p ? p : null);
                        this.m.l(null !== t && void 0 !== t ? t : null);
                        window.postMessage(JSON.stringify({
                            message: 'Prebid Request',
                            adId: h
                        }), '*');
                    }
                } else
                    YD(this);
            };
            var ZD = function (a, b, c, d) {
                Y.call(this, 720);
                this.format = a;
                this.B = b;
                this.C = this.l();
                this.m = V(this, c);
                this.o = V(this, d);
            };
            _.N(ZD, Y);
            ZD.prototype.j = function () {
                var a = this.o.value;
                if (null == a)
                    Ht(this.C);
                else {
                    var b = Math.round(0.3 * this.B);
                    2 !== this.format && 3 !== this.format || !Kt(this.m) || !$k(this.m.value, 12, !1) || 0 >= b || a <= b ? this.C.j(a) : this.C.j(b);
                }
            };
            var $D = function (a, b, c, d, e, f, g, h, k, l) {
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
            _.N($D, Y);
            $D.prototype.j = function () {
                var a = yv(this.U, this.ka), b = Wv(this.slotId, this.Z) || nB(this.Z, this.m.value, aw(this.slotId), a);
                this.I.value && !a && (b.style.display = 'inline-block');
                this.B ? mu(this.R, this.slotId, function () {
                    return void _.El(b);
                }) : _.Ig(this, function () {
                    return void _.El(b);
                });
                a = aE(this);
                0 < a && (b.style.paddingTop = a + 'px');
                this.C.j(b);
            };
            var aE = function (a) {
                var b, c, d, e = a.m.value, f = null === (b = (0, J.T)(a.F).value) || void 0 === b ? void 0 : b.height;
                if (!e || (0, J.T)(a.o).value || !f)
                    return 0;
                var g = a.U, h;
                return (null != (h = x(a.ka, 23)) ? h : x(g, 31)) ? Math.floor((e.offsetHeight - f) / 2) : _.v(zo) && (a = Yc(e, window), a = null === (d = null === (c = null === a || void 0 === a ? void 0 : a.minHeight) || void 0 === c ? void 0 : c.match(/^([0-9]+)px$/)) || void 0 === d ? void 0 : d[1]) ? Math.floor((Number(a) - f) / 2) : 0;
            };
            var bE = function (a) {
                Y.call(this, 859);
                this.J = a;
                this.C = this.l();
            };
            _.N(bE, Y);
            bE.prototype.j = function () {
                this.C.j(!Pe(this.J.top));
            };
            var cE = function (a, b) {
                Y.call(this, 698);
                this.J = a;
                this.C = this.l();
                this.m = U(this, b);
            };
            _.N(cE, Y);
            cE.prototype.j = function () {
                this.C.l(Yc(this.m.value, this.J));
            };
            var dE = function (a, b, c) {
                Y.call(this, 813);
                this.Ea = a;
                this.m = this.l();
                this.B = V(this, b);
                this.o = V(this, c);
            };
            _.N(dE, Y);
            dE.prototype.j = function () {
                var a;
                if (!_.v(Ap) || _.v(wp))
                    this.m.j(!1);
                else if (_.v(vp) && !_.Xb(254))
                    this.m.j(!1);
                else {
                    var b = this.B.value;
                    if (b)
                        if (eE.has(this.Ea))
                            this.m.j(!1);
                        else {
                            eE.add(this.Ea);
                            b = _.G(b);
                            for (var c = b.next(); !c.done; c = b.next()) {
                                var d = c.value;
                                c = d.xa;
                                (d = d.Ic) && ye(c, d, null !== (a = this.o.value) && void 0 !== a ? a : null);
                            }
                            this.m.j(!0);
                        }
                }
            };
            var eE = new D.Set();
            var fE = function (a) {
                Y.call(this, 840);
                this.Z = a;
                this.C = this.l();
            };
            _.N(fE, Y);
            fE.prototype.j = function () {
                var a;
                if (_.v(Cp)) {
                    var b = void 0 === b ? window.navigator.userAgent : b;
                    b = (b = b.match(/Chrome\/([0-9]+)/)) && 92 > Number(b[1]) ? 'conversion-measurement' : 'attribution-reporting';
                } else
                    b = 'conversion-measurement';
                _.v(Bp) && (null === (a = this.Z.featurePolicy) || void 0 === a ? 0 : (L = a.features(), _.r(L, 'includes')).call(L, b)) ? this.C.j(b) : this.C.j('');
            };
            var gE = function (a, b, c, d, e, f, g) {
                Y.call(this, 758);
                this.slotId = a;
                this.L = b;
                this.R = c;
                this.wb = d;
                this.J = e;
                this.Z = f;
                this.m = V(this, g);
            };
            _.N(gE, Y);
            gE.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e;
                    return B(b, function (f) {
                        if (1 == f.j) {
                            var g, h = Wc(c.slotId, c.Z);
                            h && Ie(h, c.J, null !== (g = c.m.value) && void 0 !== g ? g : '', !0);
                            hq(c.wb, '5', (0, J.T)(H(c.L.P[c.slotId.j], 20)));
                            d = c.slotId;
                            return C(f, d.dispatchEvent(ar, 801, {
                                $b: null,
                                isBackfill: !1
                            }), 2);
                        }
                        e = _.v(eo);
                        var k, l, m;
                        if (_.pu(c.R, c.slotId)) {
                            var n = c.L;
                            g = n.U;
                            n = n.P[c.slotId.j];
                            var p = null !== (k = null !== (h = x(n, 11)) && void 0 !== h ? h : x(g, 10)) && void 0 !== k ? k : !1;
                            e && (wu(c.R, c.slotId), p && ig(c.slotId, c.Z, n, g), uu(c.R, c.slotId));
                            !e && dw(c.slotId, c.Z) || null === (m = null !== (l = x(n, 10)) && void 0 !== l ? l : x(g, 11)) || void 0 === m || !m || _.v(Bo) || ig(c.slotId, c.Z, n, g);
                        }
                        return C(f, d.dispatchEvent(cr, 825, {
                            isEmpty: !0,
                            slotContentChanged: e
                        }), 0);
                    });
                });
            };
            var hE = function (a, b, c, d, e) {
                Y.call(this, 721);
                this.J = a;
                this.F = V(this, b);
                this.o = U(this, c);
                this.m = U(this, d);
                this.B = U(this, e);
            };
            _.N(hE, Y);
            hE.prototype.j = function () {
                var a = this, b, c, d, e = this.F.value, f = null === (b = null === e || void 0 === e ? void 0 : H(e, 1)) || void 0 === b ? void 0 : b.toUpperCase();
                e = null === (c = null === e || void 0 === e ? void 0 : H(e, 2)) || void 0 === c ? void 0 : c.toUpperCase();
                if (f && e) {
                    var g = this.o.value, h = this.m.value, k = this.B.value, l = k.style.height, m = k.style.width, n = k.style.display, p = k.style.position, t = Em(g.id + '_top', f), u = Em(g.id + '_bottom', e);
                    _.nm(u, {
                        position: 'relative',
                        top: 'calc(100vh - 48px)'
                    });
                    k.appendChild(t);
                    k.appendChild(u);
                    _.nm(h, {
                        position: 'absolute',
                        top: '24px',
                        clip: 'rect(0, auto, auto, 0)',
                        width: '100vw',
                        height: 'calc(100vh - 48px)'
                    });
                    _.nm(g, {
                        position: 'fixed',
                        top: '0',
                        height: '100vh'
                    });
                    _.nm(k, {
                        position: 'relative',
                        display: (null === (d = this.J.screen.orientation) || void 0 === d ? 0 : d.angle) ? 'none' : 'block',
                        width: '100vw',
                        height: '100vh'
                    });
                    zv(this, 722, this.J, 'orientationchange', function () {
                        var z;
                        (null === (z = a.J.screen.orientation) || void 0 === z ? 0 : z.angle) ? _.nm(k, { display: 'none' }) : _.nm(k, { display: 'block' });
                    });
                    _.Ig(this, function () {
                        _.El(t);
                        _.El(u);
                        k.style.position = p;
                        k.style.height = l;
                        k.style.width = m;
                        k.style.display = n;
                    });
                }
            };
            var iE = function (a, b, c, d, e) {
                e = void 0 === e ? Ug : e;
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
                this.W = _.Mi(function () {
                    f.ia.dispatchEvent('impressionViewable', 715, new qw(f.slotId, 'publisher_ads'));
                });
                this.X = Ni(function () {
                    return void f.ia.dispatchEvent('slotVisibilityChanged', 716, new rw(f.slotId, 'publisher_ads', f.o));
                }, 200);
                this.I = U(this, b);
                this.K = ug(this.slotId, fr);
            };
            _.N(iE, Y);
            iE.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e, f, g, h;
                    return B(b, function (k) {
                        if (1 == k.j)
                            return d = c, _.v(Mo) || _.v(No) ? _.v(Oo) ? (k.j = 2, k = void 0) : k = C(k, c.K, 2) : k = k.return(), k;
                        if (c.A)
                            return k.return();
                        e = c.I.value;
                        f = _.v(No) ? Ki : function (l) {
                            l = _.G(l);
                            for (var m = l.next(); !m.done; m = l.next())
                                d.B = 100 * m.value.intersectionRatio, jE(d);
                        };
                        g = kc(c.id, f);
                        h = c.O(g);
                        h.observe(e);
                        zv(c, c.id, c.Z, 'visibilitychange', function () {
                            jE(d);
                        });
                        _.Ig(c, function () {
                            h.disconnect();
                        });
                        _.v(Po) && setTimeout(function () {
                            return void h.disconnect();
                        }, 3600000);
                        ni(k);
                    });
                });
            };
            var jE = function (a) {
                    var b = !Bt(a.Z);
                    kE(a, 50 <= a.B && b);
                    b = b ? a.B : 0;
                    _.r(Number, 'isFinite').call(Number, b) && (b = Math.floor(b), 0 > b || 100 < b || b === a.o || null === a.o && 0 === b || (a.o = b, a.X()));
                }, kE = function (a, b) {
                    a.F || (b ? null === a.m && (a.m = setTimeout(function () {
                        Bt(a.Z) || (a.W(), a.F = !0);
                        a.m = null;
                    }, 1000)) : null !== a.m && (clearTimeout(a.m), a.m = null));
                };
            var lE = function () {
                Y.call(this, 663);
                this.C = Ot(this);
            };
            _.N(lE, Y);
            lE.prototype.j = function () {
                return A(this, function b() {
                    var c = this;
                    return B(b, function (d) {
                        if (1 == d.j) {
                            var e = mE ? 0 : _.lb(uo), f = _.lb(to);
                            e = Math.max(e, f);
                            0 < e && (mE = !0, kg(e));
                            return C(d, nE(c), 2);
                        }
                        c.C.notify();
                        ni(d);
                    });
                });
            };
            var nE = function (a) {
                    return A(a, function c() {
                        var d;
                        return B(c, function (e) {
                            d = _.lb(vo);
                            0 < d ? e = C(e, Vg(d), 0) : (e.j = 0, e = void 0);
                            return e;
                        });
                    });
                }, mE = !1;
            var oE = function (a, b) {
                Y.call(this, 666);
                this.o = a;
                this.m = this.l();
                this.B = V(this, b);
            };
            _.N(oE, Y);
            oE.prototype.j = function () {
                var a = new Xu();
                Kt(this.B) && (E(a, 2, this.B.value), E(a, 3, 1));
                if (this.o) {
                    var b = [
                            this.o,
                            a
                        ], c = new Xu();
                    b = _.G(b);
                    for (a = b.next(); !a.done; a = b.next()) {
                        a = a.value;
                        if (yf(a, 1)) {
                            var d = H(a, 1);
                            E(c, 1, d);
                        }
                        yf(a, 2) && (d = H(a, 2), E(c, 2, d));
                        yf(a, 3) && (a = fe(a, 3), E(c, 3, a));
                    }
                    a = c;
                }
                c = this.m;
                b = c.l;
                a = yf(a, 2) ? yf(a, 3) && 0 !== rd() ? H(a, 2) * fe(a, 3) : H(a, 2) : null;
                b.call(c, a);
            };
            var pE = function (a, b, c, d) {
                Y.call(this, 666);
                this.C = this.l();
                Qt(this, a);
                this.m = U(this, b);
                this.o = V(this, d);
                this.B = V(this, c);
            };
            _.N(pE, Y);
            pE.prototype.j = function () {
                var a, b = this.o.value, c = null !== (a = this.B.value) && void 0 !== a ? a : void 0;
                if (null == b || 0 > b || 0 === c)
                    this.C.j(!1);
                else {
                    var d = this.m.value;
                    ad(d) ? qE(this, b, c, d) : this.C.j(!1);
                }
            };
            var qE = function (a, b, c, d) {
                var e = Wg(b + '%', kc(291, function (f, g) {
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
                _.Ig(a, function () {
                    e.disconnect();
                });
            };
            var rE = function (a, b, c, d, e) {
                Y.call(this, 713);
                this.Qa = a;
                this.m = b;
                this.B = e;
                this.o = V(this, c);
                this.F = U(this, d);
            };
            _.N(rE, Y);
            rE.prototype.j = function () {
                var a = this;
                if (!Re(this.o.value) && this.m.getOseId()) {
                    var b = this.F.value, c = ZA(this.m), d = _.v(Mo) ? Ki : kc(this.id, function (e, f) {
                            0 <= f && a.B(e, f);
                            return null;
                        });
                    c.registerAdBlock('?eid=' + Bb().join(',') + '&adk=' + this.Qa, 3, 'ldjh', b, 0, 0, d);
                    _.Ig(this, function () {
                        try {
                            c.unloadAdBlock(b, !1, !1);
                        } catch (e) {
                        }
                    });
                }
            };
            var sE = function (a, b, c, d, e, f) {
                Y.call(this, 664);
                this.slotId = a;
                this.Ya = b;
                this.R = c;
                this.C = Ot(this);
                Qt(this, d);
                this.o = V(this, e);
                this.m = V(this, f);
            };
            _.N(sE, Y);
            sE.prototype.j = function () {
                var a = this, b, c = null !== (b = this.m.value) && void 0 !== b ? b : 0;
                if (_.v(oo) || 0 < c) {
                    var d = document;
                    c = At(d);
                    if (Bt(d) && c && (0 < Sf(this.R, this.slotId) || !tE(this)) && c) {
                        var e = zv(this, 324, d, c, function () {
                            Bt(d) || (e && e(), a.C.notify());
                        });
                        if (e)
                            return;
                    }
                }
                this.C.notify();
            };
            var tE = function (a) {
                var b = a.o.value, c;
                if (c = null != b)
                    try {
                        var d = Is(top.document, top).y, e = d + a.Ya.height;
                        c = b.y >= d && b.y <= e;
                    } catch (f) {
                        c = !0;
                    }
                return c;
            };
            var uE = function (a, b) {
                Y.call(this, 912);
                this.googletag = b;
                this.m = U(this, a);
            };
            _.N(uE, Y);
            uE.prototype.j = function () {
                if (_.v(Yo)) {
                    var a = _.r(this.m.value, 'find').call(this.m.value, function (b) {
                        return 1 === H(b, 3);
                    });
                    a && (a = H(a, 2)) && (a = this.googletag.defineOutOfPageSlot(a, 5)) && (a.addService(this.googletag.pubads()), this.googletag.display(a));
                }
            };
            var vE = function (a, b) {
                Y.call(this, 762);
                this.C = this.l();
                this.o = U(this, a);
                this.m = U(this, b);
            };
            _.N(vE, Y);
            vE.prototype.j = function () {
                var a = this.m.value.kind, b = 0;
                1 === a ? b = 5 : 2 === a ? b = 6 : this.o.value && (b = 1);
                this.C.j(b);
            };
            var wE = function (a, b, c, d, e, f) {
                Y.call(this, 669);
                this.U = a;
                this.P = b;
                this.J = c;
                this.C = this.l();
                this.m = V(this, d);
                this.o = V(this, e);
                this.B = V(this, f);
            };
            _.N(wE, Y);
            wE.prototype.j = function () {
                var a;
                if (!(a = Kt(this.o))) {
                    a = this.P;
                    var b = this.J;
                    b = void 0 === b ? window : b;
                    a = !!(Cq(zn) || a && yf(a, 16) && Ob('google_range_debug', b));
                }
                a ? this.C.j(!0) : (a = (Re(this.m.value) ? x(this.P, 12) || x(this.U, 13) : !1) || !!this.B.value, this.C.j(!!a));
            };
            var xE = function (a, b, c, d, e, f, g) {
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
            _.N(xE, Y);
            xE.prototype.j = function () {
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
                        (null === m || void 0 === m ? 0 : yf(m, 4)) ? l = x(m, 4) : (null === n || void 0 === n ? 0 : yf(n, 4)) ? l = x(n, 4) : null != k && (l = k);
                        p = String(l);
                        null == k || k === l || d.m.value || Bc().M(rs(p, String(k)));
                        d.m.value || mc('gpt_sf_r', function (z) {
                            Zb(z);
                            q(z, 'GAM', String(k));
                            q(z, 'Final', p);
                        });
                        t = d.m.value || l || null == l;
                        if (!t)
                            return Ht(d.C), u.return();
                        d.C.j(Vv(d.o, d.da));
                        ni(u);
                    });
                });
            };
            var yE = function (a, b, c, d, e, f) {
                Y.call(this, 719);
                this.U = a;
                this.ka = b;
                this.C = this.l();
                this.o = U(this, c);
                this.m = V(this, d);
                this.B = V(this, f);
            };
            _.N(yE, Y);
            yE.prototype.j = function () {
                var a = this.m.value, b = this.o.value;
                if (1 === b || 5 === b) {
                    if (a = this.B.value, b = new Ju(), a = E(b, 3, a), x(pv([
                            a,
                            this.U.ya(),
                            this.ka.ya()
                        ]), 3)) {
                        this.C.j(nA);
                        return;
                    }
                } else {
                    if (a = 0 === b && a)
                        a = em(), a = !(!a['allow-top-navigation-by-user-activation'] || !a['allow-popups-to-escape-sandbox']);
                    if (a) {
                        this.C.j(nA);
                        return;
                    }
                }
                Ht(this.C);
            };
            var zE = function (a, b, c, d, e, f, g, h, k) {
                Y.call(this, 681);
                this.adUnitPath = a;
                this.ka = b;
                this.O = c;
                this.window = d;
                this.F = this.l();
                this.m = this.l();
                this.B = this.l();
                this.o = Cq(zn).split(',');
                this.I = og(An);
                this.Sa = yf(b, 16) ? M(b, Zf, 16) : null;
                this.K = Nb('google_range_debug', this.window);
                this.W = V(this, e);
                this.ca = V(this, f);
                this.$ = V(this, g);
                this.X = U(this, h);
                this.aa = U(this, k);
            };
            _.N(zE, Y);
            zE.prototype.j = function () {
                var a;
                if (a = !!(this.o.length || this.Sa && this.K)) {
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
                    a = c ? AE(this) : null;
                    if (c && a) {
                        c = this.aa.value;
                        var d = Qv(c.parentElement);
                        d = null !== (b = null === d || void 0 === d ? void 0 : d.width) && void 0 !== b ? b : 0;
                        b = 'p' === this.o[0];
                        var e = Number(this.o[0]);
                        if (b = 'f' === this.o[0] ? this.O : e && 0 < e ? e : b ? Math.min(d, this.O) : null) {
                            e = a.width;
                            var f = a.height, g = this.o[1], h = Number(g);
                            e = 'ratio' === g && e ? Math.floor(f / e * b) : h && 0 < h ? f * h : f;
                            BE(this, b, e, {
                                kind: 0,
                                ra: CE(b, e, '<p>Requested size:' + a.width + 'x' + a.height + '</p>')
                            }, b <= d ? 1 : 2, c);
                            a = !0;
                        } else
                            a = !1;
                    } else
                        a = !1;
                    if (!a)
                        a:
                            if (this.Sa && this.K) {
                                a = Vf(this.Sa, this.window);
                                c = Wf(this.Sa, this.window);
                                d = Xf(this.Sa);
                                b = Yf(this.Sa);
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
                                BE(this, e, f, {
                                    kind: 0,
                                    ra: CE(e, f, '<p>Minimum size:' + d + 'x' + b + '</p><p>Maximum size:' + (a + 'x' + c + '</p><div id=toowide style="display:none; background:#faa">Slot does not fit horizontally<script>new IntersectionObserver((e) => {toowide.style.display =   (e[e.length-1].boundingClientRect.width >    e[e.length-1].intersectionRect.width) ? \'block\' : \'none\';},{threshold:1}).observe(document.body);</script></div>'))
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
                    BE(this, a, c, this.X.value);
                }
            };
            var AE = function (a) {
                    a = Zc(a.ka)[0];
                    return Array.isArray(a) && a.every(function (b) {
                        return 'number' === typeof b;
                    }) ? new _.sl(a[0], a[1]) : null;
                }, CE = function (a, b, c) {
                    return '<html><body style="height:' + (b - 2 + 'px;width:' + (a - 2 + 'px;background-color:#ddd;color:#000;border:1px solid #f00;">')) + c + ('<p>Rendered size:' + a + 'x' + b + '</p></body></html>');
                }, BE = function (a, b, c, d, e, f) {
                    e = void 0 === e ? a.W.value : e;
                    a.m.j(new _.sl(b, c));
                    a.F.j(d);
                    a.B.l(e);
                    f && _.Vm(f, 'opacity', 0.5);
                };
            var DE = function (a, b, c, d, e, f, g, h, k) {
                Y.call(this, 673);
                this.slotId = a;
                this.ub = b;
                this.I = c;
                this.F = d;
                this.Z = e;
                this.m = f;
                this.R = g;
                this.C = this.l();
                this.B = V(this, h);
                this.o = V(this, k);
            };
            _.N(DE, Y);
            DE.prototype.j = function () {
                return A(this, function b() {
                    var c = this, d, e;
                    return B(b, function (f) {
                        if (1 == f.j) {
                            if (null != c.ub) {
                                EE(c, c.ub);
                                c.C.j(c.ub);
                                f.j = 0;
                                return;
                            }
                            if (xv(c.m)) {
                                c.C.j(FE(c));
                                f.j = 0;
                                return;
                            }
                            return C(f, ug(c.slotId, Zq), 4);
                        }
                        d = f.l;
                        e = d.detail;
                        if (c.A)
                            return f.return();
                        EE(c, e);
                        c.C.j(e);
                        ni(f);
                    });
                });
            };
            var FE = function (a) {
                    var b = _.Dl(document, 'INS');
                    b.id = a.I;
                    _.nm(b, { display: 'none' });
                    a.Z.documentElement.appendChild(b);
                    var c = function () {
                        return void _.El(b);
                    };
                    2 === a.m || 3 === a.m ? mu(a.R, a.slotId, function () {
                        return void _.El(b);
                    }) : _.Ig(a, c);
                    return b;
                }, EE = function (a, b) {
                    if (2 !== a.m && 3 !== a.m) {
                        var c = _.v(Xo) ? [].concat(_.ec(b.childNodes)) : _.r(Array, 'from').call(Array, b.childNodes);
                        c = _.G(c);
                        for (var d = c.next(); !d.done; d = c.next())
                            d = d.value, 1 === d.nodeType && d.id !== a.F && _.El(d);
                        b.style.display = '';
                        _.v(Ao) && Kt(a.B) && Kt(a.o) && mB(b, a.B.value, a.o.value);
                    }
                };
            var GE = function (a) {
                Y.call(this, 676);
                this.C = this.l();
                this.m = U(this, a);
            };
            _.N(GE, Y);
            GE.prototype.j = function () {
                var a = Vc(this.m.value);
                this.C.j(a);
            };
            var HE = function (a, b, c) {
                Y.call(this, 807);
                this.J = a;
                this.C = Ot(this);
                this.m = V(this, b);
                this.o = U(this, c);
            };
            _.N(HE, Y);
            HE.prototype.j = function () {
                var a = _.lb(mp);
                if (0 !== a && this.m.value && !this.o.value) {
                    var b = Ks(this.J).J, c = Ns(b), d = c.url;
                    c.ic && (b = new AA(b, d), 1 === a ? b = BA(b) : (b = hm('google_ads_top_frame_ctrl', b.j), b = !(!b || !b.contentWindow)), b || this.V(Error('Cannot create top window frame: ' + a)));
                }
                this.C.notify();
            };
            var IE = function (a) {
                Y.call(this, 881);
                this.C = this.l();
                this.m = V(this, a);
            };
            _.N(IE, Y);
            IE.prototype.j = function () {
                var a;
                if (this.m.value) {
                    for (var b = this.m.value, c = {}, d = _.G(I(b, Fx, 7)), e = d.next(); !e.done; e = d.next())
                        e = e.value, c[qf(e, 1)] = JSON.parse(qf(e, 2));
                    (d = M(b, Ex, 6)) && (c['https://googleads.g.doubleclick.net'] = el(d));
                    this.C.j({
                        seller: 'https://pubads.g.doubleclick.net',
                        decisionLogicUrl: qf(b, 1),
                        trustedScoringSignalsUrl: qf(b, 2),
                        interestGroupBuyers: H(b, 3),
                        additionalBids: [],
                        auctionSignals: JSON.parse(qf(b, 4) || '{}'),
                        sellerSignals: (null === (a = M(b, Gx, 5)) || void 0 === a ? void 0 : a.za()) || [],
                        perBuyerSignals: c
                    });
                } else
                    Ht(this.C);
            };
            IE.prototype.G = function () {
                Ht(this.C);
            };
            var JE = navigator, KE = function (a, b, c) {
                    Y.call(this, 882);
                    this.C = this.l();
                    this.B = V(this, a);
                    this.o = V(this, b);
                    this.m = V(this, c);
                };
            _.N(KE, Y);
            KE.prototype.j = function () {
                var a;
                return A(this, function c() {
                    var d = this, e;
                    return B(c, function (f) {
                        if (1 == f.j)
                            return d.o.value ? C(f, null === (a = JE.runAdAuction) || void 0 === a ? void 0 : a.call(JE, d.o.value), 2) : (d.C.l(d.m.value), f.return());
                        if (e = f.l)
                            d.C.j({
                                kind: 2,
                                Zd: e
                            });
                        else {
                            var g, h, k = null === (h = null === (g = d.B.value) || void 0 === g ? void 0 : M(g, Gx, 5)) || void 0 === h ? void 0 : qf(h, 2);
                            k && Sm('https://googleads.g.doubleclick.net/td/auctionwinner?status=nowinner&qqid=' + encodeURIComponent(k));
                            d.C.l(d.m.value);
                        }
                        ni(f);
                    });
                });
            };
            KE.prototype.G = function () {
                this.C.l(this.m.value);
            };
            var LE = ci(['onmessage=function(e){var b=e.data.a;if(b>0){var t=performance.now();while(t+b>performance.now());}postMessage(b);};postMessage(-1)']), ME = LE;
            if (!Array.isArray(ME) || !Array.isArray(ME.raw) || 1 !== ME.length)
                throw new TypeError('safeScript is a template literal tag function that only accepts template literals without expressions. For example, safeScript`foo`;');
            var Pd = Xa(ME[0]);
            var NE = function (a, b) {
                Y.call(this, 839);
                this.C = this.l();
                this.o = V(this, a);
                this.m = U(this, b);
            };
            _.N(NE, Y);
            NE.prototype.j = function () {
                var a, b, c;
                return A(this, function e() {
                    var f = this, g, h, k, l, m, n, p, t, u, z, y, K, Q, S, X, ua, ja, ya, nb;
                    return B(e, function (gb) {
                        if (1 == gb.j) {
                            g = f;
                            if (_.v(pp) || !Kt(f.o))
                                return Ht(f.C), gb.return();
                            h = f.o.value;
                            k = new zy(h);
                            l = M(h, lx, 3);
                            m = ch(l);
                            n = [];
                            p = null !== (a = null === l || void 0 === l ? void 0 : Yg(l, 8)) && void 0 !== a ? a : 0;
                            t = null !== (b = null === l || void 0 === l ? void 0 : Yg(l, 6)) && void 0 !== b ? b : 0;
                            u = null !== (c = null === l || void 0 === l ? void 0 : Yg(l, 9)) && void 0 !== c ? c : 0;
                            z = null === l || void 0 === l ? void 0 : Yg(l, 7);
                            y = null === l || void 0 === l ? void 0 : $k(l, 10);
                            K = !y || !ad(f.m.value) || !Xg(f.m.value.getBoundingClientRect());
                            y && mc('gpt_td_worker_hidden_experiment', function (ub) {
                                q(ub, 'is_hidden', K);
                            }, {});
                            if (!(0 <= t && z) || Aj()) {
                                n = 1 === p ? Od(k, m, Ey) : Od(k, m, Dy);
                                gb.j = 2;
                                return;
                            }
                            if (!K) {
                                gb.j = 2;
                                return;
                            }
                            Q = [];
                            S = Qd();
                            X = [];
                            ua = 1 + u;
                            ja = {};
                            for (ya = 0; ya < ua; ja = { jb: ja.jb }, ya++)
                                ja.jb = new Worker(eb(S), void 0), Q.push(ja.jb), X.push(new D.Promise(function (ub) {
                                    return function (ob) {
                                        var Hd = (0, J.T)(zv(g, g.id, ub.jb, 'message', function (id) {
                                            if (0 <= id.data) {
                                                id = _.G(m);
                                                for (var tn = id.next(); !tn.done; tn = id.next())
                                                    n.push({
                                                        ad: tn.value,
                                                        Td: 1
                                                    });
                                                Hd();
                                                ob();
                                            } else
                                                ub.jb.postMessage({ a: t });
                                        }));
                                    };
                                }(ja)));
                            mc('gpt_td_worker_event', function (ub) {
                                q(ub, 'wait_ms', t);
                                q(ub, 'timeout_ms', z);
                            }, {});
                            nb = performance.now();
                            return C(gb, D.Promise.race([
                                D.Promise.all(X),
                                Fm(z)
                            ]).then(function (ub) {
                                for (var ob = _.G(Q), Hd = ob.next(); !Hd.done; Hd = ob.next())
                                    Hd.value.terminate();
                                mc('timeout' === ub ? 'gpt_td_worker_timeout' : 'gpt_td_worker_time', function (id) {
                                    q(id, 'wait_ms', t);
                                    q(id, 'timeout_ms', z);
                                    q(id, 'duration_ms', Math.round(performance.now() - nb));
                                }, {});
                            }), 2);
                        }
                        f.C.j(n);
                        ni(gb);
                    });
                });
            };
            NE.prototype.G = function () {
                Ht(this.C);
            };
            var OE = function (a, b) {
                    var c = this;
                    this.slotId = a;
                    this.ia = b;
                    this.j = null;
                    this.l = _.Mi(function () {
                        c.ia.dispatchEvent('impressionViewable', 715, new qw(c.slotId, 'publisher_ads'));
                    });
                    this.A = Ni(function () {
                        return void c.ia.dispatchEvent('slotVisibilityChanged', 716, new rw(c.slotId, 'publisher_ads', c.j));
                    }, 200);
                }, PE = function (a, b, c) {
                    b && a.l();
                    void 0 === c || isNaN(c) || (c = Math.floor(c), a.j !== c && (a.j = c, a.A()));
                };
            var RE = function (a, b, c, d, e, f, g, h, k, l, m, n, p) {
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
                    Qt(this, u.value);
                Xq(this.slotId, cr, QE);
            };
            _.N(RE, Y);
            RE.prototype.j = function () {
                var a = this.L, b = a.U, c = this.slotId.j, d = a.P[c];
                a = new oe();
                _.Tq(this, a);
                if (this.F || this.B.value) {
                    var e = new gE(this.slotId, this.L, this.R, Kb.N(), this.J, this.Z, this.metadata.B);
                    W(a, e);
                } else {
                    var f = ld(d), g = Js(!0, this.J);
                    e = new bE(this.J);
                    W(a, e);
                    var h = new XD(d, this.metadata.ua, this.metadata.Oa, this.metadata.K, this.metadata.Ta);
                    W(a, h);
                    var k = new Gt();
                    k.j(this.da);
                    var l = new Mt();
                    l.notify();
                    l = new UC(this.J.top, k, l);
                    W(a, l);
                    k = new dE(Ib(this.slotId.getAdUnitPath()), this.metadata.oa, l.C);
                    W(a, k);
                    var m = new lE();
                    W(a, m);
                    k = new ZD(f, g.height, this.metadata.O, h.F);
                    W(a, k);
                    c = new DE(this.slotId, Wc(this.slotId, this.Z), c, aw(this.slotId), this.Z, f, this.R, h.m, k.C);
                    W(a, c);
                    var n = new jB(h.o, this.metadata.m, this.metadata.o, this.metadata.I, this.metadata.ga);
                    W(a, n);
                    var p = new wE(b, d, this.J, this.metadata.m, this.metadata.o, this.metadata.ga);
                    W(a, p);
                    var t = new oE(M(b, Xu, 5), this.metadata.Ma);
                    W(a, t);
                    n = new zE(this.slotId.getAdUnitPath(), d, g.width, window, this.metadata.na, h.m, k.C, n.m, c.C);
                    W(a, n);
                    k = new $D(this.slotId, b, d, f, this.Z, this.R, c.C, p.C, n.m, this.metadata.F);
                    W(a, k);
                    var u = new GE(k.C);
                    W(a, u);
                    u = new sE(this.slotId, g, this.R, m.C, u.C, t.m);
                    W(a, u);
                    m = new cE(window, c.C);
                    W(a, m);
                    t = new pE(u.C, k.C, this.metadata.Na, t.m);
                    W(a, t);
                    g = new VD(this.Z, this.slotId, d, g, this.metadata.F, c.C, k.C, n.m, n.B, m.C, this.metadata.B);
                    W(a, g);
                    m = new IE(this.metadata.aa);
                    W(a, m);
                    m = new KE(this.metadata.aa, m.C, n.F);
                    W(a, m);
                    p = new vE(p.C, m.C);
                    W(a, p);
                    d = new yE(b, d, p.C, this.metadata.m, this.metadata.I, this.metadata.La);
                    W(a, d);
                    u = new HE(this.J, this.metadata.la, e.C);
                    W(a, u);
                    var z = new xE(this.slotId, this.L, this.R, this.da, this.o, this.metadata.I, this.metadata.ja);
                    W(a, z);
                    var y = new NE(this.metadata.Ka, k.C);
                    W(a, y);
                    var K = new fE(this.Z);
                    W(a, K);
                    b = new FC(f, this.metadata.O, this.metadata.W);
                    W(a, b);
                    h = new SD(this.slotId, this.R, this.L, this.ia, this.J, m.C, z.C, t.C, c.C, k.C, n.m, p.C, this.metadata.o, this.metadata.B, this.metadata.F, d.C, this.metadata.I, this.metadata.Ha, this.metadata.ca, this.metadata.ja, g.C, u.C, y.C, K.C, b.C, h.B);
                    W(a, h);
                    d = new AC(this.R, f, this.slotId, this.J, this.metadata.O, h.m, c.C, b.C);
                    W(a, d);
                    l = new CC(this.slotId, f, this.L.Ya, this.metadata.W, h.m, c.C, l.C, b.C);
                    W(a, l);
                    l = new hB(this.slotId, this.J, this.metadata.m, h.m, h.o);
                    W(a, l);
                    l = new WD(this.J, this.slotId, rd(), this.metadata.ma, h.m);
                    W(a, l);
                    f = new QC(this.slotId, f, this.ia, this.J, h.m, c.C);
                    W(a, f);
                    var Q = new OE(this.slotId, this.ia);
                    f = function (S, X) {
                        return void PE(Q, S, X);
                    };
                    l = new iE(this.slotId, h.m, this.Z, this.ia);
                    W(a, l);
                    l = new rE(tu(this.R, this.slotId), this.m, this.metadata.m, h.m, f);
                    W(a, l);
                    e = new UD(tu(this.R, this.slotId), this.J.top, h.m, e.C);
                    W(a, e);
                    e = new dB(this.slotId, this.metadata.B, this.metadata.F, this.metadata.o, this.metadata.m, this.metadata.ca, h.m, k.C, h.o);
                    W(a, e);
                    _.Tq(a, new kB(f, this.slotId, this.metadata.o, this.metadata.m));
                    e = new hE(this.J, this.metadata.Ga, h.m, k.C, c.C);
                    W(a, e);
                    W(a, new uE(this.metadata.Ja, Kg()));
                }
                qe(a);
            };
            var QE = _.Mi(function () {
                return void ew('gpt-first-ad-render');
            });
            var TE = function (a, b) {
                Y.call(this, 804);
                this.sa = b;
                this.$ = [];
                SE(this, function (c) {
                    return H(c, 4);
                });
                this.ua = SE(this, function (c) {
                    return H(c, 6);
                });
                this.Oa = SE(this, function (c) {
                    return H(c, 7);
                });
                this.Ia = SE(this, function (c) {
                    return x(c, 8);
                });
                this.F = SE(this, function (c) {
                    return H(c, 10);
                });
                SE(this, function (c) {
                    return H(c, 15);
                });
                this.B = SE(this, function (c) {
                    return H(c, 34);
                });
                this.m = SE(this, function (c) {
                    return M(c, ex, 43);
                });
                this.o = SE(this, function (c) {
                    return M(c, Mx, 41);
                });
                this.I = SE(this, function (c) {
                    return x(c, 9);
                });
                this.ga = SE(this, function (c) {
                    return x(c, 12);
                });
                this.ma = SE(this, function (c) {
                    return M(c, Fs, 50);
                });
                this.W = SE(this, function (c) {
                    return M(c, Ww, 48);
                });
                this.O = SE(this, function (c) {
                    return M(c, Uw, 39);
                });
                this.na = SE(this, function (c) {
                    return H(c, 36);
                });
                this.La = SE(this, function (c) {
                    return x(c, 13);
                });
                this.Ha = SE(this, function (c) {
                    return x(c, 3);
                });
                this.ca = SE(this, function (c) {
                    return H(c, 49);
                });
                this.Ma = SE(this, function (c) {
                    return H(c, 29);
                });
                this.Na = SE(this, function (c) {
                    return H(c, 30);
                });
                this.Ga = SE(this, function (c) {
                    return M(c, gx, 51);
                });
                this.ja = SE(this, function (c) {
                    return x(c, 52);
                });
                this.la = SE(this, function () {
                    return 'encrypted_url';
                });
                this.oa = SE(this, function (c) {
                    return (c = M(c, dx, 54)) ? I(c, bx, 1).filter(function (d) {
                        H(d, 1) || Sd(32, '');
                        return !!H(d, 1);
                    }).map(function (d) {
                        var e = H(d, 2);
                        return {
                            xa: (0, J.T)(H(d, 1)),
                            Ic: e && (_.r(e, 'startsWith').call(e, window.location.protocol) || _.r(e, 'startsWith').call(e, 'data:') && 40 >= e.length) ? $a(e) : void 0
                        };
                    }) : [];
                });
                SE(this, function (c) {
                    return H(c, 23);
                });
                SE(this, function (c) {
                    return I(c, Gs, 14);
                });
                SE(this, function (c) {
                    return x(c, 11);
                });
                SE(this, function (c) {
                    return H(c, 33);
                });
                SE(this, function (c) {
                    return H(c, 27);
                });
                this.K = this.l();
                this.Ka = SE(this, function (c) {
                    return M(c, Bx, 55);
                });
                this.aa = SE(this, function (c) {
                    return M(c, Ix, 58);
                });
                this.Ta = SE(this, function (c) {
                    var d, e;
                    return null !== (e = null === (d = M(c, fx, 56)) || void 0 === d ? void 0 : H(d, 1)) && void 0 !== e ? e : null;
                });
                this.Ja = SE(this, function (c) {
                    var d;
                    return null !== (d = I(c, hx, 60)) && void 0 !== d ? d : [];
                });
                this.X = U(this, a);
            };
            _.N(TE, Y);
            var SE = function (a, b) {
                var c = a.l();
                a.$.push({
                    C: c,
                    bc: b
                });
                return c;
            };
            TE.prototype.j = function () {
                for (var a = _.G(this.$), b = a.next(); !b.done; b = a.next()) {
                    b = b.value;
                    var c = b.bc;
                    b.C.l(c(this.X.value));
                }
                0 === this.sa.kind || 1 === this.sa.kind && this.sa.url ? this.K.j(this.sa) : this.K.j({
                    kind: 0,
                    ra: H(this.X.value, 4) || ''
                });
            };
            var UE = function (a, b) {
                Y.call(this, 822);
                this.slotId = a;
                this.m = Ot(this);
                this.o = U(this, b);
            };
            _.N(UE, Y);
            UE.prototype.j = function () {
                var a, b = null !== (a = H(this.o.value, 23)) && void 0 !== a ? a : [], c = _.xh(Jv);
                b = _.G(b);
                for (var d = b.next(); !d.done; d = b.next()) {
                    d = d.value;
                    Kv(c, d);
                    var e = this.slotId;
                    c.j[d] = c.j[d] || new D.Set();
                    c.j[d].add(e);
                }
                this.m.notify();
            };
            var VE = function (a, b) {
                Y.call(this, 803);
                this.m = a;
                this.slotId = b;
                this.C = this.l();
            };
            _.N(VE, Y);
            VE.prototype.j = function () {
                var a, b = JSON.parse(this.m), c = b ? Se(b, Ji) : void 0;
                if (!c)
                    throw Error('missing ad unit path');
                if (null === b || void 0 === b || !b[c])
                    throw Error('invalid ad unit path: ' + c);
                b = b[c];
                if (!Array.isArray(b))
                    throw Error('dictionary not an array: ' + this.m);
                b = new Lx(b.slice());
                c = _.G(null !== (a = H(b, 27)) && void 0 !== a ? a : []);
                for (var d = c.next(); !d.done; d = c.next())
                    d = d.value, _.xh(yq).j(d);
                Aq(4);
                this.slotId.dispatchEvent($q, 800, b);
                this.C.j(b);
            };
            var WE = function (a, b, c, d) {
                Y.call(this, 823);
                this.slotId = a;
                this.L = b;
                this.R = c;
                this.m = Ot(this);
                this.o = U(this, d);
            };
            _.N(WE, Y);
            WE.prototype.j = function () {
                var a = this, b, c = this.L.P[this.slotId.j];
                try {
                    if (c) {
                        var d = null !== (b = M(this.o.value, Fs, 50)) && void 0 !== b ? b : null;
                        Zv(c, d, !!x(this.o.value, 11)) && (_.qu(this.R, this.slotId), Yv(d) && mu(this.R, this.slotId, function () {
                            _.ru(a.R, a.slotId);
                        }));
                    }
                } finally {
                    this.m.notify();
                }
            };
            var XE = function (a, b, c) {
                Y.call(this, 821);
                this.da = a;
                this.o = b;
                this.m = Ot(this);
                this.B = U(this, c);
            };
            _.N(XE, Y);
            XE.prototype.j = function () {
                var a, b = null === (a = I(this.B.value, Gs, 14)) || void 0 === a ? void 0 : a[0];
                b && rt(this.o, b, this.da);
                this.m.notify();
            };
            var YE = function () {
                }, $E = function (a, b, c, d, e, f, g, h, k, l, m, n, p, t) {
                    var u, z, y = new oe(), K = h.U, Q = new xD(window);
                    W(y, Q);
                    b = new sD(d, b, m, h, Bc(), g, window);
                    W(y, b);
                    var S = new MD(window);
                    W(y, S);
                    var X = new tD(c);
                    W(y, X);
                    var ua = new ND(!!x(g, 5));
                    W(y, ua);
                    m = new uD(d, m, c, k, g, h, n, p, Q.m, S.C, b.m, X.C, ua.C);
                    W(y, m);
                    if (!_.v(mo))
                        return qe(y), m.m.promise;
                    d = new vD(c, h, k, l.getOseId(), m.m, b.m);
                    W(y, d);
                    n = !(null !== (z = null === (u = bv(K)) || void 0 === u ? void 0 : x(u, 9)) && void 0 !== z && z) && !!x(g, 5);
                    p = function (ja, ya, nb, gb) {
                        ZE(a, c, l, g, k, h, ja, !1, ya, nb, t, y, gb);
                    };
                    Q = function (ja, ya) {
                        ZE(a, c, l, g, k, h, ja, !0, '', {
                            kind: 0,
                            ra: ''
                        }, t, y, ya);
                    };
                    S = new LD(h, Pb(), String(zb(window)), m.m, b.m);
                    W(y, S);
                    c.A++;
                    'wbn' === e ? (e = new rD(e, h, 'googletag.wbn' + c.A, (0, J.T)(f), m.m, S.m, b.m, p, Q, n), f = e.m, W(y, e)) : (m = new ID(e, h, m.m, S.m, b.m, p, Q, n), f = m.o, W(y, m), e = new ED(m.o, e, K.ya(), k, g, _.xh(RC), window), W(y, e), W(y, new DD(h, m.o, b.m)));
                    b = new CD(h, t, f, d.m, b.m);
                    W(y, b);
                    qe(y);
                    return f.promise;
                }, ZE = function (a, b, c, d, e, f, g, h, k, l, m, n, p) {
                    A(a, function u() {
                        var z, y, K, Q, S, X, ua, ja;
                        return B(u, function (ya) {
                            if (1 == ya.j) {
                                z = new oe();
                                y = new VE(k, g);
                                W(z, y);
                                K = new XE(d, e, y.C);
                                W(z, K);
                                Q = new UE(g, y.C);
                                W(z, Q);
                                S = new WE(g, f, b, y.C);
                                W(z, S);
                                X = new TE(y.C, l);
                                W(z, X);
                                ua = h || Ob('google_norender');
                                ja = new RE(g, f, b, ua, d, e, c, m, document, window, X, X.Ia, K.m, Q.m, S.m);
                                W(z, ja);
                                vu(b, g, z);
                                _.Ig(g, function () {
                                    wu(b, g);
                                });
                                qe(z);
                                if (n && p) {
                                    n.va();
                                    ya.j = 2;
                                    return;
                                }
                                return C(ya, D.Promise.all([
                                    K.m.promise,
                                    Q.m.promise,
                                    S.m.promise
                                ]), 2);
                            }
                            return ya.return();
                        });
                    });
                }, aF = function (a, b, c, d, e, f, g) {
                    return A(a, function k() {
                        var l, m, n, p, t, u, z;
                        return B(k, function (y) {
                            if (1 == y.j)
                                return l = new oe(), m = new VE(c, b), W(l, m), n = [], _.v(lo) && (p = new XE(f, g, m.C), W(l, p), t = new UE(b, m.C), W(l, t), u = new WE(b, e, d, m.C), W(l, u), n = [
                                    p.m.promise,
                                    t.m.promise,
                                    u.m.promise
                                ]), qe(l), C(y, m.C.promise, 2);
                            if (3 != y.j)
                                return z = y.l, n.length ? y = C(y, D.Promise.all(n), 3) : (y.j = 3, y = void 0), y;
                            l.va();
                            return y.return(z);
                        });
                    });
                }, bF = function (a, b, c, d, e) {
                    return A(a, function g() {
                        var h, k, l, m, n;
                        return B(g, function (p) {
                            return 1 == p.j ? (h = new oe(), k = new oD(b), W(h, k), l = new AD(d.P, k.o), W(h, l), m = new yD(c, Rv(d.U), e, l.m), W(h, m), n = new BD(c, d, document, l.o), W(h, n), qe(h), C(p, n.m, 2)) : p.return(m.m.promise);
                        });
                    });
                }, cF = function (a, b, c, d) {
                    return A(a, function f() {
                        var g, h;
                        return B(f, function (k) {
                            g = new oe();
                            h = new lD(c, window, b, d);
                            W(g, h);
                            qe(g);
                            return k.return(h.m.promise);
                        });
                    });
                };
            var eF = function (a, b) {
                Y.call(this, 700);
                this.Oa = a;
                this.sa = b;
                this.X = [];
                this.oa = dF(this, function (c) {
                    return H(c, 6);
                });
                this.Ma = dF(this, function (c) {
                    return H(c, 7);
                });
                dF(this, function (c) {
                    return x(c, 8);
                });
                this.B = dF(this, function (c) {
                    return H(c, 10);
                });
                dF(this, function (c) {
                    return H(c, 15);
                });
                this.K = dF(this, function (c) {
                    return H(c, 34);
                });
                this.m = dF(this, function (c) {
                    return M(c, ex, 43);
                });
                this.o = dF(this, function (c) {
                    return M(c, Mx, 41);
                });
                this.F = dF(this, function (c) {
                    return x(c, 9);
                });
                this.ca = dF(this, function (c) {
                    return x(c, 12);
                });
                this.ja = dF(this, function (c) {
                    return M(c, Fs, 50);
                });
                this.W = dF(this, function (c) {
                    return M(c, Ww, 48);
                });
                this.O = dF(this, function (c) {
                    return M(c, Uw, 39);
                });
                this.ma = dF(this, function (c) {
                    return H(c, 36);
                });
                this.Ja = dF(this, function (c) {
                    return x(c, 13);
                });
                this.Ga = dF(this, function (c) {
                    return x(c, 3);
                });
                this.aa = dF(this, function (c) {
                    return H(c, 49);
                });
                this.Ka = dF(this, function (c) {
                    return H(c, 29);
                });
                this.La = dF(this, function (c) {
                    return H(c, 30);
                });
                this.ua = dF(this, function (c) {
                    return M(c, gx, 51);
                });
                this.ga = dF(this, function (c) {
                    return x(c, 52);
                });
                this.na = dF(this, function () {
                    return 'encrypted_url';
                });
                this.la = dF(this, function (c) {
                    return (c = M(c, dx, 54)) ? I(c, bx, 1).filter(function (d) {
                        H(d, 1) || Sd(32, '');
                        return !!H(d, 1);
                    }).map(function (d) {
                        var e = H(d, 2);
                        return {
                            xa: (0, J.T)(H(d, 1)),
                            Ic: e && (_.r(e, 'startsWith').call(e, window.location.protocol) || _.r(e, 'startsWith').call(e, 'data:') && 40 >= e.length) ? $a(e) : void 0
                        };
                    }) : [];
                });
                this.Ia = dF(this, function (c) {
                    return M(c, Bx, 55);
                });
                this.$ = dF(this, function (c) {
                    return M(c, Ix, 58);
                });
                this.Na = dF(this, function (c) {
                    var d, e;
                    return null !== (e = null === (d = M(c, fx, 56)) || void 0 === d ? void 0 : H(d, 1)) && void 0 !== e ? e : null;
                });
                this.Ha = dF(this, function (c) {
                    var d;
                    return null !== (d = I(c, hx, 60)) && void 0 !== d ? d : [];
                });
                this.I = this.l();
            };
            _.N(eF, Y);
            var dF = function (a, b) {
                var c = Y.prototype.l.call(a);
                a.X.push({
                    C: c,
                    bc: b
                });
                return c;
            };
            eF.prototype.j = function () {
                for (var a = this.Oa, b = _.G(this.X), c = b.next(); !c.done; c = b.next()) {
                    c = c.value;
                    var d = c.bc;
                    c.C.l(d(a));
                }
                0 === this.sa.kind || 1 === this.sa.kind && this.sa.url ? this.I.j(this.sa) : this.I.j({
                    kind: 0,
                    ra: H(a, 4) || ''
                });
            };
            var fF = function () {
                    this.j = new D.Map();
                }, gF = function (a, b) {
                    var c;
                    b && (null === (c = a.j.get(b)) || void 0 === c ? void 0 : c.va(), a.j.delete(b));
                }, iF = function (a, b, c, d, e, f, g, h, k, l, m) {
                    gF(a, b);
                    Xq(b, cr, hF);
                    var n = new oe(), p = Js(!0, window), t = e.U, u = e.P[b.j], z = new bE(window);
                    W(n, z);
                    f = new eF(f, g);
                    W(n, f);
                    var y = new XD(u, f.oa, f.Ma, f.I, f.Na);
                    W(n, y);
                    g = new Gt();
                    g.j(k);
                    var K = new Mt();
                    K.notify();
                    var Q = new UC(window.top, g, K);
                    W(n, Q);
                    g = new dE(Ib(b.getAdUnitPath()), f.la, Q.C);
                    W(n, g);
                    var S = new lE();
                    W(n, S);
                    K = new ZD(ld(u), p.height, f.O, y.F);
                    W(n, K);
                    g = new DE(b, Wc(b, h), b.j, aw(b), h, ld(u), c, y.m, K.C);
                    W(n, g);
                    var X = new jB(y.o, f.m, f.o, f.F, f.ca);
                    W(n, X);
                    var ua = new wE(t, u, window, f.m, f.o, f.ca);
                    W(n, ua);
                    var ja = new oE(M(t, Xu, 5), f.Ka);
                    W(n, ja);
                    X = new zE(b.getAdUnitPath(), u, p.width, window, f.ma, y.m, K.C, X.m, g.C);
                    W(n, X);
                    K = new $D(b, t, u, ld(u), h, c, g.C, ua.C, X.m, f.B);
                    W(n, K);
                    var ya = new GE(K.C);
                    W(n, ya);
                    ya = new sE(b, p, c, S.C, ya.C, ja.m);
                    W(n, ya);
                    S = new cE(window, g.C);
                    W(n, S);
                    ja = new pE(ya.C, K.C, f.La, ja.m);
                    W(n, ja);
                    p = new VD(h, b, u, p, f.B, g.C, K.C, X.m, X.B, S.C, f.K);
                    W(n, p);
                    S = new IE(f.$);
                    W(n, S);
                    S = new KE(f.$, S.C, X.F);
                    W(n, S);
                    ua = new vE(ua.C, S.C);
                    W(n, ua);
                    t = new yE(t, u, ua.C, f.m, f.F, f.Ja);
                    W(n, t);
                    ya = new HE(window, f.na, z.C);
                    W(n, ya);
                    l = new xE(b, e, c, k, l, f.F, f.ga);
                    W(n, l);
                    var nb = new NE(f.Ia, K.C);
                    W(n, nb);
                    var gb = new fE(h);
                    W(n, gb);
                    k = new FC(ld(u), f.O, f.W);
                    W(n, k);
                    y = new SD(b, c, e, m, window, S.C, l.C, ja.C, g.C, K.C, X.m, ua.C, f.o, f.K, f.B, t.C, f.F, f.Ga, f.aa, f.ga, p.C, ya.C, nb.C, gb.C, k.C, y.B);
                    W(n, y);
                    l = new AC(c, ld(u), b, window, f.O, y.m, g.C, k.C);
                    W(n, l);
                    e = new CC(b, ld(u), e.Ya, f.W, y.m, g.C, Q.C, k.C);
                    W(n, e);
                    e = new hB(b, window, f.m, y.m, y.o);
                    W(n, e);
                    e = new WD(window, b, rd(), f.ja, y.m);
                    W(n, e);
                    u = new QC(b, ld(u), m, window, y.m, g.C);
                    W(n, u);
                    var ub = new OE(b, m);
                    u = function (ob, Hd) {
                        return void PE(ub, ob, Hd);
                    };
                    h = new iE(b, y.m, h, m);
                    W(n, h);
                    d = new rE(tu(c, b), d, f.m, y.m, u);
                    W(n, d);
                    c = new UD(tu(c, b), window.top, y.m, z.C);
                    W(n, c);
                    c = new dB(b, f.K, f.B, f.o, f.m, f.aa, y.m, K.C, y.o);
                    W(n, c);
                    _.Tq(n, new kB(u, b, f.o, f.m));
                    c = new hE(window, f.ua, y.m, K.C, g.C);
                    W(n, c);
                    W(n, new uE(f.Ha, Kg()));
                    a.j.set(b, n);
                    _.Ig(b, function () {
                        return void gF(a, b);
                    });
                    qe(n);
                }, hF = _.Mi(function () {
                    return void ew('gpt-first-ad-render');
                });
            var jF = function (a, b, c) {
                    const $___old_8fee14304619401a = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                    try {
                        if ($___old_8fee14304619401a)
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
                        if ($___old_8fee14304619401a)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_8fee14304619401a));
                    }
                }, mF = function (a) {
                    a.j.open('GET', a.url);
                    a.j.withCredentials = a.withCredentials;
                    MA(a.j);
                    a.j.onreadystatechange = function () {
                        kF(a, !1);
                    };
                    a.j.onload = function () {
                        kF(a, !0);
                    };
                    a.j.onerror = function () {
                        lF(a.l, Error('XHR error'));
                    };
                    a.j.send();
                }, kF = function (a, b) {
                    try {
                        if (3 === a.j.readyState || 4 === a.j.readyState)
                            if (300 <= a.j.status || 200 > a.j.status && _.v(fo))
                                a.A || lF(a.l, Error('xhr_err-' + a.j.status)), a.A = !0;
                            else {
                                var c = a.j.responseText.substr(a.m);
                                if (c) {
                                    var d = a.l;
                                    if (c)
                                        if (1 !== d.state && 2 !== d.state)
                                            lF(d, Error('state err: (' + ([
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
                                                            ra: ym(k)
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
                                    1 !== l.state || l.j ? lF(l, Error('state err (' + ([
                                        l.state,
                                        l.j.length
                                    ].join() + ')'))) : (l.state = 3, l.m());
                                }
                            }
                    } catch (m) {
                        lF(a.l, m);
                    }
                }, nF = function (a, b, c) {
                    mF(new jF(a, b, void 0 === c ? !0 : c));
                };
            var oF = function (a, b, c) {
                    this.H = a;
                    this.D = b;
                    this.m = c;
                    this.l = '';
                    this.A = -1;
                    this.state = 1;
                    this.j = '';
                }, lF = function (a, b) {
                    a.state = 4;
                    try {
                        a.D(b);
                    } catch (c) {
                    }
                };
            var pF = function (a, b) {
                    a.length && (a = a[0], hq(Kb.N(), '3', H(b.P[a.j], 20)));
                }, qF = function (a) {
                    a = a instanceof Error ? a : Error();
                    a.message = a.message || 'strm_err';
                    Vb(289, a, !0);
                }, rF = function (a, b) {
                    if (_.v(Co))
                        return !1;
                    a = x(a, 11);
                    null == a && (a = x(b, 10));
                    return !!a;
                }, sF = function (a) {
                    var b = Kg(), c = a.replace('googletag.', '');
                    return new D.Promise(function (d) {
                        Object.defineProperty(b, c, {
                            value: function (e, f) {
                                var g = d;
                                d = null;
                                g && g({
                                    Vb: e,
                                    kc: f
                                });
                            },
                            writable: !1,
                            enumerable: !1
                        });
                    });
                }, tF = function (a) {
                    this.j = ku.N();
                    this.l = new pt();
                    this.F = a;
                    this.fa = _.xh(Jv);
                    this.A = new D.Map();
                    this.B = eg(this.B);
                    this.D = kc(291, this.D);
                    this.K = Ob('google_nofetch');
                    this.O = Ob('google_norender');
                    this.H = new YA();
                    this.ba = 0;
                    this.G = {};
                    this.o = {};
                    this.I = new fF();
                    this.m = new YE();
                    this.V = _.Mi(function () {
                        return void ew('gpt-first-ad-request');
                    });
                }, uF = function (a, b, c, d, e) {
                    if (e = e.P[b.j])
                        null != H(d, 23) && H(d, 23).forEach(function (f) {
                            Kv(a.fa, f);
                            var g = a.fa;
                            g.j[f] = g.j[f] || new D.Set();
                            g.j[f].add(b);
                        }), I(d, Gs, 14).length && rt(a.l, I(d, Gs, 14)[0], c), Zv(e, M(d, Fs, 50), !!x(d, 11)) && (_.qu(a.j, b), Yv(M(d, Fs, 50)) && mu(a.j, b, function () {
                            _.ru(a.j, b);
                        }));
                };
            tF.prototype.B = function (a, b) {
                var c = this;
                b = void 0 === b ? !1 : b;
                return _.F.IntersectionObserver ? new _.F.IntersectionObserver(function (d, e) {
                    return c.D(d, e, b);
                }, { rootMargin: a }) : new Tg(function (d, e) {
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
                        f && (f.Xb(), d.A.delete(e));
                    }
                });
            };
            var vF = function (a, b, c, d, e, f) {
                    var g, h, k, l, m, n, p, t;
                    ui(function (u) {
                        if (1 == u.j)
                            return g = _.Dl(document, 'LINK'), qD(g, a), g.resources.add(aj(c.l)), g.crossOrigin = b ? 'use-credentials' : 'anonymous', h = document.createElement('script'), xd(h, c.l), document.head.appendChild(g), document.head.appendChild(h), C(u, sF(c.A), 2);
                        k = u.l;
                        l = k.Vb;
                        m = k.kc;
                        if (l.length !== m.length)
                            return e(Error('Received ' + l.length + ' but ' + m.length + ' metadatas')), u.return();
                        for (n = 0; n < l.length; n++)
                            p = l[n], t = m[n], p && g.resources.add(p), d(n, t, {
                                kind: 1,
                                url: p
                            });
                        f();
                        ni(u);
                    });
                }, wF = function (a, b, c, d) {
                    var e = new aB();
                    a = ++a.ba;
                    e.I = a;
                    d = Rv(d.U);
                    e.j = d && _.v(sp) || !d && _.v(rp) ? 'wbn' : 'ldjh';
                    if ('wbn' === e.j) {
                        for (var f = Array(36), g = 0, h, k = 0; 36 > k; k++)
                            8 == k || 13 == k || 18 == k || 23 == k ? f[k] = '-' : 14 == k ? f[k] = '4' : (2 >= g && (g = 33554432 + 16777216 * Math.random() | 0), h = g & 15, g >>= 4, f[k] = pD[19 == k ? h & 3 | 8 : h]);
                        e.l = bj('urn:uuid:' + f.join('').toLowerCase());
                        e.A = 'googletag.wbn' + a;
                    }
                    e.o = d ? 'fifs' : 'fif';
                    e.Ca = c.Ca;
                    e.Xa = c.Xa || NaN;
                    e.Wa = c.Wa || NaN;
                    e.Y = b;
                    return e;
                }, xF = function (a, b) {
                    var c = !_.v(Pf);
                    bB(b, Bb(), a.H.getOseId(), su(a.j, b.Y), c ? bz() : '', c ? cz() : '', c ? dz() : '');
                }, AF = function (a, b, c, d) {
                    return yF(a, b, d).then(kc(750, function () {
                        return zF(a, b, c, d);
                    }));
                }, yF = function (a, b, c) {
                    b = b.Y;
                    c = M(c.U, Xu, 5) || new Xu();
                    c = sg(c);
                    if (null == c || !b.every(function (g) {
                            return ad(Wc(g));
                        }))
                        return D.Promise.resolve();
                    c = a.B(c + '%');
                    var d = new Ee(), e = {};
                    b = _.G(b);
                    for (var f = b.next(); !f.done; e = {
                            gb: e.gb,
                            zb: e.zb
                        }, f = b.next())
                        f = f.value, e.zb = f.j, e.gb = Wc(f), e.gb && (a.A.set(e.zb, {
                            Xb: function () {
                                return void d.resolve();
                            },
                            Jd: c
                        }), c.observe(e.gb), nu(a.j, f, function (g) {
                            return function () {
                                BF(a, g.gb, g.zb);
                            };
                        }(e)));
                    return d.promise;
                }, zF = function (a, b, c, d) {
                    var e = b.Y;
                    if (e.length)
                        return a.A.get(e[0].j) && e.forEach(function (f) {
                            var g = f.j;
                            f = Wc(f);
                            BF(a, f, g);
                        }), CF(a, b, c, d);
                }, CF = function (a, b, c, d) {
                    return $E(a.m, b.Y, a.j, b, b.j, b.l, c, d, a.l, a.H, Rv(d.U), a.H.getOseId(), su(a.j, b.Y), a.F).then(function (e) {
                        if (!_.v(mo) && e && (DF(a, e, b, c, d), hv(b.Y), 'wbn' !== b.j && (e = d.U.ya(), e = !_.v(gp) && (!e || e && (!yf(e, 4) || !x(e, 4))), TC(_.xh(RC), window, Vv(a.l, c)), e && TC(_.xh(RC), window)), _.v(so))) {
                            e = _.G(b.Y);
                            for (var f = e.next(); !f.done; f = e.next()) {
                                var g = void 0;
                                switch (null == (g = d.P[f.value.j]) ? void 0 : ld(g)) {
                                case 2:
                                case 3:
                                case 5:
                                    _.xC.N().load(_.EC);
                                }
                            }
                        }
                    });
                };
            tF.prototype.refresh = function (a, b, c) {
                var d = this;
                bF(this.m, a, this.j, c, this.K).then(kc(872, function (e) {
                    if (null != e && e.length) {
                        e = _.G(e);
                        for (var f = e.next(); !f.done; f = e.next())
                            cF(d.m, f.value, c, d.l).then(kc(907, function (g) {
                                if (g) {
                                    var h = g.da;
                                    g = wF(d, g.Y, b, c);
                                    _.v(ko) ? EF(d, g, h, c, document) : FF(d, g, h, c);
                                }
                            }));
                    }
                }));
            };
            var GF = function (a, b, c, d) {
                    var e = void 0 === e ? window : e;
                    for (var f = _.v(mo), g = _.G(b), h = g.next(); !h.done; h = g.next())
                        h = h.value, f ? wu(a.j, h) : gF(a.I, h);
                    b = _.G(b);
                    for (h = b.next(); !h.done; h = b.next())
                        f = h.value, g = d[f.j], rF(g, c) && ig(f, e.document, g, c), uu(a.j, f);
                    return !0;
                }, BF = function (a, b, c) {
                    if (b) {
                        var d = a.A.get(c);
                        d && (d.Jd.unobserve(b), a.A.delete(c));
                    }
                }, EF = function (a, b, c, d, e) {
                    if (b.Y.length) {
                        for (var f = _.G(b.Y), g = f.next(); !g.done; g = f.next())
                            sB(e, g.value, d);
                        AF(a, b, c, d).then(kc(751, function () {
                            for (var h = _.G(b.Y), k = h.next(); !k.done; k = h.next())
                                k = k.value, HF(a, k, d.U, d.P[k.j]);
                        }));
                    } else
                        D.Promise.resolve();
                }, FF = function (a, b, c, d) {
                    var e = document;
                    e = void 0 === e ? document : e;
                    var f = tc(c);
                    _.xh(gw).l = f;
                    hw(_.xh(gw), qt(a.l, c));
                    Aq(20);
                    Aq(2);
                    _.v(wp) || (we(Kg(), f, function (g, h) {
                        Ub(g, h);
                        var k, l;
                        null == (k = window.console) || null == (l = k.error) || l.call(k, h);
                    }), xe(Kg(), og(up).map(function (g) {
                        return { xa: g };
                    }), f, function (g, h) {
                        Ub(g, h);
                        var k, l;
                        null == (k = window.console) || null == (l = k.error) || l.call(k, h);
                    }));
                    EF(a, b, c, d, e);
                }, HF = function (a, b, c, d) {
                    var e = void 0 === e ? window : e;
                    rF(d, c) && !a.j.$a(b) && ig(b, e.document, d, c);
                }, DF = function (a, b, c, d, e) {
                    var f = void 0 === f ? _.F.document : f;
                    var g = void 0 === g ? qF : g;
                    var h = c.Y, k = c.I;
                    a.o[k] = h.slice();
                    b = Lb(b);
                    pF(h, e);
                    var l, m, n = !(null != (m = null == (l = bv(e.U)) ? void 0 : x(l, 9)) && m) && !!x(d, 5);
                    l = kc(646, function (p, t, u) {
                        var z, y = function () {
                                return IF(a, k, d, e, p, t, u, null != (z = c.G) ? z : '', f);
                            };
                        0 < p && _.v(Ln) ? setTimeout(y, 0) : y();
                    });
                    m = kc(647, function () {
                        var p = function () {
                            for (var t = a.o[k] || [], u = 0; u < t.length; ++u)
                                if (t[u]) {
                                    var z = new Lx();
                                    z = E(z, 8, !0);
                                    z = '{"empty":' + gl(z) + '}';
                                    IF(a, k, d, e, u, z, {
                                        kind: 0,
                                        ra: ''
                                    });
                                }
                            delete a.o[k];
                            t = window;
                            u = new Qh();
                            z = new Rh();
                            var y = String(zb(window));
                            z = Ab(z, 1, y, '');
                            Me(t, Oh(Ph(Fb(Db(u, 5, z), 4, 1), 2), Pb()));
                        };
                        _.v(Ln) ? setTimeout(p, 0) : p();
                    });
                    g = kc(289, g);
                    'wbn' === c.j ? vF(b, n, c, l, g, m) : nF(b, new oF(l, g, m), n);
                    a.V();
                    h = _.G(h);
                    for (g = h.next(); !g.done; g = h.next())
                        g = g.value, n = H(e.P[g.j], 20), l = kc(643, JF(a, g, b, e)), g.dispatchEvent(br, 808, {
                            Cc: l,
                            Rc: n
                        }), a.F.dispatchEvent('slotRequested', 705, new zw(g, 'publisher_ads'));
                }, JF = function (a, b, c, d) {
                    if (Rv(d.U)) {
                        var e = wF(a, [b], { Ca: 1 }, d);
                        xF(a, e);
                        var f = new yB([b], _.v(Sn), a.j, a.l, e, new ot(), d, !0);
                        return Xc(function () {
                            return Lb(BB(f));
                        });
                    }
                    return function () {
                        return c;
                    };
                }, IF = function (a, b, c, d, e, f, g, h, k) {
                    k = void 0 === k ? document : k;
                    var l, m, n, p, t, u, z;
                    return ui(function (y) {
                        switch (y.j) {
                        case 1:
                            l = a.o[b] || [];
                            m = l[e];
                            n = null;
                            if (_.v(go)) {
                                if (!m)
                                    return Ub(646, Error('missing slot')), y.return();
                                l[e] = null;
                                t = H(d.P[m.j], 20);
                                a.G[b] || (a.G[b] = !0, hq(Kb.N(), '4', t));
                                return C(y, aF(a.m, m, f, a.j, d, c, a.l), 5);
                            }
                            l[e] = null;
                            return m ? C(y, aF(a.m, m, f, a.j, d, c, a.l), 4) : (Ub(646, Error('missing slot')), y.return());
                        case 4:
                            n = y.l;
                            p = H(d.P[m.j], 20);
                            a.G[b] || (a.G[b] = !0, hq(Kb.N(), '4', p));
                            y.j = 3;
                            break;
                        case 5:
                            n = y.l;
                        case 3:
                            if (!n)
                                return Ub(646, Error('invalid response: ' + f)), y.return();
                            _.v(lo) || uF(a, m, c, n, d);
                            if (m.A)
                                return y.return();
                            if (u = x(n, 8) || a.O) {
                                var K = k, Q = null != (z = H(n, 34)) ? z : '', S = Wc(m, K);
                                S && Ie(S, _.F, Q, !0);
                                hq(Kb.N(), '5', H(d.P[m.j], 20));
                                m.dispatchEvent(ar, 801, {
                                    $b: null,
                                    isBackfill: !1
                                });
                                Q = _.v(eo);
                                S = d.P[m.j];
                                var X = d.U;
                                if (_.pu(a.j, m)) {
                                    if (Q) {
                                        var ua = {};
                                        ua[m.j] = S;
                                        GF(a, [m], X, ua);
                                    }
                                    if (Q || !dw(m, K)) {
                                        var ja;
                                        (null != (ja = x(S, 10)) ? ja : x(X, 11)) && !_.v(Bo) && ig(m, K, S, X);
                                    }
                                }
                                m.dispatchEvent(cr, 825, {
                                    isEmpty: !0,
                                    slotContentChanged: Q
                                });
                            } else
                                iF(a.I, m, a.j, a.H, d, n, g, k, c, a.l, a.F);
                            ni(y);
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
                    return !x(b.U, 6) || (null == (d = b.P[c.j]) ? 0 : x(d, 17)) ? (a.j.add(c), _.Ig(c, function () {
                        return void a.j.delete(c);
                    }), [c]) : a.pubads.j.filter(function (e) {
                        if (a.j.has(e))
                            return !1;
                        a.j.add(e);
                        _.Ig(e, function () {
                            return void a.j.delete(e);
                        });
                        return !0;
                    });
                };
            KF.prototype.display = function (a, b) {
                var c = LF(this, a, b);
                MF(this.pubads, c, a, { Ca: 1 });
                a = b.getAdUnitPath();
                if ((b = this.l[a]) && !_.v(Qn)) {
                    b = _.G(b);
                    for (c = b.next(); !c.done; c = b.next())
                        c = c.value, MF(this.pubads, c.Y, c.L, c.Md);
                    delete this.l[a];
                }
            };
            KF.prototype.refresh = function (a, b, c) {
                var d = this, e = b[0], f, g = null != (f = null == e ? void 0 : e.j) ? f : '';
                if (_.v(Qn))
                    NF(this.pubads, Wr(g), e), Ew(this.pubads, kc(690, function () {
                        for (var h = {}, k = _.G(b), l = k.next(); !l.done; h = { hb: h.hb }, l = k.next())
                            h.hb = l.value, d.j.add(h.hb), _.Ig(h.hb, function (m) {
                                return function () {
                                    return void d.j.delete(m.hb);
                                };
                            }(h));
                        MF(d.pubads, b, a, c);
                    }));
                else if (this.pubads.l) {
                    e = {};
                    f = _.G(b);
                    for (g = f.next(); !g.done; e = { ib: e.ib }, g = f.next())
                        e.ib = g.value, this.j.add(e.ib), _.Ig(e.ib, function (h) {
                            return function () {
                                return void d.j.delete(h.ib);
                            };
                        }(e));
                    MF(this.pubads, b, a, c);
                } else
                    b.length && x(a.U, 6) ? (NF(this.pubads, Wr(g), e), e = e.getAdUnitPath(), f = this.l[e] || [], f.push({
                        Y: b,
                        L: a,
                        Md: c
                    }), this.l[e] = f) : NF(this.pubads, Ur(g), e);
            };
            var yh = function () {
                Cw.call(this);
                _.v(Mp) && new mC(this);
                this.o = new KF(this);
                this.G = new tF(this);
            };
            _.N(yh, Cw);
            aa = yh.prototype;
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
                Dw(this);
                var g = th(a, b, e), h = g.slotId;
                g = g.Va;
                h && g ? (f && !e && (f.id = h.j), this.Fa(h, g), E(g, 7, d), Iw(f || h.j)) : this.log.M(uh('PubAdsService.display', [
                    a,
                    b,
                    c
                ]));
            };
            aa.hc = function () {
                var a = this, b = Gh.N().j;
                if (x(b, 6) || _.v(Zo))
                    for (var c = _.G(this.j), d = c.next(); !d.done; d = c.next())
                        OF(this, d.value);
                PF(this, b);
                Xq(this, 'rewardedSlotClosed', function (e) {
                    var f = e.detail.slot;
                    e = _.r(a.j, 'find').call(a.j, function (g) {
                        return f === g.l;
                    });
                    GF(a.G, [e], Gh.N().j, Ye());
                });
                hh();
            };
            aa.getName = function () {
                return 'publisher_ads';
            };
            aa.Fa = function (a, b) {
                var c = this;
                x(b, 17) || OF(this, a);
                this.dispatchEvent(dr, 724, {
                    wc: a.j,
                    P: b
                });
                Xq(a, cr, function (d) {
                    var e = d.detail;
                    d = e.size;
                    var f = e.slotContentChanged, g = e.isEmpty;
                    e = new pw(a, 'publisher_ads');
                    g && (e.isEmpty = g);
                    f && (e.slotContentChanged = f);
                    f = a.l.getResponseInformation();
                    d && f && (e.size = [
                        d.width,
                        d.height
                    ], e.sourceAgnosticCreativeId = f.sourceAgnosticCreativeId, e.sourceAgnosticLineItemId = f.sourceAgnosticLineItemId, e.isBackfill = f.isBackfill, e.creativeId = f.creativeId, e.lineItemId = f.lineItemId, e.creativeTemplateId = f.creativeTemplateId, e.advertiserId = f.advertiserId, e.campaignId = f.campaignId, e.yieldGroupIds = f.yieldGroupIds, e.companyIds = f.companyIds);
                    c.dispatchEvent('slotRenderEnded', 708, e);
                });
                Xq(a, $q, function () {
                    return void c.dispatchEvent('slotResponseReceived', 709, new Aw(a, c.getName()));
                });
                Xq(a, Yq, function () {
                    var d = Gh.N().j;
                    d = Sv(d, Ye());
                    c.G.refresh([a], { Ca: 2 }, d);
                });
                Cw.prototype.Fa.call(this, a, b);
            };
            aa.tc = function (a, b) {
                Dw(this);
                OF(this, b);
                this.log.info(Qr());
                var c = x(a.U, 6);
                if (c || !ku.N().$a(b))
                    c && (c = Wc(b, document)) && b.dispatchEvent(Zq, 778, c), x(a.U, 4) && HF(this.G, b, a.U, a.P[b.j]), this.o.display(a, b);
            };
            var OF = function (a, b) {
                    a.l && ou(ku.N(), b);
                }, QF = function (a, b, c) {
                    var d = void 0 === d ? document : d;
                    var e;
                    null != (e = c.P[b.j]) && E(e, 19, !0);
                    Ij(d, new _.Ej('<div id="' + Mj(b.j) + '"></div>', null, _.Dj));
                    Wc(b, d) ? (Dw(a), ou(ku.N(), b), a.o.display(c, b)) : mc('gpt_pb_write', function (f) {
                        Zb(f);
                    });
                };
            yh.prototype.refresh = function (a, b, c) {
                var d = b ? RF(this, b) : this.j;
                if (!d.length)
                    return !1;
                if (_.v(Pn)) {
                    Dw(this);
                    b = _.G(b);
                    for (var e = b.next(); !e.done; e = b.next())
                        e = e.value, this.Fa(e, a.P[e.j]);
                }
                this.o.refresh(a, d, c || { Ca: 2 });
                return !0;
            };
            var MF = function (a, b, c, d) {
                    a.log.info(Xr());
                    if (SF(a, b, d, c) && 1 !== d.Ca)
                        for (b = _.G(b), d = b.next(); !d.done; d = b.next())
                            d = d.value.j, a.dispatchEvent(er, 725, {
                                wc: d,
                                P: c.P[d]
                            });
                }, SF = function (a, b, c, d) {
                    b = b.filter(function (e) {
                        return _.pu(ku.N(), e);
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
                    x(b, 21) && a.l && E(b, 29, Cm());
                }, UF = function (a, b, c, d) {
                    for (var e = _.G(b), f = e.next(); !f.done; f = e.next())
                        f = f.value, lu(ku.N(), f);
                    return GF(a.G, b, c, d);
                }, VF = function (a, b, c, d) {
                    if (!a.l)
                        return a.log.M(Vr(), d[0]), !1;
                    var e = RF(a, d);
                    if (!e.length)
                        return a.log.M(uh('PubAdsService.clear', [d].filter(function (f) {
                            return void 0 !== f;
                        }))), !1;
                    a.log.info(Yr());
                    return UF(a, e, b, c);
                }, RF = function (a, b) {
                    return b.filter(function (c, d) {
                        return c.A ? (a.log.M($r(String(d))), !1) : !0;
                    });
                };
            yh.prototype.destroySlots = function (a, b) {
                a = Cw.prototype.destroySlots.call(this, a, b);
                if (a.length && this.l) {
                    var c, d = null != (c = null == b ? void 0 : b.U) ? c : Gh.N().j, e;
                    b = null != (e = null == b ? void 0 : b.P) ? e : Ye();
                    UF(this, a, d, b);
                }
                return a;
            };
            var NF = function (a, b, c) {
                a.log.M(b, c);
            };
            var WF = function () {
                Cw.apply(this, arguments);
            };
            _.N(WF, Cw);
            WF.N = function () {
                throw Error('Must be overridden');
            };
            var lh = function () {
                WF.call(this);
                this.ads = new D.Map();
                this.G = {};
                this.Ua = !1;
                this.I = this.o = void 0;
                this.V = this.K = !1;
                _.xh(gw).A = !0;
            };
            _.N(lh, WF);
            aa = lh.prototype;
            aa.set = function (a, b) {
                'string' === typeof a && a.length ? (this.G[a] = b, this.log.info(Lr(a, String(b), this.getName()))) : this.log.M(uh('CompanionAdsService.set', [
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
                Dw(this);
                b = th(a, b, c);
                a = b.slotId;
                b = b.Va;
                this.Fa((0, J.T)(a), (0, J.T)(b));
                E(b, 7, d);
                Iw(a.j);
            };
            aa.Fa = function (a, b) {
                var c = this;
                Xq(a, $q, function (d) {
                    x(d.detail, 11) && (XF(c, a).Ld = !0);
                });
                WF.prototype.Fa.call(this, a, b);
            };
            aa.hc = function () {
                YF(this);
            };
            var ZF = function (a) {
                    if (_.v(On) || !_.xh(yh).l)
                        return !1;
                    var b = _.xh(yh).j;
                    a = a.j;
                    return b.length !== a.length ? !1 : !a.some(function (c) {
                        return !_.r(b, 'includes').call(b, c);
                    });
                }, $F = function (a, b) {
                    (b = void 0 === b ? '' : b) && !a.V && mc('ima_sdk_v', function (d) {
                        a.V = !0;
                        q(d, 'v', b);
                    });
                    var c = Gh.N().j;
                    return String(H(c, 26));
                }, aG = function (a, b) {
                    var c = Gh.N().j, d = Ye();
                    if (_.xh(yh).l) {
                        var e = { Ca: 3 };
                        a.o && (e.Wa = a.o);
                        a.I && (e.Xa = a.I);
                        a = null !== b && void 0 !== b ? b : a.j;
                        c = Sv(c, d);
                        e.Wa && 'number' !== typeof e.Wa || e.Xa && 'number' !== typeof e.Xa || _.xh(yh).refresh(c, a, e);
                    } else
                        b && b[0] && a.log.error(Ur(b[0].j));
                }, bG = function (a, b) {
                    var c;
                    return _.xh(yh).l && !(null === (c = a.ads.get(b)) || void 0 === c || !c.Ld);
                }, cG = function (a, b) {
                    return a.j.filter(function (c) {
                        return _.r(b, 'includes').call(b, c.toString());
                    });
                };
            lh.prototype.getName = function () {
                return 'companion_ads';
            };
            var YF = function (a) {
                    _.v(On) || rc(70, function () {
                        if (!a.K) {
                            var b = document;
                            a.log.info(Or('GPT CompanionAds'));
                            Ol(b, bj(eb($a('https://pagead2.googlesyndication.com/pagead/show_companion_ad.js')).toString()));
                            a.K = !0;
                        }
                    }, !0);
                }, eG = function (a, b) {
                    if (!a.l || bG(a, b))
                        return !1;
                    var c = Wc(b);
                    if (!c)
                        return !1;
                    var d = (a.ads.get(b) || {}).content;
                    if (void 0 === d)
                        return !1;
                    a.ads.delete(b);
                    pl(c, Va(d));
                    d = c = null;
                    var e = gv(Gh.N(), b.j);
                    e && 1 === I(e, Mc, 5).length && yf(I(e, Mc, 5)[0], 1) && yf(I(e, Mc, 5)[0], 2) && (c = H(I(e, Mc, 5)[0], 1), d = H(I(e, Mc, 5)[0], 2));
                    dG(a, b, c, d);
                    return !0;
                };
            lh.prototype.tc = function (a, b) {
                _.v(On) || eG(this, b);
            };
            var fG = function (a, b, c) {
                    if (!_.v(On))
                        return b && c && 'string' === typeof c ? (XF(a, b).content = c, eG(a, b)) : !1;
                }, dG = function (a, b, c, d) {
                    b = new pw(b, a.getName());
                    null != c && null != d && (b.size = [
                        c,
                        d
                    ]);
                    a.dispatchEvent('slotRenderEnded', 67, b);
                }, XF = function (a, b) {
                    var c = a.ads.get(b);
                    c || (c = {}, a.ads.set(b, c), _.Ig(b, function () {
                        return a.ads.delete(b);
                    }));
                    return c;
                };
            Bi(lh);
            var gG = function () {
                Cw.apply(this, arguments);
            };
            _.N(gG, Cw);
            gG.N = function () {
                throw Error('Must be overridden');
            };
            var oh = function () {
                gG.apply(this, arguments);
                this.G = new D.Map();
            };
            _.N(oh, gG);
            oh.prototype.getName = function () {
                return 'content';
            };
            oh.prototype.display = function (a, b, c, d) {
                c = void 0 === c ? '' : c;
                d = void 0 === d ? '' : d;
                Dw(this);
                b = th(a, b, c);
                a = b.slotId;
                b = b.Va;
                this.Fa((0, J.T)(a), (0, J.T)(b));
                E(b, 7, d);
                Iw(a.j);
            };
            oh.prototype.destroySlots = function (a) {
                a = gG.prototype.destroySlots.call(this, a);
                for (var b = _.G(a), c = b.next(); !c.done; c = b.next())
                    this.G.delete(c.value);
                return a;
            };
            var hG = function (a, b) {
                var c = a.G.get(b), d = Wc(b);
                !(c && void 0 !== c.content && d && a.l) || c && c.Pc || (c.Pc = !0, pl(d, Va(c.content)), mc('gpt_cont_svc', function (e) {
                    var f;
                    q(e, 'cl', String(null === (f = null === c || void 0 === c ? void 0 : c.content) || void 0 === f ? void 0 : f.length));
                    Zb(e, [b.getAdUnitPath()]);
                }), a.dispatchEvent('slotRenderEnded', 819, new pw(b, a.getName())));
            };
            oh.prototype.hc = function () {
            };
            oh.prototype.tc = function (a, b) {
                hG(this, b);
            };
            var iG = function (a, b, c) {
                if (_.r(a.j, 'includes').call(a.j, b) && 'string' === typeof c && c.length) {
                    var d = a.G.get(b);
                    d ? d.content = c : a.G.set(b, {
                        content: c,
                        Pc: void 0
                    });
                    _.Ig(b, function () {
                        return void a.G.delete(b);
                    });
                    hG(a, b);
                }
            };
            Bi(oh);
            var Mh = function (a) {
                P(this, a, null, null);
            };
            _.N(Mh, O);
            var jG = function () {
                    this.j = function () {
                    };
                }, kG = function () {
                    var a = _.xh(gw);
                    _.xh(jG).j(a);
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
                    zq(_.xh(yq), c, d);
                    lG(a, b);
                    b = a;
                    _.xh(jG).j = xq(wq, b);
                    _.xh(Bq).j();
                }, lG = function (a, b) {
                    b = void 0 === b ? 0 : b;
                    var c = _.xh(Bq);
                    c.l = function (d, e) {
                        return xq(sq, a, function () {
                            return !1;
                        })(d, e, b);
                    };
                    c.A = function (d, e) {
                        return xq(tq, a, function () {
                            return 0;
                        })(d, e, b);
                    };
                    c.m = function (d, e) {
                        return xq(uq, a, function () {
                            return '';
                        })(d, e, b);
                    };
                    c.H = function (d, e) {
                        return xq(vq, a, function () {
                            return [];
                        })(d, e, b);
                    };
                    c.j = function () {
                        xq(pq, a)(b);
                    };
                };
            var nG = Vi('https://securepubads.g.doubleclick.net/');
            var oG = function (a) {
                this.push = w(76, function (b) {
                    return a.push.apply(a, arguments);
                });
            };
            _.N(oG, Au);
            Qc(oG, 2);
            var pG = function (a) {
                var b = this;
                this.addEventListener = w(86, function (c, d) {
                    if ('function' !== typeof d)
                        return Bc().M(uh('Service.addEventListener', [
                            c,
                            d
                        ])), b;
                    var e = kh(c);
                    if (!e)
                        return Bc().M(gs(c)), b;
                    a.addEventListener(e, d);
                    return b;
                });
                this.removeEventListener = w(904, function (c, d) {
                    var e = kh(c);
                    'function' === typeof d && e ? a.removeEventListener(e, d) : Bc().M(uh('Service.removeEventListener', [
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
                    return Dw(a);
                }, !0);
                this.getName = w(575, function () {
                    return a.getName();
                });
            };
            _.N(pG, Au);
            var mh = function (a) {
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
                    return Sl(a.G);
                });
                this.display = w(558, function (c, d, e, f) {
                    return a.display(c, d, void 0 === e ? '' : e, void 0 === f ? '' : f);
                });
                this.notifyUnfilledSlots = w(69, function (c) {
                    a.Ua && aG(a, cG(a, c));
                });
                this.isRoadblockingSupported = w(111, function () {
                    return ZF(a);
                });
                this.refreshAllSlots = w(60, function () {
                    a.Ua && aG(a);
                });
                this.setVideoSession = w(61, function (c, d, e) {
                    a.o = d;
                    a.I = e;
                    'number' === typeof c && E(Gh.N().j, 29, c);
                });
                this.getDisplayAdsCorrelator = w(62, function (c) {
                    return $F(a, void 0 === c ? '' : c);
                });
                this.getVideoStreamCorrelator = w(63, function () {
                    var c;
                    return null !== (c = H(Gh.N().j, 29)) && void 0 !== c ? c : 0;
                });
                this.isSlotAPersistentRoadblock = w(64, function (c) {
                    var d = _.r(a.j, 'find').call(a.j, function (e) {
                        return e.l === c;
                    });
                    return !!d && bG(a, d);
                });
                this.onImplementationLoaded = w(65, function () {
                    a.log.info(Pr('GPT CompanionAds'));
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
                    'boolean' === typeof c && (a.Ua = c);
                });
            };
            _.N(mh, pG);
            Qc(mh, 3);
            var ph = function (a) {
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
            _.N(ph, pG);
            Qc(ph, 4);
            var qG = function () {
                var a = Bc();
                this.getAllEvents = w(563, function () {
                    return gD ? pr(a.j).slice() : [];
                });
                this.getEventsBySlot = w(565, function (b) {
                    return gD ? rr(a, b).slice() : [];
                });
                this.getEventsByLevel = w(566, function (b) {
                    return gD ? sr(a, b).slice() : [];
                });
            };
            _.N(qG, Au);
            Qc(qG, 5);
            var vh = function (a, b) {
                Vq.call(this);
                this.j = a;
                this.l = b;
            };
            _.N(vh, Vq);
            var rh = function (a, b) {
                var c = this, d = Bc(), e = a.j, f = Gh.N().j, g = gv(Gh.N(), e.j);
                this.set = w(83, function (h, k) {
                    'page_url' === h && k && (h = [Eu(Du(new Cf(), h), [String(k)])], cl(g, 3, h));
                    return c;
                });
                this.get = w(84, function (h) {
                    if ('page_url' !== h)
                        return null;
                    var k;
                    return null == (k = (L = I(g, Cf, 3), _.r(L, 'find')).call(L, function (l) {
                        return Df(l) === h;
                    })) ? void 0 : H(k, 2)[0];
                });
                this.setClickUrl = w(79, function (h) {
                    if ('string' !== typeof h)
                        return d.M(uh('Slot.setClickUrl', [h]), e), c;
                    E(g, 7, h);
                    return c;
                });
                this.setTargeting = w(81, function (h, k) {
                    Ou(e, g, h, k, d);
                    return c;
                });
                this.updateTargetingFromMap = w(85, function (h) {
                    Pu(e, g, h, d);
                    return c;
                });
                this.display = w(78, function () {
                    QF(b, e, Sv(f, Ye()));
                });
                this.setTagForChildDirectedTreatment = w(80, function (h) {
                    if (0 === h || 1 === h) {
                        var k = bv(f) || new Yu();
                        E(k, 5, h);
                        Db(f, 25, k);
                    }
                    return c;
                });
                this.setForceSafeFrame = w(567, function (h) {
                    if ('boolean' !== typeof h)
                        return d.M(uh('PassbackSlot.setForceSafeFrame', [String(h)]), e), c;
                    E(g, 12, h);
                    return c;
                });
                this.setTagForUnderAgeOfConsent = w(448, function (h) {
                    if (0 === h || 1 === h) {
                        var k = bv(f) || new Yu();
                        E(k, 6, h);
                        Db(f, 25, k);
                    }
                    return c;
                });
            };
            _.N(rh, Au);
            Qc(rh, 6);
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
                    var b = _.xh(gw), c = [];
                    a = _.G(a);
                    for (var d = a.next(); !d.done; d = a.next()) {
                        d = d.value;
                        b.H = d;
                        var e = Aq(9);
                        1 === e.length && (c.push(d), c.push(d + '-' + e[0]));
                    }
                    return c;
                }, tG = _.Mi(function () {
                    return um('google_DisableInitialLoad is deprecated and will be removed. Please use googletag.pubads().isInitialLoadDisabled() instead to check if initial load has been disabled.');
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
                }, zh = function (a) {
                    pG.call(this, a);
                    var b = this, c = Bc(), d = Gh.N().j, e = Ye(), f = !1;
                    this.setTargeting = w(1, function (g, h) {
                        var k = null;
                        'string' === typeof h ? k = [h] : Array.isArray(h) ? k = h : qa(h) && (k = _.r(Array, 'from').call(Array, h));
                        var l = 'string' === typeof g && !hj(g);
                        k = k && va(k);
                        var m, n = null != (m = null == k ? void 0 : k.every(function (p) {
                                return 'string' === typeof p;
                            })) ? m : !1;
                        if (!l || !n)
                            return c.M(uh('PubAdsService.setTargeting', [
                                g,
                                h
                            ])), b;
                        h = (L = I(d, Cf, 2), _.r(L, 'find')).call(L, function (p) {
                            return Df(p) === g;
                        });
                        if ('gpt-beta' === g) {
                            if (a.l)
                                return c.M(ls(k.join())), b;
                            if (h)
                                return c.M(ms(k.join())), b;
                            k = sG(k);
                        }
                        h ? Eu(h, k) : (h = Eu(Du(new Cf(), g), k), Xd(d, 2, h, Cf));
                        c.info(es(g, k.join(), a.getName()));
                        return b;
                    });
                    this.clearTargeting = w(2, function (g) {
                        if (void 0 === g)
                            return cl(d, 2, []), c.info(js(a.getName())), b;
                        if ('gpt-beta' === g)
                            return c.M(ns(g)), b;
                        var h = I(d, Cf, 2), k = _.r(h, 'findIndex').call(h, function (l) {
                                return Df(l) === g;
                            });
                        if (0 > k)
                            return c.M(bs(g, a.getName())), b;
                        h.splice(k, 1);
                        cl(d, 2, h);
                        c.info(as(g, a.getName()));
                        return b;
                    });
                    this.getTargeting = w(38, function (g) {
                        if ('string' !== typeof g)
                            return c.M(uh('PubAdsService.getTargeting', [g])), [];
                        var h = (L = I(d, Cf, 2), _.r(L, 'find')).call(L, function (k) {
                            return Df(k) === g;
                        });
                        return h ? H(h, 2).slice() : [];
                    });
                    this.getTargetingKeys = w(39, function () {
                        return I(d, Cf, 2).map(function (g) {
                            return Df(g);
                        });
                    });
                    this.setCategoryExclusion = w(3, function (g) {
                        if ('string' !== typeof g || hj(g))
                            return c.M(uh('PubAdsService.setCategoryExclusion', [g])), b;
                        (L = H(d, 3), _.r(L, 'includes')).call(L, g) || Ef(d, 3, g);
                        c.info(cs(g));
                        return b;
                    });
                    this.clearCategoryExclusions = w(4, function () {
                        E(d, 3, Ja([]));
                        c.info(ds());
                        return b;
                    });
                    this.disableInitialLoad = w(5, function () {
                        E(d, 4, !0);
                        f || (f = !0, uG());
                    });
                    this.enableSingleRequest = w(6, function () {
                        if (a.l && !x(d, 6))
                            return c.M(Rr('PubAdsService.enableSingleRequest')), !1;
                        c.info(Sr('single request'));
                        E(d, 6, !0);
                        return !0;
                    });
                    this.enableAsyncRendering = w(7, function () {
                        return !0;
                    });
                    this.enableSyncRendering = w(8, function () {
                        um('GPT synchronous rendering is no longer supported, ads will be requested and rendered asynchronously. See https://support.google.com/admanager/answer/9212594 for more details.');
                        return !1;
                    });
                    this.enableLazyLoad = w(485, function (g) {
                        var h = new Xu();
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
                        if (_.v(Eo) && 'object' === typeof g && g) {
                            var h = g.horizontal;
                            g = g.vertical;
                            'boolean' === typeof h && E(d, 15, h);
                            'boolean' === typeof g && E(d, 31, g);
                        } else
                            h = !!g, c.info(Tr('centering', String(h))), E(d, 15, h);
                    });
                    this.definePassback = w(10, function (g, h) {
                        return (g = wh(a, g, h)) && g.Mc;
                    });
                    this.refresh = w(11, function (g, h) {
                        h = void 0 === h ? {} : h;
                        if (g && !Array.isArray(g) || !_.ia(h) || h.changeCorrelator && 'boolean' !== typeof h.changeCorrelator)
                            c.M(uh('PubAdsService.refresh', _.r(Array, 'from').call(Array, arguments)));
                        else {
                            h && 0 == h.changeCorrelator || E(d, 26, Cm());
                            var k = g ? rG(g, a) : a.j;
                            a.refresh(Sv(d, e), k) || c.M(uh('PubAdsService.refresh', _.r(Array, 'from').call(Array, arguments)));
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
                        if ('object' === typeof g && g && _.v(Fo)) {
                            if ('boolean' === typeof g.collapseEmpty) {
                                E(d, 11, g.collapseEmpty);
                                var h;
                                av(d, null != (h = x(d, 30)) ? h : !0);
                            }
                            if ('boolean' === typeof g.startCollapsed) {
                                E(d, 10, g.startCollapsed);
                                var k;
                                av(d, null != (k = x(d, 30)) ? k : !0);
                            }
                            'boolean' === typeof g.allowCollapseOnScreen && av(d, !g.allowCollapseOnScreen);
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
                        c.info(Zr(String(l)));
                        return !!x(d, 11);
                    });
                    this.clear = w(15, function (g) {
                        if (Array.isArray(g))
                            return VF(a, d, e, rG(g, a));
                        if (void 0 === g)
                            return VF(a, d, e, a.j);
                        c.M(uh('PubAdsService.clear', [g]));
                        return !1;
                    });
                    this.setLocation = w(16, function (g) {
                        if ('string' !== typeof g)
                            return c.M(uh('PubAdsService.setLocation', [g])), b;
                        E(d, 8, g);
                        return b;
                    });
                    this.setCookieOptions = w(17, function (g) {
                        if (0 !== g && 1 !== g)
                            return c.M(Fc('PubadsService.setTagForUnderAgeOfConsent', Dc(g), '0,1')), b;
                        E(d, 24, g);
                        return b;
                    });
                    this.setTagForChildDirectedTreatment = w(18, function (g) {
                        if (1 !== g && 0 !== g)
                            return c.M(Fc('PubadsService.setTagForChildDirectedTreatment', Dc(g), '0,1')), b;
                        var h = bv(d) || new Yu();
                        E(h, 5, g);
                        Db(d, 25, h);
                        return b;
                    });
                    this.clearTagForChildDirectedTreatment = w(19, function () {
                        var g = bv(d);
                        if (!g)
                            return b;
                        E(g, 5, void 0);
                        Db(d, 25, g);
                        return b;
                    });
                    this.setPublisherProvidedId = w(20, function (g) {
                        g = String(g);
                        c.info(Tr('PPID', g));
                        E(d, 16, g);
                        return b;
                    });
                    this.set = w(21, function (g, h) {
                        if ('string' !== typeof g || !g.length || void 0 === xu()[g] || 'string' !== typeof h)
                            return c.M(uh('PubAdsService.set', [
                                g,
                                h
                            ])), b;
                        var k = (L = I(d, Cf, 14), _.r(L, 'find')).call(L, function (l) {
                            return Df(l) === g;
                        });
                        k ? Eu(k, [h]) : (k = Du(new Cf(), g), Ef(k, 2, h), Xd(d, 14, k, Cf));
                        c.info(Lr(g, String(h), a.getName()));
                        return b;
                    });
                    this.get = w(22, function (g) {
                        if ('string' !== typeof g)
                            return c.M(uh('PubAdsService.get', [g])), null;
                        var h = (L = I(d, Cf, 14), _.r(L, 'find')).call(L, function (k) {
                            return Df(k) === g;
                        });
                        return (h = h && H(h, 2)) ? h[0] : null;
                    });
                    this.getAttributeKeys = w(23, function () {
                        return I(d, Cf, 14).map(function (g) {
                            return Df(g);
                        });
                    });
                    this.display = w(24, function (g, h, k, l) {
                        return void a.display(g, h, void 0 === k ? '' : k, void 0 === l ? '' : l);
                    });
                    this.updateCorrelator = w(25, function () {
                        um(Mq('update'));
                        c.M(qs());
                        E(d, 26, Cm());
                        return b;
                    });
                    this.defineOutOfPagePassback = w(35, function (g) {
                        g = wh(a, g, [
                            1,
                            1
                        ]);
                        if (!g)
                            return null;
                        E(g.Va, 15, 1);
                        return g.Mc;
                    });
                    this.setForceSafeFrame = w(36, function (g) {
                        if ('boolean' !== typeof g)
                            return c.M(uh('PubAdsService.setForceSafeFrame', [Dc(g)])), b;
                        E(d, 13, g);
                        return b;
                    });
                    this.setSafeFrameConfig = w(37, function (g) {
                        var h = ov(g);
                        if (!h)
                            return c.M(uh('PubAdsService.setSafeFrameConfig', [g])), b;
                        Db(d, 18, h);
                        return b;
                    });
                    this.setRequestNonPersonalizedAds = w(445, function (g) {
                        if (0 !== g && 1 !== g)
                            return c.M(Fc('PubAdsService.setRequestNonPersonalizedAds', Dc(g), '0,1')), b;
                        var h = bv(d) || new Yu();
                        E(h, 8, !!g);
                        Db(d, 25, h);
                        return b;
                    });
                    this.setTagForUnderAgeOfConsent = w(447, function (g) {
                        g = void 0 === g ? 2 : g;
                        if (2 !== g && 0 !== g && 1 !== g)
                            return c.M(Fc('PubadsService.setTagForUnderAgeOfConsent', Dc(g), '2,0,1')), b;
                        var h = bv(d) || new Yu();
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
                        0 < g && _.xh(yq).j(g);
                    });
                    this.setCorrelator = w(28, function (g) {
                        um(Mq('set'));
                        c.M(ps());
                        if (Ls(window))
                            return b;
                        if (!('number' === typeof g && isFinite(g) && 0 == g % 1 && 0 < g))
                            return c.M(uh('PubadsService.setCorrelator', [Dc(g)])), b;
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
                        yf(d, 22) ? (E(d, 21, !0), E(d, 22, String(g || '')), E(d, 23, String(h || '')), PF(a, d)) : (E(d, 21, !0), PF(a, d), 'string' === typeof g && E(d, 19, g), 'string' === typeof h && E(d, 20, h));
                    });
                    this.getImaContent = w(329, function () {
                        return yf(d, 22) ? TF(a, d) : a.l ? {
                            vid: H(d, 19) || '',
                            cmsid: H(d, 20) || ''
                        } : null;
                    });
                    this.isInitialLoadDisabled = w(572, function () {
                        return !!x(d, 4);
                    });
                    this.setPrivacySettings = w(648, function (g) {
                        if (!_.ia(g))
                            return c.M(uh('PubAdsService.setPrivacySettings', [g])), b;
                        var h = bv(d) || new Yu(), k = g.restrictDataProcessing, l = g.childDirectedTreatment, m = g.underAgeOfConsent, n = g.limitedAds, p = g.nonPersonalizedAds;
                        'boolean' === typeof p ? E(h, 8, p) : void 0 !== p && c.M(Cc('PubAdsService.setPrivacySettings', Dc(g), 'nonPersonalizedAds', Dc(p)));
                        'boolean' === typeof k ? E(h, 1, k) : void 0 !== k && c.M(Cc('PubAdsService.setPrivacySettings', Dc(g), 'restrictDataProcessing', Dc(k)));
                        'boolean' === typeof n ? E(h, 9, n) : void 0 !== n && c.M(Cc('PubAdsService.setPrivacySettings', Dc(g), 'limitedAds', Dc(n)));
                        void 0 !== m && (null === m ? E(h, 6, 2) : !1 === m ? E(h, 6, 0) : !0 === m ? E(h, 6, 1) : c.M(Cc('PubAdsService.setPrivacySettings', Dc(g), 'underAgeOfConsent', Dc(m))));
                        void 0 !== l && (null === l ? E(h, 5, void 0) : !1 === l ? E(h, 5, 0) : !0 === l ? E(h, 5, 1) : c.M(Cc('PubAdsService.setPrivacySettings', Dc(g), 'childDirectedTreatment', Dc(l))));
                        Db(d, 25, h);
                        return b;
                    });
                };
            _.N(zh, pG);
            Qc(zh, 7);
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
                    var a = this, b = [], c = [], d = Bc();
                    this.addSize = kc(88, function (e, f) {
                        if (!Su(e) || !(Ru(f) || Array.isArray(f) && f.every(Ru)))
                            return c.push([
                                e,
                                f
                            ]), d.M(uh('SizeMappingBuilder.addSize', [
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
                            return d.M(Jr(Dc(c))), null;
                        pa(b);
                        return b;
                    });
                };
            var Bh = {
                    REWARDED: 4,
                    TOP_ANCHOR: 2,
                    BOTTOM_ANCHOR: 3,
                    INTERSTITIAL: 5
                }, wG = function () {
                    var a = Kg();
                    a.enums || (a.enums = { OutOfPageFormat: Bh });
                };
            var Hh = new D.Map([
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
                var a = new Wx(), b = new Xx(), c = zb(_.F);
                Ab(a, 1, c, 0);
                c = Bb().join();
                Ab(a, 5, c, '');
                Fb(a, 2, 1);
                Db(b, 1, a);
                a = Vx();
                c = _.v(Ep);
                a = hl(a, 8, c);
                c = _.v(Fp);
                a = hl(a, 9, c);
                a = hl(a, 10, !0);
                c = _.v(Ip);
                a = hl(a, 13, c);
                c = _.v(Kp);
                a = hl(a, 14, c);
                a = hl(a, 16, !0);
                Db(b, 2, a);
                window.google_rum_config = el(b);
            };
            var yG = function (a) {
                    var b = [];
                    b = vd();
                    if (a) {
                        if (!Array.isArray(a))
                            return Bc().M(uh('googletag.destroySlots', [a])), !1;
                        la(a);
                        b = b.filter(function (d) {
                            return _.r(a, 'includes').call(a, d.l);
                        });
                    }
                    if (!b.length)
                        return !1;
                    var c = Gh.N().j;
                    c = Sv(c, Ye());
                    Gw(b, c);
                    lw(_.xh(Dh), b);
                    return !0;
                }, zG = kc(297, function () {
                    try {
                        for (var a = _.v(Xo) ? [].concat(_.ec(document.getElementsByTagName('script'))) : _.r(Array, 'from').call(Array, document.getElementsByTagName('script')), b = _.G(a), c = b.next(); !c.done; c = b.next()) {
                            var d = c.value;
                            a = d;
                            var e = d.src;
                            if (e && (-1 != e.indexOf('/tag/js/gpt.js') || -1 != e.indexOf('/tag/js/gpt_mobile.js')) && !a.googletag_executed && d.textContent) {
                                a.googletag_executed = !0;
                                var f = document.createElement('script'), g = Xa(d.textContent);
                                var h = g instanceof ll ? Ya(g) : g instanceof Xi && g.constructor === Xi ? g.j : 'type_error:SafeScript';
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
                    var a = window, b = new bu(a);
                    fw(b).then(kc(894, function (c) {
                        var d = new Ts(a), e = new Az(a);
                        mc('cmpMet', function (f) {
                            Zb(f);
                            q(f, 'fc', c ? 1 : 0);
                            q(f, 'tcfv1', a.__cmp ? 1 : 0);
                            q(f, 'tcfv2', Vs(d) ? 1 : 0);
                            q(f, 'usp', Cz(e) ? 1 : 0);
                            q(f, 'ptt', 17);
                        }, { wa: _.lb(np) });
                    }));
                };
            (function (a, b) {
                var c, d, e, f, g, h, k, l;
                return ui(function (m) {
                    try {
                        if (window.googletag.evalScripts)
                            return window.googletag.evalScripts(), m.return();
                        cA();
                        dh('evalScripts', zG);
                        try {
                            mG();
                        } catch (n) {
                            Vb(408, n, !0);
                        }
                        _.Xb(260) && Iv();
                        tB = _.xc();
                        try {
                            kG(), Aq(13), Aq(3);
                        } catch (n) {
                            Vb(408, n, !0);
                        }
                        ew('gpt-tag-load');
                        c = b(a);
                        _.xC.N().A = c;
                        _.lb(np) && AG();
                        rc(827, function () {
                            'function' === typeof document.interestCohort && _.v(jp) && (ku.N().l = document.interestCohort());
                        }, !0);
                        (d = Cq(tp)) && rc(862, function () {
                            Am(d, document);
                        }, !0);
                        ng();
                        dh('defineOutOfPageSlot', kc(73, function (n, p) {
                            'string' === typeof n && 0 < n.length && (null == p || 'string' === typeof p || 'number' === typeof p && Ch(p)) ? n = Fh(n, 'number' === typeof p ? p : 1, 'string' === typeof p ? p : void 0) : (Bc().error(uh('googletag.defineOutOfPageSlot', [
                                n,
                                p
                            ]), void 0, _.v(xn)), n = null);
                            if (!n)
                                return null;
                            var t;
                            return null != (t = n.l) ? t : null;
                        }));
                        dh('defineSlot', nw);
                        dh('defineUnit', nw);
                        dh('getWindowsThatCanCommunicateWithHostpageLibrary', kw);
                        dh('display', Iw);
                        wG();
                        dh('getVersion', Qb);
                        dh('companionAds', w(816, function () {
                            return nh();
                        }));
                        dh('content', w(817, function () {
                            return qh();
                        }));
                        dh('pubads', function () {
                            return Ah();
                        });
                        dh('setAdIframeTitle', w(729, yg));
                        dh('getEventLog', function () {
                            return new qG();
                        });
                        dh('sizeMapping', kc(90, function () {
                            return new vG();
                        }));
                        dh('enableServices', kc(91, function () {
                            for (var n = _.G(Bw), p = n.next(); !p.done; p = n.next())
                                p = p.value, p.l && Bc().info(Mr()), Dw(p);
                        }));
                        dh('destroySlots', kc(75, yG));
                        dh('apiReady', !0);
                        _.v(Jn) && Xe();
                        e = function () {
                            Jh();
                            rc(77, function () {
                                var n = Kg().cmd;
                                if (!n || Array.isArray(n)) {
                                    var p = new xs();
                                    Kg().cmd = Rc(p, function () {
                                        return new oG(p);
                                    });
                                    n && 0 < n.length && p.push.apply(p, n);
                                }
                            });
                        };
                        Kg().fifWin && 'complete' != document.readyState ? Dq(window, function () {
                            window.setTimeout(e, 0);
                        }) : e();
                        zG();
                        if (_.v(Mp) || Kb.N().j)
                            xG(), Ol(document, bj(eb(_.v(Np) ? c.Qd : c.Rd).toString()));
                        _.v(no) && Uh();
                        _.v(Nn) && Jj('script[nonce]', void 0) && (f = new Yb('gpt_nonce_csp'), Zb(f), ac(f));
                        g = _.lb(Mn);
                        0 !== g && (h = document.createElement('script'), k = bj(Ui(Vi(1 == g ? 'https://pagead2.googlesyndication.com/pagead/managed/js/m202102160101/pubads_impl.js' : 'https://securepubads.g.doubleclick.net/gpt/pubads_impl_2021021602.js'))), xd(h, dj(k, String(Math.random()))), l = _.xc(), (document.head || document.body || document.documentElement).appendChild(h), h.onload = function () {
                            mc('gpt_bvslt', function (n) {
                                Zb(n);
                                q(n, 't', _.xc() - l);
                                q(n, 'f', g);
                            }, { wa: 1 });
                        });
                    } catch (n) {
                        Vb(106, n);
                    }
                    ni(m);
                });
            }(Pb(), function (a) {
                return {
                    hd: function (b) {
                        return $a(Ui(nG) + 'gpt/pubads_impl_' + b + '_' + a + '.js');
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