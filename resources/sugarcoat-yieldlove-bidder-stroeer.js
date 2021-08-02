{
    const $___mock_f8a288802595a372 = {};
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
    })($___mock_f8a288802595a372);
    (function () {
        window.YLHH = window.YLHH || {};
        window.YLHH.startTime = Date.now();
        window.yieldlove_site_settings = {
            'global': {
                'name': 'autozeitung.de',
                'activeUnits': [
                    'banner',
                    'interstitial',
                    'rectangle',
                    'rectangle2',
                    'sky',
                    'sky2',
                    'topmobile',
                    'topmobile2',
                    'topmobile3'
                ],
                'timeout': 1000,
                'logLevel': 'CRITICAL',
                'targetDevice': 'server',
                'breakpoint': 768,
                'unitCodeMappings': null,
                'a9PubID': '3505',
                'key_prefix': 'hb',
                'timeTracking': 0,
                'stroeerBiasEnabled': 0,
                'isStroeer2ndPriceAuction': 1,
                'confiant': 1,
                'confiantId': '2DPge-WVhZFIVEVo0laRH9eF5JI',
                'exceptionTracking': 0,
                'stroeerCoreBidAdjustment': 0,
                'stroeerMetatagAuctionEvents': 1,
                'stroeerOptimizingFunc': 1,
                'version': 'v1.43.1',
                'cmp': 1,
                'cmpType': 0,
                'cmpLoadType': 0,
                'trackingEndpoint': 'api',
                'yieldlabBidAdjustment': -0.19,
                'prebid_modules': 'criteoIdSystem,id5IdSystem',
                'cmpDirectRender': false,
                'stroeerDirectRender': false,
                'directRenderSaBidsOnly': false,
                'live_in_v2': false,
                'directRendering': {
                    'is_enabled': false,
                    'yieldlove_no_adx': false,
                    'safeframe': false,
                    'sandbox': false,
                    'bidder': [],
                    'bidders': {}
                },
                'yieldloveAdvertiserIds': [690515575],
                'loadScripts': [],
                'refreshApiInUse': true,
                'publisher_id': 6667344,
                'country': 'ca',
                'device': 'web'
            },
            'placement': [
                {
                    'placementName': 'autozeitung.de_d_160x600_1',
                    'placementId': '9644',
                    'bids': [
                        {
                            'params': { 'placementId': 12344825 },
                            'bidder': 'appnexus'
                        },
                        {
                            'bidder': 'adform',
                            'params': { 'mid': '716522' }
                        },
                        {
                            'bidder': 'indexExchange',
                            'params': {
                                'siteID': '237742',
                                'id': '2'
                            }
                        },
                        {
                            'params': {
                                'jstag_url': 'https://yieldlove-d.openx.net/w/1.0/jstag',
                                'unit': 539438312
                            },
                            'bidder': 'openx'
                        },
                        {
                            'params': {
                                'placementId': 'autozeitung.de_d_160x600_1',
                                'accountId': 'yieldlove'
                            },
                            'bidder': 'orbidder'
                        },
                        {
                            'params': {
                                'pmzoneid': 'autozeitung.de',
                                'publisherId': '73726',
                                'adSlot': 'autozeitung.de_d_160x600_1_hb'
                            },
                            'bidder': 'pubmatic'
                        },
                        {
                            'params': {
                                'zoneId': '763134',
                                'siteId': '157212',
                                'accountId': 16728
                            },
                            'bidder': 'disabled_rb'
                        },
                        {
                            'bidder': 'stroeerCore',
                            'params': {
                                'ssat': 1,
                                'sid': '187155'
                            }
                        }
                    ],
                    'sizes': [[
                            160,
                            600
                        ]],
                    'device': 'web',
                    'code': 'sky2',
                    'breakpointMin': 0,
                    'breakpointMax': 0,
                    'aliases': [],
                    'countries': 'fallback',
                    'randomBias': -1,
                    'a9Targeted': true,
                    'refreshInterval': 15,
                    'refreshMinScreenTime': 15,
                    'refreshMinVisibility': 80,
                    'refreshMaxYoffset': 0,
                    'refreshPlacementId': 0,
                    'refreshScreenIdleTime': 0,
                    'refreshMaxImpressions': 7,
                    'platform': '',
                    'bias': 1,
                    'minPrice': 0,
                    'cutoffPrice': 0,
                    'dfpOrderId': 2177033031,
                    'stickyZIndex': 2000000
                },
                {
                    'placementName': 'autozeitung.de_d_300x250_1',
                    'placementId': '9641',
                    'bids': [
                        {
                            'bidder': 'adform',
                            'params': { 'mid': '716521' }
                        },
                        {
                            'bidder': 'appnexus',
                            'params': { 'placementId': 12344821 }
                        },
                        {
                            'params': { 'placementId': 14401538 },
                            'bidder': 'districtm'
                        },
                        {
                            'bidder': 'districtmDMX',
                            'params': {
                                'dmxid': 267963,
                                'memberid': 101161
                            }
                        },
                        {
                            'params': {
                                'siteID': '237279',
                                'id': '1'
                            },
                            'bidder': 'indexExchange'
                        },
                        {
                            'bidder': 'openx',
                            'params': {
                                'jstag_url': 'https://yieldlove-d.openx.net/w/1.0/jstag',
                                'unit': 539438307
                            }
                        },
                        {
                            'params': {
                                'placementId': 'autozeitung.de_d_300x250_1',
                                'accountId': 'yieldlove'
                            },
                            'bidder': 'orbidder'
                        },
                        {
                            'bidder': 'pubmatic',
                            'params': {
                                'pmzoneid': 'autozeitung.de',
                                'publisherId': '73726',
                                'adSlot': 'autozeitung.de_d_300x250_1_hb'
                            }
                        },
                        {
                            'bidder': 'disabled_rb',
                            'params': {
                                'position': 'btf',
                                'zoneId': '763128',
                                'siteId': '157212',
                                'accountId': 16728
                            }
                        },
                        {
                            'params': {
                                'ssat': 1,
                                'sid': '187156'
                            },
                            'bidder': 'stroeerCore'
                        }
                    ],
                    'sizes': [[
                            300,
                            250
                        ]],
                    'device': 'web',
                    'code': 'rectangle2',
                    'breakpointMin': 0,
                    'breakpointMax': 0,
                    'aliases': [],
                    'countries': 'fallback',
                    'randomBias': -1,
                    'a9Targeted': true,
                    'refreshInterval': 15,
                    'refreshMinScreenTime': 15,
                    'refreshMinVisibility': 83,
                    'refreshMaxYoffset': 99,
                    'refreshPlacementId': 0,
                    'refreshScreenIdleTime': 9,
                    'refreshMaxImpressions': 7,
                    'platform': '',
                    'bias': 1,
                    'minPrice': 0,
                    'cutoffPrice': 0.01,
                    'dfpOrderId': 2176875058,
                    'stickyZIndex': 2000000
                },
                {
                    'placementName': 'autozeitung.de_d_300x600_1',
                    'placementId': '10457',
                    'bids': [
                        {
                            'bidder': 'adform',
                            'params': { 'mid': '716519' }
                        },
                        {
                            'bidder': 'appnexus',
                            'params': { 'placementId': 12535817 }
                        },
                        {
                            'params': {
                                'networkId': '7141',
                                'publisherSubId': 'autozeitung.de_d_300x600_1'
                            },
                            'bidder': 'criteo'
                        },
                        {
                            'params': { 'placementId': 14401543 },
                            'bidder': 'districtm'
                        },
                        {
                            'bidder': 'districtmDMX',
                            'params': {
                                'dmxid': 267966,
                                'memberid': 101161
                            }
                        },
                        {
                            'params': {
                                'placementId': 'autozeitung.de_d_300x600_1',
                                'accountId': 'yieldlove'
                            },
                            'bidder': 'orbidder'
                        },
                        {
                            'bidder': 'pubmatic',
                            'params': {
                                'pmzoneid': 'autozeitung.de',
                                'publisherId': '73726',
                                'adSlot': 'autozeitung.de_d_300x600_1_hb'
                            }
                        },
                        {
                            'bidder': 'disabled_rb',
                            'params': {
                                'zoneId': '791646',
                                'siteId': '157212',
                                'accountId': 16728
                            }
                        },
                        {
                            'params': {
                                'pageId': 1045668,
                                'domain': 'https://prg.smartadserver.com',
                                'siteId': 285311,
                                'formatId': 53462
                            },
                            'bidder': 'smartadserver'
                        },
                        {
                            'params': {
                                'ssat': 1,
                                'sid': '187155'
                            },
                            'bidder': 'stroeerCore'
                        },
                        {
                            'params': {
                                'supplyId': '8633311',
                                'adslotId': '9777646',
                                'adSize': '300x600'
                            },
                            'bidder': 'yieldlab'
                        }
                    ],
                    'sizes': [
                        [
                            300,
                            600
                        ],
                        [
                            160,
                            600
                        ],
                        [
                            120,
                            600
                        ],
                        [
                            301,
                            601
                        ]
                    ],
                    'device': 'web',
                    'code': 'sky',
                    'breakpointMin': 0,
                    'breakpointMax': 0,
                    'aliases': [],
                    'countries': 'fallback',
                    'randomBias': -1,
                    'a9Targeted': false,
                    'refreshInterval': 15,
                    'refreshMinScreenTime': 15,
                    'refreshMinVisibility': 83,
                    'refreshMaxYoffset': 99,
                    'refreshPlacementId': 0,
                    'refreshScreenIdleTime': 9,
                    'refreshMaxImpressions': 7,
                    'platform': '',
                    'bias': 1,
                    'minPrice': 0,
                    'cutoffPrice': 0.01,
                    'dfpOrderId': 2199816917,
                    'stickyZIndex': 2000000
                },
                {
                    'placementName': 'autozeitung.de_d_300x600_2',
                    'placementId': '16076',
                    'bids': [
                        {
                            'bidder': 'adform',
                            'params': { 'mid': '716515' }
                        },
                        {
                            'params': { 'placementId': 14318761 },
                            'bidder': 'appnexus'
                        },
                        {
                            'params': { 'placementId': 14401533 },
                            'bidder': 'districtm'
                        },
                        {
                            'bidder': 'districtmDMX',
                            'params': {
                                'dmxid': 267962,
                                'memberid': 101161
                            }
                        },
                        {
                            'params': {
                                'jstag_url': 'https://yieldlove-d.openx.net/w/1.0/jstag',
                                'unit': 540429000
                            },
                            'bidder': 'openx'
                        },
                        {
                            'params': {
                                'placementId': 'autozeitung.de_d_300x600_2',
                                'accountId': 'yieldlove'
                            },
                            'bidder': 'orbidder'
                        },
                        {
                            'params': {
                                'pmzoneid': 'autozeitung.de',
                                'publisherId': '73726',
                                'adSlot': 'autozeitung.de_d_300x600_2_hb'
                            },
                            'bidder': 'pubmatic'
                        },
                        {
                            'params': {
                                'position': 'atf',
                                'accountId': 16728,
                                'siteId': '157212',
                                'zoneId': '1100456'
                            },
                            'bidder': 'disabled_rb'
                        },
                        {
                            'bidder': 'stroeerCore',
                            'params': {
                                'ssat': 1,
                                'sid': '4fbba91a-33c4-4313-826d-f7ec29cdd196'
                            }
                        },
                        {
                            'params': {
                                'supplyId': '8633311',
                                'adslotId': '9777648',
                                'adSize': '300x600'
                            },
                            'bidder': 'yieldlab'
                        }
                    ],
                    'sizes': [
                        [
                            300,
                            600
                        ],
                        [
                            300,
                            250
                        ]
                    ],
                    'device': 'web',
                    'code': 'rectangle',
                    'breakpointMin': 0,
                    'breakpointMax': 0,
                    'aliases': [],
                    'countries': 'fallback',
                    'randomBias': -1,
                    'a9Targeted': true,
                    'refreshInterval': 15,
                    'refreshMinScreenTime': 15,
                    'refreshMinVisibility': 83,
                    'refreshMaxYoffset': 99,
                    'refreshPlacementId': 0,
                    'refreshScreenIdleTime': 9,
                    'refreshMaxImpressions': 7,
                    'platform': '',
                    'bias': 1,
                    'minPrice': 0,
                    'cutoffPrice': 0.01,
                    'dfpOrderId': 2420773083,
                    'stickyZIndex': 2000000
                },
                {
                    'placementName': 'autozeitung.de_d_970x250_1',
                    'placementId': '12963',
                    'bids': [
                        {
                            'bidder': 'adform',
                            'params': { 'mid': '716288' }
                        },
                        {
                            'params': { 'placementId': 13379886 },
                            'bidder': 'appnexus'
                        },
                        {
                            'params': { 'placementId': 14401539 },
                            'bidder': 'districtm'
                        },
                        {
                            'bidder': 'districtmDMX',
                            'params': {
                                'dmxid': 267964,
                                'memberid': 101161
                            }
                        },
                        {
                            'params': {
                                'jstag_url': 'https://yieldlove-d.openx.net/w/1.0/jstag',
                                'unit': 540065245
                            },
                            'bidder': 'openx'
                        },
                        {
                            'params': {
                                'placementId': 'autozeitung.de_d_970x250_1',
                                'accountId': 'yieldlove'
                            },
                            'bidder': 'orbidder'
                        },
                        {
                            'params': {
                                'pmzoneid': 'autozeitung.de',
                                'publisherId': '73726',
                                'adSlot': 'autozeitung.de_d_970x250_1_hb'
                            },
                            'bidder': 'pubmatic'
                        },
                        {
                            'params': {
                                'position': 'atf',
                                'accountId': 16728,
                                'siteId': '157212',
                                'zoneId': '947780'
                            },
                            'bidder': 'disabled_rb'
                        },
                        {
                            'bidder': 'stroeerCore',
                            'params': {
                                'ssat': 1,
                                'sid': '193785'
                            }
                        }
                    ],
                    'sizes': [
                        [
                            770,
                            250
                        ],
                        [
                            800,
                            250
                        ],
                        [
                            970,
                            250
                        ],
                        [
                            728,
                            90
                        ],
                        [
                            728,
                            180
                        ]
                    ],
                    'device': 'web',
                    'code': 'banner',
                    'breakpointMin': 0,
                    'breakpointMax': 0,
                    'aliases': [],
                    'countries': 'fallback',
                    'randomBias': -1,
                    'a9Targeted': true,
                    'refreshInterval': 15,
                    'refreshMinScreenTime': 15,
                    'refreshMinVisibility': 83,
                    'refreshMaxYoffset': 99,
                    'refreshPlacementId': 0,
                    'refreshScreenIdleTime': 9,
                    'refreshMaxImpressions': 7,
                    'platform': '',
                    'bias': 1,
                    'minPrice': 0,
                    'cutoffPrice': 0.01,
                    'dfpOrderId': 2311982559,
                    'stickyZIndex': 2000000
                }
            ]
        };
        !function (r) {
            var n = {};
            function o(t) {
                if (n[t])
                    return n[t].exports;
                var e = n[t] = {
                    i: t,
                    l: !1,
                    exports: {}
                };
                return r[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports;
            }
            o.m = r, o.c = n, o.d = function (t, e, r) {
                o.o(t, e) || Object.defineProperty(t, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: r
                });
            }, o.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default;
                } : function () {
                    return t;
                };
                return o.d(e, 'a', e), e;
            }, o.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }, o.p = '', o(o.s = 39);
        }({
            39: function (t, e) {
                function l(t) {
                    return (l = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t;
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                    })(t);
                }
                'function' != typeof Object.assign && Object.defineProperty(Object, 'assign', {
                    value: function (t) {
                        'use strict';
                        if (null == t)
                            throw new TypeError('Cannot convert undefined or null to object');
                        for (var e = Object(t), r = 1; r < arguments.length; r++) {
                            var n = arguments[r];
                            if (null != n)
                                for (var o in n)
                                    Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
                        }
                        return e;
                    },
                    writable: !0,
                    configurable: !0
                }), Object.keys || (Object.keys = function () {
                    'use strict';
                    var o = Object.prototype.hasOwnProperty, c = !{ toString: null }.propertyIsEnumerable('toString'), i = [
                            'toString',
                            'toLocaleString',
                            'valueOf',
                            'hasOwnProperty',
                            'isPrototypeOf',
                            'propertyIsEnumerable',
                            'constructor'
                        ], u = i.length;
                    return function (t) {
                        var e, r, n = [];
                        if ('function' != typeof t && ('object' !== l(t) || null === t))
                            throw new TypeError('Object.keys called on non-object');
                        for (e in t)
                            o.call(t, e) && n.push(e);
                        if (c)
                            for (r = 0; r < u; r++)
                                o.call(t, i[r]) && n.push(i[r]);
                        return n;
                    };
                }()), [
                    Element.prototype,
                    Document.prototype,
                    DocumentFragment.prototype
                ].forEach(function (t) {
                    t.hasOwnProperty('prepend') || Object.defineProperty(t, 'prepend', {
                        configurable: !0,
                        enumerable: !0,
                        writable: !0,
                        value: function () {
                            var t = Array.prototype.slice.call(arguments), r = document.createDocumentFragment();
                            t.forEach(function (t) {
                                var e = t instanceof Node;
                                r.appendChild(e ? t : document.createTextNode(String(t)));
                            }), this.insertBefore(r, this.firstChild);
                        }
                    });
                }), String.prototype.endsWith || (String.prototype.endsWith = function (t, e) {
                    return (void 0 === e || e > this.length) && (e = this.length), this.substring(e - t.length, e) === t;
                });
            }
        });
        !function (t) {
            var r = {};
            function o(e) {
                if (r[e])
                    return r[e].exports;
                var i = r[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return t[e].call(i.exports, i, i.exports, o), i.l = !0, i.exports;
            }
            o.m = t, o.c = r, o.d = function (e, i, t) {
                o.o(e, i) || Object.defineProperty(e, i, {
                    configurable: !1,
                    enumerable: !0,
                    get: t
                });
            }, o.n = function (e) {
                var i = e && e.__esModule ? function () {
                    return e.default;
                } : function () {
                    return e;
                };
                return o.d(i, 'a', i), i;
            }, o.o = function (e, i) {
                return Object.prototype.hasOwnProperty.call(e, i);
            }, o.p = '', o(o.s = 48);
        }({
            48: function (e, i, t) {
                'use strict';
                Object.defineProperty(i, '__esModule', { value: !0 });
                var a = t(49);
                function r() {
                    return (r = Object.assign || function (e) {
                        for (var i = 1; i < arguments.length; i++) {
                            var t = arguments[i];
                            for (var r in t)
                                Object.prototype.hasOwnProperty.call(t, r) && (e[r] = t[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var l = null, p = {};
                window.YLHH = r({
                    optimizePriceBucket: {
                        isActivated: !1,
                        get bids() {
                            return p;
                        },
                        set bids(e) {
                            p = e;
                        },
                        init: function (e) {
                            const $___old_c5bc29aa94c79c4d = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                            try {
                                if ($___old_c5bc29aa94c79c4d)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___mock_f8a288802595a372.localStorage));
                                return function () {
                                    if ('1' != window.localStorage.getItem('sdgYieldtest'))
                                        return;
                                    window.yieldlove_ab = window.yieldlove_ab || {}, window.yieldlove_ab.po = 'optimized_price', (l = e).pbjs.que.push(function () {
                                        l.pbjs;
                                        l.log('Yieldlove-OptimizedPrice', 'DEBUG', 'Listening yieldlove.validatingBid'), window.addEventListener('yieldlove.validatingBid', function (e) {
                                            !function (e, i) {
                                                if ('stroeerCore' !== e.bidderCode)
                                                    return;
                                                p[i] = e.adId;
                                            }(e.detail.bid, e.detail.adUnitCode);
                                        });
                                    }), l.applyBias = function (e, i, t) {
                                        var r = l.pbjs.getBidResponsesForAdId(t[l.getKeyPrefixes()[0] + '_adid']), o = l.pbjs.getBidResponsesForAdId(p[i.code]), n = !1;
                                        (r && o && o.hasOwnProperty('cp') && o.cp && o.hasOwnProperty('rop') && o.rop && o.hasOwnProperty('ropFactor') && o.ropFactor || !r && o && o.hasOwnProperty('rofp') && o.rofp) && (n = !0);
                                        if (!o || !n)
                                            return l.log('Yieldlove-OptimizedPrice', 'DEBUG', 'Skipping to optimize price bucket since no Stroeer bid. adId:'.concat(r ? r.adId : null, ', adUnitCode:').concat(i.code, ', stoeerBidId:').concat(o ? o.adId : null, ', cp: ').concat(o ? o.cp : null, ', rop: ').concat(o ? o.rop : null, ', ropFactor: ').concat(o ? o.ropFactor : null, ', rofp: ').concat(o ? o.rofp : null, '}, isValid:').concat(n, '.')), e;
                                        var c = 0;
                                        'true' === t.yieldlove_hb_sucbid && (c = 'stroeerCore' === r.bidderCode ? r.yieldlove.auction.second : r.cpm);
                                        var d = Object(a.a)(o.cpm, c, e, t, {
                                            competitivePrice: o.cp,
                                            revenueOptimizedPrice: o.rop,
                                            revenueOptimizedPriceFactor: o.ropFactor,
                                            revenueOptimizedFloorPrice: o.rofp
                                        });
                                        return l.log('Yieldlove-OptimizedPrice', 'DEBUG', 'Calculated optimized price bucket:'.concat(d), e, i, t, r, o), d;
                                    }, this.isActivated = !0, l.log('Yieldlove-OptimizedPrice', 'DEBUG', 'Optimzied price functionality is activated. The applyBias function in the bidder is replaced.');
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_c5bc29aa94c79c4d)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___old_c5bc29aa94c79c4d));
                            }
                        }
                    }
                }, window.YLHH);
            },
            49: function (e, i, t) {
                'use strict';
                i.a = function (e, i, t, r, o) {
                    if (!t && !o.revenueOptimizedFloorPrice)
                        return t;
                    if (r.yieldlove_no_adx = 'false', !t)
                        return o.revenueOptimizedFloorPrice;
                    return i <= e && t >= o.competitivePrice ? (r.yieldlove_no_adx = 'true', t) : function (e, i) {
                        for (var t = i.revenueOptimizedPriceFactor, r = i.revenueOptimizedPrice, o = Object.keys(r).map(function (e) {
                                    return {
                                        min: parseFloat(e),
                                        max: r[e]
                                    };
                                }).sort(function (e, i) {
                                    return e.min - i.min;
                                }), n = 0; n < o.length; n++) {
                            var c = o[n], d = c.min, a = n + 1 < o.length ? o[n + 1].min : c.max;
                            if (d <= e && e <= a)
                                return c.max;
                        }
                        return 1000 * YLHH.utils.roundFloat(e, 1000) * (1000 * t) / 1000000;
                    }(t, o);
                };
            }
        });
        !function (i) {
            var e = {};
            function o(n) {
                if (e[n])
                    return e[n].exports;
                var t = e[n] = {
                    i: n,
                    l: !1,
                    exports: {}
                };
                return i[n].call(t.exports, t, t.exports, o), t.l = !0, t.exports;
            }
            o.m = i, o.c = e, o.d = function (n, t, i) {
                o.o(n, t) || Object.defineProperty(n, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                });
            }, o.n = function (n) {
                var t = n && n.__esModule ? function () {
                    return n.default;
                } : function () {
                    return n;
                };
                return o.d(t, 'a', t), t;
            }, o.o = function (n, t) {
                return Object.prototype.hasOwnProperty.call(n, t);
            }, o.p = '', o(o.s = 54);
        }({
            54: function (n, t) {
                function i(n) {
                    var t = n.confiantId;
                    window.yieldlove_cmd.push(function () {
                        return YLHH.bidder.log('Confiant', 'DEBUG', 'Confiant was initiated with property id: "'.concat(t, '".'));
                    });
                    var i = window.confiant || (window.confiant = {}), e = {
                            config_ver: '202003191232',
                            integration_type: 'gpt_and_prebid_v3l',
                            prebid_integration_version: i.prebid_integration_version || '202003181643',
                            gpt_integration_version: i.gpt_integration_version || '202003181643',
                            c_integration_version: i.c_integration_version || '202003181643',
                            cdt_version: '202003171135',
                            exec_test_ver: null
                        };
                    var o = {
                            propertyId: t,
                            adServer: 'https://protected-by.clarium.io',
                            confiantCdn: 'https://clarium.global.ssl.fastly.net',
                            confiant_cdn_v3: 'confiant-integrations.global.ssl.fastly.net',
                            mapping: 'W3siaSI6MiwidCI6Int7b319Ont7d319eHt7aH19IiwicCI6MCwiRCI6MSwiciI6W119LHsiaSI6NiwidCI6Int7Y299fTp7e3d9fXh7e2h9fSIsInAiOjUwLCJEIjowLCJyIjpbeyJ0IjoiZXgiLCJzIjpudWxsLCJ2IjoiY28ifV19XQ==',
                            activation: '',
                            prebidExcludeBidders: i.prebidExcludeBidders || [],
                            sandbox: i.sandbox || '0',
                            prebidNameSpace: i.prebidNameSpace || 'pbjs',
                            callback: i.callback || function () {
                                console.log('Confiant: ad blocked', arguments);
                            },
                            isMaster: !0,
                            devMode: i.devMode,
                            enable_integrations: i.enable_integrations || 'prebid:true,gpt:false',
                            isAR: i.isAR || !1,
                            isCDT: !0,
                            isPerf: !1,
                            isIntegrationEnabled: s
                        }, r = i.settings ? o.propertyId : null, d = r ? i[r] || (i[r] = {}) : i;
                    function a(n) {
                        var t = document.createElement('script');
                        r && (t.id = r), t.async = !0, t.src = n;
                        var i = document.getElementsByTagName('script')[0];
                        i.parentNode.insertBefore(t, i);
                    }
                    d.settings = o, d.settings.gpt_and_prebid_v3l = e;
                    var c = 'test_account' === d.settings.propertyId;
                    function s(n) {
                        var t = d.settings.enable_integrations, i = Array.isArray(t) ? n : n + ':true';
                        return c || t && -1 < t.indexOf(i);
                    }
                    s('gpt') && a('//' + [
                        d.settings.confiant_cdn_v3,
                        'gpt_v3l',
                        e.exec_test_ver ? e.exec_test_ver : e.gpt_integration_version,
                        'wrap.js'
                    ].join('/')), s('prebid') && a('//' + [
                        d.settings.confiant_cdn_v3,
                        'prebid_v3l',
                        e.exec_test_ver ? e.exec_test_ver : e.prebid_integration_version,
                        'wrap.js'
                    ].join('/'));
                    0 !== o.devMode && 2 !== o.devMode || a('//' + [
                        d.settings.confiant_cdn_v3,
                        'c',
                        e.c_integration_version,
                        'wrap.js'
                    ].join('/')), s('gpt') || s('prebid') || console.warn('Confiant', 'Current configuration is set not to monitor, please contact support@confiant.com');
                }
                window.yieldlove_cmd = window.yieldlove_cmd || [], function () {
                    if (!function () {
                            try {
                                return window.top.addEventListener || window.top.attachEvent ? !0 : !1;
                            } catch (n) {
                                return !1;
                            }
                        }())
                        return window.yieldlove_cmd.push(function () {
                            return YLHH.bidder.log('Confiant', 'DEBUG', 'No top level access. Set confiant to inactive');
                        });
                    window.confiant = window.confiant || {}, window.confiant.prebidNameSpace = 'pbjsYLHH', window.confiant.prebidExcludeBidders = [], window.confiant.callback = function (n, t, i, e, o, r) {
                        if (i && !window.SDG)
                            for (var d = void 0 !== r && void 0 !== r.dfp ? r.dfp.A : null, a = googletag.pubads().getSlots(), c = 0; c < a.length; c++)
                                if (d === a[c].getAdUnitPath())
                                    try {
                                        var s = a[c], l = window.YLHH.bidder.getAdUnitByGPTSlot(s);
                                        window.YLHH.bidder.startAuction([l.code], window.yieldlove_bbh);
                                    } catch (n) {
                                        googletag.pubads().refresh([slot]);
                                    }
                    }, window.pbjsYLHH = window.pbjsYLHH || {}, window.pbjsYLHH.que = window.pbjsYLHH.que || [], window.pbjsYLHH.que.push(function () {
                        window.confiant.renderAd = window.pbjsYLHH.renderAd;
                    });
                    var n = function () {
                        var n = window.yieldlove_site_settings;
                        return n ? 'global' in n && 'confiantId' in n.global ? n.global.confiantId : 'confiant' in n && 'id' in n.confiant ? n.confiant.id : null : null;
                    }();
                    n ? i({ confiantId: n || 'V1AdEkGj8ikBdWctk6hWbb2FEvQ' }) : window.yieldlove_cmd.push(function () {
                        return i({ confiantId: YLHH.bidder.settings.confiantId || 'V1AdEkGj8ikBdWctk6hWbb2FEvQ' });
                    });
                }();
            }
        });
        !function (n) {
            var r = {};
            function i(e) {
                if (r[e])
                    return r[e].exports;
                var t = r[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports;
            }
            i.m = n, i.c = r, i.d = function (e, t, n) {
                i.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                });
            }, i.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default;
                } : function () {
                    return e;
                };
                return i.d(t, 'a', t), t;
            }, i.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, i.p = '', i(i.s = 40);
        }({
            2: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'PrebidStatus', function () {
                    return r;
                }), n.d(t, 'AuctionStatus', function () {
                    return i;
                }), n.d(t, 'BidderCode', function () {
                    return o;
                }), n.d(t, 'gdprEnforcement', function () {
                    return d;
                }), n.d(t, 'userIdConfiguration', function () {
                    return a;
                }), n.d(t, 'HbRenderState', function () {
                    return s;
                });
                var r = {
                        LOADING: 'loading',
                        ACTIVE: 'active',
                        INACTIVE: 'inactive',
                        ERROR: 'error'
                    }, i = {
                        INIT: 'init',
                        AUCTIONING: 'auctioning',
                        REQUESTED_BIDS: 'requested_bids',
                        FINISHED: 'finished',
                        ABORTED: 'aborted'
                    }, o = {
                        GOOGLE: 'google',
                        IO: 'IO',
                        IO_ROADBLOCK: 'IO_ROADBLOCK',
                        NO_META_KEY: 'NO_META_KEY',
                        A9: 'A9',
                        RENDERED: 'RENDERED',
                        ERROR: 'ERROR',
                        UNFILLED: 'UNFILLED'
                    }, d = {
                        rules: [
                            {
                                purpose: 'storage',
                                enforcePurpose: !0,
                                enforceVendor: !0
                            },
                            {
                                purpose: 'basicAds',
                                enforcePurpose: !1,
                                enforceVendor: !1
                            }
                        ]
                    }, a = {
                        autIdSystem: {
                            name: 'aut',
                            params: { url: '_getUserIdConfiguration<placeholder_url>' }
                        },
                        criteoIdSystem: {
                            name: 'criteo',
                            params: {}
                        },
                        id5IdSystem: {
                            name: 'id5Id',
                            params: { partner: 433 },
                            storage: {
                                type: 'cookie',
                                name: 'id5id',
                                expires: 90,
                                refreshInSeconds: 604800
                            }
                        },
                        pubCommonIdSystem: {
                            name: 'pubCommonId',
                            params: { enableSharedId: !0 }
                        },
                        sharedIdSystem: {
                            name: 'sharedId',
                            params: {},
                            storage: {
                                type: 'html5',
                                name: 'sharedid',
                                expires: 7
                            }
                        }
                    }, s = {
                        startRendering: 'startRendering',
                        renderEnded: 'renderEnded'
                    };
            },
            40: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), t.onCreativeClick = s;
                var g = n(6), m = n(41), v = n(2);
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
                var r, _ = 'googletag', h = 'direct rendering', I = {
                        stroeer: {
                            id: '4444',
                            companies: { yieldlove: 690515575 }
                        }
                    }, O = null, S = null, C = null, R = 'https://prod-ingestion.tracking.v2.yieldlove-ad-serving.net/v2', u = !0, A = null, c = {}, p = [];
                function i(e, t, n) {
                    var r, i = O.placementConfig.find(function (e) {
                            return e.code === n;
                        });
                    i && ((r = c[e]) && delete r[''.concat(i.placementId, '-').concat(t)], O.log('Yieldlove', 'Info', 'The bidder of '.concat(t, ' responded for the auction of ').concat(e), r));
                }
                window.YLHH = y({
                    Tracker: {
                        init: function (e) {
                            return Object(g.d)(e), Object(m.b)(e), S = (O = e).pbjs, C = O.data, A = YLHH.utils.generateUUID(), O.pbjs.que.push(function () {
                                O.pbjs.onEvent('bidResponse', function (e) {
                                    i(e.auctionId, e.bidder, e.adUnitCode);
                                }), O.pbjs.onEvent('noBid', function (e) {
                                    i(e.auctionId, e.bidder, e.adUnitCode);
                                });
                            }), this;
                        },
                        onBidsRequested: function e(r, t) {
                            try {
                                var n = O.data.auctions[r];
                                if (!n || n.auctionStatus === v.AuctionStatus.INIT || n.auctionStatus === v.AuctionStatus.AUCTIONING)
                                    return d = 'auctionInit', a = function () {
                                        e(r, t);
                                    }, void O.pbjs.onEvent(d, function e() {
                                        a.apply(O.pbjs, arguments), O.pbjs.offEvent(d, e, s);
                                    }, s);
                                l(), O.log('Yieldlove', 'Info', 'Sending a auction payload');
                                var i = O.pbjs.getBidsRequested().reduce(function (e, t) {
                                    if (t.auctionId == r)
                                        for (var n = 0; n < t.bids.length; n++)
                                            e.push({
                                                pb_unit_id: T(O.placementConfig.find(function (e) {
                                                    return e.code === t.bids[n].adUnitCode;
                                                }).placementId).toString(),
                                                bidder: t.bids[n].bidder
                                            });
                                    return e;
                                }, []);
                                t && 0 < t.length && (i = i.concat(t.map(function (t) {
                                    return {
                                        pb_unit_id: T(O.placementConfig.find(function (e) {
                                            return e.code === t.slotID;
                                        }).placementId).toString(),
                                        bidder: 'A9'
                                    };
                                })));
                                var o = O.pbjs.getNoBids();
                                O.log('Yieldlove', 'Info', 'bidder.pbjs.getNoBids():', JSON.parse(JSON.stringify(o))), c[r] = i.reduce(function (e, t) {
                                    var n = O.placementConfig.find(function (e) {
                                        return e.placementId == t.pb_unit_id;
                                    });
                                    if (o[n.code] && o[n.code].bids.find(function (e) {
                                            return e.bidder === t.bidder;
                                        }))
                                        return e;
                                    var r = ''.concat(t.pb_unit_id, '-').concat(t.bidder);
                                    return e[r] = t, e;
                                }, {}), O.log('Yieldlove', 'Info', 'auctionBidsMap for timeout:', JSON.parse(JSON.stringify(c[r]))), Object(m.a)(function (e) {
                                    YLHH.utils.request(R + '/auction', JSON.stringify({
                                        page_id: A,
                                        pb_auction_id: r,
                                        publisher_id: T(C.publisher.id).toNumber(),
                                        auction_started_time: u ? C.auctions[r].startTime - f() : 0,
                                        href: location.href.split(/[?#]/)[0],
                                        bidders: i,
                                        domain: O.domain,
                                        consents: e.forTracking
                                    }));
                                }, r), u = !1;
                            } catch (e) {
                                u = !1, O.log('Yieldlove', 'ERROR', 'An error occurred. Ads delivery is still working...', e);
                            }
                            var d, a, s;
                        },
                        beforeAdServerRequest: function (e) {
                            var l = e.slots;
                            try {
                                if (Object(g.a)({ slots: l }), !l && l.length <= 0)
                                    return;
                                O.log('Yieldlove', 'INFO', 'Sending ad requests for slots of ', l.map(function (e) {
                                    return e.getSlotElementId();
                                }));
                                var t = l.reduce(function (e, t) {
                                    var n = O.getAdUnitByGPTSlot(t);
                                    if (!(n && n.code in O.data.adUnitData))
                                        return e;
                                    var r = O.data.adUnitData[n.code].auctionId;
                                    return r && -1 === p.indexOf(r) && e.add(r), e;
                                }, new Set());
                                O.log('Yieldlove', 'INFO', 'Sending ad requests for auctions of ', t), t.forEach(function (i) {
                                    var r, o, e, n, t, d, a, s, u;
                                    'aborted' !== C.auctions[i].auctionStatus && (r = [], o = C.auctions[i].startTime, e = C.auctions[i].prebidBids || [], n = C.auctions[i].a9Bids || [], e.forEach(function (e) {
                                        var t, n = YLHH.utils.roundFloat(O.pbjs.stroeer.isSecondPriceAuction(e) ? (t = O.pbjs.stroeer.calculateAuctionPrice(e), 0 === O.settings.stroeerCoreBidAdjustment || O.settings.bid_adjustment_factor && (!O.settings.bid_adjustment_factor.stroeerCore || 1 === O.settings.bid_adjustment_factor.stroeerCore) ? 0.8 * t : t) : e.cpm, 100000);
                                        e.yieldlove = e.yieldlove || {}, e.yieldlove.cpmTracking = n, r.push({
                                            adUnitCode: e.adUnitCode,
                                            adId: e.adId,
                                            bidderCode: e.bidderCode,
                                            cpm: n,
                                            timeToRespond: e.auctionId === i ? e.responseTimestamp - o : null
                                        });
                                    }), n && Object.keys(n).forEach(function (e) {
                                        var t = n[e];
                                        r.push({
                                            adUnitCode: e,
                                            adId: t.amzniid,
                                            bidderCode: v.BidderCode.A9,
                                            cpmCode: t.amznbid,
                                            timeToRespond: t.timeToRespond
                                        });
                                    }), t = r.map(function (t) {
                                        return {
                                            pb_unit_id: T(O.pbjs.adUnits.find(function (e) {
                                                return e.code === t.adUnitCode;
                                            }).placementId).toString(),
                                            pb_bid_id: t.adId,
                                            bidder: t.bidderCode,
                                            cpm: t.cpm,
                                            cpm_code: t.cpmCode,
                                            received_time: t.timeToRespond
                                        };
                                    }), d = ''.concat(O.getKeyPrefixes()[0], '_adid'), a = ''.concat(O.getKeyPrefixes()[0], '_bidder'), s = l.reduce(function (e, t) {
                                        var n = O.getAdUnitByGPTSlot(t);
                                        if (!(n && n.code in O.data.adUnitData))
                                            return e;
                                        if (O.data.adUnitData[n.code].auctionId !== i)
                                            return e;
                                        var r = t.getTargetingMap();
                                        return r.yieldlove_meta && e.push({
                                            pb_unit_id: P(r).field('yieldlove_pid').toString(),
                                            bidder: P(r).field(a).toString(),
                                            pb_bid_id: P(r).field(d).toString(),
                                            a9_bid_id: P(r).field('amzniid').toString(),
                                            ad_unit_path: E(t, n.code)
                                        }), e;
                                    }, []), O.data.auctions[i].a9Responded && Object.keys(c[i]).filter(function (e) {
                                        return e.endsWith('-A9');
                                    }).forEach(function (e) {
                                        delete c[i][e];
                                    }), u = {
                                        publisher_id: T(C.publisher.id).toNumber(),
                                        page_id: A,
                                        domain: O.domain,
                                        pb_auction_id: i,
                                        ad_request_time: i ? Object(g.c)()[l[0].getSlotElementId()].requestedTime - o : 0,
                                        bids_received: t,
                                        a9_pub_id: O.settings.a9Enabled && YLHH.A9 ? YLHH.A9.getPubId(O) : null,
                                        ad_requests: s,
                                        bid_timeouts: c[i] ? Object.keys(c[i]).map(function (e) {
                                            return c[i][e];
                                        }) : []
                                    }, Object(m.a)(function (e) {
                                        u.consents = e.forTracking, YLHH.utils.request(R + '/bid', JSON.stringify(u));
                                    }, i), p.push(i));
                                });
                            } catch (e) {
                                O.log('Yieldlove', 'ERROR', 'An error occurred. Ads delivery is still working...', e);
                            }
                        },
                        getTargetingMaps: g.b,
                        onSlotRendered: function (e) {
                            try {
                                if (e.isPassback)
                                    return;
                                var t = e.slot, n = O.getAdUnitByGPTSlot(t);
                                if (!n)
                                    return;
                                var r = n.placementId, i = C.adUnitData[n.code].auctionId, o = i ? C.auctions[i].startTime : 0, d = C.adUnitData[n.code].winner;
                                d && d.rendered ? d = y({}, d, { bidderCode: v.BidderCode.RENDERED }) : d && (d.rendered = !0);
                                var a = e.slot.getSlotElementId(), s = function (n) {
                                        if (void 0 === n)
                                            return {};
                                        if ('string' == typeof n)
                                            try {
                                                n = JSON.parse(n);
                                            } catch (e) {
                                                return 'Error occured when parsing '.concat(n);
                                            }
                                        return O.getAdserverTargetingKeys({ getAllKeys: !0 }).reduce(function (e, t) {
                                            return e[t] = n[t], e;
                                        }, {});
                                    }(Object(g.b)()[a]);
                                O.log('Yieldlove', 'DEBUG', 'On creative rendered for slot: ' + n.placementName, e);
                                var u, l = Object(g.c)()[a] || {}, c = l.renderStartedTime || e.renderStartedTime, p = {
                                        auctionId: i,
                                        unitId: r,
                                        advertiserId: e.advertiserId,
                                        campaignId: e.campaignId,
                                        creativeId: e.creativeId,
                                        lineItemId: e.lineItemId,
                                        adserverRequestTime: i ? l.requestedTime - o : 0,
                                        renderStartedTime: i ? c - o : 0,
                                        renderedTime: i ? Date.now() - o : 0,
                                        stroeer: function (e, n, t) {
                                            var r = {
                                                cpm: null,
                                                cpm2: null,
                                                floor: null,
                                                maxprice: null,
                                                uuid: e,
                                                pricebucket: null,
                                                bid2: null,
                                                auctionPrice: null
                                            };
                                            try {
                                                var i, o, d, a, s = ''.concat(O.getKeyPrefixes()[0], '_pb'), u = ''.concat(O.getKeyPrefixes()[0], '_adid'), l = ''.concat(O.getKeyPrefixes()[0], '_bidder'), c = t[u] && Array.isArray(t[u]) ? t[u][0] : null, p = t[l] && Array.isArray(t[l]) ? t[l][0] : null, f = null;
                                                r.pricebucket = t[s] && Array.isArray(t[s]) ? parseFloat(t[s][0]) : null, 'stroeerCore' === p ? (f = S.getBidResponsesForAdId(c), i = S.stroeer.getGenerateAdOptions(f), r.bid2 = i.secondBid, r.auctionPrice = i.auctionPrice) : (d = t[o = 'yieldlove_hb_cpm'] && Array.isArray(t[o]) ? parseFloat(t[o][0]) : 0, a = O.data.auctions[e] && O.data.auctions[e].prebidBids ? O.data.auctions[e].prebidBids : [], f = a.reduce(function (e, t) {
                                                    return 'stroeerCore' === t.bidder && t.adUnitCode === n && t.cpm < d && (!e || e.cpm < t.cpm) ? t : e;
                                                }, null)), f && (r.cpm = f.cpm, r.cpm2 = f.cpm2, r.floor = f.floor, r.maxprice = f.maxprice, f.hasOwnProperty('tracking') && y(r, f.tracking));
                                            } catch (e) {
                                                YLHH.bidder.log('Yieldlove', 'ERROR', e);
                                            }
                                            return JSON.stringify(r);
                                        }(i, n.code, s),
                                        adUnitPath: E(e.slot, n.code),
                                        isReloaded: P(s).field('yieldlove_is_reloaded').toBool() || !1,
                                        targetings: s,
                                        bidId: null,
                                        bidderCode: null,
                                        height: null,
                                        width: null,
                                        pbBidCpm: null,
                                        a9PubId: O.settings.a9Enabled && YLHH.A9 ? YLHH.A9.getPubId(O) : null,
                                        pbBidCpmCode: null,
                                        domain: O.domain,
                                        adLayoutId: O.settings.name,
                                        deliveryType: e.isDirectRendering ? h : _
                                    }, f = document.getElementById(a), b = n.stickyEnabled && 'none' === f.style.display;
                                0 === Object.keys(s).length ? (p.bidderCode = v.BidderCode.NO_META_KEY, p.targetings = {}) : e.isEmpty || b ? p.bidderCode = v.BidderCode.UNFILLED : (u = function (e) {
                                    return e.getAdUnitPath().split('/').filter(function (e) {
                                        return e;
                                    })[0];
                                }(e.slot), y(p, {
                                    bidId: d ? d.adId : null,
                                    bidderCode: function (e) {
                                        var t = e.slot, n = e.lineItemId, r = e.winningBid, i = e.isDirectRendering, o = e.gamId, d = e.advertiserId;
                                        if (i && r)
                                            return r.bidderCode;
                                        if (O.isAdExchangeCreative(t))
                                            return v.BidderCode.GOOGLE;
                                        if (O.tag.isBlockedCreative(t))
                                            return v.BidderCode.IO_ROADBLOCK;
                                        if (r)
                                            return r.renderState === v.HbRenderState.renderEnded ? r.bidderCode : v.BidderCode.ERROR;
                                        if (n)
                                            return o === I.stroeer.id && d === I.stroeer.companies.yieldlove ? v.BidderCode.ERROR : v.BidderCode.IO;
                                        return v.BidderCode.ERROR;
                                    }({
                                        slot: t,
                                        lineItemId: e.lineItemId,
                                        winningBid: d,
                                        isDirectRendering: e.isDirectRendering,
                                        gamId: u,
                                        advertiserId: e.advertiserId
                                    }),
                                    height: d ? d.height : e.size[1],
                                    width: d ? d.width : e.size[0],
                                    pbBidCpm: d && d.yieldlove ? d.yieldlove.cpmTracking : null,
                                    pbBidCpmCode: d ? d.cpmCode : null
                                })), Object(m.a)(function (e) {
                                    var t, n, r, i, o, d;
                                    p.consents = e.forTracking, n = (t = p).targetings, r = P(n).field(''.concat(O.getKeyPrefixes()[0], '_pb')).toNumber(), i = P(n).field(''.concat(O.getKeyPrefixes()[0], '_adid')).toString(), o = P(n).field(''.concat(O.getKeyPrefixes()[0], '_bidder')).toString(), d = {
                                        yieldlove_reload: P(n).field('yieldlove_reload').toString(),
                                        yieldlove_reloads: P(n).field('yieldlove_reloads').toNumber(),
                                        yieldlove_reloaded: P(n).field('yieldlove_reloaded').toBool(),
                                        yieldlove_meta_reload: P(n).field('yieldlove_meta_reload').toString(),
                                        yieldlove_reload_count: P(n).field('yieldlove_reload_count').toNumber(),
                                        yieldlove_is_reloaded: P(n).field('yieldlove_is_reloaded').toBool(),
                                        yieldlove_meta: P(n).field('yieldlove_meta').toString(),
                                        yieldlove_hb_sucbid: P(n).field('yieldlove_hb_sucbid').toBool(),
                                        yieldlove_hb_prime: P(n).field('yieldlove_hb_prime').toBool(),
                                        yieldlove_hb_cpm: P(n).field('yieldlove_hb_cpm').toNumber(),
                                        yieldlove_pid: P(n).field('yieldlove_pid').toNumber(),
                                        yieldlove_hb_unit: P(n).field('yieldlove_hb_unit').toString(),
                                        yieldlove_ab: P(n).field('yieldlove_ab').sort().arrayToString(),
                                        yieldlove_meta_ab: P(n).field('yieldlove_meta_ab').sort().arrayToString(),
                                        yieldlove_hb_adid: i,
                                        yieldlove_hb_pb: r,
                                        yieldlove_hb_bidder: o,
                                        yieldlove_hb_size: P(n).field('yieldlove_hb_size').toString(),
                                        yieldlove_no_adx: P(n).field('yieldlove_no_adx').toBool()
                                    }, YLHH.utils.request(R + '/win', JSON.stringify({
                                        pb_session_id: C.user.session_id,
                                        page_id: A,
                                        pb_auction_id: t.auctionId,
                                        pb_unit_id: T(t.unitId).toString(),
                                        pb_bid_id: t.bidId || null,
                                        publisher_id: T(C.publisher.id).toNumber(),
                                        bidder: t.bidderCode || null,
                                        pb_bid_cpm: t.pbBidCpm || null,
                                        a9_pub_id: t.a9PubId || null,
                                        pb_bid_cpm_code: t.pbBidCpmCode || null,
                                        advertiser_id: t.advertiserId || null,
                                        campaign_id: t.campaignId || null,
                                        creative_id: t.creativeId || null,
                                        line_item_id: t.lineItemId || null,
                                        height: t.height,
                                        width: t.width,
                                        adserver_request_time: t.adserverRequestTime,
                                        render_started_time: t.renderStartedTime,
                                        rendered_time: t.renderedTime,
                                        stroeer: t.stroeer || null,
                                        is_initial_load_disabled: !googletag.pubadsReady || O.googletag.pubads().isInitialLoadDisabled(),
                                        ad_unit_path: t.adUnitPath,
                                        is_reloaded: t.isReloaded,
                                        targetings: d,
                                        domain: t.domain,
                                        ad_layout_id: t.adLayoutId,
                                        delivery_type: t.deliveryType,
                                        consents: t.consents
                                    }));
                                }, i);
                            } catch (e) {
                                O.log('Yieldlove', 'ERROR', 'An error occurred. Ads delivery is still working...', e);
                            }
                        },
                        onCreativeClick: s,
                        getTimeMaps: g.c
                    }
                }, window.YLHH);
                var o, d, a, l = (o = function () {
                        var t;
                        t = function (e, t) {
                            O.log('Yieldlove', 'Info', 'Sending a session payload'), YLHH.utils.request(R + '/session', JSON.stringify({
                                pb_session_id: e || 'UNKNOWN',
                                page_id: A,
                                country: C.user.country,
                                publisher_id: T(C.publisher.id).toNumber(),
                                ad_layout_id: O.settings.name,
                                domain: O.domain,
                                loaded_time: YLHH.startTime - f(),
                                consents: t.forTracking
                            }));
                        }, Object(m.a)(function (e) {
                            e.canTrackSessionId() ? (r = YLHH.utils.retrieve('session_id') || YLHH.utils.store('session_id', YLHH.utils.generateUUID()), t(r, e)) : t(null, e);
                        });
                    }, function () {
                        return o && (a = o.apply(d || this, arguments), o = null), a;
                    });
                function E(e, t) {
                    return !window.SDG || -1 !== e.getAdUnitPath().indexOf('/'.concat(t)) ? e.getAdUnitPath() : ''.concat(e.getAdUnitPath(), '/').concat(t);
                }
                function s(e, t) {
                    YLHH.utils.request(R + '/click', JSON.stringify({
                        pb_auction_id: e,
                        pb_unit_id: T(t.unit_id).toString(),
                        pb_bid_id: t.bid_id,
                        publisher_id: T(C.publisher.id).toNumber(),
                        bidder: t.bidderCode
                    }));
                }
                function P(t) {
                    return {
                        field: function (e) {
                            return t[e] ? T(t[e]) : T(null);
                        }
                    };
                }
                function T(e) {
                    return e && !Array.isArray(e) && (e = [e]), {
                        sort: function () {
                            return e && e.length ? T(e.sort()) : T(null);
                        },
                        arrayToString: function () {
                            return e && e.length ? e.join(',') : null;
                        },
                        toString: function () {
                            return e && e.length ? e[0].toString() : null;
                        },
                        toNumber: function () {
                            return e && e.length ? Number(e[0]) : null;
                        },
                        toBool: function () {
                            return e && e.length ? 'true' == e[0] : null;
                        }
                    };
                }
                function f() {
                    try {
                        return window.top.performance.timing.domLoading;
                    } catch (e) {
                        return window.performance.timing.domLoading;
                    }
                }
            },
            41: function (e, t, n) {
                'use strict';
                function a(e) {
                    return (a = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function r(e, t) {
                    return (r = Object.setPrototypeOf || function (e, t) {
                        return e.__proto__ = t, e;
                    })(e, t);
                }
                function d(o) {
                    var d = function () {
                        if ('undefined' == typeof Reflect || !Reflect.construct)
                            return !1;
                        if (Reflect.construct.sham)
                            return !1;
                        if ('function' == typeof Proxy)
                            return !0;
                        try {
                            return Date.prototype.toString.call(Reflect.construct(Date, [], function () {
                            })), !0;
                        } catch (e) {
                            return !1;
                        }
                    }();
                    return function () {
                        var e, t, n, r, i = s(o);
                        return t = d ? (e = s(this).constructor, Reflect.construct(i, arguments, e)) : i.apply(this, arguments), n = this, !(r = t) || 'object' !== a(r) && 'function' != typeof r ? function (e) {
                            if (void 0 !== e)
                                return e;
                            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                        }(n) : r;
                    };
                }
                function s(e) {
                    return (s = Object.setPrototypeOf ? Object.getPrototypeOf : function (e) {
                        return e.__proto__ || Object.getPrototypeOf(e);
                    })(e);
                }
                function i() {
                    return (i = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function u(e, t) {
                    if (!(e instanceof t))
                        throw new TypeError('Cannot call a class as a function');
                }
                function o(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                function l(e, t, n) {
                    return t && o(e.prototype, t), n && o(e, n), e;
                }
                function c(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                t.b = function (e) {
                    p = e;
                }, t.a = function (n, t) {
                    if (p.pbjs && p.pbjs.getBidsRequested && 0 < p.pbjs.getBidsRequested().length) {
                        var e = function (e, t) {
                            return function (e) {
                                if (Array.isArray(e))
                                    return e;
                            }(e) || function (e, t) {
                                if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                                    return;
                                var n = [], r = !0, i = !1, o = void 0;
                                try {
                                    for (var d, a = e[Symbol.iterator](); !(r = (d = a.next()).done) && (n.push(d.value), !t || n.length !== t); r = !0);
                                } catch (e) {
                                    i = !0, o = e;
                                } finally {
                                    try {
                                        r || null == a.return || a.return();
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
                                    return c(e, t);
                                var n = Object.prototype.toString.call(e).slice(8, -1);
                                'Object' === n && e.constructor && (n = e.constructor.name);
                                if ('Map' === n || 'Set' === n)
                                    return Array.from(e);
                                if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                                    return c(e, t);
                            }(e, t) || function () {
                                throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                            }();
                        }((t ? p.pbjs.getBidsRequested().filter(function (e) {
                            return e.auctionId === t;
                        }) : p.pbjs.getBidsRequested()).slice(-1), 1)[0];
                        if (e && e.gdprConsent)
                            switch (e.gdprConsent.apiVersion) {
                            case 1:
                                return p.log('Yieldlove', 'WARNING', new Error('CMP with TCFv1 is not supported.')), void n(new y({}));
                            case 2:
                                if (e.gdprConsent.vendorData.purpose)
                                    return void n(new _({
                                        consentData: e.gdprConsent.vendorData,
                                        fromPrebid: !0
                                    }));
                            }
                    }
                    if (window.__tcfapi) {
                        var r = !1;
                        return void __tcfapi('getTCData', 2, function (e, t) {
                            r || (r = !0, n(t ? new _({
                                consentData: e,
                                fromPrebid: !1
                            }) : new y({})));
                        });
                    }
                    n(new y({}));
                };
                var p = null, f = 'opt-in', b = 'opt-out', g = 'partial opt-in', m = 'gdprNotApplied', v = 'CMP not available';
                var y = function () {
                        function r(e) {
                            var t = e.consentData, n = e.fromPrebid;
                            u(this, r), this.consentData = i({}, t, { gdprApplies: !0 }), this._fromPrebid = n, this._noCmp = !0;
                        }
                        return l(r, [
                            {
                                key: 'gdprApplies',
                                value: function () {
                                    return this.consentData.gdprApplies;
                                }
                            },
                            {
                                key: 'isAvailableInPrebid',
                                value: function () {
                                    return this._fromPrebid && this.purposes && this.purposes.length && this.vendors && this.vendors.length;
                                }
                            },
                            {
                                key: 'hasConsentOnPurpose',
                                value: function (e) {
                                    return this.purposes && this.purposes[e];
                                }
                            },
                            {
                                key: 'hasConsentOnVendor',
                                value: function (e) {
                                    return this.vendors && this.vendors[e] || !1;
                                }
                            },
                            {
                                key: 'canStoreAndAccessInfoOnDevice',
                                value: function () {
                                    return !this.gdprApplies() || this.hasConsentOnPurpose('1') && this.hasConsentOnVendor(251);
                                }
                            },
                            {
                                key: 'canTrackSessionId',
                                value: function () {
                                    return this.canStoreAndAccessInfoOnDevice();
                                }
                            },
                            {
                                key: 'purposes',
                                get: function () {
                                    return null;
                                }
                            },
                            {
                                key: 'vendors',
                                get: function () {
                                    return null;
                                }
                            },
                            {
                                key: 'cmpId',
                                get: function () {
                                    return null;
                                }
                            },
                            {
                                key: 'purposesInV1',
                                get: function () {
                                    return this.purposes ? {
                                        1: this.purposes[1] || !1,
                                        2: this.purposes[2] && this.purposes[3] || !1,
                                        3: this.purposes[4] || !1,
                                        4: this.purposes[6] || !1,
                                        5: this.purposes[7] && this.purposes[9] && this.purposes[10] || !1
                                    } : null;
                                }
                            },
                            {
                                key: 'isOptIn',
                                get: function () {
                                    if (!this.purposes)
                                        return !1;
                                    if (this.purposes.length && 0 === this.purposes.length)
                                        return !1;
                                    for (var e = !0, t = 1; t <= 9; t++)
                                        e = e && this.purposes[t];
                                    return e;
                                }
                            },
                            {
                                key: 'compressedPurposes',
                                get: function () {
                                    if (!this.purposes)
                                        return null;
                                    for (var e = this.purposesInV1, t = 0, n = 1; n <= 5; n++)
                                        t += Math.pow(2, parseInt(n) - 1) * (e[n] || !1);
                                    return t;
                                }
                            },
                            {
                                key: 'forTracking',
                                get: function () {
                                    var e = '';
                                    this._noCmp ? e = v : this.gdprApplies() ? this.isOptIn ? e = f : 0 <= this.compressedPurposes && (e = 0 === this.compressedPurposes ? b : g) : e = m;
                                    var t, n, r, i = this.vendors ? (t = {}, n = 755, r = this.hasConsentOnVendor(755), n in t ? Object.defineProperty(t, n, {
                                            value: r,
                                            enumerable: !0,
                                            configurable: !0,
                                            writable: !0
                                        }) : t[n] = r, t) : null;
                                    return {
                                        state: e,
                                        cmpId: this.cmpId,
                                        purpose: this.compressedPurposes,
                                        vendor: i,
                                        purposes: this.purposesInV1
                                    };
                                }
                            }
                        ]), r;
                    }(), _ = function () {
                        !function (e, t) {
                            if ('function' != typeof t && null !== t)
                                throw new TypeError('Super expression must either be null or a function');
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && r(e, t);
                        }(o, y);
                        var i = d(o);
                        function o(e) {
                            var t, n = e.consentData, r = e.fromPrebid;
                            return u(this, o), (t = i.call(this, {
                                consentData: n,
                                fromPrebid: r
                            }))._noCmp = !1, t;
                        }
                        return l(o, [
                            {
                                key: 'purposes',
                                get: function () {
                                    return this.consentData.purpose ? this.consentData.purpose.consents : null;
                                }
                            },
                            {
                                key: 'vendors',
                                get: function () {
                                    return this.consentData.vendor ? this.consentData.vendor.consents : null;
                                }
                            },
                            {
                                key: 'cmpId',
                                get: function () {
                                    return this.consentData.cmpId;
                                }
                            }
                        ]), o;
                    }();
            },
            6: function (e, t, n) {
                'use strict';
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
                t.a = function (e) {
                    var t = e.slots;
                    d.log('Yieldlove', 'DEBUG', 'beforeAdServerRequest is called with slots of', t), t.forEach(function (e) {
                        i[e.getSlotElementId()] = e.getTargetingMap(), o[e.getSlotElementId()] = r(o[e.getSlotElementId()] || {}, { requestedTime: Date.now() });
                    }), d.log('Yieldlove', 'DEBUG', 'timeMaps is updated.', o);
                }, t.b = function () {
                    return i;
                }, t.c = function () {
                    return o;
                }, t.d = function (e) {
                    (d = e).googletag.cmd.push(function () {
                        var t = d.googletag.pubads().refresh;
                        d.googletag.pubads().refresh = function () {
                            try {
                                var e = arguments[0] || d.googletag.pubads().getSlots();
                                d.tracker.beforeAdServerRequest({ slots: e });
                            } catch (e) {
                            }
                            return t.apply(d.googletag.pubads(), arguments);
                        }, googletag.pubads().addEventListener('slotResponseReceived', function (e) {
                            var t, n;
                            t = { slot: e.slot }, n = t.slot, o[n.getSlotElementId()] = r(o[n.getSlotElementId()] || {}, { renderStartedTime: Date.now() });
                        });
                    });
                };
                var i = {}, o = {}, d = null;
            }
        });
        !function (n) {
            var r = {};
            function o(t) {
                if (r[t])
                    return r[t].exports;
                var e = r[t] = {
                    i: t,
                    l: !1,
                    exports: {}
                };
                return n[t].call(e.exports, e, e.exports, o), e.l = !0, e.exports;
            }
            o.m = n, o.c = r, o.d = function (t, e, n) {
                o.o(t, e) || Object.defineProperty(t, e, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                });
            }, o.n = function (t) {
                var e = t && t.__esModule ? function () {
                    return t.default;
                } : function () {
                    return t;
                };
                return o.d(e, 'a', e), e;
            }, o.o = function (t, e) {
                return Object.prototype.hasOwnProperty.call(t, e);
            }, o.p = '', o(o.s = 47);
        }({
            47: function (t, e, n) {
                'use strict';
                Object.defineProperty(e, '__esModule', { value: !0 });
                var r = n(7), i = n(8);
                function l(t) {
                    return (l = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t;
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                    })(t);
                }
                function a(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                    }
                }
                function u(t, e) {
                    return (u = Object.setPrototypeOf || function (t, e) {
                        return t.__proto__ = e, t;
                    })(t, e);
                }
                function c(i) {
                    var a = function () {
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
                        var t, e, n, r, o = f(i);
                        return e = a ? (t = f(this).constructor, Reflect.construct(o, arguments, t)) : o.apply(this, arguments), n = this, !(r = e) || 'object' !== l(r) && 'function' != typeof r ? function (t) {
                            if (void 0 !== t)
                                return t;
                            throw new ReferenceError('this hasn\'t been initialised - super() hasn\'t been called');
                        }(n) : r;
                    };
                }
                function f(t) {
                    return (f = Object.setPrototypeOf ? Object.getPrototypeOf : function (t) {
                        return t.__proto__ || Object.getPrototypeOf(t);
                    })(t);
                }
                function g(t) {
                    return function (t) {
                        if (Array.isArray(t))
                            return o(t);
                    }(t) || function (t) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(t))
                            return Array.from(t);
                    }(t) || d(t) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function s(t, e) {
                    var n;
                    if ('undefined' == typeof Symbol || null == t[Symbol.iterator]) {
                        if (Array.isArray(t) || (n = d(t)) || e && t && 'number' == typeof t.length) {
                            n && (t = n);
                            var r = 0, o = function () {
                                };
                            return {
                                s: o,
                                n: function () {
                                    return r >= t.length ? { done: !0 } : {
                                        done: !1,
                                        value: t[r++]
                                    };
                                },
                                e: function (t) {
                                    throw t;
                                },
                                f: o
                            };
                        }
                        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }
                    var i, a = !0, l = !1;
                    return {
                        s: function () {
                            n = t[Symbol.iterator]();
                        },
                        n: function () {
                            var t = n.next();
                            return a = t.done, t;
                        },
                        e: function (t) {
                            l = !0, i = t;
                        },
                        f: function () {
                            try {
                                a || null == n.return || n.return();
                            } finally {
                                if (l)
                                    throw i;
                            }
                        }
                    };
                }
                function d(t, e) {
                    if (t) {
                        if ('string' == typeof t)
                            return o(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        return 'Object' === n && t.constructor && (n = t.constructor.name), 'Map' === n || 'Set' === n ? Array.from(t) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? o(t, e) : void 0;
                    }
                }
                function o(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++)
                        r[n] = t[n];
                    return r;
                }
                function p() {
                    return (p = Object.assign || function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                var y = null, v = null, h = null, m = null;
                function b(t) {
                    return void 0 === t && (t = v.activeUnits), 'string' == typeof t && (t = [t]), t.map(function (t) {
                        return y.getCN().getPlacementByPosition(t);
                    }).filter(function (t) {
                        return !!t;
                    }).map(function (t) {
                        return t.gptSlot ? t.gptSlot : S(t);
                    });
                }
                function S(t) {
                    return new E(t);
                }
                window.YLHH = p({
                    Tag: {
                        init: function (t, e) {
                            return (v = t).settings.ignoreDisablingInitialLoad = !0, h = v.log.bind(v), y = e, m = new r.a(t), this;
                        },
                        onAdUnitsAvailable: function () {
                        },
                        bindEvents: function () {
                            v.pbjs.onEvent('adRenderFailed', function (e) {
                                if (h('Yieldlove', 'DEBUG', 'adRenderFailed: ', e), e.e = 'adRenderFailed', e.bid)
                                    y.getEventDispatcher().trigger('SDG_SLOT_YL_RENDER_ERROR', e.bid.adUnitCode);
                                else if (e.adId && v.targeting) {
                                    var n = v.getKeyPrefixes()[0], t = Object.keys(v.targeting).filter(function (t) {
                                            return v.targeting[t][n + '_adid'] === e.adId;
                                        });
                                    if (t.length) {
                                        var r, o = s(t);
                                        try {
                                            for (o.s(); !(r = o.n()).done;) {
                                                var i = r.value;
                                                y.getEventDispatcher().trigger('SDG_SLOT_YL_RENDER_ERROR', i);
                                            }
                                        } catch (t) {
                                            o.e(t);
                                        } finally {
                                            o.f();
                                        }
                                    } else
                                        y.getEventDispatcher().trigger('SDG_SLOT_YL_RENDER_ERROR');
                                } else
                                    y.getEventDispatcher().trigger('SDG_SLOT_YL_RENDER_ERROR');
                                v.hasOwnProperty('exceptionTracker') && v.exceptionTracker.onException(e);
                            });
                        },
                        onAuctionEnded: function () {
                        },
                        setTargeting: function (n, r) {
                            var o = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {};
                            h('Yieldlove', 'DEBUG', 'Setting targeting using meta tag'), v.pbjs.que.push(function () {
                                h('Yieldlove', 'DEBUG', 'Setting targeting using Stroeer global ad-tag.');
                                var t = o.targetings || v.getAdserverTargeting(o);
                                for (var e in (v.targeting = p(v.targeting || {}, t), t))
                                    t.hasOwnProperty(e) && function (t, e) {
                                        var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}, r = y.getCN().getPlacementByPosition(t);
                                        if (n.filter && -1 === n.filter.indexOf(r))
                                            return;
                                        if (h('Yieldlove', 'DEBUG', 'Setting targeting for "'.concat(t, '": '), e), r) {
                                            void 0 !== r.localTargeting && v.getAdserverTargetingKeys({ a9Targeted: v.getAdUnitByCode(t).a9Targeted }).filter(function (t) {
                                                return r.localTargeting[t];
                                            }).forEach(function (t) {
                                                return r.removeTargeting(t);
                                            });
                                            var o = r.setTargeting(e);
                                            return h('stroeerCore', 'DEBUG', 'Setting targeting for "'.concat(t, '": '), o.localTargeting);
                                        }
                                        h('Yieldlove', 'WARNING', 'Setting targeting for "'.concat(t, '" failed. Not a metatag position'));
                                    }(e, t[e], { filter: r });
                                'function' == typeof n && n();
                            });
                        },
                        sendAdServerRequest: function (t) {
                            var e = t.adUnitCodes, n = t.auctionId, r = t.refreshSdgSlotHandler;
                            if (r)
                                r(e);
                            else {
                                var o, i = s(e);
                                try {
                                    for (i.s(); !(o = i.n()).done;) {
                                        var a = o.value;
                                        h('Yieldlove', 'DEBUG', 'firing SDG_SLOT_AUCTION_COMPLETE ' + a);
                                        var l = y.getCN().getPlacementByPosition(a);
                                        l && y.getEventDispatcher().trigger('SDG_SLOT_AUCTION_COMPLETE', l);
                                    }
                                } catch (t) {
                                    i.e(t);
                                } finally {
                                    i.f();
                                }
                                h('Yieldlove', 'DEBUG', 'Resuming DFP-loading by firing SDG-event. Firing SDG_YIELDLOVE_AUCTION_DONE'), y.getEventDispatcher().trigger('SDG_YIELDLOVE_AUCTION_DONE');
                            }
                            v.updateAuctionStatusToFinished(e, n), v.tracker.beforeAdServerRequest({ slots: b(e) });
                        },
                        onError: function () {
                        },
                        isAdExchangeCreative: function (t) {
                            try {
                                return null === ('getResponseInformation' in t ? t.getResponseInformation().creativeId : t.creativeId) ? !_(t) : !1;
                            } catch (t) {
                                return !1;
                            }
                        },
                        isBlockedCreative: _,
                        getAdUnitByGPTSlotCore: function (u) {
                            var t = v.adUnits.filter(function (t) {
                                for (var e = t.code, n = t.aliases, r = y.getCN().getPlacements(), o = 0, i = [].concat(g(n), [e]); o < i.length; o++) {
                                    var a = i[o];
                                    if (a in r) {
                                        var l = v.SDG.getCN().getPlacementByPosition(a);
                                        if (l && l.gptSlot && l.gptSlot.getSlotElementId() === u.getSlotElementId())
                                            return !0;
                                        if (l && l.getAdServerNodeId() === u.getSlotElementId())
                                            return !0;
                                    }
                                }
                                return !1;
                            });
                            if (0 === t.length)
                                return !1;
                            if (1 === t.length)
                                return t[0];
                            throw 'adSlot '.concat(u.getSlotElementId(), ' cannot be uniquely identified');
                        },
                        getMatchingGPTSlots: b,
                        reportUnknownAdUnit: function (t) {
                            h('Yieldlove', 'INFO', 'Firing SDG_SLOT_AUCTION_ERROR for ' + t), y.getEventDispatcher().trigger('SDG_SLOT_AUCTION_ERROR', t);
                        },
                        getGptSlots: function () {
                            return m;
                        },
                        toSlotInterface: S
                    }
                }, window.YLHH);
                var E = function () {
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
                    }(o, i['a']);
                    var t, e, n, r = c(o);
                    function o(t) {
                        return function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError('Cannot call a class as a function');
                        }(this, o), r.call(this, t);
                    }
                    return t = o, (e = [
                        {
                            key: 'getSlotElementId',
                            value: function () {
                                return this.slot.getAdServerNodeId();
                            }
                        },
                        {
                            key: 'getTargetingMap',
                            value: function () {
                                return this.slot.localTargeting;
                            }
                        },
                        {
                            key: 'getAdUnitPath',
                            value: function () {
                                return this.slot.getAlias();
                            }
                        },
                        {
                            key: 'getSizes',
                            value: function () {
                                var e = this.slot.sizeParams, t = e.sizeArray;
                                return t.find(function (t) {
                                    return 1 < t.length && t[0] === e.width && t[1] === e.height;
                                }) || t.push([
                                    e.width,
                                    e.height
                                ]), t;
                            }
                        },
                        {
                            key: 'getTargeting',
                            value: function (t) {
                                return this.slot.localTargeting[t];
                            }
                        }
                    ]) && a(t.prototype, e), n && a(t, n), o;
                }();
                function _(t) {
                    if (!t.getSlotElementId)
                        return !1;
                    var e = y.getCN().getPlacementByAdServerContainerId(t.getSlotElementId());
                    if (!e)
                        return !1;
                    var n = e.getIdsForSystem('meetrics');
                    return !(!n.formatCode || 'Blocker' !== n.formatCode);
                }
            },
            7: function (t, e, n) {
                'use strict';
                function o(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                    }
                }
                n.d(e, 'a', function () {
                    return r;
                });
                var r = function () {
                    function e(t) {
                        !function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError('Cannot call a class as a function');
                        }(this, e), this._bidder = t, this._map = {};
                    }
                    var t, n, r;
                    return t = e, (n = [
                        {
                            key: 'add',
                            value: function (t, e) {
                                var n, r = 1 < arguments.length && void 0 !== e && e;
                                if (this._map.hasOwnProperty(t.getSlotElementId()))
                                    this._map[t.getSlotElementId()].slot = t;
                                else {
                                    try {
                                        n = (n = this._bidder.getAdUnitByGPTSlot(t)) || null;
                                    } catch (t) {
                                        n = null;
                                    }
                                    this._map[t.getSlotElementId()] = {
                                        slot: t,
                                        adUnit: n,
                                        loaded: r,
                                        unknown: !1
                                    };
                                }
                                return this._map[t.getSlotElementId()];
                            }
                        },
                        {
                            key: 'getSlotInfo',
                            value: function (t) {
                                return this.update(), this._map.hasOwnProperty(t.getSlotElementId()) ? this._map[t.getSlotElementId()] : {
                                    unknown: !0,
                                    slot: null,
                                    adUnit: null,
                                    loaded: !1
                                };
                            }
                        },
                        {
                            key: 'getAllSlots',
                            value: function () {
                                this.update();
                                var t = [];
                                for (var e in this._map)
                                    this._map.hasOwnProperty(e) && t.push(this._map[e].slot);
                                return t;
                            }
                        },
                        {
                            key: 'update',
                            value: function () {
                                var e = this;
                                this._bidder.googletag.pubads().getSlots().forEach(function (t) {
                                    e.add(t, !1);
                                });
                            }
                        },
                        {
                            key: 'getSlotBy',
                            value: function (n) {
                                return this._bidder.googletag.pubads().getSlots().find(function (t) {
                                    var e = null;
                                    return 'string' == typeof n ? e = n : n.hasOwnProperty('nodeName') && n.hasOwnProperty('id') ? e = n.id : n.hasOwnProperty('getSlotElementId') && (e = n.getSlotElementId()), t.getSlotElementId() === e;
                                });
                            }
                        },
                        {
                            key: 'clearCache',
                            value: function () {
                                this._map = {};
                            }
                        },
                        {
                            key: 'slotsMap',
                            get: function () {
                                return this.update(), this._map;
                            }
                        }
                    ]) && o(t.prototype, n), r && o(t, r), e;
                }();
            },
            8: function (t, e, n) {
                'use strict';
                function o(t, e) {
                    for (var n = 0; n < e.length; n++) {
                        var r = e[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(t, r.key, r);
                    }
                }
                function f(t, e) {
                    return function (t) {
                        if (Array.isArray(t))
                            return t;
                    }(t) || function (t, e) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(t)))
                            return;
                        var n = [], r = !0, o = !1, i = void 0;
                        try {
                            for (var a, l = t[Symbol.iterator](); !(r = (a = l.next()).done) && (n.push(a.value), !e || n.length !== e); r = !0);
                        } catch (t) {
                            o = !0, i = t;
                        } finally {
                            try {
                                r || null == l.return || l.return();
                            } finally {
                                if (o)
                                    throw i;
                            }
                        }
                        return n;
                    }(t, e) || function (t, e) {
                        if (!t)
                            return;
                        if ('string' == typeof t)
                            return r(t, e);
                        var n = Object.prototype.toString.call(t).slice(8, -1);
                        'Object' === n && t.constructor && (n = t.constructor.name);
                        if ('Map' === n || 'Set' === n)
                            return Array.from(t);
                        if ('Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))
                            return r(t, e);
                    }(t, e) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function r(t, e) {
                    (null == e || e > t.length) && (e = t.length);
                    for (var n = 0, r = new Array(e); n < e; n++)
                        r[n] = t[n];
                    return r;
                }
                e.b = function (t, e) {
                    var n = t.getSizes().map(function (t) {
                            return 'fluid' === t ? 'fluid' : t.getWidth() + 'x' + t.getHeight();
                        }), r = e.filter(function (t) {
                            var e = t.sizes.map(function (t) {
                                return 'fluid' === t ? 'fluid' : t[0] + 'x' + t[1];
                            });
                            return void 0 === n.find(function (t) {
                                return -1 === e.indexOf(t);
                            });
                        });
                    if (0 === r.length)
                        return !1;
                    if (1 === r.length)
                        return r[0];
                    var o = Math.max.apply(null, t.getSizes().map(function (t) {
                            return 'fluid' === t ? 0 : t.getWidth();
                        })), i = Math.max.apply(null, t.getSizes().map(function (t) {
                            return 'fluid' === t ? 0 : t.getHeight();
                        })), a = '_'.concat(o, 'x').concat(i, '_');
                    0 === (e = r.filter(function (t) {
                        return t.aliases.concat([t.code]).filter(function (t) {
                            return -1 !== t.indexOf(a);
                        }).length;
                    })).length && (e = r);
                    if (1 === e.length)
                        return e[0];
                    if (1 < e.length) {
                        for (var l, u = e[0], c = 1; c < e.length; c++) {
                            e[c].sizes.length > u.sizes.length ? u = e[c] : e[c].sizes.length === u.sizes.length && (l = Math.max.apply(null, e[c].sizes.map(function (t) {
                                var e = f(t, 2);
                                return e[0] * e[1];
                            })), Math.max.apply(null, u.sizes.map(function (t) {
                                var e = f(t, 2);
                                return e[0] * e[1];
                            })) < l && (u = e[c]));
                        }
                        return YLHH.bidder.log('Yieldlove', 'WARNING', 'Multiple matches for gpt slot. Returning best match: ' + u.code), u;
                    }
                    throw YLHH.bidder.log('Yieldlove', 'DEBUG', 'Identified configurations for slot: ', e), 'adSlot '.concat(t.getSlotElementId(), ' cannot be uniquely identified');
                }, n.d(e, 'a', function () {
                    return i;
                });
                var i = function () {
                    function e(t) {
                        !function (t, e) {
                            if (!(t instanceof e))
                                throw new TypeError('Cannot call a class as a function');
                        }(this, e), this._slot = t;
                    }
                    var t, n, r;
                    return t = e, (n = [
                        {
                            key: 'getSlotElementId',
                            value: function () {
                                YLHH.bidder.log('Yieldlove', 'WARNING', 'getSlotElementId in SlotInterface must be overrode');
                            }
                        },
                        {
                            key: 'getTargetingMap',
                            value: function () {
                                YLHH.bidder.log('Yieldlove', 'WARNING', 'getTargetingMap in SlotInterface must be overrode');
                            }
                        },
                        {
                            key: 'getAdUnitPath',
                            value: function () {
                                YLHH.bidder.log('Yieldlove', 'WARNING', 'getAdUnitPath in SlotInterface must be overrode');
                            }
                        },
                        {
                            key: 'getSizes',
                            value: function () {
                                YLHH.bidder.log('Yieldlove', 'WARNING', 'getAdUnitPath in SlotInterface must be overrode');
                            }
                        },
                        {
                            key: 'getTargeting',
                            value: function () {
                                YLHH.bidder.log('Yieldlove', 'WARNING', 'getTargeting in SlotInterface must be overrode');
                            }
                        },
                        {
                            key: 'slot',
                            get: function () {
                                return this._slot;
                            }
                        }
                    ]) && o(t.prototype, n), r && o(t, r), e;
                }();
            }
        });
        !function (n) {
            var r = {};
            function i(e) {
                if (r[e])
                    return r[e].exports;
                var t = r[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return n[e].call(t.exports, t, t.exports, i), t.l = !0, t.exports;
            }
            i.m = n, i.c = r, i.d = function (e, t, n) {
                i.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                });
            }, i.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default;
                } : function () {
                    return e;
                };
                return i.d(t, 'a', t), t;
            }, i.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, i.p = '', i(i.s = 29);
        }([
            ,
            ,
            function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'PrebidStatus', function () {
                    return r;
                }), n.d(t, 'AuctionStatus', function () {
                    return i;
                }), n.d(t, 'BidderCode', function () {
                    return o;
                }), n.d(t, 'gdprEnforcement', function () {
                    return a;
                }), n.d(t, 'userIdConfiguration', function () {
                    return c;
                }), n.d(t, 'HbRenderState', function () {
                    return d;
                });
                var r = {
                        LOADING: 'loading',
                        ACTIVE: 'active',
                        INACTIVE: 'inactive',
                        ERROR: 'error'
                    }, i = {
                        INIT: 'init',
                        AUCTIONING: 'auctioning',
                        REQUESTED_BIDS: 'requested_bids',
                        FINISHED: 'finished',
                        ABORTED: 'aborted'
                    }, o = {
                        GOOGLE: 'google',
                        IO: 'IO',
                        IO_ROADBLOCK: 'IO_ROADBLOCK',
                        NO_META_KEY: 'NO_META_KEY',
                        A9: 'A9',
                        RENDERED: 'RENDERED',
                        ERROR: 'ERROR',
                        UNFILLED: 'UNFILLED'
                    }, a = {
                        rules: [
                            {
                                purpose: 'storage',
                                enforcePurpose: !0,
                                enforceVendor: !0
                            },
                            {
                                purpose: 'basicAds',
                                enforcePurpose: !1,
                                enforceVendor: !1
                            }
                        ]
                    }, c = {
                        autIdSystem: {
                            name: 'aut',
                            params: { url: '_getUserIdConfiguration<placeholder_url>' }
                        },
                        criteoIdSystem: {
                            name: 'criteo',
                            params: {}
                        },
                        id5IdSystem: {
                            name: 'id5Id',
                            params: { partner: 433 },
                            storage: {
                                type: 'cookie',
                                name: 'id5id',
                                expires: 90,
                                refreshInSeconds: 604800
                            }
                        },
                        pubCommonIdSystem: {
                            name: 'pubCommonId',
                            params: { enableSharedId: !0 }
                        },
                        sharedIdSystem: {
                            name: 'sharedId',
                            params: {},
                            storage: {
                                type: 'html5',
                                name: 'sharedid',
                                expires: 7
                            }
                        }
                    }, d = {
                        startRendering: 'startRendering',
                        renderEnded: 'renderEnded'
                    };
            },
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            function (e, t) {
                e.exports = {
                    dispatchEvent: function (e, t) {
                        var n = new CustomEvent(e, { detail: t });
                        window.dispatchEvent(n);
                    },
                    debug: function (e, t) {
                        try {
                            (-1 < window.location.search.search('ylautotest') || window.pbjsYLHH && window.pbjsYLHH.getConfig('debug')) && e.apply(null, t);
                        } catch (e) {
                        }
                    }
                };
            },
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            ,
            function (module, exports, __webpack_require__) {
                function _extends() {
                    return (_extends = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push(function () {
                    var e, r;
                    window.yieldlove_prevent_autoload || (window.SDG || window.yieldlove_stop_adserver_requests || (window.googletag.pubads().disableInitialLoad(), googletag.pubads().addEventListener('slotRenderEnded', function (e) {
                        var t, n, r, i, o;
                        e.isEmpty && window.YLHH && window.YLHH.bidder && (t = window.YLHH.bidder.getAdUnitByGPTSlot(e.slot)) && !t.stickyEnabled && (n = window.YLHH.bidder, r = t.code, i = n.pbjs.utils.generateUUID(), 1 < (o = n.data.adUnitData[r] = n.data.adUnitData[r] || {}).auctions || (o.auctions = o.auctions ? o.auctions + 1 : 1, YLHH.bidder.log('Yieldlove', 'DEBUG', 'Restarting auction of '.concat(i, ' because of the empty slot. adUnit codes: ').concat([r])), window.YLHH.bidder.startAuction([r], function () {
                            window.YLHH.bidder.tag.setTargeting(function () {
                                e.slot.setTargeting('yieldlove_empty_fb', o.auctions), n.sendAdServerRequest({
                                    adUnitCodes: [r],
                                    auctionId: i
                                }), n.tag.onAuctionEnded();
                            }, [e.slot]);
                        }, { auctionId: i })));
                    })), (e = window.yieldlove_site_settings) && (r = {}, 'placement' in e ? r = e.placement.reduce(function (e, t) {
                        return e[t.code] = t.placementId, e;
                    }, {}) : console.warn('implement adUnitCodeToPid for new settings'), googletag.pubads().getSlots().forEach(function (e) {
                        var t = e.getAdUnitPath(), n = t in r && r[t];
                        n && 0 === e.getTargeting('yieldlove_meta').length && e.setTargeting('yieldlove_meta', 'pid:' + n + '.sb:f');
                    })));
                });
                var init = __webpack_require__(30);
                window.YLHH = _extends({
                    utils: __webpack_require__(33),
                    cmd: __webpack_require__(34),
                    Bidder: __webpack_require__(35).default,
                    A9: __webpack_require__(37),
                    Data: __webpack_require__(38)
                }, window.YLHH), init(), window.yieldlove_cmd = window.yieldlove_cmd || [], window.yieldlove_cmd.push(function () {
                    var loadScripts = window.YLHH.bidder.settings.loadScripts;
                    Array.isArray(loadScripts) && loadScripts.length && loadScripts.forEach(function (script) {
                        if (0 === script.indexOf('http'))
                            window.YLHH.utils.loadScript({ url: script });
                        else
                            try {
                                window.YLHH.bidder.log('Yieldlove', 'DEBUG', 'Execute a custom script.', script), eval(script);
                            } catch (e) {
                                window.YLHH.bidder.log('Yieldlove', 'DEBUG', 'Custom script error.', e);
                            }
                    });
                });
            },
            function (e, t, n) {
                function c(e) {
                    return (c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function b(e, t) {
                    var n;
                    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (n = function (e) {
                                if (e) {
                                    if ('string' == typeof e)
                                        return d(e, void 0);
                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                    return 'Object' === t && e.constructor && (t = e.constructor.name), 'Map' === t || 'Set' === t ? Array.from(e) : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? d(e, void 0) : void 0;
                                }
                            }(e)) || t && e && 'number' == typeof e.length) {
                            function r() {
                            }
                            n && (e = n);
                            var i = 0;
                            return {
                                s: r,
                                n: function () {
                                    return i >= e.length ? { done: !0 } : {
                                        done: !1,
                                        value: e[i++]
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
                    var o, a = !0, c = !1;
                    return {
                        s: function () {
                            n = e[Symbol.iterator]();
                        },
                        n: function () {
                            var e = n.next();
                            return a = e.done, e;
                        },
                        e: function (e) {
                            c = !0, o = e;
                        },
                        f: function () {
                            try {
                                a || null == n.return || n.return();
                            } finally {
                                if (c)
                                    throw o;
                            }
                        }
                    };
                }
                function d(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                function s() {
                    return (s = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                n(31), n(32);
                var r = n(13), u = r.debug, l = r.dispatchEvent;
                !function () {
                    if (void 0 !== window.Prototype && '1.7.3' !== window.Prototype.Version) {
                        window.pbjsYLHH = window.pbjsYLHH || {}, window.pbjsYLHH.que = window.pbjsYLHH.que || [], window.pbjsYLHH.que.push(function () {
                            pbjsYLHH.utils.logInfo('Yieldlove', 'Array.filter, Array.reduce will be rest since Prebid.js is not compatible with the version of Prototype.js below 1.7.3.');
                        });
                        var e = document.createElement('iframe');
                        e.src = 'about:blank', document.head.appendChild(e);
                        for (var t = e.contentWindow.Array.prototype, n = [
                                    'filter',
                                    'reduce'
                                ], r = 0; r < n.length; ++r) {
                            var i = n[r], o = t[i];
                            o && (Array.prototype[i] = o);
                        }
                        document.head.removeChild(e);
                    }
                }(), e.exports = function () {
                    for (var e = ('undefined' != typeof yieldlove_ad_layout ? yieldlove_ad_layout : void 0) || window.yieldlove_ad_layout || ('undefined' != typeof yieldlove_site_id ? yieldlove_site_id : void 0) || window.yieldlove_site_id || void 0, t = function (e, a) {
                                if (void 0 === e)
                                    return e;
                                if ('global' in e && 'placement' in e)
                                    return 1 == e.global.cmp ? e.global.cmp = {
                                        cmpType: {
                                            0: 'iab',
                                            1: 'sourcepoint'
                                        }[e.global.cmpType]
                                    } : e.global.cmp = null, e;
                                a in e.ad_layouts || (a = window.yieldlove_ad_layout), a in e.ad_layouts || (a = window.yieldlove_site_id);
                                var l = s({}, e, e.ad_layouts[a], {
                                    units: void 0,
                                    ad_layouts: void 0
                                });
                                l.newSettings = !0, l.name = a || window.location.host, l.targetDevice = 'server', 'confiant' in l ? l.confiantId = l.confiant.id : (l.confiant = !1, l.confiantId = null), 'directRender' in l ? (l.cmpDirectRender = !0, l.stroeerDirectRender = l.directRender.allowToSkipAdxWithConsent, l.directRenderSaBidsOnly = l.directRender.allowSeedingAlianceOnly) : (l.cmpDirectRender = !1, l.stroeerDirectRender = !1, l.directRenderSaBidsOnly = !1), l.a9PubID = l.a9_pub_ID, l.refreshApiInUse = l.refresh_api_in_use, l.isStroeer2ndPriceAuction = !!l.stroeer_parallel_setup, l.trackingEndpoint = l.tracking_endpoint, l.key_prefix = l.key_prefix || 'yieldlove_hb', l.loadScripts = l.load_scripts;
                                var c = e.user;
                                function t() {
                                    var e = [];
                                    for (var t in l.breakpoints) {
                                        var n = l.breakpoints[t], r = n.min_width || null, i = n.max_width || null;
                                        null !== r && !p(r) || null !== i && !g(i) || e.push(t);
                                    }
                                    var o, a = b(f);
                                    try {
                                        for (a.s(); !(o = a.n()).done;) {
                                            var c = o.value;
                                            if ('breakpoints' in c && 0 !== c.breakpoints.length) {
                                                c.activeBreakpoint = !1;
                                                var d, s = b(c.breakpoints);
                                                try {
                                                    for (s.s(); !(d = s.n()).done;) {
                                                        var u = d.value;
                                                        if (-1 !== e.indexOf(u)) {
                                                            c.activeBreakpoint = !0;
                                                            break;
                                                        }
                                                    }
                                                } catch (e) {
                                                    s.e(e);
                                                } finally {
                                                    s.f();
                                                }
                                                !1 === c.activeBreakpoint && (c.active = !1, c.inactiveReason.push('Excluded per breakpoint targeting'));
                                            }
                                        }
                                    } catch (e) {
                                        a.e(e);
                                    } finally {
                                        a.f();
                                    }
                                }
                                l.country = c.country, l.device = c.device;
                                var f = [].concat(e.units).map(function (t) {
                                        if ((t = s(t, (t.ad_layout_ids || {})[a] || {})).layouts = Object.keys(t.ad_layout_ids || {}), t.placementId = t.id, t.placementName = ''.concat(t.id), t.code = ''.concat(t.id), t.aliases = t.codes, t.cutoffPrice = t.cutoff_price, t.minPrice = t.min_price, t.sticky && (t.stickyEnabled = !0, t.stickyZIndex = t.sticky.z_index, !t.sticky.code && t.codes.length && (t.sticky.code = t.codes[0])), t.bids = t.bids.filter(function (e) {
                                                return 'string' != typeof e.bidder || 'a9' !== e.bidder.toLowerCase() || !(t.a9Targeted = !0);
                                            }), t.reload && (t.refreshInterval = t.refreshInterval || t.reload.interval, t.refreshMaxImpressions = t.refreshMaxImpressions || t.reload.max_impressions, t.refreshMaxYoffset = t.refreshMaxYoffset || t.reload.max_y_offset, t.refreshMinScreenTime = t.refreshMinScreenTime || t.reload.min_screen_time, t.refreshMinVisibility = t.refreshMinVisibility || t.reload.min_visibility, t.refreshScreenIdleTime = t.refreshScreenIdleTime || t.reload.screen_idle_time), t.active = !0, t.inactiveReason = [], t.countries && t.countries.length && -1 === t.countries.indexOf(c.country) && (t.active = !1, t.inactiveReason.push('Excluded per country targeting')), t.layouts && 0 < t.layouts.length && -1 === t.layouts.indexOf(a) && (t.active = !1, t.inactiveReason.push('Excluded per ad layout. '.concat(a, ' is not one of:\n    - ').concat(t.layouts.join('\n    - ')))), t.devices && t.devices.length && -1 === t.devices.indexOf(c.device) && (t.active = !1, t.inactiveReason.push('Excluded per device targeting')), t.urls && t.urls.length) {
                                            var e, n = !1, r = b(t.urls);
                                            try {
                                                for (r.s(); !(e = r.n()).done;) {
                                                    var i = e.value;
                                                    if (i.startsWith('^.*(?<!') && i.endsWith(')$')) {
                                                        var o = i.substr('^.*(?<!'.length, i.length - '^.*(?<!'.length - ')$'.length);
                                                        if (window.location.href.endsWith(o))
                                                            continue;
                                                        n = !0;
                                                        break;
                                                    }
                                                    if (i.startsWith('!')) {
                                                        if (null !== window.location.href.match(new RegExp(i.substr(1))))
                                                            continue;
                                                        n = !0;
                                                        break;
                                                    }
                                                    if (null !== window.location.href.match(new RegExp(i))) {
                                                        n = !0;
                                                        break;
                                                    }
                                                }
                                            } catch (e) {
                                                r.e(e);
                                            } finally {
                                                r.f();
                                            }
                                            !1 === n && (t.active = !1, t.inactiveReason.push('Excluded per url targeting'));
                                        }
                                        return t;
                                    }), n = YLHH.utils, p = n.matchMinWidth, g = n.matchMaxWidth;
                                window.addEventListener('resize', t), t(), l.activeUnits = f.map(function (e) {
                                    var t = e.code;
                                    return !!e.active && t;
                                }).filter(function (e) {
                                    return e;
                                });
                                var r = {
                                    global: l,
                                    placement: f
                                };
                                return window.yieldlove_site_settings = r;
                            }(window.yieldlove_site_settings || void 0, e), n = void 0 !== t ? t : window.yieldlove_site_settings || void 0, r = 'undefined' != typeof yieldlove_settings ? yieldlove_settings : window.yieldlove_settings || {}, i = 'undefined' != typeof yieldlove_adUnits ? yieldlove_adUnits : window.yieldlove_adUnits || [], o = 'undefined' != typeof yieldlove_cmd ? yieldlove_cmd : window.yieldlove_cmd || [], a = 0; a < o.length; a++)
                        YLHH.cmd.push.settings(o[a]);
                    window.yieldlove_cmd = { push: YLHH.cmd.push.settings }, window.googletag.cmd.push(function () {
                        function n(e) {
                            var t = YLHH.bidder.pbjs;
                            t.que = t.que || [], t.getConfig ? 'DEBUG' !== YLHH.bidder.settings.logLevel && !t.getConfig('debug') || (console.groupCollapsed('%cGoogle', 'display: inline-block; color: #fff; background: #2ac961; padding: 1px 4px; border-radius: 3px;', 'See googletag.'.concat(e, ' trace here')), console.trace(), console.groupEnd()) : t.que.push(function () {
                                'DEBUG' !== YLHH.bidder.settings.logLevel && !t.getConfig('debug') || (console.groupCollapsed('%cGoogle', 'display: inline-block; color: #fff; background: #2ac961; padding: 1px 4px; border-radius: 3px;', 'See googletag.'.concat(e, ' trace here')), console.trace(), console.groupEnd());
                            });
                        }
                        var r = googletag.defineSlot;
                        googletag.defineSlot = function () {
                            try {
                                YLHH.bidder.log('Google', 'DEBUG', 'googletag.defineSlot has been called', arguments), n('defineSlot');
                                var e = arguments[2], t = document.getElementById(e);
                                YLHH.bidder.log('Google', 'DEBUG', 'Elemenent '.concat(e, ' ').concat(t ? 'is' : 'is not', ' on the page'), t);
                            } catch (t) {
                            }
                            return r.apply(googletag, arguments);
                        };
                        var e = googletag.destroySlots;
                        googletag.destroySlots = function () {
                            try {
                                YLHH.bidder.log('Google', 'DEBUG', 'googletag.destroySlots has been called', arguments), n('destroySlots');
                            } catch (e) {
                            }
                            return e.apply(googletag, arguments);
                        };
                        var t = googletag.display;
                        googletag.display = function () {
                            try {
                                YLHH.bidder.log('Google', 'DEBUG', 'googletag.display has been called', arguments), n('display');
                            } catch (e) {
                            }
                            return t.apply(googletag, arguments);
                        };
                        var i = googletag.pubads().display;
                        googletag.pubads().display = function () {
                            try {
                                YLHH.bidder.log('Google', 'DEBUG', 'googletag.pubads().display has been called', arguments), n('pubads().display');
                            } catch (e) {
                            }
                            return i.apply(googletag.pubads(), arguments);
                        };
                        var o = googletag.pubads().collapseEmptyDivs;
                        googletag.pubads().collapseEmptyDivs = function () {
                            try {
                                YLHH.bidder.log('Google', 'DEBUG', 'googletag.pubads().collapseEmptyDivs has been called', arguments), n('pubads().collapseEmptyDivs'), YLHH.bidder.settings.resizeAds = !0;
                            } catch (e) {
                            }
                            return o.apply(googletag.pubads(), arguments);
                        };
                        var a = googletag.pubads().refresh;
                        googletag.pubads().refresh = function () {
                            try {
                                var e = null;
                                void 0 !== arguments[0] && (e = arguments[0].map(function (e) {
                                    return {
                                        adUnitPath: e.getAdUnitPath(),
                                        elementId: e.getSlotElementId(),
                                        targetingMap: e.getTargetingMap()
                                    };
                                }));
                                var t = googletag.pubads().getSlots().map(function (e) {
                                    return {
                                        adUnitPath: e.getAdUnitPath(),
                                        elementId: e.getSlotElementId(),
                                        targetingMap: e.getTargetingMap()
                                    };
                                });
                                u(function () {
                                    l('yltest.refresh', { slots: e });
                                }), YLHH.bidder.log('Google', 'DEBUG', 'googletag.pubads().refresh has been called', arguments, e, ' The current slots are', t), n('pubads().refresh');
                            } catch (e) {
                            }
                            return a.apply(googletag.pubads(), arguments);
                        };
                    }), window.yieldlove_prevent_autoload || (void 0 !== e || 'object' === c(n) ? (window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.pbjsYLHH = window.pbjsYLHH || {}, window.pbjsYLHH.que = window.pbjsYLHH.que || [], window.YLHH.bidder = new YLHH.Bidder(e, i, r, window.googletag, window.pbjsYLHH, window.SDG), window.yieldlove_prevent_autostart ? YLHH.bidder.log('Yieldlove', 'DEBUG', 'Bidder prevented from starting automatically.') : YLHH.bidder.start(window.yieldlove_bbh)) : console.error(new Error('The variable \'yieldlove_site_id\' or \'yieldlove_site_settings\' must be defined.')));
                };
            },
            function (e, t, n) {
                'use strict';
                Array.prototype.find || Object.defineProperty(Array.prototype, 'find', {
                    value: function (e, t) {
                        if (null == this)
                            throw new TypeError('this is null or not defined');
                        var n = Object(this), r = n.length >>> 0;
                        if ('function' != typeof e)
                            throw new TypeError('predicate must be a function');
                        for (var i = t, o = 0; o < r;) {
                            var a = n[o];
                            if (e.call(i, a, o, n))
                                return a;
                            o++;
                        }
                    }
                });
            },
            function (e, t) {
                !function () {
                    if ('undefined' != typeof window)
                        try {
                            var e = new window.CustomEvent('test', { cancelable: !0 });
                            if (e.preventDefault(), !0 !== e.defaultPrevented)
                                throw new Error('Could not prevent default');
                        } catch (e) {
                            function t(e, t) {
                                var n, r;
                                return (t = t || {}).bubbles = !!t.bubbles, t.cancelable = !!t.cancelable, (n = document.createEvent('CustomEvent')).initCustomEvent(e, t.bubbles, t.cancelable, t.detail), r = n.preventDefault, n.preventDefault = function () {
                                    r.call(this);
                                    try {
                                        Object.defineProperty(this, 'defaultPrevented', {
                                            get: function () {
                                                return !0;
                                            }
                                        });
                                    } catch (e) {
                                        this.defaultPrevented = !0;
                                    }
                                }, n;
                            }
                            t.prototype = window.Event.prototype, window.CustomEvent = t;
                        }
                }();
            },
            function (e, t, n) {
                'use strict';
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                function d(e) {
                    return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                Object.defineProperty(t, '__esModule', { value: !0 }), t.store = function (e, t) {
                    return document.cookie = e + '=' + t + '; path=/', t;
                }, t.retrieve = function (e) {
                    for (var t = e + '=', n = document.cookie.split(';'), r = 0, i = n.length; r < i; r++) {
                        for (var o = n[r]; ' ' === o.charAt(0);)
                            o = o.substring(1, o.length);
                        if (0 === o.indexOf(t))
                            return o.substring(t.length, o.length);
                    }
                    return null;
                }, t.mergeLists = function (t, e) {
                    return t.concat(e.filter(function (e) {
                        return t.indexOf(e) < 0;
                    }));
                }, t.request = function (e, t, n, r, i) {
                    i = i || 'POST';
                    var o = window.XMLHttpRequest ? new XMLHttpRequest() : new ActiveXObject('Microsoft.XMLHTTP');
                    return o.open(i, e), void 0 !== n && (o.onreadystatechange = function () {
                        3 < o.readyState && (200 === o.status ? n(null, o.responseText) : n(new Error(o.responseText)));
                    }), 'POST' === i ? (r ? (o.setRequestHeader('Content-type', 'application/x-www-form-urlencoded'), t = Object.keys(t).map(function (e) {
                        return encodeURIComponent(e) + '=' + encodeURIComponent(t[e]);
                    }).join('&')) : o.setRequestHeader('Content-Type', 'text/plain'), o.send(t)) : o.send(), o;
                }, t.loadScript = function (e) {
                    for (var t = e.url, n = e.isLoaded, r = e.callback, i = document.getElementsByTagName('script'), o = 0; o < i.length; o++) {
                        var a = function (e) {
                            return i[e].src !== t ? 'continue' : 'function' != typeof r ? { v: void 0 } : 'true' === i[e].getAttribute('data-loaded') || n && n() ? { v: r() } : (i[e].addEventListener('load', function () {
                                i[e].setAttribute('data-loaded', 'true');
                            }), i[e].addEventListener('load', r), { v: void 0 });
                        }(o);
                        if ('continue' !== a && 'object' === d(a))
                            return a.v;
                    }
                    var c = document.createElement('script');
                    c.src = t, c.type = 'text/javascript', c.addEventListener('load', function () {
                        c.setAttribute('data-loaded', 'true');
                    }), 'function' == typeof r && c.addEventListener('load', r), document.getElementsByTagName('head')[0].appendChild(c);
                }, t.convertFloatToStr = function (e, t, n) {
                    return YLHH.utils.roundFloat(e, t).toFixed(n);
                }, t.roundFloat = function (e, t) {
                    return Math.ceil(e * t) / t;
                }, t.escapeForRegex = function (e) {
                    return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
                }, t.debounce = function (r, i, o) {
                    var a;
                    return function () {
                        var e = this, t = arguments, n = o && !a;
                        clearTimeout(a), a = setTimeout(function () {
                            a = null, o || r.apply(e, t);
                        }, i), n && r.apply(e, t);
                    };
                }, t.isEquivalent = function (e, t) {
                    if ('object' !== d(e) || 'object' !== d(t))
                        return e === t;
                    if (JSON.stringify(e) === JSON.stringify(t))
                        return !0;
                    var n = Object.getOwnPropertyNames(e), r = Object.getOwnPropertyNames(t);
                    if (n.length != r.length)
                        return !1;
                    for (var i = 0; i < n.length; i++) {
                        var o = n[i];
                        if (e[o] !== t[o])
                            return !1;
                    }
                    return !0;
                }, t.deepClone = function (e) {
                    return e ? JSON.parse(JSON.stringify(e)) : null;
                }, t.generateUUID = function (e) {
                    return e ? (e ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> e / 4).toString(16) : ([10000000] + -1000 + -4000 + -8000 + -100000000000).replace(/[018]/g, this.generateUUID);
                }, t.matchMinWidth = function (e) {
                    return void 0 !== window.matchMedia ? !!window.matchMedia('only screen and (min-width: '.concat(e, 'px)')).matches : window.innerWidth >= e;
                }, t.matchMaxWidth = function (e) {
                    return void 0 !== window.matchMedia ? !!window.matchMedia('only screen and (max-width: '.concat(e, 'px)')).matches : window.innerWidth < e;
                }, t.matchMinHeight = function (e) {
                    return void 0 !== window.matchMedia ? !!window.matchMedia('only screen and (min-height: '.concat(e, 'px)')).matches : window.innerHeight >= e;
                }, t.matchMaxHeight = function (e) {
                    return void 0 !== window.matchMedia ? !!window.matchMedia('only screen and (max-height: '.concat(e, 'px)')).matches : window.innerHeight < e;
                }, t.lazyLoad = function (n, r) {
                    function i() {
                        var e, t = 'string' == typeof n ? document.getElementById(n) : n;
                        if (o)
                            return 1;
                        if (0 <= (e = t.getBoundingClientRect()).top && 0 <= e.left && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)) {
                            o = !0;
                            try {
                                window.yieldlove_cmp && window.yieldlove_cmp.spConfigLoaded ? (window.yieldlove_tc = window.yieldlove_tc || [], window.yieldlove_tc.push(function () {
                                    return r();
                                })) : r();
                            } catch (e) {
                                console.error(e);
                            }
                            return 1;
                        }
                    }
                    var o = !1;
                    if (window.addEventListener)
                        for (var e = 0, a = [
                                    'DOMContentLoaded',
                                    'load',
                                    'scroll',
                                    'resize'
                                ]; e < a.length; e++)
                            !function () {
                                var t = a[e];
                                addEventListener(t, function e() {
                                    return i() ? removeEventListener(t, e) : null;
                                }, !1);
                            }();
                    else if (window.attachEvent)
                        for (var c = 0, d = [
                                    'onDOMContentLoaded',
                                    'onload',
                                    'onscroll',
                                    'onresize'
                                ]; c < d.length; c++)
                            !function () {
                                var t = d[c];
                                attachEvent(t, function e() {
                                    return i() ? detachEvent(t, e) : null;
                                }, !1);
                            }();
                    else
                        var t = setInterval(function () {
                            return i() ? clearInterval(t) : null;
                        }, 300);
                }, t.loadCustomVendors = function t(d) {
                    for (var e in d)
                        d[e] = i(d[e]);
                    window.yieldlove_tc = window.yieldlove_tc || [], window.yieldlove_tc.push(function (c) {
                        var e = JSON.stringify(Object.keys(d));
                        e in r || (r[e] = !0, window.__tcfapi('addEventListener', 2, function () {
                            return t(d);
                        })), window.__tcfapi('getCustomVendorConsents', 2, function (i, e) {
                            if (!e)
                                return null;
                            for (var t = function () {
                                        var t = a[o];
                                        if (c.gdprApplies && !i.consentedVendors.find(function (e) {
                                                return e.name === t;
                                            }))
                                            return 'continue';
                                        var e, n = function (e, t) {
                                                var n;
                                                if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                                                    if (Array.isArray(e) || (n = function (e) {
                                                            if (e) {
                                                                if ('string' == typeof e)
                                                                    return s(e, void 0);
                                                                var t = Object.prototype.toString.call(e).slice(8, -1);
                                                                return 'Object' === t && e.constructor && (t = e.constructor.name), 'Map' === t || 'Set' === t ? Array.from(e) : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? s(e, void 0) : void 0;
                                                            }
                                                        }(e)) || t && e && 'number' == typeof e.length) {
                                                        n && (e = n);
                                                        var r = 0, i = function () {
                                                            };
                                                        return {
                                                            s: i,
                                                            n: function () {
                                                                return r >= e.length ? { done: !0 } : {
                                                                    done: !1,
                                                                    value: e[r++]
                                                                };
                                                            },
                                                            e: function (e) {
                                                                throw e;
                                                            },
                                                            f: i
                                                        };
                                                    }
                                                    throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                                                }
                                                var o, a = !0, c = !1;
                                                return {
                                                    s: function () {
                                                        n = e[Symbol.iterator]();
                                                    },
                                                    n: function () {
                                                        var e = n.next();
                                                        return a = e.done, e;
                                                    },
                                                    e: function (e) {
                                                        c = !0, o = e;
                                                    },
                                                    f: function () {
                                                        try {
                                                            a || null == n.return || n.return();
                                                        } finally {
                                                            if (c)
                                                                throw o;
                                                        }
                                                    }
                                                };
                                            }(d[t] || []);
                                        try {
                                            for (n.s(); !(e = n.n()).done;) {
                                                var r = e.value;
                                                try {
                                                    r();
                                                } catch (e) {
                                                    console.error(e);
                                                }
                                            }
                                        } catch (e) {
                                            n.e(e);
                                        } finally {
                                            n.f();
                                        }
                                    }, o = 0, a = Object.keys(d); o < a.length; o++)
                                t();
                        });
                    });
                };
                var r = {};
                function i(e) {
                    var t;
                    if ('string' == typeof e)
                        t = [o(function () {
                                YLHH.utils.loadScript({ url: e });
                            })];
                    else if ('function' == typeof e)
                        t = [o(e)];
                    else {
                        if (!Array.isArray(e))
                            throw new TypeError('Expected string or function for custom vendors resource');
                        t = e.map(i).flat();
                    }
                    return t;
                }
                function o(e) {
                    var t = !1;
                    return function () {
                        return t ? null : (t = !0, e());
                    };
                }
            },
            function (t, n) {
                function o(e) {
                    return (o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function r() {
                    return i.apply(this, arguments);
                }
                var i;
                t.exports = {
                    ready: {
                        bidder: !1,
                        settings: !1,
                        auctionStarted: !1,
                        allBids: !1,
                        amazonBids: !1,
                        prebidBids: !1,
                        document: !1
                    },
                    queue: {
                        bidder: [],
                        settings: [],
                        auctionStarted: [],
                        allBids: [],
                        amazonBids: [],
                        prebidBids: [],
                        document: []
                    },
                    onready: {
                        f: function (e, t) {
                            YLHH.cmd.ready[e] = !0;
                            for (var n = YLHH.cmd.queue[e].pop(); n;)
                                'function' == typeof n.function && (n.arguments.unshift(t), n.function.apply(YLHH.bidder, n.arguments)), n = YLHH.cmd.queue[e].pop();
                        },
                        bidder: function () {
                            YLHH.cmd.onready.f('bidder');
                        },
                        settings: function () {
                            YLHH.cmd.onready.f('settings');
                        },
                        auctionStarted: function (e) {
                            var t = e.auctionId, n = e.adUnitCodes, r = e.options;
                            YLHH.cmd.onready.f('auctionStarted', {
                                auctionId: t,
                                adUnitCodes: n,
                                options: r
                            });
                        },
                        allBids: function () {
                            YLHH.cmd.onready.f('allBids');
                        },
                        amazonBids: function (e) {
                            YLHH.cmd.onready.f('amazonBids', { bids: e });
                        },
                        prebidBids: function (e) {
                            YLHH.cmd.onready.f('prebidBids', { bids: e });
                        },
                        document: function () {
                            YLHH.cmd.onready.f('document');
                        }
                    },
                    push: {
                        f: function (e, t, n) {
                            var r = n ? 'unshift' : 'push', i = (t = Array.prototype.slice.call(t)).shift();
                            if ('function' == typeof i) {
                                if (YLHH.cmd.queue[e][r]({
                                        function: i,
                                        arguments: t
                                    }), YLHH.cmd.ready[e])
                                    return YLHH.cmd.onready[e]();
                                'function' == typeof YLHH.cmd.attachEvent[e] && YLHH.cmd.attachEvent[e]();
                            } else
                                console.error('Expected argument to be of type function. Got ' + o(i) + ' instead');
                        },
                        bidder: function () {
                            YLHH.cmd.push.f('bidder', arguments);
                        },
                        settings: function () {
                            YLHH.cmd.push.f('settings', arguments);
                        },
                        auctionStarted: function () {
                            YLHH.cmd.push.f('auctionStarted', arguments);
                        },
                        allBids: function () {
                            YLHH.cmd.push.f('allBids', arguments);
                        },
                        amazonBids: function () {
                            YLHH.cmd.push.f('amazonBids', arguments);
                        },
                        prebidBids: function () {
                            YLHH.cmd.push.f('prebidBids', arguments);
                        },
                        document: function () {
                            YLHH.cmd.push.f('document', arguments);
                        }
                    },
                    unshift: {
                        bidder: function () {
                            YLHH.cmd.push.f('bidder', arguments, !0);
                        },
                        settings: function () {
                            YLHH.cmd.push.f('settings', arguments, !0);
                        },
                        auctionStarted: function () {
                            YLHH.cmd.push.f('auctionStarted', arguments, !0);
                        },
                        allBids: function () {
                            YLHH.cmd.push.f('allBids', arguments, !0);
                        },
                        amazonBids: function () {
                            YLHH.cmd.push.f('amazonBids', arguments, !0);
                        },
                        prebidBids: function () {
                            YLHH.cmd.push.f('prebidBids', arguments, !0);
                        },
                        document: function () {
                            YLHH.cmd.push.f('document', arguments, !0);
                        }
                    },
                    attachEvent: {
                        bidder: void 0,
                        settings: void 0,
                        auctionStarted: void 0,
                        allBids: void 0,
                        amazonBids: void 0,
                        prebidBids: void 0,
                        document: (i = function () {
                            return YLHH.cmd.attachEvent.document = void 0, -1 !== [
                                'complete',
                                'interactive',
                                'loaded'
                            ].indexOf(document.readyState) ? YLHH.cmd.onready.document() : (window.addEventListener ? window.addEventListener('load', function () {
                                YLHH.cmd.onready.document();
                            }) : window.attachEvent('onload', function () {
                                YLHH.cmd.onready.document();
                            }), void (document.addEventListener ? document.addEventListener('DOMContentLoaded', function e() {
                                document.removeEventListener('DOMContentLoaded', e, !1), YLHH.cmd.onready.document();
                            }, !1) : document.attachEvent && (document.attachEvent('onreadystatechange', function e() {
                                'complete' === document.readyState && (document.detachEvent('onreadystatechange', e), YLHH.cmd.onready.document());
                            }), document.documentElement.doScroll && window === window.top && setTimeout(function n() {
                                if (!YLHH.cmd.ready.document) {
                                    try {
                                        document.documentElement.doScroll('left');
                                    } catch (t) {
                                        return YLHH.bidder.log('Yieldlove', 'ERROR', e), void setTimeout(n, 10);
                                    }
                                    YLHH.cmd.onready.document();
                                }
                            }, 10))));
                        }, r.toString = function () {
                            return i.toString();
                        }, r)
                    }
                };
            },
            function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'default', function () {
                    return i;
                });
                var O, l = n(2), f = n(13), a = (n.n(f), n(36));
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
                function p(e) {
                    return (p = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function v(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
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
                        }
                    }(e, t) || d(e, t) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function _(e, t) {
                    var n;
                    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (n = d(e)) || t && e && 'number' == typeof e.length) {
                            n && (e = n);
                            var r = 0, i = function () {
                                };
                            return {
                                s: i,
                                n: function () {
                                    return r >= e.length ? { done: !0 } : {
                                        done: !1,
                                        value: e[r++]
                                    };
                                },
                                e: function (e) {
                                    throw e;
                                },
                                f: i
                            };
                        }
                        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }
                    var o, a = !0, c = !1;
                    return {
                        s: function () {
                            n = e[Symbol.iterator]();
                        },
                        n: function () {
                            var e = n.next();
                            return a = e.done, e;
                        },
                        e: function (e) {
                            c = !0, o = e;
                        },
                        f: function () {
                            try {
                                a || null == n.return || n.return();
                            } finally {
                                if (c)
                                    throw o;
                            }
                        }
                    };
                }
                function d(e, t) {
                    if (e) {
                        if ('string' == typeof e)
                            return s(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return 'Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0;
                    }
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                function r(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r);
                    }
                }
                var i = (r(c.prototype, [
                    {
                        key: '_waitConsentFromCmp',
                        value: function () {
                            var c = this;
                            window.yieldlove_cmp = window.yieldlove_cmp || {}, window.yieldlove_tc = window.yieldlove_tc || [], this.log('YieldloveCmp', 'DEBUG', 'CMP module is activated after '.concat(Date.now() - YLHH.startTime, ' ms')), Object(a.c)({
                                timeout: null,
                                successOnly: !0
                            }, function (t, n) {
                                if (window.yieldlove_cmp.tcData = t, window.__tcfapi('addEventListener', 2, c._onTcDataUpdated), Array.isArray(window.yieldlove_tc)) {
                                    var e = function (e) {
                                        if (Array.isArray(e))
                                            return s(e);
                                    }(a = window.yieldlove_tc) || function (e) {
                                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                                            return Array.from(e);
                                    }(a) || d(a) || function () {
                                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                                    }();
                                    window.yieldlove_tc = {
                                        push: function (e) {
                                            try {
                                                e(t, n);
                                            } catch (e) {
                                                console.error(e);
                                            }
                                        }
                                    };
                                    var r, i = _(e);
                                    try {
                                        for (i.s(); !(r = i.n()).done;) {
                                            var o = r.value;
                                            window.yieldlove_tc.push(o);
                                        }
                                    } catch (e) {
                                        i.e(e);
                                    } finally {
                                        i.f();
                                    }
                                }
                                var a;
                                YLHH.bidder.log('YieldloveCmp', 'DEBUG', 'yieldlove_tc was executed');
                            }), window.yieldlove_cmp.startWasCalled = void 0;
                            var r = this.startAuction;
                            this.startAuction = function () {
                                for (var e = arguments.length, n = new Array(e), t = 0; t < e; t++)
                                    n[t] = arguments[t];
                                if (window.yieldlove_cmp.startWasCalled || (window.yieldlove_cmp.startWasCalled = !1), c._gdprEnabled || c._withoutGdpr)
                                    return r.call.apply(r, [c].concat(n));
                                c.log('YieldloveCmp', 'DEBUG', 'Waiting for consent as specified in the settings'), Object(a.c)({ timeout: 1500 }, function (e, t) {
                                    t && e.gdprApplies ? c.enableGdpr() : c._withoutGdpr = !0, r.call.apply(r, [c].concat(n)), window.yieldlove_cmp.startWasCalled = !0;
                                });
                            };
                        }
                    },
                    {
                        key: '_onTcDataUpdated',
                        value: function (e) {
                            var t, n;
                            YLHH.bidder.log('YieldloveCmp', 'DEBUG', 'Received consent update', window.yieldlove_cmp.tcData, e), !0 === window.yieldlove_cmp.startWasCalled && ('tcloaded' != e.eventStatus && 'useractioncomplete' != e.eventStatus || (window.yieldlove_cmp.tcData.tcString !== e.tcString ? !1 !== (window.yieldlove_cmp.tcData = e).gdprApplies ? (t = e.vendor.consents || {}, n = e.purpose.consents || {}, Object.keys(t).find(function (e) {
                                return !0 === t[e];
                            }) || Object.keys(n).find(function (e) {
                                return !0 === n[e];
                            }) ? (YLHH.bidder.log('YieldloveCmp', 'DEBUG', 'CMP is starting a new auction with the updated consent.'), YLHH.bidder.startAuction(void 0, window.yieldlove_bbh)) : YLHH.bidder.log('YieldloveCmp', 'DEBUG', 'No relevant change. Not reloading')) : YLHH.bidder.log('YieldloveCmp', 'DEBUG', 'GDPR does not apply. Not reloading.') : YLHH.bidder.log('YieldloveCmp', 'DEBUG', 'Consent string did not change. Not reloading.')));
                        }
                    },
                    {
                        key: '_downloadSettings',
                        value: function (t, n) {
                            var e, r = this.settings.unitTesting ? window.testRequest : new XMLHttpRequest();
                            this.settings.unitTesting || (e = '//cdn-a.yieldlove.com/yieldlove-bidder.js?site_id='.concat(this.name, '&wrapper=0'), r.open('GET', e), r.setRequestHeader('Accept', 'application/javascript'), r.responseType = 'text', O.log('Yieldlove', 'WARNING', 'Loading settings from '.concat(e))), r.onreadystatechange = function () {
                                if (4 === r.readyState)
                                    try {
                                        var e = r.response;
                                        if (200 !== r.status)
                                            throw new Error('Expected 200 OK');
                                        if ('string' != typeof e)
                                            throw new Error('Expected JS response');
                                        if (new Function(e)(), O._checkGlobalScopeForSettings(), !O.settings.delivered)
                                            throw new Error('Expected settings to be delivered');
                                        t.apply(O, []);
                                    } catch (e) {
                                        try {
                                            n.apply(O, []);
                                        } catch (e) {
                                            console.error(e);
                                        }
                                    }
                            }, r.send();
                        }
                    },
                    {
                        key: '_lazyloadSettings',
                        value: function (s) {
                            function n(e, t) {
                                var n = v(function () {
                                        if (e)
                                            return [e];
                                        try {
                                            return [
                                                null,
                                                JSON.parse(t)
                                            ];
                                        } catch (e) {
                                            return [e];
                                        }
                                    }(), 2), r = n[0], i = n[1];
                                if (r)
                                    return console.error(r), O.data.opt[O.settings.name] = void 0, 'function' == typeof s && s(r), r;
                                if (O.data.opt[O.settings.name] = i) {
                                    var o, a = _(i);
                                    try {
                                        for (a.s(); !(o = a.n()).done;) {
                                            var c = o.value, d = O.getConfigOfPlacementId(c.id);
                                            d ? (c.bias && ('number' == typeof c.bias ? d.bias = c.bias : 'object' === p(c.bias) && (d.bias = c.bias.value, d.randomBias = 0, 'random' === c.bias.type ? d.randomBias = c.bias.value : 'sloped' === c.bias.type && (d.biasSlope = c.bias.value))), c.cutoff_price && (d.cutoffPrice = c.cutoff_price)) : u.log('Yieldlove', 'debug', 'Did not update opt.json for "'.concat(c.id, '". Unit is not in this vertical.'));
                                        }
                                    } catch (e) {
                                        a.e(e);
                                    } finally {
                                        a.f();
                                    }
                                }
                                'function' == typeof s && s(null, i);
                            }
                            var u = this, r = setTimeout(function () {
                                    n(new Error('Request timed out'));
                                }, 2000), e = 'https://cdn-a.yieldlove.com/v2/opt.json?' + O.domain;
                            YLHH.utils.request(e, null, function (e, t) {
                                clearTimeout(r), n(e, t);
                            }, null, 'GET');
                        }
                    },
                    {
                        key: '_onSettingsAvailable',
                        value: function () {
                            var p = this;
                            this.name = this.settings.name, this.domain = this.settings.name.split('_')[0], this.settings.a9Enabled = !!this.placementConfig.filter(function (e) {
                                return e.a9Targeted;
                            }).length, this.settings.a9Enabled ? (this.log('Amazon', 'DEBUG', 'A9 is enabled'), this.amazon.loadScript({
                                apsTagSlots: void 0,
                                bidder: this
                            })) : YLHH.cmd.onready.amazonBids();
                            var e = YLHH.utils, g = e.matchMinWidth, b = e.matchMinHeight, i = e.matchMaxWidth, o = e.matchMaxHeight;
                            if (this.placementConfig = this.placementConfig.map(function (f) {
                                    if (f.getMaxSize = function () {
                                            var e = 0, t = 0;
                                            if (!f.sizes)
                                                return [
                                                    0,
                                                    0
                                                ];
                                            var n, r = _(f.sizes);
                                            try {
                                                for (r.s(); !(n = r.n()).done;) {
                                                    var i = n.value;
                                                    i[0] > e && (e = i[0]), i[1] > t && (t = i[1]);
                                                }
                                            } catch (e) {
                                                r.e(e);
                                            } finally {
                                                r.f();
                                            }
                                            return [
                                                e,
                                                t
                                            ];
                                        }, f.isOversize = function (e) {
                                            if (2 !== e.length)
                                                return !0;
                                            var t = f.getMaxSize();
                                            return e[0] > t[0] || e[1] > t[1];
                                        }, 'sizes' in f) {
                                        if (f.sizes = f.sizes.reduce(function (e, t) {
                                                if ('string' != typeof t)
                                                    return e.push(t), e;
                                                var n, r, i, o, a, c, d, s, u, l = t.split(':');
                                                return l.length < 2 ? 2 === t.split('x').length ? (r = (n = v(t.split('x'), 2))[0], i = n[1], e.push([
                                                    parseInt(r),
                                                    parseInt(i)
                                                ])) : p.log('Yieldlove', 'ERROR', 'Invalid string in size configuration. Expected breakpoints followed by a ":".', l) : !0 !== f.breakpointMatch && (a = (o = v(l, 2))[0], c = o[1], s = (d = v(a.split('x'), 2))[0], u = d[1], g(s) && b(u) && (f.breakpointMatch = !0, e = e.concat(c.split(',').map(function (e) {
                                                    return e.split('x').map(function (e) {
                                                        return parseInt(e);
                                                    });
                                                })))), e;
                                            }, []), !('mediaTypes' in f)) {
                                            for (var e in (f.width = 1, f.height = 1, f.sizes)) {
                                                var t = f.sizes[e][0], n = f.sizes[e][1];
                                                t > f.width && (f.width = t), n > f.height && (f.height = n);
                                            }
                                            f.mediaTypes = {
                                                banner: { sizes: f.sizes },
                                                video: {
                                                    context: 'outstream',
                                                    playerSize: [[
                                                            f.width,
                                                            f.height
                                                        ]]
                                                }
                                            };
                                        }
                                        var r = [];
                                        return f.bids = f.bids.map(function (e) {
                                            if (e.params && e.params.require) {
                                                if (e.params.require.minWidth && !g(e.params.require.minWidth))
                                                    return null;
                                                if (e.params.require.minHeight && !b(e.params.require.minHeight))
                                                    return null;
                                                if (e.params.require.maxWidth && !i(e.params.require.maxWidth))
                                                    return null;
                                                if (e.params.require.maxHeight && !o(e.params.require.maxHeight))
                                                    return null;
                                                delete e.params.require;
                                            }
                                            if ('orbidder' === e.bidder && (e.params = e.params || {}, e.params.accountId = e.params.accountId || 'yieldlove', e.params.placementId = e.params.placementId || f.placementId, f.cutoffPrice && (e.params.bidfloor = f.cutoffPrice)), 'openx' === e.bidder && void 0 === e.params.platform && (e.params.delDomain = e.params.delDomain || 'yieldlove-d.openx.net'), 'stroeerCore' === e.bidder && void 0 !== p.settings.isStroeer2ndPriceAuction && (e.params.ssat = p.settings.isStroeer2ndPriceAuction ? 1 : 2), 'sonobi' === e.bidder && (e.params.sizes = f.sizes, f.cutoffPrice && (e.params.floor = f.cutoffPrice)), 'indexexchange' === e.bidder.toLowerCase()) {
                                                e.bidder = 'ix', e.params.size = f.sizes[0], e.params.siteId = e.params.siteId || e.params.siteID;
                                                for (var t = 1; t < f.sizes.length; t++)
                                                    r.push({
                                                        bidder: 'ix',
                                                        params: {
                                                            id: e.params.id,
                                                            siteId: e.params.siteId,
                                                            size: f.sizes[t]
                                                        }
                                                    });
                                            }
                                            return 'smartadserver' === e.bidder && f.mediaTypes.video && (e.params.video = e.params.video || {}), e;
                                        }).filter(function (e) {
                                            return null !== e;
                                        }), r.forEach(function (e) {
                                            f.bids.push(e);
                                        }), f;
                                    }
                                }), this.validateSettings(), this.log('Yieldlove', 'DEBUG', 'Finished validating settings'), p.data = new YLHH.Data(p), p.tracker = YLHH.Tracker.init(p), this.settings.hasOwnProperty('ab_test_p_off') && Math.random() < this.settings.ab_test_p_off)
                                return this.log('Yieldlove', 'DEBUG', 'Not using prebid/amazon for this impression (AB-testing)'), this.prebidStatus = l.PrebidStatus.INACTIVE, void YLHH.cmd.onready.bidder();
                            this.pbjs.que.push(function () {
                                p._setUpPrebid(), p._init(), window.setTimeout(function () {
                                    YLHH.cmd.onready.settings();
                                }, 1);
                            });
                        }
                    },
                    {
                        key: '_setUpPrebid',
                        value: function () {
                            var e = O.getKeyPrefixes();
                            O.prebidStatus = l.PrebidStatus.ACTIVE, O.pbjs.bidderSettings = O.pbjs.bidderSettings || {}, O.pbjs.bidderSettings.standard = O.pbjs.bidderSettings.standard || {}, O.pbjs.bidderSettings.standard.adserverTargeting = [], O.pbjs.bidderSettings.standard.adserverTargeting.push({
                                key: 'yieldlove_hb_size',
                                val: function (e) {
                                    return e.width + 'x' + e.height;
                                }
                            });
                            var t, n = _(e);
                            try {
                                for (n.s(); !(t = n.n()).done;) {
                                    var r = t.value;
                                    O.pbjs.bidderSettings.standard.adserverTargeting.push({
                                        key: r + '_adid',
                                        val: function (e) {
                                            return e.adId;
                                        }
                                    }), O.pbjs.bidderSettings.standard.adserverTargeting.push({
                                        key: r + '_pb',
                                        val: function (e) {
                                            return 'video' === e.mediaType ? '' : e.cpm;
                                        }
                                    }), O.pbjs.bidderSettings.standard.adserverTargeting.push({
                                        key: r + '_v_pb',
                                        val: function (e) {
                                            return 'video' === e.mediaType ? e.cpm : '';
                                        }
                                    }), O.pbjs.bidderSettings.standard.adserverTargeting.push({
                                        key: r + '_bidder',
                                        val: function (e) {
                                            return e.bidder;
                                        }
                                    });
                                }
                            } catch (e) {
                                n.e(e);
                            } finally {
                                n.f();
                            }
                        }
                    },
                    {
                        key: 'disableInitialLoad',
                        value: function () {
                            this.settings.stopAdServerRequests || this.settings.ignoreDisablingInitialLoad ? this.log('Yieldlove', 'INFO', 'Bidder.disableInitialLoad() was called, but ignored.') : this.googletag.cmd.push(function () {
                                O.log('Yieldlove', 'DEBUG', 'Preventing DFP from loading.'), O.googletag.pubads().disableInitialLoad(), O.googletag.pubads().isInitialLoadDisabled() || O.log('Yieldlove', 'ERROR', 'Call googletag.pubads().disableInitialLoad() before enabling the services.');
                            });
                        }
                    },
                    {
                        key: 'setConsentString',
                        value: function (t) {
                            var n = this;
                            t ? this.pbjs.que.push(function () {
                                var e = {
                                    tcString: t,
                                    gdprApplies: !0
                                };
                                if (n.log('Yieldlove', 'DEBUG', 'Set static consent string: "'.concat(t, '"')), !window.yieldlove_cmp || !window.yieldlove_cmp.decodeTcString)
                                    return n.log('Yieldlove', 'WARNING', 'GDPR module is not activated properly. Please enable the Consent String Decoder module. Skipping setting the static consent string.'), void n.pbjs.setConfig({ userSync: { userIds: O._getUserIdConfiguration() } });
                                e = window.yieldlove_cmp.decodeTcString(t, e.gdprApplies), n._gdprEnabled = !0, n.pbjs.setConfig({
                                    consentManagement: {
                                        gdpr: C(l.gdprEnforcement, {
                                            allowAuctionWithoutConsent: !0,
                                            cmpApi: 'static',
                                            consentData: { getTCData: e }
                                        })
                                    },
                                    userSync: { userIds: O._getUserIdConfiguration() }
                                });
                            }) : this._gdprEnabled && 'static' !== this.pbjs.getConfig('consentManagement.gdpr.cmpApi') || Object(a.a)(function (e) {
                                return e ? window.__cmp ? void n.log('Yieldlove', 'CRITICAL', new Error('Update the CMP to TCFv2')) : void n.log('Yieldlove', 'WARNING', e) : void n.enableGdpr();
                            });
                        }
                    },
                    {
                        key: 'enableGdpr',
                        value: function () {
                            var e = this;
                            this.log('Yieldlove', 'DEBUG', 'Enabling GDPR in Prebid.js'), this.pbjs.que.push(function () {
                                e._gdprEnabled = !0, e.pbjs.setConfig({
                                    consentManagement: {
                                        gdpr: C(l.gdprEnforcement, {
                                            allowAuctionWithoutConsent: !0,
                                            cmpApi: 'iab',
                                            timeout: 800
                                        })
                                    },
                                    userSync: { userIds: O._getUserIdConfiguration() }
                                });
                            });
                        }
                    },
                    {
                        key: 'sendAdServerRequest',
                        value: function (e) {
                            var t = e.adUnitCodes, n = e.auctionId, r = e.refreshSdgSlotHandler;
                            window.dispatchEvent(new CustomEvent('yieldlove.beforeSendingAdServerRequest', { detail: { auctionId: n } })), O.log('Yieldlove', 'DEBUG', 'Sending adserver request for "'.concat(n, '".'), t);
                            var i = void 0 === t;
                            i && (t = this.activeUnits), O.tag.sendAdServerRequest({
                                adUnitCodes: t,
                                auctionId: n,
                                refreshAll: i,
                                refreshSdgSlotHandler: r
                            });
                        }
                    },
                    {
                        key: 'updateAuctionStatusToFinished',
                        value: function (n, e) {
                            var r = this;
                            this.log('Yieldlove', 'DEBUG', 'The auction of '.concat(e, ' is finished. The current auction ID of pbjs is ').concat(this.pbjs.getCurrentAuctionId()));
                            var t = this.data.auctions[e];
                            t.auctionStatus !== l.AuctionStatus.ABORTED && (t.auctionStatus = l.AuctionStatus.FINISHED), this.adUnits.forEach(function (e) {
                                var t = [e.code].concat(e.aliases);
                                void 0 !== n.find(function (e) {
                                    return -1 !== t.indexOf(e);
                                }) && (-1 !== [
                                    l.AuctionStatus.AUCTIONING,
                                    l.AuctionStatus.REQUESTED_BIDS
                                ].indexOf(e.auctionStatus) ? e.auctionStatus = l.AuctionStatus.FINISHED : r.log('Yieldlove', 'WARNING', '"'.concat(e.code, '" triggered resume, but auctionStatus was not AUCTIONING.')));
                            });
                        }
                    },
                    {
                        key: '_getUserIdConfiguration',
                        value: function () {
                            return l.userIdConfiguration.autIdSystem.params.url = '//aut.'.concat(this.domain), this.settings.prebid_modules = this.settings.prebid_modules || [], 'string' == typeof this.settings.prebid_modules && (this.settings.prebid_modules = this.settings.prebid_modules.split(',')), this.settings.prebid_modules.reduce(function (e, t) {
                                var n = l.userIdConfiguration[t];
                                return n && e.push(n), e;
                            }, []);
                        }
                    },
                    {
                        key: '_init',
                        value: function () {
                            this.log('Yieldlove', 'DEBUG', 'Initiating.'), this.allUnits = this.placementConfig.map(function (e) {
                                return e.code;
                            }), this.pbjs.que.push(function () {
                                var e = O.adUnits.reduce(function (e, t) {
                                    return e[t.code] = t, e;
                                }, {});
                                O.pbjs.setConfig({
                                    Yieldlove: {
                                        global: O.settings,
                                        placement: e,
                                        prebid: !0,
                                        postbid: !1
                                    }
                                }), O.bindEvents(), O._setupUnits();
                            });
                        }
                    },
                    {
                        key: '_setupUnits',
                        value: function () {
                            var t = this, e = this._filterDevice(this.placementConfig), n = this.placementConfig.reduce(function (e, t) {
                                    var n = t.code, r = t.aliases;
                                    return e.concat(n, r);
                                }, []);
                            this.activeUnits = this.settings.activeUnits.filter(function (e) {
                                return -1 !== n.indexOf(e);
                            }), O.log('Yieldlove', 'DEBUG', 'Setting up device-country filtered units:', this.activeUnits), this.adUnits = e.filter(function (e) {
                                return -1 < O.activeUnits.indexOf(e.code);
                            }).map(function (e) {
                                return e.auctionStatus = l.AuctionStatus.INIT, t.adUnitsMap[e.code] = e, t.data.adUnitData[e.code] = {}, e;
                            }), this._validateUnits(), this.pbjs.que.push(function () {
                                O.log('Prebid', 'DEBUG', 'Setting up adUnits:', O.adUnits), O.pbjs.adUnits.forEach(O.pbjs.removeAdUnit), O.pbjs.addAdUnits(O.adUnits);
                            }), O.tag.onAdUnitsAvailable(), this.pbjs.que.push(function () {
                                YLHH.cmd.onready.bidder();
                            });
                        }
                    },
                    {
                        key: 'getAdUnitByCode',
                        value: function (t) {
                            return this.adUnits.find(function (e) {
                                return e.code === t;
                            });
                        }
                    },
                    {
                        key: 'getConfigOfPlacementId',
                        value: function (t) {
                            return this.placementConfig.find(function (e) {
                                return parseInt(e.placementId) === parseInt(t);
                            });
                        }
                    },
                    {
                        key: 'getOriginalAdUnit',
                        value: function (t) {
                            var n = this.placementConfig.find(function (e) {
                                return e.code === t;
                            });
                            return n ? this.placementConfig.find(function (e) {
                                return e.refreshPlacementId && e.refreshPlacementId.toString() === n.placementId;
                            }) || n : null;
                        }
                    },
                    {
                        key: 'getAdUnitByGPTSlot',
                        value: function (e) {
                            var t = e.getSlotElementId();
                            if (t in this.getAdUnitByGPTSlotCache)
                                return this.getAdUnitByGPTSlotCache[t];
                            var n = this.tag.getAdUnitByGPTSlotCore(e);
                            return n && (this.getAdUnitByGPTSlotCache[t] = n), n;
                        }
                    },
                    {
                        key: '_filterDevice',
                        value: function (e) {
                            if (!this.settings.hasOwnProperty('targetDevice'))
                                return e;
                            var r, t = this.settings.targetDevice;
                            switch (t) {
                            case 'userAgent':
                                r = /Mobi/i.test(navigator.userAgent) ? 'mobile' : 'web';
                                break;
                            case 'breakpoint':
                                r = 'web';
                                var n = this.settings.breakpoint || 768;
                                void 0 !== window.matchMedia ? window.matchMedia('only screen and (min-width: ' + n + 'px)').matches || (r = 'mobile') : window.innerWidth <= n && (r = 'mobile');
                                break;
                            default:
                                return this.log('Yieldlove', 'DEBUG', 'Device detection disabled.'), e;
                            }
                            return this.log('Yieldlove', 'DEBUG', 'Device identified as ' + r + ' via ' + t + ' method.'), e.filter(function (e) {
                                var t = e.breakpointMin || null, n = e.breakpointMax || null;
                                if (null === t && null === n)
                                    return (e.hasOwnProperty('device') ? e.device : 'web') === r;
                                if (null !== t)
                                    if (void 0 !== window.matchMedia) {
                                        if (!window.matchMedia('only screen and (min-width: ' + t + 'px)').matches)
                                            return !1;
                                    } else if (window.innerWidth <= t)
                                        return !1;
                                if (null !== n)
                                    if (void 0 !== window.matchMedia) {
                                        if (!window.matchMedia('only screen and (max-width: ' + n + 'px)').matches)
                                            return !1;
                                    } else if (window.innerWidth >= n)
                                        return !1;
                                return !0;
                            });
                        }
                    },
                    {
                        key: '_checkUrlForSettings',
                        value: function () {
                            var e = window.location.href.match(/[?&]yldebug=([^&]*)/);
                            e && (this.settings.logLevel = e[1].toUpperCase(), this.log('Yieldlove', 'INFO', 'Loglevel set to "' + this.settings.logLevel + '" via url parameter.'));
                        }
                    },
                    {
                        key: '_checkGlobalScopeForSettings',
                        value: function () {
                            'object' === ('undefined' == typeof yieldlove_site_settings ? 'undefined' : p(yieldlove_site_settings)) ? (this.placementConfig = YLHH.utils.mergeLists(this.placementConfig, yieldlove_site_settings.placement), this.settings = C(this.settings, yieldlove_site_settings.global), this.settings.delivered = !0) : 'yieldlove_site_settings' in window && 'object' === p(window.yieldlove_site_settings) ? (this.placementConfig = YLHH.utils.mergeLists(this.placementConfig, window.yieldlove_site_settings.placement), this.settings = C(this.settings, window.yieldlove_site_settings.global), this.settings.delivered = !0) : this.settings.delivered = !1, 'undefined' != typeof yieldlove_stop_adserver_requests ? this.settings.stopAdServerRequests = !!yieldlove_stop_adserver_requests : this.settings.stopAdServerRequests = !!window.yieldlove_stop_adserver_requests;
                        }
                    },
                    {
                        key: 'log',
                        value: function (e, t) {
                            e = e || 'Yieldlove';
                            for (var n = {
                                        DEBUG: 'logMessage',
                                        INFO: 'logInfo',
                                        WARNING: 'logWarn',
                                        ERROR: 'logError',
                                        CRITICAL: 'logError'
                                    }[(t = t || 'DEBUG').toUpperCase()] || 'logError', r = [e], i = 2; i < arguments.length; i++)
                                r.push(arguments[i]);
                            this.pbjs.que.push(function () {
                                O.pbjs.utils[n].apply(O.pbjs, r);
                                try {
                                    r = JSON.stringify(r);
                                } catch (e) {
                                    r = r.toString();
                                }
                                var e = O.pbjs.getCurrentAuctionId() || 'Undefined';
                                O._log[e] = O._log[e] || [], O._log[e].push(r);
                            });
                        }
                    },
                    {
                        key: 'validateSettings',
                        value: function () {
                            function e(e) {
                                void 0 === O.settings[e] && O.log('Yieldlove', 'WARNING', '\'' + e + '\' parameter missing.');
                            }
                            e('timeout'), e('targetDevice'), e('name');
                        }
                    },
                    {
                        key: '_validateUnits',
                        value: function () {
                            var e, t = this.adUnits.reduce(function (e, t) {
                                    var n = t.code, r = t.aliases;
                                    return e.concat(n, r);
                                }, []), n = _(this.settings.activeUnits);
                            try {
                                for (n.s(); !(e = n.n()).done;) {
                                    var r = e.value;
                                    -1 === this.activeUnits.indexOf(r) ? this.log('Yieldlove', 'WARNING', 'Ad unit "'.concat(r, '" has been deactivated (by server)')) : -1 === t.indexOf(r) && this.log('Yieldlove', 'WARNING', 'Ad unit "'.concat(r, '" has been deactivated (by client [breakpoints])'));
                                }
                            } catch (e) {
                                n.e(e);
                            } finally {
                                n.f();
                            }
                        }
                    },
                    {
                        key: 'getKeyPrefixes',
                        value: function () {
                            return this.settings.hasOwnProperty('key_prefix') ? (this.settings.key_prefix || 'yieldlove_hb').split(',').map(function (e) {
                                return e.trim();
                            }) : ['yieldlove_hb'];
                        }
                    },
                    {
                        key: 'convertPriceToKey',
                        value: function (e) {
                            return e < 20 ? YLHH.utils.convertFloatToStr(e, 100, 2) : e < 60 ? YLHH.utils.convertFloatToStr(e, 20, 2) : e < 179.9 ? YLHH.utils.convertFloatToStr(e, 10, 2) : '179.90';
                        }
                    },
                    {
                        key: 'adjustBid',
                        value: function (e, t) {
                            if (!('settings' in this))
                                throw new Error('this is not YLHH.bidder');
                            var n, r = e;
                            return O.settings.newSettings || t.bidderCode + 'BidAdjustment' in O.settings && (r *= 1 + (n = O.settings[t.bidderCode + 'BidAdjustment']), O.log(t.bidderCode, 'DEBUG', 'Applying ' + 100 * n + '% cpm adjustment: ' + r)), t.yieldlove = t.yieldlove || {}, t.yieldlove.cpm = {
                                ssp: t.cpm,
                                net: e,
                                adjusted: r
                            }, t.yieldlove.auction = {
                                second: 0,
                                third: 0
                            }, r;
                        }
                    },
                    {
                        key: 'updateSecondPriceForEligibleBids',
                        value: function () {
                            var e = O.pbjs.getEligibleBids();
                            O.log('Yieldlove', 'DEBUG', 'Start updating second price for bids of', e);
                            var a = {}, c = [];
                            e.forEach(function (e) {
                                var t = a.hasOwnProperty(e.adUnitCode) ? a[e.adUnitCode] : {
                                    first: 0,
                                    second: 0,
                                    third: 0
                                };
                                a[e.adUnitCode] = t;
                                var n = (e.yieldlove.auction = t).first, r = t.second, i = t.third, o = e.yieldlove.cpm.adjusted;
                                n < o ? (t.third = t.second, t.second = t.first, t.first = e.yieldlove.cpm.adjusted) : r < o ? (t.third = t.second, t.second = e.yieldlove.cpm.adjusted) : i < o && (t.third = e.yieldlove.cpm.adjusted), 'stroeerCore' === e.bidderCode && e.hasOwnProperty('ad') && e.ad && c.push(e);
                            }), c.forEach(function (e) {
                                e.ad = O.pbjs.stroeer.renderAd(e.originalAd || e.ad, e);
                            }), Object(f.debug)(function () {
                                Object(f.dispatchEvent)('yltest.updatedSecondPriceForEligibleBids', { bids: e });
                            });
                        }
                    },
                    {
                        key: 'start',
                        value: function (t) {
                            this.log('Yieldlove', 'DEBUG', 'Starting');
                            try {
                                O.startAuction(void 0, t);
                            } catch (e) {
                                O.log('Yieldlove', 'ERROR', e), YLHH.cmd.onready.bidder(), O.startAuction(void 0, t);
                            }
                        }
                    },
                    {
                        key: 'startAuction',
                        value: function (d, s, e) {
                            var u = 2 < arguments.length && void 0 !== e ? e : {};
                            Array.isArray(d) && 1 === d.length && void 0 === d[0] && (d = void 0), YLHH.cmd.push.bidder(function () {
                                var t = u.auctionId || O.pbjs.utils.generateUUID();
                                if (O.pbjs.getConfig('debug') && (console.groupCollapsed('%cYieldlove', 'display: inline-block; color: #fff; background: #c92a2a; padding: 1px 4px; border-radius: 3px;', 'Stacktrace of auction "'.concat(t, '"')), console.trace('Stacktrace of auction "'.concat(t, '"')), console.groupEnd()), O.data.currentAuctionId = t, O.data.auctions[t] = {
                                        adUnitCodes: d,
                                        ifRefreshAll: void 0 === d,
                                        auctionStatus: l.AuctionStatus.AUCTIONING,
                                        startTime: Date.now()
                                    }, window.dispatchEvent(new CustomEvent('yieldlove.auctionStarted', {
                                        detail: {
                                            options: u,
                                            auctionId: t
                                        }
                                    })), YLHH.cmd.onready.auctionStarted({
                                        auctionId: t,
                                        adUnitCodes: d,
                                        options: u
                                    }), Object(f.debug)(function () {
                                        Object(f.dispatchEvent)('yltest.auctionStarted', {
                                            auctionId: t,
                                            adUnitCodes: d
                                        });
                                    }), void 0 !== d) {
                                    O.pbjs.utils.isArray(d) || (d = [d]);
                                    var e = d.reduce(function (e, n) {
                                        var t = O.adUnits.filter(function (e) {
                                            return -1 !== (e.aliases || []).concat([e.code]).indexOf(n);
                                        });
                                        if (0 === t.length) {
                                            var r = O.placementConfig.filter(function (e) {
                                                var t = e.code;
                                                return -1 !== (e.aliases || []).concat([t]).indexOf(n);
                                            });
                                            if (0 < r.length) {
                                                O.adUnits = O.adUnits.concat(r);
                                                var i, o = _(r);
                                                try {
                                                    for (o.s(); !(i = o.n()).done;) {
                                                        var a = i.value;
                                                        O.activeUnits.push(a.code), O.activeUnits = O.activeUnits.concat(a.aliases);
                                                    }
                                                } catch (e) {
                                                    o.e(e);
                                                } finally {
                                                    o.f();
                                                }
                                                O.pbjs.que.push(function () {
                                                    O.log('Prebid', 'DEBUG', 'Setting up new adUnits:', r), O.pbjs.adUnits.forEach(O.pbjs.removeAdUnit), O.pbjs.addAdUnits(O.adUnits);
                                                }), t = r;
                                            }
                                        }
                                        return 0 === t.length ? (O.log('Yieldlove', 'CRITICAL', 'Auction for unknown ad unit ' + n + ' can not be started.'), O.tag.reportUnknownAdUnit(n)) : e = e.concat(t.map(function (e) {
                                            return e.code;
                                        })), e;
                                    }, []);
                                    if (0 === e.length)
                                        return O.log('Yieldlove', 'CRITICAL', 'Starting auction failed for the input', d), O.data.auctions[t].auctionStatus = l.AuctionStatus.ABORTED, void O.onAuctionEnd(d, s, t, u);
                                    d = e, O.log('Yieldlove', 'DEBUG', 'Starting auction "'.concat(t, '" for ad unit codes: '), d);
                                } else {
                                    if (O.log('Yieldlove', 'DEBUG', 'Starting auction "'.concat(t, '" for all active units'), O.activeUnits), O.placementConfig) {
                                        var n = O.placementConfig.filter(function (e) {
                                            return !1 === e.active;
                                        });
                                        if (n.length) {
                                            O.log('Yieldlove', 'DEBUG', 'Not Starting auction "'.concat(t, '" for the following inactive units'), n.map(function (e) {
                                                return e.code;
                                            }));
                                            var r, i = _(n);
                                            try {
                                                for (i.s(); !(r = i.n()).done;) {
                                                    var o = r.value;
                                                    O.log('Yieldlove', 'DEBUG', 'The unit '.concat(o.code, ' ("').concat(o.aliases.join('", '), '") is:\n - ').concat((o.inactiveReason || []).join('\n - ')));
                                                }
                                            } catch (e) {
                                                i.e(e);
                                            } finally {
                                                i.f();
                                            }
                                        }
                                    }
                                    if (!O.activeUnits || !O.activeUnits.length)
                                        return O.log('Yieldlove', 'DEBUG', 'No active units, resuming'), O.log('Yieldlove', 'CRITICAL', 'Auction has been aborted.'), void O.onAuctionEnd(d, s, t, u);
                                }
                                var a, c = void 0 === d ? O.activeUnits : d;
                                (O.data.auctions[t].adUnits = c).forEach(function (e) {
                                    O.adUnitsMap.hasOwnProperty(e) && (O.adUnitsMap[e].auctionStatus = l.AuctionStatus.AUCTIONING, O.data.adUnitData[e] = O.data.adUnitData[e] || {}, O.data.adUnitData[e].auctionId = t);
                                }), O.data.opt = O.data.opt || {}, !0 !== O.settings.newSettings || O.data.opt[O.settings.name] || (O.data.opt[O.settings.name] = 'loading...', O._lazyloadSettings(function (e, t) {
                                    return e ? O.log('Yieldlove', 'error', 'Opt data did not load in 2000ms') : void O.log('Yieldlove', 'debug', 'Opt data was loaded', t);
                                })), O.setConsentString(), [
                                    t,
                                    t + 'amazonBids',
                                    t + 'prebidBids'
                                ].forEach(function (t) {
                                    YLHH.cmd.ready[t] = !1, YLHH.cmd.queue[t] = YLHH.cmd.queue[t] || [], YLHH.cmd.onready[t] = function (e) {
                                        YLHH.cmd.onready.f(t, e);
                                    }, YLHH.cmd.push[t] = function () {
                                        YLHH.cmd.push.f(t, arguments);
                                    }, YLHH.cmd.unshift[t] = function () {
                                        YLHH.cmd.push.f(t, arguments, !0);
                                    }, YLHH.cmd.attachEvent[t] = void 0;
                                }), YLHH.cmd.ready[t] = !1, YLHH.cmd.push[''.concat(t, 'amazonBids')](function (e) {
                                    O.data.auctions[t].a9Bids = e, Object(f.debug)(function () {
                                        return Object(f.dispatchEvent)('yltest.receivedA9Bids', {
                                            bids: e.bids,
                                            auctionId: t
                                        });
                                    });
                                }), YLHH.cmd.push[''.concat(t, 'prebidBids')](function () {
                                    O.data.auctions[t].prebidBids = O.pbjs.getEligibleBids(d), Object(f.debug)(function () {
                                        return Object(f.dispatchEvent)('yltest.receivedPrebidBids', { auctionId: t });
                                    }), O.log('Yieldlove', 'DEBUG', 'All bids are ready for the auction of '.concat(t)), YLHH.cmd.onready[t]();
                                }), YLHH.cmd.push[t](function () {
                                    O.log('Yieldlove', 'DEBUG', 'Received all bids for Auction : '.concat(t)), O.onAuctionEnd(d, s, t, u);
                                });
                                try {
                                    'getConfig' in O.pbjs && O.pbjs.getConfig('Yieldlove.global.a9Enabled') ? (YLHH.cmd.ready[t + 'amazonBids'] = !1, (a = O.amazon.getApsTagSlots(d)) && 0 < a.length ? O.amazon.requestBids(a, t) : YLHH.cmd.onready[t + 'amazonBids']()) : YLHH.cmd.onready[t + 'amazonBids']();
                                } catch (e) {
                                    YLHH.cmd.onready[t + 'amazonBids'](), O.log('Yieldlove', 'ERROR', e);
                                }
                                try {
                                    -1 !== [
                                        l.PrebidStatus.ACTIVE,
                                        l.PrebidStatus.ERROR
                                    ].indexOf(O.prebidStatus) ? (YLHH.cmd.ready[t + 'prebidBids'] = !1, O.pbjs.requestBids({
                                        bidsBackHandler: YLHH.cmd.onready[t + 'prebidBids'],
                                        timeout: u.timeout || O.settings.timeout,
                                        adUnits: void 0,
                                        adUnitCodes: d,
                                        labels: void 0,
                                        auctionId: t
                                    })) : YLHH.cmd.onready[t + 'prebidBids']();
                                } catch (e) {
                                    YLHH.cmd.onready[t + 'prebidBids'](), O.log('Yieldlove', 'ERROR', e);
                                }
                                O.tracker.onBidsRequested(t, a);
                            });
                        }
                    },
                    {
                        key: 'onAuctionEnd',
                        value: function (e, t, n, r) {
                            O.log('Yieldlove', 'DEBUG', 'Handling returned bids of auction "'.concat(n, '".'), e), 'function' == typeof t ? t(O.getAdserverTargeting()) : O.tag.setTargeting(function () {
                                O.sendAdServerRequest(C(r || {}, {
                                    adUnitCodes: e,
                                    auctionId: n
                                })), O.tag.onAuctionEnded();
                            });
                        }
                    },
                    {
                        key: 'applyBias',
                        value: function (e, t, n) {
                            if (0 === e)
                                return 0;
                            if (!n.yieldlove_hb_sucbid || 'true' !== n.yieldlove_hb_sucbid)
                                return 0;
                            e = parseFloat(e);
                            var r = t.bias, r = t.hasOwnProperty('randomBias') && 0 < t.randomBias ? 1 + Math.random() * t.randomBias : t.biasSlope && 1.1 <= r ? YLHH.utils.roundFloat((r - 1.1) / Math.pow(e + 1, t.biasSlope) + 1.1, 100) : 1 < r ? r : 1;
                            t.actualBias = r;
                            var i = t.hasOwnProperty('minPrice') ? t.minPrice : 0;
                            return i < (e *= r) ? e : i;
                        }
                    },
                    {
                        key: 'isAdExchangeCreative',
                        value: function (e) {
                            return O.tag.isAdExchangeCreative(e);
                        }
                    },
                    {
                        key: 'getAdserverTargeting',
                        value: function (e) {
                            var w = this, S = 0 < arguments.length && void 0 !== e ? e : {};
                            O.updateSecondPriceForEligibleBids();
                            var A = this.amazon.getAdserverTargeting(), E = 'getAdserverTargeting' in this.pbjs ? this.pbjs.getAdserverTargeting(void 0, S.bidderCodes, S.bidders) : {}, I = this.getKeyPrefixes();
                            return 'boolean' != typeof this.settings.yieldlove_testad && (this.settings.yieldlove_testad = !(-1 === location.search.toLocaleLowerCase().indexOf('yltest=true')), this.log('Yieldlove', 'DEBUG', 'testad is '.concat(this.settings.yieldlove_testad ? 'active' : 'inactive'))), this.adUnits.reduce(function (e, n) {
                                var t = {}, r = parseInt(n.placementId), i = n.code;
                                t.yieldlove_reload = 'pid:'.concat(r, '.reload:false'), t.yieldlove_meta_reload = 'pid:'.concat(r, '.reload:false'), t.yieldlove_reloads = '0', t.yieldlove_reload_count = '0', t.yieldlove_reloaded = 'never', t.yieldlove_is_reloaded = 'never', w.settings.yieldlove_testad && (t.yieldlove_testad = 'true'), window.yieldlove_ab = window.yieldlove_ab || {}, window.yieldlove_ab.po || (window.yieldlove_ab.po = 'default'), O._updateYieldloveAb(t, r), i in O.pbjs.stroeer.adUnitData || (O.pbjs.stroeer.adUnitData[i] = {}), t.yieldlove_meta = 'pid:' + r + '.sb:f', t.yieldlove_pid = r, t.yieldlove_hb_sucbid = 'false';
                                var o, a = _(I);
                                try {
                                    for (a.s(); !(o = a.n()).done;)
                                        t[o.value + '_unit'] = n.code;
                                } catch (e) {
                                    a.e(e);
                                } finally {
                                    a.f();
                                }
                                if (i in A) {
                                    var c, d = _(w.amazon.getAdserverTargetingKeys());
                                    try {
                                        for (d.s(); !(c = d.n()).done;) {
                                            var s = c.value;
                                            t[s] = A[i][s];
                                        }
                                    } catch (e) {
                                        d.e(e);
                                    } finally {
                                        d.f();
                                    }
                                    t.yieldlove_meta = 'pid:' + r + '.sb:t.pr:t', t.yieldlove_hb_sucbid = 'true', t.yieldlove_hb_prime = 'true';
                                }
                                var u, l, f, p, g = 0;
                                i in E && (u = E[i], l = O.isInstreamVideoTargeting(n, u), f = u[''.concat(I[0], '_adid')], (p = ''.concat(I[0], l ? '_v_pb' : '_pb')) in u && (g = O.pbjs.stroeer.getPriceBucket(f) || u[p], function (e, t) {
                                    if ('number' == typeof S.cutoffPrice) {
                                        if (e < S.cutoffPrice)
                                            return O.log('Yieldlove', 'debug', 'Dismissed bid "'.concat(t, '". CPM ').concat(e, ' is below cutoff option: ').concat(S.cutoffPrice)), 1;
                                    } else if (n.cutoffPrice && e < n.cutoffPrice)
                                        return O.log('Yieldlove', 'debug', 'Dismissed bid "'.concat(t, '". CPM ').concat(e, ' is below cutoff: ').concat(n.cutoffPrice)), 1;
                                }(parseFloat(g), f) ? g = 0 : ((t = C(t, u)).yieldlove_meta = 'pid:' + r + '.sb:t.pr:t', t.yieldlove_hb_sucbid = 'true', t.yieldlove_hb_prime = 'true', t.yieldlove_hb_cpm = O.convertPriceToKey(g))));
                                var b = O.convertPriceToKey(O.applyBias(g, n, t));
                                if ('0.00' != b) {
                                    var v, y = _(I);
                                    try {
                                        for (y.s(); !(v = y.n()).done;) {
                                            var m = v.value;
                                            t[''.concat(m, '_').concat('pb')] = b;
                                        }
                                    } catch (e) {
                                        y.e(e);
                                    } finally {
                                        y.f();
                                    }
                                    O.pbjs.stroeer.adUnitData[i].pricebucket = parseFloat(b);
                                }
                                for (var h in t)
                                    '' === t[h] && delete t[h];
                                return e[n.code] = t, e;
                            }, {});
                        }
                    },
                    {
                        key: 'isInstreamVideoTargeting',
                        value: function (e, t) {
                            return !(!e.mediaTypes || !e.mediaTypes.video || 'insteam' !== e.mediaTypes.video.context || !t[''.concat(O.getKeyPrefixes()[0], '_v_pb')]);
                        }
                    },
                    {
                        key: '_updateYieldloveAb',
                        value: function (e, t) {
                            for (var n in (t = t || parseInt(e.yieldlove_pid), e.yieldlove_ab = [], e.yieldlove_meta_ab = [], window.yieldlove_ab)) {
                                var r;
                                window.yieldlove_ab.hasOwnProperty(n) && (r = window.yieldlove_ab[n], e.yieldlove_ab.push(''.concat(n, ':').concat(r)), e.yieldlove_meta_ab.push('pid:'.concat(t, '.').concat(n, ':').concat(r)));
                            }
                        }
                    },
                    {
                        key: 'getAdserverTargetingKeys',
                        value: function (e) {
                            var t = e.a9Targeted, n = e.getAllKeys || t ? this.amazon.getAdserverTargetingKeys() : [], r = this.pbjs.bidderSettings.standard.adserverTargeting.reduce(function (e, t) {
                                    return e.push(t.key), e;
                                }, []);
                            return [].concat([
                                'yieldlove_reload',
                                'yieldlove_reloads',
                                'yieldlove_reloaded'
                            ], [
                                'yieldlove_meta_reload',
                                'yieldlove_reload_count',
                                'yieldlove_is_reloaded',
                                'yieldlove_vis_reload'
                            ], [
                                'yieldlove_meta',
                                'yieldlove_hb_sucbid',
                                'yieldlove_hb_prime',
                                'yieldlove_hb_cpm'
                            ], ['yieldlove_pid'].concat(this.getKeyPrefixes().map(function (e) {
                                return e + '_unit';
                            })), [
                                'yieldlove_ab',
                                'yieldlove_meta_ab',
                                'yieldlove_testad',
                                'yieldlove_no_adx',
                                'yieldlove_empty_fb'
                            ], n, r);
                        }
                    },
                    {
                        key: 'setTargeting',
                        value: function (e, t, n) {
                            var r = 1 < arguments.length && void 0 !== t ? t : void 0, i = 2 < arguments.length && void 0 !== n ? n : {};
                            this.tag.setTargeting(e, r, i);
                        }
                    },
                    {
                        key: 'cloneUnit',
                        value: function (n, r, e) {
                            'boolean' == typeof e && (e = { startAuction: e });
                            var t = e || {
                                    skipDuplex: !1,
                                    startAuction: !1
                                }, i = t.skipDuplex, o = t.startAuction;
                            YLHH.cmd.push.bidder(function () {
                                if (-1 !== O.allUnits.indexOf(r)) {
                                    if (!i)
                                        throw O.log('Yieldlove', 'ERROR', 'In cloneUnit: New code exists.'), 'New code exists.';
                                } else {
                                    var e = {}, t = this.adUnits.filter(function (e) {
                                            return e.code == n || e.codes && -1 !== e.codes.indexOf(n);
                                        }).pop();
                                    if (void 0 === t)
                                        throw 'Wrong old code provided to copy from';
                                    (e = JSON.parse(JSON.stringify(t))).code = r, O.placementConfig.push(e), O.adUnits.push(e), O.activeUnits.push(r), O.allUnits.push(r), O.adUnitsMap[r] = e, O.pbjs.que.push(function () {
                                        O.pbjs.addAdUnits([e]);
                                    });
                                }
                                O.getAdUnitByGPTSlotCache = {}, O.tag.getGptSlots().clearCache(), o && O.startAuction(r, void 0);
                            });
                        }
                    },
                    {
                        key: 'bindEvents',
                        value: function () {
                            this.pbjs.que.push(function () {
                                function e(e) {
                                    var t = O.data.auctions[e.auctionId];
                                    !t || t.auctionStatus !== l.AuctionStatus.INIT && t.auctionStatus !== l.AuctionStatus.AUCTIONING || (t.auctionStatus = l.AuctionStatus.REQUESTED_BIDS, O.log('Yieldlove', 'Info', 'Update auction status to REQUESTED_BIDS.', e, O.data.auctions[e.auctionId]));
                                }
                                O.pbjs.onEvent('auctionInit', e), O.pbjs.onEvent('auctionEnd', e), O.pbjs.onEvent('bidWon', function (e) {
                                    'video' === e.mediaType && (O.getAdUnitByCode(e.adUnitCode).refreshInterval = 1 / 0);
                                });
                                try {
                                    var n = function () {
                                        if (document.currentScript)
                                            return document.currentScript.src;
                                        var e = document.querySelectorAll('[src*="yieldlove-bidder"]');
                                        return 1 === e.length ? e[0].src : void 0;
                                    }();
                                    if (!n)
                                        throw new Error('Script can not be identified');
                                    window.addEventListener('error', function (e) {
                                        if (e.filename === n && (O.onError(), O.pbjs.getConfig('Yieldlove.global.trackException'))) {
                                            if ('error' in e && void 0 !== e.error)
                                                return O.exceptionTracker.onException(e);
                                            var t = {};
                                            try {
                                                t.event = JSON.parse(JSON.stringify(e));
                                            } catch (e) {
                                                O.log('Yieldlove', 'ERROR', e), t.e = 'unparsableError';
                                            }
                                            return O.exceptionTracker.onException(t, e.error);
                                        }
                                    });
                                } catch (e) {
                                }
                                O.tag.bindEvents(), O.googletag.cmd.push(function () {
                                    O.googletag.pubads().addEventListener('slotRenderEnded', function (e) {
                                        var t, n = e.slot, r = O.getAdUnitByGPTSlot(n);
                                        r && (t = document.getElementById(n.getSlotElementId()), O.log('Yieldlove', 'DEBUG', 'Render ended for slot: ' + r.placementName, O.tracker.getTargetingMaps()[n.getSlotElementId()], t), O.tracker.onSlotRendered(e), t && O.settings.resizeAds && (e.isEmpty ? t.style.display = 'none' : null === e.lineItemId && (t.style.width = e.size[0], t.style.height = e.size[1])));
                                    });
                                });
                            }), this.bindEvents = function () {
                            };
                        }
                    },
                    {
                        key: 'forceDirectRendering',
                        value: function () {
                            throw new Error('The direct rendering module did not load, yet.');
                        }
                    },
                    {
                        key: 'onError',
                        value: function () {
                            try {
                                var e = O.adUnits.filter(function (e) {
                                    return e.auctionStatus === l.AuctionStatus.FINISHED;
                                });
                                -1 !== [
                                    l.PrebidStatus.LOADING,
                                    l.PrebidStatus.ACTIVE
                                ].indexOf(O.prebidStatus) && 0 === e.length && (O.prebidStatus = l.PrebidStatus.ERROR, O.log('Yieldlove', 'ERROR', 'Wrapper has been set to inactive after an error'));
                            } catch (e) {
                            } finally {
                                O.tag.onError();
                            }
                        }
                    }
                ]), c);
                function c(e, t, n, r, i, o) {
                    !function (e) {
                        if (!(e instanceof c))
                            throw new TypeError('Cannot call a class as a function');
                    }(this), (O = this).name = e, this.placementConfig = t, this.settings = n, this.googletag = r, this.activeAuctions = [], this.pbjs = i, this.SDG = o, this.amazon = YLHH.A9, this.adUnits = [], this.adUnitsMap = {}, this._log = {}, this.targeting = {}, this.prebidStatus = l.PrebidStatus.LOADING, this._loadUnloadedDisabled = !1, this._resetData = !0, this.getAdUnitByGPTSlotCache = {}, this._gdprEnabled = !1, this._withoutGdpr = !1, this.tag = window.YLHH.Tag.init(this, o), YLHH.hasOwnProperty('ExceptionTracker') && (this.exceptionTracker = YLHH.ExceptionTracker.init(this)), YLHH.hasOwnProperty('TimeTracker') && (this.timeTracker = YLHH.TimeTracker.init(this)), YLHH.hasOwnProperty('optimizePriceBucket') && YLHH.optimizePriceBucket.init(this), this._checkUrlForSettings(), this._checkGlobalScopeForSettings(), this.settings.cmp && (Object(a.b)(this), this._waitConsentFromCmp()), this.disableInitialLoad(), this.pbjs.que.push(function () {
                        O.uid = O.pbjs.utils.generateUUID();
                    }), this.settings.delivered && !this.settings.unitTesting ? this._onSettingsAvailable() : this._downloadSettings(O._onSettingsAvailable, function () {
                        O.log('Yieldlove', 'CRITICAL', 'Configuration could not be loaded.'), O.prebidStatus = l.PrebidStatus.INACTIVE, O.data = new YLHH.Data(O), O.tracker = YLHH.Tracker.init(O), O.adUnits = [], O.allUnits = [], O.activeUnits = [], O.pbjs.que.push(function () {
                            YLHH.cmd.onready.bidder();
                        });
                    });
                }
            },
            function (e, t, n) {
                'use strict';
                t.b = function (e) {
                    l = e;
                }, t.a = f, t.c = function (e, n) {
                    var t = e.timeout, r = void 0 === t ? null : t, i = e.successOnly, o = void 0 !== i && i, a = 0, c = !1, d = !1, s = setInterval(function () {
                            if (s)
                                return a += 10, r && !1 === o && r <= a ? (l.log('YieldloveCmp', 'DEBUG', 'Reached timeout to wait for CMP ('.concat(a, 'ms). Invoke the callback without consent')), u(!1, null)) : void f(function (e) {
                                    d || (e ? window.__cmp && !1 === o && (l.log('YieldloveCmp', 'CRITICAL', new Error('Update the CMP to TCFv2')), u(!1, null)) : (l.log('YieldloveCmp', 'DEBUG', 'Detected TCF API after '.concat(a, 'ms. Attaching Event listener and waiting for user action.')), d = !0, clearInterval(s), window.__tcfapi('addEventListener', 2, function (e, t) {
                                        return !1 === o && !1 === t || (t || !1 === o) && !e.gdprApplies ? u(t, e) : void ('tcloaded' !== e.eventStatus && 'useractioncomplete' !== e.eventStatus || (window.__tcfapi('removeEventListener', 2, function () {
                                        }, e.listenerId), l.log('YieldloveCmp', 'DEBUG', 'Consent Data is available after '.concat(a, 'ms'), e), u(t, e)));
                                    })));
                                });
                        }, 10);
                    function u(e, t) {
                        s && (clearInterval(s), s = void 0), !1 === c && (c = !0, n(t, e));
                    }
                };
                var l = null;
                function f(n) {
                    try {
                        '__tcfapi' in window || function () {
                            if (!('__tcfapi' in window)) {
                                for (var a, e, t = window;;) {
                                    try {
                                        if ('function' == typeof t.__tcfapi) {
                                            e = t.__tcfapi;
                                            break;
                                        }
                                    } catch (e) {
                                    }
                                    try {
                                        if (t.frames.__tcfapiLocator) {
                                            a = t;
                                            break;
                                        }
                                    } catch (e) {
                                    }
                                    if (t === window.top)
                                        break;
                                    t = t.parent;
                                }
                                if (e)
                                    return window.__tcfapi = e;
                                if (a)
                                    return window.addEventListener('message', r, !1), window.__tcfapi = function (e, t, n, r) {
                                        var i = Math.random().toString(), o = {
                                                __tcfapiCall: {
                                                    command: e,
                                                    parameter: r,
                                                    version: t,
                                                    callId: i
                                                }
                                            };
                                        c[i] = n, a.postMessage(o, '*');
                                    };
                                throw new Error('No TCFv2 CMP found.');
                            }
                        }(), window.__tcfapi('ping', 2, function (e, t) {
                            return e && !1 !== t ? e && 'CMP not found' === e.msg ? n(new Error(e.msg)) : void n(null, e) : n(new Error('CMP not found'));
                        });
                    } catch (e) {
                        n(e);
                    }
                }
                var c = {}, i = {};
                function r(e) {
                    var t = {};
                    try {
                        t = 'string' == typeof e.data ? JSON.parse(e.data) : e.data;
                    } catch (e) {
                    }
                    var n, r = t.__tcfapiReturn;
                    r && (r.returnValue && r.returnValue.listenerId && c[r.callId] && (i[r.returnValue.listenerId] = c[r.callId]), 'function' == typeof (n = c[r.callId] || i[r.returnValue.listenerId]) && (n(r.returnValue, r.success), c[r.callId] = null));
                }
            },
            function (e, t, n) {
                function i() {
                    return (i = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function o(e) {
                    return (o = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                var a = n(2).HbRenderState;
                e.exports = {
                    loaded: !1,
                    loadScript: function (t, n) {
                        if (void 0 === YLHH.A9.loaded)
                            return setTimeout(function () {
                                YLHH.A9.loadScript(t, n);
                            }, 10);
                        if (!0 === YLHH.A9.loaded)
                            return YLHH.A9.loadCallback(t, n);
                        YLHH.A9.loaded = void 0, 'object' !== o(t) && (t = {});
                        var r = t.bidder || YLHH.bidder;
                        t = i({
                            pubID: this.getPubId(r),
                            adServer: 'googletag',
                            bidTimeout: r.settings.timeout
                        }, t);
                        var e = 'https://c.amazon-adsystem.com/aax2/apstag.js';
                        r.log('Amazon', 'DEBUG', 'Loading Amazon from ' + e), YLHH.utils.loadScript({
                            url: e,
                            isLoaded: function () {
                                return void 0 !== window.apstag;
                            },
                            callback: function () {
                                r.log('Amazon', 'DEBUG', 'Initiating: ', t), YLHH.A9.renderImp = window.apstag.renderImp, window.apstag.renderImp = YLHH.A9.renderAd, window.console = window.console || {};
                                var e = window.console.error;
                                window.console.error = function () {
                                }, window.apstag.init(t, function () {
                                    window.console.error = e, YLHH.A9.loadCallback(t, n);
                                });
                            }
                        });
                    },
                    loadCallback: function (e, t) {
                        YLHH.A9.loaded = !0, 'object' !== o(e) && (e = {}), 'function' == typeof t && t();
                        var n = e.apsTagSlots || [];
                        n && n.length && YLHH.A9.requestBids(n);
                    },
                    getApsTagSlots: function (e) {
                        'string' == typeof (e = e || YLHH.bidder.activeUnits) && (e = [e]);
                        var t = e.map(function (t) {
                            var e = YLHH.bidder.adUnits.find(function (e) {
                                return e.code === t;
                            });
                            return e || ((e = YLHH.bidder.placementConfig.find(function (e) {
                                return e.code === t;
                            })) ? e : (YLHH.bidder.log('Amazon', 'WARNING', 'Can not identify Apstagslot by adUnitCode: ' + t), !1));
                        }).filter(function (e) {
                            return e && e.a9Targeted;
                        });
                        if (0 === t.length)
                            return !1;
                        var r = !!YLHH.bidder.SDG;
                        return t.map(function (e) {
                            var t = {
                                    slotID: e.code,
                                    sizes: e.sizes
                                }, n = e.code.split('/').pop();
                            return '3505' === YLHH.bidder.settings.a9PubID && n != e.placementName ? t.slotName = r ? '/3505/' + e.placementName : '/53015287/' + e.placementName : t.slotName = e.code, t;
                        });
                    },
                    requestBids: function (e, t) {
                        var n;
                        YLHH.A9.loaded ? (YLHH.bidder.log('Amazon', 'DEBUG', 'Requesting bids: ', e), 0 === e.length ? YLHH.A9.bidsBackHandler([], t) : window.apstag.fetchBids({ slots: e }, function (e) {
                            YLHH.A9.bidsBackHandler(e, t);
                        })) : void 0 === YLHH.A9.loaded ? (n = arguments, setTimeout(function () {
                            YLHH.A9.requestBids.apply(YLHH.A9, n);
                        }, 10)) : YLHH.A9.loadScript({ apsTagSlots: e });
                    },
                    bidsBackHandler: function (e, t) {
                        YLHH.bidder.log('Amazon', 'DEBUG', 'Received bids: ', e);
                        var n = {
                                0: 'library has loaded but no bid request to APS server yet',
                                1: 'Bid request was initiated but DFP was called before APS bid targeting was set'
                            }, r = Date.now() - YLHH.bidder.data.auctions[t].startTime;
                        YLHH.bidder.data.auctions[t].a9Responded = !0, YLHH.A9.adServerTargeting = e.filter(function (e) {
                            return e.auctionId = t, (YLHH.A9.bids[e.amzniid] = e).amznbid in n && YLHH.bidder.log('Amazon', 'ERROR', n[e.amznbid]), '' !== e.amzniid;
                        }).reduce(function (e, t) {
                            return e[t.slotID] = {
                                amznbid: t.amznbid,
                                amzniid: t.amzniid,
                                amznp: t.amznp,
                                amznsz: t.amznsz,
                                timeToRespond: r
                            }, e;
                        }, {}), YLHH.bidder.log('Amazon', 'DEBUG', 'Valid bids received: ', YLHH.A9.adServerTargeting), YLHH.cmd.unshift[t](function () {
                            window.apstag.setDisplayBids();
                        }), YLHH.cmd.onready[t + 'amazonBids'](YLHH.A9.adServerTargeting);
                    },
                    bids: {},
                    getAdserverTargeting: function () {
                        return YLHH.A9.adServerTargeting || {};
                    },
                    getAdserverTargetingKeys: function () {
                        return [
                            'amznbid',
                            'amzniid',
                            'amznsz',
                            'amznp'
                        ];
                    },
                    adserverTargeting: {},
                    renderAd: function (e, t) {
                        var n, r, i, o;
                        YLHH.A9.renderImp.apply(window.apstag, [
                            e,
                            t
                        ]), t in YLHH.A9.bids && (r = (n = YLHH.A9.bids[t]).slotID, i = YLHH.A9.getSizeFromBid(n), (o = YLHH.bidder.data.adUnitData[r].winner) && o.auctionId === n.auctionId && o.adId === n.amzniid || (YLHH.bidder.data.adUnitData[r].winner = {
                            auctionId: n.auctionId,
                            adId: n.amzniid,
                            bidderCode: 'A9',
                            cpmCode: n.amznbid,
                            height: i.height,
                            width: i.width,
                            renderState: a.renderEnded
                        }));
                    },
                    renderImp: void 0 !== window.apstag && 'renderImp' in apstag ? apstag.renderImp : void 0,
                    getSizeFromBid: function (e) {
                        return e.amznsz.split('x').reduce(function (e, t, n) {
                            return 0 === n && (e.width = parseInt(t)), 1 === n && (e.height = parseInt(t)), e;
                        }, {
                            height: 0,
                            width: 0
                        });
                    },
                    getPubId: function (e) {
                        return (e.settings.a9PubID || 3505).toString();
                    }
                };
            },
            function (e, t) {
                e.exports = function (e) {
                    this.bidder = e, this.pbjs = e.pbjs, this.googletag = e.googletag, this.user = { country: this.bidder.settings.country }, this.initTime = Date.now(), this.publisher = { id: this.bidder.settings.publisher_id }, this.opt = {}, this.auctions = {}, this.currentAuctionId = null, this.adUnitData = {};
                };
            }
        ]), function (d) {
            var s = window.pbjsYLHHChunk;
            window.pbjsYLHHChunk = function (e, t, n) {
                for (var r, i, o, a = 0, c = []; a < e.length; a++)
                    i = e[a], u[i] && c.push(u[i][0]), u[i] = 0;
                for (r in t)
                    Object.prototype.hasOwnProperty.call(t, r) && (d[r] = t[r]);
                for (s && s(e, t, n); c.length;)
                    c.shift()();
                if (n)
                    for (a = 0; a < n.length; a++)
                        o = l(l.s = n[a]);
                return o;
            };
            var n = {}, u = { 393: 0 };
            function l(e) {
                if (n[e])
                    return n[e].exports;
                var t = n[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return d[e].call(t.exports, t, t.exports, l), t.l = !0, t.exports;
            }
            l.m = d, l.c = n, l.d = function (e, t, n) {
                l.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: n
                });
            }, l.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default;
                } : function () {
                    return e;
                };
                return l.d(t, 'a', t), t;
            }, l.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, l.p = '', l.oe = function (e) {
                throw console.error(e), e;
            }, l(l.s = 973);
        }({
            0: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'internal', function () {
                    return D;
                }), t.getPrebidInternal = function () {
                    return x;
                }, n.d(t, 'bind', function () {
                    return L;
                }), t.getUniqueIdentifierStr = P, t.generateUUID = function e(t) {
                    return t ? (t ^ (window && window.crypto && window.crypto.getRandomValues ? crypto.getRandomValues(new Uint8Array(1))[0] % 16 : 16 * Math.random()) >> t / 4).toString(16) : ([10000000] + -1000 + -4000 + -8000 + -100000000000).replace(/[018]/g, e);
                }, t.getBidIdParameter = function (e, t) {
                    return t && t[e] ? t[e] : '';
                }, t.tryAppendQueryString = function (e, t, n) {
                    return n ? e + t + '=' + encodeURIComponent(n) + '&' : e;
                }, t.parseQueryStringParameters = function (e) {
                    var t = '';
                    for (var n in e)
                        e.hasOwnProperty(n) && (t += n + '=' + encodeURIComponent(e[n]) + '&');
                    return t.replace(/&$/, '');
                }, t.transformAdServerTargetingObj = function (t) {
                    return t && 0 < Object.getOwnPropertyNames(t).length ? ge(t).map(function (e) {
                        return ''.concat(e, '=').concat(encodeURIComponent(t[e]));
                    }).join('&') : '';
                }, t.getAdUnitSizes = function (e) {
                    if (e) {
                        var t, n = [];
                        return e.mediaTypes && e.mediaTypes.banner && Array.isArray(e.mediaTypes.banner.sizes) ? (t = e.mediaTypes.banner.sizes, Array.isArray(t[0]) ? n = t : n.push(t)) : Array.isArray(e.sizes) && (Array.isArray(e.sizes[0]) ? n = e.sizes : n.push(e.sizes)), n;
                    }
                }, t.parseSizesInput = function (e) {
                    var t = [];
                    if ('string' == typeof e) {
                        var n = e.split(','), r = /^(\d)+x(\d)+$/i;
                        if (n)
                            for (var i in n)
                                ae(n, i) && n[i].match(r) && t.push(n[i]);
                    } else if ('object' === y(e)) {
                        var o = e.length;
                        if (0 < o)
                            if (2 === o && 'number' == typeof e[0] && 'number' == typeof e[1])
                                t.push(Y(e));
                            else
                                for (var a = 0; a < o; a++)
                                    t.push(Y(e[a]));
                    }
                    return t;
                }, t.parseGPTSingleSizeArray = Y, t.parseGPTSingleSizeArrayToRtbSize = function (e) {
                    if (N(e))
                        return {
                            w: e[0],
                            h: e[1]
                        };
                }, t.getWindowTop = M, t.getWindowSelf = G, t.getWindowLocation = q, t.logMessage = F, t.logInfo = z, t.logWarn = W, t.logError = V, t.hasConsoleLogger = function () {
                    return T;
                }, t.debugTurnedOn = Q, t.createInvisibleIframe = function () {
                    var e = document.createElement('iframe');
                    return e.id = P(), e.height = 0, e.width = 0, e.border = '0px', e.hspace = '0', e.vspace = '0', e.marginWidth = '0', e.marginHeight = '0', e.style.border = '0', e.scrolling = 'no', e.frameBorder = '0', e.src = 'about:blank', e.style.display = 'none', e;
                }, t.getParameterByName = $, t.isA = X, t.isFn = Z, t.isStr = ee, t.isArray = te, t.isNumber = ne, t.isPlainObject = re, t.isBoolean = function (e) {
                    return X(e, O);
                }, t.isEmpty = ie, t.isEmptyStr = function (e) {
                    return ee(e) && (!e || 0 === e.length);
                }, t._each = oe, t.contains = function (e, t) {
                    if (ie(e))
                        return !1;
                    if (Z(e.indexOf))
                        return -1 !== e.indexOf(t);
                    for (var n = e.length; n--;)
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
                }, t.hasOwn = ae, t.insertElement = ce, t.triggerPixel = de, t.callBurl = function (e) {
                    var t = e.source, n = e.burl;
                    t === h.S2S.SRC && n && D.triggerPixel(n);
                }, t.insertHtmlIntoIframe = function (e) {
                    var t;
                    e && ((t = document.createElement('iframe')).id = P(), t.width = 0, t.height = 0, t.hspace = '0', t.vspace = '0', t.marginWidth = '0', t.marginHeight = '0', t.style.display = 'none', t.style.height = '0px', t.style.width = '0px', t.scrolling = 'no', t.frameBorder = '0', t.allowtransparency = 'true', D.insertElement(t, document, 'body'), t.contentWindow.document.open(), t.contentWindow.document.write(e), t.contentWindow.document.close());
                }, t.insertUserSyncIframe = se, t.createTrackPixelHtml = function (e) {
                    return e ? '<div style="position:absolute;left:0px;top:0px;visibility:hidden;"><img src="' + encodeURI(e) + '"></div>' : '';
                }, t.createTrackPixelIframeHtml = ue, t.getValueString = le, t.uniques = fe, t.flatten = pe, t.getBidRequest = function (n, e) {
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
                }, t.getKeys = ge, t.getValue = function (e, t) {
                    return e[t];
                }, t.getKeyByValue = function (e, t) {
                    for (var n in e)
                        if (e.hasOwnProperty(n) && e[n] === t)
                            return n;
                }, t.getBidderCodes = function () {
                    return (0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : pbjsYLHH.adUnits).map(function (e) {
                        return e.bids.map(function (e) {
                            return e.bidder;
                        }).reduce(pe, []);
                    }).reduce(pe).filter(fe);
                }, t.isGptPubadsDefined = be, n.d(t, 'getHighestCpm', function () {
                    return ve;
                }), n.d(t, 'getOldestHighestCpmBid', function () {
                    return ye;
                }), n.d(t, 'getLatestHighestCpmBid', function () {
                    return me;
                }), t.shuffle = function (e) {
                    for (var t = e.length; 0 < t;) {
                        var n = Math.floor(Math.random() * t), r = e[--t];
                        e[t] = e[n], e[n] = r;
                    }
                    return e;
                }, t.adUnitsFilter = function (e, t) {
                    return s()(e, t && t.adUnitCode);
                }, t.deepClone = we, t.inIframe = function () {
                    try {
                        return D.getWindowSelf() !== D.getWindowTop();
                    } catch (e) {
                        return !0;
                    }
                }, t.isSafariBrowser = function () {
                    return /^((?!chrome|android|crios|fxios).)*safari/i.test(navigator.userAgent);
                }, t.replaceAuctionPrice = function (e, t) {
                    if (e)
                        return e.replace(/\$\{AUCTION_PRICE\}/g, t);
                }, t.replaceClickThrough = function (e, t) {
                    if (e && t && 'string' == typeof t)
                        return e.replace(/\${CLICKTHROUGH}/g, t);
                }, t.timestamp = function () {
                    return new Date().getTime();
                }, t.getPerformanceNow = function () {
                    return window.performance && window.performance.now && window.performance.now() || 0;
                }, t.hasDeviceAccess = Se, t.checkCookieSupport = Ae, t.delayExecution = function (e, t) {
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
                        return v(e, b({}, t, n[t]));
                    }, {});
                }, t.isValidMediaTypes = function (e) {
                    var t = [
                        'banner',
                        'native',
                        'video'
                    ];
                    return !!Object.keys(e).every(function (e) {
                        return s()(t, e);
                    }) && (!e.video || !e.video.context || s()([
                        'instream',
                        'outstream',
                        'adpod'
                    ], e.video.context));
                }, t.getCookie = function (e) {
                    if (Se()) {
                        var t = window.document.cookie.match('(^|;)\\s*' + e + '\\s*=\\s*([^;]*)\\s*(;|$)');
                        return t ? decodeURIComponent(t[2]) : null;
                    }
                    return null;
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
                }, t.isSlotMatchingAdUnitCode = Ie, t.getGptSlotInfoForAdUnitCode = function (e) {
                    var t;
                    return be() && (t = c()(window.googletag.pubads().getSlots(), Ie(e))), t ? {
                        gptSlot: t.getAdUnitPath(),
                        divId: t.getSlotElementId()
                    } : {};
                }, t.unsupportedBidderMessage = function (e, t) {
                    var n = Object.keys(e.mediaTypes || { banner: 'banner' }).join(', ');
                    return '\n    '.concat(e.code, ' is a ').concat(n, ' ad unit\n    containing bidders that don\'t support ').concat(n, ': ').concat(t, '.\n    This bidder won\'t fetch demand.\n  ');
                }, t.deletePropertyFromObject = Oe, t.removeRequestId = function (e) {
                    return Oe(e, 'requestId');
                }, t.isInteger = Ce, t.convertCamelToUnderscore = function (e) {
                    return e.replace(/(?:^|\.?)([A-Z])/g, function (e, t) {
                        return '_' + t.toLowerCase();
                    }).replace(/^_/, '');
                }, t.cleanObj = function (n) {
                    return Object.keys(n).reduce(function (e, t) {
                        return void 0 !== n[t] && (e[t] = n[t]), e;
                    }, {});
                }, t.pick = function (a, c) {
                    return 'object' === y(a) ? c.reduce(function (e, t, n) {
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
                                !(e = le(r + '.' + t, e)) && '' !== e || n.push(e);
                            }), e = n;
                        } else {
                            if (!ee(e = le(r + '.' + t, e)))
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
                    return te(e) && (!t || e.length === t) && e.every(Ce);
                }, t.setDataInLocalStorage = function (e, t) {
                    _e() && window.localStorage.setItem(e, t);
                }, t.getDataFromLocalStorage = function (e) {
                    if (_e())
                        return window.localStorage.getItem(e);
                }, t.removeDataFromLocalStorage = function (e) {
                    _e() && window.localStorage.removeItem(e);
                }, t.hasLocalStorage = _e, t.fill = function (e, t) {
                    for (var n = [], r = 0; r < t; r++) {
                        var i = re(e) ? we(e) : e;
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
                    return Math.min.apply(Math, f(e));
                }, t.getMaxValueFromArray = function (e) {
                    return Math.max.apply(Math, f(e));
                }, t.compareOn = function (n) {
                    return function (e, t) {
                        return e[n] < t[n] ? 1 : e[n] > t[n] ? -1 : 0;
                    };
                }, t.parseQS = Te, t.formatQS = je, t.parseUrl = function (e, t) {
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
                }, t.deepEqual = He, t.mergeDeep = Ue, t.cyrb53Hash = function (e) {
                    for (var t, n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0, r = function (e, t) {
                                if (Z(Math.imul))
                                    return Math.imul(e, t);
                                var n = (4194303 & e) * (t |= 0);
                                return 4290772992 & e && (n += (4290772992 & e) * t | 0), 0 | n;
                            }, i = 3735928559 ^ n, o = 1103547991 ^ n, a = 0; a < e.length; a++)
                        i = r(i ^ (t = e.charCodeAt(a)), 2654435761), o = r(o ^ t, 1597334677);
                    return i = r(i ^ i >>> 16, 2246822507) ^ r(o ^ o >>> 13, 3266489909), (4294967296 * (2097151 & (o = r(o ^ o >>> 16, 2246822507) ^ r(i ^ i >>> 13, 3266489909))) + (i >>> 0)).toString();
                };
                var r = n(3), i = n(160), o = n.n(i), a = n(10), c = n.n(a), d = n(12), s = n.n(d), u = n(161);
                n.d(t, 'deepAccess', function () {
                    return u.a;
                });
                var l = n(162);
                function f(e) {
                    return function (e) {
                        if (Array.isArray(e))
                            return g(e);
                    }(e) || function (e) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                            return Array.from(e);
                    }(e) || p(e) || function () {
                        throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }();
                }
                function p(e, t) {
                    if (e) {
                        if ('string' == typeof e)
                            return g(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return 'Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? g(e, t) : void 0;
                    }
                }
                function g(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                function b(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
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
                function y(e) {
                    return (y = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                n.d(t, 'deepSetValue', function () {
                    return l.a;
                });
                var m, h = n(5), w = 'Array', S = 'String', A = 'Function', E = 'Number', I = 'Object', O = 'Boolean', C = Object.prototype.toString, _ = Boolean(window.console), T = Boolean(_ && window.console.log), j = Boolean(_ && window.console.info), H = Boolean(_ && window.console.warn), U = Boolean(_ && window.console.error), k = n(9), D = {
                        checkCookieSupport: Ae,
                        createTrackPixelIframeHtml: ue,
                        getWindowSelf: G,
                        getWindowTop: M,
                        getWindowLocation: q,
                        insertUserSyncIframe: se,
                        insertElement: ce,
                        isFn: Z,
                        triggerPixel: de,
                        logError: V,
                        logWarn: W,
                        logMessage: F,
                        logInfo: z,
                        parseQS: Te,
                        formatQS: je,
                        deepEqual: He
                    }, x = {}, B = {}, L = function (e, t) {
                        return t;
                    }.bind(null, 1, B)() === B ? Function.prototype.bind : function (e) {
                        var t = this, n = Array.prototype.slice.call(arguments, 1);
                        return function () {
                            return t.apply(e, n.concat(Array.prototype.slice.call(arguments)));
                        };
                    }, R = (m = 0, function () {
                        return ++m;
                    });
                function P() {
                    return R() + Math.random().toString(16).substr(2);
                }
                function Y(e) {
                    if (N(e))
                        return e[0] + 'x' + e[1];
                }
                function N(e) {
                    return te(e) && 2 === e.length && !isNaN(e[0]) && !isNaN(e[1]);
                }
                function M() {
                    return window.top;
                }
                function G() {
                    return window.self;
                }
                function q() {
                    return window.location;
                }
                function F() {
                    (Q() || J('DEBUG')) && T && console.log.apply(console, K(arguments, 'MESSAGE:'));
                }
                function z() {
                    (Q() || J('INFO')) && j && console.info.apply(console, K(arguments, 'INFO:'));
                }
                function W() {
                    (Q() || J('WARNING')) && H && console.warn.apply(console, K(arguments, 'WARNING:'));
                }
                function V() {
                    (Q() || J('ERROR')) && U && console.error.apply(console, K(arguments, 'ERROR:')), k.emit(h.EVENTS.AUCTION_DEBUG, {
                        type: 'ERROR',
                        arguments: arguments
                    });
                }
                function K(e, t) {
                    var n = 'Prebid';
                    return (e = [].slice.call(e))[0].match(/[^a-zA-z]/) || (n = e.shift()), t && e.unshift(t), 'Prebid' === n ? e.unshift('display: inline-block; color: #fff; background: #3b88c3; padding: 1px 4px; border-radius: 3px;') : 'Yieldlove' === n ? e.unshift('display: inline-block; color: #fff; background: #c92a2a; padding: 1px 4px; border-radius: 3px;') : e.unshift('display: inline-block; color: #fff; background: #2ac961; padding: 1px 4px; border-radius: 3px;'), e.unshift('%c' + n), e;
                }
                function J(e) {
                    var t = {
                            DEBUG: 10,
                            INFO: 20,
                            WARNING: 30,
                            ERROR: 40,
                            CRITICAL: 50
                        }, n = t[e];
                    return t[r.b.getConfig('Yieldlove.global.logLevel') || 'CRITICAL'] <= n;
                }
                function Q() {
                    var e;
                    return !1 === r.b.getConfig('debug') && (e = 'TRUE' === $(h.DEBUG_MODE).toUpperCase(), -1 < window.location.search.search('yldebug') && (e = !0), 'DEBUG' === r.b.getConfig('Yieldlove.global.logLevel') && (e = !0), r.b.setConfig({ debug: e })), !!r.b.getConfig('debug');
                }
                function $(e) {
                    return Te(q().search)[e] || '';
                }
                function X(e, t) {
                    return C.call(e) === '[object ' + t + ']';
                }
                function Z(e) {
                    return X(e, A);
                }
                function ee(e) {
                    return X(e, S);
                }
                function te(e) {
                    return X(e, w);
                }
                function ne(e) {
                    return X(e, E);
                }
                function re(e) {
                    return X(e, I);
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
                function de(e, t) {
                    var n = new Image();
                    t && D.isFn(t) && (n.addEventListener('load', t), n.addEventListener('error', t)), n.src = e;
                }
                function se(e, t) {
                    var n = D.createTrackPixelIframeHtml(e, !1, 'allow-scripts allow-same-origin'), r = document.createElement('div');
                    r.innerHTML = n;
                    var i = r.firstChild;
                    t && D.isFn(t) && (i.addEventListener('load', t), i.addEventListener('error', t)), D.insertElement(i, document, 'html', !0);
                }
                function ue(e) {
                    var t = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : '';
                    return e ? (1 < arguments.length && void 0 !== arguments[1] && !arguments[1] || (e = encodeURI(e)), t = t && 'sandbox="'.concat(t, '"'), '<iframe '.concat(t, ' id="').concat(P(), '"\n      frameborder="0"\n      allowtransparency="true"\n      marginheight="0" marginwidth="0"\n      width="0" hspace="0" vspace="0" height="0"\n      style="height:0px;width:0px;display:none;"\n      scrolling="no"\n      src="').concat(e, '">\n    </iframe>')) : '';
                }
                function le(e, t, n) {
                    return null == t ? n : ee(t) ? t : ne(t) ? t.toString() : void D.logWarn('Unsuported type for param: ' + e + ' required type: String');
                }
                function fe(e, t, n) {
                    return n.indexOf(e) === t;
                }
                function pe(e, t) {
                    return e.concat(t);
                }
                function ge(e) {
                    return Object.keys(e);
                }
                function be() {
                    if (window.googletag && Z(window.googletag.pubads) && Z(window.googletag.pubads().getSlots))
                        return !0;
                }
                var ve = he('timeToRespond', function (e, t) {
                        return t < e;
                    }), ye = he('responseTimestamp', function (e, t) {
                        return t < e;
                    }), me = he('responseTimestamp', function (e, t) {
                        return e < t;
                    });
                function he(n, r) {
                    return function (e, t) {
                        return e.cpm === t.cpm ? r(e[n], t[n]) ? t : e : e.cpm < t.cpm ? t : e;
                    };
                }
                function we(e) {
                    return o()(e);
                }
                function Se() {
                    return !1 !== r.b.getConfig('deviceAccess');
                }
                function Ae() {
                    if (window.navigator.cookieEnabled || document.cookie.length)
                        return !0;
                }
                var Ee = function (e, t) {
                    return e.getAdUnitPath() === t || e.getSlotElementId() === t;
                };
                function Ie(t) {
                    return function (e) {
                        return Ee(e, t);
                    };
                }
                function Oe(e, t) {
                    var n = v({}, e);
                    return delete n[t], n;
                }
                function Ce(e) {
                    return Number.isInteger ? Number.isInteger(e) : 'number' == typeof e && isFinite(e) && Math.floor(e) === e;
                }
                function _e() {
                    try {
                        return !!window.localStorage;
                    } catch (e) {
                        V('Local storage api disabled');
                    }
                }
                function Te(e) {
                    return e ? e.replace(/^\?/, '').split('&').reduce(function (e, t) {
                        var n, r = function (e) {
                                if (Array.isArray(e))
                                    return e;
                            }(n = t.split('=')) || function (e) {
                                if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
                                    var t = [], n = !0, r = !1, i = void 0;
                                    try {
                                        for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done) && (t.push(o.value), 2 !== t.length); n = !0);
                                    } catch (e) {
                                        r = !0, i = e;
                                    } finally {
                                        try {
                                            n || null == a.return || a.return();
                                        } finally {
                                            if (r)
                                                throw i;
                                        }
                                    }
                                    return t;
                                }
                            }(n) || p(n, 2) || function () {
                                throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                            }(), i = r[0], o = r[1];
                        return /\[\]$/.test(i) ? (e[i = i.replace('[]', '')] = e[i] || [], e[i].push(o)) : e[i] = o || '', e;
                    }, {}) : {};
                }
                function je(e) {
                    return Object.keys(e).map(function (t) {
                        return Array.isArray(e[t]) ? e[t].map(function (e) {
                            return ''.concat(t, '[]=').concat(e);
                        }).join('&') : ''.concat(t, '=').concat(e[t]);
                    }).join('&');
                }
                function He(e, t) {
                    if (e === t)
                        return !0;
                    if ('object' !== y(e) || null === e || 'object' !== y(t) || null === t)
                        return !1;
                    if (Object.keys(e).length !== Object.keys(t).length)
                        return !1;
                    for (var n in e) {
                        if (!t.hasOwnProperty(n))
                            return !1;
                        if (!He(e[n], t[n]))
                            return !1;
                    }
                    return !0;
                }
                function Ue(e) {
                    for (var t = arguments.length, n = new Array(1 < t ? t - 1 : 0), r = 1; r < t; r++)
                        n[r - 1] = arguments[r];
                    if (!n.length)
                        return e;
                    var i = n.shift();
                    if (re(e) && re(i))
                        for (var o in i)
                            re(i[o]) ? (e[o] || v(e, b({}, o, {})), Ue(e[o], i[o])) : te(i[o]) && e[o] ? te(e[o]) && (e[o] = e[o].concat(i[o])) : v(e, b({}, o, i[o]));
                    return Ue.apply(void 0, [e].concat(n));
                }
            },
            1: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'storage', function () {
                    return I;
                }), t.registerBidder = function (i) {
                    var n = Array.isArray(i.supportedMediaTypes) ? { supportedMediaTypes: i.supportedMediaTypes } : void 0;
                    function o(e) {
                        var t = _(e);
                        c.default.registerBidAdapter(t, e.code, n);
                    }
                    o(i), Array.isArray(i.aliases) && i.aliases.forEach(function (e) {
                        var t, n, r = e;
                        Object(h.isPlainObject)(e) && (r = e.code, t = e.gvlid, n = e.skipPbsAliasing), c.default.aliasRegistry[r] = i.code, o(E({}, i, {
                            code: r,
                            gvlid: t,
                            skipPbsAliasing: n
                        }));
                    });
                }, t.newBidder = _, n.d(t, 'registerSyncInner', function () {
                    return T;
                }), t.preloadBidderMappingFile = j, t.getIabSubCategory = function (e, t) {
                    var n = c.default.getBidAdapter(e);
                    if (n.getSpec().getMappingFileInfo) {
                        var r = n.getSpec().getMappingFileInfo(), i = r.localStorageKey ? r.localStorageKey : n.getBidderCode(), o = I.getDataFromLocalStorage(i);
                        if (o) {
                            try {
                                o = JSON.parse(o);
                            } catch (t) {
                                Object(h.logError)('Failed to parse '.concat(e, ' mapping data stored in local storage'));
                            }
                            return o.mapping[t] ? o.mapping[t] : null;
                        }
                    }
                }, t.isValid = H;
                var r = n(92), c = n(8), d = n(3), v = n(34), s = n(43), o = n(37), a = n(25), i = n(5), y = n.n(i), u = n(9), m = n.n(u), l = n(12), f = n.n(l), p = n(4), h = n(0), g = n(2), b = n(13), w = n(7);
                function S(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                function A(e) {
                    return (A = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function E() {
                    return (E = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var I = Object(w.a)('bidderFactory'), O = [
                        'requestId',
                        'cpm',
                        'ttl',
                        'creativeId',
                        'netRevenue',
                        'currency'
                    ], C = 1;
                function _(p) {
                    return E(new r.a(p.code), {
                        getSpec: function () {
                            return Object.freeze(p);
                        },
                        registerSyncs: g,
                        callBids: function (o, a, e, r, c, d) {
                            var s, u, t, l, n, f;
                            function i() {
                                e(), m.a.emit(y.a.EVENTS.BIDDER_DONE, o), g(u, o.gdprConsent, o.uspConsent);
                            }
                            Array.isArray(o.bids) && (s = {}, u = [], 0 !== (t = o.bids.filter(b)).length ? (l = {}, t.forEach(function (e) {
                                (l[e.bidId] = e).adUnitCode || (e.adUnitCode = e.placementCode);
                            }), (n = p.buildRequests(t, o)) && 0 !== n.length ? (Array.isArray(n) || (n = [n]), f = Object(h.delayExecution)(d(i), n.length), n.forEach(function (i) {
                                switch (i.method) {
                                case 'GET':
                                    r(''.concat(i.url).concat((e = i.data) ? '?'.concat('object' === A(e) ? Object(h.parseQueryStringParameters)(e) : e) : ''), {
                                        success: d(t),
                                        error: n
                                    }, void 0, E({
                                        method: 'GET',
                                        withCredentials: !0
                                    }, i.options));
                                    break;
                                case 'POST':
                                    r(i.url, {
                                        success: d(t),
                                        error: n
                                    }, 'string' == typeof i.data ? i.data : JSON.stringify(i.data), E({
                                        method: 'POST',
                                        contentType: 'text/plain',
                                        withCredentials: !0
                                    }, i.options));
                                    break;
                                default:
                                    Object(h.logWarn)('Skipping invalid request from '.concat(p.code, '. Request type ').concat(i.type, ' must be GET or POST')), f();
                                }
                                var e;
                                function t(e, t) {
                                    c(p.code);
                                    try {
                                        e = JSON.parse(e);
                                    } catch (e) {
                                    }
                                    var n;
                                    e = {
                                        body: e,
                                        headers: { get: t.getResponseHeader.bind(t) }
                                    }, u.push(e);
                                    try {
                                        n = p.interpretResponse(e, i);
                                    } catch (e) {
                                        return Object(h.logError)('Bidder '.concat(p.code, ' failed to interpret the server\'s response. Continuing without bids'), null, e), void f();
                                    }
                                    function r(e) {
                                        var t, n, r, i = l[e.requestId];
                                        i ? (e.originalCpm = e.cpm, e.originalCurrency = e.currency, e.meta = e.meta || E({}, e[i.bidder]), t = E(Object(v.a)(y.a.STATUS.GOOD, i), e), n = i.adUnitCode, r = t, s[n] = !0, H(n, r, [o]) && a(n, r)) : Object(h.logWarn)('Bidder '.concat(p.code, ' made bid for unknown request ID: ').concat(e.requestId, '. Ignoring.'));
                                    }
                                    n && (Object(h.isArray)(n) ? n.forEach(r) : r(n)), f(n);
                                }
                                function n(e) {
                                    c(p.code), Object(h.logError)('Server call for '.concat(p.code, ' failed: ').concat(e, '. Continuing without bids.')), f();
                                }
                            })) : i()) : i());
                        }
                    });
                    function g(e, t, n) {
                        T(p, e, t, n);
                    }
                    function b(e) {
                        return !!p.isBidRequestValid(e) || (Object(h.logWarn)('Invalid bid sent to bidder '.concat(p.code, ': ').concat(JSON.stringify(e))), !1);
                    }
                }
                var T = Object(b.b)('async', function (t, e, n, r) {
                    var i, o, a = d.b.getConfig('userSync.aliasSyncEnabled');
                    !t.getUserSyncs || !a && c.default.aliasRegistry[t.code] || (i = d.b.getConfig('userSync.filterSettings'), (o = t.getUserSyncs({
                        iframeEnabled: !(!i || !i.iframe && !i.all),
                        pixelEnabled: !(!i || !i.image && !i.all)
                    }, e, n, r)) && (Array.isArray(o) || (o = [o]), o.forEach(function (e) {
                        s.a.registerSync(e.type, t.code, e.url);
                    })));
                }, 'registerSyncs');
                function j(e, t) {
                    if (!d.b.getConfig('adpod.brandCategoryExclusion'))
                        return e.call(this, t);
                    t.filter(function (e) {
                        return Object(h.deepAccess)(e, 'mediaTypes.video.context') === g.a;
                    }).map(function (e) {
                        return e.bids.map(function (e) {
                            return e.bidder;
                        });
                    }).reduce(h.flatten, []).filter(h.uniques).forEach(function (n) {
                        var e = c.default.getBidAdapter(n);
                        if (e.getSpec().getMappingFileInfo) {
                            var t = e.getSpec().getMappingFileInfo(), r = t.refreshInDays ? t.refreshInDays : C, i = t.localStorageKey ? t.localStorageKey : e.getSpec().code, o = I.getDataFromLocalStorage(i);
                            try {
                                (!(o = o ? JSON.parse(o) : void 0) || Object(h.timestamp)() > o.lastUpdated + 24 * r * 60 * 60 * 1000) && Object(p.a)(t.url, {
                                    success: function (e) {
                                        try {
                                            e = JSON.parse(e);
                                            var t = {
                                                lastUpdated: Object(h.timestamp)(),
                                                mapping: e.mapping
                                            };
                                            I.setDataInLocalStorage(i, JSON.stringify(t));
                                        } catch (e) {
                                            Object(h.logError)('Failed to parse '.concat(n, ' bidder translation mapping file'));
                                        }
                                    },
                                    error: function () {
                                        Object(h.logError)('Failed to load '.concat(n, ' bidder translation file'));
                                    }
                                });
                            } catch (e) {
                                Object(h.logError)('Failed to parse '.concat(n, ' bidder translation mapping file'));
                            }
                        }
                    }), e.call(this, t);
                }
                function H(e, t, n) {
                    function r(e) {
                        return 'Invalid bid from '.concat(t.bidderCode, '. Ignoring bid: ').concat(e);
                    }
                    return e ? t ? (i = Object.keys(t), O.every(function (e) {
                        return f()(i, e) && !f()([
                            void 0,
                            null
                        ], t[e]);
                    }) ? (window.dispatchEvent(new CustomEvent('yieldlove.validatingBid', {
                        detail: {
                            adUnitCode: e,
                            bid: t
                        }
                    })), 'native' !== t.mediaType || Object(o.g)(t, n) ? 'video' !== t.mediaType || Object(a.d)(t, n) ? !('banner' === t.mediaType && !function (e, t, n) {
                        if ((t.width || 0 === parseInt(t.width, 10)) && (t.height || 0 === parseInt(t.height, 10)))
                            return t.width = parseInt(t.width, 10), t.height = parseInt(t.height, 10), 1;
                        var r, i = Object(h.getBidderRequest)(n, t.bidderCode, e), o = i && i.bids && i.bids[0] && i.bids[0].sizes, a = Object(h.parseSizesInput)(o);
                        if (1 === a.length) {
                            var c = function (e) {
                                    if (Array.isArray(e))
                                        return e;
                                }(r = a[0].split('x')) || function (e) {
                                    if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
                                        var t = [], n = !0, r = !1, i = void 0;
                                        try {
                                            for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done) && (t.push(o.value), 2 !== t.length); n = !0);
                                        } catch (e) {
                                            r = !0, i = e;
                                        } finally {
                                            try {
                                                n || null == a.return || a.return();
                                            } finally {
                                                if (r)
                                                    throw i;
                                            }
                                        }
                                        return t;
                                    }
                                }(r) || function (e) {
                                    if (e) {
                                        if ('string' == typeof e)
                                            return S(e, 2);
                                        var t = Object.prototype.toString.call(e).slice(8, -1);
                                        return 'Object' === t && e.constructor && (t = e.constructor.name), 'Map' === t || 'Set' === t ? Array.from(e) : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? S(e, 2) : void 0;
                                    }
                                }(r) || function () {
                                    throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                                }(), d = c[0], s = c[1];
                            return t.width = parseInt(d, 10), t.height = parseInt(s, 10), 1;
                        }
                    }(e, t, n) && (Object(h.logError)(r('Banner bids require a width and height')), 1)) : (Object(h.logError)(r('Video bid does not have required vastUrl or renderer property')), !1) : (Object(h.logError)(r('Native bid missing some required properties.')), !1)) : (Object(h.logError)(r('Bidder '.concat(t.bidderCode, ' is missing required params. Check http://prebid.org/dev-docs/bidder-adapter-1.html for list of params.'))), !1)) : (Object(h.logWarn)('Some adapter tried to add an undefined bid for '.concat(e, '.')), !1) : (Object(h.logWarn)('No adUnitCode was supplied to addBidResponse.'), !1);
                    var i;
                }
                Object(b.a)('checkAdUnitSetup').before(j);
            },
            10: function (e, t, n) {
                var r = n(98);
                e.exports = r;
            },
            100: function (e, t, n) {
                var r = n(30), i = n(101), o = n(46), a = n(47), c = n(55), d = n(28), s = n(73), u = Object.getOwnPropertyDescriptor;
                t.f = r ? u : function (e, t) {
                    if (e = a(e), t = c(t, !0), s)
                        try {
                            return u(e, t);
                        } catch (e) {
                        }
                    if (d(e, t))
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
                    return n == s || n != d && ('function' == typeof t ? i(t) : !!t);
                }
                var i = n(31), o = /#|\.prototype\./, a = r.normalize = function (e) {
                        return String(e).replace(o, '.').toLowerCase();
                    }, c = r.data = {}, d = r.NATIVE = 'N', s = r.POLYFILL = 'P';
                e.exports = r;
            },
            103: function (e, t, n) {
                var r = n(27), i = n(104), o = n(21)('species');
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
                t.a = i, t.c = function (e) {
                    return !(!e || !e.url);
                }, t.b = function (e, t) {
                    e.render(t);
                };
                var d = n(40), s = n(0), r = n(10), u = n.n(r), l = 'outstream';
                function i(e) {
                    var t = this, n = e.url, r = e.config, i = e.id, o = e.callback, a = e.loaded, c = e.adUnitCode;
                    this.url = n, this.config = r, this.handlers = {}, this.id = i, this.loaded = a, this.cmd = [], this.push = function (e) {
                        'function' == typeof e ? t.loaded ? e.call() : t.cmd.push(e) : s.logError('Commands given to Renderer.push must be wrapped in a function');
                    }, this.callback = o || function () {
                        t.loaded = !0, t.process();
                    }, this.render = function () {
                        !function (t) {
                            var e = pbjsYLHH.adUnits, n = u()(e, function (e) {
                                    return e.code === t;
                                });
                            if (n) {
                                var r = s.deepAccess(n, 'renderer'), i = !!(r && r.url && r.render), o = s.deepAccess(n, 'mediaTypes.video.renderer'), a = !!(o && o.url && o.render);
                                return i && !0 !== r.backupOnly || a && !0 !== o.backupOnly;
                            }
                        }(c) ? Object(d.a)(n, l, this.callback) : s.logWarn('External Js not loaded by Renderer since renderer url and callback is already defined on adUnit '.concat(c)), this._render ? this._render.apply(this, arguments) : s.logWarn('No render function was provided, please use .setRender on the renderer');
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
                n(111), n(128), n(89), n(130);
                var r = n(42);
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
                var l = n(14), f = n(26), p = n(80), g = n(31), b = n(32), v = n(17), y = n(83), m = n(27), h = n(64), w = n(33).f, S = n(56).forEach, A = n(30), r = n(54), E = r.set, I = r.getterFor;
                e.exports = function (n, e, t) {
                    var r, a, i = -1 !== n.indexOf('Map'), c = -1 !== n.indexOf('Weak'), o = i ? 'set' : 'add', d = f[n], s = d && d.prototype, u = {};
                    return A && 'function' == typeof d && (c || s.forEach && !g(function () {
                        new d().entries().next();
                    })) ? (r = e(function (e, t) {
                        E(y(e, r, n), {
                            type: n,
                            collection: new d()
                        }), null != t && v(t, e[o], e, i);
                    }), a = I(n), S([
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
                            if (!o && c && !m(e))
                                return 'get' == i && void 0;
                            var r = n[i](0 === e ? 0 : e, t);
                            return o ? this : r;
                        });
                    }), c || w(r.prototype, 'size', {
                        configurable: !0,
                        get: function () {
                            return a(this).collection.size;
                        }
                    })) : (r = t.getConstructor(e, n, i, o), p.REQUIRED = !0), h(r, n, !1, !0), u[n] = r, l({
                        global: !0,
                        forced: !0
                    }, u), c || t.setStrong(r, n, i), r;
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
                var s = n(33).f, u = n(84), l = n(122), f = n(24), p = n(83), g = n(17), a = n(66), c = n(127), b = n(30), v = n(80).fastKey, r = n(54), y = r.set, m = r.getterFor;
                e.exports = {
                    getConstructor: function (e, n, r, i) {
                        function o(e, t, n) {
                            var r, i, o = d(e), a = c(e, t);
                            return a ? a.value = n : (o.last = a = {
                                index: i = v(t, !0),
                                key: t,
                                value: n,
                                previous: r = o.last,
                                next: void 0,
                                removed: !1
                            }, o.first || (o.first = a), r && (r.next = a), b ? o.size++ : e.size++, 'F' !== i && (o.index[i] = a)), e;
                        }
                        function c(e, t) {
                            var n, r = d(e), i = v(t);
                            if ('F' !== i)
                                return r.index[i];
                            for (n = r.first; n; n = n.next)
                                if (n.key == t)
                                    return n;
                        }
                        var a = e(function (e, t) {
                                p(e, a, n), y(e, {
                                    type: n,
                                    index: u(null),
                                    first: void 0,
                                    last: void 0,
                                    size: 0
                                }), b || (e.size = 0), null != t && g(t, e[i], e, r);
                            }), d = m(n);
                        return l(a.prototype, {
                            clear: function () {
                                for (var e = d(this), t = e.index, n = e.first; n;)
                                    n.removed = !0, n.previous && (n.previous = n.previous.next = void 0), delete t[n.index], n = n.next;
                                e.first = e.last = void 0, b ? e.size = 0 : this.size = 0;
                            },
                            delete: function (e) {
                                var t, n, r = d(this), i = c(this, e);
                                return i && (t = i.next, n = i.previous, delete r.index[i.index], i.removed = !0, n && (n.next = t), t && (t.previous = n), r.first == i && (r.first = t), r.last == i && (r.last = n), b ? r.size-- : this.size--), !!i;
                            },
                            forEach: function (e, t) {
                                for (var n, r = d(this), i = f(e, 1 < arguments.length ? t : void 0, 3); n = n ? n.next : r.first;)
                                    for (i(n.value, n.key, this); n && n.removed;)
                                        n = n.previous;
                            },
                            has: function (e) {
                                return !!c(this, e);
                            }
                        }), l(a.prototype, r ? {
                            get: function (e) {
                                var t = c(this, e);
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
                                return d(this).size;
                            }
                        }), a;
                    },
                    setStrong: function (e, t, n) {
                        var r = t + ' Iterator', i = m(t), o = m(r);
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
                var r = n(30), a = n(33), c = n(15), d = n(119);
                e.exports = r ? Object.defineProperties : function (e, t) {
                    c(e);
                    for (var n, r = d(t), i = r.length, o = 0; o < i;)
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
                var r = n(107);
                e.exports = r;
            },
            120: function (e, t, n) {
                var a = n(28), c = n(47), d = n(78).indexOf, s = n(53);
                e.exports = function (e, t) {
                    var n, r = c(e), i = 0, o = [];
                    for (n in r)
                        !a(s, n) && a(r, n) && o.push(n);
                    for (; t.length > i;)
                        a(r, n = t[i++]) && (~d(o, n) || o.push(n));
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
                var o = n(87).IteratorPrototype, a = n(84), c = n(46), d = n(64), s = n(38);
                e.exports = function (e, t, n) {
                    var r = t + ' Iterator';
                    return e.prototype = a(o, { next: c(1, n) }), d(e, r, !1, !0), s[r] = i, e;
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
            128: function (e, t) {
            },
            129: function (e, t, n) {
                function r(c) {
                    return function (e, t) {
                        var n, r, i = String(s(e)), o = d(t), a = i.length;
                        return o < 0 || a <= o ? c ? '' : void 0 : (n = i.charCodeAt(o)) < 55296 || 56319 < n || o + 1 === a || (r = i.charCodeAt(o + 1)) < 56320 || 57343 < r ? c ? i.charAt(o) : n : c ? i.slice(o, o + 2) : r - 56320 + (n - 55296 << 10) + 65536;
                    };
                }
                var d = n(58), s = n(49);
                e.exports = {
                    codeAt: r(!1),
                    charAt: r(!0)
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
                            }(t) || function (e) {
                                if (e) {
                                    if ('string' == typeof e)
                                        return o(e, void 0);
                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                    return 'Object' === t && e.constructor && (t = e.constructor.name), 'Map' === t || 'Set' === t ? Array.from(e) : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? o(e, void 0) : void 0;
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
            130: function (e, t, n) {
                n(131);
                var r = n(132), i = n(26), o = n(62), a = n(32), c = n(38), d = n(21)('toStringTag');
                for (var s in r) {
                    var u = i[s], l = u && u.prototype;
                    l && o(l) !== d && a(l, d, s), c[s] = c.Array;
                }
            },
            131: function (e, t, n) {
                'use strict';
                var r = n(47), i = n(51), o = n(38), a = n(54), c = n(66), d = 'Array Iterator', s = a.set, u = a.getterFor(d);
                e.exports = c(Array, 'Array', function (e, t) {
                    s(this, {
                        type: d,
                        target: r(e),
                        index: 0,
                        kind: t
                    });
                }, function () {
                    var e = u(this), t = e.target, n = e.kind, r = e.index++;
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
                var s = n(19), u = n(24), l = n(17);
                e.exports = function (e, t, n) {
                    var r, i, o, a, c = arguments.length, d = 1 < c ? t : void 0;
                    return s(this), (r = void 0 !== d) && s(d), null == e ? new this() : (i = [], r ? (o = 0, a = u(d, 2 < c ? n : void 0, 2), l(e, function (e) {
                        i.push(a(e, o++));
                    })) : l(e, i.push, i), new this(i));
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
                var i = n(15), o = n(19);
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
                var y = n(26), m = n(100).f, h = n(102), w = n(42), S = n(24), A = n(32), E = n(28);
                e.exports = function (e, t) {
                    var n, r, i, o, a, c, d, s, u = e.target, l = e.global, f = e.stat, p = e.proto, g = l ? y : f ? y[u] : (y[u] || {}).prototype, b = l ? w : w[u] || (w[u] = {}), v = b.prototype;
                    for (i in t)
                        n = !h(l ? i : u + (f ? '.' : '#') + i, e.forced) && g && E(g, i), a = b[i], n && (c = e.noTargetGet ? (s = m(g, i)) && s.value : g[i]), o = n && c ? c : t[i], n && typeof a == typeof o || (d = e.bind && n ? S(o, y) : e.wrap && n ? function (r) {
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
                        }(o) : p && 'function' == typeof o ? S(Function.call, o) : o, (e.sham || o && o.sham || a && a.sham) && A(d, 'sham', !0), b[i] = d, p && (E(w, r = u + 'Prototype') || A(w, r, {}), w[r][i] = o, e.real && v && !v[i] && A(v, i, o)));
                };
            },
            140: function (e, t, n) {
                'use strict';
                var a = n(15), c = n(19);
                e.exports = function () {
                    for (var e, t = a(this), n = c(t.delete), r = !0, i = 0, o = arguments.length; i < o; i++)
                        e = n.call(t, arguments[i]), r = r && e;
                    return !!r;
                };
            },
            141: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(15), a = n(24), c = n(36), d = n(17);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    every: function (e, t) {
                        var n = o(this), r = c(n), i = a(e, 1 < arguments.length ? t : void 0, 3);
                        return !d(r, function (e) {
                            if (!i(e, e, n))
                                return d.stop();
                        }, void 0, !1, !0).stopped;
                    }
                });
            },
            142: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(29), a = n(15), c = n(19), d = n(39), s = n(17);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    difference: function (e) {
                        var t = a(this), n = new (d(t, o('Set')))(t), r = c(n.delete);
                        return s(e, function (e) {
                            r.call(n, e);
                        }), n;
                    }
                });
            },
            143: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), c = n(29), d = n(15), s = n(19), u = n(24), l = n(39), f = n(36), p = n(17);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    filter: function (e, t) {
                        var n = d(this), r = f(n), i = u(e, 1 < arguments.length ? t : void 0, 3), o = new (l(n, c('Set')))(), a = s(o.add);
                        return p(r, function (e) {
                            i(e, e, n) && a.call(o, e);
                        }, void 0, !1, !0), o;
                    }
                });
            },
            144: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(15), a = n(24), c = n(36), d = n(17);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    find: function (e, t) {
                        var n = o(this), r = c(n), i = a(e, 1 < arguments.length ? t : void 0, 3);
                        return d(r, function (e) {
                            if (i(e, e, n))
                                return d.stop(e);
                        }, void 0, !1, !0).result;
                    }
                });
            },
            145: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(29), a = n(15), c = n(19), d = n(39), s = n(17);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    intersection: function (e) {
                        var t = a(this), n = new (d(t, o('Set')))(), r = c(t.has), i = c(n.add);
                        return s(e, function (e) {
                            r.call(t, e) && i.call(n, e);
                        }), n;
                    }
                });
            },
            146: function (e, t, n) {
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
            147: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(29), a = n(15), c = n(19), d = n(90), s = n(17);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    isSubsetOf: function (e) {
                        var t = d(this), n = a(e), r = n.has;
                        return 'function' != typeof r && (n = new (o('Set'))(e), r = c(n.has)), !s(t, function (e) {
                            if (!1 === r.call(n, e))
                                return s.stop();
                        }, void 0, !1, !0).stopped;
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
                var r = n(14), i = n(16), o = n(15), a = n(36), c = n(17);
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
                var r = n(14), i = n(16), c = n(29), d = n(15), s = n(19), u = n(24), l = n(39), f = n(36), p = n(17);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    map: function (e, t) {
                        var n = d(this), r = f(n), i = u(e, 1 < arguments.length ? t : void 0, 3), o = new (l(n, c('Set')))(), a = s(o.add);
                        return p(r, function (e) {
                            a.call(o, i(e, e, n));
                        }, void 0, !1, !0), o;
                    }
                });
            },
            151: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), a = n(15), c = n(19), d = n(36), s = n(17);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    reduce: function (t, e) {
                        var n = a(this), r = d(n), i = arguments.length < 2, o = i ? void 0 : e;
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
                var r = n(14), i = n(16), o = n(15), a = n(24), c = n(36), d = n(17);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    some: function (e, t) {
                        var n = o(this), r = c(n), i = a(e, 1 < arguments.length ? t : void 0, 3);
                        return d(r, function (e) {
                            if (i(e, e, n))
                                return d.stop();
                        }, void 0, !1, !0).stopped;
                    }
                });
            },
            153: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(29), a = n(15), c = n(19), d = n(39), s = n(17);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    symmetricDifference: function (e) {
                        var t = a(this), n = new (d(t, o('Set')))(t), r = c(n.delete), i = c(n.add);
                        return s(e, function (e) {
                            r.call(n, e) || i.call(n, e);
                        }), n;
                    }
                });
            },
            154: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(16), o = n(29), a = n(15), c = n(19), d = n(39), s = n(17);
                r({
                    target: 'Set',
                    proto: !0,
                    real: !0,
                    forced: i
                }, {
                    union: function (e) {
                        var t = a(this), n = new (d(t, o('Set')))(t);
                        return s(e, c(n.add), n), n;
                    }
                });
            },
            155: function (e, t, n) {
                n(89), n(156);
                var r = n(42);
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
                var v = n(24), y = n(57), m = n(82), h = n(81), w = n(50), S = n(158), A = n(61);
                e.exports = function (e, t, n) {
                    var r, i, o, a, c, d, s = y(e), u = 'function' == typeof this ? this : Array, l = arguments.length, f = 1 < l ? t : void 0, p = void 0 !== f, g = A(s), b = 0;
                    if (p && (f = v(f, 2 < l ? n : void 0, 2)), null == g || u == Array && h(g))
                        for (i = new u(r = w(s.length)); b < r; b++)
                            d = p ? f(s[b], b) : s[b], S(i, b, d);
                    else
                        for (c = (a = g.call(s)).next, i = new u(); !(o = c.call(a)).done; b++)
                            d = p ? m(a, f, [
                                o.value,
                                b
                            ], !0) : o.value, S(i, b, d);
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
                m.SYNC = 1, m.ASYNC = 2, m.QUEUE = 4;
                var g = 'fun-hooks', n = Object.freeze({
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
                function m(d) {
                    var s, e = {}, u = [];
                    function t(e, t) {
                        return 'function' == typeof e ? l.call(null, 'sync', e, t) : 'string' == typeof e && 'function' == typeof t ? l.apply(null, arguments) : 'object' == typeof e ? function (o, e, a) {
                            var t = !0;
                            void 0 === e && (e = Object.getOwnPropertyNames(o), t = !1);
                            for (var c = {}, n = ['constructor']; (e = e.filter(function (e) {
                                    return !('function' != typeof o[e] || -1 !== n.indexOf(e) || e.match(/^_/));
                                })).forEach(function (e) {
                                    var t, n = e.split(':'), r = n[0], i = n[1] || 'sync';
                                    c[r] || (t = o[r], c[r] = o[r] = l(i, t, a ? [
                                        a,
                                        r
                                    ] : void 0));
                                }), o = Object.getPrototypeOf(o), t && o;);
                            return c;
                        }.apply(null, arguments) : void 0;
                    }
                    function f(o) {
                        var a = Array.isArray(o) ? o : o.split('.');
                        return r.call(a, function (t, n, e) {
                            var r = t[n], i = !1;
                            return r || (e === a.length - 1 ? (s || u.push(function () {
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
                    function l(l, e, t) {
                        var n = e.after && b.get(e.after);
                        if (n) {
                            if (n.type !== l)
                                throw g + ': recreated hookable with different type';
                            return e;
                        }
                        var r, i, o = t ? f(t) : p(), a = {
                                get: function (e, t) {
                                    return o[t] || Reflect.get.apply(Reflect, arguments);
                                }
                            };
                        return s || u.push(c), d.useProxy && 'function' == typeof Proxy && Proxy.revocable ? i = new Proxy(e, a) : y(i = function () {
                            return a.apply ? a.apply(e, this, v(arguments)) : e.apply(this, arguments);
                        }, o), b.get(i.after).install(l, i, function (e, t) {
                            var s, u = [];
                            function n(e) {
                                u.push(e.hook);
                            }
                            r = e.length || t.length ? (e.forEach(n), s = u.push(void 0) - 1, t.forEach(n), function (n, r, e) {
                                var i, o = 0, a = 'async' === l && 'function' == typeof e[e.length - 1] && e.pop();
                                function c(e) {
                                    'sync' === l ? i = e : a && a.apply(null, arguments);
                                }
                                function d(e) {
                                    if (u[o]) {
                                        var t = v(arguments);
                                        return d.bail = c, t.unshift(d), u[o++].apply(r, t);
                                    }
                                    'sync' === l ? i = e : a && a.apply(null, arguments);
                                }
                                return u[s] = function () {
                                    var e = v(arguments, 1);
                                    'async' === l && a && (delete d.bail, e.push(d));
                                    var t = n.apply(r, e);
                                    'sync' === l && d(t);
                                }, d.apply(null, e), i;
                            }) : void 0, c();
                        }), i;
                        function c() {
                            !s && ('sync' !== l || d.ready & m.SYNC) && ('async' !== l || d.ready & m.ASYNC) ? 'sync' !== l && d.ready & m.QUEUE ? a.apply = function () {
                                var e = arguments;
                                u.push(function () {
                                    i.apply(e[1], e[2]);
                                });
                            } : a.apply = function () {
                                throw g + ': hooked function not ready';
                            } : a.apply = r;
                        }
                    }
                    return (d = y({}, n, d)).ready ? t.ready = function () {
                        s = !0, function (e) {
                            for (var t; t = e.shift();)
                                t();
                        }(u);
                    } : s = !0, t.get = f, t;
                }
                e.exports = m;
            },
            17: function (e, t, n) {
                function p(e, t) {
                    this.stopped = e, this.result = t;
                }
                var g = n(15), b = n(81), v = n(50), y = n(24), m = n(61), h = n(82);
                (e.exports = function (e, t, n, r, i) {
                    var o, a, c, d, s, u, l, f = y(t, n, r ? 2 : 1);
                    if (i)
                        o = e;
                    else {
                        if ('function' != typeof (a = m(e)))
                            throw TypeError('Target is not iterable');
                        if (b(a)) {
                            for (c = 0, d = v(e.length); c < d; c++)
                                if ((s = r ? f(g(l = e[c])[0], l[1]) : f(e[c])) && s instanceof p)
                                    return s;
                            return new p(!1);
                        }
                        o = a.call(e);
                    }
                    for (u = o.next; !(l = u.call(o)).done;)
                        if ('object' == typeof (s = h(o, f, l.value, r)) && s && s instanceof p)
                            return s;
                    return new p(!1);
                }).stop = function (e) {
                    return new p(!0, e);
                };
            },
            18: function (e, t, n) {
                'use strict';
                t.a = function () {
                    return window.pbjsYLHH;
                }, window.pbjsYLHH = window.pbjsYLHH || {}, window.pbjsYLHH.cmd = window.pbjsYLHH.cmd || [], window.pbjsYLHH.que = window.pbjsYLHH.que || [], window._pbjsGlobals = window._pbjsGlobals || [], window._pbjsGlobals.push('pbjsYLHH');
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
                var r = n(26), i = n(75), o = n(28), a = n(59), c = n(77), d = n(106), s = i('wks'), u = r.Symbol, l = d ? u : u && u.withoutSetter || a;
                e.exports = function (e) {
                    return o(s, e) || (c && o(u, e) ? s[e] = u[e] : s[e] = l('Symbol.' + e)), s[e];
                };
            },
            22: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return r;
                });
                var y, m = n(0), r = (y = window, function () {
                        var e, t = [], n = function (e) {
                                try {
                                    if (!e.location.ancestorOrigins)
                                        return;
                                    return e.location.ancestorOrigins;
                                } catch (e) {
                                }
                            }(y), r = !1, i = 0, o = !1, a = !1;
                        do {
                            var c, d, s = g, u = a, l = void 0, f = !1, p = null, a = !1, g = g ? g.parent : y;
                            try {
                                l = g.location.href || null;
                            } catch (e) {
                                f = !0;
                            }
                            if (f)
                                if (u) {
                                    var b = s.context;
                                    try {
                                        d = p = b.sourceUrl, o = !0, g === y.top && (r = !0), b.canonicalUrl && (e = b.canonicalUrl);
                                    } catch (e) {
                                    }
                                } else {
                                    Object(m.logWarn)('Trying to access cross domain iframe. Continuing without referrer and location');
                                    try {
                                        var v = s.document.referrer;
                                        v && (p = v, g === y.top && (r = !0));
                                    } catch (e) {
                                    }
                                    !p && n && n[i - 1] && (p = n[i - 1]), p && !o && (d = p);
                                }
                            else
                                l && (d = p = l, o = !1, g === y.top && (r = !0, (c = function (e) {
                                    try {
                                        var t = e.querySelector('link[rel=\'canonical\']');
                                        if (null !== t)
                                            return t.href;
                                    } catch (e) {
                                    }
                                    return null;
                                }(g.document)) && (e = c))), g.context && g.context.sourceUrl && (a = !0);
                            t.push(p), i++;
                        } while (g !== y.top);
                        return t.reverse(), {
                            referer: d || null,
                            reachedTop: r,
                            isAmp: o,
                            numIframes: i - 1,
                            stack: t,
                            canonicalUrl: e || null
                        };
                    });
            },
            224: function (e, t, n) {
                n(225);
                var r = n(52);
                e.exports = r('Array', 'findIndex');
            },
            225: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(56).findIndex, o = n(51), a = n(60), c = 'findIndex', d = !0, s = a(c);
                c in [] && Array(1)[c](function () {
                    d = !1;
                }), r({
                    target: 'Array',
                    proto: !0,
                    forced: d || !s
                }, {
                    findIndex: function (e, t) {
                        return i(this, e, 1 < arguments.length ? t : void 0);
                    }
                }), o(c);
            },
            23: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return u;
                });
                var d, i, r = n(0), s = n(41), o = n(10), a = n.n(o), c = n(5), u = (d = [], (i = {}).addWinningBid = function (t) {
                        var e = a()(d, function (e) {
                            return e.getAuctionId() === t.auctionId;
                        });
                        e ? (t.status = c.BID_STATUS.RENDERED, e.addWinningBid(t)) : Object(r.logWarn)('Auction not found when adding winning bid');
                    }, i.getAllWinningBids = function () {
                        return d.map(function (e) {
                            return e.getWinningBids();
                        }).reduce(r.flatten, []);
                    }, i.getBidsRequested = function () {
                        return d.map(function (e) {
                            return e.getBidRequests();
                        }).reduce(r.flatten, []);
                    }, i.getNoBids = function () {
                        return d.map(function (e) {
                            return e.getNoBids();
                        }).reduce(r.flatten, []);
                    }, i.getBidsReceived = function () {
                        return d.map(function (e) {
                            if (e.getAuctionStatus() === s.a)
                                return e.getBidsReceived();
                        }).reduce(r.flatten, []).filter(function (e) {
                            return e;
                        });
                    }, i.getAdUnits = function () {
                        return d.map(function (e) {
                            return e.getAdUnits();
                        }).reduce(r.flatten, []);
                    }, i.getAdUnitCodes = function () {
                        return d.map(function (e) {
                            return e.getAdUnitCodes();
                        }).reduce(r.flatten, []).filter(r.uniques);
                    }, i.createAuction = function (e) {
                        var t = e.adUnits, n = e.adUnitCodes, r = e.callback, i = e.cbTimeout, o = e.labels, a = e.auctionId, c = Object(s.k)({
                                adUnits: t,
                                adUnitCodes: n,
                                callback: r,
                                cbTimeout: i,
                                labels: o,
                                auctionId: a
                            });
                        return d.push(c), c;
                    }, i.findBidByAdId = function (t) {
                        return a()(d.map(function (e) {
                            return e.getBidsReceived();
                        }).reduce(r.flatten, []), function (e) {
                            return e.adId === t;
                        });
                    }, i.getStandardBidderAdServerTargeting = function () {
                        return Object(s.j)()[c.JSON_MAPPING.ADSERVER_TARGETING];
                    }, i.setStatusForBids = function (e, t) {
                        var n, r = i.findBidByAdId(e);
                        r && (r.status = t), !r || t !== c.BID_STATUS.BID_TARGETING_SET || (n = a()(d, function (e) {
                            return e.getAuctionId() === r.auctionId;
                        })) && n.setBidTargeting(r);
                    }, i.getLastAuctionId = function () {
                        return d.length && d[d.length - 1].getAuctionId();
                    }, i);
            },
            232: function (e, t, n) {
                'use strict';
                t.a = function () {
                    window.addEventListener('message', d, !1);
                };
                var r = n(9), b = n.n(r), v = n(37), i = n(5), o = n.n(i), y = n(0), m = n(23), a = n(10), h = n.n(a), w = n(11), c = n(12), p = n.n(c), S = o.a.EVENTS.BID_WON;
                function d(e) {
                    var t, n, r, i, o, a, c, d, s, u = e.message ? 'message' : 'data', l = {};
                    try {
                        l = JSON.parse(e[u]);
                    } catch (e) {
                        return;
                    }
                    if (l && l.adId) {
                        var f, p = h()(m.a.getBidsReceived(), function (e) {
                                return e.adId === l.adId;
                            });
                        if (p && 'Prebid Request' === l.message && (n = e, r = (t = p).adId, i = t.ad, o = t.adUrl, a = t.width, c = t.height, d = t.renderer, s = t.cpm, Object(w.c)(d) ? Object(w.b)(d, t) : r && (A(t), n.source.postMessage(JSON.stringify({
                                message: 'Prebid Response',
                                ad: Object(y.replaceAuctionPrice)(i, s),
                                adUrl: Object(y.replaceAuctionPrice)(o, s),
                                adId: r,
                                width: a,
                                height: c
                            }), n.origin)), m.a.addWinningBid(p), b.a.emit(S, p)), p && 'Prebid Native' === l.message) {
                            if ('assetRequest' === l.action) {
                                var g = Object(v.d)(l, p);
                                return void e.source.postMessage(JSON.stringify(g), e.origin);
                            }
                            if ('allAssetRequest' === l.action ? (f = Object(v.c)(l, p), e.source.postMessage(JSON.stringify(f), e.origin)) : 'resizeNativeHeight' === l.action && (p.height = l.height, p.width = l.width, A(p)), 'click' === Object(v.b)(l, p))
                                return;
                            m.a.addWinningBid(p), b.a.emit(S, p);
                        }
                    }
                }
                function A(e) {
                    var s = e.adId, u = e.adUnitCode, l = e.width, f = e.height;
                    [
                        'div',
                        'iframe'
                    ].forEach(function (e) {
                        var t, n, r, i, o, a, c, d = (t = e + ':not([style*="display: none"])', o = u, n = window.googletag ? (c = s, h()(window.googletag.pubads().getSlots(), function (t) {
                                return h()(t.getTargetingKeys(), function (e) {
                                    return p()(t.getTargeting(e), c);
                                });
                            }).getSlotElementId()) : window.apntag ? (a = window.apntag.getTag(o)) && a.targetId : o, (r = document.getElementById(n)) && r.querySelector(t));
                        d ? ((i = d.style).width = l + 'px', i.height = f + 'px') : Object(y.logWarn)('Unable to locate matching page element for adUnitCode '.concat(u, '.  Can\'t resize it to ad\'s dimensions.  Please review setup.'));
                    });
                }
            },
            233: function (e, t, n) {
                'use strict';
                t.a = function (e) {
                    const $___old_9281c663049c513e = {}.constructor.getOwnPropertyDescriptor(window, 'sessionStorage');
                    try {
                        if ($___old_9281c663049c513e)
                            ({}.constructor.defineProperty(window, 'sessionStorage', $___mock_f8a288802595a372.sessionStorage));
                        return function () {
                            var t;
                            try {
                                e = e || window.sessionStorage, t = JSON.parse(e.getItem(d));
                            } catch (e) {
                            }
                            t && f(t, !0);
                        }.apply(this, arguments);
                    } finally {
                        if ($___old_9281c663049c513e)
                            ({}.constructor.defineProperty(window, 'sessionStorage', $___old_9281c663049c513e));
                    }
                };
                var i, o, a = n(3), r = n(0), c = n(41), d = 'pbjsYLHH:debugging';
                function s(e) {
                    Object(r.logMessage)('DEBUG: ' + e);
                }
                function u(e) {
                    Object(r.logWarn)('DEBUG: ' + e);
                }
                function l() {
                    c.c.getHooks({ hook: i }).remove(), c.e.getHooks({ hook: o }).remove();
                }
                function f(e, t) {
                    var n, r = 1 < arguments.length && void 0 !== t && t;
                    a.b.setConfig({ debug: !0 }), l(), i = function (e, t, n) {
                        g(this.bidders, n.bidderCode) ? u('bidder \''.concat(n.bidderCode, '\' excluded from auction by bidder overrides')) : (Array.isArray(this.bids) && this.bids.forEach(function (e) {
                            p(e, n.bidderCode, t) || b(e, n, 'bidder');
                        }), e(t, n));
                    }.bind(n = e), c.c.before(i, 5), o = function (e, t) {
                        var r = this, n = t.filter(function (e) {
                                return !g(r.bidders, e.bidderCode) || (u('bidRequest \''.concat(e.bidderCode, '\' excluded from auction by bidder overrides')), !1);
                            });
                        Array.isArray(r.bidRequests) && n.forEach(function (n) {
                            r.bidRequests.forEach(function (t) {
                                n.bids.forEach(function (e) {
                                    p(t, n.bidderCode, e.adUnitCode) || b(t, e, 'bidRequest');
                                });
                            });
                        }), e(n);
                    }.bind(n), c.e.before(o, 5), s('bidder overrides enabled'.concat(r ? ' from session' : ''));
                }
                function p(e, t, n) {
                    return e.bidder && e.bidder !== t || e.adUnitCode && e.adUnitCode !== n;
                }
                function g(e, t) {
                    return Array.isArray(e) && -1 === e.indexOf(t);
                }
                function b(n, e, r) {
                    return Object.keys(n).filter(function (e) {
                        return -1 === [
                            'adUnitCode',
                            'bidder'
                        ].indexOf(e);
                    }).reduce(function (e, t) {
                        return s('bidder overrides changed \''.concat(e.adUnitCode, '/').concat(e.bidderCode, '\' ').concat(r, '.').concat(t, ' from \'').concat(e[t], '.js\' to \'').concat(n[t], '\'')), e[t] = n[t], e;
                    }, e);
                }
                a.b.getConfig('debugging', function (e) {
                    return function (e) {
                        if (e.enabled) {
                            try {
                                window.sessionStorage.setItem(d, JSON.stringify(e));
                            } catch (e) {
                            }
                            f(e);
                        } else {
                            l(), s('bidder overrides disabled');
                            try {
                                window.sessionStorage.removeItem(d);
                            } catch (e) {
                            }
                        }
                    }(e.debugging);
                });
            },
            234: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return i;
                }), n.d(t, 'b', function () {
                    return o;
                }), t.c = function (e) {
                    e.setConfig({
                        cache: { url: 'https://prebid.adnxs.com/pbc/v1/cache' },
                        s2sConfig: {
                            endpoint: 'https://prebid.adnxs.com/pbs/v1/auction',
                            syncEndpoint: 'https://prebid.adnxs.com/pbs/v1/cookie_sync'
                        }
                    }), e.setConfig({
                        userSync: {
                            filterSettings: {
                                all: {
                                    bidders: '*',
                                    filter: 'include'
                                }
                            },
                            userIds: [
                                {
                                    name: 'pubCommonId',
                                    params: {}
                                },
                                { name: 'criteo' }
                            ]
                        },
                        gvlMapping: {
                            stroeerCore: 136,
                            orbidder: 559,
                            triplelift: 28,
                            smartadserver: 45,
                            id5Id: 131,
                            id5id: 131,
                            criteo: 91,
                            adform: 50,
                            openx: 69,
                            pubmatic: 76,
                            rubicon: 52,
                            districtm: 144,
                            audienceNetwork: 717,
                            pulsepoint: 81,
                            yieldlab: 70,
                            yieldlab2: 70,
                            rhythmone: 36,
                            unruly: 162,
                            pubCommonId: 24,
                            shareId: 887,
                            sharedId: 887
                        }
                    }), e.setConfig({
                        enableSendAllBids: !1,
                        useBidCache: !0
                    });
                };
                var i = 0.92;
                function r(r) {
                    return function (e, t) {
                        try {
                            var n = window.YLHH.bidder.settings;
                            return e * (r in (n.bid_adjustment_factor || {}) ? n.bid_adjustment_factor[r] : 1) * (r in (n.currencies || { USD: [] } || []) ? n.usd_to_eur || i : 1);
                        } catch (t) {
                            return e;
                        }
                    };
                }
                var o = {
                    adform: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('adform') : 0.89 * e * i;
                        }
                    },
                    aol: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('aol') : e * i;
                        }
                    },
                    appnexus: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('appnexus') : e * i;
                        }
                    },
                    appnexusAst: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('appnexusAst') : e * i;
                        }
                    },
                    audienceNetwork: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('audienceNetwork') : e * i;
                        }
                    },
                    brealtime: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('brealtime') : 0.6 * e * i;
                        }
                    },
                    conversant: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('conversant') : e * i;
                        }
                    },
                    criteo: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('criteo') : e;
                        }
                    },
                    districtmDMX: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('districtmDMX') : e * i;
                        }
                    },
                    ix: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('ix') : e;
                        }
                    },
                    inskinBidAdapter: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('inskinBidAdapter') : e;
                        }
                    },
                    justpremium: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('justpremium') : 0.7 * e;
                        }
                    },
                    orbidder: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('orbidder') : e;
                        }
                    },
                    openx: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('openx') : e;
                        }
                    },
                    pubmatic: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('pubmatic') : 0.85 * e * i;
                        }
                    },
                    pulsepoint: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('pulsepoint') : e * i;
                        }
                    },
                    pulsepointLite: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('pulsepointLite') : e * i;
                        }
                    },
                    rubicon: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('rubicon') : e * i;
                        }
                    },
                    sekindo: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('sekindo') : 0.6 * e * i;
                        }
                    },
                    sekindoUM: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('sekindoUM') : e * i;
                        }
                    },
                    sonobi: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('sonobi') : e * i;
                        }
                    },
                    smartadserver: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('smartadserver') : e;
                        }
                    },
                    sovrn: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('sovrn') : e * i;
                        }
                    },
                    stroeerCore: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('stroeerCore') : e;
                        }
                    },
                    yieldlab: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('yieldlab') : e;
                        }
                    },
                    yieldlab2: {
                        bidCpmAdjustment: function (e) {
                            return window.YLHH.bidder.settings && window.YLHH.bidder.settings.newSettings ? r('yieldlab2') : 2 * e;
                        }
                    }
                };
            },
            235: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return r;
                });
                var r = {
                    startRendering: 'startRendering',
                    renderEnded: 'renderEnded'
                };
            },
            236: function (e, s) {
                function o() {
                    return (o = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                e.exports = s = {}, s.adUnitData = {}, s.getPriceBucket = function (e) {
                    if (void 0 === e)
                        return !1;
                    var t = pbjsYLHH.getBidResponsesForAdId(e);
                    return !(!t || !s.isSecondPriceAuction(t)) && s.calculateAuctionPrice(t);
                }, s.renderAd = function (e, t) {
                    if (!s.isSecondPriceAuction(t))
                        return e;
                    var n = s.getGenerateAdOptions(t);
                    s.log('Generating an ad using the following options: ', n);
                    var r = t.generateAd(n), i = t.adUnitCode;
                    return i in s.adUnitData || (s.adUnitData[i] = {}), s.adUnitData[i] = o(s.adUnitData[i], n), r;
                }, s.getGenerateAdOptions = function (e) {
                    return {
                        auctionPrice: parseFloat(s.calculateAuctionPrice(e)) || 0,
                        firstBid: parseFloat(e.cpm) || 0,
                        secondBid: parseFloat(e.yieldlove.auction.second) || 0,
                        thirdBid: parseFloat(e.yieldlove.auction.third) || 0
                    };
                }, s.isSecondPriceAuction = function (e) {
                    return void 0 !== e && 'stroeerCore' === e.bidderCode && void 0 !== e.cpm && void 0 !== e.floor && void 0 !== e.generateAd && 'YLHH' in window && 'bidder' in window.YLHH && 'settings' in window.YLHH.bidder && !!window.YLHH.bidder.settings.isStroeer2ndPriceAuction;
                }, s.log = function () {
                    var e;
                    'YLHH' in window && 'bidder' in window.YLHH && ((e = Array.prototype.slice.call(arguments)).unshift('DEBUG'), e.unshift('StroeerCore'), window.YLHH.bidder.log.apply(window.YLHH.bidder, e));
                }, s.calculateAuctionPrice = function (e) {
                    var t, n, r = e.yieldlove.cpm.ssp, i = e.cpm2 || 0, o = e.floor || 0, a = e.maxprice || 1 / 0, c = e.yieldlove.auction.second;
                    'YLHH' in window && 'bidder' in window.YLHH && 'placementConfig' in window.YLHH.bidder && c < (n = (t = window.YLHH.bidder.getAdUnitByCode(e.adUnitCode)) && t.cutoffPrice || 0) && (c = n);
                    var d = o <= r && c < o && i < o ? o : c < r && o < c && i < c || o == c && i < o && o < r ? Math.min(c + 0.01, r, a) : r == c || r == i ? Math.min(r, a) : c <= i ? Math.min(i + 0.01, r, a) : o;
                    return s.log('Calculated auction price: ' + d, {
                        cpm: r,
                        cpm2: i,
                        floor: o,
                        maxprice: a,
                        bid2: c
                    }, e), d;
                };
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
            25: function (e, t, n) {
                'use strict';
                n.d(t, 'b', function () {
                    return c;
                }), n.d(t, 'a', function () {
                    return d;
                }), t.d = function (e, t) {
                    var n = Object(o.getBidRequest)(e.requestId, t), r = n && Object(o.deepAccess)(n, 'mediaTypes.video'), i = r && Object(o.deepAccess)(r, 'context');
                    return s(e, n, r, i);
                }, n.d(t, 'c', function () {
                    return s;
                }), n(8);
                var o = n(0), i = n(3), r = n(12), a = (n.n(r), n(13)), c = 'outstream', d = 'instream', s = Object(a.b)('sync', function (e, t, n, r) {
                        return !t || n && r !== c ? i.b.getConfig('cache.url') || !e.vastXml || e.vastUrl ? !(!e.vastUrl && !e.vastXml) : (Object(o.logError)('\n        This bid contains only vastXml and will not work when a prebid cache url is not specified.\n        Try enabling prebid cache with pbjsYLHH.setConfig({ cache: {url: "..."} });\n      '), !1) : r !== c || !!(e.renderer || t.renderer || n.renderer);
                    }, 'checkVideoBidSetup');
            },
            26: function (n, e, t) {
                (function (e) {
                    function t(e) {
                        return e && e.Math == Math && e;
                    }
                    n.exports = t('object' == typeof globalThis && globalThis) || t('object' == typeof window && window) || t('object' == typeof self && self) || t('object' == typeof e && e) || Function('return this')();
                }.call(e, t(35)));
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
                var i = n(42), o = n(26);
                e.exports = function (e, t) {
                    return arguments.length < 2 ? r(i[e]) || r(o[e]) : i[e] && i[e][t] || o[e] && o[e][t];
                };
            },
            3: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return h;
                }), n.d(t, 'b', function () {
                    return T;
                });
                var r = n(45), i = n(10), a = n.n(i), o = n(12), c = n.n(o), d = n(79), s = n.n(d), u = n(0);
                function l(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                function f(e) {
                    return (f = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
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
                var g = n(91), b = n(0), v = n(5), y = 'TRUE' === b.getParameterByName(v.DEBUG_MODE).toUpperCase(), m = window.location.origin, h = 'random', w = {};
                w[h] = !0, w.fixed = !0;
                var S, A, E, I, O, C = h, _ = {
                        LOW: 'low',
                        MEDIUM: 'medium',
                        HIGH: 'high',
                        AUTO: 'auto',
                        DENSE: 'dense',
                        CUSTOM: 'custom'
                    }, T = (I = [], O = null, j(), {
                        getCurrentBidder: function () {
                            return O;
                        },
                        getConfig: function () {
                            if (arguments.length <= 1 && 'function' != typeof (arguments.length <= 0 ? void 0 : arguments[0])) {
                                var e = arguments.length <= 0 ? void 0 : arguments[0];
                                return e ? b.deepAccess(H(), e) : H();
                            }
                            return function (e, t) {
                                var n = t;
                                if ('string' != typeof e && (n = e, e = '*'), 'function' == typeof n) {
                                    var r = {
                                        topic: e,
                                        callback: n
                                    };
                                    return I.push(r), function () {
                                        I.splice(I.indexOf(r), 1);
                                    };
                                }
                                b.logError('listener must be a function');
                            }.apply(void 0, arguments);
                        },
                        setConfig: function (r) {
                            var e, i;
                            b.isPlainObject(r) ? (e = Object.keys(r), i = {}, e.forEach(function (e) {
                                var t = 'fpd' === e ? 'ortb2' : e, n = 'fpd' === e ? U(r[e]) : r[e];
                                b.isPlainObject(S[t]) && b.isPlainObject(n) && (n = p({}, S[t], n)), i[t] = A[t] = n;
                            }), D(i)) : b.logError('setConfig options must be an object');
                        },
                        setDefaults: function (e) {
                            b.isPlainObject(S) ? (p(S, e), p(A, e)) : b.logError('defaults must be an object');
                        },
                        resetConfig: j,
                        runWithBidder: x,
                        callbackWithBidder: function (o) {
                            return function (i) {
                                return function () {
                                    if ('function' == typeof i) {
                                        for (var e, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
                                            n[r] = arguments[r];
                                        return x(o, (e = b.bind).call.apply(e, [
                                            i,
                                            this
                                        ].concat(n)));
                                    }
                                    b.logWarn('config.callbackWithBidder callback is not a function');
                                };
                            };
                        },
                        setBidderConfig: function (i) {
                            try {
                                !function (e) {
                                    if (!b.isPlainObject(e))
                                        throw 'setBidderConfig bidder options must be an object';
                                    if (!Array.isArray(e.bidders) || !e.bidders.length)
                                        throw 'setBidderConfig bidder options must contain a bidders list with at least 1 bidder';
                                    if (!b.isPlainObject(e.config))
                                        throw 'setBidderConfig bidder options must contain a config object';
                                }(i), i.bidders.forEach(function (r) {
                                    E[r] || (E[r] = {}), Object.keys(i.config).forEach(function (e) {
                                        var t = 'fpd' === e ? 'ortb2' : e, n = 'fpd' === e ? U(i.config[e]) : i.config[e];
                                        b.isPlainObject(n) ? E[r][t] = p({}, E[r][t] || {}, n) : E[r][t] = n;
                                    });
                                });
                            } catch (e) {
                                b.logError(e);
                            }
                        },
                        getBidderConfig: function () {
                            return E;
                        },
                        convertAdUnitFpd: function (e) {
                            var t = [];
                            return e.forEach(function (e) {
                                e.fpd ? (e.ortb2Imp ? b.mergeDeep(e.ortb2Imp, k(e.fpd)) : e.ortb2Imp = k(e.fpd), t.push((e.fpd, function (e, t) {
                                    if (null == e)
                                        return {};
                                    var n, r = function (e, t) {
                                            if (null == e)
                                                return {};
                                            for (var n, r = {}, i = Object.keys(e), o = 0; o < i.length; o++)
                                                n = i[o], 0 <= t.indexOf(n) || (r[n] = e[n]);
                                            return r;
                                        }(e, t);
                                    if (Object.getOwnPropertySymbols)
                                        for (var i = Object.getOwnPropertySymbols(e), o = 0; o < i.length; o++)
                                            n = i[o], 0 <= t.indexOf(n) || Object.prototype.propertyIsEnumerable.call(e, n) && (r[n] = e[n]);
                                    return r;
                                }(e, ['fpd'])))) : t.push(e);
                            }), t;
                        },
                        getLegacyFpd: function (r) {
                            if ('object' === f(r)) {
                                var t = {};
                                return Object.keys(r).forEach(function (n) {
                                    var e = 'site' === n ? 'context' : n;
                                    t[e] = 'context' === e || 'user' === e ? Object.keys(r[n]).filter(function (e) {
                                        return 'data' !== e;
                                    }).reduce(function (e, t) {
                                        return 'ext' === t ? b.mergeDeep(e, r[n][t]) : b.mergeDeep(e, l({}, t, r[n][t])), e;
                                    }, {}) : r[n];
                                }), t;
                            }
                        },
                        getLegacyImpFpd: function (t) {
                            if ('object' === f(t)) {
                                var n = {};
                                return b.deepAccess(t, 'ext.data') && Object.keys(t.ext.data).forEach(function (e) {
                                    'pbadslot' === e ? b.mergeDeep(n, { context: { pbAdSlot: t.ext.data[e] } }) : 'adserver' === e ? b.mergeDeep(n, { context: { adServer: t.ext.data[e] } }) : b.mergeDeep(n, { context: { data: l({}, e, t.ext.data[e]) } });
                                }), n;
                            }
                        }
                    });
                function j() {
                    S = {};
                    var n = {
                        _debug: y,
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
                        _priceGranularity: _.MEDIUM,
                        set priceGranularity(e) {
                            o(e) && ('string' == typeof e ? this._priceGranularity = i(e) ? e : _.MEDIUM : b.isPlainObject(e) && (this._customPriceBucket = e, this._priceGranularity = _.CUSTOM, b.logMessage('Using custom price granularity')));
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
                                return o(n[t]) ? 'string' == typeof n ? e[t] = i(n[t]) ? n[t] : r._priceGranularity : b.isPlainObject(n) && (e[t] = n[t], b.logMessage('Using custom price granularity for '.concat(t))) : b.logWarn('Invalid price granularity for media type: '.concat(t)), e;
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
                        _bidderSequence: C,
                        get bidderSequence() {
                            return this._bidderSequence;
                        },
                        set bidderSequence(e) {
                            w[e] ? this._bidderSequence = e : b.logWarn('Invalid order: '.concat(e, '. Bidder Sequence was not set.'));
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
                                if (!b.isPlainObject(e))
                                    return b.logWarn('Auction Options must be an object'), 0;
                                for (var t = 0, n = Object.keys(e); t < n.length; t++) {
                                    var r = n[t];
                                    if ('secondaryBidders' !== r)
                                        return b.logWarn('Auction Options given an incorrect param: '.concat(r)), 0;
                                    if ('secondaryBidders' === r) {
                                        if (!b.isArray(e[r]))
                                            return b.logWarn('Auction Options '.concat(r, ' must be of type Array')), 0;
                                        if (!e[r].every(b.isStr))
                                            return b.logWarn('Auction Options '.concat(r, ' must be only string')), 0;
                                    }
                                }
                                return 1;
                            }(e) || (this._auctionOptions = e);
                        }
                    };
                    function i(t) {
                        return a()(Object.keys(_), function (e) {
                            return t === _[e];
                        });
                    }
                    function o(e) {
                        if (e) {
                            if ('string' == typeof e)
                                i(e) || b.logWarn('Prebid Warning: setPriceGranularity was called with invalid setting, using `medium` as default.');
                            else if (b.isPlainObject(e) && !Object(r.b)(e))
                                return b.logError('Invalid custom price value passed to `setPriceGranularity()`'), 0;
                            return 1;
                        }
                        b.logError('Prebid Error: no value passed to `setPriceGranularity()`');
                    }
                    A && D(Object.keys(A).reduce(function (e, t) {
                        return A[t] !== n[t] && (e[t] = n[t] || {}), e;
                    }, {})), A = n, E = {};
                }
                function H() {
                    if (O && E && b.isPlainObject(E[O])) {
                        var n = E[O], e = new s.a(Object.keys(A).concat(Object.keys(n)));
                        return g(e).reduce(function (e, t) {
                            return void 0 === n[t] ? e[t] = A[t] : void 0 !== A[t] && b.isPlainObject(n[t]) ? e[t] = Object(u.mergeDeep)({}, A[t], n[t]) : e[t] = n[t], e;
                        }, {});
                    }
                    return p({}, A);
                }
                function U(r) {
                    var t = {};
                    return Object.keys(r).forEach(function (n) {
                        var e = 'context' === n ? 'site' : n;
                        t[e] = 'site' === e || 'user' === e ? Object.keys(r[n]).reduce(function (e, t) {
                            return 'data' === t ? b.mergeDeep(e, { ext: { data: r[n][t] } }) : b.mergeDeep(e, l({}, t, r[n][t])), e;
                        }, {}) : r[n];
                    }), t;
                }
                function k(r) {
                    var i = {};
                    return Object.keys(r).filter(function (e) {
                        return 'context' === e;
                    }).forEach(function (n) {
                        Object.keys(r[n]).forEach(function (t) {
                            'data' === t ? b.mergeDeep(i, { ext: { data: r[n][t] } }) : 'object' !== f(r[n][t]) || Array.isArray(r[n][t]) ? b.mergeDeep(i, { ext: { data: l({}, t.toLowerCase(), r[n][t]) } }) : Object.keys(r[n][t]).forEach(function (e) {
                                b.mergeDeep(i, { ext: { data: l({}, t.toLowerCase(), l({}, e.toLowerCase(), r[n][t][e])) } });
                            });
                        });
                    }), i;
                }
                function D(t) {
                    var n = Object.keys(t);
                    I.filter(function (e) {
                        return c()(n, e.topic);
                    }).forEach(function (e) {
                        e.callback(l({}, e.topic, t[e.topic]));
                    }), I.filter(function (e) {
                        return '*' === e.topic;
                    }).forEach(function (e) {
                        return e.callback(t);
                    });
                }
                function x(e, t) {
                    O = e;
                    try {
                        return t();
                    } finally {
                        O = null;
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
            35: function (e, t) {
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
            36: function (e, t, n) {
                var r = n(16), i = n(90);
                e.exports = r ? i : function (e) {
                    return Set.prototype.values.call(e);
                };
            },
            37: function (e, t, n) {
                'use strict';
                n.d(t, 'f', function () {
                    return o;
                }), n.d(t, 'a', function () {
                    return d;
                }), t.h = function (e) {
                    return e && e.type && ((t = e.type) && a()(Object.keys(s), t) || (Object(u.logError)(''.concat(t, ' nativeParam is not supported')), 0)) ? s[e.type] : e;
                    var t;
                }, t.g = function (t, e) {
                    var n = Object(u.getBidRequest)(t.requestId, e);
                    if (!n)
                        return !1;
                    if (!Object(u.deepAccess)(t, 'native.clickUrl'))
                        return !1;
                    if (Object(u.deepAccess)(t, 'native.image') && (!Object(u.deepAccess)(t, 'native.image.height') || !Object(u.deepAccess)(t, 'native.image.width')))
                        return !1;
                    if (Object(u.deepAccess)(t, 'native.icon') && (!Object(u.deepAccess)(t, 'native.icon.height') || !Object(u.deepAccess)(t, 'native.icon.width')))
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
                    return 'click' === e.action ? n = t.native && t.native.clickTrackers : (n = t.native && t.native.impressionTrackers, t.native && t.native.javascriptTrackers && Object(u.insertHtmlIntoIframe)(t.native.javascriptTrackers)), (n || []).forEach(u.triggerPixel), e.action;
                }, t.e = function (o, a) {
                    var c = {};
                    Object(u.deepAccess)(a, 'nativeParams.rendererUrl') ? o.native.rendererUrl = p(a.nativeParams.rendererUrl) : Object(u.deepAccess)(a, 'nativeParams.adTemplate') && (o.native.adTemplate = p(a.nativeParams.adTemplate));
                    var e, t, d = !1 !== Object(u.deepAccess)(a, 'nativeParams.sendTargetingKeys'), s = (e = a, t = {}, Object(u.deepAccess)(e, 'nativeParams.ext') && Object.keys(e.nativeParams.ext).forEach(function (e) {
                            t[e] = 'hb_native_'.concat(e);
                        }), l(l({}, f.NATIVE_KEYS), t)), n = l(l({}, o.native), o.native.ext);
                    return delete n.ext, Object.keys(n).forEach(function (e) {
                        var t, n, r = s[e], i = p(o.native[e]) || p(Object(u.deepAccess)(o, 'native.ext.'.concat(e)));
                        'adTemplate' !== e && r && i && ('boolean' != typeof (t = Object(u.deepAccess)(a, 'nativeParams.'.concat(e, '.sendId'))) && (t = Object(u.deepAccess)(a, 'nativeParams.ext.'.concat(e, '.sendId'))), t && (i = ''.concat(r, ':').concat(o.adId)), 'boolean' != typeof (n = Object(u.deepAccess)(a, 'nativeParams.'.concat(e, '.sendTargetingKeys'))) && (n = Object(u.deepAccess)(a, 'nativeParams.ext.'.concat(e, '.sendTargetingKeys'))), ('boolean' == typeof n ? n : d) && (c[r] = i));
                    }), c;
                }, t.d = function (e, r) {
                    var i = {
                        message: 'assetResponse',
                        adId: e.adId,
                        assets: []
                    };
                    return r.native.hasOwnProperty('adTemplate') && (i.adTemplate = p(r.native.adTemplate)), r.native.hasOwnProperty('rendererUrl') && (i.rendererUrl = p(r.native.rendererUrl)), e.assets.forEach(function (e) {
                        var t = Object(u.getKeyByValue)(f.NATIVE_KEYS, e), n = p(r.native[t]);
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
                        }) : r.native[n] && f.NATIVE_KEYS.hasOwnProperty(n) && (t = p(r.native[n]), i.assets.push({
                            key: n,
                            value: t
                        }));
                    }), i;
                };
                var u = n(0), r = n(12), a = n.n(r);
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
                function l(i) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? c(Object(o), !0).forEach(function (e) {
                            var t, n = i, r = o[t = e];
                            t in n ? Object.defineProperty(n, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : n[t] = r;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : c(Object(o)).forEach(function (e) {
                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                        });
                    }
                    return i;
                }
                var f = n(5), o = [], d = Object.keys(f.NATIVE_KEYS).map(function (e) {
                        return f.NATIVE_KEYS[e];
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
            371: function (e, t, n) {
                n(372);
                var r = n(52);
                e.exports = r('String', 'includes');
            },
            372: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(373), o = n(49);
                r({
                    target: 'String',
                    proto: !0,
                    forced: !n(375)('includes')
                }, {
                    includes: function (e, t) {
                        return !!~String(o(this)).indexOf(i(e), 1 < arguments.length ? t : void 0);
                    }
                });
            },
            373: function (e, t, n) {
                var r = n(374);
                e.exports = function (e) {
                    if (r(e))
                        throw TypeError('The method doesn\'t accept regular expressions');
                    return e;
                };
            },
            374: function (e, t, n) {
                var r = n(27), i = n(48), o = n(21)('match');
                e.exports = function (e) {
                    var t;
                    return r(e) && (void 0 !== (t = e[o]) ? !!t : 'RegExp' == i(e));
                };
            },
            375: function (e, t, n) {
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
            38: function (e, t) {
                e.exports = {};
            },
            39: function (e, t, n) {
                var i = n(15), o = n(19), a = n(21)('species');
                e.exports = function (e, t) {
                    var n, r = i(e).constructor;
                    return void 0 === r || null == (n = i(r)[a]) ? t : o(n);
                };
            },
            4: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return r;
                }), t.b = i;
                var f = n(3);
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
                    var s = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 3000, e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {}, u = e.request, l = e.done;
                    return function (e, t, n) {
                        var r = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : {};
                        try {
                            var i, o = r.method || (n ? 'POST' : 'GET'), a = document.createElement('a');
                            a.href = e;
                            var c, d = 'object' === g(t) && null !== t ? t : {
                                    success: function () {
                                        b.logMessage('xhr success');
                                    },
                                    error: function (e) {
                                        b.logError('xhr error', null, e);
                                    }
                                };
                            'function' == typeof t && (d.success = t), (i = new window.XMLHttpRequest()).onreadystatechange = function () {
                                var e;
                                i.readyState === v && ('function' == typeof l && l(a.origin), 200 <= (e = i.status) && e < 300 || 304 === e ? d.success(i.responseText, i) : d.error(i.statusText, i));
                            }, f.b.getConfig('disableAjaxTimeout') || (i.ontimeout = function () {
                                b.logError('  xhr timeout after ', i.timeout, 'ms');
                            }), 'GET' === o && n && (p((c = b.parseUrl(e, r)).search, n), e = b.buildUrl(c)), i.open(o, e, !0), f.b.getConfig('disableAjaxTimeout') || (i.timeout = s), r.withCredentials && (i.withCredentials = !0), b._each(r.customHeaders, function (e, t) {
                                i.setRequestHeader(t, e);
                            }), r.preflight && i.setRequestHeader('X-Requested-With', 'XMLHttpRequest'), i.setRequestHeader('Content-Type', r.contentType || 'text/plain'), 'function' == typeof u && u(a.origin), 'POST' === o && n ? i.send(n) : i.send();
                        } catch (e) {
                            b.logError('xhr construction', e);
                        }
                    };
                }
            },
            40: function (e, t, n) {
                'use strict';
                t.a = function (t, e, n) {
                    var r, i, o;
                    if (e && t) {
                        if (a()(s, e))
                            return d[t] ? (n && 'function' == typeof n && (d[t].loaded ? n() : d[t].callbacks.push(n)), d[t].tag) : (d[t] = {
                                loaded: !1,
                                tag: null,
                                callbacks: []
                            }, n && 'function' == typeof n && d[t].callbacks.push(n), c.logWarn('module '.concat(e, ' is loading external JavaScript')), r = t, i = function () {
                                d[t].loaded = !0;
                                try {
                                    for (var e = 0; e < d[t].callbacks.length; e++)
                                        d[t].callbacks[e]();
                                } catch (e) {
                                    c.logError('Error executing callback', 'adloader.js:loadExternalScript', e);
                                }
                            }, (o = document.createElement('script')).type = 'text/javascript', o.async = !0, (d[t].tag = o).readyState ? o.onreadystatechange = function () {
                                'loaded' !== o.readyState && 'complete' !== o.readyState || (o.onreadystatechange = null, i());
                            } : o.onload = function () {
                                i();
                            }, o.src = r, c.insertElement(o), o);
                        c.logError(''.concat(e, ' not whitelisted for loading external JavaScript'));
                    } else
                        c.logError('cannot load external script without url and moduleCode');
                };
                var r = n(12), a = n.n(r), c = n(0), d = {}, s = [
                        'criteo',
                        'outstream',
                        'adagio',
                        'browsi'
                    ];
            },
            41: function (e, t, n) {
                'use strict';
                n.d(t, 'b', function () {
                    return G;
                }), n.d(t, 'a', function () {
                    return q;
                }), t.k = function (e) {
                    var t, i, b, v, o = e.adUnits, n = e.adUnitCodes, r = e.callback, a = e.cbTimeout, c = e.labels, d = e.auctionId, y = o, s = c, u = n, l = [], f = [], p = [], g = d || R.generateUUID(), m = r, h = a, w = [], S = new Set();
                    function A() {
                        return {
                            auctionId: g,
                            timestamp: t,
                            auctionEnd: i,
                            auctionStatus: b,
                            adUnits: y,
                            adUnitCodes: u,
                            labels: s,
                            bidderRequests: l,
                            noBids: p,
                            bidsReceived: f,
                            winningBids: w,
                            timeout: h
                        };
                    }
                    function E(n, e) {
                        var r, t;
                        e && clearTimeout(v), void 0 === i && (r = [], n && (R.logMessage('Auction '.concat(g, ' timedOut')), t = S, (r = l.map(function (e) {
                            return (e.bids || []).filter(function (e) {
                                return !t.has(e.bidder);
                            });
                        }).reduce(_.flatten, []).map(function (e) {
                            return {
                                bidId: e.bidId,
                                bidder: e.bidder,
                                adUnitCode: e.adUnitCode,
                                auctionId: e.auctionId
                            };
                        })).length && Y.emit(N.EVENTS.BID_TIMEOUT, r)), b = q, i = Date.now(), Y.emit(N.EVENTS.AUCTION_END, A()), Q(y, function () {
                            try {
                                var e;
                                null != m && (e = f.filter(R.bind.call(_.adUnitsFilter, this, u)).reduce(ee, {}), m.apply(pbjsYLHH, [
                                    e,
                                    n,
                                    g
                                ]), m = null);
                            } catch (e) {
                                R.logError('Error executing bidsBackHandler', null, e);
                            } finally {
                                r.length && P.callTimedOutBidders(o, r, h);
                                var t = H.b.getConfig('userSync') || {};
                                t.enableOverride || L(t.syncDelay);
                            }
                        }));
                    }
                    function I() {
                        R.logInfo('Bids Received for Auction with id: '.concat(g), f), b = q, E(!1, !0);
                    }
                    function O(e) {
                        S.add(e);
                    }
                    function C(n) {
                        var c = this;
                        n.forEach(function (e) {
                            l = l.concat(e);
                        });
                        var d = {}, e = {
                                bidRequests: n,
                                run: function () {
                                    var e = E.bind(null, !0), t = setTimeout(e, h);
                                    v = t, b = G, Y.emit(N.EVENTS.AUCTION_INIT, A());
                                    var r, u, l, i, o, f, a = (r = I, u = c, l = 0, i = !1, o = new Set(), f = {}, {
                                            addBidResponse: function (e, t) {
                                                f[t.requestId] = !0, l++;
                                                var n, r, i, o, a, c, d, s = function (e) {
                                                        var t = e.adUnitCode, n = e.bid, r = e.bidderRequest, i = e.auctionId, o = r.start, a = B({}, n, {
                                                                auctionId: i,
                                                                responseTimestamp: Object(_.timestamp)(),
                                                                requestTimestamp: o,
                                                                cpm: parseFloat(n.cpm) || 0,
                                                                bidder: n.bidderCode,
                                                                adUnitCode: t
                                                            });
                                                        a.timeToRespond = a.responseTimestamp - a.requestTimestamp, Y.emit(N.EVENTS.BID_ADJUSTMENT, a);
                                                        var c = r.bids && U()(r.bids, function (e) {
                                                                return e.adUnitCode == t && e.bidId == a.requestId;
                                                            }), d = c && c.renderer, s = a.mediaType, u = c && c.mediaTypes && c.mediaTypes[s], l = u && u.renderer, f = null;
                                                        l && l.url && l.render && (!0 !== l.backupOnly || !n.renderer) ? f = l : d && d.url && d.render && (!0 !== d.backupOnly || !n.renderer) && (f = d), f && (a.renderer = j.a.install({ url: f.url }), a.renderer.setRender(f.render));
                                                        var p = Z(n.mediaType, c, H.b.getConfig('mediaTypePriceGranularity')), g = Object(T.a)(a.cpm, 'object' === x(p) ? p : H.b.getConfig('customPriceBucket'), H.b.getConfig('currency.granularityMultiplier'));
                                                        return a.pbLg = g.low, a.pbMg = g.med, a.pbHg = g.high, a.pbAg = g.auto, a.pbDg = g.dense, a.pbCg = g.custom, a;
                                                    }({
                                                        adUnitCode: e,
                                                        bid: t,
                                                        bidderRequest: this,
                                                        auctionId: u.getAuctionId()
                                                    });
                                                'video' === s.mediaType ? (n = u, r = s, i = p, o = !0, d = (c = (a = Object(_.getBidRequest)(r.requestId, [this])) && Object(_.deepAccess)(a, 'mediaTypes.video')) && Object(_.deepAccess)(c, 'context'), H.b.getConfig('cache.url') && d !== D.b && (!r.videoCacheKey || H.b.getConfig('cache.ignoreBidderCacheKey') ? (o = !1, X(n, r, i, a)) : r.vastUrl || (R.logError('videoCacheKey specified but not required vastUrl for video bid'), o = !1)), o && ($(n, r), i())) : ($(u, s), p());
                                            },
                                            adapterDone: function () {
                                                var t, e = u.getBidRequests(), n = H.b.getConfig('auctionOptions');
                                                o.add(this), !n || R.isEmpty(n) || (t = n.secondaryBidders) && !e.every(function (e) {
                                                    return k()(t, e.bidderCode);
                                                }) && (e = e.filter(function (e) {
                                                    return !k()(t, e.bidderCode);
                                                })), i = e.every(function (e) {
                                                    return o.has(e);
                                                }), this.bids.forEach(function (e) {
                                                    f[e.bidId] || (u.addNoBid(e), Y.emit(N.EVENTS.NO_BID, e));
                                                }), i && 0 === l && r();
                                            }
                                        });
                                    function p() {
                                        l--, i && 0 === l && r();
                                    }
                                    P.callBids(y, n, function () {
                                        for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                                            t[n] = arguments[n];
                                        K.apply({
                                            dispatch: a.addBidResponse,
                                            bidderRequest: this
                                        }, t);
                                    }, a.adapterDone, {
                                        request: function (e, t) {
                                            g(z, t), g(d, e), W[e] || (W[e] = {
                                                SRA: !0,
                                                origin: t
                                            }), 1 < d[e] && (W[e].SRA = !1);
                                        },
                                        done: function (e) {
                                            z[e]--, V[0] && s(V[0]) && V.shift();
                                        }
                                    }, h, O);
                                }
                            };
                        function s(e) {
                            var r = !0, i = H.b.getConfig('maxRequestsPerOrigin') || F;
                            return e.bidRequests.some(function (e) {
                                var t = 1, n = void 0 !== e.src && e.src === N.S2S.SRC ? 's2s' : e.bidderCode;
                                return W[n] && (!1 === W[n].SRA && (t = Math.min(e.bids.length, i)), z[W[n].origin] + t > i && (r = !1)), !r;
                            }), r && e.run(), r;
                        }
                        function g(e, t) {
                            void 0 === e[t] ? e[t] = 1 : e[t]++;
                        }
                        s(e) || (R.logWarn('queueing auction due to limited endpoint capacity'), V.push(e));
                    }
                    return {
                        addBidReceived: function (e) {
                            f = f.concat(e);
                        },
                        addNoBid: function (e) {
                            p = p.concat(e);
                        },
                        executeCallback: E,
                        callBids: function () {
                            b = M, t = Date.now();
                            var e = P.makeBidRequests(y, t, g, h, s);
                            R.logInfo('Bids Requested for Auction with id: '.concat(g), e), e.length < 1 ? (R.logWarn('No valid bid requests returned for auction'), I()) : J.call({
                                dispatch: C,
                                context: this
                            }, e);
                        },
                        addWinningBid: function (e) {
                            w = w.concat(e), P.callBidWonBidder(e.bidder, e, o);
                        },
                        setBidTargeting: function (e) {
                            P.callSetTargetingBidder(e.bidder, e);
                        },
                        getWinningBids: function () {
                            return w;
                        },
                        getTimeout: function () {
                            return h;
                        },
                        getAuctionId: function () {
                            return g;
                        },
                        getAuctionStatus: function () {
                            return b;
                        },
                        getAdUnits: function () {
                            return y;
                        },
                        getAdUnitCodes: function () {
                            return u;
                        },
                        getBidRequests: function () {
                            return l;
                        },
                        getBidsReceived: function () {
                            return f;
                        },
                        getNoBids: function () {
                            return p;
                        }
                    };
                }, n.d(t, 'c', function () {
                    return K;
                }), n.d(t, 'e', function () {
                    return J;
                }), t.g = u, t.d = $, n.d(t, 'f', function () {
                    return X;
                }), n.d(t, 'i', function () {
                    return l;
                }), n.d(t, 'h', function () {
                    return f;
                }), t.j = g;
                var _ = n(0), T = n(45), c = n(37), o = n(95), j = n(11), H = n(3), r = n(43), i = n(13), a = n(10), U = n.n(a), d = n(12), k = n.n(d), D = n(25), s = n(2);
                function x(e) {
                    return (x = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function B() {
                    return (B = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var L = r.a.syncUsers, R = n(0), P = n(8).default, Y = n(9), N = n(5), M = 'started', G = 'inProgress', q = 'completed';
                Y.on(N.EVENTS.BID_ADJUSTMENT, function (e) {
                    !function (e) {
                        var t, n = e.bidderCode, r = e.cpm;
                        if (pbjsYLHH.bidderSettings && (n && pbjsYLHH.bidderSettings[n] && 'function' == typeof pbjsYLHH.bidderSettings[n].bidCpmAdjustment ? t = pbjsYLHH.bidderSettings[n].bidCpmAdjustment : pbjsYLHH.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD] && 'function' == typeof pbjsYLHH.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment && (t = pbjsYLHH.bidderSettings[N.JSON_MAPPING.BD_SETTING_STANDARD].bidCpmAdjustment), t))
                            try {
                                r = t(e.cpm, B({}, e));
                            } catch (e) {
                                R.logError('Error during bid adjustment', 'bidmanager.js', e);
                            }
                        if ('YLHH' in window && 'bidder' in window.YLHH && 'adjustBid' in window.YLHH.bidder)
                            try {
                                r = window.YLHH.bidder.adjustBid(r, e);
                            } catch (e) {
                                R.logError('Error during bid adjustment', 'bidmanager.js', e);
                            }
                        0 <= r && (e.cpm = r);
                    }(e);
                });
                var F = 4, z = {}, W = {}, V = [], K = Object(i.b)('async', function (e, t) {
                        this.dispatch.call(this.bidderRequest, e, t);
                    }, 'addBidResponse'), J = Object(i.b)('sync', function (e) {
                        this.dispatch.call(this.context, e);
                    }, 'addBidderRequests'), Q = Object(i.b)('async', function (e, t) {
                        t && t();
                    }, 'bidsBackCallback');
                function u(e, t) {
                    t.timeToRespond > e.getTimeout() + H.b.getConfig('timeoutBuffer') && e.executeCallback(!0);
                }
                function $(e, t) {
                    var n, r, i, o = e.getBidRequests(), a = U()(o, function (e) {
                            return e.bidderCode === t.bidderCode;
                        });
                    (n = t).bidderCode && (0 < n.cpm || n.dealId) && (i = U()(a.bids, function (e) {
                        return e.adUnitCode === n.adUnitCode;
                    }), r = function (e, t, n) {
                        if (!t)
                            return {};
                        var r = {}, i = pbjsYLHH.bidderSettings;
                        return i && (b(r, g(t.mediaType, e, n), t), e && i[e] && i[e][N.JSON_MAPPING.ADSERVER_TARGETING] && (b(r, i[e], t), t.sendStandardTargeting = i[e].sendStandardTargeting)), t.native && (r = B({}, r, Object(c.e)(t, n))), r;
                    }(n.bidderCode, n, i)), n.adserverTargeting = B(n.adserverTargeting || {}, r), Y.emit(N.EVENTS.BID_RESPONSE, t), e.addBidReceived(t), u(e, t);
                }
                var X = Object(i.b)('async', function (n, r, i, e) {
                    Object(o.b)([r], function (e, t) {
                        e ? (R.logWarn('Failed to save to the video cache: '.concat(e, '. Video bid must be discarded.')), u(n, r)) : '' === t[0].uuid ? (R.logWarn('Supplied video cache key was already in use by Prebid Cache; caching attempt was rejected. Video bid must be discarded.'), u(n, r)) : (r.videoCacheKey = t[0].uuid, r.vastUrl || (r.vastUrl = Object(o.a)(r.videoCacheKey)), $(n, r), i());
                    }, e);
                }, 'callPrebidCache');
                function Z(e, t, n) {
                    if (e && n) {
                        if (e === s.d) {
                            var r = Object(_.deepAccess)(t, 'mediaTypes.'.concat(s.d, '.context'), 'instream');
                            if (n[''.concat(s.d, '-').concat(r)])
                                return n[''.concat(s.d, '-').concat(r)];
                        }
                        return n[e];
                    }
                }
                var l = function (e, t) {
                        var n = Z(e, t, H.b.getConfig('mediaTypePriceGranularity'));
                        return 'string' == typeof e && n ? 'string' == typeof n ? n : 'custom' : H.b.getConfig('priceGranularity');
                    }, f = function (t) {
                        return function (e) {
                            return t === N.GRANULARITY_OPTIONS.AUTO ? e.pbAg : t === N.GRANULARITY_OPTIONS.DENSE ? e.pbDg : t === N.GRANULARITY_OPTIONS.LOW ? e.pbLg : t === N.GRANULARITY_OPTIONS.MEDIUM ? e.pbMg : t === N.GRANULARITY_OPTIONS.HIGH ? e.pbHg : t === N.GRANULARITY_OPTIONS.CUSTOM ? e.pbCg : void 0;
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
                                return Object(_.getValue)(e, t);
                            }
                        };
                    }
                    var i, o, a = N.TARGETING_KEYS, c = l(e, n), d = pbjsYLHH.bidderSettings;
                    return d[N.JSON_MAPPING.BD_SETTING_STANDARD] || (d[N.JSON_MAPPING.BD_SETTING_STANDARD] = {}), d[N.JSON_MAPPING.BD_SETTING_STANDARD][N.JSON_MAPPING.ADSERVER_TARGETING] || (d[N.JSON_MAPPING.BD_SETTING_STANDARD][N.JSON_MAPPING.ADSERVER_TARGETING] = [
                        r(a.BIDDER, 'bidderCode'),
                        r(a.AD_ID, 'adId'),
                        r(a.PRICE_BUCKET, f(c)),
                        r(a.SIZE, 'size'),
                        r(a.DEAL, 'dealId'),
                        r(a.SOURCE, 'source'),
                        r(a.FORMAT, 'mediaType'),
                        r(a.ADOMAIN, p())
                    ]), 'video' === e && (i = d[N.JSON_MAPPING.BD_SETTING_STANDARD][N.JSON_MAPPING.ADSERVER_TARGETING], [
                        a.UUID,
                        a.CACHE_ID
                    ].forEach(function (t) {
                        void 0 === U()(i, function (e) {
                            return e.key === t;
                        }) && i.push(r(t, 'videoCacheKey'));
                    }), !H.b.getConfig('cache.url') || t && !1 === R.deepAccess(d, ''.concat(t, '.sendStandardTargeting')) || (o = Object(_.parseUrl)(H.b.getConfig('cache.url')), void 0 === U()(i, function (e) {
                        return e.key === a.CACHE_HOST;
                    }) && i.push(r(a.CACHE_HOST, function (e) {
                        return R.deepAccess(e, 'adserverTargeting.'.concat(a.CACHE_HOST)) ? e.adserverTargeting[a.CACHE_HOST] : o.hostname;
                    })))), d[N.JSON_MAPPING.BD_SETTING_STANDARD];
                }
                function b(r, i, o) {
                    var e = i[N.JSON_MAPPING.ADSERVER_TARGETING];
                    return o.size = o.getSize(), R._each(e, function (e) {
                        var t = e.key, n = e.val;
                        if (r[t] && R.logWarn('The key: ' + t + ' is getting ovewritten'), R.isFn(n))
                            try {
                                n = n(o);
                            } catch (e) {
                                R.logError('bidmanager', 'ERROR', e);
                            }
                        (void 0 === i.suppressEmptyKeys || !0 !== i.suppressEmptyKeys) && t !== N.TARGETING_KEYS.DEAL || !R.isEmptyStr(n) && null != n ? r[t] = n : R.logInfo('suppressing empty key \'' + t + '\' from adserver targeting');
                    }), r;
                }
                function ee(e, t) {
                    return e[t.adUnitCode] || (e[t.adUnitCode] = { bids: [] }), e[t.adUnitCode].bids.push(t), e;
                }
            },
            42: function (e, t) {
                e.exports = {};
            },
            43: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return w;
                });
                var a = n(0), r = n(3), i = n(12), o = n.n(i), c = n(7);
                function d(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
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
                        }
                    }(e, t) || function (e, t) {
                        if (e) {
                            if ('string' == typeof e)
                                return s(e, t);
                            var n = Object.prototype.toString.call(e).slice(8, -1);
                            return 'Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0;
                        }
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
                function u() {
                    return (u = Object.assign || function (e) {
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
                var l, f, p, g, b, v, y, m = Object(c.a)('usersync'), h = !a.isSafariBrowser() && m.cookiesAreEnabled(), w = (l = {
                        config: r.b.getConfig('userSync'),
                        browserSupportsCookies: h
                    }, f = {}, p = S(), g = new Set(), v = {
                        image: !0,
                        iframe: !(b = {})
                    }, y = l.config, r.b.getConfig('userSync', function (e) {
                        var t;
                        e.userSync && (t = e.userSync.filterSettings, a.isPlainObject(t) && (t.image || t.all || (e.userSync.filterSettings.image = {
                            bidders: '*',
                            filter: 'include'
                        }))), y = u(y, e.userSync);
                    }), f.registerSync = function (e, t, n) {
                        return g.has(t) ? a.logMessage('already fired syncs for "'.concat(t, '", ignoring registerSync call')) : y.syncEnabled && a.isArray(p[e]) ? t ? 0 !== y.syncsPerBidder && Number(b[t]) >= y.syncsPerBidder ? a.logWarn('Number of user syncs exceeded for "'.concat(t, '"')) : f.canBidderRegisterSync(e, t) ? (p[e].push([
                            t,
                            n
                        ]), (r = b)[i = t] ? r[i] += 1 : r[i] = 1, void (b = r)) : a.logWarn('Bidder "'.concat(t, '" not permitted to register their "').concat(e, '" userSync pixels.')) : a.logWarn('Bidder is required for registering sync') : a.logWarn('User sync type "'.concat(e, '" not supported'));
                        var r, i;
                    }, f.syncUsers = function () {
                        var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0;
                        if (e)
                            return setTimeout(A, Number(e));
                        A();
                    }, f.triggerUserSyncs = function () {
                        y.enableOverride && f.syncUsers();
                    }, f.canBidderRegisterSync = function (e, t) {
                        return !y.filterSettings || !function (e, t) {
                            var n = y.filterSettings;
                            if (function (e, t) {
                                    if (e.all && e[t])
                                        return a.logWarn('Detected presence of the "filterSettings.all" and "filterSettings.'.concat(t, '" in userSync config.  You cannot mix "all" with "iframe/image" configs; they are mutually exclusive.')), 0;
                                    var n = e.all ? e.all : e[t], r = e.all ? 'all' : t;
                                    if (n) {
                                        var i = n.filter, o = n.bidders;
                                        return i && 'include' !== i && 'exclude' !== i ? (a.logWarn('UserSync "filterSettings.'.concat(r, '.filter" setting \'').concat(i, '\' is not a valid option; use either \'include\' or \'exclude\'.')), 0) : '*' === o || Array.isArray(o) && 0 < o.length && o.every(function (e) {
                                            return a.isStr(e) && '*' !== e;
                                        }) || (a.logWarn('Detected an invalid setup in userSync "filterSettings.'.concat(r, '.bidders"; use either \'*\' (to represent all bidders) or an array of bidders.')), 0);
                                    }
                                }(n, e)) {
                                v[e] = !0;
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
                        }(e, t);
                    }, f);
                function S() {
                    return {
                        image: [],
                        iframe: []
                    };
                }
                function A() {
                    if (y.syncEnabled && l.browserSupportsCookies) {
                        try {
                            v.image && E(p.image, function (e) {
                                var t = d(e, 2), n = t[0], r = t[1];
                                a.logMessage('Invoking image pixel user sync for bidder: '.concat(n)), a.triggerPixel(r);
                            }), v.iframe && E(p.iframe, function (e) {
                                var t = d(e, 2), n = t[0], r = t[1];
                                a.logMessage('Invoking iframe user sync for bidder: '.concat(n)), a.insertUserSyncIframe(r);
                            });
                        } catch (e) {
                            return a.logError('Error firing user syncs', e);
                        }
                        p = S();
                    }
                }
                function E(e, t) {
                    a.shuffle(e).forEach(function (e) {
                        t(e), g.add(e[0]);
                    });
                }
            },
            44: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return f;
                });
                var h = n(0), w = n(3), S = n(37), r = n(23), i = n(93), o = n(2), a = n(12), A = n.n(a), c = n(10), E = n.n(c);
                function I() {
                    return (I = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                function O(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                function C(e) {
                    return function (e) {
                        if (Array.isArray(e))
                            return d(e);
                    }(e) || function (e) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                            return Array.from(e);
                    }(e) || function (e) {
                        if (e) {
                            if ('string' == typeof e)
                                return d(e, void 0);
                            var t = Object.prototype.toString.call(e).slice(8, -1);
                            return 'Object' === t && e.constructor && (t = e.constructor.name), 'Map' === t || 'Set' === t ? Array.from(e) : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? d(e, void 0) : void 0;
                        }
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
                function s(e) {
                    return e.responseTimestamp + 1000 * e.ttl - 1000 > Object(h.timestamp)();
                }
                function u(e) {
                    return e && (e.status && !A()([T.BID_STATUS.RENDERED], e.status) || !e.status);
                }
                var _ = n(0), T = n(5), j = [], H = Object.keys(T.TARGETING_KEYS).map(function (e) {
                        return T.TARGETING_KEYS[e];
                    });
                function U(e, r, t) {
                    var i = 2 < arguments.length && void 0 !== t ? t : 0, o = [], a = w.b.getConfig('sendBidsControl.dealPrioritization'), c = Object(h.groupBy)(e, 'adUnitCode');
                    return Object.keys(c).forEach(function (e) {
                        var t = [], n = Object(h.groupBy)(c[e], 'bidderCode');
                        Object.keys(n).forEach(function (e) {
                            return t.push(n[e].reduce(r));
                        }), 0 < i ? (t = a ? t.sort(k(!0)) : t.sort(function (e, t) {
                            return t.cpm - e.cpm;
                        }), o.push.apply(o, C(t.slice(0, i)))) : o.push.apply(o, C(t));
                    }), o;
                }
                function k(e) {
                    var n = 0 < arguments.length && void 0 !== e && e;
                    return function (e, t) {
                        return void 0 !== e.adserverTargeting.hb_deal && void 0 === t.adserverTargeting.hb_deal ? -1 : void 0 === e.adserverTargeting.hb_deal && void 0 !== t.adserverTargeting.hb_deal ? 1 : n ? t.cpm - e.cpm : t.adserverTargeting.hb_pb - e.adserverTargeting.hb_pb;
                    };
                }
                var D, x, l, f = (D = r.a, l = {}, (x = {}).setLatestAuctionForAdUnit = function (e, t) {
                        l[e] = t;
                    }, x.resetPresetTargeting = function (e, t) {
                        var n, i;
                        Object(h.isGptPubadsDefined)() && (n = L(e), i = D.getAdUnits().filter(function (e) {
                            return A()(n, e.code);
                        }), window.googletag.pubads().getSlots().forEach(function (n) {
                            var r = _.isFn(t) && t(n);
                            j.forEach(function (t) {
                                i.forEach(function (e) {
                                    (e.code === n.getAdUnitPath() || e.code === n.getSlotElementId() || _.isFn(r) && r(e.code)) && n.setTargeting(t, null);
                                });
                            });
                        }));
                    }, x.resetPresetTargetingAST = function (e) {
                        L(e).forEach(function (e) {
                            var t, n, r = window.apntag.getTag(e);
                            r && r.keywords && (t = Object.keys(r.keywords), n = {}, t.forEach(function (e) {
                                A()(j, e.toLowerCase()) || (n[e] = r.keywords[e]);
                            }), window.apntag.modifyTag(e, { keywords: n }));
                        });
                    }, x.getAllTargeting = function (e) {
                        var t, n, r, i, o, a, c, d, s = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : R(), u = L(e), l = (c = x.getWinningBids(u, s), d = P(), (c = c.map(function (o) {
                                return O({}, o.adUnitCode, Object.keys(o.adserverTargeting).filter(function (e) {
                                    return void 0 === o.sendStandardTargeting || o.sendStandardTargeting || -1 === d.indexOf(e);
                                }).reduce(function (e, t) {
                                    var n = [o.adserverTargeting[t]], r = O({}, t.substring(0, 20), n);
                                    if (t !== T.TARGETING_KEYS.DEAL)
                                        return [].concat(C(e), [r]);
                                    var i = O({}, ''.concat(t, '_').concat(o.bidderCode).substring(0, 20), n);
                                    return [].concat(C(e), [
                                        r,
                                        i
                                    ]);
                                }, []));
                            })).concat((a = u, s.filter(function (e) {
                                return A()(a, e.adUnitCode);
                            }).map(function (e) {
                                return I({}, e);
                            }).reduce(Y, []).map(N).filter(function (e) {
                                return e;
                            }))).concat(w.b.getConfig('enableSendAllBids') ? (n = u, r = s, i = H.concat(S.a), o = w.b.getConfig('sendBidsControl.bidLimit'), U(r, h.getHighestCpm, o).map(function (t) {
                                if (B(t, n))
                                    return O({}, t.adUnitCode, M(t, i.filter(function (e) {
                                        return void 0 !== t.adserverTargeting[e];
                                    })));
                            }).filter(function (e) {
                                return e;
                            })) : function (e, t) {
                                if (!0 !== w.b.getConfig('targetingControls.alwaysIncludeDeals'))
                                    return [];
                                var n = H.concat(S.a);
                                return U(t, h.getHighestCpm).map(function (t) {
                                    if (t.dealId && B(t, e))
                                        return O({}, t.adUnitCode, M(t, n.filter(function (e) {
                                            return void 0 !== t.adserverTargeting[e];
                                        })));
                                }).filter(function (e) {
                                    return e;
                                });
                            }(u, s)).concat((t = u, D.getAdUnits().filter(function (e) {
                                return A()(t, e.code) && f(e);
                            }).map(function (e) {
                                return O({}, e.code, (t = f(e), Object.keys(t).map(function (e) {
                                    return O({}, e, _.isArray(t[e]) ? t[e] : t[e].split(','));
                                })));
                                var t;
                            }))));
                        function f(e) {
                            return Object(h.deepAccess)(e, T.JSON_MAPPING.ADSERVER_TARGETING);
                        }
                        l.map(function (t) {
                            Object.keys(t).map(function (e) {
                                t[e].map(function (e) {
                                    -1 === j.indexOf(Object.keys(e)[0]) && (j = Object.keys(e).concat(j));
                                });
                            });
                        });
                        var p = Object.keys(I({}, T.DEFAULT_TARGETING_KEYS, T.NATIVE_KEYS)), g = w.b.getConfig('targetingControls.allowTargetingKeys') || p;
                        Array.isArray(g) && 0 < g.length && (l = function (e, r) {
                            var i = I({}, T.TARGETING_KEYS, T.NATIVE_KEYS), o = Object.keys(i), a = {};
                            Object(h.logInfo)('allowTargetingKeys - allowed keys [ '.concat(r.map(function (e) {
                                return i[e];
                            }).join(', '), ' ]')), e.map(function (e) {
                                var t = Object.keys(e)[0], n = e[t].filter(function (e) {
                                        var n = Object.keys(e)[0], t = 0 === o.filter(function (e) {
                                                return 0 === n.indexOf(i[e]);
                                            }).length || E()(r, function (e) {
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
                            return Object(h.logInfo)('allowTargetingKeys - removed keys [ '.concat(t.join(', '), ' ]')), e.filter(function (e) {
                                return 0 < e[Object.keys(e)[0]].length;
                            });
                        }(l, g)), l = l.map(function (e) {
                            return O({}, Object.keys(e)[0], e[Object.keys(e)[0]].map(function (e) {
                                return O({}, Object.keys(e)[0], e[Object.keys(e)[0]].join(', '));
                            }).reduce(function (e, t) {
                                return I(t, e);
                            }, {}));
                        }).reduce(function (e, t) {
                            var n = Object.keys(t)[0];
                            return e[n] = I({}, e[n], t[n]), e;
                        }, {});
                        var b, v, y, m = w.b.getConfig('targetingControls.auctionKeyMaxChars');
                        return m && (Object(h.logInfo)('Detected \'targetingControls.auctionKeyMaxChars\' was active for this auction; set with a limit of '.concat(m, ' characters.  Running checks on auction keys...')), b = l, v = m, y = Object(h.deepClone)(b), l = Object.keys(y).map(function (e) {
                            return {
                                adUnitCode: e,
                                adserverTargeting: y[e]
                            };
                        }).sort(k()).reduce(function (e, t, n, r) {
                            var i, o = (i = t.adserverTargeting, Object.keys(i).reduce(function (e, t) {
                                    return e + ''.concat(t, '%3d').concat(encodeURIComponent(i[t]), '%26');
                                }, ''));
                            n + 1 === r.length && (o = o.slice(0, -3));
                            var a = t.adUnitCode, c = o.length;
                            return c <= v ? (v -= c, Object(h.logInfo)('AdUnit \''.concat(a, '\' auction keys comprised of ').concat(c, ' characters.  Deducted from running threshold; new limit is ').concat(v), y[a]), e[a] = y[a]) : Object(h.logWarn)('The following keys for adUnitCode \''.concat(a, '\' exceeded the current limit of the \'auctionKeyMaxChars\' setting.\nThe key-set size was ').concat(c, ', the current allotted amount was ').concat(v, '.\n'), y[a]), n + 1 === r.length && 0 === Object.keys(e).length && Object(h.logError)('No auction targeting keys were permitted due to the setting in setConfig(targetingControls.auctionKeyMaxChars).  Please review setup and consider adjusting.'), e;
                        }, {})), u.forEach(function (e) {
                            l[e] || (l[e] = {});
                        }), l;
                    }, x.setTargetingForGPT = function (i, e) {
                        window.googletag.pubads().getSlots().forEach(function (r) {
                            Object.keys(i).filter((e || Object(h.isAdUnitCodeMatchingSlot))(r)).forEach(function (n) {
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
                    }, x.getBidsReceived = R, x.getAdUnitCodes = L, x.getWinningBids = function (e) {
                        var n = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : R(), t = L(e);
                        return n.filter(function (e) {
                            return A()(t, e.adUnitCode);
                        }).filter(function (e) {
                            return 0 < e.cpm;
                        }).map(function (e) {
                            return e.adUnitCode;
                        }).filter(h.uniques).map(function (t) {
                            return n.filter(function (e) {
                                return e.adUnitCode === t ? e : null;
                            }).reduce(h.getHighestCpm);
                        });
                    }, x.setTargetingForAst = function (e) {
                        var r = x.getAllTargeting(e);
                        try {
                            x.resetPresetTargetingAST(e);
                        } catch (e) {
                            _.logError('unable to reset targeting for AST' + e);
                        }
                        Object.keys(r).forEach(function (n) {
                            return Object.keys(r[n]).forEach(function (e) {
                                var t;
                                _.logMessage('Attempting to set targeting for targetId: '.concat(n, ' key: ').concat(e, ' value: ').concat(r[n][e])), (_.isStr(r[n][e]) || _.isArray(r[n][e])) && (t = {}, e.search(/pt[0-9]/) < 0 ? t[e.toUpperCase()] = r[n][e] : t[e] = r[n][e], window.apntag.setKeywords(n, t, { overrideKeyValue: !0 }));
                            });
                        });
                    }, x.isApntagDefined = function () {
                        if (window.apntag && _.isFn(window.apntag.setKeywords))
                            return !0;
                    }, x);
                function B(e, t) {
                    return e.adserverTargeting && t && (_.isArray(t) && A()(t, e.adUnitCode) || 'string' == typeof t && e.adUnitCode === t);
                }
                function L(e) {
                    return 'string' == typeof e ? [e] : _.isArray(e) ? e : D.getAdUnitCodes() || [];
                }
                function R() {
                    var e = D.getBidsReceived();
                    return w.b.getConfig('useBidCache') || (e = e.filter(function (e) {
                        return l[e.adUnitCode] === e.auctionId;
                    })), U(e = e.filter(function (e) {
                        return Object(h.deepAccess)(e, 'video.context') !== o.a;
                    }).filter(function (e) {
                        return 'banner' !== e.mediaType || Object(i.c)([
                            e.width,
                            e.height
                        ]);
                    }).filter(u).filter(s), h.getOldestHighestCpmBid);
                }
                function P() {
                    return D.getStandardBidderAdServerTargeting().map(function (e) {
                        return e.key;
                    }).concat(H).filter(h.uniques);
                }
                function Y(r, i, e, t) {
                    return Object.keys(i.adserverTargeting).filter(p()).forEach(function (e) {
                        var t, n;
                        r.length && r.filter((n = e, function (e) {
                            return e.adUnitCode === i.adUnitCode && e.adserverTargeting[n];
                        })).forEach((t = e, function (e) {
                            _.isArray(e.adserverTargeting[t]) || (e.adserverTargeting[t] = [e.adserverTargeting[t]]), e.adserverTargeting[t] = e.adserverTargeting[t].concat(i.adserverTargeting[t]).filter(h.uniques), delete i.adserverTargeting[t];
                        }));
                    }), r.push(i), r;
                }
                function p() {
                    var t = P().concat(S.a);
                    return function (e) {
                        return -1 === t.indexOf(e);
                    };
                }
                function N(t) {
                    return O({}, t.adUnitCode, Object.keys(t.adserverTargeting).filter(p()).map(function (e) {
                        return O({}, e.substring(0, 20), [t.adserverTargeting[e]]);
                    }));
                }
                function M(t, e) {
                    return e.map(function (e) {
                        return O({}, ''.concat(e, '_').concat(t.bidderCode).substring(0, 20), [t.adserverTargeting[e]]);
                    });
                }
            },
            45: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return u;
                }), n.d(t, 'b', function () {
                    return b;
                });
                var r = n(10), p = n.n(r), i = n(0), g = 2, o = {
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
                    }, d = {
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
                function u(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 1, r = parseFloat(e);
                    return isNaN(r) && (r = ''), {
                        low: '' === r ? '' : l(e, o, n),
                        med: '' === r ? '' : l(e, a, n),
                        high: '' === r ? '' : l(e, c, n),
                        auto: '' === r ? '' : l(e, s, n),
                        dense: '' === r ? '' : l(e, d, n),
                        custom: '' === r ? '' : l(e, t, n)
                    };
                }
                function l(n, e, r) {
                    var i = '';
                    if (!b(e))
                        return i;
                    var t, o, a, c, d, s, u = e.buckets.reduce(function (e, t) {
                            return e.max > t.max ? e : t;
                        }, { max: 0 }), l = 0, f = p()(e.buckets, function (e) {
                            if (n > u.max * r) {
                                var t = e.precision;
                                void 0 === t && (t = g), i = (e.max * r).toFixed(t);
                            } else {
                                if (n <= e.max * r && l * r <= n)
                                    return e.min = l, e;
                                l = e.max;
                            }
                        });
                    return f && (t = void 0 !== f.precision ? f.precision : g, o = f.increment * r, a = f.min * r, d = (n * (c = Math.pow(10, t + 2)) - a * c) / (o * c), s = Math.floor(d) * o + a, i = (s = Number(s.toFixed(10))).toFixed(t)), i;
                }
                function b(e) {
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
            532: function (e, t, n) {
                var r = n(533);
                e.exports = r;
            },
            533: function (e, t, n) {
                n(534);
                var r = n(42);
                e.exports = r.Number.isInteger;
            },
            534: function (e, t, n) {
                n(14)({
                    target: 'Number',
                    stat: !0
                }, { isInteger: n(535) });
            },
            535: function (e, t, n) {
                var r = n(27), i = Math.floor;
                e.exports = function (e) {
                    return !r(e) && isFinite(e) && i(e) === e;
                };
            },
            54: function (e, t, n) {
                var r, i, o, a, c, d, s, u = n(115), l = n(26), f = n(27), p = n(32), g = n(28), b = n(65), v = n(53), y = l.WeakMap, m = u ? (r = new y(), i = r.get, o = r.has, a = r.set, c = function (e, t) {
                        return a.call(r, e, t), t;
                    }, d = function (e) {
                        return i.call(r, e) || {};
                    }, function (e) {
                        return o.call(r, e);
                    }) : (v[s = b('state')] = !0, c = function (e, t) {
                        return p(e, s, t), t;
                    }, d = function (e) {
                        return g(e, s) ? e[s] : {};
                    }, function (e) {
                        return g(e, s);
                    });
                e.exports = {
                    set: c,
                    get: d,
                    has: m,
                    enforce: function (e) {
                        return m(e) ? d(e) : c(e, {});
                    },
                    getterFor: function (n) {
                        return function (e) {
                            var t;
                            if (!f(e) || (t = d(e)).type !== n)
                                throw TypeError('Incompatible receiver, ' + n + ' required');
                            return t;
                        };
                    }
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
                    var g = 1 == p, b = 2 == p, v = 3 == p, y = 4 == p, m = 6 == p, h = 5 == p || m;
                    return function (e, t, n, r) {
                        for (var i, o, a = A(e), c = S(a), d = w(t, n, 3), s = E(c.length), u = 0, l = r || I, f = g ? l(e, s) : b ? l(e, 0) : void 0; u < s; u++)
                            if ((h || u in c) && (o = d(i = c[u], u, a), p))
                                if (g)
                                    f[u] = o;
                                else if (o)
                                    switch (p) {
                                    case 3:
                                        return !0;
                                    case 5:
                                        return i;
                                    case 6:
                                        return u;
                                    case 2:
                                        O.call(f, i);
                                    }
                                else if (y)
                                    return !1;
                        return m ? -1 : v || y ? y : f;
                    };
                }
                var w = n(24), S = n(72), A = n(57), E = n(50), I = n(103), O = [].push;
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
                var c = n(30), d = n(31), s = n(28), u = Object.defineProperty, l = {};
                e.exports = function (e, t) {
                    if (s(l, e))
                        return l[e];
                    var n = [][e], r = !!s(t = t || {}, 'ACCESSORS') && t.ACCESSORS, i = s(t, 0) ? t[0] : a, o = s(t, 1) ? t[1] : void 0;
                    return l[e] = !!n && !d(function () {
                        if (r && !c)
                            return !0;
                        var e = { length: -1 };
                        r ? u(e, 1, {
                            enumerable: !0,
                            get: a
                        }) : e[1] = 1, n.call(e, i, o);
                    });
                };
            },
            61: function (e, t, n) {
                var r = n(62), i = n(38), o = n(21)('iterator');
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
                var o = n(63), a = n(33).f, c = n(32), d = n(28), s = n(114), u = n(21)('toStringTag');
                e.exports = function (e, t, n, r) {
                    var i;
                    e && (i = n ? e : e.prototype, d(i, u) || a(i, u, {
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
                var m = n(14), h = n(123), w = n(88), S = n(125), A = n(64), E = n(32), I = n(86), r = n(21), O = n(16), C = n(38), i = n(87), _ = i.IteratorPrototype, T = i.BUGGY_SAFARI_ITERATORS, j = r('iterator'), H = 'values';
                e.exports = function (e, t, n, r, i, o, a) {
                    function c(e) {
                        if (e === i && b)
                            return b;
                        if (!T && e in p)
                            return p[e];
                        switch (e) {
                        case 'keys':
                        case H:
                        case 'entries':
                            return function () {
                                return new n(this, e);
                            };
                        }
                        return function () {
                            return new n(this);
                        };
                    }
                    h(n, t, r);
                    var d, s, u, l = t + ' Iterator', f = !1, p = e.prototype, g = p[j] || p['@@iterator'] || i && p[i], b = !T && g || c(i), v = 'Array' == t && p.entries || g;
                    if (v && (d = w(v.call(new e())), _ !== Object.prototype && d.next && (O || w(d) === _ || (S ? S(d, _) : 'function' != typeof d[j] && E(d, j, y)), A(d, l, !0, !0), O && (C[l] = y))), i == H && g && g.name !== H && (f = !0, b = function () {
                            return g.call(this);
                        }), O && !a || p[j] === b || E(p, j, b), C[t] = b, i)
                        if (s = {
                                values: c(H),
                                keys: o ? b : c('keys'),
                                entries: c('entries')
                            }, a)
                            for (u in s)
                                !T && !f && u in p || I(p, u, s[u]);
                        else
                            m({
                                target: t,
                                proto: !0,
                                forced: T || f
                            }, s);
                    return s;
                };
            },
            67: function (e, t, n) {
                'use strict';
                n.d(t, 'a', function () {
                    return o;
                });
                var r = n(0), a = {};
                function i(e, t, n) {
                    var r, i, o = (r = n, i = a[e] = a[e] || { bidders: {} }, r ? i.bidders[r] = i.bidders[r] || {} : i);
                    return o[t] = (o[t] || 0) + 1, o[t];
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
                        return Object(r.deepAccess)(a, ''.concat(e, '.requestsCounter')) || 0;
                    },
                    getBidderRequestsCounter: function (e, t) {
                        return Object(r.deepAccess)(a, ''.concat(e, '.bidders.').concat(t, '.requestsCounter')) || 0;
                    },
                    getBidderWinsCounter: function (e, t) {
                        return Object(r.deepAccess)(a, ''.concat(e, '.bidders.').concat(t, '.winsCounter')) || 0;
                    }
                };
            },
            69: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'adUnitSetupChecks', function () {
                    return W;
                }), n.d(t, 'checkAdUnitSetup', function () {
                    return V;
                }), t.executeCallbacks = $;
                var r = n(18), i = n(0), o = n(232), a = n(43), f = n(3), h = n(23), p = n(44), c = n(13), d = n(233), s = n(12), g = n.n(s), b = n(67), w = n(11), u = n(34), l = n(7), v = n(234), S = n(235);
                function y(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                function m() {
                    return (m = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var A = m(Object(r.a)(), {
                        USD2EUR: v.a,
                        bidderSettings: v.b
                    }), E = n(5), I = n(0), O = n(8).default, C = n(9), _ = a.a.triggerUserSyncs, T = E.EVENTS, j = T.ADD_AD_UNITS, H = T.BID_WON, U = T.REQUEST_BIDS, k = T.SET_TARGETING, D = T.AD_RENDER_FAILED, x = E.AD_RENDER_FAILED_REASON, B = x.PREVENT_WRITING_ON_MAIN_DOCUMENT, L = x.NO_AD, R = x.EXCEPTION, P = x.CANNOT_FIND_AD, Y = x.MISSING_DOC_OR_ADID, N = {
                        bidWon: function (e) {
                            var t = h.a.getBidsRequested().map(function (e) {
                                return e.bids.map(function (e) {
                                    return e.adUnitCode;
                                });
                            }).reduce(i.flatten).filter(i.uniques);
                            return !!I.contains(t, e) || void I.logError('The "' + e + '" placement is not defined.');
                        }
                    };
                function M(e, t, n) {
                    e.defaultView && e.defaultView.frameElement && (e.defaultView.frameElement.width = t, e.defaultView.frameElement.height = n);
                }
                function G(e, t) {
                    var n = [];
                    return I.isArray(e) && (t ? e.length === t : 0 < e.length) && (e.every(function (e) {
                        return Object(i.isArrayOfNums)(e, 2);
                    }) ? n = e : Object(i.isArrayOfNums)(e, 2) && n.push(e)), n;
                }
                function q(e) {
                    var t = I.deepClone(e), n = t.mediaTypes.banner, r = G(n.sizes);
                    return 0 < r.length ? (n.sizes = r, t.sizes = r) : (I.logError('Detected a mediaTypes.banner object without a proper sizes field.  Please ensure the sizes are listed like: [[300, 250], ...].  Removing invalid mediaTypes.banner object from request.'), delete t.mediaTypes.banner), t;
                }
                function F(e) {
                    var t, n, r = I.deepClone(e), i = r.mediaTypes.video;
                    return i.playerSize && (t = 'number' == typeof i.playerSize[0] ? 2 : 1, 0 < (n = G(i.playerSize, t)).length ? (2 == t && I.logInfo('Transforming video.playerSize from [640,480] to [[640,480]] so it\'s in the proper format.'), i.playerSize = n, r.sizes = n) : (I.logError('Detected incorrect configuration of mediaTypes.video.playerSize.  Please specify only one set of dimensions in a format like: [[640, 480]]. Removing invalid mediaTypes.video.playerSize property from request.'), delete r.mediaTypes.video.playerSize)), r;
                }
                function z(e) {
                    var t = I.deepClone(e), n = t.mediaTypes.native;
                    return n.image && n.image.sizes && !Array.isArray(n.image.sizes) && (I.logError('Please use an array of sizes for native.image.sizes field.  Removing invalid mediaTypes.native.image.sizes property from request.'), delete t.mediaTypes.native.image.sizes), n.image && n.image.aspect_ratios && !Array.isArray(n.image.aspect_ratios) && (I.logError('Please use an array of sizes for native.image.aspect_ratios field.  Removing invalid mediaTypes.native.image.aspect_ratios property from request.'), delete t.mediaTypes.native.image.aspect_ratios), n.icon && n.icon.sizes && !Array.isArray(n.icon.sizes) && (I.logError('Please use an array of sizes for native.icon.sizes field.  Removing invalid mediaTypes.native.icon.sizes property from request.'), delete t.mediaTypes.native.icon.sizes), t;
                }
                Object(d.a)(), A.bidderSettings = A.bidderSettings || {}, A.libLoaded = !0, A.version = 'v4.32.0', I.logInfo('Prebid.js v4.32.0 loaded'), A.adUnits = A.adUnits || [], A.triggerUserSyncs = _;
                var W = {
                        validateBannerMediaType: q,
                        validateVideoMediaType: F,
                        validateNativeMediaType: z,
                        validateSizes: G
                    }, V = Object(c.b)('sync', function (e) {
                        var c = [];
                        return e.forEach(function (e) {
                            var t, n, r, i, o = e.mediaTypes, a = e.bids;
                            a && I.isArray(a) ? o && 0 !== Object.keys(o).length ? (o.banner && (t = q(e)), o.video && (n = F(t || e)), o.native && (r = z(n || t || e)), i = m({}, t, n, r), c.push(i)) : I.logError('Detected adUnit.code \''.concat(e.code, '\' did not have a \'mediaTypes\' object defined.  This is a required field for the auction, so this adUnit has been removed.')) : I.logError('Detected adUnit.code \''.concat(e.code, '\' did not have \'adUnit.bids\' defined or \'adUnit.bids\' is not an array. Removing adUnit from auction.'));
                        }), c;
                    }, 'checkAdUnitSetup');
                function K(e) {
                    var n = h.a[e]().filter(I.bind.call(i.adUnitsFilter, this, h.a.getAdUnitCodes())), r = h.a.getLastAuctionId();
                    return n.map(function (e) {
                        return e.adUnitCode;
                    }).filter(i.uniques).map(function (t) {
                        return n.filter(function (e) {
                            return e.auctionId === r && e.adUnitCode === t;
                        });
                    }).filter(function (e) {
                        return e && e[0] && e[0].adUnitCode;
                    }).map(function (e) {
                        return t = {}, r = { bids: e }, (n = e[0].adUnitCode) in t ? Object.defineProperty(t, n, {
                            value: r,
                            enumerable: !0,
                            configurable: !0,
                            writable: !0
                        }) : t[n] = r, t;
                        var t, n, r;
                    }).reduce(function (e, t) {
                        return m(e, t);
                    }, {});
                }
                function J(e, t) {
                    var n, r = 1 < arguments.length && void 0 !== t ? t : S.a.renderEnded;
                    I.logMessage('Calling trackWinner', e), 'YLHH' in window && 'bidder' in window.YLHH && 'data' in window.YLHH.bidder && (n = window.YLHH.bidder.getOriginalAdUnit(e.adUnitCode), e.renderState = r, window.YLHH.bidder.data.adUnitData[n.code].winner = e);
                }
                function Q(e) {
                    var t = e.reason, n = e.message, r = e.bid, i = e.id, o = {
                            reason: t,
                            message: n
                        };
                    r && (o.bid = r), i && (o.adId = i), I.logError(n), C.emit(D, o);
                }
                function $(e, t) {
                    function n(e) {
                        for (var t; t = e.shift();)
                            t();
                    }
                    n(l.c), n(X), e.call(this, t);
                }
                A.getAdserverTargetingForAdUnitCodeStr = function (e) {
                    if (I.logInfo('Invoking pbjsYLHH.getAdserverTargetingForAdUnitCodeStr', arguments), e) {
                        var t = A.getAdserverTargetingForAdUnitCode(e);
                        return I.transformAdServerTargetingObj(t);
                    }
                    I.logMessage('Need to call getAdserverTargetingForAdUnitCodeStr with adunitCode');
                }, A.getAdserverTargetingForAdUnitCode = function (e) {
                    return A.getAdserverTargeting(e)[e];
                }, A.getAdserverTargeting = function (e, n, r) {
                    I.logInfo('Invoking pbjsYLHH.getAdserverTargeting', arguments), I.logInfo('targeting.getBidsReceived()', p.a.getBidsReceived());
                    var t = void 0 === n && void 0 === r ? void 0 : p.a.getBidsReceived().filter(function (e) {
                        if (n && n.length && !n.includes(e.bidderCode))
                            return !1;
                        if (r && r[e.bidderCode]) {
                            var t = r[e.bidderCode];
                            if (!t.consented)
                                return !1;
                            if (t.networks && t.networks.length && (!e.tracking || !t.networks.includes(e.tracking.networkId)))
                                return !1;
                        }
                        return !0;
                    });
                    return p.a.getAllTargeting(e, t);
                }, A.getCurrentAuctionId = function () {
                    var e = h.a.getBidsReceived().filter(i.adUnitsFilter.bind(this, h.a.getAdUnitCodes()));
                    return e && e.length && e[e.length - 1].auctionId || 'undefined';
                }, A.getEligibleBids = function (e) {
                    I.logInfo('Invoking pbjsYLHH.getEligibleBids', arguments);
                    var t = p.a.getAdUnitCodes(e);
                    return (p.a.getBidsReceived() || []).filter(function (e) {
                        return g()(t, e.adUnitCode);
                    });
                }, A.getBidResponses = K, A.getNoBids = function () {
                    return I.logInfo('Invoking pbjsYLHH.getNoBids', arguments), K('getNoBids');
                }, A.getNoBidsForAdUnitCode = function (t) {
                    return {
                        bids: h.a.getNoBids().filter(function (e) {
                            return e.adUnitCode === t;
                        })
                    };
                }, A.getBidResponses = function () {
                    return I.logInfo('Invoking pbjsYLHH.getBidResponses', arguments), K('getBidsReceived');
                }, A.getBidResponsesForAdUnitCode = function (t) {
                    return {
                        bids: h.a.getBidsReceived().filter(function (e) {
                            return e.adUnitCode === t;
                        })
                    };
                }, A.getBidResponsesForAdId = function (t) {
                    return h.a.getBidsReceived().find(function (e) {
                        return e.adId === t;
                    });
                }, A.setTargetingForGPTAsync = function (e, t, n) {
                    var r;
                    I.logInfo('Invoking pbjsYLHH.setTargetingForGPTAsync', arguments), Object(i.isGptPubadsDefined)() ? (r = p.a.getAllTargeting(e), p.a.resetPresetTargeting(e, t), I.logInfo('setTargetingForGPTAsync :: (initially): ', r), 0 === r.length && void 0 !== n && (r = A.getTargetingSetForGPTAsyncTargetZero(n) || r, I.logInfo('setTargetingForGPTAsync :: (finally): ', r)), p.a.setTargetingForGPT(r, t), Object.keys(r).forEach(function (t) {
                        Object.keys(r[t]).forEach(function (e) {
                            'hb_adid' === e && h.a.setStatusForBids(r[t][e], E.BID_STATUS.BID_TARGETING_SET);
                        });
                    }), C.emit(k, r)) : I.logError('window.googletag is not defined on the page');
                }, A.setTargetingForGPTAsyncTargetZero = function (e, t, n, r) {
                    var i = {
                        hb_adid: 'dummy',
                        adx_floor_euro: n,
                        hb_version: r,
                        hb_placement: t
                    };
                    I.logInfo('setTargetingForGPTAsyncTargetZero :: (targetingForZero): ', i), A.setTargetingForGPTAsync(e, !1, i);
                }, A.getTargetingSetForGPTAsyncTargetZero = function (e) {
                    for (var t = {}, n = [
                                'hb_adid',
                                'adx_floor_euro',
                                'hb_version',
                                'hb_placement'
                            ], r = 0; r < n.length; r++)
                        if (!(n[r] in e))
                            return !1;
                    var i = 'div-' + e.hb_placement, o = A.calcPriceBucketStrForPriceFloat('v0', e.adx_floor_euro);
                    return t[i] = [
                        { hb_adid: [e.hb_adid] },
                        { hb_pb: [o] },
                        { hb_version: [e.hb_version] },
                        { hb_placement: [e.hb_placement] },
                        { hb_bid_eur: ['0.00'] },
                        { hb_bid_usd: ['0.00'] }
                    ], [t];
                }, A.setTargetingForAst = function (e) {
                    I.logInfo('Invoking pbjsYLHH.setTargetingForAn', arguments), p.a.isApntagDefined() ? (p.a.setTargetingForAst(e), C.emit(k, p.a.getAllTargeting())) : I.logError('window.apntag is not defined on the page');
                }, A.utils = I, A.getBidsRequested = h.a.getBidsRequested, A.stroeer = n(236), A.calcPriceBucketStrForPriceFloat = function (e, t) {
                    function n(e, t) {
                        return (Math.floor(e * t) / t).toFixed(2);
                    }
                    var r;
                    return I.logInfo('calcPriceBucketStrForPriceFloat :: (initial price)', t), r = 'v0' != e || t < 10 ? n(t, 100) : 10 <= t && t < 20 ? n(t, 20) : 20 <= t && t < 100 ? n(t, 10) : '100.00', I.logInfo('calcPriceBucketStrForPriceFloat :: (the price bucket)', r), r;
                }, A.renderAd = function (e, t, n) {
                    if (function (t) {
                            try {
                                J(A.getBidResponsesForAdId(t), S.a.startRendering);
                            } catch (e) {
                                I.logMessage('trackRenderStarting failed for adId of', t);
                            }
                        }(t), I.logInfo('Invoking pbjsYLHH.renderAd', arguments), I.logMessage('Calling renderAd with adId :' + t), e && t)
                        try {
                            var r, i = h.a.findBidByAdId(t);
                            if (i) {
                                i.ad = I.replaceAuctionPrice(i.ad, i.cpm), i.adUrl = I.replaceAuctionPrice(i.adUrl, i.cpm), n && n.clickThrough && (r = n.clickThrough, i.ad = I.replaceClickThrough(i.ad, r), i.adUrl = I.replaceClickThrough(i.adUrl, r)), h.a.addWinningBid(i), C.emit(H, i);
                                var o, a = i.height, c = i.width, d = i.ad, s = i.mediaType, u = i.adUrl, l = i.renderer, f = document.createComment('Creative '.concat(i.creativeId, ' served by ').concat(i.bidder, ' Prebid.js Header Bidding'));
                                if (I.insertElement(f, e, 'body'), Object(w.c)(l))
                                    return Object(w.b)(l, i), J(i), !0;
                                if (e === document && !I.inIframe() || 'video' === s) {
                                    var p = 'Error trying to write ad. Ad render call ad id '.concat(t, ' was prevented from writing to the main document.');
                                    Q({
                                        reason: B,
                                        message: p,
                                        bid: i,
                                        id: t
                                    });
                                } else {
                                    if (d)
                                        return navigator.userAgent && -1 < navigator.userAgent.toLowerCase().indexOf('firefox/') && (o = navigator.userAgent.toLowerCase().match(/firefox\/([\d\.]+)/)[1]) && parseInt(o, 10) < 67 && e.open('text/html', 'replace'), 'stroeerCore' === i.bidderCode ? e.write(A.stroeer.renderAd(d, i)) : e.write(d), e.close(), M(e, c, a), I.callBurl(i), J(i), !0;
                                    if (u) {
                                        var g = I.createInvisibleIframe();
                                        return g.height = a, g.width = c, g.style.display = 'inline', g.style.overflow = 'hidden', g.src = u, I.insertElement(g, e, 'body'), M(e, c, a), I.callBurl(i), J(i), !0;
                                    }
                                    var b = 'Error trying to write ad. No ad for bid response id: '.concat(t);
                                    Q({
                                        reason: L,
                                        message: b,
                                        bid: i,
                                        id: t
                                    });
                                }
                            } else {
                                var v = 'Error trying to write ad. Cannot find ad by given id : '.concat(t);
                                Q({
                                    reason: P,
                                    message: v,
                                    id: t
                                });
                            }
                        } catch (e) {
                            var y = 'Error trying to write ad Id :'.concat(t, ' to the page:').concat(e.message);
                            Q({
                                reason: R,
                                message: y,
                                id: t
                            });
                        }
                    else {
                        var m = 'Error trying to write ad Id :'.concat(t, ' to the page. Missing document or adId');
                        Q({
                            reason: Y,
                            message: m,
                            id: t
                        });
                    }
                }, A.removeAdUnit = function (e) {
                    I.logInfo('Invoking pbjsYLHH.removeAdUnit', arguments), e ? (I.isArray(e) ? e : [e]).forEach(function (e) {
                        for (var t = A.adUnits.length - 1; 0 <= t; t--)
                            A.adUnits[t].code === e && A.adUnits.splice(t, 1);
                    }) : A.adUnits = [];
                }, A.requestBids = Object(c.b)('async', function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.bidsBackHandler, n = e.timeout, r = e.adUnits, i = e.adUnitCodes, o = e.labels, a = e.auctionId;
                    C.emit(U);
                    var c = n || f.b.getConfig('bidderTimeout'), r = r || A.adUnits;
                    I.logInfo('Invoking pbjsYLHH.requestBids', arguments);
                    var d = [], s = [];
                    if (f.b.getConfig('s2sConfig', function (e) {
                            e && e.s2sConfig && (d = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
                        }), d.forEach(function (e) {
                            var t;
                            s.push.apply(s, function (e) {
                                if (Array.isArray(e))
                                    return y(e);
                            }(t = e.bidders) || function (e) {
                                if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                                    return Array.from(e);
                            }(t) || function (e) {
                                if (e) {
                                    if ('string' == typeof e)
                                        return y(e, void 0);
                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                    return 'Object' === t && e.constructor && (t = e.constructor.name), 'Map' === t || 'Set' === t ? Array.from(e) : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? y(e, void 0) : void 0;
                                }
                            }(t) || function () {
                                throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                            }());
                        }), r = V(r), i && i.length ? r = r.filter(function (e) {
                            return g()(i, e.code);
                        }) : i = r && r.map(function (e) {
                            return e.code;
                        }), r.forEach(function (i) {
                            var o = Object.keys(i.mediaTypes || { banner: 'banner' }), e = i.bids.map(function (e) {
                                    return e.bidder;
                                }), a = O.bidderRegistry, t = s ? e.filter(function (e) {
                                    return !g()(s, e);
                                }) : e;
                            i.transactionId = I.generateUUID(), t.forEach(function (t) {
                                var e = a[t], n = e && e.getSpec && e.getSpec(), r = n && n.supportedMediaTypes || ['banner'];
                                o.some(function (e) {
                                    return g()(r, e);
                                }) ? b.a.incrementBidderRequestsCounter(i.code, t) : (I.logWarn(I.unsupportedBidderMessage(i, t)), i.bids = i.bids.filter(function (e) {
                                    return e.bidder !== t;
                                }));
                            }), b.a.incrementRequestsCounter(i.code);
                        }), r && 0 !== r.length) {
                        var u = h.a.createAuction({
                                adUnits: r,
                                adUnitCodes: i,
                                callback: t,
                                cbTimeout: c,
                                labels: o,
                                auctionId: a
                            }), l = r.length;
                        15 < l && I.logInfo('Current auction '.concat(u.getAuctionId(), ' contains ').concat(l, ' adUnits.'), r), i.forEach(function (e) {
                            return p.a.setLatestAuctionForAdUnit(e, u.getAuctionId());
                        }), u.callBids();
                    } else if (I.logMessage('No adUnits configured. No bids requested.'), 'function' == typeof t)
                        try {
                            t();
                        } catch (e) {
                            I.logError('Error executing bidsBackHandler', null, e);
                        }
                }), A.requestBids.before($, 49), A.addAdUnits = function (e) {
                    I.logInfo('Invoking pbjsYLHH.addAdUnits', arguments), A.adUnits.push.apply(A.adUnits, f.b.convertAdUnitFpd(I.isArray(e) ? e : [e])), C.emit(j);
                }, A.onEvent = function (e, t, n) {
                    I.logInfo('Invoking pbjsYLHH.onEvent', arguments), I.isFn(t) ? !n || N[e].call(null, n) ? C.on(e, t, n) : I.logError('The id provided is not valid for event "' + e + '" and no handler was set.') : I.logError('The event handler provided is not a function and was not set on event "' + e + '".');
                }, A.offEvent = function (e, t, n) {
                    I.logInfo('Invoking pbjsYLHH.offEvent', arguments), n && !N[e].call(null, n) || C.off(e, t, n);
                }, A.getEvents = function () {
                    return I.logInfo('Invoking pbjsYLHH.getEvents'), C.getEvents();
                }, A.registerBidAdapter = function (e, t) {
                    I.logInfo('Invoking pbjsYLHH.registerBidAdapter', arguments);
                    try {
                        O.registerBidAdapter(e(), t);
                    } catch (e) {
                        I.logError('Error registering bidder adapter : ' + e.message);
                    }
                }, A.registerAnalyticsAdapter = function (e) {
                    I.logInfo('Invoking pbjsYLHH.registerAnalyticsAdapter', arguments);
                    try {
                        O.registerAnalyticsAdapter(e);
                    } catch (e) {
                        I.logError('Error registering analytics adapter : ' + e.message);
                    }
                }, A.createBid = function (e) {
                    return I.logInfo('Invoking pbjsYLHH.createBid', arguments), Object(u.a)(e);
                };
                var X = [], Z = Object(c.b)('async', function (e) {
                        e && !I.isEmpty(e) ? (I.logInfo('Invoking pbjsYLHH.enableAnalytics for: ', e), O.enableAnalytics(e)) : I.logError('pbjsYLHH.enableAnalytics should be called with option {}');
                    }, 'enableAnalyticsCb');
                function ee(e) {
                    e.forEach(function (e) {
                        if (void 0 === e.called)
                            try {
                                e.call(), e.called = !0;
                            } catch (e) {
                                I.logError('Error processing command :', 'prebid.js', e);
                            }
                    });
                }
                A.enableAnalytics = function (e) {
                    X.push(Z.bind(this, e));
                }, A.aliasBidder = function (e, t, n) {
                    I.logInfo('Invoking pbjsYLHH.aliasBidder', arguments), e && t ? O.aliasBidAdapter(e, t, n) : I.logError('bidderCode and alias must be passed as arguments', 'pbjsYLHH.aliasBidder');
                }, A.getAllWinningBids = function () {
                    return h.a.getAllWinningBids();
                }, A.getAllPrebidWinningBids = function () {
                    return h.a.getBidsReceived().filter(function (e) {
                        return e.status === E.BID_STATUS.BID_TARGETING_SET;
                    });
                }, A.getHighestCpmBids = function (e) {
                    return p.a.getWinningBids(e);
                }, A.markWinningBidAsUsed = function (t) {
                    var e = [];
                    t.adUnitCode && t.adId ? e = h.a.getBidsReceived().filter(function (e) {
                        return e.adId === t.adId && e.adUnitCode === t.adUnitCode;
                    }) : t.adUnitCode ? e = p.a.getWinningBids(t.adUnitCode) : t.adId ? e = h.a.getBidsReceived().filter(function (e) {
                        return e.adId === t.adId;
                    }) : I.logWarn('Improper use of markWinningBidAsUsed. It needs an adUnitCode or an adId to function.'), 0 < e.length && (e[0].status = E.BID_STATUS.RENDERED);
                }, A.getConfig = f.b.getConfig, A.setConfig = f.b.setConfig, A.setBidderConfig = f.b.setBidderConfig, Object(v.c)(A), A.que.push(function () {
                    return Object(o.a)();
                }), A.cmd.push = function (e) {
                    if ('function' == typeof e)
                        try {
                            e.call();
                        } catch (e) {
                            'YLHH' in window && 'bidder' in window.YLHH && 'onError' in window.YLHH.bidder && window.YLHH.bidder.onError(), I.logError('Error processing command :', e.message, e.stack);
                        }
                    else
                        I.logError('Commands written into pbjsYLHH.cmd.push must be wrapped in a function');
                }, A.que.push = A.cmd.push, A.processQueue = function () {
                    c.b.ready(), ee(A.que), ee(A.cmd);
                }, t.default = A;
            },
            7: function (e, t, n) {
                'use strict';
                n.d(t, 'c', function () {
                    return f;
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
                var r = n(13), d = n(0), i = n(12), u = n.n(i), l = [
                        'core',
                        'prebid-module'
                    ], f = [];
                function o(e) {
                    var t = 0 < arguments.length && void 0 !== e ? e : {}, i = t.gvlid, o = t.moduleName, a = t.moduleType;
                    function s(n) {
                        return u()(l, a) ? n({ valid: !0 }) : (p(i, o, { hasEnforcementHook: !1 }, function (e) {
                            var t;
                            r = e && e.hasEnforcementHook ? n(e) : (t = {
                                hasEnforcementHook: !1,
                                valid: d.hasDeviceAccess()
                            }, n(t));
                        }), r);
                        var r;
                    }
                    function c(t) {
                        function n(e) {
                            const $___old_a9173ff0a3f9b16d = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                            try {
                                if ($___old_a9173ff0a3f9b16d)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___mock_f8a288802595a372.localStorage));
                                return function () {
                                    if (e && e.valid)
                                        try {
                                            return !!window.localStorage;
                                        } catch (e) {
                                            d.logError('Local storage api disabled');
                                        }
                                    return !1;
                                }.apply(this, arguments);
                            } finally {
                                if ($___old_a9173ff0a3f9b16d)
                                    ({}.constructor.defineProperty(window, 'localStorage', $___old_a9173ff0a3f9b16d));
                            }
                        }
                        if (!t || 'function' != typeof t)
                            return s(n);
                        f.push(function () {
                            var e = s(n);
                            t(e);
                        });
                    }
                    return {
                        setCookie: function (i, o, a, c, d, t) {
                            function n(e) {
                                var t, n, r;
                                e && e.valid && (t = d && '' !== d ? ' ;domain='.concat(encodeURIComponent(d)) : '', n = a && '' !== a ? ' ;expires='.concat(a) : '', r = null != c && 'none' == c.toLowerCase() ? '; Secure' : '', document.cookie = ''.concat(i, '=').concat(encodeURIComponent(o)).concat(n, '; path=/').concat(t).concat(c ? '; SameSite='.concat(c) : '').concat(r));
                            }
                            if (!t || 'function' != typeof t)
                                return s(n);
                            f.push(function () {
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
                            f.push(function () {
                                var e = s(r);
                                t(e);
                            });
                        },
                        localStorageIsEnabled: function (t) {
                            function n(e) {
                                const $___old_00c48f8beae5a9ae = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                                try {
                                    if ($___old_00c48f8beae5a9ae)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_f8a288802595a372.localStorage));
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
                                    if ($___old_00c48f8beae5a9ae)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___old_00c48f8beae5a9ae));
                                }
                            }
                            if (!t || 'function' != typeof t)
                                return s(n);
                            f.push(function () {
                                var e = s(n);
                                t(e);
                            });
                        },
                        cookiesAreEnabled: function (t) {
                            function n(e) {
                                return !(!e || !e.valid || !d.checkCookieSupport() && (window.document.cookie = 'prebid.cookieTest', -1 === window.document.cookie.indexOf('prebid.cookieTest')));
                            }
                            if (!t || 'function' != typeof t)
                                return s(n);
                            f.push(function () {
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
                            f.push(function () {
                                var e = s(i);
                                r(e);
                            });
                        },
                        getDataFromLocalStorage: function (t, n) {
                            function r(e) {
                                const $___old_1ce4f0211f18ada2 = {}.constructor.getOwnPropertyDescriptor(window, 'localStorage');
                                try {
                                    if ($___old_1ce4f0211f18ada2)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___mock_f8a288802595a372.localStorage));
                                    return function () {
                                        return e && e.valid && c() ? window.localStorage.getItem(t) : null;
                                    }.apply(this, arguments);
                                } finally {
                                    if ($___old_1ce4f0211f18ada2)
                                        ({}.constructor.defineProperty(window, 'localStorage', $___old_1ce4f0211f18ada2));
                                }
                            }
                            if (!n || 'function' != typeof n)
                                return s(r);
                            f.push(function () {
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
                            f.push(function () {
                                var e = s(r);
                                n(e);
                            });
                        },
                        hasLocalStorage: c,
                        findSimilarCookies: function (o, t) {
                            function n(e) {
                                if (e && e.valid) {
                                    var t = [];
                                    if (d.hasDeviceAccess())
                                        for (var n = document.cookie.split(';'); n.length;) {
                                            var r = n.pop(), i = (i = r.indexOf('=')) < 0 ? r.length : i;
                                            0 <= decodeURIComponent(r.slice(0, i).replace(/^\s+/, '')).indexOf(o) && t.push(decodeURIComponent(r.slice(i + 1)));
                                        }
                                    return t;
                                }
                            }
                            if (!t || 'function' != typeof t)
                                return s(n);
                            f.push(function () {
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
                var r = n(371);
                e.exports = r;
            },
            71: function (e, t, n) {
                'use strict';
                t.a = function (t, n) {
                    o.adServers = o.adServers || {}, o.adServers[t] = o.adServers[t] || {}, Object.keys(n).forEach(function (e) {
                        o.adServers[t][e] ? Object(i.logWarn)('Attempting to add an already registered function property '.concat(e, ' for AdServer ').concat(t, '.')) : o.adServers[t][e] = n[e];
                    });
                };
                var r = n(18), i = n(0), o = Object(r.a)();
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
                        var r, i = d(e), o = s(i.length), a = u(n, o);
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
                var d = n(47), s = n(50), u = n(109);
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
                    return H;
                }), n.d(t, 'uspDataHandler', function () {
                    return U;
                }), n.d(t, 'clientTestAdapters', function () {
                    return k;
                }), n.d(t, 'allS2SBidders', function () {
                    return D;
                }), t.getAllS2SBidders = x, t.setS2STestingModule = function (e) {
                    S = e;
                };
                var y = n(0), p = n(93), g = n(37), f = n(1), m = n(4), a = n(3), r = n(13), i = n(12), h = n.n(i), o = n(10), v = n.n(o), b = n(67), c = n(22);
                function d(e, t) {
                    if (e) {
                        if ('string' == typeof e)
                            return s(e, t);
                        var n = Object.prototype.toString.call(e).slice(8, -1);
                        return 'Object' === n && e.constructor && (n = e.constructor.name), 'Map' === n || 'Set' === n ? Array.from(e) : 'Arguments' === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? s(e, t) : void 0;
                    }
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                function w() {
                    return (w = Object.assign || function (e) {
                        for (var t = 1; t < arguments.length; t++) {
                            var n = arguments[t];
                            for (var r in n)
                                Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
                        }
                        return e;
                    }).apply(this, arguments);
                }
                var S, A = n(0), E = n(5), I = n(9), O = {}, C = O.bidderRegistry = {}, _ = O.aliasRegistry = {}, T = [];
                a.b.getConfig('s2sConfig', function (e) {
                    e && e.s2sConfig && (T = Array.isArray(e.s2sConfig) ? e.s2sConfig : [e.s2sConfig]);
                });
                var u = {}, j = Object(r.b)('sync', function (e) {
                        var i = e.bidderCode, s = e.auctionId, u = e.bidderRequestId, t = e.adUnits, l = e.labels, f = e.src;
                        return t.reduce(function (e, c) {
                            var t = Object(p.b)(Object(p.a)(c, l), c.mediaTypes, c.sizes), n = t.active, d = t.mediaTypes, r = t.filterResults;
                            return n ? r && A.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" banner sizes from '), r.before, 'to ', r.after) : A.logInfo('Size mapping disabled adUnit "'.concat(c.code, '"')), n && e.push(c.bids.filter(function (e) {
                                return e.bidder === i;
                            }).reduce(function (e, t) {
                                var n = c.nativeParams || A.deepAccess(c, 'mediaTypes.native');
                                n && (t = w({}, t, { nativeParams: Object(g.h)(n) })), t = w({}, t, Object(y.getDefinedParams)(c, [
                                    'ortb2Imp',
                                    'mediaType',
                                    'renderer',
                                    'storedAuctionResponse'
                                ]));
                                var r = Object(p.b)(Object(p.a)(t, l), d), i = r.active, o = r.mediaTypes, a = r.filterResults;
                                return i ? a && A.logInfo('Size mapping filtered adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '" banner sizes from '), a.before, 'to ', a.after) : A.logInfo('Size mapping deactivated adUnit "'.concat(c.code, '" bidder "').concat(t.bidder, '"')), A.isValidMediaTypes(o) ? t = w({}, t, { mediaTypes: o }) : A.logError('mediaTypes is not correctly configured for adunit '.concat(c.code)), i && e.push(w({}, t, {
                                    adUnitCode: c.code,
                                    transactionId: c.transactionId,
                                    sizes: A.deepAccess(o, 'banner.sizes') || A.deepAccess(o, 'video.playerSize') || [],
                                    bidId: t.bid_id || A.getUniqueIdentifierStr(),
                                    bidderRequestId: u,
                                    auctionId: s,
                                    src: f,
                                    bidRequestsCount: b.a.getRequestsCounter(c.code),
                                    bidderRequestsCount: b.a.getBidderRequestsCounter(c.code, t.bidder),
                                    bidderWinsCount: b.a.getBidderWinsCounter(c.code, t.bidder)
                                })), e;
                            }, [])), e;
                        }, []).reduce(y.flatten, []).filter(function (e) {
                            return '' !== e;
                        });
                    }, 'getBids'), H = {
                        consentData: null,
                        setConsentData: function (e) {
                            H.consentData = e;
                        },
                        getConsentData: function () {
                            return H.consentData;
                        }
                    }, U = {
                        consentData: null,
                        setConsentData: function (e) {
                            U.consentData = e;
                        },
                        getConsentData: function () {
                            return U.consentData;
                        }
                    }, k = [], D = [];
                function x() {
                    O.s2STestingEnabled = !1, T.forEach(function (e) {
                        var t;
                        e && e.enabled && e.bidders && e.bidders.length && D.push.apply(D, function (e) {
                            if (Array.isArray(e))
                                return s(e);
                        }(t = e.bidders) || function (e) {
                            if ('undefined' != typeof Symbol && Symbol.iterator in Object(e))
                                return Array.from(e);
                        }(t) || d(t) || function () {
                            throw new TypeError('Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                        }());
                    });
                }
                function B(e) {
                    return e && e.enabled && e.testing && S;
                }
                function l(e, t, n) {
                    try {
                        var r = C[e].getSpec();
                        r && r[t] && 'function' == typeof r[t] && (A.logInfo('Invoking '.concat(e, '.').concat(t)), a.b.runWithBidder(e, y.bind.call(r[t], r, n)));
                    } catch (n) {
                        A.logWarn('Error calling '.concat(t, ' of ').concat(e));
                    }
                }
                O.makeBidRequests = Object(r.b)('sync', function (d, s, u, i, l) {
                    I.emit(E.EVENTS.BEFORE_REQUEST_BIDS, d);
                    var e = Object(y.getBidderCodes)(d);
                    a.b.getConfig('bidderSequence') === a.a && (e = Object(y.shuffle)(e));
                    var f = Object(c.a)(), p = e, g = [];
                    0 === D.length && x(), T.forEach(function (e) {
                        e && e.enabled && B(e) && (S.calculateBidSources(e), S.getSourceBidderMap(d, D)[S.CLIENT].forEach(function (e) {
                            h()(k, e) || k.push(e);
                        }));
                    }), p = e.filter(function (e) {
                        return !h()(D, e) || h()(k, e);
                    });
                    var b = D;
                    T.forEach(function (r) {
                        var i, o, t, n, e, a, c;
                        r && r.enabled && (Boolean(B(r) && r.testServerOnly) && (a = d, c = r, Boolean(v()(a, function (e) {
                            return v()(e.bids, function (e) {
                                return (e.bidSource || c.bidderControl && c.bidderControl[e.bidder]) && e.finalSource === S.SERVER;
                            });
                        }))) && (A.logWarn('testServerOnly: True.  All client requests will be suppressed.'), p.length = 0), n = (t = r).bidders, (e = A.deepClone(d)).forEach(function (e) {
                            e.bids = e.bids.filter(function (e) {
                                return h()(n, e.bidder) && (!B(t) || e.finalSource !== S.CLIENT);
                            }).map(function (e) {
                                return e.bid_id = A.getUniqueIdentifierStr(), e;
                            });
                        }), i = e = e.filter(function (e) {
                            return 0 !== e.bids.length;
                        }), o = A.generateUUID(), b.forEach(function (e) {
                            var t = A.getUniqueIdentifierStr(), n = {
                                    bidderCode: e,
                                    auctionId: u,
                                    bidderRequestId: t,
                                    tid: o,
                                    bids: j({
                                        bidderCode: e,
                                        auctionId: u,
                                        bidderRequestId: t,
                                        adUnits: A.deepClone(i),
                                        labels: l,
                                        src: E.S2S.SRC
                                    }),
                                    auctionStart: s,
                                    timeout: r.timeout,
                                    src: E.S2S.SRC,
                                    refererInfo: f
                                };
                            0 !== n.bids.length && g.push(n);
                        }), i.forEach(function (e) {
                            var t = e.bids.filter(function (t) {
                                return v()(g, function (e) {
                                    return v()(e.bids, function (e) {
                                        return e.bidId === t.bid_id;
                                    });
                                });
                            });
                            e.bids = t;
                        }), g.forEach(function (e) {
                            void 0 === e.adUnitsS2SCopy && (e.adUnitsS2SCopy = i.filter(function (e) {
                                return 0 < e.bids.length;
                            }));
                        }));
                    });
                    var t, o = ((t = A.deepClone(d)).forEach(function (e) {
                            e.bids = e.bids.filter(function (e) {
                                return !k.length || e.finalSource !== S.SERVER;
                            });
                        }), t = t.filter(function (e) {
                            return 0 !== e.bids.length;
                        }));
                    return p.forEach(function (e) {
                        var t = A.getUniqueIdentifierStr(), n = {
                                bidderCode: e,
                                auctionId: u,
                                bidderRequestId: t,
                                bids: j({
                                    bidderCode: e,
                                    auctionId: u,
                                    bidderRequestId: t,
                                    adUnits: A.deepClone(o),
                                    labels: l,
                                    src: 'client'
                                }),
                                auctionStart: s,
                                timeout: i,
                                refererInfo: f
                            }, r = C[e];
                        r || A.logError('Trying to make a request for bidder that does not exist: '.concat(e)), r && n.bids && 0 !== n.bids.length && g.push(n);
                    }), H.getConsentData() && g.forEach(function (e) {
                        e.gdprConsent = H.getConsentData();
                    }), U.getConsentData() && g.forEach(function (e) {
                        e.uspConsent = U.getConsentData();
                    }), g;
                }, 'makeBidRequests'), O.callBids = function (e, t, u, l, f, p, i) {
                    var n, r, g, b, v, o;
                    t.length ? (r = (n = function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(o = t.reduce(function (e, t) {
                        return e[Number(void 0 !== t.src && t.src === E.S2S.SRC)].push(t), e;
                    }, [
                        [],
                        []
                    ])) || function (e) {
                        if ('undefined' != typeof Symbol && Symbol.iterator in Object(e)) {
                            var t = [], n = !0, r = !1, i = void 0;
                            try {
                                for (var o, a = e[Symbol.iterator](); !(n = (o = a.next()).done) && (t.push(o.value), 2 !== t.length); n = !0);
                            } catch (e) {
                                r = !0, i = e;
                            } finally {
                                try {
                                    n || null == a.return || a.return();
                                } finally {
                                    if (r)
                                        throw i;
                                }
                            }
                            return t;
                        }
                    }(o) || d(o, 2) || function () {
                        throw new TypeError('Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }())[0], g = n[1], b = [], g.forEach(function (e) {
                        for (var t = -1, n = 0; n < b.length; ++n)
                            if (e.tid === b[n].tid) {
                                t = n;
                                break;
                            }
                        t <= -1 && b.push(e);
                    }), v = 0, T.forEach(function (e) {
                        var t, n, r, i, o, a, c, d, s;
                        e && b[v] && h()(e.bidders, b[v].bidderCode) && (t = Object(m.b)(p, f ? {
                            request: f.request.bind(null, 's2s'),
                            done: f.done
                        } : void 0), n = e.bidders, r = C[e.adapter], i = b[v].tid, o = b[v].adUnitsS2SCopy, a = g.filter(function (e) {
                            return e.tid === i;
                        }), r ? (c = {
                            tid: i,
                            ad_units: o,
                            s2sConfig: e
                        }).ad_units.length && (d = a.map(function (e) {
                            return e.start = Object(y.timestamp)(), l.bind(e);
                        }), s = c.ad_units.reduce(function (e, t) {
                            return e.concat((t.bids || []).reduce(function (e, t) {
                                return e.concat(t.bidder);
                            }, []));
                        }, []), A.logMessage('CALLING S2S HEADER BIDDERS ==== '.concat(n.filter(function (e) {
                            return h()(s, e);
                        }).join(','))), a.forEach(function (e) {
                            I.emit(E.EVENTS.BID_REQUESTED, e);
                        }), r.callBids(c, g, function (e, t) {
                            var n = Object(y.getBidderRequest)(g, t.bidderCode, e);
                            n && u.call(n, e, t);
                        }, function () {
                            return d.forEach(function (e) {
                                return e();
                            });
                        }, t)) : A.logError('missing ' + e.adapter), v++);
                    }), r.forEach(function (e) {
                        e.start = Object(y.timestamp)();
                        var t = C[e.bidderCode];
                        A.logMessage('CALLING BIDDER ======= '.concat(e.bidderCode)), I.emit(E.EVENTS.BID_REQUESTED, e);
                        var n = Object(m.b)(p, f ? {
                                request: f.request.bind(null, e.bidderCode),
                                done: f.done
                            } : void 0), r = l.bind(e);
                        try {
                            a.b.runWithBidder(e.bidderCode, y.bind.call(t.callBids, t, e, u.bind(e), r, n, i, a.b.callbackWithBidder(e.bidderCode)));
                        } catch (t) {
                            A.logError(''.concat(e.bidderCode, ' Bid Adapter emitted an uncaught error when parsing their bidRequest'), {
                                e: t,
                                bidRequest: e
                            }), r();
                        }
                    })) : A.logWarn('callBids executed with no bidRequests.  Were they filtered by labels or sizing?');
                }, O.videoAdapters = [], O.registerBidAdapter = function (e, t) {
                    var n = (2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : {}).supportedMediaTypes, r = void 0 === n ? [] : n;
                    e && t ? 'function' == typeof e.callBids ? (C[t] = e, h()(r, 'video') && O.videoAdapters.push(t), h()(r, 'native') && g.f.push(t)) : A.logError('Bidder adaptor error for bidder code: ' + t + 'bidder must implement a callBids() function') : A.logError('bidAdapter or bidderCode not specified');
                }, O.aliasBidAdapter = function (n, r, e) {
                    var t, i;
                    if (void 0 === C[r]) {
                        var o = C[n];
                        if (void 0 === o) {
                            var a = [];
                            T.forEach(function (e) {
                                var t;
                                e.bidders && e.bidders.length && (t = e && e.bidders, e && h()(t, r) ? _[r] = n : a.push(n));
                            }), a.forEach(function (e) {
                                A.logError('bidderCode "' + e + '" is not an existing bidder.', 'adapterManager.aliasBidAdapter');
                            });
                        } else
                            try {
                                var c, d, s, u, l = (t = n, i = [], h()(O.videoAdapters, t) && i.push('video'), h()(g.f, t) && i.push('native'), i);
                                o.constructor.prototype != Object.prototype ? (u = new o.constructor()).setBidderCode(r) : (c = o.getSpec(), d = e && e.gvlid, s = e && e.skipPbsAliasing, u = Object(f.newBidder)(w({}, c, {
                                    code: r,
                                    gvlid: d,
                                    skipPbsAliasing: s
                                })), _[r] = n), O.registerBidAdapter(u, r, { supportedMediaTypes: l });
                            } catch (e) {
                                A.logError(n + ' bidder does not currently support aliasing.', 'adapterManager.aliasBidAdapter');
                            }
                    } else
                        A.logMessage('alias name "' + r + '" has been already specified.');
                }, O.registerAnalyticsAdapter = function (e) {
                    var t = e.adapter, n = e.code, r = e.gvlid;
                    t && n ? 'function' == typeof t.enableAnalytics ? (t.code = n, u[n] = {
                        adapter: t,
                        gvlid: r
                    }) : A.logError('Prebid Error: Analytics adaptor error for analytics "'.concat(n, '"\n        analytics adapter must implement an enableAnalytics() function')) : A.logError('Prebid Error: analyticsAdapter or analyticsCode not specified');
                }, O.enableAnalytics = function (e) {
                    A.isArray(e) || (e = [e]), A._each(e, function (e) {
                        var t = u[e.provider].adapter;
                        t ? t.enableAnalytics(e) : A.logError('Prebid Error: no analytics adapter found in registry for\n        '.concat(e.provider, '.'));
                    });
                }, O.getBidAdapter = function (e) {
                    return C[e];
                }, O.getAnalyticsAdapter = function (e) {
                    return u[e];
                }, O.callTimedOutBidders = function (t, n, r) {
                    n = n.map(function (e) {
                        return e.params = A.getUserConfiguredParams(t, e.adUnitCode, e.bidder), e.timeout = r, e;
                    }), n = A.groupBy(n, 'bidder'), Object.keys(n).forEach(function (e) {
                        l(e, 'onTimeout', n[e]);
                    });
                }, O.callBidWonBidder = function (e, t, n) {
                    t.params = A.getUserConfiguredParams(n, t.adUnitCode, t.bidder), b.a.incrementBidderWinsCounter(t.adUnitCode, t.bidder), l(e, 'onBidWon', t);
                }, O.callSetTargetingBidder = function (e, t) {
                    l(e, 'onSetTargeting', t);
                }, O.callBidViewableBidder = function (e, t) {
                    l(e, 'onBidViewable', t);
                }, t.default = O;
            },
            80: function (e, t, n) {
                function r(e) {
                    c(e, u, {
                        value: {
                            objectID: 'O' + ++l,
                            weakData: {}
                        }
                    });
                }
                var i = n(53), o = n(27), a = n(28), c = n(33).f, d = n(59), s = n(113), u = d('meta'), l = 0, f = Object.isExtensible || function () {
                        return !0;
                    }, p = e.exports = {
                        REQUIRED: !1,
                        fastKey: function (e, t) {
                            if (!o(e))
                                return 'symbol' == typeof e ? e : ('string' == typeof e ? 'S' : 'P') + e;
                            if (!a(e, u)) {
                                if (!f(e))
                                    return 'F';
                                if (!t)
                                    return 'E';
                                r(e);
                            }
                            return e[u].objectID;
                        },
                        getWeakData: function (e, t) {
                            if (!a(e, u)) {
                                if (!f(e))
                                    return !0;
                                if (!t)
                                    return !1;
                                r(e);
                            }
                            return e[u].weakData;
                        },
                        onFreeze: function (e) {
                            return s && p.REQUIRED && f(e) && !a(e, u) && r(e), e;
                        }
                    };
                i[u] = !0;
            },
            81: function (e, t, n) {
                var r = n(21), i = n(38), o = r('iterator'), a = Array.prototype;
                e.exports = function (e) {
                    return void 0 !== e && (i.Array === e || a[o] === e);
                };
            },
            82: function (e, t, n) {
                var o = n(15);
                e.exports = function (e, t, n, r) {
                    try {
                        return r ? t(o(n)[0], n[1]) : t(n);
                    } catch (t) {
                        var i = e.return;
                        throw void 0 !== i && o(i.call(e)), t;
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
                    return '<script>' + e + '</script>';
                }
                var o, a = n(15), c = n(118), d = n(85), s = n(53), u = n(121), l = n(74), f = n(65), p = 'prototype', g = f('IE_PROTO'), b = function () {
                        try {
                            o = document.domain && new ActiveXObject('htmlfile');
                        } catch (e) {
                        }
                        var e, t;
                        b = o ? function (e) {
                            e.write(i('')), e.close();
                            var t = e.parentWindow.Object;
                            return e = null, t;
                        }(o) : ((t = l('iframe')).style.display = 'none', u.appendChild(t), t.src = String('javascript:'), (e = t.contentWindow.document).open(), e.write(i('document.F=Object')), e.close(), e.F);
                        for (var n = d.length; n--;)
                            delete b[p][d[n]];
                        return b();
                    };
                s[g] = !0, e.exports = Object.create || function (e, t) {
                    var n;
                    return null !== e ? (r[p] = a(e), n = new r(), r[p] = null, n[g] = e) : n = b(), void 0 === t ? n : c(n, t);
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
                var r, i, o, a = n(88), c = n(32), d = n(28), s = n(21), u = n(16), l = s('iterator'), f = !1;
                [].keys && ('next' in (o = [].keys()) ? (i = a(a(o))) !== Object.prototype && (r = i) : f = !0), null == r && (r = {}), u || d(r, l) || c(r, l, function () {
                    return this;
                }), e.exports = {
                    IteratorPrototype: r,
                    BUGGY_SAFARI_ITERATORS: f
                };
            },
            88: function (e, t, n) {
                var r = n(28), i = n(57), o = n(65), a = n(124), c = o('IE_PROTO'), d = Object.prototype;
                e.exports = a ? Object.getPrototypeOf : function (e) {
                    return e = i(e), r(e, c) ? e[c] : 'function' == typeof e.constructor && e instanceof e.constructor ? e.constructor.prototype : e instanceof Object ? d : null;
                };
            },
            89: function (e, t, n) {
                'use strict';
                var i = n(129).charAt, r = n(54), o = n(66), a = 'String Iterator', c = r.set, d = r.getterFor(a);
                o(String, 'String', function (e) {
                    c(this, {
                        type: a,
                        string: String(e),
                        index: 0
                    });
                }, function () {
                    var e, t = d(this), n = t.string, r = t.index;
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
                var c, i, d = n(0), o = n(5), a = Array.prototype.slice, s = Array.prototype.push, u = d._map(o.EVENTS, function (e) {
                        return e;
                    }), l = o.EVENT_ID_PATHS, f = [];
                e.exports = (c = {}, (i = {}).on = function (e, t, n) {
                    var r;
                    d.contains(u, e) ? (r = c[e] || { que: [] }, n ? (r[n] = r[n] || { que: [] }, r[n].que.push(t)) : r.que.push(t), c[e] = r) : d.logError('Wrong event name : ' + e + ' Valid event names :' + u);
                }, i.emit = function (e) {
                    !function (e, t) {
                        d.logMessage('Emitting event for: ' + e);
                        var n = t[0] || {}, r = n[l[e]], i = c[e] || { que: [] }, o = d._map(i, function (e, t) {
                                return t;
                            }), a = [];
                        f.push({
                            eventType: e,
                            args: n,
                            id: r,
                            elapsedTime: d.getPerformanceNow()
                        }), r && d.contains(o, r) && s.apply(a, i[r].que), s.apply(a, i.que), d._each(a, function (e) {
                            if (e)
                                try {
                                    e.apply(null, t);
                                } catch (e) {
                                    d.logError('Error executing handler:', 'events.js', e);
                                }
                        });
                    }(e, a.call(arguments, 1));
                }, i.off = function (e, n, r) {
                    var i = c[e];
                    d.isEmpty(i) || d.isEmpty(i.que) && d.isEmpty(i[r]) || r && (d.isEmpty(i[r]) || d.isEmpty(i[r].que)) || (r ? d._each(i[r].que, function (e) {
                        var t = i[r].que;
                        e === n && t.splice(t.indexOf(e), 1);
                    }) : d._each(i.que, function (e) {
                        var t = i.que;
                        e === n && t.splice(t.indexOf(e), 1);
                    }), c[e] = i);
                }, i.get = function () {
                    return c;
                }, i.getEvents = function () {
                    var n = [];
                    return d._each(f, function (e) {
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
                    return e.labelAll ? {
                        labelAll: !0,
                        labels: e.labelAll,
                        activeLabels: t
                    } : {
                        labelAll: !1,
                        labels: e.labelAny,
                        activeLabels: t
                    };
                }, t.c = function (e) {
                    var t = v(1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : b);
                    return !t.shouldFilter || !!t.sizesSupported[e];
                }, t.b = function () {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {}, t = e.labels, n = void 0 === t ? [] : t, r = e.labelAll, i = void 0 !== r && r, o = e.activeLabels, a = void 0 === o ? [] : o, c = 1 < arguments.length ? arguments[1] : void 0, d = 2 < arguments.length ? arguments[2] : void 0, s = v(3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : b), c = Object(p.isPlainObject)(c) ? Object(p.deepClone)(c) : d ? { banner: { sizes: d } } : {}, u = Object(p.deepAccess)(c, 'banner.sizes');
                    s.shouldFilter && u && (c.banner.sizes = u.filter(function (e) {
                        return s.sizesSupported[e];
                    }));
                    var l = Object.keys(c), f = {
                            active: l.every(function (e) {
                                return 'banner' !== e;
                            }) || l.some(function (e) {
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
                    return u && u.length !== c.banner.sizes.length && (f.filterResults = {
                        before: u,
                        after: c.banner.sizes
                    }), f;
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
            94: function (e, t, n) {
                var r = n(224);
                e.exports = r;
            },
            95: function (e, t, n) {
                'use strict';
                t.b = function (e, t, n) {
                    var r, i = { puts: e.map(d, n) };
                    Object(o.a)(a.b.getConfig('cache.url'), (r = t, {
                        success: function (e) {
                            var t;
                            try {
                                t = JSON.parse(e).responses;
                            } catch (e) {
                                return void r(e, []);
                            }
                            t ? r(null, t) : r(new Error('The cache server didn\'t respond with a responses property.'), []);
                        },
                        error: function (e, t) {
                            r(new Error('Error storing video ad in the cache: '.concat(e, ': ').concat(JSON.stringify(t))), []);
                        }
                    }), JSON.stringify(i), {
                        contentType: 'text/plain',
                        withCredentials: !0
                    });
                }, t.a = function (e) {
                    return ''.concat(a.b.getConfig('cache.url'), '?uuid=').concat(e);
                };
                var o = n(4), a = n(3), c = n(0);
                function d(e) {
                    var t, n, r, i = {
                            type: 'xml',
                            value: e.vastXml ? e.vastXml : (t = e.vastUrl, r = (n = e.vastImpUrl) ? '<![CDATA['.concat(n, ']]>') : '', '<VAST version="3.0">\n    <Ad>\n      <Wrapper>\n        <AdSystem>prebid.org wrapper</AdSystem>\n        <VASTAdTagURI><![CDATA['.concat(t, ']]></VASTAdTagURI>\n        <Impression>').concat(r, '</Impression>\n        <Creatives></Creatives>\n      </Wrapper>\n    </Ad>\n  </VAST>')),
                            ttlseconds: Number(e.ttl)
                        };
                    return a.b.getConfig('cache.vasttrack') && (i.bidder = e.bidder, i.bidid = e.requestId, c.isPlainObject(this) && this.hasOwnProperty('auctionStart') && (i.timestamp = this.auctionStart)), 'string' == typeof e.customCacheKey && '' !== e.customCacheKey && (i.key = e.customCacheKey), i;
                }
            },
            973: function (e, t, n) {
                e.exports = n(69);
            },
            98: function (e, t, n) {
                n(99);
                var r = n(52);
                e.exports = r('Array', 'find');
            },
            99: function (e, t, n) {
                'use strict';
                var r = n(14), i = n(56).find, o = n(51), a = n(60), c = !0, d = a('find');
                'find' in [] && Array(1).find(function () {
                    c = !1;
                }), r({
                    target: 'Array',
                    proto: !0,
                    forced: c || !d
                }, {
                    find: function (e, t) {
                        return i(this, e, 1 < arguments.length ? t : void 0);
                    }
                }), o('find');
            }
        }), pbjsYLHHChunk([306], {
            369: function (e, t, n) {
                e.exports = n(370);
            },
            370: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'allowAuction', function () {
                    return w;
                }), n.d(t, 'userCMP', function () {
                    return s;
                }), n.d(t, 'consentTimeout', function () {
                    return u;
                }), n.d(t, 'gdprScope', function () {
                    return l;
                }), n.d(t, 'staticConsentData', function () {
                    return f;
                }), t.requestBidsHook = I, t.resetConsentData = function () {
                    s = v = void 0, S = 0, i.gdprDataHandler.setConsentData(null);
                }, t.setConsentConfig = j;
                var p = n(0), r = n(3), i = n(8), o = n(12), a = n.n(o), c = n(70), g = n.n(c);
                function d(e) {
                    return (d = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (e) {
                        return typeof e;
                    } : function (e) {
                        return e && 'function' == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e;
                    })(e);
                }
                function b(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e;
                }
                var s, u, l, f, v, y = 'iab', m = 10000, h = !0, w = {
                        value: h,
                        definedInConfig: !1
                    }, S = 0, A = !1, E = {
                        iab: function (n, r, a) {
                            function e(e, t) {
                                p.logInfo('Received a response from CMP', e), t ? (!1 === e.gdprApplies || 'tcloaded' === e.eventStatus || 'useractioncomplete' === e.eventStatus || 'cmpuishown' === e.eventStatus && e.tcString) && n(e, a) : r('CMP unable to register callback function.  Please check CMP setup.', a);
                            }
                            var t, i = (t = {}, {
                                    consentDataCallback: function (e) {
                                        t.getConsentData = e, u();
                                    },
                                    vendorConsentsCallback: function (e) {
                                        t.getVendorConsents = e, u();
                                    }
                                }), d = {}, o = function () {
                                    for (var e, t, n = window; !e;) {
                                        try {
                                            if ('function' == typeof n.__tcfapi || 'function' == typeof n.__cmp) {
                                                t = 'function' == typeof n.__tcfapi ? (S = 2, n.__tcfapi) : (S = 1, n.__cmp), e = n;
                                                break;
                                            }
                                        } catch (e) {
                                        }
                                        try {
                                            if (n.frames.__tcfapiLocator) {
                                                S = 2, e = n;
                                                break;
                                            }
                                        } catch (e) {
                                        }
                                        try {
                                            if (n.frames.__cmpLocator) {
                                                S = 1, e = n;
                                                break;
                                            }
                                        } catch (e) {
                                        }
                                        if (n === window.top)
                                            break;
                                        n = n.parent;
                                    }
                                    return {
                                        cmpFrame: e,
                                        cmpFunction: t
                                    };
                                }(), c = o.cmpFrame, s = o.cmpFunction;
                            function u() {
                                t.getConsentData && t.getVendorConsents && (p.logInfo('Received all requested responses from CMP', t), n(t, a));
                            }
                            if (!c)
                                return r('CMP not found.', a);
                            function l(r, i) {
                                var e, t = a.adUnits, n = 1, o = 1;
                                Array.isArray(t) && 0 < t.length && (n = (e = p.getAdUnitSizes(t[0]))[0][0], o = e[0][1]), window.$sf.ext.register(n, o, function (e, t) {
                                    var n;
                                    'cmpReturn' === e && (n = 'getConsentData' === r ? t.vendorConsentData : t.vendorConsents, i(n));
                                }), window.$sf.ext.cmp(r);
                            }
                            function f(e, o, t) {
                                var i = 2 === S ? '__tcfapi' : '__cmp', a = Math.random() + '', c = ''.concat(i, 'Call');
                                function n(e) {
                                    var t, n = ''.concat(i, 'Return'), r = 'string' == typeof e.data && g()(e.data, n) ? JSON.parse(e.data) : e.data;
                                    r[n] && r[n].callId && (t = r[n], void 0 !== d[t.callId] && d[t.callId](t.returnValue, t.success));
                                }
                                2 === S ? (window[i] = function (e, t, n, r) {
                                    var i = b({}, c, {
                                        command: e,
                                        version: t,
                                        parameter: r,
                                        callId: a
                                    });
                                    d[a] = n, o.postMessage(i, '*');
                                }, window.addEventListener('message', n, !1), window[i](e, S, t)) : (window[i] = function (e, t, n) {
                                    var r = b({}, c, {
                                        command: e,
                                        parameter: t,
                                        callId: a
                                    });
                                    d[a] = n, o.postMessage(r, '*');
                                }, window.addEventListener('message', n, !1), window[i](e, void 0, t));
                            }
                            p.isFn(s) ? (p.logInfo('Detected CMP API is directly accessible, calling it now...'), 1 === S ? (s('getConsentData', null, i.consentDataCallback), s('getVendorConsents', null, i.vendorConsentsCallback)) : 2 === S && s('addEventListener', S, e)) : 1 === S && window.$sf && window.$sf.ext && 'function' == typeof window.$sf.ext.cmp ? (p.logInfo('Detected Prebid.js is encased in a SafeFrame and CMP is registered, calling it now...'), l('getConsentData', i.consentDataCallback), l('getVendorConsents', i.vendorConsentsCallback)) : (p.logInfo('Detected CMP is outside the current iframe where Prebid.js is located, calling it now...'), 1 === S ? (f('getConsentData', c, i.consentDataCallback), f('getVendorConsents', c, i.vendorConsentsCallback)) : 2 === S && f('addEventListener', c, e));
                        },
                        static: function (e, t, n) {
                            e(f, n);
                        }
                    };
                function I(e, t) {
                    var n = {
                        context: this,
                        args: [t],
                        nextFn: e,
                        adUnits: t.adUnits || pbjsYLHH.adUnits,
                        bidsBackHandler: t.bidsBackHandler,
                        haveExited: !1,
                        timer: null
                    };
                    return v ? (p.logInfo('User consent information already known.  Pulling internally stored information...'), T(null, n)) : a()(Object.keys(E), s) ? (E[s].call(this, O, C, n), void (n.haveExited || (0 === u ? O(void 0, n) : n.timer = setTimeout(function (e) {
                        C('CMP workflow exceeded timeout threshold.', e);
                    }.bind(null, n), u)))) : (p.logWarn('CMP framework ('.concat(s, ') is not a supported framework.  Aborting consentManagement module and resuming auction.')), n.nextFn.apply(n.context, n.args));
                }
                function O(n, e) {
                    'static' === s && 2 == (S = n.getConsentData ? 1 : n.getTCData ? 2 : 0) && (n = n.getTCData);
                    var t = 1 === S ? function (e) {
                        var t = e && e.getConsentData && e.getConsentData.gdprApplies;
                        return !('boolean' == typeof t && (!0 !== t || p.isStr(e.getConsentData.consentData) && p.isPlainObject(e.getVendorConsents) && 1 < Object.keys(e.getVendorConsents).length));
                    } : 2 === S ? function () {
                        var e = n && 'boolean' == typeof n.gdprApplies ? n.gdprApplies : l, t = n && n.tcString;
                        return !('boolean' == typeof e && (!0 !== e || p.isStr(t)));
                    } : null;
                    w.definedInConfig && 2 === S ? p.logWarn('\'allowAuctionWithoutConsent\' ignored for TCF 2') : w.definedInConfig || 1 !== S || p.logInfo('\'allowAuctionWithoutConsent\' using system default: ('.concat(h, ').')), p.isFn(t) ? t(n) ? C('CMP returned unexpected value during lookup process.', e, n) : (clearTimeout(e.timer), _(n), T(null, e)) : C('Unable to derive CMP version to process data.  Consent object does not conform to TCF v1 or v2 specs.', e, n);
                }
                function C(e, t, n) {
                    clearTimeout(t.timer), w.value && 1 === S && _(void 0), T(e, t, n);
                }
                function _(e) {
                    1 === S ? v = {
                        consentString: e ? e.getConsentData.consentData : void 0,
                        vendorData: e ? e.getVendorConsents : void 0,
                        gdprApplies: e ? e.getConsentData.gdprApplies : l
                    } : (v = {
                        consentString: e ? e.tcString : void 0,
                        vendorData: e || void 0,
                        gdprApplies: e && 'boolean' == typeof e.gdprApplies ? e.gdprApplies : l
                    }, e && e.addtlConsent && p.isStr(e.addtlConsent) && (v.addtlConsent = e.addtlConsent)), v.apiVersion = S, i.gdprDataHandler.setConsentData(v);
                }
                function T(e, t, n) {
                    var r, i, o;
                    !1 === t.haveExited && (t.haveExited = !0, r = t.context, i = t.args, o = t.nextFn, e ? w.value && 1 === S ? (p.logWarn(e + ' \'allowAuctionWithoutConsent\' activated.', n), o.apply(r, i)) : (p.logError(e + ' Canceling auction as per consentManagement config.', n), 'function' == typeof t.bidsBackHandler ? t.bidsBackHandler() : p.logError('Error executing bidsBackHandler')) : o.apply(r, i));
                }
                function j(e) {
                    (e = e && (e.gdpr || e.usp ? e.gdpr : e)) && 'object' === d(e) ? (p.isStr(e.cmpApi) ? s = e.cmpApi : (s = y, p.logInfo('consentManagement config did not specify cmp.  Using system default setting ('.concat(y, ').'))), p.isNumber(e.timeout) ? u = e.timeout : (u = m, p.logInfo('consentManagement config did not specify timeout.  Using system default setting ('.concat(m, ').'))), 'boolean' == typeof e.allowAuctionWithoutConsent && (w.value = e.allowAuctionWithoutConsent, w.definedInConfig = !0), l = !0 === e.defaultGdprScope, p.logInfo('consentManagement module has been activated...'), 'static' === s && (p.isPlainObject(e.consentData) ? (f = e.consentData, u = 0) : p.logError('consentManagement config with cmpApi: \'static\' did not specify consentData. No consents will be available to adapters.')), A || pbjsYLHH.requestBids.before(I, 50), A = !0) : p.logWarn('consentManagement config not defined, exiting consent manager');
                }
                r.b.getConfig('consentManagement', function (e) {
                    return j(e.consentManagement);
                });
            }
        }, [369]), pbjsYLHHChunk([270], {
            457: function (e, t, n) {
                e.exports = n(458);
            },
            458: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'purpose1Rule', function () {
                    return w;
                }), n.d(t, 'purpose2Rule', function () {
                    return S;
                }), n.d(t, 'purpose7Rule', function () {
                    return A;
                }), n.d(t, 'enforcementRules', function () {
                    return E;
                }), n.d(t, 'internal', function () {
                    return H;
                }), t.getGvlid = U, t.validateRules = k, t.deviceAccessHook = D, t.userSyncHook = x, t.userIdHook = B, t.makeBidRequestsHook = L, t.enableAnalyticsHook = R, t.setEnforcementConfig = M;
                var u = n(0), c = n(3), d = n(8), r = n(10), i = n.n(r), o = n(12), l = n.n(o), a = n(1), s = n(13), f = n(7), p = n(9), g = n.n(p), b = n(5);
                function v(t, e) {
                    var n, r = Object.keys(t);
                    return Object.getOwnPropertySymbols && (n = Object.getOwnPropertySymbols(t), e && (n = n.filter(function (e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable;
                    })), r.push.apply(r, n)), r;
                }
                function y(i) {
                    for (var e = 1; e < arguments.length; e++) {
                        var o = null != arguments[e] ? arguments[e] : {};
                        e % 2 ? v(Object(o), !0).forEach(function (e) {
                            var t, n = i, r = o[t = e];
                            t in n ? Object.defineProperty(n, t, {
                                value: r,
                                enumerable: !0,
                                configurable: !0,
                                writable: !0
                            }) : n[t] = r;
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(i, Object.getOwnPropertyDescriptors(o)) : v(Object(o)).forEach(function (e) {
                            Object.defineProperty(i, e, Object.getOwnPropertyDescriptor(o, e));
                        });
                    }
                    return i;
                }
                function m() {
                    return (m = Object.assign || function (e) {
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
                n.n(b);
                var w, S, A, E, I = {
                        purpose1: {
                            id: 1,
                            name: 'storage'
                        },
                        purpose2: {
                            id: 2,
                            name: 'basicAds'
                        },
                        purpose7: {
                            id: 7,
                            name: 'measurement'
                        }
                    }, O = [
                        {
                            purpose: 'storage',
                            enforcePurpose: !0,
                            enforceVendor: !0,
                            vendorExceptions: []
                        },
                        {
                            purpose: 'basicAds',
                            enforcePurpose: !0,
                            enforceVendor: !0,
                            vendorExceptions: []
                        }
                    ], C = [], _ = [], T = [], j = !1, H = {
                        getGvlidForBidAdapter: function (e) {
                            var t, n = null;
                            return !(e = e || c.b.getCurrentBidder()) || (t = d.default.getBidAdapter(e)) && t.getSpec && (n = t.getSpec().gvlid), n;
                        },
                        getGvlidForUserIdModule: function (e) {
                            return 'object' === h(e) ? e.gvlid : null;
                        },
                        getGvlidForAnalyticsAdapter: function (e) {
                            return d.default.getAnalyticsAdapter(e) && (d.default.getAnalyticsAdapter(e).gvlid || null);
                        }
                    };
                function U(e) {
                    var t = null;
                    if (e) {
                        var n = c.b.getConfig('gvlMapping'), r = 'string' == typeof e ? e : e.name;
                        if (n && n[r])
                            return n[r];
                        t = H.getGvlidForBidAdapter(r) || H.getGvlidForUserIdModule(e) || H.getGvlidForAnalyticsAdapter(r);
                    }
                    return t;
                }
                function k(t, e, n, r) {
                    var i = I[Object.keys(I).filter(function (e) {
                        return I[e].name === t.purpose;
                    })[0]].id;
                    if (l()(t.vendorExceptions || [], n))
                        return !0;
                    var o = u.deepAccess(e, 'vendorData.purpose.consents.'.concat(i)), a = u.deepAccess(e, 'vendorData.vendor.consents.'.concat(r)), c = u.deepAccess(e, 'vendorData.purpose.legitimateInterests.'.concat(i)), d = !1 === t.enforcePurpose || !0 === o, s = !1 === t.enforceVendor || !0 === a;
                    return 2 === i ? d && s || !0 === c : d && s;
                }
                function D(e, t, n, r) {
                    var i, o, a;
                    r = m({}, { hasEnforcementHook: !0 }), Object(u.hasDeviceAccess)() ? (i = d.gdprDataHandler.getConsentData()) && i.gdprApplies && 2 === i.apiVersion ? (t = (o = c.b.getCurrentBidder()) && o != n && d.default.aliasRegistry[o] === n ? U(o) : U(n) || t, k(w, i, a = n || o, t) ? r.valid = !0 : (a && u.logWarn('TCF2 denied device access for '.concat(a)), r.valid = !1, C.push(a))) : r.valid = !0 : (u.logWarn('Device access is disabled by Publisher'), r.valid = !1), e.call(this, t, n, r);
                }
                function x(e) {
                    for (var t, n, r = d.gdprDataHandler.getConsentData(), i = arguments.length, o = new Array(1 < i ? i - 1 : 0), a = 1; a < i; a++)
                        o[a - 1] = arguments[a];
                    r && r.gdprApplies && 2 === r.apiVersion ? (n = U(t = c.b.getCurrentBidder()), k(w, r, t, n) ? e.call.apply(e, [this].concat(o)) : (u.logWarn('User sync not allowed for '.concat(t)), C.push(t))) : e.call.apply(e, [this].concat(o));
                }
                function B(e, t, r) {
                    var n;
                    r && r.gdprApplies && 2 === r.apiVersion ? (n = t.map(function (e) {
                        var t = U(e.submodule), n = e.submodule.name;
                        if (k(w, r, n, t))
                            return e;
                        u.logWarn('User denied permission to fetch user id for '.concat(n, ' User id module')), C.push(n);
                    }).filter(function (e) {
                        return e;
                    }), e.call(this, n, y(y({}, r), {}, { hasValidated: !0 }))) : e.call(this, t, r);
                }
                function L(e, t) {
                    for (var i = d.gdprDataHandler.getConsentData(), n = arguments.length, r = new Array(2 < n ? n - 2 : 0), o = 2; o < n; o++)
                        r[o - 2] = arguments[o];
                    i && i.gdprApplies && 2 === i.apiVersion && t.forEach(function (e) {
                        e.bids = e.bids.filter(function (e) {
                            var t = e.bidder, n = U(t);
                            if (l()(_, t))
                                return !1;
                            var r = !!k(S, i, t, n);
                            return r || (u.logWarn('TCF2 blocked auction for '.concat(t)), _.push(t)), r;
                        });
                    }), e.call.apply(e, [
                        this,
                        t
                    ].concat(r));
                }
                function R(e, t) {
                    var i = d.gdprDataHandler.getConsentData();
                    i && i.gdprApplies && 2 === i.apiVersion && (u.isArray(t) || (t = [t]), t = t.filter(function (e) {
                        var t = e.provider, n = U(t), r = !!k(A, i, t, n);
                        return r || (T.push(t), u.logWarn('TCF2 blocked analytics adapter '.concat(e.provider))), r;
                    })), e.call(this, t);
                }
                g.a.on(b.EVENTS.AUCTION_END, function () {
                    function e(n) {
                        return n.filter(function (e, t) {
                            return null !== e && n.indexOf(e) === t;
                        });
                    }
                    var t = {
                        storageBlocked: e(C),
                        biddersBlocked: e(_),
                        analyticsBlocked: e(T)
                    };
                    g.a.emit(b.EVENTS.TCF2_ENFORCEMENT, t);
                });
                var P = function (e) {
                        return e.purpose === I.purpose1.name;
                    }, Y = function (e) {
                        return e.purpose === I.purpose2.name;
                    }, N = function (e) {
                        return e.purpose === I.purpose7.name;
                    };
                function M(e) {
                    var t = u.deepAccess(e, 'gdpr.rules');
                    E = t || (u.logWarn('TCF2: enforcing P1 and P2 by default'), O), w = i()(E, P), S = i()(E, Y), A = i()(E, N), w = w || O[0], S = S || O[1], w && !j && (j = !0, f.d.before(D, 49), a.registerSyncInner.before(x, 48), Object(s.a)('validateGdprEnforcement').before(B, 47)), S && Object(s.a)('makeBidRequests').before(L), A && Object(s.a)('enableAnalyticsCb').before(R);
                }
                c.b.getConfig('consentManagement', function (e) {
                    return M(e.consentManagement);
                });
            }
        }, [457]), pbjsYLHHChunk([249], {
            502: function (e, t, n) {
                e.exports = n(503);
            },
            503: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'storage', function () {
                    return a;
                }), n.d(t, 'identityLinkSubmodule', function () {
                    return d;
                });
                var c = n(0), i = n(4), r = n(13), o = n(7), a = Object(o.b)(), d = {
                        name: 'identityLink',
                        gvlid: 97,
                        decode: function (e) {
                            return { idl_env: e };
                        },
                        getId: function (e, t) {
                            var n = e && e.params || {};
                            if (n && 'string' == typeof n.pid) {
                                var r = t && 'boolean' == typeof t.gdprApplies && t.gdprApplies ? 1 : 0, i = r ? t.consentString : '', o = 2 === c.deepAccess(t, 'vendorData.tcfPolicyVersion');
                                if (!r || i && '' !== i) {
                                    var a = 'https://api.rlcdn.com/api/identity/envelope?pid='.concat(n.pid).concat(r ? (o ? '&ct=4&cv=' : '&ct=1&cv=') + i : '');
                                    return {
                                        callback: function (t) {
                                            window.ats ? (c.logInfo('identityLink: ATS exists!'), window.ats.retrieveEnvelope(function (e) {
                                                e ? (c.logInfo('identityLink: An envelope can be retrieved from ATS!'), u(!0), t(JSON.parse(e).envelope)) : s(a, t);
                                            })) : s(a, t);
                                        }
                                    };
                                }
                                c.logInfo('identityLink: Consent string is required to call envelope API.');
                            } else
                                c.logError('identityLink: requires partner id to be defined');
                        }
                    };
                function s(e, n) {
                    var t, r = {
                            success: function (e) {
                                var t;
                                if (e)
                                    try {
                                        t = JSON.parse(e);
                                    } catch (e) {
                                        c.logInfo(e);
                                    }
                                n(t && t.envelope ? t.envelope : '');
                            },
                            error: function (e) {
                                c.logInfo('identityLink: identityLink: ID fetch encountered an error', e), n();
                            }
                        };
                    a.getCookie('_lr_retry_request') || ((t = new Date()).setTime(t.getTime() + 3600000), a.setCookie('_lr_retry_request', 'true', t.toUTCString()), c.logInfo('identityLink: A 3P retrieval is attempted!'), u(!1), Object(i.a)(e, r, void 0, {
                        method: 'GET',
                        withCredentials: !0
                    }));
                }
                function u(e) {
                    var t = new Date();
                    t.setTime(t.getTime() + 2592000000), a.setCookie('_lr_env_src_ats', e, t.toUTCString());
                }
                Object(r.e)('userId', d);
            }
        }, [502]), pbjsYLHHChunk([6], {
            20: function (e, t, n) {
                'use strict';
                t.b = function (e) {
                    var t, n = [];
                    for (var c in e)
                        e.hasOwnProperty(c) && ('pubProvidedId' === c ? n = n.concat(e.pubProvidedId) : (t = function (e) {
                            var t = s[c];
                            if (t && e) {
                                var n = {};
                                n.source = t.source;
                                var r = d.isFn(t.getValue) ? t.getValue(e) : e;
                                if (d.isStr(r)) {
                                    var i, o, a = {
                                            id: r,
                                            atype: t.atype
                                        };
                                    return !d.isFn(t.getUidExt) || (i = t.getUidExt(e)) && (a.ext = i), n.uids = [a], !d.isFn(t.getEidExt) || (o = t.getEidExt(e)) && (n.ext = o), n;
                                }
                            }
                            return null;
                        }(e[c])) && n.push(t));
                    return n;
                }, t.a = function (e) {
                    var n = [];
                    return e.filter(function (e) {
                        return d.isPlainObject(e.idObj) && Object.keys(e.idObj).length;
                    }).forEach(function (t) {
                        Object.keys(t.idObj).forEach(function (e) {
                            d.deepAccess(t, 'config.bidders') && Array.isArray(t.config.bidders) && d.deepAccess(s, e + '.source') && n.push({
                                source: s[e].source,
                                bidders: t.config.bidders
                            });
                        });
                    }), n;
                };
                var d = n(0), s = {
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
                                var t = d.pick(e, [
                                    'ibaOptout',
                                    'ccpaOptout'
                                ]);
                                if (Object.keys(t).length)
                                    return t;
                            }
                        },
                        idl_env: {
                            source: 'liveramp.com',
                            atype: 1
                        },
                        lipb: {
                            getValue: function (e) {
                                return e.lipbid;
                            },
                            source: 'liveintent.com',
                            atype: 1,
                            getEidExt: function (e) {
                                if (Array.isArray(e.segments) && e.segments.length)
                                    return { segments: e.segments };
                            }
                        },
                        britepoolid: {
                            source: 'britepool.com',
                            atype: 1
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
                            atype: 1
                        },
                        netId: {
                            source: 'netid.de',
                            atype: 1
                        },
                        aut: {
                            source: 'aut.vm',
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
                        idx: {
                            source: 'idx.lat',
                            atype: 1
                        },
                        connectid: {
                            source: 'verizonmedia.com',
                            atype: 1
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
                        }
                    };
            },
            907: function (e, t, n) {
                e.exports = n(908);
            },
            908: function (e, t, n) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), n.d(t, 'PBJS_USER_ID_OPTOUT_NAME', function () {
                    return _;
                }), n.d(t, 'coreStorage', function () {
                    return T;
                }), n.d(t, 'syncDelay', function () {
                    return h;
                }), n.d(t, 'auctionDelay', function () {
                    return w;
                }), t.setSubmoduleRegistry = function (e) {
                    D = e;
                }, t.setStoredValue = x, t.setStoredConsentData = R, t.findRootDomain = N, t.requestBidsHook = F, n.d(t, 'validateGdprEnforcement', function () {
                    return K;
                }), t.attachIdSystem = $, t.init = X;
                var r = n(10), i = n.n(r), o = n(3), a = n(9), c = n.n(a), u = n(0), d = n(18), l = n(8), s = n(5), f = n.n(s), p = n(13), g = n(20), b = n(7);
                function v(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var n = 0, r = new Array(t); n < t; n++)
                        r[n] = e[n];
                    return r;
                }
                var y, m, h, w, S = 'User ID', A = 'cookie', E = 'html5', I = 500, O = 0, C = {
                        name: '_pbjs_userid_consent_data',
                        expires: 30
                    }, _ = '_pbjs_id_optout', T = Object(b.a)('userid'), j = [], H = !1, U = [], k = [], D = [];
                function x(e, t) {
                    var n = e.config.storage, r = 'function' == typeof e.submodule.domainOverride ? e.submodule.domainOverride() : null;
                    try {
                        var i = u.isPlainObject(t) ? JSON.stringify(t) : t, o = new Date(Date.now() + 86400000 * n.expires).toUTCString();
                        n.type === A ? (T.setCookie(n.name, i, o, 'Lax', r), 'number' == typeof n.refreshInSeconds && T.setCookie(''.concat(n.name, '_last'), new Date().toUTCString(), o, 'Lax', r)) : n.type === E && (T.setDataInLocalStorage(''.concat(n.name, '_exp'), o), T.setDataInLocalStorage(n.name, encodeURIComponent(i)), 'number' == typeof n.refreshInSeconds && T.setDataInLocalStorage(''.concat(n.name, '_last'), new Date().toUTCString()));
                    } catch (e) {
                        u.logError(e);
                    }
                }
                function B(e, t) {
                    var n, r, i = 1 < arguments.length && void 0 !== t ? t : void 0, o = i ? ''.concat(e.name, '_').concat(i) : e.name;
                    try {
                        e.type === A ? n = T.getCookie(o) : e.type === E && ('' === (r = T.getDataFromLocalStorage(''.concat(e.name, '_exp'))) ? n = T.getDataFromLocalStorage(o) : r && 0 < new Date(r).getTime() - Date.now() && (n = decodeURIComponent(T.getDataFromLocalStorage(o)))), 'string' == typeof n && '{' === n.trim().charAt(0) && (n = JSON.parse(n));
                    } catch (e) {
                        u.logError(e);
                    }
                    return n;
                }
                function L(e) {
                    var t = {
                        consentString: '',
                        gdprApplies: !1,
                        apiVersion: 0
                    };
                    return e && (t.consentString = e.consentString, t.gdprApplies = e.gdprApplies, t.apiVersion = e.apiVersion), u.cyrb53Hash(JSON.stringify(t));
                }
                function R(o) {
                    try {
                        window.yieldlove_tc = window.yieldlove_tc || [], window.yieldlove_tc.push(function (e) {
                            if (e && e.vendor)
                                for (var t = 0, n = [
                                            'consents',
                                            'legitimateInterests'
                                        ]; t < n.length; t++) {
                                    var r = n[t];
                                    if (e.vendor[r][251] && e.purpose[r][1]) {
                                        var i = new Date(Date.now() + 86400000 * C.expires).toUTCString();
                                        T.setCookie(C.name, L(o), i, 'Lax');
                                        break;
                                    }
                                }
                        });
                    } catch (e) {
                        u.logError(e);
                    }
                }
                function P() {
                    try {
                        return T.getCookie(C.name);
                    } catch (e) {
                        u.logError(e);
                    }
                }
                function Y(e) {
                    if (e && 'boolean' == typeof e.gdprApplies && e.gdprApplies) {
                        if (!e.consentString)
                            return;
                        if (1 === e.apiVersion && !1 === u.deepAccess(e, 'vendorData.purposeConsents.1'))
                            return;
                        if (2 === e.apiVersion && !1 === u.deepAccess(e, 'vendorData.purpose.consents.1'))
                            return;
                    }
                    return 1;
                }
                function N() {
                    var e = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : window.location.hostname;
                    if (!T.cookiesAreEnabled())
                        return e;
                    var t, n, r = e.split('.');
                    if (2 == r.length)
                        return e;
                    var i = -2, o = '_rdc'.concat(Date.now());
                    do {
                        t = r.slice(i).join('.');
                        var a = new Date(u.timestamp() + 10000).toUTCString();
                        T.setCookie(o, 'writeable', a, 'Lax', t, void 0), 'writeable' === T.getCookie(o, void 0) ? (n = !1, T.setCookie(o, '', 'Thu, 01 Jan 1970 00:00:01 GMT', void 0, t, void 0)) : (i += -1, n = Math.abs(i) <= r.length);
                    } while (n);
                    return t;
                }
                function M(e, t) {
                    var n = function () {
                    };
                    t && (n = u.delayExecution(function () {
                        clearTimeout(m), t();
                    }, e.length)), e.forEach(function (t) {
                        t.callback(function (e) {
                            e ? (t.config.storage && x(t, e), t.idObj = t.submodule.decode(e, t.config)) : u.logInfo(''.concat(S, ': ').concat(t.submodule.name, ' - request id responded with an empty value')), n();
                        }), t.callback = void 0;
                    });
                }
                function G(e) {
                    return Array.isArray(e) && e.length ? e.filter(function (e) {
                        return u.isPlainObject(e.idObj) && Object.keys(e.idObj).length;
                    }).reduce(function (t, n) {
                        return Object.keys(n.idObj).forEach(function (e) {
                            t[e] = n.idObj[e];
                        }), t;
                    }, {}) : {};
                }
                function q(e) {
                    var t, n, r, i, o, a = !1;
                    void 0 === y && (y = function (e, n) {
                        var r = P();
                        R(n);
                        var t = K(e, n), i = t.userIdModules;
                        return t.hasValidated || Y(n) ? i.reduce(function (e, t) {
                            return J(t, n, r, !1), e.push(t), e;
                        }, []) : (u.logWarn(''.concat(S, ' - gdpr permission not valid for local storage or cookies, exit module')), []);
                    }(U, l.gdprDataHandler.getConsentData())).length && (i = y, 'function' == typeof (o = Object(u.getPrebidInternal)().setEidPermissions) && u.isArray(i) && o(Object(g.a)(i)), (t = y.filter(function (e) {
                        return u.isFn(e.callback);
                    })).length && (e && 0 < w ? (n = !(a = !0), r = function () {
                        n || (n = !0, e());
                    }, u.logInfo(''.concat(S, ' - auction delayed by ').concat(w, ' at most to fetch ids')), m = setTimeout(r, w), M(t, r)) : c.a.on(f.a.EVENTS.AUCTION_END, function e() {
                        c.a.off(f.a.EVENTS.AUCTION_END, e), 0 < h ? setTimeout(function () {
                            M(t);
                        }, h) : M(t);
                    }))), e && !a && e();
                }
                function F(t, n) {
                    q(function () {
                        var e = n.adUnits || Object(d.a)().adUnits, i = y;
                        [e].some(function (e) {
                            return !Array.isArray(e) || !e.length;
                        }) || e.forEach(function (e) {
                            e.bids && u.isArray(e.bids) && e.bids.forEach(function (e) {
                                var t, n, r = (t = i, n = e.bidder, Array.isArray(t) && t.length && n ? t.filter(function (e) {
                                        return !e.config.bidders || !u.isArray(e.config.bidders) || e.config.bidders.includes(n);
                                    }).filter(function (e) {
                                        return u.isPlainObject(e.idObj) && Object.keys(e.idObj).length;
                                    }).reduce(function (t, n) {
                                        return Object.keys(n.idObj).forEach(function (e) {
                                            t[e] = n.idObj[e];
                                        }), t;
                                    }, {}) : {});
                                Object.keys(r).length && (e.userId = r, e.userIdAsEids = Object(g.b)(r));
                            });
                        }), t.call(this, n);
                    });
                }
                function z() {
                    return q(), G(y);
                }
                function W() {
                    return q(), Object(g.b)(G(y));
                }
                function V(e, d) {
                    var s = (s = e ? e.submoduleNames : null) || [];
                    q(function () {
                        var e = l.gdprDataHandler.getConsentData(), t = P();
                        R(e);
                        var n = K(U, e), r = n.userIdModules;
                        if (n.hasValidated || Y(e)) {
                            var i, o = [], a = function (e) {
                                    var t;
                                    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                                        if (Array.isArray(e) || (t = function (e) {
                                                if (e) {
                                                    if ('string' == typeof e)
                                                        return v(e, void 0);
                                                    var t = Object.prototype.toString.call(e).slice(8, -1);
                                                    return 'Object' === t && e.constructor && (t = e.constructor.name), 'Map' === t || 'Set' === t ? Array.from(e) : 'Arguments' === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? v(e, void 0) : void 0;
                                                }
                                            }(e))) {
                                            t && (e = t);
                                            var n = 0, r = function () {
                                                };
                                            return {
                                                s: r,
                                                n: function () {
                                                    return n >= e.length ? { done: !0 } : {
                                                        done: !1,
                                                        value: e[n++]
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
                                    var i, o = !0, a = !1;
                                    return {
                                        s: function () {
                                            t = e[Symbol.iterator]();
                                        },
                                        n: function () {
                                            var e = t.next();
                                            return o = e.done, e;
                                        },
                                        e: function (e) {
                                            a = !0, i = e;
                                        },
                                        f: function () {
                                            try {
                                                o || null == t.return || t.return();
                                            } finally {
                                                if (a)
                                                    throw i;
                                            }
                                        }
                                    };
                                }(r);
                            try {
                                for (a.s(); !(i = a.n()).done;) {
                                    var c = i.value;
                                    0 < s.length && -1 === s.indexOf(c.submodule.name) || (u.logInfo(''.concat(S, ' - refreshing ').concat(c.submodule.name)), J(c, e, t, !0), u.isFn(c.callback) && o.push(c));
                                }
                            } catch (e) {
                                a.e(e);
                            } finally {
                                a.f();
                            }
                            0 < o.length && M(o), d && d();
                        } else
                            u.logWarn(''.concat(S, ' - gdpr permission not valid for local storage or cookies, exit module'));
                    });
                }
                var K = Object(p.b)('sync', function (e, t) {
                    return {
                        userIdModules: e,
                        hasValidated: t && t.hasValidated
                    };
                }, 'validateGdprEnforcement');
                function J(e, t, n, r) {
                    var i, o, a, c, d;
                    e.config.storage ? (i = B(e.config.storage), c = !1, 'number' == typeof e.config.storage.refreshInSeconds && (c = (a = new Date(B(e.config.storage, 'last'))) && Date.now() - a.getTime() > 1000 * e.config.storage.refreshInSeconds), !i || c || r || null != n && n !== L(t) ? o = e.submodule.getId(e.config, t, i) : 'function' == typeof e.submodule.extendId && (o = e.submodule.extendId(e.config, t, i)), u.isPlainObject(o) && (o.id && (x(e, o.id), i = o.id), 'function' == typeof o.callback && (e.callback = o.callback)), i && (e.idObj = e.submodule.decode(i, e.config))) : e.config.value ? e.idObj = e.config.value : (d = e.submodule.getId(e.config, t, void 0), u.isPlainObject(d) && ('function' == typeof d.callback && (e.callback = d.callback), d.id && (e.idObj = e.submodule.decode(d.id, e.config))));
                }
                function Q() {
                    var e, n, t, r = (e = k, n = j, Array.isArray(e) ? e.reduce(function (e, t) {
                            return !t || u.isEmptyStr(t.name) || (!t.storage || u.isEmptyStr(t.storage.type) || u.isEmptyStr(t.storage.name) || -1 === n.indexOf(t.storage.type)) && !u.isPlainObject(t.value) && (t.storage || t.value) || e.push(t), e;
                        }, []) : []);
                    r.length && (t = D.filter(function (t) {
                        return !i()(U, function (e) {
                            return e.name === t.name;
                        });
                    }), U = t.map(function (t) {
                        var e = i()(r, function (e) {
                            return e.name === t.name;
                        });
                        return t.findRootDomain = N, e ? {
                            submodule: t,
                            config: e,
                            callback: void 0,
                            idObj: void 0
                        } : null;
                    }).filter(function (e) {
                        return null !== e;
                    }), !H && U.length && (Object(d.a)().requestBids.before(F, 40), u.logInfo(''.concat(S, ' - usersync config updated for ').concat(U.length, ' submodules: '), U.map(function (e) {
                        return e.submodule.name;
                    })), H = !0));
                }
                function $(t) {
                    i()(D, function (e) {
                        return e.name === t.name;
                    }) || (D.push(t), Q());
                }
                function X(e) {
                    U = [], H = !(k = []), y = void 0, -1 !== (j = [
                        T.localStorageIsEnabled() ? E : null,
                        T.cookiesAreEnabled() ? A : null
                    ].filter(function (e) {
                        return null !== e;
                    })).indexOf(A) && T.getCookie(_) ? u.logInfo(''.concat(S, ' - opt-out cookie found, exit module')) : -1 !== j.indexOf(E) && T.getDataFromLocalStorage(_) ? u.logInfo(''.concat(S, ' - opt-out localStorage found, exit module')) : (e.getConfig(function (e) {
                        var t = e.userSync;
                        t && t.userIds && (k = t.userIds, h = u.isNumber(t.syncDelay) ? t.syncDelay : I, w = u.isNumber(t.auctionDelay) ? t.auctionDelay : O, Q());
                    }), Object(d.a)().getUserIds = z, Object(d.a)().getUserIdsAsEids = W, Object(d.a)().refreshUserIds = V);
                }
                X(o.b), Object(p.c)('userId', $);
            }
        }, [907]);
        pbjsYLHHChunk([345], {
            283: function (e, r, a) {
                e.exports = a(284);
            },
            284: function (e, r, a) {
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
                            var m, f, y = I()(e, z), g = y ? parseInt(y.params.member, 10) : 0, v = e[0].schain, b = I()(e, J), h = {
                                    tags: A(t),
                                    user: i,
                                    sdk: {
                                        source: 'pbjs',
                                        version: '4.32.0'
                                    },
                                    schain: v
                                };
                            return b && (h.iab_support = {
                                omidpn: 'Appnexus',
                                omidpv: '4.32.0'
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
                            }, h.referrer_detection = m), I()(e, H) && e.filter(H).forEach(function (r) {
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
                                                    L(e, 'minduration', r), L(e, 'maxduration', r);
                                                });
                                            })) : d.map(function (e) {
                                                return L(e, 'maxduration', s);
                                            });
                                        }
                                        return d;
                                    }(t, r), a = h.tags.filter(function (e) {
                                        return e.uuid !== r.bidId;
                                    });
                                h.tags = [].concat(A(a), A(e));
                            }), e[0].userId && (F(f = [], _.deepAccess(e[0], 'userId.criteoId'), 'criteo.com', null), F(f, _.deepAccess(e[0], 'userId.netId'), 'netid.de', null), F(f, _.deepAccess(e[0], 'userId.idl_env'), 'liveramp.com', null), F(f, _.deepAccess(e[0], 'userId.tdid'), 'adserver.org', 'TDID'), f.length && (h.eids = f)), t[0].publisher_id && (h.publisher_id = t[0].publisher_id), function (e, a) {
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
                                                        t.setRender(W);
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
                function H(e) {
                    return e.mediaTypes && e.mediaTypes.video && e.mediaTypes.video.context === g.a;
                }
                function J(e) {
                    var r = !1, a = e.params, t = e.params.video;
                    return a.frameworks && _.isArray(a.frameworks) && (r = w()(e.params.frameworks, 6)), !r && t && t.frameworks && _.isArray(t.frameworks) && (r = w()(e.params.video.frameworks, 6)), r;
                }
                function L(e, r, a) {
                    _.isEmpty(e.video) && (e.video = {}), e.video[r] = a;
                }
                function W(e) {
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
                function F(e, r, a, t) {
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
        }, [283]);
        pbjsYLHHChunk([383], {
            188: function (e, r, n) {
                e.exports = n(189);
            },
            189: function (e, r, n) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), n.d(r, 'spec', function () {
                    return d;
                });
                var t = n(1), C = n(3), f = n(2), h = n(11), A = n(0), s = n(12), O = n.n(s), R = 'adform', d = {
                        code: R,
                        gvlid: 50,
                        supportedMediaTypes: [
                            f.b,
                            f.d
                        ],
                        isBidRequestValid: function (e) {
                            return !!e.params.mid;
                        },
                        buildRequests: function (e, r) {
                            var n, t, s, d, i, o, u, a, p, c, f = C.b.getConfig('currency.adServerCurrency'), h = [], g = [
                                    [
                                        'adxDomain',
                                        'adx.adform.net'
                                    ],
                                    [
                                        'fd',
                                        1
                                    ],
                                    [
                                        'url',
                                        null
                                    ],
                                    [
                                        'tid',
                                        null
                                    ],
                                    [
                                        'eids',
                                        function (e) {
                                            if (A.isArray(e) && 0 < e.length) {
                                                var r = function (e) {
                                                    return e.reduce(function (n, e) {
                                                        var t = e.source;
                                                        return n[t] = n[t] || {}, e.uids.forEach(function (e) {
                                                            var r = e.id + '';
                                                            n[t][r] = n[t][r] || [], n[t][r].push(e.atype);
                                                        }), n;
                                                    }, {});
                                                }(e);
                                                return btoa(JSON.stringify(r));
                                            }
                                        }(A.deepAccess(e, '0.userIdAsEids'))
                                    ]
                                ], l = {
                                    mkv: [],
                                    mkw: [],
                                    msw: []
                                }, v = JSON.parse(JSON.stringify(e)), m = v[0] && v[0].bidder || R;
                            if (1 < v.length) {
                                for (var b in l)
                                    !function (n) {
                                        var t;
                                        l.hasOwnProperty(n) && (t = v.map(function (e) {
                                            return e.params[n] && e.params[n].split(',') || [];
                                        }), l[n] = t.reduce(w), l[n].length && v.forEach(function (e, r) {
                                            e.params[n] = t[r].filter(function (e) {
                                                return !O()(l[n], e);
                                            });
                                        }));
                                    }(b);
                            }
                            for (n = 0, t = v.length; n < t; n++) {
                                for ('net' !== (i = v[n]).params.priceType && 'net' !== i.params.pt || (p = 'net'), s = 0, d = g.length; s < d; s++)
                                    (u = i[o = g[s][0]] || i.params[o]) && (i[o] = i.params[o] = null, g[s][1] = u);
                                (a = i.params).transactionId = i.transactionId, a.rcur = a.rcur || f, h.push(function (e) {
                                    var r, n = [];
                                    for (r in e)
                                        e.hasOwnProperty(r) && e[r] && n.push(r, '=', e[r], '&');
                                    return encodeURIComponent(btoa(n.join('').slice(0, -1)));
                                }(a));
                            }
                            h.unshift('https://' + g[0][1] + '/adx/?rp=4'), p = p || 'gross', h.push('pt=' + p), h.push('stid=' + e[0].auctionId);
                            var y = A.deepAccess(r, 'gdprConsent.gdprApplies'), I = A.deepAccess(r, 'gdprConsent.consentString');
                            for (var _ in (void 0 !== y && (c = {
                                    gdpr: y,
                                    gdpr_consent: I
                                }, h.push('gdpr=' + (1 & y)), h.push('gdpr_consent=' + I)), r && r.uspConsent && h.push('us_privacy=' + r.uspConsent), l))
                                l.hasOwnProperty(_) && g.push([
                                    _,
                                    l[_].join(',')
                                ]);
                            for (n = 1, t = g.length; n < t; n++)
                                o = g[n][0], (u = g[n][1]) && h.push(o + '=' + encodeURIComponent(u));
                            return {
                                method: 'GET',
                                url: h.join('&'),
                                bids: e,
                                netRevenue: p,
                                bidder: m,
                                gdpr: c
                            };
                            function w(e, r) {
                                return e.filter(function (e) {
                                    return O()(r, e);
                                });
                            }
                        },
                        interpretResponse: function (e, r) {
                            for (var n, t, s, d, i = {
                                        banner: 1,
                                        vast_content: 1,
                                        vast_url: 1
                                    }, o = [], u = r.bids, a = e.body, p = 0; p < a.length; p++)
                                d = 'banner' === (t = a[p]).response ? f.b : f.d, s = u[p], i[t.response] && (function (e, r) {
                                    for (var n = 0, t = r.length; n < t; n++)
                                        if (e.width == r[n][0] && e.height == r[n][1])
                                            return !0;
                                    return !1;
                                }(t, A.getAdUnitSizes(s)) || d === f.d) && (n = {
                                    requestId: s.bidId,
                                    cpm: t.win_bid,
                                    width: t.width,
                                    height: t.height,
                                    creativeId: s.bidId,
                                    dealId: t.deal_id,
                                    currency: t.win_cur,
                                    netRevenue: 'gross' !== r.netRevenue,
                                    ttl: 360,
                                    ad: t.banner,
                                    bidderCode: r.bidder,
                                    transactionId: s.transactionId,
                                    vastUrl: t.vast_url,
                                    vastXml: t.vast_content,
                                    mediaType: d
                                }, s.renderer || d !== f.d || 'outstream' !== A.deepAccess(s, 'mediaTypes.video.context') || (n.renderer = h.a.install({
                                    id: s.bidId,
                                    url: 'https://s2.adform.net/banners/scripts/video/outstream/render.js'
                                }), n.renderer.setRender(c)), r.gdpr && (n.gdpr = r.gdpr.gdpr, n.gdpr_consent = r.gdpr.gdpr_consent), o.push(n));
                            return o;
                            function c(e) {
                                e.renderer.push(function () {
                                    window.Adform.renderOutstream(e);
                                });
                            }
                        }
                    };
                Object(t.registerBidder)(d);
            }
        }, [188]);
        pbjsYLHHChunk([237], {
            530: function (e, r, t) {
                e.exports = t(531);
            },
            531: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'spec', function () {
                    return c;
                });
                var J = t(0), T = t(2), D = t(3), i = t(10), f = t.n(i), n = t(532), s = t.n(n), o = t(1);
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
                var y = [
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
                                        version: '4.32.0'
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
                        }, O = new Blob([''.concat(I.url).concat(J.parseQueryStringParameters(R(R({}, I.data), {}, { r: JSON.stringify(c) })))]).size, w = O, P = 0, S = 0, z = 0;
                    c.ext.ixdiag.msd = 0, c.ext.ixdiag.msi = 0, c.imp = [];
                    for (var A, T, C, j, F, k = 0, E = Object.keys(t), B = []; k < E.length && x.length < 4;) {
                        t[E[k]].hasOwnProperty('missingCount') && (z = t[E[k]].missingCount), function (e, r) {
                            var t = new Blob([encodeURIComponent(JSON.stringify(e))]).size;
                            if (t < r)
                                return;
                            for (; r < t;)
                                e.hasOwnProperty('missingImps') && 0 < e.missingImps.length ? e.missingImps.pop() : e.hasOwnProperty('ixImps') && 0 < e.ixImps.length && e.ixImps.pop(), t = new Blob([encodeURIComponent(JSON.stringify(e))]).size;
                        }(t[E[k]], 8000 - O), t[E[k]].hasOwnProperty('missingImps') && (S = t[E[k]].missingImps.length), (w += new Blob([encodeURIComponent(JSON.stringify(t[E[k]]))]).size) < 8000 ? ((A = c.imp).push.apply(A, N(t[E[k]].ixImps)), c.ext.ixdiag.msd += z, c.ext.ixdiag.msi += S, t[E[k]].hasOwnProperty('missingImps') && B.push.apply(B, N(t[E[k]].missingImps)), k++) : (C = J.deepClone(f), (T = c.imp).push.apply(T, N(B)), c.ext.ixdiag.sn = P, C.sn = P, P++, C.r = JSON.stringify(c), x.push({
                            method: 'GET',
                            url: n,
                            data: C
                        }), B = [], w = O, c.imp = [], S = z = 0, c.ext.ixdiag.msd = 0, c.ext.ixdiag.msi = 0);
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
                    buildRequests: function (e, r) {
                        for (var t, i, n, s, o, a, d, p, c, m, u, l, f, y, b = [], g = {}, h = {}, v = null, x = {}, I = R(R({}, { detectMissingSizes: !0 }), D.b.getConfig('ix')), O = 0; O < e.length; O++) {
                            (v = e[O]).mediaType !== T.d && !J.deepAccess(v, 'mediaTypes.video') || v.mediaType !== T.d && !F(v.mediaTypes.video.playerSize, v.params.size) || (h.hasOwnProperty(v.transactionId) || (h[v.transactionId] = {}), h[v.transactionId].hasOwnProperty('ixImps') || (h[v.transactionId].ixImps = []), h[v.transactionId].ixImps.push(function (e) {
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
                            }(v))), (v.mediaType === T.b || J.deepAccess(v, 'mediaTypes.banner') && F(J.deepAccess(v, 'mediaTypes.banner.sizes'), v.params.size) || !v.mediaType && !v.mediaTypes) && (m = void 0, (m = C(c = v)).banner = {}, m.banner.w = c.params.size[0], m.banner.h = c.params.size[1], m.banner.topframe = J.inIframe() ? 0 : 1, j(c, m, T.b), t = m, g.hasOwnProperty(v.transactionId) || (g[v.transactionId] = {}), g[v.transactionId].hasOwnProperty('ixImps') || (g[v.transactionId].ixImps = []), g[v.transactionId].ixImps.push(t), I.hasOwnProperty('detectMissingSizes') && I.detectMissingSizes && (n = x, s = t, p = d = a = o = void 0, p = (i = v).transactionId, n.hasOwnProperty(p) ? (o = [], n[p].hasOwnProperty('missingSizes') && (o = n[p].missingSizes), E(o, i.params.size), n[p].missingSizes = o) : J.deepAccess(i, 'mediaTypes.banner.sizes') && (E(a = J.deepClone(i.mediaTypes.banner.sizes), i.params.size), d = {
                                missingSizes: a,
                                impression: s
                            }, n[p] = d)));
                        }
                        for (var w in x)
                            if (x.hasOwnProperty(w)) {
                                var P = x[w].missingSizes;
                                g.hasOwnProperty(w) || (g[w] = {}), g[w].hasOwnProperty('missingImps') || (g[w].missingImps = [], g[w].missingCount = 0);
                                for (var S = x[w].impression, z = 0; z < P.length; z++) {
                                    var A = (u = v, l = S, f = P[z], y = void 0, (y = J.deepClone(l)).ext.sid = ''.concat(f[0], 'x').concat(f[1]), y.banner.w = f[0], y.banner.h = f[1], j(u, y, T.b), y);
                                    g[w].missingImps.push(A), g[w].missingCount++;
                                }
                            }
                        return 0 < Object.keys(g).length && b.push.apply(b, N(k(e, r, g, 7.2))), 0 < Object.keys(h).length && b.push.apply(b, N(k(e, r, h, 8.1))), b;
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
        }, [530]);
        pbjsYLHHChunk([183], {
            664: function (e, t, r) {
                e.exports = r(665);
            },
            665: function (e, t, r) {
                'use strict';
                Object.defineProperty(t, '__esModule', { value: !0 }), r.d(t, 'USER_ID_CODE_TO_QUERY_ARG', function () {
                    return f;
                }), r.d(t, 'spec', function () {
                    return o;
                });
                var c = r(3), n = r(1), d = r(0), u = r(2);
                function s(e, t) {
                    return function (e) {
                        if (Array.isArray(e))
                            return e;
                    }(e) || function (e, t) {
                        if ('undefined' == typeof Symbol || !(Symbol.iterator in Object(e)))
                            return;
                        var r = [], n = !0, i = !1, a = void 0;
                        try {
                            for (var s, o = e[Symbol.iterator](); !(n = (s = o.next()).done) && (r.push(s.value), !t || r.length !== t); n = !0);
                        } catch (e) {
                            i = !0, a = e;
                        } finally {
                            try {
                                n || null == o.return || o.return();
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
                    ], p = 'hb_pb', m = '3.0.3', l = 'USD', f = {
                        britepoolid: 'britepoolid',
                        criteoId: 'criteoid',
                        digitrustid: 'digitrustid',
                        id5id: 'id5id',
                        idl_env: 'lre',
                        lipb: 'lipbid',
                        netId: 'netid',
                        parrableId: 'parrableid',
                        pubcid: 'pubcid',
                        tdid: 'ttduuid'
                    }, o = {
                        code: 'openx',
                        gvlid: 69,
                        supportedMediaTypes: a,
                        isBidRequestValid: function (e) {
                            var t = e.params.delDomain || e.params.platform;
                            return d.deepAccess(e, 'mediaTypes.banner') && t ? !!e.params.unit || 0 < d.deepAccess(e, 'mediaTypes.banner.sizes.length') : !(!e.params.unit || !t);
                        },
                        buildRequests: function (e, n) {
                            if (0 === e.length)
                                return [];
                            var i = [], t = s(e.reduce(function (e, t) {
                                    var r;
                                    return r = t, d.deepAccess(r, 'mediaTypes.video') && !d.deepAccess(r, 'mediaTypes.banner') || r.mediaType === u.d ? e[0].push(t) : e[1].push(t), e;
                                }, [
                                    [],
                                    []
                                ]), 2), r = t[0], a = t[1];
                            return 0 < a.length && i.push(function (e, t) {
                                var n = [], i = !1, r = h(e, t), a = d._map(e, function (e) {
                                        return e.params.unit;
                                    });
                                r.aus = d._map(e, function (e) {
                                    return d.parseSizesInput(e.mediaTypes.banner.sizes).join(',');
                                }).join('|'), r.divIds = d._map(e, function (e) {
                                    return encodeURIComponent(e.adUnitCode);
                                }).join(','), a.some(function (e) {
                                    return e;
                                }) && (r.auid = a.join(','));
                                e.some(function (e) {
                                    return e.params.doNotTrack;
                                }) && (r.ns = 1);
                                !0 !== c.b.getConfig('coppa') && !e.some(function (e) {
                                    return e.params.coppa;
                                }) || (r.tfcd = 1);
                                e.forEach(function (t) {
                                    var e, r;
                                    t.params.customParams ? (e = d._map(Object.keys(t.params.customParams), function (e) {
                                        return function (e, t) {
                                            var r = t[e];
                                            d.isArray(r) && (r = r.join(','));
                                            return (e.toLowerCase() + '=' + r.toLowerCase()).replace('+', '.').replace('/', '_');
                                        }(e, t.params.customParams);
                                    }), r = window.btoa(e.join('&')), i = !0, n.push(r)) : n.push('');
                                }), i && (r.tps = n.join(','));
                                var s = [], o = !1;
                                e.forEach(function (e) {
                                    var t = function (e, t) {
                                        var r = {}, n = c.b.getConfig('currency.adServerCurrency') || l;
                                        'function' == typeof e.getFloor && (r = e.getFloor({
                                            currency: n,
                                            mediaType: t,
                                            size: '*'
                                        }));
                                        var i = r.floor || e.params.customFloor || 0;
                                        return Math.round(1000 * i);
                                    }(e, u.b);
                                    t ? (s.push(t), o = !0) : s.push(0);
                                }), o && (r.aumfs = s.join(','));
                                return {
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
                                        var r, n, i = h([e], t), a = d.deepAccess(e, 'params.video') || {}, s = d.deepAccess(e, 'mediaTypes.video.context'), o = d.deepAccess(e, 'mediaTypes.video.playerSize');
                                        d.isArray(e.sizes) && 2 === e.sizes.length && !d.isArray(e.sizes[0]) ? (r = parseInt(e.sizes[0], 10), n = parseInt(e.sizes[1], 10)) : d.isArray(e.sizes) && d.isArray(e.sizes[0]) && 2 === e.sizes[0].length ? (r = parseInt(e.sizes[0][0], 10), n = parseInt(e.sizes[0][1], 10)) : d.isArray(o) && 2 === o.length && (r = parseInt(o[0], 10), n = parseInt(o[1], 10));
                                        Object.keys(a).forEach(function (e) {
                                            'openrtb' === e ? (a[e].w = r || a[e].w, a[e].v = n || a[e].v, i[e] = JSON.stringify(a[e])) : e in i || 'url' === e || (i[e] = a[e]);
                                        }), i.auid = e.params.unit, i.vwd = r || a.vwd, i.vht = n || a.vht, 'outstream' === s && (i.vos = '101');
                                        a.mimes && (i.vmimes = a.mimes);
                                        e.params.test && (i.vtest = 1);
                                        return i;
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
                                    void 0 !== e && '' !== e.vastUrl && 0 < e.pub_rev && (i = d.parseUrl(e.vastUrl).search || {}, (a = {}).requestId = r.bidId, a.ttl = 300, a.netRevenue = !0, a.currency = e.currency, a.cpm = parseInt(e.pub_rev, 10) / 1000, a.width = parseInt(e.width, 10), a.height = parseInt(e.height, 10), a.creativeId = e.adid, a.vastUrl = e.vastUrl, a.mediaType = u.d, e.ph = i.ph, e.colo = i.colo, e.ts = i.ts, n.push(a));
                                }
                                return n;
                            } : function (e, t) {
                                for (var r = t.bids, n = (t.startTime, e.ads.ad), i = [], a = 0; a < n.length; a++) {
                                    var s, o = n[a], c = parseInt(o.idx, 10), d = {};
                                    d.requestId = r[c].bidId, o.pub_rev && (d.cpm = Number(o.pub_rev) / 1000, (s = o.creative[0]) && (d.width = s.width, d.height = s.height), d.creativeId = s.id, d.ad = o.html, o.deal_id && (d.dealId = o.deal_id), d.ttl = 300, d.netRevenue = !0, d.currency = o.currency, o.tbd && (d.tbd = o.tbd), d.ts = o.ts, d.meta = {}, o.brand_id && (d.meta.brandId = o.brand_id), o.adv_id && (d.meta.dspid = o.adv_id), i.push(d));
                                }
                                return i;
                            })(r, t.payload);
                        },
                        getUserSyncs: function (e, t, r, n) {
                            if (e.iframeEnabled || e.pixelEnabled)
                                return [{
                                        type: e.iframeEnabled ? 'iframe' : 'image',
                                        url: d.deepAccess(t, '0.body.ads.pixels') || d.deepAccess(t, '0.body.pixels') || function (e, t) {
                                            var r = [];
                                            e && (r.push('gdpr=' + (e.gdprApplies ? 1 : 0)), r.push('gdpr_consent=' + encodeURIComponent(e.consentString || '')));
                                            t && r.push('us_privacy=' + encodeURIComponent(t));
                                            return ''.concat('https://u.openx.net/w/1.0/pd').concat(0 < r.length ? '?' + r.join('&') : '');
                                        }(r, n)
                                    }];
                        },
                        transformBidParams: function (e) {
                            return d.convertTypes({
                                unit: 'string',
                                customFloor: 'number'
                            }, e);
                        }
                    };
                function h(e, t) {
                    var r, n, i, a, s = d.inIframe(), o = {
                            ju: c.b.getConfig('pageUrl') || t.refererInfo.referer,
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
                            dddid: d._map(e, function (e) {
                                return e.transactionId;
                            }).join(','),
                            nocache: new Date().getTime()
                        };
                    return e[0].params.platform && (o.ph = e[0].params.platform), t.gdprConsent && (void 0 !== (r = t.gdprConsent).consentString && (o.gdpr_consent = r.consentString), void 0 !== r.gdprApplies && (o.gdpr = r.gdprApplies ? 1 : 0), 'iab' === c.b.getConfig('consentManagement.cmpApi') && (o.x_gdpr_f = 1)), t && t.uspConsent && (o.us_privacy = t.uspConsent), d.deepAccess(e[0], 'crumbs.pubcid') && d.deepSetValue(e[0], 'userId.pubcid', d.deepAccess(e[0], 'crumbs.pubcid')), n = o, i = e[0].userId, d._each(i, function (e, t) {
                        var r = f[t];
                        if (f.hasOwnProperty(t))
                            switch (t) {
                            case 'digitrustid':
                                n[r] = d.deepAccess(e, 'data.id');
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
                    }), o = n, e[0].schain && (o.schain = (a = e[0].schain, ''.concat(a.ver, ',').concat(a.complete, '!').concat(function (e) {
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
                    }(a.nodes)))), o;
                }
                Object(n.registerBidder)(o);
            }
        }, [664]);
        pbjsYLHHChunk([181], {
            670: function (t, e, r) {
                t.exports = r(671);
            },
            671: function (t, e, r) {
                'use strict';
                Object.defineProperty(e, '__esModule', { value: !0 }), r.d(e, 'spec', function () {
                    return s;
                });
                var n = r(1), o = r(7);
                function a(t) {
                    return (a = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t;
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                    })(t);
                }
                var i = Object(o.b)(), s = {
                        code: 'orbidder',
                        hostname: 'https://orbidder.otto.de',
                        getHostname: function () {
                            var t = this.hostname;
                            try {
                                t = i.getDataFromLocalStorage('ov_orbidder_host') || t;
                            } catch (t) {
                            }
                            return t;
                        },
                        isBidRequestValid: function (t) {
                            return !(!(t.sizes && t.bidId && t.params && t.params.accountId && 'string' == typeof t.params.accountId && t.params.placementId && 'string' == typeof t.params.placementId) || void 0 !== t.params.bidfloor && 'number' != typeof t.params.bidfloor || void 0 !== t.params.profile && 'object' !== a(t.params.profile));
                        },
                        buildRequests: function (t, n) {
                            var o = this.getHostname();
                            return t.map(function (t) {
                                var e = '';
                                n && n.refererInfo && (e = n.refererInfo.referer || '');
                                var r = {
                                    url: ''.concat(o, '/bid'),
                                    method: 'POST',
                                    options: { withCredentials: !0 },
                                    data: {
                                        v: pbjsYLHH.version,
                                        pageUrl: e,
                                        bidId: t.bidId,
                                        auctionId: t.auctionId,
                                        transactionId: t.transactionId,
                                        adUnitCode: t.adUnitCode,
                                        bidRequestCount: t.bidRequestCount,
                                        sizes: t.sizes,
                                        params: t.params
                                    }
                                };
                                return n && n.gdprConsent && (r.data.gdprConsent = {
                                    consentString: n.gdprConsent.consentString,
                                    consentRequired: !!n.gdprConsent.gdprApplies
                                }), r;
                            });
                        },
                        interpretResponse: function (t) {
                            var a = [];
                            return (t = t.body) && 0 < t.length && t.forEach(function (t) {
                                for (var e = {}, r = 0, n = [
                                            'requestId',
                                            'cpm',
                                            'width',
                                            'height',
                                            'ad',
                                            'ttl',
                                            'creativeId',
                                            'netRevenue',
                                            'currency'
                                        ]; r < n.length; r++) {
                                    var o = n[r];
                                    if (!t.hasOwnProperty(o))
                                        return [];
                                    e[o] = t[o];
                                }
                                a.push(e);
                            }), a;
                        }
                    };
                Object(n.registerBidder)(s);
            }
        }, [670]);
        pbjsYLHHChunk([163], {
            713: function (e, r, a) {
                e.exports = a(714);
            },
            714: function (e, r, a) {
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
                            return E.site.publisher.id = v.pubId.trim(), k = v.pubId.trim(), E.ext.wrapper = {}, E.ext.wrapper.profile = parseInt(v.profId) || x, E.ext.wrapper.version = parseInt(v.verId) || x, E.ext.wrapper.wiid = v.wiid || r.auctionId, E.ext.wrapper.wv = 'prebid_prebid_4.32.0', E.ext.wrapper.transactionId = v.transactionId, E.ext.wrapper.wp = 'pbjs', E.user.gender = v.gender ? v.gender.trim() : x, E.user.geo = {}, E.user.geo.lat = C('lat', v.lat), E.user.geo.lon = C('lon', v.lon), E.user.yob = C('yob', v.yob), E.device.geo = E.user.geo, E.site.page = v.kadpageurl.trim() || E.site.page.trim(), E.site.domain = (n = E.site.page, (o = document.createElement('a')).href = n, o.hostname), 'object' === D(P.b.getConfig('content')) && (E.site.content = P.b.getConfig('content')), 'object' === D(P.b.getConfig('device')) && (E.device = R(E.device, P.b.getConfig('device'))), T.deepSetValue(E, 'source.tid', v.transactionId), -1 !== window.location.href.indexOf('pubmaticTest=true') && (E.test = 1), e[0].schain && T.deepSetValue(E, 'source.ext.schain', e[0].schain), r && r.gdprConsent && (T.deepSetValue(E, 'user.ext.consent', r.gdprConsent.consentString), T.deepSetValue(E, 'regs.ext.gdpr', r.gdprConsent.gdprApplies ? 1 : 0)), r && r.uspConsent && T.deepSetValue(E, 'regs.ext.us_privacy', r.uspConsent), !0 === P.b.getConfig('coppa') && T.deepSetValue(E, 'regs.coppa', 1), d = E, c = e, m = '', 0 < (p = w).length && (c[0].params.hasOwnProperty('dctr') ? (m = c[0].params.dctr, T.isStr(m) && 0 < m.length ? (u = m.split('|'), m = '', u.forEach(function (e) {
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
        }, [713]);
        pbjsYLHHChunk([114], {
            849: function (t, e, r) {
                t.exports = r(850);
            },
            850: function (t, e, r) {
                'use strict';
                Object.defineProperty(e, '__esModule', { value: !0 }), r.d(e, 'spec', function () {
                    return f;
                });
                var n = r(1), i = r(4), a = r(2), P = r(0);
                function o(e, t) {
                    var r, n = Object.keys(e);
                    return Object.getOwnPropertySymbols && (r = Object.getOwnPropertySymbols(e), t && (r = r.filter(function (t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable;
                    })), n.push.apply(n, r)), n;
                }
                function T(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = null != arguments[t] ? arguments[t] : {};
                        t % 2 ? o(Object(r), !0).forEach(function (t) {
                            D(e, t, r[t]);
                        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : o(Object(r)).forEach(function (t) {
                            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t));
                        });
                    }
                    return e;
                }
                function D(t, e, r) {
                    return e in t ? Object.defineProperty(t, e, {
                        value: r,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : t[e] = r, t;
                }
                function R() {
                    return (R = Object.assign || function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = arguments[e];
                            for (var n in r)
                                Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                function c(t) {
                    return (c = 'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator ? function (t) {
                        return typeof t;
                    } : function (t) {
                        return t && 'function' == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? 'symbol' : typeof t;
                    })(t);
                }
                var u = 'stroeerCore', s = new h('c2xzRWh5NXhpZmxndTRxYWZjY2NqZGNhTW1uZGZya3Y=', 'eWRpdkFoa2tub3p5b2dscGttamIySGhkZ21jcmg0Znk='), d = new h('1AE180CBC19A8CFEB7E1FCC000A10F5D892A887A2D9=', '0379698055BD41FD05AC543A3AAAD6589BC6E1B3626=');
                function B() {
                    var t = P.getWindowSelf();
                    try {
                        for (; !t.stroeerCore && P.getWindowTop() !== t && t.parent.location.href.length;)
                            t = t.parent;
                    } catch (t) {
                    }
                    return t.stroeerCore = t.stroeerCore || {}, t.stroeerCore;
                }
                function N() {
                    var t = P.getWindowSelf();
                    try {
                        for (; P.getWindowTop().top !== t && t.parent.location.href.length;)
                            t = t.parent;
                    } catch (t) {
                    }
                    return t;
                }
                function x(t) {
                    return !t.mediaTypes && !t.mediaType || t.mediaTypes && t.mediaTypes.banner || t.mediaType === a.b;
                }
                function U(t) {
                    var e = t.mediaTypes;
                    return !x(t) && e && 1 === Object.keys(e).length && e.video && 'instream' === e.video.context;
                }
                var p, f = {
                        code: u,
                        supportedMediaTypes: [
                            a.b,
                            a.d
                        ],
                        gvlid: 136,
                        isBidRequestValid: ((p = []).push(l(function (t) {
                            return x(e = t) || U(e);
                            var e;
                        }, function (t) {
                            return 'bid request '.concat(t.bidId, ' does not have a valid media type');
                        })), p.push(l(function (t) {
                            return 'object' === c(t.params);
                        }, function (t) {
                            return 'bid request '.concat(t.bidId, ' does not have custom params');
                        })), p.push(l(function (t) {
                            return P.isStr(t.params.sid);
                        }, function (t) {
                            return 'bid request '.concat(t.bidId, ' does not have a sid string field');
                        })), p.push(l(function (t) {
                            return void 0 === t.params.ssat || -1 < [
                                1,
                                2
                            ].indexOf(t.params.ssat);
                        }, function (t) {
                            return 'bid request '.concat(t.bidId, ' does not have a valid ssat value (must be 1 or 2)');
                        })), function (e) {
                            return p.every(function (t) {
                                return t(e);
                            });
                        }),
                        buildRequests: function (t, e) {
                            var r, n, o = 0 < arguments.length && void 0 !== t ? t : [], i = 1 < arguments.length ? e : void 0, a = i.bids[0], c = P.getWindowSelf();
                            r = a, (n = B()).anySid = n.anySid || r.params.sid, n.userConnectJsUrl = n.userConnectJsUrl || r.params.connectjsurl;
                            var u, s, d, p, f = (u = o, s = {
                                    'params.ssat': function (t) {
                                        return 1 !== t;
                                    },
                                    'mediaTypes.video': function (t) {
                                        return null != t;
                                    }
                                }, d = Object.keys(s), p = [], u.forEach(function (r) {
                                    var e, t = W(p, function (e) {
                                            return d.every(function (t) {
                                                return e.key[t] === s[t](P.deepAccess(r, t));
                                            });
                                        });
                                    t || (e = {}, d.forEach(function (t) {
                                        return e[t] = s[t](P.deepAccess(r, t));
                                    }), t = {
                                        key: e,
                                        bidRequests: []
                                    }, p.push(t)), t.bidRequests.push(r);
                                }), p.map(function (t) {
                                    return t.bidRequests;
                                })), l = {
                                    id: i.auctionId,
                                    ref: function () {
                                        try {
                                            return P.getWindowTop().document.referrer;
                                        } catch (t) {
                                            return P.getWindowSelf().referrer;
                                        }
                                    }(),
                                    ssl: 'https:' === P.getWindowSelf().location.protocol,
                                    mpa: N() === P.getWindowTop(),
                                    timeout: i.timeout - (Date.now() - i.auctionStart),
                                    ab: c.yieldlove_ab,
                                    kvg: function () {
                                        try {
                                            return I(c.SDG.Publisher.getConfig().getFilteredKeyValues());
                                        } catch (t) {
                                            return;
                                        }
                                    }()
                                }, g = a.userId;
                            P.isEmpty(g) || (l.user = { euids: g });
                            var h = i.gdprConsent;
                            function y(t) {
                                var e = W(t, function (t) {
                                        return t.params.ssat;
                                    }), r = W(t, function (t) {
                                        return t.params.yl2;
                                    }), n = R({
                                        ssat: e ? e.params.ssat : void 0,
                                        yl2: r ? r.params.yl2 : '1' === function (t) {
                                            var e;
                                            try {
                                                e = localStorage[t];
                                            } catch (t) {
                                            }
                                            return e;
                                        }('sdgYieldtest')
                                    }, l);
                                return n.bids = t.map(function (t) {
                                    return {
                                        bid: t.bidId,
                                        sid: t.params.sid,
                                        viz: function (t) {
                                            var e, r, n;
                                            try {
                                                return function t(e, r) {
                                                    var n = e.getBoundingClientRect(), o = 0 <= n.top + n.height && n.top <= r.innerHeight;
                                                    return r !== r.parent ? o && t(r.frameElement, r.parent) : o;
                                                }((e = t, (n = P.getWindowSelf()).SDG && null !== (r = n.SDG.getCN().getSlotByPosition(e)) ? r.getContainer() : n.document.getElementById(e)), P.getWindowSelf());
                                            } catch (t) {
                                            }
                                        }(t.adUnitCode),
                                        vid: function (t) {
                                            if (U(t)) {
                                                var e = t.mediaTypes.video;
                                                return {
                                                    ctx: e.context,
                                                    siz: e.playerSize,
                                                    mim: e.mimes
                                                };
                                            }
                                            return;
                                        }(t),
                                        ban: x(e = t) ? {
                                            siz: function (t) {
                                                return P.deepAccess(t, 'mediaTypes.banner.sizes') || t.sizes || [];
                                            }(e)
                                        } : void 0,
                                        ctx: function (t) {
                                            if (c.SDG)
                                                return {
                                                    position: t.adUnitCode,
                                                    adUnits: function (t) {
                                                        try {
                                                            return c.SDG.getCN().getSlotByPosition(t).getAdUnits();
                                                        } catch (t) {
                                                            return;
                                                        }
                                                    }(t.adUnitCode),
                                                    zone: function (t) {
                                                        try {
                                                            return c.SDG.getCN().getSlotByPosition(t).getZone();
                                                        } catch (t) {
                                                            return;
                                                        }
                                                    }(t.adUnitCode),
                                                    pageType: function (t) {
                                                        try {
                                                            return c.SDG.getCN().getSlotByPosition(t).getPageType();
                                                        } catch (t) {
                                                            return;
                                                        }
                                                    }(t.adUnitCode)
                                                };
                                        }(t),
                                        kvl: function (t) {
                                            try {
                                                return I(c.SDG.getCN().getSlotByPosition(t).getFilteredKeyValues());
                                            } catch (t) {
                                                return;
                                            }
                                        }(t.adUnitCode)
                                    };
                                    var e;
                                }), n;
                            }
                            h && null != h.consentString && null != h.gdprApplies && (l.gdpr = {
                                consent: h.consentString,
                                applies: h.gdprApplies
                            });
                            var b, v, m, S, C, O, A, j, w = (b = a.params, v = b.host, m = void 0 === v ? 'hb.adscale.de' : v, S = b.port, C = void 0 === S ? '' : S, O = b.securePort, A = b.path, j = void 0 === A ? '/dsh' : A, O && (C = O), P.buildUrl({
                                    protocol: 'https',
                                    hostname: m,
                                    port: C,
                                    pathname: j
                                })), E = [];
                            return f.forEach(function (t) {
                                0 < t.length && E.push({
                                    method: 'POST',
                                    url: w,
                                    data: y(t)
                                });
                            }), E;
                            function I(r) {
                                return Object.keys(r).filter(function (t) {
                                    return e = r[t], Array.isArray(e) && e.every(function (t) {
                                        return 'string' == typeof t || 'number' == typeof t;
                                    });
                                    var e;
                                }).reduce(function (t, e) {
                                    return T(T({}, t), {}, D({}, e, r[e]));
                                }, {});
                            }
                        },
                        interpretResponse: function (t) {
                            var o = [];
                            return t.body && 'object' === c(t.body) && (t.body.tep && Object(i.a)(t.body.tep, function () {
                            }), t.body.bids.forEach(function (t) {
                                var e = t.cpm || 0, r = null != t.vastXml ? a.d : a.b, n = {
                                        requestId: t.bidId,
                                        cpm: e,
                                        width: t.width || 0,
                                        height: t.height || 0,
                                        ttl: 300,
                                        currency: 'EUR',
                                        netRevenue: !0,
                                        creativeId: '',
                                        mediaType: r,
                                        cpm2: t.cpm2 || 0,
                                        floor: t.floor || e,
                                        maxprice: t.maxprice || e,
                                        exchangeRate: t.exchangeRate,
                                        nurl: t.nurl,
                                        originalAd: t.ad,
                                        tracking: t.tracking,
                                        generateAd: function (t) {
                                            var e = t.auctionPrice, r = t.firstBid, n = t.secondBid, o = t.thirdBid, i = e;
                                            this.exchangeRate && 1 !== this.exchangeRate && (e = (parseFloat(e) * this.exchangeRate).toFixed(4)), e = g(e), i = g(i);
                                            var a = null == r ? '' : d.encrypt(this.adId, g(r).toString()), c = null == n ? '' : d.encrypt(this.adId, g(n).toString()), u = null == o ? '' : d.encrypt(this.adId, g(o).toString());
                                            return this.originalAd.replace(/\${AUCTION_PRICE:ENC}/g, s.encrypt(this.adId, e.toString())).replace(/\${SSP_AUCTION_PRICE:ENC}/g, d.encrypt(this.adId, i.toString())).replace(/\${FIRST_BID:ENC}/g, a).replace(/\${SECOND_BID:ENC}/g, c).replace(/\${THIRD_BID:ENC}/g, u).replace(/\${AUCTION_PRICE}/g, e);
                                        }
                                    };
                                r === a.d ? n.vastXml = t.vastXml : n.ad = t.ad, t.bidPriceOptimisation ? o.push(R(n, t.bidPriceOptimisation)) : o.push(n);
                            })), o;
                        },
                        getUserSyncs: function (t, e) {
                            var r, n, o, i;
                            return 0 < e.length && (r = B(), n = r.anySid, o = r.userConnectJsUrl || 'https://js.adscale.de/userconnect.js', i = N().document.createElement('script'), n && i.setAttribute('data-container-config', JSON.stringify({ slotId: n })), i.src = o, P.insertElement(i)), [];
                        }
                    };
                function l(e, r) {
                    return function (t) {
                        return !!e(t) || (P.logError('invalid bid in '.concat(u, ': ').concat(r(t)), 'WARN'), !1);
                    };
                }
                function g(t) {
                    var e = String(t);
                    if (e.length <= 8)
                        return t;
                    function r() {
                        throw new Error('unable to truncate '.concat(t, ' to fit into 8 bytes'));
                    }
                    var n = e.split('.');
                    if (2 === n.length) {
                        var o = n[0].trim(), i = n[1].trim(), a = 8 - o.length;
                        2 < a ? i = i.substring(0, a - 1) : 2 == a && '0' === i.charAt(1) ? i = i.charAt(0) : 0 <= a && a < 2 && '0' === i.charAt(0) && '0' === i.charAt(1) ? i = '' : r();
                        var c = o + (0 < i.length ? '.' + i : '');
                        return P.logWarn('truncated price '.concat(t, ' to ').concat(c, ' to fit into 8 bytes')), c;
                    }
                    r();
                }
                function h(t, e) {
                    this.encKey = atob(t), this.intKey = atob(e);
                }
                function y(t, e, r) {
                    for (var n = e - t.length, o = 0; o < n; o++)
                        t += r;
                    return t;
                }
                Object(n.registerBidder)(f), h.prototype.encrypt = function (t, e) {
                    var r = y(t, 16, '0').substring(0, 16);
                    if (8 < e.length)
                        throw new Error('data to encrypt is too long');
                    for (var n, o = v(this.encKey, r), i = '', a = 0; a < 8; a++) {
                        var c = a >= e.length ? '\0' : e.charCodeAt(a);
                        i += String.fromCharCode(255 & (c ^ (128 <= (n = o.charCodeAt(a)) ? n - 256 : n)));
                    }
                    e = y(e, 8, '\0'), e += r;
                    var u = v(this.intKey, e).substring(0, 4);
                    return btoa(r + i + u).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
                };
                var b = 8;
                function v(t, e) {
                    return function (t) {
                        for (var e = '', r = (1 << b) - 1, n = 0; n < 32 * t.length; n += b)
                            e += String.fromCharCode(t[n >> 5] >>> 32 - b - n % 32 & r);
                        return e;
                    }(function (t, e) {
                        var r = O(t);
                        16 < r.length && (r = m(r, t.length * b));
                        for (var n = Array(16), o = Array(16), i = 0; i < 16; i++)
                            n[i] = 909522486 ^ r[i], o[i] = 1549556828 ^ r[i];
                        var a = m(n.concat(O(e)), 512 + e.length * b);
                        return m(o.concat(a), 672);
                    }(t, e));
                }
                function m(t, e) {
                    t[e >> 5] |= 128 << 24 - e % 32, t[15 + (e + 64 >> 9 << 4)] = e;
                    for (var r, n = Array(80), o = 1732584193, i = -271733879, a = -1732584194, c = 271733878, u = -1009589776, s = 0; s < t.length; s += 16) {
                        for (var d = o, p = i, f = a, l = c, g = u, h = 0; h < 80; h++) {
                            n[h] = h < 16 ? t[s + h] : C(n[h - 3] ^ n[h - 8] ^ n[h - 14] ^ n[h - 16], 1);
                            var y = S(S(C(o, 5), function (t, e, r, n) {
                                    if (t < 20)
                                        return e & r | ~e & n;
                                    if (t < 40)
                                        return e ^ r ^ n;
                                    if (t < 60)
                                        return e & r | e & n | r & n;
                                    return e ^ r ^ n;
                                }(h, i, a, c)), S(S(u, n[h]), (r = h) < 20 ? 1518500249 : r < 40 ? 1859775393 : r < 60 ? -1894007588 : -899497514)), u = c, c = a, a = C(i, 30), i = o, o = y;
                        }
                        o = S(o, d), i = S(i, p), a = S(a, f), c = S(c, l), u = S(u, g);
                    }
                    return [
                        o,
                        i,
                        a,
                        c,
                        u
                    ];
                }
                function S(t, e) {
                    var r = (65535 & t) + (65535 & e);
                    return (t >> 16) + (e >> 16) + (r >> 16) << 16 | 65535 & r;
                }
                function C(t, e) {
                    return t << e | t >>> 32 - e;
                }
                function O(t) {
                    for (var e = [], r = (1 << b) - 1, n = 0; n < t.length * b; n += b)
                        e[n >> 5] |= (t.charCodeAt(n / b) & r) << 32 - b - n % 32;
                    return e;
                }
                function W(t, e) {
                    var r = Object(t), n = r.length >>> 0;
                    if ('function' != typeof e)
                        throw TypeError('predicate must be a function');
                    for (var o = e, i = 0; i < n;) {
                        var a = r[i];
                        if (e.call(o, a, i, r))
                            return a;
                        i++;
                    }
                }
            }
        }, [849]);
        pbjsYLHHChunk([291], {
            411: function (e, r, t) {
                e.exports = t(412);
            },
            412: function (e, r, t) {
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
        }, [411]);
        pbjsYLHHChunk([1], {
            390: function (t, e, r) {
                t.exports = r(391);
            },
            391: function (module, __webpack_exports__, __webpack_require__) {
                'use strict';
                Object.defineProperty(__webpack_exports__, '__esModule', { value: !0 }), __webpack_require__.d(__webpack_exports__, 'ADAPTER_VERSION', function () {
                    return ADAPTER_VERSION;
                }), __webpack_require__.d(__webpack_exports__, 'PROFILE_ID_PUBLISHERTAG', function () {
                    return PROFILE_ID_PUBLISHERTAG;
                }), __webpack_require__.d(__webpack_exports__, 'spec', function () {
                    return spec;
                }), __webpack_exports__.tryGetCriteoFastBid = tryGetCriteoFastBid;
                var __WEBPACK_IMPORTED_MODULE_0__src_adloader_js__ = __webpack_require__(40), __WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__ = __webpack_require__(1), __WEBPACK_IMPORTED_MODULE_2__src_config_js__ = __webpack_require__(3), __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__ = __webpack_require__(2), __WEBPACK_IMPORTED_MODULE_4__src_utils_js__ = __webpack_require__(0), __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__ = __webpack_require__(10), __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js__), __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__ = __webpack_require__(392), __WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__), __WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__ = __webpack_require__(7);
                function _extends() {
                    return (_extends = Object.assign || function (t) {
                        for (var e = 1; e < arguments.length; e++) {
                            var r = arguments[e];
                            for (var i in r)
                                Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
                        }
                        return t;
                    }).apply(this, arguments);
                }
                var GVLID = 91, ADAPTER_VERSION = 33, BIDDER_CODE = 'criteo', CDB_ENDPOINT = 'https://bidder.criteo.com/cdb', PROFILE_ID_INLINE = 207, PROFILE_ID_PUBLISHERTAG = 185, storage = Object(__WEBPACK_IMPORTED_MODULE_7__src_storageManager_js__.b)(GVLID), LOG_PREFIX = 'Criteo: ', PUBLISHER_TAG_URL = 'https://static.criteo.net/js/ld/publishertag.prebid.js', FAST_BID_PUBKEY_E = 65537, FAST_BID_PUBKEY_N = 'ztQYwCE5BU7T9CDM5he6rKoabstXRmkzx54zFPZkWbK530dwtLBDeaWBMxHBUT55CYyboR/EZ4efghPi3CoNGfGWezpjko9P6p2EwGArtHEeS4slhu/SpSIFMjG6fdrpRoNuIAMhq1Z+Pr/+HOd1pThFKeGFr2/NhtAg+TXAzaU=', spec = {
                        code: BIDDER_CODE,
                        gvlid: GVLID,
                        supportedMediaTypes: [
                            __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.b,
                            __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.d,
                            __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c
                        ],
                        isBidRequestValid: function (t) {
                            return !(!t || !t.params || !t.params.zoneId && !t.params.networkId) && !(hasVideoMediaType(t) && !hasValidVideoMediaType(t));
                        },
                        buildRequests: function (t, e) {
                            var r, i, s, a, o = __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getLegacyFpd(__WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig('ortb2')) || {};
                            if (_extends(e, {
                                    publisherExt: o.context,
                                    userExt: o.user,
                                    ceh: __WEBPACK_IMPORTED_MODULE_2__src_config_js__.b.getConfig('criteo.ceh')
                                }), publisherTagAvailable() || (window.Criteo = window.Criteo || {}, window.Criteo.usePrebidEvents = !1, tryGetCriteoFastBid(), setTimeout(function () {
                                    Object(__WEBPACK_IMPORTED_MODULE_0__src_adloader_js__.a)(PUBLISHER_TAG_URL, BIDDER_CODE);
                                }, e.timeout)), s = publisherTagAvailable() ? (i = (r = new Criteo.PubTag.Adapters.Prebid(PROFILE_ID_PUBLISHERTAG, ADAPTER_VERSION, t, e, '4.32.0')).buildCdbUrl(), r.buildCdbRequest()) : (i = buildCdbUrl(a = buildContext(t, e)), buildCdbRequest(a, t, e)))
                                return {
                                    method: 'POST',
                                    url: i,
                                    data: s,
                                    bidRequests: t
                                };
                        },
                        interpretResponse: function (t, s) {
                            var e = t.body || t;
                            if (publisherTagAvailable()) {
                                var r = Criteo.PubTag.Adapters.Prebid.GetAdapter(s);
                                if (r)
                                    return r.interpretResponse(e, s);
                            }
                            var a = [];
                            return e && e.slots && __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.isArray(e.slots) && e.slots.forEach(function (e) {
                                var t = __WEBPACK_IMPORTED_MODULE_5_core_js_pure_features_array_find_js___default()(s.bidRequests, function (t) {
                                        return t.adUnitCode === e.impid && (!t.params.zoneId || parseInt(t.params.zoneId) === e.zoneid);
                                    }), r = t.bidId, i = {
                                        requestId: r,
                                        adId: e.bidId || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.getUniqueIdentifierStr(),
                                        cpm: e.cpm,
                                        currency: e.currency,
                                        netRevenue: !0,
                                        ttl: e.ttl || 60,
                                        creativeId: r,
                                        width: e.width,
                                        height: e.height,
                                        dealId: e.dealCode
                                    };
                                e.native ? t.params.nativeCallback ? i.ad = createNativeAd(r, e.native, t.params.nativeCallback) : (i.native = createPrebidNativeAd(e.native), i.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c) : e.video ? (i.vastUrl = e.displayurl, i.mediaType = __WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.d) : i.ad = e.creative, a.push(i);
                            }), a;
                        },
                        onTimeout: function (t) {
                            var e;
                            publisherTagAvailable() && Array.isArray(t) && (e = [], t.forEach(function (t) {
                                -1 === e.indexOf(t.auctionId) && (e.push(t.auctionId), Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidTimeout());
                            }));
                        },
                        onBidWon: function (t) {
                            publisherTagAvailable() && t && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleBidWon(t);
                        },
                        onSetTargeting: function (t) {
                            publisherTagAvailable() && Criteo.PubTag.Adapters.Prebid.GetAdapter(t.auctionId).handleSetTargeting(t);
                        }
                    };
                function publisherTagAvailable() {
                    return 'undefined' != typeof Criteo && Criteo.PubTag && Criteo.PubTag.Adapters && Criteo.PubTag.Adapters.Prebid;
                }
                function buildContext(t, e) {
                    var r = '';
                    e && e.refererInfo && (r = e.refererInfo.referer);
                    var i = __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.parseUrl(r).search, s = {
                            url: r,
                            debug: '1' === i.pbt_debug,
                            noLog: '1' === i.pbt_nolog,
                            amp: !1
                        };
                    return t.forEach(function (t) {
                        'amp' === t.params.integrationMode && (s.amp = !0);
                    }), s;
                }
                function buildCdbUrl(t) {
                    var e = CDB_ENDPOINT;
                    return e += '?profileId=' + PROFILE_ID_INLINE, e += '&av=' + String(ADAPTER_VERSION), e += '&wv=' + encodeURIComponent('4.32.0'), e += '&cb=' + String(Math.floor(99999999999 * Math.random())), t.amp && (e += '&im=1'), t.debug && (e += '&debug=1'), t.noLog && (e += '&nolog=1'), e;
                }
                function checkNativeSendId(t) {
                    return !t.nativeParams || !(t.nativeParams.image && (!0 !== t.nativeParams.image.sendId || !0 === t.nativeParams.image.sendTargetingKeys) || t.nativeParams.icon && (!0 !== t.nativeParams.icon.sendId || !0 === t.nativeParams.icon.sendTargetingKeys) || t.nativeParams.clickUrl && (!0 !== t.nativeParams.clickUrl.sendId || !0 === t.nativeParams.clickUrl.sendTargetingKeys) || t.nativeParams.displayUrl && (!0 !== t.nativeParams.displayUrl.sendId || !0 === t.nativeParams.displayUrl.sendTargetingKeys) || t.nativeParams.privacyLink && (!0 !== t.nativeParams.privacyLink.sendId || !0 === t.nativeParams.privacyLink.sendTargetingKeys) || t.nativeParams.privacyIcon && (!0 !== t.nativeParams.privacyIcon.sendId || !0 === t.nativeParams.privacyIcon.sendTargetingKeys));
                }
                function buildCdbRequest(t, e, r) {
                    var i, s = {
                            publisher: {
                                url: t.url,
                                ext: r.publisherExt
                            },
                            slots: e.map(function (t) {
                                i = t.params.networkId || i;
                                var e, r = {
                                        impid: t.adUnitCode,
                                        transactionid: t.transactionId,
                                        auctionId: t.auctionId
                                    };
                                return t.params.zoneId && (r.zoneid = t.params.zoneId), __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, 'ortb2Imp.ext') && (r.ext = t.ortb2Imp.ext), t.params.ext && (r.ext = _extends({}, r.ext, t.params.ext)), t.params.publisherSubId && (r.publishersubid = t.params.publisherSubId), t.params.nativeCallback || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, 'mediaTypes.'.concat(__WEBPACK_IMPORTED_MODULE_3__src_mediaTypes_js__.c)) ? (r.native = !0, checkNativeSendId(t) || __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn(LOG_PREFIX + 'all native assets containing URL should be sent as placeholders with sendId(icon, image, clickUrl, displayUrl, privacyLink, privacyIcon)'), r.sizes = parseSizes(retrieveBannerSizes(t), parseNativeSize)) : r.sizes = parseSizes(retrieveBannerSizes(t), parseSize), hasVideoMediaType(t) && ((e = {
                                    playersizes: parseSizes(__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, 'mediaTypes.video.playerSize'), parseSize),
                                    mimes: t.mediaTypes.video.mimes,
                                    protocols: t.mediaTypes.video.protocols,
                                    maxduration: t.mediaTypes.video.maxduration,
                                    api: t.mediaTypes.video.api
                                }).skip = t.params.video.skip, e.placement = t.params.video.placement, e.minduration = t.params.video.minduration, e.playbackmethod = t.params.video.playbackmethod, e.startdelay = t.params.video.startdelay, r.video = e), r;
                            })
                        };
                    return i && (s.publisher.networkid = i), s.user = { ext: r.userExt }, r && r.ceh && (s.user.ceh = r.ceh), r && r.gdprConsent && (s.gdprConsent = {}, void 0 !== r.gdprConsent.gdprApplies && (s.gdprConsent.gdprApplies = !!r.gdprConsent.gdprApplies), s.gdprConsent.version = r.gdprConsent.apiVersion, void 0 !== r.gdprConsent.consentString && (s.gdprConsent.consentData = r.gdprConsent.consentString)), r && r.uspConsent && (s.user.uspIab = r.uspConsent), s;
                }
                function retrieveBannerSizes(t) {
                    return __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, 'mediaTypes.banner.sizes') || t.sizes;
                }
                function parseSizes(t, e) {
                    return Array.isArray(t[0]) ? t.map(function (t) {
                        return e(t);
                    }) : [e(t)];
                }
                function parseSize(t) {
                    return t[0] + 'x' + t[1];
                }
                function parseNativeSize(t) {
                    return void 0 === t[0] && void 0 === t[1] ? '2x2' : t[0] + 'x' + t[1];
                }
                function hasVideoMediaType(t) {
                    return void 0 !== __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, 'params.video') && void 0 !== __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(t, 'mediaTypes.video');
                }
                function hasValidVideoMediaType(e) {
                    var r = !0;
                    [
                        'mimes',
                        'playerSize',
                        'maxduration',
                        'protocols',
                        'api'
                    ].forEach(function (t) {
                        void 0 === __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(e, 'mediaTypes.video.' + t) && (r = !1, __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logError('Criteo Bid Adapter: mediaTypes.video.' + t + ' is required'));
                    });
                    if ([
                            'skip',
                            'placement',
                            'playbackmethod'
                        ].forEach(function (t) {
                            void 0 === __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.deepAccess(e, 'params.video.' + t) && (r = !1, __WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logError('Criteo Bid Adapter: params.video.' + t + ' is required'));
                        }), r) {
                        if ('instream' == e.mediaTypes.video.context && 1 === e.params.video.placement)
                            return 1;
                        if ('outstream' == e.mediaTypes.video.context && 1 !== e.params.video.placement)
                            return 1;
                    }
                }
                function createPrebidNativeAd(t) {
                    return {
                        sendTargetingKeys: !1,
                        title: t.products[0].title,
                        body: t.products[0].description,
                        sponsoredBy: t.advertiser.description,
                        icon: t.advertiser.logo,
                        image: t.products[0].image,
                        clickUrl: t.products[0].click_url,
                        privacyLink: t.privacy.optout_click_url,
                        privacyIcon: t.privacy.optout_image_url,
                        cta: t.products[0].call_to_action,
                        price: t.products[0].price,
                        impressionTrackers: t.impression_pixels.map(function (t) {
                            return t.url;
                        })
                    };
                }
                function createNativeAd(t, e, r) {
                    var i = 'criteo_prebid_native_slots';
                    return window[i] = window[i] || {}, window[i][t] = {
                        callback: r,
                        payload: e
                    }, '\n<script type="text/javascript">\nfor (var i = 0; i < 10; ++i) {\n var slots = window.parent.'.concat(i, ';\n  if(!slots){continue;}\n  var responseSlot = slots["').concat(t, '"];\n  responseSlot.callback(responseSlot.payload);\n  break;\n}\n</script>');
                }
                function tryGetCriteoFastBid() {
                    try {
                        var fastBidStorageKey = 'criteo_fast_bid', hashPrefix = '// Hash: ', fastBidFromStorage = storage.getDataFromLocalStorage(fastBidStorageKey), firstLineEndPosition, firstLine, publisherTagHash, publisherTag;
                        null !== fastBidFromStorage && (firstLineEndPosition = fastBidFromStorage.indexOf('\n'), firstLine = fastBidFromStorage.substr(0, firstLineEndPosition).trim(), firstLine.substr(0, hashPrefix.length) !== hashPrefix ? (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn('No hash found in FastBid'), storage.removeDataFromLocalStorage(fastBidStorageKey)) : (publisherTagHash = firstLine.substr(hashPrefix.length), publisherTag = fastBidFromStorage.substr(firstLineEndPosition + 1), Object(__WEBPACK_IMPORTED_MODULE_6_criteo_direct_rsa_validate_build_verify_js__.verify)(publisherTag, publisherTagHash, FAST_BID_PUBKEY_N, FAST_BID_PUBKEY_E) ? (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logInfo('Using Criteo FastBid'), eval(publisherTag)) : (__WEBPACK_IMPORTED_MODULE_4__src_utils_js__.logWarn('Invalid Criteo FastBid found'), storage.removeDataFromLocalStorage(fastBidStorageKey))));
                    } catch (t) {
                    }
                }
                Object(__WEBPACK_IMPORTED_MODULE_1__src_adapters_bidderFactory_js__.registerBidder)(spec);
            },
            392: function (t, e, r) {
                'use strict';
                Object.defineProperty(e, '__esModule', { value: !0 });
                var _ = r(393), n = r(394);
                e.verify = function (t, e, r, i) {
                    var s = new _.BigInteger(_.b64toHex(e)), a = new _.BigInteger(_.b64toHex(r)), o = s.modPowInt(i, a);
                    return _.removeExtraSymbols(o.toHexString()) === n.Sha256.hash(t);
                };
            },
            393: function (t, e, r) {
                'use strict';
                var i;
                Object.defineProperty(e, '__esModule', { value: !0 });
                var s = (T.prototype.toHexString = function () {
                    if (this.s < 0)
                        return '-' + this.negate().toHexString();
                    var t, e = !1, r = '', i = this.t, s = this.DB - i * this.DB % 4;
                    if (0 < i--)
                        for (s < this.DB && 0 < (t = this[i] >> s) && (e = !0, r = c(t)); 0 <= i;)
                            s < 4 ? (t = (this[i] & (1 << s) - 1) << 4 - s, t |= this[--i] >> (s += this.DB - 4)) : (t = this[i] >> (s -= 4) & 15, s <= 0 && (s += this.DB, --i)), 0 < t && (e = !0), e && (r += c(t));
                    return e ? r : '0';
                }, T.prototype.fromHexString = function (t) {
                    if (null !== t) {
                        this.t = 0, this.s = 0;
                        for (var e = t.length, r = !1, i = 0; 0 <= --e;) {
                            var s = n(t, e);
                            s < 0 ? '-' == t.charAt(e) && (r = !0) : (r = !1, 0 == i ? this[this.t++] = s : i + 4 > this.DB ? (this[this.t - 1] |= (s & (1 << this.DB - i) - 1) << i, this[this.t++] = s >> this.DB - i) : this[this.t - 1] |= s << i, (i += 4) >= this.DB && (i -= this.DB));
                        }
                        this.clamp(), r && T.ZERO.subTo(this, this);
                    }
                }, T.prototype.negate = function () {
                    var t = b();
                    return T.ZERO.subTo(this, t), t;
                }, T.prototype.abs = function () {
                    return this.s < 0 ? this.negate() : this;
                }, T.prototype.mod = function (t) {
                    var e = b();
                    return this.abs().divRemTo(t, null, e), this.s < 0 && 0 < e.compareTo(T.ZERO) && t.subTo(e, e), e;
                }, T.prototype.copyTo = function (t) {
                    for (var e = this.t - 1; 0 <= e; --e)
                        t[e] = this[e];
                    t.t = this.t, t.s = this.s;
                }, T.prototype.lShiftTo = function (t, e) {
                    for (var r = t % this.DB, i = this.DB - r, s = (1 << i) - 1, a = Math.floor(t / this.DB), o = this.s << r & this.DM, _ = this.t - 1; 0 <= _; --_)
                        e[_ + a + 1] = this[_] >> i | o, o = (this[_] & s) << r;
                    for (_ = a - 1; 0 <= _; --_)
                        e[_] = 0;
                    e[a] = o, e.t = this.t + a + 1, e.s = this.s, e.clamp();
                }, T.prototype.invDigit = function () {
                    if (this.t < 1)
                        return 0;
                    var t = this[0];
                    if (0 == (1 & t))
                        return 0;
                    var e = 3 & t;
                    return 0 < (e = (e = (e = (e = e * (2 - (15 & t) * e) & 15) * (2 - (255 & t) * e) & 255) * (2 - ((65535 & t) * e & 65535)) & 65535) * (2 - t * e % this.DV) % this.DV) ? this.DV - e : -e;
                }, T.prototype.dlShiftTo = function (t, e) {
                    for (var r = this.t - 1; 0 <= r; --r)
                        e[r + t] = this[r];
                    for (r = t - 1; 0 <= r; --r)
                        e[r] = 0;
                    e.t = this.t + t, e.s = this.s;
                }, T.prototype.squareTo = function (t) {
                    for (var e = this.abs(), r = t.t = 2 * e.t; 0 <= --r;)
                        t[r] = 0;
                    for (r = 0; r < e.t - 1; ++r) {
                        var i = e.am(r, e[r], t, 2 * r, 0, 1);
                        (t[r + e.t] += e.am(r + 1, 2 * e[r], t, 2 * r + 1, i, e.t - r - 1)) >= e.DV && (t[r + e.t] -= e.DV, t[r + e.t + 1] = 1);
                    }
                    0 < t.t && (t[t.t - 1] += e.am(r, e[r], t, 2 * r, 0, 1)), t.s = 0, t.clamp();
                }, T.prototype.multiplyTo = function (t, e) {
                    var r = this.abs(), i = t.abs(), s = r.t;
                    for (e.t = s + i.t; 0 <= --s;)
                        e[s] = 0;
                    for (s = 0; s < i.t; ++s)
                        e[s + r.t] = r.am(0, i[s], e, s, 0, r.t);
                    e.s = 0, e.clamp(), this.s != t.s && T.ZERO.subTo(e, e);
                }, T.prototype.divRemTo = function (t, e, r) {
                    var i = t.abs();
                    if (!(i.t <= 0)) {
                        var s = this.abs();
                        if (s.t < i.t)
                            return null != e && e.fromHexString('0'), void (null != r && this.copyTo(r));
                        null == r && (r = b());
                        var a = b(), o = this.s, _ = t.s, n = this.DB - P(i[i.t - 1]);
                        0 < n ? (i.lShiftTo(n, a), s.lShiftTo(n, r)) : (i.copyTo(a), s.copyTo(r));
                        var p = a.t, c = a[p - 1];
                        if (0 != c) {
                            var u = c * (1 << this.F1) + (1 < p ? a[p - 2] >> this.F2 : 0), d = this.FV / u, h = (1 << this.F1) / u, l = 1 << this.F2, f = r.t, v = f - p, m = null == e ? b() : e;
                            for (a.dlShiftTo(v, m), 0 <= r.compareTo(m) && (r[r.t++] = 1, r.subTo(m, r)), T.ONE.dlShiftTo(p, m), m.subTo(a, a); a.t < p;)
                                a[a.t++] = 0;
                            for (; 0 <= --v;) {
                                var E = r[--f] == c ? this.DM : Math.floor(r[f] * d + (r[f - 1] + l) * h);
                                if ((r[f] += a.am(0, E, r, v, 0, p)) < E)
                                    for (a.dlShiftTo(v, m), r.subTo(m, r); r[f] < --E;)
                                        r.subTo(m, r);
                            }
                            null != e && (r.drShiftTo(p, e), o != _ && T.ZERO.subTo(e, e)), r.t = p, r.clamp(), 0 < n && r.rShiftTo(n, r), o < 0 && T.ZERO.subTo(r, r);
                        }
                    }
                }, T.prototype.rShiftTo = function (t, e) {
                    e.s = this.s;
                    var r = Math.floor(t / this.DB);
                    if (r >= this.t)
                        e.t = 0;
                    else {
                        var i = t % this.DB, s = this.DB - i, a = (1 << i) - 1;
                        e[0] = this[r] >> i;
                        for (var o = r + 1; o < this.t; ++o)
                            e[o - r - 1] |= (this[o] & a) << s, e[o - r] = this[o] >> i;
                        0 < i && (e[this.t - r - 1] |= (this.s & a) << s), e.t = this.t - r, e.clamp();
                    }
                }, T.prototype.drShiftTo = function (t, e) {
                    for (var r = t; r < this.t; ++r)
                        e[r - t] = this[r];
                    e.t = Math.max(this.t - t, 0), e.s = this.s;
                }, T.prototype.subTo = function (t, e) {
                    for (var r = 0, i = 0, s = Math.min(t.t, this.t); r < s;)
                        i += this[r] - t[r], e[r++] = i & this.DM, i >>= this.DB;
                    if (t.t < this.t) {
                        for (i -= t.s; r < this.t;)
                            i += this[r], e[r++] = i & this.DM, i >>= this.DB;
                        i += this.s;
                    } else {
                        for (i += this.s; r < t.t;)
                            i -= t[r], e[r++] = i & this.DM, i >>= this.DB;
                        i -= t.s;
                    }
                    e.s = i < 0 ? -1 : 0, i < -1 ? e[r++] = this.DV + i : 0 < i && (e[r++] = i), e.t = r, e.clamp();
                }, T.prototype.clamp = function () {
                    for (var t = this.s & this.DM; 0 < this.t && this[this.t - 1] == t;)
                        --this.t;
                }, T.prototype.modPowInt = function (t, e) {
                    var r = new (t < 256 || (e.isEven()) ? u : h)(e);
                    return this.exp(t, r);
                }, T.prototype.exp = function (t, e) {
                    if (4294967295 < t || t < 1)
                        return T.ONE;
                    var r, i = b(), s = b(), a = e.convert(this), o = P(t) - 1;
                    for (a.copyTo(i); 0 <= --o;)
                        e.sqrTo(i, s), 0 < (t & 1 << o) ? e.mulTo(s, a, i) : (r = i, i = s, s = r);
                    return e.revert(i);
                }, T.prototype.isEven = function () {
                    return 0 == (0 < this.t ? 1 & this[0] : this.s);
                }, T.prototype.compareTo = function (t) {
                    var e = this.s - t.s;
                    if (0 != e)
                        return e;
                    var r = this.t;
                    if (0 != (e = r - t.t))
                        return this.s < 0 ? -e : e;
                    for (; 0 <= --r;)
                        if (0 != (e = this[r] - t[r]))
                            return e;
                    return 0;
                }, T.prototype.am1 = function (t, e, r, i, s, a) {
                    for (; 0 <= --a;) {
                        var o = e * this[t++] + r[i] + s;
                        s = Math.floor(o / 67108864), r[i++] = 67108863 & o;
                    }
                    return s;
                }, T.prototype.am2 = function (t, e, r, i, s, a) {
                    for (var o = 32767 & e, _ = e >> 15; 0 <= --a;) {
                        var n = 32767 & this[t], p = this[t++] >> 15, c = _ * n + p * o;
                        s = ((n = o * n + ((32767 & c) << 15) + r[i] + (1073741823 & s)) >>> 30) + (c >>> 15) + _ * p + (s >>> 30), r[i++] = 1073741823 & n;
                    }
                    return s;
                }, T.prototype.am3 = function (t, e, r, i, s, a) {
                    for (var o = 16383 & e, _ = e >> 14; 0 <= --a;) {
                        var n = 16383 & this[t], p = this[t++] >> 14, c = _ * n + p * o;
                        s = ((n = o * n + ((16383 & c) << 14) + r[i] + s) >> 28) + (c >> 14) + _ * p, r[i++] = 268435455 & n;
                    }
                    return s;
                }, T);
                function T(t) {
                    null !== t && this.fromHexString(t);
                }
                function b() {
                    return new s(null);
                }
                function P(t) {
                    var e, r = 1;
                    return 0 != (e = t >>> 16) && (t = e, r += 16), 0 != (e = t >> 8) && (t = e, r += 8), 0 != (e = t >> 4) && (t = e, r += 4), 0 != (e = t >> 2) && (t = e, r += 2), 0 != (e = t >> 1) && (t = e, r += 1), r;
                }
                e.BigInteger = s, e.nbi = b, e.nbits = P;
                for (var a = [], o = '0'.charCodeAt(0), _ = 0; _ <= 9; ++_)
                    a[o++] = _;
                for (o = 'a'.charCodeAt(0), _ = 10; _ < 36; ++_)
                    a[o++] = _;
                for (o = 'A'.charCodeAt(0), _ = 10; _ < 36; ++_)
                    a[o++] = _;
                function n(t, e) {
                    var r = a[t.charCodeAt(e)];
                    return null == r ? -1 : r;
                }
                e.intAt = n;
                var p = '0123456789abcdefghijklmnopqrstuvwxyz';
                function c(t) {
                    return p.charAt(t);
                }
                e.int2char = c;
                e.b64toHex = function (t) {
                    for (var e = '', r = 0, i = 0, s = 0; s < t.length && '=' != t.charAt(s); ++s) {
                        var a = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'.indexOf(t.charAt(s));
                        a < 0 || (r = 0 == r ? (e += c(a >> 2), i = 3 & a, 1) : 1 == r ? (e += c(i << 2 | a >> 4), i = 15 & a, 2) : 2 == r ? (e += c(i), e += c(a >> 2), i = 3 & a, 3) : (e += c(i << 2 | a >> 4), e += c(15 & a), 0));
                    }
                    return 1 == r && (e += c(i << 2)), e;
                }, e.removeExtraSymbols = function (t) {
                    return t.replace(/^1f+00/, '').replace('3031300d060960864801650304020105000420', '');
                };
                var u = (d.prototype.convert = function (t) {
                    return t.s < 0 || 0 <= t.compareTo(this.m) ? t.mod(this.m) : t;
                }, d.prototype.revert = function (t) {
                    return t;
                }, d.prototype.reduce = function (t) {
                    t.divRemTo(this.m, null, t);
                }, d.prototype.mulTo = function (t, e, r) {
                    t.multiplyTo(e, r), this.reduce(r);
                }, d.prototype.sqrTo = function (t, e) {
                    t.squareTo(e), this.reduce(e);
                }, d);
                function d(t) {
                    this.m = t;
                }
                var h = (l.prototype.convert = function (t) {
                    var e = b();
                    return t.abs().dlShiftTo(this.m.t, e), e.divRemTo(this.m, null, e), t.s < 0 && 0 < e.compareTo(s.ZERO) && this.m.subTo(e, e), e;
                }, l.prototype.revert = function (t) {
                    var e = b();
                    return t.copyTo(e), this.reduce(e), e;
                }, l.prototype.reduce = function (t) {
                    for (; t.t <= this.mt2;)
                        t[t.t++] = 0;
                    for (var e = 0; e < this.m.t; ++e) {
                        var r = 32767 & t[e], i = r * this.mpl + ((r * this.mph + (t[e] >> 15) * this.mpl & this.um) << 15) & t.DM;
                        for (t[r = e + this.m.t] += this.m.am(0, i, t, e, 0, this.m.t); t[r] >= t.DV;)
                            t[r] -= t.DV, t[++r]++;
                    }
                    t.clamp(), t.drShiftTo(this.m.t, t), 0 <= t.compareTo(this.m) && t.subTo(this.m, t);
                }, l.prototype.mulTo = function (t, e, r) {
                    t.multiplyTo(e, r), this.reduce(r);
                }, l.prototype.sqrTo = function (t, e) {
                    t.squareTo(e), this.reduce(e);
                }, l);
                function l(t) {
                    this.m = t, this.mp = t.invDigit(), this.mpl = 32767 & this.mp, this.mph = this.mp >> 15, this.um = (1 << t.DB - 15) - 1, this.mt2 = 2 * t.t;
                }
                function f(t) {
                    var e = b();
                    return e.fromHexString(t.toString()), e;
                }
                e.nbv = f, s.ZERO = f(0), s.ONE = f(1), i = 'Microsoft Internet Explorer' == navigator.appName ? (s.prototype.am = s.prototype.am2, 30) : 'Netscape' != navigator.appName ? (s.prototype.am = s.prototype.am1, 26) : (s.prototype.am = s.prototype.am3, 28), s.prototype.DB = i, s.prototype.DM = (1 << i) - 1, s.prototype.DV = 1 << i;
                s.prototype.FV = Math.pow(2, 52), s.prototype.F1 = 52 - i, s.prototype.F2 = 2 * i - 52;
            },
            394: function (t, e, r) {
                'use strict';
                Object.defineProperty(e, '__esModule', { value: !0 });
                var i = (D.hash = function (t) {
                    t = D.utf8Encode(t || '');
                    for (var e = [
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
                            ], r = [
                                1779033703,
                                3144134277,
                                1013904242,
                                2773480762,
                                1359893119,
                                2600822924,
                                528734635,
                                1541459225
                            ], i = (t += String.fromCharCode(128)).length / 4 + 2, s = Math.ceil(i / 16), a = new Array(s), o = 0; o < s; o++) {
                        a[o] = new Array(16);
                        for (var _ = 0; _ < 16; _++)
                            a[o][_] = t.charCodeAt(64 * o + 4 * _) << 24 | t.charCodeAt(64 * o + 4 * _ + 1) << 16 | t.charCodeAt(64 * o + 4 * _ + 2) << 8 | t.charCodeAt(64 * o + 4 * _ + 3) << 0;
                    }
                    var n = 8 * (t.length - 1) / Math.pow(2, 32), p = 8 * (t.length - 1) >>> 0;
                    for (a[s - 1][14] = Math.floor(n), a[s - 1][15] = p, o = 0; o < s; o++) {
                        for (var c = new Array(64), u = 0; u < 16; u++)
                            c[u] = a[o][u];
                        for (u = 16; u < 64; u++)
                            c[u] = D.q1(c[u - 2]) + c[u - 7] + D.q0(c[u - 15]) + c[u - 16] >>> 0;
                        for (var d = r[0], h = r[1], l = r[2], f = r[3], v = r[4], m = r[5], E = r[6], T = r[7], u = 0; u < 64; u++) {
                            var b = T + D.z1(v) + D.Ch(v, m, E) + e[u] + c[u], P = D.z0(d) + D.Maj(d, h, l);
                            T = E, E = m, m = v, v = f + b >>> 0, f = l, l = h, h = d, d = b + P >>> 0;
                        }
                        r[0] = r[0] + d >>> 0, r[1] = r[1] + h >>> 0, r[2] = r[2] + l >>> 0, r[3] = r[3] + f >>> 0, r[4] = r[4] + v >>> 0, r[5] = r[5] + m >>> 0, r[6] = r[6] + E >>> 0, r[7] = r[7] + T >>> 0;
                    }
                    for (var y = new Array(r.length), T = 0; T < r.length; T++)
                        y[T] = ('00000000' + r[T].toString(16)).slice(-8);
                    return y.join('');
                }, D.utf8Encode = function (e) {
                    try {
                        return new TextEncoder().encode(e).reduce(function (t, e) {
                            return t + String.fromCharCode(e);
                        }, '');
                    } catch (t) {
                        return unescape(encodeURIComponent(e));
                    }
                }, D.ROTR = function (t, e) {
                    return e >>> t | e << 32 - t;
                }, D.z0 = function (t) {
                    return D.ROTR(2, t) ^ D.ROTR(13, t) ^ D.ROTR(22, t);
                }, D.z1 = function (t) {
                    return D.ROTR(6, t) ^ D.ROTR(11, t) ^ D.ROTR(25, t);
                }, D.q0 = function (t) {
                    return D.ROTR(7, t) ^ D.ROTR(18, t) ^ t >>> 3;
                }, D.q1 = function (t) {
                    return D.ROTR(17, t) ^ D.ROTR(19, t) ^ t >>> 10;
                }, D.Ch = function (t, e, r) {
                    return t & e ^ ~t & r;
                }, D.Maj = function (t, e, r) {
                    return t & e ^ t & r ^ e & r;
                }, D);
                function D() {
                }
                e.Sha256 = i;
            }
        }, [390]);
        pbjsYLHHChunk([14], {
            20: function (e, r, t) {
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
                            atype: 1
                        },
                        lipb: {
                            getValue: function (e) {
                                return e.lipbid;
                            },
                            source: 'liveintent.com',
                            atype: 1,
                            getEidExt: function (e) {
                                if (Array.isArray(e.segments) && e.segments.length)
                                    return { segments: e.segments };
                            }
                        },
                        britepoolid: {
                            source: 'britepool.com',
                            atype: 1
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
                            atype: 1
                        },
                        netId: {
                            source: 'netid.de',
                            atype: 1
                        },
                        aut: {
                            source: 'aut.vm',
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
                        idx: {
                            source: 'idx.lat',
                            atype: 1
                        },
                        connectid: {
                            source: 'verizonmedia.com',
                            atype: 1
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
                        }
                    };
            },
            817: function (e, r, t) {
                e.exports = t(818);
            },
            818: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'spec', function () {
                    return u;
                });
                var o = t(0), s = t(2), c = t(3), a = t(1), p = t(20), u = {
                        code: 'smartadserver',
                        gvlid: 45,
                        aliases: ['smart'],
                        supportedMediaTypes: [
                            s.b,
                            s.d
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
                        buildRequests: function (e, d) {
                            return e.map(function (e) {
                                var r = {
                                        siteid: e.params.siteId,
                                        pageid: e.params.pageId,
                                        formatid: e.params.formatId,
                                        currencyCode: c.b.getConfig('currency.adServerCurrency'),
                                        bidfloor: e.params.bidfloor || 0,
                                        targeting: e.params.target && '' !== e.params.target ? e.params.target : void 0,
                                        buid: e.params.buId && '' !== e.params.buId ? e.params.buId : void 0,
                                        appname: e.params.appName && '' !== e.params.appName ? e.params.appName : void 0,
                                        ckid: e.params.ckId || 0,
                                        tagId: e.adUnitCode,
                                        pageDomain: d && d.refererInfo && d.refererInfo.referer ? d.refererInfo.referer : void 0,
                                        transactionId: e.transactionId,
                                        timeout: c.b.getConfig('bidderTimeout'),
                                        bidId: e.bidId,
                                        prebidVersion: '4.32.0',
                                        schain: u.serializeSupplyChain(e.schain)
                                    }, t = o.deepAccess(e, 'mediaTypes.video'), a = o.deepAccess(e, 'mediaTypes.banner');
                                if (a)
                                    r.sizes = a.sizes.map(function (e) {
                                        return {
                                            w: e[0],
                                            h: e[1]
                                        };
                                    });
                                else {
                                    if (!t || 'instream' !== t.context && 'outstream' !== t.context)
                                        return {};
                                    var i = t.playerSize[0];
                                    r.isVideo = 'instream' === t.context, r.mediaType = s.d, r.videoData = {
                                        videoProtocol: e.params.video.protocol,
                                        playerWidth: i[0],
                                        playerHeight: i[1],
                                        adBreak: e.params.video.startDelay || 1
                                    };
                                }
                                d && d.gdprConsent && (r.addtl_consent = d.gdprConsent.addtlConsent, r.gdpr_consent = d.gdprConsent.consentString, r.gdpr = d.gdprConsent.gdprApplies), e && e.userId && (r.eids = Object(p.b)(e.userId)), d && d.uspConsent && (r.us_privacy = d.uspConsent);
                                var n = JSON.stringify(r);
                                return {
                                    method: 'POST',
                                    url: (void 0 !== e.params.domain ? e.params.domain : 'https://prg.smartadserver.com') + '/prebid/v1',
                                    data: n
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
                                    dspPixels: n.dspPixels
                                }, t.mediaType === s.d ? (a.mediaType = s.d, a.vastUrl = n.adUrl, a.vastXml = n.ad, a.content = n.ad) : (a.adUrl = n.adUrl, a.ad = n.ad), i.push(a));
                            } catch (e) {
                                o.logError('Error while parsing smart server response', e);
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
                Object(a.registerBidder)(u);
            }
        }, [817]);
        pbjsYLHHChunk([66], {
            951: function (e, a, r) {
                e.exports = r(952);
            },
            952: function (e, a, r) {
                'use strict';
                Object.defineProperty(a, '__esModule', { value: !0 }), r.d(a, 'spec', function () {
                    return s;
                });
                var w = r(0), n = r(1), t = r(10), b = r.n(t), A = r(2), j = r(11), P = 'https://ad.yieldlab.net', s = {
                        code: 'yieldlab',
                        aliases: ['yieldlab2'],
                        supportedMediaTypes: [
                            A.d,
                            A.b
                        ],
                        isBidRequestValid: function (e) {
                            return !!(e && e.params && e.params.adslotId && e.params.supplyId);
                        },
                        buildRequests: function (e, a) {
                            var i = [], o = {
                                    ts: Date.now(),
                                    json: !0,
                                    pvid: !0
                                };
                            w._each(e, function (e) {
                                if (i.push(e.params.adslotId), e.params.targeting && (o.t = function (e) {
                                        var a = [];
                                        for (var r in e) {
                                            var n;
                                            e.hasOwnProperty(r) && (n = e[r], a.push(r + '=' + n));
                                        }
                                        return a.join('&');
                                    }(e.params.targeting)), e.userIdAsEids && Array.isArray(e.userIdAsEids) && (o.ids = function (e) {
                                        for (var a = [], r = 0; r < e.length; r++)
                                            a.push(e[r].source + ':' + e[r].uids[0].id);
                                        return a.join(',');
                                    }(e.userIdAsEids)), e.params.customParams && w.isPlainObject(e.params.customParams))
                                    for (var a in e.params.customParams)
                                        o[a] = e.params.customParams[a];
                                var r, n, t, s, d;
                                e.schain && w.isPlainObject(e.schain) && Array.isArray(e.schain.nodes) && (o.schain = (r = e.schain, n = r.ver || '', t = 1 === r.complete || 0 === r.complete ? r.complete : '', s = [
                                    'asi',
                                    'sid',
                                    'hp',
                                    'rid',
                                    'name',
                                    'domain',
                                    'ext'
                                ], d = r.nodes.reduce(function (e, r) {
                                    return e + '!'.concat(s.map(function (e) {
                                        return r[e] ? (a = r[e], encodeURIComponent(a).replace(/!/g, '%21')) : '';
                                        var a;
                                    }).join(','));
                                }, ''), ''.concat(n, ',').concat(t).concat(d)));
                            }), a && (a.refererInfo && a.refererInfo.referer && (o.pubref = a.refererInfo.referer), a.gdprConsent && (o.gdpr = 'boolean' != typeof a.gdprConsent.gdprApplies || a.gdprConsent.gdprApplies, o.gdpr && (o.consent = a.gdprConsent.consentString)));
                            var r = i.join(','), n = function (e) {
                                    var a = [];
                                    for (var r in e) {
                                        var n;
                                        e.hasOwnProperty(r) && (n = e[r], 'schain' !== r ? a.push(encodeURIComponent(r) + '=' + encodeURIComponent(n)) : a.push(r + '=' + n));
                                    }
                                    return a.join('&');
                                }(o);
                            return {
                                method: 'GET',
                                url: ''.concat(P, '/yp/').concat(r, '?').concat(n),
                                validBidRequests: e,
                                queryParams: o
                            };
                        },
                        interpretResponse: function (f, e) {
                            var y = [], g = Date.now(), I = e.queryParams;
                            return e.validBidRequests.forEach(function (a) {
                                var e, r, n, t, s, d, i, o, c, p, u, m, l, v, h;
                                !f.body || (e = b()(f.body, function (e) {
                                    return a.params.adslotId == e.id;
                                })) && (r = 2 !== a.sizes.length || w.isArray(a.sizes[0]) ? a.sizes[0] : a.sizes, n = void 0 !== a.params.adSize ? R(a.params.adSize) : void 0 !== e.adsize ? R(e.adsize) : r, t = void 0 !== a.params.extId ? '&id=' + a.params.extId : '', s = void 0 !== e.adtype ? e.adtype : '', d = I.gdpr ? '&gdpr=' + I.gdpr : '', i = I.consent ? '&consent=' + I.consent : '', o = {
                                    requestId: a.bidId,
                                    cpm: e.price / 100,
                                    width: n[0],
                                    height: n[1],
                                    creativeId: '' + e.id,
                                    dealId: e['c.dealid'] ? e['c.dealid'] : e.pid,
                                    currency: 'EUR',
                                    netRevenue: !1,
                                    ttl: 300,
                                    referrer: '',
                                    ad: '<script src="'.concat(P, '/d/').concat(e.id, '/').concat(a.params.supplyId, '/?ts=').concat(g).concat(t).concat(d).concat(i, '"></script>')
                                }, v = a, h = s, w.deepAccess(v, 'mediaTypes.video') && 'video' === h.toLowerCase() && (m = a, (c = (l = w.deepAccess(m, 'mediaTypes.video.playerSize')) && w.isArray(l[0]) ? l[0] : l) && (o.width = c[0], o.height = c[1]), o.mediaType = A.d, o.vastUrl = ''.concat(P, '/d/').concat(e.id, '/').concat(a.params.supplyId, '/?ts=').concat(g).concat(t).concat(d).concat(i), u = a, 'outstream' === w.deepAccess(u, 'mediaTypes.video.context') && ((p = j.a.install({
                                    id: a.bidId,
                                    url: 'https://ad.adition.com/dynamic.ad?a=o193092&ma_loadEvent=ma-start-event',
                                    loaded: !1
                                })).setRender(C), o.renderer = p)), y.push(o));
                            }), y;
                        }
                    };
                function R(e) {
                    return e.split('x').map(Number);
                }
                function C(e) {
                    e.renderer.push(function () {
                        window.ma_width = e.width, window.ma_height = e.height, window.ma_vastUrl = e.vastUrl, window.ma_container = e.adUnitCode, window.document.dispatchEvent(new Event('ma-start-event'));
                    });
                }
                Object(n.registerBidder)(s);
            }
        }, [951]);
        pbjsYLHHChunk([298], {
            395: function (e, o, t) {
                e.exports = t(396);
            },
            396: function (e, o, t) {
                'use strict';
                Object.defineProperty(o, '__esModule', { value: !0 }), t.d(o, 'storage', function () {
                    return v;
                }), t.d(o, 'criteoIdSubmodule', function () {
                    return u;
                });
                var f = t(0), m = t(4), I = t(22), n = t(13), c = t(7), r = 'criteo', v = Object(c.b)(91, r), U = 'cto_bidid', h = 'cto_bundle', S = new Date(0).toString(), i = new Date(f.timestamp() + 33696000000).toString();
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
        }, [395]);
        pbjsYLHHChunk([250], {
            497: function (e, r, t) {
                e.exports = t(498);
            },
            498: function (e, r, t) {
                'use strict';
                Object.defineProperty(r, '__esModule', { value: !0 }), t.d(r, 'ID5_STORAGE_NAME', function () {
                    return m;
                }), t.d(r, 'ID5_PRIVACY_STORAGE_NAME', function () {
                    return b;
                }), t.d(r, 'id5IdSubmodule', function () {
                    return s;
                }), r.expDaysStr = v, r.nbCacheName = i, r.storeNbInCache = h, r.getNbFromCache = c, r.getFromLocalStorage = _, r.storeInLocalStorage = y, r.isInControlGroup = T;
                var u = t(0), d = t(4), n = t(13), p = t(22), a = t(7), l = t(8), g = 30, m = 'id5id', b = ''.concat(m, '_privacy'), f = 'html5', o = 10000, I = [
                        'pbjs-id5id',
                        'id5id.1st'
                    ], D = Object(a.b)(131, 'id5Id'), s = {
                        name: 'id5Id',
                        gvlid: 131,
                        decode: function (e, r) {
                            var t, n = 0;
                            if (e && 'string' == typeof e.universal_uid) {
                                t = e.universal_uid, n = e.link_type || n;
                                var a = C(r), o = T(t, a.controlGroupPct);
                                !0 === a.enabled && void 0 === o ? u.logError('User ID - ID5 submodule: A/B Testing controlGroupPct must be a number >= 0 and <= 1! Skipping A/B Testing') : !0 === a.enabled && !0 === o ? (u.logInfo('User ID - ID5 submodule: A/B Testing Enabled - user is in the Control Group, so the ID5 ID is NOT exposed'), t = n = 0) : !0 === a.enabled && u.logInfo('User ID - ID5 submodule: A/B Testing Enabled - user is NOT in the Control Group, so the ID5 ID is exposed');
                                var s = {
                                    id5id: {
                                        uid: t,
                                        ext: { linkType: n }
                                    }
                                };
                                return !0 === a.enabled && u.deepSetValue(s, 'id5id.ext.abTestingControlGroup', void 0 !== o && o), s;
                            }
                        },
                        getId: function (a, e, r) {
                            if (function (e) {
                                    if (!e || !e.params || !e.params.partner || 'number' != typeof e.params.partner)
                                        return u.logError('User ID - ID5 submodule requires partner to be defined as a number'), !1;
                                    if (!e.storage || !e.storage.type || !e.storage.name)
                                        return u.logError('User ID - ID5 submodule requires storage to be set'), !1;
                                    e.storage.type !== f && u.logWarn('User ID - ID5 submodule recommends storage type to be \''.concat(f, '\'. In a future release this will become a strict requirement'));
                                    e.storage.name !== m && u.logWarn('User ID - ID5 submodule recommends storage name to be \''.concat(m, '\'. In a future release this will become a strict requirement'));
                                    return !0;
                                }(a)) {
                                var t, o = 'https://id5-sync.com/g/v2/'.concat(a.params.partner, '.json'), n = e && 'boolean' == typeof e.gdprApplies && e.gdprApplies ? 1 : 0, s = Object(p.a)(), i = r && r.signature ? r.signature : (I.forEach(function (e) {
                                        D.getCookie(e) && (t = JSON.parse(D.getCookie(e)) || t);
                                    }), t && t.signature || ''), c = {
                                        gdpr: n,
                                        gdpr_consent: n ? e.consentString : '',
                                        partner: a.params.partner,
                                        nbPage: S(a.params.partner),
                                        o: 'pbjs',
                                        pd: a.params.pd || '',
                                        provider: a.params.provider || '',
                                        rf: s.referer,
                                        s: i,
                                        top: s.reachedTop ? 1 : 0,
                                        u: s.stack[0] || window.location.href,
                                        us_privacy: l.uspDataHandler.getConsentData() || '',
                                        v: '4.32.0'
                                    };
                                !0 === C(a).enabled && u.deepSetValue(c, 'features.ab', 1);
                                return {
                                    callback: function (n) {
                                        var e = {
                                            success: function (e) {
                                                var r, t;
                                                if (e)
                                                    try {
                                                        r = JSON.parse(e), h(a.params.partner, 0), r.privacy && y(b, JSON.stringify(r.privacy), g), a.storage.type === f && (t = a.params.partner, I.forEach(function (e) {
                                                            D.setCookie(''.concat(e), '', v(-1)), D.setCookie(''.concat(e, '_nb'), '', v(-1)), D.setCookie(''.concat(e, '_').concat(t, '_nb'), '', v(-1)), D.setCookie(''.concat(e, '_last'), '', v(-1));
                                                        }));
                                                    } catch (e) {
                                                        u.logError(e);
                                                    }
                                                n(r);
                                            },
                                            error: function (e) {
                                                u.logError('User ID - ID5 submodule getId fetch encountered an error', e), n();
                                            }
                                        };
                                        Object(d.a)(o, e, JSON.stringify(c), {
                                            method: 'POST',
                                            withCredentials: !0
                                        });
                                    }
                                };
                            }
                        },
                        extendId: function (e, r, t) {
                            return S(e && e.params && e.params.partner || 0), t;
                        }
                    };
                function v(e) {
                    return new Date(Date.now() + 86400000 * e).toUTCString();
                }
                function i(e) {
                    return ''.concat(m, '_').concat(e, '_nb');
                }
                function h(e, r) {
                    y(i(e), r, g);
                }
                function c(e) {
                    var r = _(i(e));
                    return r ? parseInt(r) : 0;
                }
                function S(e) {
                    var r = c(e) + 1;
                    return h(e, r), r;
                }
                function _(e) {
                    var r = D.getDataFromLocalStorage(''.concat(e, '_exp'));
                    return '' === r || r && 0 < new Date(r).getTime() - Date.now() ? D.getDataFromLocalStorage(e) : (D.removeDataFromLocalStorage(e), null);
                }
                function y(e, r, t) {
                    D.setDataInLocalStorage(''.concat(e, '_exp'), v(t)), D.setDataInLocalStorage(''.concat(e), r);
                }
                function C(e) {
                    return e && e.params && e.params.abTesting || { enabled: !1 };
                }
                function T(e, r) {
                    var t;
                    if (!(!u.isNumber(r) || r < 0 || 1 < r))
                        return ((t = e) ? (u.cyrb53Hash(t) % o + o) % o : Math.floor(Math.random() * o)) < r * o;
                }
                Object(n.e)('userId', s);
            }
        }, [497]);
        pbjsYLHH.processQueue();
        !function (i) {
            var n = {};
            function o(e) {
                if (n[e])
                    return n[e].exports;
                var t = n[e] = {
                    i: e,
                    l: !1,
                    exports: {}
                };
                return i[e].call(t.exports, t, t.exports, o), t.l = !0, t.exports;
            }
            o.m = i, o.c = n, o.d = function (e, t, i) {
                o.o(e, t) || Object.defineProperty(e, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: i
                });
            }, o.n = function (e) {
                var t = e && e.__esModule ? function () {
                    return e.default;
                } : function () {
                    return e;
                };
                return o.d(t, 'a', t), t;
            }, o.o = function (e, t) {
                return Object.prototype.hasOwnProperty.call(e, t);
            }, o.p = '', o(o.s = 72);
        }({
            72: function (e, t) {
                function n(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, 'value' in n && (n.writable = !0), Object.defineProperty(e, n.key, n);
                    }
                }
                function a(e, t) {
                    var i;
                    if ('undefined' == typeof Symbol || null == e[Symbol.iterator]) {
                        if (Array.isArray(e) || (i = function (e, t) {
                                if (!e)
                                    return;
                                if ('string' == typeof e)
                                    return s(e, t);
                                var i = Object.prototype.toString.call(e).slice(8, -1);
                                'Object' === i && e.constructor && (i = e.constructor.name);
                                if ('Map' === i || 'Set' === i)
                                    return Array.from(e);
                                if ('Arguments' === i || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i))
                                    return s(e, t);
                            }(e)) || t && e && 'number' == typeof e.length) {
                            i && (e = i);
                            function n() {
                            }
                            var o = 0;
                            return {
                                s: n,
                                n: function () {
                                    return o >= e.length ? { done: !0 } : {
                                        done: !1,
                                        value: e[o++]
                                    };
                                },
                                e: function (e) {
                                    throw e;
                                },
                                f: n
                            };
                        }
                        throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
                    }
                    var d, r = !0, l = !1;
                    return {
                        s: function () {
                            i = e[Symbol.iterator]();
                        },
                        n: function () {
                            var e = i.next();
                            return r = e.done, e;
                        },
                        e: function (e) {
                            l = !0, d = e;
                        },
                        f: function () {
                            try {
                                r || null == i.return || i.return();
                            } finally {
                                if (l)
                                    throw d;
                            }
                        }
                    };
                }
                function s(e, t) {
                    (null == t || t > e.length) && (t = e.length);
                    for (var i = 0, n = new Array(t); i < t; i++)
                        n[i] = e[i];
                    return n;
                }
                var r, c = {}, g = {}, d = !1, u = [], w = 'Reload will not be possible anymore', h = 'Not a reloadable slot', o = {
                        tabbedOut: !1,
                        lastActivity: new Date(),
                        scrollDirection: 'down',
                        scrollPos: 0
                    }, l = 1;
                function f() {
                    var e = Object.keys(c);
                    if (0 === e.length)
                        return window.YLHH.bidder.log('Yieldlove', 'DEBUG', '[RELOAD] Stopped generating visibility per time data'), clearInterval(r), void (r = void 0);
                    var t = !1;
                    l && 20 < (l += 1) && (l = 1, t = !0);
                    for (var i = 0; i < e.length; i++) {
                        var n = e[i], o = c[n];
                        o.overallTime = o.overallTime + 1, o.visible && (o.visibleTime = o.visibleTime + 1);
                        try {
                            var d = o.isReloadNowPossible();
                            t && window.YLHH.bidder.log('Yieldlove', 'DEBUG', '[RELOAD] Status for '.concat(o.adUnitSettings.code, ' "').concat(n, '" is: ').concat(o.statusMessage)), d && o.reload();
                        } catch (e) {
                            e.message === w ? delete c[n] : console.error(e);
                        }
                    }
                }
                function i() {
                    window.YLHH.bidder.log('Yieldlove', 'DEBUG', '[RELOAD] Listening for slot events to initiate reloads');
                    var e = window.googletag.pubads();
                    e.addEventListener('slotRenderEnded', function (e) {
                        var t = e.slot.getSlotElementId();
                        if (t in g)
                            return window.YLHH.bidder.log('Yieldlove', 'DEBUG', '[RELOAD] Slot in custom reload div '.concat(t, ' has been reloaded')), g[t].reloaded();
                        if (t in c)
                            return window.YLHH.bidder.log('Yieldlove', 'DEBUG', '[RELOAD] Slot in original div '.concat(t, ' has been reloaded')), c[t].reloaded();
                        try {
                            var i = new m(e.slot);
                            c[t] = i, window.YLHH.bidder.log('Yieldlove', 'DEBUG', '[RELOAD] A new reloadable slot has been created', i), void 0 === r && (r = setInterval(f, 1000), window.YLHH.bidder.log('Yieldlove', 'DEBUG', '[RELOAD] Starting to generate visibility per time data'));
                        } catch (e) {
                            e.message !== h && window.YLHH.bidder.log('Yieldlove', 'ERROR', e);
                        }
                    }), e.addEventListener('slotVisibilityChanged', function (e) {
                        var t = e.slot.getSlotElementId();
                        return t in g ? g[t].setVisibility(e.inViewPercentage) : t in c ? c[t].setVisibility(e.inViewPercentage) : void 0;
                    });
                }
                function v() {
                    o.lastActivity = new Date();
                }
                function b(e) {
                    u.push(e);
                }
                window.yieldlove_cmd = window.yieldlove_cmd || [], window.yieldlove_cmd.push(function () {
                    window.YLHH.bidder.log('Yieldlove', 'DEBUG', '[RELOAD] Reload module has been loaded'), window.YLHH.bidder.addRefreshBlacklistEntry = b, window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push(i), window.googletag.cmd.push(function () {
                        YLHH.bidder.log('Google', 'DEBUG', '[RELOAD] Delegating googletag.destroySlots');
                        var d = googletag.destroySlots;
                        googletag.destroySlots = function () {
                            try {
                                if (YLHH.bidder.log('Google', 'DEBUG', '[RELOAD] Destroying slots:', arguments, 'Current reload reloadableSlots:', c, 'reloadSlots', g), arguments[0]) {
                                    if (arguments[0].length && 0 < arguments[0].length) {
                                        var e, t = a(arguments[0]);
                                        try {
                                            for (t.s(); !(e = t.n()).done;) {
                                                var i = e.value.getSlotElementId();
                                                delete c[i], delete g[i];
                                            }
                                        } catch (e) {
                                            t.e(e);
                                        } finally {
                                            t.f();
                                        }
                                    }
                                } else {
                                    for (var n in c)
                                        delete c[n];
                                    for (var o in g)
                                        delete g[o];
                                }
                                YLHH.bidder.log('Google', 'DEBUG', '[RELOAD] Destroyed slots.', 'Current reload reloadableSlots:', c, 'reloadSlots', g);
                            } catch (e) {
                            }
                            return d.apply(googletag, arguments);
                        };
                    }), window.YLHH.bidder.log('Yieldlove', 'INFO', '[RELOAD] Attached reload event listeners'), window.addEventListener('keypress', v), window.addEventListener('mousemove', v), window.addEventListener('mousedown', v), window.addEventListener('click', v), window.addEventListener('touchstart', v), window.addEventListener('blur', function () {
                        o.tabbedOut = !0;
                    }), window.addEventListener('focus', function () {
                        o.tabbedOut = !1, v();
                    }), window.addEventListener('scroll', function () {
                        var e = window.pageYOffset || document.documentElement.scrollTop;
                        o.scrollDirection = e > o.scrollPos ? 'down' : 'up', o.scrollPos = e <= 0 ? 0 : e, v();
                    }), window.addEventListener('yieldlove.beforeSendingAdServerRequest', function (e) {
                        window.YLHH.bidder.log('Yieldlove', 'INFO', '[RELOAD] yieldlove.beforeSendingAdServerRequest has been invoked. auctionId:', e.detail.auctionId);
                        var t = window.YLHH.bidder.data.auctions[e.detail.auctionId].adUnits;
                        void 0 !== t ? t.forEach(function (e) {
                            var t, i, n, o;
                            window.YLHH.bidder.adUnitsMap.hasOwnProperty(e) && (t = window.YLHH.bidder.adUnitsMap[e], o = n = null, 0 < (i = window.YLHH.bidder.tag.getMatchingGPTSlots([e])).length && (n = (o = i[0]).getSlotElementId()), n in c ? H(t, o, c[n]) : n in g ? H(t, o, g[n]) : H(t, o));
                        }) : window.YLHH.bidder.log('Yieldlove', 'INFO', '[RELOAD] No active ad units. Skip updating targeting.');
                    }), window.addEventListener('yieldlove.addRefreshBlacklistEntry', function (e) {
                        b(e.detail.entry);
                    }), window.addEventListener('message', function (e) {
                        var t = null;
                        try {
                            t = JSON.parse(e.data);
                        } catch (e) {
                            return;
                        }
                        t && 'yieldlove.addRefreshBlacklistEntry' === t.type && b(t.entry);
                    }), window.addEventListener('yieldlove.auctionStarted', function (e) {
                        if (e && e.detail && e.detail.options && e.detail.auctionId) {
                            var t = e.detail, i = t.options, n = t.auctionId, o = window.YLHH.bidder.data.auctions[n] || {}, d = o.adUnitCodes, r = o.ifRefreshAll;
                            if (!i.isVisibilityReload)
                                if (r) {
                                    for (var l in c)
                                        delete c[l];
                                    for (var s in g)
                                        delete g[s];
                                } else
                                    window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push(function () {
                                        var e, t = a(window.YLHH.bidder.tag.getMatchingGPTSlots(d));
                                        try {
                                            for (t.s(); !(e = t.n()).done;) {
                                                var i = e.value.getSlotElementId();
                                                delete c[i], delete g[i];
                                            }
                                        } catch (e) {
                                            t.e(e);
                                        } finally {
                                            t.f();
                                        }
                                    });
                        }
                    });
                });
                var m = function () {
                    function l(e) {
                        var t;
                        if (!function (e, t) {
                                if (!(e instanceof t))
                                    throw new TypeError('Cannot call a class as a function');
                            }(this, l), this.gptSlot = e, this.element = document.getElementById(this.gptSlot.getSlotElementId()), this.dfpId = this.gptSlot.getAdUnitPath().split('/').find(function (e) {
                                return parseInt(e) == e && parseInt(e);
                            }), 'getResponseInformation' in this.gptSlot ? (t = this.gptSlot.getResponseInformation(), this.lineItemId = t ? t.lineItemId : null) : this.lineItemId = null, this.adUnitSettings = window.YLHH.bidder.getAdUnitByGPTSlot(e), this.code = this.adUnitSettings.code, !y(this.adUnitSettings))
                            throw new Error(h);
                        this.status = 'READY', this.statusMessage = 'Constructed', this.overallTime = 0, this.impressions = 0, this.blacklisted = null;
                        for (var i, n, o = [
                                    'bottom',
                                    'height',
                                    'left',
                                    'right',
                                    'top',
                                    'width',
                                    'x',
                                    'y'
                                ], d = this.element ? this.element.getBoundingClientRect() : {}, r = 0; r < o.length; r++)
                            this[o[r]] = d[o[r]];
                        (this.visibleTime = 0) === this.x && 0 === this.y ? (this.visible = !1, this.visibility = 0) : (i = window.innerWidth || document.documentElement.clientWidth, n = window.innerHeight || document.documentElement.clientHeight, 0 <= this.top && 0 <= this.left && this.right <= i && this.bottom <= n ? (this.visible = !0, this.visibility = 100) : (this.visible = !1, this.visibility = 0));
                    }
                    var e, t, i;
                    return e = l, (t = [
                        {
                            key: 'setVisibility',
                            value: function (e) {
                                this.visibility = e, this.visible = this.visibility >= this.adUnitSettings.refreshMinVisibility;
                                for (var t = [
                                            'bottom',
                                            'height',
                                            'left',
                                            'right',
                                            'top',
                                            'width',
                                            'x',
                                            'y'
                                        ], i = this.element ? this.element.getBoundingClientRect() : {}, n = 0; n < t.length; n++)
                                    this[t[n]] = i[t[n]];
                            }
                        },
                        {
                            key: 'resetVisibilityTime',
                            value: function () {
                                this.visibleTime = 0, this.overallTime = 0;
                            }
                        },
                        {
                            key: 'isReloadNowPossible',
                            value: function () {
                                if ('API_REQUEST' === this.status || 'RELOADING' === this.status)
                                    return this.statusMessage = 'Waiting on status "'.concat(this.status, '"...'), !1;
                                if (this.impressions > this.adUnitSettings.refreshMaxImpressions)
                                    throw new Error(w);
                                if (!0 === this.blacklisted)
                                    throw new Error(w);
                                if (null === this.blacklisted) {
                                    if (!function (i) {
                                            if (!d) {
                                                if (window.location.search) {
                                                    var e = window.location.search;
                                                    if (e.includes('google_preview') && e.includes('iu') && e.includes('gdfp_req'))
                                                        return i.blacklisted = !0;
                                                }
                                                if (null !== i.lineItemId) {
                                                    if (!1 !== window.YLHH.bidder.settings.refreshApiInUse && ('4444' === i.dfpId && (window.YLHH.bidder.settings.refreshApiInUse = !0), '39216077' === i.dfpId && (window.YLHH.bidder.settings.refreshApiInUse = !0)), window.YLHH.bidder.settings.refreshApiInUse) {
                                                        var n = 'bl/'.concat(i.dfpId, '/').concat(i.lineItemId);
                                                        if (-1 !== u.indexOf(n))
                                                            return i.blacklisted = !0;
                                                        d = !0;
                                                        var o = setTimeout(function () {
                                                            window.YLHH.bidder.log('Yieldlove', 'INFO', '[RELOAD] '.concat(i.code, ' API request timed out')), d = !1, o = null;
                                                        }, 3000);
                                                        return window.YLHH.utils.request('https://api.yieldlove-ad-serving.net/v1/' + n, null, function (e, t) {
                                                            window.YLHH.bidder.log('Yieldlove', 'INFO', '[RELOAD] '.concat(i.code, ' Received response'), t), i.status = 'READY', i.blacklisted = !1, o && clearTimeout(o), d = !1;
                                                            try {
                                                                if (e)
                                                                    throw e;
                                                                (t = JSON.parse(t)).priority && t.lineItemType && (u.push(n), i.blacklisted = !0);
                                                            } catch (e) {
                                                                console.error(e);
                                                            }
                                                        }, !1, 'GET'), 1;
                                                    }
                                                    i.blacklisted = !1;
                                                } else
                                                    i.blacklisted = !1;
                                            }
                                        }(this) || (this.status = 'API_REQUEST'), !0 === this.blacklisted)
                                        throw new Error(w);
                                    return !1;
                                }
                                var e = this.adUnitSettings.refreshMaxYoffset;
                                if (e && !this.visible)
                                    if (0 < this.bottom) {
                                        var t = this.top - (window.innerHeight || document.documentElement.clientHeight);
                                        if (e < t)
                                            return this.statusMessage = 'Ad is scrolled out of viewport by top : '.concat(t, ' > ').concat(e, ' | ') + 'top = '.concat(this.top, ' - ').concat(window.innerHeight || document.documentElement.clientHeight), !1;
                                        if ('down' !== o.scrollDirection)
                                            return this.statusMessage = 'User is not scrolling towards the ad (ad: down, user: '.concat(o.scrollDirection, ')'), !1;
                                    } else {
                                        if (e *= -1, this.bottom < e)
                                            return this.statusMessage = 'Ad is scrolled out of viewport by bottom : '.concat(this.bottom, ' < ').concat(e), !1;
                                        if ('up' !== o.scrollDirection)
                                            return this.statusMessage = 'User is not scrolling towards the ad (ad: up, user: '.concat(o.scrollDirection, ')'), !1;
                                    }
                                if (this.adUnitSettings.refreshMinScreenTime && this.visibleTime < this.adUnitSettings.refreshMinScreenTime)
                                    return this.statusMessage = this.adUnitSettings.refreshMinScreenTime - this.visibleTime + ' seconds visibile time remaining', !1;
                                if (this.adUnitSettings.refreshInterval && this.overallTime < this.adUnitSettings.refreshInterval)
                                    return this.statusMessage = this.adUnitSettings.refreshInterval - this.overallTime + ' seconds overall time remaining', !1;
                                if (this.adUnitSettings.refreshScreenIdleTime) {
                                    var i = new Date() - o.lastActivity;
                                    if (i > 1000 * this.adUnitSettings.refreshScreenIdleTime || o.tabbedOut)
                                        return o.tabbedOut ? this.statusMessage = 'Waiting for user to tab-in' : this.statusMessage = 'User is inactive for '.concat(i / 1000 - this.adUnitSettings.refreshScreenIdleTime, ' seconds'), this.visibility = 0, !1;
                                }
                                return this.statusMessage = 'Reloading', !0;
                            }
                        },
                        {
                            key: 'reload',
                            value: function () {
                                function o() {
                                    var e;
                                    d.status = 'RELOADING', d.width && d.height && (e = d.element.parentNode, d.restorableMin = {
                                        element: e,
                                        minWidth: e.style.minWidth,
                                        minHeight: e.style.minHeight
                                    }, e.style.minWidth = d.width + 'px', e.style.minHeight = d.height + 'px'), window.YLHH.bidder.log('Yieldlove', 'DEBUG', '[RELOAD] Starting auction for '.concat([d.reloadAdUnitCode])), window.YLHH.bidder.startAuction([d.reloadAdUnitCode], window.yieldlove_bbh, {
                                        refreshSdgSlotHandler: p,
                                        isVisibilityReload: !0
                                    });
                                }
                                var d = this;
                                if (void 0 !== this.reloadAdUnitCode)
                                    return o();
                                function e(e, t, i, n) {
                                    if (d.reloadGptSlot = n || d.gptSlot, d.reloadAdUnitSettings = i || d.adUnitSettings, t ? d.reloadAdUnitCode = t : (e && window.YLHH.bidder.log('Yieldlove', 'ERROR', e), window.YLHH.bidder.log('Yieldlove', 'DEBUG', '[RELOAD] Set reload ad unit code to ' + d.adUnitSettings.code), d.reloadAdUnitCode = d.adUnitSettings.code), void 0 === d.reloadAdUnitCode)
                                        throw new Error('Expected self.reloadAdUnitCode to be an adUnitCode');
                                    o();
                                }
                                this.adUnitSettings.refreshPlacementId ? function (e, t) {
                                    var i = e.adUnitSettings.refreshPlacementId, n = window.YLHH.bidder.getConfigOfPlacementId(i);
                                    if (!n)
                                        return t(new Error('Failed to create reload slot. '.concat(i, ' is not a valid placementId')));
                                    n.originalPlacementId = e.adUnitSettings.placementId;
                                    var o = e.gptSlot.getSlotElementId(), d = document.getElementById(o);
                                    if (!d)
                                        return t(new Error('Failed to create reload slot. '.concat(o, ' is not a valid divId')));
                                    var r = o + '-reload-' + i;
                                    if (g[r] = e, n.code.startsWith('/')) {
                                        var l = n.code;
                                        return d.innerHTML = '<div id=\''.concat(r, '\'></div>'), window.googletag = window.googletag || {}, window.googletag.cmd = window.googletag.cmd || [], window.googletag.cmd.push(function () {
                                            -1 === window.YLHH.bidder.activeUnits.indexOf(l) && (window.YLHH.bidder.activeUnits.push(l), window.YLHH.bidder.adUnits.push(n), window.YLHH.bidder.pbjs.addAdUnits(n), window.YLHH.bidder.adUnitsMap[l] = n);
                                            var e = window.googletag.defineSlot(l, n.sizes, r);
                                            e.addService(window.googletag.pubads()), window.YLHH.bidder.googletag.display(e), t(null, l, n, e);
                                        });
                                    }
                                    var s = e.adUnitSettings.code;
                                    n.code = s, n.aliases = e.adUnitSettings.aliases, -1 !== window.YLHH.bidder.activeUnits.indexOf(s) && (window.YLHH.bidder.activeUnits = window.YLHH.bidder.activeUnits.filter(function (e) {
                                        return e !== s;
                                    }), window.YLHH.bidder.adUnits = window.YLHH.bidder.adUnits.filter(function (e) {
                                        return e.code !== s;
                                    }), window.YLHH.bidder.pbjs.adUnits.filter(function (e) {
                                        return e.code === s;
                                    }).forEach(function (e) {
                                        try {
                                            window.YLHH.bidder.pbjs.removeAdUnit(e.code);
                                        } catch (e) {
                                            console.error(e);
                                        }
                                    }));
                                    window.YLHH.bidder.activeUnits.push(s), window.YLHH.bidder.adUnits.push(n), window.YLHH.bidder.pbjs.addAdUnits(n), window.YLHH.bidder.adUnitsMap[s] = n, t(null, s, n, e.gptSlot);
                                }(this, e) : e(null, this.adUnitSettings.code, this.adUnitSettings, this.gptSlot);
                            }
                        },
                        {
                            key: 'reloaded',
                            value: function () {
                                var e;
                                this.impressions = this.impressions + 1, this.resetVisibilityTime(), this.status = 'READY', 'getResponseInformation' in this.gptSlot ? (e = this.gptSlot.getResponseInformation(), this.lineItemId = e ? e.lineItemId : null) : this.lineItemId = null, this.restorableMin && this.restorableMin.element && (this.restorableMin.element.style.minWidth = this.restorableMin.minWidth, this.restorableMin.element.style.minHeight = this.restorableMin.minHeight, this.element = document.getElementById(this.gptSlot.getSlotElementId()), this.setVisibility(0));
                            }
                        }
                    ]) && n(e.prototype, t), i && n(e, i), l;
                }();
                function p(e) {
                    e.map(function (e) {
                        return window.YLHH.bidder.SDG.getCN().getPlacementByPosition(e);
                    }).filter(function (e) {
                        return !!e;
                    }).forEach(function (e) {
                        try {
                            window.YLHH.bidder.log('Yieldlove', 'INFO', '[RELOAD] Emitting SDG_SLOT_RELOAD_VISIBILITY: ', e), window.YLHH.bidder.SDG.getEventDispatcher().trigger('SDG_SLOT_RELOAD_VISIBILITY', e);
                        } catch (e) {
                            console.error(e);
                        }
                    });
                }
                function H(e, t, i) {
                    i && (t = i.reloadGptSlot || i.gptSlot || t);
                    var n, o = e.code, d = {};
                    if (i && i.hasOwnProperty('reloadAdUnitSettings') ? (d.yieldlove_pid = i.reloadAdUnitSettings.placementId, d.yieldlove_reload = 'pid:'.concat(i.adUnitSettings.placementId, '.reload:true'), d.yieldlove_meta_reload = 'pid:'.concat(i.adUnitSettings.placementId, '.reload:true'), d.yieldlove_reloads = (i.impressions + 1).toString(), d.yieldlove_reload_count = (i.impressions + 1).toString(), d.yieldlove_reloaded = 'true', d.yieldlove_is_reloaded = 'true', d.yieldlove_vis_reload = 'true') : i || y(e) ? (d.yieldlove_reloaded = 'false', d.yieldlove_is_reloaded = 'false') : (d.yieldlove_reloaded = 'never', d.yieldlove_is_reloaded = 'never'), window.YLHH.bidder.log('Yieldlove', 'INFO', '[RELOAD] Updating targeting of '.concat(o, ' from reload module'), d), window.SDG) {
                        var r, l = window.YLHH.bidder.SDG.getCN().getPlacementByPosition(o);
                        return l ? (Object.keys(d).forEach(function (e) {
                            var t = {};
                            t[e] = d[e], l.removeTargeting(e), l.setTargeting(t);
                        }), void (t && (r = t.getTargetingMap(), window.YLHH.bidder.log('Stroeer', 'DEBUG', '[RELOAD] Updating targeting of '.concat(o), r)))) : void 0;
                    }
                    t && (Object.keys(d).forEach(function (e) {
                        t.setTargeting(e, d[e]);
                    }), n = t.getTargetingMap(), window.YLHH.bidder.log('Yieldlove', 'DEBUG', '[RELOAD] Updating targeting of '.concat(o), n));
                }
                function y(e) {
                    return 0 < e.refreshInterval || 0 < e.refreshMinScreenTime;
                }
            }
        });
    }())
}