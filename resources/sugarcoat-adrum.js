{
    const $___mock_d59384066fb62f91 = {};
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
    })($___mock_d59384066fb62f91);
    const $___mock_c945aafe2c3604e1 = {};
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
    })($___mock_c945aafe2c3604e1);
    const $___mock_7808ab4cf8556c37 = {};
    (exports => {
        'use strict';
        const fetch = async (resource, init = null) => {
            throw new TypeError('Failed to fetch');
        };
        exports.fetch = {
            configurable: true,
            enumerable: true,
            value: fetch,
            writable: true
        };
    })($___mock_7808ab4cf8556c37);
    (function () {
        ;
        (function () {
            new function () {
                if (!window.ADRUM && !0 !== window['adrum-disable']) {
                    var k = window.ADRUM = {}, y = window.console, B = y && 'function' == typeof y.log ? y : {
                            log: function () {
                            }
                        };
                    window['adrum-start-time'] = window['adrum-start-time'] || new Date().getTime();
                    var v = this && this.Bc || function () {
                        var a = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (a, l) {
                            a.__proto__ = l;
                        } || function (a, l) {
                            for (var e in l)
                                l.hasOwnProperty(e) && (a[e] = l[e]);
                        };
                        return function (b, l) {
                            function e() {
                                this.constructor = b;
                            }
                            a(b, l);
                            b.prototype = null === l ? Object.create(l) : (e.prototype = l.prototype, new e());
                        };
                    }();
                    (function (a) {
                        (function (a) {
                            a.setUpMonitors = function () {
                                for (var a = [], b = 0; b < arguments.length; b++)
                                    a[b] = arguments[b];
                                for (b = 0; b < a.length; b++) {
                                    var c = a[b];
                                    c && c.setUp();
                                }
                            };
                        }(a.monitor || (a.monitor = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            function l(a) {
                                return b.refs.slice.apply(a, b.refs.slice.call(arguments, 1));
                            }
                            function e(a, m) {
                                return c(b.refs.setTimeout.apply) ? b.refs.setTimeout.apply(window, arguments) : b.refs.setTimeout(a, m);
                            }
                            function c(a) {
                                return 'undefined' !== typeof a && null !== a;
                            }
                            function g(a) {
                                return 'object' == typeof a && !b.isArray(a) && null !== a;
                            }
                            function f(a) {
                                return 'function' == typeof a || !1;
                            }
                            function n(a) {
                                return 'string' == typeof a;
                            }
                            function m(a) {
                                return 'number' == typeof a;
                            }
                            function q(a, c) {
                                for (var m in c) {
                                    var f = c[m];
                                    if (t(c, m)) {
                                        var n = a[m];
                                        g(f) && g(n) ? q(n, f) : b.isArray(n) && b.isArray(f) ? a[m] = n.concat(f) : a[m] = f;
                                    }
                                }
                                return a;
                            }
                            function t(a, b) {
                                return Object.prototype.hasOwnProperty.call(a, b) && c(a[b]);
                            }
                            function p(a) {
                                return n(a) ? a.replace(/^\s*/, '').replace(/\s*$/, '') : a;
                            }
                            function s() {
                                return b.refs.la && f(b.refs.la.now);
                            }
                            function r() {
                                return s() ? b.refs.round(b.refs.la.now() + w()) : new Date().getTime();
                            }
                            function w() {
                                var a = b.refs.la, a = a && a.timing && m(a.timing.navigationStart) ? a.timing.navigationStart : window['adrum-start-time'];
                                c(a) || (a = r());
                                return a;
                            }
                            function A(a, b) {
                                var c = Array.prototype[a];
                                return c ? k(c) : C(a, b);
                            }
                            function k(a) {
                                return function (c) {
                                    return a.apply(c, b.refs.slice.call(arguments, 1));
                                };
                            }
                            function C(a, b) {
                                return function (m, g) {
                                    if (!c(m))
                                        throw new TypeError(a + ' called on null or undefined');
                                    if (!f(g))
                                        throw new TypeError(g + ' is not a function');
                                    return b.apply(null, arguments);
                                };
                            }
                            function x(a, b, c) {
                                var m = Object(a), g = m.length >>> 0, f = 0;
                                if (3 > arguments.length) {
                                    for (; f < g && !(f in m);)
                                        f++;
                                    if (f >= g)
                                        throw new TypeError('Reduce of empty array with no initial value');
                                    c = m[f++];
                                }
                                for (; f < g; f++)
                                    f in m && (c = b(c, m[f], f, m));
                                return c;
                            }
                            function z(a, c, m) {
                                return b.reduce(a, function (a, b, f, g) {
                                    a[f] = c.call(m, b, f, g);
                                    return a;
                                }, Array(a.length >>> 0));
                            }
                            function D(a, c, m) {
                                return b.reduce(a, function (a, b, f, g) {
                                    c.call(m, b, f, g) && a.push(b);
                                    return a;
                                }, []);
                            }
                            function E(a, b, c) {
                                a = Object(a);
                                for (var m = a.length >>> 0, f = 0; f < m; f++)
                                    if (f in a && b.call(c, a[f], f, a))
                                        return !0;
                                return !1;
                            }
                            function F(a, c, m) {
                                return !b.some(a, function (a) {
                                    return !c.call(m, a);
                                });
                            }
                            function G(a, c, m) {
                                b.reduce(a, function (a, b, f, g) {
                                    c.call(m, b, f, g);
                                }, void 0);
                            }
                            b.refs = {
                                isArray: Array.isArray,
                                toString: Object.prototype.toString,
                                slice: Array.prototype.slice,
                                setTimeout: window.setTimeout,
                                setInterval: window.setInterval,
                                la: window.performance || window.mozPerformance || window.msPerformance || window.webkitPerformance,
                                assign: Object.assign,
                                round: Math.round
                            };
                            b.xa = l;
                            b.oSTO = e;
                            b.isCORSSupported = function () {
                                const $___old_e594a4ac06fb7293 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_f8e897b62b77471c = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                                try {
                                    if ($___old_e594a4ac06fb7293)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_d59384066fb62f91.XMLHttpRequest));
                                    if ($___old_f8e897b62b77471c)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_d59384066fb62f91.XMLHttpRequest));
                                    return function () {
                                        var a = window.JSON && f(JSON.stringify);
                                        return c(window.XMLHttpRequest) && 'withCredentials' in new XMLHttpRequest() && a;
                                    }.apply(this, arguments);
                                } finally {
                                    if ($___old_e594a4ac06fb7293)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_e594a4ac06fb7293));
                                    if ($___old_f8e897b62b77471c)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_f8e897b62b77471c));
                                }
                            };
                            b.isDefined = c;
                            b.el = function (a) {
                                return 'number' === typeof a && !window.isNaN(a);
                            };
                            b.isArray = f(b.refs.isArray) && f(b.refs.isArray.bind) ? b.refs.isArray.bind(Array) : function (a) {
                                return b.refs.toString.call(a) === b.refs.toString.call([]);
                            };
                            b.isObject = g;
                            b.isFunction = f;
                            b.isString = n;
                            b.isNumber = m;
                            b.isBoolean = function (a) {
                                return 'boolean' == typeof a;
                            };
                            b.max = function (a, b) {
                                return Math.max(isNaN(a) ? Number.NEGATIVE_INFINITY : a, isNaN(b) ? Number.NEGATIVE_INFINITY : b);
                            };
                            b.hc = e;
                            b.ro = function (a, b) {
                                e(a, b || 10000);
                            };
                            b.addEventListener = function (b, c, m, f) {
                                function g() {
                                    try {
                                        return m.apply(this, l(arguments));
                                    } catch (f) {
                                        a.exception(f, 'M1', c, b, f);
                                    }
                                }
                                void 0 === f && (f = !1);
                                a.isDebug && a.log('M0', c, b);
                                g.I = !0;
                                b.addEventListener ? b.addEventListener(c, g, f) : b.attachEvent && b.attachEvent('on' + c, g);
                            };
                            b.loadScriptAsync = function (b) {
                                var c = document.createElement('script');
                                c.type = 'text/javascript';
                                c.async = !0;
                                c.src = b;
                                var m = document.getElementsByTagName('script')[0];
                                m ? (m.parentNode.insertBefore(c, m), a.log('M2', b)) : a.log('M3', b);
                            };
                            b.mergeJSON = q;
                            b.hasOwnPropertyDefined = t;
                            b.of = function (a, c) {
                                if (b.isFunction(Object.getPrototypeOf))
                                    for (; b.isDefined(a) && !t(a, c);)
                                        a = Object.getPrototypeOf(a);
                                return a;
                            };
                            b.dn = function (a) {
                                return c(a) ? b.isArray(a) ? a : [a] : [];
                            };
                            b.wo = function (a, b) {
                                return null != a && a.slice(0, b.length) == b;
                            };
                            b.generateGUID = function (a) {
                                return c(a) && f(a.getRandomValues) && function () {
                                    function b(a) {
                                        a = a.toString(16);
                                        return '0000'.substr(a.length) + a;
                                    }
                                    var c = new Uint16Array(8);
                                    a.getRandomValues(c);
                                    return b(c[0]) + b(c[1]) + '_' + b(c[2]) + '_' + b(c[3]) + '_' + b(c[4]) + '_' + b(c[5]) + b(c[6]) + b(c[7]);
                                };
                            }(window.crypto || window.msCrypto) || function () {
                                return 'xxxxxxxx_xxxx_4xxx_yxxx_xxxxxxxxxxxx'.replace(/[xy]/g, function (a) {
                                    var b = 16 * Math.random() | 0;
                                    return ('x' == a ? b : b & 3 | 8).toString(16);
                                });
                            };
                            b.tryExtractingErrorStack = function (a) {
                                return a ? (a = a.stack) && 'string' === typeof a ? a : null : null;
                            };
                            b.trim = p;
                            b.Ql = function (a) {
                                var b = {}, c, m;
                                if (!a)
                                    return b;
                                var f = a.split('\n');
                                for (m = 0; m < f.length; m++) {
                                    var g = f[m];
                                    c = g.indexOf(':');
                                    a = p(g.substr(0, c)).toLowerCase();
                                    c = p(g.substr(c + 1));
                                    a && (b[a] = b[a] ? b[a] + (', ' + c) : c);
                                }
                                return b;
                            };
                            b.tryPeriodically = function (a, b, c, m) {
                                function f() {
                                    if (b())
                                        c && c();
                                    else {
                                        var n = a(++g);
                                        0 < n ? e(f, n) : m && m();
                                    }
                                }
                                var g = 0;
                                f();
                            };
                            b.Pe = function (a) {
                                return a.charAt(0).toUpperCase() + a.slice(1);
                            };
                            b.pg = function (a) {
                                for (var b = [], c = 1; c < arguments.length; c++)
                                    b[c - 1] = arguments[c];
                                return function () {
                                    for (var c = [], m = 0; m < arguments.length; m++)
                                        c[m] = arguments[m];
                                    return a.apply(this, b.concat(c));
                                };
                            };
                            b.Vn = s;
                            b.now = r;
                            b.ib = w;
                            b.En = x;
                            b.reduce = A('reduce', x);
                            b.Dn = z;
                            b.map = A('map', z);
                            b.Bn = D;
                            b.filter = A('filter', D);
                            b.Fn = E;
                            b.some = A('some', E);
                            b.An = F;
                            b.every = A('every', F);
                            b.Cn = G;
                            b.forEach = A('forEach', G);
                            b.Ej = function (a) {
                                return b.filter(a, c);
                            };
                            b.Jn = function (a) {
                                return [].concat.apply([], a);
                            };
                            b.Si = c(window.Reflect) && c(window.Reflect.construct) ? function (b, c, m, f) {
                                try {
                                    return null !== c ? window.Reflect.construct(c, m, f) : b;
                                } catch (g) {
                                    return a.monitor.ErrorMonitor.l(g), b;
                                }
                            } : function (b, c, m) {
                                try {
                                    return null !== c && c.apply(b, m) || b;
                                } catch (f) {
                                    return a.monitor.ErrorMonitor.l(f), b;
                                }
                            };
                            b.Bc = function () {
                                var a = Object.setPrototypeOf || function (a, b) {
                                    var c = Object.getOwnPropertyNames(b), m;
                                    for (m in c)
                                        a[m] = b[m];
                                };
                                return function (b, c) {
                                    function m() {
                                        this.constructor = b;
                                    }
                                    a(b, c);
                                    b.prototype = null === c ? Object.create(c) : (m.prototype = c.prototype, new m());
                                };
                            }();
                            b.Nj = function (a) {
                                if (!b.isString(a))
                                    return a;
                                var c = {
                                    '&': '&amp;',
                                    '<': '&lt;',
                                    '>': '&gt;',
                                    '\'': '&#39;',
                                    '"': '&quot;',
                                    '/': '&#47;'
                                };
                                return a.replace(/[&<>'"/]/g, function (a) {
                                    return c[a];
                                });
                            };
                            b.Ao = function (a) {
                                if (!b.isString(a))
                                    return a;
                                var c = {
                                    '&amp;': '&',
                                    '&#38;': '&',
                                    '&#x26;': '&',
                                    '&lt;': '<',
                                    '&#60;': '<',
                                    '&#x3c;': '<',
                                    '&gt;': '>',
                                    '&#62;': '>',
                                    '&#x3e;': '>',
                                    '&apos;': '\'',
                                    '&#39;': '\'',
                                    '&#x27;': '\'',
                                    '&quot;': '"',
                                    '&#34;': '"',
                                    '&#x22;': '"',
                                    '&sol;': '/',
                                    '&#47;': '/',
                                    '&#x2f;': '/'
                                };
                                return a.replace(/&(?:amp|#0*38|#x0*26|lt|#0*60|#x0*3c|gt|#0*62|#x0*3e|apos|#0*39|#x0*27|quot|#0*34|#x0*22|sol|#0*47|#x0*2f);/g, function (a) {
                                    a = a.replace(/0+\B/g, '');
                                    return c[a];
                                });
                            };
                            b.Aj = function (a) {
                                var b;
                                return function () {
                                    var c = this;
                                    b && clearTimeout(b);
                                    b = e(function () {
                                        a.apply(c, arguments);
                                    }, 300);
                                };
                            };
                        }(a.utils || (a.utils = {})));
                    }(k || (k = {})));
                    (function (a) {
                        var b = a.conf || (a.conf = {});
                        b.userConf = window['adrum-config'] || {};
                        b.useHTTPSAlways = !0 === b.userConf.useHTTPSAlways;
                        b.modernBrowserFeaturesAvailable = a.utils.isDefined(window.addEventListener) && a.utils.isCORSSupported() && a.utils.isDefined(Array.prototype.forEach);
                        b.spa2 = b.userConf.spa && b.userConf.spa.spa2 && (!0 === b.userConf.spa.spa2 || a.utils.isObject(b.userConf.spa.spa2));
                        b.clearResTiming = b.userConf.spa && a.utils.isObject(b.userConf.spa.spa2) && a.utils.isDefined(b.userConf.spa.spa2.clearResTiming) ? b.userConf.spa.spa2.clearResTiming : !0;
                        b.disableTextForTesting = !0 === b.userConf.disableTextForTesting;
                        b.enablePrimaryMetrics = (!a.utils.isDefined(b.userConf.enablePrimaryMetrics) || !0 === b.userConf.enablePrimaryMetrics) && b.modernBrowserFeaturesAvailable;
                        b.P = !1;
                        b.devMode = !0 === b.userConf.devMode;
                        b.isZonePromise = !0 === b.userConf.isZonePromise || !0 === b.userConf.angular;
                        b.fetch = !a.utils.isDefined(b.userConf.fetch) || !0 == b.userConf.fetch;
                        b.backTimeGap = Math.abs(b.userConf.backTimeGap) || 0;
                        b.neverSendImageBeacon = !a.utils.isDefined(b.userConf.beacon) || !a.utils.isDefined(b.userConf.beacon.neverSendImageBeacon) || !0 == b.userConf.beacon.neverSendImageBeacon;
                        b.beaconUrlHttp = a.utils.isDefined(b.userConf.beaconUrlHttp) ? b.userConf.beaconUrlHttp : 'http://col.eum-appdynamics.com';
                        b.beaconUrlHttps = a.utils.isDefined(b.userConf.beaconUrlHttps) ? b.userConf.beaconUrlHttps : 'https://col.eum-appdynamics.com';
                        b.corsEndpointPath = '/eumcollector/beacons/browser' + (b.spa2 ? '/v2' : '/v1');
                        b.imageEndpointPath = '/eumcollector/adrum.gif?';
                        b.appKey = b.userConf.appKey || window['adrum-app-key'] || 'APP_KEY_NOT_SET';
                        a = b.useHTTPSAlways || 'https:' === document.location.protocol;
                        var l = b.userConf.adrumExtUrlHttp || 'http://cdn.appdynamics.com', e = b.userConf.adrumExtUrlHttps || 'https://cdn.appdynamics.com';
                        b.adrumExtUrl = (a ? e : l) + '/adrum-ext.c627835be90484dccd75d79ec6895baa.js';
                        b.adrumXdUrl = e + '/adrum-xd.c627835be90484dccd75d79ec6895baa.html';
                        b.agentVer = '20.3.0.3009';
                        b.sendImageBeacon = b.userConf.beacon && b.userConf.beacon.sendImageBeacon || window['adrum-send-image-beacon'];
                        window['adrum-geo-resolver-url'] ? (l = window['adrum-geo-resolver-url'], e = l.indexOf('://'), -1 != e && (l = l.substring(e + 3)), l = (a ? 'https://' : 'http://') + l) : (l = b.userConf.geoResolverUrlHttps || '', e = b.userConf.geoResolverUrlHttp || '', l = a ? l : e);
                        b.geoResolverUrl = l;
                        b.useStrictDomainCookies = !0 === window['adrum-use-strict-domain-cookies'];
                        b.ni = 10;
                        b.hi = 10;
                    }(k || (k = {})));
                    (function (a) {
                        function b(b, c, m, f) {
                            b = a.conf.beaconUrlHttps + '/eumcollector/error.gif?version=1&appKey=' + m + '&msg=' + encodeURIComponent(b.substring(0, 500));
                            f && (b += '&stack=', b += encodeURIComponent(f.substring(0, 1500 - b.length)));
                            return b;
                        }
                        function l(c, m) {
                            2 <= r || (document.createElement('img').src = b(c, 0, a.conf.appKey, m), r++);
                        }
                        function e(a) {
                            return 0 <= a.location.search.indexOf('ADRUM_debug=true') || 0 <= a.cookie.search(/(^|;)\s*ADRUM_debug=true/);
                        }
                        function c(b) {
                            a.isDebug && p.push(n(arguments).join(' | '));
                        }
                        function g(a) {
                            s.push(n(arguments).join(' | '));
                        }
                        function f(a) {
                            var b = n(arguments).join(' | ');
                            c(b);
                            l(b, null);
                        }
                        var n = a.utils.xa, m = a.utils.reduce, q = a.utils.isDefined;
                        a.iDR = e;
                        var t;
                        (function (a) {
                            a[a.API_ERROR = 0] = 'API_ERROR';
                            a[a.API_ERROR_INVALID_PARAMS = 1] = 'API_ERROR_INVALID_PARAMS';
                            a[a.API_ERROR_INVALID_CONFIG = 2] = 'API_ERROR_INVALID_CONFIG';
                            a[a.API_WARNING = 3] = 'API_WARNING';
                            a[a.API_WARNING_INEFFECTIVE_CONFIG = 4] = 'API_WARNING_INEFFECTIVE_CONFIG';
                        }(t = a.W || (a.W = {})));
                        a.Cb = [
                            'JS Agent API Error:',
                            'JS Agent API Error Invalid Parameters: ',
                            'JS Agent API Error Invalid Configs: ',
                            'JS Agent API Warning:',
                            'JS Agent API Warning Ineffective Config:'
                        ];
                        a.Xa = ' a constructor is called as a function. Don\'t forget keyword new.';
                        a.isDebug = e(document);
                        a.apiMessageConsoleOut = q(a.conf.userConf) && q(a.conf.userConf.log) && !0 === a.conf.userConf.log.apiMessageConsoleOut ? !0 : !1;
                        var p = [], s = [];
                        a.logMessages = p;
                        a.apiMessages = s;
                        a.log = c;
                        a.io = g;
                        a.error = f;
                        a.reportAPIMessage = function (b, c, m, f) {
                            var n = a.Wl.apply(this, arguments);
                            g(n);
                            a.apiMessageConsoleOut && B.log(n);
                            return n;
                        };
                        a.exception = function () {
                            if (!(1 > arguments.length)) {
                                var b = n(arguments), c = a.utils.tryExtractingErrorStack(b[0]), b = b.slice(1);
                                a.utils.isArray(b) && (b = b.slice(0, 20));
                                b = b.join(' | ');
                                a.log(b);
                                l(b, c);
                            }
                        };
                        a.assert = function (a) {
                            for (var b = 1; b < arguments.length; b++);
                            var c = n(arguments);
                            a || (b = c[1], (c = c.slice(2)) && 0 < c.length ? f('M4', b, c) : f('M5', b));
                        };
                        a.dumpLog = a.isDebug ? function () {
                            return m(p, function (a, b) {
                                return a + b.replace(/\<br\/\>/g, '\n\t') + '\n';
                            }, '');
                        } : function () {
                        };
                        a.ef = 0;
                        a.ff = 0;
                        a.Q = a.isDebug && a.utils.refs.la ? function () {
                            a.ef = a.utils.refs.la.now();
                        } : function () {
                        };
                        a.R = a.isDebug && a.utils.refs.la ? function () {
                            a.ff += a.utils.refs.la.now() - a.ef;
                        } : function () {
                        };
                        a.Wl = function (b, c, m, f) {
                            var g = '', g = '', n = new window.Error().stack, e, n = a.utils.isString(n) ? n.substring(5) : n + '';
                            q(e) || (e = a.utils.map(f, function (a) {
                                return null === a ? 'null' : void 0 == a ? 'undefined' : '' === a ? '\'\'' : a;
                            }));
                            switch (b) {
                            case t.ma:
                            case t.nn:
                                g = a.Cb[b];
                                g = q(m) ? '' + g + c + '\n in ' + m + '(' + e.join(', ') + ')\n' + n : '' + g + c + '\n' + n;
                                break;
                            case t.Wd:
                                g = a.Cb[b];
                                g = '' + g + c + '\nin ' + m + '(' + e.join(', ') + ')\n' + n;
                                break;
                            case t.mn:
                            case t.Ah:
                                g = a.Cb[b];
                                g = '' + g + c + ', but ' + m + '=' + e.join(', ') + '\n' + n;
                                break;
                            default:
                                g = a.Cb[t.ma], g = '' + g + c + '\nin ' + m + '(' + e.join(', ') + ')\n' + n;
                            }
                            return g;
                        };
                        a.cIEBU = b;
                        var r = 0;
                        c('M6');
                    }(k || (k = {})));
                    (function (a) {
                        var b = function () {
                                function a(b) {
                                    this.max = b;
                                    this.Kc = 0;
                                }
                                a.prototype.Hk = function () {
                                    this.Vb() || this.Kc++;
                                };
                                a.prototype.Vb = function () {
                                    return this.Kc >= this.max;
                                };
                                a.prototype.reset = function () {
                                    this.Kc = 0;
                                };
                                return a;
                            }(), l = function () {
                                function e() {
                                    this.Lb = [];
                                    this.Ed = new b(e.yi);
                                    this.ld = new b(e.ri);
                                }
                                e.prototype.submit = function (b) {
                                    this.push(b) && a.initEXTDone && this.processQ();
                                };
                                e.prototype.processQ = function () {
                                    for (var b = this.Hj(), g = 0; g < b.length; g++) {
                                        var f = b[g];
                                        'function' === typeof a.commands[f[0]] ? (a.isDebug && a.log('M7', f[0], f.slice(1).join(', ')), a.commands[f[0]].apply(a, f.slice(1))) : a.error('M8', f[0]);
                                    }
                                };
                                e.prototype.ll = function (a) {
                                    return 'reportXhr' === a || 'reportPageError' === a;
                                };
                                e.prototype.push = function (b) {
                                    var g = b[0], f = this.ll(g), n = f ? this.Ed : this.ld;
                                    if (n.Vb())
                                        return a.log('M9', f ? 'spontaneous' : 'non spontaneous', g), !1;
                                    this.Lb.push(b);
                                    n.Hk();
                                    return !0;
                                };
                                e.prototype.Hj = function () {
                                    var a = this.Lb;
                                    this.reset();
                                    return a;
                                };
                                e.prototype.size = function () {
                                    return this.Lb.length;
                                };
                                e.prototype.reset = function () {
                                    this.Lb = [];
                                    this.Ed.reset();
                                    this.ld.reset();
                                };
                                e.prototype.isSpontaneousQueueDead = function () {
                                    return this.Ed.Vb();
                                };
                                e.prototype.isNonSpontaneousQueueDead = function () {
                                    return this.ld.Vb();
                                };
                                return e;
                            }();
                        l.yi = 100;
                        l.ri = 100;
                        a.CommandExecutor = l;
                    }(k || (k = {})));
                    (function (a) {
                        a.q = new a.CommandExecutor();
                        a.command = function (b) {
                            for (var l = 1; l < arguments.length; l++);
                            a.isDebug && a.log('M10', b, Array.prototype.slice.call(arguments).slice(1).join(', '));
                            a.q.submit(Array.prototype.slice.call(arguments));
                        };
                    }(k || (k = {})));
                    (function (a) {
                        (function (a) {
                            var l = function () {
                                function a() {
                                    this.status = {};
                                }
                                a.prototype.setUp = function () {
                                };
                                a.prototype.set = function (a, b) {
                                    this.status[a] = b;
                                };
                                return a;
                            }();
                            a.xc = l;
                        }(a.monitor || (a.monitor = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = a.utils.xa, e = a.utils.isDefined;
                            window.ADRUM.aop = b;
                            b.support = function (a) {
                                return !a || 'apply' in a;
                            };
                            b.around = function (c, g, f, n, m) {
                                a.assert(b.support(c), 'M11');
                                c = c || function () {
                                };
                                return function () {
                                    const $___old_c821ddad9c2bbbb7 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                                    try {
                                        if ($___old_c821ddad9c2bbbb7)
                                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_c945aafe2c3604e1.localStorage));
                                        return function () {
                                            if (a.isDebug)
                                                try {
                                                    a.log('M12', n, l(arguments).join(', '));
                                                } catch (b) {
                                                    a.log('M13', e(b.stack) || b.toString());
                                                }
                                            var t = l(arguments), p;
                                            try {
                                                g && (p = g.apply(this, t));
                                            } catch (s) {
                                                a.exception(s, 'M14', n, s);
                                            }
                                            a.assert(!p || a.utils.isArray(p));
                                            var r = void 0;
                                            try {
                                                r = c.apply(this, p || t);
                                            } catch (w) {
                                                throw a.log(w, 'M15', n, w), m ? m(w) : a.monitor.ErrorMonitor.l(w), w;
                                            } finally {
                                                try {
                                                    f && (e(r) && (t[t.length] = { og: r }), f.apply(this, t));
                                                } catch (A) {
                                                    a.exception(A, 'M16', n, A);
                                                }
                                            }
                                            return r;
                                        }.apply(this, arguments);
                                    } finally {
                                        if ($___old_c821ddad9c2bbbb7)
                                            ({}.constructor.defineProperty(window, 'localStorage', $___old_c821ddad9c2bbbb7));
                                    }
                                };
                            };
                            b.vf = function (a) {
                                a = a[a.length - 1];
                                var b;
                                e(a) && e(a.og) && (b = a.og);
                                return b;
                            };
                            b.before = function (a, g, f) {
                                return b.around(a, g, null, f);
                            };
                            b.after = function (a, g, f) {
                                return b.around(a, null, g, f);
                            };
                            b.forceWrap = function (b) {
                                var g = b.customDescriptorConfig || {}, f = null, n = b.parentObject, m = b.property, q = b.setUpFunc, t = b.wrapNewFunctionAgain || !1, p = b.propertyWrappedFunctionName;
                                if (n && m) {
                                    f = Object.getOwnPropertyDescriptor(n, m);
                                    if (!f || f.configurable) {
                                        f ? (delete f.writable, delete f.value) : f = {
                                            configurable: !0,
                                            enumerable: !0
                                        };
                                        var l = f.set, r = f.get;
                                        f.set = g.set || function (m) {
                                            !0 !== m.usedByAgent && (e(l) && l(arguments), e(b.Ma) && !t || !a.utils.isFunction(q) || q(m));
                                        };
                                        f.get = g.get || function () {
                                            var m = r ? r() : a.utils.refs[p];
                                            e(b.Ma) && (m = b.Ma);
                                            return m;
                                        };
                                    } else
                                        a.log('M17', p);
                                    Object.defineProperty(n, m, f);
                                } else
                                    a.error('M18');
                            };
                        }(a.aop || (a.aop = {})));
                    }(k || (k = {})));
                    (function (a) {
                        a = a.EventType || (a.EventType = {});
                        a[a.PageView = 0] = 'PageView';
                        a[a.Ajax = 2] = 'Ajax';
                        a[a.VPageView = 3] = 'VPageView';
                        a[a.Error = 4] = 'Error';
                        a[a.IFRAME = 1] = 'IFRAME';
                        a[a.ABSTRACT = 100] = 'ABSTRACT';
                        a[a.ADRUM_XHR = 101] = 'ADRUM_XHR';
                        a[a.NG_VIRTUAL_PAGE = 102] = 'NG_VIRTUAL_PAGE';
                    }(k || (k = {})));
                    (function (a) {
                        var b = a.events || (a.events = {});
                        b.U = {};
                        b.U[a.EventType.ABSTRACT] = {
                            guid: 'string',
                            url: 'string',
                            parentGUID: 'string',
                            parentUrl: 'string',
                            parentType: 'number',
                            timestamp: 'number'
                        };
                        b.U[a.EventType.VPageView] = { resTiming: 'object' };
                        b.U[a.EventType.NG_VIRTUAL_PAGE] = { digestCount: 'number' };
                        b.U[a.EventType.Ajax] = {
                            method: 'string',
                            parentPhase: 'string',
                            parentPhaseId: 'number',
                            error: 'object',
                            parameter: 'object',
                            xhrStatus: 'number',
                            dataObject: 'object'
                        };
                        b.U[a.EventType.ADRUM_XHR] = { allResponseHeaders: 'string' };
                        b.U[a.EventType.Error] = {
                            msg: 'string',
                            line: 'number',
                            stack: 'string'
                        };
                    }(k || (k = {})));
                    (function (a) {
                        var b = function () {
                            function a() {
                                this.ga = {};
                            }
                            a.prototype.mark = function (a, b) {
                                l.mark.apply(this, arguments);
                            };
                            a.prototype.getTiming = function (a) {
                                return (a = this.getEntryByName(a)) && a.startTime;
                            };
                            a.prototype.measure = function (a, b, f) {
                                l.measure.apply(this, arguments);
                            };
                            a.prototype.getEntryByName = function (a) {
                                return l.getEntryByName.call(this, a);
                            };
                            return a;
                        }();
                        b.Jc = function (a) {
                            return l.Jc(a);
                        };
                        a.PerformanceTracker = b;
                        var l;
                        (function (b) {
                            var c = a.utils.hasOwnPropertyDefined, g = a.utils.ib(), f = a.utils.now;
                            b.mark = function (b, c) {
                                this.ga[b] = {
                                    name: b,
                                    entryType: 'mark',
                                    startTime: a.utils.isDefined(c) ? c : f(),
                                    duration: 0
                                };
                            };
                            b.measure = function (b, m, e) {
                                c(this.ga, m) && c(this.ga, e) ? this.ga[b] = {
                                    name: b,
                                    entryType: 'measure',
                                    startTime: m ? this.ga[m].startTime : g,
                                    duration: (e ? this.ga[e].startTime : f()) - (m ? this.ga[m].startTime : g)
                                } : a.error('M19', c(this.ga, m) ? e : m);
                            };
                            b.getEntryByName = function (a) {
                                return this.ga[a] || null;
                            };
                            b.Jc = function (a) {
                                return a + g;
                            };
                        }(l || (l = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            function l(b, c) {
                                b = b || {};
                                for (var n in b)
                                    c[n] = function () {
                                        var c = n, f = b[n];
                                        return function (b) {
                                            var g = '_' + c, n = this[g];
                                            if (a.utils.isDefined(b))
                                                if (typeof b === f)
                                                    this[g] = b;
                                                else
                                                    throw g = 'wrong type of ' + c + ' value, ' + typeof b + ' passed in but should be a ' + f + '.', a.reportAPIMessage(a.W.Wd, g, 'ADRUM.report', Array.prototype.slice.call(arguments)), TypeError(g);
                                            return n;
                                        };
                                    }();
                            }
                            function e(a) {
                                var b = {}, c;
                                for (c in a) {
                                    var m = a[c];
                                    b[m.start] = !0;
                                    b[m.end] = !0;
                                }
                                return b;
                            }
                            var c = function () {
                                function b(c) {
                                    this.perf = new a.PerformanceTracker();
                                    'Object' === this.constructor.name && a.reportAPIMessage(a.W.ma, a.Xa);
                                    this.timestamp(a.utils.now());
                                    this.guid(a.utils.generateGUID());
                                    this.url(document.URL);
                                    this.lc(c);
                                }
                                b.prototype.type = function () {
                                    return a.EventType.ABSTRACT;
                                };
                                b.prototype.lc = function (b) {
                                    if (a.utils.isObject(b))
                                        for (var c in b) {
                                            var m = this[c] || this['mark' + a.utils.Pe(c)];
                                            m && a.utils.isFunction(m) && m.call(this, b[c]);
                                        }
                                };
                                b.Ec = function (a, b, c) {
                                    return {
                                        guid: function () {
                                            return a;
                                        },
                                        url: function () {
                                            return b;
                                        },
                                        type: function () {
                                            return c;
                                        }
                                    };
                                };
                                b.prototype.pk = function () {
                                    return b.Ec(this.parentGUID(), this.parentUrl(), this.parentType());
                                };
                                b.prototype.parent = function (b) {
                                    var c = this.pk();
                                    a.utils.isDefined(b) && (a.utils.isFunction(b.guid) && a.utils.isFunction(b.url) && a.utils.isFunction(b.type) ? (this.parentGUID(b.guid()), this.parentUrl(b.url()), this.parentType(b.type())) : a.reportAPIMessage(a.W.ma, 'object is not a valid EventIdentifier', 'EventTracker.parent', Array.prototype.slice.call(arguments)));
                                    return c;
                                };
                                return b;
                            }();
                            b.EventTracker = c;
                            b.Na = l;
                            b.Je = function (b, c) {
                                b = b || {};
                                var n = e(b), m;
                                for (m in n)
                                    n = a.utils.Pe(m), c['mark' + n] = a.utils.pg(function (a, b) {
                                        this.perf.mark(a, b);
                                    }, m), c['get' + n] = a.utils.pg(function (a) {
                                        return this.perf.getTiming(a);
                                    }, m);
                            };
                            l(b.U[a.EventType.ABSTRACT], c.prototype);
                        }(a.events || (a.events = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = function (b) {
                                function c(g) {
                                    g = b.call(this, g) || this;
                                    g.constructor != c && a.reportAPIMessage(a.W.ma, a.Xa, 'ADRUM.events.Error', []);
                                    return g;
                                }
                                v(c, b);
                                c.prototype.type = function () {
                                    return a.EventType.Error;
                                };
                                return c;
                            }(b.EventTracker);
                            b.Error = l;
                            b.Na(b.U[a.EventType.Error], l.prototype);
                        }(a.events || (a.events = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = function (b) {
                                function c() {
                                    var g = null !== b && b.apply(this, arguments) || this;
                                    g.ul = function (b) {
                                        var n = b.message, m = b.filename, e = b.lineno, t = b.colno;
                                        b = b.error;
                                        a.log('M20');
                                        if (a.utils.isDefined(b) || c.Yb)
                                            a.log('M21'), c.Yb = !0, g.Ia(n, m, e, t, b);
                                    };
                                    return g;
                                }
                                v(c, b);
                                c.l = function (b) {
                                    a.monitor.ha.Ia(b.message || b.description, b.fileName || b.filename, b.lineNumber, b.columnNumber, b);
                                };
                                c.prototype.setUp = function () {
                                    var c = this;
                                    b.prototype.setUp.call(this);
                                    a.utils.addEventListener(window, 'error', this.ul, !0);
                                    a.listenForErrors = function () {
                                        c.Xf();
                                    };
                                    this.Xf();
                                };
                                c.prototype.gm = function () {
                                    c.Rc = 0;
                                };
                                c.prototype.Ia = function (b, f, n, m, e) {
                                    c.Rc >= a.conf.ni ? a.log('M22') : (m = a.utils.tryExtractingErrorStack(e), a.command('reportPageError', new a.events.Error(a.utils.mergeJSON({
                                        msg: b + '',
                                        url: a.utils.isString(f) ? f : void 0,
                                        line: a.utils.isNumber(n) ? n : void 0,
                                        stack: m
                                    }, this.status))), c.Rc++, c.hadErrors = !0);
                                };
                                c.prototype.Xf = function () {
                                    var b = this;
                                    c.Yb = !1;
                                    a.aop.support(window.onerror) ? (window.onerror = a.aop.around(window.onerror, function (f, n, m, e, t) {
                                        c.Yb ? a.log('M23') : c.hd ? a.log('M25') : (a.log('M24'), b.Ia(f, n, m, e, t), c.hd = !0);
                                    }, function () {
                                        a.log('M26');
                                        c.hd = !1;
                                    }, 'onerror'), a.log('M27')) : a.log('M28');
                                };
                                return c;
                            }(b.xc);
                            l.hd = !1;
                            l.Rc = 0;
                            l.hadErrors = !1;
                            l.Yb = !1;
                            b.ErrorMonitor = l;
                            b.ha = new b.ErrorMonitor();
                        }(a.monitor || (a.monitor = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = a.log, e = a.aop.after, c = function (c) {
                                    function f() {
                                        return null !== c && c.apply(this, arguments) || this;
                                    }
                                    v(f, c);
                                    f.prototype.setUp = function () {
                                        a.utils.map([
                                            'error',
                                            'exception'
                                        ], function (b) {
                                            var c = B[b];
                                            a.utils.isFunction(c) && a.aop.support(c) ? (l('M29', b), B[b] = e(c, function (a) {
                                                l('M30', b, a);
                                                f.Vi(a);
                                            })) : l('M31', b);
                                        });
                                        b.ha.Ia = e(b.ha.Ia, function () {
                                            0 < f.pa.length ? (l('M32'), f.pa = []) : l('M33');
                                        });
                                    };
                                    f.Vi = function (b) {
                                        f.pa.length >= a.conf.hi ? l('M34') : a.utils.isString(b) ? (l('M35', b), f.pa.push(b), a.utils.oSTO(f.Dg)) : a.utils.isObject(b) ? (b = a.utils.toJSONString(b), null !== b ? (l('M36', b), f.pa.push(b), a.utils.oSTO(f.Dg)) : a.error('M37')) : l('M38', typeof b);
                                    };
                                    f.Dg = function () {
                                        0 < f.pa.length ? (l('M39'), b.ha.Ia(f.pa.join('\n')), f.pa = []) : l('M40');
                                    };
                                    return f;
                                }(b.xc);
                            c.pa = [];
                            b.pn = c;
                            b.vj = new c();
                        }(a.monitor || (a.monitor = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = function () {
                                function b() {
                                }
                                b.setUp = function () {
                                    b.perf = a.utils.refs.la;
                                    a.utils.isObject(b.perf) && a.utils.isObject(b.perf.timing) || (b.perf = void 0);
                                };
                                return b;
                            }();
                            l.perf = null;
                            b.PerformanceWrapper = l;
                        }(a.monitor || (a.monitor = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = function () {
                                function e() {
                                    this.navTiming = null;
                                }
                                e.prototype.Xe = function () {
                                    var c = b.PerformanceWrapper.perf;
                                    if (c = c && c.timing)
                                        if (c.navigationStart && c.navigationStart <= c.loadEventEnd) {
                                            var g = {}, f;
                                            for (f in c) {
                                                var n = c[f];
                                                'number' === typeof n && (g[f] = n);
                                            }
                                            this.navTiming = g;
                                        } else
                                            a.log('M42');
                                    else
                                        a.log('M41');
                                };
                                e.prototype.setUp = function () {
                                    b.PerformanceWrapper.setUp();
                                };
                                return e;
                            }();
                            b.NavTimingMonitor = l;
                            b.navMonitor = new b.NavTimingMonitor();
                        }(a.monitor || (a.monitor = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = function () {
                                function e() {
                                    this.sd = null;
                                    b.PerformanceWrapper.setUp();
                                    this.resourceBuffer = [];
                                    this.basePageResourceBuffer = [];
                                    this.qe = 500;
                                    this.Ac = 150;
                                    this.Gi = 3000;
                                    this.setResourceTimingBufferSize();
                                    this.tm();
                                }
                                e.prototype.setUp = function () {
                                    b.PerformanceWrapper.setUp();
                                    a.utils.isDefined(b.PerformanceWrapper.perf) && a.utils.isFunction(b.PerformanceWrapper.perf.getEntriesByType) ? a.utils.isFunction(b.PerformanceWrapper.perf.addEventListener) ? b.PerformanceWrapper.perf.addEventListener('resourcetimingbufferfull', this.gb.bind(this)) : 'onresourcetimingbufferfull' in b.PerformanceWrapper.perf ? a.utils.isFunction(b.PerformanceWrapper.perf.rd) ? b.PerformanceWrapper.perf.rd = a.aop.around(b.PerformanceWrapper.perf.rd, this.gb.bind(this)) : b.PerformanceWrapper.perf.rd = this.gb.bind(this) : a.utils.refs.setInterval.call(window, this.jm.bind(this), this.Gi) : a.log('M43');
                                    this.xm();
                                    this.km();
                                };
                                e.prototype.xm = function () {
                                    var c = a.conf.userConf && a.conf.userConf.resTiming && a.conf.userConf.resTiming.bufSize;
                                    a.utils.isDefined(b.PerformanceWrapper.perf) && a.utils.isFunction(b.PerformanceWrapper.perf.setResourceTimingBufferSize) && a.utils.isNumber(c) && 0 < c && (this.Ac = c);
                                };
                                e.prototype.km = function () {
                                    var c = b.PerformanceWrapper.perf;
                                    a.utils.isDefined(c) && (a.utils.isFunction(c.setResourceTimingBufferSize) && (c.setResourceTimingBufferSize = a.aop.around(c.setResourceTimingBufferSize, function () {
                                        a.utils.isDefined(arguments) && a.utils.isDefined(arguments[0]) && (this.Ac = arguments[0]);
                                    }.bind(this))), a.utils.isFunction(c.clearResourceTimings) && (c.clearResourceTimings = a.aop.around(c.clearResourceTimings, function () {
                                        this.gb();
                                    }.bind(this))));
                                };
                                e.prototype.We = function () {
                                    this.basePageResourceBuffer = this.nf();
                                };
                                e.prototype.gb = function () {
                                    this.resourceBuffer = this.nf();
                                };
                                e.prototype.jm = function () {
                                    this.kb().length >= this.Ac && this.gb();
                                };
                                e.prototype.kb = function () {
                                    var c = b.PerformanceWrapper.perf, g = [];
                                    c && c.getEntriesByType && (c = c.getEntriesByType('resource')) && c.length && 0 < c.length && c.unshift && (g = c);
                                    0 == g.length && a.log('M44');
                                    return g;
                                };
                                e.prototype.tk = function (b, g) {
                                    return a.utils.filter(this.resourceBuffer, function (a) {
                                        return b + a.startTime >= g;
                                    });
                                };
                                e.prototype.uk = function (a, b) {
                                    this.resourceBuffer = this.resourceBuffer.concat(this.kb());
                                    var f = this.tk(a, b);
                                    this.clearResourceTimings();
                                    this.resourceBuffer = [];
                                    return f;
                                };
                                e.prototype.tm = function () {
                                    var c = b.PerformanceWrapper.perf;
                                    a.utils.isDefined(c) && a.utils.isFunction(c.clearResourceTimings) && (this.sd = c.clearResourceTimings.bind(c));
                                };
                                e.prototype.setResourceTimingBufferSize = function () {
                                    var c = b.PerformanceWrapper.perf, g = a.conf.userConf && a.conf.userConf.resTiming && a.conf.userConf.resTiming.bufSize;
                                    !a.utils.isNumber(g) || 0 >= g ? a.log('M45') : c && a.utils.isFunction(c.setResourceTimingBufferSize) ? c.setResourceTimingBufferSize(g) : a.log('M46');
                                };
                                e.prototype.nf = function () {
                                    var b = this.kb();
                                    if (this.resourceBuffer.length + b.length > this.qe)
                                        return a.log('M47'), this.resourceBuffer.concat(b.slice(0, this.qe - this.resourceBuffer.length));
                                    this.clearResourceTimings();
                                    return this.resourceBuffer.concat(b);
                                };
                                e.prototype.clearResourceTimings = function () {
                                    a.conf.clearResTiming && a.utils.isFunction(this.sd) && this.sd();
                                };
                                return e;
                            }();
                            b.ResourceMonitor = l;
                            b.resourceMonitor = new b.ResourceMonitor();
                        }(a.monitor || (a.monitor = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (a) {
                            function l(a) {
                                return a.nodeName.toLowerCase();
                            }
                            function e(a) {
                                return 'video' == l(a);
                            }
                            function c(a) {
                                return 'image' == l(a);
                            }
                            function g(a) {
                                return 'svg' == l(a);
                            }
                            function f(a) {
                                return 0 === a.lastIndexOf('video/', 0) || 0 === a.lastIndexOf('image/', 0) || 0 === a.lastIndexOf('font/', 0) || 0 === a.lastIndexOf('model/', 0) || 0 === a.lastIndexOf('text/', 0);
                            }
                            function n(a) {
                                return 'embed' == l(a) && f(a.type);
                            }
                            function m(a) {
                                return 'object' == l(a) && f(a.type);
                            }
                            function q(a) {
                                return 'img' == l(a);
                            }
                            a.lk = l;
                            a.Tf = e;
                            a.ao = c;
                            a.$n = g;
                            a.Lf = function (a) {
                                return 'canvas' == l(a);
                            };
                            a.Rf = function (a) {
                                return a instanceof Text;
                            };
                            a.Yn = f;
                            a.pf = function (a) {
                                return (a.right - a.left) * (a.bottom - a.top);
                            };
                            a.Xn = n;
                            a.Zn = m;
                            a.Wn = q;
                            a.ob = function (a) {
                                return q(a) || m(a) || n(a) || e(a) || c(a) || g(a);
                            };
                            a.pb = function (a) {
                                a = window.getComputedStyle(a);
                                return 'none' !== a.getPropertyValue('display') && 'hidden' !== a.getPropertyValue('visibility');
                            };
                            a.Rb = function (a) {
                                var b = '';
                                a instanceof HTMLImageElement ? b = a.currentSrc || a.src : a instanceof HTMLEmbedElement ? b = a.src : a instanceof HTMLObjectElement ? b = a.data : 'undefined' != typeof HTMLVideoElement && a instanceof HTMLVideoElement ? b = a.currentSrc || a.src : a instanceof SVGImageElement && (b = a.href.baseVal);
                                return b;
                            };
                            a.Rn = function (a) {
                                var b = '';
                                a instanceof HTMLImageElement ? b = 'img' : a instanceof HTMLEmbedElement ? b = 'embed' : a instanceof HTMLObjectElement ? b = 'object' : 'undefined' != typeof HTMLVideoElement && a instanceof HTMLVideoElement ? b = 'video' : a instanceof SVGImageElement && (b = 'image');
                                return b;
                            };
                            a.Xc = function (c) {
                                return a.isDefined(c.attributes) ? c.attributes.getNamedItem('src') || c.attributes.getNamedItem('href') : void 0;
                            };
                        }(a.utils || (a.utils = {})));
                    }(k || (k = {})));
                    (function (a) {
                        var b = function () {
                            function b() {
                                this.Xk = 0.2;
                                this.Va = 0;
                                this.mb = !1;
                                this.Aa = a.conf.spa2;
                                this.sc = this.tc = this.g = this.ca = this.ya = 0;
                                this.viewport = {
                                    top: 0,
                                    left: 0,
                                    bottom: this.sc,
                                    right: this.tc
                                };
                                this.Ta = 0;
                            }
                            b.prototype.setUp = function () {
                                this.S = {};
                                this.dc = {};
                                this.ca = a.utils.now();
                                this.g = 0;
                                var b = window.MutationObserver;
                                this.Ue();
                                a.utils.addEventListener(window, 'resize', a.utils.Aj(this.Ue).bind(this));
                                a.utils.isDefined(b) && (a.utils.isDefined(window.Zone) && a.utils.isDefined(window.Zone.__symbol__('MutationObserver')) ? this.ac = new window[(window.Zone.__symbol__('MutationObserver'))](this.jg.bind(this)) : this.ac = new b(this.jg.bind(this)), this.ac.observe(document.documentElement, {
                                    childList: !0,
                                    subtree: !0,
                                    attributes: !0,
                                    attributeFilter: [
                                        'src',
                                        'href'
                                    ]
                                }), a.log('M48'));
                            };
                            b.prototype.jg = function (b) {
                                var c = this;
                                a.Q();
                                b.forEach(function (a) {
                                    switch (a.type) {
                                    case 'childList':
                                        [].slice.call(a.addedNodes).forEach(function (a) {
                                            c.Me(a);
                                        });
                                        break;
                                    case 'attributes':
                                        c.Me(a.target);
                                    }
                                });
                                a.R();
                            };
                            b.prototype.Ue = function () {
                                this.tc = a.utils.isDefined(window.innerWidth) && a.utils.isDefined(document.documentElement.clientWidth) ? Math.min(window.innerWidth, document.documentElement.clientWidth) : window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName('body')[0].clientWidth;
                                this.sc = a.utils.isDefined(window.innerHeight) && a.utils.isDefined(document.documentElement.clientHeight) ? Math.min(window.innerHeight, document.documentElement.clientHeight) : window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName('body')[0].clientHeight;
                                a.log('M49', this.tc, this.sc);
                                this.viewport = {
                                    top: 0,
                                    left: 0,
                                    bottom: this.sc,
                                    right: this.tc
                                };
                            };
                            b.prototype.start = function () {
                                a.Q();
                                this.setUp();
                                a.R();
                                a.log('M50');
                            };
                            b.prototype.reset = function () {
                                this.S = {};
                                this.Va = 0;
                                this.dc = {};
                                this.Ta = 0;
                                a.log('M51');
                            };
                            b.prototype.Me = function (b) {
                                a.Q();
                                var c = a.utils.now();
                                a.utils.ob(b) && !b.isAdrumTrackedNode ? (this.mb || (this.K = this.K.bind(this), this.l = this.l.bind(this), this.K.I = !0, this.mb = this.l.I = !0), this.g++, a.log('M52', this.g), c = a.utils.Xc(b), c = a.utils.isDefined(c) ? c.value : null, a.utils.Tf(b) ? (b.addEventListener('loadeddata', this.K), a.log('M53', c)) : (b.addEventListener('load', this.K), a.log('M54', c)), b.addEventListener('error', this.l), b.isAdrumTrackedNode = !0) : a.utils.Lf(b) && !b.adrumNodeId ? (a.log('M55'), this.Jb(b, c)) : a.utils.Rf(b) && (this.Va = Math.max(this.Va, c));
                                a.R();
                            };
                            b.prototype.K = function (b) {
                                a.Q();
                                var c = a.utils.now();
                                this.ca = c;
                                b = b.target;
                                var g = a.utils.Rb(b);
                                a.utils.isDefined(g) && 0 < g.length ? 'data:' != g.substring(0, 5) || b.adrumNodeId ? this.Xi(g, c, b) : (a.log('M56'), this.Jb(b, c)) : b instanceof SVGElement && !b.adrumNodeId && (a.log('M57'), this.Jb(b, c));
                                b && b.isAdrumTrackedNode && (this.ub(b), this.g--, a.log('M58', this.g));
                                a.R();
                            };
                            b.prototype.l = function (b) {
                                var c = b.target;
                                c && c.isAdrumTrackedNode && (this.ub(c), this.g--, b = a.utils.Rb(b.target), a.log('M59', b));
                            };
                            b.prototype.ub = function (a) {
                                a.removeEventListener('load', this.K);
                                a.removeEventListener('error', this.l);
                            };
                            b.prototype.Tb = function (b) {
                                return this.nb(b) && a.utils.pb(b);
                            };
                            b.prototype.Xi = function (b, c, g) {
                                a.utils.isDefined(this.S[b]) ? this.Tb(g) && (this.S[b] = c, a.log('M60', b, c)) : (this.S[b] = c, a.log('M61', b, c));
                            };
                            b.prototype.Jb = function (b, c) {
                                a.log('M62', this.Ta, c, b.outerHTML);
                                b.adrumNodeId = this.Ta;
                                this.dc[this.Ta] = c;
                                this.Ta += 1;
                            };
                            b.prototype.Ve = function (b) {
                                var c = this;
                                a.j.Fb.Ga && (this.ya = b);
                                var g = 0, f = 0, n = this.rk(this.ya);
                                a.log('M63', n);
                                [].slice.call(document.getElementsByTagName('*')).forEach(function (m) {
                                    var t = a.utils.Rb(m);
                                    delete m.isAdrumTrackedNode;
                                    if (a.utils.isDefined(t) && 0 < t.length)
                                        if (a.log('M64', t), a.utils.isDefined(c.S[t])) {
                                            var p = c.S[t];
                                            a.log('M65', t, p);
                                            a.utils.pb(m) && (a.log('M66', t, p), c.Aa && (a.log('M67', f, p, b), f = Math.max(f, p - b), a.log('M68', t, f)), c.nb(m) && (a.log('M69', g, p, b), g = Math.max(g, p - b), a.log('M70', t, g)));
                                        } else {
                                            if (a.utils.ob(m) && a.utils.pb(m) && (p = c.wf(t), a.utils.isDefined(p))) {
                                                var l = p.startTime - (b - c.ya), r = p.duration * n + l;
                                                a.log('M71', t, r);
                                                a.log('M72', p.duration, l);
                                                c.Aa && (f = Math.max(f, r), a.log('M73', t, f));
                                                c.nb(m) && (g = Math.max(g, r), a.log('M74', t, g));
                                            }
                                        }
                                    else
                                        a.utils.isDefined(m.adrumNodeId) && (a.utils.isDefined(c.dc[m.adrumNodeId]) && (p = c.dc[m.adrumNodeId], a.utils.pb(m) && (c.Aa && (f = Math.max(f, p - b), a.log('M75', m.adrumNodeId, p)), c.nb(m) && (g = Math.max(g, p - b), a.log('M76', m.adrumNodeId, p)))), delete m.adrumNodeId);
                                });
                                a.log('M77', g, f);
                                this.$j().forEach(function (m) {
                                    var t = m.url;
                                    m = m.Tb;
                                    var p = c.wf(t);
                                    a.utils.isDefined(p) && (p = p.duration * n + (p.startTime - (b - c.ya)), c.Aa && (a.log('M78', t, p), f = Math.max(f, p)), m && (a.log('M79', t, p), g = Math.max(g, p)));
                                });
                                if (!a.conf.disableTextForTesting) {
                                    var m = this.Va - b;
                                    0 == g && (a.log('M80'), g = Math.max(g, m));
                                    this.Aa && 0 == f && (a.log('M81'), f = Math.max(f, m));
                                }
                                g |= 0;
                                f |= 0;
                                a.log('M82', b, this.ya);
                                a.log('M83', window.location.href);
                                a.log('M84', g, f);
                                return {
                                    vct: g,
                                    pct: f
                                };
                            };
                            b.prototype.mk = function (a) {
                                a = a.getBoundingClientRect();
                                var b = document.documentElement || document.body, g = a.top + (window.pageYOffset || b.scrollTop) - (b.clientTop || 0), b = a.left + (window.pageXOffset || b.scrollLeft) - (b.clientLeft || 0);
                                return {
                                    top: Math.round(g),
                                    left: Math.round(b),
                                    bottom: Math.round(g) + a.height,
                                    right: Math.round(b) + a.width
                                };
                            };
                            b.prototype.nb = function (b) {
                                b = this.mk(b);
                                if (this.$k(b))
                                    return a.log('M85'), !1;
                                var c = {
                                        top: Math.max(this.viewport.top, b.top),
                                        left: Math.max(this.viewport.left, b.left),
                                        bottom: Math.min(this.viewport.bottom, b.bottom),
                                        right: Math.min(this.viewport.right, b.right)
                                    }, c = a.utils.pf(c);
                                b = a.utils.pf(b);
                                if (0 != b && c / b >= this.Xk)
                                    return !0;
                                a.log('M86');
                                return !1;
                            };
                            b.prototype.$k = function (a) {
                                return a.top > this.viewport.bottom || a.bottom < this.viewport.top || a.right < this.viewport.left || a.left > this.viewport.right ? !0 : !1;
                            };
                            b.prototype.Fj = function () {
                                a.utils.isDefined(this.ac) && this.ac.disconnect();
                                a.log('M87');
                            };
                            b.prototype.rk = function (b) {
                                var c = this, g = 0, f = 0;
                                this.yf().forEach(function (n) {
                                    var m = n.name;
                                    if (a.utils.isDefined(c.S[m])) {
                                        var q = c.S[m] - b - n.startTime, t = n.duration;
                                        a.log('M88', m, b, n.startTime, c.S[m], t);
                                        t && 0 < q && (g += q / t, f++);
                                    }
                                });
                                return 0 < f ? g / f : 1;
                            };
                            b.prototype.$j = function () {
                                var b = this, c = [];
                                [].slice.call(document.getElementsByTagName('*')).forEach(function (g) {
                                    if (a.utils.pb(g)) {
                                        var f = b.Zj(g);
                                        f && (b.nb(g) ? c.push({
                                            url: f,
                                            Tb: !0
                                        }) : b.Aa && c.push({
                                            url: f,
                                            Tb: !1
                                        }));
                                    }
                                });
                                return c;
                            };
                            b.prototype.Zj = function (b) {
                                if (b && b.style) {
                                    var c = window.getComputedStyle(b).getPropertyValue('background-image');
                                    c || (c = (b.currentStyle || b.style).backgroundImage);
                                    b = this.wk(c);
                                    return a.utils.isDefined(b) && a.utils.isDefined(b.substr) && 'undefined' === b.substr(b.lastIndexOf('/') + 1) ? void 0 : b;
                                }
                            };
                            b.prototype.wk = function (a) {
                                if (a && a.match('url'))
                                    return a.replace('url("', '').replace('")', '');
                            };
                            b.prototype.wf = function (b) {
                                for (var c = 0, g = this.yf(); c < g.length; c++) {
                                    var f = g[c];
                                    if (a.utils.isDefined(f.name) && 0 <= f.name.indexOf(b))
                                        return f;
                                }
                            };
                            b.prototype.yf = function () {
                                return a.j.Fb.Ga ? a.monitor.resourceMonitor.basePageResourceBuffer : a.monitor.resourceMonitor.resourceBuffer.concat(a.monitor.resourceMonitor.kb());
                            };
                            return b;
                        }();
                        a.xn = b;
                        a.N = new b();
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = function () {
                                function e() {
                                    this.mb = !1;
                                    this.Mc = 5000;
                                    this.qb = a.conf.userConf && a.conf.userConf.navComplete && a.conf.userConf.navComplete.maxResourceQuietTime ? a.conf.userConf.navComplete.maxResourceQuietTime : this.Mc;
                                }
                                e.prototype.Tg = function () {
                                    a.Q();
                                    this.lb(Element.prototype, 'innerHTML', this.vg.bind(this));
                                    this.lb(HTMLElement.prototype, 'innerHTML', this.vg.bind(this));
                                    this.lb(HTMLImageElement.prototype, 'src', this.rb.bind(this));
                                    this.lb(HTMLScriptElement.prototype, 'src', this.rb.bind(this));
                                    this.lb(HTMLLinkElement.prototype, 'href', this.rb.bind(this));
                                    this.Ok();
                                    this.ed('append');
                                    this.ed('appendChild');
                                    this.ed('insertBefore');
                                    a.R();
                                };
                                e.prototype.setUp = function (b) {
                                    a.Q();
                                    this.md = this.g = 0;
                                    this.ca = b;
                                    this.qa = this.B = !1;
                                    this.cc = {};
                                    this.S = {};
                                    this.pd = {};
                                    a.R();
                                };
                                e.prototype.start = function (b) {
                                    this.setUp(b);
                                    this.qa = !0;
                                    a.log('M89');
                                };
                                e.prototype.reset = function () {
                                    this.B = !1;
                                    this.g = 0;
                                    this.qa = !1;
                                    this.S = {};
                                    this.pd = {};
                                    a.log('M90');
                                };
                                e.prototype.lb = function (a, b, f) {
                                    this.Nl(a, b, Object.getOwnPropertyDescriptor(a, b), f);
                                };
                                e.prototype.Nl = function (b, g, f, n) {
                                    if (a.utils.isDefined(f) && a.utils.isDefined(f.set) && !a.utils.isDefined(f.I)) {
                                        var m = this;
                                        Object.defineProperty(b, g, {
                                            set: function (a) {
                                                var b;
                                                try {
                                                    b = f.set.apply(this, arguments);
                                                } catch (c) {
                                                    throw c;
                                                } finally {
                                                    n.call(m, this);
                                                }
                                                return b;
                                            }
                                        });
                                    }
                                };
                                e.prototype.rb = function (b) {
                                    a.Q();
                                    this.Ld(b);
                                    a.R();
                                };
                                e.prototype.Ok = function () {
                                    var b = Element.prototype, g = this;
                                    a.utils.isDefined(b.setAttribute) && (b.setAttribute = a.aop.around(b.setAttribute, null, function () {
                                        var a = d(arguments);
                                        'src' != a[0] && 'href' != a[0] || g.rb.call(g, this);
                                    }));
                                };
                                e.prototype.ed = function (b) {
                                    var g = Element.prototype, f = this;
                                    a.utils.isDefined(g[b]) && (g[b] = a.aop.around(g[b], null, function () {
                                        0 < arguments.length && f.rb.call(f, arguments[0]);
                                    }));
                                };
                                e.prototype.vg = function (b) {
                                    a.Q();
                                    this.qa && a.utils.isDefined(b) && a.utils.isDefined(b.childNodes) && (this.Ld(b), this.fh(b.childNodes));
                                    a.R();
                                };
                                e.prototype.fh = function (b) {
                                    for (var g = 0; g < b.length; g++) {
                                        var f = b[g];
                                        'script' != a.utils.lk(f) && this.Ld(f);
                                        this.fh(f.childNodes);
                                    }
                                };
                                e.prototype.Ld = function (b) {
                                    a.monitor.AnySpaMonitor.cd() || (this.Yk(b) ? this.hj(b) : a.conf.P && this.ij(b));
                                };
                                e.prototype.hj = function (b) {
                                    var g = a.utils.Xc(b);
                                    a.utils.isDefined(g) && (g = g.value, !a.utils.isDefined(this.cc[g]) && 0 < g.length && (this.g++, this.cc[g] = !0, a.log('M91', g, this.g), this.Ne(b)));
                                };
                                e.prototype.ij = function (b) {
                                    var g = a.utils.now();
                                    a.utils.ob(b) && !b.isAdrumTrackedNode ? (g = a.utils.Rb(b), !a.utils.isDefined(this.cc[g]) && 0 < g.length && (this.g++, this.cc[g] = !0, this.Ne(b), a.log('M92', g, this.g))) : a.utils.Lf(b) && !b.adrumNodeId ? (a.log('M93', g), a.N.Jb(b, g)) : a.utils.Rf(b) && (a.N.Va = Math.max(a.N.Va, g));
                                };
                                e.prototype.Ne = function (b) {
                                    this.mb || (this.K = this.K.bind(this), this.l = this.l.bind(this), this.K.I = !0, this.mb = this.l.I = !0);
                                    var g = a.utils.Xc(b), g = a.utils.isDefined(g) ? g.value : null;
                                    a.utils.Tf(b) ? (b.addEventListener('loadeddata', this.K), a.log('M94', g)) : (b.addEventListener('load', this.K), a.log('M95', g, b.nodeName));
                                    b.addEventListener('error', this.l);
                                };
                                e.prototype.dl = function (b) {
                                    return 'LINK' == b.nodeName ? (b = b.attributes.getNamedItem('rel'), a.utils.isDefined(b) ? 0 <= b.value.indexOf('stylesheet') : !0) : !0;
                                };
                                e.prototype.Yk = function (a) {
                                    return /^(SCRIPT|IMG|LINK)$/.test(a.nodeName) && this.dl(a);
                                };
                                e.prototype.K = function (c) {
                                    a.Q();
                                    var g = this.qf(c.target);
                                    !a.utils.isDefined(this.S[g]) && 0 < this.g && (this.g--, this.S[g] = !0, a.log('M96', g, this.g));
                                    this.ca = a.utils.now();
                                    this.md += 1;
                                    1 == this.md && (b.n.Yg(), this.B = !0);
                                    this.ub(c.target);
                                    g = c.target;
                                    a.conf.P && a.utils.ob(g) && !g.isAdrumTrackedNode && (a.log('M97'), a.N.K(c));
                                    a.R();
                                };
                                e.prototype.l = function (b) {
                                    a.Q();
                                    var g = this.qf(b.target), f = b.target;
                                    a.utils.isDefined(this.pd[g]) || (this.g--, this.pd[g] = !0, a.log('M98', g, this.g));
                                    a.conf.P && a.utils.ob(f) && !f.isAdrumTrackedNode && (a.log('M99'), a.N.l(b));
                                    this.ub(b.target);
                                    a.R();
                                };
                                e.prototype.ej = function () {
                                    return 0 < this.g && this.B;
                                };
                                e.prototype.qf = function (a) {
                                    var b = '';
                                    a instanceof HTMLScriptElement ? b = a.src : a instanceof HTMLImageElement ? b = a.src : a instanceof HTMLLinkElement && (b = a.href);
                                    return b;
                                };
                                e.prototype.bd = function (b) {
                                    var g = this.g, f = 0;
                                    a.conf.P && (g += a.N.g, f = a.N.ca);
                                    a.log('M100', g);
                                    return 0 == g && this.B && (a.log('M101'), g = Math.max(this.ca, f), b - g >= this.qb) ? (this.reset(), g) : -1;
                                };
                                e.prototype.ub = function (a) {
                                    a.removeEventListener('load', this.K);
                                    a.removeEventListener('error', this.l);
                                };
                                return e;
                            }();
                            b.Nh = l;
                        }(a.j || (a.j = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = function () {
                                function e() {
                                    this.Mc = 3000;
                                    this.qb = a.conf.userConf && a.conf.userConf.navComplete && a.conf.userConf.navComplete.maxXhrQuietTime ? a.conf.userConf.navComplete.maxXhrQuietTime : this.Mc;
                                }
                                e.prototype.setUp = function (a) {
                                    this.nd = this.g = 0;
                                    this.Ea = a;
                                    this.qa = this.B = !1;
                                    this.vh = {};
                                    this.Vd = {};
                                };
                                e.prototype.start = function (a) {
                                    this.setUp(a);
                                    this.qa = !0;
                                };
                                e.prototype.Ce = function (b) {
                                    a.monitor.AnySpaMonitor.cd() || a.utils.isDefined(this.vh[b]) || !this.qa || (this.g += 1, this.vh[b] = !0, a.log('M102', b, this.g));
                                };
                                e.prototype.Zi = function (c) {
                                    !a.monitor.AnySpaMonitor.cd() && this.qa && 0 < this.g && (a.utils.isDefined(this.Vd) && !a.utils.isDefined(this.Vd[c]) && (this.Ea = a.utils.now(), this.g -= 1, this.Vd[c] = !0, a.log('M103', c, this.g)), this.nd += 1, 1 == this.nd && (b.n.Yg(), this.B = !0));
                                };
                                e.prototype.bd = function (a) {
                                    return 0 == this.g && this.B && a - this.Ea >= this.qb ? (this.reset(), this.Ea) : -1;
                                };
                                e.prototype.fj = function () {
                                    return 0 < this.g && this.B;
                                };
                                e.prototype.reset = function () {
                                    this.B = !1;
                                    this.g = 0;
                                    this.qa = !1;
                                };
                                return e;
                            }();
                            b.Dh = l;
                        }(a.j || (a.j = {})));
                    }(k || (k = {})));
                    var d = k.utils.xa, h = k.utils.isFunction;
                    (function (a) {
                        var b = a.utils.generateGUID, l;
                        (function (a) {
                            a[a.USER = 0] = 'USER';
                            a[a.TIMER = 1] = 'TIMER';
                            a[a.XHR = 2] = 'XHR';
                            a[a.RESOURCE = 3] = 'RESOURCE';
                            a[a.PROMISE = 4] = 'PROMISE';
                            a[a.FETCH = 5] = 'FETCH';
                            a[a.OTHER = 6] = 'OTHER';
                        }(l = a.CauseType || (a.CauseType = {})));
                        var e = function () {
                            return function (c, f, n) {
                                this.start = a.utils.now();
                                this.parent = c;
                                this.pc = f;
                                this.guid = b();
                                this.type = n;
                            };
                        }();
                        a.Eb = e;
                        var c = function () {
                            function b() {
                            }
                            b.Qn = function () {
                                return b.events;
                            };
                            b.Mf = function (b) {
                                return a.utils.isDefined(b) && a.utils.isFunction(b.handleEvent);
                            };
                            b.yg = function (a, c, m, q) {
                                var e;
                                b.ra(c);
                                try {
                                    b.Mf(a) ? e = a.handleEvent.apply(a, q) : h(a) && (e = a.apply(m, q));
                                } catch (p) {
                                    throw p;
                                } finally {
                                    b.L();
                                }
                                return e;
                            };
                            b.vc = function (c, n, m, q) {
                                if (!a.utils.isDefined(n) || n.I)
                                    return n;
                                var e;
                                q || (e = b.ja());
                                return function (a) {
                                    var q = b.Pa(c, a, e, m);
                                    return b.yg(n, q, this, arguments);
                                };
                            };
                            b.Pa = function (b, c, m, g) {
                                m ? a.log('M104', b, m.pc.action) : a.log('M105', b);
                                a.utils.isDefined(c) ? (c = a.ce.wl(c.target || c.srcElement), c.action = b) : c = new a.La(b);
                                return new e(m, c, g);
                            };
                            b.hn = function (c, n, m) {
                                if (!a.utils.isDefined(n) || n.I)
                                    return n;
                                var q = b.Pa(c, void 0, b.ja(), m);
                                return function () {
                                    new a.La(c);
                                    return b.yg(n, q, this, arguments);
                                };
                            };
                            b.Do = function (a, c) {
                                return function () {
                                    var m = c.apply(this, arguments);
                                    b.Hc(a);
                                    return m;
                                };
                            };
                            b.ja = function () {
                                return 0 < b.events.length ? b.events[b.events.length - 1] : null;
                            };
                            b.ra = function (a) {
                                b.events.push(a);
                            };
                            b.L = function () {
                                return b.events.pop();
                            };
                            b.Ic = function (b, c) {
                                var m = b, g = 1, e = '';
                                if (!a.utils.isDefined(m))
                                    return null;
                                for (; a.utils.isDefined(m.parent);)
                                    e = ' -> ' + m.pc.action + e, m = m.parent, g += 1;
                                var p = a.utils.now();
                                a.utils.isDefined(m.pc) && (e = m.pc.action + e + ' -> ' + c);
                                a.log('M106', e);
                                a.log('M107', m.start, g);
                                a.log('M108', p - m.start);
                                return m;
                            };
                            b.Hc = function (a) {
                                return b.Ic(b.ja(), a);
                            };
                            b.xk = function () {
                                var c = b.Hc(void 0);
                                if (a.utils.isDefined(c) && a.utils.isDefined(c.type))
                                    return [
                                        l.TIMER,
                                        l.USER
                                    ].some(function (a) {
                                        return c.type == a;
                                    }) ? c : void 0;
                            };
                            b.Wk = function (a) {
                                if (h(a))
                                    return a;
                                var b = '' + a;
                                return function () {
                                    eval(b);
                                };
                            };
                            b.setUp = function () {
                                b.events = [];
                                var c = a.utils.refs;
                                [
                                    {
                                        mg: c.setTimeout,
                                        lf: 'setTimeout'
                                    },
                                    {
                                        mg: c.setInterval,
                                        lf: 'setInterval'
                                    }
                                ].forEach(function (a) {
                                    var m = a.mg, c = a.lf;
                                    window[c] = function (a) {
                                        var f = d(arguments);
                                        if (a) {
                                            var n = b.ml(c, arguments[1]) ? l.OTHER : l.TIMER, n = b.hn(c, b.Wk(a), n);
                                            f[0] = n;
                                            return m.apply(window, f);
                                        }
                                        m.apply(window, f);
                                    };
                                });
                            };
                            b.ml = function (b, c) {
                                return 'setTimeout' == b && (a.utils.isDefined(c) && 0 == c || !a.utils.isDefined(c));
                            };
                            return b;
                        }();
                        c.events = [];
                        a.c = c;
                    }(k || (k = {})));
                    (function (a) {
                        var b = a.utils.Nj, l = window.addEventListener, e = a.utils.isDefined(window.EventTarget) ? window.EventTarget.prototype.addEventListener : function () {
                            }, c = a.utils.isDefined(window.EventTarget) ? window.EventTarget.prototype.removeEventListener : function () {
                            }, g = function () {
                                return function (a, b, c, f, g, e, l, w) {
                                    this.action = a || '';
                                    this.Vh = b || '';
                                    this.className = c || '';
                                    this.tagName = f || '';
                                    this.name = g || '';
                                    this.text = e || '';
                                    this.src = l;
                                    this.item = w;
                                };
                            }();
                        a.La = g;
                        var f = function () {
                            function f() {
                            }
                            f.setUp = function () {
                                Array.prototype.push.apply(f.Nc, []);
                                f.en();
                                a.utils.isDefined(window.EventTarget) ? (f.fn(), f.gn()) : f.Yi();
                                f.Jf('onload');
                                f.Jf('onerror');
                            };
                            f.no = function () {
                                return [];
                            };
                            f.dk = function (b, c) {
                                var g = '';
                                if (a.utils.isDefined(b))
                                    if ('string' === typeof b.textContent)
                                        g = a.utils.isDefined(String.prototype.trim) ? b.textContent.trim() : b.textContent, g = a.utils.isDefined(c) ? g.substring(0, c) : g;
                                    else
                                        for (b = b.firstChild; a.utils.isDefined(b) && !(g += f.dk(b, c), a.utils.isDefined(c) && g.length >= c); b = b.nextSibling);
                                return g;
                            };
                            f.wl = function (c) {
                                const $___old_45180736918778ad = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                                try {
                                    if ($___old_45180736918778ad)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_d59384066fb62f91.XMLHttpRequest));
                                    return function () {
                                        var f = b(c.id) || '', n = b(c.className) || '', e = '', l = new g();
                                        c instanceof HTMLHtmlElement ? (e = 'html', l.text = '#html') : c === document ? (e = 'document', l.text = '#document') : c === window ? (e = 'window', l.text = '#window') : c instanceof XMLHttpRequest ? (e = 'xhr', l.src = a.utils.isObject(c._adrumAjaxT) ? encodeURI(c._adrumAjaxT.url()) : '') : c instanceof WebSocket ? (e = 'websocket', l.src = encodeURI(c.url)) : c instanceof HTMLScriptElement ? (e = 'script', l.src = encodeURI(c.src)) : c instanceof HTMLAnchorElement ? (e = 'a', l.text = b(c.text) || '') : c instanceof HTMLButtonElement ? (e = 'button', l.name = b(c.name)) : c instanceof HTMLDivElement ? e = 'div' : c instanceof HTMLImageElement ? (e = 'img', l.src = encodeURI(c.src), l.text = b(c.title) || '') : c instanceof HTMLLIElement ? (e = 'li', l.item = c.value) : c instanceof HTMLUListElement ? e = 'ul' : c instanceof HTMLFormElement ? e = 'form' : c instanceof HTMLFrameElement ? (e = 'frame', l.src = encodeURI(c.src)) : c instanceof HTMLInputElement ? (e = b(c.type) || 'input', l.text = b(c.value), l.name = b(c.name)) : c instanceof HTMLTableElement ? e = 'table' : c instanceof HTMLTableCaptionElement ? e = 'tcap' : c instanceof HTMLTableCellElement ? e = 'td' : c instanceof HTMLTableRowElement ? e = 'tr' : (e = a.utils.isDefined(c.tagName) ? b(c.tagName) : '', a.log('M109', e));
                                        l.Vh = f;
                                        l.className = n;
                                        l.tagName = e;
                                        a.utils.isString(l.text) && (l.text = a.utils.isDefined(String.prototype.trim) ? l.text.trim() : l.text, l.text = l.text.substring(0, 30));
                                        return l;
                                    }.apply(this, arguments);
                                } finally {
                                    if ($___old_45180736918778ad)
                                        ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_45180736918778ad));
                                }
                            };
                            f.en = function () {
                                a.utils.forEach(f.Nc, function (b) {
                                    l(b, function (c) {
                                        c = c.target || c.srcElement;
                                        (c === document || c === window || c instanceof XMLHttpRequest || c instanceof HTMLElement) && null != c && c['on' + b] && (c['on' + b] = a.c.vc(b, c['on' + b], a.CauseType.USER, !0), c['on' + b].I = !0);
                                    }, !0);
                                });
                            };
                            f.Yi = function () {
                                a.utils.forEach(f.Nc, function (b) {
                                    l(b, function (c) {
                                        c = a.c.Pa(b, c, null, a.CauseType.USER);
                                        a.c.ra(c);
                                    }, !0);
                                    l(b, function () {
                                        a.c.L();
                                    }, !1);
                                });
                            };
                            f.jh = function (b) {
                                var c = !1;
                                a.utils.isBoolean(b) ? c = b : a.utils.isObject(b) && a.utils.isDefined(b.capture) && (c = !!b.capture);
                                return c;
                            };
                            f.Ng = function (b, c, f, g) {
                                if (!a.utils.isDefined(b.eventListenerMap) || !a.utils.isDefined(b.eventListenerMap[c]) || !a.utils.isDefined(f))
                                    return -1;
                                b = b.eventListenerMap[c];
                                for (c = 0; c < b.length; c++)
                                    if (b[c][0] == f && b[c][1] == g)
                                        return c;
                                return -1;
                            };
                            f.Hf = function (b, c, f, g, n) {
                                a.utils.isDefined(b) && a.utils.isDefined(n) && (a.utils.isDefined(b.eventListenerMap) || (b.eventListenerMap = {}), a.utils.isDefined(b.eventListenerMap[c]) || (b.eventListenerMap[c] = []), b.eventListenerMap[c].push([
                                    f,
                                    g,
                                    n
                                ]));
                            };
                            f.dm = function (a, b, c) {
                                if (-1 < c) {
                                    var f = a.eventListenerMap[b];
                                    delete f[c];
                                    f.splice(c, 1);
                                    0 == f.length && delete a.eventListenerMap[b];
                                }
                            };
                            f.fn = function () {
                                EventTarget.prototype.addEventListener = function (b, c, g) {
                                    if (a.utils.isDefined(c) && c.I || !a.c.Mf(c) && !h(c))
                                        return e.call(this, b, c, g);
                                    var l = f.jh(g), s = a.utils.isDefined(this) ? this : window;
                                    if (!(-1 < f.Ng(s, b, c, l))) {
                                        var r = c;
                                        switch (b) {
                                        case 'click':
                                        case 'dblclick':
                                        case 'auxclick':
                                        case 'mousedown':
                                        case 'mouseup':
                                        case 'drop':
                                        case 'keyup':
                                        case 'keydown':
                                        case 'keypress':
                                        case 'contextmenu':
                                        case 'pageChanged':
                                        case 'close':
                                            r = a.c.vc(b, c, a.CauseType.USER, !0);
                                            f.Hf(s, b, c, l, r);
                                            break;
                                        case 'load':
                                        case 'error':
                                            r = a.c.vc(b, c, a.CauseType.USER, !1), f.Hf(s, b, c, l, r);
                                        }
                                        e.call(s, b, r, g);
                                    }
                                };
                            };
                            f.gn = function () {
                                EventTarget.prototype.removeEventListener = function (b, g, e) {
                                    if (a.utils.isDefined(g) && g.I)
                                        return c.call(this, b, g, e);
                                    var l = f.jh(e), s = a.utils.isDefined(this) ? this : window, l = f.Ng(s, b, g, l);
                                    0 <= l ? (c.call(s, b, this.eventListenerMap[b][l][2], e), f.dm(s, b, l)) : c.call(s, b, g, e);
                                };
                            };
                            f.Jf = function (b) {
                                var c = HTMLElement.prototype, f = Object.getOwnPropertyDescriptor(c, b);
                                a.utils.isDefined(f) && a.utils.isDefined(f.set) && Object.defineProperty(c, b, {
                                    set: function (c) {
                                        var g = c;
                                        a.utils.isDefined(c) && (g = a.c.vc(b, c, a.CauseType.RESOURCE, !1));
                                        var n;
                                        try {
                                            n = f.set.call(this, g);
                                        } catch (e) {
                                            throw e;
                                        }
                                        return n;
                                    }
                                });
                            };
                            return f;
                        }();
                        f.Nc = 'click dblclick mousedown mouseup change select submit keydown keypress keyup load unload'.split(' ');
                        a.ce = f;
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = a.utils.map, e = a.utils.dn, c = a.utils.isDefined, g = a.utils.isString, f = a.utils.Ej, n = a.utils.isFunction;
                            b.eg = function (a, b) {
                                for (var c = !1, f = 0; f < b.length; f++) {
                                    var g = b[f];
                                    if (g && g.test(a)) {
                                        c = !0;
                                        break;
                                    }
                                }
                                return c;
                            };
                            b.Wb = function (a, f, g) {
                                var n = !1;
                                if (f && g)
                                    for (var e = 0; e < g.length; e++) {
                                        var l = g[e];
                                        if (!(c(l.method) && a !== l.method || c(l.urls) && !b.eg(f, l.urls))) {
                                            n = !0;
                                            break;
                                        }
                                    }
                                return n;
                            };
                            b.Ab = function (a, b) {
                                return f(l(e(b), a));
                            };
                            b.qc = function (a) {
                                var c = b.hk(a);
                                a = b.rf(a);
                                return c || a;
                            };
                            b.hk = function (b) {
                                var f = b.method;
                                if (c(f)) {
                                    if (g(f))
                                        return b;
                                    a.error('M110');
                                }
                            };
                            b.Ym = function (a) {
                                var c = b.rf(a);
                                return b.Yl(a) && c;
                            };
                            b.Yl = function (b) {
                                if (n(b.getFromBody))
                                    return b;
                                a.error('M111');
                            };
                            b.yj = function (b) {
                                for (var c = [], f = 0; f < b.length; f++) {
                                    var n = b[f].pattern;
                                    if (g(n))
                                        try {
                                            c.push(new RegExp(n));
                                        } catch (e) {
                                            a.exception(e, 'M112');
                                        }
                                    else
                                        a.error('M113');
                                }
                                return c;
                            };
                            b.rf = function (a) {
                                var c = a.urls;
                                if (c && 0 < c.length && (a.urls = b.yj(c), 0 < a.urls.length))
                                    return a;
                            };
                        }(a.utils || (a.utils = {})));
                    }(k || (k = {})));
                    (function (a) {
                        a = a.events || (a.events = {});
                        a = a.b || (a.b = {});
                        a.navigationStart = 'navigationStart';
                        a.domainLookupStart = 'domainLookupStart';
                        a.domainLookupEnd = 'domainLookupEnd';
                        a.connectStart = 'connectStart';
                        a.secureConnectionStart = 'secureConnectionStart';
                        a.connectEnd = 'connectEnd';
                        a.requestStart = 'requestStart';
                        a.responseStart = 'responseStart';
                        a.responseEnd = 'responseEnd';
                        a.domContentLoadedEventStart = 'domContentLoadedEventStart';
                        a.loadEventEnd = 'loadEventEnd';
                        a.Og = 'sendTime';
                        a.jf = 'firstByteTime';
                        a.Ig = 'respAvailTime';
                        a.Jg = 'respProcTime';
                        a.Rd = 'viewChangeStart';
                        a.lh = 'viewChangeEnd';
                        a.Sd = 'viewDOMLoaded';
                        a.uh = 'xhrRequestsCompleted';
                        a.Bo = 'viewFragmentsLoaded';
                        a.Co = 'viewResourcesLoaded';
                        a.Td = 'virtualPageStart';
                        a.an = 'virtualPageEnd';
                    }(k || (k = {})));
                    (function (a) {
                        var b = a.events || (a.events = {});
                        b.metricSpec = {};
                        b.metricSpec[a.EventType.PageView] = {
                            Mj: {
                                start: b.b.navigationStart,
                                end: b.b.loadEventEnd,
                                name: 'PLT'
                            },
                            Uj: {
                                start: b.b.navigationStart,
                                end: b.b.responseStart,
                                name: 'FBT'
                            },
                            uo: {
                                start: b.b.navigationStart,
                                end: b.b.requestStart,
                                name: 'SCT'
                            },
                            vo: {
                                start: b.b.secureConnectionStart,
                                end: b.b.connectEnd,
                                name: 'SHT'
                            },
                            Nn: {
                                start: b.b.domainLookupStart,
                                end: b.b.domainLookupEnd,
                                name: 'DLT'
                            },
                            yo: {
                                start: b.b.connectStart,
                                end: b.b.connectEnd,
                                name: 'TCP'
                            },
                            qo: {
                                start: b.b.requestStart,
                                end: b.b.responseStart,
                                name: 'RAT'
                            },
                            Pn: {
                                start: b.b.responseStart,
                                end: b.b.loadEventEnd,
                                name: 'FET'
                            },
                            Tn: {
                                start: b.b.responseStart,
                                end: b.b.domContentLoadedEventStart,
                                name: 'DRT'
                            },
                            Sn: {
                                start: b.b.responseStart,
                                end: b.b.responseEnd,
                                name: 'DDT'
                            },
                            Ln: {
                                start: b.b.responseEnd,
                                end: b.b.domContentLoadedEventStart,
                                name: 'DPT'
                            },
                            po: {
                                start: b.b.domContentLoadedEventStart,
                                end: b.b.loadEventEnd,
                                name: 'PRT'
                            },
                            Mn: {
                                start: b.b.navigationStart,
                                end: b.b.domContentLoadedEventStart,
                                name: 'DOM'
                            }
                        };
                        b.metricSpec[a.EventType.Ajax] = {
                            Uj: {
                                start: b.b.Og,
                                end: b.b.jf,
                                name: 'FBT'
                            },
                            zn: {
                                start: b.b.jf,
                                end: b.b.Ig,
                                name: 'DDT'
                            },
                            yn: {
                                start: b.b.Ig,
                                end: b.b.Jg,
                                name: 'DPT'
                            },
                            Mj: {
                                start: b.b.Og,
                                end: b.b.Jg,
                                name: 'PLT'
                            }
                        };
                        b.metricSpec[a.EventType.VPageView] = {
                            ho: {
                                start: b.b.Td,
                                end: b.b.an,
                                name: 'PLT'
                            },
                            Hn: {
                                start: b.b.Rd,
                                end: b.b.lh,
                                name: 'DDT'
                            },
                            co: {
                                start: b.b.Rd,
                                end: b.b.Sd,
                                name: 'DRT'
                            },
                            qn: {
                                start: b.b.lh,
                                end: b.b.Sd,
                                name: 'DPT'
                            },
                            rn: {
                                start: b.b.Rd,
                                end: b.b.Sd,
                                name: 'DOM'
                            },
                            oo: {
                                start: 'viewChangeEnd',
                                end: 'xhrRequestsCompleted',
                                name: null
                            },
                            eo: {
                                start: 'viewChangeEnd',
                                end: 'viewPartialsLoaded',
                                name: null
                            },
                            bo: {
                                start: 'viewPartialsLoaded',
                                end: 'viewFragmentsLoaded',
                                name: null
                            },
                            fo: {
                                start: 'viewPartialsLoaded',
                                end: 'viewResourcesLoaded',
                                name: null
                            }
                        };
                        b.metricSpec[a.EventType.NG_VIRTUAL_PAGE] = b.metricSpec[a.EventType.VPageView];
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = function (e) {
                                function c(g) {
                                    g = e.call(this, g) || this;
                                    g.constructor != c && g.constructor != b.AdrumAjax && a.reportAPIMessage(a.W.ma, a.Xa, 'ADRUM.events.Ajax', []);
                                    return g;
                                }
                                v(c, e);
                                c.prototype.type = function () {
                                    return a.EventType.Ajax;
                                };
                                return c;
                            }(b.EventTracker);
                            b.Ajax = l;
                            b.Na(b.U[a.EventType.Ajax], l.prototype);
                            b.Je(b.metricSpec[a.EventType.Ajax], l.prototype);
                        }(a.events || (a.events = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = function (b) {
                                function c(a) {
                                    return b.call(this, a) || this;
                                }
                                v(c, b);
                                c.prototype.type = function () {
                                    return a.EventType.Ajax;
                                };
                                return c;
                            }(b.Ajax);
                            b.AdrumAjax = l;
                            b.Na(b.U[a.EventType.ADRUM_XHR], l.prototype);
                        }(a.events || (a.events = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = a.utils.isDefined, e = function () {
                                    function c() {
                                    }
                                    c.wd = function (b, f) {
                                        a.conf.spa2 ? c.wj(b, f) : c.Mg(b, f);
                                    };
                                    c.wj = function (g, f) {
                                        var n = a.c.Ic(g.h);
                                        if (l(a.monitor.AnySpaMonitor.vp) && !a.monitor.AnySpaMonitor.Ca && a.monitor.AnySpaMonitor.vp.fb == n) {
                                            f.parent(a.monitor.AnySpaMonitor.vp);
                                            if (++a.monitor.AnySpaMonitor.vp.Ke > b.va.maxPerPageView)
                                                return;
                                            c.Mg(g, f);
                                        } else
                                            l(a.monitor.AnySpaMonitor.vp) && !a.monitor.AnySpaMonitor.Ca && f.parent(a.monitor.AnySpaMonitor.vp), c.vd(f, g), b.oSTO(c.em, c.Ci);
                                        delete g._adrumAjaxT;
                                        a.j.n.G.Zi(f.url());
                                    };
                                    c.Mg = function (g, f) {
                                        var n = {};
                                        g.Ae = n;
                                        delete g._adrumAjaxT;
                                        var m = {};
                                        if (g instanceof XMLHttpRequest)
                                            try {
                                                if (m = {
                                                        status: g.status,
                                                        getAllResponseHeaders: g.getAllResponseHeaders()
                                                    }, 400 <= g.status)
                                                    if (b.isString(g.statusText))
                                                        m.statusText = g.statusText;
                                                    else
                                                        try {
                                                            m.responseText = g.responseText;
                                                        } catch (e) {
                                                            m.responseType = g.responseType;
                                                        }
                                            } catch (l) {
                                                a.error('M114', l);
                                            }
                                        b.hc(function () {
                                            g.Ae === n && c.reportXhr(m, f);
                                        });
                                    };
                                    c.reportXhr = function (b, f) {
                                        c.hh(b, f);
                                        a.command('reportXhr', f);
                                    };
                                    c.vd = function (b, f) {
                                        if (l(f.h)) {
                                            var n = a.c.Ic(f.h).guid;
                                            c.hh(f, b);
                                            l(c.ia[n]) || (c.ia[n] = []);
                                            -1 == c.ia[n].indexOf(b) && c.ia[n].push(b);
                                        } else
                                            a.log('M115');
                                    };
                                    c.hh = function (a, c) {
                                        var n = c.response || a, m = n.status, e;
                                        b.isNumber(m) && c.xhrStatus(m);
                                        if (n.getAllResponseHeaders) {
                                            var l = b.isFunction(n.getAllResponseHeaders) ? n.getAllResponseHeaders() : n.getAllResponseHeaders;
                                            c.allResponseHeaders(l);
                                        }
                                        if (400 <= m) {
                                            if (b.isString(n.statusText))
                                                e = n.statusText;
                                            else
                                                try {
                                                    b.isString(n.responseText) && (e = n.responseText);
                                                } catch (p) {
                                                    b.isString(n.responseType) && (e = n.responseType);
                                                }
                                            c.error({
                                                status: m,
                                                msg: e
                                            });
                                        }
                                    };
                                    c.Um = function (a, b) {
                                        var c = '';
                                        a.headers.forEach(function (a, b) {
                                            c += b + ': ' + a + '\r\n';
                                        });
                                        b.allResponseHeaders(c);
                                    };
                                    c.Cg = function (a) {
                                        c.ia[a] = [];
                                        delete c.ia[a];
                                    };
                                    c.yl = function (b, f) {
                                        var n = c.ia[f];
                                        l(n) && (n.forEach(function (c) {
                                            c.parent(b);
                                            a.command('reportXhr', c);
                                        }), c.Cg(f));
                                    };
                                    c.em = function () {
                                        for (var g in c.ia) {
                                            for (var f = 0, n = c.ia[g]; f < n.length; f++) {
                                                var m = n[f];
                                                !l(a.monitor.AnySpaMonitor.vp) && ++c.jj <= b.va.maxPerPageView ? a.command('reportXhr', m) : l(a.monitor.AnySpaMonitor.vp) && ++a.monitor.AnySpaMonitor.vp.Ke <= b.va.maxPerPageView && a.command('reportXhr', m);
                                            }
                                            c.Cg(g);
                                        }
                                    };
                                    return c;
                                }();
                            e.Ci = 2000;
                            e.ia = {};
                            e.jj = 0;
                            b.wc = e;
                        }(a.utils || (a.utils = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = a.utils.isDefined, e = function () {
                                    function c() {
                                    }
                                    c.setUp = function () {
                                        c.exclude = [{
                                                urls: [
                                                    new RegExp(a.conf.beaconUrlHttp + a.conf.corsEndpointPath),
                                                    new RegExp(a.conf.beaconUrlHttps + a.conf.corsEndpointPath)
                                                ]
                                            }];
                                        c.include = [];
                                        c.maxPerPageView = c.Xl(a.conf.userConf && a.conf.userConf.xhr);
                                        c.payloadParams = [];
                                        c.parameter = {};
                                        c.ug(a.conf.userConf && a.conf.userConf.xhr);
                                    };
                                    c.ug = function (a) {
                                        l(a) && (c.exclude = c.exclude.concat(b.Ab(b.qc, a.exclude)), c.include = c.include.concat(b.Ab(b.qc, a.include)), c.payloadParams = c.payloadParams.concat(b.Ab(b.qc, a.payloadParams)), c.parameter = b.Ab(b.Ym, a.parameter));
                                    };
                                    c.Xl = function (g) {
                                        if (l(g)) {
                                            g = g.maxPerPageView;
                                            if (b.isNumber(g) && 0 < g)
                                                return g;
                                            if ('UNLIMITED' === g)
                                                return Infinity;
                                            a.reportAPIMessage(a.W.Ah, 'Invalid maxPerPageView value: ' + g, 'xhr.maxPerPageView', [g]);
                                        }
                                        return a.conf.spa2 ? c.Jh : c.Ih;
                                    };
                                    c.mc = function (a, f) {
                                        var n = c.include, m = c.exclude;
                                        return l(n) && 0 < n.length && !b.Wb(f, a, n) || l(m) && 0 < m.length && b.Wb(f, a, m);
                                    };
                                    c.Wg = function (a, f) {
                                        var n = c.payloadParams;
                                        b.Wb(a.method(), a.url(), n) && a.dataObject({ data: f });
                                    };
                                    return c;
                                }();
                            e.Ih = 50;
                            e.Jh = 250;
                            b.va = e;
                        }(a.utils || (a.utils = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            b.parseURI = function (a) {
                                var b = String(a).replace(/^\s+|\s+$/g, '').match(/^([^:\/?#]+:)?(?:\/\/(?:([^:@\/?#]*)(?::([^:@\/?#]*))?@)?(([^:\/?#]*)(?::(\d*))?))?([^?#]*)(\?[^#]*)?(#[\s\S]*)?/);
                                a = b && null != a.match(b[1] + '//');
                                return b && {
                                    href: b[0] || '',
                                    protocol: b[1] || '',
                                    slash: a ? '//' : '',
                                    username: b[2] || '',
                                    password: b[3] || '',
                                    host: b[4] || '',
                                    hostname: b[5] || '',
                                    port: b[6] || '',
                                    pathname: b[7] || '',
                                    search: b[8] || '',
                                    hash: b[9] || ''
                                };
                            };
                            b.absolutizeURI = function (a, e) {
                                function c(a) {
                                    var b = [];
                                    a.replace(/^(\.\.?(\/|$))+/, '').replace(/\/(\.(\/|$))+/g, '/').replace(/\/\.\.$/, '/../').replace(/\/?[^\/]*/g, function (a) {
                                        '/..' === a ? b.pop() : b.push(a);
                                    });
                                    return b.join('').replace(/^\//, '/' === a.charAt(0) ? '/' : '');
                                }
                                var g, f, n, m, q, t, p, s;
                                s = e ? b.parseURI(e) : {};
                                p = a ? b.parseURI(a) : {};
                                s.protocol ? (g = s.protocol, f = s.slash, n = s.username, m = s.password, q = s.host, t = c(s.pathname), p = s.search) : s.host ? (g = p.protocol, f = p.slash, n = s.username, m = s.password, q = s.host, t = c(s.pathname), p = s.search) : (g = p.protocol, f = p.slash, n = p.username, m = p.password, q = p.host, s.pathname ? ('/' === s.pathname.charAt(0) ? t = c(s.pathname) : (t = p.pathname ? p.pathname.slice(0, p.pathname.lastIndexOf('/') + 1) + s.pathname : f ? '/' + s.pathname : s.pathname, t = c(t)), p = s.search) : (t = c(p.pathname), p = s.search || p.search));
                                return g + f + (n ? n + (m ? ':' + m : '') + '@' : '') + q + t + p + (s.hash ? s.hash : '');
                            };
                            b.getFullyQualifiedUrl = function (l) {
                                try {
                                    var e, c = document.location.href, g;
                                    a: {
                                        for (var f = document.getElementsByTagName('base'), n = 0; n < f.length; n++) {
                                            var m = f[n].href;
                                            if (m) {
                                                g = m;
                                                break a;
                                            }
                                        }
                                        g = void 0;
                                    }
                                    e = g ? b.absolutizeURI(c, g) : c;
                                    return b.absolutizeURI(e, l);
                                } catch (q) {
                                    return a.exception(q, 'M116', l, e), l;
                                }
                            };
                        }(a.utils || (a.utils = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = a.utils.isString, e = function (c) {
                                    function g() {
                                        var a = c.call(this) || this;
                                        a.da = 0;
                                        a.da = 0;
                                        return a;
                                    }
                                    v(g, c);
                                    g.prototype.gc = function () {
                                        this.da = 0;
                                    };
                                    g.l = function (b) {
                                        var c = b.message || b.description, m = b.fileName || b.filename, g = b.lineNumber, e = b.columnNumber;
                                        l(b.description) && 0 <= b.description.indexOf('Access is denied.') && (c += ': maybe you have CORS XHR error in IE');
                                        a.monitor.ha.Ia(c, m, g, e, b);
                                    };
                                    g.Qf = function (a) {
                                        var c = document.createElement('a');
                                        c.href = a;
                                        a = document.location;
                                        var m = a.protocol;
                                        return c.protocol === m && c.hostname === a.hostname && g.Rl(b.XHRMonitor.Dj[m], c.port, a.port);
                                    };
                                    g.Rl = function (a, b, c) {
                                        return (b || a) === (c || a);
                                    };
                                    return g;
                                }(b.xc);
                            e.Dj = {
                                'http:': '80',
                                'https:': '443'
                            };
                            b.wa = e;
                        }(a.monitor || (a.monitor = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = a.utils.va, e = a.utils.wc, c = a.utils.mergeJSON, g = a.events.AdrumAjax, f = a.utils.isString, n = a.utils.isDefined, m = a.utils.isNumber, q = a.utils.getFullyQualifiedUrl, t = a.conf.spa2;
                            b.eb = null;
                            b.qh = window.fetch;
                            var p = function (p) {
                                function k() {
                                    return null !== p && p.apply(this, arguments) || this;
                                }
                                v(k, p);
                                k.prototype.Pk = function () {
                                    var a = this, c = Object.getOwnPropertyDescriptor(window, 'fetch');
                                    if (!c || c.configurable) {
                                        c && delete c.writable;
                                        c && delete c.value;
                                        c || (c = {
                                            configurable: !0,
                                            enumerable: !0
                                        });
                                        var f = c.set, m = c.get;
                                        c.set = function (c) {
                                            !0 !== c.isAgentFetch && (n(f) && f.apply(this, arguments), n(b.eb) || a.setUp(c));
                                        };
                                        c.get = function () {
                                            var a = b.qh;
                                            n(m) && (a = m.apply(this, arguments));
                                            n(b.eb) && (a = b.eb);
                                            return a;
                                        };
                                    }
                                    Object.defineProperty(window, 'fetch', c);
                                };
                                k.prototype.setUp = function (f) {
                                    var m = this;
                                    f = f || window.fetch || b.qh;
                                    a.log('M117');
                                    if (n(f)) {
                                        var q = function (c) {
                                            return function (f, g) {
                                                const $___old_cc83212fa4a7753e = {}.constructor.getOwnPropertyDescriptor(window, 'fetch');
                                                try {
                                                    if ($___old_cc83212fa4a7753e)
                                                        ({}.constructor.defineProperty(window, 'fetch', $___mock_7808ab4cf8556c37.fetch));
                                                    return function () {
                                                        var n = arguments;
                                                        a.log('M118', m._adrumAjaxT.url(), m._adrumAjaxT.method());
                                                        var l = a.utils.now();
                                                        b.wa.Qf(m._adrumAjaxT.url()) && (n = k.Ti(arguments));
                                                        var q = c.apply(this, n), p = new window.Promise(function (b, c) {
                                                                q.then(function (c) {
                                                                    a.log('M119', m._adrumAjaxT.url());
                                                                    a.log('M120', l, m._adrumAjaxT.url());
                                                                    e.Um(c, p._adrumAjaxT);
                                                                    p._adrumAjaxT.markFirstByteTime(p._adrumAjaxT.getFirstByteTime() || a.utils.now());
                                                                    p._adrumAjaxT.response = c;
                                                                    if (h(c.clone)) {
                                                                        a.log('M121', m._adrumAjaxT.url());
                                                                        var f = c.clone().text();
                                                                        f['catch'](function () {
                                                                            k.Tc(p);
                                                                        });
                                                                        k.zk(f, p);
                                                                    } else
                                                                        a.log('M122', m._adrumAjaxT.url()), k.ym(p, c);
                                                                    b(c);
                                                                });
                                                                q['catch'](function (b) {
                                                                    a.log('M123', m._adrumAjaxT.url());
                                                                    p._adrumAjaxT.markFirstByteTime(p._adrumAjaxT.getFirstByteTime() || a.utils.now());
                                                                    k.Tc(p);
                                                                    c(b);
                                                                });
                                                            });
                                                        p._adrumAjaxT = m._adrumAjaxT;
                                                        p.I = !0;
                                                        p._adrumAjaxT.timestamp(l);
                                                        p._adrumAjaxT.markSendTime(l);
                                                        p._adrumAjaxT.parentPhase(a.lifecycle.getPhaseName());
                                                        k.sm(p._adrumAjaxT, arguments);
                                                        a.log('M124', l, m._adrumAjaxT.url());
                                                        t && (p.h = new a.Eb(a.c.ja(), new a.La('window.fetch'), a.CauseType.FETCH));
                                                        return p;
                                                    }.apply(this, arguments);
                                                } finally {
                                                    if ($___old_cc83212fa4a7753e)
                                                        ({}.constructor.defineProperty(window, 'fetch', $___old_cc83212fa4a7753e));
                                                }
                                            };
                                        };
                                        q.isAgentFetch = !0;
                                        b.eb = a.aop.around(q(f), function () {
                                            var f = k.sk(arguments);
                                            !t && ++m.da + b.xhrMonitor.da >= l.maxPerPageView || l.mc(f.url, f.method) ? a.log('M125', f.url) : (m._adrumAjaxT = new g(c(f, m.status)), t && (m.h = a.c.Pa('window.fetch.send', void 0, a.c.ja(), a.CauseType.FETCH), a.c.ra(m.h)));
                                        }, function () {
                                            !t && m.da + b.xhrMonitor.da >= l.maxPerPageView ? a.log('M126', m._adrumAjaxT.url()) : l.mc(m._adrumAjaxT.url(), m._adrumAjaxT.method()) ? a.log('M127', m._adrumAjaxT.url()) : t && (a.j.n.G.Ce(m._adrumAjaxT.url()), a.c.L());
                                        }, 'fetch', b.wa.l);
                                        window.fetch = b.eb;
                                    }
                                };
                                k.zk = function (b, c) {
                                    b.then(function (b) {
                                        var f = a.utils.now();
                                        k.ba(c) && (c._adrumAjaxT.response.responseText = b, k.ag(c._adrumAjaxT, f), b = c._adrumAjaxT.getRespProcTime(), n(b) || n(c._adrumAjaxT.w) && 0 !== c._adrumAjaxT.w || (a.log('M128', f, c._adrumAjaxT.url()), c._adrumAjaxT.markRespProcTime(f), k.Ua(c)));
                                    })['catch'](function () {
                                        k.Tc(c);
                                    });
                                };
                                k.Tc = function (b) {
                                    a.log('M129', b._adrumAjaxT.url());
                                    var c = a.utils.now();
                                    k.ba(b) && (k.ag(b._adrumAjaxT, c), k.bg(b._adrumAjaxT, c), k.Ua(b));
                                };
                                k.ag = function (b, c) {
                                    var f = b.getRespAvailTime();
                                    n(f) || (a.log('M130', c, b.url()), b.markRespAvailTime(c));
                                };
                                k.bg = function (b, c) {
                                    var f = b.getRespProcTime();
                                    if (n(f))
                                        return !1;
                                    a.log('M131', c, b.url());
                                    b.markRespProcTime(c);
                                    return !0;
                                };
                                k.ym = function (a, b) {
                                    b.gj = k.Bb(a, b.gj);
                                    b.nj = k.Bb(a, b.nj);
                                    b.Wj = k.Bb(a, b.Wj);
                                    b.tl = k.Bb(a, b.tl);
                                    b.text = k.Bb(a, b.text);
                                };
                                k.Bb = function (b, c) {
                                    return a.aop.around(c, function () {
                                        k.ba(b) && b._adrumAjaxT.markRespAvailTime(a.utils.now());
                                    }, function () {
                                        k.ba(b) && (b._adrumAjaxT.markRespProcTime(a.utils.now()), k.Ua(b));
                                    }, 'wrapResponseReader', a.monitor.ErrorMonitor.l);
                                };
                                k.Ti = function (a) {
                                    1 == a.length ? f(a[0]) ? ([].push.call(a, {}), k.Fc(a[1])) : k.Fc(a[0]) : 2 == a.length && k.Fc(a[1]);
                                    return a;
                                };
                                k.Fc = function (b) {
                                    n(b) && (n(b.headers) || (b.headers = new Headers(), a.log('M132')), b.headers instanceof Headers ? b.headers.has('ADRUM') ? b.headers.set('ADRUM', 'isAjax:true') : b.headers.append('ADRUM', 'isAjax:true') : b.headers.ADRUM = 'isAjax:true');
                                };
                                k.sm = function (b, c) {
                                    2 <= c.length && a.utils.isObject(c[1]) && n(c[1].body) && l.Wg(b, c[1].body);
                                };
                                k.sk = function (b) {
                                    var c = {
                                        url: '',
                                        method: ''
                                    };
                                    a.utils.isObject(b[0]) ? (c.url = b[0].url || (a.utils.isDefined(b[0].toString) ? b[0].toString() : void 0), c.method = b[0].method || 'GET') : f(b[0]) && (c.url = b[0], c.method = b[1] && b[1].method || 'GET');
                                    c.url = n(c.url) ? c.url : '';
                                    c.url = q(c.url);
                                    c.method = c.method;
                                    return c;
                                };
                                k.Jk = function (b) {
                                    var c;
                                    n(c) || (a.log('M133', b._adrumAjaxT.url()), c = 1);
                                    n(b._adrumAjaxT.w) && m(b._adrumAjaxT.w) && (b._adrumAjaxT.w += c, a.log('M134', b._adrumAjaxT.w, b._adrumAjaxT.url()));
                                };
                                k.Nb = function (b) {
                                    var c;
                                    n(c) || (a.log('M135', b._adrumAjaxT.url()), c = 1);
                                    n(b._adrumAjaxT.w) && m(b._adrumAjaxT.w) && (b._adrumAjaxT.w -= c, a.log('M136', b._adrumAjaxT.w, b._adrumAjaxT.url()));
                                };
                                k.ba = function (a) {
                                    return n(a._adrumAjaxT);
                                };
                                k.Sb = function (a) {
                                    return n(a._adrumAjaxT.w);
                                };
                                k.Wm = function (b, c) {
                                    b._adrumAjaxT = c._adrumAjaxT;
                                    b._adrumAjaxT.w += b.D;
                                    a.log('M137', b._adrumAjaxT.w, c._adrumAjaxT.url());
                                    b.D = 0;
                                };
                                k.Zm = function (a) {
                                    var b = !1;
                                    k.ba(a) && n(a._adrumAjaxT.w) && (k.Jk(a), b = !0);
                                    return b;
                                };
                                k.Ua = function (a) {
                                    e.wd(a, a._adrumAjaxT);
                                };
                                k.Qd = function (b) {
                                    var c = a.utils.now();
                                    return 0 === b._adrumAjaxT.w && n(b._adrumAjaxT) ? k.bg(b._adrumAjaxT, c) : !1;
                                };
                                k.Pd = function (b) {
                                    var c = !1, f = a.utils.now(), m = b._adrumAjaxT.getRespAvailTime();
                                    n(m) || (b._adrumAjaxT.markRespAvailTime(f), c = !0);
                                    return c;
                                };
                                k.Lk = function (b) {
                                    a.log('M138', b._adrumAjaxT.url());
                                    b._adrumAjaxT.w = 0;
                                };
                                return k;
                            }(b.wa);
                            b.ee = p;
                            b.jb = new b.ee();
                        }(a.monitor || (a.monitor = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = a.utils.isObject, e = a.utils.map, c = a.utils.reduce, g = a.utils.filter, f = a.utils.isDefined, n = a.utils.isString, m = a.utils.mergeJSON, q = a.utils.xa, t = a.utils.hc, p = a.utils.va, k = a.utils.wc, r = a.conf.spa2, w = function (w) {
                                    function u() {
                                        const $___old_abfa619c62e4e158 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                                        try {
                                            if ($___old_abfa619c62e4e158)
                                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_d59384066fb62f91.XMLHttpRequest));
                                            return function () {
                                                var b = w.call(this) || this;
                                                b.Id = !1;
                                                if (!0 === window['adrum-xhr-disable'])
                                                    return a.log('M139'), b;
                                                if (!window.XMLHttpRequest)
                                                    return a.log('M140'), b;
                                                b.C = window.XMLHttpRequest.prototype;
                                                if (!b.C)
                                                    return a.log('M141'), b;
                                                if (!('open' in b.C && 'send' in b.C))
                                                    return a.log('M142'), b;
                                                b.Id = a.aop.support(b.C.open) && a.aop.support(b.C.send);
                                                b.Id || a.log('M143');
                                                return b;
                                            }.apply(this, arguments);
                                        } finally {
                                            if ($___old_abfa619c62e4e158)
                                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_abfa619c62e4e158));
                                        }
                                    }
                                    v(u, w);
                                    u.prototype.setUp = function () {
                                        const $___old_24048f3e8ebaf79e = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                                        try {
                                            if ($___old_24048f3e8ebaf79e)
                                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_d59384066fb62f91.XMLHttpRequest));
                                            return function () {
                                                if (this.Id) {
                                                    a.log('M144');
                                                    a.xhrConstructor = window.XMLHttpRequest;
                                                    a.xhrOpen = this.xhrOpen = this.C.open;
                                                    a.xhrSend = this.xhrSend = this.C.send;
                                                    p.setUp();
                                                    var c = this;
                                                    this.C.open = a.aop.around(this.C.open, function () {
                                                        u.jl(this) && (4 === this.readyState ? (a.log('M145'), u.Oj(this._adrumAjaxT), delete this.Ae, k.reportXhr(this, this._adrumAjaxT)) : a.log('M146', this._adrumAjaxT.url()));
                                                        var f = 1 <= arguments.length ? String(arguments[0]) : '', g = 2 <= arguments.length ? String(arguments[1]) : '', g = a.utils.getFullyQualifiedUrl(g);
                                                        !r && c.da + b.jb.da >= p.maxPerPageView || p.mc(g, f) || (this._adrumAjaxT = new a.events.AdrumAjax(m({
                                                            method: f,
                                                            url: g
                                                        }, c.status)));
                                                    }, null, 'XHR.open', b.wa.l);
                                                    this.C.send = a.aop.around(this.C.send, function (f) {
                                                        var m = this, n = this._adrumAjaxT, e = !1;
                                                        if (!(!n || !r && ++c.da + b.jb.da >= p.maxPerPageView)) {
                                                            var l = a.utils.now(), q = n.getSendTime();
                                                            a.assert(null === q, 'M147');
                                                            n.timestamp(l);
                                                            n.markSendTime(q || l);
                                                            n.parentPhase(a.lifecycle.getPhaseName());
                                                            r && (m.h = a.c.Pa('XHR.send', void 0, a.c.ja(), a.CauseType.XHR));
                                                            b.wa.Qf(n.url()) ? m.setRequestHeader('ADRUM', 'isAjax:true') : a.log('M148', document.location.href, n.url());
                                                            p.Wg(n, f);
                                                            f = u.ok(n.url(), p.parameter, f);
                                                            n.parameter(f);
                                                            var k = 0, s = function () {
                                                                    if (4 == m.readyState)
                                                                        e ? a.log('M149') : (a.log('M150'), c.uc(m));
                                                                    else {
                                                                        var b = null;
                                                                        try {
                                                                            b = m.onreadystatechange;
                                                                        } catch (f) {
                                                                            if (e) {
                                                                                a.log('M151', f);
                                                                                return;
                                                                            }
                                                                            a.log('M152', f);
                                                                            c.uc(m);
                                                                            return;
                                                                        }
                                                                        k++;
                                                                        b ? a.aop.support(b) ? (m.onreadystatechange = u.Ze(b, 'XHR.onReadyStateChange'), g && c.th.call(m, 'readystatechange', u.bf), a.log('M153', k)) : g || (a.log('M154'), c.uc(m)) : k < u.Qi ? t(s) : e ? a.log('M155') : (a.log('M156'), c.uc(m));
                                                                    }
                                                                };
                                                            if (g) {
                                                                a.log('M157');
                                                                try {
                                                                    c.kn.call(m, 'readystatechange', u.bf), e = !0;
                                                                } catch (w) {
                                                                    a.error('M158', w);
                                                                }
                                                            }
                                                            s();
                                                        }
                                                    }, function () {
                                                        if (r) {
                                                            var b = this._adrumAjaxT;
                                                            b && a.j.n.G.Ce(b.url());
                                                        }
                                                    }, 'XHR.send', b.wa.l);
                                                    var g = 'addEventListener' in this.C && 'removeEventListener' in this.C && a.aop.support(this.C.addEventListener) && a.aop.support(this.C.removeEventListener);
                                                    if (g) {
                                                        var n = a.utils.of(this.C, 'addEventListener');
                                                        this.kn = n.addEventListener;
                                                        n.addEventListener = a.aop.around(n.addEventListener, function (b, c, m) {
                                                            const $___old_e7eb06d111f9466c = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                                                            try {
                                                                if ($___old_e7eb06d111f9466c)
                                                                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_d59384066fb62f91.XMLHttpRequest));
                                                                return function () {
                                                                    if (f(c) && (c.I = !0, this instanceof XMLHttpRequest && /^(load|error|readystatechange)$/.test(b) && c)) {
                                                                        var g = u.Qm(c);
                                                                        if (g) {
                                                                            var n = q(arguments);
                                                                            n[1] = g;
                                                                            a.log('M159');
                                                                            return n;
                                                                        }
                                                                        a.log('M160', b, c);
                                                                    }
                                                                }.apply(this, arguments);
                                                            } finally {
                                                                if ($___old_e7eb06d111f9466c)
                                                                    ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_e7eb06d111f9466c));
                                                            }
                                                        }, null, 'XHR.addEventListener');
                                                        n = a.utils.of(this.C, 'removeEventListener');
                                                        this.th = n.removeEventListener;
                                                        n.removeEventListener = a.aop.around(n.removeEventListener, function (b, f, m) {
                                                            if (this instanceof XMLHttpRequest && this._adrumAjaxT) {
                                                                var g = q(arguments);
                                                                f.__adrumInterceptor ? (g[1] = f.__adrumInterceptor, a.log('M161'), c.th.apply(this, g)) : a.log('M162');
                                                            }
                                                        }, null, 'XHR.removeEventListener');
                                                    } else
                                                        a.log('M163');
                                                    a.log('M164');
                                                }
                                            }.apply(this, arguments);
                                        } finally {
                                            if ($___old_24048f3e8ebaf79e)
                                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_24048f3e8ebaf79e));
                                        }
                                    };
                                    u.ok = function (b, f, n) {
                                        if (f && (f = g(e(g(f, function (c) {
                                                return a.utils.eg(b, c.urls);
                                            }), function (a) {
                                                return a.getFromBody(n);
                                            }), l), 0 < f.length))
                                            return c(f, m, {});
                                    };
                                    u.ad = function (b) {
                                        var c = b._adrumAjaxT;
                                        if (c) {
                                            var f = a.utils.now();
                                            2 == b.readyState ? c.markFirstByteTime(c.getFirstByteTime() || f) : 4 == b.readyState && (c.markRespAvailTime(c.getRespAvailTime() || f), c.markFirstByteTime(c.getFirstByteTime() || f), r && (b = b.h = a.c.Pa('XHR.load', void 0, b.h, a.CauseType.XHR), a.c.ra(b)));
                                        }
                                    };
                                    u.Af = function (b) {
                                        var c = b._adrumAjaxT;
                                        if (c && 4 == b.readyState) {
                                            var f = a.utils.now(), m = c.getRespProcTime();
                                            c.markRespAvailTime(c.getRespAvailTime() || f);
                                            f > m && c.markRespProcTime(f);
                                            k.wd(b, c);
                                            a.conf.spa2 && a.c.L();
                                        }
                                    };
                                    u.Ze = function (a, b) {
                                        return u.ln(a, function () {
                                            u.ad(this);
                                        }, function () {
                                            u.Af(this);
                                        }, b);
                                    };
                                    u.bf = function () {
                                        u.ad(this);
                                        u.Af(this);
                                    };
                                    u.jl = function (a) {
                                        return f(a._adrumAjaxT) && n(a._adrumAjaxT._url);
                                    };
                                    u.Oj = function (b) {
                                        var c = a.utils.now();
                                        b.markRespAvailTime(b.getRespAvailTime() || c);
                                        b.markFirstByteTime(b.getFirstByteTime() || c);
                                        b.markRespProcTime(b.getRespProcTime() || c);
                                    };
                                    u.prototype.uc = function (b) {
                                        if (b._adrumAjaxT) {
                                            var c = a.utils.now() + 30000, f = function () {
                                                    u.ad(b);
                                                    var m = b._adrumAjaxT;
                                                    if (m) {
                                                        var g = a.utils.now();
                                                        4 == b.readyState ? (a.assert(null === m.getRespProcTime(), 'M165'), m.markRespProcTime(m.getRespProcTime() || g), a.log('M166'), k.wd(b, m), a.conf.spa2 && a.c.L()) : g < c ? a.utils.oSTO(f, u.be) : (delete b._adrumAjaxT, a.log('M167'));
                                                    }
                                                };
                                            f();
                                        }
                                    };
                                    u.ln = function (b, c, f, m) {
                                        var g = b;
                                        b && 'object' === typeof b && 'toString' in b && '[xpconnect wrapped nsIDOMEventListener]' === b.toString() && 'handleEvent' in b && (g = function () {
                                            b.handleEvent.apply(this, q(arguments));
                                        });
                                        return a.aop.around(g, c, f, m);
                                    };
                                    u.Qm = function (b) {
                                        if (b.__adrumInterceptor)
                                            return b.__adrumInterceptor;
                                        if (a.aop.support(b)) {
                                            var c = u.Ze(b, 'XHR.invokeEventListener');
                                            return b.__adrumInterceptor = c;
                                        }
                                    };
                                    return u;
                                }(b.wa);
                            w.Qi = 5;
                            w.be = 50;
                            b.XHRMonitor = w;
                            b.xhrMonitor = new b.XHRMonitor();
                        }(a.monitor || (a.monitor = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = a.utils.wc, e = function (c) {
                                    function g(b) {
                                        b = c.call(this, b) || this;
                                        b.perf = new a.PerformanceTracker();
                                        b.$e = !1;
                                        b.Ke = 0;
                                        return b;
                                    }
                                    v(g, c);
                                    g.prototype.type = function () {
                                        return a.EventType.VPageView;
                                    };
                                    g.prototype.Wc = function () {
                                        return b.EventTracker.Ec(this.guid(), this.url(), this.type());
                                    };
                                    g.prototype.Fd = function () {
                                        var b = this.Wc();
                                        a.monitor.ha.set('parent', b);
                                        a.log('M168', b.guid(), b.url());
                                    };
                                    g.prototype.startCorrelatingXhrs = function () {
                                        a.log('M169');
                                        a.utils.isDefined(this.fb) && !a.monitor.AnySpaMonitor.Ca && l.yl(this, this.fb.guid);
                                    };
                                    g.prototype.start = function () {
                                        this.startCorrelatingXhrs();
                                        this.Fd();
                                    };
                                    return g;
                                }(b.EventTracker);
                            b.AnySpaVPageView = e;
                            b.Na(b.U[a.EventType.VPageView], e.prototype);
                        }(a.events || (a.events = {})));
                    }(k || (k = {})));
                    (function (a) {
                        a.report = function (b) {
                            a.utils.isObject(b) && a.utils.isFunction(b.type) ? -1 == [
                                a.EventType.PageView,
                                a.EventType.Ajax,
                                a.EventType.VPageView,
                                a.EventType.Error
                            ].indexOf(b.type()) ? a.reportAPIMessage(a.W.ma, b.type() + 'is not a valid external event type', 'ADRUM.report', Array.prototype.slice.call(arguments)) : a.conf.spa2 && a.EventType.VPageView == b.type() ? a.log('M170') : a.utils.hc(function () {
                                a.command('reportEvent', b);
                            }) : a.reportAPIMessage(a.W.Wd, '', 'ADRUM.report', Array.prototype.slice.call(arguments));
                        };
                        a.markVirtualPageBegin = function (b, l) {
                            a.conf.spa2 && (this.Qa = a.utils.isDefined(l) ? l : !0, a.log('M171', document.URL), a.monitor.AnySpaMonitor.Dd(document.URL, b, !0), a.monitor.AnySpaMonitor.Rg());
                        };
                        a.markVirtualPageEnd = function () {
                            a.conf.spa2 && this.Qa && (a.log('M172', a.monitor.AnySpaMonitor.ka), a.monitor.AnySpaMonitor.cg(a.monitor.AnySpaMonitor.vp.startTime, a.utils.now()), this.Qa = !1);
                        };
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = a.utils.isDefined, e = a.aop.after, c = a.aop.before, g = function () {
                                    function f() {
                                    }
                                    f.prototype.setUp = function () {
                                        var b = !1;
                                        f.ya = a.utils.ib();
                                        a.c.setUp();
                                        a.ce.setUp();
                                        f.vm();
                                        a.j.n.setUp(a.utils.now());
                                        f.ka = document.URL;
                                        f.Sc = [];
                                        a.utils.isDefined(window.history) && a.utils.isFunction(window.history.pushState) && (b = !0, f.Be('push'));
                                        a.utils.isDefined(window.history) && a.utils.isFunction(window.history.replaceState) && (b = !0, f.Be('replace'));
                                        f.Sc = f.Sc.concat(a.utils.Ab(a.utils.qc, a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.spa2 && a.utils.isObject(a.conf.userConf.spa.spa2) && a.conf.userConf.spa.spa2.vp && a.conf.userConf.spa.spa2.vp.exclude));
                                        if (a.utils.isDefined(window.addEventListener)) {
                                            var b = !0, c = function () {
                                                    f.ka != document.URL && f.Sg();
                                                };
                                            c.I = !0;
                                            window.addEventListener('popstate', c);
                                        }
                                        b || a.log('M173');
                                    };
                                    f.Be = function (a) {
                                        switch (a) {
                                        case 'push':
                                            window.history.pushState = f.Vg(window.history.pushState, a);
                                            break;
                                        case 'replace':
                                            window.history.replaceState = f.Vg(window.history.replaceState, a);
                                        }
                                    };
                                    f.Vg = function (c, m) {
                                        var g = m[0].toUpperCase() + m.slice(1);
                                        return a.aop.around(c, function () {
                                            b.DOMEventsMonitor.$b && !a.Qa && (a.log('M174', m), f.Dd(document.URL));
                                        }, function () {
                                            b.DOMEventsMonitor.$b && (a.Qa ? (a.log('M175', m), f.vp.url(document.URL)) : (a.log('M176', m), f.Rg()));
                                            f.ka = document.URL;
                                        }, 'history' + g + 'State');
                                    };
                                    f.Sg = function () {
                                        var c = document.URL;
                                        a.log('M177', f.ka, c);
                                        b.DOMEventsMonitor.$b && (a.Qa ? (a.log('M178'), f.vp.url(document.URL)) : (f.Dd(f.ka), f.Gd(c)));
                                        f.ka = c;
                                    };
                                    f.vm = function () {
                                        var b;
                                        a.c.ra = e(a.c.ra, function () {
                                            b = location.hash;
                                        });
                                        a.c.L = c(a.c.L, function () {
                                            b != location.hash && f.ka != document.URL && f.Sg();
                                        });
                                    };
                                    f.Dd = function (a, b, c) {
                                        f.pm();
                                        f.Ca = !1;
                                        f.Ye(a, b, c);
                                    };
                                    f.Rg = function () {
                                        var a = document.URL;
                                        f.Gd(a);
                                        f.ka = a;
                                    };
                                    f.Kn = function () {
                                        f.Ca = !0;
                                        f.Ye(f.ka);
                                        f.Gd();
                                    };
                                    f.pm = function () {
                                        var c = a.j.n;
                                        a.conf.P && a.j.Fb.Ga && a.utils.isDefined(b.DOMEventsMonitor.currentBasePage) && (a.log('M179'), c.G.B || c.J.B ? c.navComplete(a.utils.now()) : c.navComplete(a.utils.max(c.G.Ea, c.J.ca)), c.reset());
                                        f.Ca || !a.utils.isDefined(f.vp) || f.vp.Eg || (a.log('M180'), c = f.ek(a.j.n.B), f.cg(f.vp.startTime, c));
                                    };
                                    f.ek = function (b) {
                                        var c = a.utils.now();
                                        b ? (c = f.fk(a.j.n.Ra), a.j.n.reset()) : c = f.vp.timestamp();
                                        return c;
                                    };
                                    f.Am = function (b, c) {
                                        return f.vp.$e ? !1 : l(c) && 0 < c.length && a.utils.Wb(void 0, b, c);
                                    };
                                    f.fk = function (b) {
                                        var c = a.utils.now();
                                        b ? a.j.n.J.ej() || a.j.n.G.fj() || (c = a.utils.max(a.j.n.J.ca, a.j.n.G.Ea)) : c = a.j.n.startTime;
                                        return c;
                                    };
                                    f.cg = function (a, b) {
                                        f.kd(a, b);
                                        f.$f(a);
                                        f.report();
                                    };
                                    f.Ye = function (b, c, g) {
                                        f.reset();
                                        f.vp = new a.events.AnySpaVPageView();
                                        f.vp.startUrl = b;
                                        a.utils.isDefined(c) && (f.vp.userPageName = c);
                                        a.utils.isBoolean(g) && (f.vp.$e = g);
                                        b = a.c.Hc();
                                        f.vp.startTime = f.Ca ? a.utils.ib() : a.utils.isDefined(b) ? b.start : a.utils.now();
                                        f.vp.fb = b;
                                    };
                                    f.Gd = function (b) {
                                        a.utils.isDefined(b) && f.vp.url(b);
                                        f.vp.start();
                                        a.Qa || a.j.n.start(a.utils.now());
                                    };
                                    f.kd = function (b, c) {
                                        a.utils.isDefined(f.vp) && (a.conf.P && f.rj(b), a.utils.isDefined(c) ? a.conf.P ? f.vp.timestamp(c - b > f.vp.vct ? c : f.vp.vct + b) : f.vp.timestamp(c) : f.vp.timestamp(b));
                                    };
                                    f.rj = function (b) {
                                        a.log('M181');
                                        b = a.N.Ve(b);
                                        f.vp.vct = b.vct;
                                        a.N.reset();
                                    };
                                    f.$f = function (c) {
                                        a.utils.isDefined(f.vp) && f.vp.resTiming(b.resourceMonitor.uk(f.ya, c));
                                    };
                                    f.cd = function () {
                                        var b = a.c.xk();
                                        return a.utils.isDefined(b) && a.utils.isDefined(f.vp) && (!a.utils.isDefined(f.vp.fb) || f.vp.fb != b);
                                    };
                                    f.report = function () {
                                        if (a.utils.isDefined(f.vp))
                                            if (f.Am(f.vp.url(), f.Sc))
                                                a.log('M183', f.vp.url());
                                            else {
                                                a.log('M184');
                                                var c = f.vp;
                                                if (c.Eg)
                                                    a.log('M185');
                                                else {
                                                    var m = a.utils.isDefined(b.DOMEventsMonitor.currentBasePage) ? b.DOMEventsMonitor.currentBasePage.url() : document.URL;
                                                    c.parentUrl(m);
                                                    a.command('call', function () {
                                                        a.reporter.reportEvent(c);
                                                    });
                                                    c.Eg = !0;
                                                }
                                            }
                                        else
                                            a.log('M182');
                                    };
                                    f.reset = function () {
                                        f.vp = null;
                                    };
                                    return f;
                                }();
                            b.AnySpaMonitor = g;
                            b.dj = new b.AnySpaMonitor();
                        }(a.monitor || (a.monitor = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = function () {
                                function e() {
                                    this.J = new b.Nh();
                                    this.G = new b.Dh();
                                    this.Bl = 3000;
                                    this.maxInactiveTime = a.conf.userConf && a.conf.userConf.navComplete && a.conf.userConf.navComplete.maxInactiveTime ? a.conf.userConf.navComplete.maxInactiveTime : Math.max(this.J.qb, this.G.qb) + this.Bl;
                                    this.tg = 1000;
                                }
                                e.prototype.setUp = function (a) {
                                    this.currentTime = this.startTime = a;
                                    this.B = this.Ra = !1;
                                    this.J.setUp(a);
                                    this.G.setUp(a);
                                };
                                e.prototype.start = function (a) {
                                    this.setUp(a);
                                    this.B = !0;
                                    this.J.start(a);
                                    this.G.start(a);
                                    this.Qe();
                                    this.Em();
                                };
                                e.prototype.Em = function () {
                                    this.eh = a.utils.refs.setInterval.call(window, function () {
                                        a.Q();
                                        this.currentTime = a.utils.now();
                                        var b = a.utils.max(this.J.ca, this.G.Ea);
                                        if (this.currentTime - b >= this.maxInactiveTime) {
                                            if (a.conf.P && e.Ga && !a.utils.isDefined(a.monitor.DOMEventsMonitor.currentBasePage)) {
                                                a.log('M186');
                                                e.Oa = e.Oa || this.Ra ? this.currentTime : b;
                                                return;
                                            }
                                            this.currentTime = e.Oa || this.currentTime;
                                            a.log('M187');
                                            this.navComplete(this.Ra ? this.currentTime : b);
                                            this.reset();
                                        }
                                        a.R();
                                    }.bind(this), this.tg);
                                };
                                e.prototype.Yg = function () {
                                    this.Ra || (this.Cm(), this.Ra = !0);
                                };
                                e.prototype.Qe = function () {
                                    a.utils.isDefined(this.zg) && clearInterval(this.zg);
                                    a.utils.isDefined(this.eh) && clearInterval(this.eh);
                                };
                                e.prototype.reset = function () {
                                    this.Qe();
                                    this.B = this.Ra = !1;
                                    this.J.reset();
                                    this.G.reset();
                                };
                                e.prototype.navComplete = function (b) {
                                    a.Q();
                                    var g = a.utils.isDefined(a.monitor.AnySpaMonitor.vp && a.monitor.AnySpaMonitor.vp.startTime) ? a.monitor.AnySpaMonitor.vp.startTime : this.startTime;
                                    a.log('M188', b - g);
                                    a.conf.P ? e.Ga ? (a.monitor.PerformanceWrapper.perf && (a.monitor.navMonitor.Xe(), a.monitor.resourceMonitor.We()), a.log('M189'), b = a.N.Ve(a.utils.ib()), a.monitor.DOMEventsMonitor.currentBasePage.vct = b.vct, a.conf.spa2 && (a.monitor.DOMEventsMonitor.currentBasePage.pct = b.pct), a.command('reportOnload', a.monitor.DOMEventsMonitor.currentBasePage), a.N.reset(), a.N.Aa = !1, e.Ga = !1) : a.monitor.AnySpaMonitor.kd(g, b) : (a.monitor.resourceMonitor.basePageResourceBuffer = [], a.monitor.AnySpaMonitor.kd(g, b));
                                    a.monitor.AnySpaMonitor.Ca || (a.monitor.AnySpaMonitor.$f(g), a.monitor.AnySpaMonitor.report());
                                    a.R();
                                };
                                e.prototype.Cm = function () {
                                    this.zg = a.utils.refs.setInterval.call(window, function () {
                                        a.Q();
                                        this.currentTime = a.utils.now();
                                        var b = this.J.bd(this.currentTime);
                                        0 <= b && a.log('M190', b - this.startTime);
                                        b = this.G.bd(this.currentTime);
                                        0 <= b && a.log('M191', b - this.startTime);
                                        if (!this.G.B && !this.J.B) {
                                            b = a.utils.max(this.G.Ea, this.J.ca);
                                            if (a.conf.P && e.Ga && !a.utils.isDefined(a.monitor.DOMEventsMonitor.currentBasePage)) {
                                                a.log('M192');
                                                e.Oa = e.Oa || b;
                                                return;
                                            }
                                            b = e.Oa || b;
                                            a.log('M193');
                                            this.navComplete(b);
                                            this.reset();
                                        }
                                        a.R();
                                    }.bind(this), this.tg);
                                };
                                return e;
                            }();
                            l.Ga = !0;
                            l.Oa = 0;
                            b.Fb = l;
                            b.n = new b.Fb();
                        }(a.j || (a.j = {})));
                    }(k || (k = {})));
                    (function (a) {
                        var b = function () {
                            function b() {
                                this.oc = [];
                                this.fc(b.Dc, 0);
                            }
                            b.prototype.Fl = function (a) {
                                this.fc(b.De, a);
                            };
                            b.prototype.Hl = function (a) {
                                this.fc(b.Le, a);
                            };
                            b.prototype.Gl = function (a) {
                                this.fc(b.Fe, a);
                            };
                            b.prototype.fc = function (a, b) {
                                this.oc.push({
                                    El: new Date().getTime(),
                                    Dl: b,
                                    qg: a
                                });
                                this.zj = a;
                            };
                            b.prototype.getPhaseName = function () {
                                return this.zj;
                            };
                            b.prototype.getPhaseID = function (a) {
                                for (var c = 0; c < b.Ie.length; c++)
                                    if (b.Ie[c] === a)
                                        return c;
                                return null;
                            };
                            b.prototype.getPhaseCallbackTime = function (a) {
                                for (var b = this.oc, g = 0; g < b.length; g++)
                                    if (b[g].qg === a)
                                        return b[g].El;
                                return null;
                            };
                            b.prototype.findPhaseAtNominalTime = function (e) {
                                a.assert(0 <= e);
                                for (var c = this.oc, g = c.length - 1; 0 <= g; g--)
                                    if (e >= c[g].Dl)
                                        return c[g].qg;
                                a.error('M194', e, a.utils.dumpObject(c));
                                return b.Dc;
                            };
                            return b;
                        }();
                        b.Dc = 'AFTER_FIRST_BYTE';
                        b.De = 'AFTER_DOM_INTERACTIVE';
                        b.Le = 'AT_ONLOAD';
                        b.Fe = 'AFTER_ONLOAD';
                        b.Ie = [
                            b.Dc,
                            b.De,
                            b.Le,
                            b.Fe
                        ];
                        a.PageLifecycleTracker = b;
                        a.lifecycle = new b();
                        a.lifecycle = a.lifecycle;
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = function (b) {
                                function c(c) {
                                    c = b.call(this, c) || this;
                                    c.backTimeGap = a.conf.backTimeGap;
                                    return c;
                                }
                                v(c, b);
                                c.prototype.type = function () {
                                    return a.EventType.PageView;
                                };
                                return c;
                            }(b.EventTracker);
                            b.PageView = l;
                        }(a.events || (a.events = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = a.utils.now, e = function () {
                                    function c() {
                                    }
                                    c.prototype.setUp = function () {
                                        var b = document.readyState;
                                        if ('loading' === b)
                                            a.log('M195'), c.wm(), c.Ug();
                                        else {
                                            var f = { timeStamp: l() };
                                            c.Za(f);
                                            'interactive' === b ? (a.log('M196'), c.Ug()) : (a.log('M197'), c.tb(f), c.lg(f));
                                        }
                                    };
                                    c.Ug = function () {
                                        a.utils.addEventListener(window, 'load', c.tb);
                                        a.utils.addEventListener(window, 'load', c.lg);
                                    };
                                    c.lg = function (g) {
                                        c.currentBasePage = new a.events.PageView();
                                        a.lifecycle.Hl(g && g.timeStamp);
                                        a.utils.hc(function () {
                                            var f = l();
                                            a.lifecycle.Gl(f);
                                            a.command('mark', 'onload', f);
                                            c.$b = !0;
                                            a.conf.P ? a.N.Fj() : (b.PerformanceWrapper.perf && (b.navMonitor.Xe(), b.resourceMonitor.We()), a.command('reportOnload', c.currentBasePage));
                                            !a.conf.P && a.conf.spa2 && a.conf.modernBrowserFeaturesAvailable && a.j.n.J.Tg();
                                            a.utils.loadScriptAsync(a.conf.adrumExtUrl);
                                        });
                                        a.log('M198');
                                    };
                                    c.wm = function () {
                                        if (a.utils.isFunction(document.addEventListener))
                                            document.addEventListener('DOMContentLoaded', c.Za, !1);
                                        else if (a.utils.isObject(document.attachEvent)) {
                                            document.attachEvent('onreadystatechange', c.Za);
                                            var b = null;
                                            try {
                                                b = null === window.frameElement ? document.documentElement : null;
                                            } catch (f) {
                                            }
                                            null != b && b.doScroll && function m() {
                                                if (!c.isReady) {
                                                    try {
                                                        b.doScroll('left');
                                                    } catch (f) {
                                                        a.utils.oSTO(m, 10);
                                                        return;
                                                    }
                                                    c.tb();
                                                }
                                            }();
                                        } else
                                            a.error('M199');
                                        a.log('M200');
                                    };
                                    c.tb = function (b) {
                                        c.dg || (a.lifecycle.Fl(b && b.timeStamp), a.command('mark', 'onready', l()), c.dg = !0);
                                    };
                                    c.Za = function (a) {
                                        document.addEventListener ? (document.removeEventListener('DOMContentLoaded', c.Za, !1), c.tb(a)) : 'complete' === document.readyState && (document.detachEvent('onreadystatechange', c.Za), c.tb(a));
                                    };
                                    return c;
                                }();
                            e.isReady = !1;
                            e.dg = !1;
                            e.$b = !1;
                            b.DOMEventsMonitor = e;
                            b.domEventsMonitor = new b.DOMEventsMonitor();
                        }(a.monitor || (a.monitor = {})));
                    }(k || (k = {})));
                    (function (a) {
                        var b = a.utils.isDefined, l = a.utils.isNumber, e = a.monitor.ee;
                        a.ph = window.Promise;
                        a.Kb = null;
                        a.zo = null;
                        a.te = Object.defineProperty;
                        var c = a.conf.spa2 && a.conf.modernBrowserFeaturesAvailable, g = a.conf.isZonePromise, f = a.conf.fetch, n = function () {
                                function f() {
                                }
                                f.Rk = function () {
                                    Object.defineProperty = a.aop.around(a.te, function (a, c, g) {
                                        'Promise' === c && b(g) && f.If(g);
                                    });
                                    if (g && f.Kf()) {
                                        a.log('M201');
                                        var c = Object.getOwnPropertyDescriptor(window, 'Promise');
                                        f.If(c);
                                        a.te(window, 'Promise', c);
                                        window.Promise = window.Promise;
                                    }
                                };
                                f.Kf = function () {
                                    return b(window.__zone_symbol__Promise) || b(window.__zone_symbol__ZoneAwarePromise);
                                };
                                f.If = function (c) {
                                    b(window.Zone) && b(window.Zone.assertZonePatched) && (window.Zone.assertZonePatched = function () {
                                    });
                                    c = c || Object.getOwnPropertyDescriptor(window, 'Promise');
                                    var g = c.set, n = c.get;
                                    h(g) && (c.set = function (c) {
                                        !0 === c.agentPromise ? a.log('M202') : (g.apply(this, arguments), b(a.Kb) ? g.apply(this, arguments) : (a.log('M203'), f.setUp(), new e().Pk()));
                                    });
                                    h(n) && (c.get = function () {
                                        var c = n.apply(this, arguments);
                                        b(a.Kb) && (a.log('M204'), c = a.Kb);
                                        return c;
                                    });
                                };
                                f.setUp = function () {
                                    if (b(a.ph)) {
                                        f.Uk();
                                        f.Tk();
                                        var g = function (g) {
                                            function n(e) {
                                                var l = this.constructor, q = e;
                                                this.$ = a.utils.generateGUID();
                                                b(e) && (q = f.Sk(e, this));
                                                e = a.utils.Si(this, g, [q], l);
                                                c && (b(this.h) && (e.h = this.h), b(this.Ha) ? e.h = this.Ha.h : e.h = a.c.ja());
                                                e.$ = this.$;
                                                this.Ha = e;
                                                a.log('M205', e.$);
                                                c && b(e.h) && a.log('M206', e.h.guid);
                                                return e;
                                            }
                                            a.utils.Bc(n, g);
                                            return n;
                                        }(window.Promise);
                                        g.agentPromise = !0;
                                        a.Kb = g;
                                        window.Promise = g;
                                    }
                                };
                                f.za = function (g, e) {
                                    return function () {
                                        if (c) {
                                            var n, l = n = void 0;
                                            a.log('M207', g);
                                            switch (g) {
                                            case f.H.le:
                                            case f.H.ke:
                                            case f.H.Zd:
                                            case f.H.Yd:
                                                a.utils.isDefined(e) && a.utils.isDefined(e.Ha) && (n = e.Ha.h);
                                                n = a.c.ja() || n;
                                                l = new a.Eb(n, new a.La(g), a.CauseType.PROMISE);
                                                break;
                                            case f.H.ie:
                                            case f.H.je:
                                            case f.H.he:
                                                n = e.h, l = new a.Eb(n, new a.La(g), a.CauseType.PROMISE), a.c.ra(l);
                                            }
                                            b(e) && (b(e.Ha) ? (e.Ha.h = l, a.log('M208', e.Ha.$)) : (a.log('M209', e.$), e.h = l));
                                        }
                                    };
                                };
                                f.Sk = function (g, e) {
                                    c && (g = a.aop.around(g, function () {
                                        e.h = new a.Eb(a.c.ja(), new a.La(f.H.Yh), a.CauseType.PROMISE);
                                        a.c.ra(e.h);
                                        a.log('M210', e.h.guid, e.$);
                                        if (b(arguments[0])) {
                                            a.log('M211');
                                            var c = a.aop.around(arguments[0], f.za(f.H.le, e));
                                            arguments[0] = c;
                                        }
                                        b(arguments[1]) && (a.log('M212'), c = a.aop.around(arguments[1], f.za(f.H.ke, e)), arguments[1] = c);
                                        return a.utils.xa(arguments);
                                    }, function () {
                                        a.log('M213');
                                        a.c.L();
                                    }, 'interceptPromiseExecutor', f.sb));
                                    return g;
                                };
                                f.Tk = function () {
                                    a.utils.refs.promiseThen = window.Promise.prototype.then;
                                    var b = f.xg(), c = {
                                            parentObject: window.Promise.prototype,
                                            property: 'then',
                                            propertyWrappedFunctionName: 'promiseThen',
                                            wrapNewFunctionAgain: !0
                                        };
                                    c.setUpFunc = function (a) {
                                        return function (b) {
                                            f.Kf() || f.cm(b, a);
                                        };
                                    }.call(this, c);
                                    c.Ma = b;
                                    a.aop.forceWrap(c);
                                    a.utils.refs.promiseFinally = window.Promise.prototype['finally'];
                                    b = f.wg();
                                    c = {
                                        parentObject: window.Promise.prototype,
                                        property: 'finally',
                                        propertyWrappedFunctionName: 'promiseFinally',
                                        wrapNewFunctionAgain: !0
                                    };
                                    c.setUpFunc = function (a) {
                                        return function (b) {
                                            f.bm(b, a);
                                        };
                                    }.call(this, c);
                                    c.Ma = b;
                                    a.aop.forceWrap(c);
                                };
                                f.cm = function (a, b) {
                                    b.Ma = f.xg(a);
                                };
                                f.bm = function (a, b) {
                                    b.Ma = f.wg(a);
                                };
                                f.Uk = function () {
                                    f.$l();
                                    f.Zl();
                                };
                                f.il = function (b) {
                                    return b instanceof f || b instanceof a.ph;
                                };
                                f.Ik = function (c) {
                                    var f;
                                    b(f) || (a.log('M214'), f = 1);
                                    b(c.D) && l(c.D) && (c.D += f, a.log('M215', c.D));
                                };
                                f.Cj = function (a) {
                                    var c;
                                    b(c) || (c = 1);
                                    b(a.D) && l(a.D) && (a.D -= c);
                                };
                                f.Kk = function (c) {
                                    b(c.D) && a.utils.el(c.D) ? (a.log('M216'), f.Ik(c)) : c.D = 1;
                                };
                                f.Vm = function (b) {
                                    e.Zm(b) || (a.log('M217'), f.Kk(b));
                                };
                                f.hm = function (a) {
                                    a.D = 0;
                                };
                                f.Pf = function (a) {
                                    return b(a.I);
                                };
                                f.fd = function (a) {
                                    return b(a) && a instanceof window.Promise;
                                };
                                f.xg = function (g) {
                                    var n = null;
                                    g = g || window.Promise.prototype.then;
                                    g = a.aop.around(g, function () {
                                        var g = this;
                                        n = g;
                                        a.log('M218', g.$);
                                        if (b(arguments[0]) && !f.fd(arguments[0])) {
                                            f.Vm(g);
                                            a.log('M219', g.$);
                                            var l = a.aop.around(arguments[0], f.za(f.H.ie, g), function () {
                                                var n = a.aop.vf(arguments);
                                                b(n) && b(n.D) && f.il(n) && e.ba(g) ? (e.Wm(n, g), f.hm(n)) : (e.ba(g) && !f.Pf(g) && e.Sb(g) && (e.Pd(g), e.Nb(g), !0 === e.Qd(g) && (a.log('M220'), a.log('M221'), e.Ua(g))), c && (a.log('M222'), a.c.L()));
                                            }, 'interceptPromiseThenFulfil', function (b) {
                                                e.ba(g) && e.Sb(g) && (e.Pd(g) && e.Nb(g), !0 === e.Qd(g) && (a.log('M223'), a.log('M224'), e.Ua(g)));
                                                f.sb(b);
                                            });
                                            arguments[0] = l;
                                        }
                                        b(arguments[1]) && !f.fd(arguments[1]) && (a.log('M225', g.$), l = a.aop.around(arguments[1], f.za(f.H.je, g), function () {
                                            c && (a.log('M226'), a.c.L());
                                        }), arguments[1] = l);
                                        return a.utils.xa(arguments);
                                    }, function () {
                                        var g = a.aop.vf(arguments);
                                        !b(g) || b(arguments[0]) && f.fd(arguments[0]) || (c && (g.h = this.h), f.Pf(this) && e.ba(this) && (g._adrumAjaxT = this._adrumAjaxT, e.Sb(this) || e.Lk(g)));
                                    }, 'interceptPromiseThenInterceptor', function (b) {
                                        var c = n;
                                        e.ba(c) && e.Sb(c) && (e.Pd(c) && e.Nb(c), !0 === e.Qd(c) && (a.log('M227'), a.log('M228'), e.Ua(c)));
                                        f.sb(b);
                                    });
                                    g.usedByAgent = !0;
                                    return window.Promise.prototype.then = g;
                                };
                                f.wg = function (g) {
                                    if (b(window.Promise.prototype['finally']))
                                        return g = g || window.Promise.prototype['finally'], g = a.aop.around(g, function () {
                                            b(this._adrumAjaxT) && b(this._adrumAjaxT.w) ? e.Nb(this) : b(this.D) && f.Cj(this);
                                            if (b(arguments[0])) {
                                                a.log('M229', this.$);
                                                var g = a.aop.around(arguments[0], f.za(f.H.he, this), function () {
                                                    c && (a.log('M230'), a.c.L());
                                                });
                                                arguments[0] = g;
                                                return a.utils.xa(arguments);
                                            }
                                        }, function () {
                                            a.log('M231');
                                            a.c.L();
                                        }, 'interceptPromiseFinally'), g.usedByAgent = !0, window.Promise.prototype['finally'] = g;
                                };
                                f.$l = function () {
                                    window.Promise.resolve = a.aop.around(window.Promise.resolve, f.za(f.H.Zd, null), function () {
                                        a.log('M232');
                                        a.c.L();
                                    }, 'interceptPromiseResolve', f.sb);
                                };
                                f.Zl = function () {
                                    window.Promise.reject = a.aop.around(window.Promise.reject, f.za(f.H.Yd, null), function () {
                                        a.log('M233');
                                        a.c.L();
                                    }, 'interceptPromiseReject', f.sb);
                                };
                                return f;
                            }();
                        n.H = {
                            Yh: 'PromiseInstance.init',
                            le: 'PromiseInstance.resolve',
                            ke: 'PromiseInstance.reject',
                            ie: 'PromiseInstance.onFulfilled',
                            je: 'PromiseInstance.onRejected',
                            he: 'PromiseInstance.finally',
                            Zd: 'PromiseConstructor.resolve',
                            Yd: 'PromiseConstructor.reject'
                        };
                        n.sb = a.monitor.ErrorMonitor.l;
                        a.Fi = n;
                        g && f && n.Rk();
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            function l(a, b) {
                                var c = [], e = /^\s*(ADRUM_BT\w*)=(.*)\s*$/i.exec(a);
                                if (e) {
                                    var l = e[1], e = e[2].replace(/^"|"$/g, ''), e = decodeURIComponent(e).split('|'), k = e[0].split(':');
                                    if ('R' === k[0] && Number(k[1]) === b)
                                        for (g(l), l = 1; l < e.length; l++)
                                            c.push(e[l]);
                                }
                                return c;
                            }
                            function e(a, b) {
                                var c = /^\s*(ADRUM_(\d+)_(\d+)_(\d+))=(.*)\s*$/i.exec(a);
                                if (c) {
                                    var e = c[1], l = c[4], k = c[5];
                                    if (Number(c[3]) === b)
                                        return g(e), {
                                            index: Number(l),
                                            value: k
                                        };
                                }
                                return null;
                            }
                            function c(b) {
                                var c = /^\s*ADRUM=s=([\d]+)&r=(.*)\s*/.exec(b);
                                if (c) {
                                    a.log('M236', b);
                                    if (3 === c.length)
                                        return g('ADRUM'), {
                                            startTime: Number(c[1]),
                                            startPage: c[2]
                                        };
                                    a.error('M237', b);
                                    return null;
                                }
                            }
                            function g(b) {
                                a.log('M235', b);
                                var c = new Date();
                                c.setTime(c.getTime() - 1000);
                                document.cookie = b + '=;Expires=' + c.toUTCString();
                            }
                            b.startTimeCookie = null;
                            b.cookieMetadataChunks = null;
                            b.cf = function (f, g) {
                                a.log('M234');
                                for (var m = g ? g.length : 0, k = [], t = f.split(';'), p = 0; p < t.length; p++) {
                                    var s = t[p], r = e(s, m);
                                    r ? k.push(r) : (s = c(s), null != s && (b.startTimeCookie = s));
                                }
                                Array.prototype.sort.call(k, function (a, b) {
                                    return a.index - b.index;
                                });
                                s = [];
                                for (p = 0; p < k.length; p++)
                                    s.push(k[p].value);
                                for (p = 0; p < t.length; p++)
                                    (k = l(t[p], m)) && 0 < k.length && (s = s.concat(k));
                                b.cookieMetadataChunks = s;
                            };
                            a.correlation.eck = b.cf;
                        }(a.correlation || (a.correlation = {})));
                    }(k || (k = {})));
                    (function (a) {
                        'APP_KEY_NOT_SET' !== a.conf.appKey || a.utils.isDefined(window.ADEUM_js_handler) || a.utils.isDefined(window.webkit) || B.log('AppDynamics EUM cloud application key missing. Please specify window[\'adrum-app-key\']');
                        a.correlation.cf(document.cookie, document.referrer);
                        a.command('mark', 'firstbyte', window['adrum-start-time']);
                        a.monitor.setUpMonitors(a.monitor.ha, a.monitor.vj, a.monitor.domEventsMonitor, a.monitor.navMonitor, a.monitor.xhrMonitor, a.monitor.resourceMonitor);
                        a.conf.fetch && !a.conf.isZonePromise && (a.Fi.setUp(), a.monitor.setUpMonitors(a.monitor.jb));
                        a.conf.spa2 && a.conf.modernBrowserFeaturesAvailable && a.monitor.setUpMonitors(a.monitor.dj);
                        a.conf.enablePrimaryMetrics && a.utils.isDefined(window.MutationObserver) && (a.conf.P = !0, a.j.n.J.Tg(), a.j.n.start(a.utils.ib()), a.N.start());
                    }(k || (k = {})));
                    (function (a) {
                        a = a.ng || (a.ng = {});
                        a = a.k || (a.k = {});
                        a.Yf = 'locationChangeStart';
                        a.vl = 'locationChangeSuccess';
                        a.Kg = 'routeChangeStart';
                        a.Lg = 'routeChangeSuccess';
                        a.Zg = 'stateChangeStart';
                        a.$g = 'stateChangeSuccess';
                        a.mh = 'viewContentLoaded';
                        a.Ek = 'includeContentRequested';
                        a.Dk = 'includeContentLoaded';
                        a.af = 'digest';
                        a.ko = 'outstandingRequestsComplete';
                        a.Oe = 'beforeNgXhrRequested';
                        a.Ee = 'afterNgXhrRequested';
                        a.jo = 'ngXhrLoaded';
                        a.Se = '$$completeOutstandingRequest';
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            function l(a, c, e, m, l, k) {
                                if (c)
                                    try {
                                        return c.apply(a, [
                                            e,
                                            m,
                                            l
                                        ].concat(k));
                                    } catch (p) {
                                        return a.error(e, m, l, k, b.Error.Zh, 'M238', p);
                                    }
                            }
                            function e(a, c) {
                                return function () {
                                    var e = this.current, m = c[e] || c[b.Hb] || e, k = Array.prototype.slice.call(arguments);
                                    if (this.tj(a))
                                        return this.error(a, e, m, k, b.Error.$h, 'event ' + a + 'M239' + this.current);
                                    if (!1 === l(this, this['onbefore' + a], a, e, m, k))
                                        return b.Gb.Xd;
                                    m === b.Hb && (m = e);
                                    if (e === m)
                                        return l(this, this['onafter' + a] || this['on' + a], a, e, m, k), b.Gb.zi;
                                    var t = this;
                                    this.transition = function () {
                                        t.transition = null;
                                        t.current = m;
                                        l(t, t['onenter' + m] || t['on' + m], a, e, m, k);
                                        l(t, t['onafter' + a] || t['on' + a], a, e, m, k);
                                        return b.Gb.Ki;
                                    };
                                    if (!1 === l(this, this['onleave' + e], a, e, m, k))
                                        return this.transition = null, b.Gb.Xd;
                                    if (this.transition)
                                        return this.transition();
                                };
                            }
                            var c = a.utils.hasOwnPropertyDefined;
                            b.VERSION = '2.3.5';
                            b.Gb = {
                                Ki: 1,
                                zi: 2,
                                Xd: 3,
                                tn: 4
                            };
                            b.Error = {
                                $h: 100,
                                un: 200,
                                Zh: 300
                            };
                            b.Hb = '*';
                            b.create = function (a, f) {
                                function n(a) {
                                    var c = a.from instanceof Array ? a.from : a.from ? [a.from] : [b.Hb];
                                    s[a.name] = s[a.name] || {};
                                    for (var f = 0; f < c.length; f++)
                                        r[c[f]] = r[c[f]] || [], r[c[f]].push(a.name), s[a.name][c[f]] = a.to || c[f];
                                }
                                var m = 'string' == typeof a.initial ? { state: a.initial } : a.initial, l = f || a.target || {}, k = a.events || [], p = a.callbacks || {}, s = {}, r = {};
                                m && (m.event = m.event || 'startup', n({
                                    name: m.event,
                                    from: 'none',
                                    to: m.state
                                }));
                                for (var w = 0; w < k.length; w++)
                                    n(k[w]);
                                for (var A in s)
                                    c(s, A) && (l[A] = e(A, s[A]));
                                for (A in p)
                                    c(p, A) && (l[A] = p[A]);
                                l.current = 'none';
                                l.Un = function (a) {
                                    return a instanceof Array ? 0 <= a.indexOf(this.current) : this.current === a;
                                };
                                l.sj = function (a) {
                                    return !this.transition && (c(s[a], this.current) || c(s[a], b.Hb));
                                };
                                l.tj = function (a) {
                                    return !this.sj(a);
                                };
                                l.oc = function () {
                                    return r[this.current];
                                };
                                l.error = a.error || function (a, b, c, f, g, m, e) {
                                    throw e || m;
                                };
                                if (m && !m.defer)
                                    l[m.event]();
                                return l;
                            };
                        }(a.we || (a.we = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = function (e) {
                                function c(b) {
                                    b = e.call(this, b) || this;
                                    a.utils.isDefined(a.ng) && b.constructor != a.ng.NgVPageView && b.constructor != c && a.reportAPIMessage(a.W.ma, a.Xa, 'ADRUM.events.VPageView', []);
                                    if (a.conf.spa2)
                                        return b;
                                    b.perf = new a.PerformanceTracker();
                                    b.start();
                                    a.monitor.xhrMonitor.gc();
                                    a.monitor.jb.gc();
                                    a.monitor.ha.gm();
                                    return b;
                                }
                                v(c, e);
                                c.prototype.type = function () {
                                    return a.EventType.VPageView;
                                };
                                c.prototype.Wc = function () {
                                    return b.EventTracker.Ec(this.guid(), this.url(), this.type());
                                };
                                c.prototype.Xg = function (b) {
                                    var c = this.Wc();
                                    b.set('parent', c);
                                    a.log('M240', c.guid(), c.url());
                                };
                                c.prototype.startCorrelatingXhrs = function () {
                                    a.conf.spa2 || (a.log('M241'), this.Xg(a.monitor.xhrMonitor));
                                };
                                c.prototype.stopCorrelatingXhrs = function () {
                                    a.conf.spa2 || (a.monitor.xhrMonitor.set('parent', null), a.log('M242'));
                                };
                                c.prototype.Fd = function () {
                                    a.conf.spa2 || (a.log('M243'), this.Xg(a.monitor.ha));
                                };
                                c.prototype.start = function () {
                                    a.conf.spa2 || (this.markVirtualPageStart(), this.startCorrelatingXhrs());
                                };
                                c.prototype.end = function () {
                                    a.conf.spa2 || (this.markVirtualPageEnd(), this.stopCorrelatingXhrs());
                                };
                                return c;
                            }(b.EventTracker);
                            b.VPageView = l;
                            b.Na(b.U[a.EventType.VPageView], l.prototype);
                            b.Je(b.metricSpec[a.EventType.VPageView], l.prototype);
                        }(a.events || (a.events = {})));
                    }(k || (k = {})));
                    (function (a) {
                        var b = a.ng || (a.ng = {}), b = b.conf || (b.conf = {});
                        b.disabled = a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && a.conf.userConf.spa.angular.disable;
                        b.distinguishVPwithItsTemplateUrl = a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && !0 === a.conf.userConf.spa.angular.distinguishVPwithItsTemplateUrl ? !0 : !1;
                        b.xhr = {};
                        b.metrics = { includeResTimingInEndUserResponseTiming: !0 };
                        a.conf.userConf && a.conf.userConf.spa && a.conf.userConf.spa.angular && a.conf.userConf.spa.angular.vp && (a.conf.userConf.spa.angular.vp.xhr && a.utils.va.ug(a.conf.userConf.spa.angular.vp.xhr), a.conf.userConf.spa.angular.vp.metrics && a.utils.mergeJSON(b.metrics, a.conf.userConf.spa.angular.vp.metrics));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = a.utils.map, e = a.utils.reduce, c = a.utils.filter, g = function (f) {
                                    function g(b) {
                                        b = f.call(this, b) || this;
                                        b.Of = !0;
                                        b.vb = {};
                                        b.Wa = 0;
                                        b.Eo = [];
                                        b.digestCount(0);
                                        if (b.constructor != g)
                                            return a.reportAPIMessage(a.W.ma, a.Xa, 'ADRUM.events.Ajax', []), b;
                                        b.stopCorrelatingXhrs();
                                        return b;
                                    }
                                    v(g, f);
                                    g.prototype.type = function () {
                                        return a.EventType.VPageView;
                                    };
                                    g.prototype.Td = function () {
                                        this.markViewChangeStart();
                                        this.markVirtualPageStart(this.getViewChangeStart());
                                        this.timestamp(this.getViewChangeStart());
                                    };
                                    g.prototype.Fk = function () {
                                        this.digestCount(this.digestCount() + 1);
                                    };
                                    g.prototype.Gk = function () {
                                        this.Wa++;
                                        a.log('M244', this.Wa);
                                    };
                                    g.prototype.Bj = function () {
                                        this.Wa--;
                                        a.log('M245', this.Wa);
                                    };
                                    g.prototype.Ak = function () {
                                        var b = this.perf.getEntryByName(a.events.b.uh);
                                        a.log('M246', this.Wa, b);
                                        return 0 < this.Wa;
                                    };
                                    g.prototype.oj = function () {
                                        var a = { nc: 0 }, b = document.querySelectorAll('ng-view, [ng-view], .ng-view, [ui-view]'), b = l(b, angular.element), c;
                                        for (c in g.Hg) {
                                            var f = g.Hg[c];
                                            l(b, function (b) {
                                                b = b.find(c);
                                                l(b, function (b) {
                                                    if (b = b[f])
                                                        b = decodeURIComponent(b), a[b] || (a[b] = c, a.nc++);
                                                });
                                            });
                                        }
                                        this.vb = a;
                                    };
                                    g.prototype.mj = function (a) {
                                        return !!this.vb[decodeURIComponent(a.name)];
                                    };
                                    g.prototype.pj = function () {
                                        var b = [], c = this;
                                        0 < this.vb.nc && (b = a.monitor.resourceMonitor.kb().filter(function (a) {
                                            return c.mj(a);
                                        }));
                                        this.resTiming(b);
                                    };
                                    g.Rj = function (b) {
                                        return c(b, function (b) {
                                            return (b.eventType === a.EventType.Ajax || b.eventType === a.EventType.ADRUM_XHR) && !a.utils.va.mc(b.eventUrl, b.method);
                                        });
                                    };
                                    g.jk = function (a) {
                                        return e(a, function (a, b) {
                                            return Math.max(a, b.timestamp + b.metrics.PLT);
                                        }, -1);
                                    };
                                    g.prototype.aj = function () {
                                        if (b.conf.xhr) {
                                            var c = g.Rj(a.channel.getEventsWithParentGUID(this.guid())), c = g.jk(c);
                                            if (0 < c) {
                                                var f = this.perf.getEntryByName(a.events.b.uh);
                                                this.markXhrRequestsCompleted(Math.min(f && f.startTime || Number.MAX_VALUE, c));
                                            }
                                        }
                                    };
                                    g.prototype.adjustTimings = function () {
                                        this.aj();
                                        var c = this.getViewDOMLoaded(), f = this.getXhrRequestsCompleted(), c = Math.max(c, f);
                                        b.conf.metrics.includeResTimingInEndUserResponseTiming && (this.$i(), f = this.getViewResourcesLoaded(), f = Math.max(c, f), a.log('M247', c, f), c = f);
                                        this.markVirtualPageEnd(c);
                                    };
                                    g.prototype.$i = function () {
                                        if (0 < this.vb.nc) {
                                            this.pj();
                                            var b = this.resTiming();
                                            b && b.length >= this.vb.nc && (b = e(b, function (a, b) {
                                                return Math.max(a, b.responseEnd);
                                            }, 0), this.markViewResourcesLoaded(a.PerformanceTracker.Jc(b)));
                                        }
                                    };
                                    g.prototype.identifier = function (b) {
                                        var c = this.oh;
                                        a.utils.isDefined(b) && (this.oh = g.Pj(b), this.url(this.oh.url));
                                        return c;
                                    };
                                    g.Pj = function (b) {
                                        var c = {};
                                        b && b.M ? (c.M = { td: '' }, a.utils.mergeJSON(c.M, {
                                            td: b.M.originalPath,
                                            wb: b.M.template,
                                            xb: b.M.templateUrl
                                        })) : b && b.state && (c.state = { url: '' }, a.utils.mergeJSON(c.state, {
                                            url: b.state.url,
                                            name: b.state.name,
                                            wb: b.state.template,
                                            xb: b.state.templateUrl
                                        }));
                                        return c;
                                    };
                                    return g;
                                }(a.events.VPageView);
                            g.Hg = {
                                img: 'src',
                                script: 'src',
                                link: 'href'
                            };
                            b.NgVPageView = g;
                            a.events.Na(a.events.U[a.EventType.NG_VIRTUAL_PAGE], g.prototype);
                        }(a.ng || (a.ng = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = function () {
                                function e() {
                                    this.A = new b.NgVPageView();
                                }
                                e.prototype.nm = function () {
                                    var c = this, g = this.A;
                                    b.conf.metrics.includeResTimingInEndUserResponseTiming ? (a.log('M248'), a.utils.oSTO(function () {
                                        c.yd(g);
                                    }, e.Mi)) : a.utils.oSTO(function () {
                                        c.yd(g);
                                    }, e.Ni);
                                };
                                e.prototype.yd = function (b) {
                                    a.log('M249');
                                    b.parent(a.monitor.DOMEventsMonitor.currentBasePage);
                                    a.command('call', function () {
                                        b.adjustTimings();
                                        a.reporter.reportEvent(b);
                                    });
                                };
                                e.prototype.um = function (a) {
                                    this.A = a;
                                };
                                return e;
                            }();
                            l.Mi = 5000;
                            l.Ni = 2 * a.monitor.XHRMonitor.be;
                            b.VirtualPageStateMachine = l;
                            a.we.create({
                                events: [
                                    {
                                        name: 'start',
                                        from: 'none',
                                        to: 'ChangeView'
                                    },
                                    {
                                        name: 'viewLoaded',
                                        from: 'ChangeView',
                                        to: 'XhrPending'
                                    },
                                    {
                                        name: 'xhrCompleted',
                                        from: 'XhrPending',
                                        to: 'End'
                                    },
                                    {
                                        name: 'abort',
                                        from: '*',
                                        to: 'none'
                                    },
                                    {
                                        name: 'init',
                                        from: '*',
                                        to: 'none'
                                    },
                                    {
                                        name: 'locChange',
                                        from: '*',
                                        to: '*'
                                    },
                                    {
                                        name: 'beforeXhrReq',
                                        from: '*',
                                        to: '*'
                                    },
                                    {
                                        name: 'afterXhrReq',
                                        from: '*',
                                        to: '*'
                                    }
                                ],
                                error: function (b) {
                                    a.log('M250', b);
                                },
                                callbacks: {
                                    onChangeView: function () {
                                        this.A.Td();
                                        this.A.Fd();
                                    },
                                    onviewLoaded: function () {
                                        this.A.markViewDOMLoaded();
                                    },
                                    onXhrPending: function () {
                                        this.A.Of && this.xhrCompleted();
                                    },
                                    onleaveXhrPending: function (a, b, g) {
                                        if ('abort' === a)
                                            return this.yd(), !0;
                                        if ('xhrCompleted' === a && 'End' === g) {
                                            if (this.A.Ak())
                                                return !1;
                                            this.A.markXhrRequestsCompleted();
                                            return !0;
                                        }
                                    },
                                    onEnd: function () {
                                        this.A.oj();
                                        this.nm();
                                    },
                                    oninit: function (b, c, g, f) {
                                        this.um(f);
                                        a.monitor.xhrMonitor.gc();
                                        a.monitor.jb.gc();
                                    },
                                    onlocChange: function (a, b, g, f) {
                                        this.A.identifier.url = f;
                                        this.A.lc({ url: f });
                                    },
                                    onbeforeXhrReq: function (b, c, g, f) {
                                        var n = this.A;
                                        n.Of = !1;
                                        a.log('M251', f && f[1] || '', n.guid());
                                        n.Gk();
                                        n.startCorrelatingXhrs();
                                        f[3] && (f[3] = a.aop.before(f[3], function (b, c, f) {
                                            a.log('M252');
                                            n.Bj();
                                            f && (b = a.utils.Ql(f)['content-type']) && 0 <= b.indexOf('text/html') && n.markViewFragmentsLoaded();
                                        }));
                                        return f;
                                    },
                                    onafterXhrReq: function () {
                                        this.A.stopCorrelatingXhrs();
                                    }
                                }
                            }, l.prototype);
                        }(a.ng || (a.ng = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = function () {
                                function e() {
                                    this.O = new b.VirtualPageStateMachine();
                                    this.distinguishVPwithItsTemplateUrl = a.ng.conf.distinguishVPwithItsTemplateUrl;
                                }
                                e.prototype.T = function (c, g) {
                                    a.log('M253', c);
                                    switch (c) {
                                    case b.k.Kg:
                                    case b.k.Zg:
                                        this.O.start();
                                        var f = g.next.url || document.URL, n = new b.NgVPageView({
                                                url: f,
                                                identifier: g.next
                                            });
                                        this.distinguishVPwithItsTemplateUrl && e.al(this.O.A, n) ? this.O.A.lc({
                                            url: f,
                                            identifier: g.next
                                        }) : this.Im(n);
                                        break;
                                    case b.k.Lg:
                                    case b.k.$g:
                                        this.O.A.markViewChangeEnd();
                                        break;
                                    case b.k.mh:
                                        this.O.viewLoaded();
                                        break;
                                    case b.k.Oe:
                                        this.O.beforeXhrReq(g);
                                        break;
                                    case b.k.Ee:
                                        this.O.afterXhrReq();
                                        break;
                                    case b.k.Se:
                                        this.O.xhrCompleted();
                                        break;
                                    case b.k.Yf:
                                        this.O.A.lc({ url: g.next.url });
                                        this.O.locChange(g.next.url);
                                        break;
                                    case b.k.af:
                                        this.O.A.Fk();
                                    }
                                };
                                e.prototype.Im = function (a) {
                                    this.O.abort();
                                    this.O.init(a);
                                    this.O.start();
                                };
                                e.al = function (b, g) {
                                    var f = b.identifier(), e = g.identifier(), m = !1;
                                    return m = !a.utils.isDefined(f) && !a.utils.isDefined(e) || f === e ? !0 : a.utils.isDefined(f) && a.utils.isDefined(e) ? f.state || e.state ? a.utils.isDefined(f.state) && a.utils.isDefined(e.state) ? f.state.name === e.state.name && f.state.wb === e.state.wb && f.state.xb === e.state.xb && f.state.url === e.state.url : !1 : f.M && e.M ? f.M.td === e.M.td && f.M.wb === e.M.wb && f.M.xb === e.M.xb : f.url === e.url : !1;
                                };
                                return e;
                            }();
                            b.Oi = l;
                        }(a.ng || (a.ng = {})));
                    }(k || (k = {})));
                    (function (a) {
                        (function (b) {
                            var l = a.utils.addEventListener, e = function () {
                                    function c() {
                                        this.V = new b.Oi();
                                        this.Gf = !1;
                                    }
                                    c.prototype.setUp = function () {
                                        function b(g) {
                                            return function () {
                                                a.log(g);
                                                c.init();
                                            };
                                        }
                                        var c = this;
                                        b('M254')();
                                        l(document, 'DOMContentLoaded', b('M255'));
                                        l(window, 'load', b('M256'));
                                    };
                                    c.prototype.init = function () {
                                        if ('loading' === document.readyState)
                                            a.log('M257');
                                        else if ('undefined' != typeof angular && !this.Gf) {
                                            this.Gf = !0;
                                            a.log('M258');
                                            var b = this, c = angular.module('ng');
                                            c.config([
                                                '$provide',
                                                function (a) {
                                                    b.Vk(a);
                                                    b.Qk(a);
                                                }
                                            ]);
                                            c.run([
                                                '$browser',
                                                function (a) {
                                                    b.Nk(a);
                                                }
                                            ]);
                                            a.log('M259');
                                        }
                                    };
                                    c.prototype.Qk = function (c) {
                                        var f = a.aop, e = this;
                                        c.decorator('$httpBackend', [
                                            '$delegate',
                                            function (a) {
                                                return a = f.around(a, function () {
                                                    var a = Array.prototype.slice.call(arguments);
                                                    e.V.T(b.k.Oe, a);
                                                    return a;
                                                }, function () {
                                                    e.V.T(b.k.Ee);
                                                }, 'ng.httpBackend');
                                            }
                                        ]);
                                    };
                                    c.prototype.Vk = function (c) {
                                        var f = a.aop, e = this;
                                        c.decorator('$rootScope', [
                                            '$delegate',
                                            function (a) {
                                                a.$digest = f.after(a.$digest, function () {
                                                    e.V.T(b.k.af);
                                                }, 'ngevents.digest');
                                                a.$on('$locationChangeStart', function (a, c) {
                                                    var f = { url: c }, g = a && a.hb && a.hb.$state && a.hb.$state.current;
                                                    g && (f.state = g);
                                                    e.V.T(b.k.Yf, { next: f });
                                                });
                                                a.$on('$locationChangeSuccess', function () {
                                                    e.V.T(b.k.vl);
                                                });
                                                a.$on('$routeChangeStart', function (a, c) {
                                                    var f = { url: location.href }, g = c && c.$$route;
                                                    g && (f.M = g);
                                                    e.V.T(b.k.Kg, { next: f });
                                                });
                                                a.$on('$routeChangeSuccess', function () {
                                                    e.V.T(b.k.Lg);
                                                });
                                                a.$on('$stateChangeStart', function (a, c) {
                                                    e.V.T(b.k.Zg, { next: { state: c } });
                                                });
                                                a.$on('$stateChangeSuccess', function () {
                                                    e.V.T(b.k.$g);
                                                });
                                                a.$on('$viewContentLoaded', function (a) {
                                                    var c = { url: location.href };
                                                    if (a = a && a.hb && a.hb.$state && a.hb.$state.current)
                                                        c.state = a;
                                                    e.V.T(b.k.mh, { next: c });
                                                });
                                                a.$on('$includeContentRequested', function () {
                                                    e.V.T(b.k.Ek);
                                                });
                                                a.$on('$includeContentLoaded', function () {
                                                    e.V.T(b.k.Dk);
                                                });
                                                return a;
                                            }
                                        ]);
                                    };
                                    c.prototype.Nk = function (c) {
                                        var f = this;
                                        c.$$completeOutstandingRequest = a.aop.before(c.$$completeOutstandingRequest, function () {
                                            f.V.T(b.k.Se);
                                        });
                                    };
                                    return c;
                                }();
                            b.on = e;
                            b.ngMonitor = new e();
                        }(a.ng || (a.ng = {})));
                    }(k || (k = {})));
                    (function (a) {
                        var b = a.ng || (a.ng = {});
                        b.conf.disabled || a.conf.spa2 || a.monitor.setUpMonitors(b.ngMonitor);
                    }(k || (k = {})));
                }
            }();
        }());
    }())
}