{
    const $___mock_16c53395a822db48 = {};
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
    })($___mock_16c53395a822db48);
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
            var n = {}, d = { 407: 0 };
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
            }, f(f.s = 998);
        }({
            0: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'internal', function () {
                    return R;
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
                    return je(V().search)[e] || '';
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
                    return !1 !== r.b.getConfig('deviceAccess');
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
                }, t.parseQS = je, t.formatQS = Ce, t.parseUrl = function (e, t) {
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
                var r = n(3), i = n(160), o = n.n(i), a = n(10), c = n.n(a), u = n(13), s = n.n(u), d = n(161);
                n.d(t, 'deepAccess', function () {
                    return d.a;
                });
                var f = n(162);
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
                var m = n(5), S = 'Array', A = 'String', E = 'Function', O = 'Number', T = 'Object', I = 'Boolean', j = Object.prototype.toString, C = Boolean(window.console), w = Boolean(C && window.console.log), _ = Boolean(C && window.console.info), x = Boolean(C && window.console.warn), B = Boolean(C && window.console.error), U = n(9), R = {
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
                        parseQS: je,
                        formatQS: Ce,
                        deepEqual: we
                    }, k = {};
                var D, N = {}, P = function (e, t) {
                        return t;
                    }.bind(null, 1, N)() === N ? Function.prototype.bind : function (e) {
                        var t = this, n = Array.prototype.slice.call(arguments, 1);
                        return function () {
                            return t.apply(e, n.concat(Array.prototype.slice.call(arguments)));
                        };
                    }, M = (D = 0, function () {
                        return ++D;
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
                    $() && x && console.warn.apply(console, Q(arguments, 'WARNING:'));
                }
                function Y() {
                    $() && B && console.error.apply(console, Q(arguments, 'ERROR:')), U.emit(m.EVENTS.AUCTION_DEBUG, {
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
                    return j.call(e) === '[object ' + t + ']';
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
                function je(e) {
                    return e ? e.replace(/^\?/, '').split('&').reduce(function (e, t) {
                        var n = l(t.split('='), 2), r = n[0], i = n[1];
                        return /\[\]$/.test(r) ? (e[r = r.replace('[]', '')] = e[r] || [], e[r].push(i)) : e[r] = i || '', e;
                    }, {}) : {};
                }
                function Ce(e) {
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
                        Object(m.isPlainObject)(e) && (r = e.code, t = e.gvlid, n = e.skipPbsAliasing), c.default.aliasRegistry[r] = i.code, o(T({}, i, {
                            code: r,
                            gvlid: t,
                            skipPbsAliasing: n
                        }));
                    });
                }, t.newBidder = w, n.d(t, 'registerSyncInner', function () {
                    return _;
                }), t.preloadBidderMappingFile = x, t.getIabSubCategory = function (t, e) {
                    var n = c.default.getBidAdapter(t);
                    if (n.getSpec().getMappingFileInfo) {
                        var r = n.getSpec().getMappingFileInfo(), i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(), o = I.getDataFromLocalStorage(i);
                        if (o) {
                            try {
                                o = JSON.parse(o);
                            } catch (e) {
                                Object(m.logError)('Failed to parse '.concat(t, ' mapping data stored in local storage'));
                            }
                            return o.mapping[e] ? o.mapping[e] : null;
                        }
                    }
                }, t.isValid = B;
                var r = n(92), c = n(8), u = n(3), v = n(34), s = n(44), o = n(38), a = n(25), i = n(5), y = n.n(i), d = n(9), h = n.n(d), f = n(13), l = n.n(f), p = n(4), m = n(0), g = n(2), b = n(11), S = n(7);
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
                var I = Object(S.a)('bidderFactory'), j = [
                        'requestId',
                        'cpm',
                        'ttl',
                        'creativeId',
                        'netRevenue',
                        'currency'
                    ], C = 1;
                function w(p) {
                    return T(new r.a(p.code), {
                        getSpec: function () {
                            return Object.freeze(p);
                        },
                        registerSyncs: g,
                        callBids: function (o, a, e, n, c, r) {
                            var u, s, t, d, i, f;
                            function l() {
                                e(), h.a.emit(y.a.EVENTS.BIDDER_DONE, o), g(s, o.gdprConsent, o.uspConsent);
                            }
                            Array.isArray(o.bids) && (u = {}, s = [], 0 !== (t = o.bids.filter(b)).length ? (d = {}, t.forEach(function (e) {
                                (d[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode);
                            }), (i = p.buildRequests(t, o)) && 0 !== i.length ? (Array.isArray(i) || (i = [i]), f = Object(m.delayExecution)(r(l), i.length), i.forEach(function (i) {
                                switch (i.method) {
                                case 'GET':
                                    n(''.concat(i.url).concat(function (e) {
                                        if (e)
                                            return '?'.concat('object' === O(e) ? Object(m.parseQueryStringParameters)(e) : e);
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
                                    Object(m.logWarn)('Skipping invalid request from '.concat(p.code, '. Request type ').concat(i.type, ' must be GET or POST')), f();
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
                                        return Object(m.logError)('Bidder '.concat(p.code, ' failed to interpret the server\'s response. Continuing without bids'), null, e), void f();
                                    }
                                    function r(e) {
                                        var t, n, r, i = d[e.requestId];
                                        i ? (e.originalCpm = e.cpm, e.originalCurrency = e.currency, e.meta = e.meta || T({}, e[i.bidder]), t = T(Object(v.a)(y.a.STATUS.GOOD, i), e), n = i.adUnitCode, r = t, u[n] = !0, B(n, r, [o]) && a(n, r)) : Object(m.logWarn)('Bidder '.concat(p.code, ' made bid for unknown request ID: ').concat(e.requestId, '. Ignoring.'));
                                    }
                                    n && (Object(m.isArray)(n) ? n.forEach(r) : r(n)), f(n);
                                }
                                function t(e) {
                                    c(p.code), Object(m.logError)('Server call for '.concat(p.code, ' failed: ').concat(e, '. Continuing without bids.')), f();
                                }
                            })) : l()) : l());
                        }
                    });
                    function g(e, t, n) {
                        _(p, e, t, n);
                    }
                    function b(e) {
                        return !!p.isBidRequestValid(e) || (Object(m.logWarn)('Invalid bid sent to bidder '.concat(p.code, ': ').concat(JSON.stringify(e))), !1);
                    }
                }
                var _ = Object(b.b)('async', function (t, e, n, r) {
                    var i, o, a = u.b.getConfig('userSync.aliasSyncEnabled');
                    !t.getUserSyncs || !a && c.default.aliasRegistry[t.code] || (i = u.b.getConfig('userSync.filterSettings'), (o = t.getUserSyncs({
                        iframeEnabled: !(!i || !i.iframe && !i.all),
                        pixelEnabled: !(!i || !i.image && !i.all)
                    }, e, n, r)) && (Array.isArray(o) || (o = [o]), o.forEach(function (e) {
                        s.a.registerSync(e.type, t.code, e.url);
                    })));
                }, 'registerSyncs');
                function x(e, t) {
                    if (!u.b.getConfig('adpod.brandCategoryExclusion'))
                        return e.call(this, t);
                    t.filter(function (e) {
                        return Object(m.deepAccess)(e, 'mediaTypes.video.context') === g.a;
                    }).map(function (e) {
                        return e.bids.map(function (e) {
                            return e.bidder;
                        });
                    }).reduce(m.flatten, []).filter(m.uniques).forEach(function (n) {
                        var e = c.default.getBidAdapter(n);
                        if (e.getSpec().getMappingFileInfo) {
                            var t = e.getSpec().getMappingFileInfo(), r = t.refreshInDays ? t.refreshInDays : C, i = t.localStorageKey ? t.localStorageKey : e.getSpec().code, o = I.getDataFromLocalStorage(i);
                            try {
                                (!(o = o ? JSON.parse(o) : void 0) || Object(m.timestamp)() > o.lastUpdated + 24 * r * 60 * 60 * 1000) && Object(p.a)(t.url, {
                                    success: function (e) {
                                        try {
                                            e = JSON.parse(e);
                                            var t = {
                                                lastUpdated: Object(m.timestamp)(),
                                                mapping: e.mapping
                                            };
                                            I.setDataInLocalStorage(i, JSON.stringify(t));
                                        } catch (e) {
                                            Object(m.logError)('Failed to parse '.concat(n, ' bidder translation mapping file'));
                                        }
                                    },
                                    error: function () {
                                        Object(m.logError)('Failed to load '.concat(n, ' bidder translation file'));
                                    }
                                });
                            } catch (e) {
                                Object(m.logError)('Failed to parse '.concat(n, ' bidder translation mapping file'));
                            }
                        }
                    }), e.call(this, t);
                }
                function B(e, t, n) {
                    function r(e) {
                        return 'Invalid bid from '.concat(t.bidderCode, '. Ignoring bid: ').concat(e);
                    }
                    return e ? t ? (i = Object.keys(t), j.every(function (e) {
                        return l()(i, e) && !l()([
                            void 0,
                            null
                        ], t[e]);
                    }) ? 'native' !== t.mediaType || Object(o.g)(t, n) ? 'video' !== t.mediaType || Object(a.d)(t, n) ? !('banner' === t.mediaType && !function (e, t, n) {
                        if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10)))
                            return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), 1;
                        var r = Object(m.getBidderRequest)(n, t.bidderCode, e), i = r && r.bids && r.bids[0] && r.bids[0].sizes, o = Object(m.parseSizesInput)(i);
                        if (1 === o.length) {
                            var a = A(o[0].split('x'), 2), c = a[0], u = a[1];
                            return t.width = parseInt(c, 10), t.height = parseInt(u, 10), 1;
                        }
                    }(e, t, n)) || (Object(m.logError)(r('Banner bids require a width and height')), !1) : (Object(m.logError)(r('Video bid does not have required vastUrl or renderer property')), !1) : (Object(m.logError)(r('Native bid missing some required properties.')), !1) : (Object(m.logError)(r('Bidder '.concat(t.bidderCode, ' is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.'))), !1)) : (Object(m.logWarn)('Some adapter tried to add an undefined bid for '.concat(e, '.')), !1) : (Object(m.logWarn)('No adUnitCode was supplied to addBidResponse.'), !1);
                    var i;
                }
                Object(b.a)('checkAdUnitSetup').before(x);
            },
            10: function (e, t, n) {
                var r = n(98);
                e.exports = r;
            },
            100: function (e, t, n) {
                var r = n(30), i = n(101), o = n(46), a = n(47), c = n(55), u = n(28), s = n(73), d = Object.getOwnPropertyDescriptor;
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
            101: function (e, t, n) {
                'use strict';
                var r = {}.propertyIsEnumerable, i = Object.getOwnPropertyDescriptor, o = i && !r.call({ 1: 2 }, 1);
                t.f = o ? function (e) {
                    var t = i(this, e);
                    return !!t && t.enumerable;
                } : r;
            },
            102: function (e, t, n) {
                function r(e, t) {
                    var n = c[a(e)];
                    return n == s || n != u && ('function' == typeof t ? i(t) : !!t);
                }
                var i = n(31), o = /#|\.prototype\./, a = r.normalize = function (e) {
                        return String(e).replace(o, '.').toLowerCase();
                    }, c = r.data = {}, u = r.NATIVE = 'N', s = r.POLYFILL = 'P';
                e.exports = r;
            },
            103: function (e, t, n) {
                var r = n(27), i = n(104), o = n(22)('species');
                e.exports = function (e, t) {
                    var n;
                    return i(e) && ('function' == typeof (n = e.constructor) && (n === Array || i(n.prototype)) || r(n) && null === (n = n[o])) && (n = void 0), new (void 0 === n ? Array : n)(0 === t ? 0 : t);
                };
            },
            104: function (e, t, n) {
                var r = n(48);
                e.exports = Array.isArray || function (e) {
                    return 'Array' == r(e);
                };
            },
            105: function (e, t, n) {
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
            106: function (e, t, n) {
                var r = n(77);
                e.exports = r && !Symbol.sham && 'symbol' == typeof Symbol.iterator;
            },
            107: function (e, t, n) {
                n(108);
                var r = n(52);
                e.exports = r('Array', 'includes');
            },
            108: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(78).includes, o = n(51);
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
            109: function (e, t, n) {
                var r = n(58), i = Math.max, o = Math.min;
                e.exports = function (e, t) {
                    var n = r(e);
                    return n < 0 ? i(n + t, 0) : o(n, t);
                };
            },
            11: function (e, t, n) {
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
                var r = n(163), i = n.n(r);
                function o(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                var a = i()({ ready: i.a.SYNC | i.a.ASYNC | i.a.QUEUE }), c = a.get;
            },
            110: function (e, t, n) {
                n(111), n(128), n(89), n(130);
                var r = n(43);
                e.exports = r.Set;
            },
            111: function (e, t, n) {
                'use strict';
                var r = n(112), i = n(117);
                e.exports = r('Set', function (t) {
                    return function (e) {
                        return t(this, arguments.length ? e : void 0);
                    };
                }, i);
            },
            112: function (e, t, n) {
                'use strict';
                var f = n(14), l = n(26), p = n(80), g = n(31), b = n(32), v = n(18), y = n(83), h = n(27), m = n(64), S = n(33).f, A = n(56).forEach, E = n(30), r = n(54), O = r.set, T = r.getterFor;
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
            113: function (e, t, n) {
                var r = n(31);
                e.exports = !r(function () {
                    return Object.isExtensible(Object.preventExtensions({}));
                });
            },
            114: function (e, t, n) {
                'use strict';
                var r = n(63), i = n(62);
                e.exports = r ? {}.toString : function () {
                    return '[object ' + i(this) + ']';
                };
            },
            115: function (e, t, n) {
                var r = n(26), i = n(116), o = r.WeakMap;
                e.exports = 'function' == typeof o && /native code/.test(i(o));
            },
            116: function (e, t, n) {
                var r = n(76), i = Function.toString;
                'function' != typeof r.inspectSource && (r.inspectSource = function (e) {
                    return i.call(e);
                }), e.exports = r.inspectSource;
            },
            117: function (e, t, n) {
                'use strict';
                var s = n(33).f, d = n(84), f = n(122), l = n(24), p = n(83), g = n(18), a = n(66), c = n(127), b = n(30), v = n(80).fastKey, r = n(54), y = r.set, h = r.getterFor;
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
            118: function (e, t, n) {
                var r = n(30), a = n(33), c = n(15), u = n(119);
                e.exports = r ? Object.defineProperties : function (e, t) {
                    c(e);
                    for (var n, r = u(t), i = r.length, o = 0; o < i;)
                        a.f(e, n = r[o++], t[n]);
                    return e;
                };
            },
            119: function (e, t, n) {
                var r = n(120), i = n(85);
                e.exports = Object.keys || function (e) {
                    return r(e, i);
                };
            },
            12: function (e, t, n) {
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
            120: function (e, t, n) {
                var a = n(28), c = n(47), u = n(78).indexOf, s = n(53);
                e.exports = function (e, t) {
                    var n, r = c(e), i = 0, o = [];
                    for (n in r)
                        !a(s, n) && a(r, n) && o.push(n);
                    for (; t.length > i;)
                        a(r, n = t[i++]) && (~u(o, n) || o.push(n));
                    return o;
                };
            },
            121: function (e, t, n) {
                var r = n(29);
                e.exports = r('document', 'documentElement');
            },
            122: function (e, t, n) {
                var i = n(86);
                e.exports = function (e, t, n) {
                    for (var r in t)
                        n && n.unsafe && e[r] ? e[r] = t[r] : i(e, r, t[r], n);
                    return e;
                };
            },
            123: function (e, t, n) {
                'use strict';
                function i() {
                    return this;
                }
                var o = n(87).IteratorPrototype, a = n(84), c = n(46), u = n(64), s = n(40);
                e.exports = function (e, t, n) {
                    var r = t + ' Iterator';
                    return e.prototype = a(o, { next: c(1, n) }), u(e, r, !1, !0), s[r] = i, e;
                };
            },
            124: function (e, t, n) {
                var r = n(31);
                e.exports = !r(function () {
                    function e() {
                    }
                    return e.prototype.constructor = null, Object.getPrototypeOf(new e()) !== e.prototype;
                });
            },
            125: function (e, t, n) {
                var i = n(15), o = n(126);
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
            126: function (e, t, n) {
                var r = n(27);
                e.exports = function (e) {
                    if (!r(e) && null !== e)
                        throw TypeError('Can\'t set ' + String(e) + ' as a prototype');
                    return e;
                };
            },
            127: function (e, t, n) {
                'use strict';
                var r = n(29), i = n(33), o = n(22), a = n(30), c = o('species');
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
            128: function (e, t) {
            },
            129: function (e, t, n) {
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
            13: function (e, t, n) {
                var r = n(107);
                e.exports = r;
            },
            130: function (e, t, n) {
                n(131);
                var r = n(132), i = n(26), o = n(62), a = n(32), c = n(40), u = n(22)('toStringTag');
                for (var s in r) {
                    var d = i[s], f = d && d.prototype;
                    f && o(f) !== u && a(f, u, s), c[s] = c.Array;
                }
            },
            131: function (e, t, n) {
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
            132: function (e, t) {
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
            133: function (e, t, n) {
                n(14)({
                    target: 'Set',
                    stat: !0
                }, { from: n(134) });
            },
            134: function (e, t, n) {
                'use strict';
                var s = n(21), d = n(24), f = n(18);
                e.exports = function (e, t, n) {
                    var r, i, o, a, c = arguments.length, u = 1 < c ? t : void 0;
                    return s(this), (r = void 0 !== u) && s(u), null == e ? new this() : (i = [], r ? (o = 0, a = d(u, 2 < c ? n : void 0, 2), f(e, function (e) {
                        i.push(a(e, o++));
                    })) : f(e, i.push, i), new this(i));
                };
            },
            135: function (e, t, n) {
                n(14)({
                    target: 'Set',
                    stat: !0
                }, { of: n(136) });
            },
            136: function (e, t, n) {
                'use strict';
                e.exports = function () {
                    for (var e = arguments.length, t = new Array(e); e--;)
                        t[e] = arguments[e];
                    return new this(t);
                };
            },
            137: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(138);
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
            138: function (e, t, n) {
                'use strict';
                var i = n(15), o = n(21);
                e.exports = function () {
                    for (var e = i(this), t = o(e.add), n = 0, r = arguments.length; n < r; n++)
                        t.call(e, arguments[n]);
                    return e;
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
                    deleteAll: function () {
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
                var h = n(26), m = n(100).f, S = n(102), A = n(43), E = n(24), O = n(32), T = n(28);
                e.exports = function (e, t) {
                    var n, r, i, o, a, c, u, s, d = e.target, f = e.global, l = e.stat, p = e.proto, g = f ? h : l ? h[d] : (h[d] || {}).prototype, b = f ? A : A[d] || (A[d] = {}), v = b.prototype;
                    for (i in t)
                        n = !S(f ? i : d + (l ? '.' : '#') + i, e.forced) && g && T(g, i), a = b[i], n && (c = e.noTargetGet ? (s = m(g, i)) && s.value : g[i]), o = n && c ? c : t[i], n && typeof a == typeof o || (u = e.bind && n ? E(o, h) : e.wrap && n ? y(o) : p && 'function' == typeof o ? E(Function.call, o) : o, (e.sham || o && o.sham || a && a.sham) && O(u, 'sham', !0), b[i] = u, p && (T(A, r = d + 'Prototype') || O(A, r, {}), A[r][i] = o, e.real && v && !v[i] && O(v, i, o)));
                };
            },
            140: function (e, t, n) {
                'use strict';
                var a = n(15), c = n(21);
                e.exports = function () {
                    for (var e, t = a(this), n = c(t.delete), r = !0, i = 0, o = arguments.length; i < o; i++)
                        e = n.call(t, arguments[i]), r = r && e;
                    return !!r;
                };
            },
            141: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(15), a = n(24), c = n(37), u = n(18);
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
            142: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(29), a = n(15), c = n(21), u = n(41), s = n(18);
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
            143: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), c = n(29), u = n(15), s = n(21), d = n(24), f = n(41), l = n(37), p = n(18);
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
            144: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(15), a = n(24), c = n(37), u = n(18);
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
            145: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(29), a = n(15), c = n(21), u = n(41), s = n(18);
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
            146: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(15), a = n(21), c = n(18);
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
            147: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(29), a = n(15), c = n(21), u = n(90), s = n(18);
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
            148: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(15), a = n(21), c = n(18);
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
            149: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(15), a = n(37), c = n(18);
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
                var r = n(14), i = n(16), c = n(29), u = n(15), s = n(21), d = n(24), f = n(41), l = n(37), p = n(18);
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
            151: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), a = n(15), c = n(21), u = n(37), s = n(18);
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
            152: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(15), a = n(24), c = n(37), u = n(18);
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
            153: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(29), a = n(15), c = n(21), u = n(41), s = n(18);
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
            154: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(29), a = n(15), c = n(21), u = n(41), s = n(18);
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
            155: function (e, t, n) {
                n(89), n(156);
                var r = n(43);
                e.exports = r.Array.from;
            },
            156: function (e, t, n) {
                var r = n(14), i = n(157);
                r({
                    target: 'Array',
                    stat: !0,
                    forced: !n(159)(function (e) {
                        Array.from(e);
                    })
                }, { from: i });
            },
            157: function (e, t, n) {
                'use strict';
                var v = n(24), y = n(57), h = n(82), m = n(81), S = n(50), A = n(158), E = n(61);
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
            158: function (e, t, n) {
                'use strict';
                var i = n(55), o = n(33), a = n(46);
                e.exports = function (e, t, n) {
                    var r = i(t);
                    r in e ? o.f(e, r, a(0, n)) : e[r] = n;
                };
            },
            159: function (e, t, n) {
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
            16: function (e, t) {
                e.exports = !0;
            },
            160: function (e, t) {
                e.exports = function e(t) {
                    var n = Array.isArray(t) ? [] : {};
                    for (var r in t) {
                        var i = t[r];
                        n[r] = i && 'object' == typeof i ? e(i) : i;
                    }
                    return n;
                };
            },
            161: function (e, t, n) {
                'use strict';
                t.a = function (e, t, n, r, i) {
                    for (t = t.split ? t.split('.') : t, r = 0; r < t.length; r++)
                        e = e ? e[t[r]] : i;
                    return e === i ? n : e;
                };
            },
            162: function (e, t, n) {
                'use strict';
                t.a = function (e, t, n) {
                    t.split && (t = t.split('.'));
                    for (var r, i = 0, o = t.length, a = e; i < o; ++i)
                        r = a[t[i]], a = a[t[i]] = i === o - 1 ? n : null != r ? r : !~t[i + 1].indexOf('.') && -1 < +t[i + 1] ? [] : {};
                };
            },
            163: function (e, t) {
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
            17: function (e, t, n) {
                'use strict';
                t.a = function () {
                    return window.pbjs;
                }, window.pbjs = window.pbjs || {}, window.pbjs.cmd = window.pbjs.cmd || [], window.pbjs.que = window.pbjs.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push('pbjs');
            },
            18: function (e, t, n) {
                function p(e, t) {
                    this.stopped = e, this.result = t;
                }
                var g = n(15), b = n(81), v = n(50), y = n(24), h = n(61), m = n(82);
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
            20: function (e, t, n) {
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
                                    try {
                                        var t = e.querySelector('link[rel=\'canonical\']');
                                        if (null !== t)
                                            return t.href;
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
            21: function (e, t) {
                e.exports = function (e) {
                    if ('function' != typeof e)
                        throw TypeError(String(e) + ' is not a function');
                    return e;
                };
            },
            22: function (e, t, n) {
                var r = n(26), i = n(75), o = n(28), a = n(59), c = n(77), u = n(106), s = i('wks'), d = r.Symbol, f = u ? d : d && d.withoutSetter || a;
                e.exports = function (e) {
                    return o(s, e) || (c && o(d, e) ? s[e] = d[e] : s[e] = f('Symbol.' + e)), s[e];
                };
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
                    }, c);
            },
            230: function (e, t, n) {
                n(231);
                var r = n(52);
                e.exports = r('Array', 'findIndex');
            },
            231: function (e, t, n) {
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
            238: function (e, t, n) {
                'use strict';
                t.a = function () {
                    window.addEventListener('message', u, !1);
                };
                var r = n(9), b = n.n(r), v = n(38), i = n(5), o = n.n(i), y = n(0), h = n(23), a = n(10), m = n.n(a), S = n(12), c = n(13), d = n.n(c), A = o.a.EVENTS.BID_WON;
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
                        if (p && 'Prebid Request' === f.message && (n = e, r = (t = p).adId, i = t.ad, o = t.adUrl, a = t.width, c = t.height, u = t.renderer, s = t.cpm, Object(S.c)(u) ? Object(S.b)(u, t) : r && (E(t), n.source.postMessage(JSON.stringify({
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
                            if ('allAssetRequest' === f.action ? (l = Object(v.c)(f, p), e.source.postMessage(JSON.stringify(l), e.origin)) : 'resizeNativeHeight' === f.action && (p.height = f.height, p.width = f.width, E(p)), 'click' === Object(v.b)(f, p))
                                return;
                            h.a.addWinningBid(p), b.a.emit(A, p);
                        }
                    }
                }
                function E(e) {
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
            239: function (e, t, n) {
                'use strict';
                t.a = function (e) {
                    const $___old_22f3bba103115352 = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                    try {
                        if ($___old_22f3bba103115352)
                            ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_16c53395a822db48.sessionStorage));
                        return function () {
                            var t;
                            try {
                                e = e || window.sessionStorage, t = JSON.parse(e.getItem(u));
                            } catch (e) {
                            }
                            t && p(t, !0);
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_22f3bba103115352)
                            ({}.constructor.defineProperty(window, 'sessionStorage', $___old_22f3bba103115352));
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
            24: function (e, t, n) {
                var o = n(21);
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
                n(8);
                var o = n(0), i = n(3), r = n(13), a = (n.n(r), n(11)), c = 'outstream', u = 'instream';
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
                    return _;
                });
                var r = n(45), i = n(10), a = n.n(i), o = n(13), c = n.n(o), u = n(79), s = n.n(u), d = n(0);
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
                var b = n(91), v = n(0), y = n(5), h = 'TRUE' === v.getParameterByName(y.DEBUG_MODE).toUpperCase(), m = window.location.origin, S = 'random', A = {};
                A[S] = !0, A.fixed = !0;
                var E = S, O = {
                        LOW: 'low',
                        MEDIUM: 'medium',
                        HIGH: 'high',
                        AUTO: 'auto',
                        DENSE: 'dense',
                        CUSTOM: 'custom'
                    };
                var T, I, j, C, w, _ = (C = [], w = null, x(), {
                        getCurrentBidder: function () {
                            return w;
                        },
                        getConfig: function () {
                            if (arguments.length <= 1 && 'function' != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                                var e = arguments.length <= 0 ? void 0 : arguments[0];
                                return e ? v.deepAccess(B(), e) : B();
                            }
                            return function (e, t) {
                                var n = t;
                                if ('string' != typeof e && (n = e, e = '*'), 'function' == typeof n) {
                                    var r = {
                                        topic: e,
                                        callback: n
                                    };
                                    return C.push(r), function () {
                                        C.splice(C.indexOf(r), 1);
                                    };
                                }
                                v.logError('listener must be a function');
                            }.apply(void 0, arguments);
                        },
                        setConfig: function (r) {
                            var e, i;
                            v.isPlainObject(r) ? (e = Object.keys(r), i = {}, e.forEach(function (e) {
                                var t = 'fpd' === e ? 'ortb2' : e, n = 'fpd' === e ? U(r[e]) : r[e];
                                v.isPlainObject(T[t]) && v.isPlainObject(n) && (n = g({}, T[t], n)), i[t] = I[t] = n;
                            }), k(i)) : v.logError('setConfig options must be an object');
                        },
                        setDefaults: function (e) {
                            v.isPlainObject(T) ? (g(T, e), g(I, e)) : v.logError('defaults must be an object');
                        },
                        resetConfig: x,
                        runWithBidder: D,
                        callbackWithBidder: function (o) {
                            return function (i) {
                                return function () {
                                    if ('function' == typeof i) {
                                        for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                                            n[r] = arguments[r];
                                        return D(o, (e = v.bind).call.apply(e, [
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
                                    j[r] || (j[r] = {}), Object.keys(i.config).forEach(function (e) {
                                        var t = 'fpd' === e ? 'ortb2' : e, n = 'fpd' === e ? U(i.config[e]) : i.config[e];
                                        v.isPlainObject(n) ? j[r][t] = g({}, j[r][t] || {}, n) : j[r][t] = n;
                                    });
                                });
                            } catch (e) {
                                v.logError(e);
                            }
                        },
                        getBidderConfig: function () {
                            return j;
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
                function x() {
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
                    I && k(Object.keys(I).reduce(function (e, t) {
                        return I[t] !== n[t] && (e[t] = n[t] || {}), e;
                    }, {})), I = n, j = {};
                }
                function B() {
                    if (w && j && v.isPlainObject(j[w])) {
                        var n = j[w], e = new s.a(Object.keys(I).concat(Object.keys(n)));
                        return b(e).reduce(function (e, t) {
                            return void 0 === n[t] ? e[t] = I[t] : void 0 !== I[t] && v.isPlainObject(n[t]) ? e[t] = Object(d.mergeDeep)({}, I[t], n[t]) : e[t] = n[t], e;
                        }, {});
                    }
                    return g({}, I);
                }
                function U(r) {
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
                function k(t) {
                    var n = Object.keys(t);
                    C.filter(function (e) {
                        return c()(n, e.topic);
                    }).forEach(function (e) {
                        e.callback(l({}, e.topic, t[e.topic]));
                    }), C.filter(function (e) {
                        return '*' === e.topic;
                    }).forEach(function (e) {
                        return e.callback(t);
                    });
                }
                function D(e, t) {
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
                var r = n(30), i = n(73), o = n(15), a = n(55), c = Object.defineProperty;
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
                        }).reduce(C.flatten, []).map(function (e) {
                            return {
                                bidId: e.bidId,
                                bidder: e.bidder,
                                adUnitCode: e.adUnitCode,
                                auctionId: e.auctionId
                            };
                        })).length && q.emit(G.EVENTS.BID_TIMEOUT, r)), b = F, i = Date.now(), q.emit(G.EVENTS.AUCTION_END, E()), Q(y, function () {
                            try {
                                var e;
                                null != g && (e = f.filter(P.bind.call(C.adUnitsFilter, this, d)).reduce(ee, {}), g.apply(pbjs, [
                                    e,
                                    n,
                                    p
                                ]), g = null);
                            } catch (e) {
                                P.logError('Error executing bidsBackHandler', null, e);
                            } finally {
                                r.length && M.callTimedOutBidders(o, r, m);
                                var t = x.b.getConfig('userSync') || {};
                                t.enableOverride || N(t.syncDelay);
                            }
                        }));
                    }
                    function T() {
                        P.logInfo('Bids Received for Auction with id: '.concat(p), f), b = F, O(!1, !0);
                    }
                    function I(e) {
                        A.add(e);
                    }
                    function j(n) {
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
                                                    var t = e.adUnitCode, n = e.bid, r = e.bidderRequest, i = e.auctionId, o = r.start, a = D({}, n, {
                                                            auctionId: i,
                                                            responseTimestamp: Object(C.timestamp)(),
                                                            requestTimestamp: o,
                                                            cpm: parseFloat(n.cpm) || 0,
                                                            bidder: n.bidderCode,
                                                            adUnitCode: t
                                                        });
                                                    a.timeToRespond = a.responseTimestamp - a.requestTimestamp, q.emit(G.EVENTS.BID_ADJUSTMENT, a);
                                                    var c = r.bids && B()(r.bids, function (e) {
                                                            return e.adUnitCode == t && e.bidId == a.requestId;
                                                        }), u = c && c.renderer, s = a.mediaType, d = c && c.mediaTypes && c.mediaTypes[s], f = d && d.renderer, l = null;
                                                    f && f.url && f.render && (!0 !== f.backupOnly || !n.renderer) ? l = f : u && u.url && u.render && (!0 !== u.backupOnly || !n.renderer) && (l = u), l && (a.renderer = _.a.install({ url: l.url }), a.renderer.setRender(l.render));
                                                    var p = Z(n.mediaType, c, x.b.getConfig('mediaTypePriceGranularity')), g = Object(w.a)(a.cpm, 'object' === k(p) ? p : x.b.getConfig('customPriceBucket'), x.b.getConfig('currency.granularityMultiplier'));
                                                    return a.pbLg = g.low, a.pbMg = g.med, a.pbHg = g.high, a.pbAg = g.auto, a.pbDg = g.dense, a.pbCg = g.custom, a;
                                                }({
                                                    adUnitCode: e,
                                                    bid: t,
                                                    bidderRequest: this,
                                                    auctionId: i.getAuctionId()
                                                });
                                                'video' === n.mediaType ? function (e, t, n, r) {
                                                    var i = !0, o = Object(C.getBidRequest)(t.originalRequestId || t.requestId, [n]), a = o && Object(C.deepAccess)(o, 'mediaTypes.video'), c = a && Object(C.deepAccess)(a, 'context');
                                                    x.b.getConfig('cache.url') && c !== R.b && (!t.videoCacheKey || x.b.getConfig('cache.ignoreBidderCacheKey') ? (i = !1, X(e, t, r, o)) : t.vastUrl || (P.logError('videoCacheKey specified but not required vastUrl for video bid'), i = !1)), i && ($(e, t), r());
                                                }(i, n, this, d) : ($(i, n), d());
                                            },
                                            adapterDone: function () {
                                                var t, e = i.getBidRequests(), n = x.b.getConfig('auctionOptions');
                                                c.add(this), !n || P.isEmpty(n) || (t = n.secondaryBidders) && !e.every(function (e) {
                                                    return U()(t, e.bidderCode);
                                                }) && (e = e.filter(function (e) {
                                                    return !U()(t, e.bidderCode);
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
                            var r = !0, i = x.b.getConfig('maxRequestsPerOrigin') || z;
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
                                dispatch: j,
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
                var C = n(0), w = n(45), a = n(38), o = n(94), _ = n(12), x = n(3), r = n(44), i = n(11), c = n(10), B = n.n(c), u = n(13), U = n.n(u), R = n(25), s = n(2);
                function k(e) {
                    return (k = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function D() {
                    return (D = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var N = r.a.syncUsers, P = n(0), M = n(8).default, q = n(9), G = n(5), W = 'started', L = 'inProgress', F = 'completed';
                q.on(G.EVENTS.BID_ADJUSTMENT, function (e) {
                    !function (e) {
                        var t, n = e.bidderCode, r = e.cpm;
                        if (pbjs.bidderSettings && (n && pbjs.bidderSettings[n] && 'function' == typeof pbjs.bidderSettings[n].bidCpmAdjustment ? t = pbjs.bidderSettings[n].bidCpmAdjustment : pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD] && 'function' == typeof pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjs.bidderSettings[G.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t))
                            try {
                                r = t(e.cpm, D({}, e));
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
                    t.timeToRespond > e.getTimeout() + x.b.getConfig('timeoutBuffer') && e.executeCallback(!0);
                }
                function $(e, t) {
                    var n = e.getBidRequests(), r = B()(n, function (e) {
                            return e.bidderCode === t.bidderCode;
                        });
                    !function (t, e) {
                        var n;
                        {
                            var r;
                            t.bidderCode && (0 < t.cpm || t.dealId) && (r = B()(e.bids, function (e) {
                                return e.adUnitCode === t.adUnitCode;
                            }), n = function (e, t, n) {
                                if (!t)
                                    return {};
                                var r = {}, i = pbjs.bidderSettings;
                                {
                                    var o;
                                    i && (o = g(t.mediaType, e, n), b(r, o, t), e && i[e] && i[e][G.JSON_MAPPING.ADSERVER_TARGETING] && (b(r, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting));
                                }
                                t.native && (r = D({}, r, Object(a.e)(t, n)));
                                return r;
                            }(t.bidderCode, t, r));
                        }
                        t.adserverTargeting = D(t.adserverTargeting || {}, n);
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
                            var r = Object(C.deepAccess)(t, 'mediaTypes.'.concat(s.d, '.context'), 'instream');
                            if (n[''.concat(s.d, '-').concat(r)])
                                return n[''.concat(s.d, '-').concat(r)];
                        }
                        return n[e];
                    }
                }
                var f = function (e, t) {
                        var n = Z(e, t, x.b.getConfig('mediaTypePriceGranularity'));
                        return 'string' == typeof e && n ? 'string' == typeof n ? n : 'custom' : x.b.getConfig('priceGranularity');
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
                                return Object(C.getValue)(e, t);
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
                        void 0 === B()(i, function (e) {
                            return e.key === t;
                        }) && i.push(r(t, 'videoCacheKey'));
                    }), !x.b.getConfig('cache.url') || t && !1 === P.deepAccess(u, ''.concat(t, '.sendStandardTargeting')) || (o = Object(C.parseUrl)(x.b.getConfig('cache.url')), void 0 === B()(i, function (e) {
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
                var r = n(16), i = n(90);
                e.exports = r ? i : function (e) {
                    return Set.prototype.values.call(e);
                };
            },
            374: function (e, t, n) {
                n(375);
                var r = n(52);
                e.exports = r('String', 'includes');
            },
            375: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(376), o = n(49);
                r({
                    target: 'String',
                    proto: !0,
                    forced: !n(378)('includes')
                }, {
                    includes: function (e, t) {
                        return !!~String(o(this)).indexOf(i(e), 1 < arguments.length ? t : void 0);
                    }
                });
            },
            376: function (e, t, n) {
                var r = n(377);
                e.exports = function (e) {
                    if (r(e))
                        throw TypeError('The method doesn\'t accept regular expressions');
                    return e;
                };
            },
            377: function (e, t, n) {
                var r = n(27), i = n(48), o = n(22)('match');
                e.exports = function (e) {
                    var t;
                    return r(e) && (void 0 !== (t = e[o]) ? !!t : 'RegExp' == i(e));
                };
            },
            378: function (e, t, n) {
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
                var d = n(0), r = n(13), a = n.n(r);
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
                var r = n(13), i = n.n(r), o = n(0), a = {}, c = [
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
                    };
                }
            },
            40: function (e, t) {
                e.exports = {};
            },
            41: function (e, t, n) {
                var i = n(15), o = n(21), a = n(22)('species');
                e.exports = function (e, t) {
                    var n, r = i(e).constructor;
                    return void 0 === r || null == (n = i(r)[a]) ? t : o(n);
                };
            },
            42: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return d;
                }), n.d(t, 'b', function () {
                    return R;
                }), t.c = k, n.d(t, 'd', function () {
                    return l;
                });
                var A = n(0), E = n(3), O = n(38), r = n(23), i = n(93), o = n(2), a = n(11), c = n(13), T = n.n(c), u = n(10), I = n.n(u);
                function j() {
                    return (j = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function C(e, t, n) {
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
                var _ = n(0), x = n(5), B = [], U = Object.keys(x.TARGETING_KEYS).map(function (e) {
                        return x.TARGETING_KEYS[e];
                    }), d = {
                        isBidNotExpired: function (e) {
                            return e.responseTimestamp + 1000 * e.ttl - 1000 > Object(A.timestamp)();
                        },
                        isUnusedBid: function (e) {
                            return e && (e.status && !T()([x.BID_STATUS.RENDERED], e.status) || !e.status);
                        }
                    }, R = Object(a.b)('sync', function (e, r) {
                        var i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                        if (3 < arguments.length && void 0 !== arguments[3] && arguments[3])
                            return e;
                        var o = [], a = E.b.getConfig('sendBidsControl.dealPrioritization'), c = Object(A.groupBy)(e, 'adUnitCode');
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
                var D, N, f, l = (D = r.a, f = {}, (N = {}).setLatestAuctionForAdUnit = function (e, t) {
                        f[e] = t;
                    }, N.resetPresetTargeting = function (e, t) {
                        var n, i;
                        Object(A.isGptPubadsDefined)() && (n = M(e), i = D.getAdUnits().filter(function (e) {
                            return T()(n, e.code);
                        }), window.googletag.pubads().getSlots().forEach(function (n) {
                            var r = _.isFn(t) && t(n);
                            B.forEach(function (t) {
                                i.forEach(function (e) {
                                    (e.code === n.getAdUnitPath() || e.code === n.getSlotElementId() || _.isFn(r) && r(e.code)) && n.setTargeting(t, null);
                                });
                            });
                        }));
                    }, N.resetPresetTargetingAST = function (e) {
                        M(e).forEach(function (e) {
                            var t, n, r = window.apntag.getTag(e);
                            r && r.keywords && (t = Object.keys(r.keywords), n = {}, t.forEach(function (e) {
                                T()(B, e.toLowerCase()) || (n[e] = r.keywords[e]);
                            }), window.apntag.modifyTag(e, { keywords: n }));
                        });
                    }, N.getAllTargeting = function (e) {
                        var t, n, r, i, o, a, c, u, s, d, f = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : q(), l = M(e), p = (c = l, u = f, s = N.getWinningBids(c, u), d = G(), (s = s.map(function (o) {
                                return C({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function (e) {
                                    return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === d.indexOf(e);
                                }).reduce(function (e, t) {
                                    var n = [o.adserverTargeting[t]], r = C({}, t.substring(0, 20), n);
                                    if (t !== x.TARGETING_KEYS.DEAL)
                                        return [].concat(w(e), [r]);
                                    var i = C({}, ''.concat(t, '_').concat(o.bidderCode).substring(0, 20), n);
                                    return [].concat(w(e), [
                                        r,
                                        i
                                    ]);
                                }, []));
                            })).concat((a = l, f.filter(function (e) {
                                return T()(a, e.adUnitCode);
                            }).map(function (e) {
                                return j({}, e);
                            }).reduce(W, []).map(L).filter(function (e) {
                                return e;
                            }))).concat(E.b.getConfig('enableSendAllBids') ? (n = l, r = f, i = U.concat(O.a), o = E.b.getConfig('sendBidsControl.bidLimit'), R(r, A.getHighestCpm, o).map(function (t) {
                                if (P(t, n))
                                    return C({}, t.adUnitCode, F(t, i.filter(function (e) {
                                        return void 0 !== t.adserverTargeting[e];
                                    })));
                            }).filter(function (e) {
                                return e;
                            })) : function (e, t) {
                                if (!0 !== E.b.getConfig('targetingControls.alwaysIncludeDeals'))
                                    return [];
                                var n = U.concat(O.a);
                                return R(t, A.getHighestCpm).map(function (t) {
                                    if (t.dealId && P(t, e))
                                        return C({}, t.adUnitCode, F(t, n.filter(function (e) {
                                            return void 0 !== t.adserverTargeting[e];
                                        })));
                                }).filter(function (e) {
                                    return e;
                                });
                            }(l, f)).concat((t = l, D.getAdUnits().filter(function (e) {
                                return T()(t, e.code) && g(e);
                            }).map(function (e) {
                                return C({}, e.code, (t = g(e), Object.keys(t).map(function (e) {
                                    return C({}, e, _.isArray(t[e]) ? t[e] : t[e].split(','));
                                })));
                                var t;
                            }))));
                        function g(e) {
                            return Object(A.deepAccess)(e, x.JSON_MAPPING.ADSERVER_TARGETING);
                        }
                        p.map(function (t) {
                            Object.keys(t).map(function (e) {
                                t[e].map(function (e) {
                                    -1 === B.indexOf(Object.keys(e)[0]) && (B = Object.keys(e).concat(B));
                                });
                            });
                        });
                        var b = Object.keys(j({}, x.DEFAULT_TARGETING_KEYS, x.NATIVE_KEYS)), v = E.b.getConfig('targetingControls.allowTargetingKeys') || b;
                        Array.isArray(v) && 0 < v.length && (p = function (e, r) {
                            var i = j({}, x.TARGETING_KEYS, x.NATIVE_KEYS), o = Object.keys(i), a = {};
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
                            return C({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function (e) {
                                return C({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(', '));
                            }).reduce(function (e, t) {
                                return j(t, e);
                            }, {}));
                        }).reduce(function (e, t) {
                            var n = Object.keys(t)[0];
                            return e[n] = j({}, e[n], t[n]), e;
                        }, {});
                        var y, h, m, S = E.b.getConfig('targetingControls.auctionKeyMaxChars');
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
                                        return _.logMessage('Attempting to set key value for slot: '.concat(r.getSlotElementId(), ' key: ').concat(t, ' value: ').concat(e)), e;
                                    }).forEach(function (e) {
                                        r.setTargeting(t, e);
                                    });
                                });
                            });
                        });
                    }, N.getWinningBids = function (e) {
                        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : q(), t = M(e);
                        return n.filter(function (e) {
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
                    }, N.setTargetingForAst = function (e) {
                        var r = N.getAllTargeting(e);
                        try {
                            N.resetPresetTargetingAST(e);
                        } catch (e) {
                            _.logError('unable to reset targeting for AST' + e);
                        }
                        Object.keys(r).forEach(function (n) {
                            return Object.keys(r[n]).forEach(function (e) {
                                var t;
                                _.logMessage('Attempting to set targeting for targetId: '.concat(n, ' key: ').concat(e, ' value: ').concat(r[n][e])), (_.isStr(r[n][e]) || _.isArray(r[n][e])) && (t = {}, e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, { overrideKeyValue: !0 }));
                            });
                        });
                    }, N.isApntagDefined = function () {
                        if (window.apntag && _.isFn(window.apntag.setKeywords))
                            return !0;
                    }, N);
                function P(e, t) {
                    return e.adserverTargeting && t && (_.isArray(t) && T()(t, e.adUnitCode) || 'string' == typeof t && e.adUnitCode === t);
                }
                function M(e) {
                    return 'string' == typeof e ? [e] : _.isArray(e) ? e : D.getAdUnitCodes() || [];
                }
                function q() {
                    var e = D.getBidsReceived();
                    return E.b.getConfig('useBidCache') || (e = e.filter(function (e) {
                        return f[e.adUnitCode] === e.auctionId;
                    })), e = e.filter(function (e) {
                        return Object(A.deepAccess)(e, 'video.context') !== o.a;
                    }).filter(function (e) {
                        return 'banner' !== e.mediaType || Object(i.c)([
                            e.width,
                            e.height
                        ]);
                    }).filter(d.isUnusedBid).filter(d.isBidNotExpired), R(e, A.getOldestHighestCpmBid);
                }
                function G() {
                    return D.getStandardBidderAdServerTargeting().map(function (e) {
                        return e.key;
                    }).concat(U).filter(A.uniques);
                }
                function W(r, i, e, t) {
                    return Object.keys(i.adserverTargeting).filter(p()).forEach(function (e) {
                        var t, n;
                        r.length && r.filter((n = e, function (e) {
                            return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n];
                        })).forEach((t = e, function (e) {
                            _.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(A.uniques), delete i.adserverTargeting[t];
                        }));
                    }), r.push(i), r;
                }
                function p() {
                    var t = G().concat(O.a);
                    return function (e) {
                        return -1 === t.indexOf(e);
                    };
                }
                function L(t) {
                    return C({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(p()).map(function (e) {
                        return C({}, e.substring(0, 20), [t.adserverTargeting[e]]);
                    }));
                }
                function F(t, e) {
                    return e.map(function (e) {
                        return C({}, ''.concat(e, '_').concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]]);
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
                var a = n(0), r = n(3), i = n(13), o = n.n(i), c = n(7);
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
                var r = n(72), i = n(49);
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
                var r, i, o, a, c, u, s, d, f = n(115), l = n(26), p = n(27), g = n(32), b = n(28), v = n(65), y = n(53), h = l.WeakMap;
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
            541: function (e, t, n) {
                var r = n(542);
                e.exports = r;
            },
            542: function (e, t, n) {
                n(543);
                var r = n(43);
                e.exports = r.Number.isInteger;
            },
            543: function (e, t, n) {
                n(14)({
                    target: 'Number',
                    stat: !0
                }, { isInteger: n(544) });
            },
            544: function (e, t, n) {
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
                var S = n(24), A = n(72), E = n(57), O = n(50), T = n(103), I = [].push;
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
                var r = n(62), i = n(40), o = n(22)('iterator');
                e.exports = function (e) {
                    if (null != e)
                        return e[o] || e['@@iterator'] || i[r(e)];
                };
            },
            62: function (e, t, n) {
                var r = n(63), i = n(48), o = n(22)('toStringTag'), a = 'Arguments' == i(function () {
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
                var o = n(63), a = n(33).f, c = n(32), u = n(28), s = n(114), d = n(22)('toStringTag');
                e.exports = function (e, t, n, r) {
                    var i;
                    e && (i = n ? e : e.prototype, u(i, d) || a(i, d, {
                        configurable: !0,
                        value: t
                    }), r && !o && c(i, 'toString', s));
                };
            },
            65: function (e, t, n) {
                var r = n(75), i = n(59), o = r('keys');
                e.exports = function (e) {
                    return o[e] || (o[e] = i(e));
                };
            },
            66: function (e, t, n) {
                'use strict';
                function y() {
                    return this;
                }
                var h = n(14), m = n(123), S = n(88), A = n(125), E = n(64), O = n(32), T = n(86), r = n(22), I = n(16), j = n(40), i = n(87), C = i.IteratorPrototype, w = i.BUGGY_SAFARI_ITERATORS, _ = r('iterator'), x = 'values', B = 'entries';
                e.exports = function (e, t, n, r, i, o, a) {
                    m(n, t, r);
                    function c(e) {
                        if (e === i && b)
                            return b;
                        if (!w && e in p)
                            return p[e];
                        switch (e) {
                        case 'keys':
                        case x:
                        case B:
                            return function () {
                                return new n(this, e);
                            };
                        }
                        return function () {
                            return new n(this);
                        };
                    }
                    var u, s, d, f = t + ' Iterator', l = !1, p = e.prototype, g = p[_] || p['@@iterator'] || i && p[i], b = !w && g || c(i), v = 'Array' == t && p.entries || g;
                    if (v && (u = S(v.call(new e())), C !== Object.prototype && u.next && (I || S(u) === C || (A ? A(u, C) : 'function' != typeof u[_] && O(u, _, y)), E(u, f, !0, !0), I && (j[f] = y))), i == x && g && g.name !== x && (l = !0, b = function () {
                            return g.call(this);
                        }), I && !a || p[_] === b || O(p, _, b), j[t] = b, i)
                        if (s = {
                                values: c(x),
                                keys: o ? b : c('keys'),
                                entries: c(B)
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
            69: function (e, t, n) {
                var r = n(230);
                e.exports = r;
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
                var r = n(11), u = n(0), i = n(13), d = n.n(i), f = [
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
                            const $___old_7396e01b4b8313ed = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                            try {
                                if ($___old_7396e01b4b8313ed)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___mock_16c53395a822db48.localStorage));
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
                                if ($___old_7396e01b4b8313ed)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___old_7396e01b4b8313ed));
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
                                const $___old_4bf12fe94f2ab496 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                                try {
                                    if ($___old_4bf12fe94f2ab496)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_16c53395a822db48.localStorage));
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
                                    if ($___old_4bf12fe94f2ab496)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___old_4bf12fe94f2ab496));
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
                                const $___old_15b2d06520f8e766 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                                try {
                                    if ($___old_15b2d06520f8e766)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_16c53395a822db48.localStorage));
                                    return function () {
                                        return e && e.valid && c() ? window.localStorage.getItem(t) : null;
                                    }.apply(this, arguments);
                                } finally {
                                    if ($___old_15b2d06520f8e766)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___old_15b2d06520f8e766));
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
                    return V;
                }), n.d(t, 'checkAdUnitSetup', function () {
                    return H;
                }), t.executeCallbacks = Y;
                var r = n(17), i = n(0), o = n(238), a = n(44), l = n(3), m = n(23), p = n(42), c = n(11), u = n(239), s = n(13), g = n.n(s), b = n(67), S = n(12), d = n(34), f = n(7);
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
                function h() {
                    return (h = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var A = Object(r.a)(), E = n(5), O = n(0), T = n(8).default, I = n(9), j = a.a.triggerUserSyncs, C = E.EVENTS, w = C.ADD_AD_UNITS, _ = C.BID_WON, x = C.REQUEST_BIDS, B = C.SET_TARGETING, U = C.AD_RENDER_FAILED, R = E.AD_RENDER_FAILED_REASON, k = R.PREVENT_WRITING_ON_MAIN_DOCUMENT, D = R.NO_AD, N = R.EXCEPTION, P = R.CANNOT_FIND_AD, M = R.MISSING_DOC_OR_ADID, q = {
                        bidWon: function (e) {
                            var t = m.a.getBidsRequested().map(function (e) {
                                return e.bids.map(function (e) {
                                    return e.adUnitCode;
                                });
                            }).reduce(i.flatten).filter(i.uniques);
                            return !!O.contains(t, e) || void O.logError('The "' + e + '" placement is not defined.');
                        }
                    };
                function G(e, t, n) {
                    e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n);
                }
                function W(e, t) {
                    var n = [];
                    return O.isArray(e) && (t ? e.length === t : 0 < e.length) && (e.every(function (e) {
                        return Object(i.isArrayOfNums)(e, 2);
                    }) ? n = e : Object(i.isArrayOfNums)(e, 2) && n.push(e)), n;
                }
                function L(e) {
                    var t = O.deepClone(e), n = t.mediaTypes.banner, r = W(n.sizes);
                    return 0 < r.length ? (n.sizes = r, t.sizes = r) : (O.logError('Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request.'), delete t.mediaTypes.banner), t;
                }
                function F(e) {
                    var t, n, r = O.deepClone(e), i = r.mediaTypes.video;
                    return i.playerSize && (t = 'number' == typeof i.playerSize[0] ? 2 : 1, 0 < (n = W(i.playerSize, t)).length ? (2 == t && O.logInfo('Transforming video.playerSize from [640,480] to [[640,480]] so it\'s in the proper format.'), i.playerSize = n, r.sizes = n) : (O.logError('Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request.'), delete r.mediaTypes.video.playerSize)), r;
                }
                function z(e) {
                    var t = O.deepClone(e), n = t.mediaTypes.native;
                    return n.image && n.image.sizes && !Array.isArray(n.image.sizes) && (O.logError('Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request.'), delete t.mediaTypes.native.image.sizes), n.image && n.image.aspect_ratios && !Array.isArray(n.image.aspect_ratios) && (O.logError('Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request.'), delete t.mediaTypes.native.image.aspect_ratios), n.icon && n.icon.sizes && !Array.isArray(n.icon.sizes) && (O.logError('Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request.'), delete t.mediaTypes.native.icon.sizes), t;
                }
                Object(u.a)(), A.bidderSettings = A.bidderSettings || {}, A.libLoaded = !0, A.version = 'v4.36.0', O.logInfo('Prebid.js v4.36.0 loaded'), A.installedModules = [], A.adUnits = A.adUnits || [], A.triggerUserSyncs = j;
                var V = {
                        validateBannerMediaType: L,
                        validateVideoMediaType: F,
                        validateNativeMediaType: z,
                        validateSizes: W
                    }, H = Object(c.b)('sync', function (e) {
                        var c = [];
                        return e.forEach(function (e) {
                            var t, n, r, i, o = e.mediaTypes, a = e.bids;
                            a && O.isArray(a) ? o && 0 !== Object.keys(o).length ? (o.banner && (t = L(e)), o.video && (n = F(t || e)), o.native && (r = z(n || (t || e))), i = h({}, t, n, r), c.push(i)) : O.logError('Detected adUnit.code \''.concat(e.code, '\' did not have a \'mediaTypes\' object defined.  This is a required field for the auction, so this adUnit has been removed.')) : O.logError('Detected adUnit.code \''.concat(e.code, '\' did not have \'adUnit.bids\' defined or \'adUnit.bids\' is not an array. Removing adUnit from auction.'));
                        }), c;
                    }, 'checkAdUnitSetup');
                function K(e) {
                    var n = m.a[e]().filter(O.bind.call(i.adUnitsFilter, this, m.a.getAdUnitCodes())), r = m.a.getLastAuctionId();
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
                        return h(e, t);
                    }, {});
                }
                function J(e) {
                    var t = e.reason, n = e.message, r = e.bid, i = e.id, o = {
                            reason: t,
                            message: n
                        };
                    r && (o.bid = r), i && (o.adId = i), O.logError(n), I.emit(U, o);
                }
                function Y(e, t) {
                    function n(e) {
                        for (var t; t = e.shift();)
                            t();
                    }
                    n(f.c), n(Q), e.call(this, t);
                }
                A.getAdserverTargetingForAdUnitCodeStr = function (e) {
                    if (O.logInfo('Invoking pbjs.getAdserverTargetingForAdUnitCodeStr', arguments), e) {
                        var t = A.getAdserverTargetingForAdUnitCode(e);
                        return O.transformAdServerTargetingObj(t);
                    }
                    O.logMessage('Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode');
                }, A.getHighestUnusedBidResponseForAdUnitCode = function (e) {
                    if (e) {
                        var t = m.a.getAllBidsForAdUnitCode(e).filter(p.a.isUnusedBid).filter(p.a.isBidNotExpired);
                        return t.length ? t.reduce(i.getHighestCpm) : {};
                    }
                    O.logMessage('Need to call getHighestUnusedBidResponseForAdUnitCode with adunitCode');
                }, A.getAdserverTargetingForAdUnitCode = function (e) {
                    return A.getAdserverTargeting(e)[e];
                }, A.getAdserverTargeting = function (e) {
                    return O.logInfo('Invoking pbjs.getAdserverTargeting', arguments), p.d.getAllTargeting(e);
                }, A.getNoBids = function () {
                    return O.logInfo('Invoking pbjs.getNoBids', arguments), K('getNoBids');
                }, A.getNoBidsForAdUnitCode = function (t) {
                    return {
                        bids: m.a.getNoBids().filter(function (e) {
                            return e.adUnitCode === t;
                        })
                    };
                }, A.getBidResponses = function () {
                    return O.logInfo('Invoking pbjs.getBidResponses', arguments), K('getBidsReceived');
                }, A.getBidResponsesForAdUnitCode = function (t) {
                    return {
                        bids: m.a.getBidsReceived().filter(function (e) {
                            return e.adUnitCode === t;
                        })
                    };
                }, A.setTargetingForGPTAsync = function (e, t) {
                    var n;
                    O.logInfo('Invoking pbjs.setTargetingForGPTAsync', arguments), Object(i.isGptPubadsDefined)() ? (n = p.d.getAllTargeting(e), p.d.resetPresetTargeting(e, t), p.d.setTargetingForGPT(n, t), Object.keys(n).forEach(function (t) {
                        Object.keys(n[t]).forEach(function (e) {
                            'hb_adid' === e && m.a.setStatusForBids(n[t][e], E.BID_STATUS.BID_TARGETING_SET);
                        });
                    }), I.emit(B, n)) : O.logError('window.googletag is not defined on the page');
                }, A.setTargetingForAst = function (e) {
                    O.logInfo('Invoking pbjs.setTargetingForAn', arguments), p.d.isApntagDefined() ? (p.d.setTargetingForAst(e), I.emit(B, p.d.getAllTargeting())) : O.logError('window.apntag is not defined on the page');
                }, A.renderAd = function (e, t, n) {
                    if (O.logInfo('Invoking pbjs.renderAd', arguments), O.logMessage('Calling renderAd with adId :' + t), e && t)
                        try {
                            var r, i, o, a, c, u, s, d, f, l, p, g, b, v = m.a.findBidByAdId(t);
                            v ? (v.ad = O.replaceAuctionPrice(v.ad, v.cpm), v.adUrl = O.replaceAuctionPrice(v.adUrl, v.cpm), n && n.clickThrough && (r = n.clickThrough, v.ad = O.replaceClickThrough(v.ad, r), v.adUrl = O.replaceClickThrough(v.adUrl, r)), m.a.addWinningBid(v), I.emit(_, v), i = v.height, o = v.width, a = v.ad, c = v.mediaType, u = v.adUrl, s = v.renderer, d = document.createComment('Creative '.concat(v.creativeId, ' served by ').concat(v.bidder, ' Prebid.js Header Bidding')), O.insertElement(d, e, 'body'), Object(S.c)(s) ? Object(S.b)(s, v) : e === document && !O.inIframe() || 'video' === c ? (f = 'Error trying to write ad. Ad render call ad id '.concat(t, ' was prevented from writing to the main document.'), J({
                                reason: k,
                                message: f,
                                bid: v,
                                id: t
                            })) : a ? (navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf('firefox/') && ((l = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1]) && parseInt(l, 10) < 67 && e.open('text/html', 'replace')), e.write(a), e.close(), G(e, o, i), O.callBurl(v)) : u ? ((p = O.createInvisibleIframe()).height = i, p.width = o, p.style.display = 'inline', p.style.overflow = 'hidden', p.src = u, O.insertElement(p, e, 'body'), G(e, o, i), O.callBurl(v)) : (g = 'Error trying to write ad. No ad for bid response id: '.concat(t), J({
                                reason: D,
                                message: g,
                                bid: v,
                                id: t
                            }))) : (b = 'Error trying to write ad. Cannot find ad by given id : '.concat(t), J({
                                reason: P,
                                message: b,
                                id: t
                            }));
                        } catch (e) {
                            var y = 'Error trying to write ad Id :'.concat(t, ' to the page:').concat(e.message);
                            J({
                                reason: N,
                                message: y,
                                id: t
                            });
                        }
                    else {
                        var h = 'Error trying to write ad Id :'.concat(t, ' to the page. Missing document or adId');
                        J({
                            reason: M,
                            message: h,
                            id: t
                        });
                    }
                }, A.removeAdUnit = function (e) {
                    O.logInfo('Invoking pbjs.removeAdUnit', arguments), e ? (O.isArray(e) ? e : [e]).forEach(function (e) {
                        for (var t = A.adUnits.length - 1; 0 <= t; t--)
                            A.adUnits[t].code === e && A.adUnits.splice(t, 1);
                    }) : A.adUnits = [];
                }, A.requestBids = Object(c.b)('async', function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.bidsBackHandler, n = e.timeout, r = e.adUnits, i = e.adUnitCodes, o = e.labels, a = e.auctionId;
                    I.emit(x);
                    var c = n || l.b.getConfig('bidderTimeout'), r = r && l.b.convertAdUnitFpd(O.isArray(r) ? r : [r]) || A.adUnits;
                    O.logInfo('Invoking pbjs.requestBids', arguments);
                    var u = [], s = [];
                    if (l.b.getConfig('s2sConfig', function (e) {
                            e && e.s2sConfig && (u = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
                        }), u.forEach(function (e) {
                            s.push.apply(s, v(e.bidders));
                        }), r = H(r), i && i.length ? r = r.filter(function (e) {
                            return g()(i, e.code);
                        }) : i = r && r.map(function (e) {
                            return e.code;
                        }), r.forEach(function (i) {
                            var o = Object.keys(i.mediaTypes || { banner: 'banner' }), e = i.bids.map(function (e) {
                                    return e.bidder;
                                }), a = T.bidderRegistry, t = s ? e.filter(function (e) {
                                    return !g()(s, e);
                                }) : e;
                            i.transactionId = O.generateUUID(), t.forEach(function (t) {
                                var e = a[t], n = e && e.getSpec && e.getSpec(), r = n && n.supportedMediaTypes || ['banner'];
                                o.some(function (e) {
                                    return g()(r, e);
                                }) ? b.a.incrementBidderRequestsCounter(i.code, t) : (O.logWarn(O.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter(function (e) {
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
                        15 < f && O.logInfo('Current auction '.concat(d.getAuctionId(), ' contains ').concat(f, ' adUnits.'), r), i.forEach(function (e) {
                            return p.d.setLatestAuctionForAdUnit(e, d.getAuctionId());
                        }), d.callBids();
                    } else if (O.logMessage('No adUnits configured. No bids requested.'), 'function' == typeof t)
                        try {
                            t();
                        } catch (e) {
                            O.logError('Error executing bidsBackHandler', null, e);
                        }
                }), A.requestBids.before(Y, 49), A.addAdUnits = function (e) {
                    O.logInfo('Invoking pbjs.addAdUnits', arguments), A.adUnits.push.apply(A.adUnits, l.b.convertAdUnitFpd(O.isArray(e) ? e : [e])), I.emit(w);
                }, A.onEvent = function (e, t, n) {
                    O.logInfo('Invoking pbjs.onEvent', arguments), O.isFn(t) ? !n || q[e].call(null, n) ? I.on(e, t, n) : O.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : O.logError('The event handler provided is not a function and was not set on event "' + e + '".');
                }, A.offEvent = function (e, t, n) {
                    O.logInfo('Invoking pbjs.offEvent', arguments), n && !q[e].call(null, n) || I.off(e, t, n);
                }, A.getEvents = function () {
                    return O.logInfo('Invoking pbjs.getEvents'), I.getEvents();
                }, A.registerBidAdapter = function (e, t) {
                    O.logInfo('Invoking pbjs.registerBidAdapter', arguments);
                    try {
                        T.registerBidAdapter(e(), t);
                    } catch (e) {
                        O.logError('Error registering bidder adapter : ' + e.message);
                    }
                }, A.registerAnalyticsAdapter = function (e) {
                    O.logInfo('Invoking pbjs.registerAnalyticsAdapter', arguments);
                    try {
                        T.registerAnalyticsAdapter(e);
                    } catch (e) {
                        O.logError('Error registering analytics adapter : ' + e.message);
                    }
                }, A.createBid = function (e) {
                    return O.logInfo('Invoking pbjs.createBid', arguments), Object(d.a)(e);
                };
                var Q = [], $ = Object(c.b)('async', function (e) {
                        e && !O.isEmpty(e) ? (O.logInfo('Invoking pbjs.enableAnalytics for: ', e), T.enableAnalytics(e)) : O.logError('pbjs.enableAnalytics should be called with option {}');
                    }, 'enableAnalyticsCb');
                function X(e) {
                    e.forEach(function (e) {
                        if (void 0 === e.called)
                            try {
                                e.call(), e.called = !0;
                            } catch (e) {
                                O.logError('Error processing command :', 'prebid.js', e);
                            }
                    });
                }
                A.enableAnalytics = function (e) {
                    Q.push($.bind(this, e));
                }, A.aliasBidder = function (e, t, n) {
                    O.logInfo('Invoking pbjs.aliasBidder', arguments), e && t ? T.aliasBidAdapter(e, t, n) : O.logError('bidderCode and alias must be passed as arguments', 'pbjs.aliasBidder');
                }, A.getAllWinningBids = function () {
                    return m.a.getAllWinningBids();
                }, A.getAllPrebidWinningBids = function () {
                    return m.a.getBidsReceived().filter(function (e) {
                        return e.status === E.BID_STATUS.BID_TARGETING_SET;
                    });
                }, A.getHighestCpmBids = function (e) {
                    return p.d.getWinningBids(e);
                }, A.markWinningBidAsUsed = function (t) {
                    var e = [];
                    t.adUnitCode && t.adId ? e = m.a.getBidsReceived().filter(function (e) {
                        return e.adId === t.adId && e.adUnitCode === t.adUnitCode;
                    }) : t.adUnitCode ? e = p.d.getWinningBids(t.adUnitCode) : t.adId ? e = m.a.getBidsReceived().filter(function (e) {
                        return e.adId === t.adId;
                    }) : O.logWarn('Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function.'), 0 < e.length && (e[0].status = E.BID_STATUS.RENDERED);
                }, A.getConfig = l.b.getConfig, A.setConfig = l.b.setConfig, A.setBidderConfig = l.b.setBidderConfig, A.que.push(function () {
                    return Object(o.a)();
                }), A.cmd.push = function (e) {
                    if ('function' == typeof e)
                        try {
                            e.call();
                        } catch (e) {
                            O.logError('Error processing command :', e.message, e.stack);
                        }
                    else
                        O.logError('Commands written into pbjs.cmd.push must be wrapped in a function');
                }, A.que.push = A.cmd.push, A.processQueue = function () {
                    c.b.ready(), X(A.que), X(A.cmd);
                }, t.default = A;
            },
            71: function (e, t, n) {
                'use strict';
                t.a = function (t, n) {
                    o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach(function (e) {
                        o.adServers[t][e] ? Object(i.logWarn)('Attempting to add an already registered function property '.concat(e, ' for AdServer ').concat(t, '.')) : o.adServers[t][e] = n[e];
                    });
                };
                var r = n(17), i = n(0), o = Object(r.a)();
            },
            72: function (e, t, n) {
                var r = n(31), i = n(48), o = ''.split;
                e.exports = r(function () {
                    return !Object('z').propertyIsEnumerable(0);
                }) ? function (e) {
                    return 'String' == i(e) ? o.call(e, '') : Object(e);
                } : Object;
            },
            73: function (e, t, n) {
                var r = n(30), i = n(31), o = n(74);
                e.exports = !r && !i(function () {
                    return 7 != Object.defineProperty(o('div'), 'a', {
                        get: function () {
                            return 7;
                        }
                    }).a;
                });
            },
            74: function (e, t, n) {
                var r = n(26), i = n(27), o = r.document, a = i(o) && i(o.createElement);
                e.exports = function (e) {
                    return a ? o.createElement(e) : {};
                };
            },
            75: function (e, t, n) {
                var r = n(16), i = n(76);
                (e.exports = function (e, t) {
                    return i[e] || (i[e] = void 0 !== t ? t : {});
                })('versions', []).push({
                    version: '3.6.4',
                    mode: r ? 'pure' : 'global',
                    copyright: '\xA9 2020 Denis Pushkarev (zloirock.ru)'
                });
            },
            76: function (e, t, n) {
                var r = n(26), i = n(105), o = '__core-js_shared__', a = r[o] || i(o, {});
                e.exports = a;
            },
            77: function (e, t, n) {
                var r = n(31);
                e.exports = !!Object.getOwnPropertySymbols && !r(function () {
                    return !String(Symbol());
                });
            },
            78: function (e, t, n) {
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
                var u = n(47), s = n(50), d = n(109);
                e.exports = {
                    includes: r(!0),
                    indexOf: r(!1)
                };
            },
            79: function (e, t, n) {
                var r = n(110);
                n(133), n(135), n(137), n(139), n(141), n(142), n(143), n(144), n(145), n(146), n(147), n(148), n(149), n(150), n(151), n(152), n(153), n(154), e.exports = r;
            },
            8: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'gdprDataHandler', function () {
                    return B;
                }), n.d(t, 'uspDataHandler', function () {
                    return U;
                }), n.d(t, 'clientTestAdapters', function () {
                    return R;
                }), n.d(t, 'allS2SBidders', function () {
                    return k;
                }), t.getAllS2SBidders = D, t.setS2STestingModule = function (e) {
                    A = e;
                };
                var h = n(0), p = n(93), g = n(38), l = n(1), y = n(4), a = n(3), r = n(11), i = n(13), m = n.n(i), o = n(10), S = n.n(o), b = n(67), c = n(20);
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
                var A, E = n(0), O = n(5), T = n(9), I = {}, j = I.bidderRegistry = {}, C = I.aliasRegistry = {}, w = [];
                a.b.getConfig('s2sConfig', function (e) {
                    e && e.s2sConfig && (w = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
                });
                var _ = {};
                var x = Object(r.b)('sync', function (e) {
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
                var B = {
                        consentData: null,
                        setConsentData: function (e) {
                            B.consentData = e;
                        },
                        getConsentData: function () {
                            return B.consentData;
                        }
                    }, U = {
                        consentData: null,
                        setConsentData: function (e) {
                            U.consentData = e;
                        },
                        getConsentData: function () {
                            return U.consentData;
                        }
                    }, R = [], k = [];
                function D() {
                    I.s2STestingEnabled = !1, w.forEach(function (e) {
                        e && e.enabled && e.bidders && e.bidders.length && k.push.apply(k, s(e.bidders));
                    });
                }
                function N(e) {
                    return e && e.enabled && e.testing && A;
                }
                function P(t, n, e) {
                    try {
                        var r = j[t].getSpec();
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
                    0 === k.length && D(), w.forEach(function (e) {
                        e && e.enabled && N(e) && (A.calculateBidSources(e), A.getSourceBidderMap(d, k)[A.CLIENT].forEach(function (e) {
                            m()(R, e) || R.push(e);
                        }));
                    }), b = e.filter(function (e) {
                        return !m()(k, e) || m()(R, e);
                    });
                    var y = k;
                    w.forEach(function (r) {
                        var i, o, e, t, n, a, c, u, s;
                        r && r.enabled && (s = r, Boolean(N(s) && s.testServerOnly) && (c = d, u = r, Boolean(S()(c, function (e) {
                            return S()(e.bids, function (e) {
                                return (e.bidSource || u.bidderControl && u.bidderControl[e.bidder]) && e.finalSource === A.SERVER;
                            });
                        }))) && (E.logWarn('testServerOnly: True.  All client requests will be suppressed.'), b.length = 0), e = d, n = (t = r).bidders, (a = E.deepClone(e)).forEach(function (e) {
                            e.bids = e.bids.filter(function (e) {
                                return m()(n, e.bidder) && (!N(t) || e.finalSource !== A.CLIENT);
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
                                    bids: x({
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
                                return !R.length || e.finalSource !== A.SERVER;
                            });
                        }), n = n.filter(function (e) {
                            return 0 !== e.bids.length;
                        }));
                    return b.forEach(function (e) {
                        var t = E.getUniqueIdentifierStr(), n = {
                                bidderCode: e,
                                auctionId: l,
                                bidderRequestId: t,
                                bids: x({
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
                            }, r = j[e];
                        r || E.logError('Trying to make a request for bidder that does not exist: '.concat(e)), r && n.bids && 0 !== n.bids.length && v.push(n);
                    }), B.getConsentData() && v.forEach(function (e) {
                        e.gdprConsent = B.getConsentData();
                    }), U.getConsentData() && v.forEach(function (e) {
                        e.uspConsent = U.getConsentData();
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
                        } : void 0), n = e.bidders, r = j[e.adapter], i = b[v].tid, o = b[v].adUnitsS2SCopy, a = g.filter(function (e) {
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
                        var e = j[t.bidderCode];
                        E.logMessage('CALLING BIDDER ======= '.concat(t.bidderCode)), T.emit(O.EVENTS.BID_REQUESTED, t);
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
                    e && t ? 'function' == typeof e.callBids ? (j[t] = e, m()(r, 'video') && I.videoAdapters.push(t), m()(r, 'native') && g.f.push(t)) : E.logError('Bidder adaptor error for bidder code: ' + t + 'bidder must implement a callBids() function') : E.logError('bidAdapter or bidderCode not specified');
                }, I.aliasBidAdapter = function (n, r, e) {
                    var t, i;
                    if (void 0 === j[r]) {
                        var o = j[n];
                        if (void 0 === o) {
                            var a = [];
                            w.forEach(function (e) {
                                var t;
                                e.bidders && e.bidders.length && (t = e && e.bidders, e && m()(t, r) ? C[r] = n : a.push(n));
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
                                })), C[r] = n), I.registerBidAdapter(d, r, { supportedMediaTypes: f });
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
                    return j[e];
                }, I.getAnalyticsAdapter = function (e) {
                    return _[e];
                }, I.callTimedOutBidders = function (t, n, r) {
                    n = n.map(function (e) {
                        return e.params = E.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e;
                    }), n = E.groupBy(n, 'bidder'), Object.keys(n).forEach(function (e) {
                        P(e, 'onTimeout', n[e]);
                    });
                }, I.callBidWonBidder = function (e, t, n) {
                    t.params = E.getUserConfiguredParams(n, t.adUnitCode, t.bidder), b.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), P(e, 'onBidWon', t);
                }, I.callSetTargetingBidder = function (e, t) {
                    P(e, 'onSetTargeting', t);
                }, I.callBidViewableBidder = function (e, t) {
                    P(e, 'onBidViewable', t);
                }, t.default = I;
            },
            80: function (e, t, n) {
                function r(e) {
                    c(e, d, {
                        value: {
                            objectID: 'O' + ++f,
                            weakData: {}
                        }
                    });
                }
                var i = n(53), o = n(27), a = n(28), c = n(33).f, u = n(59), s = n(113), d = u('meta'), f = 0, l = Object.isExtensible || function () {
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
            81: function (e, t, n) {
                var r = n(22), i = n(40), o = r('iterator'), a = Array.prototype;
                e.exports = function (e) {
                    return void 0 !== e && (i.Array === e || a[o] === e);
                };
            },
            82: function (e, t, n) {
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
            83: function (e, t) {
                e.exports = function (e, t, n) {
                    if (!(e instanceof t))
                        throw TypeError('Incorrect ' + (n ? n + ' ' : '') + 'invocation');
                    return e;
                };
            },
            84: function (e, t, n) {
                function r() {
                }
                function i(e) {
                    return '<script>' + e + '</' + g + '>';
                }
                var o, a = n(15), c = n(118), u = n(85), s = n(53), d = n(121), f = n(74), l = n(65), p = 'prototype', g = 'script', b = l('IE_PROTO'), v = function () {
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
            85: function (e, t) {
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
            86: function (e, t, n) {
                var i = n(32);
                e.exports = function (e, t, n, r) {
                    r && r.enumerable ? e[t] = n : i(e, t, n);
                };
            },
            87: function (e, t, n) {
                'use strict';
                var r, i, o, a = n(88), c = n(32), u = n(28), s = n(22), d = n(16), f = s('iterator'), l = !1;
                [].keys && ('next' in (o = [].keys()) ? (i = a(a(o))) !== Object.prototype && (r = i) : l = !0), null == r && (r = {}), d || u(r, f) || c(r, f, function () {
                    return this;
                }), e.exports = {
                    IteratorPrototype: r,
                    BUGGY_SAFARI_ITERATORS: l
                };
            },
            88: function (e, t, n) {
                var r = n(28), i = n(57), o = n(65), a = n(124), c = o('IE_PROTO'), u = Object.prototype;
                e.exports = a ? Object.getPrototypeOf : function (e) {
                    return e = i(e), r(e, c) ? e[c] : 'function' == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? u : null;
                };
            },
            89: function (e, t, n) {
                'use strict';
                var i = n(129).charAt, r = n(54), o = n(66), a = 'String Iterator', c = r.set, u = r.getterFor(a);
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
                var r = n(15), i = n(61);
                e.exports = function (e) {
                    var t = i(e);
                    if ('function' != typeof t)
                        throw TypeError(String(e) + ' is not iterable');
                    return r(t.call(e));
                };
            },
            91: function (e, t, n) {
                var r = n(155);
                e.exports = r;
            },
            92: function (e, t, n) {
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
            93: function (e, t, n) {
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
                var r = n(3), p = n(0), i = n(13), g = n.n(i);
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
            94: function (e, t, n) {
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
            95: function (e, t, n) {
                var r = n(374);
                e.exports = r;
            },
            98: function (e, t, n) {
                n(99);
                var r = n(52);
                e.exports = r('Array', 'find');
            },
            99: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(56).find, o = n(51), a = n(60), c = 'find', u = !0, s = a(c);
                c in [] && Array(1).find(function () {
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
            998: function (e, t, n) {
                e.exports = n(70);
            }
        });
        pbjsChunk([359], {
            278: function (e, r, t) {
                e.exports = t(279);
            },
            279: function (e, r, t) {
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
        }, [278]);
        pbjsChunk([356], {
            288: function (e, r, a) {
                e.exports = a(289);
            },
            289: function (e, r, a) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), a.d(r, 'spec', function () {
                    return R;
                });
                var f = a(12), _ = a(0), k = a(3), y = a(1), g = a(2), p = a(23), t = a(10), I = a.n(t), n = a(13), w = a.n(n), v = a(25), i = a(7);
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
                                        version: '4.36.0'
                                    },
                                    schain: v
                                };
                            return b && (h.iab_support = {
                                omidpn: 'Appnexus',
                                omidpv: '4.36.0'
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
        }, [288]);
        pbjsChunk([336], {
            332: function (e, r, t) {
                e.exports = t(333);
            },
            333: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'britepoolIdSubmodule', function () {
                    return f;
                });
                var c = t(0), s = t(4), o = t(11);
                function n(e) {
                    return (n = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function p() {
                    return (p = Object.assign || function (e) {
                        for (var r = 1; r < arguments.length; r++) {
                            var t = arguments[r];
                            for (var o in t)
                                Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var f = {
                    name: 'britepoolId',
                    decode: function (e) {
                        return e && 'string' == typeof e.primaryBPID ? { britepoolid: e.primaryBPID } : null;
                    },
                    getId: function (e, r) {
                        var t = e && e.params || {}, o = f.createParams(t, r), n = o.params, i = o.headers, a = o.url, u = o.getter, p = o.errors, l = null;
                        return 'function' == typeof u && 'function' != typeof (l = u(n)) ? { id: f.normalizeValue(l) } : (c.isEmpty(n) && c.triggerPixel('https://px.britepool.com/new?partner_id=t'), {
                            callback: function (t) {
                                if (0 < p.length)
                                    return p.forEach(function (e) {
                                        return c.logError(e);
                                    }), void t();
                                if (l)
                                    try {
                                        l(function (e) {
                                            t(f.normalizeValue(e));
                                        });
                                    } catch (e) {
                                        '' !== e && c.logError(e), t();
                                    }
                                else
                                    Object(s.a)(a, {
                                        success: function (e) {
                                            var r = f.normalizeValue(e);
                                            t(r ? { primaryBPID: r.primaryBPID } : null);
                                        },
                                        error: function (e) {
                                            '' !== e && c.logError(e), t();
                                        }
                                    }, JSON.stringify(n), {
                                        customHeaders: i,
                                        contentType: 'application/json',
                                        method: 'POST',
                                        withCredentials: !0
                                    });
                            }
                        });
                    },
                    createParams: function (e, r) {
                        var t = r && 'boolean' == typeof r.gdprApplies && r.gdprApplies ? r.consentString : void 0, o = [], n = {}, i = p({}, e, 'undefined' != typeof britepool_pubparams ? britepool_pubparams : {});
                        if (i.getter) {
                            if ('function' != typeof i.getter)
                                return o.push('userIdTargeting - britepoolId submodule requires getter to be a function'), { errors: o };
                        } else
                            i.api_key && (n['x-api-key'] = i.api_key);
                        var a = i.url || 'https://api.britepool.com/v1/britepool/id'.concat(t ? '?gdprString=' + encodeURIComponent(t) : ''), u = i.getter;
                        return delete i.api_key, delete i.url, delete i.getter, {
                            params: i,
                            headers: n,
                            url: a,
                            getter: u,
                            errors: o
                        };
                    },
                    normalizeValue: function (e) {
                        var r = null;
                        if ('object' === n(e))
                            r = e;
                        else if ('string' == typeof e)
                            try {
                                r = JSON.parse(e);
                            } catch (e) {
                                c.logError(e);
                            }
                        return r;
                    }
                };
                Object(o.e)('userId', f);
            }
        }, [332]);
        pbjsChunk([318], {
            372: function (n, t, e) {
                n.exports = e(373);
            },
            373: function (n, t, e) {
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
                var u = e(0), o = e(3), a = e(8), i = e(13), s = e.n(i), r = e(95), f = e.n(r);
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
        }, [372]);
        pbjsChunk([317], {
            379: function (t, n, e) {
                t.exports = e(380);
            },
            380: function (t, n, e) {
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
        }, [379]);
        pbjsChunk([310], {
            398: function (e, o, t) {
                e.exports = t(399);
            },
            399: function (e, o, t) {
                'use strict';
                Object.defineProperty(o, '__esModule', { value: !0 }), t.d(o, 'storage', function () {
                    return v;
                }), t.d(o, 'criteoIdSubmodule', function () {
                    return u;
                });
                var f = t(0), m = t(4), I = t(20), n = t(11), c = t(7), r = 'criteo', v = Object(c.b)(91, r), U = 'cto_bidid', h = 'cto_bundle', S = new Date(0).toString(), i = new Date(f.timestamp() + 33696000000).toString();
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
        }, [398]);
        pbjsChunk([309], {
            400: function (e, n, r) {
                e.exports = r(401);
            },
            401: function (e, n, r) {
                'use strict';
                Object.defineProperty(n, '__esModule', { value: !0 }), r.d(n, 'currencySupportEnabled', function () {
                    return R;
                }), r.d(n, 'currencyRates', function () {
                    return D;
                }), n.setConfig = c, n.addBidResponseHook = j;
                var s = r(17), u = r(34), a = r(5), f = (r.n(a), r(4)), d = r(0), o = r(3), l = r(11);
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
        }, [400]);
        pbjsChunk([302], {
            416: function (e, r, t) {
                e.exports = t(417);
            },
            417: function (e, r, t) {
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
        }, [416]);
        pbjsChunk([260], {
            504: function (e, r, t) {
                e.exports = t(505);
            },
            505: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'ID5_STORAGE_NAME', function () {
                    return a;
                }), t.d(r, 'ID5_PRIVACY_STORAGE_NAME', function () {
                    return f;
                }), t.d(r, 'id5IdSubmodule', function () {
                    return s;
                }), r.expDaysStr = h, r.nbCacheName = c, r.storeNbInCache = D, r.getNbFromCache = p, r.getFromLocalStorage = E, r.storeInLocalStorage = C, r.isInControlGroup = O;
                var d = t(0), u = t(4), n = t(11), g = t(20), o = t(7), l = t(8), m = 30, a = 'id5id', f = ''.concat(a, '_privacy'), b = 'html5', i = 10000, v = 'User ID - ID5 submodule: ', I = [
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
                                        v: '4.36.0'
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
        }, [504]);
        pbjsChunk([259], {
            509: function (e, t, n) {
                e.exports = n(510);
            },
            510: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'storage', function () {
                    return c;
                }), n.d(t, 'identityLinkSubmodule', function () {
                    return s;
                });
                var d = n(0), r = n(4), i = n(11), o = n(7), c = Object(o.b)(), s = {
                        name: 'identityLink',
                        gvlid: 97,
                        decode: function (e) {
                            return { idl_env: e };
                        },
                        getId: function (e, t) {
                            var n = e && e.params || {};
                            if (n && 'string' == typeof n.pid) {
                                var i = t && 'boolean' == typeof t.gdprApplies && t.gdprApplies ? 1 : 0, o = i ? t.consentString : '', r = 2 === d.deepAccess(t, 'vendorData.tcfPolicyVersion');
                                if (!i || o && '' !== o) {
                                    var c = 'https://api.rlcdn.com/api/identity/envelope?pid='.concat(n.pid).concat(i ? (r ? '&ct=4&cv=' : '&ct=1&cv=') + o : '');
                                    return {
                                        callback: function (t) {
                                            window.ats ? (d.logInfo('identityLink: ATS exists!'), window.ats.retrieveEnvelope(function (e) {
                                                e ? (d.logInfo('identityLink: An envelope can be retrieved from ATS!'), l(!0), t(JSON.parse(e).envelope)) : a(c, t, n);
                                            })) : a(c, t, n);
                                        }
                                    };
                                }
                                d.logInfo('identityLink: Consent string is required to call envelope API.');
                            } else
                                d.logError('identityLink: requires partner id to be defined');
                        }
                    };
                function a(e, n, t) {
                    var i, o = {
                            success: function (e) {
                                var t;
                                if (e)
                                    try {
                                        t = JSON.parse(e);
                                    } catch (e) {
                                        d.logInfo(e);
                                    }
                                n(t && t.envelope ? t.envelope : '');
                            },
                            error: function (e) {
                                d.logInfo('identityLink: identityLink: ID fetch encountered an error', e), n();
                            }
                        };
                    t.notUse3P || c.getCookie('_lr_retry_request') || ((i = new Date()).setTime(i.getTime() + 3600000), c.setCookie('_lr_retry_request', 'true', i.toUTCString()), d.logInfo('identityLink: A 3P retrieval is attempted!'), l(!1), Object(r.a)(e, o, void 0, {
                        method: 'GET',
                        withCredentials: !0
                    }));
                }
                function l(e) {
                    var t = new Date();
                    t.setTime(t.getTime() + 2592000000), c.setCookie('_lr_env_src_ats', e, t.toUTCString());
                }
                Object(i.e)('userId', s);
            }
        }, [509]);
        pbjsChunk([251], {
            527: function (e, n, r) {
                e.exports = r(528);
            },
            528: function (e, n, r) {
                'use strict';
                Object.defineProperty(n, '__esModule', { value: !0 }), r.d(n, 'intentIqIdSubmodule', function () {
                    return d;
                });
                var t = r(0), o = r(4), i = r(11), c = 'intentIqId', u = 'NA';
                function a(e) {
                    return e && '' != e && e != u && function (e) {
                        try {
                            return (e = JSON.parse(e)) && e.RESULT != u;
                        } catch (e) {
                            return t.logError(e), 1;
                        }
                    }(e);
                }
                var d = {
                    name: c,
                    decode: function (e) {
                        return a(e) ? { intentIqId: e } : void 0;
                    },
                    getId: function (e) {
                        var n = e && e.params || {};
                        if (n && 'number' == typeof n.partner) {
                            var r = 'https://api.intentiq.com/profiles_engine/ProfilesEngineServlet?at=39&mi=10&dpi='.concat(n.partner, '&pt=17&dpn=1');
                            r += n.pcid ? '&pcid=' + encodeURIComponent(n.pcid) : '', r += n.pai ? '&pai=' + encodeURIComponent(n.pai) : '';
                            return {
                                callback: function (n) {
                                    var e = {
                                        success: function (e) {
                                            a(e) ? n(e) : n();
                                        },
                                        error: function (e) {
                                            t.logError(''.concat(c, ': ID fetch encountered an error'), e), n();
                                        }
                                    };
                                    Object(o.a)(r, e, void 0, {
                                        method: 'GET',
                                        withCredentials: !0
                                    });
                                }
                            };
                        }
                        t.logError('User ID - intentIqId submodule requires a valid partner to be defined');
                    }
                };
                Object(i.e)('userId', d);
            }
        }, [527]);
        pbjsChunk([246], {
            539: function (e, r, t) {
                e.exports = t(540);
            },
            540: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'spec', function () {
                    return c;
                });
                var D = t(0), T = t(2), J = t(3), i = t(10), f = t.n(i), n = t(541), s = t.n(n), o = t(1);
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
                function U(e) {
                    return (U = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var q = 'roundel', y = [
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
                        }), D.isFn(e.getFloor)) {
                        var s, o = '*', a = '*';
                        t && D.contains(y, t) && (a = [
                            (s = r[o = t]).w,
                            s.h
                        ]);
                        try {
                            n = e.getFloor({
                                mediaType: o,
                                size: a
                            });
                        } catch (e) {
                            D.logWarn('priceFloors module call getFloor failed, error : ', e);
                        }
                    }
                    if (i && n)
                        return i.currency !== n.currency ? void D.logWarn('The bid floor currency mismatch between IX params and priceFloors module config') : void (i.floor > n.floor ? (r.bidfloor = i.floor, r.bidfloorcur = i.currency, r.ext.fl = p.IX) : (r.bidfloor = n.floor, r.bidfloorcur = n.currency, r.ext.fl = p.PBJS));
                    n ? (r.bidfloor = n.floor, r.bidfloorcur = n.currency, r.ext.fl = p.PBJS) : i ? (r.bidfloor = i.floor, r.bidfloorcur = i.currency, r.ext.fl = p.IX) : D.logInfo('IX Bid Adapter: No floors available, no floors applied');
                }
                function I(e) {
                    return Array.isArray(e) && 2 === e.length && s()(e[0]) && s()(e[1]);
                }
                function k(e, r) {
                    if (I(e))
                        return e[0] === r[0] && e[1] === r[1];
                    for (var t = 0; t < e.length; t++)
                        if (e[t][0] === r[0] && e[t][1] === r[1])
                            return 1;
                }
                function F(e, r, t, i) {
                    var n = 'https://htlb.casalemedia.com/cygnus', s = function (e) {
                            var r = {
                                    'liveramp.com': 'idl',
                                    'netid.de': 'NETID',
                                    'neustar.biz': 'fabrickId',
                                    'zeotap.com': 'zeotapIdPlus',
                                    'uidapi.com': 'UID2'
                                }, t = [], i = {};
                            if (D.isArray(e))
                                for (var n = 0; n < e.length; n++)
                                    r[e[n].source] && D.deepAccess(e[n], 'uids.0') && (i[e[n].source] = 1, e[n].uids[0].ext = { rtiPartner: r[e[n].source] }, delete e[n].uids[0].atype, t.push(e[n]));
                            return {
                                toSend: t,
                                seenSources: i
                            };
                        }(D.deepAccess(e, '0.userIdAsEids')), o = s.toSend;
                    if (window.headertag && 'function' == typeof window.headertag.getIdentityInfo) {
                        var a, d = window.headertag.getIdentityInfo();
                        if (d && 'object' === U(d))
                            for (var p in d) {
                                !d.hasOwnProperty(p) || !(a = d[p]).responsePending && a.data && 'object' === U(a.data) && Object.keys(a.data).length && !s.seenSources[a.data.source] && o.push(a.data);
                            }
                    }
                    if (r && r.bidderCode === q && !s.seenSources['liveramp.com'])
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
                                        version: '4.36.0',
                                        userIds: function (e) {
                                            var r = e.userId || {};
                                            return [
                                                'britepoolid',
                                                'id5id',
                                                'lipbid',
                                                'haloId',
                                                'criteoId',
                                                'lotamePanoramaId',
                                                'merkleId',
                                                'parrableId',
                                                'connectid',
                                                'sharedid',
                                                'tapadId',
                                                'quantcastId',
                                                'pubcid'
                                            ].filter(function (e) {
                                                return D.deepAccess(r, e);
                                            });
                                        }(t[0])
                                    }, e = 0; e < n.length; e++)
                                !function (r) {
                                    var e;
                                    i = t.filter(function (e) {
                                        return e.transactionId === n[r];
                                    })[0], D.deepAccess(i, 'mediaTypes') && (1 < Object.keys(i.mediaTypes).length && s.mfu++, D.deepAccess(i, 'mediaTypes.native') && s.nu++, D.deepAccess(i, 'mediaTypes.banner') && s.bu++, 'outstream' === D.deepAccess(i, 'mediaTypes.video.context') && (s.ou++, e = 'object' === U(D.deepAccess(i, 'renderer') || D.deepAccess(i, 'mediaTypes.video.renderer')), s.ren = s.ren && e ? D.deepAccess(s, 'ren') : e), 'instream' === D.deepAccess(i, 'mediaTypes.video.context') && s.iu++, s.allu++);
                                }(e);
                            return s;
                        }(e);
                    for (var l in u)
                        c.ext.ixdiag[l] = u[l];
                    e[0].schain && (c.source = { ext: { schain: e[0].schain } }), 0 < o.length && (c.user = {}, c.user.eids = o), document.referrer && '' !== document.referrer && (c.site.ref = document.referrer), r && (r.gdprConsent && ((m = r.gdprConsent).hasOwnProperty('gdprApplies') && (c.regs = { ext: { gdpr: m.gdprApplies ? 1 : 0 } }), m.hasOwnProperty('consentString') && (c.user = c.user || {}, c.user.ext = { consent: m.consentString || '' }, m.hasOwnProperty('addtlConsent') && m.addtlConsent && (c.user.ext.consented_providers_settings = { consented_providers: m.addtlConsent }))), r.uspConsent && D.deepSetValue(c, 'regs.ext.us_privacy', r.uspConsent), r.refererInfo && (c.site.page = r.refererInfo.referer));
                    var f = {}, y = r && r.bidderCode || 'ix', b = J.b.getConfig(y);
                    if (b) {
                        if ('object' === U(b.firstPartyData)) {
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
                        }, O = new Blob([''.concat(I.url).concat(D.parseQueryStringParameters(R(R({}, I.data), {}, { r: JSON.stringify(c) })))]).size, w = O, P = 0, S = 0, z = 0;
                    c.ext.ixdiag.msd = 0, c.ext.ixdiag.msi = 0, c.imp = [];
                    for (var A, T, C, j, k, F = 0, E = Object.keys(t), B = []; F < E.length && x.length < 4;) {
                        t[E[F]].hasOwnProperty('missingCount') && (z = t[E[F]].missingCount), O < 8000 ? function (e, r) {
                            var t = new Blob([encodeURIComponent(JSON.stringify(e))]).size;
                            if (t < r)
                                return;
                            for (; r < t;)
                                e.hasOwnProperty('missingImps') && 0 < e.missingImps.length ? e.missingImps.pop() : e.hasOwnProperty('ixImps') && 0 < e.ixImps.length && e.ixImps.pop(), t = new Blob([encodeURIComponent(JSON.stringify(e))]).size;
                        }(t[E[F]], 8000 - O) : D.logError('ix bidder: Base request size has exceeded maximum request size.'), t[E[F]].hasOwnProperty('missingImps') && (S = t[E[F]].missingImps.length), (w += new Blob([encodeURIComponent(JSON.stringify(t[E[F]]))]).size) < 8000 ? ((A = c.imp).push.apply(A, N(t[E[F]].ixImps)), c.ext.ixdiag.msd += z, c.ext.ixdiag.msi += S, t[E[F]].hasOwnProperty('missingImps') && B.push.apply(B, N(t[E[F]].missingImps)), F++) : (C = D.deepClone(f), (T = c.imp).push.apply(T, N(B)), c.ext.ixdiag.sn = P, C.sn = P, P++, C.r = JSON.stringify(c), x.push({
                            method: 'GET',
                            url: n,
                            data: C
                        }), B = [], w = O, c.imp = [], S = z = 0, c.ext.ixdiag.msd = 0, c.ext.ixdiag.msi = 0);
                    }
                    return O < w && w < 8000 && x.length < 4 && (k = D.deepClone(f), (j = c.imp).push.apply(j, N(B)), 0 < x.length && (c.ext.ixdiag.sn = P, k.sn = P), k.r = JSON.stringify(c), x.push({
                        method: 'GET',
                        url: n,
                        data: k
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
                            code: q,
                            gvlid: 10,
                            skipPbsAliasing: !1
                        }],
                    supportedMediaTypes: y,
                    isBidRequestValid: function (e) {
                        var r, t, i = D.deepAccess(e, 'params.video'), n = D.deepAccess(e, 'params.size'), s = D.deepAccess(e, 'mediaTypes.banner.sizes'), o = D.deepAccess(e, 'mediaTypes.video'), a = D.deepAccess(e, 'mediaTypes.video.playerSize'), d = e.params.hasOwnProperty('bidFloor'), p = e.params.hasOwnProperty('bidFloorCur');
                        if (!I(e.params.size))
                            return D.logError('ix bidder params: bid size has invalid format.'), !1;
                        if (e.hasOwnProperty('mediaType') && !D.contains(y, e.mediaType))
                            return !1;
                        if (e.hasOwnProperty('mediaTypes') && !s && !a)
                            return !1;
                        if (!k(e.sizes, n) && !(a && k(a, n) || s && k(s, n)))
                            return D.logError('ix bidder params: bid size is not included in ad unit sizes or player size.'), !1;
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
                                    D.logError('ix bidder params: ' + l + ' is not included in either the adunit or params level'), c = !1;
                                }
                            }
                            if (!c)
                                return !1;
                        }
                        return 'string' != typeof e.params.siteId && 'number' != typeof e.params.siteId ? (D.logError('ix bidder params: siteId must be string or number value.'), !1) : !!(!d && !p || d && p && (r = e.params.bidFloor, t = e.params.bidFloorCur, Boolean('number' == typeof r && 'string' == typeof t && t.match(/^[A-Z]{3}$/)))) || (D.logError('ix bidder params: bidFloor / bidFloorCur parameter has invalid format.'), !1);
                    },
                    buildRequests: function (e, r) {
                        for (var t, i, n, s, o, a, d, p, c, m, u, l, f, y, b = [], g = {}, h = {}, v = null, x = {}, I = R(R({}, { detectMissingSizes: !0 }), J.b.getConfig('ix')), O = 0; O < e.length; O++) {
                            (v = e[O]).mediaType !== T.d && !D.deepAccess(v, 'mediaTypes.video') || v.mediaType !== T.d && !k(v.mediaTypes.video.playerSize, v.params.size) || (h.hasOwnProperty(v.transactionId) || (h[v.transactionId] = {}), h[v.transactionId].hasOwnProperty('ixImps') || (h[v.transactionId].ixImps = []), h[v.transactionId].ixImps.push(function (e) {
                                var r = C(e), t = D.deepAccess(e, 'mediaTypes.video'), i = D.deepAccess(e, 'mediaTypes.video.context'), n = [
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
                                for (var s in (r.video = D.deepClone(e.params.video), r.video.w = e.params.size[0], r.video.h = e.params.size[1], i && ('instream' === i ? r.video.placement = 1 : 'outstream' === i ? r.video.placement = 4 : D.logWarn('ix bidder params: video context \''.concat(i, '\' is not supported'))), t))
                                    -1 === n.indexOf(s) || r.video.hasOwnProperty(s) || (r.video[s] = t[s]);
                                return j(e, r, T.d), r;
                            }(v))), (v.mediaType === T.b || D.deepAccess(v, 'mediaTypes.banner') && k(D.deepAccess(v, 'mediaTypes.banner.sizes'), v.params.size) || !v.mediaType && !v.mediaTypes) && (m = void 0, (m = C(c = v)).banner = {}, m.banner.w = c.params.size[0], m.banner.h = c.params.size[1], m.banner.topframe = D.inIframe() ? 0 : 1, j(c, m, T.b), t = m, g.hasOwnProperty(v.transactionId) || (g[v.transactionId] = {}), g[v.transactionId].hasOwnProperty('ixImps') || (g[v.transactionId].ixImps = []), g[v.transactionId].ixImps.push(t), I.hasOwnProperty('detectMissingSizes') && I.detectMissingSizes && (n = x, s = t, p = d = a = o = void 0, p = (i = v).transactionId, n.hasOwnProperty(p) ? (o = [], n[p].hasOwnProperty('missingSizes') && (o = n[p].missingSizes), E(o, i.params.size), n[p].missingSizes = o) : D.deepAccess(i, 'mediaTypes.banner.sizes') && (E(a = D.deepClone(i.mediaTypes.banner.sizes), i.params.size), d = {
                                missingSizes: a,
                                impression: s
                            }, n[p] = d)));
                        }
                        for (var w in x)
                            if (x.hasOwnProperty(w)) {
                                var P = x[w].missingSizes;
                                g.hasOwnProperty(w) || (g[w] = {}), g[w].hasOwnProperty('missingImps') || (g[w].missingImps = [], g[w].missingCount = 0);
                                for (var S = x[w].impression, z = 0; z < P.length; z++) {
                                    var A = (u = v, l = S, f = P[z], y = void 0, (y = D.deepClone(l)).ext.sid = ''.concat(f[0], 'x').concat(f[1]), y.banner.w = f[0], y.banner.h = f[1], j(u, y, T.b), y);
                                    g[w].missingImps.push(A), g[w].missingCount++;
                                }
                            }
                        return 0 < Object.keys(g).length && b.push.apply(b, N(F(e, r, g, 7.2))), 0 < Object.keys(h).length && b.push.apply(b, N(F(e, r, h, 8.1))), b;
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
                                    i = c[u], n = a.cur, s = l, o = void 0, o = {}, x.hasOwnProperty(n) ? o.cpm = i.price / x[n] : o.cpm = i.price / b, o.requestId = i.impid, o.dealId = D.deepAccess(i, 'ext.dealid'), o.netRevenue = v, o.currency = n, o.creativeId = i.hasOwnProperty('crid') ? i.crid : '-', D.deepAccess(i, 'ext.vasturl') ? (o.vastUrl = i.ext.vasturl, o.width = s.video.w, o.height = s.video.h, o.mediaType = T.d, o.ttl = h) : (o.ad = i.adm, o.width = i.w, o.height = i.h, o.mediaType = T.b, o.ttl = g), o.meta = {}, o.meta.networkId = D.deepAccess(i, 'ext.dspid'), o.meta.brandId = D.deepAccess(i, 'ext.advbrandid'), o.meta.brandName = D.deepAccess(i, 'ext.advbrand'), i.adomain && 0 < i.adomain.length && (o.meta.advertiserDomains = i.adomain), t.push(o);
                                }
                        return t;
                    },
                    transformBidParams: function (e) {
                        return D.convertTypes({ siteID: 'number' }, e);
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
        }, [539]);
        pbjsChunk([2], {
            573: function (e, n, t) {
                e.exports = t(574);
            },
            574: function (e, n, t) {
                'use strict';
                Object.defineProperty(n, '__esModule', { value: !0 }), t.d(n, 'storage', function () {
                    return h;
                }), n.reset = function () {
                    window && window.liQ && (window.liQ = []);
                    y.setModuleMode(null), v = !1, g = null;
                }, t.d(n, 'liveIntentIdSubmodule', function () {
                    return y;
                });
                var r = t(0), o = t(4), i = t(11), a = t(575), c = t(8), u = t(7), l = t(576);
                function f(n, e) {
                    var t, r = Object.keys(n);
                    return Object.getOwnPropertySymbols && (t = Object.getOwnPropertySymbols(n), e && (t = t.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(n, e).enumerable;
                    })), r.push.apply(r, t)), r;
                }
                function s(o) {
                    for (var e = 1; e < arguments.length; e++) {
                        var i = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? f(Object(i), !0).forEach(function (e) {
                            var n, t, r;
                            n = o, r = i[t = e], t in n ? Object.defineProperty(n, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : n[t] = r;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(o, Object.getOwnPropertyDescriptors(i)) : f(Object(i)).forEach(function (e) {
                            Object.defineProperty(o, e, Object.getOwnPropertyDescriptor(i, e));
                        });
                    }
                    return o;
                }
                var d = 'liveIntentId', h = Object(u.b)(null, d), p = {
                        ajaxGet: function (e, n, t, r) {
                            Object(o.b)(r)(e, {
                                success: n,
                                error: t
                            }, void 0, {
                                method: 'GET',
                                withCredentials: !0
                            });
                        },
                        pixelGet: function (e, n) {
                            return Object(r.triggerPixel)(e, n);
                        }
                    }, v = !1, g = null;
                function m(e) {
                    if (g)
                        return g;
                    var n = {
                        source: 'prebid',
                        publisherId: (e = e || {}).publisherId || 'any'
                    };
                    e.url && (n.url = e.url), e.partner && (n.source = e.partner), e.ajaxTimeout && (n.ajaxTimeout = e.ajaxTimeout);
                    var t, r, o = (t = e.liCollectConfig, r = {}, (t = t || {}).appId && (r.appId = t.appId), t.fpiStorageStrategy && (r.storageStrategy = t.fpiStorageStrategy), t.fpiExpirationDays && (r.expirationDays = t.fpiExpirationDays), t.collectorUrl && (r.collectorUrl = t.collectorUrl), r);
                    o.wrapperName = 'prebid', o.identityResolutionConfig = n, o.identifiersToResolve = e.identifiersToResolve || [];
                    var i = c.uspDataHandler.getConsentData();
                    i && (o.usPrivacyString = i);
                    var a = c.gdprDataHandler.getConsentData();
                    return a && (o.gdprApplies = a.gdprApplies, o.gdprConsent = a.consentString), g = y.getInitializer()(o, h, p), e.emailHash && g.push({ hash: e.emailHash }), g;
                }
                function w() {
                    !v && g && (g.fire(), v = !0);
                }
                var y = {
                    moduleMode: void 0,
                    name: d,
                    setModuleMode: function (e) {
                        this.moduleMode = e;
                    },
                    getInitializer: function () {
                        return 'minimal' === this.moduleMode ? l.a : a.a;
                    },
                    decode: function (e, n) {
                        var t, r, o = n && n.params || {};
                        return g || m(o), w(), e && 'string' == typeof e.unifiedId ? (r = { lipbid: (t = e).unifiedId }, delete t.unifiedId, { lipb: s(s({}, r), t) }) : void 0;
                    },
                    getId: function (e) {
                        var t = m(e && e.params || {});
                        if (t) {
                            w();
                            return {
                                callback: function (n) {
                                    t.resolve(function (e) {
                                        n(e);
                                    }, function (e) {
                                        r.logError(''.concat(d, ': ID fetch encountered an error: '), e), n();
                                    });
                                }
                            };
                        }
                    }
                };
                Object(i.e)('userId', y);
            },
            575: function (e, n, t) {
                'use strict';
                function r(e) {
                    return (r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                t.d(n, 'a', function () {
                    return vn;
                });
                var o = '[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}', i = new RegExp('^'.concat(o, '$'), 'i');
                function d(e) {
                    return 'object' === r(e) ? JSON.stringify(e) : '' + e;
                }
                function h(e) {
                    return '[object Array]' === Object.prototype.toString.call(e);
                }
                var a = !!String.prototype.trim;
                function p(e) {
                    return a ? ('' + e).trim() : ('' + e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                }
                function c(e) {
                    return 'string' == typeof e;
                }
                function l(e, n) {
                    return c(e) && c(n) && p(e.toLowerCase()) === p(n.toLowerCase());
                }
                function u(e) {
                    return !!e && 'object' === r(e) && !h(e);
                }
                function v(e) {
                    return e && 'function' == typeof e;
                }
                function f(e) {
                    return s(e, 86400000).toUTCString();
                }
                function s(e, n) {
                    return new Date(new Date().getTime() + e * n);
                }
                function g(e, n, t) {
                    return null != (r = n) && 0 < p(r).length ? [
                        e,
                        v(t) ? t(n) : n
                    ] : [];
                    var r;
                }
                function m(e, n) {
                    return g(e, n, function (e) {
                        return encodeURIComponent(e);
                    });
                }
                function w(t) {
                    if (t && u(t)) {
                        var r = [];
                        return Object.keys(t).forEach(function (e) {
                            var n = t[e];
                            n && !u(n) && n.length && r.push([
                                encodeURIComponent(e),
                                encodeURIComponent(n)
                            ]);
                        }), r;
                    }
                    return [];
                }
                function y(e, n) {
                    function t(e) {
                        return u(e) ? e : {};
                    }
                    var r = {}, o = t(e), i = t(n);
                    return Object.keys(o).forEach(function (e) {
                        r[e] = o[e];
                    }), Object.keys(i).forEach(function (e) {
                        r[e] = i[e];
                    }), r;
                }
                var S = '__li__evt_bus', b = 'li_errors', I = 'lips', C = 'pre_lips', x = '_li_duid', E = 1, O = 5000, j = 'https://idx.liadm.com/idex';
                function k(e, n) {
                    window && window[S] && window[S].emit(e, n);
                }
                function R(e, n) {
                    k(e, n);
                }
                function L(e, n) {
                    D(e, n.message, n);
                }
                function D(e, n, t) {
                    var r = 2 < arguments.length && void 0 !== t ? t : {}, o = new Error(n || r.message);
                    o.stack = r.stack, o.name = e || 'unknown error', o.lineNumber = r.lineNumber, o.columnNumber = r.columnNumber, k(b, o);
                }
                var U = 0;
                function N(e, r, t, a) {
                    var c = e && e.collectorUrl || 'https://rp.liadm.com';
                    function o(e) {
                        i(e, 'p', function (e) {
                            return r.pixelGet(e, t);
                        });
                    }
                    function i(e, n, t) {
                        var r, o, i;
                        e.sendsPixel() && (v(a) && a(), r = 'dtstmp='.concat(u()), i = (o = e.asQueryString()) ? '&'.concat(r) : '?'.concat(r), t(''.concat(c, '/').concat(n).concat(o).concat(i)));
                    }
                    function u() {
                        var e = new Date();
                        return new Date(e.toUTCString()).getTime() + e.getMilliseconds();
                    }
                    return {
                        sendAjax: function (n) {
                            i(n, 'j', function (e) {
                                r.ajaxGet(e, function (e) {
                                    v(t) && t(), function (e) {
                                        try {
                                            var n = JSON.parse(e).bakers;
                                            if (h(n))
                                                for (var t = 0; t < n.length; t++)
                                                    r.pixelGet(''.concat(n[t], '?dtstmp=').concat(u()));
                                        } catch (e) {
                                            D('CallBakers', 'Error while calling bakers', e);
                                        }
                                    }(e);
                                }, function (e) {
                                    o(n), D('AjaxFailed', e.message, e);
                                }, U);
                            });
                        },
                        sendPixel: o
                    };
                }
                function _(e) {
                    this.size = parseInt(e) || 5, this.h = {}, this.q = {};
                }
                function F(e) {
                    for (e = ''.concat(e), r = 0; r < e.length; r++)
                        if (255 < e.charCodeAt(r))
                            return null;
                    for (var n, t = '', r = 0; r < e.length; r += 3) {
                        var o = [
                            void 0,
                            void 0,
                            void 0,
                            void 0
                        ];
                        o[0] = e.charCodeAt(r) >> 2, o[1] = (3 & e.charCodeAt(r)) << 4, e.length > r + 1 && (o[1] |= e.charCodeAt(r + 1) >> 4, o[2] = (15 & e.charCodeAt(r + 1)) << 2), e.length > r + 2 && (o[2] |= e.charCodeAt(r + 2) >> 6, o[3] = 63 & e.charCodeAt(r + 2));
                        for (var i = 0; i < o.length; i++)
                            void 0 === o[i] ? t += '=' : t += 0 <= (n = o[i]) && n < 64 ? T[n] : void 0;
                    }
                    return t;
                }
                _.prototype = {
                    on: function (e, n, t) {
                        (this.h[e] || (this.h[e] = [])).push({
                            fn: n,
                            ctx: t
                        });
                        for (var r = (this.q[e] || []).length, o = 0; o < r; o++)
                            n.apply(t, this.q[e][o]);
                        return this;
                    },
                    once: function (e, n, t) {
                        var r = this, o = this.q[e] || [];
                        if (0 < o.length)
                            return n.apply(t, o[0]), this;
                        function i() {
                            r.off(e, i), n.apply(t, arguments);
                        }
                        return i._ = n, this.on(e, i, t);
                    },
                    emit: function (e) {
                        for (var n = [].slice.call(arguments, 1), t = (this.h[e] || []).slice(), r = 0, o = t.length; r < o; r++)
                            t[r].fn.apply(t[r].ctx, n);
                        var i = this.q[e] || (this.q[e] = []);
                        return i.length >= this.size && i.shift(), i.push(n), this;
                    },
                    off: function (e, n) {
                        var t = this.h[e], r = [];
                        if (t && n)
                            for (var o = 0, i = t.length; o < i; o++)
                                t[o].fn !== n && t[o].fn._ !== n && r.push(t[o]);
                        return r.length ? this.h[e] = r : delete this.h[e], this;
                    }
                };
                var T = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
                function A(e) {
                    return F(e) || '';
                }
                var P = /[+/]|=+$/g, G = {
                        '+': '-',
                        '/': '_'
                    };
                function V(e) {
                    return G[e] || '';
                }
                function Q(e) {
                    var n = null, t = encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, n) {
                            return String.fromCharCode('0x' + n);
                        });
                    try {
                        n = window && v(window.btoa) ? window.btoa : A;
                    } catch (e) {
                        n = A;
                    }
                    return n(t).replace(P, V);
                }
                var J = function () {
                    return /\S+(@|%40)\S+\.\S+/;
                };
                function M(e) {
                    return J().test(e);
                }
                var W = /"([^"]+(@|%40)[^"]+[.][a-z]*(\s+)?)(\\"|")/;
                function H(e) {
                    return W.test(e);
                }
                function z(e, n) {
                    return 'string' == typeof n && M(p(n)) ? '*********' : n;
                }
                for (var q = [], B = 0; B < 64;)
                    q[B] = 0 | 4294967296 * Math.sin(++B % Math.PI);
                function $(e) {
                    var n, t, r, o, i, a = [], c = [
                            t = 1732584193,
                            4023233417,
                            ~t,
                            271733878,
                            3285377520
                        ], u = [], l = unescape(encodeURI(e)) + '\x80', f = l.length;
                    for (u[e = --f / 4 + 2 | 15] = 8 * f; ~f;)
                        u[f >> 2] |= l.charCodeAt(f) << 8 * ~f--;
                    for (n = f = 0; n < e; n += 16) {
                        for (t = c; f < 80; t = [
                                t[4] + (a[f] = f < 16 ? ~~u[n + f] : 2 * l | l < 0) + 1518500249 + [
                                    r & o | ~r & i,
                                    l = 341275144 + (r ^ o ^ i),
                                    882459459 + (r & o | r & i | o & i),
                                    l + 1535694389
                                ][f++ / 5 >> 2] + ((l = t[0]) << 5 | l >>> 27),
                                l,
                                r << 30 | r >>> 2,
                                o,
                                i
                            ])
                            l = a[f - 3] ^ a[f - 8] ^ a[f - 14] ^ a[f - 16], r = t[1], o = t[2], i = t[3];
                        for (f = 5; f;)
                            c[--f] += t[f];
                    }
                    for (l = ''; f < 40;)
                        l += (c[f >> 3] >> 4 * (7 - f++) & 15).toString(16);
                    return l;
                }
                for (var K, X = 18, Y = [], Z = []; 1 < X; X--)
                    for (K = X; K < 320;)
                        Y[K += X] = 1;
                function ee(e, n) {
                    return 4294967296 * Math.pow(e, 1 / n) | 0;
                }
                for (K = 0; K < 64;)
                    Y[++X] || (Z[K] = ee(X, 2), Y[K++] = ee(X, 3));
                function ne(e, n) {
                    return e >>> n | e << -n;
                }
                var te = function () {
                        return /(\s+)?[a-f0-9]{32,64}(\s+)?/gi;
                    }, re = {
                        32: 'md5',
                        40: 'sha1',
                        64: 'sha256'
                    };
                function oe(e) {
                    var n = e.match(te());
                    return n && n.map(p)[0];
                }
                function ie(e) {
                    var n = e.toLowerCase();
                    return {
                        md5: function (e) {
                            var n, t, r, o = [
                                    1732584193,
                                    4023233417,
                                    -1732584194,
                                    271733878
                                ], i = [], a = unescape(encodeURI(e)) + '\x80', c = a.length;
                            for (e = --c / 4 + 2 | 15, i[--e] = 8 * c; ~c;)
                                i[c >> 2] |= a.charCodeAt(c) << 8 * c--;
                            for (B = a = 0; B < e; B += 16) {
                                for (c = o; a < 64; c = [
                                        r = c[3],
                                        n + ((r = c[0] + [
                                            n & t | ~n & r,
                                            r & n | ~r & t,
                                            n ^ t ^ r,
                                            t ^ (n | ~r)
                                        ][c = a >> 4] + q[a] + ~~i[B | 15 & [
                                            a,
                                            5 * a + 1,
                                            3 * a + 5,
                                            7 * a
                                        ][c]]) << (c = [
                                            7,
                                            12,
                                            17,
                                            22,
                                            5,
                                            9,
                                            14,
                                            20,
                                            4,
                                            11,
                                            16,
                                            23,
                                            6,
                                            10,
                                            15,
                                            21
                                        ][4 * c + a++ % 4]) | r >>> -c),
                                        n,
                                        t
                                    ])
                                    n = 0 | c[1], t = c[2];
                                for (a = 4; a;)
                                    o[--a] += c[a];
                            }
                            for (e = ''; a < 32;)
                                e += (o[a >> 3] >> 4 * (1 ^ a++) & 15).toString(16);
                            return e;
                        }(n),
                        sha1: $(n),
                        sha256: function (e) {
                            var n = Z.slice(X = K = 0, 8), t = [], r = unescape(encodeURI(e)) + '\x80', o = r.length;
                            for (t[e = --o / 4 + 2 | 15] = 8 * o; ~o;)
                                t[o >> 2] |= r.charCodeAt(o) << 8 * ~o--;
                            for (o = []; X < e; X += 16) {
                                for (ee = n.slice(); K < 64; ee.unshift(r + (ne(r = ee[0], 2) ^ ne(r, 13) ^ ne(r, 22)) + (r & ee[1] ^ ee[1] & ee[2] ^ ee[2] & r)))
                                    ee[3] += r = 0 | (o[K] = K < 16 ? ~~t[K + X] : (ne(r = o[K - 2], 17) ^ ne(r, 19) ^ r >>> 10) + o[K - 7] + (ne(r = o[K - 15], 7) ^ ne(r, 18) ^ r >>> 3) + o[K - 16]) + ee.pop() + (ne(r = ee[4], 6) ^ ne(r, 11) ^ ne(r, 25)) + (r & ee[5] ^ ~r & ee[6]) + Y[K++];
                                for (K = 8; K;)
                                    n[--K] += ee[K];
                            }
                            for (r = ''; K < 64;)
                                r += (n[K >> 3] >> 4 * (7 - K++) & 15).toString(16);
                            return r;
                        }(n)
                    };
                }
                function ae(e, n) {
                    var t = 1 < arguments.length && void 0 !== n ? n : 12;
                    return $(e.replace(/^\./, '')).substring(0, t);
                }
                var ce = [
                        'items',
                        'itemids'
                    ], ue = [
                        'email',
                        'emailhash',
                        'hash',
                        'hashedemail'
                    ];
                var le = [
                    function (e) {
                        for (var n, t, r = e.eventSource, o = 0, i = Object.keys(r); o < i.length; o++) {
                            var a = i[o], c = a.toLowerCase();
                            if (-1 < ue.indexOf(c)) {
                                var u = p(d(r[a])), l = (t = void 0, (t = u.match(J())) && t.map(p)[0]), f = oe(u);
                                if (l) {
                                    var s = ie(decodeURIComponent(l));
                                    return y({
                                        hashedEmail: [
                                            s.md5,
                                            s.sha1,
                                            s.sha256
                                        ]
                                    }, e);
                                }
                                if (f && (n = void 0, (n = oe(f)) && null != re[n.length]))
                                    return y({ hashedEmail: [f.toLowerCase()] }, e);
                            }
                        }
                        return e;
                    },
                    function (e) {
                        var t = e.eventSource;
                        return Object.keys(t).forEach(function (e) {
                            var n = e.toLowerCase();
                            -1 < ce.indexOf(n) && h(t[e]) && 10 < t[e].length && (t[e].length = 10);
                        }), {};
                    }
                ];
                var fe = function (e) {
                    var t = '';
                    return e.forEach(function (e) {
                        var n = 0 === t.length ? '?' : '&';
                        e && e.length && 2 === e.length && e[0] && e[1] && (t = ''.concat(t).concat(n).concat(e[0], '=').concat(e[1]));
                    }), t;
                };
                function se(e) {
                    return -1 === e.indexOf('%') ? e : decodeURIComponent(e);
                }
                function de(e) {
                    return r = e, t = isNaN(+r) ? r : +r, 'false' !== (n = 'null' === t || 'undefined' === t ? null : t) && ('true' === n || n);
                    var n, t, r;
                }
                var he = [
                        'setemail',
                        'setemailhash',
                        'sethashedemail'
                    ], pe = {
                        appId: function (e) {
                            return m('aid', e);
                        },
                        eventSource: function (e) {
                            return g('se', e, function (e) {
                                return Q(JSON.stringify(e, z));
                            });
                        },
                        liveConnectId: function (e) {
                            return m('duid', e);
                        },
                        legacyId: function (e) {
                            return m('lduid', e && e.duid);
                        },
                        trackerName: function (e) {
                            return m('tna', e || 'unknown');
                        },
                        pageUrl: function (e) {
                            return m('pu', e);
                        },
                        errorDetails: function (e) {
                            return g('ae', e, function (e) {
                                return Q(JSON.stringify(e));
                            });
                        },
                        retrievedIdentifiers: function (e) {
                            var n = [];
                            return e.forEach(function (e) {
                                return n.push(m('ext_'.concat(e.name), e.value));
                            }), n;
                        },
                        hashesFromIdentifiers: function (e) {
                            var n = [];
                            return e.forEach(function (e) {
                                return n.push(m('scre', ''.concat(e.md5, ',').concat(e.sha1, ',').concat(e.sha256)));
                            }), n;
                        },
                        decisionIds: function (e) {
                            return m('li_did', e.join(','));
                        },
                        hashedEmail: function (e) {
                            return m('e', e.join(','));
                        },
                        usPrivacyString: function (e) {
                            return m('us_privacy', e);
                        },
                        wrapperName: function (e) {
                            return m('wpn', e);
                        },
                        gdprApplies: function (e) {
                            return g('gdpr', e, function (e) {
                                return encodeURIComponent(e ? 1 : 0);
                            });
                        },
                        gdprConsent: function (e) {
                            return m('gdpr_consent', e);
                        },
                        referrer: function (e) {
                            return m('refr', e);
                        }
                    };
                function ve(n) {
                    var o = {};
                    function e() {
                        var r = [];
                        return Object.keys(o).forEach(function (e) {
                            var n, t = o[e];
                            !pe[e] || (n = pe[e](t)) && n.length && (n[0] instanceof Array ? r = r.concat(n) : r.push(n));
                        }), r;
                    }
                    return n && (o = function (e) {
                        try {
                            return function (e) {
                                return u(e.eventSource) ? le.reduce(function (e, n) {
                                    return y(e, n(e));
                                }, e) : e;
                            }(JSON.parse(JSON.stringify(e)));
                        } catch (e) {
                            return D('StateCombineWith', 'Error while extracting event data', e), o;
                        }
                    }(n)), {
                        data: o,
                        combineWith: function (e) {
                            return new ve(y(n, e));
                        },
                        asQueryString: function () {
                            return fe(e());
                        },
                        asTuples: e,
                        sendsPixel: function () {
                            var e = u(o.eventSource) ? o.eventSource : {}, n = Object.keys(e).filter(function (e) {
                                    return 'eventname' === e.toLowerCase() || 'event' === e.toLowerCase();
                                }), t = n && 1 <= n.length && n[0], r = t && p(o.eventSource[t]);
                            return !r || -1 === he.indexOf(r.toLowerCase());
                        }
                    };
                }
                function ge() {
                    return document.domain || document.location && document.location.host || window && window.location && window.location.host || 'localhost';
                }
                function me(e) {
                    try {
                        return e();
                    } catch (e) {
                        return;
                    }
                }
                var we = null;
                function ye(e) {
                    return we = we || {
                        pageUrl: function (e) {
                            for (var n, t = 0 < arguments.length && void 0 !== e ? e : window, r = me(function () {
                                        return t.location.ancestorOrigins;
                                    }) || {}, o = [], i = t; i !== top;)
                                o.push(i), i = i.parent;
                            o.push(i);
                            for (var a = o.length - 1; 0 <= a && !n; a--)
                                !function (e) {
                                    n = me(function () {
                                        return o[e].location.href;
                                    }), 0 !== e && (n = (n = n || me(function () {
                                        return o[e - 1].document.referrer;
                                    })) || r[e - 1]);
                                }(a);
                            return n;
                        }(),
                        referrer: function (e) {
                            var n = 0 < arguments.length && void 0 !== e ? e : window;
                            return me(function () {
                                return n.top.document.referrer;
                            });
                        }()
                    };
                }
                var Se = null, be = null, Ie = 120, Ce = {
                        errorDetails: {
                            message: 'Unknown message',
                            name: 'Unknown name'
                        }
                    };
                function xe(e) {
                    try {
                        var n = +e;
                        return isNaN(n) ? void 0 : n;
                    } catch (e) {
                    }
                }
                function Ee(e) {
                    try {
                        return e && e.length && e.length > Ie ? ''.concat(e.substr(0, Ie), '...') : e;
                    } catch (e) {
                    }
                }
                function Oe(e) {
                    var n;
                    be && be.sendPixel(new ve((n = e) ? {
                        errorDetails: {
                            message: Ee(n.message),
                            name: Ee(n.name),
                            stackTrace: Ee(n.stack),
                            lineNumber: xe(n.lineNumber),
                            lineColumn: xe(n.lineColumn),
                            fileName: Ee(n.fileName)
                        }
                    } : Ce).combineWith(Se || {}).combineWith(ye()));
                }
                var je = '0123456789ABCDEFGHJKMNPQRSTVWXYZ', ke = je.length, Re = Math.pow(2, 48) - 1, Le = 10, De = 16, Ue = function () {
                        var e = 'undefined' != typeof window ? window : null, n = e && (e.crypto || e.msCrypto);
                        if (n)
                            return function () {
                                var e = new Uint8Array(1);
                                return n.getRandomValues(e), e[0] / 255;
                            };
                        return function () {
                            return Math.random();
                        };
                    }();
                function Ne(e, n) {
                    if (Re < e)
                        throw (t = new Error('cannot encode time greater than ' + Re)).source = 'Ulid', t;
                    for (var t, r, o = ''; 0 < n; n--)
                        r = e % ke, o = je.charAt(r) + o, e = (e - r) / ke;
                    return o;
                }
                function _e(e) {
                    for (var n = ''; 0 < e; e--)
                        n = function () {
                            var e = Math.floor(Ue() * ke);
                            e === ke && (e = ke - 1);
                            return je.charAt(e);
                        }() + n;
                    return n;
                }
                var Fe = {
                        cookie: 'cookie',
                        localStorage: 'ls',
                        none: 'none'
                    }, Te = '_lc2_fpi', Ae = '_li_dcdm_c', Pe = 730;
                function Ge(e, c) {
                    try {
                        var n = e.expirationDays || Pe, t = function () {
                                var e = c.getCookie(Ae);
                                if (e)
                                    return e;
                                for (var n = ge(), t = n.split('.'), r = t.length; 0 < r; r--) {
                                    var o = '.'.concat(t.slice(r - 1, t.length).join('.'));
                                    if (c.setCookie(Ae, o, void 0, 'Lax', o), c.getCookie(Ae))
                                        return o;
                                }
                                return '.'.concat(n);
                            }(), r = {
                                expires: n,
                                domain: t
                            };
                        return {
                            domain: t,
                            liveConnectId: (o = Te, i = ''.concat(ae(t), '--').concat(Ne(Date.now(), Le) + _e(De)).toLocaleLowerCase(), a = r, l(u = e.storageStrategy, Fe.localStorage) ? function (e, n, t) {
                                var r, o, i, a = null;
                                try {
                                    c.localStorageIsEnabled() && (r = ''.concat(e, '_exp'), o = c.getDataFromLocalStorage(r), i = s(t.expires, 86400000), o && parseInt(o) <= new Date().getTime() && c.removeDataFromLocalStorage(e), c.getDataFromLocalStorage(e) || c.setDataInLocalStorage(e, n), c.setDataInLocalStorage(r, ''.concat(i)), a = c.getDataFromLocalStorage(e));
                                } catch (e) {
                                    D('LSGetOrAdd', 'Error manipulating LS', e);
                                }
                                return a;
                            }(o, i, a) : l(u, Fe.none) ? null : function (e, n, t) {
                                var r = null;
                                try {
                                    var o = c.getCookie(e);
                                    o ? c.setCookie(e, o, f(t.expires), 'Lax', t.domain) : c.setCookie(e, n, f(t.expires), 'Lax', t.domain), r = c.getCookie(e);
                                } catch (e) {
                                    D('CookieGetOrAdd', 'Failed manipulating cookie jar', e);
                                }
                                return r;
                            }(o, i, a))
                        };
                    } catch (e) {
                        return D('IdentifiersResolve', 'Error while managing identifiers', e), {};
                    }
                    var o, i, a, u;
                }
                var Ve = f(30), Qe = 'li_did', Je = 'lidids.', Me = function (e, n, t) {
                        return t.indexOf(e) === n;
                    }, We = function (e) {
                        return (n = e) && i.test(p(n));
                        var n;
                    }, He = function (e) {
                        return e && 0 < p(e).length;
                    };
                function ze(r, o) {
                    var e, n, t, i, a, c = {};
                    try {
                        var u = r.pageUrl && (e = r.pageUrl, a = {}, e && -1 !== (n = e.indexOf('?')) && (t = e.slice(n + 1)) && (-1 !== (i = t.indexOf('#')) && !(t = t.slice(0, i)) || t.split('&').forEach(function (e) {
                                if (e) {
                                    if ('[]' === (e = ((e = e.split('=')) && 2 === e.length ? e : [
                                            e[0],
                                            'true'
                                        ]).map(se))[0].slice(-2) && (a[e[0] = e[0].slice(0, -2)] = a[e[0]] || []), !a[e[0]])
                                        return a[e[0]] = de(e[1]);
                                    h(a[e[0]]) ? a[e[0]].push(de(e[1])) : a[e[0]] = [
                                        a[e[0]],
                                        de(e[1])
                                    ];
                                }
                            })), a) || {}, l = [].concat(u[Qe] || []), f = o.findSimilarCookies(Je);
                        l.map(p).filter(He).filter(We).filter(Me).forEach(function (e) {
                            return n = e, t = r.domain, void (n && o.setCookie(''.concat(Je).concat(n), n, Ve, 'Lax', t));
                            var n, t;
                        });
                        c = { decisionIds: l.concat(f).map(p).filter(He).filter(We).filter(Me) };
                    } catch (e) {
                        D('DecisionsResolve', 'Error while managing decision ids', e);
                    }
                    return c;
                }
                var qe = 15638400000;
                function Be(e, n) {
                    e && n.setDataInLocalStorage(x, e);
                }
                function $e(e, n) {
                    try {
                        var t = (new Date().getTime() - qe) / 1000, r = e.legacyId || {}, o = r.currVisitTs ? parseInt(r.currVisitTs) : 0;
                        return r.currVisitTs && o < t && e.liveConnectId && Be(e.liveConnectId, n), n.getDataFromLocalStorage(x) || Be(r.duid || e.liveConnectId, n), { peopleVerifiedId: n.getDataFromLocalStorage(x) };
                    } catch (e) {
                        return D('PeopleVerifiedResolve', 'Error while managing people verified', e), {};
                    }
                }
                function Ke(e, n) {
                    try {
                        return function (e, n) {
                            for (var t = [], r = [], o = 0; o < e.length; o++) {
                                var i, a = e[o], c = n.getCookie(a) || n.getDataFromLocalStorage(a);
                                c && (i = function (e) {
                                    {
                                        if (H(e))
                                            return function (e) {
                                                for (var n = function (e) {
                                                            for (var n = [], t = new RegExp(W.source, 'g'), r = t.exec(e); r;)
                                                                n.push(p(r[1])), r = t.exec(e);
                                                            return n;
                                                        }(e), t = [], r = 0; r < n.length; r++) {
                                                    var o = n[r], i = ie(o);
                                                    e = e.replace(o, i.md5), t.push(i);
                                                }
                                                return {
                                                    identifierWithoutRawEmails: e,
                                                    hashesFromIdentifier: t
                                                };
                                            }(e);
                                        if (M(e)) {
                                            var n = ie(e);
                                            return {
                                                identifierWithoutRawEmails: n.md5,
                                                hashesFromIdentifier: [n]
                                            };
                                        }
                                        return {
                                            identifierWithoutRawEmails: e,
                                            hashesFromIdentifier: []
                                        };
                                    }
                                }(d(c)), t.push({
                                    name: a,
                                    value: i.identifierWithoutRawEmails
                                }), r = r.concat(i.hashesFromIdentifier));
                            }
                            return {
                                retrievedIdentifiers: t,
                                hashesFromIdentifiers: function (e) {
                                    for (var n = {}, t = [], r = 0; r < e.length; r++)
                                        e[r].md5 in n || (t.push(e[r]), n[e[r].md5] = !0);
                                    return t;
                                }(r)
                            };
                        }(function (e) {
                            var n = [];
                            e.identifiersToResolve && (h(e.identifiersToResolve) ? n = e.identifiersToResolve : c(e.identifiersToResolve) && (n = e.identifiersToResolve.split(',')));
                            for (var t = 0; t < n.length; t++)
                                n[t] = n[t].trim();
                            return n;
                        }(e), n);
                    } catch (e) {
                        return L('IdentifiersEnricher', e), {};
                    }
                }
                var Xe = '\\+?\\d+', Ye = '('.concat('[a-z]-[a-z0-9]{4}', '--').concat(o, ')\\.(').concat(Xe, ')\\.(').concat(Xe, ')\\.(').concat(Xe, ')\\.(').concat(Xe, ')\\.(').concat(o, ')'), Ze = new RegExp(Ye, 'i'), en = '_litra_id.';
                function nn(e, n) {
                    var t, r, o, i, a = (o = ge(), i = ae((r = (t = o).length, '.' === t.charAt(--r) && (t = t.slice(0, r)), '*.' === t.slice(0, 2) && (t = t.slice(1)), t + '/'), 4), ''.concat(en).concat(i));
                    try {
                        if (e.appId && n.localStorageIsEnabled())
                            return {
                                legacyId: function (e) {
                                    if (e) {
                                        var n = e.match(Ze);
                                        if (n && 7 === n.length)
                                            return {
                                                duid: n[1],
                                                creationTs: n[2],
                                                sessionCount: n[3],
                                                currVisitTs: n[4],
                                                lastSessionVisitTs: n[5],
                                                sessionId: n[6]
                                            };
                                    }
                                }(n.getDataFromLocalStorage(a))
                            };
                    } catch (e) {
                        D('LegacyDuidEnrich', 'Error while getting legacy duid', e);
                    }
                    return {};
                }
                var tn = '__li_idex_cache';
                function rn(t, r, o, i) {
                    return function (e) {
                        var n = {};
                        if (e)
                            try {
                                n = JSON.parse(e);
                            } catch (e) {
                                L('IdentityResolverParser', e);
                            }
                        try {
                            t.setCookie(tn, JSON.stringify(n), s(o, 3600000).toUTCString(), 'Lax', r);
                        } catch (e) {
                            L('IdentityResolverStorage', e);
                        }
                        i(n);
                    };
                }
                function on(e, c, u) {
                    try {
                        var l = e || {}, n = l.identityResolutionConfig || {}, t = l.retrievedIdentifiers || [], f = n.expirationHours || E, r = n.source || 'unknown', o = n.publisherId || 'any', i = n.url || j, s = n.ajaxTimeout || O, a = [];
                        a.push(m('duid', l.peopleVerifiedId)), a.push(m('us_privacy', l.usPrivacyString)), a.push(g('gdpr', l.gdprApplies, function (e) {
                            return encodeURIComponent(e ? 1 : 0);
                        })), a.push(m('gdpr_consent', l.gdprConsent)), t.forEach(function (e) {
                            a.push(m(e.name, e.value));
                        });
                        var d = function (e) {
                            var n = a.slice().concat(w(e)), t = fe(n);
                            return ''.concat(i, '/').concat(r, '/').concat(o).concat(t);
                        };
                        return {
                            resolve: function (e, n, t) {
                                try {
                                    r = e, o = n, i = t, (a = c.getCookie(tn)) ? r(JSON.parse(a)) : u.ajaxGet(d(i), rn(c, l.domain, f, r), o, s);
                                } catch (e) {
                                    n(), L('IdentityResolve', e);
                                }
                                var r, o, i, a;
                            },
                            getUrl: d
                        };
                    } catch (t) {
                        return L('IdentityResolver', t), {
                            resolve: function (e, n) {
                                n(), L('IdentityResolver.resolve', t);
                            },
                            getUrl: function () {
                                L('IdentityResolver.getUrl', t);
                            }
                        };
                    }
                }
                var an = function () {
                };
                function cn(n, t) {
                    var r = [];
                    function o(e) {
                        return t && t[e] && v(t[e]) ? t[e] : (r.push(e), an);
                    }
                    function e(e) {
                        return l(n, Fe.none) ? an : o(e);
                    }
                    var i = {
                        localStorageIsEnabled: e('localStorageIsEnabled'),
                        getCookie: o('getCookie'),
                        setCookie: e('setCookie'),
                        getDataFromLocalStorage: o('getDataFromLocalStorage'),
                        removeDataFromLocalStorage: e('removeDataFromLocalStorage'),
                        setDataInLocalStorage: e('setDataInLocalStorage'),
                        findSimilarCookies: o('findSimilarCookies')
                    };
                    return 0 < r.length && D('StorageHandler', 'The storage functions \''.concat(JSON.stringify(r), '\' are not provided')), i;
                }
                var un = function () {
                };
                function ln(n) {
                    var t = [];
                    function e(e) {
                        return n && n[e] && v(n[e]) ? n[e] : (t.push(e), un);
                    }
                    var r = {
                        ajaxGet: e('ajaxGet'),
                        pixelGet: e('pixelGet')
                    };
                    return 0 < t.length && D('CallHandler', 'The call functions \''.concat(JSON.stringify(t), '\' are not provided')), r;
                }
                var fn = {};
                function sn(e, n, t) {
                    var r, o;
                    e && u(e) ? e.config ? D('StrayConfig', 'Received a config after LC has already been initialised', new Error(e)) : (r = t.combineWith({ eventSource: e }), fn.hashedEmail = fn.hashedEmail || r.data.hashedEmail, o = y({ eventSource: e }, fn), n.sendAjax(t.combineWith(o))) : D('EventNotAnObject', 'Received event was not an object', new Error(e));
                }
                function dn(e) {
                    try {
                        if (window && window.liQ && window.liQ.ready) {
                            var n, t = window.liQ.config && function (e, n) {
                                    if (!(e.appId === n.appId && e.wrapperName === n.wrapperName && e.collectorUrl === n.collectorUrl))
                                        return {
                                            appId: [
                                                e.appId,
                                                n.appId
                                            ],
                                            wrapperName: [
                                                e.wrapperName,
                                                n.wrapperName
                                            ],
                                            collectorUrl: [
                                                e.collectorUrl,
                                                n.collectorUrl
                                            ]
                                        };
                                }(window.liQ.config, e);
                            return t && ((n = new Error()).name = 'ConfigSent', n.message = 'Additional configuration received', D('LCDuplication', JSON.stringify(t), n)), window.liQ;
                        }
                    } catch (e) {
                    }
                }
                function hn(e, n, t) {
                    try {
                        !function (e, n) {
                            e = e || 5;
                            try {
                                window || n(new Error('Bus can only be attached to the window, which is not present')), window && !window[S] && (window[S] = new _(e)), window[S];
                            } catch (e) {
                                n(e);
                            }
                        }();
                        var r = ln(t);
                        !function (e, n) {
                            try {
                                window && window[S] && v(window[S].on) && window[S].on(b, Oe), be = new N(e, n), Se = e || {};
                            } catch (e) {
                            }
                        }(e, r);
                        var o = cn(e.storageStrategy, n), i = function (e, n) {
                                return e.combineWith(n(e.data, o));
                            }, a = [
                                Ge,
                                $e,
                                ze
                            ], c = [
                                ye,
                                Ke,
                                nn
                            ].reduce(i, new ve(e)), u = a.reduce(i, c), l = y(e, { peopleVerifiedId: u.data.peopleVerifiedId }), f = new N(e, r, function () {
                                return R(I, l);
                            }, function () {
                                return R(C, '0');
                            }), s = on(u.data, o, r), d = function () {
                                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
                                    n[t] = arguments[t];
                                return function (e, t, r) {
                                    try {
                                        e.forEach(function (e) {
                                            var n = e;
                                            h(n) ? n.forEach(function (e) {
                                                return sn(e, t, r);
                                            }) : sn(n, t, r);
                                        });
                                    } catch (e) {
                                        D('LCPush', 'Failed sending an event', e);
                                    }
                                }(n, f, u);
                            };
                        return {
                            push: d,
                            fire: function () {
                                return d({});
                            },
                            peopleVerifiedId: u.data.peopleVerifiedId,
                            ready: !0,
                            resolve: s.resolve,
                            resolutionCallUrl: s.getUrl,
                            config: e
                        };
                    } catch (e) {
                        D('LCConstruction', 'Failed to build LC', e);
                    }
                }
                var pn = function (e, n, t) {
                    try {
                        var r = window.liQ || [], o = u(e) && e || {};
                        if (window && (window.liQ = dn(o) || hn(o, n, t) || r), h(r))
                            for (var i = 0; i < r.length; i++)
                                window.liQ.push(r[i]);
                    } catch (e) {
                        D('LCConstruction', 'Failed to build LC', e);
                    }
                    return window.liQ;
                };
                function vn(e, n, t) {
                    var r = u(e) && e || {};
                    return pn(r, n, t);
                }
            },
            576: function (e, n, t) {
                'use strict';
                function r(e) {
                    return (r = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function c(e) {
                    return 'object' === r(e) ? JSON.stringify(e) : '' + e;
                }
                function u(e) {
                    return '[object Array]' === Object.prototype.toString.call(e);
                }
                t.d(n, 'a', function () {
                    return a;
                });
                var o = !!String.prototype.trim;
                function l(e) {
                    return o ? ('' + e).trim() : ('' + e).replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
                }
                function f(e) {
                    return 'string' == typeof e;
                }
                function h(e) {
                    return !!e && 'object' === r(e) && !u(e);
                }
                function s(e) {
                    return e && 'function' == typeof e;
                }
                function p(e, n, t) {
                    return null != (r = n) && 0 < l(r).length ? [
                        e,
                        s(t) ? t(n) : n
                    ] : [];
                    var r;
                }
                function v(e, n) {
                    return p(e, n, function (e) {
                        return encodeURIComponent(e);
                    });
                }
                function d(e, n) {
                    function t(e) {
                        return h(e) ? e : {};
                    }
                    var r = {}, o = t(e), i = t(n);
                    return Object.keys(o).forEach(function (e) {
                        r[e] = o[e];
                    }), Object.keys(i).forEach(function (e) {
                        r[e] = i[e];
                    }), r;
                }
                var g = function (e) {
                        var t = '';
                        return e.forEach(function (e) {
                            var n = 0 === t.length ? '?' : '&';
                            e && e.length && 2 === e.length && e[0] && e[1] && (t = ''.concat(t).concat(n).concat(e[0], '=').concat(e[1]));
                        }), t;
                    }, m = '__li__evt_bus', w = 'li_errors', y = '_li_duid', S = 5000, b = 'https://idx.liadm.com/idex';
                function I(e, n) {
                    C(e, n.message, n);
                }
                function C(e, n, t) {
                    var r, o, i = 2 < arguments.length && void 0 !== t ? t : {}, a = new Error(n || i.message);
                    a.stack = i.stack, a.name = e || 'unknown error', a.lineNumber = i.lineNumber, a.columnNumber = i.columnNumber, r = w, o = a, window && window[m] && window[m].emit(r, o);
                }
                function x(e, n, o) {
                    try {
                        var t = e || {}, r = t.identityResolutionConfig || {}, i = t.retrievedIdentifiers || [], a = r.source || 'unknown', c = r.publisherId || 'any', u = r.url || b, l = r.ajaxTimeout || S, f = [];
                        f.push(v('duid', t.peopleVerifiedId)), f.push(v('us_privacy', t.usPrivacyString)), f.push(p('gdpr', t.gdprApplies, function (e) {
                            return encodeURIComponent(e ? 1 : 0);
                        })), f.push(v('gdpr_consent', t.gdprConsent)), i.forEach(function (e) {
                            f.push(v(e.name, e.value));
                        });
                        var s = function (e) {
                                var n = f.slice().concat(function (t) {
                                        if (t && h(t)) {
                                            var r = [];
                                            return Object.keys(t).forEach(function (e) {
                                                var n = t[e];
                                                n && !h(n) && n.length && r.push([
                                                    encodeURIComponent(e),
                                                    encodeURIComponent(n)
                                                ]);
                                            }), r;
                                        }
                                        return [];
                                    }(e)), t = g(n);
                                return ''.concat(u, '/').concat(a, '/').concat(c).concat(t);
                            }, d = function (e, n, t) {
                                var r;
                                o.ajaxGet(s(t), (r = e, function (e) {
                                    var n = {};
                                    if (e)
                                        try {
                                            n = JSON.parse(e);
                                        } catch (e) {
                                            I('IdentityResolverParser', e);
                                        }
                                    r(n);
                                }), n, l);
                            };
                        return {
                            resolve: function (e, n, t) {
                                try {
                                    d(e, n, t);
                                } catch (e) {
                                    n(), I('IdentityResolve', e);
                                }
                            },
                            getUrl: s
                        };
                    } catch (t) {
                        return I('IdentityResolver', t), {
                            resolve: function (e, n) {
                                n(), I('IdentityResolver.resolve', t);
                            },
                            getUrl: function () {
                                I('IdentityResolver.getUrl', t);
                            }
                        };
                    }
                }
                var E = function () {
                    return /\S+(@|%40)\S+\.\S+/;
                };
                var O = /"([^"]+(@|%40)[^"]+[.][a-z]*(\s+)?)(\\"|")/;
                function j(e, n) {
                    try {
                        return function (e, n) {
                            e.identifiersToResolve = e.identifiersToResolve || [];
                            for (var t = u(e.identifiersToResolve) ? e.identifiersToResolve : c(e.identifiersToResolve).split(','), r = [], o = 0; o < t.length; o++) {
                                var i = l(t[o]), a = n.getCookie(i) || n.getDataFromLocalStorage(i);
                                !a || function (e) {
                                    return O.test(e);
                                }(c(a)) || function (e) {
                                    return E().test(e);
                                }(c(a)) || r.push({
                                    name: i,
                                    value: c(a)
                                });
                            }
                            return { retrievedIdentifiers: r };
                        }(e, n);
                    } catch (e) {
                        return I('IdentifiersEnrich', e), {};
                    }
                }
                var k = {
                        cookie: 'cookie',
                        localStorage: 'ls',
                        none: 'none'
                    }, R = function () {
                    };
                function L(e, n) {
                    var t = [];
                    function r(e) {
                        return n && n[e] && s(n[e]) ? n[e] : (t.push(e), R);
                    }
                    var o, i, a, c = {
                            localStorageIsEnabled: (o = 'localStorageIsEnabled', i = e, a = k.none, f(i) && f(a) && l(i.toLowerCase()) === l(a.toLowerCase()) ? R : r(o)),
                            getCookie: r('getCookie'),
                            getDataFromLocalStorage: r('getDataFromLocalStorage')
                        };
                    return 0 < t.length && C('StorageHandler', 'The storage functions \''.concat(JSON.stringify(t), '\' are not provided')), c;
                }
                var D = function () {
                };
                function i(e, n, t) {
                    try {
                        var r = (u = t, l = [], f = {
                                ajaxGet: c('ajaxGet'),
                                pixelGet: c('pixelGet')
                            }, 0 < l.length && C('CallHandler', 'The call functions \''.concat(JSON.stringify(l), '\' are not provided')), f), o = L(e.storageStrategy, n), i = d(e, function (e) {
                                try {
                                    return { peopleVerifiedId: e.getDataFromLocalStorage(y) };
                                } catch (e) {
                                    return C('PeopleVerifiedEnrich', e.message, e), {};
                                }
                            }(o)), a = x(d(i, j(i, o)), 0, r);
                        return {
                            push: function (e) {
                                return window.liQ.push(e);
                            },
                            fire: function () {
                                return window.liQ.push({});
                            },
                            peopleVerifiedId: i.peopleVerifiedId,
                            ready: !0,
                            resolve: a.resolve,
                            resolutionCallUrl: a.getUrl,
                            config: e
                        };
                    } catch (e) {
                    }
                    function c(e) {
                        return u && u[e] && s(u[e]) ? u[e] : (l.push(e), D);
                    }
                    var u, l, f;
                }
                function a(e, n, t) {
                    try {
                        return window && (window.liQ = window.liQ || []), i(h(e) && e || {}, n, t);
                    } catch (e) {
                    }
                    return {};
                }
            }
        }, [573]);
        pbjsChunk([198], {
            655: function (e, n, t) {
                e.exports = t(656);
            },
            656: function (e, n, t) {
                'use strict';
                Object.defineProperty(n, '__esModule', { value: !0 }), t.d(n, 'netIdSubmodule', function () {
                    return d;
                });
                var u = t(11), d = {
                        name: 'netId',
                        decode: function (e) {
                            return e && 'string' == typeof e.netId ? { netId: e.netId } : void 0;
                        },
                        getId: function () {
                            return {};
                        }
                    };
                Object(u.e)('userId', d);
            }
        }, [655]);
        pbjsChunk([191], {
            669: function (e, r, i) {
                e.exports = i(670);
            },
            670: function (e, r, i) {
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
                    VERSION: '3.0.7',
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
                                                        prebidver: '4.36.0',
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
                                        n.site.content = {};
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
                                            }) ? n.site.content[c] = e.params.video.content[c] : u.logMessage('oneVideo bid adapter validation error: ', c, ' is either not supported is OpenRTB V2.5 or value is undefined');
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
        }, [669]);
        pbjsChunk([188], {
            681: function (e, t, r) {
                e.exports = r(682);
            },
            682: function (e, t, r) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), r.d(t, 'USER_ID_CODE_TO_QUERY_ARG', function () {
                    return l;
                }), r.d(t, 'spec', function () {
                    return h;
                });
                var o = r(3), n = r(1), c = r(0), u = r(2);
                function d(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var r = [], n = !0, i = !1, a = void 0;
                        try {
                            for (var d, s = e[Symbol.iterator](); !(n = (d = s.next()).done) && (r.push(d.value), !t || r.length !== t); n = !0);
                        } catch (e) {
                            i = !0, a = e;
                        } finally {
                            try {
                                n || null == s.return || s.return();
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
                    ], p = 'hb_pb', m = '3.0.3', s = 'USD', l = {
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
                            var i = [], t = d(e.reduce(function (e, t) {
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
                                        var r, n, i = f([e], t), a = c.deepAccess(e, 'params.video') || {}, d = c.deepAccess(e, 'mediaTypes.video.context'), s = c.deepAccess(e, 'mediaTypes.video.playerSize');
                                        c.isArray(e.sizes) && 2 === e.sizes.length && !c.isArray(e.sizes[0]) ? (r = parseInt(e.sizes[0], 10), n = parseInt(e.sizes[1], 10)) : c.isArray(e.sizes) && c.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (r = parseInt(e.sizes[0][0], 10), n = parseInt(e.sizes[0][1], 10)) : c.isArray(s) && 2 === s.length && (r = parseInt(s[0], 10), n = parseInt(s[1], 10));
                                        Object.keys(a).forEach(function (e) {
                                            'openrtb' === e ? (a[e].w = r || a[e].w, a[e].v = n || a[e].v, i[e] = JSON.stringify(a[e])) : e in i || 'url' === e || (i[e] = a[e]);
                                        }), i.auid = e.params.unit, i.vwd = r || a.vwd, i.vht = n || a.vht, 'outstream' === d && (i.vos = '101');
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
                                    void 0 !== e && '' !== e.vastUrl && 0 < e.pub_rev && (i = c.parseUrl(e.vastUrl).search || {}, (a = {}).requestId = r.bidId, e.deal_id && (a.dealId = e.deal_id), a.ttl = 300, a.netRevenue = !0, a.currency = e.currency, a.cpm = parseInt(e.pub_rev, 10) / 1000, a.width = parseInt(e.width, 10), a.height = parseInt(e.height, 10), a.creativeId = e.adid, a.vastUrl = e.vastUrl, a.mediaType = u.d, e.ph = i.ph, e.colo = i.colo, e.ts = i.ts, n.push(a));
                                }
                                return n;
                            } : function (e, t) {
                                for (var r = t.bids, n = (t.startTime, e.ads.ad), i = [], a = 0; a < n.length; a++) {
                                    var d, s = n[a], o = parseInt(s.idx, 10), c = {};
                                    c.requestId = r[o].bidId, s.pub_rev && (c.cpm = Number(s.pub_rev) / 1000, (d = s.creative[0]) && (c.width = d.width, c.height = d.height), c.creativeId = d.id, c.ad = s.html, s.deal_id && (c.dealId = s.deal_id), c.ttl = 300, c.netRevenue = !0, c.currency = s.currency, s.tbd && (c.tbd = s.tbd), c.ts = s.ts, c.meta = {}, s.brand_id && (c.meta.brandId = s.brand_id), s.adv_id && (c.meta.dspid = s.adv_id), i.push(c));
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
                    var r, n, i, a, d = c.inIframe(), s = {
                            ju: o.b.getConfig('pageUrl') || t.refererInfo.referer,
                            ch: document.charSet || document.characterSet,
                            res: ''.concat(screen.width, 'x').concat(screen.height, 'x').concat(screen.colorDepth),
                            ifr: d,
                            tz: new Date().getTimezoneOffset(),
                            tws: function (e) {
                                var t, r, n, i = window, a = document, d = a.documentElement;
                                if (e) {
                                    try {
                                        i = window.top, a = window.top.document;
                                    } catch (e) {
                                        return;
                                    }
                                    d = a.documentElement, n = a.body, t = i.innerWidth || d.clientWidth || n.clientWidth, r = i.innerHeight || d.clientHeight || n.clientHeight;
                                } else
                                    d = a.documentElement, t = i.innerWidth || d.clientWidth, r = i.innerHeight || d.clientHeight;
                                return ''.concat(t, 'x').concat(r);
                            }(d),
                            be: 1,
                            bc: e[0].params.bc || ''.concat(p, '_').concat(m),
                            dddid: c._map(e, function (e) {
                                return e.transactionId;
                            }).join(','),
                            nocache: new Date().getTime()
                        };
                    return e[0].params.platform && (s.ph = e[0].params.platform), t.gdprConsent && (void 0 !== (r = t.gdprConsent).consentString && (s.gdpr_consent = r.consentString), void 0 !== r.gdprApplies && (s.gdpr = r.gdprApplies ? 1 : 0), 'iab' === o.b.getConfig('consentManagement.cmpApi') && (s.x_gdpr_f = 1)), t && t.uspConsent && (s.us_privacy = t.uspConsent), c.deepAccess(e[0], 'crumbs.pubcid') && c.deepSetValue(e[0], 'userId.pubcid', c.deepAccess(e[0], 'crumbs.pubcid')), n = s, i = e[0].userId, c._each(i, function (e, t) {
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
                    }), s = n, e[0].schain && (s.schain = (a = e[0].schain, ''.concat(a.ver, ',').concat(a.complete, '!').concat(function (e) {
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
                    }(a.nodes)))), s;
                }
                function b(e, r, t) {
                    var n = [], i = !1;
                    t.forEach(function (e) {
                        var t = function (e, t) {
                            var r = {}, n = o.b.getConfig('currency.adServerCurrency') || s;
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
        }, [681]);
        pbjsChunk([179], {
            701: function (e, r, t) {
                e.exports = t(702);
            },
            702: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'parrableIdSubmodule', function () {
                    return l;
                });
                var g = t(0), o = t(10), m = t.n(o), O = t(4), n = t(11), v = t(20), I = t(8), a = t(7), i = '_parrable_id', h = '_parrable_eid', C = '_parrable_optout', s = 31449600000, k = 'Thu, 01 Jan 1970 00:00:00 GMT', _ = Object(a.b)(928);
                function y() {
                    var e, t, r = _.getCookie(i);
                    return r ? (e = decodeURIComponent(r), t = {}, e.split(',').forEach(function (e) {
                        var r = e.split(':');
                        t[r[0]] = 1 == +r[1] || r[1];
                    }), t) : null;
                }
                function E(e) {
                    var r, t, o;
                    e && (r = encodeURIComponent((o = [], (t = e).eid && o.push('eid:' + t.eid), t.ibaOptout && o.push('ibaOptout:1'), t.ccpaOptout && o.push('ccpaOptout:1'), o.join(','))), _.setCookie(i, r, new Date(g.timestamp() + s).toGMTString(), 'lax'));
                }
                function u(e, r) {
                    if (function (e) {
                            if (e) {
                                if (e.partners || e.partner)
                                    return e.storage && g.logWarn('User ID - parrableId submodule does not require a storage config'), 1;
                                g.logError('User ID - parrableId submodule requires partner list');
                            } else
                                g.logError('User ID - parrableId submodule requires configParams');
                        }(e)) {
                        var t, n = y();
                        if (n || (n = function () {
                                var e = _.getCookie(h), r = 'true' === _.getCookie(C);
                                if (e || r) {
                                    var t = {};
                                    return e && (t.eid = e), r && (t.ibaOptout = r), t;
                                }
                                return null;
                            }(), (t = n) && (E(t), t.eid && _.setCookie(h, '', k), t.ibaOptout && _.setCookie(C, '', k))), function (e, r) {
                                var t = e.timezoneFilter;
                                if (t && !r) {
                                    var o = new Date().getTimezoneOffset() / 60, n = Intl.DateTimeFormat().resolvedOptions().timeZone;
                                    return (!g.isEmpty(t.blockedZones) || !g.isEmpty(t.blockedOffsets)) && (a(t.blockedZones, n) || g.contains(t.blockedOffsets, o)) || !(g.isEmpty(t.allowedZones) && g.isEmpty(t.allowedOffsets) || a(t.allowedZones, n) || g.contains(t.allowedOffsets, o));
                                }
                                function a(e, r) {
                                    var t = r && r.toLowerCase();
                                    return e && r && m()(e, function (e) {
                                        return e.toLowerCase() === t;
                                    });
                                }
                            }(e, n))
                            return null;
                        var o, a, i = n ? n.eid : null, s = Object(v.a)(), u = I.uspDataHandler.getConsentData(), l = r && 'boolean' == typeof r.gdprApplies && r.gdprApplies, p = r && l && r.consentString || '', d = e.partners || e.partner, c = {
                                eid: i,
                                trackers: 'string' == typeof d ? d.split(',') : d,
                                url: s.referer,
                                prebidVersion: '4.36.0',
                                isIframe: g.inIframe()
                            }, f = {
                                data: (o = btoa(JSON.stringify(c)), a = {
                                    '+': '-',
                                    '/': '_',
                                    '=': '.'
                                }, o.replace(/[+/=]/g, function (e) {
                                    return a[e];
                                })),
                                gdpr: l ? 1 : 0,
                                _rand: Math.random()
                            };
                        u && (f.us_privacy = u), l && (f.gdpr_consent = p);
                        var b = {
                            method: 'GET',
                            withCredentials: !0
                        };
                        return {
                            callback: function (o) {
                                var e = {
                                    success: function (e) {
                                        var r = n ? g.deepClone(n) : {};
                                        if (e) {
                                            try {
                                                var t = JSON.parse(e);
                                                t && (!0 !== t.ccpaOptout ? r.eid = t.eid : (r.eid = null, r.ccpaOptout = !0), !0 === t.ibaOptout && (r.ibaOptout = !0));
                                            } catch (e) {
                                                g.logError(e), o();
                                            }
                                            E(r), o(r);
                                        } else
                                            g.logError('parrableId: ID fetch returned an empty result'), o();
                                    },
                                    error: function (e) {
                                        g.logError('parrableId: ID fetch encountered an error', e), o();
                                    }
                                };
                                Object(O.a)('https://h.parrable.com/prebid', e, f, b);
                            },
                            id: n
                        };
                    }
                }
                var l = {
                    name: 'parrableId',
                    gvlid: 928,
                    decode: function (e) {
                        if (e && g.isPlainObject(e))
                            return { parrableId: e };
                    },
                    getId: function (e, r) {
                        return u(e && e.params || {}, r);
                    }
                };
                Object(n.e)('userId', l);
            }
        }, [701]);
        pbjsChunk([174], {
            716: function (e, t, o) {
                e.exports = o(717);
            },
            717: function (e, t, o) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), o.d(t, 'allowedFields', function () {
                    return g;
                }), o.d(t, '_floorDataForAuction', function () {
                    return R;
                }), o.d(t, 'fieldMatchingFunctions', function () {
                    return U;
                }), t.getFirstMatchingFloor = E, t.getBiddersCpmAdjustment = w, t.calculateAdjustedFloor = P, t.getFloor = M, t.getFloorsDataForAuction = B, t.getFloorDataFromAdUnits = V, t.updateAdUnitsForAuction = x, t.pickRandomModel = q, t.createFloorsDataForAuction = z, t.continueAuction = W, t.isFloorsDataValid = H, t.parseFloorData = J, t.requestBidsHook = L, t.handleFetchResponse = K, t.generateAndHandleFetch = X, t.handleSetFloorsConfig = Z, t.addBidResponseHook = $;
                var O = o(17), r = o(3), j = o(0), n = o(4), a = o(9), i = o.n(a), c = o(5), F = o.n(c), s = o(11), A = o(34), u = o(10), S = o.n(u), d = o(20);
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
        }, [716]);
        pbjsChunk([170], {
            724: function (e, o, t) {
                e.exports = t(725);
            },
            725: function (e, o, t) {
                'use strict';
                Object.defineProperty(o, '__esModule', { value: !0 }), t.d(o, 'pubCommonIdSubmodule', function () {
                    return I;
                });
                var m = t(0), r = t(11), a = t(7), i = t(4);
                function p(e) {
                    return (p = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var v = 'PublisherCommonId', n = 'cookie', d = 'html5', c = '00000000000000000000000000', l = 'https://id.sharedid.org/id', s = '_sharedid', u = 'Thu, 01 Jan 1970 00:00:01 GMT', g = Object(a.b)(887, 'pubCommonId');
                function f(e, o) {
                    try {
                        var t, r;
                        o && (t = e.storage.name + s, r = new Date(Date.now() + 86400000 * g.expires).toUTCString(), e.storage.type === n ? g.cookiesAreEnabled() && g.setCookie(t, o, r, 'LAX', I.domainOverride()) : e.storage.type === d && g.hasLocalStorage() && (g.setDataInLocalStorage(''.concat(t, '_exp'), r), g.setDataInLocalStorage(t, o)));
                    } catch (e) {
                        m.logError(e);
                    }
                }
                function h(e) {
                    try {
                        var o = e.storage.name + s;
                        if (e.storage.type === n) {
                            if (g.cookiesAreEnabled())
                                return g.getCookie(o);
                        } else if (e.storage.type === d && g.hasLocalStorage()) {
                            var t = g.getDataFromLocalStorage(''.concat(o, '_exp'));
                            if (!t)
                                return g.getDataFromLocalStorage(o);
                            if (0 < new Date(t).getTime() - Date.now())
                                return g.getDataFromLocalStorage(o);
                        }
                    } catch (e) {
                        m.logError(e);
                    }
                }
                function b(t, r, a) {
                    return {
                        success: function (e) {
                            if (e)
                                try {
                                    var o = JSON.parse(e);
                                    m.logInfo('PubCommonId: Generated SharedId: ' + o.sharedId), o.sharedId && (o.sharedId !== c ? f(a, o.sharedId) : function (e) {
                                        try {
                                            var o = e.storage.name + s;
                                            e.storage.type === n ? g.cookiesAreEnabled() && g.setCookie(o, '', u) : e.storage.type === d && (g.removeDataFromLocalStorage(''.concat(o, '_exp')), g.removeDataFromLocalStorage(o));
                                        } catch (e) {
                                            m.logError(e);
                                        }
                                    }(a)), r(t);
                                } catch (e) {
                                    m.logError(e);
                                }
                        },
                        error: function () {
                            m.logInfo('PubCommonId: failed to get sharedid');
                        }
                    };
                }
                function y(t, r, a, n) {
                    return function (e) {
                        var o;
                        'function' == typeof r && r(), Object(i.a)((o = n) && 'boolean' == typeof o.gdprApplies && o.gdprApplies ? ''.concat(l, '?gdpr=1&gdpr_consent=').concat(o.consentString) : l, b(t, e, a), void 0, {
                            method: 'GET',
                            withCredentials: !0
                        });
                    };
                }
                var I = {
                    name: 'pubCommonId',
                    gvlid: 887,
                    makeCallback: function (e, o) {
                        var t = 1 < arguments.length && void 0 !== o ? o : '';
                        if (e) {
                            var r = m.parseUrl(e);
                            r.search.id = encodeURIComponent('pubcid:' + t);
                            var a = m.buildUrl(r);
                            return function () {
                                m.triggerPixel(a);
                            };
                        }
                    },
                    decode: function (e, o) {
                        var t, r = { pubcid: e }, a = o.params, n = (a = void 0 === a ? {} : a).enableSharedId;
                        return !(void 0 !== n && n) || (t = h(o)) && (r.sharedid = { id: t }), r;
                    },
                    getId: function (e, o, t) {
                        var r = 0 < arguments.length && void 0 !== e ? e : {}, a = 1 < arguments.length ? o : void 0, n = 2 < arguments.length ? t : void 0, i = r.params, d = (i = void 0 === i ? {} : i).create, c = void 0 === d || d, l = i.pixelUrl, s = i.enableSharedId, u = void 0 !== s && s, g = n;
                        if (!g) {
                            try {
                                'object' === p(window[v]) && (g = window[v].getId());
                            } catch (e) {
                            }
                            g = g || (c && m.hasDeviceAccess() ? m.generateUUID() : void 0);
                        }
                        var f = this.makeCallback(l, g);
                        return {
                            id: g,
                            callback: u ? y(g, f, r, a) : f
                        };
                    },
                    extendId: function (e, o, t) {
                        var r = 0 < arguments.length && void 0 !== e ? e : {}, a = 2 < arguments.length ? t : void 0, n = r.params, i = (n = void 0 === n ? {} : n).extend, d = void 0 !== i && i, c = n.pixelUrl, l = n.enableSharedId, s = void 0 !== l && l;
                        if (d) {
                            try {
                                if ('object' === p(window[v]))
                                    return void (s && f(r, h(r)));
                            } catch (e) {
                            }
                            return c ? { callback: this.makeCallback(c, a) } : (s && f(r, h(r)), { id: a });
                        }
                    },
                    domainOverride: function () {
                        for (var e, o, t = document.domain.split('.'), r = '_gd'.concat(Date.now()), a = 0; a < t.length; a++) {
                            var n = t.slice(a).join('.');
                            if (g.setCookie(r, '1', void 0, void 0, n), o = g.getCookie(r), g.setCookie(r, '', 'Thu, 01 Jan 1970 00:00:01 GMT', void 0, n), '1' !== o)
                                return e;
                            e = n;
                        }
                    }
                };
                Object(r.e)('userId', I);
            }
        }, [724]);
        pbjsChunk([167], {
            732: function (e, r, a) {
                e.exports = a(733);
            },
            733: function (e, r, a) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), a.d(r, 'spec', function () {
                    return E;
                });
                var T = a(0), t = a(1), P = a(2), D = a(3), i = a(12);
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
                function s(r, e) {
                    var a, t = Object.keys(r);
                    return Object.getOwnPropertySymbols && (a = Object.getOwnPropertySymbols(r), e && (a = a.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(r, e).enumerable;
                    })), t.push.apply(t, a)), t;
                }
                function m(i) {
                    for (var e = 1; e < arguments.length; e++) {
                        var n = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? s(Object(n), !0).forEach(function (e) {
                            var r, a, t;
                            r = i, t = n[a = e], a in r ? Object.defineProperty(r, a, {
                                value: t,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : r[a] = t;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(n)) : s(Object(n)).forEach(function (e) {
                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(n, e));
                        });
                    }
                    return i;
                }
                function Y(e) {
                    return (Y = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var o = 'pubmatic', A = 'PubMatic: ', x = 'USD', N = void 0, n = 'https://pubmatic.bbvms.com/r/'.concat('$RENDERER', '.js'), k = {
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
                        maxbitrate: d.NUMBER
                    }, g = {
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
                    }, h = {
                        ICON: 1,
                        LOGO: 2,
                        IMAGE: 3
                    }, b = [
                        {
                            id: g.SPONSOREDBY.ID,
                            required: !0,
                            data: { type: 1 }
                        },
                        {
                            id: g.TITLE.ID,
                            required: !0
                        },
                        {
                            id: g.IMAGE.ID,
                            required: !0
                        }
                    ], c = {
                        1: 'PMP',
                        5: 'PREF',
                        6: 'PMPG'
                    }, l = {
                        bootstrapPlayer: function (e) {
                            var r = { code: e.adUnitCode };
                            if (e.vastXml ? r.vastXml = e.vastXml : e.vastUrl && (r.vastUrl = e.vastUrl), e.vastXml || e.vastUrl) {
                                for (var a, t = l.getRendererId('pubmatic', e.rendererCode), i = document.getElementById(e.adUnitCode), n = 0; n < window.bluebillywig.renderers.length; n++)
                                    if (window.bluebillywig.renderers[n]._id === t) {
                                        a = window.bluebillywig.renderers[n];
                                        break;
                                    }
                                a ? a.bootstrap(r, i) : T.logWarn(''.concat(A, ': Couldn\'t find a renderer with ').concat(t));
                            } else
                                T.logWarn(''.concat(A, ': No vastXml or vastUrl on bid, bailing...'));
                        },
                        newRenderer: function (e, r) {
                            var a = n.replace('$RENDERER', e), t = i.a.install({
                                    url: a,
                                    loaded: !1,
                                    adUnitCode: r
                                });
                            try {
                                t.setRender(l.outstreamRender);
                            } catch (e) {
                                T.logWarn(''.concat(A, ': Error tying to setRender on renderer'), e);
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
                    }, C = 0, f = !1, u = {}, y = {};
                function U(e, r) {
                    if (!T.isStr(r))
                        return r && T.logWarn(A + 'Ignoring param key: ' + e + ', expects string-value, found ' + Y(r)), N;
                    switch (e) {
                    case 'pmzoneid':
                        return r.split(',').slice(0, 50).map(function (e) {
                            return e.trim();
                        }).join();
                    case 'kadfloor':
                    case 'lat':
                    case 'lon':
                        return parseFloat(r) || N;
                    case 'yob':
                        return parseInt(r) || N;
                    default:
                        return r;
                    }
                }
                function z(e) {
                    var r;
                    e.params.adUnit = '', e.params.adUnitIndex = '0', e.params.width = 0, e.params.height = 0, e.params.adSlot = (r = e.params.adSlot, T.isStr(r) ? r.replace(/^\s+/g, '').replace(/\s+$/g, '') : (r && T.logWarn(o + ': adSlot must be a string. Ignoring adSlot'), ''));
                    var a = (t = e.params.adSlot).split(':'), t = a[0];
                    if (2 == a.length && (e.params.adUnitIndex = a[1]), a = t.split('@'), e.params.adUnit = a[0], 1 < a.length) {
                        if (2 != (a = a[1].split('x')).length)
                            return void T.logWarn(A + 'AdSlot Error: adSlot not in required format');
                        e.params.width = parseInt(a[0], 10), e.params.height = parseInt(a[1], 10);
                    } else if (e.hasOwnProperty('mediaTypes') && e.mediaTypes.hasOwnProperty(P.b) && e.mediaTypes.banner.hasOwnProperty('sizes')) {
                        for (var i = 0, n = []; i < e.mediaTypes.banner.sizes.length; i++)
                            2 === e.mediaTypes.banner.sizes[i].length && n.push(e.mediaTypes.banner.sizes[i]);
                        e.mediaTypes.banner.sizes = n, 1 <= e.mediaTypes.banner.sizes.length && (e.params.width = e.mediaTypes.banner.sizes[0][0], e.params.height = e.mediaTypes.banner.sizes[0][1], e.mediaTypes.banner.sizes = e.mediaTypes.banner.sizes.splice(1, e.mediaTypes.banner.sizes.length - 1));
                    }
                }
                function v(e) {
                    var r, a = e.params.video;
                    if (a !== N) {
                        for (var t in (r = {}, p))
                            a.hasOwnProperty(t) && (r[t] = function (e, r, a) {
                                var t, i = 'Ignoring param key: ' + e + ', expects ' + a + ', found ' + Y(r);
                                switch (a) {
                                case d.BOOLEAN:
                                    t = T.isBoolean;
                                    break;
                                case d.NUMBER:
                                    t = T.isNumber;
                                    break;
                                case d.STRING:
                                    t = T.isStr;
                                    break;
                                case d.ARRAY:
                                    t = T.isArray;
                                }
                                return t(r) ? r : (T.logWarn(A + i), N);
                            }(t, a[t], p[t]));
                        T.isArray(e.mediaTypes.video.playerSize[0]) ? (r.w = parseInt(e.mediaTypes.video.playerSize[0][0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[0][1], 10)) : T.isNumber(e.mediaTypes.video.playerSize[0]) && (r.w = parseInt(e.mediaTypes.video.playerSize[0], 10), r.h = parseInt(e.mediaTypes.video.playerSize[1], 10)), e.params.video.hasOwnProperty('skippable') && (r.ext = { video_skippable: e.params.video.skippable ? 1 : 0 });
                    } else
                        r = N, T.logWarn(A + 'Error: Video config params missing for adunit: ' + e.params.adUnit + ' with mediaType set as video. Ignoring video impression in the adunit.');
                    return r;
                }
                function K(e) {
                    var r, a, t, i, n, s, o, d = {}, p = {}, c = e.hasOwnProperty('sizes') ? e.sizes : [], l = '', u = [], d = {
                            id: e.bidId,
                            tagid: e.params.adUnit || void 0,
                            bidfloor: U('kadfloor', e.params.kadfloor),
                            secure: 1,
                            ext: { pmZoneId: U('pmzoneid', e.params.pmzoneid) },
                            bidfloorcur: e.params.currency ? U('currency', e.params.currency) : x
                        };
                    if (t = d, (i = e).params.deals && (T.isArray(i.params.deals) ? i.params.deals.forEach(function (e) {
                            T.isStr(e) && 3 < e.length ? (t.pmp || (t.pmp = {
                                private_auction: 0,
                                deals: []
                            }), t.pmp.deals.push({ id: e })) : T.logWarn(A + 'Error: deal-id present in array bid.params.deals should be a strings with more than 3 charaters length, deal-id ignored: ' + e);
                        }) : T.logWarn(A + 'Error: bid.params.deals should be an array of strings.')), e.hasOwnProperty('mediaTypes'))
                        for (l in e.mediaTypes)
                            switch (l) {
                            case P.b:
                                (r = function (e) {
                                    var r, a = e.mediaTypes.banner.sizes, t = [];
                                    if (a !== N && T.isArray(a)) {
                                        if (r = {}, e.params.width || e.params.height)
                                            r.w = e.params.width, r.h = e.params.height;
                                        else {
                                            if (0 === a.length)
                                                return r = N, T.logWarn(A + 'Error: mediaTypes.banner.size missing for adunit: ' + e.params.adUnit + '. Ignoring the banner impression in the adunit.'), r;
                                            r.w = parseInt(a[0][0], 10), r.h = parseInt(a[0][1], 10), a = a.splice(1, a.length - 1);
                                        }
                                        0 < a.length && (t = [], a.forEach(function (e) {
                                            1 < e.length && t.push({
                                                w: e[0],
                                                h: e[1]
                                            });
                                        }), 0 < t.length && (r.format = t)), r.pos = 0, r.topframe = T.inIframe() ? 0 : 1;
                                    } else
                                        T.logWarn(A + 'Error: mediaTypes.banner.size missing for adunit: ' + e.params.adUnit + '. Ignoring the banner impression in the adunit.'), r = N;
                                    return r;
                                }(e)) !== N && (d.banner = r);
                                break;
                            case P.c:
                                p.request = JSON.stringify(function (e) {
                                    var r, a, t, i = { assets: [] };
                                    for (var n in e) {
                                        if (e.hasOwnProperty(n)) {
                                            var s = {};
                                            if (!(i.assets && 0 < i.assets.length && i.assets.hasOwnProperty(n)))
                                                switch (n) {
                                                case g.TITLE.KEY:
                                                    e[n].len || e[n].length ? s = {
                                                        id: g.TITLE.ID,
                                                        required: e[n].required ? 1 : 0,
                                                        title: {
                                                            len: e[n].len || e[n].length,
                                                            ext: e[n].ext
                                                        }
                                                    } : T.logWarn(A + 'Error: Title Length is required for native ad: ' + JSON.stringify(e));
                                                    break;
                                                case g.IMAGE.KEY:
                                                    e[n].sizes && 0 < e[n].sizes.length ? s = {
                                                        id: g.IMAGE.ID,
                                                        required: e[n].required ? 1 : 0,
                                                        img: {
                                                            type: h.IMAGE,
                                                            w: e[n].w || e[n].width || (e[n].sizes ? e[n].sizes[0] : N),
                                                            h: e[n].h || e[n].height || (e[n].sizes ? e[n].sizes[1] : N),
                                                            wmin: e[n].wmin || e[n].minimumWidth || (e[n].minsizes ? e[n].minsizes[0] : N),
                                                            hmin: e[n].hmin || e[n].minimumHeight || (e[n].minsizes ? e[n].minsizes[1] : N),
                                                            mimes: e[n].mimes,
                                                            ext: e[n].ext
                                                        }
                                                    } : T.logWarn(A + 'Error: Image sizes is required for native ad: ' + JSON.stringify(e));
                                                    break;
                                                case g.ICON.KEY:
                                                    e[n].sizes && 0 < e[n].sizes.length ? s = {
                                                        id: g.ICON.ID,
                                                        required: e[n].required ? 1 : 0,
                                                        img: {
                                                            type: h.ICON,
                                                            w: e[n].w || e[n].width || (e[n].sizes ? e[n].sizes[0] : N),
                                                            h: e[n].h || e[n].height || (e[n].sizes ? e[n].sizes[1] : N)
                                                        }
                                                    } : T.logWarn(A + 'Error: Icon sizes is required for native ad: ' + JSON.stringify(e));
                                                    break;
                                                case g.VIDEO.KEY:
                                                    s = {
                                                        id: g.VIDEO.ID,
                                                        required: e[n].required ? 1 : 0,
                                                        video: {
                                                            minduration: e[n].minduration,
                                                            maxduration: e[n].maxduration,
                                                            protocols: e[n].protocols,
                                                            mimes: e[n].mimes,
                                                            ext: e[n].ext
                                                        }
                                                    };
                                                    break;
                                                case g.EXT.KEY:
                                                    s = {
                                                        id: g.EXT.ID,
                                                        required: e[n].required ? 1 : 0
                                                    };
                                                    break;
                                                case g.LOGO.KEY:
                                                    s = {
                                                        id: g.LOGO.ID,
                                                        required: e[n].required ? 1 : 0,
                                                        img: {
                                                            type: h.LOGO,
                                                            w: e[n].w || e[n].width || (e[n].sizes ? e[n].sizes[0] : N),
                                                            h: e[n].h || e[n].height || (e[n].sizes ? e[n].sizes[1] : N)
                                                        }
                                                    };
                                                    break;
                                                case g.SPONSOREDBY.KEY:
                                                case g.BODY.KEY:
                                                case g.RATING.KEY:
                                                case g.LIKES.KEY:
                                                case g.DOWNLOADS.KEY:
                                                case g.PRICE.KEY:
                                                case g.SALEPRICE.KEY:
                                                case g.PHONE.KEY:
                                                case g.ADDRESS.KEY:
                                                case g.DESC2.KEY:
                                                case g.DISPLAYURL.KEY:
                                                case g.CTA.KEY:
                                                    r = y[n], a = e, t = void 0, t = r.KEY, s = {
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
                                        s && s.id && (i.assets[i.assets.length] = s);
                                    }
                                    var o = b.length, d = 0;
                                    return b.forEach(function (e) {
                                        for (var r = i.assets.length, a = 0; a < r; a++)
                                            if (e.id == i.assets[a].id) {
                                                d++;
                                                break;
                                            }
                                    }), f = o != d, i;
                                }(e.nativeParams)), f ? T.logWarn(A + 'Error: Error in Native adunit ' + e.params.adUnit + '. Ignoring the adunit. Refer to http://prebid.org/dev-docs/show-native-ads.html for more details.') : d.native = p;
                                break;
                            case P.d:
                                (a = v(e)) !== N && (d.video = a);
                            }
                    else
                        r = {
                            pos: 0,
                            w: e.params.width,
                            h: e.params.height,
                            topframe: T.inIframe() ? 0 : 1
                        }, T.isArray(c) && 1 < c.length && ((c = c.splice(1, c.length - 1)).forEach(function (e) {
                            u.push({
                                w: e[0],
                                h: e[1]
                            });
                        }), r.format = u), d.banner = r;
                    return n = d, s = e, o = m({}, T.deepAccess(s, 'ortb2Imp.ext.data')), Object.keys(o).forEach(function (e) {
                        'pbadslot' === e ? 'string' == typeof o[e] && o[e] && T.deepSetValue(n, 'ext.data.pbadslot', o[e]) : 'adserver' === e ? [
                            'name',
                            'adslot'
                        ].forEach(function (e) {
                            var r = T.deepAccess(o, 'adserver.'.concat(e));
                            'string' == typeof r && r && (T.deepSetValue(n, 'ext.data.adserver.'.concat(e.toLowerCase()), r), 'adslot' === e && T.deepSetValue(n, 'ext.dfp_ad_unit_code', r));
                        }) : T.deepSetValue(n, 'ext.data.'.concat(e), o[e]);
                    }), function (t, i) {
                        var n = -1;
                        'function' != typeof i.getFloor || D.b.getConfig('pubmatic.disableFloors') || [
                            P.b,
                            P.d,
                            P.c
                        ].forEach(function (e) {
                            var r, a;
                            t.hasOwnProperty(e) && ('object' !== Y(r = i.getFloor({
                                currency: t.bidfloorcur,
                                mediaType: e,
                                size: '*'
                            })) || r.currency !== t.bidfloorcur || isNaN(parseInt(r.floor)) || (a = parseFloat(r.floor), n = -1 == n ? a : Math.min(a, n)));
                        });
                        t.bidfloor && (n = Math.max(n, t.bidfloor));
                        t.bidfloor = !isNaN(n) && 0 < n ? n : N;
                    }(d, e), d.hasOwnProperty(P.b) || d.hasOwnProperty(P.c) || d.hasOwnProperty(P.d) ? d : N;
                }
                T._each(g, function (e) {
                    u[e.ID] = e.KEY;
                }), T._each(g, function (e) {
                    y[e.KEY] = e;
                });
                var E = {
                    code: o,
                    gvlid: 76,
                    supportedMediaTypes: [
                        P.b,
                        P.d,
                        P.c
                    ],
                    isBidRequestValid: function (e) {
                        if (e && e.params) {
                            if (!T.isStr(e.params.publisherId))
                                return T.logWarn(A + 'Error: publisherId is mandatory and cannot be numeric (wrap it in quotes in your config). Call to OpenBid will not be sent for ad unit: ' + JSON.stringify(e)), !1;
                            if (e.params.hasOwnProperty('video')) {
                                if (!e.params.video.hasOwnProperty('mimes') || !T.isArray(e.params.video.mimes) || 0 === e.params.video.mimes.length)
                                    return T.logWarn(A + 'Error: For video ads, mimes is mandatory and must specify atlease 1 mime value. Call to OpenBid will not be sent for ad unit:' + JSON.stringify(e)), !1;
                                if (!e.hasOwnProperty('mediaTypes') || !e.mediaTypes.hasOwnProperty(P.d))
                                    return T.logError(''.concat(A, ': mediaTypes or mediaTypes.video is not specified. Rejecting bid: '), e), !1;
                                if (!e.mediaTypes[P.d].hasOwnProperty('context'))
                                    return T.logError(''.concat(A, ': no context specified in bid. Rejecting bid: '), e), !1;
                                if ('outstream' === e.mediaTypes[P.d].context && !T.isStr(e.params.outstreamAU) && !e.hasOwnProperty('renderer') && !e.mediaTypes[P.d].hasOwnProperty('renderer'))
                                    return T.logError(''.concat(A, ': for "outstream" bids either outstreamAU parameter must be provided or ad unit supplied renderer is required. Rejecting bid: '), e), !1;
                            }
                            return !0;
                        }
                        return !1;
                    },
                    buildRequests: function (e, r) {
                        var a;
                        r && r.refererInfo && (a = r.refererInfo);
                        var t, i, n, s, o, d, p, c, l, u, m, g, h, b, f, y, v = {
                                pageURL: (t = a) && t.referer ? t.referer : window.location.href,
                                refURL: window.document.referrer
                            }, E = (i = v, {
                                id: '' + new Date().getTime(),
                                at: 1,
                                cur: [x],
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
                                (n = T.deepClone(e)).params.adSlot = n.params.adSlot || '', z(n), n.params.hasOwnProperty('video') || n.hasOwnProperty('mediaTypes') && n.mediaTypes.hasOwnProperty(P.c) || 0 !== n.params.width || 0 !== n.params.height ? (v.pubId = v.pubId || n.params.publisherId, (v = function (e, r) {
                                    var a, t, i;
                                    for (a in (r.kadpageurl || (r.kadpageurl = r.pageURL), k))
                                        k.hasOwnProperty(a) && (t = e[a]) && ('object' === Y(i = k[a]) && (t = i.f(t, r)), T.isStr(t) ? r[a] = t : T.logWarn(A + 'Ignoring param : ' + a + ' with value : ' + k[a] + ', expects string-value, found ' + Y(t)));
                                    return r;
                                }(n.params, v)).transactionId = n.transactionId, '' === I ? I = n.params.currency || N : n.params.hasOwnProperty('currency') && I !== n.params.currency && T.logWarn(A + 'Currency specifier ignored. Only one currency permitted.'), n.params.currency = I, n.params.hasOwnProperty('dctr') && T.isStr(n.params.dctr) && w.push(n.params.dctr), n.params.hasOwnProperty('bcat') && T.isArray(n.params.bcat) && (O = O.concat(n.params.bcat)), (r = K(n)) && E.imp.push(r)) : T.logWarn(A + 'Skipping the non-standard adslot: ', n.params.adSlot, JSON.stringify(n));
                            }), 0 != E.imp.length) {
                            E.site.publisher.id = v.pubId.trim(), C = v.pubId.trim(), E.ext.wrapper = {}, E.ext.wrapper.profile = parseInt(v.profId) || N, E.ext.wrapper.version = parseInt(v.verId) || N, E.ext.wrapper.wiid = v.wiid || r.auctionId, E.ext.wrapper.wv = 'prebid_prebid_4.36.0', E.ext.wrapper.transactionId = v.transactionId, E.ext.wrapper.wp = 'pbjs', E.user.gender = v.gender ? v.gender.trim() : N, E.user.geo = {}, E.user.geo.lat = U('lat', v.lat), E.user.geo.lon = U('lon', v.lon), E.user.yob = U('yob', v.yob), E.device.geo = E.user.geo, E.site.page = v.kadpageurl.trim() || E.site.page.trim(), E.site.domain = (s = E.site.page, (o = document.createElement('a')).href = s, o.hostname), 'object' === Y(D.b.getConfig('content')) && (E.site.content = D.b.getConfig('content')), 'object' === Y(D.b.getConfig('device')) && (E.device = R(E.device, D.b.getConfig('device'))), T.deepSetValue(E, 'source.tid', v.transactionId), -1 !== window.location.href.indexOf('pubmaticTest=true') && (E.test = 1), e[0].schain && T.deepSetValue(E, 'source.ext.schain', e[0].schain), r && r.gdprConsent && (T.deepSetValue(E, 'user.ext.consent', r.gdprConsent.consentString), T.deepSetValue(E, 'regs.ext.gdpr', r.gdprConsent.gdprApplies ? 1 : 0)), r && r.uspConsent && T.deepSetValue(E, 'regs.ext.us_privacy', r.uspConsent), !0 === D.b.getConfig('coppa') && T.deepSetValue(E, 'regs.coppa', 1), d = E, c = e, m = '', 0 < (p = w).length && (c[0].params.hasOwnProperty('dctr') ? (m = c[0].params.dctr, T.isStr(m) && 0 < m.length ? (u = m.split('|'), m = '', u.forEach(function (e) {
                                m += 0 < e.length ? e.trim() + '|' : '';
                            }), l = m.length, '|' === m.substring(l, l - 1) && (m = m.substring(0, l - 1)), d.site.ext = { key_val: m.trim() }) : T.logWarn(A + 'Ignoring param : dctr with value : ' + m + ', expects string-value, found empty or non-string value'), 1 < p.length && T.logWarn(A + 'dctr value found in more than 1 adunits. Value from 1st adunit will be picked. Ignoring values from subsequent adunits')) : T.logWarn(A + 'dctr value not found in 1st adunit, ignoring values from subsequent adunits')), g = E, h = e, b = T.deepAccess(h, '0.userIdAsEids'), T.isArray(b) && 0 < b.length && T.deepSetValue(g, 'user.eids', b), f = E, 0 < (y = (y = O).filter(function (e) {
                                return 'string' == typeof e || (T.logWarn(A + 'bcat: Each category should be a string, ignoring category: ' + e), !1);
                            }).map(function (e) {
                                return e.trim();
                            }).filter(function (e, r, a) {
                                return 3 < e.length ? a.indexOf(e) === r : void T.logWarn(A + 'bcat: Each category should have a value of a length of more than 3 characters, ignoring category: ' + e);
                            })).length && (T.logWarn(A + 'bcat: Selected: ', y), f.bcat = y);
                            var S = D.b.getConfig('ortb2') || {};
                            return S.site && T.mergeDeep(E, { site: S.site }), S.user && T.mergeDeep(E, { user: S.user }), 'object' === Y(D.b.getConfig('app')) && (E.app = D.b.getConfig('app'), E.app.publisher = E.site.publisher, E.app.ext = E.site.ext || N, 'object' !== Y(E.app.content) && (E.app.content = E.site.content || N), delete E.site), {
                                method: 'POST',
                                url: 'https://hbopenbid.pubmatic.com/translator?source=prebid-client',
                                data: JSON.stringify(E),
                                bidderRequest: r
                            };
                        }
                    },
                    interpretResponse: function (e, t) {
                        var i = [], n = x, s = JSON.parse(t.data), o = s.site && s.site.ref ? s.site.ref : '';
                        try {
                            e.body && e.body.seatbid && T.isArray(e.body.seatbid) && (n = e.body.cur || n, e.body.seatbid.forEach(function (e) {
                                e.bid && T.isArray(e.bid) && e.bid.forEach(function (r) {
                                    var a = {
                                        requestId: r.impid,
                                        cpm: (parseFloat(r.price) || 0).toFixed(2),
                                        width: r.w,
                                        height: r.h,
                                        creativeId: r.crid || r.id,
                                        dealId: r.dealid,
                                        currency: n,
                                        netRevenue: !0,
                                        ttl: 300,
                                        referrer: o,
                                        ad: r.adm,
                                        pm_seat: e.seat || null,
                                        pm_dspid: r.ext && r.ext.dspid ? r.ext.dspid : null,
                                        partnerImpId: r.id || ''
                                    };
                                    s.imp && 0 < s.imp.length && s.imp.forEach(function (e) {
                                        if (r.impid === e.id)
                                            switch (!function (r, e) {
                                                    var a, t = new RegExp(/VAST\s+version/);
                                                    if (0 <= r.indexOf('span class="PubAPIAd"'))
                                                        e.mediaType = P.b;
                                                    else if (t.test(r))
                                                        e.mediaType = P.d;
                                                    else
                                                        try {
                                                            (a = JSON.parse(r.replace(/\\/g, ''))) && a.native && (e.mediaType = P.c);
                                                        } catch (e) {
                                                            T.logWarn(A + 'Error: Cannot parse native reponse for ad response: ' + r);
                                                        }
                                                }(r.adm, a), a.mediaType) {
                                            case P.b:
                                                break;
                                            case P.d:
                                                a.width = r.hasOwnProperty('w') ? r.w : e.video.w, a.height = r.hasOwnProperty('h') ? r.h : e.video.h, a.vastXml = r.adm, function (e, r) {
                                                    var a, t, i;
                                                    if (r.bidderRequest && r.bidderRequest.bids) {
                                                        for (var n = 0; n < r.bidderRequest.bids.length; n++)
                                                            r.bidderRequest.bids[n].bidId === e.requestId && (a = r.bidderRequest.bids[n].params, t = r.bidderRequest.bids[n].mediaTypes[P.d].context, i = r.bidderRequest.bids[n].adUnitCode);
                                                        t && 'outstream' === t && a && a.outstreamAU && i && (e.rendererCode = a.outstreamAU, e.renderer = l.newRenderer(e.rendererCode, i));
                                                    }
                                                }(a, t);
                                                break;
                                            case P.c:
                                                !function (e, r) {
                                                    if (r.native = {}, e.hasOwnProperty('adm')) {
                                                        var a = '';
                                                        try {
                                                            a = JSON.parse(e.adm.replace(/\\/g, ''));
                                                        } catch (e) {
                                                            return T.logWarn(A + 'Error: Cannot parse native reponse for ad response: ' + r.adm);
                                                        }
                                                        if (a && a.native && a.native.assets && 0 < a.native.assets.length) {
                                                            r.mediaType = P.c;
                                                            for (var t = 0, i = a.native.assets.length; t < i; t++)
                                                                switch (a.native.assets[t].id) {
                                                                case g.TITLE.ID:
                                                                    r.native.title = a.native.assets[t].title && a.native.assets[t].title.text;
                                                                    break;
                                                                case g.IMAGE.ID:
                                                                    r.native.image = {
                                                                        url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                                        height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                                        width: a.native.assets[t].img && a.native.assets[t].img.w
                                                                    };
                                                                    break;
                                                                case g.ICON.ID:
                                                                    r.native.icon = {
                                                                        url: a.native.assets[t].img && a.native.assets[t].img.url,
                                                                        height: a.native.assets[t].img && a.native.assets[t].img.h,
                                                                        width: a.native.assets[t].img && a.native.assets[t].img.w
                                                                    };
                                                                    break;
                                                                case g.SPONSOREDBY.ID:
                                                                case g.BODY.ID:
                                                                case g.LIKES.ID:
                                                                case g.DOWNLOADS.ID:
                                                                case g.PRICE:
                                                                case g.SALEPRICE.ID:
                                                                case g.PHONE.ID:
                                                                case g.ADDRESS.ID:
                                                                case g.DESC2.ID:
                                                                case g.CTA.ID:
                                                                case g.RATING.ID:
                                                                case g.DISPLAYURL.ID:
                                                                    r.native[u[a.native.assets[t].id]] = a.native.assets[t].data && a.native.assets[t].data.value;
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
                            T.logError(e);
                        }
                        return i;
                    },
                    getUserSyncs: function (e, r, a, t) {
                        var i = '' + C;
                        return a && (i += '&gdpr=' + (a.gdprApplies ? 1 : 0), i += '&gdpr_consent=' + encodeURIComponent(a.consentString || '')), t && (i += '&us_privacy=' + encodeURIComponent(t)), !0 === D.b.getConfig('coppa') && (i += '&coppa=1'), e.iframeEnabled ? [{
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
                Object(t.registerBidder)(E);
            }
        }, [732]);
        pbjsChunk([133], {
            824: function (e, t, r) {
                e.exports = r(825);
            },
            825: function (e, t, r) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), r.d(t, 'sharethroughInternal', function () {
                    return c;
                }), r.d(t, 'sharethroughAdapterSpec', function () {
                    return p;
                });
                var n = r(1), d = r(0), i = r(3);
                function a() {
                    return (a = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var r = arguments[t];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var s = 'sharethrough', o = [
                        1,
                        1
                    ], c = {
                        b64EncodeUnicode: u,
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
                    }, p = {
                        code: s,
                        isBidRequestValid: function (e) {
                            return !!e.params.pkey && e.bidder === s;
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
                                    hbVersion: '4.36.0',
                                    strVersion: '3.3.2'
                                };
                                a(t, function (e) {
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
                                var r = c.getProtocol().indexOf('http') < 0;
                                return t.secure = r || -1 < c.getProtocol().indexOf('https'), n && n.gdprConsent && n.gdprConsent.consentString && (t.consent_string = n.gdprConsent.consentString), n && n.gdprConsent && (t.consent_required = !!n.gdprConsent.gdprApplies), n && n.uspConsent && (t.us_privacy = n.uspConsent), !0 === i.b.getConfig('coppa') && (t.coppa = !0), e.schain && (t.schain = JSON.stringify(e.schain)), e.bidfloor && (t.bidfloor = parseFloat(e.bidfloor)), e.params.badv && (t.badv = e.params.badv), e.params.bcat && (t.bcat = e.params.bcat), {
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
                            var n = r.creatives[0], i = o;
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
                                        var r = 'str_response_'.concat(t.data.bidId), n = '\n    <div data-str-native-key="'.concat(t.data.placement_key, '" data-stx-response-name="').concat(r, '">\n    </div>\n    <script>var ').concat(r, ' = "').concat(u(JSON.stringify(e)), '"</script>\n  ');
                                        t.strData.skipIframeBusting ? n += '<script src="https://native.sharethrough.com/assets/sfp.js"></script>' : n += '\n      <script>\n        ('.concat(c.isLockedInFrame.toString(), ')()\n      </script>\n      <script>\n        (').concat(c.handleIframe.toString(), ')()\n      </script>');
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
                function u(e) {
                    return btoa(encodeURIComponent(e).replace(/%([0-9A-F]{2})/g, function (e, t) {
                        return String.fromCharCode('0x' + t);
                    }));
                }
                Object(n.registerBidder)(p);
            }
        }, [824]);
        pbjsChunk([95], {
            920: function (e, n, t) {
                e.exports = t(921);
            },
            921: function (e, n, t) {
                'use strict';
                Object.defineProperty(n, '__esModule', { value: !0 }), t.d(n, 'uid2IdSubmodule', function () {
                    return v;
                });
                var r = t(0), o = t(11), i = t(7), u = 'uid2', a = '__uid2_advertising_token';
                var d, c = Object(i.b)(887, u), l = (d = 'UID2: ', function () {
                        for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
                            n[t] = arguments[t];
                        r.logInfo.apply(r, [d + ' '].concat(n));
                    });
                var v = {
                    name: u,
                    gvlid: 887,
                    decode: function (e) {
                        return e ? function (e) {
                            var n = {};
                            if (e) {
                                var t = { id: e };
                                return n.uid2 = t, l('Decoded value ' + JSON.stringify(n)), n;
                            }
                        }(e) : void 0;
                    },
                    getId: function () {
                        l('Creating UID 2.0');
                        var e = (c.cookiesAreEnabled() ? c.getCookie(a) : null) || (c.localStorageIsEnabled() ? c.getDataFromLocalStorage(a) : null);
                        return l('The advertising token: ' + e), { id: e };
                    }
                };
                Object(o.e)('userId', v);
            }
        }, [920]);
        pbjsChunk([91], {
            928: function (r, e, t) {
                r.exports = t(929);
            },
            929: function (r, e, t) {
                'use strict';
                Object.defineProperty(e, '__esModule', { value: !0 }), t.d(e, 'unifiedIdSubmodule', function () {
                    return u;
                });
                var o = t(0), i = t(4), n = t(11), d = 'unifiedId', u = {
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
        }, [928]);
        pbjsChunk([6], {
            19: function (e, t, n) {
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
                        deepintentId: {
                            source: 'deepintent.com',
                            atype: 3
                        },
                        admixerId: {
                            source: 'admixer.net',
                            atype: 3
                        }
                    };
            },
            932: function (e, t, n) {
                e.exports = n(933);
            },
            933: function (e, t, n) {
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
                var r = n(10), o = n.n(r), i = n(3), a = n(9), c = n.n(a), l = n(0), u = n(17), d = n(8), s = n(5), f = n.n(s), g = n(11), p = n(19), m = n(7);
                function b(e, t) {
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
                    }, A = '_pbjs_id_optout', w = Object(m.a)('userid'), C = [], U = !1, _ = [], V = [], T = [];
                function P(e, t) {
                    var n = e.config.storage, r = 'function' == typeof e.submodule.domainOverride ? e.submodule.domainOverride() : null;
                    try {
                        var o = l.isPlainObject(t) ? JSON.stringify(t) : t, i = new Date(Date.now() + 86400000 * n.expires).toUTCString();
                        n.type === k ? (w.setCookie(n.name, o, i, 'Lax', r), 'number' == typeof n.refreshInSeconds && w.setCookie(''.concat(n.name, '_last'), new Date().toUTCString(), i, 'Lax', r)) : n.type === E && (w.setDataInLocalStorage(''.concat(n.name, '_exp'), i), w.setDataInLocalStorage(n.name, encodeURIComponent(o)), 'number' == typeof n.refreshInSeconds && w.setDataInLocalStorage(''.concat(n.name, '_last'), new Date().toUTCString()));
                    } catch (e) {
                        l.logError(e);
                    }
                }
                function L(e, t) {
                    var n, r, o = 1 < arguments.length && void 0 !== t ? t : void 0, i = o ? ''.concat(e.name, '_').concat(o) : e.name;
                    try {
                        e.type === k ? n = w.getCookie(i) : e.type === E && ('' === (r = w.getDataFromLocalStorage(''.concat(e.name, '_exp'))) ? n = w.getDataFromLocalStorage(i) : r && 0 < new Date(r).getTime() - Date.now() && (n = decodeURIComponent(w.getDataFromLocalStorage(i)))), 'string' == typeof n && '{' === n.trim().charAt(0) && (n = JSON.parse(n));
                    } catch (e) {
                        l.logError(e);
                    }
                    return n;
                }
                function N(e) {
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
                        w.setCookie(x.name, N(e), t, 'Lax');
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
                            var o, i = [], a = b(r);
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
                    e.config.storage ? (o = L(e.config.storage), c = !1, 'number' == typeof e.config.storage.refreshInSeconds && (c = (a = new Date(L(e.config.storage, 'last'))) && Date.now() - a.getTime() > 1000 * e.config.storage.refreshInSeconds), !o || c || r || (d = t, null != (s = n) && s !== N(d)) ? i = e.submodule.getId(e.config, t, o) : 'function' == typeof e.submodule.extendId && (i = e.submodule.extendId(e.config, t, o)), l.isPlainObject(i) && (i.id && (P(e, i.id), o = i.id), 'function' == typeof i.callback && (e.callback = i.callback)), o && (e.idObj = e.submodule.decode(o, e.config))) : e.config.value ? e.idObj = e.config.value : (u = e.submodule.getId(e.config, t, void 0), l.isPlainObject(u) && ('function' == typeof u.callback && (e.callback = u.callback), u.id && (e.idObj = e.submodule.decode(u.id, e.config))));
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
                            return e.name && e.name.toLowerCase() === t.name.toLowerCase();
                        });
                        return e && t.name !== e.name && (e.name = t.name), t.findRootDomain = R, e ? {
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
        }, [932]);
        pbjs.processQueue();
    }())
}