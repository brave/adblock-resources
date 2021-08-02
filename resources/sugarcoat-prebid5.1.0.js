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
        !function (u) {
            var s = window.pbjsChunk;
            window.pbjsChunk = function (e, t, n) {
                for (var r, i, o, a = 0, c = []; a < e.length; a++)
                    i = e[a], d[i] && c.push(d[i][0]), d[i] = 0;
                for (r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (u[r] = t[r]);
                for (s && s(e, t, n); c.length;)
                    c.shift()();
                if (n)
                    for (a = 0; a < n.length; a++)
                        o = f(f.s = n[a]);
                return o;
            };
            var n = {}, d = { 283: 0 };
            function f(e) {
                if (n[e])
                    return n[e].exports;
                var t = n[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return u[e].call(t.exports, t, t.exports, f), t.l = !0, t.exports;
            }
            f.m = u, f.c = n, f.d = function (e, t, n) {
                f.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                });
            }, f.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default;
                } : function () {
                    return e;
                };
                return f.d(t, 'a', t), t;
            }, f.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, f.p = '', f.oe = function (e) {
                throw console.error(e), e;
            }, f(f.s = 745);
        }({
            0: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'internal', function () {
                    return R;
                }), t.getPrebidInternal = function () {
                    return D;
                }, n.d(t, 'bind', function () {
                    return P;
                }), t.getUniqueIdentifierStr = q, t.generateUUID = function e(t) {
                    return t ? (t ^ G() >> t / 4).toString(16) : ([10000000] + -1000 + -4000 + -8000 + -100000000000).replace(/[018]/g, e);
                }, t.getBidIdParameter = function (e, t) {
                    if (t && t[e])
                        return t[e];
                    return '';
                }, t.tryAppendQueryString = function (e, t, n) {
                    if (n)
                        return e + t + '=' + encodeURIComponent(n) + '&';
                    return e;
                }, t.parseQueryStringParameters = function (e) {
                    var t = '';
                    for (var n in e)
                        e.hasOwnProperty(n) && (t += n + '=' + encodeURIComponent(e[n]) + '&');
                    return t = t.replace(/&$/, '');
                }, t.transformAdServerTargetingObj = function (t) {
                    return t && 0 < Object.getOwnPropertyNames(t).length ? ge(t).map(function (e) {
                        return ''.concat(e, '=').concat(encodeURIComponent(t[e]));
                    }).join('&') : '';
                }, t.getAdUnitSizes = function (e) {
                    if (!e)
                        return;
                    var t = [];
                    {
                        var n;
                        e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes) ? (n = e.mediaTypes.banner.sizes, Array.isArray(n[0]) ? t = n : t.push(n)) : Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? t = e.sizes : t.push(e.sizes));
                    }
                    return t;
                }, t.parseSizesInput = function (e) {
                    var t = [];
                    if ('string' == typeof e) {
                        var n = e.split(','), r = /^(\d)+x(\d)+$/i;
                        if (n)
                            for (var i in n)
                                ae(n, i) && n[i].match(r) && t.push(n[i]);
                    } else if ('object' === h(e)) {
                        var o = e.length;
                        if (0 < o)
                            if (2 === o && 'number' == typeof e[0] && 'number' == typeof e[1])
                                t.push(W(e));
                            else
                                for (var a = 0; a < o; a++)
                                    t.push(W(e[a]));
                    }
                    return t;
                }, t.parseGPTSingleSizeArray = W, t.parseGPTSingleSizeArrayToRtbSize = function (e) {
                    if (L(e))
                        return {
                            w: e[0],
                            h: e[1]
                        };
                }, t.getWindowTop = F, t.getWindowSelf = z, t.getWindowLocation = V, t.logMessage = H, t.logInfo = K, t.logWarn = J, t.logError = Y, t.hasConsoleLogger = function () {
                    return w;
                }, t.debugTurnedOn = $, t.createInvisibleIframe = function () {
                    var e = document.createElement('iframe');
                    return e.id = q(), e.height = 0, e.width = 0, e.border = '0px', e.hspace = '0', e.vspace = '0', e.marginWidth = '0', e.marginHeight = '0', e.style.border = '0', e.scrolling = 'no', e.frameBorder = '0', e.src = 'about:blank', e.style.display = 'none', e;
                }, t.getParameterByName = function (e) {
                    return Ce(V().search)[e] || '';
                }, t.isA = X, t.isFn = Z, t.isStr = ee, t.isArray = te, t.isNumber = ne, t.isPlainObject = re, t.isBoolean = function (e) {
                    return X(e, I);
                }, t.isEmpty = ie, t.isEmptyStr = function (e) {
                    return ee(e) && (!e || 0 === e.length);
                }, t._each = oe, t.contains = function (e, t) {
                    if (ie(e))
                        return !1;
                    if (Z(e.indexOf))
                        return -1 !== e.indexOf(t);
                    var n = e.length;
                    for (; n--;)
                        if (e[n] === t)
                            return !0;
                    return !1;
                }, t._map = function (n, r) {
                    if (ie(n))
                        return [];
                    if (Z(n.map))
                        return n.map(r);
                    var i = [];
                    return oe(n, function (e, t) {
                        i.push(r(e, t, n));
                    }), i;
                }, t.hasOwn = ae, t.insertElement = ce, t.triggerPixel = ue, t.callBurl = function (e) {
                    var t = e.source, n = e.burl;
                    t === m.S2S.SRC && n && R.triggerPixel(n);
                }, t.insertHtmlIntoIframe = function (e) {
                    if (!e)
                        return;
                    var t = document.createElement('iframe');
                    t.id = q(), t.width = 0, t.height = 0, t.hspace = '0', t.vspace = '0', t.marginWidth = '0', t.marginHeight = '0', t.style.display = 'none', t.style.height = '0px', t.style.width = '0px', t.scrolling = 'no', t.frameBorder = '0', t.allowtransparency = 'true', R.insertElement(t, document, 'body'), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close();
                }, t.insertUserSyncIframe = se, t.createTrackPixelHtml = function (e) {
                    if (!e)
                        return '';
                    var t = encodeURI(e), n = '<div style="position:absolute;left:0px;top:0px;visibility:hidden;">';
                    return n += '<img src="' + t + '"></div>';
                }, t.createTrackPixelIframeHtml = de, t.getValueString = fe, t.uniques = le, t.flatten = pe, t.getBidRequest = function (n, e) {
                    return n ? (e.some(function (e) {
                        var t = c()(e.bids, function (t) {
                            return [
                                'bidId',
                                'adId',
                                'bid_id'
                            ].some(function (e) {
                                return t[e] === n;
                            });
                        });
                        return t && (r = t), t;
                    }), r) : void 0;
                    var r;
                }, t.getKeys = ge, t.getValue = be, t.getKeyByValue = function (e, t) {
                    for (var n in e)
                        if (e.hasOwnProperty(n) && e[n] === t)
                            return n;
                }, t.getBidderCodes = function () {
                    return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjs.adUnits).map(function (e) {
                        return e.bids.map(function (e) {
                            return e.bidder;
                        }).reduce(pe, []);
                    }).reduce(pe).filter(le);
                }, t.isGptPubadsDefined = ve, n.d(t, 'getHighestCpm', function () {
                    return ye;
                }), n.d(t, 'getOldestHighestCpmBid', function () {
                    return he;
                }), n.d(t, 'getLatestHighestCpmBid', function () {
                    return me;
                }), t.shuffle = function (e) {
                    var t = e.length;
                    for (; 0 < t;) {
                        var n = Math.floor(Math.random() * t), r = e[--t];
                        e[t] = e[n], e[n] = r;
                    }
                    return e;
                }, t.adUnitsFilter = function (e, t) {
                    return s()(e, t && t.adUnitCode);
                }, t.deepClone = Ae, t.inIframe = function () {
                    try {
                        return R.getWindowSelf() !== R.getWindowTop();
                    } catch (e) {
                        return !0;
                    }
                }, t.isSafariBrowser = function () {
                    return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);
                }, t.replaceAuctionPrice = function (e, t) {
                    if (!e)
                        return;
                    return e.replace(/\$\{AUCTION_PRICE\}/g, t);
                }, t.replaceClickThrough = function (e, t) {
                    if (!e || !t || 'string' != typeof t)
                        return;
                    return e.replace(/\${CLICKTHROUGH}/g, t);
                }, t.timestamp = function () {
                    return new Date().getTime();
                }, t.getPerformanceNow = function () {
                    return window.performance && window.performance.now && window.performance.now() || 0;
                }, t.hasDeviceAccess = function () {
                    return !1 !== i.b.getConfig('deviceAccess');
                }, t.checkCookieSupport = Ee, t.delayExecution = function (e, t) {
                    if (t < 1)
                        throw new Error('numRequiredCalls must be a positive number. Got '.concat(t));
                    var n = 0;
                    return function () {
                        ++n === t && e.apply(this, arguments);
                    };
                }, t.groupBy = function (e, n) {
                    return e.reduce(function (e, t) {
                        return (e[t[n]] = e[t[n]] || []).push(t), e;
                    }, {});
                }, t.getDefinedParams = function (n, e) {
                    return e.filter(function (e) {
                        return n[e];
                    }).reduce(function (e, t) {
                        return y(e, v({}, t, n[t]));
                    }, {});
                }, t.isValidMediaTypes = function (e) {
                    var t = [
                        'banner',
                        'native',
                        'video'
                    ];
                    if (!Object.keys(e).every(function (e) {
                            return s()(t, e);
                        }))
                        return !1;
                    if (e.video && e.video.context)
                        return s()([
                            'instream',
                            'outstream',
                            'adpod'
                        ], e.video.context);
                    return !0;
                }, t.getBidderRequest = function (e, t, n) {
                    return c()(e, function (e) {
                        return 0 < e.bids.filter(function (e) {
                            return e.bidder === t && e.adUnitCode === n;
                        }).length;
                    }) || {
                        start: null,
                        auctionId: null
                    };
                }, t.getUserConfiguredParams = function (e, t, n) {
                    return e.filter(function (e) {
                        return e.code === t;
                    }).map(function (e) {
                        return e.bids;
                    }).reduce(pe, []).filter(function (e) {
                        return e.bidder === n;
                    }).map(function (e) {
                        return e.params || {};
                    });
                }, t.getOrigin = function () {
                    return window.location.origin ? window.location.origin : window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
                }, t.getDNT = function () {
                    return '1' === navigator.doNotTrack || '1' === window.doNotTrack || '1' === navigator.msDoNotTrack || 'yes' === navigator.doNotTrack;
                }, t.isAdUnitCodeMatchingSlot = function (t) {
                    return function (e) {
                        return Oe(t, e);
                    };
                }, t.isSlotMatchingAdUnitCode = Te, t.getGptSlotInfoForAdUnitCode = function (e) {
                    var t;
                    ve() && (t = c()(window.googletag.pubads().getSlots(), Te(e)));
                    if (t)
                        return {
                            gptSlot: t.getAdUnitPath(),
                            divId: t.getSlotElementId()
                        };
                    return {};
                }, t.unsupportedBidderMessage = function (e, t) {
                    var n = Object.keys(e.mediaTypes || { banner: 'banner' }).join(', ');
                    return '\n    '.concat(e.code, ' is a ').concat(n, ' ad unit\n    containing bidders that don\'t support ').concat(n, ': ').concat(t, '.\n    This bidder won\'t fetch demand.\n  ');
                }, t.isInteger = Ie, t.convertCamelToUnderscore = function (e) {
                    return e.replace(/(?:^|\.?)([A-Z])/g, function (e, t) {
                        return '_' + t.toLowerCase();
                    }).replace(/^_/, '');
                }, t.cleanObj = function (n) {
                    return Object.keys(n).reduce(function (e, t) {
                        return void 0 !== n[t] && (e[t] = n[t]), e;
                    }, {});
                }, t.pick = function (a, c) {
                    return 'object' === h(a) ? c.reduce(function (e, t, n) {
                        if ('function' == typeof t)
                            return e;
                        var r = t, i = t.match(/^(.+?)\sas\s(.+?)$/i);
                        i && (t = i[1], r = i[2]);
                        var o = a[t];
                        return 'function' == typeof c[n + 1] && (o = c[n + 1](o, e)), void 0 !== o && (e[r] = o), e;
                    }, {}) : {};
                }, t.transformBidderParamKeywords = function (e) {
                    var r = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 'keywords', i = [];
                    return oe(e, function (e, t) {
                        if (te(e)) {
                            var n = [];
                            oe(e, function (e) {
                                !(e = fe(r + '.' + t, e)) && '' !== e || n.push(e);
                            }), e = n;
                        } else {
                            if (!ee(e = fe(r + '.' + t, e)))
                                return;
                            e = [e];
                        }
                        i.push({
                            key: t,
                            value: e
                        });
                    }), i;
                }, t.convertTypes = function (r, i) {
                    return Object.keys(r).forEach(function (e) {
                        var t, n;
                        i[e] && (Z(r[e]) ? i[e] = r[e](i[e]) : i[e] = (t = r[e], n = i[e], 'string' === t ? n && n.toString() : 'number' === t ? Number(n) : n), isNaN(i[e]) && delete i.key);
                    }), i;
                }, t.isArrayOfNums = function (e, t) {
                    return te(e) && (!t || e.length === t) && e.every(Ie);
                }, t.fill = function (e, t) {
                    for (var n = [], r = 0; r < t; r++) {
                        var i = re(e) ? Ae(e) : e;
                        n.push(i);
                    }
                    return n;
                }, t.chunk = function (e, t) {
                    for (var n = [], r = 0; r < Math.ceil(e.length / t); r++) {
                        var i = r * t, o = i + t;
                        n.push(e.slice(i, o));
                    }
                    return n;
                }, t.getMinValueFromArray = function (e) {
                    return Math.min.apply(Math, p(e));
                }, t.getMaxValueFromArray = function (e) {
                    return Math.max.apply(Math, p(e));
                }, t.compareOn = function (n) {
                    return function (e, t) {
                        return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0;
                    };
                }, t.parseQS = Ce, t.formatQS = je, t.parseUrl = function (e, t) {
                    var n = document.createElement('a');
                    t && 'noDecodeWholeURL' in t && t.noDecodeWholeURL ? n.href = e : n.href = decodeURIComponent(e);
                    var r = t && 'decodeSearchAsString' in t && t.decodeSearchAsString;
                    return {
                        href: n.href,
                        protocol: (n.protocol || '').replace(/:$/, ''),
                        hostname: n.hostname,
                        port: +n.port,
                        pathname: n.pathname.replace(/^(?!\/)/, '/'),
                        search: r ? n.search : R.parseQS(n.search || ''),
                        hash: (n.hash || '').replace(/^#/, ''),
                        host: n.host || window.location.host
                    };
                }, t.buildUrl = function (e) {
                    return (e.protocol || 'http') + '://' + (e.host || e.hostname + (e.port ? ':'.concat(e.port) : '')) + (e.pathname || '') + (e.search ? '?'.concat(R.formatQS(e.search || '')) : '') + (e.hash ? '#'.concat(e.hash) : '');
                }, t.deepEqual = we, t.mergeDeep = _e, t.cyrb53Hash = function (e) {
                    for (var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = function (e, t) {
                                if (Z(Math.imul))
                                    return Math.imul(e, t);
                                var n = (4194303 & e) * (t |= 0);
                                return 4290772992 & e && (n += (4290772992 & e) * t | 0), 0 | n;
                            }, i = 3735928559 ^ n, o = 1103547991 ^ n, a = 0; a < e.length; a++)
                        t = e.charCodeAt(a), i = r(i ^ t, 2654435761), o = r(o ^ t, 1597334677);
                    return i = r(i ^ i >>> 16, 2246822507) ^ r(o ^ o >>> 13, 3266489909), (4294967296 * (2097151 & (o = r(o ^ o >>> 16, 2246822507) ^ r(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString();
                };
                var i = n(3), r = n(162), o = n.n(r), a = n(11), c = n.n(a), u = n(12), s = n.n(u), d = n(163);
                n.d(t, 'deepAccess', function () {
                    return d.a;
                });
                var f = n(164);
                function l(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var n = [], r = !0, i = !1, o = void 0;
                        try {
                            for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e;
                        } finally {
                            try {
                                r || null == c.return || c.return();
                            } finally {
                                if (i)
                                    throw o;
                            }
                        }
                        return n;
                    }(e, t) || g(e, t) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function p(e) {
                    return function (e) {
                        if (Array.isArray(e))
                            return b(e);
                    }(e) || function (e) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                            return Array.from(e);
                    }(e) || g(e) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function g(e, t) {
                    if (e) {
                        if ('string' == typeof e)
                            return b(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return 'Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? b(e, t) : void 0;
                    }
                }
                function b(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                function v(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                function y() {
                    return (y = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function h(e) {
                    return (h = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                n.d(t, 'deepSetValue', function () {
                    return f.a;
                });
                var m = n(5), S = 'Array', A = 'String', E = 'Function', O = 'Number', T = 'Object', I = 'Boolean', C = Object.prototype.toString, j = Boolean(window.console), w = Boolean(j && window.console.log), _ = Boolean(j && window.console.info), B = Boolean(j && window.console.warn), U = Boolean(j && window.console.error), x = n(8), R = {
                        checkCookieSupport: Ee,
                        createTrackPixelIframeHtml: de,
                        getWindowSelf: z,
                        getWindowTop: F,
                        getWindowLocation: V,
                        insertUserSyncIframe: se,
                        insertElement: ce,
                        isFn: Z,
                        triggerPixel: ue,
                        logError: Y,
                        logWarn: J,
                        logMessage: H,
                        logInfo: K,
                        parseQS: Ce,
                        formatQS: je,
                        deepEqual: we
                    }, D = {};
                var k, N = {}, P = function (e, t) {
                        return t;
                    }.bind(null, 1, N)() === N ? Function.prototype.bind : function (e) {
                        var t = this, n = Array.prototype.slice.call(arguments, 1);
                        return function () {
                            return t.apply(e, n.concat(Array.prototype.slice.call(arguments)));
                        };
                    }, M = (k = 0, function () {
                        return ++k;
                    });
                function q() {
                    return M() + Math.random().toString(16).substr(2);
                }
                function G() {
                    return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random();
                }
                function W(e) {
                    if (L(e))
                        return e[0] + 'x' + e[1];
                }
                function L(e) {
                    return te(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
                }
                function F() {
                    return window.top;
                }
                function z() {
                    return window.self;
                }
                function V() {
                    return window.location;
                }
                function H() {
                    $() && w && console.log.apply(console, Q(arguments, 'MESSAGE:'));
                }
                function K() {
                    $() && _ && console.info.apply(console, Q(arguments, 'INFO:'));
                }
                function J() {
                    $() && B && console.warn.apply(console, Q(arguments, 'WARNING:')), x.emit(m.EVENTS.AUCTION_DEBUG, {
                        type: 'WARNING',
                        arguments: arguments
                    });
                }
                function Y() {
                    $() && U && console.error.apply(console, Q(arguments, 'ERROR:')), x.emit(m.EVENTS.AUCTION_DEBUG, {
                        type: 'ERROR',
                        arguments: arguments
                    });
                }
                function Q(e, t) {
                    e = [].slice.call(e);
                    var n = i.b.getCurrentBidder();
                    return t && e.unshift(t), n && e.unshift(r('#aaa')), e.unshift(r('#3b88c3')), e.unshift('%cPrebid' + (n ? '%c'.concat(n) : '')), e;
                    function r(e) {
                        return 'display: inline-block; color: #fff; background: '.concat(e, '; padding: 1px 4px; border-radius: 3px;');
                    }
                }
                function $() {
                    return !!i.b.getConfig('debug');
                }
                function X(e, t) {
                    return C.call(e) === '[object ' + t + ']';
                }
                function Z(e) {
                    return X(e, E);
                }
                function ee(e) {
                    return X(e, A);
                }
                function te(e) {
                    return X(e, S);
                }
                function ne(e) {
                    return X(e, O);
                }
                function re(e) {
                    return X(e, T);
                }
                function ie(e) {
                    if (!e)
                        return !0;
                    if (te(e) || ee(e))
                        return !(0 < e.length);
                    for (var t in e)
                        if (hasOwnProperty.call(e, t))
                            return !1;
                    return !0;
                }
                function oe(e, t) {
                    if (!ie(e)) {
                        if (Z(e.forEach))
                            return e.forEach(t, this);
                        var n = 0, r = e.length;
                        if (0 < r)
                            for (; n < r; n++)
                                t(e[n], n, e);
                        else
                            for (n in e)
                                hasOwnProperty.call(e, n) && t.call(this, e[n], n);
                    }
                }
                function ae(e, t) {
                    return e.hasOwnProperty ? e.hasOwnProperty(t) : void 0 !== e[t] && e.constructor.prototype[t] !== e[t];
                }
                function ce(e, t, n, r) {
                    var i;
                    t = t || document, i = n ? t.getElementsByTagName(n) : t.getElementsByTagName('head');
                    try {
                        if ((i = i.length ? i : t.getElementsByTagName('body')).length) {
                            i = i[0];
                            var o = r ? null : i.firstChild;
                            return i.insertBefore(e, o);
                        }
                    } catch (e) {
                    }
                }
                function ue(e, t) {
                    var n = new Image();
                    t && R.isFn(t) && (n.addEventListener('load', t), n.addEventListener('error', t)), n.src = e;
                }
                function se(e, t) {
                    var n = R.createTrackPixelIframeHtml(e, !1, 'allow-scripts allow-same-origin'), r = document.createElement('div');
                    r.innerHTML = n;
                    var i = r.firstChild;
                    t && R.isFn(t) && (i.addEventListener('load', t), i.addEventListener('error', t)), R.insertElement(i, document, 'html', !0);
                }
                function de(e) {
                    var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : '';
                    return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), t = t && 'sandbox="'.concat(t, '"'), '<iframe '.concat(t, ' id="').concat(q(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : '';
                }
                function fe(e, t, n) {
                    return null == t ? n : ee(t) ? t : ne(t) ? t.toString() : void R.logWarn('Unsuported type for param: ' + e + ' required type: String');
                }
                function le(e, t, n) {
                    return n.indexOf(e) === t;
                }
                function pe(e, t) {
                    return e.concat(t);
                }
                function ge(e) {
                    return Object.keys(e);
                }
                function be(e, t) {
                    return e[t];
                }
                function ve() {
                    if (window.googletag && Z(window.googletag.pubads) && Z(window.googletag.pubads().getSlots))
                        return !0;
                }
                var ye = Se('timeToRespond', function (e, t) {
                        return t < e;
                    }), he = Se('responseTimestamp', function (e, t) {
                        return t < e;
                    }), me = Se('responseTimestamp', function (e, t) {
                        return e < t;
                    });
                function Se(n, r) {
                    return function (e, t) {
                        return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e;
                    };
                }
                function Ae(e) {
                    return o()(e);
                }
                function Ee() {
                    if (window.navigator.cookieEnabled || document.cookie.length)
                        return !0;
                }
                var Oe = function (e, t) {
                    return e.getAdUnitPath() === t || e.getSlotElementId() === t;
                };
                function Te(t) {
                    return function (e) {
                        return Oe(e, t);
                    };
                }
                function Ie(e) {
                    return Number.isInteger ? Number.isInteger(e) : 'number' == typeof e && isFinite(e) && Math.floor(e) === e;
                }
                function Ce(e) {
                    return e ? e.replace(/^\?/, '').split('&').reduce(function (e, t) {
                        var n = l(t.split('='), 2), r = n[0], i = n[1];
                        return /\[\]$/.test(r) ? (e[r = r.replace('[]', '')] = e[r] || [], e[r].push(i)) : e[r] = i || '', e;
                    }, {}) : {};
                }
                function je(e) {
                    return Object.keys(e).map(function (t) {
                        return Array.isArray(e[t]) ? e[t].map(function (e) {
                            return ''.concat(t, '[]=').concat(e);
                        }).join('&') : ''.concat(t, '=').concat(e[t]);
                    }).join('&');
                }
                function we(e, t) {
                    if (e === t)
                        return !0;
                    if ('object' !== h(e) || null === e || 'object' !== h(t) || null === t)
                        return !1;
                    if (Object.keys(e).length !== Object.keys(t).length)
                        return !1;
                    for (var n in e) {
                        if (!t.hasOwnProperty(n))
                            return !1;
                        if (!we(e[n], t[n]))
                            return !1;
                    }
                    return !0;
                }
                function _e(e) {
                    for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    if (!n.length)
                        return e;
                    var i = n.shift();
                    if (re(e) && re(i))
                        for (var o in i)
                            re(i[o]) ? (e[o] || y(e, v({}, o, {})), _e(e[o], i[o])) : te(i[o]) && e[o] ? te(e[o]) && (e[o] = e[o].concat(i[o])) : y(e, v({}, o, i[o]));
                    return _e.apply(void 0, [e].concat(n));
                }
            },
            1: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'storage', function () {
                    return I;
                }), t.registerBidder = function (i) {
                    var n = Array.isArray(i.supportedMediaTypes) ? { supportedMediaTypes: i.supportedMediaTypes } : void 0;
                    function o(e) {
                        var t = w(e);
                        c.default.registerBidAdapter(t, e.code, n);
                    }
                    o(i), Array.isArray(i.aliases) && i.aliases.forEach(function (e) {
                        var t, n, r = e;
                        Object(S.isPlainObject)(e) && (r = e.code, t = e.gvlid, n = e.skipPbsAliasing), c.default.aliasRegistry[r] = i.code, o(T({}, i, {
                            code: r,
                            gvlid: t,
                            skipPbsAliasing: n
                        }));
                    });
                }, t.newBidder = w, n.d(t, 'registerSyncInner', function () {
                    return _;
                }), t.preloadBidderMappingFile = B, t.getIabSubCategory = function (t, e) {
                    var n = c.default.getBidAdapter(t);
                    if (n.getSpec().getMappingFileInfo) {
                        var r = n.getSpec().getMappingFileInfo(), i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(), o = I.getDataFromLocalStorage(i);
                        if (o) {
                            try {
                                o = JSON.parse(o);
                            } catch (e) {
                                Object(S.logError)('Failed to parse '.concat(t, ' mapping data stored in local storage'));
                            }
                            return o.mapping[e] ? o.mapping[e] : null;
                        }
                    }
                }, t.isValid = U;
                var r = n(75), c = n(7), v = n(3), y = n(39), u = n(54), o = n(36), a = n(25), i = n(5), h = n.n(i), s = n(8), m = n.n(s), d = n(12), f = n.n(d), l = n(4), S = n(0), p = n(2), g = n(10), b = n(9);
                function A(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var n = [], r = !0, i = !1, o = void 0;
                        try {
                            for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e;
                        } finally {
                            try {
                                r || null == c.return || c.return();
                            } finally {
                                if (i)
                                    throw o;
                            }
                        }
                        return n;
                    }(e, t) || function (e, t) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return E(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n && e.constructor && (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n)
                            return Array.from(e);
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return E(e, t);
                    }(e, t) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function E(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                function O(e) {
                    return (O = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function T() {
                    return (T = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var I = Object(b.a)('bidderFactory'), C = [
                        'requestId',
                        'cpm',
                        'ttl',
                        'creativeId',
                        'netRevenue',
                        'currency'
                    ], j = 1;
                function w(p) {
                    return T(new r.a(p.code), {
                        getSpec: function () {
                            return Object.freeze(p);
                        },
                        registerSyncs: g,
                        callBids: function (o, a, e, n, c, r) {
                            var u, s, t, d, i, f;
                            function l() {
                                e(), v.b.runWithBidder(p.code, function () {
                                    m.a.emit(h.a.EVENTS.BIDDER_DONE, o), g(s, o.gdprConsent, o.uspConsent);
                                });
                            }
                            Array.isArray(o.bids) && (u = {}, s = [], 0 !== (t = o.bids.filter(b)).length ? (d = {}, t.forEach(function (e) {
                                (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode);
                            }), (i = p.buildRequests(t, o)) && 0 !== i.length ? (Array.isArray(i) || (i = [i]), f = Object(S.delayExecution)(r(l), i.length), i.forEach(function (i) {
                                switch (i.method) {
                                case 'GET':
                                    n(''.concat(i.url).concat(function (e) {
                                        if (e)
                                            return '?'.concat('object' === O(e) ? Object(S.parseQueryStringParameters)(e) : e);
                                        return '';
                                    }(i.data)), {
                                        success: r(e),
                                        error: t
                                    }, void 0, T({
                                        method: 'GET',
                                        withCredentials: !0
                                    }, i.options));
                                    break;
                                case 'POST':
                                    n(i.url, {
                                        success: r(e),
                                        error: t
                                    }, 'string' == typeof i.data ? i.data : JSON.stringify(i.data), T({
                                        method: 'POST',
                                        contentType: 'text/plain',
                                        withCredentials: !0
                                    }, i.options));
                                    break;
                                default:
                                    Object(S.logWarn)('Skipping invalid request from '.concat(p.code, '. Request type ').concat(i.type, ' must be GET or POST')), f();
                                }
                                function e(e, t) {
                                    c(p.code);
                                    try {
                                        e = JSON.parse(e);
                                    } catch (e) {
                                    }
                                    var n;
                                    e = {
                                        body: e,
                                        headers: { get: t.getResponseHeader.bind(t) }
                                    }, s.push(e);
                                    try {
                                        n = p.interpretResponse(e, i);
                                    } catch (e) {
                                        return Object(S.logError)('Bidder '.concat(p.code, ' failed to interpret the server\'s response. Continuing without bids'), null, e), void f();
                                    }
                                    function r(e) {
                                        var t, n, r, i = d[e.requestId];
                                        i ? (e.originalCpm = e.cpm, e.originalCurrency = e.currency, e.meta = e.meta || T({}, e[i.bidder]), t = T(Object(y.a)(h.a.STATUS.GOOD, i), e), n = i.adUnitCode, r = t, u[n] = !0, U(n, r, [o]) && a(n, r)) : Object(S.logWarn)('Bidder '.concat(p.code, ' made bid for unknown request ID: ').concat(e.requestId, '. Ignoring.'));
                                    }
                                    n && (Object(S.isArray)(n) ? n.forEach(r) : r(n)), f(n);
                                }
                                function t(e) {
                                    c(p.code), Object(S.logError)('Server call for '.concat(p.code, ' failed: ').concat(e, '. Continuing without bids.')), f();
                                }
                            })) : l()) : l());
                        }
                    });
                    function g(e, t, n) {
                        _(p, e, t, n);
                    }
                    function b(e) {
                        return !!p.isBidRequestValid(e) || (Object(S.logWarn)('Invalid bid sent to bidder '.concat(p.code, ': ').concat(JSON.stringify(e))), !1);
                    }
                }
                var _ = Object(g.b)('async', function (t, e, n, r) {
                    var i, o, a = v.b.getConfig('userSync.aliasSyncEnabled');
                    !t.getUserSyncs || !a && c.default.aliasRegistry[t.code] || (i = v.b.getConfig('userSync.filterSettings'), (o = t.getUserSyncs({
                        iframeEnabled: !(!i || !i.iframe && !i.all),
                        pixelEnabled: !(!i || !i.image && !i.all)
                    }, e, n, r)) && (Array.isArray(o) || (o = [o]), o.forEach(function (e) {
                        u.a.registerSync(e.type, t.code, e.url);
                    })));
                }, 'registerSyncs');
                function B(e, t) {
                    if (!v.b.getConfig('adpod.brandCategoryExclusion'))
                        return e.call(this, t);
                    t.filter(function (e) {
                        return Object(S.deepAccess)(e, 'mediaTypes.video.context') === p.a;
                    }).map(function (e) {
                        return e.bids.map(function (e) {
                            return e.bidder;
                        });
                    }).reduce(S.flatten, []).filter(S.uniques).forEach(function (n) {
                        var e = c.default.getBidAdapter(n);
                        if (e.getSpec().getMappingFileInfo) {
                            var t = e.getSpec().getMappingFileInfo(), r = t.refreshInDays ? t.refreshInDays : j, i = t.localStorageKey ? t.localStorageKey : e.getSpec().code, o = I.getDataFromLocalStorage(i);
                            try {
                                (!(o = o ? JSON.parse(o) : void 0) || Object(S.timestamp)() > o.lastUpdated + 24 * r * 60 * 60 * 1000) && Object(l.a)(t.url, {
                                    success: function (e) {
                                        try {
                                            e = JSON.parse(e);
                                            var t = {
                                                lastUpdated: Object(S.timestamp)(),
                                                mapping: e.mapping
                                            };
                                            I.setDataInLocalStorage(i, JSON.stringify(t));
                                        } catch (e) {
                                            Object(S.logError)('Failed to parse '.concat(n, ' bidder translation mapping file'));
                                        }
                                    },
                                    error: function () {
                                        Object(S.logError)('Failed to load '.concat(n, ' bidder translation file'));
                                    }
                                });
                            } catch (e) {
                                Object(S.logError)('Failed to parse '.concat(n, ' bidder translation mapping file'));
                            }
                        }
                    }), e.call(this, t);
                }
                function U(e, t, n) {
                    function r(e) {
                        return 'Invalid bid from '.concat(t.bidderCode, '. Ignoring bid: ').concat(e);
                    }
                    return e ? t ? (i = Object.keys(t), C.every(function (e) {
                        return f()(i, e) && !f()([
                            void 0,
                            null
                        ], t[e]);
                    }) ? 'native' !== t.mediaType || Object(o.g)(t, n) ? 'video' !== t.mediaType || Object(a.d)(t, n) ? !('banner' === t.mediaType && !function (e, t, n) {
                        if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10)))
                            return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), 1;
                        var r = Object(S.getBidderRequest)(n, t.bidderCode, e), i = r && r.bids && r.bids[0] && r.bids[0].sizes, o = Object(S.parseSizesInput)(i);
                        if (1 === o.length) {
                            var a = A(o[0].split('x'), 2), c = a[0], u = a[1];
                            return t.width = parseInt(c, 10), t.height = parseInt(u, 10), 1;
                        }
                    }(e, t, n)) || (Object(S.logError)(r('Banner bids require a width and height')), !1) : (Object(S.logError)(r('Video bid does not have required vastUrl or renderer property')), !1) : (Object(S.logError)(r('Native bid missing some required properties.')), !1) : (Object(S.logError)(r('Bidder '.concat(t.bidderCode, ' is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.'))), !1)) : (Object(S.logWarn)('Some adapter tried to add an undefined bid for '.concat(e, '.')), !1) : (Object(S.logWarn)('No adUnitCode was supplied to addBidResponse.'), !1);
                    var i;
                }
                Object(g.a)('checkAdUnitSetup').before(B);
            },
            10: function (e, t, n) {
                'use strict';
                n.d(t, 'b', function () {
                    return a;
                }), n.d(t, 'a', function () {
                    return c;
                }), t.d = function (e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 15;
                    0 === e.getHooks({ hook: t }).length && e.before(t, n);
                }, t.c = function (e, n) {
                    a('async', function (e) {
                        e.forEach(function (e) {
                            return n.apply(void 0, function (e) {
                                if (Array.isArray(e))
                                    return o(e);
                            }(t = e) || function (e) {
                                if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                                    return Array.from(e);
                            }(t) || function (e, t) {
                                if (e) {
                                    if ('string' == typeof e)
                                        return o(e, t);
                                    var n = Object.prototype.toString.call(e).slice(8, -1);
                                    return 'Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(e, t) : void 0;
                                }
                            }(t) || function () {
                                throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                            }());
                            var t;
                        });
                    }, e)([]);
                }, t.e = function (e) {
                    for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    c(e).before(function (e, t) {
                        t.push(n), e(t);
                    });
                };
                var r = n(165), i = n.n(r);
                function o(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                var a = i()({ ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE }), c = a.get;
            },
            100: function (e, t, n) {
                n(101);
                var r = n(51);
                e.exports = r('Array', 'find');
            },
            101: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(56).find, o = n(50), a = n(60), c = 'find', u = !0, s = a(c);
                c in [] && Array(1)[c](function () {
                    u = !1;
                }), r({
                    target: 'Array',
                    proto: !0,
                    forced: u || !s
                }, {
                    find: function (e, t) {
                        return i(this, e, 1 < arguments.length ? t : void 0);
                    }
                }), o(c);
            },
            102: function (e, t, n) {
                var r = n(29), i = n(103), o = n(44), a = n(45), c = n(55), u = n(27), s = n(77), d = Object.getOwnPropertyDescriptor;
                t.f = r ? d : function (e, t) {
                    if (e = a(e), t = c(t, !0), s)
                        try {
                            return d(e, t);
                        } catch (e) {
                        }
                    if (u(e, t))
                        return o(!i.f.call(e, t), e[t]);
                };
            },
            103: function (e, t, n) {
                'use strict';
                var r = {}.propertyIsEnumerable, i = Object.getOwnPropertyDescriptor, o = i && !r.call({ 1: 2 }, 1);
                t.f = o ? function (e) {
                    var t = i(this, e);
                    return !!t && t.enumerable;
                } : r;
            },
            104: function (e, t, n) {
                function r(e, t) {
                    var n = c[a(e)];
                    return n == s || n != u && ('function' == typeof t ? i(t) : !!t);
                }
                var i = n(30), o = /#|\.prototype\./, a = r.normalize = function (e) {
                        return String(e).replace(o, '.').toLowerCase();
                    }, c = r.data = {}, u = r.NATIVE = 'N', s = r.POLYFILL = 'P';
                e.exports = r;
            },
            105: function (e, t, n) {
                var r = n(31), i = n(106), o = n(22)('species');
                e.exports = function (e, t) {
                    var n;
                    return i(e) && ('function' == typeof (n = e.constructor) && (n === Array || i(n.prototype)) || r(n) && null === (n = n[o])) && (n = void 0), new (void 0 === n ? Array : n)(0 === t ? 0 : t);
                };
            },
            106: function (e, t, n) {
                var r = n(46);
                e.exports = Array.isArray || function (e) {
                    return 'Array' == r(e);
                };
            },
            107: function (e, t, n) {
                var r = n(26), i = n(32);
                e.exports = function (t, n) {
                    try {
                        i(r, t, n);
                    } catch (e) {
                        r[t] = n;
                    }
                    return n;
                };
            },
            108: function (e, t, n) {
                var r = n(81);
                e.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
            },
            109: function (e, t, n) {
                n(110);
                var r = n(51);
                e.exports = r('Array', 'includes');
            },
            11: function (e, t, n) {
                var r = n(100);
                e.exports = r;
            },
            110: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(82).includes, o = n(50);
                r({
                    target: 'Array',
                    proto: !0,
                    forced: !n(60)('indexOf', {
                        ACCESSORS: !0,
                        1: 0
                    })
                }, {
                    includes: function (e, t) {
                        return i(this, e, 1 < arguments.length ? t : void 0);
                    }
                }), o('includes');
            },
            111: function (e, t, n) {
                var r = n(58), i = Math.max, o = Math.min;
                e.exports = function (e, t) {
                    var n = r(e);
                    return n < 0 ? i(n + t, 0) : o(n, t);
                };
            },
            112: function (e, t, n) {
                n(113), n(130), n(93), n(132);
                var r = n(48);
                e.exports = r.Set;
            },
            113: function (e, t, n) {
                'use strict';
                var r = n(114), i = n(119);
                e.exports = r('Set', function (t) {
                    return function (e) {
                        return t(this, arguments.length ? e : void 0);
                    };
                }, i);
            },
            114: function (e, t, n) {
                'use strict';
                var f = n(14), l = n(26), p = n(84), g = n(30), b = n(32), v = n(18), y = n(87), h = n(31), m = n(64), S = n(34).f, A = n(56).forEach, E = n(29), r = n(53), O = r.set, T = r.getterFor;
                e.exports = function (n, e, t) {
                    var r, a, i = -1 !== n.indexOf('Map'), c = -1 !== n.indexOf('Weak'), o = i ? 'set' : 'add', u = l[n], s = u && u.prototype, d = {};
                    return E && 'function' == typeof u && (c || s.forEach && !g(function () {
                        new u().entries().next();
                    })) ? (r = e(function (e, t) {
                        O(y(e, r, n), {
                            type: n,
                            collection: new u()
                        }), null != t && v(t, e[o], e, i);
                    }), a = T(n), A([
                        'add',
                        'clear',
                        'delete',
                        'forEach',
                        'get',
                        'has',
                        'set',
                        'keys',
                        'values',
                        'entries'
                    ], function (i) {
                        var o = 'add' == i || 'set' == i;
                        i in s && (!c || 'clear' != i) && b(r.prototype, i, function (e, t) {
                            var n = a(this).collection;
                            if (!o && c && !h(e))
                                return 'get' == i && void 0;
                            var r = n[i](0 === e ? 0 : e, t);
                            return o ? this : r;
                        });
                    }), c || S(r.prototype, 'size', {
                        configurable: !0,
                        get: function () {
                            return a(this).collection.size;
                        }
                    })) : (r = t.getConstructor(e, n, i, o), p.REQUIRED = !0), m(r, n, !1, !0), d[n] = r, f({
                        global: !0,
                        forced: !0
                    }, d), c || t.setStrong(r, n, i), r;
                };
            },
            115: function (e, t, n) {
                var r = n(30);
                e.exports = !r(function () {
                    return Object.isExtensible(Object.preventExtensions({}));
                });
            },
            116: function (e, t, n) {
                'use strict';
                var r = n(63), i = n(62);
                e.exports = r ? {}.toString : function () {
                    return '[object ' + i(this) + ']';
                };
            },
            117: function (e, t, n) {
                var r = n(26), i = n(118), o = r.WeakMap;
                e.exports = 'function' == typeof o && /native code/.test(i(o));
            },
            118: function (e, t, n) {
                var r = n(80), i = Function.toString;
                'function' != typeof r.inspectSource && (r.inspectSource = function (e) {
                    return i.call(e);
                }), e.exports = r.inspectSource;
            },
            119: function (e, t, n) {
                'use strict';
                var s = n(34).f, d = n(88), f = n(124), l = n(24), p = n(87), g = n(18), a = n(66), c = n(129), b = n(29), v = n(84).fastKey, r = n(53), y = r.set, h = r.getterFor;
                e.exports = {
                    getConstructor: function (e, n, r, i) {
                        function o(e, t, n) {
                            var r, i, o = c(e), a = u(e, t);
                            return a ? a.value = n : (o.last = a = {
                                index: i = v(t, !0),
                                key: t,
                                value: n,
                                previous: r = o.last,
                                next: void 0,
                                removed: !1
                            }, o.first || (o.first = a), r && (r.next = a), b ? o.size++ : e.size++, 'F' !== i && (o.index[i] = a)), e;
                        }
                        var a = e(function (e, t) {
                                p(e, a, n), y(e, {
                                    type: n,
                                    index: d(null),
                                    first: void 0,
                                    last: void 0,
                                    size: 0
                                }), b || (e.size = 0), null != t && g(t, e[i], e, r);
                            }), c = h(n), u = function (e, t) {
                                var n, r = c(e), i = v(t);
                                if ('F' !== i)
                                    return r.index[i];
                                for (n = r.first; n; n = n.next)
                                    if (n.key == t)
                                        return n;
                            };
                        return f(a.prototype, {
                            clear: function () {
                                for (var e = c(this), t = e.index, n = e.first; n;)
                                    n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
                                e.first = e.last = void 0, b ? e.size = 0 : this.size = 0;
                            },
                            delete: function (e) {
                                var t, n, r = c(this), i = u(this, e);
                                return i && (t = i.next, n = i.previous, delete r.index[i.index], i.removed = !0, n && (n.next = t), t && (t.previous = n), r.first == i && (r.first = t), r.last == i && (r.last = n), b ? r.size-- : this.size--), !!i;
                            },
                            forEach: function (e, t) {
                                for (var n, r = c(this), i = l(e, 1 < arguments.length ? t : void 0, 3); n = n ? n.next : r.first;)
                                    for (i(n.value, n.key, this); n && n.removed;)
                                        n = n.previous;
                            },
                            has: function (e) {
                                return !!u(this, e);
                            }
                        }), f(a.prototype, r ? {
                            get: function (e) {
                                var t = u(this, e);
                                return t && t.value;
                            },
                            set: function (e, t) {
                                return o(this, 0 === e ? 0 : e, t);
                            }
                        } : {
                            add: function (e) {
                                return o(this, e = 0 === e ? 0 : e, e);
                            }
                        }), b && s(a.prototype, 'size', {
                            get: function () {
                                return c(this).size;
                            }
                        }), a;
                    },
                    setStrong: function (e, t, n) {
                        var r = t + ' Iterator', i = h(t), o = h(r);
                        a(e, t, function (e, t) {
                            y(this, {
                                type: r,
                                target: e,
                                state: i(e),
                                kind: t,
                                last: void 0
                            });
                        }, function () {
                            for (var e = o(this), t = e.kind, n = e.last; n && n.removed;)
                                n = n.previous;
                            return e.target && (e.last = n = n ? n.next : e.state.first) ? 'keys' == t ? {
                                value: n.key,
                                done: !1
                            } : 'values' == t ? {
                                value: n.value,
                                done: !1
                            } : {
                                value: [
                                    n.key,
                                    n.value
                                ],
                                done: !1
                            } : {
                                value: e.target = void 0,
                                done: !0
                            };
                        }, n ? 'entries' : 'values', !n, !0), c(t);
                    }
                };
            },
            12: function (e, t, n) {
                var r = n(109);
                e.exports = r;
            },
            120: function (e, t, n) {
                var r = n(29), a = n(34), c = n(15), u = n(121);
                e.exports = r ? Object.defineProperties : function (e, t) {
                    c(e);
                    for (var n, r = u(t), i = r.length, o = 0; o < i;)
                        a.f(e, n = r[o++], t[n]);
                    return e;
                };
            },
            121: function (e, t, n) {
                var r = n(122), i = n(89);
                e.exports = Object.keys || function (e) {
                    return r(e, i);
                };
            },
            122: function (e, t, n) {
                var a = n(27), c = n(45), u = n(82).indexOf, s = n(52);
                e.exports = function (e, t) {
                    var n, r = c(e), i = 0, o = [];
                    for (n in r)
                        !a(s, n) && a(r, n) && o.push(n);
                    for (; t.length > i;)
                        a(r, n = t[i++]) && (~u(o, n) || o.push(n));
                    return o;
                };
            },
            123: function (e, t, n) {
                var r = n(28);
                e.exports = r('document', 'documentElement');
            },
            124: function (e, t, n) {
                var i = n(90);
                e.exports = function (e, t, n) {
                    for (var r in t)
                        n && n.unsafe && e[r] ? e[r] = t[r] : i(e, r, t[r], n);
                    return e;
                };
            },
            125: function (e, t, n) {
                'use strict';
                function i() {
                    return this;
                }
                var o = n(91).IteratorPrototype, a = n(88), c = n(44), u = n(64), s = n(37);
                e.exports = function (e, t, n) {
                    var r = t + ' Iterator';
                    return e.prototype = a(o, { next: c(1, n) }), u(e, r, !1, !0), s[r] = i, e;
                };
            },
            126: function (e, t, n) {
                var r = n(30);
                e.exports = !r(function () {
                    function e() {
                    }
                    return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
                });
            },
            127: function (e, t, n) {
                var i = n(15), o = n(128);
                e.exports = Object.setPrototypeOf || ('__proto__' in {} ? function () {
                    var n, r = !1, e = {};
                    try {
                        (n = Object.getOwnPropertyDescriptor(Object.prototype, '__proto__').set).call(e, []), r = e instanceof Array;
                    } catch (e) {
                    }
                    return function (e, t) {
                        return i(e), o(t), r ? n.call(e, t) : e.__proto__ = t, e;
                    };
                }() : void 0);
            },
            128: function (e, t, n) {
                var r = n(31);
                e.exports = function (e) {
                    if (!r(e) && null !== e)
                        throw TypeError('Can\'t set ' + String(e) + ' as a prototype');
                    return e;
                };
            },
            129: function (e, t, n) {
                'use strict';
                var r = n(28), i = n(34), o = n(22), a = n(29), c = o('species');
                e.exports = function (e) {
                    var t = r(e), n = i.f;
                    a && t && !t[c] && n(t, c, {
                        configurable: !0,
                        get: function () {
                            return this;
                        }
                    });
                };
            },
            13: function (e, t, n) {
                'use strict';
                t.a = i, t.c = function (e) {
                    return !(!e || !e.url);
                }, t.b = function (e, t) {
                    e.render(t);
                };
                var u = n(40), s = n(0), r = n(11), d = n.n(r), f = 'outstream';
                function i(e) {
                    var t = this, r = e.url, n = e.config, i = e.id, o = e.callback, a = e.loaded, c = e.adUnitCode;
                    this.url = r, this.config = n, this.handlers = {}, this.id = i, this.loaded = a, this.cmd = [], this.push = function (e) {
                        'function' == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : s.logError('Commands given to Renderer.push must be wrapped in a function');
                    }, this.callback = o || function () {
                        t.loaded = !0, t.process();
                    }, this.render = function () {
                        function e() {
                            t._render ? t._render.apply(t, n) : s.logWarn('No render function was provided, please use .setRender on the renderer');
                        }
                        var t = this, n = arguments;
                        !function (t) {
                            var e = pbjs.adUnits, n = d()(e, function (e) {
                                    return e.code === t;
                                });
                            if (!n)
                                return !1;
                            var r = s.deepAccess(n, 'renderer'), i = !!(r && r.url && r.render), o = s.deepAccess(n, 'mediaTypes.video.renderer'), a = !!(o && o.url && o.render);
                            return !!(i && !0 !== r.backupOnly || a && !0 !== o.backupOnly);
                        }(c) ? (this.cmd.unshift(e), Object(u.a)(r, f, this.callback)) : (s.logWarn('External Js not loaded by Renderer since renderer url and callback is already defined on adUnit '.concat(c)), e());
                    }.bind(this);
                }
                i.install = function (e) {
                    return new i({
                        url: e.url,
                        config: e.config,
                        id: e.id,
                        callback: e.callback,
                        loaded: e.loaded,
                        adUnitCode: e.adUnitCode
                    });
                }, i.prototype.getConfig = function () {
                    return this.config;
                }, i.prototype.setRender = function (e) {
                    this._render = e;
                }, i.prototype.setEventHandlers = function (e) {
                    this.handlers = e;
                }, i.prototype.handleVideoEvent = function (e) {
                    var t = e.id, n = e.eventName;
                    'function' == typeof this.handlers[n] && this.handlers[n](), s.logMessage('Prebid Renderer event for id '.concat(t, ' type ').concat(n));
                }, i.prototype.process = function () {
                    for (; 0 < this.cmd.length;)
                        try {
                            this.cmd.shift().call();
                        } catch (e) {
                            s.logError('Error processing Renderer command: ', e);
                        }
                };
            },
            130: function (e, t) {
            },
            131: function (e, t, n) {
                function r(c) {
                    return function (e, t) {
                        var n, r, i = String(s(e)), o = u(t), a = i.length;
                        return o < 0 || a <= o ? c ? '' : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? c ? i.charAt(o) : n : c ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536;
                    };
                }
                var u = n(58), s = n(47);
                e.exports = {
                    codeAt: r(!1),
                    charAt: r(!0)
                };
            },
            132: function (e, t, n) {
                n(133);
                var r = n(134), i = n(26), o = n(62), a = n(32), c = n(37), u = n(22)('toStringTag');
                for (var s in r) {
                    var d = i[s], f = d && d.prototype;
                    f && o(f) !== u && a(f, u, s), c[s] = c.Array;
                }
            },
            133: function (e, t, n) {
                'use strict';
                var r = n(45), i = n(50), o = n(37), a = n(53), c = n(66), u = 'Array Iterator', s = a.set, d = a.getterFor(u);
                e.exports = c(Array, 'Array', function (e, t) {
                    s(this, {
                        type: u,
                        target: r(e),
                        index: 0,
                        kind: t
                    });
                }, function () {
                    var e = d(this), t = e.target, n = e.kind, r = e.index++;
                    return !t || r >= t.length ? {
                        value: e.target = void 0,
                        done: !0
                    } : 'keys' == n ? {
                        value: r,
                        done: !1
                    } : 'values' == n ? {
                        value: t[r],
                        done: !1
                    } : {
                        value: [
                            r,
                            t[r]
                        ],
                        done: !1
                    };
                }, 'values'), o.Arguments = o.Array, i('keys'), i('values'), i('entries');
            },
            134: function (e, t) {
                e.exports = {
                    CSSRuleList: 0,
                    CSSStyleDeclaration: 0,
                    CSSValueList: 0,
                    ClientRectList: 0,
                    DOMRectList: 0,
                    DOMStringList: 0,
                    DOMTokenList: 1,
                    DataTransferItemList: 0,
                    FileList: 0,
                    HTMLAllCollection: 0,
                    HTMLCollection: 0,
                    HTMLFormElement: 0,
                    HTMLSelectElement: 0,
                    MediaList: 0,
                    MimeTypeArray: 0,
                    NamedNodeMap: 0,
                    NodeList: 1,
                    PaintRequestList: 0,
                    Plugin: 0,
                    PluginArray: 0,
                    SVGLengthList: 0,
                    SVGNumberList: 0,
                    SVGPathSegList: 0,
                    SVGPointList: 0,
                    SVGStringList: 0,
                    SVGTransformList: 0,
                    SourceBufferList: 0,
                    StyleSheetList: 0,
                    TextTrackCueList: 0,
                    TextTrackList: 0,
                    TouchList: 0
                };
            },
            135: function (e, t, n) {
                n(14)({
                    target: 'Set',
                    stat: !0
                }, { from: n(136) });
            },
            136: function (e, t, n) {
                'use strict';
                var s = n(20), d = n(24), f = n(18);
                e.exports = function (e, t, n) {
                    var r, i, o, a, c = arguments.length, u = 1 < c ? t : void 0;
                    return s(this), (r = void 0 !== u) && s(u), null == e ? new this() : (i = [], r ? (o = 0, a = d(u, 2 < c ? n : void 0, 2), f(e, function (e) {
                        i.push(a(e, o++));
                    })) : f(e, i.push, i), new this(i));
                };
            },
            137: function (e, t, n) {
                n(14)({
                    target: 'Set',
                    stat: !0
                }, { of: n(138) });
            },
            138: function (e, t, n) {
                'use strict';
                e.exports = function () {
                    for (var e = arguments.length, t = new Array(e); e--;)
                        t[e] = arguments[e];
                    return new this(t);
                };
            },
            139: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(17), o = n(140);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    addAll: function () {
                        return o.apply(this, arguments);
                    }
                });
            },
            14: function (e, t, n) {
                'use strict';
                function y(r) {
                    function e(e, t, n) {
                        if (this instanceof r) {
                            switch (arguments.length) {
                            case 0:
                                return new r();
                            case 1:
                                return new r(e);
                            case 2:
                                return new r(e, t);
                            }
                            return new r(e, t, n);
                        }
                        return r.apply(this, arguments);
                    }
                    return e.prototype = r.prototype, e;
                }
                var h = n(26), m = n(102).f, S = n(104), A = n(48), E = n(24), O = n(32), T = n(27);
                e.exports = function (e, t) {
                    var n, r, i, o, a, c, u, s, d = e.target, f = e.global, l = e.stat, p = e.proto, g = f ? h : l ? h[d] : (h[d] || {}).prototype, b = f ? A : A[d] || (A[d] = {}), v = b.prototype;
                    for (i in t)
                        n = !S(f ? i : d + (l ? '.' : '#') + i, e.forced) && g && T(g, i), a = b[i], n && (c = e.noTargetGet ? (s = m(g, i)) && s.value : g[i]), o = n && c ? c : t[i], n && typeof a == typeof o || (u = e.bind && n ? E(o, h) : e.wrap && n ? y(o) : p && 'function' == typeof o ? E(Function.call, o) : o, (e.sham || o && o.sham || a && a.sham) && O(u, 'sham', !0), b[i] = u, p && (T(A, r = d + 'Prototype') || O(A, r, {}), A[r][i] = o, e.real && v && !v[i] && O(v, i, o)));
                };
            },
            140: function (e, t, n) {
                'use strict';
                var i = n(15), o = n(20);
                e.exports = function () {
                    for (var e = i(this), t = o(e.add), n = 0, r = arguments.length; n < r; n++)
                        t.call(e, arguments[n]);
                    return e;
                };
            },
            141: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(17), o = n(142);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    deleteAll: function () {
                        return o.apply(this, arguments);
                    }
                });
            },
            142: function (e, t, n) {
                'use strict';
                var a = n(15), c = n(20);
                e.exports = function () {
                    for (var e, t = a(this), n = c(t.delete), r = !0, i = 0, o = arguments.length; i < o; i++)
                        e = n.call(t, arguments[i]), r = r && e;
                    return !!r;
                };
            },
            143: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(17), o = n(15), a = n(24), c = n(35), u = n(18);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    every: function (e, t) {
                        var n = o(this), r = c(n), i = a(e, 1 < arguments.length ? t : void 0, 3);
                        return !u(r, function (e) {
                            if (!i(e, e, n))
                                return u.stop();
                        }, void 0, !1, !0).stopped;
                    }
                });
            },
            144: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(17), o = n(28), a = n(15), c = n(20), u = n(38), s = n(18);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    difference: function (e) {
                        var t = a(this), n = new (u(t, o('Set')))(t), r = c(n.delete);
                        return s(e, function (e) {
                            r.call(n, e);
                        }), n;
                    }
                });
            },
            145: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(17), c = n(28), u = n(15), s = n(20), d = n(24), f = n(38), l = n(35), p = n(18);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    filter: function (e, t) {
                        var n = u(this), r = l(n), i = d(e, 1 < arguments.length ? t : void 0, 3), o = new (f(n, c('Set')))(), a = s(o.add);
                        return p(r, function (e) {
                            i(e, e, n) && a.call(o, e);
                        }, void 0, !1, !0), o;
                    }
                });
            },
            146: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(17), o = n(15), a = n(24), c = n(35), u = n(18);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    find: function (e, t) {
                        var n = o(this), r = c(n), i = a(e, 1 < arguments.length ? t : void 0, 3);
                        return u(r, function (e) {
                            if (i(e, e, n))
                                return u.stop(e);
                        }, void 0, !1, !0).result;
                    }
                });
            },
            147: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(17), o = n(28), a = n(15), c = n(20), u = n(38), s = n(18);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    intersection: function (e) {
                        var t = a(this), n = new (u(t, o('Set')))(), r = c(t.has), i = c(n.add);
                        return s(e, function (e) {
                            r.call(t, e) && i.call(n, e);
                        }), n;
                    }
                });
            },
            148: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(17), o = n(15), a = n(20), c = n(18);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    isDisjointFrom: function (e) {
                        var t = o(this), n = a(t.has);
                        return !c(e, function (e) {
                            if (!0 === n.call(t, e))
                                return c.stop();
                        }).stopped;
                    }
                });
            },
            149: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(17), o = n(28), a = n(15), c = n(20), u = n(94), s = n(18);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    isSubsetOf: function (e) {
                        var t = u(this), n = a(e), r = n.has;
                        return 'function' != typeof r && (n = new (o('Set'))(e), r = c(n.has)), !s(t, function (e) {
                            if (!1 === r.call(n, e))
                                return s.stop();
                        }, void 0, !1, !0).stopped;
                    }
                });
            },
            15: function (e, t, n) {
                var r = n(31);
                e.exports = function (e) {
                    if (!r(e))
                        throw TypeError(String(e) + ' is not an object');
                    return e;
                };
            },
            150: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(17), o = n(15), a = n(20), c = n(18);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    isSupersetOf: function (e) {
                        var t = o(this), n = a(t.has);
                        return !c(e, function (e) {
                            if (!1 === n.call(t, e))
                                return c.stop();
                        }).stopped;
                    }
                });
            },
            151: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(17), o = n(15), a = n(35), c = n(18);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    join: function (e) {
                        var t = o(this), n = a(t), r = void 0 === e ? ',' : String(e), i = [];
                        return c(n, i.push, i, !1, !0), i.join(r);
                    }
                });
            },
            152: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(17), c = n(28), u = n(15), s = n(20), d = n(24), f = n(38), l = n(35), p = n(18);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    map: function (e, t) {
                        var n = u(this), r = l(n), i = d(e, 1 < arguments.length ? t : void 0, 3), o = new (f(n, c('Set')))(), a = s(o.add);
                        return p(r, function (e) {
                            a.call(o, i(e, e, n));
                        }, void 0, !1, !0), o;
                    }
                });
            },
            153: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(17), a = n(15), c = n(20), u = n(35), s = n(18);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    reduce: function (t, e) {
                        var n = a(this), r = u(n), i = arguments.length < 2, o = i ? void 0 : e;
                        if (c(t), s(r, function (e) {
                                o = i ? (i = !1, e) : t(o, e, e, n);
                            }, void 0, !1, !0), i)
                            throw TypeError('Reduce of empty set with no initial value');
                        return o;
                    }
                });
            },
            154: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(17), o = n(15), a = n(24), c = n(35), u = n(18);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    some: function (e, t) {
                        var n = o(this), r = c(n), i = a(e, 1 < arguments.length ? t : void 0, 3);
                        return u(r, function (e) {
                            if (i(e, e, n))
                                return u.stop();
                        }, void 0, !1, !0).stopped;
                    }
                });
            },
            155: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(17), o = n(28), a = n(15), c = n(20), u = n(38), s = n(18);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    symmetricDifference: function (e) {
                        var t = a(this), n = new (u(t, o('Set')))(t), r = c(n.delete), i = c(n.add);
                        return s(e, function (e) {
                            r.call(n, e) || i.call(n, e);
                        }), n;
                    }
                });
            },
            156: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(17), o = n(28), a = n(15), c = n(20), u = n(38), s = n(18);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    union: function (e) {
                        var t = a(this), n = new (u(t, o('Set')))(t);
                        return s(e, c(n.add), n), n;
                    }
                });
            },
            157: function (e, t, n) {
                n(93), n(158);
                var r = n(48);
                e.exports = r.Array.from;
            },
            158: function (e, t, n) {
                var r = n(14), i = n(159);
                r({
                    target: 'Array',
                    stat: !0,
                    forced: !n(161)(function (e) {
                        Array.from(e);
                    })
                }, { from: i });
            },
            159: function (e, t, n) {
                'use strict';
                var v = n(24), y = n(57), h = n(86), m = n(85), S = n(49), A = n(160), E = n(61);
                e.exports = function (e, t, n) {
                    var r, i, o, a, c, u, s = y(e), d = 'function' == typeof this ? this : Array, f = arguments.length, l = 1 < f ? t : void 0, p = void 0 !== l, g = E(s), b = 0;
                    if (p && (l = v(l, 2 < f ? n : void 0, 2)), null == g || d == Array && m(g))
                        for (i = new d(r = S(s.length)); b < r; b++)
                            u = p ? l(s[b], b) : s[b], A(i, b, u);
                    else
                        for (c = (a = g.call(s)).next, i = new d(); !(o = c.call(a)).done; b++)
                            u = p ? h(a, l, [
                                o.value,
                                b
                            ], !0) : o.value, A(i, b, u);
                    return i.length = b, i;
                };
            },
            16: function (e, t, n) {
                'use strict';
                t.a = function () {
                    return window.pbjs;
                }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push('pbjs');
            },
            160: function (e, t, n) {
                'use strict';
                var i = n(55), o = n(34), a = n(44);
                e.exports = function (e, t, n) {
                    var r = i(t);
                    r in e ? o.f(e, r, a(0, n)) : e[r] = n;
                };
            },
            161: function (e, t, n) {
                var i = n(22)('iterator'), o = !1;
                try {
                    var r = 0, a = {
                            next: function () {
                                return { done: !!r++ };
                            },
                            return: function () {
                                o = !0;
                            }
                        };
                    a[i] = function () {
                        return this;
                    }, Array.from(a, function () {
                        throw 2;
                    });
                } catch (e) {
                }
                e.exports = function (e, t) {
                    if (!t && !o)
                        return !1;
                    var n = !1;
                    try {
                        var r = {};
                        r[i] = function () {
                            return {
                                next: function () {
                                    return { done: n = !0 };
                                }
                            };
                        }, e(r);
                    } catch (e) {
                    }
                    return n;
                };
            },
            162: function (e, t) {
                e.exports = function e(t) {
                    var n = Array.isArray(t) ? [] : {};
                    for (var r in t) {
                        var i = t[r];
                        n[r] = i && 'object' == typeof i ? e(i) : i;
                    }
                    return n;
                };
            },
            163: function (e, t, n) {
                'use strict';
                t.a = function (e, t, n, r, i) {
                    for (t = t.split ? t.split('.') : t, r = 0; r < t.length; r++)
                        e = e ? e[t[r]] : i;
                    return e === i ? n : e;
                };
            },
            164: function (e, t, n) {
                'use strict';
                t.a = function (e, t, n) {
                    t.split && (t = t.split('.'));
                    for (var r, i = 0, o = t.length, a = e; i < o; ++i)
                        r = a[t[i]], a = a[t[i]] = i === o - 1 ? n : null != r ? r : !~t[i + 1].indexOf('.') && -1 < +t[i + 1] ? [] : {};
                };
            },
            165: function (e, t) {
                h.SYNC = 1, h.ASYNC = 2, h.QUEUE = 4;
                var g = 'fun-hooks';
                var n = Object.freeze({
                        useProxy: !0,
                        ready: 0
                    }), b = new WeakMap(), r = '2,1,0' === [1].reduce(function (e, t, n) {
                        return [
                            e,
                            t,
                            n
                        ];
                    }, 2).toString() ? Array.prototype.reduce : function (e, t) {
                        var n, r = Object(this), i = r.length >>> 0, o = 0;
                        if (t)
                            n = t;
                        else {
                            for (; o < i && !(o in r);)
                                o++;
                            n = r[o++];
                        }
                        for (; o < i;)
                            o in r && (n = e(n, r[o], o, r)), o++;
                        return n;
                    };
                function v(e, t) {
                    return Array.prototype.slice.call(e, t);
                }
                var y = Object.assign || function (e) {
                    return r.call(v(arguments, 1), function (t, n) {
                        return n && Object.keys(n).forEach(function (e) {
                            t[e] = n[e];
                        }), t;
                    }, e);
                };
                function h(u) {
                    var s, e = {}, d = [];
                    function t(e, t) {
                        return 'function' == typeof e ? f.call(null, 'sync', e, t) : 'string' == typeof e && 'function' == typeof t ? f.apply(null, arguments) : 'object' == typeof e ? function (o, e, a) {
                            var t = !0;
                            void 0 === e && (e = Object.getOwnPropertyNames(o), t = !1);
                            var c = {}, n = ['constructor'];
                            for (; (e = e.filter(function (e) {
                                    return !('function' != typeof o[e] || -1 !== n.indexOf(e) || e.match(/^_/));
                                })).forEach(function (e) {
                                    var t, n = e.split(':'), r = n[0], i = n[1] || 'sync';
                                    c[r] || (t = o[r], c[r] = o[r] = f(i, t, a ? [
                                        a,
                                        r
                                    ] : void 0));
                                }), o = Object.getPrototypeOf(o), t && o;);
                            return c;
                        }.apply(null, arguments) : void 0;
                    }
                    function l(o) {
                        var a = Array.isArray(o) ? o : o.split('.');
                        return r.call(a, function (t, n, e) {
                            var r = t[n], i = !1;
                            return r || (e === a.length - 1 ? (s || d.push(function () {
                                i || console.warn(g + ': referenced \'' + o + '\' but it was never created');
                            }), t[n] = p(function (e) {
                                t[n] = e, i = !0;
                            })) : t[n] = {});
                        }, e);
                    }
                    function p(r) {
                        var o = [], a = [], c = function () {
                            }, e = {
                                before: function (e, t) {
                                    return n.call(this, o, 'before', e, t);
                                },
                                after: function (e, t) {
                                    return n.call(this, a, 'after', e, t);
                                },
                                getHooks: function (n) {
                                    var e = o.concat(a);
                                    'object' == typeof n && (e = e.filter(function (t) {
                                        return Object.keys(n).every(function (e) {
                                            return t[e] === n[e];
                                        });
                                    }));
                                    try {
                                        y(e, {
                                            remove: function () {
                                                return e.forEach(function (e) {
                                                    e.remove();
                                                }), this;
                                            }
                                        });
                                    } catch (e) {
                                        console.error('error adding `remove` to array, did you modify Array.prototype?');
                                    }
                                    return e;
                                },
                                removeAll: function () {
                                    return this.getHooks().remove();
                                }
                            }, t = {
                                install: function (e, t, n) {
                                    this.type = e, (c = n)(o, a), r && r(t);
                                }
                            };
                        return b.set(e.after, t), e;
                        function n(t, e, n, r) {
                            var i = {
                                hook: n,
                                type: e,
                                priority: r || 10,
                                remove: function () {
                                    var e = t.indexOf(i);
                                    -1 !== e && (t.splice(e, 1), c(o, a));
                                }
                            };
                            return t.push(i), t.sort(function (e, t) {
                                return t.priority - e.priority;
                            }), c(o, a), this;
                        }
                    }
                    function f(f, e, t) {
                        var n = e.after && b.get(e.after);
                        if (n) {
                            if (n.type !== f)
                                throw g + ': recreated hookable with different type';
                            return e;
                        }
                        var r, i, o = t ? l(t) : p(), a = {
                                get: function (e, t) {
                                    return o[t] || Reflect.get.apply(Reflect, arguments);
                                }
                            };
                        return s || d.push(c), u.useProxy && 'function' == typeof Proxy && Proxy.revocable ? i = new Proxy(e, a) : y(i = function () {
                            return a.apply ? a.apply(e, this, v(arguments)) : e.apply(this, arguments);
                        }, o), b.get(i.after).install(f, i, function (e, t) {
                            var s, d = [];
                            r = e.length || t.length ? (e.forEach(n), s = d.push(void 0) - 1, t.forEach(n), function (n, r, e) {
                                var i, o = 0, a = 'async' === f && 'function' == typeof e[e.length - 1] && e.pop();
                                function c(e) {
                                    'sync' === f ? i = e : a && a.apply(null, arguments);
                                }
                                function u(e) {
                                    if (d[o]) {
                                        var t = v(arguments);
                                        return u.bail = c, t.unshift(u), d[o++].apply(r, t);
                                    }
                                    'sync' === f ? i = e : a && a.apply(null, arguments);
                                }
                                return d[s] = function () {
                                    var e = v(arguments, 1);
                                    'async' === f && a && (delete u.bail, e.push(u));
                                    var t = n.apply(r, e);
                                    'sync' === f && u(t);
                                }, u.apply(null, e), i;
                            }) : void 0;
                            function n(e) {
                                d.push(e.hook);
                            }
                            c();
                        }), i;
                        function c() {
                            !s && ('sync' !== f || u.ready & h.SYNC) && ('async' !== f || u.ready & h.ASYNC) ? 'sync' !== f && u.ready & h.QUEUE ? a.apply = function () {
                                var e = arguments;
                                d.push(function () {
                                    i.apply(e[1], e[2]);
                                });
                            } : a.apply = function () {
                                throw g + ': hooked function not ready';
                            } : a.apply = r;
                        }
                    }
                    return (u = y({}, n, u)).ready ? t.ready = function () {
                        s = !0, function (e) {
                            for (var t; t = e.shift();)
                                t();
                        }(d);
                    } : s = !0, t.get = l, t;
                }
                e.exports = h;
            },
            17: function (e, t) {
                e.exports = !0;
            },
            18: function (e, t, n) {
                function p(e, t) {
                    this.stopped = e, this.result = t;
                }
                var g = n(15), b = n(85), v = n(49), y = n(24), h = n(61), m = n(86);
                (e.exports = function (e, t, n, r, i) {
                    var o, a, c, u, s, d, f, l = y(t, n, r ? 2 : 1);
                    if (i)
                        o = e;
                    else {
                        if ('function' != typeof (a = h(e)))
                            throw TypeError('Target is not iterable');
                        if (b(a)) {
                            for (c = 0, u = v(e.length); c < u; c++)
                                if ((s = r ? l(g(f = e[c])[0], f[1]) : l(e[c])) && s instanceof p)
                                    return s;
                            return new p(!1);
                        }
                        o = a.call(e);
                    }
                    for (d = o.next; !(f = d.call(o)).done;)
                        if ('object' == typeof (s = m(o, l, f.value, r)) && s && s instanceof p)
                            return s;
                    return new p(!1);
                }).stop = function (e) {
                    return new p(!0, e);
                };
            },
            19: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return r;
                });
                var h = n(3), m = n(0);
                var S, r = (S = window, function () {
                        var e, t = [], n = function (e) {
                                try {
                                    if (!e.location.ancestorOrigins)
                                        return;
                                    return e.location.ancestorOrigins;
                                } catch (e) {
                                }
                            }(S), r = h.b.getConfig('maxNestedIframes'), i = !1, o = 0, a = !1, c = !1;
                        do {
                            var u, s, d = b, f = c, l = void 0, p = !1, g = null, c = !1, b = b ? b.parent : S;
                            try {
                                l = b.location.href || null;
                            } catch (e) {
                                p = !0;
                            }
                            if (p)
                                if (f) {
                                    var v = d.context;
                                    try {
                                        s = g = v.sourceUrl, a = !0, b === S.top && (i = !0), v.canonicalUrl && (e = v.canonicalUrl);
                                    } catch (e) {
                                    }
                                } else {
                                    Object(m.logWarn)('Trying to access cross domain iframe. Continuing without referrer and location');
                                    try {
                                        var y = d.document.referrer;
                                        y && (g = y, b === S.top && (i = !0));
                                    } catch (e) {
                                    }
                                    !g && n && n[o - 1] && (g = n[o - 1]), g && !a && (s = g);
                                }
                            else
                                l && (s = g = l, a = !1, b === S.top && (i = !0, (u = function (e) {
                                    var t = h.b.getConfig('pageUrl');
                                    if (t)
                                        return t;
                                    try {
                                        var n = e.querySelector('link[rel=\'canonical\']');
                                        if (null !== n)
                                            return n.href;
                                    } catch (e) {
                                    }
                                    return null;
                                }(b.document)) && (e = u))), b.context && b.context.sourceUrl && (c = !0);
                            t.push(g), o++;
                        } while (b !== S.top && o < r);
                        return t.reverse(), {
                            referer: s || null,
                            reachedTop: i,
                            isAmp: a,
                            numIframes: o - 1,
                            stack: t,
                            canonicalUrl: e || null
                        };
                    });
            },
            2: function (e, t, n) {
                'use strict';
                n.d(t, 'c', function () {
                    return r;
                }), n.d(t, 'd', function () {
                    return i;
                }), n.d(t, 'b', function () {
                    return o;
                }), n.d(t, 'a', function () {
                    return a;
                });
                var r = 'native', i = 'video', o = 'banner', a = 'adpod';
            },
            20: function (e, t) {
                e.exports = function (e) {
                    if ('function' != typeof e)
                        throw TypeError(String(e) + ' is not a function');
                    return e;
                };
            },
            204: function (e, t, n) {
                n(205);
                var r = n(51);
                e.exports = r('Array', 'findIndex');
            },
            205: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(56).findIndex, o = n(50), a = n(60), c = 'findIndex', u = !0, s = a(c);
                c in [] && Array(1)[c](function () {
                    u = !1;
                }), r({
                    target: 'Array',
                    proto: !0,
                    forced: u || !s
                }, {
                    findIndex: function (e, t) {
                        return i(this, e, 1 < arguments.length ? t : void 0);
                    }
                }), o(c);
            },
            210: function (e, t, n) {
                'use strict';
                t.a = function () {
                    window.addEventListener('message', c, !1);
                };
                var r = n(8), b = n.n(r), v = n(36), i = n(5), y = n.n(i), h = n(0), m = n(23), o = n(11), S = n.n(o), A = n(13), a = n(12), d = n.n(a), E = n(3), O = y.a.EVENTS.BID_WON, T = y.a.EVENTS.STALE_RENDER;
                function c(e) {
                    var t, n, r, i, o, a, c, u, s, d = e.message ? 'message' : 'data', f = {};
                    try {
                        f = JSON.parse(e[d]);
                    } catch (e) {
                        return;
                    }
                    if (f && f.adId) {
                        var l, p = S()(m.a.getBidsReceived(), function (e) {
                                return e.adId === f.adId;
                            });
                        if (p && 'Prebid Request' === f.message) {
                            if (p.status === y.a.BID_STATUS.RENDERED && (Object(h.logWarn)('Ad id '.concat(p.adId, ' has been rendered before')), b.a.emit(T, p), Object(h.deepAccess)(E.b.getConfig('auctionOptions'), 'suppressStaleRender')))
                                return;
                            n = e, r = (t = p).adId, i = t.ad, o = t.adUrl, a = t.width, c = t.height, u = t.renderer, s = t.cpm, Object(A.c)(u) ? Object(A.b)(u, t) : r && (I(t), n.source.postMessage(JSON.stringify({
                                message: 'Prebid Response',
                                ad: Object(h.replaceAuctionPrice)(i, s),
                                adUrl: Object(h.replaceAuctionPrice)(o, s),
                                adId: r,
                                width: a,
                                height: c
                            }), n.origin)), m.a.addWinningBid(p), b.a.emit(O, p);
                        }
                        if (p && 'Prebid Native' === f.message) {
                            if ('assetRequest' === f.action) {
                                var g = Object(v.d)(f, p);
                                return void e.source.postMessage(JSON.stringify(g), e.origin);
                            }
                            if ('allAssetRequest' === f.action ? (l = Object(v.c)(f, p), e.source.postMessage(JSON.stringify(l), e.origin)) : 'resizeNativeHeight' === f.action && (p.height = f.height, p.width = f.width, I(p)), 'click' === Object(v.b)(f, p))
                                return;
                            m.a.addWinningBid(p), b.a.emit(O, p);
                        }
                    }
                }
                function I(e) {
                    var a = e.adId, c = e.adUnitCode, u = e.width, s = e.height;
                    [
                        'div',
                        'iframe'
                    ].forEach(function (e) {
                        var t, n, r, i, o = (t = e + ':not([style*="display: none"])', n = function (e, t) {
                                return window.googletag ? function (n) {
                                    return S()(window.googletag.pubads().getSlots(), function (t) {
                                        return S()(t.getTargetingKeys(), function (e) {
                                            return d()(t.getTargeting(e), n);
                                        });
                                    }).getSlotElementId();
                                }(e) : window.apntag ? function (e) {
                                    var t = window.apntag.getTag(e);
                                    return t && t.targetId;
                                }(t) : t;
                            }(a, c), (r = document.getElementById(n)) && r.querySelector(t));
                        o ? ((i = o.style).width = u + 'px', i.height = s + 'px') : Object(h.logWarn)('Unable to locate matching page element for adUnitCode '.concat(c, '.  Can\'t resize it to ad\'s dimensions.  Please review setup.'));
                    });
                }
            },
            211: function (e, t, n) {
                'use strict';
                t.a = function (e) {
                    const $___old_a4e771bddb9febb8 = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                    try {
                        if ($___old_a4e771bddb9febb8)
                            ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_74ac6b570a03df20.sessionStorage));
                        return function () {
                            var t;
                            try {
                                e = e || window.sessionStorage, t = JSON.parse(e.getItem(u));
                            } catch (e) {
                            }
                            t && p(t, !0);
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_a4e771bddb9febb8)
                            ({}.constructor.defineProperty(window, 'sessionStorage', $___old_a4e771bddb9febb8));
                    }
                };
                var r, i, o = n(3), a = n(0), c = n(33), u = 'pbjs:debugging';
                function s(e) {
                    Object(a.logMessage)('DEBUG: ' + e);
                }
                function d(e) {
                    Object(a.logWarn)('DEBUG: ' + e);
                }
                function f(e) {
                    r = function (e, t, n) {
                        if (b(this.bidders, n.bidderCode))
                            return void d('bidder \''.concat(n.bidderCode, '\' excluded from auction by bidder overrides'));
                        Array.isArray(this.bids) && this.bids.forEach(function (e) {
                            g(e, n.bidderCode, t) || v(e, n, 'bidder');
                        });
                        e(t, n);
                    }.bind(e), c.c.before(r, 5), i = function (e, t) {
                        var r = this, n = t.filter(function (e) {
                                return !b(r.bidders, e.bidderCode) || (d('bidRequest \''.concat(e.bidderCode, '\' excluded from auction by bidder overrides')), !1);
                            });
                        Array.isArray(r.bidRequests) && n.forEach(function (n) {
                            r.bidRequests.forEach(function (t) {
                                n.bids.forEach(function (e) {
                                    g(t, n.bidderCode, e.adUnitCode) || v(t, e, 'bidRequest');
                                });
                            });
                        });
                        e(n);
                    }.bind(e), c.e.before(i, 5);
                }
                function l() {
                    c.c.getHooks({ hook: r }).remove(), c.e.getHooks({ hook: i }).remove();
                }
                function p(e, t) {
                    var n = 1 < arguments.length && void 0 !== t && t;
                    o.b.setConfig({ debug: !0 }), l(), f(e), s('bidder overrides enabled'.concat(n ? ' from session' : ''));
                }
                function g(e, t, n) {
                    return e.bidder && e.bidder !== t || !(!e.adUnitCode || e.adUnitCode === n);
                }
                function b(e, t) {
                    return Array.isArray(e) && -1 === e.indexOf(t);
                }
                function v(n, e, r) {
                    return Object.keys(n).filter(function (e) {
                        return -1 === [
                            'adUnitCode',
                            'bidder'
                        ].indexOf(e);
                    }).reduce(function (e, t) {
                        return s('bidder overrides changed \''.concat(e.adUnitCode, '/').concat(e.bidderCode, '\' ').concat(r, '.').concat(t, ' from \'').concat(e[t], '.js\' to \'').concat(n[t], '\'')), e[t] = n[t], e;
                    }, e);
                }
                function y(e) {
                    if (e.enabled) {
                        try {
                            window.sessionStorage.setItem(u, JSON.stringify(e));
                        } catch (e) {
                        }
                        p(e);
                    } else {
                        l(), s('bidder overrides disabled');
                        try {
                            window.sessionStorage.removeItem(u);
                        } catch (e) {
                        }
                    }
                }
                o.b.getConfig('debugging', function (e) {
                    return y(e.debugging);
                });
            },
            22: function (e, t, n) {
                var r = n(26), i = n(79), o = n(27), a = n(59), c = n(81), u = n(108), s = i('wks'), d = r.Symbol, f = u ? d : d && d.withoutSetter || a;
                e.exports = function (e) {
                    return o(s, e) || (c && o(d, e) ? s[e] = d[e] : s[e] = f('Symbol.' + e)), s[e];
                };
            },
            23: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return u;
                });
                var r = n(0), s = n(33), i = n(11), o = n.n(i), a = n(5);
                var d, c, u = (d = [], (c = {}).addWinningBid = function (t) {
                        var e = o()(d, function (e) {
                            return e.getAuctionId() === t.auctionId;
                        });
                        e ? (t.status = a.BID_STATUS.RENDERED, e.addWinningBid(t)) : Object(r.logWarn)('Auction not found when adding winning bid');
                    }, c.getAllWinningBids = function () {
                        return d.map(function (e) {
                            return e.getWinningBids();
                        }).reduce(r.flatten, []);
                    }, c.getBidsRequested = function () {
                        return d.map(function (e) {
                            return e.getBidRequests();
                        }).reduce(r.flatten, []);
                    }, c.getNoBids = function () {
                        return d.map(function (e) {
                            return e.getNoBids();
                        }).reduce(r.flatten, []);
                    }, c.getBidsReceived = function () {
                        return d.map(function (e) {
                            if (e.getAuctionStatus() === s.a)
                                return e.getBidsReceived();
                        }).reduce(r.flatten, []).filter(function (e) {
                            return e;
                        });
                    }, c.getAllBidsForAdUnitCode = function (t) {
                        return d.map(function (e) {
                            return e.getBidsReceived();
                        }).reduce(r.flatten, []).filter(function (e) {
                            return e && e.adUnitCode === t;
                        });
                    }, c.getAdUnits = function () {
                        return d.map(function (e) {
                            return e.getAdUnits();
                        }).reduce(r.flatten, []);
                    }, c.getAdUnitCodes = function () {
                        return d.map(function (e) {
                            return e.getAdUnitCodes();
                        }).reduce(r.flatten, []).filter(r.uniques);
                    }, c.createAuction = function (e) {
                        var t, n = e.adUnits, r = e.adUnitCodes, i = e.callback, o = e.cbTimeout, a = e.labels, c = e.auctionId, u = Object(s.k)({
                                adUnits: n,
                                adUnitCodes: r,
                                callback: i,
                                cbTimeout: o,
                                labels: a,
                                auctionId: c
                            });
                        return t = u, d.push(t), u;
                    }, c.findBidByAdId = function (t) {
                        return o()(d.map(function (e) {
                            return e.getBidsReceived();
                        }).reduce(r.flatten, []), function (e) {
                            return e.adId === t;
                        });
                    }, c.getStandardBidderAdServerTargeting = function () {
                        return Object(s.j)()[a.JSON_MAPPING.ADSERVER_TARGETING];
                    }, c.setStatusForBids = function (e, t) {
                        var n, r = c.findBidByAdId(e);
                        r && (r.status = t), !r || t !== a.BID_STATUS.BID_TARGETING_SET || (n = o()(d, function (e) {
                            return e.getAuctionId() === r.auctionId;
                        })) && n.setBidTargeting(r);
                    }, c.getLastAuctionId = function () {
                        return d.length && d[d.length - 1].getAuctionId();
                    }, c.clearAllAuctions = function () {
                        d.length = 0;
                    }, c);
            },
            24: function (e, t, n) {
                var o = n(20);
                e.exports = function (r, i, e) {
                    if (o(r), void 0 === i)
                        return r;
                    switch (e) {
                    case 0:
                        return function () {
                            return r.call(i);
                        };
                    case 1:
                        return function (e) {
                            return r.call(i, e);
                        };
                    case 2:
                        return function (e, t) {
                            return r.call(i, e, t);
                        };
                    case 3:
                        return function (e, t, n) {
                            return r.call(i, e, t, n);
                        };
                    }
                    return function () {
                        return r.apply(i, arguments);
                    };
                };
            },
            25: function (e, t, n) {
                'use strict';
                n.d(t, 'b', function () {
                    return c;
                }), n.d(t, 'a', function () {
                    return u;
                }), t.d = function (e, t) {
                    var n = Object(o.getBidRequest)(e.requestId, t), r = n && Object(o.deepAccess)(n, 'mediaTypes.video'), i = r && Object(o.deepAccess)(r, 'context');
                    return s(e, n, r, i);
                }, n.d(t, 'c', function () {
                    return s;
                });
                n(7);
                var o = n(0), i = n(3), r = n(12), a = (n.n(r), n(10)), c = 'outstream', u = 'instream';
                var s = Object(a.b)('sync', function (e, t, n, r) {
                    return !t || n && r !== c ? i.b.getConfig('cache.url') || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== c || !!(e.renderer || t.renderer || n.renderer);
                }, 'checkVideoBidSetup');
            },
            26: function (n, e, t) {
                (function (e) {
                    function t(e) {
                        return e && e.Math == Math && e;
                    }
                    n.exports = t('object' == typeof globalThis && globalThis) || t('object' == typeof window && window) || t('object' == typeof self && self) || t('object' == typeof e && e) || Function('return this')();
                }.call(e, t(43)));
            },
            27: function (e, t) {
                var n = {}.hasOwnProperty;
                e.exports = function (e, t) {
                    return n.call(e, t);
                };
            },
            28: function (e, t, n) {
                function r(e) {
                    return 'function' == typeof e ? e : void 0;
                }
                var i = n(48), o = n(26);
                e.exports = function (e, t) {
                    return arguments.length < 2 ? r(i[e]) || r(o[e]) : i[e] && i[e][t] || o[e] && o[e][t];
                };
            },
            29: function (e, t, n) {
                var r = n(30);
                e.exports = !r(function () {
                    return 7 != Object.defineProperty({}, 1, {
                        get: function () {
                            return 7;
                        }
                    })[1];
                });
            },
            3: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return S;
                }), n.d(t, 'b', function () {
                    return _;
                });
                var r = n(42), i = n(11), a = n.n(i), o = n(12), c = n.n(o), u = n(83), s = n.n(u), d = n(0);
                function f(e, t) {
                    if (null == e)
                        return {};
                    var n, r = function (e, t) {
                            if (null == e)
                                return {};
                            var n, r, i = {}, o = Object.keys(e);
                            for (r = 0; r < o.length; r++)
                                n = o[r], 0 <= t.indexOf(n) || (i[n] = e[n]);
                            return i;
                        }(e, t);
                    if (Object.getOwnPropertySymbols)
                        for (var i = Object.getOwnPropertySymbols(e), o = 0; o < i.length; o++)
                            n = i[o], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                    return r;
                }
                function l(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                function p(e) {
                    return (p = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function g() {
                    return (g = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var b = n(95), v = n(0), y = n(5), h = 'TRUE' === v.getParameterByName(y.DEBUG_MODE).toUpperCase(), m = window.location.origin, S = 'random', A = {};
                A[S] = !0, A.fixed = !0;
                var E = S, O = {
                        LOW: 'low',
                        MEDIUM: 'medium',
                        HIGH: 'high',
                        AUTO: 'auto',
                        DENSE: 'dense',
                        CUSTOM: 'custom'
                    };
                var T, I, C, j, w, _ = (j = [], w = null, B(), {
                        getCurrentBidder: function () {
                            return w;
                        },
                        resetBidder: N,
                        getConfig: function () {
                            if (arguments.length <= 1 && 'function' != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                                var e = arguments.length <= 0 ? void 0 : arguments[0];
                                return e ? v.deepAccess(U(), e) : U();
                            }
                            return function (e, t) {
                                var n = t;
                                if ('string' != typeof e && (n = e, e = '*'), 'function' == typeof n) {
                                    var r = {
                                        topic: e,
                                        callback: n
                                    };
                                    return j.push(r), function () {
                                        j.splice(j.indexOf(r), 1);
                                    };
                                }
                                v.logError('listener must be a function');
                            }.apply(void 0, arguments);
                        },
                        setConfig: function (r) {
                            var e, i;
                            v.isPlainObject(r) ? (e = Object.keys(r), i = {}, e.forEach(function (e) {
                                var t = 'fpd' === e ? 'ortb2' : e, n = 'fpd' === e ? x(r[e]) : r[e];
                                v.isPlainObject(T[t]) && v.isPlainObject(n) && (n = g({}, T[t], n)), i[t] = I[t] = n;
                            }), D(i)) : v.logError('setConfig options must be an object');
                        },
                        setDefaults: function (e) {
                            v.isPlainObject(T) ? (g(T, e), g(I, e)) : v.logError('defaults must be an object');
                        },
                        resetConfig: B,
                        runWithBidder: k,
                        callbackWithBidder: function (o) {
                            return function (i) {
                                return function () {
                                    if ('function' == typeof i) {
                                        for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                                            n[r] = arguments[r];
                                        return k(o, (e = v.bind).call.apply(e, [
                                            i,
                                            this
                                        ].concat(n)));
                                    }
                                    v.logWarn('config.callbackWithBidder callback is not a function');
                                };
                            };
                        },
                        setBidderConfig: function (i) {
                            try {
                                !function (e) {
                                    if (!v.isPlainObject(e))
                                        throw 'setBidderConfig bidder options must be an object';
                                    if (!Array.isArray(e.bidders) || !e.bidders.length)
                                        throw 'setBidderConfig bidder options must contain a bidders list with at least 1 bidder';
                                    if (!v.isPlainObject(e.config))
                                        throw 'setBidderConfig bidder options must contain a config object';
                                }(i), i.bidders.forEach(function (r) {
                                    C[r] || (C[r] = {}), Object.keys(i.config).forEach(function (e) {
                                        var t = 'fpd' === e ? 'ortb2' : e, n = 'fpd' === e ? x(i.config[e]) : i.config[e];
                                        v.isPlainObject(n) ? C[r][t] = g({}, C[r][t] || {}, n) : C[r][t] = n;
                                    });
                                });
                            } catch (e) {
                                v.logError(e);
                            }
                        },
                        getBidderConfig: function () {
                            return C;
                        },
                        convertAdUnitFpd: function (e) {
                            var t = [];
                            return e.forEach(function (e) {
                                e.fpd ? (e.ortb2Imp ? v.mergeDeep(e.ortb2Imp, R(e.fpd)) : e.ortb2Imp = R(e.fpd), t.push((e.fpd, f(e, ['fpd'])))) : t.push(e);
                            }), t;
                        },
                        getLegacyFpd: function (r) {
                            if ('object' === p(r)) {
                                var t = {};
                                return Object.keys(r).forEach(function (n) {
                                    var e = 'site' === n ? 'context' : n;
                                    t[e] = 'context' === e || 'user' === e ? Object.keys(r[n]).filter(function (e) {
                                        return 'data' !== e;
                                    }).reduce(function (e, t) {
                                        return 'ext' === t ? v.mergeDeep(e, r[n][t]) : v.mergeDeep(e, l({}, t, r[n][t])), e;
                                    }, {}) : r[n];
                                }), t;
                            }
                        },
                        getLegacyImpFpd: function (t) {
                            if ('object' === p(t)) {
                                var n = {};
                                return v.deepAccess(t, 'ext.data') && Object.keys(t.ext.data).forEach(function (e) {
                                    'pbadslot' === e ? v.mergeDeep(n, { context: { pbAdSlot: t.ext.data[e] } }) : 'adserver' === e ? v.mergeDeep(n, { context: { adServer: t.ext.data[e] } }) : v.mergeDeep(n, { context: { data: l({}, e, t.ext.data[e]) } });
                                }), n;
                            }
                        }
                    });
                function B() {
                    T = {};
                    var n = {
                        _debug: h,
                        get debug() {
                            return this._debug;
                        },
                        set debug(e) {
                            this._debug = e;
                        },
                        _bidderTimeout: 3000,
                        get bidderTimeout() {
                            return this._bidderTimeout;
                        },
                        set bidderTimeout(e) {
                            this._bidderTimeout = e;
                        },
                        _publisherDomain: m,
                        get publisherDomain() {
                            return this._publisherDomain;
                        },
                        set publisherDomain(e) {
                            this._publisherDomain = e;
                        },
                        _priceGranularity: O.MEDIUM,
                        set priceGranularity(e) {
                            o(e) && ('string' == typeof e ? this._priceGranularity = i(e) ? e : O.MEDIUM : v.isPlainObject(e) && (this._customPriceBucket = e, this._priceGranularity = O.CUSTOM, v.logMessage('Using custom price granularity')));
                        },
                        get priceGranularity() {
                            return this._priceGranularity;
                        },
                        _customPriceBucket: {},
                        get customPriceBucket() {
                            return this._customPriceBucket;
                        },
                        _mediaTypePriceGranularity: {},
                        get mediaTypePriceGranularity() {
                            return this._mediaTypePriceGranularity;
                        },
                        set mediaTypePriceGranularity(n) {
                            var r = this;
                            this._mediaTypePriceGranularity = Object.keys(n).reduce(function (e, t) {
                                return o(n[t]) ? 'string' == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : v.isPlainObject(n) && (e[t] = n[t], v.logMessage('Using custom price granularity for '.concat(t))) : v.logWarn('Invalid price granularity for media type: '.concat(t)), e;
                            }, {});
                        },
                        _sendAllBids: !0,
                        get enableSendAllBids() {
                            return this._sendAllBids;
                        },
                        set enableSendAllBids(e) {
                            this._sendAllBids = e;
                        },
                        _useBidCache: !1,
                        get useBidCache() {
                            return this._useBidCache;
                        },
                        set useBidCache(e) {
                            this._useBidCache = e;
                        },
                        _deviceAccess: !0,
                        get deviceAccess() {
                            return this._deviceAccess;
                        },
                        set deviceAccess(e) {
                            this._deviceAccess = e;
                        },
                        _bidderSequence: E,
                        get bidderSequence() {
                            return this._bidderSequence;
                        },
                        set bidderSequence(e) {
                            A[e] ? this._bidderSequence = e : v.logWarn('Invalid order: '.concat(e, '. Bidder Sequence was not set.'));
                        },
                        _timeoutBuffer: 400,
                        get timeoutBuffer() {
                            return this._timeoutBuffer;
                        },
                        set timeoutBuffer(e) {
                            this._timeoutBuffer = e;
                        },
                        _disableAjaxTimeout: !1,
                        get disableAjaxTimeout() {
                            return this._disableAjaxTimeout;
                        },
                        set disableAjaxTimeout(e) {
                            this._disableAjaxTimeout = e;
                        },
                        _maxNestedIframes: 10,
                        get maxNestedIframes() {
                            return this._maxNestedIframes;
                        },
                        set maxNestedIframes(e) {
                            this._maxNestedIframes = e;
                        },
                        _auctionOptions: {},
                        get auctionOptions() {
                            return this._auctionOptions;
                        },
                        set auctionOptions(e) {
                            !function (e) {
                                if (!v.isPlainObject(e))
                                    return v.logWarn('Auction Options must be an object'), !1;
                                for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                                    var r = n[t];
                                    if ('secondaryBidders' !== r && 'suppressStaleRender' !== r)
                                        return v.logWarn('Auction Options given an incorrect param: '.concat(r)), !1;
                                    if ('secondaryBidders' === r) {
                                        if (!v.isArray(e[r]))
                                            return v.logWarn('Auction Options '.concat(r, ' must be of type Array')), !1;
                                        if (!e[r].every(v.isStr))
                                            return v.logWarn('Auction Options '.concat(r, ' must be only string')), !1;
                                    } else if ('suppressStaleRender' === r && !v.isBoolean(e[r]))
                                        return v.logWarn('Auction Options '.concat(r, ' must be of type boolean')), !1;
                                }
                                return !0;
                            }(e) || (this._auctionOptions = e);
                        }
                    };
                    function i(t) {
                        return a()(Object.keys(O), function (e) {
                            return t === O[e];
                        });
                    }
                    function o(e) {
                        if (e) {
                            if ('string' == typeof e)
                                i(e) || v.logWarn('Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.');
                            else if (v.isPlainObject(e) && !Object(r.b)(e))
                                return void v.logError('Invalid custom price value passed to `setPriceGranularity()`');
                            return 1;
                        }
                        v.logError('Prebid Error: no value passed to `setPriceGranularity()`');
                    }
                    I && D(Object.keys(I).reduce(function (e, t) {
                        return I[t] !== n[t] && (e[t] = n[t] || {}), e;
                    }, {})), I = n, C = {};
                }
                function U() {
                    if (w && C && v.isPlainObject(C[w])) {
                        var n = C[w], e = new s.a(Object.keys(I).concat(Object.keys(n)));
                        return b(e).reduce(function (e, t) {
                            return void 0 === n[t] ? e[t] = I[t] : void 0 !== I[t] && v.isPlainObject(n[t]) ? e[t] = Object(d.mergeDeep)({}, I[t], n[t]) : e[t] = n[t], e;
                        }, {});
                    }
                    return g({}, I);
                }
                function x(r) {
                    var t = {};
                    return Object.keys(r).forEach(function (n) {
                        var e = 'context' === n ? 'site' : n;
                        t[e] = 'site' === e || 'user' === e ? Object.keys(r[n]).reduce(function (e, t) {
                            return 'data' === t ? v.mergeDeep(e, { ext: { data: r[n][t] } }) : v.mergeDeep(e, l({}, t, r[n][t])), e;
                        }, {}) : r[n];
                    }), t;
                }
                function R(r) {
                    var i = {};
                    return Object.keys(r).filter(function (e) {
                        return 'context' === e;
                    }).forEach(function (n) {
                        Object.keys(r[n]).forEach(function (t) {
                            'data' === t ? v.mergeDeep(i, { ext: { data: r[n][t] } }) : 'object' !== p(r[n][t]) || Array.isArray(r[n][t]) ? v.mergeDeep(i, { ext: { data: l({}, t.toLowerCase(), r[n][t]) } }) : Object.keys(r[n][t]).forEach(function (e) {
                                v.mergeDeep(i, { ext: { data: l({}, t.toLowerCase(), l({}, e.toLowerCase(), r[n][t][e])) } });
                            });
                        });
                    }), i;
                }
                function D(t) {
                    var n = Object.keys(t);
                    j.filter(function (e) {
                        return c()(n, e.topic);
                    }).forEach(function (e) {
                        e.callback(l({}, e.topic, t[e.topic]));
                    }), j.filter(function (e) {
                        return '*' === e.topic;
                    }).forEach(function (e) {
                        return e.callback(t);
                    });
                }
                function k(e, t) {
                    w = e;
                    try {
                        return t();
                    } finally {
                        N();
                    }
                }
                function N() {
                    w = null;
                }
            },
            30: function (e, t) {
                e.exports = function (e) {
                    try {
                        return !!e();
                    } catch (e) {
                        return !0;
                    }
                };
            },
            308: function (e, t, n) {
                n(309);
                var r = n(51);
                e.exports = r('String', 'includes');
            },
            309: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(310), o = n(47);
                r({
                    target: 'String',
                    proto: !0,
                    forced: !n(312)('includes')
                }, {
                    includes: function (e, t) {
                        return !!~String(o(this)).indexOf(i(e), 1 < arguments.length ? t : void 0);
                    }
                });
            },
            31: function (e, t) {
                e.exports = function (e) {
                    return 'object' == typeof e ? null !== e : 'function' == typeof e;
                };
            },
            310: function (e, t, n) {
                var r = n(311);
                e.exports = function (e) {
                    if (r(e))
                        throw TypeError('The method doesn\'t accept regular expressions');
                    return e;
                };
            },
            311: function (e, t, n) {
                var r = n(31), i = n(46), o = n(22)('match');
                e.exports = function (e) {
                    var t;
                    return r(e) && (void 0 !== (t = e[o]) ? !!t : 'RegExp' == i(e));
                };
            },
            312: function (e, t, n) {
                var r = n(22)('match');
                e.exports = function (t) {
                    var n = /./;
                    try {
                        '/./'[t](n);
                    } catch (e) {
                        try {
                            return n[r] = !1, '/./'[t](n);
                        } catch (e) {
                        }
                    }
                    return !1;
                };
            },
            32: function (e, t, n) {
                var r = n(29), i = n(34), o = n(44);
                e.exports = r ? function (e, t, n) {
                    return i.f(e, t, o(1, n));
                } : function (e, t, n) {
                    return e[t] = n, e;
                };
            },
            33: function (e, t, n) {
                'use strict';
                n.d(t, 'b', function () {
                    return L;
                }), n.d(t, 'a', function () {
                    return F;
                }), t.k = function (e) {
                    var t, i, b, v, o = e.adUnits, n = e.adUnitCodes, r = e.callback, a = e.cbTimeout, c = e.labels, u = e.auctionId, y = o, s = c, d = n, h = [], f = [], l = [], p = u || P.generateUUID(), g = r, m = a, S = [], A = new Set();
                    function E() {
                        return {
                            auctionId: p,
                            timestamp: t,
                            auctionEnd: i,
                            auctionStatus: b,
                            adUnits: y,
                            adUnitCodes: d,
                            labels: s,
                            bidderRequests: h,
                            noBids: l,
                            bidsReceived: f,
                            winningBids: S,
                            timeout: m
                        };
                    }
                    function O(n, e) {
                        var r, t;
                        e && clearTimeout(v), void 0 === i && (r = [], n && (P.logMessage('Auction '.concat(p, ' timedOut')), t = A, (r = h.map(function (e) {
                            return (e.bids || []).filter(function (e) {
                                return !t.has(e.bidder);
                            });
                        }).reduce(j.flatten, []).map(function (e) {
                            return {
                                bidId: e.bidId,
                                bidder: e.bidder,
                                adUnitCode: e.adUnitCode,
                                auctionId: e.auctionId
                            };
                        })).length && q.emit(G.EVENTS.BID_TIMEOUT, r)), b = F, i = Date.now(), q.emit(G.EVENTS.AUCTION_END, E()), Q(y, function () {
                            try {
                                var e;
                                null != g && (e = f.filter(P.bind.call(j.adUnitsFilter, this, d)).reduce(ee, {}), g.apply(pbjs, [
                                    e,
                                    n,
                                    p
                                ]), g = null);
                            } catch (e) {
                                P.logError('Error executing bidsBackHandler', null, e);
                            } finally {
                                r.length && M.callTimedOutBidders(o, r, m);
                                var t = B.b.getConfig('userSync') || {};
                                t.enableOverride || N(t.syncDelay);
                            }
                        }));
                    }
                    function T() {
                        B.b.resetBidder(), P.logInfo('Bids Received for Auction with id: '.concat(p), f), b = F, O(!1, !0);
                    }
                    function I(e) {
                        A.add(e);
                    }
                    function C(n) {
                        var f = this;
                        n.forEach(function (e) {
                            var t;
                            t = e, h = h.concat(t);
                        });
                        var l = {}, e = {
                                bidRequests: n,
                                run: function () {
                                    var e, t;
                                    e = O.bind(null, !0), t = setTimeout(e, m), v = t, b = L, q.emit(G.EVENTS.AUCTION_INIT, E());
                                    var r, i, o, a, c, u, s = (r = T, i = f, o = 0, a = !1, c = new Set(), u = {}, {
                                            addBidResponse: function (e, t) {
                                                u[t.requestId] = !0, o++;
                                                var n = function (e) {
                                                    var t = e.adUnitCode, n = e.bid, r = e.bidderRequest, i = e.auctionId, o = r.start, a = k({}, n, {
                                                            auctionId: i,
                                                            responseTimestamp: Object(j.timestamp)(),
                                                            requestTimestamp: o,
                                                            cpm: parseFloat(n.cpm) || 0,
                                                            bidder: n.bidderCode,
                                                            adUnitCode: t
                                                        });
                                                    a.timeToRespond = a.responseTimestamp - a.requestTimestamp, q.emit(G.EVENTS.BID_ADJUSTMENT, a);
                                                    var c = r.bids && U()(r.bids, function (e) {
                                                            return e.adUnitCode == t && e.bidId == a.requestId;
                                                        }), u = c && c.renderer, s = a.mediaType, d = c && c.mediaTypes && c.mediaTypes[s], f = d && d.renderer, l = null;
                                                    f && f.url && f.render && (!0 !== f.backupOnly || !n.renderer) ? l = f : u && u.url && u.render && (!0 !== u.backupOnly || !n.renderer) && (l = u), l && (a.renderer = _.a.install({ url: l.url }), a.renderer.setRender(l.render));
                                                    var p = Z(n.mediaType, c, B.b.getConfig('mediaTypePriceGranularity')), g = Object(w.a)(a.cpm, 'object' === D(p) ? p : B.b.getConfig('customPriceBucket'), B.b.getConfig('currency.granularityMultiplier'));
                                                    return a.pbLg = g.low, a.pbMg = g.med, a.pbHg = g.high, a.pbAg = g.auto, a.pbDg = g.dense, a.pbCg = g.custom, a;
                                                }({
                                                    adUnitCode: e,
                                                    bid: t,
                                                    bidderRequest: this,
                                                    auctionId: i.getAuctionId()
                                                });
                                                'video' === n.mediaType ? function (e, t, n, r) {
                                                    var i = !0, o = Object(j.getBidRequest)(t.originalRequestId || t.requestId, [n]), a = o && Object(j.deepAccess)(o, 'mediaTypes.video'), c = a && Object(j.deepAccess)(a, 'context');
                                                    B.b.getConfig('cache.url') && c !== R.b && (!t.videoCacheKey || B.b.getConfig('cache.ignoreBidderCacheKey') ? (i = !1, X(e, t, r, o)) : t.vastUrl || (P.logError('videoCacheKey specified but not required vastUrl for video bid'), i = !1)), i && ($(e, t), r());
                                                }(i, n, this, d) : ($(i, n), d());
                                            },
                                            adapterDone: function () {
                                                var t, e = i.getBidRequests(), n = B.b.getConfig('auctionOptions');
                                                c.add(this), !n || P.isEmpty(n) || (t = n.secondaryBidders) && !e.every(function (e) {
                                                    return x()(t, e.bidderCode);
                                                }) && (e = e.filter(function (e) {
                                                    return !x()(t, e.bidderCode);
                                                })), a = e.every(function (e) {
                                                    return c.has(e);
                                                }), this.bids.forEach(function (e) {
                                                    u[e.bidId] || (i.addNoBid(e), q.emit(G.EVENTS.NO_BID, e));
                                                }), a && 0 === o && r();
                                            }
                                        });
                                    function d() {
                                        o--, a && 0 === o && r();
                                    }
                                    M.callBids(y, n, function () {
                                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                                            t[n] = arguments[n];
                                        J.apply({
                                            dispatch: s.addBidResponse,
                                            bidderRequest: this
                                        }, t);
                                    }, s.adapterDone, {
                                        request: function (e, t) {
                                            g(V, t), g(l, e), H[e] || (H[e] = {
                                                SRA: !0,
                                                origin: t
                                            }), 1 < l[e] && (H[e].SRA = !1);
                                        },
                                        done: function (e) {
                                            V[e]--, K[0] && p(K[0]) && K.shift();
                                        }
                                    }, m, I);
                                }
                            };
                        function p(e) {
                            var r = !0, i = B.b.getConfig('maxRequestsPerOrigin') || z;
                            return e.bidRequests.some(function (e) {
                                var t = 1, n = void 0 !== e.src && e.src === G.S2S.SRC ? 's2s' : e.bidderCode;
                                return H[n] && (!1 === H[n].SRA && (t = Math.min(e.bids.length, i)), V[H[n].origin] + t > i && (r = !1)), !r;
                            }), r && e.run(), r;
                        }
                        function g(e, t) {
                            void 0 === e[t] ? e[t] = 1 : e[t]++;
                        }
                        p(e) || (P.logWarn('queueing auction due to limited endpoint capacity'), K.push(e));
                    }
                    return {
                        addBidReceived: function (e) {
                            f = f.concat(e);
                        },
                        addNoBid: function (e) {
                            l = l.concat(e);
                        },
                        executeCallback: O,
                        callBids: function () {
                            b = W, t = Date.now();
                            var e = M.makeBidRequests(y, t, p, m, s);
                            P.logInfo('Bids Requested for Auction with id: '.concat(p), e), e.length < 1 ? (P.logWarn('No valid bid requests returned for auction'), T()) : Y.call({
                                dispatch: C,
                                context: this
                            }, e);
                        },
                        addWinningBid: function (e) {
                            S = S.concat(e), M.callBidWonBidder(e.bidder, e, o);
                        },
                        setBidTargeting: function (e) {
                            M.callSetTargetingBidder(e.bidder, e);
                        },
                        getWinningBids: function () {
                            return S;
                        },
                        getTimeout: function () {
                            return m;
                        },
                        getAuctionId: function () {
                            return p;
                        },
                        getAuctionStatus: function () {
                            return b;
                        },
                        getAdUnits: function () {
                            return y;
                        },
                        getAdUnitCodes: function () {
                            return d;
                        },
                        getBidRequests: function () {
                            return h;
                        },
                        getBidsReceived: function () {
                            return f;
                        },
                        getNoBids: function () {
                            return l;
                        }
                    };
                }, n.d(t, 'c', function () {
                    return J;
                }), n.d(t, 'e', function () {
                    return Y;
                }), t.g = d, t.d = $, n.d(t, 'f', function () {
                    return X;
                }), n.d(t, 'i', function () {
                    return f;
                }), n.d(t, 'h', function () {
                    return l;
                }), t.j = g;
                var j = n(0), w = n(42), a = n(36), o = n(97), _ = n(13), B = n(3), r = n(54), i = n(10), c = n(11), U = n.n(c), u = n(12), x = n.n(u), R = n(25), s = n(2);
                function D(e) {
                    return (D = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function k() {
                    return (k = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var N = r.a.syncUsers, P = n(0), M = n(7).default, q = n(8), G = n(5), W = 'started', L = 'inProgress', F = 'completed';
                q.on(G.EVENTS.BID_ADJUSTMENT, function (e) {
                    !function (e) {
                        var t, n = e.bidderCode, r = e.cpm;
                        if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && 'function' == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD] && 'function' == typeof pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t))
                            try {
                                r = t(e.cpm, k({}, e));
                            } catch (e) {
                                P.logError('Error during bid adjustment', 'bidmanager.js', e);
                            }
                        0 <= r && (e.cpm = r);
                    }(e);
                });
                var z = 4, V = {}, H = {}, K = [];
                var J = Object(i.b)('async', function (e, t) {
                        this.dispatch.call(this.bidderRequest, e, t);
                    }, 'addBidResponse'), Y = Object(i.b)('sync', function (e) {
                        this.dispatch.call(this.context, e);
                    }, 'addBidderRequests'), Q = Object(i.b)('async', function (e, t) {
                        t && t();
                    }, 'bidsBackCallback');
                function d(e, t) {
                    t.timeToRespond > e.getTimeout() + B.b.getConfig('timeoutBuffer') && e.executeCallback(!0);
                }
                function $(e, t) {
                    var n = e.getBidRequests(), r = U()(n, function (e) {
                            return e.bidderCode === t.bidderCode;
                        });
                    !function (t, e) {
                        var n;
                        {
                            var r;
                            t.bidderCode && (0 < t.cpm || t.dealId) && (r = U()(e.bids, function (e) {
                                return e.adUnitCode === t.adUnitCode;
                            }), n = function (e, t, n) {
                                if (!t)
                                    return {};
                                var r = {}, i = pbjs.bidderSettings;
                                {
                                    var o;
                                    i && (o = g(t.mediaType, e, n), b(r, o, t), e && i[e] && i[e][G.JSON_MAPPING.ADSERVER_TARGETING] && (b(r, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting));
                                }
                                t.native && (r = k({}, r, Object(a.e)(t, n)));
                                return r;
                            }(t.bidderCode, t, r));
                        }
                        t.adserverTargeting = k(t.adserverTargeting || {}, n);
                    }(t, r), q.emit(G.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), d(e, t);
                }
                var X = Object(i.b)('async', function (n, r, i, e) {
                    Object(o.b)([r], function (e, t) {
                        e ? (P.logWarn('Failed to save to the video cache: '.concat(e, '. Video bid must be discarded.')), d(n, r)) : '' === t[0].uuid ? (P.logWarn('Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded.'), d(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), $(n, r), i());
                    }, e);
                }, 'callPrebidCache');
                function Z(e, t, n) {
                    if (e && n) {
                        if (e === s.d) {
                            var r = Object(j.deepAccess)(t, 'mediaTypes.'.concat(s.d, '.context'), 'instream');
                            if (n[''.concat(s.d, '-').concat(r)])
                                return n[''.concat(s.d, '-').concat(r)];
                        }
                        return n[e];
                    }
                }
                var f = function (e, t) {
                        var n = Z(e, t, B.b.getConfig('mediaTypePriceGranularity'));
                        return 'string' == typeof e && n ? 'string' == typeof n ? n : 'custom' : B.b.getConfig('priceGranularity');
                    }, l = function (t) {
                        return function (e) {
                            return t === G.GRANULARITY_OPTIONS.AUTO ? e.pbAg : t === G.GRANULARITY_OPTIONS.DENSE ? e.pbDg : t === G.GRANULARITY_OPTIONS.LOW ? e.pbLg : t === G.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : t === G.GRANULARITY_OPTIONS.HIGH ? e.pbHg : t === G.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0;
                        };
                    }, p = function () {
                        return function (e) {
                            return e.meta && e.meta.advertiserDomains && 0 < e.meta.advertiserDomains.length ? e.meta.advertiserDomains[0] : '';
                        };
                    };
                function g(e, t, n) {
                    function r(e, t) {
                        return {
                            key: e,
                            val: 'function' == typeof t ? function (e) {
                                return t(e);
                            } : function (e) {
                                return Object(j.getValue)(e, t);
                            }
                        };
                    }
                    var i, o, a = G.TARGETING_KEYS, c = f(e, n), u = pbjs.bidderSettings;
                    return u[G.JSON_MAPPING.BD_SETTING_STANDARD] || (u[G.JSON_MAPPING.BD_SETTING_STANDARD] = {}), u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING] || (u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING] = [
                        r(a.BIDDER, 'bidderCode'),
                        r(a.AD_ID, 'adId'),
                        r(a.PRICE_BUCKET, l(c)),
                        r(a.SIZE, 'size'),
                        r(a.DEAL, 'dealId'),
                        r(a.SOURCE, 'source'),
                        r(a.FORMAT, 'mediaType'),
                        r(a.ADOMAIN, p())
                    ]), 'video' === e && (i = u[G.JSON_MAPPING.BD_SETTING_STANDARD][G.JSON_MAPPING.ADSERVER_TARGETING], [
                        a.UUID,
                        a.CACHE_ID
                    ].forEach(function (t) {
                        void 0 === U()(i, function (e) {
                            return e.key === t;
                        }) && i.push(r(t, 'videoCacheKey'));
                    }), !B.b.getConfig('cache.url') || t && !1 === P.deepAccess(u, ''.concat(t, '.sendStandardTargeting')) || (o = Object(j.parseUrl)(B.b.getConfig('cache.url')), void 0 === U()(i, function (e) {
                        return e.key === a.CACHE_HOST;
                    }) && i.push(r(a.CACHE_HOST, function (e) {
                        return P.deepAccess(e, 'adserverTargeting.'.concat(a.CACHE_HOST)) ? e.adserverTargeting[a.CACHE_HOST] : o.hostname;
                    })))), u[G.JSON_MAPPING.BD_SETTING_STANDARD];
                }
                function b(r, i, o) {
                    var e = i[G.JSON_MAPPING.ADSERVER_TARGETING];
                    return o.size = o.getSize(), P._each(e, function (e) {
                        var t = e.key, n = e.val;
                        if (r[t] && P.logWarn('The key: ' + t + ' is getting ovewritten'), P.isFn(n))
                            try {
                                n = n(o);
                            } catch (e) {
                                P.logError('bidmanager', 'ERROR', e);
                            }
                        (void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== G.TARGETING_KEYS.DEAL || !P.isEmptyStr(n) && null != n ? r[t] = n : P.logInfo('suppressing empty key \'' + t + '\' from adserver targeting');
                    }), r;
                }
                function ee(e, t) {
                    return e[t.adUnitCode] || (e[t.adUnitCode] = { bids: [] }), e[t.adUnitCode].bids.push(t), e;
                }
            },
            34: function (e, t, n) {
                var r = n(29), i = n(77), o = n(15), a = n(55), c = Object.defineProperty;
                t.f = r ? c : function (e, t, n) {
                    if (o(e), t = a(t, !0), o(n), i)
                        try {
                            return c(e, t, n);
                        } catch (e) {
                        }
                    if ('get' in n || 'set' in n)
                        throw TypeError('Accessors not supported');
                    return 'value' in n && (e[t] = n.value), e;
                };
            },
            35: function (e, t, n) {
                var r = n(17), i = n(94);
                e.exports = r ? i : function (e) {
                    return Set.prototype.values.call(e);
                };
            },
            36: function (e, t, n) {
                'use strict';
                n.d(t, 'f', function () {
                    return o;
                }), n.d(t, 'a', function () {
                    return u;
                }), t.h = function (e) {
                    if (e && e.type && function (e) {
                            return !(!e || !a()(Object.keys(s), e)) || (Object(d.logError)(''.concat(e, ' nativeParam is not supported')), !1);
                        }(e.type))
                        return s[e.type];
                    return e;
                }, t.g = function (t, e) {
                    var n = Object(d.getBidRequest)(t.requestId, e);
                    if (!n)
                        return !1;
                    if (!Object(d.deepAccess)(t, 'native.clickUrl'))
                        return !1;
                    var r = n.nativeParams;
                    if (!r)
                        return !0;
                    var i = Object.keys(r).filter(function (e) {
                            return r[e].required;
                        }), o = Object.keys(t.native).filter(function (e) {
                            return t.native[e];
                        });
                    return i.every(function (e) {
                        return a()(o, e);
                    });
                }, t.b = function (e, t) {
                    var n;
                    'click' === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && Object(d.insertHtmlIntoIframe)(t.native.javascriptTrackers));
                    return (n || []).forEach(d.triggerPixel), e.action;
                }, t.e = function (o, a) {
                    var c = {};
                    Object(d.deepAccess)(a, 'nativeParams.rendererUrl') ? o.native.rendererUrl = p(a.nativeParams.rendererUrl) : Object(d.deepAccess)(a, 'nativeParams.adTemplate') && (o.native.adTemplate = p(a.nativeParams.adTemplate));
                    var u = !1 !== Object(d.deepAccess)(a, 'nativeParams.sendTargetingKeys'), s = function (e) {
                            var t = {};
                            Object(d.deepAccess)(e, 'nativeParams.ext') && Object.keys(e.nativeParams.ext).forEach(function (e) {
                                t[e] = 'hb_native_'.concat(e);
                            });
                            return f(f({}, l.NATIVE_KEYS), t);
                        }(a), e = f(f({}, o.native), o.native.ext);
                    return delete e.ext, Object.keys(e).forEach(function (e) {
                        var t, n, r = s[e], i = p(o.native[e]) || p(Object(d.deepAccess)(o, 'native.ext.'.concat(e)));
                        'adTemplate' !== e && r && i && ('boolean' != typeof (t = Object(d.deepAccess)(a, 'nativeParams.'.concat(e, '.sendId'))) && (t = Object(d.deepAccess)(a, 'nativeParams.ext.'.concat(e, '.sendId'))), t && (i = ''.concat(r, ':').concat(o.adId)), 'boolean' != typeof (n = Object(d.deepAccess)(a, 'nativeParams.'.concat(e, '.sendTargetingKeys'))) && (n = Object(d.deepAccess)(a, 'nativeParams.ext.'.concat(e, '.sendTargetingKeys'))), ('boolean' == typeof n ? n : u) && (c[r] = i));
                    }), c;
                }, t.d = function (e, r) {
                    var i = {
                        message: 'assetResponse',
                        adId: e.adId,
                        assets: []
                    };
                    r.native.hasOwnProperty('adTemplate') && (i.adTemplate = p(r.native.adTemplate));
                    r.native.hasOwnProperty('rendererUrl') && (i.rendererUrl = p(r.native.rendererUrl));
                    return e.assets.forEach(function (e) {
                        var t = Object(d.getKeyByValue)(l.NATIVE_KEYS, e), n = p(r.native[t]);
                        i.assets.push({
                            key: t,
                            value: n
                        });
                    }), i;
                }, t.c = function (e, r) {
                    var i = {
                        message: 'assetResponse',
                        adId: e.adId,
                        assets: []
                    };
                    return Object.keys(r.native).forEach(function (n, e) {
                        var t;
                        'adTemplate' === n && r.native[n] ? i.adTemplate = p(r.native[n]) : 'rendererUrl' === n && r.native[n] ? i.rendererUrl = p(r.native[n]) : 'ext' === n ? Object.keys(r.native[n]).forEach(function (e) {
                            var t;
                            r.native[n][e] && (t = p(r.native[n][e]), i.assets.push({
                                key: e,
                                value: t
                            }));
                        }) : r.native[n] && l.NATIVE_KEYS.hasOwnProperty(n) && (t = p(r.native[n]), i.assets.push({
                            key: n,
                            value: t
                        }));
                    }), i;
                };
                var d = n(0), r = n(12), a = n.n(r);
                function i(e) {
                    return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function c(t, e) {
                    var n, r = Object.keys(t);
                    return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), r.push.apply(r, n)), r;
                }
                function f(i) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? c(Object(o), !0).forEach(function (e) {
                            var t, n, r;
                            t = i, r = o[n = e], n in t ? Object.defineProperty(t, n, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[n] = r;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : c(Object(o)).forEach(function (e) {
                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                        });
                    }
                    return i;
                }
                var l = n(5), o = [], u = Object.keys(l.NATIVE_KEYS).map(function (e) {
                        return l.NATIVE_KEYS[e];
                    }), s = {
                        image: {
                            image: { required: !0 },
                            title: { required: !0 },
                            sponsoredBy: { required: !0 },
                            clickUrl: { required: !0 },
                            body: { required: !1 },
                            icon: { required: !1 }
                        }
                    };
                function p(e) {
                    return 'object' === i(e) && e.url ? e.url : e;
                }
            },
            37: function (e, t) {
                e.exports = {};
            },
            38: function (e, t, n) {
                var i = n(15), o = n(20), a = n(22)('species');
                e.exports = function (e, t) {
                    var n, r = i(e).constructor;
                    return void 0 === r || null == (n = i(r)[a]) ? t : o(n);
                };
            },
            39: function (e, t, n) {
                'use strict';
                t.a = function (e, t) {
                    return new r(e, t);
                };
                var i = n(0);
                function r(e, t) {
                    var n = t && t.src || 'client', r = e || 0;
                    this.bidderCode = t && t.bidder || '', this.width = 0, this.height = 0, this.statusMessage = function () {
                        switch (r) {
                        case 0:
                            return 'Pending';
                        case 1:
                            return 'Bid available';
                        case 2:
                            return 'Bid returned empty or error response';
                        case 3:
                            return 'Bid timed out';
                        }
                    }(), this.adId = i.getUniqueIdentifierStr(), this.requestId = t && t.bidId, this.mediaType = 'banner', this.source = n, this.getStatusCode = function () {
                        return r;
                    }, this.getSize = function () {
                        return this.width + 'x' + this.height;
                    };
                }
            },
            4: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return r;
                }), t.b = i;
                var l = n(3);
                function p() {
                    return (p = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function g(e) {
                    return (g = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var b = n(0), v = 4, r = i();
                function i() {
                    var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3000, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, d = e.request, f = e.done;
                    return function (e, t, n) {
                        const $___old_30622c06e9694988 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_26aaa81130db54ab = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                        try {
                            if ($___old_30622c06e9694988)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_8520a5cab3fcb785.XMLHttpRequest));
                            if ($___old_26aaa81130db54ab)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_8520a5cab3fcb785.XMLHttpRequest));
                            return function () {
                                var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                                try {
                                    var i, o = r.method || (n ? 'POST' : 'GET'), a = document.createElement('a');
                                    a.href = e;
                                    var c, u = 'object' === g(t) && null !== t ? t : {
                                            success: function () {
                                                b.logMessage('xhr success');
                                            },
                                            error: function (e) {
                                                b.logError('xhr error', null, e);
                                            }
                                        };
                                    'function' == typeof t && (u.success = t), (i = new window.XMLHttpRequest()).onreadystatechange = function () {
                                        var e;
                                        i.readyState === v && ('function' == typeof f && f(a.origin), 200 <= (e = i.status) && e < 300 || 304 === e ? u.success(i.responseText, i) : u.error(i.statusText, i));
                                    }, l.b.getConfig('disableAjaxTimeout') || (i.ontimeout = function () {
                                        b.logError('  xhr timeout after ', i.timeout, 'ms');
                                    }), 'GET' === o && n && (p((c = b.parseUrl(e, r)).search, n), e = b.buildUrl(c)), i.open(o, e, !0), l.b.getConfig('disableAjaxTimeout') || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), b._each(r.customHeaders, function (e, t) {
                                        i.setRequestHeader(t, e);
                                    }), r.preflight && i.setRequestHeader('X-Requested-With', 'XMLHttpRequest'), i.setRequestHeader('Content-Type', r.contentType || 'text/plain'), 'function' == typeof d && d(a.origin), 'POST' === o && n ? i.send(n) : i.send();
                                } catch (e) {
                                    b.logError('xhr construction', e);
                                }
                            }.apply(this, arguments);
                        } finally {
                            if ($___old_30622c06e9694988)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_30622c06e9694988));
                            if ($___old_26aaa81130db54ab)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_26aaa81130db54ab));
                        }
                    };
                }
            },
            40: function (e, t, n) {
                'use strict';
                t.a = function (r, e, t) {
                    if (!e || !r)
                        return void o.logError('cannot load external script without url and moduleCode');
                    if (!i()(c, e))
                        return void o.logError(''.concat(e, ' not whitelisted for loading external JavaScript'));
                    if (a[r])
                        return t && 'function' == typeof t && (a[r].loaded ? t() : a[r].callbacks.push(t)), a[r].tag;
                    a[r] = {
                        loaded: !1,
                        tag: null,
                        callbacks: []
                    }, t && 'function' == typeof t && a[r].callbacks.push(t);
                    return o.logWarn('module '.concat(e, ' is loading external JavaScript')), function (e, t) {
                        var n = document.createElement('script');
                        n.type = 'text/javascript', n.async = !0, (a[r].tag = n).readyState ? n.onreadystatechange = function () {
                            'loaded' !== n.readyState && 'complete' !== n.readyState || (n.onreadystatechange = null, t());
                        } : n.onload = function () {
                            t();
                        };
                        return n.src = e, o.insertElement(n), n;
                    }(r, function () {
                        a[r].loaded = !0;
                        try {
                            for (var e = 0; e < a[r].callbacks.length; e++)
                                a[r].callbacks[e]();
                        } catch (e) {
                            o.logError('Error executing callback', 'adloader.js:loadExternalScript', e);
                        }
                    });
                };
                var r = n(12), i = n.n(r), o = n(0), a = {}, c = [
                        'adloox',
                        'criteo',
                        'outstream',
                        'adagio',
                        'browsi'
                    ];
            },
            41: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return d;
                }), n.d(t, 'b', function () {
                    return N;
                }), t.c = P, n.d(t, 'd', function () {
                    return l;
                });
                var T = n(0), I = n(3), C = n(36), r = n(23), i = n(96), o = n(2), a = n(10), c = n(12), j = n.n(c), u = n(11), w = n.n(u);
                function _() {
                    return (_ = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function B(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                function U(e) {
                    return function (e) {
                        if (Array.isArray(e))
                            return s(e);
                    }(e) || function (e) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                            return Array.from(e);
                    }(e) || function (e, t) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return s(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n && e.constructor && (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n)
                            return Array.from(e);
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return s(e, t);
                    }(e) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                var x = n(0), R = n(5), D = [], k = Object.keys(R.TARGETING_KEYS).map(function (e) {
                        return R.TARGETING_KEYS[e];
                    }), d = {
                        isBidNotExpired: function (e) {
                            return e.responseTimestamp + 1000 * e.ttl - 1000 > Object(T.timestamp)();
                        },
                        isUnusedBid: function (e) {
                            return e && (e.status && !j()([R.BID_STATUS.RENDERED], e.status) || !e.status);
                        }
                    }, N = Object(a.b)('sync', function (e, r) {
                        var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                        if (3 < arguments.length && void 0 !== arguments[3] && arguments[3])
                            return e;
                        var o = [], a = I.b.getConfig('sendBidsControl.dealPrioritization'), c = Object(T.groupBy)(e, 'adUnitCode');
                        return Object.keys(c).forEach(function (e) {
                            var t = [], n = Object(T.groupBy)(c[e], 'bidderCode');
                            Object.keys(n).forEach(function (e) {
                                return t.push(n[e].reduce(r));
                            }), 0 < i ? (t = a ? t.sort(P(!0)) : t.sort(function (e, t) {
                                return t.cpm - e.cpm;
                            }), o.push.apply(o, U(t.slice(0, i)))) : o.push.apply(o, U(t));
                        }), o;
                    });
                function P() {
                    var n = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return function (e, t) {
                        return void 0 !== e.adserverTargeting.hb_deal && void 0 === t.adserverTargeting.hb_deal ? -1 : void 0 === e.adserverTargeting.hb_deal && void 0 !== t.adserverTargeting.hb_deal ? 1 : n ? t.cpm - e.cpm : t.adserverTargeting.hb_pb - e.adserverTargeting.hb_pb;
                    };
                }
                var M, q, f, l = (M = r.a, f = {}, (q = {}).setLatestAuctionForAdUnit = function (e, t) {
                        f[e] = t;
                    }, q.resetPresetTargeting = function (e, t) {
                        var n, i;
                        Object(T.isGptPubadsDefined)() && (n = W(e), i = M.getAdUnits().filter(function (e) {
                            return j()(n, e.code);
                        }), window.googletag.pubads().getSlots().forEach(function (n) {
                            var r = x.isFn(t) && t(n);
                            D.forEach(function (t) {
                                i.forEach(function (e) {
                                    (e.code === n.getAdUnitPath() || e.code === n.getSlotElementId() || x.isFn(r) && r(e.code)) && n.setTargeting(t, null);
                                });
                            });
                        }));
                    }, q.resetPresetTargetingAST = function (e) {
                        W(e).forEach(function (e) {
                            var t, n, r = window.apntag.getTag(e);
                            r && r.keywords && (t = Object.keys(r.keywords), n = {}, t.forEach(function (e) {
                                j()(D, e.toLowerCase()) || (n[e] = r.keywords[e]);
                            }), window.apntag.modifyTag(e, { keywords: n }));
                        });
                    }, q.getAllTargeting = function (e) {
                        var t, n, r, i, o, a, c, u, s, d, f, l, p, g = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : L(), b = W(e), v = (d = b, f = g, l = q.getWinningBids(d, f), p = F(), (l = l.map(function (o) {
                                return B({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function (e) {
                                    return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === p.indexOf(e);
                                }).reduce(function (e, t) {
                                    var n = [o.adserverTargeting[t]], r = B({}, t.substring(0, 20), n);
                                    if (t !== R.TARGETING_KEYS.DEAL)
                                        return [].concat(U(e), [r]);
                                    var i = B({}, ''.concat(t, '_').concat(o.bidderCode).substring(0, 20), n);
                                    return [].concat(U(e), [
                                        r,
                                        i
                                    ]);
                                }, []));
                            })).concat((s = b, g.filter(function (e) {
                                return j()(s, e.adUnitCode);
                            }).map(function (e) {
                                return _({}, e);
                            }).reduce(z, []).map(V).filter(function (e) {
                                return e;
                            }))).concat(I.b.getConfig('enableSendAllBids') ? (n = b, r = g, i = k.concat(C.a), o = I.b.getConfig('sendBidsControl.bidLimit'), a = N(r, T.getHighestCpm, o), c = I.b.getConfig('targetingControls.allowSendAllBidsTargetingKeys'), u = c ? c.map(function (e) {
                                return R.TARGETING_KEYS[e];
                            }) : i, a.map(function (t) {
                                if (G(t, n))
                                    return B({}, t.adUnitCode, H(t, i.filter(function (e) {
                                        return void 0 !== t.adserverTargeting[e] && -1 !== u.indexOf(e);
                                    })));
                            }).filter(function (e) {
                                return e;
                            })) : function (e, t) {
                                if (!0 !== I.b.getConfig('targetingControls.alwaysIncludeDeals'))
                                    return [];
                                var n = k.concat(C.a);
                                return N(t, T.getHighestCpm).map(function (t) {
                                    if (t.dealId && G(t, e))
                                        return B({}, t.adUnitCode, H(t, n.filter(function (e) {
                                            return void 0 !== t.adserverTargeting[e];
                                        })));
                                }).filter(function (e) {
                                    return e;
                                });
                            }(b, g)).concat((t = b, M.getAdUnits().filter(function (e) {
                                return j()(t, e.code) && y(e);
                            }).map(function (e) {
                                return B({}, e.code, (t = y(e), Object.keys(t).map(function (e) {
                                    return B({}, e, x.isArray(t[e]) ? t[e] : t[e].split(','));
                                })));
                                var t;
                            }))));
                        function y(e) {
                            return Object(T.deepAccess)(e, R.JSON_MAPPING.ADSERVER_TARGETING);
                        }
                        v.map(function (t) {
                            Object.keys(t).map(function (e) {
                                t[e].map(function (e) {
                                    -1 === D.indexOf(Object.keys(e)[0]) && (D = Object.keys(e).concat(D));
                                });
                            });
                        });
                        var h = Object.keys(_({}, R.DEFAULT_TARGETING_KEYS, R.NATIVE_KEYS)), m = I.b.getConfig('targetingControls.allowTargetingKeys') || h;
                        Array.isArray(m) && 0 < m.length && (v = function (e, r) {
                            var i = _({}, R.TARGETING_KEYS, R.NATIVE_KEYS), o = Object.keys(i), a = {};
                            Object(T.logInfo)('allowTargetingKeys - allowed keys [ '.concat(r.map(function (e) {
                                return i[e];
                            }).join(', '), ' ]')), e.map(function (e) {
                                var t = Object.keys(e)[0], n = e[t].filter(function (e) {
                                        var n = Object.keys(e)[0], t = 0 === o.filter(function (e) {
                                                return 0 === n.indexOf(i[e]);
                                            }).length || w()(r, function (e) {
                                                var t = i[e];
                                                return 0 === n.indexOf(t);
                                            });
                                        return a[n] = !t, t;
                                    });
                                e[t] = n;
                            });
                            var t = Object.keys(a).filter(function (e) {
                                return a[e];
                            });
                            return Object(T.logInfo)('allowTargetingKeys - removed keys [ '.concat(t.join(', '), ' ]')), e.filter(function (e) {
                                return 0 < e[Object.keys(e)[0]].length;
                            });
                        }(v, m)), v = v.map(function (e) {
                            return B({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function (e) {
                                return B({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(', '));
                            }).reduce(function (e, t) {
                                return _(t, e);
                            }, {}));
                        }).reduce(function (e, t) {
                            var n = Object.keys(t)[0];
                            return e[n] = _({}, e[n], t[n]), e;
                        }, {});
                        var S, A, E, O = I.b.getConfig('targetingControls.auctionKeyMaxChars');
                        return O && (Object(T.logInfo)('Detected \'targetingControls.auctionKeyMaxChars\' was active for this auction; set with a limit of '.concat(O, ' characters.  Running checks on auction keys...')), S = v, A = O, E = Object(T.deepClone)(S), v = Object.keys(E).map(function (e) {
                            return {
                                adUnitCode: e,
                                adserverTargeting: E[e]
                            };
                        }).sort(P()).reduce(function (e, t, n, r) {
                            var i, o = (i = t.adserverTargeting, Object.keys(i).reduce(function (e, t) {
                                    return e + ''.concat(t, '%3d').concat(encodeURIComponent(i[t]), '%26');
                                }, ''));
                            n + 1 === r.length && (o = o.slice(0, -3));
                            var a = t.adUnitCode, c = o.length;
                            return c <= A ? (A -= c, Object(T.logInfo)('AdUnit \''.concat(a, '\' auction keys comprised of ').concat(c, ' characters.  Deducted from running threshold; new limit is ').concat(A), E[a]), e[a] = E[a]) : Object(T.logWarn)('The following keys for adUnitCode \''.concat(a, '\' exceeded the current limit of the \'auctionKeyMaxChars\' setting.\nThe key-set size was ').concat(c, ', the current allotted amount was ').concat(A, '.\n'), E[a]), n + 1 === r.length && 0 === Object.keys(e).length && Object(T.logError)('No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting.'), e;
                        }, {})), b.forEach(function (e) {
                            v[e] || (v[e] = {});
                        }), v;
                    }, q.setTargetingForGPT = function (i, e) {
                        window.googletag.pubads().getSlots().forEach(function (r) {
                            Object.keys(i).filter((e || Object(T.isAdUnitCodeMatchingSlot))(r)).forEach(function (n) {
                                return Object.keys(i[n]).forEach(function (t) {
                                    var e = i[n][t];
                                    'string' == typeof e && (e = e.split(',')), (e = 1 < e.length ? [e] : e).map(function (e) {
                                        return x.logMessage('Attempting to set key value for slot: '.concat(r.getSlotElementId(), ' key: ').concat(t, ' value: ').concat(e)), e;
                                    }).forEach(function (e) {
                                        r.setTargeting(t, e);
                                    });
                                });
                            });
                        });
                    }, q.getWinningBids = function (e) {
                        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : L(), t = W(e);
                        return n.filter(function (e) {
                            return j()(t, e.adUnitCode);
                        }).filter(function (e) {
                            return 0 < e.cpm;
                        }).map(function (e) {
                            return e.adUnitCode;
                        }).filter(T.uniques).map(function (t) {
                            return n.filter(function (e) {
                                return e.adUnitCode === t ? e : null;
                            }).reduce(T.getHighestCpm);
                        });
                    }, q.setTargetingForAst = function (e) {
                        var r = q.getAllTargeting(e);
                        try {
                            q.resetPresetTargetingAST(e);
                        } catch (e) {
                            x.logError('unable to reset targeting for AST' + e);
                        }
                        Object.keys(r).forEach(function (n) {
                            return Object.keys(r[n]).forEach(function (e) {
                                var t;
                                x.logMessage('Attempting to set targeting for targetId: '.concat(n, ' key: ').concat(e, ' value: ').concat(r[n][e])), (x.isStr(r[n][e]) || x.isArray(r[n][e])) && (t = {}, e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, { overrideKeyValue: !0 }));
                            });
                        });
                    }, q.isApntagDefined = function () {
                        if (window.apntag && x.isFn(window.apntag.setKeywords))
                            return !0;
                    }, q);
                function G(e, t) {
                    return e.adserverTargeting && t && (x.isArray(t) && j()(t, e.adUnitCode) || 'string' == typeof t && e.adUnitCode === t);
                }
                function W(e) {
                    return 'string' == typeof e ? [e] : x.isArray(e) ? e : M.getAdUnitCodes() || [];
                }
                function L() {
                    var e = M.getBidsReceived();
                    return I.b.getConfig('useBidCache') || (e = e.filter(function (e) {
                        return f[e.adUnitCode] === e.auctionId;
                    })), e = e.filter(function (e) {
                        return Object(T.deepAccess)(e, 'video.context') !== o.a;
                    }).filter(function (e) {
                        return 'banner' !== e.mediaType || Object(i.c)([
                            e.width,
                            e.height
                        ]);
                    }).filter(d.isUnusedBid).filter(d.isBidNotExpired), N(e, T.getOldestHighestCpmBid);
                }
                function F() {
                    return M.getStandardBidderAdServerTargeting().map(function (e) {
                        return e.key;
                    }).concat(k).filter(T.uniques);
                }
                function z(r, i, e, t) {
                    return Object.keys(i.adserverTargeting).filter(p()).forEach(function (e) {
                        var t, n;
                        r.length && r.filter((n = e, function (e) {
                            return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n];
                        })).forEach((t = e, function (e) {
                            x.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(T.uniques), delete i.adserverTargeting[t];
                        }));
                    }), r.push(i), r;
                }
                function p() {
                    var t = F().concat(C.a);
                    return function (e) {
                        return -1 === t.indexOf(e);
                    };
                }
                function V(t) {
                    return B({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(p()).map(function (e) {
                        return B({}, e.substring(0, 20), [t.adserverTargeting[e]]);
                    }));
                }
                function H(t, e) {
                    return e.map(function (e) {
                        return B({}, ''.concat(e, '_').concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]]);
                    });
                }
            },
            42: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return d;
                }), n.d(t, 'b', function () {
                    return h;
                });
                var r = n(11), v = n.n(r), i = n(0), y = 2, o = {
                        buckets: [{
                                max: 5,
                                increment: 0.5
                            }]
                    }, a = {
                        buckets: [{
                                max: 20,
                                increment: 0.1
                            }]
                    }, c = {
                        buckets: [{
                                max: 20,
                                increment: 0.01
                            }]
                    }, u = {
                        buckets: [
                            {
                                max: 3,
                                increment: 0.01
                            },
                            {
                                max: 8,
                                increment: 0.05
                            },
                            {
                                max: 20,
                                increment: 0.5
                            }
                        ]
                    }, s = {
                        buckets: [
                            {
                                max: 5,
                                increment: 0.05
                            },
                            {
                                max: 10,
                                increment: 0.1
                            },
                            {
                                max: 20,
                                increment: 0.5
                            }
                        ]
                    };
                function d(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1, r = parseFloat(e);
                    return isNaN(r) && (r = ''), {
                        low: '' === r ? '' : f(e, o, n),
                        med: '' === r ? '' : f(e, a, n),
                        high: '' === r ? '' : f(e, c, n),
                        auto: '' === r ? '' : f(e, s, n),
                        dense: '' === r ? '' : f(e, u, n),
                        custom: '' === r ? '' : f(e, t, n)
                    };
                }
                function f(n, e, r) {
                    var i = '';
                    if (!h(e))
                        return i;
                    var t, o, a, c, u, s, d, f, l, p = e.buckets.reduce(function (e, t) {
                            return e.max > t.max ? e : t;
                        }, { max: 0 }), g = 0, b = v()(e.buckets, function (e) {
                            if (n > p.max * r) {
                                var t = e.precision;
                                void 0 === t && (t = y), i = (e.max * r).toFixed(t);
                            } else {
                                if (n <= e.max * r && g * r <= n)
                                    return e.min = g, e;
                                g = e.max;
                            }
                        });
                    return b && (t = n, a = r, c = void 0 !== (o = b).precision ? o.precision : y, u = o.increment * a, s = o.min * a, d = Math.pow(10, c + 2), f = (t * d - s * d) / (u * d), l = Math.floor(f) * u + s, i = (l = Number(l.toFixed(10))).toFixed(c)), i;
                }
                function h(e) {
                    if (i.isEmpty(e) || !e.buckets || !Array.isArray(e.buckets))
                        return !1;
                    var t = !0;
                    return e.buckets.forEach(function (e) {
                        e.max && e.increment || (t = !1);
                    }), t;
                }
            },
            43: function (e, t) {
                var n = function () {
                    return this;
                }();
                try {
                    n = n || Function('return this')() || (0, eval)('this');
                } catch (e) {
                    'object' == typeof window && (n = window);
                }
                e.exports = n;
            },
            44: function (e, t) {
                e.exports = function (e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    };
                };
            },
            45: function (e, t, n) {
                var r = n(76), i = n(47);
                e.exports = function (e) {
                    return r(i(e));
                };
            },
            46: function (e, t) {
                var n = {}.toString;
                e.exports = function (e) {
                    return n.call(e).slice(8, -1);
                };
            },
            47: function (e, t) {
                e.exports = function (e) {
                    if (null == e)
                        throw TypeError('Can\'t call method on ' + e);
                    return e;
                };
            },
            48: function (e, t) {
                e.exports = {};
            },
            49: function (e, t, n) {
                var r = n(58), i = Math.min;
                e.exports = function (e) {
                    return 0 < e ? i(r(e), 9007199254740991) : 0;
                };
            },
            5: function (e, t) {
                e.exports = {
                    JSON_MAPPING: {
                        PL_CODE: 'code',
                        PL_SIZE: 'sizes',
                        PL_BIDS: 'bids',
                        BD_BIDDER: 'bidder',
                        BD_ID: 'paramsd',
                        BD_PL_ID: 'placementId',
                        ADSERVER_TARGETING: 'adserverTargeting',
                        BD_SETTING_STANDARD: 'standard'
                    },
                    DEBUG_MODE: 'pbjs_debug',
                    STATUS: {
                        GOOD: 1,
                        NO_BID: 2
                    },
                    CB: {
                        TYPE: {
                            ALL_BIDS_BACK: 'allRequestedBidsBack',
                            AD_UNIT_BIDS_BACK: 'adUnitBidsBack',
                            BID_WON: 'bidWon',
                            REQUEST_BIDS: 'requestBids'
                        }
                    },
                    EVENTS: {
                        AUCTION_INIT: 'auctionInit',
                        AUCTION_END: 'auctionEnd',
                        BID_ADJUSTMENT: 'bidAdjustment',
                        BID_TIMEOUT: 'bidTimeout',
                        BID_REQUESTED: 'bidRequested',
                        BID_RESPONSE: 'bidResponse',
                        NO_BID: 'noBid',
                        BID_WON: 'bidWon',
                        BIDDER_DONE: 'bidderDone',
                        SET_TARGETING: 'setTargeting',
                        BEFORE_REQUEST_BIDS: 'beforeRequestBids',
                        REQUEST_BIDS: 'requestBids',
                        ADD_AD_UNITS: 'addAdUnits',
                        AD_RENDER_FAILED: 'adRenderFailed',
                        TCF2_ENFORCEMENT: 'tcf2Enforcement',
                        AUCTION_DEBUG: 'auctionDebug',
                        BID_VIEWABLE: 'bidViewable',
                        STALE_RENDER: 'staleRender'
                    },
                    AD_RENDER_FAILED_REASON: {
                        PREVENT_WRITING_ON_MAIN_DOCUMENT: 'preventWritingOnMainDocument',
                        NO_AD: 'noAd',
                        EXCEPTION: 'exception',
                        CANNOT_FIND_AD: 'cannotFindAd',
                        MISSING_DOC_OR_ADID: 'missingDocOrAdid'
                    },
                    EVENT_ID_PATHS: { bidWon: 'adUnitCode' },
                    GRANULARITY_OPTIONS: {
                        LOW: 'low',
                        MEDIUM: 'medium',
                        HIGH: 'high',
                        AUTO: 'auto',
                        DENSE: 'dense',
                        CUSTOM: 'custom'
                    },
                    TARGETING_KEYS: {
                        BIDDER: 'hb_bidder',
                        AD_ID: 'hb_adid',
                        PRICE_BUCKET: 'hb_pb',
                        SIZE: 'hb_size',
                        DEAL: 'hb_deal',
                        SOURCE: 'hb_source',
                        FORMAT: 'hb_format',
                        UUID: 'hb_uuid',
                        CACHE_ID: 'hb_cache_id',
                        CACHE_HOST: 'hb_cache_host',
                        ADOMAIN: 'hb_adomain'
                    },
                    DEFAULT_TARGETING_KEYS: {
                        BIDDER: 'hb_bidder',
                        AD_ID: 'hb_adid',
                        PRICE_BUCKET: 'hb_pb',
                        SIZE: 'hb_size',
                        DEAL: 'hb_deal',
                        FORMAT: 'hb_format',
                        UUID: 'hb_uuid',
                        CACHE_HOST: 'hb_cache_host'
                    },
                    NATIVE_KEYS: {
                        title: 'hb_native_title',
                        body: 'hb_native_body',
                        body2: 'hb_native_body2',
                        privacyLink: 'hb_native_privacy',
                        privacyIcon: 'hb_native_privicon',
                        sponsoredBy: 'hb_native_brand',
                        image: 'hb_native_image',
                        icon: 'hb_native_icon',
                        clickUrl: 'hb_native_linkurl',
                        displayUrl: 'hb_native_displayurl',
                        cta: 'hb_native_cta',
                        rating: 'hb_native_rating',
                        address: 'hb_native_address',
                        downloads: 'hb_native_downloads',
                        likes: 'hb_native_likes',
                        phone: 'hb_native_phone',
                        price: 'hb_native_price',
                        salePrice: 'hb_native_saleprice',
                        rendererUrl: 'hb_renderer_url',
                        adTemplate: 'hb_adTemplate'
                    },
                    S2S: {
                        SRC: 's2s',
                        DEFAULT_ENDPOINT: 'https://prebid.adnxs.com/pbs/v1/openrtb2/auction',
                        SYNCED_BIDDERS_KEY: 'pbjsSyncs'
                    },
                    BID_STATUS: {
                        BID_TARGETING_SET: 'targetingSet',
                        RENDERED: 'rendered',
                        BID_REJECTED: 'bidRejected'
                    }
                };
            },
            50: function (e, t) {
                e.exports = function () {
                };
            },
            51: function (e, t, n) {
                var r = n(28);
                e.exports = r;
            },
            52: function (e, t) {
                e.exports = {};
            },
            53: function (e, t, n) {
                var r, i, o, a, c, u, s, d, f = n(117), l = n(26), p = n(31), g = n(32), b = n(27), v = n(65), y = n(52), h = l.WeakMap;
                s = f ? (r = new h(), i = r.get, o = r.has, a = r.set, c = function (e, t) {
                    return a.call(r, e, t), t;
                }, u = function (e) {
                    return i.call(r, e) || {};
                }, function (e) {
                    return o.call(r, e);
                }) : (y[d = v('state')] = !0, c = function (e, t) {
                    return g(e, d, t), t;
                }, u = function (e) {
                    return b(e, d) ? e[d] : {};
                }, function (e) {
                    return b(e, d);
                }), e.exports = {
                    set: c,
                    get: u,
                    has: s,
                    enforce: function (e) {
                        return s(e) ? u(e) : c(e, {});
                    },
                    getterFor: function (n) {
                        return function (e) {
                            var t;
                            if (!p(e) || (t = u(e)).type !== n)
                                throw TypeError('Incompatible receiver, ' + n + ' required');
                            return t;
                        };
                    }
                };
            },
            54: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return S;
                });
                var a = n(0), r = n(3), i = n(12), o = n.n(i), c = n(9);
                function u(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var n = [], r = !0, i = !1, o = void 0;
                        try {
                            for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e;
                        } finally {
                            try {
                                r || null == c.return || c.return();
                            } finally {
                                if (i)
                                    throw o;
                            }
                        }
                        return n;
                    }(e, t) || function (e, t) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return s(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n && e.constructor && (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n)
                            return Array.from(e);
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return s(e, t);
                    }(e, t) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                function d() {
                    return (d = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                r.b.setDefaults({
                    userSync: a.deepClone({
                        syncEnabled: !0,
                        filterSettings: {
                            image: {
                                bidders: '*',
                                filter: 'include'
                            }
                        },
                        syncsPerBidder: 5,
                        syncDelay: 3000,
                        auctionDelay: 0
                    })
                });
                var f = Object(c.a)('usersync');
                var l, p, g, b, v, y, h, m = !a.isSafariBrowser() && f.cookiesAreEnabled(), S = (l = {
                        config: r.b.getConfig('userSync'),
                        browserSupportsCookies: m
                    }, p = {}, g = A(), b = new Set(), y = {
                        image: !0,
                        iframe: !(v = {})
                    }, h = l.config, r.b.getConfig('userSync', function (e) {
                        var t;
                        e.userSync && (t = e.userSync.filterSettings, a.isPlainObject(t) && (t.image || t.all || (e.userSync.filterSettings.image = {
                            bidders: '*',
                            filter: 'include'
                        }))), h = d(h, e.userSync);
                    }), p.registerSync = function (e, t, n) {
                        return b.has(t) ? a.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call')) : h.syncEnabled && a.isArray(g[e]) ? t ? 0 !== h.syncsPerBidder && Number(v[t]) >= h.syncsPerBidder ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : p.canBidderRegisterSync(e, t) ? (g[e].push([
                            t,
                            n
                        ]), (r = v)[i = t] ? r[i] += 1 : r[i] = 1, void (v = r)) : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : a.logWarn('Bidder is required for registering sync') : a.logWarn('User sync type "'.concat(e, '" not supported'));
                        var r, i;
                    }, p.syncUsers = function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                        if (e)
                            return setTimeout(E, Number(e));
                        E();
                    }, p.triggerUserSyncs = function () {
                        h.enableOverride && p.syncUsers();
                    }, p.canBidderRegisterSync = function (e, t) {
                        return !h.filterSettings || !T(e, t);
                    }, p);
                function A() {
                    return {
                        image: [],
                        iframe: []
                    };
                }
                function E() {
                    if (h.syncEnabled && l.browserSupportsCookies) {
                        try {
                            !function () {
                                if (!y.image)
                                    return;
                                O(g.image, function (e) {
                                    var t = u(e, 2), n = t[0], r = t[1];
                                    a.logMessage('Invoking image pixel user sync for bidder: '.concat(n)), a.triggerPixel(r);
                                });
                            }(), function () {
                                if (!y.iframe)
                                    return;
                                O(g.iframe, function (e) {
                                    var t = u(e, 2), n = t[0], r = t[1];
                                    a.logMessage('Invoking iframe user sync for bidder: '.concat(n)), a.insertUserSyncIframe(r);
                                });
                            }();
                        } catch (e) {
                            return a.logError('Error firing user syncs', e);
                        }
                        g = A();
                    }
                }
                function O(e, t) {
                    a.shuffle(e).forEach(function (e) {
                        t(e), b.add(e[0]);
                    });
                }
                function T(e, t) {
                    var n = h.filterSettings;
                    if (function (e, t) {
                            if (e.all && e[t])
                                return a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), !1;
                            var n = e.all ? e.all : e[t], r = e.all ? 'all' : t;
                            if (!n)
                                return !1;
                            var i = n.filter, o = n.bidders;
                            if (i && 'include' !== i && 'exclude' !== i)
                                return a.logWarn('UserSync "filterSettings.'.concat(r, '.filter" setting \'').concat(i, '\' is not a valid option; use either \'include\' or \'exclude\'.')), !1;
                            return !!('*' === o || Array.isArray(o) && 0 < o.length && o.every(function (e) {
                                return a.isStr(e) && '*' !== e;
                            })) || (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, '.bidders"; use either \'*\' (to represent all bidders) or an array of bidders.')), !1);
                        }(n, e)) {
                        y[e] = !0;
                        var r = n.all ? n.all : n[e], i = '*' === r.bidders ? [t] : r.bidders;
                        return {
                            include: function (e, t) {
                                return !o()(e, t);
                            },
                            exclude: function (e, t) {
                                return o()(e, t);
                            }
                        }[r.filter || 'include'](i, t);
                    }
                    return !y[e];
                }
            },
            55: function (e, t, n) {
                var i = n(31);
                e.exports = function (e, t) {
                    if (!i(e))
                        return e;
                    var n, r;
                    if (t && 'function' == typeof (n = e.toString) && !i(r = n.call(e)))
                        return r;
                    if ('function' == typeof (n = e.valueOf) && !i(r = n.call(e)))
                        return r;
                    if (!t && 'function' == typeof (n = e.toString) && !i(r = n.call(e)))
                        return r;
                    throw TypeError('Can\'t convert object to primitive value');
                };
            },
            56: function (e, t, n) {
                function r(p) {
                    var g = 1 == p, b = 2 == p, v = 3 == p, y = 4 == p, h = 6 == p, m = 5 == p || h;
                    return function (e, t, n, r) {
                        for (var i, o, a = E(e), c = A(a), u = S(t, n, 3), s = O(c.length), d = 0, f = r || T, l = g ? f(e, s) : b ? f(e, 0) : void 0; d < s; d++)
                            if ((m || d in c) && (o = u(i = c[d], d, a), p))
                                if (g)
                                    l[d] = o;
                                else if (o)
                                    switch (p) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return i;
                                    case 6:
                                        return d;
                                    case 2:
                                        I.call(l, i);
                                    }
                                else if (y)
                                    return !1;
                        return h ? -1 : v || y ? y : l;
                    };
                }
                var S = n(24), A = n(76), E = n(57), O = n(49), T = n(105), I = [].push;
                e.exports = {
                    forEach: r(0),
                    map: r(1),
                    filter: r(2),
                    some: r(3),
                    every: r(4),
                    find: r(5),
                    findIndex: r(6)
                };
            },
            57: function (e, t, n) {
                var r = n(47);
                e.exports = function (e) {
                    return Object(r(e));
                };
            },
            58: function (e, t) {
                var n = Math.ceil, r = Math.floor;
                e.exports = function (e) {
                    return isNaN(e = +e) ? 0 : (0 < e ? r : n)(e);
                };
            },
            59: function (e, t) {
                var n = 0, r = Math.random();
                e.exports = function (e) {
                    return 'Symbol(' + String(void 0 === e ? '' : e) + ')_' + (++n + r).toString(36);
                };
            },
            60: function (e, t, n) {
                function a(e) {
                    throw e;
                }
                var c = n(29), u = n(30), s = n(27), d = Object.defineProperty, f = {};
                e.exports = function (e, t) {
                    if (s(f, e))
                        return f[e];
                    var n = [][e], r = !!s(t = t || {}, 'ACCESSORS') && t.ACCESSORS, i = s(t, 0) ? t[0] : a, o = s(t, 1) ? t[1] : void 0;
                    return f[e] = !!n && !u(function () {
                        if (r && !c)
                            return !0;
                        var e = { length: -1 };
                        r ? d(e, 1, {
                            enumerable: !0,
                            get: a
                        }) : e[1] = 1, n.call(e, i, o);
                    });
                };
            },
            61: function (e, t, n) {
                var r = n(62), i = n(37), o = n(22)('iterator');
                e.exports = function (e) {
                    if (null != e)
                        return e[o] || e['@@iterator'] || i[r(e)];
                };
            },
            62: function (e, t, n) {
                var r = n(63), i = n(46), o = n(22)('toStringTag'), a = 'Arguments' == i(function () {
                        return arguments;
                    }());
                e.exports = r ? i : function (e) {
                    var t, n, r;
                    return void 0 === e ? 'Undefined' : null === e ? 'Null' : 'string' == typeof (n = function (e, t) {
                        try {
                            return e[t];
                        } catch (e) {
                        }
                    }(t = Object(e), o)) ? n : a ? i(t) : 'Object' == (r = i(t)) && 'function' == typeof t.callee ? 'Arguments' : r;
                };
            },
            63: function (e, t, n) {
                var r = {};
                r[n(22)('toStringTag')] = 'z', e.exports = '[object z]' === String(r);
            },
            64: function (e, t, n) {
                var o = n(63), a = n(34).f, c = n(32), u = n(27), s = n(116), d = n(22)('toStringTag');
                e.exports = function (e, t, n, r) {
                    var i;
                    e && (i = n ? e : e.prototype, u(i, d) || a(i, d, {
                        configurable: !0,
                        value: t
                    }), r && !o && c(i, 'toString', s));
                };
            },
            65: function (e, t, n) {
                var r = n(79), i = n(59), o = r('keys');
                e.exports = function (e) {
                    return o[e] || (o[e] = i(e));
                };
            },
            66: function (e, t, n) {
                'use strict';
                function y() {
                    return this;
                }
                var h = n(14), m = n(125), S = n(92), A = n(127), E = n(64), O = n(32), T = n(90), r = n(22), I = n(17), C = n(37), i = n(91), j = i.IteratorPrototype, w = i.BUGGY_SAFARI_ITERATORS, _ = r('iterator'), B = 'values', U = 'entries';
                e.exports = function (e, t, n, r, i, o, a) {
                    m(n, t, r);
                    function c(e) {
                        if (e === i && b)
                            return b;
                        if (!w && e in p)
                            return p[e];
                        switch (e) {
                        case 'keys':
                        case B:
                        case U:
                            return function () {
                                return new n(this, e);
                            };
                        }
                        return function () {
                            return new n(this);
                        };
                    }
                    var u, s, d, f = t + ' Iterator', l = !1, p = e.prototype, g = p[_] || p['@@iterator'] || i && p[i], b = !w && g || c(i), v = 'Array' == t && p.entries || g;
                    if (v && (u = S(v.call(new e())), j !== Object.prototype && u.next && (I || S(u) === j || (A ? A(u, j) : 'function' != typeof u[_] && O(u, _, y)), E(u, f, !0, !0), I && (C[f] = y))), i == B && g && g.name !== B && (l = !0, b = function () {
                            return g.call(this);
                        }), I && !a || p[_] === b || O(p, _, b), C[t] = b, i)
                        if (s = {
                                values: c(B),
                                keys: o ? b : c('keys'),
                                entries: c(U)
                            }, a)
                            for (d in s)
                                !w && !l && d in p || T(p, d, s[d]);
                        else
                            h({
                                target: t,
                                proto: !0,
                                forced: w || l
                            }, s);
                    return s;
                };
            },
            67: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return o;
                });
                var r = n(0), c = {};
                function i(e, t, n) {
                    var r, i, o, a = (i = n, o = c[r = e] = c[r] || { bidders: {} }, i ? o.bidders[i] = o.bidders[i] || {} : o);
                    return a[t] = (a[t] || 0) + 1, a[t];
                }
                var o = {
                    incrementRequestsCounter: function (e) {
                        return i(e, 'requestsCounter');
                    },
                    incrementBidderRequestsCounter: function (e, t) {
                        return i(e, 'requestsCounter', t);
                    },
                    incrementBidderWinsCounter: function (e, t) {
                        return i(e, 'winsCounter', t);
                    },
                    getRequestsCounter: function (e) {
                        return Object(r.deepAccess)(c, ''.concat(e, '.requestsCounter')) || 0;
                    },
                    getBidderRequestsCounter: function (e, t) {
                        return Object(r.deepAccess)(c, ''.concat(e, '.bidders.').concat(t, '.requestsCounter')) || 0;
                    },
                    getBidderWinsCounter: function (e, t) {
                        return Object(r.deepAccess)(c, ''.concat(e, '.bidders.').concat(t, '.winsCounter')) || 0;
                    }
                };
            },
            7: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'gdprDataHandler', function () {
                    return U;
                }), n.d(t, 'uspDataHandler', function () {
                    return x;
                }), n.d(t, 'coppaDataHandler', function () {
                    return R;
                }), n.d(t, 'clientTestAdapters', function () {
                    return D;
                }), n.d(t, 'allS2SBidders', function () {
                    return k;
                }), t.getAllS2SBidders = N, t.setS2STestingModule = function (e) {
                    A = e;
                };
                var h = n(0), p = n(96), g = n(36), l = n(1), y = n(4), a = n(3), r = n(10), i = n(12), m = n.n(i), o = n(11), S = n.n(o), b = n(67), c = n(19);
                function u(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var n = [], r = !0, i = !1, o = void 0;
                        try {
                            for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            i = !0, o = e;
                        } finally {
                            try {
                                r || null == c.return || c.return();
                            } finally {
                                if (i)
                                    throw o;
                            }
                        }
                        return n;
                    }(e, t) || d(e, t) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function s(e) {
                    return function (e) {
                        if (Array.isArray(e))
                            return f(e);
                    }(e) || function (e) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                            return Array.from(e);
                    }(e) || d(e) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function d(e, t) {
                    if (e) {
                        if ('string' == typeof e)
                            return f(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return 'Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? f(e, t) : void 0;
                    }
                }
                function f(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                function v() {
                    return (v = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var A, E = n(0), O = n(5), T = n(8), I = {}, C = I.bidderRegistry = {}, j = I.aliasRegistry = {}, w = [];
                a.b.getConfig('s2sConfig', function (e) {
                    e && e.s2sConfig && (w = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
                });
                var _ = {};
                var B = Object(r.b)('sync', function (e) {
                    var i = e.bidderCode, s = e.auctionId, d = e.bidderRequestId, t = e.adUnits, f = e.labels, l = e.src;
                    return t.reduce(function (e, c) {
                        var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes), n = t.active, u = t.mediaTypes, r = t.filterResults;
                        return n ? r && E.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, 'to ', r.after) : E.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), n && e.push(c.bids.filter(function (e) {
                            return e.bidder === i;
                        }).reduce(function (e, t) {
                            var n = c.nativeParams || E.deepAccess(c, 'mediaTypes.native');
                            n && (t = v({}, t, { nativeParams: Object(g.h)(n) })), t = v({}, t, Object(h.getDefinedParams)(c, [
                                'ortb2Imp',
                                'mediaType',
                                'renderer',
                                'storedAuctionResponse'
                            ]));
                            var r = Object(p.b)(Object(p.a)(t, f), u), i = r.active, o = r.mediaTypes, a = r.filterResults;
                            return i ? a && E.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, 'to ', a.after) : E.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), E.isValidMediaTypes(o) ? t = v({}, t, { mediaTypes: o }) : E.logError('mediaTypes is not correctly configured for adunit '.concat(c.code)), i && e.push(v({}, t, {
                                adUnitCode: c.code,
                                transactionId: c.transactionId,
                                sizes: E.deepAccess(o, 'banner.sizes') || E.deepAccess(o, 'video.playerSize') || [],
                                bidId: t.bid_id || E.getUniqueIdentifierStr(),
                                bidderRequestId: d,
                                auctionId: s,
                                src: l,
                                bidRequestsCount: b.a.getRequestsCounter(c.code),
                                bidderRequestsCount: b.a.getBidderRequestsCounter(c.code, t.bidder),
                                bidderWinsCount: b.a.getBidderWinsCounter(c.code, t.bidder)
                            })), e;
                        }, [])), e;
                    }, []).reduce(h.flatten, []).filter(function (e) {
                        return '' !== e;
                    });
                }, 'getBids');
                var U = {
                        consentData: null,
                        setConsentData: function (e) {
                            U.consentData = e;
                        },
                        getConsentData: function () {
                            return U.consentData;
                        }
                    }, x = {
                        consentData: null,
                        setConsentData: function (e) {
                            x.consentData = e;
                        },
                        getConsentData: function () {
                            return x.consentData;
                        }
                    }, R = {
                        getCoppa: function () {
                            return !!a.b.getConfig('coppa');
                        }
                    }, D = [], k = [];
                function N() {
                    I.s2STestingEnabled = !1, w.forEach(function (e) {
                        e && e.enabled && e.bidders && e.bidders.length && k.push.apply(k, s(e.bidders));
                    });
                }
                function P(e) {
                    return e && e.enabled && e.testing && A;
                }
                function M(t, n, e) {
                    try {
                        var r = C[t].getSpec();
                        r && r[n] && 'function' == typeof r[n] && (E.logInfo('Invoking '.concat(t, '.').concat(n)), a.b.runWithBidder(t, h.bind.call(r[n], r, e)));
                    } catch (e) {
                        E.logWarn('Error calling '.concat(n, ' of ').concat(t));
                    }
                }
                I.makeBidRequests = Object(r.b)('sync', function (d, f, l, i, p) {
                    T.emit(O.EVENTS.BEFORE_REQUEST_BIDS, d);
                    var e = Object(h.getBidderCodes)(d);
                    a.b.getConfig('bidderSequence') === a.a && (e = Object(h.shuffle)(e));
                    var g = Object(c.a)(), b = e, v = [];
                    0 === k.length && N(), w.forEach(function (e) {
                        e && e.enabled && P(e) && (A.calculateBidSources(e), A.getSourceBidderMap(d, k)[A.CLIENT].forEach(function (e) {
                            m()(D, e) || D.push(e);
                        }));
                    }), b = e.filter(function (e) {
                        return !m()(k, e) || m()(D, e);
                    });
                    var y = k;
                    w.forEach(function (r) {
                        var i, o, e, t, n, a, c, u, s;
                        r && r.enabled && (s = r, Boolean(P(s) && s.testServerOnly) && (c = d, u = r, Boolean(S()(c, function (e) {
                            return S()(e.bids, function (e) {
                                return (e.bidSource || u.bidderControl && u.bidderControl[e.bidder]) && e.finalSource === A.SERVER;
                            });
                        }))) && (E.logWarn('testServerOnly: True.  All client requests will be suppressed.'), b.length = 0), e = d, n = (t = r).bidders, (a = E.deepClone(e)).forEach(function (e) {
                            e.bids = e.bids.filter(function (e) {
                                return m()(n, e.bidder) && (!P(t) || e.finalSource !== A.CLIENT);
                            }).map(function (e) {
                                return e.bid_id = E.getUniqueIdentifierStr(), e;
                            });
                        }), i = a = a.filter(function (e) {
                            return 0 !== e.bids.length;
                        }), o = E.generateUUID(), y.forEach(function (e) {
                            var t = E.getUniqueIdentifierStr(), n = {
                                    bidderCode: e,
                                    auctionId: l,
                                    bidderRequestId: t,
                                    tid: o,
                                    bids: B({
                                        bidderCode: e,
                                        auctionId: l,
                                        bidderRequestId: t,
                                        adUnits: E.deepClone(i),
                                        labels: p,
                                        src: O.S2S.SRC
                                    }),
                                    auctionStart: f,
                                    timeout: r.timeout,
                                    src: O.S2S.SRC,
                                    refererInfo: g
                                };
                            0 !== n.bids.length && v.push(n);
                        }), i.forEach(function (e) {
                            var t = e.bids.filter(function (t) {
                                return S()(v, function (e) {
                                    return S()(e.bids, function (e) {
                                        return e.bidId === t.bid_id;
                                    });
                                });
                            });
                            e.bids = t;
                        }), v.forEach(function (e) {
                            void 0 === e.adUnitsS2SCopy && (e.adUnitsS2SCopy = i.filter(function (e) {
                                return 0 < e.bids.length;
                            }));
                        }));
                    });
                    var t, n, o = (t = d, (n = E.deepClone(t)).forEach(function (e) {
                            e.bids = e.bids.filter(function (e) {
                                return !D.length || e.finalSource !== A.SERVER;
                            });
                        }), n = n.filter(function (e) {
                            return 0 !== e.bids.length;
                        }));
                    return b.forEach(function (e) {
                        var t = E.getUniqueIdentifierStr(), n = {
                                bidderCode: e,
                                auctionId: l,
                                bidderRequestId: t,
                                bids: B({
                                    bidderCode: e,
                                    auctionId: l,
                                    bidderRequestId: t,
                                    adUnits: E.deepClone(o),
                                    labels: p,
                                    src: 'client'
                                }),
                                auctionStart: f,
                                timeout: i,
                                refererInfo: g
                            }, r = C[e];
                        r || E.logError('Trying to make a request for bidder that does not exist: '.concat(e)), r && n.bids && 0 !== n.bids.length && v.push(n);
                    }), U.getConsentData() && v.forEach(function (e) {
                        e.gdprConsent = U.getConsentData();
                    }), x.getConsentData() && v.forEach(function (e) {
                        e.uspConsent = x.getConsentData();
                    }), v;
                }, 'makeBidRequests'), I.callBids = function (e, t, d, f, l, p, i) {
                    var n, r, g, b, v;
                    t.length ? (r = (n = u(t.reduce(function (e, t) {
                        return e[Number(void 0 !== t.src && t.src === O.S2S.SRC)].push(t), e;
                    }, [
                        [],
                        []
                    ]), 2))[0], g = n[1], b = [], g.forEach(function (e) {
                        for (var t = -1, n = 0; n < b.length; ++n)
                            if (e.tid === b[n].tid) {
                                t = n;
                                break;
                            }
                        t <= -1 && b.push(e);
                    }), v = 0, w.forEach(function (e) {
                        var t, n, r, i, o, a, c, u, s;
                        e && b[v] && m()(e.bidders, b[v].bidderCode) && (t = Object(y.b)(p, l ? {
                            request: l.request.bind(null, 's2s'),
                            done: l.done
                        } : void 0), n = e.bidders, r = C[e.adapter], i = b[v].tid, o = b[v].adUnitsS2SCopy, a = g.filter(function (e) {
                            return e.tid === i;
                        }), r ? (c = {
                            tid: i,
                            ad_units: o,
                            s2sConfig: e
                        }).ad_units.length && (u = a.map(function (e) {
                            return e.start = Object(h.timestamp)(), f.bind(e);
                        }), s = c.ad_units.reduce(function (e, t) {
                            return e.concat((t.bids || []).reduce(function (e, t) {
                                return e.concat(t.bidder);
                            }, []));
                        }, []), E.logMessage('CALLING S2S HEADER BIDDERS ==== '.concat(n.filter(function (e) {
                            return m()(s, e);
                        }).join(','))), a.forEach(function (e) {
                            T.emit(O.EVENTS.BID_REQUESTED, e);
                        }), r.callBids(c, g, function (e, t) {
                            var n = Object(h.getBidderRequest)(g, t.bidderCode, e);
                            n && d.call(n, e, t);
                        }, function () {
                            return u.forEach(function (e) {
                                return e();
                            });
                        }, t)) : E.logError('missing ' + e.adapter), v++);
                    }), r.forEach(function (t) {
                        t.start = Object(h.timestamp)();
                        var e = C[t.bidderCode];
                        a.b.runWithBidder(t.bidderCode, function () {
                            E.logMessage('CALLING BIDDER'), T.emit(O.EVENTS.BID_REQUESTED, t);
                        });
                        var n = Object(y.b)(p, l ? {
                                request: l.request.bind(null, t.bidderCode),
                                done: l.done
                            } : void 0), r = f.bind(t);
                        try {
                            a.b.runWithBidder(t.bidderCode, h.bind.call(e.callBids, e, t, d.bind(t), r, n, i, a.b.callbackWithBidder(t.bidderCode)));
                        } catch (e) {
                            E.logError(''.concat(t.bidderCode, ' Bid Adapter emitted an uncaught error when parsing their bidRequest'), {
                                e: e,
                                bidRequest: t
                            }), r();
                        }
                    })) : E.logWarn('callBids executed with no bidRequests.  Were they filtered by labels or sizing?');
                }, I.videoAdapters = [], I.registerBidAdapter = function (e, t) {
                    var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes, r = void 0 === n ? [] : n;
                    e && t ? 'function' == typeof e.callBids ? (C[t] = e, m()(r, 'video') && I.videoAdapters.push(t), m()(r, 'native') && g.f.push(t)) : E.logError('Bidder adaptor error for bidder code: ' + t + 'bidder must implement a callBids() function') : E.logError('bidAdapter or bidderCode not specified');
                }, I.aliasBidAdapter = function (n, r, e) {
                    var t, i;
                    if (void 0 === C[r]) {
                        var o = C[n];
                        if (void 0 === o) {
                            var a = [];
                            w.forEach(function (e) {
                                var t;
                                e.bidders && e.bidders.length && (t = e && e.bidders, e && m()(t, r) ? j[r] = n : a.push(n));
                            }), a.forEach(function (e) {
                                E.logError('bidderCode "' + e + '" is not an existing bidder.', 'adapterManager.aliasBidAdapter');
                            });
                        } else
                            try {
                                var c, u, s, d, f = (t = n, i = [], m()(I.videoAdapters, t) && i.push('video'), m()(g.f, t) && i.push('native'), i);
                                o.constructor.prototype != Object.prototype ? (d = new o.constructor()).setBidderCode(r) : (c = o.getSpec(), u = e && e.gvlid, s = e && e.skipPbsAliasing, d = Object(l.newBidder)(v({}, c, {
                                    code: r,
                                    gvlid: u,
                                    skipPbsAliasing: s
                                })), j[r] = n), I.registerBidAdapter(d, r, { supportedMediaTypes: f });
                            } catch (e) {
                                E.logError(n + ' bidder does not currently support aliasing.', 'adapterManager.aliasBidAdapter');
                            }
                    } else
                        E.logMessage('alias name "' + r + '" has been already specified.');
                }, I.registerAnalyticsAdapter = function (e) {
                    var t = e.adapter, n = e.code, r = e.gvlid;
                    t && n ? 'function' == typeof t.enableAnalytics ? (t.code = n, _[n] = {
                        adapter: t,
                        gvlid: r
                    }) : E.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : E.logError('Prebid Error: analyticsAdapter or analyticsCode not specified');
                }, I.enableAnalytics = function (e) {
                    E.isArray(e) || (e = [e]), E._each(e, function (e) {
                        var t = _[e.provider].adapter;
                        t ? t.enableAnalytics(e) : E.logError('Prebid Error: no analytics adapter found in registry for\n        '.concat(e.provider, '.'));
                    });
                }, I.getBidAdapter = function (e) {
                    return C[e];
                }, I.getAnalyticsAdapter = function (e) {
                    return _[e];
                }, I.callTimedOutBidders = function (t, n, r) {
                    n = n.map(function (e) {
                        return e.params = E.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e;
                    }), n = E.groupBy(n, 'bidder'), Object.keys(n).forEach(function (e) {
                        M(e, 'onTimeout', n[e]);
                    });
                }, I.callBidWonBidder = function (e, t, n) {
                    t.params = E.getUserConfiguredParams(n, t.adUnitCode, t.bidder), b.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), M(e, 'onBidWon', t);
                }, I.callSetTargetingBidder = function (e, t) {
                    M(e, 'onSetTargeting', t);
                }, I.callBidViewableBidder = function (e, t) {
                    M(e, 'onBidViewable', t);
                }, t.default = I;
            },
            71: function (e, t, n) {
                var r = n(204);
                e.exports = r;
            },
            72: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'adUnitSetupChecks', function () {
                    return K;
                }), n.d(t, 'checkAdUnitSetup', function () {
                    return J;
                }), t.executeCallbacks = $;
                var r = n(16), i = n(0), o = n(210), a = n(54), S = n(3), A = n(23), l = n(41), c = n(10), u = n(211), s = n(12), p = n.n(s), g = n(67), E = n(13), d = n(39), f = n(9);
                function b(e) {
                    return function (e) {
                        if (Array.isArray(e))
                            return v(e);
                    }(e) || function (e) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                            return Array.from(e);
                    }(e) || function (e, t) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return v(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n && e.constructor && (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n)
                            return Array.from(e);
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return v(e, t);
                    }(e) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function v(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                function y() {
                    return (y = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var h = Object(r.a)(), O = n(5), T = n(0), m = n(7).default, I = n(8), C = a.a.triggerUserSyncs, j = O.EVENTS, w = j.ADD_AD_UNITS, _ = j.BID_WON, B = j.REQUEST_BIDS, U = j.SET_TARGETING, x = j.AD_RENDER_FAILED, R = j.STALE_RENDER, D = O.AD_RENDER_FAILED_REASON, k = D.PREVENT_WRITING_ON_MAIN_DOCUMENT, N = D.NO_AD, P = D.EXCEPTION, M = D.CANNOT_FIND_AD, q = D.MISSING_DOC_OR_ADID, G = {
                        bidWon: function (e) {
                            var t = A.a.getBidsRequested().map(function (e) {
                                return e.bids.map(function (e) {
                                    return e.adUnitCode;
                                });
                            }).reduce(i.flatten).filter(i.uniques);
                            return !!T.contains(t, e) || void T.logError('The "' + e + '" placement is not defined.');
                        }
                    };
                function W(e, t, n) {
                    e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n);
                }
                function L(e, t) {
                    var n = [];
                    return T.isArray(e) && (t ? e.length === t : 0 < e.length) && (e.every(function (e) {
                        return Object(i.isArrayOfNums)(e, 2);
                    }) ? n = e : Object(i.isArrayOfNums)(e, 2) && n.push(e)), n;
                }
                function F(e) {
                    var t = T.deepClone(e), n = t.mediaTypes.banner, r = L(n.sizes);
                    return 0 < r.length ? (n.sizes = r, t.sizes = r) : (T.logError('Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request.'), delete t.mediaTypes.banner), t;
                }
                function z(e) {
                    var t, n, r = T.deepClone(e), i = r.mediaTypes.video;
                    return i.playerSize && (t = 'number' == typeof i.playerSize[0] ? 2 : 1, 0 < (n = L(i.playerSize, t)).length ? (2 == t && T.logInfo('Transforming video.playerSize from [640,480] to [[640,480]] so it\'s in the proper format.'), i.playerSize = n, r.sizes = n) : (T.logError('Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request.'), delete r.mediaTypes.video.playerSize)), r;
                }
                function V(e) {
                    var t = T.deepClone(e), n = t.mediaTypes.native;
                    return n.image && n.image.sizes && !Array.isArray(n.image.sizes) && (T.logError('Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request.'), delete t.mediaTypes.native.image.sizes), n.image && n.image.aspect_ratios && !Array.isArray(n.image.aspect_ratios) && (T.logError('Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request.'), delete t.mediaTypes.native.image.aspect_ratios), n.icon && n.icon.sizes && !Array.isArray(n.icon.sizes) && (T.logError('Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request.'), delete t.mediaTypes.native.icon.sizes), t;
                }
                function H(e, t) {
                    var n, r = T.deepAccess(e, 'mediaTypes.'.concat(t, '.pos'));
                    return r && T.isNumber(r) && isFinite(r) || (n = 'Value of property \'pos\' on ad unit '.concat(e.code, ' should be of type: Number'), T.logWarn(n), I.emit(O.EVENTS.AUCTION_DEBUG, {
                        type: 'WARNING',
                        arguments: n
                    }), delete e.mediaTypes[t].pos), e;
                }
                Object(u.a)(), h.bidderSettings = h.bidderSettings || {}, h.libLoaded = !0, h.version = 'v5.1.0', T.logInfo('Prebid.js v5.1.0 loaded'), h.installedModules = [], h.adUnits = h.adUnits || [], h.triggerUserSyncs = C;
                var K = {
                        validateBannerMediaType: F,
                        validateVideoMediaType: z,
                        validateNativeMediaType: V,
                        validateSizes: L
                    }, J = Object(c.b)('sync', function (e) {
                        var c = [];
                        return e.forEach(function (e) {
                            var t, n, r, i, o = e.mediaTypes, a = e.bids;
                            a && T.isArray(a) ? o && 0 !== Object.keys(o).length ? (o.banner && (t = F(e), o.banner.hasOwnProperty('pos') && (t = H(t, 'banner'))), o.video && (n = z(t || e), o.video.hasOwnProperty('pos') && (n = H(n, 'video'))), o.native && (r = V(n || (t || e))), i = y({}, t, n, r), c.push(i)) : T.logError('Detected adUnit.code \''.concat(e.code, '\' did not have a \'mediaTypes\' object defined.  This is a required field for the auction, so this adUnit has been removed.')) : T.logError('Detected adUnit.code \''.concat(e.code, '\' did not have \'adUnit.bids\' defined or \'adUnit.bids\' is not an array. Removing adUnit from auction.'));
                        }), c;
                    }, 'checkAdUnitSetup');
                function Y(e) {
                    var n = A.a[e]().filter(T.bind.call(i.adUnitsFilter, this, A.a.getAdUnitCodes())), r = A.a.getLastAuctionId();
                    return n.map(function (e) {
                        return e.adUnitCode;
                    }).filter(i.uniques).map(function (t) {
                        return n.filter(function (e) {
                            return e.auctionId === r && e.adUnitCode === t;
                        });
                    }).filter(function (e) {
                        return e && e[0] && e[0].adUnitCode;
                    }).map(function (e) {
                        return t = {}, n = e[0].adUnitCode, r = { bids: e }, n in t ? Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = r, t;
                        var t, n, r;
                    }).reduce(function (e, t) {
                        return y(e, t);
                    }, {});
                }
                function Q(e) {
                    var t = e.reason, n = e.message, r = e.bid, i = e.id, o = {
                            reason: t,
                            message: n
                        };
                    r && (o.bid = r), i && (o.adId = i), T.logError(n), I.emit(x, o);
                }
                function $(e, t) {
                    function n(e) {
                        for (var t; t = e.shift();)
                            t();
                    }
                    n(f.c), n(X), e.call(this, t);
                }
                h.getAdserverTargetingForAdUnitCodeStr = function (e) {
                    if (T.logInfo('Invoking pbjs.getAdserverTargetingForAdUnitCodeStr', arguments), e) {
                        var t = h.getAdserverTargetingForAdUnitCode(e);
                        return T.transformAdServerTargetingObj(t);
                    }
                    T.logMessage('Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode');
                }, h.getHighestUnusedBidResponseForAdUnitCode = function (e) {
                    if (e) {
                        var t = A.a.getAllBidsForAdUnitCode(e).filter(l.a.isUnusedBid).filter(l.a.isBidNotExpired);
                        return t.length ? t.reduce(i.getHighestCpm) : {};
                    }
                    T.logMessage('Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode');
                }, h.getAdserverTargetingForAdUnitCode = function (e) {
                    return h.getAdserverTargeting(e)[e];
                }, h.getAdserverTargeting = function (e) {
                    return T.logInfo('Invoking pbjs.getAdserverTargeting', arguments), l.d.getAllTargeting(e);
                }, h.getNoBids = function () {
                    return T.logInfo('Invoking pbjs.getNoBids', arguments), Y('getNoBids');
                }, h.getNoBidsForAdUnitCode = function (t) {
                    return {
                        bids: A.a.getNoBids().filter(function (e) {
                            return e.adUnitCode === t;
                        })
                    };
                }, h.getBidResponses = function () {
                    return T.logInfo('Invoking pbjs.getBidResponses', arguments), Y('getBidsReceived');
                }, h.getBidResponsesForAdUnitCode = function (t) {
                    return {
                        bids: A.a.getBidsReceived().filter(function (e) {
                            return e.adUnitCode === t;
                        })
                    };
                }, h.setTargetingForGPTAsync = function (e, t) {
                    var n;
                    T.logInfo('Invoking pbjs.setTargetingForGPTAsync', arguments), Object(i.isGptPubadsDefined)() ? (n = l.d.getAllTargeting(e), l.d.resetPresetTargeting(e, t), l.d.setTargetingForGPT(n, t), Object.keys(n).forEach(function (t) {
                        Object.keys(n[t]).forEach(function (e) {
                            'hb_adid' === e && A.a.setStatusForBids(n[t][e], O.BID_STATUS.BID_TARGETING_SET);
                        });
                    }), I.emit(U, n)) : T.logError('window.googletag is not defined on the page');
                }, h.setTargetingForAst = function (e) {
                    T.logInfo('Invoking pbjs.setTargetingForAn', arguments), l.d.isApntagDefined() ? (l.d.setTargetingForAst(e), I.emit(U, l.d.getAllTargeting())) : T.logError('window.apntag is not defined on the page');
                }, h.renderAd = function (e, t, n) {
                    if (T.logInfo('Invoking pbjs.renderAd', arguments), T.logMessage('Calling renderAd with adId :' + t), e && t)
                        try {
                            var r, i, o, a, c, u, s, d, f, l, p, g, b, v, y = A.a.findBidByAdId(t);
                            y ? (r = !0, y && y.status === O.BID_STATUS.RENDERED && (T.logWarn('Ad id '.concat(y.adId, ' has been rendered before')), I.emit(R, y), T.deepAccess(S.b.getConfig('auctionOptions'), 'suppressStaleRender') && (r = !1)), r && (y.ad = T.replaceAuctionPrice(y.ad, y.cpm), y.adUrl = T.replaceAuctionPrice(y.adUrl, y.cpm), n && n.clickThrough && (i = n.clickThrough, y.ad = T.replaceClickThrough(y.ad, i), y.adUrl = T.replaceClickThrough(y.adUrl, i)), A.a.addWinningBid(y), I.emit(_, y), o = y.height, a = y.width, c = y.ad, u = y.mediaType, s = y.adUrl, d = y.renderer, f = document.createComment('Creative '.concat(y.creativeId, ' served by ').concat(y.bidder, ' Prebid.js Header Bidding')), T.insertElement(f, e, 'body'), Object(E.c)(d) ? Object(E.b)(d, y) : e === document && !T.inIframe() || 'video' === u ? (l = 'Error trying to write ad. Ad render call ad id '.concat(t, ' was prevented from writing to the main document.'), Q({
                                reason: k,
                                message: l,
                                bid: y,
                                id: t
                            })) : c ? (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf('firefox/') && ((p = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1]) && parseInt(p, 10) < 67 && e.open('text/html', 'replace')), e.write(c), e.close(), W(e, a, o), T.callBurl(y)) : s ? ((g = T.createInvisibleIframe()).height = o, g.width = a, g.style.display = 'inline', g.style.overflow = 'hidden', g.src = s, T.insertElement(g, e, 'body'), W(e, a, o), T.callBurl(y)) : (b = 'Error trying to write ad. No ad for bid response id: '.concat(t), Q({
                                reason: N,
                                message: b,
                                bid: y,
                                id: t
                            })))) : (v = 'Error trying to write ad. Cannot find ad by given id : '.concat(t), Q({
                                reason: M,
                                message: v,
                                id: t
                            }));
                        } catch (e) {
                            var h = 'Error trying to write ad Id :'.concat(t, ' to the page:').concat(e.message);
                            Q({
                                reason: P,
                                message: h,
                                id: t
                            });
                        }
                    else {
                        var m = 'Error trying to write ad Id :'.concat(t, ' to the page. Missing document or adId');
                        Q({
                            reason: q,
                            message: m,
                            id: t
                        });
                    }
                }, h.removeAdUnit = function (e) {
                    T.logInfo('Invoking pbjs.removeAdUnit', arguments), e ? (T.isArray(e) ? e : [e]).forEach(function (e) {
                        for (var t = h.adUnits.length - 1; 0 <= t; t--)
                            h.adUnits[t].code === e && h.adUnits.splice(t, 1);
                    }) : h.adUnits = [];
                }, h.requestBids = Object(c.b)('async', function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.bidsBackHandler, n = e.timeout, r = e.adUnits, i = e.adUnitCodes, o = e.labels, a = e.auctionId;
                    I.emit(B);
                    var c = n || S.b.getConfig('bidderTimeout'), r = r && S.b.convertAdUnitFpd(T.isArray(r) ? r : [r]) || h.adUnits;
                    T.logInfo('Invoking pbjs.requestBids', arguments);
                    var u = [], s = [];
                    if (S.b.getConfig('s2sConfig', function (e) {
                            e && e.s2sConfig && (u = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
                        }), u.forEach(function (e) {
                            s.push.apply(s, b(e.bidders));
                        }), r = J(r), i && i.length ? r = r.filter(function (e) {
                            return p()(i, e.code);
                        }) : i = r && r.map(function (e) {
                            return e.code;
                        }), r.forEach(function (i) {
                            var o = Object.keys(i.mediaTypes || { banner: 'banner' }), e = i.bids.map(function (e) {
                                    return e.bidder;
                                }), a = m.bidderRegistry, t = s ? e.filter(function (e) {
                                    return !p()(s, e);
                                }) : e;
                            i.transactionId = T.generateUUID(), t.forEach(function (t) {
                                var e = a[t], n = e && e.getSpec && e.getSpec(), r = n && n.supportedMediaTypes || ['banner'];
                                o.some(function (e) {
                                    return p()(r, e);
                                }) ? g.a.incrementBidderRequestsCounter(i.code, t) : (T.logWarn(T.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter(function (e) {
                                    return e.bidder !== t;
                                }));
                            }), g.a.incrementRequestsCounter(i.code);
                        }), r && 0 !== r.length) {
                        var d = A.a.createAuction({
                                adUnits: r,
                                adUnitCodes: i,
                                callback: t,
                                cbTimeout: c,
                                labels: o,
                                auctionId: a
                            }), f = r.length;
                        15 < f && T.logInfo('Current auction '.concat(d.getAuctionId(), ' contains ').concat(f, ' adUnits.'), r), i.forEach(function (e) {
                            return l.d.setLatestAuctionForAdUnit(e, d.getAuctionId());
                        }), d.callBids();
                    } else if (T.logMessage('No adUnits configured. No bids requested.'), 'function' == typeof t)
                        try {
                            t();
                        } catch (e) {
                            T.logError('Error executing bidsBackHandler', null, e);
                        }
                }), h.requestBids.before($, 49), h.addAdUnits = function (e) {
                    T.logInfo('Invoking pbjs.addAdUnits', arguments), h.adUnits.push.apply(h.adUnits, S.b.convertAdUnitFpd(T.isArray(e) ? e : [e])), I.emit(w);
                }, h.onEvent = function (e, t, n) {
                    T.logInfo('Invoking pbjs.onEvent', arguments), T.isFn(t) ? !n || G[e].call(null, n) ? I.on(e, t, n) : T.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : T.logError('The event handler provided is not a function and was not set on event "' + e + '".');
                }, h.offEvent = function (e, t, n) {
                    T.logInfo('Invoking pbjs.offEvent', arguments), n && !G[e].call(null, n) || I.off(e, t, n);
                }, h.getEvents = function () {
                    return T.logInfo('Invoking pbjs.getEvents'), I.getEvents();
                }, h.registerBidAdapter = function (e, t) {
                    T.logInfo('Invoking pbjs.registerBidAdapter', arguments);
                    try {
                        m.registerBidAdapter(e(), t);
                    } catch (e) {
                        T.logError('Error registering bidder adapter : ' + e.message);
                    }
                }, h.registerAnalyticsAdapter = function (e) {
                    T.logInfo('Invoking pbjs.registerAnalyticsAdapter', arguments);
                    try {
                        m.registerAnalyticsAdapter(e);
                    } catch (e) {
                        T.logError('Error registering analytics adapter : ' + e.message);
                    }
                }, h.createBid = function (e) {
                    return T.logInfo('Invoking pbjs.createBid', arguments), Object(d.a)(e);
                };
                var X = [], Z = Object(c.b)('async', function (e) {
                        e && !T.isEmpty(e) ? (T.logInfo('Invoking pbjs.enableAnalytics for: ', e), m.enableAnalytics(e)) : T.logError('pbjs.enableAnalytics should be called with option {}');
                    }, 'enableAnalyticsCb');
                function ee(e) {
                    e.forEach(function (e) {
                        if (void 0 === e.called)
                            try {
                                e.call(), e.called = !0;
                            } catch (e) {
                                T.logError('Error processing command :', 'prebid.js', e);
                            }
                    });
                }
                h.enableAnalytics = function (e) {
                    X.push(Z.bind(this, e));
                }, h.aliasBidder = function (e, t, n) {
                    T.logInfo('Invoking pbjs.aliasBidder', arguments), e && t ? m.aliasBidAdapter(e, t, n) : T.logError('bidderCode and alias must be passed as arguments', 'pbjs.aliasBidder');
                }, h.getAllWinningBids = function () {
                    return A.a.getAllWinningBids();
                }, h.getAllPrebidWinningBids = function () {
                    return A.a.getBidsReceived().filter(function (e) {
                        return e.status === O.BID_STATUS.BID_TARGETING_SET;
                    });
                }, h.getHighestCpmBids = function (e) {
                    return l.d.getWinningBids(e);
                }, h.markWinningBidAsUsed = function (t) {
                    var e = [];
                    t.adUnitCode && t.adId ? e = A.a.getBidsReceived().filter(function (e) {
                        return e.adId === t.adId && e.adUnitCode === t.adUnitCode;
                    }) : t.adUnitCode ? e = l.d.getWinningBids(t.adUnitCode) : t.adId ? e = A.a.getBidsReceived().filter(function (e) {
                        return e.adId === t.adId;
                    }) : T.logWarn('Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function.'), 0 < e.length && (e[0].status = O.BID_STATUS.RENDERED);
                }, h.getConfig = S.b.getConfig, h.setConfig = S.b.setConfig, h.setBidderConfig = S.b.setBidderConfig, h.que.push(function () {
                    return Object(o.a)();
                }), h.cmd.push = function (e) {
                    if ('function' == typeof e)
                        try {
                            e.call();
                        } catch (e) {
                            T.logError('Error processing command :', e.message, e.stack);
                        }
                    else
                        T.logError('Commands written into pbjs.cmd.push must be wrapped in a function');
                }, h.que.push = h.cmd.push, h.processQueue = function () {
                    c.b.ready(), ee(h.que), ee(h.cmd);
                }, t.default = h;
            },
            73: function (e, t, n) {
                var r = n(308);
                e.exports = r;
            },
            74: function (e, t, n) {
                'use strict';
                t.a = function (t, n) {
                    o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach(function (e) {
                        o.adServers[t][e] ? Object(i.logWarn)('Attempting to add an already registered function property '.concat(e, ' for AdServer ').concat(t, '.')) : o.adServers[t][e] = n[e];
                    });
                };
                var r = n(16), i = n(0), o = Object(r.a)();
            },
            745: function (e, t, n) {
                e.exports = n(72);
            },
            75: function (e, t, n) {
                'use strict';
                t.a = function (e) {
                    var t = e;
                    return {
                        callBids: function () {
                        },
                        setBidderCode: function (e) {
                            t = e;
                        },
                        getBidderCode: function () {
                            return t;
                        }
                    };
                };
            },
            76: function (e, t, n) {
                var r = n(30), i = n(46), o = ''.split;
                e.exports = r(function () {
                    return !Object('z').propertyIsEnumerable(0);
                }) ? function (e) {
                    return 'String' == i(e) ? o.call(e, '') : Object(e);
                } : Object;
            },
            77: function (e, t, n) {
                var r = n(29), i = n(30), o = n(78);
                e.exports = !r && !i(function () {
                    return 7 != Object.defineProperty(o('div'), 'a', {
                        get: function () {
                            return 7;
                        }
                    }).a;
                });
            },
            78: function (e, t, n) {
                var r = n(26), i = n(31), o = r.document, a = i(o) && i(o.createElement);
                e.exports = function (e) {
                    return a ? o.createElement(e) : {};
                };
            },
            79: function (e, t, n) {
                var r = n(17), i = n(80);
                (e.exports = function (e, t) {
                    return i[e] || (i[e] = void 0 !== t ? t : {});
                })('versions', []).push({
                    version: '3.6.4',
                    mode: r ? 'pure' : 'global',
                    copyright: '\xA9 2020 Denis Pushkarev (zloirock.ru)'
                });
            },
            8: function (e, t, n) {
                function r() {
                    return (r = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var c, i, u = n(0), o = n(5), a = Array.prototype.slice, s = Array.prototype.push, d = u._map(o.EVENTS, function (e) {
                        return e;
                    }), f = o.EVENT_ID_PATHS, l = [];
                e.exports = (c = {}, (i = {}).on = function (e, t, n) {
                    var r, i;
                    i = e, u.contains(d, i) ? (r = c[e] || { que: [] }, n ? (r[n] = r[n] || { que: [] }, r[n].que.push(t)) : r.que.push(t), c[e] = r) : u.logError('Wrong event name : ' + e + ' Valid event names :' + d);
                }, i.emit = function (e) {
                    !function (e, t) {
                        u.logMessage('Emitting event for: ' + e);
                        var n = t[0] || {}, r = n[f[e]], i = c[e] || { que: [] }, o = u._map(i, function (e, t) {
                                return t;
                            }), a = [];
                        l.push({
                            eventType: e,
                            args: n,
                            id: r,
                            elapsedTime: u.getPerformanceNow()
                        }), r && u.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), u._each(a, function (e) {
                            if (e)
                                try {
                                    e.apply(null, t);
                                } catch (e) {
                                    u.logError('Error executing handler:', 'events.js', e);
                                }
                        });
                    }(e, a.call(arguments, 1));
                }, i.off = function (e, n, r) {
                    var i = c[e];
                    u.isEmpty(i) || u.isEmpty(i.que) && u.isEmpty(i[r]) || r && (u.isEmpty(i[r]) || u.isEmpty(i[r].que)) || (r ? u._each(i[r].que, function (e) {
                        var t = i[r].que;
                        e === n && t.splice(t.indexOf(e), 1);
                    }) : u._each(i.que, function (e) {
                        var t = i.que;
                        e === n && t.splice(t.indexOf(e), 1);
                    }), c[e] = i);
                }, i.get = function () {
                    return c;
                }, i.getEvents = function () {
                    var n = [];
                    return u._each(l, function (e) {
                        var t = r({}, e);
                        n.push(t);
                    }), n;
                }, i);
            },
            80: function (e, t, n) {
                var r = n(26), i = n(107), o = '__core-js_shared__', a = r[o] || i(o, {});
                e.exports = a;
            },
            81: function (e, t, n) {
                var r = n(30);
                e.exports = !!Object.getOwnPropertySymbols && !r(function () {
                    return !String(Symbol());
                });
            },
            82: function (e, t, n) {
                function r(c) {
                    return function (e, t, n) {
                        var r, i = u(e), o = s(i.length), a = d(n, o);
                        if (c && t != t) {
                            for (; a < o;)
                                if ((r = i[a++]) != r)
                                    return !0;
                        } else
                            for (; a < o; a++)
                                if ((c || a in i) && i[a] === t)
                                    return c || a || 0;
                        return !c && -1;
                    };
                }
                var u = n(45), s = n(49), d = n(111);
                e.exports = {
                    includes: r(!0),
                    indexOf: r(!1)
                };
            },
            83: function (e, t, n) {
                var r = n(112);
                n(135), n(137), n(139), n(141), n(143), n(144), n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), n(153), n(154), n(155), n(156), e.exports = r;
            },
            84: function (e, t, n) {
                function r(e) {
                    c(e, d, {
                        value: {
                            objectID: 'O' + ++f,
                            weakData: {}
                        }
                    });
                }
                var i = n(52), o = n(31), a = n(27), c = n(34).f, u = n(59), s = n(115), d = u('meta'), f = 0, l = Object.isExtensible || function () {
                        return !0;
                    }, p = e.exports = {
                        REQUIRED: !1,
                        fastKey: function (e, t) {
                            if (!o(e))
                                return 'symbol' == typeof e ? e : ('string' == typeof e ? 'S' : 'P') + e;
                            if (!a(e, d)) {
                                if (!l(e))
                                    return 'F';
                                if (!t)
                                    return 'E';
                                r(e);
                            }
                            return e[d].objectID;
                        },
                        getWeakData: function (e, t) {
                            if (!a(e, d)) {
                                if (!l(e))
                                    return !0;
                                if (!t)
                                    return !1;
                                r(e);
                            }
                            return e[d].weakData;
                        },
                        onFreeze: function (e) {
                            return s && p.REQUIRED && l(e) && !a(e, d) && r(e), e;
                        }
                    };
                i[d] = !0;
            },
            85: function (e, t, n) {
                var r = n(22), i = n(37), o = r('iterator'), a = Array.prototype;
                e.exports = function (e) {
                    return void 0 !== e && (i.Array === e || a[o] === e);
                };
            },
            86: function (e, t, n) {
                var o = n(15);
                e.exports = function (t, e, n, r) {
                    try {
                        return r ? e(o(n)[0], n[1]) : e(n);
                    } catch (e) {
                        var i = t.return;
                        throw void 0 !== i && o(i.call(t)), e;
                    }
                };
            },
            87: function (e, t) {
                e.exports = function (e, t, n) {
                    if (!(e instanceof t))
                        throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
                    return e;
                };
            },
            88: function (e, t, n) {
                function r() {
                }
                function i(e) {
                    return '<script>' + e + '</' + g + '>';
                }
                var o, a = n(15), c = n(120), u = n(89), s = n(52), d = n(123), f = n(78), l = n(65), p = 'prototype', g = 'script', b = l('IE_PROTO'), v = function () {
                        try {
                            o = document.domain && new ActiveXObject('htmlfile');
                        } catch (e) {
                        }
                        var e, t;
                        v = o ? function (e) {
                            e.write(i('')), e.close();
                            var t = e.parentWindow.Object;
                            return e = null, t;
                        }(o) : ((t = f('iframe')).style.display = 'none', d.appendChild(t), t.src = String('javascript:'), (e = t.contentWindow.document).open(), e.write(i('document.F=Object')), e.close(), e.F);
                        for (var n = u.length; n--;)
                            delete v[p][u[n]];
                        return v();
                    };
                s[b] = !0, e.exports = Object.create || function (e, t) {
                    var n;
                    return null !== e ? (r[p] = a(e), n = new r(), r[p] = null, n[b] = e) : n = v(), void 0 === t ? n : c(n, t);
                };
            },
            89: function (e, t) {
                e.exports = [
                    'constructor',
                    'hasOwnProperty',
                    'isPrototypeOf',
                    'propertyIsEnumerable',
                    'toLocaleString',
                    'toString',
                    'valueOf'
                ];
            },
            9: function (e, t, n) {
                'use strict';
                n.d(t, 'c', function () {
                    return l;
                }), n.d(t, 'd', function () {
                    return p;
                }), t.a = function (e) {
                    return o({
                        moduleName: e,
                        moduleType: 'core'
                    });
                }, t.b = function (e, t) {
                    return o({
                        gvlid: e,
                        moduleName: t
                    });
                };
                var r = n(10), u = n(0), i = n(12), d = n.n(i), f = [
                        'core',
                        'prebid-module'
                    ], l = [];
                function o(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {}, i = t.gvlid, o = t.moduleName, a = t.moduleType;
                    function s(n) {
                        if (d()(f, a)) {
                            return n({ valid: !0 });
                        }
                        var r;
                        return p(i, o, { hasEnforcementHook: !1 }, function (e) {
                            var t;
                            r = e && e.hasEnforcementHook ? n(e) : (t = {
                                hasEnforcementHook: !1,
                                valid: u.hasDeviceAccess()
                            }, n(t));
                        }), r;
                    }
                    var c = function (t) {
                        function n(e) {
                            const $___old_4c1099f44567dd3e = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                            try {
                                if ($___old_4c1099f44567dd3e)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___mock_74ac6b570a03df20.localStorage));
                                return function () {
                                    if (e && e.valid)
                                        try {
                                            return !!window.localStorage;
                                        } catch (e) {
                                            u.logError('Local storage api disabled');
                                        }
                                    return !1;
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_4c1099f44567dd3e)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___old_4c1099f44567dd3e));
                            }
                        }
                        if (!t || 'function' != typeof t)
                            return s(n);
                        l.push(function () {
                            var e = s(n);
                            t(e);
                        });
                    };
                    return {
                        setCookie: function (i, o, a, c, u, t) {
                            function n(e) {
                                var t, n, r;
                                e && e.valid && (t = u && '' !== u ? ' ;domain='.concat(encodeURIComponent(u)) : '', n = a && '' !== a ? ' ;expires='.concat(a) : '', r = null != c && 'none' == c.toLowerCase() ? '; Secure' : '', document.cookie = ''.concat(i, '=').concat(encodeURIComponent(o)).concat(n, '; path=/').concat(t).concat(c ? '; SameSite='.concat(c) : '').concat(r));
                            }
                            if (!t || 'function' != typeof t)
                                return s(n);
                            l.push(function () {
                                var e = s(n);
                                t(e);
                            });
                        },
                        getCookie: function (n, t) {
                            function r(e) {
                                if (e && e.valid) {
                                    var t = window.document.cookie.match('(^|;)\\s*' + n + '\\s*=\\s*([^;]*)\\s*(;|$)');
                                    return t ? decodeURIComponent(t[2]) : null;
                                }
                                return null;
                            }
                            if (!t || 'function' != typeof t)
                                return s(r);
                            l.push(function () {
                                var e = s(r);
                                t(e);
                            });
                        },
                        localStorageIsEnabled: function (t) {
                            function n(e) {
                                const $___old_29757e4c1e125b9a = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                                try {
                                    if ($___old_29757e4c1e125b9a)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_74ac6b570a03df20.localStorage));
                                    return function () {
                                        if (e && e.valid)
                                            try {
                                                return localStorage.setItem('prebid.cookieTest', '1'), '1' === localStorage.getItem('prebid.cookieTest');
                                            } catch (e) {
                                            } finally {
                                                try {
                                                    localStorage.removeItem('prebid.cookieTest');
                                                } catch (e) {
                                                }
                                            }
                                        return !1;
                                    }.apply(this, arguments);
                                } finally {
                                    if ($___old_29757e4c1e125b9a)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___old_29757e4c1e125b9a));
                                }
                            }
                            if (!t || 'function' != typeof t)
                                return s(n);
                            l.push(function () {
                                var e = s(n);
                                t(e);
                            });
                        },
                        cookiesAreEnabled: function (t) {
                            function n(e) {
                                return !(!e || !e.valid) && (!!u.checkCookieSupport() || (window.document.cookie = 'prebid.cookieTest', -1 !== window.document.cookie.indexOf('prebid.cookieTest')));
                            }
                            if (!t || 'function' != typeof t)
                                return s(n);
                            l.push(function () {
                                var e = s(n);
                                t(e);
                            });
                        },
                        setDataInLocalStorage: function (t, n, r) {
                            function i(e) {
                                e && e.valid && c() && window.localStorage.setItem(t, n);
                            }
                            if (!r || 'function' != typeof r)
                                return s(i);
                            l.push(function () {
                                var e = s(i);
                                r(e);
                            });
                        },
                        getDataFromLocalStorage: function (t, n) {
                            function r(e) {
                                const $___old_20205e8357ab044e = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                                try {
                                    if ($___old_20205e8357ab044e)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_74ac6b570a03df20.localStorage));
                                    return function () {
                                        return e && e.valid && c() ? window.localStorage.getItem(t) : null;
                                    }.apply(this, arguments);
                                } finally {
                                    if ($___old_20205e8357ab044e)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___old_20205e8357ab044e));
                                }
                            }
                            if (!n || 'function' != typeof n)
                                return s(r);
                            l.push(function () {
                                var e = s(r);
                                n(e);
                            });
                        },
                        removeDataFromLocalStorage: function (t, n) {
                            function r(e) {
                                e && e.valid && c() && window.localStorage.removeItem(t);
                            }
                            if (!n || 'function' != typeof n)
                                return s(r);
                            l.push(function () {
                                var e = s(r);
                                n(e);
                            });
                        },
                        hasLocalStorage: c,
                        findSimilarCookies: function (o, t) {
                            function n(e) {
                                if (e && e.valid) {
                                    var t = [];
                                    if (u.hasDeviceAccess())
                                        for (var n = document.cookie.split(';'); n.length;) {
                                            var r = n.pop(), i = (i = r.indexOf('=')) < 0 ? r.length : i;
                                            0 <= decodeURIComponent(r.slice(0, i).replace(/^\s+/, '')).indexOf(o) && t.push(decodeURIComponent(r.slice(i + 1)));
                                        }
                                    return t;
                                }
                            }
                            if (!t || 'function' != typeof t)
                                return s(n);
                            l.push(function () {
                                var e = s(n);
                                t(e);
                            });
                        }
                    };
                }
                var p = Object(r.b)('async', function (e, t, n, r) {
                    r(n);
                }, 'validateStorageEnforcement');
            },
            90: function (e, t, n) {
                var i = n(32);
                e.exports = function (e, t, n, r) {
                    r && r.enumerable ? e[t] = n : i(e, t, n);
                };
            },
            91: function (e, t, n) {
                'use strict';
                var r, i, o, a = n(92), c = n(32), u = n(27), s = n(22), d = n(17), f = s('iterator'), l = !1;
                [].keys && ('next' in (o = [].keys()) ? (i = a(a(o))) !== Object.prototype && (r = i) : l = !0), null == r && (r = {}), d || u(r, f) || c(r, f, function () {
                    return this;
                }), e.exports = {
                    IteratorPrototype: r,
                    BUGGY_SAFARI_ITERATORS: l
                };
            },
            92: function (e, t, n) {
                var r = n(27), i = n(57), o = n(65), a = n(126), c = o('IE_PROTO'), u = Object.prototype;
                e.exports = a ? Object.getPrototypeOf : function (e) {
                    return e = i(e), r(e, c) ? e[c] : 'function' == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null;
                };
            },
            93: function (e, t, n) {
                'use strict';
                var i = n(131).charAt, r = n(53), o = n(66), a = 'String Iterator', c = r.set, u = r.getterFor(a);
                o(String, 'String', function (e) {
                    c(this, {
                        type: a,
                        string: String(e),
                        index: 0
                    });
                }, function () {
                    var e, t = u(this), n = t.string, r = t.index;
                    return r >= n.length ? {
                        value: void 0,
                        done: !0
                    } : (e = i(n, r), t.index += e.length, {
                        value: e,
                        done: !1
                    });
                });
            },
            94: function (e, t, n) {
                var r = n(15), i = n(61);
                e.exports = function (e) {
                    var t = i(e);
                    if ('function' != typeof t)
                        throw TypeError(String(e) + ' is not iterable');
                    return r(t.call(e));
                };
            },
            95: function (e, t, n) {
                var r = n(157);
                e.exports = r;
            },
            96: function (e, t, n) {
                'use strict';
                t.a = function (e, t) {
                    if (e.labelAll)
                        return {
                            labelAll: !0,
                            labels: e.labelAll,
                            activeLabels: t
                        };
                    return {
                        labelAll: !1,
                        labels: e.labelAny,
                        activeLabels: t
                    };
                }, t.c = function (e) {
                    var t = v(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
                    return !t.shouldFilter || !!t.sizesSupported[e];
                }, t.b = function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.labels, n = void 0 === t ? [] : t, r = e.labelAll, i = void 0 !== r && r, o = e.activeLabels, a = void 0 === o ? [] : o, c = 1 < arguments.length ? arguments[1] : void 0, u = 2 < arguments.length ? arguments[2] : void 0, s = v(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b);
                    c = Object(p.isPlainObject)(c) ? Object(p.deepClone)(c) : u ? { banner: { sizes: u } } : {};
                    var d = Object(p.deepAccess)(c, 'banner.sizes');
                    s.shouldFilter && d && (c.banner.sizes = d.filter(function (e) {
                        return s.sizesSupported[e];
                    }));
                    var f = Object.keys(c), l = {
                            active: f.every(function (e) {
                                return 'banner' !== e;
                            }) || f.some(function (e) {
                                return 'banner' === e;
                            }) && 0 < Object(p.deepAccess)(c, 'banner.sizes.length') && (0 === n.length || !i && (n.some(function (e) {
                                return s.labels[e];
                            }) || n.some(function (e) {
                                return g()(a, e);
                            })) || i && n.reduce(function (e, t) {
                                return e ? s.labels[t] || g()(a, t) : e;
                            }, !0)),
                            mediaTypes: c
                        };
                    d && d.length !== c.banner.sizes.length && (l.filterResults = {
                        before: d,
                        after: c.banner.sizes
                    });
                    return l;
                };
                var r = n(3), p = n(0), i = n(12), g = n.n(i);
                function o(e) {
                    return (o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var b = [];
                function v(e) {
                    return e.reduce(function (n, r) {
                        if ('object' === o(r) && 'string' == typeof r.mediaQuery && 0 < r.mediaQuery.length) {
                            var t = !1;
                            try {
                                t = Object(p.getWindowTop)().matchMedia(r.mediaQuery).matches;
                            } catch (e) {
                                Object(p.logWarn)('Unfriendly iFrame blocks sizeConfig from being correctly evaluated'), t = matchMedia(r.mediaQuery).matches;
                            }
                            t && (Array.isArray(r.sizesSupported) && (n.shouldFilter = !0), [
                                'labels',
                                'sizesSupported'
                            ].forEach(function (t) {
                                return (r[t] || []).forEach(function (e) {
                                    return n[t][e] = !0;
                                });
                            }));
                        } else
                            Object(p.logWarn)('sizeConfig rule missing required property "mediaQuery"');
                        return n;
                    }, {
                        labels: {},
                        sizesSupported: {},
                        shouldFilter: !1
                    });
                }
                r.b.getConfig('sizeConfig', function (e) {
                    return t = e.sizeConfig, void (b = t);
                    var t;
                });
            },
            97: function (e, t, n) {
                'use strict';
                t.b = function (e, t, n) {
                    var r = { puts: e.map(c, n) };
                    Object(i.a)(o.b.getConfig('cache.url'), function (n) {
                        return {
                            success: function (e) {
                                var t;
                                try {
                                    t = JSON.parse(e).responses;
                                } catch (e) {
                                    return void n(e, []);
                                }
                                t ? n(null, t) : n(new Error('The cache server didn\'t respond with a responses property.'), []);
                            },
                            error: function (e, t) {
                                n(new Error('Error storing video ad in the cache: '.concat(e, ': ').concat(JSON.stringify(t))), []);
                            }
                        };
                    }(t), JSON.stringify(r), {
                        contentType: 'text/plain',
                        withCredentials: !0
                    });
                }, t.a = function (e) {
                    return ''.concat(o.b.getConfig('cache.url'), '?uuid=').concat(e);
                };
                var i = n(4), o = n(3), a = n(0);
                function c(e) {
                    var t, n, r, i = {
                            type: 'xml',
                            value: e.vastXml ? e.vastXml : (t = e.vastUrl, n = e.vastImpUrl, r = n ? '<![CDATA['.concat(n, ']]>') : '', '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t, ']]></VASTAdTagURI>\n        <Impression>').concat(r, '</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>')),
                            ttlseconds: Number(e.ttl)
                        };
                    return o.b.getConfig('cache.vasttrack') && (i.bidder = e.bidder, i.bidid = e.requestId, i.aid = e.auctionId, a.isPlainObject(this) && this.hasOwnProperty('auctionStart') && (i.timestamp = this.auctionStart)), 'string' == typeof e.customCacheKey && '' !== e.customCacheKey && (i.key = e.customCacheKey), i;
                }
            }
        });
        pbjsChunk([267], {
            208: function (e, t, i) {
                e.exports = i(209);
            },
            209: function (e, t, i) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), t.callPrebidCacheHook = _, t.checkAdUnitSetupHook = R, t.checkVideoBidSetupHook = K, t.adpodSetConfig = P, t.callPrebidCacheAfterAuction = x, t.sortByPricePerSecond = z, t.getTargeting = G;
                var h = i(0), p = i(33), n = i(72), a = i(25), r = i(10), u = i(97), y = i(3), m = i(2), o = i(83), s = i.n(o), d = i(11), c = i.n(d), T = i(23), l = i(5), f = i.n(l);
                function C() {
                    return (C = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var i = arguments[t];
                            for (var n in i)
                                Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function S(e, t, i) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: i,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = i, e;
                }
                function A(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var i = [], n = !0, a = !1, r = void 0;
                        try {
                            for (var o, d = e[Symbol.iterator](); !(n = (o = d.next()).done) && (i.push(o.value), !t || i.length !== t); n = !0);
                        } catch (e) {
                            a = !0, r = e;
                        } finally {
                            try {
                                n || null == d.return || d.return();
                            } finally {
                                if (a)
                                    throw r;
                            }
                        }
                        return i;
                    }(e, t) || v(e, t) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function g(e) {
                    return function (e) {
                        if (Array.isArray(e))
                            return b(e);
                    }(e) || function (e) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                            return Array.from(e);
                    }(e) || v(e) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function v(e, t) {
                    if (e) {
                        if ('string' == typeof e)
                            return b(e, t);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        return 'Object' === i && e.constructor && (i = e.constructor.name), 'Map' === i || 'Set' === i ? Array.from(e) : 'Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i) ? b(e, t) : void 0;
                    }
                }
                function b(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++)
                        n[i] = e[i];
                    return n;
                }
                var I, E = i(95), j = 'hb_pb_cat_dur', D = 'hb_cache_id', O = 50, w = 5, U = (I = {}, {
                        addBid: function (e) {
                            I[e.auctionId] || B(e.auctionId), I[e.auctionId].bidStorage.add(e);
                        },
                        removeBid: function (e) {
                            I[e.auctionId].bidStorage.delete(e);
                        },
                        getBids: function (e) {
                            return I[e.auctionId] && I[e.auctionId].bidStorage.values();
                        },
                        getQueueDispatcher: function (e) {
                            return I[e.auctionId] && I[e.auctionId].queueDispatcher;
                        },
                        setupInitialCacheKey: function (e) {
                            I[e.auctionId] || (I[e.auctionId] = {}, I[e.auctionId].initialCacheKey = h.generateUUID());
                        },
                        getInitialCacheKey: function (e) {
                            return I[e.auctionId] && I[e.auctionId].initialCacheKey;
                        }
                    });
                function B(e) {
                    var o, d, c;
                    I[e] = {}, I[e].bidStorage = new s.a(), I[e].queueDispatcher = (o = O, c = 1, function (e, t, i, n) {
                        function a() {
                            (function (a, r, o) {
                                (function (e) {
                                    for (var t = 0; t < e.length; t++)
                                        U.removeBid(e[t]);
                                }(r), Object(u.b)(r, function (e, t) {
                                    if (e) {
                                        h.logWarn('Failed to save to the video cache: '.concat(e, '. Video bid(s) must be discarded.'));
                                        for (var i = 0; i < r.length; i++)
                                            Object(p.g)(a, r[i]);
                                    } else
                                        for (var n = 0; n < t.length; n++)
                                            '' !== t[n].uuid ? Object(p.d)(a, r[n]) : h.logInfo('Detected a bid was not cached because the custom key was already registered.  Attempted to use key: '.concat(r[n].customCacheKey, '. Bid was: '), r[n]), o();
                                }));
                            }.call(r, e, t, i));
                        }
                        var r = this;
                        clearTimeout(d), n ? c = 1 : c === w ? (c = 1, a()) : (c++, d = setTimeout(a, o));
                    }), I[e].initialCacheKey = h.generateUUID();
                }
                function k(e, t) {
                    var i, n, a, r, o, d = U.getInitialCacheKey(e), c = h.deepAccess(e, 'video.durationBucket'), u = (i = e, y.b.getConfig('adpod.prioritizeDeals') && h.deepAccess(i, 'video.dealTier') ? (n = y.b.getConfig('adpod.dealTier.'.concat(i.bidderCode, '.prefix'))) ? n + h.deepAccess(i, 'video.dealTier') : h.deepAccess(i, 'video.dealTier') : (a = Object(p.i)(i.mediaType), Object(p.h)(a)(i)));
                    o = t ? (r = h.deepAccess(e, 'meta.adServerCatId'), ''.concat(u, '_').concat(r, '_').concat(c, 's')) : ''.concat(u, '_').concat(c, 's'), e.adserverTargeting || (e.adserverTargeting = {}), e.adserverTargeting[j] = o, e.adserverTargeting[D] = d, e.videoCacheKey = d, e.customCacheKey = ''.concat(o, '_').concat(d);
                }
                function _(e, t, i, n, a) {
                    var r, o, d, c, u, s, l, f, g = h.deepAccess(a, 'mediaTypes.video');
                    g && g.context === m.a ? (r = y.b.getConfig('adpod.brandCategoryExclusion'), !h.deepAccess(i, 'meta.adServerCatId') && r ? (h.logWarn('Detected a bid without meta.adServerCatId while setConfig({adpod.brandCategoryExclusion}) was enabled.  This bid has been rejected:', i), n()) : !1 === y.b.getConfig('adpod.deferCaching') ? (U.addBid(i), k(i, r), o = t, d = i, c = n, (f = U.getBids(d)) ? (u = E(f), s = U.getQueueDispatcher(d), l = !(o.getAuctionStatus() === p.b), s(o, u, c, l)) : h.logWarn('Attempted to cache a bid from an unknown auction. Bid:', d)) : (U.setupInitialCacheKey(i), k(i, r), Object(p.d)(t, i), n())) : e.call(this, t, i, n, a);
                }
                function R(e, t) {
                    t = t.filter(function (e) {
                        var t = h.deepAccess(e, 'mediaTypes'), i = h.deepAccess(t, 'video');
                        if (i && i.context === m.a) {
                            if (1 < Object.keys(t).length)
                                return h.logWarn('Detected more than one mediaType in adUnitCode: '.concat(e.code, ' while attempting to define an \'adpod\' video adUnit.  \'adpod\' adUnits cannot be mixed with other mediaTypes.  This adUnit will be removed from the auction.')), !1;
                            var n = 'Detected missing or incorrectly setup fields for an adpod adUnit.  Please review the following fields of adUnitCode: '.concat(e.code, '.  This adUnit will be removed from the auction.'), a = !!(i.playerSize && (h.isArrayOfNums(i.playerSize, 2) || h.isArray(i.playerSize) && i.playerSize.every(function (e) {
                                    return h.isArrayOfNums(e, 2);
                                })) || i.sizeConfig), r = !!(i.adPodDurationSec && h.isNumber(i.adPodDurationSec) && 0 < i.adPodDurationSec), o = !!(i.durationRangeSec && h.isArrayOfNums(i.durationRangeSec) && i.durationRangeSec.every(function (e) {
                                    return 0 < e;
                                }));
                            if (!a || !r || !o)
                                return n += a ? '' : '\nmediaTypes.video.playerSize', n += r ? '' : '\nmediaTypes.video.adPodDurationSec', n += o ? '' : '\nmediaTypes.video.durationRangeSec', h.logWarn(n), !1;
                        }
                        return !0;
                    }), e.call(this, t);
                }
                function K(e, t, i, n, a) {
                    var r;
                    a === m.a ? (r = !0, y.b.getConfig('adpod.brandCategoryExclusion') && !h.deepAccess(t, 'meta.primaryCatId') && (r = !1), h.deepAccess(t, 'video') && (h.deepAccess(t, 'video.context') && t.video.context === m.a || (r = !1), h.deepAccess(t, 'video.durationSeconds') && !(t.video.durationSeconds <= 0) && function (e, t) {
                        var i = h.deepAccess(t, 'video.durationSeconds'), n = h.deepAccess(e, 'mediaTypes.video'), a = n.durationRangeSec;
                        if (a.sort(function (e, t) {
                                return e - t;
                            }), n.requireExactDuration) {
                            if (!c()(a, function (e) {
                                    return e === i;
                                }))
                                return h.logWarn('Detected a bid with a duration value not part of the list of accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Exact match durations must be used for this adUnit. Rejecting bid: ', t), !1;
                            t.video.durationBucket = i;
                        } else {
                            var r = Math.max.apply(Math, g(a));
                            if (!(i <= r + 2))
                                return h.logWarn('Detected a bid with a duration value outside the accepted ranges specified in adUnit.mediaTypes.video.durationRangeSec.  Rejecting bid: ', t), !1;
                            var o = c()(a, function (e) {
                                return i <= e + 2;
                            });
                            t.video.durationBucket = o;
                        }
                        return !0;
                    }(i, t) || (r = !1)), y.b.getConfig('cache.url') || !t.vastXml || t.vastUrl || (h.logError('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjs.setConfig({ cache: {url: "..."} });\n      '), r = !1), e.bail(r)) : e.call(this, t, i, n, a);
                }
                function P(e) {
                    void 0 !== e.bidQueueTimeDelay && ('number' == typeof e.bidQueueTimeDelay && 0 < e.bidQueueTimeDelay ? O = e.bidQueueTimeDelay : h.logWarn('Detected invalid value for adpod.bidQueueTimeDelay in setConfig; must be a positive number.  Using default: '.concat(O))), void 0 !== e.bidQueueSizeLimit && ('number' == typeof e.bidQueueSizeLimit && 0 < e.bidQueueSizeLimit ? w = e.bidQueueSizeLimit : h.logWarn('Detected invalid value for adpod.bidQueueSizeLimit in setConfig; must be a positive number.  Using default: '.concat(w)));
                }
                function x(a, r) {
                    Object(u.b)(a, function (e, t) {
                        if (e)
                            r(e, null);
                        else {
                            for (var i = [], n = 0; n < t.length; n++)
                                '' !== t[n] && i.push(a[n]);
                            r(null, i);
                        }
                    });
                }
                function z(e, t) {
                    return e.adserverTargeting[f.a.TARGETING_KEYS.PRICE_BUCKET] / e.video.durationBucket < t.adserverTargeting[f.a.TARGETING_KEYS.PRICE_BUCKET] / t.video.durationBucket ? 1 : e.adserverTargeting[f.a.TARGETING_KEYS.PRICE_BUCKET] / e.video.durationBucket > t.adserverTargeting[f.a.TARGETING_KEYS.PRICE_BUCKET] / t.video.durationBucket ? -1 : 0;
                }
                function G() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.codes, n = e.callback;
                    if (n) {
                        var i, a, r, o, d, c, u = (i = t || [], T.a.getAdUnits().filter(function (e) {
                                return h.deepAccess(e, 'mediaTypes.video.context') === m.a;
                            }).filter(function (e) {
                                return !(0 < i.length) || -1 != i.indexOf(e.code);
                            })), s = T.a.getBidsReceived(), l = y.b.getConfig('adpod.brandCategoryExclusion'), f = y.b.getConfig('adpod.deferCaching'), g = 'boolean' != typeof f || f, p = (a = s, r = u.map(function (e) {
                                return e.code;
                            }), a.filter(function (e) {
                                return -1 != r.indexOf(e.adUnitCode) && e.video && e.video.context === m.a;
                            })), p = l || g ? function (e) {
                                var t = e.map(function (e) {
                                    return C({}, e, S({}, j, e.adserverTargeting[j]));
                                });
                                t = h.groupBy(t, j);
                                var i = [];
                                return Object.keys(t).forEach(function (e) {
                                    t[e].sort(h.compareOn('responseTimestamp')), i.push(t[e][0]);
                                }), i;
                            }(p) : p;
                        y.b.getConfig('adpod.prioritizeDeals') ? (d = (o = A(p.reduce(function (e, t) {
                            var i = h.deepAccess(t, 'video.dealTier'), n = y.b.getConfig('adpod.dealTier.'.concat(t.bidderCode, '.minDealTier'));
                            return n && i ? n <= i ? e[1].push(t) : e[0].push(t) : i ? e[1].push(t) : e[0].push(t), e;
                        }, [
                            [],
                            []
                        ]), 2))[0], (c = o[1]).sort(z), d.sort(z), p = c.concat(d)) : p.sort(z);
                        var v, b = {};
                        return !1 === g ? (u.forEach(function (t) {
                            var n = [], a = h.deepAccess(t, 'mediaTypes.video.adPodDurationSec');
                            p.filter(function (e) {
                                return e.adUnitCode === t.code;
                            }).forEach(function (e, t, i) {
                                e.video.durationBucket <= a && (n.push(S({}, j, e.adserverTargeting[j])), a -= e.video.durationBucket), t === i.length - 1 && 0 < n.length && n.push(S({}, D, e.adserverTargeting[D]));
                            }), b[t.code] = n;
                        }), n(null, b)) : (v = [], u.forEach(function (t) {
                            var i = h.deepAccess(t, 'mediaTypes.video.adPodDurationSec');
                            p.filter(function (e) {
                                return e.adUnitCode === t.code;
                            }).forEach(function (e) {
                                e.video.durationBucket <= i && (v.push(e), i -= e.video.durationBucket);
                            });
                        }), x(v, function (e, t) {
                            var i;
                            e ? n(e, null) : (i = h.groupBy(t, 'adUnitCode'), Object.keys(i).forEach(function (e) {
                                var n = [];
                                i[e].forEach(function (e, t, i) {
                                    n.push(S({}, j, e.adserverTargeting[j])), t === i.length - 1 && 0 < n.length && n.push(S({}, D, e.adserverTargeting[D]));
                                }), b[e] = n;
                            }), n(null, b));
                        })), b;
                    }
                    h.logError('No callback function was defined in the getTargeting call.  Aborting getTargeting().');
                }
                y.b.getConfig('adpod', function (e) {
                    return P(e.adpod);
                }), Object(r.d)(p.f, _), Object(r.d)(n.checkAdUnitSetup, R), Object(r.d)(a.c, K);
                var Q = {
                    TARGETING_KEY_PB_CAT_DUR: j,
                    TARGETING_KEY_CACHE_ID: D,
                    getTargeting: G
                };
                Object.freeze(Q), Object(r.c)('adpod', function (e) {
                    h.isPlainObject(arguments.length <= 0 ? void 0 : e) ? function (e, t) {
                        for (var i in t)
                            e[i] = t[i];
                    }(arguments.length <= 0 ? void 0 : e, Q) : h.logError('Adpod module needs plain object to share methods with submodule');
                });
            }
        }, [208]);
        pbjsChunk([257], {
            234: function (e, t, n) {
                e.exports = n(235);
            },
            235: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'spec', function () {
                    return I;
                });
                var r = n(1), d = n(2), l = n(0), p = n(3), c = n(9);
                function i(t, e) {
                    var n, r = Object.keys(t);
                    return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), r.push.apply(r, n)), r;
                }
                function o(t) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? i(Object(n), !0).forEach(function (e) {
                            b(t, e, n[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : i(Object(n)).forEach(function (e) {
                            Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e));
                        });
                    }
                    return t;
                }
                function b(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                function a(e) {
                    return (a = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var f = Object(c.b)(737, 'amx'), m = /\.com?\.\w{2,4}$/, u = /^\s*<\??(?:vast|xml)/i, g = '__amuidpb';
                var s = function (e, t) {
                    return e.concat(Object(l.deepAccess)(t, ''.concat(d.b, '.sizes'), []) || []).concat(Object(l.deepAccess)(t, ''.concat(d.d, '.sizes'), []) || []).sort(function (e, t) {
                        return t[0] * t[1] - e[0] * e[1];
                    })[0];
                };
                function h(e, t) {
                    return null == e ? [] : e.map(t).reduce(function (e, t) {
                        return null != t && e.concat(t);
                    }, []);
                }
                function O(e) {
                    return null != (t = e.adm) && u.test(t) ? d.d : d.b;
                    var t;
                }
                function y(e, t) {
                    return null == e || a(e) === t;
                }
                var j = encodeURIComponent;
                function v(e) {
                    var t = {};
                    return Object(l._each)(e, function (e) {
                        t[e.bidId] = function (e) {
                            var t = s(e.sizes, e.mediaTypes) || [
                                    0,
                                    0
                                ], n = e.mediaType === d.d || d.d in e.mediaTypes, r = n || 100 < t[1], c = Object(l.deepAccess)(e, 'params.tagId'), i = null != e.params && 'string' == typeof e.params.adUnitId ? e.params.adUnitId : e.adUnitCode, o = [
                                    e.sizes,
                                    Object(l.deepAccess)(e, 'mediaTypes.'.concat(d.b, '.sizes'), []) || [],
                                    Object(l.deepAccess)(e, 'mediaTypes.'.concat(d.d, '.sizes'), []) || []
                                ], a = Object(l.deepAccess)(e, 'mediaTypes.'.concat(d.d), {}) || {}, u = {
                                    au: i,
                                    av: r,
                                    vd: a,
                                    vr: n,
                                    ms: o,
                                    aw: t[0],
                                    ah: t[1],
                                    tf: 0,
                                    sc: e.schain || {},
                                    f: function (e) {
                                        return 'number' == typeof e && isFinite(e) && 0 < e ? e : A;
                                    }(function (e) {
                                        if (!Object(l.isFn)(e.getFloor))
                                            return Object(l.deepAccess)(e, 'params.floor', A);
                                        try {
                                            return e.getFloor({
                                                currency: 'USD',
                                                mediaType: '*',
                                                size: '*',
                                                bidRequest: e
                                            }).floor;
                                        } catch (e) {
                                            return Object(l.logError)('call to getFloor failed: ', e), A;
                                        }
                                    }(e))
                                };
                            'string' == typeof c && 0 < c.length && (u.i = c);
                            return u;
                        }(e);
                    }), t;
                }
                function w(e, t) {
                    return Object(l.triggerPixel)(''.concat('https://1x1.a-mo.net/hbx/', 'g_').concat(e, '?').concat(Object(l.formatQS)(o(o({}, t), {}, {
                        ts: Date.now(),
                        eid: Object(l.getUniqueIdentifierStr)()
                    }))));
                }
                var A = 0;
                var I = {
                    code: 'amx',
                    supportedMediaTypes: [
                        d.b,
                        d.d
                    ],
                    isBidRequestValid: function (e) {
                        return y(Object(l.deepAccess)(e, 'params.endpoint', null), 'string') && y(Object(l.deepAccess)(e, 'params.tagId', null), 'string');
                    },
                    buildRequests: function (e, t) {
                        var n, r, c, i, o, a = function (e) {
                                var t = e.refererInfo;
                                if (null == t)
                                    return Object(l.parseUrl)(location.href);
                                if (t.isAmp && null != t.referer)
                                    return Object(l.parseUrl)(t.referer);
                                var n = 0 < t.numIframes && null != t.stack[0] ? t.stack[0] : location.href;
                                return Object(l.parseUrl)(n);
                            }(t), u = Object(l.deepAccess)(e[0], 'params.tagId', null), s = Object(l.deepAccess)(e[0], 'params.testMode', 0), d = null != e[0] ? e[0] : {
                                bidderRequestsCount: 0,
                                bidderWinsCount: 0,
                                bidRequestsCount: 0
                            };
                        return {
                            data: {
                                a: t.auctionId,
                                B: 0,
                                b: a.host,
                                brc: d.bidderRequestsCount || 0,
                                bwc: d.bidderWinsCount || 0,
                                trc: d.bidRequestsCount || 0,
                                tm: !0 === (o = s) || 1 === o || 'true' === o,
                                V: '5.1.0',
                                vg: 'pbjs',
                                i: s && null != u ? u : (c = (r = a).hostname.split('.'), i = c.slice(c.length - (m.test(r.hostname) ? 3 : 2)).join('.'), btoa(i).replace(/=+$/, '')),
                                l: {},
                                f: 0.01,
                                cv: 'pba1.3.1',
                                st: 'prebid',
                                h: screen.height,
                                w: screen.width,
                                gs: Object(l.deepAccess)(t, 'gdprConsent.gdprApplies', ''),
                                gc: Object(l.deepAccess)(t, 'gdprConsent.consentString', ''),
                                u: Object(l.deepAccess)(t, 'refererInfo.canonicalUrl', a.href),
                                do: a.hostname,
                                re: Object(l.deepAccess)(t, 'refererInfo.referer'),
                                am: function () {
                                    try {
                                        return f.getDataFromLocalStorage(g);
                                    } catch (e) {
                                        return null;
                                    }
                                }(),
                                usp: t.uspConsent || '1---',
                                smt: 1,
                                d: '',
                                m: v(e),
                                cpp: p.b.getConfig('coppa') ? 1 : 0,
                                fpd2: p.b.getConfig('ortb2'),
                                tmax: p.b.getConfig('bidderTimeout'),
                                eids: (n = e.reduce(function (t, e) {
                                    return null == e || null == e.userIdAsEids || Object(l._each)(e.userIdAsEids, function (e) {
                                        null != e && (t[e.source] = e);
                                    }), t;
                                }, {}), null != Object.values ? Object.values(n) : Object.keys(n).map(function (e) {
                                    return n[e];
                                }))
                            },
                            method: 'POST',
                            url: Object(l.deepAccess)(e[0], 'params.endpoint', 'https://prebid.a-mo.net/a/c'),
                            withCredentials: !0
                        };
                    },
                    getUserSyncs: function (n, e) {
                        if (null == e || 0 === e.length)
                            return [];
                        var r = [];
                        return Object(l._each)(e, function (e) {
                            var t = e.body;
                            null != t && null != t.p && t.p.hreq && Object(l._each)(t.p.hreq, function (e) {
                                var t = -1 !== e.indexOf('__st=iframe') ? 'iframe' : 'image';
                                !n.iframeEnabled && 'image' != t || r.push({
                                    url: e,
                                    type: t
                                });
                            });
                        }), r;
                    },
                    interpretResponse: function (e, s) {
                        var t = e.body;
                        return null == t || 'string' == typeof t ? [] : (t.am && 'string' == typeof t.am && function (e) {
                            try {
                                f.setDataInLocalStorage(g, e);
                            } catch (e) {
                            }
                        }(t.am), h(Object.keys(t.r), function (u) {
                            return h(t.r[u], function (e) {
                                return e.b.map(function (e) {
                                    var t, n, r = O(e), c = r === d.b ? (t = e, n = Object(l.deepAccess)(t, 'ext.himp', []).concat(null != t.nurl ? [t.nurl] : []).filter(function (e) {
                                            return null != e && 0 < e.length;
                                        }).map(function (e) {
                                            return '<img src="'.concat(e, '" width="0" height="0"/>');
                                        }).join(''), t.adm + n) : e.adm;
                                    if (null == c)
                                        return null;
                                    var i, o = function (e, t, n) {
                                            if (null != e.w && 1 < e.w && null != e.h && 1 < e.h)
                                                return [
                                                    e.w,
                                                    e.h
                                                ];
                                            var r = t.m[n];
                                            return null == r ? [
                                                0,
                                                0
                                            ] : [
                                                r.aw,
                                                r.ah
                                            ];
                                        }(e, s.data, u), a = r === d.b ? 240 : 300;
                                    return b(i = {
                                        requestId: u,
                                        cpm: e.price,
                                        width: o[0],
                                        height: o[1],
                                        creativeId: e.crid,
                                        currency: 'USD',
                                        netRevenue: !0
                                    }, r === d.d ? 'vastXml' : 'ad', c), b(i, 'meta', {
                                        advertiserDomains: e.adomain,
                                        mediaType: r
                                    }), b(i, 'mediaType', r), b(i, 'ttl', 'number' == typeof e.exp ? e.exp : a), i;
                                });
                            }).filter(function (e) {
                                return null != e;
                            });
                        }));
                    },
                    onSetTargeting: function (e) {
                        var t, n;
                        null != e && w('pbst', {
                            A: e.bidder,
                            w: e.width,
                            h: e.height,
                            bid: e.adId,
                            c1: e.mediaType,
                            np: e.cpm,
                            aud: e.requestId,
                            a: e.adUnitCode,
                            c2: (t = e.adserverTargeting, n = [], Object.keys(t || {}).forEach(function (e) {
                                n.push(j(e) + '=' + j(String(t[e])));
                            }), j(n.join('&')))
                        });
                    },
                    onTimeout: function (e) {
                        null != e && w('pbto', {
                            A: e.bidder,
                            bid: e.bidId,
                            a: e.adUnitCode,
                            cn: e.timeout,
                            aud: e.auctionId
                        });
                    },
                    onBidWon: function (e) {
                        null != e && w('pbwin', {
                            A: e.bidder,
                            w: e.width,
                            h: e.height,
                            bid: e.adId,
                            C: e.mediaType === d.b ? 0 : 1,
                            np: e.cpm,
                            a: e.adUnitCode
                        });
                    }
                };
                Object(r.registerBidder)(I);
            }
        }, [234]);
        pbjsChunk([251], {
            250: function (e, r, a) {
                e.exports = a(251);
            },
            251: function (e, r, a) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), a.d(r, 'spec', function () {
                    return j;
                });
                var f = a(13), I = a(0), A = a(3), v = a(1), y = a(2), u = a(23), t = a(11), w = a.n(t), n = a(12), x = a.n(n), b = a(25), i = a(9);
                function s(e) {
                    return (s = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function g() {
                    return (g = Object.assign || function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var a = arguments[r];
                            for (var t in a)
                                Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function C(e) {
                    return function (e) {
                        if (Array.isArray(e))
                            return o(e);
                    }(e) || function (e) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                            return Array.from(e);
                    }(e) || function (e, r) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return o(e, r);
                        var a = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === a && e.constructor && (a = e.constructor.name);
                        if ('Map' === a || 'Set' === a)
                            return Array.from(e);
                        if ('Arguments' === a || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))
                            return o(e, r);
                    }(e) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function o(e, r) {
                    (null == r || r > e.length) && (r = e.length);
                    for (var a = 0, t = new Array(r); a < r; a++)
                        t[a] = e[a];
                    return t;
                }
                var d = 'appnexus', l = [
                        'id',
                        'minduration',
                        'maxduration',
                        'skippable',
                        'playback_method',
                        'frameworks',
                        'context',
                        'skipoffset'
                    ], m = [
                        'minduration',
                        'maxduration',
                        'skip',
                        'skipafter',
                        'playbackmethod',
                        'api'
                    ], S = [
                        'age',
                        'externalUid',
                        'segments',
                        'gender',
                        'dnt',
                        'language'
                    ], T = [
                        'geo',
                        'device_id'
                    ], E = [
                        'enabled',
                        'dongle',
                        'member_id',
                        'debug_timeout'
                    ], h = {
                        playback_method: {
                            unknown: 0,
                            auto_play_sound_on: 1,
                            auto_play_sound_off: 2,
                            click_to_play: 3,
                            mouse_over: 4,
                            auto_play_sound_unknown: 5
                        },
                        context: {
                            unknown: 0,
                            pre_roll: 1,
                            mid_roll: 2,
                            post_roll: 3,
                            outstream: 4,
                            'in-banner': 5
                        }
                    }, _ = {
                        body: 'description',
                        body2: 'desc2',
                        cta: 'ctatext',
                        image: {
                            serverName: 'main_image',
                            requiredParams: { required: !0 }
                        },
                        icon: {
                            serverName: 'icon',
                            requiredParams: { required: !0 }
                        },
                        sponsoredBy: 'sponsored_by',
                        privacyLink: 'privacy_link',
                        salePrice: 'saleprice',
                        displayUrl: 'displayurl'
                    }, p = '<script', c = /\/\/cdn\.adnxs\.com\/v|\/\/cdn\.adnxs\-simple\.com\/v/, k = 'trk.js', O = Object(i.b)(32, d), j = {
                        code: d,
                        gvlid: 32,
                        aliases: [
                            {
                                code: 'appnexusAst',
                                gvlid: 32
                            },
                            { code: 'brealtime' },
                            {
                                code: 'emxdigital',
                                gvlid: 183
                            },
                            { code: 'pagescience' },
                            { code: 'defymedia' },
                            { code: 'gourmetads' },
                            { code: 'matomy' },
                            { code: 'featureforward' },
                            { code: 'oftmedia' },
                            {
                                code: 'districtm',
                                gvlid: 144
                            },
                            { code: 'adasta' },
                            {
                                code: 'beintoo',
                                gvlid: 618
                            }
                        ],
                        supportedMediaTypes: [
                            y.b,
                            y.d,
                            y.c
                        ],
                        isBidRequestValid: function (e) {
                            return !!(e.params.placementId || e.params.member && e.params.invCode);
                        },
                        buildRequests: function (e, r) {
                            var t = e.map(q), n = w()(e, M), i = {};
                            !0 === A.b.getConfig('coppa') && (i = { coppa: !0 }), n && Object.keys(n.params.user).filter(function (e) {
                                return x()(S, e);
                            }).forEach(function (e) {
                                var r, a = I.convertCamelToUnderscore(e);
                                'segments' === e && I.isArray(n.params.user[e]) ? (r = [], n.params.user[e].forEach(function (e) {
                                    I.isNumber(e) ? r.push({ id: e }) : I.isPlainObject(e) && r.push(e);
                                }), i[a] = r) : 'segments' !== e && (i[a] = n.params.user[e]);
                            });
                            var a, s = w()(e, B);
                            s && s.params && s.params.app && (a = {}, Object.keys(s.params.app).filter(function (e) {
                                return x()(T, e);
                            }).forEach(function (e) {
                                return a[e] = s.params.app[e];
                            }));
                            var o, d = w()(e, F);
                            d && d.params && s.params.app && s.params.app.id && (o = { appid: d.params.app.id });
                            var p = {}, c = {}, u = O.getCookie('apn_prebid_debug') || null;
                            if (u)
                                try {
                                    p = JSON.parse(u);
                                } catch (e) {
                                    I.logError('AppNexus Debug Auction Cookie Error:\n\n' + e);
                                }
                            else {
                                var l = w()(e, V);
                                l && l.debug && (p = l.debug);
                            }
                            p && p.enabled && Object.keys(p).filter(function (e) {
                                return x()(E, e);
                            }).forEach(function (e) {
                                c[e] = p[e];
                            });
                            var m, f, v, y, b = w()(e, D), g = b ? parseInt(b.params.member, 10) : 0, h = e[0].schain, _ = w()(e, W), k = {
                                    tags: C(t),
                                    user: i,
                                    sdk: {
                                        source: 'pbjs',
                                        version: '5.1.0'
                                    },
                                    schain: h
                                };
                            return _ && (k.iab_support = {
                                omidpn: 'Appnexus',
                                omidpv: '5.1.0'
                            }), 0 < g && (k.member_id = g), s && (k.device = a), d && (k.app = o), A.b.getConfig('adpod.brandCategoryExclusion') && (k.brand_category_uniqueness = !0), c.enabled && (k.debug = c, I.logInfo('AppNexus Debug Auction Settings:\n\n' + JSON.stringify(c, null, 4))), r && r.gdprConsent && (k.gdpr_consent = {
                                consent_string: r.gdprConsent.consentString,
                                consent_required: r.gdprConsent.gdprApplies
                            }, r.gdprConsent.addtlConsent && -1 !== r.gdprConsent.addtlConsent.indexOf('~') && (f = (m = r.gdprConsent.addtlConsent).substring(m.indexOf('~') + 1), k.gdpr_consent.addtl_consent = f.split('.').map(function (e) {
                                return parseInt(e, 10);
                            }))), r && r.uspConsent && (k.us_privacy = r.uspConsent), r && r.refererInfo && (v = {
                                rd_ref: encodeURIComponent(r.refererInfo.referer),
                                rd_top: r.refererInfo.reachedTop,
                                rd_ifs: r.refererInfo.numIframes,
                                rd_stk: r.refererInfo.stack.map(function (e) {
                                    return encodeURIComponent(e);
                                }).join(',')
                            }, k.referrer_detection = v), w()(e, J) && e.filter(J).forEach(function (r) {
                                var e = function (e, r) {
                                        var a = r.mediaTypes.video, t = a.durationRangeSec, n = a.requireExactDuration, i = function (e) {
                                                var r = e.adPodDurationSec, a = e.durationRangeSec, t = e.requireExactDuration, n = I.getMinValueFromArray(a), i = Math.floor(r / n);
                                                return t ? Math.max(i, a.length) : i;
                                            }(r.mediaTypes.video), s = I.getMaxValueFromArray(t), o = e.filter(function (e) {
                                                return e.uuid === r.bidId;
                                            }), d = I.fill.apply(I, C(o).concat([i]));
                                        {
                                            var p, c;
                                            n ? (p = Math.ceil(i / t.length), c = I.chunk(d, p), t.forEach(function (r, e) {
                                                c[e].map(function (e) {
                                                    H(e, 'minduration', r), H(e, 'maxduration', r);
                                                });
                                            })) : d.map(function (e) {
                                                return H(e, 'maxduration', s);
                                            });
                                        }
                                        return d;
                                    }(t, r), a = k.tags.filter(function (e) {
                                        return e.uuid !== r.bidId;
                                    });
                                k.tags = [].concat(C(a), C(e));
                            }), e[0].userId && ($(y = [], I.deepAccess(e[0], 'userId.flocId.id'), 'chrome.com', null), $(y, I.deepAccess(e[0], 'userId.criteoId'), 'criteo.com', null), $(y, I.deepAccess(e[0], 'userId.netId'), 'netid.de', null), $(y, I.deepAccess(e[0], 'userId.idl_env'), 'liveramp.com', null), $(y, I.deepAccess(e[0], 'userId.tdid'), 'adserver.org', 'TDID'), $(y, I.deepAccess(e[0], 'userId.uid2.id'), 'uidapi.com', 'UID2'), y.length && (k.eids = y)), t[0].publisher_id && (k.publisher_id = t[0].publisher_id), function (e, a) {
                                var t = [], n = { withCredentials: !0 }, i = 'https://ib.adnxs.com/ut/v3/prebid';
                                N(a) || (i = 'https://ib.adnxs-simple.com/ut/v3/prebid');
                                'TRUE' !== I.getParameterByName('apn_test').toUpperCase() && !0 !== A.b.getConfig('apn_test') || (n.customHeaders = { 'X-Is-Test': 1 });
                                {
                                    var s, r;
                                    15 < e.tags.length ? (s = I.deepClone(e), I.chunk(e.tags, 15).forEach(function (e) {
                                        s.tags = e;
                                        var r = JSON.stringify(s);
                                        t.push({
                                            method: 'POST',
                                            url: i,
                                            data: r,
                                            bidderRequest: a,
                                            options: n
                                        });
                                    })) : (r = JSON.stringify(e), t = {
                                        method: 'POST',
                                        url: i,
                                        data: r,
                                        bidderRequest: a,
                                        options: n
                                    });
                                }
                                return t;
                            }(k, r);
                        },
                        interpretResponse: function (e, r) {
                            var i = this, s = r.bidderRequest;
                            e = e.body;
                            var a, o = [];
                            if (e && !e.error)
                                return e.tags && e.tags.forEach(function (e) {
                                    var r, a, t, n = (r = e) && r.ads && r.ads.length && w()(r.ads, function (e) {
                                            return e.rtb;
                                        });
                                    n && 0 !== n.cpm && x()(i.supportedMediaTypes, n.ad_type) && ((a = function (r, e, a) {
                                        var t = I.getBidRequest(r.uuid, [a]), n = {
                                                requestId: r.uuid,
                                                cpm: e.cpm,
                                                creativeId: e.creative_id,
                                                dealId: e.deal_id,
                                                currency: 'USD',
                                                netRevenue: !0,
                                                ttl: 300,
                                                adUnitCode: t.adUnitCode,
                                                appnexus: {
                                                    buyerMemberId: e.buyer_member_id,
                                                    dealPriority: e.deal_priority,
                                                    dealCode: e.deal_code
                                                }
                                            };
                                        e.adomain && (n.meta = g({}, n.meta, { advertiserDomains: [] }));
                                        e.advertiser_id && (n.meta = g({}, n.meta, { advertiserId: e.advertiser_id }));
                                        if (e.rtb.video) {
                                            var i, s;
                                            switch (g(n, {
                                                    width: e.rtb.video.player_width,
                                                    height: e.rtb.video.player_height,
                                                    vastImpUrl: e.notify_url,
                                                    ttl: 3600
                                                }), I.deepAccess(t, 'mediaTypes.video.context')) {
                                            case y.a:
                                                var o = Object(v.getIabSubCategory)(t.bidder, e.brand_category_id);
                                                n.meta = g({}, n.meta, { primaryCatId: o });
                                                var d = e.deal_priority;
                                                n.video = {
                                                    context: y.a,
                                                    durationSeconds: Math.floor(e.rtb.video.duration_ms / 1000),
                                                    dealTier: d
                                                }, n.vastUrl = e.rtb.video.asset_url;
                                                break;
                                            case b.b:
                                                n.adResponse = r, n.adResponse.ad = n.adResponse.ads[0], n.adResponse.ad.video = n.adResponse.ad.rtb.video, n.vastXml = e.rtb.video.content, e.renderer_url && (i = w()(a.bids, function (e) {
                                                    return e.bidId === r.uuid;
                                                }), s = I.deepAccess(i, 'renderer.options'), n.renderer = function (e, r) {
                                                    var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, t = f.a.install({
                                                            id: r.renderer_id,
                                                            url: r.renderer_url,
                                                            config: a,
                                                            loaded: !1,
                                                            adUnitCode: e
                                                        });
                                                    try {
                                                        t.setRender(L);
                                                    } catch (e) {
                                                        I.logWarn('Prebid Error calling setRender on renderer', e);
                                                    }
                                                    return t.setEventHandlers({
                                                        impression: function () {
                                                            return I.logMessage('AppNexus outstream video impression event');
                                                        },
                                                        loaded: function () {
                                                            return I.logMessage('AppNexus outstream video loaded event');
                                                        },
                                                        ended: function () {
                                                            I.logMessage('AppNexus outstream renderer video event'), document.querySelector('#'.concat(e)).style.display = 'none';
                                                        }
                                                    }), t;
                                                }(n.adUnitCode, e, s));
                                                break;
                                            case b.a:
                                                n.vastUrl = e.notify_url + '&redir=' + encodeURIComponent(e.rtb.video.asset_url);
                                            }
                                        } else if (e.rtb[y.c]) {
                                            var p = e.rtb[y.c], c = e.viewability.config.replace('src=', 'data-src='), u = p.javascript_trackers;
                                            null == u ? u = c : I.isStr(u) ? u = [
                                                u,
                                                c
                                            ] : u.push(c), n[y.c] = {
                                                title: p.title,
                                                body: p.desc,
                                                body2: p.desc2,
                                                cta: p.ctatext,
                                                rating: p.rating,
                                                sponsoredBy: p.sponsored,
                                                privacyLink: p.privacy_link,
                                                address: p.address,
                                                downloads: p.downloads,
                                                likes: p.likes,
                                                phone: p.phone,
                                                price: p.price,
                                                salePrice: p.saleprice,
                                                clickUrl: p.link.url,
                                                displayUrl: p.displayurl,
                                                clickTrackers: p.link.click_trackers,
                                                impressionTrackers: p.impression_trackers,
                                                javascriptTrackers: u
                                            }, p.main_img && (n.native.image = {
                                                url: p.main_img.url,
                                                height: p.main_img.height,
                                                width: p.main_img.width
                                            }), p.icon && (n.native.icon = {
                                                url: p.icon.url,
                                                height: p.icon.height,
                                                width: p.icon.width
                                            });
                                        } else {
                                            g(n, {
                                                width: e.rtb.banner.width,
                                                height: e.rtb.banner.height,
                                                ad: e.rtb.banner.content
                                            });
                                            try {
                                                var l, m;
                                                e.rtb.trackers && (l = e.rtb.trackers[0].impression_urls[0], m = I.createTrackPixelHtml(l), n.ad += m);
                                            } catch (e) {
                                                I.logError('Error appending tracking pixel', e);
                                            }
                                        }
                                        return n;
                                    }(e, n, s)).mediaType = (t = n.ad_type) === y.d ? y.d : t === y.c ? y.c : y.b, o.push(a));
                                }), e.debug && e.debug.debug_info && (a = (a = 'AppNexus Debug Auction for Prebid\n\n' + e.debug.debug_info).replace(/(<td>|<th>)/gm, '\t').replace(/(<\/td>|<\/th>)/gm, '\n').replace(/^<br>/gm, '').replace(/(<br>\n|<br>)/gm, '\n').replace(/<h1>(.*)<\/h1>/gm, '\n\n===== $1 =====\n\n').replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, '\n\n*** $1 ***\n\n').replace(/(<([^>]+)>)/gim, ''), I.logMessage('https://console.appnexus.com/docs/understanding-the-debug-auction'), I.logMessage(a)), o;
                            var t = 'in response for '.concat(s.bidderCode, ' adapter');
                            return e && e.error && (t += ': '.concat(e.error)), I.logError(t), o;
                        },
                        getMappingFileInfo: function () {
                            return {
                                url: 'https://acdn.adnxs-simple.com/prebid/appnexus-mapping/mappings.json',
                                refreshInDays: 2
                            };
                        },
                        getUserSyncs: function (e, r, a) {
                            if (e.iframeEnabled && N({ gdprConsent: a }))
                                return [{
                                        type: 'iframe',
                                        url: 'https://acdn.adnxs.com/dmp/async_usersync.html'
                                    }];
                        },
                        transformBidParams: function (a, e) {
                            return a = I.convertTypes({
                                member: 'string',
                                invCode: 'string',
                                placementId: 'number',
                                keywords: I.transformBidderParamKeywords,
                                publisherId: 'number'
                            }, a), e && (a.use_pmt_rule = 'boolean' == typeof a.usePaymentRule && a.usePaymentRule, a.usePaymentRule && delete a.usePaymentRule, R(a.keywords) && a.keywords.forEach(P), Object.keys(a).forEach(function (e) {
                                var r = I.convertCamelToUnderscore(e);
                                r !== e && (a[r] = a[e], delete a[e]);
                            })), a;
                        },
                        onBidWon: function (e) {
                            e.native && function (e) {
                                var r = function (e) {
                                    var r;
                                    if (I.isStr(e) && U(e))
                                        r = e;
                                    else if (I.isArray(e))
                                        for (var a = 0; a < e.length; a++) {
                                            var t = e[a];
                                            U(t) && (r = t);
                                        }
                                    return r;
                                }(e.native.javascriptTrackers);
                                if (r)
                                    for (var a = 'pbjs_adid=' + e.adId + ';pbjs_auc=' + e.adUnitCode, t = function (e) {
                                                var r = e.indexOf('src="') + 5, a = e.indexOf('"', r);
                                                return e.substring(r, a);
                                            }(r), n = t.replace('dom_id=%native_dom_id%', a), i = document.getElementsByTagName('iframe'), s = !1, o = 0; o < i.length && !s; o++) {
                                        var d = i[o];
                                        try {
                                            var p = d.contentDocument || d.contentWindow.document;
                                            if (p)
                                                for (var c = p.getElementsByTagName('script'), u = 0; u < c.length && !s; u++) {
                                                    var l = c[u];
                                                    l.getAttribute('data-src') == t && (l.setAttribute('src', n), l.setAttribute('data-src', ''), l.removeAttribute && l.removeAttribute('data-src'), s = !0);
                                                }
                                        } catch (e) {
                                            if (!(e instanceof DOMException && 'SecurityError' === e.name))
                                                throw e;
                                        }
                                    }
                            }(e);
                        }
                    };
                function R(e) {
                    return I.isArray(e) && 0 < e.length;
                }
                function P(e) {
                    R(e.value) && '' === e.value[0] && delete e.value;
                }
                function U(e) {
                    var r = e.match(c), a = null != r && 1 <= r.length, t = e.match(k), n = null != t && 1 <= t.length;
                    return e.startsWith(p) && n && a;
                }
                function N(e) {
                    var r = !0;
                    return e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion && (r = !(!0 !== I.deepAccess(e.gdprConsent, 'vendorData.purpose.consents.1'))), r;
                }
                function q(a) {
                    var t = {};
                    t.sizes = z(a.sizes), t.primary_size = t.sizes[0], t.ad_types = [], t.uuid = a.bidId, a.params.placementId ? t.id = parseInt(a.params.placementId, 10) : t.code = a.params.invCode, t.allow_smaller_sizes = a.params.allowSmallerSizes || !1, t.use_pmt_rule = a.params.usePaymentRule || !1, t.prebid = !0, t.disable_psa = !0;
                    var e, r = function (e) {
                            if (!I.isFn(e.getFloor))
                                return e.params.reserve ? e.params.reserve : null;
                            var r = e.getFloor({
                                currency: 'USD',
                                mediaType: '*',
                                size: '*'
                            });
                            return !I.isPlainObject(r) || isNaN(r.floor) || 'USD' !== r.currency ? null : r.floor;
                        }(a);
                    r && (t.reserve = r), a.params.position && (t.position = {
                        above: 1,
                        below: 2
                    }[a.params.position] || 0), a.params.trafficSourceCode && (t.traffic_source_code = a.params.trafficSourceCode), a.params.privateSizes && (t.private_sizes = z(a.params.privateSizes)), a.params.supplyType && (t.supply_type = a.params.supplyType), a.params.pubClick && (t.pubclick = a.params.pubClick), a.params.extInvCode && (t.ext_inv_code = a.params.extInvCode), a.params.publisherId && (t.publisher_id = parseInt(a.params.publisherId, 10)), a.params.externalImpId && (t.external_imp_id = a.params.externalImpId), I.isEmpty(a.params.keywords) || (0 < (e = I.transformBidderParamKeywords(a.params.keywords)).length && e.forEach(P), t.keywords = e);
                    var n, i, s, o = I.deepAccess(a, 'ortb2Imp.ext.data.pbadslot');
                    o && (t.gpid = o), a.mediaType !== y.c && !I.deepAccess(a, 'mediaTypes.'.concat(y.c)) || (t.ad_types.push(y.c), 0 === t.sizes.length && (t.sizes = z([
                        1,
                        1
                    ])), a.nativeParams && (i = a.nativeParams, s = {}, Object.keys(i).forEach(function (e) {
                        var r, a = _[e] && _[e].serverName || _[e] || e, t = _[e] && _[e].requiredParams;
                        s[a] = g({}, t, i[e]), a !== _.image.serverName && a !== _.icon.serverName || !s[a].sizes || (r = s[a].sizes, (I.isArrayOfNums(r) || I.isArray(r) && 0 < r.length && r.every(function (e) {
                            return I.isArrayOfNums(e);
                        })) && (s[a].sizes = z(s[a].sizes))), a === _.privacyLink && (s.privacy_supported = !0);
                    }), n = s, t[y.c] = { layouts: [n] }));
                    var d = I.deepAccess(a, 'mediaTypes.'.concat(y.d)), p = I.deepAccess(a, 'mediaTypes.video.context');
                    t.hb_source = d && 'adpod' === p ? 7 : 1, a.mediaType !== y.d && !d || t.ad_types.push(y.d), (a.mediaType === y.d || d && 'outstream' !== p) && (t.require_asset_url = !0), a.params.video && (t.video = {}, Object.keys(a.params.video).filter(function (e) {
                        return x()(l, e);
                    }).forEach(function (e) {
                        switch (e) {
                        case 'context':
                        case 'playback_method':
                            var r = a.params.video[e], r = I.isArray(r) ? r[0] : r;
                            t.video[e] = h[e][r];
                            break;
                        case 'frameworks':
                            break;
                        default:
                            t.video[e] = a.params.video[e];
                        }
                    }), a.params.video.frameworks && I.isArray(a.params.video.frameworks) && (t.video_frameworks = a.params.video.frameworks)), d && (t.video = t.video || {}, Object.keys(d).filter(function (e) {
                        return x()(m, e);
                    }).forEach(function (e) {
                        switch (e) {
                        case 'minduration':
                        case 'maxduration':
                            'number' != typeof t.video[e] && (t.video[e] = d[e]);
                            break;
                        case 'skip':
                            'boolean' != typeof t.video.skippable && (t.video.skippable = 1 === d[e]);
                            break;
                        case 'skipafter':
                            'number' != typeof t.video.skipoffset && (t.video.skippoffset = d[e]);
                            break;
                        case 'playbackmethod':
                            var r;
                            'number' != typeof t.video.playback_method && (r = d[e], 1 <= (r = I.isArray(r) ? r[0] : r) && r <= 4 && (t.video.playback_method = r));
                            break;
                        case 'api':
                            var a;
                            !t.video_frameworks && I.isArray(d[e]) && (a = d[e].map(function (e) {
                                var r = 4 === e ? 5 : 5 === e ? 4 : e;
                                if (1 <= r && r <= 5)
                                    return r;
                            }).filter(function (e) {
                                return e;
                            }), t.video_frameworks = a);
                        }
                    })), a.renderer && (t.video = g({}, t.video, { custom_renderer_present: !0 })), a.params.frameworks && I.isArray(a.params.frameworks) && (t.banner_frameworks = a.params.frameworks);
                    var c = w()(u.a.getAdUnits(), function (e) {
                        return a.transactionId === e.transactionId;
                    });
                    return c && c.mediaTypes && c.mediaTypes.banner && t.ad_types.push(y.b), 0 === t.ad_types.length && delete t.ad_types, t;
                }
                function z(e) {
                    var r = [], a = {};
                    if (I.isArray(e) && 2 === e.length && !I.isArray(e[0]))
                        a.width = parseInt(e[0], 10), a.height = parseInt(e[1], 10), r.push(a);
                    else if ('object' === s(e))
                        for (var t = 0; t < e.length; t++) {
                            var n = e[t];
                            (a = {}).width = parseInt(n[0], 10), a.height = parseInt(n[1], 10), r.push(a);
                        }
                    return r;
                }
                function M(e) {
                    return !!e.params.user;
                }
                function D(e) {
                    return !!parseInt(e.params.member, 10);
                }
                function B(e) {
                    if (e.params)
                        return !!e.params.app;
                }
                function F(e) {
                    return e.params && e.params.app ? !!e.params.app.id : !!e.params.app;
                }
                function V(e) {
                    return !!e.debug;
                }
                function J(e) {
                    return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === y.a;
                }
                function W(e) {
                    var r = !1, a = e.params, t = e.params.video;
                    return a.frameworks && I.isArray(a.frameworks) && (r = x()(e.params.frameworks, 6)), !r && t && t.frameworks && I.isArray(t.frameworks) && (r = x()(e.params.video.frameworks, 6)), r;
                }
                function H(e, r, a) {
                    I.isEmpty(e.video) && (e.video = {}), e.video[r] = a;
                }
                function L(e) {
                    var r, a;
                    r = e.adUnitCode, (a = document.getElementById(r).querySelectorAll('div[id^=\'google_ads\']'))[0] && a[0].style.setProperty('display', 'none'), function (e) {
                        try {
                            var r = document.getElementById(e).querySelectorAll('script[id^=\'sas_script\']');
                            r[0].nextSibling && 'iframe' === r[0].nextSibling.localName && r[0].nextSibling.style.setProperty('display', 'none');
                        } catch (e) {
                        }
                    }(e.adUnitCode), e.renderer.push(function () {
                        window.ANOutstreamVideo.renderAd({
                            tagId: e.adResponse.tag_id,
                            sizes: [e.getSize().split('x')],
                            targetId: e.adUnitCode,
                            uuid: e.adResponse.uuid,
                            adResponse: e.adResponse,
                            rendererOptions: e.renderer.getConfig()
                        }, function (e, r, a) {
                            e.renderer.handleVideoEvent({
                                id: r,
                                eventName: a
                            });
                        }.bind(null, e));
                    });
                }
                function $(e, r, a, t) {
                    return r && (t ? e.push({
                        source: a,
                        id: r,
                        rti_partner: t
                    }) : e.push({
                        source: a,
                        id: r
                    })), e;
                }
                Object(v.registerBidder)(j);
            }
        }, [250]);
        pbjsChunk([227], {
            306: function (n, t, e) {
                n.exports = e(307);
            },
            307: function (n, t, e) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), e.d(t, 'allowAuction', function () {
                    return w;
                }), e.d(t, 'userCMP', function () {
                    return d;
                }), e.d(t, 'consentTimeout', function () {
                    return l;
                }), e.d(t, 'gdprScope', function () {
                    return g;
                }), e.d(t, 'staticConsentData', function () {
                    return m;
                }), t.requestBidsHook = h, t.resetConsentData = function () {
                    C = void 0, d = void 0, D = 0, a.gdprDataHandler.setConsentData(null);
                }, t.setConsentConfig = _;
                var u = e(0), o = e(3), a = e(7), i = e(12), r = e.n(i), s = e(73), f = e.n(s);
                function c(n) {
                    return (c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (n) {
                        return typeof n;
                    } : function (n) {
                        return n && 'function' == typeof Symbol && n.constructor === Symbol && n !== Symbol.prototype ? 'symbol' : typeof n;
                    })(n);
                }
                function p(n, t, e) {
                    return t in n ? Object.defineProperty(n, t, {
                        value: e,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : n[t] = e, n;
                }
                var d, l, g, m, C, v = 'iab', b = 10000, y = !0, w = {
                        value: y,
                        definedInConfig: !1
                    }, D = 0, k = !1, M = {
                        iab: function (o, e, r) {
                            function n(n, t) {
                                u.logInfo('Received a response from CMP', n), t ? !1 !== n.gdprApplies && 'tcloaded' !== n.eventStatus && 'useractioncomplete' !== n.eventStatus || o(n, r) : e('CMP unable to register callback function.  Please check CMP setup.', r);
                            }
                            var t = function () {
                                    var t = {};
                                    function e() {
                                        t.getConsentData && t.getVendorConsents && (u.logInfo('Received all requested responses from CMP', t), o(t, r));
                                    }
                                    return {
                                        consentDataCallback: function (n) {
                                            t.getConsentData = n, e();
                                        },
                                        vendorConsentsCallback: function (n) {
                                            t.getVendorConsents = n, e();
                                        }
                                    };
                                }(), c = {}, a = function () {
                                    for (var n, t, e = window; !n;) {
                                        try {
                                            if ('function' == typeof e.__tcfapi || 'function' == typeof e.__cmp) {
                                                t = 'function' == typeof e.__tcfapi ? (D = 2, e.__tcfapi) : (D = 1, e.__cmp), n = e;
                                                break;
                                            }
                                        } catch (n) {
                                        }
                                        try {
                                            if (e.frames.__tcfapiLocator) {
                                                D = 2, n = e;
                                                break;
                                            }
                                        } catch (n) {
                                        }
                                        try {
                                            if (e.frames.__cmpLocator) {
                                                D = 1, n = e;
                                                break;
                                            }
                                        } catch (n) {
                                        }
                                        if (e === window.top)
                                            break;
                                        e = e.parent;
                                    }
                                    return {
                                        cmpFrame: n,
                                        cmpFunction: t
                                    };
                                }(), i = a.cmpFrame, s = a.cmpFunction;
                            if (!i)
                                return e('CMP not found.', r);
                            u.isFn(s) ? (u.logInfo('Detected CMP API is directly accessible, calling it now...'), 1 === D ? (s('getConsentData', null, t.consentDataCallback), s('getVendorConsents', null, t.vendorConsentsCallback)) : 2 === D && s('addEventListener', D, n)) : 1 === D && window.$sf && window.$sf.ext && 'function' == typeof window.$sf.ext.cmp ? (u.logInfo('Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now...'), d('getConsentData', t.consentDataCallback), d('getVendorConsents', t.vendorConsentsCallback)) : (u.logInfo('Detected CMP is outside the current iframe where Prebid.js is located, calling it now...'), 1 === D ? (l('getConsentData', i, t.consentDataCallback), l('getVendorConsents', i, t.vendorConsentsCallback)) : 2 === D && l('addEventListener', i, n));
                            function d(o, a) {
                                var n, t = r.adUnits, e = 1, i = 1;
                                Array.isArray(t) && 0 < t.length && (e = (n = u.getAdUnitSizes(t[0]))[0][0], i = n[0][1]), window.$sf.ext.register(e, i, function (n, t) {
                                    var e;
                                    'cmpReturn' === n && (e = 'getConsentData' === o ? t.vendorConsentData : t.vendorConsents, a(e));
                                }), window.$sf.ext.cmp(o);
                            }
                            function l(n, r, t) {
                                var a = 2 === D ? '__tcfapi' : '__cmp', s = ''.concat(a, 'Call');
                                function e(n) {
                                    var t, e = ''.concat(a, 'Return'), o = 'string' == typeof n.data && f()(n.data, e) ? JSON.parse(n.data) : n.data;
                                    o[e] && o[e].callId && (t = o[e], void 0 !== c[t.callId] && c[t.callId](t.returnValue, t.success));
                                }
                                2 === D ? (window[a] = function (n, t, e, o) {
                                    var a = Math.random() + '', i = p({}, s, {
                                            command: n,
                                            version: t,
                                            parameter: o,
                                            callId: a
                                        });
                                    c[a] = e, r.postMessage(i, '*');
                                }, window.addEventListener('message', e, !1), window[a](n, D, t)) : (window[a] = function (n, t, e) {
                                    var o = Math.random() + '', a = p({}, s, {
                                            command: n,
                                            parameter: t,
                                            callId: o
                                        });
                                    c[o] = e, r.postMessage(a, '*');
                                }, window.addEventListener('message', e, !1), window[a](n, void 0, t));
                            }
                        },
                        static: function (n, t, e) {
                            n(m, e);
                        }
                    };
                function h(n, t) {
                    var e = {
                        context: this,
                        args: [t],
                        nextFn: n,
                        adUnits: t.adUnits || pbjs.adUnits,
                        bidsBackHandler: t.bidsBackHandler,
                        haveExited: !1,
                        timer: null
                    };
                    return C ? (u.logInfo('User consent information already known.  Pulling internally stored information...'), S(null, e)) : r()(Object.keys(M), d) ? (M[d].call(this, A, P, e), void (e.haveExited || (0 === l ? A(void 0, e) : e.timer = setTimeout(function (n) {
                        P('CMP workflow exceeded timeout threshold.', n);
                    }.bind(null, e), l)))) : (u.logWarn('CMP framework ('.concat(d, ') is not a supported framework.  Aborting consentManagement module and resuming auction.')), e.nextFn.apply(e.context, e.args));
                }
                function A(e, n) {
                    'static' === d && 2 === (D = e.getConsentData ? 1 : e.getTCData ? 2 : 0) && (e = e.getTCData);
                    var t = 1 === D ? function (n) {
                        var t = n && n.getConsentData && n.getConsentData.gdprApplies;
                        return !('boolean' == typeof t && (!0 !== t || u.isStr(n.getConsentData.consentData) && u.isPlainObject(n.getVendorConsents) && 1 < Object.keys(n.getVendorConsents).length));
                    } : 2 === D ? function () {
                        var n = e && 'boolean' == typeof e.gdprApplies ? e.gdprApplies : g, t = e && e.tcString;
                        return !('boolean' == typeof n && (!0 !== n || u.isStr(t)));
                    } : null;
                    w.definedInConfig && 2 === D ? u.logWarn('\'allowAuctionWithoutConsent\' ignored for TCF 2') : w.definedInConfig || 1 !== D || u.logInfo('\'allowAuctionWithoutConsent\' using system default: ('.concat(y, ').')), u.isFn(t) ? t(e) ? P('CMP returned unexpected value during lookup process.', n, e) : (clearTimeout(n.timer), I(e), S(null, n)) : P('Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.', n, e);
                }
                function P(n, t, e) {
                    clearTimeout(t.timer), w.value && 1 === D && I(void 0), S(n, t, e);
                }
                function I(n) {
                    1 === D ? C = {
                        consentString: n ? n.getConsentData.consentData : void 0,
                        vendorData: n ? n.getVendorConsents : void 0,
                        gdprApplies: n ? n.getConsentData.gdprApplies : g
                    } : (C = {
                        consentString: n ? n.tcString : void 0,
                        vendorData: n || void 0,
                        gdprApplies: n && 'boolean' == typeof n.gdprApplies ? n.gdprApplies : g
                    }, n && n.addtlConsent && u.isStr(n.addtlConsent) && (C.addtlConsent = n.addtlConsent)), C.apiVersion = D, a.gdprDataHandler.setConsentData(C);
                }
                function S(n, t, e) {
                    var o, a, i;
                    !1 === t.haveExited && (t.haveExited = !0, o = t.context, a = t.args, i = t.nextFn, n ? w.value && 1 === D ? (u.logWarn(n + ' \'allowAuctionWithoutConsent\' activated.', e), i.apply(o, a)) : (u.logError(n + ' Canceling auction as per consentManagement config.', e), 'function' == typeof t.bidsBackHandler ? t.bidsBackHandler() : u.logError('Error executing bidsBackHandler')) : i.apply(o, a));
                }
                function _(n) {
                    (n = n && (n.gdpr || n.usp ? n.gdpr : n)) && 'object' === c(n) ? (u.isStr(n.cmpApi) ? d = n.cmpApi : (d = v, u.logInfo('consentManagement config did not specify cmp.  Using system default setting ('.concat(v, ').'))), u.isNumber(n.timeout) ? l = n.timeout : (l = b, u.logInfo('consentManagement config did not specify timeout.  Using system default setting ('.concat(b, ').'))), 'boolean' == typeof n.allowAuctionWithoutConsent && (w.value = n.allowAuctionWithoutConsent, w.definedInConfig = !0), g = !0 === n.defaultGdprScope, u.logInfo('consentManagement module has been activated...'), 'static' === d && (u.isPlainObject(n.consentData) ? (m = n.consentData, l = 0) : u.logError('consentManagement config with cmpApi: \'static\' did not specify consentData. No consents will be available to adapters.')), k || pbjs.requestBids.before(h, 50), k = !0) : u.logWarn('consentManagement config not defined, exiting consent manager');
                }
                o.b.getConfig('consentManagement', function (n) {
                    return _(n.consentManagement);
                });
            }
        }, [306]);
        pbjsChunk([222], {
            323: function (e, o, t) {
                e.exports = t(324);
            },
            324: function (e, o, t) {
                'use strict';
                Object.defineProperty(o, '__esModule', { value: !0 }), t.d(o, 'storage', function () {
                    return v;
                }), t.d(o, 'criteoIdSubmodule', function () {
                    return u;
                });
                var f = t(0), m = t(4), I = t(19), n = t(10), c = t(9), r = 'criteo', v = Object(c.b)(91, r), U = 'cto_bidid', h = 'cto_bundle', S = new Date(0).toString(), i = new Date(f.timestamp() + 33696000000).toString();
                function w(e, o) {
                    var t = 1 < arguments.length && void 0 !== o && o, n = f.parseUrl(e, { noDecodeWholeURL: !0 });
                    return t ? ''.concat(n.hostname) : ''.concat(n.protocol, '://').concat(n.hostname).concat(n.port ? ':' + n.port : '', '/');
                }
                function a(e) {
                    return v.getCookie(e) || v.getDataFromLocalStorage(e);
                }
                function C(e, o) {
                    e && o && (v.setCookie(e, o, i), v.setDataInLocalStorage(e, o));
                }
                function d(e, o) {
                    var t, n, c, r, i, a, d, u = v.cookiesAreEnabled(), l = v.localStorageIsEnabled(), p = w(Object(I.a)().referer), s = w(document.location.href, !0), b = 'undefined' != typeof criteo_pubtag, g = (t = p, n = s, c = e.bundle, r = u, i = l, a = b, d = o, 'https://gum.criteo.com/sid/json?origin=prebid' + ''.concat(t ? '&topUrl=' + encodeURIComponent(t) : '') + ''.concat(n ? '&domain=' + encodeURIComponent(n) : '') + ''.concat(c ? '&bundle=' + encodeURIComponent(c) : '') + ''.concat(d ? '&gdprString=' + encodeURIComponent(d) : '') + ''.concat(r ? '&cw=1' : '') + ''.concat(a ? '&pbt=1' : '') + ''.concat(i ? '&lsw=1' : ''));
                    m.b()(g, function (e) {
                        var o, t = JSON.parse(e);
                        t.bidId ? C(U, t.bidId) : (o = U, v.setCookie(o, '', S), v.removeDataFromLocalStorage(o)), t.acwsUrl ? ('string' == typeof t.acwsUrl ? [t.acwsUrl] : t.acwsUrl).forEach(function (e) {
                            return f.triggerPixel(e);
                        }) : t.bundle && C(h, t.bundle);
                    }, void 0, {
                        method: 'GET',
                        contentType: 'application/json',
                        withCredentials: !0
                    });
                }
                var u = {
                    name: r,
                    gvlid: 91,
                    decode: function (e) {
                        return e;
                    },
                    getId: function (e, o) {
                        var t = o && 'boolean' == typeof o.gdprApplies && o.gdprApplies ? o.consentString : void 0, n = {
                                bundle: a(h),
                                bidId: a(U)
                            };
                        return d(n, t), { id: n.bidId ? { criteoId: n.bidId } : void 0 };
                    }
                };
                Object(n.e)('userId', u);
            }
        }, [323]);
        pbjsChunk([221], {
            325: function (e, n, r) {
                e.exports = r(326);
            },
            326: function (e, n, r) {
                'use strict';
                Object.defineProperty(n, '__esModule', { value: !0 }), r.d(n, 'currencySupportEnabled', function () {
                    return R;
                }), r.d(n, 'currencyRates', function () {
                    return D;
                }), n.setConfig = c, n.addBidResponseHook = j;
                var s = r(16), u = r(39), a = r(5), f = (r.n(a), r(4)), d = r(0), o = r(3), l = r(10);
                function y(e) {
                    return (y = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var g, v = 'https://cdn.jsdelivr.net/gh/prebid/currency-file@1/latest.json?date=$$TODAY$$', p = 4, b = [], h = {}, C = !1, S = !0, m = 'USD', R = !1, D = {}, I = {};
                function c(e) {
                    var n, r, o, c, t, i = v;
                    'object' === y(e.rates) && (D.conversions = e.rates, S = !(C = !0)), 'object' === y(e.defaultRates) && (g = e.defaultRates, D.conversions = g, C = !0), 'string' == typeof e.adServerCurrency ? (d.logInfo('enabling currency support', arguments), m = e.adServerCurrency, e.conversionRateFile && (d.logInfo('currency using override conversionRateFile:', e.conversionRateFile), i = e.conversionRateFile), -1 !== (n = i.indexOf('$$TODAY$$')) && (r = new Date(), o = ''.concat(r.getMonth() + 1), c = ''.concat(r.getDate()), o.length < 2 && (o = '0'.concat(o)), c.length < 2 && (c = '0'.concat(c)), t = ''.concat(r.getFullYear()).concat(o).concat(c), i = ''.concat(i.substring(0, n)).concat(t).concat(i.substring(n + 9, i.length))), function (e) {
                        h = {}, R = !0, d.logInfo('Installing addBidResponse decorator for currency module', arguments), Object(s.a)().convertCurrency = function (e, n, r) {
                            return parseFloat(e) * F(n, r);
                        }, Object(l.a)('addBidResponse').before(j, 100), S && (S = !1, Object(f.a)(e, {
                            success: function (n) {
                                try {
                                    D = JSON.parse(n), d.logInfo('currencyRates set to ' + JSON.stringify(D)), C = !0, w();
                                } catch (e) {
                                    O('Failed to parse currencyRates response: ' + n);
                                }
                            },
                            error: O
                        }));
                    }(i)) : (d.logInfo('disabling currency support'), function () {
                        d.logInfo('Uninstalling addBidResponse decorator for currency module', arguments), Object(l.a)('addBidResponse').getHooks({ hook: j }).remove(), delete Object(s.a)().convertCurrency, m = 'USD', h = {}, C = R = !1, S = !0, D = {}, I = {};
                    }()), 'object' === y(e.bidderCurrencyDefault) && (I = e.bidderCurrencyDefault);
                }
                function O(e) {
                    g ? (d.logWarn(e), d.logWarn('Currency failed loading rates, falling back to currency.defaultRates')) : d.logError(e);
                }
                function j(e, n, r) {
                    if (!r)
                        return e.call(this, n);
                    var o, c, t, i, s = r.bidderCode || r.bidder;
                    if (I[s] && (o = I[s], r.currency && o !== r.currency ? d.logWarn('Currency default \''.concat(s, ': ').concat(o, '\' ignored. adapter specified \'').concat(r.currency, '\'')) : r.currency = o), r.currency || (d.logWarn('Currency not specified on bid.  Defaulted to "USD"'), r.currency = 'USD'), r.getCpmInNewCurrency = function (e) {
                            return (parseFloat(this.cpm) * F(this.currency, e)).toFixed(3);
                        }, r.currency === m)
                        return e.call(this, n, r);
                    b.push((c = e, t = this, i = [
                        n,
                        r
                    ], function () {
                        var n = i[1];
                        if (void 0 !== n && 'currency' in n && 'cpm' in n) {
                            var e = n.currency;
                            try {
                                var r = F(e);
                                1 !== r && (n.cpm = (parseFloat(n.cpm) * r).toFixed(4), n.currency = m);
                            } catch (e) {
                                d.logWarn('Returning NO_BID, getCurrencyConversion threw error: ', e), i[1] = Object(u.a)(a.STATUS.NO_BID, {
                                    bidder: n.bidderCode || n.bidder,
                                    bidId: n.requestId
                                });
                            }
                        }
                        return c.apply(t, i);
                    })), R && !C || w();
                }
                function w() {
                    for (; 0 < b.length;)
                        b.shift()();
                }
                function F(e, n) {
                    var r, o = 1 < arguments.length && void 0 !== n ? n : m, c = null, t = ''.concat(e, '->').concat(o);
                    if (t in h)
                        c = h[t], d.logMessage('Using conversionCache value ' + c + ' for ' + t);
                    else if (!1 === R) {
                        if ('USD' !== e)
                            throw new Error('Prebid currency support has not been enabled and fromCurrency is not USD');
                        c = 1;
                    } else if (e === o)
                        c = 1;
                    else if (e in D.conversions) {
                        if (!(o in (r = D.conversions[e])))
                            throw new Error('Specified adServerCurrency in config \'' + o + '\' not found in the currency rates file');
                        c = r[o], d.logInfo('getCurrencyConversion using direct ' + e + ' to ' + o + ' conversionRate ' + c);
                    } else if (o in D.conversions) {
                        if (!(e in (r = D.conversions[o])))
                            throw new Error('Specified fromCurrency \'' + e + '\' not found in the currency rates file');
                        c = U(1 / r[e], p), d.logInfo('getCurrencyConversion using reciprocal ' + e + ' to ' + o + ' conversionRate ' + c);
                    } else {
                        var i = Object.keys(D.conversions)[0];
                        if (!(e in D.conversions[i]))
                            throw new Error('Specified fromCurrency \'' + e + '\' not found in the currency rates file');
                        var s = 1 / D.conversions[i][e];
                        if (!(o in D.conversions[i]))
                            throw new Error('Specified adServerCurrency in config \'' + o + '\' not found in the currency rates file');
                        c = U(s * D.conversions[i][o], p);
                        d.logInfo('getCurrencyConversion using intermediate ' + e + ' thru ' + i + ' to ' + o + ' conversionRate ' + c);
                    }
                    return t in h || (d.logMessage('Adding conversionCache value ' + c + ' for ' + t), h[t] = c), c;
                }
                function U(e, n) {
                    for (var r = 1, o = 0; o < n; o++)
                        r += '0';
                    return Math.round(e * r) / r;
                }
                o.b.getConfig('currency', function (e) {
                    return c(e.currency);
                });
            }
        }, [325]);
        pbjsChunk([217], {
            335: function (e, r, t) {
                e.exports = t(336);
            },
            336: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'adpodUtils', function () {
                    return A;
                }), r.buildDfpVideoUrl = u, r.notifyTranslationModule = _, r.buildAdpodVideoUrl = C;
                var a = t(74), p = t(41), b = t(0), n = t(3), o = t(10), c = t(23), g = t(7), d = t(8), i = t.n(d), s = t(5), l = t.n(s);
                function f(e, r, t) {
                    return r in e ? Object.defineProperty(e, r, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[r] = t, e;
                }
                function v() {
                    return (v = Object.assign || function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = arguments[r];
                            for (var a in t)
                                Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var T = {
                        env: 'vp',
                        gdfp_req: 1,
                        output: 'vast',
                        unviewed_position_start: 1
                    }, A = {};
                function u(e) {
                    if (e.params || e.url) {
                        var r = e.adUnit, t = e.bid || p.d.getWinningBids(r.code)[0], a = {};
                        if (e.url && (a = Object(b.parseUrl)(e.url, { noDecodeWholeURL: !0 }), Object(b.isEmpty)(e.params)))
                            return function (e, r, t) {
                                var a = E(r, e, 'search');
                                a && (e.search.description_url = a);
                                var n = j(r, t);
                                return e.search.cust_params = e.search.cust_params ? e.search.cust_params + '%26' + n : n, Object(b.buildUrl)(e);
                            }(a, t, e);
                        var n = {
                                correlator: Date.now(),
                                sz: Object(b.parseSizesInput)(Object(b.deepAccess)(r, 'mediaTypes.video.playerSize')).join('|'),
                                url: encodeURIComponent(location.href)
                            }, o = j(t, e), c = v({}, T, a.search, n, e.params, { cust_params: o }), d = E(t, e, 'params');
                        d && (c.description_url = d);
                        var i = g.gdprDataHandler.getConsentData();
                        i && ('boolean' == typeof i.gdprApplies && (c.gdpr = Number(i.gdprApplies)), i.consentString && (c.gdpr_consent = i.consentString), i.addtlConsent && (c.addtl_consent = i.addtlConsent));
                        var s = g.uspDataHandler.getConsentData();
                        return s && (c.us_privacy = s), Object(b.buildUrl)({
                            protocol: 'https',
                            host: 'securepubads.g.doubleclick.net',
                            pathname: '/gampad/ads',
                            search: c
                        });
                    }
                    Object(b.logError)('A params object or a url is required to use pbjs.adServers.dfp.buildVideoUrl');
                }
                function _(e) {
                    e.call(this, 'dfp');
                }
                function C() {
                    var p, r, e, t, a = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, l = a.code, u = a.params, _ = a.callback;
                    u && _ ? (p = {
                        correlator: Date.now(),
                        sz: (r = l, e = c.a.getAdUnits().filter(function (e) {
                            return e.code === r;
                        }), t = Object(b.deepAccess)(e[0], 'mediaTypes.video.playerSize'), Object(b.parseSizesInput)(t).join('|')),
                        url: encodeURIComponent(location.href)
                    }, A.getTargeting({
                        codes: [l],
                        callback: function (e, r) {
                            var t;
                            if (e)
                                return void _(e, null);
                            var a = (f(t = {}, A.TARGETING_KEY_PB_CAT_DUR, void 0), f(t, A.TARGETING_KEY_CACHE_ID, void 0), t), n = {};
                            r[l] && (n = r[l].reduce(function (e, r) {
                                return Object.keys(r)[0] === A.TARGETING_KEY_PB_CAT_DUR ? e[A.TARGETING_KEY_PB_CAT_DUR] = void 0 !== e[A.TARGETING_KEY_PB_CAT_DUR] ? e[A.TARGETING_KEY_PB_CAT_DUR] + ',' + r[A.TARGETING_KEY_PB_CAT_DUR] : r[A.TARGETING_KEY_PB_CAT_DUR] : Object.keys(r)[0] === A.TARGETING_KEY_CACHE_ID && (e[A.TARGETING_KEY_CACHE_ID] = r[A.TARGETING_KEY_CACHE_ID]), e;
                            }, a));
                            var o = encodeURIComponent(Object(b.formatQS)(n)), c = v({}, T, p, u, { cust_params: o }), d = g.gdprDataHandler.getConsentData();
                            d && ('boolean' == typeof d.gdprApplies && (c.gdpr = Number(d.gdprApplies)), d.consentString && (c.gdpr_consent = d.consentString), d.addtlConsent && (c.addtl_consent = d.addtlConsent));
                            var i = g.uspDataHandler.getConsentData();
                            i && (c.us_privacy = i);
                            var s = Object(b.buildUrl)({
                                protocol: 'https',
                                host: 'securepubads.g.doubleclick.net',
                                pathname: '/gampad/ads',
                                search: c
                            });
                            _(null, s);
                        }
                    })) : Object(b.logError)('A params object and a callback is required to use pbjs.adServers.dfp.buildAdpodVideoUrl');
                }
                function E(e, r, t) {
                    if (!n.b.getConfig('cache.url'))
                        if (Object(b.deepAccess)(r, ''.concat(t, '.description_url')))
                            Object(b.logError)('input cannnot contain description_url');
                        else {
                            var a = e && e.vastUrl;
                            if (a)
                                return encodeURIComponent(a);
                        }
                }
                function j(e, r) {
                    var t, a = e && e.adserverTargeting || {}, n = {}, o = r && r.adUnit;
                    o && (n = (t = p.d.getAllTargeting(o.code)) ? t[o.code] : {});
                    var c = v({}, { hb_uuid: e && e.videoCacheKey }, { hb_cache_id: e && e.videoCacheKey }, n, a);
                    i.a.emit(l.a.EVENTS.SET_TARGETING, f({}, o.code, c));
                    var d = v({}, c, Object(b.deepAccess)(r, 'params.cust_params'));
                    return encodeURIComponent(Object(b.formatQS)(d));
                }
                n.b.getConfig('brandCategoryTranslation.translationFile') && Object(o.a)('registerAdserver').before(_), Object(a.a)('dfp', {
                    buildVideoUrl: u,
                    buildAdpodVideoUrl: C,
                    getAdpodTargeting: function (e) {
                        return A.getTargeting(e);
                    }
                }), Object(o.e)('adpod', A);
            }
        }, [335]);
        pbjsChunk([201], {
            371: function (e, r, t) {
                e.exports = t(372);
            },
            372: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'spec', function () {
                    return i;
                });
                var b = t(0), n = t(2), a = t(1);
                function w(e) {
                    return (w = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var A = 'freewheel-ssp';
                function S(e) {
                    for (var r = [
                                0,
                                0
                            ], t = 0; t < e.length; t++)
                        e[t][0] * e[t][1] > r[0] * r[1] && (r = e[t]);
                    return r;
                }
                function z(e, r, t) {
                    for (var n = r || [
                                0,
                                0
                            ], a = t || [
                                Number.MAX_VALUE,
                                Number.MAX_VALUE
                            ], i = [], o = 0; o < e.length; o++)
                        e[o][0] * e[o][1] >= n[0] * n[1] && e[o][0] * e[o][1] <= a[0] * a[1] && i.push(e[o]);
                    return S(i);
                }
                function _(e, n) {
                    var a = '', r = e.querySelectorAll('Impression'), i = !1, o = !1;
                    return Array.prototype.forEach.call(r, function (e) {
                        if (i && o)
                            return a;
                        o = i = !1;
                        var r = e.textContent.substring(e.textContent.indexOf('?') + 1).split('&'), t = '';
                        Array.prototype.forEach.call(r, function (e) {
                            var r = e.split('=');
                            r[0] == n && (t = r[1]), 'reqType' == r[0] && 'AdsDisplayStarted' == r[1] && (o = !0), 'rootViewKey' == r[0] && (i = !0);
                        }), o && (a = t);
                    }), a;
                }
                function T() {
                    var e = window;
                    try {
                        for (; top !== e;)
                            e.parent.location.href.length && (e = e.parent);
                    } catch (e) {
                    }
                    return e;
                }
                function c(e) {
                    return e && 'inbanner' !== e ? e : 'mustang';
                }
                function I(e, r) {
                    var t = e.params.format, n = '<div id="freewheelssp_prebid_target" style="width:' + r[0] + 'px;height:' + r[1] + 'px;"></div>', a = '', i = '', a = t && 'inbanner' !== t ? (i = 'https://cdn.stickyadstv.com/prime-time/' + c(e.params.format) + '.min.js', function (e) {
                            var r = e.params;
                            if (!r.hasOwnProperty('domId') && !r.hasOwnProperty('auto') && !r.hasOwnProperty('p') && !r.hasOwnProperty('article')) {
                                if (r.format === 'intext-roll') {
                                    r.iframeMode = 'dfp';
                                } else {
                                    r.domId = 'freewheelssp_prebid_target';
                                }
                            }
                            var t = 'var config = {' + '  preloadedVast:vast,' + '  ASLoader:new window.com.stickyadstv.tools.ASLoader(' + e.params.zoneId + ', \'' + c(e.params.format) + '\')';
                            for (var n in r) {
                                if (r.hasOwnProperty(n) && n !== 'format' && n !== 'zone' && n !== 'zoneId' && n !== 'vastUrlParams') {
                                    t += ',' + n + ':"' + r[n] + '"';
                                }
                            }
                            return t += '};window.com.stickyadstv.' + function (e) {
                                return (e = e || '').replace('-', '');
                            }(e.params.format) + '.start(config);';
                        }(e)) : (i = 'https://cdn.stickyadstv.com/mustang/mustang.min.js', function (e, r) {
                            return 'var config = {' + '      preloadedVast:vast,' + '      autoPlay:true' + '    };' + '    var ad = new window.com.stickyadstv.vpaid.Ad(document.getElementById("freewheelssp_prebid_target"),config);' + '    (new window.com.stickyadstv.tools.ASLoader(' + e.params.zoneId + ', \'' + c(e.params.format) + '\')).registerEvents(ad);' + '    ad.initAd(' + r[0] + ',' + r[1] + ',"",0,"","");';
                        }(e, r));
                    return n + '<script type=\'text/javascript\'>(function() {  var st = document.createElement(\'script\'); st.type = \'text/javascript\'; st.async = true;  st.src = \'' + i + '\';  st.onload = function(){    var vastLoader = new window.com.stickyadstv.vast.VastLoader();    var vast = vastLoader.getVast();    var topWindow = (function(){var res=window; try{while(top != res){if(res.parent.location.href.length)res=res.parent;}}catch(e){}return res;})();    vast.setXmlString(topWindow.freewheelssp_cache["' + e.adUnitCode + '"]);    vastLoader.parseAds(vast, {      onSuccess: function() {' + a + ' }    });  };  document.head.appendChild(st);})();</script>';
                }
                var i = {
                    code: A,
                    supportedMediaTypes: [
                        n.b,
                        n.d
                    ],
                    aliases: ['stickyadstv'],
                    isBidRequestValid: function (e) {
                        return !!e.params.zoneId;
                    },
                    buildRequests: function (e, r) {
                        function t(e, r) {
                            var t = e.params.zoneId, n = new Date().getTime(), a = function (e) {
                                    var r = 0;
                                    if (0 == e.length)
                                        return r;
                                    for (var t = 0; t < e.length; t++)
                                        r = (r << 5) - r + e.charCodeAt(t), r &= r;
                                    return r;
                                }(t + '' + n), i = {
                                    reqType: 'AdsSetup',
                                    protocolVersion: '2.0',
                                    zoneId: t,
                                    componentId: 'prebid',
                                    componentSubId: c(e.params.format),
                                    timestamp: n,
                                    pKey: a
                                };
                            r && r.gdprConsent && (i._fw_gdpr_consent = r.gdprConsent.consentString, 'boolean' == typeof r.gdprConsent.gdprApplies && (i._fw_gdpr = r.gdprConsent.gdprApplies)), e.params.gdpr_consented_providers && (i._fw_gdpr_consented_providers = e.params.gdpr_consented_providers), r && r.uspConsent && (i._fw_us_privacy = r.uspConsent);
                            var o = e.params.vastUrlParams;
                            if ('object' === w(o))
                                for (var s in o)
                                    o.hasOwnProperty(s) && (i[s] = o[s]);
                            var p = r && r.refererInfo ? r.refererInfo.referer : T().location.href;
                            !function (e) {
                                if (e) {
                                    return /^(https?|ftp|file):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/.test(e);
                                }
                            }(p) || (i.loc = p);
                            var d = [];
                            return (0 < (d = e.mediaTypes.video && e.mediaTypes.video.playerSize ? b.isArray(e.mediaTypes.video.playerSize[0]) ? e.mediaTypes.video.playerSize[0] : e.mediaTypes.video.playerSize : e.mediaTypes.banner.sizes ? z(e.mediaTypes.banner.sizes, e.mediaTypes.banner.minSizeLimit, e.mediaTypes.banner.maxSizeLimit) : S(e.sizes))[0] || 0 < d[1]) && (i.playerSize = d[0] + 'x' + d[1]), {
                                method: 'GET',
                                url: 'https://ads.stickyadstv.com/www/delivery/swfIndex.php',
                                data: i,
                                bidRequest: e
                            };
                        }
                        return e.map(function (e) {
                            return t(e, r);
                        });
                    },
                    interpretResponse: function (e, r) {
                        var t = r.bidRequest, n = [], n = t.mediaTypes.video && t.mediaTypes.video.playerSize ? b.isArray(t.mediaTypes.video.playerSize[0]) ? t.mediaTypes.video.playerSize[0] : t.mediaTypes.video.playerSize : t.mediaTypes.banner.sizes ? z(t.mediaTypes.banner.sizes, t.mediaTypes.banner.minSizeLimit, t.mediaTypes.banner.maxSizeLimit) : S(t.sizes);
                        'object' == w(e) && 'string' == typeof e.body && (e = e.body);
                        try {
                            var a = new DOMParser().parseFromString(e, 'application/xml');
                        } catch (e) {
                            return void b.logWarn('Prebid.js - ' + A + ' : ' + e);
                        }
                        var i, o, s, p, d, c, m = (s = {}, p = a.querySelectorAll('Extension'), Array.prototype.forEach.call(p, function (e) {
                                'StickyPricing' === e.getAttribute('type') && (i = e);
                            }), i ? s = {
                                currency: (o = i.querySelector('Price')).getAttribute('currency'),
                                price: o.textContent || o.innerText
                            } : b.logWarn('PREBID - ' + A + ': No bid received or missing pricing extension.'), s), u = (d = '', c = a.querySelectorAll('Ad'), Array.prototype.forEach.call(c, function (e) {
                                d += '[' + e.getAttribute('id') + ']';
                            }), d), y = _(a, 'dealId'), l = _(a, 'campaignId'), f = _(a, 'adId'), v = T();
                        v.freewheelssp_cache || (v.freewheelssp_cache = {}), v.freewheelssp_cache[t.adUnitCode] = e;
                        var g, h = [];
                        return m.price && (g = {
                            requestId: t.bidId,
                            cpm: m.price,
                            width: n[0],
                            height: n[1],
                            creativeId: u,
                            currency: m.currency,
                            netRevenue: !0,
                            ttl: 360,
                            meta: { advertiserDomains: m.adomain && b.isArray(m.adomain) ? m.adomain : [] },
                            dealId: y,
                            campaignId: l,
                            bannerId: f
                        }, t.mediaTypes.video && (g.vastXml = e, g.mediaType = 'video'), g.ad = I(t, n), h.push(g)), h;
                    },
                    getUserSyncs: function (e, r, t) {
                        var n = '';
                        return t && (n = 'boolean' == typeof t.gdprApplies ? '?gdpr='.concat(Number(t.gdprApplies), '&gdpr_consent=').concat(t.consentString) : '?gdpr_consent='.concat(t.consentString)), e && e.pixelEnabled ? [{
                                type: 'image',
                                url: 'https://ads.stickyadstv.com/auto-user-sync' + n
                            }] : [];
                    }
                };
                Object(a.registerBidder)(i);
            }
        }, [371]);
        pbjsChunk([181], {
            413: function (e, r, t) {
                e.exports = t(414);
            },
            414: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'ID5_STORAGE_NAME', function () {
                    return a;
                }), t.d(r, 'ID5_PRIVACY_STORAGE_NAME', function () {
                    return f;
                }), t.d(r, 'id5IdSubmodule', function () {
                    return s;
                }), r.expDaysStr = h, r.nbCacheName = c, r.storeNbInCache = D, r.getNbFromCache = p, r.getFromLocalStorage = E, r.storeInLocalStorage = C, r.isInControlGroup = O;
                var d = t(0), u = t(4), n = t(10), g = t(19), o = t(9), l = t(7), m = 30, a = 'id5id', f = ''.concat(a, '_privacy'), b = 'html5', i = 10000, v = 'User ID - ID5 submodule: ', I = [
                        'pbjs-id5id',
                        'id5id.1st',
                        'id5id'
                    ], y = Object(o.b)(131, 'id5Id'), s = {
                        name: 'id5Id',
                        gvlid: 131,
                        decode: function (e, r) {
                            var t, n = 0;
                            if (e && 'string' == typeof e.universal_uid) {
                                t = e.universal_uid, n = e.link_type || n;
                                var o = T(r), a = O(t, o.controlGroupPct);
                                !0 === o.enabled && void 0 === a ? d.logError(v + 'A/B Testing controlGroupPct must be a number >= 0 and <= 1! Skipping A/B Testing') : !0 === o.enabled && !0 === a ? (d.logInfo(v + 'A/B Testing Enabled - user is in the Control Group, so the ID5 ID is NOT exposed'), t = '', n = 0) : !0 === o.enabled && d.logInfo(v + 'A/B Testing Enabled - user is NOT in the Control Group, so the ID5 ID is exposed');
                                var i = {
                                    id5id: {
                                        uid: t,
                                        ext: { linkType: n }
                                    }
                                };
                                return !0 === o.enabled && d.deepSetValue(i, 'id5id.ext.abTestingControlGroup', void 0 !== a && a), d.logInfo(v + 'Decoded ID', i), i;
                            }
                        },
                        getId: function (o, e, r) {
                            if (S(o)) {
                                var t, a = 'https://id5-sync.com/g/v2/'.concat(o.params.partner, '.json'), n = e && 'boolean' == typeof e.gdprApplies && e.gdprApplies ? 1 : 0, i = l.uspDataHandler.getConsentData(), s = Object(g.a)(), c = r && r.signature ? r.signature : (I.forEach(function (e) {
                                        y.getCookie(e) && (t = JSON.parse(y.getCookie(e)) || t);
                                    }), t && t.signature || ''), p = {
                                        partner: o.params.partner,
                                        gdpr: n,
                                        nbPage: _(o.params.partner),
                                        o: 'pbjs',
                                        rf: s.referer,
                                        top: s.reachedTop ? 1 : 0,
                                        u: s.stack[0] || window.location.href,
                                        v: '5.1.0'
                                    };
                                !n || void 0 === e.consentString || d.isEmpty(e.consentString) || d.isEmptyStr(e.consentString) || (p.gdpr_consent = e.consentString), void 0 === i || d.isEmpty(i) || d.isEmptyStr(i) || (p.us_privacy = i), void 0 === c || d.isEmptyStr(c) || (p.s = c), void 0 === o.params.pd || d.isEmptyStr(o.params.pd) || (p.pd = o.params.pd), void 0 === o.params.provider || d.isEmptyStr(o.params.provider) || (p.provider = o.params.provider), !0 === T(o).enabled && d.deepSetValue(p, 'features.ab', 1);
                                return {
                                    callback: function (n) {
                                        var e = {
                                            success: function (e) {
                                                var r, t;
                                                if (e)
                                                    try {
                                                        r = JSON.parse(e), d.logInfo(v + 'response received from the server', r), D(o.params.partner, 0), r.privacy && C(f, JSON.stringify(r.privacy), m), o.storage.type === b && (t = o.params.partner, d.logInfo(v + 'removing legacy cookies'), I.forEach(function (e) {
                                                            y.setCookie(''.concat(e), ' ', h(-1)), y.setCookie(''.concat(e, '_nb'), ' ', h(-1)), y.setCookie(''.concat(e, '_').concat(t, '_nb'), ' ', h(-1)), y.setCookie(''.concat(e, '_last'), ' ', h(-1));
                                                        }));
                                                    } catch (e) {
                                                        d.logError(v + e);
                                                    }
                                                n(r);
                                            },
                                            error: function (e) {
                                                d.logError(v + 'getId fetch encountered an error', e), n();
                                            }
                                        };
                                        d.logInfo(v + 'requesting an ID from the server', p), Object(u.a)(a, e, JSON.stringify(p), {
                                            method: 'POST',
                                            withCredentials: !0
                                        });
                                    }
                                };
                            }
                        },
                        extendId: function (e, r, t) {
                            return S(e), _(e && e.params && e.params.partner || 0), d.logInfo(v + 'using cached ID', t), t;
                        }
                    };
                function S(e) {
                    if (e && e.params && e.params.partner && 'number' == typeof e.params.partner) {
                        if (e.storage && e.storage.type && e.storage.name)
                            return e.storage.type !== b && d.logWarn(v + 'storage type recommended to be \''.concat(b, '\'. In a future release this may become a strict requirement')), e.storage.name !== a && d.logWarn(v + 'storage name recommended to be \''.concat(a, '\'. In a future release this may become a strict requirement')), 1;
                        d.logError(v + 'storage required to be set');
                    } else
                        d.logError(v + 'partner required to be defined as a number');
                }
                function h(e) {
                    return new Date(Date.now() + 86400000 * e).toUTCString();
                }
                function c(e) {
                    return ''.concat(a, '_').concat(e, '_nb');
                }
                function D(e, r) {
                    C(c(e), r, m);
                }
                function p(e) {
                    var r = E(c(e));
                    return r ? parseInt(r) : 0;
                }
                function _(e) {
                    var r = p(e) + 1;
                    return D(e, r), r;
                }
                function E(e) {
                    var r = y.getDataFromLocalStorage(''.concat(e, '_exp'));
                    return '' === r || r && 0 < new Date(r).getTime() - Date.now() ? y.getDataFromLocalStorage(e) : (y.removeDataFromLocalStorage(e), null);
                }
                function C(e, r, t) {
                    y.setDataInLocalStorage(''.concat(e, '_exp'), h(t)), y.setDataInLocalStorage(''.concat(e), r);
                }
                function T(e) {
                    return e && e.params && e.params.abTesting || { enabled: !1 };
                }
                function O(e, r) {
                    var t;
                    if (!(!d.isNumber(r) || r < 0 || 1 < r))
                        return ((t = e) ? (d.cyrb53Hash(t) % i + i) % i : Math.floor(Math.random() * i)) < r * i;
                }
                Object(n.e)('userId', s);
            }
        }, [413]);
        pbjsChunk([43], {
            21: function (e, r, t) {
                'use strict';
                r.b = function (e) {
                    var r = [];
                    for (var t in e) {
                        var i;
                        e.hasOwnProperty(t) && ('pubProvidedId' === t ? r = r.concat(e.pubProvidedId) : (i = function (e, r) {
                            var t = o[r];
                            if (t && e) {
                                var i = {};
                                i.source = t.source;
                                var a = c.isFn(t.getValue) ? t.getValue(e) : e;
                                if (c.isStr(a)) {
                                    var n, s, d = {
                                            id: a,
                                            atype: t.atype
                                        };
                                    return !c.isFn(t.getUidExt) || (n = t.getUidExt(e)) && (d.ext = n), i.uids = [d], !c.isFn(t.getEidExt) || (s = t.getEidExt(e)) && (i.ext = s), i;
                                }
                            }
                            return null;
                        }(e[t], t)) && r.push(i));
                    }
                    return r;
                }, r.a = function (e) {
                    var t = [];
                    return e.filter(function (e) {
                        return c.isPlainObject(e.idObj) && Object.keys(e.idObj).length;
                    }).forEach(function (r) {
                        Object.keys(r.idObj).forEach(function (e) {
                            c.deepAccess(r, 'config.bidders') && Array.isArray(r.config.bidders) && c.deepAccess(o, e + '.source') && t.push({
                                source: o[e].source,
                                bidders: r.config.bidders
                            });
                        });
                    }), t;
                };
                var c = t(0), o = {
                        intentIqId: {
                            source: 'intentiq.com',
                            atype: 1
                        },
                        pubcid: {
                            source: 'pubcid.org',
                            atype: 1
                        },
                        tdid: {
                            source: 'adserver.org',
                            atype: 1,
                            getUidExt: function () {
                                return { rtiPartner: 'TDID' };
                            }
                        },
                        id5id: {
                            getValue: function (e) {
                                return e.uid;
                            },
                            source: 'id5-sync.com',
                            atype: 1,
                            getUidExt: function (e) {
                                if (e.ext)
                                    return e.ext;
                            }
                        },
                        parrableId: {
                            source: 'parrable.com',
                            atype: 1,
                            getValue: function (e) {
                                return e.eid ? e.eid : e.ccpaOptout ? '' : null;
                            },
                            getUidExt: function (e) {
                                var r = c.pick(e, [
                                    'ibaOptout',
                                    'ccpaOptout'
                                ]);
                                if (Object.keys(r).length)
                                    return r;
                            }
                        },
                        idl_env: {
                            source: 'liveramp.com',
                            atype: 3
                        },
                        lipb: {
                            getValue: function (e) {
                                return e.lipbid;
                            },
                            source: 'liveintent.com',
                            atype: 3,
                            getEidExt: function (e) {
                                if (Array.isArray(e.segments) && e.segments.length)
                                    return { segments: e.segments };
                            }
                        },
                        britepoolid: {
                            source: 'britepool.com',
                            atype: 3
                        },
                        dmdId: {
                            source: 'hcn.health',
                            atype: 3
                        },
                        lotamePanoramaId: {
                            source: 'crwdcntrl.net',
                            atype: 1
                        },
                        criteoId: {
                            source: 'criteo.com',
                            atype: 1
                        },
                        merkleId: {
                            source: 'merkleinc.com',
                            atype: 3,
                            getValue: function (e) {
                                return e.id;
                            },
                            getUidExt: function (e) {
                                return e && e.keyID ? { keyID: e.keyID } : void 0;
                            }
                        },
                        netId: {
                            source: 'netid.de',
                            atype: 1
                        },
                        IDP: {
                            source: 'zeotap.com',
                            atype: 1
                        },
                        haloId: {
                            source: 'audigent.com',
                            atype: 1
                        },
                        quantcastId: {
                            source: 'quantcast.com',
                            atype: 1
                        },
                        nextrollId: {
                            source: 'nextroll.com',
                            atype: 1
                        },
                        idx: {
                            source: 'idx.lat',
                            atype: 1
                        },
                        connectid: {
                            source: 'verizonmedia.com',
                            atype: 3
                        },
                        fabrickId: {
                            source: 'neustar.biz',
                            atype: 1
                        },
                        mwOpenLinkId: {
                            source: 'mediawallahscript.com',
                            atype: 1
                        },
                        tapadId: {
                            source: 'tapad.com',
                            atype: 1
                        },
                        novatiq: {
                            getValue: function (e) {
                                return e.snowflake;
                            },
                            source: 'novatiq.com',
                            atype: 1
                        },
                        uid2: {
                            source: 'uidapi.com',
                            atype: 3,
                            getValue: function (e) {
                                return e.id;
                            }
                        },
                        deepintentId: {
                            source: 'deepintent.com',
                            atype: 3
                        },
                        admixerId: {
                            source: 'admixer.net',
                            atype: 3
                        },
                        amxId: {
                            source: 'amxrtb.com',
                            atype: 1
                        }
                    };
            },
            423: function (e, r, t) {
                e.exports = t(424);
            },
            424: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'spec', function () {
                    return n;
                }), r.ImproveDigitalAdServerJSClient = p;
                var m = t(0), i = t(1), f = t(3), y = t(2), d = t(13), c = t(21), a = t(12), h = t.n(a);
                function o() {
                    return (o = Object.assign || function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = arguments[r];
                            for (var i in t)
                                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var b = [
                        'skip',
                        'skipmin',
                        'skipafter'
                    ], n = {
                        version: '7.4.0',
                        code: 'improvedigital',
                        gvlid: 253,
                        aliases: ['id'],
                        supportedMediaTypes: [
                            y.b,
                            y.c,
                            y.d
                        ],
                        isBidRequestValid: function (e) {
                            return !!(e && e.params && (e.params.placementId || e.params.placementKey && e.params.publisherId));
                        },
                        buildRequests: function (e, r) {
                            var t, i = e.map(function (e) {
                                    var r = m.getBidIdParameter('adUnitCode', e) || null, t = m.getBidIdParameter('placementId', e.params) || null, i = null, a = null;
                                    null === t && (i = m.getBidIdParameter('publisherId', e.params) || null, a = m.getBidIdParameter('placementKey', e.params) || null);
                                    var n = m.getBidIdParameter('keyValues', e.params) || null, s = m.getBidIdParameter('size', e.params) || null, d = m.getBidIdParameter('bidId', e), c = m.getBidIdParameter('transactionId', e), o = f.b.getConfig('currency.adServerCurrency'), u = {};
                                    g(e) && (u.adTypes = [y.d]);
                                    (g(e) || v(e)) && (u.video = function (r) {
                                        var t = {};
                                        return Object.keys(Object(r.mediaTypes.video)).filter(function (e) {
                                            return h()(b, e);
                                        }).forEach(function (e) {
                                            t[e] = r.mediaTypes.video[e];
                                        }), Object.keys(Object(r.params.video)).filter(function (e) {
                                            return h()(b, e);
                                        }).forEach(function (e) {
                                            t[e] = r.params.video[e];
                                        }), t;
                                    }(e));
                                    t ? u.placementId = t : (i && (u.publisherId = i), a && (u.placementKey = a));
                                    n && (u.keyValues = n);
                                    !0 === f.b.getConfig('improvedigital.usePrebidSizes') && !g(e) && !v(e) && e.sizes && 0 < e.sizes.length ? u.format = e.sizes : s && s.w && s.h && (u.size = {}, u.size.h = s.h, u.size.w = s.w);
                                    d && (u.id = d);
                                    r && (u.adUnitId = r);
                                    c && (u.transactionId = c);
                                    o && (u.currency = o);
                                    var p = function (e) {
                                            if (!m.isFn(e.getFloor))
                                                return null;
                                            var r = e.getFloor({
                                                currency: 'USD',
                                                mediaType: '*',
                                                size: '*'
                                            });
                                            return !m.isPlainObject(r) || isNaN(r.floor) || 'USD' !== r.currency ? null : r.floor;
                                        }(e), l = null;
                                    p || (p = m.getBidIdParameter('bidFloor', e.params), l = m.getBidIdParameter('bidFloorCur', e.params));
                                    p && (u.bidFloor = p, u.bidFloorCur = l ? l.toUpperCase() : 'USD');
                                    return u;
                                }), a = new p('hb'), n = {
                                    singleRequestMode: !0 === f.b.getConfig('improvedigital.singleRequest'),
                                    returnObjType: a.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT,
                                    libVersion: this.version
                                };
                            r && r.gdprConsent && r.gdprConsent.consentString && (n.gdpr = r.gdprConsent.consentString), r && r.uspConsent && (n.usPrivacy = r.uspConsent), r && r.refererInfo && r.refererInfo.referer && (n.referrer = r.refererInfo.referer), n.schain = e[0].schain, !e[0].userId || (t = Object(c.b)(e[0].userId)).length && m.deepSetValue(n, 'user.ext.eids', t);
                            var s = a.createRequest(i, n);
                            return s.errors && 0 < s.errors.length && m.logError('ID WARNING 0x01'), s.requests.forEach(function (e) {
                                return e.bidderRequest = r;
                            }), s.requests;
                        },
                        interpretResponse: function (e, r) {
                            var n = r.bidderRequest, s = [];
                            return m._each(e.body.bid, function (t) {
                                var e, i, r, a;
                                t.price && null !== t.price && !t.hasOwnProperty('errorCode') && (t.adm || t.native) && (e = m.getBidRequest(t.id, [n]), i = {}, t.native ? (i.native = function (e) {
                                    var r = {};
                                    if (!e || !m.isArray(e.assets))
                                        return null;
                                    e.assets.forEach(function (e) {
                                        if (e.title)
                                            r.title = e.title.text;
                                        else if (e.data)
                                            switch (e.data.type) {
                                            case 1:
                                                r.sponsoredBy = e.data.value;
                                                break;
                                            case 2:
                                                r.body = e.data.value;
                                                break;
                                            case 3:
                                                r.rating = e.data.value;
                                                break;
                                            case 4:
                                                r.likes = e.data.value;
                                                break;
                                            case 5:
                                                r.downloads = e.data.value;
                                                break;
                                            case 6:
                                                r.price = e.data.value;
                                                break;
                                            case 7:
                                                r.salePrice = e.data.value;
                                                break;
                                            case 8:
                                                r.phone = e.data.value;
                                                break;
                                            case 9:
                                                r.address = e.data.value;
                                                break;
                                            case 10:
                                                r.body2 = e.data.value;
                                                break;
                                            case 11:
                                                r.displayUrl = e.data.value;
                                                break;
                                            case 12:
                                                r.cta = e.data.value;
                                            }
                                        else if (e.img)
                                            switch (e.img.type) {
                                            case 2:
                                                r.icon = {
                                                    url: e.img.url,
                                                    width: e.img.w,
                                                    height: e.img.h
                                                };
                                                break;
                                            case 3:
                                                r.image = {
                                                    url: e.img.url,
                                                    width: e.img.w,
                                                    height: e.img.h
                                                };
                                            }
                                    }), e.eventtrackers ? (r.impressionTrackers = [], e.eventtrackers.forEach(function (e) {
                                        if (1 === e.event)
                                            switch (e.method) {
                                            case 1:
                                                r.impressionTrackers.push(e.url);
                                                break;
                                            case 2:
                                                r.javascriptTrackers = '<script src="'.concat(e.url, '"></script>');
                                            }
                                    })) : (r.impressionTrackers = e.imptrackers || [], r.javascriptTrackers = e.jstracker);
                                    e.link && (r.clickUrl = e.link.url, r.clickTrackers = e.link.clicktrackers);
                                    e.privacy && (r.privacyLink = e.privacy);
                                    return r;
                                }(t.native), i.ortbNative = t.native, t.nurl && i.native.impressionTrackers.unshift(t.nurl), i.mediaType = y.c) : t.ad_type && 'video' === t.ad_type ? (i.vastXml = t.adm, i.mediaType = y.d, v(e) && (i.adResponse = {
                                    content: i.vastXml,
                                    height: t.h,
                                    width: t.w
                                }, i.renderer = function (e) {
                                    var r = d.a.install({
                                        id: e.adUnitCode,
                                        url: 'https://acdn.adnxs.com/video/outstream/ANOutstreamVideo.js',
                                        loaded: !1,
                                        config: m.deepAccess(e, 'renderer.options'),
                                        adUnitCode: e.adUnitCode
                                    });
                                    try {
                                        r.setRender(u);
                                    } catch (e) {
                                        m.logWarn('Prebid Error calling setRender on renderer', e);
                                    }
                                    return r;
                                }(e))) : (r = '', t.nurl && 0 < t.nurl.length && (r = '<img src="'.concat(t.nurl, '" width="0" height="0" style="display:none">')), i.ad = ''.concat(r, '<script>').concat(t.adm, '</script>'), i.mediaType = y.b), i.cpm = parseFloat(t.price), i.creativeId = t.crid, i.currency = t.currency ? t.currency.toUpperCase() : 'USD', m.isNumber(t.lid) && t.buying_type && 'rtb' !== t.buying_type ? i.dealId = t.lid : Array.isArray(t.lid) && Array.isArray(t.buying_type) && t.lid.length === t.buying_type.length && (a = !1, t.buying_type.forEach(function (e, r) {
                                    a || e && 'rtb' !== e && (a = !0, i.dealId = t.lid[r]);
                                })), i.height = t.h, i.netRevenue = !!t.isNet && t.isNet, i.requestId = t.id, i.ttl = 300, i.width = t.w, i.width && i.height || (i.width = 1, i.height = 1), t.adomain && (i.meta = { advertiserDomains: t.adomain }), s.push(i));
                            }), s;
                        },
                        getUserSyncs: function (e, r) {
                            if (e.pixelEnabled) {
                                var t = [];
                                return r.forEach(function (e) {
                                    e.body.bid.forEach(function (e) {
                                        m.isArray(e.sync) && e.sync.forEach(function (e) {
                                            -1 === t.indexOf(e) && t.push(e);
                                        });
                                    });
                                }), t.map(function (e) {
                                    return {
                                        type: 'image',
                                        url: e
                                    };
                                });
                            }
                            return [];
                        }
                    };
                function g(e) {
                    var r = Object.keys(m.deepAccess(e, 'mediaTypes', {})), t = m.deepAccess(e, 'mediaTypes.video'), i = m.deepAccess(e, 'mediaTypes.video.context');
                    return 'video' === e.mediaType || 1 === r.length && t && 'outstream' !== i;
                }
                function v(e) {
                    var r = m.deepAccess(e, 'mediaTypes.video'), t = m.deepAccess(e, 'mediaTypes.video.context');
                    return r && 'outstream' === t;
                }
                function u(e) {
                    e.renderer.push(function () {
                        window.ANOutstreamVideo.renderAd({
                            sizes: [
                                e.width,
                                e.height
                            ],
                            targetId: e.adUnitCode,
                            adResponse: e.adResponse,
                            rendererOptions: e.renderer.getConfig()
                        }, function (e, r, t) {
                            e.renderer.handleVideoEvent({
                                id: r,
                                eventName: t
                            });
                        }.bind(null, e));
                    });
                }
                function p(e) {
                    this.CONSTANTS = {
                        AD_SERVER_BASE_URL: 'ice.360yield.com',
                        END_POINT: e || 'hb',
                        AD_SERVER_URL_PARAM: 'jsonp=',
                        CLIENT_VERSION: 'JS-6.4.0',
                        MAX_URL_LENGTH: 2083,
                        ERROR_CODES: {
                            MISSING_PLACEMENT_PARAMS: 2,
                            LIB_VERSION_MISSING: 3
                        },
                        RETURN_OBJ_TYPE: {
                            DEFAULT: 0,
                            URL_PARAMS_SPLIT: 1
                        }
                    }, this.getErrorReturn = function (e) {
                        return {
                            idMappings: {},
                            requests: {},
                            errorCode: e
                        };
                    }, this.createRequest = function (e, r, t) {
                        if (!r.libVersion)
                            return this.getErrorReturn(this.CONSTANTS.ERROR_CODES.LIB_VERSION_MISSING);
                        r.returnObjType = r.returnObjType || this.CONSTANTS.RETURN_OBJ_TYPE.DEFAULT, r.adServerBaseUrl = 'https://' + (r.adServerBaseUrl || this.CONSTANTS.AD_SERVER_BASE_URL);
                        var i = [];
                        if (m.isArray(e))
                            for (var a = 0; a < e.length; a++)
                                c = this.createImpressionObject(e[a]), i.push(c);
                        else
                            c = this.createImpressionObject(e), i.push(c);
                        var n = !0;
                        r.returnObjType === this.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT && (n = !1);
                        var s = { requests: [] };
                        n && (s.idMappings = []);
                        for (var d, c, o = null, u = ''.concat(r.adServerBaseUrl, '/').concat(this.CONSTANTS.END_POINT, '?').concat(this.CONSTANTS.AD_SERVER_URL_PARAM), p = { bid_request: this.createBasicBidRequestObject(r, t) }, l = 0; l < i.length; l++) {
                            (c = i[l]).errorCode ? (o = o || []).push({
                                errorCode: c.errorCode,
                                adUnitId: c.adUnitId
                            }) : (n && s.idMappings.push({
                                adUnitId: c.adUnitId,
                                id: c.impressionObject.id
                            }), p.bid_request.imp = p.bid_request.imp || [], p.bid_request.imp.push(c.impressionObject), d = !1, (u + encodeURIComponent(JSON.stringify(p))).length > this.CONSTANTS.MAX_URL_LENGTH && (d = !0, 1 < p.bid_request.imp.length && (p.bid_request.imp.pop(), n && s.idMappings.pop(), l--)), !d && r.singleRequestMode && l !== i.length - 1 || (s.requests.push(this.formatRequest(r, p)), p = { bid_request: this.createBasicBidRequestObject(r, t) }));
                        }
                        return o && (s.errors = o), s;
                    }, this.formatRequest = function (e, r) {
                        switch (e.returnObjType) {
                        case this.CONSTANTS.RETURN_OBJ_TYPE.URL_PARAMS_SPLIT:
                            return {
                                method: 'GET',
                                url: ''.concat(e.adServerBaseUrl, '/').concat(this.CONSTANTS.END_POINT),
                                data: ''.concat(this.CONSTANTS.AD_SERVER_URL_PARAM).concat(encodeURIComponent(JSON.stringify(r)))
                            };
                        default:
                            return { url: ''.concat(e.adServerBaseUrl, '/') + ''.concat(this.CONSTANTS.END_POINT, '?').concat(this.CONSTANTS.AD_SERVER_URL_PARAM) + encodeURIComponent(JSON.stringify(r)) };
                        }
                    }, this.createBasicBidRequestObject = function (e, r) {
                        var t = { secure: 1 };
                        if (e.requestId ? t.id = e.requestId : t.id = m.getUniqueIdentifierStr(), e.domain && (t.domain = e.domain), e.page && (t.page = e.page), e.ref && (t.ref = e.ref), e.callback && (t.callback = e.callback), e.libVersion && (t.version = e.libVersion + '-' + this.CONSTANTS.CLIENT_VERSION), e.referrer && (t.referrer = e.referrer), !e.gdpr && 0 !== e.gdpr || (t.gdpr = e.gdpr), e.usPrivacy && (t.us_privacy = e.usPrivacy), e.schain && (t.schain = e.schain), e.user && (t.user = e.user), r)
                            for (var i in r)
                                t[i] = r[i];
                        return t;
                    }, this.createImpressionObject = function (e) {
                        var r, t, i = {}, a = {};
                        if (i.impressionObject = a, e.id ? a.id = e.id : a.id = m.getUniqueIdentifierStr(), e.adTypes && (a.ad_types = e.adTypes), e.adUnitId && (i.adUnitId = e.adUnitId), e.currency && (a.currency = e.currency.toUpperCase()), e.bidFloor && (a.bidfloor = e.bidFloor), e.bidFloorCur && (a.bidfloorcur = e.bidFloorCur.toUpperCase()), e.placementId && (a.pid = e.placementId), e.publisherId && (a.pubid = e.publisherId), e.placementKey && (a.pkey = e.placementKey), e.transactionId && (a.tid = e.transactionId), m.isEmpty(e.video) || (1 !== (r = o({}, e.video)).skip && (delete r.skipmin, delete r.skipafter, 0 !== r.skip && (m.logWarn('video.skip: invalid value \''.concat(r.skip, '\'. Expected 0 or 1')), delete r.skip)), m.isEmpty(r) || (a.video = r)), e.keyValues)
                            for (var n in e.keyValues)
                                for (var s = 0; s < e.keyValues[n].length; s++)
                                    a.kvw = a.kvw || {}, a.kvw[n] = a.kvw[n] || [], a.kvw[n].push(e.keyValues[n][s]);
                        return a.banner = {}, e.size && e.size.w && e.size.h && (a.banner.w = e.size.w, a.banner.h = e.size.h), e.format && m.isArray(e.format) && (0 < (t = e.format.filter(function (e) {
                            return 2 === e.length && m.isInteger(e[0]) && m.isInteger(e[1]) && 0 <= e[0] && 0 <= e[1];
                        }).map(function (e) {
                            return {
                                w: e[0],
                                h: e[1]
                            };
                        })).length && (a.banner.format = t)), a.pid || a.pubid || a.pkey || a.banner && a.banner.w && a.banner.h || (i.impressionObject = null, i.errorCode = this.CONSTANTS.ERROR_CODES.MISSING_PLACEMENT_PARAMS), i;
                    };
                }
                Object(i.registerBidder)(n);
            }
        }, [423]);
        pbjsChunk([172], {
            437: function (e, t, n) {
                e.exports = n(438);
            },
            438: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'spec', function () {
                    return i;
                }), t.resetInvibes = function () {
                    h.optIn = void 0, h.noCookies = void 0, h.dom = void 0, h.bidResponse = void 0, h.domainOptions = void 0;
                }, t.stubDomainOptions = function (e) {
                    h.domainOptions = { persistence: e };
                };
                var l = n(0), r = n(1), o = n(9);
                function c(e) {
                    return (c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var I = {
                        BIDDER_CODE: 'invibes',
                        BID_ENDPOINT: 'https://bid.videostep.com/Bid/VideoAdContent',
                        SYNC_ENDPOINT: 'https://k.r66net.com/GetUserSync',
                        TIME_TO_LIVE: 300,
                        DEFAULT_CURRENCY: 'EUR',
                        PREBID_VERSION: 6,
                        METHOD: 'GET',
                        INVIBES_VENDOR_ID: 436,
                        USERID_PROVIDERS: [
                            'pubcid',
                            'pubProvidedId',
                            'uid2',
                            'zeotapIdPlus',
                            'id5id'
                        ],
                        META_TAXONOMY: [
                            'networkId',
                            'networkName',
                            'agencyId',
                            'agencyName',
                            'advertiserId',
                            'advertiserName',
                            'advertiserDomains',
                            'brandId',
                            'brandName',
                            'primaryCatId',
                            'secondaryCatIds',
                            'mediaType'
                        ]
                    }, m = Object(o.b)(I.INVIBES_VENDOR_ID), i = {
                        code: I.BIDDER_CODE,
                        gvlid: I.INVIBES_VENDOR_ID,
                        isBidRequestValid: function (e) {
                            if (h && 'object' === c(h.bidResponse))
                                return l.logInfo('Invibes Adapter - Bid response already received. Invibes only responds to one bid request per user visit'), !1;
                            return 'object' === c(e.params) && null != e.params.placementId;
                        },
                        buildRequests: function (e, t) {
                            var n, r, o, i = [], a = (t = t || {}).auctionStart || Date.now();
                            e.forEach(function (e) {
                                e.startTime = new Date().getTime(), i.push(e.params.placementId), n = n || e.params.loginId, r = r || e.params.customEndpoint, g = g || e.params.customUserSync, o = o || e.userId;
                            }), h.optIn = h.optIn || function (e) {
                                if (e && e.vendorData) {
                                    if (h.gdpr_consent = function (e) {
                                            if (e.purpose && e.purpose.consents && null != e.tcString)
                                                return e.tcString;
                                            return e.consentData;
                                        }(e.vendorData), !e.vendorData.gdprApplies || e.vendorData.hasGlobalConsent) {
                                        var t;
                                        for (t = 0; t < h.purposes.length; ++t)
                                            h.purposes[t] = !0;
                                        for (t = 0; t < h.legitimateInterests.length; ++t)
                                            h.legitimateInterests[t] = !0;
                                        return 2;
                                    }
                                    var n = function (e) {
                                        if (e.purpose && e.purpose.consents)
                                            return e.purpose.consents;
                                        if (e.purposeConsents)
                                            return e.purposeConsents;
                                        return null;
                                    }(e.vendorData);
                                    if (null == n)
                                        return 0;
                                    var r = function (e) {
                                        if (e.purpose && e.purpose.consents)
                                            return 10;
                                        return 5;
                                    }(e.vendorData);
                                    if (!E(n, h.purposes, r))
                                        return 0;
                                    E(function (e) {
                                        if (e.purpose && e.purpose.legitimateInterests)
                                            return e.purpose.legitimateInterests;
                                        return null;
                                    }(e.vendorData), h.legitimateInterests, 10);
                                    var o = I.INVIBES_VENDOR_ID.toString(10), i = function (e) {
                                            if (e.vendor && e.vendor.consents)
                                                return e.vendor.consents;
                                            if (e.vendorConsents)
                                                return e.vendorConsents;
                                            return null;
                                        }(e.vendorData), a = !0 === function (e) {
                                            if (e.vendor && e.vendor.legitimateInterests)
                                                return e.vendor.legitimateInterests;
                                            return {};
                                        }(e.vendorData)[o];
                                    return null == i || null == i[o] ? 4 : !1 === i[o] && !1 == a ? 0 : 2;
                                }
                                return 0;
                            }(t.gdprConsent), h.visitId = h.visitId || y(), h.noCookies = h.noCookies || h.getCookie('ivNoCookie');
                            var s = D(h.domainOptions), d = function () {
                                    var e = {};
                                    try {
                                        e = JSON.parse(localStorage.ivbs);
                                    } catch (e) {
                                    }
                                    var t, n = /[\\?&]([^=]+)=([^\\?&#]+)/g;
                                    for (; null != (t = n.exec(window.location.href));)
                                        t.index === n.lastIndex && n.lastIndex++, e[t[1].toLowerCase()] = t[2];
                                    return e;
                                }(), u = function (t) {
                                    var n;
                                    t && I.USERID_PROVIDERS.forEach(function (e) {
                                        t[e] && ((n = n || {})[e] = t[e]);
                                    });
                                    return n;
                                }(o), l = {
                                    placementIds: i,
                                    loginId: n,
                                    auctionStartTime: a,
                                    bidVersion: I.PREBID_VERSION
                                };
                            u && (l.userId = u);
                            var c = {
                                location: b.location.href.substring(0, 300).split(/[?#]/)[0],
                                videoAdHtmlId: y(),
                                showFallback: '0' === d.advs,
                                ivbsCampIdsLocal: h.getCookie('IvbsCampIdsLocal'),
                                bidParamsJson: JSON.stringify(l),
                                capCounts: function () {
                                    if (!h.optIn || !h.purposes[0])
                                        return '';
                                    function o() {
                                        try {
                                            return JSON.parse(m.getDataFromLocalStorage('ivvcap')) || {};
                                        } catch (e) {
                                            return {};
                                        }
                                    }
                                    function e() {
                                        var e, t = new Date().getTime(), n = o(), r = !1;
                                        Object.keys(n).forEach(function (e) {
                                            n[e][1] <= t && (delete n[e], r = !0);
                                        }), r && (e = n, m.setDataInLocalStorage('ivvcap', JSON.stringify(e)));
                                    }
                                    return function () {
                                        e();
                                        var t = o();
                                        return Object.keys(t).filter(function (e) {
                                            return t.hasOwnProperty(e);
                                        }).sort().map(function (e) {
                                            return [
                                                e,
                                                t[e][0]
                                            ];
                                        });
                                    }().map(function (e) {
                                        return e.join('=');
                                    }).join(',');
                                }(),
                                vId: h.visitId,
                                width: b.innerWidth,
                                height: b.innerHeight,
                                oi: h.optIn,
                                kw: O,
                                purposes: h.purposes.toString(),
                                li: h.legitimateInterests.toString(),
                                tc: h.gdpr_consent
                            };
                            s && (c.lId = s);
                            var p = 'videoaddebug,advs,bvci,bvid,istop,trybvid,trybvci'.split(',');
                            for (var v in d) {
                                var f;
                                d.hasOwnProperty(v) && (f = d[v], (-1 < p.indexOf(v) || /^vs|^invib/i.test(v)) && (c[v] = f));
                            }
                            return {
                                method: I.METHOD,
                                url: r || I.BID_ENDPOINT,
                                data: c,
                                options: { withCredentials: !0 },
                                bidRequests: e
                            };
                        },
                        interpretResponse: function (e, t) {
                            return function (e, t) {
                                if (null == t || 0 === t.length)
                                    return l.logInfo('Invibes Adapter - No bids have been requested'), [];
                                if (!e)
                                    return l.logInfo('Invibes Adapter - Bid response is empty'), [];
                                if (e = (e = e.body || e).videoAdContentResult || e, 'object' === c(h.bidResponse))
                                    return l.logInfo('Invibes Adapter - Bid response already received. Invibes only responds to one bid request per user visit'), [];
                                h.bidResponse = e;
                                for (var n = [], r = 0; r < t.length; r++) {
                                    var o = t[r], i = null;
                                    if (null != e.AdPlacements)
                                        for (var a = 0; a < e.AdPlacements.length; a++) {
                                            var s = e.AdPlacements[a].BidModel;
                                            if (null != s && s.PlacementId == o.params.placementId) {
                                                i = e.AdPlacements[a];
                                                break;
                                            }
                                        }
                                    else {
                                        var d = e.BidModel;
                                        null != d && d.PlacementId == o.params.placementId && (i = e);
                                    }
                                    var u = function (e, t) {
                                        if (null === t || null === t.BidModel)
                                            return l.logInfo('Invibes Adapter - Placement not configured for bidding ' + e.params.placementId), null;
                                        var n = t.BidModel, r = t.Ads;
                                        if (!Array.isArray(r) || r.length < 1)
                                            return null != t.AdReason && l.logInfo('Invibes Adapter - No ads ' + t.AdReason), l.logInfo('Invibes Adapter - No ads available'), null;
                                        var o = r[0], i = function (e) {
                                                for (var t = [
                                                            0,
                                                            0
                                                        ], n = 0; n < e.length; n++)
                                                    e[n][0] * e[n][1] > t[0] * t[1] && (t = e[n]);
                                                return t;
                                            }(e.sizes), a = Date.now();
                                        return l.logInfo('Bid auction started at ' + n.AuctionStartTime + ' . Invibes registered the bid at ' + a + ' ; bid request took a total of ' + (a - n.AuctionStartTime) + ' ms.'), {
                                            requestId: e.bidId,
                                            cpm: o.BidPrice,
                                            width: n.Width || i[0],
                                            height: n.Height || i[1],
                                            creativeId: o.VideoExposedId,
                                            currency: n.Currency || I.DEFAULT_CURRENCY,
                                            netRevenue: !0,
                                            ttl: I.TIME_TO_LIVE,
                                            ad: '<html>\n        <head><script type=\'text/javascript\'>inDapIF=true;</script></head>\n          <body style=\'margin : 0; padding: 0;\'>\n          creativeHtml\n          </body>\n        </html>'.replace('creativeHtml', n.CreativeHtml),
                                            meta: function (e) {
                                                var t = {};
                                                if (null != e)
                                                    for (var n = 0; n < I.META_TAXONOMY.length; n++)
                                                        e.hasOwnProperty(I.META_TAXONOMY[n]) && (t[I.META_TAXONOMY[n]] = e[I.META_TAXONOMY[n]]);
                                                return t;
                                            }(n.Meta)
                                        };
                                    }(o, i);
                                    null !== u && n.push(u);
                                }
                                return n;
                            }(e, null != t ? t.bidRequests : null);
                        },
                        getUserSyncs: function (e) {
                            if (e.iframeEnabled)
                                return {
                                    type: 'iframe',
                                    url: function () {
                                        var e = g || I.SYNC_ENDPOINT;
                                        e += '?visitId=' + h.visitId, e += '&optIn=' + h.optIn;
                                        var t = h.getCookie('ivbsdid');
                                        t && (e += '&ivbsdid=' + encodeURIComponent(t));
                                        var n = h.getCookie('ivvbks');
                                        n && (e += '&ivvbks=' + encodeURIComponent(n));
                                        return e;
                                    }()
                                };
                        }
                    };
                Object(r.registerBidder)(i);
                var g, b = function () {
                        var e = window;
                        try {
                            for (; top !== e;)
                                e.parent.location.href.length && (e = e.parent);
                        } catch (e) {
                        }
                        return e;
                    }(), h = b.invibes = b.invibes || {};
                function y() {
                    return Math.round(1000000000000 * Math.random()).toString(36).substring(0, 10);
                }
                function E(e, t, n) {
                    if (e instanceof Array) {
                        for (var r = 0; r < n && r < e.length; r++)
                            t[r] = !(!1 === e[r] || 'false' === e[r] || null == e[r]);
                        return 1;
                    }
                    if ('object' === c(e) && null !== e) {
                        var o, i = 0;
                        for (var a in e) {
                            if (i === n)
                                break;
                            e.hasOwnProperty(a) && (o = parseInt(a), isNaN(o) ? t[i] = !(!1 === e[a] || 'false' === e[a] || null == e[a]) : t[o - 1] = !(!1 === e[a] || 'false' === e[a] || null == e[a]), i++);
                        }
                        return 1;
                    }
                }
                h.purposes = h.purposes || [
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1
                ], h.legitimateInterests = h.legitimateInterests || [
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1,
                    !1
                ], h.Uid = {
                    generate: function () {
                        function e() {
                            return Math.floor(Math.random() * t).toString(36);
                        }
                        var t = parseInt('zzzzzz', 36);
                        return e() + e();
                    }
                }, h.getCookie = function (e) {
                    if (m.cookiesAreEnabled() && h.optIn && h.purposes[0])
                        return m.getCookie(e);
                };
                var a, s, d, u, D = function (e) {
                        var t = ((e = e || {}).persistence || {
                            cname: 'ivbsdid',
                            load: function () {
                                var e = h.getCookie(this.cname) || '';
                                try {
                                    return JSON.parse(e);
                                } catch (e) {
                                }
                            }
                        }).load();
                        return t ? t.id || t.tempId : void 0;
                    }, O = (a = document.getElementsByTagName('head')[0], s = a ? a.getElementsByTagName('meta') : [], (!(u = v('keywords', 300)) || u.length < 292) && (!(u = v('description', 300, u)) || u.length < 292) && (d = d = 300, u = p((u || '') + ',' + ((document.title || a) && a.getElementsByTagName('title')[0] ? a.getElementsByTagName('title')[0].innerHTML : ''), d)), u);
                function p(e, t) {
                    for (var n = (r = e.replace(/[<>~|\\"`!@#$%^&*()=+?]/g, '')).split(/[\s,;.:]+/).filter(function (e, t, n) {
                                return '' !== e && n.indexOf(e) === t;
                            }), r = '', o = 0; o < n.length; o++) {
                        if ((r += n[o]).length >= t)
                            return r;
                        o < n.length - 1 && (r += ',');
                    }
                    return r;
                }
                function v(e, t, n) {
                    e = e || 'keywords', t = t || 100;
                    for (var r = n = n || '', o = 0; o < s.length; o++) {
                        if (s[o].name && s[o].name.toLowerCase() === e.toLowerCase())
                            return p(n + ',' + s[o].content || '', t);
                        s[o].name && -1 < s[o].name.toLowerCase().indexOf(e.toLowerCase()) && (r = n + ',' + s[o].content || '');
                    }
                    return p(r, t);
                }
            }
        }, [437]);
        pbjsChunk([169], {
            445: function (e, n, r) {
                e.exports = r(446);
            },
            446: function (e, n, r) {
                'use strict';
                Object.defineProperty(n, '__esModule', { value: !0 }), r.d(n, 'spec', function () {
                    return c;
                });
                var t = r(1), o = r(0), s = [], c = {
                        code: 'justpremium',
                        gvlid: 62,
                        time: 60000,
                        isBidRequestValid: function (e) {
                            return !!(e && e.params && e.params.zone);
                        },
                        buildRequests: function (e, n) {
                            var s, c, r = (s = {}, c = {}, e.forEach(function (e) {
                                    var n = e.params, r = n.zone;
                                    if (1 !== s[r]) {
                                        var t = n.allow || n.formats || [], i = n.exclude || [];
                                        if (0 === t.length && 0 === i.length)
                                            return s[n.zone] = 1;
                                        s[r] = s[r] || [
                                            [],
                                            {}
                                        ], s[r][0] = function (e) {
                                            for (var n = e.concat(), r = 0; r < n.length; ++r)
                                                for (var t = r + 1; t < n.length; ++t)
                                                    n[r] === n[t] && n.splice(t--, 1);
                                            return n;
                                        }(s[r][0].concat(t)), i.forEach(function (e) {
                                            s[r][1][e] ? s[r][1][e]++ : s[r][1][e] = 1;
                                        }), c[r] = c[r] || 0, i.length && c[r]++;
                                    }
                                }), Object.keys(c).forEach(function (n) {
                                    var r;
                                    1 !== s[n] && (r = [], Object.keys(s[n][1]).forEach(function (e) {
                                        s[n][1][e] === c[n] && r.push(e);
                                    }), s[n][1] = r);
                                }), Object.keys(s).forEach(function (r) {
                                    1 !== s[r] && s[r][1].length && (s[r][0].forEach(function (e) {
                                        var n = s[r][1].indexOf(e);
                                        -1 < n && s[r][1].splice(n, 1);
                                    }), s[r][0].length = 0), 1 === s[r] || s[r][0].length || s[r][1].length || (s[r] = 1);
                                }), s), t = function () {
                                    var n;
                                    try {
                                        n = window.top;
                                    } catch (e) {
                                        n = window;
                                    }
                                    return {
                                        screenWidth: n.screen.width,
                                        screenHeight: n.screen.height,
                                        innerWidth: n.innerWidth,
                                        innerHeight: n.innerHeight
                                    };
                                }(), i = {
                                    zone: e.map(function (e) {
                                        return parseInt(e.params.zone);
                                    }).filter(function (e, n, r) {
                                        return r.indexOf(e) === n;
                                    }),
                                    referer: n.refererInfo.referer,
                                    sw: t.screenWidth,
                                    sh: t.screenHeight,
                                    ww: t.innerWidth,
                                    wh: t.innerHeight,
                                    c: r,
                                    id: e[0].params.zone,
                                    sizes: {}
                                };
                            e.forEach(function (e) {
                                var n = e.params.zone, r = i.sizes;
                                r[n] = r[n] || [], r[n].push.apply(r[n], e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes);
                            }), Object(o.deepAccess)(e[0], 'userId.pubcid') ? i.pubcid = Object(o.deepAccess)(e[0], 'userId.pubcid') : Object(o.deepAccess)(e[0], 'crumbs.pubcid') && (i.pubcid = Object(o.deepAccess)(e[0], 'crumbs.pubcid')), i.uids = e[0].userId, n && n.gdprConsent && (i.gdpr_consent = {
                                consent_string: n.gdprConsent.consentString,
                                consent_required: 'boolean' != typeof n.gdprConsent.gdprApplies || n.gdprConsent.gdprApplies
                            }), n && n.uspConsent && (i.us_privacy = n.uspConsent), i.version = {
                                prebid: '5.1.0',
                                jp_adapter: '1.7'
                            };
                            var a = JSON.stringify(i);
                            return {
                                method: 'POST',
                                url: 'https://pre.ads.justpremium.com/v/2.0/t/xhr?i=' + +new Date(),
                                data: a,
                                bids: e
                            };
                        },
                        interpretResponse: function (e, n) {
                            var i = e.body, s = [];
                            return n.bids.forEach(function (e) {
                                var n, r, t = function (e, n) {
                                        var r = e.zone;
                                        if (n[r])
                                            for (var t = n[r].length; t--;)
                                                if (function (e, n) {
                                                        var r = n.format;
                                                        if (e.allow && e.allow.length)
                                                            return -1 < e.allow.indexOf(r);
                                                        if (e.exclude && e.exclude.length)
                                                            return e.exclude.indexOf(r) < 0;
                                                        return !0;
                                                    }(e, n[r][t]))
                                                    return n[r].splice(t, 1).pop();
                                        return !1;
                                    }(e.params, i.bid);
                                t && (n = e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes && e.mediaTypes.banner.sizes.length && e.mediaTypes.banner.sizes[0] || [], r = {
                                    requestId: e.bidId,
                                    creativeId: t.id,
                                    width: n[0] || t.width,
                                    height: n[1] || t.height,
                                    ad: t.adm,
                                    cpm: t.price,
                                    netRevenue: !0,
                                    currency: t.currency || 'USD',
                                    ttl: t.ttl || c.time,
                                    format: t.format,
                                    meta: { advertiserDomains: t.adomain && 0 < t.adomain.length ? t.adomain : [] }
                                }, s.push(r));
                            }), s;
                        },
                        getUserSyncs: function (e, n, r, t) {
                            var i = 'https://pre.ads.justpremium.com/v/1.0/t/sync?_c=a' + Math.random().toString(36).substring(7) + Date.now();
                            return r && 'boolean' == typeof r.gdprApplies && r.gdprApplies && r.consentString && (i = i + '&consentString=' + encodeURIComponent(r.consentString)), t && (i = i + '&usPrivacy=' + encodeURIComponent(t)), e.iframeEnabled && s.push({
                                type: 'iframe',
                                url: i
                            }), s;
                        }
                    };
                Object(t.registerBidder)(c);
            }
        }, [445]);
        pbjsChunk([141], {
            523: function (e, t, r) {
                e.exports = r(524);
            },
            524: function (e, t, r) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), r.d(t, 'USER_ID_CODE_TO_QUERY_ARG', function () {
                    return m;
                }), r.d(t, 'spec', function () {
                    return v;
                });
                var s = r(3), n = r(1), l = r(0), f = r(2), a = r(12), h = r.n(a);
                function o(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var r = [], n = !0, a = !1, i = void 0;
                        try {
                            for (var o, d = e[Symbol.iterator](); !(n = (o = d.next()).done) && (r.push(o.value), !t || r.length !== t); n = !0);
                        } catch (e) {
                            a = !0, i = e;
                        } finally {
                            try {
                                n || null == d.return || d.return();
                            } finally {
                                if (a)
                                    throw i;
                            }
                        }
                        return r;
                    }(e, t) || function (e, t) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return i(e, t);
                        var r = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === r && e.constructor && (r = e.constructor.name);
                        if ('Map' === r || 'Set' === r)
                            return Array.from(e);
                        if ('Arguments' === r || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))
                            return i(e, t);
                    }(e, t) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function i(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var r = 0, n = new Array(t); r < t; r++)
                        n[r] = e[r];
                    return n;
                }
                var d = [
                        f.b,
                        f.d
                    ], b = [
                        'startdelay',
                        'mimes',
                        'minduration',
                        'maxduration',
                        'startdelay',
                        'skippable',
                        'playbackmethod',
                        'api',
                        'protocols',
                        'boxingallowed',
                        'linearity',
                        'delivery',
                        'protocol',
                        'placement',
                        'minbitrate',
                        'maxbitrate'
                    ], c = 'hb_pb', p = '3.0.3', u = 'USD', m = {
                        britepoolid: 'britepoolid',
                        criteoId: 'criteoid',
                        fabrickId: 'nuestarid',
                        haloId: 'audigentid',
                        id5id: 'id5id',
                        idl_env: 'lre',
                        IDP: 'zeotapid',
                        idxId: 'idxid',
                        intentIqId: 'intentiqid',
                        lipb: 'lipbid',
                        lotamePanoramaId: 'lotameid',
                        merkleId: 'merkleid',
                        netId: 'netid',
                        parrableId: 'parrableid',
                        pubcid: 'pubcid',
                        quantcastId: 'quantcastid',
                        tapadId: 'tapadid',
                        tdid: 'ttduuid',
                        uid2: 'uid2'
                    }, v = {
                        code: 'openx',
                        gvlid: 69,
                        supportedMediaTypes: d,
                        isBidRequestValid: function (e) {
                            var t = e.params.delDomain || e.params.platform;
                            return l.deepAccess(e, 'mediaTypes.banner') && t ? !!e.params.unit || 0 < l.deepAccess(e, 'mediaTypes.banner.sizes.length') : !(!e.params.unit || !t);
                        },
                        buildRequests: function (e, n) {
                            if (0 === e.length)
                                return [];
                            var a = [], t = o(e.reduce(function (e, t) {
                                    var r;
                                    return r = t, l.deepAccess(r, 'mediaTypes.video') && !l.deepAccess(r, 'mediaTypes.banner') || r.mediaType === f.d ? e[0].push(t) : e[1].push(t), e;
                                }, [
                                    [],
                                    []
                                ]), 2), r = t[0], i = t[1];
                            return 0 < i.length && a.push(function (e, t) {
                                var n = [], a = !1, r = y(e, t), i = l._map(e, function (e) {
                                        return e.params.unit;
                                    });
                                r.aus = l._map(e, function (e) {
                                    return l.parseSizesInput(e.mediaTypes.banner.sizes).join(',');
                                }).join('|'), r.divids = l._map(e, function (e) {
                                    return encodeURIComponent(e.adUnitCode);
                                }).join(','), r.aucs = l._map(e, function (e) {
                                    var t = l.deepAccess(e, 'ortb2Imp.ext.data.pbadslot');
                                    return encodeURIComponent(t || '');
                                }).join(','), i.some(function (e) {
                                    return e;
                                }) && (r.auid = i.join(','));
                                e.some(function (e) {
                                    return e.params.doNotTrack;
                                }) && (r.ns = 1);
                                !0 !== s.b.getConfig('coppa') && !e.some(function (e) {
                                    return e.params.coppa;
                                }) || (r.tfcd = 1);
                                e.forEach(function (t) {
                                    var e, r;
                                    t.params.customParams ? (e = l._map(Object.keys(t.params.customParams), function (e) {
                                        return function (e, t) {
                                            var r = t[e];
                                            l.isArray(r) && (r = r.join(','));
                                            return (e.toLowerCase() + '=' + r.toLowerCase()).replace('+', '.').replace('/', '_');
                                        }(e, t.params.customParams);
                                    }), r = window.btoa(e.join('&')), a = !0, n.push(r)) : n.push('');
                                }), a && (r.tps = n.join(','));
                                return g(r, f.b, e), {
                                    method: 'GET',
                                    url: r.ph ? 'https://u.openx.net/w/1.0/arj' : 'https://'.concat(e[0].params.delDomain, '/w/1.0/arj'),
                                    data: r,
                                    payload: {
                                        bids: e,
                                        startTime: new Date()
                                    }
                                };
                            }(i, n)), 0 < r.length && r.forEach(function (e) {
                                var t, r;
                                a.push({
                                    method: 'GET',
                                    url: (r = function (e, t) {
                                        var r, n, a = l.deepAccess(e, 'mediaTypes.video'), i = y([e], t), o = l.deepAccess(e, 'params.video') || {}, d = l.deepAccess(e, 'mediaTypes.video.context'), s = l.deepAccess(e, 'mediaTypes.video.playerSize');
                                        l.isArray(e.sizes) && 2 === e.sizes.length && !l.isArray(e.sizes[0]) ? (r = parseInt(e.sizes[0], 10), n = parseInt(e.sizes[1], 10)) : l.isArray(e.sizes) && l.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (r = parseInt(e.sizes[0][0], 10), n = parseInt(e.sizes[0][1], 10)) : l.isArray(s) && 2 === s.length && (r = parseInt(s[0], 10), n = parseInt(s[1], 10));
                                        var c = {
                                                w: r,
                                                h: n
                                            }, p = e.params.video || e.params.openrtb || {};
                                        p.openrtb && (p = p.openrtb);
                                        l.isArray(p.imp) && (p = p.imp[0].video);
                                        Object.keys(p).filter(function (e) {
                                            return h()(b, e);
                                        }).forEach(function (e) {
                                            return c[e] = p[e];
                                        }), Object.keys(a).filter(function (e) {
                                            return h()(b, e);
                                        }).forEach(function (e) {
                                            return c[e] = a[e];
                                        });
                                        var u = { imp: [{ video: c }] };
                                        i.openrtb = JSON.stringify(u), i.auid = e.params.unit, i.vwd = r || o.vwd, i.vht = n || o.vht, 'outstream' === d && (i.vos = '101');
                                        o.mimes && (i.vmimes = o.mimes);
                                        e.params.test && (i.vtest = 1);
                                        var m = l.deepAccess(e, 'ortb2Imp.ext.data.pbadslot');
                                        m && (i.aucs = encodeURIComponent(m));
                                        return g(i, f.d, [e]), i;
                                    }(t = e, n)).ph ? 'https://u.openx.net/v/1.0/avjp' : 'https://'.concat(t.params.delDomain, '/v/1.0/avjp'),
                                    data: r,
                                    payload: {
                                        bid: t,
                                        startTime: new Date()
                                    }
                                });
                            }), a;
                        },
                        interpretResponse: function (e, t) {
                            var r = e.body;
                            return ((/avjp$/.test(t.url) ? f.d : f.b) === f.d ? function (e, t) {
                                var r = t.bid, n = (t.startTime, []);
                                {
                                    var a, i;
                                    void 0 !== e && '' !== e.vastUrl && 0 < e.pub_rev && (a = l.parseUrl(e.vastUrl).search || {}, (i = {}).requestId = r.bidId, e.deal_id && (i.dealId = e.deal_id), i.ttl = 300, i.netRevenue = !0, i.currency = e.currency, i.cpm = parseInt(e.pub_rev, 10) / 1000, i.width = parseInt(e.width, 10), i.height = parseInt(e.height, 10), i.creativeId = e.adid, i.vastUrl = e.vastUrl, i.mediaType = f.d, e.ph = a.ph, e.colo = a.colo, e.ts = a.ts, n.push(i));
                                }
                                return n;
                            } : function (e, t) {
                                for (var r = t.bids, n = (t.startTime, e.ads.ad), a = [], i = 0; i < n.length; i++) {
                                    var o, d = n[i], s = parseInt(d.idx, 10), c = {};
                                    c.requestId = r[s].bidId, d.pub_rev && (c.cpm = Number(d.pub_rev) / 1000, (o = d.creative[0]) && (c.width = o.width, c.height = o.height), c.creativeId = o.id, c.ad = d.html, d.deal_id && (c.dealId = d.deal_id), c.ttl = 300, c.netRevenue = !0, c.currency = d.currency, d.tbd && (c.tbd = d.tbd), c.ts = d.ts, c.meta = {}, d.brand_id && (c.meta.brandId = d.brand_id), d.adomain && 0 < length(d.adomain) ? c.meta.advertiserDomains = d.adomain : c.meta.advertiserDomains = [], d.adv_id && (c.meta.dspid = d.adv_id), a.push(c));
                                }
                                return a;
                            })(r, t.payload);
                        },
                        getUserSyncs: function (e, t, r, n) {
                            if (e.iframeEnabled || e.pixelEnabled)
                                return [{
                                        type: e.iframeEnabled ? 'iframe' : 'image',
                                        url: l.deepAccess(t, '0.body.ads.pixels') || l.deepAccess(t, '0.body.pixels') || function (e, t) {
                                            var r = [];
                                            e && (r.push('gdpr=' + (e.gdprApplies ? 1 : 0)), r.push('gdpr_consent=' + encodeURIComponent(e.consentString || '')));
                                            t && r.push('us_privacy=' + encodeURIComponent(t));
                                            return ''.concat('https://u.openx.net/w/1.0/pd').concat(0 < r.length ? '?' + r.join('&') : '');
                                        }(r, n)
                                    }];
                        },
                        transformBidParams: function (e) {
                            return l.convertTypes({
                                unit: 'string',
                                customFloor: 'number'
                            }, e);
                        }
                    };
                function y(e, t) {
                    var r, n, a, i, o = l.inIframe(), d = {
                            ju: s.b.getConfig('pageUrl') || t.refererInfo.referer,
                            ch: document.charSet || document.characterSet,
                            res: ''.concat(screen.width, 'x').concat(screen.height, 'x').concat(screen.colorDepth),
                            ifr: o,
                            tz: new Date().getTimezoneOffset(),
                            tws: function (e) {
                                var t, r, n, a = window, i = document, o = i.documentElement;
                                if (e) {
                                    try {
                                        a = window.top, i = window.top.document;
                                    } catch (e) {
                                        return;
                                    }
                                    o = i.documentElement, n = i.body, t = a.innerWidth || o.clientWidth || n.clientWidth, r = a.innerHeight || o.clientHeight || n.clientHeight;
                                } else
                                    o = i.documentElement, t = a.innerWidth || o.clientWidth, r = a.innerHeight || o.clientHeight;
                                return ''.concat(t, 'x').concat(r);
                            }(o),
                            be: 1,
                            bc: e[0].params.bc || ''.concat(c, '_').concat(p),
                            dddid: l._map(e, function (e) {
                                return e.transactionId;
                            }).join(','),
                            nocache: new Date().getTime()
                        };
                    return e[0].params.platform && (d.ph = e[0].params.platform), t.gdprConsent && (void 0 !== (r = t.gdprConsent).consentString && (d.gdpr_consent = r.consentString), void 0 !== r.gdprApplies && (d.gdpr = r.gdprApplies ? 1 : 0), 'iab' === s.b.getConfig('consentManagement.cmpApi') && (d.x_gdpr_f = 1)), t && t.uspConsent && (d.us_privacy = t.uspConsent), l.deepAccess(e[0], 'crumbs.pubcid') && l.deepSetValue(e[0], 'userId.pubcid', l.deepAccess(e[0], 'crumbs.pubcid')), n = d, a = e[0].userId, l._each(a, function (e, t) {
                        var r = m[t];
                        if (m.hasOwnProperty(t))
                            switch (t) {
                            case 'uid2':
                                n[r] = e.id;
                                break;
                            case 'lipb':
                                n[r] = e.lipbid;
                                break;
                            case 'parrableId':
                                n[r] = e.eid;
                                break;
                            case 'id5id':
                                n[r] = e.uid;
                                break;
                            default:
                                n[r] = e;
                            }
                    }), d = n, e[0].schain && (d.schain = (i = e[0].schain, ''.concat(i.ver, ',').concat(i.complete, '!').concat(function (e) {
                        var r = [
                            'asi',
                            'sid',
                            'hp',
                            'rid',
                            'name',
                            'domain'
                        ];
                        return e.map(function (t) {
                            return r.map(function (e) {
                                return t[e] || '';
                            }).join(',');
                        }).join('!');
                    }(i.nodes)))), d;
                }
                function g(e, r, t) {
                    var n = [], a = !1;
                    t.forEach(function (e) {
                        var t = function (e, t) {
                            var r = {}, n = s.b.getConfig('currency.adServerCurrency') || u;
                            'function' == typeof e.getFloor && (r = e.getFloor({
                                currency: n,
                                mediaType: t,
                                size: '*'
                            }));
                            var a = r.floor || e.params.customFloor || 0;
                            return Math.round(1000 * a);
                        }(e, r);
                        t ? (n.push(t), a = !0) : n.push(0);
                    }), a && (e.aumfs = n.join(','));
                }
                Object(n.registerBidder)(v);
            }
        }, [523]);
        pbjsChunk([31], {
            541: function (e, r, t) {
                e.exports = t(542);
            },
            542: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), r.resetSyncedStatus = function () {
                    W = 0;
                }, r.resetWurlMap = function () {
                    $ = {};
                }, r.PrebidServer = g;
                var n = t(75), j = t(39), A = t(0), i = t(5), w = t.n(i), C = t(7), O = t(3), E = t(2), k = t(36), x = t(1), s = t(8), _ = t.n(s), o = t(12), P = t.n(o), a = t(543), I = t(4), c = t(11), T = t.n(c);
                function d(r, e) {
                    var t, n = Object.keys(r);
                    return Object.getOwnPropertySymbols && (t = Object.getOwnPropertySymbols(r), e && (t = t.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                    })), n.push.apply(n, t)), n;
                }
                function U(r) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? d(Object(t), !0).forEach(function (e) {
                            B(r, e, t[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : d(Object(t)).forEach(function (e) {
                            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
                        });
                    }
                    return r;
                }
                function B(e, r, t) {
                    return r in e ? Object.defineProperty(e, r, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[r] = t, e;
                }
                function R(e, r) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, r) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var t = [], n = !0, i = !1, s = void 0;
                        try {
                            for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done) && (t.push(o.value), !r || t.length !== r); n = !0);
                        } catch (e) {
                            i = !0, s = e;
                        } finally {
                            try {
                                n || null == a.return || a.return();
                            } finally {
                                if (i)
                                    throw s;
                            }
                        }
                        return t;
                    }(e, r) || function (e, r) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return p(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === t && e.constructor && (t = e.constructor.name);
                        if ('Map' === t || 'Set' === t)
                            return Array.from(e);
                        if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                            return p(e, r);
                    }(e, r) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function p(e, r) {
                    (null == r || r > e.length) && (r = e.length);
                    for (var t = 0, n = new Array(r); t < r; t++)
                        n[t] = e[t];
                    return n;
                }
                function D() {
                    return (D = Object.assign || function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = arguments[r];
                            for (var n in t)
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function V(e) {
                    return (V = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var N, q, z = O.b.getConfig, M = w.a.S2S.SRC, W = 0, u = {
                        timeout: 1000,
                        maxBids: 1,
                        adapter: 'prebidServer',
                        adapterOptions: {},
                        syncUrlModifier: {}
                    };
                function l(i) {
                    if (i) {
                        var e = Array.isArray(i) ? i : [i], s = [];
                        return e.every(function (e, r, t) {
                            var n;
                            if ((n = i, [
                                    'endpoint',
                                    'syncEndpoint'
                                ].forEach(function (e) {
                                    var r;
                                    A.isStr(n[e]) && (r = n[e], n[e] = {
                                        p1Consent: r,
                                        noP1Consent: r
                                    });
                                }), !1 !== function (r) {
                                    if (r.defaultVendor) {
                                        var t = r.defaultVendor, n = Object.keys(r);
                                        if (!a.a[t])
                                            return A.logError('Incorrect or unavailable prebid server default vendor option: ' + t), !1;
                                        Object.keys(a.a[t]).forEach(function (e) {
                                            u[e] !== r[e] && P()(n, e) || (r[e] = a.a[t][e]);
                                        });
                                    }
                                    return r.enabled = 'boolean' == typeof r.enabled && r.enabled;
                                }(e)) && !1 !== function (e) {
                                    var r = Object.keys(e);
                                    if (0 < [
                                            'accountId',
                                            'bidders',
                                            'endpoint'
                                        ].filter(function (e) {
                                            return !P()(r, e) && (A.logError(e + ' missing in server to server config'), !0);
                                        }).length)
                                        return !1;
                                }(e))
                                return Array.isArray(e.bidders) && (t[r].bidders = e.bidders.filter(function (e) {
                                    return -1 === s.indexOf(e) && (s.push(e), !0);
                                })), !0;
                            return A.logWarn('prebidServer: s2s config is disabled'), !1;
                        }) ? N = e : void 0;
                    }
                }
                function J(e, r) {
                    var t;
                    0 !== e.length && ((t = e.shift()).no_cookie ? function (e, r, t, n, i) {
                        {
                            var s;
                            i.syncUrlModifier && 'function' == typeof i.syncUrlModifier[t] ? (s = i.syncUrlModifier[t](e, r, t), b(e, s, t, n)) : b(e, r, t, n);
                        }
                    }(t.usersync.type, t.usersync.url, t.bidder, A.bind.call(J, null, e, r), r) : J(e, r));
                }
                function b(e, r, t, n) {
                    r ? 'image' === e || 'redirect' === e ? (A.logMessage('Invoking image pixel user sync for bidder: "'.concat(t, '"')), A.triggerPixel(r, n)) : 'iframe' == e ? (A.logMessage('Invoking iframe user sync for bidder: "'.concat(t, '"')), A.insertUserSyncIframe(r, n)) : (A.logError('User sync type "'.concat(e, '" not supported for bidder: "').concat(t, '"')), n()) : (A.logError('No sync url for bidder "'.concat(t, '": ').concat(r)), n());
                }
                O.b.setDefaults({ s2sConfig: u }), z('s2sConfig', function (e) {
                    return l(e.s2sConfig);
                });
                var X = {
                        sponsoredBy: 1,
                        body: 2,
                        rating: 3,
                        likes: 4,
                        downloads: 5,
                        price: 6,
                        salePrice: 7,
                        phone: 8,
                        address: 9,
                        body2: 10,
                        cta: 12
                    }, F = Object.keys(X), H = {
                        icon: 1,
                        image: 3
                    }, L = {
                        img: 1,
                        js: 2
                    };
                [
                    X,
                    H,
                    {
                        impression: 1,
                        'viewable-mrc50': 2,
                        'viewable-mrc100': 3,
                        'viewable-video50': 4
                    },
                    L
                ].forEach(function (r) {
                    Object.keys(r).forEach(function (e) {
                        r[r[e]] = e;
                    });
                });
                var K = {}, G = {}, $ = {};
                var Q = {
                    buildRequest: function (e, r, t, g, n) {
                        var y = [], v = {}, m = r[0], h = new Set();
                        if (t.forEach(function (r) {
                                for (var t = r.code, e = 1; h.has(t);)
                                    e++, t = ''.concat(r.code, '-').concat(e);
                                h.add(t);
                                var n, a = Object(k.h)(A.deepAccess(r, 'mediaTypes.native'));
                                if (a)
                                    try {
                                        n = G[t] = Object.keys(a).reduce(function (e, r) {
                                            var t = a[r];
                                            function n(e) {
                                                return D({ required: t.required ? 1 : 0 }, e ? A.cleanObj(e) : {});
                                            }
                                            switch (r) {
                                            case 'image':
                                            case 'icon':
                                                var i = H[r], s = A.cleanObj({
                                                        type: i,
                                                        w: A.deepAccess(t, 'sizes.0'),
                                                        h: A.deepAccess(t, 'sizes.1'),
                                                        wmin: A.deepAccess(t, 'aspect_ratios.0.min_width'),
                                                        hmin: A.deepAccess(t, 'aspect_ratios.0.min_height')
                                                    });
                                                if (!(s.w && s.h || s.hmin && s.wmin))
                                                    throw 'invalid img sizes (must provide sizes or min_height & min_width if using aspect_ratios)';
                                                Array.isArray(t.aspect_ratios) && (s.ext = {
                                                    aspectratios: t.aspect_ratios.map(function (e) {
                                                        return ''.concat(e.ratio_width, ':').concat(e.ratio_height);
                                                    })
                                                }), e.push(n({ img: s }));
                                                break;
                                            case 'title':
                                                if (!t.len)
                                                    throw 'invalid title.len';
                                                e.push(n({ title: { len: t.len } }));
                                                break;
                                            default:
                                                var o = X[r];
                                                o && e.push(n({
                                                    data: {
                                                        type: o,
                                                        len: t.len
                                                    }
                                                }));
                                            }
                                            return e;
                                        }, []);
                                    } catch (e) {
                                        A.logError('error creating native request: ' + String(e));
                                    }
                                var i = A.deepAccess(r, 'mediaTypes.video'), s = A.deepAccess(r, 'mediaTypes.banner');
                                r.bids.forEach(function (e) {
                                    var r;
                                    K[''.concat(t).concat(e.bidder)] = e.bid_id, !C.default.aliasRegistry[e.bidder] || (r = C.default.bidderRegistry[e.bidder]) && !r.getSpec().skipPbsAliasing && (v[e.bidder] = C.default.aliasRegistry[e.bidder]);
                                });
                                var o, c = {};
                                if (s && s.sizes && (o = A.parseSizesInput(s.sizes).map(function (e) {
                                        var r = R(e.split('x'), 2), t = r[0], n = r[1];
                                        return {
                                            w: parseInt(t, 10),
                                            h: parseInt(n, 10)
                                        };
                                    }), c.banner = { format: o }, s.pos && (c.banner.pos = s.pos)), A.isEmpty(i) || ('outstream' !== i.context || i.renderer && r.renderer ? ('instream' !== i.context || i.hasOwnProperty('placement') || (i.placement = 1), c.video = Object.keys(i).filter(function (e) {
                                        return 'context' !== e;
                                    }).reduce(function (e, r) {
                                        return 'playerSize' === r ? (e.w = A.deepAccess(i, ''.concat(r, '.0.0')), e.h = A.deepAccess(i, ''.concat(r, '.0.1'))) : e[r] = i[r], e;
                                    }, {})) : A.logError('Outstream bid without renderer cannot be sent to Prebid Server.')), n)
                                    try {
                                        c.native = {
                                            request: JSON.stringify({
                                                context: 1,
                                                plcmttype: 1,
                                                eventtrackers: [{
                                                        event: 1,
                                                        methods: [1]
                                                    }],
                                                assets: n
                                            }),
                                            ver: '1.2'
                                        };
                                    } catch (e) {
                                        A.logError('error creating native request: ' + String(e));
                                    }
                                var d = r.bids.reduce(function (e, r) {
                                        var t = C.default.bidderRegistry[r.bidder];
                                        return t && t.getSpec().transformBidParams && (r.params = t.getSpec().transformBidParams(r.params, !0)), e[r.bidder] = g.adapterOptions && g.adapterOptions[r.bidder] ? D({}, r.params, g.adapterOptions[r.bidder]) : r.params, e;
                                    }, U({}, A.deepAccess(r, 'ortb2Imp.ext'))), p = {
                                        id: t,
                                        ext: d,
                                        secure: g.secure
                                    }, u = U({}, A.deepAccess(r, 'ortb2Imp.ext.data'));
                                Object.keys(u).forEach(function (e) {
                                    'pbadslot' === e ? 'string' == typeof u[e] && u[e] ? A.deepSetValue(p, 'ext.data.pbadslot', u[e]) : delete p.ext.data.pbadslot : 'adserver' === e ? [
                                        'name',
                                        'adslot'
                                    ].forEach(function (e) {
                                        var r = A.deepAccess(u, 'adserver.'.concat(e));
                                        'string' == typeof r && r && A.deepSetValue(p, 'ext.data.adserver.'.concat(e.toLowerCase()), r);
                                    }) : A.deepSetValue(p, 'ext.data.'.concat(e), u[e]);
                                }), D(p, c);
                                var l = T()(m.bids, function (e) {
                                    return e.adUnitCode === r.code && e.storedAuctionResponse;
                                });
                                l && A.deepSetValue(p, 'ext.prebid.storedauctionresponse.id', l.storedAuctionResponse.toString());
                                var b, f = T()(m.bids, function (e) {
                                        return e.adUnitCode === r.code && 'function' == typeof e.getFloor;
                                    });
                                if (f) {
                                    try {
                                        b = f.getFloor({ currency: O.b.getConfig('currency.adServerCurrency') || 'USD' });
                                    } catch (e) {
                                        A.logError('PBS: getFloor threw an error: ', e);
                                    }
                                    b && b.currency && !isNaN(parseFloat(b.floor)) && (p.bidfloor = parseFloat(b.floor), p.bidfloorcur = b.currency);
                                }
                                (p.banner || p.video || p.native) && y.push(p);
                            }), y.length) {
                            var i = {
                                id: e.tid,
                                source: { tid: e.tid },
                                tmax: g.timeout,
                                imp: y,
                                test: 0,
                                ext: {
                                    prebid: {
                                        auctiontimestamp: m.auctionStart,
                                        targeting: {
                                            includewinners: !0,
                                            includebidderkeys: !1
                                        }
                                    }
                                }
                            };
                            i.ext.prebid = D(i.ext.prebid, {
                                channel: {
                                    name: 'pbjs',
                                    version: pbjs.version
                                }
                            }), z('debug') && (i.ext.prebid = D(i.ext.prebid, { debug: !0 })), g.extPrebid && 'object' === V(g.extPrebid) && (i.ext.prebid = D(i.ext.prebid, g.extPrebid));
                            var s, o, a, c = O.b.getConfig('currency.adServerCurrency');
                            c && 'string' == typeof c ? i.cur = [c] : Array.isArray(c) && c.length && (i.cur = [c[0]]), s = i, o = r[0].refererInfo.referer, a = g.accountId, s && ('object' === V(O.b.getConfig('app')) ? (s.app = O.b.getConfig('app'), s.app.publisher = { id: a }) : (s.site = {}, A.isPlainObject(O.b.getConfig('site')) && (s.site = O.b.getConfig('site')), A.deepAccess(s.site, 'publisher.id') || A.deepSetValue(s.site, 'publisher.id', a), s.site.page || (s.site.page = o)), 'object' === V(O.b.getConfig('device')) && (s.device = O.b.getConfig('device')), s.device || (s.device = {}), s.device.w || (s.device.w = window.innerWidth), s.device.h || (s.device.h = window.innerHeight));
                            var d = A.deepAccess(r, '0.bids.0.schain');
                            d && (i.source.ext = { schain: d }), A.isEmpty(v) || (i.ext.prebid.aliases = U(U({}, i.ext.prebid.aliases), v));
                            var p = A.deepAccess(r, '0.bids.0.userIdAsEids');
                            A.isArray(p) && 0 < p.length && A.deepSetValue(i, 'user.ext.eids', p), A.isArray(q) && 0 < q.length && (n && A.isArray(n) && q.forEach(function (e) {
                                e.bidders && (e.bidders = e.bidders.filter(function (e) {
                                    return n.includes(e);
                                }));
                            }), A.deepSetValue(i, 'ext.prebid.data.eidpermissions', q));
                            var u, l = O.b.getConfig('multibid');
                            l && A.deepSetValue(i, 'ext.prebid.multibid', l.reduce(function (e, r) {
                                var t = {};
                                return Object.keys(r).forEach(function (e) {
                                    t[e.toLowerCase()] = r[e];
                                }), e.push(t), e;
                            }, [])), r && (m.gdprConsent && ('boolean' == typeof m.gdprConsent.gdprApplies && (u = m.gdprConsent.gdprApplies ? 1 : 0), A.deepSetValue(i, 'regs.ext.gdpr', u), A.deepSetValue(i, 'user.ext.consent', m.gdprConsent.consentString), m.gdprConsent.addtlConsent && 'string' == typeof m.gdprConsent.addtlConsent && A.deepSetValue(i, 'user.ext.ConsentedProvidersSettings.consented_providers', m.gdprConsent.addtlConsent)), m.uspConsent && A.deepSetValue(i, 'regs.ext.us_privacy', m.uspConsent)), !0 === z('coppa') && A.deepSetValue(i, 'regs.coppa', 1);
                            var b, f, S, x = z('ortb2') || {};
                            return x.site && A.mergeDeep(i, { site: x.site }), x.user && A.mergeDeep(i, { user: x.user }), b = i, f = O.b.getBidderConfig(), (S = Object.keys(f).reduce(function (e, r) {
                                var t, n = f[r];
                                return n.ortb2 && (t = {}, n.ortb2.site && (t.site = n.ortb2.site), n.ortb2.user && (t.user = n.ortb2.user), e.push({
                                    bidders: [r],
                                    config: { ortb2: t }
                                })), e;
                            }, [])).length && A.deepSetValue(b, 'ext.prebid.bidderconfig', S), i;
                        }
                        A.logError('Request to Prebid Server rejected due to invalid media type(s) in adUnit.');
                    },
                    interpretResponse: function (S, x, C) {
                        var O = [];
                        return [
                            [
                                'errors',
                                'serverErrors'
                            ],
                            [
                                'responsetimemillis',
                                'serverResponseTimeMs'
                            ]
                        ].forEach(function (e) {
                            return t = x, r = S, n = e[0], i = e[1], void ((s = A.deepAccess(r, 'ext.'.concat(n))) && Object.keys(s).forEach(function (r) {
                                var e = T()(t, function (e) {
                                    return e.bidderCode === r;
                                });
                                e && (e[i] = s[r]);
                            }));
                            var t, r, n, i, s;
                        }), S.seatbid && S.seatbid.forEach(function (h) {
                            (h.bid || []).forEach(function (e) {
                                var r, t = ''.concat(e.impid).concat(h.seat);
                                K[t] && (r = A.getBidRequest(K[t], x));
                                var n = e.price, i = 0 !== n ? w.a.STATUS.GOOD : w.a.STATUS.NO_BID, s = Object(j.a)(i, r || {
                                        bidder: h.seat,
                                        src: M
                                    });
                                s.cpm = n;
                                var o = A.deepAccess(S, [
                                    'ext',
                                    'responsetimemillis',
                                    h.seat
                                ].join('.'));
                                r && o && (r.serverResponseTimeMs = o);
                                var a, c, d, p = A.deepAccess(e, 'ext.prebid.bidid');
                                A.isStr(p) && (s.pbsBidId = p), A.isStr(A.deepAccess(e, 'ext.prebid.events.win')) && (a = r.auctionId, c = s.adId, d = A.deepAccess(e, 'ext.prebid.events.win'), [
                                    a,
                                    c
                                ].every(A.isStr) && ($[''.concat(a).concat(c)] = d));
                                var u, l, b, f, g, y = A.deepAccess(e, 'ext.prebid.targeting');
                                A.isPlainObject(y) && (A.isStr(A.deepAccess(e, 'ext.prebid.events.win')) && (y = A.getDefinedParams(y, Object.keys(y).filter(function (e) {
                                    return -1 === e.indexOf('hb_winurl') && -1 === e.indexOf('hb_bidid');
                                }))), s.adserverTargeting = y), s.seatBidId = e.id, A.deepAccess(e, 'ext.prebid.type') === E.d ? (s.mediaType = E.d, u = r.sizes && r.sizes[0], s.playerWidth = u[0], s.playerHeight = u[1], e.ext.prebid.cache && 'object' === V(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (s.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, s.vastUrl = e.ext.prebid.cache.vastXml.url) : y && y.hb_uuid && y.hb_cache_host && y.hb_cache_path && (s.videoCacheKey = y.hb_uuid, s.vastUrl = 'https://'.concat(y.hb_cache_host).concat(y.hb_cache_path, '?uuid=').concat(y.hb_uuid)), e.adm && (s.vastXml = e.adm), !s.vastUrl && e.nurl && (s.vastUrl = e.nurl)) : A.deepAccess(e, 'ext.prebid.type') === E.c ? (s.mediaType = E.c, b = 'string' == typeof e.adm ? s.adm = JSON.parse(e.adm) : s.adm = e.adm, B(l = {}, L.img, b.imptrackers || []), B(l, L.js, b.jstracker ? [b.jstracker] : []), f = l, b.eventtrackers && b.eventtrackers.forEach(function (e) {
                                    switch (e.method) {
                                    case L.img:
                                        f[L.img].push(e.url);
                                        break;
                                    case L.js:
                                        f[L.js].push(e.url);
                                    }
                                }), A.isPlainObject(b) && Array.isArray(b.assets) ? (g = G[e.impid], s.native = A.cleanObj(b.assets.reduce(function (r, t) {
                                    var n = g[t.id];
                                    return A.isPlainObject(t.img) ? r[n.img.type ? H[n.img.type] : 'image'] = A.pick(t.img, [
                                        'url',
                                        'w as width',
                                        'h as height'
                                    ]) : A.isPlainObject(t.title) ? r.title = t.title.text : A.isPlainObject(t.data) && F.forEach(function (e) {
                                        X[e] === n.data.type && (r[e] = t.data.value);
                                    }), r;
                                }, A.cleanObj({
                                    clickUrl: b.link,
                                    clickTrackers: A.deepAccess(b, 'link.clicktrackers'),
                                    impressionTrackers: f[L.img],
                                    javascriptTrackers: f[L.js]
                                })))) : A.logError('prebid server native response contained no assets')) : e.adm && e.nurl ? (s.ad = e.adm, s.ad += A.createTrackPixelHtml(decodeURIComponent(e.nurl))) : e.adm ? s.ad = e.adm : e.nurl && (s.adUrl = e.nurl), s.width = e.w, s.height = e.h, e.dealid && (s.dealId = e.dealid), s.requestId = r.bidId || r.bid_Id, s.creative_id = e.crid, s.creativeId = e.crid, e.burl && (s.burl = e.burl), s.currency = S.cur ? S.cur : 'USD', s.meta = {};
                                var v = A.deepAccess(e, 'ext.prebid.meta');
                                v && A.isPlainObject(v) && (s.meta = A.deepClone(v)), e.adomain && (s.meta.advertiserDomains = e.adomain);
                                var m = C.defaultTtl || 60;
                                s.ttl = e.exp ? e.exp : m, s.netRevenue = !e.netRevenue || e.netRevenue, O.push({
                                    adUnit: r.adUnitCode,
                                    bid: s
                                });
                            });
                        }), O;
                    }
                };
                function f(e) {
                    var r, t, n = function (e, r) {
                            if ([
                                    e,
                                    r
                                ].every(A.isStr))
                                return $[''.concat(e).concat(r)];
                        }(e.auctionId, e.adId);
                    A.isStr(n) && (A.logMessage('Invoking image pixel for wurl on BID_WIN: "'.concat(n, '"')), A.triggerPixel(n), r = e.auctionId, t = e.adId, [
                        r,
                        t
                    ].every(A.isStr) && ($[''.concat(r).concat(t)] = void 0));
                }
                function Y(e, r) {
                    return n = !0, (t = r) && t.gdprApplies && 2 === t.apiVersion && (n = !(!0 !== A.deepAccess(t, 'vendorData.purpose.consents.1'))), n ? e.p1Consent : e.noP1Consent;
                    var t, n;
                }
                function Z(e) {
                    var r, t;
                    return Array.isArray(e) && 0 < e.length && (r = e[0].gdprConsent, t = e[0].uspConsent), {
                        gdprConsent: r,
                        uspConsent: t
                    };
                }
                function g() {
                    var e = new n.a('prebidServer');
                    return e.callBids = function (r, t, n, i, e) {
                        var s, o, a, c, d, p, u, l, b, f, g = A.deepClone(r.ad_units), y = Z(t), v = y.gdprConsent, m = y.uspConsent, h = g.filter(function (e) {
                                return e.mediaTypes && (e.mediaTypes.native || e.mediaTypes.banner && e.mediaTypes.banner.sizes || e.mediaTypes.video && e.mediaTypes.video.playerSize);
                            }), S = h.map(function (e) {
                                return e.bids.map(function (e) {
                                    return e.bidder;
                                }).filter(A.uniques);
                            }).reduce(A.flatten).filter(A.uniques);
                        Array.isArray(N) && (r.s2sConfig && r.s2sConfig.syncEndpoint && Y(r.s2sConfig.syncEndpoint, v) && (s = r.s2sConfig.bidders.map(function (e) {
                            return C.default.aliasRegistry[e] || e;
                        }).filter(function (e, r, t) {
                            return t.indexOf(e) === r;
                        }), c = s, d = v, p = m, u = r.s2sConfig, N.length !== W && (W++, l = {
                            uuid: A.generateUUID(),
                            bidders: c,
                            account: u.accountId
                        }, b = u.userSyncLimit, A.isNumber(b) && 0 < b && (l.limit = b), d && (l.gdpr = d.gdprApplies ? 1 : 0, !1 !== d.gdprApplies && (l.gdpr_consent = d.consentString)), p && (l.us_privacy = p), 'boolean' == typeof u.coopSync && (l.coopSync = u.coopSync), f = JSON.stringify(l), Object(I.a)(Y(u.syncEndpoint, d), function (e) {
                            try {
                                J((e = JSON.parse(e)).bidder_status, u);
                            } catch (e) {
                                A.logError(e);
                            }
                        }, f, {
                            contentType: 'text/plain',
                            withCredentials: !0
                        }))), a = (o = Q.buildRequest(r, t, h, r.s2sConfig, S)) && JSON.stringify(o), A.logInfo('BidRequest: ' + a), o && a && e(Y(r.s2sConfig.endpoint, v), {
                            success: function (e) {
                                return function (e, r, n, i, t, s) {
                                    var o, a = Z(n), c = a.gdprConsent, d = a.uspConsent;
                                    try {
                                        o = JSON.parse(e), Q.interpretResponse(o, n, s).forEach(function (e) {
                                            var r = e.adUnit, t = e.bid;
                                            Object(x.isValid)(r, t, n) && i(r, t);
                                        }), n.forEach(function (e) {
                                            return _.a.emit(w.a.EVENTS.BIDDER_DONE, e);
                                        });
                                    } catch (e) {
                                        A.logError(e);
                                    }
                                    (!o || o.status && P()(o.status, 'Error')) && A.logError('error parsing response: ', o.status);
                                    t(), function (e, t, n) {
                                        e.forEach(function (e) {
                                            var r = C.default.getBidAdapter(e);
                                            r && r.registerSyncs && O.b.runWithBidder(e, A.bind.call(r.registerSyncs, r, [], t, n));
                                        });
                                    }(r, c, d);
                                }(e, S, t, n, i, r.s2sConfig);
                            },
                            error: i
                        }, a, {
                            contentType: 'text/plain',
                            withCredentials: !0
                        }));
                    }, _.a.on(w.a.EVENTS.BID_WON, f), D(this, {
                        callBids: e.callBids,
                        setBidderCode: e.setBidderCode,
                        type: M
                    });
                }
                Object(A.getPrebidInternal)().setEidPermissions = function (e) {
                    q = e;
                }, C.default.registerBidAdapter(new g(), 'prebidServer');
            },
            543: function (e, r, t) {
                'use strict';
                t.d(r, 'a', function () {
                    return n;
                });
                var n = {
                    appnexus: {
                        adapter: 'prebidServer',
                        enabled: !0,
                        endpoint: {
                            p1Consent: 'https://prebid.adnxs.com/pbs/v1/openrtb2/auction',
                            noP1Consent: 'https://prebid.adnxs-simple.com/pbs/v1/openrtb2/auction'
                        },
                        syncEndpoint: {
                            p1Consent: 'https://prebid.adnxs.com/pbs/v1/cookie_sync',
                            noP1Consent: 'https://prebid.adnxs-simple.com/pbs/v1/cookie_sync'
                        },
                        timeout: 1000
                    },
                    rubicon: {
                        adapter: 'prebidServer',
                        enabled: !0,
                        endpoint: {
                            p1Consent: 'https://prebid-server.rubiconproject.com/openrtb2/auction',
                            noP1Consent: 'https://prebid-server.rubiconproject.com/openrtb2/auction'
                        },
                        syncEndpoint: {
                            p1Consent: 'https://prebid-server.rubiconproject.com/cookie_sync',
                            noP1Consent: 'https://prebid-server.rubiconproject.com/cookie_sync'
                        },
                        timeout: 500
                    },
                    openx: {
                        adapter: 'prebidServer',
                        enabled: !0,
                        endpoint: {
                            p1Consent: 'https://prebid.openx.net/openrtb2/auction',
                            noP1Consent: 'https://prebid.openx.net/openrtb2/auction'
                        },
                        syncEndpoint: {
                            p1Consent: 'https://prebid.openx.net/cookie_sync',
                            noP1Consent: 'https://prebid.openx.net/cookie_sync'
                        },
                        timeout: 1000
                    }
                };
            }
        }, [541]);
        pbjsChunk([129], {
            556: function (e, r, a) {
                e.exports = a(557);
            },
            557: function (e, r, a) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), a.d(r, 'spec', function () {
                    return h;
                });
                var w = a(0), t = a(1), O = a(2), T = a(3), i = a(13);
                function S() {
                    return (S = Object.assign || function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var a = arguments[r];
                            for (var t in a)
                                Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function n(r, e) {
                    var a, t = Object.keys(r);
                    return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(r), e && (a = a.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                    })), t.push.apply(t, a)), t;
                }
                function y(i) {
                    for (var e = 1; e < arguments.length; e++) {
                        var s = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? n(Object(s), !0).forEach(function (e) {
                            var r, a, t;
                            r = i, t = s[a = e], a in r ? Object.defineProperty(r, a, {
                                value: t,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[a] = t;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(s)) : n(Object(s)).forEach(function (e) {
                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(s, e));
                        });
                    }
                    return i;
                }
                function D(e) {
                    return (D = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var o = 'pubmatic', P = 'PubMatic: ', R = 'USD', Y = void 0, s = 'https://pubmatic.bbvms.com/r/'.concat('$RENDERER', '.js'), x = {
                        kadpageurl: '',
                        gender: '',
                        yob: '',
                        lat: '',
                        lon: '',
                        wiid: '',
                        profId: '',
                        verId: ''
                    }, d = {
                        NUMBER: 'number',
                        STRING: 'string',
                        BOOLEAN: 'boolean',
                        ARRAY: 'array',
                        OBJECT: 'object'
                    }, p = {
                        mimes: d.ARRAY,
                        minduration: d.NUMBER,
                        maxduration: d.NUMBER,
                        startdelay: d.NUMBER,
                        playbackmethod: d.ARRAY,
                        api: d.ARRAY,
                        protocols: d.ARRAY,
                        w: d.NUMBER,
                        h: d.NUMBER,
                        battr: d.ARRAY,
                        linearity: d.NUMBER,
                        placement: d.NUMBER,
                        minbitrate: d.NUMBER,
                        maxbitrate: d.NUMBER,
                        skip: d.NUMBER
                    }, E = {
                        TITLE: {
                            ID: 1,
                            KEY: 'title',
                            TYPE: 0
                        },
                        IMAGE: {
                            ID: 2,
                            KEY: 'image',
                            TYPE: 0
                        },
                        ICON: {
                            ID: 3,
                            KEY: 'icon',
                            TYPE: 0
                        },
                        SPONSOREDBY: {
                            ID: 4,
                            KEY: 'sponsoredBy',
                            TYPE: 1
                        },
                        BODY: {
                            ID: 5,
                            KEY: 'body',
                            TYPE: 2
                        },
                        CLICKURL: {
                            ID: 6,
                            KEY: 'clickUrl',
                            TYPE: 0
                        },
                        VIDEO: {
                            ID: 7,
                            KEY: 'video',
                            TYPE: 0
                        },
                        EXT: {
                            ID: 8,
                            KEY: 'ext',
                            TYPE: 0
                        },
                        DATA: {
                            ID: 9,
                            KEY: 'data',
                            TYPE: 0
                        },
                        LOGO: {
                            ID: 10,
                            KEY: 'logo',
                            TYPE: 0
                        },
                        SPONSORED: {
                            ID: 11,
                            KEY: 'sponsored',
                            TYPE: 1
                        },
                        DESC: {
                            ID: 12,
                            KEY: 'data',
                            TYPE: 2
                        },
                        RATING: {
                            ID: 13,
                            KEY: 'rating',
                            TYPE: 3
                        },
                        LIKES: {
                            ID: 14,
                            KEY: 'likes',
                            TYPE: 4
                        },
                        DOWNLOADS: {
                            ID: 15,
                            KEY: 'downloads',
                            TYPE: 5
                        },
                        PRICE: {
                            ID: 16,
                            KEY: 'price',
                            TYPE: 6
                        },
                        SALEPRICE: {
                            ID: 17,
                            KEY: 'saleprice',
                            TYPE: 7
                        },
                        PHONE: {
                            ID: 18,
                            KEY: 'phone',
                            TYPE: 8
                        },
                        ADDRESS: {
                            ID: 19,
                            KEY: 'address',
                            TYPE: 9
                        },
                        DESC2: {
                            ID: 20,
                            KEY: 'desc2',
                            TYPE: 10
                        },
                        DISPLAYURL: {
                            ID: 21,
                            KEY: 'displayurl',
                            TYPE: 11
                        },
                        CTA: {
                            ID: 22,
                            KEY: 'cta',
                            TYPE: 12
                        }
                    }, v = {
                        ICON: 1,
                        LOGO: 2,
                        IMAGE: 3
                    }, I = [
                        {
                            id: E.SPONSOREDBY.ID,
                            required: !0,
                            data: { type: 1 }
                        },
                        {
                            id: E.TITLE.ID,
                            required: !0
                        },
                        {
                            id: E.IMAGE.ID,
                            required: !0
                        }
                    ], c = {
                        1: 'PMP',
                        5: 'PREF',
                        6: 'PMPG'
                    }, A = {
                        EID: 1,
                        SEGMENT: 2
                    }, l = {
                        bootstrapPlayer: function (e) {
                            var r = { code: e.adUnitCode };
                            if (e.vastXml ? r.vastXml = e.vastXml : e.vastUrl && (r.vastUrl = e.vastUrl), e.vastXml || e.vastUrl) {
                                for (var a, t = l.getRendererId('pubmatic', e.rendererCode), i = document.getElementById(e.adUnitCode), s = 0; s < window.bluebillywig.renderers.length; s++)
                                    if (window.bluebillywig.renderers[s]._id === t) {
                                        a = window.bluebillywig.renderers[s];
                                        break;
                                    }
                                a ? a.bootstrap(r, i) : w.logWarn(''.concat(P, ': Couldn\'t find a renderer with ').concat(t));
                            } else
                                w.logWarn(''.concat(P, ': No vastXml or vastUrl on bid, bailing...'));
                        },
                        newRenderer: function (e, r) {
                            var a = s.replace('$RENDERER', e), t = i.a.install({
                                    url: a,
                                    loaded: !1,
                                    adUnitCode: r
                                });
                            try {
                                t.setRender(l.outstreamRender);
                            } catch (e) {
                                w.logWarn(''.concat(P, ': Error tying to setRender on renderer'), e);
                            }
                            return t;
                        },
                        outstreamRender: function (e) {
                            e.renderer.push(function () {
                                l.bootstrapPlayer(e);
                            });
                        },
                        getRendererId: function (e, r) {
                            return ''.concat(e, '-').concat(r);
                        }
                    }, u = [
                        O.b,
                        O.d,
                        O.c
                    ], N = 0, C = !1, m = {}, k = {};
                function U(e, r) {
                    if (!w.isStr(r))
                        return r && w.logWarn(P + 'Ignoring param key: ' + e + ', expects string-value, found ' + D(r)), Y;
                    switch (e) {
                    case 'pmzoneid':
                        return r.split(',').slice(0, 50).map(function (e) {
                            return e.trim();
                        }).join();
                    case 'kadfloor':
                    case 'lat':
                    case 'lon':
                        return parseFloat(r) || Y;
                    case 'yob':
                        return parseInt(r) || Y;
                    default:
                        return r;
                    }
                }
                function z(e) {
                    var r;
                    e.params.adUnit = '', e.params.adUnitIndex = '0', e.params.width = 0, e.params.height = 0, e.params.adSlot = (r = e.params.adSlot, w.isStr(r) ? r.replace(/^\s+/g, '').replace(/\s+$/g, '') : (r && w.logWarn(o + ': adSlot must be a string. Ignoring adSlot'), ''));
                    var a = (t = e.params.adSlot).split(':'), t = a[0];
                    if (2 == a.length && (e.params.adUnitIndex = a[1]), a = t.split('@'), e.params.adUnit = a[0], 1 < a.length) {
                        if (2 != (a = a[1].split('x')).length)
                            return void w.logWarn(P + 'AdSlot Error: adSlot not in required format');
                        e.params.width = parseInt(a[0], 10), e.params.height = parseInt(a[1], 10);
                    } else if (e.hasOwnProperty('mediaTypes') && e.mediaTypes.hasOwnProperty(O.b) && e.mediaTypes.banner.hasOwnProperty('sizes')) {
                        for (var i = 0, s = []; i < e.mediaTypes.banner.sizes.length; i++)
                            2 === e.mediaTypes.banner.sizes[i].length && s.push(e.mediaTypes.banner.sizes[i]);
                        e.mediaTypes.banner.sizes = s, 1 <= e.mediaTypes.banner.sizes.length && (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1));
                    }
                }
                function K(e) {
                    var r, a = w.mergeDeep(w.deepAccess(e.mediaTypes, 'video'), e.params.video);
                    if (a !== Y) {
                        for (var t in (r = {}, p))
                            a.hasOwnProperty(t) && (r[t] = function (e, r, a) {
                                var t, i = 'Ignoring param key: ' + e + ', expects ' + a + ', found ' + D(r);
                                switch (a) {
                                case d.BOOLEAN:
                                    t = w.isBoolean;
                                    break;
                                case d.NUMBER:
                                    t = w.isNumber;
                                    break;
                                case d.STRING:
                                    t = w.isStr;
                                    break;
                                case d.ARRAY:
                                    t = w.isArray;
                                }
                                return t(r) ? r : (w.logWarn(P + i), Y);
                            }(t, a[t], p[t]));
                        w.isArray(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : w.isNumber(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[1], 10));
                    } else
                        r = Y, w.logWarn(P + 'Error: Video config params missing for adunit: ' + e.params.adUnit + ' with mediaType set as video. Ignoring video impression in the adunit.');
                    return r;
                }
                function L(e) {
                    var r, a, t, i, s, n, o, d, p, c, l, u, m = {}, g = {}, h = e.hasOwnProperty('sizes') ? e.sizes : [], b = '', f = [], m = {
                            id: e.bidId,
                            tagid: e.params.adUnit || void 0,
                            bidfloor: U('kadfloor', e.params.kadfloor),
                            secure: 1,
                            ext: { pmZoneId: U('pmzoneid', e.params.pmzoneid) },
                            bidfloorcur: e.params.currency ? U('currency', e.params.currency) : R
                        };
                    if (t = m, (i = e).params.deals && (w.isArray(i.params.deals) ? i.params.deals.forEach(function (e) {
                            w.isStr(e) && 3 < e.length ? (t.pmp || (t.pmp = {
                                private_auction: 0,
                                deals: []
                            }), t.pmp.deals.push({ id: e })) : w.logWarn(P + 'Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: ' + e);
                        }) : w.logWarn(P + 'Error: bid.params.deals should be an array of strings.')), s = m, p = '', (n = e).params.dctr && (p = n.params.dctr, w.isStr(p) && 0 < p.length ? (d = p.split('|'), p = '', d.forEach(function (e) {
                            p += 0 < e.length ? e.trim() + '|' : '';
                        }), o = p.length, '|' === p.substring(o, o - 1) && (p = p.substring(0, o - 1)), s.ext.key_val = p.trim()) : w.logWarn(P + 'Ignoring param : dctr with value : ' + p + ', expects string-value, found empty or non-string value')), e.hasOwnProperty('mediaTypes'))
                        for (b in e.mediaTypes)
                            switch (b) {
                            case O.b:
                                (r = function (e) {
                                    var r, a = e.mediaTypes.banner.sizes, t = [];
                                    if (a !== Y && w.isArray(a)) {
                                        if (r = {}, e.params.width || e.params.height)
                                            r.w = e.params.width, r.h = e.params.height;
                                        else {
                                            if (0 === a.length)
                                                return r = Y, w.logWarn(P + 'Error: mediaTypes.banner.size missing for adunit: ' + e.params.adUnit + '. Ignoring the banner impression in the adunit.'), r;
                                            r.w = parseInt(a[0][0], 10), r.h = parseInt(a[0][1], 10), a = a.splice(1, a.length - 1);
                                        }
                                        0 < a.length && (t = [], a.forEach(function (e) {
                                            1 < e.length && t.push({
                                                w: e[0],
                                                h: e[1]
                                            });
                                        }), 0 < t.length && (r.format = t)), r.pos = 0, r.topframe = w.inIframe() ? 0 : 1;
                                    } else
                                        w.logWarn(P + 'Error: mediaTypes.banner.size missing for adunit: ' + e.params.adUnit + '. Ignoring the banner impression in the adunit.'), r = Y;
                                    return r;
                                }(e)) !== Y && (m.banner = r);
                                break;
                            case O.c:
                                g.request = JSON.stringify(function (e) {
                                    var r, a, t, i = { assets: [] };
                                    for (var s in e) {
                                        if (e.hasOwnProperty(s)) {
                                            var n = {};
                                            if (!(i.assets && 0 < i.assets.length && i.assets.hasOwnProperty(s)))
                                                switch (s) {
                                                case E.TITLE.KEY:
                                                    e[s].len || e[s].length ? n = {
                                                        id: E.TITLE.ID,
                                                        required: e[s].required ? 1 : 0,
                                                        title: {
                                                            len: e[s].len || e[s].length,
                                                            ext: e[s].ext
                                                        }
                                                    } : w.logWarn(P + 'Error: Title Length is required for native ad: ' + JSON.stringify(e));
                                                    break;
                                                case E.IMAGE.KEY:
                                                    e[s].sizes && 0 < e[s].sizes.length ? n = {
                                                        id: E.IMAGE.ID,
                                                        required: e[s].required ? 1 : 0,
                                                        img: {
                                                            type: v.IMAGE,
                                                            w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : Y),
                                                            h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : Y),
                                                            wmin: e[s].wmin || e[s].minimumWidth || (e[s].minsizes ? e[s].minsizes[0] : Y),
                                                            hmin: e[s].hmin || e[s].minimumHeight || (e[s].minsizes ? e[s].minsizes[1] : Y),
                                                            mimes: e[s].mimes,
                                                            ext: e[s].ext
                                                        }
                                                    } : w.logWarn(P + 'Error: Image sizes is required for native ad: ' + JSON.stringify(e));
                                                    break;
                                                case E.ICON.KEY:
                                                    e[s].sizes && 0 < e[s].sizes.length ? n = {
                                                        id: E.ICON.ID,
                                                        required: e[s].required ? 1 : 0,
                                                        img: {
                                                            type: v.ICON,
                                                            w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : Y),
                                                            h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : Y)
                                                        }
                                                    } : w.logWarn(P + 'Error: Icon sizes is required for native ad: ' + JSON.stringify(e));
                                                    break;
                                                case E.VIDEO.KEY:
                                                    n = {
                                                        id: E.VIDEO.ID,
                                                        required: e[s].required ? 1 : 0,
                                                        video: {
                                                            minduration: e[s].minduration,
                                                            maxduration: e[s].maxduration,
                                                            protocols: e[s].protocols,
                                                            mimes: e[s].mimes,
                                                            ext: e[s].ext
                                                        }
                                                    };
                                                    break;
                                                case E.EXT.KEY:
                                                    n = {
                                                        id: E.EXT.ID,
                                                        required: e[s].required ? 1 : 0
                                                    };
                                                    break;
                                                case E.LOGO.KEY:
                                                    n = {
                                                        id: E.LOGO.ID,
                                                        required: e[s].required ? 1 : 0,
                                                        img: {
                                                            type: v.LOGO,
                                                            w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : Y),
                                                            h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : Y)
                                                        }
                                                    };
                                                    break;
                                                case E.SPONSOREDBY.KEY:
                                                case E.BODY.KEY:
                                                case E.RATING.KEY:
                                                case E.LIKES.KEY:
                                                case E.DOWNLOADS.KEY:
                                                case E.PRICE.KEY:
                                                case E.SALEPRICE.KEY:
                                                case E.PHONE.KEY:
                                                case E.ADDRESS.KEY:
                                                case E.DESC2.KEY:
                                                case E.DISPLAYURL.KEY:
                                                case E.CTA.KEY:
                                                    r = k[s], a = e, t = void 0, t = r.KEY, n = {
                                                        id: r.ID,
                                                        required: a[t].required ? 1 : 0,
                                                        data: {
                                                            type: r.TYPE,
                                                            len: a[t].len,
                                                            ext: a[t].ext
                                                        }
                                                    };
                                                }
                                        }
                                        n && n.id && (i.assets[i.assets.length] = n);
                                    }
                                    var o = I.length, d = 0;
                                    return I.forEach(function (e) {
                                        for (var r = i.assets.length, a = 0; a < r; a++)
                                            if (e.id == i.assets[a].id) {
                                                d++;
                                                break;
                                            }
                                    }), C = o != d, i;
                                }(e.nativeParams)), C ? w.logWarn(P + 'Error: Error in Native adunit ' + e.params.adUnit + '. Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.') : m.native = g;
                                break;
                            case O.d:
                                (a = K(e)) !== Y && (m.video = a);
                            }
                    else
                        r = {
                            pos: 0,
                            w: e.params.width,
                            h: e.params.height,
                            topframe: w.inIframe() ? 0 : 1
                        }, w.isArray(h) && 1 < h.length && ((h = h.splice(1, h.length - 1)).forEach(function (e) {
                            f.push({
                                w: e[0],
                                h: e[1]
                            });
                        }), r.format = f), m.banner = r;
                    return c = m, l = e, u = y({}, w.deepAccess(l, 'ortb2Imp.ext.data')), Object.keys(u).forEach(function (e) {
                        'pbadslot' === e ? 'string' == typeof u[e] && u[e] && w.deepSetValue(c, 'ext.data.pbadslot', u[e]) : 'adserver' === e ? [
                            'name',
                            'adslot'
                        ].forEach(function (e) {
                            var r = w.deepAccess(u, 'adserver.'.concat(e));
                            'string' == typeof r && r && (w.deepSetValue(c, 'ext.data.adserver.'.concat(e.toLowerCase()), r), 'adslot' === e && w.deepSetValue(c, 'ext.dfp_ad_unit_code', r));
                        }) : w.deepSetValue(c, 'ext.data.'.concat(e), u[e]);
                    }), function (t, i) {
                        var s = -1;
                        'function' != typeof i.getFloor || T.b.getConfig('pubmatic.disableFloors') || [
                            O.b,
                            O.d,
                            O.c
                        ].forEach(function (e) {
                            var r, a;
                            t.hasOwnProperty(e) && ('object' !== D(r = i.getFloor({
                                currency: t.bidfloorcur,
                                mediaType: e,
                                size: '*'
                            })) || r.currency !== t.bidfloorcur || isNaN(parseInt(r.floor)) || (a = parseFloat(r.floor), s = -1 == s ? a : Math.min(a, s)));
                        });
                        t.bidfloor && (s = Math.max(s, t.bidfloor));
                        t.bidfloor = !isNaN(s) && 0 < s ? s : Y;
                    }(m, e), m.hasOwnProperty(O.b) || m.hasOwnProperty(O.c) || m.hasOwnProperty(O.d) ? m : Y;
                }
                function q(e, r) {
                    var a = null, t = w.deepAccess(e, '0.userId.flocId');
                    if (t && t.id)
                        switch (r) {
                        case A.SEGMENT:
                            a = {
                                id: 'FLOC',
                                name: 'FLOC',
                                ext: { ver: t.version },
                                segment: [{
                                        id: t.id,
                                        name: 'chrome.com',
                                        value: t.id.toString()
                                    }]
                            };
                            break;
                        case A.EID:
                        default:
                            a = {
                                source: 'chrome.com',
                                uids: [{
                                        atype: 1,
                                        id: t.id,
                                        ext: { ver: t.version }
                                    }]
                            };
                        }
                    return a;
                }
                function g(e) {
                    return !0 === w.isArray(e) && 0 < e.length;
                }
                w._each(E, function (e) {
                    m[e.ID] = e.KEY;
                }), w._each(E, function (e) {
                    k[e.KEY] = e;
                });
                var h = {
                    code: o,
                    gvlid: 76,
                    supportedMediaTypes: [
                        O.b,
                        O.d,
                        O.c
                    ],
                    isBidRequestValid: function (e) {
                        if (e && e.params) {
                            if (!w.isStr(e.params.publisherId))
                                return w.logWarn(P + 'Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: ' + JSON.stringify(e)), !1;
                            if (e.hasOwnProperty('mediaTypes') && e.mediaTypes.hasOwnProperty(O.d)) {
                                var r = w.deepAccess(e.mediaTypes, 'video.mimes'), a = w.deepAccess(e, 'params.video.mimes');
                                if (!1 === g(r) && !1 === g(a))
                                    return w.logWarn(P + 'Error: For video ads, bid.mediaTypes.video.mimes OR bid.params.video.mimes should be present and must be a non-empty array. Call to OpenBid will not be sent for ad unit:' + JSON.stringify(e)), !1;
                                if (!e.mediaTypes[O.d].hasOwnProperty('context'))
                                    return w.logError(''.concat(P, ': no context specified in bid. Rejecting bid: '), e), !1;
                                if ('outstream' === e.mediaTypes[O.d].context && !w.isStr(e.params.outstreamAU) && !e.hasOwnProperty('renderer') && !e.mediaTypes[O.d].hasOwnProperty('renderer'))
                                    return w.logError(''.concat(P, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '), e), !1;
                            }
                            return !0;
                        }
                        return !1;
                    },
                    buildRequests: function (e, r) {
                        var a;
                        r && r.refererInfo && (a = r.refererInfo);
                        var t, i, s, n, o, d, p, c, l, u, m, g, h, b = {
                                pageURL: (t = a) && t.referer ? t.referer : window.location.href,
                                refURL: window.document.referrer
                            }, f = (i = b, {
                                id: '' + new Date().getTime(),
                                at: 1,
                                cur: [R],
                                imp: [],
                                site: {
                                    page: i.pageURL,
                                    ref: i.refURL,
                                    publisher: {}
                                },
                                device: {
                                    ua: navigator.userAgent,
                                    js: 1,
                                    dnt: 'yes' == navigator.doNotTrack || '1' == navigator.doNotTrack || '1' == navigator.msDoNotTrack ? 1 : 0,
                                    h: screen.height,
                                    w: screen.width,
                                    language: navigator.language
                                },
                                user: {},
                                ext: {}
                            }), y = '', E = [], v = [];
                        if (e.forEach(function (e) {
                                var r;
                                (s = w.deepClone(e)).params.adSlot = s.params.adSlot || '', z(s), s.params.hasOwnProperty('video') || s.hasOwnProperty('mediaTypes') && s.mediaTypes.hasOwnProperty(O.c) || 0 !== s.params.width || 0 !== s.params.height ? (b.pubId = b.pubId || s.params.publisherId, (b = function (e, r) {
                                    var a, t, i;
                                    for (a in (r.kadpageurl || (r.kadpageurl = r.pageURL), x))
                                        x.hasOwnProperty(a) && (t = e[a]) && ('object' === D(i = x[a]) && (t = i.f(t, r)), w.isStr(t) ? r[a] = t : w.logWarn(P + 'Ignoring param : ' + a + ' with value : ' + x[a] + ', expects string-value, found ' + D(t)));
                                    return r;
                                }(s.params, b)).transactionId = s.transactionId, '' === y ? y = s.params.currency || Y : s.params.hasOwnProperty('currency') && y !== s.params.currency && w.logWarn(P + 'Currency specifier ignored. Only one currency permitted.'), s.params.currency = y, s.params.hasOwnProperty('dctr') && w.isStr(s.params.dctr) && E.push(s.params.dctr), s.params.hasOwnProperty('bcat') && w.isArray(s.params.bcat) && (v = v.concat(s.params.bcat)), (r = L(s)) && f.imp.push(r)) : w.logWarn(P + 'Skipping the non-standard adslot: ', s.params.adSlot, JSON.stringify(s));
                            }), 0 != f.imp.length) {
                            f.site.publisher.id = b.pubId.trim(), N = b.pubId.trim(), f.ext.wrapper = {}, f.ext.wrapper.profile = parseInt(b.profId) || Y, f.ext.wrapper.version = parseInt(b.verId) || Y, f.ext.wrapper.wiid = b.wiid || r.auctionId, f.ext.wrapper.wv = 'prebid_prebid_5.1.0', f.ext.wrapper.transactionId = b.transactionId, f.ext.wrapper.wp = 'pbjs', f.user.gender = b.gender ? b.gender.trim() : Y, f.user.geo = {}, f.user.geo.lat = U('lat', b.lat), f.user.geo.lon = U('lon', b.lon), f.user.yob = U('yob', b.yob), f.device.geo = f.user.geo, f.site.page = b.kadpageurl.trim() || f.site.page.trim(), f.site.domain = (n = f.site.page, (o = document.createElement('a')).href = n, o.hostname), 'object' === D(T.b.getConfig('content')) && (f.site.content = T.b.getConfig('content')), 'object' === D(T.b.getConfig('device')) && (f.device = S(f.device, T.b.getConfig('device'))), w.deepSetValue(f, 'source.tid', b.transactionId), -1 !== window.location.href.indexOf('pubmaticTest=true') && (f.test = 1), e[0].schain && w.deepSetValue(f, 'source.ext.schain', e[0].schain), r && r.gdprConsent && (w.deepSetValue(f, 'user.ext.consent', r.gdprConsent.consentString), w.deepSetValue(f, 'regs.ext.gdpr', r.gdprConsent.gdprApplies ? 1 : 0)), r && r.uspConsent && w.deepSetValue(f, 'regs.ext.us_privacy', r.uspConsent), !0 === T.b.getConfig('coppa') && w.deepSetValue(f, 'regs.coppa', 1), d = f, p = e, c = w.deepAccess(p, '0.userIdAsEids'), (l = q(p, A.EID)) && (c = c || []).push(l), w.isArray(c) && 0 < c.length && w.deepSetValue(d, 'user.eids', c), u = f, 0 < (m = (m = v).filter(function (e) {
                                return 'string' == typeof e || (w.logWarn(P + 'bcat: Each category should be a string, ignoring category: ' + e), !1);
                            }).map(function (e) {
                                return e.trim();
                            }).filter(function (e, r, a) {
                                return 3 < e.length ? a.indexOf(e) === r : void w.logWarn(P + 'bcat: Each category should have a value of a length of more than 3 characters, ignoring category: ' + e);
                            })).length && (w.logWarn(P + 'bcat: Selected: ', m), u.bcat = m), g = f, (h = q(e, A.SEGMENT)) && (g.user || (g.user = {}), g.user.data || (g.user.data = []), g.user.data.push(h));
                            var I = T.b.getConfig('ortb2') || {};
                            return I.site && w.mergeDeep(f, { site: I.site }), I.user && w.mergeDeep(f, { user: I.user }), 'object' === D(T.b.getConfig('app')) && (f.app = T.b.getConfig('app'), f.app.publisher = f.site.publisher, f.app.ext = f.site.ext || Y, 'object' !== D(f.app.content) && (f.app.content = f.site.content || Y), delete f.site), {
                                method: 'POST',
                                url: 'https://hbopenbid.pubmatic.com/translator?source=prebid-client',
                                data: JSON.stringify(f),
                                bidderRequest: r
                            };
                        }
                    },
                    interpretResponse: function (e, t) {
                        var i = [], s = R, n = JSON.parse(t.data), o = n.site && n.site.ref ? n.site.ref : '';
                        try {
                            e.body && e.body.seatbid && w.isArray(e.body.seatbid) && (s = e.body.cur || s, e.body.seatbid.forEach(function (e) {
                                e.bid && w.isArray(e.bid) && e.bid.forEach(function (r) {
                                    var a = {
                                        requestId: r.impid,
                                        cpm: (parseFloat(r.price) || 0).toFixed(2),
                                        width: r.w,
                                        height: r.h,
                                        creativeId: r.crid || r.id,
                                        dealId: r.dealid,
                                        currency: s,
                                        netRevenue: !0,
                                        ttl: 300,
                                        referrer: o,
                                        ad: r.adm,
                                        pm_seat: e.seat || null,
                                        pm_dspid: r.ext && r.ext.dspid ? r.ext.dspid : null,
                                        partnerImpId: r.id || ''
                                    };
                                    n.imp && 0 < n.imp.length && n.imp.forEach(function (e) {
                                        if (r.impid === e.id)
                                            switch (!function (e, r) {
                                                    if (e.ext && null != e.ext.BidType)
                                                        r.mediaType = u[e.ext.BidType];
                                                    else {
                                                        w.logInfo(P + 'bid.ext.BidType does not exist, checking alternatively for mediaType');
                                                        var a, t = e.adm, i = new RegExp(/VAST\s+version/);
                                                        if (0 <= t.indexOf('span class="PubAPIAd"'))
                                                            r.mediaType = O.b;
                                                        else if (i.test(t))
                                                            r.mediaType = O.d;
                                                        else
                                                            try {
                                                                (a = JSON.parse(t.replace(/\\/g, ''))) && a.native && (r.mediaType = O.c);
                                                            } catch (e) {
                                                                w.logWarn(P + 'Error: Cannot parse native reponse for ad response: ' + t);
                                                            }
                                                    }
                                                }(r, a), a.mediaType) {
                                            case O.b:
                                                break;
                                            case O.d:
                                                a.width = r.hasOwnProperty('w') ? r.w : e.video.w, a.height = r.hasOwnProperty('h') ? r.h : e.video.h, a.vastXml = r.adm, function (e, r) {
                                                    var a, t, i;
                                                    if (r.bidderRequest && r.bidderRequest.bids) {
                                                        for (var s = 0; s < r.bidderRequest.bids.length; s++)
                                                            r.bidderRequest.bids[s].bidId === e.requestId && (a = r.bidderRequest.bids[s].params, t = r.bidderRequest.bids[s].mediaTypes[O.d].context, i = r.bidderRequest.bids[s].adUnitCode);
                                                        t && 'outstream' === t && a && a.outstreamAU && i && (e.rendererCode = a.outstreamAU, e.renderer = l.newRenderer(e.rendererCode, i));
                                                    }
                                                }(a, t);
                                                break;
                                            case O.c:
                                                !function (e, r) {
                                                    if (r.native = {}, e.hasOwnProperty('adm')) {
                                                        var a = '';
                                                        try {
                                                            a = JSON.parse(e.adm.replace(/\\/g, ''));
                                                        } catch (e) {
                                                            return w.logWarn(P + 'Error: Cannot parse native reponse for ad response: ' + r.adm);
                                                        }
                                                        if (a && a.native && a.native.assets && 0 < a.native.assets.length) {
                                                            r.mediaType = O.c;
                                                            for (var t = 0, i = a.native.assets.length; t < i; t++)
                                                                switch (a.native.assets[t].id) {
                                                                case E.TITLE.ID:
                                                                    r.native.title = a.native.assets[t].title && a.native.assets[t].title.text;
                                                                    break;
                                                                case E.IMAGE.ID:
                                                                    r.native.image = {
                                                                        url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                                        height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                                        width: a.native.assets[t].img && a.native.assets[t].img.w
                                                                    };
                                                                    break;
                                                                case E.ICON.ID:
                                                                    r.native.icon = {
                                                                        url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                                        height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                                        width: a.native.assets[t].img && a.native.assets[t].img.w
                                                                    };
                                                                    break;
                                                                case E.SPONSOREDBY.ID:
                                                                case E.BODY.ID:
                                                                case E.LIKES.ID:
                                                                case E.DOWNLOADS.ID:
                                                                case E.PRICE:
                                                                case E.SALEPRICE.ID:
                                                                case E.PHONE.ID:
                                                                case E.ADDRESS.ID:
                                                                case E.DESC2.ID:
                                                                case E.CTA.ID:
                                                                case E.RATING.ID:
                                                                case E.DISPLAYURL.ID:
                                                                    r.native[m[a.native.assets[t].id]] = a.native.assets[t].data && a.native.assets[t].data.value;
                                                                }
                                                            r.native.clickUrl = a.native.link && a.native.link.url, r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [], r.native.impressionTrackers = a.native.imptrackers || [], r.native.jstracker = a.native.jstracker || [], r.width || (r.width = 0), r.height || (r.height = 0);
                                                        }
                                                    }
                                                }(r, a);
                                            }
                                    }), r.ext && r.ext.deal_channel && (a.dealChannel = c[r.ext.deal_channel] || null), a.meta = {}, r.ext && r.ext.dspid && (a.meta.networkId = r.ext.dspid), r.ext && r.ext.advid && (a.meta.buyerId = r.ext.advid), r.adomain && 0 < r.adomain.length && (a.meta.advertiserDomains = r.adomain, a.meta.clickUrl = r.adomain[0]), e.ext && e.ext.buyid && (a.adserverTargeting = { hb_buyid_pubmatic: e.ext.buyid }), i.push(a);
                                });
                            }));
                        } catch (e) {
                            w.logError(e);
                        }
                        return i;
                    },
                    getUserSyncs: function (e, r, a, t) {
                        var i = '' + N;
                        return a && (i += '&gdpr=' + (a.gdprApplies ? 1 : 0), i += '&gdpr_consent=' + encodeURIComponent(a.consentString || '')), t && (i += '&us_privacy=' + encodeURIComponent(t)), !0 === T.b.getConfig('coppa') && (i += '&coppa=1'), e.iframeEnabled ? [{
                                type: 'iframe',
                                url: 'https://ads.pubmatic.com/AdServer/js/user_sync.html?kdntuid=1&p=' + i
                            }] : [{
                                type: 'image',
                                url: 'https://image8.pubmatic.com/AdServer/ImgSync?p=' + i
                            }];
                    },
                    transformBidParams: function (e) {
                        return w.convertTypes({
                            publisherId: 'string',
                            adSlot: 'string'
                        }, e);
                    }
                };
                Object(t.registerBidder)(h);
            }
        }, [556]);
        pbjsChunk([115], {
            598: function (e, r, n) {
                e.exports = n(599);
            },
            599: function (e, r, n) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), n.d(r, 'spec', function () {
                    return s;
                });
                var i = n(1), o = n(3), a = n(2), d = n(0), t = n(13), c = '', s = {
                        code: 'richaudience',
                        gvlid: 108,
                        aliases: ['ra'],
                        supportedMediaTypes: [
                            a.b,
                            a.d
                        ],
                        isBidRequestValid: function (e) {
                            return !!(e.params && e.params.pid && e.params.supplyType);
                        },
                        buildRequests: function (e, n) {
                            return e.map(function (e) {
                                var r = {
                                    bidfloor: function (e, r) {
                                        try {
                                            var n, i;
                                            return null != e.params.bidfloor ? n = e.params.bidfloor : 'function' == typeof e.getFloor && (i = e.getFloor({
                                                currency: r.getConfig('currency.adServerCurrency'),
                                                mediaType: e.mediaType.banner ? 'banner' : 'video',
                                                size: '*'
                                            }), n = i.floor), n;
                                        } catch (e) {
                                            return 0;
                                        }
                                    }(e, o.b),
                                    ifa: e.params.ifa,
                                    pid: e.params.pid,
                                    supplyType: e.params.supplyType,
                                    currencyCode: o.b.getConfig('currency.adServerCurrency'),
                                    auctionId: e.auctionId,
                                    bidId: e.bidId,
                                    BidRequestsCount: e.bidRequestsCount,
                                    bidder: e.bidder,
                                    bidderRequestId: e.bidderRequestId,
                                    tagId: e.adUnitCode,
                                    sizes: function (e) {
                                        var r;
                                        e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes && (r = e.mediaTypes.banner.sizes);
                                        if (null != r)
                                            return r.map(function (e) {
                                                return {
                                                    w: e[0],
                                                    h: e[1]
                                                };
                                            });
                                    }(e),
                                    referer: void 0 !== n.refererInfo.referer ? encodeURIComponent(n.refererInfo.referer) : null,
                                    numIframes: void 0 !== n.refererInfo.numIframes ? n.refererInfo.numIframes : null,
                                    transactionId: e.transactionId,
                                    timeout: o.b.getConfig('bidderTimeout'),
                                    user: function (e) {
                                        var r = [];
                                        e && e.userId && (p(0, r, 'id5-sync.com', d.deepAccess(e, 'userId.id5id.uid')), p(0, r, 'pubcommon', d.deepAccess(e, 'userId.pubcid')), p(0, r, 'criteo.com', d.deepAccess(e, 'userId.criteoId')), p(0, r, 'liveramp.com', d.deepAccess(e, 'userId.idl_env')), p(0, r, 'liveintent.com', d.deepAccess(e, 'userId.lipb.lipbid')), p(0, r, 'adserver.org', d.deepAccess(e, 'userId.tdid')));
                                        return r;
                                    }(e),
                                    demand: u(e),
                                    videoData: function (e) {
                                        var r;
                                        r = 'video' == u(e) ? {
                                            format: e.mediaTypes.video.context,
                                            playerSize: e.mediaTypes.video.playerSize,
                                            mimes: e.mediaTypes.video.mimes
                                        } : { format: 'banner' };
                                        return r;
                                    }(e),
                                    scr_rsl: function () {
                                        var e = '';
                                        void 0 !== window.screen && (e = window.screen.width + 'x' + window.screen.height);
                                        return e;
                                    }(),
                                    cpuc: void 0 !== window.navigator ? window.navigator.hardwareConcurrency : null,
                                    kws: d.isEmpty(e.params.keywords) ? null : e.params.keywords
                                };
                                c = void 0 !== n.refererInfo.referer ? encodeURIComponent(n.refererInfo.referer) : null, r.gdpr_consent = '', r.gdpr = null, n && n.gdprConsent && (r.gdpr_consent = n.gdprConsent.consentString, r.gdpr = n.gdprConsent.gdprApplies);
                                return {
                                    method: 'POST',
                                    url: 'https://shb.richaudience.com/hb/',
                                    data: JSON.stringify(r)
                                };
                            });
                        },
                        interpretResponse: function (e, r) {
                            var n = [], i = e.body;
                            if (i) {
                                var a = {
                                    requestId: JSON.parse(r.data).bidId,
                                    cpm: i.cpm,
                                    width: i.width,
                                    height: i.height,
                                    creativeId: i.creative_id,
                                    mediaType: i.media_type,
                                    netRevenue: i.netRevenue,
                                    currency: i.currency,
                                    ttl: i.ttl,
                                    meta: i.adomain,
                                    dealId: i.dealId
                                };
                                if ('video' === i.media_type) {
                                    a.vastXml = i.vastXML;
                                    try {
                                        null != a.vastXml && ('outstream' != JSON.parse(r.data).videoData.format && 'banner' != JSON.parse(r.data).videoData.format || (a.renderer = t.a.install({
                                            id: r.bidId,
                                            adunitcode: r.tagId,
                                            loaded: !1,
                                            config: i.media_type,
                                            url: 'https://cdn3.richaudience.com/prebidVideo/player.js'
                                        })), a.renderer.setRender(l));
                                    } catch (e) {
                                        a.ad = i.adm;
                                    }
                                } else
                                    a.ad = i.adm;
                                n.push(a);
                            }
                            return n;
                        },
                        getUserSyncs: function (e, r, n) {
                            var i = [], a = Math.floor(9999999999 * Math.random()), d = '', t = '', s = function (e) {
                                    try {
                                        var r = null, n = {};
                                        return null != e.getConfig('userSync').filterSettings && void 0 !== e.getConfig('userSync').filterSettings && (null != (r = e.getConfig('userSync').filterSettings).iframe && void 0 !== r.iframe && (n.raiIframe = 'richaudience' == r.iframe.bidders || '*' == r.iframe.bidders ? r.iframe.filter : 'exclude'), null != r.image && void 0 !== r.image && (n.raiImage = 'richaudience' == r.image.bidders || '*' == r.image.bidders ? r.image.filter : 'exclude')), n;
                                    } catch (e) {
                                        return null;
                                    }
                                }(o.b);
                            return n && 'string' == typeof n.consentString && void 0 !== n.consentString && (t = 'consentString='.concat(n.consentString)), e.iframeEnabled && 'exclude' != s.raiIframe && (d = 'https://sync.richaudience.com/dcf3528a0b8aa83634892d50e91c306e/?ord=' + a, '' != t && (d += '&'.concat(t)), i.push({
                                type: 'iframe',
                                url: d
                            })), e.pixelEnabled && null != c && 0 == i.length && 'exclude' != s.raiImage && (d = 'https://sync.richaudience.com/bf7c142f4339da0278e83698a02b0854/?referrer='.concat(c), '' != t && (d += '&'.concat(t)), i.push({
                                type: 'image',
                                url: d
                            })), i;
                        }
                    };
                function u(e) {
                    var r = 'display';
                    return null != e.mediaTypes && null != e.mediaTypes.video && (r = 'video'), r;
                }
                function p(e, r, n, i) {
                    d.isStr(i) && r.push({
                        userId: i,
                        source: n
                    });
                }
                function l(i) {
                    i.renderer.push(function () {
                        var e, r, n;
                        r = ''.concat((e = i).vastXml), n = {
                            config: null != e.params[0].player ? {
                                end: null != e.params[0].player.end ? e.params[0].player.end : 'close',
                                init: null != e.params[0].player.init ? e.params[0].player.init : 'close',
                                skin: null != e.params[0].player.skin ? e.params[0].player.skin : 'light'
                            } : {
                                end: 'close',
                                init: 'close',
                                skin: 'light'
                            },
                            pid: e.params[0].pid,
                            adUnit: e.adUnitCode
                        }, window.raParams(n, r, !0);
                    });
                }
                Object(i.registerBidder)(s);
            }
        }, [598]);
        pbjsChunk([112], {
            610: function (e, r, t) {
                e.exports = t(611);
            },
            611: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'spec', function () {
                    return A;
                }), r.hasVideoMediaType = d, t.d(r, 'resetRubiConf', function () {
                    return w;
                }), r.masSizeOrdering = k, r.determineRubiconVideoSizeId = R, r.getPriceGranularity = z, r.hasValidVideoParams = T, r.hasValidSupplyChainParams = E, r.encodeParam = U, r.resetUserSync = function () {
                    P = !1;
                };
                var l = t(0), n = t(1), p = t(3), m = t(2), i = t(11), f = t.n(i), a = t(13), u = t(16);
                function o(r, e) {
                    var t, n = Object.keys(r);
                    return Object.getOwnPropertySymbols && (t = Object.getOwnPropertySymbols(r), e && (t = t.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                    })), n.push.apply(n, t)), n;
                }
                function g(r) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? o(Object(t), !0).forEach(function (e) {
                            y(r, e, t[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function (e) {
                            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
                        });
                    }
                    return r;
                }
                function b() {
                    return (b = Object.assign || function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = arguments[r];
                            for (var n in t)
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function v(e, r) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, r) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var t = [], n = !0, i = !1, o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(n = (a = s.next()).done) && (t.push(a.value), !r || t.length !== r); n = !0);
                        } catch (e) {
                            i = !0, o = e;
                        } finally {
                            try {
                                n || null == s.return || s.return();
                            } finally {
                                if (i)
                                    throw o;
                            }
                        }
                        return t;
                    }(e, r) || function (e, r) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return s(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === t && e.constructor && (t = e.constructor.name);
                        if ('Map' === t || 'Set' === t)
                            return Array.from(e);
                        if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                            return s(e, r);
                    }(e, r) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function s(e, r) {
                    (null == r || r > e.length) && (r = e.length);
                    for (var t = 0, n = new Array(r); t < r; t++)
                        n[t] = e[t];
                    return n;
                }
                function y(e, r, t) {
                    return r in e ? Object.defineProperty(e, r, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[r] = t, e;
                }
                function x(e) {
                    return (x = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var h = {};
                p.b.getConfig('rubicon', function (e) {
                    l.mergeDeep(h, e.rubicon);
                });
                var _ = {
                    1: '468x60',
                    2: '728x90',
                    5: '120x90',
                    7: '125x125',
                    8: '120x600',
                    9: '160x600',
                    10: '300x600',
                    13: '200x200',
                    14: '250x250',
                    15: '300x250',
                    16: '336x280',
                    17: '240x400',
                    19: '300x100',
                    31: '980x120',
                    32: '250x360',
                    33: '180x500',
                    35: '980x150',
                    37: '468x400',
                    38: '930x180',
                    39: '750x100',
                    40: '750x200',
                    41: '750x300',
                    42: '2x4',
                    43: '320x50',
                    44: '300x50',
                    48: '300x300',
                    53: '1024x768',
                    54: '300x1050',
                    55: '970x90',
                    57: '970x250',
                    58: '1000x90',
                    59: '320x80',
                    60: '320x150',
                    61: '1000x1000',
                    64: '580x500',
                    65: '640x480',
                    66: '930x600',
                    67: '320x480',
                    68: '1800x1000',
                    72: '320x320',
                    73: '320x160',
                    78: '980x240',
                    79: '980x300',
                    80: '980x400',
                    83: '480x300',
                    85: '300x120',
                    90: '548x150',
                    94: '970x310',
                    95: '970x100',
                    96: '970x210',
                    101: '480x320',
                    102: '768x1024',
                    103: '480x280',
                    105: '250x800',
                    108: '320x240',
                    113: '1000x300',
                    117: '320x100',
                    125: '800x250',
                    126: '200x600',
                    144: '980x600',
                    145: '980x150',
                    152: '1000x250',
                    156: '640x320',
                    159: '320x250',
                    179: '250x600',
                    195: '600x300',
                    198: '640x360',
                    199: '640x200',
                    213: '1030x590',
                    214: '980x360',
                    221: '1x1',
                    229: '320x180',
                    230: '2000x1400',
                    232: '580x400',
                    234: '6x6',
                    251: '2x2',
                    256: '480x820',
                    257: '400x600',
                    258: '500x200',
                    259: '998x200',
                    264: '970x1000',
                    265: '1920x1080',
                    274: '1800x200',
                    278: '320x500',
                    282: '320x400',
                    288: '640x380',
                    548: '500x1000',
                    550: '980x480',
                    552: '300x200',
                    558: '640x640'
                };
                l._each(_, function (e, r) {
                    return _[e] = r;
                });
                var A = {
                    code: 'rubicon',
                    gvlid: 52,
                    supportedMediaTypes: [
                        m.b,
                        m.d
                    ],
                    isBidRequestValid: function (e) {
                        if ('object' !== x(e.params))
                            return !1;
                        for (var r = 0, t = [
                                    'accountId',
                                    'siteId',
                                    'zoneId'
                                ]; r < t.length; r++)
                            if (e.params[t[r]] = parseInt(e.params[t[r]]), isNaN(e.params[t[r]]))
                                return l.logError('Rubicon: wrong format of accountId or siteId or zoneId.'), !1;
                        var n = O(e, !0);
                        return !!n && ('video' !== n || T(e));
                    },
                    buildRequests: function (e, d) {
                        var i, r = e.filter(function (e) {
                                return 'video' === O(e);
                            }).map(function (e) {
                                e.startTime = new Date().getTime();
                                var r = {
                                    id: e.transactionId,
                                    test: p.b.getConfig('debug') ? 1 : 0,
                                    cur: ['USD'],
                                    source: { tid: e.transactionId },
                                    tmax: d.timeout,
                                    imp: [{
                                            exp: p.b.getConfig('s2sConfig.defaultTtl'),
                                            id: e.adUnitCode,
                                            secure: 1,
                                            ext: y({}, e.bidder, e.params),
                                            video: l.deepAccess(e, 'mediaTypes.video') || {}
                                        }],
                                    ext: {
                                        prebid: {
                                            channel: {
                                                name: 'pbjs',
                                                version: pbjs.version
                                            },
                                            cache: { vastxml: { returnCreative: !0 === h.returnVast } },
                                            targeting: {
                                                includewinners: !0,
                                                includebidderkeys: !1,
                                                pricegranularity: z(p.b)
                                            },
                                            bidders: { rubicon: { integration: h.int_type || 'pbjs' } }
                                        }
                                    }
                                };
                                'rubicon' !== e.bidder && (r.ext.prebid.aliases = y({}, e.bidder, 'rubicon'));
                                var t, n, i, o = Object(u.a)().installedModules;
                                if (!o || o.length && -1 === o.indexOf('rubiconAnalyticsAdapter') || l.deepSetValue(r, 'ext.prebid.analytics', { rubicon: { 'client-analytics': !0 } }), 'function' != typeof e.getFloor || h.disableFloors)
                                    t = parseFloat(l.deepAccess(e, 'params.floor'));
                                else {
                                    try {
                                        n = e.getFloor({
                                            currency: 'USD',
                                            mediaType: 'video',
                                            size: C(e, 'video')
                                        });
                                    } catch (e) {
                                        l.logError('Rubicon: getFloor threw an error: ', e);
                                    }
                                    t = 'object' !== x(n) || 'USD' !== n.currency || isNaN(parseInt(n.floor)) ? void 0 : parseFloat(n.floor);
                                }
                                isNaN(t) || (r.imp[0].bidfloor = t), r.imp[0].ext[e.bidder].video.size_id = R(e), function (r, t, e) {
                                    if (!r)
                                        return;
                                    'object' === x(p.b.getConfig('app')) ? r.app = p.b.getConfig('app') : r.site = { page: j(t, e) };
                                    'object' === x(p.b.getConfig('device')) && (r.device = p.b.getConfig('device'));
                                    t.params.video.language && [
                                        'site',
                                        'device'
                                    ].forEach(function (e) {
                                        r[e] && (r[e].content = b({ language: t.params.video.language }, r[e].content));
                                    });
                                }(r, e, d), function (e, r) {
                                    'object' === x(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
                                    'object' === x(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
                                    'object' === x(e.imp[0].video) && void 0 === e.imp[0].video.pos && ('atf' === r.params.position ? e.imp[0].video.pos = 1 : 'btf' === r.params.position && (e.imp[0].video.pos = 3));
                                    var t = C(r, 'video');
                                    e.imp[0].video.w = t[0], e.imp[0].video.h = t[1];
                                }(r, e), d.gdprConsent && ('boolean' == typeof d.gdprConsent.gdprApplies && (i = d.gdprConsent.gdprApplies ? 1 : 0), l.deepSetValue(r, 'regs.ext.gdpr', i), l.deepSetValue(r, 'user.ext.consent', d.gdprConsent.consentString)), d.uspConsent && l.deepSetValue(r, 'regs.ext.us_privacy', d.uspConsent);
                                var a = l.deepAccess(d, 'bids.0.userIdAsEids');
                                a && a.length && l.deepSetValue(r, 'user.ext.eids', a);
                                var s = p.b.getConfig('user.id');
                                s && l.deepSetValue(r, 'user.id', s), !0 === p.b.getConfig('coppa') && l.deepSetValue(r, 'regs.coppa', 1), e.schain && E(e.schain) && l.deepSetValue(r, 'source.ext.schain', e.schain);
                                var c = p.b.getConfig('multibid');
                                return c && l.deepSetValue(r, 'ext.prebid.multibid', c.reduce(function (e, r) {
                                    var t = {};
                                    return Object.keys(r).forEach(function (e) {
                                        t[e.toLowerCase()] = r[e];
                                    }), e.push(t), e;
                                }, [])), I(e, m.d, r), e.storedAuctionResponse && l.deepSetValue(r.imp[0], 'ext.prebid.storedauctionresponse.id', e.storedAuctionResponse.toString()), l.deepSetValue(r.imp[0], 'ext.prebid.auctiontimestamp', d.auctionStart), {
                                    method: 'POST',
                                    url: 'https://'.concat(h.videoHost || 'prebid-server', '.rubiconproject.com/openrtb2/auction'),
                                    data: r,
                                    bidRequest: e
                                };
                            });
                        return !0 !== h.singleRequest ? r.concat(e.filter(function (e) {
                            return 'banner' === O(e);
                        }).map(function (e) {
                            var n = A.createSlotParams(e, d);
                            return {
                                method: 'GET',
                                url: 'https://'.concat(h.bannerHost || 'fastlane', '.rubiconproject.com/a/api/fastlane.json'),
                                data: A.getOrderedParams(n).reduce(function (e, r) {
                                    var t = n[r];
                                    return l.isStr(t) && '' !== t || l.isNumber(t) ? ''.concat(e).concat(U(r, t), '&') : e;
                                }, '') + 'slots=1&rand='.concat(Math.random()),
                                bidRequest: e
                            };
                        })) : (i = e.filter(function (e) {
                            return 'banner' === O(e);
                        }).reduce(function (e, r) {
                            return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e;
                        }, {}), r.concat(Object.keys(i).reduce(function (r, e) {
                            var t, n;
                            return t = i[e], n = 10, t.map(function (e, r) {
                                return r % n == 0 ? t.slice(r, r + n) : null;
                            }).filter(function (e) {
                                return e;
                            }).forEach(function (e) {
                                var n = A.combineSlotUrlParams(e.map(function (e) {
                                    return A.createSlotParams(e, d);
                                }));
                                r.push({
                                    method: 'GET',
                                    url: 'https://'.concat(h.bannerHost || 'fastlane', '.rubiconproject.com/a/api/fastlane.json'),
                                    data: A.getOrderedParams(n).reduce(function (e, r) {
                                        var t = n[r];
                                        return l.isStr(t) && '' !== t || l.isNumber(t) ? ''.concat(e).concat(U(r, t), '&') : e;
                                    }, '') + 'slots='.concat(e.length, '&rand=').concat(Math.random()),
                                    bidRequest: e
                                });
                            }), r;
                        }, [])));
                    },
                    getOrderedParams: function (e) {
                        var r = /^tg_v/, t = /^tg_i/, n = /^eid_|^tpid_/, i = [
                                'account_id',
                                'site_id',
                                'zone_id',
                                'size_id',
                                'alt_size_ids',
                                'p_pos',
                                'gdpr',
                                'gdpr_consent',
                                'us_privacy',
                                'rp_schain'
                            ].concat(Object.keys(e).filter(function (e) {
                                return n.test(e);
                            })).concat([
                                'x_liverampidl',
                                'ppuid',
                                'rf',
                                'p_geo.latitude',
                                'p_geo.longitude',
                                'kw'
                            ]).concat(Object.keys(e).filter(function (e) {
                                return r.test(e);
                            })).concat(Object.keys(e).filter(function (e) {
                                return t.test(e);
                            })).concat([
                                'tk_flint',
                                'x_source.tid',
                                'x_source.pchain',
                                'p_screen_res',
                                'rp_floor',
                                'rp_secure',
                                'tk_user_key'
                            ]);
                        return i.concat(Object.keys(e).filter(function (e) {
                            return -1 === i.indexOf(e);
                        }));
                    },
                    combineSlotUrlParams: function (i) {
                        if (1 === i.length)
                            return i[0];
                        var n = i.reduce(function (r, t, n) {
                                return Object.keys(t).forEach(function (e) {
                                    r.hasOwnProperty(e) || (r[e] = new Array(i.length)), r[e].splice(n, 1, t[e]);
                                }), r;
                            }, {}), o = new RegExp('^([^;]*)(;\\1)+$');
                        return Object.keys(n).forEach(function (e) {
                            var r = n[e].join(';'), t = r.match(o);
                            n[e] = t ? t[1] : r;
                        }), n;
                    },
                    createSlotParams: function (e, r) {
                        e.startTime = new Date().getTime();
                        var t, n = e.params, i = C(e, 'banner'), o = v(n.latLong || [], 2), a = o[0], s = o[1], c = {
                                account_id: n.accountId,
                                site_id: n.siteId,
                                zone_id: n.zoneId,
                                size_id: i[0],
                                alt_size_ids: i.slice(1).join(',') || void 0,
                                rp_floor: 0.01 <= (n.floor = parseFloat(n.floor)) ? n.floor : void 0,
                                rp_secure: '1',
                                tk_flint: ''.concat(h.int_type || 'pbjs_lite', '_v5.1.0'),
                                'x_source.tid': e.transactionId,
                                'x_source.pchain': n.pchain,
                                p_screen_res: [
                                    window.screen.width,
                                    window.screen.height
                                ].join('x'),
                                tk_user_key: n.userId,
                                'p_geo.latitude': isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                                'p_geo.longitude': isNaN(parseFloat(s)) ? void 0 : parseFloat(s).toFixed(4),
                                'tg_fl.eid': e.code,
                                rf: j(e, r)
                            };
                        if ('function' == typeof e.getFloor && !h.disableFloors) {
                            try {
                                t = e.getFloor({
                                    currency: 'USD',
                                    mediaType: 'banner',
                                    size: '*'
                                });
                            } catch (e) {
                                l.logError('Rubicon: getFloor threw an error: ', e);
                            }
                            c.rp_hard_floor = 'object' !== x(t) || 'USD' !== t.currency || isNaN(parseInt(t.floor)) ? void 0 : t.floor;
                        }
                        var d = {
                            1: 'atf',
                            3: 'btf'
                        }[l.deepAccess(e, 'mediaTypes.banner.pos')] || '';
                        c.p_pos = 'atf' === n.position || 'btf' === n.position ? n.position : d;
                        var u = p.b.getConfig('user.id');
                        return u && (c.ppuid = u), e.userIdAsEids && e.userIdAsEids.forEach(function (r) {
                            try {
                                var e;
                                'adserver.org' === r.source ? (c.tpid_tdid = r.uids[0].id, c['eid_adserver.org'] = r.uids[0].id) : 'liveintent.com' === r.source ? (c['tpid_liveintent.com'] = r.uids[0].id, c['eid_liveintent.com'] = r.uids[0].id, r.ext && Array.isArray(r.ext.segments) && r.ext.segments.length && (c['tg_v.LIseg'] = r.ext.segments.join(','))) : 'liveramp.com' === r.source ? c.x_liverampidl = r.uids[0].id : 'id5-sync.com' === r.source ? c['eid_id5-sync.com'] = ''.concat(r.uids[0].id, '^').concat(r.uids[0].atype, '^').concat(r.uids[0].ext && r.uids[0].ext.linkType || '') : c['eid_'.concat(r.source)] = ''.concat(r.uids[0].id, '^').concat(r.uids[0].atype || ''), c.ppuid || (e = f()(r.uids, function (e) {
                                    return e.ext && 'ppuid' === e.ext.stype;
                                })) && e.id && (c.ppuid = e.id);
                            } catch (e) {
                                l.logWarn('Rubicon: error reading eid:', r, e);
                            }
                        }), r.gdprConsent && ('boolean' == typeof r.gdprConsent.gdprApplies && (c.gdpr = Number(r.gdprConsent.gdprApplies)), c.gdpr_consent = r.gdprConsent.consentString), r.uspConsent && (c.us_privacy = encodeURIComponent(r.uspConsent)), c.rp_maxbids = r.bidLimit || 1, I(e, m.b, c), !0 === p.b.getConfig('coppa') && (c.coppa = 1), e.schain && E(e.schain) && (c.rp_schain = A.serializeSupplyChain(e.schain)), c;
                    },
                    serializeSupplyChain: function (e) {
                        if (!E(e))
                            return '';
                        var r = e.ver, t = e.complete, n = e.nodes;
                        return ''.concat(r, ',').concat(t, '!').concat(A.serializeSupplyChainNodes(n));
                    },
                    serializeSupplyChainNodes: function (e) {
                        var t = [
                            'asi',
                            'sid',
                            'hp',
                            'rid',
                            'name',
                            'domain'
                        ];
                        return e.map(function (r) {
                            return t.map(function (e) {
                                return encodeURIComponent(r[e] || '');
                            }).join(',');
                        }).join('!');
                    },
                    interpretResponse: function (c, e) {
                        var d = e.bidRequest;
                        if (!(c = c.body) || 'object' !== x(c))
                            return [];
                        if (c.seatbid) {
                            var r = l.deepAccess(c, 'ext.errors.rubicon');
                            Array.isArray(r) && 0 < r.length && l.logWarn('Rubicon: Error in video response');
                            var o = [];
                            return c.seatbid.forEach(function (i) {
                                (i.bid || []).forEach(function (e) {
                                    var r = {
                                        requestId: d.bidId,
                                        currency: c.cur || 'USD',
                                        creativeId: e.crid,
                                        cpm: e.price || 0,
                                        bidderCode: i.seat,
                                        ttl: 300,
                                        netRevenue: !1 !== h.netRevenue,
                                        width: e.w || l.deepAccess(d, 'mediaTypes.video.w') || l.deepAccess(d, 'params.video.playerWidth'),
                                        height: e.h || l.deepAccess(d, 'mediaTypes.video.h') || l.deepAccess(d, 'params.video.playerHeight')
                                    };
                                    e.id && (r.seatBidId = e.id), e.dealid && (r.dealId = e.dealid), e.adomain && l.deepSetValue(r, 'meta.advertiserDomains', Array.isArray(e.adomain) ? e.adomain : [e.adomain]), l.deepAccess(e, 'ext.bidder.rp.advid') && l.deepSetValue(r, 'meta.advertiserId', e.ext.bidder.rp.advid);
                                    var t, n = l.deepAccess(c, 'ext.responsetimemillis.rubicon');
                                    d && n && (d.serverResponseTimeMs = n), l.deepAccess(e, 'ext.prebid.type') === m.d ? (r.mediaType = m.d, l.deepSetValue(r, 'meta.mediaType', m.d), (t = l.deepAccess(e, 'ext.prebid.targeting')) && 'object' === x(t) && (r.adserverTargeting = t), e.ext.prebid.cache && 'object' === x(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, r.vastUrl = e.ext.prebid.cache.vastXml.url) : t && t.hb_uuid && t.hb_cache_host && t.hb_cache_path && (r.videoCacheKey = t.hb_uuid, r.vastUrl = 'https://'.concat(t.hb_cache_host).concat(t.hb_cache_path, '?uuid=').concat(t.hb_uuid)), e.adm && (r.vastXml = e.adm), e.nurl && (r.vastUrl = e.nurl), !r.vastUrl && e.nurl && (r.vastUrl = e.nurl), 'outstream' === l.deepAccess(d, 'mediaTypes.video.context').toLowerCase() && (r.renderer = function (e) {
                                        var r = a.a.install({
                                            id: e.adId,
                                            url: h.rendererUrl || 'https://video-outstream.rubiconproject.com/apex-2.0.0.js',
                                            config: h.rendererConfig || {},
                                            loaded: !1,
                                            adUnitCode: e.adUnitCode
                                        });
                                        try {
                                            r.setRender(S);
                                        } catch (e) {
                                            l.logWarn('Prebid Error calling setRender on renderer', e);
                                        }
                                        return r;
                                    }(r))) : l.logWarn('Rubicon: video response received non-video media type'), o.push(r);
                                });
                            }), o;
                        }
                        var u, t = c.ads, p = 0;
                        return 'object' !== x(d) || Array.isArray(d) || 'video' !== O(d) || 'object' !== x(t) || (t = t[d.adUnitCode]), !Array.isArray(t) || t.length < 1 ? [] : t.reduce(function (e, r, t) {
                            if (r.impression_id && u === r.impression_id ? p++ : u = r.impression_id, 'ok' !== r.status)
                                return e;
                            var n, i, o, a, s = Array.isArray(d) ? d[t - p] : d;
                            return s && 'object' === x(s) ? (n = {
                                requestId: s.bidId,
                                currency: 'USD',
                                creativeId: r.creative_id || ''.concat(r.network || '', '-').concat(r.advertiser || ''),
                                cpm: r.cpm || 0,
                                dealId: r.deal,
                                ttl: 300,
                                netRevenue: !1 !== h.netRevenue,
                                rubicon: {
                                    advertiserId: r.advertiser,
                                    networkId: r.network
                                },
                                meta: {
                                    advertiserId: r.advertiser,
                                    networkId: r.network,
                                    mediaType: m.b
                                }
                            }, r.creative_type && (n.mediaType = r.creative_type), r.adomain && (n.meta.advertiserDomains = Array.isArray(r.adomain) ? r.adomain : [r.adomain]), r.creative_type === m.d ? (n.width = s.params.video.playerWidth, n.height = s.params.video.playerHeight, n.vastUrl = r.creative_depot_url, n.impression_id = r.impression_id, n.videoCacheKey = r.impression_id) : (n.ad = (o = r.script, a = r.impression_id, '<html>\n<head><script type=\'text/javascript\'>inDapIF=true;</script></head>\n<body style=\'margin : 0; padding: 0;\'>\n<!-- Rubicon Project Ad Tag -->\n<div data-rp-impression-id=\''.concat(a, '\'>\n<script type=\'text/javascript\'>').concat(o, '</script>\n</div>\n</body>\n</html>')), i = v(_[r.size_id].split('x').map(function (e) {
                                return Number(e);
                            }), 2), n.width = i[0], n.height = i[1]), n.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(function (e, r) {
                                return e[r.key] = r.values[0], e;
                            }, { rpfl_elemid: s.adUnitCode }), e.push(n)) : l.logError('Rubicon: bidRequest undefined at index position:'.concat(t), d, c), e;
                        }, []).sort(function (e, r) {
                            return (r.cpm || 0) - (e.cpm || 0);
                        });
                    },
                    getUserSyncs: function (e, r, t, n) {
                        if (!P && e.iframeEnabled) {
                            var i = '';
                            return t && 'string' == typeof t.consentString && ('boolean' == typeof t.gdprApplies ? i += '?gdpr='.concat(Number(t.gdprApplies), '&gdpr_consent=').concat(t.consentString) : i += '?gdpr_consent='.concat(t.consentString)), n && (i += ''.concat(i ? '&' : '?', 'us_privacy=').concat(encodeURIComponent(n))), P = !0, {
                                type: 'iframe',
                                url: 'https://'.concat(h.syncHost || 'eus', '.rubiconproject.com/usync.html') + i
                            };
                        }
                    },
                    transformBidParams: function (e) {
                        return l.convertTypes({
                            accountId: 'number',
                            siteId: 'number',
                            zoneId: 'number'
                        }, e);
                    }
                };
                function j(e, r) {
                    var t = p.b.getConfig('pageUrl'), t = e.params.referrer ? e.params.referrer : t || r.refererInfo.referer;
                    return e.params.secure ? t.replace(/^http:/i, 'https:') : t;
                }
                function S(e) {
                    var r, t, n, i = document.getElementById(e.adUnitCode);
                    (r = i.querySelector('div[id^=\'google_ads\']')) && r.style.setProperty('display', 'none'), t = i.querySelector('script[id^=\'sas_script\']'), (n = t && t.nextSibling) && 'iframe' === n.localName && n.style.setProperty('display', 'none');
                    var o = e.renderer.getConfig();
                    e.renderer.push(function () {
                        window.MagniteApex.renderAd({
                            width: e.width,
                            height: e.height,
                            vastUrl: e.vastUrl,
                            placement: {
                                attachTo: '#'.concat(e.adUnitCode),
                                align: o.align || 'center',
                                position: o.position || 'append'
                            },
                            closeButton: o.closeButton || !1,
                            label: o.label || void 0,
                            collapse: o.collapse || !0
                        });
                    });
                }
                function C(e, r) {
                    var t = e.params;
                    if ('video' === r) {
                        var n = [];
                        return t.video && t.video.playerWidth && t.video.playerHeight ? n = [
                            t.video.playerWidth,
                            t.video.playerHeight
                        ] : Array.isArray(l.deepAccess(e, 'mediaTypes.video.playerSize')) && 1 === e.mediaTypes.video.playerSize.length ? n = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (n = e.sizes[0]), n;
                    }
                    var i = [];
                    return Array.isArray(t.sizes) ? i = t.sizes : void 0 !== l.deepAccess(e, 'mediaTypes.banner.sizes') ? i = c(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? i = c(e.sizes) : l.logWarn('Rubicon: no sizes are setup or found'), k(i);
                }
                function I(e, r, s) {
                    var t = {
                        user: { ext: { data: g({}, e.params.visitor) } },
                        site: { ext: { data: g({}, e.params.inventory) } }
                    };
                    e.params.keywords && (t.site.keywords = l.isArray(e.params.keywords) ? e.params.keywords.join(',') : e.params.keywords);
                    function n(e, r, t, n) {
                        var i = !(3 < arguments.length && void 0 !== n) || n, o = function (e, r, t) {
                                if ('data' === r && Array.isArray(e))
                                    return e.filter(function (e) {
                                        return e.segment && l.deepAccess(e, 'ext.segtax') && c[t] && -1 !== c[t].indexOf(l.deepAccess(e, 'ext.segtax'));
                                    }).map(function (e) {
                                        var r = e.segment.filter(function (e) {
                                            return e.id;
                                        }).reduce(function (e, r) {
                                            return e.push(r.id), e;
                                        }, []);
                                        if (0 < r.length)
                                            return r.toString();
                                    }).toString();
                                if ('object' !== x(e) || Array.isArray(e)) {
                                    if (void 0 !== e)
                                        return Array.isArray(e) ? e.filter(function (e) {
                                            return 'object' !== x(e) && void 0 !== e ? e.toString() : void l.logWarn('Rubicon: Filtered value: ', e, 'for key', r, ': Expected value to be string, integer, or an array of strings/ints');
                                        }).toString() : e.toString();
                                } else
                                    l.logWarn('Rubicon: Filtered FPD key: ', r, ': Expected value to be string, integer, or an array of strings/ints');
                            }(e, t, r), a = d[t] && i ? ''.concat(d[t]) : 'data' === t ? ''.concat(d[r], 'iab') : ''.concat(d[r]).concat(t);
                        s[a] = s[a] ? s[a].concat(',', o) : o;
                    }
                    var i = l.mergeDeep({}, p.b.getConfig('ortb2') || {}, t), o = l.deepAccess(e.ortb2Imp, 'ext.data') || {}, c = {
                            user: [3],
                            site: [
                                1,
                                2
                            ]
                        }, d = {
                            user: 'tg_v.',
                            site: 'tg_i.',
                            adserver: 'tg_i.dfp_ad_unit_code',
                            pbadslot: 'tg_i.pbadslot',
                            keywords: 'kw'
                        };
                    Object.keys(o).forEach(function (r) {
                        'adserver' === r ? [
                            'name',
                            'adslot'
                        ].forEach(function (e) {
                            o[r][e] && (o[r][e] = o[r][e].toString().replace(/^\/+/, ''));
                        }) : 'pbadslot' === r && (o[r] = o[r].toString().replace(/^\/+/, ''));
                    }), r === m.b ? ([
                        'site',
                        'user'
                    ].forEach(function (r) {
                        Object.keys(i[r]).forEach(function (e) {
                            'site' === r && 'content' === e && i[r][e].data ? n(i[r][e].data, r, 'data') : 'ext' !== e ? n(i[r][e], r, e) : i[r][e].data && Object.keys(i[r].ext.data).forEach(function (e) {
                                n(i[r].ext.data[e], r, e, !1);
                            });
                        });
                    }), Object.keys(o).forEach(function (e) {
                        'adserver' === e ? n(o[e].adslot, name, e) : n(o[e], 'site', e);
                    })) : (Object.keys(o).length && l.mergeDeep(s.imp[0].ext, { data: o }), l.mergeDeep(s, i));
                }
                function c(e) {
                    return l.parseSizesInput(e).reduce(function (e, r) {
                        var t = parseInt(_[r], 10);
                        return t && e.push(t), e;
                    }, []);
                }
                function d(e) {
                    return 'object' === x(l.deepAccess(e, 'params.video')) && void 0 !== l.deepAccess(e, 'mediaTypes.'.concat(m.d));
                }
                function O(e, r) {
                    var t = 1 < arguments.length && void 0 !== r && r;
                    return d(e) ? -1 === [
                        'outstream',
                        'instream'
                    ].indexOf(l.deepAccess(e, 'mediaTypes.'.concat(m.d, '.context'))) ? void (t && l.logError('Rubicon: mediaTypes.video.context must be outstream or instream')) : C(e, 'video').length < 2 ? void (t && l.logError('Rubicon: could not determine the playerSize of the video')) : (t && l.logMessage('Rubicon: making video request for adUnit', e.adUnitCode), 'video') : 0 === C(e, 'banner').length ? void (t && l.logError('Rubicon: could not determine the sizes for banner request')) : (t && l.logMessage('Rubicon: making banner request for adUnit', e.adUnitCode), 'banner');
                }
                var w = function () {
                    return h = {};
                };
                function k(e) {
                    var i = [
                        15,
                        2,
                        9
                    ];
                    return e.sort(function (e, r) {
                        var t = i.indexOf(e), n = i.indexOf(r);
                        return -1 < t || -1 < n ? -1 === t ? 1 : -1 === n ? -1 : t - n : e - r;
                    });
                }
                function R(e) {
                    var r = parseInt(l.deepAccess(e, 'params.video.size_id'));
                    return isNaN(r) ? 'outstream' === l.deepAccess(e, 'mediaTypes.'.concat(m.d, '.context')) ? 203 : 201 : r;
                }
                function z(e) {
                    return {
                        ranges: {
                            low: [{
                                    max: 5,
                                    increment: 0.5
                                }],
                            medium: [{
                                    max: 20,
                                    increment: 0.1
                                }],
                            high: [{
                                    max: 20,
                                    increment: 0.01
                                }],
                            auto: [
                                {
                                    max: 5,
                                    increment: 0.05
                                },
                                {
                                    min: 5,
                                    max: 10,
                                    increment: 0.1
                                },
                                {
                                    min: 10,
                                    max: 20,
                                    increment: 0.5
                                }
                            ],
                            dense: [
                                {
                                    max: 3,
                                    increment: 0.01
                                },
                                {
                                    min: 3,
                                    max: 8,
                                    increment: 0.05
                                },
                                {
                                    min: 8,
                                    max: 20,
                                    increment: 0.5
                                }
                            ],
                            custom: e.getConfig('customPriceBucket') && e.getConfig('customPriceBucket').buckets
                        }[e.getConfig('priceGranularity')]
                    };
                }
                function T(r) {
                    var t = !0, e = Object.prototype.toString.call([]), n = {
                            mimes: e,
                            protocols: e,
                            linearity: Object.prototype.toString.call(0),
                            api: e
                        };
                    return Object.keys(n).forEach(function (e) {
                        Object.prototype.toString.call(l.deepAccess(r, 'mediaTypes.video.' + e)) !== n[e] && (t = !1, l.logError('Rubicon: mediaTypes.video.' + e + ' is required and must be of type: ' + n[e]));
                    }), t;
                }
                function E(e) {
                    var r = !1, t = [
                            'asi',
                            'sid',
                            'hp'
                        ];
                    return e.nodes && ((r = e.nodes.reduce(function (e, r) {
                        return e ? t.every(function (e) {
                            return r.hasOwnProperty(e);
                        }) : e;
                    }, !0)) || l.logError('Rubicon: required schain params missing')), r;
                }
                function U(e, r) {
                    return 'rp_schain' === e ? 'rp_schain='.concat(r) : ''.concat(e, '=').concat(encodeURIComponent(r));
                }
                var P = !1;
                Object(n.registerBidder)(A);
            }
        }, [610]);
        pbjsChunk([110], {
            616: function (n, i, e) {
                n.exports = e(617);
            },
            617: function (n, i, e) {
                'use strict';
                Object.defineProperty(i, '__esModule', { value: !0 }), i.isSchainObjectValid = u, i.isValidSchainConfig = l, i.makeBidRequestsHook = o, i.init = g;
                var t = e(3), c = e(7), a = e(0), s = 'Invalid schain object found: ', r = ' should be a string', f = ' should be an Integer', d = ' should be an object', b = ' should be an Array', h = {
                        STRICT: 'strict',
                        RELAXED: 'relaxed',
                        OFF: 'off'
                    }, O = [];
                function u(n, i) {
                    var e = 'Detected something wrong within an schain config:', t = '';
                    function c(n) {
                        t += '\n' + n;
                    }
                    function o() {
                        (!0 === i ? Object(a.logError) : Object(a.logWarn))(e, n, t);
                    }
                    if (!Object(a.isPlainObject)(n) && (c('schain.config' + d), o(), i))
                        return !1;
                    if (Object(a.isNumber)(n.complete) && Object(a.isInteger)(n.complete) || c('schain.config.complete' + f), Object(a.isStr)(n.ver) || c('schain.config.ver' + r), Object(a.hasOwn)(n, 'ext') && (Object(a.isPlainObject)(n.ext) || c('schain.config.ext' + d)), Object(a.isArray)(n.nodes))
                        n.nodes.forEach(function (n, i) {
                            Object(a.isStr)(n.asi) || c('schain.config.nodes['.concat(i, '].asi') + r), Object(a.isStr)(n.sid) || c('schain.config.nodes['.concat(i, '].sid') + r), Object(a.isNumber)(n.hp) && Object(a.isInteger)(n.hp) || c('schain.config.nodes['.concat(i, '].hp') + f), Object(a.hasOwn)(n, 'rid') && (Object(a.isStr)(n.rid) || c('schain.config.nodes['.concat(i, '].rid') + r)), Object(a.hasOwn)(n, 'name') && (Object(a.isStr)(n.name) || c('schain.config.nodes['.concat(i, '].name') + r)), Object(a.hasOwn)(n, 'domain') && (Object(a.isStr)(n.domain) || c('schain.config.nodes['.concat(i, '].domain') + r)), Object(a.hasOwn)(n, 'ext') && (Object(a.isPlainObject)(n.ext) || c('schain.config.nodes['.concat(i, '].ext') + d));
                        });
                    else if (c('schain.config.nodes' + b), o(), i)
                        return !1;
                    return !(0 < t.length && (o(), i));
                }
                function l(n) {
                    return void 0 !== n && (!!Object(a.isPlainObject)(n) || (Object(a.logError)(s + 'the following schain config will not be used as schain is not an object.', n), !1));
                }
                function o(n, i) {
                    var c = t.b.getConfig('schain'), o = t.b.getBidderConfig();
                    i.forEach(function (n) {
                        var i, e = n.bidderCode, t = o[i = e] && o[i].schain || c;
                        n.bids.forEach(function (n) {
                            var i = function (n, i) {
                                var e = h.STRICT;
                                if (l(n)) {
                                    if (Object(a.isStr)(n.validation) && -1 != O.indexOf(n.validation) && (e = n.validation), e === h.OFF)
                                        return n.config;
                                    if (u(n.config, !(e !== h.STRICT)))
                                        return n.config;
                                    Object(a.logError)(s + 'due to the \'strict\' validation setting, this schain config will not be passed to bidder \''.concat(i, '\'.  See above error for details.'));
                                }
                                return null;
                            }(t, e);
                            i && (n.schain = i);
                        });
                    }), n(i);
                }
                function g() {
                    c.default.makeBidRequests.after(o);
                }
                Object(a._each)(h, function (n) {
                    return O.push(n);
                }), g();
            }
        }, [616]);
        pbjsChunk([106], {
            626: function (e, t, r) {
                e.exports = r(627);
            },
            627: function (e, t, r) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), r.d(t, 'spec', function () {
                    return c;
                });
                var m = r(0), h = r(3), g = r(13), a = r(1), l = r(2), n = r(40), s = 'https://static.showheroes.com/publishertag.js', d = 'https://pubtag.stage.showheroes.com/publishertag.js', o = 'https://video-library.showheroes.com', i = 'https://video-library.stage.showheroes.com', b = 'showheroes-bs';
                function f(e) {
                    return {
                        pubTag: e ? d : s,
                        vlHost: e ? i : o
                    };
                }
                var c = {
                    code: b,
                    aliases: ['showheroesBs'],
                    supportedMediaTypes: [
                        l.d,
                        l.b
                    ],
                    isBidRequestValid: function (e) {
                        return !!e.params.playerId;
                    },
                    buildRequests: function (e, o) {
                        var i = [], t = e[0].params.contentPageUrl || o.refererInfo.referer, r = !!e[0].params.stage, a = 'outstream' === m.deepAccess(e[0], 'mediaTypes.video.context'), s = m.deepAccess(e[0], 'params.outstreamOptions.customRender'), n = m.deepAccess(e[0], 'params.outstreamOptions.slot') || m.deepAccess(e[0], 'params.outstreamOptions.iframe'), d = m.deepAccess(e[0], 'renderer'), c = m.deepAccess(e[0], 'params.outstreamOptions'), p = !!e[0].mediaTypes.banner || a && !(s || d || n), u = e[0].schain || {};
                        return e.forEach(function (s) {
                            function t(e, t) {
                                var r = '', a = 2;
                                return e === l.b ? a = 5 : (r = m.deepAccess(s, 'mediaTypes.video.context'), d && 'instream' === r && (a = 1), 'outstream' === r && (a = 5)), {
                                    type: a,
                                    bidId: s.bidId,
                                    mediaType: e,
                                    context: r,
                                    playerId: m.getBidIdParameter('playerId', s.params),
                                    auctionId: o.auctionId,
                                    bidderCode: b,
                                    gdprConsent: o.gdprConsent,
                                    start: +new Date(),
                                    timeout: 3000,
                                    size: {
                                        width: t[0],
                                        height: t[1]
                                    },
                                    params: s.params,
                                    schain: s.schain || u
                                };
                            }
                            var e, r, a = (e = s, y(m.deepAccess(e, 'mediaTypes.video.playerSize') || [])), n = (r = s, y(m.deepAccess(r, 'mediaTypes.banner.sizes') || [])), d = m.getBidIdParameter('vpaidMode', s.params);
                            a.forEach(function (e) {
                                i.push(t(l.d, e));
                            }), n.forEach(function (e) {
                                i.push(t(l.b, e));
                            });
                        }), {
                            url: r ? 'https://bid-service.stage.showheroes.com/api/v1/bid' : 'https://bs.showheroes.com/api/v1/bid',
                            method: 'POST',
                            options: {
                                contentType: 'application/json',
                                accept: 'application/json'
                            },
                            data: {
                                user: [],
                                meta: {
                                    adapterVersion: 2,
                                    pageURL: encodeURIComponent(t),
                                    vastCacheEnabled: !!h.b.getConfig('cache') && !p && !c || !1,
                                    isDesktop: 700 < m.getWindowTop().document.documentElement.clientWidth,
                                    xmlAndTag: !(!a || !s) || !1,
                                    stage: r || void 0
                                },
                                requests: i,
                                debug: e[0].params.debug || !1
                            }
                        };
                    },
                    interpretResponse: function (e, t) {
                        return function (e, c) {
                            if (e && (!Array.isArray(e.bids) || e.bids.length < 1))
                                return [];
                            var p = [], u = {};
                            return (c.requests || []).forEach(function (e) {
                                u[e.bidId] = e;
                            }), e.bids.forEach(function (e) {
                                var t, r, a, s, n, d = u[e.bidId], o = d.params, i = {};
                                i.cpm = e.cpm, i.requestId = e.bidId, i.currency = e.currency, i.mediaType = e.mediaType || l.d, i.ttl = 300, i.creativeId = 'c_' + e.bidId, i.netRevenue = !0, i.width = e.size.width, i.height = e.size.height, e.vastXml && (i.vastXml = e.vastXml, i.adResponse = { content: e.vastXml }), e.vastTag && (i.vastUrl = e.vastTag), e.mediaType === l.b ? i.ad = (r = e, a = d, n = f(!!(s = c).meta.stage), '<html>\n    <head></head>\n    <body>\n      <script async src="'.concat(n.pubTag, '"\n              data-canvas=""\n              data-noad-passback-listener=""\n              onload="window.ShowheroesTag=this"\n              data-player-host="').concat(n.vlHost, '"></script>\n      <div class="showheroes-spot"\n            data-debug="').concat(s.debug ? '1' : '', '"\n            data-player="').concat(a.playerId, '"\n            data-ad-vast-tag="').concat(r.vastTag, '"></div>\n    </body>\n  </html>')) : 'outstream' === e.context && ((t = g.a.install({
                                    id: e.bidId,
                                    url: '//',
                                    config: {
                                        playerId: d.playerId,
                                        width: e.size.width,
                                        height: e.size.height,
                                        vastUrl: e.vastTag,
                                        vastXml: e.vastXml,
                                        debug: c.debug,
                                        isStage: !!c.meta.stage,
                                        customRender: m.getBidIdParameter('customRender', o.outstreamOptions),
                                        slot: m.getBidIdParameter('slot', o.outstreamOptions),
                                        iframe: m.getBidIdParameter('iframe', o.outstreamOptions)
                                    }
                                })).setRender(v), i.renderer = t), p.push(i);
                            }), p;
                        }(e.body, t.data);
                    },
                    getUserSyncs: function (e, t) {
                        var r = [];
                        if (!t.length || !t[0].body.userSync)
                            return r;
                        var a = t[0].body.userSync;
                        return e.iframeEnabled && (a.iframes || []).forEach(function (e) {
                            r.push({
                                type: 'iframe',
                                url: e
                            });
                        }), e.pixelEnabled && (a.pixels || []).forEach(function (e) {
                            r.push({
                                type: 'image',
                                url: e
                            });
                        }), r;
                    }
                };
                function v(e) {
                    var t = function (e) {
                        var t = f(m.getBidIdParameter('isStage', e.renderer.config)), r = window.document.createDocumentFragment(), a = Object(n.a)(t.pubTag, 'outstream', function () {
                                window.ShowheroesTag = this;
                            });
                        a.setAttribute('data-player-host', t.vlHost);
                        var s = window.document.createElement('div');
                        return s.setAttribute('class', 'showheroes-spot'), s.setAttribute('data-player', m.getBidIdParameter('playerId', e.renderer.config)), s.setAttribute('data-debug', m.getBidIdParameter('debug', e.renderer.config)), s.setAttribute('data-ad-vast-tag', m.getBidIdParameter('vastUrl', e.renderer.config)), s.setAttribute('data-stream-type', 'outstream'), r.appendChild(s), r.appendChild(a), r;
                    }(e);
                    if ('function' == typeof e.renderer.config.customRender)
                        e.renderer.config.customRender(e, t);
                    else
                        try {
                            var r = m.getBidIdParameter('iframe', e.renderer.config);
                            if (r && 'IFRAME' === window.document.getElementById(r).nodeName) {
                                var a = window.document.getElementById(r);
                                return void (a.contentDocument || a.contentWindow && a.contentWindow.document).body.appendChild(t);
                            }
                            var s = m.getBidIdParameter('slot', e.renderer.config) || e.adUnitCode;
                            s && window.document.getElementById(s) ? window.document.getElementById(s).appendChild(t) : s && m.logError('[ShowHeroes][renderer] Error: spot not found');
                        } catch (e) {
                            m.logError('[ShowHeroes][renderer] Error:' + e.message);
                        }
                }
                function y(e) {
                    return e && e.length ? Array.isArray(e[0]) ? e : [e] : [];
                }
                Object(a.registerBidder)(c);
            }
        }, [626]);
        pbjsChunk([15], {
            21: function (e, r, t) {
                'use strict';
                r.b = function (e) {
                    var r = [];
                    for (var t in e) {
                        var a;
                        e.hasOwnProperty(t) && ('pubProvidedId' === t ? r = r.concat(e.pubProvidedId) : (a = function (e, r) {
                            var t = c[r];
                            if (t && e) {
                                var a = {};
                                a.source = t.source;
                                var i = s.isFn(t.getValue) ? t.getValue(e) : e;
                                if (s.isStr(i)) {
                                    var n, d, o = {
                                            id: i,
                                            atype: t.atype
                                        };
                                    return !s.isFn(t.getUidExt) || (n = t.getUidExt(e)) && (o.ext = n), a.uids = [o], !s.isFn(t.getEidExt) || (d = t.getEidExt(e)) && (a.ext = d), a;
                                }
                            }
                            return null;
                        }(e[t], t)) && r.push(a));
                    }
                    return r;
                }, r.a = function (e) {
                    var t = [];
                    return e.filter(function (e) {
                        return s.isPlainObject(e.idObj) && Object.keys(e.idObj).length;
                    }).forEach(function (r) {
                        Object.keys(r.idObj).forEach(function (e) {
                            s.deepAccess(r, 'config.bidders') && Array.isArray(r.config.bidders) && s.deepAccess(c, e + '.source') && t.push({
                                source: c[e].source,
                                bidders: r.config.bidders
                            });
                        });
                    }), t;
                };
                var s = t(0), c = {
                        intentIqId: {
                            source: 'intentiq.com',
                            atype: 1
                        },
                        pubcid: {
                            source: 'pubcid.org',
                            atype: 1
                        },
                        tdid: {
                            source: 'adserver.org',
                            atype: 1,
                            getUidExt: function () {
                                return { rtiPartner: 'TDID' };
                            }
                        },
                        id5id: {
                            getValue: function (e) {
                                return e.uid;
                            },
                            source: 'id5-sync.com',
                            atype: 1,
                            getUidExt: function (e) {
                                if (e.ext)
                                    return e.ext;
                            }
                        },
                        parrableId: {
                            source: 'parrable.com',
                            atype: 1,
                            getValue: function (e) {
                                return e.eid ? e.eid : e.ccpaOptout ? '' : null;
                            },
                            getUidExt: function (e) {
                                var r = s.pick(e, [
                                    'ibaOptout',
                                    'ccpaOptout'
                                ]);
                                if (Object.keys(r).length)
                                    return r;
                            }
                        },
                        idl_env: {
                            source: 'liveramp.com',
                            atype: 3
                        },
                        lipb: {
                            getValue: function (e) {
                                return e.lipbid;
                            },
                            source: 'liveintent.com',
                            atype: 3,
                            getEidExt: function (e) {
                                if (Array.isArray(e.segments) && e.segments.length)
                                    return { segments: e.segments };
                            }
                        },
                        britepoolid: {
                            source: 'britepool.com',
                            atype: 3
                        },
                        dmdId: {
                            source: 'hcn.health',
                            atype: 3
                        },
                        lotamePanoramaId: {
                            source: 'crwdcntrl.net',
                            atype: 1
                        },
                        criteoId: {
                            source: 'criteo.com',
                            atype: 1
                        },
                        merkleId: {
                            source: 'merkleinc.com',
                            atype: 3,
                            getValue: function (e) {
                                return e.id;
                            },
                            getUidExt: function (e) {
                                return e && e.keyID ? { keyID: e.keyID } : void 0;
                            }
                        },
                        netId: {
                            source: 'netid.de',
                            atype: 1
                        },
                        IDP: {
                            source: 'zeotap.com',
                            atype: 1
                        },
                        haloId: {
                            source: 'audigent.com',
                            atype: 1
                        },
                        quantcastId: {
                            source: 'quantcast.com',
                            atype: 1
                        },
                        nextrollId: {
                            source: 'nextroll.com',
                            atype: 1
                        },
                        idx: {
                            source: 'idx.lat',
                            atype: 1
                        },
                        connectid: {
                            source: 'verizonmedia.com',
                            atype: 3
                        },
                        fabrickId: {
                            source: 'neustar.biz',
                            atype: 1
                        },
                        mwOpenLinkId: {
                            source: 'mediawallahscript.com',
                            atype: 1
                        },
                        tapadId: {
                            source: 'tapad.com',
                            atype: 1
                        },
                        novatiq: {
                            getValue: function (e) {
                                return e.snowflake;
                            },
                            source: 'novatiq.com',
                            atype: 1
                        },
                        uid2: {
                            source: 'uidapi.com',
                            atype: 3,
                            getValue: function (e) {
                                return e.id;
                            }
                        },
                        deepintentId: {
                            source: 'deepintent.com',
                            atype: 3
                        },
                        admixerId: {
                            source: 'admixer.net',
                            atype: 3
                        },
                        amxId: {
                            source: 'amxrtb.com',
                            atype: 1
                        }
                    };
            },
            636: function (e, r, t) {
                e.exports = t(637);
            },
            637: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'spec', function () {
                    return l;
                });
                var c = t(0), p = t(2), u = t(3), a = t(1), m = t(21), l = {
                        code: 'smartadserver',
                        gvlid: 45,
                        aliases: ['smart'],
                        supportedMediaTypes: [
                            p.b,
                            p.d
                        ],
                        isBidRequestValid: function (e) {
                            return !!(e.params && e.params.siteId && e.params.pageId && e.params.formatId);
                        },
                        serializeSupplyChain: function (e) {
                            if (!e || !e.nodes)
                                return null;
                            var t = [
                                'asi',
                                'sid',
                                'hp',
                                'rid',
                                'name',
                                'domain'
                            ];
                            return ''.concat(e.ver, ',').concat(e.complete, '!') + e.nodes.map(function (r) {
                                return t.map(function (e) {
                                    return r[e] ? encodeURIComponent(r[e]) : '';
                                }).join(',');
                            }).join('!');
                        },
                        buildRequests: function (e, s) {
                            return e.map(function (e) {
                                var r = {
                                        siteid: e.params.siteId,
                                        pageid: e.params.pageId,
                                        formatid: e.params.formatId,
                                        currencyCode: u.b.getConfig('currency.adServerCurrency'),
                                        bidfloor: e.params.bidfloor || 0,
                                        targeting: e.params.target && '' !== e.params.target ? e.params.target : void 0,
                                        buid: e.params.buId && '' !== e.params.buId ? e.params.buId : void 0,
                                        appname: e.params.appName && '' !== e.params.appName ? e.params.appName : void 0,
                                        ckid: e.params.ckId || 0,
                                        tagId: e.adUnitCode,
                                        pageDomain: s && s.refererInfo && s.refererInfo.referer ? s.refererInfo.referer : void 0,
                                        transactionId: e.transactionId,
                                        timeout: u.b.getConfig('bidderTimeout'),
                                        bidId: e.bidId,
                                        prebidVersion: '5.1.0',
                                        schain: l.serializeSupplyChain(e.schain)
                                    }, t = c.deepAccess(e, 'mediaTypes.video');
                                if (t) {
                                    if (!t || 'instream' !== t.context && 'outstream' !== t.context)
                                        return {};
                                    var a = null;
                                    e.params.video && e.params.video.protocol ? a = e.params.video.protocol : Array.isArray(t.protocols) && (a = Math.max.apply(Math, t.protocols));
                                    var i = 2;
                                    e.params.video && e.params.video.startDelay ? i = e.params.video.startDelay : 0 == t.startdelay ? i = 1 : -1 == t.startdelay ? i = 2 : -2 == t.startdelay && (i = 3);
                                    var n = t.playerSize[0];
                                    r.isVideo = 'instream' === t.context, r.mediaType = p.d, r.videoData = {
                                        videoProtocol: a,
                                        playerWidth: n[0],
                                        playerHeight: n[1],
                                        adBreak: i
                                    };
                                } else {
                                    var d = c.deepAccess(e, 'mediaTypes.banner');
                                    r.sizes = d.sizes.map(function (e) {
                                        return {
                                            w: e[0],
                                            h: e[1]
                                        };
                                    });
                                }
                                s && s.gdprConsent && (r.addtl_consent = s.gdprConsent.addtlConsent, r.gdpr_consent = s.gdprConsent.consentString, r.gdpr = s.gdprConsent.gdprApplies), e && e.userId && (r.eids = Object(m.b)(e.userId)), s && s.uspConsent && (r.us_privacy = s.uspConsent);
                                var o = JSON.stringify(r);
                                return {
                                    method: 'POST',
                                    url: (void 0 !== e.params.domain ? e.params.domain : 'https://prg.smartadserver.com') + '/prebid/v1',
                                    data: o
                                };
                            });
                        },
                        interpretResponse: function (e, r) {
                            var t, a, i = [], n = e.body;
                            try {
                                n && !n.isNoAd && (a = {
                                    requestId: (t = JSON.parse(r.data)).bidId,
                                    cpm: n.cpm,
                                    width: n.width,
                                    height: n.height,
                                    creativeId: n.creativeId,
                                    dealId: n.dealId,
                                    currency: n.currency,
                                    netRevenue: n.isNetCpm,
                                    ttl: n.ttl,
                                    dspPixels: n.dspPixels,
                                    meta: { advertiserDomains: n.adomain ? n.adomain : [] }
                                }, t.mediaType === p.d ? (a.mediaType = p.d, a.vastUrl = n.adUrl, a.vastXml = n.ad, a.content = n.ad) : (a.adUrl = n.adUrl, a.ad = n.ad), i.push(a));
                            } catch (e) {
                                c.logError('Error while parsing smart server response', e);
                            }
                            return i;
                        },
                        getUserSyncs: function (e, r) {
                            var t = [];
                            return e.iframeEnabled && 0 < r.length ? t.push({
                                type: 'iframe',
                                url: r[0].body.cSyncUrl
                            }) : e.pixelEnabled && 0 < r.length && void 0 !== r[0].body.dspPixels && r[0].body.dspPixels.forEach(function (e) {
                                t.push({
                                    type: 'image',
                                    url: e
                                });
                            }), t;
                        }
                    };
                Object(a.registerBidder)(l);
            }
        }, [636]);
        pbjsChunk([11], {
            21: function (e, t, r) {
                'use strict';
                t.b = function (e) {
                    var t = [];
                    for (var r in e) {
                        var i;
                        e.hasOwnProperty(r) && ('pubProvidedId' === r ? t = t.concat(e.pubProvidedId) : (i = function (e, t) {
                            var r = u[t];
                            if (r && e) {
                                var i = {};
                                i.source = r.source;
                                var n = s.isFn(r.getValue) ? r.getValue(e) : e;
                                if (s.isStr(n)) {
                                    var a, o, d = {
                                            id: n,
                                            atype: r.atype
                                        };
                                    return !s.isFn(r.getUidExt) || (a = r.getUidExt(e)) && (d.ext = a), i.uids = [d], !s.isFn(r.getEidExt) || (o = r.getEidExt(e)) && (i.ext = o), i;
                                }
                            }
                            return null;
                        }(e[r], r)) && t.push(i));
                    }
                    return t;
                }, t.a = function (e) {
                    var r = [];
                    return e.filter(function (e) {
                        return s.isPlainObject(e.idObj) && Object.keys(e.idObj).length;
                    }).forEach(function (t) {
                        Object.keys(t.idObj).forEach(function (e) {
                            s.deepAccess(t, 'config.bidders') && Array.isArray(t.config.bidders) && s.deepAccess(u, e + '.source') && r.push({
                                source: u[e].source,
                                bidders: t.config.bidders
                            });
                        });
                    }), r;
                };
                var s = r(0), u = {
                        intentIqId: {
                            source: 'intentiq.com',
                            atype: 1
                        },
                        pubcid: {
                            source: 'pubcid.org',
                            atype: 1
                        },
                        tdid: {
                            source: 'adserver.org',
                            atype: 1,
                            getUidExt: function () {
                                return { rtiPartner: 'TDID' };
                            }
                        },
                        id5id: {
                            getValue: function (e) {
                                return e.uid;
                            },
                            source: 'id5-sync.com',
                            atype: 1,
                            getUidExt: function (e) {
                                if (e.ext)
                                    return e.ext;
                            }
                        },
                        parrableId: {
                            source: 'parrable.com',
                            atype: 1,
                            getValue: function (e) {
                                return e.eid ? e.eid : e.ccpaOptout ? '' : null;
                            },
                            getUidExt: function (e) {
                                var t = s.pick(e, [
                                    'ibaOptout',
                                    'ccpaOptout'
                                ]);
                                if (Object.keys(t).length)
                                    return t;
                            }
                        },
                        idl_env: {
                            source: 'liveramp.com',
                            atype: 3
                        },
                        lipb: {
                            getValue: function (e) {
                                return e.lipbid;
                            },
                            source: 'liveintent.com',
                            atype: 3,
                            getEidExt: function (e) {
                                if (Array.isArray(e.segments) && e.segments.length)
                                    return { segments: e.segments };
                            }
                        },
                        britepoolid: {
                            source: 'britepool.com',
                            atype: 3
                        },
                        dmdId: {
                            source: 'hcn.health',
                            atype: 3
                        },
                        lotamePanoramaId: {
                            source: 'crwdcntrl.net',
                            atype: 1
                        },
                        criteoId: {
                            source: 'criteo.com',
                            atype: 1
                        },
                        merkleId: {
                            source: 'merkleinc.com',
                            atype: 3,
                            getValue: function (e) {
                                return e.id;
                            },
                            getUidExt: function (e) {
                                return e && e.keyID ? { keyID: e.keyID } : void 0;
                            }
                        },
                        netId: {
                            source: 'netid.de',
                            atype: 1
                        },
                        IDP: {
                            source: 'zeotap.com',
                            atype: 1
                        },
                        haloId: {
                            source: 'audigent.com',
                            atype: 1
                        },
                        quantcastId: {
                            source: 'quantcast.com',
                            atype: 1
                        },
                        nextrollId: {
                            source: 'nextroll.com',
                            atype: 1
                        },
                        idx: {
                            source: 'idx.lat',
                            atype: 1
                        },
                        connectid: {
                            source: 'verizonmedia.com',
                            atype: 3
                        },
                        fabrickId: {
                            source: 'neustar.biz',
                            atype: 1
                        },
                        mwOpenLinkId: {
                            source: 'mediawallahscript.com',
                            atype: 1
                        },
                        tapadId: {
                            source: 'tapad.com',
                            atype: 1
                        },
                        novatiq: {
                            getValue: function (e) {
                                return e.snowflake;
                            },
                            source: 'novatiq.com',
                            atype: 1
                        },
                        uid2: {
                            source: 'uidapi.com',
                            atype: 3,
                            getValue: function (e) {
                                return e.id;
                            }
                        },
                        deepintentId: {
                            source: 'deepintent.com',
                            atype: 3
                        },
                        admixerId: {
                            source: 'admixer.net',
                            atype: 3
                        },
                        amxId: {
                            source: 'amxrtb.com',
                            atype: 1
                        }
                    };
            },
            652: function (e, t, r) {
                e.exports = r(653);
            },
            653: function (e, t, r) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), r.d(t, 'spec', function () {
                    return n;
                });
                var l = r(0), i = r(1), a = r(2), m = r(21), f = r(3), n = {
                        code: 'sovrn',
                        supportedMediaTypes: [a.b],
                        gvlid: 13,
                        isBidRequestValid: function (e) {
                            return !(!e.params.tagid || isNaN(parseFloat(e.params.tagid)) || !isFinite(e.params.tagid));
                        },
                        buildRequests: function (e, t) {
                            try {
                                var o, d, s, u, c = [], p = [];
                                l._each(e, function (e) {
                                    !s && e.userId && (s = Object(m.b)(e.userId)).forEach(function (e) {
                                        e.uids && e.uids[0] && ('criteo.com' === e.source && (u = e.uids[0].id), p.push({
                                            source: e.source,
                                            uid: e.uids[0].id
                                        }));
                                    }), e.schain && (d = d || e.schain), o = o || l.getBidIdParameter('iv', e.params);
                                    var t = e.mediaTypes && e.mediaTypes.banner && e.mediaTypes.banner.sizes || e.sizes, r = (t = (t = l.isArray(t) && l.isArray(t[0]) ? t : [t]).filter(function (e) {
                                            return l.isArray(e);
                                        })).map(function (e) {
                                            return {
                                                w: parseInt(e[0], 10),
                                                h: parseInt(e[1], 10)
                                            };
                                        }), i = e.getFloor && 'function' == typeof e.getFloor ? e.getFloor({
                                            currency: 'USD',
                                            mediaType: 'banner',
                                            size: '*'
                                        }) : {};
                                    i.floor = i.floor || l.getBidIdParameter('bidfloor', e.params);
                                    var n = {
                                        adunitcode: e.adUnitCode,
                                        id: e.bidId,
                                        banner: {
                                            format: r,
                                            w: 1,
                                            h: 1
                                        },
                                        tagid: String(l.getBidIdParameter('tagid', e.params)),
                                        bidfloor: i.floor
                                    };
                                    n.ext = l.getBidIdParameter('ext', e.ortb2Imp) || void 0;
                                    var a = l.getBidIdParameter('segments', e.params);
                                    a && (n.ext = n.ext || {}, n.ext.deals = a.split(',').map(function (e) {
                                        return e.trim();
                                    })), c.push(n);
                                });
                                var r = f.b.getConfig('ortb2') || {}, i = r.site || {};
                                i.page = t.refererInfo.referer, i.domain = l.parseUrl(i.page).hostname;
                                var n = {
                                    id: l.getUniqueIdentifierStr(),
                                    imp: c,
                                    site: i,
                                    user: r.user || {}
                                };
                                d && (n.source = { ext: { schain: d } }), t.gdprConsent && (l.deepSetValue(n, 'regs.ext.gdpr', +t.gdprConsent.gdprApplies), l.deepSetValue(n, 'user.ext.consent', t.gdprConsent.consentString)), t.uspConsent && l.deepSetValue(n, 'regs.ext.us_privacy', t.uspConsent), s && (l.deepSetValue(n, 'user.ext.eids', s), l.deepSetValue(n, 'user.ext.tpid', p), u && l.deepSetValue(n, 'user.ext.prebid_criteoid', u));
                                var a = 'https://ap.lijit.com/rtb/bid?src=prebid_prebid_5.1.0';
                                return o && (a += '&iv='.concat(o)), {
                                    method: 'POST',
                                    url: a,
                                    data: JSON.stringify(n),
                                    options: { contentType: 'text/plain' }
                                };
                            } catch (e) {
                                l.logError('Could not build bidrequest, error deatils:', e);
                            }
                        },
                        interpretResponse: function (e) {
                            var t = e.body, r = t.id, i = t.seatbid;
                            try {
                                var n = [];
                                return r && i && 0 < i.length && i[0].bid && 0 < i[0].bid.length && i[0].bid.map(function (e) {
                                    n.push({
                                        requestId: e.impid,
                                        cpm: parseFloat(e.price),
                                        width: parseInt(e.w),
                                        height: parseInt(e.h),
                                        creativeId: e.crid || e.id,
                                        dealId: e.dealid || null,
                                        currency: 'USD',
                                        netRevenue: !0,
                                        mediaType: a.b,
                                        ad: decodeURIComponent(''.concat(e.adm, '<img src="').concat(e.nurl, '">')),
                                        ttl: e.ext && e.ext.ttl || 90,
                                        meta: { advertiserDomains: e && e.adomain ? e.adomain : [] }
                                    });
                                }), n;
                            } catch (e) {
                                l.logError('Could not intrepret bidresponse, error deatils:', e);
                            }
                        },
                        getUserSyncs: function (e, t, r, i) {
                            try {
                                var n, a, o = [];
                                return t && 0 !== t.length && (e.iframeEnabled && (n = t.filter(function (e) {
                                    return l.deepAccess(e, 'body.ext.iid');
                                }).map(function (e) {
                                    return e.body.ext.iid;
                                }), a = [], r && r.gdprApplies && 'string' == typeof r.consentString && a.push([
                                    'gdpr_consent',
                                    r.consentString
                                ]), i && a.push([
                                    'us_privacy',
                                    i
                                ]), n[0] && (a.push([
                                    'informer',
                                    n[0]
                                ]), o.push({
                                    type: 'iframe',
                                    url: 'https://ap.lijit.com/beacon?' + a.map(function (e) {
                                        return e.join('=');
                                    }).join('&')
                                }))), e.pixelEnabled && t.filter(function (e) {
                                    return l.deepAccess(e, 'body.ext.sync.pixels');
                                }).reduce(function (e, t) {
                                    return e.concat(t.body.ext.sync.pixels);
                                }, []).map(function (e) {
                                    return e.url;
                                }).forEach(function (e) {
                                    return o.push({
                                        type: 'image',
                                        url: e
                                    });
                                })), o;
                            } catch (e) {
                                return [];
                            }
                        }
                    };
                Object(i.registerBidder)(n);
            }
        }, [652]);
        pbjsChunk([98], {
            654: function (e, t, r) {
                e.exports = r(655);
            },
            655: function (e, t, r) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), r.d(t, 'GOOGLE_CONSENT', function () {
                    return B;
                }), r.d(t, 'spec', function () {
                    return n;
                });
                var I = r(0), P = r(3), c = r(13), a = r(1), u = r(2);
                function d(e) {
                    return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var i = 'spotx', B = {
                        consented_providers: [
                            '3',
                            '7',
                            '11',
                            '12',
                            '15',
                            '20',
                            '22',
                            '35',
                            '43',
                            '46',
                            '48',
                            '55',
                            '57',
                            '61',
                            '62',
                            '66',
                            '70',
                            '80',
                            '83',
                            '85',
                            '86',
                            '89',
                            '93',
                            '108',
                            '122',
                            '124',
                            '125',
                            '126',
                            '131',
                            '134',
                            '135',
                            '136',
                            '143',
                            '144',
                            '147',
                            '149',
                            '153',
                            '154',
                            '159',
                            '161',
                            '162',
                            '165',
                            '167',
                            '171',
                            '178',
                            '184',
                            '188',
                            '192',
                            '195',
                            '196',
                            '202',
                            '209',
                            '211',
                            '218',
                            '221',
                            '228',
                            '229',
                            '230',
                            '236',
                            '239',
                            '241',
                            '253',
                            '255',
                            '259',
                            '266',
                            '271',
                            '272',
                            '274',
                            '286',
                            '291',
                            '294',
                            '303',
                            '308',
                            '310',
                            '311',
                            '313',
                            '314',
                            '316',
                            '317',
                            '322',
                            '323',
                            '327',
                            '336',
                            '338',
                            '340',
                            '348',
                            '350',
                            '358',
                            '359',
                            '363',
                            '367',
                            '370',
                            '371',
                            '384',
                            '385',
                            '389',
                            '393',
                            '394',
                            '397',
                            '398',
                            '407',
                            '414',
                            '415',
                            '424',
                            '429',
                            '430',
                            '432',
                            '436',
                            '438',
                            '440',
                            '442',
                            '443',
                            '445',
                            '448',
                            '449',
                            '453',
                            '459',
                            '479',
                            '482',
                            '486',
                            '491',
                            '492',
                            '494',
                            '495',
                            '503',
                            '505',
                            '510',
                            '522',
                            '523',
                            '528',
                            '537',
                            '540',
                            '550',
                            '559',
                            '560',
                            '568',
                            '571',
                            '574',
                            '575',
                            '576',
                            '584',
                            '585',
                            '587',
                            '588',
                            '590',
                            '591',
                            '592',
                            '595',
                            '609',
                            '621',
                            '624',
                            '723',
                            '725',
                            '733',
                            '737',
                            '776',
                            '780',
                            '782',
                            '787',
                            '797',
                            '798',
                            '802',
                            '803',
                            '814',
                            '817',
                            '820',
                            '821',
                            '827',
                            '829',
                            '839',
                            '853',
                            '864',
                            '867',
                            '874',
                            '899',
                            '904',
                            '922',
                            '926',
                            '931',
                            '932',
                            '933',
                            '938',
                            '955',
                            '973',
                            '976',
                            '979',
                            '981',
                            '985',
                            '987',
                            '991',
                            '1003',
                            '1024',
                            '1025',
                            '1027',
                            '1028',
                            '1029',
                            '1033',
                            '1034',
                            '1040',
                            '1047',
                            '1048',
                            '1051',
                            '1052',
                            '1053',
                            '1054',
                            '1062',
                            '1063',
                            '1067',
                            '1072',
                            '1085',
                            '1092',
                            '1095',
                            '1097',
                            '1099',
                            '1100',
                            '1107',
                            '1126',
                            '1127',
                            '1143',
                            '1149',
                            '1152',
                            '1162',
                            '1166',
                            '1167',
                            '1170',
                            '1171',
                            '1172',
                            '1188',
                            '1192',
                            '1199',
                            '1201',
                            '1204',
                            '1205',
                            '1211',
                            '1212',
                            '1215',
                            '1220',
                            '1225',
                            '1226',
                            '1227',
                            '1230',
                            '1232',
                            '1236',
                            '1241',
                            '1248',
                            '1250',
                            '1252',
                            '1268',
                            '1275',
                            '1276',
                            '1284',
                            '1286',
                            '1298',
                            '1301',
                            '1307',
                            '1312',
                            '1313',
                            '1317',
                            '1329',
                            '1336',
                            '1344',
                            '1345',
                            '1356',
                            '1362',
                            '1365',
                            '1375',
                            '1403',
                            '1409',
                            '1411',
                            '1415',
                            '1416',
                            '1419',
                            '1423',
                            '1440',
                            '1442',
                            '1449',
                            '1451',
                            '1455',
                            '1456',
                            '1468',
                            '1496',
                            '1503',
                            '1509',
                            '1512',
                            '1514',
                            '1517',
                            '1520',
                            '1525',
                            '1540',
                            '1547',
                            '1548',
                            '1555',
                            '1558',
                            '1570',
                            '1575',
                            '1577',
                            '1579',
                            '1583',
                            '1584',
                            '1591',
                            '1598',
                            '1603',
                            '1608',
                            '1613',
                            '1616',
                            '1626',
                            '1631',
                            '1633',
                            '1638',
                            '1642',
                            '1648',
                            '1651',
                            '1652',
                            '1653',
                            '1660',
                            '1665',
                            '1667',
                            '1669',
                            '1671',
                            '1674',
                            '1677',
                            '1678',
                            '1682',
                            '1684',
                            '1697',
                            '1703',
                            '1705',
                            '1716',
                            '1720',
                            '1721',
                            '1722',
                            '1725',
                            '1732',
                            '1733',
                            '1735',
                            '1739',
                            '1741',
                            '1745',
                            '1750',
                            '1753',
                            '1760',
                            '1765',
                            '1769',
                            '1776',
                            '1780',
                            '1782',
                            '1786',
                            '1791',
                            '1794',
                            '1799',
                            '1800',
                            '1801',
                            '1810',
                            '1827',
                            '1831',
                            '1832',
                            '1834',
                            '1837',
                            '1840',
                            '1843',
                            '1844',
                            '1845',
                            '1858',
                            '1859',
                            '1863',
                            '1866',
                            '1870',
                            '1872',
                            '1875',
                            '1878',
                            '1880',
                            '1882',
                            '1883',
                            '1889',
                            '1892',
                            '1896',
                            '1898',
                            '1899',
                            '1902',
                            '1905',
                            '1911',
                            '1922',
                            '1928',
                            '1929',
                            '1934',
                            '1942',
                            '1943',
                            '1944',
                            '1945',
                            '1958',
                            '1960',
                            '1962',
                            '1963',
                            '1964',
                            '1967',
                            '1968',
                            '1978',
                            '1985',
                            '1986',
                            '1987',
                            '1998',
                            '2003',
                            '2007',
                            '2012',
                            '2013',
                            '2027',
                            '2035',
                            '2038',
                            '2039',
                            '2044',
                            '2047',
                            '2052',
                            '2056',
                            '2059',
                            '2062',
                            '2064',
                            '2068',
                            '2070',
                            '2072',
                            '2078',
                            '2079',
                            '2084',
                            '2088',
                            '2090',
                            '2095',
                            '2100',
                            '2103',
                            '2107',
                            '2109',
                            '2113',
                            '2115',
                            '2121',
                            '2127',
                            '2130',
                            '2133',
                            '2137',
                            '2140',
                            '2141',
                            '2145',
                            '2147',
                            '2150',
                            '2156',
                            '2166',
                            '2170',
                            '2171',
                            '2176',
                            '2177',
                            '2179',
                            '2183',
                            '2186',
                            '2192',
                            '2198',
                            '2202',
                            '2205',
                            '2214',
                            '2216',
                            '2219',
                            '2220',
                            '2222',
                            '2223',
                            '2224',
                            '2225',
                            '2227',
                            '2228',
                            '2234',
                            '2238',
                            '2247',
                            '2251',
                            '2253',
                            '2262',
                            '2264',
                            '2271',
                            '2276',
                            '2278',
                            '2279',
                            '2282',
                            '2290',
                            '2292',
                            '2295',
                            '2299',
                            '2305',
                            '2306',
                            '2310',
                            '2311',
                            '2312',
                            '2315',
                            '2320',
                            '2325',
                            '2328',
                            '2331',
                            '2334',
                            '2335',
                            '2336',
                            '2337',
                            '2343',
                            '2346',
                            '2354',
                            '2357',
                            '2358',
                            '2359',
                            '2366',
                            '2370',
                            '2373',
                            '2376',
                            '2377',
                            '2380',
                            '2382',
                            '2387',
                            '2389',
                            '2392',
                            '2394',
                            '2400',
                            '2403',
                            '2405',
                            '2406',
                            '2407',
                            '2410',
                            '2411',
                            '2413',
                            '2414',
                            '2415',
                            '2416',
                            '2418',
                            '2422',
                            '2425',
                            '2427',
                            '2435',
                            '2437',
                            '2440',
                            '2441',
                            '2447',
                            '2453',
                            '2459',
                            '2461',
                            '2462',
                            '2464',
                            '2467',
                            '2468',
                            '2472',
                            '2477',
                            '2481',
                            '2484',
                            '2486',
                            '2492',
                            '2493',
                            '2496',
                            '2497',
                            '2498',
                            '2499',
                            '2504',
                            '2506',
                            '2510',
                            '2511',
                            '2512',
                            '2517',
                            '2526',
                            '2527',
                            '2531',
                            '2532',
                            '2534',
                            '2542',
                            '2544',
                            '2552',
                            '2555',
                            '2559',
                            '2563',
                            '2564',
                            '2567',
                            '2568',
                            '2569',
                            '2571',
                            '2572',
                            '2573',
                            '2575',
                            '2577',
                            '2579',
                            '2583',
                            '2584',
                            '2586',
                            '2589',
                            '2595',
                            '2596',
                            '2597',
                            '2601',
                            '2604',
                            '2605',
                            '2609',
                            '2610',
                            '2612',
                            '2614',
                            '2621',
                            '2622',
                            '2624',
                            '2628',
                            '2629',
                            '2632',
                            '2634',
                            '2636',
                            '2639',
                            '2643',
                            '2645',
                            '2646',
                            '2647',
                            '2649',
                            '2650',
                            '2651',
                            '2652',
                            '2656',
                            '2657',
                            '2658',
                            '2660',
                            '2661',
                            '2662',
                            '2663',
                            '2664',
                            '2669',
                            '2670',
                            '2673',
                            '2676',
                            '2677',
                            '2678',
                            '2681',
                            '2682',
                            '2684',
                            '2685',
                            '2686',
                            '2689',
                            '2690',
                            '2691',
                            '2695',
                            '2698',
                            '2699',
                            '2702',
                            '2704',
                            '2705',
                            '2706',
                            '2707',
                            '2709',
                            '2710',
                            '2713',
                            '2714',
                            '2727',
                            '2729',
                            '2739',
                            '2758',
                            '2765',
                            '2766',
                            '2767',
                            '2768',
                            '2770',
                            '2771',
                            '2772',
                            '2776',
                            '2777',
                            '2778',
                            '2779',
                            '2780',
                            '2783',
                            '2784',
                            '2786',
                            '2787',
                            '2791',
                            '2792',
                            '2793',
                            '2797',
                            '2798',
                            '2801',
                            '2802',
                            '2803',
                            '2805',
                            '2808',
                            '2809',
                            '2810',
                            '2811',
                            '2812',
                            '2813',
                            '2814',
                            '2817',
                            '2818',
                            '2824',
                            '2826',
                            '2827',
                            '2829',
                            '2830',
                            '2831',
                            '2832',
                            '2834',
                            '2836',
                            '2838',
                            '2840',
                            '2842',
                            '2843',
                            '2844',
                            '2850',
                            '2851',
                            '2852',
                            '2854',
                            '2858',
                            '2860',
                            '2862',
                            '2864',
                            '2865',
                            '2866',
                            '2867',
                            '2868',
                            '2869',
                            '2871'
                        ]
                    }, n = {
                        code: i,
                        gvlid: 165,
                        aliases: ['spotx'],
                        supportedMediaTypes: [u.d],
                        isBidRequestValid: function (e) {
                            if (e && 'object' !== d(e.params))
                                return I.logError(i + ': params is not defined or is incorrect in the bidder settings.'), !1;
                            if (!I.deepAccess(e, 'mediaTypes.video'))
                                return I.logError(i + ': mediaTypes.video is not present in the bidder settings.'), !1;
                            var t = I.deepAccess(e, 'mediaTypes.video.playerSize');
                            if (!t || !I.isArray(t))
                                return I.logError(i + ': mediaTypes.video.playerSize is not defined in the bidder settings.'), !1;
                            if (!I.getBidIdParameter('channel_id', e.params))
                                return I.logError(i + ': channel_id is not present in bidder params'), !1;
                            if (('outstream' == I.deepAccess(e, 'mediaTypes.video.context') || 'outstream' == I.deepAccess(e, 'params.ad_unit')) && !I.getBidIdParameter('outstream_function', e.params)) {
                                if (!I.getBidIdParameter('outstream_options', e.params))
                                    return I.logError(i + ': please define outstream_options parameter or override the default SpotX outstream rendering by defining your own Outstream function using field outstream_function.'), !1;
                                if (!I.getBidIdParameter('slot', e.params.outstream_options))
                                    return I.logError(i + ': please define parameter slot in outstream_options object in the configuration.'), !1;
                            }
                            return !0;
                        },
                        buildRequests: function (e, h) {
                            var y = h.refererInfo.referer, b = !!y.match(/^https:/);
                            return e.map(function (e) {
                                var t = I.getBidIdParameter('page', e.params) ? I.getBidIdParameter('page', e.params) : P.b.getConfig('pageUrl') ? P.b.getConfig('pageUrl') : y, r = I.getBidIdParameter('channel_id', e.params), a = null, d = I.deepAccess(e, 'mediaTypes.video.playerSize'), i = d[0][0], n = d[0][1], o = b || (I.getBidIdParameter('secure', e.params) ? 1 : 0), s = {
                                        sdk_name: 'Prebid 1+',
                                        versionOrtb: '2.3'
                                    };
                                if ('' != I.getBidIdParameter('hide_skin', e.params) && (s.hide_skin = +!!I.getBidIdParameter('hide_skin', e.params)), '' != I.getBidIdParameter('ad_volume', e.params) && (s.ad_volume = I.getBidIdParameter('ad_volume', e.params)), '' != I.getBidIdParameter('ad_unit', e.params) && (s.ad_unit = I.getBidIdParameter('ad_unit', e.params)), '' != I.getBidIdParameter('outstream_options', e.params) && (s.outstream_options = I.getBidIdParameter('outstream_options', e.params)), '' != I.getBidIdParameter('outstream_function', e.params) && (s.outstream_function = I.getBidIdParameter('outstream_function', e.params)), '' != I.getBidIdParameter('custom', e.params) && (s.custom = I.getBidIdParameter('custom', e.params)), '' != I.getBidIdParameter('pre_market_bids', e.params) && I.isArray(I.getBidIdParameter('pre_market_bids', e.params))) {
                                    var p = I.getBidIdParameter('pre_market_bids', e.params);
                                    for (var m in (s.pre_market_bids = [], p)) {
                                        var c = p[m], u = '';
                                        c.vast_url ? u = '<?xml version="1.0" encoding="utf-8"?><VAST version="2.0"><Ad><Wrapper><VASTAdTagURI>' + c.vast_url + '</VASTAdTagURI></Wrapper></Ad></VAST>' : c.vast_string && (u = c.vast_string), s.pre_market_bids.push({
                                            id: c.deal_id,
                                            seatbid: [{
                                                    bid: [{
                                                            impid: Date.now(),
                                                            dealid: c.deal_id,
                                                            price: c.price,
                                                            adm: u
                                                        }]
                                                }],
                                            cur: c.currency,
                                            ext: { event_log: [{}] }
                                        });
                                    }
                                }
                                var g = I.getBidIdParameter('mimes', e.params) || [
                                        'application/javascript',
                                        'video/mp4',
                                        'video/webm'
                                    ], _ = {
                                        id: e.bidId,
                                        secure: o,
                                        video: {
                                            w: i,
                                            h: n,
                                            ext: s,
                                            mimes: g
                                        }
                                    };
                                '' != I.getBidIdParameter('start_delay', e.params) && (_.video.startdelay = 0 + Boolean(I.getBidIdParameter('start_delay', e.params))), '' != I.getBidIdParameter('min_duration', e.params) && (_.video.minduration = I.getBidIdParameter('min_duration', e.params)), '' != I.getBidIdParameter('max_duration', e.params) && (_.video.maxduration = I.getBidIdParameter('max_duration', e.params)), '' != I.getBidIdParameter('placement_type', e.params) && (_.video.ext.placement = I.getBidIdParameter('placement_type', e.params)), '' != I.getBidIdParameter('position', e.params) && (_.video.ext.pos = I.getBidIdParameter('position', e.params)), e.crumbs && e.crumbs.pubcid && (a = e.crumbs.pubcid);
                                var l = navigator.language ? 'language' : 'userLanguage', v = {
                                        id: r,
                                        imp: _,
                                        site: {
                                            id: '',
                                            page: t,
                                            content: 'content'
                                        },
                                        device: {
                                            h: screen.height,
                                            w: screen.width,
                                            dnt: I.getDNT() ? 1 : 0,
                                            language: navigator[l].split('-')[0],
                                            make: navigator.vendor ? navigator.vendor : '',
                                            ua: navigator.userAgent
                                        },
                                        ext: { wrap_response: 1 }
                                    };
                                P.b.getConfig('cache') && P.b.getConfig('cache.url') && !0 === P.b.getConfig('cache.ignoreBidderCacheKey') && (v.ext.wrap_response = 0), I.getBidIdParameter('number_of_ads', e.params) && (v.ext.number_of_ads = I.getBidIdParameter('number_of_ads', e.params));
                                var f = {};
                                1 == I.getBidIdParameter('spotx_all_google_consent', e.params) && (f.consented_providers_settings = B), h && h.gdprConsent && (f.consent = h.gdprConsent.consentString, void 0 !== h.gdprConsent.gdprApplies && I.deepSetValue(v, 'regs.ext.gdpr', h.gdprConsent.gdprApplies ? 1 : 0)), h && h.uspConsent && I.deepSetValue(v, 'regs.ext.us_privacy', h.uspConsent), I.deepAccess(e, 'userId.id5id.uid') && (f.eids = f.eids || [], f.eids.push({
                                    source: 'id5-sync.com',
                                    uids: [{
                                            id: e.userId.id5id.uid,
                                            ext: e.userId.id5id.ext || {}
                                        }]
                                })), a && (f.fpc = a), e && e.schain && (v.source = { ext: { schain: e.schain } }), e && e.userId && e.userId.tdid && (f.eids = f.eids || [], f.eids.push({
                                    source: 'adserver.org',
                                    uids: [{
                                            id: e.userId.tdid,
                                            ext: { rtiPartner: 'TDID' }
                                        }]
                                })), I.isEmpty(f) || (v.user = { ext: f });
                                return {
                                    method: 'POST',
                                    url: 'https://search.spotxchange.com/openrtb/2.3/dados/' + r + '?src_sys=prebid',
                                    data: v,
                                    bidRequest: h
                                };
                            });
                        },
                        interpretResponse: function (e, s) {
                            var p = [], m = e.body;
                            return m && I.isArray(m.seatbid) && I._each(m.seatbid, function (e) {
                                I._each(e.bid, function (t) {
                                    var e = {};
                                    for (var r in s.bidRequest.bids)
                                        t.impid == s.bidRequest.bids[r].bidId && (e = s.bidRequest.bids[r]);
                                    I._each(e.params.pre_market_bids, function (e) {
                                        e.deal_id == t.id && (t.price = e.price, m.cur = e.currency);
                                    });
                                    var a = {
                                        requestId: e.bidId,
                                        currency: m.cur || 'USD',
                                        cpm: t.price,
                                        creativeId: t.crid || '',
                                        dealId: t.dealid || '',
                                        ttl: 360,
                                        netRevenue: !0,
                                        channel_id: m.id,
                                        mediaType: u.d,
                                        width: t.w,
                                        height: t.h
                                    };
                                    P.b.getConfig('cache') && P.b.getConfig('cache.url') && !0 === P.b.getConfig('cache.ignoreBidderCacheKey') ? a.vastXml = t.adm : (a.cache_key = t.ext.cache_key, a.vastUrl = 'https://search.spotxchange.com/ad/vast.html?key=' + t.ext.cache_key, a.videoCacheKey = t.ext.cache_key), a.meta = a.meta || {}, t && t.adomain && 0 < t.adomain.length && (a.meta.advertiserDomains = t.adomain);
                                    var d = I.deepAccess(e, 'mediaTypes.video.context'), i = I.deepAccess(e, 'params.ad_unit');
                                    if ('outstream' == d || 'outstream' == i) {
                                        var n = I.deepAccess(e, 'mediaTypes.video.playerSize'), o = c.a.install({
                                                id: 0,
                                                url: '/',
                                                config: {
                                                    adText: 'SpotX Outstream Video Ad via Prebid.js',
                                                    player_width: n[0][0],
                                                    player_height: n[0][1],
                                                    content_page_url: I.deepAccess(s, 'data.site.page'),
                                                    ad_mute: +!!I.deepAccess(e, 'params.ad_mute'),
                                                    hide_skin: +!!I.deepAccess(e, 'params.hide_skin'),
                                                    outstream_options: I.deepAccess(e, 'params.outstream_options'),
                                                    outstream_function: I.deepAccess(e, 'params.outstream_function')
                                                }
                                            });
                                        try {
                                            o.setRender(g), o.setEventHandlers({
                                                impression: function () {
                                                    return I.logMessage('SpotX outstream video impression event');
                                                },
                                                loaded: function () {
                                                    return I.logMessage('SpotX outstream video loaded event');
                                                },
                                                ended: function () {
                                                    I.logMessage('SpotX outstream renderer video event');
                                                }
                                            });
                                        } catch (e) {
                                            I.logWarn('Prebid Error calling setRender or setEventHandlers on renderer', e);
                                        }
                                        a.renderer = o;
                                    }
                                    p.push(a);
                                });
                            }), p;
                        }
                    };
                function g(e) {
                    var t = function (e) {
                        var t = I.getBidIdParameter('slot', e.renderer.config.outstream_options);
                        I.logMessage('[SPOTX][renderer] Handle SpotX outstream renderer');
                        var r = window.document.createElement('script');
                        r.type = 'text/javascript', r.src = 'https://js.spotx.tv/easi/v1/' + e.channel_id + '.js';
                        var a = {};
                        a['data-spotx_channel_id'] = '' + e.channel_id, a['data-spotx_vast_url'] = '' + e.vastUrl, a['data-spotx_content_page_url'] = e.renderer.config.content_page_url, a['data-spotx_ad_unit'] = 'incontent', I.logMessage('[SPOTX][renderer] Default behavior'), I.getBidIdParameter('ad_mute', e.renderer.config.outstream_options) && (a['data-spotx_ad_mute'] = '1'), a['data-spotx_collapse'] = '0', a['data-spotx_autoplay'] = '1', a['data-spotx_blocked_autoplay_override_mode'] = '1', a['data-spotx_video_slot_can_autoplay'] = '1';
                        var d, i, n, o, s, p, m = I.getBidIdParameter('playersize_auto_adapt', e.renderer.config.outstream_options);
                        m && I.isBoolean(m) && !0 === m && (d = e.width && I.isNumber(e.width) && e.height && I.isNumber(e.height) ? e.width / e.height : 4 / 3, i = window.document.getElementById(t).clientWidth, n = e.renderer.config.player_width, o = e.renderer.config.player_height, p = s = 0, i < n && (o = (n = i) / d), p = d <= 1 ? (s = Math.round(o * d), o) : (s = n, Math.round(n / d)), a['data-spotx_content_width'] = '' + s, a['data-spotx_content_height'] = '' + p);
                        var c = I.getBidIdParameter('custom_override', e.renderer.config.outstream_options);
                        if (c && I.isPlainObject(c))
                            for (var u in (I.logMessage('[SPOTX][renderer] Custom behavior.'), c))
                                c.hasOwnProperty(u) && ('channel_id' === u || 'vast_url' === u || 'content_page_url' === u || 'ad_unit' === u ? I.logWarn('[SPOTX][renderer] Custom behavior: following option cannot be overridden: ' + u) : a['data-spotx_' + u] = c[u]);
                        for (var g in a)
                            a.hasOwnProperty(g) && r.setAttribute(g, a[g]);
                        return r;
                    }(e);
                    if (null != e.renderer.config.outstream_function && 'function' == typeof e.renderer.config.outstream_function)
                        e.renderer.config.outstream_function(e, t);
                    else
                        try {
                            var r, a, d, i = I.getBidIdParameter('in_iframe', e.renderer.config.outstream_options);
                            i && 'IFRAME' == window.document.getElementById(i).nodeName ? (!(a = (r = window.document.getElementById(i)).contentDocument) && r.contentWindow && (a = r.contentWindow.document), a.body.appendChild(t)) : (d = I.getBidIdParameter('slot', e.renderer.config.outstream_options)) && window.document.getElementById(d) ? window.document.getElementById(d).appendChild(t) : window.document.getElementsByTagName('head')[0].appendChild(t);
                        } catch (e) {
                            I.logError('[SPOTX][renderer] Error:' + e.message);
                        }
                }
                Object(a.registerBidder)(n);
            }
        }, [654]);
        pbjsChunk([91], {
            670: function (e, t, r) {
                e.exports = r(671);
            },
            671: function (e, t, r) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), r.d(t, 'spec', function () {
                    return a;
                });
                var n = r(1), i = r(0), p = 12, c = 11, u = 0, g = 22, a = {
                        code: 'teads',
                        gvlid: 132,
                        supportedMediaTypes: [
                            'video',
                            'banner'
                        ],
                        isBidRequestValid: function (e) {
                            var t, r, n = !1;
                            return void 0 !== e.params && (t = s(i.getValue(e.params, 'placementId')), r = s(i.getValue(e.params, 'pageId')), n = t && r), n || i.logError('Teads placementId and pageId parameters are required. Bid aborted.'), n;
                        },
                        buildRequests: function (e, t) {
                            var r, n = e.map(m), a = {
                                    referrer: function (e) {
                                        var t = '';
                                        e && e.refererInfo && e.refererInfo.referer && (t = e.refererInfo.referer);
                                        return t;
                                    }(t),
                                    pageReferrer: document.referrer,
                                    networkBandwidth: (r = window.navigator) && r.connection && 0 <= r.connection.downlink ? r.connection.downlink.toString() : '',
                                    timeToFirstByte: function (e) {
                                        var t = e.performance || e.webkitPerformance || e.msPerformance || e.mozPerformance, r = t && 'function' == typeof t.getEntriesByType && '[object Function]' === Object.prototype.toString.call(t.getEntriesByType) && t.getEntriesByType('navigation')[0] && t.getEntriesByType('navigation')[0].responseStart && t.getEntriesByType('navigation')[0].requestStart && 0 < t.getEntriesByType('navigation')[0].responseStart && 0 < t.getEntriesByType('navigation')[0].requestStart && Math.round(t.getEntriesByType('navigation')[0].responseStart - t.getEntriesByType('navigation')[0].requestStart);
                                        if (r)
                                            return r.toString();
                                        var n = t && t.timing.responseStart && t.timing.requestStart && 0 < t.timing.responseStart && 0 < t.timing.requestStart && t.timing.responseStart - t.timing.requestStart;
                                        return n ? n.toString() : '';
                                    }(window),
                                    data: n,
                                    deviceWidth: screen.width,
                                    hb_version: '5.1.0'
                                };
                            e[0].schain && (a.schain = e[0].schain);
                            var i, s, o, d = t.gdprConsent;
                            return t && d && (i = 'boolean' == typeof d.gdprApplies, s = 'string' == typeof d.consentString, o = i ? function (e, t, r) {
                                var n = p;
                                e ? function (e, t) {
                                    return e && 1 === t ? e.hasGlobalScope || e.hasGlobalConsent : !(!e || 2 !== t) && !e.isServiceSpecific;
                                }(t, r) && (n = c) : n = u;
                                return n;
                            }(d.gdprApplies, d.vendorData, d.apiVersion) : g, a.gdpr_iab = {
                                consent: s ? d.consentString : '',
                                status: o,
                                apiVersion: d.apiVersion
                            }), t && t.uspConsent && (a.us_privacy = t.uspConsent), {
                                method: 'POST',
                                url: 'https://a.teads.tv/hb/bid-request',
                                data: JSON.stringify(a)
                            };
                        },
                        interpretResponse: function (e) {
                            var r = [];
                            return (e = e.body).responses && e.responses.forEach(function (e) {
                                var t = {
                                    cpm: e.cpm,
                                    width: e.width,
                                    height: e.height,
                                    currency: e.currency,
                                    netRevenue: !0,
                                    ttl: e.ttl,
                                    meta: { advertiserDomains: e && e.adomain ? e.adomain : [] },
                                    ad: e.ad,
                                    requestId: e.bidId,
                                    creativeId: e.creativeId,
                                    placementId: e.placementId
                                };
                                e.dealId && (t.dealId = e.dealId), r.push(t);
                            }), r;
                        }
                    };
                function m(e) {
                    var t, r = {}, n = i.getValue(e.params, 'placementId'), a = i.getValue(e.params, 'pageId');
                    return r.sizes = (t = e, i.parseSizesInput(function (e) {
                        var t = i.deepAccess(e, 'mediaTypes.video.playerSize'), r = i.deepAccess(e, 'mediaTypes.video.sizes'), n = i.deepAccess(e, 'mediaTypes.banner.sizes');
                        return i.isArray(n) || i.isArray(t) || i.isArray(r) ? [
                            n,
                            r,
                            t
                        ].reduce(function (t, e) {
                            return i.isArray(e) && (i.isArray(e[0]) ? e.forEach(function (e) {
                                t.push(e);
                            }) : t.push(e)), t;
                        }, []) : e.sizes;
                    }(t))), r.bidId = i.getBidIdParameter('bidId', e), r.bidderRequestId = i.getBidIdParameter('bidderRequestId', e), r.placementId = parseInt(n, 10), r.pageId = parseInt(a, 10), r.adUnitCode = i.getBidIdParameter('adUnitCode', e), r.auctionId = i.getBidIdParameter('auctionId', e), r.transactionId = i.getBidIdParameter('transactionId', e), r;
                }
                function s(e) {
                    return 0 < parseInt(e);
                }
                Object(n.registerBidder)(a);
            }
        }, [670]);
        pbjsChunk([78], {
            700: function (r, e, t) {
                r.exports = t(701);
            },
            701: function (r, e, t) {
                'use strict';
                Object.defineProperty(e, '__esModule', { value: !0 }), t.d(e, 'unifiedIdSubmodule', function () {
                    return u;
                });
                var o = t(0), i = t(4), n = t(10), d = 'unifiedId', u = {
                        name: d,
                        gvlid: 21,
                        decode: function (r) {
                            return r && 'string' == typeof r.TDID ? { tdid: r.TDID } : void 0;
                        },
                        getId: function (r) {
                            var e = r && r.params || {};
                            if (e && ('string' == typeof e.partner || 'string' == typeof e.url)) {
                                var n = e.url || 'https://match.adsrvr.org/track/rid?ttd_pid='.concat(e.partner, '&fmt=json');
                                return {
                                    callback: function (t) {
                                        var r = {
                                            success: function (r) {
                                                var e;
                                                if (r)
                                                    try {
                                                        e = JSON.parse(r);
                                                    } catch (r) {
                                                        o.logError(r);
                                                    }
                                                t(e);
                                            },
                                            error: function (r) {
                                                o.logError(''.concat(d, ': ID fetch encountered an error'), r), t();
                                            }
                                        };
                                        Object(i.a)(n, r, void 0, {
                                            method: 'GET',
                                            withCredentials: !0
                                        });
                                    }
                                };
                            }
                            o.logError('User ID - unifiedId submodule requires either partner or url to be defined');
                        }
                    };
                Object(n.e)('userId', u);
            }
        }, [700]);
        pbjsChunk([7], {
            21: function (e, t, n) {
                'use strict';
                t.b = function (e) {
                    var t = [];
                    for (var n in e) {
                        var o;
                        e.hasOwnProperty(n) && ('pubProvidedId' === n ? t = t.concat(e.pubProvidedId) : (o = function (e, t) {
                            var n = s[t];
                            if (n && e) {
                                var o = {};
                                o.source = n.source;
                                var r = u.isFn(n.getValue) ? n.getValue(e) : e;
                                if (u.isStr(r)) {
                                    var a, i, c = {
                                            id: r,
                                            atype: n.atype
                                        };
                                    return !u.isFn(n.getUidExt) || (a = n.getUidExt(e)) && (c.ext = a), o.uids = [c], !u.isFn(n.getEidExt) || (i = n.getEidExt(e)) && (o.ext = i), o;
                                }
                            }
                            return null;
                        }(e[n], n)) && t.push(o));
                    }
                    return t;
                }, t.a = function (e) {
                    var n = [];
                    return e.filter(function (e) {
                        return u.isPlainObject(e.idObj) && Object.keys(e.idObj).length;
                    }).forEach(function (t) {
                        Object.keys(t.idObj).forEach(function (e) {
                            u.deepAccess(t, 'config.bidders') && Array.isArray(t.config.bidders) && u.deepAccess(s, e + '.source') && n.push({
                                source: s[e].source,
                                bidders: t.config.bidders
                            });
                        });
                    }), n;
                };
                var u = n(0), s = {
                        intentIqId: {
                            source: 'intentiq.com',
                            atype: 1
                        },
                        pubcid: {
                            source: 'pubcid.org',
                            atype: 1
                        },
                        tdid: {
                            source: 'adserver.org',
                            atype: 1,
                            getUidExt: function () {
                                return { rtiPartner: 'TDID' };
                            }
                        },
                        id5id: {
                            getValue: function (e) {
                                return e.uid;
                            },
                            source: 'id5-sync.com',
                            atype: 1,
                            getUidExt: function (e) {
                                if (e.ext)
                                    return e.ext;
                            }
                        },
                        parrableId: {
                            source: 'parrable.com',
                            atype: 1,
                            getValue: function (e) {
                                return e.eid ? e.eid : e.ccpaOptout ? '' : null;
                            },
                            getUidExt: function (e) {
                                var t = u.pick(e, [
                                    'ibaOptout',
                                    'ccpaOptout'
                                ]);
                                if (Object.keys(t).length)
                                    return t;
                            }
                        },
                        idl_env: {
                            source: 'liveramp.com',
                            atype: 3
                        },
                        lipb: {
                            getValue: function (e) {
                                return e.lipbid;
                            },
                            source: 'liveintent.com',
                            atype: 3,
                            getEidExt: function (e) {
                                if (Array.isArray(e.segments) && e.segments.length)
                                    return { segments: e.segments };
                            }
                        },
                        britepoolid: {
                            source: 'britepool.com',
                            atype: 3
                        },
                        dmdId: {
                            source: 'hcn.health',
                            atype: 3
                        },
                        lotamePanoramaId: {
                            source: 'crwdcntrl.net',
                            atype: 1
                        },
                        criteoId: {
                            source: 'criteo.com',
                            atype: 1
                        },
                        merkleId: {
                            source: 'merkleinc.com',
                            atype: 3,
                            getValue: function (e) {
                                return e.id;
                            },
                            getUidExt: function (e) {
                                return e && e.keyID ? { keyID: e.keyID } : void 0;
                            }
                        },
                        netId: {
                            source: 'netid.de',
                            atype: 1
                        },
                        IDP: {
                            source: 'zeotap.com',
                            atype: 1
                        },
                        haloId: {
                            source: 'audigent.com',
                            atype: 1
                        },
                        quantcastId: {
                            source: 'quantcast.com',
                            atype: 1
                        },
                        nextrollId: {
                            source: 'nextroll.com',
                            atype: 1
                        },
                        idx: {
                            source: 'idx.lat',
                            atype: 1
                        },
                        connectid: {
                            source: 'verizonmedia.com',
                            atype: 3
                        },
                        fabrickId: {
                            source: 'neustar.biz',
                            atype: 1
                        },
                        mwOpenLinkId: {
                            source: 'mediawallahscript.com',
                            atype: 1
                        },
                        tapadId: {
                            source: 'tapad.com',
                            atype: 1
                        },
                        novatiq: {
                            getValue: function (e) {
                                return e.snowflake;
                            },
                            source: 'novatiq.com',
                            atype: 1
                        },
                        uid2: {
                            source: 'uidapi.com',
                            atype: 3,
                            getValue: function (e) {
                                return e.id;
                            }
                        },
                        deepintentId: {
                            source: 'deepintent.com',
                            atype: 3
                        },
                        admixerId: {
                            source: 'admixer.net',
                            atype: 3
                        },
                        amxId: {
                            source: 'amxrtb.com',
                            atype: 1
                        }
                    };
            },
            704: function (e, t, n) {
                e.exports = n(705);
            },
            705: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'PBJS_USER_ID_OPTOUT_NAME', function () {
                    return C;
                }), n.d(t, 'coreStorage', function () {
                    return U;
                }), n.d(t, 'syncDelay', function () {
                    return j;
                }), n.d(t, 'auctionDelay', function () {
                    return k;
                }), t.setSubmoduleRegistry = function (e) {
                    L = e;
                }, t.setStoredValue = N, t.setStoredConsentData = M, t.findRootDomain = H, t.requestBidsHook = $, n.d(t, 'validateGdprEnforcement', function () {
                    return Y;
                }), t.attachIdSystem = te, t.init = ne;
                var o = n(11), r = n.n(o), a = n(3), i = n(8), c = n.n(i), l = n(0), u = n(16), d = n(7), s = n(5), f = n.n(s), g = n(10), p = n(21), m = n(9), b = n(12), y = n.n(b);
                function v(e, t) {
                    var n;
                    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (n = function (e, t) {
                                if (!e)
                                    return;
                                if ('string' == typeof e)
                                    return h(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                'Object' === n && e.constructor && (n = e.constructor.name);
                                if ('Map' === n || 'Set' === n)
                                    return Array.from(e);
                                if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                    return h(e, t);
                            }(e)) || t && e && 'number' == typeof e.length) {
                            n && (e = n);
                            var o = 0, r = function () {
                                };
                            return {
                                s: r,
                                n: function () {
                                    return o >= e.length ? { done: !0 } : {
                                        done: !1,
                                        value: e[o++]
                                    };
                                },
                                e: function (e) {
                                    throw e;
                                },
                                f: r
                            };
                        }
                        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }
                    var a, i = !0, c = !1;
                    return {
                        s: function () {
                            n = e[Symbol.iterator]();
                        },
                        n: function () {
                            var e = n.next();
                            return i = e.done, e;
                        },
                        e: function (e) {
                            c = !0, a = e;
                        },
                        f: function () {
                            try {
                                i || null == n.return || n.return();
                            } finally {
                                if (c)
                                    throw a;
                            }
                        }
                    };
                }
                function h(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, o = new Array(t); n < t; n++)
                        o[n] = e[n];
                    return o;
                }
                var I, O, j, k, S = 'User ID', D = 'cookie', E = 'html5', x = 500, A = 0, w = {
                        name: '_pbjs_userid_consent_data',
                        expires: 30
                    }, C = '_pbjs_id_optout', U = Object(m.a)('userid'), _ = [], T = !1, V = [], P = [], L = [];
                function N(e, t) {
                    var n = e.config.storage, o = 'function' == typeof e.submodule.domainOverride ? e.submodule.domainOverride() : null;
                    try {
                        var r = l.isPlainObject(t) ? JSON.stringify(t) : t, a = new Date(Date.now() + 86400000 * n.expires).toUTCString();
                        n.type === D ? (U.setCookie(n.name, r, a, 'Lax', o), 'number' == typeof n.refreshInSeconds && U.setCookie(''.concat(n.name, '_last'), new Date().toUTCString(), a, 'Lax', o)) : n.type === E && (U.setDataInLocalStorage(''.concat(n.name, '_exp'), a), U.setDataInLocalStorage(n.name, encodeURIComponent(r)), 'number' == typeof n.refreshInSeconds && U.setDataInLocalStorage(''.concat(n.name, '_last'), new Date().toUTCString()));
                    } catch (e) {
                        l.logError(e);
                    }
                }
                function q(e, t) {
                    var n, o, r = 1 < arguments.length && void 0 !== t ? t : void 0, a = r ? ''.concat(e.name, '_').concat(r) : e.name;
                    try {
                        e.type === D ? n = U.getCookie(a) : e.type === E && ('' === (o = U.getDataFromLocalStorage(''.concat(e.name, '_exp'))) ? n = U.getDataFromLocalStorage(a) : o && 0 < new Date(o).getTime() - Date.now() && (n = decodeURIComponent(U.getDataFromLocalStorage(a)))), 'string' == typeof n && '{' === n.trim().charAt(0) && (n = JSON.parse(n));
                    } catch (e) {
                        l.logError(e);
                    }
                    return n;
                }
                function F(e) {
                    var t = {
                        consentString: '',
                        gdprApplies: !1,
                        apiVersion: 0
                    };
                    return e && (t.consentString = e.consentString, t.gdprApplies = e.gdprApplies, t.apiVersion = e.apiVersion), l.cyrb53Hash(JSON.stringify(t));
                }
                function M(e) {
                    try {
                        var t = new Date(Date.now() + 86400000 * w.expires).toUTCString();
                        U.setCookie(w.name, F(e), t, 'Lax');
                    } catch (e) {
                        l.logError(e);
                    }
                }
                function R() {
                    try {
                        return U.getCookie(w.name);
                    } catch (e) {
                        l.logError(e);
                    }
                }
                function J(e) {
                    if (e && 'boolean' == typeof e.gdprApplies && e.gdprApplies) {
                        if (!e.consentString)
                            return;
                        if (1 === e.apiVersion && !1 === l.deepAccess(e, 'vendorData.purposeConsents.1'))
                            return;
                        if (2 === e.apiVersion && !1 === l.deepAccess(e, 'vendorData.purpose.consents.1'))
                            return;
                    }
                    return 1;
                }
                function H() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window.location.hostname;
                    if (!U.cookiesAreEnabled())
                        return e;
                    var t, n, o = e.split('.');
                    if (2 == o.length)
                        return e;
                    var r = -2, a = '_rdc'.concat(Date.now()), i = 'writeable';
                    do {
                        t = o.slice(r).join('.');
                        var c = new Date(l.timestamp() + 10000).toUTCString();
                        U.setCookie(a, i, c, 'Lax', t, void 0), U.getCookie(a, void 0) === i ? (n = !1, U.setCookie(a, '', 'Thu, 01 Jan 1970 00:00:01 GMT', void 0, t, void 0)) : (r += -1, n = Math.abs(r) <= o.length);
                    } while (n);
                    return t;
                }
                function z(e, t) {
                    var n = function () {
                    };
                    t && (n = l.delayExecution(function () {
                        clearTimeout(O), t();
                    }, e.length)), e.forEach(function (t) {
                        t.callback(function (e) {
                            e ? (t.config.storage && N(t, e), t.idObj = t.submodule.decode(e, t.config)) : l.logInfo(''.concat(S, ': ').concat(t.submodule.name, ' - request id responded with an empty value')), n();
                        }), t.callback = void 0;
                    });
                }
                function B(e) {
                    return Array.isArray(e) && e.length ? e.filter(function (e) {
                        return l.isPlainObject(e.idObj) && Object.keys(e.idObj).length;
                    }).reduce(function (t, n) {
                        return Object.keys(n.idObj).forEach(function (e) {
                            t[e] = n.idObj[e];
                        }), t;
                    }, {}) : {};
                }
                function G(e, r) {
                    [e].some(function (e) {
                        return !Array.isArray(e) || !e.length;
                    }) || e.forEach(function (e) {
                        e.bids && l.isArray(e.bids) && e.bids.forEach(function (e) {
                            var t, n, o = (t = r, n = e.bidder, Array.isArray(t) && t.length && n ? t.filter(function (e) {
                                    return !e.config.bidders || !l.isArray(e.config.bidders) || y()(e.config.bidders, n);
                                }).filter(function (e) {
                                    return l.isPlainObject(e.idObj) && Object.keys(e.idObj).length;
                                }).reduce(function (t, n) {
                                    return Object.keys(n.idObj).forEach(function (e) {
                                        t[e] = n.idObj[e];
                                    }), t;
                                }, {}) : {});
                            Object.keys(o).length && (e.userId = o, e.userIdAsEids = Object(p.b)(o));
                        });
                    });
                }
                function W(e) {
                    var t, n, o, r, a, i = !1;
                    void 0 === I && (I = function (e, n) {
                        var t = Y(e, n), o = t.userIdModules;
                        if (!t.hasValidated && !J(n))
                            return l.logWarn(''.concat(S, ' - gdpr permission not valid for local storage or cookies, exit module')), [];
                        var r = R();
                        return M(n), o.reduce(function (e, t) {
                            return Z(t, n, r, !1), e.push(t), e;
                        }, []);
                    }(V, d.gdprDataHandler.getConsentData())).length && (r = I, 'function' == typeof (a = Object(l.getPrebidInternal)().setEidPermissions) && l.isArray(r) && a(Object(p.a)(r)), (t = I.filter(function (e) {
                        return l.isFn(e.callback);
                    })).length && (e && 0 < k ? (n = !(i = !0), o = function () {
                        n || (n = !0, e());
                    }, l.logInfo(''.concat(S, ' - auction delayed by ').concat(k, ' at most to fetch ids')), O = setTimeout(o, k), z(t, o)) : c.a.on(f.a.EVENTS.AUCTION_END, function e() {
                        c.a.off(f.a.EVENTS.AUCTION_END, e), 0 < j ? setTimeout(function () {
                            z(t);
                        }, j) : z(t);
                    }))), e && !i && e();
                }
                function $(e, t) {
                    W(function () {
                        G(t.adUnits || Object(u.a)().adUnits, I), e.call(this, t);
                    });
                }
                function K() {
                    return W(), B(I);
                }
                function Q() {
                    return W(), Object(p.b)(B(I));
                }
                function X(e, u) {
                    var s = (s = e ? e.submoduleNames : null) || [];
                    W(function () {
                        var e = d.gdprDataHandler.getConsentData(), t = Y(V, e), n = t.userIdModules;
                        if (t.hasValidated || J(e)) {
                            var o = R();
                            M(e);
                            var r, a = [], i = v(n);
                            try {
                                for (i.s(); !(r = i.n()).done;) {
                                    var c = r.value;
                                    0 < s.length && -1 === s.indexOf(c.submodule.name) || (l.logInfo(''.concat(S, ' - refreshing ').concat(c.submodule.name)), Z(c, e, o, !0), l.isFn(c.callback) && a.push(c));
                                }
                            } catch (e) {
                                i.e(e);
                            } finally {
                                i.f();
                            }
                            0 < a.length && z(a), u && u();
                        } else
                            l.logWarn(''.concat(S, ' - gdpr permission not valid for local storage or cookies, exit module'));
                    });
                }
                var Y = Object(g.b)('sync', function (e, t) {
                    return {
                        userIdModules: e,
                        hasValidated: t && t.hasValidated
                    };
                }, 'validateGdprEnforcement');
                function Z(e, t, n, o) {
                    var r, a, i, c, u, s, d;
                    e.config.storage ? (r = q(e.config.storage), c = !1, 'number' == typeof e.config.storage.refreshInSeconds && (c = (i = new Date(q(e.config.storage, 'last'))) && Date.now() - i.getTime() > 1000 * e.config.storage.refreshInSeconds), !r || c || o || (d = t, null == (s = n) || s !== F(d)) ? a = e.submodule.getId(e.config, t, r) : 'function' == typeof e.submodule.extendId && (a = e.submodule.extendId(e.config, t, r)), l.isPlainObject(a) && (a.id && (N(e, a.id), r = a.id), 'function' == typeof a.callback && (e.callback = a.callback)), r && (e.idObj = e.submodule.decode(r, e.config))) : e.config.value ? e.idObj = e.config.value : (u = e.submodule.getId(e.config, t, void 0), l.isPlainObject(u) && ('function' == typeof u.callback && (e.callback = u.callback), u.id && (e.idObj = e.submodule.decode(u.id, e.config))));
                }
                function ee() {
                    var e, n, t, o = (e = P, n = _, Array.isArray(e) ? e.reduce(function (e, t) {
                            return !t || l.isEmptyStr(t.name) || (!t.storage || l.isEmptyStr(t.storage.type) || l.isEmptyStr(t.storage.name) || -1 === n.indexOf(t.storage.type)) && !l.isPlainObject(t.value) && (t.storage || t.value) || e.push(t), e;
                        }, []) : []);
                    o.length && (t = L.filter(function (t) {
                        return !r()(V, function (e) {
                            return e.name === t.name;
                        });
                    }), V = t.map(function (t) {
                        var e = r()(o, function (e) {
                            return e.name && (e.name.toLowerCase() === t.name.toLowerCase() || t.aliasName && e.name.toLowerCase() === t.aliasName.toLowerCase());
                        });
                        return e && t.name !== e.name && (e.name = t.name), t.findRootDomain = H, e ? {
                            submodule: t,
                            config: e,
                            callback: void 0,
                            idObj: void 0
                        } : null;
                    }).filter(function (e) {
                        return null !== e;
                    }), !T && V.length && (Object(u.a)().requestBids.before($, 40), l.logInfo(''.concat(S, ' - usersync config updated for ').concat(V.length, ' submodules: '), V.map(function (e) {
                        return e.submodule.name;
                    })), T = !0));
                }
                function te(t) {
                    r()(L, function (e) {
                        return e.name === t.name;
                    }) || (L.push(t), ee());
                }
                function ne(e) {
                    V = [], T = !(P = []), I = void 0, -1 !== (_ = [
                        U.localStorageIsEnabled() ? E : null,
                        U.cookiesAreEnabled() ? D : null
                    ].filter(function (e) {
                        return null !== e;
                    })).indexOf(D) && U.getCookie(C) ? l.logInfo(''.concat(S, ' - opt-out cookie found, exit module')) : -1 !== _.indexOf(E) && U.getDataFromLocalStorage(C) ? l.logInfo(''.concat(S, ' - opt-out localStorage found, exit module')) : (e.getConfig(function (e) {
                        var t = e.userSync;
                        t && t.userIds && (P = t.userIds, j = l.isNumber(t.syncDelay) ? t.syncDelay : x, k = l.isNumber(t.auctionDelay) ? t.auctionDelay : A, ee());
                    }), Object(u.a)().getUserIds = K, Object(u.a)().getUserIdsAsEids = Q, Object(u.a)().refreshUserIds = X);
                }
                ne(a.b), Object(g.c)('userId', te);
            }
        }, [704]);
        pbjs.processQueue();
    }())
}