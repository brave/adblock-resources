{
    const $___mock_c74fbeb467519a61 = {};
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
    })($___mock_c74fbeb467519a61);
    const $___mock_9748b5f6e714326d = {};
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
    })($___mock_9748b5f6e714326d);
    (function () {
        !function (e, t, a) {
            function n() {
                this.rules = L.filter(L.rules, function (e) {
                    return 'elementexists' === e.event;
                });
            }
            function r() {
                L.getToolsByType('nielsen').length > 0 && L.domReady(L.bind(this.initialize, this));
            }
            function o() {
                L.addEventHandler(e, 'orientationchange', o.orientationChange);
            }
            function l() {
                var e = this.eventRegex = /^hover\(([0-9]+)\)$/, t = this.rules = [];
                L.each(L.rules, function (a) {
                    a.event.match(e) && t.push([
                        Number(a.event.match(e)[1]),
                        a.selector
                    ]);
                });
            }
            function c() {
                this.defineEvents(), this.visibilityApiHasPriority = !0, t.addEventListener ? this.setVisibilityApiPriority(!1) : this.attachDetachOlderEventListeners(!0, t, 'focusout');
                L.bindEvent('aftertoolinit', function () {
                    L.fireEvent(L.visibility.isHidden() ? 'tabblur' : 'tabfocus');
                });
            }
            function u() {
                this.lastURL = L.URL(), this._fireIfURIChanged = L.bind(this.fireIfURIChanged, this), this._onPopState = L.bind(this.onPopState, this), this._onHashChange = L.bind(this.onHashChange, this), this._pushState = L.bind(this.pushState, this), this._replaceState = L.bind(this.replaceState, this), this.initialize();
            }
            function d() {
                this.rules = L.filter(L.rules, function (e) {
                    return 'videoplayed' === e.event.substring(0, 11);
                }), this.eventHandler = L.bind(this.onUpdateTime, this);
            }
            function g(e) {
                this.delay = 250, this.FB = e, L.domReady(L.bind(function () {
                    L.poll(L.bind(this.initialize, this), this.delay, 8);
                }, this));
            }
            function f(t) {
                L.domReady(L.bind(function () {
                    this.twttr = t || e.twttr, this.initialize();
                }, this));
            }
            function p(t) {
                t = t || L.rules, this.rules = L.filter(t, function (e) {
                    return 'inview' === e.event;
                }), this.elements = [], this.eventHandler = L.bind(this.track, this), L.addEventHandler(e, 'scroll', this.eventHandler), L.addEventHandler(e, 'load', this.eventHandler);
            }
            function m() {
                var e = L.filter(L.rules, function (e) {
                    return 0 === e.event.indexOf('dataelementchange');
                });
                this.dataElementsNames = L.map(e, function (e) {
                    return e.event.match(/dataelementchange\((.*)\)/i)[1];
                }, this), this.initPolling();
            }
            function h(e) {
                L.BaseTool.call(this, e), this.name = e.name || 'VisitorID', this.initialize();
            }
            function v(e) {
                L.BaseTool.call(this, e), this.name = e.name || 'Basic';
            }
            function _(e) {
                L.BaseTool.call(this, e), this.styleElements = {}, this.targetPageParamsStore = {};
            }
            function y(e) {
                L.BaseTool.call(this, e);
            }
            function b(e) {
                L.BaseTool.call(this, e);
            }
            function C(e) {
                L.BaseTool.call(this, e), this.varBindings = {}, this.events = [], this.products = [], this.customSetupFuns = [];
            }
            function I() {
                L.BaseTool.call(this), this.asyncScriptCallbackQueue = [], this.argsForBlockingScripts = [];
            }
            function D(e) {
                L.BaseTool.call(this, e), this.defineListeners(), this.beaconMethod = 'plainBeacon', this.adapt = new D.DataAdapters(), this.dataProvider = new D.DataProvider.Aggregate();
            }
            var S, V, k, w = Object.prototype.toString, T = e._satellite && e._satellite.override, L = {
                    initialized: !1,
                    $data: function (e, t, n) {
                        if (e) {
                            var i = '__satellite__', r = L.dataCache, o = e[i];
                            o || (o = e[i] = L.uuid++);
                            var s = r[o];
                            if (s || (s = r[o] = {}), n === a)
                                return s[t];
                            s[t] = n;
                        }
                    },
                    uuid: 1,
                    dataCache: {},
                    keys: function (e) {
                        var t = [];
                        for (var a in e)
                            e.hasOwnProperty(a) && t.push(a);
                        return t;
                    },
                    values: function (e) {
                        var t = [];
                        for (var a in e)
                            e.hasOwnProperty(a) && t.push(e[a]);
                        return t;
                    },
                    isArray: Array.isArray || function (e) {
                        return '[object Array]' === w.apply(e);
                    },
                    isObject: function (e) {
                        return null != e && !L.isArray(e) && 'object' == typeof e;
                    },
                    isString: function (e) {
                        return 'string' == typeof e;
                    },
                    isNumber: function (e) {
                        return '[object Number]' === w.apply(e) && !L.isNaN(e);
                    },
                    isNaN: function (e) {
                        return e != e;
                    },
                    isRegex: function (e) {
                        return e instanceof RegExp;
                    },
                    isLinkTag: function (e) {
                        return !(!e || !e.nodeName || 'a' !== e.nodeName.toLowerCase());
                    },
                    each: function (e, t, a) {
                        for (var n = 0, i = e.length; n < i; n++)
                            t.call(a, e[n], n, e);
                    },
                    map: function (e, t, a) {
                        for (var n = [], i = 0, r = e.length; i < r; i++)
                            n.push(t.call(a, e[i], i, e));
                        return n;
                    },
                    filter: function (e, t, a) {
                        for (var n = [], i = 0, r = e.length; i < r; i++) {
                            var o = e[i];
                            t.call(a, o, i, e) && n.push(o);
                        }
                        return n;
                    },
                    any: function (e, t, a) {
                        for (var n = 0, i = e.length; n < i; n++) {
                            var r = e[n];
                            if (t.call(a, r, n, e))
                                return !0;
                        }
                        return !1;
                    },
                    every: function (e, t, a) {
                        for (var n = !0, i = 0, r = e.length; i < r; i++) {
                            var o = e[i];
                            n = n && t.call(a, o, i, e);
                        }
                        return n;
                    },
                    contains: function (e, t) {
                        return -1 !== L.indexOf(e, t);
                    },
                    indexOf: function (e, t) {
                        if (e.indexOf)
                            return e.indexOf(t);
                        for (var a = e.length; a--;)
                            if (t === e[a])
                                return a;
                        return -1;
                    },
                    find: function (e, t, a) {
                        if (!e)
                            return null;
                        for (var n = 0, i = e.length; n < i; n++) {
                            var r = e[n];
                            if (t.call(a, r, n, e))
                                return r;
                        }
                        return null;
                    },
                    textMatch: function (e, t) {
                        if (null == t)
                            throw new Error('Illegal Argument: Pattern is not present');
                        return null != e && ('string' == typeof t ? e === t : t instanceof RegExp && t.test(e));
                    },
                    stringify: function (e, t) {
                        if (t = t || [], L.isObject(e)) {
                            if (L.contains(t, e))
                                return '<Cycle>';
                            t.push(e);
                        }
                        if (L.isArray(e))
                            return '[' + L.map(e, function (e) {
                                return L.stringify(e, t);
                            }).join(',') + ']';
                        if (L.isString(e))
                            return '"' + String(e) + '"';
                        if (L.isObject(e)) {
                            var a = [];
                            for (var n in e)
                                e.hasOwnProperty(n) && a.push(n + ': ' + L.stringify(e[n], t));
                            return '{' + a.join(', ') + '}';
                        }
                        return String(e);
                    },
                    trim: function (e) {
                        return null == e ? null : e.trim ? e.trim() : e.replace(/^ */, '').replace(/ *$/, '');
                    },
                    bind: function (e, t) {
                        return function () {
                            return e.apply(t, arguments);
                        };
                    },
                    throttle: function (e, t) {
                        var a = null;
                        return function () {
                            var n = this, i = arguments;
                            clearTimeout(a), a = setTimeout(function () {
                                e.apply(n, i);
                            }, t);
                        };
                    },
                    domReady: function (e) {
                        function a(e) {
                            for (g = 1; e = i.shift();)
                                e();
                        }
                        var n, i = [], r = !1, o = t, s = o.documentElement, l = s.doScroll, c = 'DOMContentLoaded', u = 'addEventListener', d = 'onreadystatechange', g = /^loade|^c/.test(o.readyState);
                        return o[u] && o[u](c, n = function () {
                            o.removeEventListener(c, n, r), a();
                        }, r), l && o.attachEvent(d, n = function () {
                            /^c/.test(o.readyState) && (o.detachEvent(d, n), a());
                        }), e = l ? function (t) {
                            self != top ? g ? t() : i.push(t) : function () {
                                try {
                                    s.doScroll('left');
                                } catch (a) {
                                    return setTimeout(function () {
                                        e(t);
                                    }, 50);
                                }
                                t();
                            }();
                        } : function (e) {
                            g ? e() : i.push(e);
                        };
                    }(),
                    loadScript: function (e, a) {
                        var n = t.createElement('script');
                        L.scriptOnLoad(e, n, a), n.src = e, t.getElementsByTagName('head')[0].appendChild(n);
                    },
                    scriptOnLoad: function (e, t, a) {
                        function n(e) {
                            e && L.logError(e), a && a(e);
                        }
                        'onload' in t ? (t.onload = function () {
                            n();
                        }, t.onerror = function () {
                            n(new Error('Failed to load script ' + e));
                        }) : 'readyState' in t && (t.onreadystatechange = function () {
                            var e = t.readyState;
                            'loaded' !== e && 'complete' !== e || (t.onreadystatechange = null, n());
                        });
                    },
                    loadScriptOnce: function (e, t) {
                        L.loadedScriptRegistry[e] || L.loadScript(e, function (a) {
                            a || (L.loadedScriptRegistry[e] = !0), t && t(a);
                        });
                    },
                    loadedScriptRegistry: {},
                    loadScriptSync: function (e) {
                        t.write ? L.domReadyFired ? L.notify('Cannot load sync the "' + e + '" script after DOM Ready.', 1) : (e.indexOf('"') > -1 && (e = encodeURI(e)), t.write('<script src="' + e + '"></script>')) : L.notify('Cannot load sync the "' + e + '" script because "document.write" is not available', 1);
                    },
                    pushAsyncScript: function (e) {
                        L.tools['default'].pushAsyncScript(e);
                    },
                    pushBlockingScript: function (e) {
                        L.tools['default'].pushBlockingScript(e);
                    },
                    addEventHandler: e.addEventListener ? function (e, t, a) {
                        e.addEventListener(t, a, !1);
                    } : function (e, t, a) {
                        e.attachEvent('on' + t, a);
                    },
                    removeEventHandler: e.removeEventListener ? function (e, t, a) {
                        e.removeEventListener(t, a, !1);
                    } : function (e, t, a) {
                        e.detachEvent('on' + t, a);
                    },
                    preventDefault: e.addEventListener ? function (e) {
                        e.preventDefault();
                    } : function (e) {
                        e.returnValue = !1;
                    },
                    stopPropagation: function (e) {
                        e.cancelBubble = !0, e.stopPropagation && e.stopPropagation();
                    },
                    containsElement: function (e, t) {
                        return e.contains ? e.contains(t) : !!(16 & e.compareDocumentPosition(t));
                    },
                    matchesCss: function (a) {
                        function n(e, t) {
                            var a = t.tagName;
                            return !!a && e.toLowerCase() === a.toLowerCase();
                        }
                        var i = a.matchesSelector || a.mozMatchesSelector || a.webkitMatchesSelector || a.oMatchesSelector || a.msMatchesSelector;
                        return i ? function (a, n) {
                            if (n === t || n === e)
                                return !1;
                            try {
                                return i.call(n, a);
                            } catch (r) {
                                return !1;
                            }
                        } : a.querySelectorAll ? function (e, t) {
                            if (!t.parentNode)
                                return !1;
                            if (e.match(/^[a-z]+$/i))
                                return n(e, t);
                            try {
                                for (var a = t.parentNode.querySelectorAll(e), i = a.length; i--;)
                                    if (a[i] === t)
                                        return !0;
                            } catch (r) {
                            }
                            return !1;
                        } : function (e, t) {
                            if (e.match(/^[a-z]+$/i))
                                return n(e, t);
                            try {
                                return L.Sizzle.matches(e, [t]).length > 0;
                            } catch (a) {
                                return !1;
                            }
                        };
                    }(t.documentElement),
                    cssQuery: (S = t, S.querySelectorAll ? function (e, t) {
                        var a;
                        try {
                            a = S.querySelectorAll(e);
                        } catch (n) {
                            a = [];
                        }
                        t(a);
                    } : function (e, t) {
                        if (L.Sizzle) {
                            var a;
                            try {
                                a = L.Sizzle(e);
                            } catch (n) {
                                a = [];
                            }
                            t(a);
                        } else
                            L.sizzleQueue.push([
                                e,
                                t
                            ]);
                    }),
                    hasAttr: function (e, t) {
                        return e.hasAttribute ? e.hasAttribute(t) : e[t] !== a;
                    },
                    inherit: function (e, t) {
                        var a = function () {
                        };
                        a.prototype = t.prototype, e.prototype = new a(), e.prototype.constructor = e;
                    },
                    extend: function (e, t) {
                        for (var a in t)
                            t.hasOwnProperty(a) && (e[a] = t[a]);
                    },
                    toArray: function () {
                        try {
                            var e = Array.prototype.slice;
                            return e.call(t.documentElement.childNodes, 0)[0].nodeType, function (t) {
                                return e.call(t, 0);
                            };
                        } catch (a) {
                            return function (e) {
                                for (var t = [], a = 0, n = e.length; a < n; a++)
                                    t.push(e[a]);
                                return t;
                            };
                        }
                    }(),
                    equalsIgnoreCase: function (e, t) {
                        return null == e ? null == t : null != t && String(e).toLowerCase() === String(t).toLowerCase();
                    },
                    poll: function (e, t, a) {
                        function n() {
                            L.isNumber(a) && i++ >= a || e() || setTimeout(n, t);
                        }
                        var i = 0;
                        t = t || 1000, n();
                    },
                    escapeForHtml: function (e) {
                        return e ? String(e).replace(/\&/g, '&amp;').replace(/\</g, '&lt;').replace(/\>/g, '&gt;').replace(/\"/g, '&quot;').replace(/\'/g, '&#x27;').replace(/\//g, '&#x2F;') : e;
                    }
                };
            L.availableTools = {}, L.availableEventEmitters = [], L.fireOnceEvents = [
                'condition',
                'elementexists'
            ], L.initEventEmitters = function () {
                L.eventEmitters = L.map(L.availableEventEmitters, function (e) {
                    return new e();
                });
            }, L.eventEmitterBackgroundTasks = function () {
                L.each(L.eventEmitters, function (e) {
                    'backgroundTasks' in e && e.backgroundTasks();
                });
            }, L.initTools = function (e) {
                var t = { 'default': new I() }, a = L.settings.euCookieName || 'sat_track';
                for (var n in e)
                    if (e.hasOwnProperty(n)) {
                        var i, r, o;
                        if ((i = e[n]).euCookie)
                            if ('true' !== L.readCookie(a))
                                continue;
                        if (!(r = L.availableTools[i.engine])) {
                            var s = [];
                            for (var l in L.availableTools)
                                L.availableTools.hasOwnProperty(l) && s.push(l);
                            throw new Error('No tool engine named ' + i.engine + ', available: ' + s.join(',') + '.');
                        }
                        (o = new r(i)).id = n, t[n] = o;
                    }
                return t;
            }, L.preprocessArguments = function (e, t, a, n, i) {
                function r(e) {
                    return n && L.isString(e) ? e.toLowerCase() : e;
                }
                function o(e) {
                    var l = {};
                    for (var c in e)
                        if (e.hasOwnProperty(c)) {
                            var u = e[c];
                            L.isObject(u) ? l[c] = o(u) : L.isArray(u) ? l[c] = s(u, n) : l[c] = r(L.replace(u, t, a, i));
                        }
                    return l;
                }
                function s(e) {
                    for (var n = [], i = 0, s = e.length; i < s; i++) {
                        var l = e[i];
                        L.isString(l) ? l = r(L.replace(l, t, a)) : l && l.constructor === Object && (l = o(l)), n.push(l);
                    }
                    return n;
                }
                return e ? s(e, n) : e;
            }, L.execute = function (e, t, a, n) {
                function i(i) {
                    var r = n[i || 'default'];
                    if (r)
                        try {
                            r.triggerCommand(e, t, a);
                        } catch (o) {
                            L.logError(o);
                        }
                }
                if (!_satellite.settings.hideActivity)
                    if (n = n || L.tools, e.engine) {
                        var r = e.engine;
                        for (var o in n)
                            if (n.hasOwnProperty(o)) {
                                var s = n[o];
                                s.settings && s.settings.engine === r && i(o);
                            }
                    } else
                        e.tool instanceof Array ? L.each(e.tool, function (e) {
                            i(e);
                        }) : i(e.tool);
            }, L.Logger = {
                outputEnabled: !1,
                messages: [],
                keepLimit: 100,
                flushed: !1,
                LEVELS: [
                    null,
                    null,
                    'log',
                    'info',
                    'warn',
                    'error'
                ],
                message: function (e, t) {
                    var a = this.LEVELS[t] || 'log';
                    this.messages.push([
                        a,
                        e
                    ]), this.messages.length > this.keepLimit && this.messages.shift(), this.outputEnabled && this.echo(a, e);
                },
                getHistory: function () {
                    return this.messages;
                },
                clearHistory: function () {
                    this.messages = [];
                },
                setOutputState: function (e) {
                    this.outputEnabled != e && (this.outputEnabled = e, e ? this.flush() : this.flushed = !1);
                },
                echo: function (t, a) {
                    e.console && e.console[t]('SATELLITE: ' + a);
                },
                flush: function () {
                    this.flushed || (L.each(this.messages, function (e) {
                        !0 !== e[2] && (this.echo(e[0], e[1]), e[2] = !0);
                    }, this), this.flushed = !0);
                }
            }, L.notify = L.bind(L.Logger.message, L.Logger), L.cleanText = function (e) {
                return null == e ? null : L.trim(e).replace(/\s+/g, ' ');
            }, L.cleanText.legacy = function (e) {
                return null == e ? null : L.trim(e).replace(/\s{2,}/g, ' ').replace(/[^\000-\177]*/g, '');
            }, L.text = function (e) {
                return e.textContent || e.innerText;
            }, L.specialProperties = {
                text: L.text,
                cleanText: function (e) {
                    return L.cleanText(L.text(e));
                }
            }, L.getObjectProperty = function (e, t, n) {
                for (var i, r = t.split('.'), o = e, s = L.specialProperties, l = 0, c = r.length; l < c; l++) {
                    if (null == o)
                        return a;
                    var u = r[l];
                    if (n && '@' === u.charAt(0))
                        o = s[u.slice(1)](o);
                    else if (o.getAttribute && (i = u.match(/^getAttribute\((.+)\)$/))) {
                        var d = i[1];
                        o = o.getAttribute(d);
                    } else
                        o = o[u];
                }
                return o;
            }, L.getToolsByType = function (e) {
                if (!e)
                    throw new Error('Tool type is missing');
                var t = [];
                for (var a in L.tools)
                    if (L.tools.hasOwnProperty(a)) {
                        var n = L.tools[a];
                        n.settings && n.settings.engine === e && t.push(n);
                    }
                return t;
            }, L.setVar = function () {
                var e = L.data.customVars;
                if (null == e && (L.data.customVars = {}, e = L.data.customVars), 'string' == typeof arguments[0])
                    e[arguments[0]] = arguments[1];
                else if (arguments[0]) {
                    var t = arguments[0];
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a]);
                }
            }, L.dataElementSafe = function (e, t) {
                if (arguments.length > 2) {
                    var a = arguments[2];
                    'pageview' === t ? L.dataElementSafe.pageviewCache[e] = a : 'session' === t ? L.setCookie('_sdsat_' + e, a) : 'visitor' === t && L.setCookie('_sdsat_' + e, a, 730);
                } else {
                    if ('pageview' === t)
                        return L.dataElementSafe.pageviewCache[e];
                    if ('session' === t || 'visitor' === t)
                        return L.readCookie('_sdsat_' + e);
                }
            }, L.dataElementSafe.pageviewCache = {}, L.realGetDataElement = function (t) {
                var a;
                return t.selector ? L.hasSelector && L.cssQuery(t.selector, function (e) {
                    if (e.length > 0) {
                        var n = e[0];
                        'text' === t.property ? a = n.innerText || n.textContent : t.property in n ? a = n[t.property] : L.hasAttr(n, t.property) && (a = n.getAttribute(t.property));
                    }
                }) : t.queryParam ? a = t.ignoreCase ? L.getQueryParamCaseInsensitive(t.queryParam) : L.getQueryParam(t.queryParam) : t.cookie ? a = L.readCookie(t.cookie) : t.jsVariable ? a = L.getObjectProperty(e, t.jsVariable) : t.customJS ? a = t.customJS() : t.contextHub && (a = t.contextHub()), L.isString(a) && t.cleanText && (a = L.cleanText(a)), a;
            }, L.getDataElement = function (e, t, n) {
                if (null == (n = n || L.dataElements[e]))
                    return L.settings.undefinedVarsReturnEmpty ? '' : null;
                var i = L.realGetDataElement(n);
                return i === a && n.storeLength ? i = L.dataElementSafe(e, n.storeLength) : i !== a && n.storeLength && L.dataElementSafe(e, n.storeLength, i), i || t || (i = n['default'] || ''), L.isString(i) && n.forceLowerCase && (i = i.toLowerCase()), i;
            }, L.getVar = function (n, i, r) {
                var o, s, l = L.data.customVars, c = r ? r.target || r.srcElement : null, u = {
                        uri: L.URI(),
                        protocol: t.location.protocol,
                        hostname: t.location.hostname
                    };
                if (L.dataElements && n in L.dataElements)
                    return L.getDataElement(n);
                if ((s = u[n.toLowerCase()]) === a)
                    if ('this.' === n.substring(0, 5))
                        n = n.slice(5), s = L.getObjectProperty(i, n, !0);
                    else if ('event.' === n.substring(0, 6))
                        n = n.slice(6), s = L.getObjectProperty(r, n);
                    else if ('target.' === n.substring(0, 7))
                        n = n.slice(7), s = L.getObjectProperty(c, n);
                    else if ('window.' === n.substring(0, 7))
                        n = n.slice(7), s = L.getObjectProperty(e, n);
                    else if ('param.' === n.substring(0, 6))
                        n = n.slice(6), s = L.getQueryParam(n);
                    else if (o = n.match(/^rand([0-9]+)$/)) {
                        var d = Number(o[1]), g = (Math.random() * (Math.pow(10, d) - 1)).toFixed(0);
                        s = Array(d - g.length + 1).join('0') + g;
                    } else
                        s = L.getObjectProperty(l, n);
                return s;
            }, L.getVars = function (e, t, a) {
                var n = {};
                return L.each(e, function (e) {
                    n[e] = L.getVar(e, t, a);
                }), n;
            }, L.replace = function (e, t, a, n) {
                return 'string' != typeof e ? e : e.replace(/%(.*?)%/g, function (e, i) {
                    var r = L.getVar(i, t, a);
                    return null == r ? L.settings.undefinedVarsReturnEmpty ? '' : e : n ? L.escapeForHtml(r) : r;
                });
            }, L.escapeHtmlParams = function (e) {
                return e.escapeHtml = !0, e;
            }, L.searchVariables = function (e, t, a) {
                if (!e || 0 === e.length)
                    return '';
                for (var n = [], i = 0, r = e.length; i < r; i++) {
                    var o = e[i], s = L.getVar(o, t, a);
                    n.push(o + '=' + escape(s));
                }
                return '?' + n.join('&');
            }, L.fireRule = function (e, t, a) {
                var n = e.trigger;
                if (n) {
                    for (var i = 0, r = n.length; i < r; i++) {
                        var o = n[i];
                        L.execute(o, t, a);
                    }
                    L.contains(L.fireOnceEvents, e.event) && (e.expired = !0);
                }
            }, L.isLinked = function (e) {
                for (var t = e; t; t = t.parentNode)
                    if (L.isLinkTag(t))
                        return !0;
                return !1;
            }, L.firePageLoadEvent = function (e) {
                for (var a = t.location, n = {
                            type: e,
                            target: a
                        }, i = L.pageLoadRules, r = L.evtHandlers[n.type], o = i.length; o--;) {
                    var s = i[o];
                    L.ruleMatches(s, n, a) && (L.notify('Rule "' + s.name + '" fired.', 1), L.fireRule(s, a, n));
                }
                for (var l in L.tools)
                    if (L.tools.hasOwnProperty(l)) {
                        var c = L.tools[l];
                        c.endPLPhase && c.endPLPhase(e);
                    }
                r && L.each(r, function (e) {
                    e(n);
                });
            }, L.track = function (e) {
                e = e.replace(/^\s*/, '').replace(/\s*$/, '');
                for (var t = 0; t < L.directCallRules.length; t++) {
                    var a = L.directCallRules[t];
                    if (a.name === e)
                        return L.notify('Direct call Rule "' + e + '" fired.', 1), void L.fireRule(a, location, { type: e });
                }
                L.notify('Direct call Rule "' + e + '" not found.', 1);
            }, L.basePath = function () {
                return L.data.host ? ('https:' === t.location.protocol ? 'https://' + L.data.host.https : 'http://' + L.data.host.http) + '/' : this.settings.basePath;
            }, L.setLocation = function (t) {
                e.location = t;
            }, L.parseQueryParams = function (e) {
                var t = function (e) {
                    var t = e;
                    try {
                        t = decodeURIComponent(e);
                    } catch (a) {
                    }
                    return t;
                };
                if ('' === e || !1 === L.isString(e))
                    return {};
                0 === e.indexOf('?') && (e = e.substring(1));
                var a = {}, n = e.split('&');
                return L.each(n, function (e) {
                    (e = e.split('='))[1] && (a[t(e[0])] = t(e[1]));
                }), a;
            }, L.getCaseSensitivityQueryParamsMap = function (e) {
                var t = L.parseQueryParams(e), a = {};
                for (var n in t)
                    t.hasOwnProperty(n) && (a[n.toLowerCase()] = t[n]);
                return {
                    normal: t,
                    caseInsensitive: a
                };
            }, L.updateQueryParams = function () {
                L.QueryParams = L.getCaseSensitivityQueryParamsMap(e.location.search);
            }, L.updateQueryParams(), L.getQueryParam = function (e) {
                return L.QueryParams.normal[e];
            }, L.getQueryParamCaseInsensitive = function (e) {
                return L.QueryParams.caseInsensitive[e.toLowerCase()];
            }, L.encodeObjectToURI = function (e) {
                if (!1 === L.isObject(e))
                    return '';
                var t = [];
                for (var a in e)
                    e.hasOwnProperty(a) && t.push(encodeURIComponent(a) + '=' + encodeURIComponent(e[a]));
                return t.join('&');
            }, L.readCookie = function (e) {
                for (var n = e + '=', i = t.cookie.split(';'), r = 0; r < i.length; r++) {
                    for (var o = i[r]; ' ' == o.charAt(0);)
                        o = o.substring(1, o.length);
                    if (0 === o.indexOf(n))
                        return o.substring(n.length, o.length);
                }
                return a;
            }, L.setCookie = function (e, a, n) {
                var i;
                if (n) {
                    var r = new Date();
                    r.setTime(r.getTime() + 24 * n * 60 * 60 * 1000), i = '; expires=' + r.toGMTString();
                } else
                    i = '';
                t.cookie = e + '=' + a + i + '; path=/';
            }, L.removeCookie = function (e) {
                L.setCookie(e, '', -1);
            }, L.getElementProperty = function (e, t) {
                if ('@' === t.charAt(0)) {
                    var n = L.specialProperties[t.substring(1)];
                    if (n)
                        return n(e);
                }
                return 'innerText' === t ? L.text(e) : t in e ? e[t] : e.getAttribute ? e.getAttribute(t) : a;
            }, L.propertiesMatch = function (e, t) {
                if (e)
                    for (var a in e)
                        if (e.hasOwnProperty(a)) {
                            var n = e[a], i = L.getElementProperty(t, a);
                            if ('string' == typeof n && n !== i)
                                return !1;
                            if (n instanceof RegExp && !n.test(i))
                                return !1;
                        }
                return !0;
            }, L.isRightClick = function (e) {
                var t;
                return e.which ? t = 3 == e.which : e.button && (t = 2 == e.button), t;
            }, L.ruleMatches = function (e, t, a, n) {
                var i = e.condition, r = e.conditions, o = e.property, s = t.type, l = e.value, c = t.target || t.srcElement, u = a === c;
                if (e.event !== s && ('custom' !== e.event || e.customEvent !== s))
                    return !1;
                if (!L.ruleInScope(e))
                    return !1;
                if ('click' === e.event && L.isRightClick(t))
                    return !1;
                if (e.isDefault && n > 0)
                    return !1;
                if (e.expired)
                    return !1;
                if ('inview' === s && t.inviewDelay !== e.inviewDelay)
                    return !1;
                if (!u && (!1 === e.bubbleFireIfParent || 0 !== n && !1 === e.bubbleFireIfChildFired))
                    return !1;
                if (e.selector && !L.matchesCss(e.selector, a))
                    return !1;
                if (!L.propertiesMatch(o, a))
                    return !1;
                if (null != l)
                    if ('string' == typeof l) {
                        if (l !== a.value)
                            return !1;
                    } else if (!l.test(a.value))
                        return !1;
                if (i)
                    try {
                        if (!i.call(a, t, c))
                            return L.notify('Condition for rule "' + e.name + '" not met.', 1), !1;
                    } catch (g) {
                        return L.notify('Condition for rule "' + e.name + '" not met. Error: ' + g.message, 1), !1;
                    }
                if (r) {
                    var d = L.find(r, function (n) {
                        try {
                            return !n.call(a, t, c);
                        } catch (g) {
                            return L.notify('Condition for rule "' + e.name + '" not met. Error: ' + g.message, 1), !0;
                        }
                    });
                    if (d)
                        return L.notify('Condition ' + d.toString() + ' for rule "' + e.name + '" not met.', 1), !1;
                }
                return !0;
            }, L.evtHandlers = {}, L.bindEvent = function (e, t) {
                var a = L.evtHandlers;
                a[e] || (a[e] = []), a[e].push(t);
            }, L.whenEvent = L.bindEvent, L.unbindEvent = function (e, t) {
                var a = L.evtHandlers;
                if (a[e]) {
                    var n = L.indexOf(a[e], t);
                    a[e].splice(n, 1);
                }
            }, L.bindEventOnce = function (e, t) {
                var a = function () {
                    L.unbindEvent(e, a), t.apply(null, arguments);
                };
                L.bindEvent(e, a);
            }, L.isVMLPoisoned = function (e) {
                if (!e)
                    return !1;
                try {
                    e.nodeName;
                } catch (t) {
                    if ('Attribute only valid on v:image' === t.message)
                        return !0;
                }
                return !1;
            }, L.handleEvent = function (e) {
                if (!L.$data(e, 'eventProcessed')) {
                    var t = e.type.toLowerCase(), a = e.target || e.srcElement, n = 0, i = L.rules, r = (L.tools, L.evtHandlers[e.type]);
                    if (L.isVMLPoisoned(a))
                        L.notify('detected ' + t + ' on poisoned VML element, skipping.', 1);
                    else {
                        r && L.each(r, function (t) {
                            t(e);
                        }), a && a.nodeName ? L.notify('detected ' + t + ' on ' + a.nodeName, 1) : L.notify('detected ' + t, 1);
                        for (var o = a; o; o = o.parentNode) {
                            var s = !1;
                            if (L.each(i, function (t) {
                                    L.ruleMatches(t, e, o, n) && (L.notify('Rule "' + t.name + '" fired.', 1), L.fireRule(t, o, e), n++, t.bubbleStop && (s = !0));
                                }), s)
                                break;
                        }
                        L.$data(e, 'eventProcessed', !0);
                    }
                }
            }, L.onEvent = t.querySelectorAll ? function (e) {
                L.handleEvent(e);
            } : (V = [], (k = function (e) {
                e.selector ? V.push(e) : L.handleEvent(e);
            }).pendingEvents = V, k), L.fireEvent = function (e, t) {
                L.onEvent({
                    type: e,
                    target: t
                });
            }, L.registerEvents = function (e, t) {
                for (var a = t.length - 1; a >= 0; a--) {
                    var n = t[a];
                    L.$data(e, n + '.tracked') || (L.addEventHandler(e, n, L.onEvent), L.$data(e, n + '.tracked', !0));
                }
            }, L.registerEventsForTags = function (e, a) {
                for (var n = e.length - 1; n >= 0; n--)
                    for (var i = e[n], r = t.getElementsByTagName(i), o = r.length - 1; o >= 0; o--)
                        L.registerEvents(r[o], a);
            }, L.setListeners = function () {
                var e = [
                    'click',
                    'submit'
                ];
                L.each(L.rules, function (t) {
                    'custom' === t.event && t.hasOwnProperty('customEvent') && !L.contains(e, t.customEvent) && e.push(t.customEvent);
                }), L.registerEvents(t, e);
            }, L.getUniqueRuleEvents = function () {
                return L._uniqueRuleEvents || (L._uniqueRuleEvents = [], L.each(L.rules, function (e) {
                    -1 === L.indexOf(L._uniqueRuleEvents, e.event) && L._uniqueRuleEvents.push(e.event);
                })), L._uniqueRuleEvents;
            }, L.setFormListeners = function () {
                if (!L._relevantFormEvents) {
                    var e = [
                        'change',
                        'focus',
                        'blur',
                        'keypress'
                    ];
                    L._relevantFormEvents = L.filter(L.getUniqueRuleEvents(), function (t) {
                        return -1 !== L.indexOf(e, t);
                    });
                }
                L._relevantFormEvents.length && L.registerEventsForTags([
                    'input',
                    'select',
                    'textarea',
                    'button'
                ], L._relevantFormEvents);
            }, L.setVideoListeners = function () {
                if (!L._relevantVideoEvents) {
                    var e = [
                        'play',
                        'pause',
                        'ended',
                        'volumechange',
                        'stalled',
                        'loadeddata'
                    ];
                    L._relevantVideoEvents = L.filter(L.getUniqueRuleEvents(), function (t) {
                        return -1 !== L.indexOf(e, t);
                    });
                }
                L._relevantVideoEvents.length && L.registerEventsForTags(['video'], L._relevantVideoEvents);
            }, L.readStoredSetting = function (t) {
                const $___old_573585c894354c7f = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                try {
                    if ($___old_573585c894354c7f)
                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_c74fbeb467519a61.localStorage));
                    return function () {
                        try {
                            return t = 'sdsat_' + t, e.localStorage.getItem(t);
                        } catch (a) {
                            return L.notify('Cannot read stored setting from localStorage: ' + a.message, 2), null;
                        }
                    }.apply(this, arguments);
                } finally {
                    if ($___old_573585c894354c7f)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_573585c894354c7f));
                }
            }, L.loadStoredSettings = function () {
                var e = L.readStoredSetting('debug'), t = L.readStoredSetting('hide_activity');
                e && (L.settings.notifications = 'true' === e), t && (L.settings.hideActivity = 'true' === t);
            }, L.isRuleActive = function (e, t) {
                function a(e, t) {
                    return t = i(t, {
                        hour: e[f](),
                        minute: e[p]()
                    }), Math.floor(Math.abs((e.getTime() - t.getTime()) / 86400000));
                }
                function n(e, t) {
                    function a(e) {
                        return 12 * e[d]() + e[g]();
                    }
                    return Math.abs(a(e) - a(t));
                }
                function i(e, t) {
                    var a = new Date(e.getTime());
                    for (var n in t)
                        if (t.hasOwnProperty(n)) {
                            var i = t[n];
                            switch (n) {
                            case 'hour':
                                a[m](i);
                                break;
                            case 'minute':
                                a[h](i);
                                break;
                            case 'date':
                                a[v](i);
                            }
                        }
                    return a;
                }
                function r(e, t) {
                    return 60 * e[f]() + e[p]() > 60 * t[f]() + t[p]();
                }
                function o(e, t) {
                    return 60 * e[f]() + e[p]() < 60 * t[f]() + t[p]();
                }
                var s = e.schedule;
                if (!s)
                    return !0;
                var l = s.utc, c = l ? 'getUTCDate' : 'getDate', u = l ? 'getUTCDay' : 'getDay', d = l ? 'getUTCFullYear' : 'getFullYear', g = l ? 'getUTCMonth' : 'getMonth', f = l ? 'getUTCHours' : 'getHours', p = l ? 'getUTCMinutes' : 'getMinutes', m = l ? 'setUTCHours' : 'setHours', h = l ? 'setUTCMinutes' : 'setMinutes', v = l ? 'setUTCDate' : 'setDate';
                if (t = t || new Date(), s.repeat) {
                    if (r(s.start, t))
                        return !1;
                    if (o(s.end, t))
                        return !1;
                    if (t < s.start)
                        return !1;
                    if (s.endRepeat && t >= s.endRepeat)
                        return !1;
                    if ('daily' === s.repeat) {
                        if (s.repeatEvery)
                            if (a(s.start, t) % s.repeatEvery != 0)
                                return !1;
                    } else if ('weekly' === s.repeat) {
                        if (s.days) {
                            if (!L.contains(s.days, t[u]()))
                                return !1;
                        } else if (s.start[u]() !== t[u]())
                            return !1;
                        if (s.repeatEvery)
                            if (a(s.start, t) % (7 * s.repeatEvery) != 0)
                                return !1;
                    } else if ('monthly' === s.repeat) {
                        if (s.repeatEvery)
                            if (n(s.start, t) % s.repeatEvery != 0)
                                return !1;
                        if (s.nthWeek && s.mthDay) {
                            if (s.mthDay !== t[u]())
                                return !1;
                            var _ = Math.floor((t[c]() - t[u]() + 1) / 7);
                            if (s.nthWeek !== _)
                                return !1;
                        } else if (s.start[c]() !== t[c]())
                            return !1;
                    } else if ('yearly' === s.repeat) {
                        if (s.start[g]() !== t[g]())
                            return !1;
                        if (s.start[c]() !== t[c]())
                            return !1;
                        if (s.repeatEvery)
                            if (Math.abs(s.start[d]() - t[d]()) % s.repeatEvery != 0)
                                return !1;
                    }
                } else {
                    if (s.start > t)
                        return !1;
                    if (s.end < t)
                        return !1;
                }
                return !0;
            }, L.isOutboundLink = function (e) {
                if (!e.getAttribute('href'))
                    return !1;
                var t = e.hostname, a = (e.href, e.protocol);
                return ('http:' === a || 'https:' === a) && (!L.any(L.settings.domainList, function (e) {
                    return L.isSubdomainOf(t, e);
                }) && t !== location.hostname);
            }, L.isLinkerLink = function (e) {
                return !(!e.getAttribute || !e.getAttribute('href')) && (L.hasMultipleDomains() && e.hostname != location.hostname && !e.href.match(/^javascript/i) && !L.isOutboundLink(e));
            }, L.isSubdomainOf = function (e, t) {
                if (e === t)
                    return !0;
                var a = e.length - t.length;
                return a > 0 && L.equalsIgnoreCase(e.substring(a), t);
            }, L.getVisitorId = function () {
                var e = L.getToolsByType('visitor_id');
                return 0 === e.length ? null : e[0].getInstance();
            }, L.URI = function () {
                var e = t.location.pathname + t.location.search;
                return L.settings.forceLowerCase && (e = e.toLowerCase()), e;
            }, L.URL = function () {
                var e = t.location.href;
                return L.settings.forceLowerCase && (e = e.toLowerCase()), e;
            }, L.filterRules = function () {
                function e(e) {
                    return !!L.isRuleActive(e);
                }
                L.rules = L.filter(L.rules, e), L.pageLoadRules = L.filter(L.pageLoadRules, e);
            }, L.ruleInScope = function (e, a) {
                function n(e, t) {
                    function a(e) {
                        return t.match(e);
                    }
                    var n = e.include, r = e.exclude;
                    if (n && i(n, t))
                        return !0;
                    if (r) {
                        if (L.isString(r) && r === t)
                            return !0;
                        if (L.isArray(r) && L.any(r, a))
                            return !0;
                        if (L.isRegex(r) && a(r))
                            return !0;
                    }
                    return !1;
                }
                function i(e, t) {
                    function a(e) {
                        return t.match(e);
                    }
                    return !(!L.isString(e) || e === t) || (!(!L.isArray(e) || L.any(e, a)) || !(!L.isRegex(e) || a(e)));
                }
                a = a || t.location;
                var r = e.scope;
                if (!r)
                    return !0;
                var o = r.URI, s = r.subdomains, l = r.domains, c = r.protocols, u = r.hashes;
                return (!o || !n(o, a.pathname + a.search)) && ((!s || !n(s, a.hostname)) && ((!l || !i(l, a.hostname)) && ((!c || !i(c, a.protocol)) && (!u || !n(u, a.hash)))));
            }, L.backgroundTasks = function () {
                new Date();
                L.setFormListeners(), L.setVideoListeners(), L.loadStoredSettings(), L.registerNewElementsForDynamicRules(), L.eventEmitterBackgroundTasks();
                new Date();
            }, L.registerNewElementsForDynamicRules = function () {
                function e(t, a) {
                    var n = e.cache[t];
                    if (n)
                        return a(n);
                    L.cssQuery(t, function (n) {
                        e.cache[t] = n, a(n);
                    });
                }
                e.cache = {}, L.each(L.dynamicRules, function (t) {
                    e(t.selector, function (e) {
                        L.each(e, function (e) {
                            var a = 'custom' === t.event ? t.customEvent : t.event;
                            L.$data(e, 'dynamicRules.seen.' + a) || (L.$data(e, 'dynamicRules.seen.' + a, !0), L.propertiesMatch(t.property, e) && L.registerEvents(e, [a]));
                        });
                    });
                });
            }, L.ensureCSSSelector = function () {
                t.querySelectorAll ? L.hasSelector = !0 : (L.loadingSizzle = !0, L.sizzleQueue = [], L.loadScript(L.basePath() + 'selector.js', function () {
                    if (L.Sizzle) {
                        var e = L.onEvent.pendingEvents;
                        L.each(e, function (e) {
                            L.handleEvent(e);
                        }, this), L.onEvent = L.handleEvent, L.hasSelector = !0, delete L.loadingSizzle, L.each(L.sizzleQueue, function (e) {
                            L.cssQuery(e[0], e[1]);
                        }), delete L.sizzleQueue;
                    } else
                        L.logError(new Error('Failed to load selector.js'));
                }));
            }, L.errors = [], L.logError = function (e) {
                L.errors.push(e), L.notify(e.name + ' - ' + e.message, 5);
            }, L.pageBottom = function () {
                L.initialized && (L.pageBottomFired = !0, L.firePageLoadEvent('pagebottom'));
            }, L.stagingLibraryOverride = function () {
                if ('true' === L.readStoredSetting('stagingLibrary')) {
                    for (var e, a, n, i = t.getElementsByTagName('script'), r = /^(.*)satelliteLib-([a-f0-9]{40})\.js$/, o = /^(.*)satelliteLib-([a-f0-9]{40})-staging\.js$/, s = 0, l = i.length; s < l && (!(n = i[s].getAttribute('src')) || (e || (e = n.match(r)), a || (a = n.match(o)), !a)); s++);
                    if (e && !a) {
                        var c = e[1] + 'satelliteLib-' + e[2] + '-staging.js';
                        if (t.write)
                            t.write('<script src="' + c + '"></script>');
                        else {
                            var u = t.createElement('script');
                            u.src = c, t.head.appendChild(u);
                        }
                        return !0;
                    }
                }
                return !1;
            }, L.checkAsyncInclude = function () {
                e.satellite_asyncLoad && L.notify('You may be using the async installation of Satellite. In-page HTML and the "pagebottom" event will not work. Please update your Satellite installation for these features.', 5);
            }, L.hasMultipleDomains = function () {
                return !!L.settings.domainList && L.settings.domainList.length > 1;
            }, L.handleOverrides = function () {
                if (T)
                    for (var e in T)
                        T.hasOwnProperty(e) && (L.data[e] = T[e]);
            }, L.privacyManagerParams = function () {
                var e = {};
                L.extend(e, L.settings.privacyManagement);
                var t = [];
                for (var a in L.tools)
                    if (L.tools.hasOwnProperty(a)) {
                        var n = L.tools[a], i = n.settings;
                        if (!i)
                            continue;
                        'sc' === i.engine && t.push(n);
                    }
                var r = L.filter(L.map(t, function (e) {
                    return e.getTrackingServer();
                }), function (e) {
                    return null != e;
                });
                e.adobeAnalyticsTrackingServers = r;
                for (var o = [
                            'bannerText',
                            'headline',
                            'introductoryText',
                            'customCSS'
                        ], s = 0; s < o.length; s++) {
                    var l = o[s], c = e[l];
                    if (c)
                        if ('text' === c.type)
                            e[l] = c.value;
                        else {
                            if ('data' !== c.type)
                                throw new Error('Invalid type: ' + c.type);
                            e[l] = L.getVar(c.value);
                        }
                }
                return e;
            }, L.prepareLoadPrivacyManager = function () {
                function t(e) {
                    function t() {
                        ++r === i.length && (a(), clearTimeout(o), e());
                    }
                    function a() {
                        L.each(i, function (e) {
                            L.unbindEvent(e.id + '.load', t);
                        });
                    }
                    function n() {
                        a(), e();
                    }
                    var i = L.filter(L.values(L.tools), function (e) {
                        return e.settings && 'sc' === e.settings.engine;
                    });
                    if (0 === i.length)
                        return e();
                    var r = 0;
                    L.each(i, function (e) {
                        L.bindEvent(e.id + '.load', t);
                    });
                    var o = setTimeout(n, 5000);
                }
                L.addEventHandler(e, 'load', function () {
                    t(L.loadPrivacyManager);
                });
            }, L.loadPrivacyManager = function () {
                var e = L.basePath() + 'privacy_manager.js';
                L.loadScript(e, function () {
                    var e = L.privacyManager;
                    e.configure(L.privacyManagerParams()), e.openIfRequired();
                });
            }, L.init = function (t) {
                if (!L.stagingLibraryOverride()) {
                    L.configurationSettings = t;
                    var n = t.tools;
                    for (var i in (delete t.tools, t))
                        t.hasOwnProperty(i) && (L[i] = t[i]);
                    L.data.customVars === a && (L.data.customVars = {}), L.data.queryParams = L.QueryParams.normal, L.handleOverrides(), L.detectBrowserInfo(), L.trackVisitorInfo && L.trackVisitorInfo(), L.loadStoredSettings(), L.Logger.setOutputState(L.settings.notifications), L.checkAsyncInclude(), L.ensureCSSSelector(), L.filterRules(), L.dynamicRules = L.filter(L.rules, function (e) {
                        return e.eventHandlerOnElement;
                    }), L.tools = L.initTools(n), L.initEventEmitters(), L.firePageLoadEvent('aftertoolinit'), L.settings.privacyManagement && L.prepareLoadPrivacyManager(), L.hasSelector && L.domReady(L.eventEmitterBackgroundTasks), L.setListeners(), L.domReady(function () {
                        L.poll(function () {
                            L.backgroundTasks();
                        }, L.settings.recheckEvery || 3000);
                    }), L.domReady(function () {
                        L.domReadyFired = !0, L.pageBottomFired || L.pageBottom(), L.firePageLoadEvent('domready');
                    }), L.addEventHandler(e, 'load', function () {
                        L.firePageLoadEvent('windowload');
                    }), L.firePageLoadEvent('pagetop'), L.initialized = !0;
                }
            }, L.pageLoadPhases = [
                'aftertoolinit',
                'pagetop',
                'pagebottom',
                'domready',
                'windowload'
            ], L.loadEventBefore = function (e, t) {
                return L.indexOf(L.pageLoadPhases, e) <= L.indexOf(L.pageLoadPhases, t);
            }, L.flushPendingCalls = function (e) {
                e.pending && (L.each(e.pending, function (t) {
                    var a = t[0], n = t[1], i = t[2], r = t[3];
                    a in e ? e[a].apply(e, [
                        n,
                        i
                    ].concat(r)) : e.emit ? e.emit(a, n, i, r) : L.notify('Failed to trigger ' + a + ' for tool ' + e.id, 1);
                }), delete e.pending);
            }, L.setDebug = function (t) {
                try {
                    e.localStorage.setItem('sdsat_debug', t);
                } catch (a) {
                    L.notify('Cannot set debug mode: ' + a.message, 2);
                }
            }, L.getUserAgent = function () {
                return navigator.userAgent;
            }, L.detectBrowserInfo = function () {
                function e(e) {
                    return function (t) {
                        for (var a in e) {
                            if (e.hasOwnProperty(a))
                                if (e[a].test(t))
                                    return a;
                        }
                        return 'Unknown';
                    };
                }
                var t = e({
                        'IE Edge Mobile': /Windows Phone.*Edge/,
                        'IE Edge': /Edge/,
                        OmniWeb: /OmniWeb/,
                        'Opera Mini': /Opera Mini/,
                        'Opera Mobile': /Opera Mobi/,
                        Opera: /Opera/,
                        Chrome: /Chrome|CriOS|CrMo/,
                        Firefox: /Firefox|FxiOS/,
                        'IE Mobile': /IEMobile/,
                        IE: /MSIE|Trident/,
                        'Mobile Safari': /Mobile(\/[0-9A-z]+)? Safari/,
                        Safari: /Safari/
                    }), a = e({
                        Blackberry: /BlackBerry|BB10/,
                        'Symbian OS': /Symbian|SymbOS/,
                        Maemo: /Maemo/,
                        Android: /Android/,
                        Linux: / Linux /,
                        Unix: /FreeBSD|OpenBSD|CrOS/,
                        Windows: /[\( ]Windows /,
                        iOS: /iPhone|iPad|iPod/,
                        MacOS: /Macintosh;/
                    }), n = e({
                        Nokia: /Symbian|SymbOS|Maemo/,
                        'Windows Phone': /Windows Phone/,
                        Blackberry: /BlackBerry|BB10/,
                        Android: /Android/,
                        iPad: /iPad/,
                        iPod: /iPod/,
                        iPhone: /iPhone/,
                        Desktop: /.*/
                    }), i = L.getUserAgent();
                L.browserInfo = {
                    browser: t(i),
                    os: a(i),
                    deviceType: n(i)
                };
            }, L.isHttps = function () {
                return 'https:' == t.location.protocol;
            }, L.BaseTool = function (e) {
                this.settings = e || {}, this.forceLowerCase = L.settings.forceLowerCase, 'forceLowerCase' in this.settings && (this.forceLowerCase = this.settings.forceLowerCase);
            }, L.BaseTool.prototype = {
                triggerCommand: function (e, t, a) {
                    var n = this.settings || {};
                    if (this.initialize && this.isQueueAvailable() && this.isQueueable(e) && a && L.loadEventBefore(a.type, n.loadOn))
                        this.queueCommand(e, t, a);
                    else {
                        var i = e.command, r = this['$' + i], o = !!r && r.escapeHtml, s = L.preprocessArguments(e.arguments, t, a, this.forceLowerCase, o);
                        r ? r.apply(this, [
                            t,
                            a
                        ].concat(s)) : this.$missing$ ? this.$missing$(i, t, a, s) : L.notify('Failed to trigger ' + i + ' for tool ' + this.id, 1);
                    }
                },
                endPLPhase: function () {
                },
                isQueueable: function (e) {
                    return 'cancelToolInit' !== e.command;
                },
                isQueueAvailable: function () {
                    return !this.initialized && !this.initializing;
                },
                flushQueue: function () {
                    this.pending && (L.each(this.pending, function (e) {
                        this.triggerCommand.apply(this, e);
                    }, this), this.pending = []);
                },
                queueCommand: function (e, t, a) {
                    this.pending || (this.pending = []), this.pending.push([
                        e,
                        t,
                        a
                    ]);
                },
                $cancelToolInit: function () {
                    this._cancelToolInit = !0;
                }
            }, e._satellite = L, n.prototype.backgroundTasks = function () {
                L.each(this.rules, function (e) {
                    L.cssQuery(e.selector, function (e) {
                        if (e.length > 0) {
                            var t = e[0];
                            if (L.$data(t, 'elementexists.seen'))
                                return;
                            L.$data(t, 'elementexists.seen', !0), L.onEvent({
                                type: 'elementexists',
                                target: t
                            });
                        }
                    });
                });
            }, L.availableEventEmitters.push(n), r.prototype = {
                obue: !1,
                initialize: function () {
                    this.attachCloseListeners();
                },
                obuePrevUnload: function () {
                },
                obuePrevBeforeUnload: function () {
                },
                newObueListener: function () {
                    this.obue || (this.obue = !0, this.triggerBeacons());
                },
                attachCloseListeners: function () {
                    this.prevUnload = e.onunload, this.prevBeforeUnload = e.onbeforeunload, e.onunload = L.bind(function (t) {
                        this.prevUnload && setTimeout(L.bind(function () {
                            this.prevUnload.call(e, t);
                        }, this), 1), this.newObueListener();
                    }, this), e.onbeforeunload = L.bind(function (t) {
                        this.prevBeforeUnload && setTimeout(L.bind(function () {
                            this.prevBeforeUnload.call(e, t);
                        }, this), 1), this.newObueListener();
                    }, this);
                },
                triggerBeacons: function () {
                    L.fireEvent('leave', t);
                }
            }, L.availableEventEmitters.push(r), o.orientationChange = function (t) {
                var a = 0 === e.orientation ? 'portrait' : 'landscape';
                t.orientation = a, L.onEvent(t);
            }, L.availableEventEmitters.push(o), l.prototype = {
                backgroundTasks: function () {
                    var e = this;
                    L.each(this.rules, function (t) {
                        var a = t[1], n = t[0];
                        L.cssQuery(a, function (t) {
                            L.each(t, function (t) {
                                e.trackElement(t, n);
                            });
                        });
                    }, this);
                },
                trackElement: function (e, t) {
                    var a = this, n = L.$data(e, 'hover.delays');
                    n ? L.contains(n, t) || n.push(t) : (L.addEventHandler(e, 'mouseover', function (t) {
                        a.onMouseOver(t, e);
                    }), L.addEventHandler(e, 'mouseout', function (t) {
                        a.onMouseOut(t, e);
                    }), L.$data(e, 'hover.delays', [t]));
                },
                onMouseOver: function (e, t) {
                    var a = e.target || e.srcElement, n = e.relatedTarget || e.fromElement;
                    (t === a || L.containsElement(t, a)) && !L.containsElement(t, n) && this.onMouseEnter(t);
                },
                onMouseEnter: function (e) {
                    var t = L.$data(e, 'hover.delays'), a = L.map(t, function (t) {
                            return setTimeout(function () {
                                L.onEvent({
                                    type: 'hover(' + t + ')',
                                    target: e
                                });
                            }, t);
                        });
                    L.$data(e, 'hover.delayTimers', a);
                },
                onMouseOut: function (e, t) {
                    var a = e.target || e.srcElement, n = e.relatedTarget || e.toElement;
                    (t === a || L.containsElement(t, a)) && !L.containsElement(t, n) && this.onMouseLeave(t);
                },
                onMouseLeave: function (e) {
                    var t = L.$data(e, 'hover.delayTimers');
                    t && L.each(t, function (e) {
                        clearTimeout(e);
                    });
                }
            }, L.availableEventEmitters.push(l), c.prototype = {
                defineEvents: function () {
                    this.oldBlurClosure = function () {
                        L.fireEvent('tabblur', t);
                    }, this.oldFocusClosure = L.bind(function () {
                        this.visibilityApiHasPriority ? L.fireEvent('tabfocus', t) : null != L.visibility.getHiddenProperty() && L.visibility.isHidden() || L.fireEvent('tabfocus', t);
                    }, this);
                },
                attachDetachModernEventListeners: function (e) {
                    L[0 == e ? 'removeEventHandler' : 'addEventHandler'](t, L.visibility.getVisibilityEvent(), this.handleVisibilityChange);
                },
                attachDetachOlderEventListeners: function (t, a, n) {
                    var i = 0 == t ? 'removeEventHandler' : 'addEventHandler';
                    L[i](a, n, this.oldBlurClosure), L[i](e, 'focus', this.oldFocusClosure);
                },
                handleVisibilityChange: function () {
                    L.visibility.isHidden() ? L.fireEvent('tabblur', t) : L.fireEvent('tabfocus', t);
                },
                setVisibilityApiPriority: function (t) {
                    this.visibilityApiHasPriority = t, this.attachDetachOlderEventListeners(!1, e, 'blur'), this.attachDetachModernEventListeners(!1), t ? null != L.visibility.getHiddenProperty() ? this.attachDetachModernEventListeners(!0) : this.attachDetachOlderEventListeners(!0, e, 'blur') : (this.attachDetachOlderEventListeners(!0, e, 'blur'), null != L.visibility.getHiddenProperty() && this.attachDetachModernEventListeners(!0));
                },
                oldBlurClosure: null,
                oldFocusClosure: null,
                visibilityApiHasPriority: !0
            }, L.availableEventEmitters.push(c), u.prototype = {
                initialize: function () {
                    this.setupHistoryAPI(), this.setupHashChange();
                },
                fireIfURIChanged: function () {
                    var e = L.URL();
                    this.lastURL !== e && (this.fireEvent(), this.lastURL = e);
                },
                fireEvent: function () {
                    L.updateQueryParams(), L.onEvent({
                        type: 'locationchange',
                        target: t
                    });
                },
                setupSPASupport: function () {
                    this.setupHistoryAPI(), this.setupHashChange();
                },
                setupHistoryAPI: function () {
                    var t = e.history;
                    t && (t.pushState && (this.originalPushState = t.pushState, t.pushState = this._pushState), t.replaceState && (this.originalReplaceState = t.replaceState, t.replaceState = this._replaceState)), L.addEventHandler(e, 'popstate', this._onPopState);
                },
                pushState: function () {
                    var e = this.originalPushState.apply(history, arguments);
                    return this.onPushState(), e;
                },
                replaceState: function () {
                    var e = this.originalReplaceState.apply(history, arguments);
                    return this.onReplaceState(), e;
                },
                setupHashChange: function () {
                    L.addEventHandler(e, 'hashchange', this._onHashChange);
                },
                onReplaceState: function () {
                    setTimeout(this._fireIfURIChanged, 0);
                },
                onPushState: function () {
                    setTimeout(this._fireIfURIChanged, 0);
                },
                onPopState: function () {
                    setTimeout(this._fireIfURIChanged, 0);
                },
                onHashChange: function () {
                    setTimeout(this._fireIfURIChanged, 0);
                },
                uninitialize: function () {
                    this.cleanUpHistoryAPI(), this.cleanUpHashChange();
                },
                cleanUpHistoryAPI: function () {
                    history.pushState === this._pushState && (history.pushState = this.originalPushState), history.replaceState === this._replaceState && (history.replaceState = this.originalReplaceState), L.removeEventHandler(e, 'popstate', this._onPopState);
                },
                cleanUpHashChange: function () {
                    L.removeEventHandler(e, 'hashchange', this._onHashChange);
                }
            }, L.availableEventEmitters.push(u), d.prototype = {
                backgroundTasks: function () {
                    var e = this.eventHandler;
                    L.each(this.rules, function (t) {
                        L.cssQuery(t.selector || 'video', function (t) {
                            L.each(t, function (t) {
                                L.$data(t, 'videoplayed.tracked') || (L.addEventHandler(t, 'timeupdate', L.throttle(e, 100)), L.$data(t, 'videoplayed.tracked', !0));
                            });
                        });
                    });
                },
                evalRule: function (e, t) {
                    var a = t.event, n = e.seekable, i = n.start(0), r = n.end(0), o = e.currentTime, s = t.event.match(/^videoplayed\(([0-9]+)([s%])\)$/);
                    if (s) {
                        var l = s[2], c = Number(s[1]), u = '%' === l ? function () {
                                return c <= 100 * (o - i) / (r - i);
                            } : function () {
                                return c <= o - i;
                            };
                        !L.$data(e, a) && u() && (L.$data(e, a, !0), L.onEvent({
                            type: a,
                            target: e
                        }));
                    }
                },
                onUpdateTime: function (e) {
                    var t = this.rules, a = e.target;
                    if (a.seekable && 0 !== a.seekable.length)
                        for (var n = 0, i = t.length; n < i; n++)
                            this.evalRule(a, t[n]);
                }
            }, L.availableEventEmitters.push(d), g.prototype = {
                initialize: function () {
                    if (this.FB = this.FB || e.FB, this.FB && this.FB.Event && this.FB.Event.subscribe)
                        return this.bind(), !0;
                },
                bind: function () {
                    this.FB.Event.subscribe('edge.create', function () {
                        L.notify('tracking a facebook like', 1), L.onEvent({
                            type: 'facebook.like',
                            target: t
                        });
                    }), this.FB.Event.subscribe('edge.remove', function () {
                        L.notify('tracking a facebook unlike', 1), L.onEvent({
                            type: 'facebook.unlike',
                            target: t
                        });
                    }), this.FB.Event.subscribe('message.send', function () {
                        L.notify('tracking a facebook share', 1), L.onEvent({
                            type: 'facebook.send',
                            target: t
                        });
                    });
                }
            }, L.availableEventEmitters.push(g), f.prototype = {
                initialize: function () {
                    var e = this.twttr;
                    e && 'function' == typeof e.ready && e.ready(L.bind(this.bind, this));
                },
                bind: function () {
                    this.twttr.events.bind('tweet', function (e) {
                        e && (L.notify('tracking a tweet button', 1), L.onEvent({
                            type: 'twitter.tweet',
                            target: t
                        }));
                    });
                }
            }, L.availableEventEmitters.push(f), p.offset = function (a) {
                var n = null, i = null;
                try {
                    var r = a.getBoundingClientRect(), o = t, s = o.documentElement, l = o.body, c = e, u = s.clientTop || l.clientTop || 0, d = s.clientLeft || l.clientLeft || 0, g = c.pageYOffset || s.scrollTop || l.scrollTop, f = c.pageXOffset || s.scrollLeft || l.scrollLeft;
                    n = r.top + g - u, i = r.left + f - d;
                } catch (p) {
                }
                return {
                    top: n,
                    left: i
                };
            }, p.getViewportHeight = function () {
                var a = e.innerHeight, n = t.compatMode;
                return n && (a = 'CSS1Compat' == n ? t.documentElement.clientHeight : t.body.clientHeight), a;
            }, p.getScrollTop = function () {
                return t.documentElement.scrollTop ? t.documentElement.scrollTop : t.body.scrollTop;
            }, p.isElementInDocument = function (e) {
                return t.body.contains(e);
            }, p.isElementInView = function (e) {
                if (!p.isElementInDocument(e))
                    return !1;
                var t = p.getViewportHeight(), a = p.getScrollTop(), n = p.offset(e).top, i = e.offsetHeight;
                return null !== n && !(a > n + i || a + t < n);
            }, p.prototype = {
                backgroundTasks: function () {
                    var e = this.elements;
                    L.each(this.rules, function (t) {
                        L.cssQuery(t.selector, function (a) {
                            var n = 0;
                            L.each(a, function (t) {
                                L.contains(e, t) || (e.push(t), n++);
                            }), n && L.notify(t.selector + ' added ' + n + ' elements.', 1);
                        });
                    }), this.track();
                },
                checkInView: function (e, t, a) {
                    var n = L.$data(e, 'inview');
                    if (p.isElementInView(e)) {
                        n || L.$data(e, 'inview', !0);
                        var i = this;
                        this.processRules(e, function (a, n, r) {
                            if (t || !a.inviewDelay)
                                L.$data(e, n, !0), L.onEvent({
                                    type: 'inview',
                                    target: e,
                                    inviewDelay: a.inviewDelay
                                });
                            else if (a.inviewDelay) {
                                var o = L.$data(e, r);
                                o || (o = setTimeout(function () {
                                    i.checkInView(e, !0, a.inviewDelay);
                                }, a.inviewDelay), L.$data(e, r, o));
                            }
                        }, a);
                    } else {
                        if (!p.isElementInDocument(e)) {
                            var r = L.indexOf(this.elements, e);
                            this.elements.splice(r, 1);
                        }
                        n && L.$data(e, 'inview', !1), this.processRules(e, function (t, a, n) {
                            var i = L.$data(e, n);
                            i && clearTimeout(i);
                        }, a);
                    }
                },
                track: function () {
                    for (var e = this.elements.length - 1; e >= 0; e--)
                        this.checkInView(this.elements[e]);
                },
                processRules: function (e, t, a) {
                    var n = this.rules;
                    a && (n = L.filter(this.rules, function (e) {
                        return e.inviewDelay == a;
                    })), L.each(n, function (a, n) {
                        var i = a.inviewDelay ? 'viewed_' + a.inviewDelay : 'viewed', r = 'inview_timeout_id_' + n;
                        L.$data(e, i) || L.matchesCss(a.selector, e) && t(a, i, r);
                    });
                }
            }, L.availableEventEmitters.push(p), m.prototype.getStringifiedValue = e.JSON && e.JSON.stringify || L.stringify, m.prototype.initPolling = function () {
                0 !== this.dataElementsNames.length && (this.dataElementsStore = this.getDataElementsValues(), L.poll(L.bind(this.checkDataElementValues, this), 1000));
            }, m.prototype.getDataElementsValues = function () {
                var e = {};
                return L.each(this.dataElementsNames, function (t) {
                    var a = L.getVar(t);
                    e[t] = this.getStringifiedValue(a);
                }, this), e;
            }, m.prototype.checkDataElementValues = function () {
                L.each(this.dataElementsNames, L.bind(function (e) {
                    var a = this.getStringifiedValue(L.getVar(e));
                    a !== this.dataElementsStore[e] && (this.dataElementsStore[e] = a, L.onEvent({
                        type: 'dataelementchange(' + e + ')',
                        target: t
                    }));
                }, this));
            }, L.availableEventEmitters.push(m), L.visibility = {
                isHidden: function () {
                    var e = this.getHiddenProperty();
                    return !!e && t[e];
                },
                isVisible: function () {
                    return !this.isHidden();
                },
                getHiddenProperty: function () {
                    var e = [
                        'webkit',
                        'moz',
                        'ms',
                        'o'
                    ];
                    if ('hidden' in t)
                        return 'hidden';
                    for (var a = 0; a < e.length; a++)
                        if (e[a] + 'Hidden' in t)
                            return e[a] + 'Hidden';
                    return null;
                },
                getVisibilityEvent: function () {
                    var e = this.getHiddenProperty();
                    return e ? e.replace(/[H|h]idden/, '') + 'visibilitychange' : null;
                }
            }, L.ecommerce = {
                addItem: function () {
                    var e = [].slice.call(arguments);
                    L.onEvent({
                        type: 'ecommerce.additem',
                        target: e
                    });
                },
                addTrans: function () {
                    var e = [].slice.call(arguments);
                    L.data.saleData.sale = {
                        orderId: e[0],
                        revenue: e[2]
                    }, L.onEvent({
                        type: 'ecommerce.addtrans',
                        target: e
                    });
                },
                trackTrans: function () {
                    L.onEvent({
                        type: 'ecommerce.tracktrans',
                        target: []
                    });
                }
            }, L.extend(h.prototype, {
                getInstance: function () {
                    return this.instance;
                },
                initialize: function () {
                    var e, t = this.settings;
                    L.notify('Visitor ID: Initializing tool', 1), null !== (e = this.createInstance(t.mcOrgId, t.initVars)) && (t.customerIDs && this.applyCustomerIDs(e, t.customerIDs), t.autoRequest && e.getMarketingCloudVisitorID(), this.instance = e);
                },
                createInstance: function (e, t) {
                    if (!L.isString(e))
                        return L.notify('Visitor ID: Cannot create instance using mcOrgId: "' + e + '"', 4), null;
                    e = L.replace(e), L.notify('Visitor ID: Create instance using mcOrgId: "' + e + '"', 1), t = this.parseValues(t);
                    var a = Visitor.getInstance(e, t);
                    return L.notify('Visitor ID: Set variables: ' + L.stringify(t), 1), a;
                },
                applyCustomerIDs: function (e, t) {
                    var a = this.parseIds(t);
                    e.setCustomerIDs(a), L.notify('Visitor ID: Set Customer IDs: ' + L.stringify(a), 1);
                },
                parseValues: function (e) {
                    if (!1 === L.isObject(e))
                        return {};
                    var t = {};
                    for (var a in e)
                        e.hasOwnProperty(a) && (t[a] = L.replace(e[a]));
                    return t;
                },
                parseIds: function (e) {
                    var t = {};
                    if (!1 === L.isObject(e))
                        return {};
                    for (var a in e)
                        if (e.hasOwnProperty(a)) {
                            var n = L.replace(e[a].id);
                            n !== e[a].id && n && (t[a] = {}, t[a].id = n, t[a].authState = Visitor.AuthState[e[a].authState]);
                        }
                    return t;
                }
            }), L.availableTools.visitor_id = h, L.inherit(v, L.BaseTool), L.extend(v.prototype, {
                initialize: function () {
                    var e = this.settings;
                    if (!1 !== this.settings.initTool) {
                        var t = e.url;
                        t = 'string' == typeof t ? L.basePath() + t : L.isHttps() ? t.https : t.http, L.loadScript(t, L.bind(this.onLoad, this)), this.initializing = !0;
                    } else
                        this.initialized = !0;
                },
                isQueueAvailable: function () {
                    return !this.initialized;
                },
                onLoad: function () {
                    this.initialized = !0, this.initializing = !1, this.settings.initialBeacon && this.settings.initialBeacon(), this.flushQueue();
                },
                endPLPhase: function (e) {
                    e === this.settings.loadOn && (L.notify(this.name + ': Initializing at ' + e, 1), this.initialize());
                },
                $fire: function (e, t, a) {
                    this.initializing ? this.queueCommand({
                        command: 'fire',
                        arguments: [a]
                    }, e, t) : a.call(this.settings, e, t);
                }
            }), L.availableTools.am = v, L.availableTools.adlens = v, L.availableTools.aem = v, L.availableTools.__basic = v, L.inherit(_, L.BaseTool), L.extend(_.prototype, {
                name: 'tnt',
                endPLPhase: function (e) {
                    'aftertoolinit' === e && this.initialize();
                },
                initialize: function () {
                    L.notify('Test & Target: Initializing', 1), this.initializeTargetPageParams(), this.load();
                },
                initializeTargetPageParams: function () {
                    e.targetPageParams && this.updateTargetPageParams(this.parseTargetPageParamsResult(e.targetPageParams())), this.updateTargetPageParams(this.settings.pageParams), this.setTargetPageParamsFunction();
                },
                load: function () {
                    var e = this.getMboxURL(this.settings.mboxURL);
                    !1 !== this.settings.initTool ? this.settings.loadSync ? (L.loadScriptSync(e), this.onScriptLoaded()) : (L.loadScript(e, L.bind(this.onScriptLoaded, this)), this.initializing = !0) : this.initialized = !0;
                },
                getMboxURL: function (t) {
                    var a = t;
                    return L.isObject(t) && (a = 'https:' === e.location.protocol ? t.https : t.http), a.match(/^https?:/) ? a : L.basePath() + a;
                },
                onScriptLoaded: function () {
                    L.notify('Test & Target: loaded.', 1), this.flushQueue(), this.initialized = !0, this.initializing = !1;
                },
                $addMbox: function (e, t, a) {
                    var n = a.mboxGoesAround, i = n + '{visibility: hidden;}', r = this.appendStyle(i);
                    n in this.styleElements || (this.styleElements[n] = r), this.initialized ? this.$addMBoxStep2(null, null, a) : this.initializing && this.queueCommand({
                        command: 'addMBoxStep2',
                        arguments: [a]
                    }, e, t);
                },
                $addMBoxStep2: function (a, n, i) {
                    var r = this.generateID(), o = this;
                    L.addEventHandler(e, 'load', L.bind(function () {
                        L.cssQuery(i.mboxGoesAround, function (a) {
                            var n = a[0];
                            if (n) {
                                var s = t.createElement('div');
                                s.id = r, n.parentNode.replaceChild(s, n), s.appendChild(n), e.mboxDefine(r, i.mboxName);
                                var l = [i.mboxName];
                                i.arguments && (l = l.concat(i.arguments)), e.mboxUpdate.apply(null, l), o.reappearWhenCallComesBack(n, r, i.timeout, i);
                            }
                        });
                    }, this)), this.lastMboxID = r;
                },
                $addTargetPageParams: function (e, t, a) {
                    this.updateTargetPageParams(a);
                },
                generateID: function () {
                    return '_sdsat_mbox_' + String(Math.random()).substring(2) + '_';
                },
                appendStyle: function (e) {
                    var a = t.getElementsByTagName('head')[0], n = t.createElement('style');
                    return n.type = 'text/css', n.styleSheet ? n.styleSheet.cssText = e : n.appendChild(t.createTextNode(e)), a.appendChild(n), n;
                },
                reappearWhenCallComesBack: function (e, t, a, n) {
                    function i() {
                        var e = r.styleElements[n.mboxGoesAround];
                        e && (e.parentNode.removeChild(e), delete r.styleElements[n.mboxGoesAround]);
                    }
                    var r = this;
                    L.cssQuery('script[src*="omtrdc.net"]', function (e) {
                        var t = e[0];
                        if (t) {
                            L.scriptOnLoad(t.src, t, function () {
                                L.notify('Test & Target: request complete', 1), i(), clearTimeout(n);
                            });
                            var n = setTimeout(function () {
                                L.notify('Test & Target: bailing after ' + a + 'ms', 1), i();
                            }, a);
                        } else
                            L.notify('Test & Target: failed to find T&T ajax call, bailing', 1), i();
                    });
                },
                updateTargetPageParams: function (e) {
                    var t = {};
                    for (var a in e)
                        e.hasOwnProperty(a) && (t[L.replace(a)] = L.replace(e[a]));
                    L.extend(this.targetPageParamsStore, t);
                },
                getTargetPageParams: function () {
                    return this.targetPageParamsStore;
                },
                setTargetPageParamsFunction: function () {
                    e.targetPageParams = L.bind(this.getTargetPageParams, this);
                },
                parseTargetPageParamsResult: function (e) {
                    var t = e;
                    return L.isArray(e) && (e = e.join('&')), L.isString(e) && (t = L.parseQueryParams(e)), t;
                }
            }), L.availableTools.tnt = _;
            var A = {
                allowLinker: function () {
                    return L.hasMultipleDomains();
                },
                cookieDomain: function () {
                    var t = L.settings.domainList, a = L.find(t, function (t) {
                            var a = e.location.hostname;
                            return L.equalsIgnoreCase(a.slice(a.length - t.length), t);
                        });
                    return a ? '.' + a : 'auto';
                }
            };
            L.inherit(y, L.BaseTool), L.extend(y.prototype, {
                name: 'GAUniversal',
                endPLPhase: function (e) {
                    e === this.settings.loadOn && (L.notify('GAU: Initializing at ' + e, 1), this.initialize(), this.flushQueue(), this.trackInitialPageView());
                },
                getTrackerName: function () {
                    return this.settings.trackerSettings.name || '';
                },
                isPageCodeLoadSuppressed: function () {
                    return !1 === this.settings.initTool || !0 === this._cancelToolInit;
                },
                initialize: function () {
                    if (this.isPageCodeLoadSuppressed())
                        return this.initialized = !0, void L.notify('GAU: Page code not loaded (suppressed).', 1);
                    var t = 'ga';
                    e[t] = e[t] || this.createGAObject(), e.GoogleAnalyticsObject = t, L.notify('GAU: Page code loaded.', 1), L.loadScriptOnce(this.getToolUrl());
                    var a = this.settings;
                    (A.allowLinker() && !1 !== a.allowLinker ? this.createAccountForLinker() : this.createAccount(), this.executeInitCommands(), a.customInit) && (!1 === (0, a.customInit)(e[t], this.getTrackerName()) && (this.suppressInitialPageView = !0));
                    this.initialized = !0;
                },
                createGAObject: function () {
                    var e = function () {
                        e.q.push(arguments);
                    };
                    return e.q = [], e.l = 1 * new Date(), e;
                },
                createAccount: function () {
                    this.create();
                },
                createAccountForLinker: function () {
                    var e = {};
                    A.allowLinker() && (e.allowLinker = !0), this.create(e), this.call('require', 'linker'), this.call('linker:autoLink', this.autoLinkDomains(), !1, !0);
                },
                create: function (e) {
                    var t = this.settings.trackerSettings;
                    (t = L.preprocessArguments([t], location, null, this.forceLowerCase)[0]).trackingId = L.replace(this.settings.trackerSettings.trackingId, location), t.cookieDomain || (t.cookieDomain = A.cookieDomain()), L.extend(t, e || {}), this.call('create', t);
                },
                autoLinkDomains: function () {
                    var e = location.hostname;
                    return L.filter(L.settings.domainList, function (t) {
                        return t !== e;
                    });
                },
                executeInitCommands: function () {
                    var e = this.settings;
                    e.initCommands && L.each(e.initCommands, function (e) {
                        var t = e.splice(2, e.length - 2);
                        e = e.concat(L.preprocessArguments(t, location, null, this.forceLowerCase)), this.call.apply(this, e);
                    }, this);
                },
                trackInitialPageView: function () {
                    this.suppressInitialPageView || this.isPageCodeLoadSuppressed() || this.call('send', 'pageview');
                },
                call: function () {
                    'function' == typeof ga ? this.isCallSuppressed() || (arguments[0] = this.cmd(arguments[0]), this.log(L.toArray(arguments)), ga.apply(e, arguments)) : L.notify('GA Universal function not found!', 4);
                },
                isCallSuppressed: function () {
                    return !0 === this._cancelToolInit;
                },
                $missing$: function (e, t, a, n) {
                    n = n || [], n = [e].concat(n), this.call.apply(this, n);
                },
                getToolUrl: function () {
                    var e = this.settings, t = L.isHttps();
                    return e.url ? t ? e.url.https : e.url.http : (t ? 'https://ssl' : 'http://www') + '.google-analytics.com/analytics.js';
                },
                cmd: function (e) {
                    var t = [
                            'send',
                            'set',
                            'get'
                        ], a = this.getTrackerName();
                    return a && -1 !== L.indexOf(t, e) ? a + '.' + e : e;
                },
                log: function (e) {
                    var t = 'GA Universal: sent command ' + e[0] + ' to tracker ' + (this.getTrackerName() || 'default');
                    if (e.length > 1) {
                        L.stringify(e.slice(1));
                        t += ' with parameters ' + L.stringify(e.slice(1));
                    }
                    t += '.', L.notify(t, 1);
                }
            }), L.availableTools.ga_universal = y, L.inherit(b, L.BaseTool), L.extend(b.prototype, {
                name: 'GA',
                initialize: function () {
                    var t = this.settings, a = e._gaq, n = t.initCommands || [], i = t.customInit;
                    if (a || (_gaq = []), this.isSuppressed())
                        L.notify('GA: page code not loaded(suppressed).', 1);
                    else {
                        if (!a && !b.scriptLoaded) {
                            var r = L.isHttps(), o = (r ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
                            t.url && (o = r ? t.url.https : t.url.http), L.loadScript(o), b.scriptLoaded = !0, L.notify('GA: page code loaded.', 1);
                        }
                        t.domain;
                        var s = t.trackerName, l = A.allowLinker(), c = L.replace(t.account, location);
                        L.settings.domainList;
                        _gaq.push([
                            this.cmd('setAccount'),
                            c
                        ]), l && _gaq.push([
                            this.cmd('setAllowLinker'),
                            l
                        ]), _gaq.push([
                            this.cmd('setDomainName'),
                            A.cookieDomain()
                        ]), L.each(n, function (e) {
                            var t = [this.cmd(e[0])].concat(L.preprocessArguments(e.slice(1), location, null, this.forceLowerCase));
                            _gaq.push(t);
                        }, this), i && (this.suppressInitialPageView = !1 === i(_gaq, s)), t.pageName && this.$overrideInitialPageView(null, null, t.pageName);
                    }
                    this.initialized = !0, L.fireEvent(this.id + '.configure', _gaq, s);
                },
                isSuppressed: function () {
                    return this._cancelToolInit || !1 === this.settings.initTool;
                },
                tracker: function () {
                    return this.settings.trackerName;
                },
                cmd: function (e) {
                    var t = this.tracker();
                    return t ? t + '._' + e : '_' + e;
                },
                $overrideInitialPageView: function (e, t, a) {
                    this.urlOverride = a;
                },
                trackInitialPageView: function () {
                    if (!this.isSuppressed() && !this.suppressInitialPageView)
                        if (this.urlOverride) {
                            var e = L.preprocessArguments([this.urlOverride], location, null, this.forceLowerCase);
                            this.$missing$('trackPageview', null, null, e);
                        } else
                            this.$missing$('trackPageview');
                },
                endPLPhase: function (e) {
                    e === this.settings.loadOn && (L.notify('GA: Initializing at ' + e, 1), this.initialize(), this.flushQueue(), this.trackInitialPageView());
                },
                call: function (e, t, a, n) {
                    if (!this._cancelToolInit) {
                        this.settings;
                        var i = this.tracker(), r = this.cmd(e);
                        n = n ? [r].concat(n) : [r];
                        _gaq.push(n), i ? L.notify('GA: sent command ' + e + ' to tracker ' + i + (n.length > 1 ? ' with parameters [' + n.slice(1).join(', ') + ']' : '') + '.', 1) : L.notify('GA: sent command ' + e + (n.length > 1 ? ' with parameters [' + n.slice(1).join(', ') + ']' : '') + '.', 1);
                    }
                },
                $missing$: function (e, t, a, n) {
                    this.call(e, t, a, n);
                },
                $postTransaction: function (t, a, n) {
                    var i = L.data.customVars.transaction = e[n];
                    this.call('addTrans', t, a, [
                        i.orderID,
                        i.affiliation,
                        i.total,
                        i.tax,
                        i.shipping,
                        i.city,
                        i.state,
                        i.country
                    ]), L.each(i.items, function (e) {
                        this.call('addItem', t, a, [
                            e.orderID,
                            e.sku,
                            e.product,
                            e.category,
                            e.unitPrice,
                            e.quantity
                        ]);
                    }, this), this.call('trackTrans', t, a);
                },
                delayLink: function (e, t) {
                    var a = this;
                    if (A.allowLinker() && e.hostname.match(this.settings.linkerDomains) && !L.isSubdomainOf(e.hostname, location.hostname)) {
                        L.preventDefault(t);
                        var n = L.settings.linkDelay || 100;
                        setTimeout(function () {
                            a.call('link', e, t, [e.href]);
                        }, n);
                    }
                },
                popupLink: function (t, a) {
                    if (e._gat) {
                        L.preventDefault(a);
                        var n = this.settings.account, i = e._gat._createTracker(n)._getLinkerUrl(t.href);
                        e.open(i);
                    }
                },
                $link: function (e, t) {
                    '_blank' === e.getAttribute('target') ? this.popupLink(e, t) : this.delayLink(e, t);
                },
                $trackEvent: function (e, t) {
                    var a = Array.prototype.slice.call(arguments, 2);
                    if (a.length >= 4 && null != a[3]) {
                        var n = parseInt(a[3], 10);
                        L.isNaN(n) && (n = 1), a[3] = n;
                    }
                    this.call('trackEvent', e, t, a);
                }
            }), L.availableTools.ga = b, L.inherit(C, L.BaseTool), L.extend(C.prototype, {
                name: 'SC',
                endPLPhase: function (e) {
                    e === this.settings.loadOn && this.initialize(e);
                },
                initialize: function (t) {
                    if (!this._cancelToolInit)
                        if (this.settings.initVars = this.substituteVariables(this.settings.initVars, { type: t }), !1 !== this.settings.initTool) {
                            var a = this.settings.sCodeURL || L.basePath() + 's_code.js';
                            'object' == typeof a && (a = 'https:' === e.location.protocol ? a.https : a.http), a.match(/^https?:/) || (a = L.basePath() + a), this.settings.initVars && this.$setVars(null, null, this.settings.initVars), L.loadScript(a, L.bind(this.onSCodeLoaded, this)), this.initializing = !0;
                        } else
                            this.initializing = !0, this.pollForSC();
                },
                getS: function (t, a) {
                    var n = a && a.hostname || e.location.hostname, i = this.concatWithToolVarBindings(a && a.setVars || this.varBindings), r = a && a.addEvent || this.events, o = this.getAccount(n), s = e.s_gi;
                    if (!s)
                        return null;
                    if (this.isValidSCInstance(t) || (t = null), !o && !t)
                        return L.notify('Adobe Analytics: tracker not initialized because account was not found', 1), null;
                    t = t || s(o);
                    var l = 'D' + L.appVersion;
                    return 'undefined' != typeof t.tagContainerMarker ? t.tagContainerMarker = l : 'string' == typeof t.version && t.version.substring(t.version.length - 5) !== '-' + l && (t.version += '-' + l), t.sa && !0 !== this.settings.skipSetAccount && !1 !== this.settings.initTool && t.sa(this.settings.account), this.applyVarBindingsOnTracker(t, i), r.length > 0 && (t.events = r.join(',')), L.getVisitorId() && (t.visitor = L.getVisitorId()), t;
                },
                onSCodeLoaded: function (e) {
                    this.initialized = !0, this.initializing = !1;
                    var t = [
                        'Adobe Analytics: loaded',
                        e ? ' (manual)' : '',
                        '.'
                    ];
                    L.notify(t.join(''), 1), L.fireEvent(this.id + '.load', this.getS()), e || (this.flushQueueExceptTrackLink(), this.sendBeacon()), this.flushQueue();
                },
                getAccount: function (t) {
                    return e.s_account ? e.s_account : t && this.settings.accountByHost && this.settings.accountByHost[t] || this.settings.account;
                },
                getTrackingServer: function () {
                    var t = this, a = t.getS();
                    if (a) {
                        if (a.ssl && a.trackingServerSecure)
                            return a.trackingServerSecure;
                        if (a.trackingServer)
                            return a.trackingServer;
                    }
                    var n, i = t.getAccount(e.location.hostname);
                    if (!i)
                        return null;
                    var r, o, s = '', l = a && a.dc;
                    return (r = (n = i).indexOf(',')) >= 0 && (n = n.gb(0, r)), n = n.replace(/[^A-Za-z0-9]/g, ''), s || (s = '2o7.net'), l = l ? ('' + l).toLowerCase() : 'd1', '2o7.net' == s && ('d1' == l ? l = '112' : 'd2' == l && (l = '122'), o = ''), r = n + '.' + l + '.' + o + s;
                },
                sendBeacon: function () {
                    var t = this.getS(e[this.settings.renameS || 's']);
                    t ? this.settings.customInit && !1 === this.settings.customInit(t) ? L.notify('Adobe Analytics: custom init suppressed beacon', 1) : (this.settings.executeCustomPageCodeFirst && this.applyVarBindingsOnTracker(t, this.varBindings), this.executeCustomSetupFuns(t), t.t(), this.clearVarBindings(), this.clearCustomSetup(), L.notify('Adobe Analytics: tracked page view', 1)) : L.notify('Adobe Analytics: page code not loaded', 1);
                },
                pollForSC: function () {
                    L.poll(L.bind(function () {
                        if ('function' == typeof e.s_gi)
                            return this.onSCodeLoaded(!0), !0;
                    }, this));
                },
                flushQueueExceptTrackLink: function () {
                    if (this.pending) {
                        for (var e = [], t = 0; t < this.pending.length; t++) {
                            var a = this.pending[t];
                            'trackLink' === a[0].command ? e.push(a) : this.triggerCommand.apply(this, a);
                        }
                        this.pending = e;
                    }
                },
                isQueueAvailable: function () {
                    return !this.initialized;
                },
                substituteVariables: function (e, t) {
                    var a = {};
                    for (var n in e)
                        if (e.hasOwnProperty(n)) {
                            var i = e[n];
                            a[n] = L.replace(i, location, t);
                        }
                    return a;
                },
                $setVars: function (e, t, a) {
                    for (var n in a)
                        if (a.hasOwnProperty(n)) {
                            var i = a[n];
                            'function' == typeof i && (i = i()), this.varBindings[n] = i;
                        }
                    L.notify('Adobe Analytics: set variables.', 2);
                },
                $customSetup: function (e, t, a) {
                    this.customSetupFuns.push(function (n) {
                        a.call(e, t, n);
                    });
                },
                isValidSCInstance: function (e) {
                    return !!e && 'function' == typeof e.t && 'function' == typeof e.tl;
                },
                concatWithToolVarBindings: function (e) {
                    var t = this.settings.initVars || {};
                    return L.map([
                        'trackingServer',
                        'trackingServerSecure'
                    ], function (a) {
                        t[a] && !e[a] && (e[a] = t[a]);
                    }), e;
                },
                applyVarBindingsOnTracker: function (e, t) {
                    for (var a in t)
                        t.hasOwnProperty(a) && (e[a] = t[a]);
                },
                clearVarBindings: function () {
                    this.varBindings = {};
                },
                clearCustomSetup: function () {
                    this.customSetupFuns = [];
                },
                executeCustomSetupFuns: function (t) {
                    L.each(this.customSetupFuns, function (a) {
                        a.call(e, t);
                    });
                },
                $trackLink: function (e, t, a) {
                    var n = (a = a || {}).type, i = a.linkName;
                    !i && e && e.nodeName && 'a' === e.nodeName.toLowerCase() && (i = e.innerHTML), i || (i = 'link clicked');
                    var r = a && a.setVars, o = a && a.addEvent || [], s = this.getS(null, {
                            setVars: r,
                            addEvent: o
                        });
                    if (s) {
                        var l = s.linkTrackVars, c = s.linkTrackEvents, u = this.definedVarNames(r);
                        a && a.customSetup && a.customSetup.call(e, t, s), o.length > 0 && u.push('events'), s.products && u.push('products'), u = this.mergeTrackLinkVars(s.linkTrackVars, u), o = this.mergeTrackLinkVars(s.linkTrackEvents, o), s.linkTrackVars = this.getCustomLinkVarsList(u);
                        var d = L.map(o, function (e) {
                            return e.split(':')[0];
                        });
                        s.linkTrackEvents = this.getCustomLinkVarsList(d), s.tl(!0, n || 'o', i), L.notify([
                            'Adobe Analytics: tracked link ',
                            'using: linkTrackVars=',
                            L.stringify(s.linkTrackVars),
                            '; linkTrackEvents=',
                            L.stringify(s.linkTrackEvents)
                        ].join(''), 1), s.linkTrackVars = l, s.linkTrackEvents = c;
                    } else
                        L.notify('Adobe Analytics: page code not loaded', 1);
                },
                mergeTrackLinkVars: function (e, t) {
                    return e && (t = e.split(',').concat(t)), t;
                },
                getCustomLinkVarsList: function (e) {
                    var t = L.indexOf(e, 'None');
                    return t > -1 && e.length > 1 && e.splice(t, 1), e.join(',');
                },
                definedVarNames: function (e) {
                    e = e || this.varBindings;
                    var t = [];
                    for (var a in e)
                        e.hasOwnProperty(a) && /^(eVar[0-9]+)|(prop[0-9]+)|(hier[0-9]+)|campaign|purchaseID|channel|server|state|zip|pageType$/.test(a) && t.push(a);
                    return t;
                },
                $trackPageView: function (e, t, a) {
                    var n = a && a.setVars, i = a && a.addEvent || [], r = this.getS(null, {
                            setVars: n,
                            addEvent: i
                        });
                    r ? (r.linkTrackVars = '', r.linkTrackEvents = '', this.executeCustomSetupFuns(r), a && a.customSetup && a.customSetup.call(e, t, r), r.t(), this.clearVarBindings(), this.clearCustomSetup(), L.notify('Adobe Analytics: tracked page view', 1)) : L.notify('Adobe Analytics: page code not loaded', 1);
                },
                $postTransaction: function (t, a, n) {
                    var i = L.data.transaction = e[n], r = this.varBindings, o = this.settings.fieldVarMapping;
                    if (L.each(i.items, function (e) {
                            this.products.push(e);
                        }, this), r.products = L.map(this.products, function (e) {
                            var t = [];
                            if (o && o.item)
                                for (var a in o.item)
                                    if (o.item.hasOwnProperty(a)) {
                                        var n = o.item[a];
                                        t.push(n + '=' + e[a]), 'event' === n.substring(0, 5) && this.events.push(n);
                                    }
                            var i = [
                                '',
                                e.product,
                                e.quantity,
                                e.unitPrice * e.quantity
                            ];
                            return t.length > 0 && i.push(t.join('|')), i.join(';');
                        }, this).join(','), o && o.transaction) {
                        var s = [];
                        for (var l in o.transaction)
                            if (o.transaction.hasOwnProperty(l)) {
                                n = o.transaction[l];
                                s.push(n + '=' + i[l]), 'event' === n.substring(0, 5) && this.events.push(n);
                            }
                        r.products.length > 0 && (r.products += ','), r.products += ';;;;' + s.join('|');
                    }
                },
                $addEvent: function () {
                    for (var e = 2, t = arguments.length; e < t; e++)
                        this.events.push(arguments[e]);
                },
                $addProduct: function () {
                    for (var e = 2, t = arguments.length; e < t; e++)
                        this.products.push(arguments[e]);
                }
            }), L.availableTools.sc = C, L.inherit(I, L.BaseTool), L.extend(I.prototype, {
                name: 'Default',
                $loadIframe: function (t, a, n) {
                    var i = n.pages, r = n.loadOn, o = L.bind(function () {
                            L.each(i, function (e) {
                                this.loadIframe(t, a, e);
                            }, this);
                        }, this);
                    r || o(), 'domready' === r && L.domReady(o), 'load' === r && L.addEventHandler(e, 'load', o);
                },
                loadIframe: function (e, a, n) {
                    var i = t.createElement('iframe');
                    i.style.display = 'none';
                    var r = L.data.host, o = n.data, s = this.scriptURL(n.src), l = L.searchVariables(o, e, a);
                    r && (s = L.basePath() + s), s += l, i.src = s;
                    var c = t.getElementsByTagName('body')[0];
                    c ? c.appendChild(i) : L.domReady(function () {
                        t.getElementsByTagName('body')[0].appendChild(i);
                    });
                },
                scriptURL: function (e) {
                    return (L.settings.scriptDir || '') + e;
                },
                $loadScript: function (t, a, n) {
                    var i = n.scripts, r = n.sequential, o = n.loadOn, s = L.bind(function () {
                            r ? this.loadScripts(t, a, i) : L.each(i, function (e) {
                                this.loadScripts(t, a, [e]);
                            }, this);
                        }, this);
                    o ? 'domready' === o ? L.domReady(s) : 'load' === o && L.addEventHandler(e, 'load', s) : s();
                },
                loadScripts: function (e, t, a) {
                    function n() {
                        r.length > 0 && i && r.shift().call(e, t, o);
                        var l = a.shift();
                        if (l) {
                            var c = L.data.host, u = s.scriptURL(l.src);
                            c && (u = L.basePath() + u), i = l, L.loadScript(u, n);
                        }
                    }
                    try {
                        a = a.slice(0);
                        var i, r = this.asyncScriptCallbackQueue, o = t.target || t.srcElement, s = this;
                    } catch (l) {
                        console.error('scripts is', L.stringify(a));
                    }
                    n();
                },
                $loadBlockingScript: function (e, t, a) {
                    var n = a.scripts;
                    a.loadOn;
                    L.bind(function () {
                        L.each(n, function (a) {
                            this.loadBlockingScript(e, t, a);
                        }, this);
                    }, this)();
                },
                loadBlockingScript: function (e, t, a) {
                    var n = this.scriptURL(a.src), i = L.data.host, r = t.target || t.srcElement;
                    i && (n = L.basePath() + n), this.argsForBlockingScripts.push([
                        e,
                        t,
                        r
                    ]), L.loadScriptSync(n);
                },
                pushAsyncScript: function (e) {
                    this.asyncScriptCallbackQueue.push(e);
                },
                pushBlockingScript: function (e) {
                    var t = this.argsForBlockingScripts.shift(), a = t[0];
                    e.apply(a, t.slice(1));
                },
                $writeHTML: L.escapeHtmlParams(function (e, a) {
                    if (!L.domReadyFired && t.write)
                        if ('pagebottom' === a.type || 'pagetop' === a.type)
                            for (var n = 2, i = arguments.length; n < i; n++) {
                                var r = arguments[n].html;
                                r = L.replace(r, e, a), t.write(r);
                            }
                        else
                            L.notify('You can only use writeHTML on the `pagetop` and `pagebottom` events.', 1);
                    else
                        L.notify('Command writeHTML failed. You should try appending HTML using the async option.', 1);
                }),
                linkNeedsDelayActivate: function (t, a) {
                    a = a || e;
                    var n = t.tagName, i = t.getAttribute('target'), r = t.getAttribute('href');
                    return (!n || 'a' === n.toLowerCase()) && (!!r && (!i || '_blank' !== i && ('_top' === i ? a.top === a : '_parent' !== i && ('_self' === i || (!a.name || i === a.name)))));
                },
                $delayActivateLink: function (e, t) {
                    if (this.linkNeedsDelayActivate(e)) {
                        L.preventDefault(t);
                        var a = L.settings.linkDelay || 100;
                        setTimeout(function () {
                            L.setLocation(e.href);
                        }, a);
                    }
                },
                isQueueable: function (e) {
                    return 'writeHTML' !== e.command;
                }
            }), L.availableTools['default'] = I, L.inherit(D, L.BaseTool), L.extend(D.prototype, {
                name: 'Nielsen',
                endPLPhase: function (e) {
                    switch (e) {
                    case 'pagetop':
                        this.initialize();
                        break;
                    case 'pagebottom':
                        this.enableTracking && (this.queueCommand({
                            command: 'sendFirstBeacon',
                            arguments: []
                        }), this.flushQueueWhenReady());
                    }
                },
                defineListeners: function () {
                    this.onTabFocus = L.bind(function () {
                        this.notify('Tab visible, sending view beacon when ready', 1), this.tabEverVisible = !0, this.flushQueueWhenReady();
                    }, this), this.onPageLeave = L.bind(function () {
                        this.notify('isHuman? : ' + this.isHuman(), 1), this.isHuman() && this.sendDurationBeacon();
                    }, this), this.onHumanDetectionChange = L.bind(function (e) {
                        this == e.target.target && (this.human = e.target.isHuman);
                    }, this);
                },
                initialize: function () {
                    this.initializeTracking(), this.initializeDataProviders(), this.initializeNonHumanDetection(), this.tabEverVisible = L.visibility.isVisible(), this.tabEverVisible ? this.notify('Tab visible, sending view beacon when ready', 1) : L.bindEventOnce('tabfocus', this.onTabFocus), this.initialized = !0;
                },
                initializeTracking: function () {
                    this.initialized || (this.notify('Initializing tracking', 1), this.addRemovePageLeaveEvent(this.enableTracking), this.addRemoveHumanDetectionChangeEvent(this.enableTracking), this.initialized = !0);
                },
                initializeDataProviders: function () {
                    var e, t = this.getAnalyticsTool();
                    this.dataProvider.register(new D.DataProvider.VisitorID(L.getVisitorId())), t ? (e = new D.DataProvider.Generic('rsid', function () {
                        return t.settings.account;
                    }), this.dataProvider.register(e)) : this.notify('Missing integration with Analytics: rsid will not be sent.');
                },
                initializeNonHumanDetection: function () {
                    L.nonhumandetection ? (L.nonhumandetection.init(), this.setEnableNonHumanDetection(0 != this.settings.enableNonHumanDetection), this.settings.nonHumanDetectionDelay > 0 && this.setNonHumanDetectionDelay(1000 * parseInt(this.settings.nonHumanDetectionDelay))) : this.notify('NHDM is not available.');
                },
                getAnalyticsTool: function () {
                    if (this.settings.integratesWith)
                        return L.tools[this.settings.integratesWith];
                },
                flushQueueWhenReady: function () {
                    this.enableTracking && this.tabEverVisible && L.poll(L.bind(function () {
                        if (this.isReadyToTrack())
                            return this.flushQueue(), !0;
                    }, this), 100, 20);
                },
                isReadyToTrack: function () {
                    return this.tabEverVisible && this.dataProvider.isReady();
                },
                $setVars: function (e, t, a) {
                    for (var n in a) {
                        var i = a[n];
                        'function' == typeof i && (i = i()), this.settings[n] = i;
                    }
                    this.notify('Set variables done', 2), this.prepareContextData();
                },
                $setEnableTracking: function (e, t, a) {
                    this.notify('Will' + (a ? '' : ' not') + ' track time on page', 1), this.enableTracking != a && (this.addRemovePageLeaveEvent(a), this.addRemoveHumanDetectionChangeEvent(a), this.enableTracking = a);
                },
                $sendFirstBeacon: function () {
                    this.sendViewBeacon();
                },
                setEnableNonHumanDetection: function (e) {
                    e ? L.nonhumandetection.register(this) : L.nonhumandetection.unregister(this);
                },
                setNonHumanDetectionDelay: function (e) {
                    L.nonhumandetection.register(this, e);
                },
                addRemovePageLeaveEvent: function (e) {
                    this.notify((e ? 'Attach onto' : 'Detach from') + ' page leave event', 1), L[0 == e ? 'unbindEvent' : 'bindEvent']('leave', this.onPageLeave);
                },
                addRemoveHumanDetectionChangeEvent: function (e) {
                    this.notify((e ? 'Attach onto' : 'Detach from') + ' human detection change event', 1), L[0 == e ? 'unbindEvent' : 'bindEvent']('humandetection.change', this.onHumanDetectionChange);
                },
                sendViewBeacon: function () {
                    this.notify('Tracked page view.', 1), this.sendBeaconWith();
                },
                sendDurationBeacon: function () {
                    if (L.timetracking && 'function' == typeof L.timetracking.timeOnPage && null != L.timetracking.timeOnPage()) {
                        this.notify('Tracked close', 1), this.sendBeaconWith({
                            timeOnPage: Math.round(L.timetracking.timeOnPage() / 1000),
                            duration: 'D',
                            timer: 'timer'
                        });
                        var e;
                        for (e = 0; e < this.magicConst; e++)
                            '0';
                    } else
                        this.notify('Could not track close due missing time on page', 5);
                },
                sendBeaconWith: function (e) {
                    this.enableTracking && this[this.beaconMethod].call(this, this.prepareUrl(e));
                },
                plainBeacon: function (e) {
                    var t = new Image();
                    t.src = e, t.width = 1, t.height = 1, t.alt = '';
                },
                navigatorSendBeacon: function (e) {
                    navigator.sendBeacon(e);
                },
                prepareUrl: function (e) {
                    var t = this.settings;
                    return L.extend(t, this.dataProvider.provide()), L.extend(t, e), this.preparePrefix(this.settings.collectionServer) + this.adapt.convertToURI(this.adapt.toNielsen(this.substituteVariables(t)));
                },
                preparePrefix: function (e) {
                    return '//' + encodeURIComponent(e) + '.imrworldwide.com/cgi-bin/gn?';
                },
                substituteVariables: function (e) {
                    var t = {};
                    for (var a in e)
                        e.hasOwnProperty(a) && (t[a] = L.replace(e[a]));
                    return t;
                },
                prepareContextData: function () {
                    if (this.getAnalyticsTool()) {
                        var e = this.settings;
                        e.sdkVersion = _satellite.publishDate, this.getAnalyticsTool().$setVars(null, null, { contextData: this.adapt.toAnalytics(this.substituteVariables(e)) });
                    } else
                        this.notify('Adobe Analytics missing.');
                },
                isHuman: function () {
                    return this.human;
                },
                onTabFocus: function () {
                },
                onPageLeave: function () {
                },
                onHumanDetectionChange: function () {
                },
                notify: function (e, t) {
                    L.notify(this.logPrefix + e, t);
                },
                beaconMethod: 'plainBeacon',
                adapt: null,
                enableTracking: !1,
                logPrefix: 'Nielsen: ',
                tabEverVisible: !1,
                human: !0,
                magicConst: 2000000
            }), D.DataProvider = {}, D.DataProvider.Generic = function (e, t) {
                this.key = e, this.valueFn = t;
            }, L.extend(D.DataProvider.Generic.prototype, {
                isReady: function () {
                    return !0;
                },
                getValue: function () {
                    return this.valueFn();
                },
                provide: function () {
                    this.isReady() || D.prototype.notify('Not yet ready to provide value for: ' + this.key, 5);
                    var e = {};
                    return e[this.key] = this.getValue(), e;
                }
            }), D.DataProvider.VisitorID = function (e, t, a) {
                this.key = t || 'uuid', this.visitorInstance = e, this.visitorInstance && (this.visitorId = e.getMarketingCloudVisitorID([
                    this,
                    this._visitorIdCallback
                ])), this.fallbackProvider = a || new D.UUID();
            }, L.inherit(D.DataProvider.VisitorID, D.DataProvider.Generic), L.extend(D.DataProvider.VisitorID.prototype, {
                isReady: function () {
                    return null === this.visitorInstance || !!this.visitorId;
                },
                getValue: function () {
                    return this.visitorId || this.fallbackProvider.get();
                },
                _visitorIdCallback: function (e) {
                    this.visitorId = e;
                }
            }), D.DataProvider.Aggregate = function () {
                this.providers = [];
                for (var e = 0; e < arguments.length; e++)
                    this.register(arguments[e]);
            }, L.extend(D.DataProvider.Aggregate.prototype, {
                register: function (e) {
                    this.providers.push(e);
                },
                isReady: function () {
                    return L.every(this.providers, function (e) {
                        return e.isReady();
                    });
                },
                provide: function () {
                    var e = {};
                    return L.each(this.providers, function (t) {
                        L.extend(e, t.provide());
                    }), e;
                }
            }), D.UUID = function () {
            }, L.extend(D.UUID.prototype, {
                generate: function () {
                    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
                        var t = 16 * Math.random() | 0;
                        return ('x' == e ? t : 3 & t | 8).toString(16);
                    });
                },
                get: function () {
                    var e = L.readCookie(this.key('uuid'));
                    return e || (e = this.generate(), L.setCookie(this.key('uuid'), e), e);
                },
                key: function (e) {
                    return '_dtm_nielsen_' + e;
                }
            }), D.DataAdapters = function () {
            }, L.extend(D.DataAdapters.prototype, {
                toNielsen: function (e) {
                    var t = new Date().getTime(), n = {
                            c6: 'vc,',
                            c13: 'asid,',
                            c15: 'apn,',
                            c27: 'cln,',
                            c32: 'segA,',
                            c33: 'segB,',
                            c34: 'segC,',
                            c35: 'adrsid,',
                            c29: 'plid,',
                            c30: 'bldv,',
                            c40: 'adbid,'
                        }, i = {
                            ci: e.clientId,
                            c6: e.vcid,
                            c13: e.appId,
                            c15: e.appName,
                            prv: 1,
                            forward: 0,
                            ad: 0,
                            cr: e.duration || 'V',
                            rt: 'text',
                            st: 'dcr',
                            prd: 'dcr',
                            r: t,
                            at: e.timer || 'view',
                            c16: e.sdkVersion,
                            c27: e.timeOnPage || 0,
                            c40: e.uuid,
                            c35: e.rsid,
                            ti: t,
                            sup: 0,
                            c32: e.segmentA,
                            c33: e.segmentB,
                            c34: e.segmentC,
                            asn: e.assetName,
                            c29: e.playerID,
                            c30: e.buildVersion
                        };
                    for (key in i)
                        if (i[key] !== a && null != i[key] && i[key] !== a && null != i && '' != i) {
                            var r = encodeURIComponent(i[key]);
                            n.hasOwnProperty(key) && r && (r = n[key] + r), i[key] = r;
                        }
                    return this.filterObject(i);
                },
                toAnalytics: function (e) {
                    return this.filterObject({
                        'a.nielsen.clientid': e.clientId,
                        'a.nielsen.vcid': e.vcid,
                        'a.nielsen.appid': e.appId,
                        'a.nielsen.appname': e.appName,
                        'a.nielsen.accmethod': '0',
                        'a.nielsen.ctype': 'text',
                        'a.nielsen.sega': e.segmentA,
                        'a.nielsen.segb': e.segmentB,
                        'a.nielsen.segc': e.segmentC,
                        'a.nielsen.asset': e.assetName
                    });
                },
                convertToURI: function (e) {
                    if (!1 === L.isObject(e))
                        return '';
                    var t = [];
                    for (var a in e)
                        e.hasOwnProperty(a) && t.push(a + '=' + e[a]);
                    return t.join('&');
                },
                filterObject: function (e) {
                    for (var t in e)
                        !e.hasOwnProperty(t) || null != e[t] && e[t] !== a || delete e[t];
                    return e;
                }
            }), L.availableTools.nielsen = D, _satellite.init({
                tools: {
                    '14829736e9f73d9d7fff034e8e907415': {
                        engine: 'sc',
                        loadOn: 'pagetop',
                        account: 'dynamically.set.in.custom.code',
                        euCookie: !1,
                        sCodeURL: '7e530431ebc6040a493335ce44e66648adfeab7a/s-code-contents-43c98754fa287db62b4bff7c5dbaad12341f5555.js',
                        renameS: 's',
                        initVars: {
                            trackingServer: 'bmwag.d3.sc.omtrdc.net',
                            trackInlineStats: !0,
                            trackDownloadLinks: !1,
                            trackExternalLinks: !1,
                            linkLeaveQueryString: !1,
                            dynamicVariablePrefix: 'D='
                        },
                        customInit: function (n) {
                            if (_satellite.initializeVisitor = function () {
                                    if (void 0 === i) {
                                        (function () {
                                            'use strict';
                                            function a() {
                                                return {
                                                    callbacks: {},
                                                    add: function (e, t) {
                                                        this.callbacks[e] = this.callbacks[e] || [];
                                                        var a = this.callbacks[e].push(t) - 1;
                                                        return function () {
                                                            this.callbacks[e].splice(a, 1);
                                                        };
                                                    },
                                                    execute: function (e, t) {
                                                        if (this.callbacks[e]) {
                                                            t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t];
                                                            try {
                                                                for (; this.callbacks[e].length;) {
                                                                    var a = this.callbacks[e].shift();
                                                                    'function' == typeof a ? a.apply(null, t) : a instanceof Array && a[1].apply(a[0], t);
                                                                }
                                                                delete this.callbacks[e];
                                                            } catch (e) {
                                                            }
                                                        }
                                                    },
                                                    executeAll: function (e, t) {
                                                        (t || e && !y.isObjectEmpty(e)) && Object.keys(this.callbacks).forEach(function (t) {
                                                            var a = void 0 !== e[t] ? e[t] : '';
                                                            this.execute(t, a);
                                                        }, this);
                                                    },
                                                    hasCallbacks: function () {
                                                        return Boolean(Object.keys(this.callbacks).length);
                                                    }
                                                };
                                            }
                                            function n(e) {
                                                for (var t = /^\d+$/, a = 0, n = e.length; a < n; a++)
                                                    if (!t.test(e[a]))
                                                        return !1;
                                                return !0;
                                            }
                                            function i(e, t) {
                                                for (; e.length < t.length;)
                                                    e.push('0');
                                                for (; t.length < e.length;)
                                                    t.push('0');
                                            }
                                            function r(e, t) {
                                                for (var a = 0; a < e.length; a++) {
                                                    var n = parseInt(e[a], 10), i = parseInt(t[a], 10);
                                                    if (n > i)
                                                        return 1;
                                                    if (i > n)
                                                        return -1;
                                                }
                                                return 0;
                                            }
                                            function o(e, t) {
                                                if (e === t)
                                                    return 0;
                                                var a = e.toString().split('.'), o = t.toString().split('.');
                                                return n(a.concat(o)) ? (i(a, o), r(a, o)) : NaN;
                                            }
                                            var s = void 0 !== e ? e : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : {};
                                            Object.assign = Object.assign || function (e) {
                                                for (var t, a, n = 1; n < arguments.length; ++n)
                                                    for (t in a = arguments[n])
                                                        Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                                                return e;
                                            };
                                            var l, c, u = {
                                                    MESSAGES: {
                                                        HANDSHAKE: 'HANDSHAKE',
                                                        GETSTATE: 'GETSTATE',
                                                        PARENTSTATE: 'PARENTSTATE'
                                                    },
                                                    STATE_KEYS_MAP: {
                                                        MCMID: 'MCMID',
                                                        MCAID: 'MCAID',
                                                        MCAAMB: 'MCAAMB',
                                                        MCAAMLH: 'MCAAMLH',
                                                        MCOPTOUT: 'MCOPTOUT',
                                                        CUSTOMERIDS: 'CUSTOMERIDS'
                                                    },
                                                    ASYNC_API_MAP: {
                                                        MCMID: 'getMarketingCloudVisitorID',
                                                        MCAID: 'getAnalyticsVisitorID',
                                                        MCAAMB: 'getAudienceManagerBlob',
                                                        MCAAMLH: 'getAudienceManagerLocationHint',
                                                        MCOPTOUT: 'getOptOut'
                                                    },
                                                    SYNC_API_MAP: { CUSTOMERIDS: 'getCustomerIDs' },
                                                    ALL_APIS: {
                                                        MCMID: 'getMarketingCloudVisitorID',
                                                        MCAAMB: 'getAudienceManagerBlob',
                                                        MCAAMLH: 'getAudienceManagerLocationHint',
                                                        MCOPTOUT: 'getOptOut',
                                                        MCAID: 'getAnalyticsVisitorID',
                                                        CUSTOMERIDS: 'getCustomerIDs'
                                                    },
                                                    FIELDGROUP_TO_FIELD: {
                                                        MC: 'MCMID',
                                                        A: 'MCAID',
                                                        AAM: 'MCAAMB'
                                                    },
                                                    FIELDS: {
                                                        MCMID: 'MCMID',
                                                        MCOPTOUT: 'MCOPTOUT',
                                                        MCAID: 'MCAID',
                                                        MCAAMLH: 'MCAAMLH',
                                                        MCAAMB: 'MCAAMB'
                                                    },
                                                    AUTH_STATE: {
                                                        UNKNOWN: 0,
                                                        AUTHENTICATED: 1,
                                                        LOGGED_OUT: 2
                                                    },
                                                    OPT_OUT: { GLOBAL: 'global' }
                                                }, d = u.STATE_KEYS_MAP, g = function (e) {
                                                    function t() {
                                                    }
                                                    function a(t, a) {
                                                        var n = this;
                                                        return function () {
                                                            var t = e(0, d.MCMID), i = {};
                                                            return i[d.MCMID] = t, n.setStateAndPublish(i), a(t), t;
                                                        };
                                                    }
                                                    this.getMarketingCloudVisitorID = function (e) {
                                                        e = e || t;
                                                        var n = this.findField(d.MCMID, e), i = a.call(this, d.MCMID, e);
                                                        return void 0 !== n ? n : i();
                                                    };
                                                }, f = u.MESSAGES, p = u.ASYNC_API_MAP, m = u.SYNC_API_MAP, h = function () {
                                                    function e() {
                                                    }
                                                    function t(e, t) {
                                                        var a = this;
                                                        return function () {
                                                            return a.callbackRegistry.add(e, t), a.messageParent(f.GETSTATE), '';
                                                        };
                                                    }
                                                    function a(a) {
                                                        this[p[a]] = function (n) {
                                                            n = n || e;
                                                            var i = this.findField(a, n), r = t.call(this, a, n);
                                                            return void 0 !== i ? i : r();
                                                        };
                                                    }
                                                    function n(t) {
                                                        this[m[t]] = function () {
                                                            return this.findField(t, e) || {};
                                                        };
                                                    }
                                                    Object.keys(p).forEach(a, this), Object.keys(m).forEach(n, this);
                                                }, v = u.ASYNC_API_MAP, _ = function () {
                                                    Object.keys(v).forEach(function (e) {
                                                        this[v[e]] = function (t) {
                                                            this.callbackRegistry.add(e, t);
                                                        };
                                                    }, this);
                                                }, y = ((l = (c = { exports: {} }).exports).isObjectEmpty = function (e) {
                                                    return e === Object(e) && 0 === Object.keys(e).length;
                                                }, l.isValueEmpty = function (e) {
                                                    return '' === e || l.isObjectEmpty(e);
                                                }, l.getIeVersion = function () {
                                                    if (t.documentMode)
                                                        return t.documentMode;
                                                    for (var e = 7; e > 4; e--) {
                                                        var a = t.createElement('div');
                                                        if (a.innerHTML = '<!--[if IE ' + e + ']><span></span><![endif]-->', a.getElementsByTagName('span').length)
                                                            return a = null, e;
                                                        a = null;
                                                    }
                                                    return null;
                                                }, l.encodeAndBuildRequest = function (e, t) {
                                                    return e.map(encodeURIComponent).join(t);
                                                }, void (l.isObject = function (e) {
                                                    return null !== e && 'object' == typeof e && !1 === Array.isArray(e);
                                                }), c.exports), b = (y.isObjectEmpty, y.isValueEmpty, y.getIeVersion, y.encodeAndBuildRequest, y.isObject, a), C = u.MESSAGES, I = {
                                                    0: 'prefix',
                                                    1: 'orgID',
                                                    2: 'state'
                                                }, D = function (e, t) {
                                                    this.parse = function (e) {
                                                        try {
                                                            var t = {};
                                                            return e.data.split('|').forEach(function (e, a) {
                                                                void 0 !== e && (t[I[a]] = 2 !== a ? e : JSON.parse(e));
                                                            }), t;
                                                        } catch (e) {
                                                        }
                                                    }, this.isInvalid = function (a) {
                                                        var n = this.parse(a);
                                                        if (!n || Object.keys(n).length < 2)
                                                            return !0;
                                                        var i = e !== n.orgID, r = !t || a.origin !== t, o = -1 === Object.keys(C).indexOf(n.prefix);
                                                        return i || r || o;
                                                    }, this.send = function (a, n, i) {
                                                        var r = n + '|' + e;
                                                        i && i === Object(i) && (r += '|' + JSON.stringify(i));
                                                        try {
                                                            a.postMessage(r, t);
                                                        } catch (e) {
                                                        }
                                                    };
                                                }, S = u.MESSAGES, V = function (e, t, a, n) {
                                                    function i(e) {
                                                        Object.assign(m, e);
                                                    }
                                                    function r(e) {
                                                        Object.assign(m.state, e), m.callbackRegistry.executeAll(m.state);
                                                    }
                                                    function o(e) {
                                                        if (!C.isInvalid(e)) {
                                                            y = !1;
                                                            var t = C.parse(e);
                                                            m.setStateAndPublish(t.state);
                                                        }
                                                    }
                                                    function l(e) {
                                                        !y && v && (y = !0, C.send(n, e));
                                                    }
                                                    function c() {
                                                        i(new g(a._generateID)), m.getMarketingCloudVisitorID(), m.callbackRegistry.executeAll(m.state, !0), s.removeEventListener('message', u);
                                                    }
                                                    function u(e) {
                                                        if (!C.isInvalid(e)) {
                                                            var t = C.parse(e);
                                                            y = !1, s.clearTimeout(m._handshakeTimeout), s.removeEventListener('message', u), i(new h(m)), s.addEventListener('message', o), m.setStateAndPublish(t.state), m.callbackRegistry.hasCallbacks() && l(S.GETSTATE);
                                                        }
                                                    }
                                                    function d() {
                                                        v && postMessage ? (s.addEventListener('message', u), l(S.HANDSHAKE), m._handshakeTimeout = setTimeout(c, 250)) : c();
                                                    }
                                                    function f() {
                                                        s.s_c_in || (s.s_c_il = [], s.s_c_in = 0), m._c = 'Visitor', m._il = s.s_c_il, m._in = s.s_c_in, m._il[m._in] = m, s.s_c_in++;
                                                    }
                                                    function p() {
                                                        function e(e) {
                                                            0 !== e.indexOf('_') && 'function' == typeof a[e] && (m[e] = function () {
                                                            });
                                                        }
                                                        Object.keys(a).forEach(e), m.getSupplementalDataID = a.getSupplementalDataID;
                                                    }
                                                    var m = this, v = t.whitelistParentDomain;
                                                    m.state = {}, m.version = a.version, m.marketingCloudOrgID = e, m.cookieDomain = a.cookieDomain || '', m._instanceType = 'child';
                                                    var y = !1, C = new D(e, v);
                                                    m.callbackRegistry = b(), m.init = function () {
                                                        f(), p(), i(new _(m)), d();
                                                    }, m.findField = function (e, t) {
                                                        if (m.state[e])
                                                            return t(m.state[e]), m.state[e];
                                                    }, m.messageParent = l, m.setStateAndPublish = r;
                                                }, k = u.MESSAGES, w = u.ALL_APIS, T = u.ASYNC_API_MAP, L = u.FIELDGROUP_TO_FIELD, A = function (e, t) {
                                                    function a() {
                                                        var t = {};
                                                        return Object.keys(w).forEach(function (a) {
                                                            var n = w[a], i = e[n]();
                                                            y.isValueEmpty(i) || (t[a] = i);
                                                        }), t;
                                                    }
                                                    function n() {
                                                        var t = [];
                                                        return e._loading && Object.keys(e._loading).forEach(function (a) {
                                                            if (e._loading[a]) {
                                                                var n = L[a];
                                                                t.push(n);
                                                            }
                                                        }), t.length ? t : null;
                                                    }
                                                    function i(t) {
                                                        return function a() {
                                                            var i = n();
                                                            if (i) {
                                                                var r = T[i[0]];
                                                                e[r](a, !0);
                                                            } else
                                                                t();
                                                        };
                                                    }
                                                    function r(e, n) {
                                                        var i = a();
                                                        t.send(e, n, i);
                                                    }
                                                    function o(e) {
                                                        l(e), r(e, k.HANDSHAKE);
                                                    }
                                                    function s(e) {
                                                        i(function () {
                                                            r(e, k.PARENTSTATE);
                                                        })();
                                                    }
                                                    function l(a) {
                                                        function n(n) {
                                                            i.call(e, n), t.send(a, k.PARENTSTATE, { CUSTOMERIDS: e.getCustomerIDs() });
                                                        }
                                                        var i = e.setCustomerIDs;
                                                        e.setCustomerIDs = n;
                                                    }
                                                    return function (e) {
                                                        t.isInvalid(e) || (t.parse(e).prefix === k.HANDSHAKE ? o : s)(e.source);
                                                    };
                                                }, M = function (e, t) {
                                                    function a(e) {
                                                        return function (a) {
                                                            n[e] = a, ++i === r && t(n);
                                                        };
                                                    }
                                                    var n = {}, i = 0, r = Object.keys(e).length;
                                                    Object.keys(e).forEach(function (t) {
                                                        var n = e[t];
                                                        if (n.fn) {
                                                            var i = n.args || [];
                                                            i.unshift(a(t)), n.fn.apply(n.context || null, i);
                                                        }
                                                    });
                                                }, E = function (e) {
                                                    var t;
                                                    if (!e && s.location && (e = s.location.hostname), t = e)
                                                        if (/^[0-9.]+$/.test(t))
                                                            t = '';
                                                        else {
                                                            var a = ',ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,', n = t.split('.'), i = n.length - 1, r = i - 1;
                                                            if (i > 1 && n[i].length <= 2 && (2 === n[i - 1].length || a.indexOf(',' + n[i] + ',') < 0) && r--, r > 0)
                                                                for (t = ''; i >= r;)
                                                                    t = n[i] + (t ? '.' : '') + t, i--;
                                                        }
                                                    return t;
                                                }, P = {
                                                    compare: o,
                                                    isLessThan: function (e, t) {
                                                        return o(e, t) < 0;
                                                    },
                                                    areVersionsDifferent: function (e, t) {
                                                        return 0 !== o(e, t);
                                                    },
                                                    isGreaterThan: function (e, t) {
                                                        return o(e, t) > 0;
                                                    },
                                                    isEqual: function (e, t) {
                                                        return 0 === o(e, t);
                                                    }
                                                }, O = !!s.postMessage, R = {
                                                    postMessage: function (e, t, a) {
                                                        var n = 1;
                                                        t && (O ? a.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1')) : t && (a.location = t.replace(/#.*$/, '') + '#' + +new Date() + n++ + '&' + e));
                                                    },
                                                    receiveMessage: function (e, t) {
                                                        var a;
                                                        try {
                                                            O && (e && (a = function (a) {
                                                                if ('string' == typeof t && a.origin !== t || '[object Function]' === Object.prototype.toString.call(t) && !1 === t(a.origin))
                                                                    return !1;
                                                                e(a);
                                                            }), s.addEventListener ? s[e ? 'addEventListener' : 'removeEventListener']('message', a) : s[e ? 'attachEvent' : 'detachEvent']('onmessage', a));
                                                        } catch (e) {
                                                        }
                                                    }
                                                }, N = function (e) {
                                                    var t, a, n = '0123456789', i = '', r = '', o = 8, s = 10, l = 10;
                                                    if (1 == e) {
                                                        for (n += 'ABCDEF', t = 0; 16 > t; t++)
                                                            a = Math.floor(Math.random() * o), i += n.substring(a, a + 1), a = Math.floor(Math.random() * o), r += n.substring(a, a + 1), o = 16;
                                                        return i + '-' + r;
                                                    }
                                                    for (t = 0; 19 > t; t++)
                                                        a = Math.floor(Math.random() * s), i += n.substring(a, a + 1), 0 === t && 9 == a ? s = 3 : (1 == t || 2 == t) && 10 != s && 2 > a ? s = 10 : 2 < t && (s = 10), a = Math.floor(Math.random() * l), r += n.substring(a, a + 1), 0 === t && 9 == a ? l = 3 : (1 == t || 2 == t) && 10 != l && 2 > a ? l = 10 : 2 < t && (l = 10);
                                                    return i + r;
                                                }, x = function (e) {
                                                    return {
                                                        corsMetadata: (t = 'none', a = !0, 'undefined' != typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && ('withCredentials' in new XMLHttpRequest() ? t = 'XMLHttpRequest' : 'undefined' != typeof XDomainRequest && XDomainRequest === Object(XDomainRequest) && (a = !1), Object.prototype.toString.call(s.HTMLElement).indexOf('Constructor') > 0 && (a = !1)), {
                                                            corsType: t,
                                                            corsCookiesEnabled: a
                                                        }),
                                                        getCORSInstance: function () {
                                                            return 'none' === this.corsMetadata.corsType ? null : new s[this.corsMetadata.corsType]();
                                                        },
                                                        fireCORS: function (t, a) {
                                                            function n(e) {
                                                                var a;
                                                                try {
                                                                    if ((a = JSON.parse(e)) !== Object(a))
                                                                        return void i.handleCORSError(t, null, 'Response is not JSON');
                                                                } catch (e) {
                                                                    return void i.handleCORSError(t, e, 'Error parsing response as JSON');
                                                                }
                                                                try {
                                                                    for (var n = t.callback, r = s, o = 0; o < n.length; o++)
                                                                        r = r[n[o]];
                                                                    r(a);
                                                                } catch (e) {
                                                                    i.handleCORSError(t, e, 'Error forming callback function');
                                                                }
                                                            }
                                                            var i = this;
                                                            a && (t.loadErrorHandler = a);
                                                            try {
                                                                var r = this.getCORSInstance();
                                                                r.open('get', t.corsUrl + '&ts=' + new Date().getTime(), !0), 'XMLHttpRequest' === this.corsMetadata.corsType && (r.withCredentials = !0, r.timeout = e.loadTimeout, r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'), r.onreadystatechange = function () {
                                                                    4 === this.readyState && 200 === this.status && n(this.responseText);
                                                                }), r.onerror = function (e) {
                                                                    i.handleCORSError(t, e, 'onerror');
                                                                }, r.ontimeout = function (e) {
                                                                    i.handleCORSError(t, e, 'ontimeout');
                                                                }, r.send(), e._log.requests.push(t.corsUrl);
                                                            } catch (e) {
                                                                this.handleCORSError(t, e, 'try-catch');
                                                            }
                                                        },
                                                        handleCORSError: function (t, a, n) {
                                                            e.CORSErrors.push({
                                                                corsData: t,
                                                                error: a,
                                                                description: n
                                                            }), t.loadErrorHandler && ('ontimeout' === n ? t.loadErrorHandler(!0) : t.loadErrorHandler(!1));
                                                        }
                                                    };
                                                    var t, a;
                                                }, U = {
                                                    POST_MESSAGE_ENABLED: !!s.postMessage,
                                                    DAYS_BETWEEN_SYNC_ID_CALLS: 1,
                                                    MILLIS_PER_DAY: 86400000,
                                                    ADOBE_MC: 'adobe_mc',
                                                    ADOBE_MC_SDID: 'adobe_mc_sdid',
                                                    VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
                                                    ADOBE_MC_TTL_IN_MIN: 5,
                                                    VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/
                                                }, F = function (e, t) {
                                                    var a = s.document;
                                                    return {
                                                        THROTTLE_START: 30000,
                                                        MAX_SYNCS_LENGTH: 649,
                                                        throttleTimerSet: !1,
                                                        id: null,
                                                        onPagePixels: [],
                                                        iframeHost: null,
                                                        getIframeHost: function (e) {
                                                            if ('string' == typeof e) {
                                                                var t = e.split('/');
                                                                return t[0] + '//' + t[2];
                                                            }
                                                        },
                                                        subdomain: null,
                                                        url: null,
                                                        getUrl: function () {
                                                            var t, n = 'http://fast.', i = '?d_nsid=' + e.idSyncContainerID + '#' + encodeURIComponent(a.location.origin);
                                                            return this.subdomain || (this.subdomain = 'nosubdomainreturned'), e.loadSSL && (n = e.idSyncSSLUseAkamai ? 'https://fast.' : 'https://'), t = n + this.subdomain + '.demdex.net/dest5.html' + i, this.iframeHost = this.getIframeHost(t), this.id = 'destination_publishing_iframe_' + this.subdomain + '_' + e.idSyncContainerID, t;
                                                        },
                                                        checkDPIframeSrc: function () {
                                                            var t = '?d_nsid=' + e.idSyncContainerID + '#' + encodeURIComponent(a.location.href);
                                                            'string' == typeof e.dpIframeSrc && e.dpIframeSrc.length && (this.id = 'destination_publishing_iframe_' + (e._subdomain || this.subdomain || new Date().getTime()) + '_' + e.idSyncContainerID, this.iframeHost = this.getIframeHost(e.dpIframeSrc), this.url = e.dpIframeSrc + t);
                                                        },
                                                        idCallNotProcesssed: null,
                                                        doAttachIframe: !1,
                                                        startedAttachingIframe: !1,
                                                        iframeHasLoaded: null,
                                                        iframeIdChanged: null,
                                                        newIframeCreated: null,
                                                        originalIframeHasLoadedAlready: null,
                                                        iframeLoadedCallbacks: [],
                                                        regionChanged: !1,
                                                        timesRegionChanged: 0,
                                                        sendingMessages: !1,
                                                        messages: [],
                                                        messagesPosted: [],
                                                        messagesReceived: [],
                                                        messageSendingInterval: U.POST_MESSAGE_ENABLED ? null : 100,
                                                        jsonForComparison: [],
                                                        jsonDuplicates: [],
                                                        jsonWaiting: [],
                                                        jsonProcessed: [],
                                                        canSetThirdPartyCookies: !0,
                                                        receivedThirdPartyCookiesNotification: !1,
                                                        readyToAttachIframePreliminary: function () {
                                                            return !(e.idSyncDisableSyncs || e.disableIdSyncs || e.idSyncDisable3rdPartySyncing || e.disableThirdPartyCookies || e.disableThirdPartyCalls);
                                                        },
                                                        readyToAttachIframe: function () {
                                                            return this.readyToAttachIframePreliminary() && (this.doAttachIframe || e._doAttachIframe) && (this.subdomain && 'nosubdomainreturned' !== this.subdomain || e._subdomain) && this.url && !this.startedAttachingIframe;
                                                        },
                                                        attachIframe: function () {
                                                            function e() {
                                                                (i = a.createElement('iframe')).sandbox = 'allow-scripts allow-same-origin', i.title = 'Adobe ID Syncing iFrame', i.id = n.id, i.name = n.id + '_name', i.style.cssText = 'display: none; width: 0; height: 0;', i.src = n.url, n.newIframeCreated = !0, t(), a.body.appendChild(i);
                                                            }
                                                            function t(e) {
                                                                i.addEventListener('load', function () {
                                                                    i.className = 'aamIframeLoaded', n.iframeHasLoaded = !0, n.fireIframeLoadedCallbacks(e), n.requestToProcess();
                                                                });
                                                            }
                                                            this.startedAttachingIframe = !0;
                                                            var n = this, i = a.getElementById(this.id);
                                                            i ? 'IFRAME' !== i.nodeName ? (this.id += '_2', this.iframeIdChanged = !0, e()) : (this.newIframeCreated = !1, 'aamIframeLoaded' !== i.className ? (this.originalIframeHasLoadedAlready = !1, t('The destination publishing iframe already exists from a different library, but hadn\'t loaded yet.')) : (this.originalIframeHasLoadedAlready = !0, this.iframeHasLoaded = !0, this.iframe = i, this.fireIframeLoadedCallbacks('The destination publishing iframe already exists from a different library, and had loaded alresady.'), this.requestToProcess())) : e(), this.iframe = i;
                                                        },
                                                        fireIframeLoadedCallbacks: function (e) {
                                                            this.iframeLoadedCallbacks.forEach(function (t) {
                                                                'function' == typeof t && t({ message: e || 'The destination publishing iframe was attached and loaded successfully.' });
                                                            }), this.iframeLoadedCallbacks = [];
                                                        },
                                                        requestToProcess: function (t) {
                                                            function a() {
                                                                i.jsonForComparison.push(t), i.jsonWaiting.push(t), i.processSyncOnPage(t);
                                                            }
                                                            var n, i = this;
                                                            if (t === Object(t) && t.ibs)
                                                                if (n = JSON.stringify(t.ibs || []), this.jsonForComparison.length) {
                                                                    var r, o, s, l = !1;
                                                                    for (r = 0, o = this.jsonForComparison.length; r < o; r++)
                                                                        if (s = this.jsonForComparison[r], n === JSON.stringify(s.ibs || [])) {
                                                                            l = !0;
                                                                            break;
                                                                        }
                                                                    l ? this.jsonDuplicates.push(t) : a();
                                                                } else
                                                                    a();
                                                            if ((this.receivedThirdPartyCookiesNotification || !U.POST_MESSAGE_ENABLED || this.iframeHasLoaded) && this.jsonWaiting.length) {
                                                                var c = this.jsonWaiting.shift();
                                                                this.process(c), this.requestToProcess();
                                                            }
                                                            e.idSyncDisableSyncs || e.disableIdSyncs || !this.iframeHasLoaded || !this.messages.length || this.sendingMessages || (this.throttleTimerSet || (this.throttleTimerSet = !0, setTimeout(function () {
                                                                i.messageSendingInterval = U.POST_MESSAGE_ENABLED ? null : 150;
                                                            }, this.THROTTLE_START)), this.sendingMessages = !0, this.sendMessages());
                                                        },
                                                        getRegionAndCheckIfChanged: function (t, a) {
                                                            var n = e._getField('MCAAMLH'), i = t.d_region || t.dcs_region;
                                                            return n ? i && (e._setFieldExpire('MCAAMLH', a), e._setField('MCAAMLH', i), parseInt(n, 10) !== i && (this.regionChanged = !0, this.timesRegionChanged++, e._setField('MCSYNCSOP', ''), e._setField('MCSYNCS', ''), n = i)) : (n = i) && (e._setFieldExpire('MCAAMLH', a), e._setField('MCAAMLH', n)), n || (n = ''), n;
                                                        },
                                                        processSyncOnPage: function (e) {
                                                            var t, a, n, i;
                                                            if ((t = e.ibs) && t instanceof Array && (a = t.length))
                                                                for (n = 0; n < a; n++)
                                                                    (i = t[n]).syncOnPage && this.checkFirstPartyCookie(i, '', 'syncOnPage');
                                                        },
                                                        process: function (e) {
                                                            var t, a, n, i, r, o = encodeURIComponent, s = !1;
                                                            if ((t = e.ibs) && t instanceof Array && (a = t.length))
                                                                for (s = !0, n = 0; n < a; n++)
                                                                    i = t[n], r = [
                                                                        o('ibs'),
                                                                        o(i.id || ''),
                                                                        o(i.tag || ''),
                                                                        y.encodeAndBuildRequest(i.url || [], ','),
                                                                        o(i.ttl || ''),
                                                                        '',
                                                                        '',
                                                                        i.fireURLSync ? 'true' : 'false'
                                                                    ], i.syncOnPage || (this.canSetThirdPartyCookies ? this.addMessage(r.join('|')) : i.fireURLSync && this.checkFirstPartyCookie(i, r.join('|')));
                                                            s && this.jsonProcessed.push(e);
                                                        },
                                                        checkFirstPartyCookie: function (t, a, n) {
                                                            var i = 'syncOnPage' === n, r = i ? 'MCSYNCSOP' : 'MCSYNCS';
                                                            e._readVisitor();
                                                            var o, s, l = e._getField(r), c = !1, u = !1, d = Math.ceil(new Date().getTime() / U.MILLIS_PER_DAY);
                                                            l ? (o = l.split('*'), c = (s = this.pruneSyncData(o, t.id, d)).dataPresent, u = s.dataValid, c && u || this.fireSync(i, t, a, o, r, d)) : (o = [], this.fireSync(i, t, a, o, r, d));
                                                        },
                                                        pruneSyncData: function (e, t, a) {
                                                            var n, i, r, o = !1, s = !1;
                                                            for (i = 0; i < e.length; i++)
                                                                n = e[i], r = parseInt(n.split('-')[1], 10), n.match('^' + t + '-') ? (o = !0, a < r ? s = !0 : (e.splice(i, 1), i--)) : a >= r && (e.splice(i, 1), i--);
                                                            return {
                                                                dataPresent: o,
                                                                dataValid: s
                                                            };
                                                        },
                                                        manageSyncsSize: function (e) {
                                                            if (e.join('*').length > this.MAX_SYNCS_LENGTH)
                                                                for (e.sort(function (e, t) {
                                                                        return parseInt(e.split('-')[1], 10) - parseInt(t.split('-')[1], 10);
                                                                    }); e.join('*').length > this.MAX_SYNCS_LENGTH;)
                                                                    e.shift();
                                                        },
                                                        fireSync: function (t, a, n, i, r, o) {
                                                            var s = this;
                                                            if (t) {
                                                                if ('img' === a.tag) {
                                                                    var l, c, u, d, g = a.url, f = e.loadSSL ? 'https:' : 'http:';
                                                                    for (l = 0, c = g.length; l < c; l++) {
                                                                        u = g[l], d = /^\/\//.test(u);
                                                                        var p = new Image();
                                                                        p.addEventListener('load', function (t, a, n, i) {
                                                                            return function () {
                                                                                s.onPagePixels[t] = null, e._readVisitor();
                                                                                var o, l, c, u, d = e._getField(r), g = [];
                                                                                if (d)
                                                                                    for (l = 0, c = (o = d.split('*')).length; l < c; l++)
                                                                                        (u = o[l]).match('^' + a.id + '-') || g.push(u);
                                                                                s.setSyncTrackingData(g, a, n, i);
                                                                            };
                                                                        }(this.onPagePixels.length, a, r, o)), p.src = (d ? f : '') + u, this.onPagePixels.push(p);
                                                                    }
                                                                }
                                                            } else
                                                                this.addMessage(n), this.setSyncTrackingData(i, a, r, o);
                                                        },
                                                        addMessage: function (t) {
                                                            var a = encodeURIComponent(e._enableErrorReporting ? '---destpub-debug---' : '---destpub---');
                                                            this.messages.push((U.POST_MESSAGE_ENABLED ? '' : a) + t);
                                                        },
                                                        setSyncTrackingData: function (t, a, n, i) {
                                                            t.push(a.id + '-' + (i + Math.ceil(a.ttl / 60 / 24))), this.manageSyncsSize(t), e._setField(n, t.join('*'));
                                                        },
                                                        sendMessages: function () {
                                                            var e, t = this, a = '', n = encodeURIComponent;
                                                            this.regionChanged && (a = n('---destpub-clear-dextp---'), this.regionChanged = !1), this.messages.length ? U.POST_MESSAGE_ENABLED ? (e = a + n('---destpub-combined---') + this.messages.join('%01'), this.postMessage(e), this.messages = [], this.sendingMessages = !1) : (e = this.messages.shift(), this.postMessage(a + e), setTimeout(function () {
                                                                t.sendMessages();
                                                            }, this.messageSendingInterval)) : this.sendingMessages = !1;
                                                        },
                                                        postMessage: function (e) {
                                                            R.postMessage(e, this.url, this.iframe.contentWindow), this.messagesPosted.push(e);
                                                        },
                                                        receiveMessage: function (e) {
                                                            var t, a = /^---destpub-to-parent---/;
                                                            'string' == typeof e && a.test(e) && ('canSetThirdPartyCookies' === (t = e.replace(a, '').split('|'))[0] && (this.canSetThirdPartyCookies = 'true' === t[1], this.receivedThirdPartyCookiesNotification = !0, this.requestToProcess()), this.messagesReceived.push(e));
                                                        },
                                                        processIDCallData: function (n) {
                                                            (null == this.url || n.subdomain && 'nosubdomainreturned' === this.subdomain) && ('string' == typeof e._subdomain && e._subdomain.length ? this.subdomain = e._subdomain : this.subdomain = n.subdomain || '', this.url = this.getUrl()), n.ibs instanceof Array && n.ibs.length && (this.doAttachIframe = !0), this.readyToAttachIframe() && (e.idSyncAttachIframeOnWindowLoad ? (t.windowLoaded || 'complete' === a.readyState || 'loaded' === a.readyState) && this.attachIframe() : this.attachIframeASAP()), 'function' == typeof e.idSyncIDCallResult ? e.idSyncIDCallResult(n) : this.requestToProcess(n), 'function' == typeof e.idSyncAfterIDCallResult && e.idSyncAfterIDCallResult(n);
                                                        },
                                                        canMakeSyncIDCall: function (t, a) {
                                                            return e._forceSyncIDCall || !t || a - t > U.DAYS_BETWEEN_SYNC_ID_CALLS;
                                                        },
                                                        attachIframeASAP: function () {
                                                            function e() {
                                                                t.startedAttachingIframe || (a.body ? t.attachIframe() : setTimeout(e, 30));
                                                            }
                                                            var t = this;
                                                            e();
                                                        }
                                                    };
                                                }, j = {
                                                    audienceManagerServer: {},
                                                    audienceManagerServerSecure: {},
                                                    cookieDomain: {},
                                                    cookieLifetime: {},
                                                    cookieName: {},
                                                    disableThirdPartyCalls: {},
                                                    idSyncAfterIDCallResult: {},
                                                    idSyncAttachIframeOnWindowLoad: {},
                                                    idSyncContainerID: {},
                                                    idSyncDisable3rdPartySyncing: {},
                                                    disableThirdPartyCookies: {},
                                                    idSyncDisableSyncs: {},
                                                    disableIdSyncs: {},
                                                    idSyncIDCallResult: {},
                                                    idSyncSSLUseAkamai: {},
                                                    isCoopSafe: {},
                                                    loadSSL: {},
                                                    loadTimeout: {},
                                                    marketingCloudServer: {},
                                                    marketingCloudServerSecure: {},
                                                    overwriteCrossDomainMCIDAndAID: {},
                                                    resetBeforeVersion: {},
                                                    sdidParamExpiry: {},
                                                    serverState: {},
                                                    sessionCookieName: {},
                                                    secureCookie: {},
                                                    takeTimeoutMetrics: {},
                                                    trackingServer: {},
                                                    trackingServerSecure: {},
                                                    whitelistIframeDomains: {},
                                                    whitelistParentDomain: {}
                                                }, B = {
                                                    getConfigNames: function () {
                                                        return Object.keys(j);
                                                    },
                                                    getConfigs: function () {
                                                        return j;
                                                    }
                                                }, H = function (e, a, n) {
                                                    function i(e) {
                                                        var t = e;
                                                        return function (e) {
                                                            var a = e || g.location.href;
                                                            try {
                                                                var n = d._extractParamFromUri(a, t);
                                                                if (n)
                                                                    return w.parsePipeDelimetedKeyValues(n);
                                                            } catch (e) {
                                                            }
                                                        };
                                                    }
                                                    function r(e) {
                                                        function t(e, t) {
                                                            e && e.match(U.VALID_VISITOR_ID_REGEX) && t(e);
                                                        }
                                                        t(e[h], d.setMarketingCloudVisitorID), d._setFieldExpire(I, -1), t(e[b], d.setAnalyticsVisitorID);
                                                    }
                                                    function o(e) {
                                                        e = e || {}, d._supplementalDataIDCurrent = e.supplementalDataIDCurrent || '', d._supplementalDataIDCurrentConsumed = e.supplementalDataIDCurrentConsumed || {}, d._supplementalDataIDLast = e.supplementalDataIDLast || '', d._supplementalDataIDLastConsumed = e.supplementalDataIDLastConsumed || {};
                                                    }
                                                    function l(e) {
                                                        function t(e, t, a) {
                                                            return (a = a ? a += '|' : a) + (e + '=') + encodeURIComponent(t);
                                                        }
                                                        function a(e, a) {
                                                            var n = a[0], i = a[1];
                                                            return null != i && i !== S && (e = t(n, i, e)), e;
                                                        }
                                                        var n, i = e.reduce(a, '');
                                                        return (n = (n = i) ? n += '|' : n) + 'TS=' + w.getTimestampInSeconds();
                                                    }
                                                    function c(e) {
                                                        var t = e.minutesToLive, a = '';
                                                        return (d.idSyncDisableSyncs || d.disableIdSyncs) && (a = a || 'Error: id syncs have been disabled'), 'string' == typeof e.dpid && e.dpid.length || (a = a || 'Error: config.dpid is empty'), 'string' == typeof e.url && e.url.length || (a = a || 'Error: config.url is empty'), void 0 === t ? t = 20160 : (t = parseInt(t, 10), (isNaN(t) || t <= 0) && (a = a || 'Error: config.minutesToLive needs to be a positive number')), {
                                                            error: a,
                                                            ttl: t
                                                        };
                                                    }
                                                    if (!n || n.split('').reverse().join('') !== e)
                                                        throw new Error('Please use `Visitor.getInstance` to instantiate Visitor.');
                                                    var d = this;
                                                    d.version = '3.3.0';
                                                    var g = s, f = g.Visitor;
                                                    f.version = d.version, f.AuthState = u.AUTH_STATE, f.OptOut = u.OPT_OUT, g.s_c_in || (g.s_c_il = [], g.s_c_in = 0), d._c = 'Visitor', d._il = g.s_c_il, d._in = g.s_c_in, d._il[d._in] = d, g.s_c_in++, d._instanceType = 'regular', d._log = { requests: [] }, d.marketingCloudOrgID = e, d.cookieName = 'AMCV_' + e, d.sessionCookieName = 'AMCVS_' + e, d.cookieDomain = E(), d.cookieDomain === g.location.hostname && (d.cookieDomain = ''), d.loadSSL = g.location.protocol.toLowerCase().indexOf('https') >= 0, d.loadTimeout = 30000, d.CORSErrors = [], d.marketingCloudServer = d.audienceManagerServer = 'dpm.demdex.net', d.sdidParamExpiry = 30;
                                                    var p = g.document, m = null, h = 'MCMID', v = 'MCIDTS', _ = 'A', b = 'MCAID', C = 'AAM', I = 'MCAAMB', S = 'NONE', V = function (e) {
                                                            return !Object.prototype[e];
                                                        }, k = x(d);
                                                    d.FIELDS = u.FIELDS, d.cookieRead = function (e) {
                                                        e = encodeURIComponent(e);
                                                        var t = (';' + p.cookie).split(' ').join(';'), a = t.indexOf(';' + e + '='), n = a < 0 ? a : t.indexOf(';', a + 1);
                                                        return a < 0 ? '' : decodeURIComponent(t.substring(a + 2 + e.length, n < 0 ? t.length : n));
                                                    }, d.cookieWrite = function (e, t, a) {
                                                        var n, i = d.cookieLifetime, r = '';
                                                        if (t = '' + t, i = i ? ('' + i).toUpperCase() : '', a && 'SESSION' !== i && 'NONE' !== i) {
                                                            if (n = '' !== t ? parseInt(i || 0, 10) : -60)
                                                                (a = new Date()).setTime(a.getTime() + 1000 * n);
                                                            else if (1 === a) {
                                                                var o = (a = new Date()).getYear();
                                                                a.setYear(o + 2 + (o < 1900 ? 1900 : 0));
                                                            }
                                                        } else
                                                            a = 0;
                                                        return e && 'NONE' !== i ? (d.configs && d.configs.secureCookie && 'https:' === location.protocol && (r = 'Secure'), p.cookie = encodeURIComponent(e) + '=' + encodeURIComponent(t) + '; path=/;' + (a ? ' expires=' + a.toGMTString() + ';' : '') + (d.cookieDomain ? ' domain=' + d.cookieDomain + ';' : '') + r, d.cookieRead(e) === t) : 0;
                                                    }, d.resetState = function (e) {
                                                        e ? d._mergeServerState(e) : o();
                                                    }, d._isAllowedDone = !1, d._isAllowedFlag = !1, d.isAllowed = function () {
                                                        return d._isAllowedDone || (d._isAllowedDone = !0, (d.cookieRead(d.cookieName) || d.cookieWrite(d.cookieName, 'T', 1)) && (d._isAllowedFlag = !0)), d._isAllowedFlag;
                                                    }, d.setMarketingCloudVisitorID = function (e) {
                                                        d._setMarketingCloudFields(e);
                                                    }, d._use1stPartyMarketingCloudServer = !1, d.getMarketingCloudVisitorID = function (e, t) {
                                                        if (d.isAllowed()) {
                                                            d.marketingCloudServer && d.marketingCloudServer.indexOf('.demdex.net') < 0 && (d._use1stPartyMarketingCloudServer = !0);
                                                            var a = d._getAudienceManagerURLData('_setMarketingCloudFields'), n = a.url;
                                                            return d._getRemoteField(h, n, e, t, a);
                                                        }
                                                        return '';
                                                    }, d.getVisitorValues = function (e, t) {
                                                        var a = {
                                                                MCMID: {
                                                                    fn: d.getMarketingCloudVisitorID,
                                                                    args: [!0],
                                                                    context: d
                                                                },
                                                                MCOPTOUT: {
                                                                    fn: d.isOptedOut,
                                                                    args: [
                                                                        void 0,
                                                                        !0
                                                                    ],
                                                                    context: d
                                                                },
                                                                MCAID: {
                                                                    fn: d.getAnalyticsVisitorID,
                                                                    args: [!0],
                                                                    context: d
                                                                },
                                                                MCAAMLH: {
                                                                    fn: d.getAudienceManagerLocationHint,
                                                                    args: [!0],
                                                                    context: d
                                                                },
                                                                MCAAMB: {
                                                                    fn: d.getAudienceManagerBlob,
                                                                    args: [!0],
                                                                    context: d
                                                                }
                                                            }, n = t && t.length ? w.pluck(a, t) : a;
                                                        M(n, e);
                                                    }, d._currentCustomerIDs = {}, d._customerIDsHashChanged = !1, d._newCustomerIDsHash = '', d.setCustomerIDs = function (e) {
                                                        function t() {
                                                            d._customerIDsHashChanged = !1;
                                                        }
                                                        if (d.isAllowed() && e) {
                                                            if (!y.isObject(e) || y.isObjectEmpty(e))
                                                                return !1;
                                                            var a, n;
                                                            for (a in (d._readVisitor(), e))
                                                                if (V(a) && (n = e[a]))
                                                                    if ('object' == typeof n) {
                                                                        var i = {};
                                                                        n.id && (i.id = n.id), null != n.authState && (i.authState = n.authState), d._currentCustomerIDs[a] = i;
                                                                    } else
                                                                        d._currentCustomerIDs[a] = { id: n };
                                                            var r = d.getCustomerIDs(), o = d._getField('MCCIDH'), s = '';
                                                            for (a in (o || (o = 0), r))
                                                                V(a) && (s += (s ? '|' : '') + a + '|' + ((n = r[a]).id ? n.id : '') + (n.authState ? n.authState : ''));
                                                            d._newCustomerIDsHash = String(d._hash(s)), d._newCustomerIDsHash !== o && (d._customerIDsHashChanged = !0, d._mapCustomerIDs(t));
                                                        }
                                                    }, d.getCustomerIDs = function () {
                                                        d._readVisitor();
                                                        var e, t, a = {};
                                                        for (e in d._currentCustomerIDs)
                                                            V(e) && (t = d._currentCustomerIDs[e], a[e] || (a[e] = {}), t.id && (a[e].id = t.id), null != t.authState ? a[e].authState = t.authState : a[e].authState = f.AuthState.UNKNOWN);
                                                        return a;
                                                    }, d.setAnalyticsVisitorID = function (e) {
                                                        d._setAnalyticsFields(e);
                                                    }, d.getAnalyticsVisitorID = function (e, t, a) {
                                                        if (!w.isTrackingServerPopulated() && !a)
                                                            return d._callCallback(e, ['']), '';
                                                        if (d.isAllowed()) {
                                                            var n = '';
                                                            if (a || (n = d.getMarketingCloudVisitorID(function () {
                                                                    d.getAnalyticsVisitorID(e, !0);
                                                                })), n || a) {
                                                                var i = a ? d.marketingCloudServer : d.trackingServer, r = '';
                                                                d.loadSSL && (a ? d.marketingCloudServerSecure && (i = d.marketingCloudServerSecure) : d.trackingServerSecure && (i = d.trackingServerSecure));
                                                                var o = {};
                                                                if (i) {
                                                                    var s = 'http' + (d.loadSSL ? 's' : '') + '://' + i + '/id', l = 'd_visid_ver=' + d.version + '&mcorgid=' + encodeURIComponent(d.marketingCloudOrgID) + (n ? '&mid=' + encodeURIComponent(n) : '') + (d.idSyncDisable3rdPartySyncing || d.disableThirdPartyCookies ? '&d_coppa=true' : ''), c = [
                                                                            's_c_il',
                                                                            d._in,
                                                                            '_set' + (a ? 'MarketingCloud' : 'Analytics') + 'Fields'
                                                                        ];
                                                                    r = s + '?' + l + '&callback=s_c_il%5B' + d._in + '%5D._set' + (a ? 'MarketingCloud' : 'Analytics') + 'Fields', o.corsUrl = s + '?' + l, o.callback = c;
                                                                }
                                                                return o.url = r, d._getRemoteField(a ? h : b, r, e, t, o);
                                                            }
                                                        }
                                                        return '';
                                                    }, d.getAudienceManagerLocationHint = function (e, t) {
                                                        if (d.isAllowed() && d.getMarketingCloudVisitorID(function () {
                                                                d.getAudienceManagerLocationHint(e, !0);
                                                            })) {
                                                            var a = d._getField(b);
                                                            if (!a && w.isTrackingServerPopulated() && (a = d.getAnalyticsVisitorID(function () {
                                                                    d.getAudienceManagerLocationHint(e, !0);
                                                                })), a || !w.isTrackingServerPopulated()) {
                                                                var n = d._getAudienceManagerURLData(), i = n.url;
                                                                return d._getRemoteField('MCAAMLH', i, e, t, n);
                                                            }
                                                        }
                                                        return '';
                                                    }, d.getLocationHint = d.getAudienceManagerLocationHint, d.getAudienceManagerBlob = function (e, t) {
                                                        if (d.isAllowed() && d.getMarketingCloudVisitorID(function () {
                                                                d.getAudienceManagerBlob(e, !0);
                                                            })) {
                                                            var a = d._getField(b);
                                                            if (!a && w.isTrackingServerPopulated() && (a = d.getAnalyticsVisitorID(function () {
                                                                    d.getAudienceManagerBlob(e, !0);
                                                                })), a || !w.isTrackingServerPopulated()) {
                                                                var n = d._getAudienceManagerURLData(), i = n.url;
                                                                return d._customerIDsHashChanged && d._setFieldExpire(I, -1), d._getRemoteField(I, i, e, t, n);
                                                            }
                                                        }
                                                        return '';
                                                    }, d._supplementalDataIDCurrent = '', d._supplementalDataIDCurrentConsumed = {}, d._supplementalDataIDLast = '', d._supplementalDataIDLastConsumed = {}, d.getSupplementalDataID = function (e, t) {
                                                        d._supplementalDataIDCurrent || t || (d._supplementalDataIDCurrent = d._generateID(1));
                                                        var a = d._supplementalDataIDCurrent;
                                                        return d._supplementalDataIDLast && !d._supplementalDataIDLastConsumed[e] ? (a = d._supplementalDataIDLast, d._supplementalDataIDLastConsumed[e] = !0) : a && (d._supplementalDataIDCurrentConsumed[e] && (d._supplementalDataIDLast = d._supplementalDataIDCurrent, d._supplementalDataIDLastConsumed = d._supplementalDataIDCurrentConsumed, d._supplementalDataIDCurrent = a = t ? '' : d._generateID(1), d._supplementalDataIDCurrentConsumed = {}), a && (d._supplementalDataIDCurrentConsumed[e] = !0)), a;
                                                    }, d.getOptOut = function (e, t) {
                                                        if (d.isAllowed()) {
                                                            var a = d._getAudienceManagerURLData('_setMarketingCloudFields'), n = a.url;
                                                            return d._getRemoteField('MCOPTOUT', n, e, t, a);
                                                        }
                                                        return '';
                                                    }, d.isOptedOut = function (e, t, a) {
                                                        if (d.isAllowed()) {
                                                            t || (t = f.OptOut.GLOBAL);
                                                            var n = d.getOptOut(function (a) {
                                                                var n = a === f.OptOut.GLOBAL || a.indexOf(t) >= 0;
                                                                d._callCallback(e, [n]);
                                                            }, a);
                                                            return n ? n === f.OptOut.GLOBAL || n.indexOf(t) >= 0 : null;
                                                        }
                                                        return !1;
                                                    }, d._fields = null, d._fieldsExpired = null, d._hash = function (e) {
                                                        var t, a = 0;
                                                        if (e)
                                                            for (t = 0; t < e.length; t++)
                                                                a = (a << 5) - a + e.charCodeAt(t), a &= a;
                                                        return a;
                                                    }, d._generateID = N, d._generateLocalMID = function () {
                                                        var e = d._generateID(0);
                                                        return L.isClientSideMarketingCloudVisitorID = !0, e;
                                                    }, d._callbackList = null, d._callCallback = function (e, t) {
                                                        try {
                                                            'function' == typeof e ? e.apply(g, t) : e[1].apply(e[0], t);
                                                        } catch (e) {
                                                        }
                                                    }, d._registerCallback = function (e, t) {
                                                        t && (null == d._callbackList && (d._callbackList = {}), null == d._callbackList[e] && (d._callbackList[e] = []), d._callbackList[e].push(t));
                                                    }, d._callAllCallbacks = function (e, t) {
                                                        if (null != d._callbackList) {
                                                            var a = d._callbackList[e];
                                                            if (a)
                                                                for (; a.length > 0;)
                                                                    d._callCallback(a.shift(), t);
                                                        }
                                                    }, d._addQuerystringParam = function (e, t, a, n) {
                                                        var i = encodeURIComponent(t) + '=' + encodeURIComponent(a), r = w.parseHash(e), o = w.hashlessUrl(e);
                                                        if (-1 === o.indexOf('?'))
                                                            return o + '?' + i + r;
                                                        var s = o.split('?'), l = s[0] + '?', c = s[1];
                                                        return l + w.addQueryParamAtLocation(c, i, n) + r;
                                                    }, d._extractParamFromUri = function (e, t) {
                                                        var a = new RegExp('[\\?&#]' + t + '=([^&#]*)').exec(e);
                                                        if (a && a.length)
                                                            return decodeURIComponent(a[1]);
                                                    }, d._parseAdobeMcFromUrl = i(U.ADOBE_MC), d._parseAdobeMcSdidFromUrl = i(U.ADOBE_MC_SDID), d._attemptToPopulateSdidFromUrl = function (t) {
                                                        var a = d._parseAdobeMcSdidFromUrl(t), n = 1000000000;
                                                        a && a.TS && (n = w.getTimestampInSeconds() - a.TS), a && a.SDID && a.MCORGID === e && n < d.sdidParamExpiry && (d._supplementalDataIDCurrent = a.SDID, d._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0);
                                                    }, d._attemptToPopulateIdsFromUrl = function () {
                                                        var t = d._parseAdobeMcFromUrl();
                                                        if (t && t.TS) {
                                                            var a = w.getTimestampInSeconds() - t.TS;
                                                            if (Math.floor(a / 60) > U.ADOBE_MC_TTL_IN_MIN || t.MCORGID !== e)
                                                                return;
                                                            r(t);
                                                        }
                                                    }, d._mergeServerState = function (e) {
                                                        if (e)
                                                            try {
                                                                if (n = e, (e = w.isObject(n) ? n : JSON.parse(n))[d.marketingCloudOrgID]) {
                                                                    var t = e[d.marketingCloudOrgID];
                                                                    a = t.customerIDs, w.isObject(a) && d.setCustomerIDs(a), o(t.sdid);
                                                                }
                                                            } catch (e) {
                                                                throw new Error('`serverState` has an invalid format.');
                                                            }
                                                        var a, n;
                                                    }, d._timeout = null, d._loadData = function (e, t, a, n) {
                                                        t = d._addQuerystringParam(t, 'd_fieldgroup', e, 1), n.url = d._addQuerystringParam(n.url, 'd_fieldgroup', e, 1), n.corsUrl = d._addQuerystringParam(n.corsUrl, 'd_fieldgroup', e, 1), L.fieldGroupObj[e] = !0, n === Object(n) && n.corsUrl && 'XMLHttpRequest' === k.corsMetadata.corsType && k.fireCORS(n, a, e);
                                                    }, d._clearTimeout = function (e) {
                                                        null != d._timeout && d._timeout[e] && (clearTimeout(d._timeout[e]), d._timeout[e] = 0);
                                                    }, d._settingsDigest = 0, d._getSettingsDigest = function () {
                                                        if (!d._settingsDigest) {
                                                            var e = d.version;
                                                            d.audienceManagerServer && (e += '|' + d.audienceManagerServer), d.audienceManagerServerSecure && (e += '|' + d.audienceManagerServerSecure), d._settingsDigest = d._hash(e);
                                                        }
                                                        return d._settingsDigest;
                                                    }, d._readVisitorDone = !1, d._readVisitor = function () {
                                                        if (!d._readVisitorDone) {
                                                            d._readVisitorDone = !0;
                                                            var e, t, a, n, i, r, o = d._getSettingsDigest(), s = !1, l = d.cookieRead(d.cookieName), c = new Date();
                                                            if (null == d._fields && (d._fields = {}), l && 'T' !== l)
                                                                for ((l = l.split('|'))[0].match(/^[\-0-9]+$/) && (parseInt(l[0], 10) !== o && (s = !0), l.shift()), l.length % 2 == 1 && l.pop(), e = 0; e < l.length; e += 2)
                                                                    a = (t = l[e].split('-'))[0], n = l[e + 1], t.length > 1 ? (i = parseInt(t[1], 10), r = t[1].indexOf('s') > 0) : (i = 0, r = !1), s && ('MCCIDH' === a && (n = ''), i > 0 && (i = c.getTime() / 1000 - 60)), a && n && (d._setField(a, n, 1), i > 0 && (d._fields['expire' + a] = i + (r ? 's' : ''), (c.getTime() >= 1000 * i || r && !d.cookieRead(d.sessionCookieName)) && (d._fieldsExpired || (d._fieldsExpired = {}), d._fieldsExpired[a] = !0)));
                                                            !d._getField(b) && w.isTrackingServerPopulated() && (l = d.cookieRead('s_vi')) && ((l = l.split('|')).length > 1 && l[0].indexOf('v1') >= 0 && ((e = (n = l[1]).indexOf('[')) >= 0 && (n = n.substring(0, e)), n && n.match(U.VALID_VISITOR_ID_REGEX) && d._setField(b, n)));
                                                        }
                                                    }, d._appendVersionTo = function (e) {
                                                        var t = 'vVersion|' + d.version, a = e ? d._getCookieVersion(e) : null;
                                                        return a ? P.areVersionsDifferent(a, d.version) && (e = e.replace(U.VERSION_REGEX, t)) : e += (e ? '|' : '') + t, e;
                                                    }, d._writeVisitor = function () {
                                                        var e, t, a = d._getSettingsDigest();
                                                        for (e in d._fields)
                                                            V(e) && d._fields[e] && 'expire' !== e.substring(0, 6) && (t = d._fields[e], a += (a ? '|' : '') + e + (d._fields['expire' + e] ? '-' + d._fields['expire' + e] : '') + '|' + t);
                                                        a = d._appendVersionTo(a), d.cookieWrite(d.cookieName, a, 1);
                                                    }, d._getField = function (e, t) {
                                                        return null == d._fields || !t && d._fieldsExpired && d._fieldsExpired[e] ? null : d._fields[e];
                                                    }, d._setField = function (e, t, a) {
                                                        null == d._fields && (d._fields = {}), d._fields[e] = t, a || d._writeVisitor();
                                                    }, d._getFieldList = function (e, t) {
                                                        var a = d._getField(e, t);
                                                        return a ? a.split('*') : null;
                                                    }, d._setFieldList = function (e, t, a) {
                                                        d._setField(e, t ? t.join('*') : '', a);
                                                    }, d._getFieldMap = function (e, t) {
                                                        var a = d._getFieldList(e, t);
                                                        if (a) {
                                                            var n, i = {};
                                                            for (n = 0; n < a.length; n += 2)
                                                                i[a[n]] = a[n + 1];
                                                            return i;
                                                        }
                                                        return null;
                                                    }, d._setFieldMap = function (e, t, a) {
                                                        var n, i = null;
                                                        if (t)
                                                            for (n in (i = [], t))
                                                                V(n) && (i.push(n), i.push(t[n]));
                                                        d._setFieldList(e, i, a);
                                                    }, d._setFieldExpire = function (e, t, a) {
                                                        var n = new Date();
                                                        n.setTime(n.getTime() + 1000 * t), null == d._fields && (d._fields = {}), d._fields['expire' + e] = Math.floor(n.getTime() / 1000) + (a ? 's' : ''), t < 0 ? (d._fieldsExpired || (d._fieldsExpired = {}), d._fieldsExpired[e] = !0) : d._fieldsExpired && (d._fieldsExpired[e] = !1), a && (d.cookieRead(d.sessionCookieName) || d.cookieWrite(d.sessionCookieName, '1'));
                                                    }, d._findVisitorID = function (e) {
                                                        return e && ('object' == typeof e && (e = e.d_mid ? e.d_mid : e.visitorID ? e.visitorID : e.id ? e.id : e.uuid ? e.uuid : '' + e), e && 'NOTARGET' === (e = e.toUpperCase()) && (e = S), e && (e === S || e.match(U.VALID_VISITOR_ID_REGEX)) || (e = '')), e;
                                                    }, d._setFields = function (e, t) {
                                                        if (d._clearTimeout(e), null != d._loading && (d._loading[e] = !1), L.fieldGroupObj[e] && L.setState(e, !1), 'MC' === e) {
                                                            !0 !== L.isClientSideMarketingCloudVisitorID && (L.isClientSideMarketingCloudVisitorID = !1);
                                                            var a = d._getField(h);
                                                            if (!a || d.overwriteCrossDomainMCIDAndAID) {
                                                                if (!(a = 'object' == typeof t && t.mid ? t.mid : d._findVisitorID(t))) {
                                                                    if (d._use1stPartyMarketingCloudServer && !d.tried1stPartyMarketingCloudServer)
                                                                        return d.tried1stPartyMarketingCloudServer = !0, void d.getAnalyticsVisitorID(null, !1, !0);
                                                                    a = d._generateLocalMID();
                                                                }
                                                                d._setField(h, a);
                                                            }
                                                            a && a !== S || (a = ''), 'object' == typeof t && ((t.d_region || t.dcs_region || t.d_blob || t.blob) && d._setFields(C, t), d._use1stPartyMarketingCloudServer && t.mid && d._setFields(_, { id: t.id })), d._callAllCallbacks(h, [a]);
                                                        }
                                                        if (e === C && 'object' == typeof t) {
                                                            var n = 604800;
                                                            null != t.id_sync_ttl && t.id_sync_ttl && (n = parseInt(t.id_sync_ttl, 10));
                                                            var i = T.getRegionAndCheckIfChanged(t, n);
                                                            d._callAllCallbacks('MCAAMLH', [i]);
                                                            var r = d._getField(I);
                                                            (t.d_blob || t.blob) && ((r = t.d_blob) || (r = t.blob), d._setFieldExpire(I, n), d._setField(I, r)), r || (r = ''), d._callAllCallbacks(I, [r]), !t.error_msg && d._newCustomerIDsHash && d._setField('MCCIDH', d._newCustomerIDsHash);
                                                        }
                                                        if (e === _) {
                                                            var o = d._getField(b);
                                                            o && !d.overwriteCrossDomainMCIDAndAID || ((o = d._findVisitorID(t)) ? o !== S && d._setFieldExpire(I, -1) : o = S, d._setField(b, o)), o && o !== S || (o = ''), d._callAllCallbacks(b, [o]);
                                                        }
                                                        if (d.idSyncDisableSyncs || d.disableIdSyncs)
                                                            T.idCallNotProcesssed = !0;
                                                        else {
                                                            T.idCallNotProcesssed = !1;
                                                            var s = {};
                                                            s.ibs = t.ibs, s.subdomain = t.subdomain, T.processIDCallData(s);
                                                        }
                                                        var l, c;
                                                        t === Object(t) && (d.isAllowed() && (l = d._getField('MCOPTOUT')), l || (l = S, t.d_optout && t.d_optout instanceof Array && (l = t.d_optout.join(',')), c = parseInt(t.d_ottl, 10), isNaN(c) && (c = 7200), d._setFieldExpire('MCOPTOUT', c, !0), d._setField('MCOPTOUT', l)), d._callAllCallbacks('MCOPTOUT', [l]));
                                                    }, d._loading = null, d._getRemoteField = function (e, t, a, n, i) {
                                                        var r, o = '', s = w.isFirstPartyAnalyticsVisitorIDCall(e), l = {
                                                                MCAAMLH: !0,
                                                                MCAAMB: !0
                                                            };
                                                        if (d.isAllowed())
                                                            if (d._readVisitor(), !(!(o = d._getField(e, !0 === l[e])) || d._fieldsExpired && d._fieldsExpired[e]) || d.disableThirdPartyCalls && !s)
                                                                o || (e === h ? (d._registerCallback(e, a), o = d._generateLocalMID(), d.setMarketingCloudVisitorID(o)) : e === b ? (d._registerCallback(e, a), o = '', d.setAnalyticsVisitorID(o)) : (o = '', n = !0));
                                                            else if (e === h || 'MCOPTOUT' === e ? r = 'MC' : 'MCAAMLH' === e || e === I ? r = C : e === b && (r = _), r)
                                                                return !t || null != d._loading && d._loading[r] || (null == d._loading && (d._loading = {}), d._loading[r] = !0, d._loadData(r, t, function (t) {
                                                                    if (!d._getField(e)) {
                                                                        t && L.setState(r, !0);
                                                                        var a = '';
                                                                        e === h ? a = d._generateLocalMID() : r === C && (a = { error_msg: 'timeout' }), d._setFields(r, a);
                                                                    }
                                                                }, i)), d._registerCallback(e, a), o || (t || d._setFields(r, { id: S }), '');
                                                        return e !== h && e !== b || o !== S || (o = '', n = !0), a && n && d._callCallback(a, [o]), o;
                                                    }, d._setMarketingCloudFields = function (e) {
                                                        d._readVisitor(), d._setFields('MC', e);
                                                    }, d._mapCustomerIDs = function (e) {
                                                        d.getAudienceManagerBlob(e, !0);
                                                    }, d._setAnalyticsFields = function (e) {
                                                        d._readVisitor(), d._setFields(_, e);
                                                    }, d._setAudienceManagerFields = function (e) {
                                                        d._readVisitor(), d._setFields(C, e);
                                                    }, d._getAudienceManagerURLData = function (e) {
                                                        var t = d.audienceManagerServer, a = '', n = d._getField(h), i = d._getField(I, !0), r = d._getField(b), o = r && r !== S ? '&d_cid_ic=AVID%01' + encodeURIComponent(r) : '';
                                                        if (d.loadSSL && d.audienceManagerServerSecure && (t = d.audienceManagerServerSecure), t) {
                                                            var s, l, c = d.getCustomerIDs();
                                                            if (c)
                                                                for (s in c)
                                                                    V(s) && (l = c[s], o += '&d_cid_ic=' + encodeURIComponent(s) + '%01' + encodeURIComponent(l.id ? l.id : '') + (l.authState ? '%01' + l.authState : ''));
                                                            e || (e = '_setAudienceManagerFields');
                                                            var u = 'http' + (d.loadSSL ? 's' : '') + '://' + t + '/id', g = 'd_visid_ver=' + d.version + '&d_rtbd=json&d_ver=2' + (!n && d._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') + '&d_orgid=' + encodeURIComponent(d.marketingCloudOrgID) + '&d_nsid=' + (d.idSyncContainerID || 0) + (n ? '&d_mid=' + encodeURIComponent(n) : '') + (d.idSyncDisable3rdPartySyncing || d.disableThirdPartyCookies ? '&d_coppa=true' : '') + (!0 === m ? '&d_coop_safe=1' : !1 === m ? '&d_coop_unsafe=1' : '') + (i ? '&d_blob=' + encodeURIComponent(i) : '') + o, f = [
                                                                    's_c_il',
                                                                    d._in,
                                                                    e
                                                                ];
                                                            return {
                                                                url: a = u + '?' + g + '&d_cb=s_c_il%5B' + d._in + '%5D.' + e,
                                                                corsUrl: u + '?' + g,
                                                                callback: f
                                                            };
                                                        }
                                                        return { url: a };
                                                    }, d.appendVisitorIDsTo = function (e) {
                                                        try {
                                                            var t = [
                                                                [
                                                                    h,
                                                                    d._getField(h)
                                                                ],
                                                                [
                                                                    b,
                                                                    d._getField(b)
                                                                ],
                                                                [
                                                                    'MCORGID',
                                                                    d.marketingCloudOrgID
                                                                ]
                                                            ];
                                                            return d._addQuerystringParam(e, U.ADOBE_MC, l(t));
                                                        } catch (t) {
                                                            return e;
                                                        }
                                                    }, d.appendSupplementalDataIDTo = function (e, t) {
                                                        if (!(t = t || d.getSupplementalDataID(w.generateRandomString(), !0)))
                                                            return e;
                                                        try {
                                                            var a = l([
                                                                [
                                                                    'SDID',
                                                                    t
                                                                ],
                                                                [
                                                                    'MCORGID',
                                                                    d.marketingCloudOrgID
                                                                ]
                                                            ]);
                                                            return d._addQuerystringParam(e, U.ADOBE_MC_SDID, a);
                                                        } catch (t) {
                                                            return e;
                                                        }
                                                    };
                                                    var w = {
                                                        parseHash: function (e) {
                                                            var t = e.indexOf('#');
                                                            return t > 0 ? e.substr(t) : '';
                                                        },
                                                        hashlessUrl: function (e) {
                                                            var t = e.indexOf('#');
                                                            return t > 0 ? e.substr(0, t) : e;
                                                        },
                                                        addQueryParamAtLocation: function (e, t, a) {
                                                            var n = e.split('&');
                                                            return a = null != a ? a : n.length, n.splice(a, 0, t), n.join('&');
                                                        },
                                                        isFirstPartyAnalyticsVisitorIDCall: function (e, t, a) {
                                                            return e === b && (t || (t = d.trackingServer), a || (a = d.trackingServerSecure), !('string' != typeof (n = d.loadSSL ? a : t) || !n.length) && n.indexOf('2o7.net') < 0 && n.indexOf('omtrdc.net') < 0);
                                                            var n;
                                                        },
                                                        isObject: function (e) {
                                                            return Boolean(e && e === Object(e));
                                                        },
                                                        removeCookie: function (e) {
                                                            t.cookie = encodeURIComponent(e) + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;' + (d.cookieDomain ? ' domain=' + d.cookieDomain + ';' : '');
                                                        },
                                                        isTrackingServerPopulated: function () {
                                                            return !!d.trackingServer || !!d.trackingServerSecure;
                                                        },
                                                        getTimestampInSeconds: function () {
                                                            return Math.round(new Date().getTime() / 1000);
                                                        },
                                                        parsePipeDelimetedKeyValues: function (e) {
                                                            return e.split('|').reduce(function (e, t) {
                                                                var a = t.split('=');
                                                                return e[a[0]] = decodeURIComponent(a[1]), e;
                                                            }, {});
                                                        },
                                                        generateRandomString: function (e) {
                                                            e = e || 5;
                                                            for (var t = '', a = 'abcdefghijklmnopqrstuvwxyz0123456789'; e--;)
                                                                t += a[Math.floor(Math.random() * a.length)];
                                                            return t;
                                                        },
                                                        parseBoolean: function (e) {
                                                            return 'true' === e || 'false' !== e && null;
                                                        },
                                                        replaceMethodsWithFunction: function (e, t) {
                                                            for (var a in e)
                                                                e.hasOwnProperty(a) && 'function' == typeof e[a] && (e[a] = t);
                                                            return e;
                                                        },
                                                        pluck: function (e, t) {
                                                            return t.reduce(function (t, a) {
                                                                return e[a] && (t[a] = e[a]), t;
                                                            }, Object.create(null));
                                                        }
                                                    };
                                                    d._helpers = w;
                                                    var T = F(d, f);
                                                    d._destinationPublishing = T, d.timeoutMetricsLog = [];
                                                    var L = {
                                                        isClientSideMarketingCloudVisitorID: null,
                                                        MCIDCallTimedOut: null,
                                                        AnalyticsIDCallTimedOut: null,
                                                        AAMIDCallTimedOut: null,
                                                        fieldGroupObj: {},
                                                        setState: function (e, t) {
                                                            switch (e) {
                                                            case 'MC':
                                                                !1 === t ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1) : this.MCIDCallTimedOut = t;
                                                                break;
                                                            case _:
                                                                !1 === t ? !0 !== this.AnalyticsIDCallTimedOut && (this.AnalyticsIDCallTimedOut = !1) : this.AnalyticsIDCallTimedOut = t;
                                                                break;
                                                            case C:
                                                                !1 === t ? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1) : this.AAMIDCallTimedOut = t;
                                                            }
                                                        }
                                                    };
                                                    d.isClientSideMarketingCloudVisitorID = function () {
                                                        return L.isClientSideMarketingCloudVisitorID;
                                                    }, d.MCIDCallTimedOut = function () {
                                                        return L.MCIDCallTimedOut;
                                                    }, d.AnalyticsIDCallTimedOut = function () {
                                                        return L.AnalyticsIDCallTimedOut;
                                                    }, d.AAMIDCallTimedOut = function () {
                                                        return L.AAMIDCallTimedOut;
                                                    }, d.idSyncGetOnPageSyncInfo = function () {
                                                        return d._readVisitor(), d._getField('MCSYNCSOP');
                                                    }, d.idSyncByURL = function (e) {
                                                        var t = c(e || {});
                                                        if (t.error)
                                                            return t.error;
                                                        var a, n, i = e.url, r = encodeURIComponent, o = T;
                                                        return i = i.replace(/^https:/, '').replace(/^http:/, ''), a = y.encodeAndBuildRequest([
                                                            '',
                                                            e.dpid,
                                                            e.dpuuid || ''
                                                        ], ','), n = [
                                                            'ibs',
                                                            r(e.dpid),
                                                            'img',
                                                            r(i),
                                                            t.ttl,
                                                            '',
                                                            a
                                                        ], o.addMessage(n.join('|')), o.requestToProcess(), 'Successfully queued';
                                                    }, d.idSyncByDataSource = function (e) {
                                                        return e === Object(e) && 'string' == typeof e.dpuuid && e.dpuuid.length ? (e.url = '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid, d.idSyncByURL(e)) : 'Error: config or config.dpuuid is empty';
                                                    }, d.publishDestinations = function (e, t, a) {
                                                        if (a = 'function' == typeof a ? a : function () {
                                                            }, 'string' == typeof e && e.length)
                                                            if (t instanceof Array && t.length) {
                                                                var n = T;
                                                                if (n.readyToAttachIframePreliminary()) {
                                                                    var i = !1;
                                                                    t.forEach(function (e) {
                                                                        'string' == typeof e && e.length && (n.addMessage(e), i = !0);
                                                                    }), i ? n.iframe ? (a({ message: 'The destination publishing iframe is already attached and loaded.' }), n.requestToProcess()) : !d.subdomain && d._getField(h) ? (n.subdomain = e, n.doAttachIframe = !0, n.url = n.getUrl(), n.readyToAttachIframe() ? (n.iframeLoadedCallbacks.push(function (e) {
                                                                        a({ message: 'Attempted to attach and load the destination publishing iframe through this API call. Result: ' + (e.message || 'no result') });
                                                                    }), n.attachIframe()) : a({ error: 'Encountered a problem in attempting to attach and load the destination publishing iframe through this API call.' })) : n.iframeLoadedCallbacks.push(function (e) {
                                                                        a({ message: 'Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: ' + (e.message || 'no result') });
                                                                    }) : a({ error: 'None of the messages are populated strings.' });
                                                                } else
                                                                    a({ error: 'The destination publishing iframe is disabled in the Visitor library.' });
                                                            } else
                                                                a({ error: 'messages is not a populated array.' });
                                                        else
                                                            a({ error: 'subdomain is not a populated string.' });
                                                    }, d._getCookieVersion = function (e) {
                                                        e = e || d.cookieRead(d.cookieName);
                                                        var t = U.VERSION_REGEX.exec(e);
                                                        return t && t.length > 1 ? t[1] : null;
                                                    }, d._resetAmcvCookie = function (e) {
                                                        var t = d._getCookieVersion();
                                                        t && !P.isLessThan(t, e) || w.removeCookie(d.cookieName);
                                                    }, d.setAsCoopSafe = function () {
                                                        m = !0;
                                                    }, d.setAsCoopUnsafe = function () {
                                                        m = !1;
                                                    }, d.init = function () {
                                                        !function () {
                                                            if (a && 'object' == typeof a) {
                                                                for (var e in (d.configs = Object.create(null), a))
                                                                    V(e) && (d[e] = a[e], d.configs[e] = a[e]);
                                                                d.idSyncContainerID = d.idSyncContainerID || 0, m = 'boolean' == typeof d.isCoopSafe ? d.isCoopSafe : w.parseBoolean(d.isCoopSafe), d.resetBeforeVersion && d._resetAmcvCookie(d.resetBeforeVersion), d._attemptToPopulateIdsFromUrl(), d._attemptToPopulateSdidFromUrl(), d._readVisitor();
                                                                var t = d._getField(v), n = Math.ceil(new Date().getTime() / U.MILLIS_PER_DAY);
                                                                d.idSyncDisableSyncs || d.disableIdSyncs || !T.canMakeSyncIDCall(t, n) || (d._setFieldExpire(I, -1), d._setField(v, n)), d.getMarketingCloudVisitorID(), d.getAudienceManagerLocationHint(), d.getAudienceManagerBlob(), d._mergeServerState(d.serverState);
                                                            } else
                                                                d._attemptToPopulateIdsFromUrl(), d._attemptToPopulateSdidFromUrl();
                                                        }(), function () {
                                                            if (!d.idSyncDisableSyncs && !d.disableIdSyncs) {
                                                                T.checkDPIframeSrc();
                                                                var e = function () {
                                                                    var e = T;
                                                                    e.readyToAttachIframe() && e.attachIframe();
                                                                };
                                                                g.addEventListener('load', function () {
                                                                    f.windowLoaded = !0, e();
                                                                });
                                                                try {
                                                                    R.receiveMessage(function (e) {
                                                                        T.receiveMessage(e.data);
                                                                    }, T.iframeHost);
                                                                } catch (e) {
                                                                }
                                                            }
                                                        }(), d.whitelistIframeDomains && U.POST_MESSAGE_ENABLED && (d.whitelistIframeDomains = d.whitelistIframeDomains instanceof Array ? d.whitelistIframeDomains : [d.whitelistIframeDomains], d.whitelistIframeDomains.forEach(function (t) {
                                                            var a = new D(e, t), n = A(d, a);
                                                            R.receiveMessage(n, t);
                                                        }));
                                                    };
                                                };
                                            H.getInstance = function (e, t) {
                                                if (!e)
                                                    throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
                                                e.indexOf('@') < 0 && (e += '@AdobeOrg');
                                                var a = function () {
                                                    var t = s.s_c_il;
                                                    if (t)
                                                        for (var a = 0; a < t.length; a++) {
                                                            var n = t[a];
                                                            if (n && 'Visitor' === n._c && n.marketingCloudOrgID === e)
                                                                return n;
                                                        }
                                                }();
                                                if (a)
                                                    return a;
                                                var n = e.split('').reverse().join(''), i = new H(e, null, n);
                                                t === Object(t) && t.cookieDomain && (i.cookieDomain = t.cookieDomain), s.s_c_il.splice(--s.s_c_in, 1);
                                                var r = y.getIeVersion();
                                                if ('number' == typeof r && r < 10)
                                                    return i._helpers.replaceMethodsWithFunction(i, function () {
                                                    });
                                                var o, l = function () {
                                                        try {
                                                            return s.self !== s.parent;
                                                        } catch (e) {
                                                            return !0;
                                                        }
                                                    }() && ((o = i).cookieWrite('TEST_AMCV_COOKIE', 'T', 1), 'T' !== o.cookieRead('TEST_AMCV_COOKIE') || (o._helpers.removeCookie('TEST_AMCV_COOKIE'), 0)) && s.parent ? new V(e, t, i, s.parent) : new H(e, t, n);
                                                return i = null, l.init(), l;
                                            }, function () {
                                                function e() {
                                                    H.windowLoaded = !0;
                                                }
                                                s.addEventListener ? s.addEventListener('load', e) : s.attachEvent && s.attachEvent('onload', e), H.codeLoadEnd = new Date().getTime();
                                            }(), H.config = B, s.Visitor = H;
                                        }());
                                        var a = _satellite.getVar('topLevelDomain');
                                        if (void 0 !== a)
                                            var i = Visitor.getInstance('B52D1CFE5330949C0A490D45@AdobeOrg', {
                                                trackingServer: 'bmwag.d3.sc.omtrdc.net',
                                                trackingServerSecure: 'bmwag.d3.sc.omtrdc.net',
                                                disableIdSyncs: !0,
                                                cookieDomain: a
                                            });
                                        else
                                            i = Visitor.getInstance('B52D1CFE5330949C0A490D45@AdobeOrg', {
                                                trackingServer: 'bmwag.d3.sc.omtrdc.net',
                                                trackingServerSecure: 'bmwag.d3.sc.omtrdc.net',
                                                disableIdSyncs: !0
                                            });
                                        n.visitor = i;
                                    }
                                }, 'usedcars.bmw.co.uk' != location.hostname && 'usedcar.bmw.co.uk' != location.hostname && 'offers.bmw.co.uk' != location.hostname || 'true' != _satellite.getVar('isRegulationAccepted') || _satellite.initializeVisitor(), _satellite.aaCustomizedPageCode = function () {
                                    function r(e) {
                                        var t = [], a = Object.keys(_);
                                        if ('string' == typeof e) {
                                            var n = e.toLowerCase();
                                            a.forEach(function (e) {
                                                -1 != n.indexOf(e) && t.push(e);
                                            });
                                        }
                                        return t;
                                    }
                                    function o(e) {
                                        var t = [];
                                        return y.forEach(function (a) {
                                            Object.keys(e).forEach(function (n) {
                                                0 === n.indexOf(a) && b.indexOf(n) <= -1 && e[n] && r(e[n]).length && t.push(n);
                                            });
                                        }), t;
                                    }
                                    function s(e) {
                                        var t = '', a = r(e);
                                        return a.length && a.forEach(function (a) {
                                            t = c(a, e), e = t;
                                        }), t;
                                    }
                                    function l(e) {
                                        var t = e, a = '';
                                        if (t.indexOf('~') > -1 && t.indexOf('http') > -1) {
                                            for (var n = t.split('~'), i = 0; i < n.length; i++)
                                                n[i].indexOf('http') > -1 && (n[i] = s(n[i]));
                                            t = n.join('~');
                                        } else
                                            t.indexOf('http') > -1 && (a = t, t = '' != (t = s(t)) ? t : a);
                                        return t;
                                    }
                                    function c(e, t) {
                                        var a, n, i = t.split('?')[0], r = -1 !== t.indexOf('?') ? t.split('?')[1] : '';
                                        if ('' !== r) {
                                            for (var o = (a = r.split('&')).length - 1; o >= 0; o--)
                                                a[o].split('=')[0].toLowerCase() === e && (a[o] = _[e]);
                                            i = i + '?' + a.join('&');
                                        }
                                        return -1 != i.toLowerCase().indexOf(e) && (i.split('/').length > 1 ? ((n = i.split('/'))[n.length - 2] + '/' + n[n.length - 1] != _[e] && n.forEach(function (t, a) {
                                            n[a - 1] + '/' + n[a] != _[e] && t.toLowerCase().indexOf(e) > -1 && ('&' == t.charAt(t.toLowerCase().indexOf(e) - 1) || '?' == t.charAt(t.toLowerCase().indexOf(e) - 1) ? _[e].split('/').length > 1 ? (n[a] = t.toLowerCase().split(e)[0] + _[e].split('/')[0], n[a + 1] = _[e].split('/')[1]) : n[a] = t.toLowerCase().split(e)[0] + _[e] : _[e].split('/').length > 1 ? (n[a] = _[e].split('/')[0], n[a + 1] = _[e].split('/')[1]) : n[a] = _[e]);
                                        }), (i = n.join('/')).indexOf('https:/') > -1 && i.indexOf('https://') <= -1 && (i = i.split('https:/').join('https://'))) : ':' != i.charAt(+i.indexOf(e) + 2) && (i = i.split(e)[0])), i;
                                    }
                                    function u(e) {
                                        return o(e).forEach(function (t) {
                                            var a = e[t];
                                            e[t] = l(a);
                                        }), e;
                                    }
                                    function d(e) {
                                        try {
                                            switch (typeof e) {
                                            case 'object':
                                                return _satellite.notify('s object was passed'), u(e);
                                            case 'string':
                                                return _satellite.notify('value of eVar or prop was passed'), l(e);
                                            default:
                                                return Error('Not a valid parameter');
                                            }
                                        } catch (p) {
                                            n.eVar109 += '; ' + p.message + ';';
                                        }
                                    }
                                    function g(e, t) {
                                        var a = t.split('?')[0], n = [], i = -1 !== t.indexOf('?') ? t.split('?')[1] : '';
                                        if ('' !== i) {
                                            for (var r = (n = i.split('&')).length - 1; r >= 0; r -= 1)
                                                n[r].split('=')[0] === e && n.splice(r, 1);
                                            a = a + '?' + n.join('&');
                                        }
                                        return a;
                                    }
                                    function f() {
                                        if (_satellite.notify('BUG:<In doplugins>' + n.usePlugins), n.pageURL = n.pageURL ? d(n.pageURL) : d(e.location.href), n.referrer = n.referrer ? d(n.referrer) : d(t.referrer), n = d(n), _satellite.notify('<In doplugins>Before' + n.eVar109), n.eVar109 == a ? n.eVar109 = _satellite.buildDate + '; Do plugin executed; ' : n.eVar109 += '; Do plugin executed; ', n.linkTrackVars += ',eVar109,', _satellite.notify('BUG:<In doplugins>' + n.eVar109), _satellite.notify('LinkType' + n.linkType), _satellite.notify('LinkType' + typeof n.linkType), n && n.eVar8 && 'undefined' != typeof n.eVar8 && -1 != n.eVar8.indexOf('token') && -1 != e.location.href.indexOf('efinance') && (n.eVar8 = g('token', e.location.search), n.linkTrackVars += ',eVar8,'), n.linkType || (_satellite.notify('setting isPageLoadTracked to true'), _satellite.setVar('isPageLoadTracked', 'true'), 'true' == _satellite.getVar('fireOptInEvent') && (_satellite.notify('setting opt-in event'), n.events ? n.events += ',event199' : n.events = 'event199'), n.pageName === _satellite.getVar('lastCallPageName') && n.account === _satellite.setVar('lastAccount') ? (_satellite.notify('Duplicate Page Load Call'), n.events += ',event247,') : _satellite.notify('not a duplicate Page Load Call'), _satellite.setVar('lastCallPageName', n.pageName), _satellite.setVar('lastAccount', n.pageName)), 'true' != _satellite.getVar('isRegulationAccepted')) {
                                            var r = _satellite.getVar('cookieList');
                                            for (i = 0; i < r.length; i++)
                                                t.cookie = r[i] + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT ;domain=.' + _satellite.getVar('topLevelDomain') + ';path=/';
                                            for (i = 0; i < r.length; i++)
                                                t.cookie = r[i] + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT;path=/';
                                            for (i = 0; i < r.length; i++)
                                                t.cookie = r[i] + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT ;domain=' + e.location.hostname + ';path=/';
                                            _satellite.notify('cookies deleted');
                                        }
                                    }
                                    if ('true' == _satellite.getVar('isRegulationAccepted')) {
                                        n.visitorOptedOut = !1;
                                        var p = function () {
                                                'use strict';
                                                function a() {
                                                    return {
                                                        callbacks: {},
                                                        add: function (e, t) {
                                                            this.callbacks[e] = this.callbacks[e] || [];
                                                            var a = this.callbacks[e].push(t) - 1;
                                                            return function () {
                                                                this.callbacks[e].splice(a, 1);
                                                            };
                                                        },
                                                        execute: function (e, t) {
                                                            if (this.callbacks[e]) {
                                                                t = (t = void 0 === t ? [] : t) instanceof Array ? t : [t];
                                                                try {
                                                                    for (; this.callbacks[e].length;) {
                                                                        var a = this.callbacks[e].shift();
                                                                        'function' == typeof a ? a.apply(null, t) : a instanceof Array && a[1].apply(a[0], t);
                                                                    }
                                                                    delete this.callbacks[e];
                                                                } catch (e) {
                                                                }
                                                            }
                                                        },
                                                        executeAll: function (e, t) {
                                                            (t || e && !y.isObjectEmpty(e)) && Object.keys(this.callbacks).forEach(function (t) {
                                                                var a = void 0 !== e[t] ? e[t] : '';
                                                                this.execute(t, a);
                                                            }, this);
                                                        },
                                                        hasCallbacks: function () {
                                                            return Boolean(Object.keys(this.callbacks).length);
                                                        }
                                                    };
                                                }
                                                function n(e) {
                                                    for (var t = /^\d+$/, a = 0, n = e.length; a < n; a++)
                                                        if (!t.test(e[a]))
                                                            return !1;
                                                    return !0;
                                                }
                                                function i(e, t) {
                                                    for (; e.length < t.length;)
                                                        e.push('0');
                                                    for (; t.length < e.length;)
                                                        t.push('0');
                                                }
                                                function r(e, t) {
                                                    for (var a = 0; a < e.length; a++) {
                                                        var n = parseInt(e[a], 10), i = parseInt(t[a], 10);
                                                        if (n > i)
                                                            return 1;
                                                        if (i > n)
                                                            return -1;
                                                    }
                                                    return 0;
                                                }
                                                function o(e, t) {
                                                    if (e === t)
                                                        return 0;
                                                    var a = e.toString().split('.'), o = t.toString().split('.');
                                                    return n(a.concat(o)) ? (i(a, o), r(a, o)) : NaN;
                                                }
                                                var s = void 0 !== e ? e : 'undefined' != typeof global ? global : 'undefined' != typeof self ? self : {};
                                                Object.assign = Object.assign || function (e) {
                                                    for (var t, a, n = 1; n < arguments.length; ++n)
                                                        for (t in a = arguments[n])
                                                            Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                                                    return e;
                                                };
                                                var l, c, u = {
                                                        MESSAGES: {
                                                            HANDSHAKE: 'HANDSHAKE',
                                                            GETSTATE: 'GETSTATE',
                                                            PARENTSTATE: 'PARENTSTATE'
                                                        },
                                                        STATE_KEYS_MAP: {
                                                            MCMID: 'MCMID',
                                                            MCAID: 'MCAID',
                                                            MCAAMB: 'MCAAMB',
                                                            MCAAMLH: 'MCAAMLH',
                                                            MCOPTOUT: 'MCOPTOUT',
                                                            CUSTOMERIDS: 'CUSTOMERIDS'
                                                        },
                                                        ASYNC_API_MAP: {
                                                            MCMID: 'getMarketingCloudVisitorID',
                                                            MCAID: 'getAnalyticsVisitorID',
                                                            MCAAMB: 'getAudienceManagerBlob',
                                                            MCAAMLH: 'getAudienceManagerLocationHint',
                                                            MCOPTOUT: 'getOptOut'
                                                        },
                                                        SYNC_API_MAP: { CUSTOMERIDS: 'getCustomerIDs' },
                                                        ALL_APIS: {
                                                            MCMID: 'getMarketingCloudVisitorID',
                                                            MCAAMB: 'getAudienceManagerBlob',
                                                            MCAAMLH: 'getAudienceManagerLocationHint',
                                                            MCOPTOUT: 'getOptOut',
                                                            MCAID: 'getAnalyticsVisitorID',
                                                            CUSTOMERIDS: 'getCustomerIDs'
                                                        },
                                                        FIELDGROUP_TO_FIELD: {
                                                            MC: 'MCMID',
                                                            A: 'MCAID',
                                                            AAM: 'MCAAMB'
                                                        },
                                                        FIELDS: {
                                                            MCMID: 'MCMID',
                                                            MCOPTOUT: 'MCOPTOUT',
                                                            MCAID: 'MCAID',
                                                            MCAAMLH: 'MCAAMLH',
                                                            MCAAMB: 'MCAAMB'
                                                        },
                                                        AUTH_STATE: {
                                                            UNKNOWN: 0,
                                                            AUTHENTICATED: 1,
                                                            LOGGED_OUT: 2
                                                        },
                                                        OPT_OUT: { GLOBAL: 'global' }
                                                    }, d = u.STATE_KEYS_MAP, g = function (e) {
                                                        function t() {
                                                        }
                                                        function a(t, a) {
                                                            var n = this;
                                                            return function () {
                                                                var t = e(0, d.MCMID), i = {};
                                                                return i[d.MCMID] = t, n.setStateAndPublish(i), a(t), t;
                                                            };
                                                        }
                                                        this.getMarketingCloudVisitorID = function (e) {
                                                            e = e || t;
                                                            var n = this.findField(d.MCMID, e), i = a.call(this, d.MCMID, e);
                                                            return void 0 !== n ? n : i();
                                                        };
                                                    }, f = u.MESSAGES, p = u.ASYNC_API_MAP, m = u.SYNC_API_MAP, h = function () {
                                                        function e() {
                                                        }
                                                        function t(e, t) {
                                                            var a = this;
                                                            return function () {
                                                                return a.callbackRegistry.add(e, t), a.messageParent(f.GETSTATE), '';
                                                            };
                                                        }
                                                        function a(a) {
                                                            this[p[a]] = function (n) {
                                                                n = n || e;
                                                                var i = this.findField(a, n), r = t.call(this, a, n);
                                                                return void 0 !== i ? i : r();
                                                            };
                                                        }
                                                        function n(t) {
                                                            this[m[t]] = function () {
                                                                return this.findField(t, e) || {};
                                                            };
                                                        }
                                                        Object.keys(p).forEach(a, this), Object.keys(m).forEach(n, this);
                                                    }, v = u.ASYNC_API_MAP, _ = function () {
                                                        Object.keys(v).forEach(function (e) {
                                                            this[v[e]] = function (t) {
                                                                this.callbackRegistry.add(e, t);
                                                            };
                                                        }, this);
                                                    }, y = ((l = (c = { exports: {} }).exports).isObjectEmpty = function (e) {
                                                        return e === Object(e) && 0 === Object.keys(e).length;
                                                    }, l.isValueEmpty = function (e) {
                                                        return '' === e || l.isObjectEmpty(e);
                                                    }, l.getIeVersion = function () {
                                                        if (t.documentMode)
                                                            return t.documentMode;
                                                        for (var e = 7; e > 4; e--) {
                                                            var a = t.createElement('div');
                                                            if (a.innerHTML = '<!--[if IE ' + e + ']><span></span><![endif]-->', a.getElementsByTagName('span').length)
                                                                return a = null, e;
                                                            a = null;
                                                        }
                                                        return null;
                                                    }, l.encodeAndBuildRequest = function (e, t) {
                                                        return e.map(encodeURIComponent).join(t);
                                                    }, void (l.isObject = function (e) {
                                                        return null !== e && 'object' == typeof e && !1 === Array.isArray(e);
                                                    }), c.exports), b = (y.isObjectEmpty, y.isValueEmpty, y.getIeVersion, y.encodeAndBuildRequest, y.isObject, a), C = u.MESSAGES, I = {
                                                        0: 'prefix',
                                                        1: 'orgID',
                                                        2: 'state'
                                                    }, D = function (e, t) {
                                                        this.parse = function (e) {
                                                            try {
                                                                var t = {};
                                                                return e.data.split('|').forEach(function (e, a) {
                                                                    void 0 !== e && (t[I[a]] = 2 !== a ? e : JSON.parse(e));
                                                                }), t;
                                                            } catch (e) {
                                                            }
                                                        }, this.isInvalid = function (a) {
                                                            var n = this.parse(a);
                                                            if (!n || Object.keys(n).length < 2)
                                                                return !0;
                                                            var i = e !== n.orgID, r = !t || a.origin !== t, o = -1 === Object.keys(C).indexOf(n.prefix);
                                                            return i || r || o;
                                                        }, this.send = function (a, n, i) {
                                                            var r = n + '|' + e;
                                                            i && i === Object(i) && (r += '|' + JSON.stringify(i));
                                                            try {
                                                                a.postMessage(r, t);
                                                            } catch (e) {
                                                            }
                                                        };
                                                    }, S = u.MESSAGES, V = function (e, t, a, n) {
                                                        function i(e) {
                                                            Object.assign(m, e);
                                                        }
                                                        function r(e) {
                                                            Object.assign(m.state, e), m.callbackRegistry.executeAll(m.state);
                                                        }
                                                        function o(e) {
                                                            if (!C.isInvalid(e)) {
                                                                y = !1;
                                                                var t = C.parse(e);
                                                                m.setStateAndPublish(t.state);
                                                            }
                                                        }
                                                        function l(e) {
                                                            !y && v && (y = !0, C.send(n, e));
                                                        }
                                                        function c() {
                                                            i(new g(a._generateID)), m.getMarketingCloudVisitorID(), m.callbackRegistry.executeAll(m.state, !0), s.removeEventListener('message', u);
                                                        }
                                                        function u(e) {
                                                            if (!C.isInvalid(e)) {
                                                                var t = C.parse(e);
                                                                y = !1, s.clearTimeout(m._handshakeTimeout), s.removeEventListener('message', u), i(new h(m)), s.addEventListener('message', o), m.setStateAndPublish(t.state), m.callbackRegistry.hasCallbacks() && l(S.GETSTATE);
                                                            }
                                                        }
                                                        function d() {
                                                            v && postMessage ? (s.addEventListener('message', u), l(S.HANDSHAKE), m._handshakeTimeout = setTimeout(c, 250)) : c();
                                                        }
                                                        function f() {
                                                            s.s_c_in || (s.s_c_il = [], s.s_c_in = 0), m._c = 'Visitor', m._il = s.s_c_il, m._in = s.s_c_in, m._il[m._in] = m, s.s_c_in++;
                                                        }
                                                        function p() {
                                                            function e(e) {
                                                                0 !== e.indexOf('_') && 'function' == typeof a[e] && (m[e] = function () {
                                                                });
                                                            }
                                                            Object.keys(a).forEach(e), m.getSupplementalDataID = a.getSupplementalDataID;
                                                        }
                                                        var m = this, v = t.whitelistParentDomain;
                                                        m.state = {}, m.version = a.version, m.marketingCloudOrgID = e, m.cookieDomain = a.cookieDomain || '', m._instanceType = 'child';
                                                        var y = !1, C = new D(e, v);
                                                        m.callbackRegistry = b(), m.init = function () {
                                                            f(), p(), i(new _(m)), d();
                                                        }, m.findField = function (e, t) {
                                                            if (m.state[e])
                                                                return t(m.state[e]), m.state[e];
                                                        }, m.messageParent = l, m.setStateAndPublish = r;
                                                    }, k = u.MESSAGES, w = u.ALL_APIS, T = u.ASYNC_API_MAP, L = u.FIELDGROUP_TO_FIELD, A = function (e, t) {
                                                        function a() {
                                                            var t = {};
                                                            return Object.keys(w).forEach(function (a) {
                                                                var n = w[a], i = e[n]();
                                                                y.isValueEmpty(i) || (t[a] = i);
                                                            }), t;
                                                        }
                                                        function n() {
                                                            var t = [];
                                                            return e._loading && Object.keys(e._loading).forEach(function (a) {
                                                                if (e._loading[a]) {
                                                                    var n = L[a];
                                                                    t.push(n);
                                                                }
                                                            }), t.length ? t : null;
                                                        }
                                                        function i(t) {
                                                            return function a() {
                                                                var i = n();
                                                                if (i) {
                                                                    var r = T[i[0]];
                                                                    e[r](a, !0);
                                                                } else
                                                                    t();
                                                            };
                                                        }
                                                        function r(e, n) {
                                                            var i = a();
                                                            t.send(e, n, i);
                                                        }
                                                        function o(e) {
                                                            l(e), r(e, k.HANDSHAKE);
                                                        }
                                                        function s(e) {
                                                            i(function () {
                                                                r(e, k.PARENTSTATE);
                                                            })();
                                                        }
                                                        function l(a) {
                                                            function n(n) {
                                                                i.call(e, n), t.send(a, k.PARENTSTATE, { CUSTOMERIDS: e.getCustomerIDs() });
                                                            }
                                                            var i = e.setCustomerIDs;
                                                            e.setCustomerIDs = n;
                                                        }
                                                        return function (e) {
                                                            t.isInvalid(e) || (t.parse(e).prefix === k.HANDSHAKE ? o : s)(e.source);
                                                        };
                                                    }, M = function (e, t) {
                                                        function a(e) {
                                                            return function (a) {
                                                                n[e] = a, ++i === r && t(n);
                                                            };
                                                        }
                                                        var n = {}, i = 0, r = Object.keys(e).length;
                                                        Object.keys(e).forEach(function (t) {
                                                            var n = e[t];
                                                            if (n.fn) {
                                                                var i = n.args || [];
                                                                i.unshift(a(t)), n.fn.apply(n.context || null, i);
                                                            }
                                                        });
                                                    }, E = function (e) {
                                                        var t;
                                                        if (!e && s.location && (e = s.location.hostname), t = e)
                                                            if (/^[0-9.]+$/.test(t))
                                                                t = '';
                                                            else {
                                                                var a = ',ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,', n = t.split('.'), i = n.length - 1, r = i - 1;
                                                                if (i > 1 && n[i].length <= 2 && (2 === n[i - 1].length || a.indexOf(',' + n[i] + ',') < 0) && r--, r > 0)
                                                                    for (t = ''; i >= r;)
                                                                        t = n[i] + (t ? '.' : '') + t, i--;
                                                            }
                                                        return t;
                                                    }, P = {
                                                        compare: o,
                                                        isLessThan: function (e, t) {
                                                            return o(e, t) < 0;
                                                        },
                                                        areVersionsDifferent: function (e, t) {
                                                            return 0 !== o(e, t);
                                                        },
                                                        isGreaterThan: function (e, t) {
                                                            return o(e, t) > 0;
                                                        },
                                                        isEqual: function (e, t) {
                                                            return 0 === o(e, t);
                                                        }
                                                    }, O = !!s.postMessage, R = {
                                                        postMessage: function (e, t, a) {
                                                            var n = 1;
                                                            t && (O ? a.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1')) : t && (a.location = t.replace(/#.*$/, '') + '#' + +new Date() + n++ + '&' + e));
                                                        },
                                                        receiveMessage: function (e, t) {
                                                            var a;
                                                            try {
                                                                O && (e && (a = function (a) {
                                                                    if ('string' == typeof t && a.origin !== t || '[object Function]' === Object.prototype.toString.call(t) && !1 === t(a.origin))
                                                                        return !1;
                                                                    e(a);
                                                                }), s.addEventListener ? s[e ? 'addEventListener' : 'removeEventListener']('message', a) : s[e ? 'attachEvent' : 'detachEvent']('onmessage', a));
                                                            } catch (e) {
                                                            }
                                                        }
                                                    }, N = function (e) {
                                                        var t, a, n = '0123456789', i = '', r = '', o = 8, s = 10, l = 10;
                                                        if (1 == e) {
                                                            for (n += 'ABCDEF', t = 0; 16 > t; t++)
                                                                a = Math.floor(Math.random() * o), i += n.substring(a, a + 1), a = Math.floor(Math.random() * o), r += n.substring(a, a + 1), o = 16;
                                                            return i + '-' + r;
                                                        }
                                                        for (t = 0; 19 > t; t++)
                                                            a = Math.floor(Math.random() * s), i += n.substring(a, a + 1), 0 === t && 9 == a ? s = 3 : (1 == t || 2 == t) && 10 != s && 2 > a ? s = 10 : 2 < t && (s = 10), a = Math.floor(Math.random() * l), r += n.substring(a, a + 1), 0 === t && 9 == a ? l = 3 : (1 == t || 2 == t) && 10 != l && 2 > a ? l = 10 : 2 < t && (l = 10);
                                                        return i + r;
                                                    }, x = function (e) {
                                                        const $___old_7f4da7e4b9f896a7 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_bac0306083430402 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                                                        try {
                                                            if ($___old_7f4da7e4b9f896a7)
                                                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_9748b5f6e714326d.XMLHttpRequest));
                                                            if ($___old_bac0306083430402)
                                                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_9748b5f6e714326d.XMLHttpRequest));
                                                            return function () {
                                                                return {
                                                                    corsMetadata: (t = 'none', a = !0, 'undefined' != typeof XMLHttpRequest && XMLHttpRequest === Object(XMLHttpRequest) && ('withCredentials' in new XMLHttpRequest() ? t = 'XMLHttpRequest' : 'undefined' != typeof XDomainRequest && XDomainRequest === Object(XDomainRequest) && (a = !1), Object.prototype.toString.call(s.HTMLElement).indexOf('Constructor') > 0 && (a = !1)), {
                                                                        corsType: t,
                                                                        corsCookiesEnabled: a
                                                                    }),
                                                                    getCORSInstance: function () {
                                                                        const $___old_af35288bc087b068 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_24743434dfc11630 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                                                                        try {
                                                                            if ($___old_af35288bc087b068)
                                                                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_9748b5f6e714326d.XMLHttpRequest));
                                                                            if ($___old_24743434dfc11630)
                                                                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_9748b5f6e714326d.XMLHttpRequest));
                                                                            return function () {
                                                                                return 'none' === this.corsMetadata.corsType ? null : new s[this.corsMetadata.corsType]();
                                                                            }.apply(this, arguments);
                                                                        } finally {
                                                                            if ($___old_af35288bc087b068)
                                                                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_af35288bc087b068));
                                                                            if ($___old_24743434dfc11630)
                                                                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_24743434dfc11630));
                                                                        }
                                                                    },
                                                                    fireCORS: function (t, a) {
                                                                        function n(e) {
                                                                            var a;
                                                                            try {
                                                                                if ((a = JSON.parse(e)) !== Object(a))
                                                                                    return void i.handleCORSError(t, null, 'Response is not JSON');
                                                                            } catch (e) {
                                                                                return void i.handleCORSError(t, e, 'Error parsing response as JSON');
                                                                            }
                                                                            try {
                                                                                for (var n = t.callback, r = s, o = 0; o < n.length; o++)
                                                                                    r = r[n[o]];
                                                                                r(a);
                                                                            } catch (e) {
                                                                                i.handleCORSError(t, e, 'Error forming callback function');
                                                                            }
                                                                        }
                                                                        var i = this;
                                                                        a && (t.loadErrorHandler = a);
                                                                        try {
                                                                            var r = this.getCORSInstance();
                                                                            r.open('get', t.corsUrl + '&ts=' + new Date().getTime(), !0), 'XMLHttpRequest' === this.corsMetadata.corsType && (r.withCredentials = !0, r.timeout = e.loadTimeout, r.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'), r.onreadystatechange = function () {
                                                                                4 === this.readyState && 200 === this.status && n(this.responseText);
                                                                            }), r.onerror = function (e) {
                                                                                i.handleCORSError(t, e, 'onerror');
                                                                            }, r.ontimeout = function (e) {
                                                                                i.handleCORSError(t, e, 'ontimeout');
                                                                            }, r.send(), e._log.requests.push(t.corsUrl);
                                                                        } catch (e) {
                                                                            this.handleCORSError(t, e, 'try-catch');
                                                                        }
                                                                    },
                                                                    handleCORSError: function (t, a, n) {
                                                                        e.CORSErrors.push({
                                                                            corsData: t,
                                                                            error: a,
                                                                            description: n
                                                                        }), t.loadErrorHandler && ('ontimeout' === n ? t.loadErrorHandler(!0) : t.loadErrorHandler(!1));
                                                                    }
                                                                };
                                                                var t, a;
                                                            }.apply(this, arguments);
                                                        } finally {
                                                            if ($___old_7f4da7e4b9f896a7)
                                                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_7f4da7e4b9f896a7));
                                                            if ($___old_bac0306083430402)
                                                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_bac0306083430402));
                                                        }
                                                    }, U = {
                                                        POST_MESSAGE_ENABLED: !!s.postMessage,
                                                        DAYS_BETWEEN_SYNC_ID_CALLS: 1,
                                                        MILLIS_PER_DAY: 86400000,
                                                        ADOBE_MC: 'adobe_mc',
                                                        ADOBE_MC_SDID: 'adobe_mc_sdid',
                                                        VALID_VISITOR_ID_REGEX: /^[0-9a-fA-F\-]+$/,
                                                        ADOBE_MC_TTL_IN_MIN: 5,
                                                        VERSION_REGEX: /vVersion\|((\d+\.)?(\d+\.)?(\*|\d+))(?=$|\|)/
                                                    }, F = function (e, t) {
                                                        var a = s.document;
                                                        return {
                                                            THROTTLE_START: 30000,
                                                            MAX_SYNCS_LENGTH: 649,
                                                            throttleTimerSet: !1,
                                                            id: null,
                                                            onPagePixels: [],
                                                            iframeHost: null,
                                                            getIframeHost: function (e) {
                                                                if ('string' == typeof e) {
                                                                    var t = e.split('/');
                                                                    return t[0] + '//' + t[2];
                                                                }
                                                            },
                                                            subdomain: null,
                                                            url: null,
                                                            getUrl: function () {
                                                                var t, n = 'http://fast.', i = '?d_nsid=' + e.idSyncContainerID + '#' + encodeURIComponent(a.location.origin);
                                                                return this.subdomain || (this.subdomain = 'nosubdomainreturned'), e.loadSSL && (n = e.idSyncSSLUseAkamai ? 'https://fast.' : 'https://'), t = n + this.subdomain + '.demdex.net/dest5.html' + i, this.iframeHost = this.getIframeHost(t), this.id = 'destination_publishing_iframe_' + this.subdomain + '_' + e.idSyncContainerID, t;
                                                            },
                                                            checkDPIframeSrc: function () {
                                                                var t = '?d_nsid=' + e.idSyncContainerID + '#' + encodeURIComponent(a.location.href);
                                                                'string' == typeof e.dpIframeSrc && e.dpIframeSrc.length && (this.id = 'destination_publishing_iframe_' + (e._subdomain || this.subdomain || new Date().getTime()) + '_' + e.idSyncContainerID, this.iframeHost = this.getIframeHost(e.dpIframeSrc), this.url = e.dpIframeSrc + t);
                                                            },
                                                            idCallNotProcesssed: null,
                                                            doAttachIframe: !1,
                                                            startedAttachingIframe: !1,
                                                            iframeHasLoaded: null,
                                                            iframeIdChanged: null,
                                                            newIframeCreated: null,
                                                            originalIframeHasLoadedAlready: null,
                                                            iframeLoadedCallbacks: [],
                                                            regionChanged: !1,
                                                            timesRegionChanged: 0,
                                                            sendingMessages: !1,
                                                            messages: [],
                                                            messagesPosted: [],
                                                            messagesReceived: [],
                                                            messageSendingInterval: U.POST_MESSAGE_ENABLED ? null : 100,
                                                            jsonForComparison: [],
                                                            jsonDuplicates: [],
                                                            jsonWaiting: [],
                                                            jsonProcessed: [],
                                                            canSetThirdPartyCookies: !0,
                                                            receivedThirdPartyCookiesNotification: !1,
                                                            readyToAttachIframePreliminary: function () {
                                                                return !(e.idSyncDisableSyncs || e.disableIdSyncs || e.idSyncDisable3rdPartySyncing || e.disableThirdPartyCookies || e.disableThirdPartyCalls);
                                                            },
                                                            readyToAttachIframe: function () {
                                                                return this.readyToAttachIframePreliminary() && (this.doAttachIframe || e._doAttachIframe) && (this.subdomain && 'nosubdomainreturned' !== this.subdomain || e._subdomain) && this.url && !this.startedAttachingIframe;
                                                            },
                                                            attachIframe: function () {
                                                                function e() {
                                                                    (i = a.createElement('iframe')).sandbox = 'allow-scripts allow-same-origin', i.title = 'Adobe ID Syncing iFrame', i.id = n.id, i.name = n.id + '_name', i.style.cssText = 'display: none; width: 0; height: 0;', i.src = n.url, n.newIframeCreated = !0, t(), a.body.appendChild(i);
                                                                }
                                                                function t(e) {
                                                                    i.addEventListener('load', function () {
                                                                        i.className = 'aamIframeLoaded', n.iframeHasLoaded = !0, n.fireIframeLoadedCallbacks(e), n.requestToProcess();
                                                                    });
                                                                }
                                                                this.startedAttachingIframe = !0;
                                                                var n = this, i = a.getElementById(this.id);
                                                                i ? 'IFRAME' !== i.nodeName ? (this.id += '_2', this.iframeIdChanged = !0, e()) : (this.newIframeCreated = !1, 'aamIframeLoaded' !== i.className ? (this.originalIframeHasLoadedAlready = !1, t('The destination publishing iframe already exists from a different library, but hadn\'t loaded yet.')) : (this.originalIframeHasLoadedAlready = !0, this.iframeHasLoaded = !0, this.iframe = i, this.fireIframeLoadedCallbacks('The destination publishing iframe already exists from a different library, and had loaded alresady.'), this.requestToProcess())) : e(), this.iframe = i;
                                                            },
                                                            fireIframeLoadedCallbacks: function (e) {
                                                                this.iframeLoadedCallbacks.forEach(function (t) {
                                                                    'function' == typeof t && t({ message: e || 'The destination publishing iframe was attached and loaded successfully.' });
                                                                }), this.iframeLoadedCallbacks = [];
                                                            },
                                                            requestToProcess: function (t) {
                                                                function a() {
                                                                    i.jsonForComparison.push(t), i.jsonWaiting.push(t), i.processSyncOnPage(t);
                                                                }
                                                                var n, i = this;
                                                                if (t === Object(t) && t.ibs)
                                                                    if (n = JSON.stringify(t.ibs || []), this.jsonForComparison.length) {
                                                                        var r, o, s, l = !1;
                                                                        for (r = 0, o = this.jsonForComparison.length; r < o; r++)
                                                                            if (s = this.jsonForComparison[r], n === JSON.stringify(s.ibs || [])) {
                                                                                l = !0;
                                                                                break;
                                                                            }
                                                                        l ? this.jsonDuplicates.push(t) : a();
                                                                    } else
                                                                        a();
                                                                if ((this.receivedThirdPartyCookiesNotification || !U.POST_MESSAGE_ENABLED || this.iframeHasLoaded) && this.jsonWaiting.length) {
                                                                    var c = this.jsonWaiting.shift();
                                                                    this.process(c), this.requestToProcess();
                                                                }
                                                                e.idSyncDisableSyncs || e.disableIdSyncs || !this.iframeHasLoaded || !this.messages.length || this.sendingMessages || (this.throttleTimerSet || (this.throttleTimerSet = !0, setTimeout(function () {
                                                                    i.messageSendingInterval = U.POST_MESSAGE_ENABLED ? null : 150;
                                                                }, this.THROTTLE_START)), this.sendingMessages = !0, this.sendMessages());
                                                            },
                                                            getRegionAndCheckIfChanged: function (t, a) {
                                                                var n = e._getField('MCAAMLH'), i = t.d_region || t.dcs_region;
                                                                return n ? i && (e._setFieldExpire('MCAAMLH', a), e._setField('MCAAMLH', i), parseInt(n, 10) !== i && (this.regionChanged = !0, this.timesRegionChanged++, e._setField('MCSYNCSOP', ''), e._setField('MCSYNCS', ''), n = i)) : (n = i) && (e._setFieldExpire('MCAAMLH', a), e._setField('MCAAMLH', n)), n || (n = ''), n;
                                                            },
                                                            processSyncOnPage: function (e) {
                                                                var t, a, n, i;
                                                                if ((t = e.ibs) && t instanceof Array && (a = t.length))
                                                                    for (n = 0; n < a; n++)
                                                                        (i = t[n]).syncOnPage && this.checkFirstPartyCookie(i, '', 'syncOnPage');
                                                            },
                                                            process: function (e) {
                                                                var t, a, n, i, r, o = encodeURIComponent, s = !1;
                                                                if ((t = e.ibs) && t instanceof Array && (a = t.length))
                                                                    for (s = !0, n = 0; n < a; n++)
                                                                        i = t[n], r = [
                                                                            o('ibs'),
                                                                            o(i.id || ''),
                                                                            o(i.tag || ''),
                                                                            y.encodeAndBuildRequest(i.url || [], ','),
                                                                            o(i.ttl || ''),
                                                                            '',
                                                                            '',
                                                                            i.fireURLSync ? 'true' : 'false'
                                                                        ], i.syncOnPage || (this.canSetThirdPartyCookies ? this.addMessage(r.join('|')) : i.fireURLSync && this.checkFirstPartyCookie(i, r.join('|')));
                                                                s && this.jsonProcessed.push(e);
                                                            },
                                                            checkFirstPartyCookie: function (t, a, n) {
                                                                var i = 'syncOnPage' === n, r = i ? 'MCSYNCSOP' : 'MCSYNCS';
                                                                e._readVisitor();
                                                                var o, s, l = e._getField(r), c = !1, u = !1, d = Math.ceil(new Date().getTime() / U.MILLIS_PER_DAY);
                                                                l ? (o = l.split('*'), c = (s = this.pruneSyncData(o, t.id, d)).dataPresent, u = s.dataValid, c && u || this.fireSync(i, t, a, o, r, d)) : (o = [], this.fireSync(i, t, a, o, r, d));
                                                            },
                                                            pruneSyncData: function (e, t, a) {
                                                                var n, i, r, o = !1, s = !1;
                                                                for (i = 0; i < e.length; i++)
                                                                    n = e[i], r = parseInt(n.split('-')[1], 10), n.match('^' + t + '-') ? (o = !0, a < r ? s = !0 : (e.splice(i, 1), i--)) : a >= r && (e.splice(i, 1), i--);
                                                                return {
                                                                    dataPresent: o,
                                                                    dataValid: s
                                                                };
                                                            },
                                                            manageSyncsSize: function (e) {
                                                                if (e.join('*').length > this.MAX_SYNCS_LENGTH)
                                                                    for (e.sort(function (e, t) {
                                                                            return parseInt(e.split('-')[1], 10) - parseInt(t.split('-')[1], 10);
                                                                        }); e.join('*').length > this.MAX_SYNCS_LENGTH;)
                                                                        e.shift();
                                                            },
                                                            fireSync: function (t, a, n, i, r, o) {
                                                                var s = this;
                                                                if (t) {
                                                                    if ('img' === a.tag) {
                                                                        var l, c, u, d, g = a.url, f = e.loadSSL ? 'https:' : 'http:';
                                                                        for (l = 0, c = g.length; l < c; l++) {
                                                                            u = g[l], d = /^\/\//.test(u);
                                                                            var p = new Image();
                                                                            p.addEventListener('load', function (t, a, n, i) {
                                                                                return function () {
                                                                                    s.onPagePixels[t] = null, e._readVisitor();
                                                                                    var o, l, c, u, d = e._getField(r), g = [];
                                                                                    if (d)
                                                                                        for (l = 0, c = (o = d.split('*')).length; l < c; l++)
                                                                                            (u = o[l]).match('^' + a.id + '-') || g.push(u);
                                                                                    s.setSyncTrackingData(g, a, n, i);
                                                                                };
                                                                            }(this.onPagePixels.length, a, r, o)), p.src = (d ? f : '') + u, this.onPagePixels.push(p);
                                                                        }
                                                                    }
                                                                } else
                                                                    this.addMessage(n), this.setSyncTrackingData(i, a, r, o);
                                                            },
                                                            addMessage: function (t) {
                                                                var a = encodeURIComponent(e._enableErrorReporting ? '---destpub-debug---' : '---destpub---');
                                                                this.messages.push((U.POST_MESSAGE_ENABLED ? '' : a) + t);
                                                            },
                                                            setSyncTrackingData: function (t, a, n, i) {
                                                                t.push(a.id + '-' + (i + Math.ceil(a.ttl / 60 / 24))), this.manageSyncsSize(t), e._setField(n, t.join('*'));
                                                            },
                                                            sendMessages: function () {
                                                                var e, t = this, a = '', n = encodeURIComponent;
                                                                this.regionChanged && (a = n('---destpub-clear-dextp---'), this.regionChanged = !1), this.messages.length ? U.POST_MESSAGE_ENABLED ? (e = a + n('---destpub-combined---') + this.messages.join('%01'), this.postMessage(e), this.messages = [], this.sendingMessages = !1) : (e = this.messages.shift(), this.postMessage(a + e), setTimeout(function () {
                                                                    t.sendMessages();
                                                                }, this.messageSendingInterval)) : this.sendingMessages = !1;
                                                            },
                                                            postMessage: function (e) {
                                                                R.postMessage(e, this.url, this.iframe.contentWindow), this.messagesPosted.push(e);
                                                            },
                                                            receiveMessage: function (e) {
                                                                var t, a = /^---destpub-to-parent---/;
                                                                'string' == typeof e && a.test(e) && ('canSetThirdPartyCookies' === (t = e.replace(a, '').split('|'))[0] && (this.canSetThirdPartyCookies = 'true' === t[1], this.receivedThirdPartyCookiesNotification = !0, this.requestToProcess()), this.messagesReceived.push(e));
                                                            },
                                                            processIDCallData: function (n) {
                                                                (null == this.url || n.subdomain && 'nosubdomainreturned' === this.subdomain) && ('string' == typeof e._subdomain && e._subdomain.length ? this.subdomain = e._subdomain : this.subdomain = n.subdomain || '', this.url = this.getUrl()), n.ibs instanceof Array && n.ibs.length && (this.doAttachIframe = !0), this.readyToAttachIframe() && (e.idSyncAttachIframeOnWindowLoad ? (t.windowLoaded || 'complete' === a.readyState || 'loaded' === a.readyState) && this.attachIframe() : this.attachIframeASAP()), 'function' == typeof e.idSyncIDCallResult ? e.idSyncIDCallResult(n) : this.requestToProcess(n), 'function' == typeof e.idSyncAfterIDCallResult && e.idSyncAfterIDCallResult(n);
                                                            },
                                                            canMakeSyncIDCall: function (t, a) {
                                                                return e._forceSyncIDCall || !t || a - t > U.DAYS_BETWEEN_SYNC_ID_CALLS;
                                                            },
                                                            attachIframeASAP: function () {
                                                                function e() {
                                                                    t.startedAttachingIframe || (a.body ? t.attachIframe() : setTimeout(e, 30));
                                                                }
                                                                var t = this;
                                                                e();
                                                            }
                                                        };
                                                    }, j = {
                                                        audienceManagerServer: {},
                                                        audienceManagerServerSecure: {},
                                                        cookieDomain: {},
                                                        cookieLifetime: {},
                                                        cookieName: {},
                                                        disableThirdPartyCalls: {},
                                                        idSyncAfterIDCallResult: {},
                                                        idSyncAttachIframeOnWindowLoad: {},
                                                        idSyncContainerID: {},
                                                        idSyncDisable3rdPartySyncing: {},
                                                        disableThirdPartyCookies: {},
                                                        idSyncDisableSyncs: {},
                                                        disableIdSyncs: {},
                                                        idSyncIDCallResult: {},
                                                        idSyncSSLUseAkamai: {},
                                                        isCoopSafe: {},
                                                        loadSSL: {},
                                                        loadTimeout: {},
                                                        marketingCloudServer: {},
                                                        marketingCloudServerSecure: {},
                                                        overwriteCrossDomainMCIDAndAID: {},
                                                        resetBeforeVersion: {},
                                                        sdidParamExpiry: {},
                                                        serverState: {},
                                                        sessionCookieName: {},
                                                        secureCookie: {},
                                                        takeTimeoutMetrics: {},
                                                        trackingServer: {},
                                                        trackingServerSecure: {},
                                                        whitelistIframeDomains: {},
                                                        whitelistParentDomain: {}
                                                    }, B = {
                                                        getConfigNames: function () {
                                                            return Object.keys(j);
                                                        },
                                                        getConfigs: function () {
                                                            return j;
                                                        }
                                                    }, H = function (e, a, n) {
                                                        function i(e) {
                                                            var t = e;
                                                            return function (e) {
                                                                var a = e || g.location.href;
                                                                try {
                                                                    var n = d._extractParamFromUri(a, t);
                                                                    if (n)
                                                                        return w.parsePipeDelimetedKeyValues(n);
                                                                } catch (e) {
                                                                }
                                                            };
                                                        }
                                                        function r(e) {
                                                            function t(e, t) {
                                                                e && e.match(U.VALID_VISITOR_ID_REGEX) && t(e);
                                                            }
                                                            t(e[h], d.setMarketingCloudVisitorID), d._setFieldExpire(I, -1), t(e[b], d.setAnalyticsVisitorID);
                                                        }
                                                        function o(e) {
                                                            e = e || {}, d._supplementalDataIDCurrent = e.supplementalDataIDCurrent || '', d._supplementalDataIDCurrentConsumed = e.supplementalDataIDCurrentConsumed || {}, d._supplementalDataIDLast = e.supplementalDataIDLast || '', d._supplementalDataIDLastConsumed = e.supplementalDataIDLastConsumed || {};
                                                        }
                                                        function l(e) {
                                                            function t(e, t, a) {
                                                                return (a = a ? a += '|' : a) + (e + '=') + encodeURIComponent(t);
                                                            }
                                                            function a(e, a) {
                                                                var n = a[0], i = a[1];
                                                                return null != i && i !== S && (e = t(n, i, e)), e;
                                                            }
                                                            var n, i = e.reduce(a, '');
                                                            return (n = (n = i) ? n += '|' : n) + 'TS=' + w.getTimestampInSeconds();
                                                        }
                                                        function c(e) {
                                                            var t = e.minutesToLive, a = '';
                                                            return (d.idSyncDisableSyncs || d.disableIdSyncs) && (a = a || 'Error: id syncs have been disabled'), 'string' == typeof e.dpid && e.dpid.length || (a = a || 'Error: config.dpid is empty'), 'string' == typeof e.url && e.url.length || (a = a || 'Error: config.url is empty'), void 0 === t ? t = 20160 : (t = parseInt(t, 10), (isNaN(t) || t <= 0) && (a = a || 'Error: config.minutesToLive needs to be a positive number')), {
                                                                error: a,
                                                                ttl: t
                                                            };
                                                        }
                                                        if (!n || n.split('').reverse().join('') !== e)
                                                            throw new Error('Please use `Visitor.getInstance` to instantiate Visitor.');
                                                        var d = this;
                                                        d.version = '3.3.0';
                                                        var g = s, f = g.Visitor;
                                                        f.version = d.version, f.AuthState = u.AUTH_STATE, f.OptOut = u.OPT_OUT, g.s_c_in || (g.s_c_il = [], g.s_c_in = 0), d._c = 'Visitor', d._il = g.s_c_il, d._in = g.s_c_in, d._il[d._in] = d, g.s_c_in++, d._instanceType = 'regular', d._log = { requests: [] }, d.marketingCloudOrgID = e, d.cookieName = 'AMCV_' + e, d.sessionCookieName = 'AMCVS_' + e, d.cookieDomain = E(), d.cookieDomain === g.location.hostname && (d.cookieDomain = ''), d.loadSSL = g.location.protocol.toLowerCase().indexOf('https') >= 0, d.loadTimeout = 30000, d.CORSErrors = [], d.marketingCloudServer = d.audienceManagerServer = 'dpm.demdex.net', d.sdidParamExpiry = 30;
                                                        var p = g.document, m = null, h = 'MCMID', v = 'MCIDTS', _ = 'A', b = 'MCAID', C = 'AAM', I = 'MCAAMB', S = 'NONE', V = function (e) {
                                                                return !Object.prototype[e];
                                                            }, k = x(d);
                                                        d.FIELDS = u.FIELDS, d.cookieRead = function (e) {
                                                            e = encodeURIComponent(e);
                                                            var t = (';' + p.cookie).split(' ').join(';'), a = t.indexOf(';' + e + '='), n = a < 0 ? a : t.indexOf(';', a + 1);
                                                            return a < 0 ? '' : decodeURIComponent(t.substring(a + 2 + e.length, n < 0 ? t.length : n));
                                                        }, d.cookieWrite = function (e, t, a) {
                                                            var n, i = d.cookieLifetime, r = '';
                                                            if (t = '' + t, i = i ? ('' + i).toUpperCase() : '', a && 'SESSION' !== i && 'NONE' !== i) {
                                                                if (n = '' !== t ? parseInt(i || 0, 10) : -60)
                                                                    (a = new Date()).setTime(a.getTime() + 1000 * n);
                                                                else if (1 === a) {
                                                                    var o = (a = new Date()).getYear();
                                                                    a.setYear(o + 2 + (o < 1900 ? 1900 : 0));
                                                                }
                                                            } else
                                                                a = 0;
                                                            return e && 'NONE' !== i ? (d.configs && d.configs.secureCookie && 'https:' === location.protocol && (r = 'Secure'), p.cookie = encodeURIComponent(e) + '=' + encodeURIComponent(t) + '; path=/;' + (a ? ' expires=' + a.toGMTString() + ';' : '') + (d.cookieDomain ? ' domain=' + d.cookieDomain + ';' : '') + r, d.cookieRead(e) === t) : 0;
                                                        }, d.resetState = function (e) {
                                                            e ? d._mergeServerState(e) : o();
                                                        }, d._isAllowedDone = !1, d._isAllowedFlag = !1, d.isAllowed = function () {
                                                            return d._isAllowedDone || (d._isAllowedDone = !0, (d.cookieRead(d.cookieName) || d.cookieWrite(d.cookieName, 'T', 1)) && (d._isAllowedFlag = !0)), d._isAllowedFlag;
                                                        }, d.setMarketingCloudVisitorID = function (e) {
                                                            d._setMarketingCloudFields(e);
                                                        }, d._use1stPartyMarketingCloudServer = !1, d.getMarketingCloudVisitorID = function (e, t) {
                                                            if (d.isAllowed()) {
                                                                d.marketingCloudServer && d.marketingCloudServer.indexOf('.demdex.net') < 0 && (d._use1stPartyMarketingCloudServer = !0);
                                                                var a = d._getAudienceManagerURLData('_setMarketingCloudFields'), n = a.url;
                                                                return d._getRemoteField(h, n, e, t, a);
                                                            }
                                                            return '';
                                                        }, d.getVisitorValues = function (e, t) {
                                                            var a = {
                                                                    MCMID: {
                                                                        fn: d.getMarketingCloudVisitorID,
                                                                        args: [!0],
                                                                        context: d
                                                                    },
                                                                    MCOPTOUT: {
                                                                        fn: d.isOptedOut,
                                                                        args: [
                                                                            void 0,
                                                                            !0
                                                                        ],
                                                                        context: d
                                                                    },
                                                                    MCAID: {
                                                                        fn: d.getAnalyticsVisitorID,
                                                                        args: [!0],
                                                                        context: d
                                                                    },
                                                                    MCAAMLH: {
                                                                        fn: d.getAudienceManagerLocationHint,
                                                                        args: [!0],
                                                                        context: d
                                                                    },
                                                                    MCAAMB: {
                                                                        fn: d.getAudienceManagerBlob,
                                                                        args: [!0],
                                                                        context: d
                                                                    }
                                                                }, n = t && t.length ? w.pluck(a, t) : a;
                                                            M(n, e);
                                                        }, d._currentCustomerIDs = {}, d._customerIDsHashChanged = !1, d._newCustomerIDsHash = '', d.setCustomerIDs = function (e) {
                                                            function t() {
                                                                d._customerIDsHashChanged = !1;
                                                            }
                                                            if (d.isAllowed() && e) {
                                                                if (!y.isObject(e) || y.isObjectEmpty(e))
                                                                    return !1;
                                                                var a, n;
                                                                for (a in (d._readVisitor(), e))
                                                                    if (V(a) && (n = e[a]))
                                                                        if ('object' == typeof n) {
                                                                            var i = {};
                                                                            n.id && (i.id = n.id), null != n.authState && (i.authState = n.authState), d._currentCustomerIDs[a] = i;
                                                                        } else
                                                                            d._currentCustomerIDs[a] = { id: n };
                                                                var r = d.getCustomerIDs(), o = d._getField('MCCIDH'), s = '';
                                                                for (a in (o || (o = 0), r))
                                                                    V(a) && (s += (s ? '|' : '') + a + '|' + ((n = r[a]).id ? n.id : '') + (n.authState ? n.authState : ''));
                                                                d._newCustomerIDsHash = String(d._hash(s)), d._newCustomerIDsHash !== o && (d._customerIDsHashChanged = !0, d._mapCustomerIDs(t));
                                                            }
                                                        }, d.getCustomerIDs = function () {
                                                            d._readVisitor();
                                                            var e, t, a = {};
                                                            for (e in d._currentCustomerIDs)
                                                                V(e) && (t = d._currentCustomerIDs[e], a[e] || (a[e] = {}), t.id && (a[e].id = t.id), null != t.authState ? a[e].authState = t.authState : a[e].authState = f.AuthState.UNKNOWN);
                                                            return a;
                                                        }, d.setAnalyticsVisitorID = function (e) {
                                                            d._setAnalyticsFields(e);
                                                        }, d.getAnalyticsVisitorID = function (e, t, a) {
                                                            if (!w.isTrackingServerPopulated() && !a)
                                                                return d._callCallback(e, ['']), '';
                                                            if (d.isAllowed()) {
                                                                var n = '';
                                                                if (a || (n = d.getMarketingCloudVisitorID(function () {
                                                                        d.getAnalyticsVisitorID(e, !0);
                                                                    })), n || a) {
                                                                    var i = a ? d.marketingCloudServer : d.trackingServer, r = '';
                                                                    d.loadSSL && (a ? d.marketingCloudServerSecure && (i = d.marketingCloudServerSecure) : d.trackingServerSecure && (i = d.trackingServerSecure));
                                                                    var o = {};
                                                                    if (i) {
                                                                        var s = 'http' + (d.loadSSL ? 's' : '') + '://' + i + '/id', l = 'd_visid_ver=' + d.version + '&mcorgid=' + encodeURIComponent(d.marketingCloudOrgID) + (n ? '&mid=' + encodeURIComponent(n) : '') + (d.idSyncDisable3rdPartySyncing || d.disableThirdPartyCookies ? '&d_coppa=true' : ''), c = [
                                                                                's_c_il',
                                                                                d._in,
                                                                                '_set' + (a ? 'MarketingCloud' : 'Analytics') + 'Fields'
                                                                            ];
                                                                        r = s + '?' + l + '&callback=s_c_il%5B' + d._in + '%5D._set' + (a ? 'MarketingCloud' : 'Analytics') + 'Fields', o.corsUrl = s + '?' + l, o.callback = c;
                                                                    }
                                                                    return o.url = r, d._getRemoteField(a ? h : b, r, e, t, o);
                                                                }
                                                            }
                                                            return '';
                                                        }, d.getAudienceManagerLocationHint = function (e, t) {
                                                            if (d.isAllowed() && d.getMarketingCloudVisitorID(function () {
                                                                    d.getAudienceManagerLocationHint(e, !0);
                                                                })) {
                                                                var a = d._getField(b);
                                                                if (!a && w.isTrackingServerPopulated() && (a = d.getAnalyticsVisitorID(function () {
                                                                        d.getAudienceManagerLocationHint(e, !0);
                                                                    })), a || !w.isTrackingServerPopulated()) {
                                                                    var n = d._getAudienceManagerURLData(), i = n.url;
                                                                    return d._getRemoteField('MCAAMLH', i, e, t, n);
                                                                }
                                                            }
                                                            return '';
                                                        }, d.getLocationHint = d.getAudienceManagerLocationHint, d.getAudienceManagerBlob = function (e, t) {
                                                            if (d.isAllowed() && d.getMarketingCloudVisitorID(function () {
                                                                    d.getAudienceManagerBlob(e, !0);
                                                                })) {
                                                                var a = d._getField(b);
                                                                if (!a && w.isTrackingServerPopulated() && (a = d.getAnalyticsVisitorID(function () {
                                                                        d.getAudienceManagerBlob(e, !0);
                                                                    })), a || !w.isTrackingServerPopulated()) {
                                                                    var n = d._getAudienceManagerURLData(), i = n.url;
                                                                    return d._customerIDsHashChanged && d._setFieldExpire(I, -1), d._getRemoteField(I, i, e, t, n);
                                                                }
                                                            }
                                                            return '';
                                                        }, d._supplementalDataIDCurrent = '', d._supplementalDataIDCurrentConsumed = {}, d._supplementalDataIDLast = '', d._supplementalDataIDLastConsumed = {}, d.getSupplementalDataID = function (e, t) {
                                                            d._supplementalDataIDCurrent || t || (d._supplementalDataIDCurrent = d._generateID(1));
                                                            var a = d._supplementalDataIDCurrent;
                                                            return d._supplementalDataIDLast && !d._supplementalDataIDLastConsumed[e] ? (a = d._supplementalDataIDLast, d._supplementalDataIDLastConsumed[e] = !0) : a && (d._supplementalDataIDCurrentConsumed[e] && (d._supplementalDataIDLast = d._supplementalDataIDCurrent, d._supplementalDataIDLastConsumed = d._supplementalDataIDCurrentConsumed, d._supplementalDataIDCurrent = a = t ? '' : d._generateID(1), d._supplementalDataIDCurrentConsumed = {}), a && (d._supplementalDataIDCurrentConsumed[e] = !0)), a;
                                                        }, d.getOptOut = function (e, t) {
                                                            if (d.isAllowed()) {
                                                                var a = d._getAudienceManagerURLData('_setMarketingCloudFields'), n = a.url;
                                                                return d._getRemoteField('MCOPTOUT', n, e, t, a);
                                                            }
                                                            return '';
                                                        }, d.isOptedOut = function (e, t, a) {
                                                            if (d.isAllowed()) {
                                                                t || (t = f.OptOut.GLOBAL);
                                                                var n = d.getOptOut(function (a) {
                                                                    var n = a === f.OptOut.GLOBAL || a.indexOf(t) >= 0;
                                                                    d._callCallback(e, [n]);
                                                                }, a);
                                                                return n ? n === f.OptOut.GLOBAL || n.indexOf(t) >= 0 : null;
                                                            }
                                                            return !1;
                                                        }, d._fields = null, d._fieldsExpired = null, d._hash = function (e) {
                                                            var t, a = 0;
                                                            if (e)
                                                                for (t = 0; t < e.length; t++)
                                                                    a = (a << 5) - a + e.charCodeAt(t), a &= a;
                                                            return a;
                                                        }, d._generateID = N, d._generateLocalMID = function () {
                                                            var e = d._generateID(0);
                                                            return L.isClientSideMarketingCloudVisitorID = !0, e;
                                                        }, d._callbackList = null, d._callCallback = function (e, t) {
                                                            try {
                                                                'function' == typeof e ? e.apply(g, t) : e[1].apply(e[0], t);
                                                            } catch (e) {
                                                            }
                                                        }, d._registerCallback = function (e, t) {
                                                            t && (null == d._callbackList && (d._callbackList = {}), null == d._callbackList[e] && (d._callbackList[e] = []), d._callbackList[e].push(t));
                                                        }, d._callAllCallbacks = function (e, t) {
                                                            if (null != d._callbackList) {
                                                                var a = d._callbackList[e];
                                                                if (a)
                                                                    for (; a.length > 0;)
                                                                        d._callCallback(a.shift(), t);
                                                            }
                                                        }, d._addQuerystringParam = function (e, t, a, n) {
                                                            var i = encodeURIComponent(t) + '=' + encodeURIComponent(a), r = w.parseHash(e), o = w.hashlessUrl(e);
                                                            if (-1 === o.indexOf('?'))
                                                                return o + '?' + i + r;
                                                            var s = o.split('?'), l = s[0] + '?', c = s[1];
                                                            return l + w.addQueryParamAtLocation(c, i, n) + r;
                                                        }, d._extractParamFromUri = function (e, t) {
                                                            var a = new RegExp('[\\?&#]' + t + '=([^&#]*)').exec(e);
                                                            if (a && a.length)
                                                                return decodeURIComponent(a[1]);
                                                        }, d._parseAdobeMcFromUrl = i(U.ADOBE_MC), d._parseAdobeMcSdidFromUrl = i(U.ADOBE_MC_SDID), d._attemptToPopulateSdidFromUrl = function (t) {
                                                            var a = d._parseAdobeMcSdidFromUrl(t), n = 1000000000;
                                                            a && a.TS && (n = w.getTimestampInSeconds() - a.TS), a && a.SDID && a.MCORGID === e && n < d.sdidParamExpiry && (d._supplementalDataIDCurrent = a.SDID, d._supplementalDataIDCurrentConsumed.SDID_URL_PARAM = !0);
                                                        }, d._attemptToPopulateIdsFromUrl = function () {
                                                            var t = d._parseAdobeMcFromUrl();
                                                            if (t && t.TS) {
                                                                var a = w.getTimestampInSeconds() - t.TS;
                                                                if (Math.floor(a / 60) > U.ADOBE_MC_TTL_IN_MIN || t.MCORGID !== e)
                                                                    return;
                                                                r(t);
                                                            }
                                                        }, d._mergeServerState = function (e) {
                                                            if (e)
                                                                try {
                                                                    if (n = e, (e = w.isObject(n) ? n : JSON.parse(n))[d.marketingCloudOrgID]) {
                                                                        var t = e[d.marketingCloudOrgID];
                                                                        a = t.customerIDs, w.isObject(a) && d.setCustomerIDs(a), o(t.sdid);
                                                                    }
                                                                } catch (e) {
                                                                    throw new Error('`serverState` has an invalid format.');
                                                                }
                                                            var a, n;
                                                        }, d._timeout = null, d._loadData = function (e, t, a, n) {
                                                            t = d._addQuerystringParam(t, 'd_fieldgroup', e, 1), n.url = d._addQuerystringParam(n.url, 'd_fieldgroup', e, 1), n.corsUrl = d._addQuerystringParam(n.corsUrl, 'd_fieldgroup', e, 1), L.fieldGroupObj[e] = !0, n === Object(n) && n.corsUrl && 'XMLHttpRequest' === k.corsMetadata.corsType && k.fireCORS(n, a, e);
                                                        }, d._clearTimeout = function (e) {
                                                            null != d._timeout && d._timeout[e] && (clearTimeout(d._timeout[e]), d._timeout[e] = 0);
                                                        }, d._settingsDigest = 0, d._getSettingsDigest = function () {
                                                            if (!d._settingsDigest) {
                                                                var e = d.version;
                                                                d.audienceManagerServer && (e += '|' + d.audienceManagerServer), d.audienceManagerServerSecure && (e += '|' + d.audienceManagerServerSecure), d._settingsDigest = d._hash(e);
                                                            }
                                                            return d._settingsDigest;
                                                        }, d._readVisitorDone = !1, d._readVisitor = function () {
                                                            if (!d._readVisitorDone) {
                                                                d._readVisitorDone = !0;
                                                                var e, t, a, n, i, r, o = d._getSettingsDigest(), s = !1, l = d.cookieRead(d.cookieName), c = new Date();
                                                                if (null == d._fields && (d._fields = {}), l && 'T' !== l)
                                                                    for ((l = l.split('|'))[0].match(/^[\-0-9]+$/) && (parseInt(l[0], 10) !== o && (s = !0), l.shift()), l.length % 2 == 1 && l.pop(), e = 0; e < l.length; e += 2)
                                                                        a = (t = l[e].split('-'))[0], n = l[e + 1], t.length > 1 ? (i = parseInt(t[1], 10), r = t[1].indexOf('s') > 0) : (i = 0, r = !1), s && ('MCCIDH' === a && (n = ''), i > 0 && (i = c.getTime() / 1000 - 60)), a && n && (d._setField(a, n, 1), i > 0 && (d._fields['expire' + a] = i + (r ? 's' : ''), (c.getTime() >= 1000 * i || r && !d.cookieRead(d.sessionCookieName)) && (d._fieldsExpired || (d._fieldsExpired = {}), d._fieldsExpired[a] = !0)));
                                                                !d._getField(b) && w.isTrackingServerPopulated() && (l = d.cookieRead('s_vi')) && ((l = l.split('|')).length > 1 && l[0].indexOf('v1') >= 0 && ((e = (n = l[1]).indexOf('[')) >= 0 && (n = n.substring(0, e)), n && n.match(U.VALID_VISITOR_ID_REGEX) && d._setField(b, n)));
                                                            }
                                                        }, d._appendVersionTo = function (e) {
                                                            var t = 'vVersion|' + d.version, a = e ? d._getCookieVersion(e) : null;
                                                            return a ? P.areVersionsDifferent(a, d.version) && (e = e.replace(U.VERSION_REGEX, t)) : e += (e ? '|' : '') + t, e;
                                                        }, d._writeVisitor = function () {
                                                            var e, t, a = d._getSettingsDigest();
                                                            for (e in d._fields)
                                                                V(e) && d._fields[e] && 'expire' !== e.substring(0, 6) && (t = d._fields[e], a += (a ? '|' : '') + e + (d._fields['expire' + e] ? '-' + d._fields['expire' + e] : '') + '|' + t);
                                                            a = d._appendVersionTo(a), d.cookieWrite(d.cookieName, a, 1);
                                                        }, d._getField = function (e, t) {
                                                            return null == d._fields || !t && d._fieldsExpired && d._fieldsExpired[e] ? null : d._fields[e];
                                                        }, d._setField = function (e, t, a) {
                                                            null == d._fields && (d._fields = {}), d._fields[e] = t, a || d._writeVisitor();
                                                        }, d._getFieldList = function (e, t) {
                                                            var a = d._getField(e, t);
                                                            return a ? a.split('*') : null;
                                                        }, d._setFieldList = function (e, t, a) {
                                                            d._setField(e, t ? t.join('*') : '', a);
                                                        }, d._getFieldMap = function (e, t) {
                                                            var a = d._getFieldList(e, t);
                                                            if (a) {
                                                                var n, i = {};
                                                                for (n = 0; n < a.length; n += 2)
                                                                    i[a[n]] = a[n + 1];
                                                                return i;
                                                            }
                                                            return null;
                                                        }, d._setFieldMap = function (e, t, a) {
                                                            var n, i = null;
                                                            if (t)
                                                                for (n in (i = [], t))
                                                                    V(n) && (i.push(n), i.push(t[n]));
                                                            d._setFieldList(e, i, a);
                                                        }, d._setFieldExpire = function (e, t, a) {
                                                            var n = new Date();
                                                            n.setTime(n.getTime() + 1000 * t), null == d._fields && (d._fields = {}), d._fields['expire' + e] = Math.floor(n.getTime() / 1000) + (a ? 's' : ''), t < 0 ? (d._fieldsExpired || (d._fieldsExpired = {}), d._fieldsExpired[e] = !0) : d._fieldsExpired && (d._fieldsExpired[e] = !1), a && (d.cookieRead(d.sessionCookieName) || d.cookieWrite(d.sessionCookieName, '1'));
                                                        }, d._findVisitorID = function (e) {
                                                            return e && ('object' == typeof e && (e = e.d_mid ? e.d_mid : e.visitorID ? e.visitorID : e.id ? e.id : e.uuid ? e.uuid : '' + e), e && 'NOTARGET' === (e = e.toUpperCase()) && (e = S), e && (e === S || e.match(U.VALID_VISITOR_ID_REGEX)) || (e = '')), e;
                                                        }, d._setFields = function (e, t) {
                                                            if (d._clearTimeout(e), null != d._loading && (d._loading[e] = !1), L.fieldGroupObj[e] && L.setState(e, !1), 'MC' === e) {
                                                                !0 !== L.isClientSideMarketingCloudVisitorID && (L.isClientSideMarketingCloudVisitorID = !1);
                                                                var a = d._getField(h);
                                                                if (!a || d.overwriteCrossDomainMCIDAndAID) {
                                                                    if (!(a = 'object' == typeof t && t.mid ? t.mid : d._findVisitorID(t))) {
                                                                        if (d._use1stPartyMarketingCloudServer && !d.tried1stPartyMarketingCloudServer)
                                                                            return d.tried1stPartyMarketingCloudServer = !0, void d.getAnalyticsVisitorID(null, !1, !0);
                                                                        a = d._generateLocalMID();
                                                                    }
                                                                    d._setField(h, a);
                                                                }
                                                                a && a !== S || (a = ''), 'object' == typeof t && ((t.d_region || t.dcs_region || t.d_blob || t.blob) && d._setFields(C, t), d._use1stPartyMarketingCloudServer && t.mid && d._setFields(_, { id: t.id })), d._callAllCallbacks(h, [a]);
                                                            }
                                                            if (e === C && 'object' == typeof t) {
                                                                var n = 604800;
                                                                null != t.id_sync_ttl && t.id_sync_ttl && (n = parseInt(t.id_sync_ttl, 10));
                                                                var i = T.getRegionAndCheckIfChanged(t, n);
                                                                d._callAllCallbacks('MCAAMLH', [i]);
                                                                var r = d._getField(I);
                                                                (t.d_blob || t.blob) && ((r = t.d_blob) || (r = t.blob), d._setFieldExpire(I, n), d._setField(I, r)), r || (r = ''), d._callAllCallbacks(I, [r]), !t.error_msg && d._newCustomerIDsHash && d._setField('MCCIDH', d._newCustomerIDsHash);
                                                            }
                                                            if (e === _) {
                                                                var o = d._getField(b);
                                                                o && !d.overwriteCrossDomainMCIDAndAID || ((o = d._findVisitorID(t)) ? o !== S && d._setFieldExpire(I, -1) : o = S, d._setField(b, o)), o && o !== S || (o = ''), d._callAllCallbacks(b, [o]);
                                                            }
                                                            if (d.idSyncDisableSyncs || d.disableIdSyncs)
                                                                T.idCallNotProcesssed = !0;
                                                            else {
                                                                T.idCallNotProcesssed = !1;
                                                                var s = {};
                                                                s.ibs = t.ibs, s.subdomain = t.subdomain, T.processIDCallData(s);
                                                            }
                                                            var l, c;
                                                            t === Object(t) && (d.isAllowed() && (l = d._getField('MCOPTOUT')), l || (l = S, t.d_optout && t.d_optout instanceof Array && (l = t.d_optout.join(',')), c = parseInt(t.d_ottl, 10), isNaN(c) && (c = 7200), d._setFieldExpire('MCOPTOUT', c, !0), d._setField('MCOPTOUT', l)), d._callAllCallbacks('MCOPTOUT', [l]));
                                                        }, d._loading = null, d._getRemoteField = function (e, t, a, n, i) {
                                                            var r, o = '', s = w.isFirstPartyAnalyticsVisitorIDCall(e), l = {
                                                                    MCAAMLH: !0,
                                                                    MCAAMB: !0
                                                                };
                                                            if (d.isAllowed())
                                                                if (d._readVisitor(), !(!(o = d._getField(e, !0 === l[e])) || d._fieldsExpired && d._fieldsExpired[e]) || d.disableThirdPartyCalls && !s)
                                                                    o || (e === h ? (d._registerCallback(e, a), o = d._generateLocalMID(), d.setMarketingCloudVisitorID(o)) : e === b ? (d._registerCallback(e, a), o = '', d.setAnalyticsVisitorID(o)) : (o = '', n = !0));
                                                                else if (e === h || 'MCOPTOUT' === e ? r = 'MC' : 'MCAAMLH' === e || e === I ? r = C : e === b && (r = _), r)
                                                                    return !t || null != d._loading && d._loading[r] || (null == d._loading && (d._loading = {}), d._loading[r] = !0, d._loadData(r, t, function (t) {
                                                                        if (!d._getField(e)) {
                                                                            t && L.setState(r, !0);
                                                                            var a = '';
                                                                            e === h ? a = d._generateLocalMID() : r === C && (a = { error_msg: 'timeout' }), d._setFields(r, a);
                                                                        }
                                                                    }, i)), d._registerCallback(e, a), o || (t || d._setFields(r, { id: S }), '');
                                                            return e !== h && e !== b || o !== S || (o = '', n = !0), a && n && d._callCallback(a, [o]), o;
                                                        }, d._setMarketingCloudFields = function (e) {
                                                            d._readVisitor(), d._setFields('MC', e);
                                                        }, d._mapCustomerIDs = function (e) {
                                                            d.getAudienceManagerBlob(e, !0);
                                                        }, d._setAnalyticsFields = function (e) {
                                                            d._readVisitor(), d._setFields(_, e);
                                                        }, d._setAudienceManagerFields = function (e) {
                                                            d._readVisitor(), d._setFields(C, e);
                                                        }, d._getAudienceManagerURLData = function (e) {
                                                            var t = d.audienceManagerServer, a = '', n = d._getField(h), i = d._getField(I, !0), r = d._getField(b), o = r && r !== S ? '&d_cid_ic=AVID%01' + encodeURIComponent(r) : '';
                                                            if (d.loadSSL && d.audienceManagerServerSecure && (t = d.audienceManagerServerSecure), t) {
                                                                var s, l, c = d.getCustomerIDs();
                                                                if (c)
                                                                    for (s in c)
                                                                        V(s) && (l = c[s], o += '&d_cid_ic=' + encodeURIComponent(s) + '%01' + encodeURIComponent(l.id ? l.id : '') + (l.authState ? '%01' + l.authState : ''));
                                                                e || (e = '_setAudienceManagerFields');
                                                                var u = 'http' + (d.loadSSL ? 's' : '') + '://' + t + '/id', g = 'd_visid_ver=' + d.version + '&d_rtbd=json&d_ver=2' + (!n && d._use1stPartyMarketingCloudServer ? '&d_verify=1' : '') + '&d_orgid=' + encodeURIComponent(d.marketingCloudOrgID) + '&d_nsid=' + (d.idSyncContainerID || 0) + (n ? '&d_mid=' + encodeURIComponent(n) : '') + (d.idSyncDisable3rdPartySyncing || d.disableThirdPartyCookies ? '&d_coppa=true' : '') + (!0 === m ? '&d_coop_safe=1' : !1 === m ? '&d_coop_unsafe=1' : '') + (i ? '&d_blob=' + encodeURIComponent(i) : '') + o, f = [
                                                                        's_c_il',
                                                                        d._in,
                                                                        e
                                                                    ];
                                                                return {
                                                                    url: a = u + '?' + g + '&d_cb=s_c_il%5B' + d._in + '%5D.' + e,
                                                                    corsUrl: u + '?' + g,
                                                                    callback: f
                                                                };
                                                            }
                                                            return { url: a };
                                                        }, d.appendVisitorIDsTo = function (e) {
                                                            try {
                                                                var t = [
                                                                    [
                                                                        h,
                                                                        d._getField(h)
                                                                    ],
                                                                    [
                                                                        b,
                                                                        d._getField(b)
                                                                    ],
                                                                    [
                                                                        'MCORGID',
                                                                        d.marketingCloudOrgID
                                                                    ]
                                                                ];
                                                                return d._addQuerystringParam(e, U.ADOBE_MC, l(t));
                                                            } catch (t) {
                                                                return e;
                                                            }
                                                        }, d.appendSupplementalDataIDTo = function (e, t) {
                                                            if (!(t = t || d.getSupplementalDataID(w.generateRandomString(), !0)))
                                                                return e;
                                                            try {
                                                                var a = l([
                                                                    [
                                                                        'SDID',
                                                                        t
                                                                    ],
                                                                    [
                                                                        'MCORGID',
                                                                        d.marketingCloudOrgID
                                                                    ]
                                                                ]);
                                                                return d._addQuerystringParam(e, U.ADOBE_MC_SDID, a);
                                                            } catch (t) {
                                                                return e;
                                                            }
                                                        };
                                                        var w = {
                                                            parseHash: function (e) {
                                                                var t = e.indexOf('#');
                                                                return t > 0 ? e.substr(t) : '';
                                                            },
                                                            hashlessUrl: function (e) {
                                                                var t = e.indexOf('#');
                                                                return t > 0 ? e.substr(0, t) : e;
                                                            },
                                                            addQueryParamAtLocation: function (e, t, a) {
                                                                var n = e.split('&');
                                                                return a = null != a ? a : n.length, n.splice(a, 0, t), n.join('&');
                                                            },
                                                            isFirstPartyAnalyticsVisitorIDCall: function (e, t, a) {
                                                                return e === b && (t || (t = d.trackingServer), a || (a = d.trackingServerSecure), !('string' != typeof (n = d.loadSSL ? a : t) || !n.length) && n.indexOf('2o7.net') < 0 && n.indexOf('omtrdc.net') < 0);
                                                                var n;
                                                            },
                                                            isObject: function (e) {
                                                                return Boolean(e && e === Object(e));
                                                            },
                                                            removeCookie: function (e) {
                                                                t.cookie = encodeURIComponent(e) + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;' + (d.cookieDomain ? ' domain=' + d.cookieDomain + ';' : '');
                                                            },
                                                            isTrackingServerPopulated: function () {
                                                                return !!d.trackingServer || !!d.trackingServerSecure;
                                                            },
                                                            getTimestampInSeconds: function () {
                                                                return Math.round(new Date().getTime() / 1000);
                                                            },
                                                            parsePipeDelimetedKeyValues: function (e) {
                                                                return e.split('|').reduce(function (e, t) {
                                                                    var a = t.split('=');
                                                                    return e[a[0]] = decodeURIComponent(a[1]), e;
                                                                }, {});
                                                            },
                                                            generateRandomString: function (e) {
                                                                e = e || 5;
                                                                for (var t = '', a = 'abcdefghijklmnopqrstuvwxyz0123456789'; e--;)
                                                                    t += a[Math.floor(Math.random() * a.length)];
                                                                return t;
                                                            },
                                                            parseBoolean: function (e) {
                                                                return 'true' === e || 'false' !== e && null;
                                                            },
                                                            replaceMethodsWithFunction: function (e, t) {
                                                                for (var a in e)
                                                                    e.hasOwnProperty(a) && 'function' == typeof e[a] && (e[a] = t);
                                                                return e;
                                                            },
                                                            pluck: function (e, t) {
                                                                return t.reduce(function (t, a) {
                                                                    return e[a] && (t[a] = e[a]), t;
                                                                }, Object.create(null));
                                                            }
                                                        };
                                                        d._helpers = w;
                                                        var T = F(d, f);
                                                        d._destinationPublishing = T, d.timeoutMetricsLog = [];
                                                        var L = {
                                                            isClientSideMarketingCloudVisitorID: null,
                                                            MCIDCallTimedOut: null,
                                                            AnalyticsIDCallTimedOut: null,
                                                            AAMIDCallTimedOut: null,
                                                            fieldGroupObj: {},
                                                            setState: function (e, t) {
                                                                switch (e) {
                                                                case 'MC':
                                                                    !1 === t ? !0 !== this.MCIDCallTimedOut && (this.MCIDCallTimedOut = !1) : this.MCIDCallTimedOut = t;
                                                                    break;
                                                                case _:
                                                                    !1 === t ? !0 !== this.AnalyticsIDCallTimedOut && (this.AnalyticsIDCallTimedOut = !1) : this.AnalyticsIDCallTimedOut = t;
                                                                    break;
                                                                case C:
                                                                    !1 === t ? !0 !== this.AAMIDCallTimedOut && (this.AAMIDCallTimedOut = !1) : this.AAMIDCallTimedOut = t;
                                                                }
                                                            }
                                                        };
                                                        d.isClientSideMarketingCloudVisitorID = function () {
                                                            return L.isClientSideMarketingCloudVisitorID;
                                                        }, d.MCIDCallTimedOut = function () {
                                                            return L.MCIDCallTimedOut;
                                                        }, d.AnalyticsIDCallTimedOut = function () {
                                                            return L.AnalyticsIDCallTimedOut;
                                                        }, d.AAMIDCallTimedOut = function () {
                                                            return L.AAMIDCallTimedOut;
                                                        }, d.idSyncGetOnPageSyncInfo = function () {
                                                            return d._readVisitor(), d._getField('MCSYNCSOP');
                                                        }, d.idSyncByURL = function (e) {
                                                            var t = c(e || {});
                                                            if (t.error)
                                                                return t.error;
                                                            var a, n, i = e.url, r = encodeURIComponent, o = T;
                                                            return i = i.replace(/^https:/, '').replace(/^http:/, ''), a = y.encodeAndBuildRequest([
                                                                '',
                                                                e.dpid,
                                                                e.dpuuid || ''
                                                            ], ','), n = [
                                                                'ibs',
                                                                r(e.dpid),
                                                                'img',
                                                                r(i),
                                                                t.ttl,
                                                                '',
                                                                a
                                                            ], o.addMessage(n.join('|')), o.requestToProcess(), 'Successfully queued';
                                                        }, d.idSyncByDataSource = function (e) {
                                                            return e === Object(e) && 'string' == typeof e.dpuuid && e.dpuuid.length ? (e.url = '//dpm.demdex.net/ibs:dpid=' + e.dpid + '&dpuuid=' + e.dpuuid, d.idSyncByURL(e)) : 'Error: config or config.dpuuid is empty';
                                                        }, d.publishDestinations = function (e, t, a) {
                                                            if (a = 'function' == typeof a ? a : function () {
                                                                }, 'string' == typeof e && e.length)
                                                                if (t instanceof Array && t.length) {
                                                                    var n = T;
                                                                    if (n.readyToAttachIframePreliminary()) {
                                                                        var i = !1;
                                                                        t.forEach(function (e) {
                                                                            'string' == typeof e && e.length && (n.addMessage(e), i = !0);
                                                                        }), i ? n.iframe ? (a({ message: 'The destination publishing iframe is already attached and loaded.' }), n.requestToProcess()) : !d.subdomain && d._getField(h) ? (n.subdomain = e, n.doAttachIframe = !0, n.url = n.getUrl(), n.readyToAttachIframe() ? (n.iframeLoadedCallbacks.push(function (e) {
                                                                            a({ message: 'Attempted to attach and load the destination publishing iframe through this API call. Result: ' + (e.message || 'no result') });
                                                                        }), n.attachIframe()) : a({ error: 'Encountered a problem in attempting to attach and load the destination publishing iframe through this API call.' })) : n.iframeLoadedCallbacks.push(function (e) {
                                                                            a({ message: 'Attempted to attach and load the destination publishing iframe through normal Visitor API processing. Result: ' + (e.message || 'no result') });
                                                                        }) : a({ error: 'None of the messages are populated strings.' });
                                                                    } else
                                                                        a({ error: 'The destination publishing iframe is disabled in the Visitor library.' });
                                                                } else
                                                                    a({ error: 'messages is not a populated array.' });
                                                            else
                                                                a({ error: 'subdomain is not a populated string.' });
                                                        }, d._getCookieVersion = function (e) {
                                                            e = e || d.cookieRead(d.cookieName);
                                                            var t = U.VERSION_REGEX.exec(e);
                                                            return t && t.length > 1 ? t[1] : null;
                                                        }, d._resetAmcvCookie = function (e) {
                                                            var t = d._getCookieVersion();
                                                            t && !P.isLessThan(t, e) || w.removeCookie(d.cookieName);
                                                        }, d.setAsCoopSafe = function () {
                                                            m = !0;
                                                        }, d.setAsCoopUnsafe = function () {
                                                            m = !1;
                                                        }, d.init = function () {
                                                            !function () {
                                                                if (a && 'object' == typeof a) {
                                                                    for (var e in (d.configs = Object.create(null), a))
                                                                        V(e) && (d[e] = a[e], d.configs[e] = a[e]);
                                                                    d.idSyncContainerID = d.idSyncContainerID || 0, m = 'boolean' == typeof d.isCoopSafe ? d.isCoopSafe : w.parseBoolean(d.isCoopSafe), d.resetBeforeVersion && d._resetAmcvCookie(d.resetBeforeVersion), d._attemptToPopulateIdsFromUrl(), d._attemptToPopulateSdidFromUrl(), d._readVisitor();
                                                                    var t = d._getField(v), n = Math.ceil(new Date().getTime() / U.MILLIS_PER_DAY);
                                                                    d.idSyncDisableSyncs || d.disableIdSyncs || !T.canMakeSyncIDCall(t, n) || (d._setFieldExpire(I, -1), d._setField(v, n)), d.getMarketingCloudVisitorID(), d.getAudienceManagerLocationHint(), d.getAudienceManagerBlob(), d._mergeServerState(d.serverState);
                                                                } else
                                                                    d._attemptToPopulateIdsFromUrl(), d._attemptToPopulateSdidFromUrl();
                                                            }(), function () {
                                                                if (!d.idSyncDisableSyncs && !d.disableIdSyncs) {
                                                                    T.checkDPIframeSrc();
                                                                    var e = function () {
                                                                        var e = T;
                                                                        e.readyToAttachIframe() && e.attachIframe();
                                                                    };
                                                                    g.addEventListener('load', function () {
                                                                        f.windowLoaded = !0, e();
                                                                    });
                                                                    try {
                                                                        R.receiveMessage(function (e) {
                                                                            T.receiveMessage(e.data);
                                                                        }, T.iframeHost);
                                                                    } catch (e) {
                                                                    }
                                                                }
                                                            }(), d.whitelistIframeDomains && U.POST_MESSAGE_ENABLED && (d.whitelistIframeDomains = d.whitelistIframeDomains instanceof Array ? d.whitelistIframeDomains : [d.whitelistIframeDomains], d.whitelistIframeDomains.forEach(function (t) {
                                                                var a = new D(e, t), n = A(d, a);
                                                                R.receiveMessage(n, t);
                                                            }));
                                                        };
                                                    };
                                                return H.getInstance = function (e, t) {
                                                    if (!e)
                                                        throw new Error('Visitor requires Adobe Marketing Cloud Org ID.');
                                                    e.indexOf('@') < 0 && (e += '@AdobeOrg');
                                                    var a = function () {
                                                        var t = s.s_c_il;
                                                        if (t)
                                                            for (var a = 0; a < t.length; a++) {
                                                                var n = t[a];
                                                                if (n && 'Visitor' === n._c && n.marketingCloudOrgID === e)
                                                                    return n;
                                                            }
                                                    }();
                                                    if (a)
                                                        return a;
                                                    var n = e.split('').reverse().join(''), i = new H(e, null, n);
                                                    t === Object(t) && t.cookieDomain && (i.cookieDomain = t.cookieDomain), s.s_c_il.splice(--s.s_c_in, 1);
                                                    var r = y.getIeVersion();
                                                    if ('number' == typeof r && r < 10)
                                                        return i._helpers.replaceMethodsWithFunction(i, function () {
                                                        });
                                                    var o, l = function () {
                                                            try {
                                                                return s.self !== s.parent;
                                                            } catch (e) {
                                                                return !0;
                                                            }
                                                        }() && ((o = i).cookieWrite('TEST_AMCV_COOKIE', 'T', 1), 'T' !== o.cookieRead('TEST_AMCV_COOKIE') || (o._helpers.removeCookie('TEST_AMCV_COOKIE'), 0)) && s.parent ? new V(e, t, i, s.parent) : new H(e, t, n);
                                                    return i = null, l.init(), l;
                                                }, function () {
                                                    function e() {
                                                        H.windowLoaded = !0;
                                                    }
                                                    s.addEventListener ? s.addEventListener('load', e) : s.attachEvent && s.attachEvent('onload', e), H.codeLoadEnd = new Date().getTime();
                                                }(), H.config = B, s.Visitor = H, H;
                                            }(), m = _satellite.getVar('topLevelDomain');
                                        if (void 0 !== m)
                                            var h = Visitor.getInstance('B52D1CFE5330949C0A490D45@AdobeOrg', {
                                                trackingServer: 'bmwag.d3.sc.omtrdc.net',
                                                trackingServerSecure: 'bmwag.d3.sc.omtrdc.net',
                                                disableIdSyncs: !0,
                                                cookieDomain: m
                                            });
                                        else
                                            h = Visitor.getInstance('B52D1CFE5330949C0A490D45@AdobeOrg', {
                                                trackingServer: 'bmwag.d3.sc.omtrdc.net',
                                                trackingServerSecure: 'bmwag.d3.sc.omtrdc.net',
                                                disableIdSyncs: !0
                                            });
                                        n.visitor = h, n.cookieDomainPeriods = '2', n.fpCookieDomainPeriods = '2';
                                        var v = e.location.hostname;
                                        (v.indexOf('.co.uk') > -1 || v.indexOf('.com.cn') > -1 || v.indexOf('efinance.bmwbank.de') > -1 || v.indexOf('shop.online.bmw.co.kr') > -1) && (n.cookieDomainPeriods = '3', n.fpCookieDomainPeriods = '3');
                                        try {
                                            _satellite.containerInfo = {
                                                supportedRegulations: [
                                                    'opt-out',
                                                    'opt-in',
                                                    'soft-opt-in'
                                                ],
                                                isDefaultONSupported: void 0 !== (_satellite.getVar('isDefaultONCached') || _satellite.getVar('isDefaultON')),
                                                isDefaultON: _satellite.getVar('isDefaultONCached') || _satellite.getVar('isDefaultON')
                                            };
                                        } catch (p) {
                                            _satellite.notify('error in continaer info' + p);
                                        }
                                        try {
                                            _satellite.logger = function (e, t, a) {
                                                var n = a || 'color:blue;font-size:12px';
                                                'true' == localStorage.getItem('sdsat_debug') || 'true' == localStorage.getItem('sdsat_stagingLibrary') ? t ? console.log('%cSATELLITE: ' + e, n, t) : console.log('%cSATELLITE: ' + e, n) : console.log('%cSATELLITE: Custom logs are disabled! Enable them by executing- localStorage.setItem("sdsat_debug","true")', n);
                                            }, _satellite.logError = function (e, t) {
                                                _satellite.logger('ERROR: ' + e, t, 'color:red;background:yellow;font-size:15px');
                                            };
                                            var _ = _satellite.getVar('PII_keywords'), y = _satellite.getVar('searchKeys'), b = _satellite.getVar('ignoreKeys');
                                            n.usePlugins = !0, _satellite.notify('BUG:<before doplugins>' + n.usePlugins), n.doPlugins = f;
                                            var C = _satellite.getVar('isRegulationAccepted');
                                            if ('true' !== C)
                                                return _satellite.notify('isRegulationAccepted status: ' + C), !1;
                                            if (n.visitor == a && _satellite.initializeVisitor(), !0 === e.optInClicked) {
                                                _satellite.notify('opt in clicked'), _satellite.setVar('fireOptInEvent', 'true'), 'true' != _satellite.getVar('thirdPartyTagsExecuted') && (_satellite.notify('reintiating pagebottom call'), _satellite.pageBottom());
                                                var I = _satellite.getVar('PLeventListened'), D = _satellite.getVar('isPageLoadTracked'), S = _satellite.getVar('regulationFailed');
                                                return 'true' == I ? 'true' != D || 'true' == S ? (_satellite.notify('isPageLoadTracked is false, custom event dispatched'), e.dispatchEvent(new CustomEvent('osm_pageload_datalayer_ready')), _satellite.setVar('regulationFailed', 'false')) : (_satellite.notify('isPageLoadTracked is true, custom event dispatched'), _satellite.setVar('fireOptInEvent', 'false'), _satellite.track('opt-in')) : (_satellite.notify('PLeventListened is false, triggering pageload Manually.'), _satellite.setVar('fireOptInEvent', 'false'), _satellite.track('opt-in')), e.optInClicked = !1, !1;
                                            }
                                        } catch (p) {
                                            _satellite.notify('Error in custom plugins' + p);
                                        }
                                        return !1;
                                    }
                                    return !1;
                                }, 'undefined' == typeof e.optInClicked)
                                return _satellite.aaCustomizedPageCode();
                        }
                    }
                },
                pageLoadRules: [
                    {
                        name: 'RegisterOnConsentChange',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-58a5984264746d12d60009b6.js' }]
                                    }]
                            }],
                        event: 'pagebottom'
                    },
                    {
                        name: 'Set Third Party Execution Flag',
                        conditions: [function () {
                                return 'true' == _satellite.getVar('isRegulationAccepted') && (_satellite.setVar('thirdPartyTagsExecuted', 'true'), !0);
                            }],
                        event: 'pagebottom'
                    },
                    {
                        name: 'Tag Management Wrapper',
                        trigger: [{
                                command: 'loadBlockingScript',
                                arguments: [{
                                        sequential: !0,
                                        scripts: [
                                            { src: 'satellite-5b51ba4864746d26bf000f17.js' },
                                            { src: 'satellite-5c67bf1464746d2322004439.js' }
                                        ]
                                    }]
                            }],
                        event: 'pagetop'
                    },
                    {
                        name: '[UK/ACN] - AUC \u2013 Value your Mini - form start - Gtag DoubleClick',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5e85d8df64746d7f960002b2.js' }]
                                    }]
                            }],
                        scope: {
                            URI: { include: [/\/value-your-mini/i] },
                            subdomains: { include: [/approvedusedminis.co.uk/i] }
                        },
                        event: 'windowload'
                    },
                    {
                        name: '[UK/ACN] - Adhoc Survey',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5d2dc95764746d0b7600105d.js' }]
                                    }]
                            }],
                        scope: { subdomains: { include: ['www.bmw.co.uk'] } },
                        event: 'pagebottom'
                    },
                    {
                        name: '[UK/ACN] - Discover 3 series - DoubleClick',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5e56537364746d46e4002d1a.js' }]
                                    }]
                            }],
                        scope: {
                            URI: { include: ['/campaigns/3-series-touring-accessories'] },
                            subdomains: { include: ['discover.bmw.co.uk'] }
                        },
                        event: 'pagebottom'
                    },
                    {
                        name: '[UK/ACN] - Discover Multiple - Facebook',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5e57c37764746d600e00061a.js' }]
                                    }]
                            }],
                        scope: { subdomains: { include: ['discover.bmw.co.uk'] } },
                        event: 'pagebottom'
                    },
                    {
                        name: '[UK/ACN] - Discover Multiple - Xandr',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-6008420e64746d5edd000b62.js' }]
                                    }]
                            }],
                        scope: { subdomains: { include: [/discover.bmw.co.uk/i] } },
                        event: 'pagebottom'
                    },
                    {
                        name: '[UK/ACN] - Offers Multiple - Facebook',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5e5ca6ed64746d4f83000197.js' }]
                                    }]
                            }],
                        scope: { subdomains: { include: ['offers.bmw.co.uk'] } },
                        event: 'pagebottom'
                    },
                    {
                        name: '[UK/ACN] - Offers Multiple - Xandr',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5f32a89764746d6252000e49.js' }]
                                    }]
                            }],
                        scope: { subdomains: { include: [/offers.bmw.co.uk/i] } },
                        event: 'pagebottom'
                    },
                    {
                        name: '[UK/ACN] - OnlineVehicle - All Pages - Xaxis',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5f68c3fe64746d599b000eb4.js' }]
                                    }]
                            }],
                        scope: { subdomains: { include: ['onlinevehiclesales.bmw.co.uk'] } },
                        event: 'pagebottom'
                    },
                    {
                        name: '[UK/ACN] - OnlineVehicleSales - Multiple - GtagDC',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5f6c316264746d103000076a.js' }]
                                    }]
                            }],
                        scope: { subdomains: { include: ['onlinevehiclesales.bmw.co.uk'] } },
                        event: 'pagebottom'
                    },
                    {
                        name: '[UK/ACN] - Used Cars - All Pages - Xaxis',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5f68c2ef64746d0cf900082c.js' }]
                                    }]
                            }],
                        scope: { subdomains: { include: ['usedcars.bmw.co.uk'] } },
                        event: 'pagebottom'
                    },
                    {
                        name: '[UK/ACN] - Used Cars - Multiple - Facebook',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5e58f83b64746d10490033fd.js' }]
                                    }]
                            }],
                        scope: { subdomains: { include: ['usedcars.bmw.co.uk'] } },
                        event: 'pagebottom'
                    },
                    {
                        name: '[UK/ACN] Approvedusedminis - Compare page - Gtag DC',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5ea6fc3364746d43f6000a4e.js' }]
                                    }]
                            }],
                        scope: {
                            URI: { include: [/\/compare\//i] },
                            subdomains: { include: [/approvedusedminis.co.uk/i] }
                        },
                        event: 'pagebottom'
                    },
                    {
                        name: '[UK/ACN] Onlinevehiclesales.mini.co.uk - Xaxis',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5fd1f70364746d0caa000040.js' }]
                                    }]
                            }],
                        scope: { subdomains: { include: [/onlinevehiclesales.mini.co.uk/i] } },
                        event: 'pagebottom'
                    },
                    {
                        name: 'performance timing on pageload',
                        trigger: [{
                                command: 'loadBlockingScript',
                                arguments: [{
                                        sequential: !0,
                                        scripts: [{ src: 'satellite-5c4b0a7764746d1a6f003416.js' }]
                                    }]
                            }],
                        event: 'pagetop'
                    },
                    {
                        name: 'removeFunctionalities',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5cac868564746d6f6c000182.js' }]
                                    }]
                            }],
                        event: 'domready'
                    }
                ],
                rules: [
                    {
                        name: '[UK/ACN] - Used Car - Save Car - Facebook',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5e58fc3064746d4b11000698.js' }]
                                    }]
                            }],
                        scope: { subdomains: { include: ['usedcars.bmw.co.uk'] } },
                        selector: 'a',
                        property: { innerText: 'Save this car' },
                        event: 'click',
                        bubbleFireIfParent: !0,
                        bubbleFireIfChildFired: !0,
                        bubbleStop: !1
                    },
                    {
                        name: '[UK/ACN] Approvedusedminis - Result page Save Car - Gtag DC',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5ea7081364746d5be2000aed.js' }]
                                    }]
                            }],
                        scope: {
                            URI: { include: [/\/result\//i] },
                            subdomains: { include: [/approvedusedminis.co.uk/i] }
                        },
                        selector: 'a',
                        property: {
                            'data-tracking-effect': /Save Car/i,
                            'data-tracking-linkid': 'Save Car',
                            innerText: 'Save this car'
                        },
                        event: 'click',
                        bubbleFireIfParent: !0,
                        bubbleFireIfChildFired: !0,
                        bubbleStop: !1
                    },
                    {
                        name: '[UK/ACN] Approvedusedminis - Result page Save Car Star Button - Gtag DC',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5eb154d664746d1774000759.js' }]
                                    }]
                            }],
                        scope: {
                            URI: { include: [/\/result\//i] },
                            subdomains: { include: [/approvedusedminis.co.uk/i] }
                        },
                        selector: 'svg',
                        property: {
                            'data-tracking-linkid': /Compare Now/i,
                            'data-tracking-effect': /Compare Now/i
                        },
                        event: 'click',
                        bubbleFireIfParent: !0,
                        bubbleFireIfChildFired: !0,
                        bubbleStop: !1
                    },
                    {
                        name: '[UK/ACN] Approvedusedminis - Save Car - Gtag DC',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5ea6ffc764746d14e60020cd.js' }]
                                    }]
                            }],
                        scope: {
                            URI: { include: [/\/vehicle\//i] },
                            subdomains: { include: [/approvedusedminis.co.uk/i] }
                        },
                        selector: 'button, svg',
                        property: {
                            'data-tracking-linkid': 'Compare Now',
                            innerText: 'Save this car',
                            'data-tracking-effect': 'Compare Now'
                        },
                        event: 'click',
                        bubbleFireIfParent: !0,
                        bubbleFireIfChildFired: !0,
                        bubbleStop: !1
                    },
                    {
                        name: '[UK/ACN] Offer BMW UK - Xaxis',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5fd0db0064746d447c00030f.js' }]
                                    }]
                            }],
                        scope: {
                            URI: { include: [/\/finance-offers\/result\//i] },
                            subdomains: { include: [/offers.bmw.co.uk/i] }
                        },
                        selector: '#wrap_Inputfield_next > div > div > button',
                        event: 'click',
                        bubbleFireIfParent: !0,
                        bubbleFireIfChildFired: !0,
                        bubbleStop: !1
                    },
                    {
                        name: '[UK/ACN] OnlineVehicleSales - Amend Quote Button - Xaxis',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5f6996e864746d780a001267.js' }]
                                    }]
                            }],
                        scope: { subdomains: { include: ['onlinevehiclesales.bmw.co.uk'] } },
                        selector: 'button.btn.btn--primary.btn-secondary.mini-btn',
                        event: 'click',
                        bubbleFireIfParent: !0,
                        bubbleFireIfChildFired: !0,
                        bubbleStop: !1
                    },
                    {
                        name: '[UK/ACN] OnlineVehicleSales - Amend Quote Pop-Up Button - Xaxis',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5f699eaf64746d275d001cda.js' }]
                                    }]
                            }],
                        scope: { subdomains: { include: ['onlinevehiclesales.bmw.co.uk'] } },
                        selector: 'div.modal__footer *',
                        event: 'click',
                        bubbleFireIfParent: !0,
                        bubbleFireIfChildFired: !0,
                        bubbleStop: !1
                    },
                    {
                        name: '[UK/ACN] UsedCar - Result page Reserve & Buy Button - Xaxis',
                        trigger: [{
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5f698eea64746d4da70005ca.js' }]
                                    }]
                            }],
                        scope: {
                            URI: { include: [/\/result\//i] },
                            subdomains: { include: ['usedcars.bmw.co.uk'] }
                        },
                        selector: 'button',
                        property: {
                            'data-tracking-linkid': 'Details-Reserve & Buy',
                            'data-tracking-action': 'internal click',
                            'data-tracking-effect': 'Reserve & Buy'
                        },
                        event: 'click',
                        bubbleFireIfParent: !0,
                        bubbleFireIfChildFired: !0,
                        bubbleStop: !1
                    }
                ],
                directCallRules: [
                    {
                        name: 'BMW_AG-event',
                        trigger: [{
                                engine: 'sc',
                                command: 'trackLink',
                                arguments: [{
                                        customSetup: function (n, i) {
                                            function r(e) {
                                                for (var t = e.split('/'), a = 0; a < t.length; a++)
                                                    if ('offer' == t[a] && (t[a + 1] = 'offerID'), t[a].indexOf('offerHash') > -1) {
                                                        var n = t[a].split('=');
                                                        n[1] = 'offerID', t[a] = n.join('=');
                                                    }
                                                return t.join('/');
                                            }
                                            try {
                                                i.clearVars(), i.account = _satellite.getVar('adobeRSID_BMW'), i.trackingServer = 'bmwag.d3.sc.omtrdc.net', i.events = 'event988', i.linkTrackVars = '';
                                                var o = _satellite.getVar('dataLayer_page_3.0'), s = _satellite.getVar('dataLayer_product_3.0'), l = _satellite.getVar('dataLayer_event_3.0'), c = _satellite.getVar('dataLayer_component_3.0'), u = _satellite.getVar('contentGroupHierarchy_3.0'), d = _satellite.getVar('clickTracking_3.0'), g = _satellite.getVar('dealer_3.0'), f = _satellite.getVar('nonTechMetaData_3.0'), p = _satellite.getVar('mainProduct_3.0'), m = _satellite.getVar('distributionType_3.0'), h = (n = _satellite.getVar('dataLayer_event_3.0'), _satellite.getVar('techMetaData'));
                                                i.pageName = o.pageInfo.pageName;
                                                try {
                                                    '' != ((s.productInfo || '').productID || '') ? (i.products = ';' + ((s.productInfo || '').productID || '') + ';;;;eVar52=' + p, i.linkTrackVars += 'products,') : _satellite.notify('BMW_AG-event:No product data found');
                                                } catch (x) {
                                                    _satellite.notify(x);
                                                }
                                                '' != u ? (i.eVar1 = u, i.linkTrackVars += 'eVar1,') : _satellite.notify('BMW_AG-event:No values found got ContentHierarchy'), '' != d ? (i.eVar16 = d, i.linkTrackVars += 'eVar16,') : _satellite.notify('BMW_AG-event:No values found got clickTracking'), '' != g ? (i.eVar41 = g, i.linkTrackVars += 'eVar41,') : _satellite.notify('BMW_AG-event:No values found got dealer'), '' != _satellite.getVar('dataLayer_dealer_3.0') ? (i.eVar13 = 'na|' + ((_satellite.getVar('dataLayer_dealer_3.0').dealerInfo || '').dealerID || ''), i.linkTrackVars += 'eVar13,') : _satellite.notify('BMW_AG-event::No values found got dealer'), '' != f ? (i.eVar44 = f, i.linkTrackVars += 'eVar44,') : _satellite.notify('BMW_AG-event:No values found got nonTechMetaData'), '' != h ? (i.eVar45 = h + '~m: BMW_AG-event:', i.linkTrackVars += 'eVar45,') : _satellite.notify('BMW_AG-event::No values found got nonTechMetaData'), '' != p ? (i.eVar51 = p, i.linkTrackVars += 'eVar51,') : _satellite.notify('BMW_AG-event:No values found got product data'), '' != m ? (i.eVar88 = m, i.linkTrackVars += 'eVar88,') : _satellite.notify('BMW_AG-event:No values found got distributionType'), i.eVar63 = e.location.host || '', i.linkTrackVars += 'eVar63,', i.eVar12 = e.location.pathname || '', i.linkTrackVars += 'eVar12,', i.eVar109 = _satellite.buildDate + ';usePlugin:' + i.usePlugins + ';doPlugins:' + typeof i.doPlugins + ';BMW_AG-event:;', i.prop69 = 'Stage II', i.linkTrackVars += 'prop69,';
                                                var v = (l.eventInfo || '').eventName || '';
                                                if ('' != v) {
                                                    var _ = '';
                                                    _ = '~en:' + v;
                                                    var y = (l.eventInfo || '').eventAction || '';
                                                    '' != y && (_ += '~ea:' + y);
                                                    var b = (l.eventInfo || '').eventPoints || '';
                                                    '' != b && (_ += '~ep:' + b);
                                                    var C = (l.eventInfo || '').eventType || (l.eventInfo || '').type || '';
                                                    '' != C && (_ += '~et:' + C);
                                                    var I = (l.eventInfo || '').effect || '';
                                                    '' != I && (_ += '~ee:' + I);
                                                    var D = (l.eventInfo || '').cause || '';
                                                    '' != D && (_ += '~ek:' + D);
                                                    var S = (l.category || '').primaryCategory || '';
                                                    '' != S && (_ += '~ec:' + S);
                                                    var V = (l.category || '').subCategory1 || '';
                                                    '' != V && (_ += '~ex:' + V), i.eVar34 = _, i.linkTrackVars += 'eVar34,';
                                                } else
                                                    _satellite.notify('BMW_AG-event:No values found got event details');
                                                '' != o.pageInfo.destinationURL && o.pageInfo.destinationURL != a ? (i.eVar4 = r(o.pageInfo.destinationURL), i.prop4 = r(o.pageInfo.destinationURL), i.linkTrackVars += 'eVar4,prop4,') : _satellite.notify('BMW_AG-event:No values found got destinationURL'), n != a && (n.eventInfo != a && n.eventInfo.cause.indexOf('error') > -1 ? (i.eVar69 = '', '' != ((n.eventInfo || '').eventName || '') && (i.eVar69 += n.eventInfo.eventName), i.linkTrackVars += 'eVar69,') : i.eVar69 = ''), '' != ((s.attributes || '').configID || '') ? (i.eVar36 = (s.attributes || '').configID || '', i.linkTrackVars += 'eVar36,') : _satellite.notify('BMW_AG-event:No values found got product configID'), '' != ((l.eventInfo || '').timeStamp || '') || '' != (((_satellite.getVar('finalDataLayer').page || '').attributes || '').timestamp || '') ? (i.prop12 = (l.eventInfo || '').timeStamp || ((_satellite.getVar('finalDataLayer').page || '').attributes || '').timestamp || '', i.linkTrackVars += 'prop12,') : _satellite.notify('BMW_AG-event::No values found got event timeStamp'), '' != c.componentInfo.componentName && c.componentInfo.componentName != a ? (i.prop13 = c.componentInfo.componentName || '', i.linkTrackVars += 'prop13,') : _satellite.notify('BMW_AG-event:No values found got componentName'), '' != ((l.category || '').primaryCategory || '') ? (i.prop16 = (l.category || '').primaryCategory || '', i.linkTrackVars += 'prop16,') : _satellite.notify('BMW_AG-event:No values found got event category'), c && c.category && '' != c.category.subCategory2 && c && c.category && c.category.subCategory2 != a || c && c.category && '' != c.category.subCategory02 && c && c.category && c.category.subCategory02 != a ? (i.prop2 = (c && c.category && c.category.subCategory2 ? c.category.subCategory2 : c.category.subCategory02) || '', i.linkTrackVars += 'prop2,') : _satellite.notify('BMW_AG-event:No values found got component category'), c && c.category && '' != c.category.subCategory1 && c && c.category && c.category.subCategory1 != a || c && c.category && '' != c.category.subCategory1 && c && c.category && c.category.subCategory1 != a ? (i.prop3 = (c && c.category && c.category.subCategory1 ? c.category.subCategory1 : c.category.subCategory01) || '', i.linkTrackVars += 'prop3,') : _satellite.notify('BMW_AG-event:No values found got ContentHierarchy'), '' != _satellite.getVar('userInformation_NSC') ? (i.eVar14 = _satellite.getVar('userInformation_NSC'), i.linkTrackVars += 'eVar14,') : _satellite.notify('BMW_AG-event::No values found got user infromation'), '' != _satellite.getVar('efos_solutionSpecific_NSC') && _satellite.getVar('finalDataLayer').page.pageInfo.pageName.indexOf('efin >') > -1 ? (i.eVar182 = _satellite.getVar('efos_solutionSpecific_NSC'), i.linkTrackVars += 'eVar182,') : _satellite.notify('BMW_AG-event::No values found got efos_solutionSpecific infromation');
                                                var k = (o.pageInfo || '').language || '', w = (o.pageInfo || '').geoRegion || '';
                                                if ('' != k && '' != w) {
                                                    var T;
                                                    '' != (T = k.indexOf('_') > -1 ? k.replace('_', '-') : k.indexOf('-') > -1 ? k : k + '-' + w) && '-' != T && (i.prop7 = i.eVar7 = T, i.linkTrackVars += 'prop7,eVar7,');
                                                } else {
                                                    _satellite.notify('BMW_AG-event: No language and Market region data found - using fallback');
                                                    var L = _satellite.getVar('languageAndMarketWorkaround');
                                                    i.prop7 = i.eVar7 = L, i.linkTrackVars += 'prop7,eVar7,';
                                                }
                                                i.prop70 = 'D=mid', i.linkTrackVars += 'prop70,';
                                                var A = (o.category || '').pageType || '';
                                                if ('finance offers' == ((o.category || '').primaryCategory || '') && A.indexOf('search results') > -1) {
                                                    var M = dtm_data_layer.event[0].attributes.searchResults || '0', E = t.querySelector('input.filter__text.js-filter-searchtext').value || 'not set';
                                                    i.eVar22 = E + '|' + M + '|GSA', i.linkTrackVars += 'eVar22,', i.events += ',event47,event48';
                                                }
                                                var P = (o.category || '').pageType || '', O = (o.category || '').primaryCategory || '';
                                                O.indexOf('>') > -1 && O.split('>')[1].trim();
                                                if (O.indexOf('rfq finance offers') > -1) {
                                                    if (P.indexOf('form') > -1)
                                                        switch (P) {
                                                        case 'form start':
                                                            i.eVar11 = 'Local Form|RFQ|' + O + '|' + P + '|not set', i.linkTrackVars += 'eVar11,', i.events += ',event1,event2,event207';
                                                            break;
                                                        case 'form success':
                                                            i.eVar11 = 'Local Form|RFQ|' + O + '|' + P + '|not set', i.linkTrackVars += 'eVar11,', i.events += ',event3,event4,event208';
                                                            break;
                                                        default:
                                                            i.eVar11 = 'Local Form|RFQ|' + O + '|' + P + '|not set', i.linkTrackVars += 'eVar11,';
                                                        }
                                                    i.linkTrackEvents = i.events;
                                                }
                                                i.linkTrackVars = i.linkTrackVars.substring(0, i.linkTrackVars.length - 1);
                                                var R = i.linkTrackVars.split(',');
                                                for (var N in i)
                                                    'eVar109' != N && (N.indexOf('eVar') > -1 || N.indexOf('prop') > -1) && -1 == R.indexOf(N) && (i[N] = a);
                                                _satellite.notify('BMW_AG-event:BMW-AG event is triggered');
                                            } catch (U) {
                                                _satellite.logError('DCR:BMW_AG-event ', U);
                                            }
                                        }
                                    }]
                            }]
                    },
                    {
                        name: 'BMW_AG-pageload',
                        trigger: [
                            {
                                engine: 'sc',
                                command: 'trackPageView',
                                arguments: [{
                                        customSetup: function (n, i) {
                                            function r(e) {
                                                for (var t = e.split('/'), a = 0; a < t.length; a++)
                                                    if ('offer' == t[a] && (t[a + 1] = 'offerID'), t[a].indexOf('offerHash') > -1) {
                                                        var n = t[a].split('=');
                                                        n[1] = 'offerID', t[a] = n.join('=');
                                                    }
                                                return t.join('/');
                                            }
                                            try {
                                                'onlinevehiclesales.bmw.co.uk' != location.hostname || i.visitor || _satellite.aaCustomizedPageCode(), i.clearVars(), i.account = _satellite.getVar('adobeRSID_BMW'), i.trackingServer = 'bmwag.d3.sc.omtrdc.net', i.events = 'event988', i.linkTrackVars = '';
                                                var o = _satellite.getVar('dataLayer_page_3.0'), s = _satellite.getVar('dataLayer_product_3.0'), l = _satellite.getVar('dataLayer_event_3.0'), c = _satellite.getVar('dataLayer_component_3.0'), u = _satellite.getVar('contentGroupHierarchy_3.0'), d = (_satellite.getVar('clickTracking_3.0'), _satellite.getVar('dealer_3.0')), g = _satellite.getVar('nonTechMetaData_3.0'), f = _satellite.getVar('mainProduct_3.0'), p = _satellite.getVar('distributionType_3.0'), m = (_satellite.getVar('dataLayer_event_3.0'), _satellite.getVar('techMetaData'));
                                                i.campaign = _satellite.getVar('campaignParameter'), i.pageName = o.pageInfo.pageName;
                                                try {
                                                    '' != ((s.productInfo || '').productID || '') ? (i.products = ';' + ((s.productInfo || '').productID || '') + ';;;;eVar52=' + _satellite.getVar('mainProduct_3.0'), i.linkTrackVars += 'products,') : _satellite.notify('BMW_AG-pageload:No product data found');
                                                } catch (M) {
                                                    _satellite.notify(M);
                                                }
                                                '' != u ? (i.eVar1 = _satellite.getVar('contentGroupHierarchy_3.0'), i.linkTrackVars += 'eVar1,') : _satellite.notify('BMW_AG-pageload:No values found got contentGroupHierarchy'), '' != d ? (i.eVar41 = _satellite.getVar('dealer_3.0'), i.linkTrackVars += 'eVar41,') : _satellite.notify('BMW_AG-pageload:No values found got dealer'), '' != _satellite.getVar('dataLayer_dealer_3.0') && 'object' == typeof _satellite.getVar('dataLayer_dealer_3.0') ? (i.eVar13 = 'na|' + ((_satellite.getVar('dataLayer_dealer_3.0').dealerInfo || '').dealerID || ''), i.linkTrackVars += 'eVar13,') : _satellite.notify('BMW_AG-pageload:No values found got dealer'), '' != g ? (i.eVar44 = _satellite.getVar('nonTechMetaData_3.0'), i.linkTrackVars += 'eVar44,') : _satellite.notify('BMW_AG-pageload:No values found got nonTechMetaData'), '' != m ? (i.eVar45 = m + '~m: BMW_AG-pageload', i.linkTrackVars += 'eVar45,') : _satellite.notify('BMW_AG-pageload:No values found got nonTechMetaData'), '' != f ? (i.eVar51 = _satellite.getVar('mainProduct_3.0'), i.linkTrackVars += 'eVar51,') : _satellite.notify('BMW_AG-pageload:No values found got productData'), '' != p ? (i.eVar88 = _satellite.getVar('distributionType_3.0'), i.linkTrackVars += 'eVar88,') : _satellite.notify('BMW_AG-pageload:No values found got distributionType'), i.eVar63 = e.location.host || '', i.linkTrackVars += 'eVar63,', i.eVar12 = e.location.pathname || '', i.linkTrackVars += 'eVar12,', i.eVar109 = _satellite.buildDate + ';usePlugin:' + i.usePlugins + ';doPlugins:' + typeof i.doPlugins + ';BMW_AG-pageload;', i.prop69 = 'Stage II', i.linkTrackVars += 'prop69,', '' != o.pageInfo.destinationURL && o.pageInfo.destinationURL != a ? (i.eVar4 = r(o.pageInfo.destinationURL), i.prop4 = r(o.pageInfo.destinationURL), i.linkTrackVars += 'eVar4,prop4,') : _satellite.notify('BMW_AG-pageload:No values found got destinationURL'), '' != ((s.attributes || '').configID || '') ? (i.eVar36 = (s.attributes || '').configID || '', i.linkTrackVars += 'eVar36,') : _satellite.notify('BMW_AG-pageload:No values found got product configID'), '' != ((l.eventInfo || '').timeStamp || '') || '' != (((_satellite.getVar('finalDataLayer').page || '').attributes || '').timestamp || '') ? (i.prop12 = ((_satellite.getVar('finalDataLayer').page || '').attributes || '').timestamp || (l.eventInfo || '').timeStamp || '', i.linkTrackVars += 'prop12,') : _satellite.notify('BMW_AG-pageload:No values found got event timeStamp'), '' != ((l.category || '').primaryCategory || '') ? (i.prop16 = (l.category || '').primaryCategory || '', i.linkTrackVars += 'prop16,') : _satellite.notify('BMW_AG-pageload:No values found got event category'), c && c.category && '' != c.category.subCategory2 && c && c.category && c.category.subCategory2 != a || c && c.category && '' != c.category.subCategory02 && c && c.category && c.category.subCategory02 != a ? (i.prop2 = (c && c.category && c.category.subCategory2 ? c.category.subCategory2 : c.category.subCategory02) || '', i.linkTrackVars += 'prop2,') : _satellite.notify('BMW_AG-pageload:No values found got component category'), c && c.category && '' != c.category.subCategory1 && c && c.category && c.category.subCategory1 != a || c && c.category && '' != c.category.subCategory1 && c && c.category && c.category.subCategory1 != a ? (i.prop3 = (c && c.category && c.category.subCategory1 ? c.category.subCategory1 : c.category.subCategory01) || '', i.linkTrackVars += 'prop3,') : _satellite.notify('BMW_AG-pageload:No values found got component category'), '' != _satellite.getVar('userInformation_NSC') ? (i.eVar14 = _satellite.getVar('userInformation_NSC'), i.linkTrackVars += 'eVar14,') : _satellite.notify('BMW_AG-pageload:No values found got user infromation'), '' != _satellite.getVar('efos_solutionSpecific_NSC') && _satellite.getVar('finalDataLayer').page.pageInfo.pageName.indexOf('efin >') > -1 ? (i.eVar182 = _satellite.getVar('efos_solutionSpecific_NSC'), i.linkTrackVars += 'eVar182,') : _satellite.notify('BMW_AG-pageload:No values found got efos_solutionSpecific infromation'), i.eVar6 = _satellite.getVar('pa_pag_referringUrl'), i.linkTrackVars += 'eVar6,';
                                                var h = (o.pageInfo || '').language || '', v = (o.pageInfo || '').geoRegion || '';
                                                if ('' != h && '' != v) {
                                                    var _;
                                                    '' != (_ = h.indexOf('_') > -1 ? h.replace('_', '-') : h.indexOf('-') > -1 ? h : h + '-' + v) && '-' != _ && (i.prop7 = i.eVar7 = _, i.linkTrackVars += 'prop7,eVar7,');
                                                } else {
                                                    _satellite.notify('BMW_AG-pageload: No language and Market region data found - using fallback');
                                                    var y = _satellite.getVar('languageAndMarketWorkaround');
                                                    i.prop7 = i.eVar7 = y, i.linkTrackVars += 'prop7,eVar7,';
                                                }
                                                i.prop70 = 'D=mid', i.linkTrackVars += 'prop70,';
                                                try {
                                                    i.events = i.events || '', _satellite.getVar('performance timing sender'), 'undefined' != typeof e.perfTime.events && (i.eVar35 = e.perfTime.URL, i.eVar32 = e.perfTime.timesString, i.linkTrackVars += 'eVar32,eVar35,', '' != i.events ? i.events = i.events + ',' + e.perfTime.events : i.events = e.perfTime.events);
                                                } catch (E) {
                                                    _satellite.notify(E);
                                                }
                                                var b = (o.category || '').pageType || '', C = (o.category || '').primaryCategory || '';
                                                if ('finance offers' == C && b.indexOf('search results') > -1) {
                                                    var I = dtm_data_layer.event[0].attributes.searchResults || '0', D = t.querySelector('input.filter__text.js-filter-searchtext').value || 'not set';
                                                    i.eVar22 = 'used vehicle locator' == C ? D + '|' + I + '|used cars' : 'finance offers' == C ? D + '|' + I + '|offers' : D + '|' + I + '|GSA', i.linkTrackVars += 'eVar22,', i.events += ',event47,';
                                                }
                                                var S = _satellite.getVar('dataLayer_event_3.0').attributes || '', V = S.searchResults || '', k = ((S.linkedPage || '').pageInfo || '').pageID || '';
                                                'finance offers' == C && 'na' == V && k.indexOf(' > ') > -1 && (k = k.split(' > ')[1], 'number' == typeof parseInt(k) && (i.events += ',event48,'));
                                                var w = (o.category || '').pageType || '', T = (o.category || '').primaryCategory || '';
                                                T.indexOf('>') > -1 && T.split('>')[1].trim();
                                                if (T.indexOf('rfq finance offers') > -1) {
                                                    if (w.indexOf('form') > -1)
                                                        switch (w) {
                                                        case 'form start':
                                                            i.eVar11 = 'Local Form|RFQ|' + T + '|Start|not set', i.linkTrackVars += 'eVar11,', i.events += ',event1,event2,event207';
                                                            break;
                                                        case 'form success':
                                                            i.eVar11 = 'Local Form|RFQ|' + T + '|Finish|not set', i.linkTrackVars += 'eVar11,', i.events += ',event3,event4,event208';
                                                            break;
                                                        default:
                                                            i.eVar11 = 'Local Form|RFQ|' + T + '|' + w + '|not set', i.linkTrackVars += 'eVar11,';
                                                        }
                                                    i.linkTrackEvents = i.events;
                                                }
                                                i.linkTrackVars = i.linkTrackVars.substring(0, i.linkTrackVars.length - 1);
                                                var L = i.linkTrackVars.split(',');
                                                for (var A in i)
                                                    A && 'eVar109' != A && (A.indexOf('eVar') > -1 || A.indexOf('prop') > -1) && -1 == L.indexOf(A) && (i[A] = a);
                                                _satellite.notify('BMW_AG-pageload:BMW-AG is triggered');
                                            } catch (E) {
                                                _satellite.logError('DCR:BMW_AG-pageload ', E);
                                            }
                                        }
                                    }]
                            },
                            {
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [
                                            { src: 'satellite-5ec389e164746d66020009c7.js' },
                                            { src: 'satellite-5f3ce46364746d3a50001f56.js' },
                                            { src: 'satellite-5f621b1364746d4279000405.js' }
                                        ]
                                    }]
                            }
                        ]
                    },
                    {
                        name: 'Cluster_DC-event',
                        trigger: [{
                                engine: 'sc',
                                command: 'trackLink',
                                arguments: [{
                                        customSetup: function (n, i) {
                                            function r(e, t) {
                                                var a = t.split('?')[0], n = [], i = -1 !== t.indexOf('?') ? t.split('?')[1] : '';
                                                if ('' !== i) {
                                                    for (var r = (n = i.split('&')).length - 1; r >= 0; r -= 1)
                                                        n[r].split('=')[0] === e && n.splice(r, 1);
                                                    a = a + '?' + n.join('&');
                                                }
                                                return a;
                                            }
                                            function o(e) {
                                                return e.indexOf('KM') > -1 ? e = (e = e.split('KM')[0]).trim() : e.indexOf('months') - 1 ? e = (e = e.split('months')[0]).trim() : void 0;
                                            }
                                            try {
                                                _satellite.notify('OSM: Cluster_DC Event call'), i.account = _satellite.getVar('adobeRSID_Cluster'), i.trackingServer = 'bmwag.d3.sc.omtrdc.net', i.referrer = t.referrer;
                                                var s = _satellite.getVar('finalDataLayer'), l = _satellite.getVar('dataLayer_page_3.0'), c = _satellite.getVar('dataLayer_product_3.0'), u = (s.cart, _satellite.getVar('dataLayer_component_3.0'), n = _satellite.getVar('dataLayer_event_3.0'), l.pageInfo), d = u.destinationURL, g = _satellite.getVar('techMetaData_DC');
                                                i.linkTrackVars = '', i.pageName = u.pageName;
                                                var f = (c.productInfo || '').productType || '';
                                                '' == f && (f = (f = (c.category || '').productType || '').toLowerCase()), 'vehicle' == f ? '' != _satellite.getVar('productInformation_DC') && (i.products = ';' + ((c.productInfo || '').productID || '') + ';;;;eVar52=' + _satellite.getVar('productInformation_DC') + ',eVar53=' + _satellite.getVar('linkedProductInformation_DC'), i.linkTrackVars += 'products,') : 'service' == f ? '' != _satellite.getVar('linkedProductInformation_DC') && (i.products = ';' + ((c.productInfo || '').productID || '') + ';;;;eVar53=' + _satellite.getVar('linkedProductInformation_DC') + ',eVar52=' + _satellite.getVar('productInformation_DC'), i.linkTrackVars += 'products,') : _satellite.notify('product type is not present!'), '' != _satellite.getVar('contentHierarchy_DC') && (i.eVar1 = _satellite.getVar('contentHierarchy_DC'), i.linkTrackVars += 'eVar1,'), '' != _satellite.getVar('componentInformation_DC') && (i.eVar2 = _satellite.getVar('componentInformation_DC'), i.linkTrackVars += 'eVar2,'), '' != _satellite.getVar('userInformation_DC') && (i.eVar14 = _satellite.getVar('userInformation_DC'), i.linkTrackVars += 'eVar14,'), '' != _satellite.getVar('eventInformation_DC') && (i.eVar34 = _satellite.getVar('eventInformation_DC'), i.linkTrackVars += 'eVar34,'), '' != _satellite.getVar('cartInformation_DC') && (i.eVar51 = _satellite.getVar('cartInformation_DC'), i.linkTrackVars += 'eVar51,'), '' != _satellite.getVar('solutionSpecific_DC') && (i.eVar58 = _satellite.getVar('solutionSpecific_DC'), _satellite.notify('ReportMapping Cluster_DC Pageload, s.eVar58,' + _satellite.getVar('solutionSpecific_DC')), i.linkTrackVars += 'eVar58,');
                                                var p = ((_satellite.getVar('dataLayer_linkedproduct_3.0') || '').attributes || '').solutionSpecific || '';
                                                if (i.events = i.events || '', p && '' != p && ('' != i.events ? i.events += 'event232,' : i.events = 'event232,'), '' != (p.efinMileage || '')) {
                                                    var m = o(p.efinMileage);
                                                    i.events += ',event220=' + m;
                                                }
                                                if ('' != (p.efinTerm || '')) {
                                                    var h = o(p.efinTerm);
                                                    i.events += ',event224=' + h;
                                                }
                                                '' != (p.efinMonthlyInstallment || '') && (p.efinMonthlyInstallment.indexOf('%') > -1 ? i.events += ',event233=' + p.efinMonthlyInstallment : i.events += ',event221=' + p.efinMonthlyInstallment), '' != (p.efinDownPayment || '') && (p.efinDownPayment.indexOf('%') > -1 ? i.events += ',event215=' + p.efinDownPayment : i.events += ',event214=' + p.efinDownPayment), i.eVar4 = d, i.eVar4 = r('token', i.eVar4), i.linkTrackVars += 'eVar4,', i.prop4 = d, i.prop4 = r('token', i.prop4), i.linkTrackVars += 'prop4,', i.eVar5 = l.attributes && l.attributes.timeStamp ? '~zt:' + l.attributes.timeStamp : '~zt:' + new Date().getTime(), i.linkTrackVars += 'eVar5,', i.eVar7 = '', '' != (u.language || '') && (i.eVar7 += '~gl:' + (u.language || '')), '' != (u.geoRegion || '') && (i.eVar7 += '~gr:' + (u.geoRegion || '')), i.linkTrackVars += 'eVar7,', '' != e.location.search ? (i.eVar8 = e.location.search, i.linkTrackVars += 'eVar8,') : e.location.href.indexOf('?') > -1 && (i.eVar8 = e.location.href.split('?')[1] || '', i.linkTrackVars += 'eVar8,'), i.eVar8 = r('token', i.eVar8), i.eVar12 = e.location.protocol + '//' + e.location.host + e.location.pathname, i.linkTrackVars += 'eVar12,';
                                                var v = '~dn:' + ((_satellite.getVar('dataLayer_dealer_3.0').dealerInfo || '').dealerName || 'n/a');
                                                v = (v = (v = v + '~di:' + ((_satellite.getVar('dataLayer_dealer_3.0').dealerInfo || '').dealerID || 'n/a')) + '~dg:' + ((_satellite.getVar('dataLayer_dealer_3.0').dealerInfo || '').dealerGroup || 'n/a')) + '~do:' + ((_satellite.getVar('dataLayer_dealer_3.0').dealerInfo || '').outletID || 'n/a'), i.eVar41 = v, i.linkTrackVars += 'eVar41,', i.eVar45 = g + '~tr:Cluster_DC-event', i.linkTrackVars += 'eVar45,', URLnoParam.indexOf('efinance') > -1 ? i.eVar69 = l.attributes.errorCode + ':' + l.attributes.requestedURL : n != a && (n.eventInfo != a && 'error' === n.eventInfo.type ? (i.eVar69 = '', '' != ((n.eventInfo || '').eventAction || '') && (i.eVar69 += n.eventInfo.eventAction), '' != ((n.eventInfo || '').cause || '') && (i.eVar69 += ':' + n.eventInfo.cause), '' != ((n.eventInfo || '').eventName || '') && (i.eVar69 += ':' + n.eventInfo.eventName), i.linkTrackVars += 'eVar69,', _satellite.notify('ReportMapping Cluster_DC Pageload, s.eVar69, digitalData.event[0].eventInfo.eventAction : digitalData.event[0].eventInfo.cause : digitalData.event[0].eventInfo.eventName')) : i.eVar69 = ''), '' != _satellite.getVar('efos_solutionSpecific_NSC') && _satellite.getVar('finalDataLayer').page.pageInfo.pageName.indexOf('efin >') > -1 ? (i.eVar182 = _satellite.getVar('efos_solutionSpecific_NSC'), i.linkTrackVars += 'eVar182,') : _satellite.notify('Cluster_DC-event::No values found got efos_solutionSpecific infromation'), i.linkTrackVars = i.linkTrackVars.substring(0, i.linkTrackVars.length - 1);
                                            } catch (_) {
                                                _satellite.notify('DCR:Cluster_DC-event', _);
                                            }
                                        }
                                    }]
                            }]
                    },
                    {
                        name: 'Cluster_DC-pageload',
                        trigger: [{
                                engine: 'sc',
                                command: 'trackPageView',
                                arguments: [{
                                        customSetup: function (n, i) {
                                            function r(e, t) {
                                                var a = t.split('?')[0], n = [], i = -1 !== t.indexOf('?') ? t.split('?')[1] : '';
                                                if ('' !== i) {
                                                    for (var r = (n = i.split('&')).length - 1; r >= 0; r -= 1)
                                                        n[r].split('=')[0] === e && n.splice(r, 1);
                                                    a = a + '?' + n.join('&');
                                                }
                                                return a;
                                            }
                                            function o(e) {
                                                return e.indexOf('KM') > -1 ? e = (e = e.split('KM')[0]).trim() : e.indexOf('months') - 1 ? e = (e = e.split('months')[0]).trim() : void 0;
                                            }
                                            try {
                                                _satellite.notify('OSM:Cluster_DC Pageload Rule'), i.clearVars(), i.account = _satellite.getVar('adobeRSID_Cluster'), i.trackingServer = 'bmwag.d3.sc.omtrdc.net', i.referrer = t.referrer;
                                                var s = _satellite.getVar('finalDataLayer'), l = _satellite.getVar('dataLayer_page_3.0'), c = _satellite.getVar('dataLayer_product_3.0'), u = (s.cart, _satellite.getVar('dataLayer_component_3.0'), n = _satellite.getVar('dataLayer_event_3.0'), _satellite.getVar('techMetaData_DC')), d = l.pageInfo, g = d.destinationURL, f = e.location.hostname + e.location.pathname;
                                                i.linkTrackVars = '', i.campaign = _satellite.getVar('campaignParameter'), i.pageName = d.pageName, _satellite.notify('ReportMapping Cluster_DC Pageload, s.PageName, digitalData.page.pageInfo.pageName');
                                                try {
                                                    var p = (c.productInfo || '').productType || '';
                                                    '' == p && (p = (p = (c.category || '').productType || '').toLowerCase()), 'vehicle' == p ? (i.products = ';' + ((c.productInfo || '').productID || '') + ';;;;eVar52=' + _satellite.getVar('productInformation_DC') + ',eVar53=' + _satellite.getVar('linkedProductInformation_DC'), _satellite.notify('ReportMapping Cluster_DC Pageload, s.products, ~pi: -> digitalData.product[0].productInfo.productID ~pn: -> digitalData.product[0].productInfo.productName ~pt: -> digitalData.product[0].category.productType ~pd: -> digitalData.product[0].category.primaryCategory ~pp: -> digitalData.product[0].category.subCategory1 ~pm: -> digitalData.product[0].attributes.modelCode ~py: -> digitalData.product[0].attributes.productionYear ~ps: -> digitalData.product[0].attributes.vehicleSelected'), i.linkTrackVars += 'products,') : 'service' == p ? (i.products = ';' + ((c.productInfo || '').productID || '') + ';;;;eVar53=' + _satellite.getVar('linkedProductInformation_DC') + ',eVar52=' + _satellite.getVar('productInformation_DC'), _satellite.notify('ReportMapping Cluster_DC Pageload, s.eVar53, ~li: -> digitalData.product[0].linkedProduct[0].productInfo.productID ~ln: -> digitalData.product[0].linkedProduct[0].productInfo.productID.productName ~lt: -> digitalData.product[0].linkedProduct[0].productInfo.productID.productType')) : _satellite.notify('product type is not present!');
                                                } catch (y) {
                                                    _satellite.notify(y);
                                                }
                                                '' != _satellite.getVar('contentHierarchy_DC') && (i.eVar1 = _satellite.getVar('contentHierarchy_DC'), _satellite.notify('ReportMapping Cluster_DC Pageload, s.eVar1, ~hi: -> digitalData.page.pageInfo.pageID ~hn: -> digitalData.page.pageInfo.pageName ~hc: -> digitalData.page.category.primaryCategory ~hx: -> digitalData.page.category.subCategory1 ~hy: -> digitalData.page.category.subCategory2 ~hz: -> digitalData.page.category.subCategory3 ~ht: -> digitalData.page.category.pageType ~hb: -> digitalData.page.attributes.brand ~hd: window.location.hostname'), i.linkTrackVars += 'eVar1,'), '' != _satellite.getVar('componentInformation_DC') && (i.eVar2 = _satellite.getVar('componentInformation_DC'), _satellite.notify('ReportMapping Cluster_DC Pageload, s.eVar2, ~sn: -> digitalData.component[0].componentInfo.componentName ~sc: -> digitalData.component[0].category.primaryCategory ~sx: -> digitalData.component[0].category.subCategory1 ~st: -> digitalData.component[0].category.componentType ~sv: -> digitalData.page.pageInfo.version'), i.linkTrackVars += 'eVar2,'), '' != _satellite.getVar('userInformation_DC') && (i.eVar14 = _satellite.getVar('userInformation_DC'), _satellite.notify('ReportMapping Cluster_DC Pageload, s.eVar14, ~us: digitalData.user[0].segment ~ui:  digitalData.user[0].profile[0].profileInfo.profileID ~ul: digitalData.user[0].profile[0].profileInfo.language ~ur: digitalData.user[0].profile[0].profileInfo.returningStatus ~ua: digitalData.user[0].profile[0].address.stateProvince ~ut: digitalData.user[0].profile[0].profileInfo.type ~uc: digitalData.user[0].profile[0].address.country ~uv: digitalData.user[0].profile[0].attributes.loggedInStatus ~ux: mid'), i.linkTrackVars += 'eVar14,'), '' != _satellite.getVar('cartInformation_DC') && (i.eVar51 = _satellite.getVar('cartInformation_DC'), _satellite.notify('ReportMapping Cluster_DC Pageload, s.eVar51, ~xc: digitalData.cart.item[0].price ~xi: digitalData.cart.item[0].cartID ~xb: digitalData.cart.price.basePrice ~xv: digitalData.cart.price.voucherCode ~xd: digitalData.cart.price.voucherDiscount ~xt: digitalData.cart.price.taxRate ~xp: digitalData.cart.price.cartTotal ~xq: digitalData.cart.item[0].quantity'), i.linkTrackVars += 'eVar51,'), '' != _satellite.getVar('solutionSpecific_DC') && (i.eVar58 = _satellite.getVar('solutionSpecific_DC'), _satellite.notify('ReportMapping Cluster_DC Pageload, s.eVar58,' + _satellite.getVar('solutionSpecific_DC')), i.linkTrackVars += 'eVar58,');
                                                var m = ((_satellite.getVar('dataLayer_linkedproduct_3.0') || '').attributes || '').solutionSpecific || '';
                                                if (i.events = i.events || '', m && '' != m && ('' != i.events ? i.events += 'event232,' : i.events = 'event232,'), '' != (m.efinMileage || '')) {
                                                    var h = o(m.efinMileage);
                                                    i.events += ',event220=' + h;
                                                }
                                                if ('' != (m.efinTerm || '')) {
                                                    var v = o(m.efinTerm);
                                                    i.events += ',event224=' + v;
                                                }
                                                '' != (m.efinMonthlyInstallment || '') && (m.efinMonthlyInstallment.indexOf('%') > -1 ? i.events += ',event233=' + m.efinMonthlyInstallment : i.events += ',event221=' + m.efinMonthlyInstallment), '' != (m.efinDownPayment || '') && (m.efinDownPayment.indexOf('%') > -1 ? i.events += ',event215=' + m.efinDownPayment : i.events += ',event214=' + m.efinDownPayment), i.eVar52 = _satellite.getVar('productInformation_DC'), i.linkTrackVars += 'eVar52,', i.eVar4 = g, i.eVar4 = r('token', i.eVar4), _satellite.notify('ReportMapping Cluster_DC Pageload, s.eVar4, digitalData.page.pageInfo.destinationURL'), i.linkTrackVars += 'eVar4,', i.prop4 = g, i.prop4 = r('token', i.prop4), _satellite.notify('ReportMapping Cluster_DC Pageload, s.prop4, digitalData.page.pageInfo.destinationURL'), i.linkTrackVars += 'prop4,', i.eVar6 = l.pageInfo.referringURL, _satellite.notify('ReportMapping Cluster_DC Pageload, s.eVar6, digitalData.page.pageInfo.referringURL'), i.linkTrackVars += 'eVar6,', i.eVar5 = l.attributes && l.attributes.timeStamp ? '~zt:' + l.attributes.timeStamp : '~zt:' + new Date().getTime(), _satellite.notify('ReportMapping Cluster_DC Pageload, s.eVar5, digitalData.page.attributes.timestamp OR new Date().getTime()'), i.linkTrackVars += 'eVar5,', i.eVar7 = '', '' != (d.language || '') && (i.eVar7 += '~gl:' + (d.language || '')), '' != (d.geoRegion || '') && (i.eVar7 += '~gr:' + (d.geoRegion || '')), _satellite.notify('ReportMapping Cluster_DC Pageload, s.eVar7, ~gl: digitalData.page.pageInfo.language ~gr: digitalData.page.pageInfo.geoRegion'), i.linkTrackVars += 'eVar7,', '' != e.location.search ? (i.eVar8 = e.location.search, _satellite.notify('ReportMapping Cluster_DC Pageload, s.eVar8, window.location.search'), i.linkTrackVars += 'eVar8,') : e.location.href.indexOf('?') > -1 && (i.eVar8 = e.location.href.split('?')[1] || '', i.linkTrackVars += 'eVar8,'), i.eVar8 = r('token', i.eVar8);
                                                var _ = '~dn:' + ((_satellite.getVar('dataLayer_dealer_3.0').dealerInfo || '').dealerName || 'n/a');
                                                _ = (_ = (_ = _ + '~di:' + ((_satellite.getVar('dataLayer_dealer_3.0').dealerInfo || '').dealerID || 'n/a')) + '~dg:' + ((_satellite.getVar('dataLayer_dealer_3.0').dealerInfo || '').dealerGroup || 'n/a')) + '~do:' + ((_satellite.getVar('dataLayer_dealer_3.0').dealerInfo || '').outletID || 'n/a'), i.eVar41 = _, i.linkTrackVars += 'eVar41,', i.eVar45 = u + '~tr:Cluster_DC-pageload', _satellite.notify('ReportMapping Cluster_DC Pageload, s.eVar45, ~ev: digitalData.page.pageInfo.sysEnv ~aa: window.s.version ~av: window.s.visitor.version ~pd: _satellite.publishDate ~tr: Cluster_DC-pageload'), i.linkTrackVars += 'eVar45,', i.eVar12 = e.location.protocol + '//' + e.location.host + e.location.pathname, _satellite.notify('ReportMapping Cluster_DC Pageload, s.eVar12, window.location.protocol // window.location.host + window.location.pathname'), i.linkTrackVars += 'eVar12,', f.indexOf('efinance') > -1 ? i.eVar69 = l.attributes.errorCode + ':' + (l.attributes.requestedURL == a ? l.attributes.requestURL : 'not set') : n != a && (n.eventInfo != a && 'error' === n.eventInfo.type ? (i.eVar69 = '', '' != ((n.eventInfo || '').eventAction || '') && (i.eVar69 += n.eventInfo.eventAction), '' != ((n.eventInfo || '').cause || '') && (i.eVar69 += ':' + n.eventInfo.cause), '' != ((n.eventInfo || '').eventName || '') && (i.eVar69 += ':' + n.eventInfo.eventName), i.linkTrackVars += 'eVar69,', _satellite.notify('ReportMapping Cluster_DC Pageload, s.eVar69, digitalData.event[0].eventInfo.eventAction : digitalData.event[0].eventInfo.cause : digitalData.event[0].eventInfo.eventName')) : i.eVar69 = ''), '' != _satellite.getVar('efos_solutionSpecific_NSC') && _satellite.getVar('finalDataLayer').page.pageInfo.pageName.indexOf('efin >') > -1 ? (i.eVar182 = _satellite.getVar('efos_solutionSpecific_NSC'), i.linkTrackVars += 'eVar182,') : _satellite.notify('DCR:Cluster_DC-pageload:No values found got efos_solutionSpecific infromation');
                                                try {
                                                    i.events = i.events || '', _satellite.getVar('performance timing sender'), 'undefined' != typeof e.perfTime.events && (i.eVar35 = e.perfTime.URL, i.linkTrackVars += 'eVar35,', '' != i.events ? i.events = i.events + ',' + e.perfTime.events : i.events = e.perfTime.events);
                                                } catch (b) {
                                                    _satellite.notify(b);
                                                }
                                                i.linkTrackVars = i.linkTrackVars.substring(0, i.linkTrackVars.length - 1), i.linkTrackEvents = i.events;
                                            } catch (y) {
                                                _satellite.notify('DCR:Cluster_DC-pageload', y);
                                            }
                                        }
                                    }]
                            }]
                    },
                    {
                        name: 'MINI-event',
                        trigger: [{
                                engine: 'sc',
                                command: 'trackLink',
                                arguments: [{
                                        customSetup: function (e, t) {
                                            function a() {
                                                for (var e = _satellite.getVar('finalDataLayer').product, t = e.length - 1; t >= 0 && 'vehicle' != e[t].category.productType; t--);
                                                return t;
                                            }
                                            function n(e) {
                                                for (var t = e.split('/'), a = 0; a < t.length; a++)
                                                    if ('offer' == t[a] && (t[a + 1] = 'offerID'), t[a].indexOf('offerHash') > -1) {
                                                        var n = t[a].split('=');
                                                        n[1] = 'offerID', t[a] = n.join('=');
                                                    }
                                                return t.join('/');
                                            }
                                            try {
                                                t.clearVars(), t.account = _satellite.getVar('adobeRSID_MINI'), t.trackingServer = 'mini.d3.sc.omtrdc.net', t.server = _satellite.getVar('server');
                                                var i = _satellite.getVar('dataLayer_page_3.0'), r = _satellite.getVar('dataLayer_product_3.0'), o = _satellite.getVar('dataLayer_event_3.0'), s = _satellite.getVar('dataLayer_component_3.0');
                                                t.pageName = i.pageInfo.pageName, t.eVar45 = _satellite.getVar('MINI_dealer_3.0'), t.eVar88 = _satellite.getVar('distributionType_3.0');
                                                var l = a();
                                                r = _satellite.getVar('finalDataLayer').product[l];
                                                try {
                                                    t.products = ';' + r.productInfo.productID + ';;;;eVar53=' + _satellite.getVar('MINI_mainProduct_3.0');
                                                } catch (u) {
                                                    _satellite.notify(u);
                                                }
                                                try {
                                                    t.hier1 = JSON.parse(i.pageInfo.breadCrumbs).join(':');
                                                } catch (u) {
                                                    _satellite.notify(u);
                                                }
                                                var c = o.eventInfo || '';
                                                t.eVar56 = c.eventName || '', t.prop56 = c.eventName || '', t.eVar57 = c.eventAction || '', t.prop57 = c.eventAction || '', t.eVar58 = c.eventPoints || '', t.prop58 = c.eventPoints || '', t.eVar59 = c.timeStamp || '', t.prop59 = c.timeStamp || '', t.eVar60 = (c.cause || '') + ':' + (c.effect || ''), t.prop60 = (c.cause || '') + ':' + (c.effect || ''), t.eVar61 = (s.componentInfo || '').componentID || '', t.prop61 = (s.componentInfo || '').componentID || '', t.eVar62 = (s.componentInfo || '').componentName || '', t.prop62 = (s.componentInfo || '').componentName || '', t.eVar63 = (s.category || '').primaryCategory || '', t.prop63 = (s.category || '').primaryCategory || '', t.eVar65 = (s.category || '').subCategory2 || '', t.prop65 = (s.category || '').subCategory2 || '', t.channel = (s.category || '').subCategory01 || '', t.eVar21 = (i.pageInfo || '').breadCrumbs || '', t.eVar19 = (i.pageInfo || '').pageID || '', t.prop19 = (i.pageInfo || '').pageID || '', t.eVar24 = (i.pageInfo || '').pageName || '', t.eVar12 = n((i.pageInfo || '').destinationURL || ''), t.prop12 = n((i.pageInfo || '').destinationURL || ''), t.eVar14 = t.eVar15 = _satellite.getVar('pa_pag_referringUrl'), t.eVar8 = ((i.pageInfo || '').language || '') + '-' + ((i.pageInfo || '').geoRegion || ''), t.prop8 = ((i.pageInfo || '').language || '') + '-' + ((i.pageInfo || '').geoRegion || ''), t.eVar9 = (i.pageInfo || '').geoRegion || '', t.prop9 = (i.pageInfo || '').geoRegion || '', t.eVar109 = _satellite.buildDate + ';usePlugin:' + t.usePlugins + ';doPlugins:' + typeof t.doPlugins + ';MINI-event;', t.linkTrackVars = 'hier1,channel,eVar8,eVar9,eVar12,eVar14,eVar15,eVar19,eVar21,eVar24,eVar45,eVar53,eVar56,eVar57,eVar58,eVar59,eVar60,eVar61,eVar62,eVar63,eVar65,eVar88,eVar109,prop8,prop9,prop12,prop19,prop56,prop57,prop58,prop59,prop60,prop61,prop62,prop63,prop65';
                                            } catch (d) {
                                                _satellite.logError('DCR:MINI-event ', d);
                                            }
                                        }
                                    }]
                            }]
                    },
                    {
                        name: 'MINI-pageload',
                        trigger: [
                            {
                                engine: 'sc',
                                command: 'trackPageView',
                                arguments: [{
                                        customSetup: function (n, i) {
                                            function r() {
                                                for (var e = _satellite.getVar('finalDataLayer').product, t = e.length - 1; t >= 0 && 'vehicle' != e[t].category.productType; t--);
                                                return t;
                                            }
                                            function o(e) {
                                                for (var t = e.split('/'), a = 0; a < t.length; a++)
                                                    if ('offer' == t[a] && (t[a + 1] = 'offerID'), t[a].indexOf('offerHash') > -1) {
                                                        var n = t[a].split('=');
                                                        n[1] = 'offerID', t[a] = n.join('=');
                                                    }
                                                return t.join('/');
                                            }
                                            try {
                                                i.clearVars(), i.account = _satellite.getVar('adobeRSID_MINI'), i.trackingServer = 'mini.d3.sc.omtrdc.net', i.server = _satellite.getVar('server');
                                                var s = _satellite.getVar('dataLayer_page_3.0'), l = _satellite.getVar('dataLayer_product_3.0'), c = _satellite.getVar('dataLayer_event_3.0'), u = _satellite.getVar('dataLayer_component_3.0');
                                                i.pageName = s.pageInfo.pageName, i.eVar45 = _satellite.getVar('MINI_dealer_3.0'), i.eVar88 = _satellite.getVar('distributionType_3.0');
                                                var d = r();
                                                l = _satellite.getVar('finalDataLayer').product[d];
                                                try {
                                                    i.products = ';' + l.productInfo.productID + ';;;;eVar53=' + _satellite.getVar('MINI_mainProduct_3.0');
                                                } catch (m) {
                                                    _satellite.notify(m);
                                                }
                                                try {
                                                    i.hier1 = JSON.parse(s.pageInfo.breadCrumbs).join(':');
                                                } catch (m) {
                                                    _satellite.notify(m);
                                                }
                                                var g = c.eventInfo || '';
                                                if (i.eVar56 = g.eventName || '', i.prop56 = g.eventName || '', i.eVar57 = g.eventAction || '', i.prop57 = g.eventAction || '', i.eVar58 = g.eventPoints || '', i.prop58 = g.eventPoints || '', i.eVar59 = g.timeStamp || '', i.prop59 = g.timeStamp || '', i.eVar60 = (g.cause || '') + ':' + (g.effect || ''), i.prop60 = (g.cause || '') + ':' + (g.effect || ''), i.eVar61 = (u.componentInfo || '').componentID || '', i.prop61 = (u.componentInfo || '').componentID || '', i.eVar62 = (u.componentInfo || '').componentName || '', i.prop62 = (u.componentInfo || '').componentName || '', i.eVar63 = (u.category || '').primaryCategory || '', i.prop63 = (u.category || '').primaryCategory || '', i.eVar65 = (u.category || '').subCategory2 || '', i.prop65 = (u.category || '').subCategory2 || '', i.channel = (u.category || '').subCategory01 || '', i.eVar21 = (s.pageInfo || '').breadCrumbs || '', i.eVar19 = (s.pageInfo || '').pageID || '', i.prop19 = (s.pageInfo || '').pageID || '', i.eVar24 = (s.pageInfo || '').pageName || '', i.eVar109 = _satellite.buildDate, i.eVar12 = o((s.pageInfo || '').destinationURL || ''), i.prop12 = o((s.pageInfo || '').destinationURL || ''), i.eVar14 = _satellite.getVar('pa_pag_referringUrl'), _satellite.readCookie('gpv_Page') == a) {
                                                    var f = 30;
                                                    (p = new Date()).setTime(p.getTime() + 60 * f * 1000), t.cookie = 'gpv_Page=' + (i.pageName || '') + '; expires=' + p.toGMTString() + '; domain=onlinevehiclesales.mini.co.uk; path=/';
                                                } else {
                                                    i.eVar15 = _satellite.readCookie('gpv_Page');
                                                    var p;
                                                    f = 30;
                                                    (p = new Date()).setTime(p.getTime() + 60 * f * 1000), t.cookie = 'gpv_Page=' + (i.pageName || '') + '; expires=' + p.toGMTString() + '; domain=onlinevehiclesales.mini.co.uk; path=/';
                                                }
                                                i.eVar8 = ((s.pageInfo || '').language || '') + '-' + ((s.pageInfo || '').geoRegion || ''), i.prop8 = ((s.pageInfo || '').language || '') + '-' + ((s.pageInfo || '').geoRegion || ''), i.eVar9 = (s.pageInfo || '').geoRegion || '', i.prop9 = (s.pageInfo || '').geoRegion || '', i.eVar109 = _satellite.buildDate + ';usePlugin:' + i.usePlugins + ';doPlugins:' + typeof i.doPlugins + ';MINI-pageload;';
                                                try {
                                                    i.events = i.events || '', _satellite.getVar('performance timing sender'), 'undefined' != typeof e.perfTime.events && (i.eVar35 = e.perfTime.URL, i.eVar32 = e.perfTime.timesString, '' != i.events ? i.events = i.events + ',' + e.perfTime.events : i.events = e.perfTime.events);
                                                } catch (h) {
                                                    _satellite.notify(h);
                                                }
                                                'undefined' != typeof e.perfTime.events ? i.linkTrackVars = 'eVar8,eVar9,eVar12,eVar14,eVar15,eVar19,eVar21,eVar24,eVar32,eVar35,eVar45,eVar53,eVar56,eVar57,eVar58,eVar59,eVar60,eVar61,eVar62,eVar63,eVar65,eVar88,eVar109,eVar109,prop8,prop9,prop12,prop19,prop56,prop57,prop58,prop59,prop60,prop61,prop62,prop63,prop65' : i.linkTrackVars = 'eVar8,eVar9,eVar12,eVar14,eVar15,eVar19,eVar21,eVar24,eVar45,eVar53,eVar56,eVar57,eVar58,eVar59,eVar60,eVar61,eVar62,eVar63,eVar65,eVar88,eVar109,eVar109,prop8,prop9,prop12,prop19,prop56,prop57,prop58,prop59,prop60,prop61,prop62,prop63,prop65';
                                            } catch (h) {
                                                _satellite.logError('DCR:MINI-pageload ', h);
                                            }
                                        }
                                    }]
                            },
                            {
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [
                                            { src: 'satellite-5e85e29f64746d2f88000b35.js' },
                                            { src: 'satellite-5ef35f0f64746d27f90018f6.js' },
                                            { src: 'satellite-5f27bed664746d3a50000e83.js' },
                                            { src: 'satellite-5f27bed664746d3a50000e84.js' }
                                        ]
                                    }]
                            }
                        ]
                    },
                    {
                        name: 'opt-out',
                        trigger: [
                            {
                                engine: 'sc',
                                command: 'trackLink',
                                arguments: [{
                                        type: 'o',
                                        linkName: 'Opt-out - cleared all the cookies',
                                        customSetup: function (t, a) {
                                            try {
                                                if ('undefined' == typeof Visitor)
                                                    a.abort = !0;
                                                else {
                                                    if (a.clearVars(), !0 === _satellite.settings.isStaging)
                                                        a.account = 'bmw.dev.hq.nsctestsuite';
                                                    else {
                                                        var n = e.location.href;
                                                        n.indexOf('bmw') > -1 ? a.account = _satellite.getVar('adobeRSID_BMW') : n.indexOf('mini') > -1 && (a.account = _satellite.getVar('adobeRSID_MINI'));
                                                    }
                                                    a.events = 'event200', a.linkTrackVars = 'events', a.linkTrackEvents = 'event200', a.eVar109 = _satellite.buildDate + ';usePlugin:' + a.usePlugins + ';doPlugins:' + typeof a.doPlugins + ';Opt-in;';
                                                }
                                            } catch (i) {
                                                _satellite.logError('Opt-in DCR ', i);
                                            }
                                        }
                                    }]
                            },
                            {
                                command: 'loadScript',
                                arguments: [{
                                        sequential: !1,
                                        scripts: [{ src: 'satellite-5cca6e3b64746d47f10028ef.js' }]
                                    }]
                            }
                        ]
                    },
                    {
                        name: 'opt-in',
                        trigger: [{
                                engine: 'sc',
                                command: 'trackLink',
                                arguments: [{
                                        type: 'o',
                                        linkName: 'opt-in. pageview already triggered',
                                        customSetup: function (t, a) {
                                            try {
                                                if (!0 === _satellite.settings.isStaging)
                                                    a.account = 'bmw.dev.hq.nsctestsuite';
                                                else {
                                                    var n = e.location.href;
                                                    n.indexOf('bmw') > -1 ? a.account = _satellite.getVar('adobeRSID_BMW') : n.indexOf('mini') > -1 && (a.account = _satellite.getVar('adobeRSID_MINI'));
                                                }
                                                a.events = 'event199', a.linkTrackVars = 'events', a.linkTrackEvents = 'event199', a.eVar109 = _satellite.buildDate + ';usePlugin:' + a.usePlugins + ';doPlugins:' + typeof a.doPlugins + ';Opt-in;';
                                            } catch (i) {
                                                _satellite.logError('Opt-in DCR ', i);
                                            }
                                        }
                                    }]
                            }]
                    },
                    {
                        name: 'bounce_timer',
                        trigger: [{
                                engine: 'sc',
                                command: 'trackLink',
                                arguments: [{
                                        customSetup: function (t, a) {
                                            if ('bmw.com.cn' == (i = _satellite.getVar('topLevelDomain')) || 1 == _satellite.settings.isStaging)
                                                if ('true' === _satellite.getVar('isRegulationAccepted')) {
                                                    (a = _satellite.getToolsByType('sc')[0].getS()).clearVars();
                                                    var n = _satellite.getVar('adobeRSID'), i = _satellite.getVar('topLevelDomain');
                                                    a.account = n, a.trackingServer = 'bmwag.d3.sc.omtrdc.net', a.cookieDomainPeriods = i.split('.').length;
                                                    var r = '', o = (_satellite.getVar('SessionID'), _satellite.getVar('hierarchyEvar')), s = _satellite.getVar('pa_pag_pageName'), l = _satellite.getVar('pageName'), c = _satellite.getVar('pa_pag_pageTitle'), u = _satellite.getVar('URL'), d = _satellite.getVar('URLNoParam'), g = _satellite.getVar('pa_pag_language'), f = _satellite.getVar('pathName'), p = _satellite.getVar('userMetaData'), m = _satellite.getVar('nonTechMetaData'), h = _satellite.getVar('nonTechMetaDataEvarAddon'), v = _satellite.getVar('techMetaData'), _ = _satellite.getVar('server'), y = _satellite.getVar('pa_cat_primaryCategory'), b = _satellite.getVar('pa_cat_subCategory01'), C = _satellite.getVar('pr_att_mmdr'), I = _satellite.getVar('jcrPathLevel1');
                                                    if (a.eVar1 = o, a.eVar2 = l, a.eVar3 = c, a.eVar4 = u, a.eVar7 = g, a.eVar12 = f, a.eVar14 = p, a.eVar15 = o, a.eVar44 = m + '~' + h, a.eVar45 = v + '~rn:Bounce Timer', a.eVar63 = d, a.server = _, a.prop13 = m, a.prop69 = 'Stage II', a.prop70 = a.visitor.getMarketingCloudVisitorID(), 'VCO' === y) {
                                                        a.eVar9 = C, a.eVar10 = C;
                                                        var D = d + '#/' + b;
                                                        a.eVar63 = D, a.eVar46 = b + '|' + s;
                                                    }
                                                    C && 'all-models' === I && (a.eVar8 = C, a.eVar10 = C);
                                                    var S = S || '';
                                                    try {
                                                        _satellite.getVar('performance timing sender'), 'undefined' != typeof e.perfTime.events && (a.eVar35 = e.perfTime.URL, a.eVar32 = e.perfTime.timesString, S = '' != S ? S + ',' + e.perfTime.events : e.perfTime.events);
                                                    } catch (V) {
                                                        _satellite.logger(V);
                                                    }
                                                    r += 'event611,', 'undefined' != typeof e.perfTime.events ? (a.linkTrackVars = 'server,eVar1,eVar2,eVar3,eVar4,eVar7,eVar12,eVar14,eVar16,eVar44,eVar45,eVar63,prop13,prop16,prop69,prop70,eVar9,eVar10,eVar46,eVar34,eVar35,eVar32', a.linkTrackEvents = 'event611,' + S, r += S + ',') : (a.linkTrackVars = 'server,eVar1,eVar2,eVar3,eVar4,eVar7,eVar12,eVar14,eVar16,eVar44,eVar45,eVar63,prop13,prop16,prop69,prop70,eVar9,eVar10,eVar46,eVar34', a.linkTrackEvents = 'event611,'), r = r.slice(0, -1), a.events = r;
                                                } else
                                                    a.abort = !0;
                                            else if ('true' === _satellite.getVar('isRegulationAccepted')) {
                                                (a = _satellite.getToolsByType('sc')[0].getS()).clearVars();
                                                n = _satellite.getVar('adobeRSID'), i = _satellite.getVar('topLevelDomain');
                                                a.account = n, a.trackingServer = 'bmwag.d3.sc.omtrdc.net', a.cookieDomainPeriods = i.split('.').length;
                                                r = '', _satellite.getVar('SessionID'), l = _satellite.getVar('pageName'), c = _satellite.getVar('pa_pag_pageTitle'), u = _satellite.getVar('URL'), C = _satellite.getVar('pr_att_mmdr'), d = _satellite.getVar('URLNoParam'), _satellite.getVar('ev_att_componentName'), b = _satellite.getVar('pa_cat_subCategory01'), _satellite.getVar('pa_att_template'), _satellite.getVar('functionList'), g = _satellite.getVar('pa_pag_language'), _ = _satellite.getVar('server');
                                                a.eVar2 = l, a.eVar3 = c, a.eVar4 = u, a.eVar45 = l, a.eVar7 = g, a.server = _, a.eVar63 = d, a.prop73 = 'Bounce Timer', a.prop69 = 'Stage II';
                                                (o = _satellite.getVar('hierarchyEvar')).split('|');
                                                a.eVar1 = o;
                                                S = S || '';
                                                try {
                                                    _satellite.getVar('performance timing sender'), 'undefined' != typeof e.perfTime.events && (a.eVar35 = e.perfTime.URL, a.eVar32 = e.perfTime.timesString, S = '' != S ? S + ',' + e.perfTime.events : e.perfTime.events);
                                                } catch (V) {
                                                    _satellite.logger(V);
                                                }
                                                r += 'event611,', a.prop72 = new Date().getTime(), r = r.slice(0, -1), 'undefined' != typeof e.perfTime.events ? (a.linkTrackVars = 'server,eVar1,eVar2,eVar3,eVar4,eVar7,eVar16,eVar45,eVar63,prop73,prop72,eVar9,eVar10,eVar32,eVar35,eVar36,eVar37,eVar40,eVar32,eVar58,eVar59,list3,eVar69,prop69', a.linkTrackEvents = 'event611,' + S, r += S + ',') : (a.linkTrackVars = 'server,eVar1,eVar2,eVar3,eVar4,eVar7,eVar16,eVar45,eVar63,prop73,prop72,eVar9,eVar10,eVar35,eVar36,eVar37,eVar40,eVar32,eVar58,eVar59,list3,eVar69,prop69', a.linkTrackEvents = 'event611'), a.events = r;
                                            } else
                                                a.abort = !0;
                                        }
                                    }]
                            }]
                    },
                    {
                        name: 'osm_pageload_datalayer_ready',
                        trigger: [{
                                engine: 'sc',
                                command: 'trackPageView',
                                arguments: [{
                                        customSetup: function (a, n) {
                                            function i() {
                                                if (!e.s_loadT) {
                                                    var t = new Date().getTime(), a = e.performance ? performance.timing : 0, n = a ? a.requestStart : e.inHeadTS || 0;
                                                    s_loadT = n ? Math.round((t - n) / 100) : '';
                                                }
                                                return s_loadT;
                                            }
                                            if ('true' === _satellite.getVar('isRegulationAccepted')) {
                                                n.getDaysSinceLastVisit = new Function('c', 'var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getTime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.setTime(ct+30*60*1000);f0=\'Cookies Not Supported\';f1=\'First Visit\';f2=\'More than 30 days\';f3=\'More than 7 days\';f4=\'Less than 7 days\';f5=\'Less than 1 day\';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);s.c_w(c+\'_s\',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);s.c_w(c+\'_s\',f2,es);}else if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);s.c_w(c+\'_s\',f3,es);}else if(d<7*day+1 && d>day){s.c_w(c,ct,e);s.c_w(c+\'_s\',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c_w(c+\'_s\',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+\'_s\');s.c_w(c+\'_s\',cval_ss,es);}}cval_s=s.c_r(c+\'_s\');if(cval_s.length==0) return f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s!=f5) return \'\';else return cval_s;'), n.split = new Function('l', 'd', 'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a'), n.getPreviousValue = new Function('v', 'c', 'el', 'var s=this,t=new Date,i,j,r=\'\';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,\',\');j=s.split(s.events,\',\');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,\'no value\',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,\'no value\',t);return r}'), n.apl = new Function('l', 'v', 'd', 'u', 'var s=this,m=0;if(!l)l=\'\';if(u){var i,n,a=s.split(l,d);for(i=0;i<a.length;i++){n=a[i];m=m||(u==1?(n==v):(n.toLowerCase()==v.toLowerCase()));}}if(!m)l=l?l+d+v:v;return l'), (n = _satellite.getToolsByType('sc')[0].getS()).clearVars(), _satellite.getVar('defaultVars'), _satellite.getVar('functionList');
                                                var r = _satellite.getVar('finalDataLayer'), o = '', s = _satellite.getVar('pageName'), l = _satellite.getVar('osm_referringUrl'), c = (_satellite.getVar('pr_att_mmdr'), _satellite.getVar('jcrPathLevel1')), u = _satellite.getVar('jcrPathLevel2'), d = (_satellite.getVar('jcrPathLevel3'), _satellite.getVar('URL'), _satellite.getVar('campaignParameter')), g = _satellite.getVar('pageInstanceId'), f = (_satellite.getVar('component'), _satellite.getVar('SessionID'), _satellite.getVar('hierarchy')), p = _satellite.getVar('navEvarForPage'), m = _satellite.getVar('hierarchyEvar').split('|');
                                                l = l.replace(/^.*?http/gi, 'http');
                                                var h = !0;
                                                if (_satellite.setVar('trackPage', h), h) {
                                                    n.eVar2 = n.eVar2.replace(/>\s*[\#]*[\!]*\s*>/gi, '>'), n.eVar3 = n.eVar3 || _satellite.getVar('osm_pageName'), n.eVar7 = 2 == n.eVar7.length ? n.eVar7 + '-' + _satellite.getVar('geoRegion') : n.eVar7, n.eVar14 = n.eVar14.replace(/^\~|~$/gi, ''), n.campaign = d, n.eVar6 = l;
                                                    var v = localStorage.getObj('bmw_osm_lastevent');
                                                    n.pageURL = n.eVar4, v ? (r.event.push(v), p = _satellite.getVar('navEvarForClicks'), localStorage.setObj('bmw_osm_lastevent', null)) : (e.osmPageloaded && (URLNoParam = _satellite.getVar('osm_referringUrl'), targetURL = _satellite.getVar('pa_pag_destinationUrl'), URLNoParam = URLNoParam.replace(RegExp('http[s]://', 'ig'), '').replace(/#\/|\/\d+[$|\/]*/gi, '/').replace(/\/\//gi, '/'), targetURL = targetURL.replace(RegExp('http[s]://', 'ig'), '').replace(/#\/|\/\d+[$|\/]*/gi, '/').replace(/\/\//gi, '/'), p = 'Internal Pagelink~Not available~Not available~Not available~' + URLNoParam + '~' + targetURL), e.osmPageloaded = 1), n.eVar16 = p;
                                                    var _ = n.getPreviousValue(n.eVar1, 'bmwdtm_hq_pcg');
                                                    n.eVar17 = _, n.eVar45 = n.eVar45 + '~rn: OSM Page Load', n.eVar47 = '+1', n.eVar48 = '+1', n.eVar62 = i(), (1 == r.page.attributes.virtualPage || e.virtualPage) && (n.eVar62 = 'Virtual Page'), e.virtualPage = 1, n.pageName = s, n.channel = c, n.referrer = t.referrer, n.hier1 = f, n.prop1 = m[0], n.prop2 = m[1], n.prop3 = m[2], n.prop4 = 'D=v4', n.prop6 = 'D=v6', n.prop7 = 'D=v7', n.prop15 = n.getDaysSinceLastVisit('s_lv');
                                                    var y = p.split('~');
                                                    n.prop16 = y[1] + '~' + y[2] + '~' + y[5], n.prop27 = 'D=v3';
                                                    var b = [
                                                            {
                                                                name: 'eVar4',
                                                                value: n.eVar4
                                                            },
                                                            {
                                                                name: 'eVar6',
                                                                value: n.eVar6
                                                            },
                                                            {
                                                                name: 'eVar16',
                                                                value: n.eVar16
                                                            },
                                                            {
                                                                name: 'prop16',
                                                                value: n.prop16
                                                            },
                                                            {
                                                                name: 'pageURL',
                                                                value: n.eVar4
                                                            }
                                                        ], C = new RegExp('/offer/([a-zA-Z0-9]*)|offerHash=([a-zA-Z0-9]*)', 'i');
                                                    for (var I in b)
                                                        if (C.test(b[I].value)) {
                                                            var D = C.exec(b[I].value), S = D[D.length - 1] || D[D.length - 2];
                                                            n[b[I].name] = b[I].value.replace(RegExp(S, 'ig'), 'offer-id');
                                                        }
                                                    if ('bmw.com.cn' == N && (n.eVar64 = _satellite.getVar('localCampaignVariable')), 'dsd-customer' == c && 'offer' == u) {
                                                        var V = e.location.href.split('/').pop();
                                                        localStorage.setItem('bmw_osm_offerPage', 'true');
                                                        var k = _satellite.getVar('osm_dataLayer').event, w = {};
                                                        for (var T in k) {
                                                            (a = k[T]).eventInfo.eventName.indexOf('buildtype') > -1 ? w.vehicleType = a.eventInfo.eventPoints : a.eventInfo.eventName.indexOf('financetype') > -1 ? w['finance-type'] = a.eventInfo.eventPoints : a.eventInfo.eventName.indexOf('offertype') > -1 ? w.recipient = a.eventInfo.eventPoints : a.eventInfo.eventName.indexOf('trackingCampaign') > -1 && (w.campaign = a.eventInfo.eventPoints);
                                                        }
                                                        var L = [
                                                            'bt:' + w.vehicleType,
                                                            'ft:' + w['finance-type'],
                                                            'lt:' + w.recipient,
                                                            'ca:' + w.campaign
                                                        ];
                                                        n.eVar70 = L.join('~').replace(/\~+/gi, '~'), o += 'event457:' + _satellite.getVar('SessionID') + V.dtm_hashCode() + ',';
                                                    }
                                                    'disclaimer' == u && _satellite.getVar('osm_referringUrl').indexOf('registration') > -1 && (o += 'event459,', sessionStorage.setItem('bmw_osm_isLoggedIn', 'true'), 'true' == localStorage.getItem('bmw_osm_offerPage') && (o += 'event461,', localStorage.setItem('bmw_osm_offerPage', null))), _satellite.getVar('osm_referringUrl').indexOf('dsd-customer') > -1 && 'dashboard' == u && 'true' != sessionStorage.getItem('bmw_osm_isLoggedIn') && (o += 'event460,event90,', sessionStorage.setItem('bmw_osm_isLoggedIn', 'true')), 'Contact bar' == y[2] ? o += 'event45,event46,' : 'Main navigation' == y[2] ? o += 'event49,' : -1 != y[2].indexOf('teaser') && (o += 'event44,');
                                                    var A = _satellite.getVar('pr_att_mmdr');
                                                    if ('dsd-customer' == c && A) {
                                                        var M = _satellite.getVar('s_products_vco_v52'), E = _satellite.getVar('pr_att_sellingPriceTotal');
                                                        '' == A && (A = 'not set'), '' == E && (E = 'not set');
                                                        var P = '';
                                                        P += ';' + A + ';1;' + E + ';;eVar52=' + M + ',', n.eVar51 = M, '' != P && (P = P.slice(0, -1), n.products = P);
                                                    }
                                                    if (g.indexOf('error-pool/') > -1) {
                                                        var O = 'SATELLITE: Error Page Load triggered by _satellite.track';
                                                        n.pageName = '', n.pageType = 'errorPage';
                                                    }
                                                }
                                                h || (n.abort = !0), 'true' == localStorage.getItem('sdsat_debug') && console.log(O), o = o.slice(0, -1), n.events = o, e.osmPreviousURL = e.osmPreviousURL || '', e.osmPreviousURL == e.location.href && (n.abort = !0), e.osmPreviousURL = e.location.href;
                                            } else {
                                                var R = _satellite.getVar('cookieList'), N = _satellite.getVar('topLevelDomain'), x = '.' + N;
                                                for (I = 0; I < R.length; I++)
                                                    t.cookie = R[I] + '=;expires=Thu, 01 Jan 1970 00:00:01 GMT ;domain=' + x + ';path=/';
                                                sessionStorage.removeItem('s_pec'), 'true' == localStorage.getItem('sdsat_debug') && console.log('SATELLITE: Page Load request triggerd by _satellite.track suppressed -- regulation not accepted by user'), n.abort = !0;
                                            }
                                        }
                                    }]
                            }]
                    }
                ],
                settings: {
                    trackInternalLinks: !0,
                    libraryName: 'satelliteLib-9933ee1409f0ca3bbf537432634188ef95c66c6a',
                    isStaging: !1,
                    allowGATTcalls: !1,
                    downloadExtensions: /\.(?:doc|docx|eps|jpg|png|svg|xls|ppt|pptx|pdf|xlsx|tab|csv|zip|txt|vsd|vxd|xml|js|css|rar|exe|wma|mov|avi|wmv|mp3|wav|m4v)($|\&|\?)/i,
                    notifications: !1,
                    utilVisible: !1,
                    domainList: [
                        'bmw.com.cn',
                        'bmwosm.com.cn',
                        'osmeretail.com'
                    ],
                    scriptDir: '7e530431ebc6040a493335ce44e66648adfeab7a/scripts/',
                    tagTimeout: 3000
                },
                data: {
                    URI: t.location.pathname + t.location.search,
                    browser: {},
                    cartItems: [],
                    revenue: '',
                    host: {
                        http: 'assets.adobedtm.com',
                        https: 'assets.adobedtm.com'
                    }
                },
                dataElements: {
                    adobeRSID: {
                        customJS: function () {
                            try {
                                var e = 'noRSID', t = _satellite.getVar('topLevelDomain'), a = {
                                        'bmw.ca': 'bmw.ca.website',
                                        'bmw.pt': 'bmw.pt.website',
                                        'bmw-int2i.com': 'bmwstage2dev',
                                        'bmw.com.mx': 'bmw.com.mx.website',
                                        'bmw.co.id': 'bmw.co.id.website',
                                        'pml-bmw.com.sg': 'bmw.sg.website',
                                        'munichauto.com.sg': 'bmw.sg.munichauto',
                                        'bmw.co.kr': 'bmw.co.kr.website',
                                        'bmw.ie': 'bmw.ie.website',
                                        'bmw.com.br': 'bmw.com.br.website',
                                        'bmw.com.pa': 'bmw.com.pa.website',
                                        'bmw.com.py': 'bmw.com.py.website',
                                        'bmw.com.co': 'bmw.com.co.website',
                                        'bmw.com.pe': 'bmw.com.pe.website',
                                        'bmw.com.uy': 'bmw.com.uy.website',
                                        'bmw.com.gt': 'bmw.com.gt.website',
                                        'bmw.cl': 'bmw.cl.website',
                                        'bmw.co.cr': 'bmw.co.cr.website',
                                        'bmw.com.bo': 'bmw.com.bo.website',
                                        'bmw.com.ec': 'bmw.com.ec.website',
                                        'bmw.com.sv': 'bmw.com.sv.website',
                                        'bmw.com.ni': 'bmw.com.ni.website',
                                        'bmw.com.do': 'bmw.com.do.website',
                                        'bmw.hn': 'bmw.hn.website',
                                        'bmw.com.ve': 'bmw.com.ve.website',
                                        'bmw.cw': 'bmw.cw.website',
                                        'bmw.bs': 'bmw.bs.website',
                                        'bmw.bb': 'bmw.bb.website',
                                        'bmw.com.ky': 'bmw.com.ky.website',
                                        'bmwjamaica.com': 'bmwjamaica.com.website',
                                        'bmw.lc': 'bmw.lc.website',
                                        'bmw.tt': 'bmw.tt.website',
                                        'bmw.ht': 'bmw.ht.website',
                                        'bmw.com.ar': 'bmw.com.ar.website',
                                        'bmwlat.com': 'bmwlat.com.website',
                                        'bmw.co.za': 'bmw.co.za.website',
                                        'bmw.com.au': 'bmw.com.au.website',
                                        'bmw.in': 'bmw.in.website',
                                        'bmw.bg': 'bmw.bg.website',
                                        'bmw.pl': 'bmw.pl.website',
                                        'bmw.gr': 'bmw.gr.website',
                                        'bmw.hu': 'bmw.hu.website',
                                        'bmw.sk': 'bmw.sk.website',
                                        'bmw.si': 'bmw.si.website',
                                        'bmw.ro': 'bmw.ro.website',
                                        'bmw.cz': 'bmw.cz.website',
                                        'bmw.jp': 'bmw.jp.website',
                                        'bmw.com.tw': 'bmw.com.tw.website',
                                        'bmw.com.au': 'bmw.com.au.website',
                                        'bmw.com.tr': 'bmw.com.tr.website',
                                        'bmw.co.jp': 'bmw.co.jp.website',
                                        'bmw.no': 'bmw.no.website',
                                        'bmw.fi': 'bmw.fi.website',
                                        'bmwhk.com': 'bmw.hk.website',
                                        'bmw.dk': 'bmw.dk.website',
                                        'bmw.se': 'bmw.se.website',
                                        'bmw.ru': 'bmw.ru.website',
                                        'bmw.lt': 'bmw.lt.website',
                                        'bmw.lv': 'bmw.lv.website',
                                        'bmw.ee': 'bmw.ee.website',
                                        'next100.bmw': 'bmw.hq.next100.bmw',
                                        'bmw.co.nz': 'bmw.co.nz.website',
                                        'trgovec.bmw': 'bmw.si.trgovec.bmw',
                                        'testnavoznja.bmw': 'bmw.si.testnavoznja.bmw',
                                        'bmw-asia.com': 'bmwasia.com.website',
                                        'bmw.com.ph': 'bmw.com.ph.website',
                                        'bmw.lk': 'bmw.lk.website',
                                        'bmw.vn': 'bmw.vn.website',
                                        'bmw-eg.com': 'bmweg.com.website',
                                        'bmw.com.my': 'bmw.com.my.website',
                                        'bmw.co.th': 'bmw.co.th.website',
                                        'bmw.mu': 'bmw.mu.website',
                                        'bmw.com.al': 'bmw.com.al.website',
                                        'bmw.am': 'bmw.am.website',
                                        'bmw.ly': 'bmw.ly.website',
                                        'bmw.co.il': 'bmw.co.il.website',
                                        'bmw.is': 'bmw.is.website',
                                        'bmw.cc': 'bmw.cc.website',
                                        'bmw.com.ge': 'bmw.com.ge.website',
                                        'bmw.com.bd': 'bmw.com.bd.website',
                                        'bmw.com.bn': 'bmw.com.bn.website',
                                        'bmwmyanmar.com': 'bmwmyanmar.com.website',
                                        'bmw.fr': 'bmw.fr.website',
                                        'bmw.ua': 'bmw.ua.website',
                                        'bmw.it': 'bmw.it.website',
                                        'bmw.md': 'bmw.md.website',
                                        'bmw-iraq.com': 'bmwiraq.com.website',
                                        'bmw-lebanon.com': 'bmwlebanon.com.website',
                                        'bmw-pakistan.com': 'bmwpakistan.com.website',
                                        'bmw-me.com': 'bmwme.com.website',
                                        'bmw.be': 'bmw.be.website',
                                        'bmw.lu': 'bmw.lu.website',
                                        'bmw-abudhabi.com': 'bmwabudhabi.com.website',
                                        'bmw-dubai.com': 'bmwdubai.com.website',
                                        'bmw-saudiarabia.com': 'bmwsaudiarabia.com.website',
                                        'bmw-qatar.com': 'bmwqatar.com.website',
                                        'bmw-oman.com': 'bmwoman.com.website',
                                        'bmw-kuwait.com': 'bmwkuwait.com.website',
                                        'bmw.com.cy': 'bmw.com.cy.website',
                                        'bmw.bm': 'bmw.bm.website',
                                        'bmw.com.mt': 'bmw.com.mt.website',
                                        'bmw.de': 'bmw.de.website',
                                        'bmw.at': 'bmw.at.website',
                                        'bmw.ch': 'bmw.ch.website',
                                        'bmw-lao.la': 'bmwlao.la.website',
                                        'bmw-jordan.com': 'bmwjordan.com.website',
                                        'bmw-bahrain.com': 'bmwbahrain.com.website',
                                        'bmw.ps': 'bmw.ps.website',
                                        'bmw-yemen.com': 'bmwyemen.com.website',
                                        'bmw.ma': 'bmw.ma.website',
                                        'bmw-tahiti.com': 'bmwtahiti.com.website',
                                        'bmw-antilles.fr': 'bmwantilles.fr.website',
                                        'bmw.dz': 'bmw.dz.website',
                                        'bmw.re': 'bmw.re.website',
                                        'bmw-tunisia.com': 'bmwtunisia.com.website',
                                        'bmw.by': 'bmw.by.website',
                                        'bmw.kz': 'bmw.kz.website',
                                        'bmw.az': 'bmw.az.website',
                                        'bmw.ba': 'bmw.ba.website',
                                        'bmw.hr': 'bmw.hr.website',
                                        'bmw.nc': 'bmw.nc.website',
                                        'bmw.es': 'bmw.es.website',
                                        'bmw.nl': 'bmw.nl.website',
                                        'bmw.com.cn': 'bmw.com.cn.website',
                                        'bmw.bm': 'bmw.bm.website',
                                        'bmw-voli.me': 'bmwvoli.me.website',
                                        'bmw.rs': 'bmw.rs.website',
                                        'bmw.com.mk': 'bmw.com.mk.website',
                                        'bmw.in': 'bmw.in.website'
                                    };
                                'undefined' != typeof a[t] && (e = a[t]);
                                var n = _satellite.getVar('jcrPathLevel1');
                                return RegExp('bmwgroup.net|bmwgroup.com').test(t) && 'dsd-dealer' == n.toLowerCase() && (e = 'bmw.com.cn.website'), 'noRSID' != e && 'trgovec.bmw' != t && 'testnavoznja.bmw' != t && 'next100.bmw' != t && 'bmw.com.cn' != t && (e += ',bmw.dev.hq.globalwebsites'), !0 === _satellite.settings.isStaging ? e = 'bmw.dev.hq.nsctestsuite' : 'noRSID' == e && (s.abort = !0), e;
                            } catch (i) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    adobeRSID_BMW: {
                        customJS: function () {
                            try {
                                if (!0 === _satellite.settings.isStaging)
                                    return 'bmw.dev.hq.nsctestsuite';
                                var e;
                                switch (_satellite.getVar('topLevelDomain')) {
                                case 'bmw.com.cn':
                                    e = 'bmw.com.cn.website';
                                    break;
                                case 'bmw.co.uk':
                                    e = 'bmw.uk.website';
                                    break;
                                case 'bmw.de':
                                    e = 'bmw.de.website';
                                    break;
                                case 'bmw.in':
                                    e = 'bmw.in.website';
                                    break;
                                case 'bmwbank.de':
                                    e = 'bmw.de.website';
                                    break;
                                case 'bmw.co.kr':
                                case 'bmw.kr':
                                    e = 'bmw.co.kr.website';
                                    break;
                                case 'bmw.co.th':
                                    e = 'bmw.co.th.website';
                                    break;
                                case 'bmw.co.jp':
                                    e = 'bmw.co.jp.website';
                                    break;
                                case 'bmw.com.sg':
                                case 'accessbybmw.com.sg':
                                    e = 'bmwasia.com.website';
                                    break;
                                case 'bmwgroup.com':
                                    var a = t.location.hostname;
                                    a.indexOf('onlinesales-uk') > -1 ? e = 'bmw.uk.website' : a.indexOf('onlinesales-cn') > -1 ? e = 'bmw.com.cn.website' : a.indexOf('onlinesales-de') > -1 ? e = 'bmw.de.website' : a.indexOf('onlinesales-kr') > -1 && (e = 'bmw.co.kr.website');
                                    break;
                                case 'bmw.ie':
                                    e = 'bmw.ie.website';
                                }
                                return e += ',bmw.dev.hq.globalwebsites';
                            } catch (n) {
                                _satellite.logError('DE:adobeRSID_BMW ', n);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    adobeRSID_BMW_eRetail: {
                        customJS: function () {
                            try {
                                return !0 === _satellite.settings.isStaging ? 'bmweretail.eretail.uk.int' : 'bmweretail.eretail.uk.prod';
                            } catch (e) {
                                _satellite.logError('DE:adobeRSID_BMW_eRetail ', e);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    adobeRSID_Cluster: {
                        customJS: function () {
                            try {
                                var t = e.location.host || e.location.hostname;
                                return 1 == (t.indexOf('efinance.bmwbank.de') > -1 || t.indexOf('efinance-i.bmwbank.de') > -1 || t.indexOf('efinance-i2.bmwbank.de') > -1 || t.indexOf('efinance-directentry-i.bmwbank.de') > -1 || t.indexOf('efinance-directentry') > -1) ? 1 == _satellite.settings.isStaging ? 'bmw.dev.hq.efinance' : 'bmw.hq.efinance.de' : 1 == _satellite.settings.isStaging ? 'bmwclusterdigitalcommerce.dev.hq.global' : 'bmwclusterdigitalcommerce.prod.hq.global';
                            } catch (a) {
                                _satellite.logError('DE:adobeRSID_Cluster', a);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    adobeRSID_MINI: {
                        customJS: function () {
                            try {
                                return !0 === _satellite.settings.isStaging ? 'miniminidigitalukstaging' : 'mini.ie' == _satellite.getVar('topLevelDomain') ? 'mini.ie.digitalwebsite,mini.globalsuite' : 'minidigitalukprod,mini.globalsuite';
                            } catch (e) {
                                _satellite.logError('DE:adobeRSID_MINI ', e);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    campaignParameter: {
                        customJS: function () {
                            function e(e) {
                                e = e.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                                var t = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(location.href);
                                return null === t ? '' : decodeURIComponent(t[1].replace(/\+/g, ' '));
                            }
                            try {
                                for (var t = ['tl'], a = '', n = 0; n < t.length && !(a = e(t[n])); n++);
                                return a;
                            } catch (i) {
                                _satellite.notify('error in campaign parameter de' + i);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    carModel: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('hierarchy').split('|')[2];
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    carSeries: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('hierarchy').split('|')[1];
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    cartInformation_DC: {
                        customJS: function () {
                            try {
                                var e, t = _satellite.getVar('finalDataLayer').cart, a = t.price || '', n = t && 'number' == typeof t.length ? t.length > 0 ? t[t.length - 1] : t[t.length] : [];
                                return e = '', '' != ((n.price || '').currency || '') && (e += '~xc:' + ((n.price || '').currency || '')), '' != (t.cartID || '') && (e += '~xi:' + (t.cartID || '')), '' != (a.basePrice || '') && (e += '~xb:' + (a.basePrice || '')), '' != (a.voucherCode || '') && (e += '~xv:' + (a.voucherCode || '')), '' != (a.voucherDiscount || '') && (e += '~xd:' + (a.voucherDiscount || '')), '' != (a.taxRate || '') && (e += '~xt:' + (a.taxRate || '')), '' != (a.cartTotal || '') && (e += '~xp:' + (a.cartTotal || '')), '' != (n.quantity || '') && (e += '~xq:' + (n.quantity || '')), e;
                            } catch (i) {
                                _satellite.notify('cartInformation_DC dataElement', i);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    'clickTracking_3.0': {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('dataLayer_event_3.0'), t = _satellite.getVar('dataLayer_page_3.0'), a = '', n = '';
                                return '' != ((e.eventInfo || '').eventAction || '') && (a += n = (n = (e.eventInfo || '').eventAction || '').indexOf('email') > -1 ? n.replace('email', 'e m a i l') : n.indexOf('password') > -1 ? n.replace('password', 'p a s s w o r d') : n), '' != ((e.eventInfo || '').eventName || '') && (a += '~' + (n = (n = (e.eventInfo || '').eventName || '').indexOf('email') > -1 ? n.replace('email', 'e m a i l') : n.indexOf('password') > -1 ? n.replace('password', 'p a s s w o r d') : n)), '' != ((e.category || '').primaryCategory || '') && (a += '~' + (n = (n = (e.category || '').primaryCategory || '').indexOf('email') > -1 ? n.replace('email', 'e m a i l') : n.indexOf('password') > -1 ? n.replace('password', 'p a s s w o r d') : n)), '' != t.pageInfo.destinationURL && (n = (n = t.pageInfo.destinationURL).indexOf('email') > -1 ? n.replace('email', 'e m a i l') : n.indexOf('password') > -1 ? n.replace('password', 'p a s s w o r d') : n, a += '' != a ? '~~' + n : '~~~~' + n), '' != ((e.eventInfo || '').effect || '') && (n = (n = (e.eventInfo || '').effect || '').indexOf('email') > -1 ? n.replace('email', 'e m a i l') : n.indexOf('password') > -1 ? n.replace('password', 'p a s s w o r d') : n, a += '' != a ? '~~' + n : '~~~~~~' + n), a;
                            } catch (i) {
                                _satellite.logError(i);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    component: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('finalDataLayer').component;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    componentInformation_DC: {
                        customJS: function () {
                            try {
                                var e, t = _satellite.getVar('dataLayer_component_3.0'), a = _satellite.getVar('dataLayer_page_3.0'), n = t.category;
                                return e = '', '' != ((t.componentInfo || '').componentName || '') && (e += '~sn:' + ((t.componentInfo || '').componentName || '')), n && '' != (n.primaryCategory || '') && (e += '~sc:' + (n.primaryCategory || '')), n && '' != (n.subCategory1 || '') && (e += '~sx:' + (n.subCategory1 || '')), n && '' != (n.componentType || '') && (e += '~st:' + (n.componentType || '')), '' != ((a.pageInfo || '').version || '') && (e += '~sv:' + ((a.pageInfo || '').version || '')), _satellite.notify('Mapping: ~sn: -> digitalData.component[0].componentInfo.componentName \n ~sc: -> digitalData.component[0].category.primaryCategory \n ~sx: -> digitalData.component[0].category.subCategory1 \n ~st: -> digitalData.component[0].category.componentType ~sv: -> digitalData.page.pageInfo.version'), e;
                            } catch (i) {
                                _satellite.notify('componentInformation dataElement -', i);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    consentMap: {
                        customJS: function () {
                            try {
                                var e = 'true' == _satellite.getVar('splitConsentEnabled');
                                return {
                                    AdobeAnalytics: 'AdobeAnalytics',
                                    Target: 'AdobeTargetAnalytics',
                                    AAM: 'AdobeAudienceManager_DMP',
                                    PerformanceStatistics: 'performanceStatistics',
                                    Others: e ? 'tmp_advertising' : 'advertising',
                                    analytics_category: e ? 'AdobeAnalytics' : 'analytics',
                                    advertising_category: e ? 'tmp_advertising' : 'advertising',
                                    functional_category: e ? 'tmp_functional' : 'functional',
                                    UsabillaSurvey: 'UsabillaSurvey'
                                };
                            } catch (t) {
                                _satellite.logger.error('Error in DE:consentMap', t);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    'contentGroupHierarchy_3.0': {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('dataLayer_component_3.0'), t = _satellite.getVar('dataLayer_page_3.0').pageInfo, a = e.category, n = '';
                                return '' != (e.componentInfo.componentName || '') && (n += e.componentInfo.componentName), n += '|', '' != (a.subCategory2 || a.subCategory02 || '') && (n += a.subCategory2 || a.subCategory02), n += '|', '' != (a.subCategory1 || a.subCategory01 || '') && (n += a.subCategory1 || a.subCategory01), n += '||', '' != (t.pageName || '') && (n += t.pageName || ''), '' != (t.pageID || t.pageId || '') && (n += '~pi:' + (t.pageID || t.pageId || '')), '' != (t.breadCrumbs || '') && (n += '~bc:' + (t.breadCrumbs || '')), n;
                            } catch (i) {
                                _satellite.logError(i);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    contentHierarchy_DC: {
                        customJS: function () {
                            try {
                                var t, a = _satellite.getVar('dataLayer_page_3.0'), n = a.pageInfo || '', i = a.category || '', r = a.attributes || '';
                                return t = '', '' != (n.pageID || '') && (t += '~hi:' + (n.pageID || '')), '' != (n.pageName || '') && (t += '~hn:' + (n.pageName || '')), '' != (i.primaryCategory || '') && (t += '~hc:' + (i.primaryCategory || '')), '' != (i.subCategory1 || '') && (t += '~hx:' + (i.subCategory1 || '')), '' != (i.subCategory2 || '') && (t += '~hy:' + (i.subCategory2 || '')), '' != (i.subCategory3 || '') && (t += '~hz:' + (i.subCategory3 || '')), '' != (i.pageType || '') && (t += '~ht:' + (i.pageType || '')), '' != (r.brand || '') && (t += '~hb:' + (r.brand || '')), t += '~hd:' + e.location.hostname, _satellite.notify('Mapping: ~hi: -> digitalData.page.pageInfo.pageID \n ~hn: -> digitalData.page.pageInfo.pageName \n ~hc: -> digitalData.page.category.primaryCategory \n ~hx: -> digitalData.page.category.subCategory1 ~hy: -> digitalData.page.category.subCategory2 \n ~hz: -> digitalData.page.category.subCategory3 ~ht: -> digitalData.page.category.pageType ~hb: -> digitalData.page.attributes.brand'), t;
                            } catch (o) {
                                _satellite.notify('contentHierarchy dataElement -', o);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    cookieConsentForTarget: {
                        customJS: function () {
                            try {
                                var e = 'true';
                                return function (e) {
                                    var a = new RegExp(e + '=([^;]+)').exec(t.cookie);
                                    return null != a ? decodeURIComponent(a[1]) : null;
                                }('cc_consentCookie').indexOf('REJECTED') > -1 && (e = 'false'), e;
                            } catch (a) {
                                return 'false';
                            }
                        },
                        storeLength: 'pageview'
                    },
                    cookieList: {
                        customJS: function () {
                            for (var e, a = [
                                        's_vnum',
                                        's_cc',
                                        's_getNewRepeat',
                                        's_invisit',
                                        's_lv',
                                        's_lv_s',
                                        's_fid',
                                        's_ptc',
                                        'bmwdtm_hq_sid',
                                        'bmwdtm_hq_cc',
                                        'bmwdtm_hq_pp',
                                        'bmwdtm_hq_pcg',
                                        'bmwdtm_hq_epv',
                                        'bmwdtm_hq_tldc',
                                        'bmwdtm_hq_csevent',
                                        'AMCV_B52D1CFE5330949C0A490D45%40AdobeOrg',
                                        'AMCVS_B52D1CFE5330949C0A490D45%40AdobeOrg',
                                        'c5b3573c15461c7fb62c3c6af53d7ce46d446a36',
                                        'bmwdtm_za_channel',
                                        'bmwdtm_za_model',
                                        'bmwdtm_za_date',
                                        'bmwdtm_cs_utm',
                                        'bmwdtm_cs_utm_req',
                                        'bmwdtm_tr_mayfestProgrammatic',
                                        'bmwdtm_tr_configuratorLandingTime',
                                        'bmwdtm_ru_landingTime',
                                        'bmwdtm_cn_campaigndata',
                                        'bmwdtm_hq_userdata',
                                        'psyma_participation',
                                        'daktela_chat_email',
                                        'daktela_chat_session',
                                        'daktela_chat_title',
                                        '_em_t',
                                        '_em_v',
                                        '_em_vt',
                                        'nmfirstparty',
                                        '_mtruid',
                                        '__lc.visitor_id',
                                        'lc_window_state',
                                        '__telemetric.v',
                                        '__telemetric.s',
                                        'bmnet',
                                        's3optout',
                                        's3timer',
                                        's3_AE',
                                        's3_AESess',
                                        's3_AR',
                                        's3_ARSess',
                                        's3noae',
                                        's3sess',
                                        'evo5_popin_instance',
                                        'osmdtm_perf',
                                        'visitCount',
                                        'time_spent_adhoc',
                                        'frameCookieMessage',
                                        'gpv_Page'
                                    ], n = t.cookie.split(';'), i = 0; i < n.length; i++)
                                (e = n[i].split('=')[0].substr(1)).includes('_s3') && (a[a.length] = e), e.includes('nmfp') && (a[a.length] = e);
                            return a;
                        },
                        storeLength: 'pageview'
                    },
                    'dataLayer_component_3.0': {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                return 'object' == typeof e.component && e.component.length == a ? e.component : e.component[e.component.length - 1];
                            } catch (t) {
                                _satellite.logError(t);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    'dataLayer_dealer_3.0': {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                return e && e.dealer ? e.dealer[e.dealer.length - 1] : '';
                            } catch (t) {
                                _satellite.logError(t);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    'dataLayer_event_3.0': {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                return e && e.event ? e.event[e.event.length - 1] : {};
                            } catch (t) {
                                _satellite.logError(t);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    'dataLayer_linkedproduct_3.0': {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('dataLayer_product_3.0');
                                return e.linkedProduct && e.linkedProduct.length > 0 ? e.linkedProduct[e.linkedProduct.length - 1] : '';
                            } catch (t) {
                                _satellite.logError(t);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    'dataLayer_page_3.0': {
                        customJS: function () {
                            try {
                                return _satellite.getVar('finalDataLayer').page;
                            } catch (e) {
                                _satellite.logError(e);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    'dataLayer_product_3.0': {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                if (!(e.product && e.product.length > 0))
                                    return e.product;
                                if ('onlinevehiclesales.bmw.co.uk' != t.location.hostname && 'bmwmini-dsd-staging.thisissecure.net' != t.location.hostname)
                                    return e.product[e.product.length - 1];
                                if (e.product[e.product.length - 1] && e.product[e.product.length - 1].category && e.product[e.product.length - 1].category.productType)
                                    return 'vehicle' == e.product[e.product.length - 1].category.productType ? e.product[e.product.length - 1] : e.product[0];
                            } catch (a) {
                                _satellite.logError(a);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    dataLayer_user: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('finalDataLayer').user[_satellite.getVar('finalDataLayer').user.length - 1];
                            } catch (e) {
                                _satellite.logError(e);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    'dealer_3.0': {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('dataLayer_dealer_3.0'), t = e.dealerInfo || '', a = '', n = '';
                                return t.outletID && '' != t.outletID && ('' != (t.outletID || '') && (a += '~oi:' + (t.outletID || '')), '' != (t.dealerID || '') && (a += '~di:' + (t.dealerID || '')), '' != (t.dealerName || '') && (a += '~dn:' + (t.dealerName || '')), '' != (t.dealerGroup || '') && (a += '~dg:' + (t.dealerGroup || '') + '~ut:~pi:')), '' != (t.dealerID || '') && (a += '~di:' + (t.dealerID || '')), '' != ((e.attributes || '').linkedProduct || '') && (a += '~pi:' + (((n = (n = (e.attributes || '').linkedProduct || '')[n.length - 1]).productInfo || '').productID || '')), a;
                            } catch (i) {
                                _satellite.logError(i);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    dealerID: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer'), t = e.dealer.length - 1;
                                return e.dealer[t].dealerInfo.dealerID;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    dealerName: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer'), t = e.dealer.length - 1;
                                return e.dealer[t].dealerInfo.dealerName;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    defaultVars: {
                        customJS: function () {
                            try {
                                e.s = _satellite.getToolsByType('sc')[0].getS(), s.clearVars();
                                var t = _satellite.getVar('adobeRSID'), a = _satellite.getVar('topLevelDomain');
                                s.account = t, s.trackingServer = 'bmwag.d3.sc.omtrdc.net', s.cookieDomainPeriods = a.split('.').length, s.events = 'event998,';
                                _satellite.getVar('SessionID');
                                var n = _satellite.getVar('hierarchyEvar'), i = (_satellite.getVar('pa_pag_pageName'), _satellite.getVar('pageName')), r = _satellite.getVar('pa_pag_pageTitle'), o = _satellite.getVar('URL'), l = _satellite.getVar('URLNoParam'), c = _satellite.getVar('pa_pag_language'), u = _satellite.getVar('pathName'), d = _satellite.getVar('userMetaData'), g = _satellite.getVar('nonTechMetaData'), f = _satellite.getVar('nonTechMetaDataEvarAddon'), p = _satellite.getVar('techMetaData'), m = _satellite.getVar('server'), h = _satellite.getVar('pr_att_mmdr'), v = _satellite.getVar('jcrPathLevel1'), _ = _satellite.getVar('languageAndMarketWorkaround');
                                s.eVar1 = n, s.eVar2 = i, s.eVar3 = r, s.eVar4 = o, s.eVar7 = c || _, s.eVar12 = u, s.eVar14 = d, s.eVar44 = g + '~' + f, s.eVar45 = p, s.eVar63 = l, s.server = m, s.prop13 = g, s.prop69 = 'Stage II', 'undefined' != typeof s.visitor && 'undefined' != typeof s.visitor.getMarketingCloudVisitorID && (s.prop70 = s.visitor.getMarketingCloudVisitorID()), h && 'all-models' === v && (s.eVar8 = h, s.eVar10 = h);
                                var y = _satellite.getVar('dealerID'), b = _satellite.getVar('dealerName');
                                b && y && (s.eVar41 = b + '|' + y), s.getTimeParting = new Function('h', 'z', 'var s=this,od;od=new Date(\'1/1/2000\');if(od.getDay()!=6||od.getMonth()!=0){return\'Data Not Available\';}else{var H,M,D,U,ds,de,tm,da=[\'Sunday\',\'Monday\',\'Tuesday\',\'Wednesday\',\'Thursday\',\'Friday\',\'Saturday\'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tpDST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+\'/\'+d.getFullYear());de=new Date(dso[1]+\'/\'+d.getFullYear());if(h==\'n\'&&d>ds&&d<de){z=z+1;}else if(h==\'s\'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getTimezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d.getMinutes();M=(M<10)?\'0\'+M:M;D=d.getDay();if(M>30){M=\'30\'}else{M=\'00\'}U=\' AM\';if(H>=12){U=\' PM\';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+\':\'+M+U;return(tm+\'|\'+D);}');
                                var C = s.getTimeParting('n');
                                split = C.split('|');
                                var I = -new Date().getTimezoneOffset() / 60, D = s.getTimeParting('n', I);
                                s.prop14 = split[0] + '~' + D.split('|')[0], s.linkTrackVars = 'eVar1,eVar2,eVar3,eVar4,eVar7,eVar8,eVar10,eVar12,eVar14,eVar41,eVar44,eVar45,eVar63,server,prop13,prop14,prop69,prop70,', s.events += 'event999,', s.linkTrackEvents = 'event998,event999,';
                            } catch (S) {
                                s.events = 'event997,', s.linkTrackEvents = 'event997,';
                            }
                        },
                        storeLength: 'pageview'
                    },
                    'distributionType_3.0': {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('dataLayer_product_3.0'), a = (e.productInfo || '').manufacturer || '';
                                if (!a) {
                                    var n = t.location.href;
                                    n.includes('dsd-dealer') ? a = 'ALL' : n.includes('dsd-customer') && (n.includes('bmw') ? a = 'BMW' : n.includes('mini') && (a = 'MINI'));
                                }
                                var i = _satellite.getVar('dataLayer_page_3.0').pageInfo.geoRegion || '', r = (e.category || '').primaryCategory || '', o = e && e.category && e.category.subCategory01 ? e.category.subCategory01 : e && e.category && e.category.subCategory1 ? e.category.subCategory1 : '', s = '';
                                return '' != a && (s += '~bd:' + a), '' != i && (s += '~mt:' + i), '' != r && (s += '~dt:' + r), '' != o && (s += '~pt:' + o), s;
                            } catch (l) {
                                _satellite.logError(l);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    efos_solutionspecific_eventsmapping: {
                        customJS: function () {
                        },
                        storeLength: 'pageview'
                    },
                    efos_solutionSpecific_NSC: {
                        customJS: function () {
                            try {
                                var e = '', t = '', a = '';
                                return 'object' == typeof _satellite.getVar('dataLayer_product_3.0').linkedProduct && _satellite.getVar('dataLayer_product_3.0').linkedProduct.length > 0 ? (t = (e = (e = _satellite.getVar('dataLayer_product_3.0').linkedProduct)[e.length - 1]).category, '' != (e = e.attributes.solutionSpecific).efinBond && (a += '~efb:' + e.efinBond), '' != e.efinDeposit && (a += '~efd:' + e.efinDeposit), '' != e.efinDownPayment && (a += '~edp:' + e.efinDownPayment), '' != e.efinMileage && (a += '~efm:' + e.efinMileage), '' != e.efinMonthlyInstallment && (a += '~emi:' + e.efinMonthlyInstallment), '' != e.efinTerm && (a += '~est:' + e.efinTerm), '' != e.efinType && (a += '~esy:' + e.efinType), '' != t.productType && (a += '~ept:' + t.productType), '' != t.subCategory1 && (a += '~esc:' + t.subCategory1), a) : a;
                            } catch (n) {
                                _satellite.notify('Error: EFOS solutionSpecific values are missing', n);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_att_componentHeadline: {
                        customJS: function () {
                            try {
                                for (var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1; t >= 0; t--) {
                                    if (void 0 !== e.event[t].eventInfo.eventName)
                                        break;
                                }
                                return (e.event[t].attributes.relatedComponent || e.event[t].attributes.relatedPageComponent).componentInfo.componentHeadline;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_att_componentName: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1;
                                return (e.event[t].attributes.relatedComponent || e.event[t].attributes.relatedPageComponent).componentInfo.componentName;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_att_dealerID: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1;
                                return e.event[t].attributes.dealerID;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_att_dealerName: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1;
                                return e.event[t].attributes.dealerName.replace(/\|/g, ',');
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_att_fdo_calculations: {
                        customJS: function () {
                            try {
                                for (var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1, a = _satellite.getVar('financeProductIndex'), n = e.event[t].attributes.financeDataObject.vehicle.calculations[a].parameterValues, i = '', r = '', o = '', s = '', l = '', c = '', u = '', d = '', g = '', f = '', p = '', m = '', h = '', v = '', _ = '', y = n.length - 1, b = 0; b <= y; b++) {
                                    switch (n[b].parameterId) {
                                    case 'GrossListPrice':
                                        u = 'event216=' + n[b].value + ',';
                                        break;
                                    case 'GrossPurchasePrice':
                                        d = 'event217=' + n[b].value + ',';
                                        break;
                                    case 'MonthlyInstalment':
                                        m = 'event221=' + n[b].value + ',';
                                        break;
                                    case 'BalloonAmount':
                                        i = 'event210=' + n[b].value + ',';
                                        break;
                                    case 'BalloonPercentage':
                                        r = 'event211=' + n[b].value + ',';
                                        break;
                                    case 'Term':
                                        _ = 'event224=' + n[b].value + ',';
                                        break;
                                    case 'ResidualValueAmount':
                                        h = 'event222=' + n[b].value + ',';
                                        break;
                                    case 'DepositAmount':
                                        o = 'event212=' + n[b].value + ',';
                                        break;
                                    case 'DepositPercentage':
                                        s = 'event213=' + n[b].value + ',';
                                        break;
                                    case 'DownPaymentAmount':
                                        l = 'event214=' + n[b].value + ',';
                                        break;
                                    case 'DownPaymentPercent':
                                        c = 'event215=' + n[b].value + ',';
                                        break;
                                    case 'InterestEffective':
                                        g = 'event218=' + n[b].value + ',';
                                        break;
                                    case 'NominalInterest':
                                        f = 'event219=' + n[b].value + ',';
                                        break;
                                    case 'Mileage':
                                        p = 'event220=' + n[b].value + ',';
                                        break;
                                    case 'ResidualValuePercent':
                                        v = 'event223=' + n[b].value + ',';
                                    }
                                    switch (n[b].definiteCode) {
                                    case 'GrossListPrice':
                                        u = 'event216=' + n[b].value + ',';
                                        break;
                                    case 'GrossPurchasePrice':
                                        d = 'event217=' + n[b].value + ',';
                                        break;
                                    case 'MonthlyInstalment':
                                        m = 'event221=' + n[b].value + ',';
                                        break;
                                    case 'BalloonAmount':
                                        i = 'event210=' + n[b].value + ',';
                                        break;
                                    case 'BalloonPercentage':
                                        r = 'event211=' + n[b].value + ',';
                                        break;
                                    case 'Term':
                                        _ = 'event224=' + n[b].value + ',';
                                        break;
                                    case 'ResidualValueAmount':
                                        h = 'event222=' + n[b].value + ',';
                                        break;
                                    case 'DepositAmount':
                                        o = 'event212=' + n[b].value + ',';
                                        break;
                                    case 'DepositPercentage':
                                        s = 'event213=' + n[b].value + ',';
                                        break;
                                    case 'DownPaymentAmount':
                                        l = 'event214=' + n[b].value + ',';
                                        break;
                                    case 'DownPaymentPercent':
                                        c = 'event215=' + n[b].value + ',';
                                        break;
                                    case 'InterestEffective':
                                        g = 'event218=' + n[b].value + ',';
                                        break;
                                    case 'NominalInterest':
                                        f = 'event219=' + n[b].value + ',';
                                        break;
                                    case 'Mileage':
                                        p = 'event220=' + n[b].value + ',';
                                        break;
                                    case 'ResidualValuePercent':
                                        v = 'event223=' + n[b].value + ',';
                                    }
                                }
                                var C = '';
                                return '' != r && (C += 'bp:' + r.substr(9).slice(0, -1) + '~'), '' != s && (C += 'dp:' + s.substr(9).slice(0, -1) + '~'), '' != c && (C += 'do:' + c.substr(9).slice(0, -1) + '~'), '' != g && (C += 'ie:' + g.substr(9).slice(0, -1) + '~'), '' != f && (C += 'in:' + f.substr(9).slice(0, -1) + '~'), '' != p && (C += 'ma:' + p.substr(9).slice(0, -1) + '~'), '' != v && (C += 'rv:' + v.substr(9).slice(0, -1) + '~'), '' != _ && (C += 'te:' + _.substr(9).slice(0, -1) + '~'), '' != C && (C = '~' + C.slice(0, -1)), i + r + o + s + l + c + u + d + g + f + p + m + h + v + _ + '|' + C;
                            } catch (I) {
                                return console.log('SATELLITE: Could not load SF events'), '|';
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_att_financeDataObject: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1;
                                return e.event[t].attributes.financeDataObject.vehicle;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_att_iFrameName: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1;
                                return e.event[t].attributes.iFrameName;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_att_manufacturer: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1;
                                return e.event[t].attributes.manufacturer;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_att_mmdr: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1;
                                return e.event[t].attributes.mmdr;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_att_productName: {
                        customJS: function () {
                            try {
                                for (var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1; t >= 0; t--) {
                                    if (void 0 !== e.event[t].eventInfo.eventName)
                                        break;
                                }
                                return e.event[t].attributes.productName;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_att_relatedPageName: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1;
                                return e.event[t].attributes.relatedPageName || '';
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_att_visible: {
                        customJS: function () {
                            try {
                                for (var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1; t >= 0; t--) {
                                    if (void 0 !== e.event[t].eventInfo.eventName)
                                        break;
                                }
                                return e.event[t].attributes.relatedComponent.attributes.visible;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_cat_primaryCategory: {
                        customJS: function () {
                            try {
                                for (var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1; t >= 0; t--) {
                                    if (void 0 !== e.event[t].eventInfo.eventName)
                                        break;
                                }
                                return e.event[t].category.primaryCategory;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_cat_subCategory01: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1;
                                return e.event[t].category.subCategory01;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_cat_subCategory02: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1;
                                return e.event[t].category.subCategory02;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_cat_subCategory03: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1;
                                return e.event[t].category.subCategory03;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    eventInformation_DC: {
                        customJS: function () {
                            try {
                                var e, t = _satellite.getVar('dataLayer_event_3.0'), a = t.eventInfo || '', n = t.category || '';
                                return e = '', '' != (a.eventName || '') && (e += '~en:' + (a.eventName || '')), '' != (a.eventAction || '') && (e += '~ea:' + (a.eventAction || '')), '' != (a.eventPoints || '') && (e += '~ep:' + (a.eventPoints || '')), '' != (a.type || '') && (e += '~et:' + (a.type || '')), '' != (a.effect || '') && (e += '~ee:' + (a.effect || '')), '' != (a.cause || '') && (e += '~ek:' + (a.cause || '')), '' != (n.primaryCategory || '') && (e += '~ec:' + (n.primaryCategory || '')), '' != (n.subCategory1 || '') && (e += '~ex:' + (n.subCategory1 || '')), e;
                            } catch (i) {
                                _satellite.notify('eventInformation dataElement -', i);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_eve_cause: {
                        customJS: function () {
                            try {
                                for (var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1; t >= 0; t--) {
                                    if (void 0 !== e.event[t].eventInfo.eventName)
                                        break;
                                }
                                return e.event[t].eventInfo.cause;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_eve_effect: {
                        customJS: function () {
                            try {
                                for (var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1; t >= 0; t--) {
                                    if (void 0 !== e.event[t].eventInfo.eventName)
                                        break;
                                }
                                return e.event[t].eventInfo.effect;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_eve_eventAction: {
                        customJS: function () {
                            try {
                                for (var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1; t >= 0; t--) {
                                    if (void 0 !== e.event[t].eventInfo.eventName)
                                        break;
                                }
                                return e.event[t].eventInfo.eventAction;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_eve_eventName: {
                        customJS: function () {
                            try {
                                for (var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1; t >= 0; t--) {
                                    if (void 0 !== e.event[t].eventInfo.eventName)
                                        break;
                                }
                                return e.event[t].eventInfo.eventName;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_eve_eventPoints: {
                        customJS: function () {
                            try {
                                for (var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1; t >= 0; t--) {
                                    if (void 0 !== e.event[t].eventInfo.eventName)
                                        break;
                                }
                                return e.event[t].eventInfo.eventPoints;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ev_eve_target: {
                        customJS: function () {
                            try {
                                for (var e = _satellite.getVar('finalDataLayer'), t = e.event.length - 1; t >= 0; t--) {
                                    if (void 0 !== e.event[t].eventInfo.eventName)
                                        break;
                                }
                                return e.event[t].eventInfo.target;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    finalDataLayer: {
                        customJS: function () {
                            try {
                                var t = e.location.host || e.location.hostname;
                                try {
                                    if (!_satellite.getVar('osm_dataLayer') && 'undefined' == typeof digitals2 && 'thisissecure.net' == _satellite.getVar('topLevelDomain') || 'bmw.co.uk' == _satellite.getVar('topLevelDomain') || 'approvedusedminis.co.uk' == _satellite.getVar('topLevelDomain') || 'onlinevehiclesales.mini.co.uk' == t || 'approvedused.mini.ie' == t || 'approvedused.bmw.ie' == t)
                                        return dtm_data_layer;
                                } catch (o) {
                                }
                                var a = _satellite.getVar('osm_dataLayer');
                                if (void 0 !== a && a)
                                    return a;
                                var n = digitals2.tracking.api;
                                if (void 0 !== n) {
                                    var i = n.getCurrentPageIndex(), r = n.getPageObject(i);
                                    if ('undefined' != typeof r.pageInstanceId && '' != r.pageInstanceId && -1 == r.pageInstanceId.indexOf('need-analyzer'))
                                        return r;
                                    if ('undefined' != typeof (r = n.getPageObject(0)).pageInstanceId && '' != r.pageInstanceId)
                                        return r;
                                }
                                if (e.digitalData.pages[e.digitalData.activePageIndex])
                                    return e.digitalData.pages[e.digitalData.activePageIndex];
                            } catch (o) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    functionList: {
                        customJS: function () {
                            try {
                                String.prototype.dtm_capitalize = function () {
                                    return this.charAt(0).toUpperCase() + this.slice(1);
                                }, String.prototype.dtm_readable = function () {
                                    return this.replace(/_/g, ' ');
                                }, String.prototype.dtm_hashCode = function () {
                                    var t = this, a = 0;
                                    if (0 == t.length)
                                        return a;
                                    for (i = 0; i < t.length; i++)
                                        char = t.charCodeAt(i), a = (a << 5) - a + char, a &= a;
                                    var n = 255 & a, r = 65280 & a, o = 16711680 & a, s = -16777216 & a;
                                    return r >>>= 8, o >>>= 16, s >>>= 24, e.btoa(String.fromCharCode(n, r, o, s)).slice(0, 5);
                                }, String.prototype.dtm_getHashParameter = function () {
                                    var e = this;
                                    e = e.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                                    var t = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(location.hash);
                                    return null === t ? '' : decodeURIComponent(t[1].replace(/\+/g, ' '));
                                }, localStorage.setObj || (Storage.prototype.setObj = function (e, t) {
                                    return this.setItem(e, JSON.stringify(t));
                                }, Storage.prototype.getObj = function (e) {
                                    return JSON.parse(this.getItem(e));
                                });
                            } catch (t) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    geoRegion: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                if ('undefined' != typeof e.page)
                                    return e.page.pageInfo.geoRegion;
                                var t = location.hostname;
                                if (t.indexOf('bmwjamaica.com') > -1)
                                    return 'JM';
                                if (t.indexOf('bmwhk.com') > -1)
                                    return 'HK';
                                if (t.indexOf('bmw-eg.com') > -1)
                                    return 'EG';
                                var a = t.split('.'), n = a[a.length - 1];
                                return n = n.toUpperCase();
                            } catch (i) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    hierarchy: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('jcrPathLevel1'), t = _satellite.getVar('jcrPathLevel2'), a = _satellite.getVar('jcrPathLevel3'), n = _satellite.getVar('pageName'), i = [
                                        e,
                                        t,
                                        a
                                    ], r = 3;
                                a.indexOf('None') > -1 && (r = 2), t.indexOf('None') > -1 && (r = 1), e.indexOf('None') > -1 && (r = 0);
                                for (var o = '', s = 0; s < r; s++)
                                    o += i[s] + '|';
                                return o += n;
                            } catch (l) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    hierarchyEvar: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('jcrPathLevel1'), t = _satellite.getVar('jcrPathLevel2'), a = _satellite.getVar('jcrPathLevel3'), n = _satellite.getVar('pageName'), i = _satellite.getVar('pa_pag_pageName'), r = [
                                        e,
                                        t,
                                        a
                                    ], o = 3;
                                if (a.indexOf('None') > -1)
                                    o = 2;
                                if (t.indexOf('None') > -1)
                                    o = 1;
                                if (e.indexOf('None') > -1)
                                    o = 0;
                                for (var s = '', l = 0; l < o; l++) {
                                    for (var c = '', u = 0; u <= l; u++)
                                        c += r[u] + ' > ';
                                    s += (c = c.substring(0, c.length - 3)) + '|';
                                }
                                for (l = o; l < 3; l++)
                                    s += c + '|';
                                return s += n, 'bmw.com.cn' != _satellite.getVar('topLevelDomain') && 1 != _satellite.settings.isStaging || (s += '|' + i), s;
                            } catch (d) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    ignoreKeys: {
                        customJS: function () {
                            return [
                                'eVar69',
                                'pageName'
                            ];
                        },
                        storeLength: 'pageview'
                    },
                    'interactionElement_3.0': {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('dataLayer_event_3.0').eventInfo || '', t = '~en:' + (e.eventName || '') + '~ea:' + (e.eventAction || '');
                                return t += '~ec:' + (e.cause || '') + '~ee:' + (e.effect || '');
                            } catch (a) {
                                _satellite.logError(a);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    isDefaultON: {
                        customJS: function () {
                            try {
                                var e = [], t = _satellite.getVar('topLevelDomain'), a = e.indexOf(t) > -1 ? 'true' : 'false';
                                return _satellite.setVar('isDefaultONCached', a), a;
                            } catch (n) {
                                return _satellite.notify('Error in DE: isDefaultON' + n), 'false';
                            }
                        },
                        storeLength: 'pageview'
                    },
                    isRegulationAccepted: {
                        customJS: function () {
                            try {
                                var e = !1;
                                if ('true' == _satellite.getVar('splitConsentEnabled'))
                                    e = epaas.api.isUsageAllowed(_satellite.getVar('consentMap').AdobeAnalytics);
                                else {
                                    var a = _satellite.readCookie('bmwdtm_hq_cc');
                                    void 0 !== a && (e = a || !1);
                                    var n = _satellite.readCookie('cookieMessage') || _satellite.readCookie('seenCookies');
                                    void 0 !== n && (e = 'accepted' == n);
                                    var i = _satellite.readCookie('cookieConsent');
                                    void 0 !== i && (e = 'true' == i);
                                    var r = _satellite.readCookie('cc_consentCookie');
                                    if (void 0 !== r && (-1 == r.indexOf('consent') ? e = r.toString() : r.indexOf('consent') > -1 && -1 == r.indexOf('consentMetadataModel') && (e = 'accepted' == JSON.parse(r).consent.toLowerCase())), 'undefined' != typeof cookiecontroller && cookiecontroller.api.isInitialized())
                                        if ('true' === (e = cookiecontroller.api.areBrowserCookiesEnabled() || !1).toString())
                                            e = cookiecontroller.api.isRegulationAccepted() || !1;
                                    if ('true' === e.toString() && 0 != _satellite.getVar('setRegulationCookie')) {
                                        var o = '.' + _satellite.getVar('topLevelDomain'), l = new Date();
                                        l.setTime(l.getTime() + 1800000);
                                        var c = '; expires=' + l.toGMTString();
                                        t.cookie = 'bmwdtm_hq_cc=' + e + c + ';domain=' + o + '; path=/', _satellite.setVar('setRegulationCookie', !1);
                                    }
                                    'noRSID' === _satellite.getVar('adobeRSID') && 'bmw.co.uk' != _satellite.getVar('topLevelDomain') && (e = !1), self != top && (e = !1, console.log('<>iframe present and value is ' + e));
                                }
                                return _satellite.notify('Default Regulation is ' + e), 'false' == e.toString() && (s.visitorOptedOut = !0), e.toString();
                            } catch (u) {
                                return _satellite.notify('Regulation error' + u), 'false';
                            }
                        },
                        storeLength: 'pageview'
                    },
                    isRegulationAccepted_Tags: {
                        customJS: function () {
                            try {
                                var a = !1;
                                if ('true' == _satellite.getVar('splitConsentEnabled'))
                                    a = epaas.api.isUsageAllowed(_satellite.getVar('consentMap').advertising);
                                else {
                                    var n = _satellite.readCookie('bmwdtm_hq_cc');
                                    void 0 !== n && (a = n || !1);
                                    var i = _satellite.readCookie('cookieMessage') || _satellite.readCookie('seenCookies');
                                    void 0 !== i && (a = 'accepted' == i);
                                    var r = _satellite.readCookie('cookieConsent');
                                    void 0 !== r && (a = 'true' == r);
                                    var o = _satellite.readCookie('cc_consentCookie');
                                    if (void 0 !== o && (-1 == o.indexOf('consent') ? a = o.toString() : o.indexOf('consent') > -1 && -1 == o.indexOf('consentMetadataModel') && (a = 'accepted' == JSON.parse(o).consent.toLowerCase())), 'undefined' != typeof cookiecontroller && cookiecontroller.api.isInitialized())
                                        if ('true' === (a = cookiecontroller.api.areBrowserCookiesEnabled() || !1).toString())
                                            a = cookiecontroller.api.isRegulationAccepted() || !1;
                                    if ('true' === a.toString() && 0 != _satellite.getVar('setRegulationCookie')) {
                                        var s = '.' + _satellite.getVar('topLevelDomain'), l = new Date();
                                        l.setTime(l.getTime() + 1800000);
                                        var c = '; expires=' + l.toGMTString();
                                        t.cookie = 'bmwdtm_hq_cc=' + a + c + ';domain=' + s + '; path=/', _satellite.setVar('setRegulationCookie', !1);
                                    }
                                    'noRSID' === _satellite.getVar('adobeRSID') && 'bmw.co.uk' != _satellite.getVar('topLevelDomain') && (a = !1), self != top && (a = !1, console.log('<>iframe present and value is ' + a));
                                    var u = e.location.href.substring(0, 255);
                                    -1 == (u = u.toLowerCase()).indexOf('vin') && -1 == u.indexOf('firstname') && -1 == u.indexOf('lastname') && -1 == u.indexOf('email') || (_satellite.notify('personal data is present in the URL'), a = !1);
                                }
                                return _satellite.notify('Default Regulation is ' + a), a.toString();
                            } catch (d) {
                                return _satellite.notify('Regulation error' + d), 'false';
                            }
                        },
                        storeLength: 'pageview'
                    },
                    isStaging: {
                        customJS: function () {
                            try {
                                return _satellite.settings.isStaging;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    jcrPathLevel1: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('pageInstanceId'), t = e.split('/'), a = 1;
                                if ((a = a + 6 - 1) < t.length)
                                    var n = t[a];
                                else
                                    n = 'None';
                                if (e.indexOf('/configurator') > -1)
                                    n = 'Configurator';
                                return n;
                            } catch (i) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    jcrPathLevel2: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('pageInstanceId'), t = _satellite.getVar('pa_cat_subCategory01'), a = _satellite.getVar('pa_cat_primaryCategory'), n = e.split('/'), i = 2;
                                if ((i = i + 6 - 1) < n.length)
                                    var r = n[i];
                                else
                                    r = 'None';
                                if (e.indexOf('/configurator') > -1)
                                    r = 'Configurator Page';
                                if ('VCO' === a)
                                    r = t;
                                return r;
                            } catch (o) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    jcrPathLevel3: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('pageInstanceId'), t = _satellite.getVar('pa_pag_pageName'), a = _satellite.getVar('pa_cat_primaryCategory'), n = e.split('/'), i = 6, r = 3;
                                r = r + i - 1;
                                var o = n.length;
                                if (r < o)
                                    var s = n[r];
                                else
                                    s = 'None';
                                if ('newvehicles' === n[i] || 'all-models' === n[i])
                                    if (r < o)
                                        s = n[r] + ' ' + n[r + 1];
                                    else
                                        s = 'None';
                                if (e.indexOf('/configurator') > -1)
                                    s = 'None';
                                if ('VCO' === a)
                                    s = t;
                                return s;
                            } catch (l) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    languageAndMarketWorkaround: {
                        customJS: function () {
                            try {
                                var t = _satellite.getVar('topLevelDomain'), a = e.location.href;
                                return 'bmwgroup.com' === t && (a.indexOf('onlinesales-uk') > -1 || a.indexOf('uk-bmw.bmwgroup.com') > -1 ? t = 'bmw.co.uk' : a.indexOf('onlinesales-de') > -1 || a.indexOf('de-bmw.bmwgroup.com') > -1 ? t = 'bmw.de' : (a.indexOf('onlinesales-kr') > -1 || a.indexOf('kr-bmw.bmwgroup.com') > -1) && (t = 'bmw.kr')), {
                                    'bmw.co.uk': 'en-GB',
                                    'bmw.de': 'de-DE',
                                    'bmw.kr': 'kr-KR',
                                    'bmw.co.kr': 'kr-KR',
                                    'bmw.com.cn': 'zh-CN'
                                }[t];
                            } catch (n) {
                                _satellite.notify('Error:languageAndMarketWorkaround');
                            }
                        },
                        storeLength: 'pageview'
                    },
                    linkbuilderParam: {
                        customJS: function () {
                            function e(e) {
                                e = e.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                                var t = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(location.search);
                                return null === t ? '' : decodeURIComponent(t[1].replace(/\+/g, ' '));
                            }
                            try {
                                for (var t = [
                                            'lbnetwork',
                                            'lbmatchtype',
                                            'lbcreative',
                                            'lbkeyword',
                                            'lbdevice',
                                            'lbcampaign',
                                            'lbadgroup'
                                        ], a = (_satellite.getVar('topLevelDomain'), ''), n = 0, i = 0; i < t.length; i++)
                                    e(t[i]) ? a += t[i] + '=' + e(t[i]) + '|' : (a += t[i] + '=no value|', n++);
                                return a = 7 == n ? '' : a.slice(0, -1);
                            } catch (r) {
                                'true' == localStorage.getItem('sdsat_debug') && console.log('SATELLITE: Campaign not tracked');
                            }
                        },
                        storeLength: 'pageview'
                    },
                    'linkbuilderParam-old': {
                        customJS: function () {
                            function e(e) {
                                e = e.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                                var t = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(location.search);
                                return null === t ? '' : decodeURIComponent(t[1].replace(/\+/g, ' '));
                            }
                            try {
                                for (var t = ['lbkeyword'], a = (_satellite.getVar('topLevelDomain'), ''), n = 0; n < t.length && !(a = e(t[n])); n++);
                                return a;
                            } catch (i) {
                                'true' == localStorage.getItem('sdsat_debug') && console.log('SATELLITE: Campaign not tracked');
                            }
                        },
                        storeLength: 'pageview'
                    },
                    linkedProductInformation_DC: {
                        customJS: function () {
                            try {
                                var e, t = _satellite.getVar('dataLayer_product_3.0'), a = _satellite.getVar('dataLayer_dealer_3.0');
                                if (a && a.attributes && a.attributes.linkedProduct && a.attributes.linkedProduct.length > 0)
                                    e = (e = a.attributes.linkedProduct)[e.length - 1];
                                t && t.linkedProduct && t.linkedProduct.length > 0 && (t = t.linkedProduct[t.linkedProduct.length - 1]);
                                var n, i = t.productInfo || '';
                                return n = '', '' == (i.productID || '') && '' == (e.productInfo || '').productID || (n += '~li:' + (i.productID || (e.productInfo || '').productID)), '' != (i.productName || '') && (n += '~ln:' + (i.productName || '')), '' == ((t.category || '').productType || '') && '' == ((e.category || '').productType || '') || (n += '~lt:' + ((t.category || '').productType || (e.category || '').productType || '')), '' == ((t.category || '').subCategory1 || '') && '' == ((e.category || '').subCategory1 || '') || (lc = (t.category || '').subCategory1 || (e.category || '').subCategory1 || '', lc = '~lc:' + lc, n += lc), _satellite.notify('Mapping: ~li: -> digitalData.product[0].linkedProduct[0].productInfo.productID \n ~ln: -> digitalData.product[0].linkedProduct[0].productInfo.productID.productName \n ~lt: -> digitalData.product[0].linkedProduct[0].productInfo.productID.productType'), n;
                            } catch (r) {
                                _satellite.notify('linkedProductInformation_DC dataElement ', r);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    linkedProductInformation_NSC: {
                        customJS: function () {
                            try {
                                var e, t = _satellite.getVar('dataLayer_product_3.0'), a = _satellite.getVar('dataLayer_dealer_3.0');
                                if (a && a.attributes && a.attributes.linkedProduct && a.attributes.linkedProduct.length > 0)
                                    e = (e = a.attributes.linkedProduct)[e.length - 1];
                                t && t.linkedProduct && t.linkedProduct.length > 0 && (t = t.linkedProduct[t.linkedProduct.length - 1]);
                                var n = t.productInfo || '';
                                return '', '' == (n.productID || '') && '' == (e.productInfo || '').productID || '~pi:' + (n.productID || (e.productInfo || '').productID), '' != (n.productName || '') && '~pn:' + (n.productName || ''), '' == ((t.category || '').productType || '') && '' == ((e.category || '').productType || '') || '~pt:' + ((t.category || '').productType || (e.category || '').productType || ''), _satellite.notify('Mapping: ~pi: -> digitalData.product[0].linkedProduct[0].productInfo.productID \n ~pn: -> digitalData.product[0].linkedProduct[0].productInfo.productID.productName \n ~pt: -> digitalData.product[0].linkedProduct[0].productInfo.productID.productType'), 'test';
                            } catch (i) {
                                _satellite.notify('linkedProductInformation_NSC dataElement ', i);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    localCampaignVariable: {
                        customJS: function () {
                            function e(e) {
                                e = e.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                                var t = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(location.search);
                                return null === t ? '' : decodeURIComponent(t[1].replace(/\+/g, ' '));
                            }
                            try {
                                for (var t = [
                                            'mz_ca',
                                            'mz_sp'
                                        ], a = (_satellite.getVar('topLevelDomain'), ''), n = 0, i = 0; i < t.length; i++)
                                    e(t[i]) ? a += e(t[i]) + '|' : (a += 'no value|', n++);
                                return a = 2 == n ? '' : a.slice(0, -1);
                            } catch (r) {
                                'true' == localStorage.getItem('sdsat_debug') && console.log('SATELLITE: Campaign not tracked');
                            }
                        },
                        storeLength: 'pageview'
                    },
                    'mainProduct_3.0': {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('dataLayer_product_3.0'), t = e.productInfo || '', a = e.attributes || '', n = _satellite.getVar('dataLayer_page_3.0'), i = '', r = '', o = '', s = '', l = '', c = '', u = '', d = '', g = '', f = '', p = '', m = '';
                                '' != ((e.category || '').productType || '') && (r = 'ps:' + ((e.category || '').productType || '')), '' != (t.productID || '') && (i = '~pi:' + (t.productID || '')), '' == (t.productName || '') && '' == (a.modelName || '') || (o = '~pn:' + (t.productName || a.modelName || '')), '' != (a.modelCode || '') && (s = '~mc:' + (a.modelCode || '')), '' != (a.series || '') && (l = '~se:' + (a.series || '')), '' != (a.yearOfLaunch || '') && (c = '~yl:' + (a.yearOfLaunch || '')), '' != (a.sellingPriceTotal || '') && (u = '~po:' + (a.sellingPriceTotal || '')), 'undefined' != typeof a.internalCode ? d = '~ic:' + (a.internalCode || '') : '' != (a.mmdr || '') && (d = '~ic:' + (a.mmdr || '')), '' != ((_satellite.getVar('dataLayer_product_3.0').category || '').productType || '') && (g = '~pt:' + ((_satellite.getVar('dataLayer_product_3.0').category || '').productType || '')), '' != (a.yearOfRegistration || '') && (f = '~yr:' + (a.yearOfRegistration || '')), '' != (a.selectionType || '') && (p = '~st:' + (a.selectionType || '')), '' != ((n.attributes || '').currencyCode || '') && (cu = '~cu:' + ((n.attributes || '').currencyCode || ''));
                                m = '';
                                return '' != r && (m += r), '' != i && (m += i), '' != o && (m += o), '' != s && (m += s), '' != l && (m += l), '' != c && (m += c), '' != u && (m += u), '' != d && (m += d), '' != g && (m += g), '' != f && (m += f), '' != p && (m += p), '' != cu && (m += cu), m;
                            } catch (h) {
                                _satellite.notify(h);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    'MINI_dealer_3.0': {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('dataLayer_dealer_3.0').dealerInfo, t = (e.outletID || '') + ':' + (e.dealerID || '');
                                return t += ':' + (e.dealerName || '') + ':' + (e.dealerGroup || '') + '~ut=~pi=';
                            } catch (a) {
                                _satellite.logError(a);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    'MINI_mainProduct_3.0': {
                        customJS: function () {
                            function e() {
                                for (var e = _satellite.getVar('finalDataLayer').product, t = e.length - 1; t >= 0 && 'vehicle' != e[t].category.productType; t--);
                                return t;
                            }
                            try {
                                var t = _satellite.getVar('dataLayer_product_3.0'), a = e(), n = (t = _satellite.getVar('finalDataLayer').product[a]).productInfo || '';
                                return 'na' + ':' + 'na' + ':' + ((t.attributes || '').modelName || 'na') + ':' + (n.productID || 'na') + ':' + 'na' + ':' + 'na' + ':' + 'na' + ':' + 'na' + ':' + 'na' + ':' + 'na';
                            } catch (i) {
                                _satellite.logError(i);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    navEvarForClicks: {
                        customJS: function () {
                            try {
                                _satellite.getVar('functionList');
                                var t = _satellite.getVar('pa_cat_primaryCategory'), n = (_satellite.getVar('pa_cat_subCategory01'), _satellite.getVar('pa_cat_pageType'), _satellite.getVar('ev_eve_eventAction')), i = _satellite.getVar('ev_eve_target'), r = _satellite.getVar('ev_eve_eventName'), o = (_satellite.getVar('ev_eve_cause'), _satellite.getVar('ev_cat_subCategory01')), s = _satellite.getVar('pa_pag_pageName'), l = _satellite.getVar('ev_cat_primaryCategory'), c = _satellite.getVar('ev_att_relatedPageName'), u = _satellite.getVar('ev_eve_eventPoints'), d = _satellite.getVar('ev_att_componentName').dtm_capitalize().dtm_readable(), g = r, f = _satellite.getVar('ev_att_componentHeadline'), p = 'Internal Pagelink', m = 'Not available', h = _satellite.getVar('URLNoParam');
                                return 'Outbound click' == n ? (p = 'External Pagelink', m = i) : 'Download' == n ? (p = 'Download', m = r, g = 'Not available') : 'Share' == n ? (p = 'Share', m = i) : 'Start video' == n ? (p = 'Video', g = 'Not available', m = i) : 'Go to' == n ? (p = 'External Pagelink', g = 'Visit retailer website', d = 'Dealer locator', m = r) : 'Call' == n ? (p = 'Call', g = r, d = 'Dealer locator') : 'Email' == n ? (p = 'eMail', g = r) : 'Print' == n ? (p = 'Download', g = r) : 'Route start' == s ? (p = 'Internal Pagelink', g = 'Route start', m = e.location.pathname) : 'Search start' == s ? (p = 'Internal Pagelink', m = e.location.pathname) : 'Accessory Configurator' == o ? (p = 'Module Interaction', d = 'Accessory Configurator', g = r) : 'dsd-customer tailor quote' == s && 'Preselected value on page load.' == r && (g = 'Tailor quote link was activated'), d = c, RegExp('Form field filled|checkbox changed|radio button chosen', 'ig').test(l) ? (p = 'OSM Interaction', f = n, g = u) : (p = 'Internal Pagelink', h = _satellite.getVar('osm_referringUrl'), m = _satellite.getVar('pa_pag_destinationUrl'), h = h.replace(RegExp('http[s]://', 'ig'), '').replace(/#\/|\/\d+[$|\/]*/gi, '/').replace(/\/\//gi, '/'), m = m.replace(RegExp('http[s]://', 'ig'), '').replace(/#\/|\/\d+[$|\/]*/gi, '/').replace(/\/\//gi, '/')), 'Dealer Locator' == t && (d = 'Dealer locator'), '' != d && d != a || (d = 'Not available'), '' != f && f != a || (f = 'Not available'), '' != g && g != a || (g = 'Not available'), p + '~' + g + '~' + d + '~' + f + '~' + h + '~' + m;
                            } catch (v) {
                                return 'Not available~Not available~Not available~Not available~' + _satellite.getVar('URLNoParam') + '~Not available';
                            }
                        },
                        storeLength: 'pageview'
                    },
                    navEvarForPage: {
                        customJS: function () {
                            try {
                                var t = '', a = '', n = '', i = 'Internal Pagelink', r = _satellite.getVar('finalDataLayer'), o = (_satellite.getVar('functionList'), _satellite.getVar('pa_pag_referringUrl')), s = _satellite.getVar('pa_cat_primaryCategory'), l = _satellite.getVar('pa_cat_subCategory01'), c = _satellite.getVar('pa_cat_pageType'), u = r.event.length - 1;
                                if ('' == o)
                                    var d = 'Not available';
                                else
                                    d = o.split('?')[0].split('#')[0];
                                for (var g = _satellite.getVar('URLNoParam'), f = 0; f <= u; f++) {
                                    var p = r.event[f].eventInfo.eventAction;
                                    if ('Internal click' == p || 0 == p.indexOf('Start')) {
                                        t = r.event[f].attributes.relatedComponent.componentInfo.componentName.replace('page_link', 'Main navigation').dtm_capitalize().dtm_readable(), a = r.event[f].eventInfo.eventName, n = r.event[f].attributes.relatedComponent.componentInfo.componentHeadline;
                                        break;
                                    }
                                }
                                if (f >= u)
                                    for (var m = _satellite.getVar('component'), h = 0; h <= m.length - 1; h++)
                                        if ('Search results' == m[h].componentInfo.componentName) {
                                            t = 'Search';
                                            break;
                                        }
                                return 'VCO' === s && (g = g + '#/' + l, 'start page' != c && (d = _satellite.getVar('vco_referring_url'), t = 'VCO module', 'external' == (a = r.page.attributes.navigationItem) && (a = 'Not available'), n = 'Not available', i = 'Internal Pagelink')), '' == t && (i = 'Direct / Reload', t = 'Not available'), '' == a && (a = 'Not available'), '' == n && (n = 'Not available'), i + '~' + a + '~' + t + '~' + n + '~' + d + '~' + g;
                            } catch (v) {
                                return 'Internal Pagelink~Not available~Not available~Not available~Not available~' + e.location.href;
                            }
                        },
                        storeLength: 'pageview'
                    },
                    nonTechMetaData: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('jcrPathLevel1'), t = _satellite.getVar('jcrPathLevel2');
                                'link-generator' == t && (e = t), e = e.replace('-', ' ');
                                var a = _satellite.getVar('pa_pag_language').split('_'), n = _satellite.getVar('geoRegion'), i = _satellite.getVar('server'), r = (_satellite.getVar('ev_cat_subCategory01'), _satellite.getVar('pa_cinfo_componentName') || 'Content'), o = 'NSC';
                                return nonTechMetaData = 'do:' + i + '~ma:' + n + '~la:' + a[0] + '~pt:' + e + '~wb:BMW~pf:' + o + '~ap:' + r;
                            } catch (s) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    'nonTechMetaData_3.0': {
                        customJS: function () {
                            try {
                                var t = _satellite.getVar('dataLayer_page_3.0').pageInfo || '', a = _satellite.getVar('languageAndMarketWorkaround'), n = [
                                        'Sunday',
                                        'Monday',
                                        'Tuesday',
                                        'Wednesday',
                                        'Thursday',
                                        'Friday',
                                        'Saturday'
                                    ], i = new Date(), r = 'do:' + e.location.hostname, o = '~ma:' + t.geoRegion, s = t.language || a;
                                if (s.indexOf('-') > -1)
                                    var l = '~la:' + s.split('-')[0];
                                else if (s.indexOf('_') > -1)
                                    l = '~la:' + s.split('_')[0];
                                else
                                    l = '~la:' + s;
                                if (t && t.breadCrumbs && 'number' == typeof t.breadCrumbs.length && t.breadCrumbs.length > 0)
                                    var c = '~wb:' + JSON.parse(t.breadCrumbs)[0];
                                else
                                    c = '~wb:' + ((_satellite.getVar('dataLayer_product_3.0').productInfo || '').manufacturer || '');
                                var u = '~ap:' + _satellite.getVar('dataLayer_component_3.0').componentInfo.componentName, d = '~wd:' + n[i.getDay()], g = '';
                                return '' != r && (g += r), '' != o && (g += o), '' != l && (g += l), '' != c && (g += c), '' != u && (g += u), '' != d && (g += d), g;
                            } catch (f) {
                                _satellite.logError(f);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    nonTechMetaDataEvarAddon: {
                        customJS: function () {
                            try {
                                return s.getTimeParting = new Function('h', 'z', 'var s=this,od;od=new Date(\'1/1/2000\');if(od.getDay()!=6||od.getMonth()!=0){return\'Data Not Available\';}else{var H,M,D,U,ds,de,tm,da=[\'Sunday\',\'Monday\',\'Tuesday\',\'Wednesday\',\'Thursday\',\'Friday\',\'Saturday\'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tpDST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+\'/\'+d.getFullYear());de=new Date(dso[1]+\'/\'+d.getFullYear());if(h==\'n\'&&d>ds&&d<de){z=z+1;}else if(h==\'s\'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getTimezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d.getMinutes();M=(M<10)?\'0\'+M:M;D=d.getDay();U=\' AM\';if(H>=12){U=\' PM\';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+\':\'+M+U;return(tm+\'|\'+D);}'), 'wd:' + s.getTimeParting('n').split('|')[1];
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    osm_dataLayer: {
                        customJS: function () {
                            try {
                                var t = e.digitals2.tracking.api;
                                if (void 0 !== t) {
                                    var a = t.getCurrentPageIndex();
                                    return t.getPageObject(a);
                                }
                                return t;
                            } catch (n) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    osm_hierarchy: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('jcrPathLevel1'), t = _satellite.getVar('jcrPathLevel2'), a = _satellite.getVar('jcrPathLevel3'), n = _satellite.getVar('pageName') || _satellite.getVar('osm_pageName'), i = [
                                        e,
                                        t,
                                        a
                                    ], r = 3;
                                a.indexOf('None') > -1 && (r = 2), t.indexOf('None') > -1 && (r = 1), e.indexOf('None') > -1 && (r = 0);
                                for (var o = '', s = 0; s < r; s++)
                                    o += i[s] + '|';
                                return o += n;
                            } catch (l) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    osm_hierarchyEvar: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('jcrPathLevel1'), t = _satellite.getVar('jcrPathLevel2'), a = _satellite.getVar('jcrPathLevel3'), n = _satellite.getVar('pageName'), i = _satellite.getVar('pa_pag_pageName');
                                'offer' === t && a.length > 0 && (a = '', n = ''), 'customer-details' === t && a.length > 0 && (a = '', n = '');
                                var r = [
                                        e,
                                        t,
                                        a
                                    ], o = 3;
                                if (a.indexOf('None') > -1)
                                    o = 2;
                                if (t.indexOf('None') > -1)
                                    o = 1;
                                if (e.indexOf('None') > -1)
                                    o = 0;
                                for (var s = '', l = 0; l < o; l++) {
                                    for (var c = '', u = 0; u <= l; u++)
                                        c += r[u] + ' > ';
                                    s += (c = c.substring(0, c.length - 3)) + '|';
                                }
                                for (l = o; l < 3; l++)
                                    s += c + '|';
                                return s += n, 'bmw.com.cn' != _satellite.getVar('topLevelDomain') && 1 != _satellite.settings.isStaging || (s += '|' + i), s;
                            } catch (d) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    osm_language: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('osm_dataLayer').page.pageInfo.language;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    osm_mmdr: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('osm_dataLayer');
                                if (0 == e.product.length)
                                    return '';
                                var t = e.product.length - 1;
                                return e.product[t].attributes.mmdr;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    osm_pageName: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('osm_dataLayer').page.pageInfo.pageName;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    osm_pageTitle: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('osm_dataLayer').page.pageInfo.pageTitle;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    osm_referringUrl: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('osm_dataLayer').page.pageInfo.referringUrl || _satellite.getVar('osm_dataLayer').page.pageInfo.refferingURL;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    osm_template: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('osm_dataLayer').page.attributes.template;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    osm_usertype: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('jcrPathLevel1').replace('dsd-', '').replace('dealer', 'retailer');
                                return e = e.charAt(0).toUpperCase() + e.slice(1);
                            } catch (t) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pa_att_dealerID: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('finalDataLayer').page.attributes.dealerID;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pa_att_outletName: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('finalDataLayer').page.attributes.outletName;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pa_att_template: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('finalDataLayer').page.attributes.template;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pa_cat_pageType: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('finalDataLayer').page.category.pageType;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pa_cat_primaryCategory: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer'), t = e.component.length - 1;
                                return e.component[t].category.primaryCategory;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pa_cat_subCategory01: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer'), t = e.component.length - 1;
                                return e.component[t].category.subCategory01;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pa_cinfo_componentName: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer'), t = e.component.length - 1;
                                return e.component[t].componentInfo.componentName;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pageInstanceId: {
                        customJS: function () {
                            try {
                                var t = _satellite.getVar('finalDataLayer'), a = [
                                        '/content',
                                        'bmw',
                                        'market' + (t.page.pageInfo.geoRegion || 'CN'),
                                        _satellite.getVar('topLevelDomain').replace(/\./gi, '_'),
                                        t.page.pageInfo.language || 'zh_CN',
                                        e.location.pathname,
                                        e.location.hash.replace(/\#/gi, '')
                                    ].join('/').replace(/\/+/gi, '/').replace(/\/$/gi, ''), n = a;
                                return '-prod' == a.substr(a.length - 5) && (n = a.substr(0, a.length - 5)), '-dev' == a.substr(a.length - 4) && (n = a.substr(0, a.length - 4)), '-int' == a.substr(a.length - 4) && (n = a.substr(0, a.length - 4)), 6 === n.split('/').length && (n += '/index'), n = (n = (n = (n = n.replace(/offer\/\w+/, 'offer/')).replace(/customer-details\/\w+/, 'customer-details/')).replace(/offerHash.*/, '').replace('?', '/')).replace(/\/$/, '').replace(/\/\//, '/');
                            } catch (i) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pageloadFunctions: {
                        customJS: function () {
                            try {
                                s.getVisitNum = new Function('tp', 'c', 'c2', 'var s=this,e=new Date,cval,cvisit,ct=e.getTime(),d;if(!tp){tp=\'m\';}if(tp==\'m\'||tp==\'w\'||tp==\'d\'){eo=s.endof(tp),y=eo.getTime();e.setTime(y);}else {d=tp*86400000;e.setTime(ct+d);}if(!c){c=\'s_vnum\';}if(!c2){c2=\'s_invisit\';}cval=s.c_r(c);if(cval){var i=cval.indexOf(\'&vn=\'),str=cval.substring(i+4,cval.length),k;}cvisit=s.c_r(c2);if(cvisit){if(str){e.setTime(ct+1800000);s.c_w(c2,\'true\',e);return str;}else {return \'unknown visit number\';}}else {if(str){str++;k=cval.substring(0,i);e.setTime(k);s.c_w(c,k+\'&vn=\'+str,e);e.setTime(ct+1800000);s.c_w(c2,\'true\',e);return str;}else {s.c_w(c,e.getTime()+\'&vn=1\',e);e.setTime(ct+1800000);s.c_w(c2,\'true\',e);return 1;}}'), s.dimo = new Function('m', 'y', 'var d=new Date(y,m+1,0);return d.getDate();'), s.endof = new Function('x', 'var t=new Date;t.setHours(0);t.setMinutes(0);t.setSeconds(0);if(x==\'m\'){d=s.dimo(t.getMonth(),t.getFullYear())-t.getDate()+1;}else if(x==\'w\'){d=7-t.getDay();}else {d=1;}t.setDate(t.getDate()+d);return t;'), s.getTimeParting = new Function('h', 'z', 'var s=this,od;od=new Date(\'1/1/2000\');if(od.getDay()!=6||od.getMonth()!=0){return\'Data Not Available\';}else{var H,M,D,U,ds,de,tm,da=[\'Sunday\',\'Monday\',\'Tuesday\',\'Wednesday\',\'Thursday\',\'Friday\',\'Saturday\'],d=new Date();z=z?z:0;z=parseFloat(z);if(s._tpDST){var dso=s._tpDST[d.getFullYear()].split(/,/);ds=new Date(dso[0]+\'/\'+d.getFullYear());de=new Date(dso[1]+\'/\'+d.getFullYear());if(h==\'n\'&&d>ds&&d<de){z=z+1;}else if(h==\'s\'&&(d>de||d<ds)){z=z+1;}}d=d.getTime()+(d.getTimezoneOffset()*60000);d=new Date(d+(3600000*z));H=d.getHours();M=d.getMinutes();M=(M<10)?\'0\'+M:M;D=d.getDay();U=\' AM\';if(H>=12){U=\' PM\';H=H-12;}if(H==0){H=12;}D=da[D];tm=H+\':\'+M+U;return(tm+\'|\'+D);}'), s.getDaysSinceLastVisit = new Function('c', 'var s=this,e=new Date(),es=new Date(),cval,cval_s,cval_ss,ct=e.getTime(),day=24*60*60*1000,f1,f2,f3,f4,f5;e.setTime(ct+3*365*day);es.setTime(ct+30*60*1000);f0=\'Cookies Not Supported\';f1=\'First Visit\';f2=\'More than 30 days\';f3=\'More than 7 days\';f4=\'Less than 7 days\';f5=\'Less than 1 day\';cval=s.c_r(c);if(cval.length==0){s.c_w(c,ct,e);s.c_w(c+\'_s\',f1,es);}else{var d=ct-cval;if(d>30*60*1000){if(d>30*day){s.c_w(c,ct,e);s.c_w(c+\'_s\',f2,es);}else if(d<30*day+1 && d>7*day){s.c_w(c,ct,e);s.c_w(c+\'_s\',f3,es);}else if(d<7*day+1 && d>day){s.c_w(c,ct,e);s.c_w(c+\'_s\',f4,es);}else if(d<day+1){s.c_w(c,ct,e);s.c_w(c+\'_s\',f5,es);}}else{s.c_w(c,ct,e);cval_ss=s.c_r(c+\'_s\');s.c_w(c+\'_s\',cval_ss,es);}}cval_s=s.c_r(c+\'_s\');if(cval_s.length==0) return f0;else if(cval_s!=f1&&cval_s!=f2&&cval_s!=f3&&cval_s!=f4&&cval_s!=f5) return \'\';else return cval_s;'), s.getNewRepeat = new Function('d', 'cn', 'var s=this,e=new Date(),cval,sval,ct=e.getTime();d=d?d:30;cn=cn?cn:\'s_nr\';e.setTime(ct+d*24*60*60*1000);cval=s.c_r(cn);if(cval.length==0){s.c_w(cn,ct+\'-New\',e);return\'New\';}sval=s.split(cval,\'-\');if(ct-sval[0]<30*60*1000&&sval[1]==\'New\'){s.c_w(cn,ct+\'-New\',e);return\'New\';}else{s.c_w(cn,ct+\'-Repeat\',e);return\'Repeat\';}'), s.split = new Function('l', 'd', 'var i,x=0,a=new Array;while(l){i=l.indexOf(d);i=i>-1?i:l.length;a[x++]=l.substring(0,i);l=l.substring(i+d.length);}return a'), s.getValOnce = new Function('v', 'c', 'e', 't', 'var s=this,a=new Date,v=v?v:\'\',c=c?c:\'s_gvo\',e=e?e:0,i=t==\'m\'?60000:86400000,k=s.c_r(c);if(v){a.setTime(a.getTime()+e*i);s.c_w(c,v,e==0?0:a);}return v==k?\'\':v'), s.getPreviousValue = new Function('v', 'c', 'el', 'var s=this,t=new Date,i,j,r=\'\';t.setTime(t.getTime()+1800000);if(el){if(s.events){i=s.split(el,\',\');j=s.split(s.events,\',\');for(x in i){for(y in j){if(i[x]==j[y]){if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,\'no value\',t);return r}}}}}else{if(s.c_r(c)) r=s.c_r(c);v?s.c_w(c,v,t):s.c_w(c,\'no value\',t);return r}'), console.log('GOT HERE.');
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pageName: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('pageInstanceId'), t = (_satellite.getVar('pa_pag_pageName'), _satellite.getVar('pa_cat_primaryCategory')), a = [
                                        _satellite.getVar('jcrPathLevel1'),
                                        _satellite.getVar('jcrPathLevel2'),
                                        _satellite.getVar('jcrPathLevel3')
                                    ], n = e.split('/'), i = 6, r = n.length, o = '';
                                for (l = i; l < r; l++)
                                    o += n[l] + ' > ';
                                if (o = o.substring(0, o.length - 3), 'VCO' === t) {
                                    for (var s = '', l = 0; l < 3; l++)
                                        s += a[l] + ' > ';
                                    o = s = s.substring(0, s.length - 3);
                                }
                                return o = o.replace(/-prod/g, '');
                            } catch (c) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pa_pag_destinationUrl: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('finalDataLayer').page.pageInfo.destinationUrl || _satellite.getVar('finalDataLayer').page.pageInfo.destinationURL;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pa_pag_envWork: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('finalDataLayer').page.pageInfo.envWork;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pa_pag_geoRegion: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('finalDataLayer').page.pageInfo.geoRegion;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pa_pag_language: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('finalDataLayer').page.pageInfo.language;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pa_pag_pageID: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('finalDataLayer').page.pageInfo.pageID;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pa_pag_pageName: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('pageInstanceId');
                                return _satellite.getVar('finalDataLayer').page.pageInfo.pageName || e.split('/').splice(-1).toString();
                            } catch (t) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pa_pag_pageTitle: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('finalDataLayer').page.pageInfo.pageTitle;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pa_pag_referringUrl: {
                        customJS: function () {
                            try {
                                return _satellite.getVar('finalDataLayer').page.pageInfo.referringUrl || _satellite.getVar('finalDataLayer').page.pageInfo.referringURL;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pathName: {
                        customJS: function () {
                            try {
                                return e.location.pathname;
                            } catch (t) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    'performance timing sender': {
                        customJS: function () {
                            delete e.perfTime.URL, delete e.perfTime.events, delete e.perfTime.timesString;
                            for (var a = !1, n = 'osmdtm_perf=', i = t.cookie.split(';'), r = 0; r < i.length; r++) {
                                for (var o = i[r]; ' ' === o.charAt(0);)
                                    o = o.substring(1, o.length);
                                0 === o.indexOf(n) && (a = o.substring(n.length, o.length));
                            }
                            if ('[]' != a.toString() && 0 != a) {
                                var s = (a = JSON.parse(a)).shift().split(',');
                                e.perfTime.URL = s[0], _satellite.notify('performance timing: eVar35 = ' + s[0]), e.perfTime.events = 'event235=' + s[1] + ',event236=' + s[2] + ',event237=' + s[3], _satellite.notify('performance timing: events = ' + e.perfTime.events), e.perfTime.timesString = 'nw:' + Math.floor(s[1] / 100) / 10 + '~se:' + Math.floor(s[2] / 100) / 10 + '~br:' + Math.floor(s[3] / 100) / 10, _satellite.notify('performance timing: eVar32 = ' + e.perfTime.timesString);
                                var l = new Date();
                                l.setTime(l.getTime() + 18000000);
                                var c = '; expires=' + l.toGMTString();
                                t.cookie = 'osmdtm_perf=' + JSON.stringify(a) + c + '; path=/', a.length > 0 ? e.perfTime.Queue = !0 : e.perfTime.Queue = !1;
                            }
                        },
                        storeLength: 'pageview'
                    },
                    PII_keywords: {
                        customJS: function () {
                            return {
                                firstname: '',
                                lastname: '',
                                email: '',
                                vin: 'WBA',
                                name: '',
                                loginid: '',
                                password: '',
                                registrationpassword: '',
                                confirmationpassword: '',
                                confirmregistrationpassword: '',
                                registrationid: '',
                                passwordconfirmation: '',
                                username: '',
                                enname: '',
                                token: '',
                                telephone: '',
                                phone: '',
                                '@': '',
                                wb: 'WBA',
                                wm: 'WBA',
                                'fin=': 'WBA',
                                offerhash: 'offerHash=offerID',
                                offer: 'offer/offerId',
                                token: ''
                            };
                        },
                        storeLength: 'pageview'
                    },
                    'PoC iframes: Known Domains': {
                        customJS: function () {
                            return ['feld-m.de'];
                        },
                        storeLength: 'pageview'
                    },
                    pr_att_basePrice: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                if (0 == e.product.length)
                                    return 'not set';
                                var t = e.product.length - 1, a = e.product[t].attributes.basePrice;
                                return '' != a && a || (a = 'not set'), a;
                            } catch (n) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pr_att_basePriceOptions: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                if (0 == e.product.length)
                                    return 'not set';
                                var t = e.product.length - 1, a = e.product[t].attributes.basePriceOptions;
                                return '' != a && a || (a = 'not set'), a;
                            } catch (n) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pr_att_basePriceVehicle: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                if (0 == e.product.length)
                                    return 'not set';
                                var t = e.product.length - 1, a = e.product[t].attributes.basePriceVehicle;
                                return '' != a && a || (a = 'not set'), a;
                            } catch (n) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pr_att_bodyType: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                if (0 == e.product.length)
                                    return 'not set';
                                var t = e.product.length - 1, a = e.product[t].attributes.bodyType;
                                return '' == a && (a = 'not set'), a;
                            } catch (n) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pr_att_mmdr: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                if (0 == e.product.length)
                                    return '';
                                var t = e.product.length - 1;
                                return e.product[t].attributes.mmdr;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pr_att_modelCode: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                if (0 == e.product.length)
                                    return 'not set';
                                var t = e.product.length - 1, a = e.product[t].attributes.modelCode;
                                return '' == a && (a = 'not set'), a;
                            } catch (n) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pr_att_modelName: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                if (0 == e.product.length)
                                    return 'not set';
                                var t = e.product.length - 1, a = e.product[t].attributes.modelName;
                                return '' == a && (a = 'not set'), a;
                            } catch (n) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pr_att_sellingPriceTotal: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                if (0 == e.product.length)
                                    return 'not set';
                                var t = e.product.length - 1, a = e.product[t].attributes.sellingPriceTotal;
                                return '' != a && a || (a = 'not set'), a;
                            } catch (n) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pr_att_serie: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                if (0 == e.product.length)
                                    return 'not set';
                                var t = e.product.length - 1, a = e.product[t].attributes.serie;
                                return '' == a && (a = 'not set'), a;
                            } catch (n) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pr_att_yearOfLaunch: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                if (0 == e.product.length)
                                    return 'not set';
                                var t = e.product.length - 1, a = e.product[t].attributes.yearOfLaunch;
                                return '' == a && (a = 'not set'), a;
                            } catch (n) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    productInformation_DC: {
                        customJS: function () {
                            try {
                                var e, t = _satellite.getVar('dataLayer_product_3.0'), a = t.productInfo || '', n = t.category || '', i = t.attributes || '';
                                return e = '', '' != (a.productID || '') && (e += '~pi:' + (a.productID || '')), '' != (a.productName || '') && (e += '~pn:' + (a.productName || '')), '' != (n.productType || '') && (e += '~pt:' + (n.productType || '')), '' != (n.primaryCategory || '') && (e += '~pd:' + (n.primaryCategory || '')), '' != (n.subCategory1 || '') && (e += '~pp:' + (n.subCategory1 || '')), '' != (i.modelCode || '') && (e += '~pm:' + (i.modelCode || '')), '' != (i.productionYear || '') && (e += '~py:' + (i.productionYear || '')), '' != (i.vehicleSelected || '') && (e += '~ps:' + (i.vehicleSelected || '')), _satellite.notify('Mapping: ~pi: -> digitalData.product[0].productInfo.productID \n ~pn: -> digitalData.product[0].productInfo.productName \n ~pt: -> digitalData.product[0].category.productType \n ~pd: -> digitalData.product[0].category.primaryCategory \n ~pp: -> digitalData.product[0].category.subCategory1 \n ~pm: -> digitalData.product[0].attributes.modelCode \n ~py: -> digitalData.product[0].attributes.productionYear \n ~ps: -> digitalData.product[0].attributes.vehicleSelected'), e;
                            } catch (r) {
                                _satellite.notify('productInformation_DC dataElement ', r);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pr_pro_productID: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                if (0 == e.product.length)
                                    return 'not set';
                                var t = e.product.length - 1, a = e.product[t].productInfo.productID;
                                return '' == a && (a = 'not set'), a;
                            } catch (n) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    pr_pro_productName: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                if (0 == e.product.length)
                                    return 'not set';
                                var t = e.product.length - 1, a = e.product[t].productInfo.productName;
                                return '' == a && (a = 'not set'), a;
                            } catch (n) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    searchKeys: {
                        customJS: function () {
                            return [
                                'eVar',
                                'prop',
                                'referrer',
                                'pageURL',
                                'pageName',
                                'channel',
                                'hier1'
                            ];
                        },
                        storeLength: 'pageview'
                    },
                    server: {
                        customJS: function () {
                            try {
                                return location.hostname;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    SessionID: {
                        customJS: function () {
                            function e(e, t) {
                                for (var a = '', n = e; n > 0; --n)
                                    a += t[Math.round(Math.random() * (t.length - 1))];
                                return a;
                            }
                            try {
                                var n = '.' + _satellite.getVar('topLevelDomain');
                                if ('undefined' == typeof _satellite)
                                    return a;
                                var i = _satellite.readCookie('bmwdtm_hq_sid');
                                if (void 0 === i) {
                                    var r, o = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ', s = new Date(), l = s.getUTCFullYear() - 2000, c = s.getMonth(), u = s.getUTCDate(), d = s.getUTCHours(), g = s.getUTCMinutes(), f = s.getUTCSeconds(), p = s.getMilliseconds(), m = o[(d * g * f + p) % o.length], h = o[(d + g + f + p) % o.length], v = e(6, o);
                                    i = o[l] + o[c] + o[u] + o[d] + m + h + v, (r = new Date()).setTime(r.getTime() + 1800000);
                                    var _ = '; expires=' + r.toGMTString();
                                    t.cookie = 'bmwdtm_hq_sid=' + i + _ + ';domain=' + n + '; path=/';
                                }
                                (r = new Date()).setTime(r.getTime() + 1800000);
                                _ = '; expires=' + r.toGMTString();
                                return t.cookie = 'bmwdtm_hq_sid=' + i + _ + ';domain=' + n + '; path=/', i = _satellite.readCookie('bmwdtm_hq_sid');
                            } catch (y) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    solutionSpecific_DC: {
                        customJS: function () {
                            try {
                                var e, t = ((_satellite.getVar('dataLayer_linkedproduct_3.0') || '').attributes || '').solutionSpecific || '';
                                return '' != (t.efinMonthlyInstallment || '') && (e = '~dp:' + t.efinMonthlyInstallment), '' != (t.efinDownPayment || '') && (e += '~do:' + t.efinDownPayment), '' != (t.efinMileage || '') && (e += '~ma:' + t.efinMileage), '' != (t.efinTerm || '') && (e += '~te:' + t.efinTerm), e;
                            } catch (a) {
                                _satellite.notify(a);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    splitConsentEnabled: {
                        customJS: function () {
                            try {
                                var t = [
                                        'thisissecure.net',
                                        'onlinevehiclesales.mini.co.uk',
                                        'onlinevehiclesales.bmw.co.uk',
                                        'usedcars.bmw.co.uk',
                                        'approvedusedminis.co.uk',
                                        'approvedused.mini.ie',
                                        'approvedused.bmw.ie',
                                        'discover.bmw.co.uk',
                                        'offers.bmw.co.uk'
                                    ], a = e.location.host;
                                return t.indexOf(a) > -1 ? 'true' : 'false';
                            } catch (n) {
                                return _satellite.notify('Error in DE: splitConsentEnabled' + n), 'false';
                            }
                        },
                        storeLength: 'pageview'
                    },
                    s_products_vco_v52: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('pr_att_serie'), t = _satellite.getVar('pr_att_bodyType'), a = _satellite.getVar('pr_att_yearOfLaunch'), n = _satellite.getVar('pr_att_basePriceVehicle'), i = _satellite.getVar('pr_att_sellingPriceTotal'), r = _satellite.getVar('pr_att_basePrice'), o = _satellite.getVar('pr_att_basePriceOptions'), s = _satellite.getVar('pr_att_modelName'), l = _satellite.getVar('pr_att_modelCode'), c = _satellite.getVar('pr_att_mmdr');
                                return '' == c && (c = 'not set'), 'ps:Car~mr:' + c + '~pi:' + c + '~mc:' + l + '~pn:' + s + '~se:' + e + '~bt:' + t + '~yl:' + a + '~bp:' + n + '~op:' + o + '~tp:' + r + '~sp:' + i;
                            } catch (u) {
                                return 'not set';
                            }
                        },
                        storeLength: 'pageview'
                    },
                    s_products_vco_v53: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('pr_pro_productID'), t = '', a = e.split('::');
                                for (2 == a.length && (a[1] = 'not set'), i = 1; i < a.length; i++)
                                    t += ';' + a[i] + ';1;;;eVar53=ps:not set~pi:' + a[i] + ',';
                                if ('' != t)
                                    return t = t.slice(0, -1);
                            } catch (n) {
                                return 'not set';
                            }
                        },
                        storeLength: 'pageview'
                    },
                    teaserClicked: {
                        customJS: function () {
                            try {
                                var e = '';
                                if ('undefined' != typeof digitals2.tracking.api.getPageObject(0).event[0]) {
                                    var t = digitals2.tracking.api.getPageObject(0).event[0], a = t.eventInfo.eventAction, n = t.attributes.relatedComponent.componentInfo.componentName;
                                    if ('Internal click' === a && n.indexOf('teaser') > -1) {
                                        t.eventInfo.eventName;
                                        var i = t.eventInfo.eventPoints, r = (t.eventInfo.cause, t.eventInfo.target, t.attributes.relatedComponent.componentInfo.componentID, t.attributes.relatedComponent.componentInfo.componentHeadline);
                                        _satellite.getVar('functionList');
                                        '' === i && (i = '1');
                                        e = n.dtm_readable().dtm_capitalize() + ': ' + r + '|' + i;
                                    }
                                }
                                return e;
                            } catch (o) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    teaserList: {
                        customJS: function () {
                            try {
                                _satellite.getVar('functionList');
                                var e = digitals2.tracking.api.getPageObject(0);
                                if ('undefined' != typeof e.component)
                                    for (var t = '', a = 0; a < e.component.length; a++)
                                        e.component[a].componentInfo.componentName.indexOf('teaser') > -1 && e.component[a].componentInfo.componentName.indexOf('stage_teaser') < 0 && 'true' === e.component[a].attributes.visible && (t += e.component[a].componentInfo.componentName.dtm_readable().dtm_capitalize() + ': ' + e.component[a].componentInfo.componentHeadline + '|1;');
                                return t = t.slice(0, -1);
                            } catch (n) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    techMetaData: {
                        customJS: function () {
                            try {
                                var t = 'na', a = 'na', n = 'na', i = 'na', r = _satellite.getVar('dataLayer_page_3.0'), o = 'na';
                                if ('boolean' == typeof e._satellite.settings.isStaging && (t = 1 == _satellite.settings.isStaging ? 'staging' : 'prod'), '' != ((r.pageInfo || '').sysEnv || '') && (t = (r.pageInfo || '').sysEnv || ''), void 0 !== _satellite.readCookie('cc_consentCookie'))
                                    try {
                                        o = cookiecontroller.api.getRegulationType();
                                    } catch (c) {
                                        o = 'na';
                                    }
                                if (e.s && e.s.visitor && e.s.visitor.version)
                                    a = s.visitor.version;
                                if (e.s && e.s.version)
                                    n = s.version;
                                if (e._satellite.publishDate)
                                    i = _satellite.publishDate;
                                var l = _satellite.getVar('isRegulationAccepted') || 'na';
                                return techMetaData = 'ev:' + t + '~aa:' + n + '~av:' + a + '~pd:' + i + '~cr:' + o + '~uc:' + l, techMetaData;
                            } catch (c) {
                                _satellite.notify(c);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    techMetaData_DC: {
                        customJS: function () {
                            try {
                                var t = _satellite.getVar('dataLayer_page_3.0'), a = (t.category || '').subCategory1 || '', n = 'not set', i = 'not set', r = '3.3.0', o = '2.13.1', s = 'not set', l = 'not set', c = 'not set', u = 'not set';
                                return i = t.pageInfo.sysENV || t.pageInfo.sysEnv || 'not set', s = e._satellite.buildDate, c = t.attributes.currencyCode || 'not set', u = t.attributes.timeZone || 'not set', _satellite.getVar('isRegulationAccepted') && (l = 'Regulation Accepted:' + _satellite.getVar('isRegulationAccepted')), techMetaData = 'tp:' + a + '~ta:' + n + '~te:' + i + '~tj:' + o + '~tv:' + r + '~td:' + s + '~tc:' + l + '~tz:' + u + '~cc:' + c, techMetaData;
                            } catch (d) {
                                _satellite.notify(d);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    topLevelDomain: {
                        customJS: function () {
                            function e() {
                                var e = t.location.hostname, a = e;
                                if (null != e) {
                                    var n = e.split('.').reverse();
                                    null != n && n.length > 1 && (a = n[1] + '.' + n[0], (e.toLowerCase().indexOf('.co.') > -1 || e.toLowerCase().indexOf('.com.') > -1 && n.length > 2) && (a = n[2] + '.' + a));
                                }
                                return a;
                            }
                            try {
                                return e();
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    URL: {
                        customJS: function () {
                            try {
                                return e.location.href;
                            } catch (t) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    URLNoParam: {
                        customJS: function () {
                            try {
                                return location.host + location.pathname;
                            } catch (e) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    userInformation_DC: {
                        customJS: function () {
                            try {
                                var e, t = _satellite.getVar('finalDataLayer').user;
                                'number' == typeof _satellite.getVar('finalDataLayer').user.length && (t = t.length > 0 ? t[t.length - 1] : t[t.length]);
                                var n, i = (e = t && t.profile && 'undefined' != typeof t.profile && t.profile.length === a ? t.profile || {} : t && t.profile && t.profile.length ? t.profile[t.profile.length - 1] : []).profileInfo || '', r = e.address || '';
                                return n = '', t && t.segment && '' != (t.segment || '') && (n += '~us:' + (t.segment || '')), '' != (i.profileID || '') && (n += '~ui:' + (i.profileID || '')), '' != (i.language || '') && (n += '~ul:' + (i.language || '')), '' != (i.returningStatus || '') && (n += '~ur:' + (i.returningStatus || '')), '' != (i.type || '') && (n += '~ut:' + (i.type || '')), '' != (r.stateProvince || '') && (n += '~ua:' + (r.stateProvince || '')), '' != (r.country || '') && (n += '~uc:' + (r.country || '')), e && e.attributes && e.attributes.LoggedInStatus && '' != (String(e.attributes.LoggedInStatus) || '') && (n += '~uv:' + (String(e.attributes.LoggedInStatus) || '')), e && e.attributes && e.attributes.loggedInStatus && '' != (String(e.attributes.loggedInStatus) || '') && (n += '~uv:' + (String(e.attributes.loggedInStatus) || '')), n += 'undefined' != typeof Visitor && '' != Visitor.getInstance('B52D1CFE5330949C0A490D45@AdobeOrg').getMarketingCloudVisitorID() && 'T' != Visitor.getInstance('B52D1CFE5330949C0A490D45@AdobeOrg').getMarketingCloudVisitorID() && void 0 !== Visitor.getInstance('B52D1CFE5330949C0A490D45@AdobeOrg').getMarketingCloudVisitorID() ? '~ux:' + Visitor.getInstance('B52D1CFE5330949C0A490D45@AdobeOrg').getMarketingCloudVisitorID() : '' != _satellite.readCookie('AMCV_B52D1CFE5330949C0A490D45%40AdobeOrg') && _satellite.readCookie('AMCV_B52D1CFE5330949C0A490D45%40AdobeOrg') != a && 'T' != _satellite.readCookie('AMCV_B52D1CFE5330949C0A490D45%40AdobeOrg') ? '~ux:' + decodeURIComponent(_satellite.readCookie('AMCV_B52D1CFE5330949C0A490D45%40AdobeOrg')).split('|')[decodeURIComponent(_satellite.readCookie('AMCV_B52D1CFE5330949C0A490D45%40AdobeOrg')).split('|').indexOf('MCMID') + 1] : '~ux:D=mid';
                            } catch (o) {
                                _satellite.notify('userInformation dataElement -', o);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    userInformation_NSC: {
                        customJS: function () {
                            try {
                                var e, t, n = _satellite.getVar('finalDataLayer').user;
                                return 'number' == typeof _satellite.getVar('finalDataLayer').user.length && (n = n.length > 0 ? n[n.length - 1] : n[n.length]), e = n && n.profile && 'undefined' != typeof n.profile && n.profile.length === a ? n.profile || {} : n && n.profile && n.profile.length ? n.profile[n.profile.length - 1] : [], t = '', e && '' != ((e.attributes || '').loggedInStatus || '') && (t += '~lo:' + ((e.attributes || '').loggedInStatus || '')), e && e.address && '' != ((e.address || '').stateProvince || '') && (t += '~pr:' + ((e.address || '').stateProvince || '')), e && e.address && '' != ((e.address || '').country || '') && (t += '~co:' + ((e.address || '').country || '')), e && '' != ((e.profileInfo || '').type || '') && (t += '~ct:' + ((e.profileInfo || '').type || '')), t;
                            } catch (i) {
                                _satellite.notify('userInformation_NSC dataElement -', i);
                            }
                        },
                        storeLength: 'pageview'
                    },
                    userMetaData: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('topLevelDomain'), a = '', n = _satellite.getVar('us_seg_location');
                                if (n)
                                    a = 'pr:' + n + '~';
                                a += '';
                                var i = _satellite.getVar('osm_usertype');
                                a += 'ct:' + i + '~', 'customer' == i.toLowerCase() && (a += 'et:Online~'), a = a.slice(0, -1);
                                var r = _satellite.readCookie('bmwdtm_hq_userdata');
                                r && (r = r.split('~'));
                                for (var o = a.split('~'), s = '', l = 0; l < o.length; l++)
                                    s += o[l].split(':')[0] + ':~';
                                s = s.split('~').slice(0, -1);
                                var c = '';
                                if (r) {
                                    for (var u = 0; u < s.length; u++)
                                        for (var d = 0; d < r.length; d++)
                                            r[d].indexOf(s[u]) > -1 && r.splice(d, 1);
                                    c = o.concat(r).join('~');
                                } else
                                    c = a;
                                var g = new Date();
                                g.setTime(g.getTime() + 31104000000);
                                var f = '; expires=' + g.toGMTString();
                                return t.cookie = 'bmwdtm_hq_userdata=' + c + f + ';domain=.' + e + ';path=/', c;
                            } catch (p) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    us_seg_location: {
                        customJS: function () {
                            try {
                                var e = _satellite.getVar('finalDataLayer');
                                if (0 == e.user.length)
                                    return 'No Location';
                                var t = e.user.length - 1;
                                return e.user[t].segment.location;
                            } catch (a) {
                            }
                        },
                        storeLength: 'pageview'
                    },
                    utmParameter: {
                        customJS: function () {
                            function e(e) {
                                e = e.replace(/[\[]/, '\\[').replace(/[\]]/, '\\]');
                                var t = new RegExp('[\\?&]' + e + '=([^&#]*)').exec(location.search);
                                return null === t ? '' : decodeURIComponent(t[1].replace(/\+/g, ' '));
                            }
                            try {
                                for (var t = [
                                            'utm_campaign',
                                            'utm_medium',
                                            'utm_source',
                                            'utm_term',
                                            'utm_content'
                                        ], a = (_satellite.getVar('topLevelDomain'), ''), n = 0, i = 0; i < t.length; i++)
                                    e(t[i]) ? a += t[i] + '=' + e(t[i]) + '|' : (a += t[i] + '=no value|', n++);
                                return a = 5 == n ? '' : a.slice(0, -1);
                            } catch (r) {
                                'true' == localStorage.getItem('sdsat_debug') && console.log('SATELLITE: Campaign not tracked');
                            }
                        },
                        storeLength: 'pageview'
                    },
                    VideoSource: {
                        customJS: function () {
                            var e = t.getElementsByTagName('video'), a = 0;
                            for (i = 0; i < e.length; i++)
                                e[i].paused || (a = i, i = e.length);
                            return console.dir(e), console.log('Video Index' + a), e[a].getElementsByTagName('source')[0].getAttribute('src');
                        },
                        storeLength: 'pageview'
                    },
                    VisitorID: {
                        customJS: function () {
                            new AppMeasurement();
                            return e.Visitor = function (a, n) {
                                if (!a)
                                    throw 'Visitor requires Adobe Marketing Cloud Org ID';
                                var i = this;
                                i.version = '1.5';
                                var r = e, o = r.Visitor;
                                r.s_c_in || (r.s_c_il = [], r.s_c_in = 0), i._c = 'Visitor', i._il = r.s_c_il, i._in = r.s_c_in, i._il[i._in] = i, r.s_c_in++;
                                var s = r.document, l = o.La;
                                l || (l = null);
                                var c = o.Ma;
                                c || (c = void 0);
                                var u = o.ja;
                                u || (u = !0);
                                var d = o.Ka;
                                d || (d = !1), i.R = function (e) {
                                    var t, a = 0;
                                    if (e)
                                        for (t = 0; t < e.length; t++)
                                            a = (a << 5) - a + e.charCodeAt(t), a &= a;
                                    return a;
                                }, i.q = function (e) {
                                    var t, a = '0123456789', n = '', i = '', r = 8, o = 10, s = 10;
                                    if (1 == e) {
                                        for (a += 'ABCDEF', e = 0; 16 > e; e++)
                                            t = Math.floor(Math.random() * r), n += a.substring(t, t + 1), t = Math.floor(Math.random() * r), i += a.substring(t, t + 1), r = 16;
                                        return n + '-' + i;
                                    }
                                    for (e = 0; 19 > e; e++)
                                        t = Math.floor(Math.random() * o), n += a.substring(t, t + 1), 0 == e && 9 == t ? o = 3 : (1 == e || 2 == e) && 10 != o && 2 > t ? o = 10 : 2 < e && (o = 10), t = Math.floor(Math.random() * s), i += a.substring(t, t + 1), 0 == e && 9 == t ? s = 3 : (1 == e || 2 == e) && 10 != s && 2 > t ? s = 10 : 2 < e && (s = 10);
                                    return n + i;
                                }, i.la = function () {
                                    var e;
                                    if (!e && r.location && (e = r.location.hostname), e)
                                        if (/^[0-9.]+$/.test(e))
                                            e = '';
                                        else {
                                            var t = e.split('.'), a = t.length - 1, n = a - 1;
                                            if (1 < a && 2 >= t[a].length && (2 == t[a - 1].length || 0 > ',ac,ad,ae,af,ag,ai,al,am,an,ao,aq,ar,as,at,au,aw,ax,az,ba,bb,be,bf,bg,bh,bi,bj,bm,bo,br,bs,bt,bv,bw,by,bz,ca,cc,cd,cf,cg,ch,ci,cl,cm,cn,co,cr,cu,cv,cw,cx,cz,de,dj,dk,dm,do,dz,ec,ee,eg,es,et,eu,fi,fm,fo,fr,ga,gb,gd,ge,gf,gg,gh,gi,gl,gm,gn,gp,gq,gr,gs,gt,gw,gy,hk,hm,hn,hr,ht,hu,id,ie,im,in,io,iq,ir,is,it,je,jo,jp,kg,ki,km,kn,kp,kr,ky,kz,la,lb,lc,li,lk,lr,ls,lt,lu,lv,ly,ma,mc,md,me,mg,mh,mk,ml,mn,mo,mp,mq,mr,ms,mt,mu,mv,mw,mx,my,na,nc,ne,nf,ng,nl,no,nr,nu,nz,om,pa,pe,pf,ph,pk,pl,pm,pn,pr,ps,pt,pw,py,qa,re,ro,rs,ru,rw,sa,sb,sc,sd,se,sg,sh,si,sj,sk,sl,sm,sn,so,sr,st,su,sv,sx,sy,sz,tc,td,tf,tg,th,tj,tk,tl,tm,tn,to,tp,tr,tt,tv,tw,tz,ua,ug,uk,us,uy,uz,va,vc,ve,vg,vi,vn,vu,wf,ws,yt,'.indexOf(',' + t[a] + ',')) && n--, 0 < n)
                                                for (e = ''; a >= n;)
                                                    e = t[a] + (e ? '.' : '') + e, a--;
                                        }
                                    return e;
                                }, i.cookieRead = function (e) {
                                    e = encodeURIComponent(e);
                                    var t = (';' + s.cookie).split(' ').join(';'), a = t.indexOf(';' + e + '='), n = 0 > a ? a : t.indexOf(';', a + 1);
                                    return 0 > a ? '' : decodeURIComponent(t.substring(a + 2 + e.length, 0 > n ? t.length : n));
                                }, i.cookieWrite = function (e, t, a) {
                                    t = '' + t;
                                    var n, r = (r = i.cookieLifetime) ? ('' + r).toUpperCase() : '';
                                    return a && 'SESSION' != r && 'NONE' != r ? (n = '' != t ? parseInt(r || 0, 10) : -60) ? (a = new Date()).setTime(a.getTime() + 1000 * n) : 1 == a && (n = (a = new Date()).getYear(), a.setYear(n + 2 + (1900 > n ? 1900 : 0))) : a = 0, e && 'NONE' != r ? (s.cookie = encodeURIComponent(e) + '=' + encodeURIComponent(t) + '; path=/;' + (a ? ' expires=' + a.toGMTString() + ';' : '') + (i.cookieDomain ? ' domain=' + i.cookieDomain + ';' : ''), i.cookieRead(e) == t) : 0;
                                }, i.g = l, i.N = function (e, t) {
                                    try {
                                        'function' == typeof e ? e.apply(r, t) : e[1].apply(e[0], t);
                                    } catch (a) {
                                    }
                                }, i.pa = function (e, t) {
                                    t && (i.g == l && (i.g = {}), i.g[e] == c && (i.g[e] = []), i.g[e].push(t));
                                }, i.o = function (e, t) {
                                    if (i.g != l) {
                                        var a = i.g[e];
                                        if (a)
                                            for (; 0 < a.length;)
                                                i.N(a.shift(), t);
                                    }
                                }, i.j = l, i.na = function (e, t, a) {
                                    var n, r = 0, c = 0;
                                    if (t && s) {
                                        for (n = 0; !r && 2 > n;) {
                                            try {
                                                r = (r = s.getElementsByTagName(0 < n ? 'HEAD' : 'head')) && 0 < r.length ? r[0] : 0;
                                            } catch (u) {
                                                r = 0;
                                            }
                                            n++;
                                        }
                                        if (!r)
                                            try {
                                                s.body && (r = s.body);
                                            } catch (d) {
                                                r = 0;
                                            }
                                        if (r)
                                            for (n = 0; !c && 2 > n;) {
                                                try {
                                                    c = s.createElement(0 < n ? 'SCRIPT' : 'script');
                                                } catch (o) {
                                                    c = 0;
                                                }
                                                n++;
                                            }
                                    }
                                    t && r && c ? (c.type = 'text/javascript', c.setAttribute('async', 'async'), c.src = t, r.firstChild ? r.insertBefore(c, r.firstChild) : r.appendChild(c), a && (i.j == l && (i.j = {}), i.j[e] = setTimeout(a, i.loadTimeout))) : a && a();
                                }, i.ka = function (e) {
                                    i.j != l && i.j[e] && (clearTimeout(i.j[e]), i.j[e] = 0);
                                }, i.S = d, i.T = d, i.isAllowed = function () {
                                    return !i.S && (i.S = u, i.cookieRead(i.cookieName) || i.cookieWrite(i.cookieName, 'T', 1)) && (i.T = u), i.T;
                                }, i.a = l, i.e = l;
                                var g = o.Za;
                                g || (g = 'MC');
                                var f = o.cb;
                                f || (f = 'MCMID');
                                var p = o.$a;
                                p || (p = 'MCCIDH');
                                var m = o.bb;
                                m || (m = 'MCSYNCS');
                                var h = o.ab;
                                h || (h = 'MCIDTS');
                                var v = o.Xa;
                                v || (v = 'A');
                                var _ = o.Ua;
                                _ || (_ = 'MCAID');
                                var y = o.Ya;
                                y || (y = 'AAM');
                                var b = o.Wa;
                                b || (b = 'MCAAMLH');
                                var C = o.Va;
                                C || (C = 'MCAAMB');
                                var I = o.eb;
                                I || (I = 'NONE'), i.B = 0, i.Q = function () {
                                    if (!i.B) {
                                        var e = i.version;
                                        i.audienceManagerServer && (e += '|' + i.audienceManagerServer), i.audienceManagerServerSecure && (e += '|' + i.audienceManagerServerSecure), i.B = i.R(e);
                                    }
                                    return i.B;
                                }, i.U = d, i.f = function () {
                                    if (!i.U) {
                                        i.U = u;
                                        var e, t, a, n = i.Q(), r = d, o = i.cookieRead(i.cookieName), s = new Date();
                                        if (i.a == l && (i.a = {}), o && 'T' != o)
                                            for ((o = o.split('|'))[0].match(/^[\-0-9]+$/) && (parseInt(o[0], 10) != n && (r = u), o.shift()), 1 == o.length % 2 && o.pop(), n = 0; n < o.length; n += 2)
                                                t = (e = o[n].split('-'))[0], a = o[n + 1], e = 1 < e.length ? parseInt(e[1], 10) : 0, r && (t == p && (a = ''), 0 < e && (e = s.getTime() / 1000 - 60)), t && a && (i.c(t, a, 1), 0 < e && (i.a['expire' + t] = e, s.getTime() >= 1000 * e && (i.e || (i.e = {}), i.e[t] = u)));
                                        !i.b(_) && (o = i.cookieRead('s_vi')) && (1 < (o = o.split('|')).length && 0 <= o[0].indexOf('v1') && (0 <= (n = (a = o[1]).indexOf('[')) && (a = a.substring(0, n)), a && a.match(/^[0-9a-fA-F\-]+$/) && i.c(_, a)));
                                    }
                                }, i.ra = function () {
                                    var e, t, a = i.Q();
                                    for (e in i.a)
                                        !Object.prototype[e] && i.a[e] && 'expire' != e.substring(0, 6) && (t = i.a[e], a += (a ? '|' : '') + e + (i.a['expire' + e] ? '-' + i.a['expire' + e] : '') + '|' + t);
                                    i.cookieWrite(i.cookieName, a, 1);
                                }, i.b = function (e, t) {
                                    return i.a == l || !t && i.e && i.e[e] ? l : i.a[e];
                                }, i.c = function (e, t, a) {
                                    i.a == l && (i.a = {}), i.a[e] = t, a || i.ra();
                                }, i.ma = function (e, t) {
                                    var a = i.b(e, t);
                                    return a ? a.split('*') : l;
                                }, i.qa = function (e, t, a) {
                                    i.c(e, t ? t.join('*') : '', a);
                                }, i.Ra = function (e, t) {
                                    var a = i.ma(e, t);
                                    if (a) {
                                        var n, r = {};
                                        for (n = 0; n < a.length; n += 2)
                                            r[a[n]] = a[n + 1];
                                        return r;
                                    }
                                    return l;
                                }, i.Ta = function (e, t, a) {
                                    var n, r = l;
                                    if (t)
                                        for (n in (r = [], t))
                                            Object.prototype[n] || (r.push(n), r.push(t[n]));
                                    i.qa(e, r, a);
                                }, i.l = function (e, t) {
                                    var a = new Date();
                                    a.setTime(a.getTime() + 1000 * t), i.a == l && (i.a = {}), i.a['expire' + e] = Math.floor(a.getTime() / 1000), 0 > t ? (i.e || (i.e = {}), i.e[e] = u) : i.e && (i.e[e] = d);
                                }, i.P = function (e) {
                                    return e && ('object' == typeof e && (e = e.d_mid ? e.d_mid : e.visitorID ? e.visitorID : e.id ? e.id : e.uuid ? e.uuid : '' + e), e && ('NOTARGET' == (e = e.toUpperCase()) && (e = I)), !e || e != I && !e.match(/^[0-9a-fA-F\-]+$/)) && (e = ''), e;
                                }, i.i = function (e, t) {
                                    if (i.ka(e), i.h != l && (i.h[e] = d), e == g) {
                                        var a = i.b(f);
                                        if (!a) {
                                            if (!(a = 'object' == typeof t && t.mid ? t.mid : i.P(t))) {
                                                if (i.u)
                                                    return void i.getAnalyticsVisitorID(l, d, u);
                                                a = i.q();
                                            }
                                            i.c(f, a);
                                        }
                                        a && a != I || (a = ''), 'object' == typeof t && ((t.d_region || t.dcs_region || t.d_blob || t.blob) && i.i(y, t), i.u && t.mid && i.i(v, { id: t.id })), i.o(f, [a]);
                                    }
                                    if (e == y && 'object' == typeof t) {
                                        a = 604800, t.id_sync_ttl != c && t.id_sync_ttl && (a = parseInt(t.id_sync_ttl, 10));
                                        var n = i.b(b);
                                        n || ((n = t.d_region) || (n = t.dcs_region), n && (i.l(b, a), i.c(b, n))), n || (n = ''), i.o(b, [n]), n = i.b(C), (t.d_blob || t.blob) && ((n = t.d_blob) || (n = t.blob), i.l(C, a), i.c(C, n)), n || (n = ''), i.o(C, [n]), !t.error_msg && i.s && i.c(p, i.s), i.idSyncDisableSyncs ? V.aa = u : (V.aa = d, V.Ia({
                                            Aa: t.ibs,
                                            d: t.subdomain
                                        }));
                                    }
                                    e == v && ((a = i.b(_)) || ((a = i.P(t)) ? i.l(C, -1) : a = I, i.c(_, a)), a && a != I || (a = ''), i.o(_, [a]));
                                }, i.h = l, i.r = function (e, t, a, n) {
                                    var r, o = '';
                                    return i.isAllowed() && (i.f(), !(o = i.b(e)) && (e == f ? r = g : e == b || e == C ? r = y : e == _ && (r = v), r)) ? (!t || i.h != l && i.h[r] || (i.h == l && (i.h = {}), i.h[r] = u, i.na(r, t, function () {
                                        if (!i.b(e)) {
                                            var t = '';
                                            e == f ? t = i.q() : r == y && (t = { error_msg: 'timeout' }), i.i(r, t);
                                        }
                                    })), i.pa(e, a), t || i.i(r, { id: I }), '') : (e != f && e != _ || o != I || (o = '', n = u), a && n && i.N(a, [o]), o);
                                }, i._setMarketingCloudFields = function (e) {
                                    i.f(), i.i(g, e);
                                }, i.setMarketingCloudVisitorID = function (e) {
                                    i._setMarketingCloudFields(e);
                                }, i.u = d, i.getMarketingCloudVisitorID = function (e, t) {
                                    if (i.isAllowed()) {
                                        i.marketingCloudServer && 0 > i.marketingCloudServer.indexOf('.demdex.net') && (i.u = u);
                                        var a = i.A('_setMarketingCloudFields');
                                        return i.r(f, a, e, t);
                                    }
                                    return '';
                                }, i.oa = function () {
                                    i.getAudienceManagerBlob();
                                }, o.AuthState = {
                                    UNKNOWN: 0,
                                    AUTHENTICATED: 1,
                                    LOGGED_OUT: 2
                                }, i.p = {}, i.O = d, i.s = '', i.setCustomerIDs = function (e) {
                                    if (i.isAllowed() && e) {
                                        var t, a;
                                        for (t in (i.f(), e))
                                            if (!Object.prototype[t] && (a = e[t]))
                                                if ('object' == typeof a) {
                                                    var n = {};
                                                    a.id && (n.id = a.id), a.authState != c && (n.authState = a.authState), i.p[t] = n;
                                                } else
                                                    i.p[t] = { id: a };
                                        e = i.getCustomerIDs(), n = i.b(p);
                                        var r = '';
                                        for (t in (n || (n = 0), e))
                                            Object.prototype[t] || (r += (r ? '|' : '') + t + '|' + ((a = e[t]).id ? a.id : '') + (a.authState ? a.authState : ''));
                                        i.s = i.R(r), i.s != n && (i.O = u, i.oa());
                                    }
                                }, i.getCustomerIDs = function () {
                                    i.f();
                                    var e, t, a = {};
                                    for (e in i.p)
                                        Object.prototype[e] || (t = i.p[e], a[e] || (a[e] = {}), t.id && (a[e].id = t.id), a[e].authState = t.authState != c ? t.authState : o.AuthState.UNKNOWN);
                                    return a;
                                }, i._setAnalyticsFields = function (e) {
                                    i.f(), i.i(v, e);
                                }, i.setAnalyticsVisitorID = function (e) {
                                    i._setAnalyticsFields(e);
                                }, i.getAnalyticsVisitorID = function (e, t, a) {
                                    if (i.isAllowed()) {
                                        var n = '';
                                        if (a || (n = i.getMarketingCloudVisitorID(function () {
                                                i.getAnalyticsVisitorID(e, u);
                                            })), n || a) {
                                            var r = a ? i.marketingCloudServer : i.trackingServer, o = '';
                                            return i.loadSSL && (a ? i.marketingCloudServerSecure && (r = i.marketingCloudServerSecure) : i.trackingServerSecure && (r = i.trackingServerSecure)), r && (o = 'http' + (i.loadSSL ? 's' : '') + '://' + r + '/id?callback=s_c_il%5B' + i._in + '%5D._set' + (a ? 'MarketingCloud' : 'Analytics') + 'Fields&mcorgid=' + encodeURIComponent(i.marketingCloudOrgID) + (n ? '&mid=' + n : '')), i.r(a ? f : _, o, e, t);
                                        }
                                    }
                                    return '';
                                }, i._setAudienceManagerFields = function (e) {
                                    i.f(), i.i(y, e);
                                }, i.A = function (e) {
                                    var t = i.audienceManagerServer, a = '', n = i.b(f), r = i.b(C, u), o = (o = i.b(_)) && o != I ? '&d_cid_ic=AVID%01' + encodeURIComponent(o) : '';
                                    if (i.loadSSL && i.audienceManagerServerSecure && (t = i.audienceManagerServerSecure), t) {
                                        var s, l;
                                        if (a = i.getCustomerIDs())
                                            for (s in a)
                                                Object.prototype[s] || (l = a[s], o += '&d_cid_ic=' + encodeURIComponent(s) + '%01' + encodeURIComponent(l.id ? l.id : '') + (l.authState ? '%01' + l.authState : ''));
                                        e || (e = '_setAudienceManagerFields'), a = 'http' + (i.loadSSL ? 's' : '') + '://' + t + '/id?d_rtbd=json&d_ver=2' + (!n && i.u ? '&d_verify=1' : '') + '&d_orgid=' + encodeURIComponent(i.marketingCloudOrgID) + '&d_nsid=' + (i.idSyncContainerID || 0) + (n ? '&d_mid=' + n : '') + (r ? '&d_blob=' + encodeURIComponent(r) : '') + o + '&d_cb=s_c_il%5B' + i._in + '%5D.' + e;
                                    }
                                    return a;
                                }, i.getAudienceManagerLocationHint = function (e, t) {
                                    if (i.isAllowed() && i.getMarketingCloudVisitorID(function () {
                                            i.getAudienceManagerLocationHint(e, u);
                                        })) {
                                        var a = i.b(_);
                                        if (a || (a = i.getAnalyticsVisitorID(function () {
                                                i.getAudienceManagerLocationHint(e, u);
                                            })), a)
                                            return a = i.A(), i.r(b, a, e, t);
                                    }
                                    return '';
                                }, i.getAudienceManagerBlob = function (e, t) {
                                    if (i.isAllowed() && i.getMarketingCloudVisitorID(function () {
                                            i.getAudienceManagerBlob(e, u);
                                        })) {
                                        var a = i.b(_);
                                        if (a || (a = i.getAnalyticsVisitorID(function () {
                                                i.getAudienceManagerBlob(e, u);
                                            })), a)
                                            return a = i.A(), i.O && i.l(C, -1), i.r(C, a, e, t);
                                    }
                                    return '';
                                }, i.m = '', i.t = {}, i.C = '', i.D = {}, i.getSupplementalDataID = function (e, t) {
                                    !i.m && !t && (i.m = i.q(1));
                                    var a = i.m;
                                    return i.C && !i.D[e] ? (a = i.C, i.D[e] = u) : a && (i.t[e] && (i.C = i.m, i.D = i.t, i.m = a = t ? '' : i.q(1), i.t = {}), a && (i.t[e] = u)), a;
                                };
                                var D = {
                                    k: !!r.postMessage,
                                    ha: 1,
                                    M: 86400000
                                };
                                i.Na = D, i.W = {
                                    postMessage: function (e, t, a) {
                                        var n = 1;
                                        t && (D.k ? a.postMessage(e, t.replace(/([^:]+:\/\/[^\/]+).*/, '$1')) : t && (a.location = t.replace(/#.*$/, '') + '#' + +new Date() + n++ + '&' + e));
                                    },
                                    I: function (t, a) {
                                        var n;
                                        try {
                                            D.k && (t && (n = function (e) {
                                                if ('string' == typeof a && e.origin !== a || '[object Function]' === Object.prototype.toString.call(a) && !1 === a(e.origin))
                                                    return !1;
                                                t(e);
                                            }), e.addEventListener ? e[t ? 'addEventListener' : 'removeEventListener']('message', n, !1) : e[t ? 'attachEvent' : 'detachEvent']('onmessage', n));
                                        } catch (i) {
                                        }
                                    }
                                };
                                var S = {
                                    X: s.addEventListener ? function (e, t, a) {
                                        e.addEventListener(t, function (e) {
                                            'function' == typeof a && a(e);
                                        }, d);
                                    } : s.attachEvent ? function (e, t, a) {
                                        e.attachEvent('on' + t, function (e) {
                                            'function' == typeof a && a(e);
                                        });
                                    } : void 0,
                                    map: function (e, t) {
                                        if (Array.prototype.map)
                                            return e.map(t);
                                        if (void 0 === e || e === l)
                                            throw new TypeError();
                                        var a = Object(e), n = a.length >>> 0;
                                        if ('function' != typeof t)
                                            throw new TypeError();
                                        for (var i = Array(n), r = 0; r < n; r++)
                                            r in a && (i[r] = t.call(t, a[r], r, a));
                                        return i;
                                    },
                                    xa: function (e, t) {
                                        return this.map(e, function (e) {
                                            return encodeURIComponent(e);
                                        }).join(t);
                                    }
                                };
                                i.Sa = S;
                                var V = {
                                    ia: 30000,
                                    L: 649,
                                    ea: d,
                                    id: l,
                                    G: l,
                                    $: function (e) {
                                        if ('string' == typeof e)
                                            return (e = e.split('/'))[0] + '//' + e[2];
                                    },
                                    d: l,
                                    url: l,
                                    za: function () {
                                        var e = 'http://fast.', t = '?d_nsid=' + i.idSyncContainerID + '#' + encodeURIComponent(s.location.href);
                                        return this.d || (this.d = 'nosubdomainreturned'), i.loadSSL && (e = i.idSyncSSLUseAkamai ? 'https://fast.' : 'https://'), e = e + this.d + '.demdex.net/dest5.html' + t, this.G = this.$(e), this.id = 'destination_publishing_iframe_' + this.d + '_' + i.idSyncContainerID, e;
                                    },
                                    ta: function () {
                                        var e = '?d_nsid=' + i.idSyncContainerID + '#' + encodeURIComponent(s.location.href);
                                        'string' == typeof i.z && i.z.length && (this.id = 'destination_publishing_iframe_' + new Date().getTime() + '_' + i.idSyncContainerID, this.G = this.$(i.z), this.url = i.z + e);
                                    },
                                    aa: l,
                                    K: d,
                                    v: d,
                                    fb: d,
                                    Ga: d,
                                    gb: d,
                                    J: d,
                                    w: [],
                                    Ea: [],
                                    Fa: [],
                                    ba: D.k ? 15 : 100,
                                    H: [],
                                    Ca: [],
                                    Z: u,
                                    ca: d,
                                    Y: function () {
                                        function e() {
                                            (i = t.createElement('iframe')).id = n.id, i.style.cssText = 'display: none; width: 0; height: 0;', i.src = n.url, n.Ga = u, a(), t.body.appendChild(i);
                                        }
                                        function a() {
                                            S.X(i, 'load', function () {
                                                i.className = 'aamIframeLoaded', n.v = u, n.n();
                                            });
                                        }
                                        this.K = u;
                                        var n = this, i = t.getElementById(this.id);
                                        i ? 'IFRAME' !== i.nodeName ? (this.id += '_2', e()) : 'aamIframeLoaded' !== i.className ? a() : (this.v = u, this.n()) : e(), this.Ba = i;
                                    },
                                    n: function (e) {
                                        var t = this;
                                        e === Object(e) && this.H.push(e), (this.ca || !D.k || this.v) && this.H.length && (this.Ha(this.H.shift()), this.n()), !i.idSyncDisableSyncs && this.v && this.w.length && !this.J && (this.ea || (this.ea = u, setTimeout(function () {
                                            t.ba = D.k ? 15 : 150;
                                        }, this.ia)), this.J = u, this.da());
                                    },
                                    Ha: function (e) {
                                        var t, a, n, i, r, o = encodeURIComponent;
                                        if ((t = e.Aa) && t instanceof Array && (a = t.length))
                                            for (n = 0; n < a; n++)
                                                i = t[n], r = [
                                                    o('ibs'),
                                                    o(i.id || ''),
                                                    o(i.tag || ''),
                                                    S.xa(i.url || [], ','),
                                                    o(i.fa || ''),
                                                    '',
                                                    '',
                                                    i.ya ? 'true' : 'false'
                                                ], this.Z ? this.F(r.join('|')) : i.ya && this.ua(i, r.join('|'));
                                        this.Ca.push(e);
                                    },
                                    ua: function (e, t) {
                                        i.f();
                                        var a = i.b(m), n = d, r = d, o = Math.ceil(new Date().getTime() / D.M);
                                        a ? (a = a.split('*'), n = (r = this.Ja(a, e.id, o)).va, r = r.wa, n && r || (this.F(t), a.push(e.id + '-' + (o + Math.ceil(e.fa / 60 / 24))), this.Da(a), i.c(m, a.join('*')))) : (this.F(t), i.c(m, e.id + '-' + (o + Math.ceil(e.fa / 60 / 24))));
                                    },
                                    Ja: function (e, t, a) {
                                        var n, i, r, o = d, s = d;
                                        for (i = 0; i < e.length; i++)
                                            n = e[i], r = parseInt(n.split('-')[1], 10), n.match('^' + t + '-') ? (o = u, a < r ? s = u : (e.splice(i, 1), i--)) : a >= r && (e.splice(i, 1), i--);
                                        return {
                                            va: o,
                                            wa: s
                                        };
                                    },
                                    Da: function (e) {
                                        if (e.join('*').length > this.L)
                                            for (e.sort(function (e, t) {
                                                    return parseInt(e.split('-')[1], 10) - parseInt(t.split('-')[1], 10);
                                                }); e.join('*').length > this.L;)
                                                e.shift();
                                    },
                                    F: function (e) {
                                        var t = encodeURIComponent;
                                        this.w.push((i.Pa ? t('---destpub-debug---') : t('---destpub---')) + e);
                                    },
                                    da: function () {
                                        var e, t = this;
                                        this.w.length ? (e = this.w.shift(), i.W.postMessage(e, this.url, this.Ba.contentWindow), this.Ea.push(e), setTimeout(function () {
                                            t.da();
                                        }, this.ba)) : this.J = d;
                                    },
                                    I: function (e) {
                                        var t = /^---destpub-to-parent---/;
                                        'string' == typeof e && t.test(e) && ('canSetThirdPartyCookies' === (t = e.replace(t, '').split('|'))[0] && (this.Z = 'true' === t[1] ? u : d, this.ca = u, this.n()), this.Fa.push(e));
                                    },
                                    Ia: function (e) {
                                        this.url === l && (this.d = 'string' == typeof i.V && i.V.length ? i.V : e.d || '', this.url = this.za()), this.d && 'nosubdomainreturned' !== this.d && !this.K && (o.ga || 'complete' === s.readyState || 'loaded' === s.readyState) && this.Y(), 'function' == typeof i.idSyncIDCallResult ? i.idSyncIDCallResult(e) : this.n(e), 'function' == typeof i.idSyncAfterIDCallResult && i.idSyncAfterIDCallResult(e);
                                    },
                                    sa: function (e, t) {
                                        return i.Qa || !e || t - e > D.ha;
                                    }
                                };
                                if (i.Oa = V, 0 > a.indexOf('@') && (a += '@AdobeOrg'), i.marketingCloudOrgID = a, i.cookieName = 'AMCV_' + a, i.cookieDomain = i.la(), i.cookieDomain == r.location.hostname && (i.cookieDomain = ''), i.loadSSL = 0 <= r.location.protocol.toLowerCase().indexOf('https'), i.loadTimeout = 500, i.marketingCloudServer = i.audienceManagerServer = 'dpm.demdex.net', n && 'object' == typeof n) {
                                    for (var k in n)
                                        !Object.prototype[k] && (i[k] = n[k]);
                                    i.idSyncContainerID = i.idSyncContainerID || 0, i.f(), k = i.b(h);
                                    var w = Math.ceil(new Date().getTime() / D.M);
                                    !i.idSyncDisableSyncs && V.sa(k, w) && (i.l(C, -1), i.c(h, w)), i.getMarketingCloudVisitorID(), i.getAudienceManagerLocationHint(), i.getAudienceManagerBlob();
                                }
                                if (!i.idSyncDisableSyncs) {
                                    V.ta(), S.X(e, 'load', function () {
                                        var e = V;
                                        o.ga = u, e.d && 'nosubdomainreturned' !== e.d && e.url && !e.K && e.Y();
                                    });
                                    try {
                                        i.W.I(function (e) {
                                            V.I(e.data);
                                        }, V.G);
                                    } catch (T) {
                                    }
                                }
                            }, Visitor.getInstance = function (t, a) {
                                var n, i, r = e.s_c_il;
                                if (0 > t.indexOf('@') && (t += '@AdobeOrg'), r)
                                    for (i = 0; i < r.length; i++)
                                        if ((n = r[i]) && 'Visitor' == n._c && n.marketingCloudOrgID == t)
                                            return n;
                                return new Visitor(t, a);
                            }, function () {
                                function t() {
                                    a.ga = n;
                                }
                                var a = e.Visitor, n = a.ja;
                                n || (n = !0), e.addEventListener ? e.addEventListener('load', t) : e.attachEvent && e.attachEvent('onload', t);
                            }(), Visitor.getInstance('B52D1CFE5330949C0A490D45@AdobeOrg', {
                                trackingServer: 'bmwag.d3.sc.omtrdc.net',
                                trackingServerSecure: 'bmwag.d3.sc.omtrdc.net'
                            });
                        },
                        storeLength: 'pageview'
                    }
                },
                appVersion: '7QN',
                buildDate: '2021-02-04 07:59:39 UTC',
                publishDate: '2021-02-04 07:59:38 UTC'
            });
        }(window, document);
    }())
}