{
    const $___mock_598d5432cbab4e48 = {};
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
    })($___mock_598d5432cbab4e48);
    const $___mock_7d923b5649fd1120 = {};
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
    })($___mock_7d923b5649fd1120);
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
            var n = {}, d = { 399: 0 };
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
            }, f(f.s = 988);
        }({
            0: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'internal', function () {
                    return D;
                }), t.getPrebidInternal = function () {
                    return k;
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
                                t.push(F(e));
                            else
                                for (var a = 0; a < o; a++)
                                    t.push(F(e[a]));
                    }
                    return t;
                }, t.parseGPTSingleSizeArray = F, t.parseGPTSingleSizeArrayToRtbSize = function (e) {
                    if (W(e))
                        return {
                            w: e[0],
                            h: e[1]
                        };
                }, t.getWindowTop = L, t.getWindowSelf = z, t.getWindowLocation = V, t.logMessage = H, t.logInfo = K, t.logWarn = J, t.logError = Y, t.hasConsoleLogger = function () {
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
                    t === m.S2S.SRC && n && D.triggerPixel(n);
                }, t.insertHtmlIntoIframe = function (e) {
                    if (!e)
                        return;
                    var t = document.createElement('iframe');
                    t.id = q(), t.width = 0, t.height = 0, t.hspace = '0', t.vspace = '0', t.marginWidth = '0', t.marginHeight = '0', t.style.display = 'none', t.style.height = '0px', t.style.width = '0px', t.scrolling = 'no', t.frameBorder = '0', t.allowtransparency = 'true', D.insertElement(t, document, 'body'), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close();
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
                        return D.getWindowSelf() !== D.getWindowTop();
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
                    return !1 !== r.b.getConfig('deviceAccess');
                }, t.checkCookieSupport = Oe, t.delayExecution = function (e, t) {
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
                        return Ee(t, e);
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
                        search: r ? n.search : D.parseQS(n.search || ''),
                        hash: (n.hash || '').replace(/^#/, ''),
                        host: n.host || window.location.host
                    };
                }, t.buildUrl = function (e) {
                    return (e.protocol || 'http') + '://' + (e.host || e.hostname + (e.port ? ':'.concat(e.port) : '')) + (e.pathname || '') + (e.search ? '?'.concat(D.formatQS(e.search || '')) : '') + (e.hash ? '#'.concat(e.hash) : '');
                }, t.deepEqual = we, t.mergeDeep = xe, t.cyrb53Hash = function (e) {
                    for (var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = function (e, t) {
                                if (Z(Math.imul))
                                    return Math.imul(e, t);
                                var n = (4194303 & e) * (t |= 0);
                                return 4290772992 & e && (n += (4290772992 & e) * t | 0), 0 | n;
                            }, i = 3735928559 ^ n, o = 1103547991 ^ n, a = 0; a < e.length; a++)
                        t = e.charCodeAt(a), i = r(i ^ t, 2654435761), o = r(o ^ t, 1597334677);
                    return i = r(i ^ i >>> 16, 2246822507) ^ r(o ^ o >>> 13, 3266489909), (4294967296 * (2097151 & (o = r(o ^ o >>> 16, 2246822507) ^ r(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString();
                };
                var r = n(3), i = n(162), o = n.n(i), a = n(10), c = n.n(a), u = n(12), s = n.n(u), d = n(163);
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
                var m = n(5), S = 'Array', A = 'String', O = 'Function', E = 'Number', T = 'Object', I = 'Boolean', C = Object.prototype.toString, j = Boolean(window.console), w = Boolean(j && window.console.log), x = Boolean(j && window.console.info), _ = Boolean(j && window.console.warn), U = Boolean(j && window.console.error), B = n(9), D = {
                        checkCookieSupport: Oe,
                        createTrackPixelIframeHtml: de,
                        getWindowSelf: z,
                        getWindowTop: L,
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
                    }, k = {};
                var R, N = {}, P = function (e, t) {
                        return t;
                    }.bind(null, 1, N)() === N ? Function.prototype.bind : function (e) {
                        var t = this, n = Array.prototype.slice.call(arguments, 1);
                        return function () {
                            return t.apply(e, n.concat(Array.prototype.slice.call(arguments)));
                        };
                    }, M = (R = 0, function () {
                        return ++R;
                    });
                function q() {
                    return M() + Math.random().toString(16).substr(2);
                }
                function G() {
                    return window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random();
                }
                function F(e) {
                    if (W(e))
                        return e[0] + 'x' + e[1];
                }
                function W(e) {
                    return te(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
                }
                function L() {
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
                    $() && x && console.info.apply(console, Q(arguments, 'INFO:'));
                }
                function J() {
                    $() && _ && console.warn.apply(console, Q(arguments, 'WARNING:'));
                }
                function Y() {
                    $() && U && console.error.apply(console, Q(arguments, 'ERROR:')), B.emit(m.EVENTS.AUCTION_DEBUG, {
                        type: 'ERROR',
                        arguments: arguments
                    });
                }
                function Q(e, t) {
                    return e = [].slice.call(e), t && e.unshift(t), e.unshift('display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;'), e.unshift('%cPrebid'), e;
                }
                function $() {
                    return !!r.b.getConfig('debug');
                }
                function X(e, t) {
                    return C.call(e) === '[object ' + t + ']';
                }
                function Z(e) {
                    return X(e, O);
                }
                function ee(e) {
                    return X(e, A);
                }
                function te(e) {
                    return X(e, S);
                }
                function ne(e) {
                    return X(e, E);
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
                    t && D.isFn(t) && (n.addEventListener('load', t), n.addEventListener('error', t)), n.src = e;
                }
                function se(e, t) {
                    var n = D.createTrackPixelIframeHtml(e, !1, 'allow-scripts allow-same-origin'), r = document.createElement('div');
                    r.innerHTML = n;
                    var i = r.firstChild;
                    t && D.isFn(t) && (i.addEventListener('load', t), i.addEventListener('error', t)), D.insertElement(i, document, 'html', !0);
                }
                function de(e) {
                    var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : '';
                    return e ? ((!(1 < arguments.length && void 0 !== arguments[1]) || arguments[1]) && (e = encodeURI(e)), t = t && 'sandbox="'.concat(t, '"'), '<iframe '.concat(t, ' id="').concat(q(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : '';
                }
                function fe(e, t, n) {
                    return null == t ? n : ee(t) ? t : ne(t) ? t.toString() : void D.logWarn('Unsuported type for param: ' + e + ' required type: String');
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
                function Oe() {
                    if (window.navigator.cookieEnabled || document.cookie.length)
                        return !0;
                }
                var Ee = function (e, t) {
                    return e.getAdUnitPath() === t || e.getSlotElementId() === t;
                };
                function Te(t) {
                    return function (e) {
                        return Ee(e, t);
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
                function xe(e) {
                    for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    if (!n.length)
                        return e;
                    var i = n.shift();
                    if (re(e) && re(i))
                        for (var o in i)
                            re(i[o]) ? (e[o] || y(e, v({}, o, {})), xe(e[o], i[o])) : te(i[o]) && e[o] ? te(e[o]) && (e[o] = e[o].concat(i[o])) : y(e, v({}, o, i[o]));
                    return xe.apply(void 0, [e].concat(n));
                }
            },
            1: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'storage', function () {
                    return j;
                }), t.registerBidder = function (i) {
                    var n = Array.isArray(i.supportedMediaTypes) ? { supportedMediaTypes: i.supportedMediaTypes } : void 0;
                    function o(e) {
                        var t = _(e);
                        c.default.registerBidAdapter(t, e.code, n);
                    }
                    o(i), Array.isArray(i.aliases) && i.aliases.forEach(function (e) {
                        var t, n, r = e;
                        Object(O.isPlainObject)(e) && (r = e.code, t = e.gvlid, n = e.skipPbsAliasing), c.default.aliasRegistry[r] = i.code, o(C({}, i, {
                            code: r,
                            gvlid: t,
                            skipPbsAliasing: n
                        }));
                    });
                }, t.newBidder = _, n.d(t, 'registerSyncInner', function () {
                    return U;
                }), t.preloadBidderMappingFile = B, t.getIabSubCategory = function (t, e) {
                    var n = c.default.getBidAdapter(t);
                    if (n.getSpec().getMappingFileInfo) {
                        var r = n.getSpec().getMappingFileInfo(), i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(), o = j.getDataFromLocalStorage(i);
                        if (o) {
                            try {
                                o = JSON.parse(o);
                            } catch (e) {
                                Object(O.logError)('Failed to parse '.concat(t, ' mapping data stored in local storage'));
                            }
                            return o.mapping[e] ? o.mapping[e] : null;
                        }
                    }
                }, t.isValid = D;
                var r = n(93), c = n(8), u = n(3), m = n(34), s = n(44), o = n(38), a = n(25), i = n(5), S = n.n(i), d = n(9), A = n.n(d), f = n(12), l = n.n(f), p = n(4), O = n(0), g = n(2), b = n(13), v = n(7), E = n(68), T = n(95);
                function y(e, t) {
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
                            return h(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n && e.constructor && (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n)
                            return Array.from(e);
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return h(e, t);
                    }(e, t) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function h(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                function I(e) {
                    return (I = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function C() {
                    return (C = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var j = Object(v.a)('bidderFactory'), w = [
                        'requestId',
                        'cpm',
                        'ttl',
                        'creativeId',
                        'netRevenue',
                        'currency'
                    ], x = 1;
                function _(v) {
                    return C(new r.a(v.code), {
                        getSpec: function () {
                            return Object.freeze(v);
                        },
                        registerSyncs: y,
                        callBids: function (o, a, e, n, i, c) {
                            if (Array.isArray(o.bids)) {
                                var u = {}, s = [], t = o.bids.filter(h);
                                if (0 !== t.length) {
                                    var d = {};
                                    if (t.forEach(function (e) {
                                            (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode);
                                        }), Object(T.c)()) {
                                        Object(E.b)('Using Fake Bids!!!');
                                        var r = Object(O.delayExecution)(c(g), 1), f = Object(T.a)(o);
                                        return f.forEach(b), void r(f);
                                    }
                                    var l, p = v.buildRequests(t, o);
                                    p && 0 !== p.length ? (Array.isArray(p) || (p = [p]), l = Object(O.delayExecution)(c(g), p.length), p.forEach(function (r) {
                                        switch (r.method) {
                                        case 'GET':
                                            n(''.concat(r.url).concat(function (e) {
                                                if (e)
                                                    return '?'.concat('object' === I(e) ? Object(O.parseQueryStringParameters)(e) : e);
                                                return '';
                                            }(r.data)), {
                                                success: c(e),
                                                error: t
                                            }, void 0, C({
                                                method: 'GET',
                                                withCredentials: !0
                                            }, r.options));
                                            break;
                                        case 'POST':
                                            n(r.url, {
                                                success: c(e),
                                                error: t
                                            }, 'string' == typeof r.data ? r.data : JSON.stringify(r.data), C({
                                                method: 'POST',
                                                contentType: 'text/plain',
                                                withCredentials: !0
                                            }, r.options));
                                            break;
                                        default:
                                            Object(O.logWarn)('Skipping invalid request from '.concat(v.code, '. Request type ').concat(r.type, ' must be GET or POST')), l();
                                        }
                                        function e(e, t) {
                                            i(v.code);
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
                                                n = v.interpretResponse(e, r);
                                            } catch (e) {
                                                return Object(O.logError)('Bidder '.concat(v.code, ' failed to interpret the server\'s response. Continuing without bids'), null, e), void l();
                                            }
                                            n && (Object(O.isArray)(n) ? n.forEach(b) : b(n)), l(n);
                                        }
                                        function t(e) {
                                            i(v.code), Object(O.logError)('Server call for '.concat(v.code, ' failed: ').concat(e, '. Continuing without bids.')), l();
                                        }
                                    })) : g();
                                } else
                                    g();
                            }
                            function g() {
                                e(), A.a.emit(S.a.EVENTS.BIDDER_DONE, o), y(s, o.gdprConsent, o.uspConsent);
                            }
                            function b(e) {
                                var t, n, r, i = d[e.requestId];
                                i ? (e.originalCpm = e.cpm, e.originalCurrency = e.currency, e.meta = e.meta || C({}, e[i.bidder]), t = C(Object(m.a)(S.a.STATUS.GOOD, i), e), n = i.adUnitCode, r = t, u[n] = !0, D(n, r, [o]) && a(n, r)) : Object(O.logWarn)('Bidder '.concat(v.code, ' made bid for unknown request ID: ').concat(e.requestId, '. Ignoring.'));
                            }
                        }
                    });
                    function y(e, t, n) {
                        U(v, e, t, n);
                    }
                    function h(e) {
                        return !!v.isBidRequestValid(e) || (Object(O.logWarn)('Invalid bid sent to bidder '.concat(v.code, ': ').concat(JSON.stringify(e))), !1);
                    }
                }
                var U = Object(b.b)('async', function (t, e, n, r) {
                    var i, o, a = u.b.getConfig('userSync.aliasSyncEnabled');
                    !t.getUserSyncs || !a && c.default.aliasRegistry[t.code] || (i = u.b.getConfig('userSync.filterSettings'), (o = t.getUserSyncs({
                        iframeEnabled: !(!i || !i.iframe && !i.all),
                        pixelEnabled: !(!i || !i.image && !i.all)
                    }, e, n, r)) && (Array.isArray(o) || (o = [o]), o.forEach(function (e) {
                        s.a.registerSync(e.type, t.code, e.url);
                    })));
                }, 'registerSyncs');
                function B(e, t) {
                    if (!u.b.getConfig('adpod.brandCategoryExclusion'))
                        return e.call(this, t);
                    t.filter(function (e) {
                        return Object(O.deepAccess)(e, 'mediaTypes.video.context') === g.a;
                    }).map(function (e) {
                        return e.bids.map(function (e) {
                            return e.bidder;
                        });
                    }).reduce(O.flatten, []).filter(O.uniques).forEach(function (n) {
                        var e = c.default.getBidAdapter(n);
                        if (e.getSpec().getMappingFileInfo) {
                            var t = e.getSpec().getMappingFileInfo(), r = t.refreshInDays ? t.refreshInDays : x, i = t.localStorageKey ? t.localStorageKey : e.getSpec().code, o = j.getDataFromLocalStorage(i);
                            try {
                                (!(o = o ? JSON.parse(o) : void 0) || Object(O.timestamp)() > o.lastUpdated + 24 * r * 60 * 60 * 1000) && Object(p.a)(t.url, {
                                    success: function (e) {
                                        try {
                                            e = JSON.parse(e);
                                            var t = {
                                                lastUpdated: Object(O.timestamp)(),
                                                mapping: e.mapping
                                            };
                                            j.setDataInLocalStorage(i, JSON.stringify(t));
                                        } catch (e) {
                                            Object(O.logError)('Failed to parse '.concat(n, ' bidder translation mapping file'));
                                        }
                                    },
                                    error: function () {
                                        Object(O.logError)('Failed to load '.concat(n, ' bidder translation file'));
                                    }
                                });
                            } catch (e) {
                                Object(O.logError)('Failed to parse '.concat(n, ' bidder translation mapping file'));
                            }
                        }
                    }), e.call(this, t);
                }
                function D(e, t, n) {
                    function r(e) {
                        return 'Invalid bid from '.concat(t.bidderCode, '. Ignoring bid: ').concat(e);
                    }
                    return e ? t ? (i = Object.keys(t), w.every(function (e) {
                        return l()(i, e) && !l()([
                            void 0,
                            null
                        ], t[e]);
                    }) ? 'native' !== t.mediaType || Object(o.g)(t, n) ? 'video' !== t.mediaType || Object(a.d)(t, n) ? !('banner' === t.mediaType && !function (e, t, n) {
                        if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10)))
                            return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), 1;
                        var r = Object(O.getBidderRequest)(n, t.bidderCode, e), i = r && r.bids && r.bids[0] && r.bids[0].sizes, o = Object(O.parseSizesInput)(i);
                        if (1 === o.length) {
                            var a = y(o[0].split('x'), 2), c = a[0], u = a[1];
                            return t.width = parseInt(c, 10), t.height = parseInt(u, 10), 1;
                        }
                    }(e, t, n)) || (Object(O.logError)(r('Banner bids require a width and height')), !1) : (Object(O.logError)(r('Video bid does not have required vastUrl or renderer property')), !1) : (Object(O.logError)(r('Native bid missing some required properties.')), !1) : (Object(O.logError)(r('Bidder '.concat(t.bidderCode, ' is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.'))), !1)) : (Object(O.logWarn)('Some adapter tried to add an undefined bid for '.concat(e, '.')), !1) : (Object(O.logWarn)('No adUnitCode was supplied to addBidResponse.'), !1);
                    var i;
                }
                Object(b.a)('checkAdUnitSetup').before(B);
            },
            10: function (e, t, n) {
                var r = n(100);
                e.exports = r;
            },
            100: function (e, t, n) {
                n(101);
                var r = n(52);
                e.exports = r('Array', 'find');
            },
            101: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(56).find, o = n(51), a = n(60), c = 'find', u = !0, s = a(c);
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
                var r = n(30), i = n(103), o = n(46), a = n(47), c = n(55), u = n(28), s = n(74), d = Object.getOwnPropertyDescriptor;
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
                var i = n(31), o = /#|\.prototype\./, a = r.normalize = function (e) {
                        return String(e).replace(o, '.').toLowerCase();
                    }, c = r.data = {}, u = r.NATIVE = 'N', s = r.POLYFILL = 'P';
                e.exports = r;
            },
            105: function (e, t, n) {
                var r = n(27), i = n(106), o = n(21)('species');
                e.exports = function (e, t) {
                    var n;
                    return i(e) && ('function' == typeof (n = e.constructor) && (n === Array || i(n.prototype)) || r(n) && null === (n = n[o])) && (n = void 0), new (void 0 === n ? Array : n)(0 === t ? 0 : t);
                };
            },
            106: function (e, t, n) {
                var r = n(48);
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
                var r = n(78);
                e.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
            },
            109: function (e, t, n) {
                n(110);
                var r = n(52);
                e.exports = r('Array', 'includes');
            },
            11: function (e, t, n) {
                'use strict';
                t.a = i, t.c = function (e) {
                    return !(!e || !e.url);
                }, t.b = function (e, t) {
                    e.render(t);
                };
                var u = n(39), s = n(0), r = n(10), d = n.n(r), f = 'outstream';
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
            110: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(79).includes, o = n(51);
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
                n(113), n(130), n(90), n(132);
                var r = n(43);
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
                var f = n(14), l = n(26), p = n(81), g = n(31), b = n(32), v = n(17), y = n(84), h = n(27), m = n(64), S = n(33).f, A = n(56).forEach, O = n(30), r = n(54), E = r.set, T = r.getterFor;
                e.exports = function (n, e, t) {
                    var r, a, i = -1 !== n.indexOf('Map'), c = -1 !== n.indexOf('Weak'), o = i ? 'set' : 'add', u = l[n], s = u && u.prototype, d = {};
                    return O && 'function' == typeof u && (c || s.forEach && !g(function () {
                        new u().entries().next();
                    })) ? (r = e(function (e, t) {
                        E(y(e, r, n), {
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
                var r = n(31);
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
                var r = n(77), i = Function.toString;
                'function' != typeof r.inspectSource && (r.inspectSource = function (e) {
                    return i.call(e);
                }), e.exports = r.inspectSource;
            },
            119: function (e, t, n) {
                'use strict';
                var s = n(33).f, d = n(85), f = n(124), l = n(24), p = n(84), g = n(17), a = n(66), c = n(129), b = n(30), v = n(81).fastKey, r = n(54), y = r.set, h = r.getterFor;
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
                var r = n(30), a = n(33), c = n(15), u = n(121);
                e.exports = r ? Object.defineProperties : function (e, t) {
                    c(e);
                    for (var n, r = u(t), i = r.length, o = 0; o < i;)
                        a.f(e, n = r[o++], t[n]);
                    return e;
                };
            },
            121: function (e, t, n) {
                var r = n(122), i = n(86);
                e.exports = Object.keys || function (e) {
                    return r(e, i);
                };
            },
            122: function (e, t, n) {
                var a = n(28), c = n(47), u = n(79).indexOf, s = n(53);
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
                var r = n(29);
                e.exports = r('document', 'documentElement');
            },
            124: function (e, t, n) {
                var i = n(87);
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
                var o = n(88).IteratorPrototype, a = n(85), c = n(46), u = n(64), s = n(40);
                e.exports = function (e, t, n) {
                    var r = t + ' Iterator';
                    return e.prototype = a(o, { next: c(1, n) }), u(e, r, !1, !0), s[r] = i, e;
                };
            },
            126: function (e, t, n) {
                var r = n(31);
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
                var r = n(27);
                e.exports = function (e) {
                    if (!r(e) && null !== e)
                        throw TypeError('Can\'t set ' + String(e) + ' as a prototype');
                    return e;
                };
            },
            129: function (e, t, n) {
                'use strict';
                var r = n(29), i = n(33), o = n(21), a = n(30), c = o('species');
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
            130: function (e, t) {
            },
            131: function (e, t, n) {
                function r(c) {
                    return function (e, t) {
                        var n, r, i = String(s(e)), o = u(t), a = i.length;
                        return o < 0 || a <= o ? c ? '' : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? c ? i.charAt(o) : n : c ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536;
                    };
                }
                var u = n(58), s = n(49);
                e.exports = {
                    codeAt: r(!1),
                    charAt: r(!0)
                };
            },
            132: function (e, t, n) {
                n(133);
                var r = n(134), i = n(26), o = n(62), a = n(32), c = n(40), u = n(21)('toStringTag');
                for (var s in r) {
                    var d = i[s], f = d && d.prototype;
                    f && o(f) !== u && a(f, u, s), c[s] = c.Array;
                }
            },
            133: function (e, t, n) {
                'use strict';
                var r = n(47), i = n(51), o = n(40), a = n(54), c = n(66), u = 'Array Iterator', s = a.set, d = a.getterFor(u);
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
                var s = n(19), d = n(24), f = n(17);
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
                var r = n(14), i = n(16), o = n(140);
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
                var h = n(26), m = n(102).f, S = n(104), A = n(43), O = n(24), E = n(32), T = n(28);
                e.exports = function (e, t) {
                    var n, r, i, o, a, c, u, s, d = e.target, f = e.global, l = e.stat, p = e.proto, g = f ? h : l ? h[d] : (h[d] || {}).prototype, b = f ? A : A[d] || (A[d] = {}), v = b.prototype;
                    for (i in t)
                        n = !S(f ? i : d + (l ? '.' : '#') + i, e.forced) && g && T(g, i), a = b[i], n && (c = e.noTargetGet ? (s = m(g, i)) && s.value : g[i]), o = n && c ? c : t[i], n && typeof a == typeof o || (u = e.bind && n ? O(o, h) : e.wrap && n ? y(o) : p && 'function' == typeof o ? O(Function.call, o) : o, (e.sham || o && o.sham || a && a.sham) && E(u, 'sham', !0), b[i] = u, p && (T(A, r = d + 'Prototype') || E(A, r, {}), A[r][i] = o, e.real && v && !v[i] && E(v, i, o)));
                };
            },
            140: function (e, t, n) {
                'use strict';
                var i = n(15), o = n(19);
                e.exports = function () {
                    for (var e = i(this), t = o(e.add), n = 0, r = arguments.length; n < r; n++)
                        t.call(e, arguments[n]);
                    return e;
                };
            },
            141: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(142);
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
                var a = n(15), c = n(19);
                e.exports = function () {
                    for (var e, t = a(this), n = c(t.delete), r = !0, i = 0, o = arguments.length; i < o; i++)
                        e = n.call(t, arguments[i]), r = r && e;
                    return !!r;
                };
            },
            143: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(15), a = n(24), c = n(37), u = n(17);
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
                var r = n(14), i = n(16), o = n(29), a = n(15), c = n(19), u = n(41), s = n(17);
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
                var r = n(14), i = n(16), c = n(29), u = n(15), s = n(19), d = n(24), f = n(41), l = n(37), p = n(17);
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
                var r = n(14), i = n(16), o = n(15), a = n(24), c = n(37), u = n(17);
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
                var r = n(14), i = n(16), o = n(29), a = n(15), c = n(19), u = n(41), s = n(17);
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
                var r = n(14), i = n(16), o = n(15), a = n(19), c = n(17);
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
                var r = n(14), i = n(16), o = n(29), a = n(15), c = n(19), u = n(91), s = n(17);
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
                var r = n(27);
                e.exports = function (e) {
                    if (!r(e))
                        throw TypeError(String(e) + ' is not an object');
                    return e;
                };
            },
            150: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(15), a = n(19), c = n(17);
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
                var r = n(14), i = n(16), o = n(15), a = n(37), c = n(17);
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
                var r = n(14), i = n(16), c = n(29), u = n(15), s = n(19), d = n(24), f = n(41), l = n(37), p = n(17);
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
                var r = n(14), i = n(16), a = n(15), c = n(19), u = n(37), s = n(17);
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
                var r = n(14), i = n(16), o = n(15), a = n(24), c = n(37), u = n(17);
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
                var r = n(14), i = n(16), o = n(29), a = n(15), c = n(19), u = n(41), s = n(17);
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
                var r = n(14), i = n(16), o = n(29), a = n(15), c = n(19), u = n(41), s = n(17);
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
                n(90), n(158);
                var r = n(43);
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
                var v = n(24), y = n(57), h = n(83), m = n(82), S = n(50), A = n(160), O = n(61);
                e.exports = function (e, t, n) {
                    var r, i, o, a, c, u, s = y(e), d = 'function' == typeof this ? this : Array, f = arguments.length, l = 1 < f ? t : void 0, p = void 0 !== l, g = O(s), b = 0;
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
            16: function (e, t) {
                e.exports = !0;
            },
            160: function (e, t, n) {
                'use strict';
                var i = n(55), o = n(33), a = n(46);
                e.exports = function (e, t, n) {
                    var r = i(t);
                    r in e ? o.f(e, r, a(0, n)) : e[r] = n;
                };
            },
            161: function (e, t, n) {
                var i = n(21)('iterator'), o = !1;
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
            166: function (e, t, n) {
                'use strict';
                t.a = function (e, t, n, r, i) {
                    if ('function' != typeof r)
                        return e;
                    var o = function (e, t) {
                            var n = e.sort(), r = t.map(function (e) {
                                    return e.adId;
                                }).sort();
                            return (n.join(',') + r.join(',')).hashCode();
                        }(t, n), a = I[o];
                    if (a)
                        return a;
                    var c = e.reduce(function (e, t) {
                            return e[t.adUnitCode] = t, e;
                        }, {}), u = function (e, n, r) {
                            var i = {}, o = {};
                            return e.forEach(function (t) {
                                i[t] = [], n.forEach(function (e) {
                                    o[e.adId] = o[e.adId] || [], r(t, e) && (i[t].push(e), o[e.adId].push(t));
                                });
                            }), {
                                bidsForAdCode: i,
                                adUnitCodesForBidAdId: o
                            };
                        }(t, n, r), s = u.bidsForAdCode, d = u.adUnitCodesForBidAdId;
                    Object(m.b)('Default Winning Assigments', c), Object(m.b)('Mapping of available bids for each ad unit code:', s), Object(m.b)('Mapping of ad unit codes for each bid adId', d), Object(m.b)('All codes', t, 'All Bids', n);
                    var f, l = function (o, a, e) {
                            var c = {};
                            Object(m.b)('Starting optimization for bid CPM');
                            var t = function (e, t, i) {
                                    var o = t.length - e.length, n = 0 < o, a = o < 0, c = {}, u = {}, r = Math.max(e.length, t.length), s = [];
                                    e.forEach(function (n, e) {
                                        var r = [];
                                        t.forEach(function (e, t) {
                                            i(n, e) ? (r.push(parseInt(e.cpm * E)), u[t] = e) : (r.push(0), u[t] = null);
                                        }), a && Array.from(Array(Math.abs(o))).forEach(function (e) {
                                            r.push(O);
                                        }), c[e] = n, s.push(r);
                                    }), n && Array.from(Array(o)).forEach(function (e) {
                                        var t = Array.from(Array(r)).map(function (e) {
                                            return O;
                                        });
                                        s.push(t);
                                    });
                                    return {
                                        constraintMatrix: s,
                                        rowIndexToAdUnitCode: c,
                                        columnIndexToBid: u
                                    };
                                }(o, a, e), u = t.constraintMatrix, n = t.columnIndexToBid, r = t.rowIndexToAdUnitCode, i = function (e) {
                                    var n = Math.max.apply(null, e.map(function (e) {
                                            return Math.max.apply(Math, e.filter(function (e) {
                                                return e !== O;
                                            }));
                                        })), r = [];
                                    return e.forEach(function (e) {
                                        var t = [];
                                        e.forEach(function (e) {
                                            e === O ? t.push(0) : t.push(n - e);
                                        }), r.push(t);
                                    }), r;
                                }(u);
                            return Object(m.b)('Minimized constraint matrix (Bid CPM Maximization):', i, n, r), Object(h['a'])(i.length, i).row.forEach(function (e, t) {
                                var n = o[t], r = a[e], i = 0 !== u[t][e];
                                n && r && i && (c[n] = r);
                            }), c;
                        }(t, n, r);
                    f = 'function' != typeof i ? function (r, e, t) {
                        var i = {}, n = Object.keys(e), o = Object.values(t), a = [];
                        n.forEach(function (t) {
                            var e = o.filter(function (e) {
                                return e.adUnitCode === t;
                            })[0];
                            e && (i[t] = e, a.push(e));
                        });
                        var c = a.map(function (e) {
                                return e.adId;
                            }), u = o.filter(function (e) {
                                return !c.includes(e.adId);
                            }), s = n.filter(function (e) {
                                return !i[e];
                            });
                        return Object(m.b)('Intermediate re-assign', JSON.parse(JSON.stringify(i)), 'unassignedBids', u, 'availableAdUnitCodes', s), u.forEach(function (t) {
                            var e, n;
                            s.includes(t.adUnitCode) ? (i[t.adUnitCode] = t, s = s.filter(function (e) {
                                return e !== t.adUnitCode;
                            })) : (e = s.shift()) ? i[e] = t : (n = r.filter(function (e) {
                                return !i[e];
                            })[0], i[n] = t);
                        }), Object(m.b)('Final re-assign', i), i;
                    }(t, c, l) : function (e, t, n, r) {
                        if ('function' != typeof r)
                            return Object(m.b)('Skipping optimization for depth, no valid priority for ad unit codes passed in'), t;
                        var o = r(e), a = Object.values(t).sort(function (e, t) {
                                return e.cpm - t.cpm;
                            }).filter(function (e) {
                                return o.includes(e.adUnitCode);
                            });
                        Object(m.b)('Starting optimization for depth...'), Object(m.b)('Ad Unit Codes By Priority:', o);
                        var c = function (e, t, o) {
                                var a = t.length - e.length, n = 0 < a, c = a < 0, r = Math.max(t.length, e.length), u = [];
                                e.forEach(function (n, r) {
                                    var i = [];
                                    t.forEach(function (e, t) {
                                        o[e.adId].includes(n) ? i.push((r + 1) * (t + 1)) : i.push(T);
                                    }), c && Array.from(Array(Math.abs(a))).forEach(function (e) {
                                        i.push(0);
                                    }), u.push(i);
                                }), n && Array.from(Array(a)).forEach(function (e) {
                                    var t = Array.from(Array(r)).map(function (e) {
                                        return 0;
                                    });
                                    u.push(t);
                                });
                                return u;
                            }(o, a, n), i = Object(h.a)(c.length, c).row, u = {};
                        Object(m.b)('Minimized constraint matrix (Depth Optimization):', c), i.forEach(function (e, t) {
                            var n = o[t], r = a[e], i = c[t][e] !== T;
                            n && r && i && (u[n] = r);
                        }), Object.keys(t).filter(function (e) {
                            return !o.includes(e);
                        }).forEach(function (e) {
                            u[e] = t[e];
                        });
                        var s = C(u, t), d = s.gainAmount + 0.001 < 0;
                        return Object(m.b)('[Depth Optimized vs. CPM Optimized] Assignment Difference:', s, 'Depth-Optimized:', u, 'CPM', t), d ? t : u;
                    }(t, l, d, i);
                    var p, g = function (e, i, o) {
                            var a = [];
                            return e.forEach(function (e) {
                                var t, n, r = i[e];
                                r ? r.adUnitCode !== e ? (t = o[e] || {}, e === (n = i[e]).adUnitCode ? a.push({
                                    adUnitCode: e,
                                    status: 'NOT CHANGED - Swapped Successfully'
                                }) : a.push({
                                    adUnitCode: e,
                                    status: 'CHANGED - Better Bid Found',
                                    adUnitCodeUsed: n.adUnitCode,
                                    priorCPM: t.cpm || 0,
                                    finalCPM: n.cpm,
                                    gain: n.cpm - t.cpm
                                })) : a.push({
                                    adUnitCode: e,
                                    status: 'NOT CHANGED - Original Bid'
                                }) : a.push({
                                    adUnitCode: e,
                                    status: 'NOT CHANGED - Not Dynamic Depth Bid or No Bid'
                                });
                            }), a;
                        }(t, f, c), b = C(f, c), v = 0 <= b.gainAmount;
                    {
                        var y;
                        Object(m.b)('[Matrix Optimized vs. Original] Assignment Difference', b, 'hasEnoughGain', v), Object(m.b)('Change Summary vs Orig', g, 'Orig', c, 'Final Assignments', f), p = v ? (y = Object.keys(f).map(function (e) {
                            var t = f[e];
                            return t ? (t.adUnitCode = e, t) : null;
                        }).filter(function (e) {
                            return e;
                        }), Object(m.b)('Using Modified Winning Bids', y.reduce(function (e, t) {
                            return A(e, S({}, t.adUnitCode, t));
                        }, {})), y) : (Object(m.b)('Using Original Winning Bids', e.reduce(function (e, t) {
                            return A(e, S({}, t.adUnitCode, t));
                        }, {})), e);
                    }
                    return I[o] = p;
                };
                var h = n(167), m = n(68);
                function S(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                function A() {
                    return (A = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var O = 'EMPTY', E = 1000000, T = 1000000000, I = {};
                function C(e, t) {
                    var n = Object.values(t).reduce(function (e, t) {
                            return e + t.cpm;
                        }, 0), r = Object.values(e).filter(function (e) {
                            return e;
                        }).reduce(function (e, t) {
                            return e + t.cpm;
                        }, 0), i = parseFloat((r - n).toFixed(4));
                    return {
                        originalTotal: n,
                        reassignedBidTotal: r,
                        gainAmount: i,
                        gainPercentage: parseFloat((i / n).toFixed(2))
                    };
                }
            },
            167: function (e, t, n) {
                'use strict';
                function G(e) {
                    return (G = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                t.a = function (e, t) {
                    {
                        var n;
                        'object' === G(t) && (n = t, t = function (e, t) {
                            return n[e][t];
                        });
                    }
                    var r, i, o = 0;
                    for (r = 0; r < e; r++)
                        for (i = 0; i < e; i++)
                            o += t(r, i);
                    var a, c, u, s, d, f, l, p, g, b, v, y, h, m, S, A, O, E, T, I, C = o / e * 10000, j = o / e / 10000, w = new Int32Array(e), x = new Int32Array(e), _ = new Float64Array(e), U = new Float64Array(e), B = 0, D = new Int32Array(e), k = new Int32Array(e), R = new Int32Array(e), N = new Float64Array(e), P = new Int32Array(e);
                    for (c = 0; c < e; c++)
                        R[c] = 0;
                    for (g = e; g--;) {
                        for (A = t(0, g), u = 0, c = 1; c < e; c++)
                            t(c, g) < A && (A = t(c, g), u = c);
                        U[g] = A, 1 == ++R[u] ? (w[u] = g, x[g] = u) : U[g] < U[w[u]] ? (b = w[u], w[u] = g, x[g] = u, x[b] = -1) : x[g] = -1;
                    }
                    for (c = 0; c < e; c++)
                        if (0 == R[c])
                            D[B++] = c;
                        else if (1 == R[c]) {
                            for (b = w[c], A = C, g = 0; g < e; g++)
                                g != b && t(c, g) - U[g] < A + j && (A = t(c, g) - U[g]);
                            U[b] = U[b] - A;
                        }
                    var M = 0;
                    do {
                        for (M++, s = B, B = l = 0; l < s;) {
                            for (c = D[l], l++, E = t(c, 0) - U[0], b = 0, T = C, g = 1; g < e; g++)
                                (O = t(c, g) - U[g]) < T && (E <= O ? (T = O, v = g) : (T = E, E = O, v = b, b = g));
                            f = x[b], E < T + j ? U[b] = U[b] - (T + j - E) : -1 < f && (f = x[b = v]), w[c] = b, x[b] = c, -1 < f && (E < T ? D[--l] = f : D[B++] = f);
                        }
                    } while (M < 2);
                    for (d = 0; d < B; d++) {
                        for (p = D[d], g = e; g--;)
                            N[g] = t(p, g) - U[g], P[g] = p, k[g] = g;
                        S = m = 0, a = !1;
                        do {
                            if (S == m) {
                                for (h = m - 1, A = N[k[S++]], l = S; l < e; l++)
                                    g = k[l], (O = N[g]) <= A && (O < A && (S = m, A = O), k[l] = k[S], k[S++] = g);
                                for (l = m; l < S; l++)
                                    if (x[k[l]] < 0) {
                                        y = k[l], a = !0;
                                        break;
                                    }
                            }
                            if (!a)
                                for (b = k[m], m++, c = x[b], O = t(c, b) - U[b] - A, l = S; l < e; l++)
                                    if (g = k[l], (I = t(c, g) - U[g] - O) < N[g]) {
                                        if (P[g] = c, I == A) {
                                            if (x[g] < 0) {
                                                y = g, a = !0;
                                                break;
                                            }
                                            k[l] = k[S], k[S++] = g;
                                        }
                                        N[g] = I;
                                    }
                        } while (!a);
                        for (l = h + 1; l--;)
                            b = k[l], U[b] = U[b] + N[b] - A;
                        for (; c = P[y], x[y] = c, b = y, y = w[c], w[c] = b, c != p;);
                    }
                    var q = 0;
                    for (c = e; c--;)
                        g = w[c], _[c] = t(c, g) - U[g], q += t(c, g);
                    return {
                        cost: q,
                        row: w,
                        col: x,
                        u: _,
                        v: U
                    };
                };
            },
            168: function (e, t, n) {
                'use strict';
                t.a = function () {
                    return (window.sblyPrebidOverrides || {})[r];
                };
                var r = 'getWinningBidsWithSharing';
            },
            169: function (e, t, n) {
                'use strict';
                t.b = function () {
                    return window && window.location && window.location.href && window.location.href.includes(r.a);
                }, t.a = function (c) {
                    return c.bids.map(function (e) {
                        return t = c, r = ((n = e).adUnitCode || t.placementCode).includes('video'), i = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (e) {
                            var t = 16 * Math.random() | 0;
                            return ('x' == e ? t : 3 & t | 8).toString(16);
                        }), o = r ? u(1.5, 3.5) : u(0.05, 2.25), a = parseFloat((10000000 * Math.random()).toFixed(0)), {
                            bidderCode: t.bidderCode,
                            width: 320,
                            height: 50,
                            statusMessage: 'Bid available',
                            adId: i,
                            requestId: n.bidId,
                            mediaType: 'banner',
                            source: 'client',
                            cpm: o,
                            creativeId: a,
                            currency: 'USD',
                            netRevenue: !0,
                            ttl: 300,
                            adUnitCode: n.adUnitCode || t.placementCode,
                            ad: '<!-- Creative TEST_ID served by Member TEST_TEST -->\n          <div style="display:flex; justify-content: center; align-items:center; height: 100%">\n            <div style="text-align: center">\n              <div>THIS IS A TEST AD.</div>\n              <div>CPM: '.concat(o, '</div>\n              <div>Bidder: ').concat(n.bidder, '.</div>\n              <div>Ad Unit Code: ').concat(n.adUnitCode, '.</div>\n            </div>\n          </div>'),
                            originalCpm: o,
                            originalCurrency: 'USD',
                            auctionId: n.auctionId,
                            responseTimestamp: 1583267901766,
                            requestTimestamp: 1583267901315,
                            bidder: n.bidder,
                            timeToRespond: 451,
                            pbLg: '20.00',
                            pbMg: '20.00',
                            pbHg: '20.00',
                            pbAg: '20.00',
                            pbDg: '20.00',
                            pbCg: '',
                            size: '320x50',
                            adserverTargeting: {
                                hb_bidder: n.bidder,
                                hb_adid: i,
                                hb_pb: '20.00',
                                hb_size: '320x50',
                                ox_pb_won: 'false'
                            },
                            params: n.params
                        };
                        var t, n, r, i, o, a;
                    });
                };
                var r = n(68);
                var u = function (e, t) {
                    return e + function () {
                        for (var e = 0, t = 0; t < 6; t += 1)
                            e += Math.random();
                        return e / 6;
                    }() * (t - e);
                };
            },
            17: function (e, t, n) {
                function p(e, t) {
                    this.stopped = e, this.result = t;
                }
                var g = n(15), b = n(82), v = n(50), y = n(24), h = n(61), m = n(83);
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
            18: function (e, t, n) {
                'use strict';
                t.a = function () {
                    return window.pbjs;
                }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push('pbjs');
            },
            19: function (e, t) {
                e.exports = function (e) {
                    if ('function' != typeof e)
                        throw TypeError(String(e) + ' is not a function');
                    return e;
                };
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
            21: function (e, t, n) {
                var r = n(26), i = n(76), o = n(28), a = n(59), c = n(78), u = n(108), s = i('wks'), d = r.Symbol, f = u ? d : d && d.withoutSetter || a;
                e.exports = function (e) {
                    return o(s, e) || (c && o(d, e) ? s[e] = d[e] : s[e] = f('Symbol.' + e)), s[e];
                };
            },
            22: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return r;
                });
                var y = n(0);
                var h, r = (h = window, function () {
                        var e, t = [], n = function (e) {
                                try {
                                    if (!e.location.ancestorOrigins)
                                        return;
                                    return e.location.ancestorOrigins;
                                } catch (e) {
                                }
                            }(h), r = !1, i = 0, o = !1, a = !1;
                        do {
                            var c, u, s = g, d = a, f = void 0, l = !1, p = null, a = !1, g = g ? g.parent : h;
                            try {
                                f = g.location.href || null;
                            } catch (e) {
                                l = !0;
                            }
                            if (l)
                                if (d) {
                                    var b = s.context;
                                    try {
                                        u = p = b.sourceUrl, o = !0, g === h.top && (r = !0), b.canonicalUrl && (e = b.canonicalUrl);
                                    } catch (e) {
                                    }
                                } else {
                                    Object(y.logWarn)('Trying to access cross domain iframe. Continuing without referrer and location');
                                    try {
                                        var v = s.document.referrer;
                                        v && (p = v, g === h.top && (r = !0));
                                    } catch (e) {
                                    }
                                    !p && n && n[i - 1] && (p = n[i - 1]), p && !o && (u = p);
                                }
                            else
                                f && (u = p = f, o = !1, g === h.top && (r = !0, (c = function (e) {
                                    try {
                                        var t = e.querySelector('link[rel=\'canonical\']');
                                        if (null !== t)
                                            return t.href;
                                    } catch (e) {
                                    }
                                    return null;
                                }(g.document)) && (e = c))), g.context && g.context.sourceUrl && (a = !0);
                            t.push(p), i++;
                        } while (g !== h.top);
                        return t.reverse(), {
                            referer: u || null,
                            reachedTop: r,
                            isAmp: o,
                            numIframes: i - 1,
                            stack: t,
                            canonicalUrl: e || null
                        };
                    });
            },
            23: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return u;
                });
                var r = n(0), s = n(35), i = n(10), o = n.n(i), a = n(5);
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
                    }, c);
            },
            236: function (e, t, n) {
                n(237);
                var r = n(52);
                e.exports = r('Array', 'findIndex');
            },
            237: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(56).findIndex, o = n(51), a = n(60), c = 'findIndex', u = !0, s = a(c);
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
            24: function (e, t, n) {
                var o = n(19);
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
            244: function (e, t, n) {
                'use strict';
                t.a = function () {
                    window.addEventListener('message', u, !1);
                };
                var r = n(9), b = n.n(r), v = n(38), i = n(5), o = n.n(i), y = n(0), h = n(23), a = n(10), m = n.n(a), S = n(11), c = n(12), d = n.n(c), A = o.a.EVENTS.BID_WON;
                function u(e) {
                    var t, n, r, i, o, a, c, u, s, d = e.message ? 'message' : 'data', f = {};
                    try {
                        f = JSON.parse(e[d]);
                    } catch (e) {
                        return;
                    }
                    if (f && f.adId) {
                        var l, p = m()(h.a.getBidsReceived(), function (e) {
                                return e.adId === f.adId;
                            });
                        if (p && 'Prebid Request' === f.message && (n = e, r = (t = p).adId, i = t.ad, o = t.adUrl, a = t.width, c = t.height, u = t.renderer, s = t.cpm, Object(S.c)(u) ? Object(S.b)(u, t) : r && (O(t), n.source.postMessage(JSON.stringify({
                                message: 'Prebid Response',
                                ad: Object(y.replaceAuctionPrice)(i, s),
                                adUrl: Object(y.replaceAuctionPrice)(o, s),
                                adId: r,
                                width: a,
                                height: c
                            }), n.origin)), h.a.addWinningBid(p), b.a.emit(A, p)), p && 'Prebid Native' === f.message) {
                            if ('assetRequest' === f.action) {
                                var g = Object(v.d)(f, p);
                                return void e.source.postMessage(JSON.stringify(g), e.origin);
                            }
                            if ('allAssetRequest' === f.action ? (l = Object(v.c)(f, p), e.source.postMessage(JSON.stringify(l), e.origin)) : 'resizeNativeHeight' === f.action && (p.height = f.height, p.width = f.width, O(p)), 'click' === Object(v.b)(f, p))
                                return;
                            h.a.addWinningBid(p), b.a.emit(A, p);
                        }
                    }
                }
                function O(e) {
                    var a = e.adId, c = e.adUnitCode, u = e.width, s = e.height;
                    [
                        'div',
                        'iframe'
                    ].forEach(function (e) {
                        var t, n, r, i, o = (t = e + ':not([style*="display: none"])', n = function (e, t) {
                                return window.googletag ? function (n) {
                                    return m()(window.googletag.pubads().getSlots(), function (t) {
                                        return m()(t.getTargetingKeys(), function (e) {
                                            return d()(t.getTargeting(e), n);
                                        });
                                    }).getSlotElementId();
                                }(e) : window.apntag ? function (e) {
                                    var t = window.apntag.getTag(e);
                                    return t && t.targetId;
                                }(t) : t;
                            }(a, c), (r = document.getElementById(n)) && r.querySelector(t));
                        o ? ((i = o.style).width = u + 'px', i.height = s + 'px') : Object(y.logWarn)('Unable to locate matching page element for adUnitCode '.concat(c, '.  Can\'t resize it to ad\'s dimensions.  Please review setup.'));
                    });
                }
            },
            245: function (e, t, n) {
                'use strict';
                t.a = function (e) {
                    const $___old_ebd7b9444722d862 = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                    try {
                        if ($___old_ebd7b9444722d862)
                            ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_598d5432cbab4e48.sessionStorage));
                        return function () {
                            var t;
                            try {
                                e = e || window.sessionStorage, t = JSON.parse(e.getItem(u));
                            } catch (e) {
                            }
                            t && p(t, !0);
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_ebd7b9444722d862)
                            ({}.constructor.defineProperty(window, 'sessionStorage', $___old_ebd7b9444722d862));
                    }
                };
                var r, i, o = n(3), a = n(0), c = n(35), u = 'pbjs:debugging';
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
                n(8);
                var o = n(0), i = n(3), r = n(12), a = (n.n(r), n(13)), c = 'outstream', u = 'instream';
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
                }.call(e, t(36)));
            },
            27: function (e, t) {
                e.exports = function (e) {
                    return 'object' == typeof e ? null !== e : 'function' == typeof e;
                };
            },
            28: function (e, t) {
                var n = {}.hasOwnProperty;
                e.exports = function (e, t) {
                    return n.call(e, t);
                };
            },
            29: function (e, t, n) {
                function r(e) {
                    return 'function' == typeof e ? e : void 0;
                }
                var i = n(43), o = n(26);
                e.exports = function (e, t) {
                    return arguments.length < 2 ? r(i[e]) || r(o[e]) : i[e] && i[e][t] || o[e] && o[e][t];
                };
            },
            3: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return S;
                }), n.d(t, 'b', function () {
                    return x;
                });
                var r = n(45), i = n(10), a = n.n(i), o = n(12), c = n.n(o), u = n(80), s = n.n(u), d = n(0);
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
                var b = n(92), v = n(0), y = n(5), h = 'TRUE' === v.getParameterByName(y.DEBUG_MODE).toUpperCase(), m = window.location.origin, S = 'random', A = {};
                A[S] = !0, A.fixed = !0;
                var O = S, E = {
                        LOW: 'low',
                        MEDIUM: 'medium',
                        HIGH: 'high',
                        AUTO: 'auto',
                        DENSE: 'dense',
                        CUSTOM: 'custom'
                    };
                var T, I, C, j, w, x = (j = [], w = null, _(), {
                        getCurrentBidder: function () {
                            return w;
                        },
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
                                var t = 'fpd' === e ? 'ortb2' : e, n = 'fpd' === e ? B(r[e]) : r[e];
                                v.isPlainObject(T[t]) && v.isPlainObject(n) && (n = g({}, T[t], n)), i[t] = I[t] = n;
                            }), k(i)) : v.logError('setConfig options must be an object');
                        },
                        setDefaults: function (e) {
                            v.isPlainObject(T) ? (g(T, e), g(I, e)) : v.logError('defaults must be an object');
                        },
                        resetConfig: _,
                        runWithBidder: R,
                        callbackWithBidder: function (o) {
                            return function (i) {
                                return function () {
                                    if ('function' == typeof i) {
                                        for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                                            n[r] = arguments[r];
                                        return R(o, (e = v.bind).call.apply(e, [
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
                                        var t = 'fpd' === e ? 'ortb2' : e, n = 'fpd' === e ? B(i.config[e]) : i.config[e];
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
                                e.fpd ? (e.ortb2Imp ? v.mergeDeep(e.ortb2Imp, D(e.fpd)) : e.ortb2Imp = D(e.fpd), t.push((e.fpd, f(e, ['fpd'])))) : t.push(e);
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
                function _() {
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
                        _priceGranularity: E.MEDIUM,
                        set priceGranularity(e) {
                            o(e) && ('string' == typeof e ? this._priceGranularity = i(e) ? e : E.MEDIUM : v.isPlainObject(e) && (this._customPriceBucket = e, this._priceGranularity = E.CUSTOM, v.logMessage('Using custom price granularity')));
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
                        _bidderSequence: O,
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
                                    if ('secondaryBidders' !== r)
                                        return v.logWarn('Auction Options given an incorrect param: '.concat(r)), !1;
                                    if ('secondaryBidders' === r) {
                                        if (!v.isArray(e[r]))
                                            return v.logWarn('Auction Options '.concat(r, ' must be of type Array')), !1;
                                        if (!e[r].every(v.isStr))
                                            return v.logWarn('Auction Options '.concat(r, ' must be only string')), !1;
                                    }
                                }
                                return !0;
                            }(e) || (this._auctionOptions = e);
                        }
                    };
                    function i(t) {
                        return a()(Object.keys(E), function (e) {
                            return t === E[e];
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
                    I && k(Object.keys(I).reduce(function (e, t) {
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
                function B(r) {
                    var t = {};
                    return Object.keys(r).forEach(function (n) {
                        var e = 'context' === n ? 'site' : n;
                        t[e] = 'site' === e || 'user' === e ? Object.keys(r[n]).reduce(function (e, t) {
                            return 'data' === t ? v.mergeDeep(e, { ext: { data: r[n][t] } }) : v.mergeDeep(e, l({}, t, r[n][t])), e;
                        }, {}) : r[n];
                    }), t;
                }
                function D(r) {
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
                function k(t) {
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
                function R(e, t) {
                    w = e;
                    try {
                        return t();
                    } finally {
                        w = null;
                    }
                }
            },
            30: function (e, t, n) {
                var r = n(31);
                e.exports = !r(function () {
                    return 7 != Object.defineProperty({}, 1, {
                        get: function () {
                            return 7;
                        }
                    })[1];
                });
            },
            31: function (e, t) {
                e.exports = function (e) {
                    try {
                        return !!e();
                    } catch (e) {
                        return !0;
                    }
                };
            },
            32: function (e, t, n) {
                var r = n(30), i = n(33), o = n(46);
                e.exports = r ? function (e, t, n) {
                    return i.f(e, t, o(1, n));
                } : function (e, t, n) {
                    return e[t] = n, e;
                };
            },
            33: function (e, t, n) {
                var r = n(30), i = n(74), o = n(15), a = n(55), c = Object.defineProperty;
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
            34: function (e, t, n) {
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
            35: function (e, t, n) {
                'use strict';
                n.d(t, 'b', function () {
                    return W;
                }), n.d(t, 'a', function () {
                    return L;
                }), t.k = function (e) {
                    var t, i, b, v, o = e.adUnits, n = e.adUnitCodes, r = e.callback, a = e.cbTimeout, c = e.labels, u = e.auctionId, y = o, s = c, d = n, h = [], f = [], l = [], p = u || P.generateUUID(), g = r, m = a, S = [], A = new Set();
                    function O() {
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
                    function E(n, e) {
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
                        })).length && q.emit(G.EVENTS.BID_TIMEOUT, r)), b = L, i = Date.now(), q.emit(G.EVENTS.AUCTION_END, O()), Q(y, function () {
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
                                var t = _.b.getConfig('userSync') || {};
                                t.enableOverride || N(t.syncDelay);
                            }
                        }));
                    }
                    function T() {
                        P.logInfo('Bids Received for Auction with id: '.concat(p), f), b = L, E(!1, !0);
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
                                    e = E.bind(null, !0), t = setTimeout(e, m), v = t, b = W, q.emit(G.EVENTS.AUCTION_INIT, O());
                                    var r, i, o, a, c, u, s = (r = T, i = f, o = 0, a = !1, c = new Set(), u = {}, {
                                            addBidResponse: function (e, t) {
                                                u[t.requestId] = !0, o++;
                                                var n = function (e) {
                                                    var t = e.adUnitCode, n = e.bid, r = e.bidderRequest, i = e.auctionId, o = r.start, a = R({}, n, {
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
                                                    f && f.url && f.render && (!0 !== f.backupOnly || !n.renderer) ? l = f : u && u.url && u.render && (!0 !== u.backupOnly || !n.renderer) && (l = u), l && (a.renderer = x.a.install({ url: l.url }), a.renderer.setRender(l.render));
                                                    var p = Z(n.mediaType, c, _.b.getConfig('mediaTypePriceGranularity')), g = Object(w.a)(a.cpm, 'object' === k(p) ? p : _.b.getConfig('customPriceBucket'), _.b.getConfig('currency.granularityMultiplier'));
                                                    return a.pbLg = g.low, a.pbMg = g.med, a.pbHg = g.high, a.pbAg = g.auto, a.pbDg = g.dense, a.pbCg = g.custom, a;
                                                }({
                                                    adUnitCode: e,
                                                    bid: t,
                                                    bidderRequest: this,
                                                    auctionId: i.getAuctionId()
                                                });
                                                'video' === n.mediaType ? function (e, t, n, r) {
                                                    var i = !0, o = Object(j.getBidRequest)(t.originalRequestId || t.requestId, [n]), a = o && Object(j.deepAccess)(o, 'mediaTypes.video'), c = a && Object(j.deepAccess)(a, 'context');
                                                    _.b.getConfig('cache.url') && c !== D.b && (!t.videoCacheKey || _.b.getConfig('cache.ignoreBidderCacheKey') ? (i = !1, X(e, t, r, o)) : t.vastUrl || (P.logError('videoCacheKey specified but not required vastUrl for video bid'), i = !1)), i && ($(e, t), r());
                                                }(i, n, this, d) : ($(i, n), d());
                                            },
                                            adapterDone: function () {
                                                var t, e = i.getBidRequests(), n = _.b.getConfig('auctionOptions');
                                                c.add(this), !n || P.isEmpty(n) || (t = n.secondaryBidders) && !e.every(function (e) {
                                                    return B()(t, e.bidderCode);
                                                }) && (e = e.filter(function (e) {
                                                    return !B()(t, e.bidderCode);
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
                            var r = !0, i = _.b.getConfig('maxRequestsPerOrigin') || z;
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
                        executeCallback: E,
                        callBids: function () {
                            b = F, t = Date.now();
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
                var j = n(0), w = n(45), a = n(38), o = n(96), x = n(11), _ = n(3), r = n(44), i = n(13), c = n(10), U = n.n(c), u = n(12), B = n.n(u), D = n(25), s = n(2);
                function k(e) {
                    return (k = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function R() {
                    return (R = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var N = r.a.syncUsers, P = n(0), M = n(8).default, q = n(9), G = n(5), F = 'started', W = 'inProgress', L = 'completed';
                q.on(G.EVENTS.BID_ADJUSTMENT, function (e) {
                    !function (e) {
                        var t, n = e.bidderCode, r = e.cpm;
                        if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && 'function' == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD] && 'function' == typeof pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t))
                            try {
                                r = t(e.cpm, R({}, e));
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
                    t.timeToRespond > e.getTimeout() + _.b.getConfig('timeoutBuffer') && e.executeCallback(!0);
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
                                t.native && (r = R({}, r, Object(a.e)(t, n)));
                                return r;
                            }(t.bidderCode, t, r));
                        }
                        t.adserverTargeting = R(t.adserverTargeting || {}, n);
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
                        var n = Z(e, t, _.b.getConfig('mediaTypePriceGranularity'));
                        return 'string' == typeof e && n ? 'string' == typeof n ? n : 'custom' : _.b.getConfig('priceGranularity');
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
                    }), !_.b.getConfig('cache.url') || t && !1 === P.deepAccess(u, ''.concat(t, '.sendStandardTargeting')) || (o = Object(j.parseUrl)(_.b.getConfig('cache.url')), void 0 === U()(i, function (e) {
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
            36: function (e, t) {
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
            37: function (e, t, n) {
                var r = n(16), i = n(91);
                e.exports = r ? i : function (e) {
                    return Set.prototype.values.call(e);
                };
            },
            378: function (e, t, n) {
                n(379);
                var r = n(52);
                e.exports = r('String', 'includes');
            },
            379: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(380), o = n(49);
                r({
                    target: 'String',
                    proto: !0,
                    forced: !n(382)('includes')
                }, {
                    includes: function (e, t) {
                        return !!~String(o(this)).indexOf(i(e), 1 < arguments.length ? t : void 0);
                    }
                });
            },
            38: function (e, t, n) {
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
                    if (Object(d.deepAccess)(t, 'native.image') && (!Object(d.deepAccess)(t, 'native.image.height') || !Object(d.deepAccess)(t, 'native.image.width')))
                        return !1;
                    if (Object(d.deepAccess)(t, 'native.icon') && (!Object(d.deepAccess)(t, 'native.icon.height') || !Object(d.deepAccess)(t, 'native.icon.width')))
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
            380: function (e, t, n) {
                var r = n(381);
                e.exports = function (e) {
                    if (r(e))
                        throw TypeError('The method doesn\'t accept regular expressions');
                    return e;
                };
            },
            381: function (e, t, n) {
                var r = n(27), i = n(48), o = n(21)('match');
                e.exports = function (e) {
                    var t;
                    return r(e) && (void 0 !== (t = e[o]) ? !!t : 'RegExp' == i(e));
                };
            },
            382: function (e, t, n) {
                var r = n(21)('match');
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
            39: function (e, t, n) {
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
                        const $___old_a6eff00a7616ebd9 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest'), $___old_da428229df7de7b3 = {}.constructor.getOwnPropertyDescriptor(window, 'XMLHttpRequest');
                        try {
                            if ($___old_a6eff00a7616ebd9)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_7d923b5649fd1120.XMLHttpRequest));
                            if ($___old_da428229df7de7b3)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___mock_7d923b5649fd1120.XMLHttpRequest));
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
                            if ($___old_a6eff00a7616ebd9)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_a6eff00a7616ebd9));
                            if ($___old_da428229df7de7b3)
                                ({}.constructor.defineProperty(window, 'XMLHttpRequest', $___old_da428229df7de7b3));
                        }
                    };
                }
            },
            40: function (e, t) {
                e.exports = {};
            },
            41: function (e, t, n) {
                var i = n(15), o = n(19), a = n(21)('species');
                e.exports = function (e, t) {
                    var n, r = i(e).constructor;
                    return void 0 === r || null == (n = i(r)[a]) ? t : o(n);
                };
            },
            42: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return D;
                }), t.b = k, n.d(t, 'c', function () {
                    return g;
                });
                var A = n(0), O = n(3), E = n(38), r = n(23), i = n(94), o = n(2), a = n(13), c = n(12), T = n.n(c), u = n(10), I = n.n(u), s = n(95);
                function C() {
                    return (C = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function j(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                function w(e) {
                    return function (e) {
                        if (Array.isArray(e))
                            return d(e);
                    }(e) || function (e) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                            return Array.from(e);
                    }(e) || function (e, t) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return d(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n && e.constructor && (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n)
                            return Array.from(e);
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return d(e, t);
                    }(e) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function d(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                var x = n(0), _ = n(5), U = [], B = Object.keys(_.TARGETING_KEYS).map(function (e) {
                        return _.TARGETING_KEYS[e];
                    }), f = function (e) {
                        return e.responseTimestamp + 1000 * e.ttl - 1000 > Object(A.timestamp)();
                    }, l = function (e) {
                        return e && (e.status && !T()([_.BID_STATUS.RENDERED], e.status) || !e.status);
                    }, D = Object(a.b)('sync', function (e, r) {
                        var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                        if (0 === i)
                            return e;
                        if (3 < arguments.length && void 0 !== arguments[3] && arguments[3])
                            return e;
                        var o = [], a = O.b.getConfig('sendBidsControl.dealPrioritization'), c = Object(A.groupBy)(e, 'adUnitCode');
                        return Object.keys(c).forEach(function (e) {
                            var t = [], n = Object(A.groupBy)(c[e], 'bidderCode');
                            Object.keys(n).forEach(function (e) {
                                return t.push(n[e].reduce(r));
                            }), 0 < i ? (t = a ? t.sort(k(!0)) : t.sort(function (e, t) {
                                return t.cpm - e.cpm;
                            }), o.push.apply(o, w(t.slice(0, i)))) : o.push.apply(o, w(t));
                        }), o;
                    });
                function k() {
                    var n = 0 < arguments.length && void 0 !== arguments[0] && arguments[0];
                    return function (e, t) {
                        return void 0 !== e.adserverTargeting.hb_deal && void 0 === t.adserverTargeting.hb_deal ? -1 : void 0 === e.adserverTargeting.hb_deal && void 0 !== t.adserverTargeting.hb_deal ? 1 : n ? t.cpm - e.cpm : t.adserverTargeting.hb_pb - e.adserverTargeting.hb_pb;
                    };
                }
                var R, N, p, g = (R = r.a, p = {}, (N = {}).setLatestAuctionForAdUnit = function (e, t) {
                        p[e] = t;
                    }, N.resetPresetTargeting = function (e, t) {
                        var n, i;
                        Object(A.isGptPubadsDefined)() && (n = M(e), i = R.getAdUnits().filter(function (e) {
                            return T()(n, e.code);
                        }), window.googletag.pubads().getSlots().forEach(function (n) {
                            var r = x.isFn(t) && t(n);
                            U.forEach(function (t) {
                                i.forEach(function (e) {
                                    (e.code === n.getAdUnitPath() || e.code === n.getSlotElementId() || x.isFn(r) && r(e.code)) && n.setTargeting(t, null);
                                });
                            });
                        }));
                    }, N.resetPresetTargetingAST = function (e) {
                        M(e).forEach(function (e) {
                            var t, n, r = window.apntag.getTag(e);
                            r && r.keywords && (t = Object.keys(r.keywords), n = {}, t.forEach(function (e) {
                                T()(U, e.toLowerCase()) || (n[e] = r.keywords[e]);
                            }), window.apntag.modifyTag(e, { keywords: n }));
                        });
                    }, N.getAllTargeting = function (e) {
                        var t, n, r, i, o, a, c, u, s, d, f = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : q(), l = M(e), p = (c = l, u = f, s = N.getWinningBids(c, u), d = G(), (s = s.map(function (o) {
                                return j({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function (e) {
                                    return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === d.indexOf(e);
                                }).reduce(function (e, t) {
                                    var n = [o.adserverTargeting[t]], r = j({}, t.substring(0, 20), n);
                                    if (t !== _.TARGETING_KEYS.DEAL)
                                        return [].concat(w(e), [r]);
                                    var i = j({}, ''.concat(t, '_').concat(o.bidderCode).substring(0, 20), n);
                                    return [].concat(w(e), [
                                        r,
                                        i
                                    ]);
                                }, []));
                            })).concat((a = l, f.filter(function (e) {
                                return T()(a, e.adUnitCode);
                            }).map(function (e) {
                                return C({}, e);
                            }).reduce(F, []).map(W).filter(function (e) {
                                return e;
                            }))).concat(O.b.getConfig('enableSendAllBids') ? (n = l, r = f, i = B.concat(E.a), o = O.b.getConfig('sendBidsControl.bidLimit'), D(r, A.getHighestCpm, o).map(function (t) {
                                if (P(t, n))
                                    return j({}, t.adUnitCode, L(t, i.filter(function (e) {
                                        return void 0 !== t.adserverTargeting[e];
                                    })));
                            }).filter(function (e) {
                                return e;
                            })) : function (e, t) {
                                if (!0 !== O.b.getConfig('targetingControls.alwaysIncludeDeals'))
                                    return [];
                                var n = B.concat(E.a);
                                return D(t, A.getHighestCpm).map(function (t) {
                                    if (t.dealId && P(t, e))
                                        return j({}, t.adUnitCode, L(t, n.filter(function (e) {
                                            return void 0 !== t.adserverTargeting[e];
                                        })));
                                }).filter(function (e) {
                                    return e;
                                });
                            }(l, f)).concat((t = l, R.getAdUnits().filter(function (e) {
                                return T()(t, e.code) && g(e);
                            }).map(function (e) {
                                return j({}, e.code, (t = g(e), Object.keys(t).map(function (e) {
                                    return j({}, e, x.isArray(t[e]) ? t[e] : t[e].split(','));
                                })));
                                var t;
                            }))));
                        function g(e) {
                            return Object(A.deepAccess)(e, _.JSON_MAPPING.ADSERVER_TARGETING);
                        }
                        p.map(function (t) {
                            Object.keys(t).map(function (e) {
                                t[e].map(function (e) {
                                    -1 === U.indexOf(Object.keys(e)[0]) && (U = Object.keys(e).concat(U));
                                });
                            });
                        });
                        var b = Object.keys(C({}, _.DEFAULT_TARGETING_KEYS, _.NATIVE_KEYS)), v = O.b.getConfig('targetingControls.allowTargetingKeys') || b;
                        Array.isArray(v) && 0 < v.length && (p = function (e, r) {
                            var i = C({}, _.TARGETING_KEYS, _.NATIVE_KEYS), o = Object.keys(i), a = {};
                            Object(A.logInfo)('allowTargetingKeys - allowed keys [ '.concat(r.map(function (e) {
                                return i[e];
                            }).join(', '), ' ]')), e.map(function (e) {
                                var t = Object.keys(e)[0], n = e[t].filter(function (e) {
                                        var n = Object.keys(e)[0], t = 0 === o.filter(function (e) {
                                                return 0 === n.indexOf(i[e]);
                                            }).length || I()(r, function (e) {
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
                            return Object(A.logInfo)('allowTargetingKeys - removed keys [ '.concat(t.join(', '), ' ]')), e.filter(function (e) {
                                return 0 < e[Object.keys(e)[0]].length;
                            });
                        }(p, v)), p = p.map(function (e) {
                            return j({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function (e) {
                                return j({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(', '));
                            }).reduce(function (e, t) {
                                return C(t, e);
                            }, {}));
                        }).reduce(function (e, t) {
                            var n = Object.keys(t)[0];
                            return e[n] = C({}, e[n], t[n]), e;
                        }, {});
                        var y, h, m, S = O.b.getConfig('targetingControls.auctionKeyMaxChars');
                        return S && (Object(A.logInfo)('Detected \'targetingControls.auctionKeyMaxChars\' was active for this auction; set with a limit of '.concat(S, ' characters.  Running checks on auction keys...')), y = p, h = S, m = Object(A.deepClone)(y), p = Object.keys(m).map(function (e) {
                            return {
                                adUnitCode: e,
                                adserverTargeting: m[e]
                            };
                        }).sort(k()).reduce(function (e, t, n, r) {
                            var i, o = (i = t.adserverTargeting, Object.keys(i).reduce(function (e, t) {
                                    return e + ''.concat(t, '%3d').concat(encodeURIComponent(i[t]), '%26');
                                }, ''));
                            n + 1 === r.length && (o = o.slice(0, -3));
                            var a = t.adUnitCode, c = o.length;
                            return c <= h ? (h -= c, Object(A.logInfo)('AdUnit \''.concat(a, '\' auction keys comprised of ').concat(c, ' characters.  Deducted from running threshold; new limit is ').concat(h), m[a]), e[a] = m[a]) : Object(A.logWarn)('The following keys for adUnitCode \''.concat(a, '\' exceeded the current limit of the \'auctionKeyMaxChars\' setting.\nThe key-set size was ').concat(c, ', the current allotted amount was ').concat(h, '.\n'), m[a]), n + 1 === r.length && 0 === Object.keys(e).length && Object(A.logError)('No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting.'), e;
                        }, {})), l.forEach(function (e) {
                            p[e] || (p[e] = {});
                        }), p;
                    }, N.setTargetingForGPT = function (i, e) {
                        window.googletag.pubads().getSlots().forEach(function (r) {
                            Object.keys(i).filter((e || Object(A.isAdUnitCodeMatchingSlot))(r)).forEach(function (n) {
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
                    }, N.getWinningBids = function (e) {
                        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : q(), t = M(e), r = n.filter(function (e) {
                                return T()(t, e.adUnitCode);
                            }).filter(function (e) {
                                return 0 < e.cpm;
                            }).map(function (e) {
                                return e.adUnitCode;
                            }).filter(A.uniques).map(function (t) {
                                return n.filter(function (e) {
                                    return e.adUnitCode === t ? e : null;
                                }).reduce(A.getHighestCpm);
                            });
                        return Object(s.b)(r, t, n);
                    }, N.setTargetingForAst = function (e) {
                        var r = N.getAllTargeting(e);
                        try {
                            N.resetPresetTargetingAST(e);
                        } catch (e) {
                            x.logError('unable to reset targeting for AST' + e);
                        }
                        Object.keys(r).forEach(function (n) {
                            return Object.keys(r[n]).forEach(function (e) {
                                var t;
                                x.logMessage('Attempting to set targeting for targetId: '.concat(n, ' key: ').concat(e, ' value: ').concat(r[n][e])), (x.isStr(r[n][e]) || x.isArray(r[n][e])) && (t = {}, e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, { overrideKeyValue: !0 }));
                            });
                        });
                    }, N.isApntagDefined = function () {
                        if (window.apntag && x.isFn(window.apntag.setKeywords))
                            return !0;
                    }, N);
                function P(e, t) {
                    return e.adserverTargeting && t && (x.isArray(t) && T()(t, e.adUnitCode) || 'string' == typeof t && e.adUnitCode === t);
                }
                function M(e) {
                    return 'string' == typeof e ? [e] : x.isArray(e) ? e : R.getAdUnitCodes() || [];
                }
                function q() {
                    var e = R.getBidsReceived();
                    return O.b.getConfig('useBidCache') || (e = e.filter(function (e) {
                        return p[e.adUnitCode] === e.auctionId;
                    })), e = e.filter(function (e) {
                        return Object(A.deepAccess)(e, 'video.context') !== o.a;
                    }).filter(function (e) {
                        return 'banner' !== e.mediaType || Object(i.c)([
                            e.width,
                            e.height
                        ]);
                    }).filter(l).filter(f), D(e, A.getOldestHighestCpmBid);
                }
                function G() {
                    return R.getStandardBidderAdServerTargeting().map(function (e) {
                        return e.key;
                    }).concat(B).filter(A.uniques);
                }
                function F(r, i, e, t) {
                    return Object.keys(i.adserverTargeting).filter(b()).forEach(function (e) {
                        var t, n;
                        r.length && r.filter((n = e, function (e) {
                            return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n];
                        })).forEach((t = e, function (e) {
                            x.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(A.uniques), delete i.adserverTargeting[t];
                        }));
                    }), r.push(i), r;
                }
                function b() {
                    var t = G().concat(E.a);
                    return function (e) {
                        return -1 === t.indexOf(e);
                    };
                }
                function W(t) {
                    return j({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(b()).map(function (e) {
                        return j({}, e.substring(0, 20), [t.adserverTargeting[e]]);
                    }));
                }
                function L(t, e) {
                    return e.map(function (e) {
                        return j({}, ''.concat(e, '_').concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]]);
                    });
                }
            },
            43: function (e, t) {
                e.exports = {};
            },
            44: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return S;
                });
                var a = n(0), r = n(3), i = n(12), o = n.n(i), c = n(7);
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
                            return setTimeout(O, Number(e));
                        O();
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
                function O() {
                    if (h.syncEnabled && l.browserSupportsCookies) {
                        try {
                            !function () {
                                if (!y.image)
                                    return;
                                E(g.image, function (e) {
                                    var t = u(e, 2), n = t[0], r = t[1];
                                    a.logMessage('Invoking image pixel user sync for bidder: '.concat(n)), a.triggerPixel(r);
                                });
                            }(), function () {
                                if (!y.iframe)
                                    return;
                                E(g.iframe, function (e) {
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
                function E(e, t) {
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
            45: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return d;
                }), n.d(t, 'b', function () {
                    return h;
                });
                var r = n(10), v = n.n(r), i = n(0), y = 2, o = {
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
            46: function (e, t) {
                e.exports = function (e, t) {
                    return {
                        enumerable: !(1 & e),
                        configurable: !(2 & e),
                        writable: !(4 & e),
                        value: t
                    };
                };
            },
            47: function (e, t, n) {
                var r = n(73), i = n(49);
                e.exports = function (e) {
                    return r(i(e));
                };
            },
            48: function (e, t) {
                var n = {}.toString;
                e.exports = function (e) {
                    return n.call(e).slice(8, -1);
                };
            },
            49: function (e, t) {
                e.exports = function (e) {
                    if (null == e)
                        throw TypeError('Can\'t call method on ' + e);
                    return e;
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
                        BID_VIEWABLE: 'bidViewable'
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
                        SOURCE: 'hb_source',
                        FORMAT: 'hb_format',
                        UUID: 'hb_uuid',
                        CACHE_ID: 'hb_cache_id',
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
            50: function (e, t, n) {
                var r = n(58), i = Math.min;
                e.exports = function (e) {
                    return 0 < e ? i(r(e), 9007199254740991) : 0;
                };
            },
            51: function (e, t) {
                e.exports = function () {
                };
            },
            52: function (e, t, n) {
                var r = n(29);
                e.exports = r;
            },
            53: function (e, t) {
                e.exports = {};
            },
            54: function (e, t, n) {
                var r, i, o, a, c, u, s, d, f = n(117), l = n(26), p = n(27), g = n(32), b = n(28), v = n(65), y = n(53), h = l.WeakMap;
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
            543: function (e, t, n) {
                var r = n(544);
                e.exports = r;
            },
            544: function (e, t, n) {
                n(545);
                var r = n(43);
                e.exports = r.Number.isInteger;
            },
            545: function (e, t, n) {
                n(14)({
                    target: 'Number',
                    stat: !0
                }, { isInteger: n(546) });
            },
            546: function (e, t, n) {
                var r = n(27), i = Math.floor;
                e.exports = function (e) {
                    return !r(e) && isFinite(e) && i(e) === e;
                };
            },
            55: function (e, t, n) {
                var i = n(27);
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
                        for (var i, o, a = O(e), c = A(a), u = S(t, n, 3), s = E(c.length), d = 0, f = r || T, l = g ? f(e, s) : b ? f(e, 0) : void 0; d < s; d++)
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
                var S = n(24), A = n(73), O = n(57), E = n(50), T = n(105), I = [].push;
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
                var r = n(49);
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
                var c = n(30), u = n(31), s = n(28), d = Object.defineProperty, f = {};
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
                var r = n(62), i = n(40), o = n(21)('iterator');
                e.exports = function (e) {
                    if (null != e)
                        return e[o] || e['@@iterator'] || i[r(e)];
                };
            },
            62: function (e, t, n) {
                var r = n(63), i = n(48), o = n(21)('toStringTag'), a = 'Arguments' == i(function () {
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
                r[n(21)('toStringTag')] = 'z', e.exports = '[object z]' === String(r);
            },
            64: function (e, t, n) {
                var o = n(63), a = n(33).f, c = n(32), u = n(28), s = n(116), d = n(21)('toStringTag');
                e.exports = function (e, t, n, r) {
                    var i;
                    e && (i = n ? e : e.prototype, u(i, d) || a(i, d, {
                        configurable: !0,
                        value: t
                    }), r && !o && c(i, 'toString', s));
                };
            },
            65: function (e, t, n) {
                var r = n(76), i = n(59), o = r('keys');
                e.exports = function (e) {
                    return o[e] || (o[e] = i(e));
                };
            },
            66: function (e, t, n) {
                'use strict';
                function y() {
                    return this;
                }
                var h = n(14), m = n(125), S = n(89), A = n(127), O = n(64), E = n(32), T = n(87), r = n(21), I = n(16), C = n(40), i = n(88), j = i.IteratorPrototype, w = i.BUGGY_SAFARI_ITERATORS, x = r('iterator'), _ = 'values';
                e.exports = function (e, t, n, r, i, o, a) {
                    m(n, t, r);
                    function c(e) {
                        if (e === i && b)
                            return b;
                        if (!w && e in p)
                            return p[e];
                        switch (e) {
                        case 'keys':
                        case _:
                        case 'entries':
                            return function () {
                                return new n(this, e);
                            };
                        }
                        return function () {
                            return new n(this);
                        };
                    }
                    var u, s, d, f = t + ' Iterator', l = !1, p = e.prototype, g = p[x] || p['@@iterator'] || i && p[i], b = !w && g || c(i), v = 'Array' == t && p.entries || g;
                    if (v && (u = S(v.call(new e())), j !== Object.prototype && u.next && (I || S(u) === j || (A ? A(u, j) : 'function' != typeof u[x] && E(u, x, y)), O(u, f, !0, !0), I && (C[f] = y))), i == _ && g && g.name !== _ && (l = !0, b = function () {
                            return g.call(this);
                        }), I && !a || p[x] === b || E(p, x, b), C[t] = b, i)
                        if (s = {
                                values: c(_),
                                keys: o ? b : c('keys'),
                                entries: c('entries')
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
            68: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return r;
                }), t.b = function () {
                    window && window.location && window.location.href && window.location.href.includes(i) && console.log.apply(console, function (e, t) {
                        return e = [].slice.call(e), t && e.unshift(t), e.unshift('display: inline-block; color: #fff; background: #be90d4; padding: 1px 4px; border-radius: 3px;'), e.unshift('%cSbly Prebid'), e;
                    }(arguments, 'SBLY:'));
                };
                var r = 'sbly_use_fake_bids', i = 'sbly_prebid_debug';
                String.prototype.hashCode = function () {
                    var e, t = 0;
                    if (0 === this.length)
                        return t;
                    for (e = 0; e < this.length; e++)
                        t = (t << 5) - t + this.charCodeAt(e), t |= 0;
                    return t;
                }, String.prototype.includes || (String.prototype.includes = function (e, t) {
                    if (e instanceof RegExp)
                        throw TypeError('first argument must not be a RegExp');
                    return void 0 === t && (t = 0), -1 !== this.indexOf(e, t);
                }), Array.prototype.includes || Object.defineProperty(Array.prototype, 'includes', {
                    value: function (e, t) {
                        if (null == this)
                            throw new TypeError('"this" is null or not defined');
                        var n = Object(this), r = n.length >>> 0;
                        if (0 == r)
                            return !1;
                        var i, o, a = 0 | t, c = Math.max(0 <= a ? a : r - Math.abs(a), 0);
                        for (; c < r;) {
                            if ((i = n[c]) === (o = e) || 'number' == typeof i && 'number' == typeof o && isNaN(i) && isNaN(o))
                                return !0;
                            c++;
                        }
                        return !1;
                    }
                });
            },
            7: function (e, t, n) {
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
                var r = n(13), u = n(0), i = n(12), d = n.n(i), f = [
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
                            const $___old_0e4e9ca4e5451cc1 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                            try {
                                if ($___old_0e4e9ca4e5451cc1)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___mock_598d5432cbab4e48.localStorage));
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
                                if ($___old_0e4e9ca4e5451cc1)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___old_0e4e9ca4e5451cc1));
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
                                const $___old_d019b4b3992c2ce8 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                                try {
                                    if ($___old_d019b4b3992c2ce8)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_598d5432cbab4e48.localStorage));
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
                                    if ($___old_d019b4b3992c2ce8)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___old_d019b4b3992c2ce8));
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
                                const $___old_27a7e19318512357 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                                try {
                                    if ($___old_27a7e19318512357)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_598d5432cbab4e48.localStorage));
                                    return function () {
                                        return e && e.valid && c() ? window.localStorage.getItem(t) : null;
                                    }.apply(this, arguments);
                                } finally {
                                    if ($___old_27a7e19318512357)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___old_27a7e19318512357));
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
            70: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'adUnitSetupChecks', function () {
                    return H;
                }), n.d(t, 'checkAdUnitSetup', function () {
                    return K;
                }), t.executeCallbacks = Q;
                var r = n(18), i = n(0), o = n(244), a = n(44), l = n(3), m = n(23), p = n(42), c = n(13), u = n(245), s = n(12), g = n.n(s), b = n(67), S = n(11), d = n(34), f = n(7);
                function v(e) {
                    return function (e) {
                        if (Array.isArray(e))
                            return y(e);
                    }(e) || function (e) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                            return Array.from(e);
                    }(e) || function (e, t) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return y(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n && e.constructor && (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n)
                            return Array.from(e);
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return y(e, t);
                    }(e) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function y(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                function h(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                function A() {
                    return (A = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var O = Object(r.a)(), E = n(5), T = n(0), I = n(8).default, C = n(9), j = a.a.triggerUserSyncs, w = E.EVENTS, x = w.ADD_AD_UNITS, _ = w.BID_WON, U = w.REQUEST_BIDS, B = w.SET_TARGETING, D = w.AD_RENDER_FAILED, k = E.AD_RENDER_FAILED_REASON, R = k.PREVENT_WRITING_ON_MAIN_DOCUMENT, N = k.NO_AD, P = k.EXCEPTION, M = k.CANNOT_FIND_AD, q = k.MISSING_DOC_OR_ADID, G = {
                        bidWon: function (e) {
                            var t = m.a.getBidsRequested().map(function (e) {
                                return e.bids.map(function (e) {
                                    return e.adUnitCode;
                                });
                            }).reduce(i.flatten).filter(i.uniques);
                            return !!T.contains(t, e) || void T.logError('The "' + e + '" placement is not defined.');
                        }
                    };
                function F(e, t, n) {
                    e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n);
                }
                function W(e, t) {
                    var n = [];
                    return T.isArray(e) && (t ? e.length === t : 0 < e.length) && (e.every(function (e) {
                        return Object(i.isArrayOfNums)(e, 2);
                    }) ? n = e : Object(i.isArrayOfNums)(e, 2) && n.push(e)), n;
                }
                function L(e) {
                    var t = T.deepClone(e), n = t.mediaTypes.banner, r = W(n.sizes);
                    return 0 < r.length ? (n.sizes = r, t.sizes = r) : (T.logError('Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request.'), delete t.mediaTypes.banner), t;
                }
                function z(e) {
                    var t, n, r = T.deepClone(e), i = r.mediaTypes.video;
                    return i.playerSize && (t = 'number' == typeof i.playerSize[0] ? 2 : 1, 0 < (n = W(i.playerSize, t)).length ? (2 == t && T.logInfo('Transforming video.playerSize from [640,480] to [[640,480]] so it\'s in the proper format.'), i.playerSize = n, r.sizes = n) : (T.logError('Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request.'), delete r.mediaTypes.video.playerSize)), r;
                }
                function V(e) {
                    var t = T.deepClone(e), n = t.mediaTypes.native;
                    return n.image && n.image.sizes && !Array.isArray(n.image.sizes) && (T.logError('Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request.'), delete t.mediaTypes.native.image.sizes), n.image && n.image.aspect_ratios && !Array.isArray(n.image.aspect_ratios) && (T.logError('Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request.'), delete t.mediaTypes.native.image.aspect_ratios), n.icon && n.icon.sizes && !Array.isArray(n.icon.sizes) && (T.logError('Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request.'), delete t.mediaTypes.native.icon.sizes), t;
                }
                Object(u.a)(), O.bidderSettings = O.bidderSettings || {}, O.libLoaded = !0, O.version = 'v4.34.0', T.logInfo('Prebid.js v4.34.0 loaded'), O.adUnits = O.adUnits || [], O.triggerUserSyncs = j;
                var H = {
                        validateBannerMediaType: L,
                        validateVideoMediaType: z,
                        validateNativeMediaType: V,
                        validateSizes: W
                    }, K = Object(c.b)('sync', function (e) {
                        var c = [];
                        return e.forEach(function (e) {
                            var t, n, r, i, o = e.mediaTypes, a = e.bids;
                            a && T.isArray(a) ? o && 0 !== Object.keys(o).length ? (o.banner && (t = L(e)), o.video && (n = z(t || e)), o.native && (r = V(n || (t || e))), i = A({}, t, n, r), c.push(i)) : T.logError('Detected adUnit.code \''.concat(e.code, '\' did not have a \'mediaTypes\' object defined.  This is a required field for the auction, so this adUnit has been removed.')) : T.logError('Detected adUnit.code \''.concat(e.code, '\' did not have \'adUnit.bids\' defined or \'adUnit.bids\' is not an array. Removing adUnit from auction.'));
                        }), c;
                    }, 'checkAdUnitSetup');
                function J(e) {
                    var n = m.a[e]().filter(T.bind.call(i.adUnitsFilter, this, m.a.getAdUnitCodes())), r = m.a.getLastAuctionId();
                    return n.map(function (e) {
                        return e.adUnitCode;
                    }).filter(i.uniques).map(function (t) {
                        return n.filter(function (e) {
                            return e.auctionId === r && e.adUnitCode === t;
                        });
                    }).filter(function (e) {
                        return e && e[0] && e[0].adUnitCode;
                    }).map(function (e) {
                        return h({}, e[0].adUnitCode, { bids: e });
                    }).reduce(function (e, t) {
                        return A(e, t);
                    }, {});
                }
                function Y(e) {
                    var t = e.reason, n = e.message, r = e.bid, i = e.id, o = {
                            reason: t,
                            message: n
                        };
                    r && (o.bid = r), i && (o.adId = i), T.logError(n), C.emit(D, o);
                }
                function Q(e, t) {
                    function n(e) {
                        for (var t; t = e.shift();)
                            t();
                    }
                    n(f.c), n($), e.call(this, t);
                }
                O.getAdserverTargetingForAdUnitCodeStr = function (e) {
                    if (T.logInfo('Invoking pbjs.getAdserverTargetingForAdUnitCodeStr', arguments), e) {
                        var t = O.getAdserverTargetingForAdUnitCode(e);
                        return T.transformAdServerTargetingObj(t);
                    }
                    T.logMessage('Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode');
                }, O.getAdserverTargetingForAdUnitCode = function (e) {
                    return O.getAdserverTargeting(e)[e];
                }, O.getAdserverTargeting = function (e) {
                    return T.logInfo('Invoking pbjs.getAdserverTargeting', arguments), p.c.getAllTargeting(e);
                }, O.getNoBids = function () {
                    return T.logInfo('Invoking pbjs.getNoBids', arguments), J('getNoBids');
                }, O.getNoBidsForAdUnitCode = function (t) {
                    return {
                        bids: m.a.getNoBids().filter(function (e) {
                            return e.adUnitCode === t;
                        })
                    };
                }, O.getBidResponses = function () {
                    return T.logInfo('Invoking pbjs.getBidResponses', arguments), J('getBidsReceived');
                }, O.getBidResponsesForAdUnitCode = function (t) {
                    return {
                        bids: m.a.getBidsReceived().filter(function (e) {
                            return e.adUnitCode === t;
                        })
                    };
                }, O.setTargetingForGPTAsync = function (e, t) {
                    var n;
                    T.logInfo('Invoking pbjs.setTargetingForGPTAsync', arguments), Object(i.isGptPubadsDefined)() ? (n = p.c.getAllTargeting(e), p.c.resetPresetTargeting(e, t), p.c.setTargetingForGPT(n, t), Object.keys(n).forEach(function (t) {
                        Object.keys(n[t]).forEach(function (e) {
                            'hb_adid' === e && m.a.setStatusForBids(n[t][e], E.BID_STATUS.BID_TARGETING_SET);
                        });
                    }), C.emit(B, n)) : T.logError('window.googletag is not defined on the page');
                }, O.setTargetingForAst = function (e) {
                    T.logInfo('Invoking pbjs.setTargetingForAn', arguments), p.c.isApntagDefined() ? (p.c.setTargetingForAst(e), C.emit(B, p.c.getAllTargeting())) : T.logError('window.apntag is not defined on the page');
                }, O.renderAd = function (e, t, n) {
                    if (T.logInfo('Invoking pbjs.renderAd', arguments), T.logMessage('Calling renderAd with adId :' + t), e && t)
                        try {
                            var r, i, o, a, c, u, s, d, f, l, p, g, b, v = m.a.findBidByAdId(t);
                            v ? (v.ad = T.replaceAuctionPrice(v.ad, v.cpm), v.adUrl = T.replaceAuctionPrice(v.adUrl, v.cpm), n && n.clickThrough && (r = n.clickThrough, v.ad = T.replaceClickThrough(v.ad, r), v.adUrl = T.replaceClickThrough(v.adUrl, r)), m.a.addWinningBid(v), C.emit(_, v), i = v.height, o = v.width, a = v.ad, c = v.mediaType, u = v.adUrl, s = v.renderer, d = document.createComment('Creative '.concat(v.creativeId, ' served by ').concat(v.bidder, ' Prebid.js Header Bidding')), T.insertElement(d, e, 'body'), Object(S.c)(s) ? Object(S.b)(s, v) : e === document && !T.inIframe() || 'video' === c ? (f = 'Error trying to write ad. Ad render call ad id '.concat(t, ' was prevented from writing to the main document.'), Y({
                                reason: R,
                                message: f,
                                bid: v,
                                id: t
                            })) : a ? (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf('firefox/') && ((l = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1]) && parseInt(l, 10) < 67 && e.open('text/html', 'replace')), e.write(a), e.close(), F(e, o, i), T.callBurl(v)) : u ? ((p = T.createInvisibleIframe()).height = i, p.width = o, p.style.display = 'inline', p.style.overflow = 'hidden', p.src = u, T.insertElement(p, e, 'body'), F(e, o, i), T.callBurl(v)) : (g = 'Error trying to write ad. No ad for bid response id: '.concat(t), Y({
                                reason: N,
                                message: g,
                                bid: v,
                                id: t
                            }))) : (b = 'Error trying to write ad. Cannot find ad by given id : '.concat(t), Y({
                                reason: M,
                                message: b,
                                id: t
                            }));
                        } catch (e) {
                            var y = 'Error trying to write ad Id :'.concat(t, ' to the page:').concat(e.message);
                            Y({
                                reason: P,
                                message: y,
                                id: t
                            });
                        }
                    else {
                        var h = 'Error trying to write ad Id :'.concat(t, ' to the page. Missing document or adId');
                        Y({
                            reason: q,
                            message: h,
                            id: t
                        });
                    }
                }, O.removeAdUnit = function (e) {
                    T.logInfo('Invoking pbjs.removeAdUnit', arguments), e ? (T.isArray(e) ? e : [e]).forEach(function (e) {
                        for (var t = O.adUnits.length - 1; 0 <= t; t--)
                            O.adUnits[t].code === e && O.adUnits.splice(t, 1);
                    }) : O.adUnits = [];
                }, O.requestBids = Object(c.b)('async', function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.bidsBackHandler, n = e.timeout, r = e.adUnits, i = e.adUnitCodes, o = e.labels, a = e.auctionId;
                    C.emit(U);
                    var c = n || l.b.getConfig('bidderTimeout'), r = r || O.adUnits;
                    T.logInfo('Invoking pbjs.requestBids', arguments);
                    var u = [], s = [];
                    if (l.b.getConfig('s2sConfig', function (e) {
                            e && e.s2sConfig && (u = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
                        }), u.forEach(function (e) {
                            s.push.apply(s, v(e.bidders));
                        }), r = K(r), i && i.length ? r = r.filter(function (e) {
                            return g()(i, e.code);
                        }) : i = r && r.map(function (e) {
                            return e.code;
                        }), r.forEach(function (i) {
                            var o = Object.keys(i.mediaTypes || { banner: 'banner' }), e = i.bids.map(function (e) {
                                    return e.bidder;
                                }), a = I.bidderRegistry, t = s ? e.filter(function (e) {
                                    return !g()(s, e);
                                }) : e;
                            i.transactionId = T.generateUUID(), t.forEach(function (t) {
                                var e = a[t], n = e && e.getSpec && e.getSpec(), r = n && n.supportedMediaTypes || ['banner'];
                                o.some(function (e) {
                                    return g()(r, e);
                                }) ? b.a.incrementBidderRequestsCounter(i.code, t) : (T.logWarn(T.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter(function (e) {
                                    return e.bidder !== t;
                                }));
                            }), b.a.incrementRequestsCounter(i.code);
                        }), r && 0 !== r.length) {
                        var d = m.a.createAuction({
                                adUnits: r,
                                adUnitCodes: i,
                                callback: t,
                                cbTimeout: c,
                                labels: o,
                                auctionId: a
                            }), f = r.length;
                        15 < f && T.logInfo('Current auction '.concat(d.getAuctionId(), ' contains ').concat(f, ' adUnits.'), r), i.forEach(function (e) {
                            return p.c.setLatestAuctionForAdUnit(e, d.getAuctionId());
                        }), d.callBids();
                    } else if (T.logMessage('No adUnits configured. No bids requested.'), 'function' == typeof t)
                        try {
                            t();
                        } catch (e) {
                            T.logError('Error executing bidsBackHandler', null, e);
                        }
                }), O.requestBids.before(Q, 49), O.addAdUnits = function (e) {
                    T.logInfo('Invoking pbjs.addAdUnits', arguments), O.adUnits.push.apply(O.adUnits, l.b.convertAdUnitFpd(T.isArray(e) ? e : [e])), C.emit(x);
                }, O.onEvent = function (e, t, n) {
                    T.logInfo('Invoking pbjs.onEvent', arguments), T.isFn(t) ? !n || G[e].call(null, n) ? C.on(e, t, n) : T.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : T.logError('The event handler provided is not a function and was not set on event "' + e + '".');
                }, O.offEvent = function (e, t, n) {
                    T.logInfo('Invoking pbjs.offEvent', arguments), n && !G[e].call(null, n) || C.off(e, t, n);
                }, O.getEvents = function () {
                    return T.logInfo('Invoking pbjs.getEvents'), C.getEvents();
                }, O.registerBidAdapter = function (e, t) {
                    T.logInfo('Invoking pbjs.registerBidAdapter', arguments);
                    try {
                        I.registerBidAdapter(e(), t);
                    } catch (e) {
                        T.logError('Error registering bidder adapter : ' + e.message);
                    }
                }, O.registerAnalyticsAdapter = function (e) {
                    T.logInfo('Invoking pbjs.registerAnalyticsAdapter', arguments);
                    try {
                        I.registerAnalyticsAdapter(e);
                    } catch (e) {
                        T.logError('Error registering analytics adapter : ' + e.message);
                    }
                }, O.createBid = function (e) {
                    return T.logInfo('Invoking pbjs.createBid', arguments), Object(d.a)(e);
                };
                var $ = [], X = Object(c.b)('async', function (e) {
                        e && !T.isEmpty(e) ? (T.logInfo('Invoking pbjs.enableAnalytics for: ', e), I.enableAnalytics(e)) : T.logError('pbjs.enableAnalytics should be called with option {}');
                    }, 'enableAnalyticsCb');
                function Z(e) {
                    e.forEach(function (e) {
                        if (void 0 === e.called)
                            try {
                                e.call(), e.called = !0;
                            } catch (e) {
                                T.logError('Error processing command :', 'prebid.js', e);
                            }
                    });
                }
                O.enableAnalytics = function (e) {
                    $.push(X.bind(this, e));
                }, O.aliasBidder = function (e, t, n) {
                    T.logInfo('Invoking pbjs.aliasBidder', arguments), e && t ? I.aliasBidAdapter(e, t, n) : T.logError('bidderCode and alias must be passed as arguments', 'pbjs.aliasBidder');
                }, O.getAllWinningBids = function () {
                    return m.a.getAllWinningBids();
                }, O.getAllPrebidWinningBids = function () {
                    return m.a.getBidsReceived().filter(function (e) {
                        return e.status === E.BID_STATUS.BID_TARGETING_SET;
                    });
                }, O.getHighestCpmBids = function (e) {
                    return p.c.getWinningBids(e);
                }, O.markWinningBidAsUsed = function (t) {
                    var e = [];
                    t.adUnitCode && t.adId ? e = m.a.getBidsReceived().filter(function (e) {
                        return e.adId === t.adId && e.adUnitCode === t.adUnitCode;
                    }) : t.adUnitCode ? e = p.c.getWinningBids(t.adUnitCode) : t.adId ? e = m.a.getBidsReceived().filter(function (e) {
                        return e.adId === t.adId;
                    }) : T.logWarn('Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function.'), 0 < e.length && (e[0].status = E.BID_STATUS.RENDERED);
                }, O.getConfig = l.b.getConfig, O.setConfig = l.b.setConfig, O.setBidderConfig = l.b.setBidderConfig, O.que.push(function () {
                    return Object(o.a)();
                }), O.cmd.push = function (e) {
                    if ('function' == typeof e)
                        try {
                            e.call();
                        } catch (e) {
                            T.logError('Error processing command :', e.message, e.stack);
                        }
                    else
                        T.logError('Commands written into pbjs.cmd.push must be wrapped in a function');
                }, O.que.push = O.cmd.push, O.processQueue = function () {
                    c.b.ready(), Z(O.que), Z(O.cmd);
                }, O.getAllBidResponses = function () {
                    return function (e) {
                        var n = m.a[e]().filter(T.bind.call(i.adUnitsFilter, this, m.a.getAdUnitCodes()));
                        return JSON.parse(JSON.stringify(n.map(function (e) {
                            return e.adUnitCode;
                        }).filter(i.uniques).map(function (t) {
                            return n.filter(function (e) {
                                return e.adUnitCode === t;
                            });
                        }).filter(function (e) {
                            return e && e[0] && e[0].adUnitCode;
                        }).map(function (e) {
                            return h({}, e[0].adUnitCode, { bids: e });
                        }).reduce(function (e, t) {
                            return A(e, t);
                        }, {})));
                    }('getBidsReceived');
                }, t.default = O;
            },
            71: function (e, t, n) {
                var r = n(378);
                e.exports = r;
            },
            72: function (e, t, n) {
                'use strict';
                t.a = function (t, n) {
                    o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach(function (e) {
                        o.adServers[t][e] ? Object(i.logWarn)('Attempting to add an already registered function property '.concat(e, ' for AdServer ').concat(t, '.')) : o.adServers[t][e] = n[e];
                    });
                };
                var r = n(18), i = n(0), o = Object(r.a)();
            },
            73: function (e, t, n) {
                var r = n(31), i = n(48), o = ''.split;
                e.exports = r(function () {
                    return !Object('z').propertyIsEnumerable(0);
                }) ? function (e) {
                    return 'String' == i(e) ? o.call(e, '') : Object(e);
                } : Object;
            },
            74: function (e, t, n) {
                var r = n(30), i = n(31), o = n(75);
                e.exports = !r && !i(function () {
                    return 7 != Object.defineProperty(o('div'), 'a', {
                        get: function () {
                            return 7;
                        }
                    }).a;
                });
            },
            75: function (e, t, n) {
                var r = n(26), i = n(27), o = r.document, a = i(o) && i(o.createElement);
                e.exports = function (e) {
                    return a ? o.createElement(e) : {};
                };
            },
            76: function (e, t, n) {
                var r = n(16), i = n(77);
                (e.exports = function (e, t) {
                    return i[e] || (i[e] = void 0 !== t ? t : {});
                })('versions', []).push({
                    version: '3.6.4',
                    mode: r ? 'pure' : 'global',
                    copyright: '\xA9 2020 Denis Pushkarev (zloirock.ru)'
                });
            },
            77: function (e, t, n) {
                var r = n(26), i = n(107), o = '__core-js_shared__', a = r[o] || i(o, {});
                e.exports = a;
            },
            78: function (e, t, n) {
                var r = n(31);
                e.exports = !!Object.getOwnPropertySymbols && !r(function () {
                    return !String(Symbol());
                });
            },
            79: function (e, t, n) {
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
                var u = n(47), s = n(50), d = n(111);
                e.exports = {
                    includes: r(!0),
                    indexOf: r(!1)
                };
            },
            8: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'gdprDataHandler', function () {
                    return U;
                }), n.d(t, 'uspDataHandler', function () {
                    return B;
                }), n.d(t, 'clientTestAdapters', function () {
                    return D;
                }), n.d(t, 'allS2SBidders', function () {
                    return k;
                }), t.getAllS2SBidders = R, t.setS2STestingModule = function (e) {
                    A = e;
                };
                var h = n(0), p = n(94), g = n(38), l = n(1), y = n(4), a = n(3), r = n(13), i = n(12), m = n.n(i), o = n(10), S = n.n(o), b = n(67), c = n(22);
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
                var A, O = n(0), E = n(5), T = n(9), I = {}, C = I.bidderRegistry = {}, j = I.aliasRegistry = {}, w = [];
                a.b.getConfig('s2sConfig', function (e) {
                    e && e.s2sConfig && (w = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
                });
                var x = {};
                var _ = Object(r.b)('sync', function (e) {
                    var i = e.bidderCode, s = e.auctionId, d = e.bidderRequestId, t = e.adUnits, f = e.labels, l = e.src;
                    return t.reduce(function (e, c) {
                        var t = Object(p.b)(Object(p.a)(c, f), c.mediaTypes, c.sizes), n = t.active, u = t.mediaTypes, r = t.filterResults;
                        return n ? r && O.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, 'to ', r.after) : O.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), n && e.push(c.bids.filter(function (e) {
                            return e.bidder === i;
                        }).reduce(function (e, t) {
                            var n = c.nativeParams || O.deepAccess(c, 'mediaTypes.native');
                            n && (t = v({}, t, { nativeParams: Object(g.h)(n) })), t = v({}, t, Object(h.getDefinedParams)(c, [
                                'ortb2Imp',
                                'mediaType',
                                'renderer',
                                'storedAuctionResponse'
                            ]));
                            var r = Object(p.b)(Object(p.a)(t, f), u), i = r.active, o = r.mediaTypes, a = r.filterResults;
                            return i ? a && O.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, 'to ', a.after) : O.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), O.isValidMediaTypes(o) ? t = v({}, t, { mediaTypes: o }) : O.logError('mediaTypes is not correctly configured for adunit '.concat(c.code)), i && e.push(v({}, t, {
                                adUnitCode: c.code,
                                transactionId: c.transactionId,
                                sizes: O.deepAccess(o, 'banner.sizes') || O.deepAccess(o, 'video.playerSize') || [],
                                bidId: t.bid_id || O.getUniqueIdentifierStr(),
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
                    }, B = {
                        consentData: null,
                        setConsentData: function (e) {
                            B.consentData = e;
                        },
                        getConsentData: function () {
                            return B.consentData;
                        }
                    }, D = [], k = [];
                function R() {
                    I.s2STestingEnabled = !1, w.forEach(function (e) {
                        e && e.enabled && e.bidders && e.bidders.length && k.push.apply(k, s(e.bidders));
                    });
                }
                function N(e) {
                    return e && e.enabled && e.testing && A;
                }
                function P(t, n, e) {
                    try {
                        var r = C[t].getSpec();
                        r && r[n] && 'function' == typeof r[n] && (O.logInfo('Invoking '.concat(t, '.').concat(n)), a.b.runWithBidder(t, h.bind.call(r[n], r, e)));
                    } catch (e) {
                        O.logWarn('Error calling '.concat(n, ' of ').concat(t));
                    }
                }
                I.makeBidRequests = Object(r.b)('sync', function (d, f, l, i, p) {
                    T.emit(E.EVENTS.BEFORE_REQUEST_BIDS, d);
                    var e = Object(h.getBidderCodes)(d);
                    a.b.getConfig('bidderSequence') === a.a && (e = Object(h.shuffle)(e));
                    var g = Object(c.a)(), b = e, v = [];
                    0 === k.length && R(), w.forEach(function (e) {
                        e && e.enabled && N(e) && (A.calculateBidSources(e), A.getSourceBidderMap(d, k)[A.CLIENT].forEach(function (e) {
                            m()(D, e) || D.push(e);
                        }));
                    }), b = e.filter(function (e) {
                        return !m()(k, e) || m()(D, e);
                    });
                    var y = k;
                    w.forEach(function (r) {
                        var i, o, e, t, n, a, c, u, s;
                        r && r.enabled && (s = r, Boolean(N(s) && s.testServerOnly) && (c = d, u = r, Boolean(S()(c, function (e) {
                            return S()(e.bids, function (e) {
                                return (e.bidSource || u.bidderControl && u.bidderControl[e.bidder]) && e.finalSource === A.SERVER;
                            });
                        }))) && (O.logWarn('testServerOnly: True.  All client requests will be suppressed.'), b.length = 0), e = d, n = (t = r).bidders, (a = O.deepClone(e)).forEach(function (e) {
                            e.bids = e.bids.filter(function (e) {
                                return m()(n, e.bidder) && (!N(t) || e.finalSource !== A.CLIENT);
                            }).map(function (e) {
                                return e.bid_id = O.getUniqueIdentifierStr(), e;
                            });
                        }), i = a = a.filter(function (e) {
                            return 0 !== e.bids.length;
                        }), o = O.generateUUID(), y.forEach(function (e) {
                            var t = O.getUniqueIdentifierStr(), n = {
                                    bidderCode: e,
                                    auctionId: l,
                                    bidderRequestId: t,
                                    tid: o,
                                    bids: _({
                                        bidderCode: e,
                                        auctionId: l,
                                        bidderRequestId: t,
                                        adUnits: O.deepClone(i),
                                        labels: p,
                                        src: E.S2S.SRC
                                    }),
                                    auctionStart: f,
                                    timeout: r.timeout,
                                    src: E.S2S.SRC,
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
                    var t, n, o = (t = d, (n = O.deepClone(t)).forEach(function (e) {
                            e.bids = e.bids.filter(function (e) {
                                return !D.length || e.finalSource !== A.SERVER;
                            });
                        }), n = n.filter(function (e) {
                            return 0 !== e.bids.length;
                        }));
                    return b.forEach(function (e) {
                        var t = O.getUniqueIdentifierStr(), n = {
                                bidderCode: e,
                                auctionId: l,
                                bidderRequestId: t,
                                bids: _({
                                    bidderCode: e,
                                    auctionId: l,
                                    bidderRequestId: t,
                                    adUnits: O.deepClone(o),
                                    labels: p,
                                    src: 'client'
                                }),
                                auctionStart: f,
                                timeout: i,
                                refererInfo: g
                            }, r = C[e];
                        r || O.logError('Trying to make a request for bidder that does not exist: '.concat(e)), r && n.bids && 0 !== n.bids.length && v.push(n);
                    }), U.getConsentData() && v.forEach(function (e) {
                        e.gdprConsent = U.getConsentData();
                    }), B.getConsentData() && v.forEach(function (e) {
                        e.uspConsent = B.getConsentData();
                    }), v;
                }, 'makeBidRequests'), I.callBids = function (e, t, d, f, l, p, i) {
                    var n, r, g, b, v;
                    t.length ? (r = (n = u(t.reduce(function (e, t) {
                        return e[Number(void 0 !== t.src && t.src === E.S2S.SRC)].push(t), e;
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
                        }, []), O.logMessage('CALLING S2S HEADER BIDDERS ==== '.concat(n.filter(function (e) {
                            return m()(s, e);
                        }).join(','))), a.forEach(function (e) {
                            T.emit(E.EVENTS.BID_REQUESTED, e);
                        }), r.callBids(c, g, function (e, t) {
                            var n = Object(h.getBidderRequest)(g, t.bidderCode, e);
                            n && d.call(n, e, t);
                        }, function () {
                            return u.forEach(function (e) {
                                return e();
                            });
                        }, t)) : O.logError('missing ' + e.adapter), v++);
                    }), r.forEach(function (t) {
                        t.start = Object(h.timestamp)();
                        var e = C[t.bidderCode];
                        O.logMessage('CALLING BIDDER ======= '.concat(t.bidderCode)), T.emit(E.EVENTS.BID_REQUESTED, t);
                        var n = Object(y.b)(p, l ? {
                                request: l.request.bind(null, t.bidderCode),
                                done: l.done
                            } : void 0), r = f.bind(t);
                        try {
                            a.b.runWithBidder(t.bidderCode, h.bind.call(e.callBids, e, t, d.bind(t), r, n, i, a.b.callbackWithBidder(t.bidderCode)));
                        } catch (e) {
                            O.logError(''.concat(t.bidderCode, ' Bid Adapter emitted an uncaught error when parsing their bidRequest'), {
                                e: e,
                                bidRequest: t
                            }), r();
                        }
                    })) : O.logWarn('callBids executed with no bidRequests.  Were they filtered by labels or sizing?');
                }, I.videoAdapters = [], I.registerBidAdapter = function (e, t) {
                    var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes, r = void 0 === n ? [] : n;
                    e && t ? 'function' == typeof e.callBids ? (C[t] = e, m()(r, 'video') && I.videoAdapters.push(t), m()(r, 'native') && g.f.push(t)) : O.logError('Bidder adaptor error for bidder code: ' + t + 'bidder must implement a callBids() function') : O.logError('bidAdapter or bidderCode not specified');
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
                                O.logError('bidderCode "' + e + '" is not an existing bidder.', 'adapterManager.aliasBidAdapter');
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
                                O.logError(n + ' bidder does not currently support aliasing.', 'adapterManager.aliasBidAdapter');
                            }
                    } else
                        O.logMessage('alias name "' + r + '" has been already specified.');
                }, I.registerAnalyticsAdapter = function (e) {
                    var t = e.adapter, n = e.code, r = e.gvlid;
                    t && n ? 'function' == typeof t.enableAnalytics ? (t.code = n, x[n] = {
                        adapter: t,
                        gvlid: r
                    }) : O.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : O.logError('Prebid Error: analyticsAdapter or analyticsCode not specified');
                }, I.enableAnalytics = function (e) {
                    O.isArray(e) || (e = [e]), O._each(e, function (e) {
                        var t = x[e.provider].adapter;
                        t ? t.enableAnalytics(e) : O.logError('Prebid Error: no analytics adapter found in registry for\n        '.concat(e.provider, '.'));
                    });
                }, I.getBidAdapter = function (e) {
                    return C[e];
                }, I.getAnalyticsAdapter = function (e) {
                    return x[e];
                }, I.callTimedOutBidders = function (t, n, r) {
                    n = n.map(function (e) {
                        return e.params = O.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e;
                    }), n = O.groupBy(n, 'bidder'), Object.keys(n).forEach(function (e) {
                        P(e, 'onTimeout', n[e]);
                    });
                }, I.callBidWonBidder = function (e, t, n) {
                    t.params = O.getUserConfiguredParams(n, t.adUnitCode, t.bidder), b.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), P(e, 'onBidWon', t);
                }, I.callSetTargetingBidder = function (e, t) {
                    P(e, 'onSetTargeting', t);
                }, I.callBidViewableBidder = function (e, t) {
                    P(e, 'onBidViewable', t);
                }, t.default = I;
            },
            80: function (e, t, n) {
                var r = n(112);
                n(135), n(137), n(139), n(141), n(143), n(144), n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), n(153), n(154), n(155), n(156), e.exports = r;
            },
            81: function (e, t, n) {
                function r(e) {
                    c(e, d, {
                        value: {
                            objectID: 'O' + ++f,
                            weakData: {}
                        }
                    });
                }
                var i = n(53), o = n(27), a = n(28), c = n(33).f, u = n(59), s = n(115), d = u('meta'), f = 0, l = Object.isExtensible || function () {
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
            82: function (e, t, n) {
                var r = n(21), i = n(40), o = r('iterator'), a = Array.prototype;
                e.exports = function (e) {
                    return void 0 !== e && (i.Array === e || a[o] === e);
                };
            },
            83: function (e, t, n) {
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
            84: function (e, t) {
                e.exports = function (e, t, n) {
                    if (!(e instanceof t))
                        throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
                    return e;
                };
            },
            85: function (e, t, n) {
                function r() {
                }
                function i(e) {
                    return '<script>' + e + '</' + g + '>';
                }
                var o, a = n(15), c = n(120), u = n(86), s = n(53), d = n(123), f = n(75), l = n(65), p = 'prototype', g = 'script', b = l('IE_PROTO'), v = function () {
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
            86: function (e, t) {
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
            87: function (e, t, n) {
                var i = n(32);
                e.exports = function (e, t, n, r) {
                    r && r.enumerable ? e[t] = n : i(e, t, n);
                };
            },
            88: function (e, t, n) {
                'use strict';
                var r, i, o, a = n(89), c = n(32), u = n(28), s = n(21), d = n(16), f = s('iterator'), l = !1;
                [].keys && ('next' in (o = [].keys()) ? (i = a(a(o))) !== Object.prototype && (r = i) : l = !0), null == r && (r = {}), d || u(r, f) || c(r, f, function () {
                    return this;
                }), e.exports = {
                    IteratorPrototype: r,
                    BUGGY_SAFARI_ITERATORS: l
                };
            },
            89: function (e, t, n) {
                var r = n(28), i = n(57), o = n(65), a = n(126), c = o('IE_PROTO'), u = Object.prototype;
                e.exports = a ? Object.getPrototypeOf : function (e) {
                    return e = i(e), r(e, c) ? e[c] : 'function' == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null;
                };
            },
            9: function (e, t, n) {
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
            90: function (e, t, n) {
                'use strict';
                var i = n(131).charAt, r = n(54), o = n(66), a = 'String Iterator', c = r.set, u = r.getterFor(a);
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
            91: function (e, t, n) {
                var r = n(15), i = n(61);
                e.exports = function (e) {
                    var t = i(e);
                    if ('function' != typeof t)
                        throw TypeError(String(e) + ' is not iterable');
                    return r(t.call(e));
                };
            },
            92: function (e, t, n) {
                var r = n(157);
                e.exports = r;
            },
            93: function (e, t, n) {
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
            94: function (e, t, n) {
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
                        if ('object' === o(r) && 'string' == typeof r.mediaQuery) {
                            var t = !1;
                            if ('' === r.mediaQuery)
                                t = !0;
                            else
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
            95: function (e, t, n) {
                'use strict';
                t.b = function (e, t, n) {
                    return (Object(i.a)() || r.a)(e, t, n, u()[a], u()[c]);
                };
                var r = n(166), i = n(168), o = n(169);
                n.d(t, 'c', function () {
                    return o.b;
                }), n.d(t, 'a', function () {
                    return o.a;
                });
                var a = 'canUseBidForAdUnitCode', c = 'getAdUnitCodesBasedOnPriority';
                function u() {
                    return window.sblyPrebidCustomFunctions || {};
                }
            },
            96: function (e, t, n) {
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
                    return o.b.getConfig('cache.vasttrack') && (i.bidder = e.bidder, i.bidid = e.requestId, a.isPlainObject(this) && this.hasOwnProperty('auctionStart') && (i.timestamp = this.auctionStart)), 'string' == typeof e.customCacheKey && '' !== e.customCacheKey && (i.key = e.customCacheKey), i;
                }
            },
            97: function (e, t, n) {
                var r = n(236);
                e.exports = r;
            },
            988: function (e, t, n) {
                e.exports = n(70);
            }
        });
        pbjsChunk([397], {
            170: function (e, t, r) {
                e.exports = r(171);
            },
            171: function (e, t, r) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), r.d(t, 'spec', function () {
                    return I;
                });
                var n = r(1), p = r(3), u = r(0), l = r(2);
                function f() {
                    return (f = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function a(t, e) {
                    var r, n = Object.keys(t);
                    return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r)), n;
                }
                function m(i) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? a(Object(o), !0).forEach(function (e) {
                            var t, r, n;
                            t = i, n = o[r = e], r in t ? Object.defineProperty(t, r, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[r] = n;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : a(Object(o)).forEach(function (e) {
                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                        });
                    }
                    return i;
                }
                var i = '33across', c = 'https://ssc.33across.com/api/v1/hb', b = 'https://ssc-cms.33across.com/ps/?m=xch&rt=html&ru=deb', o = 'USD', s = /^[a-zA-Z0-9_-]{22}$/, h = {
                        SIAB: 'siab',
                        INVIEW: 'inview',
                        INSTREAM: 'instream'
                    }, g = [
                        'mimes',
                        'minduration',
                        'maxduration',
                        'placement',
                        'protocols',
                        'startdelay',
                        'skip',
                        'skipafter',
                        'minbitrate',
                        'maxbitrate',
                        'delivery',
                        'playbackmethod',
                        'api',
                        'linearity'
                    ], d = { uniqueSiteIds: [] }, y = 'nm';
                function v(e) {
                    return {
                        w: parseInt(e[0], 10),
                        h: parseInt(e[1], 10)
                    };
                }
                function A(e) {
                    var t = e.params, r = e.mediaTypes, n = r.banner, i = r.video;
                    return i && !n && 'instream' === i.context ? h.INSTREAM : t.productId === h.INVIEW ? t.productId : h.SIAB;
                }
                function w(e, t, r) {
                    var n = e.getFloor({
                        currency: o,
                        mediaType: r,
                        size: [
                            t.w,
                            t.h
                        ]
                    });
                    if (!isNaN(n.floor) && n.currency === o)
                        return n.floor;
                }
                var I = {
                    NON_MEASURABLE: y,
                    code: i,
                    supportedMediaTypes: [
                        l.b,
                        l.d
                    ],
                    isBidRequestValid: function (e) {
                        return (n = e).bidder === i && void 0 !== n.params && !!function (e) {
                            return null !== (u.deepAccess(e, 'params.siteId', '') || '').trim().match(s);
                        }(n) && (t = e, void 0 === (r = u.deepAccess(t, 'mediaTypes.banner')) || !!Array.isArray(r.sizes)) && function (e) {
                            var t = u.deepAccess(e, 'mediaTypes.video'), r = u.deepAccess(e, 'params.video', {});
                            if (void 0 === t)
                                return !0;
                            if (!Array.isArray(t.playerSize))
                                return !1;
                            if (!t.context)
                                return !1;
                            var n = m(m({}, t), r);
                            return !(!Array.isArray(n.mimes) || 0 === n.mimes.length) && (!(!Array.isArray(n.protocols) || 0 === n.protocols.length) && ((void 0 === n.placement || 'number' == typeof n.placement) && ('instream' !== t.context || void 0 === n.startdelay || 'number' == typeof n.startdelay)));
                        }(e);
                        var t, r, n;
                    },
                    buildRequests: function (e, t) {
                        var r = f({
                                consentString: void 0,
                                gdprApplies: !1
                            }, t && t.gdprConsent), n = t && t.uspConsent, i = t && t.refererInfo ? t.refererInfo.referer : void 0;
                        return d.uniqueSiteIds = e.map(function (e) {
                            return e.params.siteId;
                        }).filter(u.uniques), e.map(function (e) {
                            return function (e) {
                                var t = e.bidRequest, r = e.gdprConsent, n = void 0 === r ? {} : r, i = e.uspConsent, o = e.pageUrl, a = {}, s = t.params;
                                a.imp = [{}], u.deepAccess(t, 'mediaTypes.banner') && (a.imp[0].banner = m({}, function (n) {
                                    var e, t = u.deepAccess(n, 'mediaTypes.banner', {}), r = function (e) {
                                            return document.getElementById(e) || document.getElementById(function (e) {
                                                if (u.isGptPubadsDefined())
                                                    for (var t = googletag.pubads().getSlots(), r = u.isSlotMatchingAdUnitCode(e), n = 0; n < t.length; n++)
                                                        if (r(t[n])) {
                                                            var i = t[n].getSlotElementId();
                                                            return u.logInfo('[33Across Adapter] Map ad unit path to HTML element id: \''.concat(e, '\' -> ').concat(i)), i;
                                                        }
                                                return u.logWarn('[33Across Adapter] Unable to locate element for ad unit code: \''.concat(e, '\'')), null;
                                            }(e));
                                        }(n.adUnitCode), i = function (e) {
                                            return !u.isArray(e) || 2 !== e.length || u.isArray(e[0]) ? e.map(v) : [v(e)];
                                        }(t.sizes);
                                    e = 'function' == typeof n.getFloor ? i.map(function (e) {
                                        var t, r = w(n, e, l.b);
                                        return r && (t = { ext: { ttx: { bidfloors: [r] } } }), f({}, e, t);
                                    }) : i;
                                    var o = function (e) {
                                            return e.reduce(function (e, t) {
                                                return t.h * t.w < e.h * e.w ? t : e;
                                            });
                                        }(i), a = function (e) {
                                            return { ttx: { viewability: { amount: isNaN(e) ? e : Math.round(e) } } };
                                        }(function (e) {
                                            return !function () {
                                                try {
                                                    return u.getWindowSelf() !== u.getWindowTop();
                                                } catch (e) {
                                                    return !0;
                                                }
                                            }() && null !== e;
                                        }(r) ? function (e, t) {
                                            var r = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, n = r.w, i = r.h;
                                            return 'visible' === t.document.visibilityState ? function (e, t) {
                                                var r, n, i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, o = i.w, a = i.h, s = function (e) {
                                                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, r = t.w, n = t.h, i = e.getBoundingClientRect(), o = i.width, a = i.height, s = i.left, d = i.top, c = i.right, u = i.bottom;
                                                        (0 === o || 0 === a) && r && n && (c = s + (o = r), u = d + (a = n));
                                                        return {
                                                            width: o,
                                                            height: a,
                                                            left: s,
                                                            top: d,
                                                            right: c,
                                                            bottom: u
                                                        };
                                                    }(e, {
                                                        w: o,
                                                        h: a
                                                    }), d = function (e) {
                                                        for (var t = {
                                                                    left: e[0].left,
                                                                    right: e[0].right,
                                                                    top: e[0].top,
                                                                    bottom: e[0].bottom
                                                                }, r = 1; r < e.length; ++r) {
                                                            if (t.left = Math.max(t.left, e[r].left), t.right = Math.min(t.right, e[r].right), t.left >= t.right)
                                                                return null;
                                                            if (t.top = Math.max(t.top, e[r].top), t.bottom = Math.min(t.bottom, e[r].bottom), t.top >= t.bottom)
                                                                return null;
                                                        }
                                                        return t.width = t.right - t.left, t.height = t.bottom - t.top, t;
                                                    }([
                                                        {
                                                            left: 0,
                                                            top: 0,
                                                            right: t.innerWidth,
                                                            bottom: t.innerHeight
                                                        },
                                                        s
                                                    ]);
                                                return null === d ? 0 : (r = d.width * d.height, n = s.width * s.height, r / n * 100);
                                            }(e, t, {
                                                w: n,
                                                h: i
                                            }) : 0;
                                        }(r, u.getWindowTop(), o) : y);
                                    return {
                                        format: e,
                                        ext: a
                                    };
                                }(t)));
                                u.deepAccess(t, 'mediaTypes.video') && (a.imp[0].video = function (e) {
                                    var t = u.deepAccess(e, 'mediaTypes.video', {}), r = u.deepAccess(e, 'params.video', {}), n = m(m({}, t), r), i = {}, o = v(n.playerSize[0]), a = o.w, s = o.h;
                                    i.w = a, i.h = s, g.forEach(function (e) {
                                        n.hasOwnProperty(e) && (i[e] = n[e]);
                                    });
                                    var d = A(e);
                                    i.placement = i.placement || 2, d === h.INSTREAM && (i.startdelay = i.startdelay || 0, i.placement = 1);
                                    {
                                        var c;
                                        'function' != typeof e.getFloor || (c = w(e, {
                                            w: i.w,
                                            h: i.h
                                        }, l.d)) && f(i, { ext: { ttx: { bidfloors: [c] } } });
                                    }
                                    return i;
                                }(t));
                                a.imp[0].ext = { ttx: { prod: A(t) } }, a.site = { id: s.siteId }, o && (a.site.page = o);
                                a.id = t.bidId, a.user = { ext: { consent: n.consentString } }, a.regs = {
                                    ext: {
                                        gdpr: !0 === n.gdprApplies ? 1 : 0,
                                        us_privacy: i || null
                                    }
                                }, a.ext = {
                                    ttx: {
                                        prebidStartedAt: Date.now(),
                                        caller: [{
                                                name: 'prebidjs',
                                                version: '4.34.0'
                                            }]
                                    }
                                }, t.schain && (a.source = { ext: { schain: t.schain } });
                                1 === s.test && (a.test = 1);
                                var d = p.b.getConfig('ttxSettings');
                                return {
                                    method: 'POST',
                                    url: d && d.url || ''.concat(c, '?guid=').concat(s.siteId),
                                    data: JSON.stringify(a),
                                    options: {
                                        contentType: 'text/plain',
                                        withCredentials: !0
                                    }
                                };
                            }({
                                bidRequest: e,
                                gdprConsent: r,
                                uspConsent: n,
                                pageUrl: i
                            });
                        });
                    },
                    interpretResponse: function (e, t) {
                        var r = [];
                        return 0 < e.body.seatbid.length && 0 < e.body.seatbid[0].bid.length && r.push(function (e) {
                            var t = {
                                requestId: e.id,
                                bidderCode: i,
                                cpm: e.seatbid[0].bid[0].price,
                                width: e.seatbid[0].bid[0].w,
                                height: e.seatbid[0].bid[0].h,
                                ad: e.seatbid[0].bid[0].adm,
                                ttl: e.seatbid[0].bid[0].ttl || 60,
                                creativeId: e.seatbid[0].bid[0].crid,
                                mediaType: u.deepAccess(e.seatbid[0].bid[0], 'ext.ttx.mediaType', l.b),
                                currency: e.cur,
                                netRevenue: !0
                            };
                            {
                                t.mediaType === l.d && ('xml' === u.deepAccess(e.seatbid[0].bid[0], 'ext.ttx.vastType', 'xml') ? t.vastXml = t.ad : t.vastUrl = t.ad);
                            }
                            return t;
                        }(e.body)), r;
                    },
                    getUserSyncs: function (e, t, r, n) {
                        var i = e.iframeEnabled ? d.uniqueSiteIds.map(function (e) {
                            return function (e) {
                                var t = e.siteId, r = void 0 === t ? 'zzz000000000003zzz' : t, n = e.gdprConsent, i = void 0 === n ? {} : n, o = e.uspConsent, a = p.b.getConfig('ttxSettings'), s = a && a.syncUrl || b, d = i.consentString, c = i.gdprApplies, u = {
                                        type: 'iframe',
                                        url: ''.concat(s, '&id=').concat(r, '&gdpr_consent=').concat(encodeURIComponent(d), '&us_privacy=').concat(encodeURIComponent(o))
                                    };
                                'boolean' == typeof c && (u.url += '&gdpr='.concat(Number(c)));
                                return u;
                            }({
                                gdprConsent: r,
                                uspConsent: n,
                                siteId: e
                            });
                        }) : [];
                        return d.uniqueSiteIds = [], i;
                    }
                };
                Object(n.registerBidder)(I);
            }
        }, [170]);
        pbjsChunk([352], {
            282: function (e, r, t) {
                e.exports = t(283);
            },
            283: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'spec', function () {
                    return M;
                });
                var s = t(0), n = t(1), i = t(2);
                function a() {
                    return (a = Object.assign || function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = arguments[r];
                            for (var n in t)
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function c(e) {
                    return (c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function o() {
                    var e = p([
                        'dcn=',
                        '&pos=',
                        '&cmd=bid',
                        ''
                    ]);
                    return o = function () {
                        return e;
                    }, e;
                }
                function u() {
                    var e = p([
                        '',
                        '/bidRequest?'
                    ]);
                    return u = function () {
                        return e;
                    }, e;
                }
                function d() {
                    var e = p([
                        '',
                        '/pubapi/3.0/',
                        '/',
                        '/',
                        '/',
                        '/ADTECH;v=2;cmd=bid;cors=yes;alias=',
                        ';misc=',
                        ';',
                        ''
                    ]);
                    return d = function () {
                        return e;
                    }, e;
                }
                function p(e, r) {
                    return r = r || e.slice(0), Object.freeze(Object.defineProperties(e, { raw: { value: Object.freeze(r) } }));
                }
                var l = {
                        AOL: 'aol',
                        VERIZON: 'verizon',
                        ONEMOBILE: 'onemobile',
                        ONEDISPLAY: 'onedisplay'
                    }, m = { GET: 'display-get' }, f = {
                        GET: 'mobile-get',
                        POST: 'mobile-post'
                    }, b = {
                        TAG: 'iframe',
                        TYPE: 'iframe'
                    }, v = {
                        TAG: 'img',
                        TYPE: 'image'
                    }, h = [
                        'adserver.org',
                        'criteo.com',
                        'id5-sync.com',
                        'intentiq.com',
                        'liveintent.com',
                        'quantcast.com',
                        'verizonmedia.com',
                        'liveramp.com'
                    ], g = S(d(), 'host', 'network', 'placement', 'pageid', 'sizeid', 'alias', 'misc', 'dynamicParams'), y = S(u(), 'host'), O = S(o(), 'dcn', 'pos', 'dynamicParams'), E = {
                        us: 'adserver-us.adtech.advertising.com',
                        eu: 'adserver-eu.adtech.advertising.com',
                        as: 'adserver-as.adtech.advertising.com'
                    }, I = 'https', P = 1;
                function S(a) {
                    for (var e = arguments.length, t = new Array(1 < e ? e - 1 : 0), r = 1; r < e; r++)
                        t[r - 1] = arguments[r];
                    return function () {
                        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
                            n[r] = arguments[r];
                        var i = n[n.length - 1] || {}, o = [a[0]];
                        return t.forEach(function (e, r) {
                            var t = s.isInteger(e) ? n[e] : i[e];
                            o.push(t, a[r + 1]);
                        }), o.join('');
                    };
                }
                function T(e) {
                    return e === l.AOL || e === l.VERIZON || e === l.ONEMOBILE;
                }
                function x(e) {
                    if (T(e.bidder) && e.params.id && e.params.imp && e.params.imp[0]) {
                        var r = e.params.imp[0];
                        return r.id && r.tagid && (r.banner && r.banner.w && r.banner.h || r.video && r.video.mimes && r.video.minduration && r.video.maxduration);
                    }
                }
                function R(e) {
                    return T(e.bidder) && e.params.dcn && e.params.pos;
                }
                function C(e) {
                    return ((r = e.bidder) === l.AOL || r === l.VERIZON || r === l.ONEDISPLAY) && e.params.placement && e.params.network;
                    var r;
                }
                function A(e) {
                    return e.userIdAsEids.filter(function (e) {
                        return -1 !== h.indexOf(e.source);
                    });
                }
                var M = {
                    code: l.AOL,
                    gvlid: 25,
                    aliases: [
                        l.ONEMOBILE,
                        l.ONEDISPLAY,
                        l.VERIZON
                    ],
                    supportedMediaTypes: [i.b],
                    isBidRequestValid: function (e) {
                        return C(e) || (R(r = e) || x(r));
                        var r;
                    },
                    buildRequests: function (e, r) {
                        var n = this, i = {};
                        return r && (i.gdpr = r.gdprConsent, i.uspConsent = r.uspConsent), e.map(function (e) {
                            var r, t = R(r = e) ? f.GET : x(r) ? f.POST : C(r) ? m.GET : void 0;
                            if (t)
                                return n.formatBidRequest(t, e, i);
                        });
                    },
                    interpretResponse: function (e, r) {
                        var t = e.body;
                        if (t) {
                            var n = this._parseBidResponse(t, r);
                            if (n)
                                return n;
                        } else
                            s.logError('Empty bid response', r.bidderCode, t);
                    },
                    getUserSyncs: function (e, r) {
                        var t = !s.isEmpty(r) && r[0].body;
                        return t && t.ext && t.ext.pixels ? this.parsePixelItems(t.ext.pixels) : [];
                    },
                    formatBidRequest: function (e, r, t) {
                        var n;
                        switch (e) {
                        case m.GET:
                            n = {
                                url: this.buildMarketplaceUrl(r, t),
                                method: 'GET',
                                ttl: 60
                            };
                            break;
                        case f.GET:
                            n = {
                                url: this.buildOneMobileGetUrl(r, t),
                                method: 'GET',
                                ttl: 3600
                            };
                            break;
                        case f.POST:
                            n = {
                                url: this.buildOneMobileBaseUrl(r),
                                method: 'POST',
                                ttl: 3600,
                                data: this.buildOpenRtbRequestData(r, t),
                                options: {
                                    contentType: 'application/json',
                                    customHeaders: { 'x-openrtb-version': '2.2' }
                                }
                            };
                        }
                        return n.bidderCode = r.bidder, n.bidId = r.bidId, n.userSyncOn = r.params.userSyncOn, n;
                    },
                    buildMarketplaceUrl: function (e, r) {
                        var t, n = e.params, i = n.server, o = n.region || 'us';
                        return E.hasOwnProperty(o) || (s.logWarn('Unknown region \''.concat(o, '\' for AOL bidder.')), o = 'us'), t = i || E[o], n.region = o, this.applyProtocol(g({
                            host: t,
                            network: n.network,
                            placement: parseInt(n.placement),
                            pageid: n.pageId || 0,
                            sizeid: n.sizeId || 0,
                            alias: n.alias || s.getUniqueIdentifierStr(),
                            misc: new Date().getTime(),
                            dynamicParams: this.formatMarketplaceDynamicParams(n, r)
                        }));
                    },
                    buildOneMobileGetUrl: function (e, r) {
                        var t = e.params, n = t.dcn, i = t.pos, o = t.ext;
                        'object' === c(e.userId) && (o = o || {}, A(e).forEach(function (e) {
                            o['eid' + e.source] = e.uids[0].id;
                        }));
                        var a, s = this.buildOneMobileBaseUrl(e);
                        return n && i && (a = this.formatOneMobileDynamicParams(o, r), s += O({
                            dcn: n,
                            pos: i,
                            dynamicParams: a
                        })), s;
                    },
                    buildOneMobileBaseUrl: function (e) {
                        return this.applyProtocol(y({ host: e.params.host || 'c2shb.ssp.yahoo.com' }));
                    },
                    applyProtocol: function (e) {
                        return /^https?:\/\//i.test(e) ? e : 0 === e.indexOf('//') ? ''.concat(I, ':').concat(e) : ''.concat(I, '://').concat(e);
                    },
                    formatMarketplaceDynamicParams: function (e, r) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {}, n = 1 < arguments.length && void 0 !== r ? r : {}, i = {};
                        t.bidFloor && (i.bidfloor = t.bidFloor), a(i, this.formatKeyValues(t.keyValues)), a(i, this.formatConsentData(n));
                        var o = '';
                        return s._each(i, function (e, r) {
                            o += ''.concat(r, '=').concat(encodeURIComponent(e), ';');
                        }), o;
                    },
                    formatOneMobileDynamicParams: function (e, r) {
                        var t = 0 < arguments.length && void 0 !== e ? e : {}, n = 1 < arguments.length && void 0 !== r ? r : {};
                        this.isSecureProtocol() && (t.secure = P), a(t, this.formatConsentData(n));
                        var i = '';
                        return s._each(t, function (e, r) {
                            i += '&'.concat(r, '=').concat(encodeURIComponent(e));
                        }), i;
                    },
                    buildOpenRtbRequestData: function (e, r) {
                        var t, n = 1 < arguments.length && void 0 !== r ? r : {}, i = {
                                id: e.params.id,
                                imp: e.params.imp
                            };
                        return this.isEUConsentRequired(n) && (s.deepSetValue(i, 'regs.ext.gdpr', P), n.gdpr.consentString && s.deepSetValue(i, 'user.ext.consent', n.gdpr.consentString)), n.uspConsent && s.deepSetValue(i, 'regs.ext.us_privacy', n.uspConsent), 'object' === c(e.userId) && (i.user = i.user || {}, i.user.ext = i.user.ext || {}, 0 < (t = A(e)).length && (i.user.ext.eids = t)), i;
                    },
                    isEUConsentRequired: function (e) {
                        return !!(e && e.gdpr && e.gdpr.gdprApplies);
                    },
                    formatKeyValues: function (e) {
                        var t = {};
                        return s._each(e, function (e, r) {
                            t['kv'.concat(r)] = e;
                        }), t;
                    },
                    formatConsentData: function (e) {
                        var r = {};
                        return this.isEUConsentRequired(e) && (r.gdpr = P, e.gdpr.consentString && (r.euconsent = e.gdpr.consentString)), e.uspConsent && (r.us_privacy = e.uspConsent), r;
                    },
                    parsePixelItems: function (e) {
                        var r, n = /\w*(?=\s)/, i = /src=("|')(.*?)\1/, o = [];
                        return !e || (r = e.match(/(img|iframe)[\s\S]*?src\s*=\s*("|')(.*?)\2/gi)) && r.forEach(function (e) {
                            var r = e.match(n)[0], t = e.match(i)[2];
                            r && r && o.push({
                                type: r === v.TAG ? v.TYPE : b.TYPE,
                                url: t
                            });
                        }), o;
                    },
                    _parseBidResponse: function (e, r) {
                        var t, n;
                        try {
                            t = e.seatbid[0].bid[0];
                        } catch (e) {
                            return;
                        }
                        if (t.ext && t.ext.encp)
                            n = t.ext.encp;
                        else if (null === (n = t.price) || isNaN(n))
                            return void s.logError('Invalid price in bid response', l.AOL, t);
                        return {
                            bidderCode: r.bidderCode,
                            requestId: r.bidId,
                            ad: t.adm,
                            cpm: n,
                            width: t.w,
                            height: t.h,
                            creativeId: t.crid || 0,
                            pubapiId: e.id,
                            currency: e.cur || 'USD',
                            dealId: t.dealid,
                            netRevenue: !0,
                            ttl: r.ttl
                        };
                    },
                    isOneMobileBidder: T,
                    isSecureProtocol: function () {
                        return 'https:' === document.location.protocol;
                    }
                };
                Object(n.registerBidder)(M);
            }
        }, [282]);
        pbjsChunk([349], {
            292: function (e, r, a) {
                e.exports = a(293);
            },
            293: function (e, r, a) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), a.d(r, 'spec', function () {
                    return R;
                });
                var f = a(11), _ = a(0), k = a(3), y = a(1), g = a(2), p = a(23), t = a(10), I = a.n(t), n = a(12), w = a.n(n), v = a(25), i = a(7);
                function s(e) {
                    return (s = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function b() {
                    return (b = Object.assign || function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var a = arguments[r];
                            for (var t in a)
                                Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function A(e) {
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
                var d = 'appnexus', x = 'https://ib.adnxs.com/ut/v3/prebid', c = [
                        'id',
                        'minduration',
                        'maxduration',
                        'skippable',
                        'playback_method',
                        'frameworks',
                        'context',
                        'skipoffset'
                    ], C = [
                        'age',
                        'externalUid',
                        'segments',
                        'gender',
                        'dnt',
                        'language'
                    ], S = [
                        'geo',
                        'device_id'
                    ], T = [
                        'enabled',
                        'dongle',
                        'member_id',
                        'debug_timeout'
                    ], u = {
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
                    }, l = {
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
                    }, m = '<script', h = /\/\/cdn\.adnxs\.com\/v/, E = 'trk.js', O = Object(i.b)(32, d), R = {
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
                            g.b,
                            g.d,
                            g.c
                        ],
                        isBidRequestValid: function (e) {
                            return !!(e.params.placementId || e.params.member && e.params.invCode);
                        },
                        buildRequests: function (e, r) {
                            var t = e.map(N), n = I()(e, M), i = {};
                            !0 === k.b.getConfig('coppa') && (i = { coppa: !0 }), n && Object.keys(n.params.user).filter(function (e) {
                                return w()(C, e);
                            }).forEach(function (e) {
                                var r, a = _.convertCamelToUnderscore(e);
                                'segments' === e && _.isArray(n.params.user[e]) ? (r = [], n.params.user[e].forEach(function (e) {
                                    _.isNumber(e) ? r.push({ id: e }) : _.isPlainObject(e) && r.push(e);
                                }), i[a] = r) : 'segments' !== e && (i[a] = n.params.user[e]);
                            });
                            var a, s = I()(e, B);
                            s && s.params && s.params.app && (a = {}, Object.keys(s.params.app).filter(function (e) {
                                return w()(S, e);
                            }).forEach(function (e) {
                                return a[e] = s.params.app[e];
                            }));
                            var o, d = I()(e, D);
                            d && d.params && s.params.app && s.params.app.id && (o = { appid: d.params.app.id });
                            var p = {}, c = {}, u = O.getCookie('apn_prebid_debug') || null;
                            if (u)
                                try {
                                    p = JSON.parse(u);
                                } catch (e) {
                                    _.logError('AppNexus Debug Auction Cookie Error:\n\n' + e);
                                }
                            else {
                                var l = I()(e, V);
                                l && l.debug && (p = l.debug);
                            }
                            p && p.enabled && Object.keys(p).filter(function (e) {
                                return w()(T, e);
                            }).forEach(function (e) {
                                c[e] = p[e];
                            });
                            var m, f, y = I()(e, z), g = y ? parseInt(y.params.member, 10) : 0, v = e[0].schain, b = I()(e, W), h = {
                                    tags: A(t),
                                    user: i,
                                    sdk: {
                                        source: 'pbjs',
                                        version: '4.34.0'
                                    },
                                    schain: v
                                };
                            return b && (h.iab_support = {
                                omidpn: 'Appnexus',
                                omidpv: '4.34.0'
                            }), 0 < g && (h.member_id = g), s && (h.device = a), d && (h.app = o), k.b.getConfig('adpod.brandCategoryExclusion') && (h.brand_category_uniqueness = !0), c.enabled && (h.debug = c, _.logInfo('AppNexus Debug Auction Settings:\n\n' + JSON.stringify(c, null, 4))), r && r.gdprConsent && (h.gdpr_consent = {
                                consent_string: r.gdprConsent.consentString,
                                consent_required: r.gdprConsent.gdprApplies
                            }), r && r.uspConsent && (h.us_privacy = r.uspConsent), r && r.refererInfo && (m = {
                                rd_ref: encodeURIComponent(r.refererInfo.referer),
                                rd_top: r.refererInfo.reachedTop,
                                rd_ifs: r.refererInfo.numIframes,
                                rd_stk: r.refererInfo.stack.map(function (e) {
                                    return encodeURIComponent(e);
                                }).join(',')
                            }, h.referrer_detection = m), I()(e, J) && e.filter(J).forEach(function (r) {
                                var e = function (e, r) {
                                        var a = r.mediaTypes.video, t = a.durationRangeSec, n = a.requireExactDuration, i = function (e) {
                                                var r = e.adPodDurationSec, a = e.durationRangeSec, t = e.requireExactDuration, n = _.getMinValueFromArray(a), i = Math.floor(r / n);
                                                return t ? Math.max(i, a.length) : i;
                                            }(r.mediaTypes.video), s = _.getMaxValueFromArray(t), o = e.filter(function (e) {
                                                return e.uuid === r.bidId;
                                            }), d = _.fill.apply(_, A(o).concat([i]));
                                        {
                                            var p, c;
                                            n ? (p = Math.ceil(i / t.length), c = _.chunk(d, p), t.forEach(function (r, e) {
                                                c[e].map(function (e) {
                                                    F(e, 'minduration', r), F(e, 'maxduration', r);
                                                });
                                            })) : d.map(function (e) {
                                                return F(e, 'maxduration', s);
                                            });
                                        }
                                        return d;
                                    }(t, r), a = h.tags.filter(function (e) {
                                        return e.uuid !== r.bidId;
                                    });
                                h.tags = [].concat(A(a), A(e));
                            }), e[0].userId && (L(f = [], _.deepAccess(e[0], 'userId.criteoId'), 'criteo.com', null), L(f, _.deepAccess(e[0], 'userId.netId'), 'netid.de', null), L(f, _.deepAccess(e[0], 'userId.idl_env'), 'liveramp.com', null), L(f, _.deepAccess(e[0], 'userId.tdid'), 'adserver.org', 'TDID'), f.length && (h.eids = f)), t[0].publisher_id && (h.publisher_id = t[0].publisher_id), function (e, a) {
                                var t = [], n = {};
                                !function (e) {
                                    var r = !0;
                                    e && e.gdprConsent && e.gdprConsent.gdprApplies && 2 === e.gdprConsent.apiVersion && (r = !(!0 !== _.deepAccess(e.gdprConsent, 'vendorData.purpose.consents.1')));
                                    return r;
                                }(a) && (n = { withCredentials: !1 });
                                'TRUE' !== _.getParameterByName('apn_test').toUpperCase() && !0 !== k.b.getConfig('apn_test') || (n.customHeaders = { 'X-Is-Test': 1 });
                                {
                                    var i, r;
                                    15 < e.tags.length ? (i = _.deepClone(e), _.chunk(e.tags, 15).forEach(function (e) {
                                        i.tags = e;
                                        var r = JSON.stringify(i);
                                        t.push({
                                            method: 'POST',
                                            url: x,
                                            data: r,
                                            bidderRequest: a,
                                            options: n
                                        });
                                    })) : (r = JSON.stringify(e), t = {
                                        method: 'POST',
                                        url: x,
                                        data: r,
                                        bidderRequest: a,
                                        options: n
                                    });
                                }
                                return t;
                            }(h, r);
                        },
                        interpretResponse: function (e, r) {
                            var i = this, s = r.bidderRequest;
                            e = e.body;
                            var a, o = [];
                            if (e && !e.error)
                                return e.tags && e.tags.forEach(function (e) {
                                    var r, a, t, n = (r = e) && r.ads && r.ads.length && I()(r.ads, function (e) {
                                            return e.rtb;
                                        });
                                    n && 0 !== n.cpm && w()(i.supportedMediaTypes, n.ad_type) && ((a = function (r, e, a) {
                                        var t = _.getBidRequest(r.uuid, [a]), n = {
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
                                        e.advertiser_id && (n.meta = b({}, n.meta, { advertiserId: e.advertiser_id }));
                                        if (e.rtb.video) {
                                            var i, s;
                                            switch (b(n, {
                                                    width: e.rtb.video.player_width,
                                                    height: e.rtb.video.player_height,
                                                    vastImpUrl: e.notify_url,
                                                    ttl: 3600
                                                }), _.deepAccess(t, 'mediaTypes.video.context')) {
                                            case g.a:
                                                var o = Object(y.getIabSubCategory)(t.bidder, e.brand_category_id);
                                                n.meta = b({}, n.meta, { primaryCatId: o });
                                                var d = e.deal_priority;
                                                n.video = {
                                                    context: g.a,
                                                    durationSeconds: Math.floor(e.rtb.video.duration_ms / 1000),
                                                    dealTier: d
                                                }, n.vastUrl = e.rtb.video.asset_url;
                                                break;
                                            case v.b:
                                                n.adResponse = r, n.adResponse.ad = n.adResponse.ads[0], n.adResponse.ad.video = n.adResponse.ad.rtb.video, n.vastXml = e.rtb.video.content, e.renderer_url && (i = I()(a.bids, function (e) {
                                                    return e.bidId === r.uuid;
                                                }), s = _.deepAccess(i, 'renderer.options'), n.renderer = function (e, r) {
                                                    var a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, t = f.a.install({
                                                            id: r.renderer_id,
                                                            url: r.renderer_url,
                                                            config: a,
                                                            loaded: !1,
                                                            adUnitCode: e
                                                        });
                                                    try {
                                                        t.setRender(H);
                                                    } catch (e) {
                                                        _.logWarn('Prebid Error calling setRender on renderer', e);
                                                    }
                                                    return t.setEventHandlers({
                                                        impression: function () {
                                                            return _.logMessage('AppNexus outstream video impression event');
                                                        },
                                                        loaded: function () {
                                                            return _.logMessage('AppNexus outstream video loaded event');
                                                        },
                                                        ended: function () {
                                                            _.logMessage('AppNexus outstream renderer video event'), document.querySelector('#'.concat(e)).style.display = 'none';
                                                        }
                                                    }), t;
                                                }(n.adUnitCode, e, s));
                                                break;
                                            case v.a:
                                                n.vastUrl = e.notify_url + '&redir=' + encodeURIComponent(e.rtb.video.asset_url);
                                            }
                                        } else if (e.rtb[g.c]) {
                                            var p = e.rtb[g.c], c = e.viewability.config.replace('src=', 'data-src='), u = p.javascript_trackers;
                                            null == u ? u = c : _.isStr(u) ? u = [
                                                u,
                                                c
                                            ] : u.push(c), n[g.c] = {
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
                                            b(n, {
                                                width: e.rtb.banner.width,
                                                height: e.rtb.banner.height,
                                                ad: e.rtb.banner.content
                                            });
                                            try {
                                                var l, m;
                                                e.rtb.trackers && (l = e.rtb.trackers[0].impression_urls[0], m = _.createTrackPixelHtml(l), n.ad += m);
                                            } catch (e) {
                                                _.logError('Error appending tracking pixel', e);
                                            }
                                        }
                                        return n;
                                    }(e, n, s)).mediaType = (t = n.ad_type) === g.d ? g.d : t === g.c ? g.c : g.b, o.push(a));
                                }), e.debug && e.debug.debug_info && (a = (a = 'AppNexus Debug Auction for Prebid\n\n' + e.debug.debug_info).replace(/(<td>|<th>)/gm, '\t').replace(/(<\/td>|<\/th>)/gm, '\n').replace(/^<br>/gm, '').replace(/(<br>\n|<br>)/gm, '\n').replace(/<h1>(.*)<\/h1>/gm, '\n\n===== $1 =====\n\n').replace(/<h[2-6]>(.*)<\/h[2-6]>/gm, '\n\n*** $1 ***\n\n').replace(/(<([^>]+)>)/gim, ''), _.logMessage('https://console.appnexus.com/docs/understanding-the-debug-auction'), _.logMessage(a)), o;
                            var t = 'in response for '.concat(s.bidderCode, ' adapter');
                            return e && e.error && (t += ': '.concat(e.error)), _.logError(t), o;
                        },
                        getMappingFileInfo: function () {
                            return {
                                url: 'https://acdn.adnxs.com/prebid/appnexus-mapping/mappings.json',
                                refreshInDays: 2
                            };
                        },
                        getUserSyncs: function (e) {
                            if (e.iframeEnabled)
                                return [{
                                        type: 'iframe',
                                        url: 'https://acdn.adnxs.com/dmp/async_usersync.html'
                                    }];
                        },
                        transformBidParams: function (a, e) {
                            return a = _.convertTypes({
                                member: 'string',
                                invCode: 'string',
                                placementId: 'number',
                                keywords: _.transformBidderParamKeywords,
                                publisherId: 'number'
                            }, a), e && (a.use_pmt_rule = 'boolean' == typeof a.usePaymentRule && a.usePaymentRule, a.usePaymentRule && delete a.usePaymentRule, j(a.keywords) && a.keywords.forEach(P), Object.keys(a).forEach(function (e) {
                                var r = _.convertCamelToUnderscore(e);
                                r !== e && (a[r] = a[e], delete a[e]);
                            })), a;
                        },
                        onBidWon: function (e) {
                            e.native && function (e) {
                                var r = function (e) {
                                    var r;
                                    if (_.isStr(e) && U(e))
                                        r = e;
                                    else if (_.isArray(e))
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
                function j(e) {
                    return _.isArray(e) && 0 < e.length;
                }
                function P(e) {
                    j(e.value) && '' === e.value[0] && delete e.value;
                }
                function U(e) {
                    var r = e.match(h), a = null != r && 1 <= r.length, t = e.match(E), n = null != t && 1 <= t.length;
                    return e.startsWith(m) && n && a;
                }
                function N(a) {
                    var e, r, n, i, t = {};
                    t.sizes = q(a.sizes), t.primary_size = t.sizes[0], t.ad_types = [], t.uuid = a.bidId, a.params.placementId ? t.id = parseInt(a.params.placementId, 10) : t.code = a.params.invCode, t.allow_smaller_sizes = a.params.allowSmallerSizes || !1, t.use_pmt_rule = a.params.usePaymentRule || !1, t.prebid = !0, t.disable_psa = !0, a.params.reserve && (t.reserve = a.params.reserve), a.params.position && (t.position = {
                        above: 1,
                        below: 2
                    }[a.params.position] || 0), a.params.trafficSourceCode && (t.traffic_source_code = a.params.trafficSourceCode), a.params.privateSizes && (t.private_sizes = q(a.params.privateSizes)), a.params.supplyType && (t.supply_type = a.params.supplyType), a.params.pubClick && (t.pubclick = a.params.pubClick), a.params.extInvCode && (t.ext_inv_code = a.params.extInvCode), a.params.publisherId && (t.publisher_id = parseInt(a.params.publisherId, 10)), a.params.externalImpId && (t.external_imp_id = a.params.externalImpId), _.isEmpty(a.params.keywords) || (0 < (e = _.transformBidderParamKeywords(a.params.keywords)).length && e.forEach(P), t.keywords = e), a.mediaType !== g.c && !_.deepAccess(a, 'mediaTypes.'.concat(g.c)) || (t.ad_types.push(g.c), 0 === t.sizes.length && (t.sizes = q([
                        1,
                        1
                    ])), a.nativeParams && (n = a.nativeParams, i = {}, Object.keys(n).forEach(function (e) {
                        var r, a = l[e] && l[e].serverName || l[e] || e, t = l[e] && l[e].requiredParams;
                        i[a] = b({}, t, n[e]), a !== l.image.serverName && a !== l.icon.serverName || !i[a].sizes || (r = i[a].sizes, (_.isArrayOfNums(r) || _.isArray(r) && 0 < r.length && r.every(function (e) {
                            return _.isArrayOfNums(e);
                        })) && (i[a].sizes = q(i[a].sizes))), a === l.privacyLink && (i.privacy_supported = !0);
                    }), r = i, t[g.c] = { layouts: [r] }));
                    var s = _.deepAccess(a, 'mediaTypes.'.concat(g.d)), o = _.deepAccess(a, 'mediaTypes.video.context');
                    t.hb_source = s && 'adpod' === o ? 7 : 1, a.mediaType !== g.d && !s || t.ad_types.push(g.d), (a.mediaType === g.d || s && 'outstream' !== o) && (t.require_asset_url = !0), a.params.video && (t.video = {}, Object.keys(a.params.video).filter(function (e) {
                        return w()(c, e);
                    }).forEach(function (e) {
                        switch (e) {
                        case 'context':
                        case 'playback_method':
                            var r = a.params.video[e], r = _.isArray(r) ? r[0] : r;
                            t.video[e] = u[e][r];
                            break;
                        case 'frameworks':
                            break;
                        default:
                            t.video[e] = a.params.video[e];
                        }
                    }), a.params.video.frameworks && _.isArray(a.params.video.frameworks) && (t.video_frameworks = a.params.video.frameworks)), a.renderer && (t.video = b({}, t.video, { custom_renderer_present: !0 })), a.params.frameworks && _.isArray(a.params.frameworks) && (t.banner_frameworks = a.params.frameworks);
                    var d = I()(p.a.getAdUnits(), function (e) {
                        return a.transactionId === e.transactionId;
                    });
                    return d && d.mediaTypes && d.mediaTypes.banner && t.ad_types.push(g.b), 0 === t.ad_types.length && delete t.ad_types, t;
                }
                function q(e) {
                    var r = [], a = {};
                    if (_.isArray(e) && 2 === e.length && !_.isArray(e[0]))
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
                function z(e) {
                    return !!parseInt(e.params.member, 10);
                }
                function B(e) {
                    if (e.params)
                        return !!e.params.app;
                }
                function D(e) {
                    return e.params && e.params.app ? !!e.params.app.id : !!e.params.app;
                }
                function V(e) {
                    return !!e.debug;
                }
                function J(e) {
                    return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === g.a;
                }
                function W(e) {
                    var r = !1, a = e.params, t = e.params.video;
                    return a.frameworks && _.isArray(a.frameworks) && (r = w()(e.params.frameworks, 6)), !r && t && t.frameworks && _.isArray(t.frameworks) && (r = w()(e.params.video.frameworks, 6)), r;
                }
                function F(e, r, a) {
                    _.isEmpty(e.video) && (e.video = {}), e.video[r] = a;
                }
                function H(e) {
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
                function L(e, r, a, t) {
                    return r && (t ? e.push({
                        source: a,
                        id: r,
                        rti_partner: t
                    }) : e.push({
                        source: a,
                        id: r
                    })), e;
                }
                Object(y.registerBidder)(R);
            }
        }, [292]);
        pbjsChunk([341], {
            310: function (e, r, n) {
                e.exports = n(311);
            },
            311: function (e, r, n) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), n.d(r, 'VIDEO_ENDPOINT', function () {
                    return p;
                }), n.d(r, 'BANNER_ENDPOINT', function () {
                    return l;
                }), n.d(r, 'OUTSTREAM_SRC', function () {
                    return b;
                }), n.d(r, 'VIDEO_TARGETING', function () {
                    return w;
                }), n.d(r, 'DEFAULT_MIMES', function () {
                    return I;
                }), n.d(r, 'SUPPORTED_USER_IDS', function () {
                    return T;
                }), n.d(r, 'spec', function () {
                    return A;
                });
                var v = n(0), t = n(3), i = n(1), c = n(11), u = n(2), o = n(10), f = n.n(o), a = n(12), m = n.n(a);
                function g() {
                    return (g = Object.assign || function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var n = arguments[r];
                            for (var t in n)
                                Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function d(e, r) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, r) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var n = [], t = !0, i = !1, o = void 0;
                        try {
                            for (var a, d = e[Symbol.iterator](); !(t = (a = d.next()).done) && (n.push(a.value), !r || n.length !== r); t = !0);
                        } catch (e) {
                            i = !0, o = e;
                        } finally {
                            try {
                                t || null == d.return || d.return();
                            } finally {
                                if (i)
                                    throw o;
                            }
                        }
                        return n;
                    }(e, r) || function (e, r) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return s(e, r);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === n && e.constructor && (n = e.constructor.name);
                        if ('Map' === n || 'Set' === n)
                            return Array.from(e);
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return s(e, r);
                    }(e, r) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function s(e, r) {
                    (null == r || r > e.length) && (r = e.length);
                    for (var n = 0, t = new Array(r); n < r; n++)
                        t[n] = e[n];
                    return t;
                }
                var h = '1.15', y = 'BFIO_PREBID', p = 'https://reachms.bfmio.com/bid.json?exchange_id=', l = 'https://display.bfmio.com/prebid_display', b = 'https://player-cdn.beachfrontmedia.com/playerapi/loader/outstream.js', w = [
                        'mimes',
                        'playbackmethod',
                        'maxduration',
                        'placement',
                        'skip',
                        'skipmin',
                        'skipafter'
                    ], I = [
                        'video/mp4',
                        'application/javascript'
                    ], T = [
                        {
                            key: 'tdid',
                            source: 'adserver.org',
                            rtiPartner: 'TDID',
                            queryParam: 'tdid'
                        },
                        {
                            key: 'idl_env',
                            source: 'liveramp.com',
                            rtiPartner: 'idl',
                            queryParam: 'idl'
                        }
                    ], S = '', A = {
                        code: 'beachfront',
                        supportedMediaTypes: [
                            u.d,
                            u.b
                        ],
                        isBidRequestValid: function (e) {
                            return !(!_(e) && !j(e));
                        },
                        buildRequests: function (e, r) {
                            var n = [], t = e.filter(_), i = e.filter(j);
                            return t.forEach(function (e) {
                                S = W(e, 'appId'), n.push({
                                    method: 'POST',
                                    url: p + S,
                                    data: function (e, r) {
                                        var n = P(C(e)), t = function (r) {
                                                var n = {}, t = [
                                                        'playerSize',
                                                        'context',
                                                        'w',
                                                        'h'
                                                    ];
                                                return Object.keys(Object(r.mediaTypes.video)).filter(function (e) {
                                                    return !m()(t, e);
                                                }).forEach(function (e) {
                                                    n[e] = r.mediaTypes.video[e];
                                                }), Object.keys(Object(r.params.video)).filter(function (e) {
                                                    return m()(w, e);
                                                }).forEach(function (e) {
                                                    n[e] = r.params.video[e];
                                                }), n;
                                            }(e), i = W(e, 'appId'), o = W(e, 'bidfloor'), a = W(e, 'tagid'), d = R(r), s = function (e) {
                                                return T.map(function (o) {
                                                    return function (e) {
                                                        var r = e.key, n = e.source, t = e.rtiPartner, i = o.userId && o.userId[r];
                                                        return i ? {
                                                            source: n,
                                                            uids: [{
                                                                    id: i,
                                                                    ext: { rtiPartner: t }
                                                                }]
                                                        } : null;
                                                    };
                                                }(e)).filter(function (e) {
                                                    return e;
                                                });
                                            }(e), c = {
                                                isPrebid: !0,
                                                appId: i,
                                                domain: document.location.hostname,
                                                id: v.getUniqueIdentifierStr(),
                                                imp: [{
                                                        video: g({
                                                            w: n.w,
                                                            h: n.h,
                                                            mimes: I
                                                        }, t),
                                                        bidfloor: o,
                                                        tagid: a,
                                                        secure: 0 === d.protocol.indexOf('https') ? 1 : 0,
                                                        displaymanager: y,
                                                        displaymanagerver: h
                                                    }],
                                                site: {
                                                    page: d.href,
                                                    domain: d.hostname
                                                },
                                                device: {
                                                    ua: navigator.userAgent,
                                                    language: navigator.language,
                                                    devicetype: N() ? 1 : /(smart[-]?tv|hbbtv|appletv|googletv|hdmi|netcast\.tv|viera|nettv|roku|\bdtv\b|sonydtv|inettvbrowser|\btv\b)/i.test(navigator.userAgent) ? 3 : 2,
                                                    dnt: x() ? 1 : 0,
                                                    js: 1,
                                                    geo: {}
                                                },
                                                regs: { ext: {} },
                                                user: { ext: {} },
                                                cur: ['USD']
                                            };
                                        r && r.uspConsent && (c.regs.ext.us_privacy = r.uspConsent);
                                        {
                                            var u, p, f;
                                            r && r.gdprConsent && (u = r.gdprConsent, p = u.gdprApplies, f = u.consentString, c.regs.ext.gdpr = p ? 1 : 0, c.user.ext.consent = f);
                                        }
                                        0 < s.length && (c.user.ext.eids = s);
                                        var l = navigator.connection || navigator.webkitConnection;
                                        l && l.effectiveType && (c.device.connectiontype = l.effectiveType);
                                        return c;
                                    }(e, r),
                                    bidRequest: e
                                });
                            }), i.length && (S = k(i[0], 'appId'), n.push({
                                method: 'POST',
                                url: l,
                                data: function (i, e) {
                                    var r = R(e), n = function () {
                                            try {
                                                return window.top.document.referrer;
                                            } catch (e) {
                                                return '';
                                            }
                                        }(), o = {
                                            slots: i.map(function (e) {
                                                return {
                                                    slot: e.adUnitCode,
                                                    id: k(e, 'appId'),
                                                    bidfloor: k(e, 'bidfloor'),
                                                    tagid: k(e, 'tagid'),
                                                    sizes: (r = e, O(v.deepAccess(r, 'mediaTypes.banner.sizes') || r.sizes))
                                                };
                                                var r;
                                            }),
                                            page: r.href,
                                            domain: r.hostname,
                                            search: r.search,
                                            secure: 0 === r.protocol.indexOf('https') ? 1 : 0,
                                            referrer: n,
                                            ua: navigator.userAgent,
                                            deviceOs: function () {
                                                var e = f()([
                                                    {
                                                        s: 'Android',
                                                        r: /Android/
                                                    },
                                                    {
                                                        s: 'iOS',
                                                        r: /(iPhone|iPad|iPod)/
                                                    },
                                                    {
                                                        s: 'Mac OS X',
                                                        r: /Mac OS X/
                                                    },
                                                    {
                                                        s: 'Mac OS',
                                                        r: /(MacPPC|MacIntel|Mac_PowerPC|Macintosh)/
                                                    },
                                                    {
                                                        s: 'Linux',
                                                        r: /(Linux|X11)/
                                                    },
                                                    {
                                                        s: 'Windows 10',
                                                        r: /(Windows 10.0|Windows NT 10.0)/
                                                    },
                                                    {
                                                        s: 'Windows 8.1',
                                                        r: /(Windows 8.1|Windows NT 6.3)/
                                                    },
                                                    {
                                                        s: 'Windows 8',
                                                        r: /(Windows 8|Windows NT 6.2)/
                                                    },
                                                    {
                                                        s: 'Windows 7',
                                                        r: /(Windows 7|Windows NT 6.1)/
                                                    },
                                                    {
                                                        s: 'Windows Vista',
                                                        r: /Windows NT 6.0/
                                                    },
                                                    {
                                                        s: 'Windows Server 2003',
                                                        r: /Windows NT 5.2/
                                                    },
                                                    {
                                                        s: 'Windows XP',
                                                        r: /(Windows NT 5.1|Windows XP)/
                                                    },
                                                    {
                                                        s: 'UNIX',
                                                        r: /UNIX/
                                                    },
                                                    {
                                                        s: 'Search Bot',
                                                        r: /(nuhk|Googlebot|Yammybot|Openbot|Slurp|MSNBot|Ask Jeeves\/Teoma|ia_archiver)/
                                                    }
                                                ], function (e) {
                                                    return e.r.test(navigator.userAgent);
                                                });
                                                return e ? e.s : 'unknown';
                                            }(),
                                            isMobile: N() ? 1 : 0,
                                            dnt: x() ? 1 : 0,
                                            adapterVersion: h,
                                            adapterName: y
                                        };
                                    e && e.uspConsent && (o.usPrivacy = e.uspConsent);
                                    {
                                        var t, a, d;
                                        e && e.gdprConsent && (t = e.gdprConsent, a = t.gdprApplies, d = t.consentString, o.gdpr = a ? 1 : 0, o.gdprConsent = d);
                                    }
                                    return T.forEach(function (e) {
                                        var r = e.key, n = e.queryParam, t = i[0] && i[0].userId && i[0].userId[r];
                                        t && (o[n] = t);
                                    }), o;
                                }(i, r),
                                bidRequest: i
                            })), n;
                        },
                        interpretResponse: function (e, r) {
                            var n, t, i = r.bidRequest;
                            if (e = e.body, E(i)) {
                                if (!e || !e.bidPrice)
                                    return v.logWarn('No valid video bids from '.concat(A.code, ' bidder')), [];
                                var o = P(C(i)), a = v.deepAccess(i, 'mediaTypes.video.context'), d = W(i, 'responseType') || 'both', s = {
                                        requestId: i.bidId,
                                        bidderCode: A.code,
                                        cpm: e.bidPrice,
                                        width: o.w,
                                        height: o.h,
                                        creativeId: e.crid || e.cmpId,
                                        renderer: 'outstream' === a ? (n = i, (t = c.a.install({
                                            id: n.bidId,
                                            url: b,
                                            loaded: !1
                                        })).setRender(function (e) {
                                            e.renderer.push(function () {
                                                window.Beachfront.Player(e.adUnitCode, {
                                                    adTagUrl: e.vastUrl,
                                                    width: e.width,
                                                    height: e.height,
                                                    expandInView: U(n, 'expandInView', !1),
                                                    collapseOnComplete: U(n, 'collapseOnComplete', !0),
                                                    progressColor: U(n, 'progressColor'),
                                                    adPosterColor: U(n, 'adPosterColor')
                                                });
                                            });
                                        }), t) : null,
                                        mediaType: u.d,
                                        currency: 'USD',
                                        netRevenue: !0,
                                        ttl: 300
                                    };
                                return 'nurl' !== d && 'both' !== d || (s.vastUrl = e.url), 'adm' !== d && 'both' !== d || (s.vastXml = e.vast), s;
                            }
                            return e && e.length ? e.filter(function (e) {
                                return e.adm;
                            }).map(function (r) {
                                return {
                                    requestId: f()(i, function (e) {
                                        return e.adUnitCode === r.slot;
                                    }).bidId,
                                    bidderCode: A.code,
                                    ad: r.adm,
                                    creativeId: r.crid,
                                    cpm: r.price,
                                    width: r.w,
                                    height: r.h,
                                    mediaType: u.b,
                                    currency: 'USD',
                                    netRevenue: !0,
                                    ttl: 300
                                };
                            }) : (v.logWarn('No valid banner bids from '.concat(A.code, ' bidder')), []);
                        },
                        getUserSyncs: function (e, r, n, t) {
                            var i = 1 < arguments.length && void 0 !== r ? r : [], o = 2 < arguments.length && void 0 !== n ? n : {}, a = 3 < arguments.length && void 0 !== t ? t : '', d = [], s = o.gdprApplies, c = o.consentString, u = void 0 === c ? '' : c, p = f()(i, function (e) {
                                    return v.isArray(e.body);
                                });
                            return p ? e.iframeEnabled && p.body.filter(function (e) {
                                return e.sync;
                            }).forEach(function (e) {
                                d.push({
                                    type: 'iframe',
                                    url: e.sync
                                });
                            }) : e.iframeEnabled ? d.push({
                                type: 'iframe',
                                url: 'https://sync.bfmio.com/sync_iframe?ifg=1&id='.concat(S, '&gdpr=').concat(s ? 1 : 0, '&gc=').concat(u, '&gce=1&us_privacy=').concat(a)
                            }) : e.pixelEnabled && d.push({
                                type: 'image',
                                url: 'https://sync.bfmio.com/syncb?pid=144&id='.concat(S, '&gdpr=').concat(s ? 1 : 0, '&gc=').concat(u, '&gce=1&us_privacy=').concat(a)
                            }), d;
                        }
                    };
                function P(e) {
                    return e && e.length ? e[0] : {
                        w: void 0,
                        h: void 0
                    };
                }
                function O(e) {
                    return v.parseSizesInput(e).map(function (e) {
                        var r = d(e.split('x'), 2), n = r[0], t = r[1];
                        return {
                            w: parseInt(n, 10) || void 0,
                            h: parseInt(t, 10) || void 0
                        };
                    });
                }
                function C(e) {
                    return O(v.deepAccess(e, 'mediaTypes.video.playerSize') || e.sizes);
                }
                function N() {
                    return /(ios|ipod|ipad|iphone|android)/i.test(navigator.userAgent);
                }
                function x() {
                    return '1' === navigator.doNotTrack || '1' === window.doNotTrack || '1' === navigator.msDoNoTrack || 'yes' === navigator.doNotTrack;
                }
                function E(e) {
                    return v.deepAccess(e, 'mediaTypes.video');
                }
                function W(e, r) {
                    return v.deepAccess(e, 'params.video.' + r) || v.deepAccess(e, 'params.' + r);
                }
                function k(e, r) {
                    return v.deepAccess(e, 'params.banner.' + r) || v.deepAccess(e, 'params.' + r);
                }
                function U(e, r, n) {
                    var t = v.deepAccess(e, 'params.player.' + r);
                    return void 0 === t ? n : t;
                }
                function _(e) {
                    return E(e) && W(e, 'appId') && W(e, 'bidfloor');
                }
                function j(e) {
                    return r = e, (v.deepAccess(r, 'mediaTypes.banner') || !E(r)) && k(e, 'appId') && k(e, 'bidfloor');
                    var r;
                }
                function R(e) {
                    var r = e && e.refererInfo && e.refererInfo.referer;
                    return v.parseUrl(t.b.getConfig('pageUrl') || r, { decodeSearchAsString: !0 });
                }
                Object(i.registerBidder)(A);
            }
        }, [310]);
        pbjsChunk([311], {
            376: function (n, t, e) {
                n.exports = e(377);
            },
            377: function (n, t, e) {
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
                var u = e(0), o = e(3), a = e(8), i = e(12), s = e.n(i), r = e(71), f = e.n(r);
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
                        iab: function (o, e, s) {
                            function n(n, t) {
                                u.logInfo('Received a response from CMP', n), t ? !1 !== n.gdprApplies && 'tcloaded' !== n.eventStatus && 'useractioncomplete' !== n.eventStatus || o(n, s) : e('CMP unable to register callback function.  Please check CMP setup.', s);
                            }
                            var t = function () {
                                    var t = {};
                                    function e() {
                                        t.getConsentData && t.getVendorConsents && (u.logInfo('Received all requested responses from CMP', t), o(t, s));
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
                                }(), i = a.cmpFrame, r = a.cmpFunction;
                            if (!i)
                                return e('CMP not found.', s);
                            u.isFn(r) ? (u.logInfo('Detected CMP API is directly accessible, calling it now...'), 1 === D ? (r('getConsentData', null, t.consentDataCallback), r('getVendorConsents', null, t.vendorConsentsCallback)) : 2 === D && r('addEventListener', D, n)) : 1 === D && window.$sf && window.$sf.ext && 'function' == typeof window.$sf.ext.cmp ? (u.logInfo('Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now...'), d('getConsentData', t.consentDataCallback), d('getVendorConsents', t.vendorConsentsCallback)) : (u.logInfo('Detected CMP is outside the current iframe where Prebid.js is located, calling it now...'), 1 === D ? (l('getConsentData', i, t.consentDataCallback), l('getVendorConsents', i, t.vendorConsentsCallback)) : 2 === D && l('addEventListener', i, n));
                            function d(o, a) {
                                var n, t = s.adUnits, e = 1, i = 1;
                                Array.isArray(t) && 0 < t.length && (e = (n = u.getAdUnitSizes(t[0]))[0][0], i = n[0][1]), window.$sf.ext.register(e, i, function (n, t) {
                                    var e;
                                    'cmpReturn' === n && (e = 'getConsentData' === o ? t.vendorConsentData : t.vendorConsents, a(e));
                                }), window.$sf.ext.cmp(o);
                            }
                            function l(n, i, t) {
                                var a = 2 === D ? '__tcfapi' : '__cmp', s = Math.random() + '', r = ''.concat(a, 'Call');
                                function e(n) {
                                    var t, e = ''.concat(a, 'Return'), o = 'string' == typeof n.data && f()(n.data, e) ? JSON.parse(n.data) : n.data;
                                    o[e] && o[e].callId && (t = o[e], void 0 !== c[t.callId] && c[t.callId](t.returnValue, t.success));
                                }
                                2 === D ? (window[a] = function (n, t, e, o) {
                                    var a = p({}, r, {
                                        command: n,
                                        version: t,
                                        parameter: o,
                                        callId: s
                                    });
                                    c[s] = e, i.postMessage(a, '*');
                                }, window.addEventListener('message', e, !1), window[a](n, D, t)) : (window[a] = function (n, t, e) {
                                    var o = p({}, r, {
                                        command: n,
                                        parameter: t,
                                        callId: s
                                    });
                                    c[s] = e, i.postMessage(o, '*');
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
                    return C ? (u.logInfo('User consent information already known.  Pulling internally stored information...'), S(null, e)) : s()(Object.keys(M), d) ? (M[d].call(this, A, P, e), void (e.haveExited || (0 === l ? A(void 0, e) : e.timer = setTimeout(function (n) {
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
        }, [376]);
        pbjsChunk([310], {
            383: function (t, n, e) {
                t.exports = e(384);
            },
            384: function (t, n, e) {
                'use strict';
                Object.defineProperty(n, '__esModule', { value: !0 }), e.d(n, 'consentAPI', function () {
                    return s;
                }), e.d(n, 'consentTimeout', function () {
                    return c;
                }), e.d(n, 'staticConsentData', function () {
                    return u;
                }), n.requestBidsHook = m, n.resetConsentData = function () {
                    l = void 0, s = void 0, o.uspDataHandler.setConsentData(null);
                }, n.setConsentConfig = P;
                var r = e(0), a = e(3), o = e(8);
                function i(t) {
                    return (i = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t;
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                    })(t);
                }
                var s, c, u, l, d = 'iab', p = 50, f = !1, g = {
                        iab: function (a, o, i) {
                            var t = function () {
                                    var e = {};
                                    return {
                                        consentDataCallback: function (t, n) {
                                            n && t.uspString && (e.usPrivacy = t.uspString), e.usPrivacy ? a(e, i) : o('Unable to get USP consent string.', i);
                                        }
                                    };
                                }(), s = {}, n = function () {
                                    for (var t, n, e = window; !t;) {
                                        try {
                                            if ('function' == typeof e.__uspapi) {
                                                n = e.__uspapi, t = e;
                                                break;
                                            }
                                        } catch (t) {
                                        }
                                        try {
                                            if (e.frames.__uspapiLocator) {
                                                t = e;
                                                break;
                                            }
                                        } catch (t) {
                                        }
                                        if (e === window.top)
                                            break;
                                        e = e.parent;
                                    }
                                    return {
                                        uspapiFrame: t,
                                        uspapiFunction: n
                                    };
                                }(), e = n.uspapiFrame, c = n.uspapiFunction;
                            if (!e)
                                return o('USP CMP not found.', i);
                            r.isFn(c) ? (r.logInfo('Detected USP CMP is directly accessible, calling it now...'), c('getUSPData', 1, t.consentDataCallback)) : (r.logInfo('Detected USP CMP is outside the current iframe where Prebid.js is located, calling it now...'), function (t, i, n) {
                                window.__uspapi = function (t, n, e) {
                                    var a = Math.random() + '', o = {
                                            __uspapiCall: {
                                                command: t,
                                                version: n,
                                                callId: a
                                            }
                                        };
                                    s[a] = e, i.postMessage(o, '*');
                                }, window.addEventListener('message', function (t) {
                                    var n = t && t.data && t.data.__uspapiReturn;
                                    n && n.callId && void 0 !== s[n.callId] && (s[n.callId](n.returnValue, n.success), delete s[n.callId]);
                                }, !1), window.__uspapi(t, 1, n);
                            }('getUSPData', e, t.consentDataCallback));
                        },
                        static: function (t, n, e) {
                            t(u, e);
                        }
                    };
                function m(t, n) {
                    var e = {
                        context: this,
                        args: [n],
                        nextFn: t,
                        adUnits: n.adUnits || pbjs.adUnits,
                        bidsBackHandler: n.bidsBackHandler,
                        haveExited: !1,
                        timer: null
                    };
                    if (!g[s])
                        return r.logWarn('USP framework ('.concat(s, ') is not a supported framework. Aborting consentManagement module and resuming auction.')), e.nextFn.apply(e.context, e.args);
                    g[s].call(this, b, y, e), e.haveExited || (0 === c ? b(void 0, e) : e.timer = setTimeout(function (t) {
                        y('USPAPI workflow exceeded timeout threshold.', t);
                    }.bind(null, e), c));
                }
                function b(t, n) {
                    var e;
                    !t || !t.usPrivacy ? y('USPAPI returned unexpected value during lookup process.', n, t) : (clearTimeout(n.timer), (e = t) && e.usPrivacy && (l = e.usPrivacy, o.uspDataHandler.setConsentData(l)), v(null, n));
                }
                function y(t, n, e) {
                    clearTimeout(n.timer), v(t, n, e);
                }
                function v(t, n, e) {
                    var a, o, i;
                    !1 === n.haveExited && (n.haveExited = !0, a = n.context, o = n.args, i = n.nextFn, t && r.logWarn(t + ' Resuming auction without consent data as per consentManagement config.', e), i.apply(a, o));
                }
                function P(t) {
                    (t = t && t.usp) && 'object' === i(t) ? (r.isStr(t.cmpApi) ? s = t.cmpApi : (s = d, r.logInfo('consentManagement.usp config did not specify cmpApi. Using system default setting ('.concat(d, ').'))), r.isNumber(t.timeout) ? c = t.timeout : (c = p, r.logInfo('consentManagement.usp config did not specify timeout. Using system default setting ('.concat(p, ').'))), r.logInfo('USPAPI consentManagement module has been activated...'), 'static' === s && (r.isPlainObject(t.consentData) && r.isPlainObject(t.consentData.getUSPData) ? (t.consentData.getUSPData.uspString && (u = { usPrivacy: t.consentData.getUSPData.uspString }), c = 0) : r.logError('consentManagement config with cmpApi: \'static\' did not specify consentData. No consents will be available to adapters.')), f || pbjs.requestBids.before(m, 50), f = !0) : r.logWarn('consentManagement.usp config not defined, exiting usp consent manager');
                }
                a.b.getConfig('consentManagement', function (t) {
                    return P(t.consentManagement);
                });
            }
        }, [383]);
        pbjsChunk([307], {
            389: function (e, r, a) {
                e.exports = a(390);
            },
            390: function (e, r, a) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), a.d(r, 'storage', function () {
                    return l;
                }), a.d(r, 'spec', function () {
                    return o;
                });
                var g = a(0), i = a(1), t = a(2), n = a(7), l = Object(n.b)(24), s = 'conversant', o = {
                        code: s,
                        gvlid: 24,
                        aliases: ['cnvr'],
                        supportedMediaTypes: [
                            t.b,
                            t.d
                        ],
                        isBidRequestValid: function (e) {
                            if (!e || !e.params)
                                return g.logWarn(s + ': Missing bid parameters'), !1;
                            if (!g.isStr(e.params.site_id))
                                return g.logWarn(s + ': site_id must be specified as a string'), !1;
                            if (b(e))
                                if (e.params.mimes) {
                                    if (!g.isArray(e.params.mimes) || !e.params.mimes.every(function (e) {
                                            return g.isStr(e);
                                        }))
                                        return g.logWarn(s + ': mimes must be an array of strings'), !1;
                                } else
                                    g.logWarn(s + ': mimes should be specified for videos');
                            return !0;
                        },
                        buildRequests: function (e, r) {
                            var a, i = r && r.refererInfo ? r.refererInfo.referer : '', o = '', d = '', p = null, c = '_pubcid', u = 'https://web.hb.ad.cpe.dotomi.com/cvx/client/hb/ortb/25', t = e.map(function (e) {
                                    var r = g.getBidIdParameter('bidfloor', e.params);
                                    o = g.getBidIdParameter('site_id', e.params) || o, c = g.getBidIdParameter('pubcid_name', e.params) || c, d = e.auctionId;
                                    var a, i, t, n, s = {
                                            id: e.bidId,
                                            secure: 1,
                                            bidfloor: r || 0,
                                            displaymanager: 'Prebid.js',
                                            displaymanagerver: '4.34.0'
                                        };
                                    return f(e.params.tag_id, s, 'tagid'), b(e) ? (t = {}, (i = v((a = g.deepAccess(e, 'mediaTypes.video') || {}).playerSize || e.sizes)) && i[0] && (f(i[0].w, t, 'w'), f(i[0].h, t, 'h')), f(e.params.position, t, 'pos'), f(e.params.mimes || a.mimes, t, 'mimes'), f(e.params.maxduration, t, 'maxduration'), f(e.params.protocols || a.protocols, t, 'protocols'), f(e.params.api || a.api, t, 'api'), s.video = t) : (n = { format: v((g.deepAccess(e, 'mediaTypes.banner') || {}).sizes || e.sizes) }, f(e.params.position, n, 'pos'), s.banner = n), e.userId && e.userId.pubcid ? p = e.userId.pubcid : e.crumbs && e.crumbs.pubcid && (p = e.crumbs.pubcid), e.params.white_label_url && (u = e.params.white_label_url), s;
                                }), n = {
                                    id: d,
                                    imp: t,
                                    site: {
                                        id: o,
                                        mobile: null !== document.querySelector('meta[name="viewport"][content*="width=device-width"]') ? 1 : 0,
                                        page: i
                                    },
                                    device: (a = navigator.language ? 'language' : 'userLanguage', {
                                        h: screen.height,
                                        w: screen.width,
                                        dnt: '1' === navigator.doNotTrack || '1' === window.doNotTrack || '1' === navigator.msDoNoTrack || 'yes' === navigator.doNotTrack ? 1 : 0,
                                        language: navigator[a].split('-')[0],
                                        make: navigator.vendor ? navigator.vendor : '',
                                        ua: navigator.userAgent
                                    }),
                                    at: 1
                                }, s = {};
                            r && (r.gdprConsent && (s.consent = r.gdprConsent.consentString, 'boolean' == typeof r.gdprConsent.gdprApplies && g.deepSetValue(n, 'regs.ext.gdpr', r.gdprConsent.gdprApplies ? 1 : 0)), r.uspConsent && g.deepSetValue(n, 'regs.ext.us_privacy', r.uspConsent)), (p = p || function (e) {
                                var r;
                                try {
                                    var a;
                                    (r = l.getCookie(e)) || ('' === (a = l.getDataFromLocalStorage(''.concat(e, '_exp'))) || a && 0 < new Date(a).getTime() - Date.now()) && (r = (r = l.getDataFromLocalStorage(e)) ? decodeURIComponent(r) : r), g.isStr(r) && '{' === r.charAt(0) && (r = JSON.parse(r));
                                } catch (e) {
                                    g.logError(e);
                                }
                                return r;
                            }(c)) && (s.fpc = p);
                            var m = function (e) {
                                var r = e[0], a = [];
                                {
                                    var i;
                                    g.isArray(r.userIdAsEids) && 0 < r.userIdAsEids.length && (i = {
                                        'adserver.org': 1,
                                        'liveramp.com': 1,
                                        'criteo.com': 1,
                                        'id5-sync.com': 1,
                                        'parrable.com': 1,
                                        'liveintent.com': 1
                                    }, r.userIdAsEids.forEach(function (e) {
                                        i.hasOwnProperty(e.source) && a.push(e);
                                    }));
                                }
                                return a;
                            }(e);
                            return 0 < m.length && (s.eids = m), g.isEmpty(s) || (n.user = { ext: s }), {
                                method: 'POST',
                                url: u,
                                data: n
                            };
                        },
                        interpretResponse: function (s, e) {
                            var o = [], d = {};
                            return s = s.body, e && e.data && e.data.imp && g._each(e.data.imp, function (e) {
                                return d[e.id] = e;
                            }), s && g.isArray(s.seatbid) && g._each(s.seatbid, function (e) {
                                g._each(e.bid, function (e) {
                                    var r, a, i, t, n = parseFloat(e.price);
                                    0 < n && e.impid && (r = e.adm || '', a = e.nurl || '', i = d[e.impid], t = {
                                        requestId: e.impid,
                                        currency: s.cur || 'USD',
                                        cpm: n,
                                        creativeId: e.crid || '',
                                        ttl: 300,
                                        netRevenue: !0,
                                        meta: {}
                                    }, e.adomain && 0 < e.adomain.length && (t.meta.advertiserDomains = e.adomain), i.video ? ('<' === r.charAt(0) ? t.vastXml = r : t.vastUrl = r, t.mediaType = 'video', t.width = i.video.w, t.height = i.video.h) : (t.ad = r + '<img src="' + a + '" />', t.width = e.w, t.height = e.h), o.push(t));
                                });
                            }), o;
                        },
                        transformBidParams: function (e) {
                            return g.convertTypes({
                                site_id: 'string',
                                secure: 'number',
                                mobile: 'number'
                            }, e);
                        }
                    };
                function v(e) {
                    var r;
                    return Array.isArray(e) && (r = 2 === e.length && 'number' == typeof e[0] && 'number' == typeof e[1] ? [{
                            w: e[0],
                            h: e[1]
                        }] : g._map(e, function (e) {
                        return {
                            w: e[0],
                            h: e[1]
                        };
                    })), r;
                }
                function b(e) {
                    return 'video' === e.mediaType || g.deepAccess(e, 'mediaTypes.video');
                }
                function f(e, r, a) {
                    e && (r[a] = e);
                }
                Object(i.registerBidder)(o);
            }
        }, [389]);
        pbjsChunk([302], {
            404: function (e, n, r) {
                e.exports = r(405);
            },
            405: function (e, n, r) {
                'use strict';
                Object.defineProperty(n, '__esModule', { value: !0 }), r.d(n, 'currencySupportEnabled', function () {
                    return R;
                }), r.d(n, 'currencyRates', function () {
                    return D;
                }), n.setConfig = c, n.addBidResponseHook = j;
                var s = r(18), u = r(34), a = r(5), f = (r.n(a), r(4)), d = r(0), o = r(3), l = r(13);
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
        }, [404]);
        pbjsChunk([296], {
            418: function (e, r, t) {
                e.exports = t(419);
            },
            419: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'spec', function () {
                    return b;
                }), r.getFloor = h, r.cleanSizes = g, r.shuffle = v, r.removeDuplicate = A, r.upto5 = I, r.matchRequest = S, r.checkDeepArray = x, r.defaultSize = O, r.bindUserId = w, r.getApi = T, r.getPlaybackmethod = function (e) {
                    if (Array.isArray(e) && 0 < e.length)
                        return e.map(function (e) {
                            return y.playback_method[e];
                        });
                    return [2];
                }, r.getProtocols = j, r.cleanVast = z;
                var u = t(0), n = t(1), d = t(3), i = t(2);
                function c(e, r) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, r) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var t = [], n = !0, i = !1, o = void 0;
                        try {
                            for (var s, a = e[Symbol.iterator](); !(n = (s = a.next()).done) && (t.push(s.value), !r || t.length !== r); n = !0);
                        } catch (e) {
                            i = !0, o = e;
                        } finally {
                            try {
                                n || null == a.return || a.return();
                            } finally {
                                if (i)
                                    throw o;
                            }
                        }
                        return t;
                    }(e, r) || s(e, r) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function o(e) {
                    return function (e) {
                        if (Array.isArray(e))
                            return a(e);
                    }(e) || function (e) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                            return Array.from(e);
                    }(e) || s(e) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function s(e, r) {
                    if (e) {
                        if ('string' == typeof e)
                            return a(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        return 'Object' === t && e.constructor && (t = e.constructor.name), 'Map' === t || 'Set' === t ? Array.from(e) : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? a(e, r) : void 0;
                    }
                }
                function a(e, r) {
                    (null == r || r > e.length) && (r = e.length);
                    for (var t = 0, n = new Array(r); t < r; t++)
                        n[t] = e[t];
                    return n;
                }
                function p(e) {
                    return (p = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function m(r, e) {
                    var t, n = Object.keys(r);
                    return Object.getOwnPropertySymbols && (t = Object.getOwnPropertySymbols(r), e && (t = t.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                    })), n.push.apply(n, t)), n;
                }
                function l(i) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? m(Object(o), !0).forEach(function (e) {
                            var r, t, n;
                            r = i, n = o[t = e], t in r ? Object.defineProperty(r, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[t] = n;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : m(Object(o)).forEach(function (e) {
                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                        });
                    }
                    return i;
                }
                var f = 'https://dmx.districtm.io/b/v1', y = {
                        playback_method: {
                            auto_play_sound_on: 1,
                            auto_play_sound_off: 2,
                            click_to_play: 3,
                            mouse_over: 4,
                            viewport_sound_on: 5,
                            viewport_sound_off: 6
                        }
                    }, b = {
                        code: 'districtmDMX',
                        gvlid: 144,
                        aliases: ['dmx'],
                        supportedFormat: [
                            i.b,
                            i.d
                        ],
                        supportedMediaTypes: [
                            i.d,
                            i.b
                        ],
                        isBidRequestValid: function (e) {
                            return !!e.params.memberid;
                        },
                        interpretResponse: function (e, s) {
                            return (e = e.body || {}).seatbid && u.isArray(e.seatbid) ? e.seatbid.reduce(function (e, r) {
                                var t = r.bid.reduce(function (e, r) {
                                    if (e.price < r.price) {
                                        var t = S(r.impid, s), n = O(t), i = n.width, o = n.height;
                                        return r.cpm = parseFloat(r.price).toFixed(2), r.bidId = r.impid, r.requestId = r.impid, r.width = r.w || i, r.height = r.h || o, r.ttl = 300, r.mediaType = t.mediaTypes && t.mediaTypes.video ? 'video' : 'banner', 'video' === r.mediaType && (r.vastXml = z(r.adm, r.nurl), r.ttl = 3600), r.dealid && (r.dealId = r.dealid), r.uuid = r.bidId, r.ad = r.adm, r.netRevenue = !0, r.creativeId = r.crid, r.currency = 'USD', r.meta = r.meta || {}, r.adomain && 0 < r.adomain.length && (r.meta.advertiserDomains = r.adomain), r;
                                    }
                                    return e.cpm = e.price, e;
                                }, { price: 0 });
                                return t.adm && e.push(t), e;
                            }, []).filter(function (e) {
                                return !!e.bidId;
                            }) : [];
                        },
                        buildRequests: function (e, r) {
                            var t, n = d.b.getConfig('bidderTimeout'), i = {
                                    id: u.generateUUID(),
                                    cur: ['USD'],
                                    tmax: n - 300,
                                    test: this.test() || 0,
                                    site: { publisher: { id: String(e[0].params.memberid) || null } }
                                };
                            try {
                                var o = d.b.getConfig('dmx');
                                i.user = o.user || {};
                                var s = o.site || {};
                                i.site = l(l({}, i.site), s);
                            } catch (e) {
                            }
                            var a = [];
                            e[0] && e[0].userId && (w(a, u.deepAccess(e[0], 'userId.idl_env'), 'liveramp.com', 1), w(a, u.deepAccess(e[0], 'userId.id5id.uid'), 'id5-sync.com', 1), w(a, u.deepAccess(e[0], 'userId.pubcid'), 'pubcid.org', 1), w(a, u.deepAccess(e[0], 'userId.tdid'), 'adserver.org', 1), w(a, u.deepAccess(e[0], 'userId.criteoId'), 'criteo.com', 1), w(a, u.deepAccess(e[0], 'userId.britepoolid'), 'britepool.com', 1), w(a, u.deepAccess(e[0], 'userId.lipb.lipbid'), 'liveintent.com', 1), w(a, u.deepAccess(e[0], 'userId.intentiqid'), 'intentiq.com', 1), w(a, u.deepAccess(e[0], 'userId.lotamePanoramaId'), 'lotame.com', 1), w(a, u.deepAccess(e[0], 'userId.parrableId'), 'parrable.com', 1), w(a, u.deepAccess(e[0], 'userId.netId'), 'netid.de', 1), w(a, u.deepAccess(e[0], 'userId.sharedid'), 'sharedid.org', 1), i.user = i.user || {}, i.user.ext = i.user.ext || {}, i.user.ext.eids = a), i.test || delete i.test, r.gdprConsent && (i.regs = {}, i.regs.ext = {}, i.regs.ext.gdpr = !0 === r.gdprConsent.gdprApplies ? 1 : 0, !0 === r.gdprConsent.gdprApplies && (i.user = {}, i.user.ext = {}, i.user.ext.consent = r.gdprConsent.consentString)), i.regs = i.regs || {}, i.regs.coppa = !0 === d.b.getConfig('coppa') ? 1 : 0, r && r.uspConsent && (i.regs = i.regs || {}, i.regs.ext = i.regs.ext || {}, i.regs.ext.us_privacy = r.uspConsent);
                            try {
                                t = e[0].schain, i.source = {}, i.source.ext = {}, i.source.ext.schain = t || {};
                            } catch (e) {
                            }
                            var c = e.map(function (e) {
                                var r = {};
                                return r.id = e.bidId, r.tagid = String(e.params.dmxid || e.adUnitCode), r.secure = 1, r.bidfloor = h(e), e.mediaTypes && e.mediaTypes.video ? r.video = {
                                    topframe: 1,
                                    skip: e.mediaTypes.video.skip || 0,
                                    linearity: e.mediaTypes.video.linearity || 1,
                                    minduration: e.mediaTypes.video.minduration || 5,
                                    maxduration: e.mediaTypes.video.maxduration || 60,
                                    playbackmethod: e.mediaTypes.video.playbackmethod || [2],
                                    api: T(e.mediaTypes.video),
                                    mimes: e.mediaTypes.video.mimes || ['video/mp4'],
                                    protocols: j(e.mediaTypes.video),
                                    h: e.mediaTypes.video.playerSize[0][1],
                                    w: e.mediaTypes.video.playerSize[0][0]
                                } : r.banner = {
                                    topframe: 1,
                                    w: g(e.sizes, 'w'),
                                    h: g(e.sizes, 'h'),
                                    format: g(e.sizes).map(function (e) {
                                        return {
                                            w: e[0],
                                            h: e[1]
                                        };
                                    }).filter(function (e) {
                                        return 'number' == typeof e.w && 'number' == typeof e.h;
                                    })
                                }, r;
                            });
                            return c.length <= 5 ? (i.imp = c, {
                                method: 'POST',
                                url: f,
                                data: JSON.stringify(i),
                                bidderRequest: r
                            }) : I(c, i, r, f);
                        },
                        test: function () {
                            return -1 !== window.location.href.indexOf('dmTest=true') ? 1 : 0;
                        },
                        getUserSyncs: function (e, r, t, n) {
                            var i = [], o = 'https://cdn.districtm.io/ids/index.html';
                            if (t && t.gdprApplies && 'string' == typeof t.consentString && i.push([
                                    'gdpr',
                                    t.consentString
                                ]), n && i.push([
                                    'ccpa',
                                    n
                                ]), 0 < i.length && (o += '?' + i.map(function (e) {
                                    return e.join('=');
                                }).join('&')), e.iframeEnabled)
                                return [{
                                        type: 'iframe',
                                        url: o
                                    }];
                        }
                    };
                function h(e) {
                    var r, t = null;
                    return 'function' == typeof e.getFloor && ('object' !== p(r = e.getFloor({
                        currency: 'USD',
                        mediaType: e.mediaTypes.video ? 'video' : 'banner',
                        size: e.sizes.map(function (e) {
                            return {
                                w: e[0],
                                h: e[1]
                            };
                        })
                    })) || 'USD' !== r.currency || isNaN(parseFloat(r.floor)) || (t = parseFloat(r.floor))), null !== t ? t : e.params.floor;
                }
                function g(e, r) {
                    var t = v(e, [
                        {
                            size: [
                                300,
                                250
                            ],
                            s: 100
                        },
                        {
                            size: [
                                728,
                                90
                            ],
                            s: 95
                        },
                        {
                            size: [
                                320,
                                50
                            ],
                            s: 90
                        },
                        {
                            size: [
                                160,
                                600
                            ],
                            s: 88
                        },
                        {
                            size: [
                                300,
                                600
                            ],
                            s: 85
                        },
                        {
                            size: [
                                300,
                                50
                            ],
                            s: 80
                        },
                        {
                            size: [
                                970,
                                250
                            ],
                            s: 75
                        },
                        {
                            size: [
                                970,
                                90
                            ],
                            s: 60
                        }
                    ]);
                    switch (r) {
                    case 'w':
                        return t[0][0] || 0;
                    case 'h':
                        return t[0][1] || 0;
                    case 'size':
                    default:
                        return t;
                    }
                }
                function v(e, t) {
                    var r = e.filter(function (e) {
                            return -1 === t.map(function (e) {
                                return ''.concat(e.size[0], 'x').concat(e.size[1]);
                            }).indexOf(''.concat(e[0], 'x').concat(e[1]));
                        }), n = e.reduce(function (r, e) {
                            return 0 === r.length ? (r.push(e), r) : (r.push(e), (r = (r = t.filter(function (e) {
                                return -1 !== r.map(function (e) {
                                    return ''.concat(e[0], 'x').concat(e[1]);
                                }).indexOf(''.concat(e.size[0], 'x').concat(e.size[1]));
                            })).sort(function (e, r) {
                                return r.s - e.s;
                            })).map(function (e) {
                                return e.size;
                            }));
                        }, []);
                    return A([].concat(o(n), o(r)));
                }
                function A(t) {
                    return t.filter(function (e, r) {
                        return t.map(function (e) {
                            return ''.concat(e[0], 'x').concat(e[1]);
                        }).indexOf(''.concat(e[0], 'x').concat(e[1])) === r;
                    });
                }
                function I(e, r, t, n) {
                    for (var i = []; 0 !== e.length;)
                        5 <= e.length ? i.push(e.splice(0, 5)) : i.push(e.splice(0, e.length));
                    return i.map(function (e) {
                        return r.imp = e, {
                            method: 'POST',
                            url: n,
                            data: JSON.stringify(r),
                            bidderRequest: t
                        };
                    });
                }
                function S(r, e) {
                    return c(e.bidderRequest.bids.filter(function (e) {
                        return e.bidId === r;
                    }), 1)[0];
                }
                function x(e) {
                    return Array.isArray(e) && Array.isArray(e[0]) ? e[0] : e;
                }
                function O(e) {
                    var r = e.sizes, t = {};
                    return t.width = x(r)[0], t.height = x(r)[1], t;
                }
                function w(e, r, t, n) {
                    u.isStr(r) && Array.isArray(e) && e.push({
                        source: t,
                        uids: [{
                                id: r,
                                atype: n
                            }]
                    });
                }
                function T(e) {
                    var r = e.api;
                    return r && Array.isArray(r) && 0 < r.length ? r : [2];
                }
                function j(e) {
                    var r = e.protocols;
                    return r && Array.isArray(r) && 0 < r.length ? r : [
                        2,
                        3,
                        5,
                        6,
                        7,
                        8
                    ];
                }
                function z(r, t) {
                    try {
                        var e, n = /<img\s[^>]*?src\s*=\s*['\"]([^'\"]*?)['\"][^>]*?>/, i = c(r.match(n), 2), o = i[0], s = i[1];
                        return r = r.replace(n, ''), o && s && (e = '<Impression><![CDATA['.concat(s, ']]></Impression>'), r = r.replace('</Impression>', '</Impression>'.concat(e))), r;
                    } catch (e) {
                        if (!t)
                            return r;
                        var a = '<Impression><![CDATA['.concat(t, ']]></Impression>');
                        return r = r.replace('</Impression>', '</Impression>'.concat(a));
                    }
                }
                Object(n.registerBidder)(b);
            }
        }, [418]);
        pbjsChunk([282], {
            448: function (r, e, n) {
                r.exports = n(449);
            },
            449: function (r, e, n) {
                'use strict';
                Object.defineProperty(e, '__esModule', { value: !0 }), n.d(e, 'fabrickIdSubmodule', function () {
                    return a;
                }), e.appendUrl = v;
                var g = n(0), h = n(4), t = n(13), k = n(22), a = {
                        name: 'fabrickId',
                        decode: function (r) {
                            return r && r.fabrickId ? { fabrickId: r.fabrickId } : void 0;
                        },
                        getId: function (r, t, a) {
                            try {
                                var c = r && r.params || {};
                                if (window.fabrickMod1 && window.fabrickMod1(c, t, a), !c || !c.apiKey || 'string' != typeof c.apiKey)
                                    return void g.logError('fabrick submodule requires an apiKey.');
                                try {
                                    var e = (b = c).url ? b.url : 'https://fid.agkn.com/f?', n = Object.keys(c);
                                    for (var o in n) {
                                        var i = n[o];
                                        if (!('url' === i || 'refererInfo' === i || 3 < i.length && 'max' === i.substring(0, 3))) {
                                            var f = c[i];
                                            if (Array.isArray(f))
                                                for (var u in f)
                                                    'string' != typeof f[u] && 'number' != typeof f[u] || (e += ''.concat(i, '=').concat(f[u], '&'));
                                            else
                                                'string' != typeof f && 'number' != typeof f || (e += ''.concat(i, '=').concat(f, '&'));
                                        }
                                    }
                                    e = e.slice(0, -1);
                                    var s = (l = c).refererInfo ? l.refererInfo : Object(k.a)(), d = new Map();
                                    p(d, s.referer), s.stack && s.stack[0] && p(d, s.stack[0]), p(d, s.canonicalUrl), p(d, window.location.href), d.forEach(function (r) {
                                        e = v(e, 'r', r, c);
                                    });
                                    return {
                                        callback: function (n) {
                                            var r = {
                                                success: function (r) {
                                                    if (window.fabrickMod2)
                                                        return window.fabrickMod2(n, r, c, t, a);
                                                    var e;
                                                    if (r)
                                                        try {
                                                            e = JSON.parse(r);
                                                        } catch (r) {
                                                            g.logError(r), e = {};
                                                        }
                                                    n(e);
                                                },
                                                error: function (r) {
                                                    g.logError('fabrickId fetch encountered an error', r), n();
                                                }
                                            };
                                            Object(h.a)(e, r, null, {
                                                method: 'GET',
                                                withCredentials: !0
                                            });
                                        }
                                    };
                                } catch (r) {
                                    g.logError('fabrickIdSystem encountered an error', r);
                                }
                            } catch (r) {
                                g.logError('fabrickIdSystem encountered an error', r);
                            }
                            var l, b;
                        }
                    };
                function p(r, e) {
                    var n, t;
                    e && (n = e.split('?')[0], r.has(n) ? (t = r.get(n), e.length > t.length && r.set(n, e)) : r.set(n, e));
                }
                function v(r, e, n, t) {
                    var a = t && t.maxUrlLen || 2000, c = t && t.maxRefLen || 1000, o = t && t.maxSpaceAvailable || 50;
                    if (n && r.length < a - o) {
                        var i = a - r.length;
                        return c < i && (i = c), (n = '&'.concat(e, '=').concat(encodeURIComponent(n))).length >= i && ('%' === (n = n.substring(0, i)).charAt(n.length - 1) ? n = n.substring(0, i - 1) : '%' === n.charAt(n.length - 2) && (n = n.substring(0, i - 2))), ''.concat(r).concat(n);
                    }
                    return r;
                }
                Object(t.e)('userId', a);
            }
        }, [448]);
        pbjsChunk([240], {
            541: function (e, r, t) {
                e.exports = t(542);
            },
            542: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'spec', function () {
                    return c;
                });
                var J = t(0), T = t(2), D = t(3), i = t(10), f = t.n(i), n = t(543), s = t.n(n), o = t(1);
                function N(e) {
                    return function (e) {
                        if (Array.isArray(e))
                            return a(e);
                    }(e) || function (e) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                            return Array.from(e);
                    }(e) || function (e, r) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return a(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === t && e.constructor && (t = e.constructor.name);
                        if ('Map' === t || 'Set' === t)
                            return Array.from(e);
                        if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                            return a(e, r);
                    }(e) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function a(e, r) {
                    (null == r || r > e.length) && (r = e.length);
                    for (var t = 0, i = new Array(r); t < r; t++)
                        i[t] = e[t];
                    return i;
                }
                function d(r, e) {
                    var t, i = Object.keys(r);
                    return Object.getOwnPropertySymbols && (t = Object.getOwnPropertySymbols(r), e && (t = t.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                    })), i.push.apply(i, t)), i;
                }
                function R(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var s = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? d(Object(s), !0).forEach(function (e) {
                            var r, t, i;
                            r = n, i = s[t = e], t in r ? Object.defineProperty(r, t, {
                                value: i,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[t] = i;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(s)) : d(Object(s)).forEach(function (e) {
                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(s, e));
                        });
                    }
                    return n;
                }
                function M(e) {
                    return (M = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var U = 'roundel', y = [
                        T.b,
                        T.d
                    ], b = 100, g = 300, h = 3600, v = !0, x = { JPY: 1 }, p = {
                        PBJS: 'p',
                        IX: 'x'
                    };
                function C(e) {
                    var r = {};
                    return r.id = e.bidId, r.ext = {}, r.ext.siteID = e.params.siteId, !e.params.hasOwnProperty('id') || 'string' != typeof e.params.id && 'number' != typeof e.params.id ? r.ext.sid = ''.concat(e.params.size[0], 'x').concat(e.params.size[1]) : r.ext.sid = String(e.params.id), r;
                }
                function j(e, r, t) {
                    var i = null, n = null;
                    if (e.params.bidFloor && e.params.bidFloorCur && (i = {
                            floor: e.params.bidFloor,
                            currency: e.params.bidFloorCur
                        }), J.isFn(e.getFloor)) {
                        var s, o = '*', a = '*';
                        t && J.contains(y, t) && (a = [
                            (s = r[o = t]).w,
                            s.h
                        ]);
                        try {
                            n = e.getFloor({
                                mediaType: o,
                                size: a
                            });
                        } catch (e) {
                            J.logWarn('priceFloors module call getFloor failed, error : ', e);
                        }
                    }
                    if (i && n)
                        return i.currency !== n.currency ? void J.logWarn('The bid floor currency mismatch between IX params and priceFloors module config') : void (i.floor > n.floor ? (r.bidfloor = i.floor, r.bidfloorcur = i.currency, r.ext.fl = p.IX) : (r.bidfloor = n.floor, r.bidfloorcur = n.currency, r.ext.fl = p.PBJS));
                    n ? (r.bidfloor = n.floor, r.bidfloorcur = n.currency, r.ext.fl = p.PBJS) : i ? (r.bidfloor = i.floor, r.bidfloorcur = i.currency, r.ext.fl = p.IX) : J.logInfo('IX Bid Adapter: No floors available, no floors applied');
                }
                function I(e) {
                    return Array.isArray(e) && 2 === e.length && s()(e[0]) && s()(e[1]);
                }
                function F(e, r) {
                    if (I(e))
                        return e[0] === r[0] && e[1] === r[1];
                    for (var t = 0; t < e.length; t++)
                        if (e[t][0] === r[0] && e[t][1] === r[1])
                            return 1;
                }
                function k(e, r, t, i) {
                    var n = 'https://htlb.casalemedia.com/cygnus', s = function (e) {
                            var r = {
                                    'liveramp.com': 'idl',
                                    'netid.de': 'NETID',
                                    'neustar.biz': 'fabrickId',
                                    'zeotap.com': 'zeotapIdPlus'
                                }, t = [], i = {};
                            if (J.isArray(e))
                                for (var n = 0; n < e.length; n++)
                                    r[e[n].source] && J.deepAccess(e[n], 'uids.0') && (i[e[n].source] = 1, e[n].uids[0].ext = { rtiPartner: r[e[n].source] }, delete e[n].uids[0].atype, t.push(e[n]));
                            return {
                                toSend: t,
                                seenSources: i
                            };
                        }(J.deepAccess(e, '0.userIdAsEids')), o = s.toSend;
                    if (window.headertag && 'function' == typeof window.headertag.getIdentityInfo) {
                        var a, d = window.headertag.getIdentityInfo();
                        if (d && 'object' === M(d))
                            for (var p in d) {
                                !d.hasOwnProperty(p) || !(a = d[p]).responsePending && a.data && 'object' === M(a.data) && Object.keys(a.data).length && !s.seenSources[a.data.source] && o.push(a.data);
                            }
                    }
                    if (r && r.bidderCode === U && !s.seenSources['liveramp.com'])
                        return [];
                    var c = {};
                    c.id = e[0].bidderRequestId, c.site = {}, c.ext = {}, c.ext.source = 'prebid', c.ext.ixdiag = {};
                    var m, u = function (t) {
                            for (var i, n = t.map(function (e) {
                                        return e.transactionId;
                                    }).filter(function (e, r, t) {
                                        return t.indexOf(e) === r;
                                    }), s = {
                                        mfu: 0,
                                        bu: 0,
                                        iu: 0,
                                        nu: 0,
                                        ou: 0,
                                        allu: 0,
                                        ren: !1,
                                        version: '4.34.0'
                                    }, e = 0; e < n.length; e++)
                                !function (r) {
                                    var e;
                                    i = t.filter(function (e) {
                                        return e.transactionId === n[r];
                                    })[0], J.deepAccess(i, 'mediaTypes') && (1 < Object.keys(i.mediaTypes).length && s.mfu++, J.deepAccess(i, 'mediaTypes.native') && s.nu++, J.deepAccess(i, 'mediaTypes.banner') && s.bu++, 'outstream' === J.deepAccess(i, 'mediaTypes.video.context') && (s.ou++, e = 'object' === M(J.deepAccess(i, 'renderer') || J.deepAccess(i, 'mediaTypes.video.renderer')), s.ren = s.ren && e ? J.deepAccess(s, 'ren') : e), 'instream' === J.deepAccess(i, 'mediaTypes.video.context') && s.iu++, s.allu++);
                                }(e);
                            return s;
                        }(e);
                    for (var l in u)
                        c.ext.ixdiag[l] = u[l];
                    e[0].schain && (c.source = { ext: { schain: e[0].schain } }), 0 < o.length && (c.user = {}, c.user.eids = o), document.referrer && '' !== document.referrer && (c.site.ref = document.referrer), r && (r.gdprConsent && ((m = r.gdprConsent).hasOwnProperty('gdprApplies') && (c.regs = { ext: { gdpr: m.gdprApplies ? 1 : 0 } }), m.hasOwnProperty('consentString') && (c.user = c.user || {}, c.user.ext = { consent: m.consentString || '' }, m.hasOwnProperty('addtlConsent') && m.addtlConsent && (c.user.ext.consented_providers_settings = { consented_providers: m.addtlConsent }))), r.uspConsent && J.deepSetValue(c, 'regs.ext.us_privacy', r.uspConsent), r.refererInfo && (c.site.page = r.refererInfo.referer));
                    var f = {}, y = r && r.bidderCode || 'ix', b = D.b.getConfig(y);
                    if (b) {
                        if ('object' === M(b.firstPartyData)) {
                            var g = b.firstPartyData, h = '?';
                            for (var v in g)
                                g.hasOwnProperty(v) && (h += ''.concat(encodeURIComponent(v), '=').concat(encodeURIComponent(g[v]), '&'));
                            h = h.slice(0, -1), c.site.page += h;
                        }
                        'number' == typeof b.timeout && (f.t = b.timeout), 'boolean' == typeof b.detectMissingSizes ? c.ext.ixdiag.dms = b.detectMissingSizes : c.ext.ixdiag.dms = !0;
                    }
                    f.s = e[0].params.siteId, f.v = i, f.ac = 'j', f.sd = 1, 8.1 === i && (f.nf = 1);
                    var x = [], I = {
                            method: 'GET',
                            url: n,
                            data: f
                        }, O = new Blob([''.concat(I.url).concat(J.parseQueryStringParameters(R(R({}, I.data), {}, { r: JSON.stringify(c) })))]).size, w = O, P = 0, S = 0, A = 0;
                    c.ext.ixdiag.msd = 0, c.ext.ixdiag.msi = 0, c.imp = [];
                    for (var z, T, C, j, F, k = 0, E = Object.keys(t), B = []; k < E.length && x.length < 4;) {
                        t[E[k]].hasOwnProperty('missingCount') && (A = t[E[k]].missingCount), function (e, r) {
                            var t = new Blob([encodeURIComponent(JSON.stringify(e))]).size;
                            if (t < r)
                                return;
                            for (; r < t;)
                                e.hasOwnProperty('missingImps') && 0 < e.missingImps.length ? e.missingImps.pop() : e.hasOwnProperty('ixImps') && 0 < e.ixImps.length && e.ixImps.pop(), t = new Blob([encodeURIComponent(JSON.stringify(e))]).size;
                        }(t[E[k]], 8000 - O), t[E[k]].hasOwnProperty('missingImps') && (S = t[E[k]].missingImps.length), (w += new Blob([encodeURIComponent(JSON.stringify(t[E[k]]))]).size) < 8000 ? ((z = c.imp).push.apply(z, N(t[E[k]].ixImps)), c.ext.ixdiag.msd += A, c.ext.ixdiag.msi += S, t[E[k]].hasOwnProperty('missingImps') && B.push.apply(B, N(t[E[k]].missingImps)), k++) : (C = J.deepClone(f), (T = c.imp).push.apply(T, N(B)), c.ext.ixdiag.sn = P, C.sn = P, P++, C.r = JSON.stringify(c), x.push({
                            method: 'GET',
                            url: n,
                            data: C
                        }), B = [], w = O, c.imp = [], S = A = 0, c.ext.ixdiag.msd = 0, c.ext.ixdiag.msi = 0);
                    }
                    return O < w && w < 8000 && x.length < 4 && (F = J.deepClone(f), (j = c.imp).push.apply(j, N(B)), 0 < x.length && (c.ext.ixdiag.sn = P, F.sn = P), F.r = JSON.stringify(c), x.push({
                        method: 'GET',
                        url: n,
                        data: F
                    })), x;
                }
                function E(e, r) {
                    for (var t = 0; t < e.length; t++)
                        if (r[0] == e[t][0] && r[1] == e[t][1])
                            return e.splice(t, 1), 1;
                }
                var c = {
                    code: 'ix',
                    gvlid: 10,
                    aliases: [{
                            code: U,
                            gvlid: 10,
                            skipPbsAliasing: !1
                        }],
                    supportedMediaTypes: y,
                    isBidRequestValid: function (e) {
                        var r, t, i = J.deepAccess(e, 'params.video'), n = J.deepAccess(e, 'params.size'), s = J.deepAccess(e, 'mediaTypes.banner.sizes'), o = J.deepAccess(e, 'mediaTypes.video'), a = J.deepAccess(e, 'mediaTypes.video.playerSize'), d = e.params.hasOwnProperty('bidFloor'), p = e.params.hasOwnProperty('bidFloorCur');
                        if (!I(e.params.size))
                            return J.logError('ix bidder params: bid size has invalid format.'), !1;
                        if (e.hasOwnProperty('mediaType') && !J.contains(y, e.mediaType))
                            return !1;
                        if (e.hasOwnProperty('mediaTypes') && !s && !a)
                            return !1;
                        if (!F(e.sizes, n) && !(a && F(a, n) || s && F(s, n)))
                            return J.logError('ix bidder params: bid size is not included in ad unit sizes or player size.'), !1;
                        if (o && i) {
                            for (var c = !0, m = 0, u = [
                                        'mimes',
                                        'minduration',
                                        'maxduration',
                                        'protocols'
                                    ]; m < u.length; m++) {
                                var l = u[m];
                                if (!o.hasOwnProperty(l) && !i.hasOwnProperty(l)) {
                                    if ('protocols' === l && (o.hasOwnProperty('protocol') || i.hasOwnProperty('protocol')))
                                        continue;
                                    J.logError('ix bidder params: ' + l + ' is not included in either the adunit or params level'), c = !1;
                                }
                            }
                            if (!c)
                                return !1;
                        }
                        return 'string' != typeof e.params.siteId && 'number' != typeof e.params.siteId ? (J.logError('ix bidder params: siteId must be string or number value.'), !1) : !!(!d && !p || d && p && (r = e.params.bidFloor, t = e.params.bidFloorCur, Boolean('number' == typeof r && 'string' == typeof t && t.match(/^[A-Z]{3}$/)))) || (J.logError('ix bidder params: bidFloor / bidFloorCur parameter has invalid format.'), !1);
                    },
                    buildRequests: function (e, z) {
                        var r = function (e, r) {
                            for (var t = [], i = 0; i < e.length; i += r)
                                t.push(e.slice(i, i + r));
                            return t;
                        }(e, 15);
                        return Array.prototype.concat.apply([], r.map(function (e) {
                            for (var r, t, i, n, s, o, a, d, p, c, m, u, l, f, y = [], b = {}, g = {}, h = null, v = {}, x = R(R({}, { detectMissingSizes: !0 }), D.b.getConfig('ix')), I = 0; I < e.length; I++) {
                                (h = e[I]).mediaType !== T.d && !J.deepAccess(h, 'mediaTypes.video') || h.mediaType !== T.d && !F(h.mediaTypes.video.playerSize, h.params.size) || (g.hasOwnProperty(h.transactionId) || (g[h.transactionId] = {}), g[h.transactionId].hasOwnProperty('ixImps') || (g[h.transactionId].ixImps = []), g[h.transactionId].ixImps.push(function (e) {
                                    var r = C(e), t = J.deepAccess(e, 'mediaTypes.video'), i = J.deepAccess(e, 'mediaTypes.video.context'), n = [
                                            'mimes',
                                            'minduration',
                                            'maxduration',
                                            'protocols',
                                            'protocol',
                                            'startdelay',
                                            'placement',
                                            'linearity',
                                            'skip',
                                            'skipmin',
                                            'skipafter',
                                            'sequence',
                                            'battr',
                                            'maxextended',
                                            'minbitrate',
                                            'maxbitrate',
                                            'boxingallowed',
                                            'playbackmethod',
                                            'playbackend',
                                            'delivery',
                                            'pos',
                                            'companionad',
                                            'api',
                                            'companiontype',
                                            'ext'
                                        ];
                                    for (var s in (r.video = J.deepClone(e.params.video), r.video.w = e.params.size[0], r.video.h = e.params.size[1], i && ('instream' === i ? r.video.placement = 1 : 'outstream' === i ? r.video.placement = 4 : J.logWarn('ix bidder params: video context \''.concat(i, '\' is not supported'))), t))
                                        -1 === n.indexOf(s) || r.video.hasOwnProperty(s) || (r.video[s] = t[s]);
                                    return j(e, r, T.d), r;
                                }(h))), (h.mediaType === T.b || J.deepAccess(h, 'mediaTypes.banner') && F(J.deepAccess(h, 'mediaTypes.banner.sizes'), h.params.size) || !h.mediaType && !h.mediaTypes) && (c = void 0, (c = C(p = h)).banner = {}, c.banner.w = p.params.size[0], c.banner.h = p.params.size[1], c.banner.topframe = J.inIframe() ? 0 : 1, j(p, c, T.b), r = c, b.hasOwnProperty(h.transactionId) || (b[h.transactionId] = {}), b[h.transactionId].hasOwnProperty('ixImps') || (b[h.transactionId].ixImps = []), b[h.transactionId].ixImps.push(r), x.hasOwnProperty('detectMissingSizes') && x.detectMissingSizes && (i = v, n = r, d = a = o = s = void 0, d = (t = h).transactionId, i.hasOwnProperty(d) ? (s = [], i[d].hasOwnProperty('missingSizes') && (s = i[d].missingSizes), E(s, t.params.size), i[d].missingSizes = s) : J.deepAccess(t, 'mediaTypes.banner.sizes') && (E(o = J.deepClone(t.mediaTypes.banner.sizes), t.params.size), a = {
                                    missingSizes: o,
                                    impression: n
                                }, i[d] = a)));
                            }
                            for (var O in v)
                                if (v.hasOwnProperty(O)) {
                                    var w = v[O].missingSizes;
                                    b.hasOwnProperty(O) || (b[O] = {}), b[O].hasOwnProperty('missingImps') || (b[O].missingImps = [], b[O].missingCount = 0);
                                    for (var P = v[O].impression, S = 0; S < w.length; S++) {
                                        var A = (m = h, u = P, l = w[S], f = void 0, (f = J.deepClone(u)).ext.sid = ''.concat(l[0], 'x').concat(l[1]), f.banner.w = l[0], f.banner.h = l[1], j(m, f, T.b), f);
                                        b[O].missingImps.push(A), b[O].missingCount++;
                                    }
                                }
                            return 0 < Object.keys(b).length && y.push.apply(y, N(k(e, z, b, 7.2))), 0 < Object.keys(g).length && y.push.apply(y, N(k(e, z, g, 8.1))), y;
                        }));
                    },
                    interpretResponse: function (e, r) {
                        var t = [];
                        if (!e.hasOwnProperty('body') || !e.body.hasOwnProperty('seatbid'))
                            return t;
                        for (var i, n, s, o, a = e.body, d = a.seatbid, p = 0; p < d.length; p++)
                            if (d[p].hasOwnProperty('bid'))
                                for (var c = d[p].bid, m = JSON.parse(r.data.r), u = 0; u < c.length; u++) {
                                    var l = function (r, e) {
                                        if (r)
                                            return f()(e, function (e) {
                                                return e.id === r;
                                            });
                                    }(c[u].impid, m.imp);
                                    i = c[u], n = a.cur, s = l, o = void 0, o = {}, x.hasOwnProperty(n) ? o.cpm = i.price / x[n] : o.cpm = i.price / b, o.requestId = i.impid, o.dealId = J.deepAccess(i, 'ext.dealid'), o.netRevenue = v, o.currency = n, o.creativeId = i.hasOwnProperty('crid') ? i.crid : '-', J.deepAccess(i, 'ext.vasturl') ? (o.vastUrl = i.ext.vasturl, o.width = s.video.w, o.height = s.video.h, o.mediaType = T.d, o.ttl = h) : (o.ad = i.adm, o.width = i.w, o.height = i.h, o.mediaType = T.b, o.ttl = g), o.meta = {}, o.meta.networkId = J.deepAccess(i, 'ext.dspid'), o.meta.brandId = J.deepAccess(i, 'ext.advbrandid'), o.meta.brandName = J.deepAccess(i, 'ext.advbrand'), i.adomain && 0 < i.adomain.length && (o.meta.advertiserDomains = i.adomain), t.push(o);
                                }
                        return t;
                    },
                    transformBidParams: function (e) {
                        return J.convertTypes({ siteID: 'number' }, e);
                    },
                    getUserSyncs: function (e) {
                        return e.iframeEnabled ? [{
                                type: 'iframe',
                                url: 'https://js-sec.indexww.com/um/ixmatch.html'
                            }] : [];
                    }
                };
                Object(o.registerBidder)(c);
            }
        }, [541]);
        pbjsChunk([235], {
            557: function (e, t, r) {
                e.exports = r(558);
            },
            558: function (e, t, r) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), r.d(t, 'spec', function () {
                    return p;
                });
                var s = r(0), d = r(3), n = r(1), a = r(7);
                function g() {
                    return (g = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var o, i, c, u = 'kargo', l = Object(a.b)(972, u), p = {
                        gvlid: 972,
                        code: u,
                        isBidRequestValid: function (e) {
                            return !(!e || !e.params) && !!e.params.placementId;
                        },
                        buildRequests: function (e, t) {
                            var r, n = d.b.getConfig('currency'), a = n && n.adServerCurrency || 'USD', o = {}, i = {};
                            s._each(e, function (e) {
                                o[e.bidId] = e.params.placementId, i[e.bidId] = e.sizes;
                            }), 0 < e.length && e[0].userId && e[0].userId.tdid && (r = e[0].userId.tdid);
                            var c = g({}, {
                                    sessionId: p._getSessionId(),
                                    requestCount: p._getRequestCount(),
                                    timeout: t.timeout,
                                    currency: a,
                                    cpmGranularity: 1,
                                    timestamp: new Date().getTime(),
                                    cpmRange: {
                                        floor: 0,
                                        ceil: 20
                                    },
                                    bidIDs: o,
                                    bidSizes: i,
                                    prebidRawBidRequests: e
                                }, p._getAllMetadata(r, t.uspConsent, t.gdprConsent)), u = encodeURIComponent(JSON.stringify(c));
                            return g({}, t, {
                                method: 'GET',
                                url: ''.concat('https://krk.kargo.com', '/api/v2/bid'),
                                data: 'json='.concat(u),
                                currency: a
                            });
                        },
                        interpretResponse: function (e, t) {
                            var r = e.body, n = [];
                            for (var a in r) {
                                var o = r[a], i = void 0;
                                o.metadata && o.metadata.landingPageDomain && (i = {
                                    clickUrl: o.metadata.landingPageDomain,
                                    advertiserDomains: [o.metadata.landingPageDomain]
                                }), n.push({
                                    requestId: a,
                                    cpm: Number(o.cpm),
                                    width: o.width,
                                    height: o.height,
                                    ad: o.adm,
                                    ttl: 300,
                                    creativeId: o.id,
                                    dealId: o.targetingCustom,
                                    netRevenue: !0,
                                    currency: t.currency,
                                    meta: i
                                });
                            }
                            return n;
                        },
                        getUserSyncs: function (e, t, r, n) {
                            var a = [], o = p._generateRandomUuid(), i = p._getClientId(), c = r && r.gdprApplies ? 1 : 0, u = r && r.consentString ? r.consentString : '';
                            if ('string' == typeof n && 4 == n.length && 1 == n[0] && 'Y' == n[2])
                                return a;
                            if (e.iframeEnabled && o && i)
                                for (var s = 0; s < 5; s++)
                                    a.push({
                                        type: 'iframe',
                                        url: 'https://crb.kargo.com/api/v1/initsyncrnd/{UUID}?seed={SEED}&idx={INDEX}&gdpr={GDPR}&gdpr_consent={GDPR_CONSENT}&us_privacy={US_PRIVACY}'.replace('{UUID}', i).replace('{SEED}', o).replace('{INDEX}', s).replace('{GDPR}', c).replace('{GDPR_CONSENT}', u).replace('{US_PRIVACY}', n || '')
                                    });
                            return a;
                        },
                        _readCookie: function (e) {
                            if (!l.cookiesAreEnabled())
                                return null;
                            for (var t = ''.concat(e, '='), r = document.cookie.split(';'), n = 0; n < r.length; n++) {
                                for (var a = r[n]; ' ' === a.charAt(0);)
                                    a = a.substring(1, a.length);
                                if (0 === a.indexOf(t))
                                    return a.substring(t.length, a.length);
                            }
                            return null;
                        },
                        _getCrbFromCookie: function () {
                            try {
                                var e = JSON.parse(decodeURIComponent(p._readCookie('krg_crb')));
                                if (e && e.v) {
                                    var t = JSON.parse(atob(e.v));
                                    if (t)
                                        return t;
                                }
                                return {};
                            } catch (e) {
                                return {};
                            }
                        },
                        _getCrbFromLocalStorage: function () {
                            try {
                                return JSON.parse(atob(p._getLocalStorageSafely('krg_crb')));
                            } catch (e) {
                                return {};
                            }
                        },
                        _getCrb: function () {
                            var e = p._getCrbFromLocalStorage();
                            return Object.keys(e).length ? e : p._getCrbFromCookie();
                        },
                        _getKruxUserId: function () {
                            return p._getLocalStorageSafely('kxkar_user');
                        },
                        _getKruxSegments: function () {
                            return p._getLocalStorageSafely('kxkar_segs');
                        },
                        _getKrux: function () {
                            var e = p._getKruxSegments(), t = [];
                            return e && (t = e.split(',')), {
                                userID: p._getKruxUserId(),
                                segments: t
                            };
                        },
                        _getLocalStorageSafely: function (e) {
                            try {
                                return l.getDataFromLocalStorage(e);
                            } catch (e) {
                                return null;
                            }
                        },
                        _getUserIds: function (e, t, r) {
                            var n = p._getCrb(), a = {
                                    kargoID: n.userId,
                                    clientID: n.clientId,
                                    crbIDs: n.syncIds || {},
                                    optOut: n.optOut,
                                    usp: t
                                };
                            try {
                                r && (a.gdpr = {
                                    consent: r.consentString || '',
                                    applies: !!r.gdprApplies
                                });
                            } catch (e) {
                            }
                            return e && (a.tdID = e), a;
                        },
                        _getClientId: function () {
                            return p._getCrb().clientId;
                        },
                        _getAllMetadata: function (e, t, r) {
                            return {
                                userIDs: p._getUserIds(e, t, r),
                                krux: p._getKrux(),
                                pageURL: window.location.href,
                                rawCRB: p._readCookie('krg_crb'),
                                rawCRBLocalStorage: p._getLocalStorageSafely('krg_crb')
                            };
                        },
                        _getSessionId: function () {
                            return o = o || p._generateRandomUuid();
                        },
                        _getRequestCount: function () {
                            return i === window.location.pathname ? ++c : (i = window.location.pathname, c = 0);
                        },
                        _generateRandomUuid: function () {
                            try {
                                var e = new Uint8Array(16);
                                crypto.getRandomValues(e), e[6] = -177 & e[6] | 64, e[8] = -65 & e[8] | 128;
                                var t = Array.prototype.map.call(new Uint8Array(e), function (e) {
                                    return ('00' + e.toString(16)).slice(-2);
                                }).join('');
                                return t.slice(0, 8) + '-' + t.slice(8, 12) + '-' + t.slice(12, 16) + '-' + t.slice(16, 20) + '-' + t.slice(20);
                            } catch (e) {
                                return '';
                            }
                        }
                    };
                Object(n.registerBidder)(p);
            }
        }, [557]);
        pbjsChunk([189], {
            663: function (e, n, t) {
                e.exports = t(664);
            },
            664: function (e, n, t) {
                'use strict';
                Object.defineProperty(n, '__esModule', { value: !0 }), t.d(n, 'spec', function () {
                    return d;
                });
                var I = t(0), q = t(3), i = t(1), f = t(2), o = t(7), m = Object(o.b)();
                function v(e, n) {
                    I.logInfo('-NoBid- ' + e, n);
                }
                function c(T, C) {
                    if (void 0 !== window.nobid.refreshLimit && window.nobid.refreshLimit < window.nobid.refreshCount)
                        return !1;
                    var e = m.getCookie('_ublock');
                    if (e)
                        return v('Request blocked for user. hours: ', e), !1;
                    for (var n, t, i, o = [], r = 0, d = [], s = 0; s < T.length; s++) {
                        var a = T[s], u = a.adUnitCode;
                        o.push(u);
                        var c = a.sizes, r = void 0 !== a.params.siteId && a.params.siteId ? a.params.siteId : r, p = a.params.placementId, l = 'banner', g = I.deepAccess(a, 'mediaTypes.video'), b = I.deepAccess(a, 'mediaTypes.video.context');
                        a.mediaType !== f.d && (!g || 'instream' !== b && 'outstream' !== b) || (l = 'video'), r && (n = {
                            div: u,
                            sizes: c,
                            siteId: r,
                            placementId: p,
                            ad_type: l,
                            params: a.params
                        }, t = d, i = void 0, i = function (e, n) {
                            for (var t = 0; t < n.length; t++)
                                if (n[t].d === e)
                                    return n[t];
                            return !1;
                        }(n.div, t) || {}, n.account && (i.s = n.account), n.sizes && (i.z = n.sizes), n.div && (i.d = n.div), n.targeting ? i.g = n.targeting : i.g = {}, n.div && function (e, n, t) {
                            for (var i = e.length - 1; 0 <= i; i--) {
                                var o = e[i];
                                o[n] && o[n] === t && e.splice(i, 1);
                            }
                        }(t, 'd', n.div), n.sizeMapping && (i.sm = n.sizeMapping), n.siteId && (i.sid = n.siteId), n.placementId && (i.pid = n.placementId), n.ad_type && (i.at = n.ad_type), n.params && (i.params = n.params), t.push(i));
                    }
                    return !!r && function (e, n, t) {
                        var i, o, r, d, s, a, u, c, p, l, g, b, f, m = {};
                        function v(e) {
                            return e <= 9 ? '0' + e : '' + e;
                        }
                        m.sid = n, m.l = (o = '', o = (i = C) && i.refererInfo && i.refererInfo.referer ? i.refererInfo.referer : window.context && window.context.location && window.context.location.href ? window.context.location.href : document.location.href, encodeURIComponent(o.replace(/\%/g, ''))), m.tt = encodeURIComponent(document.title), m.tt = m.tt.replace(/'|;|quot;|39;|&amp;|&|#|\r\n|\r|\n|\t|\f|\%0A|\"|\%22|\%5C|\%23|\%26|\%26|\%09/gm, ''), m.a = function (e, n) {
                            var t = [];
                            if (e && e.length) {
                                if (n) {
                                    var i = [];
                                    e instanceof Array ? i = e : i.push(e);
                                    for (var o = 0, r = n.length; o < r; o++) {
                                        var d = n[o];
                                        d && d.d && -1 < i.indexOf(d.d) && t.push(d);
                                    }
                                }
                            } else
                                t = n;
                            return t;
                        }(e, t || []), m.t = (r = new Date(), d = r.getDate(), s = r.getFullYear(), a = r.getMonth() + 1, u = r.getHours(), c = r.getMinutes(), p = r.getSeconds(), s + '-' + v(a) + '-' + v(d) + ' ' + v(u) + ':' + v(c) + ':' + v(p)), m.tz = Math.round(new Date().getTimezoneOffset()), m.r = function () {
                            try {
                                var e = Math.max(document.documentElement.clientWidth, window.innerWidth || 0), n = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
                                return ''.concat(e, 'x').concat(n);
                            } catch (e) {
                                I.logWarn('Could not parse screen dimensions, error details:', e);
                            }
                        }(), m.lang = navigator.languages && navigator.languages[0] || navigator.language || navigator.userLanguage, m.ref = document.referrer, m.gdpr = (g = {}, (l = C) && l.gdprConsent && (g = {
                            consentString: l.gdprConsent.consentString,
                            consentRequired: 'boolean' == typeof l.gdprConsent.gdprApplies && l.gdprConsent.gdprApplies
                        }), g), m.usp = (f = '', (b = C) && b.uspConsent && (f = b.uspConsent), f);
                        var w, h = (w = T) && 0 < w.length ? w[0].schain : null;
                        h && (m.schain = h);
                        var y = !0 === q.b.getConfig('coppa') ? { coppa: !0 } : T && 0 < T.length ? T[0].coppa : null;
                        y && (m.coppa = y);
                        var R = function (e) {
                            if (I.isArray(e) && 0 < e.length) {
                                var t = [];
                                return e.forEach(function (e) {
                                    var n = [];
                                    e.uids && e.uids.forEach(function (e) {
                                        n.push({ id: e.id + '' });
                                    }), e.source && 0 < n.length && t.push({
                                        source: e.source,
                                        uids: n
                                    });
                                }), t;
                            }
                        }(I.deepAccess(T, '0.userIdAsEids'));
                        return R && 0 < R.length && (m.eids = R), m;
                    }(o, r, d);
                }
                function r(e, n) {
                    var t, i;
                    (t = e) && void 0 !== t.rlimit && (window.nobid.refreshLimit = t.rlimit), (i = e) && void 0 !== i.ublock && function (e, n, t) {
                        var i = new Date();
                        i.setTime(i.getTime() + 60 * t * 60 * 1000);
                        var o = 'expires=' + i.toUTCString();
                        m.setCookie(e, n, o);
                    }('_ublock', '1', i.ublock);
                    for (var o = [], r = 0; e.bids && r < e.bids.length; r++) {
                        var d, s, a = e.bids[r];
                        !(a.bdrid < 100) && n && n.bidderRequest && n.bidderRequest.bids && ((d = function (e, n) {
                            for (var t = 0; t < n.length; t++)
                                if (n[t].adUnitCode == e)
                                    return n[t];
                            return !1;
                        }((window.nobid.bidResponses['' + a.id] = a).divid, n.bidderRequest.bids)) && (s = {
                            requestId: d.bidId,
                            cpm: +(a.price ? a.price : a.bucket ? a.bucket : 0),
                            width: a.size.w,
                            height: a.size.h,
                            creativeId: a.creativeid || '',
                            dealId: a.dealid || '',
                            currency: 'USD',
                            netRevenue: !0,
                            ttl: 300,
                            ad: a.adm,
                            mediaType: a.atype || f.b
                        }, a.vastUrl && (s.vastUrl = a.vastUrl), a.vastXml && (s.vastXml = a.vastXml), a.videoCacheKey && (s.videoCacheKey = a.videoCacheKey), o.push(s)));
                    }
                    return o;
                }
                window.nobidVersion = '1.2.9', window.nobid = window.nobid || {}, window.nobid.bidResponses = window.nobid.bidResponses || {}, window.nobid.timeoutTotal = 0, window.nobid.bidWonTotal = 0, window.nobid.refreshCount = 0, window.nobid.renderTag = function (e, n, t) {
                    v('nobid.renderTag()', n);
                    var i = window.nobid.bidResponses['' + n];
                    if (i && i.adm2) {
                        v('nobid.renderTag() found tag', n);
                        var o = i.adm2;
                        return e.write(o), void e.close();
                    }
                    v('nobid.renderTag() tag NOT FOUND *ERROR*', n);
                }, window.addEventListener('message', function (e) {
                    var n, t, i, o = '' + e[e.message ? 'message' : 'data'];
                    'nbTagRenderer.requestAdMarkup|' === o.substring(0, 'nbTagRenderer.requestAdMarkup|'.length) && (v('Prebid received nbTagRenderer.requestAdMarkup event'), n = o.substring(o.indexOf('|') + 1), window.nobid && window.nobid.bidResponses && ((t = window.nobid.bidResponses['' + n]) && t.adm2 && ((i = t.adm2) && e.source.postMessage('nbTagRenderer.renderAdInSafeFrame|' + i, '*'))));
                }, !1);
                var d = {
                    code: 'nobid',
                    supportedMediaTypes: [
                        f.b,
                        f.d
                    ],
                    isBidRequestValid: function (e) {
                        return v('isBidRequestValid', e), !!e.params.siteId;
                    },
                    buildRequests: function (e, n) {
                        if (v('validBidRequests', e), !e || e.length <= 0)
                            v('Empty validBidRequests');
                        else {
                            var t = c(e, n);
                            if (t) {
                                window.nobid.refreshCount++;
                                var i, o, r, d, s = JSON.stringify(t).replace(/'|&|#/g, ''), a = (i = 'https://ads.servenobid.com/', (o = 'function' == typeof I.getParameterByName && I.getParameterByName('nobid-env')) ? 'beta' == o ? i = 'https://beta.servenobid.com/' : 'dev' == o ? i = '//localhost:8282/' : 'qa' == o && (i = 'https://qa-ads.nobid.com/') : i = 'https://ads.servenobid.com/', i + 'adreq?cb=' + Math.floor(11000 * Math.random())), u = {};
                                return d = !0, (r = n) && r.gdprConsent && r.gdprConsent.gdprApplies && 2 === r.gdprConsent.apiVersion && (d = !(!0 !== I.deepAccess(r.gdprConsent, 'vendorData.purpose.consents.1'))), d || (u = { withCredentials: !1 }), {
                                    method: 'POST',
                                    url: a,
                                    data: s,
                                    bidderRequest: n,
                                    options: u
                                };
                            }
                        }
                    },
                    interpretResponse: function (e, n) {
                        return v('interpretResponse -> serverResponse', e), v('interpretResponse -> bidRequest', n), r(e.body, n);
                    },
                    getUserSyncs: function (e, n, t, i) {
                        if (e.iframeEnabled) {
                            var o = '';
                            return t && 'string' == typeof t.consentString && ('boolean' == typeof t.gdprApplies ? o += '?gdpr='.concat(Number(t.gdprApplies), '&gdpr_consent=').concat(t.consentString) : o += '?gdpr_consent='.concat(t.consentString)), i && (0 < o.length ? o += '&' : o += '?', o += 'usp_consent=' + i), [{
                                    type: 'iframe',
                                    url: 'https://public.servenobid.com/sync.html' + o
                                }];
                        }
                        if (e.pixelEnabled && 0 < n.length) {
                            var r = [];
                            return n[0].body.syncs && 0 < n[0].body.syncs.length && n[0].body.syncs.forEach(function (e) {
                                r.push({
                                    type: 'image',
                                    url: e
                                });
                            }), r;
                        }
                        return I.logWarn('-NoBid- Please enable iframe based user sync.', e), [];
                    },
                    onTimeout: function (e) {
                        return window.nobid.timeoutTotal++, v('Timeout total: ' + window.nobid.timeoutTotal, e), window.nobid.timeoutTotal;
                    },
                    onBidWon: function (e) {
                        return window.nobid.bidWonTotal++, v('BidWon total: ' + window.nobid.bidWonTotal, e), window.nobid.bidWonTotal;
                    }
                };
                Object(i.registerBidder)(d);
            }
        }, [663]);
        pbjsChunk([187], {
            667: function (e, r, i) {
                e.exports = i(668);
            },
            668: function (e, r, i) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), i.d(r, 'spec', function () {
                    return l;
                });
                var u = i(0), a = i(1);
                function c(e, r) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, r) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var i = [], a = !0, t = !1, o = void 0;
                        try {
                            for (var n, d = e[Symbol.iterator](); !(a = (n = d.next()).done) && (i.push(n.value), !r || i.length !== r); a = !0);
                        } catch (e) {
                            t = !0, o = e;
                        } finally {
                            try {
                                a || null == d.return || d.return();
                            } finally {
                                if (t)
                                    throw o;
                            }
                        }
                        return i;
                    }(e, r) || function (e, r) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return t(e, r);
                        var i = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === i && e.constructor && (i = e.constructor.name);
                        if ('Map' === i || 'Set' === i)
                            return Array.from(e);
                        if ('Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                            return t(e, r);
                    }(e, r) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function t(e, r) {
                    (null == r || r > e.length) && (r = e.length);
                    for (var i = 0, a = new Array(r); i < r; i++)
                        a[i] = e[i];
                    return a;
                }
                var l = {
                    code: 'oneVideo',
                    VERSION: '3.0.6',
                    ENDPOINT: 'https://ads.adaptv.advertising.com/rtb/openrtb?ext_id=',
                    E2ETESTENDPOINT: 'https://ads-wc.v.ssp.yahoo.com/rtb/openrtb?ext_id=',
                    SYNC_ENDPOINT1: 'https://pixel.advertising.com/ups/57304/sync?gdpr=&gdpr_consent=&_origin=0&redir=true',
                    SYNC_ENDPOINT2: 'https://match.adsrvr.org/track/cmf/generic?ttd_pid=adaptv&ttd_tpi=1',
                    supportedMediaTypes: [
                        'video',
                        'banner'
                    ],
                    isBidRequestValid: function (e) {
                        if ('oneVideo' !== e.bidder || void 0 === e.params)
                            return !1;
                        if (void 0 === e.params.video || void 0 === e.params.video.playerWidth || void 0 === e.params.video.playerHeight || void 0 === e.params.video.mimes)
                            return !1;
                        if (e.mediaTypes.video) {
                            if ('outstream' === e.mediaTypes.video.context && 1 === e.params.video.display)
                                return !1;
                        } else if (e.mediaTypes.banner && !e.params.video.display)
                            return !1;
                        return void 0 !== e.params.pubId;
                    },
                    buildRequests: function (e, a) {
                        var t = a ? a.gdprConsent : null;
                        return e.map(function (e) {
                            var r = l.ENDPOINT, i = e.params.pubId;
                            return e.params.video.e2etest && (r = l.E2ETESTENDPOINT, i = 'HBExchange'), {
                                method: 'POST',
                                url: r + i,
                                data: function (e, r, i) {
                                    var a = i.refererInfo.referer, t = e.params.site && e.params.site.page ? e.params.site.page : a.href, o = e.params.site && e.params.site.referrer ? e.params.site.referrer : i.refererInfo.referer, n = {
                                            id: u.generateUUID(),
                                            at: 2,
                                            cur: e.cur || 'USD',
                                            imp: [{
                                                    id: '1',
                                                    secure: 'https:' === document.location.protocol,
                                                    bidfloor: e.params.bidfloor,
                                                    ext: {
                                                        hb: 1,
                                                        prebidver: '4.34.0',
                                                        adapterver: l.VERSION
                                                    }
                                                }],
                                            site: {
                                                page: t,
                                                ref: o
                                            },
                                            device: { ua: navigator.userAgent },
                                            tmax: 200
                                        };
                                    null == e.params.video.display || 1 != e.params.video.display ? (n.imp[0].video = {
                                        mimes: e.params.video.mimes,
                                        w: e.params.video.playerWidth,
                                        h: e.params.video.playerHeight,
                                        pos: e.params.video.position
                                    }, e.params.video.maxbitrate && (n.imp[0].video.maxbitrate = e.params.video.maxbitrate), e.params.video.maxduration && (n.imp[0].video.maxduration = e.params.video.maxduration), e.params.video.minduration && (n.imp[0].video.minduration = e.params.video.minduration), e.params.video.api && (n.imp[0].video.api = e.params.video.api), e.params.video.delivery && (n.imp[0].video.delivery = e.params.video.delivery), e.params.video.position && (n.imp[0].video.pos = e.params.video.position), e.params.video.playbackmethod && (n.imp[0].video.playbackmethod = e.params.video.playbackmethod), e.params.video.placement && (n.imp[0].video.placement = e.params.video.placement), e.params.video.rewarded && (n.imp[0].ext.rewarded = e.params.video.rewarded), n.imp[0].video.linearity = 1, n.imp[0].video.protocols = e.params.video.protocols || [
                                        2,
                                        5
                                    ]) : 1 == e.params.video.display && (n.imp[0].banner = {
                                        mimes: e.params.video.mimes,
                                        w: e.params.video.playerWidth,
                                        h: e.params.video.playerHeight,
                                        pos: e.params.video.position
                                    }, e.params.video.placement && (n.imp[0].banner.placement = e.params.video.placement), e.params.video.maxduration && (n.imp[0].banner.ext = n.imp[0].banner.ext || {}, n.imp[0].banner.ext.maxduration = e.params.video.maxduration), e.params.video.minduration && (n.imp[0].banner.ext = n.imp[0].banner.ext || {}, n.imp[0].banner.ext.minduration = e.params.video.minduration));
                                    e.params.video.inventoryid && (n.imp[0].ext.inventoryid = e.params.video.inventoryid);
                                    e.params.video.sid ? (n.source = {
                                        ext: {
                                            schain: {
                                                complete: 1,
                                                nodes: [{
                                                        sid: e.params.video.sid,
                                                        rid: n.id
                                                    }]
                                            }
                                        }
                                    }, 1 == e.params.video.hp && (n.source.ext.schain.nodes[0].hp = e.params.video.hp)) : e.schain && (n.source = { ext: { schain: e.schain } }, n.source.ext.schain.nodes[0].rid = n.id);
                                    e.params.site && e.params.site.id && (n.site.id = e.params.site.id);
                                    (f(r) || i && i.uspConsent) && (n.regs = { ext: {} }, f(r) && (n.regs.ext.gdpr = 1), r && r.consentString && (n.user = { ext: { consent: r.consentString } }), i && i.uspConsent && (n.regs.ext.us_privacy = i.uspConsent));
                                    e.params.video.e2etest && (n.imp[0].bidfloor = null, n.imp[0].video.w = 300, n.imp[0].video.h = 250, n.imp[0].video.mimes = [
                                        'video/mp4',
                                        'application/javascript'
                                    ], n.imp[0].video.api = [2], n.site.page = 'https://verizonmedia.com', n.site.ref = 'https://verizonmedia.com', n.tmax = 1000);
                                    if (e.params.video.custom && u.isPlainObject(e.params.video.custom))
                                        for (var d in (n.imp[0].ext.custom = {}, e.params.video.custom))
                                            (u.isStr(e.params.video.custom[d]) || u.isNumber(e.params.video.custom[d])) && (n.imp[0].ext.custom[d] = e.params.video.custom[d]);
                                    if (e.params.video.content && u.isPlainObject(e.params.video.content)) {
                                        n.imp[0].content = {};
                                        var s = [
                                                'id',
                                                'title',
                                                'series',
                                                'season',
                                                'genre',
                                                'contentrating',
                                                'language'
                                            ], p = [
                                                'episode',
                                                'prodq',
                                                'context',
                                                'livestream',
                                                'len'
                                            ], m = ['cat'], v = ['ext'];
                                        for (var c in e.params.video.content)
                                            -1 < s.indexOf(c) && u.isStr(e.params.video.content[c]) || -1 < p.indexOf(c) && u.isNumber(e.params.video.content[c]) || -1 < v.indexOf(c) && u.isPlainObject(e.params.video.content[c]) || -1 < m.indexOf(c) && u.isArray(e.params.video.content[c]) && e.params.video.content[c].every(function (e) {
                                                return u.isStr(e);
                                            }) ? n.imp[0].content[c] = e.params.video.content[c] : u.logMessage('oneVideo bid adapter validation error: ', c, ' is either not supported is OpenRTB V2.5 or value is undefined');
                                    }
                                    return n;
                                }(e, t, a),
                                bidRequest: e
                            };
                        });
                    },
                    interpretResponse: function (r, e) {
                        var i, a, t, o, n, d, s, p, m, v = e.bidRequest;
                        try {
                            i = (r = r.body).seatbid[0].bid[0];
                        } catch (e) {
                            r = null;
                        }
                        return r && i && (i.adm || i.nurl) && i.price ? (o = v.sizes, n = u.parseSizesInput(o), d = c(n.length ? n[0].split('x') : [], 2), s = d[0], p = d[1], a = {
                            width: parseInt(s, 10) || void 0,
                            height: parseInt(p, 10) || void 0
                        }, (t = {
                            requestId: v.bidId,
                            bidderCode: l.code,
                            cpm: i.price,
                            adId: i.adid,
                            creativeId: i.crid,
                            width: a.width,
                            height: a.height,
                            currency: r.cur,
                            ttl: 0 < v.params.video.ttl && v.params.video.ttl <= 3600 ? v.params.video.ttl : 300,
                            netRevenue: !0,
                            adUnitCode: v.adUnitCode
                        }).mediaType = v.mediaTypes.banner ? 'banner' : 'video', i.nurl ? t.vastUrl = i.nurl : i.adm && 1 === v.params.video.display ? t.ad = i.adm : i.adm && (t.vastXml = i.adm), v.mediaTypes.video && (t.renderer = 'outstream' === v.mediaTypes.video.context ? void ((m = v).renderer || (m.renderer = {}, m.renderer.url = 'https://cdn.vidible.tv/prod/hb-outstream-renderer/renderer.js', m.renderer.render = function (e) {
                            setTimeout(function () {
                                o2PlayerRender(e);
                            }, 700);
                        })) : void 0), t) : (u.logWarn('No valid bids from '.concat(l.code, ' bidder')), []);
                    },
                    getUserSyncs: function (e, r, i) {
                        var a = 2 < arguments.length && void 0 !== i ? i : {}, t = a.gdprApplies, o = a.consentString, n = void 0 === o ? '' : o;
                        if (e.pixelEnabled)
                            return [
                                {
                                    type: 'image',
                                    url: l.SYNC_ENDPOINT1
                                },
                                {
                                    type: 'image',
                                    url: 'https://sync-tm.everesttech.net/upi/pid/m7y5t93k?gdpr='.concat(t ? 1 : 0, '&gdpr_consent=').concat(n, '&redir=https%3A%2F%2Fpixel.advertising.com%2Fups%2F55986%2Fsync%3Fuid%3D%24%7BUSER_ID%7D%26_origin%3D0') + encodeURI('&gdpr='.concat(t ? 1 : 0, '&gdpr_consent=').concat(n))
                                },
                                {
                                    type: 'image',
                                    url: l.SYNC_ENDPOINT2
                                }
                            ];
                    }
                };
                function f(e) {
                    return e && e.gdprApplies;
                }
                Object(a.registerBidder)(l);
            }
        }, [667]);
        pbjsChunk([34], {
            20: function (e, t, r) {
                'use strict';
                t.b = function (e) {
                    var t = [];
                    for (var r in e) {
                        var n;
                        e.hasOwnProperty(r) && ('pubProvidedId' === r ? t = t.concat(e.pubProvidedId) : (n = function (e, t) {
                            var r = c[t];
                            if (r && e) {
                                var n = {};
                                n.source = r.source;
                                var i = s.isFn(r.getValue) ? r.getValue(e) : e;
                                if (s.isStr(i)) {
                                    var o, d, a = {
                                            id: i,
                                            atype: r.atype
                                        };
                                    return !s.isFn(r.getUidExt) || (o = r.getUidExt(e)) && (a.ext = o), n.uids = [a], !s.isFn(r.getEidExt) || (d = r.getEidExt(e)) && (n.ext = d), n;
                                }
                            }
                            return null;
                        }(e[r], r)) && t.push(n));
                    }
                    return t;
                }, t.a = function (e) {
                    var r = [];
                    return e.filter(function (e) {
                        return s.isPlainObject(e.idObj) && Object.keys(e.idObj).length;
                    }).forEach(function (t) {
                        Object.keys(t.idObj).forEach(function (e) {
                            s.deepAccess(t, 'config.bidders') && Array.isArray(t.config.bidders) && s.deepAccess(c, e + '.source') && r.push({
                                source: c[e].source,
                                bidders: t.config.bidders
                            });
                        });
                    }), r;
                };
                var s = r(0), c = {
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
                        sharedid: {
                            source: 'sharedid.org',
                            atype: 1,
                            getValue: function (e) {
                                return e.id;
                            },
                            getUidExt: function (e) {
                                return e && e.third ? { third: e.third } : void 0;
                            }
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
                        admixerId: {
                            source: 'admixer.net',
                            atype: 3
                        }
                    };
            },
            669: function (e, t, r) {
                e.exports = r(670);
            },
            670: function (e, t, r) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), t.hasTypeVideo = m, t.isValid = y, r.d(t, 'spec', function () {
                    return O;
                });
                var c = r(2), a = r(25), s = r(11), n = r(10), u = r.n(n), i = r(7), o = r(1), p = r(20);
                function d(t, e) {
                    var r, n = Object.keys(t);
                    return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(t), e && (r = r.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), n.push.apply(n, r)), n;
                }
                function l(i) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? d(Object(o), !0).forEach(function (e) {
                            var t, r, n;
                            t = i, n = o[r = e], r in t ? Object.defineProperty(t, r, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[r] = n;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : d(Object(o)).forEach(function (e) {
                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                        });
                    }
                    return i;
                }
                var f = 'https://onetag-sys.com/usync/', g = Object(i.b)(241);
                function m(e) {
                    return void 0 !== e.mediaTypes && void 0 !== e.mediaTypes.video;
                }
                function y(e, t) {
                    if (e === c.b)
                        return 0 < v(t).length;
                    if (e === c.d && m(t)) {
                        var r = t.mediaTypes.video.context;
                        if ('outstream' === r || 'instream' === r)
                            return 0 < b(t).length;
                    }
                    return !1;
                }
                function h(e) {
                    var t = e.params;
                    this.adUnitCode = e.adUnitCode, this.bidId = e.bidId, this.bidderRequestId = e.bidderRequestId, this.auctionId = e.auctionId, this.transactionId = e.transactionId, this.pubId = t.pubId, this.ext = t.ext, t.pubClick && (this.click = t.pubClick), t.dealId && (this.dealId = t.dealId);
                    var r = function (e) {
                        var t = document.getElementById(e);
                        try {
                            for (var r = t.getBoundingClientRect(), n = r.top, i = r.left, o = r.width, d = r.height, a = t.ownerDocument.defaultView, s = {
                                        top: n + a.pageYOffset,
                                        left: i + a.pageXOffset,
                                        width: o,
                                        height: d
                                    }, c = a.frameElement; null != c;) {
                                var u = c.getBoundingClientRect(), p = u.top, l = u.left;
                                s.top += p + a.pageYOffset, s.left += l + a.pageXOffset, a = a.parent, c = a.frameElement;
                            }
                            return s;
                        } catch (e) {
                            return null;
                        }
                    }(e.adUnitCode);
                    r && (this.coords = r);
                }
                function b(e) {
                    var t = e.mediaTypes.video.playerSize;
                    return void 0 !== t && Array.isArray(t) && 0 < t.length ? I(t) : [];
                }
                function v(e) {
                    return void 0 !== e.mediaTypes && void 0 !== e.mediaTypes.banner && void 0 !== e.mediaTypes.banner.sizes && Array.isArray(e.mediaTypes.banner.sizes) && 0 < e.mediaTypes.banner.sizes.length ? I(e.mediaTypes.banner.sizes) : !m(e) && e.sizes && Array.isArray(e.sizes) ? I(e.sizes) : [];
                }
                function I(e) {
                    for (var t = [], r = 0; r < e.length; r++) {
                        var n = e[r];
                        t.push({
                            width: n[0],
                            height: n[1]
                        });
                    }
                    return t;
                }
                var O = {
                    code: 'onetag',
                    gvlid: 241,
                    supportedMediaTypes: [
                        c.b,
                        c.d
                    ],
                    isBidRequestValid: function (e) {
                        return void 0 !== e && void 0 !== e.params && 'string' == typeof e.params.pubId && (y(c.b, e) || y(c.d, e));
                    },
                    buildRequests: function (e, t) {
                        var r, n, i, o, d, a, s = l({
                                bids: (d = (o = e).filter(m).map(function (e) {
                                    var t = {};
                                    return h.call(t, e), t.context = e.mediaTypes.video.context, t.mimes = e.mediaTypes.video.mimes, t.playerSize = b(e), t.protocols = e.mediaTypes.video.protocols, t.maxDuration = e.mediaTypes.video.maxduration, t.api = e.mediaTypes.video.api, t.type = c.d, t;
                                }), a = o.filter(function (e) {
                                    return y(c.b, e);
                                }).map(function (e) {
                                    var t = {};
                                    return h.call(t, e), t.sizes = v(e), t.type = c.b, t;
                                }), d.concat(a))
                            }, (r = function () {
                                var t = window, r = window.parent, n = 0;
                                try {
                                    for (; t !== t.parent;)
                                        (r = t.parent).location.href, t = t.parent;
                                } catch (e) {
                                    n = r === t.top ? 1 : 2;
                                }
                                return {
                                    topmostFrame: t,
                                    currentFrameNesting: n
                                };
                            }(), n = r.topmostFrame, i = r.currentFrameNesting, {
                                location: n.location.href,
                                referrer: '' !== n.document.referrer ? n.document.referrer : null,
                                masked: i,
                                wWidth: n.innerWidth,
                                wHeight: n.innerHeight,
                                oWidth: n.outerWidth,
                                oHeight: n.outerHeight,
                                sWidth: n.screen.width,
                                sHeight: n.screen.height,
                                aWidth: n.screen.availWidth,
                                aHeight: n.screen.availHeight,
                                sLeft: 'screenLeft' in n ? n.screenLeft : n.screenX,
                                sTop: 'screenTop' in n ? n.screenTop : n.screenY,
                                xOffset: n.pageXOffset,
                                yOffset: n.pageYOffset,
                                docHidden: function (e) {
                                    try {
                                        return void 0 !== e.document.hidden ? e.document.hidden : void 0 !== e.document.msHidden ? e.document.msHidden : void 0 !== e.document.webkitHidden ? e.document.webkitHidden : null;
                                    } catch (e) {
                                        return null;
                                    }
                                }(n),
                                docHeight: n.document.body ? n.document.body.scrollHeight : null,
                                hLength: history.length,
                                timing: function () {
                                    try {
                                        if (null != window.performance && null != window.performance.timing) {
                                            var e = {}, t = window.performance.timing;
                                            return e.pageLoadTime = t.loadEventEnd - t.navigationStart, e.connectTime = t.responseEnd - t.requestStart, e.renderTime = t.domComplete - t.domLoading, e;
                                        }
                                    } catch (e) {
                                        return null;
                                    }
                                    return null;
                                }(),
                                version: {
                                    prebid: '4.34.0',
                                    adapter: '1.1.0'
                                }
                            }));
                        t && t.gdprConsent && (s.gdprConsent = {
                            consentString: t.gdprConsent.consentString,
                            consentRequired: t.gdprConsent.gdprApplies
                        }), t && t.uspConsent && (s.usPrivacy = t.uspConsent), e && 0 !== e.length && e[0].userId && (s.userId = Object(p.b)(e[0].userId));
                        try {
                            g.hasLocalStorage() && (s.onetagSid = g.getDataFromLocalStorage('onetag_sid'));
                        } catch (e) {
                        }
                        return {
                            method: 'POST',
                            url: 'https://onetag-sys.com/prebid-request',
                            data: JSON.stringify(s)
                        };
                    },
                    interpretResponse: function (e, t) {
                        var r = e.body, o = [], d = JSON.parse(t.data);
                        return !r || r.nobid && !0 === r.nobid || r.bids && Array.isArray(r.bids) && 0 !== r.bids.length && r.bids.forEach(function (t) {
                            var e, r, n, i = {
                                    requestId: t.requestId,
                                    cpm: t.cpm,
                                    width: t.width,
                                    height: t.height,
                                    creativeId: t.creativeId,
                                    dealId: null == t.dealId ? t.dealId : '',
                                    currency: t.currency,
                                    netRevenue: t.netRevenue || !1,
                                    mediaType: t.mediaType,
                                    meta: { mediaType: t.mediaType },
                                    ttl: t.ttl || 300
                                };
                            t.mediaType === c.b ? i.ad = t.ad : t.mediaType === c.d && (r = (e = u()(d.bids, function (e) {
                                return e.bidId === t.requestId;
                            })).context, n = e.adUnitCode, r === a.a ? (i.vastUrl = t.vastUrl, i.videoCacheKey = t.videoCacheKey) : r === a.b && (i.vastXml = t.ad, i.vastUrl = t.vastUrl, t.rendererUrl && (i.renderer = function (d) {
                                var e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, t = s.a.install({
                                        id: d.requestId,
                                        url: d.rendererUrl,
                                        config: e,
                                        adUnitCode: d.adUnitCode,
                                        loaded: !1
                                    });
                                try {
                                    t.setRender(function (e) {
                                        var t = e.renderer, r = e.width, n = e.height, i = e.vastXml, o = e.adUnitCode;
                                        t.push(function () {
                                            window.onetag.Player.init(l(l({}, d), {}, {
                                                width: r,
                                                height: n,
                                                vastXml: i,
                                                nodeId: o,
                                                config: t.getConfig()
                                            }));
                                        });
                                    });
                                } catch (e) {
                                }
                                return t;
                            }(l(l({}, t), {}, { adUnitCode: n }))))), o.push(i);
                        }), o;
                    },
                    getUserSyncs: function (e, t, r, n) {
                        var i = [], o = '';
                        return r && 'string' == typeof r.consentString && (o += '&gdpr_consent=' + r.consentString, 'boolean' == typeof r.gdprApplies && (o += '&gdpr=' + (r.gdprApplies ? 1 : 0))), n && 'string' == typeof n && (o += '&us_privacy=' + n), e.iframeEnabled && i.push({
                            type: 'iframe',
                            url: f + '?cb=' + new Date().getTime() + o
                        }), e.pixelEnabled && i.push({
                            type: 'image',
                            url: f + '?tag=img' + o
                        }), i;
                    }
                };
                Object(o.registerBidder)(O);
            }
        }, [669]);
        pbjsChunk([184], {
            679: function (e, t, r) {
                e.exports = r(680);
            },
            680: function (e, t, r) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), r.d(t, 'USER_ID_CODE_TO_QUERY_ARG', function () {
                    return l;
                }), r.d(t, 'spec', function () {
                    return h;
                });
                var o = r(3), n = r(1), c = r(0), u = r(2);
                function s(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var r = [], n = !0, i = !1, a = void 0;
                        try {
                            for (var s, d = e[Symbol.iterator](); !(n = (s = d.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                        } catch (e) {
                            i = !0, a = e;
                        } finally {
                            try {
                                n || null == d.return || d.return();
                            } finally {
                                if (i)
                                    throw a;
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
                var a = [
                        u.b,
                        u.d
                    ], p = 'hb_pb', m = '3.0.3', d = 'USD', l = {
                        britepoolid: 'britepoolid',
                        criteoId: 'criteoid',
                        digitrustid: 'digitrustid',
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
                        sharedId: 'sharedid',
                        tapadId: 'tapadid',
                        tdid: 'ttduuid',
                        verizonMediaId: 'verizonmediaid'
                    }, h = {
                        code: 'openx',
                        gvlid: 69,
                        supportedMediaTypes: a,
                        isBidRequestValid: function (e) {
                            var t = e.params.delDomain || e.params.platform;
                            return c.deepAccess(e, 'mediaTypes.banner') && t ? !!e.params.unit || 0 < c.deepAccess(e, 'mediaTypes.banner.sizes.length') : !(!e.params.unit || !t);
                        },
                        buildRequests: function (e, n) {
                            if (0 === e.length)
                                return [];
                            var i = [], t = s(e.reduce(function (e, t) {
                                    var r;
                                    return r = t, c.deepAccess(r, 'mediaTypes.video') && !c.deepAccess(r, 'mediaTypes.banner') || r.mediaType === u.d ? e[0].push(t) : e[1].push(t), e;
                                }, [
                                    [],
                                    []
                                ]), 2), r = t[0], a = t[1];
                            return 0 < a.length && i.push(function (e, t) {
                                var n = [], i = !1, r = f(e, t), a = c._map(e, function (e) {
                                        return e.params.unit;
                                    });
                                r.aus = c._map(e, function (e) {
                                    return c.parseSizesInput(e.mediaTypes.banner.sizes).join(',');
                                }).join('|'), r.divIds = c._map(e, function (e) {
                                    return encodeURIComponent(e.adUnitCode);
                                }).join(','), a.some(function (e) {
                                    return e;
                                }) && (r.auid = a.join(','));
                                e.some(function (e) {
                                    return e.params.doNotTrack;
                                }) && (r.ns = 1);
                                !0 !== o.b.getConfig('coppa') && !e.some(function (e) {
                                    return e.params.coppa;
                                }) || (r.tfcd = 1);
                                e.forEach(function (t) {
                                    var e, r;
                                    t.params.customParams ? (e = c._map(Object.keys(t.params.customParams), function (e) {
                                        return function (e, t) {
                                            var r = t[e];
                                            c.isArray(r) && (r = r.join(','));
                                            return (e.toLowerCase() + '=' + r.toLowerCase()).replace('+', '.').replace('/', '_');
                                        }(e, t.params.customParams);
                                    }), r = window.btoa(e.join('&')), i = !0, n.push(r)) : n.push('');
                                }), i && (r.tps = n.join(','));
                                return b(r, u.b, e), {
                                    method: 'GET',
                                    url: r.ph ? 'https://u.openx.net/w/1.0/arj' : 'https://'.concat(e[0].params.delDomain, '/w/1.0/arj'),
                                    data: r,
                                    payload: {
                                        bids: e,
                                        startTime: new Date()
                                    }
                                };
                            }(a, n)), 0 < r.length && r.forEach(function (e) {
                                var t, r;
                                i.push({
                                    method: 'GET',
                                    url: (r = function (e, t) {
                                        var r, n, i = f([e], t), a = c.deepAccess(e, 'params.video') || {}, s = c.deepAccess(e, 'mediaTypes.video.context'), d = c.deepAccess(e, 'mediaTypes.video.playerSize');
                                        c.isArray(e.sizes) && 2 === e.sizes.length && !c.isArray(e.sizes[0]) ? (r = parseInt(e.sizes[0], 10), n = parseInt(e.sizes[1], 10)) : c.isArray(e.sizes) && c.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (r = parseInt(e.sizes[0][0], 10), n = parseInt(e.sizes[0][1], 10)) : c.isArray(d) && 2 === d.length && (r = parseInt(d[0], 10), n = parseInt(d[1], 10));
                                        Object.keys(a).forEach(function (e) {
                                            'openrtb' === e ? (a[e].w = r || a[e].w, a[e].v = n || a[e].v, i[e] = JSON.stringify(a[e])) : e in i || 'url' === e || (i[e] = a[e]);
                                        }), i.auid = e.params.unit, i.vwd = r || a.vwd, i.vht = n || a.vht, 'outstream' === s && (i.vos = '101');
                                        a.mimes && (i.vmimes = a.mimes);
                                        e.params.test && (i.vtest = 1);
                                        return b(i, u.d, [e]), i;
                                    }(t = e, n)).ph ? 'https://u.openx.net/v/1.0/avjp' : 'https://'.concat(t.params.delDomain, '/v/1.0/avjp'),
                                    data: r,
                                    payload: {
                                        bid: t,
                                        startTime: new Date()
                                    }
                                });
                            }), i;
                        },
                        interpretResponse: function (e, t) {
                            var r = e.body;
                            return ((/avjp$/.test(t.url) ? u.d : u.b) === u.d ? function (e, t) {
                                var r = t.bid, n = (t.startTime, []);
                                {
                                    var i, a;
                                    void 0 !== e && '' !== e.vastUrl && 0 < e.pub_rev && (i = c.parseUrl(e.vastUrl).search || {}, (a = {}).requestId = r.bidId, a.ttl = 300, a.netRevenue = !0, a.currency = e.currency, a.cpm = parseInt(e.pub_rev, 10) / 1000, a.width = parseInt(e.width, 10), a.height = parseInt(e.height, 10), a.creativeId = e.adid, a.vastUrl = e.vastUrl, a.mediaType = u.d, e.ph = i.ph, e.colo = i.colo, e.ts = i.ts, n.push(a));
                                }
                                return n;
                            } : function (e, t) {
                                for (var r = t.bids, n = (t.startTime, e.ads.ad), i = [], a = 0; a < n.length; a++) {
                                    var s, d = n[a], o = parseInt(d.idx, 10), c = {};
                                    c.requestId = r[o].bidId, d.pub_rev && (c.cpm = Number(d.pub_rev) / 1000, (s = d.creative[0]) && (c.width = s.width, c.height = s.height), c.creativeId = s.id, c.ad = d.html, d.deal_id && (c.dealId = d.deal_id), c.ttl = 300, c.netRevenue = !0, c.currency = d.currency, d.tbd && (c.tbd = d.tbd), c.ts = d.ts, c.meta = {}, d.brand_id && (c.meta.brandId = d.brand_id), d.adv_id && (c.meta.dspid = d.adv_id), i.push(c));
                                }
                                return i;
                            })(r, t.payload);
                        },
                        getUserSyncs: function (e, t, r, n) {
                            if (e.iframeEnabled || e.pixelEnabled)
                                return [{
                                        type: e.iframeEnabled ? 'iframe' : 'image',
                                        url: c.deepAccess(t, '0.body.ads.pixels') || c.deepAccess(t, '0.body.pixels') || function (e, t) {
                                            var r = [];
                                            e && (r.push('gdpr=' + (e.gdprApplies ? 1 : 0)), r.push('gdpr_consent=' + encodeURIComponent(e.consentString || '')));
                                            t && r.push('us_privacy=' + encodeURIComponent(t));
                                            return ''.concat('https://u.openx.net/w/1.0/pd').concat(0 < r.length ? '?' + r.join('&') : '');
                                        }(r, n)
                                    }];
                        },
                        transformBidParams: function (e) {
                            return c.convertTypes({
                                unit: 'string',
                                customFloor: 'number'
                            }, e);
                        }
                    };
                function f(e, t) {
                    var r, n, i, a, s = c.inIframe(), d = {
                            ju: o.b.getConfig('pageUrl') || t.refererInfo.referer,
                            ch: document.charSet || document.characterSet,
                            res: ''.concat(screen.width, 'x').concat(screen.height, 'x').concat(screen.colorDepth),
                            ifr: s,
                            tz: new Date().getTimezoneOffset(),
                            tws: function (e) {
                                var t, r, n, i = window, a = document, s = a.documentElement;
                                if (e) {
                                    try {
                                        i = window.top, a = window.top.document;
                                    } catch (e) {
                                        return;
                                    }
                                    s = a.documentElement, n = a.body, t = i.innerWidth || s.clientWidth || n.clientWidth, r = i.innerHeight || s.clientHeight || n.clientHeight;
                                } else
                                    s = a.documentElement, t = i.innerWidth || s.clientWidth, r = i.innerHeight || s.clientHeight;
                                return ''.concat(t, 'x').concat(r);
                            }(s),
                            be: 1,
                            bc: e[0].params.bc || ''.concat(p, '_').concat(m),
                            dddid: c._map(e, function (e) {
                                return e.transactionId;
                            }).join(','),
                            nocache: new Date().getTime()
                        };
                    return e[0].params.platform && (d.ph = e[0].params.platform), t.gdprConsent && (void 0 !== (r = t.gdprConsent).consentString && (d.gdpr_consent = r.consentString), void 0 !== r.gdprApplies && (d.gdpr = r.gdprApplies ? 1 : 0), 'iab' === o.b.getConfig('consentManagement.cmpApi') && (d.x_gdpr_f = 1)), t && t.uspConsent && (d.us_privacy = t.uspConsent), c.deepAccess(e[0], 'crumbs.pubcid') && c.deepSetValue(e[0], 'userId.pubcid', c.deepAccess(e[0], 'crumbs.pubcid')), n = d, i = e[0].userId, c._each(i, function (e, t) {
                        var r = l[t];
                        if (l.hasOwnProperty(t))
                            switch (t) {
                            case 'digitrustid':
                                n[r] = c.deepAccess(e, 'data.id');
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
                    }), d = n, e[0].schain && (d.schain = (a = e[0].schain, ''.concat(a.ver, ',').concat(a.complete, '!').concat(function (e) {
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
                    }(a.nodes)))), d;
                }
                function b(e, r, t) {
                    var n = [], i = !1;
                    t.forEach(function (e) {
                        var t = function (e, t) {
                            var r = {}, n = o.b.getConfig('currency.adServerCurrency') || d;
                            'function' == typeof e.getFloor && (r = e.getFloor({
                                currency: n,
                                mediaType: t,
                                size: '*'
                            }));
                            var i = r.floor || e.params.customFloor || 0;
                            return Math.round(1000 * i);
                        }(e, r);
                        t ? (n.push(t), i = !0) : n.push(0);
                    }), i && (e.aumfs = n.join(','));
                }
                Object(n.registerBidder)(h);
            }
        }, [679]);
        pbjsChunk([171], {
            712: function (e, t, o) {
                e.exports = o(713);
            },
            713: function (e, t, o) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), o.d(t, 'allowedFields', function () {
                    return g;
                }), o.d(t, '_floorDataForAuction', function () {
                    return R;
                }), o.d(t, 'fieldMatchingFunctions', function () {
                    return U;
                }), t.getFirstMatchingFloor = E, t.getBiddersCpmAdjustment = w, t.calculateAdjustedFloor = P, t.getFloor = M, t.getFloorsDataForAuction = B, t.getFloorDataFromAdUnits = V, t.updateAdUnitsForAuction = x, t.pickRandomModel = q, t.createFloorsDataForAuction = z, t.continueAuction = W, t.isFloorsDataValid = H, t.parseFloorData = J, t.requestBidsHook = L, t.handleFetchResponse = K, t.generateAndHandleFetch = X, t.handleSetFloorsConfig = Z, t.addBidResponseHook = $;
                var O = o(18), r = o(3), j = o(0), n = o(4), a = o(9), i = o.n(a), c = o(5), F = o.n(c), s = o(13), A = o(34), u = o(10), S = o.n(u), d = o(22);
                function l(e) {
                    return (l = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function f(e, t) {
                    if (null == e)
                        return {};
                    var o, r = function (e, t) {
                            if (null == e)
                                return {};
                            var o, r, n = {}, a = Object.keys(e);
                            for (r = 0; r < a.length; r++)
                                o = a[r], 0 <= t.indexOf(o) || (n[o] = e[o]);
                            return n;
                        }(e, t);
                    if (Object.getOwnPropertySymbols)
                        for (var n = Object.getOwnPropertySymbols(e), a = 0; a < n.length; a++)
                            o = n[a], 0 <= t.indexOf(o) || Object.prototype.propertyIsEnumerable.call(e, o) && (r[o] = e[o]);
                    return r;
                }
                function C() {
                    return (C = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var o = arguments[t];
                            for (var r in o)
                                Object.prototype.hasOwnProperty.call(o, r) && (e[r] = o[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function p(t, e) {
                    var o, r = Object.keys(t);
                    return Object.getOwnPropertySymbols && (o = Object.getOwnPropertySymbols(t), e && (o = o.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), r.push.apply(r, o)), r;
                }
                function k(n) {
                    for (var e = 1; e < arguments.length; e++) {
                        var a = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? p(Object(a), !0).forEach(function (e) {
                            var t, o, r;
                            t = n, r = a[o = e], o in t ? Object.defineProperty(t, o, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : t[o] = r;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(a)) : p(Object(a)).forEach(function (e) {
                            Object.defineProperty(n, e, Object.getOwnPropertyDescriptor(a, e));
                        });
                    }
                    return n;
                }
                var m, T = 'Price Floors', h = Object(n.b)(10000), g = [
                        'gptSlot',
                        'adUnitCode',
                        'size',
                        'domain',
                        'mediaType'
                    ], y = !1, b = !1, v = {}, D = [], R = {};
                var U = {
                    size: function (e, t) {
                        return j.parseGPTSingleSizeArray(t.size) || '*';
                    },
                    mediaType: function (e, t) {
                        return t.mediaType || 'banner';
                    },
                    gptSlot: function (e) {
                        return j.getGptSlotInfoForAdUnitCode(e.adUnitCode).gptSlot;
                    },
                    domain: function () {
                        return m || (e = Object(d.a)().referer, m = j.parseUrl(e, { noDecodeWholeURL: !0 }).hostname);
                        var e;
                    },
                    adUnitCode: function (e) {
                        return e.adUnitCode;
                    }
                };
                function E(t, e) {
                    var o, r, n, a = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, i = (o = j.deepAccess(t, 'schema.fields') || [], r = e, n = a, o.reduce(function (e, t) {
                            var o = U[t](r, n) || '*';
                            return e.push('*' === o ? ['*'] : [
                                o.toLowerCase(),
                                '*'
                            ]), e;
                        }, []));
                    if (!i.length)
                        return { matchingFloor: t.default };
                    var c = i.map(function (e) {
                            return e[0];
                        }).join('-'), s = j.deepAccess(t, 'matchingInputs.'.concat(c));
                    if (s)
                        return k({}, s);
                    var u, d, l = (u = i, d = j.deepAccess(t, 'schema.delimiter') || '|', u.reduce(function (e, o) {
                            var r = [];
                            return e.map(function (t) {
                                o.map(function (e) {
                                    r.push(t + d + e);
                                });
                            }), r;
                        }).sort(function (e, t) {
                            return e.split('*').length - t.split('*').length;
                        })), f = S()(l, function (e) {
                            return t.values.hasOwnProperty(e);
                        }), p = {
                            floorMin: t.floorMin || 0,
                            floorRuleValue: t.values[f] || t.default,
                            matchingData: l[0],
                            matchingRule: f
                        };
                    return p.matchingFloor = Math.max(p.floorMin, p.floorRuleValue), j.deepSetValue(t, 'matchingInputs.'.concat(c), k({}, p)), p;
                }
                function w(e, t) {
                    var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, r = j.deepAccess(Object(O.a)(), 'bidderSettings.'.concat(e, '.bidCpmAdjustment')) || j.deepAccess(Object(O.a)(), 'bidderSettings.standard.bidCpmAdjustment');
                    return r ? parseFloat(r(t, k(k({}, o), {}, { cpm: t }))) : parseFloat(t);
                }
                function P(e, t) {
                    var o = Math.pow(10, 10);
                    return e * o / (t * o) * (e * o) / o;
                }
                var I = {
                    banner: function (e) {
                        return j.deepAccess(e, 'mediaTypes.banner.sizes') || [];
                    },
                    video: function (e) {
                        return j.deepAccess(e, 'mediaTypes.video.playerSize') || [];
                    },
                    native: function (e) {
                        return j.deepAccess(e, 'mediaTypes.native.image.sizes') ? [j.deepAccess(e, 'mediaTypes.native.image.sizes')] : [];
                    }
                };
                function M() {
                    var e, t, o, r = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {
                            currency: 'USD',
                            mediaType: '*',
                            size: '*'
                        }, n = this, a = R[n.auctionId];
                    if (!a || a.skipped)
                        return {};
                    e = n, t = r, o = Object.keys(e.mediaTypes || {}), '*' === t.mediaType && 1 === o.length && (t.mediaType = o[0]), '*' === t.size && -1 !== o.indexOf(t.mediaType) && I[t.mediaType] && 1 === I[t.mediaType](e).length && (t.size = I[t.mediaType](e)[0]), r = t;
                    var i, c, s, u = E(a.data, k({}, n), {
                            mediaType: r.mediaType,
                            size: r.size
                        }), d = r.currency || a.data.currency;
                    if (u.matchingFloor && d !== a.data.currency)
                        try {
                            u.matchingFloor = Object(O.a)().convertCurrency(u.matchingFloor, a.data.currency, d);
                        } catch (e) {
                            j.logWarn(''.concat(T, ': Unable to get currency conversion for getFloor for bidder ').concat(n.bidder, '. You must have currency module enabled with defaultRates in your currency config')), d = a.data.currency;
                        }
                    return a.enforcement.bidAdjustment && u.matchingFloor && (i = w(n.bidder, u.matchingFloor), u.matchingFloor = i ? P(u.matchingFloor, i) : u.matchingFloor), u.matchingFloor ? {
                        floor: (c = u.matchingFloor, s = 4, Math.ceil((parseFloat(c) * Math.pow(10, s)).toFixed(1)) / Math.pow(10, s)),
                        currency: d
                    } : {};
                }
                function B(e, t) {
                    var o, r, n, a, i, c = j.deepClone(e);
                    return c.schema.delimiter = e.schema.delimiter || '|', c.values = (r = t, n = (o = c).schema.fields, a = o.schema.delimiter, i = r && -1 === n.indexOf('adUnitCode') && n.unshift('adUnitCode'), Object.keys(o.values).reduce(function (e, t) {
                        return e[(i ? ''.concat(r).concat(a).concat(t) : t).toLowerCase()] = o.values[t], e;
                    }, {})), c.currency = c.currency || 'USD', c;
                }
                function V(e) {
                    return e.reduce(function (e, t) {
                        var o;
                        return H(t.floors) && (e.values ? (o = B(t.floors, t.code).values, C(e.values, o)) : (e = B(t.floors, t.code)).location = 'adUnit'), e;
                    }, {});
                }
                function x(e, t, o) {
                    e.forEach(function (e) {
                        e.bids.forEach(function (e) {
                            t.skipped ? delete e.getFloor : e.getFloor = M, e.auctionId = o, e.floorData = {
                                skipped: t.skipped,
                                skipRate: t.skipRate,
                                floorMin: t.floorMin,
                                modelVersion: j.deepAccess(t, 'data.modelVersion'),
                                modelWeight: j.deepAccess(t, 'data.modelWeight'),
                                modelTimestamp: j.deepAccess(t, 'data.modelTimestamp'),
                                location: j.deepAccess(t, 'data.location', 'noData'),
                                floorProvider: t.floorProvider,
                                fetchStatus: v.fetchStatus
                            };
                        });
                    });
                }
                function q(e, t) {
                    for (var o = Math.floor(Math.random() * t + 1), r = 0; r < e.length; r++)
                        if ((o -= e[r].modelWeight) <= 0)
                            return e[r];
                }
                function z(e, t) {
                    var o, r, n, a = j.deepClone(v);
                    2 === j.deepAccess(a, 'data.floorsSchemaVersion') && (r = (o = a.data).modelGroups, n = f(o, ['modelGroups']), a.data = C(n, q(r, n.modelWeightSum)));
                    var i, c, s = 0 === Object.keys(j.deepAccess(a, 'data.values') || {}).length;
                    return a.data = s ? V(e) : B(a.data), 0 === Object.keys(j.deepAccess(a, 'data.values') || {}).length ? a.skipped = !0 : (i = j.getParameterByName('pbjs_skipRate') || a.skipRate, c = 100 * Math.random() < parseFloat(i), a.skipped = c), a.hasOwnProperty('floorMin') && (a.data.floorMin = a.floorMin), x(e, a, t), a;
                }
                function W(t) {
                    t.hasExited || (D = D.filter(function (e) {
                        return e.timer !== t.timer;
                    }), t.reqBidsConfigObj.auctionId = t.reqBidsConfigObj.auctionId || j.generateUUID(), R[t.reqBidsConfigObj.auctionId] = z(t.reqBidsConfigObj.adUnits || Object(O.a)().adUnits, t.reqBidsConfigObj.auctionId), t.nextFn.apply(t.context, [t.reqBidsConfigObj]), t.hasExited = !0);
                }
                function G(i, c, s) {
                    return 'object' === l(i.values) && (i.values = Object.keys(i.values).reduce(function (e, t) {
                        var o, r, n, a;
                        return o = t, r = i.values[t], n = c, a = s, 'string' == typeof o && o.split(a).length === n && 'number' == typeof r && (e[t] = i.values[t]), e;
                    }, {}), 0 < Object.keys(i.values).length);
                }
                function N(e) {
                    return !!function (e) {
                        if (Array.isArray(e) && 0 < e.length && e.every(function (e) {
                                return -1 !== g.indexOf(e);
                            }))
                            return 1;
                        j.logError(''.concat(T, ': Fields recieved do not match allowed fields'));
                    }(j.deepAccess(e, 'schema.fields')) && G(e, e.schema.fields.length, e.schema.delimiter || '|');
                }
                var _ = {
                    1: N,
                    2: function (t) {
                        return !(!Array.isArray(t.modelGroups) || 0 === t.modelGroups.length) && (t.modelWeightSum = 0, t.modelGroups.every(function (e) {
                            return !('number' != typeof e.modelWeight || !N(e)) && (t.modelWeightSum += e.modelWeight, !0);
                        }));
                    }
                };
                function H(e) {
                    return 'object' === l(e) && (e.floorsSchemaVersion = e.floorsSchemaVersion || 1, 'function' != typeof _[e.floorsSchemaVersion] ? (j.logError(''.concat(T, ': Unknown floorsSchemaVersion: '), e.floorsSchemaVersion), !1) : _[e.floorsSchemaVersion](e));
                }
                function J(e, t) {
                    if (e && 'object' === l(e) && H(e))
                        return j.logInfo(''.concat(T, ': A ').concat(t, ' set the auction floor data set to '), e), k(k({}, e), {}, { location: t });
                    j.logError(''.concat(T, ': The floors data did not contain correct values'), e);
                }
                function L(e, t) {
                    var o = {
                        reqBidsConfigObj: t,
                        context: this,
                        nextFn: e,
                        haveExited: !1,
                        timer: null
                    };
                    0 < v.auctionDelay && y ? (o.timer = setTimeout(function () {
                        j.logWarn(''.concat(T, ': Fetch attempt did not return in time for auction')), v.fetchStatus = 'timeout', W(o);
                    }, v.auctionDelay), D.push(o)) : W(o);
                }
                function Y() {
                    D.forEach(function (e) {
                        clearTimeout(e.timer), W(e);
                    }), D = [];
                }
                function K(t) {
                    var o;
                    y = !1, v.fetchStatus = 'success';
                    try {
                        o = JSON.parse(t);
                    } catch (e) {
                        o = t;
                    }
                    var e = J(o, 'fetch');
                    e && (v.data = e, v.skipRate = j.isNumber(e.skipRate) ? e.skipRate : v.skipRate, v.floorProvider = e.floorProvider || v.floorProvider), Y();
                }
                function Q(e) {
                    y = !1, v.fetchStatus = 'error', j.logError(''.concat(T, ': Fetch errored with: '), e), Y();
                }
                function X(e) {
                    e.url && !y ? 'GET' !== (e.method || 'GET') ? j.logError(''.concat(T, ': \'GET\' is the only request method supported at this time!')) : (h(e.url, {
                        success: K,
                        error: Q
                    }, null, { method: 'GET' }), y = !0) : y && j.logWarn(''.concat(T, ': A fetch is already occuring. Skipping.'));
                }
                function Z(t) {
                    (v = j.pick(t, [
                        'floorMin',
                        'enabled',
                        function (e) {
                            return !1 !== e;
                        },
                        'auctionDelay',
                        function (e) {
                            return e || 0;
                        },
                        'floorProvider',
                        function (e) {
                            return j.deepAccess(t, 'data.floorProvider', e);
                        },
                        'endpoint',
                        function (e) {
                            return e || {};
                        },
                        'skipRate',
                        function () {
                            return isNaN(j.deepAccess(t, 'data.skipRate')) ? t.skipRate || 0 : t.data.skipRate;
                        },
                        'enforcement',
                        function (e) {
                            return j.pick(e || {}, [
                                'enforceJS',
                                function (e) {
                                    return !1 !== e;
                                },
                                'enforcePBS',
                                function (e) {
                                    return !0 === e;
                                },
                                'floorDeals',
                                function (e) {
                                    return !0 === e;
                                },
                                'bidAdjustment',
                                function (e) {
                                    return !1 !== e;
                                }
                            ]);
                        },
                        'additionalSchemaFields',
                        function (e) {
                            return 'object' === l(e) && 0 < Object.keys(e).length ? (t = e, void Object.keys(t).forEach(function (e) {
                                -1 === g.indexOf(e) && 'function' == typeof t[e] && (g.push(e), U[e] = t[e]);
                            })) : void 0;
                            var t;
                        },
                        'data',
                        function (e) {
                            return e && J(e, 'setConfig') || v.data;
                        }
                    ])).enabled ? (X(v.endpoint), b || (i.a.on(F.a.EVENTS.AUCTION_END, function (e) {
                        setTimeout(function () {
                            return delete R[e.auctionId];
                        }, 3000);
                    }), Object(O.a)().requestBids.before(L, 50), Object(s.a)('addBidResponse').before($, j.debugTurnedOn() ? 4 : 50), b = !0)) : (j.logInfo(''.concat(T, ': Turning off module')), v = {}, R = {}, Object(s.a)('addBidResponse').getHooks({ hook: $ }).remove(), Object(O.a)().requestBids.getHooks({ hook: L }).remove(), b = !1);
                }
                function $(t, o, r) {
                    var e = R[this.bidderRequest.auctionId], n = S()(this.bidderRequest.bids, function (e) {
                            return e.bidId && e.bidId === r.requestId;
                        });
                    if (!e || !r || e.skipped || !n)
                        return t.call(this, o, r);
                    var a, i = E(e.data, k({}, n), k(k({}, r), {}, {
                            size: [
                                r.width,
                                r.height
                            ]
                        }));
                    if (!i.matchingFloor)
                        return j.logWarn(''.concat(T, ': unable to determine a matching price floor for bidResponse'), r), t.call(this, o, r);
                    var c, s, u, d, l, f, p, m, h, g, y = e.data.currency.toUpperCase(), b = r.currency || 'USD';
                    if (y === b.toUpperCase())
                        a = r.cpm;
                    else if (r.originalCurrency && y === r.originalCurrency.toUpperCase())
                        a = r.originalCpm;
                    else
                        try {
                            a = Object(O.a)().convertCurrency(r.cpm, b.toUpperCase(), y);
                        } catch (e) {
                            return j.logError(''.concat(T, ': Unable do get currency conversion for bidResponse to Floor Currency. Do you have Currency module enabled? ').concat(r)), t.call(this, o, r);
                        }
                    if (a = w(r.bidderCode, a, r), c = e, s = i, d = a, (u = r).floorData = {
                            floorValue: s.matchingFloor,
                            floorRule: s.matchingRule,
                            floorRuleValue: s.floorRuleValue,
                            floorCurrency: c.data.currency,
                            cpmAfterAdjustments: d,
                            enforcements: k({}, c.enforcement),
                            matchedFields: {}
                        }, c.data.schema.fields.forEach(function (e, t) {
                            var o = s.matchingData.split(c.data.schema.delimiter)[t];
                            u.floorData.matchedFields[e] = o;
                        }), l = e, f = i, p = r, m = !1 !== j.deepAccess(l, 'enforcement.enforceJS'), h = !0 === j.deepAccess(l, 'enforcement.floorDeals') || !p.dealId, g = p.floorData.cpmAfterAdjustments < f.matchingFloor, m && g && h) {
                        var v = Object(A.a)(F.a.STATUS.NO_BID, n);
                        return C(v, j.pick(r, [
                            'floorData',
                            'width',
                            'height',
                            'mediaType',
                            'currency',
                            'originalCpm',
                            'originalCurrency',
                            'getCpmInNewCurrency'
                        ])), v.status = F.a.BID_STATUS.BID_REJECTED, v.cpm = 0, j.logWarn(''.concat(T, ': ').concat(v.bidderCode, '\'s Bid Response for ').concat(o, ' was rejected due to floor not met'), r), t.call(this, o, v);
                    }
                    return t.call(this, o, r);
                }
                r.b.getConfig('floors', function (e) {
                    return Z(e.floors);
                });
            }
        }, [712]);
        pbjsChunk([164], {
            728: function (e, r, a) {
                e.exports = a(729);
            },
            729: function (e, r, a) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), a.d(r, 'spec', function () {
                    return y;
                });
                var T = a(0), t = a(1), S = a(2), P = a(3), i = a(11);
                function R() {
                    return (R = Object.assign || function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var a = arguments[r];
                            for (var t in a)
                                Object.prototype.hasOwnProperty.call(a, t) && (e[t] = a[t]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function D(e) {
                    return (D = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var n = 'pubmatic', Y = 'PubMatic: ', A = 'USD', x = void 0, s = 'https://pubmatic.bbvms.com/r/'.concat('$RENDERER', '.js'), N = {
                        kadpageurl: '',
                        gender: '',
                        yob: '',
                        lat: '',
                        lon: '',
                        wiid: '',
                        profId: '',
                        verId: ''
                    }, o = {
                        NUMBER: 'number',
                        STRING: 'string',
                        BOOLEAN: 'boolean',
                        ARRAY: 'array',
                        OBJECT: 'object'
                    }, d = {
                        mimes: o.ARRAY,
                        minduration: o.NUMBER,
                        maxduration: o.NUMBER,
                        startdelay: o.NUMBER,
                        playbackmethod: o.ARRAY,
                        api: o.ARRAY,
                        protocols: o.ARRAY,
                        w: o.NUMBER,
                        h: o.NUMBER,
                        battr: o.ARRAY,
                        linearity: o.NUMBER,
                        placement: o.NUMBER,
                        minbitrate: o.NUMBER,
                        maxbitrate: o.NUMBER
                    }, c = {
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
                    }, l = {
                        ICON: 1,
                        LOGO: 2,
                        IMAGE: 3
                    }, u = [
                        {
                            id: c.SPONSOREDBY.ID,
                            required: !0,
                            data: { type: 1 }
                        },
                        {
                            id: c.TITLE.ID,
                            required: !0
                        },
                        {
                            id: c.IMAGE.ID,
                            required: !0
                        }
                    ], p = {
                        1: 'PMP',
                        5: 'PREF',
                        6: 'PMPG'
                    }, m = {
                        bootstrapPlayer: function (e) {
                            var r = { code: e.adUnitCode };
                            if (e.vastXml ? r.vastXml = e.vastXml : e.vastUrl && (r.vastUrl = e.vastUrl), e.vastXml || e.vastUrl) {
                                for (var a, t = m.getRendererId('pubmatic', e.rendererCode), i = document.getElementById(e.adUnitCode), s = 0; s < window.bluebillywig.renderers.length; s++)
                                    if (window.bluebillywig.renderers[s]._id === t) {
                                        a = window.bluebillywig.renderers[s];
                                        break;
                                    }
                                a ? a.bootstrap(r, i) : T.logWarn(''.concat(Y, ': Couldn\'t find a renderer with ').concat(t));
                            } else
                                T.logWarn(''.concat(Y, ': No vastXml or vastUrl on bid, bailing...'));
                        },
                        newRenderer: function (e, r) {
                            var a = s.replace('$RENDERER', e), t = i.a.install({
                                    url: a,
                                    loaded: !1,
                                    adUnitCode: r
                                });
                            try {
                                t.setRender(m.outstreamRender);
                            } catch (e) {
                                T.logWarn(''.concat(Y, ': Error tying to setRender on renderer'), e);
                            }
                            return t;
                        },
                        outstreamRender: function (e) {
                            e.renderer.push(function () {
                                m.bootstrapPlayer(e);
                            });
                        },
                        getRendererId: function (e, r) {
                            return ''.concat(e, '-').concat(r);
                        }
                    }, k = 0, g = !1, h = {}, f = {};
                function C(e, r) {
                    if (!T.isStr(r))
                        return r && T.logWarn(Y + 'Ignoring param key: ' + e + ', expects string-value, found ' + D(r)), x;
                    switch (e) {
                    case 'pmzoneid':
                        return r.split(',').slice(0, 50).map(function (e) {
                            return e.trim();
                        }).join();
                    case 'kadfloor':
                    case 'lat':
                    case 'lon':
                        return parseFloat(r) || x;
                    case 'yob':
                        return parseInt(r) || x;
                    default:
                        return r;
                    }
                }
                function U(e) {
                    var r;
                    e.params.adUnit = '', e.params.adUnitIndex = '0', e.params.width = 0, e.params.height = 0, e.params.adSlot = (r = e.params.adSlot, T.isStr(r) ? r.replace(/^\s+/g, '').replace(/\s+$/g, '') : (r && T.logWarn(n + ': adSlot must be a string. Ignoring adSlot'), ''));
                    var a = (t = e.params.adSlot).split(':'), t = a[0];
                    if (2 == a.length && (e.params.adUnitIndex = a[1]), a = t.split('@'), e.params.adUnit = a[0], 1 < a.length) {
                        if (2 != (a = a[1].split('x')).length)
                            return void T.logWarn(Y + 'AdSlot Error: adSlot not in required format');
                        e.params.width = parseInt(a[0], 10), e.params.height = parseInt(a[1], 10);
                    } else if (e.hasOwnProperty('mediaTypes') && e.mediaTypes.hasOwnProperty(S.b) && e.mediaTypes.banner.hasOwnProperty('sizes')) {
                        for (var i = 0, s = []; i < e.mediaTypes.banner.sizes.length; i++)
                            2 === e.mediaTypes.banner.sizes[i].length && s.push(e.mediaTypes.banner.sizes[i]);
                        e.mediaTypes.banner.sizes = s, 1 <= e.mediaTypes.banner.sizes.length && (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1));
                    }
                }
                function b(e) {
                    var r, a = e.params.video;
                    if (a !== x) {
                        for (var t in (r = {}, d))
                            a.hasOwnProperty(t) && (r[t] = function (e, r, a) {
                                var t, i = 'Ignoring param key: ' + e + ', expects ' + a + ', found ' + D(r);
                                switch (a) {
                                case o.BOOLEAN:
                                    t = T.isBoolean;
                                    break;
                                case o.NUMBER:
                                    t = T.isNumber;
                                    break;
                                case o.STRING:
                                    t = T.isStr;
                                    break;
                                case o.ARRAY:
                                    t = T.isArray;
                                }
                                return t(r) ? r : (T.logWarn(Y + i), x);
                            }(t, a[t], d[t]));
                        T.isArray(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : T.isNumber(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[1], 10)), e.params.video.hasOwnProperty('skippable') && (r.ext = { video_skippable: e.params.video.skippable ? 1 : 0 });
                    } else
                        r = x, T.logWarn(Y + 'Error: Video config params missing for adunit: ' + e.params.adUnit + ' with mediaType set as video. Ignoring video impression in the adunit.');
                    return r;
                }
                function z(e) {
                    var r, a, t, i, s = {}, n = {}, o = e.hasOwnProperty('sizes') ? e.sizes : [], d = '', p = [], s = {
                            id: e.bidId,
                            tagid: e.params.adUnit || void 0,
                            bidfloor: C('kadfloor', e.params.kadfloor),
                            secure: 1,
                            ext: { pmZoneId: C('pmzoneid', e.params.pmzoneid) },
                            bidfloorcur: e.params.currency ? C('currency', e.params.currency) : A
                        };
                    if (t = s, (i = e).params.deals && (T.isArray(i.params.deals) ? i.params.deals.forEach(function (e) {
                            T.isStr(e) && 3 < e.length ? (t.pmp || (t.pmp = {
                                private_auction: 0,
                                deals: []
                            }), t.pmp.deals.push({ id: e })) : T.logWarn(Y + 'Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: ' + e);
                        }) : T.logWarn(Y + 'Error: bid.params.deals should be an array of strings.')), e.hasOwnProperty('mediaTypes'))
                        for (d in e.mediaTypes)
                            switch (d) {
                            case S.b:
                                (r = function (e) {
                                    var r, a = e.mediaTypes.banner.sizes, t = [];
                                    if (a !== x && T.isArray(a)) {
                                        if (r = {}, e.params.width || e.params.height)
                                            r.w = e.params.width, r.h = e.params.height;
                                        else {
                                            if (0 === a.length)
                                                return r = x, T.logWarn(Y + 'Error: mediaTypes.banner.size missing for adunit: ' + e.params.adUnit + '. Ignoring the banner impression in the adunit.'), r;
                                            r.w = parseInt(a[0][0], 10), r.h = parseInt(a[0][1], 10), a = a.splice(1, a.length - 1);
                                        }
                                        0 < a.length && (t = [], a.forEach(function (e) {
                                            1 < e.length && t.push({
                                                w: e[0],
                                                h: e[1]
                                            });
                                        }), 0 < t.length && (r.format = t)), r.pos = 0, r.topframe = T.inIframe() ? 0 : 1;
                                    } else
                                        T.logWarn(Y + 'Error: mediaTypes.banner.size missing for adunit: ' + e.params.adUnit + '. Ignoring the banner impression in the adunit.'), r = x;
                                    return r;
                                }(e)) !== x && (s.banner = r);
                                break;
                            case S.c:
                                n.request = JSON.stringify(function (e) {
                                    var r, a, t, i = { assets: [] };
                                    for (var s in e) {
                                        if (e.hasOwnProperty(s)) {
                                            var n = {};
                                            if (!(i.assets && 0 < i.assets.length && i.assets.hasOwnProperty(s)))
                                                switch (s) {
                                                case c.TITLE.KEY:
                                                    e[s].len || e[s].length ? n = {
                                                        id: c.TITLE.ID,
                                                        required: e[s].required ? 1 : 0,
                                                        title: {
                                                            len: e[s].len || e[s].length,
                                                            ext: e[s].ext
                                                        }
                                                    } : T.logWarn(Y + 'Error: Title Length is required for native ad: ' + JSON.stringify(e));
                                                    break;
                                                case c.IMAGE.KEY:
                                                    e[s].sizes && 0 < e[s].sizes.length ? n = {
                                                        id: c.IMAGE.ID,
                                                        required: e[s].required ? 1 : 0,
                                                        img: {
                                                            type: l.IMAGE,
                                                            w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                                                            h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x),
                                                            wmin: e[s].wmin || e[s].minimumWidth || (e[s].minsizes ? e[s].minsizes[0] : x),
                                                            hmin: e[s].hmin || e[s].minimumHeight || (e[s].minsizes ? e[s].minsizes[1] : x),
                                                            mimes: e[s].mimes,
                                                            ext: e[s].ext
                                                        }
                                                    } : T.logWarn(Y + 'Error: Image sizes is required for native ad: ' + JSON.stringify(e));
                                                    break;
                                                case c.ICON.KEY:
                                                    e[s].sizes && 0 < e[s].sizes.length ? n = {
                                                        id: c.ICON.ID,
                                                        required: e[s].required ? 1 : 0,
                                                        img: {
                                                            type: l.ICON,
                                                            w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                                                            h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x)
                                                        }
                                                    } : T.logWarn(Y + 'Error: Icon sizes is required for native ad: ' + JSON.stringify(e));
                                                    break;
                                                case c.VIDEO.KEY:
                                                    n = {
                                                        id: c.VIDEO.ID,
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
                                                case c.EXT.KEY:
                                                    n = {
                                                        id: c.EXT.ID,
                                                        required: e[s].required ? 1 : 0
                                                    };
                                                    break;
                                                case c.LOGO.KEY:
                                                    n = {
                                                        id: c.LOGO.ID,
                                                        required: e[s].required ? 1 : 0,
                                                        img: {
                                                            type: l.LOGO,
                                                            w: e[s].w || e[s].width || (e[s].sizes ? e[s].sizes[0] : x),
                                                            h: e[s].h || e[s].height || (e[s].sizes ? e[s].sizes[1] : x)
                                                        }
                                                    };
                                                    break;
                                                case c.SPONSOREDBY.KEY:
                                                case c.BODY.KEY:
                                                case c.RATING.KEY:
                                                case c.LIKES.KEY:
                                                case c.DOWNLOADS.KEY:
                                                case c.PRICE.KEY:
                                                case c.SALEPRICE.KEY:
                                                case c.PHONE.KEY:
                                                case c.ADDRESS.KEY:
                                                case c.DESC2.KEY:
                                                case c.DISPLAYURL.KEY:
                                                case c.CTA.KEY:
                                                    r = f[s], a = e, t = void 0, t = r.KEY, n = {
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
                                    var o = u.length, d = 0;
                                    return u.forEach(function (e) {
                                        for (var r = i.assets.length, a = 0; a < r; a++)
                                            if (e.id == i.assets[a].id) {
                                                d++;
                                                break;
                                            }
                                    }), g = o != d, i;
                                }(e.nativeParams)), g ? T.logWarn(Y + 'Error: Error in Native adunit ' + e.params.adUnit + '. Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.') : s.native = n;
                                break;
                            case S.d:
                                (a = b(e)) !== x && (s.video = a);
                            }
                    else
                        r = {
                            pos: 0,
                            w: e.params.width,
                            h: e.params.height,
                            topframe: T.inIframe() ? 0 : 1
                        }, T.isArray(o) && 1 < o.length && ((o = o.splice(1, o.length - 1)).forEach(function (e) {
                            p.push({
                                w: e[0],
                                h: e[1]
                            });
                        }), r.format = p), s.banner = r;
                    return function (t, i) {
                        var s = -1;
                        'function' != typeof i.getFloor || P.b.getConfig('pubmatic.disableFloors') || [
                            S.b,
                            S.d,
                            S.c
                        ].forEach(function (e) {
                            var r, a;
                            t.hasOwnProperty(e) && ('object' !== D(r = i.getFloor({
                                currency: t.bidfloorcur,
                                mediaType: e,
                                size: '*'
                            })) || r.currency !== t.bidfloorcur || isNaN(parseInt(r.floor)) || (a = parseFloat(r.floor), s = -1 == s ? a : Math.min(a, s)));
                        });
                        t.bidfloor && (s = Math.max(s, t.bidfloor));
                        t.bidfloor = !isNaN(s) && 0 < s ? s : x;
                    }(s, e), s.hasOwnProperty(S.b) || s.hasOwnProperty(S.c) || s.hasOwnProperty(S.d) ? s : x;
                }
                T._each(c, function (e) {
                    h[e.ID] = e.KEY;
                }), T._each(c, function (e) {
                    f[e.KEY] = e;
                });
                var y = {
                    code: n,
                    gvlid: 76,
                    supportedMediaTypes: [
                        S.b,
                        S.d,
                        S.c
                    ],
                    isBidRequestValid: function (e) {
                        if (e && e.params) {
                            if (!T.isStr(e.params.publisherId))
                                return T.logWarn(Y + 'Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: ' + JSON.stringify(e)), !1;
                            if (e.params.hasOwnProperty('video')) {
                                if (!e.params.video.hasOwnProperty('mimes') || !T.isArray(e.params.video.mimes) || 0 === e.params.video.mimes.length)
                                    return T.logWarn(Y + 'Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:' + JSON.stringify(e)), !1;
                                if (!e.hasOwnProperty('mediaTypes') || !e.mediaTypes.hasOwnProperty(S.d))
                                    return T.logError(''.concat(Y, ': mediaTypes or mediaTypes.video is not specified. Rejecting bid: '), e), !1;
                                if (!e.mediaTypes[S.d].hasOwnProperty('context'))
                                    return T.logError(''.concat(Y, ': no context specified in bid. Rejecting bid: '), e), !1;
                                if ('outstream' === e.mediaTypes[S.d].context && !T.isStr(e.params.outstreamAU) && !e.hasOwnProperty('renderer') && !e.mediaTypes[S.d].hasOwnProperty('renderer'))
                                    return T.logError(''.concat(Y, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '), e), !1;
                            }
                            return !0;
                        }
                        return !1;
                    },
                    buildRequests: function (e, r) {
                        var a;
                        r && r.refererInfo && (a = r.refererInfo);
                        var t, i, s, n, o, d, p, c, l, u, m, g, h, f, b, y, v = {
                                pageURL: (t = a) && t.referer ? t.referer : window.location.href,
                                refURL: window.document.referrer
                            }, E = (i = v, {
                                id: '' + new Date().getTime(),
                                at: 1,
                                cur: [A],
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
                            }), I = '', w = [], O = [];
                        if (e.forEach(function (e) {
                                var r;
                                (s = T.deepClone(e)).params.adSlot = s.params.adSlot || '', U(s), s.params.hasOwnProperty('video') || s.hasOwnProperty('mediaTypes') && s.mediaTypes.hasOwnProperty(S.c) || 0 !== s.params.width || 0 !== s.params.height ? (v.pubId = v.pubId || s.params.publisherId, (v = function (e, r) {
                                    var a, t, i;
                                    for (a in (r.kadpageurl || (r.kadpageurl = r.pageURL), N))
                                        N.hasOwnProperty(a) && (t = e[a]) && ('object' === D(i = N[a]) && (t = i.f(t, r)), T.isStr(t) ? r[a] = t : T.logWarn(Y + 'Ignoring param : ' + a + ' with value : ' + N[a] + ', expects string-value, found ' + D(t)));
                                    return r;
                                }(s.params, v)).transactionId = s.transactionId, '' === I ? I = s.params.currency || x : s.params.hasOwnProperty('currency') && I !== s.params.currency && T.logWarn(Y + 'Currency specifier ignored. Only one currency permitted.'), s.params.currency = I, s.params.hasOwnProperty('dctr') && T.isStr(s.params.dctr) && w.push(s.params.dctr), s.params.hasOwnProperty('bcat') && T.isArray(s.params.bcat) && (O = O.concat(s.params.bcat)), (r = z(s)) && E.imp.push(r)) : T.logWarn(Y + 'Skipping the non-standard adslot: ', s.params.adSlot, JSON.stringify(s));
                            }), 0 != E.imp.length)
                            return E.site.publisher.id = v.pubId.trim(), k = v.pubId.trim(), E.ext.wrapper = {}, E.ext.wrapper.profile = parseInt(v.profId) || x, E.ext.wrapper.version = parseInt(v.verId) || x, E.ext.wrapper.wiid = v.wiid || r.auctionId, E.ext.wrapper.wv = 'prebid_prebid_4.34.0', E.ext.wrapper.transactionId = v.transactionId, E.ext.wrapper.wp = 'pbjs', E.user.gender = v.gender ? v.gender.trim() : x, E.user.geo = {}, E.user.geo.lat = C('lat', v.lat), E.user.geo.lon = C('lon', v.lon), E.user.yob = C('yob', v.yob), E.device.geo = E.user.geo, E.site.page = v.kadpageurl.trim() || E.site.page.trim(), E.site.domain = (n = E.site.page, (o = document.createElement('a')).href = n, o.hostname), 'object' === D(P.b.getConfig('content')) && (E.site.content = P.b.getConfig('content')), 'object' === D(P.b.getConfig('device')) && (E.device = R(E.device, P.b.getConfig('device'))), T.deepSetValue(E, 'source.tid', v.transactionId), -1 !== window.location.href.indexOf('pubmaticTest=true') && (E.test = 1), e[0].schain && T.deepSetValue(E, 'source.ext.schain', e[0].schain), r && r.gdprConsent && (T.deepSetValue(E, 'user.ext.consent', r.gdprConsent.consentString), T.deepSetValue(E, 'regs.ext.gdpr', r.gdprConsent.gdprApplies ? 1 : 0)), r && r.uspConsent && T.deepSetValue(E, 'regs.ext.us_privacy', r.uspConsent), !0 === P.b.getConfig('coppa') && T.deepSetValue(E, 'regs.coppa', 1), d = E, c = e, m = '', 0 < (p = w).length && (c[0].params.hasOwnProperty('dctr') ? (m = c[0].params.dctr, T.isStr(m) && 0 < m.length ? (u = m.split('|'), m = '', u.forEach(function (e) {
                                m += 0 < e.length ? e.trim() + '|' : '';
                            }), l = m.length, '|' === m.substring(l, l - 1) && (m = m.substring(0, l - 1)), d.site.ext = { key_val: m.trim() }) : T.logWarn(Y + 'Ignoring param : dctr with value : ' + m + ', expects string-value, found empty or non-string value'), 1 < p.length && T.logWarn(Y + 'dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits')) : T.logWarn(Y + 'dctr value not found in 1st adunit, ignoring values from subsequent adunits')), g = E, h = e, f = T.deepAccess(h, '0.userIdAsEids'), T.isArray(f) && 0 < f.length && T.deepSetValue(g, 'user.eids', f), b = E, 0 < (y = (y = O).filter(function (e) {
                                return 'string' == typeof e || (T.logWarn(Y + 'bcat: Each category should be a string, ignoring category: ' + e), !1);
                            }).map(function (e) {
                                return e.trim();
                            }).filter(function (e, r, a) {
                                return 3 < e.length ? a.indexOf(e) === r : void T.logWarn(Y + 'bcat: Each category should have a value of a length of more than 3 characters, ignoring category: ' + e);
                            })).length && (T.logWarn(Y + 'bcat: Selected: ', y), b.bcat = y), 'object' === D(P.b.getConfig('app')) && (E.app = P.b.getConfig('app'), E.app.publisher = E.site.publisher, E.app.ext = E.site.ext || x, 'object' !== D(E.app.content) && (E.app.content = E.site.content || x), delete E.site), {
                                method: 'POST',
                                url: 'https://hbopenbid.pubmatic.com/translator?source=prebid-client',
                                data: JSON.stringify(E),
                                bidderRequest: r
                            };
                    },
                    interpretResponse: function (e, t) {
                        var i = [], s = A, n = JSON.parse(t.data), o = n.site && n.site.ref ? n.site.ref : '';
                        try {
                            e.body && e.body.seatbid && T.isArray(e.body.seatbid) && (s = e.body.cur || s, e.body.seatbid.forEach(function (e) {
                                e.bid && T.isArray(e.bid) && e.bid.forEach(function (r) {
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
                                            switch (!function (r, e) {
                                                    var a, t = new RegExp(/VAST\s+version/);
                                                    if (0 <= r.indexOf('span class="PubAPIAd"'))
                                                        e.mediaType = S.b;
                                                    else if (t.test(r))
                                                        e.mediaType = S.d;
                                                    else
                                                        try {
                                                            (a = JSON.parse(r.replace(/\\/g, ''))) && a.native && (e.mediaType = S.c);
                                                        } catch (e) {
                                                            T.logWarn(Y + 'Error: Cannot parse native reponse for ad response: ' + r);
                                                        }
                                                }(r.adm, a), a.mediaType) {
                                            case S.b:
                                                break;
                                            case S.d:
                                                a.width = r.hasOwnProperty('w') ? r.w : e.video.w, a.height = r.hasOwnProperty('h') ? r.h : e.video.h, a.vastXml = r.adm, function (e, r) {
                                                    var a, t, i;
                                                    if (r.bidderRequest && r.bidderRequest.bids) {
                                                        for (var s = 0; s < r.bidderRequest.bids.length; s++)
                                                            r.bidderRequest.bids[s].bidId === e.requestId && (a = r.bidderRequest.bids[s].params, t = r.bidderRequest.bids[s].mediaTypes[S.d].context, i = r.bidderRequest.bids[s].adUnitCode);
                                                        t && 'outstream' === t && a && a.outstreamAU && i && (e.rendererCode = a.outstreamAU, e.renderer = m.newRenderer(e.rendererCode, i));
                                                    }
                                                }(a, t);
                                                break;
                                            case S.c:
                                                !function (e, r) {
                                                    if (r.native = {}, e.hasOwnProperty('adm')) {
                                                        var a = '';
                                                        try {
                                                            a = JSON.parse(e.adm.replace(/\\/g, ''));
                                                        } catch (e) {
                                                            return T.logWarn(Y + 'Error: Cannot parse native reponse for ad response: ' + r.adm);
                                                        }
                                                        if (a && a.native && a.native.assets && 0 < a.native.assets.length) {
                                                            r.mediaType = S.c;
                                                            for (var t = 0, i = a.native.assets.length; t < i; t++)
                                                                switch (a.native.assets[t].id) {
                                                                case c.TITLE.ID:
                                                                    r.native.title = a.native.assets[t].title && a.native.assets[t].title.text;
                                                                    break;
                                                                case c.IMAGE.ID:
                                                                    r.native.image = {
                                                                        url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                                        height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                                        width: a.native.assets[t].img && a.native.assets[t].img.w
                                                                    };
                                                                    break;
                                                                case c.ICON.ID:
                                                                    r.native.icon = {
                                                                        url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                                        height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                                        width: a.native.assets[t].img && a.native.assets[t].img.w
                                                                    };
                                                                    break;
                                                                case c.SPONSOREDBY.ID:
                                                                case c.BODY.ID:
                                                                case c.LIKES.ID:
                                                                case c.DOWNLOADS.ID:
                                                                case c.PRICE:
                                                                case c.SALEPRICE.ID:
                                                                case c.PHONE.ID:
                                                                case c.ADDRESS.ID:
                                                                case c.DESC2.ID:
                                                                case c.CTA.ID:
                                                                case c.RATING.ID:
                                                                case c.DISPLAYURL.ID:
                                                                    r.native[h[a.native.assets[t].id]] = a.native.assets[t].data && a.native.assets[t].data.value;
                                                                }
                                                            r.native.clickUrl = a.native.link && a.native.link.url, r.native.clickTrackers = a.native.link && a.native.link.clicktrackers || [], r.native.impressionTrackers = a.native.imptrackers || [], r.native.jstracker = a.native.jstracker || [], r.width || (r.width = 0), r.height || (r.height = 0);
                                                        }
                                                    }
                                                }(r, a);
                                            }
                                    }), r.ext && r.ext.deal_channel && (a.dealChannel = p[r.ext.deal_channel] || null), a.meta = {}, r.ext && r.ext.dspid && (a.meta.networkId = r.ext.dspid), r.ext && r.ext.advid && (a.meta.buyerId = r.ext.advid), r.adomain && 0 < r.adomain.length && (a.meta.advertiserDomains = r.adomain, a.meta.clickUrl = r.adomain[0]), e.ext && e.ext.buyid && (a.adserverTargeting = { hb_buyid_pubmatic: e.ext.buyid }), i.push(a);
                                });
                            }));
                        } catch (e) {
                            T.logError(e);
                        }
                        return i;
                    },
                    getUserSyncs: function (e, r, a, t) {
                        var i = '' + k;
                        return a && (i += '&gdpr=' + (a.gdprApplies ? 1 : 0), i += '&gdpr_consent=' + encodeURIComponent(a.consentString || '')), t && (i += '&us_privacy=' + encodeURIComponent(t)), !0 === P.b.getConfig('coppa') && (i += '&coppa=1'), e.iframeEnabled ? [{
                                type: 'iframe',
                                url: 'https://ads.pubmatic.com/AdServer/js/showad.js#PIX&kdntuid=1&p=' + i
                            }] : [{
                                type: 'image',
                                url: 'https://image8.pubmatic.com/AdServer/ImgSync?p=' + i
                            }];
                    },
                    transformBidParams: function (e) {
                        return T.convertTypes({
                            publisherId: 'string',
                            adSlot: 'string'
                        }, e);
                    }
                };
                Object(t.registerBidder)(y);
            }
        }, [728]);
        pbjsChunk([161], {
            744: function (e, r, t) {
                e.exports = t(745);
            },
            745: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'spec', function () {
                    return i;
                });
                var c = t(0), n = t(1), p = t(11);
                function a() {
                    return (a = Object.assign || function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = arguments[r];
                            for (var n in t)
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var s = {
                        TITLE_LEN: 100,
                        DESCR_LEN: 200,
                        SPONSORED_BY_LEN: 50,
                        IMG_MIN: 150,
                        ICON_MIN: 50
                    }, d = [
                        'cp',
                        'ct',
                        'cf',
                        'video',
                        'battr',
                        'bcat',
                        'badv',
                        'bidfloor'
                    ], i = {
                        code: 'pulsepoint',
                        gvlid: 81,
                        aliases: [
                            'pulseLite',
                            'pulsepointLite'
                        ],
                        supportedMediaTypes: [
                            'banner',
                            'native',
                            'video'
                        ],
                        isBidRequestValid: function (e) {
                            return !!(e && e.params && e.params.cp && e.params.ct);
                        },
                        buildRequests: function (e, r) {
                            var t, n, i;
                            return {
                                method: 'POST',
                                url: 'https://bid.contextweb.com/header/ortb?src=prebid',
                                data: {
                                    id: e[0].bidderRequestId,
                                    imp: e.map(function (e) {
                                        return {
                                            id: (r = e).bidId,
                                            banner: function (e) {
                                                var r = function (e) {
                                                        var r = c.deepAccess(e, 'mediaTypes.banner.sizes');
                                                        return r && c.isArray(r) ? r.filter(function (e) {
                                                            return c.isArray(e) && 2 === e.length;
                                                        }).map(function (e) {
                                                            return {
                                                                w: e[0],
                                                                h: e[1]
                                                            };
                                                        }) : null;
                                                    }(e), t = function (e, r) {
                                                        if (e.params.cf) {
                                                            var t = e.params.cf.toUpperCase().split('X'), n = parseInt(e.params.cw || t[0], 10), i = parseInt(e.params.ch || t[1], 10);
                                                            return [
                                                                n,
                                                                i
                                                            ];
                                                        }
                                                        return r && 0 < r.length ? [
                                                            r[0].w,
                                                            r[0].h
                                                        ] : [
                                                            1,
                                                            1
                                                        ];
                                                    }(e, r);
                                                return e.mediaTypes && e.mediaTypes.banner ? {
                                                    w: t[0],
                                                    h: t[1],
                                                    battr: e.params.battr,
                                                    format: r
                                                } : null;
                                            }(r),
                                            native: function (e) {
                                                if (e.nativeParams) {
                                                    var r = [];
                                                    return u(r, function (e, r, t) {
                                                        return r ? {
                                                            id: e,
                                                            required: r.required ? 1 : 0,
                                                            title: { len: r.len || t }
                                                        } : null;
                                                    }(r.length + 1, e.nativeParams.title, s.TITLE_LEN)), u(r, l(r.length + 1, e.nativeParams.body, 2, s.DESCR_LEN)), u(r, l(r.length + 1, e.nativeParams.sponsoredBy, 1, s.SPONSORED_BY_LEN)), u(r, o(r.length + 1, e.nativeParams.icon, 1, s.ICON_MIN, s.ICON_MIN)), u(r, o(r.length + 1, e.nativeParams.image, 3, s.IMG_MIN, s.IMG_MIN)), {
                                                        request: JSON.stringify({ assets: r }),
                                                        ver: '1.1',
                                                        battr: e.params.battr
                                                    };
                                                }
                                                return null;
                                            }(r),
                                            tagid: r.params.ct.toString(),
                                            video: function (e) {
                                                return e.params.video ? a({}, e.params.video, { battr: e.params.battr }) : null;
                                            }(r),
                                            bidfloor: r.params.bidfloor,
                                            ext: function (r) {
                                                var t = {}, n = {};
                                                return d.forEach(function (e) {
                                                    return n[e] = 1;
                                                }), Object.keys(r.params).forEach(function (e) {
                                                    n[e] || (t[e] = r.params[e]);
                                                }), 0 < Object.keys(t).length ? { prebid: t } : null;
                                            }(r)
                                        };
                                        var r;
                                    }),
                                    site: (n = r, i = (t = e) && 0 < t.length ? t[0].params.cp : '0', t[0].params.app ? null : {
                                        publisher: { id: i.toString() },
                                        ref: function () {
                                            try {
                                                return window.top.document.referrer;
                                            } catch (e) {
                                                return document.referrer;
                                            }
                                        }(),
                                        page: n && n.refererInfo ? n.refererInfo.referer : ''
                                    }),
                                    app: function (e) {
                                        var r = e && 0 < e.length ? e[0].params.cp : '0', t = e[0].params.app;
                                        if (t)
                                            return {
                                                publisher: { id: r.toString() },
                                                bundle: t.bundle,
                                                storeurl: t.storeUrl,
                                                domain: t.domain
                                            };
                                        return null;
                                    }(e),
                                    device: {
                                        ua: navigator.userAgent,
                                        language: navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
                                    },
                                    bcat: e[0].params.bcat,
                                    badv: e[0].params.badv,
                                    user: function (e, r) {
                                        var t = {};
                                        r && r.gdprConsent && (t.consent = r.gdprConsent.consentString);
                                        {
                                            var n, i;
                                            e && e.userId && (t.eids = [], m(t.eids, e.userId.pubcid, 'pubcommon'), m(t.eids, e.userId.britepoolid, 'britepool.com'), m(t.eids, e.userId.criteoId, 'criteo'), m(t.eids, e.userId.idl_env, 'identityLink'), m(t.eids, c.deepAccess(e, 'userId.id5id.uid'), 'id5-sync.com', c.deepAccess(e, 'userId.id5id.ext')), m(t.eids, c.deepAccess(e, 'userId.parrableId.eid'), 'parrable.com'), e.userId.lipb && e.userId.lipb.lipbid && m(t.eids, e.userId.lipb.lipbid, 'liveintent.com'), m(t.eids, e.userId.tdid, 'adserver.org', { rtiPartner: 'TDID' }), (n = e.userId.digitrustid) && n.data && (i = {}, n.data.id && (i.id = n.data.id), n.data.keyv && (i.keyv = n.data.keyv), t.digitrust = i));
                                        }
                                        return { ext: t };
                                    }(e[0], r),
                                    regs: function (e) {
                                        if (e.gdprConsent || e.uspConsent) {
                                            var r = {};
                                            return e.gdprConsent && (r.gdpr = e.gdprConsent.gdprApplies ? 1 : 0), e.uspConsent && (r.us_privacy = e.uspConsent), { ext: r };
                                        }
                                        return null;
                                    }(r),
                                    source: function (e) {
                                        if (e)
                                            return { ext: { schain: e } };
                                        return null;
                                    }(e[0].schain)
                                },
                                bidderRequest: r
                            };
                        },
                        interpretResponse: function (e, r) {
                            return function (e, r) {
                                var a = {}, s = {}, d = {}, u = r.body;
                                e.data.imp.forEach(function (e) {
                                    a[e.id] = e;
                                }), u && u.seatbid.forEach(function (e) {
                                    return e.bid.forEach(function (e) {
                                        s[e.impid] = e;
                                    });
                                });
                                e.bidderRequest && e.bidderRequest.bids && e.bidderRequest.bids.forEach(function (e) {
                                    d[e.bidId] = e;
                                });
                                var o = [];
                                return Object.keys(a).forEach(function (e) {
                                    var r, t, n, i;
                                    s[e] && (r = {
                                        requestId: e,
                                        cpm: s[e].price,
                                        creative_id: s[e].crid,
                                        creativeId: s[e].crid,
                                        adId: e,
                                        ttl: s[e].exp || 20,
                                        netRevenue: !0,
                                        currency: u.cur || 'USD'
                                    }, a[e].video ? (d[e] && 'outstream' === c.deepAccess(d[e], 'mediaTypes.video.context') && (r.renderer = (t = c.deepAccess(d[e], 'renderer.options'), n = c.deepAccess(s[e], 'ext.outstream'), (i = p.a.install({
                                        url: n.rendererUrl,
                                        config: {
                                            defaultOptions: n.config,
                                            rendererOptions: t,
                                            type: n.type
                                        },
                                        loaded: !1
                                    })).setRender(function (r) {
                                        r.renderer.push(function () {
                                            var e = r.renderer.getConfig();
                                            new window.PulsePointOutstreamRenderer().render({
                                                adUnitCode: r.adUnitCode,
                                                vastXml: r.vastXml,
                                                type: e.type,
                                                defaultOptions: e.defaultOptions,
                                                rendererOptions: t
                                            });
                                        });
                                    }), i)), r.vastXml = s[e].adm, r.mediaType = 'video', r.width = s[e].w, r.height = s[e].h) : a[e].banner ? (r.ad = s[e].adm, r.width = s[e].w || a[e].banner.w, r.height = s[e].h || a[e].banner.h) : a[e].native && (r.native = function (e, r) {
                                        if (e.native) {
                                            var t = function (e) {
                                                    try {
                                                        if (e)
                                                            return JSON.parse(e);
                                                    } catch (e) {
                                                        c.logError('pulsepointLite.safeParse', 'ERROR', e);
                                                    }
                                                    return null;
                                                }(r.adm), n = {};
                                            if (t && t.native && t.native.assets)
                                                return t.native.assets.forEach(function (e) {
                                                    n.title = e.title ? e.title.text : n.title, n.body = e.data && 2 === e.data.type ? e.data.value : n.body, n.sponsoredBy = e.data && 1 === e.data.type ? e.data.value : n.sponsoredBy, n.image = e.img && 3 === e.img.type ? e.img.url : n.image, n.icon = e.img && 1 === e.img.type ? e.img.url : n.icon;
                                                }), t.native.link && (n.clickUrl = encodeURIComponent(t.native.link.url)), n.impressionTrackers = t.native.imptrackers, n;
                                        }
                                        return null;
                                    }(a[e], s[e]), r.mediaType = 'native'), o.push(r));
                                }), o;
                            }(r, e);
                        },
                        getUserSyncs: function (e) {
                            return e.iframeEnabled ? [{
                                    type: 'iframe',
                                    url: 'https://bh.contextweb.com/visitormatch'
                                }] : e.pixelEnabled ? [{
                                    type: 'image',
                                    url: 'https://bh.contextweb.com/visitormatch/prebid'
                                }] : void 0;
                        },
                        transformBidParams: function (e) {
                            return c.convertTypes({
                                cf: 'string',
                                cp: 'number',
                                ct: 'number'
                            }, e);
                        }
                    };
                function u(e, r) {
                    r && e.push(r);
                }
                function o(e, r, t, n, i) {
                    return r ? {
                        id: e,
                        required: r.required ? 1 : 0,
                        img: {
                            type: t,
                            wmin: r.wmin || n,
                            hmin: r.hmin || i
                        }
                    } : null;
                }
                function l(e, r, t, n) {
                    return r ? {
                        id: e,
                        required: r.required ? 1 : 0,
                        data: {
                            type: t,
                            len: r.len || n
                        }
                    } : null;
                }
                function m(e, r, t, n) {
                    var i;
                    r && (i = { id: r }, n && (i.ext = n), e.push({
                        source: t,
                        uids: [i]
                    }));
                }
                Object(n.registerBidder)(i);
            }
        }, [744]);
        pbjsChunk([139], {
            798: function (e, r, t) {
                e.exports = t(799);
            },
            799: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'spec', function () {
                    return x;
                }), r.hasVideoMediaType = j, t.d(r, 'resetRubiConf', function () {
                    return I;
                }), r.masSizeOrdering = O, r.determineRubiconVideoSizeId = C, r.getPriceGranularity = k, r.hasValidVideoParams = w, r.hasValidSupplyChainParams = R, r.encodeParam = z, r.resetUserSync = function () {
                    E = !1;
                };
                var l = t(0), i = t(1), u = t(3), m = t(2), n = t(10), p = t.n(n);
                function o(r, e) {
                    var t, i = Object.keys(r);
                    return Object.getOwnPropertySymbols && (t = Object.getOwnPropertySymbols(r), e && (t = t.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                    })), i.push.apply(i, t)), i;
                }
                function c(r) {
                    for (var e = 1; e < arguments.length; e++) {
                        var t = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? o(Object(t), !0).forEach(function (e) {
                            b(r, e, t[e]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(r, Object.getOwnPropertyDescriptors(t)) : o(Object(t)).forEach(function (e) {
                            Object.defineProperty(r, e, Object.getOwnPropertyDescriptor(t, e));
                        });
                    }
                    return r;
                }
                function d() {
                    return (d = Object.assign || function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = arguments[r];
                            for (var i in t)
                                Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function f(e, r) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, r) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var t = [], i = !0, n = !1, o = void 0;
                        try {
                            for (var a, s = e[Symbol.iterator](); !(i = (a = s.next()).done) && (t.push(a.value), !r || t.length !== r); i = !0);
                        } catch (e) {
                            n = !0, o = e;
                        } finally {
                            try {
                                i || null == s.return || s.return();
                            } finally {
                                if (n)
                                    throw o;
                            }
                        }
                        return t;
                    }(e, r) || function (e, r) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return a(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === t && e.constructor && (t = e.constructor.name);
                        if ('Map' === t || 'Set' === t)
                            return Array.from(e);
                        if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                            return a(e, r);
                    }(e, r) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function a(e, r) {
                    (null == r || r > e.length) && (r = e.length);
                    for (var t = 0, i = new Array(r); t < r; t++)
                        i[t] = e[t];
                    return i;
                }
                function b(e, r, t) {
                    return r in e ? Object.defineProperty(e, r, {
                        value: t,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[r] = t, e;
                }
                function g(e) {
                    return (g = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var v = {};
                u.b.getConfig('rubicon', function (e) {
                    l.mergeDeep(v, e.rubicon);
                });
                var y = {
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
                    552: '300x200'
                };
                l._each(y, function (e, r) {
                    return y[e] = r;
                });
                var x = {
                    code: 'rubicon',
                    gvlid: 52,
                    supportedMediaTypes: [
                        m.b,
                        m.d
                    ],
                    isBidRequestValid: function (e) {
                        if ('object' !== g(e.params))
                            return !1;
                        for (var r = 0, t = [
                                    'accountId',
                                    'siteId',
                                    'zoneId'
                                ]; r < t.length; r++)
                            if (e.params[t[r]] = parseInt(e.params[t[r]]), isNaN(e.params[t[r]]))
                                return l.logError('Rubicon: wrong format of accountId or siteId or zoneId.'), !1;
                        var i = S(e, !0);
                        return !!i && ('video' !== i || w(e));
                    },
                    buildRequests: function (e, c) {
                        var n, r = e.filter(function (e) {
                                return 'video' === S(e);
                            }).map(function (e) {
                                e.startTime = new Date().getTime();
                                var r, t, i, n = {
                                        id: e.transactionId,
                                        test: u.b.getConfig('debug') ? 1 : 0,
                                        cur: ['USD'],
                                        source: { tid: e.transactionId },
                                        tmax: c.timeout,
                                        imp: [{
                                                exp: u.b.getConfig('s2sConfig.defaultTtl'),
                                                id: e.adUnitCode,
                                                secure: 1,
                                                ext: b({}, e.bidder, e.params),
                                                video: l.deepAccess(e, 'mediaTypes.video') || {}
                                            }],
                                        ext: {
                                            prebid: {
                                                cache: { vastxml: { returnCreative: !0 === v.returnVast } },
                                                targeting: {
                                                    includewinners: !0,
                                                    includebidderkeys: !1,
                                                    pricegranularity: k(u.b)
                                                },
                                                bidders: { rubicon: { integration: v.int_type || 'pbjs' } }
                                            }
                                        }
                                    };
                                if ('rubicon' !== e.bidder && (n.ext.prebid.aliases = b({}, e.bidder, 'rubicon')), 'function' != typeof e.getFloor || v.disableFloors)
                                    r = parseFloat(l.deepAccess(e, 'params.floor'));
                                else {
                                    try {
                                        t = e.getFloor({
                                            currency: 'USD',
                                            mediaType: 'video',
                                            size: _(e, 'video')
                                        });
                                    } catch (e) {
                                        l.logError('Rubicon: getFloor threw an error: ', e);
                                    }
                                    r = 'object' !== g(t) || 'USD' !== t.currency || isNaN(parseInt(t.floor)) ? void 0 : parseFloat(t.floor);
                                }
                                isNaN(r) || (n.imp[0].bidfloor = r), n.imp[0].ext[e.bidder].video.size_id = C(e), function (r, t, e) {
                                    if (!r)
                                        return;
                                    'object' === g(u.b.getConfig('app')) ? r.app = u.b.getConfig('app') : r.site = { page: h(t, e) };
                                    'object' === g(u.b.getConfig('device')) && (r.device = u.b.getConfig('device'));
                                    t.params.video.language && [
                                        'site',
                                        'device'
                                    ].forEach(function (e) {
                                        r[e] && (r[e].content = d({ language: t.params.video.language }, r[e].content));
                                    });
                                }(n, e, c), function (e, r) {
                                    'object' === g(e.imp[0].video) && void 0 === e.imp[0].video.skip && (e.imp[0].video.skip = r.params.video.skip);
                                    'object' === g(e.imp[0].video) && void 0 === e.imp[0].video.skipafter && (e.imp[0].video.skipafter = r.params.video.skipdelay);
                                    'object' === g(e.imp[0].video) && void 0 === e.imp[0].video.pos && ('atf' === r.params.position ? e.imp[0].video.pos = 1 : 'btf' === r.params.position && (e.imp[0].video.pos = 3));
                                    var t = _(r, 'video');
                                    e.imp[0].video.w = t[0], e.imp[0].video.h = t[1];
                                }(n, e), c.gdprConsent && ('boolean' == typeof c.gdprConsent.gdprApplies && (i = c.gdprConsent.gdprApplies ? 1 : 0), l.deepSetValue(n, 'regs.ext.gdpr', i), l.deepSetValue(n, 'user.ext.consent', c.gdprConsent.consentString)), c.uspConsent && l.deepSetValue(n, 'regs.ext.us_privacy', c.uspConsent);
                                var o = l.deepAccess(c, 'bids.0.userIdAsEids');
                                o && o.length && l.deepSetValue(n, 'user.ext.eids', o);
                                var a = u.b.getConfig('user.id');
                                a && l.deepSetValue(n, 'user.id', a), !0 === u.b.getConfig('coppa') && l.deepSetValue(n, 'regs.coppa', 1), e.schain && R(e.schain) && l.deepSetValue(n, 'source.ext.schain', e.schain);
                                var s = u.b.getConfig('multibid');
                                return s && l.deepSetValue(n, 'ext.prebid.multibid', s.reduce(function (e, r) {
                                    var t = {};
                                    return Object.keys(r).forEach(function (e) {
                                        t[e.toLowerCase()] = r[e];
                                    }), e.push(t), e;
                                }, [])), A(e, m.d, n), e.storedAuctionResponse && l.deepSetValue(n.imp[0], 'ext.prebid.storedauctionresponse.id', e.storedAuctionResponse.toString()), l.deepSetValue(n.imp[0], 'ext.prebid.auctiontimestamp', c.auctionStart), {
                                    method: 'POST',
                                    url: 'https://'.concat(v.videoHost || 'prebid-server', '.rubiconproject.com/openrtb2/auction'),
                                    data: n,
                                    bidRequest: e
                                };
                            });
                        return !0 !== v.singleRequest ? r.concat(e.filter(function (e) {
                            return 'banner' === S(e);
                        }).map(function (e) {
                            var i = x.createSlotParams(e, c);
                            return {
                                method: 'GET',
                                url: 'https://'.concat(v.bannerHost || 'fastlane', '.rubiconproject.com/a/api/fastlane.json'),
                                data: x.getOrderedParams(i).reduce(function (e, r) {
                                    var t = i[r];
                                    return l.isStr(t) && '' !== t || l.isNumber(t) ? ''.concat(e).concat(z(r, t), '&') : e;
                                }, '') + 'slots=1&rand='.concat(Math.random()),
                                bidRequest: e
                            };
                        })) : (n = e.filter(function (e) {
                            return 'banner' === S(e);
                        }).reduce(function (e, r) {
                            return (e[r.params.siteId] = e[r.params.siteId] || []).push(r), e;
                        }, {}), r.concat(Object.keys(n).reduce(function (r, e) {
                            var t, i;
                            return t = n[e], i = 10, t.map(function (e, r) {
                                return r % i == 0 ? t.slice(r, r + i) : null;
                            }).filter(function (e) {
                                return e;
                            }).forEach(function (e) {
                                var i = x.combineSlotUrlParams(e.map(function (e) {
                                    return x.createSlotParams(e, c);
                                }));
                                r.push({
                                    method: 'GET',
                                    url: 'https://'.concat(v.bannerHost || 'fastlane', '.rubiconproject.com/a/api/fastlane.json'),
                                    data: x.getOrderedParams(i).reduce(function (e, r) {
                                        var t = i[r];
                                        return l.isStr(t) && '' !== t || l.isNumber(t) ? ''.concat(e).concat(z(r, t), '&') : e;
                                    }, '') + 'slots='.concat(e.length, '&rand=').concat(Math.random()),
                                    bidRequest: e
                                });
                            }), r;
                        }, [])));
                    },
                    getOrderedParams: function (e) {
                        var r = /^tg_v/, t = /^tg_i/, i = /^eid_|^tpid_/, n = [
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
                                return i.test(e);
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
                        return n.concat(Object.keys(e).filter(function (e) {
                            return -1 === n.indexOf(e);
                        }));
                    },
                    combineSlotUrlParams: function (n) {
                        if (1 === n.length)
                            return n[0];
                        var i = n.reduce(function (r, t, i) {
                                return Object.keys(t).forEach(function (e) {
                                    r.hasOwnProperty(e) || (r[e] = new Array(n.length)), r[e].splice(i, 1, t[e]);
                                }), r;
                            }, {}), o = new RegExp('^([^;]*)(;\\1)+$');
                        return Object.keys(i).forEach(function (e) {
                            var r = i[e].join(';'), t = r.match(o);
                            i[e] = t ? t[1] : r;
                        }), i;
                    },
                    createSlotParams: function (e, r) {
                        e.startTime = new Date().getTime();
                        var t, i = e.params, n = _(e, 'banner'), o = f(i.latLong || [], 2), a = o[0], s = o[1], c = {
                                account_id: i.accountId,
                                site_id: i.siteId,
                                zone_id: i.zoneId,
                                size_id: n[0],
                                alt_size_ids: n.slice(1).join(',') || void 0,
                                rp_floor: 0.01 <= (i.floor = parseFloat(i.floor)) ? i.floor : void 0,
                                rp_secure: '1',
                                tk_flint: ''.concat(v.int_type || 'pbjs_lite', '_v4.34.0'),
                                'x_source.tid': e.transactionId,
                                'x_source.pchain': i.pchain,
                                p_screen_res: [
                                    window.screen.width,
                                    window.screen.height
                                ].join('x'),
                                tk_user_key: i.userId,
                                'p_geo.latitude': isNaN(parseFloat(a)) ? void 0 : parseFloat(a).toFixed(4),
                                'p_geo.longitude': isNaN(parseFloat(s)) ? void 0 : parseFloat(s).toFixed(4),
                                'tg_fl.eid': e.code,
                                rf: h(e, r)
                            };
                        if ('function' == typeof e.getFloor && !v.disableFloors) {
                            try {
                                t = e.getFloor({
                                    currency: 'USD',
                                    mediaType: 'banner',
                                    size: '*'
                                });
                            } catch (e) {
                                l.logError('Rubicon: getFloor threw an error: ', e);
                            }
                            c.rp_hard_floor = 'object' !== g(t) || 'USD' !== t.currency || isNaN(parseInt(t.floor)) ? void 0 : t.floor;
                        }
                        c.p_pos = 'atf' === i.position || 'btf' === i.position ? i.position : '';
                        var d = u.b.getConfig('user.id');
                        return d && (c.ppuid = d), e.userIdAsEids && e.userIdAsEids.forEach(function (r) {
                            try {
                                var e;
                                'adserver.org' === r.source ? (c.tpid_tdid = r.uids[0].id, c['eid_adserver.org'] = r.uids[0].id) : 'liveintent.com' === r.source ? (c['tpid_liveintent.com'] = r.uids[0].id, c['eid_liveintent.com'] = r.uids[0].id, r.ext && Array.isArray(r.ext.segments) && r.ext.segments.length && (c['tg_v.LIseg'] = r.ext.segments.join(','))) : 'liveramp.com' === r.source ? c.x_liverampidl = r.uids[0].id : 'sharedid.org' === r.source ? c['eid_sharedid.org'] = ''.concat(r.uids[0].id, '^').concat(r.uids[0].atype, '^').concat(r.uids[0].ext && r.uids[0].ext.third || '') : 'id5-sync.com' === r.source ? c['eid_id5-sync.com'] = ''.concat(r.uids[0].id, '^').concat(r.uids[0].atype, '^').concat(r.uids[0].ext && r.uids[0].ext.linkType || '') : c['eid_'.concat(r.source)] = ''.concat(r.uids[0].id, '^').concat(r.uids[0].atype || ''), c.ppuid || (e = p()(r.uids, function (e) {
                                    return e.ext && 'ppuid' === e.ext.stype;
                                })) && e.id && (c.ppuid = e.id);
                            } catch (e) {
                                l.logWarn('Rubicon: error reading eid:', r, e);
                            }
                        }), r.gdprConsent && ('boolean' == typeof r.gdprConsent.gdprApplies && (c.gdpr = Number(r.gdprConsent.gdprApplies)), c.gdpr_consent = r.gdprConsent.consentString), r.uspConsent && (c.us_privacy = encodeURIComponent(r.uspConsent)), c.rp_maxbids = r.bidLimit || 1, A(e, m.b, c), !0 === u.b.getConfig('coppa') && (c.coppa = 1), e.schain && R(e.schain) && (c.rp_schain = x.serializeSupplyChain(e.schain)), c;
                    },
                    serializeSupplyChain: function (e) {
                        if (!R(e))
                            return '';
                        var r = e.ver, t = e.complete, i = e.nodes;
                        return ''.concat(r, ',').concat(t, '!').concat(x.serializeSupplyChainNodes(i));
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
                        if (!(c = c.body) || 'object' !== g(c))
                            return [];
                        if (c.seatbid) {
                            var r = l.deepAccess(c, 'ext.errors.rubicon');
                            Array.isArray(r) && 0 < r.length && l.logWarn('Rubicon: Error in video response');
                            var o = [];
                            return c.seatbid.forEach(function (n) {
                                (n.bid || []).forEach(function (e) {
                                    var r = {
                                        requestId: d.bidId,
                                        currency: c.cur || 'USD',
                                        creativeId: e.crid,
                                        cpm: e.price || 0,
                                        bidderCode: n.seat,
                                        ttl: 300,
                                        netRevenue: !1 !== v.netRevenue,
                                        width: e.w || l.deepAccess(d, 'mediaTypes.video.w') || l.deepAccess(d, 'params.video.playerWidth'),
                                        height: e.h || l.deepAccess(d, 'mediaTypes.video.h') || l.deepAccess(d, 'params.video.playerHeight')
                                    };
                                    e.id && (r.seatBidId = e.id), e.dealid && (r.dealId = e.dealid), e.adomain && l.deepSetValue(r, 'meta.advertiserDomains', Array.isArray(e.adomain) ? e.adomain : [e.adomain]), l.deepAccess(e, 'ext.bidder.rp.advid') && l.deepSetValue(r, 'meta.advertiserId', e.ext.bidder.rp.advid);
                                    var t, i = l.deepAccess(c, 'ext.responsetimemillis.rubicon');
                                    d && i && (d.serverResponseTimeMs = i), l.deepAccess(e, 'ext.prebid.type') === m.d ? (r.mediaType = m.d, l.deepSetValue(r, 'meta.mediaType', m.d), (t = l.deepAccess(e, 'ext.prebid.targeting')) && 'object' === g(t) && (r.adserverTargeting = t), e.ext.prebid.cache && 'object' === g(e.ext.prebid.cache.vastXml) && e.ext.prebid.cache.vastXml.cacheId && e.ext.prebid.cache.vastXml.url ? (r.videoCacheKey = e.ext.prebid.cache.vastXml.cacheId, r.vastUrl = e.ext.prebid.cache.vastXml.url) : t && t.hb_uuid && t.hb_cache_host && t.hb_cache_path && (r.videoCacheKey = t.hb_uuid, r.vastUrl = 'https://'.concat(t.hb_cache_host).concat(t.hb_cache_path, '?uuid=').concat(t.hb_uuid)), e.adm && (r.vastXml = e.adm), e.nurl && (r.vastUrl = e.nurl), !r.vastUrl && e.nurl && (r.vastUrl = e.nurl)) : l.logWarn('Rubicon: video response received non-video media type'), o.push(r);
                                });
                            }), o;
                        }
                        var u, t = c.ads, p = 0;
                        return 'object' !== g(d) || Array.isArray(d) || 'video' !== S(d) || 'object' !== g(t) || (t = t[d.adUnitCode]), !Array.isArray(t) || t.length < 1 ? [] : t.reduce(function (e, r, t) {
                            if (r.impression_id && u === r.impression_id ? p++ : u = r.impression_id, 'ok' !== r.status)
                                return e;
                            var i, n, o, a, s = Array.isArray(d) ? d[t - p] : d;
                            return s && 'object' === g(s) ? (i = {
                                requestId: s.bidId,
                                currency: 'USD',
                                creativeId: r.creative_id || ''.concat(r.network || '', '-').concat(r.advertiser || ''),
                                cpm: r.cpm || 0,
                                dealId: r.deal,
                                ttl: 60,
                                netRevenue: !1 !== v.netRevenue,
                                rubicon: {
                                    advertiserId: r.advertiser,
                                    networkId: r.network
                                },
                                meta: {
                                    advertiserId: r.advertiser,
                                    networkId: r.network,
                                    mediaType: m.b
                                }
                            }, r.creative_type && (i.mediaType = r.creative_type), r.adomain && (i.meta.advertiserDomains = Array.isArray(r.adomain) ? r.adomain : [r.adomain]), r.creative_type === m.d ? (i.width = s.params.video.playerWidth, i.height = s.params.video.playerHeight, i.vastUrl = r.creative_depot_url, i.impression_id = r.impression_id, i.videoCacheKey = r.impression_id) : (i.ad = (o = r.script, a = r.impression_id, '<html>\n<head><script type=\'text/javascript\'>inDapIF=true;</script></head>\n<body style=\'margin : 0; padding: 0;\'>\n<!-- Rubicon Project Ad Tag -->\n<div data-rp-impression-id=\''.concat(a, '\'>\n<script type=\'text/javascript\'>').concat(o, '</script>\n</div>\n</body>\n</html>')), n = f(y[r.size_id].split('x').map(function (e) {
                                return Number(e);
                            }), 2), i.width = n[0], i.height = n[1]), i.rubiconTargeting = (Array.isArray(r.targeting) ? r.targeting : []).reduce(function (e, r) {
                                return e[r.key] = r.values[0], e;
                            }, { rpfl_elemid: s.adUnitCode }), e.push(i)) : l.logError('Rubicon: bidRequest undefined at index position:'.concat(t), d, c), e;
                        }, []).sort(function (e, r) {
                            return (r.cpm || 0) - (e.cpm || 0);
                        });
                    },
                    getUserSyncs: function (e, r, t, i) {
                        if (!E && e.iframeEnabled) {
                            var n = '';
                            return t && 'string' == typeof t.consentString && ('boolean' == typeof t.gdprApplies ? n += '?gdpr='.concat(Number(t.gdprApplies), '&gdpr_consent=').concat(t.consentString) : n += '?gdpr_consent='.concat(t.consentString)), i && (n += ''.concat(n ? '&' : '?', 'us_privacy=').concat(encodeURIComponent(i))), E = !0, {
                                type: 'iframe',
                                url: 'https://'.concat(v.syncHost || 'eus', '.rubiconproject.com/usync.html') + n
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
                function h(e, r) {
                    var t = u.b.getConfig('pageUrl'), t = e.params.referrer ? e.params.referrer : t || r.refererInfo.referer;
                    return e.params.secure ? t.replace(/^http:/i, 'https:') : t;
                }
                function _(e, r) {
                    var t = e.params;
                    if ('video' === r) {
                        var i = [];
                        return t.video && t.video.playerWidth && t.video.playerHeight ? i = [
                            t.video.playerWidth,
                            t.video.playerHeight
                        ] : Array.isArray(l.deepAccess(e, 'mediaTypes.video.playerSize')) && 1 === e.mediaTypes.video.playerSize.length ? i = e.mediaTypes.video.playerSize[0] : Array.isArray(e.sizes) && 0 < e.sizes.length && Array.isArray(e.sizes[0]) && 1 < e.sizes[0].length && (i = e.sizes[0]), i;
                    }
                    var n = [];
                    return Array.isArray(t.sizes) ? n = t.sizes : void 0 !== l.deepAccess(e, 'mediaTypes.banner.sizes') ? n = s(e.mediaTypes.banner.sizes) : Array.isArray(e.sizes) && 0 < e.sizes.length ? n = s(e.sizes) : l.logWarn('Rubicon: no sizes are setup or found'), O(n);
                }
                function A(e, r, o) {
                    var t = {
                        user: { ext: { data: c({}, e.params.visitor) } },
                        site: { ext: { data: c({}, e.params.inventory) } }
                    };
                    e.params.keywords && (t.site.keywords = l.isArray(e.params.keywords) ? e.params.keywords.join(',') : e.params.keywords);
                    function i(e, r, t) {
                        var i = function (e, r) {
                                if ('data' === r && Array.isArray(e))
                                    return e.filter(function (e) {
                                        return e.segment && l.deepAccess(e, 'ext.taxonomyname').match(/iab/i);
                                    }).map(function (e) {
                                        var r = e.segment.filter(function (e) {
                                            return e.id;
                                        }).reduce(function (e, r) {
                                            return e.push(r.id), e;
                                        }, []);
                                        if (0 < r.length)
                                            return r.toString();
                                    }).toString();
                                if ('object' !== g(e) || Array.isArray(e)) {
                                    if (void 0 !== e)
                                        return Array.isArray(e) ? e.filter(function (e) {
                                            return 'object' !== g(e) && void 0 !== e ? e.toString() : void l.logWarn('Rubicon: Filtered value: ', e, 'for key', r, ': Expected value to be string, integer, or an array of strings/ints');
                                        }).toString() : e.toString();
                                } else
                                    l.logWarn('Rubicon: Filtered FPD key: ', r, ': Expected value to be string, integer, or an array of strings/ints');
                            }(e, t), n = s[t] ? ''.concat(s[t]) : 'data' === t ? ''.concat(s[r], 'iab') : ''.concat(s[r]).concat(t);
                        o[n] = o[n] ? o[n].concat(',', i) : i;
                    }
                    var n = l.mergeDeep({}, u.b.getConfig('ortb2') || {}, t), a = l.deepAccess(e.ortb2Imp, 'ext.data') || {}, s = {
                            user: 'tg_v.',
                            site: 'tg_i.',
                            adserver: 'tg_i.dfp_ad_unit_code',
                            pbadslot: 'tg_i.pbadslot',
                            keywords: 'kw'
                        };
                    Object.keys(a).forEach(function (r) {
                        'adserver' === r ? [
                            'name',
                            'adslot'
                        ].forEach(function (e) {
                            a[r][e] && (a[r][e] = a[r][e].replace(/^\/+/, ''));
                        }) : 'pbadslot' === r && (a[r] = a[r].replace(/^\/+/, ''));
                    }), r === m.b ? ([
                        'site',
                        'user'
                    ].forEach(function (r) {
                        Object.keys(n[r]).forEach(function (e) {
                            'ext' !== e ? i(n[r][e], r, e) : n[r][e].data && Object.keys(n[r].ext.data).forEach(function (e) {
                                i(n[r].ext.data[e], r, e);
                            });
                        });
                    }), Object.keys(a).forEach(function (e) {
                        'adserver' === e ? i(a[e].adslot, name, e) : i(a[e], 'site', e);
                    })) : (Object.keys(a).length && l.mergeDeep(o.imp[0].ext, { data: a }), l.mergeDeep(o, n));
                }
                function s(e) {
                    return l.parseSizesInput(e).reduce(function (e, r) {
                        var t = parseInt(y[r], 10);
                        return t && e.push(t), e;
                    }, []);
                }
                function j(e) {
                    return 'object' === g(l.deepAccess(e, 'params.video')) && void 0 !== l.deepAccess(e, 'mediaTypes.'.concat(m.d));
                }
                function S(e, r) {
                    var t = 1 < arguments.length && void 0 !== r && r;
                    return j(e) ? -1 === [
                        'outstream',
                        'instream'
                    ].indexOf(l.deepAccess(e, 'mediaTypes.'.concat(m.d, '.context'))) ? void (t && l.logError('Rubicon: mediaTypes.video.context must be outstream or instream')) : _(e, 'video').length < 2 ? void (t && l.logError('Rubicon: could not determine the playerSize of the video')) : (t && l.logMessage('Rubicon: making video request for adUnit', e.adUnitCode), 'video') : 0 === _(e, 'banner').length ? void (t && l.logError('Rubicon: could not determine the sizes for banner request')) : (t && l.logMessage('Rubicon: making banner request for adUnit', e.adUnitCode), 'banner');
                }
                var I = function () {
                    return v = {};
                };
                function O(e) {
                    var n = [
                        15,
                        2,
                        9
                    ];
                    return e.sort(function (e, r) {
                        var t = n.indexOf(e), i = n.indexOf(r);
                        return -1 < t || -1 < i ? -1 === t ? 1 : -1 === i ? -1 : t - i : e - r;
                    });
                }
                function C(e) {
                    var r = parseInt(l.deepAccess(e, 'params.video.size_id'));
                    return isNaN(r) ? 'outstream' === l.deepAccess(e, 'mediaTypes.'.concat(m.d, '.context')) ? 203 : 201 : r;
                }
                function k(e) {
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
                function w(r) {
                    var t = !0, e = Object.prototype.toString.call([]), i = {
                            mimes: e,
                            protocols: e,
                            linearity: Object.prototype.toString.call(0),
                            api: e
                        };
                    return Object.keys(i).forEach(function (e) {
                        Object.prototype.toString.call(l.deepAccess(r, 'mediaTypes.video.' + e)) !== i[e] && (t = !1, l.logError('Rubicon: mediaTypes.video.' + e + ' is required and must be of type: ' + i[e]));
                    }), t;
                }
                function R(e) {
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
                function z(e, r) {
                    return 'rp_schain' === e ? 'rp_schain='.concat(r) : ''.concat(e, '=').concat(encodeURIComponent(r));
                }
                var E = !1;
                Object(i.registerBidder)(x);
            }
        }, [798]);
        pbjsChunk([130], {
            820: function (e, t, r) {
                e.exports = r(821);
            },
            821: function (e, t, r) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), r.d(t, 'sharethroughInternal', function () {
                    return o;
                }), r.d(t, 'sharethroughAdapterSpec', function () {
                    return c;
                });
                var n = r(1), d = r(0);
                function i() {
                    return (i = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var a = 'sharethrough', s = [
                        1,
                        1
                    ], o = {
                        b64EncodeUnicode: p,
                        handleIframe: function () {
                            var e = !1;
                            if (!window.lockedInFrame) {
                                var t = document.createElement('script');
                                t.src = 'https://native.sharethrough.com/assets/sfp-set-targeting.js', t.type = 'text/javascript';
                                try {
                                    window.document.getElementsByTagName('body')[0].appendChild(t), e = !0;
                                } catch (e) {
                                    d.logError('Trouble writing frame buster script, error details:', e);
                                }
                            }
                            if (!(e ? window.top.STR && window.top.STR.Tag : window.STR && window.STR.Tag)) {
                                var r = document.createElement('script');
                                r.src = 'https://native.sharethrough.com/assets/sfp.js', r.type = 'text/javascript';
                                try {
                                    e ? window.top.document.getElementsByTagName('body')[0].appendChild(r) : window.document.getElementsByTagName('body')[0].appendChild(r);
                                } catch (e) {
                                    d.logError('Trouble writing sfp script, error details:', e);
                                }
                            }
                        },
                        isLockedInFrame: function () {
                            window.lockedInFrame = !1;
                            try {
                                window.lockedInFrame = !window.top.document;
                            } catch (e) {
                                window.lockedInFrame = e instanceof DOMException;
                            }
                        },
                        getProtocol: function () {
                            return document.location.protocol;
                        }
                    }, c = {
                        code: a,
                        isBidRequestValid: function (e) {
                            return !!e.params.pkey && e.bidder === a;
                        },
                        buildRequests: function (e, n) {
                            return e.map(function (e) {
                                var t = {
                                    placement_key: e.params.pkey,
                                    bidId: e.bidId,
                                    consent_required: !1,
                                    instant_play_capable: function () {
                                        var e = navigator.userAgent;
                                        if (!e)
                                            return !1;
                                        var t = /Android/i.test(e), r = /iPhone|iPad|iPod/i.test(e), n = parseInt((/Chrome\/([0-9]+)/.exec(e) || [
                                                0,
                                                0
                                            ])[1]), i = parseInt((/CriOS\/([0-9]+)/.exec(e) || [
                                                0,
                                                0
                                            ])[1]), a = parseInt((/Version\/([0-9]+)/.exec(e) || [
                                                0,
                                                0
                                            ])[1]);
                                        return !!(t && 53 <= n || r && (10 <= a || 53 <= i) || !t && !r);
                                    }(),
                                    hbSource: 'prebid',
                                    hbVersion: '4.34.0',
                                    strVersion: '3.3.1'
                                };
                                i(t, function (e) {
                                    if (!e.userId)
                                        return {};
                                    var t = {}, r = d.deepAccess(e, 'userId.tdid');
                                    r && (t.ttduid = r);
                                    var n = d.deepAccess(e, 'userId.pubcid') || d.deepAccess(e, 'crumbs.pubcid');
                                    n && (t.pubcid = n);
                                    var i = d.deepAccess(e, 'userId.idl_env');
                                    i && (t.idluid = i);
                                    var a = d.deepAccess(e, 'userId.id5id.uid');
                                    {
                                        var s;
                                        a && (t.id5uid = { id: a }, (s = d.deepAccess(e, 'userId.id5id.ext.linkType')) && (t.id5uid.linkType = s));
                                    }
                                    var o = d.deepAccess(e, 'userId.lipb.lipbid');
                                    o && (t.liuid = o);
                                    var c = d.deepAccess(e, 'userId.sharedid');
                                    c && (t.shduid = c);
                                    return t;
                                }(e));
                                var r = o.getProtocol().indexOf('http') < 0;
                                return t.secure = r || -1 < o.getProtocol().indexOf('https'), n && n.gdprConsent && n.gdprConsent.consentString && (t.consent_string = n.gdprConsent.consentString), n && n.gdprConsent && (t.consent_required = !!n.gdprConsent.gdprApplies), n && n.uspConsent && (t.us_privacy = n.uspConsent), e.schain && (t.schain = JSON.stringify(e.schain)), e.bidfloor && (t.bidfloor = parseFloat(e.bidfloor)), e.params.badv && (t.badv = e.params.badv), e.params.bcat && (t.bcat = e.params.bcat), {
                                    method: 'POST',
                                    url: 'https://btlr.sharethrough.com/WYu2BXv1/v1',
                                    data: t,
                                    strData: {
                                        skipIframeBusting: e.params.iframe,
                                        iframeSize: e.params.iframeSize,
                                        sizes: e.sizes
                                    }
                                };
                            });
                        },
                        interpretResponse: function (e, t) {
                            var r = e.body;
                            if (!r || !r.creatives || !r.creatives.length)
                                return [];
                            var n = r.creatives[0], i = s;
                            function a(e) {
                                return e[0] * e[1];
                            }
                            return (t.strData.iframeSize || t.strData.sizes.length) && (i = t.strData.iframeSize ? t.strData.iframeSize : t.strData.sizes.reduce(function (e, t) {
                                return a(t) > a(e) ? t : e;
                            })), [{
                                    requestId: t.data.bidId,
                                    width: i[0],
                                    height: i[1],
                                    cpm: n.cpm,
                                    creativeId: n.creative.creative_key,
                                    dealId: n.creative.deal_id,
                                    currency: 'USD',
                                    netRevenue: !0,
                                    ttl: 360,
                                    ad: function (e, t) {
                                        var r = 'str_response_'.concat(t.data.bidId), n = '\n    <div data-str-native-key="'.concat(t.data.placement_key, '" data-stx-response-name="').concat(r, '">\n    </div>\n    <script>var ').concat(r, ' = "').concat(p(JSON.stringify(e)), '"</script>\n  ');
                                        t.strData.skipIframeBusting ? n += '<script src="https://native.sharethrough.com/assets/sfp.js"></script>' : n += '\n      <script>\n        ('.concat(o.isLockedInFrame.toString(), ')()\n      </script>\n      <script>\n        (').concat(o.handleIframe.toString(), ')()\n      </script>');
                                        return n;
                                    }(r, t)
                                }];
                        },
                        getUserSyncs: function (e, t, r, n) {
                            var i = n ? '&us_privacy='.concat(n) : '', a = [];
                            return e.pixelEnabled && 0 < t.length && t[0].body && t[0].body.cookieSyncUrls && t[0].body.cookieSyncUrls.forEach(function (e) {
                                a.push({
                                    type: 'image',
                                    url: e + i
                                });
                            }), a;
                        },
                        onTimeout: function () {
                        },
                        onBidWon: function () {
                        },
                        onSetTargeting: function () {
                        }
                    };
                function p(e) {
                    return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
                        return String.fromCharCode('0x' + t);
                    }));
                }
                Object(n.registerBidder)(c);
            }
        }, [820]);
        pbjsChunk([118], {
            852: function (e, r, t) {
                e.exports = t(853);
            },
            853: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'spec', function () {
                    return s;
                });
                var c = t(0), a = t(1), p = t(3), u = t(2);
                function l(e, r) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, r) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var t = [], a = !0, n = !1, i = void 0;
                        try {
                            for (var s, o = e[Symbol.iterator](); !(a = (s = o.next()).done) && (t.push(s.value), !r || t.length !== r); a = !0);
                        } catch (e) {
                            n = !0, i = e;
                        } finally {
                            try {
                                a || null == o.return || o.return();
                            } finally {
                                if (n)
                                    throw i;
                            }
                        }
                        return t;
                    }(e, r) || function (e, r) {
                        if (!e)
                            return;
                        if ('string' == typeof e)
                            return n(e, r);
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === t && e.constructor && (t = e.constructor.name);
                        if ('Map' === t || 'Set' === t)
                            return Array.from(e);
                        if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                            return n(e, r);
                    }(e, r) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function n(e, r) {
                    (null == r || r > e.length) && (r = e.length);
                    for (var t = 0, a = new Array(r); t < r; t++)
                        a[t] = e[t];
                    return a;
                }
                var o = 'sortable', d = 'https://c.deployads.com';
                function m(e, r) {
                    return e.required && (r.required = 1), r;
                }
                function y(e) {
                    return e.w || e.h ? {
                        url: e.url,
                        width: e.w,
                        height: e.h
                    } : e.url;
                }
                function i(e, r, t) {
                    c._each(e, function (e) {
                        e.body && e.body.ext && e.body.ext.sync_dsps && e.body.ext.sync_dsps.length && c._each(e.body.ext.sync_dsps, function (e) {
                            e[0] === r && e[1] && t.push({
                                type: r,
                                url: e[1]
                            });
                        });
                    });
                }
                var s = {
                    code: o,
                    supportedMediaTypes: [
                        u.b,
                        u.c,
                        u.d
                    ],
                    isBidRequestValid: function (r) {
                        var e = p.b.getConfig('sortable'), t = e && !!e.siteId || r.params.siteId, a = !r.params.floor || c.isNumber(r.params.floor), n = /\d+x\d+/, i = !r.params.floorSizeMap || c.isPlainObject(r.params.floorSizeMap) && Object.keys(r.params.floorSizeMap).every(function (e) {
                                return e.match(n) && c.isNumber(r.params.floorSizeMap[e]);
                            }), s = !r.params.keywords || c.isPlainObject(r.params.keywords) && Object.keys(r.params.keywords).every(function (e) {
                                return c.isStr(e) && c.isStr(r.params.keywords[e]);
                            }), o = !r.mediaTypes || r.mediaTypes[u.b] || !(r.mediaTypes[u.c] || r.mediaTypes[u.d]), d = o ? c.deepAccess(r, 'mediaType.'.concat(u.b, '.sizes')) || r.sizes : null;
                        return !!(r.params.tagId && t && a && i && s && (!o || d && 0 < d.length && d.every(function (e) {
                            return 2 == e.length && e.every(function (e) {
                                return c.isNumber(e);
                            });
                        })));
                    },
                    buildRequests: function (e, r) {
                        var t = (p.b.getConfig('sortable') || {}).siteId, a = c.parseUrl(r.refererInfo.referer), n = c._map(e, function (e) {
                                var r, t, a, n, i = {
                                        id: e.bidId,
                                        tagid: e.params.tagId,
                                        ext: {}
                                    }, s = c.deepAccess(e, 'mediaTypes.'.concat(u.b)), o = c.deepAccess(e, 'mediaTypes.'.concat(u.c)), d = c.deepAccess(e, 'mediaTypes.'.concat(u.d));
                                return !s && (o || d) || (r = s && s.sizes || e.sizes, i.banner = {
                                    format: c._map(r, function (e) {
                                        var r = l(e, 2);
                                        return {
                                            w: r[0],
                                            h: r[1]
                                        };
                                    })
                                }), o && (i.native = function (e) {
                                    var r = [], t = e.title;
                                    t && r.push(m(t, { title: { len: t.len } }));
                                    var a = e.image;
                                    a && r.push(m(a, {
                                        img: {
                                            type: 3,
                                            wmin: 1,
                                            hmin: 1
                                        }
                                    }));
                                    var n = e.icon;
                                    n && r.push(m(n, {
                                        img: {
                                            type: 1,
                                            wmin: 1,
                                            hmin: 1
                                        }
                                    }));
                                    var i = e.body;
                                    i && r.push(m(i, { data: { type: 2 } }));
                                    var s = e.cta;
                                    s && r.push(m(s, { data: { type: 12 } }));
                                    var o = e.sponsoredBy;
                                    return o && r.push(m(o, { data: { type: 1 } })), c._each(r, function (e, r) {
                                        return e.id = r;
                                    }), {
                                        ver: '1',
                                        request: JSON.stringify({
                                            ver: '1',
                                            assets: r
                                        })
                                    };
                                }(o)), d && 'instream' === d.context && ((t = { placement: 1 }).mimes = d.mimes || [], t.minduration = c.deepAccess(e, 'params.video.minduration') || 10, t.maxduration = c.deepAccess(e, 'params.video.maxduration') || 60, null != (a = c.deepAccess(e, 'params.video.startdelay')) && (t.startdelay = a), d.playerSize && d.playerSize.length && (n = d.playerSize[0], t.w = n[0], t.h = n[1]), d.api && (t.api = d.api), d.protocols && (t.protocols = d.protocols), d.playbackmethod && (t.playbackmethod = d.playbackmethod), i.video = t), e.params.floor && (i.bidfloor = e.params.floor), e.params.keywords && (i.ext.keywords = e.params.keywords), e.params.bidderParams && c._each(e.params.bidderParams, function (e, r) {
                                    i.ext[r] = e;
                                }), e.params.floorSizeMap && (i.ext.floorSizeMap = e.params.floorSizeMap), i;
                            }), i = r && r.gdprConsent, s = {
                                id: c.getUniqueIdentifierStr(),
                                imp: n,
                                source: { ext: { schain: e[0].schain } },
                                regs: { ext: {} },
                                site: {
                                    domain: a.hostname,
                                    page: a.href,
                                    ref: a.href,
                                    publisher: { id: t || e[0].params.siteId },
                                    device: {
                                        w: screen.width,
                                        h: screen.height
                                    }
                                }
                            };
                        return r && 0 < r.timeout && (s.tmax = r.timeout), i && (s.user = { ext: { consent: i.consentString } }, 'boolean' == typeof i.gdprApplies && (s.regs.ext.gdpr = i.gdprApplies ? 1 : 0)), r.uspConsent && (s.regs.ext.us_privacy = r.uspConsent), {
                            method: 'POST',
                            url: ''.concat(d, '/openrtb2/auction?src=prebid_prebid_4.34.0&host=').concat(a.hostname),
                            data: JSON.stringify(s),
                            options: { contentType: 'text/plain' }
                        };
                    },
                    interpretResponse: function (e) {
                        var r = e.body, t = r.id, a = r.seatbid, s = [];
                        return t && a && c._each(a, function (e) {
                            c._each(e.bid, function (e) {
                                var r, t, a = {
                                        requestId: e.impid,
                                        cpm: parseFloat(e.price),
                                        width: parseInt(e.w),
                                        height: parseInt(e.h),
                                        creativeId: e.crid || e.id,
                                        dealId: e.dealid || null,
                                        currency: 'USD',
                                        netRevenue: !0,
                                        mediaType: u.b,
                                        ttl: 60
                                    };
                                if (e.adm) {
                                    var n = c.deepAccess(e, 'ext.ad_format');
                                    if ('native' === n) {
                                        var i = function (e) {
                                            var r = null;
                                            try {
                                                r = JSON.parse(e);
                                            } catch (e) {
                                                c.logError('Sortable bid adapter unable to parse native bid response:\n\n' + e);
                                            }
                                            return r && r.native;
                                        }(e.adm);
                                        if (!i)
                                            return;
                                        a.mediaType = u.c, a.native = (t = {}, (r = i).link && (t.clickUrl = r.link.url), c._each(r.assets, function (e) {
                                            switch (e.id) {
                                            case 1:
                                                t.title = e.title.text;
                                                break;
                                            case 2:
                                                t.image = y(e.img);
                                                break;
                                            case 3:
                                                t.icon = y(e.img);
                                                break;
                                            case 4:
                                                t.body = e.data.value;
                                                break;
                                            case 5:
                                                t.cta = e.data.value;
                                                break;
                                            case 6:
                                                t.sponsoredBy = e.data.value;
                                            }
                                        }), t);
                                    } else
                                        'instream' === n ? (a.mediaType = u.d, a.vastXml = e.adm) : (a.mediaType = u.b, a.ad = e.adm, e.nurl && (a.ad += c.createTrackPixelHtml(decodeURIComponent(e.nurl))));
                                } else
                                    e.nurl && (a.adUrl = e.nurl);
                                e.ext && (a[o] = e.ext), s.push(a);
                            });
                        }), s;
                    },
                    getUserSyncs: function (e, r) {
                        var t = [];
                        return e.iframeEnabled && i(r, 'iframe', t), e.pixelEnabled && i(r, 'image', t), t;
                    },
                    onTimeout: function (e) {
                        fetch(''.concat(d, '/prebid/timeout'), {
                            method: 'POST',
                            body: JSON.stringify(e),
                            mode: 'no-cors',
                            headers: new Headers({ 'Content-Type': 'text/plain' })
                        });
                    }
                };
                Object(a.registerBidder)(s);
            }
        }, [852]);
        pbjsChunk([10], {
            20: function (e, t, r) {
                'use strict';
                t.b = function (e) {
                    var t = [];
                    for (var r in e) {
                        var i;
                        e.hasOwnProperty(r) && ('pubProvidedId' === r ? t = t.concat(e.pubProvidedId) : (i = function (e, t) {
                            var r = s[t];
                            if (r && e) {
                                var i = {};
                                i.source = r.source;
                                var n = u.isFn(r.getValue) ? r.getValue(e) : e;
                                if (u.isStr(n)) {
                                    var a, o, d = {
                                            id: n,
                                            atype: r.atype
                                        };
                                    return !u.isFn(r.getUidExt) || (a = r.getUidExt(e)) && (d.ext = a), i.uids = [d], !u.isFn(r.getEidExt) || (o = r.getEidExt(e)) && (i.ext = o), i;
                                }
                            }
                            return null;
                        }(e[r], r)) && t.push(i));
                    }
                    return t;
                }, t.a = function (e) {
                    var r = [];
                    return e.filter(function (e) {
                        return u.isPlainObject(e.idObj) && Object.keys(e.idObj).length;
                    }).forEach(function (t) {
                        Object.keys(t.idObj).forEach(function (e) {
                            u.deepAccess(t, 'config.bidders') && Array.isArray(t.config.bidders) && u.deepAccess(s, e + '.source') && r.push({
                                source: s[e].source,
                                bidders: t.config.bidders
                            });
                        });
                    }), r;
                };
                var u = r(0), s = {
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
                        sharedid: {
                            source: 'sharedid.org',
                            atype: 1,
                            getValue: function (e) {
                                return e.id;
                            },
                            getUidExt: function (e) {
                                return e && e.third ? { third: e.third } : void 0;
                            }
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
                        admixerId: {
                            source: 'admixer.net',
                            atype: 3
                        }
                    };
            },
            856: function (e, t, r) {
                e.exports = r(857);
            },
            857: function (e, t, r) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), r.d(t, 'spec', function () {
                    return n;
                });
                var l = r(0), i = r(1), a = r(2), f = r(20), n = {
                        code: 'sovrn',
                        supportedMediaTypes: [a.b],
                        gvlid: 13,
                        isBidRequestValid: function (e) {
                            return !(!e.params.tagid || isNaN(parseFloat(e.params.tagid)) || !isFinite(e.params.tagid));
                        },
                        buildRequests: function (e, t) {
                            try {
                                var o, d, u, s, c = [], p = [];
                                l._each(e, function (e) {
                                    !u && e.userId && (u = Object(f.b)(e.userId)).forEach(function (e) {
                                        e.uids && e.uids[0] && ('criteo.com' === e.source && (s = e.uids[0].id), p.push({
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
                                        }, a = l.getBidIdParameter('segments', e.params);
                                    a && (n.ext = {
                                        deals: a.split(',').map(function (e) {
                                            return e.trim();
                                        })
                                    }), c.push(n);
                                });
                                var r = t.refererInfo.referer, i = l.parseUrl(r).hostname, n = {
                                        id: l.getUniqueIdentifierStr(),
                                        imp: c,
                                        site: {
                                            page: r,
                                            domain: i
                                        }
                                    };
                                d && (n.source = { ext: { schain: d } }), t.gdprConsent && (l.deepSetValue(n, 'regs.ext.gdpr', +t.gdprConsent.gdprApplies), l.deepSetValue(n, 'user.ext.consent', t.gdprConsent.consentString)), t.uspConsent && l.deepSetValue(n, 'regs.ext.us_privacy', t.uspConsent), u && (l.deepSetValue(n, 'user.ext.eids', u), l.deepSetValue(n, 'user.ext.tpid', p), s && l.deepSetValue(n, 'user.ext.prebid_criteoid', s));
                                var a = 'https://ap.lijit.com/rtb/bid?src=prebid_prebid_4.34.0';
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
                                        ttl: e.ext && e.ext.ttl || 90
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
        }, [856]);
        pbjsChunk([117], {
            858: function (e, t, r) {
                e.exports = r(859);
            },
            859: function (e, t, r) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), r.d(t, 'GOOGLE_CONSENT', function () {
                    return B;
                }), r.d(t, 'spec', function () {
                    return n;
                });
                var I = r(0), P = r(3), c = r(11), a = r(1), u = r(2);
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
                            var b = h.refererInfo.referer, y = !!b.match(/^https:/);
                            return e.map(function (e) {
                                var t = I.getBidIdParameter('page', e.params) ? I.getBidIdParameter('page', e.params) : P.b.getConfig('pageUrl') ? P.b.getConfig('pageUrl') : b, r = I.getBidIdParameter('channel_id', e.params), a = null, d = I.deepAccess(e, 'mediaTypes.video.playerSize'), i = d[0][0], n = d[0][1], o = y || (I.getBidIdParameter('secure', e.params) ? 1 : 0), s = {
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
                                '' != I.getBidIdParameter('price_floor', e.params) && (_.bidfloor = I.getBidIdParameter('price_floor', e.params)), '' != I.getBidIdParameter('start_delay', e.params) && (_.video.startdelay = 0 + Boolean(I.getBidIdParameter('start_delay', e.params))), '' != I.getBidIdParameter('min_duration', e.params) && (_.video.minduration = I.getBidIdParameter('min_duration', e.params)), '' != I.getBidIdParameter('max_duration', e.params) && (_.video.maxduration = I.getBidIdParameter('max_duration', e.params)), '' != I.getBidIdParameter('placement_type', e.params) && (_.video.ext.placement = I.getBidIdParameter('placement_type', e.params)), '' != I.getBidIdParameter('position', e.params) && (_.video.ext.pos = I.getBidIdParameter('position', e.params)), e.crumbs && e.crumbs.pubcid && (a = e.crumbs.pubcid);
                                var l = navigator.language ? 'language' : 'userLanguage', f = {
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
                                P.b.getConfig('cache') && P.b.getConfig('cache.url') && !0 === P.b.getConfig('cache.ignoreBidderCacheKey') && (f.ext.wrap_response = 0), I.getBidIdParameter('number_of_ads', e.params) && (f.ext.number_of_ads = I.getBidIdParameter('number_of_ads', e.params));
                                var v = {};
                                return 1 == I.getBidIdParameter('spotx_all_google_consent', e.params) && (v.consented_providers_settings = B), h && h.gdprConsent && (v.consent = h.gdprConsent.consentString, void 0 !== h.gdprConsent.gdprApplies && I.deepSetValue(f, 'regs.ext.gdpr', h.gdprConsent.gdprApplies ? 1 : 0)), h && h.uspConsent && I.deepSetValue(f, 'regs.ext.us_privacy', h.uspConsent), I.deepAccess(e, 'userId.id5id.uid') && (v.eids = v.eids || [], v.eids.push({
                                    source: 'id5-sync.com',
                                    uids: [{
                                            id: e.userId.id5id.uid,
                                            ext: e.userId.id5id.ext || {}
                                        }]
                                })), a && (v.fpc = a), e && e.schain && (f.source = { ext: { schain: e.schain } }), e && e.userId && e.userId.tdid && (v.eids = v.eids || [], v.eids.push({
                                    source: 'adserver.org',
                                    uids: [{
                                            id: e.userId.tdid,
                                            ext: { rtiPartner: 'TDID' }
                                        }]
                                })), I.isEmpty(v) || (f.user = { ext: v }), {
                                    method: 'POST',
                                    url: 'https://search.spotxchange.com/openrtb/2.3/dados/' + r,
                                    data: f,
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
                                    P.b.getConfig('cache') && P.b.getConfig('cache.url') && !0 === P.b.getConfig('cache.ignoreBidderCacheKey') ? a.vastXml = t.adm : (a.cache_key = t.ext.cache_key, a.vastUrl = 'https://search.spotxchange.com/ad/vast.html?key=' + t.ext.cache_key), a.meta = a.meta || {}, t && t.adomain && 0 < t.adomain.length && (a.meta.advertiserDomains = t.adomain);
                                    var d = I.deepAccess(e, 'mediaTypes.video.context'), i = I.deepAccess(e, 'params.ad_unit');
                                    if ('outstream' == d || 'outstream' == i) {
                                        var n = I.deepAccess(e, 'mediaTypes.video.playerSize'), o = c.a.install({
                                                id: 0,
                                                url: '//',
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
        }, [858]);
        pbjsChunk([108], {
            878: function (e, t, r) {
                e.exports = r(879);
            },
            879: function (e, t, r) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), r.d(t, 'spec', function () {
                    return i;
                });
                var n = r(1), a = r(0), p = 12, c = 11, u = 0, g = 22, i = {
                        code: 'teads',
                        gvlid: 132,
                        supportedMediaTypes: [
                            'video',
                            'banner'
                        ],
                        isBidRequestValid: function (e) {
                            var t, r, n = !1;
                            return void 0 !== e.params && (t = s(a.getValue(e.params, 'placementId')), r = s(a.getValue(e.params, 'pageId')), n = t && r), n || a.logError('Teads placementId and pageId parameters are required. Bid aborted.'), n;
                        },
                        buildRequests: function (e, t) {
                            var r, n = e.map(f), i = {
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
                                    hb_version: '4.34.0'
                                };
                            e[0].schain && (i.schain = e[0].schain);
                            var a, s, o, d = t.gdprConsent;
                            return t && d && (a = 'boolean' == typeof d.gdprApplies, s = 'string' == typeof d.consentString, o = a ? function (e, t, r) {
                                var n = p;
                                e ? function (e, t) {
                                    return e && 1 === t ? e.hasGlobalScope || e.hasGlobalConsent : !(!e || 2 !== t) && !e.isServiceSpecific;
                                }(t, r) && (n = c) : n = u;
                                return n;
                            }(d.gdprApplies, d.vendorData, d.apiVersion) : g, i.gdpr_iab = {
                                consent: s ? d.consentString : '',
                                status: o,
                                apiVersion: d.apiVersion
                            }), t && t.uspConsent && (i.us_privacy = t.uspConsent), {
                                method: 'POST',
                                url: 'https://a.teads.tv/hb/bid-request',
                                data: JSON.stringify(i)
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
                                    ad: e.ad,
                                    requestId: e.bidId,
                                    creativeId: e.creativeId,
                                    placementId: e.placementId
                                };
                                e.dealId && (t.dealId = e.dealId), r.push(t);
                            }), r;
                        }
                    };
                function f(e) {
                    var t, r = {}, n = a.getValue(e.params, 'placementId'), i = a.getValue(e.params, 'pageId');
                    return r.sizes = (t = e, a.parseSizesInput(function (e) {
                        var t = a.deepAccess(e, 'mediaTypes.video.playerSize'), r = a.deepAccess(e, 'mediaTypes.video.sizes'), n = a.deepAccess(e, 'mediaTypes.banner.sizes');
                        return a.isArray(n) || a.isArray(t) || a.isArray(r) ? [
                            n,
                            r,
                            t
                        ].reduce(function (t, e) {
                            return a.isArray(e) && (a.isArray(e[0]) ? e.forEach(function (e) {
                                t.push(e);
                            }) : t.push(e)), t;
                        }, []) : e.sizes;
                    }(t))), r.bidId = a.getBidIdParameter('bidId', e), r.bidderRequestId = a.getBidIdParameter('bidderRequestId', e), r.placementId = parseInt(n, 10), r.pageId = parseInt(i, 10), r.adUnitCode = a.getBidIdParameter('adUnitCode', e), r.auctionId = a.getBidIdParameter('auctionId', e), r.transactionId = a.getBidIdParameter('transactionId', e), r;
                }
                function s(e) {
                    return 0 < parseInt(e);
                }
                Object(n.registerBidder)(i);
            }
        }, [878]);
        pbjsChunk([98], {
            900: function (e, r, t) {
                e.exports = t(901);
            },
            901: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'tripleliftAdapterSpec', function () {
                    return m;
                });
                var n = t(2), i = t(1), u = t(0), a = t(3);
                function p() {
                    return (p = Object.assign || function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = arguments[r];
                            for (var n in t)
                                Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function c(e) {
                    return (c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function d(r, e) {
                    var t, n = Object.keys(r);
                    return Object.getOwnPropertySymbols && (t = Object.getOwnPropertySymbols(r), e && (t = t.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                    })), n.push.apply(n, t)), n;
                }
                function s(i) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? d(Object(o), !0).forEach(function (e) {
                            var r, t, n;
                            r = i, n = o[t = e], t in r ? Object.defineProperty(r, t, {
                                value: n,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[t] = n;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : d(Object(o)).forEach(function (e) {
                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                        });
                    }
                    return i;
                }
                function f(e) {
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
                        var t = Object.prototype.toString.call(e).slice(8, -1);
                        'Object' === t && e.constructor && (t = e.constructor.name);
                        if ('Map' === t || 'Set' === t)
                            return Array.from(e);
                        if ('Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))
                            return o(e, r);
                    }(e) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function o(e, r) {
                    (null == r || r > e.length) && (r = e.length);
                    for (var t = 0, n = new Array(r); t < r; t++)
                        n[t] = e[t];
                    return n;
                }
                var l = !0, y = null, m = {
                        gvlid: 28,
                        code: 'triplelift',
                        supportedMediaTypes: [
                            n.b,
                            n.d
                        ],
                        isBidRequestValid: function (e) {
                            return void 0 !== e.params.inventoryCode;
                        },
                        buildRequests: function (e, r) {
                            var t, n = 'https://tlx.3lift.com/header/auction?', i = function (e) {
                                    var r = {}, t = e[0].schain, n = function () {
                                            var e = {}, r = {}, t = {}, n = a.b.getLegacyFpd(a.b.getConfig('ortb2')) || {}, i = p({}, n.context), o = p({}, n.user);
                                            g(r, i), g(t, o), u.isEmpty(r) || (e.context = r);
                                            u.isEmpty(t) || (e.user = t);
                                            return e;
                                        }();
                                    r.imp = e.map(function (e, r) {
                                        var t = {
                                            id: r,
                                            tagid: e.params.inventoryCode,
                                            floor: function (e) {
                                                var r = null;
                                                {
                                                    var t;
                                                    'function' == typeof e.getFloor && ('object' !== c(t = e.getFloor({
                                                        currency: 'USD',
                                                        mediaType: b(e) ? 'video' : 'banner',
                                                        size: '*'
                                                    })) || 'USD' !== t.currency || isNaN(parseFloat(t.floor)) || (r = parseFloat(t.floor)));
                                                }
                                                return null !== r ? r : e.params.floor;
                                            }(e)
                                        };
                                        return b(e) ? t.video = function (e) {
                                            var r = s(s({}, e.params.video), e.mediaTypes.video);
                                            r.w || (r.w = r.playerSize[0][0]);
                                            r.h || (r.h = r.playerSize[0][1]);
                                            'instream' === r.context && (r.placement = 1);
                                            return delete r.playerSize, r;
                                        }(e) : e.mediaTypes.banner && (t.banner = {
                                            format: e.sizes.filter(S).map(function (e) {
                                                return {
                                                    w: e[0],
                                                    h: e[1]
                                                };
                                            })
                                        }), u.isEmpty(e.ortb2Imp) || (t.fpd = function (e) {
                                            var r = {}, t = {};
                                            g(t, e.ext), u.isEmpty(t) || (r.context = t);
                                            return r;
                                        }(e.ortb2Imp)), t;
                                    });
                                    var i = [].concat(f(function (e) {
                                        return v(e, 'tdid', 'adserver.org', 'TDID');
                                    }([e[0]])), f(function (e) {
                                        return v(e, 'idl_env', 'liveramp.com', 'idl');
                                    }([e[0]])), f(function (e) {
                                        return v(e, 'criteoId', 'criteo.com', 'criteoId');
                                    }([e[0]])), f(function (e) {
                                        return v(e, 'pubcid', 'pubcid.org', 'pubcid');
                                    }([e[0]])));
                                    0 < i.length && (r.user = { ext: { eids: i } });
                                    var o = function (e, r) {
                                        var t = {};
                                        u.isEmpty(e) || (t.schain = s({}, e));
                                        u.isEmpty(r) || (t.fpd = s({}, r));
                                        return t;
                                    }(t, n);
                                    u.isEmpty(o) || (r.ext = o);
                                    return r;
                                }(e);
                            return n = u.tryAppendQueryString(n, 'lib', 'prebid'), n = u.tryAppendQueryString(n, 'v', '4.34.0'), r && r.refererInfo && (t = r.refererInfo.referer, n = u.tryAppendQueryString(n, 'referrer', t)), r && r.timeout && (n = u.tryAppendQueryString(n, 'tmax', r.timeout)), r && r.gdprConsent && (void 0 !== r.gdprConsent.gdprApplies && (l = r.gdprConsent.gdprApplies, n = u.tryAppendQueryString(n, 'gdpr', l.toString())), void 0 !== r.gdprConsent.consentString && (y = r.gdprConsent.consentString, n = u.tryAppendQueryString(n, 'cmp_cs', y))), r && r.uspConsent && (n = u.tryAppendQueryString(n, 'us_privacy', r.uspConsent)), !0 === a.b.getConfig('coppa') && (n = u.tryAppendQueryString(n, 'coppa', !0)), n.lastIndexOf('&') === n.length - 1 && (n = n.substring(0, n.length - 1)), u.logMessage('tlCall request built: ' + n), {
                                method: 'POST',
                                url: n,
                                data: i,
                                bidderRequest: r
                            };
                        },
                        interpretResponse: function (e, r) {
                            var t = r.bidderRequest;
                            return (e.body.bids || []).map(function (e) {
                                return function (e, r) {
                                    var t = {}, n = r.width || 1, i = r.height || 1, o = r.deal_id || '', u = r.crid || '', a = e.bids[r.imp_id];
                                    0 != r.cpm && r.ad && (t = {
                                        requestId: a.bidId,
                                        cpm: r.cpm,
                                        width: n,
                                        height: i,
                                        netRevenue: !0,
                                        ad: r.ad,
                                        creativeId: u,
                                        dealId: o,
                                        currency: 'USD',
                                        ttl: 300,
                                        tl_source: r.tl_source,
                                        meta: {}
                                    }, b(a) && (t.vastXml = r.ad, t.mediaType = 'video'), r.advertiser_name && (t.meta.advertiserName = r.advertiser_name), r.adomain && r.adomain.length && (t.meta.advertiserDomains = r.adomain), r.tl_source && 'hdx' == r.tl_source && (t.meta.mediaType = 'banner'), r.tl_source && 'tlx' == r.tl_source && (t.meta.mediaType = 'native'));
                                    return t;
                                }(t, e);
                            });
                        },
                        getUserSyncs: function (e, r, t, n) {
                            var i = function (e) {
                                if (!e)
                                    return;
                                if (e.iframeEnabled)
                                    return 'iframe';
                                if (e.pixelEnabled)
                                    return 'image';
                            }(e);
                            if (i) {
                                var o = 'https://eb2.3lift.com/sync?';
                                return 'image' === i && (o = u.tryAppendQueryString(o, 'px', 1), o = u.tryAppendQueryString(o, 'src', 'prebid')), null !== y && (o = u.tryAppendQueryString(o, 'gdpr', l), o = u.tryAppendQueryString(o, 'cmp_cs', y)), n && (o = u.tryAppendQueryString(o, 'us_privacy', n)), [{
                                        type: i,
                                        url: o
                                    }];
                            }
                        }
                    };
                function b(e) {
                    return e.mediaTypes.video && e.mediaTypes.video.context && 'instream' === e.mediaTypes.video.context.toLowerCase();
                }
                function g(r, t) {
                    u.isEmpty(t) || Object.keys(t).forEach(function (e) {
                        null != t[e] && (r[e] = t[e]);
                    });
                }
                function v(e, r, t, n) {
                    return e.map((u = r, function (e) {
                        return e && e.userId && e.userId[u];
                    })).filter(function (e) {
                        return !!e;
                    }).map((i = t, o = n, function (e) {
                        return {
                            source: i,
                            uids: [{
                                    id: e,
                                    ext: { rtiPartner: o }
                                }]
                        };
                    }));
                    var i, o, u;
                }
                function S(e) {
                    return 2 === e.length && 'number' == typeof e[0] && 'number' == typeof e[1];
                }
                Object(i.registerBidder)(m);
            }
        }, [900]);
        pbjsChunk([88], {
            922: function (e, r, n) {
                e.exports = n(923);
            },
            923: function (e, r, n) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), n.d(r, 'adapter', function () {
                    return s;
                });
                var t = n(0), i = n(11), d = n(1), a = n(2);
                function o() {
                    return (o = Object.assign || function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var n = arguments[r];
                            for (var t in n)
                                Object.prototype.hasOwnProperty.call(n, t) && (e[t] = n[t]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function u(e) {
                    return e.filter(function (e) {
                        var r = !!t.deepAccess(e, 'ext.renderer.config'), n = !!t.deepAccess(e, 'ext.renderer.config.siteId');
                        return r || t.logError(new Error('UnrulyBidAdapter: Missing renderer config.')), n || t.logError(new Error('UnrulyBidAdapter: Missing renderer siteId.')), n;
                    }).map(function (e) {
                        var r = t.deepAccess(e, 'ext.renderer');
                        return function (e) {
                            if (!e.config)
                                throw new Error('UnrulyBidAdapter: Missing renderer config.');
                            if (!e.config.siteId)
                                throw new Error('UnrulyBidAdapter: Missing renderer siteId.');
                            parent.window.unruly = parent.window.unruly || {}, parent.window.unruly.native = parent.window.unruly.native || {}, parent.window.unruly.native.siteId = parent.window.unruly.native.siteId || e.config.siteId, parent.window.unruly.native.supplyMode = 'prebid';
                        }(r), parent.window.unruly.native.prebid = parent.window.unruly.native.prebid || {}, parent.window.unruly.native.prebid.uq = parent.window.unruly.native.prebid.uq || [], {
                            rendererInstance: i.a.install(o({}, r, {
                                callback: function () {
                                }
                            })),
                            serverBid: e
                        };
                    }).map(function (e) {
                        var r, n, t = e.rendererInstance, i = e.serverBid, d = (n = t, {
                                requestId: (r = i).bidId,
                                cpm: r.cpm,
                                width: r.width,
                                height: r.height,
                                vastUrl: r.vastUrl,
                                netRevenue: !0,
                                creativeId: r.bidId,
                                ttl: 360,
                                currency: 'USD',
                                renderer: n,
                                mediaType: a.d
                            }), u = o({}, d, {
                                renderer: t,
                                adUnitCode: i.ext.adUnitCode
                            });
                        return t.setRender(function () {
                            var e;
                            e = u, parent.window.unruly.native.prebid.uq.push([
                                'render',
                                e
                            ]);
                        }), d;
                    });
                }
                var s = {
                    code: 'unruly',
                    supportedMediaTypes: [a.d],
                    isBidRequestValid: function (e) {
                        if (!e)
                            return !1;
                        var r = t.deepAccess(e, 'mediaTypes.video.context');
                        return 'video' === e.mediaType || 'outstream' === r;
                    },
                    buildRequests: function (e, r) {
                        return {
                            url: 'https://targeting.unrulymedia.com/prebid',
                            method: 'POST',
                            data: {
                                bidRequests: e,
                                bidderRequest: r
                            },
                            options: { contentType: 'text/plain' }
                        };
                    },
                    interpretResponse: function (e) {
                        var r = (0 < arguments.length && void 0 !== e ? e : {}).body;
                        return !r || !r.bids ? [] : u(r.bids);
                    },
                    getUserSyncs: function (e, r, n) {
                        var t = '';
                        n && 'gdprApplies' in n && (n.gdprApplies && 'string' == typeof n.consentString ? t += '?gdpr=1&gdpr_consent='.concat(n.consentString) : t += '?gdpr=0');
                        var i = [];
                        return e.iframeEnabled && i.push({
                            type: 'iframe',
                            url: 'https://video.unrulymedia.com/iframes/third-party-iframes.html' + t
                        }), i;
                    }
                };
                Object(d.registerBidder)(s);
            }
        }, [922]);
        pbjsChunk([6], {
            20: function (e, t, n) {
                'use strict';
                t.b = function (e) {
                    var t = [];
                    for (var n in e) {
                        var r;
                        e.hasOwnProperty(n) && ('pubProvidedId' === n ? t = t.concat(e.pubProvidedId) : (r = function (e, t) {
                            var n = s[t];
                            if (n && e) {
                                var r = {};
                                r.source = n.source;
                                var o = u.isFn(n.getValue) ? n.getValue(e) : e;
                                if (u.isStr(o)) {
                                    var i, a, c = {
                                            id: o,
                                            atype: n.atype
                                        };
                                    return !u.isFn(n.getUidExt) || (i = n.getUidExt(e)) && (c.ext = i), r.uids = [c], !u.isFn(n.getEidExt) || (a = n.getEidExt(e)) && (r.ext = a), r;
                                }
                            }
                            return null;
                        }(e[n], n)) && t.push(r));
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
                        sharedid: {
                            source: 'sharedid.org',
                            atype: 1,
                            getValue: function (e) {
                                return e.id;
                            },
                            getUidExt: function (e) {
                                return e && e.third ? { third: e.third } : void 0;
                            }
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
                        admixerId: {
                            source: 'admixer.net',
                            atype: 3
                        }
                    };
            },
            924: function (e, t, n) {
                e.exports = n(925);
            },
            925: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'PBJS_USER_ID_OPTOUT_NAME', function () {
                    return A;
                }), n.d(t, 'coreStorage', function () {
                    return w;
                }), n.d(t, 'syncDelay', function () {
                    return O;
                }), n.d(t, 'auctionDelay', function () {
                    return I;
                }), t.setSubmoduleRegistry = function (e) {
                    T = e;
                }, t.setStoredValue = P, t.setStoredConsentData = q, t.findRootDomain = R, t.requestBidsHook = G, n.d(t, 'validateGdprEnforcement', function () {
                    return Q;
                }), t.attachIdSystem = Z, t.init = ee;
                var r = n(10), o = n.n(r), i = n(3), a = n(9), c = n.n(a), l = n(0), u = n(18), d = n(8), s = n(5), f = n.n(s), g = n(13), p = n(20), b = n(7);
                function m(e, t) {
                    var n;
                    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (n = function (e, t) {
                                if (!e)
                                    return;
                                if ('string' == typeof e)
                                    return y(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                'Object' === n && e.constructor && (n = e.constructor.name);
                                if ('Map' === n || 'Set' === n)
                                    return Array.from(e);
                                if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                    return y(e, t);
                            }(e)) || t && e && 'number' == typeof e.length) {
                            n && (e = n);
                            var r = 0, o = function () {
                                };
                            return {
                                s: o,
                                n: function () {
                                    return r >= e.length ? { done: !0 } : {
                                        done: !1,
                                        value: e[r++]
                                    };
                                },
                                e: function (e) {
                                    throw e;
                                },
                                f: o
                            };
                        }
                        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }
                    var i, a = !0, c = !1;
                    return {
                        s: function () {
                            n = e[Symbol.iterator]();
                        },
                        n: function () {
                            var e = n.next();
                            return a = e.done, e;
                        },
                        e: function (e) {
                            c = !0, i = e;
                        },
                        f: function () {
                            try {
                                a || null == n.return || n.return();
                            } finally {
                                if (c)
                                    throw i;
                            }
                        }
                    };
                }
                function y(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                var v, h, O, I, j = 'User ID', k = 'cookie', E = 'html5', S = 500, D = 0, x = {
                        name: '_pbjs_userid_consent_data',
                        expires: 30
                    }, A = '_pbjs_id_optout', w = Object(b.a)('userid'), C = [], U = !1, _ = [], V = [], T = [];
                function P(e, t) {
                    var n = e.config.storage, r = 'function' == typeof e.submodule.domainOverride ? e.submodule.domainOverride() : null;
                    try {
                        var o = l.isPlainObject(t) ? JSON.stringify(t) : t, i = new Date(Date.now() + 86400000 * n.expires).toUTCString();
                        n.type === k ? (w.setCookie(n.name, o, i, 'Lax', r), 'number' == typeof n.refreshInSeconds && w.setCookie(''.concat(n.name, '_last'), new Date().toUTCString(), i, 'Lax', r)) : n.type === E && (w.setDataInLocalStorage(''.concat(n.name, '_exp'), i), w.setDataInLocalStorage(n.name, encodeURIComponent(o)), 'number' == typeof n.refreshInSeconds && w.setDataInLocalStorage(''.concat(n.name, '_last'), new Date().toUTCString()));
                    } catch (e) {
                        l.logError(e);
                    }
                }
                function N(e, t) {
                    var n, r, o = 1 < arguments.length && void 0 !== t ? t : void 0, i = o ? ''.concat(e.name, '_').concat(o) : e.name;
                    try {
                        e.type === k ? n = w.getCookie(i) : e.type === E && ('' === (r = w.getDataFromLocalStorage(''.concat(e.name, '_exp'))) ? n = w.getDataFromLocalStorage(i) : r && 0 < new Date(r).getTime() - Date.now() && (n = decodeURIComponent(w.getDataFromLocalStorage(i)))), 'string' == typeof n && '{' === n.trim().charAt(0) && (n = JSON.parse(n));
                    } catch (e) {
                        l.logError(e);
                    }
                    return n;
                }
                function L(e) {
                    var t = {
                        consentString: '',
                        gdprApplies: !1,
                        apiVersion: 0
                    };
                    return e && (t.consentString = e.consentString, t.gdprApplies = e.gdprApplies, t.apiVersion = e.apiVersion), l.cyrb53Hash(JSON.stringify(t));
                }
                function q(e) {
                    try {
                        var t = new Date(Date.now() + 86400000 * x.expires).toUTCString();
                        w.setCookie(x.name, L(e), t, 'Lax');
                    } catch (e) {
                        l.logError(e);
                    }
                }
                function F() {
                    try {
                        return w.getCookie(x.name);
                    } catch (e) {
                        l.logError(e);
                    }
                }
                function M(e) {
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
                function R() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window.location.hostname;
                    if (!w.cookiesAreEnabled())
                        return e;
                    var t, n, r = e.split('.');
                    if (2 == r.length)
                        return e;
                    var o = -2, i = '_rdc'.concat(Date.now()), a = 'writeable';
                    do {
                        t = r.slice(o).join('.');
                        var c = new Date(l.timestamp() + 10000).toUTCString();
                        w.setCookie(i, a, c, 'Lax', t, void 0), w.getCookie(i, void 0) === a ? (n = !1, w.setCookie(i, '', 'Thu, 01 Jan 1970 00:00:01 GMT', void 0, t, void 0)) : (o += -1, n = Math.abs(o) <= r.length);
                    } while (n);
                    return t;
                }
                function J(e, t) {
                    var n = function () {
                    };
                    t && (n = l.delayExecution(function () {
                        clearTimeout(h), t();
                    }, e.length)), e.forEach(function (t) {
                        t.callback(function (e) {
                            e ? (t.config.storage && P(t, e), t.idObj = t.submodule.decode(e, t.config)) : l.logInfo(''.concat(j, ': ').concat(t.submodule.name, ' - request id responded with an empty value')), n();
                        }), t.callback = void 0;
                    });
                }
                function H(e) {
                    return Array.isArray(e) && e.length ? e.filter(function (e) {
                        return l.isPlainObject(e.idObj) && Object.keys(e.idObj).length;
                    }).reduce(function (t, n) {
                        return Object.keys(n.idObj).forEach(function (e) {
                            t[e] = n.idObj[e];
                        }), t;
                    }, {}) : {};
                }
                function z(e, o) {
                    [e].some(function (e) {
                        return !Array.isArray(e) || !e.length;
                    }) || e.forEach(function (e) {
                        e.bids && l.isArray(e.bids) && e.bids.forEach(function (e) {
                            var t, n, r = (t = o, n = e.bidder, Array.isArray(t) && t.length && n ? t.filter(function (e) {
                                    return !e.config.bidders || !l.isArray(e.config.bidders) || e.config.bidders.includes(n);
                                }).filter(function (e) {
                                    return l.isPlainObject(e.idObj) && Object.keys(e.idObj).length;
                                }).reduce(function (t, n) {
                                    return Object.keys(n.idObj).forEach(function (e) {
                                        t[e] = n.idObj[e];
                                    }), t;
                                }, {}) : {});
                            Object.keys(r).length && (e.userId = r, e.userIdAsEids = Object(p.b)(r));
                        });
                    });
                }
                function B(e) {
                    var t, n, r, o, i, a = !1;
                    void 0 === v && (v = function (e, n) {
                        var r = F();
                        q(n);
                        var t = Q(e, n), o = t.userIdModules;
                        return t.hasValidated || M(n) ? o.reduce(function (e, t) {
                            return X(t, n, r, !1), e.push(t), e;
                        }, []) : (l.logWarn(''.concat(j, ' - gdpr permission not valid for local storage or cookies, exit module')), []);
                    }(_, d.gdprDataHandler.getConsentData())).length && (o = v, 'function' == typeof (i = Object(l.getPrebidInternal)().setEidPermissions) && l.isArray(o) && i(Object(p.a)(o)), (t = v.filter(function (e) {
                        return l.isFn(e.callback);
                    })).length && (e && 0 < I ? (n = !(a = !0), r = function () {
                        n || (n = !0, e());
                    }, l.logInfo(''.concat(j, ' - auction delayed by ').concat(I, ' at most to fetch ids')), h = setTimeout(r, I), J(t, r)) : c.a.on(f.a.EVENTS.AUCTION_END, function e() {
                        c.a.off(f.a.EVENTS.AUCTION_END, e), 0 < O ? setTimeout(function () {
                            J(t);
                        }, O) : J(t);
                    }))), e && !a && e();
                }
                function G(e, t) {
                    B(function () {
                        z(t.adUnits || Object(u.a)().adUnits, v), e.call(this, t);
                    });
                }
                function W() {
                    return B(), H(v);
                }
                function $() {
                    return B(), Object(p.b)(H(v));
                }
                function K(e, u) {
                    var s = (s = e ? e.submoduleNames : null) || [];
                    B(function () {
                        var e = d.gdprDataHandler.getConsentData(), t = F();
                        q(e);
                        var n = Q(_, e), r = n.userIdModules;
                        if (n.hasValidated || M(e)) {
                            var o, i = [], a = m(r);
                            try {
                                for (a.s(); !(o = a.n()).done;) {
                                    var c = o.value;
                                    0 < s.length && -1 === s.indexOf(c.submodule.name) || (l.logInfo(''.concat(j, ' - refreshing ').concat(c.submodule.name)), X(c, e, t, !0), l.isFn(c.callback) && i.push(c));
                                }
                            } catch (e) {
                                a.e(e);
                            } finally {
                                a.f();
                            }
                            0 < i.length && J(i), u && u();
                        } else
                            l.logWarn(''.concat(j, ' - gdpr permission not valid for local storage or cookies, exit module'));
                    });
                }
                var Q = Object(g.b)('sync', function (e, t) {
                    return {
                        userIdModules: e,
                        hasValidated: t && t.hasValidated
                    };
                }, 'validateGdprEnforcement');
                function X(e, t, n, r) {
                    var o, i, a, c, u, s, d;
                    e.config.storage ? (o = N(e.config.storage), c = !1, 'number' == typeof e.config.storage.refreshInSeconds && (c = (a = new Date(N(e.config.storage, 'last'))) && Date.now() - a.getTime() > 1000 * e.config.storage.refreshInSeconds), !o || c || r || (d = t, null != (s = n) && s !== L(d)) ? i = e.submodule.getId(e.config, t, o) : 'function' == typeof e.submodule.extendId && (i = e.submodule.extendId(e.config, t, o)), l.isPlainObject(i) && (i.id && (P(e, i.id), o = i.id), 'function' == typeof i.callback && (e.callback = i.callback)), o && (e.idObj = e.submodule.decode(o, e.config))) : e.config.value ? e.idObj = e.config.value : (u = e.submodule.getId(e.config, t, void 0), l.isPlainObject(u) && ('function' == typeof u.callback && (e.callback = u.callback), u.id && (e.idObj = e.submodule.decode(u.id, e.config))));
                }
                function Y() {
                    var e, n, t, r = (e = V, n = C, Array.isArray(e) ? e.reduce(function (e, t) {
                            return !t || l.isEmptyStr(t.name) || (!t.storage || l.isEmptyStr(t.storage.type) || l.isEmptyStr(t.storage.name) || -1 === n.indexOf(t.storage.type)) && !l.isPlainObject(t.value) && (t.storage || t.value) || e.push(t), e;
                        }, []) : []);
                    r.length && (t = T.filter(function (t) {
                        return !o()(_, function (e) {
                            return e.name === t.name;
                        });
                    }), _ = t.map(function (t) {
                        var e = o()(r, function (e) {
                            return e.name === t.name;
                        });
                        return t.findRootDomain = R, e ? {
                            submodule: t,
                            config: e,
                            callback: void 0,
                            idObj: void 0
                        } : null;
                    }).filter(function (e) {
                        return null !== e;
                    }), !U && _.length && (Object(u.a)().requestBids.before(G, 40), l.logInfo(''.concat(j, ' - usersync config updated for ').concat(_.length, ' submodules: '), _.map(function (e) {
                        return e.submodule.name;
                    })), U = !0));
                }
                function Z(t) {
                    o()(T, function (e) {
                        return e.name === t.name;
                    }) || (T.push(t), Y());
                }
                function ee(e) {
                    _ = [], U = !(V = []), v = void 0, -1 !== (C = [
                        w.localStorageIsEnabled() ? E : null,
                        w.cookiesAreEnabled() ? k : null
                    ].filter(function (e) {
                        return null !== e;
                    })).indexOf(k) && w.getCookie(A) ? l.logInfo(''.concat(j, ' - opt-out cookie found, exit module')) : -1 !== C.indexOf(E) && w.getDataFromLocalStorage(A) ? l.logInfo(''.concat(j, ' - opt-out localStorage found, exit module')) : (e.getConfig(function (e) {
                        var t = e.userSync;
                        t && t.userIds && (V = t.userIds, O = l.isNumber(t.syncDelay) ? t.syncDelay : S, I = l.isNumber(t.auctionDelay) ? t.auctionDelay : D, Y());
                    }), Object(u.a)().getUserIds = W, Object(u.a)().getUserIdsAsEids = $, Object(u.a)().refreshUserIds = K);
                }
                ee(i.b), Object(g.c)('userId', Z);
            }
        }, [924]);
        pbjsChunk([64], {
            972: function (e, r, t) {
                e.exports = t(973);
            },
            973: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'spec', function () {
                    return d;
                });
                var p = t(0), o = t(2), n = t(1), i = t(12), m = t.n(i), a = t(10), s = t.n(a);
                function c(e) {
                    return (c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var f = [
                        'placement',
                        'startdelay',
                        'skipafter',
                        'protocols',
                        'api',
                        'playbackmethod',
                        'maxduration',
                        'minduration',
                        'pos'
                    ], l = [
                        'name',
                        'domain',
                        'cat',
                        'keywords'
                    ], y = p.getWindowTop(), d = {
                        code: 'yieldmo',
                        supportedMediaTypes: [
                            o.b,
                            o.d
                        ],
                        isBidRequestValid: function (e) {
                            return !!(e && e.adUnitCode && e.bidId && (v(e) || b(e)) && function (a) {
                                if (!b(a))
                                    return !0;
                                function t(e, r, t) {
                                    var n = '"'.concat(e, '" is required');
                                    throw t && (n += ' when ' + t), new Error(n);
                                }
                                function e(e, r, t) {
                                    throw t = t ? ', expected: ' + t : '', r = JSON.stringify(r), new Error('"'.concat(e, '"=').concat(r, ' is invalid').concat(t));
                                }
                                function r(e) {
                                    return void 0 !== e;
                                }
                                function n(e, r, t, n) {
                                    var i = p.deepAccess(a, e);
                                    return r(i) || t(e, i, n), i;
                                }
                                try {
                                    n('params.placementId', function (e) {
                                        return !p.isEmpty(e);
                                    }, t), n('mediaTypes.video.playerSize', function (e) {
                                        return p.isArrayOfNums(e, 2) || p.isArray(e) && e.every(function (e) {
                                            return p.isArrayOfNums(e, 2);
                                        });
                                    }, e, 'array of 2 integers, ex: [640,480] or [[640,480]]'), n('mediaTypes.video.mimes', r, t), n('mediaTypes.video.mimes', function (e) {
                                        return p.isArray(e) && e.every(function (e) {
                                            return p.isStr(e);
                                        });
                                    }, e, 'array of strings, ex: ["video/mp4"]'), n('params.video', function (e) {
                                        return !p.isEmpty(e);
                                    }, t);
                                    var i = n('params.video.placement', r, t);
                                    return n('params.video.placement', function (e) {
                                        return 1 <= e && e <= 5;
                                    }, e), 1 === i && (n('params.video.startdelay', r, function (e, r) {
                                        return t(e, 0, 'placement == 1'), 0;
                                    }), n('params.video.startdelay', function (e) {
                                        return p.isNumber(e);
                                    }, e, 'number, ex: 5')), n('params.video.protocols', r, t), n('params.video.protocols', function (e) {
                                        return p.isArrayOfNums(e) && e.every(function (e) {
                                            return 1 <= e && e <= 6;
                                        });
                                    }, e, 'array of numbers, ex: [2,3]'), n('params.video.api', r, t), n('params.video.api', function (e) {
                                        return p.isArrayOfNums(e) && e.every(function (e) {
                                            return 1 <= e && e <= 6;
                                        });
                                    }, e, 'array of numbers, ex: [2,3]'), n('params.video.playbackmethod', function (e) {
                                        return !r(e) || p.isArrayOfNums(e);
                                    }, e, 'array of integers, ex: [2,6]'), n('params.video.maxduration', r, t), n('params.video.maxduration', function (e) {
                                        return p.isInteger(e);
                                    }, e), n('params.video.minduration', function (e) {
                                        return !r(e) || p.isNumber(e);
                                    }, e), n('params.video.skippable', function (e) {
                                        return !r(e) || p.isBoolean(e);
                                    }, e), n('params.video.skipafter', function (e) {
                                        return !r(e) || p.isNumber(e);
                                    }, e), n('params.video.pos', function (e) {
                                        return !r(e) || p.isNumber(e);
                                    }, e), n('params.badv', function (e) {
                                        return !r(e) || p.isArray(e);
                                    }, e, 'array of strings, ex: ["ford.com","pepsi.com"]'), n('params.bcat', function (e) {
                                        return !r(e) || p.isArray(e);
                                    }, e, 'array of strings, ex: ["IAB1-5","IAB1-6"]'), !0;
                                } catch (e) {
                                    return p.logError(e.message), !1;
                                }
                            }(e));
                        },
                        buildRequests: function (e, r) {
                            var i, t, n, a, o, s, c = e.filter(v), d = e.filter(b), u = [];
                            return 0 < c.length && (i = {
                                pbav: '4.34.0',
                                p: [],
                                page_url: r.refererInfo.referer,
                                bust: new Date().getTime().toString(),
                                pr: r.refererInfo.referer,
                                scrd: y.devicePixelRatio || 0,
                                dnt: '1' === window.doNotTrack || '1' === window.navigator.doNotTrack || !1,
                                description: document.querySelector('meta[name="description"]') ? document.querySelector('meta[name="description"]').getAttribute('content') : '',
                                title: y.document.title || '',
                                w: y.innerWidth,
                                h: y.innerHeight,
                                userConsent: JSON.stringify({
                                    gdprApplies: p.deepAccess(r, 'gdprConsent.gdprApplies') || '',
                                    cmp: p.deepAccess(r, 'gdprConsent.consentString') || ''
                                }),
                                us_privacy: p.deepAccess(r, 'uspConsent') || ''
                            }, (t = window.navigator.maxTouchPoints) && (i.mtp = t), c.forEach(function (e) {
                                i.p.push(function (e) {
                                    var r = {
                                        placement_id: e.adUnitCode,
                                        callback_id: e.bidId,
                                        sizes: e.mediaTypes.banner.sizes
                                    };
                                    e.params && (e.params.placementId && (r.ym_placement_id = e.params.placementId), e.params.bidFloor && (r.bidFloor = e.params.bidFloor));
                                    return JSON.stringify(r);
                                }(e));
                                var r = g(e, 'pubcid');
                                r ? i.pubcid = r : e.crumbs && e.crumbs.pubcid && (i.pubcid = e.crumbs.pubcid);
                                var t = g(e, 'tdid');
                                t && (i.tdid = t);
                                var n = g(e, 'criteoId');
                                n && (i.cri_prebid = n), e.schain && (i.schain = JSON.stringify(e.schain));
                            }), i.p = '[' + i.p.toString() + ']', u.push({
                                method: 'GET',
                                url: 'https://ads.yieldmo.com/exchange/prebid',
                                data: i
                            })), 0 < d.length && (o = r, function (e, r) {
                                var t = r.gdprConsent;
                                t && 'gdprApplies' in t && (p.deepSetValue(e, 'regs.ext.gdpr', t.gdprApplies ? 1 : 0), p.deepSetValue(e, 'user.ext.consent', t.consentString));
                                var n = p.deepAccess(r, 'uspConsent');
                                n && p.deepSetValue(e, 'regs.ext.us_privacy', n);
                            }(s = {
                                id: (a = d)[0].bidderRequestId,
                                at: 1,
                                imp: a.map(function (e) {
                                    var r = p.deepAccess(e, 'mediaTypes.video'), t = function (e) {
                                            var r = p.deepAccess(e, 'mediaTypes.video.playerSize');
                                            {
                                                if (p.isArrayOfNums(r, 2))
                                                    return r;
                                                if (p.isArray(r) && p.isArrayOfNums(r[0], 2))
                                                    return r[0];
                                            }
                                            return null;
                                        }(e), n = {
                                            id: e.bidId,
                                            tagid: e.adUnitCode,
                                            bidfloor: e.params.bidfloor || 0,
                                            ext: { placement_id: e.params.placementId },
                                            video: {
                                                w: t[0],
                                                h: t[1],
                                                mimes: r.mimes,
                                                linearity: 1
                                            }
                                        }, i = p.deepAccess(e, 'params.video');
                                    Object.keys(i).filter(function (e) {
                                        return m()(f, e);
                                    }).forEach(function (e) {
                                        return n.video[e] = i[e];
                                    }), i.skippable && (n.video.skip = 1);
                                    return n;
                                }),
                                site: function (e, r) {
                                    var t = {}, n = p.parseUrl(p.deepAccess(r, 'refererInfo.referer'));
                                    p.isEmpty(n) || (t.page = ''.concat(n.protocol, '://').concat(n.hostname).concat(n.pathname));
                                    self === top && document.referrer && (t.ref = document.referrer);
                                    var i = document.getElementsByTagName('meta').keywords;
                                    i && i.content && (t.keywords = i.content);
                                    var a = p.deepAccess(e, 'params.site');
                                    a && Object.keys(a).filter(function (e) {
                                        return m()(l, e);
                                    }).forEach(function (e) {
                                        return t[e] = a[e];
                                    });
                                    return t;
                                }(a[0], o),
                                device: {
                                    ua: navigator.userAgent,
                                    language: navigator.language || navigator.browserLanguage || navigator.userLanguage || navigator.systemLanguage
                                },
                                badv: a[0].params.badv || [],
                                bcat: a[0].params.bcat || [],
                                ext: { prebid: '4.34.0' }
                            }, o), n = s, u.push({
                                method: 'POST',
                                url: 'https://ads.yieldmo.com/exchange/prebidvideo',
                                data: n
                            })), u;
                        },
                        interpretResponse: function (e, i) {
                            var a = [], r = e.body;
                            return 0 < r.length && r.forEach(function (e) {
                                var r;
                                0 < e.cpm && a.push({
                                    requestId: (r = e).callback_id,
                                    cpm: r.cpm,
                                    width: r.width,
                                    height: r.height,
                                    creativeId: r.creative_id,
                                    currency: 'USD',
                                    netRevenue: !0,
                                    ttl: 300,
                                    ad: r.ad
                                });
                            }), r.seatbid && r.seatbid.reduce(function (e, r) {
                                return e.concat(r.bid);
                            }, []).forEach(function (e) {
                                return a.push((r = e, t = i, {
                                    requestId: (n = s()(p.deepAccess(t, 'data.imp') || [], function (e) {
                                        return e.id === r.impid;
                                    })).id,
                                    cpm: r.price,
                                    width: n.video.w,
                                    height: n.video.h,
                                    creativeId: r.crid || r.adid,
                                    currency: 'USD',
                                    netRevenue: !0,
                                    mediaType: o.d,
                                    ttl: 300,
                                    vastXml: r.adm
                                }));
                                var r, t, n;
                            }), a;
                        },
                        getUserSyncs: function () {
                            return [];
                        }
                    };
                function v(e) {
                    return !!p.deepAccess(e, 'mediaTypes.banner');
                }
                function b(e) {
                    return !!p.deepAccess(e, 'mediaTypes.video');
                }
                function g(e, r) {
                    return 'object' === c(p.deepAccess(e, 'userId')) ? e.userId[r] : void 0;
                }
                Object(n.registerBidder)(d);
            }
        }, [972]);
        pbjs.processQueue();
    }())
}