var _typeof, _typeof;
{
    const $___mock_5ca4651956d93028 = {};
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
    })($___mock_5ca4651956d93028);
    const $___mock_177311337389c91d = {};
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
    })($___mock_177311337389c91d);
    (function () {
        _typeof = $___var_7bb7468d39a8376e;
        ({}.constructor.defineProperty(_typeof, 'name', {
            configurable: true,
            enumerable: false,
            value: '_typeof',
            writable: false
        }));
        _typeof = $___var_0176a89e24c2b0c3;
        ({}.constructor.defineProperty(_typeof, 'name', {
            configurable: true,
            enumerable: false,
            value: '_typeof',
            writable: false
        }));
        function $___var_7bb7468d39a8376e(t) {
            return (_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(e) {
                return typeof e;
            } : function t(e) {
                return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
            })(t);
        }
        !function (t) {
            var e = 'TFASC';
            e.indexOf('{jsScope}') > -1 && (e = 'TRC'), t[e] || (t[e] = {});
        }(window), function (t, e) {
            t.TRC = t.TRC || {};
            var i = function t() {
                    return !0;
                }, n = function i(n, r, s, o) {
                    var a = n + '/' + encodeURIComponent(s || t.TRC.publisherId) + '/log/3' + '/' + r;
                    return o && (a += '?' + e.TRCLogger.formatParams(o)), a;
                }, r = function e(n, r) {
                    const $___old_86d9429a703ed7a5 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_0aa3c3a9a84726c6 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                    try {
                        if ($___old_86d9429a703ed7a5)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_5ca4651956d93028.XMLHttpRequest));
                        if ($___old_0aa3c3a9a84726c6)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_5ca4651956d93028.XMLHttpRequest));
                        return function () {
                            var s, o = new (t.XDomainRequest || t.XMLHttpRequest)();
                            return o.open(n, r), o.onload = i, o.onerror = i, o.ontimeout = i, o.onprogress = i, o.withCredentials = !0, o;
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_86d9429a703ed7a5)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_86d9429a703ed7a5));
                        if ($___old_0aa3c3a9a84726c6)
                            ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_0aa3c3a9a84726c6));
                    }
                };
            t.TRC.TRCLogger = e.TRCLogger = {
                post: function t(i, s, o, a, c) {
                    var u = n(i, s, a, c), l = r('POST', u);
                    l.setRequestHeader && l.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'), l.send(e.TRCLogger.formatParams(o));
                },
                get: function t(e, i, s, o) {
                    var a = n(e, i, o, s), c;
                    r('GET', a).send();
                },
                formatParams: function t(e) {
                    var i = [];
                    for (var n in e)
                        e.hasOwnProperty(n) && i.push(encodeURIComponent(n) + '=' + encodeURIComponent(e[n]));
                    return i.join('&');
                }
            };
        }(window, window['TFASC'.indexOf('{jsScope}') >= 0 ? 'TRC' : 'TFASC']), function (t, e) {
            if (e && !e.MessageDelayer) {
                var i = function i(n) {
                        return function (i) {
                            var r = i.detail, s = i.type, o = '' + r[this.groupingKeyName], a = this.delayedEventsMap[o], c = e.eventUtils.getDateNow();
                            if (a) {
                                this.timeoutHandles[o] && (clearTimeout(this.timeoutHandles[o]), this.timeoutHandles[o] = null);
                                var u = [].concat(a);
                                this.delayedEventsMap[o] = [];
                                for (var l = 0; l < u.length; l++) {
                                    var f = u[l], d;
                                    n(f.config).apply(t, [
                                        f.groupingKey,
                                        f.message,
                                        r,
                                        s,
                                        c - f.queueTime
                                    ]);
                                }
                            }
                        };
                    }, n = i(function (t) {
                        return t.successCallback;
                    }), r = i(function (t) {
                        return t.failCallback;
                    }), s = function t(e, i) {
                        var n = '' + e;
                        this.timeoutHandles[n] || (this.timeoutHandles[n] = setTimeout(function () {
                            this.timeoutHandles[n] = null;
                            var t = {};
                            t[this.groupingKeyName] = e, r.call(this, {
                                detail: t,
                                type: 'dt'
                            });
                        }.bind(this), i));
                    };
                e.MessageDelayer = function (t, i, s) {
                    if (this.groupingKeyName = t, this.delayedEventsMap = {}, this.timeoutHandles = {}, e.eventUtils.safeAddEventListener(i, n.bind(this)), s)
                        for (var o = 0; o < s.length; o++)
                            e.eventUtils.safeAddEventListener(s[o], r.bind(this));
                }, e.MessageDelayer.prototype = {
                    constructor: e.MessageDelayer,
                    delayMessage: function t(i, n, r) {
                        var o = '' + i;
                        r.failCallback = r.failCallback || function () {
                        }, this.delayedEventsMap[o] || (this.delayedEventsMap[o] = []), this.delayedEventsMap[o].push({
                            groupingKey: i,
                            message: n,
                            config: r,
                            queueTime: e.eventUtils.getDateNow()
                        }), r.timeoutInMillis && s.call(this, i, r.timeoutInMillis);
                    }
                };
            }
        }(window, window['TFASC'.indexOf('{jsScope}') >= 0 ? 'TRC' : 'TFASC']), function (t) {
            t.TRC = t.TRC || {}, t.TRC.sharedObjects = t.TRC.sharedObjects || {}, t.TRC.sharedObjects.loadedScripts = t.TRC.sharedObjects.loadedScripts || {}, t.TRC.sharedObjects.loadedPixels = t.TRC.sharedObjects.loadedPixels || {};
        }(window), function (t, e, i) {
            !function () {
                if ('function' == typeof t.CustomEvent)
                    return !1;
                function i(t, i) {
                    i = i || {
                        bubbles: !1,
                        cancelable: !1,
                        detail: void 0
                    };
                    var n = e.createEvent('CustomEvent');
                    return n.initCustomEvent(t, i.bubbles, i.cancelable, i.detail), n;
                }
                i.prototype = t.Event.prototype, t.CustomEvent = i;
            }(), i.eventUtils = i.eventUtils || {}, i.eventUtils.dispatchEvent = i.eventUtils.dispatchEvent || function (t, e) {
                'function' == typeof CustomEvent && document.dispatchEvent(new CustomEvent(t, { detail: e || {} }));
            }, i.eventUtils.safeAddEventListener = i.eventUtils.safeAddEventListener || function (t, e) {
                document.addEventListener(t, function (t) {
                    try {
                        e.call(this, t);
                    } catch (t) {
                    }
                });
            }, i.eventUtils.safeAddEventListenerToWindow = i.eventUtils.safeAddEventListenerToWindow || function (t, e) {
                window.addEventListener(t, function (t) {
                    try {
                        e.call(this, t);
                    } catch (t) {
                    }
                });
            }, i.eventUtils.getDateNow = i.eventUtils.getDateNow || function () {
                var t, e;
                if (Date.now) {
                    if ('number' == typeof (t = Date.now()))
                        return t;
                    if ('number' == typeof (e = Number(t)))
                        return e;
                }
                return new Date().getTime();
            }, i.sharedEvents = i.sharedEvents || {
                PAGE_VIEW: 'TRK_TFA_PAGE_VIEW',
                REQUEST_ID_CREATED: 'TRK_TFA_REQUEST_ID_CREATED',
                REQUEST_ID_CREATION_TIMEOUT: 'TRK_TFA_REQUEST_ID_CREATION_TIMEOUT',
                REQUEST_ID_CREATION_ERROR: 'TRK_TFA_REQUEST_ID_CREATION_ERROR',
                REQUEST_ID_CREATION_JS_ERROR: 'TRK_TFA_REQUEST_ID_CREATION_JS_ERROR',
                INVALID_TRK_RESPONSE: 'TRK_TFA_INVALID_TRK_RESPONSE'
            }, i.publisherIdType = i.publisherIdType || {
                NAME: 'n',
                ID: 'i'
            }, i.pageViewInitiator = i.pageViewInitiator || {
                TRK: 'trk',
                TFA: 'tfa'
            };
        }(window, document, window['TFASC'.indexOf('{jsScope}') >= 0 ? 'TRC' : 'TFASC']), function (t, e) {
            t._tfa = t._tfa || [], t._tfa.config || (t._tfa.TfaConfig = function () {
                this.configMap = {};
            }, t._tfa.TfaConfig.prototype = {
                safeGet: function t(e, i, n) {
                    var r, s, o;
                    if (n && this.configMap[n])
                        r = '' + n;
                    else {
                        if (!this.firstPublisherId)
                            return i;
                        r = this.firstPublisherId;
                    }
                    try {
                        return void 0 === (o = (s = this.configMap[r])[e]) ? i : o;
                    } catch (t) {
                        return i;
                    }
                },
                hasValidConfig: function t() {
                    return !!this.firstPublisherId;
                },
                addConfig: function t(e, i) {
                    'string' == typeof i || i instanceof String || (this.firstPublisherId || (this.firstPublisherId = e), this.configMap['' + e] = i);
                }
            }, t._tfa.config = new t._tfa.TfaConfig(), t._taboola = t._taboola || []), t._tfa.config.addConfig(1267090, {
                'tfa:event-host-map': { 'pre_d_eng_tb': 'trc-events.taboola.com' },
                'tfa:add-item-url:event-list': '*',
                'tfa:trk:is-unified-page-view': true,
                'eid:send-eid-encoded': true,
                'tfa-uid:send-ids-to-cds': false,
                'cds:send-uad-req': true,
                'cds:send-dnid-req': true,
                'tfa:get-publisher-id-from-baker': true,
                'tfa:trk:flc-enabled': true,
                'tfa:engagement:return-visits:is-enabled': true,
                'tfa:collect-eid-from-page': true
            });
        }(window, window['TFASC'.indexOf('{jsScope}') >= 0 ? 'TRC' : 'TFASC']), function (t, e, i) {
            'use strict';
            var n = t[i.jsScope], r = {
                    map: function t(e, i) {
                        if ('function' == typeof Array.prototype.map)
                            return i.map(e);
                        for (var n = [], r = 0; r < i.length; r++)
                            n.push(e(i[r], r, i));
                        return n;
                    },
                    forEach: function t(e, i) {
                        if ('function' == typeof Array.prototype.forEach)
                            return i.forEach(e);
                        for (var n = 0; n < i.length; n++)
                            e(i[n], n, i);
                    },
                    filter: function t(e, i) {
                        if ('function' == typeof Array.prototype.filter)
                            return i.filter(e);
                        for (var n = [], r = 0; r < i.length; r++)
                            e(i[r], r, i) && n.push(i[r]);
                        return n;
                    },
                    objKeys: Object.keys || (s = Object.prototype.hasOwnProperty, o = !{ toString: null }.propertyIsEnumerable('toString'), a = [
                        'toString',
                        'toLocaleString',
                        'valueOf',
                        'hasOwnProperty',
                        'isPrototypeOf',
                        'propertyIsEnumerable',
                        'constructor'
                    ], c = a.length, function (t) {
                        if ('function' != typeof t && ('object' !== _typeof(t) || null === t))
                            throw new TypeError('Object.keys called on non-object');
                        var e = [], i, n;
                        for (i in t)
                            s.call(t, i) && e.push(i);
                        if (o)
                            for (n = 0; n < c; n++)
                                s.call(t, a[n]) && e.push(a[n]);
                        return e;
                    })
                }, s, o, a, c;
            i.networkMap && 'string' != typeof i.networkMap || (i.networkMap = {});
            var u = null, l = null, f = null, d = null, h = {}, g = 0, p = !1, m = 'requestTimeoutHandle', v = 'requestId', S = 'requestStatus', b = 'trkRequestDone', I = 5000, T = 2000, y = 'init', E = 'pr', w = 'pud', R = 'tto', _ = 's', C = 'f', D = 'u', O = [
                    R,
                    C
                ], U = [
                    y,
                    E,
                    w
                ], k = ((G = {})[n.publisherIdType.NAME] = 'name', G[n.publisherIdType.ID] = 'id', G), P = function () {
                    for (var t = {}, e = r.objKeys(i.networkMap), s = 0; s < e.length; ++s) {
                        var o;
                        t['' + i.networkMap[e[s]][k[n.publisherIdType.ID]]] = !0;
                    }
                    return t;
                }(), N = 'gk', A = 'dk', M = 'TRK_RELEASE_DELAYED_REQUESTS_EVENT', V = function () {
                    var t = {};
                    return t[N] = A, t;
                }(), L = new n.MessageDelayer(N, M), x = function t(e, i) {
                    K = K.loadTrc(i.publisherId, i.publisherIdType, i.config, i.requestData);
                }, j = {
                    UNINITIALIZED: {
                        loadTrc: function t(e, i, n, r) {
                            var s = Dt();
                            return it(e, i, n, r), s ? j.USER_ID_SET : j.PENDING_USER_ID_SET;
                        }
                    },
                    PENDING_USER_ID_SET: {
                        loadTrc: function t(e, i, n, r) {
                            return r[S] = w, L.delayMessage(A, {
                                publisherId: e,
                                publisherIdType: i,
                                config: n,
                                requestData: r
                            }, { successCallback: x }), j.PENDING_USER_ID_SET;
                        }
                    },
                    USER_ID_SET: {
                        loadTrc: function t(e, i, n, r) {
                            return it(e, i, n, r), j.USER_ID_SET;
                        }
                    }
                }, K = j.UNINITIALIZED, $ = (t.taboola_view_id || (t.taboola_view_id = new Date().getTime()), t.taboola_view_id), F, G, H = function t() {
                    return !0 === i.tfaContext;
                }, q = function t() {
                    const $___old_f829e8085fff9fa0 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_f829e8085fff9fa0)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_177311337389c91d.localStorage));
                        return function () {
                            try {
                                localStorage.setItem('taboolaStorageDetection', 'detect'), localStorage.removeItem('taboolaStorageDetection');
                            } catch (t) {
                                return !1;
                            }
                            return !0;
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_f829e8085fff9fa0)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_f829e8085fff9fa0));
                    }
                }, B = function t(e, i, n) {
                    var r = e.split(i);
                    return r.slice(0, n - 1).concat(r.length >= n ? r.slice(n - 1).join(i) : []);
                }, W = function t(e) {
                    if (!e)
                        throw new Error('Invalid URL!');
                    this.href = e;
                    var i = B(e, '#', 2);
                    return this.hash = i.length > 1 ? '#' + i.pop() : '', e = i[0], i = B(e, '?', 2), this.search = i.length > 1 ? '?' + i.pop() : '', e = i[0], i = B(e, '://', 2), this.protocol = i.length > 1 ? i.shift() + ':' : '', e = i[0], i = B(e, '/', 2), this.pathname = i.length > 1 ? '/' + i.pop() : '/', e = i[0], i = B(e, '@', 2), this.auth = i.length > 1 ? i.shift() : '', e = i[0], i = B(e, ':', 2), this.port = i.length > 1 ? parseInt(i.pop()) : 0, this.host = i[0], this;
                }, z = {
                    'http:': 1,
                    'https:': 1
                };
            W.prototype.toString = function (t) {
                return (this.host ? this.protocol + '//' + (this.auth ? this.auth + '@' : '') + this.host + (this.port ? ':' + this.port : '') : '') + this.pathname + this.search + (t ? '' : this.hash || '');
            }, W.prototype.switchProtocol = function (t, e) {
                var i = this instanceof W ? this : new W(this), n;
                return z[t] && (e && 'https:' === i.protocol || (i.protocol = t)), (n = i.toString(!1)).length > 1 ? n : '';
            }, W.prototype.getParameter = function (t) {
                for (var e, i = (this instanceof W ? this : new W(this)).search.substr(1).split(/&/), n = 0; n < i.length; n++) {
                    var r = i[n].split(new RegExp('='), 2);
                    if (unescape(r[0]) === t)
                        return unescape(r[1]);
                }
                return null;
            };
            var J = {
                    states: {
                        ABP_DETECTION_DISABLED: -2,
                        ABP_NOT_DETECTED: 0,
                        ABP_DETECTED: 1
                    },
                    createBlockDetectionDiv: function t(i) {
                        var n = e.createElement('div');
                        return n.className = i, n.style.fontSize = 'initial', n.appendChild(e.createTextNode('.')), e.documentElement.appendChild(n), n;
                    },
                    isBlockDetectedOnDiv: function t(e) {
                        return !e.offsetHeight;
                    },
                    isBlockDetectedOnClassNames: function t(i) {
                        var n, r = i.length, s;
                        for (n = 0; n < r; n++)
                            if (i[n]) {
                                s = this.createBlockDetectionDiv(i[n]);
                                try {
                                    if (this.isBlockDetectedOnDiv(s))
                                        return !0;
                                } catch (t) {
                                } finally {
                                    e.documentElement.removeChild(s);
                                }
                            }
                        return !1;
                    },
                    getBlockedState: function t(e) {
                        return St() || bt() ? this.states.ABP_NOT_DETECTED : e && this.isBlockDetectedOnClassNames(e) ? this.states.ABP_DETECTED : this.states.ABP_NOT_DETECTED;
                    }
                }, Q = function t(e, i) {
                    for (var n = r.objKeys(e), s = 0; s < n.length; s++) {
                        var o = n[s];
                        i.push([
                            o,
                            e[o]
                        ]);
                    }
                }, Y = function t(e) {
                    n[e.callbackName] = function () {
                    }, e.newScriptElement.parentNode.removeChild(e.newScriptElement), e.newScriptElement = null, delete e.newScriptElement;
                }, Z = function e(i) {
                    Y(i), i[S] = R, i.isMediaRequest || (t.TRC.trkRequestStatus = !1), K === j.PENDING_USER_ID_SET && (K = j.UNINITIALIZED), i[b] ? n.eventUtils.dispatchEvent(n.sharedEvents.INVALID_TRK_RESPONSE, { publisherId: i.publisherId }) : n.eventUtils.dispatchEvent(n.sharedEvents.REQUEST_ID_CREATION_TIMEOUT, { publisherId: i.publisherId }), ot();
                }, X = function t(i, n, r, s) {
                    var o = e.getElementsByTagName('script')[0], a = e.createElement('script');
                    return a.type = 'text/javascript', a.src = i, a.charset = 'UTF-8', r ? a.setAttribute('defer', 'defer') : s && a.setAttribute('async', 'async'), 'function' == typeof n && (a.addEventListener ? (a.addEventListener('load', n, !1), a.addEventListener('error', n, !1)) : a.onreadystatechange = function () {
                        'loaded' !== a.readyState && 'complete' !== a.readyState || n.apply(a);
                    }), o.parentNode.insertBefore(a, o), a;
                }, tt = function t(e, i, n, r) {
                    var s = {
                        publisherId: e,
                        isMediaRequest: n.isMediaRequest,
                        isUnifiedPageView: n.isUnifiedPageView,
                        publisherIdType: i,
                        callbackName: 'trkCallback' + (0 === g ? '' : g),
                        metadata: r
                    };
                    return s[S] = y, h[e] || (h[e] = []), h[e].push(s), ++g, s;
                }, et = function t(e) {
                    return function () {
                        Z(e);
                    };
                }, it = function e(n, r, s, o) {
                    var a = i.rboxTrcProtocol + '//trc.taboola.com/' + n + '/trc/3/json?' + 'tim=' + new Date().getTime() + '&' + 'data=' + encodeURIComponent(JSON.stringify(rt(o))) + '&' + 'pubit=' + r, c = s.isMediaRequest ? t._tfa.config.safeGet('tfa:trk:tracking-request-timeout', T, n) : I;
                    o[S] = E, o[m] = t.setTimeout(et(o), c), o.newScriptElement = X(a, function () {
                        o[b] = !0;
                    });
                }, nt = function t(e) {
                    return function (t) {
                        at(e, t);
                    };
                }, rt = function t(e) {
                    return n[e.callbackName] = nt(e), ht(e);
                }, st = function t(e) {
                    var i = h[e = '' + e];
                    return i && i.length > 0 ? i[i.length - 1] : null;
                }, ot = function t() {
                    n.eventUtils.dispatchEvent(M, V);
                }, at = function e(r, s) {
                    const $___old_d8cc40b2811009fe = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_d8cc40b2811009fe)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_177311337389c91d.localStorage));
                        return function () {
                            if (t.clearTimeout(r[m]), s && s.trc) {
                                if (s.trc.ui ? (s.trc['DNT'] && 'TRUE' === s.trc['DNT'].toUpperCase() ? localStorage.removeItem('taboola global:user-id') : s.trc['cm'] || localStorage.setItem('taboola global:user-id', s.trc['ui']), K = j.USER_ID_SET) : K = j.UNINITIALIZED, s.trc.sd && !s.trc['cm'] && localStorage.setItem(r.publisherId + ':session-data', s.trc['sd']), s.trc['vl'] && s.trc['vl'].length) {
                                    var o = s.trc['vl'][0].ri;
                                    r.isMediaRequest || (t.TRC.events_ri = o), r[v] = o, r[S] = _, n.eventUtils.dispatchEvent(n.sharedEvents.REQUEST_ID_CREATED, {
                                        publisherId: r.publisherId,
                                        requestId: o
                                    });
                                }
                                r.isMediaRequest && n.trk.rboxNotLoaded() && (s.trc.stp && n.trk.loadPixels(s.trc.stp), s.trc.jst && n.trk.loadScriptTags(s.trc.jst));
                            }
                            r[S] !== _ && (r[S] = C, n.eventUtils.dispatchEvent(n.sharedEvents.REQUEST_ID_CREATION_ERROR, { publisherId: r.publisherId })), r.isMediaRequest || (t.TRC.trkRequestStatus = !(O.indexOf(r[S]) >= 0)), t.TRC.alertVVResponseLoaded && t.TRC.alertVVResponseLoaded(i.tblVersion), Y(r), ot();
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_d8cc40b2811009fe)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_d8cc40b2811009fe));
                    }
                }, ct = function () {
                    var t, e = function t() {
                            try {
                                return decodeURI(top.window.document.referrer);
                            } catch (t) {
                            }
                            return null;
                        }, i = /https?:\/\/\w+\.taboola(?:syndication)?\.com/, n = function t(e) {
                            return i.test(e) ? e.split('?')[0] : e.substr(0, 400);
                        }, r, s = [
                            function t() {
                                for (var e = document.head.getElementsByTagName('link'), i = 0; i < e.length; i++)
                                    if ('referrer' === e[i].rel)
                                        return e[i].href;
                                return null;
                            },
                            function t() {
                                var i = e();
                                return i ? n(i) : null;
                            }
                        ], o = function t() {
                            for (var t, e = 0; !t && e < s.length; e++)
                                t = s[e].call(this);
                            return t;
                        };
                    return o.innerExtractReferrerFromTopMostReferrer = n, o;
                }(), ut = function t() {
                    var e = d;
                    return e || (e = ct()), e;
                }, lt = function e() {
                    if (F)
                        return F;
                    var i = 400, n;
                    return (F = t.location.search).length > i && (n = F.substring(0, i - 1), F = n.substring(0, n.lastIndexOf('&'))), F;
                }, ft = function e(s, o) {
                    var a = {}, c = s.metadata, u = s.publisherId, l = t._tfa.config.safeGet('tfa:trk:should-send-media-data', !0, u), f = t._tfa.config.safeGet('tfa:trk:media-data-param-name', 'mpvd', u), d = t._tfa.config.safeGet('tfa:trk:page-view-payload-param-name', 'mpv', u), h = t._tfa.config.safeGet('tfa:trk:unified-page-view-param-name', 'supv', u), g;
                    return r.forEach(function (t) {
                        var e = c[t];
                        o.hasOwnProperty(t) && e === o[t] || (a[t] = e);
                    }, r.objKeys(c)), o[d] = !0, s.isUnifiedPageView && (o[h] = !0, a[h] = !0), l && (o[f] = a), t._tfa.config.safeGet('tfa:trk:flc-enabled', !1, i.bakedPublisherId) && (g = n.trk.readFlcFromLocalStorage()) && (o.fl = g), o;
                }, dt = function e(n) {
                    var r = i.jsScope + '.' + n.callbackName, s = J.getBlockedState([
                            'banner_ad',
                            'sponsored_ad'
                        ]);
                    return {
                        id: ~~(1000 * Math.random()),
                        ii: mt(n),
                        it: _t(t._taboola),
                        sd: Ct(n.publisherId),
                        ui: Dt(),
                        vi: $,
                        cv: i.tblVersion,
                        uiv: 'default',
                        u: Ot(),
                        e: ut(),
                        cb: r,
                        qs: lt(),
                        r: [{
                                li: 'rbox-tracking',
                                s: 0,
                                uim: 'rbox-tracking:pub=' + i.bakedPublisherName + ':abp=' + s,
                                uip: 'rbox-tracking',
                                orig_uip: 'rbox-tracking'
                            }]
                    };
                }, ht = function t(e) {
                    var i = dt(e);
                    return e.isMediaRequest && (i = ft(e, i)), i;
                }, gt = function t(e) {
                    for (var i = 0; i < e.length; ++i)
                        for (var n = e[i], s = r.objKeys(n), o = 0; o < s.length; ++o) {
                            var a = s[o], c = n[a];
                            if ('unknown' !== c)
                                switch ('auto' === c && (c = ''), a) {
                                case 'video':
                                    u = c;
                                    break;
                                case 'url':
                                    f = c;
                                    break;
                                case 'article':
                                case 'category':
                                case 'home':
                                case 'search':
                                case 'photo':
                                case 'other':
                                case 'content_hub':
                                    l = c;
                                    break;
                                case 'ref_url':
                                    d = c;
                                }
                        }
                }, pt = function e(i) {
                    if (i) {
                        var r = n.trk.getPublisherRequestId(i);
                        if (r)
                            return r;
                    }
                    return t.TRC.events_ri;
                }, mt = function t(e) {
                    var n = null;
                    return u || '' === u ? n = u : (l || '' === l) && (n = l), ('' === n || e.isMediaRequest) && (n = Tt('item-id', i.normalizeItemId, i.prenormalizeIdRules)), n;
                }, vt = function t(e, i, n) {
                    var s;
                    if (!n)
                        return i;
                    r.forEach(function (t) {
                        var e = i.search(t);
                        e >= 0 && (i = i.substr(0, e));
                    }, n['truncate-at'] || []);
                    for (var o = new W(i), a = r.objKeys(n), c = 0; c < a.length; ++c) {
                        var u = a[c];
                        if (n[u])
                            switch (u) {
                            case 'host':
                                delete o.host;
                                break;
                            case 'trailing-dirsep':
                                for (; '/' === o.pathname.substr(o.pathname.length - 1);)
                                    o.pathname = o.pathname.substr(0, o.pathname.length - 1);
                                break;
                            case 'query':
                                var l = [], f = o.search.replace(/^\?/, '').split('&');
                                'string' == typeof (s = n[u]) && (s = new RegExp(s));
                                var d = s instanceof Array ? function (t) {
                                    for (var e = 0; e < s.length; e++)
                                        if (t === s[e])
                                            return !0;
                                    return !1;
                                } : s instanceof RegExp ? s.test.trcBind(s) : function () {
                                    return !1;
                                };
                                f.forEach(function (t) {
                                    d(decodeURIComponent(t.split('=')[0])) && l.push(t);
                                }), o.search = (l.length ? '?' : '') + l.join('&');
                                break;
                            case 'fragment':
                                var h = o.hash.replace(/^#/, '');
                                'string' == typeof (s = n[u]) && (s = new RegExp(s)), o.hash = '', s instanceof RegExp && s.test(h) ? o.hash = '#' + h : s instanceof Array && s.forEach(function (t) {
                                    h.search(t) >= 0 && (o.hash = '#' + h);
                                });
                            }
                    }
                    return o.pathname || (o.pathname = '/'), 'item-id' === e ? o.toString().toLowerCase() : o.toString();
                }, St = function t() {
                    return It(ut(), 'ampproject.net');
                }, bt = function t() {
                    return It(ut(), 'instantarticles.fb.com');
                }, It = function t(e, i) {
                    try {
                        return void 0 !== e && void 0 !== i && e.indexOf(i) > 0;
                    } catch (t) {
                        return !1;
                    }
                }, Tt = function t(e, n, r) {
                    var s = [
                            'paramUrl',
                            'meta',
                            'canonical',
                            'og',
                            'location'
                        ], o = {
                            paramUrl: yt,
                            canonical: Et,
                            og: wt,
                            location: Rt
                        }, a = i.urlExtractOrder && Array.isArray(i.urlExtractOrder) ? i.urlExtractOrder : s, c = 0, l, f, d, h = '', g = function t(e, i) {
                            return vt.call(this, e, i, r);
                        };
                    for (a.push('location'); c < a.length && (!h || /^\s*$/.test(h));)
                        f = a[c], h = (l = o[a[c]]) ? l.call(null, e, g) : null, c++;
                    return 'item-url' === e && f === yt ? h : (d = f !== Rt, h = 'function' == typeof n ? n.call(this, h, u ? 'video' : 'text', d) : h);
                }, yt = function t(e, i) {
                    return !f || 'item-id' !== e && 'item-url' !== e ? null : i.call(this, e, f);
                }, Et = function t(i, n) {
                    for (var r = e.head.getElementsByTagName('link'), s = 0; s < r.length; s++)
                        if ('canonical' === r[s].rel && r[s].href)
                            return n.call(this, i, r[s].href);
                    return null;
                }, wt = function t(i, n) {
                    for (var r = e.head.getElementsByTagName('meta'), s = 0; s < r.length; s++)
                        if ('og:url' === r[s].getAttribute('property') && r[s].content.length > 5)
                            return n.call(this, i, r[s].content);
                    return null;
                }, Rt = function e(i, n) {
                    var s = function e() {
                        var i = t.location, n = r.filter(function (t) {
                                return 0 !== t.search('trc_') && 'taboola-debug' !== t;
                            }, i.search.replace(/^\?/, '').split('&')).join('&');
                        return i.origin + i.pathname + '?' + n;
                    };
                    return n.call(this, i, s());
                }, _t = function t(e) {
                    try {
                        var i = r.objKeys(e[0]);
                        for (var n in i)
                            switch (i[n]) {
                            case 'home':
                                return 'home';
                            case 'category':
                                return 'category';
                            case 'text':
                            case 'article':
                                return 'text';
                            case 'search':
                                return 'search';
                            case 'photo':
                                return 'photo';
                            case 'other':
                                return 'other';
                            case 'content_hub':
                                return 'content_hub';
                            case 'video':
                            default:
                                return 'video';
                            }
                    } catch (t) {
                        return 'video';
                    }
                }, Ct = function t(e) {
                    const $___old_0b05d19305f2d214 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_0b05d19305f2d214)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_177311337389c91d.localStorage));
                        return function () {
                            return localStorage.getItem(e + ':session-data');
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_0b05d19305f2d214)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_0b05d19305f2d214));
                    }
                }, Dt = function t() {
                    const $___old_58c8440a2f70b2bb = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_58c8440a2f70b2bb)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_177311337389c91d.localStorage));
                        return function () {
                            return localStorage.getItem('taboola global:user-id');
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_58c8440a2f70b2bb)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_58c8440a2f70b2bb));
                    }
                }, Ot = function t() {
                    return Tt('item-url', i.normalizeItemUrl, i.prenormalizeUrlRules);
                }, Ut = function t(e) {
                    for (var i, n = /^(.*\/libtrc\/.+\/)(?:(?:trk)|(?:tfa))\.js(?:\?(.*))?$/, r = 0; r < e.length; r++)
                        if (i = e[r].src.match(n))
                            return i[1];
                }, kt = function t() {
                    for (var i = Ut(e.getElementsByTagName('script')), n = [
                                {
                                    key: '?',
                                    index: 0
                                },
                                {
                                    key: '://',
                                    index: 1
                                },
                                {
                                    key: '//',
                                    index: 1
                                },
                                {
                                    key: '/',
                                    index: 0
                                }
                            ], r = 0, s = n.length, o = i, a; r < s; r++)
                        o = (a = B(o, n[r].key, 2)).length > 1 ? a[n[r].index] : a[0];
                    return o;
                }, Pt = function e() {
                    if (!t.TRC.AdServerManager) {
                        var n = kt();
                        t.TRC.VVReady = Nt, X('//' + n + '/libtrc/vv.' + i.tblVersion + '.js');
                    }
                }, Nt = function e() {
                    t.TRC.adManager = new t.TRC.AdServerManager(i.vvConfig, i.tblVersion), t.TRC.adManager.startVV().then(function () {
                        t.TRC.adManager.run();
                    });
                }, At = function t(e, i) {
                    return e ? e[i] : e;
                }, Mt = function t(e, i, n) {
                    if (0 === r.objKeys(n).length || P['' + e])
                        return e;
                    var s = document.createElement('a');
                    s.href = f;
                    var o = (s.host || location.host).toLowerCase(), a = (s.href || location.href).toLowerCase(), c = k[i], u = At(n[o], c), l = '/', d = [
                            'm',
                            'mobile',
                            'www2',
                            'www3'
                        ], h = [], g, p, m, v, S;
                    if (!u) {
                        for (Q(n, h), h.sort(function (t, e) {
                                return t[0].length > e[0].length ? -1 : t[0].length < e[0].length ? 1 : 0;
                            }), g = 0, p = h.length; g < p; g++)
                            if ((m = h[g][0].toLowerCase()).indexOf(l) > 0) {
                                if (a.match(m)) {
                                    u = At(h[g][1], c);
                                    break;
                                }
                                if (m.indexOf('www.') > -1 && a.match(m.replace('www.', ''))) {
                                    u = At(h[g][1], c);
                                    break;
                                }
                            } else if (o.match(m)) {
                                u = At(h[g][1], c);
                                break;
                            }
                        if (!u && o.indexOf('www.') < 0) {
                            for (g = 0, p = d.length; g < p && (v = new RegExp('(https://|http://|^)' + d[g] + '.'), S = o.replace(v, 'www.'), !(u = At(n[S], c))); g++);
                            u || (u = At(n[S = 'www.' + o], c));
                        }
                    }
                    return u || 'unknown-site-on-' + e;
                }, Vt = function t(e, i, n) {
                    var r = st(e);
                    return r ? i.call(this, r[S]) : n;
                }, Lt = function t(e, i, r) {
                    var s, o, a = [];
                    try {
                        if (!Array.isArray(e))
                            return;
                        for (o = 0; o < e.length; o++)
                            (s = e[o]) && !i[s] && (i[s] = !0, s = W.prototype.switchProtocol.call(s, n.trk.rboxTrcProtocol()), a.push(r(s)));
                        return a;
                    } catch (t) {
                    }
                };
            t.TRC = t.TRC || {}, t.TRC.trk = n.trk = t.TRC.trk || {
                init: function e() {
                    t.TRC.utm && !H() || (H() || p || (t.TRC._getGlobalRequestId = pt, t.TRC._getItemId = mt, t.TRC._getItemType = _t, p = !0), t.TRC.hasTrk ? H() || n.trk.execute() : t._tfa && !t._tfa.config.hasValidConfig() || (n.hasTrk = !0, q() && (n.eventUtils.safeAddEventListener(n.sharedEvents.PAGE_VIEW, function (e) {
                        try {
                            var r = e.detail, s = r.publisherIdType, o = r.accountId, a = r.pageViewInitiator, c = r.isUnifiedPageView, u = a === n.pageViewInitiator.TFA, l = r.metadata, f, d;
                            if (gt(t._taboola), u) {
                                if (t._tfa.config.safeGet('tfa:trk:prevent-concurrent-requests', !0, o) && n.trk.isRequestProcessing(o))
                                    return;
                                t._tfa.config.safeGet('tfa:trk:network-solution-enabled', !1, o) && (o = Mt(o, s, i.networkMap));
                            }
                            d = tt(o, s, f = {
                                pageViewInitiator: a,
                                isMediaRequest: u,
                                isUnifiedPageView: c
                            }, l), K = K.loadTrc(o, s, f, d);
                        } catch (e) {
                            n.eventUtils.dispatchEvent(n.sharedEvents.REQUEST_ID_CREATION_JS_ERROR, { publisherId: o });
                        }
                    }), H() || n.trk.execute(), i.enableVV && Pt(), H() && t._tfa.config.safeGet('tfa:trk:flc-enabled', !1, i.bakedPublisherId) && this.saveFlcInLocalStorage())));
                },
                execute: function e() {
                    var r = n.publisherIdType.NAME, s = Mt(i.bakedPublisherName, r, i.networkMap);
                    n.eventUtils.dispatchEvent(n.sharedEvents.PAGE_VIEW, {
                        accountId: s,
                        publisherIdType: r,
                        pageViewInitiator: n.pageViewInitiator.TRK
                    }), t.TRC.publisherId = t.TRC.publisherId || s;
                },
                getRequestStatus: function t(e) {
                    var i = st(e);
                    return i ? i[S] : D;
                },
                isRequestProcessing: function t(e) {
                    return Vt(e, function (t) {
                        return U.indexOf(t) > -1;
                    }, !1);
                },
                hasRequestEnded: function t(e) {
                    return Vt(e, function (t) {
                        return O.indexOf(t) > -1 || !(U.indexOf(t) > -1);
                    }, !1);
                },
                getPublisherRequestId: function t(e) {
                    var i = st(e);
                    return i && i[S] === _ ? i[v] : null;
                },
                getPublisherSessionData: function t(e) {
                    var i = Ct(e);
                    return i || null;
                },
                getViewId: function t() {
                    return $;
                },
                getReferrer: ct,
                loadPixels: function e(i) {
                    try {
                        return Lt(i, t.TRC.sharedObjects.loadedPixels, function (t) {
                            var e = new Image();
                            return e.src = t, e;
                        });
                    } catch (t) {
                    }
                },
                loadScriptTags: function e(i) {
                    try {
                        return Lt(i, t.TRC.sharedObjects.loadedScripts, function (t) {
                            return X(t, null, null, !0);
                        });
                    } catch (t) {
                    }
                },
                rboxNotLoaded: function e() {
                    return !(t.TRC && t.TRC.utm);
                },
                rboxTrcProtocol: function t() {
                    return i.rboxTrcProtocol;
                },
                saveFlcInLocalStorage: function t() {
                    try {
                        if (!e.interestCohort)
                            return;
                        return e.interestCohort().then(function (t) {
                            var e = {
                                i: t.id,
                                v: t.version
                            };
                            localStorage.setItem('taboola global:flc', JSON.stringify(e));
                        }).catch(function () {
                        });
                    } catch (t) {
                    }
                },
                readFlcFromLocalStorage: function t() {
                    const $___old_23eae20f6bf5bf53 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_23eae20f6bf5bf53)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_177311337389c91d.localStorage));
                        return function () {
                            var e, i;
                            try {
                                if ((i = (e = localStorage.getItem('taboola global:flc')) ? JSON.parse(e) : null) && i.i && i.v)
                                    return i;
                            } catch (t) {
                            }
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_23eae20f6bf5bf53)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_23eae20f6bf5bf53));
                    }
                }
            }, H() && !t._tfa.config.safeGet('tfa:trk:enabled', !0, i.bakedPublisherId) || n.trk.init();
        }(window, document, {
            bakedPublisherId: 1267090,
            bakedPublisherName: 'depositphotos-sc',
            tblVersion: '20210713-4-RELEASE',
            normalizeItemId: function (itemid, type, canon) {
                if (!canon && type == 'text' && typeof itemid == 'string' && itemid.search(new RegExp('^https?://')) == 0)
                    itemid = itemid.replace(/\?.*/, '', false);
                return itemid.toLowerCase();
            },
            prenormalizeIdRules: {
                'host': true,
                'fragment': '^(/video/|!)',
                'query': [
                    'p',
                    'id'
                ],
                'truncate-at': [
                    'search.searchcompletion.com',
                    'org.mozilla.javascript.undefined'
                ],
                'trailing-dirsep': true
            },
            prenormalizeUrlRules: false,
            normalizeItemUrl: function (itemurl, type, canon) {
                return itemurl;
            },
            urlExtractOrder: null,
            networkMap: {},
            vvConfig: null,
            enableVV: false,
            rboxTrcProtocol: 'https:',
            tfaContext: true,
            jsScope: 'TFASC'.indexOf('{jsScope}') >= 0 ? 'TRC' : 'TFASC'
        }), function (t, e) {
            t._tfa = t._tfa || [], e.useStorageDetection = t.TRC.useStorageDetection = t.TRC.useStorageDetection || !0, e.text = e.text || {}, e.text.lsplit = e.text.lsplit || function (t, e, i) {
                var n = t.split(e);
                return n.slice(0, i - 1).concat(n.length >= i ? n.slice(i - 1).join(e) : []);
            }, e.tfaUtil = e.tfaUtil || {}, e.tfaUtil.safeAddParam = e.tfaUtil.safeAddParam || function (t, e, i) {
                var n, r;
                i && e && t && (n = encodeURIComponent(t), r = encodeURIComponent(e), i.push(n + '=' + r));
            }, e.tfaUtil.getParameterByName = e.tfaUtil.getParameterByName || function (t, e) {
                if (!e || !t)
                    return null;
                t = t.replace(/[\[\]]/g, '\\$&');
                var i, n = new RegExp('[?&]' + t + '(=([^&#]*)|&|#|$)').exec(e);
                return n ? n[2] ? decodeURIComponent(n[2].replace(/\+/g, ' ')) : '' : null;
            };
            var i = t.TRCImpl = t.TRCImpl || {};
            i.global = i.global || {}, t.__trcError = t.__trcError || function t() {
            };
        }(window, window['TFASC'.indexOf('{jsScope}') >= 0 ? 'TRC' : 'TFASC']), function (t, e) {
            var i = 'taboola global', n = 'trctestcookie';
            function r() {
                for (var t = 'trc_cookie_storage', i = new Object(), n = document.cookie.split(/;\s+/), r = 0; r < n.length; r++) {
                    var s = e.text.lsplit(n[r], '=', 2), o = unescape(s[0]), a = unescape(s[1]);
                    if (o == t) {
                        for (var c = a.split('|'), u = 0; u < c.length; u++) {
                            var s = c[u].split('=');
                            i[unescape(s[0])] = unescape(s[1]);
                        }
                        break;
                    }
                }
                function l() {
                    var e = new Array(), n, r;
                    for (var s in i)
                        i.hasOwnProperty(s) && null != i[s] && (e[e.length] = escape(s) + '=' + escape(i[s]));
                    n = e.length > 0 ? 1 : -1, r = new Date(new Date().getTime() + 365 * n * 86400000), document.cookie = t + '=' + escape(e.join('|')) + ';path=/;expires=' + r.toUTCString();
                }
                return this.getValue = function (t) {
                    return i.hasOwnProperty(t) ? i[t] : null;
                }, this.setValue = function (t, e) {
                    i[t] = e, l();
                }, this.removeKey = function (t) {
                    delete i[t], l();
                }, this;
            }
            function s(t) {
                var e = t || {};
                return this.getValue = function (t) {
                    return e[t] ? e[t] : null;
                }, this.setValue = function (t, i) {
                    e[t] = i;
                }, this.removeKey = function (t) {
                    delete e[t];
                }, this.getData = function () {
                    return e;
                }, this;
            }
            function o(e) {
                return this.getValue = function (i) {
                    const $___old_1a5abb8c4442283f = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_1a5abb8c4442283f)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_177311337389c91d.localStorage));
                        return function () {
                            return t[e + 'Storage'].getItem(i);
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_1a5abb8c4442283f)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_1a5abb8c4442283f));
                    }
                }, this.setValue = function (i, n) {
                    const $___old_47e018ceb703025f = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                    try {
                        if ($___old_47e018ceb703025f)
                            ({}.constructor.defineProperty(window, 'localStorage', $___mock_177311337389c91d.localStorage));
                        return function () {
                            try {
                                t[e + 'Storage'].setItem(i, n);
                            } catch (t) {
                            }
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_47e018ceb703025f)
                            ({}.constructor.defineProperty(window, 'localStorage', $___old_47e018ceb703025f));
                    }
                }, this.removeKey = function (i) {
                    try {
                        t[e + 'Storage'].removeItem(i);
                    } catch (t) {
                    }
                }, this;
            }
            function a(e) {
                const $___old_c59f1c83321ec627 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                try {
                    if ($___old_c59f1c83321ec627)
                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_177311337389c91d.localStorage));
                    return function () {
                        var i = t[e + 'Storage'], n = new Date().getTime() + '', r = '_taboolaStorageDetection';
                        try {
                            if (i.setItem(r, n), i.getItem(r) == n)
                                return i.removeItem(r), i;
                        } catch (t) {
                        }
                        return null;
                    }.apply(this, arguments);
                } finally {
                    if ($___old_c59f1c83321ec627)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_c59f1c83321ec627));
                }
            }
            function c(i) {
                const $___old_b51540ed0e3485de = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage'), $___old_f2287be5025a42c7 = {}.constructor.getOwnPropertyDescriptor(window, 'Storage');
                try {
                    if ($___old_b51540ed0e3485de)
                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_177311337389c91d.localStorage));
                    if ($___old_f2287be5025a42c7)
                        ({}.constructor.defineProperty(window, 'Storage', $___mock_177311337389c91d.Storage));
                    return function () {
                        try {
                            if (t.localStorage instanceof Storage && e.useStorageDetection && a(i))
                                return new o(i);
                        } catch (t) {
                            return null;
                        }
                    }.apply(this, arguments);
                } finally {
                    if ($___old_b51540ed0e3485de)
                        ({}.constructor.defineProperty(window, 'localStorage', $___old_b51540ed0e3485de));
                    if ($___old_f2287be5025a42c7)
                        ({}.constructor.defineProperty(window, 'Storage', $___old_f2287be5025a42c7));
                }
            }
            var u = function n() {
                return this.state = {}, this.getLocalStorageImplementation = function (e, i) {
                    if (null != this.state.privateStorageImpl && 'strict-w3c-storage' != e)
                        return this.state.privateStorageImpl;
                    var n = t.TRCImpl ? t.TRCImpl.global : {};
                    switch (e = e || (n['local-storage-usage'] ? n['local-storage-usage'] : 'prefer-w3c-storage')) {
                    case 'strict-w3c-storage':
                        return c('session' === i ? 'session' : 'local');
                    case 'prefer-w3c-storage':
                        var o = c('local');
                        if (o)
                            return this.state.privateStorageImpl = o;
                    case 'prefer-cookies':
                        try {
                            if (this.canWriteCookies())
                                return this.state.privateStorageImpl = new r();
                        } catch (t) {
                        }
                    default:
                        return this.state.privateStorageImpl = new s();
                    }
                }, this.getFirstPartyCookie = function () {
                    if (this.state.firstPartyCookie)
                        return this.state.firstPartyCookie;
                    var t = this.getLocalStorageImplementation();
                    if (t instanceof r || t instanceof s)
                        return this.state.firstPartyCookie = t;
                    try {
                        if (this.canWriteCookies())
                            return this.state.firstPartyCookie = new r();
                    } catch (t) {
                    }
                    return this.state.firstPartyCookie = new s();
                }, this.canWriteCookies = function () {
                    return t.navigator.cookieEnabled;
                }, this.getDummyStorage = function (t) {
                    return new s(t);
                }, this.getValue = function (t) {
                    return this.getPublisherValue(i, t);
                }, this.storePublisherValue = function (t, e, i) {
                    var n;
                    this.isNotAllowedToWriteValue(e, i) || (n = this.buildKeyWithPublisher(t, e), this.getLocalStorageImplementation().setValue(n, i), this.addKeyToStoredKeysList(n));
                }, this.isNotAllowedToWriteValue = function (t, i) {
                    return null == i || void 0 == i || e.doNotTrack && !this.isAllowedKeyWhenDoNotTrack(t);
                }, this.buildKeyWithPublisher = function (t, e) {
                    return t + ':' + e;
                }, this.getPublisherValue = function (t, i) {
                    return e.doNotTrack && !this.isAllowedKeyWhenDoNotTrack(i) ? null : this.getLocalStorageImplementation().getValue(this.buildKeyWithPublisher(t, i));
                }, this.addKeyToStoredKeysList = function (t) {
                    var e = this.getStoredKeysList();
                    -1 === e.indexOf(t) && (e.push(t), this.setStoredKeysList(e));
                }, this.getStoredKeysList = function () {
                    var t = this.buildKeyWithPublisher(i, 'local-storage-keys'), e = this.getLocalStorageImplementation().getValue(t), n = [];
                    try {
                        n = JSON.parse(e) || [];
                    } catch (t) {
                        __trcError('Could not parse local storage keys', t);
                    }
                    return n;
                }, this.setStoredKeysList = function (t) {
                    var e, n;
                    try {
                        e = JSON.stringify(t), n = this.buildKeyWithPublisher(i, 'local-storage-keys'), this.getLocalStorageImplementation().setValue(n, e);
                    } catch (t) {
                        __trcError('Could not stringify local storage keys', t);
                    }
                }, this.isAllowedKeyWhenDoNotTrack = function (e) {
                    var i, n = (t.TRCImpl && t.TRCImpl.global || {})['dnt-allowed-keys'] || [
                            'session-id',
                            'trc_css-isolation'
                        ], r;
                    return null !== e && void 0 !== e && (r = e.split(':')[1] || e, -1 !== n.indexOf(r));
                }, this.storeUserId = function (t) {
                    this.isNotAllowedToWriteValue('user-id', t) || this.storePublisherValue(i, 'user-id', t);
                }, this.getUserIdFirstPartyCookie = function () {
                    return this.getFirstPartyCookie().getValue(this.buildKeyWithPublisher(i, 'user-id'));
                }, this.getSessionDataFirstPartyCookie = function () {
                    return this.getFirstPartyCookie().getValue(this.buildKeyWithPublisher(i, 'session-data'));
                }, this.initState = function () {
                    void 0 === this.state && (this.state = {}), this.state.privateStorageImpl = null;
                }, this.initState(), this;
            };
            e.tfaPageManager = e.tfaPageManager || new u(), e.tfaPageManager.TABOOLA_GLOBAL_KEY = i;
        }(window, window['TFASC'.indexOf('{jsScope}') >= 0 ? 'TRC' : 'TFASC']), function (t, e, i) {
            var n = i.tfaPageManager, r = 'https://', s = 'tblci', o = 'TABOOLA-DO-NOT-TRACK', a = '#' + s;
            function c(t, e) {
                t && e && (e[t] = !0);
            }
            function u(t, e, i) {
                for (var n = {}, r = 0; r < arguments.length; r++)
                    c(arguments[r], n);
                return Object.keys(n).length > 1;
            }
            i.tfaUserId = {
                initialized: !1,
                userId: null,
                clickId: null,
                getUserId: function t() {
                    return this.userId;
                },
                getClickId: function t() {
                    return this.clickId;
                },
                getHttpsPrefix: function t() {
                    return r;
                },
                sendUserIdsToTrc: function e(n, r, s, o) {
                    var a, c = 'https:', l = [];
                    if (u(n, r, s))
                        return i.tfaUtil.safeAddParam('uiref', n, l), i.tfaUtil.safeAddParam('uils', r, l), i.tfaUtil.safeAddParam('uifpc', s, l), i.tfaUtil.safeAddParam('tblci', o, l), a = new Image(), t._tfa.config.safeGet('tfa:add-referrer-policy-when-firing-pixel', !0) && (a.referrerPolicy = 'no-referrer-when-downgrade'), a.src = c + '//trc.taboola.com/sg/taboola-tfa/1/um/?' + l.join('&'), a;
                },
                isUserCanBeTracked: function e(i) {
                    return !i || !t._tfa.config.safeGet('tfa-uid:filter-do-not-track', !0) || -1 === i.indexOf(o);
                },
                sendUserIdToGamma: function e() {
                    if (t._tfa.config.safeGet('tfa-uid:send-uid-to-gamma', !0) && (!t.TRC || !t.TRC.utm)) {
                        var n, r = [], s = this.getUserId();
                        if (s)
                            return i.tfaUtil.safeAddParam('uid', s, r), i.tfaUtil.safeAddParam('src', 'tfa', r), n = new Image(), t._tfa.config.safeGet('tfa:add-referrer-policy-when-firing-pixel', !0) && (n.referrerPolicy = 'no-referrer-when-downgrade'), n.src = this.getHttpsPrefix() + 'cds.taboola.com/?' + r.join('&'), n;
                    }
                },
                sendIdsToCds: function i() {
                    if (t._tfa.config.safeGet('tfa-uid:send-ids-to-cds', !1)) {
                        var n = this.getHttpsPrefix() + 'cdn.taboola.com/scripts/cds.js', r = document.createElement('script');
                        r.setAttribute('type', 'text/javascript'), r.setAttribute('src', n), e.head.appendChild(r);
                    }
                },
                readAndStoreUserId: function t() {
                    var e = this.extractUserIdFromReferrer(), i = n.getValue('user-id'), r = n.getUserIdFirstPartyCookie();
                    this.isUserCanBeTracked(e) || (e = void 0), this.isUserCanBeTracked(i) || (i = void 0), this.isUserCanBeTracked(r) || (r = void 0), this.sendUserIdsToTrc(e, i, r, this.getClickId()), e && (n.storeUserId(e), r && n.getFirstPartyCookie().setValue(n.TABOOLA_GLOBAL_KEY + ':' + 'user-id', e)), this.userId = e || i || r;
                },
                readAndStoreClickIdParam: function t() {
                    var e = this.extractClickIdFromUrl(this.getWindowLocation().toString()) || this.extractClickIdFromUrl(this.getReferrer()), i = n.getValue(s);
                    e && n.storePublisherValue(n.TABOOLA_GLOBAL_KEY, s, e), this.clickId = e || i;
                },
                extractUserIdFromReferrer: function t() {
                    var e = this.getReferrer();
                    if (e && e.indexOf('taboola') > -1)
                        return i.tfaUtil.getParameterByName('ui', e);
                },
                extractClickIdFromUrl: function t(e) {
                    if (e) {
                        var n = e.length > 1 && -1 !== e.indexOf('#') ? e.substring(e.indexOf('#')) : '', r;
                        if (r = i.tfaUtil.getParameterByName(s, e))
                            return r;
                        if (n && n.length > a.length && 0 === n.indexOf(a))
                            return n.substr(a.length);
                    }
                },
                getWindowLocation: function e() {
                    return t.location;
                },
                getReferrer: function t() {
                    return e.referrer;
                },
                init: function t() {
                    this.initialized || (this.readAndStoreUserId(), this.readAndStoreClickIdParam(), this.sendUserIdToGamma(), this.sendIdsToCds(), this.initialized = !0);
                }
            }, i.tfaUserId.init(), i.tfaUserId.CLICK_ID_KEY = s;
        }(window, document, window['TFASC'.indexOf('{jsScope}') >= 0 ? 'TRC' : 'TFASC']), function (t, e) {
            var i = '_tfa', n = t[i] = t[i] || [], r, s, o, a, c = 6 * 60 * 60 * 1000, u = 'eng_mt', l = 'crossSessionsData', f = 35, d;
            function h(t, e, i) {
                var n = this.getTimeLeftForSession(t, this.getSessionDuration(), e);
                n < 0 && (n = 0), setTimeout(function () {
                    i();
                }, n);
            }
            function g(t) {
                return t.ver && t.ver === this.getDataVersion();
            }
            var p = function t() {
            };
            p.prototype = {
                constructor: p,
                init: function t(i) {
                    if (d = n.config.safeGet('tfa:engagement:session-duration-in-milliseconds', c), !this.isInitialized()) {
                        var r = e.eventUtils.getDateNow(), s = this.getSessionDataFromStorage();
                        if (this.getIsLocalStorageAvailable())
                            return o = s && s.sessionStartTime, h.call(this, s, r, i), o && !this.isSessionInvalid(s) || (o = r, this.persistDefaultValues(o)), a = !0, this;
                    }
                },
                getStorageKey: function t() {
                    return u;
                },
                getCrossSessionsData: function t(e) {
                    var i = e && e.getValue(this.getStorageKey()), n = i && JSON.parse(i);
                    return n && n[l];
                },
                resetStorageMetricData: function t() {
                    var i = e.tfaPageManager.getLocalStorageImplementation('strict-w3c-storage'), n = this.getCrossSessionsData(i), r = { crossSessionsData: n };
                    i.setValue(this.getStorageKey(), n ? JSON.stringify(r) : '');
                },
                hasOnlyCrossSessionData: function t(e, i) {
                    return e && 1 === e.length && i.hasOwnProperty(l);
                },
                isSessionInvalid: function t(e) {
                    if (!e)
                        return !0;
                    var i = Object.keys(e);
                    return this.hasOnlyCrossSessionData(i, e);
                },
                getSessionDataFromStorage: function t() {
                    var i, n;
                    i = e.tfaPageManager.getLocalStorageImplementation('strict-w3c-storage'), s = !!i;
                    var r = i && i.getValue(this.getStorageKey());
                    if (n = r && JSON.parse(r))
                        return this.isSessionInvalid(n) ? n : !g.call(this, n) || this.hasSessionEnded() ? (this.resetStorageMetricData(), n) : n;
                },
                hasSessionEnded: function t() {
                    return !!a && (!o || e.eventUtils.getDateNow() - o > this.getSessionDuration());
                },
                persistDefaultValues: function t(i) {
                    var n = e.tfaPageManager.getLocalStorageImplementation('strict-w3c-storage');
                    if (n) {
                        var r = {
                                ver: f,
                                sessionStartTime: i,
                                scrollDepth: 0,
                                sessionDepth: [],
                                timeOnSite: 0
                            }, s = this.getCrossSessionsData(n);
                        s && (r[l] = s), n.setValue(this.getStorageKey(), JSON.stringify(r));
                    }
                },
                persistSpecificMetricsData: function t(i, n) {
                    var r = e.tfaPageManager.getLocalStorageImplementation('strict-w3c-storage'), s;
                    r && i && (s = this.getSessionDataFromStorage()) && (s[i] = n, r.setValue(this.getStorageKey(), JSON.stringify(s)));
                },
                getCrossSessionsDataKey: function t() {
                    return l;
                },
                getSessionDuration: function t() {
                    return d;
                },
                getDataVersion: function t() {
                    return f;
                },
                getIsLocalStorageAvailable: function t() {
                    return s;
                },
                getSessionStartTime: function t() {
                    return o;
                },
                getTimeLeftForSession: function t(e, i, n) {
                    return e && o ? o + i - n : i;
                },
                isInitialized: function t() {
                    return a;
                }
            }, (r = n.TEM = n.TEM || {}).ESU = r.ESU || new p();
        }(window, window['TFASC'.indexOf('{jsScope}') >= 0 ? 'TRC' : 'TFASC']), function (t, e) {
            var i = '_tfa', n;
            function r(t, e) {
                this.storageUtils.persistSpecificMetricsData(t, e);
            }
            var s = function t() {
            };
            s.prototype = {
                constructor: s,
                init: function t(e, i, n) {
                    this.isValid = e && i && n, this.storageUtils = e, this.visibilityListener = n, this.refreshFromStorage(), this.initLastVisibleStartTime(), this.visibilityListener.subscribeToEvent(this.handleVisibilityChange.bind(this)), i.subscribeToEvent(this.handleStorageChange.bind(this));
                },
                getStorageKey: function t() {
                    return 'timeOnSite';
                },
                initLastVisibleStartTime: function t() {
                    this.isValid && (this.lastVisibleStartTime = e.eventUtils.getDateNow());
                },
                refreshFromStorage: function t() {
                    if (this.isValid) {
                        var e = this.storageUtils.getSessionDataFromStorage(), i = 0;
                        e && e[this.getStorageKey()] && (i = e[this.getStorageKey()] || 0), this.timeOnSite = i;
                    }
                },
                calcTimeOnSite: function t() {
                    if (this.isValid)
                        return this.lastVisibleStartTime ? this.timeOnSite + (e.eventUtils.getDateNow() - this.lastVisibleStartTime) : this.timeOnSite;
                },
                handleVisibilityChange: function t() {
                    this.isValid && (this.visibilityListener.getIsPageHidden() ? (this.timeOnSite = this.calcTimeOnSite(), r.call(this, this.getStorageKey(), this.timeOnSite)) : this.lastVisibleStartTime = e.eventUtils.getDateNow());
                },
                handleStorageChange: function t() {
                    this.refreshFromStorage();
                },
                getTimeOnSite: function t() {
                    if (this.isValid)
                        return this.visibilityListener.getIsPageHidden() ? this.timeOnSite : this.calcTimeOnSite();
                }
            }, (n = t[i] = t[i] || []).TEM = n.TEM || {}, n.TEM.TOS = n.TEM.TOS || new s();
        }(window, window['TFASC'.indexOf('{jsScope}') >= 0 ? 'TRC' : 'TFASC']), function () {
            var t = '_tfa', e, i = !1, n;
            function r() {
                return void 0 == document.body || void 0 == document.documentElement ? 0 : (i = !0, Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight));
            }
            function s(t, e) {
                this.storageUtils.persistSpecificMetricsData(t, e);
            }
            function o(t, e) {
                var i;
                return function () {
                    var n = this, r = arguments;
                    clearTimeout(i), i = setTimeout(function () {
                        t.apply(n, r);
                    }, e);
                };
            }
            var a = function t() {
            };
            a.prototype = {
                constructor: a,
                init: function t(e, i) {
                    this.storageUtils = e || {}, i.subscribeToEvent(this.handleStorageChange.bind(this)), this.refreshFromStorage(), this.initEventListeners(), this.updateMeasurements(), this.calcMaxScrollPercentage();
                },
                getStorageKey: function t() {
                    return 'scrollDepth';
                },
                getScrollDepth: function t() {
                    return i || this.calcMaxScrollPercentage(), this.maxScrollPercentage;
                },
                initEventListeners: function t() {
                    window.addEventListener('resize', o(this.onResize.bind(this), 100)), window.addEventListener('scroll', o(this.onScroll.bind(this), 50));
                },
                refreshFromStorage: function t() {
                    var e = this.storageUtils.getSessionDataFromStorage(), i = 0;
                    e && e[this.getStorageKey()] && (i = e[this.getStorageKey()] || 0), this.maxScrollPercentage = i;
                },
                onResize: function t() {
                    this.updateMeasurements();
                },
                onScroll: function t() {
                    this.calcMaxScrollPercentage();
                },
                updateMeasurements: function t() {
                    this.winHeight = window.innerHeight, this.docHeight = r();
                },
                calcMaxScrollPercentage: function t() {
                    var e = window.pageYOffset || (document.documentElement || document.body.parentNode || document.body).scrollTop, n;
                    i || this.updateMeasurements(), (n = 0 === this.docHeight ? 0 : Math.floor((e + this.winHeight) / this.docHeight * 100)) > this.maxScrollPercentage && (this.maxScrollPercentage = n, s.call(this, this.getStorageKey(), this.maxScrollPercentage));
                },
                handleStorageChange: function t() {
                    this.refreshFromStorage();
                }
            }, (n = (e = window[t] = window[t] || []).TEM = e.TEM || {}).SCD = n.SCD || new a();
        }(), function (t, e) {
            var i, n, r = t['_tfa'].TEM, s = function t() {
                };
            s.prototype = {
                constructor: s,
                init: function t(i, n, r) {
                    this.storageUtils = i, this.refreshFromStorage(), e.eventUtils.safeAddEventListener(r, this.handleUnipPageView.bind(this)), n.subscribeToEvent(this.handleStorageChange.bind(this));
                },
                getKey: function t() {
                    return 'ssd';
                },
                getStorageKey: function t() {
                    return 'sessionDepth';
                },
                setState: function t(e) {
                    this.visitedUrls = {};
                    for (var i = 0; i < e.length; i++)
                        this.visitedUrls[e[i]] = !0;
                },
                getState: function t() {
                    return this.visitedUrls ? Object.keys(this.visitedUrls) : [];
                },
                getMetric: function t() {
                    return this.getState().length;
                },
                persistState: function t() {
                    var e = this.getState();
                    this.storageUtils.persistSpecificMetricsData(this.getStorageKey(), e);
                },
                refreshFromStorage: function t() {
                    var e = this.storageUtils.getSessionDataFromStorage(), i = [];
                    e && e[this.getStorageKey()] && (i = e[this.getStorageKey()] || []), this.setState(i);
                },
                handleUnipPageView: function e() {
                    try {
                        var i = t.location.href;
                        this.visitedUrls[i] || (this.visitedUrls[i] = !0, this.persistState());
                    } catch (t) {
                    }
                },
                handleStorageChange: function t() {
                    this.refreshFromStorage();
                },
                isURLVisited: function t(e) {
                    return this.visitedUrls && this.visitedUrls[e];
                }
            }, r.SSD = r.SSD || new s();
        }(window, window['TFASC'.indexOf('{jsScope}') >= 0 ? 'TRC' : 'TFASC']), function (t) {
            var e, i = t['_tfa'] || [], n = i.TEM || {}, r = 30 * 24 * 60 * 60 * 1000, s = 10, o = 'tfa:engagement:session-history-timeframe-in-milliseconds', a = 'tfa:engagement:session-history-limit', c = 'sessionsHistory', u, l, f = function t() {
                };
            f.prototype = {
                init: function t(e) {
                    u = i.config.safeGet(a, s), l = i.config.safeGet(o, r), this.storageUtils = e, this.updateCrossSessionsData(this.storageUtils.getSessionStartTime());
                },
                updateCrossSessionsData: function t(e) {
                    var i = this.updateData(e);
                    return this.storageUtils.persistSpecificMetricsData(this.storageUtils.getCrossSessionsDataKey(), i), i;
                },
                updateData: function t(e) {
                    var i = this.getCrossSessionsDataFromStorage() || {};
                    return i[c] = this.getSessionsHistory(e), i;
                },
                resetCrossSessionsData: function t() {
                    this.storageUtils.persistSpecificMetricsData(this.storageUtils.getCrossSessionsDataKey(), '');
                },
                getCrossSessionsDataFromStorage: function t() {
                    var e = this.storageUtils.getSessionDataFromStorage();
                    return e && e[this.storageUtils.getCrossSessionsDataKey()];
                },
                getFilteredSessionsHistory: function t(e, i) {
                    var n = e ? this.removeOldSessions(e, i) : [];
                    if (!n.indexOf(i) > -1 && !this.isInPreviousSession(n, i)) {
                        for (; n.length > u - 1;)
                            n.shift();
                        n.push(i);
                    }
                    return n;
                },
                removeOldSessions: function t(e, i) {
                    for (var n = [], r = 0; r < e.length; r++)
                        this.isSessionOld(e[r], i) || n.push(e[r]);
                    return n;
                },
                isSessionOld: function t(e, i) {
                    return i - l > e;
                },
                getSessionsHistory: function t(e) {
                    var i = this.getCrossSessionsDataFromStorage(), n = i ? i[c] : [];
                    return this.getFilteredSessionsHistory(n, e);
                },
                isInPreviousSession: function t(e, i) {
                    return !(!Array.isArray(e) || !e.length) && i - e[e.length - 1] < this.storageUtils.getSessionDuration();
                    var n, r;
                }
            }, n.crossSessionsUtils = n.crossSessionsUtils || new f();
        }(window), function (t) {
            var e, i = t['_tfa'] || [], n = i.TEM || {}, r = 'tfa:engagement:return-visits:is-enabled', s, o = function t() {
                };
            o.prototype = {
                init: function t(e, n, o) {
                    (s = i.config.safeGet(r, !1)) && (this.storageUtils = e, this.crossSessionsUtils = o, this.refreshSessionsHistoryFromLocalStorage(), n.subscribeToEvent(this.handleStorageChange.bind(this)));
                },
                setState: function t(e) {
                    this.sessionsHistory = [];
                    for (var i = 0; i < e.length; i++)
                        this.sessionsHistory.push(e[i]);
                },
                addReturnVisits: function t(e) {
                    if (e) {
                        if (s) {
                            var i = this.getReturnVisits();
                            e.rv = i && i.length;
                        }
                        return e;
                    }
                },
                getReturnVisits: function t() {
                    var e = this.sessionsHistory;
                    return Array.isArray(e) && e.length ? e : [];
                },
                refreshSessionsHistoryFromLocalStorage: function t() {
                    var e = this.storageUtils ? this.storageUtils.getSessionStartTime() : [], i = this.crossSessionsUtils && this.crossSessionsUtils.getSessionsHistory(e);
                    this.setState(i);
                },
                handleStorageChange: function t() {
                    this.refreshSessionsHistoryFromLocalStorage();
                }
            }, n.returnVisits = n.returnVisits || new o();
        }(window), function (t, e) {
            var i = '_tfa', n, r = function t() {
                };
            r.prototype = {
                constructor: r,
                init: function t() {
                    this.runningId = 0, this.subscribers = {}, this.setVisibilityProperties(), this.initMetricData(), this.initListener();
                },
                initMetricData: function t() {
                    this.isPageHidden = document[this.hiddenProp];
                },
                initListener: function t() {
                    e.eventUtils.safeAddEventListener(this.visibilityChangeEventName, this.handleVisibilityChange.bind(this));
                },
                setVisibilityProperties: function t() {
                    void 0 !== document.hidden ? (this.hiddenProp = 'hidden', this.visibilityChangeEventName = 'visibilitychange') : void 0 !== document.msHidden ? (this.hiddenProp = 'msHidden', this.visibilityChangeEventName = 'msvisibilitychange') : void 0 !== document.webkitHidden && (this.hiddenProp = 'webkitHidden', this.visibilityChangeEventName = 'webkitvisibilitychange');
                },
                handleVisibilityChange: function t() {
                    this.isPageHidden = document[this.hiddenProp], this.notify();
                },
                getIsPageHidden: function t() {
                    return this.isPageHidden;
                },
                subscribeToEvent: function t(e) {
                    var i = this.runningId++;
                    return this.subscribers[i] = e, function () {
                        delete this.subscribers[i];
                    }.bind(this);
                },
                notify: function t() {
                    Object.keys(this.subscribers).forEach(function (t) {
                        this.subscribers[t]();
                    }.bind(this));
                }
            }, (n = t[i] = t[i] || []).TEM = n.TEM || {}, n.TEM.visibilityListener = n.TEM.visibilityListener || new r();
        }(window, window['TFASC'.indexOf('{jsScope}') >= 0 ? 'TRC' : 'TFASC']), function (t, e) {
            var i = '_tfa', n, r = function t() {
                };
            r.prototype = {
                constructor: r,
                init: function t(e) {
                    this.runningId = 0, this.subscribers = {}, this.storageUtils = e, this.initListener();
                },
                initListener: function t() {
                    e.eventUtils.safeAddEventListenerToWindow('storage', this.handleStorageChange.bind(this));
                },
                handleStorageChange: function t(e) {
                    e && e.key === this.storageUtils.getStorageKey() && this.notify(e);
                },
                subscribeToEvent: function t(e) {
                    var i = this.runningId++;
                    return this.subscribers[i] = e, function () {
                        delete this.subscribers[i];
                    }.bind(this);
                },
                notify: function t(e) {
                    Object.keys(this.subscribers).forEach(function (t) {
                        this.subscribers[t](e);
                    }.bind(this));
                }
            }, (n = t[i] = t[i] || []).TEM = n.TEM || {}, n.TEM.storageListener = n.TEM.storageListener || new r();
        }(window, window['TFASC'.indexOf('{jsScope}') >= 0 ? 'TRC' : 'TFASC']), function (t, e) {
            var i = '_tfa', n = t[i] = t[i] || [], r, s = n.TEM = n.TEM || {}, o = s.ESU || {}, a = s.SCD || {}, c = s.SSD || {}, u = s.TOS || {}, l = s.returnVisits || {}, f = s.crossSessionsUtils || {}, d = s.visibilityListener || {}, h = s.storageListener || {}, g = 1500, p = 50, m = 30000, v = 'numOfTimesMetricsSent', S = 'pre_d_eng_tb', b = { SESSION_END: 'SESSION_END' }, I, T, y = !1, E = Date.now();
            function w(t, e) {
                var i = u.getTimeOnSite(), n = a.getScrollDepth(), r = c.getMetric(), s = {
                        notify: 'event',
                        name: S,
                        tos: i,
                        scd: n,
                        ssd: r,
                        est: o.getSessionStartTime(),
                        ver: o.getDataVersion(),
                        isls: o.getIsLocalStorageAvailable(),
                        src: t,
                        invt: e
                    };
                return s = l.addReturnVisits(s);
            }
            function R(t, e) {
                var i = w(t, e);
                i.est && (r.pageViewAccountIds ? _(r.pageViewAccountIds, i) : C(i));
            }
            function _(t, e) {
                var i = Object.keys(t);
                i.length > 0 ? i.forEach(function (i) {
                    e.id = t[i], C(e);
                }) : C(e);
            }
            function C(t) {
                r.push(t);
            }
            function D() {
                O(), o.resetStorageMetricData();
            }
            function O() {
                clearTimeout(T);
            }
            function U(t) {
                (isNaN(I) || I < 0) && (I = 0), o.hasSessionEnded() || (I++, o.persistSpecificMetricsData(v, I), k() || s.sendMetrics('i', t), P());
            }
            function k() {
                return u.getTimeOnSite() > 5 * 60 * 1000 && c.getMetric() > 5;
            }
            function P() {
                if (clearTimeout(T), y && !d.getIsPageHidden()) {
                    var t = g * Math.pow(2, I);
                    t !== 1 / 0 && (T = setTimeout(U, t, t));
                }
            }
            function N() {
                A(), P();
            }
            function A() {
                var t = o.getSessionDataFromStorage();
                I = t && t[v] && t[v] || 0;
            }
            function M() {
                h.subscribeToEvent(L.bind(this)), d.subscribeToEvent(V.bind(this));
            }
            function V() {
                d.getIsPageHidden() ? O() : P();
            }
            function L(t) {
                function e(t) {
                    var e = JSON.parse(t.newValue), r = JSON.parse(t.oldValue);
                    return !i(e, r) && !n(e, r);
                }
                function i(t, e) {
                    return t.sessionDepth.length !== e.sessionDepth.length;
                }
                function n(t, e) {
                    return t.timeOnSite !== e.timeOnSite;
                }
                A(), t && y && !d.getIsPageHidden() && e(t) && (y = !1, O(), x(p, m, N, O));
            }
            function x(t, e, i, n) {
                var r = !1;
                function s(t) {
                    if (window.top !== window) {
                        var e = window.parent;
                        for (e.postMessage(t, '*'); e !== e.parent;)
                            (e = e.parent).postMessage(t, '*');
                    }
                    function i(e) {
                        try {
                            for (var n = 0; n < e.frames.length; n++) {
                                var r = e.frames[n];
                                r !== window && (r.postMessage(t, '*'), i(r));
                            }
                        } catch (t) {
                        }
                    }
                    i(window.top), window.parent !== window && i(window);
                }
                function o() {
                    s({
                        type: 'TARP',
                        query: !1,
                        t: E
                    });
                }
                function a() {
                    r = !1, s({
                        type: 'TARP',
                        query: !0
                    }), setTimeout(function () {
                        r ? setTimeout(e, a) : y || (y = !0, i(), o());
                    }, t);
                }
                y = !1, window.addEventListener('message', function (t) {
                    var s = t.data;
                    'TARP' === s.type && t.source !== window && (y ? s.query ? o() : s.t < E ? (y = !1, r = !0, n(), setTimeout(e, a)) : o() : s.query || (s.t < E ? r = !0 : (y = !0, i(), o())));
                }), a();
            }
            function j() {
                s.initialized || (r = n.TUP || {}, s.initialized = !0, s.ESU.init(D), d.init(), h.init(o), M(), s.ESU.getIsLocalStorageAvailable() && (f.init(o), u.init(o, h, d), a.init(o, h), c.init(o, h, e.sharedEvents.PAGE_VIEW), l.init(o, h, f), s.initIntervalTrigger()), x(p, m, N, O));
            }
            s.init = s.init || j, s.onSessionEndTrigger = s.onSessionEndTrigger || D, s.sendMetrics = s.sendMetrics || R, s.initIntervalTrigger = s.initIntervalTrigger || N, s.EVENTS = s.EVENTS || b;
        }(window, window['TFASC'.indexOf('{jsScope}') >= 0 ? 'TRC' : 'TFASC']), function (t, e, i) {
            var n = e.tfaPageManager || {}, r = '_tfa', s = window[r] = window[r] || [], o = s.TEM || {}, a = {
                    event: z,
                    subscription: Q
                }, c = /(\S+)taboola(\S+|)\.com\/libtrc\/unip\/(\S+)\/tfa\.js(\S+|)/, u = 'script[src$=\'tfa.js\']', l = '//', f = 'page_view', d = [
                    'notify',
                    'id'
                ], h = {
                    name: 'en',
                    url: 'item-url',
                    referrer: 'ref',
                    timestamp: 'tim'
                }, g = -1, p = {
                    protocol: 'https:',
                    host: 'trc.taboola.com',
                    httpMethod: 'get',
                    loggerEventName: 'unip',
                    logToConsole: !0
                }, m = {
                    EMPTY_COMMAND: 'EMPTY_COMMAND',
                    MISSING_NOTIFY: 'MISSING_NOTIFY',
                    INVALID_NOTIFY: 'INVALID_NOTIFY',
                    MISSING_NAME: 'MISSING_NAME',
                    INVALID_ID: 'INVALID_ID'
                }, v = { TFA_VALIDATION_ERROR: 'TFA_VALIDATION_ERROR' }, S = ((T = {})[f] = Z, T), b = function () {
                    var t = {};
                    return t[e.sharedEvents.REQUEST_ID_CREATION_TIMEOUT] = 'to', t[e.sharedEvents.REQUEST_ID_CREATION_ERROR] = 'err', t[e.sharedEvents.REQUEST_ID_CREATION_JS_ERROR] = 'jserr', t[e.sharedEvents.INVALID_TRK_RESPONSE] = 'itrkr', t;
                }(), I = !isNaN(parseFloat(1267090)), T;
            function y() {
                var t = tt();
                t.initialized && t.domAccountId && setTimeout(function () {
                    for (var t = tt().asyncQueue; t.length;)
                        et(t.shift());
                }, 0);
            }
            function E() {
                var t = w(), e;
                if (t && t.src && (e = t.src.replace(c, '$3')))
                    return /^\d+$/.test(e) ? parseInt(e, 10) : (nt('Value \'' + e + '\' is invalid for \'id\' param in script source url \'' + t.src + '\'. Only numeric values are allowed.'), g);
            }
            function w() {
                for (var t = document.querySelectorAll(u), e, i = 0; i < t.length; i++)
                    if ((e = t[i]).src && e.src.indexOf('/unip/') > 0)
                        return e;
            }
            function R() {
                return e.eventUtils.getDateNow();
            }
            function _(t) {
                t['ce'] = 'subscr';
            }
            function C(t) {
                var e = n.getSessionDataFirstPartyCookie();
                void 0 !== e && e && (t['sd'] = e);
            }
            function D(t) {
                try {
                    var i = e.tfaUserId.getUserId(), r = n.getValue('user-id');
                    (i || r) && (t['ui'] = i || r);
                } catch (e) {
                    nt('Error while trying to add user-id param, params=' + JSON.stringify(t), e);
                }
            }
            function O(t) {
                try {
                    var i = e.tfaUserId.getClickId();
                    i && (t[e.tfaUserId.CLICK_ID_KEY] = i);
                } catch (e) {
                    nt('Error while trying to addClickIdParam, params=' + JSON.stringify(t), e);
                }
            }
            function U(t) {
                var i = tt();
                i.referrer || (i.referrer = e.trk.getReferrer()), t[h.referrer] = i.referrer;
            }
            function k(t, e) {
                var i = h.url, n;
                dt(ot(t), e) && (t[i] = t[i] || document.location.href);
            }
            function P(t) {
                var e = {}, i = !1, n;
                for (var r in (t[h.timestamp] = R(), t))
                    !t.hasOwnProperty(r) || d.indexOf(r) >= 0 || (e[n = h.hasOwnProperty(r) ? h[r] : r] = t[r], i = !0);
                return i && e;
            }
            function N(t, i) {
                var n = at(t) + l + ct(t, i);
                j(i, t), A(i, t);
                try {
                    e.TRCLogger[p.httpMethod](n, p.loggerEventName, i, t);
                } catch (e) {
                    nt('Error while trying to send to server event with id \'' + t + '\' and params \'' + JSON.stringify(i) + '\'.', e);
                }
            }
            function A(t, e) {
                D(t), O(t), U(t), q(t), k(t, e), M(t);
            }
            function M(t) {
                t && o && o.ESU && o.ESU.getIsLocalStorageAvailable() && (V(t), L(t), x(t));
            }
            function V(t) {
                o.TOS && (t.tos = o.TOS.getTimeOnSite());
            }
            function L(e) {
                if (o.SSD) {
                    var i = o.SSD.getMetric();
                    o.SSD.isURLVisited(t.location.href) || i++, e.ssd = i;
                }
            }
            function x(t) {
                o.SCD && (t.scd = o.SCD.getScrollDepth());
            }
            function j(t, e) {
                $(t), F(t, e), G(t, e);
            }
            function K(t, e) {
                _(e), C(e), J(t, e);
            }
            function $(t) {
                t['vi'] = e.trk.getViewId();
            }
            function F(t, i) {
                var n = e.trk.getPublisherRequestId(i);
                n && (t['ri'] = n);
            }
            function G(t, i) {
                var n = e.trk.getPublisherSessionData(i);
                n && (t['sd'] = n);
            }
            function H(t, e) {
                t['mrir'] = e;
            }
            function q(t) {
                t['cv'] = i;
            }
            function B(t, e) {
                if (t === f)
                    for (var i in e)
                        if (!([
                                h.name,
                                h.timestamp
                            ].indexOf(i) >= 0))
                            return !0;
                return !1;
            }
            function W(t, i) {
                var n = tt(), r;
                if (!e.trk.getPublisherRequestId(t)) {
                    if (e.trk.isRequestProcessing(t))
                        return void n.messageDelayer.delayMessage(t, i, {
                            successCallback: N,
                            failCallback: function t(e, i, n, r) {
                                var s = b[r];
                                s || (s = r), H(i, s), N(e, i);
                            },
                            timeoutInMillis: st(t)
                        });
                    H(i, e.trk.getRequestStatus(t));
                }
                N(t, i);
            }
            function z(t, i) {
                var n = P(t), r = ot(n), s = S[r];
                if (i = parseInt(i, 10), !s || !s(n, i)) {
                    if (lt(i)) {
                        if (ft(i))
                            return void W(i, n);
                        e.trk.getPublisherRequestId(i) || H(n, 'wffo');
                    } else
                        H(n, 'ttd');
                    N(i, n);
                }
            }
            function J(t, e) {
                void 0 !== t['sourceurl'] && t['sourceurl'] && (e['surl'] = t['sourceurl']);
            }
            function Q(t, e) {
                var i = P(t);
                K(t, i), N(parseInt(e, 10), i);
            }
            function Y(t, i) {
                var n = !1;
                try {
                    n = !!e.tfaUserId.getClickId();
                } catch (t) {
                }
                return ut(i) && !B(f, t) && !n;
            }
            function Z(t, i) {
                var n = tt(), r = !1;
                return i && (r = Y(t, i), A(t), n.pageViewAccountIds[i] = parseInt(i, 10), e.eventUtils.dispatchEvent(e.sharedEvents.PAGE_VIEW, {
                    accountId: i,
                    publisherIdType: e.publisherIdType.ID,
                    pageViewInitiator: e.pageViewInitiator.TFA,
                    isUnifiedPageView: r,
                    metadata: t
                })), r;
            }
            function X(t) {
                return t ? t.notify ? a.hasOwnProperty(t.notify) ? t.name ? !(t.hasOwnProperty('id') && !/^\d+$/.test(t.id)) || (it(m.INVALID_ID, t, 'Value \'' + t.id + '\' is invalid for \'id\' field in command \'' + JSON.stringify(t) + '\'. Only numeric values are allowed.'), !1) : (it(m.MISSING_NAME, t, 'Mandatory \'name\' field is missing in command \'' + JSON.stringify(t) + '\'.'), !1) : (it(m.INVALID_NOTIFY, t, 'Value \'' + t.notify + '\' is invalid for \'notify\' field in command \'' + JSON.stringify(t) + '\'.'), !1) : (it(m.MISSING_NOTIFY, t, 'Mandatory \'notify\' field is missing in command \'' + JSON.stringify(t) + '\'.'), !1) : (it(m.EMPTY_COMMAND, t, 'Command is \'' + t + '\'.'), !1);
            }
            function tt() {
                return window && window[r] && window[r].TUP || {};
            }
            function et(t) {
                var e, i;
                if (X(t))
                    if (e = tt(), i = t.id || e.domAccountId) {
                        if (i !== g)
                            try {
                                a[t.notify](t, i);
                            } catch (e) {
                                nt('An error occurred while handling command \'' + JSON.stringify(t) + '\'.', e);
                            }
                    } else
                        e.asyncQueue.push(t);
            }
            function it(t, i, n) {
                var r = tt();
                e.eventUtils.dispatchEvent(v.TFA_VALIDATION_ERROR, {
                    accountId: r.domAccountId,
                    errorCode: t,
                    command: i
                }), nt(n);
            }
            function nt(t, e) {
                p.logToConsole && rt(t, e);
            }
            function rt(t, e) {
                e ? console.log('Taboola Pixel: ' + t, e) : console.log('Taboola Pixel: ' + t);
            }
            function st(t) {
                return 500 + s.config.safeGet('tfa:trk:tracking-request-timeout', 2000, t);
            }
            function ot(t) {
                return t[h.name];
            }
            function at(t) {
                return s.config.safeGet('tfa:default-protocol', p.protocol, t);
            }
            function ct(t, e) {
                var i = ot(e), n;
                return s.config.safeGet('tfa:event-host-map', {}, t)[i] || p.host;
            }
            function ut(t) {
                return lt(t) && s.config.safeGet('tfa:trk:is-unified-page-view', !1, t);
            }
            function lt(t) {
                return s.config.safeGet('tfa:trk:enabled', !0, t);
            }
            function ft(t) {
                return s.config.safeGet('tfa:trk:wait-for-request-id', !0, t);
            }
            function dt(t, e) {
                var i = s.config.safeGet('tfa:add-item-url:event-list', [], e);
                return '*' === i || i.indexOf(t) >= 0;
            }
            function ht() {
                var t = s.TUP = s.TUP || {}, i = s.config.safeGet('tfa:get-publisher-id-from-baker', !1);
                t.domAccountId = t.domAccountId || (i && I ? 1267090 : E()), t.initialized || (t.push = s.TUP.push || et, t.initialized = !0, t.asyncQueue = [], t.EVENTS = v, t.pageViewAccountIds = {}, t.messageDelayer = new e.MessageDelayer('publisherId', e.sharedEvents.REQUEST_ID_CREATED, [
                    e.sharedEvents.REQUEST_ID_CREATION_JS_ERROR,
                    e.sharedEvents.REQUEST_ID_CREATION_ERROR,
                    e.sharedEvents.REQUEST_ID_CREATION_TIMEOUT,
                    e.sharedEvents.INVALID_TRK_RESPONSE
                ]), o && o.init && o.init()), y();
            }
            ht();
        }(window, window['TFASC'.indexOf('{jsScope}') >= 0 ? 'TRC' : 'TFASC'], '20210713-4-RELEASE'), function (t, e, i) {
            var n = '_tfa', r, s = {
                    orderid: 'orderid',
                    currency: 'currency',
                    revenue: 'revenue',
                    quantity: 'quantity',
                    name: 'name',
                    attributionGroup: 'attributionGroup'
                }, o = { type: 'marking-type' }, a = 'https:' + '//trc.taboola.com/{$publishreId}log/3/{$logType}?', c = /(\S+)taboola(\S+|)\.com\/libtrc\/(\S+)\/tfa\.js(\S+|)/, u = 'unip/', l = [], f = [], d = '_tecq', h = !isNaN(parseFloat(1267090));
            function g(t) {
                var e;
                switch (t.notify) {
                case 'action':
                    e = l;
                    break;
                case 'mark':
                    e = f;
                    break;
                case 'event':
                case 'subscription':
                    e = r.TUP;
                    break;
                case 'ecevent':
                    r.config && r.config.safeGet('tfa:ecomm:enabled', !1, t.id) && (e = window[d] = window[d] || []);
                    break;
                default:
                    return;
                }
                e && e.push(t);
            }
            function p() {
                return i.tfaUserId && i.tfaUserId.getUserId() ? '&ui=' + encodeURIComponent(i.tfaUserId.getUserId()) : '';
            }
            function m() {
                return i.tfaUserId && i.tfaUserId.getClickId() ? '&' + i.tfaUserId.CLICK_ID_KEY + '=' + encodeURIComponent(i.tfaUserId.getClickId()) : '';
            }
            function v() {
                var e, i, n, r;
                if (n = t._tfa.config.safeGet('tfa:get-publisher-id-from-baker', !1) && h ? 1267090 : R())
                    for (e = 0, i = l.length; e < i; e++)
                        I(b(a, {
                            $publishreId: n ? n + '/' : '',
                            $logType: 'action'
                        }) + 'tim=' + escape(y()) + '&item-url=' + escape(T()) + _(s, l.shift()) + E() + p() + m());
            }
            function S() {
                var e, i, n, r;
                if (n = t._tfa.config.safeGet('tfa:get-publisher-id-from-baker', !1) && h ? 1267090 : R())
                    for (e = 0, i = f.length; e < i; e++)
                        I(b(a, {
                            $publishreId: n ? n + '/' : '',
                            $logType: 'mark'
                        }) + 'tim=' + escape(y()) + '&item-url=' + escape(T()) + _(o, f.shift()) + E() + p() + m());
            }
            function b(t, e) {
                return t.replace(/\{([^{}]*)\}/g, function (t, i) {
                    var n = e[i];
                    return 'string' == typeof n || 'number' == typeof n ? n : t;
                });
            }
            function I(e) {
                var i = new Image();
                t._tfa.config.safeGet('tfa:add-referrer-policy-when-firing-pixel', !0) && (i.referrerPolicy = 'no-referrer-when-downgrade'), i.src = e;
            }
            function T() {
                return t.location.href;
            }
            function y() {
                var t = new Date(), e = t.getHours(), i = t.getMinutes(), n = t.getSeconds() + t.getMilliseconds() / 1000;
                return (e < 10 ? '0' : '') + e + ':' + (i < 10 ? '0' : '') + i + ':' + (n < 10 ? '0' : '') + n.toFixed(3);
            }
            function E() {
                var i = t.location.search, n = e.referrer.match(/(\?\S+)$/g), r = '';
                return r = w(i.replace(/^\?/, '').split(/&/)) + (n ? w(n[0].replace(/^\?/, '').split(/&/)) : '');
            }
            function w(t) {
                var e = '', i, n, r = 'trc_';
                for (i = 0, n = t.length; i < n; i++)
                    0 == t[i].indexOf(r) && (e = e + '&' + t[i]);
                return e;
            }
            function R() {
                var t = document.getElementsByTagName('script'), e, i, n = '', r;
                for (e = 0, i = t.length; e < i; e++)
                    if ((r = t[e].src) && (n = r.replace(c, '$3')) !== t[e].src && n.indexOf(u) < 0)
                        return n;
                return n;
            }
            function _(t, e) {
                var i, n = '';
                for (i in t)
                    void 0 !== e[i] && (n += '&' + t[i] + '=' + e[i]);
                return n;
            }
            function C(t) {
                for (var e = 0; e < arguments.length; e++)
                    (t = arguments[e]) instanceof Object && g(t);
                return D(), arguments.length;
            }
            function D() {
                v(), S();
            }
            function O() {
                for (; r.length;)
                    C(r.shift());
            }
            function U() {
                (r = t[n] = t[n] || []).registered || (r.push = C, r.registered = !0, O());
            }
            U();
        }(window, document, window['TFASC'.indexOf('{jsScope}') >= 0 ? 'TRC' : 'TFASC']);
        function $___var_0176a89e24c2b0c3(t) {
            return (_typeof = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function t(h) {
                return typeof h;
            } : function t(h) {
                return h && 'function' == typeof Symbol && h.constructor === Symbol && h !== Symbol.prototype ? 'symbol' : typeof h;
            })(t);
        }
        !function (t) {
            try {
                var h = function t(h) {
                        h ? (f[0] = f[16] = f[1] = f[2] = f[3] = f[4] = f[5] = f[6] = f[7] = f[8] = f[9] = f[10] = f[11] = f[12] = f[13] = f[14] = f[15] = 0, this.blocks = f) : this.blocks = [
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0,
                            0
                        ], this.h0 = 1779033703, this.h1 = 3144134277, this.h2 = 1013904242, this.h3 = 2773480762, this.h4 = 1359893119, this.h5 = 2600822924, this.h6 = 528734635, this.h7 = 1541459225, this.block = this.start = this.bytes = this.hBytes = 0, this.finalized = this.hashed = !1, this.first = !0;
                    }, i = 'input is invalid type', s = 'undefined' != typeof ArrayBuffer, r = '0123456789abcdef'.split(''), e = [
                        -2147483648,
                        8388608,
                        32768,
                        128
                    ], o = [
                        24,
                        16,
                        8,
                        0
                    ], n = [
                        1116352408,
                        1899447441,
                        3049323471,
                        3921009573,
                        961987163,
                        1508970993,
                        2453635748,
                        2870763221,
                        3624381080,
                        310598401,
                        607225278,
                        1426881987,
                        1925078388,
                        2162078206,
                        2614888103,
                        3248222580,
                        3835390401,
                        4022224774,
                        264347078,
                        604807628,
                        770255983,
                        1249150122,
                        1555081692,
                        1996064986,
                        2554220882,
                        2821834349,
                        2952996808,
                        3210313671,
                        3336571891,
                        3584528711,
                        113926993,
                        338241895,
                        666307205,
                        773529912,
                        1294757372,
                        1396182291,
                        1695183700,
                        1986661051,
                        2177026350,
                        2456956037,
                        2730485921,
                        2820302411,
                        3259730800,
                        3345764771,
                        3516065817,
                        3600352804,
                        4094571909,
                        275423344,
                        430227734,
                        506948616,
                        659060556,
                        883997877,
                        958139571,
                        1322822218,
                        1537002063,
                        1747873779,
                        1955562222,
                        2024104815,
                        2227730452,
                        2361852424,
                        2428436474,
                        2756734187,
                        3204031479,
                        3329325298
                    ], a = [
                        'hex',
                        'array',
                        'digest',
                        'arrayBuffer'
                    ], f = [];
                Array.isArray || (Array.isArray = function (t) {
                    return '[object Array]' === Object.prototype.toString.call(t);
                }), s && !ArrayBuffer.isView && (ArrayBuffer.isView = function (t) {
                    return 'object' === _typeof(t) && t.buffer && t.buffer.constructor === ArrayBuffer;
                });
                var y = function t(i) {
                        return function (t) {
                            return new h(!0).update(t)[i]();
                        };
                    }, u = function t() {
                        var i = y('hex');
                        i.create = function () {
                            return new h();
                        }, i.update = function (t) {
                            return i.create().update(t);
                        };
                        for (var s = 0; s < a.length; ++s) {
                            var r = a[s];
                            i[r] = y(r);
                        }
                        return i;
                    };
                h.prototype.update = function (t) {
                    if (!this.finalized) {
                        var h, r = _typeof(t);
                        if ('string' !== r) {
                            if ('object' !== r)
                                throw new Error(i);
                            if (null === t)
                                throw new Error(i);
                            if (s && t.constructor === ArrayBuffer)
                                t = new Uint8Array(t);
                            else if (!(Array.isArray(t) || s && ArrayBuffer.isView(t)))
                                throw new Error(i);
                            h = !0;
                        }
                        for (var e, n = 0, a, f = t.length, y = this.blocks; n < f;) {
                            if (this.hashed && (this.hashed = !1, y[0] = this.block, y[16] = y[1] = y[2] = y[3] = y[4] = y[5] = y[6] = y[7] = y[8] = y[9] = y[10] = y[11] = y[12] = y[13] = y[14] = y[15] = 0), h)
                                for (a = this.start; n < f && a < 64; ++n)
                                    y[a >> 2] |= t[n] << o[3 & a++];
                            else
                                for (a = this.start; n < f && a < 64; ++n)
                                    (e = t.charCodeAt(n)) < 128 ? y[a >> 2] |= e << o[3 & a++] : e < 2048 ? (y[a >> 2] |= (192 | e >> 6) << o[3 & a++], y[a >> 2] |= (128 | 63 & e) << o[3 & a++]) : e < 55296 || e >= 57344 ? (y[a >> 2] |= (224 | e >> 12) << o[3 & a++], y[a >> 2] |= (128 | e >> 6 & 63) << o[3 & a++], y[a >> 2] |= (128 | 63 & e) << o[3 & a++]) : (e = 65536 + ((1023 & e) << 10 | 1023 & t.charCodeAt(++n)), y[a >> 2] |= (240 | e >> 18) << o[3 & a++], y[a >> 2] |= (128 | e >> 12 & 63) << o[3 & a++], y[a >> 2] |= (128 | e >> 6 & 63) << o[3 & a++], y[a >> 2] |= (128 | 63 & e) << o[3 & a++]);
                            this.lastByteIndex = a, this.bytes += a - this.start, a >= 64 ? (this.block = y[16], this.start = a - 64, this.hash(), this.hashed = !0) : this.start = a;
                        }
                        return this.bytes > 4294967295 && (this.hBytes += this.bytes / 4294967296 << 0, this.bytes = this.bytes % 4294967296), this;
                    }
                }, h.prototype.finalize = function () {
                    if (!this.finalized) {
                        this.finalized = !0;
                        var t = this.blocks, h = this.lastByteIndex;
                        t[16] = this.block, t[h >> 2] |= e[3 & h], this.block = t[16], h >= 56 && (this.hashed || this.hash(), t[0] = this.block, t[16] = t[1] = t[2] = t[3] = t[4] = t[5] = t[6] = t[7] = t[8] = t[9] = t[10] = t[11] = t[12] = t[13] = t[14] = t[15] = 0), t[14] = this.hBytes << 3 | this.bytes >>> 29, t[15] = this.bytes << 3, this.hash();
                    }
                }, h.prototype.hash = function () {
                    var t = this.h0, h = this.h1, i = this.h2, s = this.h3, r = this.h4, e = this.h5, o = this.h6, a = this.h7, f = this.blocks, y, u, c, p, l, b, d, w, A, B, v;
                    for (y = 16; y < 64; ++y)
                        u = ((l = f[y - 15]) >>> 7 | l << 25) ^ (l >>> 18 | l << 14) ^ l >>> 3, c = ((l = f[y - 2]) >>> 17 | l << 15) ^ (l >>> 19 | l << 13) ^ l >>> 10, f[y] = f[y - 16] + u + f[y - 7] + c << 0;
                    for (v = h & i, y = 0; y < 64; y += 4)
                        this.first ? (w = 704751109, a = (l = f[0] - 210244248) - 1521486534 << 0, s = l + 143694565 << 0, this.first = !1) : (u = (t >>> 2 | t << 30) ^ (t >>> 13 | t << 19) ^ (t >>> 22 | t << 10), p = (w = t & h) ^ t & i ^ v, a = s + (l = a + (c = (r >>> 6 | r << 26) ^ (r >>> 11 | r << 21) ^ (r >>> 25 | r << 7)) + (d = r & e ^ ~r & o) + n[y] + f[y]) << 0, s = l + (b = u + p) << 0), u = (s >>> 2 | s << 30) ^ (s >>> 13 | s << 19) ^ (s >>> 22 | s << 10), p = (A = s & t) ^ s & h ^ w, o = i + (l = o + (c = (a >>> 6 | a << 26) ^ (a >>> 11 | a << 21) ^ (a >>> 25 | a << 7)) + (d = a & r ^ ~a & e) + n[y + 1] + f[y + 1]) << 0, u = ((i = l + (b = u + p) << 0) >>> 2 | i << 30) ^ (i >>> 13 | i << 19) ^ (i >>> 22 | i << 10), p = (B = i & s) ^ i & t ^ A, e = h + (l = e + (c = (o >>> 6 | o << 26) ^ (o >>> 11 | o << 21) ^ (o >>> 25 | o << 7)) + (d = o & a ^ ~o & r) + n[y + 2] + f[y + 2]) << 0, u = ((h = l + (b = u + p) << 0) >>> 2 | h << 30) ^ (h >>> 13 | h << 19) ^ (h >>> 22 | h << 10), p = (v = h & i) ^ h & s ^ B, r = t + (l = r + (c = (e >>> 6 | e << 26) ^ (e >>> 11 | e << 21) ^ (e >>> 25 | e << 7)) + (d = e & o ^ ~e & a) + n[y + 3] + f[y + 3]) << 0, t = l + (b = u + p) << 0;
                    this.h0 = this.h0 + t << 0, this.h1 = this.h1 + h << 0, this.h2 = this.h2 + i << 0, this.h3 = this.h3 + s << 0, this.h4 = this.h4 + r << 0, this.h5 = this.h5 + e << 0, this.h6 = this.h6 + o << 0, this.h7 = this.h7 + a << 0;
                }, h.prototype.hex = function () {
                    this.finalize();
                    var t = this.h0, h = this.h1, i = this.h2, s = this.h3, e = this.h4, o = this.h5, n = this.h6, a = this.h7, f = r[t >> 28 & 15] + r[t >> 24 & 15] + r[t >> 20 & 15] + r[t >> 16 & 15] + r[t >> 12 & 15] + r[t >> 8 & 15] + r[t >> 4 & 15] + r[15 & t] + r[h >> 28 & 15] + r[h >> 24 & 15] + r[h >> 20 & 15] + r[h >> 16 & 15] + r[h >> 12 & 15] + r[h >> 8 & 15] + r[h >> 4 & 15] + r[15 & h] + r[i >> 28 & 15] + r[i >> 24 & 15] + r[i >> 20 & 15] + r[i >> 16 & 15] + r[i >> 12 & 15] + r[i >> 8 & 15] + r[i >> 4 & 15] + r[15 & i] + r[s >> 28 & 15] + r[s >> 24 & 15] + r[s >> 20 & 15] + r[s >> 16 & 15] + r[s >> 12 & 15] + r[s >> 8 & 15] + r[s >> 4 & 15] + r[15 & s] + r[e >> 28 & 15] + r[e >> 24 & 15] + r[e >> 20 & 15] + r[e >> 16 & 15] + r[e >> 12 & 15] + r[e >> 8 & 15] + r[e >> 4 & 15] + r[15 & e] + r[o >> 28 & 15] + r[o >> 24 & 15] + r[o >> 20 & 15] + r[o >> 16 & 15] + r[o >> 12 & 15] + r[o >> 8 & 15] + r[o >> 4 & 15] + r[15 & o] + r[n >> 28 & 15] + r[n >> 24 & 15] + r[n >> 20 & 15] + r[n >> 16 & 15] + r[n >> 12 & 15] + r[n >> 8 & 15] + r[n >> 4 & 15] + r[15 & n];
                    return f += r[a >> 28 & 15] + r[a >> 24 & 15] + r[a >> 20 & 15] + r[a >> 16 & 15] + r[a >> 12 & 15] + r[a >> 8 & 15] + r[a >> 4 & 15] + r[15 & a];
                }, h.prototype.toString = h.prototype.hex, h.prototype.digest = function () {
                    this.finalize();
                    var t = this.h0, h = this.h1, i = this.h2, s = this.h3, r = this.h4, e = this.h5, o = this.h6, n = this.h7, a = [
                            t >> 24 & 255,
                            t >> 16 & 255,
                            t >> 8 & 255,
                            255 & t,
                            h >> 24 & 255,
                            h >> 16 & 255,
                            h >> 8 & 255,
                            255 & h,
                            i >> 24 & 255,
                            i >> 16 & 255,
                            i >> 8 & 255,
                            255 & i,
                            s >> 24 & 255,
                            s >> 16 & 255,
                            s >> 8 & 255,
                            255 & s,
                            r >> 24 & 255,
                            r >> 16 & 255,
                            r >> 8 & 255,
                            255 & r,
                            e >> 24 & 255,
                            e >> 16 & 255,
                            e >> 8 & 255,
                            255 & e,
                            o >> 24 & 255,
                            o >> 16 & 255,
                            o >> 8 & 255,
                            255 & o
                        ];
                    return a.push(n >> 24 & 255, n >> 16 & 255, n >> 8 & 255, 255 & n), a;
                }, h.prototype.array = h.prototype.digest, h.prototype.arrayBuffer = function () {
                    this.finalize();
                    var t = new ArrayBuffer(32), h = new DataView(t);
                    return h.setUint32(0, this.h0), h.setUint32(4, this.h1), h.setUint32(8, this.h2), h.setUint32(12, this.h3), h.setUint32(16, this.h4), h.setUint32(20, this.h5), h.setUint32(24, this.h6), h.setUint32(28, this.h7), t;
                }, t._tfa = t._tfa || {}, t._tfa.sha256 = t._tfa.sha256 || u(), t.TRC = t.TRC || {}, t.TRC.sha256 = t._tfa.sha256;
            } catch (t) {
            }
        }(window);
        !function (b, W, m) {
            try {
                var t = function b(W) {
                        var m;
                        try {
                            return m = window.atob(h), W && W.type && -1 != W.type.toLowerCase().indexOf(m) || W.id && -1 != W.id.toLowerCase().indexOf(m) || W.name && -1 != W.name.toLowerCase().indexOf(m);
                        } catch (b) {
                            return !1;
                        }
                    }, c = function b(W) {
                        return !!u.test(String(W).toLowerCase()) && -1 === Y.indexOf(window.btoa(Z(W)));
                    }, Z = function b(W) {
                        var m = W.indexOf('@');
                        return W.slice(m + 1, W.length);
                    }, d = 'eflp', a = 'deit', l = 'https:', u = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, h = 'ZW1haWw=', Y = [
                        'MC1tYWlsLmNvbQ==',
                        'MDgxNS5ydQ==',
                        'MGNsaWNrZW1haWwuY29t',
                        'MHduZC5uZXQ=',
                        'MHduZC5vcmc=',
                        'MTBtaW51dGVtYWlsLmNvbQ==',
                        'MjBtaW51dGVtYWlsLmNvbQ==',
                        'MnByb25nLmNvbQ==',
                        'MzBtaW51dGVtYWlsLmNvbQ==',
                        'M2QtcGFpbnRpbmcuY29t',
                        'NHdhcmRpbmcuY29t',
                        'NHdhcmRpbmcubmV0',
                        'NHdhcmRpbmcub3Jn',
                        'NjBtaW51dGVtYWlsLmNvbQ==',
                        'Njc1aG9zdGluZy5jb20=',
                        'Njc1aG9zdGluZy5uZXQ=',
                        'Njc1aG9zdGluZy5vcmc=',
                        'NnVybC5jb20=',
                        'NzVob3N0aW5nLmNvbQ==',
                        'NzVob3N0aW5nLm5ldA==',
                        'NzVob3N0aW5nLm9yZw==',
                        'N3RhZ3MuY29t',
                        'OW94Lm5ldA==',
                        'YS1iYy5uZXQ=',
                        'YWZyb2JhY29uLmNvbQ==',
                        'YWpheGFwcC5uZXQ=',
                        'YW1pbGVnaXQuY29t',
                        'YW1pcmkubmV0',
                        'YW1pcmlpbmR1c3RyaWVzLmNvbQ==',
                        'YW5vbmJveC5uZXQ=',
                        'YW5vbnltYm94LmNvbQ==',
                        'YW50aWNoZWYuY29t',
                        'YW50aWNoZWYubmV0',
                        'YW50aXNwYW0uZGU=',
                        'YmF4b21hbGUuaHQuY3g=',
                        'YmVlZm1pbGsuY29t',
                        'Ymlua21haWwuY29t',
                        'YmlvLW11ZXNsaS5uZXQ=',
                        'Ym9ibWFpbC5pbmZv',
                        'Ym9kaGkubGF3bGl0YS5jb20=',
                        'Ym9mdGhldy5jb20=',
                        'YnJlZm1haWwuY29t',
                        'YnJvYWRiYW5kbmluamEuY29t',
                        'YnNub3cubmV0',
                        'YnVnbWVub3QuY29t',
                        'YnVtcHltYWlsLmNvbQ==',
                        'Y2FzdWFsZHguY29t',
                        'Y2VudGVybWFpbC5jb20=',
                        'Y2VudGVybWFpbC5uZXQ=',
                        'Y2hvZ21haWwuY29t',
                        'Y2hvaWNlbWFpbDEuY29t',
                        'Y29vbC5mci5uZg==',
                        'Y29ycmVvLmJsb2dvcy5uZXQ=',
                        'Y29zbW9ycGguY29t',
                        'Y291cnJpZWwuZnIubmY=',
                        'Y291cnJpZWx0ZW1wb3JhaXJlLmNvbQ==',
                        'Y3ViaWNsaW5rLmNvbQ==',
                        'Y3Vycnl3b3JsZC5kZQ==',
                        'Y3VzdC5pbg==',
                        'ZGFjb29sZXN0LmNvbQ==',
                        'ZGFuZGlrbWFpbC5jb20=',
                        'ZGF5cmVwLmNvbQ==',
                        'ZGVhZGFkZHJlc3MuY29t',
                        'ZGVhZHNwYW0uY29t',
                        'ZGVzcGFtLml0',
                        'ZGVzcGFtbWVkLmNvbQ==',
                        'ZGV2bnVsbG1haWwuY29t',
                        'ZGZnaC5uZXQ=',
                        'ZGlnaXRhbHNhbmN0dWFyeS5jb20=',
                        'ZGlzY2FyZG1haWwuY29t',
                        'ZGlzY2FyZG1haWwuZGU=',
                        'RGlzcG9zYWJsZWVtYWlsYWRkcmVzc2VzOmVtYWlsbWlzZXIuY29t',
                        'ZGlzcG9zYWJsZWFkZHJlc3MuY29t',
                        'ZGlzcG9zZWFtYWlsLmNvbQ==',
                        'ZGlzcG9zZW1haWwuY29t',
                        'ZGlzcG9zdGFibGUuY29t',
                        'ZG0udzNpbnRlcm5ldC5jby51a2V4YW1wbGUuY29t',
                        'ZG9kZ2VpdC5jb20=',
                        'ZG9kZ2l0LmNvbQ==',
                        'ZG9kZ2l0Lm9yZw==',
                        'ZG9uZW1haWwucnU=',
                        'ZG9udHJlZy5jb20=',
                        'ZG9udHNlbmRtZXNwYW0uZGU=',
                        'ZHVtcC1lbWFpbC5pbmZv',
                        'ZHVtcGFuZGp1bmsuY29t',
                        'ZHVtcG1haWwuZGU=',
                        'ZHVtcHllbWFpbC5jb20=',
                        'ZTR3YXJkLmNvbQ==',
                        'ZW1haWw2MC5jb20=',
                        'ZW1haWxkaWVuc3QuZGU=',
                        'ZW1haWxpYXMuY29t',
                        'ZW1haWxpZ28uZGU=',
                        'ZW1haWxpbmZpdmUuY29t',
                        'ZW1haWxtaXNlci5jb20=',
                        'ZW1haWxzZW5zZWkuY29t',
                        'ZW1haWx0ZW1wb3JhcmlvLmNvbS5icg==',
                        'ZW1haWx0by5kZQ==',
                        'ZW1haWx3YXJkZW4uY29t',
                        'ZW1haWx4LmF0Lmht',
                        'ZW1haWx4ZmVyLmNvbQ==',
                        'ZW16Lm5ldA==',
                        'ZW50ZXJ0by5jb20=',
                        'ZXBoZW1haWwubmV0',
                        'ZXRyYW5xdWlsLmNvbQ==',
                        'ZXRyYW5xdWlsLm5ldA==',
                        'ZXRyYW5xdWlsLm9yZw==',
                        'ZXhwbG9kZW1haWwuY29t',
                        'ZmFrZWluYm94LmNvbQ==',
                        'ZmFrZWluZm9ybWF0aW9uLmNvbQ==',
                        'ZmFzdGFjdXJhLmNvbQ==',
                        'ZmFzdGNoZXZ5LmNvbQ==',
                        'ZmFzdGNocnlzbGVyLmNvbQ==',
                        'ZmFzdGthd2FzYWtpLmNvbQ==',
                        'ZmFzdG1hemRhLmNvbQ==',
                        'ZmFzdG1pdHN1YmlzaGkuY29t',
                        'ZmFzdG5pc3Nhbi5jb20=',
                        'ZmFzdHN1YmFydS5jb20=',
                        'ZmFzdHN1enVraS5jb20=',
                        'ZmFzdHRveW90YS5jb20=',
                        'ZmFzdHlhbWFoYS5jb20=',
                        'Zmlsem1haWwuY29t',
                        'Zml6bWFpbC5jb20=',
                        'ZnIzM21haWwuaW5mbw==',
                        'ZnJhcG1haWwuY29t',
                        'ZnJvbnQxNC5vcmc=',
                        'ZnV4MHJpbmdkdWguY29t',
                        'Z2FybGljbGlmZS5jb20=',
                        'Z2V0MW1haWwuY29t',
                        'Z2V0Mm1haWwuZnI=',
                        'Z2V0b25lbWFpbC5jb20=',
                        'Z2V0b25lbWFpbC5uZXQ=',
                        'Z2hvc3R0ZXh0ZXIuZGU=',
                        'Z2lybHN1bmRlcnRoZWluZmx1ZW5jZS5jb20=',
                        'Z2lzaHB1cHB5LmNvbQ==',
                        'Z293aWtpYm9va3MuY29t',
                        'Z293aWtpY2FtcHVzLmNvbQ==',
                        'Z293aWtpY2Fycy5jb20=',
                        'Z293aWtpZmlsbXMuY29t',
                        'Z293aWtpZ2FtZXMuY29t',
                        'Z293aWtpbXVzaWMuY29t',
                        'Z293aWtpbmV0d29yay5jb20=',
                        'Z293aWtpdHJhdmVsLmNvbQ==',
                        'Z293aWtpdHYuY29t',
                        'Z3JlYXQtaG9zdC5pbg==',
                        'Z3JlZW5zbG90aC5jb20=',
                        'Z3Nydi5jby51aw==',
                        'Z3VlcmlsbGFtYWlsLmJpeg==',
                        'Z3VlcmlsbGFtYWlsLmNvbQ==',
                        'Z3VlcmlsbGFtYWlsLm5ldA==',
                        'Z3VlcmlsbGFtYWlsLm9yZw==',
                        'Z3VlcnJpbGxhbWFpbC5iaXo=',
                        'Z3VlcnJpbGxhbWFpbC5jb20=',
                        'Z3VlcnJpbGxhbWFpbC5kZQ==',
                        'Z3VlcnJpbGxhbWFpbC5uZXQ=',
                        'Z3VlcnJpbGxhbWFpbC5vcmc=',
                        'Z3VlcnJpbGxhbWFpbGJsb2NrLmNvbQ==',
                        'aC5taW50ZW1haWwuY29t',
                        'aDhzLm9yZw==',
                        'aGFsdG9zcGFtLmNvbQ==',
                        'aGF0ZXNwYW0ub3Jn',
                        'aGlkZW1haWwuZGU=',
                        'aG9jaHNpdHplLmNvbQ==',
                        'aG90cG9wLmNvbQ==',
                        'aHVsYXBsYS5kZQ==',
                        'aWVhdHNwYW0uZXU=',
                        'aWVhdHNwYW0uaW5mbw==',
                        'aWhhdGV5b3VhbG90LmluZm8=',
                        'aWhlYXJ0c3BhbS5vcmc=',
                        'aW1haWxzLmluZm8=',
                        'aW5ib3hjbGVhbi5jb20=',
                        'aW5ib3hjbGVhbi5vcmc=',
                        'aW5jb2duaXRvbWFpbC5jb20=',
                        'aW5jb2duaXRvbWFpbC5uZXQ=',
                        'aW5jb2duaXRvbWFpbC5vcmc=',
                        'aW5zb3JnLW1haWwuaW5mbw==',
                        'aXBvby5vcmc=',
                        'aXJpc2gybWUuY29t',
                        'aXdpLm5ldA==',
                        'amV0YWJsZS5jb20=',
                        'amV0YWJsZS5mci5uZg==',
                        'amV0YWJsZS5uZXQ=',
                        'amV0YWJsZS5vcmc=',
                        'am54am4uY29t',
                        'anVuazFlLmNvbQ==',
                        'a2FzbWFpbC5jb20=',
                        'a2FzcG9wLmNvbQ==',
                        'a2VlcG15bWFpbC5jb20=',
                        'a2lsbG1haWwuY29t',
                        'a2lsbG1haWwubmV0',
                        'a2lyLmNoLnRj',
                        'a2xhc3NtYXN0ZXIuY29t',
                        'a2xhc3NtYXN0ZXIubmV0',
                        'a2x6bGsuY29t',
                        'a3VsdHVyYmV0cmllYi5pbmZv',
                        'a3VyemVwb3N0LmRl',
                        'bGV0dGhlbWVhdHNwYW0uY29t',
                        'bGhzZHYuY29t',
                        'bGlmZWJ5Zm9vZC5jb20=',
                        'bGluazJtYWlsLm5ldA==',
                        'bGl0ZWRyb3AuY29t',
                        'bG9sLm92cG4udG8=',
                        'bG9va3VnbHkuY29t',
                        'bG9wbC5jby5jYw==',
                        'bG9ydGVtYWlsLmRr',
                        'bHI3OC5jb20=',
                        'bTRpbHdlYi5pbmZv',
                        'bWFib2FyZC5jb20=',
                        'bWFpbC10ZW1wb3JhaXJlLmZy',
                        'bWFpbC5ieQ==',
                        'bWFpbC5tZXppbWFnZXMubmV0',
                        'bWFpbDJyc3Mub3Jn',
                        'bWFpbDMzMy5jb20=',
                        'bWFpbDR0cmFzaC5jb20=',
                        'bWFpbGJpZG9uLmNvbQ==',
                        'bWFpbGJsb2Nrcy5jb20=',
                        'bWFpbGNhdGNoLmNvbQ==',
                        'bWFpbGVhdGVyLmNvbQ==',
                        'bWFpbGV4cGlyZS5jb20=',
                        'bWFpbGZyZWVvbmxpbmUuY29t',
                        'bWFpbGluOHIuY29t',
                        'bWFpbGluYXRlci5jb20=',
                        'bWFpbGluYXRvci5jb20=',
                        'bWFpbGluYXRvci5uZXQ=',
                        'bWFpbGluYXRvcjIuY29t',
                        'bWFpbGluY3ViYXRvci5jb20=',
                        'bWFpbG1lLmly',
                        'bWFpbG1lLmx2',
                        'bWFpbG1ldHJhc2guY29t',
                        'bWFpbG1vYXQuY29t',
                        'bWFpbG5hdG9yLmNvbQ==',
                        'bWFpbG5lc2lhLmNvbQ==',
                        'bWFpbG51bGwuY29t',
                        'bWFpbHNoZWxsLmNvbQ==',
                        'bWFpbHNpcGhvbi5jb20=',
                        'bWFpbHNsaXRlLmNvbQ==',
                        'bWFpbHppbGxhLmNvbQ==',
                        'bWFpbHppbGxhLm9yZw==',
                        'bWJ4LmNj',
                        'bWVnYS56aWsuZGo=',
                        'bWVpbnNwYW1zY2h1dHouZGU=',
                        'bWVsdG1haWwuY29t',
                        'bWVzc2FnZWJlYW1lci5kZQ==',
                        'bWllcmRhbWFpbC5jb20=',
                        'bWludGVtYWlsLmNvbQ==',
                        'bW9idXJsLmNvbQ==',
                        'bW9uY291cnJpZXIuZnIubmY=',
                        'bW9uZW1haWwuZnIubmY=',
                        'bW9ubWFpbC5mci5uZg==',
                        'bXNhLm1pbnNtYWlsLmNvbQ==',
                        'bXQyMDA5LmNvbQ==',
                        'bXgwLnd3d25ldy5ldQ==',
                        'bXljbGVhbmluYm94Lm5ldA==',
                        'bXlwYXJ0eWNsaXAuZGU=',
                        'bXlwaGFudG9tZW1haWwuY29t',
                        'bXlzcGFjZWluYy5jb20=',
                        'bXlzcGFjZWluYy5uZXQ=',
                        'bXlzcGFjZWluYy5vcmc=',
                        'bXlzcGFjZXBpbXBlZHVwLmNvbQ==',
                        'bXlzcGFtbGVzcy5jb20=',
                        'bXl0cmFzaG1haWwuY29t',
                        'bmVvbWFpbGJveC5jb20=',
                        'bmVwd2suY29t',
                        'bmVydm1pY2gubmV0',
                        'bmVydnRtaWNoLm5ldA==',
                        'bmV0bWFpbHMuY29t',
                        'bmV0bWFpbHMubmV0',
                        'bmV0emlkaW90LmRl',
                        'bmV2ZXJib3guY29t',
                        'bm8tc3BhbS53cw==',
                        'bm9idWxrLmNvbQ==',
                        'bm9jbGlja2VtYWlsLmNvbQ==',
                        'bm9nbWFpbHNwYW0uaW5mbw==',
                        'bm9tYWlsLnhsLmN4',
                        'bm9tYWlsMm1lLmNvbQ==',
                        'bm9tb3Jlc3BhbWVtYWlscy5jb20=',
                        'bm9zcGFtLnplLnRj',
                        'bm9zcGFtNC51cw==',
                        'bm9zcGFtZm9yLnVz',
                        'bm9zcGFtdGhhbmtzLmluZm8=',
                        'bm90bWFpbGluYXRvci5jb20=',
                        'bm93bXltYWlsLmNvbQ==',
                        'bnVyZnVlcnNwYW0uZGU=',
                        'bnVzLmVkdS5zZw==',
                        'bndsZHguY29t',
                        'b2JqZWN0bWFpbC5jb20=',
                        'b2JvYmJvLmNvbQ==',
                        'b25lb2ZmZW1haWwuY29t',
                        'b25ld2F5bWFpbC5jb20=',
                        'b25saW5lLm1z',
                        'b29waS5vcmc=',
                        'b3JkaW5hcnlhbWVyaWNhbi5uZXQ=',
                        'b3RoZXJpbmJveC5jb20=',
                        'b3Vya2xpcHMuY29t',
                        'b3V0bGF3c3BhbS5jb20=',
                        'b3Zwbi50bw==',
                        'b3dscGljLmNvbQ==',
                        'cGFuY2FrZW1haWwuY29t',
                        'cGltcGVkdXBteXNwYWNlLmNvbQ==',
                        'cGpqa3AuY29t',
                        'cG9saXRpa2VyY2x1Yi5kZQ==',
                        'cG9vZnkub3Jn',
                        'cG9va21haWwuY29t',
                        'cHJpdmFjeS5uZXQ=',
                        'cHJveHltYWlsLmV1',
                        'cHJ0bnguY29t',
                        'cHVua2Fzcy5jb20=',
                        'UHV0VGhpc0luWW91clNwYW1EYXRhYmFzZS5jb20=',
                        'cXEuY29t',
                        'cXVpY2tpbmJveC5jb20=',
                        'cmNwdC5hdA==',
                        'cmVjb2RlLm1l',
                        'cmVjdXJzb3IubmV0',
                        'cmVnYnlwYXNzLmNvbQ==',
                        'cmVnYnlwYXNzLmNvbXNhZmUtbWFpbC5uZXQ=',
                        'cmVqZWN0bWFpbC5jb20=',
                        'cmtsaXBzLmNvbQ==',
                        'cm1xa3IubmV0',
                        'cnBwa24uY29t',
                        'cnRydHIuY29t',
                        'czBueS5uZXQ=',
                        'c2FmZS1tYWlsLm5ldA==',
                        'c2FmZXJzaWdudXAuZGU=',
                        'c2FmZXR5bWFpbC5pbmZv',
                        'c2FmZXR5cG9zdC5kZQ==',
                        'c2FuZGVsZi5kZQ==',
                        'c2F5bm90b3NwYW1zLmNvbQ==',
                        'c2VsZmRlc3RydWN0aW5nbWFpbC5jb20=',
                        'U2VuZFNwYW1IZXJlLmNvbQ==',
                        'c2hhcmtsYXNlcnMuY29t',
                        'c2hpZnRtYWlsLmNvbQ==',
                        'c2hpdG1haWwubWU=',
                        'c2hvcnRtYWlsLm5ldA==',
                        'c2libWFpbC5jb20=',
                        'c2tlZWZtYWlsLmNvbQ==',
                        'c2xhc2twb3N0LnNl',
                        'c2xvcHNib3guY29t',
                        'c21lbGxmZWFyLmNvbQ==',
                        'c25ha2VtYWlsLmNvbQ==',
                        'c25lYWtlbWFpbC5jb20=',
                        'c29maW1haWwuY29t',
                        'c29mb3J0LW1haWwuZGU=',
                        'c29nZXR0aGlzLmNvbQ==',
                        'c29vZG9uaW1zLmNvbQ==',
                        'c3BhbS5sYQ==',
                        'c3BhbS5zdQ==',
                        'c3BhbWF2ZXJ0LmNvbQ==',
                        'c3BhbWJvYi5jb20=',
                        'c3BhbWJvYi5uZXQ=',
                        'c3BhbWJvYi5vcmc=',
                        'c3BhbWJvZy5jb20=',
                        'c3BhbWJvZy5kZQ==',
                        'c3BhbWJvZy5ydQ==',
                        'c3BhbWJveC5pbmZv',
                        'c3BhbWJveC5pcmlzaHNwcmluZ3JlYWx0eS5jb20=',
                        'c3BhbWJveC51cw==',
                        'c3BhbWNhbm5vbi5jb20=',
                        'c3BhbWNhbm5vbi5uZXQ=',
                        'c3BhbWNlcm8uY29t',
                        'c3BhbWNvbi5vcmc=',
                        'c3BhbWNvcnB0YXN0aWMuY29t',
                        'c3BhbWNvd2JveS5jb20=',
                        'c3BhbWNvd2JveS5uZXQ=',
                        'c3BhbWNvd2JveS5vcmc=',
                        'c3BhbWRheS5jb20=',
                        'c3BhbWV4LmNvbQ==',
                        'c3BhbWZyZWUyNC5jb20=',
                        'c3BhbWZyZWUyNC5kZQ==',
                        'c3BhbWZyZWUyNC5ldQ==',
                        'c3BhbWZyZWUyNC5pbmZv',
                        'c3BhbWZyZWUyNC5uZXQ=',
                        'c3BhbWZyZWUyNC5vcmc=',
                        'c3BhbWdvdXJtZXQuY29t',
                        'c3BhbWdvdXJtZXQubmV0',
                        'c3BhbWdvdXJtZXQub3Jn',
                        'U3BhbUhlcmVMb3RzLmNvbQ==',
                        'U3BhbUhlcmVQbGVhc2UuY29t',
                        'c3BhbWhvbGUuY29t',
                        'c3BhbWlmeS5jb20=',
                        'c3BhbWluYXRvci5kZQ==',
                        'c3BhbWtpbGwuaW5mbw==',
                        'c3BhbWwuY29t',
                        'c3BhbWwuZGU=',
                        'c3BhbW1vdGVsLmNvbQ==',
                        'c3BhbW9ib3guY29t',
                        'c3BhbW9mZi5kZQ==',
                        'c3BhbXNsaWNlci5jb20=',
                        'c3BhbXNwb3QuY29t',
                        'c3BhbXRoaXMuY28udWs=',
                        'c3BhbXRoaXNwbGVhc2UuY29t',
                        'c3BhbXRyYWlsLmNvbQ==',
                        'c3BlZWQuMXMuZnI=',
                        'c3VwZXJncmVhdG1haWwuY29t',
                        'c3VwZXJtYWlsZXIuanA=',
                        'c3VyZW1haWwuaW5mbw==',
                        'dGVld2Fycy5vcmc=',
                        'dGVsZXdvcm0uY29t',
                        'dGVtcGFsaWFzLmNvbQ==',
                        'dGVtcGUtbWFpbC5jb20=',
                        'dGVtcGVtYWlsLmJpeg==',
                        'dGVtcGVtYWlsLmNvbQ==',
                        'VGVtcEVNYWlsLm5ldA==',
                        'dGVtcGluYm94LmNvLnVr',
                        'dGVtcGluYm94LmNvbQ==',
                        'dGVtcG1haWwuaXQ=',
                        'dGVtcG1haWwyLmNvbQ==',
                        'dGVtcG9tYWlsLmZy',
                        'dGVtcG9yYXJpbHkuZGU=',
                        'dGVtcG9yYXJpb2VtYWlsLmNvbS5icg==',
                        'dGVtcG9yYXJ5ZW1haWwubmV0',
                        'dGVtcG9yYXJ5Zm9yd2FyZGluZy5jb20=',
                        'dGVtcG9yYXJ5aW5ib3guY29t',
                        'dGhhbmtzbm9zcGFtLmluZm8=',
                        'dGhhbmt5b3UyMDEwLmNvbQ==',
                        'dGhpc2lzbm90bXlyZWFsZW1haWwuY29t',
                        'dGhyb3dhd2F5ZW1haWxhZGRyZXNzLmNvbQ==',
                        'dGlsaWVuLmNvbQ==',
                        'dG1haWxpbmF0b3IuY29t',
                        'dHJhZGVybWFpbC5pbmZv',
                        'dHJhc2gtYW1pbC5jb20=',
                        'dHJhc2gtbWFpbC5hdA==',
                        'dHJhc2gtbWFpbC5jb20=',
                        'dHJhc2gtbWFpbC5kZQ==',
                        'dHJhc2gyMDA5LmNvbQ==',
                        'dHJhc2hlbWFpbC5kZQ==',
                        'dHJhc2htYWlsLmF0',
                        'dHJhc2htYWlsLmNvbQ==',
                        'dHJhc2htYWlsLmRl',
                        'dHJhc2htYWlsLm1l',
                        'dHJhc2htYWlsLm5ldA==',
                        'dHJhc2htYWlsLm9yZw==',
                        'dHJhc2htYWlsLndz',
                        'dHJhc2htYWlsZXIuY29t',
                        'dHJhc2h5bWFpbC5jb20=',
                        'dHJhc2h5bWFpbC5uZXQ=',
                        'dHJpbGxpYW5wcm8uY29t',
                        'dHVydWFsLmNvbQ==',
                        'dHdpbm1haWwuZGU=',
                        'dHlsZGQuY29t',
                        'dWdnc3JvY2suY29t',
                        'dXBsaWZ0bm93LmNvbQ==',
                        'dXBsaXBodC5jb20=',
                        'dmVub21wZW4uY29t',
                        'dmVyeXJlYWxlbWFpbC5jb20=',
                        'dmlkaXRhZy5jb20=',
                        'dmlld2Nhc3RtZWRpYS5jb20=',
                        'dmlld2Nhc3RtZWRpYS5uZXQ=',
                        'dmlld2Nhc3RtZWRpYS5vcmc=',
                        'd2VibTRpbC5pbmZv',
                        'd2Vnd2VyZmFkcmVzc2UuZGU=',
                        'd2Vnd2VyZmVtYWlsLmRl',
                        'd2Vnd2VyZm1haWwuZGU=',
                        'd2Vnd2VyZm1haWwubmV0',
                        'd2Vnd2VyZm1haWwub3Jn',
                        'd2V0cmFpbmJheWFyZWEuY29t',
                        'd2V0cmFpbmJheWFyZWEub3Jn',
                        'd2g0Zi5vcmc=',
                        'd2h5c3BhbS5tZQ==',
                        'd2lsbHNlbGZkZXN0cnVjdC5jb20=',
                        'd2luZW1hdmVuLmluZm8=',
                        'd3JvbmdoZWFkLmNvbQ==',
                        'd3V6dXAubmV0',
                        'd3V6dXBtYWlsLm5ldA==',
                        'd3d3LmU0d2FyZC5jb20=',
                        'd3d3Lmdpc2hwdXBweS5jb20=',
                        'd3d3Lm1haWxpbmF0b3IuY29t',
                        'd3d3bmV3LmV1',
                        'eGFnbG9vLmNvbQ==',
                        'eGVtYXBzLmNvbQ==',
                        'eGVudHMuY29t',
                        'eG1haWx5LmNvbQ==',
                        'eG94eS5uZXQ=',
                        'eWVwLml0',
                        'eW9nYW1hdmVuLmNvbQ==',
                        'eW9wbWFpbC5jb20=',
                        'eW9wbWFpbC5mcg==',
                        'eW9wbWFpbC5uZXQ=',
                        'eXBtYWlsLndlYmFybmFrLmZyLmV1Lm9yZw==',
                        'eXV1cm9rLmNvbQ==',
                        'emVobm1pbnV0ZW5tYWlsLmRl',
                        'emlwcHltYWlsLmluZm8=',
                        'em9heGUuY29t',
                        'em9lbWFpbC5vcmc='
                    ];
                m.tfaEid = {
                    initialized: !1,
                    eids: [],
                    getEids: function W() {
                        return b._trcIsUTactive ? this.eids : null;
                    },
                    resetEids: function W() {
                        b._trcIsUTactive && (this.eids = []);
                    },
                    crawlEids: function c() {
                        if (b._tfa.sha256) {
                            for (var Z = W.getElementsByTagName('input'), d = 0; d < Z.length; d++) {
                                var a = Z[d];
                                t(a) && (this.collectEidFromPage(a), a.addEventListener('blur', function (b) {
                                    m.tfaEid.logEid(this.value);
                                }));
                            }
                            this.sendFromEidListToTrc();
                        }
                    },
                    collectEidFromPage: function W(m) {
                        if ((this.safeGetTfaConfig('tfa:collect-eid-from-page', !1) || this.safeGetRboxConfig('rbox:collect-eid-from-page')) && m && m.value && c(m.value) && b._tfa.sha256) {
                            var t = m.value.toLowerCase();
                            eidHash = b._tfa.sha256.create().update(t).toString(), this.storeEid(eidHash);
                        }
                    },
                    storeEid: function b(W) {
                        return -1 === this.eids.indexOf(W) && (this.eids.push(W), !0);
                    },
                    sendFromEidListToTrc: function b() {
                        (this.safeGetTfaConfig('tfa:collect-eid-from-page', !1) || this.safeGetRboxConfig('rbox:collect-eid-from-page')) && this.eids && 1 === this.eids.length && this.sendEidToTrc(this.eids[0]);
                    },
                    logEid: function W(m) {
                        var t;
                        if (m = m.toLowerCase(), c(m) && b._tfa.sha256 && (t = b._tfa.sha256.create().update(m).toString(), this.storeEid(t))) {
                            var Z = this.eidDecodedTrace(m);
                            this.sendEidToTrc(t, Z);
                        }
                    },
                    eidDecodedTrace: function W(m) {
                        var t = null;
                        return (this.safeGetTfaConfig('eid:send-eid-encoded', !0) || this.safeGetRboxConfig('eid:send-eid-encoded')) && this.shouldSendTrace() && (t = b.btoa ? b.btoa(m) : null), t;
                    },
                    shouldSendTrace: function b() {
                        return 4444 === Math.floor(10000 * Math.random());
                    },
                    getUserId: function b() {
                        var W = m.tfaUserId ? m.tfaUserId.getUserId() : null, t = m.pageManager ? m.pageManager.getUserId() : null;
                        return W || t;
                    },
                    sendEidToTrc: function b(W, m) {
                        var t, c = this.getProtocol(), Z = [], l = this.getUserId();
                        if (W && l)
                            return this.safeAddParam('uils', l, Z), this.safeAddParam(d, W, Z), m && this.safeAddParam(a, m, Z), t = new Image(), (this.safeGetTfaConfig('tfa:add-referrer-policy-when-firing-pixel', !0) || this.safeGetRboxConfig('rbox:add-referrer-policy-when-firing-pixel')) && (t.referrerPolicy = 'no-referrer-when-downgrade'), t.src = c + '//trc.taboola.com/sg/tfa-eid/1/um/?' + Z.join('&'), t;
                    },
                    safeAddParam: function b(W, m, t) {
                        var c, Z;
                        t && m && W && (c = encodeURIComponent(W), Z = encodeURIComponent(m), t.push(c + '=' + Z));
                    },
                    safeGetTfaConfig: function W(m, t) {
                        return b._tfa && b._tfa.config && 'function' == typeof b._tfa.config.safeGet ? b._tfa.config.safeGet(m, t) : null;
                    },
                    safeGetRboxConfig: function b(W) {
                        var m;
                        return (TRCImpl ? TRCImpl.global : {})[W];
                    },
                    getProtocol: function b() {
                        return l;
                    },
                    init: function m() {
                        this.initialized || ('complete' === W.readyState ? this.crawlEids() : b.addEventListener('load', this.crawlEids.bind(this)), this.initialized = !0);
                    }
                }, m.tfaEid.init();
            } catch (b) {
            }
        }(window, document, window['TFASC'.indexOf('{jsScope}') >= 0 ? 'TRC' : 'TFASC']);
    }())
}