{
    const $___mock_ba1c6ba55dfe66f1 = {};
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
    })($___mock_ba1c6ba55dfe66f1);
    const $___mock_c4607d10b0acbf6b = {};
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
    })($___mock_c4607d10b0acbf6b);
    (function () {
        !function (t) {
            var e = {};
            function n(r) {
                if (e[r])
                    return e[r].exports;
                var i = e[r] = {
                    i: r,
                    l: !1,
                    exports: {}
                };
                return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
            }
            n.m = t, n.c = e, n.d = function (t, e, r) {
                n.o(t, e) || Object.defineProperty(t, e, {
                    enumerable: !0,
                    get: r
                });
            }, n.r = function (t) {
                'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 });
            }, n.t = function (t, e) {
                if (1 & e && (t = n(t)), 8 & e)
                    return t;
                if (4 & e && 'object' == typeof t && t && t.__esModule)
                    return t;
                var r = Object.create(null);
                if (n.r(r), Object.defineProperty(r, 'default', {
                        enumerable: !0,
                        value: t
                    }), 2 & e && 'string' != typeof t)
                    for (var i in t)
                        n.d(r, i, function (e) {
                            return t[e];
                        }.bind(null, i));
                return r;
            }, n.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default;
                } : function () {
                    return t;
                };
                return n.d(e, 'a', e), e;
            }, n.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }, n.p = '', n(n.s = 26);
        }([
            function (t, e, n) {
                'use strict';
                function r(t) {
                    return (r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t;
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                    })(t);
                }
                function i(t) {
                    try {
                        var e = parseInt(t, 10);
                        if (!isNaN(e))
                            return !(e <= 0) && (100 <= e || 100 * Math.random() <= e);
                    } catch (t) {
                    }
                    return !1;
                }
                function o(t, e) {
                    var n = parseInt(e, 10), r = [], i = 0;
                    if (!u(t))
                        return r;
                    if (isNaN(n) || n < 1)
                        return [t];
                    for (var o = t.length; i < o;) {
                        var c = i;
                        i += n, r.push(t.slice(c, i));
                    }
                    return r;
                }
                function c() {
                    return ''.concat(Math.round(1000000000000 * Math.random())).concat(Date.now());
                }
                function a(t) {
                    for (var e = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', n = new Array(t), r = 0; r < t; r++)
                        n[r] = e[Math.floor(Math.random() * e.length)];
                    return n.join('');
                }
                function s(t) {
                    return 'object' === r(t) && null !== t;
                }
                function u(t) {
                    return '[object Array]' === Object.prototype.toString.call(t);
                }
                function d(t, e) {
                    return s(t) && void 0 !== t[e] && '' !== t[e];
                }
                function f() {
                    const $___old_72df7137a3b242c5 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_72df7137a3b242c5)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_ba1c6ba55dfe66f1.localStorage));
                        return function () {
                            var t = 'amzn_lsTest';
                            try {
                                return window.localStorage.setItem(t, t), window.localStorage.removeItem(t), !0;
                            } catch (t) {
                                return !1;
                            }
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_72df7137a3b242c5)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_72df7137a3b242c5));
                    }
                }
                function b(t, e) {
                    return -1 !== t.indexOf(e);
                }
                function l() {
                    return document.cookie.split('; ').map(function (t) {
                        return t.split('=');
                    });
                }
                function p(t) {
                    var e = new Date();
                    return e.setDate(e.getDate() + t), e.toUTCString();
                }
                function m(t) {
                    try {
                        var e = t.innerWidth || t.document.documentElement.clientWidth || t.document.body.clientWidth, n = t.innerHeight || t.document.documentElement.clientHeight || t.document.body.clientHeight;
                        return ''.concat(e, 'x').concat(n);
                    } catch (t) {
                    }
                    return 'x';
                }
                function g(t, e) {
                    return decodeURIComponent(t).split('?')[0].split('#')[0] === decodeURIComponent(e).split('?')[0].split('#')[0];
                }
                function y(t) {
                    var e = Object.keys(t);
                    return e.filter(function (e) {
                        return t[e];
                    }).length === e.length;
                }
                n.d(e, 'n', function () {
                    return i;
                }), n.d(e, 'c', function () {
                    return o;
                }), n.d(e, 'e', function () {
                    return c;
                }), n.d(e, 'f', function () {
                    return a;
                }), n.d(e, 'l', function () {
                    return s;
                }), n.d(e, 'k', function () {
                    return u;
                }), n.d(e, 'm', function () {
                    return d;
                }), n.d(e, 'i', function () {
                    return f;
                }), n.d(e, 'j', function () {
                    return b;
                }), n.d(e, 'd', function () {
                    return l;
                }), n.d(e, 'g', function () {
                    return p;
                }), n.d(e, 'h', function () {
                    return m;
                }), n.d(e, 'b', function () {
                    return g;
                }), n.d(e, 'a', function () {
                    return y;
                });
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'b', function () {
                    return d;
                }), n.d(e, 'c', function () {
                    return f;
                }), n.d(e, 'd', function () {
                    return b;
                }), n.d(e, 'a', function () {
                    return l;
                });
                var r = n(0), i = n(3), o = n(2), c = n(5), a = n(6), s = Object(r.n)(10), u = [];
                function d(t, e) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] && arguments[2];
                    try {
                        (n || Object(c.d)('errors')) && console.error(t);
                        var r = {
                            ts: Date.now(),
                            url: encodeURIComponent(Object(a.g)(window)),
                            r: encodeURIComponent(Object(a.h)(window)),
                            _type: 'apsLibraryError',
                            e: {
                                et: t.name,
                                el: e,
                                msg: t.message
                            }
                        };
                        return u.push(r), o.a.dispatch({
                            type: 'LOG_ERROR',
                            error: r
                        }), !!s && (Object(i.b)(r), !0);
                    } catch (t) {
                        console.error(t);
                    }
                    return !1;
                }
                function f(t, e, n) {
                    var r = !(3 < arguments.length && void 0 !== arguments[3]) || arguments[3];
                    return d({
                        name: e,
                        message: ''.concat(t, ' was of type \'').concat(e, '\' instead of \'').concat(n, '\'')
                    }, 'TypeError-'.concat(t), r);
                }
                function b(t, e) {
                    return function () {
                        try {
                            return t.apply(null, arguments);
                        } catch (t) {
                            return d(t, e, !0), null;
                        }
                    };
                }
                function l(t) {
                    (1 < arguments.length && void 0 !== arguments[1] && arguments[1] || Object(c.d)('errors')) && console.warn(t);
                }
                !0 === Object(c.c)('exposeErrors') && (window.apstagErrors = u);
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'a', function () {
                    return l;
                });
                var r, i = n(4), o = n(0), c = n(5);
                function a(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })), n.push.apply(n, r);
                    }
                    return n;
                }
                function s(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? a(Object(n), !0).forEach(function (e) {
                            u(t, e, n[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                        });
                    }
                    return t;
                }
                function u(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t;
                }
                function d(t) {
                    return function (t) {
                        if (Array.isArray(t))
                            return f(t);
                    }(t) || function (t) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
                            return Array.from(t);
                    }(t) || function (t, e) {
                        if (t) {
                            if ('string' == typeof t)
                                return f(t, e);
                            var n = Object.prototype.toString.call(t).slice(8, -1);
                            return 'Object' === n && t.constructor && (n = t.constructor.name), 'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(t, e) : void 0;
                        }
                    }(t) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function f(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++)
                        r[n] = t[n];
                    return r;
                }
                function b() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                            AAXReqs: [],
                            aaxViewabilityEnabled: !1,
                            bidConfigs: {},
                            bidReqs: {},
                            bsPixels: {},
                            cfg: {
                                v: -1,
                                CSM_JS: '//c.amazon-adsystem.com/aax2/csm.js.gz',
                                CSM_RTB_COMMUNICATOR_JS: '//c.amazon-adsystem.com/bao-csm/aps-comm/aps_csm.js',
                                DEBUG_APP_HTML: '//c.amazon-adsystem.com/aax2/debugApp.html',
                                DEBUG_APP_HTML_V2: '//c.amazon-adsystem.com/aax2/debug_app_v2.html',
                                DEFAULT_TIMEOUT: 2000,
                                DTB_PATH: '/e/dtb',
                                TEST_PATH_FREQUENCY: 0,
                                TEST_BID_ENDPOINT: null,
                                TEST_PATH_LATENCY_SAMPLE_RATE: null,
                                PIXEL_PATH: '/x/px/',
                                LATENCY_SAMPLING_RATE: 1,
                                COOKIE_MATCH_DELAY: 0,
                                MAX_SLOTS_PER_REQUEST: 1,
                                CF_ROUTING_RATE: 100,
                                SLOT_RENDER_SAMPLING_RATE: 1,
                                FEATURE_SAMPLING_RATE: 1,
                                CONFIG_CALL_ENABLED: !1,
                                LIB_CONFIG_PATH: '/cdn/prod/config'
                            },
                            cmpFired: !1,
                            config: { pubID: '' },
                            displayAdServer: {
                                noBidSlotIDs: [],
                                shouldSampleRender: !1,
                                slotRenderEndedSet: !1
                            },
                            errors: [],
                            eventLog: [],
                            experiments: {},
                            gamSlotFetchLog: [],
                            gamSlotRenderPixel: {
                                aaxReqOffset: 0,
                                gamSlotFetchLogOffset: 0
                            },
                            hosts: {
                                DEFAULT_AAX_BID_HOST: 'aax.amazon-adsystem.com',
                                DEFAULT_AAX_PIXEL_HOST: 'aax.amazon-adsystem.com'
                            },
                            identityState: {},
                            libraryLoadCallLatency: 0,
                            Q: [],
                            slotBids: {},
                            slotIdMap: [],
                            sync917: !1,
                            targetingKeys: {}
                        }, e = 1 < arguments.length ? arguments[1] : void 0;
                    return {
                        AAXReqs: function (t, e) {
                            switch (e.type) {
                            case 'RECORD_AAX_REQUEST':
                                return [].concat(d(t), [e.data]);
                            case 'RECORD_AAX_REQ_PROP':
                                return t.map(function (t) {
                                    return (t = s({}, t)).bidReqID === e.bidReqID && (t[e.key] = e.value), t;
                                });
                            default:
                                return d(t);
                            }
                        }(t.AAXReqs, e),
                        aaxViewabilityEnabled: function (t, e) {
                            switch (e.type) {
                            case 'SET_VIEWABILITY':
                                return e.viewability;
                            default:
                                return t;
                            }
                        }(t.aaxViewabilityEnabled, e),
                        bidConfigs: function (t, e) {
                            switch (e.type) {
                            case 'RECORD_ORIGINAL_BID_CONFIG':
                                return s(s({}, t), {}, u({}, e.bidConfig.bidReqID, e.bidConfig));
                            default:
                                return s({}, t);
                            }
                        }(t.bidConfigs, e),
                        bidReqs: function (t, e) {
                            var n;
                            switch (e.type) {
                            case 'ADD_CHUNKED_REQUESTS':
                                return s(s({}, t), {}, u({}, e.fid, s(s({}, t[e.fid]), {}, { networkReqs: new Array(e.numChunks) })));
                            case 'NEW_FETCH_BID_REQUEST':
                                return s(s({}, t), {}, u({}, e.fid, {
                                    pto: e.pto,
                                    hasCallbackExecuted: !1,
                                    networkReqs: []
                                }));
                            case 'RECORD_CALLBACK':
                                return s(s({}, t), {}, u({}, e.fid, s(s({}, t[e.fid]), {}, { hasCallbackExecuted: !0 })));
                            case 'RECORD_NETWORK_EXCHANGE':
                                var r = t[e.fid].networkReqs;
                                return r[e.networkID] = s(s({}, r[e.networkID]), {}, (u(n = {}, ''.concat(e.exchangeType, 'Time'), e.timestamp), u(n, 'inFlight', 'request' === e.exchangeType), n)), s(s({}, t), {}, u({}, e.fid, s(s({}, t[e.fid]), {}, { networkReqs: r })));
                            case 'RECORD_TIMEOUT':
                                return s(s({}, t), {}, u({}, e.fid, s(s({}, t[e.fid]), {}, {
                                    networkReqs: t[e.fid].networkReqs.map(function (t) {
                                        return t.inFlight ? s(s({}, t), {}, { timeOut: e.timeOut }) : t;
                                    })
                                })));
                            default:
                                return s({}, t);
                            }
                        }(t.bidReqs, e),
                        bsPixels: function (t, e) {
                            switch (e.type) {
                            case 'RECORD_BID_INFO_SENT':
                                return s(s({}, t), {}, u({}, e.bidInfo.iid, e.bidInfo.state));
                            default:
                                return s({}, t);
                            }
                        }(t.bsPixels, e),
                        cfg: function (t, e) {
                            switch (e.type) {
                            case 'SET_CFG':
                                return s(s({}, t), e.cfg);
                            default:
                                return s({}, t);
                            }
                        }(t.cfg, e),
                        cmpFired: function (t, e) {
                            switch (e.type) {
                            case 'CMP_FIRED':
                                return !0;
                            default:
                                return t;
                            }
                        }(t.cmpFired, e),
                        config: function (t, e) {
                            switch (e.type) {
                            case 'SET_CONFIG':
                                return s(s({}, e.config), {}, {
                                    gdpr: s({ cmpTimeout: e.defaultCmpTimeout }, e.config.gdpr),
                                    isSelfServePub: void 0 !== e.config.pubID && 5 <= e.config.pubID.length
                                });
                            default:
                                return s({}, t);
                            }
                        }(t.config, e),
                        displayAdServer: function (t, e) {
                            switch (e.type) {
                            case 'SLOT_RENDER_ENDED_SET':
                                return s(s({}, t), {}, { slotRenderEndedSet: !0 });
                            case 'NO_BID_ON_ADSERVER_SLOTS':
                                return s(s({}, t), {}, { noBidSlotIDs: t.noBidSlotIDs.concat(e.slotIDs) });
                            case 'REQUESTED_BID_FOR_ADSERVER_SLOTS':
                                return s(s({}, t), {}, {
                                    noBidSlotIDs: t.noBidSlotIDs.filter(function (t) {
                                        return !Object(o.j)(e.slotIDs, t);
                                    })
                                });
                            case 'SHOULD_SAMPLE_SLOT_RENDER':
                                return s(s({}, t), {}, { shouldSampleRender: e.value });
                            default:
                                return s(s({}, t), {}, { noBidSlotIDs: d(t.noBidSlotIDs) });
                            }
                        }(t.displayAdServer, e),
                        errors: function (t, e) {
                            switch (e.type) {
                            case 'LOG_ERROR':
                                return [].concat(d(t), [s({}, e.error)]);
                            default:
                                return d(t);
                            }
                        }(t.errors, e),
                        eventLog: function (t, e) {
                            switch (e.type) {
                            case 'LOG_EVENT':
                                return [].concat(d(t), [s({}, e.event)]);
                            default:
                                return d(t);
                            }
                        }(t.eventLog, e),
                        experiments: function (t, e) {
                            switch (e.type) {
                            case 'SHOULD_CHUNK_REQUESTS':
                                return s({ chunkRequests: !0 === t.shouldSampleLatency && e.value }, t);
                            case 'SHOULD_CF_ROUTE':
                                return s(s({}, t), {}, { shouldCFRoute: e.value });
                            case 'SHOULD_SAMPLE_LATENCY':
                                return s(s({}, t), {}, { shouldSampleLatency: e.value });
                            case 'SHOULD_SAMPLE_FEATURES':
                                return s(s({}, t), {}, { shouldSampleFeatures: e.value });
                            case 'SHOULD_USE_TEST_BID_ENDPOINT':
                                return s(s({}, t), {}, { shouldUseTestBidEndpoint: e.value });
                            default:
                                return s({}, t);
                            }
                        }(t.experiments, e),
                        gamSlotFetchLog: function (t, e) {
                            switch (e.type) {
                            case 'LOG_GAM_EVENT':
                                return [].concat(d(t), [s({}, e.event)]);
                            default:
                                return d(t);
                            }
                        }(t.gamSlotFetchLog, e),
                        gamSlotRenderPixel: function (t, e) {
                            switch (e.type) {
                            case 'UPDATE_RENDER_OFFSETS':
                                return s(s({}, t), e.offsets);
                            default:
                                return s({}, t);
                            }
                        }(t.gamSlotRenderPixel, e),
                        hosts: function (t, e) {
                            switch (e.type) {
                            case 'SET_HOST':
                                return s(s({}, t), {}, u({}, e.hostName, e.hostValue));
                            default:
                                return s({}, t);
                            }
                        }(t.hosts, e),
                        identityState: function (t, e) {
                            switch (e.type) {
                            case 'RECORD_IDENTITY_STATE':
                                return s(s({}, t), {}, u({}, e.vendor, Object(o.m)(t, e.vendor) ? t[e.vendor] : e.identityState));
                            default:
                                return t;
                            }
                        }(t.identityState, e),
                        libraryLoadCallLatency: function (t, e) {
                            switch (e.type) {
                            case 'RECORD_LIBRARY_LOAD_CALL_LATENCY':
                                return e.latency;
                            default:
                                return t;
                            }
                        }(t.libraryLoadCallLatency, e),
                        Q: function (t, e) {
                            switch (e.type) {
                            case 'SET_Q':
                                return d(e.Q);
                            default:
                                return d(t);
                            }
                        }(t.Q, e),
                        slotBids: function (t, e) {
                            switch (e.type) {
                            case 'BID_STATE_CHANGE':
                                return s(s({}, t), {}, u({}, e.slotID, t[e.slotID].map(function (t) {
                                    return t._targetingSetID === e._targetingSetID && (t.bidState = e.bidState, e.bidState === i.b.rendered ? t.timing.renderTime = e.ts : e.bidState === i.b.set && t.timing.setAtTimes.push(e.ts)), t;
                                })));
                            case 'UPDATE_BID_INFO_PROP':
                                return void 0 === t[e.slotID] || t[e.slotID].filter(function (t) {
                                    return t.matchesBidCacheId(e.iid);
                                }).length < 1 ? s({}, t) : s(s({}, t), {}, u({}, e.slotID, t[e.slotID].map(function (t) {
                                    return t.matchesBidCacheId(e.iid) && (t[e.key] = e.value), t;
                                })));
                            case 'UPDATE_SLOT_BIDS':
                                return s(s({}, t), e.bids.reduce(function (e, n) {
                                    return Object(o.m)(e, n.slotID) ? e[n.slotID] = [].concat(d(e[n.slotID]), [n]) : Object(o.m)(t, n.slotID) ? e[n.slotID] = [].concat(d(t[n.slotID]), [n]) : e[n.slotID] = [n], e;
                                }, {}));
                            default:
                                return s({}, t);
                            }
                        }(t.slotBids, e),
                        slotIdMap: function (t, e) {
                            switch (e.type) {
                            case 'ADD_SLOT_ID':
                                return -1 === t.indexOf(e.slotID) ? [].concat(d(t), [e.slotID]) : t;
                            default:
                                return t;
                            }
                        }(t.slotIdMap, e),
                        sync917: function (t, e) {
                            switch (e.type) {
                            case 'SET_SYNC_917':
                                return e.value;
                            default:
                                return t;
                            }
                        }(t.sync917, e),
                        targetingKeys: function (t, e) {
                            switch (e.type) {
                            case 'UPDATE_SLOT_BIDS':
                                return s(s({}, t), e.bids.reduce(function (e, n) {
                                    return Object(o.m)(t, n.slotID) ? e[n.slotID] = [].concat(d(t[n.slotID]), d((n.bidConfig.targeting ? n.bidConfig.targeting : i.g).filter(function (e) {
                                        return -1 === t[n.slotID].indexOf(e);
                                    }))) : e[n.slotID] = n.bidConfig.targeting ? n.bidConfig.targeting : i.g, e;
                                }, {}));
                            default:
                                return s({}, t);
                            }
                        }(t.targetingKeys, e)
                    };
                }
                var l = {
                    getState: function () {
                        return r;
                    },
                    dispatch: function (t) {
                        r = b(r, t);
                    }
                };
                Object(c.d)('redux') && Object(o.i)() && Object(o.m)(window, '__REDUX_DEVTOOLS_EXTENSION__') && (l = window.__REDUX_DEVTOOLS_EXTENSION__(b)), l.dispatch({ type: 'NOOP' });
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'e', function () {
                    return p;
                }), n.d(e, 'c', function () {
                    return v;
                }), n.d(e, 'd', function () {
                    return S;
                }), n.d(e, 'b', function () {
                    return _;
                }), n.d(e, 'a', function () {
                    return E;
                }), n.d(e, 'f', function () {
                    return D;
                });
                var r = n(4), i = n(2), o = n(5), c = n(0), a = n(1), s = n(6), u = n(11), d = n(10), f = [], b = !1, l = [];
                function p(t) {
                    var e = new Image();
                    return e.src = t, l.push(e), e;
                }
                !0 === Object(o.c)('exposePixels') && (window.apstagPixelQueue = f, window.apstagPixelsSent = l);
                var m, g = {
                        adServer: [],
                        ampAdContext: [],
                        appended: [],
                        AaxSlotSizes: [],
                        bidRender: [],
                        bidRenderState: [],
                        bidType: [],
                        'blockedBidders-fetchBids': [],
                        'blockedBidders-init': [],
                        ccpa: [],
                        cmpVar: [],
                        creativeSize: [],
                        deals: [],
                        fetchBids: [],
                        fifFlow: [],
                        customFloor: [],
                        gdpr: [],
                        id: [],
                        idRemap: [],
                        iframe: [],
                        renderFootprint: [],
                        resizeIframe: [],
                        schain: [],
                        simplerGpt: [],
                        slots: [],
                        slotType: [],
                        targeting: [],
                        tcfVar: [],
                        unusedDeal: [],
                        useSafeFrames: []
                    }, y = [], h = !1;
                function O() {
                    h && (clearTimeout(m), h = !1), Object(c.c)(y, 5).forEach(function (t) {
                        _({
                            _type: 'featureUsage',
                            p: t,
                            u: Object(s.g)(window)
                        });
                    }), y = [];
                }
                function j() {
                    h || (h = !0, m = setTimeout(O, 2000));
                }
                function v(t, e) {
                    try {
                        return !!i.a.getState().experiments.shouldSampleFeatures && (void 0 !== g[t] && !Object(c.j)(g[t], e) && (g[t].push(e), y.push({
                            cat: t,
                            feat: e
                        }), b && j(), !0));
                    } catch (t) {
                        return Object(a.b)(t, 'sendFeaturePixel'), !1;
                    }
                }
                function S() {
                    try {
                        var t = i.a.getState().libraryLoadCallLatency, e = Object(u.c)(window, new RegExp('aax2/apstag.js'));
                        if (null !== e || 0 !== t) {
                            var n = Object(u.e)(window, 'navigationStart'), r = {
                                    _type: 'libLatency',
                                    pid: d.b,
                                    ns: n
                                };
                            if (null !== e) {
                                r.fs = Object(u.a)(e, 'fetchStart'), r.re = Object(u.a)(e, 'responseEnd');
                                var o = Object(u.f)(e);
                                null !== o && (r.c = o ? 1 : 0);
                            }
                            0 !== t && (r.tcc = t), _(r);
                        }
                    } catch (t) {
                        Object(a.b)(t, 'sendInitLatencyPixel');
                    }
                }
                function w(t) {
                    try {
                        if (b) {
                            var e = function () {
                                try {
                                    var t = i.a.getState(), e = t.cfg.PIXEL_PATH, n = t.hosts.DEFAULT_AAX_PIXEL_HOST, c = Object(o.c)('pixelHost', n);
                                    return ''.concat(r.r).concat(c).concat(e);
                                } catch (t) {
                                    return Object(a.b)(t, 'buildPixelBaseUrl'), '';
                                }
                            }();
                            return void 0 === t.bidId ? e += 'p/PH/' : e += ''.concat(t.bidId, '/'), p(e += function (t) {
                                try {
                                    t._tl = 'aps-tag';
                                    var e = i.a.getState(), n = null, o = '';
                                    Object(c.m)(e, 'config') && Object(c.m)(e.config, 'pubID') && '' !== e.config.pubID && (n = e.config.isSelfServePub, o = e.config.pubID), null !== n && (n ? (t.src = r.s, t.pubid = o) : t.src = o), t.lv = r.k;
                                    var s = JSON.stringify(t);
                                    return s = function (t) {
                                        try {
                                            return t.replace(/\\.{1}/g, '');
                                        } catch (t) {
                                            return Object(a.b)(t, 'escapeJsonForAax'), '';
                                        }
                                    }(s), s = encodeURIComponent(s);
                                } catch (t) {
                                    return Object(a.b)(t, 'objectToUrlPath'), '';
                                }
                            }(t.payload));
                        }
                        return f.push(t), !1;
                    } catch (t) {
                        return Object(a.b)(t, 'sendPixel'), !1;
                    }
                }
                function _(t) {
                    return w({ payload: t });
                }
                function E(t, e) {
                    return w({
                        payload: e,
                        bidId: t
                    });
                }
                function D() {
                    try {
                        if (b)
                            return;
                        b = !0, f.forEach(w), 0 < y.length && j();
                    } catch (t) {
                        Object(a.b)(t, 'sendPixels');
                    }
                }
                !0 === Object(o.c)('exposePixels') && (window.apstagFeaturePixelQueue = y);
            },
            function (t, e, n) {
                const $___old_9fd862f7b9f0ed32 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_06aebda6b5ce7099 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                try {
                    if ($___old_9fd862f7b9f0ed32)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_c4607d10b0acbf6b.XMLHttpRequest));
                    if ($___old_06aebda6b5ce7099)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_c4607d10b0acbf6b.XMLHttpRequest));
                    return function () {
                        'use strict';
                        n.d(e, 'g', function () {
                            return o;
                        }), n.d(e, 'w', function () {
                            return c;
                        }), n.d(e, 'b', function () {
                            return r;
                        }), n.d(e, 'f', function () {
                            return d;
                        }), n.d(e, 'v', function () {
                            return f;
                        }), n.d(e, 'd', function () {
                            return b;
                        }), n.d(e, 'e', function () {
                            return l;
                        }), n.d(e, 'c', function () {
                            return p;
                        }), n.d(e, 'j', function () {
                            return m;
                        }), n.d(e, 'o', function () {
                            return g;
                        }), n.d(e, 'm', function () {
                            return y;
                        }), n.d(e, 'n', function () {
                            return a;
                        }), n.d(e, 'l', function () {
                            return u;
                        }), n.d(e, 'u', function () {
                            return S;
                        }), n.d(e, 'h', function () {
                            return h;
                        }), n.d(e, 't', function () {
                            return j;
                        }), n.d(e, 's', function () {
                            return w;
                        }), n.d(e, 'k', function () {
                            return _;
                        }), n.d(e, 'r', function () {
                            return E;
                        }), n.d(e, 'i', function () {
                            return D;
                        }), n.d(e, 'a', function () {
                            return T;
                        }), n.d(e, 'q', function () {
                            return I;
                        }), n.d(e, 'p', function () {
                            return A;
                        }), n.d(e, 'x', function () {
                            return R;
                        });
                        var r, i, o = [
                                'amznbid',
                                'amzniid',
                                'amznsz',
                                'amznp'
                            ], c = [
                                'amznbid',
                                'amzniid',
                                'amznp',
                                'r_amznbid',
                                'r_amzniid',
                                'r_amznp'
                            ];
                        (i = r = r || {}).new = 'NEW', i.exposed = 'EXPOSED', i.set = 'SET', i.rendered = 'RENDERED';
                        var a, s, u, d = 'apstagDebug', f = [
                                'redux',
                                'fake_bids',
                                'verbose',
                                'console',
                                'console_v2',
                                'errors'
                            ], b = 'apstagDebugHeight', l = 'apstagDEBUG', p = 'apstagCfg', m = 'aps3PIds', g = 0, y = 0;
                        (s = a = a || {}).amznbid = 'testBid', s.amzniid = 'testImpression', s.amznp = 'testP', s.crid = 'testCrid', (u || (u = {})).video = 'v';
                        var h, O, j, v, S = [
                                'amznbid',
                                'amznp'
                            ];
                        (O = h = h || {}).__apsid = 'ck', O.__aps_id_p = 'ckp', O.aps_ext_917 = 'st', (v = j = j || {}).noRequest = '0', v.bidInFlight = '1', v.noBid = '2';
                        var w = '600', _ = '7.67.00', E = 'https://', D = 'function' == typeof XMLHttpRequest && void 0 !== new XMLHttpRequest().withCredentials, T = 'apstagLOADED', I = 13, A = 10000, R = /^1[NY\-]{3}$/;
                    }.apply(this, arguments);
                } finally {
                    if ($___old_9fd862f7b9f0ed32)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_9fd862f7b9f0ed32));
                    if ($___old_06aebda6b5ce7099)
                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_06aebda6b5ce7099));
                }
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'a', function () {
                    return d;
                }), n.d(e, 'b', function () {
                    return g;
                }), n.d(e, 'd', function () {
                    return _;
                }), n.d(e, 'c', function () {
                    return D;
                }), n.d(e, 'e', function () {
                    return I;
                });
                var r = n(2), i = n(0), o = n(4), c = n(8), a = n(3), s = n(1), u = [
                        'getLog',
                        'getState'
                    ];
                function d(t, e, n) {
                    try {
                        switch (Object(i.j)(u, t) && (Object(s.b)(new Error('Debug call made: '.concat(t)), 'debugPublicApi-call-'.concat(t)), u = u.filter(function (e) {
                                return e !== t;
                            })), t) {
                        case 'getLog':
                            return r.a.getState().eventLog;
                        case 'getState':
                            return r.a.getState();
                        case 'enable':
                            return E('fake_bids', !0), 'DEBUG MODE ENABLED';
                        case 'disable':
                            return E('fake_bids', !1), 'DEBUG MODE DISABLED';
                        case 'enableConsole':
                            return g(!1, 'command'), 'Debug console enabled';
                        case 'enableConsoleV2':
                            return g(!0, 'command'), 'Debug console v2 enabled';
                        case 'disableConsole':
                            return function () {
                                try {
                                    E('console', !1), E('console_v2', !1), null !== f && document.body.removeChild(f), m = !1, Object(i.i)() && window.localStorage.removeItem(o.d);
                                } catch (t) {
                                    Object(s.b)(t, 'disableDebugConsole', !0);
                                }
                            }(), 'Debug console disabled';
                        case 'setDebug':
                            return E(e, n) ? 'Set debug mode \''.concat(e, '\' to \'').concat(n, '\'') : 'Failed to set debug mode \''.concat(e, '\' to \'').concat(n, '\'');
                        default:
                            return 'unknown debug argument';
                        }
                    } catch (e) {
                        return Object(s.b)(e, 'debugPublicApi', !0), 'error';
                    }
                }
                var f, b, l, p, m = !1;
                function g() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] && arguments[0], e = 1 < arguments.length ? arguments[1] : void 0;
                    try {
                        if (E(t ? 'console_v2' : 'console', !0), m)
                            return;
                        var n = {
                            url: t ? r.a.getState().cfg.DEBUG_APP_HTML_V2 : r.a.getState().cfg.DEBUG_APP_HTML,
                            onload: y,
                            onerror: function () {
                                return Object(s.b)(new Error('Error Loading Debug Console'), 'enableDebugConsole-'.concat(t ? 'v2' : 'v1', '-onerror'), !0);
                            }
                        };
                        Object(c.d)(n), setTimeout(function () {
                            try {
                                var n = {
                                    _type: 'debugLoad',
                                    mode: t ? 2 : 1
                                };
                                Object(i.m)(r.a.getState().config, 'pubID') && (n.src = r.a.getState().config.pubID), null !== e && (n.method = e), Object(a.b)(n);
                            } catch (n) {
                                Object(s.b)(n, 'enableDebugConsole-setTimeout', !0);
                            }
                        }, 5000);
                    } catch (n) {
                        Object(s.b)(n, 'enableDebugConsole', !0);
                    }
                }
                function y(t) {
                    try {
                        var e = t.responseText;
                        f = document.createElement('div'), b = document.createElement('div'), l = document.createElement('iframe');
                        var n = 200;
                        _('console_v2') && (n = 330), Object(i.i)() && null !== window.localStorage.getItem(o.d) && (n = parseInt(window.localStorage.getItem(o.d), 10)), (isNaN(n) || n > window.innerHeight) && (n = 200), f.style.background = '#eaeded', f.style.zIndex = '2147483647', f.style.bottom = '0', f.style.position = 'fixed !important', f.style.display = 'block !important', f.style.left = '0', f.style.right = '0', f.style.height = ''.concat(n, 'px'), b.style.cursor = 'row-resize', b.style.height = '2px', b.style.position = 'absolute', b.style.top = '0', b.style.left = '0', b.style.right = '0', b.style.backgroundColor = 'RGBA(0,0,0,0)', f.appendChild(b), l.frameBorder = '0', l.marginHeight = '0', l.marginWidth = '0', l.scrolling = 'no', l.id = 'apstag-debug-iframe', l.src = 'about:blank', l.style.display = 'block', l.style.width = '100%', l.style.height = ''.concat(n, 'px'), f.appendChild(l), document.body.appendChild(f), null !== l.contentDocument && (l.contentDocument.open(), l.contentDocument.write(e), l.contentDocument.close()), b.addEventListener('mousedown', j);
                    } catch (t) {
                        Object(s.b)(t, 'renderDebugConsole', !0);
                    }
                }
                function h(t) {
                    try {
                        var e = window.innerHeight - t.clientY;
                        return e < 200 && (e = 200), f.style.height = ''.concat(e, 'px'), l.style.height = ''.concat(e, 'px'), e;
                    } catch (t) {
                        return Object(s.b)(t, 'resizeDebugConsole', !0), 200;
                    }
                }
                function O(t) {
                    try {
                        return t.stopPropagation && t.stopPropagation(), t.preventDefault && t.preventDefault(), t.cancelBubble = !0, t.returnValue = !1;
                    } catch (t) {
                        return Object(s.b)(t, 'preventEvent', !0), !1;
                    }
                }
                function j() {
                    try {
                        void 0 === p && ((p = document.createElement('div')).style.position = 'fixed', p.style.left = '0', p.style.right = '0', p.style.top = '0', p.style.bottom = '0', p.style.zIndex = '9999999999'), f.appendChild(p), window.addEventListener('mouseup', S), window.addEventListener('mousemove', v);
                    } catch (t) {
                        Object(s.b)(t, 'resizeBarMouseDownListener', !0);
                    }
                }
                function v(t) {
                    try {
                        return h(t), O(t);
                    } catch (t) {
                        return Object(s.b)(t, 'resizeBarMouseMoveListener', !0), !1;
                    }
                }
                function S(t) {
                    try {
                        null !== p && f.removeChild(p), window.removeEventListener('mousemove', v), window.removeEventListener('mouseup', S);
                        var e = h(t);
                        return Object(i.i)() && window.localStorage.setItem(o.d, ''.concat(e)), O(t);
                    } catch (t) {
                        return Object(s.b)(t, 'resizeBarMouseUpListener', !0), !1;
                    }
                }
                function w() {
                    const $___old_0dfc5fa302637252 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_0dfc5fa302637252)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_ba1c6ba55dfe66f1.localStorage));
                        return function () {
                            try {
                                if (!Object(i.i)())
                                    return [];
                                var t = window.localStorage.getItem(o.f);
                                null === t || 'false' === t ? t = '[]' : 'true' === t && (t = '["fake_bids"]');
                                var e = [];
                                try {
                                    e = JSON.parse(t);
                                } catch (t) {
                                }
                                return Object(i.k)(e) || (e = []), e.filter(function (t) {
                                    return Object(i.j)(o.v, t);
                                });
                            } catch (t) {
                                return Object(s.b)(t, 'getCurrentDebugArray'), [];
                            }
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_0dfc5fa302637252)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_0dfc5fa302637252));
                    }
                }
                function _(t) {
                    try {
                        return Object(i.j)(w(), t);
                    } catch (t) {
                        return Object(s.b)(t, 'isDebugEnabled'), !1;
                    }
                }
                function E(t, e) {
                    try {
                        if (!Object(i.i)())
                            return;
                        if (-1 === o.v.indexOf(t))
                            return;
                        var n = w();
                        return e && -1 === n.indexOf(t) ? n.push(t) : e || (n = n.filter(function (e) {
                            return e !== t;
                        })), 0 === n.length ? window.localStorage.removeItem(o.f) : window.localStorage.setItem(o.f, JSON.stringify(n)), I(), 1;
                    } catch (e) {
                        return void Object(s.b)(e, 'setDebugMode');
                    }
                }
                function D(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : null;
                    try {
                        if (Object(i.m)(window, o.e) && Object(i.m)(window[o.e], t))
                            return window[o.e][t];
                    } catch (t) {
                        Object(s.b)(t, 'getDebugValue');
                    }
                    return e;
                }
                var T = [];
                function I() {
                    try {
                        w().filter(function (t) {
                            return -1 === T.indexOf(t);
                        }).forEach(function (t) {
                            Object(s.b)(new Error('Debug method enabled: '.concat(t)), 'debugPublicApi-enabled-'.concat(t), !0), T.push(t);
                        });
                    } catch (t) {
                        Object(s.b)(t, 'pixelDebugModes');
                    }
                }
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'c', function () {
                    return d;
                }), n.d(e, 'j', function () {
                    return f;
                }), n.d(e, 'g', function () {
                    return b;
                }), n.d(e, 'h', function () {
                    return l;
                }), n.d(e, 'd', function () {
                    return p;
                }), n.d(e, 'e', function () {
                    return m;
                }), n.d(e, 'f', function () {
                    return g;
                }), n.d(e, 'i', function () {
                    return h;
                }), n.d(e, 'b', function () {
                    return O;
                }), n.d(e, 'a', function () {
                    return j;
                }), n.d(e, 'k', function () {
                    return v;
                });
                var r = n(5), i = n(0), o = n(1), c = n(4), a = n(2), s = n(3);
                function u(t) {
                    return (u = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t;
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                    })(t);
                }
                function d(t) {
                    try {
                        return t.split('_').pop();
                    } catch (t) {
                        return Object(o.b)(t, 'getAmpAmznBidValue'), '';
                    }
                }
                function f(t) {
                    try {
                        return !Object(i.m)(t, 'slots');
                    } catch (t) {
                        return Object(o.b)(t, 'isAAXPunt'), !0;
                    }
                }
                function b(t) {
                    try {
                        var e, n = Object(r.c)('url');
                        if (null !== n)
                            return encodeURIComponent(n);
                        try {
                            v(t, !1) ? (Object(s.c)('ampAdContext', 'getCurrentUrl'), e = null, t.context && (e = t.context.canonicalUrl || t.context.sourceUrl)) : e = t.top.location.href;
                        } catch (t) {
                            e = null;
                        }
                        if (null === e || !e || void 0 === e) {
                            e = '';
                            try {
                                t.top !== t.self && (e = t.document.referrer);
                            } catch (t) {
                            }
                        }
                        return encodeURIComponent(e);
                    } catch (t) {
                        return Object(o.b)(t, 'getCurrentUrl'), '';
                    }
                }
                function l(t) {
                    try {
                        var e, n = '', i = Object(r.c)('url');
                        if (null !== i)
                            return encodeURIComponent(i);
                        try {
                            try {
                                e = v(t, !1) ? (Object(s.c)('ampAdContext', 'getReferrerUrl'), t.context ? t.context.referrer : t.top.document.referrer) : t.top.document.referrer;
                            } catch (n) {
                                e = t.document.referrer;
                            }
                            n = encodeURIComponent(e);
                        } catch (n) {
                        }
                        return n;
                    } catch (n) {
                        return Object(o.b)(n, 'getReferrerUrl'), '';
                    }
                }
                function p() {
                    try {
                        var t = { cookiesParams: '' };
                        return Object(i.d)().forEach(function (e) {
                            if (e[0] in c.h)
                                switch (e[0]) {
                                case 'aps_ext_917':
                                    t.fb = e[1];
                                    break;
                                default:
                                    t.cookiesParams += '&'.concat(c.h[e[0]], '=').concat(e[1]);
                                }
                        }), t.fb || a.a.getState().sync917 || a.a.dispatch({
                            type: 'SET_SYNC_917',
                            value: !0
                        }), t;
                    } catch (t) {
                        return Object(o.b)(t, 'getApsFirstPartyCookies'), { cookiesParams: '' };
                    }
                }
                function m(t) {
                    try {
                        var e = a.a.getState().config.blockedBidders;
                        Object(i.m)(t, 'blockedBidders') && Object(i.k)(t.blockedBidders) && (e = t.blockedBidders);
                        var n = '';
                        return Object(i.k)(e) && (n = JSON.stringify(e)), n;
                    } catch (t) {
                        return Object(o.b)(t, 'getBlockedBidders', !0), '';
                    }
                }
                function g() {
                    try {
                        if (!Object(i.i)())
                            return c.o;
                        var t = a.a.getState();
                        return Object(i.m)(t, 'cfg') && Object(i.m)(t.cfg, 'v') && -1 !== t.cfg.v ? t.cfg.v : null;
                    } catch (t) {
                        return Object(o.b)(t, 'getCfgVersion'), null;
                    }
                }
                function y(t) {
                    try {
                        if (-1 === [
                                'string',
                                'number'
                            ].indexOf(u(t)))
                            return !1;
                        var e = Math.floor(Number(t));
                        if (e > c.m)
                            return e;
                    } catch (t) {
                        Object(o.b)(t, 'parseTimeout', !0);
                    }
                    return !1;
                }
                function h(t, e) {
                    try {
                        var n = y(t.timeout);
                        return !1 === n && (n = y(e.config.bidTimeout)), !1 === n && (n = y(e.cfg.DEFAULT_TIMEOUT)), n;
                    } catch (t) {
                        return Object(o.b)(t, 'getTimeout', !0), 2000;
                    }
                }
                function O(t, e) {
                    var n, r = !1;
                    function i(e) {
                        if (!r)
                            try {
                                t(e);
                            } catch (e) {
                                Object(o.b)(e, 'executeFunctionOnceWithTimeout-wrappedFunction', !0);
                            }
                        clearTimeout(n), r = !0;
                    }
                    try {
                        return n = setTimeout(i, e, !0), i.bind(null, !1);
                    } catch (e) {
                        return Object(o.b)(e, 'executeFunctionOnceWithTimeout', !0), function () {
                        };
                    }
                }
                function j(t) {
                    var e = !1;
                    return function () {
                        if (!e)
                            try {
                                t();
                            } catch (t) {
                                Object(o.b)(t, 'executeFunctionOnceWithTimeout-wrappedFunction', !0);
                            }
                        e = !0;
                    };
                }
                function v(t, e) {
                    try {
                        var n = e ? t.AMP_CONTEXT_DATA : t.context;
                        return Boolean(n && Object(i.m)(n, 'tagName') && 'AMP-AD' === n.tagName);
                    } catch (t) {
                        return Object(o.b)(t, 'isInAmpAd'), !1;
                    }
                }
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'a', function () {
                    return D;
                }), n.d(e, 'b', function () {
                    return T;
                });
                var r = n(0), i = n(13), o = n(1);
                function c(t) {
                    return (c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t;
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                    })(t);
                }
                function a(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function');
                }
                function s(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                    }
                }
                function u(t, e, n) {
                    return e && s(t.prototype, e), n && s(t, n), t;
                }
                function d(t, e) {
                    if ('function' != typeof e && null !== e)
                        throw new TypeError('Super expression must either be null or a function');
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && function (t, e) {
                        (Object.setPrototypeOf || function (t, e) {
                            return t.__proto__ = e, t;
                        })(t, e);
                    }(t, e);
                }
                function f(t) {
                    var e = function () {
                        if ('undefined' == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ('function' == typeof Proxy)
                            return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                            })), !0;
                        } catch (t) {
                            return !1;
                        }
                    }();
                    return function () {
                        var n, r, i, o = l(t);
                        if (e) {
                            var a = l(this).constructor;
                            n = Reflect.construct(o, arguments, a);
                        } else
                            n = o.apply(this, arguments);
                        return r = this, !(i = n) || 'object' !== c(i) && 'function' != typeof i ? b(r) : i;
                    };
                }
                function b(t) {
                    if (void 0 === t)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return t;
                }
                function l(t) {
                    return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t);
                    })(t);
                }
                function p(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t;
                }
                var m = function () {
                        d(e, i.c);
                        var t = f(e);
                        function e(n) {
                            var i;
                            return a(this, e), p(b(i = t.call(this, n.targetId, Object(r.m)(n, 'invCode') ? n.invCode : Object(r.m)(n, 'tagId') ? n.tagId : n.targetId)), 'rawSlot', void 0), p(b(i), 'mediaType', 'display'), i.rawSlot = n, i;
                        }
                        return u(e, [
                            {
                                key: 'reportError',
                                value: function (t, e, n) {
                                    var r = 2 < arguments.length && void 0 !== n && n;
                                    Object(o.b)(t, 'ApnSlot-'.concat(e), r);
                                }
                            },
                            {
                                key: 'initKeywords',
                                value: function () {
                                    try {
                                        Object(r.m)(this.rawSlot, 'keywords') || (this.rawSlot.keywords = {});
                                    } catch (t) {
                                        this.reportError(t, 'initKeywords');
                                    }
                                }
                            },
                            {
                                key: 'setTargeting',
                                value: function (t, e) {
                                    try {
                                        this.initKeywords(), this.rawSlot.keywords[t] = e;
                                    } catch (t) {
                                        this.reportError(t, 'setTargeting');
                                    }
                                }
                            },
                            {
                                key: 'getTargeting',
                                value: function (t) {
                                    try {
                                        return this.initKeywords(), Object(r.m)(this.rawSlot.keywords, t) ? [this.rawSlot.keywords[t]] : [];
                                    } catch (t) {
                                        return this.reportError(t, 'getTargeting'), [];
                                    }
                                }
                            },
                            {
                                key: 'clearTargeting',
                                value: function (t) {
                                    try {
                                        this.initKeywords(), delete this.rawSlot.keywords[t];
                                    } catch (t) {
                                        this.reportError(t, 'clearTargeting');
                                    }
                                }
                            },
                            {
                                key: 'sizes',
                                get: function () {
                                    try {
                                        return this.rawSlot.sizes;
                                    } catch (t) {
                                        return this.reportError(t, 'sizes'), [];
                                    }
                                }
                            }
                        ]), e;
                    }(), g = function () {
                        d(e, i.b);
                        var t = f(e);
                        function e() {
                            var n;
                            a(this, e);
                            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
                                i[o] = arguments[o];
                            return p(b(n = t.call.apply(t, [this].concat(i))), 'isSupported', !0), n;
                        }
                        return u(e, [
                            {
                                key: 'reportError',
                                value: function (t, e) {
                                    Object(o.b)(t, 'AppNexusAdServer-'.concat(e));
                                }
                            },
                            {
                                key: 'cmdQueuePush',
                                value: function (t) {
                                    try {
                                        window.apntag.anq.push(t);
                                    } catch (t) {
                                        this.reportError(t, 'cmdQueuePush');
                                    }
                                }
                            },
                            {
                                key: 'setTargeting',
                                value: function (t, e) {
                                    try {
                                        if (!Object(r.m)(window, 'apntag') || !Object(r.m)(window.apntag, 'requests'))
                                            return;
                                        Object(r.m)(window.apntag.requests, 'keywords') || (window.apntag.requests.keywords = {}), window.apntag.requests.keywords[t] = e;
                                    } catch (t) {
                                        this.reportError(t, 'setTargeting');
                                    }
                                }
                            },
                            {
                                key: 'getTargeting',
                                value: function (t) {
                                    try {
                                        if (!Object(r.m)(window, 'apntag') || !Object(r.m)(window.apntag, 'requests'))
                                            return [];
                                        Object(r.m)(window.apntag.requests, 'keywords') || (window.apntag.requests.keywords = {});
                                        var e = window.apntag.requests.keywords[t];
                                        return void 0 === e ? [] : [e];
                                    } catch (t) {
                                        return this.reportError(t, 'getTargeting'), [];
                                    }
                                }
                            },
                            {
                                key: 'clearTargeting',
                                value: function (t) {
                                    try {
                                        Object(r.m)(window, 'apntag') && Object(r.m)(window.apntag, 'requests') && Object(r.m)(window.apntag.requests, 'keywords') && delete window.apntag.requests.keywords[t];
                                    } catch (t) {
                                        this.reportError(t, 'clearTargeting');
                                    }
                                }
                            },
                            {
                                key: 'hasAdServerObjectLoaded',
                                value: function () {
                                    try {
                                        return Object(r.m)(window, 'apntag') && Object(r.m)(window.apntag, 'loaded') && !0 === window.apntag.loaded;
                                    } catch (t) {
                                        return this.reportError(t, 'hasAdServerObjectLoaded'), !1;
                                    }
                                }
                            },
                            {
                                key: 'isCommandQueueDefined',
                                value: function () {
                                    try {
                                        return Object(r.m)(window, 'apntag') && Object(r.m)(window.apntag, 'anq');
                                    } catch (t) {
                                        return this.reportError(t, 'isCommandQueueDefined'), !1;
                                    }
                                }
                            },
                            {
                                key: 'getSlots',
                                value: function () {
                                    try {
                                        var t = [];
                                        return Object(r.m)(window, 'apntag') && Object(r.m)(window.apntag, 'requests') && Object(r.m)(window.apntag.requests, 'tags') && Object(r.l)(window.apntag.requests.tags) && Object.keys(window.apntag.requests.tags).forEach(function (e) {
                                            var n = window.apntag.requests.tags[e];
                                            t.push(new m(n));
                                        }), t;
                                    } catch (t) {
                                        return this.reportError(t, 'getSlots'), [];
                                    }
                                }
                            }
                        ]), e;
                    }(), y = n(16);
                function h(t) {
                    return (h = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t;
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                    })(t);
                }
                function O(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                    }
                }
                function j(t, e) {
                    return (j = Object.setPrototypeOf || function (t, e) {
                        return t.__proto__ = e, t;
                    })(t, e);
                }
                function v(t) {
                    if (void 0 === t)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return t;
                }
                function S(t) {
                    return (S = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t);
                    })(t);
                }
                function w(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t;
                }
                var _ = function () {
                        !function (t, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError('Super expression must either be null or a function');
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && j(t, e);
                        }(c, i.b);
                        var t, e, n = function (t) {
                                var e = function () {
                                    if ('undefined' == typeof Reflect || !Reflect.construct)
                                        return !1;
                                    if (Reflect.construct.sham)
                                        return !1;
                                    if ('function' == typeof Proxy)
                                        return !0;
                                    try {
                                        return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                                        })), !0;
                                    } catch (t) {
                                        return !1;
                                    }
                                }();
                                return function () {
                                    var n, r, i, o = S(t);
                                    if (e) {
                                        var c = S(this).constructor;
                                        n = Reflect.construct(o, arguments, c);
                                    } else
                                        n = o.apply(this, arguments);
                                    return r = this, !(i = n) || 'object' !== h(i) && 'function' != typeof i ? v(r) : i;
                                };
                            }(c);
                        function c() {
                            var t;
                            !function (t, e) {
                                if (!(t instanceof e))
                                    throw new TypeError('Cannot call a class as a function');
                            }(this, c);
                            for (var e = arguments.length, r = new Array(e), i = 0; i < e; i++)
                                r[i] = arguments[i];
                            return w(v(t = n.call.apply(n, [this].concat(r))), 'isSupported', !0), w(v(t), 'needNewBidObject', !0), t;
                        }
                        return t = c, (e = [
                            {
                                key: 'reportError',
                                value: function (t, e) {
                                    Object(o.b)(t, 'SmartAdServer-'.concat(e));
                                }
                            },
                            {
                                key: 'cmdQueuePush',
                                value: function (t) {
                                    try {
                                        window.sas.cmd.push(t);
                                    } catch (t) {
                                        this.reportError(t, 'cmdQueuePush');
                                    }
                                }
                            },
                            {
                                key: 'hasAdServerObjectLoaded',
                                value: function () {
                                    try {
                                        return Object(r.m)(window, 'sas') && Object(r.m)(window.sas, '__smartLoaded') && !0 === window.sas.__smartLoaded;
                                    } catch (t) {
                                        return this.reportError(t, 'hasAdServerObjectLoaded'), !1;
                                    }
                                }
                            },
                            {
                                key: 'isCommandQueueDefined',
                                value: function () {
                                    try {
                                        return Object(r.m)(window, 'sas') && Object(r.m)(window.sas, 'cmd');
                                    } catch (t) {
                                        return this.reportError(t, 'isCommandQueueDefined'), !1;
                                    }
                                }
                            }
                        ]) && O(t.prototype, e), c;
                    }(), E = n(3), D = new i.b();
                function T(t) {
                    try {
                        switch (t) {
                        case 'appnexus':
                            Object(E.c)('adServer', t), D = new g();
                            break;
                        case 'googletag':
                            Object(E.c)('adServer', t), D = new y.a();
                            break;
                        case 'sas':
                            Object(E.c)('adServer', t), D = new _();
                            break;
                        default:
                            'string' == typeof t ? Object(E.c)('adServer', 'invalid-'.concat(t)) : Object(E.c)('adServer', 'none'), D = new i.b();
                        }
                    } catch (t) {
                        Object(o.b)(t, 'setDisplayAdServer');
                    }
                }
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'd', function () {
                    return o;
                }), n.d(e, 'b', function () {
                    return c;
                }), n.d(e, 'a', function () {
                    return a;
                }), n.d(e, 'c', function () {
                    return s;
                });
                var r = n(1);
                function i(t) {
                    return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t;
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                    })(t);
                }
                function o(t) {
                    const $___old_4d989b62c6b1da5d = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_29bf71f730429cbc = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                    try {
                        if ($___old_4d989b62c6b1da5d)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_c4607d10b0acbf6b.XMLHttpRequest));
                        if ($___old_29bf71f730429cbc)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_c4607d10b0acbf6b.XMLHttpRequest));
                        return function () {
                            var e = t.url, n = t.onload, o = t.onerror, c = t.ontimeout, a = t.withCredentials, s = t.body, u = void 0 === s ? null : s, d = t.headers, f = void 0 === d ? null : d, b = new window.XMLHttpRequest();
                            try {
                                if ('' === e)
                                    return void (void 0 !== o && o.call(b, 'error'));
                                b.onload = n.bind(null, b), void 0 !== o && (b.onerror = o), void 0 !== c && (b.ontimeout = c), void 0 !== a && (b.withCredentials = a);
                                var l = 'GET';
                                null !== u && (l = 'POST'), b.open(l, e), null !== f && 'object' === i(f) && Object.keys(f).forEach(function (t) {
                                    b.setRequestHeader(t, f[t]);
                                }), b.send(u);
                            } catch (t) {
                                void 0 !== o && o.call(b, 'error'), Object(r.b)(t, 'xhrRequest');
                            }
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_4d989b62c6b1da5d)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_4d989b62c6b1da5d));
                        if ($___old_29bf71f730429cbc)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_29bf71f730429cbc));
                    }
                }
                function c(t, e, n, i) {
                    try {
                        if (void 0 === n && (n = document), void 0 === t)
                            return 'function' == typeof e && e(!0), !1;
                        var o = n.getElementsByTagName('script')[0] || n.body.firstChild, c = n.createElement('script');
                        if (c.type = 'text/javascript', c.async = !0, c.src = t, e && a(c, e), a(c, i || function () {
                                Object(r.b)(new Error('Error Loading Script Tag'), 'loadScriptTag-onerror');
                            }, [], 'onerror'), null !== o.parentNode)
                            return o.parentNode.insertBefore(c, o), !0;
                    } catch (t) {
                        Object(r.b)(t, 'loadScriptTag', !0);
                    }
                    return !1;
                }
                function a(t, e) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : [], i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : 'onload';
                    try {
                        return 'function' == typeof e && (t[i] = function () {
                            e.apply(null, n);
                        }, !0);
                    } catch (t) {
                        return Object(r.b)(t, 'addCallbackFunction'), !1;
                    }
                }
                function s(t) {
                    try {
                        return encodeURIComponent(JSON.stringify(t));
                    } catch (t) {
                        return Object(r.b)(t, 'objToUrlParam'), '';
                    }
                }
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'a', function () {
                    return c;
                }), n.d(e, 'b', function () {
                    return a;
                });
                var r = n(1), i = n(0);
                function o(t) {
                    return (o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t;
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                    })(t);
                }
                function c(t) {
                    try {
                        return function (t) {
                            try {
                                if (!a(t, [
                                        'number',
                                        'string'
                                    ]))
                                    return !1;
                                if (isNaN(t))
                                    return !1;
                                if ('number' == typeof t)
                                    return !0;
                                var e = parseInt(t, 10);
                                return !isNaN(e);
                            } catch (t) {
                                return Object(r.b)(t, 'isNumber'), !0;
                            }
                        }(t) || void 0 === t;
                    } catch (t) {
                        return Object(r.b)(t, 'isNumberOrUndefined'), !0;
                    }
                }
                function a(t, e) {
                    try {
                        return Object(i.j)(e, o(t));
                    } catch (t) {
                        return Object(r.b)(t, 'isVarOfTypes'), !0;
                    }
                }
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'a', function () {
                    return v;
                }), n.d(e, 'b', function () {
                    return S;
                }), n.d(e, 'i', function () {
                    return w;
                }), n.d(e, 'd', function () {
                    return _;
                }), n.d(e, 'g', function () {
                    return E;
                }), n.d(e, 'c', function () {
                    return D;
                }), n.d(e, 'h', function () {
                    return T;
                }), n.d(e, 'f', function () {
                    return I;
                }), n.d(e, 'e', function () {
                    return A;
                });
                var r = n(2), i = n(5), o = n(4), c = n(0), a = n(8), s = n(1), u = n(6), d = n(12), f = n(3), b = n(9), l = n(14);
                function p(t) {
                    return function (t) {
                        if (Array.isArray(t))
                            return h(t);
                    }(t) || function (t) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
                            return Array.from(t);
                    }(t) || y(t) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function m(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })), n.push.apply(n, r);
                    }
                    return n;
                }
                function g(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? m(Object(n), !0).forEach(function (e) {
                            j(t, e, n[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : m(Object(n)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                        });
                    }
                    return t;
                }
                function y(t, e) {
                    if (t) {
                        if ('string' == typeof t)
                            return h(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return 'Object' === n && t.constructor && (n = t.constructor.name), 'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? h(t, e) : void 0;
                    }
                }
                function h(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++)
                        r[n] = t[n];
                    return r;
                }
                function O(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                    }
                }
                function j(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t;
                }
                var v = function () {
                        function t(e) {
                            !function (t, e) {
                                if (!(t instanceof e))
                                    throw new TypeError('Cannot call a class as a function');
                            }(this, t), j(this, 'bidConfig', void 0), j(this, 'bidState', o.b.new), j(this, '_targetingSetID', void 0), j(this, 'timing', { setAtTimes: [] }), j(this, 'pixelSent', !1), j(this, 'useSafeFrames', !1), j(this, 'bidReqID', ''), j(this, 'host', void 0), j(this, 'ev', void 0), j(this, 'cfe', void 0), j(this, 'isAmp', !1), j(this, 'doc', void 0), j(this, 'inheritSize', void 0), this.bidConfig = e, this._targetingSetID = Object(c.e)(), r.a.getState().config.useSafeFrames && (this.useSafeFrames = !0), this.useSafeFrames && Object(c.m)(e, 'targeting') && e.targeting.push('amznhost'), Object(c.m)(e, 'meta') ? Object(c.k)(e.meta) || (this.reportError({
                                name: 'TypeError',
                                message: '\'meta\' is not an \'array\': '.concat(JSON.stringify(e.meta))
                            }, 'constructor-meta'), e.meta = []) : e.meta = [];
                            try {
                                var n = 'd';
                                'video' !== this.bidConfig.mediaType && 'v' !== this.bidConfig.mediaType || (n = 'v');
                                var i = [];
                                Object(c.m)(this.bidConfig, 'amzndeals') && (Object(f.c)('bidType', ''.concat(n, '-amzndeals')), i = this.bidConfig.amzndeals.map(function (t) {
                                    return ''.concat(t, 'amzniid');
                                })), this.bidConfig.targeting.filter(function (t) {
                                    return -1 !== t.indexOf('amzniid') && !Object(c.j)(i, t);
                                }).forEach(function (t) {
                                    return Object(f.c)('bidType', ''.concat(n, '-').concat(t));
                                }), Object(c.m)(this.bidConfig, 'fif') && '1' === this.bidConfig.fif ? Object(f.c)('bidRender', 'friendly') : Object(f.c)('bidRender', 'unfriendly');
                            } catch (e) {
                                this.reportError(e, 'pixeling');
                            }
                        }
                        var e, n;
                        return e = t, (n = [
                            {
                                key: 'reportError',
                                value: function (t, e, n) {
                                    var r = 2 < arguments.length && void 0 !== n && n;
                                    Object(s.b)(t, 'Bid-'.concat(e), r);
                                }
                            },
                            {
                                key: 'matchesBidCacheId',
                                value: function (t) {
                                    var e = this;
                                    try {
                                        return this.bidConfig.targeting.reduce(function (n, r) {
                                            return n || -1 !== r.indexOf('amzniid') && e.bidConfig[r] === t;
                                        }, !1);
                                    } catch (t) {
                                        return this.reportError(t, 'matchesBidCacheId'), !1;
                                    }
                                }
                            },
                            {
                                key: 'mediaType',
                                get: function () {
                                    var t = 'd';
                                    return 'video' !== this.bidConfig.mediaType && 'v' !== this.bidConfig.mediaType && 'v' !== this.bidConfig.mediaType_sp || (t = 'video'), t;
                                }
                            },
                            {
                                key: 'targeting',
                                get: function () {
                                    var t = this;
                                    try {
                                        return this.bidConfig.targeting.map(function (e) {
                                            return 'amznhost' === e ? [
                                                e,
                                                encodeURIComponent(t.host)
                                            ] : Object(c.m)(t.bidConfig, e) && Object(c.k)(t.bidConfig[e]) ? [
                                                e,
                                                encodeURIComponent(t.bidConfig[e].join(','))
                                            ] : Object(c.m)(t.bidConfig, e) ? [
                                                e,
                                                encodeURIComponent(t.bidConfig[e])
                                            ] : [
                                                e,
                                                ''
                                            ];
                                        }).map(function (t) {
                                            var e = function (t, e) {
                                                    return function (t) {
                                                        if (Array.isArray(t))
                                                            return t;
                                                    }(t) || function (t, e) {
                                                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(t)) {
                                                            var n = [], r = !0, i = !1, o = void 0;
                                                            try {
                                                                for (var c, a = t[Symbol.iterator](); !(r = (c = a.next()).done) && (n.push(c.value), !e || n.length !== e); r = !0);
                                                            } catch (t) {
                                                                i = !0, o = t;
                                                            } finally {
                                                                try {
                                                                    r || null == a.return || a.return();
                                                                } finally {
                                                                    if (i)
                                                                        throw o;
                                                                }
                                                            }
                                                            return n;
                                                        }
                                                    }(t, e) || y(t, e) || function () {
                                                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                                                    }();
                                                }(t, 2), n = e[0], r = e[1];
                                            return '&'.concat(n, '=').concat(r);
                                        }).join('');
                                    } catch (t) {
                                        return this.reportError(t, 'targeting'), '';
                                    }
                                }
                            },
                            {
                                key: 'bidObject',
                                get: function () {
                                    try {
                                        var t = {
                                            slotID: this.bidConfig.slotID,
                                            amzniid: this.bidConfig.amzniid,
                                            amznbid: this.bidConfig.amznbid,
                                            amznp: this.bidConfig.amznp,
                                            amznsz: this.bidConfig.amznsz,
                                            size: this.bidConfig.amznsz
                                        };
                                        return 'video' === this.mediaType && (t.mediaType = 'video', t.qsParams = this.targeting, t.encodedQsParams = encodeURIComponent(this.targeting), t.r_amznbid = this.bidConfig.r_amznbid, t.r_amzniid = this.bidConfig.r_amzniid, t.r_amznp = this.bidConfig.r_amznp), this.useSafeFrames && (t.amznhost = this.host), t;
                                    } catch (t) {
                                        return this.reportError(t, 'bidObject', !0), {
                                            slotID: '',
                                            amzniid: 'error',
                                            amznbid: 'error',
                                            amznp: 'error',
                                            amznsz: 'error',
                                            size: 'error'
                                        };
                                    }
                                }
                            },
                            {
                                key: 'newBidObject',
                                get: function () {
                                    var t = this;
                                    try {
                                        var e = {
                                                slotID: this.bidConfig.slotID,
                                                size: this.bidConfig.amznsz,
                                                mediaType: this.mediaType,
                                                targeting: {},
                                                helpers: {
                                                    targetingKeys: this.bidConfig.targeting,
                                                    qsParams: function () {
                                                        return t.targeting;
                                                    },
                                                    encodedQsParams: function () {
                                                        return encodeURIComponent(t.targeting);
                                                    }
                                                }
                                            }, n = [
                                                'slotID',
                                                'size',
                                                'mediaType'
                                            ];
                                        return this.bidConfig.meta.filter(function (t) {
                                            return -1 === n.indexOf(t);
                                        }).forEach(function (n) {
                                            e[n] = t.bidConfig[n];
                                        }), this.bidConfig.targeting.forEach(function (n) {
                                            e.targeting[n] = 'amznhost' === n ? t.host : t.bidConfig[n];
                                        }), void 0 !== this.slotID && -1 !== this.slotID.indexOf('_') && (e.sasTargeting = e.helpers.targetingKeys.map(function (n) {
                                            return ''.concat(n, '_').concat(t.slotID.split('_')[1], '=').concat(e.targeting[n]);
                                        }).join(';')), e;
                                    } catch (t) {
                                        return this.reportError(t, 'newBidObject', !0), {
                                            slotID: '',
                                            size: '',
                                            mediaType: 'd',
                                            targeting: {},
                                            helpers: {
                                                targetingKeys: [],
                                                qsParams: function () {
                                                    return '';
                                                },
                                                encodedQsParams: function () {
                                                    return '';
                                                }
                                            }
                                        };
                                    }
                                }
                            },
                            {
                                key: 'slotID',
                                get: function () {
                                    try {
                                        return this.bidConfig.slotID;
                                    } catch (t) {
                                        return this.reportError(t, 'slotID'), '';
                                    }
                                }
                            }
                        ]) && O(e.prototype, n), t;
                    }(), S = Object(c.f)(o.q);
                function w(t) {
                    var e = 'validateSupplyChainObject', n = !1;
                    function r(t, r) {
                        return Object(s.b)({
                            name: 'TypeError',
                            message: r
                        }, ''.concat(e, '-').concat(t), !0), !(n = !0);
                    }
                    try {
                        return Object(c.l)(t) ? (Object(c.m)(t, 'complete') ? -1 === [
                            1,
                            0
                        ].indexOf(t.complete) && r('schain-complete-type', 'The `schain.complete` property must be a `1` or `0`') : r('schain-complete', 'The `schain.complete` property must be provided'), Object(c.m)(t, 'ver') ? Object(b.b)(t.ver, ['string']) || r('schain-ver-type', 'The `schain.ver` property must be a string') : r('schain-ver', 'The `schain.ver` property must be provided'), Object(c.m)(t, 'nodes') ? Object(c.k)(t.nodes) ? t.nodes.reduce(function (t, e) {
                            return Object(c.l)(e) ? (Object(c.m)(e, 'asi') ? Object(b.b)(e.asi, ['string']) || r('schain-node-asi-type', 'All `schain.nodes` items must have an `asi` property of type `string`') : r('schain-node-asi', 'All `schain.nodes` items must have an `asi` property'), Object(c.m)(e, 'sid') ? Object(b.b)(e.sid, ['string']) || r('schain-node-sid-type', 'All `schain.nodes` items must have an `sid` property of type `string`') : r('schain-node-sid', 'All `schain.nodes` items must have an `sid` property'), Object(c.m)(e, 'hp') ? -1 === [
                                1,
                                0
                            ].indexOf(e.hp) && r('schain-node-hp-type', 'All `schain.nodes` items must have an `hp` property which is `1` or `0`') : r('schain-node-hp', 'All `schain.nodes` items must have an `hp` property'), Object(b.b)(e.rid, [
                                'string',
                                'undefined'
                            ]) || r('schain-node-rid-type', 'If provided, the `rid` property on an `schain.nodes` item must be of type `string`'), Object(b.b)(e.name, [
                                'string',
                                'undefined'
                            ]) || r('schain-node-name-type', 'If provided, the `name` property on an `schain.nodes` item must be of type `string`'), Object(b.b)(e.domain, [
                                'string',
                                'undefined'
                            ]) || r('schain-node-domain-type', 'If provided, the `domain` property on an `schain.nodes` item must be of type `string`'), t && !n) : r('schain-node-type', 'All `schain.nodes` items must be objects');
                        }, !n) : r('schain-nodes-type', 'The `schain.nodes` property must be an `Array`') : r('schain-nodes', 'The `schain.nodes` property must be provided')) : r('schain', 'The `schain` value must be an object');
                    } catch (t) {
                        return Object(s.b)(t, e, !0), !1;
                    }
                }
                function _(t, e, n, d) {
                    try {
                        var b = r.a.getState(), m = {}, y = Object(i.c)('host', b.hosts.DEFAULT_AAX_BID_HOST), h = b.cfg.DTB_PATH, O = 'bid';
                        b.experiments.shouldUseTestBidEndpoint && null !== b.cfg.TEST_BID_ENDPOINT && (O = b.cfg.TEST_BID_ENDPOINT);
                        var j = {
                            src: b.config.pubID,
                            u: Object(u.g)(window),
                            pr: Object(u.h)(window),
                            pid: S,
                            cb: t.bidReqID,
                            ws: Object(c.h)(window),
                            v: o.k,
                            t: e,
                            slots: function (t) {
                                try {
                                    return Object(a.c)(t.map(function (t) {
                                        var e;
                                        if (Object(c.m)(t, 'mediaType') && 'video' === t.mediaType)
                                            e = t.aaxSlot;
                                        else {
                                            if (!(Object(c.m)(t, 'sizes') && 0 < t.sizes.length && Object(c.m)(t, 'slotID')))
                                                return Object(s.b)({
                                                    name: 'SlotError',
                                                    message: 'There was an error with the configuration for this slot: '.concat(JSON.stringify(t.rawSlot))
                                                }, 'buildSlotsUrlParam-invalidSlot', !0), {
                                                    id: 'ERROR',
                                                    mt: o.l.video,
                                                    error: !0
                                                };
                                            var n = t.aaxSlot;
                                            Object(c.m)(t, 'slotName') && t.slotName !== t.slotID ? (Object(f.c)('idRemap', 'y'), r.a.dispatch({
                                                type: 'ADD_SLOT_ID',
                                                slotID: t.slotID
                                            }), n.sd = ''.concat(r.a.getState().slotIdMap.indexOf(t.slotID)), n.sn = t.slotName) : Object(f.c)('idRemap', 'n'), e = n;
                                        }
                                        return e;
                                    }).filter(function (t) {
                                        return !0 !== t.error;
                                    }));
                                } catch (t) {
                                    return Object(s.b)(t, 'buildSlotsUrlParam', !0), '';
                                }
                            }(t.validSlots),
                            pj: function (t, e) {
                                try {
                                    var n = Object(c.l)(t.config.params) ? t.config.params : {}, r = Object(c.l)(e.params) ? e.params : {}, i = g(g({}, n), r);
                                    return 0 === Object.keys(i).length ? '' : Object(a.c)(i);
                                } catch (t) {
                                    return Object(s.b)(t, 'getBidParams', !0), '';
                                }
                            }(b, t),
                            cfgv: Object(u.f)(),
                            bb: Object(u.e)(t),
                            schain: function (t) {
                                try {
                                    var e;
                                    return Object(c.m)(t.config, 'schain') ? (e = t.config.schain, encodeURIComponent([''.concat(e.ver, ',').concat(e.complete)].concat(p(e.nodes.map(function (t) {
                                        return [
                                            'asi',
                                            'sid',
                                            'hp',
                                            'rid',
                                            'name',
                                            'domain'
                                        ].map(function (e) {
                                            return Object(c.m)(t, e) ? t[e] : '';
                                        }).map(function (t) {
                                            return encodeURIComponent(t);
                                        }).map(function (t) {
                                            return t.replace(/\!/g, '%21');
                                        }).join(',');
                                    }))).join('!'))) : '';
                                } catch (t) {
                                    return Object(s.b)(t, 'getSupplyChainObject', !0), '';
                                }
                            }(b)
                        };
                        if ('[]' === j.slots || '' === j.slots)
                            throw new Error('No slots available for bid request');
                        if (r.a.dispatch({
                                type: 'RECORD_AAX_REQUEST',
                                data: {
                                    bidConfig: t,
                                    bidReqID: t.bidReqID,
                                    timeout: e,
                                    ws: j.ws,
                                    url: j.u,
                                    rqTs: Date.now()
                                }
                            }), b.experiments.chunkRequests) {
                            var v = t.bidReqID.split('-');
                            r.a.dispatch({
                                type: 'RECORD_NETWORK_EXCHANGE',
                                fid: v[0],
                                networkID: parseInt(v[1], 10),
                                timestamp: Date.now(),
                                exchangeType: 'request'
                            });
                        }
                        b.config.isSelfServePub && (j.pubid = j.src, j.src = 600);
                        var w = Object(u.d)();
                        w.fb && (m[917] = w.fb, j[o.h.aps_ext_917] = Object(a.c)(m));
                        var _ = Object(i.c)('bidParams');
                        Object(c.l)(_) && (j = g(g({}, j), _)), Object(c.l)(n) && (Object(c.m)(n, 'enabled') && (j.gdpre = encodeURIComponent(n.enabled)), Object(c.m)(n, 'consent') && (j.gdprc = encodeURIComponent(n.consent)), Object(c.m)(n, 'log') && (j.gdprl = Object(a.c)(n.log))), Object(c.m)(b.config, 'useSafeFrames') && b.config.useSafeFrames && (j.sf = '1');
                        var E = Object(l.b)();
                        E && (Object(f.c)('id', 'bidReq-attachToken'), d.at = E), j.vm = d && 0 !== Object.keys(d).length ? Object(a.c)({ ids: d }) : '';
                        var D = Object.keys(j).filter(function (t) {
                            return Object(c.m)(j, t) && 'undefined' !== j[t] && '' !== j[t] && null !== j[t];
                        }).map(function (t) {
                            return ''.concat(t, '=').concat(j[t]);
                        }).join('&');
                        w.cookiesParams && (D += w.cookiesParams);
                        var T = ''.concat(o.r).concat(y).concat(h, '/').concat(O, '?').concat(D);
                        return r.a.dispatch({
                            type: 'RECORD_AAX_REQ_PROP',
                            bidReqID: t.bidReqID,
                            key: 'urlLength',
                            value: T.length
                        }), T;
                    } catch (t) {
                        return Object(s.b)(t, 'buildBidUrl', !0), '';
                    }
                }
                function E(t, e) {
                    try {
                        return Object(c.m)(t, 'config') && Object(c.m)(t.config, 'deals') && !0 === t.config.deals || !0 === e.needNewBidObject;
                    } catch (t) {
                        return Object(s.b)(t, 'isNewBidObjectRequired'), !1;
                    }
                }
                function D(t, e, n) {
                    try {
                        var r, i = t.map(d.c), a = e.slots.filter(d.d).map(d.c).filter(function (t) {
                                return !Object(c.j)(i, t);
                            });
                        return r = n ? o.t.bidInFlight : o.t.noBid, t.concat(a.map(function (t) {
                            return new v({
                                size: '0x0',
                                crid: '',
                                slotID: t,
                                mediaType: 'd',
                                meta: [
                                    'slotID',
                                    'mediaType',
                                    'size'
                                ],
                                amznbid: e = r,
                                amzniid: '',
                                amznp: e,
                                amznsz: '0x0',
                                targeting: [
                                    'amzniid',
                                    'amznbid',
                                    'amznp',
                                    'amznsz'
                                ]
                            });
                            var e;
                        }));
                    } catch (e) {
                        return Object(s.b)(e, 'addStateTrackingBidsToRealBids'), t;
                    }
                }
                function T(t) {
                    try {
                        if (Object(c.m)(t, 'slots')) {
                            var e = r.a.getState().slotIdMap;
                            t.slots.forEach(function (t) {
                                null !== t.slotID.match(/^\d+$/) && parseInt(t.slotID, 10) < e.length && (t.slotID = e[parseInt(t.slotID, 10)]);
                            });
                        }
                    } catch (t) {
                        Object(s.b)(t, 'mapSlotIDValues');
                    }
                }
                function I(t) {
                    try {
                        if (Object(c.j)(r.a.getState().displayAdServer.noBidSlotIDs, t.slotID))
                            return !1;
                        var e = r.a.getState().AAXReqs.filter(function (e) {
                            return e.bidReqID === t.bidReqID;
                        })[0];
                        return !(Object(c.m)(e, 'rqTs') && Date.now() - e.rqTs > 240000) && (!(Object(c.m)(e, 'url') && !Object(c.b)(e.url, Object(u.g)(window))) && t.bidState !== o.b.rendered);
                    } catch (e) {
                        return Object(s.b)(e, 'isBidEligible'), !1;
                    }
                }
                function A(t) {
                    try {
                        var e = t.map(d.c), n = r.a.getState();
                        return Object.keys(n.slotBids).filter(function (t) {
                            return Object(c.j)(e, t);
                        }).reduce(function (t, e) {
                            var i = n.slotBids[e].filter(function (t) {
                                return t.bidState === o.b.new;
                            }).filter(I);
                            if (0 < i.length) {
                                var c = i[i.length - 1];
                                r.a.dispatch({
                                    type: 'BID_STATE_CHANGE',
                                    slotID: e,
                                    _targetingSetID: c._targetingSetID,
                                    bidState: o.b.exposed
                                }), t[e] = c;
                            }
                            return t;
                        }, {});
                    } catch (t) {
                        return Object(s.b)(t, 'getNewSlotBidsAndExposeForRequestedSlots'), {};
                    }
                }
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'a', function () {
                    return r;
                }), n.d(e, 'c', function () {
                    return i;
                }), n.d(e, 'b', function () {
                    return o;
                }), n.d(e, 'e', function () {
                    return c;
                }), n.d(e, 'f', function () {
                    return a;
                }), n.d(e, 'd', function () {
                    return s;
                });
                function r(t, e) {
                    try {
                        return 'number' != typeof t[e] ? 0 : Math.round(t[e]);
                    } catch (t) {
                        return 0;
                    }
                }
                function i(t, e) {
                    try {
                        var n = o(t, e)[0];
                        if (void 0 !== n)
                            return n;
                    } catch (t) {
                    }
                    return null;
                }
                function o(t, e) {
                    try {
                        return t.performance.getEntriesByType('resource').filter(function (t) {
                            return e.test(t.name);
                        });
                    } catch (t) {
                        return [];
                    }
                }
                function c(t, e) {
                    try {
                        var n = t.performance.timing[e];
                        return void 0 === n ? 0 : n;
                    } catch (t) {
                        return 0;
                    }
                }
                function a(t) {
                    try {
                        if (0 === [
                                'redirectStart',
                                'redirectEnd',
                                'domainLookupStart',
                                'domainLookupEnd',
                                'connectStart',
                                'connectEnd',
                                'requestStart',
                                'responseStart',
                                'secureConnectionStart'
                            ].reduce(function (e, n) {
                                return e + r(t, n);
                            }, 0))
                            return null;
                        var e = r(t, 'fetchStart');
                        return [
                            'domainLookupStart',
                            'domainLookupEnd',
                            'connectStart',
                            'connectEnd'
                        ].reduce(function (n, i) {
                            return n && r(t, i) === e;
                        }, !0);
                    } catch (t) {
                        return null;
                    }
                }
                function s() {
                    try {
                        var t = window.performance.timeOrigin;
                        return void 0 === t && (t = window.performance.timing.navigationStart), t;
                    } catch (t) {
                        return 0;
                    }
                }
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'b', function () {
                    return o;
                }), n.d(e, 'a', function () {
                    return c;
                }), n.d(e, 'd', function () {
                    return a;
                }), n.d(e, 'c', function () {
                    return s;
                });
                var r = n(1), i = n(0);
                function o(t) {
                    var e = [];
                    try {
                        t.hasAdServerObjectLoaded() && (e = t.getSlots());
                    } catch (t) {
                        Object(r.b)(t, 'getDisplayAdServerSlots');
                    }
                    return e;
                }
                function c(t) {
                    try {
                        return Object(i.m)(t, 'sizes') && Object(i.k)(t.sizes) && 0 !== t.sizes.length;
                    } catch (t) {
                        return Object(r.b)(t, 'doesSlotHaveSizes'), !1;
                    }
                }
                function a(t) {
                    try {
                        return 'video' !== t.mediaType;
                    } catch (t) {
                        return Object(r.b)(t, 'isDisplaySlot'), !0;
                    }
                }
                function s(t) {
                    try {
                        return t.slotID;
                    } catch (t) {
                        return Object(r.b)(t, 'getSlotID'), '';
                    }
                }
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'b', function () {
                    return g;
                }), n.d(e, 'c', function () {
                    return y;
                }), n.d(e, 'a', function () {
                    return v;
                });
                var r = n(0), i = n(1), o = n(3);
                function c(t) {
                    return (c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t;
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                    })(t);
                }
                function a(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })), n.push.apply(n, r);
                    }
                    return n;
                }
                function s(t, e, n) {
                    return (s = 'undefined' != typeof Reflect && Reflect.get ? Reflect.get : function (t, e, n) {
                        var r = function (t, e) {
                            for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = f(t)););
                            return t;
                        }(t, e);
                        if (r) {
                            var i = Object.getOwnPropertyDescriptor(r, e);
                            return i.get ? i.get.call(n) : i.value;
                        }
                    })(t, e, n || t);
                }
                function u(t, e) {
                    return (u = Object.setPrototypeOf || function (t, e) {
                        return t.__proto__ = e, t;
                    })(t, e);
                }
                function d(t) {
                    if (void 0 === t)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return t;
                }
                function f(t) {
                    return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t);
                    })(t);
                }
                function b(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function');
                }
                function l(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                    }
                }
                function p(t, e, n) {
                    return e && l(t.prototype, e), n && l(t, n), t;
                }
                function m(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t;
                }
                var g = function () {
                        function t() {
                            b(this, t), m(this, 'isSupported', !1), m(this, 'needNewBidObject', !1);
                        }
                        return p(t, [
                            {
                                key: 'cmdQueuePush',
                                value: function () {
                                }
                            },
                            {
                                key: 'slotRenderEndedEvent',
                                value: function () {
                                }
                            },
                            {
                                key: 'setTargeting',
                                value: function () {
                                }
                            },
                            {
                                key: 'getTargeting',
                                value: function () {
                                    return [];
                                }
                            },
                            {
                                key: 'clearTargeting',
                                value: function () {
                                }
                            },
                            {
                                key: 'hasAdServerObjectLoaded',
                                value: function () {
                                    return !1;
                                }
                            },
                            {
                                key: 'isCommandQueueDefined',
                                value: function () {
                                    return !1;
                                }
                            },
                            {
                                key: 'getSlots',
                                value: function () {
                                    return [];
                                }
                            }
                        ]), t;
                    }(), y = function () {
                        function t(e, n, r) {
                            b(this, t), m(this, 'mediaType', 'display'), m(this, 'slotID', void 0), m(this, 'slotName', void 0), m(this, 'slotParams', void 0), m(this, 'rawSlot', void 0), this.slotID = e, this.slotName = n, this.slotParams = r;
                        }
                        return p(t, [
                            {
                                key: 'reportError',
                                value: function (t, e, n) {
                                    var r = 2 < arguments.length && void 0 !== n && n;
                                    Object(i.b)(t, 'Slot-'.concat(e), r);
                                }
                            },
                            {
                                key: 'setTargeting',
                                value: function () {
                                }
                            },
                            {
                                key: 'getTargeting',
                                value: function () {
                                    return [];
                                }
                            },
                            {
                                key: 'clearTargeting',
                                value: function () {
                                }
                            },
                            {
                                key: 'isValid',
                                value: function () {
                                    function t(t, e) {
                                        return 'There was an issue with the configuration for this slot: '.concat(JSON.stringify(e), '\n') + t.map(function (t) {
                                            return '- '.concat(t);
                                        }).join('\n');
                                    }
                                    try {
                                        var e = [], n = [];
                                        if (void 0 === this.slotID ? e.push('\'slotID\' must be provided and a string') : 'string' != typeof this.slotID && n.push('\'slotID\' must be a string'), 'display' === this.mediaType && 0 === this.sizes.length && e.push('\'sizes\' must have at least 1 valid item'), Object(r.m)(this.rawSlot, 'floor') && Object(r.l)(this.rawSlot.floor)) {
                                            var i = this.rawSlot.floor, o = i.currency, c = i.value;
                                            'USD' !== o && n.push('\'floor\' currency only supports USD'), S(c) || n.push('\'floor\' value must be a positive integer');
                                        }
                                        return 0 < e.length ? (this.reportError({
                                            name: 'SlotValidationError',
                                            message: t([].concat(e, n), this.rawSlot)
                                        }, 'validation-error', !0), !1) : (0 < n.length && this.reportError({
                                            name: 'SlotValidationError',
                                            message: t(n, this.rawSlot)
                                        }, 'validation-warn', !0), !0);
                                    } catch (t) {
                                        return this.reportError(t, 'isValid', !0), !0;
                                    }
                                }
                            },
                            {
                                key: 'sizes',
                                get: function () {
                                    return [];
                                }
                            },
                            {
                                key: 'floor',
                                get: function () {
                                }
                            },
                            {
                                key: 'slotConfig',
                                get: function () {
                                    try {
                                        return {
                                            slotID: this.slotID,
                                            slotName: this.slotName,
                                            sizes: this.sizes
                                        };
                                    } catch (t) {
                                        return this.reportError(t, 'slotConfig'), {
                                            slotID: '',
                                            slotName: '',
                                            sizes: []
                                        };
                                    }
                                }
                            },
                            {
                                key: 'aaxSlotParams',
                                get: function () {
                                    var t = this;
                                    try {
                                        return Object(r.m)(this, 'slotParams') && Object(r.l)(this.slotParams) ? Object.keys(this.slotParams).filter(function (e) {
                                            return function t(e) {
                                                try {
                                                    return Object(r.k)(e) ? 0 < e.length && e.reduce(function (e, n) {
                                                        return e && t(n);
                                                    }, !0) : 'string' == typeof e && 0 < e.length;
                                                } catch (e) {
                                                    return Object(i.b)(e, 'validateSlotParamValue'), !1;
                                                }
                                            }(t.slotParams[e]);
                                        }).reduce(function (e, n) {
                                            return e[n] = t.slotParams[n], e;
                                        }, {}) : void 0;
                                    } catch (t) {
                                        return this.reportError(t, 'aaxSlotParams'), this.slotParams;
                                    }
                                }
                            },
                            {
                                key: 'aaxSlot',
                                get: function () {
                                    try {
                                        Object(o.c)('slotType', 'display');
                                        var t = {
                                            sd: this.slotID,
                                            s: this.sizes.filter(r.k).map(function (t) {
                                                return t.join('x');
                                            }),
                                            kv: this.aaxSlotParams
                                        };
                                        return this.slotID !== this.slotName && (t.sn = this.slotName), this.floor && (t.fc = this.floor.currency, t.fp = this.floor.value), t;
                                    } catch (t) {
                                        return this.reportError(t, 'aaxSlot'), {
                                            sd: '',
                                            s: [],
                                            kv: {}
                                        };
                                    }
                                }
                            }
                        ]), t;
                    }(), h = [], O = /^[0-9]+x[0-9]+$/, j = /^[0-9]+$/, v = function () {
                        !function (t, e) {
                            if ('function' != typeof e && null !== e)
                                throw new TypeError('Super expression must either be null or a function');
                            t.prototype = Object.create(e && e.prototype, {
                                constructor: {
                                    value: t,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), e && u(t, e);
                        }(e, y);
                        var t = function (t) {
                            var e = function () {
                                if ('undefined' == typeof Reflect || !Reflect.construct)
                                    return !1;
                                if (Reflect.construct.sham)
                                    return !1;
                                if ('function' == typeof Proxy)
                                    return !0;
                                try {
                                    return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                                    })), !0;
                                } catch (t) {
                                    return !1;
                                }
                            }();
                            return function () {
                                var n, r, i, o = f(t);
                                if (e) {
                                    var a = f(this).constructor;
                                    n = Reflect.construct(o, arguments, a);
                                } else
                                    n = o.apply(this, arguments);
                                return r = this, !(i = n) || 'object' !== c(i) && 'function' != typeof i ? d(r) : i;
                            };
                        }(e);
                        function e(n) {
                            var i;
                            b(this, e), m(d(i = t.call(this, n.slotID, n.slotName, n.slotParams)), 'rawSlot', void 0), m(d(i), 'hasReportedWorkingInvalidSizeError', !1), i.mediaType = 'video' === n.mediaType ? 'video' : 'display', i.rawSlot = function (t) {
                                for (var e = 1; e < arguments.length; e++) {
                                    var n = null != arguments[e] ? arguments[e] : {};
                                    e % 2 ? a(Object(n), !0).forEach(function (e) {
                                        m(t, e, n[e]);
                                    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function (e) {
                                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                                    });
                                }
                                return t;
                            }({}, n);
                            try {
                                Object(r.m)(i.rawSlot, 'sizes') && Object(r.k)(i.rawSlot.sizes) && (i.rawSlot.sizes = i.rawSlot.sizes.filter(function (t) {
                                    return 'fluid' !== t;
                                }));
                            } catch (n) {
                                i.reportError(n, 'sizeFilter');
                            }
                            return i;
                        }
                        return p(e, [
                            {
                                key: 'reportError',
                                value: function (t, e, n) {
                                    var r = 2 < arguments.length && void 0 !== n && n;
                                    Object(i.b)(t, 'AaxSlot-'.concat(e), r);
                                }
                            },
                            {
                                key: 'aaxSlot',
                                get: function () {
                                    try {
                                        if ('video' !== this.rawSlot.mediaType)
                                            return s(f(e.prototype), 'aaxSlot', this);
                                        Object(o.c)('slotType', 'video');
                                        var t = {
                                            id: this.slotID,
                                            mt: 'v',
                                            kv: this.aaxSlotParams
                                        };
                                        return 0 < this.sizes.length && (t.s = this.sizes.filter(r.k).map(function (t) {
                                            return t.join('x');
                                        })), this.floor && (t.fc = this.floor.currency, t.fp = this.floor.value), t;
                                    } catch (t) {
                                        return this.reportError(t, 'aaxSlot'), {
                                            sd: '',
                                            s: []
                                        };
                                    }
                                }
                            },
                            {
                                key: 'sizes',
                                get: function () {
                                    try {
                                        var t = [];
                                        if (Object(r.m)(this.rawSlot, 'sizes') && Object(r.k)(this.rawSlot.sizes)) {
                                            var e = '2d', n = this.rawSlot.sizes;
                                            !(0 < n.length) || Object(r.k)(n[0]) || 'string' == typeof n[0] && O.test(n[0]) || (e = '1d', n = [n]), t = n.filter(function (t) {
                                                return function (t, e) {
                                                    function n(t) {
                                                        var n = JSON.stringify(t);
                                                        -1 === h.indexOf(n) && (h.push(n), Object(i.b)({
                                                            name: 'AaxSlot-InvalidSize',
                                                            message: 'Invalid Slot Size: '.concat(JSON.stringify(e))
                                                        }, 'isValidSize-invalid'));
                                                    }
                                                    try {
                                                        return 'string' == typeof e && O.test(e) ? (Object(o.c)('AaxSlotSizes', ''.concat(t, '-compiled')), !0) : Object(r.k)(e) && 1 !== e.length ? (2 < e.length && n(e), e.slice(0, 2).reduce(function (e, n) {
                                                            return e ? !('number' != typeof n && 'string' != typeof n || 'string' == typeof n && !j.test(n) || ('string' == typeof n ? Object(o.c)('AaxSlotSizes', ''.concat(t, '-string')) : Object(o.c)('AaxSlotSizes', ''.concat(t, '-number')), 0)) : e;
                                                        }, !0)) : (n(e), !1);
                                                    } catch (n) {
                                                        return Object(i.b)(n, 'isValidSize'), !0;
                                                    }
                                                }(e, t);
                                            }).map(function (t) {
                                                return Object(r.k)(t) ? t : t.split('x').map(function (t) {
                                                    return parseInt(t, 10);
                                                });
                                            });
                                        }
                                        return t;
                                    } catch (t) {
                                        return this.reportError(t, 'sizes'), [];
                                    }
                                }
                            },
                            {
                                key: 'floor',
                                get: function () {
                                    var t;
                                    try {
                                        Object(r.m)(this.rawSlot, 'floor') && 'USD' === this.rawSlot.floor.currency && S(this.rawSlot.floor.value) ? (t = this.rawSlot.floor, Object(o.c)('customFloor', 'y')) : Object(o.c)('customFloor', 'n');
                                    } catch (t) {
                                        this.reportError(t, 'floor');
                                    }
                                    return t;
                                }
                            }
                        ]), e;
                    }();
                function S(t) {
                    return 'number' == typeof t && 0 < t && t % 1 == 0;
                }
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'b', function () {
                    return y;
                }), n.d(e, 'a', function () {
                    return h;
                }), n.d(e, 'd', function () {
                    return j;
                }), n.d(e, 'c', function () {
                    return v;
                });
                var r = n(1), i = n(15), o = n(8), c = n(3), a = n(2), s = n(6), u = n(0);
                function d(t) {
                    return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t;
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                    })(t);
                }
                var f = ['email'], b = /@/, l = /^[0-9a-fA-F]{64}$/, p = 'noconsent';
                function m(t) {
                    return t === p ? 'AMZN-NoCookieConsent' : 'AMZN-Token';
                }
                function g(t, e, n) {
                    var i = 0 < arguments.length && void 0 !== t ? t : '', o = 1 < arguments.length && void 0 !== e ? e : 0, c = 2 < arguments.length && void 0 !== n ? n : 'token';
                    try {
                        var a = new Date(o).toUTCString();
                        document.cookie = ''.concat(m(c), '=').concat(i, '; expires=').concat(a, '; path=/;');
                    } catch (t) {
                        Object(r.b)(t, 'setAmznToken-'.concat(c), !0);
                    }
                }
                function y() {
                    var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'token';
                    try {
                        var e = Object(u.d)().filter(function (e) {
                            return e[0] === m(t);
                        });
                        return 0 === e.length ? '' : e[0][1];
                    } catch (e) {
                        return Object(r.b)(e, 'getAmznToken-'.concat(t), !0), '';
                    }
                }
                function h(t) {
                    var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'api';
                    try {
                        if (void 0 !== t && 'function' != typeof t)
                            throw new Error('Callback function must be a function, '.concat(d(t), ' provided'));
                        'function' != typeof t && (t = function () {
                        }), g(), g('', 0, 'noconsent'), Object(c.c)('id', 'd-'.concat(e));
                    } catch (t) {
                        Object(r.b)(t, 'deleteIdentity', !0);
                    }
                    t();
                }
                function O(t, e, n) {
                    try {
                        e = Object(s.a)(e);
                        var i = a.a.getState().config;
                        if (!Object(u.m)(i, 'pubID'))
                            throw new Error('apstag.init must be called before ID functions');
                        var d = {
                            url: 'https://tk.amazon-adsystem.com/envelope',
                            onload: function (t) {
                                try {
                                    if (t.readyState === XMLHttpRequest.DONE && 200 === t.status) {
                                        var n = JSON.parse(t.responseText);
                                        if ('string' != typeof n.AIPToken || 'number' != typeof n.cookieExpiry)
                                            return e(), void Object(r.b)(new Error('Invalid AIPES response'), 'callAipes-response');
                                        '' === n.AIPToken ? (Object(c.c)('id', 'endReqAipes-tokenEmpty'), g('1', n.cookieExpiry, p)) : (Object(c.c)('id', 'endReqAipes-tokenAvailable'), g(n.AIPToken, n.cookieExpiry), Object(c.f)());
                                    } else
                                        t.readyState === XMLHttpRequest.DONE && Object(r.b)(new Error('AIPES response code: '.concat(t.status)), 'callAipes-onload', !0);
                                } catch (t) {
                                    Object(r.b)(t, 'callAipes-onload', !0);
                                }
                                e();
                            },
                            onerror: function () {
                                Object(r.b)(new Error('AIPES response code: '.concat(this.status)), 'callAipes-onerror', !0), e();
                            },
                            ontimeout: function () {
                                Object(r.b)(new Error('AIPES request timeout'), 'callAipes-ontimeout', !0), e();
                            },
                            headers: { 'Content-Type': 'application/json' },
                            body: function (t, e, n) {
                                try {
                                    var i = {
                                        publisherId: e.pubID,
                                        hashedRecords: t.hashedRecords
                                    };
                                    return n.enabled ? (i.gdpr = 1, void 0 !== n.consent && (i.gdprConsent = n.consent)) : 0 === n.enabled && (i.gdpr = 0), void 0 !== t.ttl && (i.ttl = t.ttl), JSON.stringify(i);
                                } catch (t) {
                                    return Object(r.b)(t, 'buildAipesBody', !0), '';
                                }
                            }(t, i, n)
                        };
                        Object(c.c)('id', 'startReqAipes'), Object(o.d)(d);
                    } catch (t) {
                        Object(r.b)(t, 'callAipes', !0), e();
                    }
                }
                function j(t, e) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 'api';
                    'function' != typeof e && (e = function () {
                    });
                    try {
                        if (!Object(u.l)(t))
                            throw new Error('\'tokenConfig\' must be an object, '.concat('object' === d(t) ? 'null' : d(t), ' provided'));
                        if (t.optOut)
                            return void h(e, 'u-oo');
                        if (h(function () {
                            }, 'u'), Object(c.c)('id', 'u-'.concat(n)), !function (t) {
                                try {
                                    var e = [];
                                    return !Object(u.m)(t, 'gdpr') || Object(u.l)(t.gdpr) && !Object(u.k)(t.gdpr) ? Object(u.m)(t, 'gdpr') && (Object(u.m)(t.gdpr, 'enabled') && -1 === [
                                        !0,
                                        !1
                                    ].indexOf(t.gdpr.enabled) && e.push('`gdpr.enabled` must be a boolean'), Object(u.m)(t.gdpr, 'consent') && 'string' != typeof t.gdpr.consent && e.push('\'gdpr.consent\' must be a valid IAB-formatted string')) : e.push('`gdpr` must be an Object'), Object(u.m)(t, 'optOut') && -1 === [
                                        !0,
                                        !1
                                    ].indexOf(t.optOut) && e.push('\'optOut\' must be a boolean'), Object(u.m)(t, 'hashedRecords') && Object(u.k)(t.hashedRecords) ? 1 !== t.hashedRecords.length ? e.push('\'hashedRecords\' must contain exactly one item') : t.hashedRecords.forEach(function (t) {
                                        Object(u.m)(t, 'type') && -1 !== f.indexOf(t.type) || e.push('\'type\' must be \'email\' in item \''.concat(JSON.stringify(t), '\'')), Object(u.m)(t, 'encrypted') && 'boolean' != typeof t.encrypted && e.push('\'encrypted\' must be a boolean in item \''.concat(JSON.stringify(t), '\'')), Object(u.m)(t, 'record') && 'string' == typeof t.record ? t.encrypted || l.test(t.record) ? t.encrypted && b.test(t.record) && e.push('\'record\' must NOT be an un-hashed, un-encrypted email') : e.push('\'record\' must be a SHA256 hash in item \''.concat(JSON.stringify(t), '\'')) : e.push('\'record\' must be a string in item \''.concat(JSON.stringify(t), '\''));
                                    }) : e.push('\'hashedRecords\' must be an array'), Object(u.m)(t, 'ttl') && ('number' != typeof t.ttl || isNaN(t.ttl) || t.ttl <= 0 || t.ttl % 1 != 0) && e.push('\'ttl\' must be a positive integer'), 0 < e.length ? void Object(r.b)({
                                        name: 'TokenConfigValidationError',
                                        message: 'There was an issue with the TokenConfig provided '.concat(JSON.stringify(t), ':\n') + e.map(function (t) {
                                            return '- '.concat(t);
                                        }).join('\n')
                                    }, 'validateTokenConfig-invalid', !0) : 1;
                                } catch (t) {
                                    return void Object(r.b)(t, 'validateTokenConfig', !0);
                                }
                            }(t))
                            return void e();
                        Object(i.a)(t.gdpr, O.bind(null, t, e));
                    } catch (t) {
                        Object(r.b)(t, 'updateIdentity', !0), e();
                    }
                }
                function v(t, e) {
                    'function' != typeof e && (e = function () {
                    });
                    try {
                        if (!Object(u.l)(t))
                            throw new Error('\'tokenConfig\' must be an object, '.concat('object' === d(t) ? 'null' : d(t), ' provided'));
                        if (t.optOut)
                            return void h(e, 'r-oo');
                        if ('' !== y('noconsent'))
                            return void e();
                        if ('' !== y())
                            return e(), void Object(c.c)('id', 'r-noop');
                        j(t, e, 'r');
                    } catch (t) {
                        Object(r.b)(t, 'renewIdentity', !0), e();
                    }
                }
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'a', function () {
                    return b;
                });
                var r = n(1), i = n(3), o = n(0);
                function c(t) {
                    return (c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t;
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                    })(t);
                }
                function a(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })), n.push.apply(n, r);
                    }
                    return n;
                }
                function s(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? a(Object(n), !0).forEach(function (e) {
                            u(t, e, n[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : a(Object(n)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                        });
                    }
                    return t;
                }
                function u(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t;
                }
                Number.isInteger = Number.isInteger || function (t) {
                    return 'number' == typeof t && isFinite(t) && Math.floor(t) === t;
                };
                var d = '__cmp', f = '__tcfapi';
                function b(t, e) {
                    var n = !1, a = { log: { status: 'no-status' } }, u = 50, b = 'global-func-error';
                    function l() {
                        n || (n = !0, e(s(s({}, a), {}, { log: s({}, a.log) })));
                    }
                    e = Object(r.d)(e, 'GdprCallback');
                    var p = 'null';
                    function m(t, e) {
                        try {
                            if (!e || !Object(o.l)(t))
                                return a.log.status = ''.concat(p, '-error'), void l();
                            a.log.status = ''.concat(p, '-success'), Object(o.m)(t, 'tcString') ? a.consent = t.tcString : Object(o.m)(t, 'consentData') && (a.consent = t.consentData), a.enabled = t.gdprApplies ? 1 : 0, 0 === a.enabled && delete a.consent, l();
                        } catch (t) {
                            a.log.status = 'func-error', l(), Object(r.b)(t, 'cmpCallback-'.concat(p), !0);
                        }
                    }
                    try {
                        if (!1 === (t = Object(o.l)(t) ? s({}, t) : {}).enabled || 0 === t.enabled ? (a.log.status = 'explicit-no-gdpr', a.enabled = 0) : !0 === t.enabled || 1 === t.enabled ? (a.log.status = Object(o.m)(t, 'consent') ? 'explicit-consent-passed' : 'explicit-no-consent-passed', a.enabled = 1, a.consent = t.consent) : Object(o.m)(t, 'enabled') && (a.log.status = Object(o.m)(t, 'consent') ? 'malformed-with-consent' : 'malformed-without-consent', a.consent = t.consent, Number.isInteger(t.enabled) ? a.enabled = t.enabled : a.enabled = 1), Object(o.m)(t, 'enabled') && (a.log.enabled = t.enabled), Object(o.m)(t, 'cmpTimeout') && Number.isInteger(t.cmpTimeout) && (u = t.cmpTimeout, a.log.cmpTimeout = u), void 0 !== a.enabled)
                            return Object(i.c)('gdpr', 'pub-api'), Object(o.m)(a, 'consent') && 'string' != typeof a.consent && (delete a.consent, Object(r.b)(new Error('Invalid consent: must be string, given '.concat(c(a.consent))), 'getGdprConfig-pub-consent-invalid', !0)), void l();
                    } catch (t) {
                        Object(r.b)(t, 'getGdprConfig-parseConfig', !0);
                    }
                    try {
                        if (Object(o.m)(window, f) && 'function' == typeof window[f])
                            p = 'tcfv2';
                        else {
                            if (!Object(o.m)(window, d) || 'function' != typeof window[d])
                                return Object(i.c)('gdpr', 'no-cmp'), a.log.status = 'no-cmp', void l();
                            p = 'cmp';
                        }
                        Object(i.c)('gdpr', p), setTimeout(function () {
                            a.log.status = ''.concat(p, '-timeout'), l();
                        }, u), b = ''.concat(p, '-internal-error'), 'cmp' === p ? window[d]('getConsentData', null, m) : window[f]('getTCData', 2, m);
                    } catch (t) {
                        a.log.status = b, l(), Object(r.b)(t, 'getGdprConfig-'.concat(b), !0);
                    }
                }
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'b', function () {
                    return m;
                }), n.d(e, 'a', function () {
                    return g;
                });
                var r = n(0), i = n(13), o = n(1);
                function c(t) {
                    return (c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t;
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                    })(t);
                }
                function a(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError('Cannot call a class as a function');
                }
                function s(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                    }
                }
                function u(t, e, n) {
                    return e && s(t.prototype, e), n && s(t, n), t;
                }
                function d(t, e) {
                    if ('function' != typeof e && null !== e)
                        throw new TypeError('Super expression must either be null or a function');
                    t.prototype = Object.create(e && e.prototype, {
                        constructor: {
                            value: t,
                            writable: !0,
                            configurable: !0
                        }
                    }), e && function (t, e) {
                        (Object.setPrototypeOf || function (t, e) {
                            return t.__proto__ = e, t;
                        })(t, e);
                    }(t, e);
                }
                function f(t) {
                    var e = function () {
                        if ('undefined' == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ('function' == typeof Proxy)
                            return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                            })), !0;
                        } catch (t) {
                            return !1;
                        }
                    }();
                    return function () {
                        var n, r, i, o = l(t);
                        if (e) {
                            var a = l(this).constructor;
                            n = Reflect.construct(o, arguments, a);
                        } else
                            n = o.apply(this, arguments);
                        return r = this, !(i = n) || 'object' !== c(i) && 'function' != typeof i ? b(r) : i;
                    };
                }
                function b(t) {
                    if (void 0 === t)
                        throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                    return t;
                }
                function l(t) {
                    return (l = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t);
                    })(t);
                }
                function p(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t;
                }
                var m = function () {
                        d(e, i.c);
                        var t = f(e);
                        function e(n) {
                            var r;
                            return a(this, e), p(b(r = t.call(this, n.getSlotElementId(), n.getAdUnitPath())), 'rawSlot', void 0), p(b(r), 'mediaType', 'display'), r.rawSlot = n, r;
                        }
                        return u(e, [
                            {
                                key: 'reportError',
                                value: function (t, e, n) {
                                    var r = 2 < arguments.length && void 0 !== n && n;
                                    Object(o.b)(t, 'GptSlot-'.concat(e), r);
                                }
                            },
                            {
                                key: 'setTargeting',
                                value: function (t, e) {
                                    try {
                                        this.rawSlot.setTargeting(t, e);
                                    } catch (t) {
                                        this.reportError(t, 'setTargeting');
                                    }
                                }
                            },
                            {
                                key: 'getTargeting',
                                value: function (t) {
                                    try {
                                        return this.rawSlot.getTargeting(t);
                                    } catch (t) {
                                        return this.reportError(t, 'getTargeting'), [];
                                    }
                                }
                            },
                            {
                                key: 'clearTargeting',
                                value: function (t) {
                                    try {
                                        this.rawSlot.clearTargeting(t);
                                    } catch (t) {
                                        this.reportError(t, 'clearTargeting');
                                    }
                                }
                            },
                            {
                                key: 'sizes',
                                get: function () {
                                    try {
                                        var t = Object(r.h)(window).split('x').map(function (t) {
                                                return Number(t);
                                            }), e = this.rawSlot.getSizes(t[0], t[1]);
                                        return null === e ? [] : e.filter(function (t) {
                                            return 'fluid' !== t;
                                        }).map(function (t) {
                                            return [
                                                t.getWidth(),
                                                t.getHeight()
                                            ];
                                        });
                                    } catch (t) {
                                        return this.reportError(t, 'sizes'), [];
                                    }
                                }
                            }
                        ]), e;
                    }(), g = function () {
                        d(e, i.b);
                        var t = f(e);
                        function e() {
                            var n;
                            a(this, e);
                            for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)
                                i[o] = arguments[o];
                            return p(b(n = t.call.apply(t, [this].concat(i))), 'isSupported', !0), n;
                        }
                        return u(e, [
                            {
                                key: 'reportError',
                                value: function (t, e) {
                                    Object(o.b)(t, 'GoogletagAdServer-'.concat(e));
                                }
                            },
                            {
                                key: 'cmdQueuePush',
                                value: function (t) {
                                    try {
                                        window.googletag.cmd.push(t);
                                    } catch (t) {
                                        this.reportError(t, 'cmdQueuePush');
                                    }
                                }
                            },
                            {
                                key: 'slotRenderEndedEvent',
                                value: function (t) {
                                    try {
                                        window.googletag.pubads().addEventListener('slotRenderEnded', function (e) {
                                            var n = new m(e.slot);
                                            t(n);
                                        });
                                    } catch (t) {
                                        this.reportError(t, 'slotRenderEndedEvent');
                                    }
                                }
                            },
                            {
                                key: 'setTargeting',
                                value: function (t, e) {
                                    try {
                                        window.googletag.pubads().setTargeting(t, e);
                                    } catch (t) {
                                        this.reportError(t, 'setTargeting');
                                    }
                                }
                            },
                            {
                                key: 'getTargeting',
                                value: function (t) {
                                    try {
                                        return window.googletag.pubads().getTargeting(t) || [];
                                    } catch (t) {
                                        return this.reportError(t, 'getTargeting'), [];
                                    }
                                }
                            },
                            {
                                key: 'clearTargeting',
                                value: function (t) {
                                    try {
                                        window.googletag.pubads().clearTargeting(t);
                                    } catch (t) {
                                        this.reportError(t, 'clearTargeting');
                                    }
                                }
                            },
                            {
                                key: 'hasAdServerObjectLoaded',
                                value: function () {
                                    try {
                                        return Object(r.m)(window, 'googletag') && Object(r.m)(window.googletag, 'apiReady') && !0 === window.googletag.apiReady;
                                    } catch (t) {
                                        return this.reportError(t, 'hasAdServerObjectLoaded'), !1;
                                    }
                                }
                            },
                            {
                                key: 'isCommandQueueDefined',
                                value: function () {
                                    try {
                                        return Object(r.m)(window, 'googletag') && Object(r.m)(window.googletag, 'cmd');
                                    } catch (t) {
                                        return this.reportError(t, 'isCommandQueueDefined'), !1;
                                    }
                                }
                            },
                            {
                                key: 'getSlots',
                                value: function () {
                                    try {
                                        return window.googletag.pubads().getSlots().map(function (t) {
                                            return new m(t);
                                        });
                                    } catch (t) {
                                        return this.reportError(t, 'getSlots'), [];
                                    }
                                }
                            }
                        ]), e;
                    }();
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'c', function () {
                    return o;
                }), n.d(e, 'a', function () {
                    return c;
                }), n.d(e, 'b', function () {
                    return a;
                });
                var r = n(1), i = n(0);
                function o(t) {
                    try {
                        return !(!Object(i.m)(t, '$sf') || !Object(i.m)(t.$sf, 'ext'));
                    } catch (t) {
                        return Object(r.b)(t, 'isSafeFrame'), !1;
                    }
                }
                function c(t, e) {
                    try {
                        var n = e.innerWidth, i = e.innerHeight, o = parseInt(t[0], 10), c = parseInt(t[1], 10), a = o - n, s = c - i, u = e.sfAPI || e.$sf.ext;
                        u && (n === o && i === c || (u.register(o, c), u.expand({
                            r: a,
                            b: s,
                            push: !0
                        })));
                    } catch (t) {
                        Object(r.b)(t, 'expandSf');
                    }
                }
                function a(t) {
                    try {
                        return 1 === t.innerWidth && 1 === t.innerHeight;
                    } catch (t) {
                        return Object(r.b)(t, 'is1x1Creative'), !1;
                    }
                }
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'b', function () {
                    return r;
                }), n.d(e, 'd', function () {
                    return i;
                }), n.d(e, 'c', function () {
                    return l;
                }), n.d(e, 'a', function () {
                    return g;
                });
                var o = n(8), c = n(1), a = n(4), s = n(5), u = n(2), d = n(6), b = n(0), p = n(10), m = n(3);
                function r() {
                    const $___old_f7ecb51abbda9562 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_f7ecb51abbda9562)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_ba1c6ba55dfe66f1.localStorage));
                        return function () {
                            var r = u.a.getState().experiments.shouldSampleLatency;
                            if (Object(b.i)()) {
                                var t = window.localStorage.getItem(a.j);
                                t && (window.apstag.thirdPartyData.ids = JSON.parse(t));
                            }
                            var i = Date.now(), e = {
                                    url: f(),
                                    withCredentials: !0,
                                    onload: function t(e) {
                                        if (200 === e.status)
                                            try {
                                                u.a.dispatch({
                                                    type: 'RECORD_LIBRARY_LOAD_CALL_LATENCY',
                                                    latency: Date.now() - i
                                                }), r && setTimeout(m.d, 1000);
                                                var n = JSON.parse(e.response);
                                                eval(n['3pvendor']);
                                            } catch (t) {
                                                Object(c.b)(t, 'load3PLibraryConfig-onload', !0);
                                            }
                                    },
                                    onerror: function () {
                                    }
                                };
                            try {
                                Object(o.d)(e);
                            } catch (t) {
                                Object(c.b)(t, 'load3PLibraryConfig', !0);
                            }
                            r && setTimeout(m.d, 1000);
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_f7ecb51abbda9562)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_f7ecb51abbda9562));
                    }
                }
                function f() {
                    try {
                        var t, e = u.a.getState(), n = e.config, r = Object(s.c)('host', e.hosts.DEFAULT_AAX_BID_HOST), i = e.cfg.LIB_CONFIG_PATH;
                        t = {
                            src: n.isSelfServePub ? a.s : n.pubID,
                            u: Object(d.g)(window)
                        }, n.isSelfServePub && (t.pubid = n.pubID);
                        var o = Object.keys(t).map(function (e) {
                            return ''.concat(e, '=').concat(t[e]);
                        }).join('&');
                        return ''.concat(a.r).concat(r).concat(i, '?').concat(o);
                    } catch (e) {
                        return Object(c.b)(e, 'buildLibraryConfigUrl', !0), '';
                    }
                }
                function i() {
                    return Object(b.m)(window, 'creativeVendorLibraryLoaded') && !0 === window.creativeVendorLibraryLoaded || Object(b.m)(window, 'confiant');
                }
                function l() {
                    var t;
                    t = { renderTimes: {} }, window.addEventListener('message', function (e) {
                        if (Object(b.l)(e.data)) {
                            var n;
                            if (Object(b.m)(e.data, 'bidInfo'))
                                if (Object(b.m)(e.data.bidInfo, 'src')) {
                                    var r = e.data.bidInfo.src;
                                    n = new URL(r).searchParams.get('b');
                                } else if (Object(b.m)(e.data.bidInfo, 'jsonp')) {
                                    var i = e.data.bidInfo.jsonp;
                                    n = JSON.parse(i.substr(17, i.length - 20)).amzniid;
                                }
                            if (Object(b.m)(e.data, 'renderData')) {
                                var o = e.data.renderData, c = o.id;
                                if (Object(b.m)(o, 'renderStart') || Object(b.m)(o, 'renderEnd')) {
                                    var a = o.renderStart, s = o.renderEnd;
                                    if (a)
                                        t.renderTimes[c] = { timeStamp: a }, n && (t.renderTimes[c].bidId = n);
                                    else if (s && Object(b.m)(t.renderTimes, c) && 0 !== t.renderTimes[c].timeStamp) {
                                        var u = s - t.renderTimes[c].timeStamp, d = {
                                                _type: 'iframeRender',
                                                c: 'dtb',
                                                pid: p.b,
                                                crt: u
                                            };
                                        t.renderTimes[c].bidId && (n = t.renderTimes[c].bidId), n ? Object(m.a)(n, d) : Object(m.b)(d);
                                    }
                                }
                            }
                            if (Object(b.m)(e.data, 'blockData')) {
                                var f = e.data.blockData.blockInfo, l = {
                                        _type: 'malwareBlock',
                                        c: 'dtb',
                                        tpbr: 1,
                                        pid: p.b,
                                        info: f
                                    };
                                n ? Object(m.a)(n, l) : Object(m.b)(l);
                            }
                        }
                    }, !0);
                }
                function g(t, e) {
                    window.apstag.thirdPartyData.ids ? e(window.apstag.thirdPartyData.ids) : e({});
                }
            },
            function (t, e, n) {
                'use strict';
                function r(t) {
                    return void 0 !== t.amzniid;
                }
                function i(t) {
                    return void 0 !== t.kvMap;
                }
                n.d(e, 'b', function () {
                    return r;
                }), n.d(e, 'a', function () {
                    return i;
                });
            },
            function (t, e, n) {
                'use strict';
                n.d(e, 'b', function () {
                    return c;
                }), n.d(e, 'a', function () {
                    return a;
                });
                var r = n(4), i = n(0), o = n(1);
                function c(t) {
                    try {
                        return Object(i.m)(t, 'debug');
                    } catch (t) {
                        return Object(o.b)(t, 'isApstagLibrary'), !1;
                    }
                }
                function a(t) {
                    try {
                        return !!Object(i.m)(t, r.a) && !0 === t[r.a];
                    } catch (t) {
                        return Object(o.b)(t, 'hasApstagJsLoaded'), !1;
                    }
                }
            },
            ,
            ,
            ,
            ,
            ,
            function (t, e, n) {
                t.exports = n(27);
            },
            function (t, e, n) {
                'use strict';
                n.r(e);
                var zt = n(15), xt = n(2), Bt = n(6), Lt = n(0), Nt = n(12), qt = n(5), Ft = n(4), Ut = n(11), Mt = n(17), Ht = n(3), Qt = n(1), Xt = n(8), Gt = n(16), r = n(20), Vt = n(7), Kt = n(10), Jt = n(13), Yt = n(19), Wt = n(9), $t = n(18), Zt = n(14);
                function te(t) {
                    return a(t) || c(t) || o(t) || i();
                }
                function i() {
                    throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                }
                function o(t, e) {
                    if (t) {
                        if ('string' == typeof t)
                            return s(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return 'Object' === n && t.constructor && (n = t.constructor.name), 'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(t, e) : void 0;
                    }
                }
                function c(t) {
                    if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
                        return Array.from(t);
                }
                function a(t) {
                    if (Array.isArray(t))
                        return s(t);
                }
                function s(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++)
                        r[n] = t[n];
                    return r;
                }
                function u(t, e) {
                    var n = Object.keys(t);
                    if (Object.getOwnPropertySymbols) {
                        var r = Object.getOwnPropertySymbols(t);
                        e && (r = r.filter(function (e) {
                            return Object.getOwnPropertyDescriptor(t, e).enumerable;
                        })), n.push.apply(n, r);
                    }
                    return n;
                }
                function ee(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? u(Object(n), !0).forEach(function (e) {
                            ne(t, e, n[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : u(Object(n)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                        });
                    }
                    return t;
                }
                function ne(t, e, n) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = n, t;
                }
                function re(t) {
                    return (re = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t;
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                    })(t);
                }
                try {
                    var d = Object(r.b)(window.apstag);
                    d ? Object(Qt.b)(new Error('apstag has already loaded - preventing duplicate load'), 'apstag-duplicateLoad', !0) : (Object(r.a)(window) && Object(Qt.b)(new Error('apstag was loaded and then destroyed'), 'apstag-destroyReload', !0), window.apstagLOADED = !0, function () {
                        var b = Object(Ut.e)(window, 'navigationStart'), t = 'ls', e = Object(qt.d)('console') || function () {
                                try {
                                    return -1 !== window.location.href.indexOf('amzn_debug_console=1') && (t = 'url', !0);
                                } catch (t) {
                                    return !1;
                                }
                            }(), n = Object(qt.d)('console_v2') || function () {
                                try {
                                    return -1 !== window.location.href.indexOf('amzn_debug_console=2') && (t = 'url', !0);
                                } catch (t) {
                                    return !1;
                                }
                            }();
                        function r(t) {
                            try {
                                t.ts = Date.now(), xt.a.dispatch({
                                    type: 'LOG_EVENT',
                                    event: t
                                });
                            } catch (t) {
                                Object(Qt.b)(t, '_logEvent');
                            }
                        }
                        function i(t) {
                            function e(t) {
                                try {
                                    if (!xt.a.getState().cmpFired) {
                                        xt.a.dispatch({ type: 'CMP_FIRED' });
                                        var e = document.createElement('iframe');
                                        e.style.display = 'none', e.src = t, document.body.appendChild(e);
                                    }
                                } catch (t) {
                                    Object(Qt.b)(t, '_doCookieMatch-ready');
                                }
                            }
                            try {
                                'loading' === document.readyState ? document.addEventListener && document.addEventListener('DOMContentLoaded', function () {
                                    e(t);
                                }, !1) : e(t);
                            } catch (t) {
                                Object(Qt.b)(t, '_doCookieMatch');
                            }
                        }
                        function o(t) {
                            try {
                                var e = xt.a.getState().cfg.COOKIE_MATCH_DELAY;
                                setTimeout(function () {
                                    try {
                                        Object(Lt.m)(t, 'cmp') ? i(t.cmp) : Object(Lt.m)(t, 'cmpjs') && Object(Xt.b)(t.cmpjs);
                                    } catch (t) {
                                        Object(Qt.b)(t, '_tryCookieMatch-setTimeout');
                                    }
                                }, e);
                            } catch (t) {
                                Object(Qt.b)(t, '_tryCookieMatch');
                            }
                        }
                        function c(t) {
                            try {
                                return !xt.a.getState().experiments.chunkRequests || 0 === xt.a.getState().bidReqs[t.split('-')[0]].networkReqs.filter(function (t) {
                                    return t.inFlight;
                                }).length;
                            } catch (t) {
                                return Object(Qt.b)(t, '_isRequestComplete'), 1;
                            }
                        }
                        function a(t, e) {
                            try {
                                !xt.a.getState().bidReqs[t].hasCallbackExecuted && c(t) && (xt.a.dispatch({
                                    type: 'RECORD_CALLBACK',
                                    fid: t
                                }), e());
                            } catch (t) {
                                Object(Qt.b)(t, '_checkAndCallCallback');
                            }
                        }
                        function s(t) {
                            try {
                                xt.a.getState().experiments.chunkRequests && xt.a.dispatch({
                                    type: 'RECORD_NETWORK_EXCHANGE',
                                    fid: t[0],
                                    timestamp: Date.now(),
                                    exchangeType: 'response',
                                    networkID: parseInt(t[1], 10)
                                });
                            } catch (t) {
                                Object(Qt.b)(t, '_recordResponse');
                            }
                        }
                        function p(t, r, e) {
                            var i = e.split('-'), n = {
                                    url: t,
                                    withCredentials: !0,
                                    onload: function t(e) {
                                        try {
                                            s(i);
                                            var n = e.responseText;
                                            eval(n), a(i[0], r);
                                        } catch (t) {
                                            Object(Qt.b)(t, '_xhrBid-onload', !0);
                                        }
                                    },
                                    onerror: function () {
                                        try {
                                            s(i), a(i[0], r);
                                        } catch (t) {
                                            Object(Qt.b)(t, '_xhrBid-onerror', !0);
                                        }
                                    }
                                };
                            try {
                                Object(Xt.d)(n);
                            } catch (t) {
                                Object(Qt.b)(t, '_xhrBid', !0), s(i), a(i[0], r);
                            }
                        }
                        function u(t) {
                            try {
                                var e = new Date();
                                return e.setTime(e.getTime() + 1000 * t), e.toUTCString();
                            } catch (t) {
                                return Object(Qt.b)(t, '_getCookieExpiry'), 'Thu, 01 Jan 1970 00:00:00 GMT';
                            }
                        }
                        function d(t) {
                            try {
                                Object(Lt.m)(t, 'cr') && t.cr.forEach(function (t) {
                                    document.cookie = ''.concat(t.k, '=').concat(t.v, ';expires=').concat(-1 !== t.exp ? u(t.exp) : Object(Lt.g)(365), ';path=/;');
                                });
                            } catch (t) {
                                Object(Qt.b)(t, '_setFirstPartyCookies');
                            }
                        }
                        function f(t) {
                            try {
                                if (Object(Lt.m)(t, 'cb')) {
                                    xt.a.dispatch({
                                        type: 'RECORD_AAX_REQ_PROP',
                                        bidReqID: t.cb,
                                        key: 'resTs',
                                        value: Date.now()
                                    });
                                    var e = new RegExp('e/dtb/bid.*cb='.concat(t.cb));
                                    xt.a.dispatch({
                                        type: 'RECORD_AAX_REQ_PROP',
                                        bidReqID: t.cb,
                                        key: 'perf',
                                        value: Object(Ut.c)(window, e)
                                    });
                                }
                                Object(Lt.m)(t, 'cfg') && xt.a.dispatch({
                                    type: 'SET_CFG',
                                    cfg: t.cfg
                                }), K(t);
                            } catch (t) {
                                Object(Qt.b)(t, '_doOnAaxResponse', !0);
                            }
                        }
                        function l(t) {
                            const $___old_3b148167bec26c06 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                            try {
                                if ($___old_3b148167bec26c06)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___mock_ba1c6ba55dfe66f1.localStorage));
                                return function () {
                                    try {
                                        if (o(t), d(t), Object(Lt.m)(t, 'cfg') && localStorage.setItem(Ft.c, JSON.stringify(t.cfg)), Object(Lt.m)(t, 'st') && Object(Lt.j)(t.st, 917) && xt.a.getState().sync917) {
                                            xt.a.dispatch({
                                                type: 'SET_SYNC_917',
                                                value: !1
                                            });
                                            try {
                                                P();
                                            } catch (t) {
                                                Object(Qt.b)(t, '__error-doFbSync__');
                                            }
                                        }
                                        m(t), Object(Bt.j)(t) || Object(Ht.f)();
                                    } catch (t) {
                                        Object(Qt.b)(t, '_doAfterAaxResponse', !0);
                                    }
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_3b148167bec26c06)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___old_3b148167bec26c06));
                            }
                        }
                        function m(t) {
                            try {
                                if (Object(Lt.m)(t, 'fp')) {
                                    var e = t.fp;
                                    Object(Lt.m)(e, 'length') && e.forEach(function (t) {
                                        var e = t.d ? t.d : 0;
                                        setTimeout(function () {
                                            Object(Ht.e)(t.s);
                                        }, e);
                                    });
                                }
                            } catch (t) {
                                Object(Qt.b)(t, 'fireAAXPixels');
                            }
                        }
                        function g() {
                            try {
                                xt.a.getState().Q.forEach(function (t) {
                                    var e = 'init';
                                    switch (t[0]) {
                                    case 'i':
                                        e = 'init';
                                        break;
                                    case 'f':
                                        e = 'fetchBids';
                                        break;
                                    case 'di':
                                        e = 'deleteId';
                                        break;
                                    case 'ri':
                                        e = 'renewId';
                                        break;
                                    case 'ui':
                                        e = 'updateId';
                                        break;
                                    default:
                                        return;
                                    }
                                    window.apstag[e].apply(null, t[1]);
                                });
                            } catch (t) {
                                Object(Qt.b)(t, '_QHandler', !0);
                            }
                        }
                        function h(t) {
                            try {
                                Object(Lt.l)(t) || (Object(Qt.c)('init.config', re(t), 'object'), t = { pubID: 'err' }), Object(Wt.b)(t.pubID, [
                                    'string',
                                    'number'
                                ]) ? 'number' == typeof t.pubID && (t.pubID = ''.concat(t.pubID)) : Object(Qt.c)('init.config.pubID', re(t.pubID), 'string'), Object(Wt.b)(t.adServer, [
                                    'undefined',
                                    'string'
                                ]) || Object(Qt.c)('init.config.adServer', re(t.adServer), 'string'), Object(Wt.a)(t.bidTimeout) || ('string' == typeof t.bidTimeout ? Object(Qt.b)({
                                    name: 'string-'.concat(t.bidTimeout),
                                    message: 'init.config.bidTimeout was a non-numeric string \''.concat(t.bidTimeout, '\'')
                                }, 'TypeError-init.config.bidTimeout', !0) : Object(Qt.c)('init.config.bidTimeout', re(t.bidTimeout), 'number')), Object(Wt.b)(t.gdpr, [
                                    'undefined',
                                    'object'
                                ]) ? 'object' === re(t.gdpr) && (Object(Wt.a)(t.gdpr.cmpTimeout) || (Object(Wt.b)(t.gdpr.cmpTimeout, [
                                    'string',
                                    'undefined'
                                ]) ? Object(Qt.b)({
                                    name: 'string-'.concat(t.bidTimeout),
                                    message: 'init.config.gdpr.cmpTimeout was a non-numeric string \''.concat(t.gdpr.cmpTimeout, '\'')
                                }, 'TypeError-init.config.gdpr.cmpTimeout', !0) : Object(Qt.c)('init.config.gdpr.cmpTimeout', re(t.gdpr.cmpTimeout), 'number'))) : Object(Qt.c)('init.config.gdpr', re(t.gdpr), 'object'), Object(Lt.m)(t, 'params') && !Object(Lt.l)(t.params) ? Object(Qt.c)('init.config.params', re(t.params), 'object') : Object(Lt.m)(t, 'params') && Object.keys(t.params).forEach(function (e) {
                                    return !(!Object(Lt.m)(t, 'params') || 'string' != typeof t.params[e] && 'number' != typeof t.params[e] && (Object(Lt.k)(t.params[e]) ? !t.params[e].reduce(function (t, e) {
                                        return t && ('string' == typeof e || 'number' == typeof e);
                                    }, !0) && (Object(Qt.b)({
                                        name: 'non-string array item',
                                        message: '\'init.config.params.'.concat(e, ' contains a non-string item')
                                    }, 'TypeError-init.config.params.'.concat(e), !0), 1) : (Object(Qt.c)('init.config.params.'.concat(e), re(t.params[e]), 'string\' or \'array'), 1)));
                                }), Object(Lt.m)(t, 'params') && Object(Lt.m)(t.params, 'us_privacy') && 'string' == typeof t.params.us_privacy && Ft.x.test(t.params.us_privacy) ? Object(Ht.c)('ccpa', 'y') : Object(Lt.m)(t, 'params') && Object(Lt.m)(t.params, 'us_privacy') ? Object(Ht.c)('ccpa', 'i') : Object(Ht.c)('ccpa', 'n'), Object(Lt.m)(t, 'blockedBidders') && !Object(Lt.k)(t.blockedBidders) ? Object(Qt.c)('init.config.blockedBidders', re(t.blockedBidders), 'array') : Object(Lt.m)(t, 'blockedBidders') && Object(Lt.k)(t.blockedBidders) && (t.blockedBidders.reduce(function (t, e) {
                                    return t && ('string' == typeof e || 'number' == typeof e);
                                }, !0) || Object(Qt.b)({
                                    name: 'non-string array item',
                                    message: '\'init.config.blockedBidders contains a non-string item'
                                }, 'TypeError-init.config.blockedBidders', !0)), Object(Lt.m)(t, 'blockedBidders') ? Object(Ht.c)('blockedBidders-init', 'y') : Object(Ht.c)('blockedBidders-init', 'n'), Object(Wt.b)(t.simplerGPT, [
                                    'undefined',
                                    'boolean'
                                ]) || Object(Qt.c)('init.config.simplerGPT', re(t.simplerGPT), 'boolean'), t.simplerGPT ? Object(Ht.c)('simplerGpt', 'y') : Object(Ht.c)('simplerGpt', 'n'), Object(Wt.b)(t.deals, [
                                    'undefined',
                                    'boolean'
                                ]) || Object(Qt.c)('init.config.deals', re(t.deals), 'boolean'), t.deals ? Object(Ht.c)('deals', 'y') : Object(Ht.c)('deals', 'n'), Object(Wt.b)(t.schain, [
                                    'undefined',
                                    'object'
                                ]) && null !== t.schain ? Object(Lt.m)(t, 'schain') && !Object(Kt.i)(t.schain) && delete t.schain : (Object(Qt.c)('init.config.schain', re(t.schain), 'object'), delete t.schain), Object(Lt.m)(t, 'schain') ? Object(Ht.c)('schain', 'y') : Object(Ht.c)('schain', 'n'), Object(Wt.b)(t.useSafeFrames, [
                                    'undefined',
                                    'boolean'
                                ]) || (Object(Qt.c)('init.config.useSafeFrames', re(t.useSafeFrames), 'boolean'), delete t.useSafeFrames), t.useSafeFrames ? Object(Ht.c)('useSafeFrames', 'y') : Object(Ht.c)('useSafeFrames', 'n');
                            } catch (e) {
                                Object(Qt.b)(e, '_validateAndStoreConfig-validateConfig');
                            }
                            try {
                                var e = xt.a.getState().config;
                                Object(Lt.m)(e, 'pubID') && Object(Lt.m)(t, 'pubID') && e.pubID !== t.pubID && Object(Qt.b)(new Error('`apstag.init` was called multiple times with different pubIDs ('.concat(e.pubID, ' then ').concat(t.pubID, ')')), '_validateAndStoreConfig-diffPubId', !0), xt.a.dispatch({
                                    type: 'SET_CONFIG',
                                    config: t,
                                    defaultCmpTimeout: xt.a.getState().cfg.GDPR_CMP_TIMEOUT
                                });
                            } catch (e) {
                                Object(Qt.b)(e, '_validateAndStoreConfig', !0);
                            }
                        }
                        function y(t) {
                            try {
                                var e = t.slotID;
                                if (Object(Lt.m)(t.bidConfig, 'mediaType') && 'v' === t.bidConfig.mediaType)
                                    return;
                                if (!Vt.a.hasAdServerObjectLoaded())
                                    return void Object(Qt.a)('displayAdServer Object hasn\'t been defined', !0);
                                if (!Vt.a.isCommandQueueDefined())
                                    return void Object(Qt.a)('displayAdServer Object\'s cmd queue hasn\'t been defined', !0);
                                Vt.a.hasAdServerObjectLoaded() ? null !== O(e) ? A(t) : Object(Qt.a)(''.concat(e, ' isn\'t defined when trying to set amazon bid!')) : Vt.a.cmdQueuePush(function () {
                                    y(t);
                                });
                            } catch (t) {
                                Object(Qt.b)(t, '_safeApplySlotTargeting', !0);
                            }
                        }
                        function O(t) {
                            var e = null;
                            try {
                                e = Object(Nt.b)(Vt.a).filter(function (e) {
                                    return e.slotID === t;
                                })[0] || null;
                            } catch (e) {
                                Object(Qt.b)(e, '_getAdServerSlot');
                            }
                            return e;
                        }
                        function j(t) {
                            try {
                                var e = xt.a.getState().targetingKeys[t.slotID];
                                Vt.a.hasAdServerObjectLoaded() && Object(Lt.k)(e) && e.forEach(function (e) {
                                    return 0 < t.getTargeting(e).length && t.clearTargeting(e);
                                });
                            } catch (e) {
                                Object(Qt.b)(e, '_clearTargetingFromSlot', !0);
                            }
                        }
                        function v(t) {
                            try {
                                if (Object(Lt.m)(xt.a.getState().slotBids, t.slotID)) {
                                    var e = xt.a.getState().slotBids[t.slotID].filter(function (t) {
                                        return t.bidState === Ft.b.set;
                                    })[0];
                                    e && e.bidState === Ft.b.set && xt.a.dispatch({
                                        type: 'BID_STATE_CHANGE',
                                        slotID: t.slotID,
                                        _targetingSetID: e._targetingSetID,
                                        bidState: Ft.b.exposed
                                    });
                                }
                            } catch (t) {
                                Object(Qt.b)(t, '_clearBidSetOnSlot', !0);
                            }
                        }
                        function S(t, e) {
                            try {
                                return t.map(function (t) {
                                    return Object(Lt.j)(e, t);
                                }).filter(function (t) {
                                    return t;
                                }).length === t.length;
                            } catch (t) {
                                return void Object(Qt.b)(t, '_hasAllItemsInArray');
                            }
                        }
                        function w() {
                            var t = {};
                            try {
                                Object.keys(xt.a.getState().slotBids).forEach(function (e) {
                                    var n = xt.a.getState().slotBids[e].filter(Kt.f);
                                    0 < n.length && (t[e] = n.map(function (t) {
                                        var e = xt.a.getState().AAXReqs.filter(function (e) {
                                                return e.bidReqID === t.bidReqID;
                                            }), n = 0;
                                        if (0 < e.length)
                                            n = e[0].rqTs;
                                        else {
                                            var r = xt.a.getState().AAXReqs.map(function (t) {
                                                return t.bidReqID;
                                            }).join(', ');
                                            Object(Qt.b)({
                                                name: 'BidError',
                                                message: 'Request not found: '.concat(t.bidReqID, ' not found in ').concat(r)
                                            }, '_getCurrentSlotBids-noRequest');
                                        }
                                        return {
                                            rqTs: n,
                                            bid: t
                                        };
                                    }).reduce(function (t, e) {
                                        return t.rqTs > e.rqTs ? t : e;
                                    }).bid);
                                });
                            } catch (t) {
                                Object(Qt.b)(t, '_getCurrentSlotBids', !0);
                            }
                            return t;
                        }
                        function _(t, e) {
                            try {
                                return Object(Lt.k)(xt.a.getState().targetingKeys[t]) ? e ? ['amzniid_sp'] : xt.a.getState().targetingKeys[t].filter(function (t) {
                                    return -1 < t.indexOf('amzniid') && t.indexOf('amzniid_sp') < 0;
                                }) : ['amzniid'];
                            } catch (t) {
                                return Object(Qt.b)(t, '_getAllBidIdKeys'), [];
                            }
                        }
                        function E(t, e) {
                            var n, r;
                            try {
                                var i = xt.a.getState().slotBids;
                                Object.keys(i).forEach(function (o) {
                                    i[o].forEach(function (i) {
                                        _(o, e).forEach(function (e) {
                                            i.bidConfig[e] === t && (n = i, 'amzniid_sp' === e ? r = 'sp' : 'amzniid' !== e && (r = e.substr(0, e.indexOf('amzniid'))));
                                        });
                                    });
                                });
                            } catch (t) {
                                Object(Qt.b)(t, '_findSlotBidByBidID', !0);
                            }
                            return {
                                slotBid: n,
                                dealId: r
                            };
                        }
                        function D(t, e, n) {
                            var r = '';
                            try {
                                e.bidConfig[n + 'amzniid'] === t && (r = n.split('_').pop().trim());
                            } catch (t) {
                                Object(Qt.b)(t, '_getPMPBidSize');
                            }
                            return r;
                        }
                        function T(t) {
                            try {
                                if (void 0 === t.slots)
                                    return [];
                                var e = {};
                                return t.slots.forEach(function (t) {
                                    'video' !== t.mediaType && 'v' !== t.mediaType && 'v' !== t.mediaType_sp ? e[t.slotID] = new Kt.a(t) : (0 <= t.slotID.indexOf('rsv-') && (t = {
                                        slotID: t.slotID.substring(4),
                                        r_amznbid: t.amznbid,
                                        r_amzniid: t.amzniid,
                                        r_amznp: t.amznp,
                                        mediaType: 'video',
                                        targeting: [
                                            'r_amznbid',
                                            'r_amzniid',
                                            'r_amznp'
                                        ],
                                        amznsz: t.amznsz,
                                        size: t.size,
                                        crid: t.crid,
                                        meta: t.meta
                                    }), Object(Lt.m)(e, t.slotID) ? t.targeting.forEach(function (n) {
                                        e[t.slotID].bidConfig[n] = t[n], -1 === e[t.slotID].bidConfig.targeting.indexOf(n) && e[t.slotID].bidConfig.targeting.push(n);
                                    }) : e[t.slotID] = new Kt.a(t));
                                }), Object.keys(e).map(function (t) {
                                    return e[t];
                                });
                            } catch (t) {
                                return Object(Qt.b)(t, '_mergeVideoBids'), [];
                            }
                        }
                        function I(t) {
                            var e = T(t), n = [];
                            try {
                                n = e.map(function (e) {
                                    return e.bidReqID = t.cb, e.host = t.host, e.ev = t.ev, e.cfe = t.cfe, e;
                                });
                            } catch (e) {
                                Object(Qt.b)(e, '_convertAaxResponse');
                            }
                            return n;
                        }
                        function A(t) {
                            try {
                                var e = t.slotID, n = t._targetingSetID;
                                if (t.bidState === Ft.b.set)
                                    return;
                                var r = O(e);
                                if (null !== r) {
                                    v(r);
                                    var i = t.newBidObject;
                                    Object.keys(i.targeting).forEach(function (t) {
                                        return r.setTargeting(t, i.targeting[t]);
                                    }), xt.a.dispatch({
                                        type: 'BID_STATE_CHANGE',
                                        slotID: e,
                                        _targetingSetID: n,
                                        bidState: Ft.b.set,
                                        ts: Date.now()
                                    });
                                }
                            } catch (t) {
                                Object(Qt.b)(t, '_applyTargetingToAdServerSlot', !0);
                            }
                        }
                        function R(t) {
                            try {
                                var e = w();
                                t.forEach(function (t) {
                                    e[t] && y(e[t]);
                                });
                            } catch (t) {
                                Object(Qt.b)(t, '_applySuppliedSlotBidsToAdServerObject', !0);
                            }
                        }
                        function C() {
                            try {
                                var t = w();
                                Object.keys(t).forEach(function (e) {
                                    return y(t[e]);
                                });
                            } catch (t) {
                                Object(Qt.b)(t, '_applyAllCurrentSlotBidsTargetingToAdServerObject', !0);
                            }
                        }
                        function k(t) {
                            try {
                                t ? (Object(Ht.c)('targeting', 'setDisplayBids-list'), R(t)) : (Object(Ht.c)('targeting', 'setDisplayBids-all'), C()), xt.a.getState().displayAdServer.slotRenderEndedSet || (Vt.a.cmdQueuePush(function () {
                                    try {
                                        Vt.a.slotRenderEndedEvent(function (t) {
                                            try {
                                                j(t), v(t);
                                            } catch (t) {
                                                Object(Qt.b)(t, '_applySlotTargeting-cmdQueue-slotCb', !0);
                                            }
                                        });
                                    } catch (t) {
                                        Object(Qt.b)(t, '_applySlotTargeting-cmdQueue', !0);
                                    }
                                }), xt.a.dispatch({ type: 'SLOT_RENDER_ENDED_SET' }));
                            } catch (t) {
                                Object(Qt.b)(t, '_applySlotTargeting', !0);
                            }
                        }
                        function P() {
                            var t = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789', e = '1881141382166183';
                            function n(t) {
                                try {
                                    var e = JSON.parse(t), n = e.fbToken, r = new Date(parseInt(e.expAfter, 10)).toUTCString();
                                    document.cookie = 'aps_ext_917='.concat(n, '; expires=').concat(r);
                                } catch (t) {
                                    Object(Qt.b)(t, '_doFbSync-setFbCookie');
                                }
                            }
                            function r(e) {
                                try {
                                    !function (t, e, n) {
                                        try {
                                            !function (t, e) {
                                                try {
                                                    var n = {
                                                        url: t,
                                                        withCredentials: !0,
                                                        onload: function (t) {
                                                            return e(t.responseText);
                                                        }
                                                    };
                                                    Object(Xt.d)(n);
                                                } catch (t) {
                                                    Object(Qt.b)(t, '_doFbSync-sendTokenRequest');
                                                }
                                            }(function (t, e) {
                                                try {
                                                    return ''.concat('https://www.facebook.com/audiencenetwork/token/update', '?partner=').concat(encodeURIComponent(t), '&vr_token=').concat(encodeURIComponent(e));
                                                } catch (t) {
                                                    return Object(Qt.b)(t, '_doFbSync-getUpdateUrl'), '';
                                                }
                                            }(t, e), n);
                                        } catch (t) {
                                            Object(Qt.b)(t, '_doFbSync-getV4Token');
                                        }
                                    }(e, function () {
                                        try {
                                            for (var e = 'VR_', n = 0; n < 197; ++n)
                                                e += t.charAt(Math.floor(Math.random() * t.length));
                                            return e;
                                        } catch (e) {
                                            return Object(Qt.b)(e, '_doFbSync-getVrToken'), '';
                                        }
                                    }(), n);
                                } catch (e) {
                                    Object(Qt.b)(e, '_doFbSync-getTokenResponse');
                                }
                            }
                            try {
                                'complete' === document.readyState ? r(e) : window.addEventListener('load', function () {
                                    r(e);
                                });
                            } catch (e) {
                                Object(Qt.b)(e, '_doFbSync');
                            }
                        }
                        function z(t, e) {
                            function n() {
                                if (!i)
                                    if (20 <= o++)
                                        Object(Qt.b)({
                                            name: 'LoopError',
                                            message: 'Too many attempts to append to document.body'
                                        }, '_safeDocumentBodyAppendChild-callback-loops', !0);
                                    else {
                                        try {
                                            if (t && t.body && null !== t.body && 'function' == typeof t.body.appendChild)
                                                return t.body.appendChild(e), r(), void (i = !0);
                                        } catch (t) {
                                            Object(Qt.b)(t, '_safeDocumentBodyAppendChild-callback');
                                        }
                                        setTimeout(n, 100);
                                    }
                            }
                            var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : function () {
                                }, i = !1, o = 0;
                            try {
                                'complete' === t.readyState || 'interactive' === t.readyState ? (Object(Ht.c)('appended', 'sync'), n()) : (Object(Ht.c)('appended', 'async'), t.addEventListener('DOMContentLoaded', n));
                            } catch (t) {
                                Object(Qt.b)(t, '_safeDocumentBodyAppendChild');
                            }
                        }
                        function x(t) {
                            try {
                                var e, n;
                                return e = ''.concat(t.host).concat(xt.a.getState().cfg.DTB_PATH, '/imp'), n = ''.concat(t.host).concat(xt.a.getState().cfg.DTB_PATH, '/adm'), t.cfe || t.isAmp || t.isSf ? n : e;
                            } catch (t) {
                                return Object(Qt.b)(t, 'determineCreativeFetchEndpoint'), '';
                            }
                        }
                        function B(t) {
                            try {
                                var e, n = '?b='.concat(t.bidID, '&rnd=').concat(Object(Lt.e)());
                                return Object(Lt.m)(t, 'pp') && (n += '&pp='.concat(t.pp)), Object(Lt.m)(t, 'amznp') && (n += '&p='.concat(t.amznp)), Object(Lt.m)(t, 'crID') && (n += '&crid='.concat(t.crID)), Object(Lt.m)(t, 'isSharedPMP') && !0 === t.isSharedPMP && (n += '&sp=true'), Object($t.d)() && (n += '&ep=%7B%22ce%22%3A%221%22%7D'), e = x(t), t.fif ? ''.concat(e, 'j').concat(n) : ''.concat(e, 'i').concat(n);
                            } catch (t) {
                                return Object(Qt.b)(t, '_creativeURL'), '';
                            }
                        }
                        function L(t) {
                            try {
                                var e = t.doc.createElement('iframe');
                                return e.frameBorder = '0', e.marginHeight = '0', e.marginWidth = '0', e.style.marginTop = '0', e.style.marginLeft = '0', e.scrolling = 'no', t.inheritSize ? (e.style.width = '100%', e.style.height = '100%') : (e.style.width = ''.concat(t.sizes[0], 'px'), e.style.height = ''.concat(t.sizes[1], 'px')), e;
                            } catch (t) {
                                return Object(Qt.b)(t, '_baseIframe'), window.document.createElement('iframe');
                            }
                        }
                        function N(t) {
                            try {
                                if (Object(Lt.m)(t, 'bidType')) {
                                    var e = t.kvMap;
                                    switch (t.bidType) {
                                    case 'sharedPMP':
                                        return {
                                            bidID: e.amzniid_sp[0],
                                            pp: e.amznbid_sp[0],
                                            sizes: e.amznsz_sp[0].split('x'),
                                            amznp: e.amznp_sp[0],
                                            inheritSize: t.inheritSize,
                                            isSharedPMP: t.isSharedPMP
                                        };
                                    case 'preferredPMP':
                                        if (Object(Yt.a)(t) && Object(Lt.m)(t, 'amzndeal')) {
                                            var n = t.amzndeal.split('_').pop().trim();
                                            return {
                                                bidID: e[''.concat(t.amzndeal, 'amzniid')][0],
                                                sizes: jt(n)
                                            };
                                        }
                                        break;
                                    case 'openAuction':
                                        if (Object(Yt.a)(t))
                                            return {
                                                bidID: e.amzniid[0],
                                                pp: Object(Bt.c)(e.amznbid[0]),
                                                amznp: e.amznp[0],
                                                inheritSize: t.inheritSize,
                                                sizes: e.amznsz[0].split('x')
                                            };
                                        if (Object(Yt.b)(t))
                                            return {
                                                bidID: t.amzniid,
                                                pp: Object(Bt.c)(t.amznbid),
                                                amznp: t.amznp,
                                                sizes: t.amznsz.split('x')
                                            };
                                        break;
                                    default:
                                        Object(Qt.b)({
                                            name: 'Invalid AMP Bid Type: '.concat(t.bidType),
                                            message: 'No valid AMP bid type'
                                        }, 'getAmpAdData-invalidBidType');
                                    }
                                }
                            } catch (t) {
                                Object(Qt.b)(t, 'getAmpAdData');
                            }
                            return {
                                bidID: 'ERROR',
                                sizes: []
                            };
                        }
                        function q(t, e) {
                            try {
                                var n = null;
                                if (void 0 !== e && (Object(Lt.m)(e, 'ampEnv') && e.ampEnv || Object(Lt.m)(e, 'sfEnv') && e.sfEnv) && (n = e, Object(Lt.m)(e, 'bidType') && 'sharedPMP' === e.bidType ? n.isSharedPMP = !0 : n.isSharedPMP = !1, n.document = t, n.amznhost = n.kvMap.amznhost[0]), yt(t) && ((n = t).bidType = 'openAuction', n.ampEnv = !0), null === n)
                                    return void Object(Qt.b)(new Error('Invalid AMP parameters'), '_renderAmpImpression-invalidParams', !0);
                                var r = N(n);
                                if ('ERROR' === r.bidID)
                                    return;
                                if (r.doc = n.document, r.host = n.amznhost.replace('http://', 'https://'), r.adID = 'amznad'.concat(Object(Lt.e)()), r.isAmp = n.ampEnv, r.isSf = Object(Mt.c)(window), xt.a.getState().aaxViewabilityEnabled)
                                    return void wt(r, r.doc);
                                U(r);
                            } catch (t) {
                                Object(Qt.b)(t, '_renderAmpImpression');
                            }
                        }
                        function F(t) {
                            var e, n = 'unknown';
                            function r(r) {
                                try {
                                    if (r && (t.hasTimedOut = !0), r && !t.hasRendered && Object(Qt.b)({
                                            name: 'RenderTimeout',
                                            message: 'renderAd was called from timeout. fifFlowMethod: '.concat(n)
                                        }, '__loadAdIntoFriendlyIframe-renderAd-timeout'), null === e.contentDocument)
                                        return void Object(Qt.b)({
                                            name: 'NoDocument',
                                            message: 'iframe.contentDocument was null inside renderAd. isFromTimeout: '.concat(r, '. fifFlowMethod: ').concat(n)
                                        }, '__loadAdIntoFriendlyIframe-renderAd-noDocument', !0);
                                    if (t.hasRendered && !t.hasTimedOut)
                                        return void Object(Qt.b)({
                                            name: 'DupeRender',
                                            message: 'Render was called twice'
                                        }, '__loadAdIntoFriendlyIframe-renderAd-rerender', !0);
                                    if (t.hasRendered)
                                        return;
                                    t.hasRendered = !0, e.contentDocument.open(), e.contentDocument.write(t.html), e.contentDocument.close();
                                } catch (r) {
                                    Object(Qt.b)(r, '__loadAdIntoFriendlyIframe-renderAd');
                                }
                            }
                            try {
                                if (Object(Ht.c)('iframe', 'friendly'), void 0 === t.html)
                                    throw new Error('No HTML available for ad, most likely the creative has expired');
                                t = ee({
                                    hasRendered: !1,
                                    hasTimedOut: !1
                                }, t), (e = L(t)).id = 'apstag-f-iframe-'.concat(Object(Lt.e)()), z(t.doc, e, function () {
                                    var t = r.bind(null, !1);
                                    try {
                                        n = null !== e.contentDocument && Object(Lt.j)([
                                            'complete',
                                            'interactive'
                                        ], e.contentDocument.readyState) ? (t(), 'doc-ready') : null !== e.contentDocument && 'uninitialized' !== e.contentDocument.readyState ? (e.contentDocument.addEventListener('DOMContentLoaded', t), 'dom-listener') : (e.addEventListener('load', t), 'iframe-listener'), Object(Ht.c)('fifFlow', n), setTimeout(r, 1000, !0);
                                    } catch (t) {
                                        Object(Qt.b)(t, '_loadAdIntoFriendlyIframe-setAttributes');
                                    }
                                });
                            } catch (t) {
                                Object(Qt.b)(t, '_loadAdIntoFriendlyIframe', !0);
                            }
                        }
                        function U(t) {
                            var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {
                                    states: {
                                        csmLoaded: !1,
                                        iframeLoaded: !1,
                                        shouldRunViewability: !1
                                    }
                                }, n = 2 < arguments.length ? arguments[2] : void 0;
                            try {
                                Object(Ht.c)('iframe', 'unfriendly');
                                var r = L(t);
                                if (r.id = t.adID, r.setAttribute('sandbox', 'allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation'), Object(qt.d)('fake_bids')) {
                                    var i = '<body style="background-color: #FF9900;">'.concat(50 < parseInt(t.sizes[1], 10) ? '<h3>apstag Test Creative</h3>' : '', '<h4>amzniid - ').concat(t.bidID, ' | amznbid: ').concat(t.pp, ' | size: ').concat(t.sizes.join('x'), '</h4></body>');
                                    r.src = 'javascript:\''.concat(i, '\'');
                                } else
                                    r.src = B(t);
                                !(t.isAmp && t.isSf && Object(Mt.b)(window)) && (!t.isSf || t.isAmp || t.inheritSize) || Object(Mt.a)(t.sizes, window), z(t.doc, r), (e.iframe = r).onload = function () {
                                    e.states.iframeLoaded = !0, n && n();
                                };
                            } catch (t) {
                                Object(Qt.b)(t, '_loadAdIntoUnfriendlyIframe', !0);
                            }
                        }
                        function M(t) {
                            var e = t.states, n = t.doc, r = t.bidID, i = t.iframe;
                            try {
                                if (Object(Lt.a)(e))
                                    return;
                                var o;
                                e.shouldRunViewability = !1, Object(Lt.m)(window, 'amzncsm') ? o = window.amzncsm : void 0 !== n && null !== n.defaultView && Object(Lt.m)(n.defaultView, 'amzncsm') && (o = n.defaultView.amzncsm), void 0 !== n && void 0 !== o && Object(Lt.m)(o, 'rmD') && (o.host = Object(qt.c)('host', xt.a.getState().hosts.DEFAULT_AAX_PIXEL_HOST), o.rmD(i, r, n.defaultView, n, xt.a.getState().config.pubID));
                            } catch (t) {
                                Object(Qt.b)(t, '_triggerViewability');
                            }
                        }
                        function H(t, e) {
                            return function (n) {
                                try {
                                    var r = Object(Kt.e)(e.slots), i = Object.keys(r), o = [];
                                    n && (xt.a.dispatch({
                                        type: 'RECORD_AAX_REQ_PROP',
                                        bidReqID: e.bidReqID,
                                        key: 'timedOutAt',
                                        value: Date.now()
                                    }), xt.a.getState().experiments.chunkRequests && xt.a.dispatch({
                                        type: 'RECORD_TIMEOUT',
                                        fid: e.bidReqID,
                                        timeOut: Date.now()
                                    })), i.forEach(function (t) {
                                        if (Object(Lt.m)(r, t)) {
                                            var e = r[t];
                                            Object(Kt.g)(xt.a.getState(), Vt.a) || Object(Lt.m)(e.bidConfig, 'amznbid') ? Object(Lt.m)(e.bidConfig, 'amznp') || (e.bidConfig.amznp = '') : (Object(Ht.c)('unusedDeal', e.mediaType), 'video' !== e.mediaType && (e.bidConfig.targeting.unshift('amznsz'), e.bidConfig.amznsz = '0x0'), e.bidConfig.targeting.unshift('amzniid', 'amznbid', 'amznp'), e.bidConfig.amzniid = '', e.bidConfig.amznbid = Ft.t.noBid, e.bidConfig.amznp = Ft.t.noBid), o.push(e);
                                        }
                                    }), Vt.a.isSupported && (o = Object(Kt.c)(o, e, n));
                                    var c = { fromTimeout: n }, a = Object(Kt.g)(xt.a.getState(), Vt.a);
                                    try {
                                        t(o.map(function (t) {
                                            return a ? t.newBidObject : t.bidObject;
                                        }), c);
                                    } catch (i) {
                                        console.error(i);
                                    }
                                } catch (i) {
                                    Object(Qt.b)(i, '_bidCallbackHandler', !0);
                                    try {
                                        t([], {
                                            fromTimeout: n,
                                            fromError: !0
                                        });
                                    } catch (i) {
                                        console.error(i);
                                    }
                                }
                            };
                        }
                        function Q(t, e) {
                            try {
                                var n, r;
                                e.inheritSize ? Object(Ht.c)('creativeSize', 'inherited') : (r = t.defaultView && t.defaultView.frameElement ? (n = t.defaultView.frameElement, 'defaultView') : (n = window.frameElement, 'frameElement'), Object(Ht.c)('resizeIframe', r), Object(Ht.c)('creativeSize', 'resized'), null !== n ? (n.style.width = ''.concat(e.sizes[0], 'px'), n.style.height = ''.concat(e.sizes[1], 'px')) : Object(Qt.b)({
                                    name: 'FrameNotFound',
                                    message: '\'win\' is \'null\'. Method used: '.concat(r)
                                }, '_resizeIframe-win'));
                            } catch (t) {
                                Object(Qt.b)(t, '_resizeIframe');
                            }
                        }
                        function X(t) {
                            try {
                                return ''.concat(t[0], 'x').concat(t[1]);
                            } catch (t) {
                                return Object(Qt.b)(t, '_sizeArrayToSring'), 'x';
                            }
                        }
                        function G(t) {
                            try {
                                return 1 === t.length ? X(t[0]) : X(t[Math.floor(t.length * Math.random())]);
                            } catch (t) {
                                return Object(Qt.b)(t, '_pickRandomSizeForMockBid', !0), '';
                            }
                        }
                        function V(t) {
                            try {
                                var e, n = Object(qt.c)('host', xt.a.getState().hosts.DEFAULT_AAX_BID_HOST), r = Object(Bt.g)(window), i = t.bidReqID, o = Object(Lt.h)(window), c = Object(qt.c)('testBidTimeout', 200);
                                xt.a.dispatch({
                                    type: 'RECORD_AAX_REQUEST',
                                    data: {
                                        bidConfig: t,
                                        timeout: c,
                                        bidReqID: i,
                                        ws: o,
                                        url: r,
                                        rqTs: Date.now()
                                    }
                                }), e = t.slots.map(function (t) {
                                    var e, n = G(t.sizes), r = 'testDeal'.concat(Object(Lt.e)(), '_').concat(n), i = 'testDealIi-'.concat(Object(Lt.e)()), o = G(t.sizes), c = (ne(e = {
                                            slotID: t.slotID,
                                            crid: ''.concat(Ft.n.crid, '-').concat(Object(Lt.e)()),
                                            size: o,
                                            amzniid: ''.concat(Ft.n.amzniid, '-').concat(Object(Lt.e)()),
                                            amznbid: Ft.n.amznbid,
                                            amznp: Ft.n.amznp,
                                            amznsz: o,
                                            amzniid_sp: ''.concat(Ft.n.amzniid, '-').concat(Object(Lt.e)()),
                                            amznbid_sp: ''.concat(Ft.n.amznbid, 'SP'),
                                            amznp_sp: ''.concat(Ft.n.amznp, 'SP'),
                                            amznsz_sp: G(t.sizes),
                                            amzndeals: [r]
                                        }, ''.concat(r, 'amzniid'), i), ne(e, 'mediaType', 'd'), ne(e, 'meta', [
                                            'slotID',
                                            'mediaType',
                                            'size'
                                        ]), ne(e, 'targeting', [
                                            'amzniid',
                                            'amznbid',
                                            'amznp',
                                            'amznsz',
                                            'amzniid_sp',
                                            'amznbid_sp',
                                            'amznp_sp',
                                            'amznsz_sp',
                                            'amzndeal_sp',
                                            'amzndeals',
                                            ''.concat(r, 'amzniid')
                                        ]), e);
                                    return 'video' === t.mediaType && (c.mediaType = 'video', c.amznbid = 'v_'.concat(c.amznbid)), c;
                                }), setTimeout(function () {
                                    window.apstag.bids({
                                        slots: e,
                                        host: n,
                                        status: 'ok',
                                        cb: i
                                    });
                                }, c);
                            } catch (t) {
                                Object(Qt.b)(t, '_doMockBid', !0);
                            }
                        }
                        function K(t) {
                            try {
                                var e = xt.a.getState().AAXReqs.filter(function (e) {
                                    return e.bidReqID === t.cb;
                                })[0];
                                if (e && e.bidConfig && e.bidConfig.slots) {
                                    var n = e.bidConfig.slots.filter(Nt.d).map(function (t) {
                                            return t.slotID;
                                        }), r = Object(Lt.m)(t, 'slots') ? t.slots.map(function (t) {
                                            return t.slotID;
                                        }) : [], i = n.filter(function (t) {
                                            return !Object(Lt.j)(r, t);
                                        });
                                    xt.a.dispatch({
                                        type: 'NO_BID_ON_ADSERVER_SLOTS',
                                        slotIDs: i
                                    }), Vt.a.hasAdServerObjectLoaded() ? W() : Vt.a.isCommandQueueDefined() && Vt.a.cmdQueuePush(function () {
                                        W();
                                    });
                                }
                            } catch (e) {
                                Object(Qt.b)(e, '_determineNoBidStateForAdServerObject');
                            }
                        }
                        function J(t) {
                            return Object(Lt.j)(xt.a.getState().AAXReqs.filter(function (t) {
                                return !t.resTs;
                            }).map(function (t) {
                                return t.bidConfig.slots;
                            }).reduce(function (t, e) {
                                return t.concat(e);
                            }, []).map(Nt.c), t);
                        }
                        function Y(t) {
                            try {
                                var e = t.getTargeting('amznbid');
                                return 0 < e.length && 2 < e[0].length;
                            } catch (t) {
                                return Object(Qt.b)(t, '_isRealAmznbidTargetingSetOnSlot'), 1;
                            }
                        }
                        function W() {
                            try {
                                Vt.a.hasAdServerObjectLoaded() && '1' === Vt.a.getTargeting('amznbid')[0] && Z(), Object(Nt.b)(Vt.a).forEach(function (t) {
                                    !Object(Lt.j)(xt.a.getState().displayAdServer.noBidSlotIDs, t.slotID) || J(t.slotID) || Y(t) || '2' === t.getTargeting('amznbid')[0] || $('noBid', t);
                                });
                            } catch (t) {
                                Object(Qt.b)(t, '_applyNoBidFromAAXState');
                            }
                        }
                        function $(t, e) {
                            Ft.u.forEach(function (n) {
                                return e.setTargeting(n, Ft.t[t]);
                            });
                        }
                        function Z() {
                            Ft.u.forEach(function (t) {
                                return Vt.a.clearTargeting(t);
                            });
                        }
                        function tt(t) {
                            try {
                                var e = {
                                    _type: 'dupePixel',
                                    dd: Date.now() - t.timing.renderTime
                                };
                                Object(Ht.a)(t.bidConfig.amzniid, e);
                            } catch (t) {
                                Object(Qt.b)(t, '_sendDupeBidPixel');
                            }
                        }
                        !function () {
                            const $___old_7e9c3fba15bf1db7 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                            try {
                                if ($___old_7e9c3fba15bf1db7)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___mock_ba1c6ba55dfe66f1.localStorage));
                                return function () {
                                    if (Object(Lt.i)()) {
                                        var t = localStorage.getItem(Ft.c);
                                        if (t) {
                                            var e = JSON.parse(t);
                                            null !== e && xt.a.dispatch({
                                                type: 'SET_CFG',
                                                cfg: e
                                            });
                                        }
                                    }
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_7e9c3fba15bf1db7)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___old_7e9c3fba15bf1db7));
                            }
                        }(), Object($t.c)();
                        var et = 0, nt;
                        function rt() {
                            try {
                                if (!Object(Lt.m)(window, 'googletag') || !Object(Lt.m)(window.googletag, 'cmd'))
                                    return void (++et < 5 && setTimeout(rt, 100));
                                new Gt.a().cmdQueuePush(function () {
                                    try {
                                        window.googletag.pubads().addEventListener('slotRequested', function (t) {
                                            try {
                                                var e = t.slot;
                                                xt.a.dispatch({
                                                    type: 'LOG_GAM_EVENT',
                                                    event: ee(ee({}, new Gt.b(e).slotConfig), {}, {
                                                        ts: Date.now(),
                                                        targeting: e.getTargetingMap()
                                                    })
                                                });
                                            } catch (t) {
                                                Object(Qt.b)(t, '_initializeSlotRequestedEventListener-cmdQueue-listener');
                                            }
                                        });
                                    } catch (t) {
                                        Object(Qt.b)(t, '_initializeSlotRequestedEventListener-cmdQueue');
                                    }
                                });
                            } catch (t) {
                                Object(Qt.b)(t, '_initializeSlotRequestedEventListener');
                            }
                        }
                        function it(t) {
                            try {
                                var e = t.AAXReqs.slice(t.gamSlotRenderPixel.aaxReqOffset).reduce(function (t, e) {
                                        return t.concat(e.bidConfig.slots);
                                    }, []).map(function (t) {
                                        return ee(ee({}, t), {}, { type: 'a' });
                                    }).filter(function (t) {
                                        return 'video' !== t.mediaType;
                                    }), n = t.gamSlotFetchLog.slice(t.gamSlotRenderPixel.gamSlotFetchLogOffset).map(function (t) {
                                        return ee(ee({}, t), {}, { type: 'g' });
                                    }), r = [].concat(te(e), te(n)).reduce(function (t, e) {
                                        return void 0 === t[e.slotID] && (t[e.slotID] = {
                                            sd: e.slotID,
                                            a: { c: 0 },
                                            g: { c: 0 }
                                        }), t[e.slotID][e.type].c++, t[e.slotID][e.type].s = e.sizes, t[e.slotID][e.type].sn = e.slotName || '', t;
                                    }, {});
                                return Object.keys(r).map(function (t) {
                                    return r[t];
                                }).filter(function (t) {
                                    return 0 !== t.a.c || 0 !== t.g.c;
                                });
                            } catch (t) {
                                return Object(Qt.b)(t, 'getSlotFetchCounts'), [];
                            }
                        }
                        function ot() {
                            try {
                                var t = xt.a.getState(), e = it(t);
                                0 < Object.keys(e).length && (Object(Lt.c)(e, 5).forEach(function (e) {
                                    var n = {
                                        slots: e,
                                        pid: Kt.b,
                                        url: Object(Bt.g)(window).split('?')[0],
                                        ws: Object(Lt.h)(window),
                                        pubid: t.config.pubID,
                                        _type: 'slotRenders'
                                    };
                                    Object(Ht.b)(n);
                                }), xt.a.dispatch({
                                    type: 'UPDATE_RENDER_OFFSETS',
                                    offsets: {
                                        aaxReqOffset: t.AAXReqs.length,
                                        gamSlotFetchLogOffset: t.gamSlotFetchLog.length
                                    }
                                }));
                            } catch (e) {
                                Object(Qt.b)(e, 'sendDisplayAdServerRenderPixel');
                            }
                        }
                        function ct() {
                            setInterval(function () {
                                ot();
                            }, 5000);
                        }
                        function at() {
                            try {
                                setTimeout(function () {
                                    try {
                                        var t = ft().filter(function (t) {
                                            return !Object(Lt.m)(xt.a.getState().bsPixels, t.iid) || t.state !== xt.a.getState().bsPixels[t.iid];
                                        });
                                        t && t.length && 0 < t.length && (t.forEach(function (t) {
                                            return Object(Ht.a)(t.iid, ut(t));
                                        }), st(t));
                                        var e = {
                                            fetchStart: 'a',
                                            domainLookupStart: 'b',
                                            domainLookupEnd: 'c',
                                            connectStart: 'd',
                                            secureConnectionStart: 'e',
                                            connectEnd: 'f',
                                            requestStart: 'g',
                                            responseStart: 'h',
                                            responseEnd: 'i'
                                        };
                                        Object.keys(xt.a.getState().slotBids).forEach(function (t) {
                                            xt.a.getState().slotBids[t].forEach(function (n) {
                                                if (Object(Lt.m)(n.bidConfig, 'amzniid') && !n.pixelSent) {
                                                    var r = xt.a.getState().AAXReqs.filter(function (t) {
                                                        return t.bidReqID === n.bidReqID;
                                                    })[0];
                                                    if ('object' === re(r) && null !== r) {
                                                        var i = r.rqTs - Object(Ut.d)(), o = {
                                                                pid: Kt.b,
                                                                ns: r.bidConfig.validSlots.length,
                                                                fid: n.bidReqID,
                                                                fbrq: r.rqTs,
                                                                _type: 'latencyBd'
                                                            };
                                                        'object' === re(r.perf) && null !== r.perf && Object.keys(e).forEach(function (t) {
                                                            Object(Lt.m)(r, 'perf') && 0 !== Object(Ut.a)(r.perf, t) && (o[e[t]] = Object(Ut.a)(r.perf, t) - i);
                                                        }), o.j = r.resTs - r.rqTs, Object(Ht.a)(n.bidConfig.amzniid, o), xt.a.dispatch({
                                                            type: 'UPDATE_BID_INFO_PROP',
                                                            slotID: t,
                                                            iid: n.bidConfig.amzniid,
                                                            key: 'pixelSent',
                                                            value: !0
                                                        });
                                                    }
                                                }
                                            });
                                        }), at();
                                    } catch (t) {
                                        Object(Qt.b)(t, '_sendBidsSetOnDFPPixel-timeout');
                                    }
                                }, 5000);
                            } catch (t) {
                                Object(Qt.b)(t, '_sendBidsSetOnDFPPixel');
                            }
                        }
                        function st(t) {
                            t.forEach(function (t) {
                                return xt.a.dispatch({
                                    type: 'RECORD_BID_INFO_SENT',
                                    bidInfo: t
                                });
                            });
                        }
                        function ut(t) {
                            try {
                                var e = dt(t.fid), n = {
                                        status: t.state,
                                        pubid: xt.a.getState().config.pubID,
                                        _type: 'bidSetPixel',
                                        toa: Object(Lt.m)(e.req, 'timedOutAt') ? e.req.timedOutAt : 0,
                                        fbrq: e.req.rqTs,
                                        pto: e.req.timeout,
                                        ns: e.req.bidConfig.validSlots.length,
                                        bla: e.req.resTs - e.req.rqTs,
                                        reqindex: e.index,
                                        fid: t.fid,
                                        tbs: 0,
                                        c: 'dtb'
                                    };
                                xt.a.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION && (n.eid = xt.a.getState().experiments.chunkRequests ? 2 : 1, n.fbindex = e.fbIndex, n.fbns = xt.a.getState().bidConfigs[parseInt(t.fid.split('-')[0], 10)].slots.length);
                                var r = xt.a.getState().experiments;
                                Object(Lt.m)(r, 'shouldUseTestBidEndpoint') && (n.tbs = r.shouldUseTestBidEndpoint ? 2 : 1), t.delta && (n.delay = t.delta);
                                var i = e.req.perf;
                                return void 0 !== i && (n.ul = e.req.urlLength, n.es = Object(Ut.a)(i, 'encodedBodySize')), 0 < Object.keys(xt.a.getState().identityState).length && (n.ids = JSON.stringify(xt.a.getState().identityState)), n;
                            } catch (t) {
                                return Object(Qt.b)(t, '_mapBidInfoToPixel'), {
                                    _type: 'bidSetPixel',
                                    status: -1,
                                    pubid: '',
                                    toa: 0,
                                    fbrq: 0,
                                    pto: 0,
                                    ns: 0,
                                    bla: 0,
                                    reqindex: 0,
                                    fid: '',
                                    tbs: 0,
                                    c: 'dtb'
                                };
                            }
                        }
                        function dt(t) {
                            var e = xt.a.getState().AAXReqs.filter(function (e) {
                                    return e.bidReqID === t;
                                })[0], n = xt.a.getState().AAXReqs.indexOf(e) + 1, r = {
                                    req: e,
                                    index: n,
                                    fbIndex: n
                                };
                            return r.index = xt.a.getState().AAXReqs.indexOf(r.req) + 1, xt.a.getState().experiments.chunkRequests && (r.fbIndex = xt.a.getState().AAXReqs.filter(function (t) {
                                return -1 === t.bidReqID.indexOf('-') || '0' === t.bidReqID.split('-')[1];
                            }).map(function (t) {
                                return t.bidReqID.split('-')[0];
                            }).indexOf(t.split('-')[0]) + 1), r;
                        }
                        function ft() {
                            try {
                                var t = mt(), e = [];
                                return null === t || Object.keys(xt.a.getState().slotBids).forEach(function (n) {
                                    'video' !== xt.a.getState().slotBids[n][0].bidConfig.mediaType && xt.a.getState().slotBids[n].filter(function (t) {
                                        return Object(Lt.m)(t.bidConfig, 'amzniid');
                                    }).forEach(function (r) {
                                        if (null !== t) {
                                            var i = {
                                                    state: -1,
                                                    slotID: n,
                                                    iid: r.bidConfig.amzniid,
                                                    fid: r.bidReqID
                                                }, o = [], c = [];
                                            if (n in t && (o = t[n].fetchedAt.filter(function (t) {
                                                    return t.AAXReqInfo && t.AAXReqInfo.bidReqID === r.bidReqID;
                                                }), c = t[n].targetedAt.filter(function (t) {
                                                    return t.targeting === r.bidConfig.amzniid;
                                                })), 0 < o.length ? 0 < o.length && c.length >= o.length && o.slice(o.length - 1)[0].ts > c.slice(o.length - 1)[0].ts ? 1 === t[n].fetchWithIID.filter(function (t) {
                                                    return t === r.bidConfig.amzniid;
                                                }).length ? i.state = 1 : i.state = 4 : Object(Lt.j)(t[n].fetchWithIID, r.bidConfig.amzniid) ? i.state = 3 : i.state = 2 : i.state = 0, 1 === i.state || 2 === i.state) {
                                                var a = xt.a.getState().AAXReqs.filter(function (t) {
                                                        return t.bidReqID === r.bidReqID;
                                                    })[0].resTs, s = lt(a, t[n].fetchedAt, 2 === i.state);
                                                s && Object(Lt.m)(s, 'ts') && (i.delta = a - s.ts);
                                            }
                                            e.push(i);
                                        }
                                    });
                                }), e;
                            } catch (t) {
                                return Object(Qt.b)(t, '_getBidSetInfo'), [];
                            }
                        }
                        function lt(t, e, n) {
                            var r = e.map(function (e) {
                                var r = t - e.ts;
                                return !n && r <= 0 ? -r : n && 0 <= r ? r : null;
                            });
                            return e[bt(r)];
                        }
                        function bt(t) {
                            for (var e = -1, n = -1, r = 0; r < t.length; r++)
                                null !== t[r] && (-1 === n || t[r] < e) && (e = t[n = r]);
                            return n;
                        }
                        function pt(t, e) {
                            return xt.a.getState().AAXReqs.filter(function (t) {
                                return Object(Lt.j)(t.bidConfig.slots.map(function (t) {
                                    return t.slotID;
                                }), e);
                            })[t];
                        }
                        function mt() {
                            try {
                                if (!Vt.a.hasAdServerObjectLoaded())
                                    return null;
                                var t = xt.a.getState().gamSlotFetchLog.reduce(function (t, e) {
                                    Object(Lt.m)(t, e.slotID) || (t[e.slotID] = {
                                        fetchedAt: [],
                                        targetedAt: []
                                    });
                                    var n = t[e.slotID];
                                    return n.fetchedAt.push({
                                        ts: e.ts,
                                        AAXReqInfo: pt(n.fetchedAt.length, e.slotID)
                                    }), Object(Lt.m)(e.targeting, 'amzniid') && 0 < e.targeting.amzniid.length ? n.targetedAt.push({
                                        ts: e.ts - 1,
                                        targeting: e.targeting.amzniid[0]
                                    }) : n.targetedAt.push({
                                        ts: e.ts - 1,
                                        targeting: ''
                                    }), t;
                                }, {});
                                return Object.keys(t).forEach(function (e) {
                                    if (Object(Lt.m)(t, e)) {
                                        var n = t[e];
                                        n.fetchWithIID = n.fetchedAt.map(function (t) {
                                            var e = lt(t.ts, n.targetedAt, !0);
                                            return e ? e.targeting : 0;
                                        }), t[e] = n;
                                    }
                                }), t;
                            } catch (t) {
                                return Object(Qt.b)(t, '_getDFPSlotFetches'), null;
                            }
                        }
                        function gt() {
                            try {
                                Vt.a.hasAdServerObjectLoaded() ? $('noRequest', Vt.a) : Vt.a.isCommandQueueDefined() && Vt.a.cmdQueuePush(function () {
                                    $('noRequest', Vt.a);
                                });
                            } catch (t) {
                                Object(Qt.b)(t, '_applyNoRequestToAAXState');
                            }
                        }
                        function ht(t) {
                            try {
                                xt.a.dispatch({
                                    type: 'REQUESTED_BID_FOR_ADSERVER_SLOTS',
                                    slotIDs: t
                                }), Vt.a.isCommandQueueDefined() && Vt.a.cmdQueuePush(function () {
                                    try {
                                        var e = Object(Nt.b)(Vt.a);
                                        '0' === Vt.a.getTargeting('amznbid')[0] && Z(), S(t.filter(function (t) {
                                            return void 0 !== t;
                                        }), e.map(function (t) {
                                            return t.slotID;
                                        })) ? e.forEach(function (e) {
                                            Object(Lt.j)(t, e.slotID) && !Y(e) && $('bidInFlight', e);
                                        }) : Vt.a.cmdQueuePush(function () {
                                            try {
                                                $('bidInFlight', Vt.a);
                                            } catch (t) {
                                                Object(Qt.b)(t, '_setRequestToAAXInFlightState-cmdQueue-cmdQueue');
                                            }
                                        });
                                    } catch (e) {
                                        Object(Qt.b)(e, '_setRequestToAAXInFlightState-cmdQueue');
                                    }
                                });
                            } catch (t) {
                                Object(Qt.b)(t, '_setRequestToAAXInFlightState');
                            }
                        }
                        function yt(t) {
                            try {
                                return Object(Lt.m)(t, 'type') && !(t instanceof Document) && 'amp' === t.type;
                            } catch (t) {
                                return Object(Qt.b)(t, '_isLegacyAmpCreative'), !1;
                            }
                        }
                        function Ot(t, e) {
                            try {
                                return void 0 !== e && Object(Lt.m)(e, 'ampEnv') && e.ampEnv || yt(t);
                            } catch (t) {
                                return void Object(Qt.b)(t, '_isAmpImpression');
                            }
                        }
                        function jt(t) {
                            return t.split('x');
                        }
                        function vt(t, e, n) {
                            try {
                                Object(Ht.f)();
                            } catch (t) {
                                Object(Qt.b)(t, '_renderImp-pixels');
                            }
                            try {
                                var r = void 0 === n ? '0.0.0' : n.cv;
                                if (Ot(t, n) && Object(Bt.k)(window, !0))
                                    return yt(t) ? Object(Ht.c)('renderFootprint', 'amp') : Object(Ht.c)('renderFootprint', 'multi-amp-'.concat(r)), void q(t, n);
                                if (Object(Mt.c)(window) && void 0 !== n && Object(Lt.m)(n, 'kvMap') && Object(Lt.m)(n.kvMap, 'amznhost'))
                                    return Object(Ht.c)('renderFootprint', 'multi-sf-'.concat(r)), void q(t, n);
                                var i = !1;
                                'string' == typeof e && 0 === e.indexOf('sp|') && (e = e.substring(3), i = !0);
                                var o, c = e || t.amzniid, a = E(c, i), s = a.slotBid, u = a.dealId;
                                if (s) {
                                    if (o = u && 1 <= u.length ? jt('sp' === u ? s.bidConfig.amznsz_sp : D(c, s, u)) : jt(s.bidConfig.amznsz), 1 === arguments.length)
                                        return Object(Ht.c)('renderFootprint', 'JSONp'), void F({
                                            doc: s.doc,
                                            bidID: s.bidConfig.amzniid,
                                            sizes: o,
                                            html: t.html,
                                            inheritSize: s.inheritSize || !1
                                        });
                                    Object(Ht.c)('bidRenderState', s.bidState);
                                    var d = i ? 'sharedpmp' : 'open';
                                    void 0 !== n ? Object(Ht.c)('renderFootprint', 'multi-'.concat(d, '-').concat(r)) : Object(Ht.c)('renderFootprint', 'standard-'.concat(d, '-').concat(r)), s.bidState === Ft.b.rendered && tt(s), xt.a.dispatch({
                                        type: 'BID_STATE_CHANGE',
                                        slotID: s.slotID,
                                        _targetingSetID: s._targetingSetID,
                                        bidState: Ft.b.rendered,
                                        ts: Date.now()
                                    });
                                    var f = s.host, b = 'amznad'.concat(Math.round(1000000 * Math.random())), l = {
                                            bidID: c,
                                            doc: t,
                                            pp: St('amznbid', s, u),
                                            host: f,
                                            adID: b,
                                            sizes: o,
                                            amznp: St('amznp', s, u),
                                            crID: St('crid', s, u),
                                            fif: !1,
                                            dealId: u,
                                            isSharedPMP: i,
                                            cfe: s.cfe,
                                            inheritSize: Object(Lt.l)(n) && Object(Lt.m)(n, 'inheritSize') && !0 === n.inheritSize
                                        };
                                    '1' === s.bidConfig.fif ? (l.fif = !0, xt.a.dispatch({
                                        type: 'UPDATE_BID_INFO_PROP',
                                        slotID: s.slotID,
                                        iid: e,
                                        key: 'doc',
                                        value: t
                                    }), xt.a.dispatch({
                                        type: 'UPDATE_BID_INFO_PROP',
                                        slotID: s.slotID,
                                        iid: e,
                                        key: 'inheritSize',
                                        value: l.inheritSize
                                    }), Object(Xt.b)(B(l), function () {
                                    }, document, function () {
                                        return Object(Qt.b)(new Error('Error Loading JSONP Render Callback'), 'renderImp-fif-callback-load', !0);
                                    })) : xt.a.getState().aaxViewabilityEnabled ? wt(l, t) : U(l), Q(t, l);
                                } else
                                    Object(Qt.b)(new Error('Invalid bid ID tried to render'), '_renderImp-invalidId', !0);
                            } catch (t) {
                                Object(Qt.b)(t, '_renderImp', !0);
                            }
                        }
                        function St(t, e, n) {
                            try {
                                var r = '';
                                if (void 0 !== n && 1 <= n.length) {
                                    var i = ''.concat(t, '_sp');
                                    'sp' === n && Object(Lt.m)(e.bidConfig, i) && (r = e.bidConfig[i]);
                                } else
                                    Object(Lt.m)(e.bidConfig, t) && (r = e.bidConfig[t]);
                                return r;
                            } catch (t) {
                                return Object(Qt.b)(t, '_getProperBidInfoValue'), '';
                            }
                        }
                        function wt(t, e) {
                            try {
                                var n = e.createElement('script');
                                n.type = 'text/javascript', n.async = !0;
                                var r = {
                                        doc: e,
                                        bidID: t.bidID,
                                        states: {
                                            csmLoaded: !1,
                                            iframeLoaded: !1,
                                            shouldRunViewability: !0
                                        }
                                    }, i = M.bind(null, r);
                                Object(Xt.a)(n, function () {
                                    r.states.csmLoaded = !0, i();
                                });
                                try {
                                    n.addEventListener('error', function (t) {
                                        return Object(Ht.b)({
                                            _type: 'csm_fail',
                                            ts: Date.now(),
                                            msg: t.message
                                        });
                                    });
                                } catch (t) {
                                    Object(Qt.b)(t, '_loadViewabilityAd-csm');
                                }
                                U(t, r, i), n.src = xt.a.getState().cfg.CSM_JS, z(e, n);
                            } catch (t) {
                                Object(Qt.b)(t, '_loadViewabilityAd');
                            }
                        }
                        function _t(t) {
                            try {
                                Object(Kt.h)(t), f(t), Object(Lt.m)(t, 'slots') && (xt.a.dispatch({
                                    type: 'UPDATE_SLOT_BIDS',
                                    bids: I(t)
                                }), Object(Lt.m)(t, 'ev') && xt.a.dispatch({
                                    type: 'SET_VIEWABILITY',
                                    viewability: t.ev
                                }), Object(Lt.m)(t, 'cfn') && xt.a.dispatch({
                                    type: 'SET_CFG',
                                    cfg: { CSM_JS: '//' === t.cfn.substring(0, 2) ? t.cfn : '//c.amazon-adsystem.com/'.concat(t.cfn) }
                                })), l(t);
                            } catch (t) {
                                Object(Qt.b)(t, '_bids', !0);
                            }
                        }
                        function Et() {
                            return 'number' == typeof xt.a.getState().cfg.MAX_SLOTS_PER_REQUEST && 0 < xt.a.getState().cfg.MAX_SLOTS_PER_REQUEST;
                        }
                        function Dt(t, e) {
                            var n = !1, r = [];
                            try {
                                var i = [
                                        zt.a,
                                        $t.a
                                    ], o = [
                                        xt.a.getState().config.gdpr,
                                        null
                                    ], c = i.map(function () {
                                        return !1;
                                    });
                                i.map(function (i, a) {
                                    return i(o[a], function (i) {
                                        r[a] = i, c[a] = !0, !n && c.every(Boolean) && (n = !0, Tt(t, e, r[0], r[1]));
                                    });
                                });
                            } catch (i) {
                                Object(Qt.b)(i, '_getConfigsAndFetchBids', !0), n || (n = !0, Tt(t, e, r[0], r[1]));
                            }
                        }
                        function Tt(t, e, n, r) {
                            try {
                                Object(Wt.b)(e, [
                                    'function',
                                    'undefined'
                                ]) || Object(Qt.c)('fetchBids.callback', re(e), 'function'), 'function' != typeof e && (e = function () {
                                }), Object(Lt.l)(t) || (Object(Qt.c)('fetchBids.bidConfig', re(t), 'object'), t = {}), Object(Wt.a)(t.timeout) || ('string' == typeof t.timeout ? Object(Qt.b)({
                                    name: 'string-'.concat(t.timeout),
                                    message: 'fetchBids.bidConfig.timeout was a non-numeric string \''.concat(t.timeout, '\'')
                                }, 'TypeError-fetchBids.bidConfig.timeout', !0) : Object(Qt.c)('fetchBids.bidConfig.timeout', re(t.timeout), 'number')), Object(Lt.m)(t, 'params') && !Object(Lt.l)(t.params) ? Object(Qt.c)('fetchBids.bidConfig.params', re(t.params), 'object') : Object(Lt.m)(t, 'params') && Object(Lt.l)(t.params) && Object.keys(t.params).forEach(function (e) {
                                    return !(void 0 === t.params || 'string' != typeof t.params[e] && 'number' != typeof t.params[e] && (Object(Lt.k)(t.params[e]) ? !t.params[e].reduce(function (t, e) {
                                        return t && ('string' == typeof e || 'number' == typeof e);
                                    }, !0) && (Object(Qt.b)({
                                        name: 'non-string array item',
                                        message: '\'fetchBids.bidConfig.params.'.concat(e, ' contains a non-string item')
                                    }, 'TypeError-fetchBids.bidConfig.params.'.concat(e), !0), 1) : (Object(Qt.c)('fetchBids.bidConfig.params.'.concat(e), re(t.params[e]), 'string\' or \'array'), 1)));
                                }), Object(Lt.m)(t, 'blockedBidders') && !Object(Lt.k)(t.blockedBidders) ? Object(Qt.c)('fetchBids.bidConfig.blockedBidders', re(t.blockedBidders), 'array') : Object(Lt.m)(t, 'blockedBidders') && Object(Lt.k)(t.blockedBidders) && (t.blockedBidders.reduce(function (t, e) {
                                    return t && ('string' == typeof e || 'number' == typeof e);
                                }, !0) || Object(Qt.b)({
                                    name: 'non-string array item',
                                    message: '\'fetchBids.bidConfig.blockedBidders contains a non-string item'
                                }, 'TypeError-fetchBids.bidConfig.blockedBidders', !0)), Object(Lt.m)(t, 'blockedBidders') ? Object(Ht.c)('blockedBidders-fetchBids', 'y') : Object(Ht.c)('blockedBidders-fetchBids', 'n'), Object(Lt.m)(t, 'slots') && !Object(Lt.k)(t.slots) && Object(Qt.c)('fetchBids.bidConfig.slots', re(t.slots), 'array');
                            } catch (i) {
                                Object(Qt.b)(i, '_fetchBids-validation', !0);
                            }
                            var i = xt.a.getState().config.simplerGPT, o = ee(ee({}, t), {}, {
                                    bidReqID: ''.concat(xt.a.getState().AAXReqs.length),
                                    slots: [],
                                    validSlots: [],
                                    networkReqs: []
                                }), c = !1;
                            try {
                                !0 === i && (!Object(Lt.m)(t, 'slots') || Object(Lt.m)(t, 'slots') && Object(Lt.k)(t.slots) && 0 < t.slots.length && Object(Lt.m)(t.slots[0], 'getSlotElementId')) ? 0 === Object(Nt.b)(Vt.a).length ? (Object(Qt.b)(new Error('fetchBids was called in simplerGPT mode before any slots were defined in GPT'), '_fetchBids-simplerGpt-NoSlots', !0), c = !0, o.slots = []) : (t.slots ? (Object(Ht.c)('slots', 'gpt-provided'), o.slots = t.slots.map(function (t) {
                                    return new Gt.b(t);
                                })) : (Object(Ht.c)('slots', 'gpt-fetch'), o.slots = Object(Nt.b)(Vt.a)), o.slots = o.slots.filter(Nt.a), 0 === o.slots.length && (Object(Qt.b)(new Error('No GPT slots provided to apstag.fetchBids() had valid sizes'), '_fetchBids-simplerGpt-NoValidSizes', !0), c = !0)) : Object(Lt.m)(t, 'slots') && Object(Lt.k)(t.slots) && (i ? Object(Ht.c)('slots', 'gpt-aps') : Object(Ht.c)('slots', 'aps'), o.slots = t.slots.map(function (t) {
                                    return new Jt.a(t);
                                })), o.validSlots = o.slots.filter(function (t) {
                                    return t.isValid();
                                });
                            } catch (i) {
                                Object(Qt.b)(i, '_fetchBids-getSlots', !0);
                            }
                            var a = Object(Bt.i)(o, xt.a.getState());
                            try {
                                e = Object(Bt.b)(H(e, o), a);
                            } catch (i) {
                                Object(Qt.b)(i, '_fetchBids-wrapCallback', !0);
                            }
                            try {
                                if (0 === o.validSlots.length)
                                    return !1 === c && Object(Qt.b)(new Error('No valid slots provided to apstag.fetchBids'), '_fetchBids-noSlots', !0), void setTimeout(e.bind(null, []), 10);
                                try {
                                    var s = 1 === o.slots.length ? 'single' : 'multi', u = Date.now() - b <= Ft.p ? 'onload' : 'ondelay', d = xt.a.getState().AAXReqs.reduce(function (t, e) {
                                            return e.bidConfig.slots.forEach(function (e) {
                                                Object(Lt.j)(t, e.slotID) || t.push(e.slotID);
                                            }), t;
                                        }, []);
                                    o.slots.map(function (t) {
                                        return t.slotID;
                                    }).map(function (t) {
                                        return Object(Lt.j)(d, t);
                                    }).map(function (t) {
                                        return t ? 'refresh' : 'initial';
                                    }).filter(function (t, e, n) {
                                        return n.indexOf(t) === e;
                                    }).forEach(function (t) {
                                        return Object(Ht.c)('fetchBids', ''.concat(s, '-').concat(u, '-').concat(t));
                                    });
                                } catch (i) {
                                    Object(Qt.b)(i, '_fetchBids-feature');
                                }
                                var f;
                                if (ht(o.slots.filter(Nt.d).map(Nt.c)), xt.a.dispatch({
                                        type: 'NEW_FETCH_BID_REQUEST',
                                        fid: o.bidReqID,
                                        pto: a
                                    }), xt.a.dispatch({
                                        type: 'RECORD_ORIGINAL_BID_CONFIG',
                                        bidConfig: o
                                    }), Object(qt.d)('fake_bids'))
                                    V(o);
                                else if (Ft.i)
                                    if (xt.a.dispatch({
                                            type: 'SHOULD_CHUNK_REQUESTS',
                                            value: Object(Lt.n)(xt.a.getState().cfg.CHUNK_BID_REQUESTS_PROPORTION)
                                        }), xt.a.getState().experiments.chunkRequests && Et()) {
                                        f = It(o);
                                        for (var l = 0; l < f.length; l++)
                                            f[l].bidReqID = ''.concat(o.bidReqID, '-').concat(l);
                                        xt.a.dispatch({
                                            type: 'ADD_CHUNKED_REQUESTS',
                                            fid: o.bidReqID,
                                            numChunks: f.length
                                        }), f.forEach(function (t) {
                                            p(Object(Kt.d)(t, a, n, r), e, t.bidReqID);
                                        });
                                    } else
                                        p(Object(Kt.d)(o, a, n, r), e, o.bidReqID);
                                else
                                    Object(Xt.b)(Object(Kt.d)(o, a, n, r), e);
                            } catch (i) {
                                Object(Qt.b)(i, '_fetchBids', !0);
                            }
                        }
                        function It(t) {
                            try {
                                for (var e = Math.ceil(t.validSlots.length / xt.a.getState().cfg.MAX_SLOTS_PER_REQUEST), n = new Array(e), r = 0; r < e; r++) {
                                    var i = r * xt.a.getState().cfg.MAX_SLOTS_PER_REQUEST;
                                    n[r] = { slots: t.validSlots.slice(i, i + xt.a.getState().cfg.MAX_SLOTS_PER_REQUEST) };
                                }
                                return n.map(function (e) {
                                    return ee(ee({}, t), e);
                                });
                            } catch (e) {
                                return Object(Qt.b)(e, 'chunkConfig', !0), [];
                            }
                        }
                        function At(t) {
                            try {
                                Object(Lt.m)(xt.a.getState().config, 'adServer') ? Vt.a.isSupported ? (k(t), W()) : Object(Qt.b)(new Error('apstag.setDisplayBids called with unsupported ad server: '.concat(xt.a.getState().config.adServer)), '_setDisplayBids-invalidAdServer', !0) : Object(Qt.b)(new Error('apstag.setDisplayBids called without specifying ad server'), '_setDisplayBids-noAdServer', !0);
                            } catch (t) {
                                Object(Qt.b)(t, '_setDisplayBids', !0);
                            }
                        }
                        function Rt(t, e) {
                            try {
                                h(t), Object(Vt.b)(t.adServer), gt(), Object($t.b)();
                            } catch (t) {
                                Object(Qt.b)(t, '_init');
                            }
                            'function' == typeof e && e();
                        }
                        function Ct() {
                            var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 'display', e = xt.a.getState();
                            try {
                                switch (t) {
                                case 'display':
                                    return Object(Ht.c)('targeting', 'targetingKeys-display'), e.config.useSafeFrames ? [].concat(te(Ft.g), ['amznhost']) : Ft.g;
                                case 'video':
                                    return Object(Ht.c)('targeting', 'targetingKeys-video'), e.config.useSafeFrames ? [].concat(te(Ft.w), ['amznhost']) : Ft.w;
                                default:
                                    if (Object(Kt.g)(xt.a.getState(), Vt.a)) {
                                        if (Object(Ht.c)('targeting', 'targetingKeys-newBid'), Object(Lt.k)(xt.a.getState().targetingKeys[t]))
                                            return xt.a.getState().targetingKeys[t];
                                    } else
                                        Object(Ht.c)('targeting', 'targetingKeys-invalid');
                                    return [];
                                }
                            } catch (t) {
                                return Object(Qt.b)(t, '_targetingKeys', !0), [];
                            }
                        }
                        function kt() {
                            try {
                                return xt.a.getState().AAXReqs.reduce(function (t, e) {
                                    return e.bidConfig.slots.reduce(function (t, e) {
                                        return t[e.slotID] = e.slotName, t;
                                    }, t);
                                }, {});
                            } catch (t) {
                                return Object(Qt.b)(t, '_getSlotIdToNameMapping', !0), {};
                            }
                        }
                        function Pt(t, e) {
                            var n = e;
                            return function () {
                                return r({
                                    method: t,
                                    args: arguments
                                }), n.apply(void 0, arguments);
                            };
                        }
                        try {
                            Object(Lt.m)(window, 'apstag') && Object(Lt.m)(window.apstag, '_Q') && 0 < window.apstag._Q.length && xt.a.dispatch({
                                type: 'SET_Q',
                                Q: window.apstag._Q
                            });
                        } catch (t) {
                            Object(Qt.b)(t, 'apstag-storeQ', !0);
                        }
                        window.apstag = (nt = {
                            punt: _t,
                            init: Rt,
                            debug: qt.a,
                            _getSlotIdToNameMapping: kt,
                            targetingKeys: Ct,
                            fetchBids: Dt,
                            setDisplayBids: At,
                            renderImp: vt,
                            bids: _t,
                            deleteId: Zt.a,
                            updateId: Zt.d,
                            renewId: Zt.c,
                            dpa: Zt.a,
                            upa: Zt.d,
                            rpa: Zt.c,
                            thirdPartyData: {}
                        }, Object.keys(nt).forEach(function (t) {
                            'object' !== re(nt[t]) && (nt[t] = Pt(t, nt[t]), nt[t] = Object(Qt.d)(nt[t], t));
                        }), n ? Object(qt.b)(!0, t) : e && Object(qt.b)(!1, t), !0 === Object(qt.c)('exposeApi') && (nt._api = {
                            _getBidSetInfo: ft,
                            _applyTargetingToGPTSlot: A,
                            dispatch: xt.a.dispatch,
                            _clearTargetingFromGPTSlot: j,
                            _clearBidSetOnSlot: v,
                            _doFbSync: P,
                            _getCurrentSlotBids: w,
                            _creativeURL: B,
                            getSlotFetchCounts: it,
                            buildBidUrl: Kt.d
                        }), nt), function () {
                            try {
                                if (xt.a.dispatch({
                                        type: 'SHOULD_SAMPLE_FEATURES',
                                        value: Object(Lt.n)(xt.a.getState().cfg.FEATURE_SAMPLING_RATE)
                                    }), xt.a.dispatch({
                                        type: 'SHOULD_CF_ROUTE',
                                        value: Object(Lt.n)(xt.a.getState().cfg.CF_ROUTING_RATE)
                                    }), xt.a.getState().experiments.shouldCFRoute && xt.a.dispatch({
                                        type: 'SET_HOST',
                                        hostName: 'DEFAULT_AAX_BID_HOST',
                                        hostValue: 'c.amazon-adsystem.com'
                                    }), xt.a.dispatch({
                                        type: 'SHOULD_SAMPLE_LATENCY',
                                        value: Object(Lt.n)(xt.a.getState().cfg.LATENCY_SAMPLING_RATE)
                                    }), null !== xt.a.getState().cfg.TEST_BID_ENDPOINT) {
                                    var t = Object(Lt.n)(xt.a.getState().cfg.TEST_PATH_FREQUENCY);
                                    xt.a.dispatch({
                                        type: 'SHOULD_USE_TEST_BID_ENDPOINT',
                                        value: t
                                    }), t && null !== xt.a.getState().cfg.TEST_PATH_LATENCY_SAMPLE_RATE && xt.a.dispatch({
                                        type: 'SHOULD_SAMPLE_LATENCY',
                                        value: Object(Lt.n)(xt.a.getState().cfg.TEST_PATH_LATENCY_SAMPLE_RATE)
                                    });
                                }
                                xt.a.dispatch({
                                    type: 'SHOULD_SAMPLE_SLOT_RENDER',
                                    value: Object(Lt.n)(xt.a.getState().cfg.SLOT_RENDER_SAMPLING_RATE)
                                });
                                var e = xt.a.getState();
                                (e.experiments.shouldSampleLatency || e.displayAdServer.shouldSampleRender) && rt(), e.displayAdServer.shouldSampleRender && ct(), e.experiments.shouldSampleLatency && at();
                            } catch (t) {
                                Object(Qt.b)(t, 'apstag-sampleLatency');
                            }
                            try {
                                g();
                            } catch (t) {
                                Object(Qt.b)(t, 'apstag-doLast');
                            }
                            if (!Object(Bt.k)(window, !0))
                                try {
                                    var n = function (t) {
                                        t && 'object' !== re(t) || (t = 'Request Timeout or Error'), Object(Qt.b)({
                                            message: 'csm-rtb-comm-js loading failed',
                                            name: t
                                        }, '__csm-rtb-comm-js__');
                                    };
                                    Object(Xt.d)({
                                        url: xt.a.getState().cfg.CSM_RTB_COMMUNICATOR_JS,
                                        onload: function t(e) {
                                            const $___old_64bd591f2ca69780 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                                            try {
                                                if ($___old_64bd591f2ca69780)
                                                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_c4607d10b0acbf6b.XMLHttpRequest));
                                                return function () {
                                                    e.readyState === XMLHttpRequest.DONE && 200 === e.status ? eval(e.responseText) : n(JSON.stringify({
                                                        status: e.statusText,
                                                        response: e.responseXML
                                                    }));
                                                }.apply(this, arguments);
                                            } finally {
                                                if ($___old_64bd591f2ca69780)
                                                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_64bd591f2ca69780));
                                            }
                                        },
                                        onerror: n,
                                        ontimeout: n
                                    });
                                } catch (t) {
                                    Object(Qt.b)(t, '__load-csm-rtb-comm-js__');
                                }
                            Object(qt.e)();
                        }();
                    }());
                } catch (t) {
                    Object(Qt.b)(t, 'apstag');
                }
            }
        ]);
    }())
}